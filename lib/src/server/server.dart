// Copyright (c) 2015, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

/// Development server that compiles Dart to JS on the fly.

import 'dart:async';
import 'dart:convert';
import 'dart:io';

import 'package:analyzer/file_system/file_system.dart' show ResourceUriResolver;
import 'package:analyzer/file_system/memory_file_system.dart';
import 'package:analyzer/src/generated/engine.dart'
    show AnalysisContext, ChangeSet;
import 'package:analyzer/src/generated/error.dart';
import 'package:analyzer/src/generated/source.dart';
import 'package:logging/logging.dart' show Level, Logger, LogRecord;
import 'package:path/path.dart' as path;
import 'package:shelf/shelf.dart' as shelf;
import 'package:shelf/shelf_io.dart' as shelf;
import 'package:shelf_static/shelf_static.dart' as shelf_static;

import '../codegen/code_generator.dart' show CodeGenerator;
import '../codegen/html_codegen.dart' show generateEntryHtml;
import '../codegen/js_codegen.dart';
import '../report/html_reporter.dart' show HtmlReporter;
import '../analysis_context.dart';
import '../compiler.dart' show AbstractCompiler, createErrorReporter;
import '../info.dart'
    show AnalyzerMessage, CheckerResults, LibraryInfo, LibraryUnit;
import '../options.dart';
import '../report.dart';
import '../utils.dart';

import 'dependency_graph.dart';

/// Encapsulates the logic when the compiler is run as a development server.
class ServerCompiler extends AbstractCompiler {
  SourceNode _entryNode;
  List<LibraryInfo> _libraries = <LibraryInfo>[];
  final _generators = <CodeGenerator>[];
  bool _hashing;
  bool _failure = false;

  factory ServerCompiler(AnalysisContext context, CompilerOptions options,
      {AnalysisErrorListener reporter}) {
    var srcOpts = options.sourceOptions;
    var inputFiles = options.inputs;
    var inputUris = inputFiles.map((String inputFile) =>
        inputFile.startsWith('dart:') || inputFile.startsWith('package:')
            ? Uri.parse(inputFile)
            : new Uri.file(path.absolute(srcOpts.useImplicitHtml
                ? SourceResolverOptions.implicitHtmlFile
                : inputFile)));
    var graph = new SourceGraph(context, reporter, options);
    var entryNodes =
        inputUris.map((inputUri) => graph.nodeFromUri(inputUri)).toList();

    return new ServerCompiler._(context, options, reporter, graph, entryNodes);
  }

  ServerCompiler._(
      AnalysisContext context,
      CompilerOptions options,
      AnalysisErrorListener reporter,
      SourceGraph graph,
      List<SourceNode> entryNodes)
      : super(context, options, reporter) {
    _entryNode = entryNodes.length == 1
        ? entryNodes.first
        : new EntryNode(graph, new Uri.file(inputBaseDir), entryNodes);

    if (outputDir != null) {
      _generators.add(new JSGenerator(this));
    }
    // TODO(sigmund): refactor to support hashing of the dart output?
    _hashing = options.enableHashing && _generators.length == 1;
  }

  CheckerResults run() {
    var clock = new Stopwatch()..start();

    // TODO(sigmund): we are missing a couple failures here. The
    // dependency_graph now detects broken imports or unsupported features
    // like more than one script tag (see .severe messages in
    // dependency_graph.dart). Such failures should be reported back
    // here so we can mark failure=true in the CheckerResults.
    rebuild(_entryNode, _buildSource);
    clock.stop();
    var time = (clock.elapsedMilliseconds / 1000).toStringAsFixed(2);
    print('Compiled ${_libraries.length} libraries in ${time} s\n');
    _dumpInfoIfRequested();
    return new CheckerResults(
        _libraries, _failure || options.codegenOptions.forceCompile);
  }

  bool _buildSource(SourceNode node) {
    node.clearSummary();
    if (node is HtmlSourceNode) {
      _buildHtmlFile(node);
    } else if (node is DartSourceNode) {
      _buildDartLibrary(node);
    } else if (node is ResourceSourceNode) {
      _buildResourceFile(node);
    } else {
      assert(false); // should not get a build request on PartSourceNode
    }

    // TODO(sigmund): don't always return true.
    // Use summaries to determine when rebuilding is needed.
    return true;
  }

  String _linker(Uri mainUri, String loader, List<String> files) {
    var name = 'main.dart.js';

    String outputFile = path.join(outputDir, name);
    File file = new File(outputFile)
      ..createSync(recursive: true);
    file.writeAsStringSync('');

    for (var f in files) {
      var inputFile = path.join(outputDir, f);
      var content = new File(inputFile).readAsStringSync();
      file.writeAsStringSync(content, mode: FileMode.APPEND);
    }
    file.writeAsStringSync('$loader\n', mode: FileMode.APPEND);
    return '<script src="$name"></script>\n';
  }

  void _buildHtmlFile(HtmlSourceNode node) {
    if (outputDir == null) return;
    // TODO(vsm): Callback to link?
    var output = generateEntryHtml(node, this, _linker);
    if (output == null) {
      _failure = true;
      return;
    }

    var filepath =
        resourceOutputPath(node.uri, _entryNode.uri, options.runtimeDir);
    String outputFile = path.join(outputDir, filepath);
    new File(outputFile)
      ..createSync(recursive: true)
      ..writeAsStringSync(output);
  }

  void _buildResourceFile(ResourceSourceNode node) {
    // ResourceSourceNodes files that just need to be copied over to the output
    // location. These can be external dependencies or pieces of the
    // dev_compiler runtime.
    if (outputDir == null) return;
    var filepath =
        resourceOutputPath(node.uri, _entryNode.uri, options.runtimeDir);
    assert(filepath != null);
    filepath = path.join(outputDir, filepath);
    var dir = path.dirname(filepath);
    new Directory(dir).createSync(recursive: true);
    new File.fromUri(node.source.uri).copySync(filepath);
    if (_hashing) node.cachingHash = computeHashFromFile(filepath);
  }

  void _buildDartLibrary(DartSourceNode node) {
    print('Compiling ${node.uri}');
    var source = node.source;
    // TODO(sigmund): find out from analyzer team if there is a better way
    context.applyChanges(new ChangeSet()..changedSource(source));
    var entryUnit = context.resolveCompilationUnit2(source, source);
    var lib = entryUnit.element.enclosingElement;
    if (!options.checkSdk && lib.source.isInSystemLibrary) return;
    var current = node.info;
    if (current != null) {
      assert(current.library == lib);
    } else {
      node.info = current = new LibraryInfo(lib);
    }
    _libraries.add(current);

    var resolvedParts = node.parts
        .map((p) => context.resolveCompilationUnit2(p.source, source))
        .toList(growable: false);
    var libraryUnit = new LibraryUnit(entryUnit, resolvedParts);
    bool failureInLib = false;
    for (var unit in libraryUnit.libraryThenParts) {
      var unitSource = unit.element.source;
      // TODO(sigmund): integrate analyzer errors with static-info (issue #6).
      failureInLib = computeErrors(unitSource) || failureInLib;
    }
    if (failureInLib) {
      _failure = true;
      if (!options.codegenOptions.forceCompile) return;
    }

    for (var cg in _generators) {
      var hash = cg.generateLibrary(libraryUnit);
      if (_hashing) node.cachingHash = hash;
    }
  }

  void _runAgain() {
    var clock = new Stopwatch()..start();
    _libraries = <LibraryInfo>[];
    int changed = 0;

    // TODO(sigmund): propagate failures here (see TODO in run).
    rebuild(_entryNode, (n) {
      changed++;
      return _buildSource(n);
    });
    clock.stop();
    if (changed > 0) _dumpInfoIfRequested();
    var time = (clock.elapsedMilliseconds / 1000).toStringAsFixed(2);
    print("Recompiled ${changed} libraries in ${time} s\n");
  }

  _dumpInfoIfRequested() {
    var reporter = this.reporter;
    if (reporter is HtmlReporter) {
      reporter.finish(options);
    } else if (reporter is SummaryReporter) {
      var result = reporter.result;
      if (outputDir != null) {
        var filepath = path.join(outputDir, 'messages.json');
        new File(filepath).writeAsStringSync(JSON.encode(result.toJsonMap()));
      } else {
        print(summaryToString(result));
      }
    }
  }
}

class DevServer {
  final ServerCompiler compiler;
  final String outDir;
  final String host;
  final int port;
  final String _entryPath;

  factory DevServer(CompilerOptions options) {
    assert(options.inputs.isNotEmpty);

    var fileResolvers = createFileResolvers(options.sourceOptions);
    if (options.sourceOptions.useImplicitHtml) {
      fileResolvers.insert(0, _createImplicitEntryResolver(options.inputs[0]));
    }

    var context = createAnalysisContextWithSources(options.sourceOptions,
        fileResolvers: fileResolvers);

    var entryPath = path.basename(options.inputs[0]);
    var extension = path.extension(entryPath);
    if (extension != '.html' && !options.sourceOptions.useImplicitHtml) {
      print('error: devc in server mode requires an HTML or Dart entry point.');
      exit(1);
    }

    // TODO(sigmund): allow running without a dir, but keep output in memory?
    var outDir = options.codegenOptions.outputDir;
    if (outDir == null) {
      print('error: devc in server mode also requires specifying and '
          'output location for generated code.');
      exit(1);
    }
    var port = options.port;
    var host = options.host;
    var reporter = createErrorReporter(context, options);
    var compiler = new ServerCompiler(context, options, reporter: reporter);
    return new DevServer._(compiler, outDir, host, port, entryPath);
  }

  DevServer._(ServerCompiler compiler, this.outDir, this.host, this.port,
      String entryPath)
      : this.compiler = compiler,
        // TODO(jmesserly): this logic is duplicated in a few places
        this._entryPath = compiler.options.sourceOptions.useImplicitHtml
            ? SourceResolverOptions.implicitHtmlFile
            : entryPath;

  Future start() async {
    // Create output directory if needed. shelf_static will fail otherwise.
    var out = new Directory(outDir);
    if (!await out.exists()) await out.create(recursive: true);

    var generatedHandler =
        shelf_static.createStaticHandler(outDir, defaultDocument: _entryPath);
    shelf.Handler sourceHandler;
    if (compiler.options.sourceOptions.useMultiPackage) {
      // TODO(vsm): Why is inputBaseDir broken here?
      var originalHandler = shelf_static.createStaticHandler(Directory.current.path,
          serveFilesOutsidePath: true);
      sourceHandler = (shelf.Request request) {
        var requestedUri = request.requestedUri;
        var requestedPath = requestedUri.path;
        String lookupPath;
        if (requestedPath.startsWith('/packages/')) {
          var parts = requestedPath.substring(10).split('/');
          lookupPath = parts[0].replaceAll('.', '/') + '/lib/' + parts.sublist(1).join('/');
        } else {
          lookupPath = path.relative(compiler.inputBaseDir) + '/' + path.basename(requestedPath);
        }
        for (var packagePath in compiler.options.sourceOptions.packagePaths) {
          var mapped = '/' + packagePath + lookupPath;
          var mappedUri = requestedUri.resolve(mapped);
          print('Searching for $mappedUri');
          var mappedRequest = new shelf.Request(request.method, mappedUri);
          var response = originalHandler(mappedRequest);
          if (response.statusCode != 404) {
            print('Found $mappedUri');
            return response;
          }
          print('Did not find $mappedUri');
        }
        return new shelf.Response.notFound(requestedUri.toString());
      };
    } else { 
      sourceHandler = shelf_static.createStaticHandler(compiler.inputBaseDir,
          serveFilesOutsidePath: true);
   }

    // TODO(vsm): Is there a better builtin way to compose these handlers?
    var topLevelHandler = (shelf.Request request) {
      // Prefer generated code
      var response = generatedHandler(request);
      if (response.statusCode == 404) {
        // Fall back on original sources
        response = sourceHandler(request);
      }
      return response;
    };

    var handler = const shelf.Pipeline()
        .addMiddleware(rebuildAndCache)
        .addHandler(topLevelHandler);
    await shelf.serve(handler, host, port);
    // Give the compiler a head start. This is not needed for correctness,
    // but will likely speed up the first load. Regardless of whether compile
    // succeeds we should still start the server.
    compiler.run();
    print('Serving $_entryPath at http://$host:$port/');
    // Server has started so this future will complete.
  }

  shelf.Handler rebuildAndCache(shelf.Handler handler) => (request) {
        // Trigger recompile only when requesting the HTML page.
        var segments = request.url.pathSegments;
        bool isEntryPage = segments.length == 0 || segments[0] == _entryPath;
        if (isEntryPage) {
          compiler._runAgain();
          print('Serving $_entryPath at http://$host:$port/');
        }

        // To help browsers cache resources that don't change, we serve these
        // resources by adding a query parameter containing their hash:
        //    /{path-to-file.js}?____cached={hash}
        var hash = request.url.queryParameters['____cached'];
        var response = handler(request);
        var policy = hash != null ? 'max-age=${24 * 60 * 60}' : 'no-cache';
        var headers = {'cache-control': policy};
        if (hash != null) {
          // Note: the cache-control header should be enough, but this doesn't
          // hurt and can help renew the policy after it expires.
          headers['ETag'] = hash;
        }
        return response.change(headers: headers);
      };
}

UriResolver _createImplicitEntryResolver(String entryPath) {
  var entry = path.toUri(path.absolute(SourceResolverOptions.implicitHtmlFile));
  var src = path.toUri(path.absolute(entryPath));
  var provider = new MemoryResourceProvider();
  provider.newFile(
      entry.path, '<body><script type="application/dart" src="$src"></script>');
  return new _ExistingSourceUriResolver(new ResourceUriResolver(provider));
}

/// A UriResolver that continues to the next one if it fails to find an existing
/// source file. This is unlike normal URI resolvers, that always return
/// something, even if it is a non-existing file.
class _ExistingSourceUriResolver implements UriResolver {
  final UriResolver resolver;
  _ExistingSourceUriResolver(this.resolver);

  Source resolveAbsolute(Uri uri, [Uri actualUri]) {
    var src = resolver.resolveAbsolute(uri, actualUri);
    return src.exists() ? src : null;
  }

  Uri restoreAbsolute(Source source) => resolver.restoreAbsolute(source);
}

final _log = new Logger('dev_compiler.src.server');
final _earlyErrorResult = new CheckerResults(const [], true);
