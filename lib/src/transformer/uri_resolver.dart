// Copyright (c) 2015, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

library dev_compiler.src.transformer.uri_resolver;

import 'package:analyzer/src/generated/sdk.dart' show DartSdk;
import 'package:analyzer/src/generated/source.dart' show Source, SourceFactory;
import 'package:barback/barback.dart' show AssetId;
import 'package:code_transformers/resolver.dart' show DartUriResolverProxy, DirectoryBasedDartSdkProxy;
import 'package:cli_util/cli_util.dart' as cli_util;
import 'package:path/path.dart' as path;

import 'asset_source.dart';

typedef AssetSource AssetSourceGetter(AssetId id);

assetIdToUri(AssetId id) {
  var p = id.path;
  if (p.startsWith('lib/')) p = p.substring('lib/'.length);
  // Note: if the file is under web/, then we leave it as it is: resolveAssetId
  // does the inverse transform.
  return 'package:${id.package}/$p';
}

AssetId resolveAssetId(Uri uri, {AssetId fromAssetId}) {
  if (uri.scheme == 'dart') {
    return null;
  } else if (uri.scheme == 'package') {
    //if (uri.path.startsWith('web'))
    var segments = new List.from(uri.pathSegments);
    var package = segments[0];
    if (segments[1] == 'web') {
      return new AssetId(package, segments.skip(1).join(path.separator));
    } else {
      segments[0] = 'lib';
      return new AssetId(package, segments.join(path.separator));
    }
  } else if ((uri.scheme ?? '') == '') {
    if (fromAssetId == null) {
      throw new ArgumentError('No asset to resolve relative URI from!');
    }
    return new AssetId(fromAssetId.package,
        path.normalize(path.join(path.dirname(fromAssetId.path), uri.path)));
  } else {
    throw new ArgumentError('Unexpected uri: $uri (uri.scheme = ${uri.scheme})');
  }
}

class DDCUriResolver extends DartUriResolverProxy {
  AssetSourceGetter _getAssetSource;

  DDCUriResolver(DartSdk sdk, this._getAssetSource) : super(sdk);

  @override
  Source resolveAbsolute(Uri uri, [Uri actualUri]) {
    return uri.scheme == 'package'
        ? _getAssetSource(resolveAssetId(uri))
        : super.resolveAbsolute(uri, actualUri);
  }
}

String get dartSdkDirectory => cli_util.getSdkDir()?.path;

SourceFactory createSourceFactory(AssetSourceGetter getAssetSource) {
  var sdk = new DirectoryBasedDartSdkProxy(dartSdkDirectory);
  return new SourceFactory([
    // new DartUriResolverProxy(sdk),
    new DDCUriResolver(sdk, getAssetSource)
  ]);
}
