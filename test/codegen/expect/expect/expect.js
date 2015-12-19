dart_library.library('expect/expect', null, /* Imports */[
  'dart/_runtime',
  'dart/core'
], /* Lazy imports */[
], function(exports, dart, core) {
  'use strict';
  let dartx = dart.dartx;
  class Expect extends core.Object {
    static _truncateString(string, start, end, length) {
      if (dart.notNull(end) - dart.notNull(start) > dart.notNull(length)) {
        end = dart.notNull(start) + dart.notNull(length);
      } else if (dart.notNull(end) - dart.notNull(start) < dart.notNull(length)) {
        let overflow = dart.notNull(length) - (dart.notNull(end) - dart.notNull(start));
        if (dart.notNull(overflow) > 10) overflow = 10;
        start = dart.notNull(start) - ((dart.notNull(overflow) + 1) / 2)[dartx.truncate]();
        end = dart.notNull(end) + (dart.notNull(overflow) / 2)[dartx.truncate]();
        if (dart.notNull(start) < 0) start = 0;
        if (dart.notNull(end) > dart.notNull(string[dartx.length])) end = string[dartx.length];
      }
      if (start == 0 && end == string[dartx.length]) return string;
      let buf = new core.StringBuffer();
      if (dart.notNull(start) > 0) buf.write("...");
      for (let i = start; dart.notNull(i) < dart.notNull(end); i = dart.notNull(i) + 1) {
        let code = string[dartx.codeUnitAt](i);
        if (dart.notNull(code) < 32) {
          buf.write("\\x");
          buf.write("0123456789abcdef"[dartx.get]((dart.notNull(code) / 16)[dartx.truncate]()));
          buf.write("0123456789abcdef"[dartx.get](dart.notNull(code) % 16));
        } else {
          buf.writeCharCode(string[dartx.codeUnitAt](i));
        }
      }
      if (dart.notNull(end) < dart.notNull(string[dartx.length])) buf.write("...");
      return dart.toString(buf);
    }
    static _stringDifference(expected, actual) {
      if (dart.notNull(expected[dartx.length]) < 20 && dart.notNull(actual[dartx.length]) < 20) return null;
      for (let i = 0; dart.notNull(i) < dart.notNull(expected[dartx.length]) && dart.notNull(i) < dart.notNull(actual[dartx.length]); i = dart.notNull(i) + 1) {
        if (expected[dartx.codeUnitAt](i) != actual[dartx.codeUnitAt](i)) {
          let start = i;
          i = dart.notNull(i) + 1;
          while (dart.notNull(i) < dart.notNull(expected[dartx.length]) && dart.notNull(i) < dart.notNull(actual[dartx.length])) {
            if (expected[dartx.codeUnitAt](i) == actual[dartx.codeUnitAt](i)) break;
            i = dart.notNull(i) + 1;
          }
          let end = i;
          let truncExpected = Expect._truncateString(expected, start, end, 20);
          let truncActual = Expect._truncateString(actual, start, end, 20);
          return `at index ${start}: Expected <${truncExpected}>, ` + `Found: <${truncActual}>`;
        }
      }
      return null;
    }
    static equals(expected, actual, reason) {
      if (reason === void 0) reason = null;
      if (dart.equals(expected, actual)) return;
      let msg = Expect._getMessage(reason);
      if (typeof expected == 'string' && typeof actual == 'string') {
        let stringDifference = Expect._stringDifference(dart.as(expected, core.String), dart.as(actual, core.String));
        if (stringDifference != null) {
          Expect._fail(`Expect.equals(${stringDifference}${msg}) fails.`);
        }
      }
      Expect._fail(`Expect.equals(expected: <${expected}>, actual: <${actual}>${msg}) fails.`);
    }
    static isTrue(actual, reason) {
      if (reason === void 0) reason = null;
      if (dart.notNull(_identical(actual, true))) return;
      let msg = Expect._getMessage(reason);
      Expect._fail(`Expect.isTrue(${actual}${msg}) fails.`);
    }
    static isFalse(actual, reason) {
      if (reason === void 0) reason = null;
      if (dart.notNull(_identical(actual, false))) return;
      let msg = Expect._getMessage(reason);
      Expect._fail(`Expect.isFalse(${actual}${msg}) fails.`);
    }
    static isNull(actual, reason) {
      if (reason === void 0) reason = null;
      if (null == actual) return;
      let msg = Expect._getMessage(reason);
      Expect._fail(`Expect.isNull(actual: <${actual}>${msg}) fails.`);
    }
    static isNotNull(actual, reason) {
      if (reason === void 0) reason = null;
      if (null != actual) return;
      let msg = Expect._getMessage(reason);
      Expect._fail(`Expect.isNotNull(actual: <${actual}>${msg}) fails.`);
    }
    static identical(expected, actual, reason) {
      if (reason === void 0) reason = null;
      if (dart.notNull(_identical(expected, actual))) return;
      let msg = Expect._getMessage(reason);
      Expect._fail(`Expect.identical(expected: <${expected}>, actual: <${actual}>${msg}) ` + "fails.");
    }
    static fail(msg) {
      Expect._fail(`Expect.fail('${msg}')`);
    }
    static approxEquals(expected, actual, tolerance, reason) {
      if (tolerance === void 0) tolerance = null;
      if (reason === void 0) reason = null;
      if (tolerance == null) {
        tolerance = (dart.notNull(expected) / 10000.0)[dartx.abs]();
      }
      if (dart.notNull((dart.notNull(expected) - dart.notNull(actual))[dartx.abs]()) <= dart.notNull(tolerance)) return;
      let msg = Expect._getMessage(reason);
      Expect._fail(`Expect.approxEquals(expected:<${expected}>, actual:<${actual}>, ` + `tolerance:<${tolerance}>${msg}) fails`);
    }
    static notEquals(unexpected, actual, reason) {
      if (reason === void 0) reason = null;
      if (!dart.equals(unexpected, actual)) return;
      let msg = Expect._getMessage(reason);
      Expect._fail(`Expect.notEquals(unexpected: <${unexpected}>, actual:<${actual}>${msg}) ` + "fails.");
    }
    static listEquals(expected, actual, reason) {
      if (reason === void 0) reason = null;
      let msg = Expect._getMessage(reason);
      let n = dart.notNull(expected[dartx.length]) < dart.notNull(actual[dartx.length]) ? expected[dartx.length] : actual[dartx.length];
      for (let i = 0; dart.notNull(i) < dart.notNull(n); i = dart.notNull(i) + 1) {
        if (!dart.equals(expected[dartx.get](i), actual[dartx.get](i))) {
          Expect._fail(`Expect.listEquals(at index ${i}, ` + `expected: <${expected[dartx.get](i)}>, actual: <${actual[dartx.get](i)}>${msg}) fails`);
        }
      }
      if (expected[dartx.length] != actual[dartx.length]) {
        Expect._fail('Expect.listEquals(list length, ' + `expected: <${expected[dartx.length]}>, actual: <${actual[dartx.length]}>${msg}) ` + 'fails: Next element <' + `${dart.notNull(expected[dartx.length]) > dart.notNull(n) ? expected[dartx.get](n) : actual[dartx.get](n)}>`);
      }
    }
    static mapEquals(expected, actual, reason) {
      if (reason === void 0) reason = null;
      let msg = Expect._getMessage(reason);
      for (let key of expected.keys) {
        if (!dart.notNull(actual.containsKey(key))) {
          Expect._fail(`Expect.mapEquals(missing expected key: <${key}>${msg}) fails`);
        }
        Expect.equals(expected.get(key), actual.get(key));
      }
      for (let key of actual.keys) {
        if (!dart.notNull(expected.containsKey(key))) {
          Expect._fail(`Expect.mapEquals(unexpected key: <${key}>${msg}) fails`);
        }
      }
    }
    static stringEquals(expected, actual, reason) {
      if (reason === void 0) reason = null;
      if (expected == actual) return;
      let msg = Expect._getMessage(reason);
      let defaultMessage = `Expect.stringEquals(expected: <${expected}>", <${actual}>${msg}) fails`;
      if (expected == null || actual == null) {
        Expect._fail(`${defaultMessage}`);
      }
      let left = 0;
      let right = 0;
      let eLen = expected[dartx.length];
      let aLen = actual[dartx.length];
      while (true) {
        if (left == eLen || left == aLen || expected[dartx.get](left) != actual[dartx.get](left)) {
          break;
        }
        left = dart.notNull(left) + 1;
      }
      let eRem = dart.notNull(eLen) - dart.notNull(left);
      let aRem = dart.notNull(aLen) - dart.notNull(left);
      while (true) {
        if (right == eRem || right == aRem || expected[dartx.get](dart.notNull(eLen) - dart.notNull(right) - 1) != actual[dartx.get](dart.notNull(aLen) - dart.notNull(right) - 1)) {
          break;
        }
        right = dart.notNull(right) + 1;
      }
      let leftSnippet = expected[dartx.substring](dart.notNull(left) < 10 ? 0 : dart.notNull(left) - 10, left);
      let rightSnippetLength = dart.notNull(right) < 10 ? right : 10;
      let rightSnippet = expected[dartx.substring](dart.notNull(eLen) - dart.notNull(right), dart.notNull(eLen) - dart.notNull(right) + dart.notNull(rightSnippetLength));
      let eSnippet = expected[dartx.substring](left, dart.notNull(eLen) - dart.notNull(right));
      let aSnippet = actual[dartx.substring](left, dart.notNull(aLen) - dart.notNull(right));
      if (dart.notNull(eSnippet[dartx.length]) > 43) {
        eSnippet = dart.notNull(eSnippet[dartx.substring](0, 20)) + "..." + dart.notNull(eSnippet[dartx.substring](dart.notNull(eSnippet[dartx.length]) - 20));
      }
      if (dart.notNull(aSnippet[dartx.length]) > 43) {
        aSnippet = dart.notNull(aSnippet[dartx.substring](0, 20)) + "..." + dart.notNull(aSnippet[dartx.substring](dart.notNull(aSnippet[dartx.length]) - 20));
      }
      let leftLead = "...";
      let rightTail = "...";
      if (dart.notNull(left) <= 10) leftLead = "";
      if (dart.notNull(right) <= 10) rightTail = "";
      let diff = `\nDiff (${left}..${dart.notNull(eLen) - dart.notNull(right)}/${dart.notNull(aLen) - dart.notNull(right)}):\n` + `${leftLead}${leftSnippet}[ ${eSnippet} ]${rightSnippet}${rightTail}\n` + `${leftLead}${leftSnippet}[ ${aSnippet} ]${rightSnippet}${rightTail}`;
      Expect._fail(`${defaultMessage}${diff}`);
    }
    static setEquals(expected, actual, reason) {
      if (reason === void 0) reason = null;
      let missingSet = core.Set.from(expected);
      missingSet.removeAll(actual);
      let extraSet = core.Set.from(actual);
      extraSet.removeAll(expected);
      if (dart.notNull(extraSet.isEmpty) && dart.notNull(missingSet.isEmpty)) return;
      let msg = Expect._getMessage(reason);
      let sb = new core.StringBuffer(`Expect.setEquals(${msg}) fails`);
      if (!dart.notNull(missingSet.isEmpty)) {
        sb.write('\nExpected collection does not contain: ');
      }
      for (let val of missingSet) {
        sb.write(`${val} `);
      }
      if (!dart.notNull(extraSet.isEmpty)) {
        sb.write('\nExpected collection should not contain: ');
      }
      for (let val of extraSet) {
        sb.write(`${val} `);
      }
      Expect._fail(dart.toString(sb));
    }
    static throws(f, check, reason) {
      if (check === void 0) check = null;
      if (reason === void 0) reason = null;
      let msg = reason == null ? "" : `(${reason})`;
      if (!dart.is(f, _Nullary)) {
        Expect._fail(`Expect.throws${msg}: Function f not callable with zero arguments`);
      }
      try {
        f();
      } catch (e) {
        let s = dart.stackTrace(e);
        if (check != null) {
          if (!dart.notNull(dart.dcall(check, e))) {
            Expect._fail(`Expect.throws${msg}: Unexpected '${e}'\n${s}`);
          }
        }
        return;
      }

      Expect._fail(`Expect.throws${msg} fails: Did not throw`);
    }
    static _getMessage(reason) {
      return reason == null ? "" : `, '${reason}'`;
    }
    static _fail(message) {
      dart.throw(new ExpectException(message));
    }
  }
  dart.setSignature(Expect, {
    statics: () => ({
      _truncateString: [core.String, [core.String, core.int, core.int, core.int]],
      _stringDifference: [core.String, [core.String, core.String]],
      equals: [dart.void, [dart.dynamic, dart.dynamic], [core.String]],
      isTrue: [dart.void, [dart.dynamic], [core.String]],
      isFalse: [dart.void, [dart.dynamic], [core.String]],
      isNull: [dart.void, [dart.dynamic], [core.String]],
      isNotNull: [dart.void, [dart.dynamic], [core.String]],
      identical: [dart.void, [dart.dynamic, dart.dynamic], [core.String]],
      fail: [dart.void, [core.String]],
      approxEquals: [dart.void, [core.num, core.num], [core.num, core.String]],
      notEquals: [dart.void, [dart.dynamic, dart.dynamic], [core.String]],
      listEquals: [dart.void, [core.List, core.List], [core.String]],
      mapEquals: [dart.void, [core.Map, core.Map], [core.String]],
      stringEquals: [dart.void, [core.String, core.String], [core.String]],
      setEquals: [dart.void, [core.Iterable, core.Iterable], [core.String]],
      throws: [dart.void, [dart.functionType(dart.void, [])], [_CheckExceptionFn, core.String]],
      _getMessage: [core.String, [core.String]],
      _fail: [dart.void, [core.String]]
    }),
    names: ['_truncateString', '_stringDifference', 'equals', 'isTrue', 'isFalse', 'isNull', 'isNotNull', 'identical', 'fail', 'approxEquals', 'notEquals', 'listEquals', 'mapEquals', 'stringEquals', 'setEquals', 'throws', '_getMessage', '_fail']
  });
  function _identical(a, b) {
    return core.identical(a, b);
  }
  dart.fn(_identical, core.bool, [dart.dynamic, dart.dynamic]);
  const _CheckExceptionFn = dart.typedef('_CheckExceptionFn', () => dart.functionType(core.bool, [dart.dynamic]));
  const _Nullary = dart.typedef('_Nullary', () => dart.functionType(dart.dynamic, []));
  class ExpectException extends core.Object {
    ExpectException(message) {
      this.message = message;
    }
    toString() {
      return this.message;
    }
  }
  ExpectException[dart.implements] = () => [core.Exception];
  dart.setSignature(ExpectException, {
    constructors: () => ({ExpectException: [ExpectException, [core.String]]})
  });
  class NoInline extends core.Object {
    NoInline() {
    }
  }
  dart.setSignature(NoInline, {
    constructors: () => ({NoInline: [NoInline, []]})
  });
  class TrustTypeAnnotations extends core.Object {
    TrustTypeAnnotations() {
    }
  }
  dart.setSignature(TrustTypeAnnotations, {
    constructors: () => ({TrustTypeAnnotations: [TrustTypeAnnotations, []]})
  });
  class AssumeDynamic extends core.Object {
    AssumeDynamic() {
    }
  }
  dart.setSignature(AssumeDynamic, {
    constructors: () => ({AssumeDynamic: [AssumeDynamic, []]})
  });
  // Exports:
  exports.Expect = Expect;
  exports.ExpectException = ExpectException;
  exports.NoInline = NoInline;
  exports.TrustTypeAnnotations = TrustTypeAnnotations;
  exports.AssumeDynamic = AssumeDynamic;
});
