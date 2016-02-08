// Copyright (c) 2016, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

library dev_compiler.src.transformer.error_listener;

import 'dart:math';

import 'package:analyzer/analyzer.dart'
    show AnalysisError, ErrorSeverity, AnalysisErrorListener;
import 'package:barback/barback.dart' show TransformLogger, AssetId;
import 'package:collection/collection.dart';
import 'package:source_span/source_span.dart' show SourceSpan, SourceLocation;

import 'uri_resolver.dart';

typedef void _LoggingFunction(String message, {AssetId asset, SourceSpan span});

class TransformAnalysisErrorListener extends AnalysisErrorListener {
  final TransformLogger _logger;
  LocationHelper _lastLocationHelper;
  TransformAnalysisErrorListener(this._logger);

  /// Get a location helper for the provided [content] with [uri].
  /// Multiple subsequent calls with the same [uri] will return the same cached
  /// instance, to accommodate the use-case of a file having many messages.
  LocationHelper _getLocationHelper(String content, String uri) {
    if (_lastLocationHelper?.uri != uri) {
      _lastLocationHelper = new LocationHelper(content, uri);
    }
    return _lastLocationHelper;
  }

  @override
  void onError(AnalysisError error) {
    var content = error.source.contents.data;
    var sourceUrl = error.source.uri.toString();
    var locationHelper = _getLocationHelper(content, sourceUrl);
    SourceLocation makeLocation(int offset) {
      var location = locationHelper.getLocation(offset);
      return new SourceLocation(offset,
          sourceUrl: sourceUrl, line: location.line, column: location.column);
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

/// A simple source location.
class Location {
  final int line;
  final int column;
  Location(this.line, this.column);

  operator==(other) =>
      other is Location && line == other.line && column == other.column;
  get hashCode => line.hashCode ^ column.hashCode;
}

// TODO(ochafik): Drop when https://github.com/dart-lang/sdk/issues/25717 fixed.
/// Helper that computes line & column from an offset in log time.
class LocationHelper {
  final String _content;
  final String uri;
  final _lineOffsets = <int>[];

  LocationHelper(String content, this.uri) : _content = content {
    _lineOffsets.add(0);
    for (int i = 0, length = content.length; i < length; i++) {
      switch (content[i]) {
        case '\n':
          // Consume any trailing carriage return.
          while (i < length - 1 && content[i + 1] == '\r') {
            i++;
          }
          _lineOffsets.add(i + 1);
          break;
      }
    }
  }

  /// Gets the location that corresponds to the [offset] in this helper's
  /// [_content] string.
  Location getLocation(int offset) {
    var lineIndex = lowerBound(_lineOffsets, offset);
    lineIndex = min(lineIndex, _lineOffsets.length - 1);
    if (_lineOffsets[lineIndex] > offset) lineIndex--;

    int line = lineIndex + 1;
    int column = offset - _lineOffsets[lineIndex] + 1;
    return new Location(line, column);
  }
}
