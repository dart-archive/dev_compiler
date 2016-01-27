// Copyright (c) 2015, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

library dev_compiler.src.transformer.asset_universe;

import 'dart:async';

import 'package:analyzer/analyzer.dart' show AstNode, ExportDirective, ImportDirective, PartDirective, parseDirectives;
import 'package:barback/barback.dart' show Asset, AssetId, TransformLogger;

import 'asset_source.dart';
import 'uri_resolver.dart' show assetIdToUri, resolveAssetId;

/// Set of assets sources available for analysis / compilation.
class AssetUniverse {
  final _assetCache = <AssetId, AssetSource>{};

  Iterable<AssetId> get assetIds => _assetCache.keys;

  AssetSource getAssetSource(AssetId id) {
    var source = _assetCache[id];
    if (source == null) {
      throw new ArgumentError(id.toString());
    }
    return source;
  }

  /// Recursively loads [asset] and all its transitive dependencies.
  Future scanSources(AssetId id, Future<Asset> getInput(AssetId id)) async {
    if (_assetCache.containsKey(id)) return;

    var asset = await getInput(id);
    var contents = await asset.readAsString();
    _assetCache[id] =
        new AssetSource(Uri.parse(assetIdToUri(id)), asset, contents);

    var deps = _getDependentAssetIds(id, contents);
    await Future.wait(deps.map((depId) => scanSources(depId, getInput)));
  }

  Iterable<AssetId> _getDependentAssetIds(AssetId id, String contents) sync* {
    for (var d in parseDirectives(contents, suppressErrors: true).directives) {
      if (d is ImportDirective || d is PartDirective || d is ExportDirective) {
        var uri = d.uri.stringValue;
        if (uri == null || uri == '') continue;

        var assetId = resolveAssetId(Uri.parse(uri), fromAssetId: id);
        if (assetId != null) yield assetId;
      }
    }
  }
}
