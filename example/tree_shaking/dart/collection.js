dart_library.library('dart/collection', null, /* Imports */[
  'dart/_runtime',
  'dart/core'
], /* Lazy imports */[
  'dart/_internal',
  'dart/_js_helper'
], function(exports, dart, core, _internal, _js_helper) {
  'use strict';
  let dartx = dart.dartx;
  function _defaultEquals(a, b) {
    return dart.equals(a, b);
  }
  dart.fn(_defaultEquals, core.bool, [core.Object, core.Object]);
  function _defaultHashCode(a) {
    return dart.hashCode(a);
  }
  dart.fn(_defaultHashCode, core.int, [core.Object]);
  const _Equality$ = dart.generic(function(K) {
    const _Equality = dart.typedef('_Equality', () => dart.functionType(core.bool, [K, K]));
    return _Equality;
  });
  let _Equality = _Equality$();
  const _Hasher$ = dart.generic(function(K) {
    const _Hasher = dart.typedef('_Hasher', () => dart.functionType(core.int, [K]));
    return _Hasher;
  });
  let _Hasher = _Hasher$();
  const HashMap$ = dart.generic(function(K, V) {
    class HashMap extends core.Object {
      static new({equals = null, hashCode = null, isValidKey = null} = {}) {
        if (isValidKey == null) {
          if (hashCode == null) {
            if (equals == null) {
              return new (_HashMap$(K, V))();
            }
            hashCode = _defaultHashCode;
          } else {
            if (dart.notNull(core.identical(core.identityHashCode, hashCode)) && dart.notNull(core.identical(core.identical, equals))) {
              return new (_IdentityHashMap$(K, V))();
            }
            if (equals == null) {
              equals = _defaultEquals;
            }
          }
        } else {
          if (hashCode == null) {
            hashCode = _defaultHashCode;
          }
          if (equals == null) {
            equals = _defaultEquals;
          }
        }
        return new (_CustomHashMap$(K, V))(equals, hashCode, isValidKey);
      }
      static identity() {
        return new (_IdentityHashMap$(K, V))();
      }
    }
    HashMap[dart.implements] = () => [core.Map$(K, V)];
    dart.setSignature(HashMap, {
      constructors: () => ({
        new: [HashMap$(K, V), [], {equals: dart.functionType(core.bool, [K, K]), hashCode: dart.functionType(core.int, [K]), isValidKey: dart.functionType(core.bool, [core.Object])}],
        identity: [HashMap$(K, V), []]
      })
    });
    return HashMap;
  });
  let HashMap = HashMap$();
  const SetMixin$ = dart.generic(function(E) {
    class SetMixin extends core.Object {
      [Symbol.iterator]() {
        return new dart.JsIterator(this.iterator);
      }
      get isEmpty() {
        return this.length == 0;
      }
      get isNotEmpty() {
        return this.length != 0;
      }
      clear() {
        this.removeAll(this.toList());
      }
      removeAll(elements) {
        for (let element of elements)
          this.remove(element);
      }
      retainAll(elements) {
        let toRemove = this.toSet();
        for (let o of elements) {
          toRemove.remove(o);
        }
        this.removeAll(toRemove);
      }
      containsAll(other) {
        for (let o of other) {
          if (!dart.notNull(this.contains(o))) return false;
        }
        return true;
      }
      union(other) {
        dart.as(other, core.Set$(E));
        let _ = this.toSet();
        _.addAll(other);
        return _;
      }
      intersection(other) {
        let result = this.toSet();
        for (let element of this) {
          if (!dart.notNull(other.contains(element))) result.remove(element);
        }
        return result;
      }
      difference(other) {
        let result = this.toSet();
        for (let element of this) {
          if (dart.notNull(other.contains(element))) result.remove(element);
        }
        return result;
      }
      toList({growable = true} = {}) {
        let result = dart.notNull(growable) ? (() => {
          let _ = core.List$(E).new();
          _[dartx.length] = this.length;
          return _;
        }).bind(this)() : core.List$(E).new(this.length);
        let i = 0;
        for (let element of this)
          result[dartx.set](i++, element);
        return result;
      }
      map(f) {
        dart.as(f, dart.functionType(dart.dynamic, [E]));
        return new (_internal.EfficientLengthMappedIterable$(E, dart.dynamic))(this, f);
      }
      toString() {
        return IterableBase.iterableToFullString(this, '{', '}');
      }
    }
    SetMixin[dart.implements] = () => [core.Set$(E)];
    dart.setSignature(SetMixin, {
      methods: () => ({
        clear: [dart.void, []],
        removeAll: [dart.void, [core.Iterable$(core.Object)]],
        retainAll: [dart.void, [core.Iterable$(core.Object)]],
        containsAll: [core.bool, [core.Iterable$(core.Object)]],
        union: [core.Set$(E), [core.Set$(E)]],
        intersection: [core.Set$(E), [core.Set$(core.Object)]],
        difference: [core.Set$(E), [core.Set$(core.Object)]],
        toList: [core.List$(E), [], {growable: core.bool}],
        map: [core.Iterable, [dart.functionType(dart.dynamic, [E])]]
      })
    });
    dart.defineExtensionMembers(SetMixin, ['toList', 'map', 'isEmpty', 'isNotEmpty']);
    return SetMixin;
  });
  let SetMixin = SetMixin$();
  const SetBase$ = dart.generic(function(E) {
    class SetBase extends SetMixin$(E) {}
    return SetBase;
  });
  let SetBase = SetBase$();
  const _newSet = Symbol('_newSet');
  const _HashSetBase$ = dart.generic(function(E) {
    class _HashSetBase extends SetBase$(E) {
      difference(other) {
        let result = this[_newSet]();
        for (let element of this) {
          if (!dart.notNull(other.contains(element))) result.add(element);
        }
        return result;
      }
      intersection(other) {
        let result = this[_newSet]();
        for (let element of this) {
          if (dart.notNull(other.contains(element))) result.add(element);
        }
        return result;
      }
      toSet() {
        return (() => {
          let _ = this[_newSet]();
          _.addAll(this);
          return _;
        }).bind(this)();
      }
    }
    dart.setSignature(_HashSetBase, {
      methods: () => ({
        difference: [core.Set$(E), [core.Set$(core.Object)]],
        intersection: [core.Set$(E), [core.Set$(core.Object)]],
        toSet: [core.Set$(E), []]
      })
    });
    return _HashSetBase;
  });
  let _HashSetBase = _HashSetBase$();
  const HashSet$ = dart.generic(function(E) {
    class HashSet extends core.Object {
      static new({equals = null, hashCode = null, isValidKey = null} = {}) {
        if (isValidKey == null) {
          if (hashCode == null) {
            if (equals == null) {
              return new (_HashSet$(E))();
            }
            hashCode = _defaultHashCode;
          } else {
            if (dart.notNull(core.identical(core.identityHashCode, hashCode)) && dart.notNull(core.identical(core.identical, equals))) {
              return new (_IdentityHashSet$(E))();
            }
            if (equals == null) {
              equals = _defaultEquals;
            }
          }
        } else {
          if (hashCode == null) {
            hashCode = _defaultHashCode;
          }
          if (equals == null) {
            equals = _defaultEquals;
          }
        }
        return new (_CustomHashSet$(E))(equals, hashCode, isValidKey);
      }
      static identity() {
        return new (_IdentityHashSet$(E))();
      }
      [Symbol.iterator]() {
        return new dart.JsIterator(this.iterator);
      }
    }
    HashSet[dart.implements] = () => [core.Set$(E)];
    dart.setSignature(HashSet, {
      constructors: () => ({
        new: [HashSet$(E), [], {equals: dart.functionType(core.bool, [E, E]), hashCode: dart.functionType(core.int, [E]), isValidKey: dart.functionType(core.bool, [core.Object])}],
        identity: [HashSet$(E), []]
      })
    });
    return HashSet;
  });
  let HashSet = HashSet$();
  const IterableMixin$ = dart.generic(function(E) {
    class IterableMixin extends core.Object {
      map(f) {
        dart.as(f, dart.functionType(dart.dynamic, [E]));
        return _internal.MappedIterable$(E, dart.dynamic).new(this, f);
      }
      contains(element) {
        for (let e of this) {
          if (dart.equals(e, element)) return true;
        }
        return false;
      }
      toList({growable = true} = {}) {
        return core.List$(E).from(this, {growable: growable});
      }
      get isEmpty() {
        return !dart.notNull(this[dartx.iterator].moveNext());
      }
      get isNotEmpty() {
        return !dart.notNull(this.isEmpty);
      }
      toString() {
        return IterableBase.iterableToShortString(this, '(', ')');
      }
      [Symbol.iterator]() {
        return new dart.JsIterator(this.iterator);
      }
    }
    IterableMixin[dart.implements] = () => [core.Iterable$(E)];
    dart.setSignature(IterableMixin, {
      methods: () => ({
        map: [core.Iterable, [dart.functionType(dart.dynamic, [E])]],
        contains: [core.bool, [core.Object]],
        toList: [core.List$(E), [], {growable: core.bool}]
      })
    });
    dart.defineExtensionMembers(IterableMixin, [
      'map',
      'contains',
      'toList',
      'isEmpty',
      'isNotEmpty'
    ]);
    return IterableMixin;
  });
  let IterableMixin = IterableMixin$();
  const IterableBase$ = dart.generic(function(E) {
    class IterableBase extends core.Object {
      IterableBase() {
      }
      map(f) {
        dart.as(f, dart.functionType(dart.dynamic, [E]));
        return _internal.MappedIterable$(E, dart.dynamic).new(this, f);
      }
      contains(element) {
        for (let e of this) {
          if (dart.equals(e, element)) return true;
        }
        return false;
      }
      toList({growable = true} = {}) {
        return core.List$(E).from(this, {growable: growable});
      }
      get length() {
        dart.assert(!dart.is(this, _internal.EfficientLength));
        let count = 0;
        let it = this[dartx.iterator];
        while (dart.notNull(it.moveNext())) {
          count++;
        }
        return count;
      }
      get isEmpty() {
        return !dart.notNull(this[dartx.iterator].moveNext());
      }
      get isNotEmpty() {
        return !dart.notNull(this.isEmpty);
      }
      toString() {
        return IterableBase$().iterableToShortString(this, '(', ')');
      }
      [Symbol.iterator]() {
        return new dart.JsIterator(this.iterator);
      }
    }
    IterableBase[dart.implements] = () => [core.Iterable$(E)];
    dart.setSignature(IterableBase, {
      constructors: () => ({IterableBase: [IterableBase$(E), []]}),
      methods: () => ({
        map: [core.Iterable, [dart.functionType(dart.dynamic, [E])]],
        contains: [core.bool, [core.Object]],
        toList: [core.List$(E), [], {growable: core.bool}]
      })
    });
    dart.defineExtensionMembers(IterableBase, [
      'map',
      'contains',
      'toList',
      'isEmpty',
      'isNotEmpty'
    ]);
    return IterableBase;
  });
  let IterableBase = IterableBase$();
  const LinkedHashMap$ = dart.generic(function(K, V) {
    class LinkedHashMap extends core.Object {
      static new({equals = null, hashCode = null, isValidKey = null} = {}) {
        if (isValidKey == null) {
          if (hashCode == null) {
            if (equals == null) {
              return new (_LinkedHashMap$(K, V))();
            }
            hashCode = _defaultHashCode;
          } else {
            if (dart.notNull(core.identical(core.identityHashCode, hashCode)) && dart.notNull(core.identical(core.identical, equals))) {
              return new (_LinkedIdentityHashMap$(K, V))();
            }
            if (equals == null) {
              equals = _defaultEquals;
            }
          }
        } else {
          if (hashCode == null) {
            hashCode = _defaultHashCode;
          }
          if (equals == null) {
            equals = _defaultEquals;
          }
        }
        return new (_LinkedCustomHashMap$(K, V))(equals, hashCode, isValidKey);
      }
      static identity() {
        return new (_LinkedIdentityHashMap$(K, V))();
      }
    }
    LinkedHashMap[dart.implements] = () => [HashMap$(K, V)];
    dart.setSignature(LinkedHashMap, {
      constructors: () => ({
        new: [LinkedHashMap$(K, V), [], {equals: dart.functionType(core.bool, [K, K]), hashCode: dart.functionType(core.int, [K]), isValidKey: dart.functionType(core.bool, [core.Object])}],
        identity: [LinkedHashMap$(K, V), []]
      })
    });
    return LinkedHashMap;
  });
  let LinkedHashMap = LinkedHashMap$();
  const LinkedHashSet$ = dart.generic(function(E) {
    class LinkedHashSet extends core.Object {
      static new({equals = null, hashCode = null, isValidKey = null} = {}) {
        if (isValidKey == null) {
          if (hashCode == null) {
            if (equals == null) {
              return new (_LinkedHashSet$(E))();
            }
            hashCode = _defaultHashCode;
          } else {
            if (dart.notNull(core.identical(core.identityHashCode, hashCode)) && dart.notNull(core.identical(core.identical, equals))) {
              return new (_LinkedIdentityHashSet$(E))();
            }
            if (equals == null) {
              equals = _defaultEquals;
            }
          }
        } else {
          if (hashCode == null) {
            hashCode = _defaultHashCode;
          }
          if (equals == null) {
            equals = _defaultEquals;
          }
        }
        return new (_LinkedCustomHashSet$(E))(equals, hashCode, isValidKey);
      }
      static identity() {
        return new (_LinkedIdentityHashSet$(E))();
      }
      [Symbol.iterator]() {
        return new dart.JsIterator(this.iterator);
      }
    }
    LinkedHashSet[dart.implements] = () => [HashSet$(E)];
    dart.setSignature(LinkedHashSet, {
      constructors: () => ({
        new: [LinkedHashSet$(E), [], {equals: dart.functionType(core.bool, [E, E]), hashCode: dart.functionType(core.int, [E]), isValidKey: dart.functionType(core.bool, [core.Object])}],
        identity: [LinkedHashSet$(E), []]
      })
    });
    return LinkedHashSet;
  });
  let LinkedHashSet = LinkedHashSet$();
  const __CastType0 = dart.typedef('__CastType0', () => dart.functionType(core.int, [dart.dynamic, dart.dynamic]));
  const Queue$ = dart.generic(function(E) {
    class Queue extends core.Object {
      static new() {
        return new (ListQueue$(E))();
      }
      [Symbol.iterator]() {
        return new dart.JsIterator(this.iterator);
      }
    }
    Queue[dart.implements] = () => [core.Iterable$(E), _internal.EfficientLength];
    dart.setSignature(Queue, {
      constructors: () => ({new: [Queue$(E), []]})
    });
    return Queue;
  });
  let Queue = Queue$();
  const _head = Symbol('_head');
  const _tail = Symbol('_tail');
  const _table = Symbol('_table');
  const _modificationCount = Symbol('_modificationCount');
  const _checkModification = Symbol('_checkModification');
  const _writeToList = Symbol('_writeToList');
  const _add = Symbol('_add');
  const _preGrow = Symbol('_preGrow');
  const _remove = Symbol('_remove');
  const _filterWhere = Symbol('_filterWhere');
  const _grow = Symbol('_grow');
  const ListQueue$ = dart.generic(function(E) {
    class ListQueue extends IterableBase$(E) {
      ListQueue(initialCapacity) {
        if (initialCapacity === void 0) initialCapacity = null;
        this[_head] = 0;
        this[_tail] = 0;
        this[_table] = null;
        this[_modificationCount] = 0;
        super.IterableBase();
        if (initialCapacity == null || dart.notNull(initialCapacity) < dart.notNull(ListQueue$()._INITIAL_CAPACITY)) {
          initialCapacity = ListQueue$()._INITIAL_CAPACITY;
        } else if (!dart.notNull(ListQueue$()._isPowerOf2(initialCapacity))) {
          initialCapacity = ListQueue$()._nextPowerOf2(initialCapacity);
        }
        dart.assert(ListQueue$()._isPowerOf2(initialCapacity));
        this[_table] = core.List$(E).new(initialCapacity);
      }
      static from(elements) {
        if (dart.is(elements, core.List)) {
          let length = elements[dartx.length];
          let queue = new (ListQueue$(E))(dart.notNull(length) + 1);
          dart.assert(dart.notNull(queue[_table][dartx.length]) > dart.notNull(length));
          let sourceList = elements;
          queue[_table][dartx.setRange](0, length, dart.as(sourceList, core.Iterable$(E)), 0);
          queue[_tail] = length;
          return queue;
        } else {
          let capacity = ListQueue$()._INITIAL_CAPACITY;
          if (dart.is(elements, _internal.EfficientLength)) {
            capacity = elements[dartx.length];
          }
          let result = new (ListQueue$(E))(capacity);
          for (let element of dart.as(elements, core.Iterable$(E))) {
            result.addLast(element);
          }
          return result;
        }
      }
      get iterator() {
        return new (_ListQueueIterator$(E))(this);
      }
      forEach(action) {
        dart.as(action, dart.functionType(dart.void, [E]));
        let modificationCount = this[_modificationCount];
        for (let i = this[_head]; i != this[_tail]; i = dart.notNull(i) + 1 & dart.notNull(this[_table][dartx.length]) - 1) {
          action(this[_table][dartx.get](i));
          this[_checkModification](modificationCount);
        }
      }
      get isEmpty() {
        return this[_head] == this[_tail];
      }
      get length() {
        return dart.notNull(this[_tail]) - dart.notNull(this[_head]) & dart.notNull(this[_table][dartx.length]) - 1;
      }
      get first() {
        if (this[_head] == this[_tail]) dart.throw(_internal.IterableElementError.noElement());
        return this[_table][dartx.get](this[_head]);
      }
      get last() {
        if (this[_head] == this[_tail]) dart.throw(_internal.IterableElementError.noElement());
        return this[_table][dartx.get](dart.notNull(this[_tail]) - 1 & dart.notNull(this[_table][dartx.length]) - 1);
      }
      get single() {
        if (this[_head] == this[_tail]) dart.throw(_internal.IterableElementError.noElement());
        if (dart.notNull(this.length) > 1) dart.throw(_internal.IterableElementError.tooMany());
        return this[_table][dartx.get](this[_head]);
      }
      elementAt(index) {
        core.RangeError.checkValidIndex(index, this);
        return this[_table][dartx.get](dart.notNull(this[_head]) + dart.notNull(index) & dart.notNull(this[_table][dartx.length]) - 1);
      }
      toList({growable = true} = {}) {
        let list = null;
        if (dart.notNull(growable)) {
          list = core.List$(E).new();
          list[dartx.length] = this.length;
        } else {
          list = core.List$(E).new(this.length);
        }
        this[_writeToList](list);
        return list;
      }
      add(element) {
        dart.as(element, E);
        this[_add](element);
      }
      addAll(elements) {
        dart.as(elements, core.Iterable$(E));
        if (dart.is(elements, core.List)) {
          let list = dart.as(elements, core.List);
          let addCount = list[dartx.length];
          let length = this.length;
          if (dart.notNull(length) + dart.notNull(addCount) >= dart.notNull(this[_table][dartx.length])) {
            this[_preGrow](dart.notNull(length) + dart.notNull(addCount));
            this[_table][dartx.setRange](length, dart.notNull(length) + dart.notNull(addCount), dart.as(list, core.Iterable$(E)), 0);
            this[_tail] = dart.notNull(this[_tail]) + dart.notNull(addCount);
          } else {
            let endSpace = dart.notNull(this[_table][dartx.length]) - dart.notNull(this[_tail]);
            if (dart.notNull(addCount) < endSpace) {
              this[_table][dartx.setRange](this[_tail], dart.notNull(this[_tail]) + dart.notNull(addCount), dart.as(list, core.Iterable$(E)), 0);
              this[_tail] = dart.notNull(this[_tail]) + dart.notNull(addCount);
            } else {
              let preSpace = dart.notNull(addCount) - endSpace;
              this[_table][dartx.setRange](this[_tail], dart.notNull(this[_tail]) + endSpace, dart.as(list, core.Iterable$(E)), 0);
              this[_table][dartx.setRange](0, preSpace, dart.as(list, core.Iterable$(E)), endSpace);
              this[_tail] = preSpace;
            }
          }
          this[_modificationCount] = dart.notNull(this[_modificationCount]) + 1;
        } else {
          for (let element of elements)
            this[_add](element);
        }
      }
      remove(object) {
        for (let i = this[_head]; i != this[_tail]; i = dart.notNull(i) + 1 & dart.notNull(this[_table][dartx.length]) - 1) {
          let element = this[_table][dartx.get](i);
          if (dart.equals(element, object)) {
            this[_remove](i);
            this[_modificationCount] = dart.notNull(this[_modificationCount]) + 1;
            return true;
          }
        }
        return false;
      }
      [_filterWhere](test, removeMatching) {
        dart.as(test, dart.functionType(core.bool, [E]));
        let index = this[_head];
        let modificationCount = this[_modificationCount];
        let i = this[_head];
        while (i != this[_tail]) {
          let element = this[_table][dartx.get](i);
          let remove = core.identical(removeMatching, test(element));
          this[_checkModification](modificationCount);
          if (dart.notNull(remove)) {
            i = this[_remove](i);
            modificationCount = this[_modificationCount] = dart.notNull(this[_modificationCount]) + 1;
          } else {
            i = dart.notNull(i) + 1 & dart.notNull(this[_table][dartx.length]) - 1;
          }
        }
      }
      removeWhere(test) {
        dart.as(test, dart.functionType(core.bool, [E]));
        this[_filterWhere](test, true);
      }
      retainWhere(test) {
        dart.as(test, dart.functionType(core.bool, [E]));
        this[_filterWhere](test, false);
      }
      clear() {
        if (this[_head] != this[_tail]) {
          for (let i = this[_head]; i != this[_tail]; i = dart.notNull(i) + 1 & dart.notNull(this[_table][dartx.length]) - 1) {
            this[_table][dartx.set](i, null);
          }
          this[_head] = this[_tail] = 0;
          this[_modificationCount] = dart.notNull(this[_modificationCount]) + 1;
        }
      }
      toString() {
        return IterableBase.iterableToFullString(this, "{", "}");
      }
      addLast(element) {
        dart.as(element, E);
        this[_add](element);
      }
      addFirst(element) {
        dart.as(element, E);
        this[_head] = dart.notNull(this[_head]) - 1 & dart.notNull(this[_table][dartx.length]) - 1;
        this[_table][dartx.set](this[_head], element);
        if (this[_head] == this[_tail]) this[_grow]();
        this[_modificationCount] = dart.notNull(this[_modificationCount]) + 1;
      }
      removeFirst() {
        if (this[_head] == this[_tail]) dart.throw(_internal.IterableElementError.noElement());
        this[_modificationCount] = dart.notNull(this[_modificationCount]) + 1;
        let result = this[_table][dartx.get](this[_head]);
        this[_table][dartx.set](this[_head], null);
        this[_head] = dart.notNull(this[_head]) + 1 & dart.notNull(this[_table][dartx.length]) - 1;
        return result;
      }
      removeLast() {
        if (this[_head] == this[_tail]) dart.throw(_internal.IterableElementError.noElement());
        this[_modificationCount] = dart.notNull(this[_modificationCount]) + 1;
        this[_tail] = dart.notNull(this[_tail]) - 1 & dart.notNull(this[_table][dartx.length]) - 1;
        let result = this[_table][dartx.get](this[_tail]);
        this[_table][dartx.set](this[_tail], null);
        return result;
      }
      static _isPowerOf2(number) {
        return (dart.notNull(number) & dart.notNull(number) - 1) == 0;
      }
      static _nextPowerOf2(number) {
        dart.assert(dart.notNull(number) > 0);
        number = (dart.notNull(number) << 1) - 1;
        for (;;) {
          let nextNumber = dart.notNull(number) & dart.notNull(number) - 1;
          if (nextNumber == 0) return number;
          number = nextNumber;
        }
      }
      [_checkModification](expectedModificationCount) {
        if (expectedModificationCount != this[_modificationCount]) {
          dart.throw(new core.ConcurrentModificationError(this));
        }
      }
      [_add](element) {
        dart.as(element, E);
        this[_table][dartx.set](this[_tail], element);
        this[_tail] = dart.notNull(this[_tail]) + 1 & dart.notNull(this[_table][dartx.length]) - 1;
        if (this[_head] == this[_tail]) this[_grow]();
        this[_modificationCount] = dart.notNull(this[_modificationCount]) + 1;
      }
      [_remove](offset) {
        let mask = dart.notNull(this[_table][dartx.length]) - 1;
        let startDistance = dart.notNull(offset) - dart.notNull(this[_head]) & mask;
        let endDistance = dart.notNull(this[_tail]) - dart.notNull(offset) & mask;
        if (startDistance < endDistance) {
          let i = offset;
          while (i != this[_head]) {
            let prevOffset = dart.notNull(i) - 1 & mask;
            this[_table][dartx.set](i, this[_table][dartx.get](prevOffset));
            i = prevOffset;
          }
          this[_table][dartx.set](this[_head], null);
          this[_head] = dart.notNull(this[_head]) + 1 & mask;
          return dart.notNull(offset) + 1 & mask;
        } else {
          this[_tail] = dart.notNull(this[_tail]) - 1 & mask;
          let i = offset;
          while (i != this[_tail]) {
            let nextOffset = dart.notNull(i) + 1 & mask;
            this[_table][dartx.set](i, this[_table][dartx.get](nextOffset));
            i = nextOffset;
          }
          this[_table][dartx.set](this[_tail], null);
          return offset;
        }
      }
      [_grow]() {
        let newTable = core.List$(E).new(dart.notNull(this[_table][dartx.length]) * 2);
        let split = dart.notNull(this[_table][dartx.length]) - dart.notNull(this[_head]);
        newTable[dartx.setRange](0, split, this[_table], this[_head]);
        newTable[dartx.setRange](split, split + dart.notNull(this[_head]), this[_table], 0);
        this[_head] = 0;
        this[_tail] = this[_table][dartx.length];
        this[_table] = newTable;
      }
      [_writeToList](target) {
        dart.as(target, core.List$(E));
        dart.assert(dart.notNull(target[dartx.length]) >= dart.notNull(this.length));
        if (dart.notNull(this[_head]) <= dart.notNull(this[_tail])) {
          let length = dart.notNull(this[_tail]) - dart.notNull(this[_head]);
          target[dartx.setRange](0, length, this[_table], this[_head]);
          return length;
        } else {
          let firstPartSize = dart.notNull(this[_table][dartx.length]) - dart.notNull(this[_head]);
          target[dartx.setRange](0, firstPartSize, this[_table], this[_head]);
          target[dartx.setRange](firstPartSize, firstPartSize + dart.notNull(this[_tail]), this[_table], 0);
          return dart.notNull(this[_tail]) + firstPartSize;
        }
      }
      [_preGrow](newElementCount) {
        dart.assert(dart.notNull(newElementCount) >= dart.notNull(this.length));
        newElementCount = dart.notNull(newElementCount) + (dart.notNull(newElementCount) >> 1);
        let newCapacity = ListQueue$()._nextPowerOf2(newElementCount);
        let newTable = core.List$(E).new(newCapacity);
        this[_tail] = this[_writeToList](newTable);
        this[_table] = newTable;
        this[_head] = 0;
      }
    }
    ListQueue[dart.implements] = () => [Queue$(E)];
    dart.setSignature(ListQueue, {
      constructors: () => ({
        ListQueue: [ListQueue$(E), [], [core.int]],
        from: [ListQueue$(E), [core.Iterable]]
      }),
      methods: () => ({
        forEach: [dart.void, [dart.functionType(dart.void, [E])]],
        elementAt: [E, [core.int]],
        toList: [core.List$(E), [], {growable: core.bool}],
        add: [dart.void, [E]],
        addAll: [dart.void, [core.Iterable$(E)]],
        remove: [core.bool, [core.Object]],
        [_filterWhere]: [dart.void, [dart.functionType(core.bool, [E]), core.bool]],
        removeWhere: [dart.void, [dart.functionType(core.bool, [E])]],
        retainWhere: [dart.void, [dart.functionType(core.bool, [E])]],
        clear: [dart.void, []],
        addLast: [dart.void, [E]],
        addFirst: [dart.void, [E]],
        removeFirst: [E, []],
        removeLast: [E, []],
        [_checkModification]: [dart.void, [core.int]],
        [_add]: [dart.void, [E]],
        [_remove]: [core.int, [core.int]],
        [_grow]: [dart.void, []],
        [_writeToList]: [core.int, [core.List$(E)]],
        [_preGrow]: [dart.void, [core.int]]
      }),
      statics: () => ({
        _isPowerOf2: [core.bool, [core.int]],
        _nextPowerOf2: [core.int, [core.int]]
      }),
      names: ['_isPowerOf2', '_nextPowerOf2']
    });
    dart.defineExtensionMembers(ListQueue, ['toList', 'iterator', 'isEmpty']);
    ListQueue._INITIAL_CAPACITY = 8;
    return ListQueue;
  });
  let ListQueue = ListQueue$();
  const _Predicate$ = dart.generic(function(T) {
    const _Predicate = dart.typedef('_Predicate', () => dart.functionType(core.bool, [T]));
    return _Predicate;
  });
  let _Predicate = _Predicate$();
  const _SplayTreeNode$ = dart.generic(function(K) {
    class _SplayTreeNode extends core.Object {
      _SplayTreeNode(key) {
        this.key = key;
      }
    }
    dart.setSignature(_SplayTreeNode, {
      constructors: () => ({_SplayTreeNode: [_SplayTreeNode$(K), [K]]})
    });
    return _SplayTreeNode;
  });
  let _SplayTreeNode = _SplayTreeNode$();
  const _SplayTreeMapNode$ = dart.generic(function(K, V) {
    class _SplayTreeMapNode extends _SplayTreeNode$(K) {
      _SplayTreeMapNode(key, value) {
        this.value = value;
        super._SplayTreeNode(key);
      }
    }
    dart.setSignature(_SplayTreeMapNode, {
      constructors: () => ({_SplayTreeMapNode: [_SplayTreeMapNode$(K, V), [K, V]]})
    });
    return _SplayTreeMapNode;
  });
  let _SplayTreeMapNode = _SplayTreeMapNode$();
  const _count = Symbol('_count');
  const _SplayTree$ = dart.generic(function(K) {
    class _SplayTree extends core.Object {
      _SplayTree() {
        this[_count] = 0;
        this[_modificationCount] = 0;
      }
    }
    return _SplayTree;
  });
  let _SplayTree = _SplayTree$();
  const _comparator = Symbol('_comparator');
  const _validKey = Symbol('_validKey');
  const _root = Symbol('_root');
  const _splay = Symbol('_splay');
  const _addNewRoot = Symbol('_addNewRoot');
  const _splayCount = Symbol('_splayCount');
  const _clear = Symbol('_clear');
  const SplayTreeMap$ = dart.generic(function(K, V) {
    class SplayTreeMap extends _SplayTree$(K) {
      SplayTreeMap(compare, isValidKey) {
        if (compare === void 0) compare = null;
        if (isValidKey === void 0) isValidKey = null;
        this[_comparator] = dart.as(compare == null ? core.Comparable.compare : compare, core.Comparator$(K));
        this[_validKey] = dart.as(isValidKey != null ? isValidKey : dart.fn(v => dart.is(v, K), core.bool, [core.Object]), _Predicate$(core.Object));
        super._SplayTree();
      }
      get(key) {
        if (key == null) dart.throw(new core.ArgumentError(key));
        if (!dart.notNull(this[_validKey](key))) return null;
        if (this[_root] != null) {
          let comp = this[_splay](dart.as(key, K));
          if (comp == 0) {
            let mapRoot = dart.as(this[_root], _SplayTreeMapNode);
            return dart.as(mapRoot.value, V);
          }
        }
        return null;
      }
      remove(key) {
        if (!dart.notNull(this[_validKey](key))) return null;
        let mapRoot = dart.as(this[_remove](dart.as(key, K)), _SplayTreeMapNode);
        if (mapRoot != null) return dart.as(mapRoot.value, V);
        return null;
      }
      set(key, value) {
        ((() => {
          dart.as(key, K);
          dart.as(value, V);
          if (key == null) dart.throw(new core.ArgumentError(key));
          let comp = this[_splay](key);
          if (comp == 0) {
            let mapRoot = dart.as(this[_root], _SplayTreeMapNode);
            mapRoot.value = value;
            return;
          }
          this[_addNewRoot](new (_SplayTreeMapNode$(K, dart.dynamic))(key, value), comp);
        }).bind(this))();
        return value;
      }
      putIfAbsent(key, ifAbsent) {
        dart.as(key, K);
        dart.as(ifAbsent, dart.functionType(V, []));
        if (key == null) dart.throw(new core.ArgumentError(key));
        let comp = this[_splay](key);
        if (comp == 0) {
          let mapRoot = dart.as(this[_root], _SplayTreeMapNode);
          return dart.as(mapRoot.value, V);
        }
        let modificationCount = this[_modificationCount];
        let splayCount = this[_splayCount];
        let value = ifAbsent();
        if (modificationCount != this[_modificationCount]) {
          dart.throw(new core.ConcurrentModificationError(this));
        }
        if (splayCount != this[_splayCount]) {
          comp = this[_splay](key);
          dart.assert(comp != 0);
        }
        this[_addNewRoot](new (_SplayTreeMapNode$(K, dart.dynamic))(key, value), comp);
        return value;
      }
      get isEmpty() {
        return this[_root] == null;
      }
      get isNotEmpty() {
        return !dart.notNull(this.isEmpty);
      }
      forEach(f) {
        dart.as(f, dart.functionType(dart.void, [K, V]));
        let nodes = new (_SplayTreeNodeIterator$(K))(this);
        while (dart.notNull(nodes.moveNext())) {
          let node = dart.as(nodes.current, _SplayTreeMapNode$(K, V));
          f(node.key, node.value);
        }
      }
      get length() {
        return this[_count];
      }
      clear() {
        this[_clear]();
      }
      containsKey(key) {
        return dart.notNull(this[_validKey](key)) && this[_splay](dart.as(key, K)) == 0;
      }
      toString() {
        return Maps.mapToString(this);
      }
    }
    SplayTreeMap[dart.implements] = () => [core.Map$(K, V)];
    dart.setSignature(SplayTreeMap, {
      constructors: () => ({SplayTreeMap: [SplayTreeMap$(K, V), [], [dart.functionType(core.int, [K, K]), dart.functionType(core.bool, [core.Object])]]}),
      methods: () => ({
        get: [V, [core.Object]],
        remove: [V, [core.Object]],
        set: [dart.void, [K, V]],
        putIfAbsent: [V, [K, dart.functionType(V, [])]],
        forEach: [dart.void, [dart.functionType(dart.void, [K, V])]],
        clear: [dart.void, []],
        containsKey: [core.bool, [core.Object]]
      })
    });
    return SplayTreeMap;
  });
  let SplayTreeMap = SplayTreeMap$();
  const _clone = Symbol('_clone');
  const SplayTreeSet$ = dart.generic(function(E) {
    class SplayTreeSet extends dart.mixin(_SplayTree$(E), IterableMixin$(E), SetMixin$(E)) {
      SplayTreeSet(compare, isValidKey) {
        if (compare === void 0) compare = null;
        if (isValidKey === void 0) isValidKey = null;
        this[_comparator] = dart.as(compare == null ? core.Comparable.compare : compare, core.Comparator$(E));
        this[_validKey] = dart.as(isValidKey != null ? isValidKey : dart.fn(v => dart.is(v, E), core.bool, [core.Object]), _Predicate$(core.Object));
        super._SplayTree();
      }
      get iterator() {
        return new (_SplayTreeKeyIterator$(E))(this);
      }
      get length() {
        return this[_count];
      }
      get isEmpty() {
        return this[_root] == null;
      }
      get isNotEmpty() {
        return this[_root] != null;
      }
      contains(object) {
        return dart.notNull(this[_validKey](object)) && this[_splay](dart.as(object, E)) == 0;
      }
      add(element) {
        dart.as(element, E);
        let compare = this[_splay](element);
        if (compare == 0) return false;
        this[_addNewRoot](new (_SplayTreeNode$(E))(element), compare);
        return true;
      }
      remove(object) {
        if (!dart.notNull(this[_validKey](object))) return false;
        return this[_remove](dart.as(object, E)) != null;
      }
      removeAll(elements) {
        for (let element of elements) {
          if (dart.notNull(this[_validKey](element))) this[_remove](dart.as(element, E));
        }
      }
      retainAll(elements) {
        let retainSet = new (SplayTreeSet$(E))(this[_comparator], this[_validKey]);
        let modificationCount = this[_modificationCount];
        for (let object of elements) {
          if (modificationCount != this[_modificationCount]) {
            dart.throw(new core.ConcurrentModificationError(this));
          }
          if (dart.notNull(this[_validKey](object)) && this[_splay](dart.as(object, E)) == 0) retainSet.add(this[_root].key);
        }
        if (retainSet[_count] != this[_count]) {
          this[_root] = retainSet[_root];
          this[_count] = retainSet[_count];
          this[_modificationCount] = dart.notNull(this[_modificationCount]) + 1;
        }
      }
      lookup(object) {
        if (!dart.notNull(this[_validKey](object))) return null;
        let comp = this[_splay](dart.as(object, E));
        if (comp != 0) return null;
        return this[_root].key;
      }
      intersection(other) {
        let result = new (SplayTreeSet$(E))(this[_comparator], this[_validKey]);
        for (let element of this) {
          if (dart.notNull(other.contains(element))) result.add(element);
        }
        return result;
      }
      difference(other) {
        let result = new (SplayTreeSet$(E))(this[_comparator], this[_validKey]);
        for (let element of this) {
          if (!dart.notNull(other.contains(element))) result.add(element);
        }
        return result;
      }
      union(other) {
        dart.as(other, core.Set$(E));
        let _ = this[_clone]();
        _.addAll(other);
        return _;
      }
      clear() {
        this[_clear]();
      }
      toSet() {
        return this[_clone]();
      }
      toString() {
        return IterableBase.iterableToFullString(this, '{', '}');
      }
    }
    dart.setSignature(SplayTreeSet, {
      constructors: () => ({SplayTreeSet: [SplayTreeSet$(E), [], [dart.functionType(core.int, [E, E]), dart.functionType(core.bool, [core.Object])]]}),
      methods: () => ({
        contains: [core.bool, [core.Object]],
        add: [core.bool, [E]],
        remove: [core.bool, [core.Object]],
        lookup: [E, [core.Object]],
        intersection: [core.Set$(E), [core.Set$(core.Object)]],
        difference: [core.Set$(E), [core.Set$(core.Object)]],
        union: [core.Set$(E), [core.Set$(E)]],
        toSet: [core.Set$(E), []]
      })
    });
    dart.defineExtensionMembers(SplayTreeSet, ['contains', 'iterator', 'isEmpty', 'isNotEmpty']);
    return SplayTreeSet;
  });
  let SplayTreeSet = SplayTreeSet$();
  const _length = Symbol('_length');
  const _strings = Symbol('_strings');
  const _nums = Symbol('_nums');
  const _containsKey = Symbol('_containsKey');
  const _get = Symbol('_get');
  const _addHashTableEntry = Symbol('_addHashTableEntry');
  const _set = Symbol('_set');
  const _removeHashTableEntry = Symbol('_removeHashTableEntry');
  const _keys = Symbol('_keys');
  const _rest = Symbol('_rest');
  const _computeKeys = Symbol('_computeKeys');
  const _HashMap$ = dart.generic(function(K, V) {
    class _HashMap extends core.Object {
      _HashMap() {
      }
      get length() {
        return this[_length];
      }
      get isEmpty() {
        return this[_length] == 0;
      }
      get isNotEmpty() {
        return !dart.notNull(this.isEmpty);
      }
      containsKey(key) {
        if (dart.notNull(_HashMap$()._isStringKey(key))) {
          let strings = this[_strings];
          return strings == null ? false : _HashMap$()._hasTableEntry(strings, key);
        } else if (dart.notNull(_HashMap$()._isNumericKey(key))) {
          let nums = this[_nums];
          return nums == null ? false : _HashMap$()._hasTableEntry(nums, key);
        } else {
          return this[_containsKey](key);
        }
      }
      get(key) {
        if (dart.notNull(_HashMap$()._isStringKey(key))) {
          let strings = this[_strings];
          return dart.as(strings == null ? null : _HashMap$()._getTableEntry(strings, key), V);
        } else if (dart.notNull(_HashMap$()._isNumericKey(key))) {
          let nums = this[_nums];
          return dart.as(nums == null ? null : _HashMap$()._getTableEntry(nums, key), V);
        } else {
          return this[_get](key);
        }
      }
      set(key, value) {
        dart.as(key, K);
        dart.as(value, V);
        if (dart.notNull(_HashMap$()._isStringKey(key))) {
          let strings = this[_strings];
          if (strings == null) this[_strings] = strings = _HashMap$()._newHashTable();
          this[_addHashTableEntry](strings, key, value);
        } else if (dart.notNull(_HashMap$()._isNumericKey(key))) {
          let nums = this[_nums];
          if (nums == null) this[_nums] = nums = _HashMap$()._newHashTable();
          this[_addHashTableEntry](nums, key, value);
        } else {
          this[_set](key, value);
        }
        return value;
      }
      putIfAbsent(key, ifAbsent) {
        dart.as(key, K);
        dart.as(ifAbsent, dart.functionType(V, []));
        if (dart.notNull(this.containsKey(key))) return this.get(key);
        let value = ifAbsent();
        this.set(key, value);
        return value;
      }
      remove(key) {
        if (dart.notNull(_HashMap$()._isStringKey(key))) {
          return this[_removeHashTableEntry](this[_strings], key);
        } else if (dart.notNull(_HashMap$()._isNumericKey(key))) {
          return this[_removeHashTableEntry](this[_nums], key);
        } else {
          return this[_remove](key);
        }
      }
      clear() {
        if (dart.notNull(this[_length]) > 0) {
          this[_strings] = this[_nums] = this[_rest] = this[_keys] = null;
          this[_length] = 0;
        }
      }
      forEach(action) {
        dart.as(action, dart.functionType(dart.void, [K, V]));
        let keys = this[_computeKeys]();
        for (let i = 0, length = keys[dartx.length]; i < dart.notNull(length); i++) {
          let key = keys[i];
          action(dart.as(key, K), this.get(key));
          if (keys !== this[_keys]) {
            dart.throw(new core.ConcurrentModificationError(this));
          }
        }
      }
    }
    _HashMap[dart.implements] = () => [HashMap$(K, V)];
    dart.setSignature(_HashMap, {
      constructors: () => ({_HashMap: [_HashMap$(K, V), []]}),
      methods: () => ({
        containsKey: [core.bool, [core.Object]],
        get: [V, [core.Object]],
        set: [dart.void, [K, V]],
        putIfAbsent: [V, [K, dart.functionType(V, [])]],
        remove: [V, [core.Object]],
        clear: [dart.void, []],
        forEach: [dart.void, [dart.functionType(dart.void, [K, V])]]
      })
    });
    return _HashMap;
  });
  let _HashMap = _HashMap$();
  const _IdentityHashMap$ = dart.generic(function(K, V) {
    class _IdentityHashMap extends _HashMap$(K, V) {
      _IdentityHashMap() {
        super._HashMap();
      }
    }
    return _IdentityHashMap;
  });
  let _IdentityHashMap = _IdentityHashMap$();
  const _equals = Symbol('_equals');
  const _hashCode = Symbol('_hashCode');
  const _CustomHashMap$ = dart.generic(function(K, V) {
    class _CustomHashMap extends _HashMap$(K, V) {
      _CustomHashMap(equals, hashCode, validKey) {
        this[_equals] = equals;
        this[_hashCode] = hashCode;
        this[_validKey] = dart.as(validKey != null ? validKey : dart.fn(v => dart.is(v, K), core.bool, [core.Object]), _Predicate$(core.Object));
        super._HashMap();
      }
      get(key) {
        if (!dart.notNull(this[_validKey](key))) return null;
        return super[_get](key);
      }
      set(key, value) {
        dart.as(key, K);
        dart.as(value, V);
        super[_set](key, value);
        return value;
      }
      containsKey(key) {
        if (!dart.notNull(this[_validKey](key))) return false;
        return super[_containsKey](key);
      }
      remove(key) {
        if (!dart.notNull(this[_validKey](key))) return null;
        return super[_remove](key);
      }
      toString() {
        return Maps.mapToString(this);
      }
    }
    dart.setSignature(_CustomHashMap, {
      constructors: () => ({_CustomHashMap: [_CustomHashMap$(K, V), [_Equality$(K), _Hasher$(K), dart.functionType(core.bool, [core.Object])]]}),
      methods: () => ({
        get: [V, [core.Object]],
        set: [dart.void, [K, V]],
        remove: [V, [core.Object]]
      })
    });
    return _CustomHashMap;
  });
  let _CustomHashMap = _CustomHashMap$();
  const _first = Symbol('_first');
  const _last = Symbol('_last');
  const _modifications = Symbol('_modifications');
  const _getBucket = Symbol('_getBucket');
  const _findBucketIndex = Symbol('_findBucketIndex');
  const _value = Symbol('_value');
  const _computeHashCode = Symbol('_computeHashCode');
  const _newLinkedCell = Symbol('_newLinkedCell');
  const _unlinkCell = Symbol('_unlinkCell');
  const _modified = Symbol('_modified');
  const _key = Symbol('_key');
  const _next = Symbol('_next');
  const _previous = Symbol('_previous');
  const _LinkedHashMap$ = dart.generic(function(K, V) {
    class _LinkedHashMap extends core.Object {
      _LinkedHashMap() {
        this[_length] = 0;
        this[_strings] = null;
        this[_nums] = null;
        this[_rest] = null;
        this[_first] = null;
        this[_last] = null;
        this[_modifications] = 0;
      }
      get length() {
        return this[_length];
      }
      get isEmpty() {
        return this[_length] == 0;
      }
      get isNotEmpty() {
        return !dart.notNull(this.isEmpty);
      }
      get keys() {
        return new (LinkedHashMapKeyIterable$(K))(this);
      }
      get values() {
        return _internal.MappedIterable$(K, V).new(this.keys, dart.fn((each => this.get(each)).bind(this), V, [K]));
      }
      containsKey(key) {
        if (dart.notNull(_LinkedHashMap$()._isStringKey(key))) {
          let strings = this[_strings];
          if (strings == null) return false;
          let cell = dart.as(_LinkedHashMap$()._getTableEntry(strings, key), LinkedHashMapCell);
          return cell != null;
        } else if (dart.notNull(_LinkedHashMap$()._isNumericKey(key))) {
          let nums = this[_nums];
          if (nums == null) return false;
          let cell = dart.as(_LinkedHashMap$()._getTableEntry(nums, key), LinkedHashMapCell);
          return cell != null;
        } else {
          return this[_containsKey](key);
        }
      }
      [_containsKey](key) {
        let rest = this[_rest];
        if (rest == null) return false;
        let bucket = this[_getBucket](rest, key);
        return dart.notNull(this[_findBucketIndex](bucket, key)) >= 0;
      }
      containsValue(value) {
        return this.keys[dartx.any](dart.fn((each => dart.equals(this.get(each), value)).bind(this), core.bool, [K]));
      }
      addAll(other) {
        dart.as(other, core.Map$(K, V));
        other.forEach(dart.fn(((key, value) => {
          dart.as(key, K);
          dart.as(value, V);
          this.set(key, value);
        }).bind(this), dart.void, [K, V]));
      }
      get(key) {
        if (dart.notNull(_LinkedHashMap$()._isStringKey(key))) {
          let strings = this[_strings];
          if (strings == null) return null;
          let cell = dart.as(_LinkedHashMap$()._getTableEntry(strings, key), LinkedHashMapCell);
          return dart.as(cell == null ? null : cell[_value], V);
        } else if (dart.notNull(_LinkedHashMap$()._isNumericKey(key))) {
          let nums = this[_nums];
          if (nums == null) return null;
          let cell = dart.as(_LinkedHashMap$()._getTableEntry(nums, key), LinkedHashMapCell);
          return dart.as(cell == null ? null : cell[_value], V);
        } else {
          return this[_get](key);
        }
      }
      [_get](key) {
        let rest = this[_rest];
        if (rest == null) return null;
        let bucket = this[_getBucket](rest, key);
        let index = this[_findBucketIndex](bucket, key);
        if (dart.notNull(index) < 0) return null;
        let cell = dart.as(bucket[index], LinkedHashMapCell);
        return dart.as(cell[_value], V);
      }
      set(key, value) {
        dart.as(key, K);
        dart.as(value, V);
        if (dart.notNull(_LinkedHashMap$()._isStringKey(key))) {
          let strings = this[_strings];
          if (strings == null) this[_strings] = strings = _LinkedHashMap$()._newHashTable();
          this[_addHashTableEntry](strings, key, value);
        } else if (dart.notNull(_LinkedHashMap$()._isNumericKey(key))) {
          let nums = this[_nums];
          if (nums == null) this[_nums] = nums = _LinkedHashMap$()._newHashTable();
          this[_addHashTableEntry](nums, key, value);
        } else {
          this[_set](key, value);
        }
        return value;
      }
      [_set](key, value) {
        dart.as(key, K);
        dart.as(value, V);
        let rest = this[_rest];
        if (rest == null) this[_rest] = rest = _LinkedHashMap$()._newHashTable();
        let hash = this[_computeHashCode](key);
        let bucket = rest[hash];
        if (bucket == null) {
          let cell = this[_newLinkedCell](key, value);
          _LinkedHashMap$()._setTableEntry(rest, hash, [cell]);
        } else {
          let index = this[_findBucketIndex](bucket, key);
          if (dart.notNull(index) >= 0) {
            let cell = dart.as(bucket[index], LinkedHashMapCell);
            cell[_value] = value;
          } else {
            let cell = this[_newLinkedCell](key, value);
            bucket.push(cell);
          }
        }
      }
      putIfAbsent(key, ifAbsent) {
        dart.as(key, K);
        dart.as(ifAbsent, dart.functionType(V, []));
        if (dart.notNull(this.containsKey(key))) return this.get(key);
        let value = ifAbsent();
        this.set(key, value);
        return value;
      }
      remove(key) {
        if (dart.notNull(_LinkedHashMap$()._isStringKey(key))) {
          return this[_removeHashTableEntry](this[_strings], key);
        } else if (dart.notNull(_LinkedHashMap$()._isNumericKey(key))) {
          return this[_removeHashTableEntry](this[_nums], key);
        } else {
          return this[_remove](key);
        }
      }
      [_remove](key) {
        let rest = this[_rest];
        if (rest == null) return null;
        let bucket = this[_getBucket](rest, key);
        let index = this[_findBucketIndex](bucket, key);
        if (dart.notNull(index) < 0) return null;
        let cell = dart.as(bucket.splice(index, 1)[0], LinkedHashMapCell);
        this[_unlinkCell](cell);
        return dart.as(cell[_value], V);
      }
      clear() {
        if (dart.notNull(this[_length]) > 0) {
          this[_strings] = this[_nums] = this[_rest] = this[_first] = this[_last] = null;
          this[_length] = 0;
          this[_modified]();
        }
      }
      forEach(action) {
        dart.as(action, dart.functionType(dart.void, [K, V]));
        let cell = this[_first];
        let modifications = this[_modifications];
        while (cell != null) {
          action(dart.as(cell[_key], K), dart.as(cell[_value], V));
          if (modifications != this[_modifications]) {
            dart.throw(new core.ConcurrentModificationError(this));
          }
          cell = cell[_next];
        }
      }
      [_addHashTableEntry](table, key, value) {
        dart.as(key, K);
        dart.as(value, V);
        let cell = dart.as(_LinkedHashMap$()._getTableEntry(table, key), LinkedHashMapCell);
        if (cell == null) {
          _LinkedHashMap$()._setTableEntry(table, key, this[_newLinkedCell](key, value));
        } else {
          cell[_value] = value;
        }
      }
      [_removeHashTableEntry](table, key) {
        if (table == null) return null;
        let cell = dart.as(_LinkedHashMap$()._getTableEntry(table, key), LinkedHashMapCell);
        if (cell == null) return null;
        this[_unlinkCell](cell);
        _LinkedHashMap$()._deleteTableEntry(table, key);
        return dart.as(cell[_value], V);
      }
      [_modified]() {
        this[_modifications] = dart.notNull(this[_modifications]) + 1 & 67108863;
      }
      [_newLinkedCell](key, value) {
        dart.as(key, K);
        dart.as(value, V);
        let cell = new LinkedHashMapCell(key, value);
        if (this[_first] == null) {
          this[_first] = this[_last] = cell;
        } else {
          let last = this[_last];
          cell[_previous] = last;
          this[_last] = last[_next] = cell;
        }
        this[_length] = dart.notNull(this[_length]) + 1;
        this[_modified]();
        return cell;
      }
      [_unlinkCell](cell) {
        let previous = cell[_previous];
        let next = cell[_next];
        if (previous == null) {
          dart.assert(dart.equals(cell, this[_first]));
          this[_first] = next;
        } else {
          previous[_next] = next;
        }
        if (next == null) {
          dart.assert(dart.equals(cell, this[_last]));
          this[_last] = previous;
        } else {
          next[_previous] = previous;
        }
        this[_length] = dart.notNull(this[_length]) - 1;
        this[_modified]();
      }
      static _isStringKey(key) {
        return typeof key == 'string' && key != '__proto__';
      }
      static _isNumericKey(key) {
        return typeof key == 'number' && (key & 0x3ffffff) === key;
      }
      [_computeHashCode](key) {
        return dart.hashCode(key) & 0x3ffffff;
      }
      static _getTableEntry(table, key) {
        return table[key];
      }
      static _setTableEntry(table, key, value) {
        dart.assert(value != null);
        table[key] = value;
      }
      static _deleteTableEntry(table, key) {
        delete table[key];
      }
      [_getBucket](table, key) {
        let hash = this[_computeHashCode](key);
        return dart.as(table[hash], core.List);
      }
      [_findBucketIndex](bucket, key) {
        if (bucket == null) return -1;
        let length = bucket.length;
        for (let i = 0; i < length; i++) {
          let cell = dart.as(bucket[i], LinkedHashMapCell);
          if (dart.equals(cell[_key], key)) return i;
        }
        return -1;
      }
      static _newHashTable() {
        let table = Object.create(null);
        let temporaryKey = '<non-identifier-key>';
        _LinkedHashMap$()._setTableEntry(table, temporaryKey, table);
        _LinkedHashMap$()._deleteTableEntry(table, temporaryKey);
        return table;
      }
      toString() {
        return Maps.mapToString(this);
      }
    }
    _LinkedHashMap[dart.implements] = () => [LinkedHashMap$(K, V), _js_helper.InternalMap];
    dart.setSignature(_LinkedHashMap, {
      constructors: () => ({_LinkedHashMap: [_LinkedHashMap$(K, V), []]}),
      methods: () => ({
        containsKey: [core.bool, [core.Object]],
        [_containsKey]: [core.bool, [core.Object]],
        containsValue: [core.bool, [core.Object]],
        addAll: [dart.void, [core.Map$(K, V)]],
        get: [V, [core.Object]],
        [_get]: [V, [core.Object]],
        set: [dart.void, [K, V]],
        [_set]: [dart.void, [K, V]],
        putIfAbsent: [V, [K, dart.functionType(V, [])]],
        remove: [V, [core.Object]],
        [_remove]: [V, [core.Object]],
        clear: [dart.void, []],
        forEach: [dart.void, [dart.functionType(dart.void, [K, V])]],
        [_addHashTableEntry]: [dart.void, [dart.dynamic, K, V]],
        [_removeHashTableEntry]: [V, [dart.dynamic, core.Object]],
        [_modified]: [dart.void, []],
        [_newLinkedCell]: [LinkedHashMapCell, [K, V]],
        [_unlinkCell]: [dart.void, [LinkedHashMapCell]],
        [_computeHashCode]: [core.int, [dart.dynamic]],
        [_getBucket]: [core.List, [dart.dynamic, dart.dynamic]],
        [_findBucketIndex]: [core.int, [dart.dynamic, dart.dynamic]]
      }),
      statics: () => ({
        _isStringKey: [core.bool, [dart.dynamic]],
        _isNumericKey: [core.bool, [dart.dynamic]],
        _getTableEntry: [dart.dynamic, [dart.dynamic, dart.dynamic]],
        _setTableEntry: [dart.void, [dart.dynamic, dart.dynamic, dart.dynamic]],
        _deleteTableEntry: [dart.void, [dart.dynamic, dart.dynamic]],
        _newHashTable: [dart.dynamic, []]
      }),
      names: ['_isStringKey', '_isNumericKey', '_getTableEntry', '_setTableEntry', '_deleteTableEntry', '_newHashTable']
    });
    return _LinkedHashMap;
  });
  let _LinkedHashMap = _LinkedHashMap$();
  const _LinkedIdentityHashMap$ = dart.generic(function(K, V) {
    class _LinkedIdentityHashMap extends _LinkedHashMap$(K, V) {
      _LinkedIdentityHashMap() {
        super._LinkedHashMap();
      }
    }
    return _LinkedIdentityHashMap;
  });
  let _LinkedIdentityHashMap = _LinkedIdentityHashMap$();
  const _LinkedCustomHashMap$ = dart.generic(function(K, V) {
    class _LinkedCustomHashMap extends _LinkedHashMap$(K, V) {
      _LinkedCustomHashMap(equals, hashCode, validKey) {
        this[_equals] = equals;
        this[_hashCode] = hashCode;
        this[_validKey] = dart.as(validKey != null ? validKey : dart.fn(v => dart.is(v, K), core.bool, [core.Object]), _Predicate$(core.Object));
        super._LinkedHashMap();
      }
      get(key) {
        if (!dart.notNull(this[_validKey](key))) return null;
        return super[_get](key);
      }
      set(key, value) {
        dart.as(key, K);
        dart.as(value, V);
        super[_set](key, value);
        return value;
      }
      containsKey(key) {
        if (!dart.notNull(this[_validKey](key))) return false;
        return super[_containsKey](key);
      }
      remove(key) {
        if (!dart.notNull(this[_validKey](key))) return null;
        return super[_remove](key);
      }
    }
    dart.setSignature(_LinkedCustomHashMap, {
      constructors: () => ({_LinkedCustomHashMap: [_LinkedCustomHashMap$(K, V), [_Equality$(K), _Hasher$(K), dart.functionType(core.bool, [core.Object])]]}),
      methods: () => ({
        get: [V, [core.Object]],
        set: [dart.void, [K, V]],
        remove: [V, [core.Object]]
      })
    });
    return _LinkedCustomHashMap;
  });
  let _LinkedCustomHashMap = _LinkedCustomHashMap$();
  class LinkedHashMapCell extends core.Object {
    LinkedHashMapCell(key, value) {
      this[_key] = key;
      this[_value] = value;
    }
  }
  dart.setSignature(LinkedHashMapCell, {
    constructors: () => ({LinkedHashMapCell: [LinkedHashMapCell, [dart.dynamic, dart.dynamic]]})
  });
  const _computeElements = Symbol('_computeElements');
  const _contains = Symbol('_contains');
  const _lookup = Symbol('_lookup');
  const _elements = Symbol('_elements');
  const _HashSet$ = dart.generic(function(E) {
    class _HashSet extends _HashSetBase$(E) {
      _HashSet() {
      }
      get iterator() {
        return new (HashSetIterator$(E))(this, this[_computeElements]());
      }
      get length() {
        return this[_length];
      }
      get isEmpty() {
        return this[_length] == 0;
      }
      get isNotEmpty() {
        return !dart.notNull(this.isEmpty);
      }
      contains(object) {
        if (dart.notNull(_HashSet$()._isStringElement(object))) {
          let strings = this[_strings];
          return strings == null ? false : _HashSet$()._hasTableEntry(strings, object);
        } else if (dart.notNull(_HashSet$()._isNumericElement(object))) {
          let nums = this[_nums];
          return nums == null ? false : _HashSet$()._hasTableEntry(nums, object);
        } else {
          return this[_contains](object);
        }
      }
      lookup(object) {
        if (dart.notNull(_HashSet$()._isStringElement(object)) || dart.notNull(_HashSet$()._isNumericElement(object))) {
          return dart.as(dart.notNull(this.contains(object)) ? object : null, E);
        }
        return this[_lookup](object);
      }
      add(element) {
        dart.as(element, E);
        if (dart.notNull(_HashSet$()._isStringElement(element))) {
          let strings = this[_strings];
          if (strings == null) this[_strings] = strings = _HashSet$()._newHashTable();
          return this[_addHashTableEntry](strings, element);
        } else if (dart.notNull(_HashSet$()._isNumericElement(element))) {
          let nums = this[_nums];
          if (nums == null) this[_nums] = nums = _HashSet$()._newHashTable();
          return this[_addHashTableEntry](nums, element);
        } else {
          return this[_add](element);
        }
      }
      remove(object) {
        if (dart.notNull(_HashSet$()._isStringElement(object))) {
          return this[_removeHashTableEntry](this[_strings], object);
        } else if (dart.notNull(_HashSet$()._isNumericElement(object))) {
          return this[_removeHashTableEntry](this[_nums], object);
        } else {
          return this[_remove](object);
        }
      }
      clear() {
        if (dart.notNull(this[_length]) > 0) {
          this[_strings] = this[_nums] = this[_rest] = this[_elements] = null;
          this[_length] = 0;
        }
      }
    }
    _HashSet[dart.implements] = () => [HashSet$(E)];
    dart.setSignature(_HashSet, {
      constructors: () => ({_HashSet: [_HashSet$(E), []]}),
      methods: () => ({
        contains: [core.bool, [core.Object]],
        lookup: [E, [core.Object]],
        add: [core.bool, [E]],
        remove: [core.bool, [core.Object]]
      })
    });
    dart.defineExtensionMembers(_HashSet, ['contains', 'iterator', 'isEmpty', 'isNotEmpty']);
    return _HashSet;
  });
  let _HashSet = _HashSet$();
  const _IdentityHashSet$ = dart.generic(function(E) {
    class _IdentityHashSet extends _HashSet$(E) {
      _IdentityHashSet() {
        super._HashSet();
      }
    }
    return _IdentityHashSet;
  });
  let _IdentityHashSet = _IdentityHashSet$();
  const _equality = Symbol('_equality');
  const _hasher = Symbol('_hasher');
  const _CustomHashSet$ = dart.generic(function(E) {
    class _CustomHashSet extends _HashSet$(E) {
      _CustomHashSet(equality, hasher, validKey) {
        this[_equality] = equality;
        this[_hasher] = hasher;
        this[_validKey] = dart.as(validKey != null ? validKey : dart.fn(x => dart.is(x, E), core.bool, [core.Object]), _Predicate$(core.Object));
        super._HashSet();
      }
      add(object) {
        dart.as(object, E);
        return super[_add](object);
      }
      contains(object) {
        if (!dart.notNull(this[_validKey](object))) return false;
        return super[_contains](object);
      }
      lookup(object) {
        if (!dart.notNull(this[_validKey](object))) return null;
        return super[_lookup](object);
      }
      remove(object) {
        if (!dart.notNull(this[_validKey](object))) return false;
        return super[_remove](object);
      }
    }
    dart.setSignature(_CustomHashSet, {
      constructors: () => ({_CustomHashSet: [_CustomHashSet$(E), [_Equality$(E), _Hasher$(E), dart.functionType(core.bool, [core.Object])]]}),
      methods: () => ({
        add: [core.bool, [E]],
        lookup: [E, [core.Object]]
      })
    });
    dart.defineExtensionMembers(_CustomHashSet, ['contains']);
    return _CustomHashSet;
  });
  let _CustomHashSet = _CustomHashSet$();
  const _unsupported = Symbol('_unsupported');
  const _element = Symbol('_element');
  const _LinkedHashSet$ = dart.generic(function(E) {
    class _LinkedHashSet extends _HashSetBase$(E) {
      _LinkedHashSet() {
        this[_length] = 0;
        this[_strings] = null;
        this[_nums] = null;
        this[_rest] = null;
        this[_first] = null;
        this[_last] = null;
        this[_modifications] = 0;
      }
      [_newSet]() {
        return new (_LinkedHashSet$(E))();
      }
      [_unsupported](operation) {
        dart.throw(`LinkedHashSet: unsupported ${operation}`);
      }
      get iterator() {
        return new (LinkedHashSetIterator$(E))(this, this[_modifications]);
      }
      get length() {
        return this[_length];
      }
      get isEmpty() {
        return this[_length] == 0;
      }
      get isNotEmpty() {
        return !dart.notNull(this.isEmpty);
      }
      contains(object) {
        if (dart.notNull(_LinkedHashSet$()._isStringElement(object))) {
          let strings = this[_strings];
          if (strings == null) return false;
          let cell = dart.as(_LinkedHashSet$()._getTableEntry(strings, object), LinkedHashSetCell);
          return cell != null;
        } else if (dart.notNull(_LinkedHashSet$()._isNumericElement(object))) {
          let nums = this[_nums];
          if (nums == null) return false;
          let cell = dart.as(_LinkedHashSet$()._getTableEntry(nums, object), LinkedHashSetCell);
          return cell != null;
        } else {
          return this[_contains](object);
        }
      }
      [_contains](object) {
        let rest = this[_rest];
        if (rest == null) return false;
        let bucket = this[_getBucket](rest, object);
        return dart.notNull(this[_findBucketIndex](bucket, object)) >= 0;
      }
      lookup(object) {
        if (dart.notNull(_LinkedHashSet$()._isStringElement(object)) || dart.notNull(_LinkedHashSet$()._isNumericElement(object))) {
          return dart.as(dart.notNull(this.contains(object)) ? object : null, E);
        } else {
          return this[_lookup](object);
        }
      }
      [_lookup](object) {
        let rest = this[_rest];
        if (rest == null) return null;
        let bucket = this[_getBucket](rest, object);
        let index = this[_findBucketIndex](bucket, object);
        if (dart.notNull(index) < 0) return null;
        return dart.as(dart.dload(bucket[dartx.get](index), _element), E);
      }
      forEach(action) {
        dart.as(action, dart.functionType(dart.void, [E]));
        let cell = this[_first];
        let modifications = this[_modifications];
        while (cell != null) {
          action(dart.as(cell[_element], E));
          if (modifications != this[_modifications]) {
            dart.throw(new core.ConcurrentModificationError(this));
          }
          cell = cell[_next];
        }
      }
      get first() {
        if (this[_first] == null) dart.throw(new core.StateError("No elements"));
        return dart.as(this[_first][_element], E);
      }
      get last() {
        if (this[_last] == null) dart.throw(new core.StateError("No elements"));
        return dart.as(this[_last][_element], E);
      }
      add(element) {
        dart.as(element, E);
        if (dart.notNull(_LinkedHashSet$()._isStringElement(element))) {
          let strings = this[_strings];
          if (strings == null) this[_strings] = strings = _LinkedHashSet$()._newHashTable();
          return this[_addHashTableEntry](strings, element);
        } else if (dart.notNull(_LinkedHashSet$()._isNumericElement(element))) {
          let nums = this[_nums];
          if (nums == null) this[_nums] = nums = _LinkedHashSet$()._newHashTable();
          return this[_addHashTableEntry](nums, element);
        } else {
          return this[_add](element);
        }
      }
      [_add](element) {
        dart.as(element, E);
        let rest = this[_rest];
        if (rest == null) this[_rest] = rest = _LinkedHashSet$()._newHashTable();
        let hash = this[_computeHashCode](element);
        let bucket = rest[hash];
        if (bucket == null) {
          let cell = this[_newLinkedCell](element);
          _LinkedHashSet$()._setTableEntry(rest, hash, [cell]);
        } else {
          let index = this[_findBucketIndex](bucket, element);
          if (dart.notNull(index) >= 0) return false;
          let cell = this[_newLinkedCell](element);
          bucket.push(cell);
        }
        return true;
      }
      remove(object) {
        if (dart.notNull(_LinkedHashSet$()._isStringElement(object))) {
          return this[_removeHashTableEntry](this[_strings], object);
        } else if (dart.notNull(_LinkedHashSet$()._isNumericElement(object))) {
          return this[_removeHashTableEntry](this[_nums], object);
        } else {
          return this[_remove](object);
        }
      }
      [_remove](object) {
        let rest = this[_rest];
        if (rest == null) return false;
        let bucket = this[_getBucket](rest, object);
        let index = this[_findBucketIndex](bucket, object);
        if (dart.notNull(index) < 0) return false;
        let cell = dart.as(bucket.splice(index, 1)[0], LinkedHashSetCell);
        this[_unlinkCell](cell);
        return true;
      }
      removeWhere(test) {
        dart.as(test, dart.functionType(core.bool, [E]));
        this[_filterWhere](test, true);
      }
      retainWhere(test) {
        dart.as(test, dart.functionType(core.bool, [E]));
        this[_filterWhere](test, false);
      }
      [_filterWhere](test, removeMatching) {
        dart.as(test, dart.functionType(core.bool, [E]));
        let cell = this[_first];
        while (cell != null) {
          let element = dart.as(cell[_element], E);
          let next = cell[_next];
          let modifications = this[_modifications];
          let shouldRemove = removeMatching == test(element);
          if (modifications != this[_modifications]) {
            dart.throw(new core.ConcurrentModificationError(this));
          }
          if (shouldRemove) this.remove(element);
          cell = next;
        }
      }
      clear() {
        if (dart.notNull(this[_length]) > 0) {
          this[_strings] = this[_nums] = this[_rest] = this[_first] = this[_last] = null;
          this[_length] = 0;
          this[_modified]();
        }
      }
      [_addHashTableEntry](table, element) {
        dart.as(element, E);
        let cell = dart.as(_LinkedHashSet$()._getTableEntry(table, element), LinkedHashSetCell);
        if (cell != null) return false;
        _LinkedHashSet$()._setTableEntry(table, element, this[_newLinkedCell](element));
        return true;
      }
      [_removeHashTableEntry](table, element) {
        if (table == null) return false;
        let cell = dart.as(_LinkedHashSet$()._getTableEntry(table, element), LinkedHashSetCell);
        if (cell == null) return false;
        this[_unlinkCell](cell);
        _LinkedHashSet$()._deleteTableEntry(table, element);
        return true;
      }
      [_modified]() {
        this[_modifications] = dart.notNull(this[_modifications]) + 1 & 67108863;
      }
      [_newLinkedCell](element) {
        dart.as(element, E);
        let cell = new LinkedHashSetCell(element);
        if (this[_first] == null) {
          this[_first] = this[_last] = cell;
        } else {
          let last = this[_last];
          cell[_previous] = last;
          this[_last] = last[_next] = cell;
        }
        this[_length] = dart.notNull(this[_length]) + 1;
        this[_modified]();
        return cell;
      }
      [_unlinkCell](cell) {
        let previous = cell[_previous];
        let next = cell[_next];
        if (previous == null) {
          dart.assert(dart.equals(cell, this[_first]));
          this[_first] = next;
        } else {
          previous[_next] = next;
        }
        if (next == null) {
          dart.assert(dart.equals(cell, this[_last]));
          this[_last] = previous;
        } else {
          next[_previous] = previous;
        }
        this[_length] = dart.notNull(this[_length]) - 1;
        this[_modified]();
      }
      static _isStringElement(element) {
        return typeof element == 'string' && element != '__proto__';
      }
      static _isNumericElement(element) {
        return typeof element == 'number' && (element & 0x3ffffff) === element;
      }
      [_computeHashCode](element) {
        return dart.hashCode(element) & 0x3ffffff;
      }
      static _getTableEntry(table, key) {
        return table[key];
      }
      static _setTableEntry(table, key, value) {
        dart.assert(value != null);
        table[key] = value;
      }
      static _deleteTableEntry(table, key) {
        delete table[key];
      }
      [_getBucket](table, element) {
        let hash = this[_computeHashCode](element);
        return dart.as(table[hash], core.List);
      }
      [_findBucketIndex](bucket, element) {
        if (bucket == null) return -1;
        let length = bucket.length;
        for (let i = 0; i < length; i++) {
          let cell = dart.as(bucket[i], LinkedHashSetCell);
          if (dart.equals(cell[_element], element)) return i;
        }
        return -1;
      }
      static _newHashTable() {
        let table = Object.create(null);
        let temporaryKey = '<non-identifier-key>';
        _LinkedHashSet$()._setTableEntry(table, temporaryKey, table);
        _LinkedHashSet$()._deleteTableEntry(table, temporaryKey);
        return table;
      }
    }
    _LinkedHashSet[dart.implements] = () => [LinkedHashSet$(E)];
    dart.setSignature(_LinkedHashSet, {
      constructors: () => ({_LinkedHashSet: [_LinkedHashSet$(E), []]}),
      methods: () => ({
        [_newSet]: [core.Set$(E), []],
        [_unsupported]: [dart.void, [core.String]],
        contains: [core.bool, [core.Object]],
        [_contains]: [core.bool, [core.Object]],
        lookup: [E, [core.Object]],
        [_lookup]: [E, [core.Object]],
        forEach: [dart.void, [dart.functionType(dart.void, [E])]],
        add: [core.bool, [E]],
        [_add]: [core.bool, [E]],
        remove: [core.bool, [core.Object]],
        [_remove]: [core.bool, [core.Object]],
        removeWhere: [dart.void, [dart.functionType(core.bool, [E])]],
        retainWhere: [dart.void, [dart.functionType(core.bool, [E])]],
        [_filterWhere]: [dart.void, [dart.functionType(core.bool, [E]), core.bool]],
        [_addHashTableEntry]: [core.bool, [dart.dynamic, E]],
        [_removeHashTableEntry]: [core.bool, [dart.dynamic, core.Object]],
        [_modified]: [dart.void, []],
        [_newLinkedCell]: [LinkedHashSetCell, [E]],
        [_unlinkCell]: [dart.void, [LinkedHashSetCell]],
        [_computeHashCode]: [core.int, [dart.dynamic]],
        [_getBucket]: [core.List, [dart.dynamic, dart.dynamic]],
        [_findBucketIndex]: [core.int, [dart.dynamic, dart.dynamic]]
      }),
      statics: () => ({
        _isStringElement: [core.bool, [dart.dynamic]],
        _isNumericElement: [core.bool, [dart.dynamic]],
        _getTableEntry: [dart.dynamic, [dart.dynamic, dart.dynamic]],
        _setTableEntry: [dart.void, [dart.dynamic, dart.dynamic, dart.dynamic]],
        _deleteTableEntry: [dart.void, [dart.dynamic, dart.dynamic]],
        _newHashTable: [dart.dynamic, []]
      }),
      names: ['_isStringElement', '_isNumericElement', '_getTableEntry', '_setTableEntry', '_deleteTableEntry', '_newHashTable']
    });
    dart.defineExtensionMembers(_LinkedHashSet, ['contains', 'iterator', 'isEmpty', 'isNotEmpty']);
    return _LinkedHashSet;
  });
  let _LinkedHashSet = _LinkedHashSet$();
  const _LinkedIdentityHashSet$ = dart.generic(function(E) {
    class _LinkedIdentityHashSet extends _LinkedHashSet$(E) {
      _LinkedIdentityHashSet() {
        super._LinkedHashSet();
      }
    }
    return _LinkedIdentityHashSet;
  });
  let _LinkedIdentityHashSet = _LinkedIdentityHashSet$();
  const _LinkedCustomHashSet$ = dart.generic(function(E) {
    class _LinkedCustomHashSet extends _LinkedHashSet$(E) {
      _LinkedCustomHashSet(equality, hasher, validKey) {
        this[_equality] = equality;
        this[_hasher] = hasher;
        this[_validKey] = dart.as(validKey != null ? validKey : dart.fn(x => dart.is(x, E), core.bool, [core.Object]), _Predicate$(core.Object));
        super._LinkedHashSet();
      }
      add(element) {
        dart.as(element, E);
        return super[_add](element);
      }
      contains(object) {
        if (!dart.notNull(this[_validKey](object))) return false;
        return super[_contains](object);
      }
      lookup(object) {
        if (!dart.notNull(this[_validKey](object))) return null;
        return super[_lookup](object);
      }
      remove(object) {
        if (!dart.notNull(this[_validKey](object))) return false;
        return super[_remove](object);
      }
      containsAll(elements) {
        for (let element of elements) {
          if (!dart.notNull(this[_validKey](element)) || !dart.notNull(this.contains(element))) return false;
        }
        return true;
      }
      removeAll(elements) {
        for (let element of elements) {
          if (dart.notNull(this[_validKey](element))) {
            super[_remove](element);
          }
        }
      }
    }
    dart.setSignature(_LinkedCustomHashSet, {
      constructors: () => ({_LinkedCustomHashSet: [_LinkedCustomHashSet$(E), [_Equality$(E), _Hasher$(E), dart.functionType(core.bool, [core.Object])]]}),
      methods: () => ({
        add: [core.bool, [E]],
        lookup: [E, [core.Object]]
      })
    });
    dart.defineExtensionMembers(_LinkedCustomHashSet, ['contains']);
    return _LinkedCustomHashSet;
  });
  let _LinkedCustomHashSet = _LinkedCustomHashSet$();
  class LinkedHashSetCell extends core.Object {
    LinkedHashSetCell(element) {
      this[_element] = element;
    }
  }
  dart.setSignature(LinkedHashSetCell, {
    constructors: () => ({LinkedHashSetCell: [LinkedHashSetCell, [dart.dynamic]]})
  });
  // Exports:
  exports.HashMap$ = HashMap$;
  exports.HashMap = HashMap;
  exports.SetMixin$ = SetMixin$;
  exports.SetMixin = SetMixin;
  exports.SetBase$ = SetBase$;
  exports.SetBase = SetBase;
  exports.HashSet$ = HashSet$;
  exports.HashSet = HashSet;
  exports.IterableMixin$ = IterableMixin$;
  exports.IterableMixin = IterableMixin;
  exports.IterableBase$ = IterableBase$;
  exports.IterableBase = IterableBase;
  exports.LinkedHashMap$ = LinkedHashMap$;
  exports.LinkedHashMap = LinkedHashMap;
  exports.LinkedHashSet$ = LinkedHashSet$;
  exports.LinkedHashSet = LinkedHashSet;
  exports.Queue$ = Queue$;
  exports.Queue = Queue;
  exports.ListQueue$ = ListQueue$;
  exports.ListQueue = ListQueue;
  exports.SplayTreeMap$ = SplayTreeMap$;
  exports.SplayTreeMap = SplayTreeMap;
  exports.SplayTreeSet$ = SplayTreeSet$;
  exports.SplayTreeSet = SplayTreeSet;
  exports.LinkedHashMapCell = LinkedHashMapCell;
  exports.LinkedHashSetCell = LinkedHashSetCell;
});
