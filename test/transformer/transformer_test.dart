library dev_compiler.test.transformer.transformer_test;

import 'package:barback/barback.dart' show BarbackMode, BarbackSettings;
import 'package:dev_compiler/transformer.dart';
import 'package:test/test.dart';
import 'package:transformer_test/utils.dart';
import 'package:dev_compiler/src/compiler.dart' show defaultRuntimeFiles;

makePhases([Map config = const {}]) => [[
  new DDCTransformer.asPlugin(new BarbackSettings(config, BarbackMode.RELEASE))
]];

final Map<String, String> runtimeInput =
    new Map.fromIterable(defaultRuntimeFiles,
        key: (f) => 'dev_compiler|lib/runtime/$f',
        value: (_) => '');

Map<String, String> createInput(Map<String, String> input) =>
    {}..addAll(input)..addAll(runtimeInput);

void main() {
  group('$DDCTransformer', () {
    testPhases(r'compiles simple code', makePhases(), createInput({
      'foo|Foo.dart': r'''
        class Foo {}
      '''
    }), {
      'foo|Foo.js': r'''
        class Foo {}
      '''
    });
  });
}
