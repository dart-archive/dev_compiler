// Copyright (c) 2016, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'dart:io';
import 'package:webdriver/webdriver.dart' show By, Capabilities, WebDriver;
import 'package:test/test.dart';
import 'dart:async';

import 'child_server_process.dart';

Future<ChildServerProcess> installTestServer(
    Future<ChildServerProcess> builder(), {bool forAll : false}) {
  var completer = new Completer<ChildServerProcess>();
  var server;
  (forAll ? setUp : setUpAll)(() async {
    server = await builder();
    completer.complete(server);
  });
  (forAll ? tearDown : tearDownAll)(() async {
    await server?.kill();
  });
  return completer.future;
}

Future<ChildServerProcess> setUpSelenium() {
  var completer = new Completer<ChildServerProcess>();
  var selenium;
  setUp(() async {
    selenium = await _startSelenium();
    completer.complete(selenium);
  });
  tearDown(() async {
    await selenium?.kill();
  });
  return completer.future;
}

Future<ChildServerProcess> setUpPubServe(Directory directory) {
  var completer = new Completer<ChildServerProcess>();
  var pubServe;
  setUp(() async {
    pubServe = await _startPubServe(directory);
    completer.complete(pubServe);
  });
  tearDown(() async {
    await pubServe?.kill();
  });
  return completer.future;
}

main(List<String> args) {
  group('e2e tests', () {
    WebDriver webdriver;
    var selenium = installTestServer(_startSelenium, forAll: true);
    var pubServe = installTestServer(
        () => _startPubServe(new Directory('test/transformer/hello_app')));

    setUp(() async {
      var seleniumUri = (await selenium).httpUri;
      webdriver = await WebDriver.createDriver(
          url: '$seleniumUri/wd/hub',
          desiredCapabilities: {
            'browserName': 'chrome',
            // 'chromeOptions': {
            //   'binary': Platform.environment['DARTIUM_BIN'],
            //   'args': ['--js-flags=--harmony'],
            // },
            'loggingPrefs': {'browser': 'ALL'}
          });
    });

    tearDown(() async {
      await webdriver?.quit();
    });

    group('DDC-transformed hello world app', () {
      ChildServerProcess pubServe;

      setUp(() async {
        pubServe = await _startPubServe(new Directory('test/transformer/hello_app'));
      });

      tearDown(() => pubServe?.kill());

      test('displays well', () async {
        await webdriver.get('${pubServe.httpUri}/hello_app/web/');
        var body = await webdriver.findElement(const By.tagName('body'));
        expect(await body.text, "'Hello, World!'");
      });
    });
  });
}

Future<ChildServerProcess> _startPubServe(Directory directory) async {
  assert(directory.existsSync());
  var result = await Process.run(
      'pub', ['get'], workingDirectory: directory.path);
  if (result.exitCode != 0) {
    throw new StateError('Pub get failed: ${result.stderr}');
  }
  return ChildServerProcess.build(
      (host, port) => Process.start(
          'pub', ['serve', '--hostname=$host', '--port=$port'],
          workingDirectory: directory.path),
      defaultPort: 8080);
}

Future<ChildServerProcess> _startSelenium() =>
    ChildServerProcess.build(
        (host, port) => Process.start(
            'node', ['./node_modules/.bin/webdriver-manager', 'start', '--seleniumPort=$port']),
        defaultPort: 4444);
