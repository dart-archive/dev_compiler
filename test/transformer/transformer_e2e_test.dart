// Copyright (c) 2016, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'dart:io';
import 'package:webdriver/webdriver.dart' show By, Capabilities, WebDriver;
import 'package:test/test.dart';
import 'dart:async';

import 'child_server_process.dart';

main(List<String> args) {
  group('DDC transformer in pub serve', () {
    WebDriver webdriver;
    ChildServerProcess selenium;
    ChildServerProcess pubServe;

    setUp(() async {
      // Start pub serve straight away and don't wait for it yet.
      var pubServeFut =
          _startPubServe('test/transformer/hello_app', ['--verbose']);

      // Start selenium and wait for it to be ready.
      selenium = await _startSelenium();
      var seleniumUrl = '${selenium.httpUri}/wd/hub';

      webdriver = await WebDriver.createDriver(
          url: seleniumUrl,
          desiredCapabilities: {
            'browserName': 'chrome',
            // 'chromeOptions': {
            //   'binary': Platform.environment['DARTIUM_BIN'],
            //   'args': ['--js-flags=--harmony'],
            // },
            'loggingPrefs': {'browser': 'ALL'}
          });
      pubServe = await pubServeFut;
    });

    tearDown(() async {
      selenium?.process?.kill();
      pubServe?.process?.kill();
      await webdriver?.quit();
    });

    test('serves functional hello world app', () async {
      await webdriver.get(
          '${pubServe.httpUri}/hello_app/web/');

      var body = await webdriver.findElement(const By.tagName('body'));
      expect(await body.text, "'Hello, World!'");
    });
  });
}

Future<ChildServerProcess> _startPubServe(
    String directory, [List<String> args = const[]]) async {
  assert(new Directory(directory).existsSync());
  var result = await Process.run(
      'pub', ['get'], workingDirectory: directory);
  if (result.exitCode != 0) {
    throw new StateError('Pub get failed: ${result.stderr}');
  }
  return ChildServerProcess.build(
      (host, port) => Process.start(
          'pub', ['serve', '--hostname=$host', '--port=$port']..addAll(args),
          mode: ProcessStartMode.DETACHED_WITH_STDIO,
          workingDirectory: directory),
      defaultPort: 8080);
}

Future<ChildServerProcess> _startSelenium() =>
    ChildServerProcess.build(
        (host, port) => Process.start(
            'node', [
                './node_modules/.bin/webdriver-manager',
                'start',
                '--seleniumPort=$port'
            ], mode: ProcessStartMode.DETACHED_WITH_STDIO),
        defaultPort: 4444);
