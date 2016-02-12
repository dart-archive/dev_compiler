// Copyright (c) 2016, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'dart:async';
import 'dart:io';

@Timeout(const Duration(seconds: 60))
import 'package:test/test.dart';
import 'package:webdriver/webdriver.dart' show By, Capabilities, WebDriver;

import 'child_server_process.dart';

main() {
  group('DDC transformer in pub serve', () {
    WebDriver webdriver;
    ChildServerProcess selenium;
    ChildServerProcess pubServe;

    setUp(() async {
      // Start pub serve straight away and don't wait for it yet.
      var pubServeFut =
          _startPubServe('test/transformer/hello_app', ['--verbose']);

      // Start selenium and wait for it to be ready.
      stderr.writeln("Awaiting Selenium...");
      selenium = await _startSelenium();
      stderr.writeln("Got Selenium!");
      var seleniumUrl = '${selenium.httpUri}/wd/hub';

      stderr.writeln("Awaiting WebDriver...");
      var capabilities = {
        'browserName': 'chrome',
        'loggingPrefs': {'browser': 'ALL'}
      };
      var chromeBin = Platform.environment['CHROME_CANARY_BIN'];
      if (chromeBin != null) {
        capabilities['chromeOptions'] = {
          'binary': chromeBin,
          'args': ['--js-flags=--harmony'],
        };
      }
      webdriver = await WebDriver.createDriver(
          url: seleniumUrl, desiredCapabilities: capabilities);
      stderr.writeln("Got WebDriver!");

      stderr.writeln("Awaiting Pub Serve...");
      pubServe = await pubServeFut;
      stderr.writeln("Got Pub Serve!");
    });

    tearDown(() async {
      selenium?.process?.kill();
      pubServe?.process?.kill();
      await webdriver?.quit();
    });

    test('serves functional hello world app', () async {
      await webdriver.get('${pubServe.httpUri}/hello_app/web/');

      var body = await webdriver.findElement(const By.tagName('body'));
      expect(await body.text, "'Hello, World!'");
    });
  });
}

Future<ChildServerProcess> _startPubServe(String directory,
    [List<String> args = const []]) async {
  assert(new Directory(directory).existsSync());
  var result = await Process.run('pub', ['get'], workingDirectory: directory);
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

Future<ChildServerProcess> _startSelenium() => ChildServerProcess.build(
    (host, port) => Process.start(
        'node',
        [
          './node_modules/.bin/webdriver-manager',
          'start',
          '--seleniumPort=$port'
        ],
        mode: ProcessStartMode.DETACHED_WITH_STDIO),
    defaultPort: 4444);
