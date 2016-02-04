// Copyright (c) 2016, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

library dev_compiler.src.transformer.error_listener;

import 'package:barback/barback.dart' show TransformLogger, AssetId;
import 'package:analyzer/analyzer.dart'
    show AnalysisError, ErrorSeverity, AnalysisErrorListener;
import 'package:source_span/source_span.dart' show SourceSpan, SourceLocation;

import 'uri_resolver.dart';

typedef void _LoggingFunction(String message, {AssetId asset, SourceSpan span});

class TransformAnalysisErrorListener extends AnalysisErrorListener {
  TransformLogger _logger;
  TransformAnalysisErrorListener(this._logger);

  @override
  void onError(AnalysisError error) {
    var content = error.source.contents.data;
    var sourceUrl = error.source.uri.toString();
    SourceLocation makeLocation(int offset) {
      return _getLineAndColumn(content, offset, (line, column) {
        return new SourceLocation(
            offset, sourceUrl: sourceUrl, line: line, column: column);
      });
    }
    int start = error.offset;
    int end = error.offset + error.length;
    var assetId = resolveAssetId(error.source.uri);
    var span = new SourceSpan(
        makeLocation(start), makeLocation(end), content.substring(start, end));

    var logger = _getLogger(error.errorCode.errorSeverity);
    logger(error.message, asset: assetId, span: span);
  }

  _LoggingFunction _getLogger(ErrorSeverity severity) {
    switch (severity) {
      case ErrorSeverity.ERROR:
        return _logger.error;
      case ErrorSeverity.WARNING:
        return _logger.warning;
      case ErrorSeverity.INFO:
        return _logger.info;
      case ErrorSeverity.NONE:
        return _logger.fine;
      default:
        throw new ArgumentError.value(severity, "severity", "not supported");
    }
  }
}

dynamic/*=T*/ _getLineAndColumn/*<T>*/(
    String content, int offset, dynamic/*=T*/ callback(int line, int column)) {
  int line = 1;
  int column = 1;
  for (int i = 0; i < offset; i++) {
    switch (content[i]) {
      case '\n':
        line++;
        column = 1;
        break;
      case '\r':
        break;
      default:
        column++;
        break;
    }
  }
  return callback(line, column);
}
