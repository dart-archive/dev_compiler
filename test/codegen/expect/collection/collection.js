var collection;
(function (collection) {
  'use strict';
  class UnmodifiableListView/* Unimplemented <E> */ extends _internal.UnmodifiableListBase/* Unimplemented <E> */ {
    constructor(source) {
      this._source = source;
      super();
    }
    get length() { return this._source.length; }
    [](index) { return this._source.elementAt(index); }
  }

  // Function _defaultEquals: (dynamic, dynamic) → bool
  function _defaultEquals(a, b) { return dart.equals(a, b); }

  // Function _defaultHashCode: (dynamic) → int
  function _defaultHashCode(a) { return /* Unimplemented: DownCast: dynamic to int */ dart.dload(a, "hashCode"); }

  class HashMap/* Unimplemented <K, V> */ {
    constructor(opt$) {
      let equals = opt$.equals === undefined ? null : opt$.equals;
      let hashCode = opt$.hashCode === undefined ? null : opt$.hashCode;
      let isValidKey = opt$.isValidKey === undefined ? null : opt$.isValidKey;
    }
    __init_identity() {
    }
    __init_from(other) {
      let result = new HashMap();
      other.forEach((k, v) => {
        result[k] = /* Unimplemented: DownCast: dynamic to V */ v;
      });
      return result;
    }
    __init_fromIterable(iterable, opt$) {
      let key = opt$.key === undefined ? null : opt$.key;
      let value = opt$.value === undefined ? null : opt$.value;
      let map = new HashMap();
      Maps._fillMapWithMappedIterable(map, iterable, key, value);
      return map;
    }
    __init_fromIterables(keys, values) {
      let map = new HashMap();
      Maps._fillMapWithIterables(map, keys, values);
      return map;
    }
  }
  HashMap.identity = function() { this.__init_identity() };
  HashMap.identity.prototype = HashMap.prototype;
  HashMap.from = function(other) { this.__init_from(other) };
  HashMap.from.prototype = HashMap.prototype;
  HashMap.fromIterable = function(iterable, opt$) { this.__init_fromIterable(iterable, opt$) };
  HashMap.fromIterable.prototype = HashMap.prototype;
  HashMap.fromIterables = function(keys, values) { this.__init_fromIterables(keys, values) };
  HashMap.fromIterables.prototype = HashMap.prototype;

  class _HashSetBase/* Unimplemented <E> */ extends SetBase/* Unimplemented <E> */ {
    difference(other) {
      let result = this._newSet();
      /* Unimplemented ForEachStatement: for (var element in this) {if (!other.contains(element)) result.add(element);} */return result;
    }
    intersection(other) {
      let result = this._newSet();
      /* Unimplemented ForEachStatement: for (var element in this) {if (other.contains(element)) result.add(element);} */return result;
    }
    toSet() { return /* Unimplemented cascade on non-simple identifier: _newSet()..addAll(this) */; }
  }

  class HashSet/* Unimplemented <E> */ {
    constructor(opt$) {
      let equals = opt$.equals === undefined ? null : opt$.equals;
      let hashCode = opt$.hashCode === undefined ? null : opt$.hashCode;
      let isValidKey = opt$.isValidKey === undefined ? null : opt$.isValidKey;
    }
    __init_identity() {
    }
    __init_from(elements) {
      let result = new HashSet();
      /* Unimplemented ForEachStatement: for (E e in elements) result.add(e); */return result;
    }
  }
  HashSet.identity = function() { this.__init_identity() };
  HashSet.identity.prototype = HashSet.prototype;
  HashSet.from = function(elements) { this.__init_from(elements) };
  HashSet.from.prototype = HashSet.prototype;

  class IterableMixin/* Unimplemented <E> */ {
    map(/* Unimplemented FunctionTypedFormalParameter: f(E element) */) { return new _internal.MappedIterable(this, f); }
    where(/* Unimplemented FunctionTypedFormalParameter: bool f(E element) */) { return new _internal.WhereIterable(this, f); }
    expand(/* Unimplemented FunctionTypedFormalParameter: Iterable f(E element) */) { return new _internal.ExpandIterable(this, f); }
    contains(element) {
      /* Unimplemented ForEachStatement: for (E e in this) {if (e == element) return true;} */return false;
    }
    forEach(/* Unimplemented FunctionTypedFormalParameter: void f(E element) */) {
      /* Unimplemented ForEachStatement: for (E element in this) f(element); */}
    reduce(/* Unimplemented FunctionTypedFormalParameter: E combine(E value, E element) */) {
      let iterator = this.iterator;
      if (!iterator.moveNext()) {
        throw _internal.IterableElementError.noElement();
      }
      let value = iterator.current;
      while (iterator.moveNext()) {
        value = combine(value, iterator.current);
      }
      return value;
    }
    fold(initialValue, /* Unimplemented FunctionTypedFormalParameter: dynamic combine(var previousValue, E element) */) {
      let value = initialValue;
      /* Unimplemented ForEachStatement: for (E element in this) value = combine(value, element); */return value;
    }
    every(/* Unimplemented FunctionTypedFormalParameter: bool f(E element) */) {
      /* Unimplemented ForEachStatement: for (E element in this) {if (!f(element)) return false;} */return true;
    }
    join(separator) {
      if (separator === undefined) separator = "";
      let iterator = this.iterator;
      if (!iterator.moveNext()) return "";
      let buffer = new dart_core.StringBuffer();
      if (separator === null || dart.equals(separator, "")) {
        do {
          buffer.write("" + (iterator.current) + "");
        }
        while (iterator.moveNext());
      }
       else {
        buffer.write("" + (iterator.current) + "");
        while (iterator.moveNext()) {
          buffer.write(separator);
          buffer.write("" + (iterator.current) + "");
        }
      }
      return buffer.toString();
    }
    any(/* Unimplemented FunctionTypedFormalParameter: bool f(E element) */) {
      /* Unimplemented ForEachStatement: for (E element in this) {if (f(element)) return true;} */return false;
    }
    toList(opt$) {
      let growable = opt$.growable === undefined ? true : opt$.growable;
      return new dart_core.List.from(this, /* Unimplemented NamedExpression: growable: growable */)
    }
    toSet() { return new dart_core.Set.from(this); }
    get length() {
      dart.assert(/* Unimplemented IsExpression: this is! EfficientLength */);
      let count = 0;
      let it = iterator;
      while (it.moveNext()) {
        count++;
      }
      return count;
    }
    get isEmpty() { return !iterator.moveNext(); }
    get isNotEmpty() { return !this.isEmpty; }
    take(n) {
      return new _internal.TakeIterable(this, n);
    }
    takeWhile(/* Unimplemented FunctionTypedFormalParameter: bool test(E value) */) {
      return new _internal.TakeWhileIterable(this, test);
    }
    skip(n) {
      return new _internal.SkipIterable(this, n);
    }
    skipWhile(/* Unimplemented FunctionTypedFormalParameter: bool test(E value) */) {
      return new _internal.SkipWhileIterable(this, test);
    }
    get first() {
      let it = iterator;
      if (!it.moveNext()) {
        throw _internal.IterableElementError.noElement();
      }
      return /* Unimplemented: DownCast: dynamic to E */ it.current;
    }
    get last() {
      let it = iterator;
      if (!it.moveNext()) {
        throw _internal.IterableElementError.noElement();
      }
      let result = null;
      do {
        result = /* Unimplemented: DownCast: dynamic to E */ it.current;
      }
      while (it.moveNext());
      return result;
    }
    get single() {
      let it = iterator;
      if (!it.moveNext()) throw _internal.IterableElementError.noElement();
      let result = /* Unimplemented: DownCast: dynamic to E */ it.current;
      if (it.moveNext()) throw _internal.IterableElementError.tooMany();
      return result;
    }
    firstWhere(/* Unimplemented FunctionTypedFormalParameter: bool test(E value) */, opt$) {
      let orElse = opt$.orElse === undefined ? null : opt$.orElse;
      /* Unimplemented ForEachStatement: for (E element in this) {if (test(element)) return element;} */if (orElse !== null) return orElse();
      throw _internal.IterableElementError.noElement();
    }
    lastWhere(/* Unimplemented FunctionTypedFormalParameter: bool test(E value) */, opt$) {
      let orElse = opt$.orElse === undefined ? null : opt$.orElse;
      let result = null;
      let foundMatching = false;
      /* Unimplemented ForEachStatement: for (E element in this) {if (test(element)) {result = element; foundMatching = true;}} */if (foundMatching) return result;
      if (orElse !== null) return orElse();
      throw _internal.IterableElementError.noElement();
    }
    singleWhere(/* Unimplemented FunctionTypedFormalParameter: bool test(E value) */) {
      let result = null;
      let foundMatching = false;
      /* Unimplemented ForEachStatement: for (E element in this) {if (test(element)) {if (foundMatching) {throw IterableElementError.tooMany();} result = element; foundMatching = true;}} */if (foundMatching) return result;
      throw _internal.IterableElementError.noElement();
    }
    elementAt(index) {
      if (/* Unimplemented IsExpression: index is! int */) throw new dart_core.ArgumentError.notNull("index");
      dart_core.RangeError.checkNotNegative(index, "index");
      let elementIndex = 0;
      /* Unimplemented ForEachStatement: for (E element in this) {if (index == elementIndex) return element; elementIndex++;} */throw new dart_core.RangeError.index(index, this, "index", null, elementIndex);
    }
    toString() { return IterableBase.iterableToShortString(this, "(", ")"); }
  }

  class IterableBase/* Unimplemented <E> */ {
    constructor() {
      _toStringVisiting = /* Unimplemented ArrayList */[];
    }
    map(/* Unimplemented FunctionTypedFormalParameter: f(E element) */) { return new _internal.MappedIterable(this, f); }
    where(/* Unimplemented FunctionTypedFormalParameter: bool f(E element) */) { return new _internal.WhereIterable(this, f); }
    expand(/* Unimplemented FunctionTypedFormalParameter: Iterable f(E element) */) { return new _internal.ExpandIterable(this, f); }
    contains(element) {
      /* Unimplemented ForEachStatement: for (E e in this) {if (e == element) return true;} */return false;
    }
    forEach(/* Unimplemented FunctionTypedFormalParameter: void f(E element) */) {
      /* Unimplemented ForEachStatement: for (E element in this) f(element); */}
    reduce(/* Unimplemented FunctionTypedFormalParameter: E combine(E value, E element) */) {
      let iterator = this.iterator;
      if (!iterator.moveNext()) {
        throw _internal.IterableElementError.noElement();
      }
      let value = iterator.current;
      while (iterator.moveNext()) {
        value = combine(value, iterator.current);
      }
      return value;
    }
    fold(initialValue, /* Unimplemented FunctionTypedFormalParameter: dynamic combine(var previousValue, E element) */) {
      let value = initialValue;
      /* Unimplemented ForEachStatement: for (E element in this) value = combine(value, element); */return value;
    }
    every(/* Unimplemented FunctionTypedFormalParameter: bool f(E element) */) {
      /* Unimplemented ForEachStatement: for (E element in this) {if (!f(element)) return false;} */return true;
    }
    join(separator) {
      if (separator === undefined) separator = "";
      let iterator = this.iterator;
      if (!iterator.moveNext()) return "";
      let buffer = new dart_core.StringBuffer();
      if (separator === null || dart.equals(separator, "")) {
        do {
          buffer.write("" + (iterator.current) + "");
        }
        while (iterator.moveNext());
      }
       else {
        buffer.write("" + (iterator.current) + "");
        while (iterator.moveNext()) {
          buffer.write(separator);
          buffer.write("" + (iterator.current) + "");
        }
      }
      return buffer.toString();
    }
    any(/* Unimplemented FunctionTypedFormalParameter: bool f(E element) */) {
      /* Unimplemented ForEachStatement: for (E element in this) {if (f(element)) return true;} */return false;
    }
    toList(opt$) {
      let growable = opt$.growable === undefined ? true : opt$.growable;
      return new dart_core.List.from(this, /* Unimplemented NamedExpression: growable: growable */)
    }
    toSet() { return new dart_core.Set.from(this); }
    get length() {
      dart.assert(/* Unimplemented IsExpression: this is! EfficientLength */);
      let count = 0;
      let it = iterator;
      while (it.moveNext()) {
        count++;
      }
      return count;
    }
    get isEmpty() { return !iterator.moveNext(); }
    get isNotEmpty() { return !this.isEmpty; }
    take(n) {
      return new _internal.TakeIterable(this, n);
    }
    takeWhile(/* Unimplemented FunctionTypedFormalParameter: bool test(E value) */) {
      return new _internal.TakeWhileIterable(this, test);
    }
    skip(n) {
      return new _internal.SkipIterable(this, n);
    }
    skipWhile(/* Unimplemented FunctionTypedFormalParameter: bool test(E value) */) {
      return new _internal.SkipWhileIterable(this, test);
    }
    get first() {
      let it = iterator;
      if (!it.moveNext()) {
        throw _internal.IterableElementError.noElement();
      }
      return /* Unimplemented: DownCast: dynamic to E */ it.current;
    }
    get last() {
      let it = iterator;
      if (!it.moveNext()) {
        throw _internal.IterableElementError.noElement();
      }
      let result = null;
      do {
        result = /* Unimplemented: DownCast: dynamic to E */ it.current;
      }
      while (it.moveNext());
      return result;
    }
    get single() {
      let it = iterator;
      if (!it.moveNext()) throw _internal.IterableElementError.noElement();
      let result = /* Unimplemented: DownCast: dynamic to E */ it.current;
      if (it.moveNext()) throw _internal.IterableElementError.tooMany();
      return result;
    }
    firstWhere(/* Unimplemented FunctionTypedFormalParameter: bool test(E value) */, opt$) {
      let orElse = opt$.orElse === undefined ? null : opt$.orElse;
      /* Unimplemented ForEachStatement: for (E element in this) {if (test(element)) return element;} */if (orElse !== null) return orElse();
      throw _internal.IterableElementError.noElement();
    }
    lastWhere(/* Unimplemented FunctionTypedFormalParameter: bool test(E value) */, opt$) {
      let orElse = opt$.orElse === undefined ? null : opt$.orElse;
      let result = null;
      let foundMatching = false;
      /* Unimplemented ForEachStatement: for (E element in this) {if (test(element)) {result = element; foundMatching = true;}} */if (foundMatching) return result;
      if (orElse !== null) return orElse();
      throw _internal.IterableElementError.noElement();
    }
    singleWhere(/* Unimplemented FunctionTypedFormalParameter: bool test(E value) */) {
      let result = null;
      let foundMatching = false;
      /* Unimplemented ForEachStatement: for (E element in this) {if (test(element)) {if (foundMatching) {throw IterableElementError.tooMany();} result = element; foundMatching = true;}} */if (foundMatching) return result;
      throw _internal.IterableElementError.noElement();
    }
    elementAt(index) {
      if (/* Unimplemented IsExpression: index is! int */) throw new dart_core.ArgumentError.notNull("index");
      dart_core.RangeError.checkNotNegative(index, "index");
      let elementIndex = 0;
      /* Unimplemented ForEachStatement: for (E element in this) {if (index == elementIndex) return element; elementIndex++;} */throw new dart_core.RangeError.index(index, this, "index", null, elementIndex);
    }
    toString() { return iterableToShortString(this, "(", ")"); }
    static iterableToShortString(iterable, leftDelimiter, rightDelimiter) {
      if (leftDelimiter === undefined) leftDelimiter = "(";
      if (rightDelimiter === undefined) rightDelimiter = ")";
      if (_isToStringVisiting(iterable)) {
        if (dart.equals(leftDelimiter, "(") && dart.equals(rightDelimiter, ")")) {
          return "(...)";
        }
        return "" + (leftDelimiter) + "..." + (rightDelimiter) + "";
      }
      let parts = /* Unimplemented ArrayList */[];
      _toStringVisiting.add(iterable);
      /* Unimplemented TryStatement: try {_iterablePartsToStrings(iterable, parts);} finally {assert (identical(_toStringVisiting.last, iterable)); _toStringVisiting.removeLast();} */return (/* Unimplemented cascade on non-simple identifier: new StringBuffer(leftDelimiter)..writeAll(parts, ", ")..write(rightDelimiter) */).toString();
    }
    static iterableToFullString(iterable, leftDelimiter, rightDelimiter) {
      if (leftDelimiter === undefined) leftDelimiter = "(";
      if (rightDelimiter === undefined) rightDelimiter = ")";
      if (_isToStringVisiting(iterable)) {
        return "" + (leftDelimiter) + "..." + (rightDelimiter) + "";
      }
      let buffer = new dart_core.StringBuffer(leftDelimiter);
      _toStringVisiting.add(iterable);
      /* Unimplemented TryStatement: try {buffer.writeAll(iterable, ", ");} finally {assert (identical(_toStringVisiting.last, iterable)); _toStringVisiting.removeLast();} */buffer.write(rightDelimiter);
      return buffer.toString();
    }
    static _isToStringVisiting(o) {
      for (let i = 0; i < _toStringVisiting.length; i++) {
        if (dart_core.identical(o, _toStringVisiting[i])) return true;
      }
      return false;
    }
    static _iterablePartsToStrings(iterable, parts) {
      let LENGTH_LIMIT = 80;
      let HEAD_COUNT = 3;
      let TAIL_COUNT = 2;
      let MAX_COUNT = 100;
      let OVERHEAD = 2;
      let ELLIPSIS_SIZE = 3;
      let length = 0;
      let count = 0;
      let it = iterable.iterator;
      while (length < LENGTH_LIMIT || count < HEAD_COUNT) {
        if (!it.moveNext()) return;
        let next = "" + (it.current) + "";
        parts.add(next);
        length = next.length + OVERHEAD;
        count++;
      }
      let penultimateString = null;
      let ultimateString = null;
      let penultimate = null;
      let ultimate = null;
      if (!it.moveNext()) {
        if (count <= HEAD_COUNT + TAIL_COUNT) return;
        ultimateString = /* Unimplemented: DownCast: dynamic to String */ parts.removeLast();
        penultimateString = /* Unimplemented: DownCast: dynamic to String */ parts.removeLast();
      }
       else {
        penultimate = it.current;
        count++;
        if (!it.moveNext()) {
          if (count <= HEAD_COUNT + 1) {
            parts.add("" + (penultimate) + "");
            return;
          }
          ultimateString = "" + (penultimate) + "";
          penultimateString = /* Unimplemented: DownCast: dynamic to String */ parts.removeLast();
          length = ultimateString.length + OVERHEAD;
        }
         else {
          ultimate = it.current;
          count++;
          dart.assert(count < MAX_COUNT);
          while (it.moveNext()) {
            penultimate = ultimate;
            ultimate = it.current;
            count++;
            if (count > MAX_COUNT) {
              while (length > LENGTH_LIMIT - ELLIPSIS_SIZE - OVERHEAD && count > HEAD_COUNT) {
                length = /* Unimplemented: DownCast: dynamic to int */ /* Unimplemented binary operator: parts.removeLast().length + OVERHEAD */;
                count--;
              }
              parts.add("...");
              return;
            }
          }
          penultimateString = "" + (penultimate) + "";
          ultimateString = "" + (ultimate) + "";
          length = ultimateString.length + penultimateString.length + 2 * OVERHEAD;
        }
      }
      let elision = null;
      if (count > parts.length + TAIL_COUNT) {
        elision = "...";
        length = ELLIPSIS_SIZE + OVERHEAD;
      }
      while (length > LENGTH_LIMIT && parts.length > HEAD_COUNT) {
        length = /* Unimplemented: DownCast: dynamic to int */ /* Unimplemented binary operator: parts.removeLast().length + OVERHEAD */;
        if (elision === null) {
          elision = "...";
          length = ELLIPSIS_SIZE + OVERHEAD;
        }
      }
      if (elision !== null) {
        parts.add(elision);
      }
      parts.add(penultimateString);
      parts.add(ultimateString);
    }
  }

  class HasNextIterator/* Unimplemented <E> */ {
    constructor(_iterator) {
      this._iterator = _iterator;
      this._HAS_NEXT_AND_NEXT_IN_CURRENT = 0;
      this._NO_NEXT = 1;
      this._NOT_MOVED_YET = 2;
      this._state = _NOT_MOVED_YET;
    }
    get hasNext() {
      if (this._state === _NOT_MOVED_YET) this._move();
      return this._state === _HAS_NEXT_AND_NEXT_IN_CURRENT;
    }
    next() {
      if (!this.hasNext) throw new dart_core.StateError("No more elements");
      dart.assert(this._state === _HAS_NEXT_AND_NEXT_IN_CURRENT);
      let result = /* Unimplemented: DownCast: dynamic to E */ this._iterator.current;
      this._move();
      return result;
    }
    _move() {
      if (this._iterator.moveNext()) {
        this._state = _HAS_NEXT_AND_NEXT_IN_CURRENT;
      }
       else {
        this._state = _NO_NEXT;
      }
    }
  }

  class LinkedHashMap/* Unimplemented <K, V> */ {
    constructor(opt$) {
      let equals = opt$.equals === undefined ? null : opt$.equals;
      let hashCode = opt$.hashCode === undefined ? null : opt$.hashCode;
      let isValidKey = opt$.isValidKey === undefined ? null : opt$.isValidKey;
    }
    __init_identity() {
    }
    __init_from(other) {
      let result = new LinkedHashMap();
      other.forEach((k, v) => {
        result[k] = /* Unimplemented: DownCast: dynamic to V */ v;
      });
      return result;
    }
    __init_fromIterable(iterable, opt$) {
      let key = opt$.key === undefined ? null : opt$.key;
      let value = opt$.value === undefined ? null : opt$.value;
      let map = new LinkedHashMap();
      Maps._fillMapWithMappedIterable(map, iterable, key, value);
      return map;
    }
    __init_fromIterables(keys, values) {
      let map = new LinkedHashMap();
      Maps._fillMapWithIterables(map, keys, values);
      return map;
    }
  }
  LinkedHashMap.identity = function() { this.__init_identity() };
  LinkedHashMap.identity.prototype = LinkedHashMap.prototype;
  LinkedHashMap.from = function(other) { this.__init_from(other) };
  LinkedHashMap.from.prototype = LinkedHashMap.prototype;
  LinkedHashMap.fromIterable = function(iterable, opt$) { this.__init_fromIterable(iterable, opt$) };
  LinkedHashMap.fromIterable.prototype = LinkedHashMap.prototype;
  LinkedHashMap.fromIterables = function(keys, values) { this.__init_fromIterables(keys, values) };
  LinkedHashMap.fromIterables.prototype = LinkedHashMap.prototype;

  class LinkedHashSet/* Unimplemented <E> */ {
    constructor(opt$) {
      let equals = opt$.equals === undefined ? null : opt$.equals;
      let hashCode = opt$.hashCode === undefined ? null : opt$.hashCode;
      let isValidKey = opt$.isValidKey === undefined ? null : opt$.isValidKey;
    }
    __init_identity() {
    }
    __init_from(elements) {
      let result = new LinkedHashSet();
      /* Unimplemented ForEachStatement: for (final E element in elements) {result.add(element);} */return result;
    }
  }
  LinkedHashSet.identity = function() { this.__init_identity() };
  LinkedHashSet.identity.prototype = LinkedHashSet.prototype;
  LinkedHashSet.from = function(elements) { this.__init_from(elements) };
  LinkedHashSet.from.prototype = LinkedHashSet.prototype;

  class LinkedList/* Unimplemented <E extends LinkedListEntry<E>> */ extends IterableBase/* Unimplemented <E> */ {
    constructor() {
      this._modificationCount = 0;
      this._length = 0;
      this._next = null;
      this._previous = null;
      super();
      this._next = this._previous = this;
    }
    addFirst(entry) {
      this._insertAfter(this, entry);
    }
    add(entry) {
      this._insertAfter(this._previous, entry);
    }
    addAll(entries) {
      entries.forEach((entry) => this._insertAfter(this._previous, /* Unimplemented: DownCast: dynamic to E */ entry));
    }
    remove(entry) {
      if (!dart.equals(entry._list, this)) return false;
      this._unlink(entry);
      return true;
    }
    get iterator() { return new _LinkedListIterator(this); }
    get length() { return this._length; }
    clear() {
      this._modificationCount++;
      let next = this._next;
      while (!dart_core.identical(next, this)) {
        let entry = /* Unimplemented: DownCast: _LinkedListLink to E */ next;
        next = entry._next;
        entry._next = entry._previous = entry._list = null;
      }
      this._next = this._previous = this;
      this._length = 0;
    }
    get first() {
      if (dart_core.identical(this._next, this)) {
        throw new dart_core.StateError("No such element");
      }
      return /* Unimplemented: DownCast: _LinkedListLink to E */ this._next;
    }
    get last() {
      if (dart_core.identical(this._previous, this)) {
        throw new dart_core.StateError("No such element");
      }
      return /* Unimplemented: DownCast: _LinkedListLink to E */ this._previous;
    }
    get single() {
      if (dart_core.identical(this._previous, this)) {
        throw new dart_core.StateError("No such element");
      }
      if (!dart_core.identical(this._previous, this._next)) {
        throw new dart_core.StateError("Too many elements");
      }
      return /* Unimplemented: DownCast: _LinkedListLink to E */ this._next;
    }
    forEach(/* Unimplemented FunctionTypedFormalParameter: void action(E entry) */) {
      let modificationCount = this._modificationCount;
      let current = this._next;
      while (!dart_core.identical(current, this)) {
        action(/* Unimplemented: DownCast: _LinkedListLink to E */ current);
        if (modificationCount !== this._modificationCount) {
          throw new dart_core.ConcurrentModificationError(this);
        }
        current = current._next;
      }
    }
    get isEmpty() { return this._length === 0; }
    _insertAfter(entry, newEntry) {
      if (newEntry.list !== null) {
        throw new dart_core.StateError("LinkedListEntry is already in a LinkedList");
      }
      this._modificationCount++;
      newEntry._list = this;
      let predecessor = entry;
      let successor = entry._next;
      successor._previous = newEntry;
      newEntry._previous = predecessor;
      newEntry._next = successor;
      predecessor._next = newEntry;
      this._length++;
    }
    _unlink(entry) {
      this._modificationCount++;
      entry._next._previous = entry._previous;
      entry._previous._next = entry._next;
      this._length--;
      entry._list = entry._next = entry._previous = null;
    }
  }

  class _LinkedListIterator/* Unimplemented <E extends LinkedListEntry<E>> */ {
    constructor(list) {
      this._list = list;
      this._modificationCount = list._modificationCount;
      this._next = list._next;
      this._current = null;
    }
    get current() { return this._current; }
    moveNext() {
      if (dart_core.identical(this._next, this._list)) {
        this._current = null;
        return false;
      }
      if (this._modificationCount !== this._list._modificationCount) {
        throw new dart_core.ConcurrentModificationError(this);
      }
      this._current = /* Unimplemented: DownCast: _LinkedListLink to E */ this._next;
      this._next = this._next._next;
      return true;
    }
  }

  class _LinkedListLink {
    constructor() {
      this._next = null;
      this._previous = null;
      super();
    }
  }

  class LinkedListEntry/* Unimplemented <E extends LinkedListEntry<E>> */ {
    constructor() {
      this._list = null;
      this._next = null;
      this._previous = null;
      super();
    }
    get list() { return this._list; }
    unlink() {
      this._list._unlink(this);
    }
    get next() {
      if (dart_core.identical(this._next, this._list)) return null;
      let result = /* Unimplemented: DownCast: _LinkedListLink to E */ this._next;
      return result;
    }
    get previous() {
      if (dart_core.identical(this._previous, this._list)) return null;
      return /* Unimplemented: as E. */this._previous;
    }
    insertAfter(entry) {
      this._list._insertAfter(this, entry);
    }
    insertBefore(entry) {
      this._list._insertAfter(this._previous, entry);
    }
  }

  class ListBase/* Unimplemented <E> */ extends dart.mixin(dart_core.Object, ListMixin/* Unimplemented <E> */) {
    static listToString(list) { return IterableBase.iterableToFullString(list, "[", "]"); }
  }

  class ListMixin/* Unimplemented <E> */ {
    get iterator() { return new _internal.ListIterator(this); }
    elementAt(index) { return this[index]; }
    forEach(/* Unimplemented FunctionTypedFormalParameter: void action(E element) */) {
      let length = this.length;
      for (let i = 0; i < length; i++) {
        action(this[i]);
        if (length !== this.length) {
          throw new dart_core.ConcurrentModificationError(this);
        }
      }
    }
    get isEmpty() { return length === 0; }
    get isNotEmpty() { return !this.isEmpty; }
    get first() {
      if (length === 0) throw _internal.IterableElementError.noElement();
      return this[0];
    }
    get last() {
      if (length === 0) throw _internal.IterableElementError.noElement();
      return this[length - 1];
    }
    get single() {
      if (length === 0) throw _internal.IterableElementError.noElement();
      if (length > 1) throw _internal.IterableElementError.tooMany();
      return this[0];
    }
    contains(element) {
      let length = this.length;
      for (let i = 0; i < this.length; i++) {
        if (dart.equals(this[i], element)) return true;
        if (length !== this.length) {
          throw new dart_core.ConcurrentModificationError(this);
        }
      }
      return false;
    }
    every(/* Unimplemented FunctionTypedFormalParameter: bool test(E element) */) {
      let length = this.length;
      for (let i = 0; i < length; i++) {
        if (!test(this[i])) return false;
        if (length !== this.length) {
          throw new dart_core.ConcurrentModificationError(this);
        }
      }
      return true;
    }
    any(/* Unimplemented FunctionTypedFormalParameter: bool test(E element) */) {
      let length = this.length;
      for (let i = 0; i < length; i++) {
        if (test(this[i])) return true;
        if (length !== this.length) {
          throw new dart_core.ConcurrentModificationError(this);
        }
      }
      return false;
    }
    firstWhere(/* Unimplemented FunctionTypedFormalParameter: bool test(E element) */, opt$) {
      let orElse = opt$.orElse === undefined ? null : opt$.orElse;
      let length = this.length;
      for (let i = 0; i < length; i++) {
        let element = this[i];
        if (test(element)) return element;
        if (length !== this.length) {
          throw new dart_core.ConcurrentModificationError(this);
        }
      }
      if (orElse !== null) return orElse();
      throw _internal.IterableElementError.noElement();
    }
    lastWhere(/* Unimplemented FunctionTypedFormalParameter: bool test(E element) */, opt$) {
      let orElse = opt$.orElse === undefined ? null : opt$.orElse;
      let length = this.length;
      for (let i = length - 1; i >= 0; i--) {
        let element = this[i];
        if (test(element)) return element;
        if (length !== this.length) {
          throw new dart_core.ConcurrentModificationError(this);
        }
      }
      if (orElse !== null) return orElse();
      throw _internal.IterableElementError.noElement();
    }
    singleWhere(/* Unimplemented FunctionTypedFormalParameter: bool test(E element) */) {
      let length = this.length;
      let match = null;
      let matchFound = false;
      for (let i = 0; i < length; i++) {
        let element = this[i];
        if (test(element)) {
          if (matchFound) {
            throw _internal.IterableElementError.tooMany();
          }
          matchFound = true;
          match = element;
        }
        if (length !== this.length) {
          throw new dart_core.ConcurrentModificationError(this);
        }
      }
      if (matchFound) return match;
      throw _internal.IterableElementError.noElement();
    }
    join(separator) {
      if (separator === undefined) separator = "";
      if (length === 0) return "";
      let buffer = /* Unimplemented cascade on non-simple identifier: new StringBuffer()..writeAll(this, separator) */;
      return buffer.toString();
    }
    where(/* Unimplemented FunctionTypedFormalParameter: bool test(E element) */) { return new _internal.WhereIterable(this, test); }
    map(/* Unimplemented FunctionTypedFormalParameter: f(E element) */) { return new _internal.MappedListIterable(this, f); }
    expand(/* Unimplemented FunctionTypedFormalParameter: Iterable f(E element) */) { return new _internal.ExpandIterable(this, f); }
    reduce(/* Unimplemented FunctionTypedFormalParameter: E combine(E previousValue, E element) */) {
      let length = this.length;
      if (length === 0) throw _internal.IterableElementError.noElement();
      let value = this[0];
      for (let i = 1; i < length; i++) {
        value = combine(value, this[i]);
        if (length !== this.length) {
          throw new dart_core.ConcurrentModificationError(this);
        }
      }
      return value;
    }
    fold(initialValue, /* Unimplemented FunctionTypedFormalParameter: combine(var previousValue, E element) */) {
      let value = initialValue;
      let length = this.length;
      for (let i = 0; i < length; i++) {
        value = combine(value, this[i]);
        if (length !== this.length) {
          throw new dart_core.ConcurrentModificationError(this);
        }
      }
      return value;
    }
    skip(count) { return new _internal.SubListIterable(this, count, null); }
    skipWhile(/* Unimplemented FunctionTypedFormalParameter: bool test(E element) */) {
      return new _internal.SkipWhileIterable(this, test);
    }
    take(count) { return new _internal.SubListIterable(this, 0, count); }
    takeWhile(/* Unimplemented FunctionTypedFormalParameter: bool test(E element) */) {
      return new _internal.TakeWhileIterable(this, test);
    }
    toList(opt$) {
      let growable = opt$.growable === undefined ? true : opt$.growable;
      let result = null;
      if (growable) {
        result = /* Unimplemented cascade on non-simple identifier: new List<E>()..length = length */;
      }
       else {
        result = new dart_core.List(length);
      }
      for (let i = 0; i < length; i++) {
        result[i] = this[i];
      }
      return result;
    }
    toSet() {
      let result = new dart_core.Set();
      for (let i = 0; i < length; i++) {
        result.add(this[i]);
      }
      return result;
    }
    add(element) {
      this[this.length++] = element;
    }
    addAll(iterable) {
      /* Unimplemented ForEachStatement: for (E element in iterable) {this[this.length++] = element;} */}
    remove(element) {
      for (let i = 0; i < this.length; i++) {
        if (dart.equals(this[i], element)) {
          this.this.setRange(i, this.length - 1, this, i + 1);
          this.length = 1;
          return true;
        }
      }
      return false;
    }
    removeWhere(/* Unimplemented FunctionTypedFormalParameter: bool test(E element) */) {
      _filter(this, /* Unimplemented: ClosureWrap: (E) → bool to (dynamic) → bool */ test, false);
    }
    retainWhere(/* Unimplemented FunctionTypedFormalParameter: bool test(E element) */) {
      _filter(this, /* Unimplemented: ClosureWrap: (E) → bool to (dynamic) → bool */ test, true);
    }
    static _filter(source, /* Unimplemented FunctionTypedFormalParameter: bool test(var element) */, retainMatching) {
      let retained = /* Unimplemented ArrayList */[];
      let length = source.length;
      for (let i = 0; i < length; i++) {
        let element = source[i];
        if (test(element) === retainMatching) {
          retained.add(element);
        }
        if (length !== source.length) {
          throw new dart_core.ConcurrentModificationError(source);
        }
      }
      if (retained.length !== source.length) {
        source.setRange(0, retained.length, retained);
        source.length = retained.length;
      }
    }
    clear() {
      this.length = 0;
    }
    removeLast() {
      if (length === 0) {
        throw _internal.IterableElementError.noElement();
      }
      let result = this[length - 1];
      length--;
      return result;
    }
    sort(compare) {
      if (compare === undefined) compare = null;
      if (compare === null) {
        let defaultCompare = dart_core.Comparable.compare;
        compare = defaultCompare;
      }
      _internal.Sort.sort(this, /* Unimplemented: ClosureWrap: (E, E) → int to (dynamic, dynamic) → int */ compare);
    }
    shuffle(random) {
      if (random === undefined) random = null;
      if (random === null) random = new dart_math.Random();
      let length = this.length;
      while (length > 1) {
        let pos = random.nextInt(length);
        length = 1;
        let tmp = this[length];
        this[length] = this[pos];
        this[pos] = tmp;
      }
    }
    asMap() {
      return new _internal.ListMapView(this);
    }
    sublist(start, end) {
      if (end === undefined) end = null;
      let listLength = this.length;
      if (end === null) end = listLength;
      dart_core.RangeError.checkValidRange(start, end, listLength);
      let length = end - start;
      let result = /* Unimplemented cascade on non-simple identifier: new List<E>()..length = length */;
      for (let i = 0; i < length; i++) {
        result[i] = this[start + i];
      }
      return result;
    }
    getRange(start, end) {
      dart_core.RangeError.checkValidRange(start, end, this.length);
      return new _internal.SubListIterable(this, start, end);
    }
    removeRange(start, end) {
      dart_core.RangeError.checkValidRange(start, end, this.length);
      let length = end - start;
      this.setRange(start, this.length - length, this, end);
      this.length = length;
    }
    fillRange(start, end, fill) {
      if (fill === undefined) fill = null;
      dart_core.RangeError.checkValidRange(start, end, this.length);
      for (let i = start; i < end; i++) {
        this[i] = fill;
      }
    }
    setRange(start, end, iterable, skipCount) {
      if (skipCount === undefined) skipCount = 0;
      dart_core.RangeError.checkValidRange(start, end, this.length);
      let length = end - start;
      if (length === 0) return;
      dart_core.RangeError.checkNotNegative(skipCount, "skipCount");
      let otherList = null;
      let otherStart = null;
      if (/* Unimplemented IsExpression: iterable is List */) {
        otherList = /* Unimplemented: DownCast: Iterable<E> to List<dynamic> */ iterable;
        otherStart = skipCount;
      }
       else {
        otherList = iterable.skip(skipCount).toList(/* Unimplemented NamedExpression: growable: false */);
        otherStart = 0;
      }
      if (otherStart + length > otherList.length) {
        throw _internal.IterableElementError.tooFew();
      }
      if (otherStart < start) {
        for (let i = length - 1; i >= 0; i--) {
          this[start + i] = /* Unimplemented: DownCast: dynamic to E */ otherList[otherStart + i];
        }
      }
       else {
        for (let i = 0; i < length; i++) {
          this[start + i] = /* Unimplemented: DownCast: dynamic to E */ otherList[otherStart + i];
        }
      }
    }
    replaceRange(start, end, newContents) {
      dart_core.RangeError.checkValidRange(start, end, this.length);
      if (/* Unimplemented IsExpression: newContents is! EfficientLength */) {
        newContents = newContents.toList();
      }
      let removeLength = end - start;
      let insertLength = newContents.length;
      if (removeLength >= insertLength) {
        let delta = removeLength - insertLength;
        let insertEnd = start + insertLength;
        let newLength = this.length - delta;
        this.this.setRange(start, insertEnd, newContents);
        if (delta !== 0) {
          this.this.setRange(insertEnd, newLength, this, end);
          this.length = newLength;
        }
      }
       else {
        let delta = insertLength - removeLength;
        let newLength = this.length + delta;
        let insertEnd = start + insertLength;
        this.length = newLength;
        this.this.setRange(insertEnd, newLength, this, end);
        this.this.setRange(start, insertEnd, newContents);
      }
    }
    indexOf(element, startIndex) {
      if (startIndex === undefined) startIndex = 0;
      if (startIndex >= this.length) {
        return -1;
      }
      if (startIndex < 0) {
        startIndex = 0;
      }
      for (let i = startIndex; i < this.length; i++) {
        if (dart.equals(this[i], element)) {
          return i;
        }
      }
      return -1;
    }
    lastIndexOf(element, startIndex) {
      if (startIndex === undefined) startIndex = null;
      if (startIndex === null) {
        startIndex = this.length - 1;
      }
       else {
        if (startIndex < 0) {
          return -1;
        }
        if (startIndex >= this.length) {
          startIndex = this.length - 1;
        }
      }
      for (let i = startIndex; i >= 0; i--) {
        if (dart.equals(this[i], element)) {
          return i;
        }
      }
      return -1;
    }
    insert(index, element) {
      dart_core.RangeError.checkValueInInterval(index, 0, length, "index");
      if (index === this.length) {
        this.add(element);
        return;
      }
      if (/* Unimplemented IsExpression: index is! int */) throw new dart_core.ArgumentError(index);
      this.length++;
      this.setRange(index + 1, this.length, this, index);
      this[index] = element;
    }
    removeAt(index) {
      let result = this[index];
      this.setRange(index, this.length - 1, this, index + 1);
      length--;
      return result;
    }
    insertAll(index, iterable) {
      dart_core.RangeError.checkValueInInterval(index, 0, length, "index");
      if (/* Unimplemented IsExpression: iterable is EfficientLength */) {
        iterable = iterable.toList();
      }
      let insertionLength = iterable.length;
      this.length = insertionLength;
      this.setRange(index + insertionLength, this.length, this, index);
      this.setAll(index, iterable);
    }
    setAll(index, iterable) {
      if (/* Unimplemented IsExpression: iterable is List */) {
        this.setRange(index, index + iterable.length, iterable);
      }
       else {
        /* Unimplemented ForEachStatement: for (E element in iterable) {this[index++] = element;} */}
    }
    get reversed() { return new _internal.ReversedListIterable(this); }
    toString() { return IterableBase.iterableToFullString(this, "[", "]"); }
  }

  class MapBase extends dart.mixin(MapMixin/* Unimplemented <K, V> */) {}

  class MapMixin/* Unimplemented <K, V> */ {
    forEach(/* Unimplemented FunctionTypedFormalParameter: void action(K key, V value) */) {
      /* Unimplemented ForEachStatement: for (K key in keys) {action(key, this[key]);} */}
    addAll(other) {
      /* Unimplemented ForEachStatement: for (K key in other.keys) {this[key] = other[key];} */}
    containsValue(value) {
      /* Unimplemented ForEachStatement: for (K key in keys) {if (this[key] == value) return true;} */return false;
    }
    putIfAbsent(key, /* Unimplemented FunctionTypedFormalParameter: V ifAbsent() */) {
      if (this.keys.contains(key)) {
        return this[key];
      }
      return this[key] = ifAbsent();
    }
    containsKey(key) { return this.keys.contains(key); }
    get length() { return this.keys.length; }
    get isEmpty() { return this.keys.isEmpty; }
    get isNotEmpty() { return this.keys.isNotEmpty; }
    get values() { return new _MapBaseValueIterable(this); }
    toString() { return Maps.mapToString(this); }
  }

  class UnmodifiableMapBase extends dart.mixin(_UnmodifiableMapMixin/* Unimplemented <K, V> */) {}

  class _MapBaseValueIterable/* Unimplemented <V> */ extends IterableBase/* Unimplemented <V> */ {
    constructor(_map) {
      this._map = _map;
      super();
    }
    get length() { return this._map.length; }
    get isEmpty() { return this._map.isEmpty; }
    get isNotEmpty() { return this._map.isNotEmpty; }
    get first() { return /* Unimplemented: DownCast: dynamic to V */ this._map[this._map.keys.first]; }
    get single() { return /* Unimplemented: DownCast: dynamic to V */ this._map[this._map.keys.single]; }
    get last() { return /* Unimplemented: DownCast: dynamic to V */ this._map[this._map.keys.last]; }
    get iterator() { return new _MapBaseValueIterator(this._map); }
  }

  class _MapBaseValueIterator/* Unimplemented <V> */ {
    constructor(map) {
      this._map = map;
      this._keys = map.keys.iterator;
      this._current = null;
    }
    moveNext() {
      if (this._keys.moveNext()) {
        this._current = /* Unimplemented: DownCast: dynamic to V */ this._map[this._keys.current];
        return true;
      }
      this._current = null;
      return false;
    }
    get current() { return this._current; }
  }

  class _UnmodifiableMapMixin/* Unimplemented <K, V> */ {
    []=(key, value) {
      throw new dart_core.UnsupportedError("Cannot modify unmodifiable map");
    }
    addAll(other) {
      throw new dart_core.UnsupportedError("Cannot modify unmodifiable map");
    }
    clear() {
      throw new dart_core.UnsupportedError("Cannot modify unmodifiable map");
    }
    remove(key) {
      throw new dart_core.UnsupportedError("Cannot modify unmodifiable map");
    }
    putIfAbsent(key, /* Unimplemented FunctionTypedFormalParameter: V ifAbsent() */) {
      throw new dart_core.UnsupportedError("Cannot modify unmodifiable map");
    }
  }

  class MapView/* Unimplemented <K, V> */ {
    constructor(map) {
      this._map = map;
    }
    [](key) { return this._map[key]; }
    []=(key, value) {
      this._map[key] = value;
    }
    addAll(other) {
      this._map.addAll(other);
    }
    clear() {
      this._map.clear();
    }
    putIfAbsent(key, /* Unimplemented FunctionTypedFormalParameter: V ifAbsent() */) { return this._map.putIfAbsent(key, ifAbsent); }
    containsKey(key) { return this._map.containsKey(key); }
    containsValue(value) { return this._map.containsValue(value); }
    forEach(/* Unimplemented FunctionTypedFormalParameter: void action(K key, V value) */) {
      this._map.forEach(action);
    }
    get isEmpty() { return this._map.isEmpty; }
    get isNotEmpty() { return this._map.isNotEmpty; }
    get length() { return this._map.length; }
    get keys() { return this._map.keys; }
    remove(key) { return this._map.remove(key); }
    toString() { return this._map.toString(); }
    get values() { return this._map.values; }
  }

  class UnmodifiableMapView extends dart.mixin(_UnmodifiableMapMixin/* Unimplemented <K, V> */) {}

  class Maps {
    static containsValue(map, value) {
      /* Unimplemented ForEachStatement: for (final v in map.values) {if (value == v) {return true;}} */return false;
    }
    static containsKey(map, key) {
      /* Unimplemented ForEachStatement: for (final k in map.keys) {if (key == k) {return true;}} */return false;
    }
    static putIfAbsent(map, key, /* Unimplemented FunctionTypedFormalParameter: ifAbsent() */) {
      if (map.containsKey(key)) {
        return map[key];
      }
      let v = ifAbsent();
      map[key] = v;
      return v;
    }
    static clear(map) {
      /* Unimplemented ForEachStatement: for (final k in map.keys.toList()) {map.remove(k);} */}
    static forEach(map, /* Unimplemented FunctionTypedFormalParameter: void f(key, value) */) {
      /* Unimplemented ForEachStatement: for (final k in map.keys) {f(k, map[k]);} */}
    static getValues(map) {
      return map.keys.map((key) => map[key]);
    }
    static length(map) { return map.keys.length; }
    static isEmpty(map) { return map.keys.isEmpty; }
    static isNotEmpty(map) { return map.keys.isNotEmpty; }
    static mapToString(m) {
      if (IterableBase._isToStringVisiting(m)) {
        return "{...}";
      }
      let result = new dart_core.StringBuffer();
      /* Unimplemented TryStatement: try {IterableBase._toStringVisiting.add(m); result.write('{'); bool first = true; m.forEach((k, v) {if (!first) {result.write(', ');} first = false; result.write(k); result.write(': '); result.write(v);}); result.write('}');} finally {assert (identical(IterableBase._toStringVisiting.last, m)); IterableBase._toStringVisiting.removeLast();} */return result.toString();
    }
    static _id(x) { return x; }
    static _fillMapWithMappedIterable(map, iterable, /* Unimplemented FunctionTypedFormalParameter: key(element) */, /* Unimplemented FunctionTypedFormalParameter: value(element) */) {
      if (key === null) key = _id;
      if (value === null) value = _id;
      /* Unimplemented ForEachStatement: for (var element in iterable) {map[key(element)] = value(element);} */}
    static _fillMapWithIterables(map, keys, values) {
      let keyIterator = keys.iterator;
      let valueIterator = values.iterator;
      let hasNextKey = keyIterator.moveNext();
      let hasNextValue = valueIterator.moveNext();
      while (hasNextKey && hasNextValue) {
        map[keyIterator.current] = valueIterator.current;
        hasNextKey = keyIterator.moveNext();
        hasNextValue = valueIterator.moveNext();
      }
      if (hasNextKey || hasNextValue) {
        throw new dart_core.ArgumentError("Iterables do not have same length.");
      }
    }
  }

  class Queue/* Unimplemented <E> */ {
    constructor() {
      return new ListQueue();
    }
    __init_from(elements) {
      return new ListQueue.from(elements);
    }
  }
  Queue.from = function(elements) { this.__init_from(elements) };
  Queue.from.prototype = Queue.prototype;

  class DoubleLinkedQueueEntry/* Unimplemented <E> */ {
    constructor(e) {
      this._element = e;
      this._previous = null;
      this._next = null;
    }
    _link(previous, next) {
      this._next = next;
      this._previous = previous;
      previous._next = this;
      next._previous = this;
    }
    append(e) {
      new DoubleLinkedQueueEntry(e).this._link(this, this._next);
    }
    prepend(e) {
      new DoubleLinkedQueueEntry(e).this._link(this._previous, this);
    }
    remove() {
      this._previous._next = this._next;
      this._next._previous = this._previous;
      this._next = null;
      this._previous = null;
      return this._element;
    }
    _asNonSentinelEntry() {
      return this;
    }
    previousEntry() {
      return this._previous.this._asNonSentinelEntry();
    }
    nextEntry() {
      return this._next.this._asNonSentinelEntry();
    }
    get element() {
      return this._element;
    }
    set element(e) {
      this._element = e;
    }
  }

  class _DoubleLinkedQueueEntrySentinel/* Unimplemented <E> */ extends DoubleLinkedQueueEntry/* Unimplemented <E> */ {
    constructor() {
      super(null);
      _link(this, this);
    }
    remove() {
      throw _internal.IterableElementError.noElement();
    }
    _asNonSentinelEntry() {
      return null;
    }
    set element(e) {
      dart.assert(false);
    }
    get element() {
      throw _internal.IterableElementError.noElement();
    }
  }

  class DoubleLinkedQueue/* Unimplemented <E> */ extends IterableBase/* Unimplemented <E> */ {
    constructor() {
      this._sentinel = null;
      this._elementCount = 0;
      super();
      this._sentinel = new _DoubleLinkedQueueEntrySentinel();
    }
    __init_from(elements) {
      let list = /* Unimplemented: DownCastExact: DoubleLinkedQueue<dynamic> to Queue<E> */ new DoubleLinkedQueue();
      /* Unimplemented ForEachStatement: for (final E e in elements) {list.addLast(e);} */return /* Unimplemented: DownCast: Queue<E> to DoubleLinkedQueue<E> */ list;
    }
    get length() { return this._elementCount; }
    addLast(value) {
      this._sentinel.prepend(value);
      this._elementCount++;
    }
    addFirst(value) {
      this._sentinel.append(value);
      this._elementCount++;
    }
    add(value) {
      this._sentinel.prepend(value);
      this._elementCount++;
    }
    addAll(iterable) {
      /* Unimplemented ForEachStatement: for (final E value in iterable) {_sentinel.prepend(value); _elementCount++;} */}
    removeLast() {
      let result = this._sentinel._previous.remove();
      this._elementCount--;
      return result;
    }
    removeFirst() {
      let result = this._sentinel._next.remove();
      this._elementCount--;
      return result;
    }
    remove(o) {
      let entry = this._sentinel._next;
      while (!dart_core.identical(entry, this._sentinel)) {
        if (dart.equals(entry.element, o)) {
          entry.remove();
          this._elementCount--;
          return true;
        }
        entry = entry._next;
      }
      return false;
    }
    _filter(/* Unimplemented FunctionTypedFormalParameter: bool test(E element) */, removeMatching) {
      let entry = this._sentinel._next;
      while (!dart_core.identical(entry, this._sentinel)) {
        let next = entry._next;
        if (dart_core.identical(removeMatching, test(entry.element))) {
          entry.remove();
          this._elementCount--;
        }
        entry = next;
      }
    }
    removeWhere(/* Unimplemented FunctionTypedFormalParameter: bool test(E element) */) {
      this._filter(test, true);
    }
    retainWhere(/* Unimplemented FunctionTypedFormalParameter: bool test(E element) */) {
      this._filter(test, false);
    }
    get first() {
      return this._sentinel._next.element;
    }
    get last() {
      return this._sentinel._previous.element;
    }
    get single() {
      if (dart_core.identical(this._sentinel._next, this._sentinel._previous)) {
        return this._sentinel._next.element;
      }
      throw _internal.IterableElementError.tooMany();
    }
    lastEntry() {
      return this._sentinel.previousEntry();
    }
    firstEntry() {
      return this._sentinel.nextEntry();
    }
    get isEmpty() {
      return (dart_core.identical(this._sentinel._next, this._sentinel));
    }
    clear() {
      this._sentinel._next = this._sentinel;
      this._sentinel._previous = this._sentinel;
      this._elementCount = 0;
    }
    forEachEntry(/* Unimplemented FunctionTypedFormalParameter: void f(DoubleLinkedQueueEntry<E> element) */) {
      let entry = this._sentinel._next;
      while (!dart_core.identical(entry, this._sentinel)) {
        let nextEntry = entry._next;
        f(entry);
        entry = nextEntry;
      }
    }
    get iterator() {
      return new _DoubleLinkedQueueIterator(this._sentinel);
    }
    toString() { return IterableBase.iterableToFullString(this, "{", "}"); }
  }
  DoubleLinkedQueue.from = function(elements) { this.__init_from(elements) };
  DoubleLinkedQueue.from.prototype = DoubleLinkedQueue.prototype;

  class _DoubleLinkedQueueIterator/* Unimplemented <E> */ {
    constructor(sentinel) {
      this._sentinel = sentinel;
      this._nextEntry = sentinel._next;
      this._current = null;
    }
    moveNext() {
      if (!dart_core.identical(this._nextEntry, this._sentinel)) {
        this._current = this._nextEntry._element;
        this._nextEntry = this._nextEntry._next;
        return true;
      }
      this._current = null;
      this._nextEntry = this._sentinel = null;
      return false;
    }
    get current() { return this._current; }
  }

  class ListQueue/* Unimplemented <E> */ extends IterableBase/* Unimplemented <E> */ {
    constructor(initialCapacity) {
      if (initialCapacity === undefined) initialCapacity = null;
      this._head = 0;
      this._tail = 0;
      this._INITIAL_CAPACITY = 8;
      this._table = null;
      this._modificationCount = 0;
      super();
      if (initialCapacity === null || initialCapacity < _INITIAL_CAPACITY) {
        initialCapacity = _INITIAL_CAPACITY;
      }
       else if (!_isPowerOf2(initialCapacity)) {
        initialCapacity = _nextPowerOf2(initialCapacity);
      }
      dart.assert(_isPowerOf2(initialCapacity));
      this._table = new dart_core.List(initialCapacity);
    }
    __init_from(elements) {
      if (/* Unimplemented IsExpression: elements is List */) {
        let length = elements.length;
        let queue = /* Unimplemented: DownCastExact: ListQueue<dynamic> to ListQueue<E> */ new ListQueue(length + 1);
        dart.assert(queue._table.length > length);
        let sourceList = /* Unimplemented: DownCast: Iterable<dynamic> to List<dynamic> */ elements;
        queue._table.setRange(0, length, /* Unimplemented: DownCastDynamic: List<dynamic> to Iterable<E> */ sourceList, 0);
        queue._tail = length;
        return queue;
      }
       else {
        let capacity = _INITIAL_CAPACITY;
        if (/* Unimplemented IsExpression: elements is EfficientLength */) {
          capacity = elements.length;
        }
        let result = new ListQueue(capacity);
        /* Unimplemented ForEachStatement: for (final E element in elements) {result.addLast(element);} */return result;
      }
    }
    get iterator() { return new _ListQueueIterator(this); }
    forEach(/* Unimplemented FunctionTypedFormalParameter: void action(E element) */) {
      let modificationCount = this._modificationCount;
      for (let i = this._head; i !== this._tail; i = (i + 1) & (this._table.length - 1)) {
        action(this._table[i]);
        this._checkModification(modificationCount);
      }
    }
    get isEmpty() { return this._head === this._tail; }
    get length() { return (this._tail - this._head) & (this._table.length - 1); }
    get first() {
      if (this._head === this._tail) throw _internal.IterableElementError.noElement();
      return this._table[this._head];
    }
    get last() {
      if (this._head === this._tail) throw _internal.IterableElementError.noElement();
      return this._table[(this._tail - 1) & (this._table.length - 1)];
    }
    get single() {
      if (this._head === this._tail) throw _internal.IterableElementError.noElement();
      if (this.length > 1) throw _internal.IterableElementError.tooMany();
      return this._table[this._head];
    }
    elementAt(index) {
      dart_core.RangeError.checkValidIndex(index, this);
      return this._table[(this._head + index) & (this._table.length - 1)];
    }
    toList(opt$) {
      let growable = opt$.growable === undefined ? true : opt$.growable;
      let list = null;
      if (growable) {
        list = /* Unimplemented cascade on non-simple identifier: new List<E>()..length = length */;
      }
       else {
        list = new dart_core.List(this.length);
      }
      this._writeToList(list);
      return list;
    }
    add(element) {
      this._add(element);
    }
    addAll(elements) {
      if (/* Unimplemented IsExpression: elements is List */) {
        let list = /* Unimplemented: DownCast: Iterable<E> to List<dynamic> */ elements;
        let addCount = list.length;
        let length = this.length;
        if (length + addCount >= this._table.length) {
          this._preGrow(length + addCount);
          this._table.setRange(length, length + addCount, /* Unimplemented: DownCastDynamic: List<dynamic> to Iterable<E> */ list, 0);
          this._tail = addCount;
        }
         else {
          let endSpace = this._table.length - this._tail;
          if (addCount < endSpace) {
            this._table.setRange(this._tail, this._tail + addCount, /* Unimplemented: DownCastDynamic: List<dynamic> to Iterable<E> */ list, 0);
            this._tail = addCount;
          }
           else {
            let preSpace = addCount - endSpace;
            this._table.setRange(this._tail, this._tail + endSpace, /* Unimplemented: DownCastDynamic: List<dynamic> to Iterable<E> */ list, 0);
            this._table.setRange(0, preSpace, /* Unimplemented: DownCastDynamic: List<dynamic> to Iterable<E> */ list, endSpace);
            this._tail = preSpace;
          }
        }
        this._modificationCount++;
      }
       else {
        /* Unimplemented ForEachStatement: for (E element in elements) _add(element); */}
    }
    remove(object) {
      for (let i = this._head; i !== this._tail; i = (i + 1) & (this._table.length - 1)) {
        let element = this._table[i];
        if (dart.equals(element, object)) {
          this._remove(i);
          this._modificationCount++;
          return true;
        }
      }
      return false;
    }
    _filterWhere(/* Unimplemented FunctionTypedFormalParameter: bool test(E element) */, removeMatching) {
      let index = this._head;
      let modificationCount = this._modificationCount;
      let i = this._head;
      while (i !== this._tail) {
        let element = this._table[i];
        let remove = dart_core.identical(removeMatching, test(element));
        this._checkModification(modificationCount);
        if (remove) {
          i = this._remove(i);
          modificationCount = ++this._modificationCount;
        }
         else {
          i = (i + 1) & (this._table.length - 1);
        }
      }
    }
    removeWhere(/* Unimplemented FunctionTypedFormalParameter: bool test(E element) */) {
      this._filterWhere(test, true);
    }
    retainWhere(/* Unimplemented FunctionTypedFormalParameter: bool test(E element) */) {
      this._filterWhere(test, false);
    }
    clear() {
      if (this._head !== this._tail) {
        for (let i = this._head; i !== this._tail; i = (i + 1) & (this._table.length - 1)) {
          this._table[i] = null;
        }
        this._head = this._tail = 0;
        this._modificationCount++;
      }
    }
    toString() { return IterableBase.iterableToFullString(this, "{", "}"); }
    addLast(element) {
      this._add(element);
    }
    addFirst(element) {
      this._head = (this._head - 1) & (this._table.length - 1);
      this._table[this._head] = element;
      if (this._head === this._tail) this._grow();
      this._modificationCount++;
    }
    removeFirst() {
      if (this._head === this._tail) throw _internal.IterableElementError.noElement();
      this._modificationCount++;
      let result = this._table[this._head];
      this._table[this._head] = null;
      this._head = (this._head + 1) & (this._table.length - 1);
      return result;
    }
    removeLast() {
      if (this._head === this._tail) throw _internal.IterableElementError.noElement();
      this._modificationCount++;
      this._tail = (this._tail - 1) & (this._table.length - 1);
      let result = this._table[this._tail];
      this._table[this._tail] = null;
      return result;
    }
    static _isPowerOf2(number) { return (number & (number - 1)) === 0; }
    static _nextPowerOf2(number) {
      dart.assert(number > 0);
      number = (number << 1) - 1;
      for (;;) {
        let nextNumber = number & (number - 1);
        if (nextNumber === 0) return number;
        number = nextNumber;
      }
    }
    _checkModification(expectedModificationCount) {
      if (expectedModificationCount !== this._modificationCount) {
        throw new dart_core.ConcurrentModificationError(this);
      }
    }
    _add(element) {
      this._table[this._tail] = element;
      this._tail = (this._tail + 1) & (this._table.length - 1);
      if (this._head === this._tail) this._grow();
      this._modificationCount++;
    }
    _remove(offset) {
      let mask = this._table.length - 1;
      let startDistance = (offset - this._head) & mask;
      let endDistance = (this._tail - offset) & mask;
      if (startDistance < endDistance) {
        let i = offset;
        while (i !== this._head) {
          let prevOffset = (i - 1) & mask;
          this._table[i] = this._table[prevOffset];
          i = prevOffset;
        }
        this._table[this._head] = null;
        this._head = (this._head + 1) & mask;
        return (offset + 1) & mask;
      }
       else {
        this._tail = (this._tail - 1) & mask;
        let i = offset;
        while (i !== this._tail) {
          let nextOffset = (i + 1) & mask;
          this._table[i] = this._table[nextOffset];
          i = nextOffset;
        }
        this._table[this._tail] = null;
        return offset;
      }
    }
    _grow() {
      let newTable = new dart_core.List(this._table.length * 2);
      let split = this._table.length - this._head;
      newTable.setRange(0, split, this._table, this._head);
      newTable.setRange(split, split + this._head, this._table, 0);
      this._head = 0;
      this._tail = this._table.length;
      this._table = newTable;
    }
    _writeToList(target) {
      dart.assert(target.length >= this.length);
      if (this._head <= this._tail) {
        let length = this._tail - this._head;
        target.setRange(0, length, this._table, this._head);
        return length;
      }
       else {
        let firstPartSize = this._table.length - this._head;
        target.setRange(0, firstPartSize, this._table, this._head);
        target.setRange(firstPartSize, firstPartSize + this._tail, this._table, 0);
        return this._tail + firstPartSize;
      }
    }
    _preGrow(newElementCount) {
      dart.assert(newElementCount >= this.length);
      newElementCount = newElementCount >> 1;
      let newCapacity = _nextPowerOf2(newElementCount);
      let newTable = new dart_core.List(newCapacity);
      this._tail = this._writeToList(newTable);
      this._table = newTable;
      this._head = 0;
    }
  }
  ListQueue.from = function(elements) { this.__init_from(elements) };
  ListQueue.from.prototype = ListQueue.prototype;

  class _ListQueueIterator/* Unimplemented <E> */ {
    constructor(queue) {
      this._queue = queue;
      this._end = queue._tail;
      this._modificationCount = queue._modificationCount;
      this._position = queue._head;
      this._current = null;
    }
    get current() { return this._current; }
    moveNext() {
      this._queue._checkModification(this._modificationCount);
      if (this._position === this._end) {
        this._current = null;
        return false;
      }
      this._current = /* Unimplemented: DownCast: dynamic to E */ this._queue._table[this._position];
      this._position = (this._position + 1) & (this._queue._table.length - 1);
      return true;
    }
  }

  class SetMixin/* Unimplemented <E> */ {
    get isEmpty() { return this.length === 0; }
    get isNotEmpty() { return this.length !== 0; }
    clear() {
      this.removeAll(this.toList());
    }
    addAll(elements) {
      /* Unimplemented ForEachStatement: for (E element in elements) add(element); */}
    removeAll(elements) {
      /* Unimplemented ForEachStatement: for (Object element in elements) remove(element); */}
    retainAll(elements) {
      let toRemove = this.toSet();
      /* Unimplemented ForEachStatement: for (Object o in elements) {toRemove.remove(o);} */this.removeAll(toRemove);
    }
    removeWhere(/* Unimplemented FunctionTypedFormalParameter: bool test(E element) */) {
      let toRemove = /* Unimplemented ArrayList */[];
      /* Unimplemented ForEachStatement: for (E element in this) {if (test(element)) toRemove.add(element);} */this.removeAll(/* Unimplemented: DownCastDynamic: List<dynamic> to Iterable<Object> */ toRemove);
    }
    retainWhere(/* Unimplemented FunctionTypedFormalParameter: bool test(E element) */) {
      let toRemove = /* Unimplemented ArrayList */[];
      /* Unimplemented ForEachStatement: for (E element in this) {if (!test(element)) toRemove.add(element);} */this.removeAll(/* Unimplemented: DownCastDynamic: List<dynamic> to Iterable<Object> */ toRemove);
    }
    containsAll(other) {
      /* Unimplemented ForEachStatement: for (Object o in other) {if (!contains(o)) return false;} */return true;
    }
    union(other) {
      return /* Unimplemented cascade on non-simple identifier: toSet()..addAll(other) */;
    }
    intersection(other) {
      let result = this.toSet();
      /* Unimplemented ForEachStatement: for (E element in this) {if (!other.contains(element)) result.remove(element);} */return result;
    }
    difference(other) {
      let result = this.toSet();
      /* Unimplemented ForEachStatement: for (E element in this) {if (other.contains(element)) result.remove(element);} */return result;
    }
    toList(opt$) {
      let growable = opt$.growable === undefined ? true : opt$.growable;
      let result = growable ? (/* Unimplemented cascade on non-simple identifier: new List<E>()..length = length */) : new dart_core.List(this.length);
      let i = 0;
      /* Unimplemented ForEachStatement: for (E element in this) result[i++] = element; */return result;
    }
    map(/* Unimplemented FunctionTypedFormalParameter: f(E element) */) { return new _internal.EfficientLengthMappedIterable(this, f); }
    get single() {
      if (this.length > 1) throw _internal.IterableElementError.tooMany();
      let it = this.iterator;
      if (!it.moveNext()) throw _internal.IterableElementError.noElement();
      let result = /* Unimplemented: DownCast: dynamic to E */ it.current;
      return result;
    }
    toString() { return IterableBase.iterableToFullString(this, "{", "}"); }
    where(/* Unimplemented FunctionTypedFormalParameter: bool f(E element) */) { return new _internal.WhereIterable(this, f); }
    expand(/* Unimplemented FunctionTypedFormalParameter: Iterable f(E element) */) { return new _internal.ExpandIterable(this, f); }
    forEach(/* Unimplemented FunctionTypedFormalParameter: void f(E element) */) {
      /* Unimplemented ForEachStatement: for (E element in this) f(element); */}
    reduce(/* Unimplemented FunctionTypedFormalParameter: E combine(E value, E element) */) {
      let iterator = this.iterator;
      if (!iterator.moveNext()) {
        throw _internal.IterableElementError.noElement();
      }
      let value = iterator.current;
      while (iterator.moveNext()) {
        value = combine(value, iterator.current);
      }
      return value;
    }
    fold(initialValue, /* Unimplemented FunctionTypedFormalParameter: dynamic combine(var previousValue, E element) */) {
      let value = initialValue;
      /* Unimplemented ForEachStatement: for (E element in this) value = combine(value, element); */return value;
    }
    every(/* Unimplemented FunctionTypedFormalParameter: bool f(E element) */) {
      /* Unimplemented ForEachStatement: for (E element in this) {if (!f(element)) return false;} */return true;
    }
    join(separator) {
      if (separator === undefined) separator = "";
      let iterator = this.iterator;
      if (!iterator.moveNext()) return "";
      let buffer = new dart_core.StringBuffer();
      if (separator === null || dart.equals(separator, "")) {
        do {
          buffer.write("" + (iterator.current) + "");
        }
        while (iterator.moveNext());
      }
       else {
        buffer.write("" + (iterator.current) + "");
        while (iterator.moveNext()) {
          buffer.write(separator);
          buffer.write("" + (iterator.current) + "");
        }
      }
      return buffer.toString();
    }
    any(/* Unimplemented FunctionTypedFormalParameter: bool test(E element) */) {
      /* Unimplemented ForEachStatement: for (E element in this) {if (test(element)) return true;} */return false;
    }
    take(n) {
      return new _internal.TakeIterable(this, n);
    }
    takeWhile(/* Unimplemented FunctionTypedFormalParameter: bool test(E value) */) {
      return new _internal.TakeWhileIterable(this, test);
    }
    skip(n) {
      return new _internal.SkipIterable(this, n);
    }
    skipWhile(/* Unimplemented FunctionTypedFormalParameter: bool test(E value) */) {
      return new _internal.SkipWhileIterable(this, test);
    }
    get first() {
      let it = this.iterator;
      if (!it.moveNext()) {
        throw _internal.IterableElementError.noElement();
      }
      return /* Unimplemented: DownCast: dynamic to E */ it.current;
    }
    get last() {
      let it = this.iterator;
      if (!it.moveNext()) {
        throw _internal.IterableElementError.noElement();
      }
      let result = null;
      do {
        result = /* Unimplemented: DownCast: dynamic to E */ it.current;
      }
      while (it.moveNext());
      return result;
    }
    firstWhere(/* Unimplemented FunctionTypedFormalParameter: bool test(E value) */, opt$) {
      let orElse = opt$.orElse === undefined ? null : opt$.orElse;
      /* Unimplemented ForEachStatement: for (E element in this) {if (test(element)) return element;} */if (orElse !== null) return orElse();
      throw _internal.IterableElementError.noElement();
    }
    lastWhere(/* Unimplemented FunctionTypedFormalParameter: bool test(E value) */, opt$) {
      let orElse = opt$.orElse === undefined ? null : opt$.orElse;
      let result = null;
      let foundMatching = false;
      /* Unimplemented ForEachStatement: for (E element in this) {if (test(element)) {result = element; foundMatching = true;}} */if (foundMatching) return result;
      if (orElse !== null) return orElse();
      throw _internal.IterableElementError.noElement();
    }
    singleWhere(/* Unimplemented FunctionTypedFormalParameter: bool test(E value) */) {
      let result = null;
      let foundMatching = false;
      /* Unimplemented ForEachStatement: for (E element in this) {if (test(element)) {if (foundMatching) {throw IterableElementError.tooMany();} result = element; foundMatching = true;}} */if (foundMatching) return result;
      throw _internal.IterableElementError.noElement();
    }
    elementAt(index) {
      if (/* Unimplemented IsExpression: index is! int */) throw new dart_core.ArgumentError.notNull("index");
      dart_core.RangeError.checkNotNegative(index, "index");
      let elementIndex = 0;
      /* Unimplemented ForEachStatement: for (E element in this) {if (index == elementIndex) return element; elementIndex++;} */throw new dart_core.RangeError.index(index, this, "index", null, elementIndex);
    }
  }

  class SetBase/* Unimplemented <E> */ extends SetMixin/* Unimplemented <E> */ {
    static setToString(set) { return IterableBase.iterableToFullString(set, "{", "}"); }
  }

  class _SplayTreeNode/* Unimplemented <K> */ {
    constructor(key) {
      this.key = key;
      this.left = null;
      this.right = null;
    }
  }

  class _SplayTreeMapNode/* Unimplemented <K, V> */ extends _SplayTreeNode/* Unimplemented <K> */ {
    constructor(key, value) {
      this.value = value;
      super(key);
    }
  }

  class _SplayTree/* Unimplemented <K> */ {
    constructor() {
      this._dummy = new _SplayTreeNode(null);
      this._root = null;
      this._count = 0;
      this._modificationCount = 0;
      this._splayCount = 0;
      super();
    }
    _splay(key) {
      if (this._root === null) return -1;
      let left = this._dummy;
      let right = this._dummy;
      let current = this._root;
      let comp = null;
      while (true) {
        comp = this._compare(current.key, key);
        if (comp > 0) {
          if (current.left === null) /* Unimplemented BreakStatement: break; */comp = this._compare(current.left.key, key);
          if (comp > 0) {
            let tmp = current.left;
            current.left = tmp.right;
            tmp.right = current;
            current = tmp;
            if (current.left === null) /* Unimplemented BreakStatement: break; */}
          right.left = current;
          right = current;
          current = current.left;
        }
         else if (comp < 0) {
          if (current.right === null) /* Unimplemented BreakStatement: break; */comp = this._compare(current.right.key, key);
          if (comp < 0) {
            let tmp = current.right;
            current.right = tmp.left;
            tmp.left = current;
            current = tmp;
            if (current.right === null) /* Unimplemented BreakStatement: break; */}
          left.right = current;
          left = current;
          current = current.right;
        }
         else {
          /* Unimplemented BreakStatement: break; */}
      }
      left.right = current.left;
      right.left = current.right;
      current.left = this._dummy.right;
      current.right = this._dummy.left;
      this._root = current;
      this._dummy.right = null;
      this._dummy.left = null;
      this._splayCount++;
      return comp;
    }
    _splayMin(node) {
      let current = node;
      while (current.left !== null) {
        let left = current.left;
        current.left = left.right;
        left.right = current;
        current = left;
      }
      return /* Unimplemented: DownCastDynamic: _SplayTreeNode<dynamic> to _SplayTreeNode<K> */ current;
    }
    _splayMax(node) {
      let current = node;
      while (current.right !== null) {
        let right = current.right;
        current.right = right.left;
        right.left = current;
        current = right;
      }
      return /* Unimplemented: DownCastDynamic: _SplayTreeNode<dynamic> to _SplayTreeNode<K> */ current;
    }
    _remove(key) {
      if (this._root === null) return null;
      let comp = this._splay(key);
      if (comp !== 0) return null;
      let result = this._root;
      this._count--;
      if (this._root.left === null) {
        this._root = this._root.right;
      }
       else {
        let right = this._root.right;
        this._root = this._splayMax(this._root.left);
        this._root.right = right;
      }
      this._modificationCount++;
      return result;
    }
    _addNewRoot(node, comp) {
      this._count++;
      this._modificationCount++;
      if (this._root === null) {
        this._root = node;
        return;
      }
      if (comp < 0) {
        node.left = this._root;
        node.right = this._root.right;
        this._root.right = null;
      }
       else {
        node.right = this._root;
        node.left = this._root.left;
        this._root.left = null;
      }
      this._root = node;
    }
    get _first() {
      if (this._root === null) return null;
      this._root = this._splayMin(this._root);
      return this._root;
    }
    get _last() {
      if (this._root === null) return null;
      this._root = this._splayMax(this._root);
      return this._root;
    }
    _clear() {
      this._root = null;
      this._count = 0;
      this._modificationCount++;
    }
  }

  class _TypeTest/* Unimplemented <T> */ {
    test(v) { return /* Unimplemented IsExpression: v is T */; }
  }

  class SplayTreeMap/* Unimplemented <K, V> */ extends _SplayTree/* Unimplemented <K> */ {
    constructor(compare, isValidKey) {
      if (compare === undefined) compare = null;
      if (isValidKey === undefined) isValidKey = null;
      this._comparator = (compare === null) ? dart_core.Comparable.compare : compare;
      this._validKey = (isValidKey !== null) ? isValidKey : ((v) => /* Unimplemented IsExpression: v is K */);
      super();
    }
    __init_from(other, compare, isValidKey) {
      if (compare === undefined) compare = null;
      if (isValidKey === undefined) isValidKey = null;
      let result = new SplayTreeMap();
      other.forEach((k, v) => {
        result[k] = /* Unimplemented: DownCast: dynamic to V */ v;
      });
      return result;
    }
    __init_fromIterable(iterable, opt$) {
      let key = opt$.key === undefined ? null : opt$.key;
      let value = opt$.value === undefined ? null : opt$.value;
      let compare = opt$.compare === undefined ? null : opt$.compare;
      let isValidKey = opt$.isValidKey === undefined ? null : opt$.isValidKey;
      let map = new SplayTreeMap(compare, isValidKey);
      Maps._fillMapWithMappedIterable(map, iterable, key, value);
      return map;
    }
    __init_fromIterables(keys, values, compare, isValidKey) {
      if (compare === undefined) compare = null;
      if (isValidKey === undefined) isValidKey = null;
      let map = new SplayTreeMap(compare, isValidKey);
      Maps._fillMapWithIterables(map, keys, values);
      return map;
    }
    _compare(key1, key2) { return this._comparator(key1, key2); }
    __init__internal() {
      this._comparator = null;
      this._validKey = null;
      _SplayTree.call(this);
    }
    [](key) {
      if (key === null) throw new dart_core.ArgumentError(key);
      if (!this._validKey(key)) return null;
      if (_root !== null) {
        let comp = _splay(/* Unimplemented: DownCast: Object to K */ key);
        if (comp === 0) {
          let mapRoot = /* Unimplemented: DownCast: _SplayTreeNode<K> to _SplayTreeMapNode<dynamic, dynamic> */ _root;
          return /* Unimplemented: DownCast: dynamic to V */ mapRoot.value;
        }
      }
      return null;
    }
    remove(key) {
      if (!this._validKey(key)) return null;
      let mapRoot = /* Unimplemented: DownCast: _SplayTreeNode<dynamic> to _SplayTreeMapNode<dynamic, dynamic> */ _remove(/* Unimplemented: DownCast: Object to K */ key);
      if (mapRoot !== null) return /* Unimplemented: DownCast: dynamic to V */ mapRoot.value;
      return null;
    }
    []=(key, value) {
      if (key === null) throw new dart_core.ArgumentError(key);
      let comp = _splay(key);
      if (comp === 0) {
        let mapRoot = /* Unimplemented: DownCast: _SplayTreeNode<K> to _SplayTreeMapNode<dynamic, dynamic> */ _root;
        mapRoot.value = value;
        return;
      }
      _addNewRoot(/* Unimplemented: DownCastExact: _SplayTreeMapNode<dynamic, dynamic> to _SplayTreeNode<K> */ new _SplayTreeMapNode(key, value), comp);
    }
    putIfAbsent(key, /* Unimplemented FunctionTypedFormalParameter: V ifAbsent() */) {
      if (key === null) throw new dart_core.ArgumentError(key);
      let comp = _splay(key);
      if (comp === 0) {
        let mapRoot = /* Unimplemented: DownCast: _SplayTreeNode<K> to _SplayTreeMapNode<dynamic, dynamic> */ _root;
        return /* Unimplemented: DownCast: dynamic to V */ mapRoot.value;
      }
      let modificationCount = _modificationCount;
      let splayCount = _splayCount;
      let value = ifAbsent();
      if (modificationCount !== _modificationCount) {
        throw new dart_core.ConcurrentModificationError(this);
      }
      if (splayCount !== _splayCount) {
        comp = _splay(key);
        dart.assert(comp !== 0);
      }
      _addNewRoot(/* Unimplemented: DownCastExact: _SplayTreeMapNode<dynamic, dynamic> to _SplayTreeNode<K> */ new _SplayTreeMapNode(key, value), comp);
      return value;
    }
    addAll(other) {
      other.forEach((key, value) => {
        this[key] = value;
      });
    }
    get isEmpty() {
      return (_root === null);
    }
    get isNotEmpty() { return !this.isEmpty; }
    forEach(/* Unimplemented FunctionTypedFormalParameter: void f(K key, V value) */) {
      let nodes = new _SplayTreeNodeIterator(this);
      while (nodes.moveNext()) {
        let node = /* Unimplemented: DownCast: _SplayTreeNode<K> to _SplayTreeMapNode<K, V> */ nodes.current;
        f(node.key, node.value);
      }
    }
    get length() {
      return _count;
    }
    clear() {
      _clear();
    }
    containsKey(key) {
      return this._validKey(key) && _splay(/* Unimplemented: DownCast: Object to K */ key) === 0;
    }
    containsValue(value) {
      let found = false;
      let initialSplayCount = _splayCount;
      // Function visit: (_SplayTreeMapNode<dynamic, dynamic>) → bool
      function visit(node) {
        while (node !== null) {
          if (dart.equals(node.value, value)) return true;
          if (initialSplayCount !== _splayCount) {
            throw new dart_core.ConcurrentModificationError(this);
          }
          if (node.right !== null && visit(/* Unimplemented: DownCast: _SplayTreeNode<dynamic> to _SplayTreeMapNode<dynamic, dynamic> */ node.right)) return true;
          node = /* Unimplemented: DownCast: _SplayTreeNode<dynamic> to _SplayTreeMapNode<dynamic, dynamic> */ node.left;
        }
        return false;
      }
      return visit(/* Unimplemented: DownCast: _SplayTreeNode<K> to _SplayTreeMapNode<dynamic, dynamic> */ _root);
    }
    get keys() { return new _SplayTreeKeyIterable(this); }
    get values() { return new _SplayTreeValueIterable(this); }
    toString() {
      return Maps.mapToString(this);
    }
    firstKey() {
      if (_root === null) return null;
      return /* Unimplemented: DownCast: dynamic to K */ _first.key;
    }
    lastKey() {
      if (_root === null) return null;
      return /* Unimplemented: DownCast: dynamic to K */ _last.key;
    }
    lastKeyBefore(key) {
      if (key === null) throw new dart_core.ArgumentError(key);
      if (_root === null) return null;
      let comp = _splay(key);
      if (comp < 0) return _root.key;
      let node = _root.left;
      if (node === null) return null;
      while (node.right !== null) {
        node = node.right;
      }
      return node.key;
    }
    firstKeyAfter(key) {
      if (key === null) throw new dart_core.ArgumentError(key);
      if (_root === null) return null;
      let comp = _splay(key);
      if (comp > 0) return _root.key;
      let node = _root.right;
      if (node === null) return null;
      while (node.left !== null) {
        node = node.left;
      }
      return node.key;
    }
  }
  SplayTreeMap.from = function(other, compare, isValidKey) { this.__init_from(other, compare, isValidKey) };
  SplayTreeMap.from.prototype = SplayTreeMap.prototype;
  SplayTreeMap.fromIterable = function(iterable, opt$) { this.__init_fromIterable(iterable, opt$) };
  SplayTreeMap.fromIterable.prototype = SplayTreeMap.prototype;
  SplayTreeMap.fromIterables = function(keys, values, compare, isValidKey) { this.__init_fromIterables(keys, values, compare, isValidKey) };
  SplayTreeMap.fromIterables.prototype = SplayTreeMap.prototype;
  SplayTreeMap._internal = function() { this.__init__internal() };
  SplayTreeMap._internal.prototype = SplayTreeMap.prototype;

  class _SplayTreeIterator/* Unimplemented <T> */ {
    constructor(tree) {
      this._workList = /* Unimplemented ArrayList */[];
      this._tree = tree;
      this._modificationCount = tree._modificationCount;
      this._splayCount = tree._splayCount;
      this._currentNode = null;
      this._findLeftMostDescendent(tree._root);
    }
    __init_startAt(tree, startKey) {
      this._workList = /* Unimplemented ArrayList */[];
      this._tree = tree;
      this._modificationCount = tree._modificationCount;
      this._splayCount = null;
      this._currentNode = null;
      if (tree._root === null) return;
      let compare = tree._splay(startKey);
      this._splayCount = tree._splayCount;
      if (compare < 0) {
        this._findLeftMostDescendent(tree._root.right);
      }
       else {
        this._workList.add(tree._root);
      }
    }
    get current() {
      if (this._currentNode === null) return null;
      return this._getValue(this._currentNode);
    }
    _findLeftMostDescendent(node) {
      while (node !== null) {
        this._workList.add(node);
        node = node.left;
      }
    }
    _rebuildWorkList(currentNode) {
      dart.assert(!this._workList.isEmpty);
      this._workList.clear();
      if (currentNode === null) {
        this._findLeftMostDescendent(this._tree._root);
      }
       else {
        this._tree._splay(currentNode.key);
        this._findLeftMostDescendent(this._tree._root.right);
        dart.assert(!this._workList.isEmpty);
      }
    }
    moveNext() {
      if (this._modificationCount !== this._tree._modificationCount) {
        throw new dart_core.ConcurrentModificationError(this._tree);
      }
      if (this._workList.isEmpty) {
        this._currentNode = null;
        return false;
      }
      if (this._tree._splayCount !== this._splayCount && this._currentNode !== null) {
        this._rebuildWorkList(this._currentNode);
      }
      this._currentNode = this._workList.removeLast();
      this._findLeftMostDescendent(this._currentNode.right);
      return true;
    }
  }
  _SplayTreeIterator.startAt = function(tree, startKey) { this.__init_startAt(tree, startKey) };
  _SplayTreeIterator.startAt.prototype = _SplayTreeIterator.prototype;

  class _SplayTreeKeyIterable/* Unimplemented <K> */ extends IterableBase/* Unimplemented <K> */ {
    constructor(_tree) {
      this._tree = _tree;
      super();
    }
    get length() { return this._tree._count; }
    get isEmpty() { return this._tree._count === 0; }
    get iterator() { return new _SplayTreeKeyIterator(this._tree); }
    toSet() {
      let setOrMap = this._tree;
      let set = new SplayTreeSet(setOrMap._comparator, setOrMap._validKey);
      set._count = this._tree._count;
      set._root = set._copyNode(this._tree._root);
      return set;
    }
  }

  class _SplayTreeValueIterable/* Unimplemented <K, V> */ extends IterableBase/* Unimplemented <V> */ {
    constructor(_map) {
      this._map = _map;
      super();
    }
    get length() { return this._map._count; }
    get isEmpty() { return this._map._count === 0; }
    get iterator() { return new _SplayTreeValueIterator(this._map); }
  }

  class _SplayTreeKeyIterator/* Unimplemented <K> */ extends _SplayTreeIterator/* Unimplemented <K> */ {
    constructor(map) {
      super(map);
    }
    _getValue(node) { return /* Unimplemented: DownCast: dynamic to K */ node.key; }
  }

  class _SplayTreeValueIterator/* Unimplemented <K, V> */ extends _SplayTreeIterator/* Unimplemented <V> */ {
    constructor(map) {
      super(map);
    }
    _getValue(node) { return /* Unimplemented: DownCast: dynamic to V */ node.value; }
  }

  class _SplayTreeNodeIterator/* Unimplemented <K> */ extends _SplayTreeIterator/* Unimplemented <_SplayTreeNode<K>> */ {
    constructor(tree) {
      super(tree);
    }
    __init_startAt(tree, startKey) {
      super.__init_startAt(tree, startKey);
    }
    _getValue(node) { return /* Unimplemented: DownCastDynamic: _SplayTreeNode<dynamic> to _SplayTreeNode<K> */ node; }
  }
  _SplayTreeNodeIterator.startAt = function(tree, startKey) { this.__init_startAt(tree, startKey) };
  _SplayTreeNodeIterator.startAt.prototype = _SplayTreeNodeIterator.prototype;

  class SplayTreeSet/* Unimplemented <E> */ extends dart.mixin(_SplayTree/* Unimplemented <E> */, IterableMixin/* Unimplemented <E> */, SetMixin/* Unimplemented <E> */) {
    constructor(compare, isValidKey) {
      if (compare === undefined) compare = null;
      if (isValidKey === undefined) isValidKey = null;
      this._comparator = (compare === null) ? dart_core.Comparable.compare : compare;
      this._validKey = (isValidKey !== null) ? isValidKey : ((v) => /* Unimplemented IsExpression: v is E */);
      super();
    }
    __init_from(elements, compare, isValidKey) {
      if (compare === undefined) compare = null;
      if (isValidKey === undefined) isValidKey = null;
      let result = new SplayTreeSet(compare, isValidKey);
      /* Unimplemented ForEachStatement: for (final E element in elements) {result.add(element);} */return result;
    }
    _compare(e1, e2) { return this._comparator(e1, e2); }
    get iterator() { return new _SplayTreeKeyIterator(this); }
    get length() { return _count; }
    get isEmpty() { return _root === null; }
    get isNotEmpty() { return _root !== null; }
    get first() {
      if (_count === 0) throw _internal.IterableElementError.noElement();
      return /* Unimplemented: DownCast: dynamic to E */ _first.key;
    }
    get last() {
      if (_count === 0) throw _internal.IterableElementError.noElement();
      return /* Unimplemented: DownCast: dynamic to E */ _last.key;
    }
    get single() {
      if (_count === 0) throw _internal.IterableElementError.noElement();
      if (_count > 1) throw _internal.IterableElementError.tooMany();
      return _root.key;
    }
    contains(object) {
      return this._validKey(object) && _splay(/* Unimplemented: DownCast: Object to E */ object) === 0;
    }
    add(element) {
      let compare = _splay(element);
      if (compare === 0) return false;
      _addNewRoot(/* Unimplemented: DownCastExact: _SplayTreeNode<dynamic> to _SplayTreeNode<E> */ new _SplayTreeNode(element), compare);
      return true;
    }
    remove(object) {
      if (!this._validKey(object)) return false;
      return _remove(/* Unimplemented: DownCast: Object to E */ object) !== null;
    }
    addAll(elements) {
      /* Unimplemented ForEachStatement: for (E element in elements) {int compare = _splay(element); if (compare != 0) {_addNewRoot(new _SplayTreeNode(element), compare);}} */}
    removeAll(elements) {
      /* Unimplemented ForEachStatement: for (Object element in elements) {if (_validKey(element)) _remove(element);} */}
    retainAll(elements) {
      let retainSet = new SplayTreeSet(this._comparator, this._validKey);
      let modificationCount = _modificationCount;
      /* Unimplemented ForEachStatement: for (Object object in elements) {if (modificationCount != _modificationCount) {throw new ConcurrentModificationError(this);} if (_validKey(object) && _splay(object) == 0) retainSet.add(_root.key);} */if (retainSet._count !== _count) {
        _root = retainSet._root;
        _count = retainSet._count;
        _modificationCount++;
      }
    }
    lookup(object) {
      if (!this._validKey(object)) return null;
      let comp = _splay(/* Unimplemented: DownCast: Object to E */ object);
      if (comp !== 0) return null;
      return _root.key;
    }
    intersection(other) {
      let result = new SplayTreeSet(this._comparator, this._validKey);
      /* Unimplemented ForEachStatement: for (E element in this) {if (other.contains(element)) result.add(element);} */return result;
    }
    difference(other) {
      let result = new SplayTreeSet(this._comparator, this._validKey);
      /* Unimplemented ForEachStatement: for (E element in this) {if (!other.contains(element)) result.add(element);} */return result;
    }
    union(other) {
      return /* Unimplemented cascade on non-simple identifier: _clone()..addAll(other) */;
    }
    _clone() {
      let set = new SplayTreeSet(this._comparator, this._validKey);
      set._count = _count;
      set._root = this._copyNode(_root);
      return set;
    }
    _copyNode(node) {
      if (node === null) return null;
      return /* Unimplemented cascade on non-simple identifier: new _SplayTreeNode<E>(node.key)..left = _copyNode(node.left)..right = _copyNode(node.right) */;
    }
    clear() {
      _clear();
    }
    toSet() { return this._clone(); }
    toString() { return IterableBase.iterableToFullString(this, "{", "}"); }
  }
  SplayTreeSet.from = function(elements, compare, isValidKey) { this.__init_from(elements, compare, isValidKey) };
  SplayTreeSet.from.prototype = SplayTreeSet.prototype;

  // Exports:
  collection.UnmodifiableListView = UnmodifiableListView;
  collection.HashMap = HashMap;
  collection.HashSet = HashSet;
  collection.IterableMixin = IterableMixin;
  collection.IterableBase = IterableBase;
  collection.HasNextIterator = HasNextIterator;
  collection.LinkedHashMap = LinkedHashMap;
  collection.LinkedHashSet = LinkedHashSet;
  collection.LinkedList = LinkedList;
  collection.LinkedListEntry = LinkedListEntry;
  collection.ListBase = ListBase;
  collection.ListMixin = ListMixin;
  collection.MapBase = MapBase;
  collection.MapMixin = MapMixin;
  collection.UnmodifiableMapBase = UnmodifiableMapBase;
  collection.MapView = MapView;
  collection.UnmodifiableMapView = UnmodifiableMapView;
  collection.Maps = Maps;
  collection.Queue = Queue;
  collection.DoubleLinkedQueueEntry = DoubleLinkedQueueEntry;
  collection.DoubleLinkedQueue = DoubleLinkedQueue;
  collection.ListQueue = ListQueue;
  collection.SetMixin = SetMixin;
  collection.SetBase = SetBase;
  collection.SplayTreeMap = SplayTreeMap;
  collection.SplayTreeSet = SplayTreeSet;
})(collection || (collection = {}));