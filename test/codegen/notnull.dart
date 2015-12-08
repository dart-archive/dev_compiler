// Copyright (c) 2015, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

library notnull;

void intAssignments() {
  var i = 0;
  i &= 1;
  i |= 1;
  i ^= 1;
  i >>= 1;
  i <<= 1;
  i -= 1;
  i %= 1;
  i += 1;
  i ??= 1;
  i *= 1;
  i ~/= 1;
  i++;
  --i;
  print(i + 1);

  int j = 1;
  j = i < 10 ? 1 : 2;
  print(j + 1);
}

void doubleAssignments() {
  var d = 0.0;
  d /= 1;
  print(d + 1);
}

void boolAssignments() {
  var b = true;
  b != b;
  print(b);
}

void nullableLocals(int param) {
  print(param + 1);

  int i;
  // We could detect that i is effectively non-nullable with flow analysis.
  i = 1;
  print(i + 1);

  int j = 1;
  j = i == 1 ? 1 : null;
  print(j + 1);
}

void forLoops(int length()) {
  for (int i = 0; i < 10; i++) {
    print(i + 1);
  }
  for (int i = 0; i < length(); i++) {
    print(i + 1);
  }
  for (int i = 0, n = length(); i < n; i++) {
    print(i + 1);
  }
  /// TODO(ochafik): Special-case `int + 0` to provide a cheap way to coerce
  /// ints to notnull in the SDK (like asm.js's `x|0` pattern).
  for (int i = 0, n = length() + 0; i < n; i++) {
    print(i + 1);
  }
}

test() {
  intAssignments();
  doubleAssignments();
  boolAssignments();
  nullableLocals(1);
  forLoops(() => 10);
}
