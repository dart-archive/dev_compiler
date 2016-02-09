'use strict';
require("dart/_debugger");
require("dart/html_common");
require("dart/html");
require("dart/_metadata");
require("dart/js");
require("dart/_js_mirrors");
require("dart/mirrors");
require("dart/convert");
require("dart/_js_primitives");
require("dart/_isolate_helper");
require("dart/_native_typed_data");
require("dart/typed_data");
require("dart/isolate");
require("dart/_js_helper");
require("dart/_js_embedded_names");
require("dart/_foreign_helper");
require("dart/async");
require("dart/_interceptors");
require("dart/math");
require("dart/_internal");
require("dart/collection");
require("dart/core");
let dart = require("dart/_runtime");
let core = require("dart/core");
let _internal = require("dart/_internal");
let _js_helper = require("dart/_js_helper");
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
// /* Incoming: _rootFork (FunctionElementImpl @ dart:async/zone.dart), _RootZone._rootMap (FieldElementImpl @ dart:async/zone.dart), _HashMap (ClassElementImpl @ dart:collection), _IdentityHashMap (ClassElementImpl @ dart:collection), _CustomHashMap (ClassElementImpl @ dart:collection), _LinkedHashMap (ClassElementImpl @ dart:collection), _LinkedIdentityHashMap (ClassElementImpl @ dart:collection), _LinkedCustomHashMap (ClassElementImpl @ dart:collection), HashMap. (ConstructorElementImpl @ dart:collection/hash_map.dart), HashMap.identity (ConstructorElementImpl @ dart:collection/hash_map.dart), HashMap.from (ConstructorElementImpl @ dart:collection/hash_map.dart), result (LocalVariableElementImpl @ dart:collection/hash_map.dart), HashMap.fromIterable (ConstructorElementImpl @ dart:collection/hash_map.dart), map (LocalVariableElementImpl @ dart:collection/hash_map.dart), HashMap.fromIterables (ConstructorElementImpl @ dart:collection/hash_map.dart), map (LocalVariableElementImpl @ dart:collection/hash_map.dart), LinkedHashMap (ClassElementImpl @ dart:collection/linked_hash_map.dart), _JsonMap (ClassElementImpl @ dart:convert) */
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
  }
  HashMap[dart.implements] = () => [core.Map$(K, V)];
  dart.setSignature(HashMap, {
    constructors: () => ({new: [HashMap$(K, V), [], {equals: dart.functionType(core.bool, [K, K]), hashCode: dart.functionType(core.int, [K]), isValidKey: dart.functionType(core.bool, [core.Object])}]})
  });
  return HashMap;
});
let HashMap = HashMap$();
// /* Incoming: _HashSet (ClassElementImpl @ dart:collection), _IdentityHashSet (ClassElementImpl @ dart:collection), _CustomHashSet (ClassElementImpl @ dart:collection), _LinkedHashSet (ClassElementImpl @ dart:collection), _LinkedIdentityHashSet (ClassElementImpl @ dart:collection), _LinkedCustomHashSet (ClassElementImpl @ dart:collection), _HashSetBase (ClassElementImpl @ dart:collection/hash_set.dart), SetMixin.removeWhere (MethodElementImpl @ dart:collection/set.dart), SetMixin.retainWhere (MethodElementImpl @ dart:collection/set.dart), SetMixin.intersection (MethodElementImpl @ dart:collection/set.dart), SetMixin.difference (MethodElementImpl @ dart:collection/set.dart), SetMixin.toList (MethodElementImpl @ dart:collection/set.dart), SetMixin.map (MethodElementImpl @ dart:collection/set.dart), SetMixin.toString (MethodElementImpl @ dart:collection/set.dart), SetMixin.where (MethodElementImpl @ dart:collection/set.dart), SetMixin.expand (MethodElementImpl @ dart:collection/set.dart), SetMixin.forEach (MethodElementImpl @ dart:collection/set.dart), iterator (LocalVariableElementImpl @ dart:collection/set.dart), SetMixin.fold (MethodElementImpl @ dart:collection/set.dart), SetMixin.every (MethodElementImpl @ dart:collection/set.dart), iterator (LocalVariableElementImpl @ dart:collection/set.dart), SetMixin.any (MethodElementImpl @ dart:collection/set.dart), SetMixin.take (MethodElementImpl @ dart:collection/set.dart), SetMixin.takeWhile (MethodElementImpl @ dart:collection/set.dart), SetMixin.skip (MethodElementImpl @ dart:collection/set.dart), SetMixin.skipWhile (MethodElementImpl @ dart:collection/set.dart), SetMixin.firstWhere (MethodElementImpl @ dart:collection/set.dart), SetMixin.lastWhere (MethodElementImpl @ dart:collection/set.dart), SetMixin.singleWhere (MethodElementImpl @ dart:collection/set.dart), SetMixin.elementAt (MethodElementImpl @ dart:collection/set.dart), SetBase (ClassElementImpl @ dart:collection/set.dart), SplayTreeSet (ClassElementImpl @ dart:collection/splay_tree.dart) */
const SetMixin$ = dart.generic(function(E) {
  class SetMixin extends core.Object {
    [Symbol.iterator]() {
      return new dart.JsIterator(this.iterator);
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
    toList({growable = true} = {}) {
      let result = dart.notNull(growable) ? (() => {
        let _ = core.List$(E).new();
        _[dartx.length] = this.length;
        return _;
      })() : core.List$(E).new(this.length);
      let i = 0;
      for (let element of this)
        result[dartx.set](i++, element);
      return result;
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
      toList: [core.List$(E), [], {growable: core.bool}]
    })
  });
  dart.defineExtensionMembers(SetMixin, ['toList', 'isNotEmpty']);
  return SetMixin;
});
let SetMixin = SetMixin$();
// /* Incoming: _HashSet (ClassElementImpl @ dart:collection), _IdentityHashSet (ClassElementImpl @ dart:collection), _CustomHashSet (ClassElementImpl @ dart:collection), _LinkedHashSet (ClassElementImpl @ dart:collection), _LinkedIdentityHashSet (ClassElementImpl @ dart:collection), _LinkedCustomHashSet (ClassElementImpl @ dart:collection), _HashSetBase (ClassElementImpl @ dart:collection/hash_set.dart) */
const SetBase$ = dart.generic(function(E) {
  class SetBase extends SetMixin$(E) {}
  return SetBase;
});
let SetBase = SetBase$();
// /* Incoming: _HashSet (ClassElementImpl @ dart:collection), _IdentityHashSet (ClassElementImpl @ dart:collection), _CustomHashSet (ClassElementImpl @ dart:collection), _LinkedHashSet (ClassElementImpl @ dart:collection), _LinkedIdentityHashSet (ClassElementImpl @ dart:collection), _LinkedCustomHashSet (ClassElementImpl @ dart:collection), _HashSetBase.difference (MethodElementImpl @ dart:collection/hash_set.dart), _HashSetBase.intersection (MethodElementImpl @ dart:collection/hash_set.dart), _HashSetBase.toSet (MethodElementImpl @ dart:collection/hash_set.dart) */
const _HashSetBase$ = dart.generic(function(E) {
  class _HashSetBase extends SetBase$(E) {}
  return _HashSetBase;
});
let _HashSetBase = _HashSetBase$();
// /* Incoming: _HashSet (ClassElementImpl @ dart:collection), _IdentityHashSet (ClassElementImpl @ dart:collection), _CustomHashSet (ClassElementImpl @ dart:collection), _LinkedHashSet (ClassElementImpl @ dart:collection), _LinkedIdentityHashSet (ClassElementImpl @ dart:collection), _LinkedCustomHashSet (ClassElementImpl @ dart:collection), HashSet. (ConstructorElementImpl @ dart:collection/hash_set.dart), HashSet.identity (ConstructorElementImpl @ dart:collection/hash_set.dart), HashSet.from (ConstructorElementImpl @ dart:collection/hash_set.dart), result (LocalVariableElementImpl @ dart:collection/hash_set.dart), LinkedHashSet (ClassElementImpl @ dart:collection/linked_hash_set.dart) */
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
    [Symbol.iterator]() {
      return new dart.JsIterator(this.iterator);
    }
  }
  HashSet[dart.implements] = () => [core.Set$(E)];
  dart.setSignature(HashSet, {
    constructors: () => ({new: [HashSet$(E), [], {equals: dart.functionType(core.bool, [E, E]), hashCode: dart.functionType(core.int, [E]), isValidKey: dart.functionType(core.bool, [core.Object])}]})
  });
  return HashSet;
});
let HashSet = HashSet$();
// /* Incoming: IterableMixin.map (MethodElementImpl @ dart:collection/iterable.dart), IterableMixin.where (MethodElementImpl @ dart:collection/iterable.dart), IterableMixin.expand (MethodElementImpl @ dart:collection/iterable.dart), IterableMixin.contains (MethodElementImpl @ dart:collection/iterable.dart), IterableMixin.forEach (MethodElementImpl @ dart:collection/iterable.dart), iterator (LocalVariableElementImpl @ dart:collection/iterable.dart), IterableMixin.fold (MethodElementImpl @ dart:collection/iterable.dart), IterableMixin.every (MethodElementImpl @ dart:collection/iterable.dart), iterator (LocalVariableElementImpl @ dart:collection/iterable.dart), IterableMixin.any (MethodElementImpl @ dart:collection/iterable.dart), IterableMixin.toList (MethodElementImpl @ dart:collection/iterable.dart), IterableMixin.toSet (MethodElementImpl @ dart:collection/iterable.dart), IterableMixin.length (FieldElementImpl @ dart:collection/iterable.dart), IterableMixin.take (MethodElementImpl @ dart:collection/iterable.dart), IterableMixin.takeWhile (MethodElementImpl @ dart:collection/iterable.dart), IterableMixin.skip (MethodElementImpl @ dart:collection/iterable.dart), IterableMixin.skipWhile (MethodElementImpl @ dart:collection/iterable.dart), IterableMixin.firstWhere (MethodElementImpl @ dart:collection/iterable.dart), IterableMixin.lastWhere (MethodElementImpl @ dart:collection/iterable.dart), IterableMixin.singleWhere (MethodElementImpl @ dart:collection/iterable.dart), IterableMixin.elementAt (MethodElementImpl @ dart:collection/iterable.dart), IterableMixin.toString (MethodElementImpl @ dart:collection/iterable.dart), SplayTreeSet (ClassElementImpl @ dart:collection/splay_tree.dart) */
const IterableMixin$ = dart.generic(function(E) {
  class IterableMixin extends core.Object {
    contains(element) {
      for (let e of this) {
        if (dart.equals(e, element)) return true;
      }
      return false;
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
      return IterableBase.iterableToShortString(this, '(', ')');
    }
    [Symbol.iterator]() {
      return new dart.JsIterator(this.iterator);
    }
  }
  IterableMixin[dart.implements] = () => [core.Iterable$(E)];
  dart.setSignature(IterableMixin, {
    methods: () => ({contains: [core.bool, [core.Object]]})
  });
  dart.defineExtensionMembers(IterableMixin, ['contains', 'length', 'isEmpty', 'isNotEmpty']);
  return IterableMixin;
});
let IterableMixin = IterableMixin$();
// /* Incoming: SyncIterable (ClassElementImpl @ dart:_js_helper), _AllMatchesIterable (ClassElementImpl @ dart:_js_helper/regexp_helper.dart), ListIterable (ClassElementImpl @ dart:_internal/iterable.dart), SubListIterable (ClassElementImpl @ dart:_internal/iterable.dart), MappedIterable (ClassElementImpl @ dart:_internal/iterable.dart), EfficientLengthMappedIterable (ClassElementImpl @ dart:_internal/iterable.dart), MappedListIterable (ClassElementImpl @ dart:_internal/iterable.dart), WhereIterable (ClassElementImpl @ dart:_internal/iterable.dart), ExpandIterable (ClassElementImpl @ dart:_internal/iterable.dart), TakeIterable (ClassElementImpl @ dart:_internal/iterable.dart), EfficientLengthTakeIterable (ClassElementImpl @ dart:_internal/iterable.dart), TakeWhileIterable (ClassElementImpl @ dart:_internal/iterable.dart), SkipIterable (ClassElementImpl @ dart:_internal/iterable.dart), EfficientLengthSkipIterable (ClassElementImpl @ dart:_internal/iterable.dart), SkipWhileIterable (ClassElementImpl @ dart:_internal/iterable.dart), EmptyIterable (ClassElementImpl @ dart:_internal/iterable.dart), _ListIndicesIterable (ClassElementImpl @ dart:_internal/list.dart), ReversedListIterable (ClassElementImpl @ dart:_internal/list.dart), HashMapKeyIterable (ClassElementImpl @ dart:collection), LinkedHashMapKeyIterable (ClassElementImpl @ dart:collection), _HashSet (ClassElementImpl @ dart:collection), _IdentityHashSet (ClassElementImpl @ dart:collection), _CustomHashSet (ClassElementImpl @ dart:collection), _LinkedHashSet (ClassElementImpl @ dart:collection), _LinkedIdentityHashSet (ClassElementImpl @ dart:collection), _LinkedCustomHashSet (ClassElementImpl @ dart:collection), _HashSetBase (ClassElementImpl @ dart:collection/hash_set.dart), HashSet (ClassElementImpl @ dart:collection/hash_set.dart), IterableMixin.toString (MethodElementImpl @ dart:collection/iterable.dart), IterableBase. (ConstructorElementImpl @ dart:collection/iterable.dart), IterableBase.map (MethodElementImpl @ dart:collection/iterable.dart), IterableBase.where (MethodElementImpl @ dart:collection/iterable.dart), IterableBase.expand (MethodElementImpl @ dart:collection/iterable.dart), IterableBase.contains (MethodElementImpl @ dart:collection/iterable.dart), IterableBase.forEach (MethodElementImpl @ dart:collection/iterable.dart), iterator (LocalVariableElementImpl @ dart:collection/iterable.dart), IterableBase.fold (MethodElementImpl @ dart:collection/iterable.dart), IterableBase.every (MethodElementImpl @ dart:collection/iterable.dart), iterator (LocalVariableElementImpl @ dart:collection/iterable.dart), IterableBase.any (MethodElementImpl @ dart:collection/iterable.dart), IterableBase.toList (MethodElementImpl @ dart:collection/iterable.dart), IterableBase.toSet (MethodElementImpl @ dart:collection/iterable.dart), IterableBase.length (FieldElementImpl @ dart:collection/iterable.dart), IterableBase.take (MethodElementImpl @ dart:collection/iterable.dart), IterableBase.takeWhile (MethodElementImpl @ dart:collection/iterable.dart), IterableBase.skip (MethodElementImpl @ dart:collection/iterable.dart), IterableBase.skipWhile (MethodElementImpl @ dart:collection/iterable.dart), IterableBase.firstWhere (MethodElementImpl @ dart:collection/iterable.dart), IterableBase.lastWhere (MethodElementImpl @ dart:collection/iterable.dart), IterableBase.singleWhere (MethodElementImpl @ dart:collection/iterable.dart), IterableBase.elementAt (MethodElementImpl @ dart:collection/iterable.dart), IterableBase.toString (MethodElementImpl @ dart:collection/iterable.dart), LinkedHashSet (ClassElementImpl @ dart:collection/linked_hash_set.dart), LinkedList (ClassElementImpl @ dart:collection/linked_list.dart), ListBase.listToString (MethodElementImpl @ dart:collection/list.dart), ListMixin.toString (MethodElementImpl @ dart:collection/list.dart), _MapBaseValueIterable (ClassElementImpl @ dart:collection/maps.dart), Maps.mapToString (MethodElementImpl @ dart:collection/maps.dart), DoubleLinkedQueue (ClassElementImpl @ dart:collection/queue.dart), DoubleLinkedQueue.toString (MethodElementImpl @ dart:collection/queue.dart), ListQueue (ClassElementImpl @ dart:collection/queue.dart), ListQueue.toString (MethodElementImpl @ dart:collection/queue.dart), SetMixin (ClassElementImpl @ dart:collection/set.dart), SetMixin.toString (MethodElementImpl @ dart:collection/set.dart), SetBase (ClassElementImpl @ dart:collection/set.dart), SetBase.setToString (MethodElementImpl @ dart:collection/set.dart), _SplayTreeKeyIterable (ClassElementImpl @ dart:collection/splay_tree.dart), _SplayTreeValueIterable (ClassElementImpl @ dart:collection/splay_tree.dart), SplayTreeSet.toString (MethodElementImpl @ dart:collection/splay_tree.dart), _JsonMapKeyIterable (ClassElementImpl @ dart:convert), _GeneratorIterable (ClassElementImpl @ dart:core/iterable.dart), Set (ClassElementImpl @ dart:core/set.dart), Runes (ClassElementImpl @ dart:core/string.dart) */
const IterableBase$ = dart.generic(function(E) {
  class IterableBase extends core.Object {
    IterableBase() {
    }
    contains(element) {
      for (let e of this) {
        if (dart.equals(e, element)) return true;
      }
      return false;
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
    static iterableToShortString(iterable, leftDelimiter, rightDelimiter) {
      if (leftDelimiter === void 0) leftDelimiter = '(';
      if (rightDelimiter === void 0) rightDelimiter = ')';
      if (dart.notNull(IterableBase$()._isToStringVisiting(iterable))) {
        if (leftDelimiter == "(" && rightDelimiter == ")") {
          return "(...)";
        }
        return `${leftDelimiter}...${rightDelimiter}`;
      }
      let parts = [];
      IterableBase$()._toStringVisiting[dartx.add](iterable);
      try {
        IterableBase$()._iterablePartsToStrings(iterable, parts);
      } finally {
        dart.assert(core.identical(IterableBase$()._toStringVisiting[dartx.last], iterable));
        IterableBase$()._toStringVisiting[dartx.removeLast]();
      }
      return dart.toString((() => {
        let _ = new core.StringBuffer(leftDelimiter);
        _.writeAll(parts, ", ");
        _.write(rightDelimiter);
        return _;
      })());
    }
    static iterableToFullString(iterable, leftDelimiter, rightDelimiter) {
      if (leftDelimiter === void 0) leftDelimiter = '(';
      if (rightDelimiter === void 0) rightDelimiter = ')';
      if (dart.notNull(IterableBase$()._isToStringVisiting(iterable))) {
        return `${leftDelimiter}...${rightDelimiter}`;
      }
      let buffer = new core.StringBuffer(leftDelimiter);
      IterableBase$()._toStringVisiting[dartx.add](iterable);
      try {
        buffer.writeAll(iterable, ", ");
      } finally {
        dart.assert(core.identical(IterableBase$()._toStringVisiting[dartx.last], iterable));
        IterableBase$()._toStringVisiting[dartx.removeLast]();
      }
      buffer.write(rightDelimiter);
      return dart.toString(buffer);
    }
    static _isToStringVisiting(o) {
      for (let i = 0; i < dart.notNull(IterableBase$()._toStringVisiting[dartx.length]); i++) {
        if (dart.notNull(core.identical(o, IterableBase$()._toStringVisiting[dartx.get](i)))) return true;
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
      let it = iterable[dartx.iterator];
      while (dart.notNull(length) < LENGTH_LIMIT || count < HEAD_COUNT) {
        if (!dart.notNull(it.moveNext())) return;
        let next = `${it.current}`;
        parts[dartx.add](next);
        length = dart.notNull(length) + (dart.notNull(next[dartx.length]) + OVERHEAD);
        count++;
      }
      let penultimateString = null;
      let ultimateString = null;
      let penultimate = null;
      let ultimate = null;
      if (!dart.notNull(it.moveNext())) {
        if (count <= HEAD_COUNT + TAIL_COUNT) return;
        ultimateString = dart.as(parts[dartx.removeLast](), core.String);
        penultimateString = dart.as(parts[dartx.removeLast](), core.String);
      } else {
        penultimate = it.current;
        count++;
        if (!dart.notNull(it.moveNext())) {
          if (count <= HEAD_COUNT + 1) {
            parts[dartx.add](`${penultimate}`);
            return;
          }
          ultimateString = `${penultimate}`;
          penultimateString = dart.as(parts[dartx.removeLast](), core.String);
          length = dart.notNull(length) + (dart.notNull(ultimateString[dartx.length]) + OVERHEAD);
        } else {
          ultimate = it.current;
          count++;
          dart.assert(count < MAX_COUNT);
          while (dart.notNull(it.moveNext())) {
            penultimate = ultimate;
            ultimate = it.current;
            count++;
            if (count > MAX_COUNT) {
              while (dart.notNull(length) > LENGTH_LIMIT - ELLIPSIS_SIZE - OVERHEAD && count > HEAD_COUNT) {
                length = dart.notNull(length) - dart.notNull(dart.as(dart.dsend(dart.dload(parts[dartx.removeLast](), 'length'), '+', OVERHEAD), core.int));
                count--;
              }
              parts[dartx.add]("...");
              return;
            }
          }
          penultimateString = `${penultimate}`;
          ultimateString = `${ultimate}`;
          length = dart.notNull(length) + (dart.notNull(ultimateString[dartx.length]) + dart.notNull(penultimateString[dartx.length]) + 2 * OVERHEAD);
        }
      }
      let elision = null;
      if (count > dart.notNull(parts[dartx.length]) + TAIL_COUNT) {
        elision = "...";
        length = dart.notNull(length) + (ELLIPSIS_SIZE + OVERHEAD);
      }
      while (dart.notNull(length) > LENGTH_LIMIT && dart.notNull(parts[dartx.length]) > HEAD_COUNT) {
        length = dart.notNull(length) - dart.notNull(dart.as(dart.dsend(dart.dload(parts[dartx.removeLast](), 'length'), '+', OVERHEAD), core.int));
        if (elision == null) {
          elision = "...";
          length = dart.notNull(length) + (ELLIPSIS_SIZE + OVERHEAD);
        }
      }
      if (elision != null) {
        parts[dartx.add](elision);
      }
      parts[dartx.add](penultimateString);
      parts[dartx.add](ultimateString);
    }
    [Symbol.iterator]() {
      return new dart.JsIterator(this.iterator);
    }
  }
  IterableBase[dart.implements] = () => [core.Iterable$(E)];
  dart.setSignature(IterableBase, {
    constructors: () => ({IterableBase: [IterableBase$(E), []]}),
    methods: () => ({contains: [core.bool, [core.Object]]}),
    statics: () => ({
      iterableToShortString: [core.String, [core.Iterable], [core.String, core.String]],
      iterableToFullString: [core.String, [core.Iterable], [core.String, core.String]],
      _isToStringVisiting: [core.bool, [core.Object]],
      _iterablePartsToStrings: [dart.void, [core.Iterable, core.List]]
    }),
    names: ['iterableToShortString', 'iterableToFullString', '_isToStringVisiting', '_iterablePartsToStrings']
  });
  dart.defineExtensionMembers(IterableBase, ['contains', 'length', 'isEmpty', 'isNotEmpty']);
  dart.defineLazyProperties(IterableBase, {
    get _toStringVisiting() {
      return [];
    }
  });
  return IterableBase;
});
let IterableBase = IterableBase$();
// /* Incoming: map (FunctionElementImpl @ dart:_runtime/operations.dart), _LinkedHashMap (ClassElementImpl @ dart:collection), _LinkedIdentityHashMap (ClassElementImpl @ dart:collection), _LinkedCustomHashMap (ClassElementImpl @ dart:collection), LinkedHashMap. (ConstructorElementImpl @ dart:collection/linked_hash_map.dart), LinkedHashMap.identity (ConstructorElementImpl @ dart:collection/linked_hash_map.dart), LinkedHashMap.from (ConstructorElementImpl @ dart:collection/linked_hash_map.dart), result (LocalVariableElementImpl @ dart:collection/linked_hash_map.dart), LinkedHashMap.fromIterable (ConstructorElementImpl @ dart:collection/linked_hash_map.dart), map (LocalVariableElementImpl @ dart:collection/linked_hash_map.dart), LinkedHashMap.fromIterables (ConstructorElementImpl @ dart:collection/linked_hash_map.dart), map (LocalVariableElementImpl @ dart:collection/linked_hash_map.dart), LinkedHashMap._literal (ConstructorElementImpl @ dart:collection/linked_hash_map.dart), LinkedHashMap._empty (ConstructorElementImpl @ dart:collection/linked_hash_map.dart), _JsonMap (ClassElementImpl @ dart:convert), Map. (ConstructorElementImpl @ dart:core/map.dart), Map.from (ConstructorElementImpl @ dart:core/map.dart), Map.identity (ConstructorElementImpl @ dart:core/map.dart), Map.fromIterable (ConstructorElementImpl @ dart:core/map.dart), Map.fromIterables (ConstructorElementImpl @ dart:core/map.dart) */
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
// /* Incoming: _LinkedHashSet (ClassElementImpl @ dart:collection), _LinkedIdentityHashSet (ClassElementImpl @ dart:collection), _LinkedCustomHashSet (ClassElementImpl @ dart:collection), LinkedHashSet. (ConstructorElementImpl @ dart:collection/linked_hash_set.dart), LinkedHashSet.identity (ConstructorElementImpl @ dart:collection/linked_hash_set.dart), LinkedHashSet.from (ConstructorElementImpl @ dart:collection/linked_hash_set.dart), result (LocalVariableElementImpl @ dart:collection/linked_hash_set.dart), Set. (ConstructorElementImpl @ dart:core/set.dart), Set.identity (ConstructorElementImpl @ dart:core/set.dart), Set.from (ConstructorElementImpl @ dart:core/set.dart) */
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
    [Symbol.iterator]() {
      return new dart.JsIterator(this.iterator);
    }
  }
  LinkedHashSet[dart.implements] = () => [HashSet$(E)];
  dart.setSignature(LinkedHashSet, {
    constructors: () => ({new: [LinkedHashSet$(E), [], {equals: dart.functionType(core.bool, [E, E]), hashCode: dart.functionType(core.int, [E]), isValidKey: dart.functionType(core.bool, [core.Object])}]})
  });
  return LinkedHashSet;
});
let LinkedHashSet = LinkedHashSet$();
const _modificationCount = Symbol('_modificationCount');
const _length = Symbol('_length');
const _next = Symbol('_next');
const _previous = Symbol('_previous');
const _insertAfter = Symbol('_insertAfter');
const _list = Symbol('_list');
const _unlink = Symbol('_unlink');
// /* Incoming: LinkedList. (ConstructorElementImpl @ dart:collection/linked_list.dart), LinkedList.addFirst (MethodElementImpl @ dart:collection/linked_list.dart), LinkedList.remove (MethodElementImpl @ dart:collection/linked_list.dart), LinkedList.iterator (FieldElementImpl @ dart:collection/linked_list.dart), LinkedList.clear (MethodElementImpl @ dart:collection/linked_list.dart), LinkedList.first (FieldElementImpl @ dart:collection/linked_list.dart), LinkedList.last (FieldElementImpl @ dart:collection/linked_list.dart), LinkedList.single (FieldElementImpl @ dart:collection/linked_list.dart), LinkedList.forEach (MethodElementImpl @ dart:collection/linked_list.dart), LinkedList._insertAfter (MethodElementImpl @ dart:collection/linked_list.dart), LinkedList._unlink (MethodElementImpl @ dart:collection/linked_list.dart), _LinkedListIterator._list (FieldElementImpl @ dart:collection/linked_list.dart), _LinkedListIterator. (ConstructorElementImpl @ dart:collection/linked_list.dart), _LinkedListIterator.moveNext (MethodElementImpl @ dart:collection/linked_list.dart), LinkedListEntry._list (FieldElementImpl @ dart:collection/linked_list.dart), LinkedListEntry.list (FieldElementImpl @ dart:collection/linked_list.dart), LinkedListEntry.unlink (MethodElementImpl @ dart:collection/linked_list.dart), LinkedListEntry.next (FieldElementImpl @ dart:collection/linked_list.dart), LinkedListEntry.previous (FieldElementImpl @ dart:collection/linked_list.dart), LinkedListEntry.insertAfter (MethodElementImpl @ dart:collection/linked_list.dart), LinkedListEntry.insertBefore (MethodElementImpl @ dart:collection/linked_list.dart) */
const LinkedList$ = dart.generic(function(E) {
  class LinkedList extends IterableBase$(E) {
    LinkedList() {
      this[_modificationCount] = 0;
      this[_length] = 0;
      this[_next] = null;
      this[_previous] = null;
      super.IterableBase();
      this[_next] = this[_previous] = this;
    }
    add(entry) {
      dart.as(entry, E);
      this[_insertAfter](this[_previous], entry);
    }
    remove(entry) {
      dart.as(entry, E);
      if (!dart.equals(entry[_list], this)) return false;
      this[_unlink](entry);
      return true;
    }
    get iterator() {
      return new (_LinkedListIterator$(E))(this);
    }
    get length() {
      return this[_length];
    }
    clear() {
      this[_modificationCount] = dart.notNull(this[_modificationCount]) + 1;
      let next = this[_next];
      while (!dart.notNull(core.identical(next, this))) {
        let entry = dart.as(next, E);
        next = entry[_next];
        entry[_next] = entry[_previous] = entry[_list] = null;
      }
      this[_next] = this[_previous] = this;
      this[_length] = 0;
    }
    [_insertAfter](entry, newEntry) {
      dart.as(newEntry, E);
      if (newEntry.list != null) {
        dart.throw(new core.StateError('LinkedListEntry is already in a LinkedList'));
      }
      this[_modificationCount] = dart.notNull(this[_modificationCount]) + 1;
      newEntry[_list] = this;
      let predecessor = entry;
      let successor = entry[_next];
      successor[_previous] = newEntry;
      newEntry[_previous] = predecessor;
      newEntry[_next] = successor;
      predecessor[_next] = newEntry;
      this[_length] = dart.notNull(this[_length]) + 1;
    }
    [_unlink](entry) {
      dart.as(entry, LinkedListEntry$(E));
      this[_modificationCount] = dart.notNull(this[_modificationCount]) + 1;
      entry[_next][_previous] = entry[_previous];
      entry[_previous][_next] = entry[_next];
      this[_length] = dart.notNull(this[_length]) - 1;
      entry[_list] = entry[_next] = entry[_previous] = null;
    }
  }
  LinkedList[dart.implements] = () => [_LinkedListLink];
  dart.setSignature(LinkedList, {
    constructors: () => ({LinkedList: [LinkedList$(E), []]}),
    methods: () => ({
      add: [dart.void, [E]],
      remove: [core.bool, [E]],
      clear: [dart.void, []],
      [_insertAfter]: [dart.void, [_LinkedListLink, E]],
      [_unlink]: [dart.void, [LinkedListEntry$(E)]]
    })
  });
  dart.defineExtensionMembers(LinkedList, ['iterator', 'length']);
  return LinkedList;
});
let LinkedList = LinkedList$();
const _current = Symbol('_current');
// /* Incoming: LinkedList.iterator (FieldElementImpl @ dart:collection/linked_list.dart), _LinkedListIterator. (ConstructorElementImpl @ dart:collection/linked_list.dart), _LinkedListIterator.moveNext (MethodElementImpl @ dart:collection/linked_list.dart) */
const _LinkedListIterator$ = dart.generic(function(E) {
  class _LinkedListIterator extends core.Object {
    _LinkedListIterator(list) {
      this[_list] = list;
      this[_modificationCount] = list[_modificationCount];
      this[_next] = list[_next];
      this[_current] = null;
    }
    moveNext() {
      if (dart.notNull(core.identical(this[_next], this[_list]))) {
        this[_current] = null;
        return false;
      }
      if (this[_modificationCount] != this[_list][_modificationCount]) {
        dart.throw(new core.ConcurrentModificationError(this));
      }
      this[_current] = dart.as(this[_next], E);
      this[_next] = this[_next][_next];
      return true;
    }
  }
  _LinkedListIterator[dart.implements] = () => [core.Iterator$(E)];
  dart.setSignature(_LinkedListIterator, {
    constructors: () => ({_LinkedListIterator: [_LinkedListIterator$(E), [LinkedList$(E)]]}),
    methods: () => ({moveNext: [core.bool, []]})
  });
  return _LinkedListIterator;
});
let _LinkedListIterator = _LinkedListIterator$();
// /* Incoming: LinkedList (ClassElementImpl @ dart:collection/linked_list.dart), LinkedList._next (FieldElementImpl @ dart:collection/linked_list.dart), LinkedList._previous (FieldElementImpl @ dart:collection/linked_list.dart), LinkedList. (ConstructorElementImpl @ dart:collection/linked_list.dart), LinkedList.add (MethodElementImpl @ dart:collection/linked_list.dart), LinkedList.addAll (MethodElementImpl @ dart:collection/linked_list.dart), next (LocalVariableElementImpl @ dart:collection/linked_list.dart), LinkedList.clear (MethodElementImpl @ dart:collection/linked_list.dart), entry (LocalVariableElementImpl @ dart:collection/linked_list.dart), LinkedList.first (FieldElementImpl @ dart:collection/linked_list.dart), LinkedList.last (FieldElementImpl @ dart:collection/linked_list.dart), LinkedList.single (FieldElementImpl @ dart:collection/linked_list.dart), current (LocalVariableElementImpl @ dart:collection/linked_list.dart), LinkedList.forEach (MethodElementImpl @ dart:collection/linked_list.dart), LinkedList._insertAfter (MethodElementImpl @ dart:collection/linked_list.dart), predecessor (LocalVariableElementImpl @ dart:collection/linked_list.dart), successor (LocalVariableElementImpl @ dart:collection/linked_list.dart), LinkedList._unlink (MethodElementImpl @ dart:collection/linked_list.dart), _LinkedListIterator._next (FieldElementImpl @ dart:collection/linked_list.dart), _LinkedListIterator. (ConstructorElementImpl @ dart:collection/linked_list.dart), _LinkedListIterator.moveNext (MethodElementImpl @ dart:collection/linked_list.dart), _LinkedListLink._next (FieldElementImpl @ dart:collection/linked_list.dart), _LinkedListLink._previous (FieldElementImpl @ dart:collection/linked_list.dart), LinkedListEntry (ClassElementImpl @ dart:collection/linked_list.dart), LinkedListEntry._next (FieldElementImpl @ dart:collection/linked_list.dart), LinkedListEntry._previous (FieldElementImpl @ dart:collection/linked_list.dart), LinkedListEntry.next (FieldElementImpl @ dart:collection/linked_list.dart), result (LocalVariableElementImpl @ dart:collection/linked_list.dart), LinkedListEntry.previous (FieldElementImpl @ dart:collection/linked_list.dart), LinkedListEntry.insertBefore (MethodElementImpl @ dart:collection/linked_list.dart) */
class _LinkedListLink extends core.Object {
  _LinkedListLink() {
    this[_next] = null;
    this[_previous] = null;
  }
}
// /* Incoming: LinkedList (ClassElementImpl @ dart:collection/linked_list.dart), LinkedList._unlink (MethodElementImpl @ dart:collection/linked_list.dart), _LinkedListIterator (ClassElementImpl @ dart:collection/linked_list.dart), LinkedListEntry.unlink (MethodElementImpl @ dart:collection/linked_list.dart), LinkedListEntry.insertAfter (MethodElementImpl @ dart:collection/linked_list.dart) */
const LinkedListEntry$ = dart.generic(function(E) {
  class LinkedListEntry extends core.Object {
    LinkedListEntry() {
      this[_next] = null;
      this[_previous] = null;
    }
  }
  LinkedListEntry[dart.implements] = () => [_LinkedListLink];
  return LinkedListEntry;
});
let LinkedListEntry = LinkedListEntry$();
// /* Incoming: _CodeUnits (ClassElementImpl @ dart:_interceptors/js_string.dart), NativeFloat32x4List (ClassElementImpl @ dart:_native_typed_data), NativeInt32x4List (ClassElementImpl @ dart:_native_typed_data), NativeFloat64x2List (ClassElementImpl @ dart:_native_typed_data), NativeTypedArrayOfDouble (ClassElementImpl @ dart:_native_typed_data), NativeTypedArrayOfInt (ClassElementImpl @ dart:_native_typed_data), NativeFloat32List (ClassElementImpl @ dart:_native_typed_data), NativeFloat64List (ClassElementImpl @ dart:_native_typed_data), NativeInt16List (ClassElementImpl @ dart:_native_typed_data), NativeInt32List (ClassElementImpl @ dart:_native_typed_data), NativeInt8List (ClassElementImpl @ dart:_native_typed_data), NativeUint16List (ClassElementImpl @ dart:_native_typed_data), NativeUint32List (ClassElementImpl @ dart:_native_typed_data), NativeUint8ClampedList (ClassElementImpl @ dart:_native_typed_data), NativeUint8List (ClassElementImpl @ dart:_native_typed_data), FixedLengthListBase (ClassElementImpl @ dart:_internal/list.dart), UnmodifiableListBase (ClassElementImpl @ dart:_internal/list.dart), UnmodifiableListView (ClassElementImpl @ dart:collection/collections.dart), ListBase (ClassElementImpl @ dart:collection/list.dart), ListMixin.iterator (FieldElementImpl @ dart:collection/list.dart), ListMixin.elementAt (MethodElementImpl @ dart:collection/list.dart), length (LocalVariableElementImpl @ dart:collection/list.dart), ListMixin.forEach (MethodElementImpl @ dart:collection/list.dart), ListMixin.first (FieldElementImpl @ dart:collection/list.dart), ListMixin.last (FieldElementImpl @ dart:collection/list.dart), ListMixin.single (FieldElementImpl @ dart:collection/list.dart), length (LocalVariableElementImpl @ dart:collection/list.dart), ListMixin.contains (MethodElementImpl @ dart:collection/list.dart), length (LocalVariableElementImpl @ dart:collection/list.dart), ListMixin.every (MethodElementImpl @ dart:collection/list.dart), length (LocalVariableElementImpl @ dart:collection/list.dart), ListMixin.any (MethodElementImpl @ dart:collection/list.dart), length (LocalVariableElementImpl @ dart:collection/list.dart), element (LocalVariableElementImpl @ dart:collection/list.dart), ListMixin.firstWhere (MethodElementImpl @ dart:collection/list.dart), length (LocalVariableElementImpl @ dart:collection/list.dart), element (LocalVariableElementImpl @ dart:collection/list.dart), ListMixin.lastWhere (MethodElementImpl @ dart:collection/list.dart), length (LocalVariableElementImpl @ dart:collection/list.dart), element (LocalVariableElementImpl @ dart:collection/list.dart), ListMixin.singleWhere (MethodElementImpl @ dart:collection/list.dart), buffer (LocalVariableElementImpl @ dart:collection/list.dart), ListMixin.where (MethodElementImpl @ dart:collection/list.dart), ListMixin.map (MethodElementImpl @ dart:collection/list.dart), ListMixin.expand (MethodElementImpl @ dart:collection/list.dart), length (LocalVariableElementImpl @ dart:collection/list.dart), value (LocalVariableElementImpl @ dart:collection/list.dart), ListMixin.reduce (MethodElementImpl @ dart:collection/list.dart), length (LocalVariableElementImpl @ dart:collection/list.dart), ListMixin.fold (MethodElementImpl @ dart:collection/list.dart), ListMixin.skip (MethodElementImpl @ dart:collection/list.dart), ListMixin.skipWhile (MethodElementImpl @ dart:collection/list.dart), ListMixin.take (MethodElementImpl @ dart:collection/list.dart), ListMixin.takeWhile (MethodElementImpl @ dart:collection/list.dart), ListMixin.toList (MethodElementImpl @ dart:collection/list.dart), ListMixin.toSet (MethodElementImpl @ dart:collection/list.dart), ListMixin.add (MethodElementImpl @ dart:collection/list.dart), ListMixin.addAll (MethodElementImpl @ dart:collection/list.dart), ListMixin.remove (MethodElementImpl @ dart:collection/list.dart), ListMixin.removeWhere (MethodElementImpl @ dart:collection/list.dart), ListMixin.retainWhere (MethodElementImpl @ dart:collection/list.dart), ListMixin.clear (MethodElementImpl @ dart:collection/list.dart), result (LocalVariableElementImpl @ dart:collection/list.dart), ListMixin.sort (MethodElementImpl @ dart:collection/list.dart), length (LocalVariableElementImpl @ dart:collection/list.dart), tmp (LocalVariableElementImpl @ dart:collection/list.dart), ListMixin.shuffle (MethodElementImpl @ dart:collection/list.dart), ListMixin.asMap (MethodElementImpl @ dart:collection/list.dart), listLength (LocalVariableElementImpl @ dart:collection/list.dart), ListMixin.sublist (MethodElementImpl @ dart:collection/list.dart), ListMixin.getRange (MethodElementImpl @ dart:collection/list.dart), ListMixin.removeRange (MethodElementImpl @ dart:collection/list.dart), ListMixin.fillRange (MethodElementImpl @ dart:collection/list.dart), ListMixin.setRange (MethodElementImpl @ dart:collection/list.dart), ListMixin.replaceRange (MethodElementImpl @ dart:collection/list.dart), newLength (LocalVariableElementImpl @ dart:collection/list.dart), newLength (LocalVariableElementImpl @ dart:collection/list.dart), ListMixin.indexOf (MethodElementImpl @ dart:collection/list.dart), ListMixin.lastIndexOf (MethodElementImpl @ dart:collection/list.dart), ListMixin.insert (MethodElementImpl @ dart:collection/list.dart), result (LocalVariableElementImpl @ dart:collection/list.dart), ListMixin.removeAt (MethodElementImpl @ dart:collection/list.dart), ListMixin.insertAll (MethodElementImpl @ dart:collection/list.dart), ListMixin.setAll (MethodElementImpl @ dart:collection/list.dart), ListMixin.reversed (FieldElementImpl @ dart:collection/list.dart), ListMixin.toString (MethodElementImpl @ dart:collection/list.dart) */
const ListMixin$ = dart.generic(function(E) {
  class ListMixin extends core.Object {
    get iterator() {
      return new (_internal.ListIterator$(E))(this);
    }
    [Symbol.iterator]() {
      return new dart.JsIterator(this.iterator);
    }
    get isEmpty() {
      return this[dartx.length] == 0;
    }
    get isNotEmpty() {
      return !dart.notNull(this.isEmpty);
    }
    contains(element) {
      let length = this.length;
      for (let i = 0; i < dart.notNull(this.length); i++) {
        if (dart.equals(this.get(i), element)) return true;
        if (length != this.length) {
          dart.throw(new core.ConcurrentModificationError(this));
        }
      }
      return false;
    }
    add(element) {
      dart.as(element, E);
      this.set((() => {
        let x = this.length;
        this.length = dart.notNull(x) + 1;
        return x;
      })(), element);
    }
    remove(element) {
      for (let i = 0; i < dart.notNull(this.length); i++) {
        if (dart.equals(this.get(i), element)) {
          this.setRange(i, dart.notNull(this.length) - 1, this, i + 1);
          this.length = dart.notNull(this.length) - 1;
          return true;
        }
      }
      return false;
    }
    clear() {
      this.length = 0;
    }
    setRange(start, end, iterable, skipCount) {
      dart.as(iterable, core.Iterable$(E));
      if (skipCount === void 0) skipCount = 0;
      core.RangeError.checkValidRange(start, end, this.length);
      let length = dart.notNull(end) - dart.notNull(start);
      if (length == 0) return;
      core.RangeError.checkNotNegative(skipCount, "skipCount");
      let otherList = null;
      let otherStart = null;
      if (dart.is(iterable, core.List)) {
        otherList = dart.as(iterable, core.List);
        otherStart = skipCount;
      } else {
        otherList = iterable[dartx.skip](skipCount)[dartx.toList]({growable: false});
        otherStart = 0;
      }
      if (dart.notNull(otherStart) + length > dart.notNull(otherList[dartx.length])) {
        dart.throw(_internal.IterableElementError.tooFew());
      }
      if (dart.notNull(otherStart) < dart.notNull(start)) {
        for (let i = length - 1; i >= 0; i--) {
          this.set(dart.notNull(start) + i, dart.as(otherList[dartx.get](dart.notNull(otherStart) + i), E));
        }
      } else {
        for (let i = 0; i < length; i++) {
          this.set(dart.notNull(start) + i, dart.as(otherList[dartx.get](dart.notNull(otherStart) + i), E));
        }
      }
    }
    indexOf(element, startIndex) {
      if (startIndex === void 0) startIndex = 0;
      if (dart.notNull(startIndex) >= dart.notNull(this.length)) {
        return -1;
      }
      if (dart.notNull(startIndex) < 0) {
        startIndex = 0;
      }
      for (let i = startIndex; dart.notNull(i) < dart.notNull(this.length); i = dart.notNull(i) + 1) {
        if (dart.equals(this.get(i), element)) {
          return i;
        }
      }
      return -1;
    }
    toString() {
      return IterableBase.iterableToFullString(this, '[', ']');
    }
  }
  ListMixin[dart.implements] = () => [core.List$(E)];
  dart.setSignature(ListMixin, {
    methods: () => ({
      contains: [core.bool, [core.Object]],
      add: [dart.void, [E]],
      remove: [core.bool, [core.Object]],
      clear: [dart.void, []],
      setRange: [dart.void, [core.int, core.int, core.Iterable$(E)], [core.int]],
      indexOf: [core.int, [core.Object], [core.int]]
    })
  });
  dart.defineExtensionMembers(ListMixin, [
    'contains',
    'add',
    'remove',
    'clear',
    'setRange',
    'indexOf',
    'iterator',
    'isEmpty',
    'isNotEmpty'
  ]);
  return ListMixin;
});
let ListMixin = ListMixin$();
// /* Incoming: JSArray.toString (MethodElementImpl @ dart:_interceptors/js_array.dart), _CodeUnits (ClassElementImpl @ dart:_interceptors/js_string.dart), FixedLengthListBase (ClassElementImpl @ dart:_internal/list.dart), UnmodifiableListBase (ClassElementImpl @ dart:_internal/list.dart), UnmodifiableListView (ClassElementImpl @ dart:collection/collections.dart) */
const ListBase$ = dart.generic(function(E) {
  class ListBase extends dart.mixin(core.Object, ListMixin$(E)) {
    static listToString(list) {
      return IterableBase.iterableToFullString(list, '[', ']');
    }
  }
  dart.setSignature(ListBase, {
    statics: () => ({listToString: [core.String, [core.List]]}),
    names: ['listToString']
  });
  return ListBase;
});
let ListBase = ListBase$();
const __CastType0 = dart.typedef('__CastType0', () => dart.functionType(core.int, [dart.dynamic, dart.dynamic]));
// /* Incoming: MapBase (ClassElementImpl @ dart:collection/maps.dart), MapMixin.forEach (MethodElementImpl @ dart:collection/maps.dart), MapMixin.addAll (MethodElementImpl @ dart:collection/maps.dart), MapMixin.containsValue (MethodElementImpl @ dart:collection/maps.dart), MapMixin.putIfAbsent (MethodElementImpl @ dart:collection/maps.dart), MapMixin.values (FieldElementImpl @ dart:collection/maps.dart), MapMixin.toString (MethodElementImpl @ dart:collection/maps.dart), UnmodifiableMapBase (ClassElementImpl @ dart:collection/maps.dart) */
const MapMixin$ = dart.generic(function(K, V) {
  class MapMixin extends core.Object {
    containsKey(key) {
      return this.keys[dartx.contains](key);
    }
    get length() {
      return this.keys[dartx.length];
    }
    get isNotEmpty() {
      return this.keys[dartx.isNotEmpty];
    }
    get values() {
      return new (_MapBaseValueIterable$(V))(this);
    }
    toString() {
      return Maps.mapToString(this);
    }
  }
  MapMixin[dart.implements] = () => [core.Map$(K, V)];
  dart.setSignature(MapMixin, {
    methods: () => ({containsKey: [core.bool, [core.Object]]})
  });
  return MapMixin;
});
let MapMixin = MapMixin$();
const _map = Symbol('_map');
// /* Incoming: MapMixin.values (FieldElementImpl @ dart:collection/maps.dart), _MapBaseValueIterable. (ConstructorElementImpl @ dart:collection/maps.dart) */
const _MapBaseValueIterable$ = dart.generic(function(V) {
  class _MapBaseValueIterable extends IterableBase$(V) {
    _MapBaseValueIterable(map) {
      this[_map] = map;
      super.IterableBase();
    }
    get length() {
      return this[_map].length;
    }
    get isNotEmpty() {
      return this[_map].isNotEmpty;
    }
    get iterator() {
      return new (_MapBaseValueIterator$(V))(this[_map]);
    }
  }
  _MapBaseValueIterable[dart.implements] = () => [_internal.EfficientLength];
  dart.setSignature(_MapBaseValueIterable, {
    constructors: () => ({_MapBaseValueIterable: [_MapBaseValueIterable$(V), [core.Map]]})
  });
  dart.defineExtensionMembers(_MapBaseValueIterable, ['length', 'isNotEmpty', 'iterator']);
  return _MapBaseValueIterable;
});
let _MapBaseValueIterable = _MapBaseValueIterable$();
const _keys = Symbol('_keys');
// /* Incoming: _MapBaseValueIterable.iterator (FieldElementImpl @ dart:collection/maps.dart), _MapBaseValueIterator. (ConstructorElementImpl @ dart:collection/maps.dart) */
const _MapBaseValueIterator$ = dart.generic(function(V) {
  class _MapBaseValueIterator extends core.Object {
    _MapBaseValueIterator(map) {
      this[_map] = map;
      this[_keys] = map.keys[dartx.iterator];
      this[_current] = null;
    }
    moveNext() {
      if (dart.notNull(this[_keys].moveNext())) {
        this[_current] = dart.as(this[_map].get(this[_keys].current), V);
        return true;
      }
      this[_current] = null;
      return false;
    }
  }
  _MapBaseValueIterator[dart.implements] = () => [core.Iterator$(V)];
  dart.setSignature(_MapBaseValueIterator, {
    constructors: () => ({_MapBaseValueIterator: [_MapBaseValueIterator$(V), [core.Map]]}),
    methods: () => ({moveNext: [core.bool, []]})
  });
  return _MapBaseValueIterator;
});
let _MapBaseValueIterator = _MapBaseValueIterator$();
// /* Incoming: ListMapView.toString (MethodElementImpl @ dart:_internal/list.dart), _CustomHashMap.toString (MethodElementImpl @ dart:collection), _LinkedHashMap.toString (MethodElementImpl @ dart:collection), HashMap.fromIterable (ConstructorElementImpl @ dart:collection/hash_map.dart), HashMap.fromIterables (ConstructorElementImpl @ dart:collection/hash_map.dart), LinkedHashMap.fromIterable (ConstructorElementImpl @ dart:collection/linked_hash_map.dart), LinkedHashMap.fromIterables (ConstructorElementImpl @ dart:collection/linked_hash_map.dart), MapMixin.toString (MethodElementImpl @ dart:collection/maps.dart), SplayTreeMap.fromIterable (ConstructorElementImpl @ dart:collection/splay_tree.dart), SplayTreeMap.fromIterables (ConstructorElementImpl @ dart:collection/splay_tree.dart), SplayTreeMap.toString (MethodElementImpl @ dart:collection/splay_tree.dart), _JsonMap.toString (MethodElementImpl @ dart:convert) */
class Maps extends core.Object {
  static containsKey(map, key) {
    for (let k of map.keys) {
      if (dart.equals(key, k)) {
        return true;
      }
    }
    return false;
  }
  static clear(map) {
    for (let k of map.keys[dartx.toList]()) {
      map.remove(k);
    }
  }
  static length(map) {
    return map.keys[dartx.length];
  }
  static isNotEmpty(map) {
    return map.keys[dartx.isNotEmpty];
  }
  static mapToString(m) {
    if (dart.notNull(IterableBase._isToStringVisiting(m))) {
      return '{...}';
    }
    let result = new core.StringBuffer();
    try {
      IterableBase._toStringVisiting[dartx.add](m);
      result.write('{');
      let first = true;
      m.forEach(dart.fn((k, v) => {
        if (!first) {
          result.write(', ');
        }
        first = false;
        result.write(k);
        result.write(': ');
        result.write(v);
      }, dart.void, [dart.dynamic, dart.dynamic]));
      result.write('}');
    } finally {
      dart.assert(core.identical(IterableBase._toStringVisiting[dartx.last], m));
      IterableBase._toStringVisiting[dartx.removeLast]();
    }
    return dart.toString(result);
  }
}
dart.setSignature(Maps, {
  statics: () => ({
    containsKey: [core.bool, [core.Map, dart.dynamic]],
    clear: [dart.dynamic, [core.Map]],
    length: [core.int, [core.Map]],
    isNotEmpty: [core.bool, [core.Map]],
    mapToString: [core.String, [core.Map]]
  }),
  names: ['containsKey', 'clear', 'length', 'isNotEmpty', 'mapToString']
});
// /* Incoming: _IsolateContext.handlePing (MethodElementImpl @ dart:_isolate_helper), _IsolateContext.handleKill (MethodElementImpl @ dart:_isolate_helper), _EventLoop.events (ConstFieldElementImpl @ dart:_isolate_helper), _EventLoop.enqueue (MethodElementImpl @ dart:_isolate_helper), _EventLoop.prequeue (MethodElementImpl @ dart:_isolate_helper), _EventLoop.dequeue (MethodElementImpl @ dart:_isolate_helper), Queue. (ConstructorElementImpl @ dart:collection/queue.dart), Queue.from (ConstructorElementImpl @ dart:collection/queue.dart), DoubleLinkedQueue (ClassElementImpl @ dart:collection/queue.dart), list (LocalVariableElementImpl @ dart:collection/queue.dart), ListQueue (ClassElementImpl @ dart:collection/queue.dart) */
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
const _element = Symbol('_element');
const _link = Symbol('_link');
// /* Incoming: DoubleLinkedQueueEntry._previous (FieldElementImpl @ dart:collection/queue.dart), DoubleLinkedQueueEntry._next (FieldElementImpl @ dart:collection/queue.dart), DoubleLinkedQueueEntry. (ConstructorElementImpl @ dart:collection/queue.dart), DoubleLinkedQueueEntry._link (MethodElementImpl @ dart:collection/queue.dart), DoubleLinkedQueueEntry.append (MethodElementImpl @ dart:collection/queue.dart), DoubleLinkedQueueEntry.prepend (MethodElementImpl @ dart:collection/queue.dart), DoubleLinkedQueueEntry.remove (MethodElementImpl @ dart:collection/queue.dart), DoubleLinkedQueueEntry._asNonSentinelEntry (MethodElementImpl @ dart:collection/queue.dart), DoubleLinkedQueueEntry.previousEntry (MethodElementImpl @ dart:collection/queue.dart), DoubleLinkedQueueEntry.nextEntry (MethodElementImpl @ dart:collection/queue.dart), _DoubleLinkedQueueEntrySentinel (ClassElementImpl @ dart:collection/queue.dart), _DoubleLinkedQueueEntrySentinel._asNonSentinelEntry (MethodElementImpl @ dart:collection/queue.dart), result (LocalVariableElementImpl @ dart:collection/queue.dart), result (LocalVariableElementImpl @ dart:collection/queue.dart), entry (LocalVariableElementImpl @ dart:collection/queue.dart), DoubleLinkedQueue.remove (MethodElementImpl @ dart:collection/queue.dart), entry (LocalVariableElementImpl @ dart:collection/queue.dart), DoubleLinkedQueue._filter (MethodElementImpl @ dart:collection/queue.dart), next (LocalVariableElementImpl @ dart:collection/queue.dart), DoubleLinkedQueue.first (FieldElementImpl @ dart:collection/queue.dart), DoubleLinkedQueue.last (FieldElementImpl @ dart:collection/queue.dart), DoubleLinkedQueue.single (FieldElementImpl @ dart:collection/queue.dart), DoubleLinkedQueue.lastEntry (MethodElementImpl @ dart:collection/queue.dart), DoubleLinkedQueue.firstEntry (MethodElementImpl @ dart:collection/queue.dart), DoubleLinkedQueue.isEmpty (FieldElementImpl @ dart:collection/queue.dart), DoubleLinkedQueue.clear (MethodElementImpl @ dart:collection/queue.dart), DoubleLinkedQueue.forEachEntry (MethodElementImpl @ dart:collection/queue.dart), entry (LocalVariableElementImpl @ dart:collection/queue.dart), nextEntry (LocalVariableElementImpl @ dart:collection/queue.dart), _DoubleLinkedQueueIterator._nextEntry (FieldElementImpl @ dart:collection/queue.dart), _DoubleLinkedQueueIterator. (ConstructorElementImpl @ dart:collection/queue.dart), _DoubleLinkedQueueIterator.moveNext (MethodElementImpl @ dart:collection/queue.dart) */
const DoubleLinkedQueueEntry$ = dart.generic(function(E) {
  class DoubleLinkedQueueEntry extends core.Object {
    DoubleLinkedQueueEntry(e) {
      this[_element] = e;
      this[_previous] = null;
      this[_next] = null;
    }
    [_link](previous, next) {
      dart.as(previous, DoubleLinkedQueueEntry$(E));
      dart.as(next, DoubleLinkedQueueEntry$(E));
      this[_next] = next;
      this[_previous] = previous;
      previous[_next] = this;
      next[_previous] = this;
    }
    prepend(e) {
      dart.as(e, E);
      new (DoubleLinkedQueueEntry$(E))(e)[_link](this[_previous], this);
    }
    remove() {
      this[_previous][_next] = this[_next];
      this[_next][_previous] = this[_previous];
      this[_next] = null;
      this[_previous] = null;
      return this[_element];
    }
  }
  dart.setSignature(DoubleLinkedQueueEntry, {
    constructors: () => ({DoubleLinkedQueueEntry: [DoubleLinkedQueueEntry$(E), [E]]}),
    methods: () => ({
      [_link]: [dart.void, [DoubleLinkedQueueEntry$(E), DoubleLinkedQueueEntry$(E)]],
      prepend: [dart.void, [E]],
      remove: [E, []]
    })
  });
  return DoubleLinkedQueueEntry;
});
let DoubleLinkedQueueEntry = DoubleLinkedQueueEntry$();
// /* Incoming: _DoubleLinkedQueueEntrySentinel. (ConstructorElementImpl @ dart:collection/queue.dart), DoubleLinkedQueue._sentinel (FieldElementImpl @ dart:collection/queue.dart), DoubleLinkedQueue. (ConstructorElementImpl @ dart:collection/queue.dart), DoubleLinkedQueue.addLast (MethodElementImpl @ dart:collection/queue.dart), DoubleLinkedQueue.addFirst (MethodElementImpl @ dart:collection/queue.dart), DoubleLinkedQueue.add (MethodElementImpl @ dart:collection/queue.dart), DoubleLinkedQueue.addAll (MethodElementImpl @ dart:collection/queue.dart), result (LocalVariableElementImpl @ dart:collection/queue.dart), result (LocalVariableElementImpl @ dart:collection/queue.dart), entry (LocalVariableElementImpl @ dart:collection/queue.dart), DoubleLinkedQueue.remove (MethodElementImpl @ dart:collection/queue.dart), entry (LocalVariableElementImpl @ dart:collection/queue.dart), DoubleLinkedQueue._filter (MethodElementImpl @ dart:collection/queue.dart), DoubleLinkedQueue.first (FieldElementImpl @ dart:collection/queue.dart), DoubleLinkedQueue.last (FieldElementImpl @ dart:collection/queue.dart), DoubleLinkedQueue.single (FieldElementImpl @ dart:collection/queue.dart), DoubleLinkedQueue.lastEntry (MethodElementImpl @ dart:collection/queue.dart), DoubleLinkedQueue.firstEntry (MethodElementImpl @ dart:collection/queue.dart), DoubleLinkedQueue.isEmpty (FieldElementImpl @ dart:collection/queue.dart), DoubleLinkedQueue.clear (MethodElementImpl @ dart:collection/queue.dart), entry (LocalVariableElementImpl @ dart:collection/queue.dart), DoubleLinkedQueue.forEachEntry (MethodElementImpl @ dart:collection/queue.dart), DoubleLinkedQueue.iterator (FieldElementImpl @ dart:collection/queue.dart), _DoubleLinkedQueueIterator._sentinel (FieldElementImpl @ dart:collection/queue.dart), _DoubleLinkedQueueIterator. (ConstructorElementImpl @ dart:collection/queue.dart), _DoubleLinkedQueueIterator.moveNext (MethodElementImpl @ dart:collection/queue.dart) */
const _DoubleLinkedQueueEntrySentinel$ = dart.generic(function(E) {
  class _DoubleLinkedQueueEntrySentinel extends DoubleLinkedQueueEntry$(E) {
    _DoubleLinkedQueueEntrySentinel() {
      super.DoubleLinkedQueueEntry(null);
      this[_link](this, this);
    }
    remove() {
      dart.throw(_internal.IterableElementError.noElement());
    }
  }
  dart.setSignature(_DoubleLinkedQueueEntrySentinel, {
    constructors: () => ({_DoubleLinkedQueueEntrySentinel: [_DoubleLinkedQueueEntrySentinel$(E), []]}),
    methods: () => ({remove: [E, []]})
  });
  return _DoubleLinkedQueueEntrySentinel;
});
let _DoubleLinkedQueueEntrySentinel = _DoubleLinkedQueueEntrySentinel$();
const _sentinel = Symbol('_sentinel');
const _elementCount = Symbol('_elementCount');
// /* Incoming: DoubleLinkedQueue. (ConstructorElementImpl @ dart:collection/queue.dart), DoubleLinkedQueue.from (ConstructorElementImpl @ dart:collection/queue.dart), list (LocalVariableElementImpl @ dart:collection/queue.dart), DoubleLinkedQueue.toString (MethodElementImpl @ dart:collection/queue.dart) */
const DoubleLinkedQueue$ = dart.generic(function(E) {
  class DoubleLinkedQueue extends IterableBase$(E) {
    DoubleLinkedQueue() {
      this[_sentinel] = null;
      this[_elementCount] = 0;
      super.IterableBase();
      this[_sentinel] = new (_DoubleLinkedQueueEntrySentinel$(E))();
    }
    get length() {
      return this[_elementCount];
    }
    addLast(value) {
      dart.as(value, E);
      this[_sentinel].prepend(value);
      this[_elementCount] = dart.notNull(this[_elementCount]) + 1;
    }
    add(value) {
      dart.as(value, E);
      this[_sentinel].prepend(value);
      this[_elementCount] = dart.notNull(this[_elementCount]) + 1;
    }
    removeFirst() {
      let result = this[_sentinel][_next].remove();
      this[_elementCount] = dart.notNull(this[_elementCount]) - 1;
      return result;
    }
    remove(o) {
      let entry = this[_sentinel][_next];
      while (!dart.notNull(core.identical(entry, this[_sentinel]))) {
        if (dart.equals(entry.element, o)) {
          entry.remove();
          this[_elementCount] = dart.notNull(this[_elementCount]) - 1;
          return true;
        }
        entry = entry[_next];
      }
      return false;
    }
    clear() {
      this[_sentinel][_next] = this[_sentinel];
      this[_sentinel][_previous] = this[_sentinel];
      this[_elementCount] = 0;
    }
    get iterator() {
      return new (_DoubleLinkedQueueIterator$(E))(this[_sentinel]);
    }
    toString() {
      return IterableBase.iterableToFullString(this, '{', '}');
    }
  }
  DoubleLinkedQueue[dart.implements] = () => [Queue$(E)];
  dart.setSignature(DoubleLinkedQueue, {
    constructors: () => ({DoubleLinkedQueue: [DoubleLinkedQueue$(E), []]}),
    methods: () => ({
      addLast: [dart.void, [E]],
      add: [dart.void, [E]],
      removeFirst: [E, []],
      remove: [core.bool, [core.Object]],
      clear: [dart.void, []]
    })
  });
  dart.defineExtensionMembers(DoubleLinkedQueue, ['length', 'iterator']);
  return DoubleLinkedQueue;
});
let DoubleLinkedQueue = DoubleLinkedQueue$();
const _nextEntry = Symbol('_nextEntry');
// /* Incoming: DoubleLinkedQueue.iterator (FieldElementImpl @ dart:collection/queue.dart), _DoubleLinkedQueueIterator. (ConstructorElementImpl @ dart:collection/queue.dart) */
const _DoubleLinkedQueueIterator$ = dart.generic(function(E) {
  class _DoubleLinkedQueueIterator extends core.Object {
    _DoubleLinkedQueueIterator(sentinel) {
      this[_sentinel] = sentinel;
      this[_nextEntry] = sentinel[_next];
      this[_current] = null;
    }
    moveNext() {
      if (!dart.notNull(core.identical(this[_nextEntry], this[_sentinel]))) {
        this[_current] = this[_nextEntry][_element];
        this[_nextEntry] = this[_nextEntry][_next];
        return true;
      }
      this[_current] = null;
      this[_nextEntry] = this[_sentinel] = null;
      return false;
    }
  }
  _DoubleLinkedQueueIterator[dart.implements] = () => [core.Iterator$(E)];
  dart.setSignature(_DoubleLinkedQueueIterator, {
    constructors: () => ({_DoubleLinkedQueueIterator: [_DoubleLinkedQueueIterator$(E), [_DoubleLinkedQueueEntrySentinel$(E)]]}),
    methods: () => ({moveNext: [core.bool, []]})
  });
  return _DoubleLinkedQueueIterator;
});
let _DoubleLinkedQueueIterator = _DoubleLinkedQueueIterator$();
const _head = Symbol('_head');
const _tail = Symbol('_tail');
const _table = Symbol('_table');
const _add = Symbol('_add');
const _remove = Symbol('_remove');
const _checkModification = Symbol('_checkModification');
const _grow = Symbol('_grow');
// /* Incoming: Queue. (ConstructorElementImpl @ dart:collection/queue.dart), Queue.from (ConstructorElementImpl @ dart:collection/queue.dart), ListQueue. (ConstructorElementImpl @ dart:collection/queue.dart), ListQueue.from (ConstructorElementImpl @ dart:collection/queue.dart), queue (LocalVariableElementImpl @ dart:collection/queue.dart), result (LocalVariableElementImpl @ dart:collection/queue.dart), ListQueue.iterator (FieldElementImpl @ dart:collection/queue.dart), ListQueue.elementAt (MethodElementImpl @ dart:collection/queue.dart), length (LocalVariableElementImpl @ dart:collection/queue.dart), ListQueue.toString (MethodElementImpl @ dart:collection/queue.dart), ListQueue._checkModification (MethodElementImpl @ dart:collection/queue.dart), _ListQueueIterator._queue (FieldElementImpl @ dart:collection/queue.dart), _ListQueueIterator. (ConstructorElementImpl @ dart:collection/queue.dart), _ListQueueIterator.moveNext (MethodElementImpl @ dart:collection/queue.dart) */
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
    get iterator() {
      return new (_ListQueueIterator$(E))(this);
    }
    get length() {
      return dart.notNull(this[_tail]) - dart.notNull(this[_head]) & dart.notNull(this[_table][dartx.length]) - 1;
    }
    add(element) {
      dart.as(element, E);
      this[_add](element);
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
    removeFirst() {
      if (this[_head] == this[_tail]) dart.throw(_internal.IterableElementError.noElement());
      this[_modificationCount] = dart.notNull(this[_modificationCount]) + 1;
      let result = this[_table][dartx.get](this[_head]);
      this[_table][dartx.set](this[_head], null);
      this[_head] = dart.notNull(this[_head]) + 1 & dart.notNull(this[_table][dartx.length]) - 1;
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
  }
  ListQueue[dart.implements] = () => [Queue$(E)];
  dart.setSignature(ListQueue, {
    constructors: () => ({ListQueue: [ListQueue$(E), [], [core.int]]}),
    methods: () => ({
      add: [dart.void, [E]],
      remove: [core.bool, [core.Object]],
      clear: [dart.void, []],
      addLast: [dart.void, [E]],
      removeFirst: [E, []],
      [_checkModification]: [dart.void, [core.int]],
      [_add]: [dart.void, [E]],
      [_remove]: [core.int, [core.int]],
      [_grow]: [dart.void, []]
    }),
    statics: () => ({
      _isPowerOf2: [core.bool, [core.int]],
      _nextPowerOf2: [core.int, [core.int]]
    }),
    names: ['_isPowerOf2', '_nextPowerOf2']
  });
  dart.defineExtensionMembers(ListQueue, ['iterator', 'length']);
  ListQueue._INITIAL_CAPACITY = 8;
  return ListQueue;
});
let ListQueue = ListQueue$();
const _queue = Symbol('_queue');
const _end = Symbol('_end');
const _position = Symbol('_position');
// /* Incoming: ListQueue.iterator (FieldElementImpl @ dart:collection/queue.dart), _ListQueueIterator. (ConstructorElementImpl @ dart:collection/queue.dart) */
const _ListQueueIterator$ = dart.generic(function(E) {
  class _ListQueueIterator extends core.Object {
    _ListQueueIterator(queue) {
      this[_queue] = queue;
      this[_end] = queue[_tail];
      this[_modificationCount] = queue[_modificationCount];
      this[_position] = queue[_head];
      this[_current] = null;
    }
    moveNext() {
      this[_queue][_checkModification](this[_modificationCount]);
      if (this[_position] == this[_end]) {
        this[_current] = null;
        return false;
      }
      this[_current] = dart.as(this[_queue][_table][dartx.get](this[_position]), E);
      this[_position] = dart.notNull(this[_position]) + 1 & dart.notNull(this[_queue][_table][dartx.length]) - 1;
      return true;
    }
  }
  _ListQueueIterator[dart.implements] = () => [core.Iterator$(E)];
  dart.setSignature(_ListQueueIterator, {
    constructors: () => ({_ListQueueIterator: [_ListQueueIterator$(E), [ListQueue]]}),
    methods: () => ({moveNext: [core.bool, []]})
  });
  return _ListQueueIterator;
});
let _ListQueueIterator = _ListQueueIterator$();
const _Predicate$ = dart.generic(function(T) {
  const _Predicate = dart.typedef('_Predicate', () => dart.functionType(core.bool, [T]));
  return _Predicate;
});
let _Predicate = _Predicate$();
// /* Incoming: _SplayTreeNode.left (FieldElementImpl @ dart:collection/splay_tree.dart), _SplayTreeNode.right (FieldElementImpl @ dart:collection/splay_tree.dart), _SplayTreeNode. (ConstructorElementImpl @ dart:collection/splay_tree.dart), _SplayTreeMapNode (ClassElementImpl @ dart:collection/splay_tree.dart), _SplayTree._root (FieldElementImpl @ dart:collection/splay_tree.dart), _SplayTree._dummy (FieldElementImpl @ dart:collection/splay_tree.dart), _SplayTree._splay (MethodElementImpl @ dart:collection/splay_tree.dart), left (LocalVariableElementImpl @ dart:collection/splay_tree.dart), right (LocalVariableElementImpl @ dart:collection/splay_tree.dart), current (LocalVariableElementImpl @ dart:collection/splay_tree.dart), tmp (LocalVariableElementImpl @ dart:collection/splay_tree.dart), tmp (LocalVariableElementImpl @ dart:collection/splay_tree.dart), _SplayTree._splayMin (MethodElementImpl @ dart:collection/splay_tree.dart), current (LocalVariableElementImpl @ dart:collection/splay_tree.dart), left (LocalVariableElementImpl @ dart:collection/splay_tree.dart), _SplayTree._splayMax (MethodElementImpl @ dart:collection/splay_tree.dart), current (LocalVariableElementImpl @ dart:collection/splay_tree.dart), right (LocalVariableElementImpl @ dart:collection/splay_tree.dart), _SplayTree._remove (MethodElementImpl @ dart:collection/splay_tree.dart), result (LocalVariableElementImpl @ dart:collection/splay_tree.dart), right (LocalVariableElementImpl @ dart:collection/splay_tree.dart), _SplayTree._addNewRoot (MethodElementImpl @ dart:collection/splay_tree.dart), _SplayTree._first (FieldElementImpl @ dart:collection/splay_tree.dart), _SplayTree._last (FieldElementImpl @ dart:collection/splay_tree.dart), _SplayTree._clear (MethodElementImpl @ dart:collection/splay_tree.dart), SplayTreeMap.[] (MethodElementImpl @ dart:collection/splay_tree.dart), mapRoot (LocalVariableElementImpl @ dart:collection/splay_tree.dart), mapRoot (LocalVariableElementImpl @ dart:collection/splay_tree.dart), mapRoot (LocalVariableElementImpl @ dart:collection/splay_tree.dart), mapRoot (LocalVariableElementImpl @ dart:collection/splay_tree.dart), SplayTreeMap.isEmpty (FieldElementImpl @ dart:collection/splay_tree.dart), nodes (LocalVariableElementImpl @ dart:collection/splay_tree.dart), node (LocalVariableElementImpl @ dart:collection/splay_tree.dart), visit (FunctionElementImpl @ dart:collection/splay_tree.dart), SplayTreeMap.containsValue (MethodElementImpl @ dart:collection/splay_tree.dart), SplayTreeMap.firstKey (MethodElementImpl @ dart:collection/splay_tree.dart), SplayTreeMap.lastKey (MethodElementImpl @ dart:collection/splay_tree.dart), SplayTreeMap.lastKeyBefore (MethodElementImpl @ dart:collection/splay_tree.dart), node (LocalVariableElementImpl @ dart:collection/splay_tree.dart), SplayTreeMap.firstKeyAfter (MethodElementImpl @ dart:collection/splay_tree.dart), node (LocalVariableElementImpl @ dart:collection/splay_tree.dart), _SplayTreeIterator._workList (ConstFieldElementImpl @ dart:collection/splay_tree.dart), _SplayTreeIterator._currentNode (FieldElementImpl @ dart:collection/splay_tree.dart), _SplayTreeIterator. (ConstructorElementImpl @ dart:collection/splay_tree.dart), _SplayTreeIterator.startAt (ConstructorElementImpl @ dart:collection/splay_tree.dart), _SplayTreeIterator.current (FieldElementImpl @ dart:collection/splay_tree.dart), _SplayTreeIterator._findLeftMostDescendent (MethodElementImpl @ dart:collection/splay_tree.dart), _SplayTreeIterator._rebuildWorkList (MethodElementImpl @ dart:collection/splay_tree.dart), _SplayTreeIterator.moveNext (MethodElementImpl @ dart:collection/splay_tree.dart), _SplayTreeKeyIterable.toSet (MethodElementImpl @ dart:collection/splay_tree.dart), _SplayTreeKeyIterator._getValue (MethodElementImpl @ dart:collection/splay_tree.dart), _SplayTreeNodeIterator (ClassElementImpl @ dart:collection/splay_tree.dart), _SplayTreeNodeIterator._getValue (MethodElementImpl @ dart:collection/splay_tree.dart), SplayTreeSet.isEmpty (FieldElementImpl @ dart:collection/splay_tree.dart), SplayTreeSet.isNotEmpty (FieldElementImpl @ dart:collection/splay_tree.dart), SplayTreeSet.first (FieldElementImpl @ dart:collection/splay_tree.dart), SplayTreeSet.last (FieldElementImpl @ dart:collection/splay_tree.dart), SplayTreeSet.single (FieldElementImpl @ dart:collection/splay_tree.dart), SplayTreeSet.add (MethodElementImpl @ dart:collection/splay_tree.dart), SplayTreeSet.remove (MethodElementImpl @ dart:collection/splay_tree.dart), SplayTreeSet.addAll (MethodElementImpl @ dart:collection/splay_tree.dart), SplayTreeSet.removeAll (MethodElementImpl @ dart:collection/splay_tree.dart), SplayTreeSet.retainAll (MethodElementImpl @ dart:collection/splay_tree.dart), SplayTreeSet.lookup (MethodElementImpl @ dart:collection/splay_tree.dart), SplayTreeSet._clone (MethodElementImpl @ dart:collection/splay_tree.dart), SplayTreeSet._copyNode (MethodElementImpl @ dart:collection/splay_tree.dart) */
const _SplayTreeNode$ = dart.generic(function(K) {
  class _SplayTreeNode extends core.Object {
    _SplayTreeNode(key) {
      this.key = key;
      this.right = null;
    }
  }
  dart.setSignature(_SplayTreeNode, {
    constructors: () => ({_SplayTreeNode: [_SplayTreeNode$(K), [K]]})
  });
  return _SplayTreeNode;
});
let _SplayTreeNode = _SplayTreeNode$();
// /* Incoming: _SplayTreeMapNode. (ConstructorElementImpl @ dart:collection/splay_tree.dart), mapRoot (LocalVariableElementImpl @ dart:collection/splay_tree.dart), SplayTreeMap.[] (MethodElementImpl @ dart:collection/splay_tree.dart), mapRoot (LocalVariableElementImpl @ dart:collection/splay_tree.dart), SplayTreeMap.remove (MethodElementImpl @ dart:collection/splay_tree.dart), mapRoot (LocalVariableElementImpl @ dart:collection/splay_tree.dart), SplayTreeMap.[]= (MethodElementImpl @ dart:collection/splay_tree.dart), mapRoot (LocalVariableElementImpl @ dart:collection/splay_tree.dart), SplayTreeMap.putIfAbsent (MethodElementImpl @ dart:collection/splay_tree.dart), node (LocalVariableElementImpl @ dart:collection/splay_tree.dart), SplayTreeMap.forEach (MethodElementImpl @ dart:collection/splay_tree.dart), visit (FunctionElementImpl @ dart:collection/splay_tree.dart), _SplayTreeIterator._getValue (MethodElementImpl @ dart:collection/splay_tree.dart), _SplayTreeValueIterator._getValue (MethodElementImpl @ dart:collection/splay_tree.dart) */
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
const _dummy = Symbol('_dummy');
const _root = Symbol('_root');
const _count = Symbol('_count');
const _splayCount = Symbol('_splayCount');
const _compare = Symbol('_compare');
const _splay = Symbol('_splay');
const _splayMax = Symbol('_splayMax');
const _addNewRoot = Symbol('_addNewRoot');
const _clear = Symbol('_clear');
// /* Incoming: SplayTreeMap (ClassElementImpl @ dart:collection/splay_tree.dart), _SplayTreeIterator._tree (FieldElementImpl @ dart:collection/splay_tree.dart), _SplayTreeIterator. (ConstructorElementImpl @ dart:collection/splay_tree.dart), _SplayTreeIterator.startAt (ConstructorElementImpl @ dart:collection/splay_tree.dart), compare (LocalVariableElementImpl @ dart:collection/splay_tree.dart), _SplayTreeIterator._rebuildWorkList (MethodElementImpl @ dart:collection/splay_tree.dart), _SplayTreeIterator.moveNext (MethodElementImpl @ dart:collection/splay_tree.dart), _SplayTreeKeyIterable._tree (FieldElementImpl @ dart:collection/splay_tree.dart), _SplayTreeKeyIterable. (ConstructorElementImpl @ dart:collection/splay_tree.dart), _SplayTreeKeyIterable.length (FieldElementImpl @ dart:collection/splay_tree.dart), _SplayTreeKeyIterable.isEmpty (FieldElementImpl @ dart:collection/splay_tree.dart), _SplayTreeKeyIterable.iterator (FieldElementImpl @ dart:collection/splay_tree.dart), setOrMap (LocalVariableElementImpl @ dart:collection/splay_tree.dart), set (LocalVariableElementImpl @ dart:collection/splay_tree.dart), _SplayTreeKeyIterable.toSet (MethodElementImpl @ dart:collection/splay_tree.dart), _SplayTreeKeyIterator. (ConstructorElementImpl @ dart:collection/splay_tree.dart), _SplayTreeNodeIterator. (ConstructorElementImpl @ dart:collection/splay_tree.dart), _SplayTreeNodeIterator.startAt (ConstructorElementImpl @ dart:collection/splay_tree.dart), SplayTreeSet (ClassElementImpl @ dart:collection/splay_tree.dart) */
const _SplayTree$ = dart.generic(function(K) {
  class _SplayTree extends core.Object {
    _SplayTree() {
      this[_dummy] = new (_SplayTreeNode$(K))(null);
      this[_root] = null;
      this[_count] = 0;
      this[_modificationCount] = 0;
      this[_splayCount] = 0;
    }
    [_splay](key) {
      dart.as(key, K);
      if (this[_root] == null) return -1;
      let left = this[_dummy];
      let right = this[_dummy];
      let current = this[_root];
      let comp = null;
      while (true) {
        comp = this[_compare](current.key, key);
        if (dart.notNull(comp) > 0) {
          if (current.left == null) break;
          comp = this[_compare](current.left.key, key);
          if (dart.notNull(comp) > 0) {
            let tmp = current.left;
            current.left = tmp.right;
            tmp.right = current;
            current = tmp;
            if (current.left == null) break;
          }
          right.left = current;
          right = current;
          current = current.left;
        } else if (dart.notNull(comp) < 0) {
          if (current.right == null) break;
          comp = this[_compare](current.right.key, key);
          if (dart.notNull(comp) < 0) {
            let tmp = current.right;
            current.right = tmp.left;
            tmp.left = current;
            current = tmp;
            if (current.right == null) break;
          }
          left.right = current;
          left = current;
          current = current.right;
        } else {
          break;
        }
      }
      left.right = current.left;
      right.left = current.right;
      current.left = this[_dummy].right;
      current.right = this[_dummy].left;
      this[_root] = current;
      this[_dummy].right = null;
      this[_dummy].left = null;
      this[_splayCount] = dart.notNull(this[_splayCount]) + 1;
      return comp;
    }
    [_splayMax](node) {
      dart.as(node, _SplayTreeNode$(K));
      let current = node;
      while (current.right != null) {
        let right = current.right;
        current.right = right.left;
        right.left = current;
        current = right;
      }
      return dart.as(current, _SplayTreeNode$(K));
    }
    [_remove](key) {
      dart.as(key, K);
      if (this[_root] == null) return null;
      let comp = this[_splay](key);
      if (comp != 0) return null;
      let result = this[_root];
      this[_count] = dart.notNull(this[_count]) - 1;
      if (this[_root].left == null) {
        this[_root] = this[_root].right;
      } else {
        let right = this[_root].right;
        this[_root] = this[_splayMax](this[_root].left);
        this[_root].right = right;
      }
      this[_modificationCount] = dart.notNull(this[_modificationCount]) + 1;
      return result;
    }
    [_addNewRoot](node, comp) {
      dart.as(node, _SplayTreeNode$(K));
      this[_count] = dart.notNull(this[_count]) + 1;
      this[_modificationCount] = dart.notNull(this[_modificationCount]) + 1;
      if (this[_root] == null) {
        this[_root] = node;
        return;
      }
      if (dart.notNull(comp) < 0) {
        node.left = this[_root];
        node.right = this[_root].right;
        this[_root].right = null;
      } else {
        node.right = this[_root];
        node.left = this[_root].left;
        this[_root].left = null;
      }
      this[_root] = node;
    }
    [_clear]() {
      this[_root] = null;
      this[_count] = 0;
      this[_modificationCount] = dart.notNull(this[_modificationCount]) + 1;
    }
  }
  dart.setSignature(_SplayTree, {
    methods: () => ({
      [_splay]: [core.int, [K]],
      [_splayMax]: [_SplayTreeNode$(K), [_SplayTreeNode$(K)]],
      [_remove]: [_SplayTreeNode, [K]],
      [_addNewRoot]: [dart.void, [_SplayTreeNode$(K), core.int]],
      [_clear]: [dart.void, []]
    })
  });
  return _SplayTree;
});
let _SplayTree = _SplayTree$();
const _comparator = Symbol('_comparator');
const _validKey = Symbol('_validKey');
// /* Incoming: SplayTreeMap. (ConstructorElementImpl @ dart:collection/splay_tree.dart), SplayTreeMap.from (ConstructorElementImpl @ dart:collection/splay_tree.dart), result (LocalVariableElementImpl @ dart:collection/splay_tree.dart), SplayTreeMap.fromIterable (ConstructorElementImpl @ dart:collection/splay_tree.dart), map (LocalVariableElementImpl @ dart:collection/splay_tree.dart), SplayTreeMap.fromIterables (ConstructorElementImpl @ dart:collection/splay_tree.dart), map (LocalVariableElementImpl @ dart:collection/splay_tree.dart), SplayTreeMap._internal (ConstructorElementImpl @ dart:collection/splay_tree.dart), SplayTreeMap.putIfAbsent (MethodElementImpl @ dart:collection/splay_tree.dart), SplayTreeMap.addAll (MethodElementImpl @ dart:collection/splay_tree.dart), nodes (LocalVariableElementImpl @ dart:collection/splay_tree.dart), visit (FunctionElementImpl @ dart:collection/splay_tree.dart), SplayTreeMap.keys (FieldElementImpl @ dart:collection/splay_tree.dart), SplayTreeMap.values (FieldElementImpl @ dart:collection/splay_tree.dart), SplayTreeMap.toString (MethodElementImpl @ dart:collection/splay_tree.dart), _SplayTreeValueIterable._map (FieldElementImpl @ dart:collection/splay_tree.dart), _SplayTreeValueIterable. (ConstructorElementImpl @ dart:collection/splay_tree.dart), _SplayTreeValueIterable.length (FieldElementImpl @ dart:collection/splay_tree.dart), _SplayTreeValueIterable.isEmpty (FieldElementImpl @ dart:collection/splay_tree.dart), _SplayTreeValueIterable.iterator (FieldElementImpl @ dart:collection/splay_tree.dart), _SplayTreeValueIterator. (ConstructorElementImpl @ dart:collection/splay_tree.dart) */
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
      (() => {
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
      })();
      return value;
    }
    get isEmpty() {
      return this[_root] == null;
    }
    get isNotEmpty() {
      return !dart.notNull(this.isEmpty);
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
    get values() {
      return new (_SplayTreeValueIterable$(K, V))(this);
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
      clear: [dart.void, []],
      containsKey: [core.bool, [core.Object]]
    })
  });
  return SplayTreeMap;
});
let SplayTreeMap = SplayTreeMap$();
const _workList = Symbol('_workList');
const _tree = Symbol('_tree');
const _currentNode = Symbol('_currentNode');
const _findLeftMostDescendent = Symbol('_findLeftMostDescendent');
const _rebuildWorkList = Symbol('_rebuildWorkList');
// /* Incoming: _SplayTreeIterator. (ConstructorElementImpl @ dart:collection/splay_tree.dart), _SplayTreeIterator.startAt (ConstructorElementImpl @ dart:collection/splay_tree.dart), _SplayTreeKeyIterator (ClassElementImpl @ dart:collection/splay_tree.dart), _SplayTreeValueIterator (ClassElementImpl @ dart:collection/splay_tree.dart), _SplayTreeNodeIterator (ClassElementImpl @ dart:collection/splay_tree.dart) */
const _SplayTreeIterator$ = dart.generic(function(T) {
  class _SplayTreeIterator extends core.Object {
    _SplayTreeIterator(tree) {
      this[_workList] = dart.list([], _SplayTreeNode);
      this[_tree] = tree;
      this[_modificationCount] = tree[_modificationCount];
      this[_splayCount] = tree[_splayCount];
      this[_currentNode] = null;
      this[_findLeftMostDescendent](tree[_root]);
    }
    [_findLeftMostDescendent](node) {
      while (node != null) {
        this[_workList][dartx.add](node);
        node = node.left;
      }
    }
    [_rebuildWorkList](currentNode) {
      dart.assert(!dart.notNull(this[_workList][dartx.isEmpty]));
      this[_workList][dartx.clear]();
      if (currentNode == null) {
        this[_findLeftMostDescendent](this[_tree][_root]);
      } else {
        this[_tree][_splay](currentNode.key);
        this[_findLeftMostDescendent](this[_tree][_root].right);
        dart.assert(!dart.notNull(this[_workList][dartx.isEmpty]));
      }
    }
    moveNext() {
      if (this[_modificationCount] != this[_tree][_modificationCount]) {
        dart.throw(new core.ConcurrentModificationError(this[_tree]));
      }
      if (dart.notNull(this[_workList][dartx.isEmpty])) {
        this[_currentNode] = null;
        return false;
      }
      if (this[_tree][_splayCount] != this[_splayCount] && this[_currentNode] != null) {
        this[_rebuildWorkList](this[_currentNode]);
      }
      this[_currentNode] = this[_workList][dartx.removeLast]();
      this[_findLeftMostDescendent](this[_currentNode].right);
      return true;
    }
  }
  _SplayTreeIterator[dart.implements] = () => [core.Iterator$(T)];
  dart.setSignature(_SplayTreeIterator, {
    constructors: () => ({_SplayTreeIterator: [_SplayTreeIterator$(T), [_SplayTree]]}),
    methods: () => ({
      [_findLeftMostDescendent]: [dart.void, [_SplayTreeNode]],
      [_rebuildWorkList]: [dart.void, [_SplayTreeNode]],
      moveNext: [core.bool, []]
    })
  });
  return _SplayTreeIterator;
});
let _SplayTreeIterator = _SplayTreeIterator$();
// /* Incoming: SplayTreeMap.values (FieldElementImpl @ dart:collection/splay_tree.dart), _SplayTreeValueIterable. (ConstructorElementImpl @ dart:collection/splay_tree.dart) */
const _SplayTreeValueIterable$ = dart.generic(function(K, V) {
  class _SplayTreeValueIterable extends IterableBase$(V) {
    _SplayTreeValueIterable(map) {
      this[_map] = map;
      super.IterableBase();
    }
    get length() {
      return this[_map][_count];
    }
    get iterator() {
      return new (_SplayTreeValueIterator$(K, V))(this[_map]);
    }
  }
  _SplayTreeValueIterable[dart.implements] = () => [_internal.EfficientLength];
  dart.setSignature(_SplayTreeValueIterable, {
    constructors: () => ({_SplayTreeValueIterable: [_SplayTreeValueIterable$(K, V), [SplayTreeMap$(K, V)]]})
  });
  dart.defineExtensionMembers(_SplayTreeValueIterable, ['length', 'iterator']);
  return _SplayTreeValueIterable;
});
let _SplayTreeValueIterable = _SplayTreeValueIterable$();
// /* Incoming: _SplayTreeKeyIterable.iterator (FieldElementImpl @ dart:collection/splay_tree.dart), _SplayTreeKeyIterator. (ConstructorElementImpl @ dart:collection/splay_tree.dart), SplayTreeSet.iterator (FieldElementImpl @ dart:collection/splay_tree.dart) */
const _SplayTreeKeyIterator$ = dart.generic(function(K) {
  class _SplayTreeKeyIterator extends _SplayTreeIterator$(K) {
    _SplayTreeKeyIterator(map) {
      super._SplayTreeIterator(map);
    }
  }
  dart.setSignature(_SplayTreeKeyIterator, {
    constructors: () => ({_SplayTreeKeyIterator: [_SplayTreeKeyIterator$(K), [_SplayTree$(K)]]})
  });
  return _SplayTreeKeyIterator;
});
let _SplayTreeKeyIterator = _SplayTreeKeyIterator$();
// /* Incoming: _SplayTreeValueIterable.iterator (FieldElementImpl @ dart:collection/splay_tree.dart), _SplayTreeValueIterator. (ConstructorElementImpl @ dart:collection/splay_tree.dart) */
const _SplayTreeValueIterator$ = dart.generic(function(K, V) {
  class _SplayTreeValueIterator extends _SplayTreeIterator$(V) {
    _SplayTreeValueIterator(map) {
      super._SplayTreeIterator(map);
    }
  }
  dart.setSignature(_SplayTreeValueIterator, {
    constructors: () => ({_SplayTreeValueIterator: [_SplayTreeValueIterator$(K, V), [SplayTreeMap$(K, V)]]})
  });
  return _SplayTreeValueIterator;
});
let _SplayTreeValueIterator = _SplayTreeValueIterator$();
// /* Incoming: set (LocalVariableElementImpl @ dart:collection/splay_tree.dart), _SplayTreeKeyIterable.toSet (MethodElementImpl @ dart:collection/splay_tree.dart), SplayTreeSet. (ConstructorElementImpl @ dart:collection/splay_tree.dart), SplayTreeSet.from (ConstructorElementImpl @ dart:collection/splay_tree.dart), result (LocalVariableElementImpl @ dart:collection/splay_tree.dart), SplayTreeSet.iterator (FieldElementImpl @ dart:collection/splay_tree.dart), retainSet (LocalVariableElementImpl @ dart:collection/splay_tree.dart), SplayTreeSet.retainAll (MethodElementImpl @ dart:collection/splay_tree.dart), result (LocalVariableElementImpl @ dart:collection/splay_tree.dart), SplayTreeSet.intersection (MethodElementImpl @ dart:collection/splay_tree.dart), result (LocalVariableElementImpl @ dart:collection/splay_tree.dart), SplayTreeSet.difference (MethodElementImpl @ dart:collection/splay_tree.dart), SplayTreeSet.union (MethodElementImpl @ dart:collection/splay_tree.dart), SplayTreeSet._clone (MethodElementImpl @ dart:collection/splay_tree.dart), set (LocalVariableElementImpl @ dart:collection/splay_tree.dart), SplayTreeSet.toSet (MethodElementImpl @ dart:collection/splay_tree.dart), SplayTreeSet.toString (MethodElementImpl @ dart:collection/splay_tree.dart) */
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
    clear() {
      this[_clear]();
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
      remove: [core.bool, [core.Object]]
    })
  });
  dart.defineExtensionMembers(SplayTreeSet, ['contains', 'iterator', 'length', 'isNotEmpty']);
  return SplayTreeSet;
});
let SplayTreeSet = SplayTreeSet$();
const _strings = Symbol('_strings');
const _nums = Symbol('_nums');
const _rest = Symbol('_rest');
const _containsKey = Symbol('_containsKey');
const _getBucket = Symbol('_getBucket');
const _findBucketIndex = Symbol('_findBucketIndex');
const _get = Symbol('_get');
const _addHashTableEntry = Symbol('_addHashTableEntry');
const _set = Symbol('_set');
const _computeHashCode = Symbol('_computeHashCode');
const _removeHashTableEntry = Symbol('_removeHashTableEntry');
const _computeKeys = Symbol('_computeKeys');
// /* Incoming: _HashMap. (ConstructorElementImpl @ dart:collection), _HashMap.keys (FieldElementImpl @ dart:collection), _HashMap.values (FieldElementImpl @ dart:collection), _HashMap.containsValue (MethodElementImpl @ dart:collection), _HashMap.addAll (MethodElementImpl @ dart:collection), _HashMap.putIfAbsent (MethodElementImpl @ dart:collection), _HashMap.forEach (MethodElementImpl @ dart:collection), _IdentityHashMap (ClassElementImpl @ dart:collection), _CustomHashMap (ClassElementImpl @ dart:collection), HashMap. (ConstructorElementImpl @ dart:collection/hash_map.dart) */
const _HashMap$ = dart.generic(function(K, V) {
  class _HashMap extends core.Object {
    _HashMap() {
      this[_length] = 0;
      this[_strings] = null;
      this[_nums] = null;
      this[_rest] = null;
      this[_keys] = null;
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
      return new (HashMapKeyIterable$(K))(this);
    }
    get values() {
      return _internal.MappedIterable$(K, V).new(this.keys, dart.fn(each => this.get(each), V, [K]));
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
    [_containsKey](key) {
      let rest = this[_rest];
      if (rest == null) return false;
      let bucket = this[_getBucket](rest, key);
      return dart.notNull(this[_findBucketIndex](bucket, key)) >= 0;
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
    [_get](key) {
      let rest = this[_rest];
      if (rest == null) return null;
      let bucket = this[_getBucket](rest, key);
      let index = this[_findBucketIndex](bucket, key);
      return dart.as(dart.notNull(index) < 0 ? null : bucket[dart.notNull(index) + 1], V);
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
    [_set](key, value) {
      dart.as(key, K);
      dart.as(value, V);
      let rest = this[_rest];
      if (rest == null) this[_rest] = rest = _HashMap$()._newHashTable();
      let hash = this[_computeHashCode](key);
      let bucket = rest[hash];
      if (bucket == null) {
        _HashMap$()._setTableEntry(rest, hash, [key, value]);
        this[_length] = dart.notNull(this[_length]) + 1;
        this[_keys] = null;
      } else {
        let index = this[_findBucketIndex](bucket, key);
        if (dart.notNull(index) >= 0) {
          bucket[dart.notNull(index) + 1] = value;
        } else {
          bucket.push(key, value);
          this[_length] = dart.notNull(this[_length]) + 1;
          this[_keys] = null;
        }
      }
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
    [_remove](key) {
      let rest = this[_rest];
      if (rest == null) return null;
      let bucket = this[_getBucket](rest, key);
      let index = this[_findBucketIndex](bucket, key);
      if (dart.notNull(index) < 0) return null;
      this[_length] = dart.notNull(this[_length]) - 1;
      this[_keys] = null;
      return dart.as(bucket.splice(index, 2)[1], V);
    }
    clear() {
      if (dart.notNull(this[_length]) > 0) {
        this[_strings] = this[_nums] = this[_rest] = this[_keys] = null;
        this[_length] = 0;
      }
    }
    [_computeKeys]() {
      if (this[_keys] != null) return this[_keys];
      let result = core.List.new(this[_length]);
      let index = 0;
      let strings = this[_strings];
      if (strings != null) {
        let names = Object.getOwnPropertyNames(strings);
        let entries = names.length;
        for (let i = 0; i < entries; i++) {
          let key = names[i];
          result[index] = key;
          index++;
        }
      }
      let nums = this[_nums];
      if (nums != null) {
        let names = Object.getOwnPropertyNames(nums);
        let entries = names.length;
        for (let i = 0; i < entries; i++) {
          let key = +names[i];
          result[index] = key;
          index++;
        }
      }
      let rest = this[_rest];
      if (rest != null) {
        let names = Object.getOwnPropertyNames(rest);
        let entries = names.length;
        for (let i = 0; i < entries; i++) {
          let key = names[i];
          let bucket = rest[key];
          let length = bucket.length;
          for (let i = 0; i < length; i = i + 2) {
            let key = bucket[i];
            result[index] = key;
            index++;
          }
        }
      }
      dart.assert(index == this[_length]);
      return this[_keys] = result;
    }
    [_addHashTableEntry](table, key, value) {
      dart.as(key, K);
      dart.as(value, V);
      if (!dart.notNull(_HashMap$()._hasTableEntry(table, key))) {
        this[_length] = dart.notNull(this[_length]) + 1;
        this[_keys] = null;
      }
      _HashMap$()._setTableEntry(table, key, value);
    }
    [_removeHashTableEntry](table, key) {
      if (table != null && dart.notNull(_HashMap$()._hasTableEntry(table, key))) {
        let value = dart.as(_HashMap$()._getTableEntry(table, key), V);
        _HashMap$()._deleteTableEntry(table, key);
        this[_length] = dart.notNull(this[_length]) - 1;
        this[_keys] = null;
        return value;
      } else {
        return null;
      }
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
    static _hasTableEntry(table, key) {
      let entry = table[key];
      return entry != null;
    }
    static _getTableEntry(table, key) {
      let entry = table[key];
      return entry === table ? null : entry;
    }
    static _setTableEntry(table, key, value) {
      if (value == null) {
        table[key] = table;
      } else {
        table[key] = value;
      }
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
      for (let i = 0; i < length; i = i + 2) {
        if (dart.equals(bucket[i], key)) return i;
      }
      return -1;
    }
    static _newHashTable() {
      let table = Object.create(null);
      let temporaryKey = '<non-identifier-key>';
      _HashMap$()._setTableEntry(table, temporaryKey, table);
      _HashMap$()._deleteTableEntry(table, temporaryKey);
      return table;
    }
  }
  _HashMap[dart.implements] = () => [HashMap$(K, V)];
  dart.setSignature(_HashMap, {
    constructors: () => ({_HashMap: [_HashMap$(K, V), []]}),
    methods: () => ({
      containsKey: [core.bool, [core.Object]],
      [_containsKey]: [core.bool, [core.Object]],
      get: [V, [core.Object]],
      [_get]: [V, [core.Object]],
      set: [dart.void, [K, V]],
      [_set]: [dart.void, [K, V]],
      remove: [V, [core.Object]],
      [_remove]: [V, [core.Object]],
      clear: [dart.void, []],
      [_computeKeys]: [core.List, []],
      [_addHashTableEntry]: [dart.void, [dart.dynamic, K, V]],
      [_removeHashTableEntry]: [V, [dart.dynamic, core.Object]],
      [_computeHashCode]: [core.int, [dart.dynamic]],
      [_getBucket]: [core.List, [dart.dynamic, dart.dynamic]],
      [_findBucketIndex]: [core.int, [dart.dynamic, dart.dynamic]]
    }),
    statics: () => ({
      _isStringKey: [core.bool, [dart.dynamic]],
      _isNumericKey: [core.bool, [dart.dynamic]],
      _hasTableEntry: [core.bool, [dart.dynamic, dart.dynamic]],
      _getTableEntry: [dart.dynamic, [dart.dynamic, dart.dynamic]],
      _setTableEntry: [dart.void, [dart.dynamic, dart.dynamic, dart.dynamic]],
      _deleteTableEntry: [dart.void, [dart.dynamic, dart.dynamic]],
      _newHashTable: [dart.dynamic, []]
    }),
    names: ['_isStringKey', '_isNumericKey', '_hasTableEntry', '_getTableEntry', '_setTableEntry', '_deleteTableEntry', '_newHashTable']
  });
  return _HashMap;
});
let _HashMap = _HashMap$();
// /* Incoming: HashMap. (ConstructorElementImpl @ dart:collection/hash_map.dart), HashMap.identity (ConstructorElementImpl @ dart:collection/hash_map.dart) */
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
// /* Incoming: _CustomHashMap. (ConstructorElementImpl @ dart:collection), _CustomHashMap.[] (MethodElementImpl @ dart:collection), _CustomHashMap.[]= (MethodElementImpl @ dart:collection), _CustomHashMap.containsKey (MethodElementImpl @ dart:collection), _CustomHashMap.remove (MethodElementImpl @ dart:collection), _CustomHashMap.toString (MethodElementImpl @ dart:collection), HashMap. (ConstructorElementImpl @ dart:collection/hash_map.dart) */
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
// /* Incoming: _HashMap.keys (FieldElementImpl @ dart:collection), HashMapKeyIterable. (ConstructorElementImpl @ dart:collection) */
const HashMapKeyIterable$ = dart.generic(function(E) {
  class HashMapKeyIterable extends IterableBase$(E) {
    HashMapKeyIterable(map) {
      this[_map] = map;
      super.IterableBase();
    }
    get length() {
      return dart.as(dart.dload(this[_map], _length), core.int);
    }
    get iterator() {
      return new (HashMapKeyIterator$(E))(this[_map], dart.as(dart.dsend(this[_map], _computeKeys), core.List));
    }
    contains(element) {
      return dart.as(dart.dsend(this[_map], 'containsKey', element), core.bool);
    }
  }
  HashMapKeyIterable[dart.implements] = () => [_internal.EfficientLength];
  dart.setSignature(HashMapKeyIterable, {
    constructors: () => ({HashMapKeyIterable: [HashMapKeyIterable$(E), [dart.dynamic]]})
  });
  dart.defineExtensionMembers(HashMapKeyIterable, ['contains', 'length', 'iterator']);
  return HashMapKeyIterable;
});
let HashMapKeyIterable = HashMapKeyIterable$();
const _offset = Symbol('_offset');
// /* Incoming: HashMapKeyIterable.iterator (FieldElementImpl @ dart:collection), HashMapKeyIterator. (ConstructorElementImpl @ dart:collection) */
const HashMapKeyIterator$ = dart.generic(function(E) {
  class HashMapKeyIterator extends core.Object {
    HashMapKeyIterator(map, keys) {
      this[_map] = map;
      this[_keys] = keys;
      this[_offset] = 0;
      this[_current] = null;
    }
    moveNext() {
      let keys = this[_keys];
      let offset = this[_offset];
      if (keys !== dart.dload(this[_map], _keys)) {
        dart.throw(new core.ConcurrentModificationError(this[_map]));
      } else if (dart.notNull(offset) >= keys.length) {
        this[_current] = null;
        return false;
      } else {
        this[_current] = dart.as(keys[offset], E);
        this[_offset] = dart.notNull(offset) + 1;
        return true;
      }
    }
  }
  HashMapKeyIterator[dart.implements] = () => [core.Iterator$(E)];
  dart.setSignature(HashMapKeyIterator, {
    constructors: () => ({HashMapKeyIterator: [HashMapKeyIterator$(E), [dart.dynamic, core.List]]}),
    methods: () => ({moveNext: [core.bool, []]})
  });
  return HashMapKeyIterator;
});
let HashMapKeyIterator = HashMapKeyIterator$();
const _first = Symbol('_first');
const _last = Symbol('_last');
const _modifications = Symbol('_modifications');
const _value = Symbol('_value');
const _newLinkedCell = Symbol('_newLinkedCell');
const _unlinkCell = Symbol('_unlinkCell');
const _modified = Symbol('_modified');
const _key = Symbol('_key');
// /* Incoming: _LinkedHashMap. (ConstructorElementImpl @ dart:collection), _LinkedHashMap.keys (FieldElementImpl @ dart:collection), _LinkedHashMap.values (FieldElementImpl @ dart:collection), _LinkedHashMap.containsValue (MethodElementImpl @ dart:collection), _LinkedHashMap.addAll (MethodElementImpl @ dart:collection), _LinkedHashMap.putIfAbsent (MethodElementImpl @ dart:collection), _LinkedHashMap.forEach (MethodElementImpl @ dart:collection), _LinkedHashMap.toString (MethodElementImpl @ dart:collection), _LinkedIdentityHashMap (ClassElementImpl @ dart:collection), _LinkedCustomHashMap (ClassElementImpl @ dart:collection), LinkedHashMap. (ConstructorElementImpl @ dart:collection/linked_hash_map.dart), LinkedHashMap._literal (ConstructorElementImpl @ dart:collection/linked_hash_map.dart), LinkedHashMap._empty (ConstructorElementImpl @ dart:collection/linked_hash_map.dart) */
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
      return _internal.MappedIterable$(K, V).new(this.keys, dart.fn(each => this.get(each), V, [K]));
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
      return this.keys[dartx.any](dart.fn(each => dart.equals(this.get(each), value), core.bool, [K]));
    }
    addAll(other) {
      dart.as(other, core.Map$(K, V));
      other.forEach(dart.fn((key, value) => {
        dart.as(key, K);
        dart.as(value, V);
        this.set(key, value);
      }, dart.void, [K, V]));
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
// /* Incoming: LinkedHashMap. (ConstructorElementImpl @ dart:collection/linked_hash_map.dart), LinkedHashMap.identity (ConstructorElementImpl @ dart:collection/linked_hash_map.dart) */
const _LinkedIdentityHashMap$ = dart.generic(function(K, V) {
  class _LinkedIdentityHashMap extends _LinkedHashMap$(K, V) {
    _LinkedIdentityHashMap() {
      super._LinkedHashMap();
    }
  }
  return _LinkedIdentityHashMap;
});
let _LinkedIdentityHashMap = _LinkedIdentityHashMap$();
// /* Incoming: _LinkedCustomHashMap. (ConstructorElementImpl @ dart:collection), _LinkedCustomHashMap.[] (MethodElementImpl @ dart:collection), _LinkedCustomHashMap.[]= (MethodElementImpl @ dart:collection), _LinkedCustomHashMap.containsKey (MethodElementImpl @ dart:collection), _LinkedCustomHashMap.remove (MethodElementImpl @ dart:collection), LinkedHashMap. (ConstructorElementImpl @ dart:collection/linked_hash_map.dart) */
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
// /* Incoming: _LinkedHashMap._first (FieldElementImpl @ dart:collection), _LinkedHashMap._last (FieldElementImpl @ dart:collection), cell (LocalVariableElementImpl @ dart:collection), _LinkedHashMap.containsKey (MethodElementImpl @ dart:collection), cell (LocalVariableElementImpl @ dart:collection), cell (LocalVariableElementImpl @ dart:collection), _LinkedHashMap.[] (MethodElementImpl @ dart:collection), cell (LocalVariableElementImpl @ dart:collection), cell (LocalVariableElementImpl @ dart:collection), _LinkedHashMap._get (MethodElementImpl @ dart:collection), cell (LocalVariableElementImpl @ dart:collection), _LinkedHashMap._set (MethodElementImpl @ dart:collection), cell (LocalVariableElementImpl @ dart:collection), cell (LocalVariableElementImpl @ dart:collection), cell (LocalVariableElementImpl @ dart:collection), _LinkedHashMap._remove (MethodElementImpl @ dart:collection), _LinkedHashMap.clear (MethodElementImpl @ dart:collection), cell (LocalVariableElementImpl @ dart:collection), _LinkedHashMap.forEach (MethodElementImpl @ dart:collection), cell (LocalVariableElementImpl @ dart:collection), _LinkedHashMap._addHashTableEntry (MethodElementImpl @ dart:collection), cell (LocalVariableElementImpl @ dart:collection), _LinkedHashMap._removeHashTableEntry (MethodElementImpl @ dart:collection), _LinkedHashMap._newLinkedCell (MethodElementImpl @ dart:collection), cell (LocalVariableElementImpl @ dart:collection), last (LocalVariableElementImpl @ dart:collection), _LinkedHashMap._unlinkCell (MethodElementImpl @ dart:collection), previous (LocalVariableElementImpl @ dart:collection), next (LocalVariableElementImpl @ dart:collection), cell (LocalVariableElementImpl @ dart:collection), _LinkedHashMap._findBucketIndex (MethodElementImpl @ dart:collection), cell (LocalVariableElementImpl @ dart:collection), _LinkedIdentityHashMap._findBucketIndex (MethodElementImpl @ dart:collection), cell (LocalVariableElementImpl @ dart:collection), _LinkedCustomHashMap._findBucketIndex (MethodElementImpl @ dart:collection), LinkedHashMapCell._next (FieldElementImpl @ dart:collection), LinkedHashMapCell._previous (FieldElementImpl @ dart:collection), LinkedHashMapCell. (ConstructorElementImpl @ dart:collection), cell (LocalVariableElementImpl @ dart:collection), LinkedHashMapKeyIterable.forEach (MethodElementImpl @ dart:collection), LinkedHashMapKeyIterator._cell (FieldElementImpl @ dart:collection), LinkedHashMapKeyIterator. (ConstructorElementImpl @ dart:collection), LinkedHashMapKeyIterator.moveNext (MethodElementImpl @ dart:collection) */
class LinkedHashMapCell extends core.Object {
  LinkedHashMapCell(key, value) {
    this[_key] = key;
    this[_value] = value;
    this[_next] = null;
    this[_previous] = null;
  }
}
dart.setSignature(LinkedHashMapCell, {
  constructors: () => ({LinkedHashMapCell: [LinkedHashMapCell, [dart.dynamic, dart.dynamic]]})
});
// /* Incoming: _LinkedHashMap.keys (FieldElementImpl @ dart:collection), LinkedHashMapKeyIterable. (ConstructorElementImpl @ dart:collection) */
const LinkedHashMapKeyIterable$ = dart.generic(function(E) {
  class LinkedHashMapKeyIterable extends IterableBase$(E) {
    LinkedHashMapKeyIterable(map) {
      this[_map] = map;
      super.IterableBase();
    }
    get length() {
      return dart.as(dart.dload(this[_map], _length), core.int);
    }
    get iterator() {
      return new (LinkedHashMapKeyIterator$(E))(this[_map], dart.as(dart.dload(this[_map], _modifications), core.int));
    }
    contains(element) {
      return dart.as(dart.dsend(this[_map], 'containsKey', element), core.bool);
    }
  }
  LinkedHashMapKeyIterable[dart.implements] = () => [_internal.EfficientLength];
  dart.setSignature(LinkedHashMapKeyIterable, {
    constructors: () => ({LinkedHashMapKeyIterable: [LinkedHashMapKeyIterable$(E), [dart.dynamic]]})
  });
  dart.defineExtensionMembers(LinkedHashMapKeyIterable, ['contains', 'length', 'iterator']);
  return LinkedHashMapKeyIterable;
});
let LinkedHashMapKeyIterable = LinkedHashMapKeyIterable$();
const _cell = Symbol('_cell');
// /* Incoming: LinkedHashMapKeyIterable.iterator (FieldElementImpl @ dart:collection), LinkedHashMapKeyIterator. (ConstructorElementImpl @ dart:collection) */
const LinkedHashMapKeyIterator$ = dart.generic(function(E) {
  class LinkedHashMapKeyIterator extends core.Object {
    LinkedHashMapKeyIterator(map, modifications) {
      this[_map] = map;
      this[_modifications] = modifications;
      this[_cell] = null;
      this[_current] = null;
      this[_cell] = dart.as(dart.dload(this[_map], _first), LinkedHashMapCell);
    }
    moveNext() {
      if (!dart.equals(this[_modifications], dart.dload(this[_map], _modifications))) {
        dart.throw(new core.ConcurrentModificationError(this[_map]));
      } else if (this[_cell] == null) {
        this[_current] = null;
        return false;
      } else {
        this[_current] = dart.as(this[_cell][_key], E);
        this[_cell] = this[_cell][_next];
        return true;
      }
    }
  }
  LinkedHashMapKeyIterator[dart.implements] = () => [core.Iterator$(E)];
  dart.setSignature(LinkedHashMapKeyIterator, {
    constructors: () => ({LinkedHashMapKeyIterator: [LinkedHashMapKeyIterator$(E), [dart.dynamic, core.int]]}),
    methods: () => ({moveNext: [core.bool, []]})
  });
  return LinkedHashMapKeyIterator;
});
let LinkedHashMapKeyIterator = LinkedHashMapKeyIterator$();
const _elements = Symbol('_elements');
const _computeElements = Symbol('_computeElements');
const _contains = Symbol('_contains');
// /* Incoming: _HashSet. (ConstructorElementImpl @ dart:collection), _HashSet._newSet (MethodElementImpl @ dart:collection), _HashSet.iterator (FieldElementImpl @ dart:collection), _HashSet.lookup (MethodElementImpl @ dart:collection), _IdentityHashSet (ClassElementImpl @ dart:collection), _CustomHashSet (ClassElementImpl @ dart:collection), HashSet. (ConstructorElementImpl @ dart:collection/hash_set.dart) */
const _HashSet$ = dart.generic(function(E) {
  class _HashSet extends _HashSetBase$(E) {
    _HashSet() {
      this[_length] = 0;
      this[_strings] = null;
      this[_nums] = null;
      this[_rest] = null;
      this[_elements] = null;
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
    [_contains](object) {
      let rest = this[_rest];
      if (rest == null) return false;
      let bucket = this[_getBucket](rest, object);
      return dart.notNull(this[_findBucketIndex](bucket, object)) >= 0;
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
    [_add](element) {
      dart.as(element, E);
      let rest = this[_rest];
      if (rest == null) this[_rest] = rest = _HashSet$()._newHashTable();
      let hash = this[_computeHashCode](element);
      let bucket = rest[hash];
      if (bucket == null) {
        _HashSet$()._setTableEntry(rest, hash, [element]);
      } else {
        let index = this[_findBucketIndex](bucket, element);
        if (dart.notNull(index) >= 0) return false;
        bucket.push(element);
      }
      this[_length] = dart.notNull(this[_length]) + 1;
      this[_elements] = null;
      return true;
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
    [_remove](object) {
      let rest = this[_rest];
      if (rest == null) return false;
      let bucket = this[_getBucket](rest, object);
      let index = this[_findBucketIndex](bucket, object);
      if (dart.notNull(index) < 0) return false;
      this[_length] = dart.notNull(this[_length]) - 1;
      this[_elements] = null;
      bucket.splice(index, 1);
      return true;
    }
    clear() {
      if (dart.notNull(this[_length]) > 0) {
        this[_strings] = this[_nums] = this[_rest] = this[_elements] = null;
        this[_length] = 0;
      }
    }
    [_computeElements]() {
      if (this[_elements] != null) return this[_elements];
      let result = core.List.new(this[_length]);
      let index = 0;
      let strings = this[_strings];
      if (strings != null) {
        let names = Object.getOwnPropertyNames(strings);
        let entries = names.length;
        for (let i = 0; i < entries; i++) {
          let element = names[i];
          result[index] = element;
          index++;
        }
      }
      let nums = this[_nums];
      if (nums != null) {
        let names = Object.getOwnPropertyNames(nums);
        let entries = names.length;
        for (let i = 0; i < entries; i++) {
          let element = +names[i];
          result[index] = element;
          index++;
        }
      }
      let rest = this[_rest];
      if (rest != null) {
        let names = Object.getOwnPropertyNames(rest);
        let entries = names.length;
        for (let i = 0; i < entries; i++) {
          let entry = names[i];
          let bucket = rest[entry];
          let length = bucket.length;
          for (let i = 0; i < length; i++) {
            result[index] = bucket[i];
            index++;
          }
        }
      }
      dart.assert(index == this[_length]);
      return this[_elements] = result;
    }
    [_addHashTableEntry](table, element) {
      dart.as(element, E);
      if (dart.notNull(_HashSet$()._hasTableEntry(table, element))) return false;
      _HashSet$()._setTableEntry(table, element, 0);
      this[_length] = dart.notNull(this[_length]) + 1;
      this[_elements] = null;
      return true;
    }
    [_removeHashTableEntry](table, element) {
      if (table != null && dart.notNull(_HashSet$()._hasTableEntry(table, element))) {
        _HashSet$()._deleteTableEntry(table, element);
        this[_length] = dart.notNull(this[_length]) - 1;
        this[_elements] = null;
        return true;
      } else {
        return false;
      }
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
    static _hasTableEntry(table, key) {
      let entry = table[key];
      return entry != null;
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
        if (dart.equals(bucket[i], element)) return i;
      }
      return -1;
    }
    static _newHashTable() {
      let table = Object.create(null);
      let temporaryKey = '<non-identifier-key>';
      _HashSet$()._setTableEntry(table, temporaryKey, table);
      _HashSet$()._deleteTableEntry(table, temporaryKey);
      return table;
    }
  }
  _HashSet[dart.implements] = () => [HashSet$(E)];
  dart.setSignature(_HashSet, {
    constructors: () => ({_HashSet: [_HashSet$(E), []]}),
    methods: () => ({
      contains: [core.bool, [core.Object]],
      [_contains]: [core.bool, [core.Object]],
      add: [core.bool, [E]],
      [_add]: [core.bool, [E]],
      remove: [core.bool, [core.Object]],
      [_remove]: [core.bool, [core.Object]],
      [_computeElements]: [core.List, []],
      [_addHashTableEntry]: [core.bool, [dart.dynamic, E]],
      [_removeHashTableEntry]: [core.bool, [dart.dynamic, core.Object]],
      [_computeHashCode]: [core.int, [dart.dynamic]],
      [_getBucket]: [core.List, [dart.dynamic, dart.dynamic]],
      [_findBucketIndex]: [core.int, [dart.dynamic, dart.dynamic]]
    }),
    statics: () => ({
      _isStringElement: [core.bool, [dart.dynamic]],
      _isNumericElement: [core.bool, [dart.dynamic]],
      _hasTableEntry: [core.bool, [dart.dynamic, dart.dynamic]],
      _setTableEntry: [dart.void, [dart.dynamic, dart.dynamic, dart.dynamic]],
      _deleteTableEntry: [dart.void, [dart.dynamic, dart.dynamic]],
      _newHashTable: [dart.dynamic, []]
    }),
    names: ['_isStringElement', '_isNumericElement', '_hasTableEntry', '_setTableEntry', '_deleteTableEntry', '_newHashTable']
  });
  dart.defineExtensionMembers(_HashSet, [
    'contains',
    'iterator',
    'length',
    'isEmpty',
    'isNotEmpty'
  ]);
  return _HashSet;
});
let _HashSet = _HashSet$();
// /* Incoming: _IdentityHashSet._newSet (MethodElementImpl @ dart:collection), HashSet. (ConstructorElementImpl @ dart:collection/hash_set.dart), HashSet.identity (ConstructorElementImpl @ dart:collection/hash_set.dart) */
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
// /* Incoming: _CustomHashSet. (ConstructorElementImpl @ dart:collection), _CustomHashSet._newSet (MethodElementImpl @ dart:collection), _CustomHashSet.add (MethodElementImpl @ dart:collection), _CustomHashSet.contains (MethodElementImpl @ dart:collection), _CustomHashSet.lookup (MethodElementImpl @ dart:collection), _CustomHashSet.remove (MethodElementImpl @ dart:collection), HashSet. (ConstructorElementImpl @ dart:collection/hash_set.dart) */
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
    remove(object) {
      if (!dart.notNull(this[_validKey](object))) return false;
      return super[_remove](object);
    }
  }
  dart.setSignature(_CustomHashSet, {
    constructors: () => ({_CustomHashSet: [_CustomHashSet$(E), [_Equality$(E), _Hasher$(E), dart.functionType(core.bool, [core.Object])]]}),
    methods: () => ({add: [core.bool, [E]]})
  });
  dart.defineExtensionMembers(_CustomHashSet, ['contains']);
  return _CustomHashSet;
});
let _CustomHashSet = _CustomHashSet$();
// /* Incoming: _HashSet.iterator (FieldElementImpl @ dart:collection), HashSetIterator. (ConstructorElementImpl @ dart:collection) */
const HashSetIterator$ = dart.generic(function(E) {
  class HashSetIterator extends core.Object {
    HashSetIterator(set, elements) {
      this[_set] = set;
      this[_elements] = elements;
      this[_offset] = 0;
      this[_current] = null;
    }
    moveNext() {
      let elements = this[_elements];
      let offset = this[_offset];
      if (elements !== dart.dload(this[_set], _elements)) {
        dart.throw(new core.ConcurrentModificationError(this[_set]));
      } else if (dart.notNull(offset) >= elements.length) {
        this[_current] = null;
        return false;
      } else {
        this[_current] = dart.as(elements[offset], E);
        this[_offset] = dart.notNull(offset) + 1;
        return true;
      }
    }
  }
  HashSetIterator[dart.implements] = () => [core.Iterator$(E)];
  dart.setSignature(HashSetIterator, {
    constructors: () => ({HashSetIterator: [HashSetIterator$(E), [dart.dynamic, core.List]]}),
    methods: () => ({moveNext: [core.bool, []]})
  });
  return HashSetIterator;
});
let HashSetIterator = HashSetIterator$();
const _newSet = Symbol('_newSet');
const _unsupported = Symbol('_unsupported');
const _lookup = Symbol('_lookup');
const _filterWhere = Symbol('_filterWhere');
// /* Incoming: _LinkedHashSet. (ConstructorElementImpl @ dart:collection), _LinkedHashSet._newSet (MethodElementImpl @ dart:collection), _LinkedHashSet.iterator (FieldElementImpl @ dart:collection), _LinkedHashSet.lookup (MethodElementImpl @ dart:collection), _LinkedHashSet.forEach (MethodElementImpl @ dart:collection), _LinkedHashSet._filterWhere (MethodElementImpl @ dart:collection), _LinkedIdentityHashSet (ClassElementImpl @ dart:collection), _LinkedCustomHashSet (ClassElementImpl @ dart:collection), LinkedHashSet. (ConstructorElementImpl @ dart:collection/linked_hash_set.dart) */
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
  dart.defineExtensionMembers(_LinkedHashSet, [
    'contains',
    'iterator',
    'length',
    'isEmpty',
    'isNotEmpty',
    'last'
  ]);
  return _LinkedHashSet;
});
let _LinkedHashSet = _LinkedHashSet$();
// /* Incoming: _LinkedIdentityHashSet._newSet (MethodElementImpl @ dart:collection), LinkedHashSet. (ConstructorElementImpl @ dart:collection/linked_hash_set.dart), LinkedHashSet.identity (ConstructorElementImpl @ dart:collection/linked_hash_set.dart) */
const _LinkedIdentityHashSet$ = dart.generic(function(E) {
  class _LinkedIdentityHashSet extends _LinkedHashSet$(E) {
    _LinkedIdentityHashSet() {
      super._LinkedHashSet();
    }
  }
  return _LinkedIdentityHashSet;
});
let _LinkedIdentityHashSet = _LinkedIdentityHashSet$();
// /* Incoming: _LinkedCustomHashSet. (ConstructorElementImpl @ dart:collection), _LinkedCustomHashSet._newSet (MethodElementImpl @ dart:collection), _LinkedCustomHashSet.add (MethodElementImpl @ dart:collection), _LinkedCustomHashSet.contains (MethodElementImpl @ dart:collection), _LinkedCustomHashSet.lookup (MethodElementImpl @ dart:collection), _LinkedCustomHashSet.remove (MethodElementImpl @ dart:collection), _LinkedCustomHashSet.containsAll (MethodElementImpl @ dart:collection), _LinkedCustomHashSet.removeAll (MethodElementImpl @ dart:collection), LinkedHashSet. (ConstructorElementImpl @ dart:collection/linked_hash_set.dart) */
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
    remove(object) {
      if (!dart.notNull(this[_validKey](object))) return false;
      return super[_remove](object);
    }
  }
  dart.setSignature(_LinkedCustomHashSet, {
    constructors: () => ({_LinkedCustomHashSet: [_LinkedCustomHashSet$(E), [_Equality$(E), _Hasher$(E), dart.functionType(core.bool, [core.Object])]]}),
    methods: () => ({add: [core.bool, [E]]})
  });
  dart.defineExtensionMembers(_LinkedCustomHashSet, ['contains']);
  return _LinkedCustomHashSet;
});
let _LinkedCustomHashSet = _LinkedCustomHashSet$();
// /* Incoming: _LinkedHashSet._first (FieldElementImpl @ dart:collection), _LinkedHashSet._last (FieldElementImpl @ dart:collection), cell (LocalVariableElementImpl @ dart:collection), _LinkedHashSet.contains (MethodElementImpl @ dart:collection), cell (LocalVariableElementImpl @ dart:collection), cell (LocalVariableElementImpl @ dart:collection), _LinkedHashSet.forEach (MethodElementImpl @ dart:collection), _LinkedHashSet.first (FieldElementImpl @ dart:collection), _LinkedHashSet.last (FieldElementImpl @ dart:collection), cell (LocalVariableElementImpl @ dart:collection), _LinkedHashSet._add (MethodElementImpl @ dart:collection), cell (LocalVariableElementImpl @ dart:collection), cell (LocalVariableElementImpl @ dart:collection), _LinkedHashSet._remove (MethodElementImpl @ dart:collection), cell (LocalVariableElementImpl @ dart:collection), _LinkedHashSet._filterWhere (MethodElementImpl @ dart:collection), element (LocalVariableElementImpl @ dart:collection), next (LocalVariableElementImpl @ dart:collection), _LinkedHashSet.clear (MethodElementImpl @ dart:collection), cell (LocalVariableElementImpl @ dart:collection), _LinkedHashSet._addHashTableEntry (MethodElementImpl @ dart:collection), cell (LocalVariableElementImpl @ dart:collection), _LinkedHashSet._removeHashTableEntry (MethodElementImpl @ dart:collection), _LinkedHashSet._newLinkedCell (MethodElementImpl @ dart:collection), cell (LocalVariableElementImpl @ dart:collection), last (LocalVariableElementImpl @ dart:collection), _LinkedHashSet._unlinkCell (MethodElementImpl @ dart:collection), previous (LocalVariableElementImpl @ dart:collection), next (LocalVariableElementImpl @ dart:collection), cell (LocalVariableElementImpl @ dart:collection), _LinkedHashSet._findBucketIndex (MethodElementImpl @ dart:collection), cell (LocalVariableElementImpl @ dart:collection), _LinkedIdentityHashSet._findBucketIndex (MethodElementImpl @ dart:collection), cell (LocalVariableElementImpl @ dart:collection), _LinkedCustomHashSet._findBucketIndex (MethodElementImpl @ dart:collection), LinkedHashSetCell._next (FieldElementImpl @ dart:collection), LinkedHashSetCell._previous (FieldElementImpl @ dart:collection), LinkedHashSetCell. (ConstructorElementImpl @ dart:collection), LinkedHashSetIterator._cell (FieldElementImpl @ dart:collection), LinkedHashSetIterator. (ConstructorElementImpl @ dart:collection), LinkedHashSetIterator.moveNext (MethodElementImpl @ dart:collection) */
class LinkedHashSetCell extends core.Object {
  LinkedHashSetCell(element) {
    this[_element] = element;
    this[_next] = null;
    this[_previous] = null;
  }
}
dart.setSignature(LinkedHashSetCell, {
  constructors: () => ({LinkedHashSetCell: [LinkedHashSetCell, [dart.dynamic]]})
});
// /* Incoming: _LinkedHashSet.iterator (FieldElementImpl @ dart:collection), LinkedHashSetIterator. (ConstructorElementImpl @ dart:collection) */
const LinkedHashSetIterator$ = dart.generic(function(E) {
  class LinkedHashSetIterator extends core.Object {
    LinkedHashSetIterator(set, modifications) {
      this[_set] = set;
      this[_modifications] = modifications;
      this[_cell] = null;
      this[_current] = null;
      this[_cell] = dart.as(dart.dload(this[_set], _first), LinkedHashSetCell);
    }
    moveNext() {
      if (!dart.equals(this[_modifications], dart.dload(this[_set], _modifications))) {
        dart.throw(new core.ConcurrentModificationError(this[_set]));
      } else if (this[_cell] == null) {
        this[_current] = null;
        return false;
      } else {
        this[_current] = dart.as(this[_cell][_element], E);
        this[_cell] = this[_cell][_next];
        return true;
      }
    }
  }
  LinkedHashSetIterator[dart.implements] = () => [core.Iterator$(E)];
  dart.setSignature(LinkedHashSetIterator, {
    constructors: () => ({LinkedHashSetIterator: [LinkedHashSetIterator$(E), [dart.dynamic, core.int]]}),
    methods: () => ({moveNext: [core.bool, []]})
  });
  return LinkedHashSetIterator;
});
let LinkedHashSetIterator = LinkedHashSetIterator$();
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
exports.LinkedList$ = LinkedList$;
exports.LinkedList = LinkedList;
exports.LinkedListEntry$ = LinkedListEntry$;
exports.LinkedListEntry = LinkedListEntry;
exports.ListMixin$ = ListMixin$;
exports.ListMixin = ListMixin;
exports.ListBase$ = ListBase$;
exports.ListBase = ListBase;
exports.MapMixin$ = MapMixin$;
exports.MapMixin = MapMixin;
exports.Maps = Maps;
exports.Queue$ = Queue$;
exports.Queue = Queue;
exports.DoubleLinkedQueueEntry$ = DoubleLinkedQueueEntry$;
exports.DoubleLinkedQueueEntry = DoubleLinkedQueueEntry;
exports.DoubleLinkedQueue$ = DoubleLinkedQueue$;
exports.DoubleLinkedQueue = DoubleLinkedQueue;
exports.ListQueue$ = ListQueue$;
exports.ListQueue = ListQueue;
exports.SplayTreeMap$ = SplayTreeMap$;
exports.SplayTreeMap = SplayTreeMap;
exports.SplayTreeSet$ = SplayTreeSet$;
exports.SplayTreeSet = SplayTreeSet;
exports.HashMapKeyIterable$ = HashMapKeyIterable$;
exports.HashMapKeyIterable = HashMapKeyIterable;
exports.HashMapKeyIterator$ = HashMapKeyIterator$;
exports.HashMapKeyIterator = HashMapKeyIterator;
exports.LinkedHashMapCell = LinkedHashMapCell;
exports.LinkedHashMapKeyIterable$ = LinkedHashMapKeyIterable$;
exports.LinkedHashMapKeyIterable = LinkedHashMapKeyIterable;
exports.LinkedHashMapKeyIterator$ = LinkedHashMapKeyIterator$;
exports.LinkedHashMapKeyIterator = LinkedHashMapKeyIterator;
exports.HashSetIterator$ = HashSetIterator$;
exports.HashSetIterator = HashSetIterator;
exports.LinkedHashSetCell = LinkedHashSetCell;
exports.LinkedHashSetIterator$ = LinkedHashSetIterator$;
exports.LinkedHashSetIterator = LinkedHashSetIterator;
