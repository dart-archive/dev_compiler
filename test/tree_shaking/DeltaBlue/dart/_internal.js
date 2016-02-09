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
let collection = require("dart/collection");
let _interceptors = require("dart/_interceptors");
let _js_primitives = require("dart/_js_primitives");
let dartx = dart.dartx;
// /* Incoming: ListIterable (ClassElementImpl @ dart:_internal/iterable.dart), SubListIterable (ClassElementImpl @ dart:_internal/iterable.dart), MappedIterable. (ConstructorElementImpl @ dart:_internal/iterable.dart), EfficientLengthMappedIterable (ClassElementImpl @ dart:_internal/iterable.dart), MappedListIterable (ClassElementImpl @ dart:_internal/iterable.dart), TakeIterable. (ConstructorElementImpl @ dart:_internal/iterable.dart), EfficientLengthTakeIterable (ClassElementImpl @ dart:_internal/iterable.dart), SkipIterable. (ConstructorElementImpl @ dart:_internal/iterable.dart), EfficientLengthSkipIterable (ClassElementImpl @ dart:_internal/iterable.dart), EmptyIterable (ClassElementImpl @ dart:_internal/iterable.dart), IterableMixinWorkaround.replaceRangeList (MethodElementImpl @ dart:_internal/iterable.dart), IterableMixinWorkaround.insertAllList (MethodElementImpl @ dart:_internal/iterable.dart), _ListIndicesIterable (ClassElementImpl @ dart:_internal/list.dart), ReversedListIterable (ClassElementImpl @ dart:_internal/list.dart), HashMapKeyIterable (ClassElementImpl @ dart:collection), LinkedHashMapKeyIterable (ClassElementImpl @ dart:collection), _HashSet (ClassElementImpl @ dart:collection), _IdentityHashSet (ClassElementImpl @ dart:collection), _CustomHashSet (ClassElementImpl @ dart:collection), _LinkedHashSet (ClassElementImpl @ dart:collection), _LinkedIdentityHashSet (ClassElementImpl @ dart:collection), _LinkedCustomHashSet (ClassElementImpl @ dart:collection), _HashSetBase (ClassElementImpl @ dart:collection/hash_set.dart), HashSet (ClassElementImpl @ dart:collection/hash_set.dart), IterableMixin.length (FieldElementImpl @ dart:collection/iterable.dart), IterableBase.length (FieldElementImpl @ dart:collection/iterable.dart), LinkedHashSet (ClassElementImpl @ dart:collection/linked_hash_set.dart), ListMixin.replaceRange (MethodElementImpl @ dart:collection/list.dart), ListMixin.insertAll (MethodElementImpl @ dart:collection/list.dart), _MapBaseValueIterable (ClassElementImpl @ dart:collection/maps.dart), Queue (ClassElementImpl @ dart:collection/queue.dart), DoubleLinkedQueue (ClassElementImpl @ dart:collection/queue.dart), ListQueue (ClassElementImpl @ dart:collection/queue.dart), ListQueue.from (ConstructorElementImpl @ dart:collection/queue.dart), SetMixin (ClassElementImpl @ dart:collection/set.dart), SetBase (ClassElementImpl @ dart:collection/set.dart), _SplayTreeKeyIterable (ClassElementImpl @ dart:collection/splay_tree.dart), _SplayTreeValueIterable (ClassElementImpl @ dart:collection/splay_tree.dart), _JsonMapKeyIterable (ClassElementImpl @ dart:convert), _GeneratorIterable (ClassElementImpl @ dart:core/iterable.dart), Set (ClassElementImpl @ dart:core/set.dart) */
class EfficientLength extends core.Object {}
// /* Incoming: ListIterable. (ConstructorElementImpl @ dart:_internal/iterable.dart), ListIterable.iterator (FieldElementImpl @ dart:_internal/iterable.dart), length (LocalVariableElementImpl @ dart:_internal/iterable.dart), ListIterable.forEach (MethodElementImpl @ dart:_internal/iterable.dart), length (LocalVariableElementImpl @ dart:_internal/iterable.dart), ListIterable.contains (MethodElementImpl @ dart:_internal/iterable.dart), length (LocalVariableElementImpl @ dart:_internal/iterable.dart), ListIterable.every (MethodElementImpl @ dart:_internal/iterable.dart), length (LocalVariableElementImpl @ dart:_internal/iterable.dart), ListIterable.any (MethodElementImpl @ dart:_internal/iterable.dart), length (LocalVariableElementImpl @ dart:_internal/iterable.dart), ListIterable.firstWhere (MethodElementImpl @ dart:_internal/iterable.dart), length (LocalVariableElementImpl @ dart:_internal/iterable.dart), ListIterable.lastWhere (MethodElementImpl @ dart:_internal/iterable.dart), length (LocalVariableElementImpl @ dart:_internal/iterable.dart), ListIterable.singleWhere (MethodElementImpl @ dart:_internal/iterable.dart), length (LocalVariableElementImpl @ dart:_internal/iterable.dart), ListIterable.join (MethodElementImpl @ dart:_internal/iterable.dart), ListIterable.where (MethodElementImpl @ dart:_internal/iterable.dart), ListIterable.map (MethodElementImpl @ dart:_internal/iterable.dart), length (LocalVariableElementImpl @ dart:_internal/iterable.dart), ListIterable.reduce (MethodElementImpl @ dart:_internal/iterable.dart), length (LocalVariableElementImpl @ dart:_internal/iterable.dart), ListIterable.fold (MethodElementImpl @ dart:_internal/iterable.dart), ListIterable.skip (MethodElementImpl @ dart:_internal/iterable.dart), ListIterable.skipWhile (MethodElementImpl @ dart:_internal/iterable.dart), ListIterable.take (MethodElementImpl @ dart:_internal/iterable.dart), ListIterable.takeWhile (MethodElementImpl @ dart:_internal/iterable.dart), SubListIterable (ClassElementImpl @ dart:_internal/iterable.dart), MappedListIterable (ClassElementImpl @ dart:_internal/iterable.dart), _ListIndicesIterable (ClassElementImpl @ dart:_internal/list.dart), ReversedListIterable (ClassElementImpl @ dart:_internal/list.dart), _JsonMapKeyIterable (ClassElementImpl @ dart:convert) */
const ListIterable$ = dart.generic(function(E) {
  class ListIterable extends collection.IterableBase$(E) {
    ListIterable() {
      super.IterableBase();
    }
    get iterator() {
      return new (ListIterator$(E))(this);
    }
    contains(element) {
      let length = this.length;
      for (let i = 0; i < dart.notNull(length); i++) {
        if (dart.equals(this.elementAt(i), element)) return true;
        if (length != this.length) {
          dart.throw(new core.ConcurrentModificationError(this));
        }
      }
      return false;
    }
  }
  ListIterable[dart.implements] = () => [EfficientLength];
  dart.setSignature(ListIterable, {
    constructors: () => ({ListIterable: [ListIterable$(E), []]})
  });
  dart.defineExtensionMembers(ListIterable, ['contains', 'iterator']);
  return ListIterable;
});
let ListIterable = ListIterable$();
const _iterable = dart.JsSymbol('_iterable');
const _start = dart.JsSymbol('_start');
const _endOrLength = dart.JsSymbol('_endOrLength');
// /* Incoming: ListIterable.skip (MethodElementImpl @ dart:_internal/iterable.dart), ListIterable.take (MethodElementImpl @ dart:_internal/iterable.dart), SubListIterable. (ConstructorElementImpl @ dart:_internal/iterable.dart), SubListIterable.elementAt (MethodElementImpl @ dart:_internal/iterable.dart), SubListIterable.skip (MethodElementImpl @ dart:_internal/iterable.dart), SubListIterable.take (MethodElementImpl @ dart:_internal/iterable.dart), SubListIterable.toList (MethodElementImpl @ dart:_internal/iterable.dart), IterableMixinWorkaround.takeList (MethodElementImpl @ dart:_internal/iterable.dart), IterableMixinWorkaround.skipList (MethodElementImpl @ dart:_internal/iterable.dart), IterableMixinWorkaround.getRangeList (MethodElementImpl @ dart:_internal/iterable.dart), ListMapView.values (FieldElementImpl @ dart:_internal/list.dart), ListMixin.skip (MethodElementImpl @ dart:collection/list.dart), ListMixin.take (MethodElementImpl @ dart:collection/list.dart), ListMixin.getRange (MethodElementImpl @ dart:collection/list.dart) */
const SubListIterable$ = dart.generic(function(E) {
  class SubListIterable extends ListIterable$(E) {
    SubListIterable(iterable, start, endOrLength) {
      this[_iterable] = iterable;
      this[_start] = start;
      this[_endOrLength] = endOrLength;
      super.ListIterable();
      core.RangeError.checkNotNegative(this[_start], "start");
      if (this[_endOrLength] != null) {
        core.RangeError.checkNotNegative(this[_endOrLength], "end");
        if (dart.notNull(this[_start]) > dart.notNull(this[_endOrLength])) {
          dart.throw(new core.RangeError.range(this[_start], 0, this[_endOrLength], "start"));
        }
      }
    }
    get length() {
      let length = this[_iterable][dartx.length];
      if (dart.notNull(this[_start]) >= dart.notNull(length)) return 0;
      if (this[_endOrLength] == null || dart.notNull(this[_endOrLength]) >= dart.notNull(length)) {
        return dart.notNull(length) - dart.notNull(this[_start]);
      }
      return dart.notNull(this[_endOrLength]) - dart.notNull(this[_start]);
    }
  }
  dart.setSignature(SubListIterable, {
    constructors: () => ({SubListIterable: [SubListIterable$(E), [core.Iterable$(E), core.int, core.int]]})
  });
  dart.defineExtensionMembers(SubListIterable, ['length']);
  return SubListIterable;
});
let SubListIterable = SubListIterable$();
const _length = dart.JsSymbol('_length');
const _index = dart.JsSymbol('_index');
const _current = dart.JsSymbol('_current');
// /* Incoming: JSArray.iterator (FieldElementImpl @ dart:_interceptors/js_array.dart), ListIterable.iterator (FieldElementImpl @ dart:_internal/iterable.dart), ListIterator. (ConstructorElementImpl @ dart:_internal/iterable.dart), ListMixin.iterator (FieldElementImpl @ dart:collection/list.dart) */
const ListIterator$ = dart.generic(function(E) {
  class ListIterator extends core.Object {
    ListIterator(iterable) {
      this[_iterable] = iterable;
      this[_length] = iterable[dartx.length];
      this[_index] = 0;
      this[_current] = null;
    }
    moveNext() {
      let length = this[_iterable][dartx.length];
      if (this[_length] != length) {
        dart.throw(new core.ConcurrentModificationError(this[_iterable]));
      }
      if (dart.notNull(this[_index]) >= dart.notNull(length)) {
        this[_current] = null;
        return false;
      }
      this[_current] = this[_iterable][dartx.elementAt](this[_index]);
      this[_index] = dart.notNull(this[_index]) + 1;
      return true;
    }
  }
  ListIterator[dart.implements] = () => [core.Iterator$(E)];
  dart.setSignature(ListIterator, {
    constructors: () => ({ListIterator: [ListIterator$(E), [core.Iterable$(E)]]}),
    methods: () => ({moveNext: [core.bool, []]})
  });
  return ListIterator;
});
let ListIterator = ListIterator$();
const _Transformation$ = dart.generic(function(S, T) {
  const _Transformation = dart.typedef('_Transformation', () => dart.functionType(T, [S]));
  return _Transformation;
});
let _Transformation = _Transformation$();
const _f = dart.JsSymbol('_f');
// /* Incoming: MappedIterable. (ConstructorElementImpl @ dart:_internal/iterable.dart), MappedIterable._ (ConstructorElementImpl @ dart:_internal/iterable.dart), EfficientLengthMappedIterable (ClassElementImpl @ dart:_internal/iterable.dart), IterableMixinWorkaround.map (MethodElementImpl @ dart:_internal/iterable.dart), _HashMap.values (FieldElementImpl @ dart:collection), _LinkedHashMap.values (FieldElementImpl @ dart:collection), IterableMixin.map (MethodElementImpl @ dart:collection/iterable.dart), IterableBase.map (MethodElementImpl @ dart:collection/iterable.dart), _JsonMap.values (FieldElementImpl @ dart:convert) */
const MappedIterable$ = dart.generic(function(S, T) {
  class MappedIterable extends collection.IterableBase$(T) {
    static new(iterable, func) {
      if (dart.is(iterable, EfficientLength)) {
        return new (EfficientLengthMappedIterable$(S, T))(iterable, func);
      }
      return new (MappedIterable$(S, T))._(dart.as(iterable, core.Iterable$(S)), func);
    }
    _(iterable, f) {
      this[_iterable] = iterable;
      this[_f] = f;
      super.IterableBase();
    }
    get iterator() {
      return new (MappedIterator$(S, T))(this[_iterable][dartx.iterator], this[_f]);
    }
    get length() {
      return this[_iterable][dartx.length];
    }
  }
  dart.defineNamedConstructor(MappedIterable, '_');
  dart.setSignature(MappedIterable, {
    constructors: () => ({
      new: [MappedIterable$(S, T), [core.Iterable, dart.functionType(T, [S])]],
      _: [MappedIterable$(S, T), [core.Iterable$(S), dart.functionType(T, [S])]]
    })
  });
  dart.defineExtensionMembers(MappedIterable, ['iterator', 'length']);
  return MappedIterable;
});
let MappedIterable = MappedIterable$();
// /* Incoming: MappedIterable. (ConstructorElementImpl @ dart:_internal/iterable.dart), EfficientLengthMappedIterable. (ConstructorElementImpl @ dart:_internal/iterable.dart), SetMixin.map (MethodElementImpl @ dart:collection/set.dart) */
const EfficientLengthMappedIterable$ = dart.generic(function(S, T) {
  class EfficientLengthMappedIterable extends MappedIterable$(S, T) {
    EfficientLengthMappedIterable(iterable, func) {
      super._(dart.as(iterable, core.Iterable$(S)), func);
    }
  }
  EfficientLengthMappedIterable[dart.implements] = () => [EfficientLength];
  dart.setSignature(EfficientLengthMappedIterable, {
    constructors: () => ({EfficientLengthMappedIterable: [EfficientLengthMappedIterable$(S, T), [core.Iterable, dart.functionType(T, [S])]]})
  });
  return EfficientLengthMappedIterable;
});
let EfficientLengthMappedIterable = EfficientLengthMappedIterable$();
const _iterator = dart.JsSymbol('_iterator');
// /* Incoming: MappedIterable.iterator (FieldElementImpl @ dart:_internal/iterable.dart), MappedIterator. (ConstructorElementImpl @ dart:_internal/iterable.dart) */
const MappedIterator$ = dart.generic(function(S, T) {
  class MappedIterator extends core.Iterator$(T) {
    MappedIterator(iterator, f) {
      this[_iterator] = iterator;
      this[_f] = f;
      this[_current] = null;
    }
    moveNext() {
      if (dart.notNull(this[_iterator].moveNext())) {
        this[_current] = this[_f](this[_iterator].current);
        return true;
      }
      this[_current] = null;
      return false;
    }
  }
  dart.setSignature(MappedIterator, {
    constructors: () => ({MappedIterator: [MappedIterator$(S, T), [core.Iterator$(S), dart.functionType(T, [S])]]}),
    methods: () => ({moveNext: [core.bool, []]})
  });
  return MappedIterator;
});
let MappedIterator = MappedIterator$();
const _ElementPredicate$ = dart.generic(function(E) {
  const _ElementPredicate = dart.typedef('_ElementPredicate', () => dart.functionType(core.bool, [E]));
  return _ElementPredicate;
});
let _ElementPredicate = _ElementPredicate$();
// /* Incoming: WhereIterable.iterator (FieldElementImpl @ dart:_internal/iterable.dart), WhereIterator. (ConstructorElementImpl @ dart:_internal/iterable.dart) */
const WhereIterator$ = dart.generic(function(E) {
  class WhereIterator extends core.Iterator$(E) {
    WhereIterator(iterator, f) {
      this[_iterator] = iterator;
      this[_f] = f;
    }
    moveNext() {
      while (dart.notNull(this[_iterator].moveNext())) {
        if (dart.notNull(this[_f](this[_iterator].current))) {
          return true;
        }
      }
      return false;
    }
  }
  dart.setSignature(WhereIterator, {
    constructors: () => ({WhereIterator: [WhereIterator$(E), [core.Iterator$(E), dart.functionType(core.bool, [E])]]}),
    methods: () => ({moveNext: [core.bool, []]})
  });
  return WhereIterator;
});
let WhereIterator = WhereIterator$();
const _ExpandFunction$ = dart.generic(function(S, T) {
  const _ExpandFunction = dart.typedef('_ExpandFunction', () => dart.functionType(core.Iterable$(T), [S]));
  return _ExpandFunction;
});
let _ExpandFunction = _ExpandFunction$();
const _currentExpansion = dart.JsSymbol('_currentExpansion');
// /* Incoming: ExpandIterable.iterator (FieldElementImpl @ dart:_internal/iterable.dart), ExpandIterator. (ConstructorElementImpl @ dart:_internal/iterable.dart) */
const ExpandIterator$ = dart.generic(function(S, T) {
  class ExpandIterator extends core.Object {
    ExpandIterator(iterator, f) {
      this[_iterator] = iterator;
      this[_f] = f;
      this[_currentExpansion] = dart.const(new (EmptyIterator$(T))());
      this[_current] = null;
    }
    moveNext() {
      if (this[_currentExpansion] == null) return false;
      while (!dart.notNull(this[_currentExpansion].moveNext())) {
        this[_current] = null;
        if (dart.notNull(this[_iterator].moveNext())) {
          this[_currentExpansion] = null;
          this[_currentExpansion] = dart.as(dart.dcall(this[_f], this[_iterator].current)[dartx.iterator], core.Iterator$(T));
        } else {
          return false;
        }
      }
      this[_current] = this[_currentExpansion].current;
      return true;
    }
  }
  ExpandIterator[dart.implements] = () => [core.Iterator$(T)];
  dart.setSignature(ExpandIterator, {
    constructors: () => ({ExpandIterator: [ExpandIterator$(S, T), [core.Iterator$(S), dart.functionType(core.Iterable$(T), [S])]]}),
    methods: () => ({moveNext: [core.bool, []]})
  });
  return ExpandIterator;
});
let ExpandIterator = ExpandIterator$();
const _remaining = dart.JsSymbol('_remaining');
// /* Incoming: TakeIterable.iterator (FieldElementImpl @ dart:_internal/iterable.dart), TakeIterator. (ConstructorElementImpl @ dart:_internal/iterable.dart) */
const TakeIterator$ = dart.generic(function(E) {
  class TakeIterator extends core.Iterator$(E) {
    TakeIterator(iterator, remaining) {
      this[_iterator] = iterator;
      this[_remaining] = remaining;
      dart.assert(typeof this[_remaining] == 'number' && dart.notNull(this[_remaining]) >= 0);
    }
    moveNext() {
      this[_remaining] = dart.notNull(this[_remaining]) - 1;
      if (dart.notNull(this[_remaining]) >= 0) {
        return this[_iterator].moveNext();
      }
      this[_remaining] = -1;
      return false;
    }
  }
  dart.setSignature(TakeIterator, {
    constructors: () => ({TakeIterator: [TakeIterator$(E), [core.Iterator$(E), core.int]]}),
    methods: () => ({moveNext: [core.bool, []]})
  });
  return TakeIterator;
});
let TakeIterator = TakeIterator$();
const _isFinished = dart.JsSymbol('_isFinished');
// /* Incoming: TakeWhileIterable.iterator (FieldElementImpl @ dart:_internal/iterable.dart), TakeWhileIterator. (ConstructorElementImpl @ dart:_internal/iterable.dart) */
const TakeWhileIterator$ = dart.generic(function(E) {
  class TakeWhileIterator extends core.Iterator$(E) {
    TakeWhileIterator(iterator, f) {
      this[_iterator] = iterator;
      this[_f] = f;
      this[_isFinished] = false;
    }
    moveNext() {
      if (dart.notNull(this[_isFinished])) return false;
      if (!dart.notNull(this[_iterator].moveNext()) || !dart.notNull(this[_f](this[_iterator].current))) {
        this[_isFinished] = true;
        return false;
      }
      return true;
    }
  }
  dart.setSignature(TakeWhileIterator, {
    constructors: () => ({TakeWhileIterator: [TakeWhileIterator$(E), [core.Iterator$(E), dart.functionType(core.bool, [E])]]}),
    methods: () => ({moveNext: [core.bool, []]})
  });
  return TakeWhileIterator;
});
let TakeWhileIterator = TakeWhileIterator$();
const _skipCount = dart.JsSymbol('_skipCount');
// /* Incoming: SkipIterable.iterator (FieldElementImpl @ dart:_internal/iterable.dart), SkipIterator. (ConstructorElementImpl @ dart:_internal/iterable.dart) */
const SkipIterator$ = dart.generic(function(E) {
  class SkipIterator extends core.Iterator$(E) {
    SkipIterator(iterator, skipCount) {
      this[_iterator] = iterator;
      this[_skipCount] = skipCount;
      dart.assert(typeof this[_skipCount] == 'number' && dart.notNull(this[_skipCount]) >= 0);
    }
    moveNext() {
      for (let i = 0; i < dart.notNull(this[_skipCount]); i++)
        this[_iterator].moveNext();
      this[_skipCount] = 0;
      return this[_iterator].moveNext();
    }
  }
  dart.setSignature(SkipIterator, {
    constructors: () => ({SkipIterator: [SkipIterator$(E), [core.Iterator$(E), core.int]]}),
    methods: () => ({moveNext: [core.bool, []]})
  });
  return SkipIterator;
});
let SkipIterator = SkipIterator$();
const _hasSkipped = dart.JsSymbol('_hasSkipped');
// /* Incoming: SkipWhileIterable.iterator (FieldElementImpl @ dart:_internal/iterable.dart), SkipWhileIterator. (ConstructorElementImpl @ dart:_internal/iterable.dart) */
const SkipWhileIterator$ = dart.generic(function(E) {
  class SkipWhileIterator extends core.Iterator$(E) {
    SkipWhileIterator(iterator, f) {
      this[_iterator] = iterator;
      this[_f] = f;
      this[_hasSkipped] = false;
    }
    moveNext() {
      if (!dart.notNull(this[_hasSkipped])) {
        this[_hasSkipped] = true;
        while (dart.notNull(this[_iterator].moveNext())) {
          if (!dart.notNull(this[_f](this[_iterator].current))) return true;
        }
      }
      return this[_iterator].moveNext();
    }
  }
  dart.setSignature(SkipWhileIterator, {
    constructors: () => ({SkipWhileIterator: [SkipWhileIterator$(E), [core.Iterator$(E), dart.functionType(core.bool, [E])]]}),
    methods: () => ({moveNext: [core.bool, []]})
  });
  return SkipWhileIterator;
});
let SkipWhileIterator = SkipWhileIterator$();
// /* Incoming: ExpandIterator._currentExpansion (FieldElementImpl @ dart:_internal/iterable.dart), EmptyIterable.iterator (FieldElementImpl @ dart:_internal/iterable.dart), EmptyIterator. (ConstructorElementImpl @ dart:_internal/iterable.dart) */
const EmptyIterator$ = dart.generic(function(E) {
  class EmptyIterator extends core.Object {
    EmptyIterator() {
    }
    moveNext() {
      return false;
    }
  }
  EmptyIterator[dart.implements] = () => [core.Iterator$(E)];
  dart.setSignature(EmptyIterator, {
    constructors: () => ({EmptyIterator: [EmptyIterator$(E), []]}),
    methods: () => ({moveNext: [core.bool, []]})
  });
  return EmptyIterator;
});
let EmptyIterator = EmptyIterator$();
// /* Incoming: JSArray.insertAll (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.setAll (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.removeWhere (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.retainWhere (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.where (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.expand (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.map (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.take (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.takeWhile (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.skip (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.skipWhile (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.reduce (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.fold (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.firstWhere (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.lastWhere (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.singleWhere (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.getRange (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.setRange (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.fillRange (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.replaceRange (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.any (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.every (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.reversed (FieldElementImpl @ dart:_interceptors/js_array.dart), JSArray.sort (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.shuffle (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.indexOf (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.lastIndexOf (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.asMap (MethodElementImpl @ dart:_interceptors/js_array.dart) */
const IterableMixinWorkaround$ = dart.generic(function(T) {
  class IterableMixinWorkaround extends core.Object {
    static contains(iterable, element) {
      for (let e of iterable) {
        if (dart.equals(e, element)) return true;
      }
      return false;
    }
    static indexOfList(list, element, start) {
      return Lists.indexOf(list, element, start, list[dartx.length]);
    }
    static _rangeCheck(list, start, end) {
      core.RangeError.checkValidRange(start, end, list[dartx.length]);
    }
    static setRangeList(list, start, end, from, skipCount) {
      IterableMixinWorkaround$()._rangeCheck(list, start, end);
      let length = dart.notNull(end) - dart.notNull(start);
      if (length == 0) return;
      if (dart.notNull(skipCount) < 0) dart.throw(new core.ArgumentError(skipCount));
      let otherList = null;
      let otherStart = null;
      if (dart.is(from, core.List)) {
        otherList = from;
        otherStart = skipCount;
      } else {
        otherList = from[dartx.skip](skipCount)[dartx.toList]({growable: false});
        otherStart = 0;
      }
      if (dart.notNull(otherStart) + length > dart.notNull(otherList[dartx.length])) {
        dart.throw(IterableElementError.tooFew());
      }
      Lists.copy(otherList, otherStart, list, start, length);
    }
  }
  dart.setSignature(IterableMixinWorkaround, {
    statics: () => ({
      contains: [core.bool, [core.Iterable, dart.dynamic]],
      indexOfList: [core.int, [core.List, dart.dynamic, core.int]],
      _rangeCheck: [dart.void, [core.List, core.int, core.int]],
      setRangeList: [dart.void, [core.List, core.int, core.int, core.Iterable, core.int]]
    }),
    names: ['contains', 'indexOfList', '_rangeCheck', 'setRangeList']
  });
  return IterableMixinWorkaround;
});
let IterableMixinWorkaround = IterableMixinWorkaround$();
// /* Incoming: Stream.reduce (MethodElementImpl @ dart:async/stream.dart), Stream.first (FieldElementImpl @ dart:async/stream.dart), Stream.last (FieldElementImpl @ dart:async/stream.dart), Stream.single (FieldElementImpl @ dart:async/stream.dart), Stream.firstWhere (MethodElementImpl @ dart:async/stream.dart), Stream.lastWhere (MethodElementImpl @ dart:async/stream.dart), Stream.singleWhere (MethodElementImpl @ dart:async/stream.dart), ListIterable.first (FieldElementImpl @ dart:_internal/iterable.dart), ListIterable.last (FieldElementImpl @ dart:_internal/iterable.dart), ListIterable.single (FieldElementImpl @ dart:_internal/iterable.dart), ListIterable.firstWhere (MethodElementImpl @ dart:_internal/iterable.dart), ListIterable.lastWhere (MethodElementImpl @ dart:_internal/iterable.dart), ListIterable.singleWhere (MethodElementImpl @ dart:_internal/iterable.dart), ListIterable.reduce (MethodElementImpl @ dart:_internal/iterable.dart), EmptyIterable.first (FieldElementImpl @ dart:_internal/iterable.dart), EmptyIterable.last (FieldElementImpl @ dart:_internal/iterable.dart), EmptyIterable.single (FieldElementImpl @ dart:_internal/iterable.dart), EmptyIterable.firstWhere (MethodElementImpl @ dart:_internal/iterable.dart), EmptyIterable.lastWhere (MethodElementImpl @ dart:_internal/iterable.dart), EmptyIterable.singleWhere (MethodElementImpl @ dart:_internal/iterable.dart), EmptyIterable.reduce (MethodElementImpl @ dart:_internal/iterable.dart), IterableMixinWorkaround.reduce (MethodElementImpl @ dart:_internal/iterable.dart), IterableMixinWorkaround.first (MethodElementImpl @ dart:_internal/iterable.dart), IterableMixinWorkaround.last (MethodElementImpl @ dart:_internal/iterable.dart), IterableMixinWorkaround.single (MethodElementImpl @ dart:_internal/iterable.dart), IterableMixinWorkaround.firstWhere (MethodElementImpl @ dart:_internal/iterable.dart), IterableMixinWorkaround.lastWhere (MethodElementImpl @ dart:_internal/iterable.dart), IterableMixinWorkaround.lastWhereList (MethodElementImpl @ dart:_internal/iterable.dart), IterableMixinWorkaround.singleWhere (MethodElementImpl @ dart:_internal/iterable.dart), IterableMixinWorkaround.setRangeList (MethodElementImpl @ dart:_internal/iterable.dart), IterableMixin.reduce (MethodElementImpl @ dart:collection/iterable.dart), IterableMixin.first (FieldElementImpl @ dart:collection/iterable.dart), IterableMixin.last (FieldElementImpl @ dart:collection/iterable.dart), IterableMixin.single (FieldElementImpl @ dart:collection/iterable.dart), IterableMixin.firstWhere (MethodElementImpl @ dart:collection/iterable.dart), IterableMixin.lastWhere (MethodElementImpl @ dart:collection/iterable.dart), IterableMixin.singleWhere (MethodElementImpl @ dart:collection/iterable.dart), IterableBase.reduce (MethodElementImpl @ dart:collection/iterable.dart), IterableBase.first (FieldElementImpl @ dart:collection/iterable.dart), IterableBase.last (FieldElementImpl @ dart:collection/iterable.dart), IterableBase.single (FieldElementImpl @ dart:collection/iterable.dart), IterableBase.firstWhere (MethodElementImpl @ dart:collection/iterable.dart), IterableBase.lastWhere (MethodElementImpl @ dart:collection/iterable.dart), IterableBase.singleWhere (MethodElementImpl @ dart:collection/iterable.dart), ListMixin.first (FieldElementImpl @ dart:collection/list.dart), ListMixin.last (FieldElementImpl @ dart:collection/list.dart), ListMixin.single (FieldElementImpl @ dart:collection/list.dart), ListMixin.firstWhere (MethodElementImpl @ dart:collection/list.dart), ListMixin.lastWhere (MethodElementImpl @ dart:collection/list.dart), ListMixin.singleWhere (MethodElementImpl @ dart:collection/list.dart), ListMixin.reduce (MethodElementImpl @ dart:collection/list.dart), ListMixin.removeLast (MethodElementImpl @ dart:collection/list.dart), ListMixin.setRange (MethodElementImpl @ dart:collection/list.dart), _DoubleLinkedQueueEntrySentinel.remove (MethodElementImpl @ dart:collection/queue.dart), _DoubleLinkedQueueEntrySentinel.element (FieldElementImpl @ dart:collection/queue.dart), DoubleLinkedQueue.single (FieldElementImpl @ dart:collection/queue.dart), ListQueue.first (FieldElementImpl @ dart:collection/queue.dart), ListQueue.last (FieldElementImpl @ dart:collection/queue.dart), ListQueue.single (FieldElementImpl @ dart:collection/queue.dart), ListQueue.removeFirst (MethodElementImpl @ dart:collection/queue.dart), ListQueue.removeLast (MethodElementImpl @ dart:collection/queue.dart), SetMixin.single (FieldElementImpl @ dart:collection/set.dart), SetMixin.reduce (MethodElementImpl @ dart:collection/set.dart), SetMixin.first (FieldElementImpl @ dart:collection/set.dart), SetMixin.last (FieldElementImpl @ dart:collection/set.dart), SetMixin.firstWhere (MethodElementImpl @ dart:collection/set.dart), SetMixin.lastWhere (MethodElementImpl @ dart:collection/set.dart), SetMixin.singleWhere (MethodElementImpl @ dart:collection/set.dart), SplayTreeSet.first (FieldElementImpl @ dart:collection/splay_tree.dart), SplayTreeSet.last (FieldElementImpl @ dart:collection/splay_tree.dart), SplayTreeSet.single (FieldElementImpl @ dart:collection/splay_tree.dart) */
class IterableElementError extends core.Object {
  static noElement() {
    return new core.StateError("No element");
  }
  static tooFew() {
    return new core.StateError("Too few elements");
  }
}
dart.setSignature(IterableElementError, {
  statics: () => ({
    noElement: [core.StateError, []],
    tooFew: [core.StateError, []]
  }),
  names: ['noElement', 'tooFew']
});
const __CastType0$ = dart.generic(function(S, T) {
  const __CastType0 = dart.typedef('__CastType0', () => dart.functionType(core.Iterable$(T), [S]));
  return __CastType0;
});
let __CastType0 = __CastType0$();
const __CastType2$ = dart.generic(function(T) {
  const __CastType2 = dart.typedef('__CastType2', () => dart.functionType(core.bool, [T]));
  return __CastType2;
});
let __CastType2 = __CastType2$();
// /* Incoming: NativeFloat32x4List (ClassElementImpl @ dart:_native_typed_data), NativeInt32x4List (ClassElementImpl @ dart:_native_typed_data), NativeFloat64x2List (ClassElementImpl @ dart:_native_typed_data), NativeTypedArrayOfDouble (ClassElementImpl @ dart:_native_typed_data), NativeTypedArrayOfInt (ClassElementImpl @ dart:_native_typed_data), NativeFloat32List (ClassElementImpl @ dart:_native_typed_data), NativeFloat64List (ClassElementImpl @ dart:_native_typed_data), NativeInt16List (ClassElementImpl @ dart:_native_typed_data), NativeInt32List (ClassElementImpl @ dart:_native_typed_data), NativeInt8List (ClassElementImpl @ dart:_native_typed_data), NativeUint16List (ClassElementImpl @ dart:_native_typed_data), NativeUint32List (ClassElementImpl @ dart:_native_typed_data), NativeUint8ClampedList (ClassElementImpl @ dart:_native_typed_data), NativeUint8List (ClassElementImpl @ dart:_native_typed_data), FixedLengthListBase (ClassElementImpl @ dart:_internal/list.dart) */
const FixedLengthListMixin$ = dart.generic(function(E) {
  class FixedLengthListMixin extends core.Object {
    set length(newLength) {
      dart.throw(new core.UnsupportedError("Cannot change the length of a fixed-length list"));
    }
    add(value) {
      dart.as(value, E);
      dart.throw(new core.UnsupportedError("Cannot add to a fixed-length list"));
    }
    remove(element) {
      dart.throw(new core.UnsupportedError("Cannot remove from a fixed-length list"));
    }
    clear() {
      dart.throw(new core.UnsupportedError("Cannot clear a fixed-length list"));
    }
  }
  dart.setSignature(FixedLengthListMixin, {
    methods: () => ({
      add: [dart.void, [E]],
      remove: [core.bool, [core.Object]],
      clear: [dart.void, []]
    })
  });
  return FixedLengthListMixin;
});
let FixedLengthListMixin = FixedLengthListMixin$();
const _values = dart.JsSymbol('_values');
// /* Incoming: IterableMixinWorkaround.asMapList (MethodElementImpl @ dart:_internal/iterable.dart), ListMapView. (ConstructorElementImpl @ dart:_internal/list.dart), ListMapView.toString (MethodElementImpl @ dart:_internal/list.dart), ListMixin.asMap (MethodElementImpl @ dart:collection/list.dart) */
const ListMapView$ = dart.generic(function(E) {
  class ListMapView extends core.Object {
    ListMapView(values) {
      this[_values] = values;
    }
    get(key) {
      return dart.notNull(this.containsKey(key)) ? this[_values][dartx.get](dart.as(key, core.int)) : null;
    }
    get length() {
      return this[_values][dartx.length];
    }
    get values() {
      return new (SubListIterable$(E))(this[_values], 0, null);
    }
    get isNotEmpty() {
      return this[_values][dartx.isNotEmpty];
    }
    containsKey(key) {
      return typeof key == 'number' && dart.notNull(key) >= 0 && dart.notNull(key) < dart.notNull(this.length);
    }
    set(key, value) {
      dart.as(value, E);
      dart.throw(new core.UnsupportedError("Cannot modify an unmodifiable map"));
      return value;
    }
    remove(key) {
      dart.throw(new core.UnsupportedError("Cannot modify an unmodifiable map"));
    }
    clear() {
      dart.throw(new core.UnsupportedError("Cannot modify an unmodifiable map"));
    }
    toString() {
      return collection.Maps.mapToString(this);
    }
  }
  ListMapView[dart.implements] = () => [core.Map$(core.int, E)];
  dart.setSignature(ListMapView, {
    constructors: () => ({ListMapView: [ListMapView$(E), [core.List$(E)]]}),
    methods: () => ({
      get: [E, [core.Object]],
      containsKey: [core.bool, [core.Object]],
      set: [dart.void, [core.int, E]],
      remove: [E, [core.Object]],
      clear: [dart.void, []]
    })
  });
  return ListMapView;
});
let ListMapView = ListMapView$();
function makeListFixedLength(growableList) {
  _interceptors.JSArray.markFixedList(growableList);
  return growableList;
}
dart.fn(makeListFixedLength, core.List, [core.List]);
// /* Incoming: JSArray.removeRange (MethodElementImpl @ dart:_interceptors/js_array.dart), IterableMixinWorkaround.indexOfList (MethodElementImpl @ dart:_internal/iterable.dart), IterableMixinWorkaround.lastIndexOfList (MethodElementImpl @ dart:_internal/iterable.dart), IterableMixinWorkaround.setRangeList (MethodElementImpl @ dart:_internal/iterable.dart) */
class Lists extends core.Object {
  static copy(src, srcStart, dst, dstStart, count) {
    if (dart.notNull(srcStart) < dart.notNull(dstStart)) {
      for (let i = dart.notNull(srcStart) + dart.notNull(count) - 1, j = dart.notNull(dstStart) + dart.notNull(count) - 1; i >= dart.notNull(srcStart); i--, j--) {
        dst[dartx.set](j, src[dartx.get](i));
      }
    } else {
      for (let i = srcStart, j = dstStart; dart.notNull(i) < dart.notNull(srcStart) + dart.notNull(count); i = dart.notNull(i) + 1, j = dart.notNull(j) + 1) {
        dst[dartx.set](j, src[dartx.get](i));
      }
    }
  }
  static indexOf(a, element, startIndex, endIndex) {
    if (dart.notNull(startIndex) >= dart.notNull(a[dartx.length])) {
      return -1;
    }
    if (dart.notNull(startIndex) < 0) {
      startIndex = 0;
    }
    for (let i = startIndex; dart.notNull(i) < dart.notNull(endIndex); i = dart.notNull(i) + 1) {
      if (dart.equals(a[dartx.get](i), element)) {
        return i;
      }
    }
    return -1;
  }
}
dart.setSignature(Lists, {
  statics: () => ({
    copy: [dart.void, [core.List, core.int, core.List, core.int, core.int]],
    indexOf: [core.int, [core.List, core.Object, core.int, core.int]]
  }),
  names: ['copy', 'indexOf']
});
exports.printToZone = null;
function printToConsole(line) {
  _js_primitives.printString(`${line}`);
}
dart.fn(printToConsole, dart.void, [core.String]);
const _name = dart.JsSymbol('_name');
// /* Incoming: Symbol. (ConstructorElementImpl @ dart:_internal/symbol.dart), Symbol.unvalidated (ConstructorElementImpl @ dart:_internal/symbol.dart), Symbol.validated (ConstructorElementImpl @ dart:_internal/symbol.dart), Symbol.== (MethodElementImpl @ dart:_internal/symbol.dart), Symbol.getName (MethodElementImpl @ dart:_internal/symbol.dart), _symbolToString (FunctionElementImpl @ dart:core), Symbol. (ConstructorElementImpl @ dart:core/symbol.dart) */
class Symbol extends core.Object {
  Symbol(name) {
    this[_name] = name;
  }
  toString() {
    return `Symbol("${this[_name]}")`;
  }
  static getName(symbol) {
    return symbol[_name];
  }
}
Symbol[dart.implements] = () => [core.Symbol];
dart.setSignature(Symbol, {
  constructors: () => ({Symbol: [Symbol, [core.String]]}),
  statics: () => ({getName: [core.String, [Symbol]]}),
  names: ['getName']
});
// Exports:
exports.EfficientLength = EfficientLength;
exports.ListIterable$ = ListIterable$;
exports.ListIterable = ListIterable;
exports.SubListIterable$ = SubListIterable$;
exports.SubListIterable = SubListIterable;
exports.ListIterator$ = ListIterator$;
exports.ListIterator = ListIterator;
exports.MappedIterable$ = MappedIterable$;
exports.MappedIterable = MappedIterable;
exports.EfficientLengthMappedIterable$ = EfficientLengthMappedIterable$;
exports.EfficientLengthMappedIterable = EfficientLengthMappedIterable;
exports.MappedIterator$ = MappedIterator$;
exports.MappedIterator = MappedIterator;
exports.WhereIterator$ = WhereIterator$;
exports.WhereIterator = WhereIterator;
exports.ExpandIterator$ = ExpandIterator$;
exports.ExpandIterator = ExpandIterator;
exports.TakeIterator$ = TakeIterator$;
exports.TakeIterator = TakeIterator;
exports.TakeWhileIterator$ = TakeWhileIterator$;
exports.TakeWhileIterator = TakeWhileIterator;
exports.SkipIterator$ = SkipIterator$;
exports.SkipIterator = SkipIterator;
exports.SkipWhileIterator$ = SkipWhileIterator$;
exports.SkipWhileIterator = SkipWhileIterator;
exports.EmptyIterator$ = EmptyIterator$;
exports.EmptyIterator = EmptyIterator;
exports.IterableMixinWorkaround$ = IterableMixinWorkaround$;
exports.IterableMixinWorkaround = IterableMixinWorkaround;
exports.IterableElementError = IterableElementError;
exports.FixedLengthListMixin$ = FixedLengthListMixin$;
exports.FixedLengthListMixin = FixedLengthListMixin;
exports.ListMapView$ = ListMapView$;
exports.ListMapView = ListMapView;
exports.makeListFixedLength = makeListFixedLength;
exports.Lists = Lists;
exports.printToConsole = printToConsole;
exports.Symbol = Symbol;
