(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './androidx-collection-collection.js', './kotlinx-atomicfu.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./androidx-collection-collection.js'), require('./kotlinx-atomicfu.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-runtime-runtime'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-runtime-runtime'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-runtime-runtime'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-compose-runtime-runtime'.");
    }
    if (typeof globalThis['androidx-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-runtime-runtime'. Its dependency 'androidx-collection-collection' was not found. Please, check whether 'androidx-collection-collection' is loaded prior to 'compose-multiplatform-core-compose-runtime-runtime'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-runtime-runtime'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'compose-multiplatform-core-compose-runtime-runtime'.");
    }
    globalThis['compose-multiplatform-core-compose-runtime-runtime'] = factory(typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core'], globalThis['androidx-collection-collection'], globalThis['kotlinx-atomicfu']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_androidx_collection_collection, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.h7;
  var isInterface = kotlin_kotlin.$_$.z6;
  var Unit_instance = kotlin_kotlin.$_$.c2;
  var initMetadataForInterface = kotlin_kotlin.$_$.u6;
  var initMetadataForClass = kotlin_kotlin.$_$.r6;
  var VOID = kotlin_kotlin.$_$.e;
  var THROW_CCE = kotlin_kotlin.$_$.v9;
  var Companion_instance = kotlin_kotlin.$_$.b2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.t1;
  var createFailure = kotlin_kotlin.$_$.ba;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var intercepted = kotlin_kotlin.$_$.j5;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var get = kotlin_kotlin.$_$.s5;
  var fold = kotlin_kotlin.$_$.r5;
  var minusKey = kotlin_kotlin.$_$.t5;
  var plus = kotlin_kotlin.$_$.v5;
  var toString = kotlin_kotlin.$_$.j7;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.f1;
  var initMetadataForObject = kotlin_kotlin.$_$.w6;
  var equals = kotlin_kotlin.$_$.l6;
  var MutableIntObjectMap = kotlin_androidx_collection_collection.$_$.d;
  var hashCode = kotlin_kotlin.$_$.q6;
  var rotateLeft = kotlin_kotlin.$_$.ga;
  var Enum = kotlin_kotlin.$_$.o9;
  var rotateRight = kotlin_kotlin.$_$.ha;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.q;
  var fill = kotlin_kotlin.$_$.q3;
  var MutableIntIntMap = kotlin_androidx_collection_collection.$_$.b;
  var emptyList = kotlin_kotlin.$_$.n3;
  var getNumberHashCode = kotlin_kotlin.$_$.n6;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.i;
  var to = kotlin_kotlin.$_$.la;
  var Long = kotlin_kotlin.$_$.t9;
  var sortWith = kotlin_kotlin.$_$.w4;
  var initMetadataForCompanion = kotlin_kotlin.$_$.s6;
  var MutableObjectList = kotlin_androidx_collection_collection.$_$.g;
  var emptyScatterMap = kotlin_androidx_collection_collection.$_$.m;
  var mutableScatterMapOf = kotlin_androidx_collection_collection.$_$.o;
  var IllegalStateException = kotlin_kotlin.$_$.s9;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.d1;
  var captureStack = kotlin_kotlin.$_$.d6;
  var defineProp = kotlin_kotlin.$_$.j6;
  var lazy = kotlin_kotlin.$_$.da;
  var KProperty1 = kotlin_kotlin.$_$.t7;
  var getPropertyCallableRef = kotlin_kotlin.$_$.o6;
  var mutableScatterSetOf = kotlin_androidx_collection_collection.$_$.p;
  var MutableScatterSet = kotlin_androidx_collection_collection.$_$.i;
  var MutableScatterMap = kotlin_androidx_collection_collection.$_$.h;
  var compareTo = kotlin_kotlin.$_$.i6;
  var FunctionAdapter = kotlin_kotlin.$_$.a6;
  var Comparator = kotlin_kotlin.$_$.n9;
  var plus_0 = kotlin_kotlin.$_$.r4;
  var isArray = kotlin_kotlin.$_$.x6;
  var KtSet = kotlin_kotlin.$_$.v2;
  var emptySet = kotlin_kotlin.$_$.p3;
  var KtMap = kotlin_kotlin.$_$.p2;
  var Exception = kotlin_kotlin.$_$.q9;
  var plus_1 = kotlin_kotlin.$_$.n4;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var toString_0 = kotlin_kotlin.$_$.ka;
  var Element = kotlin_kotlin.$_$.u5;
  var getStringHashCode = kotlin_kotlin.$_$.p6;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var CoroutineImpl = kotlin_kotlin.$_$.w5;
  var returnIfSuspended = kotlin_kotlin.$_$.g;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.h5;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.t6;
  var initMetadataForLambda = kotlin_kotlin.$_$.v6;
  var MutableObjectIntMap = kotlin_androidx_collection_collection.$_$.f;
  var ScatterSet = kotlin_androidx_collection_collection.$_$.k;
  var fill_0 = kotlin_kotlin.$_$.s3;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.k;
  var withContext = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.l;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.e3;
  var addAll = kotlin_kotlin.$_$.x2;
  var toList = kotlin_kotlin.$_$.z4;
  var emptyObjectList = kotlin_androidx_collection_collection.$_$.l;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.u;
  var CancellationException = kotlin_kotlin.$_$.g5;
  var addSuppressed = kotlin_kotlin.$_$.y9;
  var mutableScatterSetOf_0 = kotlin_androidx_collection_collection.$_$.q;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.m;
  var arrayCopy = kotlin_kotlin.$_$.y2;
  var countOneBits = kotlin_kotlin.$_$.z9;
  var anyToString = kotlin_kotlin.$_$.b6;
  var MutableIntSet = kotlin_androidx_collection_collection.$_$.e;
  var MutableIntList = kotlin_androidx_collection_collection.$_$.c;
  var ConcurrentModificationException_init_$Create$ = kotlin_kotlin.$_$.y;
  var longArray = kotlin_kotlin.$_$.c7;
  var copyOf = kotlin_kotlin.$_$.j3;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var coerceAtMost = kotlin_kotlin.$_$.m7;
  var coerceAtLeast = kotlin_kotlin.$_$.l7;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.x;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var compareValues = kotlin_kotlin.$_$.f5;
  var KtMutableList = kotlin_kotlin.$_$.r2;
  var mutableObjectListOf = kotlin_androidx_collection_collection.$_$.n;
  var objectListOf = kotlin_androidx_collection_collection.$_$.r;
  var ObjectList = kotlin_androidx_collection_collection.$_$.j;
  var until = kotlin_kotlin.$_$.p7;
  var RandomAccess = kotlin_kotlin.$_$.u2;
  var SequenceScope = kotlin_kotlin.$_$.u7;
  var numberRangeToNumber = kotlin_kotlin.$_$.d7;
  var iterator = kotlin_kotlin.$_$.y7;
  var Collection = kotlin_kotlin.$_$.m2;
  var mutableSetOf = kotlin_kotlin.$_$.m4;
  var NoSuchElementException_init_$Create$_0 = kotlin_kotlin.$_$.i1;
  var AbstractList = kotlin_kotlin.$_$.e2;
  var KtList = kotlin_kotlin.$_$.n2;
  var copyOf_0 = kotlin_kotlin.$_$.i3;
  var ensureNotNull = kotlin_kotlin.$_$.ca;
  var arrayIterator = kotlin_kotlin.$_$.c6;
  var AbstractMutableList = kotlin_kotlin.$_$.h2;
  var MutableIterable = kotlin_kotlin.$_$.q2;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.e1;
  var copyOfRange = kotlin_kotlin.$_$.g3;
  var indexOf = kotlin_kotlin.$_$.w3;
  var AbstractMap = kotlin_kotlin.$_$.f2;
  var AbstractMutableMap = kotlin_kotlin.$_$.i2;
  var KtMutableMap = kotlin_kotlin.$_$.t2;
  var MutableEntry = kotlin_kotlin.$_$.s2;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.n1;
  var AbstractMutableSet = kotlin_kotlin.$_$.j2;
  var AbstractMutableCollection = kotlin_kotlin.$_$.g2;
  var Entry = kotlin_kotlin.$_$.o2;
  var AbstractSet = kotlin_kotlin.$_$.k2;
  var AbstractCollection = kotlin_kotlin.$_$.d2;
  var objectCreate = kotlin_kotlin.$_$.g7;
  var step = kotlin_kotlin.$_$.o7;
  var ConcurrentModificationException_init_$Create$_0 = kotlin_kotlin.$_$.z;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.h1;
  var toString_1 = kotlin_kotlin.$_$.e9;
  var mutableListOf = kotlin_kotlin.$_$.l4;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.n;
  var Char = kotlin_kotlin.$_$.m9;
  var isCharSequence = kotlin_kotlin.$_$.y6;
  var minus = kotlin_kotlin.$_$.j4;
  var contains = kotlin_kotlin.$_$.f3;
  var toLong = kotlin_kotlin.$_$.i7;
  var plus_2 = kotlin_kotlin.$_$.q4;
  var primitiveArrayConcat = kotlin_kotlin.$_$.d;
  var doubleArrayIterator = kotlin_kotlin.$_$.k6;
  var numberToInt = kotlin_kotlin.$_$.f7;
  var sequence = kotlin_kotlin.$_$.a8;
  var countTrailingZeroBits = kotlin_kotlin.$_$.aa;
  var toSet = kotlin_kotlin.$_$.d5;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.p;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.f;
  var toDuration = kotlin_kotlin.$_$.j9;
  var _Duration___get_inWholeNanoseconds__impl__r5x4mr = kotlin_kotlin.$_$.q1;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.v;
  var MutableDoubleList = kotlin_androidx_collection_collection.$_$.a;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var println = kotlin_kotlin.$_$.z5;
  var printStackTrace = kotlin_kotlin.$_$.fa;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.r;
  //endregion
  //region block: pre-declaration
  function onBeginChanges() {
  }
  function onEndChanges() {
  }
  function apply(block, value) {
    block(this.p12(), value);
  }
  function reuse() {
    var tmp = this.p12();
    var tmp0_safe_receiver = (!(tmp == null) ? isInterface(tmp, ComposeNodeLifecycleCallback) : false) ? tmp : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.a13();
    }
  }
  initMetadataForInterface(Applier, 'Applier');
  initMetadataForClass(OffsetApplier, 'OffsetApplier', VOID, VOID, [Applier]);
  initMetadataForClass(AbstractApplier, 'AbstractApplier', VOID, VOID, [Applier]);
  initMetadataForClass(FrameAwaiter, 'FrameAwaiter');
  function get_key() {
    return Key_instance_0;
  }
  initMetadataForInterface(MonotonicFrameClock, 'MonotonicFrameClock', VOID, VOID, [Element], [1]);
  initMetadataForClass(BroadcastFrameClock, 'BroadcastFrameClock', BroadcastFrameClock, VOID, [MonotonicFrameClock], [1]);
  initMetadataForInterface(ComposeNodeLifecycleCallback, 'ComposeNodeLifecycleCallback');
  initMetadataForObject(ComposeRuntimeFlags, 'ComposeRuntimeFlags');
  initMetadataForClass(Invalidation, 'Invalidation');
  initMetadataForInterface(RememberObserver, 'RememberObserver');
  initMetadataForInterface(ReusableRememberObserver, 'ReusableRememberObserver', VOID, VOID, [RememberObserver]);
  initMetadataForClass(CompositionContextHolder, 'CompositionContextHolder', VOID, VOID, [ReusableRememberObserver]);
  initMetadataForClass(ComposerImpl$derivedStateObserver$1);
  function changed(value) {
    return this.n1h(value);
  }
  function changed_0(value) {
    return this.o1h(value);
  }
  function changedInstance(value) {
    return this.z16(value);
  }
  initMetadataForInterface(Composer, 'Composer');
  initMetadataForClass(ComposerImpl, 'ComposerImpl', VOID, VOID, [Composer]);
  initMetadataForClass(Composer$Companion$Empty$1);
  initMetadataForCompanion(Companion);
  initMetadataForClass(InvalidationResult, 'InvalidationResult', VOID, Enum);
  initMetadataForClass(MovableContentStateReference, 'MovableContentStateReference');
  initMetadataForClass(MovableContentState, 'MovableContentState');
  initMetadataForClass(MovableContent, 'MovableContent');
  initMetadataForClass(ComposeRuntimeError, 'ComposeRuntimeError', VOID, IllegalStateException);
  initMetadataForClass(ProvidedValue, 'ProvidedValue');
  initMetadataForClass(RememberObserverHolder, 'RememberObserverHolder');
  initMetadataForClass(Pending, 'Pending');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(CompositionDataImpl, 'CompositionDataImpl');
  initMetadataForClass(GroupInfo, 'GroupInfo');
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForInterface(RecomposeScopeOwner, 'RecomposeScopeOwner');
  initMetadataForClass(extractMovableContentAtCurrent$movableContentRecomposeScopeOwner$1, VOID, VOID, VOID, [RecomposeScopeOwner]);
  initMetadataForClass(CompositionImpl, 'CompositionImpl', VOID, VOID, [RecomposeScopeOwner]);
  initMetadataForClass(CompositionObserverHolder, 'CompositionObserverHolder', CompositionObserverHolder);
  initMetadataForObject(ComposableSingletons$CompositionKt, 'ComposableSingletons$CompositionKt');
  initMetadataForObject(ScopeInvalidated, 'ScopeInvalidated');
  initMetadataForClass(CompositionImplServiceKey$1);
  initMetadataForClass(CompositionContext, 'CompositionContext');
  initMetadataForClass(CompositionLocal, 'CompositionLocal');
  initMetadataForClass(ProvidableCompositionLocal, 'ProvidableCompositionLocal', VOID, CompositionLocal);
  initMetadataForClass(StaticProvidableCompositionLocal, 'StaticProvidableCompositionLocal', VOID, ProvidableCompositionLocal);
  initMetadataForClass(DynamicProvidableCompositionLocal, 'DynamicProvidableCompositionLocal', VOID, ProvidableCompositionLocal);
  initMetadataForInterface(PersistentCompositionLocalMap, 'PersistentCompositionLocalMap', VOID, VOID, [KtMap]);
  initMetadataForInterface(DerivedState, 'DerivedState');
  initMetadataForClass(DisposableEffectScope, 'DisposableEffectScope', DisposableEffectScope);
  initMetadataForClass(DisposableEffectImpl, 'DisposableEffectImpl', VOID, VOID, [RememberObserver]);
  initMetadataForClass(LaunchedEffectImpl, 'LaunchedEffectImpl', VOID, VOID, [RememberObserver]);
  initMetadataForClass(PlatformOptimizedCancellationException, 'PlatformOptimizedCancellationException', VOID, CancellationException);
  initMetadataForClass(LeftCompositionCancellationException, 'LeftCompositionCancellationException', LeftCompositionCancellationException, PlatformOptimizedCancellationException);
  initMetadataForClass(JoinedKey, 'JoinedKey');
  initMetadataForObject(Key, 'Key');
  initMetadataForClass(OpaqueKey, 'OpaqueKey');
  initMetadataForInterface(ProduceStateScope, 'ProduceStateScope', VOID, VOID, [CoroutineScope_0], [1]);
  initMetadataForCoroutine($awaitDisposeCOROUTINE$, CoroutineImpl);
  initMetadataForClass(ProduceStateScopeImpl, 'ProduceStateScopeImpl', VOID, VOID, [ProduceStateScope], [1]);
  initMetadataForLambda(produceState$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(RecomposeScopeImpl, 'RecomposeScopeImpl');
  initMetadataForLambda(Recomposer$recompositionRunner$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(State, 'State', VOID, Enum);
  initMetadataForClass(RecomposerInfoImpl, 'RecomposerInfoImpl');
  initMetadataForClass(RecomposerErrorState, 'RecomposerErrorState');
  initMetadataForCompanion(Companion_2);
  initMetadataForLambda(Recomposer$runRecomposeAndApplyChanges$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(Recomposer$recompositionRunner$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($awaitWorkAvailableCOROUTINE$, CoroutineImpl);
  initMetadataForClass(Recomposer, 'Recomposer', VOID, CompositionContext, VOID, [0, 1, 2]);
  initMetadataForClass(NestedContentMap, 'NestedContentMap', NestedContentMap);
  initMetadataForClass(NestedMovableContent, 'NestedMovableContent');
  initMetadataForClass(SlotTable, 'SlotTable', SlotTable);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(SlotWriter, 'SlotWriter');
  initMetadataForClass(Anchor, 'Anchor');
  initMetadataForClass(GroupSourceInformation, 'GroupSourceInformation');
  initMetadataForClass(SlotReader, 'SlotReader');
  initMetadataForClass(GroupIterator, 'GroupIterator');
  initMetadataForClass(SlotTableGroup, 'SlotTableGroup');
  initMetadataForClass(PrioritySet, 'PrioritySet');
  initMetadataForClass(KeyInfo, 'KeyInfo');
  initMetadataForClass(SourceInformationGroupIterator, 'SourceInformationGroupIterator');
  initMetadataForClass(SourceInformationGroupPath, 'SourceInformationGroupPath');
  initMetadataForClass(AnchoredGroupPath, 'AnchoredGroupPath', VOID, SourceInformationGroupPath);
  initMetadataForClass(SourceInformationSlotTableGroup, 'SourceInformationSlotTableGroup');
  initMetadataForClass(RelativeGroupPath, 'RelativeGroupPath', VOID, SourceInformationGroupPath);
  function merge(previous, current, applied) {
    return null;
  }
  initMetadataForInterface(SnapshotMutationPolicy, 'SnapshotMutationPolicy');
  initMetadataForObject(StructuralEqualityPolicy, 'StructuralEqualityPolicy', VOID, VOID, [SnapshotMutationPolicy]);
  initMetadataForClass(StateRecord, 'StateRecord');
  initMetadataForClass(StateStateRecord, 'StateStateRecord', VOID, StateRecord);
  function mergeRecords(previous, current, applied) {
    return null;
  }
  initMetadataForInterface(StateObject, 'StateObject');
  initMetadataForClass(StateObjectImpl, 'StateObjectImpl', VOID, VOID, [StateObject]);
  initMetadataForClass(SnapshotMutableStateImpl, 'SnapshotMutableStateImpl', VOID, StateObjectImpl);
  initMetadataForClass(IntStack, 'IntStack', IntStack);
  initMetadataForClass(Stack, 'Stack');
  initMetadataForInterface(ValueHolder, 'ValueHolder');
  initMetadataForClass(LazyValueHolder, 'LazyValueHolder', VOID, VOID, [ValueHolder]);
  initMetadataForClass(DynamicValueHolder, 'DynamicValueHolder', VOID, VOID, [ValueHolder]);
  initMetadataForClass(StaticValueHolder, 'StaticValueHolder', VOID, VOID, [ValueHolder]);
  initMetadataForClass(ComputedValueHolder, 'ComputedValueHolder', VOID, VOID, [ValueHolder]);
  initMetadataForClass(OperationsDebugStringFormattable, 'OperationsDebugStringFormattable');
  initMetadataForClass(ChangeList, 'ChangeList', ChangeList, OperationsDebugStringFormattable);
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(ComposerChangeListWriter, 'ComposerChangeListWriter');
  initMetadataForClass(FixupList, 'FixupList', FixupList, OperationsDebugStringFormattable);
  initMetadataForClass(Operation, 'Operation');
  initMetadataForObject(Ups, 'Ups', VOID, Operation);
  initMetadataForObject(Downs, 'Downs', VOID, Operation);
  initMetadataForObject(AdvanceSlotsBy, 'AdvanceSlotsBy', VOID, Operation);
  initMetadataForObject(Remember, 'Remember', VOID, Operation);
  initMetadataForObject(RememberPausingScope, 'RememberPausingScope', VOID, Operation);
  initMetadataForObject(StartResumingScope, 'StartResumingScope', VOID, Operation);
  initMetadataForObject(EndResumingScope, 'EndResumingScope', VOID, Operation);
  initMetadataForObject(AppendValue, 'AppendValue', VOID, Operation);
  initMetadataForObject(TrimParentValues, 'TrimParentValues', VOID, Operation);
  initMetadataForObject(UpdateValue, 'UpdateValue', VOID, Operation);
  initMetadataForObject(UpdateAnchoredValue, 'UpdateAnchoredValue', VOID, Operation);
  initMetadataForObject(UpdateAuxData, 'UpdateAuxData', VOID, Operation);
  initMetadataForObject(EnsureRootGroupStarted, 'EnsureRootGroupStarted', VOID, Operation);
  initMetadataForObject(EnsureGroupStarted, 'EnsureGroupStarted', VOID, Operation);
  initMetadataForObject(RemoveCurrentGroup, 'RemoveCurrentGroup', VOID, Operation);
  initMetadataForObject(MoveCurrentGroup, 'MoveCurrentGroup', VOID, Operation);
  initMetadataForObject(EndCurrentGroup, 'EndCurrentGroup', VOID, Operation);
  initMetadataForObject(SkipToEndOfCurrentGroup, 'SkipToEndOfCurrentGroup', VOID, Operation);
  initMetadataForObject(EndCompositionScope, 'EndCompositionScope', VOID, Operation);
  initMetadataForObject(UseCurrentNode, 'UseCurrentNode', VOID, Operation);
  initMetadataForObject(UpdateNode, 'UpdateNode', VOID, Operation);
  initMetadataForObject(RemoveNode, 'RemoveNode', VOID, Operation);
  initMetadataForObject(MoveNode, 'MoveNode', VOID, Operation);
  initMetadataForObject(InsertSlots, 'InsertSlots', VOID, Operation);
  initMetadataForObject(InsertSlotsWithFixups, 'InsertSlotsWithFixups', VOID, Operation);
  initMetadataForObject(InsertNodeFixup, 'InsertNodeFixup', VOID, Operation);
  initMetadataForObject(PostInsertNodeFixup, 'PostInsertNodeFixup', VOID, Operation);
  initMetadataForObject(ResetSlots, 'ResetSlots', VOID, Operation);
  initMetadataForObject(DetermineMovableContentNodeIndex, 'DetermineMovableContentNodeIndex', VOID, Operation);
  initMetadataForObject(CopyNodesToNewAnchorLocation, 'CopyNodesToNewAnchorLocation', VOID, Operation);
  initMetadataForObject(CopySlotTableToAnchorLocation, 'CopySlotTableToAnchorLocation', VOID, Operation);
  initMetadataForObject(EndMovableContentPlacement, 'EndMovableContentPlacement', VOID, Operation);
  initMetadataForObject(ReleaseMovableGroupAtCurrent, 'ReleaseMovableGroupAtCurrent', VOID, Operation);
  initMetadataForObject(ApplyChangeList, 'ApplyChangeList', VOID, Operation);
  initMetadataForClass(OpIterator, 'OpIterator');
  initMetadataForClass(Operations, 'Operations', Operations, OperationsDebugStringFormattable);
  initMetadataForClass(sam$kotlin_Comparator$0_0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(MultiValueMap, 'MultiValueMap');
  initMetadataForClass(MutableVector, 'MutableVector', VOID, VOID, [RandomAccess]);
  initMetadataForLambda(ScatterSetWrapper$iterator$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(ScatterSetWrapper, 'ScatterSetWrapper', VOID, VOID, [KtSet]);
  initMetadataForClass(AbstractListIterator, 'AbstractListIterator');
  initMetadataForClass(SingleElementListIterator, 'SingleElementListIterator', VOID, AbstractListIterator);
  initMetadataForClass(AbstractPersistentList, 'AbstractPersistentList', VOID, AbstractList, [KtList, Collection, AbstractList]);
  initMetadataForClass(BufferIterator, 'BufferIterator', VOID, AbstractListIterator);
  initMetadataForClass(PersistentVector, 'PersistentVector', VOID, AbstractPersistentList, [KtList, Collection, AbstractPersistentList]);
  initMetadataForClass(PersistentVectorBuilder, 'PersistentVectorBuilder', VOID, AbstractMutableList, [AbstractMutableList, KtMutableList, MutableIterable, Collection]);
  initMetadataForClass(PersistentVectorIterator, 'PersistentVectorIterator', VOID, AbstractListIterator);
  initMetadataForClass(PersistentVectorMutableIterator, 'PersistentVectorMutableIterator', VOID, AbstractListIterator);
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(SmallPersistentVector, 'SmallPersistentVector', VOID, AbstractPersistentList, [KtList, Collection, AbstractPersistentList]);
  initMetadataForClass(TrieIterator, 'TrieIterator', VOID, AbstractListIterator);
  initMetadataForClass(ObjectRef, 'ObjectRef');
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(PersistentHashMap, 'PersistentHashMap', VOID, AbstractMap, [AbstractMap, KtMap]);
  initMetadataForClass(PersistentHashMapBuilder, 'PersistentHashMapBuilder', VOID, AbstractMutableMap, [KtMutableMap, AbstractMutableMap]);
  initMetadataForClass(PersistentHashMapBuilderEntriesIterator, 'PersistentHashMapBuilderEntriesIterator');
  initMetadataForClass(PersistentHashMapBaseIterator, 'PersistentHashMapBaseIterator');
  initMetadataForClass(PersistentHashMapBuilderBaseIterator, 'PersistentHashMapBuilderBaseIterator', VOID, PersistentHashMapBaseIterator);
  initMetadataForClass(PersistentHashMapBuilderKeysIterator, 'PersistentHashMapBuilderKeysIterator', VOID, PersistentHashMapBuilderBaseIterator);
  initMetadataForClass(PersistentHashMapBuilderValuesIterator, 'PersistentHashMapBuilderValuesIterator', VOID, PersistentHashMapBuilderBaseIterator);
  initMetadataForClass(TrieNodeBaseIterator, 'TrieNodeBaseIterator');
  initMetadataForClass(TrieNodeMutableEntriesIterator, 'TrieNodeMutableEntriesIterator', VOID, TrieNodeBaseIterator);
  initMetadataForClass(MapEntry, 'MapEntry', VOID, VOID, [Entry]);
  initMetadataForClass(MutableMapEntry, 'MutableMapEntry', VOID, MapEntry, [MapEntry, MutableEntry]);
  initMetadataForClass(AbstractMapBuilderEntries, 'AbstractMapBuilderEntries', VOID, AbstractMutableSet);
  initMetadataForClass(PersistentHashMapBuilderEntries, 'PersistentHashMapBuilderEntries', VOID, AbstractMapBuilderEntries);
  initMetadataForClass(PersistentHashMapBuilderKeys, 'PersistentHashMapBuilderKeys', VOID, AbstractMutableSet, [MutableIterable, KtSet, Collection, AbstractMutableSet]);
  initMetadataForClass(PersistentHashMapBuilderValues, 'PersistentHashMapBuilderValues', VOID, AbstractMutableCollection, [MutableIterable, Collection, AbstractMutableCollection]);
  initMetadataForClass(PersistentHashMapKeysIterator, 'PersistentHashMapKeysIterator', VOID, PersistentHashMapBaseIterator);
  initMetadataForClass(PersistentHashMapValuesIterator, 'PersistentHashMapValuesIterator', VOID, PersistentHashMapBaseIterator);
  initMetadataForClass(PersistentHashMapEntriesIterator, 'PersistentHashMapEntriesIterator', VOID, PersistentHashMapBaseIterator);
  initMetadataForClass(TrieNodeKeysIterator, 'TrieNodeKeysIterator', TrieNodeKeysIterator, TrieNodeBaseIterator);
  initMetadataForClass(TrieNodeValuesIterator, 'TrieNodeValuesIterator', TrieNodeValuesIterator, TrieNodeBaseIterator);
  initMetadataForClass(TrieNodeEntriesIterator, 'TrieNodeEntriesIterator', TrieNodeEntriesIterator, TrieNodeBaseIterator);
  initMetadataForClass(PersistentHashMapKeys, 'PersistentHashMapKeys', VOID, AbstractSet, [KtSet, Collection, AbstractSet]);
  initMetadataForClass(PersistentHashMapValues, 'PersistentHashMapValues', VOID, AbstractCollection, [Collection, AbstractCollection]);
  initMetadataForClass(PersistentHashMapEntries, 'PersistentHashMapEntries', VOID, AbstractSet, [KtSet, Collection, AbstractSet]);
  initMetadataForClass(ModificationResult, 'ModificationResult');
  initMetadataForCompanion(Companion_7);
  initMetadataForClass(TrieNode, 'TrieNode');
  initMetadataForCompanion(Companion_8);
  initMetadataForClass(PersistentOrderedSet, 'PersistentOrderedSet', VOID, AbstractSet, [AbstractSet, KtSet, Collection]);
  initMetadataForClass(Links, 'Links', Links_init_$Create$);
  initMetadataForClass(PersistentOrderedSetIterator, 'PersistentOrderedSetIterator');
  initMetadataForObject(EndOfChain, 'EndOfChain');
  initMetadataForObject(ListImplementation, 'ListImplementation');
  initMetadataForClass(MutabilityOwnership, 'MutabilityOwnership', MutabilityOwnership);
  initMetadataForClass(ComposableLambdaImpl, 'ComposableLambdaImpl');
  initMetadataForClass(IntRef, 'IntRef', IntRef);
  initMetadataForClass(Builder, 'Builder', VOID, PersistentHashMapBuilder, [PersistentHashMapBuilder, KtMutableMap]);
  initMetadataForCompanion(Companion_9);
  initMetadataForClass(PersistentCompositionLocalHashMap, 'PersistentCompositionLocalHashMap', VOID, PersistentHashMap, [PersistentHashMap, PersistentCompositionLocalMap]);
  initMetadataForClass(RememberEventDispatcher, 'RememberEventDispatcher');
  initMetadataForClass(PausedCompositionRemembers, 'PausedCompositionRemembers', VOID, VOID, [RememberObserver]);
  initMetadataForClass(SnapshotThreadLocal, 'SnapshotThreadLocal', SnapshotThreadLocal);
  initMetadataForClass(ThreadMap, 'ThreadMap');
  initMetadataForInterface(ObserverHandle, 'ObserverHandle');
  initMetadataForClass(sam$androidx_compose_runtime_snapshots_ObserverHandle$0, 'sam$androidx_compose_runtime_snapshots_ObserverHandle$0', VOID, VOID, [ObserverHandle, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0, 'sam$androidx_compose_runtime_snapshots_ObserverHandle$0', VOID, VOID, [ObserverHandle, FunctionAdapter]);
  initMetadataForCompanion(Companion_10);
  initMetadataForClass(Snapshot, 'Snapshot');
  initMetadataForCompanion(Companion_11);
  initMetadataForClass(MutableSnapshot, 'MutableSnapshot', VOID, Snapshot);
  initMetadataForClass(SnapshotApplyResult, 'SnapshotApplyResult');
  initMetadataForObject(Success, 'Success', VOID, SnapshotApplyResult);
  initMetadataForClass(Failure, 'Failure', VOID, SnapshotApplyResult);
  initMetadataForClass(GlobalSnapshot, 'GlobalSnapshot', VOID, MutableSnapshot);
  initMetadataForClass(NestedMutableSnapshot, 'NestedMutableSnapshot', VOID, MutableSnapshot);
  initMetadataForClass(SnapshotDoubleIndexHeap, 'SnapshotDoubleIndexHeap', SnapshotDoubleIndexHeap);
  initMetadataForCompanion(Companion_12);
  initMetadataForLambda(SnapshotIdSet$iterator$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(SnapshotIdSet, 'SnapshotIdSet');
  initMetadataForClass(StateListStateRecord, 'StateListStateRecord', VOID, StateRecord);
  initMetadataForClass(SnapshotStateList, 'SnapshotStateList', SnapshotStateList_init_$Create$, VOID, [StateObject, KtMutableList, RandomAccess]);
  initMetadataForClass(StateListIterator, 'StateListIterator');
  initMetadataForClass(StateMapStateRecord, 'StateMapStateRecord', VOID, StateRecord);
  initMetadataForClass(SnapshotStateMap, 'SnapshotStateMap', SnapshotStateMap, VOID, [StateObject, KtMutableMap]);
  initMetadataForClass(SnapshotMapSet, 'SnapshotMapSet', VOID, VOID, [MutableIterable, KtSet, Collection]);
  initMetadataForClass(SnapshotMapEntrySet, 'SnapshotMapEntrySet', VOID, SnapshotMapSet);
  initMetadataForClass(SnapshotMapKeySet, 'SnapshotMapKeySet', VOID, SnapshotMapSet);
  initMetadataForClass(SnapshotMapValueSet, 'SnapshotMapValueSet', VOID, SnapshotMapSet);
  initMetadataForClass(StateMapMutableEntriesIterator$next$1, VOID, VOID, VOID, [MutableEntry]);
  initMetadataForClass(StateMapMutableIterator, 'StateMapMutableIterator');
  initMetadataForClass(StateMapMutableEntriesIterator, 'StateMapMutableEntriesIterator', VOID, StateMapMutableIterator);
  initMetadataForClass(StateMapMutableKeysIterator, 'StateMapMutableKeysIterator', VOID, StateMapMutableIterator);
  initMetadataForClass(StateMapMutableValuesIterator, 'StateMapMutableValuesIterator', VOID, StateMapMutableIterator);
  initMetadataForClass(SnapshotWeakSet, 'SnapshotWeakSet', SnapshotWeakSet);
  initMetadataForCompanion(Companion_13);
  function onCreating(parent, readonly) {
    return null;
  }
  function onPreCreate(parent, readonly) {
    return this.n2i(parent, readonly);
  }
  function onCreated(snapshot, parent, observers) {
  }
  function onDisposing(snapshot) {
  }
  function onPreDispose(snapshot) {
    return this.q2i(snapshot);
  }
  function onApplied(snapshot, changed) {
  }
  initMetadataForInterface(SnapshotObserver, 'SnapshotObserver');
  initMetadataForClass(SnapshotInstanceObservers, 'SnapshotInstanceObservers', SnapshotInstanceObservers);
  initMetadataForClass(DefaultMonotonicFrameClock$1, VOID, VOID, VOID, [MonotonicFrameClock], [1]);
  initMetadataForClass(SnapshotIdArrayBuilder, 'SnapshotIdArrayBuilder');
  initMetadataForObject(Trace, 'Trace');
  initMetadataForClass(AtomicReference, 'AtomicReference');
  initMetadataForClass(AtomicInt, 'AtomicInt');
  initMetadataForClass(WeakReference, 'WeakReference');
  //endregion
  var androidx_compose_runtime_AbstractApplier$stable;
  var androidx_compose_runtime_OffsetApplier$stable;
  function Applier() {
  }
  function OffsetApplier(applier, offset) {
    this.b13_1 = applier;
    this.c13_1 = offset;
    this.d13_1 = 0;
  }
  protoOf(OffsetApplier).p12 = function () {
    return this.b13_1.p12();
  };
  protoOf(OffsetApplier).s12 = function (node) {
    this.d13_1 = this.d13_1 + 1 | 0;
    this.b13_1.s12(node);
  };
  protoOf(OffsetApplier).t12 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.d13_1 > 0)) {
      var tmp$ret$0 = 'OffsetApplier up called with no corresponding down';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.d13_1 = this.d13_1 - 1 | 0;
    this.b13_1.t12();
  };
  protoOf(OffsetApplier).u12 = function (index, instance) {
    this.b13_1.u12(index + (this.d13_1 === 0 ? this.c13_1 : 0) | 0, instance);
  };
  protoOf(OffsetApplier).v12 = function (index, instance) {
    this.b13_1.v12(index + (this.d13_1 === 0 ? this.c13_1 : 0) | 0, instance);
  };
  protoOf(OffsetApplier).w12 = function (index, count) {
    this.b13_1.w12(index + (this.d13_1 === 0 ? this.c13_1 : 0) | 0, count);
  };
  protoOf(OffsetApplier).x12 = function (from, to, count) {
    var effectiveOffset = this.d13_1 === 0 ? this.c13_1 : 0;
    this.b13_1.x12(from + effectiveOffset | 0, to + effectiveOffset | 0, count);
  };
  function AbstractApplier(root) {
    this.e13_1 = root;
    this.f13_1 = _Stack___init__impl__tvpfn5();
    this.g13_1 = this.e13_1;
  }
  protoOf(AbstractApplier).h13 = function (_set____db54di) {
    this.g13_1 = _set____db54di;
  };
  protoOf(AbstractApplier).p12 = function () {
    return this.g13_1;
  };
  protoOf(AbstractApplier).i13 = function (node) {
    Stack__push_impl_s8r905(this.f13_1, this.p12());
    this.h13(node);
  };
  protoOf(AbstractApplier).s12 = function (node) {
    return this.i13((node == null ? true : !(node == null)) ? node : THROW_CCE());
  };
  protoOf(AbstractApplier).t12 = function () {
    this.h13(Stack__pop_impl_8s4za4(this.f13_1));
  };
  var androidx_compose_runtime_BroadcastFrameClock$stable;
  function FrameAwaiter(onFrame, continuation) {
    this.j13_1 = onFrame;
    this.k13_1 = continuation;
  }
  protoOf(FrameAwaiter).l13 = function (timeNanos) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      var value = this.j13_1(timeNanos);
      tmp = _Result___init__impl__xyqfz8(value);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var tmp$ret$3 = tmp;
    this.k13_1.g9(tmp$ret$3);
  };
  function fail($this, cause) {
    // Inline function 'androidx.compose.runtime.platform.synchronized' call
    $this.n13_1;
    if (!($this.o13_1 == null))
      return Unit_instance;
    $this.o13_1 = cause;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var this_0 = $this.p13_1;
    var inductionVariable = 0;
    var last = this_0.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.p(index);
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var this_1 = item.k13_1;
        // Inline function 'kotlin.Companion.failure' call
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
        this_1.g9(tmp$ret$0);
      }
       while (inductionVariable <= last);
    $this.p13_1.y1();
    $this.r13_1.t13(0);
  }
  function BroadcastFrameClock$withFrameNanos$lambda(this$0, $awaiter) {
    return function (it) {
      // Inline function 'androidx.compose.runtime.platform.synchronized' call
      this$0.n13_1;
      this$0.p13_1.v1($awaiter);
      if (this$0.p13_1.r()) {
        this$0.r13_1.t13(0);
      }
      return Unit_instance;
    };
  }
  function BroadcastFrameClock(onNewAwaiters) {
    onNewAwaiters = onNewAwaiters === VOID ? null : onNewAwaiters;
    this.m13_1 = onNewAwaiters;
    var tmp = this;
    // Inline function 'androidx.compose.runtime.platform.makeSynchronizedObject' call
    tmp.n13_1 = null == null ? new Object() : null;
    this.o13_1 = null;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.p13_1 = ArrayList_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.q13_1 = ArrayList_init_$Create$();
    this.r13_1 = new AtomicInt(0);
  }
  protoOf(BroadcastFrameClock).u13 = function () {
    return !(this.r13_1.bo() === 0);
  };
  protoOf(BroadcastFrameClock).v13 = function (timeNanos) {
    // Inline function 'androidx.compose.runtime.platform.synchronized' call
    this.n13_1;
    var toResume = this.p13_1;
    this.p13_1 = this.q13_1;
    this.q13_1 = toResume;
    this.r13_1.t13(0);
    var inductionVariable = 0;
    var last = toResume.j();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        toResume.p(i).l13(timeNanos);
      }
       while (inductionVariable < last);
    toResume.y1();
  };
  protoOf(BroadcastFrameClock).w13 = function (onFrame, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.om();
    $l$block: {
      var awaiter = new FrameAwaiter(onFrame, cancellable);
      // Inline function 'androidx.compose.runtime.platform.synchronized' call
      this.n13_1;
      var cause = this.o13_1;
      if (!(cause == null)) {
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
        cancellable.g9(tmp$ret$0);
        break $l$block;
      }
      // Inline function 'kotlin.collections.isNotEmpty' call
      var hadAwaiters = !this.p13_1.r();
      this.p13_1.e(awaiter);
      if (!hadAwaiters) {
        this.r13_1.t13(1);
      }
      var hasNewAwaiters = !hadAwaiters;
      cancellable.gl(BroadcastFrameClock$withFrameNanos$lambda(this, awaiter));
      if (hasNewAwaiters && !(this.m13_1 == null)) {
        try {
          this.m13_1();
        } catch ($p) {
          if ($p instanceof Error) {
            var t = $p;
            fail(this, t);
          } else {
            throw $p;
          }
        }
      }
    }
    return cancellable.sk();
  };
  function invalidApplier() {
    var message = 'Invalid applier';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function ComposeNodeLifecycleCallback() {
  }
  var androidx_compose_runtime_ComposeRuntimeFlags$stable;
  function ComposeRuntimeFlags() {
    this.z13_1 = true;
  }
  var ComposeRuntimeFlags_instance;
  function ComposeRuntimeFlags_getInstance() {
    return ComposeRuntimeFlags_instance;
  }
  var androidx_compose_runtime_ComposeVersion$stable;
  function get_compositionTracer() {
    _init_properties_Composer_kt__bmp4g0();
    return compositionTracer;
  }
  var compositionTracer;
  function get_invocation() {
    _init_properties_Composer_kt__bmp4g0();
    return invocation;
  }
  var invocation;
  function get_provider() {
    _init_properties_Composer_kt__bmp4g0();
    return provider;
  }
  var provider;
  function get_compositionLocalMap() {
    _init_properties_Composer_kt__bmp4g0();
    return compositionLocalMap;
  }
  var compositionLocalMap;
  var providerValues;
  var providerMaps;
  function get_reference() {
    _init_properties_Composer_kt__bmp4g0();
    return reference;
  }
  var reference;
  function get_InvalidationLocationAscending() {
    _init_properties_Composer_kt__bmp4g0();
    return InvalidationLocationAscending;
  }
  var InvalidationLocationAscending;
  var androidx_compose_runtime_ProvidedValue$stable;
  var androidx_compose_runtime_MovableContent$stable;
  var androidx_compose_runtime_MovableContentStateReference$stable;
  var androidx_compose_runtime_MovableContentState$stable;
  var androidx_compose_runtime_ComposerImpl_CompositionContextHolder$stable;
  var androidx_compose_runtime_ComposerImpl$stable;
  var androidx_compose_runtime_RememberObserverHolder$stable;
  var androidx_compose_runtime_ComposeRuntimeError$stable;
  var androidx_compose_runtime_CompositionDataImpl$stable;
  function Invalidation(scope, location, instances) {
    this.a14_1 = scope;
    this.b14_1 = location;
    this.c14_1 = instances;
  }
  protoOf(Invalidation).d14 = function () {
    return this.a14_1.m14(this.c14_1);
  };
  function startRoot($this) {
    $this.y14_1 = 0;
    $this.u15_1 = $this.p14_1.t16();
    startGroup($this, 100);
    $this.o14_1.u16();
    $this.h15_1 = $this.o14_1.v16();
    $this.k15_1.y16(asInt($this.j15_1));
    $this.j15_1 = $this.z16($this.h15_1);
    $this.y15_1 = null;
    if (!$this.c15_1) {
      $this.c15_1 = $this.o14_1.a17();
    }
    if (!$this.p15_1) {
      $this.p15_1 = $this.o14_1.b17();
    }
    var tmp0_safe_receiver = read($this.h15_1, get_LocalInspectionTables());
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      tmp0_safe_receiver.e($this.c17());
      $this.o14_1.d17(tmp0_safe_receiver);
    }
    startGroup($this, $this.o14_1.e17());
  }
  function endRoot($this) {
    endGroup($this);
    $this.o14_1.f17();
    endGroup($this);
    $this.a16_1.s17();
    finalizeCompose($this);
    $this.u15_1.i18();
    $this.d15_1 = false;
    $this.j15_1 = asBool($this.k15_1.j18());
  }
  function abortRoot($this) {
    cleanUpCompose($this);
    Stack__clear_impl_qoqv3c($this.u14_1);
    $this.z14_1.y1();
    $this.g15_1.y1();
    $this.k15_1.y1();
    $this.i15_1 = null;
    $this.c16_1.y1();
    $this.g16_1 = 0;
    $this.n15_1 = 0;
    $this.e15_1 = false;
    $this.f16_1 = false;
    $this.l15_1 = false;
    $this.s15_1 = false;
    $this.d15_1 = false;
    $this.m15_1 = -1;
    if (!$this.u15_1.z17_1) {
      $this.u15_1.i18();
    }
    if (!$this.w15_1.i19_1) {
      forceFreshInsertTable($this);
    }
  }
  function startGroup($this, key) {
    return start($this, key, null, Companion_getInstance_0().k19_1, null);
  }
  function startGroup_0($this, key, dataKey) {
    return start($this, key, dataKey, Companion_getInstance_0().k19_1, null);
  }
  function endGroup($this) {
    return end($this, false);
  }
  function skipGroup($this) {
    $this.x14_1 = $this.x14_1 + $this.u15_1.n19() | 0;
  }
  function updateSlot($this, value) {
    $this.o19();
    $this.p19(value);
  }
  function rememberObserverAnchor($this) {
    var tmp;
    if ($this.f16_1) {
      var tmp_0;
      if (get_isAfterFirstChild($this.w15_1)) {
        var group = $this.w15_1.f19_1 - 1 | 0;
        var parent = $this.w15_1.q19(group);
        while (!(parent === $this.w15_1.h19_1) && parent >= 0) {
          group = parent;
          parent = $this.w15_1.q19(group);
        }
        tmp_0 = $this.w15_1.r19(group);
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    } else {
      var tmp_1;
      if (get_isAfterFirstChild_0($this.u15_1)) {
        var group_0 = $this.u15_1.a18_1 - 1 | 0;
        var parent_0 = $this.u15_1.q19(group_0);
        while (!(parent_0 === $this.u15_1.c18_1) && parent_0 >= 0) {
          group_0 = parent_0;
          parent_0 = $this.u15_1.q19(group_0);
        }
        tmp_1 = $this.u15_1.r19(group_0);
      } else {
        tmp_1 = null;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function currentCompositionLocalScope($this) {
    var tmp0_safe_receiver = $this.y15_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    return currentCompositionLocalScope_0($this, $this.u15_1.c18_1);
  }
  function currentCompositionLocalScope_0($this, group) {
    if ($this.f16_1 && $this.x15_1) {
      var current = $this.w15_1.h19_1;
      while (current > 0) {
        if ($this.w15_1.t19(current) === 202 && equals($this.w15_1.u19(current), get_compositionLocalMap())) {
          var tmp = $this.w15_1.s19(current);
          var providers = (!(tmp == null) ? isInterface(tmp, PersistentCompositionLocalMap) : false) ? tmp : THROW_CCE();
          $this.y15_1 = providers;
          return providers;
        }
        current = $this.w15_1.q19(current);
      }
    }
    if ($this.u15_1.j() > 0) {
      var current_0 = group;
      while (current_0 > 0) {
        if ($this.u15_1.t19(current_0) === 202 && equals($this.u15_1.u19(current_0), get_compositionLocalMap())) {
          var tmp0_safe_receiver = $this.i15_1;
          var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p(current_0);
          var tmp_0;
          if (tmp1_elvis_lhs == null) {
            var tmp_1 = $this.u15_1.s19(current_0);
            tmp_0 = (!(tmp_1 == null) ? isInterface(tmp_1, PersistentCompositionLocalMap) : false) ? tmp_1 : THROW_CCE();
          } else {
            tmp_0 = tmp1_elvis_lhs;
          }
          var providers_0 = tmp_0;
          $this.y15_1 = providers_0;
          return providers_0;
        }
        current_0 = $this.u15_1.q19(current_0);
      }
    }
    $this.y15_1 = $this.h15_1;
    return $this.h15_1;
  }
  function recordProviderUpdate($this, providers) {
    var tmp0_elvis_lhs = $this.i15_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      var newProviderUpdates = new MutableIntObjectMap();
      $this.i15_1 = newProviderUpdates;
      tmp = newProviderUpdates;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var providerUpdates = tmp;
    providerUpdates.xw($this.u15_1.a18_1, providers);
  }
  function ensureWriter($this) {
    if ($this.w15_1.i19_1) {
      $this.w15_1 = $this.v15_1.v19();
      $this.w15_1.w19();
      $this.x15_1 = false;
      $this.y15_1 = null;
    }
  }
  function createFreshInsertTable($this) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!$this.w15_1.i19_1) {
      var tmp$ret$0 = 'Check failed';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    forceFreshInsertTable($this);
  }
  function forceFreshInsertTable($this) {
    var tmp = $this;
    // Inline function 'kotlin.apply' call
    var this_0 = new SlotTable();
    if ($this.p15_1) {
      this_0.x19();
    }
    if ($this.o14_1.z19()) {
      this_0.y19();
    }
    tmp.v15_1 = this_0;
    var tmp_0 = $this;
    // Inline function 'kotlin.also' call
    var this_1 = $this.v15_1.v19();
    this_1.a1a(true);
    tmp_0.w15_1 = this_1;
  }
  function startReaderGroup($this, isNode, data) {
    if (isNode) {
      $this.u15_1.e1a();
    } else {
      if (!(data == null) && !($this.u15_1.c1a() === data)) {
        $this.a16_1.b1a(data);
      }
      $this.u15_1.d1a();
    }
  }
  function start($this, key, objectKey, kind, data) {
    validateNodeNotExpected($this);
    // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroup' call
    var rGroupIndex = $this.y14_1;
    if (objectKey == null)
      if (!(data == null) && key === 207 && !equals(data, Companion_getInstance().f1a_1)) {
        // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
        var keyHash = hashCode(data);
        var tmp = $this;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_0 = $this.g16_1;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_1 = rotateLeft(this_0, 3) ^ keyHash;
        tmp.g16_1 = rotateLeft(this_1, 3) ^ rGroupIndex;
      } else {
        // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
        var tmp_0 = $this;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_2 = $this.g16_1;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_3 = rotateLeft(this_2, 3) ^ key;
        tmp_0.g16_1 = rotateLeft(this_3, 3) ^ rGroupIndex;
      }
     else {
      if (objectKey instanceof Enum) {
        // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
        var keyHash_0 = objectKey.p2_1;
        var tmp_1 = $this;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_4 = $this.g16_1;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_5 = rotateLeft(this_4, 3) ^ keyHash_0;
        tmp_1.g16_1 = rotateLeft(this_5, 3) ^ 0;
      } else {
        // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
        var keyHash_1 = hashCode(objectKey);
        var tmp_2 = $this;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_6 = $this.g16_1;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_7 = rotateLeft(this_6, 3) ^ keyHash_1;
        tmp_2.g16_1 = rotateLeft(this_7, 3) ^ 0;
      }
    }
    if (objectKey == null) {
      $this.y14_1 = $this.y14_1 + 1 | 0;
    }
    // Inline function 'androidx.compose.runtime.GroupKind.isNode' call
    var isNode = !(_GroupKind___get_value__impl__cf5pqe(kind) === _GroupKind___get_value__impl__cf5pqe(Companion_getInstance_0().k19_1));
    if ($this.f16_1) {
      $this.u15_1.g1a();
      var startIndex = $this.w15_1.f19_1;
      if (isNode) {
        $this.w15_1.j1a(key, Companion_getInstance().f1a_1);
      } else if (!(data == null)) {
        var tmp_3 = $this.w15_1;
        tmp_3.i1a(key, objectKey == null ? Companion_getInstance().f1a_1 : objectKey, data);
      } else {
        var tmp_4 = $this.w15_1;
        tmp_4.h1a(key, objectKey == null ? Companion_getInstance().f1a_1 : objectKey);
      }
      var tmp2_safe_receiver = $this.v14_1;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        var insertKeyInfo = new KeyInfo(key, -1, insertedGroupVirtualIndex($this, startIndex), -1, 0);
        tmp2_safe_receiver.q1a(insertKeyInfo, $this.w14_1 - tmp2_safe_receiver.l1a_1 | 0);
        tmp2_safe_receiver.r1a(insertKeyInfo);
      }
      enterGroup($this, isNode, null);
      return Unit_instance;
    }
    var tmp_5;
    // Inline function 'androidx.compose.runtime.GroupKind.isReusable' call
    if (!!(_GroupKind___get_value__impl__cf5pqe(kind) === _GroupKind___get_value__impl__cf5pqe(Companion_getInstance_0().l19_1))) {
      tmp_5 = $this.l15_1;
    } else {
      tmp_5 = false;
    }
    var forceReplace = tmp_5;
    if ($this.v14_1 == null) {
      var slotKey = $this.u15_1.s1a();
      if (!forceReplace && slotKey === key && equals(objectKey, $this.u15_1.u1a())) {
        startReaderGroup($this, isNode, data);
      } else {
        $this.v14_1 = new Pending($this.u15_1.t1a(), $this.w14_1);
      }
    }
    var pending = $this.v14_1;
    var newPending = null;
    if (!(pending == null)) {
      var keyInfo = pending.v1a(key, objectKey);
      if (!forceReplace && !(keyInfo == null)) {
        pending.r1a(keyInfo);
        var location = keyInfo.z1a_1;
        $this.w14_1 = pending.c1b(keyInfo) + pending.l1a_1 | 0;
        var relativePosition = pending.d1b(keyInfo);
        var currentRelativePosition = relativePosition - pending.m1a_1 | 0;
        pending.e1b(relativePosition, pending.m1a_1);
        $this.a16_1.f1b(location);
        $this.u15_1.g1b(location);
        if (currentRelativePosition > 0) {
          $this.a16_1.h1b(currentRelativePosition);
        }
        startReaderGroup($this, isNode, data);
      } else {
        $this.u15_1.g1a();
        $this.f16_1 = true;
        $this.y15_1 = null;
        ensureWriter($this);
        $this.w15_1.w1a();
        var startIndex_0 = $this.w15_1.f19_1;
        if (isNode) {
          $this.w15_1.j1a(key, Companion_getInstance().f1a_1);
        } else if (!(data == null)) {
          var tmp_6 = $this.w15_1;
          tmp_6.i1a(key, objectKey == null ? Companion_getInstance().f1a_1 : objectKey, data);
        } else {
          var tmp_7 = $this.w15_1;
          tmp_7.h1a(key, objectKey == null ? Companion_getInstance().f1a_1 : objectKey);
        }
        $this.b16_1 = $this.w15_1.r19(startIndex_0);
        var insertKeyInfo_0 = new KeyInfo(key, -1, insertedGroupVirtualIndex($this, startIndex_0), -1, 0);
        pending.q1a(insertKeyInfo_0, $this.w14_1 - pending.l1a_1 | 0);
        pending.r1a(insertKeyInfo_0);
        // Inline function 'kotlin.collections.mutableListOf' call
        var tmp$ret$17 = ArrayList_init_$Create$();
        newPending = new Pending(tmp$ret$17, isNode ? 0 : $this.w14_1);
      }
    }
    enterGroup($this, isNode, newPending);
  }
  function enterGroup($this, isNode, newPending) {
    Stack__push_impl_s8r905($this.u14_1, $this.v14_1);
    $this.v14_1 = newPending;
    $this.z14_1.y16($this.x14_1);
    $this.z14_1.y16($this.y14_1);
    $this.z14_1.y16($this.w14_1);
    if (isNode)
      $this.w14_1 = 0;
    $this.x14_1 = 0;
    $this.y14_1 = 0;
  }
  function exitGroup($this, expectedNodeCount, inserting) {
    var previousPending = Stack__pop_impl_8s4za4($this.u14_1);
    if (!(previousPending == null) && !inserting) {
      previousPending.m1a_1 = previousPending.m1a_1 + 1 | 0;
    }
    $this.v14_1 = previousPending;
    $this.w14_1 = $this.z14_1.j18() + expectedNodeCount | 0;
    $this.y14_1 = $this.z14_1.j18();
    $this.x14_1 = $this.z14_1.j18() + expectedNodeCount | 0;
  }
  function end($this, isNode) {
    var rGroupIndex = $this.z14_1.i1b() - 1 | 0;
    if ($this.f16_1) {
      var parent = $this.w15_1.h19_1;
      var tmp2 = $this.w15_1.t19(parent);
      var tmp6 = $this.w15_1.u19(parent);
      // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroup' call
      var data = $this.w15_1.s19(parent);
      if (tmp6 == null)
        if (!(data == null) && tmp2 === 207 && !equals(data, Companion_getInstance().f1a_1)) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var groupKey = hashCode(data);
          var tmp = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_0 = $this.g16_1 ^ rGroupIndex;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_1 = rotateRight(this_0, 3) ^ groupKey;
          tmp.g16_1 = rotateRight(this_1, 3);
        } else {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var tmp_0 = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_2 = $this.g16_1 ^ rGroupIndex;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_3 = rotateRight(this_2, 3) ^ tmp2;
          tmp_0.g16_1 = rotateRight(this_3, 3);
        }
       else {
        if (tmp6 instanceof Enum) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var groupKey_0 = tmp6.p2_1;
          var tmp_1 = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_4 = $this.g16_1 ^ 0;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_5 = rotateRight(this_4, 3) ^ groupKey_0;
          tmp_1.g16_1 = rotateRight(this_5, 3);
        } else {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var groupKey_1 = hashCode(tmp6);
          var tmp_2 = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_6 = $this.g16_1 ^ 0;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_7 = rotateRight(this_6, 3) ^ groupKey_1;
          tmp_2.g16_1 = rotateRight(this_7, 3);
        }
      }
    } else {
      var parent_0 = $this.u15_1.c18_1;
      var tmp2_0 = $this.u15_1.t19(parent_0);
      var tmp6_0 = $this.u15_1.u19(parent_0);
      // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroup' call
      var data_0 = $this.u15_1.s19(parent_0);
      if (tmp6_0 == null)
        if (!(data_0 == null) && tmp2_0 === 207 && !equals(data_0, Companion_getInstance().f1a_1)) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var groupKey_2 = hashCode(data_0);
          var tmp_3 = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_8 = $this.g16_1 ^ rGroupIndex;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_9 = rotateRight(this_8, 3) ^ groupKey_2;
          tmp_3.g16_1 = rotateRight(this_9, 3);
        } else {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var tmp_4 = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_10 = $this.g16_1 ^ rGroupIndex;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_11 = rotateRight(this_10, 3) ^ tmp2_0;
          tmp_4.g16_1 = rotateRight(this_11, 3);
        }
       else {
        if (tmp6_0 instanceof Enum) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var groupKey_3 = tmp6_0.p2_1;
          var tmp_5 = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_12 = $this.g16_1 ^ 0;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_13 = rotateRight(this_12, 3) ^ groupKey_3;
          tmp_5.g16_1 = rotateRight(this_13, 3);
        } else {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var groupKey_4 = hashCode(tmp6_0);
          var tmp_6 = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_14 = $this.g16_1 ^ 0;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_15 = rotateRight(this_14, 3) ^ groupKey_4;
          tmp_6.g16_1 = rotateRight(this_15, 3);
        }
      }
    }
    var expectedNodeCount = $this.x14_1;
    var pending = $this.v14_1;
    if (!(pending == null) && pending.k1a_1.j() > 0) {
      var previous = pending.k1a_1;
      var current = pending.j1b();
      var usedKeys = fastToSet(current);
      // Inline function 'kotlin.collections.mutableSetOf' call
      var placedKeys = LinkedHashSet_init_$Create$();
      var currentIndex = 0;
      var currentEnd = current.j();
      var previousIndex = 0;
      var previousEnd = previous.j();
      var nodeOffset = 0;
      $l$loop_0: while (previousIndex < previousEnd) {
        var previousInfo = previous.p(previousIndex);
        if (!usedKeys.o(previousInfo)) {
          var deleteOffset = pending.c1b(previousInfo);
          $this.a16_1.k1b(deleteOffset + pending.l1a_1 | 0, previousInfo.a1b_1);
          pending.l1b(previousInfo.z1a_1, 0);
          $this.a16_1.f1b(previousInfo.z1a_1);
          $this.u15_1.g1b(previousInfo.z1a_1);
          recordDelete($this);
          $this.u15_1.n19();
          removeRange($this.f15_1, previousInfo.z1a_1, previousInfo.z1a_1 + $this.u15_1.m1b(previousInfo.z1a_1) | 0);
          previousIndex = previousIndex + 1 | 0;
          continue $l$loop_0;
        }
        if (placedKeys.o(previousInfo)) {
          previousIndex = previousIndex + 1 | 0;
          continue $l$loop_0;
        }
        if (currentIndex < currentEnd) {
          var currentInfo = current.p(currentIndex);
          if (!(currentInfo === previousInfo)) {
            var nodePosition = pending.c1b(currentInfo);
            placedKeys.e(currentInfo);
            if (!(nodePosition === nodeOffset)) {
              var updatedCount = pending.n1b(currentInfo);
              $this.a16_1.o1b(nodePosition + pending.l1a_1 | 0, nodeOffset + pending.l1a_1 | 0, updatedCount);
              pending.p1b(nodePosition, nodeOffset, updatedCount);
            }
          } else {
            previousIndex = previousIndex + 1 | 0;
          }
          currentIndex = currentIndex + 1 | 0;
          nodeOffset = nodeOffset + pending.n1b(currentInfo) | 0;
        }
      }
      $this.a16_1.q1b();
      if (previous.j() > 0) {
        $this.a16_1.f1b($this.u15_1.r1b());
        $this.u15_1.w19();
      }
    }
    var inserting = $this.f16_1;
    if (!inserting) {
      var remainingSlots = $this.u15_1.s1b();
      if (remainingSlots > 0) {
        $this.a16_1.t1b(remainingSlots);
      }
    }
    var removeIndex = $this.w14_1;
    while (!$this.u15_1.u1b()) {
      var startSlot = $this.u15_1.a18_1;
      recordDelete($this);
      var nodesToRemove = $this.u15_1.n19();
      $this.a16_1.k1b(removeIndex, nodesToRemove);
      removeRange($this.f15_1, startSlot, $this.u15_1.a18_1);
    }
    if (inserting) {
      if (isNode) {
        $this.c16_1.y1b();
        expectedNodeCount = 1;
      }
      $this.u15_1.z1b();
      var parentGroup = $this.w15_1.h19_1;
      $this.w15_1.a1c();
      if (!$this.u15_1.d1c()) {
        var virtualIndex = insertedGroupVirtualIndex($this, parentGroup);
        $this.w15_1.b1c();
        $this.w15_1.a1a(true);
        recordInsert($this, $this.b16_1);
        $this.f16_1 = false;
        if (!$this.p14_1.c1c()) {
          updateNodeCount($this, virtualIndex, 0);
          updateNodeCountOverrides($this, virtualIndex, expectedNodeCount);
        }
      }
    } else {
      if (isNode) {
        $this.a16_1.v1b();
      }
      $this.a16_1.w1b();
      var parentGroup_0 = $this.u15_1.c18_1;
      var parentNodeCount = updatedNodeCount($this, parentGroup_0);
      if (!(expectedNodeCount === parentNodeCount)) {
        updateNodeCountOverrides($this, parentGroup_0, expectedNodeCount);
      }
      if (isNode) {
        expectedNodeCount = 1;
      }
      $this.u15_1.x1b();
      $this.a16_1.q1b();
    }
    exitGroup($this, expectedNodeCount, inserting);
  }
  function recomposeToGroupEnd($this) {
    var wasComposing = $this.s15_1;
    $this.s15_1 = true;
    var recomposed = false;
    var parent = $this.u15_1.c18_1;
    var end = parent + $this.u15_1.m1b(parent) | 0;
    var recomposeIndex = $this.w14_1;
    var recomposeCompoundKey = $this.g16_1;
    var oldGroupNodeCount = $this.x14_1;
    var oldRGroupIndex = $this.y14_1;
    var oldGroup = parent;
    var firstInRange_0 = firstInRange($this.f15_1, $this.u15_1.a18_1, end);
    while (!(firstInRange_0 == null)) {
      var location = firstInRange_0.b14_1;
      removeLocation($this.f15_1, location);
      if (firstInRange_0.d14()) {
        recomposed = true;
        $this.u15_1.g1b(location);
        var newGroup = $this.u15_1.a18_1;
        recordUpsAndDowns($this, oldGroup, newGroup, parent);
        oldGroup = newGroup;
        $this.w14_1 = nodeIndexOf($this, location, newGroup, parent, recomposeIndex);
        $this.y14_1 = rGroupIndexOf($this, newGroup);
        var newParent = $this.u15_1.q19(newGroup);
        $this.g16_1 = compoundKeyOf($this, newParent, parent, recomposeCompoundKey);
        $this.y15_1 = null;
        var shouldRestartReusing = !$this.l15_1 && firstInRange_0.a14_1.f1c();
        if (shouldRestartReusing)
          $this.l15_1 = true;
        firstInRange_0.a14_1.g1c($this);
        if (shouldRestartReusing)
          $this.l15_1 = false;
        $this.y15_1 = null;
        $this.u15_1.h1c(parent);
      } else {
        Stack__push_impl_s8r905($this.r15_1, firstInRange_0.a14_1);
        firstInRange_0.a14_1.e1c();
        Stack__pop_impl_8s4za4($this.r15_1);
      }
      firstInRange_0 = firstInRange($this.f15_1, $this.u15_1.a18_1, end);
    }
    if (recomposed) {
      recordUpsAndDowns($this, oldGroup, parent, parent);
      $this.u15_1.w19();
      var parentGroupNodes = updatedNodeCount($this, parent);
      $this.w14_1 = recomposeIndex + parentGroupNodes | 0;
      $this.x14_1 = oldGroupNodeCount + parentGroupNodes | 0;
      $this.y14_1 = oldRGroupIndex;
    } else {
      skipReaderToGroupEnd($this);
    }
    $this.g16_1 = recomposeCompoundKey;
    $this.s15_1 = wasComposing;
  }
  function insertedGroupVirtualIndex($this, index) {
    return -2 - index | 0;
  }
  function updateNodeCountOverrides($this, group, newCount) {
    var currentCount = updatedNodeCount($this, group);
    if (!(currentCount === newCount)) {
      var delta = newCount - currentCount | 0;
      var current = group;
      var minPending = _Stack___get_size__impl__mdb81l($this.u14_1) - 1 | 0;
      $l$loop_0: while (!(current === -1)) {
        var newCurrentNodes = updatedNodeCount($this, current) + delta | 0;
        updateNodeCount($this, current, newCurrentNodes);
        var inductionVariable = minPending;
        if (0 <= inductionVariable)
          $l$loop: do {
            var pendingIndex = inductionVariable;
            inductionVariable = inductionVariable + -1 | 0;
            var pending = Stack__peek_impl_gtylu2_0($this.u14_1, pendingIndex);
            if (!(pending == null) && pending.l1b(current, newCurrentNodes)) {
              minPending = pendingIndex - 1 | 0;
              break $l$loop;
            }
          }
           while (0 <= inductionVariable);
        if (current < 0) {
          current = $this.u15_1.c18_1;
        } else {
          if ($this.u15_1.i1c(current))
            break $l$loop_0;
          current = $this.u15_1.q19(current);
        }
      }
    }
  }
  function nodeIndexOf($this, groupLocation, group, recomposeGroup, recomposeIndex) {
    var anchorGroup = $this.u15_1.q19(group);
    $l$loop: while (!(anchorGroup === recomposeGroup) && !$this.u15_1.i1c(anchorGroup)) {
      anchorGroup = $this.u15_1.q19(anchorGroup);
    }
    var index = $this.u15_1.i1c(anchorGroup) ? 0 : recomposeIndex;
    if (anchorGroup === group)
      return index;
    var current = anchorGroup;
    var nodeIndexLimit = index + (updatedNodeCount($this, anchorGroup) - $this.u15_1.j1c(group) | 0) | 0;
    loop: while (index < nodeIndexLimit && current !== groupLocation) {
      current = current + 1 | 0;
      while (current < groupLocation) {
        var end = current + $this.u15_1.m1b(current) | 0;
        if (groupLocation < end)
          continue loop;
        index = index + ($this.u15_1.i1c(current) ? 1 : updatedNodeCount($this, current)) | 0;
        current = end;
      }
      break loop;
    }
    return index;
  }
  function rGroupIndexOf($this, group) {
    var result = 0;
    var parent = $this.u15_1.q19(group);
    var child = parent + 1 | 0;
    while (child < group) {
      if (!$this.u15_1.k1c(child)) {
        result = result + 1 | 0;
      }
      child = child + $this.u15_1.m1b(child) | 0;
    }
    return result;
  }
  function updatedNodeCount($this, group) {
    if (group < 0) {
      var tmp0_safe_receiver = $this.b15_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        var tmp_0;
        // Inline function 'androidx.collection.IntIntMap.contains' call
        if (tmp0_safe_receiver.bw(group)) {
          tmp_0 = tmp0_safe_receiver.p(group);
        } else {
          tmp_0 = 0;
        }
        tmp = tmp_0;
      }
      var tmp1_elvis_lhs = tmp;
      return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    }
    var nodeCounts = $this.a15_1;
    if (!(nodeCounts == null)) {
      var override = nodeCounts[group];
      if (override >= 0)
        return override;
    }
    return $this.u15_1.j1c(group);
  }
  function updateNodeCount($this, group, count) {
    if (!(updatedNodeCount($this, group) === count)) {
      if (group < 0) {
        var tmp0_elvis_lhs = $this.b15_1;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          // Inline function 'kotlin.run' call
          var newCounts = new MutableIntIntMap();
          $this.b15_1 = newCounts;
          tmp = newCounts;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var virtualCounts = tmp;
        virtualCounts.yv(group, count);
      } else {
        var tmp1_elvis_lhs = $this.a15_1;
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          // Inline function 'kotlin.run' call
          var newCounts_0 = new Int32Array($this.u15_1.j());
          fill(newCounts_0, -1);
          $this.a15_1 = newCounts_0;
          tmp_0 = newCounts_0;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        var nodeCounts = tmp_0;
        nodeCounts[group] = count;
      }
    }
  }
  function clearUpdatedNodeCounts($this) {
    $this.a15_1 = null;
    $this.b15_1 = null;
  }
  function recordUpsAndDowns($this, oldGroup, newGroup, commonRoot) {
    var reader = $this.u15_1;
    var nearestCommonRoot = nearestCommonRootOf(reader, oldGroup, newGroup, commonRoot);
    var current = oldGroup;
    while (current > 0 && !(current === nearestCommonRoot)) {
      if (reader.i1c(current)) {
        $this.a16_1.v1b();
      }
      current = reader.q19(current);
    }
    doRecordDownsFor($this, newGroup, nearestCommonRoot);
  }
  function doRecordDownsFor($this, group, nearestCommonRoot) {
    if (group > 0 && !(group === nearestCommonRoot)) {
      doRecordDownsFor($this, $this.u15_1.q19(group), nearestCommonRoot);
      if ($this.u15_1.i1c(group)) {
        $this.a16_1.l1c(nodeAt($this, $this.u15_1, group));
      }
    }
  }
  function compoundKeyOf($this, group, recomposeGroup, recomposeKey) {
    var keyRot = 3;
    var rgiRot = 0;
    var result = 0;
    var parent = group;
    while (parent >= 0) {
      if (parent === recomposeGroup) {
        var tmp = result;
        // Inline function 'androidx.compose.runtime.rol' call
        var other = rgiRot;
        result = tmp ^ rotateLeft(recomposeKey, other);
        return result;
      }
      var groupKey = groupCompoundKeyPart($this, $this.u15_1, parent);
      if (groupKey === 126665345) {
        var tmp_0 = result;
        // Inline function 'androidx.compose.runtime.rol' call
        var other_0 = rgiRot;
        result = tmp_0 ^ rotateLeft(groupKey, other_0);
        return result;
      }
      var effectiveRGroupIndex = $this.u15_1.k1c(parent) ? 0 : rGroupIndexOf($this, parent);
      var tmp_1 = result;
      // Inline function 'androidx.compose.runtime.rol' call
      var other_1 = keyRot;
      var tmp_2 = tmp_1 ^ rotateLeft(groupKey, other_1);
      // Inline function 'androidx.compose.runtime.rol' call
      var other_2 = rgiRot;
      result = tmp_2 ^ rotateLeft(effectiveRGroupIndex, other_2);
      keyRot = (keyRot + 6 | 0) % 32 | 0;
      rgiRot = (rgiRot + 6 | 0) % 32 | 0;
      parent = $this.u15_1.q19(parent);
    }
    return result;
  }
  function groupCompoundKeyPart($this, _this__u8e3s4, group) {
    var tmp;
    if (_this__u8e3s4.k1c(group)) {
      var tmp0_safe_receiver = _this__u8e3s4.u19(group);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        var tmp_1;
        if (tmp0_safe_receiver instanceof Enum) {
          tmp_1 = tmp0_safe_receiver.p2_1;
        } else {
          if (tmp0_safe_receiver instanceof MovableContent) {
            tmp_1 = 126665345;
          } else {
            tmp_1 = hashCode(tmp0_safe_receiver);
          }
        }
        tmp_0 = tmp_1;
      }
      var tmp1_elvis_lhs = tmp_0;
      tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    } else {
      // Inline function 'kotlin.let' call
      var it = _this__u8e3s4.t19(group);
      var tmp_2;
      if (it === 207) {
        var tmp0_safe_receiver_0 = _this__u8e3s4.s19(group);
        var tmp_3;
        if (tmp0_safe_receiver_0 == null) {
          tmp_3 = null;
        } else {
          // Inline function 'kotlin.let' call
          tmp_3 = equals(tmp0_safe_receiver_0, Companion_getInstance().f1a_1) ? it : hashCode(tmp0_safe_receiver_0);
        }
        var tmp1_elvis_lhs_0 = tmp_3;
        tmp_2 = tmp1_elvis_lhs_0 == null ? it : tmp1_elvis_lhs_0;
      } else {
        tmp_2 = it;
      }
      tmp = tmp_2;
    }
    return tmp;
  }
  function skipReaderToGroupEnd($this) {
    $this.x14_1 = $this.u15_1.m1c();
    $this.u15_1.w19();
  }
  function addRecomposeScope($this) {
    if ($this.f16_1) {
      var tmp = $this.t14_1;
      var scope = new RecomposeScopeImpl(tmp instanceof CompositionImpl ? tmp : THROW_CCE());
      Stack__push_impl_s8r905($this.r15_1, scope);
      $this.p19(scope);
      scope.q1c($this.o15_1);
    } else {
      var invalidation = removeLocation($this.f15_1, $this.u15_1.c18_1);
      var slot = $this.u15_1.i();
      var tmp_0;
      if (equals(slot, Companion_getInstance().f1a_1)) {
        var tmp_1 = $this.t14_1;
        var newScope = new RecomposeScopeImpl(tmp_1 instanceof CompositionImpl ? tmp_1 : THROW_CCE());
        $this.p19(newScope);
        tmp_0 = newScope;
      } else {
        tmp_0 = slot instanceof RecomposeScopeImpl ? slot : THROW_CCE();
      }
      var scope_0 = tmp_0;
      var tmp_2;
      if (!(invalidation == null)) {
        tmp_2 = true;
      } else {
        // Inline function 'kotlin.also' call
        var this_0 = scope_0.n1c();
        if (this_0) {
          scope_0.o1c(false);
        }
        tmp_2 = this_0;
      }
      scope_0.p1c(tmp_2);
      Stack__push_impl_s8r905($this.r15_1, scope_0);
      scope_0.q1c($this.o15_1);
      if (scope_0.u1c()) {
        scope_0.r1c(false);
        scope_0.s1c(true);
        $this.a16_1.t1c(scope_0);
      }
    }
  }
  function invokeMovableContentLambda($this, content, locals, parameter, force) {
    $this.v1c(126665345, content);
    updateSlot($this, parameter);
    var savedCompoundKeyHash = $this.g16_1;
    try {
      $this.g16_1 = 126665345;
      if ($this.f16_1) {
        $this.w15_1.w1c();
      }
      var providersChanged = $this.f16_1 ? false : !equals($this.u15_1.c1a(), locals);
      if (providersChanged) {
        recordProviderUpdate($this, locals);
      }
      start($this, 202, get_compositionLocalMap(), Companion_getInstance_0().k19_1, locals);
      $this.y15_1 = null;
      if ($this.f16_1 && !force) {
        $this.x15_1 = true;
        var anchor = $this.w15_1.r19($this.w15_1.q19($this.w15_1.h19_1));
        var reference = new MovableContentStateReference(content, parameter, $this.t14_1, $this.v15_1, anchor, emptyList(), currentCompositionLocalScope($this), null);
        $this.o14_1.x1c(reference);
      } else {
        var savedProvidersInvalid = $this.j15_1;
        $this.j15_1 = providersChanged;
        invokeComposable($this, ComposableLambda$invoke$ref(composableLambdaInstance(316014703, true, ComposerImpl$invokeMovableContentLambda$lambda(content, parameter))));
        $this.j15_1 = savedProvidersInvalid;
      }
    }finally {
      endGroup($this);
      $this.y15_1 = null;
      $this.g16_1 = savedCompoundKeyHash;
      $this.y1c();
    }
  }
  function insertMovableContentGuarded($this, references) {
    var tmp0 = $this.a16_1;
    // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.withChangeList' call
    var newChangeList = $this.s14_1;
    var previousChangeList = tmp0.h17_1;
    try {
      tmp0.h17_1 = newChangeList;
      $this.a16_1.z1c();
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var inductionVariable = 0;
      var last = references.j() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.p(index);
          var to = item.af();
          var from = item.bf();
          var anchor = to.e1d_1;
          var location = to.d1d_1.i1d(anchor);
          var effectiveNodeIndex = new IntRef();
          $this.a16_1.j1d(effectiveNodeIndex, anchor);
          if (from == null) {
            var toSlotTable = to.d1d_1;
            if (equals(toSlotTable, $this.v15_1)) {
              createFreshInsertTable($this);
            }
            // Inline function 'androidx.compose.runtime.SlotTable.read' call
            // Inline function 'kotlin.let' call
            var reader = to.d1d_1.t16();
            var tmp;
            try {
              reader.g1b(location);
              $this.a16_1.o1d(location);
              var offsetChanges = new ChangeList();
              recomposeMovableContent$default($this, VOID, VOID, VOID, VOID, ComposerImpl$insertMovableContentGuarded$lambda($this, offsetChanges, reader, to));
              $this.a16_1.p1d(offsetChanges, effectiveNodeIndex);
              tmp = Unit_instance;
            }finally {
              reader.i18();
            }
          } else {
            var resolvedState = $this.o14_1.k1d(from);
            var tmp1_elvis_lhs = resolvedState == null ? null : resolvedState.l1d_1;
            var fromTable = tmp1_elvis_lhs == null ? from.d1d_1 : tmp1_elvis_lhs;
            var tmp3_safe_receiver = resolvedState == null ? null : resolvedState.l1d_1;
            var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.r19(0);
            var fromAnchor = tmp4_elvis_lhs == null ? from.e1d_1 : tmp4_elvis_lhs;
            var nodesToInsert = collectNodesFrom(fromTable, fromAnchor);
            // Inline function 'kotlin.collections.isNotEmpty' call
            if (!nodesToInsert.r()) {
              $this.a16_1.m1d(nodesToInsert, effectiveNodeIndex);
              if (equals(to.d1d_1, $this.p14_1)) {
                var group = $this.p14_1.i1d(anchor);
                updateNodeCount($this, group, updatedNodeCount($this, group) + nodesToInsert.j() | 0);
              }
            }
            $this.a16_1.n1d(resolvedState, $this.o14_1, from, to);
            // Inline function 'androidx.compose.runtime.SlotTable.read' call
            // Inline function 'kotlin.let' call
            var reader_0 = fromTable.t16();
            var tmp_0;
            try {
              $l$block: {
                // Inline function 'androidx.compose.runtime.ComposerImpl.withReader' call
                var savedReader = $this.u15_1;
                var savedCountOverrides = $this.a15_1;
                var savedProviderUpdates = $this.i15_1;
                $this.a15_1 = null;
                $this.i15_1 = null;
                try {
                  $this.u15_1 = reader_0;
                  var newLocation = fromTable.i1d(fromAnchor);
                  reader_0.g1b(newLocation);
                  $this.a16_1.o1d(newLocation);
                  var offsetChanges_0 = new ChangeList();
                  // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.withChangeList' call
                  var this_0 = $this.a16_1;
                  var previousChangeList_0 = this_0.h17_1;
                  try {
                    this_0.h17_1 = offsetChanges_0;
                    // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.withoutImplicitRootStart' call
                    var this_1 = $this.a16_1;
                    var previousImplicitRootStart = this_1.k17_1;
                    try {
                      this_1.k17_1 = false;
                      var tmp_1 = reader_0.a18_1;
                      var tmp_2 = from.f1d_1;
                      recomposeMovableContent($this, from.c1d_1, to.c1d_1, tmp_1, tmp_2, ComposerImpl$insertMovableContentGuarded$lambda_0($this, to));
                    }finally {
                      this_1.k17_1 = previousImplicitRootStart;
                    }
                  }finally {
                    this_0.h17_1 = previousChangeList_0;
                  }
                  $this.a16_1.p1d(offsetChanges_0, effectiveNodeIndex);
                  break $l$block;
                }finally {
                  $this.u15_1 = savedReader;
                  $this.a15_1 = savedCountOverrides;
                  $this.i15_1 = savedProviderUpdates;
                }
              }
              tmp_0 = Unit_instance;
            }finally {
              reader_0.i18();
            }
          }
          $this.a16_1.q1d();
        }
         while (inductionVariable <= last);
      $this.a16_1.r1d();
      $this.a16_1.o1d(0);
    }finally {
      tmp0.h17_1 = previousChangeList;
    }
  }
  function recomposeMovableContent($this, from, to, index, invalidations, block) {
    var savedIsComposing = $this.s15_1;
    var savedNodeIndex = $this.w14_1;
    try {
      $this.s15_1 = true;
      $this.w14_1 = 0;
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var inductionVariable = 0;
      var last = invalidations.j() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = invalidations.p(index_0);
          var scope = item.af();
          var instances = item.bf();
          if (!(instances == null)) {
            $this.s1d(scope, instances);
          } else {
            $this.s1d(scope, null);
          }
        }
         while (inductionVariable <= last);
      var tmp;
      if (from == null) {
        tmp = null;
      } else {
        tmp = from.t1d(to, index == null ? -1 : index, block);
      }
      var tmp2_elvis_lhs = tmp;
      return tmp2_elvis_lhs == null ? block() : tmp2_elvis_lhs;
    }finally {
      $this.s15_1 = savedIsComposing;
      $this.w14_1 = savedNodeIndex;
    }
  }
  function recomposeMovableContent$default($this, from, to, index, invalidations, block, $super) {
    from = from === VOID ? null : from;
    to = to === VOID ? null : to;
    index = index === VOID ? null : index;
    invalidations = invalidations === VOID ? emptyList() : invalidations;
    return recomposeMovableContent($this, from, to, index, invalidations, block);
  }
  function doCompose($this, invalidationsRequested, content) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!$this.s15_1) {
      var tmp$ret$0 = 'Reentrant composition is not supported';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var tmp0 = 'Compose:recompose';
    $l$block: {
      // Inline function 'androidx.compose.runtime.internal.trace' call
      var token = Trace_instance.u1d(tmp0);
      try {
        $this.o15_1 = getNumberHashCode(currentSnapshot().z1d());
        $this.i15_1 = null;
        $this.a1e(invalidationsRequested);
        $this.w14_1 = 0;
        var complete = false;
        $this.s15_1 = true;
        try {
          startRoot($this);
          var savedContent = $this.o19();
          if (!(savedContent === content) && !(content == null)) {
            $this.p19((content == null ? true : !(content == null)) ? content : THROW_CCE());
          }
          // Inline function 'androidx.compose.runtime.observeDerivedStateRecalculations' call
          var observer = $this.q15_1;
          var observers = derivedStateObservers_0();
          try {
            observers.jy(observer);
            if (!(content == null)) {
              startGroup_0($this, 200, get_invocation());
              invokeComposable($this, content);
              endGroup($this);
            } else if (($this.d15_1 || $this.j15_1) && !(savedContent == null) && !equals(savedContent, Companion_getInstance().f1a_1)) {
              startGroup_0($this, 200, get_invocation());
              invokeComposable($this, (!(savedContent == null) ? typeof savedContent === 'function' : false) ? savedContent : THROW_CCE());
              endGroup($this);
            } else {
              $this.e1e();
            }
          }finally {
            // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
            var tmp$ret$3 = observers.d1e_1 - 1 | 0;
            observers.b2(tmp$ret$3);
          }
          endRoot($this);
          complete = true;
        }finally {
          $this.s15_1 = false;
          $this.f15_1.y1();
          if (!complete) {
            abortRoot($this);
          }
          createFreshInsertTable($this);
        }
        break $l$block;
      }finally {
        Trace_instance.f1e(token);
      }
    }
  }
  function _get_node__db0vwp($this, _this__u8e3s4) {
    return _this__u8e3s4.g1e(_this__u8e3s4.c18_1);
  }
  function nodeAt($this, _this__u8e3s4, index) {
    return _this__u8e3s4.g1e(index);
  }
  function validateNodeExpected($this) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!$this.e15_1) {
      var tmp$ret$0 = 'A call to createNode(), emitNode() or useNode() expected was not expected';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    $this.e15_1 = false;
  }
  function validateNodeNotExpected($this) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!$this.e15_1) {
      var tmp$ret$0 = 'A call to createNode(), emitNode() or useNode() expected';
      composeImmediateRuntimeError(tmp$ret$0);
    }
  }
  function recordInsert($this, anchor) {
    if ($this.c16_1.r()) {
      $this.a16_1.i1e(anchor, $this.v15_1);
    } else {
      $this.a16_1.h1e(anchor, $this.v15_1, $this.c16_1);
      $this.c16_1 = new FixupList();
    }
  }
  function recordDelete($this) {
    reportFreeMovableContent($this, $this.u15_1.a18_1);
    $this.a16_1.j1e();
  }
  function reportFreeMovableContent($this, groupBeingRemoved) {
    var rootIsNode = $this.u15_1.i1c(groupBeingRemoved);
    if (rootIsNode) {
      $this.a16_1.q1b();
      $this.a16_1.l1c($this.u15_1.g1e(groupBeingRemoved));
    }
    reportFreeMovableContent$reportGroup($this, groupBeingRemoved, groupBeingRemoved, rootIsNode, 0);
    $this.a16_1.q1b();
    if (rootIsNode) {
      $this.a16_1.v1b();
    }
  }
  function reportAllMovableContent($this) {
    if ($this.p14_1.l1f()) {
      var tmp = $this.t14_1;
      (tmp instanceof CompositionImpl ? tmp : THROW_CCE()).j1f();
      var changes = new ChangeList();
      $this.z15_1 = changes;
      // Inline function 'androidx.compose.runtime.SlotTable.read' call
      // Inline function 'kotlin.let' call
      var reader = $this.p14_1.t16();
      var tmp_0;
      try {
        $this.u15_1 = reader;
        // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.withChangeList' call
        var this_0 = $this.a16_1;
        var previousChangeList = this_0.h17_1;
        try {
          this_0.h17_1 = changes;
          reportFreeMovableContent($this, 0);
          $this.a16_1.k1f();
        }finally {
          this_0.h17_1 = previousChangeList;
        }
        tmp_0 = Unit_instance;
      }finally {
        reader.i18();
      }
    }
  }
  function finalizeCompose($this) {
    $this.a16_1.m1f();
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!Stack__isEmpty_impl_modt1q($this.u14_1)) {
      var tmp$ret$0 = 'Start/end imbalance';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    cleanUpCompose($this);
  }
  function cleanUpCompose($this) {
    $this.v14_1 = null;
    $this.w14_1 = 0;
    $this.x14_1 = 0;
    $this.g16_1 = 0;
    $this.e15_1 = false;
    $this.a16_1.n1f();
    Stack__clear_impl_qoqv3c($this.r15_1);
    clearUpdatedNodeCounts($this);
  }
  function CompositionContextHolder() {
  }
  function reportFreeMovableContent$createMovableContentReferenceForGroup(this$0, group, nestedStates) {
    var tmp = this$0.u15_1.u19(group);
    var movableContent = tmp instanceof MovableContent ? tmp : THROW_CCE();
    var parameter = this$0.u15_1.o1f(group, 0);
    var anchor = this$0.u15_1.r19(group);
    var end = group + this$0.u15_1.m1b(group) | 0;
    // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
    var this_0 = filterToRange(this$0.f15_1, group, end);
    var target = ArrayList_init_$Create$_0(this_0.j());
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var inductionVariable = 0;
    var last = this_0.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.p(index);
        // Inline function 'kotlin.collections.plusAssign' call
        var element = to(item.a14_1, item.c14_1);
        target.e(element);
      }
       while (inductionVariable <= last);
    var invalidations = target;
    var reference = new MovableContentStateReference(movableContent, parameter, this$0.t14_1, this$0.p14_1, anchor, invalidations, currentCompositionLocalScope_0(this$0, group), nestedStates);
    return reference;
  }
  function reportFreeMovableContent$movableContentReferenceFor$traverseGroups(this$0, nestedStates, group) {
    var size = this$0.u15_1.m1b(group);
    var end = group + size | 0;
    var current = group + 1 | 0;
    while (current < end) {
      if (this$0.u15_1.q1f(current)) {
        var tmp0_safe_receiver = reportFreeMovableContent$movableContentReferenceFor(this$0, current);
        if (tmp0_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          nestedStates.e(tmp0_safe_receiver);
        }
      } else if (this$0.u15_1.p1f(current)) {
        reportFreeMovableContent$movableContentReferenceFor$traverseGroups(this$0, nestedStates, current);
      }
      current = current + this$0.u15_1.m1b(current) | 0;
    }
  }
  function reportFreeMovableContent$movableContentReferenceFor(this$0, group) {
    var key = this$0.u15_1.t19(group);
    var objectKey = this$0.u15_1.u19(group);
    var tmp;
    var tmp_0;
    if (key === 126665345) {
      tmp_0 = objectKey instanceof MovableContent;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp_1;
      if (this$0.u15_1.p1f(group)) {
        // Inline function 'kotlin.collections.mutableListOf' call
        var nestedStates = ArrayList_init_$Create$();
        reportFreeMovableContent$movableContentReferenceFor$traverseGroups(this$0, nestedStates, group);
        // Inline function 'kotlin.takeIf' call
        var tmp_2;
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!nestedStates.r()) {
          tmp_2 = nestedStates;
        } else {
          tmp_2 = null;
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = null;
      }
      var nestedStates_0 = tmp_1;
      tmp = reportFreeMovableContent$createMovableContentReferenceForGroup(this$0, group, nestedStates_0);
    } else {
      tmp = null;
    }
    return tmp;
  }
  function reportFreeMovableContent$reportGroup(this$0, $groupBeingRemoved, group, needsNodeDelete, nodeIndex) {
    var reader = this$0.u15_1;
    var tmp;
    if (reader.q1f(group)) {
      var key = reader.t19(group);
      var objectKey = reader.u19(group);
      var tmp_0;
      var tmp_1;
      if (key === 126665345) {
        tmp_1 = objectKey instanceof MovableContent;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var reference = reportFreeMovableContent$movableContentReferenceFor(this$0, group);
        if (!(reference == null)) {
          this$0.o14_1.b1g(reference);
          this$0.a16_1.c1g();
          this$0.a16_1.d1g(this$0.t14_1, this$0.o14_1, reference);
        }
        var tmp_2;
        if (needsNodeDelete && !(group === $groupBeingRemoved)) {
          this$0.a16_1.e1g(nodeIndex, group);
          tmp_2 = 0;
        } else {
          tmp_2 = reader.j1c(group);
        }
        tmp_0 = tmp_2;
      } else {
        if (key === 206 && equals(objectKey, get_reference())) {
          var tmp_3 = reader.o1f(group, 0);
          var contextHolder = tmp_3 instanceof CompositionContextHolder ? tmp_3 : null;
          if (!(contextHolder == null)) {
            var compositionContext = contextHolder.r1f_1;
            // Inline function 'kotlin.collections.forEach' call
            var _iterator__ex2g4s = compositionContext.x1f_1.g();
            while (_iterator__ex2g4s.h()) {
              var element = _iterator__ex2g4s.i();
              reportAllMovableContent(element);
              this$0.o14_1.a1g(element.t14_1);
            }
          }
          tmp_0 = reader.j1c(group);
        } else {
          if (reader.i1c(group)) {
            tmp_0 = 1;
          } else {
            tmp_0 = reader.j1c(group);
          }
        }
      }
      tmp = tmp_0;
    } else if (reader.p1f(group)) {
      var size = reader.m1b(group);
      var end = group + size | 0;
      var current = group + 1 | 0;
      var runningNodeCount = 0;
      while (current < end) {
        var isNode = reader.i1c(current);
        if (isNode) {
          this$0.a16_1.q1b();
          this$0.a16_1.l1c(reader.g1e(current));
        }
        runningNodeCount = runningNodeCount + reportFreeMovableContent$reportGroup(this$0, $groupBeingRemoved, current, isNode || needsNodeDelete, isNode ? 0 : nodeIndex + runningNodeCount | 0) | 0;
        if (isNode) {
          this$0.a16_1.q1b();
          this$0.a16_1.v1b();
        }
        current = current + reader.m1b(current) | 0;
      }
      tmp = reader.i1c(group) ? 1 : runningNodeCount;
    } else if (reader.i1c(group)) {
      tmp = 1;
    } else {
      tmp = reader.j1c(group);
    }
    return tmp;
  }
  function ComposerImpl$derivedStateObserver$1(this$0) {
    this.f1g_1 = this$0;
  }
  function ComposableLambda$invoke$ref(p0) {
    return function (_this__u8e3s4, p0_0) {
      return p0.g1g(_this__u8e3s4, p0_0);
    };
  }
  function ComposerImpl$invokeMovableContentLambda$lambda($content, $parameter) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C3386@136506L18:Composer.kt#9igjgp');
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.i1g()) {
        if (isTraceInProgress()) {
          traceEventStart(316014703, $changed, -1, 'androidx.compose.runtime.ComposerImpl.invokeMovableContentLambda.<anonymous> (Composer.kt:3386)');
        }
        $content.h1g_1($parameter, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.w19();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda(this$0, $offsetChanges, $reader, $to) {
    return function () {
      var tmp0 = this$0.a16_1;
      // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.withChangeList' call
      var newChangeList = $offsetChanges;
      var previousChangeList = tmp0.h17_1;
      try {
        tmp0.h17_1 = newChangeList;
        var tmp0_0 = this$0;
        var tmp2 = $reader;
        $l$block: {
          // Inline function 'androidx.compose.runtime.ComposerImpl.withReader' call
          var savedReader = tmp0_0.u15_1;
          var savedCountOverrides = tmp0_0.a15_1;
          var savedProviderUpdates = tmp0_0.i15_1;
          tmp0_0.a15_1 = null;
          tmp0_0.i15_1 = null;
          try {
            tmp0_0.u15_1 = tmp2;
            // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.withoutImplicitRootStart' call
            var this_0 = this$0.a16_1;
            var previousImplicitRootStart = this_0.k17_1;
            try {
              this_0.k17_1 = false;
              invokeMovableContentLambda(this$0, $to.a1d_1, $to.g1d_1, $to.b1d_1, true);
            }finally {
              this_0.k17_1 = previousImplicitRootStart;
            }
            break $l$block;
          }finally {
            tmp0_0.u15_1 = savedReader;
            tmp0_0.a15_1 = savedCountOverrides;
            tmp0_0.i15_1 = savedProviderUpdates;
          }
        }
      }finally {
        tmp0.h17_1 = previousChangeList;
      }
      return Unit_instance;
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_0(this$0, $to) {
    return function () {
      invokeMovableContentLambda(this$0, $to.a1d_1, $to.g1d_1, $to.b1d_1, true);
      return Unit_instance;
    };
  }
  function ComposerImpl(applier, parentContext, slotTable, abandonSet, changes, lateChanges, composition) {
    this.n14_1 = applier;
    this.o14_1 = parentContext;
    this.p14_1 = slotTable;
    this.q14_1 = abandonSet;
    this.r14_1 = changes;
    this.s14_1 = lateChanges;
    this.t14_1 = composition;
    this.u14_1 = _Stack___init__impl__tvpfn5();
    this.v14_1 = null;
    this.w14_1 = 0;
    this.x14_1 = 0;
    this.y14_1 = 0;
    this.z14_1 = new IntStack();
    this.a15_1 = null;
    this.b15_1 = null;
    this.c15_1 = false;
    this.d15_1 = false;
    this.e15_1 = false;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.f15_1 = ArrayList_init_$Create$();
    this.g15_1 = new IntStack();
    this.h15_1 = persistentCompositionLocalHashMapOf();
    this.i15_1 = null;
    this.j15_1 = false;
    this.k15_1 = new IntStack();
    this.l15_1 = false;
    this.m15_1 = -1;
    this.n15_1 = 0;
    this.o15_1 = 0;
    this.p15_1 = this.o14_1.b17() || this.o14_1.z19();
    var tmp_0 = this;
    tmp_0.q15_1 = new ComposerImpl$derivedStateObserver$1(this);
    this.r15_1 = _Stack___init__impl__tvpfn5();
    this.s15_1 = false;
    this.t15_1 = false;
    var tmp_1 = this;
    // Inline function 'kotlin.also' call
    var this_0 = this.p14_1.t16();
    this_0.i18();
    tmp_1.u15_1 = this_0;
    var tmp_2 = this;
    // Inline function 'kotlin.apply' call
    var this_1 = new SlotTable();
    if (this.o14_1.b17()) {
      this_1.x19();
    }
    if (this.o14_1.z19()) {
      this_1.y19();
    }
    tmp_2.v15_1 = this_1;
    var tmp_3 = this;
    // Inline function 'kotlin.also' call
    var this_2 = this.v15_1.v19();
    this_2.a1a(true);
    tmp_3.w15_1 = this_2;
    this.x15_1 = false;
    this.y15_1 = null;
    this.z15_1 = null;
    this.a16_1 = new ComposerChangeListWriter(this, this.r14_1);
    var tmp_4 = this;
    // Inline function 'androidx.compose.runtime.SlotTable.read' call
    // Inline function 'kotlin.let' call
    var reader = this.v15_1.t16();
    var tmp_5;
    try {
      tmp_5 = reader.r19(0);
    }finally {
      reader.i18();
    }
    tmp_4.b16_1 = tmp_5;
    this.c16_1 = new FixupList();
    this.d16_1 = false;
    this.e16_1 = null;
    this.f16_1 = false;
    this.g16_1 = 0;
    this.h16_1 = null;
  }
  protoOf(ComposerImpl).j1g = function () {
    return this.n14_1;
  };
  protoOf(ComposerImpl).k1g = function () {
    return this.n15_1 > 0;
  };
  protoOf(ComposerImpl).l1g = function () {
    return this.o14_1.m1g();
  };
  protoOf(ComposerImpl).n1g = function (key) {
    return start(this, key, null, Companion_getInstance_0().k19_1, null);
  };
  protoOf(ComposerImpl).o1g = function () {
    return endGroup(this);
  };
  protoOf(ComposerImpl).p1g = function (key) {
    var pending = this.v14_1;
    if (!(pending == null)) {
      start(this, key, null, Companion_getInstance_0().k19_1, null);
      return Unit_instance;
    }
    validateNodeNotExpected(this);
    // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroup' call
    var rGroupIndex = this.y14_1;
    if (null == null)
      if (!(null == null) && key === 207 && !equals(null, Companion_getInstance().f1a_1)) {
        // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
        var keyHash = hashCode(null);
        var tmp = this;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_0 = this.g16_1;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_1 = rotateLeft(this_0, 3) ^ keyHash;
        tmp.g16_1 = rotateLeft(this_1, 3) ^ rGroupIndex;
      } else {
        // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
        var tmp_0 = this;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_2 = this.g16_1;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_3 = rotateLeft(this_2, 3) ^ key;
        tmp_0.g16_1 = rotateLeft(this_3, 3) ^ rGroupIndex;
      }
     else {
      if (null instanceof Enum) {
        // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
        var keyHash_0 = null.p2_1;
        var tmp_1 = this;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_4 = this.g16_1;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_5 = rotateLeft(this_4, 3) ^ keyHash_0;
        tmp_1.g16_1 = rotateLeft(this_5, 3) ^ 0;
      } else {
        // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
        var keyHash_1 = hashCode(null);
        var tmp_2 = this;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_6 = this.g16_1;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_7 = rotateLeft(this_6, 3) ^ keyHash_1;
        tmp_2.g16_1 = rotateLeft(this_7, 3) ^ 0;
      }
    }
    this.y14_1 = this.y14_1 + 1 | 0;
    var reader = this.u15_1;
    if (this.f16_1) {
      reader.g1a();
      this.w15_1.h1a(key, Companion_getInstance().f1a_1);
      enterGroup(this, false, null);
      return Unit_instance;
    }
    var slotKey = reader.s1a();
    if (slotKey === key && !reader.q1g()) {
      reader.d1a();
      enterGroup(this, false, null);
      return Unit_instance;
    }
    if (!reader.u1b()) {
      var removeIndex = this.w14_1;
      var startSlot = reader.a18_1;
      recordDelete(this);
      var nodesToRemove = reader.n19();
      this.a16_1.k1b(removeIndex, nodesToRemove);
      removeRange(this.f15_1, startSlot, reader.a18_1);
    }
    reader.g1a();
    this.f16_1 = true;
    this.y15_1 = null;
    ensureWriter(this);
    var writer = this.w15_1;
    writer.w1a();
    var startIndex = writer.f19_1;
    writer.h1a(key, Companion_getInstance().f1a_1);
    this.b16_1 = writer.r19(startIndex);
    enterGroup(this, false, null);
  };
  protoOf(ComposerImpl).r1g = function () {
    return endGroup(this);
  };
  protoOf(ComposerImpl).s1g = function () {
    return start(this, -127, null, Companion_getInstance_0().k19_1, null);
  };
  protoOf(ComposerImpl).t1g = function () {
    endGroup(this);
    var scope = this.u1g();
    if (!(scope == null) && scope.j1b()) {
      scope.v1g(true);
    }
  };
  protoOf(ComposerImpl).w1g = function () {
    var tmp;
    if (!this.i1g() || this.j15_1) {
      tmp = true;
    } else {
      var tmp0_safe_receiver = this.u1g();
      tmp = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w1g()) === true;
    }
    return tmp;
  };
  protoOf(ComposerImpl).v1c = function (key, dataKey) {
    return start(this, key, dataKey, Companion_getInstance_0().k19_1, null);
  };
  protoOf(ComposerImpl).y1c = function () {
    return endGroup(this);
  };
  protoOf(ComposerImpl).x1g = function () {
    this.i15_1 = null;
  };
  protoOf(ComposerImpl).y1g = function () {
    return this.f16_1;
  };
  protoOf(ComposerImpl).i1g = function () {
    var tmp;
    var tmp_0;
    if (!this.f16_1 && !this.l15_1 && !this.j15_1) {
      var tmp0_safe_receiver = this.u1g();
      tmp_0 = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z1g()) === false;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !this.d15_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).e1a = function () {
    start(this, 125, null, Companion_getInstance_0().l19_1, null);
    this.e15_1 = true;
  };
  protoOf(ComposerImpl).a1h = function (factory) {
    validateNodeExpected(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.f16_1) {
      var tmp$ret$0 = 'createNode() can only be called when inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var insertIndex = this.z14_1.b1h();
    var groupAnchor = this.w15_1.r19(this.w15_1.h19_1);
    this.x14_1 = this.x14_1 + 1 | 0;
    this.c16_1.c1h(factory, insertIndex, groupAnchor);
  };
  protoOf(ComposerImpl).d1h = function () {
    validateNodeExpected(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.f16_1) {
      var tmp$ret$0 = 'useNode() called while inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var node = _get_node__db0vwp(this, this.u15_1);
    this.a16_1.l1c(node);
    var tmp;
    if (this.l15_1) {
      tmp = !(node == null) ? isInterface(node, ComposeNodeLifecycleCallback) : false;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.a16_1.e1h(node);
    }
  };
  protoOf(ComposerImpl).f1h = function () {
    return end(this, true);
  };
  protoOf(ComposerImpl).g1h = function (value, block) {
    if (this.f16_1) {
      this.c16_1.i1h(value, block);
    } else {
      this.a16_1.h1h(value, block);
    }
  };
  protoOf(ComposerImpl).o19 = function () {
    var tmp;
    if (this.f16_1) {
      validateNodeNotExpected(this);
      tmp = Companion_getInstance().f1a_1;
    } else {
      // Inline function 'kotlin.let' call
      var it = this.u15_1.i();
      var tmp_0;
      var tmp_1;
      if (this.l15_1) {
        tmp_1 = !(!(it == null) ? isInterface(it, ReusableRememberObserver) : false);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = Companion_getInstance().f1a_1;
      } else {
        tmp_0 = it;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(ComposerImpl).j1h = function () {
    var tmp;
    if (this.f16_1) {
      validateNodeNotExpected(this);
      tmp = Companion_getInstance().f1a_1;
    } else {
      // Inline function 'kotlin.let' call
      var it = this.u15_1.i();
      var tmp_0;
      var tmp_1;
      if (this.l15_1) {
        tmp_1 = !(!(it == null) ? isInterface(it, ReusableRememberObserver) : false);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = Companion_getInstance().f1a_1;
      } else {
        if (it instanceof RememberObserverHolder) {
          tmp_0 = it.k1h_1;
        } else {
          tmp_0 = it;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(ComposerImpl).z16 = function (value) {
    var tmp;
    if (!equals(this.o19(), value)) {
      this.p19(value);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).m1h = function (value) {
    var tmp;
    if (!(this.o19() === value)) {
      this.p19(value);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).n1h = function (value) {
    var next = this.o19();
    if (!(next == null) ? typeof next === 'boolean' : false) {
      var nextPrimitive = next;
      if (value === nextPrimitive)
        return false;
    }
    this.p19(value);
    return true;
  };
  protoOf(ComposerImpl).o1h = function (value) {
    var next = this.o19();
    if (!(next == null) ? typeof next === 'number' : false) {
      var nextPrimitive = next;
      if (value === nextPrimitive)
        return false;
    }
    this.p19(value);
    return true;
  };
  protoOf(ComposerImpl).p19 = function (value) {
    if (this.f16_1) {
      this.w15_1.u1h(value);
    } else {
      if (this.u15_1.h18_1) {
        var groupSlotIndex = this.u15_1.q1h() - 1 | 0;
        if (this.a16_1.t1h()) {
          this.a16_1.s1h(value, this.u15_1.r19(this.u15_1.c18_1), groupSlotIndex);
        } else {
          this.a16_1.r1h(value, groupSlotIndex);
        }
      } else {
        this.a16_1.p1h(this.u15_1.r19(this.u15_1.c18_1), value);
      }
    }
  };
  protoOf(ComposerImpl).v1h = function (value) {
    var tmp;
    if (!(value == null) ? isInterface(value, RememberObserver) : false) {
      var holder = new RememberObserverHolder(value, rememberObserverAnchor(this));
      if (this.f16_1) {
        this.a16_1.w1h(holder);
      }
      this.q14_1.e(value);
      tmp = holder;
    } else {
      tmp = value;
    }
    var toStore = tmp;
    this.p19(toStore);
  };
  protoOf(ComposerImpl).c17 = function () {
    var data = this.h16_1;
    if (data == null) {
      var newData = new CompositionDataImpl(this.t14_1);
      this.h16_1 = newData;
      return newData;
    }
    return data;
  };
  protoOf(ComposerImpl).x1h = function (value) {
    var parentScope = currentCompositionLocalScope(this);
    startGroup_0(this, 201, get_provider());
    // Inline function 'kotlin.let' call
    var it = this.y1h();
    var tmp;
    if (equals(it, Companion_getInstance().f1a_1)) {
      tmp = null;
    } else {
      tmp = (!(it == null) ? isInterface(it, ValueHolder) : false) ? it : THROW_CCE();
    }
    var oldState = tmp;
    var tmp_0 = value.z1h_1;
    var local = tmp_0 instanceof CompositionLocal ? tmp_0 : THROW_CCE();
    var state = local.i1i(value instanceof ProvidedValue ? value : THROW_CCE(), oldState);
    var change = !equals(state, oldState);
    if (change) {
      this.j1i(state);
    }
    var providers;
    var invalid;
    if (this.f16_1) {
      var tmp_1;
      if (value.g1i_1 || !contains_0(parentScope, local)) {
        tmp_1 = parentScope.k1i(local, state);
      } else {
        tmp_1 = parentScope;
      }
      providers = tmp_1;
      invalid = false;
      this.x15_1 = true;
    } else {
      var tmp_2 = this.u15_1.s19(this.u15_1.a18_1);
      var oldScope = (!(tmp_2 == null) ? isInterface(tmp_2, PersistentCompositionLocalMap) : false) ? tmp_2 : THROW_CCE();
      providers = (!this.i1g() || change) && (value.g1i_1 || !contains_0(parentScope, local)) ? parentScope.k1i(local, state) : !change && !this.j15_1 ? oldScope : this.j15_1 ? parentScope : oldScope;
      invalid = this.l15_1 || !(oldScope === providers);
    }
    if (invalid && !this.f16_1) {
      recordProviderUpdate(this, providers);
    }
    this.k15_1.y16(asInt(this.j15_1));
    this.j15_1 = invalid;
    this.y15_1 = providers;
    start(this, 202, get_compositionLocalMap(), Companion_getInstance_0().k19_1, providers);
  };
  protoOf(ComposerImpl).l1i = function () {
    endGroup(this);
    endGroup(this);
    this.j15_1 = asBool(this.k15_1.j18());
    this.y15_1 = null;
  };
  protoOf(ComposerImpl).m1i = function (key) {
    return read(currentCompositionLocalScope(this), key);
  };
  protoOf(ComposerImpl).u1g = function () {
    // Inline function 'kotlin.let' call
    var it = this.r15_1;
    return this.n15_1 === 0 && Stack__isNotEmpty_impl_ua6a9t(it) ? Stack__peek_impl_gtylu2(it) : null;
  };
  protoOf(ComposerImpl).s1d = function (scope, instance) {
    var tmp0_elvis_lhs = scope.g14_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var anchor = tmp;
    var slotTable = this.u15_1.t17_1;
    var location = anchor.p1i(slotTable);
    if (this.s15_1 && location >= this.u15_1.a18_1) {
      insertIfMissing(this.f15_1, location, scope, instance);
      return true;
    }
    return false;
  };
  protoOf(ComposerImpl).e1e = function () {
    if (this.f15_1.r()) {
      skipGroup(this);
    } else {
      var reader = this.u15_1;
      var key = reader.s1a();
      var dataKey = reader.u1a();
      var aux = reader.c1a();
      var rGroupIndex = this.y14_1;
      // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroup' call
      if (dataKey == null)
        if (!(aux == null) && key === 207 && !equals(aux, Companion_getInstance().f1a_1)) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
          var keyHash = hashCode(aux);
          var tmp = this;
          // Inline function 'androidx.compose.runtime.rol' call
          var this_0 = this.g16_1;
          // Inline function 'androidx.compose.runtime.rol' call
          var this_1 = rotateLeft(this_0, 3) ^ keyHash;
          tmp.g16_1 = rotateLeft(this_1, 3) ^ rGroupIndex;
        } else {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
          var tmp_0 = this;
          // Inline function 'androidx.compose.runtime.rol' call
          var this_2 = this.g16_1;
          // Inline function 'androidx.compose.runtime.rol' call
          var this_3 = rotateLeft(this_2, 3) ^ key;
          tmp_0.g16_1 = rotateLeft(this_3, 3) ^ rGroupIndex;
        }
       else {
        if (dataKey instanceof Enum) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
          var keyHash_0 = dataKey.p2_1;
          var tmp_1 = this;
          // Inline function 'androidx.compose.runtime.rol' call
          var this_4 = this.g16_1;
          // Inline function 'androidx.compose.runtime.rol' call
          var this_5 = rotateLeft(this_4, 3) ^ keyHash_0;
          tmp_1.g16_1 = rotateLeft(this_5, 3) ^ 0;
        } else {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
          var keyHash_1 = hashCode(dataKey);
          var tmp_2 = this;
          // Inline function 'androidx.compose.runtime.rol' call
          var this_6 = this.g16_1;
          // Inline function 'androidx.compose.runtime.rol' call
          var this_7 = rotateLeft(this_6, 3) ^ keyHash_1;
          tmp_2.g16_1 = rotateLeft(this_7, 3) ^ 0;
        }
      }
      startReaderGroup(this, reader.q1i(), null);
      recomposeToGroupEnd(this);
      reader.x1b();
      // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroup' call
      if (dataKey == null)
        if (!(aux == null) && key === 207 && !equals(aux, Companion_getInstance().f1a_1)) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var groupKey = hashCode(aux);
          var tmp_3 = this;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_8 = this.g16_1 ^ rGroupIndex;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_9 = rotateRight(this_8, 3) ^ groupKey;
          tmp_3.g16_1 = rotateRight(this_9, 3);
        } else {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var tmp_4 = this;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_10 = this.g16_1 ^ rGroupIndex;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_11 = rotateRight(this_10, 3) ^ key;
          tmp_4.g16_1 = rotateRight(this_11, 3);
        }
       else {
        if (dataKey instanceof Enum) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var groupKey_0 = dataKey.p2_1;
          var tmp_5 = this;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_12 = this.g16_1 ^ 0;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_13 = rotateRight(this_12, 3) ^ groupKey_0;
          tmp_5.g16_1 = rotateRight(this_13, 3);
        } else {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var groupKey_1 = hashCode(dataKey);
          var tmp_6 = this;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_14 = this.g16_1 ^ 0;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_15 = rotateRight(this_14, 3) ^ groupKey_1;
          tmp_6.g16_1 = rotateRight(this_15, 3);
        }
      }
    }
  };
  protoOf(ComposerImpl).r1i = function (parametersChanged, flags) {
    if ((flags & 1) === 0 && (this.f16_1 || this.l15_1)) {
      var tmp0_elvis_lhs = this.e16_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return true;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var callback = tmp;
      var tmp1_elvis_lhs = this.u1g();
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        return true;
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      var scope = tmp_0;
      var pausing = callback.s1i();
      if (pausing) {
        scope.t1i(true);
        scope.u1i(this.l15_1);
        scope.r1c(true);
        this.a16_1.v1i(scope);
        this.o14_1.w1i(scope);
        return false;
      }
      return true;
    }
    return parametersChanged || !this.i1g();
  };
  protoOf(ComposerImpl).w19 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.x14_1 === 0)) {
      var tmp$ret$0 = 'No nodes can be emitted before calling skipAndEndGroup';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    if (!this.f16_1) {
      var tmp0_safe_receiver = this.u1g();
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.x1i();
      }
      if (this.f15_1.r()) {
        skipReaderToGroupEnd(this);
      } else {
        recomposeToGroupEnd(this);
      }
    }
  };
  protoOf(ComposerImpl).y1i = function (key) {
    this.p1g(key);
    addRecomposeScope(this);
    return this;
  };
  protoOf(ComposerImpl).z1i = function () {
    var scope = Stack__isNotEmpty_impl_ua6a9t(this.r15_1) ? Stack__pop_impl_8s4za4(this.r15_1) : null;
    if (!(scope == null)) {
      scope.p1c(false);
      var tmp0_safe_receiver = scope.a1j(this.o15_1);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        this.a16_1.b1j(tmp0_safe_receiver, this.t14_1);
      }
      if (scope.d1j()) {
        scope.s1c(false);
        this.a16_1.c1j(scope);
      }
    }
    var tmp;
    if (!(scope == null) && !scope.f1j() && (scope.j1b() || this.c15_1)) {
      if (scope.g14_1 == null) {
        var tmp_0 = scope;
        var tmp_1;
        if (this.f16_1) {
          tmp_1 = this.w15_1.r19(this.w15_1.h19_1);
        } else {
          tmp_1 = this.u15_1.r19(this.u15_1.c18_1);
        }
        tmp_0.g14_1 = tmp_1;
      }
      scope.e1j(false);
      tmp = scope;
    } else {
      tmp = null;
    }
    var result = tmp;
    end(this, false);
    return result;
  };
  protoOf(ComposerImpl).g1j = function (references) {
    var completed = false;
    try {
      insertMovableContentGuarded(this, references);
      completed = true;
    }finally {
      if (completed) {
        cleanUpCompose(this);
      } else {
        abortRoot(this);
      }
    }
  };
  protoOf(ComposerImpl).h1j = function (sourceInformation) {
    if (this.f16_1 && this.p15_1) {
      this.w15_1.i1j(sourceInformation);
    }
  };
  protoOf(ComposerImpl).j1j = function (key, sourceInformation) {
    if (this.f16_1 && this.p15_1) {
      this.w15_1.k1j(key, sourceInformation);
    }
  };
  protoOf(ComposerImpl).l1j = function () {
    if (this.f16_1 && this.p15_1) {
      this.w15_1.m1j();
    }
  };
  protoOf(ComposerImpl).n1j = function (invalidationsRequested, content, shouldPause) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.r14_1.r()) {
      var tmp$ret$0 = 'Expected applyChanges() to have been called';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.e16_1 = shouldPause;
    try {
      doCompose(this, invalidationsRequested, content);
    }finally {
      this.e16_1 = null;
    }
  };
  protoOf(ComposerImpl).p1j = function (block) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.s15_1) {
      var tmp$ret$0 = 'Preparing a composition while composing is not supported';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.s15_1 = true;
    try {
      block();
    }finally {
      this.s15_1 = false;
    }
  };
  protoOf(ComposerImpl).q1j = function (invalidationsRequested, shouldPause) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.r14_1.r()) {
      var tmp$ret$0 = 'Expected applyChanges() to have been called';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var tmp;
    var tmp_0;
    if (_ScopeMap___get_size__impl__f25bvl(invalidationsRequested) > 0) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp_0 = !this.f15_1.r();
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = this.d15_1;
    }
    if (tmp) {
      this.e16_1 = shouldPause;
      try {
        doCompose(this, invalidationsRequested, null);
      }finally {
        this.e16_1 = null;
      }
      return this.r14_1.cy();
    }
    return false;
  };
  protoOf(ComposerImpl).a1e = function (invalidationsRequested) {
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var this_0 = _ScopeMap___get_map__impl__vxhazm(invalidationsRequested);
    var k = this_0.cz_1;
    var v = this_0.dz_1;
    $l$block_0: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this_0.bz_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_1 = slot;
          if (!this_1.f3(this_1.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  var tmp = k[index];
                  var tmp0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp_0 = v[index];
                  var tmp2 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  $l$block: {
                    if (!(tmp0 instanceof RecomposeScopeImpl))
                      THROW_CCE();
                    var tmp0_safe_receiver = tmp0.g14_1;
                    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o1i_1;
                    var tmp_1;
                    if (tmp1_elvis_lhs == null) {
                      break $l$block;
                    } else {
                      tmp_1 = tmp1_elvis_lhs;
                    }
                    var location = tmp_1;
                    // Inline function 'kotlin.takeUnless' call
                    var tmp_2;
                    if (!(tmp2 === ScopeInvalidated_instance)) {
                      tmp_2 = tmp2;
                    } else {
                      tmp_2 = null;
                    }
                    var tmp$ret$4 = tmp_2;
                    this.f15_1.e(new Invalidation(tmp0, location, tmp$ret$4));
                  }
                }
                slot = slot.d3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block_0;
            }
          }
        }
         while (!(i === lastIndex));
    }
    sortWith(this.f15_1, get_InvalidationLocationAscending());
  };
  protoOf(ComposerImpl).r1j = function () {
    return this.u1g();
  };
  protoOf(ComposerImpl).y1h = function () {
    return this.j1h();
  };
  protoOf(ComposerImpl).j1i = function (value) {
    return this.v1h(value);
  };
  protoOf(ComposerImpl).s1j = function (scope) {
    var tmp0_safe_receiver = scope instanceof RecomposeScopeImpl ? scope : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.t1i(true);
    }
  };
  function Composer$Companion$Empty$1() {
  }
  protoOf(Composer$Companion$Empty$1).toString = function () {
    return 'Empty';
  };
  function Companion() {
    Companion_instance_0 = this;
    var tmp = this;
    tmp.f1a_1 = new Composer$Companion$Empty$1();
  }
  var Companion_instance_0;
  function Companion_getInstance() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function Composer() {
  }
  var InvalidationResult_IGNORED_instance;
  var InvalidationResult_SCHEDULED_instance;
  var InvalidationResult_DEFERRED_instance;
  var InvalidationResult_IMMINENT_instance;
  var InvalidationResult_entriesInitialized;
  function InvalidationResult_initEntries() {
    if (InvalidationResult_entriesInitialized)
      return Unit_instance;
    InvalidationResult_entriesInitialized = true;
    InvalidationResult_IGNORED_instance = new InvalidationResult('IGNORED', 0);
    InvalidationResult_SCHEDULED_instance = new InvalidationResult('SCHEDULED', 1);
    InvalidationResult_DEFERRED_instance = new InvalidationResult('DEFERRED', 2);
    InvalidationResult_IMMINENT_instance = new InvalidationResult('IMMINENT', 3);
  }
  function InvalidationResult(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function composeRuntimeError(message) {
    _init_properties_Composer_kt__bmp4g0();
    throw new ComposeRuntimeError('Compose Runtime internal error. Unexpected or incorrect use of the Compose ' + ('internal runtime API (' + message + '). Please report to Google or use ') + 'https://goo.gle/compose-feedback');
  }
  function removeCurrentGroup(_this__u8e3s4, rememberManager) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'androidx.compose.runtime.SlotWriter.forAllData' call
    var group = _this__u8e3s4.f19_1;
    var address = access$groupIndexToAddress(_this__u8e3s4, group);
    var start = access$dataIndex(_this__u8e3s4, access$_get_groups__7d4n3r(_this__u8e3s4), address);
    var end = access$dataIndex(_this__u8e3s4, access$_get_groups__7d4n3r(_this__u8e3s4), access$groupIndexToAddress(_this__u8e3s4, _this__u8e3s4.f19_1 + _this__u8e3s4.m1b(_this__u8e3s4.f19_1) | 0));
    var inductionVariable = start;
    if (inductionVariable < end)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var slot_0 = access$_get_slots__7x4q9w(_this__u8e3s4)[access$dataIndexToDataAddress(_this__u8e3s4, slot)];
        if (!(slot_0 == null) ? isInterface(slot_0, ComposeNodeLifecycleCallback) : false) {
          var endRelativeOrder = _this__u8e3s4.t1j() - slot | 0;
          rememberManager.u1j(slot_0, endRelativeOrder, -1, -1);
        }
        if (slot_0 instanceof RememberObserverHolder) {
          var endRelativeSlotIndex = _this__u8e3s4.t1j() - slot | 0;
          // Inline function 'androidx.compose.runtime.withAfterAnchorInfo' call
          var anchor = slot_0.l1h_1;
          var priority = -1;
          var endRelativeAfter = -1;
          if (!(anchor == null) && anchor.w1j()) {
            priority = _this__u8e3s4.i1d(anchor);
            endRelativeAfter = _this__u8e3s4.t1j() - _this__u8e3s4.v1j(priority) | 0;
          }
          var tmp0 = priority;
          var endRelativeAfter_0 = endRelativeAfter;
          rememberManager.x1j(slot_0, endRelativeSlotIndex, tmp0, endRelativeAfter_0);
        }
        if (slot_0 instanceof RecomposeScopeImpl) {
          slot_0.y1j();
        }
      }
       while (inductionVariable < end);
    _this__u8e3s4.z1j();
  }
  function MovableContentStateReference(content, parameter, composition, slotTable, anchor, invalidations, locals, nestedReferences) {
    this.a1d_1 = content;
    this.b1d_1 = parameter;
    this.c1d_1 = composition;
    this.d1d_1 = slotTable;
    this.e1d_1 = anchor;
    this.f1d_1 = invalidations;
    this.g1d_1 = locals;
    this.h1d_1 = nestedReferences;
  }
  function extractNestedStates$_anonymous_$closeToGroupContaining_nx6ecb($writer, group) {
    while ($writer.h19_1 >= 0 && $writer.g19_1 <= group) {
      $writer.w19();
      $writer.a1c();
    }
  }
  function extractNestedStates$_anonymous_$openParent_95r7e3($writer, parent) {
    extractNestedStates$_anonymous_$closeToGroupContaining_nx6ecb($writer, parent);
    while (!($writer.f19_1 === parent) && !$writer.u1b()) {
      if (parent < get_nextGroup($writer)) {
        $writer.d1a();
      } else {
        $writer.n19();
      }
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!($writer.f19_1 === parent)) {
      var tmp$ret$0 = 'Unexpected slot table structure';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    $writer.d1a();
  }
  function MovableContentState$extractNestedStates$lambda(this$0) {
    return function (it) {
      return this$0.l1d_1.i1d(it.e1d_1);
    };
  }
  function MovableContentState(slotTable) {
    this.l1d_1 = slotTable;
  }
  protoOf(MovableContentState).a1k = function (applier, references) {
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'androidx.compose.runtime.collection.fastFilter' call
      var tmp$ret$2;
      $l$block: {
        // Inline function 'androidx.compose.runtime.collection.all' call
        // Inline function 'androidx.collection.ObjectList.forEach' call
        // Inline function 'kotlin.contracts.contract' call
        var content = references.zx_1;
        var inductionVariable = 0;
        var last = references.ay_1;
        if (inductionVariable < last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var tmp = content[i];
            var it = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
            if (!this.l1d_1.b1k(it.e1d_1)) {
              tmp$ret$2 = false;
              break $l$block;
            }
          }
           while (inductionVariable < last);
        tmp$ret$2 = true;
      }
      if (tmp$ret$2) {
        tmp$ret$5 = references;
        break $l$block_0;
      }
      var target = new MutableObjectList();
      // Inline function 'androidx.collection.ObjectList.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var content_0 = references.zx_1;
      var inductionVariable_0 = 0;
      var last_0 = references.ay_1;
      if (inductionVariable_0 < last_0)
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var tmp_0 = content_0[i_0];
          var it_0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
          if (this.l1d_1.b1k(it_0.e1d_1)) {
            // Inline function 'androidx.collection.MutableObjectList.plusAssign' call
            target.e(it_0);
          }
        }
         while (inductionVariable_0 < last_0);
      tmp$ret$5 = target;
    }
    var tmp_1 = tmp$ret$5;
    var referencesToExtract = sortedBy(tmp_1, MovableContentState$extractNestedStates$lambda(this));
    if (referencesToExtract.r())
      return emptyScatterMap();
    var result = mutableScatterMapOf();
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    var writer = this.l1d_1.v19();
    var normalClose = false;
    var tmp_2;
    try {
      // Inline function 'androidx.collection.ObjectList.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var content_1 = referencesToExtract.zx_1;
      var inductionVariable_1 = 0;
      var last_1 = referencesToExtract.ay_1;
      if (inductionVariable_1 < last_1)
        do {
          var i_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var tmp_3 = content_1[i_1];
          var reference = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
          var newGroup = writer.i1d(reference.e1d_1);
          var newParent = writer.q19(newGroup);
          extractNestedStates$_anonymous_$closeToGroupContaining_nx6ecb(writer, newParent);
          extractNestedStates$_anonymous_$openParent_95r7e3(writer, newParent);
          writer.c1k(newGroup - writer.f19_1 | 0);
          var content_2 = extractMovableContentAtCurrent(reference.c1d_1, reference, writer, applier);
          result.mz(reference, content_2);
        }
         while (inductionVariable_1 < last_1);
      extractNestedStates$_anonymous_$closeToGroupContaining_nx6ecb(writer, 2147483647);
      // Inline function 'kotlin.also' call
      normalClose = true;
      tmp_2 = Unit_instance;
    }finally {
      writer.a1a(normalClose);
    }
    return result;
  };
  function sourceInformation(composer, sourceInformation) {
    _init_properties_Composer_kt__bmp4g0();
    composer.h1j(sourceInformation);
  }
  function isTraceInProgress() {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.let' call
    var it = get_compositionTracer();
    return !(it == null) && it.d1k();
  }
  function traceEventStart(key, dirty1, dirty2, info) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = get_compositionTracer();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.e1k(key, dirty1, dirty2, info);
    }
  }
  function traceEventEnd() {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = get_compositionTracer();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.f1k();
    }
  }
  function MovableContent() {
  }
  function ComposeRuntimeError(message) {
    IllegalStateException_init_$Init$(this);
    captureStack(this, ComposeRuntimeError);
    this.g1k_1 = message;
    delete this.message;
  }
  protoOf(ComposeRuntimeError).f1 = function () {
    return this.g1k_1;
  };
  function ProvidedValue(compositionLocal, value, explicitNull, mutationPolicy, state, compute, isDynamic) {
    this.z1h_1 = compositionLocal;
    this.a1i_1 = explicitNull;
    this.b1i_1 = mutationPolicy;
    this.c1i_1 = state;
    this.d1i_1 = compute;
    this.e1i_1 = isDynamic;
    this.f1i_1 = value;
    this.g1i_1 = true;
  }
  protoOf(ProvidedValue).e2 = function () {
    var tmp = this.f1i_1;
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(ProvidedValue).h1k = function () {
    var tmp;
    if (this.a1i_1) {
      tmp = (null == null ? true : !(null == null)) ? null : THROW_CCE();
    } else if (!(this.c1i_1 == null)) {
      tmp = this.c1i_1.e2();
    } else if (!(this.f1i_1 == null)) {
      tmp = this.f1i_1;
    } else {
      composeRuntimeError('Unexpected form of a provided value');
    }
    return tmp;
  };
  protoOf(ProvidedValue).i1k = function () {
    return (this.a1i_1 || !(this.e2() == null)) && !this.e1i_1;
  };
  function RememberObserverHolder(wrapped, after) {
    this.k1h_1 = wrapped;
    this.l1h_1 = after;
  }
  function extractMovableContentAtCurrent(composition, reference, slots, applier) {
    _init_properties_Composer_kt__bmp4g0();
    var slotTable = new SlotTable();
    if (slots.j1k()) {
      slotTable.x19();
    }
    if (slots.k1k()) {
      slotTable.y19();
    }
    var currentGroup = slots.f19_1;
    if (!(applier == null) && slots.j1c(currentGroup) > 0) {
      if (!(!(applier == null) ? isInterface(applier, Applier) : false))
        THROW_CCE();
      var parentNodeGroup = slots.h19_1;
      while (parentNodeGroup > 0 && !slots.i1c(parentNodeGroup)) {
        parentNodeGroup = slots.q19(parentNodeGroup);
      }
      if (parentNodeGroup >= 0 && slots.i1c(parentNodeGroup)) {
        var node = slots.g1e(parentNodeGroup);
        var currentChild = parentNodeGroup + 1 | 0;
        var end = parentNodeGroup + slots.m1b(parentNodeGroup) | 0;
        var nodeIndex = 0;
        $l$loop: while (currentChild < end) {
          var size = slots.m1b(currentChild);
          if ((currentChild + size | 0) > currentGroup) {
            break $l$loop;
          }
          nodeIndex = nodeIndex + (slots.i1c(currentChild) ? 1 : slots.j1c(currentChild)) | 0;
          currentChild = currentChild + size | 0;
        }
        var count = slots.i1c(currentGroup) ? 1 : slots.j1c(currentGroup);
        applier.s12(node);
        applier.w12(nodeIndex, count);
        applier.t12();
      }
    }
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    var writer = slotTable.v19();
    var normalClose = false;
    var tmp;
    try {
      writer.w1a();
      writer.h1a(126665345, reference.a1d_1);
      writer.w1c();
      writer.u1h(reference.b1d_1);
      var anchors = slots.l1k(reference.e1d_1, 1, writer);
      writer.n19();
      writer.a1c();
      writer.b1c();
      // Inline function 'kotlin.also' call
      normalClose = true;
      tmp = anchors;
    }finally {
      writer.a1a(normalClose);
    }
    var anchors_0 = tmp;
    var state = new MovableContentState(slotTable);
    if (Companion_instance_2.n1k(slotTable, anchors_0)) {
      var movableContentRecomposeScopeOwner = new extractMovableContentAtCurrent$movableContentRecomposeScopeOwner$1(composition, reference);
      // Inline function 'androidx.compose.runtime.SlotTable.write' call
      // Inline function 'kotlin.let' call
      var writer_0 = slotTable.v19();
      var normalClose_0 = false;
      var tmp_0;
      try {
        Companion_instance_2.m1k(writer_0, anchors_0, movableContentRecomposeScopeOwner);
        // Inline function 'kotlin.also' call
        normalClose_0 = true;
        tmp_0 = Unit_instance;
      }finally {
        writer_0.a1a(normalClose_0);
      }
    }
    return state;
  }
  function composeImmediateRuntimeError(message) {
    _init_properties_Composer_kt__bmp4g0();
    throw new ComposeRuntimeError('Compose Runtime internal error. Unexpected or incorrect use of the Compose ' + ('internal runtime API (' + message + '). Please report to Google or use ') + 'https://goo.gle/compose-feedback');
  }
  function Pending$keyMap$delegate$lambda(this$0) {
    return function () {
      // Inline function 'kotlin.also' call
      var this_0 = new MultiValueMap(multiMap(this$0.k1a_1.j()));
      var it = this_0.o1k_1;
      var inductionVariable = 0;
      var last = this$0.k1a_1.j();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var keyInfo = this$0.k1a_1.p(index);
          MultiValueMap__add_impl_ww0640(it, get_joinedKey(keyInfo), keyInfo);
        }
         while (inductionVariable < last);
      var tmp$ret$1 = this_0.o1k_1;
      return new MultiValueMap(tmp$ret$1);
    };
  }
  function Pending$_get_keyMap_$ref_a4qvdi() {
    return function (p0) {
      return new MultiValueMap(p0.p1k());
    };
  }
  function Pending(keyInfos, startIndex) {
    this.k1a_1 = keyInfos;
    this.l1a_1 = startIndex;
    this.m1a_1 = 0;
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    if (!(this.l1a_1 >= 0)) {
      var tmp$ret$0 = 'Invalid start index';
      throwIllegalArgumentException(tmp$ret$0);
    }
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.n1a_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.run' call
    var runningNodeIndex = 0;
    var result = new MutableIntObjectMap();
    var inductionVariable = 0;
    var last = this.k1a_1.j();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var keyInfo = this.k1a_1.p(index);
        result.xw(keyInfo.z1a_1, new GroupInfo(index, runningNodeIndex, keyInfo.a1b_1));
        runningNodeIndex = runningNodeIndex + keyInfo.a1b_1 | 0;
      }
       while (inductionVariable < last);
    tmp_0.o1a_1 = result;
    var tmp_1 = this;
    tmp_1.p1a_1 = lazy(Pending$keyMap$delegate$lambda(this));
  }
  protoOf(Pending).p1k = function () {
    var tmp0 = this.p1a_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('keyMap', 1, tmp, Pending$_get_keyMap_$ref_a4qvdi(), null);
    return tmp0.e2().o1k_1;
  };
  protoOf(Pending).v1a = function (key, dataKey) {
    var joinedKey = !(dataKey == null) ? new JoinedKey(key, dataKey) : key;
    return MultiValueMap__removeFirst_impl_iz2i9x(this.p1k(), joinedKey);
  };
  protoOf(Pending).r1a = function (keyInfo) {
    return this.n1a_1.e(keyInfo);
  };
  protoOf(Pending).j1b = function () {
    return this.n1a_1;
  };
  protoOf(Pending).e1b = function (from, to) {
    if (from > to) {
      // Inline function 'androidx.collection.IntObjectMap.forEachValue' call
      var this_0 = this.o1a_1;
      var v = this_0.ow_1;
      $l$block: {
        // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
        var m = this_0.mw_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            if (!this_1.f3(this_1.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                    var index = (i << 3) + j | 0;
                    var tmp = v[index];
                    var group = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                    var position = group.q1k_1;
                    if (position === from)
                      group.q1k_1 = to;
                    else if (to <= position ? position < from : false)
                      group.q1k_1 = position + 1 | 0;
                  }
                  slot = slot.d3(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
    } else if (to > from) {
      // Inline function 'androidx.collection.IntObjectMap.forEachValue' call
      var this_2 = this.o1a_1;
      var v_0 = this_2.ow_1;
      $l$block_0: {
        // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
        var m_0 = this_2.mw_1;
        var lastIndex_0 = m_0.length - 2 | 0;
        var inductionVariable_1 = 0;
        if (inductionVariable_1 <= lastIndex_0)
          do {
            var i_0 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var slot_0 = m_0[i_0];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_3 = slot_0;
            if (!this_3.f3(this_3.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
              var inductionVariable_2 = 0;
              if (inductionVariable_2 < bitCount_0)
                do {
                  var j_0 = inductionVariable_2;
                  inductionVariable_2 = inductionVariable_2 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot_0.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                    var index_0 = (i_0 << 3) + j_0 | 0;
                    var tmp_0 = v_0[index_0];
                    var group_0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                    var position_0 = group_0.q1k_1;
                    if (position_0 === from)
                      group_0.q1k_1 = to;
                    else if ((from + 1 | 0) <= position_0 ? position_0 < to : false)
                      group_0.q1k_1 = position_0 - 1 | 0;
                  }
                  slot_0 = slot_0.d3(8);
                }
                 while (inductionVariable_2 < bitCount_0);
              if (!(bitCount_0 === 8)) {
                break $l$block_0;
              }
            }
          }
           while (!(i_0 === lastIndex_0));
      }
    }
  };
  protoOf(Pending).p1b = function (from, to, count) {
    if (from > to) {
      // Inline function 'androidx.collection.IntObjectMap.forEachValue' call
      var this_0 = this.o1a_1;
      var v = this_0.ow_1;
      $l$block: {
        // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
        var m = this_0.mw_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            if (!this_1.f3(this_1.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                    var index = (i << 3) + j | 0;
                    var tmp = v[index];
                    var group = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                    var position = group.r1k_1;
                    if (from <= position ? position < (from + count | 0) : false)
                      group.r1k_1 = to + (position - from | 0) | 0;
                    else if (to <= position ? position < from : false)
                      group.r1k_1 = position + count | 0;
                  }
                  slot = slot.d3(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
    } else if (to > from) {
      // Inline function 'androidx.collection.IntObjectMap.forEachValue' call
      var this_2 = this.o1a_1;
      var v_0 = this_2.ow_1;
      $l$block_0: {
        // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
        var m_0 = this_2.mw_1;
        var lastIndex_0 = m_0.length - 2 | 0;
        var inductionVariable_1 = 0;
        if (inductionVariable_1 <= lastIndex_0)
          do {
            var i_0 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var slot_0 = m_0[i_0];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_3 = slot_0;
            if (!this_3.f3(this_3.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
              var inductionVariable_2 = 0;
              if (inductionVariable_2 < bitCount_0)
                do {
                  var j_0 = inductionVariable_2;
                  inductionVariable_2 = inductionVariable_2 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot_0.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                    var index_0 = (i_0 << 3) + j_0 | 0;
                    var tmp_0 = v_0[index_0];
                    var group_0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                    var position_0 = group_0.r1k_1;
                    if (from <= position_0 ? position_0 < (from + count | 0) : false)
                      group_0.r1k_1 = to + (position_0 - from | 0) | 0;
                    else if ((from + 1 | 0) <= position_0 ? position_0 < to : false)
                      group_0.r1k_1 = position_0 - count | 0;
                  }
                  slot_0 = slot_0.d3(8);
                }
                 while (inductionVariable_2 < bitCount_0);
              if (!(bitCount_0 === 8)) {
                break $l$block_0;
              }
            }
          }
           while (!(i_0 === lastIndex_0));
      }
    }
  };
  protoOf(Pending).q1a = function (keyInfo, insertIndex) {
    this.o1a_1.xw(keyInfo.z1a_1, new GroupInfo(-1, insertIndex, 0));
  };
  protoOf(Pending).l1b = function (group, newCount) {
    var groupInfo = this.o1a_1.p(group);
    if (!(groupInfo == null)) {
      var index = groupInfo.r1k_1;
      var difference = newCount - groupInfo.s1k_1 | 0;
      groupInfo.s1k_1 = newCount;
      if (!(difference === 0)) {
        // Inline function 'androidx.collection.IntObjectMap.forEachValue' call
        var this_0 = this.o1a_1;
        var v = this_0.ow_1;
        $l$block: {
          // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
          var m = this_0.mw_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.f3(this_1.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                      var index_0 = (i << 3) + j | 0;
                      var tmp = v[index_0];
                      var childGroupInfo = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                      if (childGroupInfo.r1k_1 >= index && !equals(childGroupInfo, groupInfo)) {
                        var newIndex = childGroupInfo.r1k_1 + difference | 0;
                        if (newIndex >= 0)
                          childGroupInfo.r1k_1 = newIndex;
                      }
                    }
                    slot = slot.d3(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  break $l$block;
                }
              }
            }
             while (!(i === lastIndex));
        }
      }
      return true;
    }
    return false;
  };
  protoOf(Pending).d1b = function (keyInfo) {
    var tmp0_safe_receiver = this.o1a_1.p(keyInfo.z1a_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q1k_1;
    return tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
  };
  protoOf(Pending).c1b = function (keyInfo) {
    var tmp0_safe_receiver = this.o1a_1.p(keyInfo.z1a_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r1k_1;
    return tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
  };
  protoOf(Pending).n1b = function (keyInfo) {
    var tmp0_safe_receiver = this.o1a_1.p(keyInfo.z1a_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s1k_1;
    return tmp1_elvis_lhs == null ? keyInfo.a1b_1 : tmp1_elvis_lhs;
  };
  function _GroupKind___init__impl__iwqg06(value) {
    return value;
  }
  function _GroupKind___get_value__impl__cf5pqe($this) {
    return $this;
  }
  function Companion_0() {
    Companion_instance_1 = this;
    this.k19_1 = _GroupKind___init__impl__iwqg06(0);
    this.l19_1 = _GroupKind___init__impl__iwqg06(1);
    this.m19_1 = _GroupKind___init__impl__iwqg06(2);
  }
  var Companion_instance_1;
  function Companion_getInstance_0() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  function removeRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findInsertLocation(_this__u8e3s4, start);
    $l$loop: while (index < _this__u8e3s4.j()) {
      var validation = _this__u8e3s4.p(index);
      if (validation.b14_1 < end)
        _this__u8e3s4.b2(index);
      else
        break $l$loop;
    }
  }
  function asInt(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return _this__u8e3s4 ? 1 : 0;
  }
  function asBool(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return !(_this__u8e3s4 === 0);
  }
  function ReusableRememberObserver() {
  }
  function get_isAfterFirstChild(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return _this__u8e3s4.f19_1 > (_this__u8e3s4.h19_1 + 1 | 0);
  }
  function get_isAfterFirstChild_0(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return _this__u8e3s4.a18_1 > (_this__u8e3s4.c18_1 + 1 | 0);
  }
  function CompositionDataImpl(composition) {
    this.t1k_1 = composition;
  }
  protoOf(CompositionDataImpl).hashCode = function () {
    return imul(hashCode(this.t1k_1), 31);
  };
  protoOf(CompositionDataImpl).equals = function (other) {
    var tmp;
    if (other instanceof CompositionDataImpl) {
      tmp = equals(this.t1k_1, other.t1k_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  function firstInRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findInsertLocation(_this__u8e3s4, start);
    if (index < _this__u8e3s4.j()) {
      var firstInvalidation = _this__u8e3s4.p(index);
      if (firstInvalidation.b14_1 < end)
        return firstInvalidation;
    }
    return null;
  }
  function removeLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findLocation(_this__u8e3s4, location);
    return index >= 0 ? _this__u8e3s4.b2(index) : null;
  }
  function nearestCommonRootOf(_this__u8e3s4, a, b, common) {
    _init_properties_Composer_kt__bmp4g0();
    if (a === b)
      return a;
    if (a === common || b === common)
      return common;
    if (_this__u8e3s4.q19(a) === b)
      return b;
    if (_this__u8e3s4.q19(b) === a)
      return a;
    if (_this__u8e3s4.q19(a) === _this__u8e3s4.q19(b))
      return _this__u8e3s4.q19(a);
    var currentA = a;
    var currentB = b;
    var aDistance = distanceFrom(_this__u8e3s4, a, common);
    var bDistance = distanceFrom(_this__u8e3s4, b, common);
    // Inline function 'kotlin.repeat' call
    var times = aDistance - bDistance | 0;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        currentA = _this__u8e3s4.q19(currentA);
      }
       while (inductionVariable < times);
    // Inline function 'kotlin.repeat' call
    var times_0 = bDistance - aDistance | 0;
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < times_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        currentB = _this__u8e3s4.q19(currentB);
      }
       while (inductionVariable_0 < times_0);
    while (!(currentA === currentB)) {
      currentA = _this__u8e3s4.q19(currentA);
      currentB = _this__u8e3s4.q19(currentB);
    }
    return currentA;
  }
  function insertIfMissing(_this__u8e3s4, location, scope, instance) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findLocation(_this__u8e3s4, location);
    if (index < 0) {
      var tmp = -(index + 1 | 0) | 0;
      // Inline function 'kotlin.takeIf' call
      var tmp_0;
      if (!(instance == null) ? isInterface(instance, DerivedState) : false) {
        tmp_0 = instance;
      } else {
        tmp_0 = null;
      }
      var tmp$ret$1 = tmp_0;
      _this__u8e3s4.a2(tmp, new Invalidation(scope, location, tmp$ret$1));
    } else {
      var invalidation = _this__u8e3s4.p(index);
      if (!(instance == null) ? isInterface(instance, DerivedState) : false) {
        var oldInstance = invalidation.c14_1;
        if (oldInstance == null) {
          invalidation.c14_1 = instance;
        } else {
          if (oldInstance instanceof MutableScatterSet) {
            if (!(oldInstance instanceof MutableScatterSet))
              THROW_CCE();
            oldInstance.e(instance);
          } else {
            invalidation.c14_1 = mutableScatterSetOf(oldInstance, instance);
          }
        }
      } else {
        invalidation.c14_1 = null;
      }
    }
  }
  function collectNodesFrom(_this__u8e3s4, anchor) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    // Inline function 'androidx.compose.runtime.SlotTable.read' call
    // Inline function 'kotlin.let' call
    var reader = _this__u8e3s4.t16();
    var tmp;
    try {
      var index = _this__u8e3s4.i1d(anchor);
      collectNodesFrom$_anonymous_$collectFromGroup_lmwduz(reader, result, index);
      tmp = Unit_instance;
    }finally {
      reader.i18();
    }
    return result;
  }
  function filterToRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    var index = findInsertLocation(_this__u8e3s4, start);
    $l$loop: while (index < _this__u8e3s4.j()) {
      var invalidation = _this__u8e3s4.p(index);
      if (invalidation.b14_1 < end)
        result.e(invalidation);
      else
        break $l$loop;
      index = index + 1 | 0;
    }
    return result;
  }
  function get_nextGroup(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return _this__u8e3s4.f19_1 + _this__u8e3s4.m1b(_this__u8e3s4.f19_1) | 0;
  }
  function GroupInfo(slotIndex, nodeIndex, nodeCount) {
    this.q1k_1 = slotIndex;
    this.r1k_1 = nodeIndex;
    this.s1k_1 = nodeCount;
  }
  function multiMap(initialCapacity) {
    _init_properties_Composer_kt__bmp4g0();
    return _MultiValueMap___init__impl__qt1z0r(new MutableScatterMap(initialCapacity));
  }
  function get_joinedKey(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return !(_this__u8e3s4.y1a_1 == null) ? new JoinedKey(_this__u8e3s4.x1a_1, _this__u8e3s4.y1a_1) : _this__u8e3s4.x1a_1;
  }
  function findInsertLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.let' call
    var it = findLocation(_this__u8e3s4, location);
    return it < 0 ? -(it + 1 | 0) | 0 : it;
  }
  function findLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    var low = 0;
    var high = _this__u8e3s4.j() - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4.p(mid);
      var cmp = compareTo(midVal.b14_1, location);
      if (cmp < 0)
        low = mid + 1 | 0;
      else if (cmp > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function distanceFrom(_this__u8e3s4, index, root) {
    _init_properties_Composer_kt__bmp4g0();
    var count = 0;
    var current = index;
    while (current > 0 && !(current === root)) {
      current = _this__u8e3s4.q19(current);
      count = count + 1 | 0;
    }
    return count;
  }
  function sourceInformationMarkerStart(composer, key, sourceInformation) {
    _init_properties_Composer_kt__bmp4g0();
    composer.j1j(key, sourceInformation);
  }
  function sourceInformationMarkerEnd(composer) {
    _init_properties_Composer_kt__bmp4g0();
    composer.l1j();
  }
  function androidx_compose_runtime_ProvidedValue$stableprop_getter() {
    return androidx_compose_runtime_ProvidedValue$stable;
  }
  function _Updater___init__impl__rbfxm8(composer) {
    return composer;
  }
  function _Updater___get_composer__impl__9ty7av($this) {
    return $this;
  }
  function Updater__set_impl_v7kwss($this, value, block) {
    // Inline function 'kotlin.with' call
    var $this$with = _Updater___get_composer__impl__9ty7av($this);
    if ($this$with.y1g() || !equals($this$with.y1h(), value)) {
      $this$with.j1i(value);
      _Updater___get_composer__impl__9ty7av($this).g1h(value, block);
    }
    return Unit_instance;
  }
  function _SkippableUpdater___init__impl__4ft0t9(composer) {
    return composer;
  }
  function _SkippableUpdater___get_composer__impl__6t7yne($this) {
    return $this;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.u1k_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).kd = function (a, b) {
    return this.u1k_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.kd(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).k3 = function () {
    return this.u1k_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.k3(), other.k3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlin_Comparator$0).hashCode = function () {
    return hashCode(this.k3());
  };
  function collectNodesFrom$_anonymous_$collectFromGroup_lmwduz($reader, result, group) {
    if ($reader.i1c(group)) {
      result.e($reader.g1e(group));
    } else {
      var current = group + 1 | 0;
      var end = group + $reader.m1b(group) | 0;
      while (current < end) {
        collectNodesFrom$_anonymous_$collectFromGroup_lmwduz($reader, result, current);
        current = current + $reader.m1b(current) | 0;
      }
    }
  }
  function InvalidationLocationAscending$lambda(i1, i2) {
    _init_properties_Composer_kt__bmp4g0();
    return compareTo(i1.b14_1, i2.b14_1);
  }
  function extractMovableContentAtCurrent$movableContentRecomposeScopeOwner$1($composition, $reference) {
    this.v1k_1 = $composition;
    this.w1k_1 = $reference;
  }
  protoOf(extractMovableContentAtCurrent$movableContentRecomposeScopeOwner$1).x1k = function (scope, instance) {
    var tmp = this.v1k_1;
    var tmp0_safe_receiver = isInterface(tmp, RecomposeScopeOwner) ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x1k(scope, instance);
    var result = tmp1_elvis_lhs == null ? InvalidationResult_IGNORED_getInstance() : tmp1_elvis_lhs;
    if (result.equals(InvalidationResult_IGNORED_getInstance())) {
      var _receiver__tnumb7 = this.w1k_1;
      _receiver__tnumb7.f1d_1 = plus_0(_receiver__tnumb7.f1d_1, to(scope, instance));
      return InvalidationResult_SCHEDULED_getInstance();
    }
    return result;
  };
  protoOf(extractMovableContentAtCurrent$movableContentRecomposeScopeOwner$1).y1k = function (scope) {
  };
  protoOf(extractMovableContentAtCurrent$movableContentRecomposeScopeOwner$1).z1k = function (value) {
  };
  function InvalidationResult_IGNORED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_IGNORED_instance;
  }
  function InvalidationResult_SCHEDULED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_SCHEDULED_instance;
  }
  function InvalidationResult_DEFERRED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_DEFERRED_instance;
  }
  function InvalidationResult_IMMINENT_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_IMMINENT_instance;
  }
  var properties_initialized_Composer_kt_89qzc2;
  function _init_properties_Composer_kt__bmp4g0() {
    if (!properties_initialized_Composer_kt_89qzc2) {
      properties_initialized_Composer_kt_89qzc2 = true;
      compositionTracer = null;
      invocation = new OpaqueKey('provider');
      provider = new OpaqueKey('provider');
      compositionLocalMap = new OpaqueKey('compositionLocalMap');
      providerValues = new OpaqueKey('providerValues');
      providerMaps = new OpaqueKey('providers');
      reference = new OpaqueKey('reference');
      var tmp = InvalidationLocationAscending$lambda;
      InvalidationLocationAscending = new sam$kotlin_Comparator$0(tmp);
      androidx_compose_runtime_ProvidedValue$stable = 8;
      androidx_compose_runtime_MovableContent$stable = 0;
      androidx_compose_runtime_MovableContentStateReference$stable = 8;
      androidx_compose_runtime_MovableContentState$stable = 8;
      androidx_compose_runtime_ComposerImpl_CompositionContextHolder$stable = 8;
      androidx_compose_runtime_ComposerImpl$stable = 8;
      androidx_compose_runtime_RememberObserverHolder$stable = 8;
      androidx_compose_runtime_ComposeRuntimeError$stable = 0;
      androidx_compose_runtime_CompositionDataImpl$stable = 8;
    }
  }
  function get_PendingApplyNoModifications() {
    _init_properties_Composition_kt__t5pjw8();
    return PendingApplyNoModifications;
  }
  var PendingApplyNoModifications;
  var CompositionImplServiceKey;
  var androidx_compose_runtime_CompositionImpl$stable;
  var androidx_compose_runtime_ScopeInvalidated$stable;
  var androidx_compose_runtime_CompositionObserverHolder$stable;
  function _get_areChildrenComposing__c1uwup($this) {
    return $this.e1f_1.k1g();
  }
  function composeInitial($this, content) {
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    if (!!$this.h1f_1) {
      var tmp$ret$0 = 'The composition is disposed';
      throwIllegalStateException(tmp$ret$0);
    }
    $this.i1f_1 = content;
    $this.k1e_1.a1l($this, $this.i1f_1);
  }
  function drainPendingModificationsForCompositionLocked($this) {
    var toRecord = $this.m1e_1.c1l(get_PendingApplyNoModifications());
    if (toRecord != null) {
      if (equals(toRecord, get_PendingApplyNoModifications())) {
        composeRuntimeError('pending composition has not been applied');
      } else {
        if (!(toRecord == null) ? isInterface(toRecord, KtSet) : false) {
          addPendingInvalidationsLocked_0($this, isInterface(toRecord, KtSet) ? toRecord : THROW_CCE(), true);
        } else {
          if (!(toRecord == null) ? isArray(toRecord) : false) {
            var indexedObject = isArray(toRecord) ? toRecord : THROW_CCE();
            var inductionVariable = 0;
            var last = indexedObject.length;
            while (inductionVariable < last) {
              var changed = indexedObject[inductionVariable];
              inductionVariable = inductionVariable + 1 | 0;
              addPendingInvalidationsLocked_0($this, changed, true);
            }
          } else {
            composeRuntimeError('corrupt pendingModifications drain: ' + toString($this.m1e_1));
          }
        }
      }
    }
  }
  function drainPendingModificationsLocked($this) {
    var toRecord = $this.m1e_1.c1l(null);
    if (!equals(toRecord, get_PendingApplyNoModifications())) {
      if (!(toRecord == null) ? isInterface(toRecord, KtSet) : false) {
        addPendingInvalidationsLocked_0($this, isInterface(toRecord, KtSet) ? toRecord : THROW_CCE(), false);
      } else {
        if (!(toRecord == null) ? isArray(toRecord) : false) {
          var indexedObject = isArray(toRecord) ? toRecord : THROW_CCE();
          var inductionVariable = 0;
          var last = indexedObject.length;
          while (inductionVariable < last) {
            var changed = indexedObject[inductionVariable];
            inductionVariable = inductionVariable + 1 | 0;
            addPendingInvalidationsLocked_0($this, changed, false);
          }
        } else {
          if (toRecord == null) {
            composeRuntimeError('calling recordModificationsOf and applyChanges concurrently is not supported');
          } else {
            composeRuntimeError('corrupt pendingModifications drain: ' + toString($this.m1e_1));
          }
        }
      }
    }
  }
  function drainPendingModificationsOutOfBandLocked($this) {
    var toRecord = $this.m1e_1.c1l(emptySet());
    if (!equals(toRecord, get_PendingApplyNoModifications()) && toRecord != null) {
      if (!(toRecord == null) ? isInterface(toRecord, KtSet) : false) {
        addPendingInvalidationsLocked_0($this, isInterface(toRecord, KtSet) ? toRecord : THROW_CCE(), false);
      } else {
        if (!(toRecord == null) ? isArray(toRecord) : false) {
          var indexedObject = isArray(toRecord) ? toRecord : THROW_CCE();
          var inductionVariable = 0;
          var last = indexedObject.length;
          while (inductionVariable < last) {
            var changed = indexedObject[inductionVariable];
            inductionVariable = inductionVariable + 1 | 0;
            addPendingInvalidationsLocked_0($this, changed, false);
          }
        } else {
          composeRuntimeError('corrupt pendingModifications drain: ' + toString($this.m1e_1));
        }
      }
    }
  }
  function addPendingInvalidationsLocked($this, value, forgetConditionalScopes) {
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
    var this_0 = $this.q1e_1;
    var value_0 = _ScopeMap___get_map__impl__vxhazm(this_0).h2(value);
    if (value_0 != null) {
      if (value_0 instanceof MutableScatterSet) {
        // Inline function 'androidx.collection.ScatterSet.forEach' call
        var this_1 = value_0 instanceof MutableScatterSet ? value_0 : THROW_CCE();
        // Inline function 'kotlin.contracts.contract' call
        var elements = this_1.pz_1;
        $l$block: {
          // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
          // Inline function 'kotlin.contracts.contract' call
          var m = this_1.oz_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_2 = slot;
              if (!this_2.f3(this_2.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                      var index = (i << 3) + j | 0;
                      var tmp = elements[index];
                      var scope = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                      if (!ScopeMap__remove_impl_ocu4rj($this.w1e_1, value, scope) && !scope.e1l(value).equals(InvalidationResult_IGNORED_getInstance())) {
                        if (scope.d1l() && !forgetConditionalScopes) {
                          $this.s1e_1.e(scope);
                        } else {
                          $this.r1e_1.e(scope);
                        }
                      }
                    }
                    slot = slot.d3(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  break $l$block;
                }
              }
            }
             while (!(i === lastIndex));
        }
      } else {
        var scope_0 = !(value_0 == null) ? value_0 : THROW_CCE();
        if (!ScopeMap__remove_impl_ocu4rj($this.w1e_1, value, scope_0) && !scope_0.e1l(value).equals(InvalidationResult_IGNORED_getInstance())) {
          if (scope_0.d1l() && !forgetConditionalScopes) {
            $this.s1e_1.e(scope_0);
          } else {
            $this.r1e_1.e(scope_0);
          }
        }
      }
    }
  }
  function addPendingInvalidationsLocked_0($this, values, forgetConditionalScopes) {
    // Inline function 'androidx.compose.runtime.collection.fastForEach' call
    var tmp;
    if (values instanceof ScatterSetWrapper) {
      // Inline function 'androidx.collection.ScatterSet.forEach' call
      var this_0 = values.f1l_1;
      // Inline function 'kotlin.contracts.contract' call
      var elements = this_0.pz_1;
      $l$block_0: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this_0.oz_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            if (!this_1.f3(this_1.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                    var index = (i << 3) + j | 0;
                    var tmp_0 = elements[index];
                    var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                    if (value instanceof RecomposeScopeImpl) {
                      value.e1l(null);
                    } else {
                      addPendingInvalidationsLocked($this, value, forgetConditionalScopes);
                      // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
                      var this_2 = $this.t1e_1;
                      var value_0 = _ScopeMap___get_map__impl__vxhazm(this_2).h2(value);
                      if (value_0 != null) {
                        if (value_0 instanceof MutableScatterSet) {
                          // Inline function 'androidx.collection.ScatterSet.forEach' call
                          var this_3 = value_0 instanceof MutableScatterSet ? value_0 : THROW_CCE();
                          // Inline function 'kotlin.contracts.contract' call
                          var elements_0 = this_3.pz_1;
                          $l$block: {
                            // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                            // Inline function 'kotlin.contracts.contract' call
                            var m_0 = this_3.oz_1;
                            var lastIndex_0 = m_0.length - 2 | 0;
                            var inductionVariable_1 = 0;
                            if (inductionVariable_1 <= lastIndex_0)
                              do {
                                var i_0 = inductionVariable_1;
                                inductionVariable_1 = inductionVariable_1 + 1 | 0;
                                var slot_0 = m_0[i_0];
                                // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                                var this_4 = slot_0;
                                if (!this_4.f3(this_4.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                                  var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
                                  var inductionVariable_2 = 0;
                                  if (inductionVariable_2 < bitCount_0)
                                    do {
                                      var j_0 = inductionVariable_2;
                                      inductionVariable_2 = inductionVariable_2 + 1 | 0;
                                      // Inline function 'androidx.collection.isFull' call
                                      if (slot_0.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                                        var index_0 = (i_0 << 3) + j_0 | 0;
                                        var tmp_1 = elements_0[index_0];
                                        var it = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                                        addPendingInvalidationsLocked($this, it, forgetConditionalScopes);
                                      }
                                      slot_0 = slot_0.d3(8);
                                    }
                                     while (inductionVariable_2 < bitCount_0);
                                  if (!(bitCount_0 === 8)) {
                                    break $l$block;
                                  }
                                }
                              }
                               while (!(i_0 === lastIndex_0));
                          }
                        } else {
                          var it_0 = !(value_0 == null) ? value_0 : THROW_CCE();
                          addPendingInvalidationsLocked($this, it_0, forgetConditionalScopes);
                        }
                      }
                    }
                  }
                  slot = slot.d3(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block_0;
              }
            }
          }
           while (!(i === lastIndex));
      }
      tmp = Unit_instance;
    } else {
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = values.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        if (element instanceof RecomposeScopeImpl) {
          element.e1l(null);
        } else {
          addPendingInvalidationsLocked($this, element, forgetConditionalScopes);
          // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
          var this_5 = $this.t1e_1;
          var value_1 = _ScopeMap___get_map__impl__vxhazm(this_5).h2(element);
          if (value_1 != null) {
            if (value_1 instanceof MutableScatterSet) {
              // Inline function 'androidx.collection.ScatterSet.forEach' call
              var this_6 = value_1 instanceof MutableScatterSet ? value_1 : THROW_CCE();
              // Inline function 'kotlin.contracts.contract' call
              var elements_1 = this_6.pz_1;
              $l$block_1: {
                // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                // Inline function 'kotlin.contracts.contract' call
                var m_1 = this_6.oz_1;
                var lastIndex_1 = m_1.length - 2 | 0;
                var inductionVariable_3 = 0;
                if (inductionVariable_3 <= lastIndex_1)
                  do {
                    var i_1 = inductionVariable_3;
                    inductionVariable_3 = inductionVariable_3 + 1 | 0;
                    var slot_1 = m_1[i_1];
                    // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                    var this_7 = slot_1;
                    if (!this_7.f3(this_7.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                      var bitCount_1 = 8 - (~(i_1 - lastIndex_1 | 0) >>> 31 | 0) | 0;
                      var inductionVariable_4 = 0;
                      if (inductionVariable_4 < bitCount_1)
                        do {
                          var j_1 = inductionVariable_4;
                          inductionVariable_4 = inductionVariable_4 + 1 | 0;
                          // Inline function 'androidx.collection.isFull' call
                          if (slot_1.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                            var index_1 = (i_1 << 3) + j_1 | 0;
                            var tmp_2 = elements_1[index_1];
                            var it_1 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
                            addPendingInvalidationsLocked($this, it_1, forgetConditionalScopes);
                          }
                          slot_1 = slot_1.d3(8);
                        }
                         while (inductionVariable_4 < bitCount_1);
                      if (!(bitCount_1 === 8)) {
                        break $l$block_1;
                      }
                    }
                  }
                   while (!(i_1 === lastIndex_1));
              }
            } else {
              var it_2 = !(value_1 == null) ? value_1 : THROW_CCE();
              addPendingInvalidationsLocked($this, it_2, forgetConditionalScopes);
            }
          }
        }
      }
      tmp = Unit_instance;
    }
    var conditionallyInvalidatedScopes = $this.s1e_1;
    var invalidatedScopes = $this.r1e_1;
    if (forgetConditionalScopes && conditionallyInvalidatedScopes.cy()) {
      // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf' call
      var this_8 = $this.q1e_1;
      // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
      var this_9 = _ScopeMap___get_map__impl__vxhazm(this_8);
      $l$block_3: {
        // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
        var m_2 = this_9.bz_1;
        var lastIndex_2 = m_2.length - 2 | 0;
        var inductionVariable_5 = 0;
        if (inductionVariable_5 <= lastIndex_2)
          do {
            var i_2 = inductionVariable_5;
            inductionVariable_5 = inductionVariable_5 + 1 | 0;
            var slot_2 = m_2[i_2];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_10 = slot_2;
            if (!this_10.f3(this_10.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount_2 = 8 - (~(i_2 - lastIndex_2 | 0) >>> 31 | 0) | 0;
              var inductionVariable_6 = 0;
              if (inductionVariable_6 < bitCount_2)
                do {
                  var j_2 = inductionVariable_6;
                  inductionVariable_6 = inductionVariable_6 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot_2.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                    var index_2 = (i_2 << 3) + j_2 | 0;
                    var tmp_3 = this_9.cz_1[index_2];
                    (tmp_3 == null ? true : !(tmp_3 == null)) || THROW_CCE();
                    var tmp_4 = this_9.dz_1[index_2];
                    var value_2 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
                    var tmp_5;
                    if (value_2 instanceof MutableScatterSet) {
                      var set = value_2 instanceof MutableScatterSet ? value_2 : THROW_CCE();
                      // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
                      var elements_2 = set.pz_1;
                      $l$block_2: {
                        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                        // Inline function 'kotlin.contracts.contract' call
                        var m_3 = set.oz_1;
                        var lastIndex_3 = m_3.length - 2 | 0;
                        var inductionVariable_7 = 0;
                        if (inductionVariable_7 <= lastIndex_3)
                          do {
                            var i_3 = inductionVariable_7;
                            inductionVariable_7 = inductionVariable_7 + 1 | 0;
                            var slot_3 = m_3[i_3];
                            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                            var this_11 = slot_3;
                            if (!this_11.f3(this_11.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                              var bitCount_3 = 8 - (~(i_3 - lastIndex_3 | 0) >>> 31 | 0) | 0;
                              var inductionVariable_8 = 0;
                              if (inductionVariable_8 < bitCount_3)
                                do {
                                  var j_3 = inductionVariable_8;
                                  inductionVariable_8 = inductionVariable_8 + 1 | 0;
                                  // Inline function 'androidx.collection.isFull' call
                                  if (slot_3.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                                    var index_3 = (i_3 << 3) + j_3 | 0;
                                    var tmp_6 = elements_2[index_3];
                                    var scope = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
                                    if (conditionallyInvalidatedScopes.o(scope) || invalidatedScopes.o(scope)) {
                                      set.c10(index_3);
                                    }
                                  }
                                  slot_3 = slot_3.d3(8);
                                }
                                 while (inductionVariable_8 < bitCount_3);
                              if (!(bitCount_3 === 8)) {
                                break $l$block_2;
                              }
                            }
                          }
                           while (!(i_3 === lastIndex_3));
                      }
                      tmp_5 = set.r();
                    } else {
                      var scope_0 = !(value_2 == null) ? value_2 : THROW_CCE();
                      tmp_5 = conditionallyInvalidatedScopes.o(scope_0) || invalidatedScopes.o(scope_0);
                    }
                    if (tmp_5) {
                      this_9.zw(index_2);
                    }
                  }
                  slot_2 = slot_2.d3(8);
                }
                 while (inductionVariable_6 < bitCount_2);
              if (!(bitCount_2 === 8)) {
                break $l$block_3;
              }
            }
          }
           while (!(i_2 === lastIndex_2));
      }
      conditionallyInvalidatedScopes.y1();
      cleanUpDerivedStateObservations($this);
    } else if (invalidatedScopes.cy()) {
      // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf' call
      var this_12 = $this.q1e_1;
      // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
      var this_13 = _ScopeMap___get_map__impl__vxhazm(this_12);
      $l$block_5: {
        // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
        var m_4 = this_13.bz_1;
        var lastIndex_4 = m_4.length - 2 | 0;
        var inductionVariable_9 = 0;
        if (inductionVariable_9 <= lastIndex_4)
          do {
            var i_4 = inductionVariable_9;
            inductionVariable_9 = inductionVariable_9 + 1 | 0;
            var slot_4 = m_4[i_4];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_14 = slot_4;
            if (!this_14.f3(this_14.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount_4 = 8 - (~(i_4 - lastIndex_4 | 0) >>> 31 | 0) | 0;
              var inductionVariable_10 = 0;
              if (inductionVariable_10 < bitCount_4)
                do {
                  var j_4 = inductionVariable_10;
                  inductionVariable_10 = inductionVariable_10 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot_4.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                    var index_4 = (i_4 << 3) + j_4 | 0;
                    var tmp_7 = this_13.cz_1[index_4];
                    (tmp_7 == null ? true : !(tmp_7 == null)) || THROW_CCE();
                    var tmp_8 = this_13.dz_1[index_4];
                    var value_3 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
                    var tmp_9;
                    if (value_3 instanceof MutableScatterSet) {
                      var set_0 = value_3 instanceof MutableScatterSet ? value_3 : THROW_CCE();
                      // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
                      var elements_3 = set_0.pz_1;
                      $l$block_4: {
                        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                        // Inline function 'kotlin.contracts.contract' call
                        var m_5 = set_0.oz_1;
                        var lastIndex_5 = m_5.length - 2 | 0;
                        var inductionVariable_11 = 0;
                        if (inductionVariable_11 <= lastIndex_5)
                          do {
                            var i_5 = inductionVariable_11;
                            inductionVariable_11 = inductionVariable_11 + 1 | 0;
                            var slot_5 = m_5[i_5];
                            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                            var this_15 = slot_5;
                            if (!this_15.f3(this_15.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                              var bitCount_5 = 8 - (~(i_5 - lastIndex_5 | 0) >>> 31 | 0) | 0;
                              var inductionVariable_12 = 0;
                              if (inductionVariable_12 < bitCount_5)
                                do {
                                  var j_5 = inductionVariable_12;
                                  inductionVariable_12 = inductionVariable_12 + 1 | 0;
                                  // Inline function 'androidx.collection.isFull' call
                                  if (slot_5.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                                    var index_5 = (i_5 << 3) + j_5 | 0;
                                    var tmp_10 = elements_3[index_5];
                                    var scope_1 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
                                    if (invalidatedScopes.o(scope_1)) {
                                      set_0.c10(index_5);
                                    }
                                  }
                                  slot_5 = slot_5.d3(8);
                                }
                                 while (inductionVariable_12 < bitCount_5);
                              if (!(bitCount_5 === 8)) {
                                break $l$block_4;
                              }
                            }
                          }
                           while (!(i_5 === lastIndex_5));
                      }
                      tmp_9 = set_0.r();
                    } else {
                      var scope_2 = !(value_3 == null) ? value_3 : THROW_CCE();
                      tmp_9 = invalidatedScopes.o(scope_2);
                    }
                    if (tmp_9) {
                      this_13.zw(index_4);
                    }
                  }
                  slot_4 = slot_4.d3(8);
                }
                 while (inductionVariable_10 < bitCount_4);
              if (!(bitCount_4 === 8)) {
                break $l$block_5;
              }
            }
          }
           while (!(i_4 === lastIndex_4));
      }
      cleanUpDerivedStateObservations($this);
      invalidatedScopes.y1();
    }
  }
  function cleanUpDerivedStateObservations($this) {
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf' call
    var this_0 = $this.t1e_1;
    // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
    var this_1 = _ScopeMap___get_map__impl__vxhazm(this_0);
    $l$block_0: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this_1.bz_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_2 = slot;
          if (!this_2.f3(this_2.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  var tmp = this_1.cz_1[index];
                  (tmp == null ? true : !(tmp == null)) || THROW_CCE();
                  var tmp_0 = this_1.dz_1[index];
                  var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  var tmp_1;
                  if (value instanceof MutableScatterSet) {
                    var set = value instanceof MutableScatterSet ? value : THROW_CCE();
                    // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
                    var elements = set.pz_1;
                    $l$block: {
                      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                      // Inline function 'kotlin.contracts.contract' call
                      var m_0 = set.oz_1;
                      var lastIndex_0 = m_0.length - 2 | 0;
                      var inductionVariable_1 = 0;
                      if (inductionVariable_1 <= lastIndex_0)
                        do {
                          var i_0 = inductionVariable_1;
                          inductionVariable_1 = inductionVariable_1 + 1 | 0;
                          var slot_0 = m_0[i_0];
                          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                          var this_3 = slot_0;
                          if (!this_3.f3(this_3.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                            var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
                            var inductionVariable_2 = 0;
                            if (inductionVariable_2 < bitCount_0)
                              do {
                                var j_0 = inductionVariable_2;
                                inductionVariable_2 = inductionVariable_2 + 1 | 0;
                                // Inline function 'androidx.collection.isFull' call
                                if (slot_0.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                                  var index_0 = (i_0 << 3) + j_0 | 0;
                                  var tmp_2 = elements[index_0];
                                  var derivedState = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
                                  if (!ScopeMap__contains_impl_6qp7s6($this.q1e_1, derivedState)) {
                                    set.c10(index_0);
                                  }
                                }
                                slot_0 = slot_0.d3(8);
                              }
                               while (inductionVariable_2 < bitCount_0);
                            if (!(bitCount_0 === 8)) {
                              break $l$block;
                            }
                          }
                        }
                         while (!(i_0 === lastIndex_0));
                    }
                    tmp_1 = set.r();
                  } else {
                    var derivedState_0 = !(value == null) ? value : THROW_CCE();
                    tmp_1 = !ScopeMap__contains_impl_6qp7s6($this.q1e_1, derivedState_0);
                  }
                  if (tmp_1) {
                    this_1.zw(index);
                  }
                }
                slot = slot.d3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block_0;
            }
          }
        }
         while (!(i === lastIndex));
    }
    if ($this.s1e_1.cy()) {
      // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
      var this_4 = $this.s1e_1;
      var elements_0 = this_4.pz_1;
      $l$block_1: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m_1 = this_4.oz_1;
        var lastIndex_1 = m_1.length - 2 | 0;
        var inductionVariable_3 = 0;
        if (inductionVariable_3 <= lastIndex_1)
          do {
            var i_1 = inductionVariable_3;
            inductionVariable_3 = inductionVariable_3 + 1 | 0;
            var slot_1 = m_1[i_1];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_5 = slot_1;
            if (!this_5.f3(this_5.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount_1 = 8 - (~(i_1 - lastIndex_1 | 0) >>> 31 | 0) | 0;
              var inductionVariable_4 = 0;
              if (inductionVariable_4 < bitCount_1)
                do {
                  var j_1 = inductionVariable_4;
                  inductionVariable_4 = inductionVariable_4 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot_1.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                    var index_1 = (i_1 << 3) + j_1 | 0;
                    var tmp_3 = elements_0[index_1];
                    if (!((tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE()).d1l()) {
                      this_4.c10(index_1);
                    }
                  }
                  slot_1 = slot_1.d3(8);
                }
                 while (inductionVariable_4 < bitCount_1);
              if (!(bitCount_1 === 8)) {
                break $l$block_1;
              }
            }
          }
           while (!(i_1 === lastIndex_1));
      }
    }
  }
  function invalidateScopeOfLocked($this, value) {
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
    var this_0 = $this.q1e_1;
    var value_0 = _ScopeMap___get_map__impl__vxhazm(this_0).h2(value);
    if (value_0 != null) {
      if (value_0 instanceof MutableScatterSet) {
        // Inline function 'androidx.collection.ScatterSet.forEach' call
        var this_1 = value_0 instanceof MutableScatterSet ? value_0 : THROW_CCE();
        // Inline function 'kotlin.contracts.contract' call
        var elements = this_1.pz_1;
        $l$block: {
          // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
          // Inline function 'kotlin.contracts.contract' call
          var m = this_1.oz_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_2 = slot;
              if (!this_2.f3(this_2.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                      var index = (i << 3) + j | 0;
                      var tmp = elements[index];
                      var scope = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                      if (scope.e1l(value).equals(InvalidationResult_IMMINENT_getInstance())) {
                        ScopeMap__add_impl_n8b3uc($this.w1e_1, value, scope);
                      }
                    }
                    slot = slot.d3(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  break $l$block;
                }
              }
            }
             while (!(i === lastIndex));
        }
      } else {
        var scope_0 = !(value_0 == null) ? value_0 : THROW_CCE();
        if (scope_0.e1l(value).equals(InvalidationResult_IMMINENT_getInstance())) {
          ScopeMap__add_impl_n8b3uc($this.w1e_1, value, scope_0);
        }
      }
    }
  }
  function applyChangesInLocked($this, changes) {
    var manager = new RememberEventDispatcher($this.o1e_1);
    try {
      if (changes.r())
        return Unit_instance;
      var tmp0 = 'Compose:applyChanges';
      $l$block: {
        // Inline function 'androidx.compose.runtime.internal.trace' call
        var token = Trace_instance.u1d(tmp0);
        try {
          var tmp0_safe_receiver = $this.a1f_1;
          var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q1l_1;
          var applier = tmp1_elvis_lhs == null ? $this.l1e_1 : tmp1_elvis_lhs;
          var tmp2_safe_receiver = $this.a1f_1;
          var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.p1l_1;
          var rememberManager = tmp3_elvis_lhs == null ? manager : tmp3_elvis_lhs;
          applier.q12();
          // Inline function 'androidx.compose.runtime.SlotTable.write' call
          // Inline function 'kotlin.let' call
          var writer = $this.p1e_1.v19();
          var normalClose = false;
          var tmp;
          try {
            changes.r1l(applier, writer, rememberManager);
            // Inline function 'kotlin.also' call
            normalClose = true;
            tmp = Unit_instance;
          }finally {
            writer.a1a(normalClose);
          }
          applier.r12();
          break $l$block;
        }finally {
          Trace_instance.f1e(token);
        }
      }
      manager.d1m();
      manager.e1m();
      if ($this.y1e_1) {
        var tmp0_0 = 'Compose:unobserve';
        $l$block_2: {
          // Inline function 'androidx.compose.runtime.internal.trace' call
          var token_0 = Trace_instance.u1d(tmp0_0);
          try {
            $this.y1e_1 = false;
            // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf' call
            var this_0 = $this.q1e_1;
            // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
            var this_1 = _ScopeMap___get_map__impl__vxhazm(this_0);
            $l$block_1: {
              // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
              var m = this_1.bz_1;
              var lastIndex = m.length - 2 | 0;
              var inductionVariable = 0;
              if (inductionVariable <= lastIndex)
                do {
                  var i = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var slot = m[i];
                  // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                  var this_2 = slot;
                  if (!this_2.f3(this_2.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                    var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                    var inductionVariable_0 = 0;
                    if (inductionVariable_0 < bitCount)
                      do {
                        var j = inductionVariable_0;
                        inductionVariable_0 = inductionVariable_0 + 1 | 0;
                        // Inline function 'androidx.collection.isFull' call
                        if (slot.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                          var index = (i << 3) + j | 0;
                          var tmp_0 = this_1.cz_1[index];
                          (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
                          var tmp_1 = this_1.dz_1[index];
                          var value = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                          var tmp_2;
                          if (value instanceof MutableScatterSet) {
                            var set = value instanceof MutableScatterSet ? value : THROW_CCE();
                            // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
                            var elements = set.pz_1;
                            $l$block_0: {
                              // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                              // Inline function 'kotlin.contracts.contract' call
                              var m_0 = set.oz_1;
                              var lastIndex_0 = m_0.length - 2 | 0;
                              var inductionVariable_1 = 0;
                              if (inductionVariable_1 <= lastIndex_0)
                                do {
                                  var i_0 = inductionVariable_1;
                                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                                  var slot_0 = m_0[i_0];
                                  // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                                  var this_3 = slot_0;
                                  if (!this_3.f3(this_3.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                                    var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
                                    var inductionVariable_2 = 0;
                                    if (inductionVariable_2 < bitCount_0)
                                      do {
                                        var j_0 = inductionVariable_2;
                                        inductionVariable_2 = inductionVariable_2 + 1 | 0;
                                        // Inline function 'androidx.collection.isFull' call
                                        if (slot_0.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                                          var index_0 = (i_0 << 3) + j_0 | 0;
                                          var tmp_3 = elements[index_0];
                                          if (!((tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE()).w1j()) {
                                            set.c10(index_0);
                                          }
                                        }
                                        slot_0 = slot_0.d3(8);
                                      }
                                       while (inductionVariable_2 < bitCount_0);
                                    if (!(bitCount_0 === 8)) {
                                      break $l$block_0;
                                    }
                                  }
                                }
                                 while (!(i_0 === lastIndex_0));
                            }
                            tmp_2 = set.r();
                          } else {
                            tmp_2 = !(!(value == null) ? value : THROW_CCE()).w1j();
                          }
                          if (tmp_2) {
                            this_1.zw(index);
                          }
                        }
                        slot = slot.d3(8);
                      }
                       while (inductionVariable_0 < bitCount);
                    if (!(bitCount === 8)) {
                      break $l$block_1;
                    }
                  }
                }
                 while (!(i === lastIndex));
            }
            cleanUpDerivedStateObservations($this);
            break $l$block_2;
          }finally {
            Trace_instance.f1e(token_0);
          }
        }
      }
    }finally {
      if ($this.v1e_1.r() && $this.a1f_1 == null) {
        manager.f1m();
      }
    }
  }
  function tryImminentInvalidation($this, scope, instance) {
    return $this.g1m() && $this.e1f_1.s1d(scope, instance);
  }
  function invalidateChecked($this, scope, anchor, instance) {
    // Inline function 'androidx.compose.runtime.platform.synchronized' call
    $this.n1e_1;
    var tmp0_safe_receiver = $this.b1f_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp_0;
      if ($this.p1e_1.h1m($this.c1f_1, anchor)) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var delegate = tmp;
    if (delegate == null) {
      if (tryImminentInvalidation($this, scope, instance)) {
        return InvalidationResult_IMMINENT_getInstance();
      }
      var observer_0 = observer($this);
      if (instance == null) {
        ScopeMap__set_impl_3y8kbx($this.x1e_1, scope, ScopeInvalidated_instance);
      } else {
        var tmp_1;
        if (observer_0 == null) {
          tmp_1 = !(!(instance == null) ? isInterface(instance, DerivedState) : false);
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          ScopeMap__set_impl_3y8kbx($this.x1e_1, scope, ScopeInvalidated_instance);
        } else {
          var tmp0 = $this.x1e_1;
          var tmp$ret$7;
          $l$block_1: {
            // Inline function 'androidx.compose.runtime.collection.ScopeMap.anyScopeOf' call
            // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
            var value = _ScopeMap___get_map__impl__vxhazm(tmp0).h2(scope);
            if (value != null) {
              if (value instanceof MutableScatterSet) {
                // Inline function 'androidx.collection.ScatterSet.forEach' call
                var this_0 = value instanceof MutableScatterSet ? value : THROW_CCE();
                // Inline function 'kotlin.contracts.contract' call
                var elements = this_0.pz_1;
                $l$block_0: {
                  // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                  // Inline function 'kotlin.contracts.contract' call
                  var m = this_0.oz_1;
                  var lastIndex = m.length - 2 | 0;
                  var inductionVariable = 0;
                  if (inductionVariable <= lastIndex)
                    do {
                      var i = inductionVariable;
                      inductionVariable = inductionVariable + 1 | 0;
                      var slot = m[i];
                      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                      var this_1 = slot;
                      if (!this_1.f3(this_1.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                        var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                        var inductionVariable_0 = 0;
                        if (inductionVariable_0 < bitCount)
                          do {
                            var j = inductionVariable_0;
                            inductionVariable_0 = inductionVariable_0 + 1 | 0;
                            // Inline function 'androidx.collection.isFull' call
                            if (slot.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                              var index = (i << 3) + j | 0;
                              var tmp_2 = elements[index];
                              if (((tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE()) === ScopeInvalidated_instance) {
                                tmp$ret$7 = true;
                                break $l$block_1;
                              }
                            }
                            slot = slot.d3(8);
                          }
                           while (inductionVariable_0 < bitCount);
                        if (!(bitCount === 8)) {
                          break $l$block_0;
                        }
                      }
                    }
                     while (!(i === lastIndex));
                }
              } else {
                if ((!(value == null) ? value : THROW_CCE()) === ScopeInvalidated_instance) {
                  tmp$ret$7 = true;
                  break $l$block_1;
                }
              }
            }
            tmp$ret$7 = false;
          }
          if (!tmp$ret$7) {
            ScopeMap__add_impl_n8b3uc($this.x1e_1, scope, instance);
          }
        }
      }
    }
    var delegate_0 = delegate;
    if (!(delegate_0 == null)) {
      return invalidateChecked(delegate_0, scope, anchor, instance);
    }
    $this.k1e_1.i1m($this);
    return $this.g1m() ? InvalidationResult_DEFERRED_getInstance() : InvalidationResult_SCHEDULED_getInstance();
  }
  function takeInvalidations($this) {
    var invalidations = $this.x1e_1;
    $this.x1e_1 = _ScopeMap___init__impl__52wntz();
    return invalidations;
  }
  function observer($this) {
    var holder = $this.d1f_1;
    var tmp;
    if (holder.l1m_1) {
      tmp = holder.k1m_1;
    } else {
      var parentHolder = $this.k1e_1.j1m();
      var parentObserver = parentHolder == null ? null : parentHolder.k1m_1;
      if (!equals(parentObserver, holder.k1m_1)) {
        holder.k1m_1 = parentObserver;
      }
      tmp = parentObserver;
    }
    return tmp;
  }
  function CompositionImpl(parent, applier, recomposeContext) {
    recomposeContext = recomposeContext === VOID ? null : recomposeContext;
    this.k1e_1 = parent;
    this.l1e_1 = applier;
    this.m1e_1 = new AtomicReference(null);
    var tmp = this;
    // Inline function 'androidx.compose.runtime.platform.makeSynchronizedObject' call
    tmp.n1e_1 = null == null ? new Object() : null;
    this.o1e_1 = (new MutableScatterSet()).e10();
    var tmp_0 = this;
    // Inline function 'kotlin.also' call
    var this_0 = new SlotTable();
    if (this.k1e_1.z19()) {
      this_0.y19();
    }
    if (this.k1e_1.b17()) {
      this_0.x19();
    }
    tmp_0.p1e_1 = this_0;
    this.q1e_1 = _ScopeMap___init__impl__52wntz();
    this.r1e_1 = new MutableScatterSet();
    this.s1e_1 = new MutableScatterSet();
    this.t1e_1 = _ScopeMap___init__impl__52wntz();
    this.u1e_1 = new ChangeList();
    this.v1e_1 = new ChangeList();
    this.w1e_1 = _ScopeMap___init__impl__52wntz();
    this.x1e_1 = _ScopeMap___init__impl__52wntz();
    this.y1e_1 = false;
    this.z1e_1 = null;
    this.a1f_1 = null;
    this.b1f_1 = null;
    this.c1f_1 = 0;
    this.d1f_1 = new CompositionObserverHolder();
    var tmp_1 = this;
    // Inline function 'kotlin.also' call
    var this_1 = new ComposerImpl(this.l1e_1, this.k1e_1, this.p1e_1, this.o1e_1, this.u1e_1, this.v1e_1, this);
    this.k1e_1.m1m(this_1);
    tmp_1.e1f_1 = this_1;
    this.f1f_1 = recomposeContext;
    var tmp_2 = this;
    var tmp_3 = this.k1e_1;
    tmp_2.g1f_1 = tmp_3 instanceof Recomposer;
    this.h1f_1 = false;
    this.i1f_1 = ComposableSingletons$CompositionKt_getInstance().n1m_1;
  }
  protoOf(CompositionImpl).g1m = function () {
    return this.e1f_1.s15_1;
  };
  protoOf(CompositionImpl).p1m = function () {
    return this.h1f_1;
  };
  protoOf(CompositionImpl).q1m = function (content) {
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    if (!(this.a1f_1 == null)) {
      var tmp$ret$0 = 'A pausable composition is in progress';
      throwIllegalStateException(tmp$ret$0);
    }
    composeInitial(this, content);
  };
  protoOf(CompositionImpl).r1m = function (content) {
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'androidx.compose.runtime.platform.synchronized' call
        this.n1e_1;
        drainPendingModificationsForCompositionLocked(this);
        // Inline function 'androidx.compose.runtime.CompositionImpl.guardInvalidationsLocked' call
        var invalidations = takeInvalidations(this);
        var tmp_1;
        try {
          var observer_0 = observer(this);
          if (!(observer_0 == null)) {
            var tmp_2 = ScopeMap__asMap_impl_uiab3f(invalidations);
            observer_0.s1m(this, isInterface(tmp_2, KtMap) ? tmp_2 : THROW_CCE());
          }
          this.e1f_1.n1j(invalidations, content, this.z1e_1);
          var tmp_3;
          if (observer_0 == null) {
            tmp_3 = null;
          } else {
            observer_0.t1m(this);
            tmp_3 = Unit_instance;
          }
          tmp_1 = tmp_3;
        } catch ($p) {
          var tmp_4;
          if ($p instanceof Exception) {
            var e = $p;
            this.x1e_1 = invalidations;
            throw e;
          } else {
            throw $p;
          }
        }
        // Inline function 'kotlin.also' call
        success = true;
        tmp_0 = tmp_1;
      }finally {
        var tmp_5;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_5 = !this.o1e_1.r();
        } else {
          tmp_5 = false;
        }
        if (tmp_5) {
          (new RememberEventDispatcher(this.o1e_1)).f1m();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_6;
      if ($p instanceof Exception) {
        var e_0 = $p;
        this.u1m();
        throw e_0;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).j1f = function () {
    // Inline function 'androidx.compose.runtime.platform.synchronized' call
    this.n1e_1;
    drainPendingModificationsOutOfBandLocked(this);
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardInvalidationsLocked' call
    var invalidations = takeInvalidations(this);
    try {
      this.e1f_1.a1e(invalidations);
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        this.x1e_1 = invalidations;
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).v1m = function (values) {
    $l$loop: while (true) {
      var old = this.m1e_1.bo();
      var tmp;
      if (old == null || equals(old, get_PendingApplyNoModifications())) {
        tmp = values;
      } else {
        if (!(old == null) ? isInterface(old, KtSet) : false) {
          // Inline function 'kotlin.arrayOf' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp = [old, values];
        } else {
          if (!(old == null) ? isArray(old) : false) {
            tmp = plus_1(isArray(old) ? old : THROW_CCE(), values);
          } else {
            var message = 'corrupt pendingModifications: ' + toString(this.m1e_1);
            throw IllegalStateException_init_$Create$(toString(message));
          }
        }
      }
      var new_0 = tmp;
      if (this.m1e_1.w1m(old, new_0)) {
        if (old == null) {
          // Inline function 'androidx.compose.runtime.platform.synchronized' call
          this.n1e_1;
          drainPendingModificationsLocked(this);
        }
        break $l$loop;
      }
    }
  };
  protoOf(CompositionImpl).x1m = function (values) {
    // Inline function 'androidx.compose.runtime.collection.fastForEach' call
    var tmp;
    if (values instanceof ScatterSetWrapper) {
      // Inline function 'androidx.collection.ScatterSet.forEach' call
      var this_0 = values.f1l_1;
      // Inline function 'kotlin.contracts.contract' call
      var elements = this_0.pz_1;
      $l$block: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this_0.oz_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            if (!this_1.f3(this_1.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                    var index = (i << 3) + j | 0;
                    var tmp_0 = elements[index];
                    var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                    if (ScopeMap__contains_impl_6qp7s6(this.q1e_1, value) || ScopeMap__contains_impl_6qp7s6(this.t1e_1, value))
                      return true;
                  }
                  slot = slot.d3(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
      tmp = Unit_instance;
    } else {
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = values.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        if (ScopeMap__contains_impl_6qp7s6(this.q1e_1, element) || ScopeMap__contains_impl_6qp7s6(this.t1e_1, element))
          return true;
      }
      tmp = Unit_instance;
    }
    return false;
  };
  protoOf(CompositionImpl).y1m = function (block) {
    return this.e1f_1.p1j(block);
  };
  protoOf(CompositionImpl).z1k = function (value) {
    if (!_get_areChildrenComposing__c1uwup(this)) {
      var tmp0_safe_receiver = this.e1f_1.u1g();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        tmp0_safe_receiver.t1i(true);
        var alreadyRead = tmp0_safe_receiver.z1m(value);
        if (!alreadyRead) {
          if (value instanceof StateObjectImpl) {
            // Inline function 'androidx.compose.runtime.snapshots.Companion.Composition' call
            var tmp$ret$0 = _ReaderKind___init__impl__jqeebu(1);
            value.b1n(tmp$ret$0);
          }
          ScopeMap__add_impl_n8b3uc(this.q1e_1, value, tmp0_safe_receiver);
          if (isInterface(value, DerivedState)) {
            var record = value.c1n();
            ScopeMap__removeScope_impl_8k6ux1(this.t1e_1, value);
            // Inline function 'androidx.collection.ObjectIntMap.forEachKey' call
            var this_0 = record.d1n();
            var k = this_0.mx_1;
            $l$block: {
              // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
              var m = this_0.lx_1;
              var lastIndex = m.length - 2 | 0;
              var inductionVariable = 0;
              if (inductionVariable <= lastIndex)
                do {
                  var i = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var slot = m[i];
                  // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                  var this_1 = slot;
                  if (!this_1.f3(this_1.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                    var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                    var inductionVariable_0 = 0;
                    if (inductionVariable_0 < bitCount)
                      do {
                        var j = inductionVariable_0;
                        inductionVariable_0 = inductionVariable_0 + 1 | 0;
                        // Inline function 'androidx.collection.isFull' call
                        if (slot.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                          var index = (i << 3) + j | 0;
                          var tmp = k[index];
                          var dependency = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                          if (dependency instanceof StateObjectImpl) {
                            // Inline function 'androidx.compose.runtime.snapshots.Companion.Composition' call
                            var tmp$ret$3 = _ReaderKind___init__impl__jqeebu(1);
                            dependency.b1n(tmp$ret$3);
                          }
                          ScopeMap__add_impl_n8b3uc(this.t1e_1, dependency, value);
                        }
                        slot = slot.d3(8);
                      }
                       while (inductionVariable_0 < bitCount);
                    if (!(bitCount === 8)) {
                      break $l$block;
                    }
                  }
                }
                 while (!(i === lastIndex));
            }
            tmp0_safe_receiver.f1n(value, record.e1n());
          }
        }
      }
    }
  };
  protoOf(CompositionImpl).g1n = function (value) {
    // Inline function 'androidx.compose.runtime.platform.synchronized' call
    this.n1e_1;
    invalidateScopeOfLocked(this, value);
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
    var this_0 = this.t1e_1;
    var value_0 = _ScopeMap___get_map__impl__vxhazm(this_0).h2(value);
    if (value_0 != null) {
      if (value_0 instanceof MutableScatterSet) {
        // Inline function 'androidx.collection.ScatterSet.forEach' call
        var this_1 = value_0 instanceof MutableScatterSet ? value_0 : THROW_CCE();
        // Inline function 'kotlin.contracts.contract' call
        var elements = this_1.pz_1;
        $l$block: {
          // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
          // Inline function 'kotlin.contracts.contract' call
          var m = this_1.oz_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_2 = slot;
              if (!this_2.f3(this_2.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                      var index = (i << 3) + j | 0;
                      var tmp = elements[index];
                      var it = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                      invalidateScopeOfLocked(this, it);
                    }
                    slot = slot.d3(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  break $l$block;
                }
              }
            }
             while (!(i === lastIndex));
        }
      } else {
        var it_0 = !(value_0 == null) ? value_0 : THROW_CCE();
        invalidateScopeOfLocked(this, it_0);
      }
    }
    return Unit_instance;
  };
  protoOf(CompositionImpl).h1n = function () {
    // Inline function 'androidx.compose.runtime.platform.synchronized' call
    this.n1e_1;
    drainPendingModificationsForCompositionLocked(this);
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'androidx.compose.runtime.CompositionImpl.guardInvalidationsLocked' call
        var invalidations = takeInvalidations(this);
        var tmp_1;
        try {
          var observer_0 = observer(this);
          if (observer_0 == null)
            null;
          else {
            var tmp_2 = ScopeMap__asMap_impl_uiab3f(invalidations);
            observer_0.s1m(this, isInterface(tmp_2, KtMap) ? tmp_2 : THROW_CCE());
          }
          // Inline function 'kotlin.also' call
          var this_0 = this.e1f_1.q1j(invalidations, this.z1e_1);
          if (!this_0) {
            drainPendingModificationsLocked(this);
          }
          if (observer_0 == null)
            null;
          else {
            observer_0.t1m(this);
          }
          tmp_1 = this_0;
        } catch ($p) {
          var tmp_3;
          if ($p instanceof Exception) {
            var e = $p;
            this.x1e_1 = invalidations;
            throw e;
          } else {
            throw $p;
          }
        }
        // Inline function 'kotlin.also' call
        success = true;
        tmp_0 = tmp_1;
      }finally {
        var tmp_4;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_4 = !this.o1e_1.r();
        } else {
          tmp_4 = false;
        }
        if (tmp_4) {
          (new RememberEventDispatcher(this.o1e_1)).f1m();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_5;
      if ($p instanceof Exception) {
        var e_0 = $p;
        this.u1m();
        throw e_0;
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  protoOf(CompositionImpl).i1n = function (references) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.runtime.snapshots.fastAll' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var inductionVariable = 0;
      var last = references.j() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.p(index);
          if (!equals(item.ye_1.c1d_1, this)) {
            tmp$ret$1 = false;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = true;
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!tmp$ret$1) {
      var tmp$ret$4 = 'Check failed';
      composeImmediateRuntimeError(tmp$ret$4);
    }
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp;
      try {
        this.e1f_1.g1j(references);
        // Inline function 'kotlin.also' call
        success = true;
        tmp = Unit_instance;
      }finally {
        var tmp_0;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_0 = !this.o1e_1.r();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          (new RememberEventDispatcher(this.o1e_1)).f1m();
        }
      }
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        this.u1m();
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).j1n = function (state) {
    var manager = new RememberEventDispatcher(this.o1e_1);
    var slotTable = state.l1d_1;
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    var writer = slotTable.v19();
    var normalClose = false;
    var tmp;
    try {
      removeCurrentGroup(writer, manager);
      // Inline function 'kotlin.also' call
      normalClose = true;
      tmp = Unit_instance;
    }finally {
      writer.a1a(normalClose);
    }
    manager.d1m();
  };
  protoOf(CompositionImpl).k1n = function () {
    // Inline function 'androidx.compose.runtime.platform.synchronized' call
    this.n1e_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp;
      try {
        applyChangesInLocked(this, this.u1e_1);
        drainPendingModificationsLocked(this);
        // Inline function 'kotlin.also' call
        success = true;
        tmp = Unit_instance;
      }finally {
        var tmp_0;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_0 = !this.o1e_1.r();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          (new RememberEventDispatcher(this.o1e_1)).f1m();
        }
      }
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        this.u1m();
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).l1n = function () {
    // Inline function 'androidx.compose.runtime.platform.synchronized' call
    this.n1e_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp;
      try {
        if (this.v1e_1.cy()) {
          applyChangesInLocked(this, this.v1e_1);
        }
        // Inline function 'kotlin.also' call
        success = true;
        tmp = Unit_instance;
      }finally {
        var tmp_0;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_0 = !this.o1e_1.r();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          (new RememberEventDispatcher(this.o1e_1)).f1m();
        }
      }
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        this.u1m();
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).m1n = function () {
    // Inline function 'androidx.compose.runtime.platform.synchronized' call
    this.n1e_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp;
      try {
        this.e1f_1.x1g();
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!this.o1e_1.r()) {
          (new RememberEventDispatcher(this.o1e_1)).f1m();
        }
        // Inline function 'kotlin.also' call
        success = true;
        tmp = Unit_instance;
      }finally {
        var tmp_0;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_0 = !this.o1e_1.r();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          (new RememberEventDispatcher(this.o1e_1)).f1m();
        }
      }
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        this.u1m();
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).u1m = function () {
    this.m1e_1.n1n(null);
    this.u1e_1.y1();
    this.v1e_1.y1();
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.o1e_1.r()) {
      (new RememberEventDispatcher(this.o1e_1)).f1m();
    }
  };
  protoOf(CompositionImpl).o1n = function () {
    // Inline function 'androidx.compose.runtime.platform.synchronized' call
    this.n1e_1;
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = this.p1e_1.k16_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp0_safe_receiver = element instanceof RecomposeScopeImpl ? element : null;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.p1n();
      }
    }
  };
  protoOf(CompositionImpl).t1d = function (to, groupIndex, block) {
    var tmp;
    if (!(to == null) && !equals(to, this) && groupIndex >= 0) {
      var tmp_0 = this;
      tmp_0.b1f_1 = to instanceof CompositionImpl ? to : THROW_CCE();
      this.c1f_1 = groupIndex;
      var tmp_1;
      try {
        tmp_1 = block();
      }finally {
        this.b1f_1 = null;
        this.c1f_1 = 0;
      }
      tmp = tmp_1;
    } else {
      tmp = block();
    }
    return tmp;
  };
  protoOf(CompositionImpl).x1k = function (scope, instance) {
    if (scope.q1n()) {
      scope.e1j(true);
    }
    var anchor = scope.g14_1;
    if (anchor == null || !anchor.w1j())
      return InvalidationResult_IGNORED_getInstance();
    if (!this.p1e_1.b1k(anchor)) {
      // Inline function 'androidx.compose.runtime.platform.synchronized' call
      this.n1e_1;
      var delegate = this.b1f_1;
      if ((delegate == null ? null : tryImminentInvalidation(delegate, scope, instance)) === true)
        return InvalidationResult_IMMINENT_getInstance();
      return InvalidationResult_IGNORED_getInstance();
    }
    if (!scope.r1n())
      return InvalidationResult_IGNORED_getInstance();
    return invalidateChecked(this, scope, anchor, instance);
  };
  protoOf(CompositionImpl).y1k = function (scope) {
    this.y1e_1 = true;
  };
  protoOf(CompositionImpl).s1n = function (instance, scope) {
    ScopeMap__remove_impl_ocu4rj(this.q1e_1, instance, scope);
  };
  protoOf(CompositionImpl).t1n = function (state) {
    if (!ScopeMap__contains_impl_6qp7s6(this.q1e_1, state)) {
      ScopeMap__removeScope_impl_8k6ux1(this.t1e_1, state);
    }
  };
  function CompositionObserverHolder(observer, root) {
    observer = observer === VOID ? null : observer;
    root = root === VOID ? false : root;
    this.k1m_1 = observer;
    this.l1m_1 = root;
  }
  function ComposableLambda$invoke$ref_0(p0) {
    return function (_this__u8e3s4, p0_0) {
      return p0.g1g(_this__u8e3s4, p0_0);
    };
  }
  function ComposableSingletons$CompositionKt$lambda_1$lambda_xm0u9s($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Composition.kt#9igjgp');
    if (!(($changed & 3) === 2) || !$composer_0.i1g()) {
      if (isTraceInProgress()) {
        traceEventStart(954879418, $changed, -1, 'androidx.compose.runtime.ComposableSingletons$CompositionKt.lambda-1.<anonymous> (Composition.kt:600)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.w19();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_1(p0) {
    return function (_this__u8e3s4, p0_0) {
      return p0.g1g(_this__u8e3s4, p0_0);
    };
  }
  function ComposableSingletons$CompositionKt$lambda_2$lambda_8lgqn5($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Composition.kt#9igjgp');
    if (!(($changed & 3) === 2) || !$composer_0.i1g()) {
      if (isTraceInProgress()) {
        traceEventStart(1918065384, $changed, -1, 'androidx.compose.runtime.ComposableSingletons$CompositionKt.lambda-2.<anonymous> (Composition.kt:815)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.w19();
    }
    return Unit_instance;
  }
  function ComposableSingletons$CompositionKt() {
    ComposableSingletons$CompositionKt_instance = this;
    var tmp = this;
    tmp.n1m_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(954879418, false, ComposableSingletons$CompositionKt$lambda_1$lambda_xm0u9s));
    var tmp_0 = this;
    tmp_0.o1m_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(1918065384, false, ComposableSingletons$CompositionKt$lambda_2$lambda_8lgqn5));
  }
  var ComposableSingletons$CompositionKt_instance;
  function ComposableSingletons$CompositionKt_getInstance() {
    if (ComposableSingletons$CompositionKt_instance == null)
      new ComposableSingletons$CompositionKt();
    return ComposableSingletons$CompositionKt_instance;
  }
  function ScopeInvalidated() {
  }
  var ScopeInvalidated_instance;
  function ScopeInvalidated_getInstance() {
    return ScopeInvalidated_instance;
  }
  function ControlledComposition(applier, parent) {
    _init_properties_Composition_kt__t5pjw8();
    return new CompositionImpl(parent, applier);
  }
  function CompositionImplServiceKey$1() {
  }
  var properties_initialized_Composition_kt_u7hvq2;
  function _init_properties_Composition_kt__t5pjw8() {
    if (!properties_initialized_Composition_kt_u7hvq2) {
      properties_initialized_Composition_kt_u7hvq2 = true;
      PendingApplyNoModifications = new Object();
      CompositionImplServiceKey = new CompositionImplServiceKey$1();
      androidx_compose_runtime_CompositionImpl$stable = 8;
      androidx_compose_runtime_ScopeInvalidated$stable = 0;
      androidx_compose_runtime_CompositionObserverHolder$stable = 8;
    }
  }
  function get_EmptyPersistentCompositionLocalMap() {
    _init_properties_CompositionContext_kt__4g1p1h();
    return EmptyPersistentCompositionLocalMap;
  }
  var EmptyPersistentCompositionLocalMap;
  var androidx_compose_runtime_CompositionContext$stable;
  function CompositionContext() {
  }
  protoOf(CompositionContext).j1m = function () {
    return null;
  };
  protoOf(CompositionContext).d17 = function (table) {
  };
  protoOf(CompositionContext).m1m = function (composer) {
  };
  protoOf(CompositionContext).v16 = function () {
    return get_EmptyPersistentCompositionLocalMap();
  };
  protoOf(CompositionContext).u16 = function () {
  };
  protoOf(CompositionContext).f17 = function () {
  };
  protoOf(CompositionContext).k1d = function (reference) {
    return null;
  };
  var properties_initialized_CompositionContext_kt_mk393b;
  function _init_properties_CompositionContext_kt__4g1p1h() {
    if (!properties_initialized_CompositionContext_kt_mk393b) {
      properties_initialized_CompositionContext_kt_mk393b = true;
      EmptyPersistentCompositionLocalMap = persistentCompositionLocalHashMapOf();
      androidx_compose_runtime_CompositionContext$stable = 0;
    }
  }
  var androidx_compose_runtime_CompositionLocal$stable;
  var androidx_compose_runtime_ProvidableCompositionLocal$stable;
  var androidx_compose_runtime_DynamicProvidableCompositionLocal$stable;
  var androidx_compose_runtime_StaticProvidableCompositionLocal$stable;
  var androidx_compose_runtime_ComputedProvidableCompositionLocal$stable;
  var androidx_compose_runtime_CompositionLocalContext$stable;
  function CompositionLocal(defaultFactory) {
    this.h1i_1 = new LazyValueHolder(defaultFactory);
  }
  protoOf(CompositionLocal).v1n = function () {
    return this.h1i_1;
  };
  function valueHolderOf($this, value) {
    var tmp;
    if (value.e1i_1) {
      var tmp0_elvis_lhs = value.c1i_1;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        var tmp_1 = value.e2();
        var tmp1_elvis_lhs = value.b1i_1;
        tmp_0 = mutableStateOf(tmp_1, tmp1_elvis_lhs == null ? structuralEqualityPolicy() : tmp1_elvis_lhs);
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      tmp = new DynamicValueHolder(tmp_0);
    } else if (!(value.d1i_1 == null)) {
      tmp = new ComputedValueHolder(value.d1i_1);
    } else if (!(value.c1i_1 == null)) {
      tmp = new DynamicValueHolder(value.c1i_1);
    } else {
      tmp = new StaticValueHolder(value.h1k());
    }
    return tmp;
  }
  function ProvidableCompositionLocal(defaultFactory) {
    CompositionLocal.call(this, defaultFactory);
  }
  protoOf(ProvidableCompositionLocal).y1n = function (value) {
    return this.x1n(value);
  };
  protoOf(ProvidableCompositionLocal).i1i = function (value, previous) {
    var tmp;
    if (previous instanceof DynamicValueHolder) {
      var tmp_0;
      if (value.e1i_1) {
        previous.b1o_1.ss(value.h1k());
        tmp_0 = previous;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    } else {
      if (previous instanceof StaticValueHolder) {
        tmp = value.i1k() && equals(value.h1k(), previous.a1o_1) ? previous : null;
      } else {
        if (previous instanceof ComputedValueHolder) {
          tmp = value.d1i_1 === previous.z1n_1 ? previous : null;
        } else {
          tmp = null;
        }
      }
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? valueHolderOf(this, value) : tmp1_elvis_lhs;
  };
  function staticCompositionLocalOf(defaultFactory) {
    return new StaticProvidableCompositionLocal(defaultFactory);
  }
  function StaticProvidableCompositionLocal(defaultFactory) {
    ProvidableCompositionLocal.call(this, defaultFactory);
  }
  protoOf(StaticProvidableCompositionLocal).x1n = function (value) {
    return new ProvidedValue(this, value, value === null, null, null, null, false);
  };
  function compositionLocalOf(policy, defaultFactory) {
    policy = policy === VOID ? structuralEqualityPolicy() : policy;
    return new DynamicProvidableCompositionLocal(policy, defaultFactory);
  }
  function CompositionLocalProvider(value, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.y1i(-149765515);
    sourceInformation($composer_0, 'C(CompositionLocalProvider)P(1)383@17375L9:CompositionLocal.kt#9igjgp');
    var $dirty = $changed;
    if (isTraceInProgress()) {
      traceEventStart(-149765515, $dirty, -1, 'androidx.compose.runtime.CompositionLocalProvider (CompositionLocal.kt:381)');
    }
    $composer_0.x1h(value);
    content($composer_0, 14 & $dirty >> 3);
    $composer_0.l1i();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_safe_receiver = $composer_0.z1i();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d1o(CompositionLocalProvider$lambda(value, content, $changed));
    }
  }
  function DynamicProvidableCompositionLocal(policy, defaultFactory) {
    ProvidableCompositionLocal.call(this, defaultFactory);
    this.f1o_1 = policy;
  }
  protoOf(DynamicProvidableCompositionLocal).x1n = function (value) {
    return new ProvidedValue(this, value, value === null, this.f1o_1, null, null, true);
  };
  function CompositionLocalProvider$lambda($value, $content, $$changed) {
    return function ($composer, $force) {
      CompositionLocalProvider($value, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function PersistentCompositionLocalMap() {
  }
  function read(_this__u8e3s4, key) {
    // Inline function 'kotlin.collections.getOrElse' call
    var key_0 = key instanceof CompositionLocal ? key : THROW_CCE();
    var tmp0_elvis_lhs = _this__u8e3s4.h2(key_0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      tmp = key.v1n();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp_0 = tmp.g1o(_this__u8e3s4);
    return (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
  }
  function contains_0(_this__u8e3s4, key) {
    return _this__u8e3s4.f2(key instanceof CompositionLocal ? key : THROW_CCE());
  }
  var calculationBlockNestedLevel;
  function get_derivedStateObservers() {
    _init_properties_DerivedState_kt__eqt0x8();
    return derivedStateObservers;
  }
  var derivedStateObservers;
  var androidx_compose_runtime_DerivedSnapshotState_ResultRecord$stable;
  function DerivedState() {
  }
  function derivedStateObservers_0() {
    _init_properties_DerivedState_kt__eqt0x8();
    var tmp0_elvis_lhs = get_derivedStateObservers().bo();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'androidx.compose.runtime.collection.MutableVector' call
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp$ret$0 = Array(0);
      // Inline function 'kotlin.also' call
      var this_0 = new MutableVector(tmp$ret$0, 0);
      get_derivedStateObservers().l1o(this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  var properties_initialized_DerivedState_kt_scch8q;
  function _init_properties_DerivedState_kt__eqt0x8() {
    if (!properties_initialized_DerivedState_kt_scch8q) {
      properties_initialized_DerivedState_kt_scch8q = true;
      calculationBlockNestedLevel = new SnapshotThreadLocal();
      derivedStateObservers = new SnapshotThreadLocal();
      androidx_compose_runtime_DerivedSnapshotState_ResultRecord$stable = 8;
    }
  }
  function get_InternalDisposableEffectScope() {
    _init_properties_Effects_kt__be5lps();
    return InternalDisposableEffectScope;
  }
  var InternalDisposableEffectScope;
  var androidx_compose_runtime_DisposableEffectScope$stable;
  var androidx_compose_runtime_LaunchedEffectImpl$stable;
  var androidx_compose_runtime_CompositionScopedCoroutineScopeCanceller$stable;
  var androidx_compose_runtime_RememberedCoroutineScope$stable;
  function DisposableEffectScope() {
  }
  function DisposableEffect(key1, effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1371986847, 'C(DisposableEffect)P(1)149@6436L47:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-1371986847, $changed, -1, 'androidx.compose.runtime.DisposableEffect (Effects.kt:148)');
    }
    sourceInformationMarkerStart($composer_0, 1176211319, 'CC(remember):Effects.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.z16(key1);
    // Inline function 'kotlin.let' call
    var it = $composer_0.y1h();
    var tmp;
    if (invalid || it === Companion_getInstance().f1a_1) {
      var value = new DisposableEffectImpl(effect);
      $composer_0.j1i(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
  }
  function LaunchedEffect(key1, block, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1179185413, 'C(LaunchedEffect)P(1)318@14464L58:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(1179185413, $changed, -1, 'androidx.compose.runtime.LaunchedEffect (Effects.kt:316)');
    }
    var applyContext = $composer_0.l1g();
    sourceInformationMarkerStart($composer_0, 2064968948, 'CC(remember):Effects.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.z16(key1);
    // Inline function 'kotlin.let' call
    var it = $composer_0.y1h();
    var tmp;
    if (invalid || it === Companion_getInstance().f1a_1) {
      var value = new LaunchedEffectImpl(applyContext, block);
      $composer_0.j1i(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
  }
  function DisposableEffectImpl(effect) {
    this.m1o_1 = effect;
    this.n1o_1 = null;
  }
  protoOf(DisposableEffectImpl).o1o = function () {
    this.n1o_1 = this.m1o_1(get_InternalDisposableEffectScope());
  };
  protoOf(DisposableEffectImpl).p1o = function () {
    var tmp0_safe_receiver = this.n1o_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.pm();
    }
    this.n1o_1 = null;
  };
  protoOf(DisposableEffectImpl).q1o = function () {
  };
  function LaunchedEffectImpl(parentCoroutineContext, task) {
    this.r1o_1 = task;
    this.s1o_1 = CoroutineScope(parentCoroutineContext);
    this.t1o_1 = null;
  }
  protoOf(LaunchedEffectImpl).o1o = function () {
    var tmp0_safe_receiver = this.t1o_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      cancel(tmp0_safe_receiver, 'Old job was still running!');
    }
    this.t1o_1 = launch(this.s1o_1, VOID, VOID, this.r1o_1);
  };
  protoOf(LaunchedEffectImpl).p1o = function () {
    var tmp0_safe_receiver = this.t1o_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.ak(new LeftCompositionCancellationException());
    }
    this.t1o_1 = null;
  };
  protoOf(LaunchedEffectImpl).q1o = function () {
    var tmp0_safe_receiver = this.t1o_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.ak(new LeftCompositionCancellationException());
    }
    this.t1o_1 = null;
  };
  function LeftCompositionCancellationException() {
    PlatformOptimizedCancellationException.call(this, 'The coroutine scope left the composition');
    captureStack(this, LeftCompositionCancellationException);
  }
  function LaunchedEffect_0(key1, key2, block, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 590241125, 'C(LaunchedEffect)P(1,2)337@15458L64:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(590241125, $changed, -1, 'androidx.compose.runtime.LaunchedEffect (Effects.kt:335)');
    }
    var applyContext = $composer_0.l1g();
    sourceInformationMarkerStart($composer_0, 2065000762, 'CC(remember):Effects.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!($composer_0.z16(key1) | $composer_0.z16(key2));
    // Inline function 'kotlin.let' call
    var it = $composer_0.y1h();
    var tmp;
    if (invalid || it === Companion_getInstance().f1a_1) {
      var value = new LaunchedEffectImpl(applyContext, block);
      $composer_0.j1i(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
  }
  function DisposableEffect_0(keys, effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1307627122, 'C(DisposableEffect)P(1)260@12112L48:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-1307627122, $changed, -1, 'androidx.compose.runtime.DisposableEffect (Effects.kt:259)');
    }
    // Inline function 'androidx.compose.runtime.remember' call
    var keys_0 = keys.slice();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, -568225417, 'CC(remember)P(1):Composables.kt#9igjgp');
    var invalid = false;
    var inductionVariable = 0;
    var last = keys_0.length;
    while (inductionVariable < last) {
      var key = keys_0[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      invalid = !!(invalid | $composer_1.z16(key));
    }
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_0 = invalid;
    // Inline function 'kotlin.let' call
    var it = $composer_1.y1h();
    var tmp;
    if (invalid_0 || it === Companion_getInstance().f1a_1) {
      var value = new DisposableEffectImpl(effect);
      $composer_1.j1i(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    sourceInformationMarkerEnd($composer_1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
  }
  function DisposableEffect_1(key1, key2, effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1429097729, 'C(DisposableEffect)P(1,2)186@8313L53:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(1429097729, $changed, -1, 'androidx.compose.runtime.DisposableEffect (Effects.kt:185)');
    }
    sourceInformationMarkerStart($composer_0, 1176271389, 'CC(remember):Effects.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!($composer_0.z16(key1) | $composer_0.z16(key2));
    // Inline function 'kotlin.let' call
    var it = $composer_0.y1h();
    var tmp;
    if (invalid || it === Companion_getInstance().f1a_1) {
      var value = new DisposableEffectImpl(effect);
      $composer_0.j1i(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
  }
  var properties_initialized_Effects_kt_cj8kem;
  function _init_properties_Effects_kt__be5lps() {
    if (!properties_initialized_Effects_kt_cj8kem) {
      properties_initialized_Effects_kt_cj8kem = true;
      InternalDisposableEffectScope = new DisposableEffectScope();
      androidx_compose_runtime_DisposableEffectScope$stable = 0;
      androidx_compose_runtime_LaunchedEffectImpl$stable = 8;
      androidx_compose_runtime_CompositionScopedCoroutineScopeCanceller$stable = 8;
      androidx_compose_runtime_RememberedCoroutineScope$stable = 8;
    }
  }
  var androidx_compose_runtime_JoinedKey$stable;
  function hashCodeOf($this, value) {
    var tmp;
    if (value instanceof Enum) {
      tmp = value.p2_1;
    } else {
      var tmp1_elvis_lhs = value == null ? null : hashCode(value);
      tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    }
    return tmp;
  }
  function JoinedKey(left, right) {
    this.u1o_1 = left;
    this.v1o_1 = right;
  }
  protoOf(JoinedKey).hashCode = function () {
    return imul(hashCodeOf(this, this.u1o_1), 31) + hashCodeOf(this, this.v1o_1) | 0;
  };
  protoOf(JoinedKey).toString = function () {
    return 'JoinedKey(left=' + toString_0(this.u1o_1) + ', right=' + toString_0(this.v1o_1) + ')';
  };
  protoOf(JoinedKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof JoinedKey))
      return false;
    var tmp0_other_with_cast = other instanceof JoinedKey ? other : THROW_CCE();
    if (!equals(this.u1o_1, tmp0_other_with_cast.u1o_1))
      return false;
    if (!equals(this.v1o_1, tmp0_other_with_cast.v1o_1))
      return false;
    return true;
  };
  var androidx_compose_runtime_Latch$stable;
  function Key() {
  }
  var Key_instance_0;
  function Key_getInstance() {
    return Key_instance_0;
  }
  function MonotonicFrameClock() {
  }
  function get_monotonicFrameClock(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.i9(Key_instance_0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'A MonotonicFrameClock is not available in this CoroutineContext. Callers should supply an appropriate MonotonicFrameClock using withContext.';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  var androidx_compose_runtime_OpaqueKey$stable;
  function OpaqueKey(key) {
    this.w1o_1 = key;
  }
  protoOf(OpaqueKey).toString = function () {
    return 'OpaqueKey(key=' + this.w1o_1 + ')';
  };
  protoOf(OpaqueKey).hashCode = function () {
    return getStringHashCode(this.w1o_1);
  };
  protoOf(OpaqueKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OpaqueKey))
      return false;
    var tmp0_other_with_cast = other instanceof OpaqueKey ? other : THROW_CCE();
    if (!(this.w1o_1 === tmp0_other_with_cast.w1o_1))
      return false;
    return true;
  };
  var androidx_compose_runtime_PausedCompositionImpl$stable;
  var androidx_compose_runtime_RecordingApplier$stable;
  var androidx_compose_runtime_PausableMonotonicFrameClock$stable;
  function throwIllegalStateException(message) {
    throw IllegalStateException_init_$Create$(message);
  }
  function throwIllegalArgumentException(message) {
    throw IllegalArgumentException_init_$Create$(message);
  }
  function produceState(initialValue, producer, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 10454275, 'C(produceState)75@2894L41,76@2961L62,76@2940L83:ProduceState.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(10454275, $changed, -1, 'androidx.compose.runtime.produceState (ProduceState.kt:74)');
    }
    sourceInformationMarkerStart($composer_0, 2142999697, 'CC(remember):ProduceState.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.y1h();
    var tmp;
    if (false || it === Companion_getInstance().f1a_1) {
      var value = mutableStateOf(initialValue);
      $composer_0.j1i(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var result = tmp1_group;
    sourceInformationMarkerStart($composer_0, 2143001862, 'CC(remember):ProduceState.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.m1h(producer);
    // Inline function 'kotlin.let' call
    var it_0 = $composer_0.y1h();
    var tmp_1;
    if (invalid || it_0 === Companion_getInstance().f1a_1) {
      var value_0 = produceState$slambda_0(producer, result, null);
      $composer_0.j1i(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp2_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    LaunchedEffect(Unit_instance, tmp2_group, $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return result;
  }
  function ProduceStateScope() {
  }
  function $awaitDisposeCOROUTINE$(_this__u8e3s4, onDispose, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g1p_1 = _this__u8e3s4;
    this.h1p_1 = onDispose;
  }
  protoOf($awaitDisposeCOROUTINE$).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 5;
            this.v8_1 = 1;
            continue $sm;
          case 1:
            this.w8_1 = 4;
            this.v8_1 = 2;
            var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
            cancellable.om();
            suspendResult = returnIfSuspended(cancellable.sk(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.i1p_1 = suspendResult;
            this.w8_1 = 5;
            this.v8_1 = 3;
            continue $sm;
          case 3:
            this.w8_1 = 5;
            this.h1p_1();
            return Unit_instance;
          case 4:
            this.w8_1 = 5;
            var t = this.y8_1;
            this.h1p_1();
            throw t;
          case 5:
            throw this.y8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.w8_1 === 5) {
          throw e;
        } else {
          this.v8_1 = this.w8_1;
          this.y8_1 = e;
        }
      }
     while (true);
  };
  function ProduceStateScopeImpl(state, coroutineContext) {
    this.j1p_1 = state;
    this.k1p_1 = coroutineContext;
  }
  protoOf(ProduceStateScopeImpl).ui = function () {
    return this.k1p_1;
  };
  protoOf(ProduceStateScopeImpl).x1o = function (onDispose, $completion) {
    var tmp = new $awaitDisposeCOROUTINE$(this, onDispose, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(ProduceStateScopeImpl).ss = function (_set____db54di) {
    this.j1p_1.ss(_set____db54di);
  };
  protoOf(ProduceStateScopeImpl).e2 = function () {
    return this.j1p_1.e2();
  };
  function produceState$slambda($producer, $result, resultContinuation) {
    this.t1p_1 = $producer;
    this.u1p_1 = $result;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(produceState$slambda).w1p = function ($this$LaunchedEffect, $completion) {
    var tmp = this.x1p($this$LaunchedEffect, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(produceState$slambda).p9 = function (p1, $completion) {
    return this.w1p((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(produceState$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 2;
            this.v8_1 = 1;
            suspendResult = this.t1p_1(new ProduceStateScopeImpl(this.u1p_1, this.v1p_1.ui()), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.y8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.w8_1 === 2) {
          throw e;
        } else {
          this.v8_1 = this.w8_1;
          this.y8_1 = e;
        }
      }
     while (true);
  };
  protoOf(produceState$slambda).x1p = function ($this$LaunchedEffect, completion) {
    var i = new produceState$slambda(this.t1p_1, this.u1p_1, completion);
    i.v1p_1 = $this$LaunchedEffect;
    return i;
  };
  function produceState$slambda_0($producer, $result, resultContinuation) {
    var i = new produceState$slambda($producer, $result, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.w1p($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  var callbackLock;
  var androidx_compose_runtime_RecomposeScopeImpl$stable;
  function _set_rereading__pnqtpo($this, value) {
    if (value) {
      $this.e14_1 = $this.e14_1 | 32;
    } else {
      $this.e14_1 = $this.e14_1 & -33;
    }
  }
  function _get_rereading__g2iruw($this) {
    return !(($this.e14_1 & 32) === 0);
  }
  function _set_skipped__p8q2c5($this, value) {
    if (value) {
      $this.e14_1 = $this.e14_1 | 16;
    } else {
      $this.e14_1 = $this.e14_1 & -17;
    }
  }
  function checkDerivedStateChanged($this, _this__u8e3s4, dependencies) {
    if (!isInterface(_this__u8e3s4, DerivedState))
      THROW_CCE();
    var tmp0_elvis_lhs = _this__u8e3s4.h1o();
    var policy = tmp0_elvis_lhs == null ? structuralEqualityPolicy() : tmp0_elvis_lhs;
    return !policy.y1p(_this__u8e3s4.c1n().e1n(), dependencies.h2(_this__u8e3s4));
  }
  function Companion_1() {
  }
  protoOf(Companion_1).m1k = function (slots, anchors, newOwner) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!anchors.r()) {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var inductionVariable = 0;
      var last = anchors.j() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = anchors.p(index);
          var tmp = slots.z1p(item, 0);
          var recomposeScope = tmp instanceof RecomposeScopeImpl ? tmp : null;
          if (recomposeScope == null)
            null;
          else {
            recomposeScope.a1q(newOwner);
          }
        }
         while (inductionVariable <= last);
    }
  };
  protoOf(Companion_1).n1k = function (slots, anchors) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!anchors.r()) {
      var tmp$ret$2;
      $l$block: {
        // Inline function 'androidx.compose.runtime.snapshots.fastAny' call
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        var inductionVariable = 0;
        var last = anchors.j() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = anchors.p(index);
            var tmp_0;
            if (slots.b1k(item)) {
              var tmp_1 = slots.b1q(slots.i1d(item), 0);
              tmp_0 = tmp_1 instanceof RecomposeScopeImpl;
            } else {
              tmp_0 = false;
            }
            if (tmp_0) {
              tmp$ret$2 = true;
              break $l$block;
            }
          }
           while (inductionVariable <= last);
        tmp$ret$2 = false;
      }
      tmp = tmp$ret$2;
    } else {
      tmp = false;
    }
    return tmp;
  };
  var Companion_instance_2;
  function Companion_getInstance_1() {
    return Companion_instance_2;
  }
  function RecomposeScopeImpl$end$lambda(this$0, $token, $instances) {
    return function (composition) {
      var tmp;
      var tmp_0;
      if (this$0.j14_1 === $token && $instances.equals(this$0.k14_1)) {
        tmp_0 = composition instanceof CompositionImpl;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        // Inline function 'androidx.collection.MutableObjectIntMap.removeIf' call
        var this_0 = $instances;
        $l$block: {
          // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
          var m = this_0.lx_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.f3(this_1.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                      var index = (i << 3) + j | 0;
                      var tmp_1 = this_0.mx_1[index];
                      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                      var shouldRemove = !(this_0.nx_1[index] === $token);
                      if (shouldRemove) {
                        composition.s1n(tmp0, this$0);
                        if (isInterface(tmp0, DerivedState)) {
                          composition.t1n(tmp0);
                          var tmp0_safe_receiver = this$0.l14_1;
                          if (tmp0_safe_receiver == null)
                            null;
                          else
                            tmp0_safe_receiver.m2(tmp0);
                        }
                      }
                      if (shouldRemove) {
                        this_0.xx(index);
                      }
                    }
                    slot = slot.d3(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  break $l$block;
                }
              }
            }
             while (!(i === lastIndex));
        }
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function RecomposeScopeImpl(owner) {
    this.e14_1 = 0;
    this.f14_1 = owner;
    this.g14_1 = null;
    this.h14_1 = null;
    this.i14_1 = null;
    this.j14_1 = 0;
    this.k14_1 = null;
    this.l14_1 = null;
  }
  protoOf(RecomposeScopeImpl).w1j = function () {
    var tmp;
    if (!(this.f14_1 == null)) {
      var tmp0_safe_receiver = this.g14_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w1j();
      tmp = tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(RecomposeScopeImpl).r1n = function () {
    return !(this.h14_1 == null);
  };
  protoOf(RecomposeScopeImpl).t1i = function (value) {
    var tmp = this;
    var tmp_0;
    if (value) {
      tmp_0 = this.e14_1 | 1;
    } else {
      tmp_0 = this.e14_1 & -2;
    }
    tmp.e14_1 = tmp_0;
  };
  protoOf(RecomposeScopeImpl).j1b = function () {
    return !((this.e14_1 & 1) === 0);
  };
  protoOf(RecomposeScopeImpl).u1i = function (value) {
    var tmp = this;
    var tmp_0;
    if (value) {
      tmp_0 = this.e14_1 | 128;
    } else {
      tmp_0 = this.e14_1 & -129;
    }
    tmp.e14_1 = tmp_0;
  };
  protoOf(RecomposeScopeImpl).f1c = function () {
    return !((this.e14_1 & 128) === 0);
  };
  protoOf(RecomposeScopeImpl).r1c = function (value) {
    var tmp = this;
    var tmp_0;
    if (value) {
      tmp_0 = this.e14_1 | 256;
    } else {
      tmp_0 = this.e14_1 & -257;
    }
    tmp.e14_1 = tmp_0;
  };
  protoOf(RecomposeScopeImpl).u1c = function () {
    return !((this.e14_1 & 256) === 0);
  };
  protoOf(RecomposeScopeImpl).s1c = function (value) {
    var tmp = this;
    var tmp_0;
    if (value) {
      tmp_0 = this.e14_1 | 512;
    } else {
      tmp_0 = this.e14_1 & -513;
    }
    tmp.e14_1 = tmp_0;
  };
  protoOf(RecomposeScopeImpl).d1j = function () {
    return !((this.e14_1 & 512) === 0);
  };
  protoOf(RecomposeScopeImpl).v1g = function (value) {
    if (value) {
      this.e14_1 = this.e14_1 | 2;
    } else {
      this.e14_1 = this.e14_1 & -3;
    }
  };
  protoOf(RecomposeScopeImpl).q1n = function () {
    return !((this.e14_1 & 2) === 0);
  };
  protoOf(RecomposeScopeImpl).e1j = function (value) {
    if (value) {
      this.e14_1 = this.e14_1 | 4;
    } else {
      this.e14_1 = this.e14_1 & -5;
    }
  };
  protoOf(RecomposeScopeImpl).w1g = function () {
    return !((this.e14_1 & 4) === 0);
  };
  protoOf(RecomposeScopeImpl).p1c = function (value) {
    if (value) {
      this.e14_1 = this.e14_1 | 8;
    } else {
      this.e14_1 = this.e14_1 & -9;
    }
  };
  protoOf(RecomposeScopeImpl).z1g = function () {
    return !((this.e14_1 & 8) === 0);
  };
  protoOf(RecomposeScopeImpl).g1c = function (composer) {
    var block = this.h14_1;
    var observer = this.i14_1;
    if (!(observer == null) && !(block == null)) {
      observer.c1q(this);
      try {
        block(composer, 1);
      }finally {
        observer.d1q(this);
      }
      return Unit_instance;
    }
    if ((block == null ? null : block(composer, 1)) == null) {
      // Inline function 'kotlin.error' call
      var message = 'Invalid restart scope';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(RecomposeScopeImpl).e1l = function (value) {
    var tmp0_safe_receiver = this.f14_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x1k(this, value);
    return tmp1_elvis_lhs == null ? InvalidationResult_IGNORED_getInstance() : tmp1_elvis_lhs;
  };
  protoOf(RecomposeScopeImpl).y1j = function () {
    var tmp0_safe_receiver = this.f14_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y1k(this);
    }
    this.f14_1 = null;
    this.k14_1 = null;
    this.l14_1 = null;
    var tmp1_safe_receiver = this.i14_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.e1q(this);
    }
  };
  protoOf(RecomposeScopeImpl).a1q = function (owner) {
    this.f14_1 = owner;
  };
  protoOf(RecomposeScopeImpl).p1n = function () {
    var tmp0_safe_receiver = this.f14_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.x1k(this, null);
  };
  protoOf(RecomposeScopeImpl).d1o = function (block) {
    this.h14_1 = block;
  };
  protoOf(RecomposeScopeImpl).o1c = function (value) {
    if (value) {
      this.e14_1 = this.e14_1 | 64;
    } else {
      this.e14_1 = this.e14_1 & -65;
    }
  };
  protoOf(RecomposeScopeImpl).n1c = function () {
    return !((this.e14_1 & 64) === 0);
  };
  protoOf(RecomposeScopeImpl).f1j = function () {
    return !((this.e14_1 & 16) === 0);
  };
  protoOf(RecomposeScopeImpl).q1c = function (token) {
    this.j14_1 = token;
    _set_skipped__p8q2c5(this, false);
  };
  protoOf(RecomposeScopeImpl).x1i = function () {
    if (!this.f1c()) {
      _set_skipped__p8q2c5(this, true);
    }
  };
  protoOf(RecomposeScopeImpl).z1m = function (instance) {
    if (_get_rereading__g2iruw(this))
      return false;
    var tmp0_elvis_lhs = this.k14_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new MutableObjectIntMap();
      this.k14_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var trackedInstances = tmp;
    var token = trackedInstances.wx(instance, this.j14_1, -1);
    if (token === this.j14_1) {
      return true;
    }
    return false;
  };
  protoOf(RecomposeScopeImpl).f1n = function (instance, value) {
    var tmp0_elvis_lhs = this.l14_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new MutableScatterMap();
      this.l14_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var trackedDependencies = tmp;
    trackedDependencies.mz(instance, value);
  };
  protoOf(RecomposeScopeImpl).d1l = function () {
    return !(this.l14_1 == null);
  };
  protoOf(RecomposeScopeImpl).m14 = function (instances) {
    if (instances == null)
      return true;
    var tmp0_elvis_lhs = this.l14_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return true;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var trackedDependencies = tmp;
    var tmp_0;
    if (!(instances == null) ? isInterface(instances, DerivedState) : false) {
      tmp_0 = checkDerivedStateChanged(this, instances, trackedDependencies);
    } else {
      if (instances instanceof ScatterSet) {
        var tmp_1;
        if (instances.cy()) {
          var tmp$ret$6;
          $l$block: {
            // Inline function 'androidx.collection.ScatterSet.any' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.collection.ScatterSet.forEach' call
            // Inline function 'kotlin.contracts.contract' call
            var elements = instances.pz_1;
            $l$block_0: {
              // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
              // Inline function 'kotlin.contracts.contract' call
              var m = instances.oz_1;
              var lastIndex = m.length - 2 | 0;
              var inductionVariable = 0;
              if (inductionVariable <= lastIndex)
                do {
                  var i = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var slot = m[i];
                  // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                  var this_0 = slot;
                  if (!this_0.f3(this_0.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                    var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                    var inductionVariable_0 = 0;
                    if (inductionVariable_0 < bitCount)
                      do {
                        var j = inductionVariable_0;
                        inductionVariable_0 = inductionVariable_0 + 1 | 0;
                        // Inline function 'androidx.collection.isFull' call
                        if (slot.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                          var index = (i << 3) + j | 0;
                          var tmp_2 = elements[index];
                          var it = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
                          var tmp_3;
                          if (!(!(it == null) ? isInterface(it, DerivedState) : false)) {
                            tmp_3 = true;
                          } else {
                            tmp_3 = checkDerivedStateChanged(this, it, trackedDependencies);
                          }
                          if (tmp_3) {
                            tmp$ret$6 = true;
                            break $l$block;
                          }
                        }
                        slot = slot.d3(8);
                      }
                       while (inductionVariable_0 < bitCount);
                    if (!(bitCount === 8)) {
                      break $l$block_0;
                    }
                  }
                }
                 while (!(i === lastIndex));
            }
            tmp$ret$6 = false;
          }
          tmp_1 = tmp$ret$6;
        } else {
          tmp_1 = false;
        }
        tmp_0 = tmp_1;
      } else {
        tmp_0 = true;
      }
    }
    return tmp_0;
  };
  protoOf(RecomposeScopeImpl).e1c = function () {
    var tmp0_safe_receiver = this.f14_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp0_safe_receiver_0 = this.k14_1;
      var tmp;
      if (tmp0_safe_receiver_0 == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        _set_rereading__pnqtpo(this, true);
        try {
          // Inline function 'androidx.collection.ObjectIntMap.forEach' call
          var k = tmp0_safe_receiver_0.mx_1;
          var v = tmp0_safe_receiver_0.nx_1;
          $l$block: {
            // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
            var m = tmp0_safe_receiver_0.lx_1;
            var lastIndex = m.length - 2 | 0;
            var inductionVariable = 0;
            if (inductionVariable <= lastIndex)
              do {
                var i = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var slot = m[i];
                // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                var this_0 = slot;
                if (!this_0.f3(this_0.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                  var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                  var inductionVariable_0 = 0;
                  if (inductionVariable_0 < bitCount)
                    do {
                      var j = inductionVariable_0;
                      inductionVariable_0 = inductionVariable_0 + 1 | 0;
                      // Inline function 'androidx.collection.isFull' call
                      if (slot.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                        var index = (i << 3) + j | 0;
                        var tmp_0 = k[index];
                        var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                        v[index];
                        tmp0_safe_receiver.z1k(tmp0);
                      }
                      slot = slot.d3(8);
                    }
                     while (inductionVariable_0 < bitCount);
                  if (!(bitCount === 8)) {
                    break $l$block;
                  }
                }
              }
               while (!(i === lastIndex));
          }
        }finally {
          _set_rereading__pnqtpo(this, false);
        }
        tmp = Unit_instance;
      }
    }
  };
  protoOf(RecomposeScopeImpl).a1j = function (token) {
    var tmp0_safe_receiver = this.k14_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp_0;
      var tmp_1;
      if (!this.f1j()) {
        var tmp$ret$3;
        $l$block: {
          // Inline function 'androidx.collection.ObjectIntMap.any' call
          // Inline function 'androidx.collection.ObjectIntMap.forEach' call
          var k = tmp0_safe_receiver.mx_1;
          var v = tmp0_safe_receiver.nx_1;
          $l$block_0: {
            // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
            var m = tmp0_safe_receiver.lx_1;
            var lastIndex = m.length - 2 | 0;
            var inductionVariable = 0;
            if (inductionVariable <= lastIndex)
              do {
                var i = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var slot = m[i];
                // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                var this_0 = slot;
                if (!this_0.f3(this_0.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                  var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                  var inductionVariable_0 = 0;
                  if (inductionVariable_0 < bitCount)
                    do {
                      var j = inductionVariable_0;
                      inductionVariable_0 = inductionVariable_0 + 1 | 0;
                      // Inline function 'androidx.collection.isFull' call
                      if (slot.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                        var index = (i << 3) + j | 0;
                        var tmp_2 = k[index];
                        (tmp_2 == null ? true : !(tmp_2 == null)) || THROW_CCE();
                        if (!(v[index] === token)) {
                          tmp$ret$3 = true;
                          break $l$block;
                        }
                      }
                      slot = slot.d3(8);
                    }
                     while (inductionVariable_0 < bitCount);
                  if (!(bitCount === 8)) {
                    break $l$block_0;
                  }
                }
              }
               while (!(i === lastIndex));
          }
          tmp$ret$3 = false;
        }
        tmp_1 = tmp$ret$3;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = RecomposeScopeImpl$end$lambda(this, token, tmp0_safe_receiver);
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  function RecomposeScopeOwner() {
  }
  function updateChangedFlags(flags) {
    _init_properties_RecomposeScopeImpl_kt__t15emj();
    var lowBits = flags & 306783378;
    var highBits = flags & 613566756;
    return flags & -920350135 | (lowBits | highBits >> 1) | lowBits << 1 & highBits;
  }
  var properties_initialized_RecomposeScopeImpl_kt_pxgdx3;
  function _init_properties_RecomposeScopeImpl_kt__t15emj() {
    if (!properties_initialized_RecomposeScopeImpl_kt_pxgdx3) {
      properties_initialized_RecomposeScopeImpl_kt_pxgdx3 = true;
      // Inline function 'androidx.compose.runtime.platform.makeSynchronizedObject' call
      callbackLock = null == null ? new Object() : null;
      androidx_compose_runtime_RecomposeScopeImpl$stable = 8;
    }
  }
  var State_ShutDown_instance;
  var State_ShuttingDown_instance;
  var State_Inactive_instance;
  var State_InactivePendingWork_instance;
  var State_Idle_instance;
  var State_PendingWork_instance;
  var State_entriesInitialized;
  function State_initEntries() {
    if (State_entriesInitialized)
      return Unit_instance;
    State_entriesInitialized = true;
    State_ShutDown_instance = new State('ShutDown', 0);
    State_ShuttingDown_instance = new State('ShuttingDown', 1);
    State_Inactive_instance = new State('Inactive', 2);
    State_InactivePendingWork_instance = new State('InactivePendingWork', 3);
    State_Idle_instance = new State('Idle', 4);
    State_PendingWork_instance = new State('PendingWork', 5);
  }
  function addRunning($this, info) {
    $l$loop: while (true) {
      var old = $this.f1q_1.e2();
      var new_0 = old.e(info);
      if (old === new_0 || $this.f1q_1.ts(old, new_0))
        break $l$loop;
    }
  }
  function removeRunning($this, info) {
    $l$loop: while (true) {
      var old = $this.f1q_1.e2();
      var new_0 = old.v1(info);
      if (old === new_0 || $this.f1q_1.ts(old, new_0))
        break $l$loop;
    }
  }
  function invoke$clearRecompositionState(this$0, toRecompose, toInsert, toApply, toLateApply, toComplete, modifiedValues, alreadyComposed) {
    // Inline function 'androidx.compose.runtime.platform.synchronized' call
    this$0.j1q_1;
    toRecompose.y1();
    toInsert.y1();
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var inductionVariable = 0;
    var last = toApply.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = toApply.p(index);
        item.u1m();
        recordFailedCompositionLocked(this$0, item);
      }
       while (inductionVariable <= last);
    toApply.y1();
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var elements = toLateApply.pz_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = toLateApply.oz_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 <= lastIndex)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.f3(this_0.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_1 = 0;
            if (inductionVariable_1 < bitCount)
              do {
                var j = inductionVariable_1;
                inductionVariable_1 = inductionVariable_1 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                  var index_0 = (i << 3) + j | 0;
                  var tmp = elements[index_0];
                  var it = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  it.u1m();
                  recordFailedCompositionLocked(this$0, it);
                }
                slot = slot.d3(8);
              }
               while (inductionVariable_1 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    toLateApply.y1();
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var elements_0 = toComplete.pz_1;
    $l$block_0: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m_0 = toComplete.oz_1;
      var lastIndex_0 = m_0.length - 2 | 0;
      var inductionVariable_2 = 0;
      if (inductionVariable_2 <= lastIndex_0)
        do {
          var i_0 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var slot_0 = m_0[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_1 = slot_0;
          if (!this_1.f3(this_1.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
            var inductionVariable_3 = 0;
            if (inductionVariable_3 < bitCount_0)
              do {
                var j_0 = inductionVariable_3;
                inductionVariable_3 = inductionVariable_3 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot_0.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                  var index_1 = (i_0 << 3) + j_0 | 0;
                  var tmp_0 = elements_0[index_1];
                  ((tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE()).m1n();
                }
                slot_0 = slot_0.d3(8);
              }
               while (inductionVariable_3 < bitCount_0);
            if (!(bitCount_0 === 8)) {
              break $l$block_0;
            }
          }
        }
         while (!(i_0 === lastIndex_0));
    }
    toComplete.y1();
    modifiedValues.y1();
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var elements_1 = alreadyComposed.pz_1;
    $l$block_1: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m_1 = alreadyComposed.oz_1;
      var lastIndex_1 = m_1.length - 2 | 0;
      var inductionVariable_4 = 0;
      if (inductionVariable_4 <= lastIndex_1)
        do {
          var i_1 = inductionVariable_4;
          inductionVariable_4 = inductionVariable_4 + 1 | 0;
          var slot_1 = m_1[i_1];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_2 = slot_1;
          if (!this_2.f3(this_2.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount_1 = 8 - (~(i_1 - lastIndex_1 | 0) >>> 31 | 0) | 0;
            var inductionVariable_5 = 0;
            if (inductionVariable_5 < bitCount_1)
              do {
                var j_1 = inductionVariable_5;
                inductionVariable_5 = inductionVariable_5 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot_1.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                  var index_2 = (i_1 << 3) + j_1 | 0;
                  var tmp_1 = elements_1[index_2];
                  var it_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                  it_0.u1m();
                  recordFailedCompositionLocked(this$0, it_0);
                }
                slot_1 = slot_1.d3(8);
              }
               while (inductionVariable_5 < bitCount_1);
            if (!(bitCount_1 === 8)) {
              break $l$block_1;
            }
          }
        }
         while (!(i_1 === lastIndex_1));
    }
    alreadyComposed.y1();
  }
  function invoke$fillToInsert(toInsert, this$0) {
    toInsert.y1();
    // Inline function 'androidx.compose.runtime.platform.synchronized' call
    this$0.j1q_1;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var this_0 = this$0.r1q_1;
    var inductionVariable = 0;
    var last = this_0.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.p(index);
        // Inline function 'kotlin.collections.plusAssign' call
        toInsert.e(item);
      }
       while (inductionVariable <= last);
    this$0.r1q_1.y1();
  }
  function Recomposer$runRecomposeAndApplyChanges$slambda$lambda(this$0, $toRecompose, $modifiedValues, $alreadyComposed, $toInsert, $toApply, $modifiedValuesSet, $toLateApply, $toComplete) {
    return function (frameTime) {
      var tmp;
      if (_get_hasBroadcastFrameClockAwaiters__y6inql(this$0)) {
        var tmp0 = 'Recomposer:animation';
        $l$block: {
          // Inline function 'androidx.compose.runtime.internal.trace' call
          var token = Trace_instance.u1d(tmp0);
          try {
            this$0.i1q_1.v13(frameTime);
            Companion_instance_11.k1r();
            break $l$block;
          }finally {
            Trace_instance.f1e(token);
          }
        }
        tmp = Unit_instance;
      }
      var tmp0_0 = 'Recomposer:recompose';
      $l$block_2: {
        // Inline function 'androidx.compose.runtime.internal.trace' call
        var token_0 = Trace_instance.u1d(tmp0_0);
        try {
          recordComposerModifications(this$0);
          // Inline function 'androidx.compose.runtime.platform.synchronized' call
          this$0.j1q_1;
          // Inline function 'androidx.compose.runtime.collection.MutableVector.forEach' call
          var this_0 = this$0.p1q_1;
          var i = 0;
          var tmp_0 = this_0.b1e_1;
          var content = isArray(tmp_0) ? tmp_0 : THROW_CCE();
          var size = this_0.d1e_1;
          while (i < size) {
            var it = content[i];
            // Inline function 'kotlin.collections.plusAssign' call
            $toRecompose.e(it);
            i = i + 1 | 0;
          }
          this$0.p1q_1.y1();
          $modifiedValues.y1();
          $alreadyComposed.y1();
          $l$loop: while (true) {
            var tmp_1;
            // Inline function 'kotlin.collections.isNotEmpty' call
            if (!$toRecompose.r()) {
              tmp_1 = true;
            } else {
              // Inline function 'kotlin.collections.isNotEmpty' call
              tmp_1 = !$toInsert.r();
            }
            if (!tmp_1) {
              break $l$loop;
            }
            try {
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_1 = $toRecompose;
              var inductionVariable = 0;
              var last = this_1.j() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = this_1.p(index);
                  var tmp0_safe_receiver = performRecompose(this$0, item, $modifiedValues);
                  if (tmp0_safe_receiver == null)
                    null;
                  else {
                    // Inline function 'kotlin.let' call
                    // Inline function 'kotlin.collections.plusAssign' call
                    $toApply.e(tmp0_safe_receiver);
                  }
                  $alreadyComposed.e(item);
                }
                 while (inductionVariable <= last);
            } catch ($p) {
              if ($p instanceof Error) {
                var e = $p;
                processCompositionError$default(this$0, e, VOID, true);
                invoke$clearRecompositionState(this$0, $toRecompose, $toInsert, $toApply, $toLateApply, $toComplete, $modifiedValues, $alreadyComposed);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toRecompose.y1();
            }
            var tmp_2;
            if ($modifiedValues.cy()) {
              tmp_2 = true;
            } else {
              // Inline function 'androidx.compose.runtime.collection.MutableVector.isNotEmpty' call
              tmp_2 = !(this$0.p1q_1.d1e_1 === 0);
            }
            if (tmp_2) {
              // Inline function 'androidx.compose.runtime.platform.synchronized' call
              this$0.j1q_1;
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_2 = _get_knownCompositions__y8veaj(this$0);
              var inductionVariable_0 = 0;
              var last_0 = this_2.j() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = this_2.p(index_0);
                  if (!$alreadyComposed.o(item_0) && item_0.x1m($modifiedValuesSet)) {
                    // Inline function 'kotlin.collections.plusAssign' call
                    $toRecompose.e(item_0);
                  }
                }
                 while (inductionVariable_0 <= last_0);
              // Inline function 'androidx.compose.runtime.collection.MutableVector.removeIf' call
              var this_3 = this$0.p1q_1;
              var gap = 0;
              var size_0 = this_3.d1e_1;
              var inductionVariable_1 = 0;
              if (inductionVariable_1 < size_0)
                $l$loop_0: do {
                  var i_0 = inductionVariable_1;
                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                  var tmp_3 = this_3.b1e_1[i_0];
                  var value = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
                  var tmp_4;
                  if (!$alreadyComposed.o(value) && !$toRecompose.o(value)) {
                    // Inline function 'kotlin.collections.plusAssign' call
                    $toRecompose.e(value);
                    tmp_4 = true;
                  } else {
                    tmp_4 = false;
                  }
                  if (tmp_4) {
                    gap = gap + 1 | 0;
                    continue $l$loop_0;
                  }
                  if (gap > 0) {
                    this_3.b1e_1[i_0 - gap | 0] = this_3.b1e_1[i_0];
                  }
                }
                 while (inductionVariable_1 < size_0);
              fill_0(this_3.b1e_1, null, size_0 - gap | 0, size_0);
              this_3.l1r(size_0 - gap | 0);
            }
            if ($toRecompose.r()) {
              try {
                invoke$fillToInsert($toInsert, this$0);
                $l$loop_1: while (true) {
                  // Inline function 'kotlin.collections.isNotEmpty' call
                  if (!!$toInsert.r()) {
                    break $l$loop_1;
                  }
                  $toLateApply.yy(performInsertValues(this$0, $toInsert, $modifiedValues));
                  invoke$fillToInsert($toInsert, this$0);
                }
              } catch ($p) {
                if ($p instanceof Error) {
                  var e_0 = $p;
                  processCompositionError$default(this$0, e_0, VOID, true);
                  invoke$clearRecompositionState(this$0, $toRecompose, $toInsert, $toApply, $toLateApply, $toComplete, $modifiedValues, $alreadyComposed);
                  return Unit_instance;
                } else {
                  throw $p;
                }
              }
            }
          }
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!$toApply.r()) {
            var _unary__edvuaz = this$0.h1q_1;
            this$0.h1q_1 = _unary__edvuaz.z2();
            try {
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_4 = $toApply;
              var inductionVariable_2 = 0;
              var last_1 = this_4.j() - 1 | 0;
              if (inductionVariable_2 <= last_1)
                do {
                  var index_1 = inductionVariable_2;
                  inductionVariable_2 = inductionVariable_2 + 1 | 0;
                  var item_1 = this_4.p(index_1);
                  $toComplete.e(item_1);
                }
                 while (inductionVariable_2 <= last_1);
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_5 = $toApply;
              var inductionVariable_3 = 0;
              var last_2 = this_5.j() - 1 | 0;
              if (inductionVariable_3 <= last_2)
                do {
                  var index_2 = inductionVariable_3;
                  inductionVariable_3 = inductionVariable_3 + 1 | 0;
                  var item_2 = this_5.p(index_2);
                  item_2.k1n();
                }
                 while (inductionVariable_3 <= last_2);
            } catch ($p) {
              if ($p instanceof Error) {
                var e_1 = $p;
                processCompositionError$default(this$0, e_1);
                invoke$clearRecompositionState(this$0, $toRecompose, $toInsert, $toApply, $toLateApply, $toComplete, $modifiedValues, $alreadyComposed);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toApply.y1();
            }
          }
          if ($toLateApply.cy()) {
            try {
              $toComplete.b10($toLateApply);
              // Inline function 'androidx.collection.ScatterSet.forEach' call
              var this_6 = $toLateApply;
              // Inline function 'kotlin.contracts.contract' call
              var elements = this_6.pz_1;
              $l$block_0: {
                // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                // Inline function 'kotlin.contracts.contract' call
                var m = this_6.oz_1;
                var lastIndex = m.length - 2 | 0;
                var inductionVariable_4 = 0;
                if (inductionVariable_4 <= lastIndex)
                  do {
                    var i_1 = inductionVariable_4;
                    inductionVariable_4 = inductionVariable_4 + 1 | 0;
                    var slot = m[i_1];
                    // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                    var this_7 = slot;
                    if (!this_7.f3(this_7.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                      var bitCount = 8 - (~(i_1 - lastIndex | 0) >>> 31 | 0) | 0;
                      var inductionVariable_5 = 0;
                      if (inductionVariable_5 < bitCount)
                        do {
                          var j = inductionVariable_5;
                          inductionVariable_5 = inductionVariable_5 + 1 | 0;
                          // Inline function 'androidx.collection.isFull' call
                          if (slot.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                            var index_3 = (i_1 << 3) + j | 0;
                            var tmp_5 = elements[index_3];
                            ((tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE()).l1n();
                          }
                          slot = slot.d3(8);
                        }
                         while (inductionVariable_5 < bitCount);
                      if (!(bitCount === 8)) {
                        break $l$block_0;
                      }
                    }
                  }
                   while (!(i_1 === lastIndex));
              }
            } catch ($p) {
              if ($p instanceof Error) {
                var e_2 = $p;
                processCompositionError$default(this$0, e_2);
                invoke$clearRecompositionState(this$0, $toRecompose, $toInsert, $toApply, $toLateApply, $toComplete, $modifiedValues, $alreadyComposed);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toLateApply.y1();
            }
          }
          if ($toComplete.cy()) {
            try {
              // Inline function 'androidx.collection.ScatterSet.forEach' call
              var this_8 = $toComplete;
              // Inline function 'kotlin.contracts.contract' call
              var elements_0 = this_8.pz_1;
              $l$block_1: {
                // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                // Inline function 'kotlin.contracts.contract' call
                var m_0 = this_8.oz_1;
                var lastIndex_0 = m_0.length - 2 | 0;
                var inductionVariable_6 = 0;
                if (inductionVariable_6 <= lastIndex_0)
                  do {
                    var i_2 = inductionVariable_6;
                    inductionVariable_6 = inductionVariable_6 + 1 | 0;
                    var slot_0 = m_0[i_2];
                    // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                    var this_9 = slot_0;
                    if (!this_9.f3(this_9.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                      var bitCount_0 = 8 - (~(i_2 - lastIndex_0 | 0) >>> 31 | 0) | 0;
                      var inductionVariable_7 = 0;
                      if (inductionVariable_7 < bitCount_0)
                        do {
                          var j_0 = inductionVariable_7;
                          inductionVariable_7 = inductionVariable_7 + 1 | 0;
                          // Inline function 'androidx.collection.isFull' call
                          if (slot_0.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                            var index_4 = (i_2 << 3) + j_0 | 0;
                            var tmp_6 = elements_0[index_4];
                            ((tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE()).m1n();
                          }
                          slot_0 = slot_0.d3(8);
                        }
                         while (inductionVariable_7 < bitCount_0);
                      if (!(bitCount_0 === 8)) {
                        break $l$block_1;
                      }
                    }
                  }
                   while (!(i_2 === lastIndex_0));
              }
            } catch ($p) {
              if ($p instanceof Error) {
                var e_3 = $p;
                processCompositionError$default(this$0, e_3);
                invoke$clearRecompositionState(this$0, $toRecompose, $toInsert, $toApply, $toLateApply, $toComplete, $modifiedValues, $alreadyComposed);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toComplete.y1();
            }
          }
          // Inline function 'androidx.compose.runtime.platform.synchronized' call
          this$0.j1q_1;
          deriveStateLocked(this$0);
          Companion_instance_11.m1r();
          $alreadyComposed.y1();
          $modifiedValues.y1();
          this$0.x1q_1 = null;
          break $l$block_2;
        }finally {
          Trace_instance.f1e(token_0);
        }
      }
      return Unit_instance;
    };
  }
  function Recomposer$recompositionRunner$slambda$lambda(this$0) {
    return function (changed, _unused_var__etf5q3) {
      // Inline function 'androidx.compose.runtime.platform.synchronized' call
      this$0.j1q_1;
      var tmp;
      if (this$0.d1r_1.e2().q2(State_Idle_getInstance()) >= 0) {
        var snapshotInvalidations = this$0.o1q_1;
        // Inline function 'androidx.compose.runtime.collection.fastForEach' call
        var tmp_0;
        if (changed instanceof ScatterSetWrapper) {
          // Inline function 'androidx.collection.ScatterSet.forEach' call
          var this_0 = changed.f1l_1;
          // Inline function 'kotlin.contracts.contract' call
          var elements = this_0.pz_1;
          $l$block_0: {
            // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
            // Inline function 'kotlin.contracts.contract' call
            var m = this_0.oz_1;
            var lastIndex = m.length - 2 | 0;
            var inductionVariable = 0;
            if (inductionVariable <= lastIndex)
              do {
                var i = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var slot = m[i];
                // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                var this_1 = slot;
                if (!this_1.f3(this_1.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                  var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                  var inductionVariable_0 = 0;
                  if (inductionVariable_0 < bitCount)
                    do {
                      var j = inductionVariable_0;
                      inductionVariable_0 = inductionVariable_0 + 1 | 0;
                      // Inline function 'androidx.collection.isFull' call
                      if (slot.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                        var index = (i << 3) + j | 0;
                        var tmp_1 = elements[index];
                        var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                        $l$block: {
                          var tmp_2;
                          if (tmp0 instanceof StateObjectImpl) {
                            // Inline function 'androidx.compose.runtime.snapshots.Companion.Composition' call
                            var tmp$ret$4 = _ReaderKind___init__impl__jqeebu(1);
                            tmp_2 = !tmp0.n1r(tmp$ret$4);
                          } else {
                            tmp_2 = false;
                          }
                          if (tmp_2) {
                            break $l$block;
                          }
                          snapshotInvalidations.e(tmp0);
                        }
                      }
                      slot = slot.d3(8);
                    }
                     while (inductionVariable_0 < bitCount);
                  if (!(bitCount === 8)) {
                    break $l$block_0;
                  }
                }
              }
               while (!(i === lastIndex));
          }
          tmp_0 = Unit_instance;
        } else {
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s = changed.g();
          while (_iterator__ex2g4s.h()) {
            var element = _iterator__ex2g4s.i();
            $l$block_1: {
              var tmp_3;
              if (element instanceof StateObjectImpl) {
                // Inline function 'androidx.compose.runtime.snapshots.Companion.Composition' call
                var tmp$ret$9 = _ReaderKind___init__impl__jqeebu(1);
                tmp_3 = !element.n1r(tmp$ret$9);
              } else {
                tmp_3 = false;
              }
              if (tmp_3) {
                break $l$block_1;
              }
              snapshotInvalidations.e(element);
            }
          }
          tmp_0 = Unit_instance;
        }
        tmp = deriveStateLocked(this$0);
      } else {
        tmp = null;
      }
      var tmp0_safe_receiver = tmp;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$15 = _Result___init__impl__xyqfz8(Unit_instance);
        tmp0_safe_receiver.g9(tmp$ret$15);
      }
      return Unit_instance;
    };
  }
  function Recomposer$recompositionRunner$slambda$slambda($block, $parentFrameClock, resultContinuation) {
    this.w1r_1 = $block;
    this.x1r_1 = $parentFrameClock;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$recompositionRunner$slambda$slambda).w1p = function ($this$coroutineScope, $completion) {
    var tmp = this.x1p($this$coroutineScope, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(Recomposer$recompositionRunner$slambda$slambda).p9 = function (p1, $completion) {
    return this.w1p((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$recompositionRunner$slambda$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 2;
            this.v8_1 = 1;
            suspendResult = this.w1r_1(this.y1r_1, this.x1r_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.y8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.w8_1 === 2) {
          throw e;
        } else {
          this.v8_1 = this.w8_1;
          this.y8_1 = e;
        }
      }
     while (true);
  };
  protoOf(Recomposer$recompositionRunner$slambda$slambda).x1p = function ($this$coroutineScope, completion) {
    var i = new Recomposer$recompositionRunner$slambda$slambda(this.w1r_1, this.x1r_1, completion);
    i.y1r_1 = $this$coroutineScope;
    return i;
  };
  function Recomposer$recompositionRunner$slambda$slambda_0($block, $parentFrameClock, resultContinuation) {
    var i = new Recomposer$recompositionRunner$slambda$slambda($block, $parentFrameClock, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.w1p($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function State(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function _get_knownCompositions__y8veaj($this) {
    var tmp0_elvis_lhs = $this.n1q_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      var compositions = $this.m1q_1;
      var newCache = compositions.r() ? emptyList() : ArrayList_init_$Create$_1(compositions);
      $this.n1q_1 = newCache;
      tmp = newCache;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this) {
    return !$this.c1r_1 && $this.i1q_1.u13();
  }
  function _get_hasBroadcastFrameClockAwaiters__y6inql($this) {
    // Inline function 'androidx.compose.runtime.platform.synchronized' call
    $this.j1q_1;
    return _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
  }
  function deriveStateLocked($this) {
    if ($this.d1r_1.e2().q2(State_ShuttingDown_getInstance()) <= 0) {
      clearKnownCompositionsLocked($this);
      $this.o1q_1 = new MutableScatterSet();
      $this.p1q_1.y1();
      $this.q1q_1.y1();
      $this.r1q_1.y1();
      $this.w1q_1 = null;
      var tmp0_safe_receiver = $this.y1q_1;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.fl();
      $this.y1q_1 = null;
      $this.b1r_1 = null;
      return null;
    }
    var tmp;
    if (!($this.b1r_1 == null)) {
      tmp = State_Inactive_getInstance();
    } else {
      if ($this.k1q_1 == null) {
        $this.o1q_1 = new MutableScatterSet();
        $this.p1q_1.y1();
        tmp = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this) ? State_InactivePendingWork_getInstance() : State_Inactive_getInstance();
      } else {
        var tmp_0;
        var tmp_1;
        var tmp_2;
        var tmp_3;
        var tmp_4;
        // Inline function 'androidx.compose.runtime.collection.MutableVector.isNotEmpty' call
        if (!($this.p1q_1.d1e_1 === 0)) {
          tmp_4 = true;
        } else {
          tmp_4 = $this.o1q_1.cy();
        }
        if (tmp_4) {
          tmp_3 = true;
        } else {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_3 = !$this.q1q_1.r();
        }
        if (tmp_3) {
          tmp_2 = true;
        } else {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_2 = !$this.r1q_1.r();
        }
        if (tmp_2) {
          tmp_1 = true;
        } else {
          tmp_1 = $this.z1q_1 > 0;
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
        }
        if (tmp_0) {
          tmp = State_PendingWork_getInstance();
        } else {
          tmp = State_Idle_getInstance();
        }
      }
    }
    var newState = tmp;
    $this.d1r_1.ss(newState);
    var tmp_5;
    if (newState.equals(State_PendingWork_getInstance())) {
      // Inline function 'kotlin.also' call
      var this_0 = $this.y1q_1;
      $this.y1q_1 = null;
      tmp_5 = this_0;
    } else {
      tmp_5 = null;
    }
    return tmp_5;
  }
  function _get_shouldKeepRecomposing__5j79sd($this) {
    var tmp;
    // Inline function 'androidx.compose.runtime.platform.synchronized' call
    $this.j1q_1;
    if (!$this.a1r_1) {
      tmp = true;
    } else {
      var tmp0 = $this.f1r_1.xq();
      var tmp$ret$3;
      $l$block: {
        // Inline function 'kotlin.sequences.any' call
        var _iterator__ex2g4s = tmp0.g();
        while (_iterator__ex2g4s.h()) {
          var element = _iterator__ex2g4s.i();
          if (element.vi()) {
            tmp$ret$3 = true;
            break $l$block;
          }
        }
        tmp$ret$3 = false;
      }
      tmp = tmp$ret$3;
    }
    return tmp;
  }
  function RecomposerInfoImpl($outer) {
    this.z1r_1 = $outer;
  }
  function RecomposerErrorState(recoverable, cause) {
    this.a1s_1 = recoverable;
    this.b1s_1 = cause;
  }
  function recordComposerModifications($this) {
    // Inline function 'androidx.compose.runtime.platform.synchronized' call
    $this.j1q_1;
    if ($this.o1q_1.r())
      return _get_hasFrameWorkLocked__1gtyf7($this);
    // Inline function 'kotlin.also' call
    var this_0 = wrapIntoSet($this.o1q_1);
    $this.o1q_1 = new MutableScatterSet();
    var changes = this_0;
    // Inline function 'androidx.compose.runtime.platform.synchronized' call
    $this.j1q_1;
    var compositions = _get_knownCompositions__y8veaj($this);
    var complete = false;
    try {
      // Inline function 'kotlin.run' call
      $l$block: {
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        var inductionVariable = 0;
        var last = compositions.j() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = compositions.p(index);
            item.v1m(changes);
            if ($this.d1r_1.e2().q2(State_ShuttingDown_getInstance()) <= 0) {
              break $l$block;
            }
          }
           while (inductionVariable <= last);
      }
      // Inline function 'androidx.compose.runtime.platform.synchronized' call
      $this.j1q_1;
      $this.o1q_1 = new MutableScatterSet();
      complete = true;
    }finally {
      if (!complete) {
        // Inline function 'androidx.compose.runtime.platform.synchronized' call
        $this.j1q_1;
        $this.o1q_1.qy(changes);
      }
    }
    // Inline function 'androidx.compose.runtime.platform.synchronized' call
    $this.j1q_1;
    if (!(deriveStateLocked($this) == null)) {
      // Inline function 'kotlin.error' call
      var message = 'called outside of runRecomposeAndApplyChanges';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return _get_hasFrameWorkLocked__1gtyf7($this);
  }
  function registerRunnerJob($this, callingJob) {
    // Inline function 'androidx.compose.runtime.platform.synchronized' call
    $this.j1q_1;
    var tmp0_safe_receiver = $this.l1q_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
    if ($this.d1r_1.e2().q2(State_ShuttingDown_getInstance()) <= 0) {
      // Inline function 'kotlin.error' call
      var message = 'Recomposer shut down';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (!($this.k1q_1 == null)) {
      // Inline function 'kotlin.error' call
      var message_0 = 'Recomposer already running';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    $this.k1q_1 = callingJob;
    deriveStateLocked($this);
  }
  function processCompositionError($this, e, failedInitialComposition, recoverable) {
    var tmp;
    if (Companion_getInstance_2().g1q_1.bo()) {
      tmp = !(e instanceof ComposeRuntimeError);
    } else {
      tmp = false;
    }
    if (tmp) {
      // Inline function 'androidx.compose.runtime.platform.synchronized' call
      $this.j1q_1;
      logError('Error was captured in composition while live edit was enabled.', e);
      $this.q1q_1.y1();
      $this.p1q_1.y1();
      $this.o1q_1 = new MutableScatterSet();
      $this.r1q_1.y1();
      MultiValueMap__clear_impl_g4umn0($this.s1q_1);
      $this.u1q_1.y1();
      $this.b1r_1 = new RecomposerErrorState(recoverable, e);
      if (!(failedInitialComposition == null)) {
        recordFailedCompositionLocked($this, failedInitialComposition);
      }
      deriveStateLocked($this);
    } else {
      // Inline function 'androidx.compose.runtime.platform.synchronized' call
      $this.j1q_1;
      var errorState = $this.b1r_1;
      if (errorState == null) {
        $this.b1r_1 = new RecomposerErrorState(false, e);
      } else {
        throw errorState.b1s_1;
      }
      throw e;
    }
  }
  function processCompositionError$default($this, e, failedInitialComposition, recoverable, $super) {
    failedInitialComposition = failedInitialComposition === VOID ? null : failedInitialComposition;
    recoverable = recoverable === VOID ? false : recoverable;
    return processCompositionError($this, e, failedInitialComposition, recoverable);
  }
  function clearKnownCompositionsLocked($this) {
    var tmp0_safe_receiver = $this.h1r_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.collection.ObjectList.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var content = tmp0_safe_receiver.zx_1;
      var inductionVariable = 0;
      var last = tmp0_safe_receiver.ay_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp = content[i];
          var observer = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s = _get_knownCompositions__y8veaj($this).g();
          while (_iterator__ex2g4s.h()) {
            var element = _iterator__ex2g4s.i();
            observer.c1s($this, element);
          }
        }
         while (inductionVariable < last);
    }
    $this.m1q_1.y1();
    $this.n1q_1 = emptyList();
  }
  function removeKnownCompositionLocked($this, composition) {
    if ($this.m1q_1.v1(composition)) {
      $this.n1q_1 = null;
      var tmp0_safe_receiver = $this.h1r_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'androidx.collection.ObjectList.forEach' call
        // Inline function 'kotlin.contracts.contract' call
        var content = tmp0_safe_receiver.zx_1;
        var inductionVariable = 0;
        var last = tmp0_safe_receiver.ay_1;
        if (inductionVariable < last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var tmp = content[i];
            ((tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE()).c1s($this, composition);
          }
           while (inductionVariable < last);
      }
    }
  }
  function addKnownCompositionLocked($this, composition) {
    // Inline function 'kotlin.collections.plusAssign' call
    $this.m1q_1.e(composition);
    $this.n1q_1 = null;
    var tmp0_safe_receiver = $this.h1r_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.collection.ObjectList.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var content = tmp0_safe_receiver.zx_1;
      var inductionVariable = 0;
      var last = tmp0_safe_receiver.ay_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp = content[i];
          ((tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE()).d1s($this, composition);
        }
         while (inductionVariable < last);
    }
  }
  function recordFailedCompositionLocked($this, composition) {
    var tmp0_elvis_lhs = $this.w1q_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.collections.mutableListOf' call
      // Inline function 'kotlin.also' call
      var this_0 = ArrayList_init_$Create$();
      $this.w1q_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var failedCompositions = tmp;
    if (!failedCompositions.o(composition)) {
      // Inline function 'kotlin.collections.plusAssign' call
      failedCompositions.e(composition);
    }
    removeKnownCompositionLocked($this, composition);
  }
  function _get_hasSchedulingWork__b617oy($this) {
    // Inline function 'androidx.compose.runtime.platform.synchronized' call
    $this.j1q_1;
    var tmp;
    var tmp_0;
    if ($this.o1q_1.cy()) {
      tmp_0 = true;
    } else {
      // Inline function 'androidx.compose.runtime.collection.MutableVector.isNotEmpty' call
      tmp_0 = !($this.p1q_1.d1e_1 === 0);
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
    }
    return tmp;
  }
  function awaitWorkAvailable($this, $completion) {
    var tmp = new $awaitWorkAvailableCOROUTINE$($this, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  }
  function recompositionRunner($this, block, $completion) {
    // Inline function 'kotlin.js.getCoroutineContext' call
    var tmp$ret$0 = $completion.b9();
    var parentFrameClock = get_monotonicFrameClock(tmp$ret$0);
    return withContext($this.i1q_1, Recomposer$recompositionRunner$slambda_0($this, block, parentFrameClock, null), $completion);
  }
  function performInitialMovableContentInserts($this, composition) {
    // Inline function 'androidx.compose.runtime.platform.synchronized' call
    $this.j1q_1;
    var tmp0 = $this.r1q_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.runtime.snapshots.fastAny' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var inductionVariable = 0;
      var last = tmp0.j() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0.p(index);
          if (equals(item.c1d_1, composition)) {
            tmp$ret$1 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = false;
    }
    if (!tmp$ret$1)
      return Unit_instance;
    // Inline function 'kotlin.collections.mutableListOf' call
    var toInsert = ArrayList_init_$Create$();
    performInitialMovableContentInserts$fillToInsert(toInsert, $this, composition);
    $l$loop: while (true) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!!toInsert.r()) {
        break $l$loop;
      }
      performInsertValues($this, toInsert, null);
      performInitialMovableContentInserts$fillToInsert(toInsert, $this, composition);
    }
  }
  function performRecompose($this, composition, modifiedValues) {
    var tmp;
    if (composition.g1m() || composition.p1m()) {
      tmp = true;
    } else {
      var tmp0_safe_receiver = $this.x1q_1;
      tmp = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o(composition)) === true;
    }
    if (tmp)
      return null;
    var tmp_0;
    $l$block_0: {
      // Inline function 'androidx.compose.runtime.Recomposer.composing' call
      var snapshot = Companion_instance_11.n1s(readObserverOf($this, composition), writeObserverOf($this, composition, modifiedValues));
      try {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
          var previous = snapshot.o1s();
          try {
            if ((modifiedValues == null ? null : modifiedValues.cy()) === true) {
              composition.y1m(Recomposer$performRecompose$lambda(modifiedValues, composition));
            }
            tmp$ret$1 = composition.h1n();
            break $l$block;
          }finally {
            snapshot.p1s(previous);
          }
        }
        break $l$block_0;
      }finally {
        applyAndCheck($this, snapshot);
      }
    }
    if (tmp$ret$1) {
      tmp_0 = composition;
    } else {
      tmp_0 = null;
    }
    return tmp_0;
  }
  function performInsertValues($this, references, modifiedValues) {
    // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy' call
    var destination = HashMap_init_$Create$(references.j());
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var inductionVariable = 0;
    var last = references.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = references.p(index);
        var key = item.c1d_1;
        // Inline function 'kotlin.collections.getOrPut' call
        var value = destination.h2(key);
        var tmp;
        if (value == null) {
          var answer = ArrayList_init_$Create$();
          destination.l2(key, answer);
          tmp = answer;
        } else {
          tmp = value;
        }
        var list = tmp;
        list.e(item);
      }
       while (inductionVariable <= last);
    var tasks = destination;
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = tasks.k2().g();
    while (_iterator__ex2g4s.h()) {
      var _destruct__k2r9zo = _iterator__ex2g4s.i();
      // Inline function 'kotlin.collections.component1' call
      var composition = _destruct__k2r9zo.d2();
      // Inline function 'kotlin.collections.component2' call
      var refs = _destruct__k2r9zo.e2();
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!!composition.g1m()) {
        var tmp$ret$9 = 'Check failed';
        composeImmediateRuntimeError(tmp$ret$9);
      }
      $l$block_4: {
        // Inline function 'androidx.compose.runtime.Recomposer.composing' call
        var snapshot = Companion_instance_11.n1s(readObserverOf($this, composition), writeObserverOf($this, composition, modifiedValues));
        try {
          $l$block_3: {
            // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
            var previous = snapshot.o1s();
            try {
              // Inline function 'androidx.compose.runtime.platform.synchronized' call
              $this.j1q_1;
              // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
              var target = ArrayList_init_$Create$_0(refs.j());
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var inductionVariable_0 = 0;
              var last_0 = refs.j() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = refs.p(index_0);
                  // Inline function 'kotlin.also' call
                  var this_0 = MultiValueMap__removeLast_impl_h7l98v($this.s1q_1, item_0.a1d_1);
                  if (!(this_0 == null)) {
                    $this.t1q_1.s1s(this_0);
                  }
                  // Inline function 'kotlin.collections.plusAssign' call
                  var element = to(item_0, this_0);
                  target.e(element);
                }
                 while (inductionVariable_0 <= last_0);
              // Inline function 'kotlin.let' call
              var tmp_0;
              var tmp_1;
              if (ComposeRuntimeFlags_instance.z13_1) {
                var tmp$ret$20;
                $l$block: {
                  // Inline function 'androidx.compose.runtime.snapshots.fastAny' call
                  // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
                  var inductionVariable_1 = 0;
                  var last_1 = target.j() - 1 | 0;
                  if (inductionVariable_1 <= last_1)
                    do {
                      var index_1 = inductionVariable_1;
                      inductionVariable_1 = inductionVariable_1 + 1 | 0;
                      var item_1 = target.p(index_1);
                      if (item_1.ze_1 == null && $this.t1q_1.t1s(item_1.ye_1.a1d_1)) {
                        tmp$ret$20 = true;
                        break $l$block;
                      }
                    }
                     while (inductionVariable_1 <= last_1);
                  tmp$ret$20 = false;
                }
                tmp_1 = tmp$ret$20;
              } else {
                tmp_1 = false;
              }
              if (tmp_1) {
                // Inline function 'kotlin.collections.map' call
                // Inline function 'kotlin.collections.mapTo' call
                var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(target, 10));
                var _iterator__ex2g4s_0 = target.g();
                while (_iterator__ex2g4s_0.h()) {
                  var item_2 = _iterator__ex2g4s_0.i();
                  var tmp$ret$23;
                  $l$block_0: {
                    var tmp_2;
                    if (item_2.ze_1 == null) {
                      var nestedContentReference = $this.t1q_1.u1s(item_2.ye_1.a1d_1);
                      if (nestedContentReference == null) {
                        tmp$ret$23 = item_2;
                        break $l$block_0;
                      }
                      var content = nestedContentReference.v1s_1;
                      var container = nestedContentReference.w1s_1;
                      MultiValueMap__add_impl_ww0640($this.v1q_1, container, content);
                      tmp_2 = to(item_2.ye_1, content);
                    } else {
                      tmp_2 = item_2;
                    }
                    tmp$ret$23 = tmp_2;
                  }
                  destination_0.e(tmp$ret$23);
                }
                tmp_0 = destination_0;
              } else {
                tmp_0 = target;
              }
              var pairs = tmp_0;
              var tmp_3;
              var tmp_4;
              var tmp$ret$31;
              $l$block_1: {
                // Inline function 'androidx.compose.runtime.snapshots.fastAll' call
                // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
                var inductionVariable_2 = 0;
                var last_2 = pairs.j() - 1 | 0;
                if (inductionVariable_2 <= last_2)
                  do {
                    var index_2 = inductionVariable_2;
                    inductionVariable_2 = inductionVariable_2 + 1 | 0;
                    var item_3 = pairs.p(index_2);
                    if (!(item_3.ze_1 == null)) {
                      tmp$ret$31 = false;
                      break $l$block_1;
                    }
                  }
                   while (inductionVariable_2 <= last_2);
                tmp$ret$31 = true;
              }
              if (tmp$ret$31) {
                tmp_4 = true;
              } else {
                var tmp$ret$35;
                $l$block_2: {
                  // Inline function 'androidx.compose.runtime.snapshots.fastAll' call
                  // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
                  var inductionVariable_3 = 0;
                  var last_3 = pairs.j() - 1 | 0;
                  if (inductionVariable_3 <= last_3)
                    do {
                      var index_3 = inductionVariable_3;
                      inductionVariable_3 = inductionVariable_3 + 1 | 0;
                      var item_4 = pairs.p(index_3);
                      if (!!(item_4.ze_1 == null)) {
                        tmp$ret$35 = false;
                        break $l$block_2;
                      }
                    }
                     while (inductionVariable_3 <= last_3);
                  tmp$ret$35 = true;
                }
                tmp_4 = tmp$ret$35;
              }
              if (tmp_4) {
                tmp_3 = pairs;
              } else {
                // Inline function 'androidx.compose.runtime.snapshots.fastMapNotNull' call
                var target_0 = ArrayList_init_$Create$_0(pairs.j());
                // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
                var inductionVariable_4 = 0;
                var last_4 = pairs.j() - 1 | 0;
                if (inductionVariable_4 <= last_4)
                  do {
                    var index_4 = inductionVariable_4;
                    inductionVariable_4 = inductionVariable_4 + 1 | 0;
                    var item_5 = pairs.p(index_4);
                    var tmp0_safe_receiver = item_5.ze_1 == null ? item_5.ye_1 : null;
                    if (tmp0_safe_receiver == null)
                      null;
                    else {
                      // Inline function 'kotlin.let' call
                      // Inline function 'kotlin.collections.plusAssign' call
                      target_0.e(tmp0_safe_receiver);
                    }
                  }
                   while (inductionVariable_4 <= last_4);
                var toReturn = target_0;
                // Inline function 'androidx.compose.runtime.platform.synchronized' call
                $this.j1q_1;
                // Inline function 'kotlin.collections.plusAssign' call
                var this_1 = $this.r1q_1;
                addAll(this_1, toReturn);
                // Inline function 'androidx.compose.runtime.snapshots.fastFilterIndexed' call
                var target_1 = ArrayList_init_$Create$_0(pairs.j());
                // Inline function 'androidx.compose.runtime.snapshots.fastForEachIndexed' call
                var inductionVariable_5 = 0;
                var last_5 = pairs.j() - 1 | 0;
                if (inductionVariable_5 <= last_5)
                  do {
                    var index_5 = inductionVariable_5;
                    inductionVariable_5 = inductionVariable_5 + 1 | 0;
                    var item_6 = pairs.p(index_5);
                    if (!(item_6.ze_1 == null)) {
                      // Inline function 'kotlin.collections.plusAssign' call
                      target_1.e(item_6);
                    }
                  }
                   while (inductionVariable_5 <= last_5);
                tmp_3 = target_1;
              }
              var toInsert = tmp_3;
              composition.i1n(toInsert);
              break $l$block_3;
            }finally {
              snapshot.p1s(previous);
            }
          }
          break $l$block_4;
        }finally {
          applyAndCheck($this, snapshot);
        }
      }
    }
    return toList(tasks.i2());
  }
  function discardUnusedMovableContentState($this) {
    // Inline function 'androidx.compose.runtime.platform.synchronized' call
    $this.j1q_1;
    var tmp;
    if (MultiValueMap__isNotEmpty_impl_ktqbr9($this.s1q_1)) {
      var references = MultiValueMap__values_impl_vxaj3b($this.s1q_1);
      MultiValueMap__clear_impl_g4umn0($this.s1q_1);
      $this.t1q_1.y1();
      MultiValueMap__clear_impl_g4umn0($this.v1q_1);
      // Inline function 'androidx.compose.runtime.collection.fastMap' call
      var target = new MutableObjectList(references.j());
      // Inline function 'androidx.collection.ObjectList.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var content = references.zx_1;
      var inductionVariable = 0;
      var last = references.ay_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp_0 = content[i];
          var it = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
          // Inline function 'androidx.collection.MutableObjectList.plusAssign' call
          var element = to(it, $this.u1q_1.h2(it));
          target.e(element);
        }
         while (inductionVariable < last);
      var unusedValues = target;
      $this.u1q_1.y1();
      tmp = unusedValues;
    } else {
      tmp = emptyObjectList();
    }
    var unusedValues_0 = tmp;
    // Inline function 'androidx.collection.ObjectList.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var content_0 = unusedValues_0.zx_1;
    var inductionVariable_0 = 0;
    var last_0 = unusedValues_0.ay_1;
    if (inductionVariable_0 < last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp_1 = content_0[i_0];
        var destruct = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        var reference = destruct.af();
        var state = destruct.bf();
        if (!(state == null)) {
          reference.c1d_1.j1n(state);
        }
      }
       while (inductionVariable_0 < last_0);
  }
  function readObserverOf($this, composition) {
    return Recomposer$readObserverOf$lambda(composition);
  }
  function writeObserverOf($this, composition, modifiedValues) {
    return Recomposer$writeObserverOf$lambda(composition, modifiedValues);
  }
  function applyAndCheck($this, snapshot) {
    try {
      var applyResult = snapshot.k1t();
      if (applyResult instanceof Failure) {
        // Inline function 'kotlin.error' call
        var message = 'Unsupported concurrent change during composition. A state object was modified by composition as well as being modified outside composition.';
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }finally {
      snapshot.pm();
    }
  }
  function _get_hasFrameWorkLocked__1gtyf7($this) {
    var tmp;
    // Inline function 'androidx.compose.runtime.collection.MutableVector.isNotEmpty' call
    if (!($this.p1q_1.d1e_1 === 0)) {
      tmp = true;
    } else {
      tmp = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
    }
    return tmp;
  }
  function Companion_2() {
    Companion_instance_3 = this;
    this.f1q_1 = MutableStateFlow(persistentSetOf());
    this.g1q_1 = new AtomicReference(false);
  }
  var Companion_instance_3;
  function Companion_getInstance_2() {
    if (Companion_instance_3 == null)
      new Companion_2();
    return Companion_instance_3;
  }
  function performInitialMovableContentInserts$fillToInsert(toInsert, this$0, $composition) {
    toInsert.y1();
    // Inline function 'androidx.compose.runtime.platform.synchronized' call
    this$0.j1q_1;
    var iterator = this$0.r1q_1.g();
    while (iterator.h()) {
      var value = iterator.i();
      if (equals(value.c1d_1, $composition)) {
        toInsert.e(value);
        iterator.a4();
      }
    }
  }
  function deletedMovableContent$_anonymous_$recordNestedStatesOf_2rn2l4(this$0, container, reference) {
    var tmp0_safe_receiver = reference.h1d_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var inductionVariable = 0;
      var last = tmp0_safe_receiver.j() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0_safe_receiver.p(index);
          this$0.t1q_1.l1t(item.a1d_1, new NestedMovableContent(item, container));
          deletedMovableContent$_anonymous_$recordNestedStatesOf_2rn2l4(this$0, container, item);
        }
         while (inductionVariable <= last);
    }
  }
  function Recomposer$broadcastFrameClock$lambda(this$0) {
    return function () {
      // Inline function 'androidx.compose.runtime.platform.synchronized' call
      this$0.j1q_1;
      // Inline function 'kotlin.also' call
      var this_0 = deriveStateLocked(this$0);
      if (this$0.d1r_1.e2().q2(State_ShuttingDown_getInstance()) <= 0)
        throw CancellationException_init_$Create$('Recomposer shutdown; frame clock awaiter will never resume', this$0.l1q_1);
      if (this_0 == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$4 = _Result___init__impl__xyqfz8(Unit_instance);
        this_0.g9(tmp$ret$4);
      }
      return Unit_instance;
    };
  }
  function Recomposer$effectJob$lambda$lambda(this$0, $throwable) {
    return function (runnerJobCause) {
      // Inline function 'androidx.compose.runtime.platform.synchronized' call
      this$0.j1q_1;
      var tmp = this$0;
      var tmp0_safe_receiver = $throwable;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.apply' call
        var tmp_1;
        if (runnerJobCause == null) {
          tmp_1 = null;
        } else {
          // Inline function 'kotlin.takeIf' call
          var tmp_2;
          if (!(runnerJobCause instanceof CancellationException)) {
            tmp_2 = runnerJobCause;
          } else {
            tmp_2 = null;
          }
          tmp_1 = tmp_2;
        }
        var tmp1_safe_receiver = tmp_1;
        if (tmp1_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          addSuppressed(tmp0_safe_receiver, tmp1_safe_receiver);
        }
        tmp_0 = tmp0_safe_receiver;
      }
      tmp.l1q_1 = tmp_0;
      this$0.d1r_1.ss(State_ShutDown_getInstance());
      return Unit_instance;
    };
  }
  function Recomposer$effectJob$lambda(this$0) {
    return function (throwable) {
      var cancellation = CancellationException_init_$Create$('Recomposer effect job completed', throwable);
      var continuationToResume = null;
      // Inline function 'androidx.compose.runtime.platform.synchronized' call
      this$0.j1q_1;
      var runnerJob = this$0.k1q_1;
      var tmp;
      if (!(runnerJob == null)) {
        this$0.d1r_1.ss(State_ShuttingDown_getInstance());
        if (!this$0.a1r_1) {
          runnerJob.ak(cancellation);
        } else if (!(this$0.y1q_1 == null)) {
          continuationToResume = this$0.y1q_1;
        }
        this$0.y1q_1 = null;
        tmp = runnerJob.vj(Recomposer$effectJob$lambda$lambda(this$0, throwable));
      } else {
        this$0.l1q_1 = cancellation;
        this$0.d1r_1.ss(State_ShutDown_getInstance());
        tmp = Unit_instance;
      }
      var tmp0_safe_receiver = continuationToResume;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$2 = _Result___init__impl__xyqfz8(Unit_instance);
        tmp0_safe_receiver.g9(tmp$ret$2);
      }
      return Unit_instance;
    };
  }
  function Recomposer$runRecomposeAndApplyChanges$slambda(this$0, resultContinuation) {
    this.u1t_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).f1u = function ($this$recompositionRunner, parentFrameClock, $completion) {
    var tmp = this.g1u($this$recompositionRunner, parentFrameClock, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).h1u = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE();
    return this.f1u(tmp, (!(p2 == null) ? isInterface(p2, MonotonicFrameClock) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 6;
            var tmp_0 = this;
            tmp_0.x1t_1 = ArrayList_init_$Create$();
            var tmp_1 = this;
            tmp_1.y1t_1 = ArrayList_init_$Create$();
            var tmp_2 = this;
            tmp_2.z1t_1 = ArrayList_init_$Create$();
            this.a1u_1 = mutableScatterSetOf_0();
            this.b1u_1 = mutableScatterSetOf_0();
            this.c1u_1 = new MutableScatterSet();
            this.d1u_1 = wrapIntoSet(this.c1u_1);
            this.e1u_1 = mutableScatterSetOf_0();
            this.v8_1 = 1;
            continue $sm;
          case 1:
            if (!_get_shouldKeepRecomposing__5j79sd(this.u1t_1)) {
              this.v8_1 = 5;
              continue $sm;
            }

            this.v8_1 = 2;
            suspendResult = awaitWorkAvailable(this.u1t_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (!recordComposerModifications(this.u1t_1)) {
              this.v8_1 = 1;
              continue $sm;
            } else {
              this.v8_1 = 3;
              continue $sm;
            }

          case 3:
            this.v8_1 = 4;
            suspendResult = this.w1t_1.w13(Recomposer$runRecomposeAndApplyChanges$slambda$lambda(this.u1t_1, this.x1t_1, this.c1u_1, this.e1u_1, this.y1t_1, this.z1t_1, this.d1u_1, this.a1u_1, this.b1u_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            discardUnusedMovableContentState(this.u1t_1);
            this.v8_1 = 1;
            continue $sm;
          case 5:
            return Unit_instance;
          case 6:
            throw this.y8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.w8_1 === 6) {
          throw e;
        } else {
          this.v8_1 = this.w8_1;
          this.y8_1 = e;
        }
      }
     while (true);
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).g1u = function ($this$recompositionRunner, parentFrameClock, completion) {
    var i = new Recomposer$runRecomposeAndApplyChanges$slambda(this.u1t_1, completion);
    i.v1t_1 = $this$recompositionRunner;
    i.w1t_1 = parentFrameClock;
    return i;
  };
  function Recomposer$runRecomposeAndApplyChanges$slambda_0(this$0, resultContinuation) {
    var i = new Recomposer$runRecomposeAndApplyChanges$slambda(this$0, resultContinuation);
    var l = function ($this$recompositionRunner, parentFrameClock, $completion) {
      return i.f1u($this$recompositionRunner, parentFrameClock, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Recomposer$recompositionRunner$slambda(this$0, $block, $parentFrameClock, resultContinuation) {
    this.q1u_1 = this$0;
    this.r1u_1 = $block;
    this.s1u_1 = $parentFrameClock;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$recompositionRunner$slambda).w1p = function ($this$withContext, $completion) {
    var tmp = this.x1p($this$withContext, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(Recomposer$recompositionRunner$slambda).p9 = function (p1, $completion) {
    return this.w1p((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$recompositionRunner$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 5;
            this.u1u_1 = get_job(this.t1u_1.ui());
            registerRunnerJob(this.q1u_1, this.u1u_1);
            var tmp_0 = this;
            var tmp_1 = Companion_instance_11;
            tmp_0.v1u_1 = tmp_1.x1u(Recomposer$recompositionRunner$slambda$lambda(this.q1u_1));
            addRunning(Companion_getInstance_2(), this.q1u_1.i1r_1);
            this.v8_1 = 1;
            continue $sm;
          case 1:
            this.w8_1 = 4;
            this.q1u_1.j1q_1;
            var this_0 = _get_knownCompositions__y8veaj(this.q1u_1);
            var inductionVariable = 0;
            var last = this_0.j() - 1 | 0;
            if (inductionVariable <= last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var item = this_0.p(index);
                item.o1n();
              }
               while (inductionVariable <= last);
            this.v8_1 = 2;
            suspendResult = coroutineScope(Recomposer$recompositionRunner$slambda$slambda_0(this.r1u_1, this.s1u_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.w1u_1 = suspendResult;
            this.w8_1 = 5;
            this.v8_1 = 3;
            continue $sm;
          case 3:
            this.w8_1 = 5;
            this.v1u_1.pm();
            this.q1u_1.j1q_1;
            if (this.q1u_1.k1q_1 === this.u1u_1) {
              this.q1u_1.k1q_1 = null;
            }

            deriveStateLocked(this.q1u_1);
            removeRunning(Companion_getInstance_2(), this.q1u_1.i1r_1);
            return Unit_instance;
          case 4:
            this.w8_1 = 5;
            var t = this.y8_1;
            this.v1u_1.pm();
            this.q1u_1.j1q_1;
            if (this.q1u_1.k1q_1 === this.u1u_1) {
              this.q1u_1.k1q_1 = null;
            }

            deriveStateLocked(this.q1u_1);
            removeRunning(Companion_getInstance_2(), this.q1u_1.i1r_1);
            throw t;
          case 5:
            throw this.y8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.w8_1 === 5) {
          throw e;
        } else {
          this.v8_1 = this.w8_1;
          this.y8_1 = e;
        }
      }
     while (true);
  };
  protoOf(Recomposer$recompositionRunner$slambda).x1p = function ($this$withContext, completion) {
    var i = new Recomposer$recompositionRunner$slambda(this.q1u_1, this.r1u_1, this.s1u_1, completion);
    i.t1u_1 = $this$withContext;
    return i;
  };
  function Recomposer$recompositionRunner$slambda_0(this$0, $block, $parentFrameClock, resultContinuation) {
    var i = new Recomposer$recompositionRunner$slambda(this$0, $block, $parentFrameClock, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.w1p($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Recomposer$performRecompose$lambda($modifiedValues, $composition) {
    return function () {
      // Inline function 'androidx.collection.ScatterSet.forEach' call
      var this_0 = $modifiedValues;
      // Inline function 'kotlin.contracts.contract' call
      var elements = this_0.pz_1;
      $l$block: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this_0.oz_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            if (!this_1.f3(this_1.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                    var index = (i << 3) + j | 0;
                    var tmp = elements[index];
                    var it = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                    $composition.g1n(it);
                  }
                  slot = slot.d3(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
      return Unit_instance;
    };
  }
  function Recomposer$readObserverOf$lambda($composition) {
    return function (value) {
      $composition.z1k(value);
      return Unit_instance;
    };
  }
  function Recomposer$writeObserverOf$lambda($composition, $modifiedValues) {
    return function (value) {
      $composition.g1n(value);
      var tmp0_safe_receiver = $modifiedValues;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.e(value);
      return Unit_instance;
    };
  }
  function State_ShutDown_getInstance() {
    State_initEntries();
    return State_ShutDown_instance;
  }
  function State_ShuttingDown_getInstance() {
    State_initEntries();
    return State_ShuttingDown_instance;
  }
  function State_Inactive_getInstance() {
    State_initEntries();
    return State_Inactive_instance;
  }
  function State_InactivePendingWork_getInstance() {
    State_initEntries();
    return State_InactivePendingWork_instance;
  }
  function State_Idle_getInstance() {
    State_initEntries();
    return State_Idle_instance;
  }
  function State_PendingWork_getInstance() {
    State_initEntries();
    return State_PendingWork_instance;
  }
  function $awaitWorkAvailableCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m1s_1 = _this__u8e3s4;
  }
  protoOf($awaitWorkAvailableCOROUTINE$).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 3;
            if (!_get_hasSchedulingWork__b617oy(this.m1s_1)) {
              this.v8_1 = 1;
              var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
              cancellable.om();
              this.m1s_1.j1q_1;
              var tmp_0;
              if (_get_hasSchedulingWork__b617oy(this.m1s_1)) {
                tmp_0 = cancellable;
              } else {
                this.m1s_1.y1q_1 = cancellable;
                tmp_0 = null;
              }
              var tmp0_safe_receiver = tmp_0;
              if (tmp0_safe_receiver == null)
                null;
              else {
                tmp0_safe_receiver.g9(_Result___init__impl__xyqfz8(Unit_instance));
              }
              suspendResult = returnIfSuspended(cancellable.sk(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.v8_1 = 2;
              continue $sm;
            }

          case 1:
            this.v8_1 = 2;
            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.y8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.w8_1 === 3) {
          throw e;
        } else {
          this.v8_1 = this.w8_1;
          this.y8_1 = e;
        }
      }
     while (true);
  };
  function Recomposer(effectCoroutineContext) {
    Companion_getInstance_2();
    CompositionContext.call(this);
    this.h1q_1 = new Long(0, 0);
    var tmp = this;
    tmp.i1q_1 = new BroadcastFrameClock(Recomposer$broadcastFrameClock$lambda(this));
    var tmp_0 = this;
    // Inline function 'androidx.compose.runtime.platform.makeSynchronizedObject' call
    tmp_0.j1q_1 = null == null ? new Object() : null;
    this.k1q_1 = null;
    this.l1q_1 = null;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.m1q_1 = ArrayList_init_$Create$();
    this.n1q_1 = null;
    this.o1q_1 = new MutableScatterSet();
    var tmp_2 = this;
    // Inline function 'androidx.compose.runtime.collection.mutableVectorOf' call
    // Inline function 'androidx.compose.runtime.collection.MutableVector' call
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp$ret$2 = Array(16);
    tmp_2.p1q_1 = new MutableVector(tmp$ret$2, 0);
    var tmp_3 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_3.q1q_1 = ArrayList_init_$Create$();
    var tmp_4 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_4.r1q_1 = ArrayList_init_$Create$();
    this.s1q_1 = _MultiValueMap___init__impl__qt1z0r();
    this.t1q_1 = new NestedContentMap();
    this.u1q_1 = mutableScatterMapOf();
    this.v1q_1 = _MultiValueMap___init__impl__qt1z0r();
    this.w1q_1 = null;
    this.x1q_1 = null;
    this.y1q_1 = null;
    this.z1q_1 = 0;
    this.a1r_1 = false;
    this.b1r_1 = null;
    this.c1r_1 = false;
    this.d1r_1 = MutableStateFlow(State_Inactive_getInstance());
    this.e1r_1 = new SnapshotThreadLocal();
    var tmp_5 = this;
    // Inline function 'kotlin.apply' call
    var this_0 = Job(effectCoroutineContext.i9(Key_instance));
    this_0.vj(Recomposer$effectJob$lambda(this));
    tmp_5.f1r_1 = this_0;
    this.g1r_1 = effectCoroutineContext.xg(this.i1q_1).xg(this.f1r_1);
    this.h1r_1 = null;
    this.i1r_1 = new RecomposerInfoImpl(this);
  }
  protoOf(Recomposer).m1g = function () {
    return this.g1r_1;
  };
  protoOf(Recomposer).y1u = function ($completion) {
    return recompositionRunner(this, Recomposer$runRecomposeAndApplyChanges$slambda_0(this, null), $completion);
  };
  protoOf(Recomposer).a1l = function (composition, content) {
    var composerWasComposing = composition.g1m();
    try {
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.Recomposer.composing' call
        var snapshot = Companion_instance_11.n1s(readObserverOf(this, composition), writeObserverOf(this, composition, null));
        try {
          $l$block: {
            // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
            var previous = snapshot.o1s();
            try {
              composition.r1m(content);
              break $l$block;
            }finally {
              snapshot.p1s(previous);
            }
          }
          break $l$block_0;
        }finally {
          applyAndCheck(this, snapshot);
        }
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        processCompositionError(this, e, composition, true);
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    if (!composerWasComposing) {
      Companion_instance_11.m1r();
    }
    // Inline function 'androidx.compose.runtime.platform.synchronized' call
    this.j1q_1;
    if (this.d1r_1.e2().q2(State_ShuttingDown_getInstance()) > 0) {
      if (!_get_knownCompositions__y8veaj(this).o(composition)) {
        addKnownCompositionLocked(this, composition);
      }
    }
    try {
      performInitialMovableContentInserts(this, composition);
    } catch ($p) {
      if ($p instanceof Error) {
        var e_0 = $p;
        processCompositionError(this, e_0, composition, true);
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    try {
      composition.k1n();
      composition.l1n();
    } catch ($p) {
      if ($p instanceof Error) {
        var e_1 = $p;
        processCompositionError$default(this, e_1);
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    if (!composerWasComposing) {
      Companion_instance_11.m1r();
    }
  };
  protoOf(Recomposer).w1i = function (scope) {
    var tmp0_elvis_lhs = this.e1r_1.bo();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      var newScopes = mutableScatterSetOf_0();
      this.e1r_1.l1o(newScopes);
      tmp = newScopes;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var scopes = tmp;
    scopes.e(scope);
  };
  protoOf(Recomposer).e17 = function () {
    return 1000;
  };
  protoOf(Recomposer).z19 = function () {
    return Companion_getInstance_2().g1q_1.bo();
  };
  protoOf(Recomposer).a17 = function () {
    return false;
  };
  protoOf(Recomposer).b17 = function () {
    return false;
  };
  protoOf(Recomposer).d17 = function (table) {
  };
  protoOf(Recomposer).i1m = function (composition) {
    // Inline function 'androidx.compose.runtime.platform.synchronized' call
    this.j1q_1;
    var tmp;
    if (!this.p1q_1.te(composition)) {
      // Inline function 'androidx.compose.runtime.collection.MutableVector.plusAssign' call
      this.p1q_1.jy(composition);
      tmp = deriveStateLocked(this);
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_instance);
      tmp0_safe_receiver.g9(tmp$ret$3);
    }
  };
  protoOf(Recomposer).x1c = function (reference) {
    // Inline function 'androidx.compose.runtime.platform.synchronized' call
    this.j1q_1;
    // Inline function 'kotlin.collections.plusAssign' call
    this.r1q_1.e(reference);
    var tmp0_safe_receiver = deriveStateLocked(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_instance);
      tmp0_safe_receiver.g9(tmp$ret$3);
    }
  };
  protoOf(Recomposer).b1g = function (reference) {
    // Inline function 'androidx.compose.runtime.platform.synchronized' call
    this.j1q_1;
    MultiValueMap__add_impl_ww0640(this.s1q_1, reference.a1d_1, reference);
    if (!(reference.h1d_1 == null)) {
      var container = reference;
      deletedMovableContent$_anonymous_$recordNestedStatesOf_2rn2l4(this, container, reference);
    }
  };
  protoOf(Recomposer).u1n = function (reference, data, applier) {
    // Inline function 'androidx.compose.runtime.platform.synchronized' call
    this.j1q_1;
    this.u1q_1.mz(reference, data);
    var extractions = MultiValueMap__get_impl_k8msu3(this.v1q_1, reference);
    if (extractions.cy()) {
      var states = data.a1k(applier, extractions);
      // Inline function 'androidx.collection.ScatterMap.forEach' call
      var k = states.cz_1;
      var v = states.dz_1;
      $l$block: {
        // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
        var m = states.bz_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_0 = slot;
            if (!this_0.f3(this_0.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                    var index = (i << 3) + j | 0;
                    var tmp = k[index];
                    var tmp0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                    var tmp_0 = v[index];
                    var state = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                    this.u1q_1.mz(tmp0, state);
                  }
                  slot = slot.d3(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
    }
  };
  protoOf(Recomposer).a1g = function (composition) {
    // Inline function 'androidx.compose.runtime.platform.synchronized' call
    this.j1q_1;
    var tmp0_elvis_lhs = this.x1q_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.collections.mutableSetOf' call
      // Inline function 'kotlin.also' call
      var this_0 = LinkedHashSet_init_$Create$();
      this.x1q_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var compositionsRemoved = tmp;
    compositionsRemoved.e(composition);
  };
  protoOf(Recomposer).k1d = function (reference) {
    // Inline function 'androidx.compose.runtime.platform.synchronized' call
    this.j1q_1;
    return this.u1q_1.m2(reference);
  };
  function NestedContentMap$usedContainer$lambda($reference) {
    return function (it) {
      return equals(it.w1s_1, $reference);
    };
  }
  function NestedContentMap$usedContainer$lambda_0($reference) {
    return function (it) {
      return equals(it.w1s_1, $reference);
    };
  }
  function NestedContentMap() {
    this.q1s_1 = _MultiValueMap___init__impl__qt1z0r();
    this.r1s_1 = _MultiValueMap___init__impl__qt1z0r();
  }
  protoOf(NestedContentMap).l1t = function (content, nestedContent) {
    MultiValueMap__add_impl_ww0640(this.q1s_1, content, nestedContent);
    MultiValueMap__add_impl_ww0640(this.r1s_1, nestedContent.w1s_1, content);
  };
  protoOf(NestedContentMap).y1 = function () {
    MultiValueMap__clear_impl_g4umn0(this.q1s_1);
    MultiValueMap__clear_impl_g4umn0(this.r1s_1);
  };
  protoOf(NestedContentMap).u1s = function (key) {
    // Inline function 'kotlin.also' call
    var this_0 = MultiValueMap__removeLast_impl_h7l98v(this.q1s_1, key);
    if (MultiValueMap__isEmpty_impl_n67ooe(this.q1s_1)) {
      MultiValueMap__clear_impl_g4umn0(this.r1s_1);
    }
    return this_0;
  };
  protoOf(NestedContentMap).t1s = function (key) {
    return MultiValueMap__contains_impl_2yjtfa(this.q1s_1, key);
  };
  protoOf(NestedContentMap).s1s = function (reference) {
    // Inline function 'androidx.compose.runtime.collection.MultiValueMap.forEachValue' call
    var this_0 = this.r1s_1;
    var tmp0_safe_receiver = access$_get_map__v7axsb(this_0).h2(reference);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      if (tmp0_safe_receiver instanceof MutableObjectList) {
        // Inline function 'androidx.collection.ObjectList.forEach' call
        // Inline function 'kotlin.contracts.contract' call
        var content = tmp0_safe_receiver.zx_1;
        var inductionVariable = 0;
        var last = tmp0_safe_receiver.ay_1;
        if (inductionVariable < last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var tmp = content[i];
            var value = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
            var value_0 = !(value == null) ? value : THROW_CCE();
            MultiValueMap__removeValueIf_impl_q0rlrt(this.q1s_1, value_0, NestedContentMap$usedContainer$lambda(reference));
          }
           while (inductionVariable < last);
      } else {
        var value_1 = !(tmp0_safe_receiver == null) ? tmp0_safe_receiver : THROW_CCE();
        MultiValueMap__removeValueIf_impl_q0rlrt(this.q1s_1, value_1, NestedContentMap$usedContainer$lambda_0(reference));
      }
    }
  };
  function NestedMovableContent(content, container) {
    this.v1s_1 = content;
    this.w1s_1 = container;
  }
  function RememberObserver() {
  }
  var EmptyLongArray;
  var androidx_compose_runtime_SlotTable$stable;
  var androidx_compose_runtime_Anchor$stable;
  var androidx_compose_runtime_GroupSourceInformation$stable;
  var androidx_compose_runtime_SlotReader$stable;
  var androidx_compose_runtime_KeyInfo$stable;
  var androidx_compose_runtime_SlotWriter$stable;
  var androidx_compose_runtime_BitVector$stable;
  function tryAnchor($this, index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!$this.o16_1) {
      var tmp$ret$0 = 'use active SlotWriter to crate an anchor for location instead';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    return (0 <= index ? index < $this.j16_1 : false) ? find($this.q16_1, index, $this.j16_1) : null;
  }
  function SlotTable() {
    this.i16_1 = new Int32Array(0);
    this.j16_1 = 0;
    var tmp = this;
    var tmp_0 = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = Array(0);
    while (tmp_0 < 0) {
      tmp_1[tmp_0] = null;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.k16_1 = tmp_1;
    this.l16_1 = 0;
    this.m16_1 = 0;
    var tmp_2 = this;
    // Inline function 'androidx.compose.runtime.platform.makeSynchronizedObject' call
    tmp_2.n16_1 = null == null ? new Object() : null;
    this.o16_1 = false;
    this.p16_1 = 0;
    var tmp_3 = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp_3.q16_1 = ArrayList_init_$Create$();
    this.r16_1 = null;
    this.s16_1 = null;
  }
  protoOf(SlotTable).c1c = function () {
    return this.j16_1 === 0;
  };
  protoOf(SlotTable).t16 = function () {
    if (this.o16_1) {
      // Inline function 'kotlin.error' call
      var message = 'Cannot read while a writer is pending';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.m16_1 = this.m16_1 + 1 | 0;
    return new SlotReader(this);
  };
  protoOf(SlotTable).v19 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.o16_1) {
      var tmp$ret$0 = 'Cannot start a writer when another writer is pending';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.m16_1 <= 0)) {
      var tmp$ret$2 = 'Cannot start a writer when a reader is pending';
      composeImmediateRuntimeError(tmp$ret$2);
    }
    this.o16_1 = true;
    this.p16_1 = this.p16_1 + 1 | 0;
    return new SlotWriter(this);
  };
  protoOf(SlotTable).r19 = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.o16_1) {
      var tmp$ret$0 = 'use active SlotWriter to create an anchor location instead';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    if (!(0 <= index ? index < this.j16_1 : false)) {
      var tmp$ret$2 = 'Parameter index is out of range';
      throwIllegalArgumentException(tmp$ret$2);
    }
    var tmp0 = this.q16_1;
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var effectiveSize = this.j16_1;
    var location = search(tmp0, index, effectiveSize);
    var tmp;
    if (location < 0) {
      var anchor = new Anchor(index);
      tmp0.a2(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = tmp0.p(location);
    }
    return tmp;
  };
  protoOf(SlotTable).i1d = function (anchor) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.o16_1) {
      var tmp$ret$0 = 'Use active SlotWriter to determine anchor location instead';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    if (!anchor.w1j()) {
      var tmp$ret$2 = 'Anchor refers to a group that was removed';
      throwIllegalArgumentException(tmp$ret$2);
    }
    return anchor.o1i_1;
  };
  protoOf(SlotTable).b1k = function (anchor) {
    var tmp;
    if (anchor.w1j()) {
      // Inline function 'kotlin.let' call
      var it = search(this.q16_1, anchor.o1i_1, this.j16_1);
      tmp = (it >= 0 && equals(this.q16_1.p(it), anchor));
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SlotTable).h1m = function (groupIndex, anchor) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.o16_1) {
      var tmp$ret$0 = 'Writer is active';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(0 <= groupIndex ? groupIndex < this.j16_1 : false)) {
      var tmp$ret$2 = 'Invalid group index';
      composeImmediateRuntimeError(tmp$ret$2);
    }
    var tmp;
    if (this.b1k(anchor)) {
      var containsUpper = groupIndex + groupSize(this.i16_1, groupIndex) | 0;
      var containsArg = anchor.o1i_1;
      tmp = groupIndex <= containsArg ? containsArg < containsUpper : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SlotTable).z1u = function (reader, sourceInformationMap) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(reader.t17_1 === this && this.m16_1 > 0)) {
      var tmp$ret$0 = 'Unexpected reader close()';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.m16_1 = this.m16_1 - 1 | 0;
    if (!(sourceInformationMap == null)) {
      // Inline function 'androidx.compose.runtime.platform.synchronized' call
      this.n16_1;
      var thisMap = this.r16_1;
      if (!(thisMap == null)) {
        thisMap.n2(sourceInformationMap);
      } else {
        this.r16_1 = sourceInformationMap;
      }
    }
  };
  protoOf(SlotTable).a1v = function (writer, groups, groupsSize, slots, slotsSize, anchors, sourceInformationMap, calledByMap) {
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    if (!(writer.m18_1 === this && this.o16_1)) {
      var tmp$ret$0 = 'Unexpected writer close()';
      throwIllegalArgumentException(tmp$ret$0);
    }
    this.o16_1 = false;
    this.b1v(groups, groupsSize, slots, slotsSize, anchors, sourceInformationMap, calledByMap);
  };
  protoOf(SlotTable).b1v = function (groups, groupsSize, slots, slotsSize, anchors, sourceInformationMap, calledByMap) {
    this.i16_1 = groups;
    this.j16_1 = groupsSize;
    this.k16_1 = slots;
    this.l16_1 = slotsSize;
    this.q16_1 = anchors;
    this.r16_1 = sourceInformationMap;
    this.s16_1 = calledByMap;
  };
  protoOf(SlotTable).l1f = function () {
    var tmp;
    if (this.j16_1 > 0) {
      // Inline function 'androidx.compose.runtime.containsMark' call
      tmp = !((this.i16_1[imul(0, 5) + 1 | 0] & 67108864) === 0);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SlotTable).c1v = function (group) {
    var tmp0_safe_receiver = this.r16_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp0_safe_receiver_0 = tryAnchor(this, group);
      var tmp_0;
      if (tmp0_safe_receiver_0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_0 = tmp0_safe_receiver.h2(tmp0_safe_receiver_0);
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SlotTable).y19 = function () {
    this.s16_1 = new MutableIntObjectMap();
  };
  protoOf(SlotTable).x19 = function () {
    this.r16_1 = HashMap_init_$Create$_0();
  };
  protoOf(SlotTable).b1q = function (group, slotIndex) {
    var start = slotAnchor(this.i16_1, group);
    var tmp;
    if ((group + 1 | 0) < this.j16_1) {
      var tmp0 = this.i16_1;
      // Inline function 'androidx.compose.runtime.dataAnchor' call
      var address = group + 1 | 0;
      tmp = tmp0[imul(address, 5) + 4 | 0];
    } else {
      tmp = this.k16_1.length;
    }
    var end = tmp;
    var len = end - start | 0;
    var tmp_0;
    if (0 <= slotIndex ? slotIndex < len : false) {
      return this.k16_1[start + slotIndex | 0];
    } else {
      tmp_0 = Companion_getInstance().f1a_1;
    }
    return tmp_0;
  };
  protoOf(SlotTable).g = function () {
    return new GroupIterator(this, 0, this.j16_1);
  };
  function moveGroup($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor, removeSourceGroup) {
    var groupsToMove = fromWriter.m1b(fromIndex);
    var sourceGroupsEnd = fromIndex + groupsToMove | 0;
    var sourceSlotsStart = dataIndex(fromWriter, fromIndex);
    var sourceSlotsEnd = dataIndex(fromWriter, sourceGroupsEnd);
    var slotsToMove = sourceSlotsEnd - sourceSlotsStart | 0;
    var hasMarks = containsAnyGroupMarks(fromWriter, fromIndex);
    insertGroups(toWriter, groupsToMove);
    insertSlots(toWriter, slotsToMove, toWriter.f19_1);
    if (fromWriter.s18_1 < sourceGroupsEnd) {
      moveGroupGapTo(fromWriter, sourceGroupsEnd);
    }
    if (fromWriter.w18_1 < sourceSlotsEnd) {
      moveSlotGapTo(fromWriter, sourceSlotsEnd, sourceGroupsEnd);
    }
    var groups = toWriter.n18_1;
    var currentGroup = toWriter.f19_1;
    var tmp0 = fromWriter.n18_1;
    var tmp4 = imul(currentGroup, 5);
    var tmp6 = imul(fromIndex, 5);
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = imul(sourceGroupsEnd, 5);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, groups, tmp4, tmp6, endIndex);
    var slots = toWriter.o18_1;
    var currentSlot = toWriter.u18_1;
    // Inline function 'androidx.compose.runtime.collection.fastCopyInto' call
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = fromWriter.o18_1;
    arrayCopy(this_0, slots, currentSlot, sourceSlotsStart, sourceSlotsEnd);
    var parent = toWriter.h19_1;
    // Inline function 'androidx.compose.runtime.updateParentAnchor' call
    groups[imul(currentGroup, 5) + 2 | 0] = parent;
    var parentDelta = currentGroup - fromIndex | 0;
    var moveEnd = currentGroup + groupsToMove | 0;
    // Inline function 'kotlin.with' call
    var dataIndexDelta = currentSlot - dataIndex_0(toWriter, groups, currentGroup) | 0;
    var slotsGapOwner = toWriter.y18_1;
    var slotsGapLen = toWriter.x18_1;
    var slotsCapacity = slots.length;
    var inductionVariable = currentGroup;
    if (inductionVariable < moveEnd)
      do {
        var groupAddress = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(groupAddress === currentGroup)) {
          // Inline function 'androidx.compose.runtime.parentAnchor' call
          var previousParent = groups[imul(groupAddress, 5) + 2 | 0];
          // Inline function 'androidx.compose.runtime.updateParentAnchor' call
          var value = previousParent + parentDelta | 0;
          groups[imul(groupAddress, 5) + 2 | 0] = value;
        }
        // Inline function 'kotlin.with' call
        var newDataIndex = dataIndex_0(toWriter, groups, groupAddress) + dataIndexDelta | 0;
        // Inline function 'kotlin.with' call
        var newDataAnchor = dataIndexToDataAnchor(toWriter, newDataIndex, slotsGapOwner < groupAddress ? 0 : toWriter.w18_1, slotsGapLen, slotsCapacity);
        // Inline function 'androidx.compose.runtime.updateDataAnchor' call
        groups[imul(groupAddress, 5) + 4 | 0] = newDataAnchor;
        if (groupAddress === slotsGapOwner) {
          slotsGapOwner = slotsGapOwner + 1 | 0;
        }
      }
       while (inductionVariable < moveEnd);
    toWriter.y18_1 = slotsGapOwner;
    var startAnchors = locationOf(fromWriter.p18_1, fromIndex, fromWriter.d1v());
    var endAnchors = locationOf(fromWriter.p18_1, sourceGroupsEnd, fromWriter.d1v());
    var tmp_0;
    if (startAnchors < endAnchors) {
      var sourceAnchors = fromWriter.p18_1;
      var anchors = ArrayList_init_$Create$_0(endAnchors - startAnchors | 0);
      var anchorDelta = currentGroup - fromIndex | 0;
      var inductionVariable_0 = startAnchors;
      if (inductionVariable_0 < endAnchors)
        do {
          var anchorIndex = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var sourceAnchor = sourceAnchors.p(anchorIndex);
          sourceAnchor.o1i_1 = sourceAnchor.o1i_1 + anchorDelta | 0;
          anchors.e(sourceAnchor);
        }
         while (inductionVariable_0 < endAnchors);
      var insertLocation = locationOf(toWriter.p18_1, toWriter.f19_1, toWriter.d1v());
      toWriter.p18_1.w1(insertLocation, anchors);
      sourceAnchors.c2(startAnchors, endAnchors).y1();
      tmp_0 = anchors;
    } else {
      tmp_0 = emptyList();
    }
    var anchors_0 = tmp_0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!anchors_0.r()) {
      var sourceSourceInformationMap = fromWriter.q18_1;
      var destinationSourceInformation = toWriter.q18_1;
      if (!(sourceSourceInformationMap == null) && !(destinationSourceInformation == null)) {
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        var inductionVariable_1 = 0;
        var last = anchors_0.j() - 1 | 0;
        if (inductionVariable_1 <= last)
          do {
            var index = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var item = anchors_0.p(index);
            var information = sourceSourceInformationMap.h2(item);
            if (!(information == null)) {
              sourceSourceInformationMap.m2(item);
              // Inline function 'kotlin.collections.set' call
              destinationSourceInformation.l2(item, information);
            }
          }
           while (inductionVariable_1 <= last);
      }
    }
    var toWriterParent = toWriter.h19_1;
    var tmp0_safe_receiver = sourceInformationOf(toWriter, parent);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var predecessor = -1;
      var child = toWriterParent + 1 | 0;
      var endGroup = toWriter.f19_1;
      while (child < endGroup) {
        predecessor = child;
        child = child + groupSize(toWriter.n18_1, child) | 0;
      }
      tmp0_safe_receiver.k1v(toWriter, predecessor, endGroup);
    }
    var parentGroup = fromWriter.q19(fromIndex);
    var tmp_1;
    if (!removeSourceGroup) {
      tmp_1 = false;
    } else if (updateFromCursor) {
      var needsStartGroups = parentGroup >= 0;
      if (needsStartGroups) {
        fromWriter.d1a();
        fromWriter.c1k(parentGroup - fromWriter.f19_1 | 0);
        fromWriter.d1a();
      }
      fromWriter.c1k(fromIndex - fromWriter.f19_1 | 0);
      var anchorsRemoved = fromWriter.z1j();
      if (needsStartGroups) {
        fromWriter.w19();
        fromWriter.a1c();
        fromWriter.w19();
        fromWriter.a1c();
      }
      tmp_1 = anchorsRemoved;
    } else {
      var anchorsRemoved_0 = removeGroups(fromWriter, fromIndex, groupsToMove);
      removeSlots(fromWriter, sourceSlotsStart, slotsToMove, fromIndex - 1 | 0);
      tmp_1 = anchorsRemoved_0;
    }
    var anchorsRemoved_1 = tmp_1;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!anchorsRemoved_1) {
      var tmp$ret$23 = 'Unexpectedly removed anchors';
      composeImmediateRuntimeError(tmp$ret$23);
    }
    var tmp_2 = toWriter;
    var tmp_3 = toWriter.a19_1;
    var tmp_4;
    // Inline function 'androidx.compose.runtime.isNode' call
    if (!((groups[imul(currentGroup, 5) + 1 | 0] & 1073741824) === 0)) {
      tmp_4 = 1;
    } else {
      // Inline function 'androidx.compose.runtime.nodeCount' call
      tmp_4 = groups[imul(currentGroup, 5) + 1 | 0] & 67108863;
    }
    tmp_2.a19_1 = tmp_3 + tmp_4 | 0;
    if (updateToCursor) {
      toWriter.f19_1 = currentGroup + groupsToMove | 0;
      toWriter.u18_1 = currentSlot + slotsToMove | 0;
    }
    if (hasMarks) {
      updateContainsMark(toWriter, parent);
    }
    return anchors_0;
  }
  function moveGroup$default($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor, removeSourceGroup, $super) {
    removeSourceGroup = removeSourceGroup === VOID ? true : removeSourceGroup;
    return moveGroup($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor, removeSourceGroup);
  }
  function rawUpdate($this, value) {
    var result = $this.l1v();
    $this.m1v(value);
    return result;
  }
  function groupSourceInformationFor($this, parent, sourceInformation) {
    var tmp0_safe_receiver = $this.q18_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.getOrPut' call
      var key = $this.r19(parent);
      var value = tmp0_safe_receiver.h2(key);
      var tmp_0;
      if (value == null) {
        var result = new GroupSourceInformation(0, sourceInformation, 0);
        if (sourceInformation == null) {
          var child = parent + 1 | 0;
          var end = $this.f19_1;
          while (child < end) {
            result.n1v($this, child);
            child = child + groupSize($this.n18_1, child) | 0;
          }
        }
        var answer = result;
        tmp0_safe_receiver.l2(key, answer);
        tmp_0 = answer;
      } else {
        tmp_0 = value;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function _get_currentGroupSlotIndex__p1glxf($this) {
    var tmp = $this.u18_1 - $this.o1v($this.h19_1) | 0;
    var tmp0_safe_receiver = $this.e19_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p($this.h19_1);
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.j();
    return tmp + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) | 0;
  }
  function startGroup_1($this, key, objectKey, isNode, aux) {
    var previousParent = $this.h19_1;
    var inserting = $this.z18_1 > 0;
    $this.d19_1.y16($this.a19_1);
    var tmp = $this;
    var tmp_0;
    if (inserting) {
      var current = $this.f19_1;
      var newCurrentSlot = dataIndex_0($this, $this.n18_1, groupIndexToAddress($this, current));
      insertGroups($this, 1);
      $this.u18_1 = newCurrentSlot;
      $this.v18_1 = newCurrentSlot;
      var currentAddress = groupIndexToAddress($this, current);
      var hasObjectKey = !(objectKey === Companion_getInstance().f1a_1);
      var hasAux = !isNode && !(aux === Companion_getInstance().f1a_1);
      var tmp0_gapLen = $this.x18_1;
      var tmp1_gapStart = $this.w18_1;
      var tmp2_capacity = $this.o18_1.length;
      // Inline function 'kotlin.let' call
      var anchor = dataIndexToDataAnchor($this, newCurrentSlot, tmp1_gapStart, tmp0_gapLen, tmp2_capacity);
      var tmp_1;
      if (anchor >= 0 && $this.y18_1 < current) {
        var slotsSize = $this.o18_1.length - $this.x18_1 | 0;
        tmp_1 = -((slotsSize - anchor | 0) + 1 | 0) | 0;
      } else {
        tmp_1 = anchor;
      }
      var dataAnchor = tmp_1;
      initGroup($this.n18_1, currentAddress, key, isNode, hasObjectKey, hasAux, $this.h19_1, dataAnchor);
      var dataSlotsNeeded = ((isNode ? 1 : 0) + (hasObjectKey ? 1 : 0) | 0) + (hasAux ? 1 : 0) | 0;
      if (dataSlotsNeeded > 0) {
        insertSlots($this, dataSlotsNeeded, current);
        var slots = $this.o18_1;
        var currentSlot = $this.u18_1;
        if (isNode) {
          var _unary__edvuaz = currentSlot;
          currentSlot = _unary__edvuaz + 1 | 0;
          slots[_unary__edvuaz] = aux;
        }
        if (hasObjectKey) {
          var _unary__edvuaz_0 = currentSlot;
          currentSlot = _unary__edvuaz_0 + 1 | 0;
          slots[_unary__edvuaz_0] = objectKey;
        }
        if (hasAux) {
          var _unary__edvuaz_1 = currentSlot;
          currentSlot = _unary__edvuaz_1 + 1 | 0;
          slots[_unary__edvuaz_1] = aux;
        }
        $this.u18_1 = currentSlot;
      }
      $this.a19_1 = 0;
      var newCurrent = current + 1 | 0;
      $this.h19_1 = current;
      $this.f19_1 = newCurrent;
      if (previousParent >= 0) {
        var tmp3_safe_receiver = sourceInformationOf($this, previousParent);
        if (tmp3_safe_receiver == null)
          null;
        else {
          tmp3_safe_receiver.n1v($this, current);
        }
      }
      tmp_0 = newCurrent;
    } else {
      $this.b19_1.y16(previousParent);
      saveCurrentGroupEnd($this);
      var currentGroup = $this.f19_1;
      var currentGroupAddress = groupIndexToAddress($this, currentGroup);
      if (!equals(aux, Companion_getInstance().f1a_1)) {
        if (isNode) {
          $this.q1v(aux);
        } else {
          $this.p1v(aux);
        }
      }
      $this.u18_1 = slotIndex($this, $this.n18_1, currentGroupAddress);
      $this.v18_1 = dataIndex_0($this, $this.n18_1, groupIndexToAddress($this, $this.f19_1 + 1 | 0));
      var tmp_2 = $this;
      // Inline function 'androidx.compose.runtime.nodeCount' call
      tmp_2.a19_1 = $this.n18_1[imul(currentGroupAddress, 5) + 1 | 0] & 67108863;
      $this.h19_1 = currentGroup;
      $this.f19_1 = currentGroup + 1 | 0;
      tmp_0 = currentGroup + groupSize($this.n18_1, currentGroupAddress) | 0;
    }
    tmp.g19_1 = tmp_0;
  }
  function Companion_3() {
  }
  var Companion_instance_4;
  function Companion_getInstance_3() {
    return Companion_instance_4;
  }
  function containsGroupMark($this, group) {
    var tmp;
    if (group >= 0) {
      var tmp0 = $this.n18_1;
      // Inline function 'androidx.compose.runtime.containsMark' call
      var address = groupIndexToAddress($this, group);
      tmp = !((tmp0[imul(address, 5) + 1 | 0] & 67108864) === 0);
    } else {
      tmp = false;
    }
    return tmp;
  }
  function containsAnyGroupMarks($this, group) {
    var tmp;
    if (group >= 0) {
      var tmp0 = $this.n18_1;
      // Inline function 'androidx.compose.runtime.containsAnyMark' call
      var address = groupIndexToAddress($this, group);
      tmp = !((tmp0[imul(address, 5) + 1 | 0] & 201326592) === 0);
    } else {
      tmp = false;
    }
    return tmp;
  }
  function recalculateMarks($this) {
    var tmp0_safe_receiver = $this.j19_1;
    var tmp = tmp0_safe_receiver;
    if ((tmp == null ? null : new PrioritySet(tmp)) == null)
      null;
    else {
      var tmp_0 = tmp0_safe_receiver;
      // Inline function 'kotlin.let' call
      var set = (tmp_0 == null ? null : new PrioritySet(tmp_0)).r1v_1;
      while (PrioritySet__isNotEmpty_impl_q82m5n(set)) {
        updateContainsMarkNow($this, PrioritySet__takeMax_impl_e5irrm(set), set);
      }
    }
  }
  function updateContainsMark($this, group) {
    if (group >= 0) {
      var tmp0_elvis_lhs = $this.j19_1;
      var tmp;
      var tmp_0 = tmp0_elvis_lhs;
      if ((tmp_0 == null ? null : new PrioritySet(tmp_0)) == null) {
        // Inline function 'kotlin.also' call
        var this_0 = new PrioritySet(_PrioritySet___init__impl__yrk5ut());
        $this.j19_1 = this_0.r1v_1;
        tmp = this_0.r1v_1;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      PrioritySet__add_impl_enzb2u(tmp, group);
    }
  }
  function updateContainsMarkNow($this, group, set) {
    var groupAddress = groupIndexToAddress($this, group);
    var containsAnyMarks = childContainsAnyMarks($this, group);
    // Inline function 'androidx.compose.runtime.containsMark' call
    var markChanges = !(!(($this.n18_1[imul(groupAddress, 5) + 1 | 0] & 67108864) === 0) === containsAnyMarks);
    if (markChanges) {
      updateContainsMark_0($this.n18_1, groupAddress, containsAnyMarks);
      var parent = $this.q19(group);
      if (parent >= 0) {
        PrioritySet__add_impl_enzb2u(set, parent);
      }
    }
  }
  function childContainsAnyMarks($this, group) {
    var child = group + 1 | 0;
    var end = group + $this.m1b(group) | 0;
    while (child < end) {
      var tmp0 = $this.n18_1;
      // Inline function 'androidx.compose.runtime.containsAnyMark' call
      var address = groupIndexToAddress($this, child);
      if (!((tmp0[imul(address, 5) + 1 | 0] & 201326592) === 0))
        return true;
      child = child + $this.m1b(child) | 0;
    }
    return false;
  }
  function saveCurrentGroupEnd($this) {
    $this.c19_1.y16((_get_capacity__a9k9f3($this) - $this.t18_1 | 0) - $this.g19_1 | 0);
  }
  function restoreCurrentGroupEnd($this) {
    var newGroupEnd = (_get_capacity__a9k9f3($this) - $this.t18_1 | 0) - $this.c19_1.j18() | 0;
    $this.g19_1 = newGroupEnd;
    return newGroupEnd;
  }
  function fixParentAnchorsFor($this, parent, endGroup, firstChild) {
    var parentAnchor = parentIndexToAnchor($this, parent, $this.s18_1);
    var child = firstChild;
    while (child < endGroup) {
      var tmp0 = $this.n18_1;
      // Inline function 'androidx.compose.runtime.updateParentAnchor' call
      var address = groupIndexToAddress($this, child);
      tmp0[imul(address, 5) + 2 | 0] = parentAnchor;
      var childEnd = child + groupSize($this.n18_1, groupIndexToAddress($this, child)) | 0;
      fixParentAnchorsFor($this, child, childEnd, child + 1 | 0);
      child = childEnd;
    }
  }
  function moveGroupGapTo($this, index) {
    var gapLen = $this.t18_1;
    var gapStart = $this.s18_1;
    if (!(gapStart === index)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!$this.p18_1.r()) {
        updateAnchors($this, gapStart, index);
      }
      if (gapLen > 0) {
        var groups = $this.n18_1;
        var groupPhysicalAddress = imul(index, 5);
        var groupPhysicalGapLen = imul(gapLen, 5);
        var groupPhysicalGapStart = imul(gapStart, 5);
        if (index < gapStart) {
          // Inline function 'kotlin.collections.copyInto' call
          var destinationOffset = groupPhysicalAddress + groupPhysicalGapLen | 0;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp = groups;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp, groups, destinationOffset, groupPhysicalAddress, groupPhysicalGapStart);
        } else {
          var tmp6 = groupPhysicalGapStart + groupPhysicalGapLen | 0;
          // Inline function 'kotlin.collections.copyInto' call
          var endIndex = groupPhysicalAddress + groupPhysicalGapLen | 0;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_0 = groups;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp_0, groups, groupPhysicalGapStart, tmp6, endIndex);
        }
      }
      var groupAddress = index < gapStart ? index + gapLen | 0 : gapStart;
      var capacity = _get_capacity__a9k9f3($this);
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(groupAddress < capacity)) {
        var tmp$ret$11 = 'Check failed';
        composeImmediateRuntimeError(tmp$ret$11);
      }
      while (groupAddress < capacity) {
        var tmp0 = $this.n18_1;
        // Inline function 'androidx.compose.runtime.parentAnchor' call
        var address = groupAddress;
        var oldAnchor = tmp0[imul(address, 5) + 2 | 0];
        var oldIndex = parentAnchorToIndex($this, oldAnchor);
        var newAnchor = parentIndexToAnchor($this, oldIndex, index);
        if (!(newAnchor === oldAnchor)) {
          var tmp0_0 = $this.n18_1;
          // Inline function 'androidx.compose.runtime.updateParentAnchor' call
          var address_0 = groupAddress;
          tmp0_0[imul(address_0, 5) + 2 | 0] = newAnchor;
        }
        groupAddress = groupAddress + 1 | 0;
        if (groupAddress === index)
          groupAddress = groupAddress + gapLen | 0;
      }
    }
    $this.s18_1 = index;
  }
  function moveSlotGapTo($this, index, group) {
    var gapLen = $this.x18_1;
    var gapStart = $this.w18_1;
    var slotsGapOwner = $this.y18_1;
    if (!(gapStart === index)) {
      var slots = $this.o18_1;
      if (index < gapStart) {
        // Inline function 'androidx.compose.runtime.collection.fastCopyInto' call
        // Inline function 'kotlin.collections.copyInto' call
        var destinationOffset = index + gapLen | 0;
        arrayCopy(slots, slots, destinationOffset, index, gapStart);
      } else {
        var tmp6 = gapStart + gapLen | 0;
        // Inline function 'androidx.compose.runtime.collection.fastCopyInto' call
        // Inline function 'kotlin.collections.copyInto' call
        var endIndex = index + gapLen | 0;
        arrayCopy(slots, slots, gapStart, tmp6, endIndex);
      }
    }
    var tmp0 = group + 1 | 0;
    // Inline function 'kotlin.math.min' call
    var b = $this.d1v();
    var newSlotsGapOwner = Math.min(tmp0, b);
    if (!(slotsGapOwner === newSlotsGapOwner)) {
      var slotsSize = $this.o18_1.length - gapLen | 0;
      if (newSlotsGapOwner < slotsGapOwner) {
        var updateAddress = groupIndexToAddress($this, newSlotsGapOwner);
        var stopUpdateAddress = groupIndexToAddress($this, slotsGapOwner);
        var groupGapStart = $this.s18_1;
        while (updateAddress < stopUpdateAddress) {
          var tmp0_0 = $this.n18_1;
          // Inline function 'androidx.compose.runtime.dataAnchor' call
          var address = updateAddress;
          var anchor = tmp0_0[imul(address, 5) + 4 | 0];
          // Inline function 'androidx.compose.runtime.runtimeCheck' call
          if (!(anchor >= 0)) {
            var tmp$ret$6 = 'Unexpected anchor value, expected a positive anchor';
            composeImmediateRuntimeError(tmp$ret$6);
          }
          var tmp0_1 = $this.n18_1;
          var tmp2 = updateAddress;
          // Inline function 'androidx.compose.runtime.updateDataAnchor' call
          var anchor_0 = -((slotsSize - anchor | 0) + 1 | 0) | 0;
          tmp0_1[imul(tmp2, 5) + 4 | 0] = anchor_0;
          updateAddress = updateAddress + 1 | 0;
          if (updateAddress === groupGapStart)
            updateAddress = updateAddress + $this.t18_1 | 0;
        }
      } else {
        var updateAddress_0 = groupIndexToAddress($this, slotsGapOwner);
        var stopUpdateAddress_0 = groupIndexToAddress($this, newSlotsGapOwner);
        while (updateAddress_0 < stopUpdateAddress_0) {
          var tmp0_2 = $this.n18_1;
          // Inline function 'androidx.compose.runtime.dataAnchor' call
          var address_0 = updateAddress_0;
          var anchor_1 = tmp0_2[imul(address_0, 5) + 4 | 0];
          // Inline function 'androidx.compose.runtime.runtimeCheck' call
          if (!(anchor_1 < 0)) {
            var tmp$ret$10 = 'Unexpected anchor value, expected a negative anchor';
            composeImmediateRuntimeError(tmp$ret$10);
          }
          var tmp0_3 = $this.n18_1;
          var tmp2_0 = updateAddress_0;
          // Inline function 'androidx.compose.runtime.updateDataAnchor' call
          var anchor_2 = (slotsSize + anchor_1 | 0) + 1 | 0;
          tmp0_3[imul(tmp2_0, 5) + 4 | 0] = anchor_2;
          updateAddress_0 = updateAddress_0 + 1 | 0;
          if (updateAddress_0 === $this.s18_1)
            updateAddress_0 = updateAddress_0 + $this.t18_1 | 0;
        }
      }
      $this.y18_1 = newSlotsGapOwner;
    }
    $this.w18_1 = index;
  }
  function clearSlotGap($this) {
    var slotsGapStart = $this.w18_1;
    var slotsGapEnd = slotsGapStart + $this.x18_1 | 0;
    fill_0($this.o18_1, null, slotsGapStart, slotsGapEnd);
  }
  function insertGroups($this, size) {
    if (size > 0) {
      var currentGroup = $this.f19_1;
      moveGroupGapTo($this, currentGroup);
      var gapStart = $this.s18_1;
      var gapLen = $this.t18_1;
      var oldCapacity = $this.n18_1.length / 5 | 0;
      var oldSize = oldCapacity - gapLen | 0;
      if (gapLen < size) {
        var groups = $this.n18_1;
        var tmp0 = imul(oldCapacity, 2);
        // Inline function 'kotlin.math.max' call
        var b = oldSize + size | 0;
        // Inline function 'kotlin.math.max' call
        var a = Math.max(tmp0, b);
        var newCapacity = Math.max(a, 32);
        var newGroups = new Int32Array(imul(newCapacity, 5));
        var newGapLen = newCapacity - oldSize | 0;
        var oldGapEndAddress = gapStart + gapLen | 0;
        var newGapEndAddress = gapStart + newGapLen | 0;
        // Inline function 'kotlin.collections.copyInto' call
        var endIndex = imul(gapStart, 5);
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = groups;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp, newGroups, 0, 0, endIndex);
        var tmp4 = imul(newGapEndAddress, 5);
        var tmp6 = imul(oldGapEndAddress, 5);
        // Inline function 'kotlin.collections.copyInto' call
        var endIndex_0 = imul(oldCapacity, 5);
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = groups;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp_0, newGroups, tmp4, tmp6, endIndex_0);
        $this.n18_1 = newGroups;
        gapLen = newGapLen;
      }
      var currentEnd = $this.g19_1;
      if (currentEnd >= gapStart)
        $this.g19_1 = currentEnd + size | 0;
      $this.s18_1 = gapStart + size | 0;
      $this.t18_1 = gapLen - size | 0;
      var index = oldSize > 0 ? dataIndex($this, currentGroup + size | 0) : 0;
      var anchor = dataIndexToDataAnchor($this, index, $this.y18_1 < gapStart ? 0 : $this.w18_1, $this.x18_1, $this.o18_1.length);
      var inductionVariable = gapStart;
      var last = gapStart + size | 0;
      if (inductionVariable < last)
        do {
          var groupAddress = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.updateDataAnchor' call
          $this.n18_1[imul(groupAddress, 5) + 4 | 0] = anchor;
        }
         while (inductionVariable < last);
      var slotsGapOwner = $this.y18_1;
      if (slotsGapOwner >= gapStart) {
        $this.y18_1 = slotsGapOwner + size | 0;
      }
    }
  }
  function insertSlots($this, size, group) {
    if (size > 0) {
      moveSlotGapTo($this, $this.u18_1, group);
      var gapStart = $this.w18_1;
      var gapLen = $this.x18_1;
      if (gapLen < size) {
        var slots = $this.o18_1;
        var oldCapacity = slots.length;
        var oldSize = oldCapacity - gapLen | 0;
        var tmp0 = imul(oldCapacity, 2);
        // Inline function 'kotlin.math.max' call
        var b = oldSize + size | 0;
        // Inline function 'kotlin.math.max' call
        var a = Math.max(tmp0, b);
        var newCapacity = Math.max(a, 32);
        var tmp = 0;
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp_0 = Array(newCapacity);
        while (tmp < newCapacity) {
          tmp_0[tmp] = null;
          tmp = tmp + 1 | 0;
        }
        var newData = tmp_0;
        var newGapLen = newCapacity - oldSize | 0;
        var oldGapEndAddress = gapStart + gapLen | 0;
        var newGapEndAddress = gapStart + newGapLen | 0;
        // Inline function 'androidx.compose.runtime.collection.fastCopyInto' call
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(slots, newData, 0, 0, gapStart);
        // Inline function 'androidx.compose.runtime.collection.fastCopyInto' call
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(slots, newData, newGapEndAddress, oldGapEndAddress, oldCapacity);
        $this.o18_1 = newData;
        gapLen = newGapLen;
      }
      var currentDataEnd = $this.v18_1;
      if (currentDataEnd >= gapStart)
        $this.v18_1 = currentDataEnd + size | 0;
      $this.w18_1 = gapStart + size | 0;
      $this.x18_1 = gapLen - size | 0;
    }
  }
  function removeGroups($this, start, len) {
    var tmp;
    if (len > 0) {
      var anchorsRemoved = false;
      var anchors = $this.p18_1;
      moveGroupGapTo($this, start);
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!anchors.r()) {
        anchorsRemoved = removeAnchors($this, start, len, $this.q18_1);
      }
      $this.s18_1 = start;
      var previousGapLen = $this.t18_1;
      var newGapLen = previousGapLen + len | 0;
      $this.t18_1 = newGapLen;
      var slotsGapOwner = $this.y18_1;
      if (slotsGapOwner > start) {
        var tmp_0 = $this;
        // Inline function 'kotlin.math.max' call
        var b = slotsGapOwner - len | 0;
        tmp_0.y18_1 = Math.max(start, b);
      }
      if ($this.g19_1 >= $this.s18_1)
        $this.g19_1 = $this.g19_1 - len | 0;
      var parent = $this.h19_1;
      if (containsGroupMark($this, parent)) {
        updateContainsMark($this, parent);
      }
      tmp = anchorsRemoved;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function sourceInformationOf($this, group) {
    var tmp0_safe_receiver = $this.q18_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp0_safe_receiver_0 = $this.s1v(group);
      var tmp_0;
      if (tmp0_safe_receiver_0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_0 = tmp0_safe_receiver.h2(tmp0_safe_receiver_0);
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function removeSlots($this, start, len, group) {
    if (len > 0) {
      var gapLen = $this.x18_1;
      var removeEnd = start + len | 0;
      moveSlotGapTo($this, removeEnd, group);
      $this.w18_1 = start;
      $this.x18_1 = gapLen + len | 0;
      fill_0($this.o18_1, null, start, start + len | 0);
      var currentDataEnd = $this.v18_1;
      if (currentDataEnd >= start)
        $this.v18_1 = currentDataEnd - len | 0;
    }
  }
  function updateNodeOfGroup($this, index, value) {
    var address = groupIndexToAddress($this, index);
    var tmp;
    if (address < $this.n18_1.length) {
      // Inline function 'androidx.compose.runtime.isNode' call
      tmp = !(($this.n18_1[imul(address, 5) + 1 | 0] & 1073741824) === 0);
    } else {
      tmp = false;
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!tmp) {
      var tmp$ret$1 = 'Updating the node of a group at ' + index + ' that was not created with as a node group';
      composeImmediateRuntimeError(tmp$ret$1);
    }
    $this.o18_1[dataIndexToDataAddress($this, nodeIndex($this, $this.n18_1, address))] = value;
  }
  function updateAnchors($this, previousGapStart, newGapStart) {
    var gapLen = $this.t18_1;
    var size = _get_capacity__a9k9f3($this) - gapLen | 0;
    if (previousGapStart < newGapStart) {
      var index = locationOf($this.p18_1, previousGapStart, size);
      $l$loop_0: while (index < $this.p18_1.j()) {
        var anchor = $this.p18_1.p(index);
        var location = anchor.o1i_1;
        if (location < 0) {
          var newLocation = size + location | 0;
          if (newLocation < newGapStart) {
            anchor.o1i_1 = size + location | 0;
            index = index + 1 | 0;
          } else
            break $l$loop_0;
        } else
          break $l$loop_0;
      }
    } else {
      var index_0 = locationOf($this.p18_1, newGapStart, size);
      $l$loop_1: while (index_0 < $this.p18_1.j()) {
        var anchor_0 = $this.p18_1.p(index_0);
        var location_0 = anchor_0.o1i_1;
        if (location_0 >= 0) {
          anchor_0.o1i_1 = -(size - location_0 | 0) | 0;
          index_0 = index_0 + 1 | 0;
        } else
          break $l$loop_1;
      }
    }
  }
  function removeAnchors($this, gapStart, size, sourceInformationMap) {
    var gapLen = $this.t18_1;
    var removeEnd = gapStart + size | 0;
    var groupsSize = _get_capacity__a9k9f3($this) - gapLen | 0;
    // Inline function 'kotlin.let' call
    var it = locationOf($this.p18_1, gapStart + size | 0, groupsSize);
    var index = it >= $this.p18_1.j() ? it - 1 | 0 : it;
    var removeAnchorEnd = 0;
    var removeAnchorStart = index + 1 | 0;
    $l$loop: while (index >= 0) {
      var anchor = $this.p18_1.p(index);
      var location = $this.i1d(anchor);
      if (location >= gapStart) {
        if (location < removeEnd) {
          anchor.o1i_1 = -2147483648;
          if (sourceInformationMap == null)
            null;
          else
            sourceInformationMap.m2(anchor);
          removeAnchorStart = index;
          if (removeAnchorEnd === 0)
            removeAnchorEnd = index + 1 | 0;
        }
        index = index - 1 | 0;
      } else
        break $l$loop;
    }
    // Inline function 'kotlin.also' call
    var this_0 = removeAnchorStart < removeAnchorEnd;
    if (this_0) {
      $this.p18_1.c2(removeAnchorStart, removeAnchorEnd).y1();
    }
    return this_0;
  }
  function moveAnchors($this, originalLocation, newLocation, size) {
    var end = originalLocation + size | 0;
    var groupsSize = $this.d1v();
    var index = locationOf($this.p18_1, originalLocation, groupsSize);
    // Inline function 'kotlin.collections.mutableListOf' call
    var removedAnchors = ArrayList_init_$Create$();
    if (index >= 0) {
      $l$loop: while (index < $this.p18_1.j()) {
        var anchor = $this.p18_1.p(index);
        var location = $this.i1d(anchor);
        if (location >= originalLocation && location < end) {
          removedAnchors.e(anchor);
          $this.p18_1.b2(index);
        } else
          break $l$loop;
      }
    }
    var moveDelta = newLocation - originalLocation | 0;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var inductionVariable = 0;
    var last = removedAnchors.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index_0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = removedAnchors.p(index_0);
        var anchorIndex = $this.i1d(item);
        var newAnchorIndex = anchorIndex + moveDelta | 0;
        if (newAnchorIndex >= $this.s18_1) {
          item.o1i_1 = -(groupsSize - newAnchorIndex | 0) | 0;
        } else {
          item.o1i_1 = newAnchorIndex;
        }
        var insertIndex = locationOf($this.p18_1, newAnchorIndex, groupsSize);
        $this.p18_1.a2(insertIndex, item);
      }
       while (inductionVariable <= last);
  }
  function _get_capacity__a9k9f3($this) {
    return $this.n18_1.length / 5 | 0;
  }
  function groupIndexToAddress($this, index) {
    return index + imul($this.t18_1, index < $this.s18_1 ? 0 : 1) | 0;
  }
  function dataIndexToDataAddress($this, dataIndex) {
    return dataIndex + imul($this.x18_1, dataIndex < $this.w18_1 ? 0 : 1) | 0;
  }
  function parent($this, _this__u8e3s4, index) {
    // Inline function 'androidx.compose.runtime.parentAnchor' call
    var address = groupIndexToAddress($this, index);
    var tmp$ret$0 = _this__u8e3s4[imul(address, 5) + 2 | 0];
    return parentAnchorToIndex($this, tmp$ret$0);
  }
  function dataIndex($this, index) {
    return dataIndex_0($this, $this.n18_1, groupIndexToAddress($this, index));
  }
  function dataIndex_0($this, _this__u8e3s4, address) {
    var tmp;
    if (address >= _get_capacity__a9k9f3($this)) {
      tmp = $this.o18_1.length - $this.x18_1 | 0;
    } else {
      // Inline function 'androidx.compose.runtime.dataAnchor' call
      var tmp$ret$0 = _this__u8e3s4[imul(address, 5) + 4 | 0];
      tmp = dataAnchorToDataIndex($this, tmp$ret$0, $this.x18_1, $this.o18_1.length);
    }
    return tmp;
  }
  function slotIndex($this, _this__u8e3s4, address) {
    return address >= _get_capacity__a9k9f3($this) ? $this.o18_1.length - $this.x18_1 | 0 : dataAnchorToDataIndex($this, slotAnchor(_this__u8e3s4, address), $this.x18_1, $this.o18_1.length);
  }
  function updateDataIndex($this, _this__u8e3s4, address, dataIndex) {
    // Inline function 'androidx.compose.runtime.updateDataAnchor' call
    var anchor = dataIndexToDataAnchor($this, dataIndex, $this.w18_1, $this.x18_1, $this.o18_1.length);
    _this__u8e3s4[imul(address, 5) + 4 | 0] = anchor;
  }
  function nodeIndex($this, _this__u8e3s4, address) {
    return dataIndex_0($this, _this__u8e3s4, address);
  }
  function auxIndex($this, _this__u8e3s4, address) {
    var tmp = dataIndex_0($this, _this__u8e3s4, address);
    // Inline function 'androidx.compose.runtime.groupInfo' call
    // Inline function 'androidx.compose.runtime.countOneBits' call
    var value = _this__u8e3s4[imul(address, 5) + 1 | 0] >> 29;
    return tmp + countOneBits(value) | 0;
  }
  function dataIndexToDataAnchor($this, index, gapStart, gapLen, capacity) {
    return index > gapStart ? -(((capacity - gapLen | 0) - index | 0) + 1 | 0) | 0 : index;
  }
  function dataAnchorToDataIndex($this, anchor, gapLen, capacity) {
    return anchor < 0 ? ((capacity - gapLen | 0) + anchor | 0) + 1 | 0 : anchor;
  }
  function parentIndexToAnchor($this, index, gapStart) {
    return index < gapStart ? index : -(($this.d1v() - index | 0) - -2 | 0) | 0;
  }
  function parentAnchorToIndex($this, index) {
    return index > -2 ? index : ($this.d1v() + index | 0) - -2 | 0;
  }
  function access$_get_groups__7d4n3r($this) {
    return $this.n18_1;
  }
  function access$_get_slots__7x4q9w($this) {
    return $this.o18_1;
  }
  function access$groupIndexToAddress($this, index) {
    return groupIndexToAddress($this, index);
  }
  function access$dataIndexToDataAddress($this, dataIndex) {
    return dataIndexToDataAddress($this, dataIndex);
  }
  function access$dataIndex($this, $receiver, address) {
    return dataIndex_0($this, $receiver, address);
  }
  function SlotWriter(table) {
    this.m18_1 = table;
    this.n18_1 = this.m18_1.i16_1;
    this.o18_1 = this.m18_1.k16_1;
    this.p18_1 = this.m18_1.q16_1;
    this.q18_1 = this.m18_1.r16_1;
    this.r18_1 = this.m18_1.s16_1;
    this.s18_1 = this.m18_1.j16_1;
    this.t18_1 = (this.n18_1.length / 5 | 0) - this.m18_1.j16_1 | 0;
    this.u18_1 = 0;
    this.v18_1 = 0;
    this.w18_1 = this.m18_1.l16_1;
    this.x18_1 = this.o18_1.length - this.m18_1.l16_1 | 0;
    this.y18_1 = this.m18_1.j16_1;
    this.z18_1 = 0;
    this.a19_1 = 0;
    this.b19_1 = new IntStack();
    this.c19_1 = new IntStack();
    this.d19_1 = new IntStack();
    this.e19_1 = null;
    this.f19_1 = 0;
    this.g19_1 = this.m18_1.j16_1;
    this.h19_1 = -1;
    this.i19_1 = false;
    this.j19_1 = null;
  }
  protoOf(SlotWriter).u1b = function () {
    return this.f19_1 === this.g19_1;
  };
  protoOf(SlotWriter).t1j = function () {
    return this.o18_1.length - this.x18_1 | 0;
  };
  protoOf(SlotWriter).q1i = function () {
    var tmp;
    if (this.f19_1 < this.g19_1) {
      var tmp0 = this.n18_1;
      // Inline function 'androidx.compose.runtime.isNode' call
      var address = groupIndexToAddress(this, this.f19_1);
      tmp = !((tmp0[imul(address, 5) + 1 | 0] & 1073741824) === 0);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SlotWriter).j1k = function () {
    return !(this.q18_1 == null);
  };
  protoOf(SlotWriter).k1k = function () {
    return !(this.r18_1 == null);
  };
  protoOf(SlotWriter).i1c = function (index) {
    var tmp0 = this.n18_1;
    // Inline function 'androidx.compose.runtime.isNode' call
    var address = groupIndexToAddress(this, index);
    return !((tmp0[imul(address, 5) + 1 | 0] & 1073741824) === 0);
  };
  protoOf(SlotWriter).j1c = function (index) {
    var tmp0 = this.n18_1;
    // Inline function 'androidx.compose.runtime.nodeCount' call
    var address = groupIndexToAddress(this, index);
    return tmp0[imul(address, 5) + 1 | 0] & 67108863;
  };
  protoOf(SlotWriter).t19 = function (index) {
    var tmp0 = this.n18_1;
    // Inline function 'androidx.compose.runtime.key' call
    var address = groupIndexToAddress(this, index);
    return tmp0[imul(address, 5)];
  };
  protoOf(SlotWriter).u19 = function (index) {
    var address = groupIndexToAddress(this, index);
    var tmp;
    // Inline function 'androidx.compose.runtime.hasObjectKey' call
    if (!((this.n18_1[imul(address, 5) + 1 | 0] & 536870912) === 0)) {
      tmp = this.o18_1[objectKeyIndex(this.n18_1, address)];
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(SlotWriter).m1b = function (index) {
    return groupSize(this.n18_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).s19 = function (index) {
    var address = groupIndexToAddress(this, index);
    var tmp;
    // Inline function 'androidx.compose.runtime.hasAux' call
    if (!((this.n18_1[imul(address, 5) + 1 | 0] & 268435456) === 0)) {
      tmp = this.o18_1[auxIndex(this, this.n18_1, address)];
    } else {
      tmp = Companion_getInstance().f1a_1;
    }
    return tmp;
  };
  protoOf(SlotWriter).t1v = function (index) {
    return index > this.h19_1 && index < this.g19_1 || (this.h19_1 === 0 && index === 0);
  };
  protoOf(SlotWriter).u1v = function (index) {
    return this.v1v(index, this.f19_1);
  };
  protoOf(SlotWriter).v1v = function (index, group) {
    var tmp;
    if (group === this.h19_1) {
      tmp = this.g19_1;
    } else if (group > this.b19_1.y1v(0)) {
      tmp = group + this.m1b(group) | 0;
    } else {
      var openIndex = this.b19_1.w1v(group);
      tmp = openIndex < 0 ? group + this.m1b(group) | 0 : (_get_capacity__a9k9f3(this) - this.t18_1 | 0) - this.c19_1.x1v(openIndex) | 0;
    }
    var end = tmp;
    return index > group && index < end;
  };
  protoOf(SlotWriter).g1e = function (index) {
    var address = groupIndexToAddress(this, index);
    var tmp;
    // Inline function 'androidx.compose.runtime.isNode' call
    if (!((this.n18_1[imul(address, 5) + 1 | 0] & 1073741824) === 0)) {
      tmp = this.o18_1[dataIndexToDataAddress(this, nodeIndex(this, this.n18_1, address))];
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(SlotWriter).z1v = function (anchor) {
    return this.g1e(anchor.a1w(this));
  };
  protoOf(SlotWriter).q19 = function (index) {
    return parent(this, this.n18_1, index);
  };
  protoOf(SlotWriter).a1a = function (normalClose) {
    this.i19_1 = true;
    var tmp;
    if (normalClose) {
      // Inline function 'androidx.compose.runtime.IntStack.isEmpty' call
      tmp = this.b19_1.x16_1 === 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      moveGroupGapTo(this, this.d1v());
      moveSlotGapTo(this, this.o18_1.length - this.x18_1 | 0, this.s18_1);
      clearSlotGap(this);
      recalculateMarks(this);
    }
    this.m18_1.a1v(this, this.n18_1, this.s18_1, this.o18_1, this.w18_1, this.p18_1, this.q18_1, this.r18_1);
  };
  protoOf(SlotWriter).b1w = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.z18_1 === 0)) {
      var tmp$ret$0 = 'Cannot reset when inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    recalculateMarks(this);
    this.f19_1 = 0;
    this.g19_1 = _get_capacity__a9k9f3(this) - this.t18_1 | 0;
    this.u18_1 = 0;
    this.v18_1 = 0;
    this.a19_1 = 0;
  };
  protoOf(SlotWriter).u1h = function (value) {
    if (this.z18_1 > 0 && !(this.u18_1 === this.w18_1)) {
      var tmp0_elvis_lhs = this.e19_1;
      // Inline function 'kotlin.also' call
      var this_0 = tmp0_elvis_lhs == null ? new MutableIntObjectMap() : tmp0_elvis_lhs;
      this.e19_1 = this_0;
      // Inline function 'androidx.collection.MutableIntObjectMap.getOrPut' call
      var key = this.h19_1;
      var tmp0_elvis_lhs_0 = this_0.p(key);
      var tmp;
      if (tmp0_elvis_lhs_0 == null) {
        // Inline function 'kotlin.also' call
        var this_1 = new MutableObjectList();
        this_0.xw(key, this_1);
        tmp = this_1;
      } else {
        tmp = tmp0_elvis_lhs_0;
      }
      var deferred = tmp;
      deferred.e(value);
      return Companion_getInstance().f1a_1;
    }
    return rawUpdate(this, value);
  };
  protoOf(SlotWriter).c1w = function (anchor, value) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.z18_1 === 0)) {
      var tmp$ret$0 = 'Can only append a slot if not current inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var previousCurrentSlot = this.u18_1;
    var previousCurrentSlotEnd = this.v18_1;
    var anchorIndex = this.i1d(anchor);
    var slotIndex = dataIndex_0(this, this.n18_1, groupIndexToAddress(this, anchorIndex + 1 | 0));
    this.u18_1 = slotIndex;
    this.v18_1 = slotIndex;
    insertSlots(this, 1, anchorIndex);
    if (previousCurrentSlot >= slotIndex) {
      previousCurrentSlot = previousCurrentSlot + 1 | 0;
      previousCurrentSlotEnd = previousCurrentSlotEnd + 1 | 0;
    }
    this.o18_1[slotIndex] = value;
    this.u18_1 = previousCurrentSlot;
    this.v18_1 = previousCurrentSlotEnd;
  };
  protoOf(SlotWriter).d1w = function (count) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(count > 0)) {
      var tmp$ret$0 = 'Check failed';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var parent = this.h19_1;
    var groupSlotStart = slotIndex(this, this.n18_1, groupIndexToAddress(this, parent));
    var groupSlotEnd = dataIndex_0(this, this.n18_1, groupIndexToAddress(this, parent + 1 | 0));
    var removeStart = groupSlotEnd - count | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(removeStart >= groupSlotStart)) {
      var tmp$ret$3 = 'Check failed';
      composeImmediateRuntimeError(tmp$ret$3);
    }
    removeSlots(this, removeStart, count, parent);
    var currentSlot = this.u18_1;
    if (currentSlot >= groupSlotStart) {
      this.u18_1 = currentSlot - count | 0;
    }
  };
  protoOf(SlotWriter).p1v = function (value) {
    var address = groupIndexToAddress(this, this.f19_1);
    // Inline function 'androidx.compose.runtime.hasAux' call
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!((this.n18_1[imul(address, 5) + 1 | 0] & 268435456) === 0)) {
      var tmp$ret$1 = 'Updating the data of a group that was not created with a data slot';
      composeImmediateRuntimeError(tmp$ret$1);
    }
    this.o18_1[dataIndexToDataAddress(this, auxIndex(this, this.n18_1, address))] = value;
  };
  protoOf(SlotWriter).i1j = function (sourceInformation) {
    if (this.z18_1 > 0) {
      groupSourceInformationFor(this, this.h19_1, sourceInformation);
    }
  };
  protoOf(SlotWriter).k1j = function (key, value) {
    if (this.z18_1 > 0) {
      var tmp0_safe_receiver = this.r18_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        add_0(tmp0_safe_receiver, key, this.t19(this.h19_1));
      }
      var tmp1_safe_receiver = groupSourceInformationFor(this, this.h19_1, null);
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.e1w(key, value, _get_currentGroupSlotIndex__p1glxf(this));
      }
    }
  };
  protoOf(SlotWriter).m1j = function () {
    if (this.z18_1 > 0) {
      var tmp0_safe_receiver = groupSourceInformationFor(this, this.h19_1, null);
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.f1w(_get_currentGroupSlotIndex__p1glxf(this));
      }
    }
  };
  protoOf(SlotWriter).q1v = function (value) {
    return updateNodeOfGroup(this, this.f19_1, value);
  };
  protoOf(SlotWriter).g1w = function (anchor, value) {
    return updateNodeOfGroup(this, anchor.a1w(this), value);
  };
  protoOf(SlotWriter).m1v = function (value) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.u18_1 <= this.v18_1)) {
      var tmp$ret$0 = 'Writing to an invalid slot';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.o18_1[dataIndexToDataAddress(this, this.u18_1 - 1 | 0)] = value;
  };
  protoOf(SlotWriter).h1w = function (group, index) {
    var address = groupIndexToAddress(this, group);
    var slotsStart = slotIndex(this, this.n18_1, address);
    var slotsEnd = dataIndex_0(this, this.n18_1, groupIndexToAddress(this, group + 1 | 0));
    var slotsIndex = slotsStart + index | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(slotsIndex >= slotsStart && slotsIndex < slotsEnd)) {
      var tmp$ret$0 = 'Write to an invalid slot index ' + index + ' for group ' + group;
      composeImmediateRuntimeError(tmp$ret$0);
    }
    return slotsIndex;
  };
  protoOf(SlotWriter).i1w = function (group, index, value) {
    var slotsIndex = this.h1w(group, index);
    var slotAddress = dataIndexToDataAddress(this, slotsIndex);
    var result = this.o18_1[slotAddress];
    this.o18_1[slotAddress] = value;
    return result;
  };
  protoOf(SlotWriter).l1v = function () {
    if (this.z18_1 > 0) {
      insertSlots(this, 1, this.h19_1);
    }
    var tmp = this.o18_1;
    var _unary__edvuaz = this.u18_1;
    this.u18_1 = _unary__edvuaz + 1 | 0;
    return tmp[dataIndexToDataAddress(this, _unary__edvuaz)];
  };
  protoOf(SlotWriter).z1p = function (anchor, index) {
    return this.j1w(this.i1d(anchor), index);
  };
  protoOf(SlotWriter).j1w = function (groupIndex, index) {
    var address = groupIndexToAddress(this, groupIndex);
    var slotsStart = slotIndex(this, this.n18_1, address);
    var slotsEnd = dataIndex_0(this, this.n18_1, groupIndexToAddress(this, groupIndex + 1 | 0));
    var slotsIndex = slotsStart + index | 0;
    if (!(slotsStart <= slotsIndex ? slotsIndex < slotsEnd : false)) {
      return Companion_getInstance().f1a_1;
    }
    var slotAddress = dataIndexToDataAddress(this, slotsIndex);
    return this.o18_1[slotAddress];
  };
  protoOf(SlotWriter).o1v = function (groupIndex) {
    return slotIndex(this, this.n18_1, groupIndexToAddress(this, groupIndex));
  };
  protoOf(SlotWriter).k1w = function (groupIndex) {
    return dataIndex_0(this, this.n18_1, groupIndexToAddress(this, groupIndex + 1 | 0));
  };
  protoOf(SlotWriter).v1j = function (groupIndex) {
    return dataIndex_0(this, this.n18_1, groupIndexToAddress(this, groupIndex + this.m1b(groupIndex) | 0));
  };
  protoOf(SlotWriter).c1k = function (amount) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(amount >= 0)) {
      var tmp$ret$0 = 'Cannot seek backwards';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    if (!(this.z18_1 <= 0)) {
      var tmp$ret$2 = 'Cannot call seek() while inserting';
      throwIllegalStateException(tmp$ret$2);
    }
    if (amount === 0)
      return Unit_instance;
    var index = this.f19_1 + amount | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(index >= this.h19_1 && index <= this.g19_1)) {
      var tmp$ret$4 = 'Cannot seek outside the current group (' + this.h19_1 + '-' + this.g19_1 + ')';
      composeImmediateRuntimeError(tmp$ret$4);
    }
    this.f19_1 = index;
    var newSlot = dataIndex_0(this, this.n18_1, groupIndexToAddress(this, index));
    this.u18_1 = newSlot;
    this.v18_1 = newSlot;
  };
  protoOf(SlotWriter).w19 = function () {
    var newGroup = this.g19_1;
    this.f19_1 = newGroup;
    this.u18_1 = dataIndex_0(this, this.n18_1, groupIndexToAddress(this, newGroup));
  };
  protoOf(SlotWriter).w1a = function () {
    var _unary__edvuaz = this.z18_1;
    this.z18_1 = _unary__edvuaz + 1 | 0;
    if (_unary__edvuaz === 0) {
      saveCurrentGroupEnd(this);
    }
  };
  protoOf(SlotWriter).b1c = function () {
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    if (!(this.z18_1 > 0)) {
      var tmp$ret$0 = 'Unbalanced begin/end insert';
      throwIllegalStateException(tmp$ret$0);
    }
    this.z18_1 = this.z18_1 - 1 | 0;
    if (this.z18_1 === 0) {
      // Inline function 'androidx.compose.runtime.IntStack.size' call
      var tmp = this.d19_1.x16_1;
      // Inline function 'androidx.compose.runtime.IntStack.size' call
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(tmp === this.b19_1.x16_1)) {
        var tmp$ret$4 = 'startGroup/endGroup mismatch while inserting';
        composeImmediateRuntimeError(tmp$ret$4);
      }
      restoreCurrentGroupEnd(this);
    }
  };
  protoOf(SlotWriter).d1a = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.z18_1 === 0)) {
      var tmp$ret$0 = 'Key must be supplied when inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    startGroup_1(this, 0, Companion_getInstance().f1a_1, false, Companion_getInstance().f1a_1);
  };
  protoOf(SlotWriter).h1a = function (key, dataKey) {
    return startGroup_1(this, key, dataKey, false, Companion_getInstance().f1a_1);
  };
  protoOf(SlotWriter).j1a = function (key, objectKey) {
    return startGroup_1(this, key, objectKey, true, Companion_getInstance().f1a_1);
  };
  protoOf(SlotWriter).i1a = function (key, objectKey, aux) {
    return startGroup_1(this, key, objectKey, false, aux);
  };
  protoOf(SlotWriter).a1c = function () {
    var inserting = this.z18_1 > 0;
    var currentGroup = this.f19_1;
    var currentGroupEnd = this.g19_1;
    var groupIndex = this.h19_1;
    var groupAddress = groupIndexToAddress(this, groupIndex);
    var newNodes = this.a19_1;
    var newGroupSize = currentGroup - groupIndex | 0;
    // Inline function 'androidx.compose.runtime.isNode' call
    var isNode = !((this.n18_1[imul(groupAddress, 5) + 1 | 0] & 1073741824) === 0);
    if (inserting) {
      var deferredSlotWrites = this.e19_1;
      var tmp1_safe_receiver = deferredSlotWrites == null ? null : deferredSlotWrites.p(groupIndex);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.collection.ObjectList.forEach' call
        // Inline function 'kotlin.contracts.contract' call
        var content = tmp1_safe_receiver.zx_1;
        var inductionVariable = 0;
        var last = tmp1_safe_receiver.ay_1;
        if (inductionVariable < last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var tmp = content[i];
            var value = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
            rawUpdate(this, value);
          }
           while (inductionVariable < last);
        deferredSlotWrites.yw(groupIndex);
      }
      updateGroupSize(this.n18_1, groupAddress, newGroupSize);
      updateNodeCount_0(this.n18_1, groupAddress, newNodes);
      this.a19_1 = this.d19_1.j18() + (isNode ? 1 : newNodes) | 0;
      this.h19_1 = parent(this, this.n18_1, groupIndex);
      var nextAddress = this.h19_1 < 0 ? this.d1v() : groupIndexToAddress(this, this.h19_1 + 1 | 0);
      var newCurrentSlot = nextAddress < 0 ? 0 : dataIndex_0(this, this.n18_1, nextAddress);
      this.u18_1 = newCurrentSlot;
      this.v18_1 = newCurrentSlot;
    } else {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(currentGroup === currentGroupEnd)) {
        var tmp$ret$6 = 'Expected to be at the end of a group';
        composeImmediateRuntimeError(tmp$ret$6);
      }
      var oldGroupSize = groupSize(this.n18_1, groupAddress);
      // Inline function 'androidx.compose.runtime.nodeCount' call
      var oldNodes = this.n18_1[imul(groupAddress, 5) + 1 | 0] & 67108863;
      updateGroupSize(this.n18_1, groupAddress, newGroupSize);
      updateNodeCount_0(this.n18_1, groupAddress, newNodes);
      var newParent = this.b19_1.j18();
      restoreCurrentGroupEnd(this);
      this.h19_1 = newParent;
      var groupParent = parent(this, this.n18_1, groupIndex);
      this.a19_1 = this.d19_1.j18();
      if (groupParent === newParent) {
        this.a19_1 = this.a19_1 + (isNode ? 0 : newNodes - oldNodes | 0) | 0;
      } else {
        var groupSizeDelta = newGroupSize - oldGroupSize | 0;
        var nodesDelta = isNode ? 0 : newNodes - oldNodes | 0;
        if (!(groupSizeDelta === 0) || !(nodesDelta === 0)) {
          var current = groupParent;
          while (!(current === 0) && !(current === newParent) && (!(nodesDelta === 0) || !(groupSizeDelta === 0))) {
            var currentAddress = groupIndexToAddress(this, current);
            if (!(groupSizeDelta === 0)) {
              var newSize = groupSize(this.n18_1, currentAddress) + groupSizeDelta | 0;
              updateGroupSize(this.n18_1, currentAddress, newSize);
            }
            if (!(nodesDelta === 0)) {
              var tmp_0 = this.n18_1;
              // Inline function 'androidx.compose.runtime.nodeCount' call
              var tmp$ret$9 = this.n18_1[imul(currentAddress, 5) + 1 | 0] & 67108863;
              updateNodeCount_0(tmp_0, currentAddress, tmp$ret$9 + nodesDelta | 0);
            }
            // Inline function 'androidx.compose.runtime.isNode' call
            if (!((this.n18_1[imul(currentAddress, 5) + 1 | 0] & 1073741824) === 0))
              nodesDelta = 0;
            current = parent(this, this.n18_1, current);
          }
        }
        this.a19_1 = this.a19_1 + nodesDelta | 0;
      }
    }
    return newNodes;
  };
  protoOf(SlotWriter).l1w = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.z18_1 <= 0)) {
      var tmp$ret$0 = 'Cannot call ensureStarted() while inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var parent = this.h19_1;
    if (!(parent === index)) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(index >= parent && index < this.g19_1)) {
        var tmp$ret$2 = 'Started group at ' + index + ' must be a subgroup of the group at ' + parent;
        composeImmediateRuntimeError(tmp$ret$2);
      }
      var oldCurrent = this.f19_1;
      var oldCurrentSlot = this.u18_1;
      var oldCurrentSlotEnd = this.v18_1;
      this.f19_1 = index;
      this.d1a();
      this.f19_1 = oldCurrent;
      this.u18_1 = oldCurrentSlot;
      this.v18_1 = oldCurrentSlotEnd;
    }
  };
  protoOf(SlotWriter).m1w = function (anchor) {
    return this.l1w(anchor.a1w(this));
  };
  protoOf(SlotWriter).n19 = function () {
    var groupAddress = groupIndexToAddress(this, this.f19_1);
    var newGroup = this.f19_1 + groupSize(this.n18_1, groupAddress) | 0;
    this.f19_1 = newGroup;
    this.u18_1 = dataIndex_0(this, this.n18_1, groupIndexToAddress(this, newGroup));
    var tmp;
    // Inline function 'androidx.compose.runtime.isNode' call
    if (!((this.n18_1[imul(groupAddress, 5) + 1 | 0] & 1073741824) === 0)) {
      tmp = 1;
    } else {
      // Inline function 'androidx.compose.runtime.nodeCount' call
      tmp = this.n18_1[imul(groupAddress, 5) + 1 | 0] & 67108863;
    }
    return tmp;
  };
  protoOf(SlotWriter).z1j = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.z18_1 === 0)) {
      var tmp$ret$0 = 'Cannot remove group while inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var oldGroup = this.f19_1;
    var oldSlot = this.u18_1;
    var dataStart = dataIndex_0(this, this.n18_1, groupIndexToAddress(this, oldGroup));
    var count = this.n19();
    var tmp0_safe_receiver = sourceInformationOf(this, this.h19_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp0_safe_receiver_0 = this.s1v(oldGroup);
      var tmp;
      if (tmp0_safe_receiver_0 == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp = tmp0_safe_receiver.n1w(tmp0_safe_receiver_0);
      }
    }
    var tmp1_safe_receiver = this.j19_1;
    var tmp_0 = tmp1_safe_receiver;
    if ((tmp_0 == null ? null : new PrioritySet(tmp_0)) == null)
      null;
    else {
      var tmp_1 = tmp1_safe_receiver;
      // Inline function 'kotlin.let' call
      var it = (tmp_1 == null ? null : new PrioritySet(tmp_1)).r1v_1;
      while (PrioritySet__isNotEmpty_impl_q82m5n(it) && PrioritySet__peek_impl_la0uk4(it) >= oldGroup) {
        PrioritySet__takeMax_impl_e5irrm(it);
      }
    }
    var anchorsRemoved = removeGroups(this, oldGroup, this.f19_1 - oldGroup | 0);
    removeSlots(this, dataStart, this.u18_1 - dataStart | 0, oldGroup - 1 | 0);
    this.f19_1 = oldGroup;
    this.u18_1 = oldSlot;
    this.a19_1 = this.a19_1 - count | 0;
    return anchorsRemoved;
  };
  protoOf(SlotWriter).o1w = function (offset) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.z18_1 === 0)) {
      var tmp$ret$0 = 'Cannot move a group while inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(offset >= 0)) {
      var tmp$ret$2 = 'Parameter offset is out of bounds';
      composeImmediateRuntimeError(tmp$ret$2);
    }
    if (offset === 0)
      return Unit_instance;
    var current = this.f19_1;
    var parent = this.h19_1;
    var parentEnd = this.g19_1;
    var count = offset;
    var groupToMove = current;
    while (count > 0) {
      groupToMove = groupToMove + groupSize(this.n18_1, groupIndexToAddress(this, groupToMove)) | 0;
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(groupToMove <= parentEnd)) {
        var tmp$ret$4 = 'Parameter offset is out of bounds';
        composeImmediateRuntimeError(tmp$ret$4);
      }
      count = count - 1 | 0;
    }
    var moveLen = groupSize(this.n18_1, groupIndexToAddress(this, groupToMove));
    var destinationSlot = dataIndex_0(this, this.n18_1, groupIndexToAddress(this, this.f19_1));
    var dataStart = dataIndex_0(this, this.n18_1, groupIndexToAddress(this, groupToMove));
    var dataEnd = dataIndex_0(this, this.n18_1, groupIndexToAddress(this, groupToMove + moveLen | 0));
    var moveDataLen = dataEnd - dataStart | 0;
    // Inline function 'kotlin.math.max' call
    var a = this.f19_1 - 1 | 0;
    var tmp$ret$6 = Math.max(a, 0);
    insertSlots(this, moveDataLen, tmp$ret$6);
    insertGroups(this, moveLen);
    var groups = this.n18_1;
    var moveLocationAddress = groupIndexToAddress(this, groupToMove + moveLen | 0);
    var moveLocationOffset = imul(moveLocationAddress, 5);
    var currentAddress = groupIndexToAddress(this, current);
    var tmp4 = imul(currentAddress, 5);
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = moveLocationOffset + imul(moveLen, 5) | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = groups;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, groups, tmp4, moveLocationOffset, endIndex);
    if (moveDataLen > 0) {
      var slots = this.o18_1;
      var tmp6 = dataIndexToDataAddress(this, dataStart + moveDataLen | 0);
      // Inline function 'androidx.compose.runtime.collection.fastCopyInto' call
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex_0 = dataIndexToDataAddress(this, dataEnd + moveDataLen | 0);
      arrayCopy(slots, slots, destinationSlot, tmp6, endIndex_0);
    }
    var dataMoveDistance = (dataStart + moveDataLen | 0) - destinationSlot | 0;
    var slotsGapStart = this.w18_1;
    var slotsGapLen = this.x18_1;
    var slotsCapacity = this.o18_1.length;
    var slotsGapOwner = this.y18_1;
    var inductionVariable = current;
    var last = current + moveLen | 0;
    if (inductionVariable < last)
      do {
        var group = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var groupAddress = groupIndexToAddress(this, group);
        var oldIndex = dataIndex_0(this, groups, groupAddress);
        var newIndex = oldIndex - dataMoveDistance | 0;
        var newAnchor = dataIndexToDataAnchor(this, newIndex, slotsGapOwner < groupAddress ? 0 : slotsGapStart, slotsGapLen, slotsCapacity);
        updateDataIndex(this, groups, groupAddress, newAnchor);
      }
       while (inductionVariable < last);
    moveAnchors(this, groupToMove + moveLen | 0, current, moveLen);
    var anchorsRemoved = removeGroups(this, groupToMove + moveLen | 0, moveLen);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!anchorsRemoved) {
      var tmp$ret$14 = 'Unexpectedly removed anchors';
      composeImmediateRuntimeError(tmp$ret$14);
    }
    fixParentAnchorsFor(this, parent, this.g19_1, current);
    if (moveDataLen > 0) {
      removeSlots(this, dataStart + moveDataLen | 0, moveDataLen, (groupToMove + moveLen | 0) - 1 | 0);
    }
  };
  protoOf(SlotWriter).l1k = function (anchor, offset, writer) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(writer.z18_1 > 0)) {
      var tmp$ret$0 = 'Check failed';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.z18_1 === 0)) {
      var tmp$ret$3 = 'Check failed';
      composeImmediateRuntimeError(tmp$ret$3);
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!anchor.w1j()) {
      var tmp$ret$6 = 'Check failed';
      composeImmediateRuntimeError(tmp$ret$6);
    }
    var location = this.i1d(anchor) + offset | 0;
    var currentGroup = this.f19_1;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(currentGroup <= location ? location < this.g19_1 : false)) {
      var tmp$ret$9 = 'Check failed';
      composeImmediateRuntimeError(tmp$ret$9);
    }
    var parent = this.q19(location);
    var size = this.m1b(location);
    var nodes = this.i1c(location) ? 1 : this.j1c(location);
    var result = moveGroup$default(Companion_instance_4, this, location, writer, false, false);
    updateContainsMark(this, parent);
    var current = parent;
    var updatingNodes = nodes > 0;
    while (current >= currentGroup) {
      var currentAddress = groupIndexToAddress(this, current);
      updateGroupSize(this.n18_1, currentAddress, groupSize(this.n18_1, currentAddress) - size | 0);
      if (updatingNodes) {
        // Inline function 'androidx.compose.runtime.isNode' call
        if (!((this.n18_1[imul(currentAddress, 5) + 1 | 0] & 1073741824) === 0))
          updatingNodes = false;
        else {
          var tmp = this.n18_1;
          // Inline function 'androidx.compose.runtime.nodeCount' call
          var tmp$ret$13 = this.n18_1[imul(currentAddress, 5) + 1 | 0] & 67108863;
          updateNodeCount_0(tmp, currentAddress, tmp$ret$13 - nodes | 0);
        }
      }
      current = this.q19(current);
    }
    if (updatingNodes) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(this.a19_1 >= nodes)) {
        var tmp$ret$14 = 'Check failed';
        composeImmediateRuntimeError(tmp$ret$14);
      }
      this.a19_1 = this.a19_1 - nodes | 0;
    }
    return result;
  };
  protoOf(SlotWriter).p1w = function (table, index, removeSourceGroup) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.z18_1 > 0)) {
      var tmp$ret$0 = 'Check failed';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    if (index === 0 && this.f19_1 === 0 && this.m18_1.j16_1 === 0 && groupSize(table.i16_1, index) === table.j16_1) {
      var myGroups = this.n18_1;
      var mySlots = this.o18_1;
      var myAnchors = this.p18_1;
      var mySourceInformation = this.q18_1;
      var myCallInformation = this.r18_1;
      var groups = table.i16_1;
      var groupsSize = table.j16_1;
      var slots = table.k16_1;
      var slotsSize = table.l16_1;
      var sourceInformation = table.r16_1;
      var callInformation = table.s16_1;
      this.n18_1 = groups;
      this.o18_1 = slots;
      this.p18_1 = table.q16_1;
      this.s18_1 = groupsSize;
      this.t18_1 = (groups.length / 5 | 0) - groupsSize | 0;
      this.w18_1 = slotsSize;
      this.x18_1 = slots.length - slotsSize | 0;
      this.y18_1 = groupsSize;
      this.q18_1 = sourceInformation;
      this.r18_1 = callInformation;
      table.b1v(myGroups, 0, mySlots, 0, myAnchors, mySourceInformation, myCallInformation);
      return this.p18_1;
    }
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    var writer = table.v19();
    var normalClose = false;
    var tmp;
    try {
      // Inline function 'kotlin.also' call
      var this_0 = moveGroup(Companion_instance_4, writer, index, this, true, true, removeSourceGroup);
      normalClose = true;
      tmp = this_0;
    }finally {
      writer.a1a(normalClose);
    }
    return tmp;
  };
  protoOf(SlotWriter).q1w = function (offset, table, index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.z18_1 <= 0 && this.m1b(this.f19_1 + offset | 0) === 1)) {
      var tmp$ret$0 = 'Check failed';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var previousCurrentGroup = this.f19_1;
    var previousCurrentSlot = this.u18_1;
    var previousCurrentSlotEnd = this.v18_1;
    this.c1k(offset);
    this.d1a();
    this.w1a();
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    var writer = table.v19();
    var normalClose = false;
    var tmp;
    try {
      // Inline function 'kotlin.also' call
      var this_0 = moveGroup$default(Companion_instance_4, writer, index, this, false, true);
      normalClose = true;
      tmp = this_0;
    }finally {
      writer.a1a(normalClose);
    }
    var anchors = tmp;
    this.b1c();
    this.a1c();
    this.f19_1 = previousCurrentGroup;
    this.u18_1 = previousCurrentSlot;
    this.v18_1 = previousCurrentSlotEnd;
    return anchors;
  };
  protoOf(SlotWriter).r19 = function (index) {
    var tmp0 = this.p18_1;
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var effectiveSize = this.d1v();
    var location = search(tmp0, index, effectiveSize);
    var tmp;
    if (location < 0) {
      var anchor = new Anchor(index <= this.s18_1 ? index : -(this.d1v() - index | 0) | 0);
      tmp0.a2(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = tmp0.p(location);
    }
    return tmp;
  };
  protoOf(SlotWriter).r1w = function (group) {
    var groupAddress = groupIndexToAddress(this, group);
    // Inline function 'androidx.compose.runtime.hasMark' call
    if (!!((this.n18_1[imul(groupAddress, 5) + 1 | 0] & 134217728) === 0)) {
      updateMark(this.n18_1, groupAddress, true);
      // Inline function 'androidx.compose.runtime.containsMark' call
      if (!!((this.n18_1[imul(groupAddress, 5) + 1 | 0] & 67108864) === 0)) {
        updateContainsMark(this, this.q19(group));
      }
    }
  };
  protoOf(SlotWriter).w1c = function (group, $super) {
    group = group === VOID ? this.h19_1 : group;
    var tmp;
    if ($super === VOID) {
      this.r1w(group);
      tmp = Unit_instance;
    } else {
      tmp = $super.r1w.call(this, group);
    }
    return tmp;
  };
  protoOf(SlotWriter).i1d = function (anchor) {
    // Inline function 'kotlin.let' call
    var it = anchor.o1i_1;
    return it < 0 ? this.d1v() + it | 0 : it;
  };
  protoOf(SlotWriter).toString = function () {
    return 'SlotWriter(current = ' + this.f19_1 + ' end=' + this.g19_1 + ' size = ' + this.d1v() + ' ' + ('gap=' + this.s18_1 + '-' + (this.s18_1 + this.t18_1 | 0) + ')');
  };
  protoOf(SlotWriter).s1v = function (group) {
    return (0 <= group ? group < this.d1v() : false) ? find(this.p18_1, group, this.d1v()) : null;
  };
  protoOf(SlotWriter).d1v = function () {
    return _get_capacity__a9k9f3(this) - this.t18_1 | 0;
  };
  function Anchor(loc) {
    this.o1i_1 = loc;
  }
  protoOf(Anchor).w1j = function () {
    return !(this.o1i_1 === -2147483648);
  };
  protoOf(Anchor).p1i = function (slots) {
    return slots.i1d(this);
  };
  protoOf(Anchor).a1w = function (writer) {
    return writer.i1d(this);
  };
  protoOf(Anchor).toString = function () {
    return anyToString(this) + '{ location = ' + this.o1i_1 + ' }';
  };
  function openInformation($this) {
    var tmp0_safe_receiver = $this.h1v_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp$ret$1;
      $l$block: {
        // Inline function 'androidx.compose.runtime.fastLastOrNull' call
        var index = tmp0_safe_receiver.j() - 1 | 0;
        while (index >= 0) {
          var value = tmp0_safe_receiver.p(index);
          var tmp_0;
          if (value instanceof GroupSourceInformation) {
            tmp_0 = !value.i1v_1;
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$1 = value;
            break $l$block;
          }
          index = index - 1 | 0;
        }
        tmp$ret$1 = null;
      }
      tmp = tmp$ret$1;
    }
    var tmp_1 = tmp;
    var tmp1_safe_receiver = tmp_1 instanceof GroupSourceInformation ? tmp_1 : null;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : openInformation(tmp1_safe_receiver);
    return tmp2_elvis_lhs == null ? $this : tmp2_elvis_lhs;
  }
  function add($this, group) {
    var tmp0_elvis_lhs = $this.h1v_1;
    var groups = tmp0_elvis_lhs == null ? ArrayList_init_$Create$() : tmp0_elvis_lhs;
    $this.h1v_1 = groups;
    groups.e(group);
  }
  function hasAnchor($this, anchor) {
    var tmp0_safe_receiver = $this.h1v_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'androidx.compose.runtime.snapshots.fastAny' call
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        var inductionVariable = 0;
        var last = tmp0_safe_receiver.j() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = tmp0_safe_receiver.p(index);
            var tmp_0;
            if (equals(item, anchor)) {
              tmp_0 = true;
            } else {
              var tmp_1;
              if (item instanceof GroupSourceInformation) {
                tmp_1 = hasAnchor(item, anchor);
              } else {
                tmp_1 = false;
              }
              tmp_0 = tmp_1;
            }
            if (tmp_0) {
              tmp$ret$1 = true;
              break $l$block;
            }
          }
           while (inductionVariable <= last);
        tmp$ret$1 = false;
      }
      tmp = tmp$ret$1;
    }
    return tmp === true;
  }
  function GroupSourceInformation(key, sourceInformation, dataStartOffset) {
    this.e1v_1 = key;
    this.f1v_1 = sourceInformation;
    this.g1v_1 = dataStartOffset;
    this.h1v_1 = null;
    this.i1v_1 = false;
    this.j1v_1 = 0;
  }
  protoOf(GroupSourceInformation).e1w = function (key, sourceInformation, dataOffset) {
    add(openInformation(this), new GroupSourceInformation(key, sourceInformation, dataOffset));
  };
  protoOf(GroupSourceInformation).f1w = function (dataOffset) {
    openInformation(this).s1w(dataOffset);
  };
  protoOf(GroupSourceInformation).n1v = function (writer, group) {
    add(openInformation(this), writer.r19(group));
  };
  protoOf(GroupSourceInformation).t1w = function (table, group) {
    add(openInformation(this), table.r19(group));
  };
  protoOf(GroupSourceInformation).k1v = function (writer, predecessor, group) {
    var tmp0_elvis_lhs = this.h1v_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = ArrayList_init_$Create$();
      this.h1v_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var groups = tmp;
    var tmp_0;
    if (predecessor >= 0) {
      var anchor = writer.s1v(predecessor);
      var tmp_1;
      if (!(anchor == null)) {
        var tmp$ret$3;
        $l$block: {
          // Inline function 'androidx.compose.runtime.fastIndexOf' call
          var index = 0;
          var size = groups.j();
          while (index < size) {
            var value = groups.p(index);
            var tmp_2;
            if (equals(value, anchor)) {
              tmp_2 = true;
            } else {
              var tmp_3;
              if (value instanceof GroupSourceInformation) {
                tmp_3 = hasAnchor(value, anchor);
              } else {
                tmp_3 = false;
              }
              tmp_2 = tmp_3;
            }
            if (tmp_2) {
              tmp$ret$3 = index;
              break $l$block;
            }
            index = index + 1 | 0;
          }
          tmp$ret$3 = -1;
        }
        tmp_1 = tmp$ret$3;
      } else {
        tmp_1 = 0;
      }
      tmp_0 = tmp_1;
    } else {
      tmp_0 = 0;
    }
    var index_0 = tmp_0;
    groups.a2(index_0, writer.r19(group));
  };
  protoOf(GroupSourceInformation).s1w = function (dataOffset) {
    this.i1v_1 = true;
    this.j1v_1 = dataOffset;
  };
  protoOf(GroupSourceInformation).n1w = function (anchor) {
    var groups = this.h1v_1;
    if (!(groups == null)) {
      var index = groups.j() - 1 | 0;
      while (index >= 0) {
        var item = groups.p(index);
        if (item instanceof Anchor) {
          if (equals(item, anchor)) {
            groups.b2(index);
          }
        } else {
          if (item instanceof GroupSourceInformation)
            if (!item.n1w(anchor)) {
              groups.b2(index);
            }
        }
        index = index - 1 | 0;
      }
      if (groups.r()) {
        this.h1v_1 = null;
        return false;
      }
      return true;
    }
    return true;
  };
  function node($this, _this__u8e3s4, index) {
    var tmp;
    // Inline function 'androidx.compose.runtime.isNode' call
    if (!((_this__u8e3s4[imul(index, 5) + 1 | 0] & 1073741824) === 0)) {
      // Inline function 'androidx.compose.runtime.nodeIndex' call
      var tmp$ret$1 = _this__u8e3s4[imul(index, 5) + 4 | 0];
      tmp = $this.w17_1[tmp$ret$1];
    } else {
      tmp = Companion_getInstance().f1a_1;
    }
    return tmp;
  }
  function aux($this, _this__u8e3s4, index) {
    var tmp;
    // Inline function 'androidx.compose.runtime.hasAux' call
    if (!((_this__u8e3s4[imul(index, 5) + 1 | 0] & 268435456) === 0)) {
      tmp = $this.w17_1[auxIndex_0(_this__u8e3s4, index)];
    } else {
      tmp = Companion_getInstance().f1a_1;
    }
    return tmp;
  }
  function objectKey($this, _this__u8e3s4, index) {
    var tmp;
    // Inline function 'androidx.compose.runtime.hasObjectKey' call
    if (!((_this__u8e3s4[imul(index, 5) + 1 | 0] & 536870912) === 0)) {
      tmp = $this.w17_1[objectKeyIndex(_this__u8e3s4, index)];
    } else {
      tmp = null;
    }
    return tmp;
  }
  function SlotReader(table) {
    this.t17_1 = table;
    this.u17_1 = this.t17_1.i16_1;
    this.v17_1 = this.t17_1.j16_1;
    this.w17_1 = this.t17_1.k16_1;
    this.x17_1 = this.t17_1.l16_1;
    this.y17_1 = null;
    this.z17_1 = false;
    this.a18_1 = 0;
    this.b18_1 = this.v17_1;
    this.c18_1 = -1;
    this.d18_1 = new IntStack();
    this.e18_1 = 0;
    this.f18_1 = 0;
    this.g18_1 = 0;
    this.h18_1 = false;
  }
  protoOf(SlotReader).j = function () {
    return this.v17_1;
  };
  protoOf(SlotReader).q19 = function (index) {
    // Inline function 'androidx.compose.runtime.parentAnchor' call
    return this.u17_1[imul(index, 5) + 2 | 0];
  };
  protoOf(SlotReader).q1i = function () {
    var tmp0 = this.u17_1;
    // Inline function 'androidx.compose.runtime.isNode' call
    var address = this.a18_1;
    return !((tmp0[imul(address, 5) + 1 | 0] & 1073741824) === 0);
  };
  protoOf(SlotReader).i1c = function (index) {
    // Inline function 'androidx.compose.runtime.isNode' call
    return !((this.u17_1[imul(index, 5) + 1 | 0] & 1073741824) === 0);
  };
  protoOf(SlotReader).j1c = function (index) {
    // Inline function 'androidx.compose.runtime.nodeCount' call
    return this.u17_1[imul(index, 5) + 1 | 0] & 67108863;
  };
  protoOf(SlotReader).g1e = function (index) {
    var tmp;
    // Inline function 'androidx.compose.runtime.isNode' call
    if (!((this.u17_1[imul(index, 5) + 1 | 0] & 1073741824) === 0)) {
      tmp = node(this, this.u17_1, index);
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(SlotReader).u1b = function () {
    return this.d1c() || this.a18_1 === this.b18_1;
  };
  protoOf(SlotReader).d1c = function () {
    return this.e18_1 > 0;
  };
  protoOf(SlotReader).u1w = function () {
    return groupSize(this.u17_1, this.a18_1);
  };
  protoOf(SlotReader).m1b = function (index) {
    return groupSize(this.u17_1, index);
  };
  protoOf(SlotReader).r1b = function () {
    return this.b18_1;
  };
  protoOf(SlotReader).s1a = function () {
    var tmp;
    if (this.a18_1 < this.b18_1) {
      var tmp0 = this.u17_1;
      // Inline function 'androidx.compose.runtime.key' call
      var address = this.a18_1;
      tmp = tmp0[imul(address, 5)];
    } else {
      tmp = 0;
    }
    return tmp;
  };
  protoOf(SlotReader).t19 = function (index) {
    // Inline function 'androidx.compose.runtime.key' call
    return this.u17_1[imul(index, 5)];
  };
  protoOf(SlotReader).q1h = function () {
    return this.f18_1 - slotAnchor(this.u17_1, this.c18_1) | 0;
  };
  protoOf(SlotReader).k1c = function (index) {
    // Inline function 'androidx.compose.runtime.hasObjectKey' call
    return !((this.u17_1[imul(index, 5) + 1 | 0] & 536870912) === 0);
  };
  protoOf(SlotReader).q1g = function () {
    var tmp;
    if (this.a18_1 < this.b18_1) {
      var tmp0 = this.u17_1;
      // Inline function 'androidx.compose.runtime.hasObjectKey' call
      var address = this.a18_1;
      tmp = !((tmp0[imul(address, 5) + 1 | 0] & 536870912) === 0);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SlotReader).u1a = function () {
    return this.a18_1 < this.b18_1 ? objectKey(this, this.u17_1, this.a18_1) : null;
  };
  protoOf(SlotReader).u19 = function (index) {
    return objectKey(this, this.u17_1, index);
  };
  protoOf(SlotReader).c1a = function () {
    return this.a18_1 < this.b18_1 ? aux(this, this.u17_1, this.a18_1) : 0;
  };
  protoOf(SlotReader).s19 = function (index) {
    return aux(this, this.u17_1, index);
  };
  protoOf(SlotReader).q1f = function (index) {
    // Inline function 'androidx.compose.runtime.hasMark' call
    return !((this.u17_1[imul(index, 5) + 1 | 0] & 134217728) === 0);
  };
  protoOf(SlotReader).p1f = function (index) {
    // Inline function 'androidx.compose.runtime.containsMark' call
    return !((this.u17_1[imul(index, 5) + 1 | 0] & 67108864) === 0);
  };
  protoOf(SlotReader).m1c = function () {
    var tmp;
    if (this.c18_1 >= 0) {
      var tmp0 = this.u17_1;
      // Inline function 'androidx.compose.runtime.nodeCount' call
      var address = this.c18_1;
      tmp = tmp0[imul(address, 5) + 1 | 0] & 67108863;
    } else {
      tmp = 0;
    }
    return tmp;
  };
  protoOf(SlotReader).s1b = function () {
    return this.g18_1 - this.f18_1 | 0;
  };
  protoOf(SlotReader).o1f = function (group, index) {
    var start = slotAnchor(this.u17_1, group);
    var next = group + 1 | 0;
    var tmp;
    if (next < this.v17_1) {
      // Inline function 'androidx.compose.runtime.dataAnchor' call
      tmp = this.u17_1[imul(next, 5) + 4 | 0];
    } else {
      tmp = this.x17_1;
    }
    var end = tmp;
    var address = start + index | 0;
    return address < end ? this.w17_1[address] : Companion_getInstance().f1a_1;
  };
  protoOf(SlotReader).i = function () {
    if (this.e18_1 > 0 || this.f18_1 >= this.g18_1) {
      this.h18_1 = false;
      return Companion_getInstance().f1a_1;
    }
    this.h18_1 = true;
    var _unary__edvuaz = this.f18_1;
    this.f18_1 = _unary__edvuaz + 1 | 0;
    return this.w17_1[_unary__edvuaz];
  };
  protoOf(SlotReader).g1a = function () {
    this.e18_1 = this.e18_1 + 1 | 0;
  };
  protoOf(SlotReader).z1b = function () {
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    if (!(this.e18_1 > 0)) {
      var tmp$ret$0 = 'Unbalanced begin/end empty';
      throwIllegalArgumentException(tmp$ret$0);
    }
    this.e18_1 = this.e18_1 - 1 | 0;
  };
  protoOf(SlotReader).i18 = function () {
    this.z17_1 = true;
    this.t17_1.z1u(this, this.y17_1);
  };
  protoOf(SlotReader).d1a = function () {
    if (this.e18_1 <= 0) {
      var parent = this.c18_1;
      var currentGroup = this.a18_1;
      // Inline function 'androidx.compose.runtime.parentAnchor' call
      // Inline function 'androidx.compose.runtime.requirePrecondition' call
      if (!(this.u17_1[imul(currentGroup, 5) + 2 | 0] === parent)) {
        var tmp$ret$1 = 'Invalid slot table detected';
        throwIllegalArgumentException(tmp$ret$1);
      }
      var tmp0_safe_receiver = this.y17_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h2(this.r19(parent));
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.t1w(this.t17_1, currentGroup);
      }
      var currentSlotStack = this.d18_1;
      var currentSlot = this.f18_1;
      var currentEndSlot = this.g18_1;
      if (currentSlot === 0 && currentEndSlot === 0) {
        currentSlotStack.y16(-1);
      } else {
        currentSlotStack.y16(currentSlot);
      }
      this.c18_1 = currentGroup;
      this.b18_1 = currentGroup + groupSize(this.u17_1, currentGroup) | 0;
      this.a18_1 = currentGroup + 1 | 0;
      this.f18_1 = slotAnchor(this.u17_1, currentGroup);
      var tmp = this;
      var tmp_0;
      if (currentGroup >= (this.v17_1 - 1 | 0)) {
        tmp_0 = this.x17_1;
      } else {
        var tmp0 = this.u17_1;
        // Inline function 'androidx.compose.runtime.dataAnchor' call
        var address = currentGroup + 1 | 0;
        tmp_0 = tmp0[imul(address, 5) + 4 | 0];
      }
      tmp.g18_1 = tmp_0;
    }
  };
  protoOf(SlotReader).e1a = function () {
    if (this.e18_1 <= 0) {
      var tmp0 = this.u17_1;
      // Inline function 'androidx.compose.runtime.isNode' call
      var address = this.a18_1;
      // Inline function 'androidx.compose.runtime.requirePrecondition' call
      if (!!((tmp0[imul(address, 5) + 1 | 0] & 1073741824) === 0)) {
        var tmp$ret$1 = 'Expected a node group';
        throwIllegalArgumentException(tmp$ret$1);
      }
      this.d1a();
    }
  };
  protoOf(SlotReader).n19 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.e18_1 === 0)) {
      var tmp$ret$0 = 'Cannot skip while in an empty region';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var tmp;
    var tmp0 = this.u17_1;
    // Inline function 'androidx.compose.runtime.isNode' call
    var address = this.a18_1;
    if (!((tmp0[imul(address, 5) + 1 | 0] & 1073741824) === 0)) {
      tmp = 1;
    } else {
      var tmp0_0 = this.u17_1;
      // Inline function 'androidx.compose.runtime.nodeCount' call
      var address_0 = this.a18_1;
      tmp = tmp0_0[imul(address_0, 5) + 1 | 0] & 67108863;
    }
    var count = tmp;
    this.a18_1 = this.a18_1 + groupSize(this.u17_1, this.a18_1) | 0;
    return count;
  };
  protoOf(SlotReader).w19 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.e18_1 === 0)) {
      var tmp$ret$0 = 'Cannot skip the enclosing group while in an empty region';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.a18_1 = this.b18_1;
    this.f18_1 = 0;
    this.g18_1 = 0;
  };
  protoOf(SlotReader).g1b = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.e18_1 === 0)) {
      var tmp$ret$0 = 'Cannot reposition while in an empty region';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.a18_1 = index;
    var tmp;
    if (index < this.v17_1) {
      // Inline function 'androidx.compose.runtime.parentAnchor' call
      tmp = this.u17_1[imul(index, 5) + 2 | 0];
    } else {
      tmp = -1;
    }
    var parent = tmp;
    this.c18_1 = parent;
    if (parent < 0)
      this.b18_1 = this.v17_1;
    else
      this.b18_1 = parent + groupSize(this.u17_1, parent) | 0;
    this.f18_1 = 0;
    this.g18_1 = 0;
  };
  protoOf(SlotReader).h1c = function (index) {
    var newCurrentEnd = index + groupSize(this.u17_1, index) | 0;
    var current = this.a18_1;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(current >= index && current <= newCurrentEnd)) {
      var tmp$ret$0 = 'Index ' + index + ' is not a parent of ' + current;
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.c18_1 = index;
    this.b18_1 = newCurrentEnd;
    this.f18_1 = 0;
    this.g18_1 = 0;
  };
  protoOf(SlotReader).x1b = function () {
    if (this.e18_1 === 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(this.a18_1 === this.b18_1)) {
        var tmp$ret$0 = 'endGroup() not called at the end of a group';
        composeImmediateRuntimeError(tmp$ret$0);
      }
      var tmp0 = this.u17_1;
      // Inline function 'androidx.compose.runtime.parentAnchor' call
      var address = this.c18_1;
      var parent = tmp0[imul(address, 5) + 2 | 0];
      this.c18_1 = parent;
      this.b18_1 = parent < 0 ? this.v17_1 : parent + groupSize(this.u17_1, parent) | 0;
      var currentSlotStack = this.d18_1;
      var newCurrentSlot = currentSlotStack.j18();
      if (newCurrentSlot < 0) {
        this.f18_1 = 0;
        this.g18_1 = 0;
      } else {
        this.f18_1 = newCurrentSlot;
        var tmp = this;
        var tmp_0;
        if (parent >= (this.v17_1 - 1 | 0)) {
          tmp_0 = this.x17_1;
        } else {
          var tmp0_0 = this.u17_1;
          // Inline function 'androidx.compose.runtime.dataAnchor' call
          var address_0 = parent + 1 | 0;
          tmp_0 = tmp0_0[imul(address_0, 5) + 4 | 0];
        }
        tmp.g18_1 = tmp_0;
      }
    }
  };
  protoOf(SlotReader).t1a = function () {
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    if (this.e18_1 > 0)
      return result;
    var index = 0;
    var childIndex = this.a18_1;
    while (childIndex < this.b18_1) {
      var tmp0 = this.u17_1;
      // Inline function 'androidx.compose.runtime.key' call
      var address = childIndex;
      var tmp = tmp0[imul(address, 5)];
      var tmp_0 = objectKey(this, this.u17_1, childIndex);
      var tmp_1 = childIndex;
      var tmp_2;
      var tmp0_0 = this.u17_1;
      // Inline function 'androidx.compose.runtime.isNode' call
      var address_0 = childIndex;
      if (!((tmp0_0[imul(address_0, 5) + 1 | 0] & 1073741824) === 0)) {
        tmp_2 = 1;
      } else {
        var tmp0_1 = this.u17_1;
        // Inline function 'androidx.compose.runtime.nodeCount' call
        var address_1 = childIndex;
        tmp_2 = tmp0_1[imul(address_1, 5) + 1 | 0] & 67108863;
      }
      var tmp_3 = tmp_2;
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      result.e(new KeyInfo(tmp, tmp_0, tmp_1, tmp_3, _unary__edvuaz));
      childIndex = childIndex + groupSize(this.u17_1, childIndex) | 0;
    }
    return result;
  };
  protoOf(SlotReader).toString = function () {
    return 'SlotReader(current=' + this.a18_1 + ', key=' + this.s1a() + ', parent=' + this.c18_1 + ', end=' + this.b18_1 + ')';
  };
  protoOf(SlotReader).r19 = function (index) {
    var tmp0 = this.t17_1.q16_1;
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var effectiveSize = this.v17_1;
    var location = search(tmp0, index, effectiveSize);
    var tmp;
    if (location < 0) {
      var anchor = new Anchor(index);
      tmp0.a2(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = tmp0.p(location);
    }
    return tmp;
  };
  function find(_this__u8e3s4, index, effectiveSize) {
    _init_properties_SlotTable_kt__9b2e7y();
    var location = search(_this__u8e3s4, index, effectiveSize);
    return location >= 0 ? _this__u8e3s4.p(location) : null;
  }
  function search(_this__u8e3s4, location, effectiveSize) {
    _init_properties_SlotTable_kt__9b2e7y();
    var low = 0;
    var high = _this__u8e3s4.j() - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      // Inline function 'kotlin.let' call
      var it = _this__u8e3s4.p(mid).o1i_1;
      var midVal = it < 0 ? effectiveSize + it | 0 : it;
      var cmp = compareTo(midVal, location);
      if (cmp < 0)
        low = mid + 1 | 0;
      else if (cmp > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function groupSize(_this__u8e3s4, address) {
    _init_properties_SlotTable_kt__9b2e7y();
    return _this__u8e3s4[imul(address, 5) + 3 | 0];
  }
  function slotAnchor(_this__u8e3s4, address) {
    _init_properties_SlotTable_kt__9b2e7y();
    // Inline function 'kotlin.let' call
    var slot = imul(address, 5);
    var tmp = _this__u8e3s4[slot + 4 | 0];
    // Inline function 'androidx.compose.runtime.countOneBits' call
    var value = _this__u8e3s4[slot + 1 | 0] >> 28;
    return tmp + countOneBits(value) | 0;
  }
  function objectKeyIndex(_this__u8e3s4, address) {
    _init_properties_SlotTable_kt__9b2e7y();
    // Inline function 'kotlin.let' call
    var slot = imul(address, 5);
    var tmp = _this__u8e3s4[slot + 4 | 0];
    // Inline function 'androidx.compose.runtime.countOneBits' call
    var value = _this__u8e3s4[slot + 1 | 0] >> 30;
    return tmp + countOneBits(value) | 0;
  }
  function auxIndex_0(_this__u8e3s4, address) {
    _init_properties_SlotTable_kt__9b2e7y();
    // Inline function 'kotlin.let' call
    var slot = imul(address, 5);
    var tmp;
    if (slot >= _this__u8e3s4.length) {
      tmp = _this__u8e3s4.length;
    } else {
      var tmp_0 = _this__u8e3s4[slot + 4 | 0];
      // Inline function 'androidx.compose.runtime.countOneBits' call
      var value = _this__u8e3s4[slot + 1 | 0] >> 29;
      tmp = tmp_0 + countOneBits(value) | 0;
    }
    return tmp;
  }
  function validateRead($this) {
    if (!($this.v1w_1.p16_1 === $this.y1w_1)) {
      throwConcurrentModificationException();
    }
  }
  function GroupIterator(table, start, end) {
    this.v1w_1 = table;
    this.w1w_1 = end;
    this.x1w_1 = start;
    this.y1w_1 = this.v1w_1.p16_1;
    if (this.v1w_1.o16_1) {
      throwConcurrentModificationException();
    }
  }
  protoOf(GroupIterator).h = function () {
    return this.x1w_1 < this.w1w_1;
  };
  protoOf(GroupIterator).i = function () {
    validateRead(this);
    var group = this.x1w_1;
    this.x1w_1 = this.x1w_1 + groupSize(this.v1w_1.i16_1, group) | 0;
    return new SlotTableGroup(this.v1w_1, group, this.y1w_1);
  };
  function validateRead_0($this) {
    if (!($this.z1w_1.p16_1 === $this.b1x_1)) {
      throwConcurrentModificationException();
    }
  }
  function SlotTableGroup(table, group, version) {
    version = version === VOID ? table.p16_1 : version;
    this.z1w_1 = table;
    this.a1x_1 = group;
    this.b1x_1 = version;
  }
  protoOf(SlotTableGroup).g = function () {
    validateRead_0(this);
    var tmp0_safe_receiver = this.z1w_1.c1v(this.a1x_1);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = new SourceInformationGroupIterator(this.z1w_1, this.a1x_1, tmp0_safe_receiver, new AnchoredGroupPath(this.a1x_1));
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? new GroupIterator(this.z1w_1, this.a1x_1 + 1 | 0, this.a1x_1 + groupSize(this.z1w_1.i16_1, this.a1x_1) | 0) : tmp1_elvis_lhs;
  };
  function add_0(_this__u8e3s4, key, value) {
    _init_properties_SlotTable_kt__9b2e7y();
    var tmp0_elvis_lhs = _this__u8e3s4.p(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new MutableIntSet();
      _this__u8e3s4.xw(key, this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp.kw(value);
  }
  function initGroup(_this__u8e3s4, address, key, isNode, hasDataKey, hasData, parentAnchor, dataAnchor) {
    _init_properties_SlotTable_kt__9b2e7y();
    var arrayIndex = imul(address, 5);
    _this__u8e3s4[arrayIndex + 0 | 0] = key;
    var tmp = arrayIndex + 1 | 0;
    // Inline function 'androidx.compose.runtime.toBit' call
    var tmp_0 = (isNode ? 1 : 0) << 30;
    // Inline function 'androidx.compose.runtime.toBit' call
    var tmp_1 = tmp_0 | (hasDataKey ? 1 : 0) << 29;
    // Inline function 'androidx.compose.runtime.toBit' call
    _this__u8e3s4[tmp] = tmp_1 | (hasData ? 1 : 0) << 28;
    _this__u8e3s4[arrayIndex + 2 | 0] = parentAnchor;
    _this__u8e3s4[arrayIndex + 3 | 0] = 0;
    _this__u8e3s4[arrayIndex + 4 | 0] = dataAnchor;
  }
  function updateGroupSize(_this__u8e3s4, address, value) {
    _init_properties_SlotTable_kt__9b2e7y();
    // Inline function 'androidx.compose.runtime.debugRuntimeCheck' call
    // Inline function 'androidx.compose.runtime.debugRuntimeCheck' call
    var value_0 = value >= 0;
    if (false && !value_0) {
      var tmp$ret$0 = 'Check failed';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    _this__u8e3s4[imul(address, 5) + 3 | 0] = value;
  }
  function updateNodeCount_0(_this__u8e3s4, address, value) {
    _init_properties_SlotTable_kt__9b2e7y();
    // Inline function 'androidx.compose.runtime.debugRuntimeCheck' call
    // Inline function 'androidx.compose.runtime.debugRuntimeCheck' call
    var value_0 = value >= 0 && value < 67108863;
    if (false && !value_0) {
      var tmp$ret$0 = 'Check failed';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    _this__u8e3s4[imul(address, 5) + 1 | 0] = _this__u8e3s4[imul(address, 5) + 1 | 0] & -67108864 | value;
  }
  function _PrioritySet___init__impl__yrk5ut(list) {
    var tmp;
    if (list === VOID) {
      // Inline function 'androidx.collection.mutableIntListOf' call
      tmp = new MutableIntList();
    } else {
      tmp = list;
    }
    list = tmp;
    return list;
  }
  function _get_list__d9tsa5($this) {
    return $this;
  }
  function PrioritySet__add_impl_enzb2u($this, value) {
    var tmp;
    // Inline function 'androidx.collection.IntList.isNotEmpty' call
    if (!(_get_list__d9tsa5($this).ew_1 === 0)) {
      var tmp_0;
      if (_get_list__d9tsa5($this).p(0) === value) {
        tmp_0 = true;
      } else {
        var tmp_1 = _get_list__d9tsa5($this);
        // Inline function 'androidx.collection.IntList.size' call
        var tmp$ret$1 = _get_list__d9tsa5($this).ew_1;
        tmp_0 = tmp_1.p(tmp$ret$1 - 1 | 0) === value;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    if (tmp)
      return Unit_instance;
    // Inline function 'androidx.collection.IntList.size' call
    var index = _get_list__d9tsa5($this).ew_1;
    _get_list__d9tsa5($this).kw(value);
    $l$loop: while (index > 0) {
      var parent = ((index + 1 | 0) >>> 1 | 0) - 1 | 0;
      var parentValue = _get_list__d9tsa5($this).p(parent);
      if (value > parentValue) {
        _get_list__d9tsa5($this).lw(index, parentValue);
      } else
        break $l$loop;
      index = parent;
    }
    _get_list__d9tsa5($this).lw(index, value);
  }
  function PrioritySet__isNotEmpty_impl_q82m5n($this) {
    // Inline function 'androidx.collection.IntList.isNotEmpty' call
    return !(_get_list__d9tsa5($this).ew_1 === 0);
  }
  function PrioritySet__peek_impl_la0uk4($this) {
    return _get_list__d9tsa5($this).fw();
  }
  function PrioritySet__takeMax_impl_e5irrm($this) {
    // Inline function 'androidx.collection.IntList.size' call
    // Inline function 'androidx.compose.runtime.debugRuntimeCheck' call
    var value = _get_list__d9tsa5($this).ew_1 > 0;
    if (false && !value) {
      var tmp$ret$1 = 'Set is empty';
      composeImmediateRuntimeError(tmp$ret$1);
    }
    var value_0 = _get_list__d9tsa5($this).p(0);
    $l$loop: while (true) {
      var tmp;
      // Inline function 'androidx.collection.IntList.isNotEmpty' call
      if (!(_get_list__d9tsa5($this).ew_1 === 0)) {
        tmp = _get_list__d9tsa5($this).p(0) === value_0;
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      _get_list__d9tsa5($this).lw(0, _get_list__d9tsa5($this).gw());
      var tmp_0 = _get_list__d9tsa5($this);
      // Inline function 'androidx.collection.IntList.size' call
      var tmp$ret$4 = _get_list__d9tsa5($this).ew_1;
      tmp_0.b2(tmp$ret$4 - 1 | 0);
      var index = 0;
      // Inline function 'androidx.collection.IntList.size' call
      var size = _get_list__d9tsa5($this).ew_1;
      // Inline function 'androidx.collection.IntList.size' call
      var max = _get_list__d9tsa5($this).ew_1 >>> 1 | 0;
      $l$loop_2: while (index < max) {
        var indexValue = _get_list__d9tsa5($this).p(index);
        var left = imul(index + 1 | 0, 2) - 1 | 0;
        var leftValue = _get_list__d9tsa5($this).p(left);
        var right = imul(index + 1 | 0, 2);
        if (right < size) {
          var rightValue = _get_list__d9tsa5($this).p(right);
          if (rightValue > leftValue) {
            if (rightValue > indexValue) {
              _get_list__d9tsa5($this).lw(index, rightValue);
              _get_list__d9tsa5($this).lw(right, indexValue);
              index = right;
              continue $l$loop_2;
            } else
              break $l$loop_2;
          }
        }
        if (leftValue > indexValue) {
          _get_list__d9tsa5($this).lw(index, leftValue);
          _get_list__d9tsa5($this).lw(left, indexValue);
          index = left;
        } else
          break $l$loop_2;
      }
    }
    return value_0;
  }
  function PrioritySet__toString_impl_tq1jgd($this) {
    return 'PrioritySet(list=' + $this.toString() + ')';
  }
  function PrioritySet__hashCode_impl_jjwlpw($this) {
    return $this.hashCode();
  }
  function PrioritySet__equals_impl_fc3ryo($this, other) {
    if (!(other instanceof PrioritySet))
      return false;
    var tmp0_other_with_cast = other instanceof PrioritySet ? other.r1v_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function PrioritySet(list) {
    this.r1v_1 = list;
  }
  protoOf(PrioritySet).toString = function () {
    return PrioritySet__toString_impl_tq1jgd(this.r1v_1);
  };
  protoOf(PrioritySet).hashCode = function () {
    return PrioritySet__hashCode_impl_jjwlpw(this.r1v_1);
  };
  protoOf(PrioritySet).equals = function (other) {
    return PrioritySet__equals_impl_fc3ryo(this.r1v_1, other);
  };
  function locationOf(_this__u8e3s4, index, effectiveSize) {
    _init_properties_SlotTable_kt__9b2e7y();
    // Inline function 'kotlin.let' call
    var it = search(_this__u8e3s4, index, effectiveSize);
    return it >= 0 ? it : -(it + 1 | 0) | 0;
  }
  function updateMark(_this__u8e3s4, address, value) {
    _init_properties_SlotTable_kt__9b2e7y();
    var arrayIndex = imul(address, 5) + 1 | 0;
    var element = _this__u8e3s4[arrayIndex];
    var tmp = element & -134217729;
    // Inline function 'androidx.compose.runtime.toBit' call
    _this__u8e3s4[arrayIndex] = tmp | (value ? 1 : 0) << 27;
  }
  function updateContainsMark_0(_this__u8e3s4, address, value) {
    _init_properties_SlotTable_kt__9b2e7y();
    var arrayIndex = imul(address, 5) + 1 | 0;
    var element = _this__u8e3s4[arrayIndex];
    var tmp = element & -67108865;
    // Inline function 'androidx.compose.runtime.toBit' call
    _this__u8e3s4[arrayIndex] = tmp | (value ? 1 : 0) << 26;
  }
  function KeyInfo(key, objectKey, location, nodes, index) {
    this.x1a_1 = key;
    this.y1a_1 = objectKey;
    this.z1a_1 = location;
    this.a1b_1 = nodes;
    this.b1b_1 = index;
  }
  function throwConcurrentModificationException() {
    _init_properties_SlotTable_kt__9b2e7y();
    throw ConcurrentModificationException_init_$Create$();
  }
  function SourceInformationGroupIterator(table, parent, group, path) {
    this.c1x_1 = table;
    this.d1x_1 = parent;
    this.e1x_1 = group;
    this.f1x_1 = path;
    this.g1x_1 = this.c1x_1.p16_1;
    this.h1x_1 = 0;
  }
  protoOf(SourceInformationGroupIterator).h = function () {
    var tmp0_safe_receiver = this.e1x_1.h1v_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = this.h1x_1 < tmp0_safe_receiver.j();
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(SourceInformationGroupIterator).i = function () {
    var tmp0_safe_receiver = this.e1x_1.h1v_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var _unary__edvuaz = this.h1x_1;
      this.h1x_1 = _unary__edvuaz + 1 | 0;
      tmp = tmp0_safe_receiver.p(_unary__edvuaz);
    }
    var group = tmp;
    var tmp_0;
    if (group instanceof Anchor) {
      tmp_0 = new SlotTableGroup(this.c1x_1, group.o1i_1, this.g1x_1);
    } else {
      if (group instanceof GroupSourceInformation) {
        tmp_0 = new SourceInformationSlotTableGroup(this.c1x_1, this.d1x_1, group, new RelativeGroupPath(this.f1x_1, this.h1x_1 - 1 | 0));
      } else {
        composeRuntimeError('Unexpected group information structure');
      }
    }
    return tmp_0;
  };
  function AnchoredGroupPath(group) {
    SourceInformationGroupPath.call(this);
    this.i1x_1 = group;
  }
  function SourceInformationGroupPath() {
  }
  function SourceInformationSlotTableGroup(table, parent, sourceInformation, identityPath) {
    this.j1x_1 = table;
    this.k1x_1 = parent;
    this.l1x_1 = sourceInformation;
    this.m1x_1 = identityPath;
    this.n1x_1 = this.l1x_1.e1v_1;
    this.o1x_1 = this;
  }
  protoOf(SourceInformationSlotTableGroup).g = function () {
    return new SourceInformationGroupIterator(this.j1x_1, this.k1x_1, this.l1x_1, this.m1x_1);
  };
  function RelativeGroupPath(parent, index) {
    SourceInformationGroupPath.call(this);
    this.p1x_1 = parent;
    this.q1x_1 = index;
  }
  var properties_initialized_SlotTable_kt_ohxdls;
  function _init_properties_SlotTable_kt__9b2e7y() {
    if (!properties_initialized_SlotTable_kt_ohxdls) {
      properties_initialized_SlotTable_kt_ohxdls = true;
      EmptyLongArray = longArray(0);
      androidx_compose_runtime_SlotTable$stable = 8;
      androidx_compose_runtime_Anchor$stable = 8;
      androidx_compose_runtime_GroupSourceInformation$stable = 8;
      androidx_compose_runtime_SlotReader$stable = 8;
      androidx_compose_runtime_KeyInfo$stable = 8;
      androidx_compose_runtime_SlotWriter$stable = 8;
      androidx_compose_runtime_BitVector$stable = 8;
    }
  }
  var androidx_compose_runtime_SnapshotMutableDoubleStateImpl$stable;
  var androidx_compose_runtime_SnapshotMutableFloatStateImpl$stable;
  var androidx_compose_runtime_SnapshotMutableIntStateImpl$stable;
  var androidx_compose_runtime_SnapshotMutableLongStateImpl$stable;
  function SnapshotMutationPolicy() {
  }
  function structuralEqualityPolicy() {
    var tmp = StructuralEqualityPolicy_instance;
    return isInterface(tmp, SnapshotMutationPolicy) ? tmp : THROW_CCE();
  }
  function StructuralEqualityPolicy() {
  }
  protoOf(StructuralEqualityPolicy).s1x = function (a, b) {
    return equals(a, b);
  };
  protoOf(StructuralEqualityPolicy).y1p = function (a, b) {
    var tmp = (a == null ? true : !(a == null)) ? a : THROW_CCE();
    return this.s1x(tmp, (b == null ? true : !(b == null)) ? b : THROW_CCE());
  };
  protoOf(StructuralEqualityPolicy).toString = function () {
    return 'StructuralEqualityPolicy';
  };
  var StructuralEqualityPolicy_instance;
  function StructuralEqualityPolicy_getInstance() {
    return StructuralEqualityPolicy_instance;
  }
  var androidx_compose_runtime_SnapshotMutableStateImpl$stable;
  function mutableStateOf(value, policy) {
    policy = policy === VOID ? structuralEqualityPolicy() : policy;
    return createSnapshotMutableState(value, policy);
  }
  function StateStateRecord(snapshotId, myValue) {
    StateRecord.call(this, snapshotId);
    this.v1x_1 = myValue;
  }
  protoOf(StateStateRecord).w1x = function (value) {
    var tmp = this;
    tmp.v1x_1 = (value instanceof StateStateRecord ? value : THROW_CCE()).v1x_1;
  };
  protoOf(StateStateRecord).x1x = function () {
    return new StateStateRecord(currentSnapshot().z1d(), this.v1x_1);
  };
  protoOf(StateStateRecord).y1x = function (snapshotId) {
    return new StateStateRecord(currentSnapshot().z1d(), this.v1x_1);
  };
  function SnapshotMutableStateImpl(value, policy) {
    StateObjectImpl.call(this);
    this.a1y_1 = policy;
    var tmp = this;
    // Inline function 'kotlin.let' call
    var snapshot = currentSnapshot();
    // Inline function 'kotlin.also' call
    var this_0 = new StateStateRecord(snapshot.z1d(), value);
    if (!(snapshot instanceof GlobalSnapshot)) {
      this_0.d1y_1 = new StateStateRecord(toSnapshotId(1), value);
    }
    tmp.b1y_1 = this_0;
  }
  protoOf(SnapshotMutableStateImpl).h1o = function () {
    return this.a1y_1;
  };
  protoOf(SnapshotMutableStateImpl).ss = function (value) {
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var this_0 = this.b1y_1;
    var it = current(this_0);
    if (!this.h1o().y1p(it.v1x_1, value)) {
      // Inline function 'androidx.compose.runtime.snapshots.overwritable' call
      var this_1 = this.b1y_1;
      var snapshot;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.platform.synchronized' call
      get_lock();
      snapshot = Companion_instance_11.p12();
      overwritableRecord(this_1, this, snapshot, it).v1x_1 = value;
      // Inline function 'kotlin.also' call
      notifyWrite(snapshot, this);
    }
    return Unit_instance;
  };
  protoOf(SnapshotMutableStateImpl).e2 = function () {
    return readable_0(this.b1y_1, this).v1x_1;
  };
  protoOf(SnapshotMutableStateImpl).e1y = function () {
    return this.b1y_1;
  };
  protoOf(SnapshotMutableStateImpl).f1y = function (value) {
    var tmp = this;
    tmp.b1y_1 = value instanceof StateStateRecord ? value : THROW_CCE();
  };
  protoOf(SnapshotMutableStateImpl).g1y = function (previous, current, applied) {
    var previousRecord = previous instanceof StateStateRecord ? previous : THROW_CCE();
    var currentRecord = current instanceof StateStateRecord ? current : THROW_CCE();
    var appliedRecord = applied instanceof StateStateRecord ? applied : THROW_CCE();
    var tmp;
    if (this.h1o().y1p(currentRecord.v1x_1, appliedRecord.v1x_1)) {
      tmp = current;
    } else {
      var merged = this.h1o().r1x(previousRecord.v1x_1, currentRecord.v1x_1, appliedRecord.v1x_1);
      var tmp_0;
      if (!(merged == null)) {
        // Inline function 'kotlin.also' call
        var this_0 = appliedRecord.y1x(appliedRecord.c1y_1);
        this_0.v1x_1 = merged;
        tmp_0 = this_0;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SnapshotMutableStateImpl).toString = function () {
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var this_0 = this.b1y_1;
    var it = current(this_0);
    return 'MutableState(value=' + toString_0(it.v1x_1) + ')@' + hashCode(this);
  };
  function mutableStateMapOf() {
    return new SnapshotStateMap();
  }
  function mutableStateListOf() {
    return SnapshotStateList_init_$Create$();
  }
  var androidx_compose_runtime_UnboxedIntState$stable;
  var androidx_compose_runtime_UnboxedLongState$stable;
  var androidx_compose_runtime_UnboxedFloatState$stable;
  var androidx_compose_runtime_UnboxedDoubleState$stable;
  var androidx_compose_runtime_IntStack$stable;
  function resize($this) {
    var copy = copyOf($this.w16_1, imul($this.w16_1.length, 2));
    $this.w16_1 = copy;
    return copy;
  }
  function IntStack() {
    this.w16_1 = new Int32Array(10);
    this.x16_1 = 0;
  }
  protoOf(IntStack).y16 = function (value) {
    var slots = this.w16_1;
    if (this.x16_1 >= slots.length) {
      slots = resize(this);
    }
    var tmp = slots;
    var _unary__edvuaz = this.x16_1;
    this.x16_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = value;
  };
  protoOf(IntStack).j18 = function () {
    var tmp = this.w16_1;
    this.x16_1 = this.x16_1 - 1 | 0;
    return tmp[this.x16_1];
  };
  protoOf(IntStack).y1v = function (default_0) {
    var index = this.x16_1 - 1 | 0;
    return index >= 0 ? this.w16_1[index] : default_0;
  };
  protoOf(IntStack).b1h = function () {
    return this.w16_1[this.x16_1 - 1 | 0];
  };
  protoOf(IntStack).i1b = function () {
    return this.w16_1[this.x16_1 - 2 | 0];
  };
  protoOf(IntStack).x1v = function (index) {
    return this.w16_1[index];
  };
  protoOf(IntStack).y1 = function () {
    this.x16_1 = 0;
  };
  protoOf(IntStack).w1v = function (value) {
    var slots = this.w16_1;
    var tmp0 = slots.length;
    // Inline function 'kotlin.math.min' call
    var b = this.x16_1;
    var end = Math.min(tmp0, b);
    var inductionVariable = 0;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (slots[i] === value)
          return i;
      }
       while (inductionVariable < end);
    return -1;
  };
  function _Stack___init__impl__tvpfn5(backing) {
    backing = backing === VOID ? ArrayList_init_$Create$() : backing;
    return backing;
  }
  function _get_backing__s7m0a($this) {
    return $this;
  }
  function _Stack___get_size__impl__mdb81l($this) {
    return _get_backing__s7m0a($this).j();
  }
  function Stack__push_impl_s8r905($this, value) {
    return _get_backing__s7m0a($this).e(value);
  }
  function Stack__pop_impl_8s4za4($this) {
    return _get_backing__s7m0a($this).b2(_Stack___get_size__impl__mdb81l($this) - 1 | 0);
  }
  function Stack__peek_impl_gtylu2($this) {
    return _get_backing__s7m0a($this).p(_Stack___get_size__impl__mdb81l($this) - 1 | 0);
  }
  function Stack__peek_impl_gtylu2_0($this, index) {
    return _get_backing__s7m0a($this).p(index);
  }
  function Stack__isEmpty_impl_modt1q($this) {
    return _get_backing__s7m0a($this).r();
  }
  function Stack__isNotEmpty_impl_ua6a9t($this) {
    return !Stack__isEmpty_impl_modt1q($this);
  }
  function Stack__clear_impl_qoqv3c($this) {
    return _get_backing__s7m0a($this).y1();
  }
  function Stack__toArray_impl_ox34cp($this) {
    var tmp = 0;
    var tmp_0 = _get_backing__s7m0a($this).j();
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      tmp_1[tmp_2] = _get_backing__s7m0a($this).p(tmp_2);
      tmp = tmp + 1 | 0;
    }
    var tmp_3 = tmp_1;
    return isArray(tmp_3) ? tmp_3 : THROW_CCE();
  }
  function Stack__toString_impl_aq1jdz($this) {
    return 'Stack(backing=' + $this.toString() + ')';
  }
  function Stack__hashCode_impl_wh7g6u($this) {
    return $this.hashCode();
  }
  function Stack__equals_impl_4f06xy($this, other) {
    if (!(other instanceof Stack))
      return false;
    var tmp0_other_with_cast = other instanceof Stack ? other.n1i_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function Stack(backing) {
    this.n1i_1 = backing;
  }
  protoOf(Stack).toString = function () {
    return Stack__toString_impl_aq1jdz(this.n1i_1);
  };
  protoOf(Stack).hashCode = function () {
    return Stack__hashCode_impl_wh7g6u(this.n1i_1);
  };
  protoOf(Stack).equals = function (other) {
    return Stack__equals_impl_4f06xy(this.n1i_1, other);
  };
  var androidx_compose_runtime_StaticValueHolder$stable;
  var androidx_compose_runtime_LazyValueHolder$stable;
  var androidx_compose_runtime_ComputedValueHolder$stable;
  var androidx_compose_runtime_DynamicValueHolder$stable;
  function ValueHolder() {
  }
  function _get_current__qcrdxk($this) {
    var tmp0 = $this.h1y_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('current', 1, tmp, LazyValueHolder$_get_current_$ref_sagj5g(), null);
    return tmp0.e2();
  }
  function LazyValueHolder$_get_current_$ref_sagj5g() {
    return function (p0) {
      return _get_current__qcrdxk(p0);
    };
  }
  function LazyValueHolder(valueProducer) {
    this.h1y_1 = lazy(valueProducer);
  }
  protoOf(LazyValueHolder).g1o = function (map) {
    return _get_current__qcrdxk(this);
  };
  function DynamicValueHolder(state) {
    this.b1o_1 = state;
  }
  protoOf(DynamicValueHolder).g1o = function (map) {
    return this.b1o_1.e2();
  };
  protoOf(DynamicValueHolder).toString = function () {
    return 'DynamicValueHolder(state=' + toString(this.b1o_1) + ')';
  };
  protoOf(DynamicValueHolder).hashCode = function () {
    return hashCode(this.b1o_1);
  };
  protoOf(DynamicValueHolder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DynamicValueHolder))
      return false;
    var tmp0_other_with_cast = other instanceof DynamicValueHolder ? other : THROW_CCE();
    if (!equals(this.b1o_1, tmp0_other_with_cast.b1o_1))
      return false;
    return true;
  };
  function StaticValueHolder(value) {
    this.a1o_1 = value;
  }
  protoOf(StaticValueHolder).g1o = function (map) {
    return this.a1o_1;
  };
  protoOf(StaticValueHolder).toString = function () {
    return 'StaticValueHolder(value=' + toString_0(this.a1o_1) + ')';
  };
  protoOf(StaticValueHolder).hashCode = function () {
    return this.a1o_1 == null ? 0 : hashCode(this.a1o_1);
  };
  protoOf(StaticValueHolder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StaticValueHolder))
      return false;
    var tmp0_other_with_cast = other instanceof StaticValueHolder ? other : THROW_CCE();
    if (!equals(this.a1o_1, tmp0_other_with_cast.a1o_1))
      return false;
    return true;
  };
  function ComputedValueHolder(compute) {
    this.z1n_1 = compute;
  }
  protoOf(ComputedValueHolder).g1o = function (map) {
    return this.z1n_1(map);
  };
  protoOf(ComputedValueHolder).toString = function () {
    return 'ComputedValueHolder(compute=' + toString(this.z1n_1) + ')';
  };
  protoOf(ComputedValueHolder).hashCode = function () {
    return hashCode(this.z1n_1);
  };
  protoOf(ComputedValueHolder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ComputedValueHolder))
      return false;
    var tmp0_other_with_cast = other instanceof ComputedValueHolder ? other : THROW_CCE();
    if (!equals(this.z1n_1, tmp0_other_with_cast.z1n_1))
      return false;
    return true;
  };
  var androidx_compose_runtime_changelist_ChangeList$stable;
  function ChangeList() {
    OperationsDebugStringFormattable.call(this);
    this.o1j_1 = new Operations();
  }
  protoOf(ChangeList).r = function () {
    return this.o1j_1.r();
  };
  protoOf(ChangeList).cy = function () {
    return this.o1j_1.cy();
  };
  protoOf(ChangeList).y1 = function () {
    this.o1j_1.y1();
  };
  protoOf(ChangeList).r1l = function (applier, slots, rememberManager) {
    return this.o1j_1.q1y(applier, slots, rememberManager);
  };
  protoOf(ChangeList).r1y = function (value) {
    var tmp0 = this.o1j_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = Remember_getInstance();
    tmp0.s1y(operation);
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.Remember.Value' call
    Remember_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, value);
    tmp0.t1y(operation);
  };
  protoOf(ChangeList).u1y = function (scope) {
    var tmp0 = this.o1j_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = RememberPausingScope_getInstance();
    tmp0.s1y(operation);
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.RememberPausingScope.Scope' call
    RememberPausingScope_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, scope);
    tmp0.t1y(operation);
  };
  protoOf(ChangeList).v1y = function (scope) {
    var tmp0 = this.o1j_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = StartResumingScope_getInstance();
    tmp0.s1y(operation);
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.StartResumingScope.Scope' call
    StartResumingScope_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, scope);
    tmp0.t1y(operation);
  };
  protoOf(ChangeList).w1y = function (scope) {
    var tmp0 = this.o1j_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = EndResumingScope_getInstance();
    tmp0.s1y(operation);
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.EndResumingScope.Scope' call
    EndResumingScope_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, scope);
    tmp0.t1y(operation);
  };
  protoOf(ChangeList).x1y = function (value, groupSlotIndex) {
    var tmp0 = this.o1j_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = UpdateValue_getInstance();
    tmp0.s1y(operation);
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.Value' call
    UpdateValue_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, value);
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.GroupSlotIndex' call
    UpdateValue_getInstance();
    // Inline function 'androidx.compose.runtime.changelist.WriteScope.setInt' call
    // Inline function 'kotlin.with' call
    var $this$with = access$_get_stack__7szo53($this$push);
    if (false) {
      var mask = 1 << 0;
      // Inline function 'androidx.compose.runtime.debugRuntimeCheck' call
      var value_0 = (access$_get_pushedIntMask__wrtr8x($this$with) & mask) === 0;
      if (false && !value_0) {
        var tmp$ret$2 = 'Already pushed argument ' + _WriteScope___get_operation__impl__krvgwa($this$push).a1z(0);
        composeImmediateRuntimeError(tmp$ret$2);
      }
      access$_set_pushedIntMask__hk28ql($this$with, access$_get_pushedIntMask__wrtr8x($this$with) | mask);
    }
    var tmp = $this$with.k1y_1;
    var tmp_0 = $this$with.l1y_1;
    tmp[(tmp_0 - $this$with.i1y_1[$this$with.j1y_1 - 1 | 0].y1y_1 | 0) + 0 | 0] = groupSlotIndex;
    tmp0.t1y(operation);
  };
  protoOf(ChangeList).b1z = function (value, anchor, groupSlotIndex) {
    var tmp0 = this.o1j_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = UpdateAnchoredValue_getInstance();
    tmp0.s1y(operation);
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.Value' call
    UpdateAnchoredValue_getInstance();
    var tmp = _ObjectParameter___init__impl__iyg1ip(0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.Anchor' call
    UpdateAnchoredValue_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObjects_impl_utvr6i($this$push, tmp, value, tmp$ret$1, anchor);
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.GroupSlotIndex' call
    UpdateAnchoredValue_getInstance();
    // Inline function 'androidx.compose.runtime.changelist.WriteScope.setInt' call
    // Inline function 'kotlin.with' call
    var $this$with = access$_get_stack__7szo53($this$push);
    if (false) {
      var mask = 1 << 0;
      // Inline function 'androidx.compose.runtime.debugRuntimeCheck' call
      var value_0 = (access$_get_pushedIntMask__wrtr8x($this$with) & mask) === 0;
      if (false && !value_0) {
        var tmp$ret$3 = 'Already pushed argument ' + _WriteScope___get_operation__impl__krvgwa($this$push).a1z(0);
        composeImmediateRuntimeError(tmp$ret$3);
      }
      access$_set_pushedIntMask__hk28ql($this$with, access$_get_pushedIntMask__wrtr8x($this$with) | mask);
    }
    var tmp_0 = $this$with.k1y_1;
    var tmp_1 = $this$with.l1y_1;
    tmp_0[(tmp_1 - $this$with.i1y_1[$this$with.j1y_1 - 1 | 0].y1y_1 | 0) + 0 | 0] = groupSlotIndex;
    tmp0.t1y(operation);
  };
  protoOf(ChangeList).c1z = function (anchor, value) {
    var tmp0 = this.o1j_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = AppendValue_getInstance();
    tmp0.s1y(operation);
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.AppendValue.Anchor' call
    AppendValue_getInstance();
    var tmp = _ObjectParameter___init__impl__iyg1ip(0);
    // Inline function 'androidx.compose.runtime.changelist.AppendValue.Value' call
    AppendValue_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObjects_impl_utvr6i($this$push, tmp, anchor, tmp$ret$1, value);
    tmp0.t1y(operation);
  };
  protoOf(ChangeList).d1z = function (count) {
    var tmp0 = this.o1j_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = TrimParentValues_getInstance();
    tmp0.s1y(operation);
    var tmp0_0 = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.TrimParentValues.Count' call
    TrimParentValues_getInstance();
    // Inline function 'androidx.compose.runtime.changelist.WriteScope.setInt' call
    // Inline function 'kotlin.with' call
    var $this$with = access$_get_stack__7szo53(tmp0_0);
    if (false) {
      var mask = 1 << 0;
      // Inline function 'androidx.compose.runtime.debugRuntimeCheck' call
      var value = (access$_get_pushedIntMask__wrtr8x($this$with) & mask) === 0;
      if (false && !value) {
        var tmp$ret$1 = 'Already pushed argument ' + _WriteScope___get_operation__impl__krvgwa(tmp0_0).a1z(0);
        composeImmediateRuntimeError(tmp$ret$1);
      }
      access$_set_pushedIntMask__hk28ql($this$with, access$_get_pushedIntMask__wrtr8x($this$with) | mask);
    }
    var tmp = $this$with.k1y_1;
    var tmp_0 = $this$with.l1y_1;
    tmp[(tmp_0 - $this$with.i1y_1[$this$with.j1y_1 - 1 | 0].y1y_1 | 0) + 0 | 0] = count;
    tmp0.t1y(operation);
  };
  protoOf(ChangeList).e1z = function () {
    this.o1j_1.f1z(ResetSlots_getInstance());
  };
  protoOf(ChangeList).g1z = function (data) {
    var tmp0 = this.o1j_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = UpdateAuxData_getInstance();
    tmp0.s1y(operation);
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateAuxData.Data' call
    UpdateAuxData_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, data);
    tmp0.t1y(operation);
  };
  protoOf(ChangeList).h1z = function () {
    this.o1j_1.f1z(EnsureRootGroupStarted_getInstance());
  };
  protoOf(ChangeList).i1z = function (anchor) {
    var tmp0 = this.o1j_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = EnsureGroupStarted_getInstance();
    tmp0.s1y(operation);
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.EnsureGroupStarted.Anchor' call
    EnsureGroupStarted_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, anchor);
    tmp0.t1y(operation);
  };
  protoOf(ChangeList).j1z = function () {
    this.o1j_1.f1z(EndCurrentGroup_getInstance());
  };
  protoOf(ChangeList).k1z = function () {
    this.o1j_1.f1z(SkipToEndOfCurrentGroup_getInstance());
  };
  protoOf(ChangeList).l1z = function () {
    this.o1j_1.f1z(RemoveCurrentGroup_getInstance());
  };
  protoOf(ChangeList).m1z = function (anchor, from) {
    var tmp0 = this.o1j_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = InsertSlots_getInstance();
    tmp0.s1y(operation);
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.Anchor' call
    InsertSlots_getInstance();
    var tmp = _ObjectParameter___init__impl__iyg1ip(0);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.FromSlotTable' call
    InsertSlots_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObjects_impl_utvr6i($this$push, tmp, anchor, tmp$ret$1, from);
    tmp0.t1y(operation);
  };
  protoOf(ChangeList).n1z = function (anchor, from, fixups) {
    var tmp0 = this.o1j_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = InsertSlotsWithFixups_getInstance();
    tmp0.s1y(operation);
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Anchor' call
    InsertSlotsWithFixups_getInstance();
    var tmp = _ObjectParameter___init__impl__iyg1ip(0);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.FromSlotTable' call
    InsertSlotsWithFixups_getInstance();
    var tmp_0 = _ObjectParameter___init__impl__iyg1ip(1);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Fixups' call
    InsertSlotsWithFixups_getInstance();
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(2);
    WriteScope__setObjects_impl_utvr6i_0($this$push, tmp, anchor, tmp_0, from, tmp$ret$2, fixups);
    tmp0.t1y(operation);
  };
  protoOf(ChangeList).o1z = function (offset) {
    var tmp0 = this.o1j_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = MoveCurrentGroup_getInstance();
    tmp0.s1y(operation);
    var tmp0_0 = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.MoveCurrentGroup.Offset' call
    MoveCurrentGroup_getInstance();
    // Inline function 'androidx.compose.runtime.changelist.WriteScope.setInt' call
    // Inline function 'kotlin.with' call
    var $this$with = access$_get_stack__7szo53(tmp0_0);
    if (false) {
      var mask = 1 << 0;
      // Inline function 'androidx.compose.runtime.debugRuntimeCheck' call
      var value = (access$_get_pushedIntMask__wrtr8x($this$with) & mask) === 0;
      if (false && !value) {
        var tmp$ret$1 = 'Already pushed argument ' + _WriteScope___get_operation__impl__krvgwa(tmp0_0).a1z(0);
        composeImmediateRuntimeError(tmp$ret$1);
      }
      access$_set_pushedIntMask__hk28ql($this$with, access$_get_pushedIntMask__wrtr8x($this$with) | mask);
    }
    var tmp = $this$with.k1y_1;
    var tmp_0 = $this$with.l1y_1;
    tmp[(tmp_0 - $this$with.i1y_1[$this$with.j1y_1 - 1 | 0].y1y_1 | 0) + 0 | 0] = offset;
    tmp0.t1y(operation);
  };
  protoOf(ChangeList).p1z = function (action, composition) {
    var tmp0 = this.o1j_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = EndCompositionScope_getInstance();
    tmp0.s1y(operation);
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Action' call
    EndCompositionScope_getInstance();
    var tmp = _ObjectParameter___init__impl__iyg1ip(0);
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Composition' call
    EndCompositionScope_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObjects_impl_utvr6i($this$push, tmp, action, tmp$ret$1, composition);
    tmp0.t1y(operation);
  };
  protoOf(ChangeList).q1z = function (node) {
    if (!(node == null) ? isInterface(node, ComposeNodeLifecycleCallback) : false) {
      this.o1j_1.f1z(UseCurrentNode_getInstance());
    }
  };
  protoOf(ChangeList).r1z = function (value, block) {
    var tmp0 = this.o1j_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = UpdateNode_getInstance();
    tmp0.s1y(operation);
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Value' call
    UpdateNode_getInstance();
    var tmp = _ObjectParameter___init__impl__iyg1ip(0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Block' call
    UpdateNode_getInstance();
    var tmp_0 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObjects_impl_utvr6i($this$push, tmp, value, tmp_0, typeof block === 'function' ? block : THROW_CCE());
    tmp0.t1y(operation);
  };
  protoOf(ChangeList).s1z = function (removeFrom, moveCount) {
    var tmp0 = this.o1j_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = RemoveNode_getInstance();
    tmp0.s1y(operation);
    var tmp0_0 = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.RemoveIndex' call
    RemoveNode_getInstance();
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.Count' call
    RemoveNode_getInstance();
    // Inline function 'androidx.compose.runtime.changelist.WriteScope.setInts' call
    // Inline function 'kotlin.with' call
    var $this$with = access$_get_stack__7szo53(tmp0_0);
    if (false) {
      var mask = 1 << 0 | 1 << 1;
      // Inline function 'androidx.compose.runtime.debugRuntimeCheck' call
      var value = (access$_get_pushedIntMask__wrtr8x($this$with) & mask) === 0;
      if (false && !value) {
        var tmp$ret$2 = 'Already pushed argument(s) ' + _WriteScope___get_operation__impl__krvgwa(tmp0_0).a1z(0) + (', ' + _WriteScope___get_operation__impl__krvgwa(tmp0_0).a1z(1));
        composeImmediateRuntimeError(tmp$ret$2);
      }
      access$_set_pushedIntMask__hk28ql($this$with, access$_get_pushedIntMask__wrtr8x($this$with) | mask);
    }
    var tmp = $this$with.l1y_1;
    var base = tmp - $this$with.i1y_1[$this$with.j1y_1 - 1 | 0].y1y_1 | 0;
    var intArgs = $this$with.k1y_1;
    intArgs[base + 0 | 0] = removeFrom;
    intArgs[base + 1 | 0] = moveCount;
    tmp0.t1y(operation);
  };
  protoOf(ChangeList).t1z = function (to, from, count) {
    var tmp0 = this.o1j_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = MoveNode_getInstance();
    tmp0.s1y(operation);
    var tmp0_0 = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.To' call
    MoveNode_getInstance();
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.From' call
    MoveNode_getInstance();
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.Count' call
    MoveNode_getInstance();
    // Inline function 'androidx.compose.runtime.changelist.WriteScope.setInts' call
    // Inline function 'kotlin.with' call
    var $this$with = access$_get_stack__7szo53(tmp0_0);
    if (false) {
      var mask = 1 << 1 | 1 << 0 | 1 << 2;
      // Inline function 'androidx.compose.runtime.debugRuntimeCheck' call
      var value = (access$_get_pushedIntMask__wrtr8x($this$with) & mask) === 0;
      if (false && !value) {
        var tmp$ret$3 = 'Already pushed argument(s) ' + _WriteScope___get_operation__impl__krvgwa(tmp0_0).a1z(1) + (', ' + _WriteScope___get_operation__impl__krvgwa(tmp0_0).a1z(0)) + (', ' + _WriteScope___get_operation__impl__krvgwa(tmp0_0).a1z(2));
        composeImmediateRuntimeError(tmp$ret$3);
      }
      access$_set_pushedIntMask__hk28ql($this$with, access$_get_pushedIntMask__wrtr8x($this$with) | mask);
    }
    var tmp = $this$with.l1y_1;
    var base = tmp - $this$with.i1y_1[$this$with.j1y_1 - 1 | 0].y1y_1 | 0;
    var intArgs = $this$with.k1y_1;
    intArgs[base + 1 | 0] = to;
    intArgs[base + 0 | 0] = from;
    intArgs[base + 2 | 0] = count;
    tmp0.t1y(operation);
  };
  protoOf(ChangeList).u1z = function (distance) {
    var tmp0 = this.o1j_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = AdvanceSlotsBy_getInstance();
    tmp0.s1y(operation);
    var tmp0_0 = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.AdvanceSlotsBy.Distance' call
    AdvanceSlotsBy_getInstance();
    // Inline function 'androidx.compose.runtime.changelist.WriteScope.setInt' call
    // Inline function 'kotlin.with' call
    var $this$with = access$_get_stack__7szo53(tmp0_0);
    if (false) {
      var mask = 1 << 0;
      // Inline function 'androidx.compose.runtime.debugRuntimeCheck' call
      var value = (access$_get_pushedIntMask__wrtr8x($this$with) & mask) === 0;
      if (false && !value) {
        var tmp$ret$1 = 'Already pushed argument ' + _WriteScope___get_operation__impl__krvgwa(tmp0_0).a1z(0);
        composeImmediateRuntimeError(tmp$ret$1);
      }
      access$_set_pushedIntMask__hk28ql($this$with, access$_get_pushedIntMask__wrtr8x($this$with) | mask);
    }
    var tmp = $this$with.k1y_1;
    var tmp_0 = $this$with.l1y_1;
    tmp[(tmp_0 - $this$with.i1y_1[$this$with.j1y_1 - 1 | 0].y1y_1 | 0) + 0 | 0] = distance;
    tmp0.t1y(operation);
  };
  protoOf(ChangeList).v1z = function (count) {
    var tmp0 = this.o1j_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = Ups_getInstance();
    tmp0.s1y(operation);
    var tmp0_0 = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.Ups.Count' call
    Ups_getInstance();
    // Inline function 'androidx.compose.runtime.changelist.WriteScope.setInt' call
    // Inline function 'kotlin.with' call
    var $this$with = access$_get_stack__7szo53(tmp0_0);
    if (false) {
      var mask = 1 << 0;
      // Inline function 'androidx.compose.runtime.debugRuntimeCheck' call
      var value = (access$_get_pushedIntMask__wrtr8x($this$with) & mask) === 0;
      if (false && !value) {
        var tmp$ret$1 = 'Already pushed argument ' + _WriteScope___get_operation__impl__krvgwa(tmp0_0).a1z(0);
        composeImmediateRuntimeError(tmp$ret$1);
      }
      access$_set_pushedIntMask__hk28ql($this$with, access$_get_pushedIntMask__wrtr8x($this$with) | mask);
    }
    var tmp = $this$with.k1y_1;
    var tmp_0 = $this$with.l1y_1;
    tmp[(tmp_0 - $this$with.i1y_1[$this$with.j1y_1 - 1 | 0].y1y_1 | 0) + 0 | 0] = count;
    tmp0.t1y(operation);
  };
  protoOf(ChangeList).w1z = function (nodes) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(nodes.length === 0)) {
      var tmp0 = this.o1j_1;
      // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
      var operation = Downs_getInstance();
      tmp0.s1y(operation);
      var $this$push = _WriteScope___init__impl__4xwato(tmp0);
      // Inline function 'androidx.compose.runtime.changelist.Downs.Nodes' call
      Downs_getInstance();
      var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(0);
      WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, nodes);
      tmp0.t1y(operation);
    }
  };
  protoOf(ChangeList).x1z = function (effectiveNodeIndexOut, anchor) {
    var tmp0 = this.o1j_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = DetermineMovableContentNodeIndex_getInstance();
    tmp0.s1y(operation);
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.EffectiveNodeIndexOut' call
    DetermineMovableContentNodeIndex_getInstance();
    var tmp = _ObjectParameter___init__impl__iyg1ip(0);
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.Anchor' call
    DetermineMovableContentNodeIndex_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObjects_impl_utvr6i($this$push, tmp, effectiveNodeIndexOut, tmp$ret$1, anchor);
    tmp0.t1y(operation);
  };
  protoOf(ChangeList).y1z = function (nodes, effectiveNodeIndex) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!nodes.r()) {
      var tmp0 = this.o1j_1;
      // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
      var operation = CopyNodesToNewAnchorLocation_getInstance();
      tmp0.s1y(operation);
      var $this$push = _WriteScope___init__impl__4xwato(tmp0);
      // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.Nodes' call
      CopyNodesToNewAnchorLocation_getInstance();
      var tmp = _ObjectParameter___init__impl__iyg1ip(1);
      // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.EffectiveNodeIndex' call
      CopyNodesToNewAnchorLocation_getInstance();
      var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(0);
      WriteScope__setObjects_impl_utvr6i($this$push, tmp, nodes, tmp$ret$2, effectiveNodeIndex);
      tmp0.t1y(operation);
    }
  };
  protoOf(ChangeList).z1z = function (resolvedState, parentContext, from, to) {
    var tmp0 = this.o1j_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = CopySlotTableToAnchorLocation_getInstance();
    tmp0.s1y(operation);
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ResolvedState' call
    CopySlotTableToAnchorLocation_getInstance();
    var tmp = _ObjectParameter___init__impl__iyg1ip(0);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ParentCompositionContext' call
    CopySlotTableToAnchorLocation_getInstance();
    var tmp_0 = _ObjectParameter___init__impl__iyg1ip(1);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.To' call
    CopySlotTableToAnchorLocation_getInstance();
    var tmp_1 = _ObjectParameter___init__impl__iyg1ip(3);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.From' call
    CopySlotTableToAnchorLocation_getInstance();
    var tmp$ret$3 = _ObjectParameter___init__impl__iyg1ip(2);
    WriteScope__setObjects_impl_utvr6i_1($this$push, tmp, resolvedState, tmp_0, parentContext, tmp_1, to, tmp$ret$3, from);
    tmp0.t1y(operation);
  };
  protoOf(ChangeList).a20 = function (composition, parentContext, reference) {
    var tmp0 = this.o1j_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = ReleaseMovableGroupAtCurrent_getInstance();
    tmp0.s1y(operation);
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Composition' call
    ReleaseMovableGroupAtCurrent_getInstance();
    var tmp = _ObjectParameter___init__impl__iyg1ip(0);
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.ParentCompositionContext' call
    ReleaseMovableGroupAtCurrent_getInstance();
    var tmp_0 = _ObjectParameter___init__impl__iyg1ip(1);
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Reference' call
    ReleaseMovableGroupAtCurrent_getInstance();
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(2);
    WriteScope__setObjects_impl_utvr6i_0($this$push, tmp, composition, tmp_0, parentContext, tmp$ret$2, reference);
    tmp0.t1y(operation);
  };
  protoOf(ChangeList).b20 = function () {
    this.o1j_1.f1z(EndMovableContentPlacement_getInstance());
  };
  protoOf(ChangeList).c20 = function (changeList, effectiveNodeIndex) {
    if (changeList.cy()) {
      var tmp0 = this.o1j_1;
      // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
      var operation = ApplyChangeList_getInstance();
      tmp0.s1y(operation);
      var $this$push = _WriteScope___init__impl__4xwato(tmp0);
      // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.Changes' call
      ApplyChangeList_getInstance();
      var tmp = _ObjectParameter___init__impl__iyg1ip(0);
      // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.EffectiveNodeIndex' call
      ApplyChangeList_getInstance();
      var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
      WriteScope__setObjects_impl_utvr6i($this$push, tmp, changeList, tmp$ret$1, effectiveNodeIndex);
      tmp0.t1y(operation);
    }
  };
  var androidx_compose_runtime_changelist_ComposerChangeListWriter$stable;
  function _get_reader__fd8dw8($this) {
    return $this.g17_1.u15_1;
  }
  function pushApplierOperationPreamble($this) {
    pushPendingUpsAndDowns($this);
  }
  function pushSlotEditingOperationPreamble($this) {
    realizeOperationLocation$default($this);
    $this.c1g();
  }
  function pushSlotTableOperationPreamble($this, useParentSlot) {
    realizeOperationLocation($this, useParentSlot);
  }
  function pushSlotTableOperationPreamble$default($this, useParentSlot, $super) {
    useParentSlot = useParentSlot === VOID ? false : useParentSlot;
    return pushSlotTableOperationPreamble($this, useParentSlot);
  }
  function ensureRootStarted($this) {
    if (!$this.i17_1 && $this.k17_1) {
      pushSlotTableOperationPreamble$default($this);
      $this.h17_1.h1z();
      $this.i17_1 = true;
    }
  }
  function ensureGroupStarted($this, anchor) {
    pushSlotTableOperationPreamble$default($this);
    $this.h17_1.i1z(anchor);
    $this.i17_1 = true;
  }
  function realizeOperationLocation($this, forParent) {
    var location = forParent ? _get_reader__fd8dw8($this).c18_1 : _get_reader__fd8dw8($this).a18_1;
    var distance = location - $this.l17_1 | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(distance >= 0)) {
      var tmp$ret$0 = 'Tried to seek backward';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    if (distance > 0) {
      $this.h17_1.u1z(distance);
      $this.l17_1 = location;
    }
  }
  function realizeOperationLocation$default($this, forParent, $super) {
    forParent = forParent === VOID ? false : forParent;
    return realizeOperationLocation($this, forParent);
  }
  function realizeNodeMovementOperations($this) {
    if ($this.r17_1 > 0) {
      if ($this.o17_1 >= 0) {
        realizeRemoveNode($this, $this.o17_1, $this.r17_1);
        $this.o17_1 = -1;
      } else {
        realizeMoveNode($this, $this.q17_1, $this.p17_1, $this.r17_1);
        $this.p17_1 = -1;
        $this.q17_1 = -1;
      }
      $this.r17_1 = 0;
    }
  }
  function realizeRemoveNode($this, removeFrom, moveCount) {
    pushApplierOperationPreamble($this);
    $this.h17_1.s1z(removeFrom, moveCount);
  }
  function realizeMoveNode($this, to, from, count) {
    pushApplierOperationPreamble($this);
    $this.h17_1.t1z(to, from, count);
  }
  function pushPendingUpsAndDowns($this) {
    if ($this.m17_1 > 0) {
      $this.h17_1.v1z($this.m17_1);
      $this.m17_1 = 0;
    }
    if (Stack__isNotEmpty_impl_ua6a9t($this.n17_1)) {
      $this.h17_1.w1z(Stack__toArray_impl_ox34cp($this.n17_1));
      Stack__clear_impl_qoqv3c($this.n17_1);
    }
  }
  function Companion_4() {
    this.d20_1 = -2;
  }
  var Companion_instance_5;
  function Companion_getInstance_4() {
    return Companion_instance_5;
  }
  function ComposerChangeListWriter(composer, changeList) {
    this.g17_1 = composer;
    this.h17_1 = changeList;
    this.i17_1 = false;
    this.j17_1 = new IntStack();
    this.k17_1 = true;
    this.l17_1 = 0;
    this.m17_1 = 0;
    this.n17_1 = _Stack___init__impl__tvpfn5();
    this.o17_1 = -1;
    this.p17_1 = -1;
    this.q17_1 = -1;
    this.r17_1 = 0;
  }
  protoOf(ComposerChangeListWriter).f1b = function (location) {
    this.l17_1 = this.l17_1 + (location - _get_reader__fd8dw8(this).a18_1 | 0) | 0;
  };
  protoOf(ComposerChangeListWriter).o1d = function (location) {
    this.l17_1 = location;
  };
  protoOf(ComposerChangeListWriter).c1g = function () {
    if (_get_reader__fd8dw8(this).j() > 0) {
      var reader = _get_reader__fd8dw8(this);
      var location = reader.c18_1;
      if (!(this.j17_1.y1v(-2) === location)) {
        ensureRootStarted(this);
        if (location > 0) {
          var anchor = reader.r19(location);
          this.j17_1.y16(location);
          ensureGroupStarted(this, anchor);
        }
      }
    }
  };
  protoOf(ComposerChangeListWriter).t1h = function () {
    return (_get_reader__fd8dw8(this).c18_1 - this.l17_1 | 0) < 0;
  };
  protoOf(ComposerChangeListWriter).w1h = function (value) {
    this.h17_1.r1y(value);
  };
  protoOf(ComposerChangeListWriter).v1i = function (scope) {
    this.h17_1.u1y(scope);
  };
  protoOf(ComposerChangeListWriter).t1c = function (scope) {
    this.h17_1.v1y(scope);
  };
  protoOf(ComposerChangeListWriter).c1j = function (scope) {
    this.h17_1.w1y(scope);
  };
  protoOf(ComposerChangeListWriter).r1h = function (value, groupSlotIndex) {
    pushSlotTableOperationPreamble(this, true);
    this.h17_1.x1y(value, groupSlotIndex);
  };
  protoOf(ComposerChangeListWriter).s1h = function (value, anchor, groupSlotIndex) {
    this.h17_1.b1z(value, anchor, groupSlotIndex);
  };
  protoOf(ComposerChangeListWriter).p1h = function (anchor, value) {
    this.h17_1.c1z(anchor, value);
  };
  protoOf(ComposerChangeListWriter).t1b = function (count) {
    if (count > 0) {
      pushSlotEditingOperationPreamble(this);
      this.h17_1.d1z(count);
    }
  };
  protoOf(ComposerChangeListWriter).z1c = function () {
    this.h17_1.e1z();
  };
  protoOf(ComposerChangeListWriter).b1a = function (data) {
    pushSlotTableOperationPreamble$default(this);
    this.h17_1.g1z(data);
  };
  protoOf(ComposerChangeListWriter).s17 = function () {
    if (this.i17_1) {
      pushSlotTableOperationPreamble$default(this);
      pushSlotTableOperationPreamble$default(this);
      this.h17_1.j1z();
      this.i17_1 = false;
    }
  };
  protoOf(ComposerChangeListWriter).w1b = function () {
    var location = _get_reader__fd8dw8(this).c18_1;
    var currentStartedGroup = this.j17_1.y1v(-1);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(currentStartedGroup <= location)) {
      var tmp$ret$0 = 'Missed recording an endGroup';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    if (this.j17_1.y1v(-1) === location) {
      pushSlotTableOperationPreamble$default(this);
      this.j17_1.j18();
      this.h17_1.j1z();
    }
  };
  protoOf(ComposerChangeListWriter).q1d = function () {
    this.h17_1.k1z();
  };
  protoOf(ComposerChangeListWriter).j1e = function () {
    pushSlotEditingOperationPreamble(this);
    this.h17_1.l1z();
    this.l17_1 = this.l17_1 + _get_reader__fd8dw8(this).u1w() | 0;
  };
  protoOf(ComposerChangeListWriter).i1e = function (anchor, from) {
    pushPendingUpsAndDowns(this);
    pushSlotEditingOperationPreamble(this);
    realizeNodeMovementOperations(this);
    this.h17_1.m1z(anchor, from);
  };
  protoOf(ComposerChangeListWriter).h1e = function (anchor, from, fixups) {
    pushPendingUpsAndDowns(this);
    pushSlotEditingOperationPreamble(this);
    realizeNodeMovementOperations(this);
    this.h17_1.n1z(anchor, from, fixups);
  };
  protoOf(ComposerChangeListWriter).h1b = function (offset) {
    pushSlotEditingOperationPreamble(this);
    this.h17_1.o1z(offset);
  };
  protoOf(ComposerChangeListWriter).b1j = function (action, composition) {
    this.h17_1.p1z(action, composition);
  };
  protoOf(ComposerChangeListWriter).e1h = function (node) {
    pushApplierOperationPreamble(this);
    this.h17_1.q1z(node);
  };
  protoOf(ComposerChangeListWriter).h1h = function (value, block) {
    pushApplierOperationPreamble(this);
    this.h17_1.r1z(value, block);
  };
  protoOf(ComposerChangeListWriter).k1b = function (nodeIndex, count) {
    if (count > 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(nodeIndex >= 0)) {
        var tmp$ret$0 = 'Invalid remove index ' + nodeIndex;
        composeImmediateRuntimeError(tmp$ret$0);
      }
      if (this.o17_1 === nodeIndex) {
        this.r17_1 = this.r17_1 + count | 0;
      } else {
        realizeNodeMovementOperations(this);
        this.o17_1 = nodeIndex;
        this.r17_1 = count;
      }
    }
  };
  protoOf(ComposerChangeListWriter).o1b = function (from, to, count) {
    if (count > 0) {
      if (this.r17_1 > 0 && this.p17_1 === (from - this.r17_1 | 0) && this.q17_1 === (to - this.r17_1 | 0)) {
        this.r17_1 = this.r17_1 + count | 0;
      } else {
        realizeNodeMovementOperations(this);
        this.p17_1 = from;
        this.q17_1 = to;
        this.r17_1 = count;
      }
    }
  };
  protoOf(ComposerChangeListWriter).k1f = function () {
    pushPendingUpsAndDowns(this);
    if (this.i17_1) {
      this.q1d();
      this.s17();
    }
  };
  protoOf(ComposerChangeListWriter).q1b = function () {
    realizeNodeMovementOperations(this);
  };
  protoOf(ComposerChangeListWriter).e1g = function (nodeIndex, group) {
    this.q1b();
    pushPendingUpsAndDowns(this);
    var nodeCount = _get_reader__fd8dw8(this).i1c(group) ? 1 : _get_reader__fd8dw8(this).j1c(group);
    if (nodeCount > 0) {
      this.k1b(nodeIndex, nodeCount);
    }
  };
  protoOf(ComposerChangeListWriter).v1b = function () {
    realizeNodeMovementOperations(this);
    if (Stack__isNotEmpty_impl_ua6a9t(this.n17_1)) {
      Stack__pop_impl_8s4za4(this.n17_1);
    } else {
      this.m17_1 = this.m17_1 + 1 | 0;
    }
  };
  protoOf(ComposerChangeListWriter).l1c = function (node) {
    realizeNodeMovementOperations(this);
    Stack__push_impl_s8r905(this.n17_1, node);
  };
  protoOf(ComposerChangeListWriter).j1d = function (effectiveNodeIndexOut, anchor) {
    pushPendingUpsAndDowns(this);
    this.h17_1.x1z(effectiveNodeIndexOut, anchor);
  };
  protoOf(ComposerChangeListWriter).m1d = function (nodes, effectiveNodeIndex) {
    this.h17_1.y1z(nodes, effectiveNodeIndex);
  };
  protoOf(ComposerChangeListWriter).n1d = function (resolvedState, parentContext, from, to) {
    this.h17_1.z1z(resolvedState, parentContext, from, to);
  };
  protoOf(ComposerChangeListWriter).d1g = function (composition, parentContext, reference) {
    this.h17_1.a20(composition, parentContext, reference);
  };
  protoOf(ComposerChangeListWriter).r1d = function () {
    this.h17_1.b20();
    this.l17_1 = 0;
  };
  protoOf(ComposerChangeListWriter).p1d = function (other, effectiveNodeIndex) {
    this.h17_1.c20(other, effectiveNodeIndex);
  };
  protoOf(ComposerChangeListWriter).m1f = function () {
    pushPendingUpsAndDowns(this);
    // Inline function 'androidx.compose.runtime.IntStack.isEmpty' call
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.j17_1.x16_1 === 0)) {
      var tmp$ret$1 = 'Missed recording an endGroup()';
      composeImmediateRuntimeError(tmp$ret$1);
    }
  };
  protoOf(ComposerChangeListWriter).n1f = function () {
    this.i17_1 = false;
    this.j17_1.y1();
    this.l17_1 = 0;
  };
  var androidx_compose_runtime_changelist_FixupList$stable;
  function FixupList() {
    OperationsDebugStringFormattable.call(this);
    this.k18_1 = new Operations();
    this.l18_1 = new Operations();
  }
  protoOf(FixupList).r = function () {
    return this.k18_1.r();
  };
  protoOf(FixupList).y1 = function () {
    this.l18_1.y1();
    this.k18_1.y1();
  };
  protoOf(FixupList).e20 = function (applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.l18_1.r()) {
      var tmp$ret$0 = 'FixupList has pending fixup operations that were not realized. Were there mismatched insertNode() and endNodeInsert() calls?';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.k18_1.q1y(applier, slots, rememberManager);
  };
  protoOf(FixupList).c1h = function (factory, insertIndex, groupAnchor) {
    var tmp0 = this.k18_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = InsertNodeFixup_getInstance();
    tmp0.s1y(operation);
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.Factory' call
    InsertNodeFixup_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, factory);
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.InsertIndex' call
    InsertNodeFixup_getInstance();
    // Inline function 'androidx.compose.runtime.changelist.WriteScope.setInt' call
    // Inline function 'kotlin.with' call
    var $this$with = access$_get_stack__7szo53($this$push);
    if (false) {
      var mask = 1 << 0;
      // Inline function 'androidx.compose.runtime.debugRuntimeCheck' call
      var value = (access$_get_pushedIntMask__wrtr8x($this$with) & mask) === 0;
      if (false && !value) {
        var tmp$ret$2 = 'Already pushed argument ' + _WriteScope___get_operation__impl__krvgwa($this$push).a1z(0);
        composeImmediateRuntimeError(tmp$ret$2);
      }
      access$_set_pushedIntMask__hk28ql($this$with, access$_get_pushedIntMask__wrtr8x($this$with) | mask);
    }
    var tmp = $this$with.k1y_1;
    var tmp_0 = $this$with.l1y_1;
    tmp[(tmp_0 - $this$with.i1y_1[$this$with.j1y_1 - 1 | 0].y1y_1 | 0) + 0 | 0] = insertIndex;
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.GroupAnchor' call
    InsertNodeFixup_getInstance();
    var tmp$ret$9 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$9, groupAnchor);
    tmp0.t1y(operation);
    var tmp0_0 = this.l18_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation_0 = PostInsertNodeFixup_getInstance();
    tmp0_0.s1y(operation_0);
    var $this$push_0 = _WriteScope___init__impl__4xwato(tmp0_0);
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.InsertIndex' call
    PostInsertNodeFixup_getInstance();
    // Inline function 'androidx.compose.runtime.changelist.WriteScope.setInt' call
    // Inline function 'kotlin.with' call
    var $this$with_0 = access$_get_stack__7szo53($this$push_0);
    if (false) {
      var mask_0 = 1 << 0;
      // Inline function 'androidx.compose.runtime.debugRuntimeCheck' call
      var value_0 = (access$_get_pushedIntMask__wrtr8x($this$with_0) & mask_0) === 0;
      if (false && !value_0) {
        var tmp$ret$13 = 'Already pushed argument ' + _WriteScope___get_operation__impl__krvgwa($this$push_0).a1z(0);
        composeImmediateRuntimeError(tmp$ret$13);
      }
      access$_set_pushedIntMask__hk28ql($this$with_0, access$_get_pushedIntMask__wrtr8x($this$with_0) | mask_0);
    }
    var tmp_1 = $this$with_0.k1y_1;
    var tmp_2 = $this$with_0.l1y_1;
    tmp_1[(tmp_2 - $this$with_0.i1y_1[$this$with_0.j1y_1 - 1 | 0].y1y_1 | 0) + 0 | 0] = insertIndex;
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.GroupAnchor' call
    PostInsertNodeFixup_getInstance();
    var tmp$ret$20 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push_0, tmp$ret$20, groupAnchor);
    tmp0_0.t1y(operation_0);
  };
  protoOf(FixupList).y1b = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.l18_1.cy()) {
      var tmp$ret$0 = 'Cannot end node insertion, there are no pending operations that can be realized.';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.l18_1.f20(this.k18_1);
  };
  protoOf(FixupList).i1h = function (value, block) {
    var tmp0 = this.k18_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = UpdateNode_getInstance();
    tmp0.s1y(operation);
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Value' call
    UpdateNode_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, value);
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Block' call
    UpdateNode_getInstance();
    var tmp = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp, typeof block === 'function' ? block : THROW_CCE());
    tmp0.t1y(operation);
  };
  var androidx_compose_runtime_changelist_Operation_Ups$stable;
  var androidx_compose_runtime_changelist_Operation_Downs$stable;
  var androidx_compose_runtime_changelist_Operation_AdvanceSlotsBy$stable;
  var androidx_compose_runtime_changelist_Operation_SideEffect$stable;
  var androidx_compose_runtime_changelist_Operation_Remember$stable;
  var androidx_compose_runtime_changelist_Operation_RememberPausingScope$stable;
  var androidx_compose_runtime_changelist_Operation_StartResumingScope$stable;
  var androidx_compose_runtime_changelist_Operation_EndResumingScope$stable;
  var androidx_compose_runtime_changelist_Operation_AppendValue$stable;
  var androidx_compose_runtime_changelist_Operation_TrimParentValues$stable;
  var androidx_compose_runtime_changelist_Operation_UpdateValue$stable;
  var androidx_compose_runtime_changelist_Operation_UpdateAnchoredValue$stable;
  var androidx_compose_runtime_changelist_Operation_UpdateAuxData$stable;
  var androidx_compose_runtime_changelist_Operation_EnsureRootGroupStarted$stable;
  var androidx_compose_runtime_changelist_Operation_EnsureGroupStarted$stable;
  var androidx_compose_runtime_changelist_Operation_RemoveCurrentGroup$stable;
  var androidx_compose_runtime_changelist_Operation_MoveCurrentGroup$stable;
  var androidx_compose_runtime_changelist_Operation_EndCurrentGroup$stable;
  var androidx_compose_runtime_changelist_Operation_SkipToEndOfCurrentGroup$stable;
  var androidx_compose_runtime_changelist_Operation_EndCompositionScope$stable;
  var androidx_compose_runtime_changelist_Operation_UseCurrentNode$stable;
  var androidx_compose_runtime_changelist_Operation_UpdateNode$stable;
  var androidx_compose_runtime_changelist_Operation_RemoveNode$stable;
  var androidx_compose_runtime_changelist_Operation_MoveNode$stable;
  var androidx_compose_runtime_changelist_Operation_InsertSlots$stable;
  var androidx_compose_runtime_changelist_Operation_InsertSlotsWithFixups$stable;
  var androidx_compose_runtime_changelist_Operation_InsertNodeFixup$stable;
  var androidx_compose_runtime_changelist_Operation_PostInsertNodeFixup$stable;
  var androidx_compose_runtime_changelist_Operation_DeactivateCurrentGroup$stable;
  var androidx_compose_runtime_changelist_Operation_ResetSlots$stable;
  var androidx_compose_runtime_changelist_Operation_DetermineMovableContentNodeIndex$stable;
  var androidx_compose_runtime_changelist_Operation_CopyNodesToNewAnchorLocation$stable;
  var androidx_compose_runtime_changelist_Operation_CopySlotTableToAnchorLocation$stable;
  var androidx_compose_runtime_changelist_Operation_EndMovableContentPlacement$stable;
  var androidx_compose_runtime_changelist_Operation_ReleaseMovableGroupAtCurrent$stable;
  var androidx_compose_runtime_changelist_Operation_ApplyChangeList$stable;
  var androidx_compose_runtime_changelist_Operation_TestOperation$stable;
  var androidx_compose_runtime_changelist_Operation$stable;
  function _ObjectParameter___init__impl__iyg1ip(offset) {
    return offset;
  }
  function _ObjectParameter___get_offset__impl__x7fx93($this) {
    return $this;
  }
  function Ups() {
    Ups_instance = this;
    Operation.call(this, 1);
  }
  protoOf(Ups).a1z = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.Ups.Count' call
    if (parameter === 0) {
      tmp = 'count';
    } else {
      tmp = protoOf(Operation).a1z.call(this, parameter);
    }
    return tmp;
  };
  protoOf(Ups).i20 = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.Ups.Count' call
    // Inline function 'kotlin.repeat' call
    var times = _this__u8e3s4.j20(0);
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        applier.t12();
      }
       while (inductionVariable < times);
  };
  var Ups_instance;
  function Ups_getInstance() {
    if (Ups_instance == null)
      new Ups();
    return Ups_instance;
  }
  function Downs() {
    Downs_instance = this;
    Operation.call(this, VOID, 1);
  }
  protoOf(Downs).l20 = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.Downs.Nodes' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'nodes';
    } else {
      tmp = protoOf(Operation).l20.call(this, parameter);
    }
    return tmp;
  };
  protoOf(Downs).i20 = function (_this__u8e3s4, applier, slots, rememberManager) {
    var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
    // Inline function 'androidx.compose.runtime.changelist.Downs.Nodes' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var nodes = _this__u8e3s4.o20(tmp$ret$0);
    var inductionVariable = 0;
    var last = nodes.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        nodeApplier.s12(nodes[index]);
      }
       while (inductionVariable <= last);
  };
  var Downs_instance;
  function Downs_getInstance() {
    if (Downs_instance == null)
      new Downs();
    return Downs_instance;
  }
  function AdvanceSlotsBy() {
    AdvanceSlotsBy_instance = this;
    Operation.call(this, 1);
  }
  protoOf(AdvanceSlotsBy).a1z = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.AdvanceSlotsBy.Distance' call
    if (parameter === 0) {
      tmp = 'distance';
    } else {
      tmp = protoOf(Operation).a1z.call(this, parameter);
    }
    return tmp;
  };
  protoOf(AdvanceSlotsBy).i20 = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.AdvanceSlotsBy.Distance' call
    slots.c1k(_this__u8e3s4.j20(0));
  };
  var AdvanceSlotsBy_instance;
  function AdvanceSlotsBy_getInstance() {
    if (AdvanceSlotsBy_instance == null)
      new AdvanceSlotsBy();
    return AdvanceSlotsBy_instance;
  }
  function Remember() {
    Remember_instance = this;
    Operation.call(this, VOID, 1);
  }
  protoOf(Remember).l20 = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.Remember.Value' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'value';
    } else {
      tmp = protoOf(Operation).l20.call(this, parameter);
    }
    return tmp;
  };
  protoOf(Remember).i20 = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.Remember.Value' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    rememberManager.t20(_this__u8e3s4.o20(tmp$ret$0));
  };
  var Remember_instance;
  function Remember_getInstance() {
    if (Remember_instance == null)
      new Remember();
    return Remember_instance;
  }
  function RememberPausingScope() {
    RememberPausingScope_instance = this;
    Operation.call(this, VOID, 1);
  }
  protoOf(RememberPausingScope).l20 = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.RememberPausingScope.Scope' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'scope';
    } else {
      tmp = protoOf(Operation).l20.call(this, parameter);
    }
    return tmp;
  };
  protoOf(RememberPausingScope).i20 = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.RememberPausingScope.Scope' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var scope = _this__u8e3s4.o20(tmp$ret$0);
    rememberManager.v1i(scope);
  };
  var RememberPausingScope_instance;
  function RememberPausingScope_getInstance() {
    if (RememberPausingScope_instance == null)
      new RememberPausingScope();
    return RememberPausingScope_instance;
  }
  function StartResumingScope() {
    StartResumingScope_instance = this;
    Operation.call(this, VOID, 1);
  }
  protoOf(StartResumingScope).l20 = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.StartResumingScope.Scope' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'scope';
    } else {
      tmp = protoOf(Operation).l20.call(this, parameter);
    }
    return tmp;
  };
  protoOf(StartResumingScope).i20 = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.StartResumingScope.Scope' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var scope = _this__u8e3s4.o20(tmp$ret$0);
    rememberManager.t1c(scope);
  };
  var StartResumingScope_instance;
  function StartResumingScope_getInstance() {
    if (StartResumingScope_instance == null)
      new StartResumingScope();
    return StartResumingScope_instance;
  }
  function EndResumingScope() {
    EndResumingScope_instance = this;
    Operation.call(this, VOID, 1);
  }
  protoOf(EndResumingScope).l20 = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.EndResumingScope.Scope' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'scope';
    } else {
      tmp = protoOf(Operation).l20.call(this, parameter);
    }
    return tmp;
  };
  protoOf(EndResumingScope).i20 = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.EndResumingScope.Scope' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var scope = _this__u8e3s4.o20(tmp$ret$0);
    rememberManager.c1j(scope);
  };
  var EndResumingScope_instance;
  function EndResumingScope_getInstance() {
    if (EndResumingScope_instance == null)
      new EndResumingScope();
    return EndResumingScope_instance;
  }
  function AppendValue() {
    AppendValue_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(AppendValue).l20 = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.AppendValue.Anchor' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'anchor';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.AppendValue.Value' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'value';
      } else {
        tmp = protoOf(Operation).l20.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(AppendValue).i20 = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.AppendValue.Anchor' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var anchor = _this__u8e3s4.o20(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.AppendValue.Value' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var value = _this__u8e3s4.o20(tmp$ret$1);
    if (value instanceof RememberObserverHolder) {
      rememberManager.t20(value);
    }
    slots.c1w(anchor, value);
  };
  var AppendValue_instance;
  function AppendValue_getInstance() {
    if (AppendValue_instance == null)
      new AppendValue();
    return AppendValue_instance;
  }
  function TrimParentValues() {
    TrimParentValues_instance = this;
    Operation.call(this, 1);
  }
  protoOf(TrimParentValues).a1z = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.TrimParentValues.Count' call
    if (parameter === 0) {
      tmp = 'count';
    } else {
      tmp = protoOf(Operation).a1z.call(this, parameter);
    }
    return tmp;
  };
  protoOf(TrimParentValues).i20 = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.TrimParentValues.Count' call
    var count = _this__u8e3s4.j20(0);
    var slotsSize = slots.t1j();
    // Inline function 'androidx.compose.runtime.SlotWriter.forEachTailSlot' call
    var groupIndex = slots.h19_1;
    var slotsStart = slots.o1v(groupIndex);
    var slotsEnd = slots.k1w(groupIndex);
    // Inline function 'kotlin.math.max' call
    var b = slotsEnd - count | 0;
    var inductionVariable = Math.max(slotsStart, b);
    if (inductionVariable < slotsEnd)
      do {
        var slotIndex = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var value = access$_get_slots__7x4q9w(slots)[access$dataIndexToDataAddress(slots, slotIndex)];
        if (value instanceof RememberObserverHolder) {
          var endRelativeOrder = slotsSize - slotIndex | 0;
          // Inline function 'androidx.compose.runtime.withAfterAnchorInfo' call
          var anchor = value.l1h_1;
          var priority = -1;
          var endRelativeAfter = -1;
          if (!(anchor == null) && anchor.w1j()) {
            priority = slots.i1d(anchor);
            endRelativeAfter = slots.t1j() - slots.v1j(priority) | 0;
          }
          var tmp0 = priority;
          var endRelativeAfter_0 = endRelativeAfter;
          rememberManager.x1j(value, endRelativeOrder, tmp0, endRelativeAfter_0);
        } else {
          if (value instanceof RecomposeScopeImpl) {
            value.y1j();
          }
        }
      }
       while (inductionVariable < slotsEnd);
    slots.d1w(count);
  };
  var TrimParentValues_instance;
  function TrimParentValues_getInstance() {
    if (TrimParentValues_instance == null)
      new TrimParentValues();
    return TrimParentValues_instance;
  }
  function UpdateValue() {
    UpdateValue_instance = this;
    Operation.call(this, 1, 1);
  }
  protoOf(UpdateValue).a1z = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.GroupSlotIndex' call
    if (parameter === 0) {
      tmp = 'groupSlotIndex';
    } else {
      tmp = protoOf(Operation).a1z.call(this, parameter);
    }
    return tmp;
  };
  protoOf(UpdateValue).l20 = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.Value' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'value';
    } else {
      tmp = protoOf(Operation).l20.call(this, parameter);
    }
    return tmp;
  };
  protoOf(UpdateValue).i20 = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.Value' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var value = _this__u8e3s4.o20(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.GroupSlotIndex' call
    var groupSlotIndex = _this__u8e3s4.j20(0);
    if (value instanceof RememberObserverHolder) {
      rememberManager.t20(value);
    }
    // Inline function 'androidx.compose.runtime.SlotWriter.set' call
    var previous = slots.i1w(slots.f19_1, groupSlotIndex, value);
    if (previous instanceof RememberObserverHolder) {
      var endRelativeOrder = slots.t1j() - slots.h1w(slots.f19_1, groupSlotIndex) | 0;
      rememberManager.x1j(previous, endRelativeOrder, -1, -1);
    } else {
      if (previous instanceof RecomposeScopeImpl) {
        previous.y1j();
      }
    }
  };
  var UpdateValue_instance;
  function UpdateValue_getInstance() {
    if (UpdateValue_instance == null)
      new UpdateValue();
    return UpdateValue_instance;
  }
  function UpdateAnchoredValue() {
    UpdateAnchoredValue_instance = this;
    Operation.call(this, 1, 2);
  }
  protoOf(UpdateAnchoredValue).a1z = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.GroupSlotIndex' call
    if (parameter === 0) {
      tmp = 'groupSlotIndex';
    } else {
      tmp = protoOf(Operation).a1z.call(this, parameter);
    }
    return tmp;
  };
  protoOf(UpdateAnchoredValue).l20 = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.Value' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'value';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.Anchor' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'anchor';
      } else {
        tmp = protoOf(Operation).l20.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(UpdateAnchoredValue).i20 = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.Value' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var value = _this__u8e3s4.o20(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.Anchor' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var anchor = _this__u8e3s4.o20(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.GroupSlotIndex' call
    var groupSlotIndex = _this__u8e3s4.j20(0);
    if (value instanceof RememberObserverHolder) {
      rememberManager.t20(value);
    }
    var groupIndex = slots.i1d(anchor);
    var previous = slots.i1w(groupIndex, groupSlotIndex, value);
    if (previous instanceof RememberObserverHolder) {
      var endRelativeSlotOrder = slots.t1j() - slots.h1w(groupIndex, groupSlotIndex) | 0;
      // Inline function 'androidx.compose.runtime.withAfterAnchorInfo' call
      var anchor_0 = previous.l1h_1;
      var priority = -1;
      var endRelativeAfter = -1;
      if (!(anchor_0 == null) && anchor_0.w1j()) {
        priority = slots.i1d(anchor_0);
        endRelativeAfter = slots.t1j() - slots.v1j(priority) | 0;
      }
      var tmp0 = priority;
      var endRelativeAfter_0 = endRelativeAfter;
      rememberManager.x1j(previous, endRelativeSlotOrder, tmp0, endRelativeAfter_0);
    } else {
      if (previous instanceof RecomposeScopeImpl) {
        previous.y1j();
      }
    }
  };
  var UpdateAnchoredValue_instance;
  function UpdateAnchoredValue_getInstance() {
    if (UpdateAnchoredValue_instance == null)
      new UpdateAnchoredValue();
    return UpdateAnchoredValue_instance;
  }
  function UpdateAuxData() {
    UpdateAuxData_instance = this;
    Operation.call(this, VOID, 1);
  }
  protoOf(UpdateAuxData).l20 = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateAuxData.Data' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'data';
    } else {
      tmp = protoOf(Operation).l20.call(this, parameter);
    }
    return tmp;
  };
  protoOf(UpdateAuxData).i20 = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.UpdateAuxData.Data' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    slots.p1v(_this__u8e3s4.o20(tmp$ret$0));
  };
  var UpdateAuxData_instance;
  function UpdateAuxData_getInstance() {
    if (UpdateAuxData_instance == null)
      new UpdateAuxData();
    return UpdateAuxData_instance;
  }
  function EnsureRootGroupStarted() {
    EnsureRootGroupStarted_instance = this;
    Operation.call(this);
  }
  protoOf(EnsureRootGroupStarted).i20 = function (_this__u8e3s4, applier, slots, rememberManager) {
    slots.l1w(0);
  };
  var EnsureRootGroupStarted_instance;
  function EnsureRootGroupStarted_getInstance() {
    if (EnsureRootGroupStarted_instance == null)
      new EnsureRootGroupStarted();
    return EnsureRootGroupStarted_instance;
  }
  function EnsureGroupStarted() {
    EnsureGroupStarted_instance = this;
    Operation.call(this, VOID, 1);
  }
  protoOf(EnsureGroupStarted).l20 = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.EnsureGroupStarted.Anchor' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'anchor';
    } else {
      tmp = protoOf(Operation).l20.call(this, parameter);
    }
    return tmp;
  };
  protoOf(EnsureGroupStarted).i20 = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.EnsureGroupStarted.Anchor' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    slots.m1w(_this__u8e3s4.o20(tmp$ret$0));
  };
  var EnsureGroupStarted_instance;
  function EnsureGroupStarted_getInstance() {
    if (EnsureGroupStarted_instance == null)
      new EnsureGroupStarted();
    return EnsureGroupStarted_instance;
  }
  function RemoveCurrentGroup() {
    RemoveCurrentGroup_instance = this;
    Operation.call(this);
  }
  protoOf(RemoveCurrentGroup).i20 = function (_this__u8e3s4, applier, slots, rememberManager) {
    removeCurrentGroup(slots, rememberManager);
  };
  var RemoveCurrentGroup_instance;
  function RemoveCurrentGroup_getInstance() {
    if (RemoveCurrentGroup_instance == null)
      new RemoveCurrentGroup();
    return RemoveCurrentGroup_instance;
  }
  function MoveCurrentGroup() {
    MoveCurrentGroup_instance = this;
    Operation.call(this, 1);
  }
  protoOf(MoveCurrentGroup).a1z = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.MoveCurrentGroup.Offset' call
    if (parameter === 0) {
      tmp = 'offset';
    } else {
      tmp = protoOf(Operation).a1z.call(this, parameter);
    }
    return tmp;
  };
  protoOf(MoveCurrentGroup).i20 = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.MoveCurrentGroup.Offset' call
    slots.o1w(_this__u8e3s4.j20(0));
  };
  var MoveCurrentGroup_instance;
  function MoveCurrentGroup_getInstance() {
    if (MoveCurrentGroup_instance == null)
      new MoveCurrentGroup();
    return MoveCurrentGroup_instance;
  }
  function EndCurrentGroup() {
    EndCurrentGroup_instance = this;
    Operation.call(this);
  }
  protoOf(EndCurrentGroup).i20 = function (_this__u8e3s4, applier, slots, rememberManager) {
    slots.a1c();
  };
  var EndCurrentGroup_instance;
  function EndCurrentGroup_getInstance() {
    if (EndCurrentGroup_instance == null)
      new EndCurrentGroup();
    return EndCurrentGroup_instance;
  }
  function SkipToEndOfCurrentGroup() {
    SkipToEndOfCurrentGroup_instance = this;
    Operation.call(this);
  }
  protoOf(SkipToEndOfCurrentGroup).i20 = function (_this__u8e3s4, applier, slots, rememberManager) {
    slots.w19();
  };
  var SkipToEndOfCurrentGroup_instance;
  function SkipToEndOfCurrentGroup_getInstance() {
    if (SkipToEndOfCurrentGroup_instance == null)
      new SkipToEndOfCurrentGroup();
    return SkipToEndOfCurrentGroup_instance;
  }
  function EndCompositionScope() {
    EndCompositionScope_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(EndCompositionScope).l20 = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Action' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'anchor';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Composition' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'composition';
      } else {
        tmp = protoOf(Operation).l20.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(EndCompositionScope).i20 = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Action' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var action = _this__u8e3s4.o20(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Composition' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var composition = _this__u8e3s4.o20(tmp$ret$1);
    action(composition);
  };
  var EndCompositionScope_instance;
  function EndCompositionScope_getInstance() {
    if (EndCompositionScope_instance == null)
      new EndCompositionScope();
    return EndCompositionScope_instance;
  }
  function UseCurrentNode() {
    UseCurrentNode_instance = this;
    Operation.call(this);
  }
  protoOf(UseCurrentNode).i20 = function (_this__u8e3s4, applier, slots, rememberManager) {
    applier.z12();
  };
  var UseCurrentNode_instance;
  function UseCurrentNode_getInstance() {
    if (UseCurrentNode_instance == null)
      new UseCurrentNode();
    return UseCurrentNode_instance;
  }
  function UpdateNode() {
    UpdateNode_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(UpdateNode).l20 = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Value' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'value';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Block' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'block';
      } else {
        tmp = protoOf(Operation).l20.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(UpdateNode).i20 = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Value' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var value = _this__u8e3s4.o20(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Block' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var block = _this__u8e3s4.o20(tmp$ret$1);
    applier.y12(block, value);
  };
  var UpdateNode_instance;
  function UpdateNode_getInstance() {
    if (UpdateNode_instance == null)
      new UpdateNode();
    return UpdateNode_instance;
  }
  function RemoveNode() {
    RemoveNode_instance = this;
    Operation.call(this, 2);
  }
  protoOf(RemoveNode).a1z = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.RemoveIndex' call
    if (parameter === 0) {
      tmp = 'removeIndex';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.RemoveNode.Count' call
      if (parameter === 1) {
        tmp = 'count';
      } else {
        tmp = protoOf(Operation).a1z.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(RemoveNode).i20 = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.RemoveIndex' call
    var tmp = _this__u8e3s4.j20(0);
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.Count' call
    applier.w12(tmp, _this__u8e3s4.j20(1));
  };
  var RemoveNode_instance;
  function RemoveNode_getInstance() {
    if (RemoveNode_instance == null)
      new RemoveNode();
    return RemoveNode_instance;
  }
  function MoveNode() {
    MoveNode_instance = this;
    Operation.call(this, 3);
  }
  protoOf(MoveNode).a1z = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.From' call
    if (parameter === 0) {
      tmp = 'from';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.MoveNode.To' call
      if (parameter === 1) {
        tmp = 'to';
      } else {
        // Inline function 'androidx.compose.runtime.changelist.MoveNode.Count' call
        if (parameter === 2) {
          tmp = 'count';
        } else {
          tmp = protoOf(Operation).a1z.call(this, parameter);
        }
      }
    }
    return tmp;
  };
  protoOf(MoveNode).i20 = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.From' call
    var tmp = _this__u8e3s4.j20(0);
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.To' call
    var tmp_0 = _this__u8e3s4.j20(1);
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.Count' call
    applier.x12(tmp, tmp_0, _this__u8e3s4.j20(2));
  };
  var MoveNode_instance;
  function MoveNode_getInstance() {
    if (MoveNode_instance == null)
      new MoveNode();
    return MoveNode_instance;
  }
  function InsertSlots() {
    InsertSlots_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(InsertSlots).l20 = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.Anchor' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'anchor';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.InsertSlots.FromSlotTable' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'from';
      } else {
        tmp = protoOf(Operation).l20.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(InsertSlots).i20 = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.FromSlotTable' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(1);
    var insertTable = _this__u8e3s4.o20(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.Anchor' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(0);
    var anchor = _this__u8e3s4.o20(tmp$ret$1);
    slots.w1a();
    slots.p1w(insertTable, anchor.p1i(insertTable), false);
    slots.b1c();
  };
  var InsertSlots_instance;
  function InsertSlots_getInstance() {
    if (InsertSlots_instance == null)
      new InsertSlots();
    return InsertSlots_instance;
  }
  function InsertSlotsWithFixups() {
    InsertSlotsWithFixups_instance = this;
    Operation.call(this, VOID, 3);
  }
  protoOf(InsertSlotsWithFixups).l20 = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Anchor' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'anchor';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.FromSlotTable' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'from';
      } else {
        // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Fixups' call
        if (parameter === _ObjectParameter___init__impl__iyg1ip(2)) {
          tmp = 'fixups';
        } else {
          tmp = protoOf(Operation).l20.call(this, parameter);
        }
      }
    }
    return tmp;
  };
  protoOf(InsertSlotsWithFixups).i20 = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.FromSlotTable' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(1);
    var insertTable = _this__u8e3s4.o20(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Anchor' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(0);
    var anchor = _this__u8e3s4.o20(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Fixups' call
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(2);
    var fixups = _this__u8e3s4.o20(tmp$ret$2);
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    var writer = insertTable.v19();
    var normalClose = false;
    var tmp;
    try {
      fixups.e20(applier, writer, rememberManager);
      // Inline function 'kotlin.also' call
      normalClose = true;
      tmp = Unit_instance;
    }finally {
      writer.a1a(normalClose);
    }
    slots.w1a();
    slots.p1w(insertTable, anchor.p1i(insertTable), false);
    slots.b1c();
  };
  var InsertSlotsWithFixups_instance;
  function InsertSlotsWithFixups_getInstance() {
    if (InsertSlotsWithFixups_instance == null)
      new InsertSlotsWithFixups();
    return InsertSlotsWithFixups_instance;
  }
  function InsertNodeFixup() {
    InsertNodeFixup_instance = this;
    Operation.call(this, 1, 2);
  }
  protoOf(InsertNodeFixup).a1z = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.InsertIndex' call
    if (parameter === 0) {
      tmp = 'insertIndex';
    } else {
      tmp = protoOf(Operation).a1z.call(this, parameter);
    }
    return tmp;
  };
  protoOf(InsertNodeFixup).l20 = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.Factory' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'factory';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.GroupAnchor' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'groupAnchor';
      } else {
        tmp = protoOf(Operation).l20.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(InsertNodeFixup).i20 = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.Factory' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var node = _this__u8e3s4.o20(tmp$ret$0)();
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.GroupAnchor' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var groupAnchor = _this__u8e3s4.o20(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.InsertIndex' call
    var insertIndex = _this__u8e3s4.j20(0);
    var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
    slots.g1w(groupAnchor, node);
    nodeApplier.u12(insertIndex, node);
    nodeApplier.s12(node);
  };
  var InsertNodeFixup_instance;
  function InsertNodeFixup_getInstance() {
    if (InsertNodeFixup_instance == null)
      new InsertNodeFixup();
    return InsertNodeFixup_instance;
  }
  function PostInsertNodeFixup() {
    PostInsertNodeFixup_instance = this;
    Operation.call(this, 1, 1);
  }
  protoOf(PostInsertNodeFixup).a1z = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.InsertIndex' call
    if (parameter === 0) {
      tmp = 'insertIndex';
    } else {
      tmp = protoOf(Operation).a1z.call(this, parameter);
    }
    return tmp;
  };
  protoOf(PostInsertNodeFixup).l20 = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.GroupAnchor' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'groupAnchor';
    } else {
      tmp = protoOf(Operation).l20.call(this, parameter);
    }
    return tmp;
  };
  protoOf(PostInsertNodeFixup).i20 = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.GroupAnchor' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var groupAnchor = _this__u8e3s4.o20(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.InsertIndex' call
    var insertIndex = _this__u8e3s4.j20(0);
    applier.t12();
    var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
    var nodeToInsert = slots.z1v(groupAnchor);
    nodeApplier.v12(insertIndex, nodeToInsert);
  };
  var PostInsertNodeFixup_instance;
  function PostInsertNodeFixup_getInstance() {
    if (PostInsertNodeFixup_instance == null)
      new PostInsertNodeFixup();
    return PostInsertNodeFixup_instance;
  }
  function ResetSlots() {
    ResetSlots_instance = this;
    Operation.call(this);
  }
  protoOf(ResetSlots).i20 = function (_this__u8e3s4, applier, slots, rememberManager) {
    slots.b1w();
  };
  var ResetSlots_instance;
  function ResetSlots_getInstance() {
    if (ResetSlots_instance == null)
      new ResetSlots();
    return ResetSlots_instance;
  }
  function DetermineMovableContentNodeIndex() {
    DetermineMovableContentNodeIndex_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(DetermineMovableContentNodeIndex).l20 = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.EffectiveNodeIndexOut' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'effectiveNodeIndexOut';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.Anchor' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'anchor';
      } else {
        tmp = protoOf(Operation).l20.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(DetermineMovableContentNodeIndex).i20 = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.EffectiveNodeIndexOut' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var effectiveNodeIndexOut = _this__u8e3s4.o20(tmp$ret$0);
    var tmp = effectiveNodeIndexOut;
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.Anchor' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var tmp_0 = _this__u8e3s4.o20(tmp$ret$1);
    tmp.s22_1 = positionToInsert(slots, tmp_0, isInterface(applier, Applier) ? applier : THROW_CCE());
  };
  var DetermineMovableContentNodeIndex_instance;
  function DetermineMovableContentNodeIndex_getInstance() {
    if (DetermineMovableContentNodeIndex_instance == null)
      new DetermineMovableContentNodeIndex();
    return DetermineMovableContentNodeIndex_instance;
  }
  function CopyNodesToNewAnchorLocation() {
    CopyNodesToNewAnchorLocation_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(CopyNodesToNewAnchorLocation).l20 = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.EffectiveNodeIndex' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'effectiveNodeIndex';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.Nodes' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'nodes';
      } else {
        tmp = protoOf(Operation).l20.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(CopyNodesToNewAnchorLocation).i20 = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.EffectiveNodeIndex' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var effectiveNodeIndex = _this__u8e3s4.o20(tmp$ret$0).s22_1;
    // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.Nodes' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var nodesToInsert = _this__u8e3s4.o20(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.snapshots.fastForEachIndexed' call
    var inductionVariable = 0;
    var last = nodesToInsert.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = nodesToInsert.p(index);
        if (!isInterface(applier, Applier))
          THROW_CCE();
        applier.v12(effectiveNodeIndex + index | 0, item);
        applier.u12(effectiveNodeIndex + index | 0, item);
      }
       while (inductionVariable <= last);
  };
  var CopyNodesToNewAnchorLocation_instance;
  function CopyNodesToNewAnchorLocation_getInstance() {
    if (CopyNodesToNewAnchorLocation_instance == null)
      new CopyNodesToNewAnchorLocation();
    return CopyNodesToNewAnchorLocation_instance;
  }
  function CopySlotTableToAnchorLocation() {
    CopySlotTableToAnchorLocation_instance = this;
    Operation.call(this, VOID, 4);
  }
  protoOf(CopySlotTableToAnchorLocation).l20 = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ResolvedState' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'resolvedState';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ParentCompositionContext' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'resolvedCompositionContext';
      } else {
        // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.From' call
        if (parameter === _ObjectParameter___init__impl__iyg1ip(2)) {
          tmp = 'from';
        } else {
          // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.To' call
          if (parameter === _ObjectParameter___init__impl__iyg1ip(3)) {
            tmp = 'to';
          } else {
            tmp = protoOf(Operation).l20.call(this, parameter);
          }
        }
      }
    }
    return tmp;
  };
  protoOf(CopySlotTableToAnchorLocation).i20 = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.From' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(2);
    var from = _this__u8e3s4.o20(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.To' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(3);
    var to = _this__u8e3s4.o20(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ParentCompositionContext' call
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(1);
    var parentCompositionContext = _this__u8e3s4.o20(tmp$ret$2);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ResolvedState' call
    var tmp$ret$3 = _ObjectParameter___init__impl__iyg1ip(0);
    var tmp0_elvis_lhs = _this__u8e3s4.o20(tmp$ret$3);
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? parentCompositionContext.k1d(from) : tmp0_elvis_lhs;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      composeRuntimeError('Could not resolve state for movable content');
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var resolvedState = tmp;
    var anchors = slots.q1w(1, resolvedState.l1d_1, 2);
    var tmp_0 = Companion_instance_2;
    var tmp_1 = to.c1d_1;
    tmp_0.m1k(slots, anchors, isInterface(tmp_1, RecomposeScopeOwner) ? tmp_1 : THROW_CCE());
  };
  var CopySlotTableToAnchorLocation_instance;
  function CopySlotTableToAnchorLocation_getInstance() {
    if (CopySlotTableToAnchorLocation_instance == null)
      new CopySlotTableToAnchorLocation();
    return CopySlotTableToAnchorLocation_instance;
  }
  function EndMovableContentPlacement() {
    EndMovableContentPlacement_instance = this;
    Operation.call(this);
  }
  protoOf(EndMovableContentPlacement).i20 = function (_this__u8e3s4, applier, slots, rememberManager) {
    positionToParentOf(slots, isInterface(applier, Applier) ? applier : THROW_CCE(), 0);
    slots.a1c();
  };
  var EndMovableContentPlacement_instance;
  function EndMovableContentPlacement_getInstance() {
    if (EndMovableContentPlacement_instance == null)
      new EndMovableContentPlacement();
    return EndMovableContentPlacement_instance;
  }
  function ReleaseMovableGroupAtCurrent() {
    ReleaseMovableGroupAtCurrent_instance = this;
    Operation.call(this, VOID, 3);
  }
  protoOf(ReleaseMovableGroupAtCurrent).l20 = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Composition' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'composition';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.ParentCompositionContext' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'parentCompositionContext';
      } else {
        // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Reference' call
        if (parameter === _ObjectParameter___init__impl__iyg1ip(2)) {
          tmp = 'reference';
        } else {
          tmp = protoOf(Operation).l20.call(this, parameter);
        }
      }
    }
    return tmp;
  };
  protoOf(ReleaseMovableGroupAtCurrent).i20 = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Composition' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var composition = _this__u8e3s4.o20(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Reference' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(2);
    var reference = _this__u8e3s4.o20(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.ParentCompositionContext' call
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(1);
    var parentContext = _this__u8e3s4.o20(tmp$ret$2);
    var state = extractMovableContentAtCurrent(composition, reference, slots, null);
    parentContext.u1n(reference, state, applier);
  };
  var ReleaseMovableGroupAtCurrent_instance;
  function ReleaseMovableGroupAtCurrent_getInstance() {
    if (ReleaseMovableGroupAtCurrent_instance == null)
      new ReleaseMovableGroupAtCurrent();
    return ReleaseMovableGroupAtCurrent_instance;
  }
  function ApplyChangeList() {
    ApplyChangeList_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(ApplyChangeList).l20 = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.Changes' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'changes';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.EffectiveNodeIndex' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'effectiveNodeIndex';
      } else {
        tmp = protoOf(Operation).l20.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(ApplyChangeList).i20 = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.EffectiveNodeIndex' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(1);
    var tmp0_safe_receiver = _this__u8e3s4.o20(tmp$ret$0);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s22_1;
    var effectiveNodeIndex = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.Changes' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(0);
    var tmp = _this__u8e3s4.o20(tmp$ret$1);
    var tmp_0;
    if (effectiveNodeIndex > 0) {
      tmp_0 = new OffsetApplier(applier, effectiveNodeIndex);
    } else {
      tmp_0 = applier;
    }
    tmp.r1l(tmp_0, slots, rememberManager);
  };
  var ApplyChangeList_instance;
  function ApplyChangeList_getInstance() {
    if (ApplyChangeList_instance == null)
      new ApplyChangeList();
    return ApplyChangeList_instance;
  }
  function Operation(ints, objects) {
    ints = ints === VOID ? 0 : ints;
    objects = objects === VOID ? 0 : objects;
    this.y1y_1 = ints;
    this.z1y_1 = objects;
  }
  protoOf(Operation).k20 = function () {
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = getKClassFromExpression(this).ja();
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  };
  protoOf(Operation).a1z = function (parameter) {
    return 'IntParameter(' + parameter + ')';
  };
  protoOf(Operation).l20 = function (parameter) {
    return 'ObjectParameter(' + _ObjectParameter___get_offset__impl__x7fx93(parameter) + ')';
  };
  protoOf(Operation).toString = function () {
    return this.k20();
  };
  function positionToInsert(slots, anchor, applier) {
    var destination = slots.i1d(anchor);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(slots.f19_1 < destination)) {
      var tmp$ret$0 = 'Check failed';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    positionToParentOf(slots, applier, destination);
    var nodeIndex = currentNodeIndex(slots);
    while (slots.f19_1 < destination) {
      if (slots.u1v(destination)) {
        if (slots.q1i()) {
          applier.s12(slots.g1e(slots.f19_1));
          nodeIndex = 0;
        }
        slots.d1a();
      } else
        nodeIndex = nodeIndex + slots.n19() | 0;
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(slots.f19_1 === destination)) {
      var tmp$ret$3 = 'Check failed';
      composeImmediateRuntimeError(tmp$ret$3);
    }
    return nodeIndex;
  }
  function positionToParentOf(slots, applier, index) {
    while (!slots.t1v(index)) {
      slots.w19();
      if (slots.i1c(slots.h19_1)) {
        applier.t12();
      }
      slots.a1c();
    }
  }
  function currentNodeIndex(slots) {
    var original = slots.f19_1;
    var current = slots.h19_1;
    while (current >= 0 && !slots.i1c(current)) {
      current = slots.q19(current);
    }
    var index = 0;
    current = current + 1 | 0;
    while (current < original) {
      if (slots.v1v(original, current)) {
        if (slots.i1c(current))
          index = 0;
        current = current + 1 | 0;
      } else {
        index = index + (slots.i1c(current) ? 1 : slots.j1c(current)) | 0;
        current = current + slots.m1b(current) | 0;
      }
    }
    return index;
  }
  var androidx_compose_runtime_changelist_Operations$stable;
  var androidx_compose_runtime_changelist_OperationsDebugStringFormattable$stable;
  function OperationsDebugStringFormattable() {
  }
  function _WriteScope___init__impl__4xwato(stack) {
    return stack;
  }
  function _get_stack__b8zp2v($this) {
    return $this;
  }
  function _WriteScope___get_operation__impl__krvgwa($this) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.peekOperation' call
    var this_0 = _get_stack__b8zp2v($this);
    return this_0.i1y_1[this_0.j1y_1 - 1 | 0];
  }
  function WriteScope__setObject_impl_rr41y9($this, parameter, value) {
    // Inline function 'kotlin.with' call
    var $this$with = _get_stack__b8zp2v($this);
    if (false) {
      var mask = 1 << _ObjectParameter___get_offset__impl__x7fx93(parameter);
      // Inline function 'androidx.compose.runtime.debugRuntimeCheck' call
      var value_0 = ($this$with.p1y_1 & mask) === 0;
      if (false && !value_0) {
        var tmp$ret$0 = 'Already pushed argument ' + _WriteScope___get_operation__impl__krvgwa($this).l20(parameter);
        composeImmediateRuntimeError(tmp$ret$0);
      }
      $this$with.p1y_1 = $this$with.p1y_1 | mask;
    }
    var tmp = $this$with.m1y_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.topObjectIndexOf' call
    var tmp_0 = $this$with.n1y_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.peekOperation' call
    tmp[(tmp_0 - $this$with.i1y_1[$this$with.j1y_1 - 1 | 0].z1y_1 | 0) + _ObjectParameter___get_offset__impl__x7fx93(parameter) | 0] = value;
    return Unit_instance;
  }
  function WriteScope__setObjects_impl_utvr6i($this, parameter1, value1, parameter2, value2) {
    // Inline function 'kotlin.with' call
    var $this$with = _get_stack__b8zp2v($this);
    if (false) {
      var mask = 1 << _ObjectParameter___get_offset__impl__x7fx93(parameter1) | 1 << _ObjectParameter___get_offset__impl__x7fx93(parameter2);
      // Inline function 'androidx.compose.runtime.debugRuntimeCheck' call
      var value = ($this$with.o1y_1 & mask) === 0;
      if (false && !value) {
        var tmp$ret$0 = 'Already pushed argument(s) ' + _WriteScope___get_operation__impl__krvgwa($this).l20(parameter1) + (', ' + _WriteScope___get_operation__impl__krvgwa($this).l20(parameter2));
        composeImmediateRuntimeError(tmp$ret$0);
      }
      $this$with.o1y_1 = $this$with.o1y_1 | mask;
    }
    var tmp = $this$with.n1y_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.peekOperation' call
    var base = tmp - $this$with.i1y_1[$this$with.j1y_1 - 1 | 0].z1y_1 | 0;
    var objectArgs = $this$with.m1y_1;
    objectArgs[base + _ObjectParameter___get_offset__impl__x7fx93(parameter1) | 0] = value1;
    objectArgs[base + _ObjectParameter___get_offset__impl__x7fx93(parameter2) | 0] = value2;
    return Unit_instance;
  }
  function WriteScope__setObjects_impl_utvr6i_0($this, parameter1, value1, parameter2, value2, parameter3, value3) {
    // Inline function 'kotlin.with' call
    var $this$with = _get_stack__b8zp2v($this);
    if (false) {
      var mask = 1 << _ObjectParameter___get_offset__impl__x7fx93(parameter1) | 1 << _ObjectParameter___get_offset__impl__x7fx93(parameter2) | 1 << _ObjectParameter___get_offset__impl__x7fx93(parameter3);
      // Inline function 'androidx.compose.runtime.debugRuntimeCheck' call
      var value = ($this$with.o1y_1 & mask) === 0;
      if (false && !value) {
        var tmp$ret$0 = 'Already pushed argument(s) ' + _WriteScope___get_operation__impl__krvgwa($this).l20(parameter1) + (', ' + _WriteScope___get_operation__impl__krvgwa($this).l20(parameter2)) + (', ' + _WriteScope___get_operation__impl__krvgwa($this).l20(parameter3));
        composeImmediateRuntimeError(tmp$ret$0);
      }
      $this$with.o1y_1 = $this$with.o1y_1 | mask;
    }
    var tmp = $this$with.n1y_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.peekOperation' call
    var base = tmp - $this$with.i1y_1[$this$with.j1y_1 - 1 | 0].z1y_1 | 0;
    var objectArgs = $this$with.m1y_1;
    objectArgs[base + _ObjectParameter___get_offset__impl__x7fx93(parameter1) | 0] = value1;
    objectArgs[base + _ObjectParameter___get_offset__impl__x7fx93(parameter2) | 0] = value2;
    objectArgs[base + _ObjectParameter___get_offset__impl__x7fx93(parameter3) | 0] = value3;
    return Unit_instance;
  }
  function WriteScope__setObjects_impl_utvr6i_1($this, parameter1, value1, parameter2, value2, parameter3, value3, parameter4, value4) {
    // Inline function 'kotlin.with' call
    var $this$with = _get_stack__b8zp2v($this);
    if (false) {
      var mask = 1 << _ObjectParameter___get_offset__impl__x7fx93(parameter1) | 1 << _ObjectParameter___get_offset__impl__x7fx93(parameter2) | 1 << _ObjectParameter___get_offset__impl__x7fx93(parameter3) | 1 << _ObjectParameter___get_offset__impl__x7fx93(parameter4);
      // Inline function 'androidx.compose.runtime.debugRuntimeCheck' call
      var value = ($this$with.o1y_1 & mask) === 0;
      if (false && !value) {
        var tmp$ret$0 = 'Already pushed argument(s) ' + _WriteScope___get_operation__impl__krvgwa($this).l20(parameter1) + (', ' + _WriteScope___get_operation__impl__krvgwa($this).l20(parameter2)) + (', ' + _WriteScope___get_operation__impl__krvgwa($this).l20(parameter3)) + (', ' + _WriteScope___get_operation__impl__krvgwa($this).l20(parameter4));
        composeImmediateRuntimeError(tmp$ret$0);
      }
      $this$with.o1y_1 = $this$with.o1y_1 | mask;
    }
    var tmp = $this$with.n1y_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.peekOperation' call
    var base = tmp - $this$with.i1y_1[$this$with.j1y_1 - 1 | 0].z1y_1 | 0;
    var objectArgs = $this$with.m1y_1;
    objectArgs[base + _ObjectParameter___get_offset__impl__x7fx93(parameter1) | 0] = value1;
    objectArgs[base + _ObjectParameter___get_offset__impl__x7fx93(parameter2) | 0] = value2;
    objectArgs[base + _ObjectParameter___get_offset__impl__x7fx93(parameter3) | 0] = value3;
    objectArgs[base + _ObjectParameter___get_offset__impl__x7fx93(parameter4) | 0] = value4;
    return Unit_instance;
  }
  function access$_get_stack__7szo53($this) {
    return _get_stack__b8zp2v($this);
  }
  function determineNewSize($this, currentSize, requiredSize) {
    var resizeAmount = coerceAtMost(currentSize, 1024);
    return coerceAtLeast(currentSize + resizeAmount | 0, requiredSize);
  }
  function resizeOpCodes($this) {
    var resizeAmount = coerceAtMost($this.j1y_1, 1024);
    // Inline function 'kotlin.arrayOfNulls' call
    var size = $this.j1y_1 + resizeAmount | 0;
    var tmp = Array(size);
    var newOpCodes = isArray(tmp) ? tmp : THROW_CCE();
    var tmp_0 = $this;
    var tmp0 = $this.i1y_1;
    // Inline function 'androidx.compose.runtime.collection.fastCopyInto' call
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = $this.j1y_1;
    arrayCopy(tmp0, newOpCodes, 0, 0, endIndex);
    tmp_0.i1y_1 = newOpCodes;
  }
  function resizeIntArgs($this, currentSize, requiredSize) {
    var newIntArgs = new Int32Array(determineNewSize($this, currentSize, requiredSize));
    // Inline function 'kotlin.collections.copyInto' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = $this.k1y_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, newIntArgs, 0, 0, currentSize);
    $this.k1y_1 = newIntArgs;
  }
  function resizeObjectArgs($this, currentSize, requiredSize) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = determineNewSize($this, currentSize, requiredSize);
    var newObjectArgs = Array(size);
    // Inline function 'androidx.compose.runtime.collection.fastCopyInto' call
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = $this.m1y_1;
    arrayCopy(this_0, newObjectArgs, 0, 0, currentSize);
    $this.m1y_1 = newObjectArgs;
  }
  function exceptionMessageForOperationPushNoScope($this, operation) {
    return 'Cannot push ' + operation.toString() + ' without arguments because it expects ' + ('' + operation.y1y_1 + ' ints and ' + operation.z1y_1 + ' objects.');
  }
  function exceptionMessageForOperationPushWithScope($this, operation) {
    var missingIntCount = 0;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.repeat' call
    var times = operation.y1y_1;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if ((1 << index & $this.o1y_1) === 0) {
          if (missingIntCount > 0) {
            this_0.c8(', ');
          }
          this_0.c8(operation.a1z(index));
          missingIntCount = missingIntCount + 1 | 0;
        }
      }
       while (inductionVariable < times);
    var missingInts = this_0.toString();
    var missingObjectCount = 0;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_1 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.repeat' call
    var times_0 = operation.z1y_1;
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < times_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if ((1 << index_0 & $this.p1y_1) === 0) {
          if (missingIntCount > 0) {
            this_1.c8(', ');
          }
          this_1.c8(operation.l20(_ObjectParameter___init__impl__iyg1ip(index_0)));
          missingObjectCount = missingObjectCount + 1 | 0;
        }
      }
       while (inductionVariable_0 < times_0);
    var missingObjects = this_1.toString();
    return 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
  }
  function OpIterator($outer) {
    this.g23_1 = $outer;
    this.d23_1 = 0;
    this.e23_1 = 0;
    this.f23_1 = 0;
  }
  protoOf(OpIterator).i = function () {
    if (this.d23_1 >= this.g23_1.j1y_1)
      return false;
    var op = this.h23();
    this.e23_1 = this.e23_1 + op.y1y_1 | 0;
    this.f23_1 = this.f23_1 + op.z1y_1 | 0;
    this.d23_1 = this.d23_1 + 1 | 0;
    return this.d23_1 < this.g23_1.j1y_1;
  };
  protoOf(OpIterator).h23 = function () {
    return this.g23_1.i1y_1[this.d23_1];
  };
  protoOf(OpIterator).j20 = function (parameter) {
    return this.g23_1.k1y_1[this.e23_1 + parameter | 0];
  };
  protoOf(OpIterator).o20 = function (parameter) {
    var tmp = this.g23_1.m1y_1[this.f23_1 + _ObjectParameter___get_offset__impl__x7fx93(parameter) | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  function access$_get_pushedIntMask__wrtr8x($this) {
    return $this.o1y_1;
  }
  function access$_set_pushedIntMask__hk28ql($this, _set____db54di) {
    $this.o1y_1 = _set____db54di;
    return Unit_instance;
  }
  function Operations() {
    OperationsDebugStringFormattable.call(this);
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = Array(16);
    tmp.i1y_1 = isArray(tmp_0) ? tmp_0 : THROW_CCE();
    this.j1y_1 = 0;
    this.k1y_1 = new Int32Array(16);
    this.l1y_1 = 0;
    var tmp_1 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_1.m1y_1 = Array(16);
    this.n1y_1 = 0;
    this.o1y_1 = 0;
    this.p1y_1 = 0;
  }
  protoOf(Operations).j = function () {
    return this.j1y_1;
  };
  protoOf(Operations).r = function () {
    return this.j() === 0;
  };
  protoOf(Operations).cy = function () {
    return !(this.j() === 0);
  };
  protoOf(Operations).y1 = function () {
    this.j1y_1 = 0;
    this.l1y_1 = 0;
    fill_0(this.m1y_1, null, 0, this.n1y_1);
    this.n1y_1 = 0;
  };
  protoOf(Operations).s1y = function (operation) {
    if (false) {
      this.o1y_1 = 0;
      this.p1y_1 = 0;
    }
    if (this.j1y_1 === this.i1y_1.length) {
      resizeOpCodes(this);
    }
    // Inline function 'androidx.compose.runtime.changelist.Operations.ensureIntArgsSizeAtLeast' call
    var requiredSize = this.l1y_1 + operation.y1y_1 | 0;
    var currentSize = this.k1y_1.length;
    if (requiredSize > currentSize) {
      resizeIntArgs(this, currentSize, requiredSize);
    }
    // Inline function 'androidx.compose.runtime.changelist.Operations.ensureObjectArgsSizeAtLeast' call
    var requiredSize_0 = this.n1y_1 + operation.z1y_1 | 0;
    var currentSize_0 = this.m1y_1.length;
    if (requiredSize_0 > currentSize_0) {
      resizeObjectArgs(this, currentSize_0, requiredSize_0);
    }
    var tmp = this.i1y_1;
    var _unary__edvuaz = this.j1y_1;
    this.j1y_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = operation;
    this.l1y_1 = this.l1y_1 + operation.y1y_1 | 0;
    this.n1y_1 = this.n1y_1 + operation.z1y_1 | 0;
  };
  protoOf(Operations).f1z = function (operation) {
    if (false) {
      // Inline function 'androidx.compose.runtime.requirePrecondition' call
      if (!((operation.y1y_1 & operation.z1y_1) === 0)) {
        var tmp$ret$0 = exceptionMessageForOperationPushNoScope(this, operation);
        throwIllegalArgumentException(tmp$ret$0);
      }
    }
    this.s1y(operation);
  };
  protoOf(Operations).t1y = function (operation) {
    var tmp;
    var tmp_0 = this.o1y_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.createExpectedArgMask' call
    var paramCount = operation.y1y_1;
    if (tmp_0 === ((paramCount === 0 ? 0 : -1) >>> (32 - paramCount | 0) | 0)) {
      var tmp_1 = this.p1y_1;
      // Inline function 'androidx.compose.runtime.changelist.Operations.createExpectedArgMask' call
      var paramCount_0 = operation.z1y_1;
      tmp = tmp_1 === ((paramCount_0 === 0 ? 0 : -1) >>> (32 - paramCount_0 | 0) | 0);
    } else {
      tmp = false;
    }
    // Inline function 'androidx.compose.runtime.debugRuntimeCheck' call
    var value = tmp;
    if (false && !value) {
      var tmp$ret$2 = exceptionMessageForOperationPushWithScope(this, operation);
      composeImmediateRuntimeError(tmp$ret$2);
    }
  };
  protoOf(Operations).f20 = function (other) {
    var opCodes = this.i1y_1;
    this.j1y_1 = this.j1y_1 - 1 | 0;
    var op = opCodes[this.j1y_1];
    (isArray(opCodes) ? opCodes : THROW_CCE())[this.j1y_1] = null;
    other.s1y(op);
    var tmp0 = this.m1y_1;
    var tmp2 = other.m1y_1;
    var tmp4 = other.n1y_1 - op.z1y_1 | 0;
    var tmp6 = this.n1y_1 - op.z1y_1 | 0;
    // Inline function 'androidx.compose.runtime.collection.fastCopyInto' call
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = this.n1y_1;
    arrayCopy(tmp0, tmp2, tmp4, tmp6, endIndex);
    fill_0(this.m1y_1, null, this.n1y_1 - op.z1y_1 | 0, this.n1y_1);
    var tmp0_0 = this.k1y_1;
    var tmp2_0 = other.k1y_1;
    var tmp4_0 = other.l1y_1 - op.y1y_1 | 0;
    var tmp6_0 = this.l1y_1 - op.y1y_1 | 0;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex_0 = this.l1y_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, tmp2_0, tmp4_0, tmp6_0, endIndex_0);
    this.n1y_1 = this.n1y_1 - op.z1y_1 | 0;
    this.l1y_1 = this.l1y_1 - op.y1y_1 | 0;
  };
  protoOf(Operations).q1y = function (applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.drain' call
    // Inline function 'androidx.compose.runtime.changelist.Operations.forEach' call
    if (this.cy()) {
      var iterator = new OpIterator(this);
      do {
        // Inline function 'kotlin.with' call
        iterator.h23().i20(iterator, applier, slots, rememberManager);
      }
       while (iterator.i());
    }
    this.y1();
  };
  protoOf(Operations).toString = function () {
    return protoOf(OperationsDebugStringFormattable).toString.call(this);
  };
  function removeLast(_this__u8e3s4) {
    if (_this__u8e3s4.r())
      throw NoSuchElementException_init_$Create$('List is empty.');
    var last = _this__u8e3s4.j() - 1 | 0;
    // Inline function 'kotlin.also' call
    var this_0 = _this__u8e3s4.p(last);
    _this__u8e3s4.b2(last);
    return this_0;
  }
  function sortedBy(_this__u8e3s4, selector) {
    var tmp;
    if (isSorted(_this__u8e3s4, selector)) {
      tmp = _this__u8e3s4;
    } else {
      // Inline function 'kotlin.also' call
      var this_0 = toMutableObjectList(_this__u8e3s4);
      sortBy(this_0, selector);
      tmp = this_0;
    }
    return tmp;
  }
  function isSorted(_this__u8e3s4, selector) {
    if (_this__u8e3s4.j() <= 1)
      return true;
    var previousValue = _this__u8e3s4.p(0);
    var tmp0_elvis_lhs = selector(previousValue);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var previousKey = tmp;
    var inductionVariable = 1;
    var last = _this__u8e3s4.j();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var value = _this__u8e3s4.p(i);
        var tmp1_elvis_lhs = selector(value);
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          return false;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        var key = tmp_0;
        if (compareTo(previousKey, key) > 0)
          return false;
        previousKey = key;
      }
       while (inductionVariable < last);
    return true;
  }
  function toMutableObjectList(_this__u8e3s4) {
    var target = new MutableObjectList(_this__u8e3s4.j());
    // Inline function 'androidx.collection.ObjectList.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var content = _this__u8e3s4.zx_1;
    var inductionVariable = 0;
    var last = _this__u8e3s4.ay_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = content[i];
        // Inline function 'androidx.collection.MutableObjectList.plusAssign' call
        var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
        target.e(element);
      }
       while (inductionVariable < last);
    return target;
  }
  function sortBy(_this__u8e3s4, selector) {
    // Inline function 'kotlin.collections.sortBy' call
    var this_0 = _this__u8e3s4.az();
    if (this_0.j() > 1) {
      // Inline function 'kotlin.comparisons.compareBy' call
      var tmp = sortBy$lambda(selector);
      var tmp$ret$0 = new sam$kotlin_Comparator$0_0(tmp);
      sortWith(this_0, tmp$ret$0);
    }
  }
  function sam$kotlin_Comparator$0_0(function_0) {
    this.i23_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_0).kd = function (a, b) {
    return this.i23_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).compare = function (a, b) {
    return this.kd(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).k3 = function () {
    return this.i23_1;
  };
  protoOf(sam$kotlin_Comparator$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.k3(), other.k3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlin_Comparator$0_0).hashCode = function () {
    return hashCode(this.k3());
  };
  function sortBy$lambda($selector) {
    return function (a, b) {
      // Inline function 'kotlin.comparisons.compareValuesBy' call
      return compareValues($selector(a), $selector(b));
    };
  }
  function _MultiValueMap___init__impl__qt1z0r(map) {
    map = map === VOID ? new MutableScatterMap() : map;
    return map;
  }
  function _get_map__e6co1h($this) {
    return $this;
  }
  function MultiValueMap__add_impl_ww0640($this, key, value) {
    // Inline function 'androidx.collection.MutableScatterMap.compute' call
    var this_0 = _get_map__e6co1h($this);
    var index = this_0.nz(key);
    var inserting = index < 0;
    var tmp;
    if (inserting) {
      tmp = null;
    } else {
      var tmp_0 = this_0.dz_1[index];
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    }
    var previous = tmp;
    // Inline function 'androidx.compose.runtime.debugRuntimeCheck' call
    var value_0 = !(!(previous == null) ? isInterface(previous, KtMutableList) : false);
    if (false && !value_0) {
      var tmp$ret$0 = 'Unexpected value';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var tmp_1;
    if (previous == null) {
      tmp_1 = value;
    } else {
      if (previous instanceof MutableObjectList) {
        var list = previous instanceof MutableObjectList ? previous : THROW_CCE();
        list.e(value);
        tmp_1 = list;
      } else {
        tmp_1 = mutableObjectListOf(previous, value);
      }
    }
    var computedValue = tmp_1;
    if (inserting) {
      var insertionIndex = ~index;
      this_0.cz_1[insertionIndex] = key;
      this_0.dz_1[insertionIndex] = computedValue;
    } else {
      this_0.dz_1[index] = computedValue;
    }
  }
  function MultiValueMap__clear_impl_g4umn0($this) {
    return _get_map__e6co1h($this).y1();
  }
  function MultiValueMap__contains_impl_2yjtfa($this, key) {
    return _get_map__e6co1h($this).q5(key);
  }
  function MultiValueMap__get_impl_k8msu3($this, key) {
    var entry = _get_map__e6co1h($this).h2(key);
    var tmp;
    if (entry == null) {
      tmp = emptyObjectList();
    } else {
      if (entry instanceof MutableObjectList) {
        tmp = entry instanceof ObjectList ? entry : THROW_CCE();
      } else {
        tmp = objectListOf(!(entry == null) ? entry : THROW_CCE());
      }
    }
    return tmp;
  }
  function MultiValueMap__isEmpty_impl_n67ooe($this) {
    return _get_map__e6co1h($this).r();
  }
  function MultiValueMap__isNotEmpty_impl_ktqbr9($this) {
    return _get_map__e6co1h($this).cy();
  }
  function MultiValueMap__removeLast_impl_h7l98v($this, key) {
    var entry = _get_map__e6co1h($this).h2(key);
    var tmp;
    if (entry == null) {
      tmp = null;
    } else {
      if (entry instanceof MutableObjectList) {
        var list = entry instanceof MutableObjectList ? entry : THROW_CCE();
        var tmp_0 = removeLast(list);
        var result = !(tmp_0 == null) ? tmp_0 : THROW_CCE();
        if (list.r()) {
          _get_map__e6co1h($this).m2(key);
        }
        if (list.j() === 1) {
          _get_map__e6co1h($this).mz(key, list.fw());
        }
        tmp = result;
      } else {
        _get_map__e6co1h($this).m2(key);
        tmp = !(entry == null) ? entry : THROW_CCE();
      }
    }
    return tmp;
  }
  function MultiValueMap__removeFirst_impl_iz2i9x($this, key) {
    var entry = _get_map__e6co1h($this).h2(key);
    var tmp;
    if (entry == null) {
      tmp = null;
    } else {
      if (entry instanceof MutableObjectList) {
        var list = entry instanceof MutableObjectList ? entry : THROW_CCE();
        var result = list.b2(0);
        if (list.r()) {
          _get_map__e6co1h($this).m2(key);
        }
        if (list.j() === 1) {
          _get_map__e6co1h($this).mz(key, list.fw());
        }
        tmp = result;
      } else {
        _get_map__e6co1h($this).m2(key);
        tmp = !(entry == null) ? entry : THROW_CCE();
      }
    }
    return tmp;
  }
  function MultiValueMap__values_impl_vxaj3b($this) {
    if (_get_map__e6co1h($this).r())
      return emptyObjectList();
    // Inline function 'androidx.collection.mutableObjectListOf' call
    var result = new MutableObjectList();
    // Inline function 'androidx.collection.ScatterMap.forEachValue' call
    var this_0 = _get_map__e6co1h($this);
    var v = this_0.dz_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this_0.bz_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_1 = slot;
          if (!this_1.f3(this_1.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  var tmp = v[index];
                  var entry = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  if (entry instanceof MutableObjectList) {
                    result.wy(entry instanceof MutableObjectList ? entry : THROW_CCE());
                  } else {
                    result.e(!(entry == null) ? entry : THROW_CCE());
                  }
                }
                slot = slot.d3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return result;
  }
  function MultiValueMap__removeValueIf_impl_q0rlrt($this, key, condition) {
    var tmp0_safe_receiver = _get_map__e6co1h($this).h2(key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      if (tmp0_safe_receiver instanceof MutableObjectList) {
        // Inline function 'androidx.collection.MutableObjectList.removeIf' call
        var this_0 = tmp0_safe_receiver instanceof MutableObjectList ? tmp0_safe_receiver : THROW_CCE();
        var gap = 0;
        var size = this_0.ay_1;
        var content = this_0.zx_1;
        // Inline function 'androidx.collection.ObjectList.indices' call
        var progression = until(0, this_0.ay_1);
        var inductionVariable = progression.z_1;
        var last = progression.a1_1;
        if (inductionVariable <= last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            content[i - gap | 0] = content[i];
            var tmp = content[i];
            if (condition((tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE())) {
              gap = gap + 1 | 0;
            }
          }
           while (!(i === last));
        fill_0(content, null, size - gap | 0, size);
        this_0.ay_1 = this_0.ay_1 - gap | 0;
        if (tmp0_safe_receiver.r()) {
          _get_map__e6co1h($this).m2(key);
        }
        if (tmp0_safe_receiver.j() === 0) {
          _get_map__e6co1h($this).mz(key, tmp0_safe_receiver.fw());
        }
      } else {
        if (condition(!(tmp0_safe_receiver == null) ? tmp0_safe_receiver : THROW_CCE())) {
          _get_map__e6co1h($this).m2(key);
        }
      }
    }
  }
  function MultiValueMap__toString_impl_9zsder($this) {
    return 'MultiValueMap(map=' + $this.toString() + ')';
  }
  function MultiValueMap__hashCode_impl_vqya7m($this) {
    return $this.hashCode();
  }
  function MultiValueMap__equals_impl_qimysq($this, other) {
    if (!(other instanceof MultiValueMap))
      return false;
    var tmp0_other_with_cast = other instanceof MultiValueMap ? other.o1k_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function access$_get_map__v7axsb($this) {
    return _get_map__e6co1h($this);
  }
  function MultiValueMap(map) {
    this.o1k_1 = map;
  }
  protoOf(MultiValueMap).toString = function () {
    return MultiValueMap__toString_impl_9zsder(this.o1k_1);
  };
  protoOf(MultiValueMap).hashCode = function () {
    return MultiValueMap__hashCode_impl_vqya7m(this.o1k_1);
  };
  protoOf(MultiValueMap).equals = function (other) {
    return MultiValueMap__equals_impl_qimysq(this.o1k_1, other);
  };
  var androidx_compose_runtime_collection_MutableVector$stable;
  function MutableVector(content, size) {
    this.b1e_1 = content;
    this.c1e_1 = null;
    this.d1e_1 = size;
  }
  protoOf(MutableVector).jy = function (element) {
    // Inline function 'androidx.compose.runtime.collection.MutableVector.ensureCapacity' call
    var capacity = this.d1e_1 + 1 | 0;
    if (this.b1e_1.length < capacity) {
      this.j23(capacity);
    }
    this.b1e_1[this.d1e_1] = element;
    this.d1e_1 = this.d1e_1 + 1 | 0;
    return true;
  };
  protoOf(MutableVector).k23 = function (index, elements) {
    if (elements.r())
      return false;
    var elementsSize = elements.j();
    // Inline function 'androidx.compose.runtime.collection.MutableVector.ensureCapacity' call
    var capacity = this.d1e_1 + elementsSize | 0;
    if (this.b1e_1.length < capacity) {
      this.j23(capacity);
    }
    var content = this.b1e_1;
    if (!(index === this.d1e_1)) {
      var tmp4 = index + elementsSize | 0;
      // Inline function 'androidx.compose.runtime.collection.fastCopyInto' call
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.d1e_1;
      arrayCopy(content, content, tmp4, index, endIndex);
    }
    var inductionVariable = 0;
    var last = elements.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        content[index + i | 0] = elements.p(i);
      }
       while (inductionVariable <= last);
    this.d1e_1 = this.d1e_1 + elementsSize | 0;
    return true;
  };
  protoOf(MutableVector).y1 = function () {
    var content = this.b1e_1;
    var inductionVariable = 0;
    var last = this.d1e_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        content[i] = null;
      }
       while (inductionVariable < last);
    this.d1e_1 = 0;
  };
  protoOf(MutableVector).te = function (element) {
    var inductionVariable = 0;
    // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
    var last = this.d1e_1 - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.collection.MutableVector.get' call
        var index = i;
        var tmp = this.b1e_1[index];
        var tmp$ret$1 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
        if (equals(tmp$ret$1, element))
          return true;
      }
       while (!(i === last));
    return false;
  };
  protoOf(MutableVector).j23 = function (capacity) {
    var oldContent = this.b1e_1;
    var oldSize = oldContent.length;
    // Inline function 'kotlin.math.max' call
    var b = imul(oldSize, 2);
    var newSize = Math.max(capacity, b);
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp = Array(newSize);
    var newContent = isArray(tmp) ? tmp : THROW_CCE();
    // Inline function 'androidx.compose.runtime.collection.fastCopyInto' call
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(oldContent, newContent, 0, 0, oldSize);
    this.b1e_1 = newContent;
  };
  protoOf(MutableVector).b2 = function (index) {
    var content = this.b1e_1;
    var tmp = content[index];
    var item = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
    if (!(index === (this.d1e_1 - 1 | 0))) {
      var tmp6 = index + 1 | 0;
      // Inline function 'androidx.compose.runtime.collection.fastCopyInto' call
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.d1e_1;
      arrayCopy(content, content, index, tmp6, endIndex);
    }
    this.d1e_1 = this.d1e_1 - 1 | 0;
    content[this.d1e_1] = null;
    return item;
  };
  protoOf(MutableVector).l1r = function (newSize) {
    this.d1e_1 = newSize;
  };
  var androidx_compose_runtime_collection_ScatterSetWrapper$stable;
  function wrapIntoSet(_this__u8e3s4) {
    return new ScatterSetWrapper(_this__u8e3s4);
  }
  function ScatterSetWrapper$iterator$slambda(this$0, resultContinuation) {
    this.t23_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ScatterSetWrapper$iterator$slambda).o24 = function ($this$iterator, $completion) {
    var tmp = this.p24($this$iterator, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(ScatterSetWrapper$iterator$slambda).p9 = function (p1, $completion) {
    return this.o24(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ScatterSetWrapper$iterator$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 11;
            var tmp_0 = this;
            tmp_0.v23_1 = this.t23_1.f1l_1;
            this.w23_1 = this.v23_1;
            this.x23_1 = this.w23_1.pz_1;
            var tmp_1 = this;
            tmp_1.y23_1 = this.w23_1;
            this.v8_1 = 1;
            continue $sm;
          case 1:
            this.a24_1 = this.y23_1;
            this.b24_1 = this.a24_1.oz_1;
            this.c24_1 = this.b24_1.length - 2 | 0;
            this.d24_1 = numberRangeToNumber(0, this.c24_1).g();
            this.v8_1 = 2;
            continue $sm;
          case 2:
            if (!this.d24_1.h()) {
              this.v8_1 = 9;
              continue $sm;
            }

            this.e24_1 = this.d24_1.i();
            this.f24_1 = this.b24_1[this.e24_1];
            var this_0 = this.f24_1;
            if (!this_0.f3(this_0.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              this.g24_1 = 8 - (~(this.e24_1 - this.c24_1 | 0) >>> 31 | 0) | 0;
              this.h24_1 = until(0, this.g24_1).g();
              this.v8_1 = 3;
              continue $sm;
            } else {
              this.v8_1 = 8;
              continue $sm;
            }

          case 3:
            if (!this.h24_1.h()) {
              this.v8_1 = 6;
              continue $sm;
            }

            this.i24_1 = this.h24_1.i();
            if (this.f24_1.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
              this.j24_1 = (this.e24_1 << 3) + this.i24_1 | 0;
              var tmp_2 = this;
              tmp_2.k24_1 = this.j24_1;
              this.l24_1 = this.k24_1;
              var tmp_3 = this;
              var tmp_4 = this.x23_1[this.l24_1];
              tmp_3.m24_1 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
              this.n24_1 = this.m24_1;
              this.v8_1 = 4;
              suspendResult = this.u23_1.gf(this.n24_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.v8_1 = 5;
              continue $sm;
            }

          case 4:
            this.v8_1 = 5;
            continue $sm;
          case 5:
            this.f24_1 = this.f24_1.d3(8);
            this.v8_1 = 3;
            continue $sm;
          case 6:
            if (!(this.g24_1 === 8)) {
              this.z23_1 = Unit_instance;
              this.v8_1 = 10;
              continue $sm;
            } else {
              this.v8_1 = 7;
              continue $sm;
            }

          case 7:
            this.v8_1 = 8;
            continue $sm;
          case 8:
            this.v8_1 = 2;
            continue $sm;
          case 9:
            this.z23_1 = Unit_instance;
            if (false) {
              this.v8_1 = 1;
              continue $sm;
            }

            this.v8_1 = 10;
            continue $sm;
          case 10:
            return Unit_instance;
          case 11:
            throw this.y8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.w8_1 === 11) {
          throw e;
        } else {
          this.v8_1 = this.w8_1;
          this.y8_1 = e;
        }
      }
     while (true);
  };
  protoOf(ScatterSetWrapper$iterator$slambda).p24 = function ($this$iterator, completion) {
    var i = new ScatterSetWrapper$iterator$slambda(this.t23_1, completion);
    i.u23_1 = $this$iterator;
    return i;
  };
  function ScatterSetWrapper$iterator$slambda_0(this$0, resultContinuation) {
    var i = new ScatterSetWrapper$iterator$slambda(this$0, resultContinuation);
    var l = function ($this$iterator, $completion) {
      return i.o24($this$iterator, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ScatterSetWrapper(set) {
    this.f1l_1 = set;
  }
  protoOf(ScatterSetWrapper).j = function () {
    return this.f1l_1.j();
  };
  protoOf(ScatterSetWrapper).r = function () {
    return this.f1l_1.r();
  };
  protoOf(ScatterSetWrapper).g = function () {
    return iterator(ScatterSetWrapper$iterator$slambda_0(this, null));
  };
  protoOf(ScatterSetWrapper).q24 = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.r();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = elements.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        if (!this.f1l_1.o(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(ScatterSetWrapper).u1 = function (elements) {
    return this.q24(elements);
  };
  protoOf(ScatterSetWrapper).te = function (element) {
    return this.f1l_1.o(element);
  };
  protoOf(ScatterSetWrapper).o = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.te((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function _ScopeMap___init__impl__52wntz(map) {
    map = map === VOID ? mutableScatterMapOf() : map;
    return map;
  }
  function _ScopeMap___get_map__impl__vxhazm($this) {
    return $this;
  }
  function _ScopeMap___get_size__impl__f25bvl($this) {
    return _ScopeMap___get_map__impl__vxhazm($this).j();
  }
  function ScopeMap__add_impl_n8b3uc($this, key, scope) {
    // Inline function 'androidx.collection.MutableScatterMap.compute' call
    var this_0 = _ScopeMap___get_map__impl__vxhazm($this);
    var index = this_0.nz(key);
    var inserting = index < 0;
    var tmp;
    if (inserting) {
      tmp = null;
    } else {
      var tmp_0 = this_0.dz_1[index];
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    }
    var value = tmp;
    var tmp_1;
    if (value == null) {
      tmp_1 = scope;
    } else {
      if (value instanceof MutableScatterSet) {
        (value instanceof MutableScatterSet ? value : THROW_CCE()).e(scope);
        tmp_1 = value;
      } else {
        var tmp_2;
        if (!(value === scope)) {
          var set = new MutableScatterSet();
          set.e(!(value == null) ? value : THROW_CCE());
          set.e(scope);
          tmp_2 = set;
        } else {
          tmp_2 = value;
        }
        tmp_1 = tmp_2;
      }
    }
    var computedValue = tmp_1;
    if (inserting) {
      var insertionIndex = ~index;
      this_0.cz_1[insertionIndex] = key;
      this_0.dz_1[insertionIndex] = computedValue;
    } else {
      this_0.dz_1[index] = computedValue;
    }
  }
  function ScopeMap__set_impl_3y8kbx($this, key, value) {
    _ScopeMap___get_map__impl__vxhazm($this).mz(key, value);
  }
  function ScopeMap__contains_impl_6qp7s6($this, element) {
    return _ScopeMap___get_map__impl__vxhazm($this).f2(element);
  }
  function ScopeMap__remove_impl_ocu4rj($this, key, scope) {
    var tmp0_elvis_lhs = _ScopeMap___get_map__impl__vxhazm($this).h2(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var value = tmp;
    var tmp_0;
    if (value instanceof MutableScatterSet) {
      var set = value instanceof MutableScatterSet ? value : THROW_CCE();
      var removed = set.v1(scope);
      if (removed && set.r()) {
        _ScopeMap___get_map__impl__vxhazm($this).m2(key);
      }
      return removed;
    } else {
      if (equals(value, scope)) {
        _ScopeMap___get_map__impl__vxhazm($this).m2(key);
        tmp_0 = true;
      } else {
        tmp_0 = false;
      }
    }
    return tmp_0;
  }
  function ScopeMap__removeScope_impl_8k6ux1($this, scope) {
    // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
    var this_0 = _ScopeMap___get_map__impl__vxhazm($this);
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this_0.bz_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_1 = slot;
          if (!this_1.f3(this_1.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  var tmp = this_0.cz_1[index];
                  (tmp == null ? true : !(tmp == null)) || THROW_CCE();
                  var tmp_0 = this_0.dz_1[index];
                  var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  var tmp_1;
                  if (value instanceof MutableScatterSet) {
                    var set = value instanceof MutableScatterSet ? value : THROW_CCE();
                    set.v1(scope);
                    tmp_1 = set.r();
                  } else {
                    tmp_1 = value === scope;
                  }
                  if (tmp_1) {
                    this_0.zw(index);
                  }
                }
                slot = slot.d3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
  }
  function ScopeMap__asMap_impl_uiab3f($this) {
    // Inline function 'kotlin.collections.hashMapOf' call
    var result = HashMap_init_$Create$_0();
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var this_0 = _ScopeMap___get_map__impl__vxhazm($this);
    var k = this_0.cz_1;
    var v = this_0.dz_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this_0.bz_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_1 = slot;
          if (!this_1.f3(this_1.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  var tmp = k[index];
                  var tmp0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp_0 = v[index];
                  var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  var tmp2 = !(tmp0 == null) ? tmp0 : THROW_CCE();
                  var tmp_1;
                  if (value instanceof MutableScatterSet) {
                    var set = value instanceof MutableScatterSet ? value : THROW_CCE();
                    tmp_1 = set.tz();
                  } else {
                    tmp_1 = mutableSetOf([!(value == null) ? value : THROW_CCE()]);
                  }
                  // Inline function 'kotlin.collections.set' call
                  var value_0 = tmp_1;
                  result.l2(tmp2, value_0);
                }
                slot = slot.d3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return result;
  }
  var androidx_compose_runtime_external_kotlinx_collections_immutable_adapters_ImmutableCollectionAdapter$stable;
  var androidx_compose_runtime_external_kotlinx_collections_immutable_adapters_ImmutableListAdapter$stable;
  var androidx_compose_runtime_external_kotlinx_collections_immutable_adapters_ImmutableSetAdapter$stable;
  var androidx_compose_runtime_external_kotlinx_collections_immutable_adapters_ImmutableMapAdapter$stable;
  function persistentSetOf() {
    return Companion_getInstance_8().s24();
  }
  function persistentHashMapOf() {
    return Companion_getInstance_6().u24();
  }
  function persistentListOf() {
    return persistentVectorOf();
  }
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableList_AbstractListIterator$stable;
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableList_SingleElementListIterator$stable;
  function SingleElementListIterator(element, index) {
    AbstractListIterator.call(this, index, 1);
    this.x24_1 = element;
  }
  protoOf(SingleElementListIterator).i = function () {
    this.a25();
    this.y24_1 = this.y24_1 + 1 | 0;
    return this.x24_1;
  };
  protoOf(SingleElementListIterator).m4 = function () {
    this.b25();
    this.y24_1 = this.y24_1 - 1 | 0;
    return this.x24_1;
  };
  function AbstractListIterator(index, size) {
    this.y24_1 = index;
    this.z24_1 = size;
  }
  protoOf(AbstractListIterator).h = function () {
    return this.y24_1 < this.z24_1;
  };
  protoOf(AbstractListIterator).k4 = function () {
    return this.y24_1 > 0;
  };
  protoOf(AbstractListIterator).l4 = function () {
    return this.y24_1;
  };
  protoOf(AbstractListIterator).n4 = function () {
    return this.y24_1 - 1 | 0;
  };
  protoOf(AbstractListIterator).a25 = function () {
    if (!this.h())
      throw NoSuchElementException_init_$Create$_0();
  };
  protoOf(AbstractListIterator).b25 = function () {
    if (!this.k4())
      throw NoSuchElementException_init_$Create$_0();
  };
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableList_AbstractPersistentList$stable;
  function AbstractPersistentList$removeAll$lambda($elements) {
    return function (it) {
      return $elements.o(it);
    };
  }
  function AbstractPersistentList() {
    AbstractList.call(this);
  }
  protoOf(AbstractPersistentList).n = function (elements) {
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.mutate' call
    // Inline function 'kotlin.apply' call
    var this_0 = this.c25();
    this_0.n(elements);
    return this_0.d25();
  };
  protoOf(AbstractPersistentList).v1 = function (element) {
    var index = this.s(element);
    if (!(index === -1)) {
      return this.b2(index);
    }
    return this;
  };
  protoOf(AbstractPersistentList).x1 = function (elements) {
    return this.e25(AbstractPersistentList$removeAll$lambda(elements));
  };
  protoOf(AbstractPersistentList).o = function (element) {
    return !(this.s(element) === -1);
  };
  protoOf(AbstractPersistentList).g = function () {
    return this.t1();
  };
  protoOf(AbstractPersistentList).t1 = function () {
    return this.q(0);
  };
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableList_BufferIterator$stable;
  function BufferIterator(buffer, index, size) {
    AbstractListIterator.call(this, index, size);
    this.i25_1 = buffer;
  }
  protoOf(BufferIterator).i = function () {
    if (!this.h()) {
      throw NoSuchElementException_init_$Create$_0();
    }
    var _unary__edvuaz = this.y24_1;
    this.y24_1 = _unary__edvuaz + 1 | 0;
    return this.i25_1[_unary__edvuaz];
  };
  protoOf(BufferIterator).m4 = function () {
    if (!this.k4()) {
      throw NoSuchElementException_init_$Create$_0();
    }
    this.y24_1 = this.y24_1 - 1 | 0;
    return this.i25_1[this.y24_1];
  };
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableList_PersistentVector$stable;
  function rootSize($this) {
    return rootSize_1($this.l25_1);
  }
  function pushFilledTail($this, root, filledTail, newTail) {
    if ($this.l25_1 >> 5 > 1 << $this.m25_1) {
      var newRoot = presizedBufferWith(root);
      var newRootShift = $this.m25_1 + 5 | 0;
      newRoot = pushTail($this, newRoot, newRootShift, filledTail);
      return new PersistentVector(newRoot, newTail, $this.l25_1 + 1 | 0, newRootShift);
    }
    var newRoot_0 = pushTail($this, root, $this.m25_1, filledTail);
    return new PersistentVector(newRoot_0, newTail, $this.l25_1 + 1 | 0, $this.m25_1);
  }
  function pushTail($this, root, shift, tail) {
    var bufferIndex = indexSegment($this.l25_1 - 1 | 0, shift);
    var tmp1_elvis_lhs = root == null ? null : copyOf_0(root, 32);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.arrayOfNulls' call
      tmp = Array(32);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var newRootNode = tmp;
    if (shift === 5) {
      newRootNode[bufferIndex] = tail;
    } else {
      var tmp_0 = newRootNode[bufferIndex];
      newRootNode[bufferIndex] = pushTail($this, (tmp_0 == null ? true : isArray(tmp_0)) ? tmp_0 : THROW_CCE(), shift - 5 | 0, tail);
    }
    return newRootNode;
  }
  function insertIntoTail($this, root, tailIndex, element) {
    var tailSize = $this.l25_1 - rootSize($this) | 0;
    var newTail = copyOf_0($this.k25_1, 32);
    if (tailSize < 32) {
      var tmp0 = $this.k25_1;
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = tailIndex + 1 | 0;
      arrayCopy(tmp0, newTail, destinationOffset, tailIndex, tailSize);
      newTail[tailIndex] = element;
      return new PersistentVector(root, newTail, $this.l25_1 + 1 | 0, $this.m25_1);
    }
    var lastElement = $this.k25_1[31];
    var tmp0_0 = $this.k25_1;
    var tmp4 = tailIndex + 1 | 0;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = tailSize - 1 | 0;
    arrayCopy(tmp0_0, newTail, tmp4, tailIndex, endIndex);
    newTail[tailIndex] = element;
    return pushFilledTail($this, root, newTail, presizedBufferWith(lastElement));
  }
  function insertIntoRoot($this, root, shift, index, element, elementCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var tmp;
      if (bufferIndex === 0) {
        // Inline function 'kotlin.arrayOfNulls' call
        tmp = Array(32);
      } else {
        tmp = copyOf_0(root, 32);
      }
      var newRoot = tmp;
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = bufferIndex + 1 | 0;
      arrayCopy(root, newRoot, destinationOffset, bufferIndex, 31);
      elementCarry.n25_1 = root[31];
      newRoot[bufferIndex] = element;
      return newRoot;
    }
    var newRoot_0 = copyOf_0(root, 32);
    var lowerLevelShift = shift - 5 | 0;
    var tmp_0 = root[bufferIndex];
    newRoot_0[bufferIndex] = insertIntoRoot($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, index, element, elementCarry);
    var inductionVariable = bufferIndex + 1 | 0;
    if (inductionVariable < 32)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (newRoot_0[i] == null)
          break $l$loop;
        var tmp_1 = root[i];
        newRoot_0[i] = insertIntoRoot($this, (!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE(), lowerLevelShift, 0, elementCarry.n25_1, elementCarry);
      }
       while (inductionVariable < 32);
    return newRoot_0;
  }
  function removeFromTailAt($this, root, rootSize, shift, index) {
    var tailSize = $this.l25_1 - rootSize | 0;
    assert(index < tailSize);
    if (tailSize === 1) {
      return pullLastBufferFromRoot($this, root, rootSize, shift);
    }
    var newTail = copyOf_0($this.k25_1, 32);
    if (index < (tailSize - 1 | 0)) {
      var tmp0 = $this.k25_1;
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = index + 1 | 0;
      arrayCopy(tmp0, newTail, index, startIndex, tailSize);
    }
    newTail[tailSize - 1 | 0] = null;
    return new PersistentVector(root, newTail, (rootSize + tailSize | 0) - 1 | 0, shift);
  }
  function pullLastBufferFromRoot($this, root, rootSize, shift) {
    if (shift === 0) {
      var buffer = root.length === 33 ? copyOf_0(root, 32) : root;
      return new SmallPersistentVector(buffer);
    }
    var tailCarry = new ObjectRef(null);
    var newRoot = ensureNotNull(pullLastBuffer($this, root, shift, rootSize - 1 | 0, tailCarry));
    var tmp = tailCarry.n25_1;
    var newTail = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
    if (newRoot[1] == null) {
      var tmp_0 = newRoot[0];
      var lowerLevelRoot = (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE();
      return new PersistentVector(lowerLevelRoot, newTail, rootSize, shift - 5 | 0);
    }
    return new PersistentVector(newRoot, newTail, rootSize, shift);
  }
  function pullLastBuffer($this, root, shift, index, tailCarry) {
    var bufferIndex = indexSegment(index, shift);
    var tmp;
    if (shift === 5) {
      tailCarry.n25_1 = root[bufferIndex];
      tmp = null;
    } else {
      var tmp_0 = root[bufferIndex];
      tmp = pullLastBuffer($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), shift - 5 | 0, index, tailCarry);
    }
    var newBufferAtIndex = tmp;
    if (newBufferAtIndex == null && bufferIndex === 0) {
      return null;
    }
    var newRoot = copyOf_0(root, 32);
    newRoot[bufferIndex] = newBufferAtIndex;
    return newRoot;
  }
  function removeFromRootAt($this, root, shift, index, tailCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var tmp;
      if (bufferIndex === 0) {
        // Inline function 'kotlin.arrayOfNulls' call
        tmp = Array(32);
      } else {
        tmp = copyOf_0(root, 32);
      }
      var newRoot = tmp;
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = bufferIndex + 1 | 0;
      arrayCopy(root, newRoot, bufferIndex, startIndex, 32);
      newRoot[31] = tailCarry.n25_1;
      tailCarry.n25_1 = root[bufferIndex];
      return newRoot;
    }
    var bufferLastIndex = 31;
    if (root[bufferLastIndex] == null) {
      bufferLastIndex = indexSegment(rootSize($this) - 1 | 0, shift);
    }
    var newRoot_0 = copyOf_0(root, 32);
    var lowerLevelShift = shift - 5 | 0;
    var inductionVariable = bufferLastIndex;
    var last = bufferIndex + 1 | 0;
    if (last <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp_0 = newRoot_0[i];
        newRoot_0[i] = removeFromRootAt($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, 0, tailCarry);
      }
       while (!(i === last));
    var tmp_1 = newRoot_0[bufferIndex];
    newRoot_0[bufferIndex] = removeFromRootAt($this, (!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE(), lowerLevelShift, index, tailCarry);
    return newRoot_0;
  }
  function bufferFor($this, index) {
    if (rootSize($this) <= index) {
      return $this.k25_1;
    }
    var buffer = $this.j25_1;
    var shift = $this.m25_1;
    while (shift > 0) {
      var tmp = buffer[indexSegment(index, shift)];
      buffer = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
      shift = shift - 5 | 0;
    }
    return buffer;
  }
  function setInRoot($this, root, shift, index, e) {
    var bufferIndex = indexSegment(index, shift);
    var newRoot = copyOf_0(root, 32);
    if (shift === 0) {
      newRoot[bufferIndex] = e;
    } else {
      var tmp = newRoot[bufferIndex];
      newRoot[bufferIndex] = setInRoot($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), shift - 5 | 0, index, e);
    }
    return newRoot;
  }
  function PersistentVector(root, tail, size, rootShift) {
    AbstractPersistentList.call(this);
    this.j25_1 = root;
    this.k25_1 = tail;
    this.l25_1 = size;
    this.m25_1 = rootShift;
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    if (!(this.l25_1 > 32)) {
      var tmp$ret$0 = 'Trie-based persistent vector should have at least ' + ('33 elements, got ' + this.l25_1);
      throwIllegalArgumentException(tmp$ret$0);
    }
    assert((this.l25_1 - rootSize_1(this.l25_1) | 0) <= coerceAtMost(this.k25_1.length, 32));
  }
  protoOf(PersistentVector).j = function () {
    return this.l25_1;
  };
  protoOf(PersistentVector).e = function (element) {
    var tailSize = this.l25_1 - rootSize(this) | 0;
    if (tailSize < 32) {
      var newTail = copyOf_0(this.k25_1, 32);
      newTail[tailSize] = element;
      return new PersistentVector(this.j25_1, newTail, this.l25_1 + 1 | 0, this.m25_1);
    }
    var newTail_0 = presizedBufferWith(element);
    return pushFilledTail(this, this.j25_1, this.k25_1, newTail_0);
  };
  protoOf(PersistentVector).f25 = function (index, element) {
    ListImplementation_instance.o25(index, this.l25_1);
    if (index === this.l25_1) {
      return this.e(element);
    }
    var rootSize_0 = rootSize(this);
    if (index >= rootSize_0) {
      return insertIntoTail(this, this.j25_1, index - rootSize_0 | 0, element);
    }
    var elementCarry = new ObjectRef(null);
    var newRoot = insertIntoRoot(this, this.j25_1, this.m25_1, index, element, elementCarry);
    return insertIntoTail(this, newRoot, 0, elementCarry.n25_1);
  };
  protoOf(PersistentVector).b2 = function (index) {
    ListImplementation_instance.p25(index, this.l25_1);
    var rootSize_0 = rootSize(this);
    if (index >= rootSize_0) {
      return removeFromTailAt(this, this.j25_1, rootSize_0, this.m25_1, index - rootSize_0 | 0);
    }
    var newRoot = removeFromRootAt(this, this.j25_1, this.m25_1, index, new ObjectRef(this.k25_1[0]));
    return removeFromTailAt(this, newRoot, rootSize_0, this.m25_1, 0);
  };
  protoOf(PersistentVector).e25 = function (predicate) {
    // Inline function 'kotlin.also' call
    var this_0 = this.c25();
    this_0.z25(predicate);
    return this_0.d25();
  };
  protoOf(PersistentVector).c25 = function () {
    return new PersistentVectorBuilder(this, this.j25_1, this.k25_1, this.m25_1);
  };
  protoOf(PersistentVector).q = function (index) {
    ListImplementation_instance.o25(index, this.l25_1);
    var tmp = this.k25_1;
    return new PersistentVectorIterator(this.j25_1, isArray(tmp) ? tmp : THROW_CCE(), index, this.l25_1, (this.m25_1 / 5 | 0) + 1 | 0);
  };
  protoOf(PersistentVector).p = function (index) {
    ListImplementation_instance.p25(index, this.l25_1);
    var buffer = bufferFor(this, index);
    var tmp = buffer[index & 31];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(PersistentVector).z1 = function (index, element) {
    ListImplementation_instance.p25(index, this.l25_1);
    if (rootSize(this) <= index) {
      var newTail = copyOf_0(this.k25_1, 32);
      newTail[index & 31] = element;
      return new PersistentVector(this.j25_1, newTail, this.l25_1, this.m25_1);
    }
    var newRoot = setInRoot(this, this.j25_1, this.m25_1, index, element);
    return new PersistentVector(newRoot, this.k25_1, this.l25_1, this.m25_1);
  };
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableList_PersistentVectorBuilder$stable;
  function rootSize_0($this) {
    if ($this.y25_1 <= 32) {
      return 0;
    }
    return rootSize_1($this.y25_1);
  }
  function tailSize($this, size) {
    if (size <= 32) {
      return size;
    }
    return size - rootSize_1(size) | 0;
  }
  function tailSize_0($this) {
    return tailSize($this, $this.y25_1);
  }
  function isMutable($this, buffer) {
    return buffer.length === 33 && buffer[32] === $this.v25_1;
  }
  function makeMutable($this, buffer) {
    if (buffer == null) {
      return mutableBuffer($this);
    }
    if (isMutable($this, buffer)) {
      return buffer;
    }
    var tmp2 = mutableBuffer($this);
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = coerceAtMost(buffer.length, 32);
    arrayCopy(buffer, tmp2, 0, 0, endIndex);
    return tmp2;
  }
  function makeMutableShiftingRight($this, buffer, distance) {
    if (isMutable($this, buffer)) {
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = 32 - distance | 0;
      arrayCopy(buffer, buffer, distance, 0, endIndex);
      return buffer;
    }
    var tmp2 = mutableBuffer($this);
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex_0 = 32 - distance | 0;
    arrayCopy(buffer, tmp2, distance, 0, endIndex_0);
    return tmp2;
  }
  function mutableBufferWith($this, element) {
    // Inline function 'kotlin.arrayOfNulls' call
    var buffer = Array(33);
    buffer[0] = element;
    buffer[32] = $this.v25_1;
    return buffer;
  }
  function mutableBuffer($this) {
    // Inline function 'kotlin.arrayOfNulls' call
    var buffer = Array(33);
    buffer[32] = $this.v25_1;
    return buffer;
  }
  function pushFilledTail_0($this, root, filledTail, newTail) {
    var tmp;
    if ($this.y25_1 >> 5 > 1 << $this.u25_1) {
      $this.w25_1 = pushTail_0($this, mutableBufferWith($this, root), filledTail, $this.u25_1 + 5 | 0);
      $this.x25_1 = newTail;
      $this.u25_1 = $this.u25_1 + 5 | 0;
      $this.y25_1 = $this.y25_1 + 1 | 0;
      tmp = Unit_instance;
    } else if (root == null) {
      $this.w25_1 = filledTail;
      $this.x25_1 = newTail;
      $this.y25_1 = $this.y25_1 + 1 | 0;
      tmp = Unit_instance;
    } else {
      $this.w25_1 = pushTail_0($this, root, filledTail, $this.u25_1);
      $this.x25_1 = newTail;
      $this.y25_1 = $this.y25_1 + 1 | 0;
      tmp = Unit_instance;
    }
    return tmp;
  }
  function pushTail_0($this, root, tail, shift) {
    var index = indexSegment($this.y25_1 - 1 | 0, shift);
    var mutableRoot = makeMutable($this, root);
    if (shift === 5) {
      mutableRoot[index] = tail;
    } else {
      var tmp = mutableRoot[index];
      mutableRoot[index] = pushTail_0($this, (tmp == null ? true : isArray(tmp)) ? tmp : THROW_CCE(), tail, shift - 5 | 0);
    }
    return mutableRoot;
  }
  function copyToBuffer($this, buffer, bufferIndex, sourceIterator) {
    var index = bufferIndex;
    while (index < 32 && sourceIterator.h()) {
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      buffer[_unary__edvuaz] = sourceIterator.i();
    }
    return buffer;
  }
  function pushBuffersIncreasingHeightIfNeeded($this, root, rootSize, buffers) {
    var buffersIterator = arrayIterator(buffers);
    var mutableRoot = rootSize >> 5 < 1 << $this.u25_1 ? pushBuffers($this, root, rootSize, $this.u25_1, buffersIterator) : makeMutable($this, root);
    while (buffersIterator.h()) {
      $this.u25_1 = $this.u25_1 + 5 | 0;
      mutableRoot = mutableBufferWith($this, mutableRoot);
      pushBuffers($this, mutableRoot, 1 << $this.u25_1, $this.u25_1, buffersIterator);
    }
    return mutableRoot;
  }
  function pushBuffers($this, root, rootSize, shift, buffersIterator) {
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    if (!buffersIterator.h()) {
      var tmp$ret$0 = 'invalid buffersIterator';
      throwIllegalArgumentException(tmp$ret$0);
    }
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    if (!(shift >= 0)) {
      var tmp$ret$2 = 'negative shift';
      throwIllegalArgumentException(tmp$ret$2);
    }
    if (shift === 0) {
      return buffersIterator.i();
    }
    var mutableRoot = makeMutable($this, root);
    var index = indexSegment(rootSize, shift);
    var tmp = index;
    var tmp_0 = mutableRoot[index];
    mutableRoot[tmp] = pushBuffers($this, (tmp_0 == null ? true : isArray(tmp_0)) ? tmp_0 : THROW_CCE(), rootSize, shift - 5 | 0, buffersIterator);
    $l$loop: while (true) {
      var tmp_1;
      index = index + 1 | 0;
      if (index < 32) {
        tmp_1 = buffersIterator.h();
      } else {
        tmp_1 = false;
      }
      if (!tmp_1) {
        break $l$loop;
      }
      var tmp_2 = index;
      var tmp_3 = mutableRoot[index];
      mutableRoot[tmp_2] = pushBuffers($this, (tmp_3 == null ? true : isArray(tmp_3)) ? tmp_3 : THROW_CCE(), 0, shift - 5 | 0, buffersIterator);
    }
    return mutableRoot;
  }
  function insertIntoTail_0($this, root, index, element) {
    var tailSize = tailSize_0($this);
    var mutableTail = makeMutable($this, $this.x25_1);
    if (tailSize < 32) {
      var tmp0 = $this.x25_1;
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = index + 1 | 0;
      arrayCopy(tmp0, mutableTail, destinationOffset, index, tailSize);
      mutableTail[index] = element;
      $this.w25_1 = root;
      $this.x25_1 = mutableTail;
      $this.y25_1 = $this.y25_1 + 1 | 0;
    } else {
      var lastElement = $this.x25_1[31];
      var tmp0_0 = $this.x25_1;
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset_0 = index + 1 | 0;
      arrayCopy(tmp0_0, mutableTail, destinationOffset_0, index, 31);
      mutableTail[index] = element;
      pushFilledTail_0($this, root, mutableTail, mutableBufferWith($this, lastElement));
    }
  }
  function insertIntoRoot_0($this, root, shift, index, element, elementCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      elementCarry.n25_1 = root[31];
      var tmp2 = makeMutable($this, root);
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = bufferIndex + 1 | 0;
      arrayCopy(root, tmp2, destinationOffset, bufferIndex, 31);
      var mutableRoot = tmp2;
      mutableRoot[bufferIndex] = element;
      return mutableRoot;
    }
    var mutableRoot_0 = makeMutable($this, root);
    var lowerLevelShift = shift - 5 | 0;
    var tmp = mutableRoot_0[bufferIndex];
    mutableRoot_0[bufferIndex] = insertIntoRoot_0($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), lowerLevelShift, index, element, elementCarry);
    var inductionVariable = bufferIndex + 1 | 0;
    if (inductionVariable < 32)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (mutableRoot_0[i] == null)
          break $l$loop;
        var tmp_0 = mutableRoot_0[i];
        mutableRoot_0[i] = insertIntoRoot_0($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, 0, elementCarry.n25_1, elementCarry);
      }
       while (inductionVariable < 32);
    return mutableRoot_0;
  }
  function insertIntoRoot_1($this, elements, index, rightShift, buffers, nullBuffers, nextBuffer) {
    var tmp0 = $this.w25_1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        var message = 'root is null';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        break $l$block;
      }
    }
    var startLeafIndex = index >> 5;
    var startLeaf = shiftLeafBuffers($this, startLeafIndex, rightShift, buffers, nullBuffers, nextBuffer);
    var lastLeafIndex = (rootSize_0($this) >> 5) - 1 | 0;
    var newNullBuffers = nullBuffers - (lastLeafIndex - startLeafIndex | 0) | 0;
    var newNextBuffer = newNullBuffers < nullBuffers ? ensureNotNull(buffers[newNullBuffers]) : nextBuffer;
    splitToBuffers($this, elements, index, startLeaf, 32, buffers, newNullBuffers, newNextBuffer);
  }
  function shiftLeafBuffers($this, startLeafIndex, rightShift, buffers, nullBuffers, nextBuffer) {
    var tmp0 = $this.w25_1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        var message = 'root is null';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        break $l$block;
      }
    }
    var leafCount = rootSize_0($this) >> 5;
    var leafBufferIterator_0 = leafBufferIterator($this, leafCount);
    var bufferIndex = nullBuffers;
    var buffer = nextBuffer;
    while (!(leafBufferIterator_0.n4() === startLeafIndex)) {
      var currentBuffer = leafBufferIterator_0.m4();
      var tmp2 = buffer;
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = 32 - rightShift | 0;
      arrayCopy(currentBuffer, tmp2, 0, startIndex, 32);
      buffer = makeMutableShiftingRight($this, currentBuffer, rightShift);
      bufferIndex = bufferIndex - 1 | 0;
      buffers[bufferIndex] = buffer;
    }
    return leafBufferIterator_0.m4();
  }
  function splitToBuffers($this, elements, index, startBuffer, startBufferSize, buffers, nullBuffers, nextBuffer) {
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    if (!(nullBuffers >= 1)) {
      var tmp$ret$0 = 'requires at least one nullBuffer';
      throwIllegalArgumentException(tmp$ret$0);
    }
    var firstBuffer = makeMutable($this, startBuffer);
    buffers[0] = firstBuffer;
    var newNextBuffer = nextBuffer;
    var newNullBuffers = nullBuffers;
    var startBufferStartIndex = index & 31;
    var endBufferEndIndex = ((index + elements.j() | 0) - 1 | 0) & 31;
    var elementsToShift = startBufferSize - startBufferStartIndex | 0;
    if ((endBufferEndIndex + elementsToShift | 0) < 32) {
      var tmp2 = newNextBuffer;
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = endBufferEndIndex + 1 | 0;
      arrayCopy(firstBuffer, tmp2, destinationOffset, startBufferStartIndex, startBufferSize);
    } else {
      var toCopyToLast = ((endBufferEndIndex + elementsToShift | 0) - 32 | 0) + 1 | 0;
      if (nullBuffers === 1) {
        newNextBuffer = firstBuffer;
      } else {
        newNextBuffer = mutableBuffer($this);
        newNullBuffers = newNullBuffers - 1 | 0;
        buffers[newNullBuffers] = newNextBuffer;
      }
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = startBufferSize - toCopyToLast | 0;
      arrayCopy(firstBuffer, nextBuffer, 0, startIndex, startBufferSize);
      var tmp2_0 = newNextBuffer;
      var tmp4 = endBufferEndIndex + 1 | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = startBufferSize - toCopyToLast | 0;
      arrayCopy(firstBuffer, tmp2_0, tmp4, startBufferStartIndex, endIndex);
    }
    var elementsIterator = elements.g();
    copyToBuffer($this, firstBuffer, startBufferStartIndex, elementsIterator);
    var inductionVariable = 1;
    var last = newNullBuffers;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        buffers[i] = copyToBuffer($this, mutableBuffer($this), 0, elementsIterator);
      }
       while (inductionVariable < last);
    copyToBuffer($this, newNextBuffer, 0, elementsIterator);
  }
  function bufferFor_0($this, index) {
    if (rootSize_0($this) <= index) {
      return $this.x25_1;
    }
    var buffer = ensureNotNull($this.w25_1);
    var shift = $this.u25_1;
    while (shift > 0) {
      var tmp = buffer[indexSegment(index, shift)];
      buffer = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
      shift = shift - 5 | 0;
    }
    return buffer;
  }
  function removeFromTailAt_0($this, root, rootSize, shift, index) {
    var tailSize = $this.y25_1 - rootSize | 0;
    assert(index < tailSize);
    var removedElement;
    if (tailSize === 1) {
      removedElement = $this.x25_1[0];
      pullLastBufferFromRoot_0($this, root, rootSize, shift);
    } else {
      removedElement = $this.x25_1[index];
      var tmp0 = $this.x25_1;
      var tmp2 = makeMutable($this, $this.x25_1);
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = index + 1 | 0;
      arrayCopy(tmp0, tmp2, index, startIndex, tailSize);
      var mutableTail = tmp2;
      mutableTail[tailSize - 1 | 0] = null;
      $this.w25_1 = root;
      $this.x25_1 = mutableTail;
      $this.y25_1 = (rootSize + tailSize | 0) - 1 | 0;
      $this.u25_1 = shift;
    }
    return removedElement;
  }
  function removeFromRootAt_0($this, root, shift, index, tailCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var removedElement = root[bufferIndex];
      var tmp2 = makeMutable($this, root);
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = bufferIndex + 1 | 0;
      arrayCopy(root, tmp2, bufferIndex, startIndex, 32);
      var mutableRoot = tmp2;
      mutableRoot[31] = tailCarry.n25_1;
      tailCarry.n25_1 = removedElement;
      return mutableRoot;
    }
    var bufferLastIndex = 31;
    if (root[bufferLastIndex] == null) {
      bufferLastIndex = indexSegment(rootSize_0($this) - 1 | 0, shift);
    }
    var mutableRoot_0 = makeMutable($this, root);
    var lowerLevelShift = shift - 5 | 0;
    var inductionVariable = bufferLastIndex;
    var last = bufferIndex + 1 | 0;
    if (last <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp = mutableRoot_0[i];
        mutableRoot_0[i] = removeFromRootAt_0($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), lowerLevelShift, 0, tailCarry);
      }
       while (!(i === last));
    var tmp_0 = mutableRoot_0[bufferIndex];
    mutableRoot_0[bufferIndex] = removeFromRootAt_0($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, index, tailCarry);
    return mutableRoot_0;
  }
  function pullLastBufferFromRoot_0($this, root, rootSize, shift) {
    if (shift === 0) {
      $this.w25_1 = null;
      var tmp = $this;
      var tmp_0;
      if (root == null) {
        // Inline function 'kotlin.emptyArray' call
        tmp_0 = [];
      } else {
        tmp_0 = root;
      }
      tmp.x25_1 = tmp_0;
      $this.y25_1 = rootSize;
      $this.u25_1 = shift;
      return Unit_instance;
    }
    var tailCarry = new ObjectRef(null);
    var newRoot = ensureNotNull(pullLastBuffer_0($this, ensureNotNull(root), shift, rootSize, tailCarry));
    var tmp_1 = $this;
    var tmp_2 = tailCarry.n25_1;
    tmp_1.x25_1 = (!(tmp_2 == null) ? isArray(tmp_2) : false) ? tmp_2 : THROW_CCE();
    $this.y25_1 = rootSize;
    if (newRoot[1] == null) {
      var tmp_3 = $this;
      var tmp_4 = newRoot[0];
      tmp_3.w25_1 = (tmp_4 == null ? true : isArray(tmp_4)) ? tmp_4 : THROW_CCE();
      $this.u25_1 = shift - 5 | 0;
    } else {
      $this.w25_1 = newRoot;
      $this.u25_1 = shift;
    }
  }
  function pullLastBuffer_0($this, root, shift, rootSize, tailCarry) {
    var bufferIndex = indexSegment(rootSize - 1 | 0, shift);
    var tmp;
    if (shift === 5) {
      tailCarry.n25_1 = root[bufferIndex];
      tmp = null;
    } else {
      var tmp_0 = root[bufferIndex];
      tmp = pullLastBuffer_0($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), shift - 5 | 0, rootSize, tailCarry);
    }
    var newBufferAtIndex = tmp;
    if (newBufferAtIndex == null && bufferIndex === 0) {
      return null;
    }
    var mutableRoot = makeMutable($this, root);
    mutableRoot[bufferIndex] = newBufferAtIndex;
    return mutableRoot;
  }
  function removeAll($this, predicate) {
    var tailSize = tailSize_0($this);
    var bufferRef = new ObjectRef(null);
    if ($this.w25_1 == null) {
      return !(removeAllFromTail($this, predicate, tailSize, bufferRef) === tailSize);
    }
    var leafIterator = leafBufferIterator($this, 0);
    var bufferSize = 32;
    while (bufferSize === 32 && leafIterator.h()) {
      bufferSize = removeAll_0($this, predicate, leafIterator.i(), 32, bufferRef);
    }
    if (bufferSize === 32) {
      assert(!leafIterator.h());
      var newTailSize = removeAllFromTail($this, predicate, tailSize, bufferRef);
      if (newTailSize === 0) {
        pullLastBufferFromRoot_0($this, $this.w25_1, $this.y25_1, $this.u25_1);
      }
      return !(newTailSize === tailSize);
    }
    var unaffectedElementsCount = leafIterator.n4() << 5;
    // Inline function 'kotlin.collections.mutableListOf' call
    var buffers = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.mutableListOf' call
    var recyclableBuffers = ArrayList_init_$Create$();
    while (leafIterator.h()) {
      var leaf = leafIterator.i();
      bufferSize = recyclableRemoveAll($this, predicate, leaf, 32, bufferSize, bufferRef, recyclableBuffers, buffers);
    }
    var newTailSize_0 = recyclableRemoveAll($this, predicate, $this.x25_1, tailSize, bufferSize, bufferRef, recyclableBuffers, buffers);
    var tmp = bufferRef.n25_1;
    var newTail = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
    fill_0(newTail, null, newTailSize_0, 32);
    var newRoot = buffers.r() ? ensureNotNull($this.w25_1) : pushBuffers($this, $this.w25_1, unaffectedElementsCount, $this.u25_1, buffers.g());
    var newRootSize = unaffectedElementsCount + (buffers.j() << 5) | 0;
    $this.w25_1 = retainFirst($this, newRoot, newRootSize);
    $this.x25_1 = newTail;
    $this.y25_1 = newRootSize + newTailSize_0 | 0;
    return true;
  }
  function retainFirst($this, root, size) {
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    if (!((size & 31) === 0)) {
      var tmp$ret$0 = 'invalid size';
      throwIllegalArgumentException(tmp$ret$0);
    }
    if (size === 0) {
      $this.u25_1 = 0;
      return null;
    }
    var lastIndex = size - 1 | 0;
    var newRoot = root;
    while (lastIndex >> $this.u25_1 === 0) {
      $this.u25_1 = $this.u25_1 - 5 | 0;
      var tmp = newRoot[0];
      newRoot = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
    }
    return nullifyAfter($this, newRoot, lastIndex, $this.u25_1);
  }
  function nullifyAfter($this, root, index, shift) {
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    if (!(shift >= 0)) {
      var tmp$ret$0 = 'shift should be positive';
      throwIllegalArgumentException(tmp$ret$0);
    }
    if (shift === 0) {
      return root;
    }
    var lastIndex = indexSegment(index, shift);
    var tmp = root[lastIndex];
    var newChild = nullifyAfter($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), index, shift - 5 | 0);
    var newRoot = root;
    if (lastIndex < 31 && !(newRoot[lastIndex + 1 | 0] == null)) {
      if (isMutable($this, newRoot)) {
        fill_0(newRoot, null, lastIndex + 1 | 0, 32);
      }
      var tmp0 = newRoot;
      var tmp2 = mutableBuffer($this);
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = lastIndex + 1 | 0;
      arrayCopy(tmp0, tmp2, 0, 0, endIndex);
      newRoot = tmp2;
    }
    if (!(newChild === newRoot[lastIndex])) {
      newRoot = makeMutable($this, newRoot);
      newRoot[lastIndex] = newChild;
    }
    return newRoot;
  }
  function removeAllFromTail($this, predicate, tailSize, bufferRef) {
    var newTailSize = removeAll_0($this, predicate, $this.x25_1, tailSize, bufferRef);
    if (newTailSize === tailSize) {
      assert(bufferRef.n25_1 === $this.x25_1);
      return tailSize;
    }
    var tmp = bufferRef.n25_1;
    var newTail = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
    fill_0(newTail, null, newTailSize, tailSize);
    $this.x25_1 = newTail;
    $this.y25_1 = $this.y25_1 - (tailSize - newTailSize | 0) | 0;
    return newTailSize;
  }
  function removeAll_0($this, predicate, buffer, bufferSize, bufferRef) {
    var newBuffer = buffer;
    var newBufferSize = bufferSize;
    var anyRemoved = false;
    var inductionVariable = 0;
    if (inductionVariable < bufferSize)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = buffer[index];
        var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
        if (predicate(element)) {
          if (!anyRemoved) {
            newBuffer = makeMutable($this, buffer);
            newBufferSize = index;
            anyRemoved = true;
          }
        } else if (anyRemoved) {
          var tmp_0 = newBuffer;
          var _unary__edvuaz = newBufferSize;
          newBufferSize = _unary__edvuaz + 1 | 0;
          tmp_0[_unary__edvuaz] = element;
        }
      }
       while (inductionVariable < bufferSize);
    bufferRef.n25_1 = newBuffer;
    return newBufferSize;
  }
  function recyclableRemoveAll($this, predicate, buffer, bufferSize, toBufferSize, bufferRef, recyclableBuffers, buffers) {
    if (isMutable($this, buffer)) {
      recyclableBuffers.e(buffer);
    }
    var tmp = bufferRef.n25_1;
    var toBuffer = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
    var newToBuffer = toBuffer;
    var newToBufferSize = toBufferSize;
    var inductionVariable = 0;
    if (inductionVariable < bufferSize)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp_0 = buffer[index];
        var element = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        if (!predicate(element)) {
          if (newToBufferSize === 32) {
            var tmp_1;
            // Inline function 'kotlin.collections.isNotEmpty' call
            if (!recyclableBuffers.r()) {
              tmp_1 = recyclableBuffers.b2(recyclableBuffers.j() - 1 | 0);
            } else {
              tmp_1 = mutableBuffer($this);
            }
            newToBuffer = tmp_1;
            newToBufferSize = 0;
          }
          var tmp_2 = newToBuffer;
          var _unary__edvuaz = newToBufferSize;
          newToBufferSize = _unary__edvuaz + 1 | 0;
          tmp_2[_unary__edvuaz] = element;
        }
      }
       while (inductionVariable < bufferSize);
    bufferRef.n25_1 = newToBuffer;
    if (!(toBuffer === bufferRef.n25_1)) {
      buffers.e(toBuffer);
    }
    return newToBufferSize;
  }
  function setInRoot_0($this, root, shift, index, e, oldElementCarry) {
    var bufferIndex = indexSegment(index, shift);
    var mutableRoot = makeMutable($this, root);
    if (shift === 0) {
      if (!(mutableRoot === root)) {
        $this.e4_1 = $this.e4_1 + 1 | 0;
      }
      oldElementCarry.n25_1 = mutableRoot[bufferIndex];
      mutableRoot[bufferIndex] = e;
      return mutableRoot;
    }
    var tmp = mutableRoot[bufferIndex];
    mutableRoot[bufferIndex] = setInRoot_0($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), shift - 5 | 0, index, e, oldElementCarry);
    return mutableRoot;
  }
  function leafBufferIterator($this, index) {
    var tmp0 = $this.w25_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        var message = 'Invalid root';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    var root = tmp$ret$1;
    var leafCount = rootSize_0($this) >> 5;
    ListImplementation_instance.o25(index, leafCount);
    if ($this.u25_1 === 0) {
      return new SingleElementListIterator(root, index);
    }
    var trieHeight = $this.u25_1 / 5 | 0;
    return new TrieIterator(root, index, leafCount, trieHeight);
  }
  function PersistentVectorBuilder$removeAll$lambda($elements) {
    return function (it) {
      return $elements.o(it);
    };
  }
  function PersistentVectorBuilder(vector, vectorRoot, vectorTail, rootShift) {
    AbstractMutableList.call(this);
    this.r25_1 = vector;
    this.s25_1 = vectorRoot;
    this.t25_1 = vectorTail;
    this.u25_1 = rootShift;
    this.v25_1 = new MutabilityOwnership();
    this.w25_1 = this.s25_1;
    this.x25_1 = this.t25_1;
    this.y25_1 = this.r25_1.j();
  }
  protoOf(PersistentVectorBuilder).j = function () {
    return this.y25_1;
  };
  protoOf(PersistentVectorBuilder).a26 = function () {
    return this.e4_1;
  };
  protoOf(PersistentVectorBuilder).d25 = function () {
    var tmp = this;
    var tmp_0;
    if (this.w25_1 === this.s25_1 && this.x25_1 === this.t25_1) {
      tmp_0 = this.r25_1;
    } else {
      this.v25_1 = new MutabilityOwnership();
      this.s25_1 = this.w25_1;
      this.t25_1 = this.x25_1;
      var tmp_1;
      if (this.w25_1 == null) {
        var tmp_2;
        // Inline function 'kotlin.collections.isEmpty' call
        if (this.x25_1.length === 0) {
          tmp_2 = persistentVectorOf();
        } else {
          tmp_2 = new SmallPersistentVector(copyOf_0(this.x25_1, this.y25_1));
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = new PersistentVector(ensureNotNull(this.w25_1), this.x25_1, this.y25_1, this.u25_1);
      }
      tmp_0 = tmp_1;
    }
    tmp.r25_1 = tmp_0;
    return this.r25_1;
  };
  protoOf(PersistentVectorBuilder).e = function (element) {
    this.e4_1 = this.e4_1 + 1 | 0;
    var tailSize = tailSize_0(this);
    if (tailSize < 32) {
      var mutableTail = makeMutable(this, this.x25_1);
      mutableTail[tailSize] = element;
      this.x25_1 = mutableTail;
      this.y25_1 = this.y25_1 + 1 | 0;
    } else {
      var newTail = mutableBufferWith(this, element);
      pushFilledTail_0(this, this.w25_1, this.x25_1, newTail);
    }
    return true;
  };
  protoOf(PersistentVectorBuilder).n = function (elements) {
    if (elements.r()) {
      return false;
    }
    this.e4_1 = this.e4_1 + 1 | 0;
    var tailSize = tailSize_0(this);
    var elementsIterator = elements.g();
    if ((32 - tailSize | 0) >= elements.j()) {
      this.x25_1 = copyToBuffer(this, makeMutable(this, this.x25_1), tailSize, elementsIterator);
      this.y25_1 = this.y25_1 + elements.j() | 0;
    } else {
      var buffersSize = ((elements.j() + tailSize | 0) - 1 | 0) / 32 | 0;
      // Inline function 'kotlin.arrayOfNulls' call
      var buffers = Array(buffersSize);
      buffers[0] = copyToBuffer(this, makeMutable(this, this.x25_1), tailSize, elementsIterator);
      var inductionVariable = 1;
      if (inductionVariable < buffersSize)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          buffers[index] = copyToBuffer(this, mutableBuffer(this), 0, elementsIterator);
        }
         while (inductionVariable < buffersSize);
      var tmp = this;
      var tmp_0 = this.w25_1;
      var tmp_1 = rootSize_0(this);
      tmp.w25_1 = pushBuffersIncreasingHeightIfNeeded(this, tmp_0, tmp_1, isArray(buffers) ? buffers : THROW_CCE());
      this.x25_1 = copyToBuffer(this, mutableBuffer(this), 0, elementsIterator);
      this.y25_1 = this.y25_1 + elements.j() | 0;
    }
    return true;
  };
  protoOf(PersistentVectorBuilder).a2 = function (index, element) {
    ListImplementation_instance.o25(index, this.y25_1);
    if (index === this.y25_1) {
      this.e(element);
      return Unit_instance;
    }
    this.e4_1 = this.e4_1 + 1 | 0;
    var rootSize = rootSize_0(this);
    if (index >= rootSize) {
      insertIntoTail_0(this, this.w25_1, index - rootSize | 0, element);
      return Unit_instance;
    }
    var elementCarry = new ObjectRef(null);
    var newRest = insertIntoRoot_0(this, ensureNotNull(this.w25_1), this.u25_1, index, element, elementCarry);
    var tmp = elementCarry.n25_1;
    insertIntoTail_0(this, newRest, 0, (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE());
  };
  protoOf(PersistentVectorBuilder).w1 = function (index, elements) {
    ListImplementation_instance.o25(index, this.y25_1);
    if (index === this.y25_1) {
      return this.n(elements);
    }
    if (elements.r()) {
      return false;
    }
    this.e4_1 = this.e4_1 + 1 | 0;
    var unaffectedElementsCount = index >> 5 << 5;
    var buffersSize = (((this.y25_1 - unaffectedElementsCount | 0) + elements.j() | 0) - 1 | 0) / 32 | 0;
    if (buffersSize === 0) {
      assert(index >= rootSize_0(this));
      var startIndex = index & 31;
      var endIndex = ((index + elements.j() | 0) - 1 | 0) & 31;
      var tmp0 = this.x25_1;
      var tmp2 = makeMutable(this, this.x25_1);
      var tmp4 = endIndex + 1 | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex_0 = tailSize_0(this);
      arrayCopy(tmp0, tmp2, tmp4, startIndex, endIndex_0);
      var newTail = tmp2;
      copyToBuffer(this, newTail, startIndex, elements.g());
      this.x25_1 = newTail;
      this.y25_1 = this.y25_1 + elements.j() | 0;
      return true;
    }
    // Inline function 'kotlin.arrayOfNulls' call
    var buffers = Array(buffersSize);
    var tailSize_1 = tailSize_0(this);
    var newTailSize = tailSize(this, this.y25_1 + elements.j() | 0);
    var newTail_0;
    if (index >= rootSize_0(this)) {
      newTail_0 = mutableBuffer(this);
      splitToBuffers(this, elements, index, this.x25_1, tailSize_1, buffers, buffersSize, newTail_0);
    } else if (newTailSize > tailSize_1) {
      var rightShift = newTailSize - tailSize_1 | 0;
      newTail_0 = makeMutableShiftingRight(this, this.x25_1, rightShift);
      insertIntoRoot_1(this, elements, index, rightShift, buffers, buffersSize, newTail_0);
    } else {
      var tmp0_0 = this.x25_1;
      var tmp2_0 = mutableBuffer(this);
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex_0 = tailSize_1 - newTailSize | 0;
      arrayCopy(tmp0_0, tmp2_0, 0, startIndex_0, tailSize_1);
      newTail_0 = tmp2_0;
      var rightShift_0 = 32 - (tailSize_1 - newTailSize | 0) | 0;
      var lastBuffer = makeMutableShiftingRight(this, this.x25_1, rightShift_0);
      buffers[buffersSize - 1 | 0] = lastBuffer;
      insertIntoRoot_1(this, elements, index, rightShift_0, buffers, buffersSize - 1 | 0, lastBuffer);
    }
    var tmp = this;
    var tmp_0 = this.w25_1;
    tmp.w25_1 = pushBuffersIncreasingHeightIfNeeded(this, tmp_0, unaffectedElementsCount, isArray(buffers) ? buffers : THROW_CCE());
    this.x25_1 = newTail_0;
    this.y25_1 = this.y25_1 + elements.j() | 0;
    return true;
  };
  protoOf(PersistentVectorBuilder).p = function (index) {
    ListImplementation_instance.p25(index, this.y25_1);
    var buffer = bufferFor_0(this, index);
    var tmp = buffer[index & 31];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(PersistentVectorBuilder).b2 = function (index) {
    ListImplementation_instance.p25(index, this.y25_1);
    this.e4_1 = this.e4_1 + 1 | 0;
    var rootSize = rootSize_0(this);
    if (index >= rootSize) {
      var tmp = removeFromTailAt_0(this, this.w25_1, rootSize, this.u25_1, index - rootSize | 0);
      return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    }
    var elementCarry = new ObjectRef(this.x25_1[0]);
    var newRoot = removeFromRootAt_0(this, ensureNotNull(this.w25_1), this.u25_1, index, elementCarry);
    removeFromTailAt_0(this, newRoot, rootSize, this.u25_1, 0);
    var tmp_0 = elementCarry.n25_1;
    return (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
  };
  protoOf(PersistentVectorBuilder).x1 = function (elements) {
    return this.z25(PersistentVectorBuilder$removeAll$lambda(elements));
  };
  protoOf(PersistentVectorBuilder).z25 = function (predicate) {
    var anyRemoved = removeAll(this, predicate);
    if (anyRemoved) {
      this.e4_1 = this.e4_1 + 1 | 0;
    }
    return anyRemoved;
  };
  protoOf(PersistentVectorBuilder).z1 = function (index, element) {
    ListImplementation_instance.p25(index, this.y25_1);
    if (rootSize_0(this) <= index) {
      var mutableTail = makeMutable(this, this.x25_1);
      if (!(mutableTail === this.x25_1)) {
        this.e4_1 = this.e4_1 + 1 | 0;
      }
      var tailIndex = index & 31;
      var oldElement = mutableTail[tailIndex];
      mutableTail[tailIndex] = element;
      this.x25_1 = mutableTail;
      return (oldElement == null ? true : !(oldElement == null)) ? oldElement : THROW_CCE();
    }
    var oldElementCarry = new ObjectRef(null);
    this.w25_1 = setInRoot_0(this, ensureNotNull(this.w25_1), this.u25_1, index, element, oldElementCarry);
    var tmp = oldElementCarry.n25_1;
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(PersistentVectorBuilder).g = function () {
    return this.t1();
  };
  protoOf(PersistentVectorBuilder).t1 = function () {
    return this.q(0);
  };
  protoOf(PersistentVectorBuilder).q = function (index) {
    ListImplementation_instance.o25(index, this.y25_1);
    return new PersistentVectorMutableIterator(this, index);
  };
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableList_PersistentVectorIterator$stable;
  function PersistentVectorIterator(root, tail, index, size, trieHeight) {
    AbstractListIterator.call(this, index, size);
    this.d26_1 = tail;
    var trieSize = rootSize_1(size);
    var trieIndex = coerceAtMost(index, trieSize);
    this.e26_1 = new TrieIterator(root, trieIndex, trieSize, trieHeight);
  }
  protoOf(PersistentVectorIterator).i = function () {
    this.a25();
    if (this.e26_1.h()) {
      this.y24_1 = this.y24_1 + 1 | 0;
      return this.e26_1.i();
    }
    var _unary__edvuaz = this.y24_1;
    this.y24_1 = _unary__edvuaz + 1 | 0;
    return this.d26_1[_unary__edvuaz - this.e26_1.z24_1 | 0];
  };
  protoOf(PersistentVectorIterator).m4 = function () {
    this.b25();
    if (this.y24_1 > this.e26_1.z24_1) {
      this.y24_1 = this.y24_1 - 1 | 0;
      return this.d26_1[this.y24_1 - this.e26_1.z24_1 | 0];
    }
    this.y24_1 = this.y24_1 - 1 | 0;
    return this.e26_1.m4();
  };
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableList_PersistentVectorMutableIterator$stable;
  function reset($this) {
    $this.z24_1 = $this.m26_1.y25_1;
    $this.n26_1 = $this.m26_1.a26();
    $this.p26_1 = -1;
    setupTrieIterator($this);
  }
  function setupTrieIterator($this) {
    var root = $this.m26_1.w25_1;
    if (root == null) {
      $this.o26_1 = null;
      return Unit_instance;
    }
    var trieSize = rootSize_1($this.m26_1.y25_1);
    var trieIndex = coerceAtMost($this.y24_1, trieSize);
    var trieHeight = ($this.m26_1.u25_1 / 5 | 0) + 1 | 0;
    if ($this.o26_1 == null) {
      $this.o26_1 = new TrieIterator(root, trieIndex, trieSize, trieHeight);
    } else {
      ensureNotNull($this.o26_1).q26(root, trieIndex, trieSize, trieHeight);
    }
  }
  function checkForComodification($this) {
    if (!($this.n26_1 === $this.m26_1.a26()))
      throw ConcurrentModificationException_init_$Create$();
  }
  function checkHasIterated($this) {
    if ($this.p26_1 === -1)
      throw IllegalStateException_init_$Create$_0();
  }
  function PersistentVectorMutableIterator(builder, index) {
    AbstractListIterator.call(this, index, builder.y25_1);
    this.m26_1 = builder;
    this.n26_1 = this.m26_1.a26();
    this.o26_1 = null;
    this.p26_1 = -1;
    setupTrieIterator(this);
  }
  protoOf(PersistentVectorMutableIterator).m4 = function () {
    checkForComodification(this);
    this.b25();
    this.p26_1 = this.y24_1 - 1 | 0;
    var tmp0_elvis_lhs = this.o26_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp_0 = this.m26_1.x25_1;
      this.y24_1 = this.y24_1 - 1 | 0;
      var tmp_1 = tmp_0[this.y24_1];
      return (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var trieIterator = tmp;
    if (this.y24_1 > trieIterator.z24_1) {
      var tmp_2 = this.m26_1.x25_1;
      this.y24_1 = this.y24_1 - 1 | 0;
      var tmp_3 = tmp_2[this.y24_1 - trieIterator.z24_1 | 0];
      return (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
    }
    this.y24_1 = this.y24_1 - 1 | 0;
    return trieIterator.m4();
  };
  protoOf(PersistentVectorMutableIterator).i = function () {
    checkForComodification(this);
    this.a25();
    this.p26_1 = this.y24_1;
    var tmp0_elvis_lhs = this.o26_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp_0 = this.m26_1.x25_1;
      var _unary__edvuaz = this.y24_1;
      this.y24_1 = _unary__edvuaz + 1 | 0;
      var tmp_1 = tmp_0[_unary__edvuaz];
      return (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var trieIterator = tmp;
    if (trieIterator.h()) {
      this.y24_1 = this.y24_1 + 1 | 0;
      return trieIterator.i();
    }
    var tmp_2 = this.m26_1.x25_1;
    var _unary__edvuaz_0 = this.y24_1;
    this.y24_1 = _unary__edvuaz_0 + 1 | 0;
    var tmp_3 = tmp_2[_unary__edvuaz_0 - trieIterator.z24_1 | 0];
    return (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
  };
  protoOf(PersistentVectorMutableIterator).a4 = function () {
    checkForComodification(this);
    checkHasIterated(this);
    this.m26_1.b2(this.p26_1);
    if (this.p26_1 < this.y24_1)
      this.y24_1 = this.p26_1;
    reset(this);
  };
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableList_SmallPersistentVector$stable;
  function bufferOfSize($this, size) {
    // Inline function 'kotlin.arrayOfNulls' call
    return Array(size);
  }
  function Companion_5() {
    Companion_instance_6 = this;
    var tmp = this;
    // Inline function 'kotlin.emptyArray' call
    var tmp$ret$0 = [];
    tmp.r26_1 = new SmallPersistentVector(tmp$ret$0);
  }
  var Companion_instance_6;
  function Companion_getInstance_5() {
    if (Companion_instance_6 == null)
      new Companion_5();
    return Companion_instance_6;
  }
  function SmallPersistentVector(buffer) {
    Companion_getInstance_5();
    AbstractPersistentList.call(this);
    this.s26_1 = buffer;
    assert(this.s26_1.length <= 32);
  }
  protoOf(SmallPersistentVector).j = function () {
    return this.s26_1.length;
  };
  protoOf(SmallPersistentVector).e = function (element) {
    if (this.j() < 32) {
      var newBuffer = copyOf_0(this.s26_1, this.j() + 1 | 0);
      newBuffer[this.j()] = element;
      return new SmallPersistentVector(newBuffer);
    }
    var tail = presizedBufferWith(element);
    return new PersistentVector(this.s26_1, tail, this.j() + 1 | 0, 0);
  };
  protoOf(SmallPersistentVector).n = function (elements) {
    if ((this.j() + elements.j() | 0) <= 32) {
      var newBuffer = copyOf_0(this.s26_1, this.j() + elements.j() | 0);
      var index = this.j();
      var _iterator__ex2g4s = elements.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        newBuffer[_unary__edvuaz] = element;
      }
      return new SmallPersistentVector(newBuffer);
    }
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.mutate' call
    // Inline function 'kotlin.apply' call
    var this_0 = this.c25();
    this_0.n(elements);
    return this_0.d25();
  };
  protoOf(SmallPersistentVector).e25 = function (predicate) {
    var newBuffer = this.s26_1;
    var newSize = this.j();
    var anyRemoved = false;
    var inductionVariable = 0;
    var last = this.j();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.s26_1[index];
        var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
        if (predicate(element)) {
          if (!anyRemoved) {
            // Inline function 'kotlin.collections.copyOf' call
            // Inline function 'kotlin.js.asDynamic' call
            newBuffer = this.s26_1.slice();
            newSize = index;
            anyRemoved = true;
          }
        } else if (anyRemoved) {
          var tmp_0 = newBuffer;
          var _unary__edvuaz = newSize;
          newSize = _unary__edvuaz + 1 | 0;
          tmp_0[_unary__edvuaz] = element;
        }
      }
       while (inductionVariable < last);
    var tmp0_subject = newSize;
    return tmp0_subject === this.j() ? this : tmp0_subject === 0 ? Companion_getInstance_5().r26_1 : new SmallPersistentVector(copyOfRange(newBuffer, 0, newSize));
  };
  protoOf(SmallPersistentVector).f25 = function (index, element) {
    ListImplementation_instance.o25(index, this.j());
    if (index === this.j()) {
      return this.e(element);
    }
    if (this.j() < 32) {
      var newBuffer = bufferOfSize(this, this.j() + 1 | 0);
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = this.s26_1;
      arrayCopy(this_0, newBuffer, 0, 0, index);
      var tmp0 = this.s26_1;
      var tmp4 = index + 1 | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.j();
      arrayCopy(tmp0, newBuffer, tmp4, index, endIndex);
      newBuffer[index] = element;
      return new SmallPersistentVector(newBuffer);
    }
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var root = this.s26_1.slice();
    var tmp0_0 = this.s26_1;
    var tmp4_0 = index + 1 | 0;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex_0 = this.j() - 1 | 0;
    arrayCopy(tmp0_0, root, tmp4_0, index, endIndex_0);
    root[index] = element;
    var tail = presizedBufferWith(this.s26_1[31]);
    return new PersistentVector(root, tail, this.j() + 1 | 0, 0);
  };
  protoOf(SmallPersistentVector).b2 = function (index) {
    ListImplementation_instance.p25(index, this.j());
    if (this.j() === 1) {
      return Companion_getInstance_5().r26_1;
    }
    var newBuffer = copyOf_0(this.s26_1, this.j() - 1 | 0);
    var tmp0 = this.s26_1;
    var tmp6 = index + 1 | 0;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = this.j();
    arrayCopy(tmp0, newBuffer, index, tmp6, endIndex);
    return new SmallPersistentVector(newBuffer);
  };
  protoOf(SmallPersistentVector).c25 = function () {
    return new PersistentVectorBuilder(this, null, this.s26_1, 0);
  };
  protoOf(SmallPersistentVector).s = function (element) {
    return indexOf(this.s26_1, element);
  };
  protoOf(SmallPersistentVector).q = function (index) {
    ListImplementation_instance.o25(index, this.j());
    var tmp = this.s26_1;
    return new BufferIterator(isArray(tmp) ? tmp : THROW_CCE(), index, this.j());
  };
  protoOf(SmallPersistentVector).p = function (index) {
    ListImplementation_instance.p25(index, this.j());
    var tmp = this.s26_1[index];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(SmallPersistentVector).z1 = function (index, element) {
    ListImplementation_instance.p25(index, this.j());
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newBuffer = this.s26_1.slice();
    newBuffer[index] = element;
    return new SmallPersistentVector(newBuffer);
  };
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableList_TrieIterator$stable;
  function fillPath($this, index, startLevel) {
    var shift = imul($this.h26_1 - startLevel | 0, 5);
    var i = startLevel;
    while (i < $this.h26_1) {
      var tmp = $this.i26_1;
      var tmp_0 = i;
      var tmp_1 = $this.i26_1[i - 1 | 0];
      tmp[tmp_0] = ((!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE())[indexSegment(index, shift)];
      shift = shift - 5 | 0;
      i = i + 1 | 0;
    }
  }
  function fillPathIfNeeded($this, indexPredicate) {
    var shift = 0;
    while (indexSegment($this.y24_1, shift) === indexPredicate) {
      shift = shift + 5 | 0;
    }
    if (shift > 0) {
      var level = ($this.h26_1 - 1 | 0) - (shift / 5 | 0) | 0;
      fillPath($this, $this.y24_1, level + 1 | 0);
    }
  }
  function elementAtCurrentIndex($this) {
    var leafBufferIndex = $this.y24_1 & 31;
    var tmp = $this.i26_1[$this.h26_1 - 1 | 0];
    return ((!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE())[leafBufferIndex];
  }
  function TrieIterator(root, index, size, height) {
    AbstractListIterator.call(this, index, size);
    this.h26_1 = height;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size_0 = this.h26_1;
    tmp.i26_1 = Array(size_0);
    this.j26_1 = index === size;
    this.i26_1[0] = root;
    fillPath(this, index - (this.j26_1 ? 1 : 0) | 0, 1);
  }
  protoOf(TrieIterator).q26 = function (root, index, size, height) {
    this.y24_1 = index;
    this.z24_1 = size;
    this.h26_1 = height;
    if (this.i26_1.length < height) {
      var tmp = this;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp.i26_1 = Array(height);
    }
    this.i26_1[0] = root;
    this.j26_1 = index === size;
    fillPath(this, index - (this.j26_1 ? 1 : 0) | 0, 1);
  };
  protoOf(TrieIterator).i = function () {
    if (!this.h()) {
      throw NoSuchElementException_init_$Create$_0();
    }
    var result = elementAtCurrentIndex(this);
    this.y24_1 = this.y24_1 + 1 | 0;
    if (this.y24_1 === this.z24_1) {
      this.j26_1 = true;
      return result;
    }
    fillPathIfNeeded(this, 0);
    return result;
  };
  protoOf(TrieIterator).m4 = function () {
    if (!this.k4()) {
      throw NoSuchElementException_init_$Create$_0();
    }
    this.y24_1 = this.y24_1 - 1 | 0;
    if (this.j26_1) {
      this.j26_1 = false;
      return elementAtCurrentIndex(this);
    }
    fillPathIfNeeded(this, 31);
    return elementAtCurrentIndex(this);
  };
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableList_ObjectRef$stable;
  function persistentVectorOf() {
    return Companion_getInstance_5().r26_1;
  }
  function presizedBufferWith(element) {
    // Inline function 'kotlin.arrayOfNulls' call
    var buffer = Array(32);
    buffer[0] = element;
    return buffer;
  }
  function rootSize_1(vectorSize) {
    return (vectorSize - 1 | 0) & -32;
  }
  function indexSegment(index, shift) {
    return index >> shift & 31;
  }
  function ObjectRef(value) {
    this.n25_1 = value;
  }
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableMap_PersistentHashMap$stable;
  function createEntries($this) {
    return new PersistentHashMapEntries($this);
  }
  function Companion_6() {
    Companion_instance_7 = this;
    this.t24_1 = new PersistentHashMap(Companion_getInstance_7().t26_1, 0);
  }
  protoOf(Companion_6).u24 = function () {
    var tmp = this.t24_1;
    return tmp instanceof PersistentHashMap ? tmp : THROW_CCE();
  };
  var Companion_instance_7;
  function Companion_getInstance_6() {
    if (Companion_instance_7 == null)
      new Companion_6();
    return Companion_instance_7;
  }
  function PersistentHashMap(node, size) {
    Companion_getInstance_6();
    AbstractMap.call(this);
    this.w26_1 = node;
    this.x26_1 = size;
  }
  protoOf(PersistentHashMap).j = function () {
    return this.x26_1;
  };
  protoOf(PersistentHashMap).i2 = function () {
    return new PersistentHashMapKeys(this);
  };
  protoOf(PersistentHashMap).j2 = function () {
    return new PersistentHashMapValues(this);
  };
  protoOf(PersistentHashMap).k2 = function () {
    return createEntries(this);
  };
  protoOf(PersistentHashMap).f2 = function (key) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return this.w26_1.c27(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMap).h2 = function (key) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return this.w26_1.d27(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMap).l2 = function (key, value) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = this.w26_1.e27(tmp$ret$0, key, value, 0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var newNodeResult = tmp;
    return new PersistentHashMap(newNodeResult.f27_1, this.j() + newNodeResult.g27_1 | 0);
  };
  protoOf(PersistentHashMap).m2 = function (key) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var newNode = this.w26_1.h27(tmp$ret$0, key, 0);
    if (this.w26_1 === newNode) {
      return this;
    }
    if (newNode == null) {
      return Companion_getInstance_6().u24();
    }
    return new PersistentHashMap(newNode, this.j() - 1 | 0);
  };
  protoOf(PersistentHashMap).c25 = function () {
    return new PersistentHashMapBuilder(this);
  };
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableMap_PersistentHashMapBuilder$stable;
  function PersistentHashMapBuilder(map) {
    AbstractMutableMap.call(this);
    this.m27_1 = map;
    this.n27_1 = new MutabilityOwnership();
    this.o27_1 = this.m27_1.w26_1;
    this.p27_1 = null;
    this.q27_1 = 0;
    this.r27_1 = this.m27_1.j();
  }
  protoOf(PersistentHashMapBuilder).s27 = function (value) {
    this.r27_1 = value;
    this.q27_1 = this.q27_1 + 1 | 0;
  };
  protoOf(PersistentHashMapBuilder).j = function () {
    return this.r27_1;
  };
  protoOf(PersistentHashMapBuilder).d25 = function () {
    var tmp = this;
    var tmp_0;
    if (this.o27_1 === this.m27_1.w26_1) {
      tmp_0 = this.m27_1;
    } else {
      this.n27_1 = new MutabilityOwnership();
      tmp_0 = new PersistentHashMap(this.o27_1, this.j());
    }
    tmp.m27_1 = tmp_0;
    return this.m27_1;
  };
  protoOf(PersistentHashMapBuilder).k2 = function () {
    return new PersistentHashMapBuilderEntries(this);
  };
  protoOf(PersistentHashMapBuilder).i2 = function () {
    return new PersistentHashMapBuilderKeys(this);
  };
  protoOf(PersistentHashMapBuilder).j2 = function () {
    return new PersistentHashMapBuilderValues(this);
  };
  protoOf(PersistentHashMapBuilder).f2 = function (key) {
    var tmp = this.o27_1;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return tmp.c27(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMapBuilder).h2 = function (key) {
    var tmp = this.o27_1;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return tmp.d27(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMapBuilder).l2 = function (key, value) {
    this.p27_1 = null;
    var tmp = this;
    var tmp_0 = this.o27_1;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    tmp.o27_1 = tmp_0.t27(tmp$ret$0, key, value, 0, this);
    return this.p27_1;
  };
  protoOf(PersistentHashMapBuilder).m2 = function (key) {
    this.p27_1 = null;
    var tmp = this;
    var tmp_0 = this.o27_1;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = tmp_0.u27(tmp$ret$0, key, 0, this);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      var tmp_2 = Companion_getInstance_7().t26_1;
      tmp_1 = tmp_2 instanceof TrieNode ? tmp_2 : THROW_CCE();
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp.o27_1 = tmp_1;
    return this.p27_1;
  };
  protoOf(PersistentHashMapBuilder).v27 = function (key, value) {
    var oldSize = this.j();
    var tmp = this;
    var tmp_0 = this.o27_1;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = tmp_0.w27(tmp$ret$0, key, value, 0, this);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      var tmp_2 = Companion_getInstance_7().t26_1;
      tmp_1 = tmp_2 instanceof TrieNode ? tmp_2 : THROW_CCE();
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp.o27_1 = tmp_1;
    return !(oldSize === this.j());
  };
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableMap_TrieNodeMutableEntriesIterator$stable;
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableMap_PersistentHashMapBuilderBaseIterator$stable;
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableMap_PersistentHashMapBuilderEntriesIterator$stable;
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableMap_PersistentHashMapBuilderKeysIterator$stable;
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableMap_PersistentHashMapBuilderValuesIterator$stable;
  function PersistentHashMapBuilderEntriesIterator(builder) {
    var tmp = this;
    var tmp_0 = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = Array(8);
    while (tmp_0 < 8) {
      tmp_1[tmp_0] = new TrieNodeMutableEntriesIterator(this);
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.x27_1 = new PersistentHashMapBuilderBaseIterator(builder, tmp_1);
  }
  protoOf(PersistentHashMapBuilderEntriesIterator).h = function () {
    return this.x27_1.h();
  };
  protoOf(PersistentHashMapBuilderEntriesIterator).i = function () {
    return this.x27_1.i();
  };
  protoOf(PersistentHashMapBuilderEntriesIterator).a4 = function () {
    return this.x27_1.a4();
  };
  function PersistentHashMapBuilderKeysIterator(builder) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = Array(8);
    while (tmp < 8) {
      tmp_0[tmp] = new TrieNodeKeysIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBuilderBaseIterator.call(this, builder, tmp_0);
  }
  function PersistentHashMapBuilderValuesIterator(builder) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = Array(8);
    while (tmp < 8) {
      tmp_0[tmp] = new TrieNodeValuesIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBuilderBaseIterator.call(this, builder, tmp_0);
  }
  function resetPath($this, keyHash, node, key, pathIndex) {
    var shift = imul(pathIndex, 5);
    if (shift > 30) {
      $this.y27_1[pathIndex].m28(node.b27_1, node.b27_1.length, 0);
      while (!equals($this.y27_1[pathIndex].i28(), key)) {
        $this.y27_1[pathIndex].n28();
      }
      $this.z27_1 = pathIndex;
      return Unit_instance;
    }
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (node.q28(keyPositionMask)) {
      var keyIndex = node.o28(keyPositionMask);
      $this.y27_1[pathIndex].m28(node.b27_1, imul(2, node.p28()), keyIndex);
      $this.z27_1 = pathIndex;
      return Unit_instance;
    }
    var nodeIndex = node.r28(keyPositionMask);
    var targetNode = node.s28(nodeIndex);
    $this.y27_1[pathIndex].m28(node.b27_1, imul(2, node.p28()), nodeIndex);
    resetPath($this, keyHash, targetNode, key, pathIndex + 1 | 0);
  }
  function checkNextWasInvoked($this) {
    if (!$this.g28_1)
      throw IllegalStateException_init_$Create$_0();
  }
  function checkForComodification_0($this) {
    if (!($this.e28_1.q27_1 === $this.h28_1))
      throw ConcurrentModificationException_init_$Create$();
  }
  function PersistentHashMapBuilderBaseIterator(builder, path) {
    PersistentHashMapBaseIterator.call(this, builder.o27_1, path);
    this.e28_1 = builder;
    this.f28_1 = null;
    this.g28_1 = false;
    this.h28_1 = this.e28_1.q27_1;
  }
  protoOf(PersistentHashMapBuilderBaseIterator).i = function () {
    checkForComodification_0(this);
    this.f28_1 = this.i28();
    this.g28_1 = true;
    return protoOf(PersistentHashMapBaseIterator).i.call(this);
  };
  protoOf(PersistentHashMapBuilderBaseIterator).a4 = function () {
    checkNextWasInvoked(this);
    if (this.h()) {
      var currentKey = this.i28();
      var tmp0 = this.e28_1;
      // Inline function 'kotlin.collections.remove' call
      var key = this.f28_1;
      (isInterface(tmp0, KtMutableMap) ? tmp0 : THROW_CCE()).m2(key);
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = currentKey == null ? null : hashCode(currentKey);
      var tmp$ret$1 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      resetPath(this, tmp$ret$1, this.e28_1.o27_1, currentKey, 0);
    } else {
      var tmp0_0 = this.e28_1;
      // Inline function 'kotlin.collections.remove' call
      var key_0 = this.f28_1;
      (isInterface(tmp0_0, KtMutableMap) ? tmp0_0 : THROW_CCE()).m2(key_0);
    }
    this.f28_1 = null;
    this.g28_1 = false;
    this.h28_1 = this.e28_1.q27_1;
  };
  function TrieNodeMutableEntriesIterator(parentIterator) {
    TrieNodeBaseIterator.call(this);
    this.w28_1 = parentIterator;
  }
  protoOf(TrieNodeMutableEntriesIterator).i = function () {
    assert(this.x28());
    this.l28_1 = this.l28_1 + 2 | 0;
    var tmp = this.j28_1[this.l28_1 - 2 | 0];
    var tmp_0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    var tmp_1 = this.j28_1[this.l28_1 - 1 | 0];
    return new MutableMapEntry(this.w28_1, tmp_0, (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE());
  };
  function MutableMapEntry(parentIterator, key, value) {
    MapEntry.call(this, key, value);
    this.e29_1 = parentIterator;
    this.f29_1 = value;
  }
  protoOf(MutableMapEntry).e2 = function () {
    return this.f29_1;
  };
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableMap_AbstractMapBuilderEntries$stable;
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableMap_PersistentHashMapBuilderEntries$stable;
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableMap_PersistentHashMapBuilderKeys$stable;
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableMap_PersistentHashMapBuilderValues$stable;
  function PersistentHashMapBuilderEntries(builder) {
    AbstractMapBuilderEntries.call(this);
    this.i29_1 = builder;
  }
  protoOf(PersistentHashMapBuilderEntries).j29 = function (element) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(PersistentHashMapBuilderEntries).e = function (element) {
    return this.j29((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderEntries).g = function () {
    return new PersistentHashMapBuilderEntriesIterator(this.i29_1);
  };
  protoOf(PersistentHashMapBuilderEntries).h6 = function (element) {
    return this.i29_1.v27(element.d2(), element.e2());
  };
  protoOf(PersistentHashMapBuilderEntries).j = function () {
    return this.i29_1.j();
  };
  protoOf(PersistentHashMapBuilderEntries).g6 = function (element) {
    var tmp0_safe_receiver = this.i29_1.h2(element.d2());
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = equals(tmp0_safe_receiver, element.e2());
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? element.e2() == null && this.i29_1.f2(element.d2()) : tmp1_elvis_lhs;
  };
  function PersistentHashMapBuilderKeys(builder) {
    AbstractMutableSet.call(this);
    this.k29_1 = builder;
  }
  protoOf(PersistentHashMapBuilderKeys).l6 = function (element) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(PersistentHashMapBuilderKeys).e = function (element) {
    return this.l6((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderKeys).g = function () {
    return new PersistentHashMapBuilderKeysIterator(this.k29_1);
  };
  protoOf(PersistentHashMapBuilderKeys).m2 = function (element) {
    if (this.k29_1.f2(element)) {
      this.k29_1.m2(element);
      return true;
    }
    return false;
  };
  protoOf(PersistentHashMapBuilderKeys).v1 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.m2((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderKeys).j = function () {
    return this.k29_1.j();
  };
  protoOf(PersistentHashMapBuilderKeys).q5 = function (element) {
    return this.k29_1.f2(element);
  };
  protoOf(PersistentHashMapBuilderKeys).o = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.q5((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function PersistentHashMapBuilderValues(builder) {
    AbstractMutableCollection.call(this);
    this.l29_1 = builder;
  }
  protoOf(PersistentHashMapBuilderValues).j = function () {
    return this.l29_1.j();
  };
  protoOf(PersistentHashMapBuilderValues).w5 = function (element) {
    return this.l29_1.g2(element);
  };
  protoOf(PersistentHashMapBuilderValues).o = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.w5((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderValues).x5 = function (element) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(PersistentHashMapBuilderValues).e = function (element) {
    return this.x5((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderValues).g = function () {
    return new PersistentHashMapBuilderValuesIterator(this.l29_1);
  };
  function AbstractMapBuilderEntries() {
    AbstractMutableSet.call(this);
  }
  protoOf(AbstractMapBuilderEntries).d6 = function (element) {
    var tmp = !(element == null) ? element : null;
    if (!(!(tmp == null) ? isInterface(tmp, Entry) : false))
      return false;
    return this.g6(element);
  };
  protoOf(AbstractMapBuilderEntries).o = function (element) {
    if (!(!(element == null) ? isInterface(element, Entry) : false))
      return false;
    return this.d6((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  protoOf(AbstractMapBuilderEntries).f6 = function (element) {
    var tmp = !(element == null) ? element : null;
    if (!(!(tmp == null) ? isInterface(tmp, Entry) : false))
      return false;
    return this.h6(element);
  };
  protoOf(AbstractMapBuilderEntries).v1 = function (element) {
    if (!(!(element == null) ? isInterface(element, Entry) : false))
      return false;
    return this.f6((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableMap_TrieNodeBaseIterator$stable;
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableMap_TrieNodeKeysIterator$stable;
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableMap_TrieNodeValuesIterator$stable;
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableMap_TrieNodeEntriesIterator$stable;
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableMap_MapEntry$stable;
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableMap_PersistentHashMapBaseIterator$stable;
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableMap_PersistentHashMapEntriesIterator$stable;
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableMap_PersistentHashMapKeysIterator$stable;
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableMap_PersistentHashMapValuesIterator$stable;
  function PersistentHashMapKeysIterator(node) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = Array(8);
    while (tmp < 8) {
      tmp_0[tmp] = new TrieNodeKeysIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_0);
  }
  function PersistentHashMapValuesIterator(node) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = Array(8);
    while (tmp < 8) {
      tmp_0[tmp] = new TrieNodeValuesIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_0);
  }
  function PersistentHashMapEntriesIterator(node) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = Array(8);
    while (tmp < 8) {
      tmp_0[tmp] = new TrieNodeEntriesIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_0);
  }
  function moveToNextNodeWithData($this, pathIndex) {
    if ($this.y27_1[pathIndex].x28()) {
      return pathIndex;
    }
    if ($this.y27_1[pathIndex].z28()) {
      var node = $this.y27_1[pathIndex].a29();
      if (pathIndex === 6) {
        $this.y27_1[pathIndex + 1 | 0].y28(node.b27_1, node.b27_1.length);
      } else {
        $this.y27_1[pathIndex + 1 | 0].y28(node.b27_1, imul(2, node.p28()));
      }
      return moveToNextNodeWithData($this, pathIndex + 1 | 0);
    }
    return -1;
  }
  function ensureNextEntryIsReady($this) {
    if ($this.y27_1[$this.z27_1].x28()) {
      return Unit_instance;
    }
    var inductionVariable = $this.z27_1;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var result = moveToNextNodeWithData($this, i);
        if (result === -1 && $this.y27_1[i].z28()) {
          $this.y27_1[i].b29();
          result = moveToNextNodeWithData($this, i);
        }
        if (!(result === -1)) {
          $this.z27_1 = result;
          return Unit_instance;
        }
        if (i > 0) {
          $this.y27_1[i - 1 | 0].b29();
        }
        $this.y27_1[i].y28(Companion_getInstance_7().t26_1.b27_1, 0);
      }
       while (0 <= inductionVariable);
    $this.a28_1 = false;
  }
  function checkHasNext($this) {
    if (!$this.h())
      throw NoSuchElementException_init_$Create$_0();
  }
  function PersistentHashMapBaseIterator(node, path) {
    this.y27_1 = path;
    this.z27_1 = 0;
    this.a28_1 = true;
    this.y27_1[0].y28(node.b27_1, imul(2, node.p28()));
    this.z27_1 = 0;
    ensureNextEntryIsReady(this);
  }
  protoOf(PersistentHashMapBaseIterator).i28 = function () {
    checkHasNext(this);
    return this.y27_1[this.z27_1].i28();
  };
  protoOf(PersistentHashMapBaseIterator).h = function () {
    return this.a28_1;
  };
  protoOf(PersistentHashMapBaseIterator).i = function () {
    checkHasNext(this);
    var result = this.y27_1[this.z27_1].i();
    ensureNextEntryIsReady(this);
    return result;
  };
  function TrieNodeBaseIterator() {
    this.j28_1 = Companion_getInstance_7().t26_1.b27_1;
    this.k28_1 = 0;
    this.l28_1 = 0;
  }
  protoOf(TrieNodeBaseIterator).m28 = function (buffer, dataSize, index) {
    this.j28_1 = buffer;
    this.k28_1 = dataSize;
    this.l28_1 = index;
  };
  protoOf(TrieNodeBaseIterator).y28 = function (buffer, dataSize) {
    this.m28(buffer, dataSize, 0);
  };
  protoOf(TrieNodeBaseIterator).x28 = function () {
    return this.l28_1 < this.k28_1;
  };
  protoOf(TrieNodeBaseIterator).i28 = function () {
    assert(this.x28());
    var tmp = this.j28_1[this.l28_1];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(TrieNodeBaseIterator).n28 = function () {
    assert(this.x28());
    this.l28_1 = this.l28_1 + 2 | 0;
  };
  protoOf(TrieNodeBaseIterator).z28 = function () {
    assert(this.l28_1 >= this.k28_1);
    return this.l28_1 < this.j28_1.length;
  };
  protoOf(TrieNodeBaseIterator).a29 = function () {
    assert(this.z28());
    var tmp = this.j28_1[this.l28_1];
    return tmp instanceof TrieNode ? tmp : THROW_CCE();
  };
  protoOf(TrieNodeBaseIterator).b29 = function () {
    assert(this.z28());
    this.l28_1 = this.l28_1 + 1 | 0;
  };
  protoOf(TrieNodeBaseIterator).h = function () {
    return this.x28();
  };
  function TrieNodeKeysIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeKeysIterator).i = function () {
    assert(this.x28());
    this.l28_1 = this.l28_1 + 2 | 0;
    var tmp = this.j28_1[this.l28_1 - 2 | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  function TrieNodeValuesIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeValuesIterator).i = function () {
    assert(this.x28());
    this.l28_1 = this.l28_1 + 2 | 0;
    var tmp = this.j28_1[this.l28_1 - 1 | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  function TrieNodeEntriesIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeEntriesIterator).i = function () {
    assert(this.x28());
    this.l28_1 = this.l28_1 + 2 | 0;
    var tmp = this.j28_1[this.l28_1 - 2 | 0];
    var tmp_0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    var tmp_1 = this.j28_1[this.l28_1 - 1 | 0];
    return new MapEntry(tmp_0, (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE());
  };
  function MapEntry(key, value) {
    this.g29_1 = key;
    this.h29_1 = value;
  }
  protoOf(MapEntry).d2 = function () {
    return this.g29_1;
  };
  protoOf(MapEntry).e2 = function () {
    return this.h29_1;
  };
  protoOf(MapEntry).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.d2();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.e2();
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    return tmp ^ (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0);
  };
  protoOf(MapEntry).equals = function (other) {
    var tmp0_safe_receiver = (!(other == null) ? isInterface(other, Entry) : false) ? other : null;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = (equals(tmp0_safe_receiver.d2(), this.d2()) && equals(tmp0_safe_receiver.e2(), this.e2()));
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(MapEntry).toString = function () {
    return toString_0(this.d2()) + '=' + toString_0(this.e2());
  };
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableMap_PersistentHashMapEntries$stable;
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableMap_PersistentHashMapKeys$stable;
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableMap_PersistentHashMapValues$stable;
  function PersistentHashMapKeys(map) {
    AbstractSet.call(this);
    this.v29_1 = map;
  }
  protoOf(PersistentHashMapKeys).j = function () {
    return this.v29_1.j();
  };
  protoOf(PersistentHashMapKeys).q5 = function (element) {
    return this.v29_1.f2(element);
  };
  protoOf(PersistentHashMapKeys).o = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.q5((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapKeys).g = function () {
    return new PersistentHashMapKeysIterator(this.v29_1.w26_1);
  };
  function PersistentHashMapValues(map) {
    AbstractCollection.call(this);
    this.w29_1 = map;
  }
  protoOf(PersistentHashMapValues).j = function () {
    return this.w29_1.j();
  };
  protoOf(PersistentHashMapValues).w5 = function (element) {
    return this.w29_1.g2(element);
  };
  protoOf(PersistentHashMapValues).o = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.w5((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapValues).g = function () {
    return new PersistentHashMapValuesIterator(this.w29_1.w26_1);
  };
  function PersistentHashMapEntries(map) {
    AbstractSet.call(this);
    this.x29_1 = map;
  }
  protoOf(PersistentHashMapEntries).j = function () {
    return this.x29_1.j();
  };
  protoOf(PersistentHashMapEntries).y29 = function (element) {
    var tmp = !(element == null) ? element : THROW_CCE();
    if (!(!(tmp == null) ? isInterface(tmp, Entry) : false))
      return false;
    var tmp0_safe_receiver = this.x29_1.h2(element.d2());
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_0 = equals(tmp0_safe_receiver, element.e2());
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? element.e2() == null && this.x29_1.f2(element.d2()) : tmp1_elvis_lhs;
  };
  protoOf(PersistentHashMapEntries).o = function (element) {
    if (!(!(element == null) ? isInterface(element, Entry) : false))
      return false;
    return this.y29((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapEntries).g = function () {
    return new PersistentHashMapEntriesIterator(this.x29_1.w26_1);
  };
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableMap_TrieNode_ModificationResult$stable;
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableMap_TrieNode$stable;
  function TrieNode_init_$Init$(dataMap, nodeMap, buffer, $this) {
    TrieNode.call($this, dataMap, nodeMap, buffer, null);
    return $this;
  }
  function TrieNode_init_$Create$(dataMap, nodeMap, buffer) {
    return TrieNode_init_$Init$(dataMap, nodeMap, buffer, objectCreate(protoOf(TrieNode)));
  }
  function ModificationResult(node, sizeDelta) {
    this.f27_1 = node;
    this.g27_1 = sizeDelta;
  }
  function asInsertResult($this) {
    return new ModificationResult($this, 1);
  }
  function asUpdateResult($this) {
    return new ModificationResult($this, 0);
  }
  function hasNodeAt($this, positionMask) {
    return !(($this.z26_1 & positionMask) === 0);
  }
  function keyAtIndex($this, keyIndex) {
    var tmp = $this.b27_1[keyIndex];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  }
  function valueAtKeyIndex($this, keyIndex) {
    var tmp = $this.b27_1[keyIndex + 1 | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  }
  function insertEntryAt($this, positionMask, key, value) {
    var keyIndex = $this.o28(positionMask);
    var newBuffer = insertEntryAtIndex($this.b27_1, keyIndex, key, value);
    return TrieNode_init_$Create$($this.y26_1 | positionMask, $this.z26_1, newBuffer);
  }
  function mutableInsertEntryAt($this, positionMask, key, value, owner) {
    var keyIndex = $this.o28(positionMask);
    if ($this.a27_1 === owner) {
      $this.b27_1 = insertEntryAtIndex($this.b27_1, keyIndex, key, value);
      $this.y26_1 = $this.y26_1 | positionMask;
      return $this;
    }
    var newBuffer = insertEntryAtIndex($this.b27_1, keyIndex, key, value);
    return new TrieNode($this.y26_1 | positionMask, $this.z26_1, newBuffer, owner);
  }
  function updateValueAtIndex($this, keyIndex, value) {
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newBuffer = $this.b27_1.slice();
    newBuffer[keyIndex + 1 | 0] = value;
    return TrieNode_init_$Create$($this.y26_1, $this.z26_1, newBuffer);
  }
  function mutableUpdateValueAtIndex($this, keyIndex, value, mutator) {
    if ($this.a27_1 === mutator.n27_1) {
      $this.b27_1[keyIndex + 1 | 0] = value;
      return $this;
    }
    mutator.q27_1 = mutator.q27_1 + 1 | 0;
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newBuffer = $this.b27_1.slice();
    newBuffer[keyIndex + 1 | 0] = value;
    return new TrieNode($this.y26_1, $this.z26_1, newBuffer, mutator.n27_1);
  }
  function updateNodeAtIndex($this, nodeIndex, positionMask, newNode) {
    var newNodeBuffer = newNode.b27_1;
    if (newNodeBuffer.length === 2 && newNode.z26_1 === 0) {
      if ($this.b27_1.length === 1) {
        newNode.y26_1 = $this.z26_1;
        return newNode;
      }
      var keyIndex = $this.o28(positionMask);
      var newBuffer = replaceNodeWithEntry($this.b27_1, nodeIndex, keyIndex, newNodeBuffer[0], newNodeBuffer[1]);
      return TrieNode_init_$Create$($this.y26_1 ^ positionMask, $this.z26_1 ^ positionMask, newBuffer);
    }
    var newBuffer_0 = copyOf_0($this.b27_1, $this.b27_1.length);
    newBuffer_0[nodeIndex] = newNode;
    return TrieNode_init_$Create$($this.y26_1, $this.z26_1, newBuffer_0);
  }
  function mutableUpdateNodeAtIndex($this, nodeIndex, newNode, owner) {
    if ($this.b27_1.length === 1 && newNode.b27_1.length === 2 && newNode.z26_1 === 0) {
      newNode.y26_1 = $this.z26_1;
      return newNode;
    }
    if ($this.a27_1 === owner) {
      $this.b27_1[nodeIndex] = newNode;
      return $this;
    }
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newBuffer = $this.b27_1.slice();
    newBuffer[nodeIndex] = newNode;
    return new TrieNode($this.y26_1, $this.z26_1, newBuffer, owner);
  }
  function removeNodeAtIndex($this, nodeIndex, positionMask) {
    if ($this.b27_1.length === 1)
      return null;
    var newBuffer = removeNodeAtIndex_0($this.b27_1, nodeIndex);
    return TrieNode_init_$Create$($this.y26_1, $this.z26_1 ^ positionMask, newBuffer);
  }
  function mutableRemoveNodeAtIndex($this, nodeIndex, positionMask, owner) {
    if ($this.b27_1.length === 1)
      return null;
    if ($this.a27_1 === owner) {
      $this.b27_1 = removeNodeAtIndex_0($this.b27_1, nodeIndex);
      $this.z26_1 = $this.z26_1 ^ positionMask;
      return $this;
    }
    var newBuffer = removeNodeAtIndex_0($this.b27_1, nodeIndex);
    return new TrieNode($this.y26_1, $this.z26_1 ^ positionMask, newBuffer, owner);
  }
  function bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner) {
    var storedKey = keyAtIndex($this, keyIndex);
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = storedKey == null ? null : hashCode(storedKey);
    var storedKeyHash = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var storedValue = valueAtKeyIndex($this, keyIndex);
    var newNode = makeNode($this, storedKeyHash, storedKey, storedValue, newKeyHash, newKey, newValue, shift + 5 | 0, owner);
    var nodeIndex = $this.r28(positionMask) + 1 | 0;
    return replaceEntryWithNode($this.b27_1, keyIndex, nodeIndex, newNode);
  }
  function moveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift) {
    var newBuffer = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, null);
    return TrieNode_init_$Create$($this.y26_1 ^ positionMask, $this.z26_1 | positionMask, newBuffer);
  }
  function mutableMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner) {
    if ($this.a27_1 === owner) {
      $this.b27_1 = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner);
      $this.y26_1 = $this.y26_1 ^ positionMask;
      $this.z26_1 = $this.z26_1 | positionMask;
      return $this;
    }
    var newBuffer = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner);
    return new TrieNode($this.y26_1 ^ positionMask, $this.z26_1 | positionMask, newBuffer, owner);
  }
  function makeNode($this, keyHash1, key1, value1, keyHash2, key2, value2, shift, owner) {
    if (shift > 30) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$2 = [key1, value1, key2, value2];
      return new TrieNode(0, 0, tmp$ret$2, owner);
    }
    var setBit1 = indexSegment_0(keyHash1, shift);
    var setBit2 = indexSegment_0(keyHash2, shift);
    if (!(setBit1 === setBit2)) {
      var tmp;
      if (setBit1 < setBit2) {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = [key1, value1, key2, value2];
      } else {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = [key2, value2, key1, value1];
      }
      var nodeBuffer = tmp;
      return new TrieNode(1 << setBit1 | 1 << setBit2, 0, nodeBuffer, owner);
    }
    var node = makeNode($this, keyHash1, key1, value1, keyHash2, key2, value2, shift + 5 | 0, owner);
    var tmp_0 = 1 << setBit1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$11 = [node];
    return new TrieNode(0, tmp_0, tmp$ret$11, owner);
  }
  function removeEntryAtIndex($this, keyIndex, positionMask) {
    if ($this.b27_1.length === 2)
      return null;
    var newBuffer = removeEntryAtIndex_0($this.b27_1, keyIndex);
    return TrieNode_init_$Create$($this.y26_1 ^ positionMask, $this.z26_1, newBuffer);
  }
  function mutableRemoveEntryAtIndex($this, keyIndex, positionMask, mutator) {
    var _unary__edvuaz = mutator.j();
    mutator.s27(_unary__edvuaz - 1 | 0);
    mutator.p27_1 = valueAtKeyIndex($this, keyIndex);
    if ($this.b27_1.length === 2)
      return null;
    if ($this.a27_1 === mutator.n27_1) {
      $this.b27_1 = removeEntryAtIndex_0($this.b27_1, keyIndex);
      $this.y26_1 = $this.y26_1 ^ positionMask;
      return $this;
    }
    var newBuffer = removeEntryAtIndex_0($this.b27_1, keyIndex);
    return new TrieNode($this.y26_1 ^ positionMask, $this.z26_1, newBuffer, mutator.n27_1);
  }
  function collisionRemoveEntryAtIndex($this, i) {
    if ($this.b27_1.length === 2)
      return null;
    var newBuffer = removeEntryAtIndex_0($this.b27_1, i);
    return TrieNode_init_$Create$(0, 0, newBuffer);
  }
  function mutableCollisionRemoveEntryAtIndex($this, i, mutator) {
    var _unary__edvuaz = mutator.j();
    mutator.s27(_unary__edvuaz - 1 | 0);
    mutator.p27_1 = valueAtKeyIndex($this, i);
    if ($this.b27_1.length === 2)
      return null;
    if ($this.a27_1 === mutator.n27_1) {
      $this.b27_1 = removeEntryAtIndex_0($this.b27_1, i);
      return $this;
    }
    var newBuffer = removeEntryAtIndex_0($this.b27_1, i);
    return new TrieNode(0, 0, newBuffer, mutator.n27_1);
  }
  function collisionContainsKey($this, key) {
    var progression = step(until(0, $this.b27_1.length), 2);
    var inductionVariable = progression.z_1;
    var last = progression.a1_1;
    var step_0 = progression.b1_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, $this.b27_1[i]))
          return true;
      }
       while (!(i === last));
    return false;
  }
  function collisionGet($this, key) {
    var progression = step(until(0, $this.b27_1.length), 2);
    var inductionVariable = progression.z_1;
    var last = progression.a1_1;
    var step_0 = progression.b1_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          return valueAtKeyIndex($this, i);
        }
      }
       while (!(i === last));
    return null;
  }
  function collisionPut($this, key, value) {
    var progression = step(until(0, $this.b27_1.length), 2);
    var inductionVariable = progression.z_1;
    var last = progression.a1_1;
    var step_0 = progression.b1_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          if (value === valueAtKeyIndex($this, i)) {
            return null;
          }
          // Inline function 'kotlin.collections.copyOf' call
          // Inline function 'kotlin.js.asDynamic' call
          var newBuffer = $this.b27_1.slice();
          newBuffer[i + 1 | 0] = value;
          return asUpdateResult(TrieNode_init_$Create$(0, 0, newBuffer));
        }
      }
       while (!(i === last));
    var newBuffer_0 = insertEntryAtIndex($this.b27_1, 0, key, value);
    return asInsertResult(TrieNode_init_$Create$(0, 0, newBuffer_0));
  }
  function mutableCollisionPut($this, key, value, mutator) {
    var progression = step(until(0, $this.b27_1.length), 2);
    var inductionVariable = progression.z_1;
    var last = progression.a1_1;
    var step_0 = progression.b1_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          mutator.p27_1 = valueAtKeyIndex($this, i);
          if ($this.a27_1 === mutator.n27_1) {
            $this.b27_1[i + 1 | 0] = value;
            return $this;
          }
          mutator.q27_1 = mutator.q27_1 + 1 | 0;
          // Inline function 'kotlin.collections.copyOf' call
          // Inline function 'kotlin.js.asDynamic' call
          var newBuffer = $this.b27_1.slice();
          newBuffer[i + 1 | 0] = value;
          return new TrieNode(0, 0, newBuffer, mutator.n27_1);
        }
      }
       while (!(i === last));
    var _unary__edvuaz = mutator.j();
    mutator.s27(_unary__edvuaz + 1 | 0);
    var newBuffer_0 = insertEntryAtIndex($this.b27_1, 0, key, value);
    return new TrieNode(0, 0, newBuffer_0, mutator.n27_1);
  }
  function collisionRemove($this, key) {
    var progression = step(until(0, $this.b27_1.length), 2);
    var inductionVariable = progression.z_1;
    var last = progression.a1_1;
    var step_0 = progression.b1_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          return collisionRemoveEntryAtIndex($this, i);
        }
      }
       while (!(i === last));
    return $this;
  }
  function mutableCollisionRemove($this, key, mutator) {
    var progression = step(until(0, $this.b27_1.length), 2);
    var inductionVariable = progression.z_1;
    var last = progression.a1_1;
    var step_0 = progression.b1_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          return mutableCollisionRemoveEntryAtIndex($this, i, mutator);
        }
      }
       while (!(i === last));
    return $this;
  }
  function mutableCollisionRemove_0($this, key, value, mutator) {
    var progression = step(until(0, $this.b27_1.length), 2);
    var inductionVariable = progression.z_1;
    var last = progression.a1_1;
    var step_0 = progression.b1_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i)) && equals(value, valueAtKeyIndex($this, i))) {
          return mutableCollisionRemoveEntryAtIndex($this, i, mutator);
        }
      }
       while (!(i === last));
    return $this;
  }
  function replaceNode($this, targetNode, newNode, nodeIndex, positionMask) {
    return newNode == null ? removeNodeAtIndex($this, nodeIndex, positionMask) : !(targetNode === newNode) ? updateNodeAtIndex($this, nodeIndex, positionMask, newNode) : $this;
  }
  function mutableReplaceNode($this, targetNode, newNode, nodeIndex, positionMask, owner) {
    return newNode == null ? mutableRemoveNodeAtIndex($this, nodeIndex, positionMask, owner) : $this.a27_1 === owner || !(targetNode === newNode) ? mutableUpdateNodeAtIndex($this, nodeIndex, newNode, owner) : $this;
  }
  function Companion_7() {
    Companion_instance_8 = this;
    var tmp = this;
    // Inline function 'kotlin.emptyArray' call
    var tmp$ret$0 = [];
    tmp.t26_1 = TrieNode_init_$Create$(0, 0, tmp$ret$0);
  }
  var Companion_instance_8;
  function Companion_getInstance_7() {
    if (Companion_instance_8 == null)
      new Companion_7();
    return Companion_instance_8;
  }
  function TrieNode(dataMap, nodeMap, buffer, ownedBy) {
    Companion_getInstance_7();
    this.y26_1 = dataMap;
    this.z26_1 = nodeMap;
    this.a27_1 = ownedBy;
    this.b27_1 = buffer;
  }
  protoOf(TrieNode).p28 = function () {
    return countOneBits(this.y26_1);
  };
  protoOf(TrieNode).q28 = function (positionMask) {
    return !((this.y26_1 & positionMask) === 0);
  };
  protoOf(TrieNode).o28 = function (positionMask) {
    return imul(2, countOneBits(this.y26_1 & (positionMask - 1 | 0)));
  };
  protoOf(TrieNode).r28 = function (positionMask) {
    return (this.b27_1.length - 1 | 0) - countOneBits(this.z26_1 & (positionMask - 1 | 0)) | 0;
  };
  protoOf(TrieNode).s28 = function (nodeIndex) {
    var tmp = this.b27_1[nodeIndex];
    return tmp instanceof TrieNode ? tmp : THROW_CCE();
  };
  protoOf(TrieNode).c27 = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.q28(keyPositionMask)) {
      return equals(key, keyAtIndex(this, this.o28(keyPositionMask)));
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var targetNode = this.s28(this.r28(keyPositionMask));
      if (shift === 30) {
        return collisionContainsKey(targetNode, key);
      }
      return targetNode.c27(keyHash, key, shift + 5 | 0);
    }
    return false;
  };
  protoOf(TrieNode).d27 = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.q28(keyPositionMask)) {
      var keyIndex = this.o28(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return valueAtKeyIndex(this, keyIndex);
      }
      return null;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var targetNode = this.s28(this.r28(keyPositionMask));
      if (shift === 30) {
        return collisionGet(targetNode, key);
      }
      return targetNode.d27(keyHash, key, shift + 5 | 0);
    }
    return null;
  };
  protoOf(TrieNode).e27 = function (keyHash, key, value, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.q28(keyPositionMask)) {
      var keyIndex = this.o28(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        if (valueAtKeyIndex(this, keyIndex) === value)
          return null;
        return asUpdateResult(updateValueAtIndex(this, keyIndex, value));
      }
      return asInsertResult(moveEntryToNode(this, keyIndex, keyPositionMask, keyHash, key, value, shift));
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.r28(keyPositionMask);
      var targetNode = this.s28(nodeIndex);
      var tmp;
      if (shift === 30) {
        var tmp0_elvis_lhs = collisionPut(targetNode, key, value);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp = tmp_0;
      } else {
        var tmp1_elvis_lhs = targetNode.e27(keyHash, key, value, shift + 5 | 0);
        var tmp_1;
        if (tmp1_elvis_lhs == null) {
          return null;
        } else {
          tmp_1 = tmp1_elvis_lhs;
        }
        tmp = tmp_1;
      }
      var putResult = tmp;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.ModificationResult.replaceNode' call
      // Inline function 'kotlin.apply' call
      var tmp_2 = putResult;
      var node = putResult.f27_1;
      tmp_2.f27_1 = updateNodeAtIndex(this, nodeIndex, keyPositionMask, node);
      return putResult;
    }
    return asInsertResult(insertEntryAt(this, keyPositionMask, key, value));
  };
  protoOf(TrieNode).t27 = function (keyHash, key, value, shift, mutator) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.q28(keyPositionMask)) {
      var keyIndex = this.o28(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        mutator.p27_1 = valueAtKeyIndex(this, keyIndex);
        if (valueAtKeyIndex(this, keyIndex) === value) {
          return this;
        }
        return mutableUpdateValueAtIndex(this, keyIndex, value, mutator);
      }
      var _unary__edvuaz = mutator.j();
      mutator.s27(_unary__edvuaz + 1 | 0);
      return mutableMoveEntryToNode(this, keyIndex, keyPositionMask, keyHash, key, value, shift, mutator.n27_1);
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.r28(keyPositionMask);
      var targetNode = this.s28(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = mutableCollisionPut(targetNode, key, value, mutator);
      } else {
        tmp = targetNode.t27(keyHash, key, value, shift + 5 | 0, mutator);
      }
      var newNode = tmp;
      if (targetNode === newNode) {
        return this;
      }
      return mutableUpdateNodeAtIndex(this, nodeIndex, newNode, mutator.n27_1);
    }
    var _unary__edvuaz_0 = mutator.j();
    mutator.s27(_unary__edvuaz_0 + 1 | 0);
    return mutableInsertEntryAt(this, keyPositionMask, key, value, mutator.n27_1);
  };
  protoOf(TrieNode).h27 = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.q28(keyPositionMask)) {
      var keyIndex = this.o28(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return removeEntryAtIndex(this, keyIndex, keyPositionMask);
      }
      return this;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.r28(keyPositionMask);
      var targetNode = this.s28(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = collisionRemove(targetNode, key);
      } else {
        tmp = targetNode.h27(keyHash, key, shift + 5 | 0);
      }
      var newNode = tmp;
      return replaceNode(this, targetNode, newNode, nodeIndex, keyPositionMask);
    }
    return this;
  };
  protoOf(TrieNode).u27 = function (keyHash, key, shift, mutator) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.q28(keyPositionMask)) {
      var keyIndex = this.o28(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return mutableRemoveEntryAtIndex(this, keyIndex, keyPositionMask, mutator);
      }
      return this;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.r28(keyPositionMask);
      var targetNode = this.s28(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = mutableCollisionRemove(targetNode, key, mutator);
      } else {
        tmp = targetNode.u27(keyHash, key, shift + 5 | 0, mutator);
      }
      var newNode = tmp;
      return mutableReplaceNode(this, targetNode, newNode, nodeIndex, keyPositionMask, mutator.n27_1);
    }
    return this;
  };
  protoOf(TrieNode).w27 = function (keyHash, key, value, shift, mutator) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.q28(keyPositionMask)) {
      var keyIndex = this.o28(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex)) && equals(value, valueAtKeyIndex(this, keyIndex))) {
        return mutableRemoveEntryAtIndex(this, keyIndex, keyPositionMask, mutator);
      }
      return this;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.r28(keyPositionMask);
      var targetNode = this.s28(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = mutableCollisionRemove_0(targetNode, key, value, mutator);
      } else {
        tmp = targetNode.w27(keyHash, key, value, shift + 5 | 0, mutator);
      }
      var newNode = tmp;
      return mutableReplaceNode(this, targetNode, newNode, nodeIndex, keyPositionMask, mutator.n27_1);
    }
    return this;
  };
  function insertEntryAtIndex(_this__u8e3s4, keyIndex, key, value) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = _this__u8e3s4.length + 2 | 0;
    var newBuffer = Array(size);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    var tmp4 = keyIndex + 2 | 0;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, tmp4, keyIndex, endIndex);
    newBuffer[keyIndex] = key;
    newBuffer[keyIndex + 1 | 0] = value;
    return newBuffer;
  }
  function replaceNodeWithEntry(_this__u8e3s4, nodeIndex, keyIndex, key, value) {
    var newBuffer = copyOf_0(_this__u8e3s4, _this__u8e3s4.length + 1 | 0);
    var tmp4 = nodeIndex + 2 | 0;
    var tmp6 = nodeIndex + 1 | 0;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = _this__u8e3s4.length;
    arrayCopy(newBuffer, newBuffer, tmp4, tmp6, endIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = keyIndex + 2 | 0;
    arrayCopy(newBuffer, newBuffer, destinationOffset, keyIndex, nodeIndex);
    newBuffer[keyIndex] = key;
    newBuffer[keyIndex + 1 | 0] = value;
    return newBuffer;
  }
  function removeNodeAtIndex_0(_this__u8e3s4, nodeIndex) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = _this__u8e3s4.length - 1 | 0;
    var newBuffer = Array(size);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, nodeIndex);
    var tmp6 = nodeIndex + 1 | 0;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, nodeIndex, tmp6, endIndex);
    return newBuffer;
  }
  function replaceEntryWithNode(_this__u8e3s4, keyIndex, nodeIndex, newNode) {
    var newNodeIndex = nodeIndex - 2 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = (_this__u8e3s4.length - 2 | 0) + 1 | 0;
    var newBuffer = Array(size);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var startIndex = keyIndex + 2 | 0;
    arrayCopy(_this__u8e3s4, newBuffer, keyIndex, startIndex, nodeIndex);
    newBuffer[newNodeIndex] = newNode;
    var tmp4 = newNodeIndex + 1 | 0;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, tmp4, nodeIndex, endIndex);
    return newBuffer;
  }
  function indexSegment_0(index, shift) {
    return index >> shift & 31;
  }
  function removeEntryAtIndex_0(_this__u8e3s4, keyIndex) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = _this__u8e3s4.length - 2 | 0;
    var newBuffer = Array(size);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    var tmp6 = keyIndex + 2 | 0;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, keyIndex, tmp6, endIndex);
    return newBuffer;
  }
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableSet_PersistentHashSet$stable;
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableSet_PersistentHashSetBuilder$stable;
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableSet_PersistentHashSetIterator$stable;
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableSet_TrieNodeIterator$stable;
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableSet_PersistentHashSetMutableIterator$stable;
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableSet_TrieNode$stable;
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_persistentOrderedMap_LinkedValue$stable;
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_persistentOrderedMap_PersistentOrderedMap$stable;
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_persistentOrderedMap_PersistentOrderedMapBuilder$stable;
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_persistentOrderedMap_PersistentOrderedMapBuilderLinksIterator$stable;
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_persistentOrderedMap_PersistentOrderedMapBuilderEntriesIterator$stable;
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_persistentOrderedMap_PersistentOrderedMapBuilderKeysIterator$stable;
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_persistentOrderedMap_PersistentOrderedMapBuilderValuesIterator$stable;
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_persistentOrderedMap_PersistentOrderedMapBuilderEntries$stable;
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_persistentOrderedMap_PersistentOrderedMapBuilderKeys$stable;
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_persistentOrderedMap_PersistentOrderedMapBuilderValues$stable;
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_persistentOrderedMap_PersistentOrderedMapLinksIterator$stable;
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_persistentOrderedMap_PersistentOrderedMapEntriesIterator$stable;
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_persistentOrderedMap_PersistentOrderedMapKeysIterator$stable;
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_persistentOrderedMap_PersistentOrderedMapValuesIterator$stable;
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_persistentOrderedMap_PersistentOrderedMapEntries$stable;
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_persistentOrderedMap_PersistentOrderedMapKeys$stable;
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_persistentOrderedMap_PersistentOrderedMapValues$stable;
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_persistentOrderedSet_Links$stable;
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_persistentOrderedSet_PersistentOrderedSet$stable;
  function Companion_8() {
    Companion_instance_9 = this;
    this.r24_1 = new PersistentOrderedSet(EndOfChain_instance, EndOfChain_instance, Companion_getInstance_6().u24());
  }
  protoOf(Companion_8).s24 = function () {
    return this.r24_1;
  };
  var Companion_instance_9;
  function Companion_getInstance_8() {
    if (Companion_instance_9 == null)
      new Companion_8();
    return Companion_instance_9;
  }
  function PersistentOrderedSet(firstElement, lastElement, hashMap) {
    Companion_getInstance_8();
    AbstractSet.call(this);
    this.z29_1 = firstElement;
    this.a2a_1 = lastElement;
    this.b2a_1 = hashMap;
  }
  protoOf(PersistentOrderedSet).j = function () {
    return this.b2a_1.j();
  };
  protoOf(PersistentOrderedSet).o = function (element) {
    return this.b2a_1.f2(element);
  };
  protoOf(PersistentOrderedSet).e = function (element) {
    if (this.b2a_1.f2(element)) {
      return this;
    }
    if (this.r()) {
      var newMap = this.b2a_1.l2(element, Links_init_$Create$());
      return new PersistentOrderedSet(element, element, newMap);
    }
    var tmp = this.a2a_1;
    var lastElement = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    var lastLinks = ensureNotNull(this.b2a_1.h2(lastElement));
    var newMap_0 = this.b2a_1.l2(lastElement, lastLinks.e2a(element)).l2(element, Links_init_$Create$_0(lastElement));
    return new PersistentOrderedSet(this.z29_1, element, newMap_0);
  };
  protoOf(PersistentOrderedSet).v1 = function (element) {
    var tmp0_elvis_lhs = this.b2a_1.h2(element);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var links = tmp;
    var newMap = this.b2a_1.m2(element);
    if (links.f2a()) {
      var tmp0 = newMap;
      // Inline function 'kotlin.collections.get' call
      var key = links.c2a_1;
      var tmp$ret$0 = (isInterface(tmp0, KtMap) ? tmp0 : THROW_CCE()).h2(key);
      var previousLinks = ensureNotNull(tmp$ret$0);
      var tmp_0 = newMap;
      var tmp_1 = links.c2a_1;
      newMap = tmp_0.l2((tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE(), previousLinks.e2a(links.d2a_1));
    }
    if (links.h2a()) {
      var tmp0_0 = newMap;
      // Inline function 'kotlin.collections.get' call
      var key_0 = links.d2a_1;
      var tmp$ret$1 = (isInterface(tmp0_0, KtMap) ? tmp0_0 : THROW_CCE()).h2(key_0);
      var nextLinks = ensureNotNull(tmp$ret$1);
      var tmp_2 = newMap;
      var tmp_3 = links.d2a_1;
      newMap = tmp_2.l2((tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE(), nextLinks.g2a(links.c2a_1));
    }
    var newFirstElement = !links.f2a() ? links.d2a_1 : this.z29_1;
    var newLastElement = !links.h2a() ? links.c2a_1 : this.a2a_1;
    return new PersistentOrderedSet(newFirstElement, newLastElement, newMap);
  };
  protoOf(PersistentOrderedSet).g = function () {
    return new PersistentOrderedSetIterator(this.z29_1, this.b2a_1);
  };
  function Links_init_$Init$($this) {
    Links.call($this, EndOfChain_instance, EndOfChain_instance);
    return $this;
  }
  function Links_init_$Create$() {
    return Links_init_$Init$(objectCreate(protoOf(Links)));
  }
  function Links_init_$Init$_0(previous, $this) {
    Links.call($this, previous, EndOfChain_instance);
    return $this;
  }
  function Links_init_$Create$_0(previous) {
    return Links_init_$Init$_0(previous, objectCreate(protoOf(Links)));
  }
  function Links(previous, next) {
    this.c2a_1 = previous;
    this.d2a_1 = next;
  }
  protoOf(Links).e2a = function (newNext) {
    return new Links(this.c2a_1, newNext);
  };
  protoOf(Links).g2a = function (newPrevious) {
    return new Links(newPrevious, this.d2a_1);
  };
  protoOf(Links).h2a = function () {
    return !(this.d2a_1 === EndOfChain_instance);
  };
  protoOf(Links).f2a = function () {
    return !(this.c2a_1 === EndOfChain_instance);
  };
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_persistentOrderedSet_PersistentOrderedSetBuilder$stable;
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_persistentOrderedSet_PersistentOrderedSetIterator$stable;
  function checkHasNext_0($this) {
    if (!$this.h())
      throw NoSuchElementException_init_$Create$_0();
  }
  function PersistentOrderedSetIterator(nextElement, map) {
    this.i2a_1 = nextElement;
    this.j2a_1 = map;
    this.k2a_1 = 0;
  }
  protoOf(PersistentOrderedSetIterator).h = function () {
    return this.k2a_1 < this.j2a_1.j();
  };
  protoOf(PersistentOrderedSetIterator).i = function () {
    checkHasNext_0(this);
    var tmp = this.i2a_1;
    var result = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    this.k2a_1 = this.k2a_1 + 1 | 0;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.getOrElse' call
    var tmp0_elvis_lhs = this.j2a_1.h2(result);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      throw ConcurrentModificationException_init_$Create$_0('Hash code of an element (' + toString_0(result) + ') has changed after it was added to the persistent set.');
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp_0.i2a_1 = tmp_1.d2a_1;
    return result;
  };
  var androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_persistentOrderedSet_PersistentOrderedSetMutableIterator$stable;
  var androidx_compose_runtime_external_kotlinx_collections_immutable_internal_EndOfChain$stable;
  function EndOfChain() {
  }
  var EndOfChain_instance;
  function EndOfChain_getInstance() {
    return EndOfChain_instance;
  }
  var androidx_compose_runtime_external_kotlinx_collections_immutable_internal_ListImplementation$stable;
  function ListImplementation() {
  }
  protoOf(ListImplementation).p25 = function (index, size) {
    if (index < 0 || index >= size) {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', size: ' + size);
    }
  };
  protoOf(ListImplementation).o25 = function (index, size) {
    if (index < 0 || index > size) {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', size: ' + size);
    }
  };
  var ListImplementation_instance;
  function ListImplementation_getInstance() {
    return ListImplementation_instance;
  }
  var androidx_compose_runtime_external_kotlinx_collections_immutable_internal_MutabilityOwnership$stable;
  function MutabilityOwnership() {
  }
  var androidx_compose_runtime_external_kotlinx_collections_immutable_internal_DeltaCounter$stable;
  function assert(condition) {
  }
  var lambdaKey;
  var androidx_compose_runtime_internal_ComposableLambdaImpl$stable;
  function composableLambdaInstance(key, tracked, block) {
    _init_properties_ComposableLambda_kt__wilkc();
    return new ComposableLambdaImpl(key, tracked, block);
  }
  function trackWrite($this) {
    if ($this.m2a_1) {
      var scope = $this.o2a_1;
      if (!(scope == null)) {
        scope.p1n();
        $this.o2a_1 = null;
      }
      var scopes = $this.p2a_1;
      if (!(scopes == null)) {
        var inductionVariable = 0;
        var last = scopes.j();
        if (inductionVariable < last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = scopes.p(index);
            item.p1n();
          }
           while (inductionVariable < last);
        scopes.y1();
      }
    }
  }
  function trackRead($this, composer) {
    if ($this.m2a_1) {
      var scope = composer.r1j();
      if (!(scope == null)) {
        composer.s1j(scope);
        var lastScope = $this.o2a_1;
        if (replacableWith(lastScope, scope)) {
          $this.o2a_1 = scope;
        } else {
          var lastScopes = $this.p2a_1;
          if (lastScopes == null) {
            // Inline function 'kotlin.collections.mutableListOf' call
            var newScopes = ArrayList_init_$Create$();
            $this.p2a_1 = newScopes;
            newScopes.e(scope);
          } else {
            var inductionVariable = 0;
            var last = lastScopes.j();
            if (inductionVariable < last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var scopeAtIndex = lastScopes.p(index);
                if (replacableWith(scopeAtIndex, scope)) {
                  lastScopes.z1(index, scope);
                  return Unit_instance;
                }
              }
               while (inductionVariable < last);
            lastScopes.e(scope);
          }
        }
      }
    }
  }
  function ComposableLambdaImpl$invoke$ref(p0) {
    return function (receiver, p0_0) {
      p0.g1g(receiver, p0_0);
      return Unit_instance;
    };
  }
  function ComposableLambdaImpl$invoke$lambda(this$0, $p1, $changed) {
    return function (nc, _unused_var__etf5q3) {
      this$0.q2a($p1, nc, updateChangedFlags($changed) | 1);
      return Unit_instance;
    };
  }
  function ComposableLambdaImpl$invoke$lambda_0(this$0, $p1, $p2, $changed) {
    return function (nc, _unused_var__etf5q3) {
      this$0.r2a($p1, $p2, nc, updateChangedFlags($changed) | 1);
      return Unit_instance;
    };
  }
  function ComposableLambdaImpl(key, tracked, block) {
    this.l2a_1 = key;
    this.m2a_1 = tracked;
    this.n2a_1 = block;
    this.o2a_1 = null;
    this.p2a_1 = null;
  }
  protoOf(ComposableLambdaImpl).s2a = function (block) {
    if (!equals(this.n2a_1, block)) {
      var oldBlockNull = this.n2a_1 == null;
      this.n2a_1 = block;
      if (!oldBlockNull) {
        trackWrite(this);
      }
    }
  };
  protoOf(ComposableLambdaImpl).g1g = function (c, changed) {
    var c_0 = c.y1i(this.l2a_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.z16(this) ? differentBits(0) : sameBits(0));
    var tmp = this.n2a_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(c_0, dirty);
    var tmp0_safe_receiver = c_0.z1i();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d1o(ComposableLambdaImpl$invoke$ref(this));
    }
    return result;
  };
  protoOf(ComposableLambdaImpl).q2a = function (p1, c, changed) {
    var c_0 = c.y1i(this.l2a_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.z16(this) ? differentBits(1) : sameBits(1));
    var tmp = this.n2a_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(p1, c_0, dirty);
    var tmp0_safe_receiver = c_0.z1i();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d1o(ComposableLambdaImpl$invoke$lambda(this, p1, changed));
    }
    return result;
  };
  protoOf(ComposableLambdaImpl).r2a = function (p1, p2, c, changed) {
    var c_0 = c.y1i(this.l2a_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.z16(this) ? differentBits(2) : sameBits(2));
    var tmp = this.n2a_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(p1, p2, c_0, dirty);
    var tmp0_safe_receiver = c_0.z1i();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d1o(ComposableLambdaImpl$invoke$lambda_0(this, p1, p2, changed));
    }
    return result;
  };
  function replacableWith(_this__u8e3s4, other) {
    _init_properties_ComposableLambda_kt__wilkc();
    var tmp;
    if (_this__u8e3s4 == null) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      if (_this__u8e3s4 instanceof RecomposeScopeImpl) {
        tmp_1 = other instanceof RecomposeScopeImpl;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = !_this__u8e3s4.w1j() || equals(_this__u8e3s4, other) || equals(_this__u8e3s4.g14_1, other.g14_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function differentBits(slot) {
    _init_properties_ComposableLambda_kt__wilkc();
    return bitsForSlot(2, slot);
  }
  function sameBits(slot) {
    _init_properties_ComposableLambda_kt__wilkc();
    return bitsForSlot(1, slot);
  }
  function bitsForSlot(bits, slot) {
    _init_properties_ComposableLambda_kt__wilkc();
    var realSlot = slot % 10 | 0;
    return bits << (imul(realSlot, 3) + 1 | 0);
  }
  function rememberComposableLambda(key, tracked, block, $composer, $changed) {
    _init_properties_ComposableLambda_kt__wilkc();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1573003438, 'C(rememberComposableLambda)P(1,2)*1366@35136L54:ComposableLambda.kt#9drcc');
    if (isTraceInProgress()) {
      traceEventStart(-1573003438, $changed, -1, 'androidx.compose.runtime.internal.rememberComposableLambda (ComposableLambda.kt:1366)');
    }
    sourceInformationMarkerStart($composer_0, 1921622705, 'CC(remember):ComposableLambda.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.y1h();
    var tmp;
    if (false || it === Companion_getInstance().f1a_1) {
      var value = new ComposableLambdaImpl(key, tracked, block);
      $composer_0.j1i(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    // Inline function 'kotlin.also' call
    tmp1_group.s2a(block);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp1_group;
  }
  var properties_initialized_ComposableLambda_kt_u87f2i;
  function _init_properties_ComposableLambda_kt__wilkc() {
    if (!properties_initialized_ComposableLambda_kt_u87f2i) {
      properties_initialized_ComposableLambda_kt_u87f2i = true;
      lambdaKey = new Object();
      androidx_compose_runtime_internal_ComposableLambdaImpl$stable = 0;
    }
  }
  var androidx_compose_runtime_internal_IntRef$stable;
  function IntRef(element) {
    element = element === VOID ? 0 : element;
    this.s22_1 = element;
  }
  protoOf(IntRef).toString = function () {
    return 'IntRef(element = ' + this.s22_1 + ')@' + toString_1(hashCode(this), 16);
  };
  var androidx_compose_runtime_internal_PersistentCompositionLocalHashMap_Builder$stable;
  var androidx_compose_runtime_internal_PersistentCompositionLocalHashMap$stable;
  function Builder(map) {
    PersistentHashMapBuilder.call(this, map);
    this.d2b_1 = map;
  }
  protoOf(Builder).d25 = function () {
    var tmp = this;
    var tmp_0;
    if (this.o27_1 === this.d2b_1.w26_1) {
      tmp_0 = this.d2b_1;
    } else {
      this.n27_1 = new MutabilityOwnership();
      tmp_0 = new PersistentCompositionLocalHashMap(this.o27_1, this.j());
    }
    tmp.d2b_1 = tmp_0;
    return this.d2b_1;
  };
  function Companion_9() {
    Companion_instance_10 = this;
    var tmp = this;
    var tmp_0 = Companion_getInstance_7().t26_1;
    tmp.e2b_1 = new PersistentCompositionLocalHashMap(tmp_0 instanceof TrieNode ? tmp_0 : THROW_CCE(), 0);
  }
  var Companion_instance_10;
  function Companion_getInstance_9() {
    if (Companion_instance_10 == null)
      new Companion_9();
    return Companion_instance_10;
  }
  function PersistentCompositionLocalHashMap(node, size) {
    Companion_getInstance_9();
    PersistentHashMap.call(this, node, size);
  }
  protoOf(PersistentCompositionLocalHashMap).k2 = function () {
    return protoOf(PersistentHashMap).k2.call(this);
  };
  protoOf(PersistentCompositionLocalHashMap).k1i = function (key, value) {
    var tmp0_elvis_lhs = this.w26_1.e27(hashCode(key), key, value, 0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var newNodeResult = tmp;
    return new PersistentCompositionLocalHashMap(newNodeResult.f27_1, this.j() + newNodeResult.g27_1 | 0);
  };
  protoOf(PersistentCompositionLocalHashMap).c25 = function () {
    return new Builder(this);
  };
  function persistentCompositionLocalHashMapOf() {
    return Companion_getInstance_9().e2b_1;
  }
  var androidx_compose_runtime_internal_PausedCompositionRemembers$stable;
  var androidx_compose_runtime_internal_RememberEventDispatcher$stable;
  function dispatchRememberList($this, list) {
    // Inline function 'androidx.compose.runtime.collection.MutableVector.forEach' call
    var i = 0;
    var tmp = list.b1e_1;
    var content = isArray(tmp) ? tmp : THROW_CCE();
    var size = list.d1e_1;
    while (i < size) {
      var wrapped = content[i].k1h_1;
      $this.s1l_1.v1(wrapped);
      wrapped.o1o();
      i = i + 1 | 0;
    }
  }
  function recordLeaving($this, instance, endRelativeOrder, priority, endRelativeAfter) {
    processPendingLeaving($this, endRelativeOrder);
    if (0 <= endRelativeAfter ? endRelativeAfter < endRelativeOrder : false) {
      $this.z1l_1.e(instance);
      $this.a1m_1.kw(priority);
      $this.b1m_1.kw(endRelativeAfter);
    } else {
      $this.v1l_1.jy(instance);
    }
  }
  function processPendingLeaving($this, endRelativeOrder) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.z1l_1.r()) {
      var index = 0;
      var toAdd = null;
      var toAddAfter = null;
      var toAddPriority = null;
      $l$loop: while (true) {
        var tmp = index;
        // Inline function 'androidx.collection.IntList.size' call
        if (!(tmp < $this.b1m_1.ew_1)) {
          break $l$loop;
        }
        if (endRelativeOrder <= $this.b1m_1.p(index)) {
          var instance = $this.z1l_1.b2(index);
          var endRelativeAfter = $this.b1m_1.b2(index);
          var priority = $this.a1m_1.b2(index);
          if (toAdd == null) {
            toAdd = mutableListOf([instance]);
            // Inline function 'kotlin.also' call
            var this_0 = new MutableIntList();
            this_0.kw(endRelativeAfter);
            toAddAfter = this_0;
            // Inline function 'kotlin.also' call
            var this_1 = new MutableIntList();
            this_1.kw(priority);
            toAddPriority = this_1;
          } else {
            if (!(toAddPriority instanceof MutableIntList))
              THROW_CCE();
            if (!(toAddAfter instanceof MutableIntList))
              THROW_CCE();
            toAdd.e(instance);
            toAddAfter.kw(endRelativeAfter);
            toAddPriority.kw(priority);
          }
        } else {
          index = index + 1 | 0;
        }
      }
      if (!(toAdd == null)) {
        if (!(toAddPriority instanceof MutableIntList))
          THROW_CCE();
        if (!(toAddAfter instanceof MutableIntList))
          THROW_CCE();
        var inductionVariable = 0;
        var last = toAdd.j() - 1 | 0;
        if (inductionVariable < last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var inductionVariable_0 = i + 1 | 0;
            var last_0 = toAdd.j();
            if (inductionVariable_0 < last_0)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                var iAfter = toAddAfter.p(i);
                var jAfter = toAddAfter.p(j);
                if (iAfter < jAfter || (jAfter === iAfter && toAddPriority.p(i) < toAddPriority.p(j))) {
                  swap(toAdd, i, j);
                  swap_0(toAddPriority, i, j);
                  swap_0(toAddAfter, i, j);
                }
              }
               while (inductionVariable_0 < last_0);
          }
           while (inductionVariable < last);
        var tmp0 = $this.v1l_1;
        // Inline function 'androidx.compose.runtime.collection.MutableVector.addAll' call
        var elements = toAdd;
        tmp0.k23(tmp0.d1e_1, elements);
      }
    }
  }
  function RememberEventDispatcher(abandoning) {
    this.s1l_1 = abandoning;
    var tmp = this;
    // Inline function 'androidx.compose.runtime.collection.mutableVectorOf' call
    // Inline function 'androidx.compose.runtime.collection.MutableVector' call
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp$ret$0 = Array(16);
    tmp.t1l_1 = new MutableVector(tmp$ret$0, 0);
    this.u1l_1 = this.t1l_1;
    var tmp_0 = this;
    // Inline function 'androidx.compose.runtime.collection.mutableVectorOf' call
    // Inline function 'androidx.compose.runtime.collection.MutableVector' call
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp$ret$3 = Array(16);
    tmp_0.v1l_1 = new MutableVector(tmp$ret$3, 0);
    var tmp_1 = this;
    // Inline function 'androidx.compose.runtime.collection.mutableVectorOf' call
    // Inline function 'androidx.compose.runtime.collection.MutableVector' call
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp$ret$6 = Array(16);
    tmp_1.w1l_1 = new MutableVector(tmp$ret$6, 0);
    this.x1l_1 = null;
    this.y1l_1 = null;
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_2.z1l_1 = ArrayList_init_$Create$();
    this.a1m_1 = new MutableIntList();
    this.b1m_1 = new MutableIntList();
    this.c1m_1 = null;
  }
  protoOf(RememberEventDispatcher).t20 = function (instance) {
    this.u1l_1.jy(instance);
  };
  protoOf(RememberEventDispatcher).x1j = function (instance, endRelativeOrder, priority, endRelativeAfter) {
    recordLeaving(this, instance, endRelativeOrder, priority, endRelativeAfter);
  };
  protoOf(RememberEventDispatcher).u1j = function (instance, endRelativeOrder, priority, endRelativeAfter) {
    var tmp0_elvis_lhs = this.x1l_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = mutableScatterSetOf_0();
      this.x1l_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var releasing = tmp;
    releasing.zz(instance);
    recordLeaving(this, instance, endRelativeOrder, priority, endRelativeAfter);
  };
  protoOf(RememberEventDispatcher).v1i = function (scope) {
    var pausedPlaceholder = new PausedCompositionRemembers(this.s1l_1);
    var tmp0_elvis_lhs = this.y1l_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = mutableScatterMapOf();
      this.y1l_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp.mz(scope, pausedPlaceholder);
    this.u1l_1.jy(new RememberObserverHolder(pausedPlaceholder, null));
  };
  protoOf(RememberEventDispatcher).t1c = function (scope) {
    var tmp0_safe_receiver = this.y1l_1;
    var placeholder = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h2(scope);
    if (!(placeholder == null)) {
      var tmp1_elvis_lhs = this.c1m_1;
      var tmp;
      var tmp_0 = tmp1_elvis_lhs;
      if ((tmp_0 == null ? null : new Stack(tmp_0)) == null) {
        // Inline function 'kotlin.also' call
        var this_0 = new Stack(_Stack___init__impl__tvpfn5());
        this.c1m_1 = this_0.n1i_1;
        tmp = this_0.n1i_1;
      } else {
        tmp = tmp1_elvis_lhs;
      }
      Stack__push_impl_s8r905(tmp, this.u1l_1);
      this.u1l_1 = placeholder.k2b_1;
    }
  };
  protoOf(RememberEventDispatcher).c1j = function (scope) {
    var pausedPlaceholders = this.y1l_1;
    if (!(pausedPlaceholders == null)) {
      var placeholder = pausedPlaceholders.h2(scope);
      if (!(placeholder == null)) {
        var tmp0_safe_receiver = this.c1m_1;
        var tmp;
        var tmp_0 = tmp0_safe_receiver;
        if ((tmp_0 == null ? null : new Stack(tmp_0)) == null) {
          tmp = null;
        } else {
          tmp = Stack__pop_impl_8s4za4(tmp0_safe_receiver);
        }
        var tmp1_safe_receiver = tmp;
        if (tmp1_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          this.u1l_1 = tmp1_safe_receiver;
        }
        pausedPlaceholders.m2(scope);
      }
    }
  };
  protoOf(RememberEventDispatcher).d1m = function () {
    processPendingLeaving(this, -2147483648);
    // Inline function 'androidx.compose.runtime.collection.MutableVector.isNotEmpty' call
    if (!(this.v1l_1.d1e_1 === 0)) {
      var tmp0 = 'Compose:onForgotten';
      $l$block: {
        // Inline function 'androidx.compose.runtime.internal.trace' call
        var token = Trace_instance.u1d(tmp0);
        try {
          var releasing = this.x1l_1;
          var inductionVariable = this.v1l_1.d1e_1 - 1 | 0;
          if (0 <= inductionVariable)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              // Inline function 'androidx.compose.runtime.collection.MutableVector.get' call
              var tmp = this.v1l_1.b1e_1[i];
              var instance = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
              if (instance instanceof RememberObserverHolder) {
                var wrapped = instance.k1h_1;
                this.s1l_1.v1(wrapped);
                wrapped.p1o();
              }
              if (isInterface(instance, ComposeNodeLifecycleCallback)) {
                if (!(releasing == null) && releasing.o(instance)) {
                  instance.y13();
                } else {
                  instance.x13();
                }
              }
            }
             while (0 <= inductionVariable);
          break $l$block;
        }finally {
          Trace_instance.f1e(token);
        }
      }
    }
    // Inline function 'androidx.compose.runtime.collection.MutableVector.isNotEmpty' call
    if (!(this.t1l_1.d1e_1 === 0)) {
      var tmp0_0 = 'Compose:onRemembered';
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.internal.trace' call
        var token_0 = Trace_instance.u1d(tmp0_0);
        try {
          dispatchRememberList(this, this.t1l_1);
          break $l$block_0;
        }finally {
          Trace_instance.f1e(token_0);
        }
      }
    }
  };
  protoOf(RememberEventDispatcher).e1m = function () {
    // Inline function 'androidx.compose.runtime.collection.MutableVector.isNotEmpty' call
    if (!(this.w1l_1.d1e_1 === 0)) {
      var tmp0 = 'Compose:sideeffects';
      $l$block: {
        // Inline function 'androidx.compose.runtime.internal.trace' call
        var token = Trace_instance.u1d(tmp0);
        try {
          // Inline function 'androidx.compose.runtime.collection.MutableVector.forEach' call
          var this_0 = this.w1l_1;
          var i = 0;
          var tmp = this_0.b1e_1;
          var content = isArray(tmp) ? tmp : THROW_CCE();
          var size = this_0.d1e_1;
          while (i < size) {
            content[i]();
            i = i + 1 | 0;
          }
          this.w1l_1.y1();
          break $l$block;
        }finally {
          Trace_instance.f1e(token);
        }
      }
    }
  };
  protoOf(RememberEventDispatcher).f1m = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.s1l_1.r()) {
      var tmp0 = 'Compose:abandons';
      $l$block: {
        // Inline function 'androidx.compose.runtime.internal.trace' call
        var token = Trace_instance.u1d(tmp0);
        try {
          var iterator = this.s1l_1.g();
          while (iterator.h()) {
            var instance = iterator.i();
            iterator.a4();
            instance.q1o();
          }
          break $l$block;
        }finally {
          Trace_instance.f1e(token);
        }
      }
    }
  };
  function PausedCompositionRemembers(abandoning) {
    this.j2b_1 = abandoning;
    var tmp = this;
    // Inline function 'androidx.compose.runtime.collection.mutableVectorOf' call
    // Inline function 'androidx.compose.runtime.collection.MutableVector' call
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp$ret$0 = Array(16);
    tmp.k2b_1 = new MutableVector(tmp$ret$0, 0);
  }
  protoOf(PausedCompositionRemembers).o1o = function () {
    // Inline function 'androidx.compose.runtime.collection.MutableVector.forEach' call
    var this_0 = this.k2b_1;
    var i = 0;
    var tmp = this_0.b1e_1;
    var content = isArray(tmp) ? tmp : THROW_CCE();
    var size = this_0.d1e_1;
    while (i < size) {
      var wrapped = content[i].k1h_1;
      this.j2b_1.v1(wrapped);
      wrapped.o1o();
      i = i + 1 | 0;
    }
  };
  protoOf(PausedCompositionRemembers).p1o = function () {
  };
  protoOf(PausedCompositionRemembers).q1o = function () {
  };
  function swap(_this__u8e3s4, a, b) {
    var item = _this__u8e3s4.p(a);
    _this__u8e3s4.z1(a, _this__u8e3s4.p(b));
    _this__u8e3s4.z1(b, item);
  }
  function swap_0(_this__u8e3s4, a, b) {
    var item = _this__u8e3s4.p(a);
    _this__u8e3s4.lw(a, _this__u8e3s4.p(b));
    _this__u8e3s4.lw(b, item);
  }
  function get_emptyThreadMap() {
    _init_properties_SnapshotThreadLocal_kt__57olpn();
    return emptyThreadMap;
  }
  var emptyThreadMap;
  var androidx_compose_runtime_internal_SnapshotThreadLocal$stable;
  var androidx_compose_runtime_internal_ThreadMap$stable;
  function SnapshotThreadLocal() {
    this.i1o_1 = new AtomicReference(get_emptyThreadMap());
    var tmp = this;
    // Inline function 'androidx.compose.runtime.platform.makeSynchronizedObject' call
    tmp.j1o_1 = null == null ? new Object() : null;
    this.k1o_1 = null;
  }
  protoOf(SnapshotThreadLocal).bo = function () {
    var threadId = currentThreadId();
    var tmp;
    if (threadId.equals(get_MainThreadId())) {
      tmp = this.k1o_1;
    } else {
      var tmp_0 = this.i1o_1.bo().o2b(threadId);
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    }
    return tmp;
  };
  protoOf(SnapshotThreadLocal).l1o = function (value) {
    var key = currentThreadId();
    if (key.equals(get_MainThreadId())) {
      this.k1o_1 = value;
    } else {
      // Inline function 'androidx.compose.runtime.platform.synchronized' call
      this.j1o_1;
      var current = this.i1o_1.bo();
      if (current.p2b(key, value))
        return Unit_instance;
      this.i1o_1.n1n(current.q2b(key, value));
    }
  };
  function find_0($this, key) {
    var high = $this.l2b_1 - 1 | 0;
    var tmp0_subject = high;
    if (tmp0_subject === -1)
      return -1;
    else if (tmp0_subject === 0)
      return $this.m2b_1[0].equals(key) ? 0 : $this.m2b_1[0].y(key) > 0 ? -2 : -1;
    var low = 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = $this.m2b_1[mid];
      var comparison = midVal.w2(key);
      if (comparison.y(new Long(0, 0)) < 0)
        low = mid + 1 | 0;
      else if (comparison.y(new Long(0, 0)) > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function ThreadMap(size, keys, values) {
    this.l2b_1 = size;
    this.m2b_1 = keys;
    this.n2b_1 = values;
  }
  protoOf(ThreadMap).o2b = function (key) {
    var index = find_0(this, key);
    return index >= 0 ? this.n2b_1[index] : null;
  };
  protoOf(ThreadMap).p2b = function (key, value) {
    var index = find_0(this, key);
    if (index < 0)
      return false;
    this.n2b_1[index] = value;
    return true;
  };
  protoOf(ThreadMap).q2b = function (key, value) {
    var size = this.l2b_1;
    // Inline function 'kotlin.collections.count' call
    var count = 0;
    var indexedObject = this.n2b_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (!(element == null)) {
        count = count + 1 | 0;
      }
    }
    var newSize = count + 1 | 0;
    var newKeys = longArray(newSize);
    // Inline function 'kotlin.arrayOfNulls' call
    var newValues = Array(newSize);
    if (newSize > 1) {
      var dest = 0;
      var source = 0;
      $l$loop: while (dest < newSize && source < size) {
        var oldKey = this.m2b_1[source];
        var oldValue = this.n2b_1[source];
        if (oldKey.y(key) > 0) {
          newKeys[dest] = key;
          newValues[dest] = value;
          dest = dest + 1 | 0;
          break $l$loop;
        }
        if (!(oldValue == null)) {
          newKeys[dest] = oldKey;
          newValues[dest] = oldValue;
          dest = dest + 1 | 0;
        }
        source = source + 1 | 0;
      }
      if (source === size) {
        newKeys[newSize - 1 | 0] = key;
        newValues[newSize - 1 | 0] = value;
      } else {
        while (dest < newSize) {
          var oldKey_0 = this.m2b_1[source];
          var oldValue_0 = this.n2b_1[source];
          if (!(oldValue_0 == null)) {
            newKeys[dest] = oldKey_0;
            newValues[dest] = oldValue_0;
            dest = dest + 1 | 0;
          }
          source = source + 1 | 0;
        }
      }
    } else {
      newKeys[0] = key;
      newValues[0] = value;
    }
    return new ThreadMap(newSize, newKeys, newValues);
  };
  var properties_initialized_SnapshotThreadLocal_kt_4q3rql;
  function _init_properties_SnapshotThreadLocal_kt__57olpn() {
    if (!properties_initialized_SnapshotThreadLocal_kt_4q3rql) {
      properties_initialized_SnapshotThreadLocal_kt_4q3rql = true;
      var tmp = longArray(0);
      // Inline function 'kotlin.emptyArray' call
      var tmp$ret$0 = [];
      emptyThreadMap = new ThreadMap(0, tmp, tmp$ret$0);
      androidx_compose_runtime_internal_SnapshotThreadLocal$stable = 8;
      androidx_compose_runtime_internal_ThreadMap$stable = 8;
    }
  }
  function fastJoinToString(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return fastJoinTo(_this__u8e3s4, StringBuilder_init_$Create$(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function fastToSet(_this__u8e3s4) {
    // Inline function 'kotlin.also' call
    var this_0 = HashSet_init_$Create$(_this__u8e3s4.j());
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.p(index);
        this_0.e(item);
      }
       while (inductionVariable <= last);
    return this_0;
  }
  function fastJoinTo(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    buffer.f(prefix);
    var count = 0;
    var inductionVariable = 0;
    var last = _this__u8e3s4.j() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = _this__u8e3s4.p(index);
        count = count + 1 | 0;
        if (count > 1) {
          buffer.f(separator);
        }
        if (limit < 0 || count <= limit) {
          appendElement(buffer, element, transform);
        } else
          break $l$loop;
      }
       while (inductionVariable <= last);
    if (limit >= 0 && count > limit) {
      buffer.f(truncated);
    }
    buffer.f(postfix);
    return buffer;
  }
  function appendElement(_this__u8e3s4, element, transform) {
    if (!(transform == null))
      _this__u8e3s4.f(transform(element));
    else {
      if (element == null ? true : isCharSequence(element))
        _this__u8e3s4.f(element);
      else {
        if (element instanceof Char)
          _this__u8e3s4.d8(element.h1_1);
        else {
          _this__u8e3s4.f(toString(element));
        }
      }
    }
  }
  function get_emptyLambda() {
    _init_properties_Snapshot_kt__l6n1ng();
    return emptyLambda;
  }
  var emptyLambda;
  function get_INVALID_SNAPSHOT() {
    _init_properties_Snapshot_kt__l6n1ng();
    return INVALID_SNAPSHOT;
  }
  var INVALID_SNAPSHOT;
  function get_threadSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    return threadSnapshot;
  }
  var threadSnapshot;
  function get_lock() {
    _init_properties_Snapshot_kt__l6n1ng();
    return lock;
  }
  var lock;
  function set_openSnapshots(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    openSnapshots = _set____db54di;
  }
  function get_openSnapshots() {
    _init_properties_Snapshot_kt__l6n1ng();
    return openSnapshots;
  }
  var openSnapshots;
  function set_nextSnapshotId(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    nextSnapshotId = _set____db54di;
  }
  function get_nextSnapshotId() {
    _init_properties_Snapshot_kt__l6n1ng();
    return nextSnapshotId;
  }
  var nextSnapshotId;
  function get_pinningTable() {
    _init_properties_Snapshot_kt__l6n1ng();
    return pinningTable;
  }
  var pinningTable;
  function get_extraStateObjects() {
    _init_properties_Snapshot_kt__l6n1ng();
    return extraStateObjects;
  }
  var extraStateObjects;
  function set_applyObservers(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    applyObservers = _set____db54di;
  }
  function get_applyObservers() {
    _init_properties_Snapshot_kt__l6n1ng();
    return applyObservers;
  }
  var applyObservers;
  function set_globalWriteObservers(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    globalWriteObservers = _set____db54di;
  }
  function get_globalWriteObservers() {
    _init_properties_Snapshot_kt__l6n1ng();
    return globalWriteObservers;
  }
  var globalWriteObservers;
  function get_globalSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    return globalSnapshot;
  }
  var globalSnapshot;
  var snapshotInitializer;
  function get_pendingApplyObserverCount() {
    _init_properties_Snapshot_kt__l6n1ng();
    return pendingApplyObserverCount;
  }
  var pendingApplyObserverCount;
  var androidx_compose_runtime_snapshots_Snapshot$stable;
  var androidx_compose_runtime_snapshots_MutableSnapshot$stable;
  var androidx_compose_runtime_snapshots_SnapshotApplyResult_Success$stable;
  var androidx_compose_runtime_snapshots_SnapshotApplyResult_Failure$stable;
  var androidx_compose_runtime_snapshots_SnapshotApplyResult$stable;
  var androidx_compose_runtime_snapshots_SnapshotApplyConflictException$stable;
  var androidx_compose_runtime_snapshots_StateRecord$stable;
  var androidx_compose_runtime_snapshots_ReadonlySnapshot$stable;
  var androidx_compose_runtime_snapshots_NestedReadonlySnapshot$stable;
  var androidx_compose_runtime_snapshots_GlobalSnapshot$stable;
  var androidx_compose_runtime_snapshots_NestedMutableSnapshot$stable;
  var androidx_compose_runtime_snapshots_TransparentObserverMutableSnapshot$stable;
  var androidx_compose_runtime_snapshots_TransparentObserverSnapshot$stable;
  function StateObject() {
  }
  function sam$androidx_compose_runtime_snapshots_ObserverHandle$0(function_0) {
    this.r2b_1 = function_0;
  }
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0).pm = function () {
    return this.r2b_1();
  };
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0).k3 = function () {
    return this.r2b_1;
  };
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, ObserverHandle) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.k3(), other.k3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0).hashCode = function () {
    return hashCode(this.k3());
  };
  function sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0(function_0) {
    this.s2b_1 = function_0;
  }
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0).pm = function () {
    return this.s2b_1();
  };
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0).k3 = function () {
    return this.s2b_1;
  };
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, ObserverHandle) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.k3(), other.k3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0).hashCode = function () {
    return hashCode(this.k3());
  };
  function Snapshot$Companion$registerApplyObserver$lambda($observer) {
    return function () {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.platform.synchronized' call
      get_lock();
      set_applyObservers(minus(get_applyObservers(), $observer));
      return Unit_instance;
    };
  }
  function Snapshot$Companion$registerGlobalWriteObserver$lambda($observer) {
    return function () {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.platform.synchronized' call
      get_lock();
      set_globalWriteObservers(minus(get_globalWriteObservers(), $observer));
      advanceGlobalSnapshot_0();
      return Unit_instance;
    };
  }
  function Companion_10() {
    this.j1r_1 = 1;
  }
  protoOf(Companion_10).p12 = function () {
    return currentSnapshot();
  };
  protoOf(Companion_10).n1s = function (readObserver, writeObserver) {
    var tmp = currentSnapshot();
    var tmp0_safe_receiver = tmp instanceof MutableSnapshot ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t2b(readObserver, writeObserver);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var message = 'Cannot create a mutable snapshot of an read-only snapshot';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  };
  protoOf(Companion_10).x1u = function (observer) {
    advanceGlobalSnapshot(get_emptyLambda());
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.platform.synchronized' call
    get_lock();
    set_applyObservers(plus_0(get_applyObservers(), observer));
    var tmp = Snapshot$Companion$registerApplyObserver$lambda(observer);
    return new sam$androidx_compose_runtime_snapshots_ObserverHandle$0(tmp);
  };
  protoOf(Companion_10).u2b = function (observer) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.platform.synchronized' call
    get_lock();
    set_globalWriteObservers(plus_0(get_globalWriteObservers(), observer));
    advanceGlobalSnapshot_0();
    var tmp = Snapshot$Companion$registerGlobalWriteObserver$lambda(observer);
    return new sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0(tmp);
  };
  protoOf(Companion_10).m1r = function () {
    return currentSnapshot().v2b();
  };
  protoOf(Companion_10).k1r = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.platform.synchronized' call
    get_lock();
    var changes = get_globalSnapshot().w2b();
    if (changes) {
      advanceGlobalSnapshot_0();
    }
  };
  var Companion_instance_11;
  function Companion_getInstance_10() {
    return Companion_instance_11;
  }
  function access$_get_pinningTrackingHandle__7vwthz($this) {
    return $this.y1d_1;
  }
  function Snapshot(snapshotId, invalid) {
    this.v1d_1 = invalid;
    this.w1d_1 = snapshotId;
    this.x1d_1 = false;
    this.y1d_1 = !equals(snapshotId, get_INVALID_SNAPSHOT()) ? trackPinning(snapshotId, this.x2b()) : -1;
  }
  protoOf(Snapshot).y2b = function (_set____db54di) {
    this.v1d_1 = _set____db54di;
  };
  protoOf(Snapshot).x2b = function () {
    return this.v1d_1;
  };
  protoOf(Snapshot).z2b = function (_set____db54di) {
    this.w1d_1 = _set____db54di;
  };
  protoOf(Snapshot).z1d = function () {
    return this.w1d_1;
  };
  protoOf(Snapshot).a2c = function (value) {
    // Inline function 'kotlin.error' call
    var message = 'Updating write count is not supported for this snapshot';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(Snapshot).b2c = function () {
    return 0;
  };
  protoOf(Snapshot).pm = function () {
    this.x1d_1 = true;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.platform.synchronized' call
    get_lock();
    this.d2c();
  };
  protoOf(Snapshot).o1s = function () {
    var previous = get_threadSnapshot().bo();
    get_threadSnapshot().l1o(this);
    return previous;
  };
  protoOf(Snapshot).p1s = function (snapshot) {
    get_threadSnapshot().l1o(snapshot);
  };
  protoOf(Snapshot).h2c = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.platform.synchronized' call
    get_lock();
    this.i2c();
    this.j2c();
  };
  protoOf(Snapshot).i2c = function () {
    set_openSnapshots(get_openSnapshots().o2c(this.z1d()));
  };
  protoOf(Snapshot).j2c = function () {
    this.d2c();
  };
  protoOf(Snapshot).p2c = function () {
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    if (!!this.x1d_1) {
      var tmp$ret$0 = 'Cannot use a disposed snapshot';
      throwIllegalArgumentException(tmp$ret$0);
    }
  };
  protoOf(Snapshot).d2c = function () {
    if (this.y1d_1 >= 0) {
      releasePinningLocked(this.y1d_1);
      this.y1d_1 = -1;
    }
  };
  protoOf(Snapshot).q2c = function () {
    // Inline function 'kotlin.also' call
    var this_0 = this.y1d_1;
    this.y1d_1 = -1;
    return this_0;
  };
  function ObserverHandle() {
  }
  function validateNotApplied($this) {
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    if (!!$this.j1t_1) {
      var tmp$ret$0 = 'Unsupported operation on a snapshot that has been applied';
      throwIllegalStateException(tmp$ret$0);
    }
  }
  function validateNotAppliedOrPinned($this) {
    var tmp;
    if (!$this.j1t_1) {
      tmp = true;
    } else {
      // Inline function 'androidx.compose.runtime.snapshots.Snapshot.isPinned' call
      tmp = access$_get_pinningTrackingHandle__7vwthz($this) >= 0;
    }
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    if (!tmp) {
      var tmp$ret$1 = 'Unsupported operation on a disposed or applied snapshot';
      throwIllegalStateException(tmp$ret$1);
    }
  }
  function abandon($this) {
    var modified = $this.r2c();
    if (!(modified == null)) {
      validateNotApplied($this);
      $this.s2c(null);
      var id = $this.z1d();
      // Inline function 'androidx.collection.ScatterSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var elements = modified.pz_1;
      $l$block: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = modified.oz_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_0 = slot;
            if (!this_0.f3(this_0.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                    var index = (i << 3) + j | 0;
                    var tmp = elements[index];
                    var current = ((tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE()).e1y();
                    while (!(current == null)) {
                      if (equals(current.c1y_1, id) || contains($this.g1t_1, current.c1y_1)) {
                        current.c1y_1 = get_INVALID_SNAPSHOT();
                      }
                      current = current.d1y_1;
                    }
                  }
                  slot = slot.d3(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
    }
    $this.h2c();
  }
  function releasePreviouslyPinnedSnapshotsLocked($this) {
    var inductionVariable = 0;
    var last = $this.h1t_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        releasePinningLocked($this.h1t_1[index]);
      }
       while (inductionVariable <= last);
  }
  function Companion_11() {
    Companion_instance_12 = this;
    this.t2c_1 = new Int32Array(0);
  }
  var Companion_instance_12;
  function Companion_getInstance_11() {
    if (Companion_instance_12 == null)
      new Companion_11();
    return Companion_instance_12;
  }
  function MutableSnapshot(snapshotId, invalid, readObserver, writeObserver) {
    Companion_getInstance_11();
    Snapshot.call(this, snapshotId, invalid);
    this.b1t_1 = readObserver;
    this.c1t_1 = writeObserver;
    this.d1t_1 = 0;
    this.e1t_1 = null;
    this.f1t_1 = null;
    this.g1t_1 = Companion_getInstance_12().u2c_1;
    this.h1t_1 = Companion_getInstance_11().t2c_1;
    this.i1t_1 = 1;
    this.j1t_1 = false;
  }
  protoOf(MutableSnapshot).e2c = function () {
    return this.b1t_1;
  };
  protoOf(MutableSnapshot).f2c = function () {
    return this.c1t_1;
  };
  protoOf(MutableSnapshot).w2b = function () {
    var tmp0_safe_receiver = this.r2c();
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.cy()) === true;
  };
  protoOf(MutableSnapshot).t2b = function (readObserver, writeObserver) {
    this.p2c();
    validateNotAppliedOrPinned(this);
    // Inline function 'androidx.compose.runtime.snapshots.tooling.creatingSnapshot' call
    var observerMap = null;
    var observers = access$_get_observers_$tSnapshotObserverKt_23v7jt();
    var actualReadObserver = readObserver;
    var actualWriteObserver = writeObserver;
    if (!(observers == null)) {
      var result = mergeObservers(observers, this, false, readObserver, writeObserver);
      var mappedObservers = result.ye_1;
      actualReadObserver = mappedObservers.v2c_1;
      actualWriteObserver = mappedObservers.w2c_1;
      observerMap = result.ze_1;
    }
    var tmp0 = actualReadObserver;
    var actualWriteObserver_0 = actualWriteObserver;
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance' call
    this.x2c(this.z1d());
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.platform.synchronized' call
    get_lock();
    var newId = get_nextSnapshotId();
    // Inline function 'androidx.compose.runtime.snapshots.plus' call
    var tmp$ret$0 = get_nextSnapshotId() + toLong(1).j3();
    set_nextSnapshotId(tmp$ret$0);
    set_openSnapshots(get_openSnapshots().y2c(newId));
    var currentInvalid = this.x2b();
    this.y2b(currentInvalid.y2c(newId));
    // Inline function 'androidx.compose.runtime.snapshots.plus' call
    var tmp$ret$1 = this.z1d() + toLong(1).j3();
    // Inline function 'kotlin.also' call
    var this_0 = new NestedMutableSnapshot(newId, addRange(currentInvalid, tmp$ret$1, newId), mergedReadObserver(tmp0, this.e2c()), mergedWriteObserver(actualWriteObserver_0, this.f2c()), this);
    if (!this.j1t_1 && !this.x1d_1) {
      var previousId = this.z1d();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.platform.synchronized' call
      get_lock();
      // Inline function 'kotlin.also' call
      var this_1 = access$_get_nextSnapshotId_$tSnapshotKt_vxgvey();
      // Inline function 'androidx.compose.runtime.snapshots.plus' call
      var tmp$ret$6 = access$_get_nextSnapshotId_$tSnapshotKt_vxgvey() + toLong(1).j3();
      access$_set_nextSnapshotId_$tSnapshotKt_xcaltq(tmp$ret$6);
      this.z2b(this_1);
      access$_set_openSnapshots_$tSnapshotKt_9lk9nh(access$_get_openSnapshots_$tSnapshotKt_7cpqp5().y2c(this.z1d()));
      var tmp = this.x2b();
      // Inline function 'androidx.compose.runtime.snapshots.plus' call
      var tmp$ret$12 = previousId + toLong(1).j3();
      this.y2b(addRange(tmp, tmp$ret$12, this.z1d()));
    }
    var result_0 = this_0;
    if (observers == null)
      null;
    else {
      dispatchCreatedObservers(observers, this, result_0, observerMap);
    }
    return result_0;
  };
  protoOf(MutableSnapshot).k1t = function () {
    var modified = this.r2c();
    var tmp;
    if (!(modified == null)) {
      var globalSnapshot = get_globalSnapshot();
      tmp = optimisticMerges(globalSnapshot.z1d(), this, get_openSnapshots().o2c(globalSnapshot.z1d()));
    } else {
      tmp = null;
    }
    var optimisticMerges_0 = tmp;
    var observers = emptyList();
    var globalModified = null;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.platform.synchronized' call
    get_lock();
    validateOpen(this);
    if (modified == null || modified.j() === 0) {
      this.i2c();
      var globalSnapshot_0 = get_globalSnapshot();
      var previousModified = globalSnapshot_0.r2c();
      resetGlobalSnapshotLocked(globalSnapshot_0, get_emptyLambda());
      if (!(previousModified == null) && previousModified.cy()) {
        observers = get_applyObservers();
        globalModified = previousModified;
      }
    } else {
      var globalSnapshot_1 = get_globalSnapshot();
      var result = this.z2c(get_nextSnapshotId(), modified, optimisticMerges_0, get_openSnapshots().o2c(globalSnapshot_1.z1d()));
      if (!equals(result, Success_getInstance()))
        return result;
      this.i2c();
      var previousModified_0 = globalSnapshot_1.r2c();
      resetGlobalSnapshotLocked(globalSnapshot_1, get_emptyLambda());
      this.s2c(null);
      globalSnapshot_1.s2c(null);
      observers = get_applyObservers();
      globalModified = previousModified_0;
    }
    this.j1t_1 = true;
    if (!(globalModified == null)) {
      var nonNullGlobalModified = wrapIntoSet(ensureNotNull(globalModified));
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!nonNullGlobalModified.r()) {
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        var this_0 = observers;
        var inductionVariable = 0;
        var last = this_0.j() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = this_0.p(index);
            item(nonNullGlobalModified, this);
          }
           while (inductionVariable <= last);
      }
    }
    if (!(modified == null) && modified.cy()) {
      var modifiedSet = wrapIntoSet(modified);
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var this_1 = observers;
      var inductionVariable_0 = 0;
      var last_0 = this_1.j() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = this_1.p(index_0);
          item_0(modifiedSet, this);
        }
         while (inductionVariable_0 <= last_0);
    }
    dispatchObserverOnApplied(this, modified);
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.platform.synchronized' call
    get_lock();
    this.j2c();
    checkAndOverwriteUnusedRecordsLocked();
    var tmp0_safe_receiver = globalModified;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.collection.ScatterSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var elements = tmp0_safe_receiver.pz_1;
      $l$block: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = tmp0_safe_receiver.oz_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable_1 = 0;
        if (inductionVariable_1 <= lastIndex)
          do {
            var i = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_2 = slot;
            if (!this_2.f3(this_2.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_2 = 0;
              if (inductionVariable_2 < bitCount)
                do {
                  var j = inductionVariable_2;
                  inductionVariable_2 = inductionVariable_2 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                    var index_1 = (i << 3) + j | 0;
                    var tmp_0 = elements[index_1];
                    var it = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                    processForUnusedRecordsLocked(it);
                  }
                  slot = slot.d3(8);
                }
                 while (inductionVariable_2 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
    }
    if (modified == null)
      null;
    else {
      // Inline function 'androidx.collection.ScatterSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var elements_0 = modified.pz_1;
      $l$block_0: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m_0 = modified.oz_1;
        var lastIndex_0 = m_0.length - 2 | 0;
        var inductionVariable_3 = 0;
        if (inductionVariable_3 <= lastIndex_0)
          do {
            var i_0 = inductionVariable_3;
            inductionVariable_3 = inductionVariable_3 + 1 | 0;
            var slot_0 = m_0[i_0];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_3 = slot_0;
            if (!this_3.f3(this_3.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
              var inductionVariable_4 = 0;
              if (inductionVariable_4 < bitCount_0)
                do {
                  var j_0 = inductionVariable_4;
                  inductionVariable_4 = inductionVariable_4 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot_0.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                    var index_2 = (i_0 << 3) + j_0 | 0;
                    var tmp_1 = elements_0[index_2];
                    var it_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                    processForUnusedRecordsLocked(it_0);
                  }
                  slot_0 = slot_0.d3(8);
                }
                 while (inductionVariable_4 < bitCount_0);
              if (!(bitCount_0 === 8)) {
                break $l$block_0;
              }
            }
          }
           while (!(i_0 === lastIndex_0));
      }
    }
    var tmp2_safe_receiver = this.f1t_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var inductionVariable_5 = 0;
      var last_1 = tmp2_safe_receiver.j() - 1 | 0;
      if (inductionVariable_5 <= last_1)
        do {
          var index_3 = inductionVariable_5;
          inductionVariable_5 = inductionVariable_5 + 1 | 0;
          var item_1 = tmp2_safe_receiver.p(index_3);
          processForUnusedRecordsLocked(item_1);
        }
         while (inductionVariable_5 <= last_1);
    }
    this.f1t_1 = null;
    return Success_getInstance();
  };
  protoOf(MutableSnapshot).c2c = function () {
    return false;
  };
  protoOf(MutableSnapshot).pm = function () {
    if (!this.x1d_1) {
      protoOf(Snapshot).pm.call(this);
      this.a2d(this);
      dispatchObserverOnPreDispose(this);
    }
  };
  protoOf(MutableSnapshot).b2d = function (snapshot) {
    this.i1t_1 = this.i1t_1 + 1 | 0;
  };
  protoOf(MutableSnapshot).a2d = function (snapshot) {
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    if (!(this.i1t_1 > 0)) {
      var tmp$ret$0 = 'no pending nested snapshots';
      throwIllegalArgumentException(tmp$ret$0);
    }
    this.i1t_1 = this.i1t_1 - 1 | 0;
    if (this.i1t_1 === 0) {
      if (!this.j1t_1) {
        abandon(this);
      }
    }
  };
  protoOf(MutableSnapshot).v2b = function () {
    if (this.j1t_1 || this.x1d_1)
      return Unit_instance;
    this.c2d();
  };
  protoOf(MutableSnapshot).i2c = function () {
    set_openSnapshots(get_openSnapshots().o2c(this.z1d()).d2d(this.g1t_1));
  };
  protoOf(MutableSnapshot).j2c = function () {
    releasePreviouslyPinnedSnapshotsLocked(this);
    protoOf(Snapshot).j2c.call(this);
  };
  protoOf(MutableSnapshot).z2c = function (nextId, modified, optimisticMerges, invalidSnapshots) {
    var mergedRecords = null;
    var start = this.x2b().y2c(this.z1d()).e2d(this.g1t_1);
    var statesToRemove = null;
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var elements = modified.pz_1;
    $l$block_2: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = modified.oz_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.f3(this_0.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  var tmp = elements[index];
                  var tmp0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  $l$block_1: {
                    var first = tmp0.e1y();
                    var tmp0_elvis_lhs = readable(first, nextId, invalidSnapshots);
                    var tmp_0;
                    if (tmp0_elvis_lhs == null) {
                      break $l$block_1;
                    } else {
                      tmp_0 = tmp0_elvis_lhs;
                    }
                    var current = tmp_0;
                    var tmp1_elvis_lhs = readable(first, this.z1d(), start);
                    var tmp_1;
                    if (tmp1_elvis_lhs == null) {
                      break $l$block_1;
                    } else {
                      tmp_1 = tmp1_elvis_lhs;
                    }
                    var previous = tmp_1;
                    if (equals(previous.c1y_1, toSnapshotId(1))) {
                      break $l$block_1;
                    }
                    if (!equals(current, previous)) {
                      var tmp2_elvis_lhs = readable(first, this.z1d(), this.x2b());
                      var tmp_2;
                      if (tmp2_elvis_lhs == null) {
                        readError();
                      } else {
                        tmp_2 = tmp2_elvis_lhs;
                      }
                      var applied = tmp_2;
                      var tmp4_elvis_lhs = optimisticMerges == null ? null : optimisticMerges.h2(current);
                      var tmp_3;
                      if (tmp4_elvis_lhs == null) {
                        // Inline function 'kotlin.run' call
                        tmp_3 = tmp0.g1y(previous, current, applied);
                      } else {
                        tmp_3 = tmp4_elvis_lhs;
                      }
                      var merged = tmp_3;
                      if (merged == null)
                        return new Failure(this);
                      else if (!equals(merged, applied))
                        if (equals(merged, current)) {
                          var tmp6_elvis_lhs = mergedRecords;
                          var tmp_4;
                          if (tmp6_elvis_lhs == null) {
                            // Inline function 'kotlin.collections.mutableListOf' call
                            // Inline function 'kotlin.also' call
                            var this_1 = ArrayList_init_$Create$();
                            mergedRecords = this_1;
                            tmp_4 = this_1;
                          } else {
                            tmp_4 = tmp6_elvis_lhs;
                          }
                          tmp_4.e(to(tmp0, current.y1x(this.z1d())));
                          var tmp7_elvis_lhs = statesToRemove;
                          var tmp_5;
                          if (tmp7_elvis_lhs == null) {
                            // Inline function 'kotlin.collections.mutableListOf' call
                            // Inline function 'kotlin.also' call
                            var this_2 = ArrayList_init_$Create$();
                            statesToRemove = this_2;
                            tmp_5 = this_2;
                          } else {
                            tmp_5 = tmp7_elvis_lhs;
                          }
                          tmp_5.e(tmp0);
                        } else {
                          var tmp8_elvis_lhs = mergedRecords;
                          var tmp_6;
                          if (tmp8_elvis_lhs == null) {
                            // Inline function 'kotlin.collections.mutableListOf' call
                            // Inline function 'kotlin.also' call
                            var this_3 = ArrayList_init_$Create$();
                            mergedRecords = this_3;
                            tmp_6 = this_3;
                          } else {
                            tmp_6 = tmp8_elvis_lhs;
                          }
                          tmp_6.e(!equals(merged, previous) ? to(tmp0, merged) : to(tmp0, previous.y1x(this.z1d())));
                        }
                    }
                  }
                }
                slot = slot.d3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block_2;
            }
          }
        }
         while (!(i === lastIndex));
    }
    var tmp0_safe_receiver = mergedRecords;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this.c2d();
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var inductionVariable_1 = 0;
      var last = tmp0_safe_receiver.j() - 1 | 0;
      if (inductionVariable_1 <= last)
        do {
          var index_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var item = tmp0_safe_receiver.p(index_0);
          var state = item.af();
          var stateRecord = item.bf();
          stateRecord.c1y_1 = nextId;
          // Inline function 'androidx.compose.runtime.snapshots.sync' call
          // Inline function 'androidx.compose.runtime.platform.synchronized' call
          get_lock();
          stateRecord.d1y_1 = state.e1y();
          state.f1y(stateRecord);
        }
         while (inductionVariable_1 <= last);
    }
    var tmp1_safe_receiver = statesToRemove;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var inductionVariable_2 = 0;
      var last_0 = tmp1_safe_receiver.j() - 1 | 0;
      if (inductionVariable_2 <= last_0)
        do {
          var index_1 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var item_0 = tmp1_safe_receiver.p(index_1);
          modified.v1(item_0);
        }
         while (inductionVariable_2 <= last_0);
      var mergedList = this.f1t_1;
      this.f1t_1 = mergedList == null ? tmp1_safe_receiver : plus_2(mergedList, tmp1_safe_receiver);
    }
    return Success_getInstance();
  };
  protoOf(MutableSnapshot).c2d = function () {
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance' call
    this.x2c(this.z1d());
    // Inline function 'kotlin.also' call
    if (!this.j1t_1 && !this.x1d_1) {
      var previousId = this.z1d();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.platform.synchronized' call
      get_lock();
      // Inline function 'kotlin.also' call
      var this_0 = access$_get_nextSnapshotId_$tSnapshotKt_vxgvey();
      // Inline function 'androidx.compose.runtime.snapshots.plus' call
      var tmp$ret$1 = access$_get_nextSnapshotId_$tSnapshotKt_vxgvey() + toLong(1).j3();
      access$_set_nextSnapshotId_$tSnapshotKt_xcaltq(tmp$ret$1);
      this.z2b(this_0);
      access$_set_openSnapshots_$tSnapshotKt_9lk9nh(access$_get_openSnapshots_$tSnapshotKt_7cpqp5().y2c(this.z1d()));
      var tmp = this.x2b();
      // Inline function 'androidx.compose.runtime.snapshots.plus' call
      var tmp$ret$7 = previousId + toLong(1).j3();
      this.y2b(addRange(tmp, tmp$ret$7, this.z1d()));
    }
    return Unit_instance;
  };
  protoOf(MutableSnapshot).x2c = function (id) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.platform.synchronized' call
    get_lock();
    this.g1t_1 = this.g1t_1.y2c(id);
  };
  protoOf(MutableSnapshot).f2d = function (id) {
    if (id >= 0) {
      var tmp = this;
      // Inline function 'kotlin.collections.plus' call
      var tmp0 = this.h1t_1;
      // Inline function 'kotlin.intArrayOf' call
      // Inline function 'kotlin.collections.plus' call
      var elements = new Int32Array([id]);
      tmp.h1t_1 = primitiveArrayConcat([tmp0, elements]);
    }
  };
  protoOf(MutableSnapshot).g2d = function (handles) {
    // Inline function 'kotlin.collections.isEmpty' call
    if (handles.length === 0)
      return Unit_instance;
    var pinned = this.h1t_1;
    var tmp = this;
    var tmp_0;
    // Inline function 'kotlin.collections.isEmpty' call
    if (pinned.length === 0) {
      tmp_0 = handles;
    } else {
      // Inline function 'kotlin.collections.plus' call
      tmp_0 = primitiveArrayConcat([pinned, handles]);
    }
    tmp.h1t_1 = tmp_0;
  };
  protoOf(MutableSnapshot).h2d = function (snapshots) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.platform.synchronized' call
    get_lock();
    this.g1t_1 = this.g1t_1.e2d(snapshots);
  };
  protoOf(MutableSnapshot).g2c = function (state) {
    var tmp0_elvis_lhs = this.r2c();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = mutableScatterSetOf_0();
      this.s2c(this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp.e(state);
  };
  protoOf(MutableSnapshot).a2c = function (_set____db54di) {
    this.d1t_1 = _set____db54di;
  };
  protoOf(MutableSnapshot).b2c = function () {
    return this.d1t_1;
  };
  protoOf(MutableSnapshot).s2c = function (_set____db54di) {
    this.e1t_1 = _set____db54di;
  };
  protoOf(MutableSnapshot).r2c = function () {
    return this.e1t_1;
  };
  function Success() {
    Success_instance = this;
    SnapshotApplyResult.call(this);
  }
  var Success_instance;
  function Success_getInstance() {
    if (Success_instance == null)
      new Success();
    return Success_instance;
  }
  function Failure(snapshot) {
    SnapshotApplyResult.call(this);
    this.i2d_1 = snapshot;
  }
  function SnapshotApplyResult() {
  }
  function GlobalSnapshot$_init_$lambda_36kgl8(state) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.platform.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var this_0 = get_globalWriteObservers();
    var inductionVariable = 0;
    var last = this_0.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.p(index);
        item(state);
      }
       while (inductionVariable <= last);
    return Unit_instance;
  }
  function GlobalSnapshot$takeNestedMutableSnapshot$lambda($actualReadObserver, $actualWriteObserver) {
    return function (invalid) {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.platform.synchronized' call
      get_lock();
      // Inline function 'kotlin.also' call
      var this_0 = get_nextSnapshotId();
      // Inline function 'androidx.compose.runtime.snapshots.plus' call
      var tmp$ret$0 = get_nextSnapshotId() + toLong(1).j3();
      set_nextSnapshotId(tmp$ret$0);
      return new MutableSnapshot(this_0, invalid, $actualReadObserver, $actualWriteObserver);
    };
  }
  function GlobalSnapshot(snapshotId, invalid) {
    MutableSnapshot.call(this, snapshotId, invalid, null, GlobalSnapshot$_init_$lambda_36kgl8);
  }
  protoOf(GlobalSnapshot).t2b = function (readObserver, writeObserver) {
    // Inline function 'androidx.compose.runtime.snapshots.tooling.creatingSnapshot' call
    var observerMap = null;
    var observers = access$_get_observers_$tSnapshotObserverKt_23v7jt();
    var actualReadObserver = readObserver;
    var actualWriteObserver = writeObserver;
    if (!(observers == null)) {
      var result = mergeObservers(observers, null, false, readObserver, writeObserver);
      var mappedObservers = result.ye_1;
      actualReadObserver = mappedObservers.v2c_1;
      actualWriteObserver = mappedObservers.w2c_1;
      observerMap = result.ze_1;
    }
    var tmp0 = actualReadObserver;
    var actualWriteObserver_0 = actualWriteObserver;
    var result_0 = takeNewSnapshot(GlobalSnapshot$takeNestedMutableSnapshot$lambda(tmp0, actualWriteObserver_0));
    if (observers == null)
      null;
    else {
      dispatchCreatedObservers(observers, null, result_0, observerMap);
    }
    return result_0;
  };
  protoOf(GlobalSnapshot).v2b = function () {
    advanceGlobalSnapshot_0();
  };
  protoOf(GlobalSnapshot).w2d = function (snapshot) {
    unsupported();
  };
  protoOf(GlobalSnapshot).a2d = function (snapshot) {
    return this.w2d(snapshot);
  };
  protoOf(GlobalSnapshot).x2d = function (snapshot) {
    unsupported();
  };
  protoOf(GlobalSnapshot).b2d = function (snapshot) {
    return this.x2d(snapshot);
  };
  protoOf(GlobalSnapshot).k1t = function () {
    var message = 'Cannot apply the global snapshot directly. Call Snapshot.advanceGlobalSnapshot';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(GlobalSnapshot).pm = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.platform.synchronized' call
    get_lock();
    this.d2c();
  };
  function StateRecord(snapshotId) {
    this.c1y_1 = snapshotId;
    this.d1y_1 = null;
  }
  protoOf(StateRecord).y1x = function (snapshotId) {
    // Inline function 'kotlin.also' call
    var this_0 = this.x1x();
    this_0.c1y_1 = snapshotId;
    return this_0;
  };
  function trackPinning(snapshotId, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    var pinned = invalid.y2d(snapshotId);
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.platform.synchronized' call
    get_lock();
    return get_pinningTable().iv(pinned);
  }
  function releasePinningLocked(handle) {
    _init_properties_Snapshot_kt__l6n1ng();
    get_pinningTable().e2e(handle);
  }
  function currentSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp0_elvis_lhs = get_threadSnapshot().bo();
    return tmp0_elvis_lhs == null ? get_globalSnapshot() : tmp0_elvis_lhs;
  }
  function mergedReadObserver(readObserver, parentObserver, mergeReadObserver) {
    mergeReadObserver = mergeReadObserver === VOID ? true : mergeReadObserver;
    _init_properties_Snapshot_kt__l6n1ng();
    var parentObserver_0 = mergeReadObserver ? parentObserver : null;
    var tmp;
    if (!(readObserver == null) && !(parentObserver_0 == null) && !(readObserver === parentObserver_0)) {
      tmp = mergedReadObserver$lambda(readObserver, parentObserver_0);
    } else {
      tmp = readObserver == null ? parentObserver_0 : readObserver;
    }
    return tmp;
  }
  function mergedWriteObserver(writeObserver, parentObserver) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp;
    if (!(writeObserver == null) && !(parentObserver == null) && !(writeObserver === parentObserver)) {
      tmp = mergedWriteObserver$lambda(writeObserver, parentObserver);
    } else {
      tmp = writeObserver == null ? parentObserver : writeObserver;
    }
    return tmp;
  }
  function advanceGlobalSnapshot(block) {
    _init_properties_Snapshot_kt__l6n1ng();
    var globalSnapshot = get_globalSnapshot();
    var modified;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.platform.synchronized' call
    get_lock();
    modified = globalSnapshot.r2c();
    if (!(modified == null)) {
      get_pendingApplyObserverCount().kw(1);
    }
    var result = resetGlobalSnapshotLocked(globalSnapshot, block);
    if (modified == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      try {
        var observers = get_applyObservers();
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        var inductionVariable = 0;
        var last = observers.j() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = observers.p(index);
            item(wrapIntoSet(modified), globalSnapshot);
          }
           while (inductionVariable <= last);
      }finally {
        get_pendingApplyObserverCount().kw(-1);
      }
    }
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.platform.synchronized' call
    get_lock();
    checkAndOverwriteUnusedRecordsLocked();
    var tmp;
    if (modified == null) {
      tmp = null;
    } else {
      // Inline function 'androidx.collection.ScatterSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var elements = modified.pz_1;
      $l$block: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = modified.oz_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 <= lastIndex)
          do {
            var i = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_0 = slot;
            if (!this_0.f3(this_0.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_1 = 0;
              if (inductionVariable_1 < bitCount)
                do {
                  var j = inductionVariable_1;
                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                    var index_0 = (i << 3) + j | 0;
                    var tmp_0 = elements[index_0];
                    var it = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                    processForUnusedRecordsLocked(it);
                  }
                  slot = slot.d3(8);
                }
                 while (inductionVariable_1 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
      tmp = Unit_instance;
    }
    return result;
  }
  function advanceGlobalSnapshot_0() {
    _init_properties_Snapshot_kt__l6n1ng();
    return advanceGlobalSnapshot(get_emptyLambda());
  }
  function deactivate($this) {
    if (!$this.t2e_1) {
      $this.t2e_1 = true;
      $this.s2e_1.a2d($this);
    }
  }
  function NestedMutableSnapshot(snapshotId, invalid, readObserver, writeObserver, parent) {
    MutableSnapshot.call(this, snapshotId, invalid, readObserver, writeObserver);
    this.s2e_1 = parent;
    this.t2e_1 = false;
    this.s2e_1.b2d(this);
  }
  protoOf(NestedMutableSnapshot).pm = function () {
    if (!this.x1d_1) {
      protoOf(MutableSnapshot).pm.call(this);
      deactivate(this);
    }
  };
  protoOf(NestedMutableSnapshot).k1t = function () {
    if (this.s2e_1.j1t_1 || this.s2e_1.x1d_1)
      return new Failure(this);
    var modified = this.r2c();
    var id = this.z1d();
    var optimisticMerges_0 = !(modified == null) ? optimisticMerges(this.s2e_1.z1d(), this, this.s2e_1.x2b()) : null;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.platform.synchronized' call
    get_lock();
    validateOpen(this);
    if (modified == null || modified.j() === 0) {
      this.h2c();
    } else {
      var result = this.z2c(this.s2e_1.z1d(), modified, optimisticMerges_0, this.s2e_1.x2b());
      if (!equals(result, Success_getInstance()))
        return result;
      var tmp0_safe_receiver = this.s2e_1.r2c();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.apply' call
        tmp0_safe_receiver.a10(modified);
        tmp = tmp0_safe_receiver;
      }
      if (tmp == null) {
        // Inline function 'kotlin.also' call
        this.s2e_1.s2c(modified);
        this.s2c(null);
      }
    }
    // Inline function 'androidx.compose.runtime.snapshots.compareTo' call
    var this_0 = this.s2e_1.z1d();
    if (compareTo(this_0, id) < 0) {
      this.s2e_1.c2d();
    }
    this.s2e_1.y2b(this.s2e_1.x2b().o2c(id).d2d(this.g1t_1));
    this.s2e_1.x2c(id);
    this.s2e_1.f2d(this.q2c());
    this.s2e_1.h2d(this.g1t_1);
    this.s2e_1.g2d(this.h1t_1);
    this.j1t_1 = true;
    deactivate(this);
    dispatchObserverOnApplied(this, modified);
    return Success_getInstance();
  };
  function addRange(_this__u8e3s4, from, until) {
    _init_properties_Snapshot_kt__l6n1ng();
    var result = _this__u8e3s4;
    var invalidId = from;
    $l$loop: while (true) {
      // Inline function 'androidx.compose.runtime.snapshots.compareTo' call
      var this_0 = invalidId;
      if (!(compareTo(this_0, until) < 0)) {
        break $l$loop;
      }
      result = result.y2c(invalidId);
      // Inline function 'androidx.compose.runtime.snapshots.plus' call
      invalidId = invalidId + toLong(1).j3();
    }
    return result;
  }
  function optimisticMerges(currentSnapshotId, applyingSnapshot, invalidSnapshots) {
    _init_properties_Snapshot_kt__l6n1ng();
    var modified = applyingSnapshot.r2c();
    if (modified == null)
      return null;
    var start = applyingSnapshot.x2b().y2c(applyingSnapshot.z1d()).e2d(applyingSnapshot.g1t_1);
    var result = null;
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var elements = modified.pz_1;
    $l$block_1: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = modified.oz_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.f3(this_0.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  var tmp = elements[index];
                  var tmp0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  $l$block_0: {
                    var first = tmp0.e1y();
                    var tmp0_elvis_lhs = readable(first, currentSnapshotId, invalidSnapshots);
                    var tmp_0;
                    if (tmp0_elvis_lhs == null) {
                      break $l$block_0;
                    } else {
                      tmp_0 = tmp0_elvis_lhs;
                    }
                    var current = tmp_0;
                    var tmp1_elvis_lhs = readable(first, currentSnapshotId, start);
                    var tmp_1;
                    if (tmp1_elvis_lhs == null) {
                      break $l$block_0;
                    } else {
                      tmp_1 = tmp1_elvis_lhs;
                    }
                    var previous = tmp_1;
                    if (!equals(current, previous)) {
                      var tmp2_elvis_lhs = readable(first, applyingSnapshot.z1d(), applyingSnapshot.x2b());
                      var tmp_2;
                      if (tmp2_elvis_lhs == null) {
                        readError();
                      } else {
                        tmp_2 = tmp2_elvis_lhs;
                      }
                      var applied = tmp_2;
                      var merged = tmp0.g1y(previous, current, applied);
                      if (!(merged == null)) {
                        var tmp3_elvis_lhs = result;
                        var tmp_3;
                        if (tmp3_elvis_lhs == null) {
                          // Inline function 'kotlin.collections.hashMapOf' call
                          // Inline function 'kotlin.also' call
                          var this_1 = HashMap_init_$Create$_0();
                          result = this_1;
                          tmp_3 = this_1;
                        } else {
                          tmp_3 = tmp3_elvis_lhs;
                        }
                        // Inline function 'kotlin.collections.set' call
                        tmp_3.l2(current, merged);
                      } else {
                        return null;
                      }
                    }
                  }
                }
                slot = slot.d3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block_1;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return result;
  }
  function validateOpen(snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    var openSnapshots = get_openSnapshots();
    if (!openSnapshots.v2e(snapshot.z1d())) {
      var tmp = snapshot.z1d();
      var tmp_0 = snapshot.x1d_1;
      var tmp0_safe_receiver = snapshot instanceof MutableSnapshot ? snapshot : null;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j1t_1;
      var tmp_1 = toString(tmp1_elvis_lhs == null ? 'read-only' : tmp1_elvis_lhs);
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.platform.synchronized' call
      get_lock();
      // Inline function 'kotlin.error' call
      var message = 'Snapshot is not open: snapshotId=' + tmp + ', disposed=' + tmp_0 + ', applied=' + tmp_1 + ', lowestPin=' + get_pinningTable().u2e(-1.0);
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function resetGlobalSnapshotLocked(globalSnapshot, block) {
    _init_properties_Snapshot_kt__l6n1ng();
    var snapshotId = globalSnapshot.z1d();
    var result = block(get_openSnapshots().o2c(snapshotId));
    var nextGlobalSnapshotId = get_nextSnapshotId();
    // Inline function 'androidx.compose.runtime.snapshots.plus' call
    var tmp$ret$0 = get_nextSnapshotId() + toLong(1).j3();
    set_nextSnapshotId(tmp$ret$0);
    set_openSnapshots(get_openSnapshots().o2c(snapshotId));
    globalSnapshot.z2b(nextGlobalSnapshotId);
    globalSnapshot.y2b(get_openSnapshots());
    globalSnapshot.a2c(0);
    globalSnapshot.s2c(null);
    globalSnapshot.d2c();
    set_openSnapshots(get_openSnapshots().y2c(nextGlobalSnapshotId));
    return result;
  }
  function checkAndOverwriteUnusedRecordsLocked() {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotWeakSet.removeIf' call
    var this_0 = get_extraStateObjects();
    var size = this_0.w2e_1;
    var currentUsed = 0;
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var entry = this_0.y2e_1[i];
        var value = entry == null ? null : entry.bo();
        var tmp;
        if (!(value == null)) {
          tmp = !!overwriteUnusedRecordsLocked(value);
        } else {
          tmp = false;
        }
        if (tmp) {
          if (!(currentUsed === i)) {
            this_0.y2e_1[currentUsed] = entry;
            this_0.x2e_1[currentUsed] = this_0.x2e_1[i];
          }
          currentUsed = currentUsed + 1 | 0;
        }
      }
       while (inductionVariable < size);
    var inductionVariable_0 = currentUsed;
    if (inductionVariable_0 < size)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        this_0.y2e_1[i_0] = null;
        this_0.x2e_1[i_0] = 0;
      }
       while (inductionVariable_0 < size);
    if (!(currentUsed === size)) {
      this_0.w2e_1 = currentUsed;
    }
  }
  function processForUnusedRecordsLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (overwriteUnusedRecordsLocked(state)) {
      get_extraStateObjects().a2f(state);
    }
  }
  function readable(r, id, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = r;
    var candidate = null;
    while (!(current == null)) {
      if (valid(current, id, invalid)) {
        var tmp;
        if (candidate == null) {
          tmp = current;
        } else {
          var tmp0 = candidate.c1y_1;
          // Inline function 'androidx.compose.runtime.snapshots.compareTo' call
          var other = current.c1y_1;
          if (compareTo(tmp0, other) < 0) {
            tmp = current;
          } else {
            tmp = candidate;
          }
        }
        candidate = tmp;
      }
      current = current.d1y_1;
    }
    if (!(candidate == null)) {
      return candidate instanceof StateRecord ? candidate : THROW_CCE();
    }
    return null;
  }
  function readError() {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'kotlin.error' call
    var message = 'Reading a state that was created after the snapshot was taken or in a snapshot that has not yet been applied';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function takeNewSnapshot(block) {
    _init_properties_Snapshot_kt__l6n1ng();
    return advanceGlobalSnapshot(takeNewSnapshot$lambda(block));
  }
  function overwriteUnusedRecordsLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = state.e1y();
    var overwriteRecord = null;
    var validRecord = null;
    var reuseLimit = get_pinningTable().u2e(get_nextSnapshotId());
    var retainedRecords = 0;
    while (!(current == null)) {
      var currentId = current.c1y_1;
      if (!equals(currentId, get_INVALID_SNAPSHOT())) {
        // Inline function 'androidx.compose.runtime.snapshots.compareTo' call
        if (compareTo(currentId, reuseLimit) < 0) {
          if (validRecord == null) {
            validRecord = current;
            retainedRecords = retainedRecords + 1 | 0;
          } else {
            var tmp;
            var tmp0 = current.c1y_1;
            // Inline function 'androidx.compose.runtime.snapshots.compareTo' call
            var other = validRecord.c1y_1;
            if (compareTo(tmp0, other) < 0) {
              tmp = current;
            } else {
              var result = validRecord;
              validRecord = current;
              tmp = result;
            }
            var recordToOverwrite = tmp;
            if (overwriteRecord == null) {
              var tmp0_0 = state.e1y();
              var tmp$ret$4;
              $l$block: {
                // Inline function 'androidx.compose.runtime.snapshots.findYoungestOr' call
                var current_0 = tmp0_0;
                var youngest = tmp0_0;
                while (!(current_0 == null)) {
                  // Inline function 'androidx.compose.runtime.snapshots.compareTo' call
                  var this_0 = current_0.c1y_1;
                  if (compareTo(this_0, reuseLimit) >= 0) {
                    tmp$ret$4 = current_0;
                    break $l$block;
                  }
                  var tmp0_1 = youngest.c1y_1;
                  // Inline function 'androidx.compose.runtime.snapshots.compareTo' call
                  var other_0 = current_0.c1y_1;
                  if (compareTo(tmp0_1, other_0) < 0)
                    youngest = current_0;
                  current_0 = current_0.d1y_1;
                }
                tmp$ret$4 = youngest;
              }
              overwriteRecord = tmp$ret$4;
            }
            recordToOverwrite.c1y_1 = get_INVALID_SNAPSHOT();
            recordToOverwrite.w1x(overwriteRecord);
          }
        } else {
          retainedRecords = retainedRecords + 1 | 0;
        }
      }
      current = current.d1y_1;
    }
    return retainedRecords > 1;
  }
  function valid(data, snapshot, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    return valid_0(snapshot, data.c1y_1, invalid);
  }
  function valid_0(currentSnapshot, candidateSnapshot, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp;
    var tmp_0;
    if (!equals(candidateSnapshot, get_INVALID_SNAPSHOT())) {
      // Inline function 'androidx.compose.runtime.snapshots.compareTo' call
      tmp_0 = compareTo(candidateSnapshot, currentSnapshot) <= 0;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !invalid.v2e(candidateSnapshot);
    } else {
      tmp = false;
    }
    return tmp;
  }
  function readable_0(_this__u8e3s4, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var snapshot = Companion_instance_11.p12();
    var tmp0_safe_receiver = snapshot.e2c();
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(state);
    var tmp1_elvis_lhs = readable(_this__u8e3s4, snapshot.z1d(), snapshot.x2b());
    var tmp;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.platform.synchronized' call
      get_lock();
      var syncSnapshot = Companion_instance_11.p12();
      var tmp_0 = state.e1y();
      var tmp0_elvis_lhs = readable(tmp_0 instanceof StateRecord ? tmp_0 : THROW_CCE(), syncSnapshot.z1d(), syncSnapshot.x2b());
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        readError();
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      tmp = tmp_1;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function current(r) {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'kotlin.let' call
    var snapshot = Companion_instance_11.p12();
    var tmp0_elvis_lhs = readable(r, snapshot.z1d(), snapshot.x2b());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.platform.synchronized' call
      get_lock();
      // Inline function 'kotlin.let' call
      var syncSnapshot = Companion_instance_11.p12();
      tmp = readable(r, syncSnapshot.z1d(), syncSnapshot.x2b());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      readError();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  }
  function overwritableRecord(_this__u8e3s4, state, snapshot, candidate) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (snapshot.c2c()) {
      snapshot.g2c(state);
    }
    var id = snapshot.z1d();
    if (equals(candidate.c1y_1, id))
      return candidate;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.platform.synchronized' call
    get_lock();
    var newData = newOverwritableRecordLocked(_this__u8e3s4, state);
    newData.c1y_1 = id;
    if (!equals(candidate.c1y_1, toSnapshotId(1))) {
      snapshot.g2c(state);
    }
    return newData;
  }
  function notifyWrite(snapshot, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    snapshot.a2c(snapshot.b2c() + 1 | 0);
    var tmp0_safe_receiver = snapshot.f2c();
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(state);
  }
  function newOverwritableRecordLocked(_this__u8e3s4, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp = usedLocked(state);
    var tmp0_safe_receiver = (tmp == null ? true : tmp instanceof StateRecord) ? tmp : THROW_CCE();
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.apply' call
      tmp0_safe_receiver.c1y_1 = 1.7976931348623157E308;
      tmp_0 = tmp0_safe_receiver;
    }
    var tmp1_elvis_lhs = tmp_0;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.apply' call
      var this_0 = _this__u8e3s4.y1x(1.7976931348623157E308);
      this_0.d1y_1 = state.e1y();
      state.f1y(this_0 instanceof StateRecord ? this_0 : THROW_CCE());
      var tmp_2 = this_0;
      tmp_1 = tmp_2 instanceof StateRecord ? tmp_2 : THROW_CCE();
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function usedLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = state.e1y();
    var validRecord = null;
    // Inline function 'androidx.compose.runtime.snapshots.minus' call
    var reuseLimit = get_pinningTable().u2e(get_nextSnapshotId()) - toLong(1).j3();
    var invalid = Companion_getInstance_12().u2c_1;
    while (!(current == null)) {
      var currentId = current.c1y_1;
      if (equals(currentId, get_INVALID_SNAPSHOT())) {
        return current;
      }
      if (valid(current, reuseLimit, invalid)) {
        if (validRecord == null) {
          validRecord = current;
        } else {
          var tmp;
          var tmp0 = current.c1y_1;
          // Inline function 'androidx.compose.runtime.snapshots.compareTo' call
          var other = validRecord.c1y_1;
          if (compareTo(tmp0, other) < 0) {
            tmp = current;
          } else {
            tmp = validRecord;
          }
          return tmp;
        }
      }
      current = current.d1y_1;
    }
    return null;
  }
  function writableRecord(_this__u8e3s4, state, snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (snapshot.c2c()) {
      snapshot.g2c(state);
    }
    var id = snapshot.z1d();
    var tmp0_elvis_lhs = readable(_this__u8e3s4, id, snapshot.x2b());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      readError();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var readData = tmp;
    if (equals(readData.c1y_1, snapshot.z1d()))
      return readData;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.platform.synchronized' call
    get_lock();
    var tmp0_elvis_lhs_0 = readable(state.e1y(), id, snapshot.x2b());
    var tmp_0;
    if (tmp0_elvis_lhs_0 == null) {
      readError();
    } else {
      tmp_0 = tmp0_elvis_lhs_0;
    }
    var newReadData = tmp_0;
    var tmp_1 = equals(newReadData.c1y_1, id) ? newReadData : newWritableRecordLocked(newReadData, state, snapshot);
    var newData = tmp_1 instanceof StateRecord ? tmp_1 : THROW_CCE();
    if (!equals(readData.c1y_1, toSnapshotId(1))) {
      snapshot.g2c(state);
    }
    return newData;
  }
  function newWritableRecordLocked(_this__u8e3s4, state, snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    var newData = newOverwritableRecordLocked(_this__u8e3s4, state);
    newData.w1x(_this__u8e3s4);
    newData.c1y_1 = snapshot.z1d();
    return newData;
  }
  function access$_get_openSnapshots_$tSnapshotKt_7cpqp5() {
    return get_openSnapshots();
  }
  function access$_set_openSnapshots_$tSnapshotKt_9lk9nh(_set____db54di) {
    return set_openSnapshots(_set____db54di);
  }
  function access$_get_nextSnapshotId_$tSnapshotKt_vxgvey() {
    return get_nextSnapshotId();
  }
  function access$_set_nextSnapshotId_$tSnapshotKt_xcaltq(_set____db54di) {
    return set_nextSnapshotId(_set____db54di);
  }
  function emptyLambda$lambda(it) {
    _init_properties_Snapshot_kt__l6n1ng();
    return Unit_instance;
  }
  function mergedReadObserver$lambda($readObserver, $parentObserver) {
    return function (state) {
      $readObserver(state);
      $parentObserver(state);
      return Unit_instance;
    };
  }
  function mergedWriteObserver$lambda($writeObserver, $parentObserver) {
    return function (state) {
      $writeObserver(state);
      $parentObserver(state);
      return Unit_instance;
    };
  }
  function takeNewSnapshot$lambda($block) {
    return function (invalid) {
      var result = $block(invalid);
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.platform.synchronized' call
      get_lock();
      set_openSnapshots(get_openSnapshots().y2c(result.z1d()));
      return result;
    };
  }
  var properties_initialized_Snapshot_kt_2vlcoq;
  function _init_properties_Snapshot_kt__l6n1ng() {
    if (!properties_initialized_Snapshot_kt_2vlcoq) {
      properties_initialized_Snapshot_kt_2vlcoq = true;
      emptyLambda = emptyLambda$lambda;
      INVALID_SNAPSHOT = 0.0;
      threadSnapshot = new SnapshotThreadLocal();
      // Inline function 'androidx.compose.runtime.platform.makeSynchronizedObject' call
      lock = null == null ? new Object() : null;
      openSnapshots = Companion_getInstance_12().u2c_1;
      // Inline function 'androidx.compose.runtime.snapshots.plus' call
      nextSnapshotId = toSnapshotId(1) + toLong(1).j3();
      pinningTable = new SnapshotDoubleIndexHeap();
      extraStateObjects = new SnapshotWeakSet();
      applyObservers = emptyList();
      globalWriteObservers = emptyList();
      // Inline function 'kotlin.also' call
      var this_0 = get_nextSnapshotId();
      // Inline function 'androidx.compose.runtime.snapshots.plus' call
      var tmp$ret$0 = get_nextSnapshotId() + toLong(1).j3();
      set_nextSnapshotId(tmp$ret$0);
      // Inline function 'kotlin.also' call
      var this_1 = new GlobalSnapshot(this_0, Companion_getInstance_12().u2c_1);
      set_openSnapshots(get_openSnapshots().y2c(this_1.z1d()));
      globalSnapshot = this_1;
      snapshotInitializer = get_globalSnapshot();
      pendingApplyObserverCount = new AtomicInt(0);
      androidx_compose_runtime_snapshots_Snapshot$stable = 8;
      androidx_compose_runtime_snapshots_MutableSnapshot$stable = 8;
      androidx_compose_runtime_snapshots_SnapshotApplyResult_Success$stable = 0;
      androidx_compose_runtime_snapshots_SnapshotApplyResult_Failure$stable = 8;
      androidx_compose_runtime_snapshots_SnapshotApplyResult$stable = 0;
      androidx_compose_runtime_snapshots_SnapshotApplyConflictException$stable = 8;
      androidx_compose_runtime_snapshots_StateRecord$stable = 8;
      androidx_compose_runtime_snapshots_ReadonlySnapshot$stable = 8;
      androidx_compose_runtime_snapshots_NestedReadonlySnapshot$stable = 8;
      androidx_compose_runtime_snapshots_GlobalSnapshot$stable = 0;
      androidx_compose_runtime_snapshots_NestedMutableSnapshot$stable = 8;
      androidx_compose_runtime_snapshots_TransparentObserverMutableSnapshot$stable = 8;
      androidx_compose_runtime_snapshots_TransparentObserverSnapshot$stable = 8;
    }
  }
  var androidx_compose_runtime_snapshots_SnapshotDoubleIndexHeap$stable;
  function shiftUp($this, index) {
    var values = $this.a2e_1;
    // Inline function 'androidx.compose.runtime.snapshots.get' call
    var value = values[index];
    var current = index;
    $l$loop: while (current > 0) {
      var parent = ((current + 1 | 0) >> 1) - 1 | 0;
      // Inline function 'androidx.compose.runtime.snapshots.get' call
      // Inline function 'androidx.compose.runtime.snapshots.compareTo' call
      var this_0 = values[parent];
      if (compareTo(this_0, value) > 0) {
        swap_1($this, parent, current);
        current = parent;
        continue $l$loop;
      }
      break $l$loop;
    }
  }
  function shiftDown($this, index) {
    var values = $this.a2e_1;
    var half = $this.z2d_1 >> 1;
    var current = index;
    while (current < half) {
      var right = (current + 1 | 0) << 1;
      var left = right - 1 | 0;
      var tmp;
      if (right < $this.z2d_1) {
        // Inline function 'androidx.compose.runtime.snapshots.get' call
        var tmp0 = values[right];
        // Inline function 'androidx.compose.runtime.snapshots.get' call
        // Inline function 'androidx.compose.runtime.snapshots.compareTo' call
        var other = values[left];
        tmp = compareTo(tmp0, other) < 0;
      } else {
        tmp = false;
      }
      if (tmp) {
        // Inline function 'androidx.compose.runtime.snapshots.get' call
        var tmp0_0 = values[right];
        // Inline function 'androidx.compose.runtime.snapshots.get' call
        // Inline function 'androidx.compose.runtime.snapshots.compareTo' call
        var other_0 = values[current];
        if (compareTo(tmp0_0, other_0) < 0) {
          swap_1($this, right, current);
          current = right;
        } else {
          return Unit_instance;
        }
      } else {
        // Inline function 'androidx.compose.runtime.snapshots.get' call
        var tmp0_1 = values[left];
        // Inline function 'androidx.compose.runtime.snapshots.get' call
        // Inline function 'androidx.compose.runtime.snapshots.compareTo' call
        var other_1 = values[current];
        if (compareTo(tmp0_1, other_1) < 0) {
          swap_1($this, left, current);
          current = left;
        } else {
          return Unit_instance;
        }
      }
    }
  }
  function swap_1($this, a, b) {
    var values = $this.a2e_1;
    var index = $this.b2e_1;
    var handles = $this.c2e_1;
    // Inline function 'androidx.compose.runtime.snapshots.get' call
    var t = values[a];
    // Inline function 'androidx.compose.runtime.snapshots.get' call
    // Inline function 'androidx.compose.runtime.snapshots.set' call
    values[a] = values[b];
    // Inline function 'androidx.compose.runtime.snapshots.set' call
    values[b] = t;
    var ia = index[a];
    var ib = index[b];
    index[a] = ib;
    index[b] = ia;
    handles[ib] = a;
    handles[ia] = b;
  }
  function ensure($this, atLeast) {
    // Inline function 'androidx.compose.runtime.snapshots.size' call
    var capacity = $this.a2e_1.length;
    if (atLeast <= capacity)
      return Unit_instance;
    var newCapacity = imul(capacity, 2);
    var newValues = snapshotIdArrayWithCapacity(newCapacity);
    var newIndex = new Int32Array(newCapacity);
    // Inline function 'androidx.compose.runtime.snapshots.copyInto' call
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = $this.a2e_1;
    var endIndex = this_0.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, newValues, 0, 0, endIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var this_1 = $this.b2e_1;
    var endIndex_0 = this_1.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = this_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_0, newIndex, 0, 0, endIndex_0);
    $this.a2e_1 = newValues;
    $this.b2e_1 = newIndex;
  }
  function allocateHandle($this) {
    var capacity = $this.c2e_1.length;
    if ($this.d2e_1 >= capacity) {
      var tmp = 0;
      var tmp_0 = imul(capacity, 2);
      var tmp_1 = new Int32Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        tmp_1[tmp_2] = tmp_2 + 1 | 0;
        tmp = tmp + 1 | 0;
      }
      var newHandles = tmp_1;
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = $this.c2e_1;
      var endIndex = this_0.length;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_3 = this_0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_3, newHandles, 0, 0, endIndex);
      $this.c2e_1 = newHandles;
    }
    var handle = $this.d2e_1;
    $this.d2e_1 = $this.c2e_1[$this.d2e_1];
    return handle;
  }
  function freeHandle($this, handle) {
    $this.c2e_1[handle] = $this.d2e_1;
    $this.d2e_1 = handle;
  }
  function SnapshotDoubleIndexHeap() {
    this.z2d_1 = 0;
    this.a2e_1 = snapshotIdArrayWithCapacity(16);
    this.b2e_1 = new Int32Array(16);
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = new Int32Array(16);
    while (tmp_0 < 16) {
      var tmp_2 = tmp_0;
      tmp_1[tmp_2] = tmp_2 + 1 | 0;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.c2e_1 = tmp_1;
    this.d2e_1 = 0;
  }
  protoOf(SnapshotDoubleIndexHeap).u2e = function (default_0) {
    var tmp;
    if (this.z2d_1 > 0) {
      // Inline function 'androidx.compose.runtime.snapshots.get' call
      tmp = this.a2e_1[0];
    } else {
      tmp = default_0;
    }
    return tmp;
  };
  protoOf(SnapshotDoubleIndexHeap).iv = function (value) {
    ensure(this, this.z2d_1 + 1 | 0);
    var _unary__edvuaz = this.z2d_1;
    this.z2d_1 = _unary__edvuaz + 1 | 0;
    var i = _unary__edvuaz;
    var handle = allocateHandle(this);
    // Inline function 'androidx.compose.runtime.snapshots.set' call
    this.a2e_1[i] = value;
    this.b2e_1[i] = handle;
    this.c2e_1[handle] = i;
    shiftUp(this, i);
    return handle;
  };
  protoOf(SnapshotDoubleIndexHeap).e2e = function (handle) {
    var i = this.c2e_1[handle];
    swap_1(this, i, this.z2d_1 - 1 | 0);
    this.z2d_1 = this.z2d_1 - 1 | 0;
    shiftUp(this, i);
    shiftDown(this, i);
    freeHandle(this, handle);
  };
  var androidx_compose_runtime_snapshots_SnapshotIdSet$stable;
  function Companion_12() {
    Companion_instance_13 = this;
    this.u2c_1 = new SnapshotIdSet(new Long(0, 0), new Long(0, 0), 0.0, null);
  }
  var Companion_instance_13;
  function Companion_getInstance_12() {
    if (Companion_instance_13 == null)
      new Companion_12();
    return Companion_instance_13;
  }
  function access$_get_upperSet__2kurhn($this) {
    return $this.k2c_1;
  }
  function access$_get_lowerSet__9mjss6($this) {
    return $this.l2c_1;
  }
  function access$_get_lowerBound__ou44uq($this) {
    return $this.m2c_1;
  }
  function access$_get_belowBound__uc78e($this) {
    return $this.n2c_1;
  }
  function SnapshotIdSet$iterator$slambda(this$0, resultContinuation) {
    this.j2f_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SnapshotIdSet$iterator$slambda).x2f = function ($this$sequence, $completion) {
    var tmp = this.y2f($this$sequence, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(SnapshotIdSet$iterator$slambda).p9 = function (p1, $completion) {
    return this.x2f(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SnapshotIdSet$iterator$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 15;
            this.l2f_1 = this.j2f_1.n2c_1;
            if (this.l2f_1 == null) {
              this.m2f_1 = null;
              this.v8_1 = 4;
              continue $sm;
            } else {
              var tmp_0 = this;
              tmp_0.n2f_1 = this.l2f_1;
              this.o2f_1 = this.n2f_1;
              this.p2f_1 = doubleArrayIterator(this.o2f_1);
              this.v8_1 = 1;
              continue $sm;
            }

          case 1:
            if (!this.p2f_1.h()) {
              this.v8_1 = 3;
              continue $sm;
            }

            this.q2f_1 = this.p2f_1.i();
            var tmp_1 = this;
            tmp_1.r2f_1 = this.q2f_1;
            this.s2f_1 = this.r2f_1;
            this.v8_1 = 2;
            suspendResult = this.k2f_1.gf(this.s2f_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.v8_1 = 1;
            continue $sm;
          case 3:
            this.m2f_1 = Unit_instance;
            this.v8_1 = 4;
            continue $sm;
          case 4:
            if (!this.j2f_1.l2c_1.equals(new Long(0, 0))) {
              this.t2f_1 = until(0, 64).g();
              this.v8_1 = 5;
              continue $sm;
            } else {
              this.v8_1 = 9;
              continue $sm;
            }

          case 5:
            if (!this.t2f_1.h()) {
              this.v8_1 = 8;
              continue $sm;
            }

            this.u2f_1 = this.t2f_1.i();
            if (!this.j2f_1.l2c_1.f3((new Long(1, 0)).c3(this.u2f_1)).equals(new Long(0, 0))) {
              this.v8_1 = 6;
              var tmp0 = this.j2f_1.m2c_1;
              var other = this.u2f_1;
              suspendResult = this.k2f_1.gf(tmp0 + toLong(other).j3(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.v8_1 = 7;
              continue $sm;
            }

          case 6:
            this.v8_1 = 7;
            continue $sm;
          case 7:
            this.v8_1 = 5;
            continue $sm;
          case 8:
            this.v8_1 = 9;
            continue $sm;
          case 9:
            if (!this.j2f_1.k2c_1.equals(new Long(0, 0))) {
              this.v2f_1 = until(0, 64).g();
              this.v8_1 = 10;
              continue $sm;
            } else {
              this.v8_1 = 14;
              continue $sm;
            }

          case 10:
            if (!this.v2f_1.h()) {
              this.v8_1 = 13;
              continue $sm;
            }

            this.w2f_1 = this.v2f_1.i();
            if (!this.j2f_1.k2c_1.f3((new Long(1, 0)).c3(this.w2f_1)).equals(new Long(0, 0))) {
              this.v8_1 = 11;
              var tmp0_0 = this.j2f_1.m2c_1;
              var other_0 = this.w2f_1;
              var this_0 = tmp0_0 + toLong(other_0).j3();
              suspendResult = this.k2f_1.gf(this_0 + toLong(64).j3(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.v8_1 = 12;
              continue $sm;
            }

          case 11:
            this.v8_1 = 12;
            continue $sm;
          case 12:
            this.v8_1 = 10;
            continue $sm;
          case 13:
            this.v8_1 = 14;
            continue $sm;
          case 14:
            return Unit_instance;
          case 15:
            throw this.y8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.w8_1 === 15) {
          throw e;
        } else {
          this.v8_1 = this.w8_1;
          this.y8_1 = e;
        }
      }
     while (true);
  };
  protoOf(SnapshotIdSet$iterator$slambda).y2f = function ($this$sequence, completion) {
    var i = new SnapshotIdSet$iterator$slambda(this.j2f_1, completion);
    i.k2f_1 = $this$sequence;
    return i;
  };
  function SnapshotIdSet$iterator$slambda_0(this$0, resultContinuation) {
    var i = new SnapshotIdSet$iterator$slambda(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.x2f($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SnapshotIdSet(upperSet, lowerSet, lowerBound, belowBound) {
    Companion_getInstance_12();
    this.k2c_1 = upperSet;
    this.l2c_1 = lowerSet;
    this.m2c_1 = lowerBound;
    this.n2c_1 = belowBound;
  }
  protoOf(SnapshotIdSet).v2e = function (id) {
    // Inline function 'androidx.compose.runtime.snapshots.minus' call
    var offset = id - this.m2c_1;
    var tmp;
    var tmp_0;
    // Inline function 'androidx.compose.runtime.snapshots.compareTo' call
    if (compareTo(offset, toLong(0)) >= 0) {
      // Inline function 'androidx.compose.runtime.snapshots.compareTo' call
      tmp_0 = compareTo(offset, toLong(64)) < 0;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp_1 = new Long(1, 0);
      // Inline function 'androidx.compose.runtime.snapshots.toInt' call
      var tmp$ret$3 = numberToInt(offset);
      tmp = !tmp_1.c3(tmp$ret$3).f3(this.l2c_1).equals(new Long(0, 0));
    } else {
      var tmp_2;
      // Inline function 'androidx.compose.runtime.snapshots.compareTo' call
      if (compareTo(offset, toLong(64)) >= 0) {
        // Inline function 'androidx.compose.runtime.snapshots.compareTo' call
        tmp_2 = compareTo(offset, toLong(128)) < 0;
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        var tmp_3 = new Long(1, 0);
        // Inline function 'androidx.compose.runtime.snapshots.toInt' call
        var tmp$ret$6 = numberToInt(offset);
        tmp = !tmp_3.c3(tmp$ret$6 - 64 | 0).f3(this.k2c_1).equals(new Long(0, 0));
      } else {
        // Inline function 'androidx.compose.runtime.snapshots.compareTo' call
        if (compareTo(offset, toLong(0)) > 0) {
          tmp = false;
        } else {
          var tmp0_safe_receiver = this.n2c_1;
          var tmp_4;
          if (tmp0_safe_receiver == null) {
            tmp_4 = null;
          } else {
            // Inline function 'kotlin.let' call
            tmp_4 = binarySearch(tmp0_safe_receiver, id) >= 0;
          }
          var tmp1_elvis_lhs = tmp_4;
          tmp = tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
        }
      }
    }
    return tmp;
  };
  protoOf(SnapshotIdSet).y2c = function (id) {
    // Inline function 'androidx.compose.runtime.snapshots.minus' call
    var offset = id - this.m2c_1;
    var tmp;
    // Inline function 'androidx.compose.runtime.snapshots.compareTo' call
    if (compareTo(offset, toLong(0)) >= 0) {
      // Inline function 'androidx.compose.runtime.snapshots.compareTo' call
      tmp = compareTo(offset, toLong(64)) < 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      var tmp_0 = new Long(1, 0);
      // Inline function 'androidx.compose.runtime.snapshots.toInt' call
      var tmp$ret$3 = numberToInt(offset);
      var mask = tmp_0.c3(tmp$ret$3);
      if (this.l2c_1.f3(mask).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.k2c_1, this.l2c_1.g3(mask), this.m2c_1, this.n2c_1);
      }
    } else {
      var tmp_1;
      // Inline function 'androidx.compose.runtime.snapshots.compareTo' call
      if (compareTo(offset, toLong(64)) >= 0) {
        // Inline function 'androidx.compose.runtime.snapshots.compareTo' call
        tmp_1 = compareTo(offset, toLong(128)) < 0;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var tmp_2 = new Long(1, 0);
        // Inline function 'androidx.compose.runtime.snapshots.toInt' call
        var tmp$ret$6 = numberToInt(offset);
        var mask_0 = tmp_2.c3(tmp$ret$6 - 64 | 0);
        if (this.k2c_1.f3(mask_0).equals(new Long(0, 0))) {
          return new SnapshotIdSet(this.k2c_1.g3(mask_0), this.l2c_1, this.m2c_1, this.n2c_1);
        }
      } else {
        // Inline function 'androidx.compose.runtime.snapshots.compareTo' call
        if (compareTo(offset, toLong(128)) >= 0) {
          if (!this.v2e(id)) {
            var newUpperSet = this.k2c_1;
            var newLowerSet = this.l2c_1;
            var newLowerBound = this.m2c_1;
            var newBelowBound = null;
            // Inline function 'androidx.compose.runtime.snapshots.plus' call
            // Inline function 'androidx.compose.runtime.snapshots.div' call
            // Inline function 'androidx.compose.runtime.snapshots.times' call
            // Inline function 'kotlin.let' call
            var it = (id + toLong(1).j3()) / toLong(64).j3() * toLong(64).j3();
            var tmp_3;
            // Inline function 'androidx.compose.runtime.snapshots.compareTo' call
            if (compareTo(it, toLong(0)) < 0) {
              // Inline function 'androidx.compose.runtime.snapshots.minus' call
              // Inline function 'androidx.compose.runtime.snapshots.plus' call
              tmp_3 = 1.7976931348623157E308 - toLong(128).j3() + toLong(1).j3();
            } else {
              tmp_3 = it;
            }
            var targetLowerBound = tmp_3;
            $l$loop_0: while (true) {
              // Inline function 'androidx.compose.runtime.snapshots.compareTo' call
              var this_0 = newLowerBound;
              if (!(compareTo(this_0, targetLowerBound) < 0)) {
                break $l$loop_0;
              }
              if (!newLowerSet.equals(new Long(0, 0))) {
                if (newBelowBound == null)
                  newBelowBound = new SnapshotIdArrayBuilder(this.n2c_1);
                // Inline function 'kotlin.repeat' call
                var inductionVariable = 0;
                if (inductionVariable < 64)
                  do {
                    var index = inductionVariable;
                    inductionVariable = inductionVariable + 1 | 0;
                    if (!newLowerSet.f3((new Long(1, 0)).c3(index)).equals(new Long(0, 0))) {
                      var tmp_4 = newBelowBound;
                      // Inline function 'androidx.compose.runtime.snapshots.plus' call
                      var tmp$ret$17 = newLowerBound + toLong(index).j3();
                      tmp_4.a2g(tmp$ret$17);
                    }
                  }
                   while (inductionVariable < 64);
              }
              if (newUpperSet.equals(new Long(0, 0))) {
                newLowerBound = targetLowerBound;
                newLowerSet = new Long(0, 0);
                break $l$loop_0;
              }
              newLowerSet = newUpperSet;
              newUpperSet = new Long(0, 0);
              // Inline function 'androidx.compose.runtime.snapshots.plus' call
              newLowerBound = newLowerBound + toLong(64).j3();
            }
            var tmp_5 = newUpperSet;
            var tmp_6 = newLowerSet;
            var tmp_7 = newLowerBound;
            var tmp0_safe_receiver = newBelowBound;
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j5();
            return (new SnapshotIdSet(tmp_5, tmp_6, tmp_7, tmp1_elvis_lhs == null ? this.n2c_1 : tmp1_elvis_lhs)).y2c(id);
          }
        } else {
          var tmp2_elvis_lhs = this.n2c_1;
          var tmp_8;
          if (tmp2_elvis_lhs == null) {
            // Inline function 'androidx.compose.runtime.snapshots.snapshotIdArrayOf' call
            // Inline function 'kotlin.doubleArrayOf' call
            var tmp$ret$22 = new Float64Array([id]);
            return new SnapshotIdSet(this.k2c_1, this.l2c_1, this.m2c_1, tmp$ret$22);
          } else {
            tmp_8 = tmp2_elvis_lhs;
          }
          var array = tmp_8;
          var location = binarySearch(array, id);
          if (location < 0) {
            var insertLocation = -(location + 1 | 0) | 0;
            var newBelowBound_0 = withIdInsertedAt(array, insertLocation, id);
            return new SnapshotIdSet(this.k2c_1, this.l2c_1, this.m2c_1, newBelowBound_0);
          }
        }
      }
    }
    return this;
  };
  protoOf(SnapshotIdSet).o2c = function (id) {
    // Inline function 'androidx.compose.runtime.snapshots.minus' call
    var offset = id - this.m2c_1;
    var tmp;
    // Inline function 'androidx.compose.runtime.snapshots.compareTo' call
    if (compareTo(offset, toLong(0)) >= 0) {
      // Inline function 'androidx.compose.runtime.snapshots.compareTo' call
      tmp = compareTo(offset, toLong(64)) < 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      var tmp_0 = new Long(1, 0);
      // Inline function 'androidx.compose.runtime.snapshots.toInt' call
      var tmp$ret$3 = numberToInt(offset);
      var mask = tmp_0.c3(tmp$ret$3);
      if (!this.l2c_1.f3(mask).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.k2c_1, this.l2c_1.f3(mask.b3()), this.m2c_1, this.n2c_1);
      }
    } else {
      var tmp_1;
      // Inline function 'androidx.compose.runtime.snapshots.compareTo' call
      if (compareTo(offset, toLong(64)) >= 0) {
        // Inline function 'androidx.compose.runtime.snapshots.compareTo' call
        tmp_1 = compareTo(offset, toLong(128)) < 0;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var tmp_2 = new Long(1, 0);
        // Inline function 'androidx.compose.runtime.snapshots.toInt' call
        var tmp$ret$6 = numberToInt(offset);
        var mask_0 = tmp_2.c3(tmp$ret$6 - 64 | 0);
        if (!this.k2c_1.f3(mask_0).equals(new Long(0, 0))) {
          return new SnapshotIdSet(this.k2c_1.f3(mask_0.b3()), this.l2c_1, this.m2c_1, this.n2c_1);
        }
      } else {
        // Inline function 'androidx.compose.runtime.snapshots.compareTo' call
        if (compareTo(offset, toLong(0)) < 0) {
          var array = this.n2c_1;
          if (!(array == null)) {
            var location = binarySearch(array, id);
            if (location >= 0) {
              return new SnapshotIdSet(this.k2c_1, this.l2c_1, this.m2c_1, withIdRemovedAt(array, location));
            }
          }
        }
      }
    }
    return this;
  };
  protoOf(SnapshotIdSet).d2d = function (ids) {
    if (ids === Companion_getInstance_12().u2c_1)
      return this;
    if (this === Companion_getInstance_12().u2c_1)
      return Companion_getInstance_12().u2c_1;
    var tmp;
    if (equals(ids.m2c_1, this.m2c_1) && ids.n2c_1 === this.n2c_1) {
      tmp = new SnapshotIdSet(this.k2c_1.f3(ids.k2c_1.b3()), this.l2c_1.f3(ids.l2c_1.b3()), this.m2c_1, this.n2c_1);
    } else {
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold' call
      var accumulator = this;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastForEach' call
      var tmp0_safe_receiver = access$_get_belowBound__uc78e(ids);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'androidx.compose.runtime.snapshots.forEach' call
        var inductionVariable = 0;
        var last = tmp0_safe_receiver.length;
        while (inductionVariable < last) {
          var value = tmp0_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          accumulator = accumulator.o2c(value);
        }
      }
      if (!access$_get_lowerSet__9mjss6(ids).equals(new Long(0, 0))) {
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < 64)
          do {
            var index = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            if (!access$_get_lowerSet__9mjss6(ids).f3((new Long(1, 0)).c3(index)).equals(new Long(0, 0))) {
              // Inline function 'androidx.compose.runtime.snapshots.plus' call
              var element = access$_get_lowerBound__ou44uq(ids) + toLong(index).j3();
              accumulator = accumulator.o2c(element);
            }
          }
           while (inductionVariable_0 < 64);
      }
      if (!access$_get_upperSet__2kurhn(ids).equals(new Long(0, 0))) {
        var inductionVariable_1 = 0;
        if (inductionVariable_1 < 64)
          do {
            var index_0 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            if (!access$_get_upperSet__2kurhn(ids).f3((new Long(1, 0)).c3(index_0)).equals(new Long(0, 0))) {
              // Inline function 'androidx.compose.runtime.snapshots.plus' call
              // Inline function 'androidx.compose.runtime.snapshots.plus' call
              var element_0 = access$_get_lowerBound__ou44uq(ids) + toLong(index_0).j3() + toLong(64).j3();
              accumulator = accumulator.o2c(element_0);
            }
          }
           while (inductionVariable_1 < 64);
      }
      tmp = accumulator;
    }
    return tmp;
  };
  protoOf(SnapshotIdSet).e2d = function (bits) {
    if (bits === Companion_getInstance_12().u2c_1)
      return this;
    if (this === Companion_getInstance_12().u2c_1)
      return bits;
    var tmp;
    if (equals(bits.m2c_1, this.m2c_1) && bits.n2c_1 === this.n2c_1) {
      tmp = new SnapshotIdSet(this.k2c_1.g3(bits.k2c_1), this.l2c_1.g3(bits.l2c_1), this.m2c_1, this.n2c_1);
    } else {
      var tmp_0;
      if (this.n2c_1 == null) {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold' call
        var accumulator = bits;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastForEach' call
        var tmp0_safe_receiver = access$_get_belowBound__uc78e(this);
        if (tmp0_safe_receiver == null)
          null;
        else {
          // Inline function 'androidx.compose.runtime.snapshots.forEach' call
          var inductionVariable = 0;
          var last = tmp0_safe_receiver.length;
          while (inductionVariable < last) {
            var value = tmp0_safe_receiver[inductionVariable];
            inductionVariable = inductionVariable + 1 | 0;
            accumulator = accumulator.y2c(value);
          }
        }
        if (!access$_get_lowerSet__9mjss6(this).equals(new Long(0, 0))) {
          var inductionVariable_0 = 0;
          if (inductionVariable_0 < 64)
            do {
              var index = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              if (!access$_get_lowerSet__9mjss6(this).f3((new Long(1, 0)).c3(index)).equals(new Long(0, 0))) {
                // Inline function 'androidx.compose.runtime.snapshots.plus' call
                var element = access$_get_lowerBound__ou44uq(this) + toLong(index).j3();
                accumulator = accumulator.y2c(element);
              }
            }
             while (inductionVariable_0 < 64);
        }
        if (!access$_get_upperSet__2kurhn(this).equals(new Long(0, 0))) {
          var inductionVariable_1 = 0;
          if (inductionVariable_1 < 64)
            do {
              var index_0 = inductionVariable_1;
              inductionVariable_1 = inductionVariable_1 + 1 | 0;
              if (!access$_get_upperSet__2kurhn(this).f3((new Long(1, 0)).c3(index_0)).equals(new Long(0, 0))) {
                // Inline function 'androidx.compose.runtime.snapshots.plus' call
                // Inline function 'androidx.compose.runtime.snapshots.plus' call
                var element_0 = access$_get_lowerBound__ou44uq(this) + toLong(index_0).j3() + toLong(64).j3();
                accumulator = accumulator.y2c(element_0);
              }
            }
             while (inductionVariable_1 < 64);
        }
        tmp_0 = accumulator;
      } else {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold' call
        var accumulator_0 = this;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastForEach' call
        var tmp0_safe_receiver_0 = access$_get_belowBound__uc78e(bits);
        if (tmp0_safe_receiver_0 == null)
          null;
        else {
          // Inline function 'androidx.compose.runtime.snapshots.forEach' call
          var inductionVariable_2 = 0;
          var last_0 = tmp0_safe_receiver_0.length;
          while (inductionVariable_2 < last_0) {
            var value_0 = tmp0_safe_receiver_0[inductionVariable_2];
            inductionVariable_2 = inductionVariable_2 + 1 | 0;
            accumulator_0 = accumulator_0.y2c(value_0);
          }
        }
        if (!access$_get_lowerSet__9mjss6(bits).equals(new Long(0, 0))) {
          var inductionVariable_3 = 0;
          if (inductionVariable_3 < 64)
            do {
              var index_1 = inductionVariable_3;
              inductionVariable_3 = inductionVariable_3 + 1 | 0;
              if (!access$_get_lowerSet__9mjss6(bits).f3((new Long(1, 0)).c3(index_1)).equals(new Long(0, 0))) {
                // Inline function 'androidx.compose.runtime.snapshots.plus' call
                var element_1 = access$_get_lowerBound__ou44uq(bits) + toLong(index_1).j3();
                accumulator_0 = accumulator_0.y2c(element_1);
              }
            }
             while (inductionVariable_3 < 64);
        }
        if (!access$_get_upperSet__2kurhn(bits).equals(new Long(0, 0))) {
          var inductionVariable_4 = 0;
          if (inductionVariable_4 < 64)
            do {
              var index_2 = inductionVariable_4;
              inductionVariable_4 = inductionVariable_4 + 1 | 0;
              if (!access$_get_upperSet__2kurhn(bits).f3((new Long(1, 0)).c3(index_2)).equals(new Long(0, 0))) {
                // Inline function 'androidx.compose.runtime.snapshots.plus' call
                // Inline function 'androidx.compose.runtime.snapshots.plus' call
                var element_2 = access$_get_lowerBound__ou44uq(bits) + toLong(index_2).j3() + toLong(64).j3();
                accumulator_0 = accumulator_0.y2c(element_2);
              }
            }
             while (inductionVariable_4 < 64);
        }
        tmp_0 = accumulator_0;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SnapshotIdSet).g = function () {
    return sequence(SnapshotIdSet$iterator$slambda_0(this, null)).g();
  };
  protoOf(SnapshotIdSet).y2d = function (default_0) {
    var belowBound = this.n2c_1;
    if (!(belowBound == null)) {
      // Inline function 'androidx.compose.runtime.snapshots.first' call
      return belowBound[0];
    }
    if (!this.l2c_1.equals(new Long(0, 0))) {
      var tmp0 = this.m2c_1;
      // Inline function 'androidx.compose.runtime.snapshots.plus' call
      var other = countTrailingZeroBits(this.l2c_1);
      return tmp0 + toLong(other).j3();
    }
    if (!this.k2c_1.equals(new Long(0, 0))) {
      // Inline function 'androidx.compose.runtime.snapshots.plus' call
      var tmp0_0 = this.m2c_1 + toLong(64).j3();
      // Inline function 'androidx.compose.runtime.snapshots.plus' call
      var other_0 = countTrailingZeroBits(this.k2c_1);
      return tmp0_0 + toLong(other_0).j3();
    }
    return default_0;
  };
  protoOf(SnapshotIdSet).toString = function () {
    var tmp = anyToString(this);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this, 10));
    var _iterator__ex2g4s = this.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      var tmp$ret$0 = item.toString();
      destination.e(tmp$ret$0);
    }
    return tmp + ' [' + fastJoinToString(destination) + ']';
  };
  function get_sync() {
    _init_properties_SnapshotStateList_kt__mu1ud5();
    return sync;
  }
  var sync;
  var androidx_compose_runtime_snapshots_SnapshotStateList_StateListStateRecord$stable;
  var androidx_compose_runtime_snapshots_SnapshotStateList$stable;
  function SnapshotStateList_init_$Init$($this) {
    SnapshotStateList.call($this, persistentListOf());
    return $this;
  }
  function SnapshotStateList_init_$Create$() {
    return SnapshotStateList_init_$Init$(objectCreate(protoOf(SnapshotStateList)));
  }
  function StateListStateRecord(snapshotId, list) {
    StateRecord.call(this, snapshotId);
    this.d2g_1 = list;
    this.e2g_1 = 0;
    this.f2g_1 = 0;
  }
  protoOf(StateListStateRecord).w1x = function (value) {
    // Inline function 'androidx.compose.runtime.platform.synchronized' call
    get_sync();
    var tmp = this;
    tmp.d2g_1 = (value instanceof StateListStateRecord ? value : THROW_CCE()).d2g_1;
    this.e2g_1 = value.e2g_1;
    this.f2g_1 = value.f2g_1;
  };
  protoOf(StateListStateRecord).x1x = function () {
    return this.y1x(currentSnapshot().z1d());
  };
  protoOf(StateListStateRecord).y1x = function (snapshotId) {
    return new StateListStateRecord(snapshotId, this.d2g_1);
  };
  function mutateBoolean($this, block) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate' call
    var result;
    $l$loop: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.platform.synchronized' call
      get_sync();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp = $this.g2g_1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      var current_0 = current(this_0);
      currentModification = current_0.e2g_1;
      oldList = current_0.d2g_1;
      var builder = ensureNotNull(oldList).c25();
      result = block(builder);
      var newList = builder.d25();
      var tmp_0;
      if (equals(newList, oldList)) {
        tmp_0 = true;
      } else {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
        var tmp_1 = $this.g2g_1;
        // Inline function 'androidx.compose.runtime.snapshots.writable' call
        var this_1 = tmp_1 instanceof StateListStateRecord ? tmp_1 : THROW_CCE();
        var snapshot;
        // Inline function 'androidx.compose.runtime.snapshots.sync' call
        // Inline function 'androidx.compose.runtime.platform.synchronized' call
        get_lock();
        snapshot = Companion_instance_11.p12();
        var $this$writable = writableRecord(this_1, $this, snapshot);
        // Inline function 'kotlin.also' call
        var this_2 = attemptUpdate($this, $this$writable, currentModification, newList, true);
        notifyWrite(snapshot, $this);
        tmp_0 = this_2;
      }
      if (tmp_0)
        break $l$loop;
    }
    return result;
  }
  function attemptUpdate($this, _this__u8e3s4, currentModification, newList, structural) {
    // Inline function 'androidx.compose.runtime.platform.synchronized' call
    get_sync();
    var tmp;
    if (_this__u8e3s4.e2g_1 === currentModification) {
      _this__u8e3s4.d2g_1 = newList;
      if (structural) {
        _this__u8e3s4.f2g_1 = _this__u8e3s4.f2g_1 + 1 | 0;
      }
      _this__u8e3s4.e2g_1 = _this__u8e3s4.e2g_1 + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function stateRecordWith($this, list) {
    var snapshot = currentSnapshot();
    // Inline function 'kotlin.also' call
    var this_0 = new StateListStateRecord(snapshot.z1d(), list);
    if (!(snapshot instanceof GlobalSnapshot)) {
      this_0.d1y_1 = new StateListStateRecord(toSnapshotId(1), list);
    }
    return this_0;
  }
  function SnapshotStateList$addAll$lambda($index, $elements) {
    return function (it) {
      return it.w1($index, $elements);
    };
  }
  function SnapshotStateList(persistentList) {
    this.g2g_1 = stateRecordWith(this, persistentList);
  }
  protoOf(SnapshotStateList).e1y = function () {
    return this.g2g_1;
  };
  protoOf(SnapshotStateList).f1y = function (value) {
    value.d1y_1 = this.g2g_1;
    var tmp = this;
    tmp.g2g_1 = value instanceof StateListStateRecord ? value : THROW_CCE();
  };
  protoOf(SnapshotStateList).h2g = function () {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
    var tmp = this.g2g_1;
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
    return current(this_0).f2g_1;
  };
  protoOf(SnapshotStateList).i2g = function () {
    var tmp = this.g2g_1;
    return readable_0(tmp instanceof StateListStateRecord ? tmp : THROW_CCE(), this);
  };
  protoOf(SnapshotStateList).j = function () {
    return this.i2g().d2g_1.j();
  };
  protoOf(SnapshotStateList).te = function (element) {
    return this.i2g().d2g_1.o(element);
  };
  protoOf(SnapshotStateList).o = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.te((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).p = function (index) {
    return this.i2g().d2g_1.p(index);
  };
  protoOf(SnapshotStateList).iy = function (element) {
    return this.i2g().d2g_1.s(element);
  };
  protoOf(SnapshotStateList).s = function (element) {
    if (!(element == null ? true : !(element == null)))
      return -1;
    return this.iy((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).r = function () {
    return this.i2g().d2g_1.r();
  };
  protoOf(SnapshotStateList).g = function () {
    return this.t1();
  };
  protoOf(SnapshotStateList).t1 = function () {
    return new StateListIterator(this, 0);
  };
  protoOf(SnapshotStateList).q = function (index) {
    return new StateListIterator(this, index);
  };
  protoOf(SnapshotStateList).toString = function () {
    var tmp = this.g2g_1;
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
    var it = current(this_0);
    return 'SnapshotStateList(value=' + toString(it.d2g_1) + ')@' + hashCode(this);
  };
  protoOf(SnapshotStateList).jy = function (element) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.platform.synchronized' call
      get_sync();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp = this.g2g_1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      var current_0 = current(this_0);
      currentModification = current_0.e2g_1;
      oldList = current_0.d2g_1;
      var newList = ensureNotNull(oldList).e(element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      var tmp_0 = this.g2g_1;
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var this_1 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.platform.synchronized' call
      get_lock();
      snapshot = Companion_instance_11.p12();
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'kotlin.also' call
      var this_2 = attemptUpdate(this, $this$writable, currentModification, newList, true);
      notifyWrite(snapshot, this);
      if (this_2) {
        result = true;
        break $l$loop_0;
      }
    }
    return result;
  };
  protoOf(SnapshotStateList).e = function (element) {
    return this.jy((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).ny = function (index, element) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.update' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.platform.synchronized' call
      get_sync();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp = this.g2g_1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      var current_0 = current(this_0);
      currentModification = current_0.e2g_1;
      oldList = current_0.d2g_1;
      var newList = ensureNotNull(oldList).f25(index, element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      var tmp_0 = this.g2g_1;
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var this_1 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.platform.synchronized' call
      get_lock();
      snapshot = Companion_instance_11.p12();
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'kotlin.also' call
      var this_2 = attemptUpdate(this, $this$writable, currentModification, newList, true);
      notifyWrite(snapshot, this);
      if (this_2) {
        result = true;
        break $l$loop_0;
      }
    }
    return Unit_instance;
  };
  protoOf(SnapshotStateList).a2 = function (index, element) {
    return this.ny(index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).oy = function (index, elements) {
    return mutateBoolean(this, SnapshotStateList$addAll$lambda(index, elements));
  };
  protoOf(SnapshotStateList).w1 = function (index, elements) {
    return this.oy(index, elements);
  };
  protoOf(SnapshotStateList).py = function (elements) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.platform.synchronized' call
      get_sync();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp = this.g2g_1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      var current_0 = current(this_0);
      currentModification = current_0.e2g_1;
      oldList = current_0.d2g_1;
      var newList = ensureNotNull(oldList).n(elements);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      var tmp_0 = this.g2g_1;
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var this_1 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.platform.synchronized' call
      get_lock();
      snapshot = Companion_instance_11.p12();
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'kotlin.also' call
      var this_2 = attemptUpdate(this, $this$writable, currentModification, newList, true);
      notifyWrite(snapshot, this);
      if (this_2) {
        result = true;
        break $l$loop_0;
      }
    }
    return result;
  };
  protoOf(SnapshotStateList).n = function (elements) {
    return this.py(elements);
  };
  protoOf(SnapshotStateList).y1 = function () {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
    var tmp = this.g2g_1;
    // Inline function 'androidx.compose.runtime.snapshots.writable' call
    var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
    var snapshot;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.platform.synchronized' call
    get_lock();
    snapshot = Companion_instance_11.p12();
    var $this$writable = writableRecord(this_0, this, snapshot);
    // Inline function 'androidx.compose.runtime.platform.synchronized' call
    get_sync();
    $this$writable.d2g_1 = persistentListOf();
    $this$writable.e2g_1 = $this$writable.e2g_1 + 1 | 0;
    $this$writable.f2g_1 = $this$writable.f2g_1 + 1 | 0;
    // Inline function 'kotlin.also' call
    notifyWrite(snapshot, this);
  };
  protoOf(SnapshotStateList).ry = function (element) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.platform.synchronized' call
      get_sync();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp = this.g2g_1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      var current_0 = current(this_0);
      currentModification = current_0.e2g_1;
      oldList = current_0.d2g_1;
      var newList = ensureNotNull(oldList).v1(element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      var tmp_0 = this.g2g_1;
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var this_1 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.platform.synchronized' call
      get_lock();
      snapshot = Companion_instance_11.p12();
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'kotlin.also' call
      var this_2 = attemptUpdate(this, $this$writable, currentModification, newList, true);
      notifyWrite(snapshot, this);
      if (this_2) {
        result = true;
        break $l$loop_0;
      }
    }
    return result;
  };
  protoOf(SnapshotStateList).v1 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.ry((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).sy = function (elements) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.platform.synchronized' call
      get_sync();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp = this.g2g_1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      var current_0 = current(this_0);
      currentModification = current_0.e2g_1;
      oldList = current_0.d2g_1;
      var newList = ensureNotNull(oldList).x1(elements);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      var tmp_0 = this.g2g_1;
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var this_1 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.platform.synchronized' call
      get_lock();
      snapshot = Companion_instance_11.p12();
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'kotlin.also' call
      var this_2 = attemptUpdate(this, $this$writable, currentModification, newList, true);
      notifyWrite(snapshot, this);
      if (this_2) {
        result = true;
        break $l$loop_0;
      }
    }
    return result;
  };
  protoOf(SnapshotStateList).x1 = function (elements) {
    return this.sy(elements);
  };
  protoOf(SnapshotStateList).b2 = function (index) {
    // Inline function 'kotlin.also' call
    var this_0 = this.p(index);
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.update' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.platform.synchronized' call
      get_sync();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp = this.g2g_1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var this_1 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      var current_0 = current(this_1);
      currentModification = current_0.e2g_1;
      oldList = current_0.d2g_1;
      var newList = ensureNotNull(oldList).b2(index);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      var tmp_0 = this.g2g_1;
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var this_2 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.platform.synchronized' call
      get_lock();
      snapshot = Companion_instance_11.p12();
      var $this$writable = writableRecord(this_2, this, snapshot);
      // Inline function 'kotlin.also' call
      var this_3 = attemptUpdate(this, $this$writable, currentModification, newList, true);
      notifyWrite(snapshot, this);
      if (this_3) {
        result = true;
        break $l$loop_0;
      }
    }
    return this_0;
  };
  protoOf(SnapshotStateList).uy = function (index, element) {
    // Inline function 'kotlin.also' call
    var this_0 = this.p(index);
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.update' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.platform.synchronized' call
      get_sync();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp = this.g2g_1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var this_1 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      var current_0 = current(this_1);
      currentModification = current_0.e2g_1;
      oldList = current_0.d2g_1;
      var newList = ensureNotNull(oldList).z1(index, element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      var tmp_0 = this.g2g_1;
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var this_2 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.platform.synchronized' call
      get_lock();
      snapshot = Companion_instance_11.p12();
      var $this$writable = writableRecord(this_2, this, snapshot);
      // Inline function 'kotlin.also' call
      var this_3 = attemptUpdate(this, $this$writable, currentModification, newList, false);
      notifyWrite(snapshot, this);
      if (this_3) {
        result = true;
        break $l$loop_0;
      }
    }
    return this_0;
  };
  protoOf(SnapshotStateList).z1 = function (index, element) {
    return this.uy(index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function validateModification($this) {
    if (!($this.j2g_1.h2g() === $this.m2g_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function StateListIterator(list, offset) {
    this.j2g_1 = list;
    this.k2g_1 = offset - 1 | 0;
    this.l2g_1 = -1;
    this.m2g_1 = this.j2g_1.h2g();
  }
  protoOf(StateListIterator).k4 = function () {
    return this.k2g_1 >= 0;
  };
  protoOf(StateListIterator).l4 = function () {
    return this.k2g_1 + 1 | 0;
  };
  protoOf(StateListIterator).m4 = function () {
    validateModification(this);
    validateRange(this.k2g_1, this.j2g_1.j());
    this.l2g_1 = this.k2g_1;
    // Inline function 'kotlin.also' call
    var this_0 = this.j2g_1.p(this.k2g_1);
    this.k2g_1 = this.k2g_1 - 1 | 0;
    return this_0;
  };
  protoOf(StateListIterator).n4 = function () {
    return this.k2g_1;
  };
  protoOf(StateListIterator).h = function () {
    return this.k2g_1 < (this.j2g_1.j() - 1 | 0);
  };
  protoOf(StateListIterator).i = function () {
    validateModification(this);
    var newIndex = this.k2g_1 + 1 | 0;
    this.l2g_1 = newIndex;
    validateRange(newIndex, this.j2g_1.j());
    // Inline function 'kotlin.also' call
    var this_0 = this.j2g_1.p(newIndex);
    this.k2g_1 = newIndex;
    return this_0;
  };
  protoOf(StateListIterator).a4 = function () {
    validateModification(this);
    this.j2g_1.b2(this.k2g_1);
    this.k2g_1 = this.k2g_1 - 1 | 0;
    this.l2g_1 = -1;
    this.m2g_1 = this.j2g_1.h2g();
  };
  function validateRange(index, size) {
    _init_properties_SnapshotStateList_kt__mu1ud5();
    if (!(0 <= index ? index < size : false)) {
      throw IndexOutOfBoundsException_init_$Create$('index (' + index + ') is out of bound of [0, ' + size + ')');
    }
  }
  var properties_initialized_SnapshotStateList_kt_lcuarf;
  function _init_properties_SnapshotStateList_kt__mu1ud5() {
    if (!properties_initialized_SnapshotStateList_kt_lcuarf) {
      properties_initialized_SnapshotStateList_kt_lcuarf = true;
      // Inline function 'androidx.compose.runtime.platform.makeSynchronizedObject' call
      sync = null == null ? new Object() : null;
      androidx_compose_runtime_snapshots_SnapshotStateList_StateListStateRecord$stable = 8;
      androidx_compose_runtime_snapshots_SnapshotStateList$stable = 0;
    }
  }
  function get_sync_0() {
    _init_properties_SnapshotStateMap_kt__p43o8h();
    return sync_0;
  }
  var sync_0;
  var androidx_compose_runtime_snapshots_SnapshotStateMap_StateMapStateRecord$stable;
  var androidx_compose_runtime_snapshots_SnapshotStateMap$stable;
  function unsupported() {
    _init_properties_SnapshotStateMap_kt__p43o8h();
    throw UnsupportedOperationException_init_$Create$();
  }
  function attemptUpdate_0($this, _this__u8e3s4, currentModification, newMap) {
    // Inline function 'androidx.compose.runtime.platform.synchronized' call
    get_sync_0();
    var tmp;
    if (_this__u8e3s4.q2g_1 === currentModification) {
      _this__u8e3s4.p2g_1 = newMap;
      _this__u8e3s4.q2g_1 = _this__u8e3s4.q2g_1 + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function commitUpdate($this, _this__u8e3s4, newMap) {
    // Inline function 'androidx.compose.runtime.platform.synchronized' call
    get_sync_0();
    _this__u8e3s4.p2g_1 = newMap;
    var _unary__edvuaz = _this__u8e3s4.q2g_1;
    _this__u8e3s4.q2g_1 = _unary__edvuaz + 1 | 0;
    return _unary__edvuaz;
  }
  function StateMapStateRecord(snapshotId, map) {
    StateRecord.call(this, snapshotId);
    this.p2g_1 = map;
    this.q2g_1 = 0;
  }
  protoOf(StateMapStateRecord).w1x = function (value) {
    var other = value instanceof StateMapStateRecord ? value : THROW_CCE();
    // Inline function 'androidx.compose.runtime.platform.synchronized' call
    get_sync_0();
    this.p2g_1 = other.p2g_1;
    this.q2g_1 = other.q2g_1;
  };
  protoOf(StateMapStateRecord).x1x = function () {
    return new StateMapStateRecord(currentSnapshot().z1d(), this.p2g_1);
  };
  protoOf(StateMapStateRecord).y1x = function (snapshotId) {
    return new StateMapStateRecord(snapshotId, this.p2g_1);
  };
  function access$attemptUpdate($this, $receiver, currentModification, newMap) {
    return attemptUpdate_0($this, $receiver, currentModification, newMap);
  }
  function SnapshotStateMap() {
    var tmp = this;
    // Inline function 'kotlin.let' call
    var map = persistentHashMapOf();
    var snapshot = currentSnapshot();
    // Inline function 'kotlin.also' call
    var this_0 = new StateMapStateRecord(snapshot.z1d(), map);
    if (!(snapshot instanceof GlobalSnapshot)) {
      this_0.d1y_1 = new StateMapStateRecord(toSnapshotId(1), map);
    }
    tmp.r2g_1 = this_0;
    this.s2g_1 = new SnapshotMapEntrySet(this);
    this.t2g_1 = new SnapshotMapKeySet(this);
    this.u2g_1 = new SnapshotMapValueSet(this);
  }
  protoOf(SnapshotStateMap).e1y = function () {
    return this.r2g_1;
  };
  protoOf(SnapshotStateMap).f1y = function (value) {
    var tmp = this;
    tmp.r2g_1 = value instanceof StateMapStateRecord ? value : THROW_CCE();
  };
  protoOf(SnapshotStateMap).j = function () {
    return this.i2g().p2g_1.j();
  };
  protoOf(SnapshotStateMap).f2 = function (key) {
    return this.i2g().p2g_1.f2(key);
  };
  protoOf(SnapshotStateMap).g2 = function (value) {
    return this.i2g().p2g_1.g2(value);
  };
  protoOf(SnapshotStateMap).h2 = function (key) {
    return this.i2g().p2g_1.h2(key);
  };
  protoOf(SnapshotStateMap).r = function () {
    return this.i2g().p2g_1.r();
  };
  protoOf(SnapshotStateMap).k2 = function () {
    return this.s2g_1;
  };
  protoOf(SnapshotStateMap).i2 = function () {
    return this.t2g_1;
  };
  protoOf(SnapshotStateMap).j2 = function () {
    return this.u2g_1;
  };
  protoOf(SnapshotStateMap).toString = function () {
    var tmp = this.r2g_1;
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var this_0 = tmp instanceof StateMapStateRecord ? tmp : THROW_CCE();
    var it = current(this_0);
    return 'SnapshotStateMap(value=' + toString(it.p2g_1) + ')@' + hashCode(this);
  };
  protoOf(SnapshotStateMap).y1 = function () {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.update' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.withCurrent' call
    var tmp = this.r2g_1;
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var this_0 = tmp instanceof StateMapStateRecord ? tmp : THROW_CCE();
    var $this$withCurrent = current(this_0);
    $this$withCurrent.p2g_1;
    var newMap = persistentHashMapOf();
    if (!(newMap === $this$withCurrent.p2g_1)) {
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.writable' call
      var tmp_0 = this.r2g_1;
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var this_1 = tmp_0 instanceof StateMapStateRecord ? tmp_0 : THROW_CCE();
      var snapshot;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.platform.synchronized' call
      get_lock();
      snapshot = Companion_instance_11.p12();
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'kotlin.also' call
      commitUpdate(this, $this$writable, newMap);
      notifyWrite(snapshot, this);
    }
    return Unit_instance;
  };
  protoOf(SnapshotStateMap).l2 = function (key, value) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate' call
    var result;
    $l$loop: while (true) {
      var oldMap = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.platform.synchronized' call
      get_sync_0();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.withCurrent' call
      var tmp = this.r2g_1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var this_0 = tmp instanceof StateMapStateRecord ? tmp : THROW_CCE();
      var current_0 = current(this_0);
      oldMap = current_0.p2g_1;
      currentModification = current_0.q2g_1;
      var builder = ensureNotNull(oldMap).c25();
      result = builder.l2(key, value);
      var newMap = builder.d25();
      var tmp_0;
      if (equals(newMap, oldMap)) {
        tmp_0 = true;
      } else {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.writable' call
        var tmp_1 = this.r2g_1;
        // Inline function 'androidx.compose.runtime.snapshots.writable' call
        var this_1 = tmp_1 instanceof StateMapStateRecord ? tmp_1 : THROW_CCE();
        var snapshot;
        // Inline function 'androidx.compose.runtime.snapshots.sync' call
        // Inline function 'androidx.compose.runtime.platform.synchronized' call
        get_lock();
        snapshot = Companion_instance_11.p12();
        var $this$writable = writableRecord(this_1, this, snapshot);
        // Inline function 'kotlin.also' call
        var this_2 = attemptUpdate_0(this, $this$writable, currentModification, newMap);
        notifyWrite(snapshot, this);
        tmp_0 = this_2;
      }
      if (tmp_0)
        break $l$loop;
    }
    return result;
  };
  protoOf(SnapshotStateMap).m2 = function (key) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate' call
    var result;
    $l$loop: while (true) {
      var oldMap = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.platform.synchronized' call
      get_sync_0();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.withCurrent' call
      var tmp = this.r2g_1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var this_0 = tmp instanceof StateMapStateRecord ? tmp : THROW_CCE();
      var current_0 = current(this_0);
      oldMap = current_0.p2g_1;
      currentModification = current_0.q2g_1;
      var builder = ensureNotNull(oldMap).c25();
      result = builder.m2(key);
      var newMap = builder.d25();
      var tmp_0;
      if (equals(newMap, oldMap)) {
        tmp_0 = true;
      } else {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.writable' call
        var tmp_1 = this.r2g_1;
        // Inline function 'androidx.compose.runtime.snapshots.writable' call
        var this_1 = tmp_1 instanceof StateMapStateRecord ? tmp_1 : THROW_CCE();
        var snapshot;
        // Inline function 'androidx.compose.runtime.snapshots.sync' call
        // Inline function 'androidx.compose.runtime.platform.synchronized' call
        get_lock();
        snapshot = Companion_instance_11.p12();
        var $this$writable = writableRecord(this_1, this, snapshot);
        // Inline function 'kotlin.also' call
        var this_2 = attemptUpdate_0(this, $this$writable, currentModification, newMap);
        notifyWrite(snapshot, this);
        tmp_0 = this_2;
      }
      if (tmp_0)
        break $l$loop;
    }
    return result;
  };
  protoOf(SnapshotStateMap).v2g = function () {
    return this.i2g().q2g_1;
  };
  protoOf(SnapshotStateMap).w2g = function (value) {
    var tmp0 = this.s2g_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        if (equals(element.e2(), value)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      this.m2(tmp0_safe_receiver.d2());
      tmp = true;
    }
    return tmp === true;
  };
  protoOf(SnapshotStateMap).i2g = function () {
    var tmp = this.r2g_1;
    return readable_0(tmp instanceof StateMapStateRecord ? tmp : THROW_CCE(), this);
  };
  function SnapshotMapEntrySet(map) {
    SnapshotMapSet.call(this, map);
  }
  protoOf(SnapshotMapEntrySet).j29 = function (element) {
    unsupported();
  };
  protoOf(SnapshotMapEntrySet).e = function (element) {
    return this.j29((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  protoOf(SnapshotMapEntrySet).y2g = function (elements) {
    unsupported();
  };
  protoOf(SnapshotMapEntrySet).n = function (elements) {
    return this.y2g(elements);
  };
  protoOf(SnapshotMapEntrySet).g = function () {
    return new StateMapMutableEntriesIterator(this.z2g_1, this.z2g_1.i2g().p2g_1.k2().g());
  };
  protoOf(SnapshotMapEntrySet).a2h = function (element) {
    return !(this.z2g_1.m2(element.d2()) == null);
  };
  protoOf(SnapshotMapEntrySet).v1 = function (element) {
    if (!(!(element == null) ? isInterface(element, MutableEntry) : false))
      return false;
    return this.a2h((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  protoOf(SnapshotMapEntrySet).b2h = function (elements) {
    var removed = false;
    var _iterator__ex2g4s = elements.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      removed = !(this.z2g_1.m2(element.d2()) == null) || removed;
    }
    return removed;
  };
  protoOf(SnapshotMapEntrySet).x1 = function (elements) {
    return this.b2h(elements);
  };
  protoOf(SnapshotMapEntrySet).c2h = function (element) {
    return equals(this.z2g_1.h2(element.d2()), element.e2());
  };
  protoOf(SnapshotMapEntrySet).o = function (element) {
    if (!(!(element == null) ? isInterface(element, MutableEntry) : false))
      return false;
    return this.c2h((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  protoOf(SnapshotMapEntrySet).d2h = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.r();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = elements.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        if (!this.c2h(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SnapshotMapEntrySet).u1 = function (elements) {
    return this.d2h(elements);
  };
  function SnapshotMapKeySet(map) {
    SnapshotMapSet.call(this, map);
  }
  protoOf(SnapshotMapKeySet).l6 = function (element) {
    unsupported();
  };
  protoOf(SnapshotMapKeySet).e = function (element) {
    return this.l6((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotMapKeySet).f2h = function (elements) {
    unsupported();
  };
  protoOf(SnapshotMapKeySet).n = function (elements) {
    return this.f2h(elements);
  };
  protoOf(SnapshotMapKeySet).g = function () {
    return new StateMapMutableKeysIterator(this.z2g_1, this.z2g_1.i2g().p2g_1.k2().g());
  };
  protoOf(SnapshotMapKeySet).m2 = function (element) {
    return !(this.z2g_1.m2(element) == null);
  };
  protoOf(SnapshotMapKeySet).v1 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.m2((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotMapKeySet).g2h = function (elements) {
    var removed = false;
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = elements.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      removed = !(this.z2g_1.m2(element) == null) || removed;
    }
    return removed;
  };
  protoOf(SnapshotMapKeySet).x1 = function (elements) {
    return this.g2h(elements);
  };
  protoOf(SnapshotMapKeySet).q5 = function (element) {
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = this.z2g_1;
    return (isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).f2(element);
  };
  protoOf(SnapshotMapKeySet).o = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.q5((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotMapKeySet).h2h = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.r();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = elements.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        // Inline function 'kotlin.collections.contains' call
        // Inline function 'kotlin.collections.containsKey' call
        var this_0 = this.z2g_1;
        if (!(isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).f2(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SnapshotMapKeySet).u1 = function (elements) {
    return this.h2h(elements);
  };
  function SnapshotMapValueSet(map) {
    SnapshotMapSet.call(this, map);
  }
  protoOf(SnapshotMapValueSet).x5 = function (element) {
    unsupported();
  };
  protoOf(SnapshotMapValueSet).e = function (element) {
    return this.x5((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotMapValueSet).y5 = function (elements) {
    unsupported();
  };
  protoOf(SnapshotMapValueSet).n = function (elements) {
    return this.y5(elements);
  };
  protoOf(SnapshotMapValueSet).g = function () {
    return new StateMapMutableValuesIterator(this.z2g_1, this.z2g_1.i2g().p2g_1.k2().g());
  };
  protoOf(SnapshotMapValueSet).j2h = function (element) {
    return this.z2g_1.w2g(element);
  };
  protoOf(SnapshotMapValueSet).v1 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.j2h((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotMapValueSet).k2h = function (elements) {
    var set = toSet(elements);
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.removeIf' call
    var this_0 = this.z2g_1;
    var removed = false;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate' call
    var result;
    $l$loop: while (true) {
      var oldMap = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.platform.synchronized' call
      access$_get_sync_$tSnapshotStateMapKt_18z0nc();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.withCurrent' call
      var tmp = this_0.r2g_1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var this_1 = tmp instanceof StateMapStateRecord ? tmp : THROW_CCE();
      var current_0 = current(this_1);
      oldMap = current_0.p2g_1;
      currentModification = current_0.q2g_1;
      var builder = ensureNotNull(oldMap).c25();
      var _iterator__ex2g4s = this_0.s2g_1.g();
      while (_iterator__ex2g4s.h()) {
        var entry = _iterator__ex2g4s.i();
        if (set.o(entry.e2())) {
          builder.m2(entry.d2());
          removed = true;
        }
      }
      result = Unit_instance;
      var newMap = builder.d25();
      var tmp_0;
      if (equals(newMap, oldMap)) {
        tmp_0 = true;
      } else {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.writable' call
        var tmp_1 = this_0.r2g_1;
        // Inline function 'androidx.compose.runtime.snapshots.writable' call
        var this_2 = tmp_1 instanceof StateMapStateRecord ? tmp_1 : THROW_CCE();
        var snapshot;
        // Inline function 'androidx.compose.runtime.snapshots.sync' call
        // Inline function 'androidx.compose.runtime.platform.synchronized' call
        get_lock();
        snapshot = Companion_instance_11.p12();
        var $this$writable = writableRecord(this_2, this_0, snapshot);
        // Inline function 'kotlin.also' call
        var this_3 = access$attemptUpdate(this_0, $this$writable, currentModification, newMap);
        notifyWrite(snapshot, this_0);
        tmp_0 = this_3;
      }
      if (tmp_0)
        break $l$loop;
    }
    return removed;
  };
  protoOf(SnapshotMapValueSet).x1 = function (elements) {
    return this.k2h(elements);
  };
  protoOf(SnapshotMapValueSet).w5 = function (element) {
    return this.z2g_1.g2(element);
  };
  protoOf(SnapshotMapValueSet).o = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.w5((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotMapValueSet).l2h = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.r();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = elements.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        if (!this.z2g_1.g2(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SnapshotMapValueSet).u1 = function (elements) {
    return this.l2h(elements);
  };
  function SnapshotMapSet(map) {
    this.z2g_1 = map;
  }
  protoOf(SnapshotMapSet).j = function () {
    return this.z2g_1.j();
  };
  protoOf(SnapshotMapSet).r = function () {
    return this.z2g_1.r();
  };
  function StateMapMutableEntriesIterator$next$1(this$0) {
    this.o2h_1 = this$0;
    this.m2h_1 = ensureNotNull(this$0.s2h_1).d2();
    this.n2h_1 = ensureNotNull(this$0.s2h_1).e2();
  }
  protoOf(StateMapMutableEntriesIterator$next$1).d2 = function () {
    return this.m2h_1;
  };
  protoOf(StateMapMutableEntriesIterator$next$1).e2 = function () {
    return this.n2h_1;
  };
  function StateMapMutableEntriesIterator(map, iterator) {
    StateMapMutableIterator.call(this, map, iterator);
  }
  protoOf(StateMapMutableEntriesIterator).i = function () {
    this.z2h();
    if (!(this.s2h_1 == null)) {
      return new StateMapMutableEntriesIterator$next$1(this);
    } else {
      throw IllegalStateException_init_$Create$_0();
    }
  };
  function StateMapMutableKeysIterator(map, iterator) {
    StateMapMutableIterator.call(this, map, iterator);
  }
  protoOf(StateMapMutableKeysIterator).i = function () {
    var tmp0_elvis_lhs = this.t2h_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$_0();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var result = tmp;
    this.z2h();
    return result.d2();
  };
  function StateMapMutableValuesIterator(map, iterator) {
    StateMapMutableIterator.call(this, map, iterator);
  }
  protoOf(StateMapMutableValuesIterator).i = function () {
    var tmp0_elvis_lhs = this.t2h_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$_0();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var result = tmp;
    this.z2h();
    return result.e2();
  };
  function StateMapMutableIterator(map, iterator) {
    this.p2h_1 = map;
    this.q2h_1 = iterator;
    this.r2h_1 = this.p2h_1.v2g();
    this.s2h_1 = null;
    this.t2h_1 = null;
    this.z2h();
  }
  protoOf(StateMapMutableIterator).a4 = function () {
    // Inline function 'androidx.compose.runtime.snapshots.StateMapMutableIterator.modify' call
    if (!(this.p2h_1.v2g() === this.r2h_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
    var value = this.s2h_1;
    if (!(value == null)) {
      this.p2h_1.m2(value.d2());
      this.s2h_1 = null;
    } else {
      throw IllegalStateException_init_$Create$_0();
    }
    // Inline function 'kotlin.also' call
    this.r2h_1 = this.p2h_1.v2g();
    return Unit_instance;
  };
  protoOf(StateMapMutableIterator).h = function () {
    return !(this.t2h_1 == null);
  };
  protoOf(StateMapMutableIterator).z2h = function () {
    this.s2h_1 = this.t2h_1;
    this.t2h_1 = this.q2h_1.h() ? this.q2h_1.i() : null;
  };
  function access$_get_sync_$tSnapshotStateMapKt_18z0nc() {
    return get_sync_0();
  }
  var properties_initialized_SnapshotStateMap_kt_9i73ip;
  function _init_properties_SnapshotStateMap_kt__p43o8h() {
    if (!properties_initialized_SnapshotStateMap_kt_9i73ip) {
      properties_initialized_SnapshotStateMap_kt_9i73ip = true;
      // Inline function 'androidx.compose.runtime.platform.makeSynchronizedObject' call
      sync_0 = null == null ? new Object() : null;
      androidx_compose_runtime_snapshots_SnapshotStateMap_StateMapStateRecord$stable = 8;
      androidx_compose_runtime_snapshots_SnapshotStateMap$stable = 0;
    }
  }
  var androidx_compose_runtime_snapshots_SnapshotStateObserver$stable;
  var androidx_compose_runtime_snapshots_SnapshotWeakSet$stable;
  function find_1($this, value, hash) {
    var low = 0;
    var high = $this.w2e_1 - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midHash = $this.x2e_1[mid];
      if (midHash < hash)
        low = mid + 1 | 0;
      else if (midHash > hash)
        high = mid - 1 | 0;
      else {
        var tmp0_safe_receiver = $this.y2e_1[mid];
        var midVal = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.bo();
        if (value === midVal)
          return mid;
        return findExactIndex($this, mid, value, hash);
      }
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex($this, midIndex, value, valueHash) {
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        if (!($this.x2e_1[i] === valueHash)) {
          break $l$loop;
        }
        var tmp0_safe_receiver = $this.y2e_1[i];
        var v = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.bo();
        if (v === value) {
          return i;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    var last = $this.w2e_1;
    if (inductionVariable_0 < last)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if (!($this.x2e_1[i_0] === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
        var tmp1_safe_receiver = $this.y2e_1[i_0];
        var v_0 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.bo();
        if (v_0 === value) {
          return i_0;
        }
      }
       while (inductionVariable_0 < last);
    return -($this.w2e_1 + 1 | 0) | 0;
  }
  function SnapshotWeakSet() {
    this.w2e_1 = 0;
    this.x2e_1 = new Int32Array(16);
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.y2e_1 = Array(16);
  }
  protoOf(SnapshotWeakSet).a2f = function (value) {
    var index;
    var size = this.w2e_1;
    var hash = identityHashCode(value);
    if (size > 0) {
      index = find_1(this, value, hash);
      if (index >= 0) {
        return false;
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    var capacity = this.y2e_1.length;
    if (size === capacity) {
      var newCapacity = imul(capacity, 2);
      // Inline function 'kotlin.arrayOfNulls' call
      var newValues = Array(newCapacity);
      var newHashes = new Int32Array(newCapacity);
      var tmp0 = this.y2e_1;
      // Inline function 'androidx.compose.runtime.collection.fastCopyInto' call
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = insertIndex + 1 | 0;
      arrayCopy(tmp0, newValues, destinationOffset, insertIndex, size);
      // Inline function 'androidx.compose.runtime.collection.fastCopyInto' call
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = this.y2e_1;
      arrayCopy(this_0, newValues, 0, 0, insertIndex);
      var tmp0_0 = this.x2e_1;
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset_0 = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = tmp0_0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, newHashes, destinationOffset_0, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = this.x2e_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_0, newHashes, 0, 0, insertIndex);
      this.y2e_1 = newValues;
      this.x2e_1 = newHashes;
    } else {
      var tmp0_1 = this.y2e_1;
      var tmp2 = this.y2e_1;
      // Inline function 'androidx.compose.runtime.collection.fastCopyInto' call
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset_1 = insertIndex + 1 | 0;
      arrayCopy(tmp0_1, tmp2, destinationOffset_1, insertIndex, size);
      var tmp0_2 = this.x2e_1;
      var tmp2_0 = this.x2e_1;
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset_2 = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_1 = tmp0_2;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_1, tmp2_0, destinationOffset_2, insertIndex, size);
    }
    this.y2e_1[insertIndex] = new WeakReference(value);
    this.x2e_1[insertIndex] = hash;
    this.w2e_1 = this.w2e_1 + 1 | 0;
    return true;
  };
  var androidx_compose_runtime_snapshots_StateObjectImpl$stable;
  function StateObjectImpl() {
    this.a1n_1 = new AtomicInt(0);
  }
  protoOf(StateObjectImpl).b1n = function (reader) {
    do {
      var old = _ReaderKind___init__impl__jqeebu(this.a1n_1.bo());
      // Inline function 'androidx.compose.runtime.snapshots.ReaderKind.isReadIn' call
      var this_0 = old;
      if (!((_ReaderKind___get_mask__impl__gmhzqb(this_0) & _ReaderKind___get_mask__impl__gmhzqb(reader)) === 0))
        return Unit_instance;
      // Inline function 'androidx.compose.runtime.snapshots.ReaderKind.withReadIn' call
      var this_1 = old;
      var new_0 = _ReaderKind___init__impl__jqeebu(_ReaderKind___get_mask__impl__gmhzqb(this_1) | _ReaderKind___get_mask__impl__gmhzqb(reader));
    }
     while (!this.a1n_1.k2i(_ReaderKind___get_mask__impl__gmhzqb(old), _ReaderKind___get_mask__impl__gmhzqb(new_0)));
  };
  protoOf(StateObjectImpl).n1r = function (reader) {
    // Inline function 'androidx.compose.runtime.snapshots.ReaderKind.isReadIn' call
    var this_0 = _ReaderKind___init__impl__jqeebu(this.a1n_1.bo());
    return !((_ReaderKind___get_mask__impl__gmhzqb(this_0) & _ReaderKind___get_mask__impl__gmhzqb(reader)) === 0);
  };
  function _ReaderKind___init__impl__jqeebu(mask) {
    mask = mask === VOID ? 0 : mask;
    return mask;
  }
  function _ReaderKind___get_mask__impl__gmhzqb($this) {
    return $this;
  }
  function Companion_13() {
  }
  var Companion_instance_14;
  function Companion_getInstance_13() {
    return Companion_instance_14;
  }
  var observers;
  var androidx_compose_runtime_snapshots_tooling_SnapshotInstanceObservers$stable;
  function dispatchObserverOnApplied(snapshot, changes) {
    var observers_0 = observers;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    if (!(observers_0 == null || observers_0.r())) {
      var tmp1_elvis_lhs = changes == null ? null : wrapIntoSet(changes);
      var wrappedChanges = tmp1_elvis_lhs == null ? emptySet() : tmp1_elvis_lhs;
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var inductionVariable = 0;
      var last = observers_0.j() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = observers_0.p(index);
          item.l2i(snapshot, wrappedChanges);
        }
         while (inductionVariable <= last);
    }
  }
  function dispatchObserverOnPreDispose(snapshot) {
    var tmp0_safe_receiver = observers;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var inductionVariable = 0;
      var last = tmp0_safe_receiver.j() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0_safe_receiver.p(index);
          item.m2i(snapshot);
        }
         while (inductionVariable <= last);
    }
  }
  function SnapshotObserver() {
  }
  function SnapshotInstanceObservers(readObserver, writeObserver) {
    readObserver = readObserver === VOID ? null : readObserver;
    writeObserver = writeObserver === VOID ? null : writeObserver;
    this.v2c_1 = readObserver;
    this.w2c_1 = writeObserver;
  }
  function mergeObservers(_this__u8e3s4, parent, readonly, readObserver, writeObserver) {
    var currentReadObserver = readObserver;
    var currentWriteObserver = writeObserver;
    var observerMap = null;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.p(index);
        var instance = item.o2i(parent, readonly);
        if (!(instance == null)) {
          currentReadObserver = mergeObservers_0(instance.v2c_1, currentReadObserver);
          currentWriteObserver = mergeObservers_0(instance.w2c_1, currentWriteObserver);
          var tmp0_elvis_lhs = observerMap;
          var tmp;
          if (tmp0_elvis_lhs == null) {
            // Inline function 'kotlin.run' call
            // Inline function 'kotlin.collections.mutableMapOf' call
            var newMap = LinkedHashMap_init_$Create$();
            observerMap = newMap;
            tmp = newMap;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          // Inline function 'kotlin.collections.set' call
          tmp.l2(item, instance);
        }
      }
       while (inductionVariable <= last);
    return to(new SnapshotInstanceObservers(currentReadObserver, currentWriteObserver), observerMap);
  }
  function dispatchCreatedObservers(_this__u8e3s4, parent, result, observerMap) {
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.p(index);
        var instance = observerMap == null ? null : observerMap.h2(item);
        item.p2i(result, parent, instance);
      }
       while (inductionVariable <= last);
  }
  function mergeObservers_0(a, b) {
    var tmp;
    if (!(a == null) && !(b == null)) {
      tmp = mergeObservers$lambda(a, b);
    } else {
      tmp = a == null ? b : a;
    }
    return tmp;
  }
  function access$_get_observers_$tSnapshotObserverKt_23v7jt() {
    return observers;
  }
  function mergeObservers$lambda($a, $b) {
    return function (it) {
      $a(it);
      $b(it);
      return Unit_instance;
    };
  }
  function get_LocalInspectionTables() {
    _init_properties_InspectionTables_kt__ovfk2v();
    return LocalInspectionTables;
  }
  var LocalInspectionTables;
  function LocalInspectionTables$lambda() {
    _init_properties_InspectionTables_kt__ovfk2v();
    return null;
  }
  var properties_initialized_InspectionTables_kt_tgdbmt;
  function _init_properties_InspectionTables_kt__ovfk2v() {
    if (!properties_initialized_InspectionTables_kt_tgdbmt) {
      properties_initialized_InspectionTables_kt_tgdbmt = true;
      LocalInspectionTables = staticCompositionLocalOf(LocalInspectionTables$lambda);
    }
  }
  function get_DefaultMonotonicFrameClock() {
    _init_properties_MonotonicFrameClock_js_kt__ghaook();
    return DefaultMonotonicFrameClock;
  }
  var DefaultMonotonicFrameClock;
  function DefaultMonotonicFrameClock$o$withFrameNanos$lambda($onFrame, $continuation) {
    return function (it) {
      var duration = toDuration(it, DurationUnit_MILLISECONDS_getInstance());
      var result = $onFrame(_Duration___get_inWholeNanoseconds__impl__r5x4mr(duration));
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $continuation;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(result);
      this_0.g9(tmp$ret$0);
      return Unit_instance;
    };
  }
  function DefaultMonotonicFrameClock$1() {
  }
  protoOf(DefaultMonotonicFrameClock$1).w13 = function (onFrame, $completion) {
    var safe = SafeContinuation_init_$Create$(intercepted($completion));
    var tmp = window;
    tmp.requestAnimationFrame(DefaultMonotonicFrameClock$o$withFrameNanos$lambda(onFrame, safe));
    return safe.n9();
  };
  var properties_initialized_MonotonicFrameClock_js_kt_sss2j6;
  function _init_properties_MonotonicFrameClock_js_kt__ghaook() {
    if (!properties_initialized_MonotonicFrameClock_js_kt_sss2j6) {
      properties_initialized_MonotonicFrameClock_js_kt_sss2j6 = true;
      DefaultMonotonicFrameClock = new DefaultMonotonicFrameClock$1();
    }
  }
  function set_nextHash(_set____db54di) {
    _init_properties_Utils_js_kt__vxye62();
    nextHash = _set____db54di;
  }
  function get_nextHash() {
    _init_properties_Utils_js_kt__vxye62();
    return nextHash;
  }
  var nextHash;
  function get_weakMap() {
    _init_properties_Utils_js_kt__vxye62();
    return weakMap;
  }
  var weakMap;
  function identityHashCode(instance) {
    _init_properties_Utils_js_kt__vxye62();
    if (instance == null) {
      return 0;
    }
    var tmp0_elvis_lhs = get_weakMap().get(instance);
    return tmp0_elvis_lhs == null ? memoizeIdentityHashCode(instance) : tmp0_elvis_lhs;
  }
  function memoizeIdentityHashCode(instance) {
    _init_properties_Utils_js_kt__vxye62();
    var _unary__edvuaz = get_nextHash();
    set_nextHash(_unary__edvuaz + 1 | 0);
    var value = _unary__edvuaz;
    get_weakMap().set(instance, value);
    return value;
  }
  var properties_initialized_Utils_js_kt_vu7oo8;
  function _init_properties_Utils_js_kt__vxye62() {
    if (!properties_initialized_Utils_js_kt_vu7oo8) {
      properties_initialized_Utils_js_kt_vu7oo8 = true;
      nextHash = 1;
      weakMap = new WeakMap();
    }
  }
  var androidx_compose_runtime_snapshots_SnapshotIdArrayBuilder$stable;
  function toSnapshotId(_this__u8e3s4) {
    return _this__u8e3s4;
  }
  function snapshotIdArrayWithCapacity(capacity) {
    return new Float64Array(capacity);
  }
  function binarySearch(_this__u8e3s4, id) {
    var low = 0;
    var high = _this__u8e3s4.length - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4[mid];
      if (id > midVal)
        low = mid + 1 | 0;
      else if (id < midVal)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function SnapshotIdArrayBuilder(array) {
    var tmp = this;
    var tmp_0;
    if (array == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.collection.mutableDoubleListOf' call
      var elements = array.slice();
      // Inline function 'kotlin.apply' call
      var this_0 = new MutableDoubleList(elements.length);
      // Inline function 'androidx.collection.MutableDoubleList.plusAssign' call
      this_0.kv(this_0.dv_1, elements);
      tmp_0 = this_0;
    }
    var tmp1_elvis_lhs = tmp_0;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'androidx.collection.mutableDoubleListOf' call
      tmp_1 = new MutableDoubleList();
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    tmp.z2f_1 = tmp_1;
  }
  protoOf(SnapshotIdArrayBuilder).a2g = function (id) {
    this.z2f_1.iv(id);
  };
  protoOf(SnapshotIdArrayBuilder).j5 = function () {
    // Inline function 'androidx.collection.DoubleList.size' call
    var size = this.z2f_1.dv_1;
    if (size === 0)
      return null;
    var result = new Float64Array(size);
    // Inline function 'androidx.collection.DoubleList.forEachIndexed' call
    var this_0 = this.z2f_1;
    // Inline function 'kotlin.contracts.contract' call
    var content = this_0.cv_1;
    var inductionVariable = 0;
    var last = this_0.dv_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result[i] = content[i];
      }
       while (inductionVariable < last);
    return result;
  };
  function withIdInsertedAt(_this__u8e3s4, index, id) {
    var newSize = _this__u8e3s4.length + 1 | 0;
    var newArray = new Float64Array(newSize);
    // Inline function 'kotlin.collections.copyInto' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = _this__u8e3s4;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, newArray, 0, 0, index);
    var tmp4 = index + 1 | 0;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = newSize - 1 | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = _this__u8e3s4;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_0, newArray, tmp4, index, endIndex);
    newArray[index] = id;
    return newArray;
  }
  function withIdRemovedAt(_this__u8e3s4, index) {
    var newSize = _this__u8e3s4.length - 1 | 0;
    if (newSize === 0) {
      return null;
    }
    var newArray = new Float64Array(newSize);
    if (index > 0) {
      // Inline function 'kotlin.collections.copyInto' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = _this__u8e3s4;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, newArray, 0, 0, index);
    }
    if (index < newSize) {
      var tmp6 = index + 1 | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = newSize + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = _this__u8e3s4;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_0, newArray, index, tmp6, endIndex);
    }
    return newArray;
  }
  function createSnapshotMutableState(value, policy) {
    return new SnapshotMutableStateImpl(value, policy);
  }
  function get_MainThreadId() {
    return MainThreadId;
  }
  var MainThreadId;
  var androidx_compose_runtime_internal_Trace$stable;
  function Trace() {
  }
  protoOf(Trace).u1d = function (name) {
    return null;
  };
  protoOf(Trace).f1e = function (token) {
  };
  var Trace_instance;
  function Trace_getInstance() {
    return Trace_instance;
  }
  var androidx_compose_runtime_internal_AtomicReference$stable;
  var androidx_compose_runtime_internal_AtomicInt$stable;
  function AtomicReference(value) {
    this.b1l_1 = atomic$ref$1(value);
  }
  protoOf(AtomicReference).bo = function () {
    return this.b1l_1.kotlinx$atomicfu$value;
  };
  protoOf(AtomicReference).n1n = function (value) {
    this.b1l_1.kotlinx$atomicfu$value = value;
  };
  protoOf(AtomicReference).c1l = function (value) {
    return this.b1l_1.atomicfu$getAndSet(value);
  };
  protoOf(AtomicReference).w1m = function (expect, newValue) {
    return this.b1l_1.atomicfu$compareAndSet(expect, newValue);
  };
  function AtomicInt(value) {
    this.s13_1 = atomic$int$1(value);
  }
  protoOf(AtomicInt).bo = function () {
    return this.s13_1.kotlinx$atomicfu$value;
  };
  protoOf(AtomicInt).t13 = function (value) {
    this.s13_1.kotlinx$atomicfu$value = value;
  };
  protoOf(AtomicInt).kw = function (amount) {
    return this.s13_1.atomicfu$addAndGet(amount);
  };
  protoOf(AtomicInt).k2i = function (expect, newValue) {
    return this.s13_1.atomicfu$compareAndSet(expect, newValue);
  };
  var androidx_compose_runtime_internal_PlatformOptimizedCancellationException$stable;
  function logError(message, e) {
    println(message);
    printStackTrace(e);
  }
  function invokeComposable(composer, composable) {
    var realFn = typeof composable === 'function' ? composable : THROW_CCE();
    realFn(composer, 1);
  }
  function PlatformOptimizedCancellationException(message) {
    message = message === VOID ? null : message;
    CancellationException_init_$Init$(message, this);
    captureStack(this, PlatformOptimizedCancellationException);
  }
  var androidx_compose_runtime_snapshots_SnapshotContextElementImpl$stable;
  function currentThreadId() {
    return new Long(0, 0);
  }
  var androidx_compose_runtime_internal_WeakReference$stable;
  function WeakReference(reference) {
    this.z2e_1 = reference;
  }
  protoOf(WeakReference).bo = function () {
    return this.z2e_1;
  };
  //region block: post-declaration
  protoOf(OffsetApplier).q12 = onBeginChanges;
  protoOf(OffsetApplier).r12 = onEndChanges;
  protoOf(OffsetApplier).y12 = apply;
  protoOf(OffsetApplier).z12 = reuse;
  protoOf(AbstractApplier).q12 = onBeginChanges;
  protoOf(AbstractApplier).r12 = onEndChanges;
  protoOf(AbstractApplier).y12 = apply;
  protoOf(AbstractApplier).z12 = reuse;
  protoOf(BroadcastFrameClock).d2 = get_key;
  protoOf(BroadcastFrameClock).i9 = get;
  protoOf(BroadcastFrameClock).wg = fold;
  protoOf(BroadcastFrameClock).vg = minusKey;
  protoOf(BroadcastFrameClock).xg = plus;
  defineProp(protoOf(ComposeRuntimeError), 'message', function () {
    return this.f1();
  });
  protoOf(StructuralEqualityPolicy).r1x = merge;
  protoOf(StateObjectImpl).g1y = mergeRecords;
  protoOf(SnapshotStateList).g1y = mergeRecords;
  protoOf(SnapshotStateMap).g1y = mergeRecords;
  protoOf(DefaultMonotonicFrameClock$1).d2 = get_key;
  protoOf(DefaultMonotonicFrameClock$1).i9 = get;
  protoOf(DefaultMonotonicFrameClock$1).wg = fold;
  protoOf(DefaultMonotonicFrameClock$1).vg = minusKey;
  protoOf(DefaultMonotonicFrameClock$1).xg = plus;
  //endregion
  //region block: init
  androidx_compose_runtime_AbstractApplier$stable = 8;
  androidx_compose_runtime_OffsetApplier$stable = 8;
  androidx_compose_runtime_BroadcastFrameClock$stable = 8;
  androidx_compose_runtime_ComposeRuntimeFlags$stable = 8;
  ComposeRuntimeFlags_instance = new ComposeRuntimeFlags();
  androidx_compose_runtime_ComposeVersion$stable = 0;
  ScopeInvalidated_instance = new ScopeInvalidated();
  androidx_compose_runtime_CompositionLocal$stable = 0;
  androidx_compose_runtime_ProvidableCompositionLocal$stable = 0;
  androidx_compose_runtime_DynamicProvidableCompositionLocal$stable = 0;
  androidx_compose_runtime_StaticProvidableCompositionLocal$stable = 0;
  androidx_compose_runtime_ComputedProvidableCompositionLocal$stable = 0;
  androidx_compose_runtime_CompositionLocalContext$stable = 0;
  androidx_compose_runtime_JoinedKey$stable = 8;
  androidx_compose_runtime_Latch$stable = 8;
  Key_instance_0 = new Key();
  androidx_compose_runtime_OpaqueKey$stable = 0;
  androidx_compose_runtime_PausedCompositionImpl$stable = 8;
  androidx_compose_runtime_RecordingApplier$stable = 8;
  androidx_compose_runtime_PausableMonotonicFrameClock$stable = 8;
  Companion_instance_2 = new Companion_1();
  Companion_instance_4 = new Companion_3();
  androidx_compose_runtime_SnapshotMutableDoubleStateImpl$stable = 0;
  androidx_compose_runtime_SnapshotMutableFloatStateImpl$stable = 0;
  androidx_compose_runtime_SnapshotMutableIntStateImpl$stable = 0;
  androidx_compose_runtime_SnapshotMutableLongStateImpl$stable = 0;
  StructuralEqualityPolicy_instance = new StructuralEqualityPolicy();
  androidx_compose_runtime_SnapshotMutableStateImpl$stable = 0;
  androidx_compose_runtime_UnboxedIntState$stable = 0;
  androidx_compose_runtime_UnboxedLongState$stable = 0;
  androidx_compose_runtime_UnboxedFloatState$stable = 0;
  androidx_compose_runtime_UnboxedDoubleState$stable = 0;
  androidx_compose_runtime_IntStack$stable = 8;
  androidx_compose_runtime_StaticValueHolder$stable = 0;
  androidx_compose_runtime_LazyValueHolder$stable = 8;
  androidx_compose_runtime_ComputedValueHolder$stable = 0;
  androidx_compose_runtime_DynamicValueHolder$stable = 0;
  androidx_compose_runtime_changelist_ChangeList$stable = 8;
  androidx_compose_runtime_changelist_ComposerChangeListWriter$stable = 8;
  Companion_instance_5 = new Companion_4();
  androidx_compose_runtime_changelist_FixupList$stable = 8;
  androidx_compose_runtime_changelist_Operation_Ups$stable = 0;
  androidx_compose_runtime_changelist_Operation_Downs$stable = 0;
  androidx_compose_runtime_changelist_Operation_AdvanceSlotsBy$stable = 0;
  androidx_compose_runtime_changelist_Operation_SideEffect$stable = 0;
  androidx_compose_runtime_changelist_Operation_Remember$stable = 0;
  androidx_compose_runtime_changelist_Operation_RememberPausingScope$stable = 0;
  androidx_compose_runtime_changelist_Operation_StartResumingScope$stable = 0;
  androidx_compose_runtime_changelist_Operation_EndResumingScope$stable = 0;
  androidx_compose_runtime_changelist_Operation_AppendValue$stable = 0;
  androidx_compose_runtime_changelist_Operation_TrimParentValues$stable = 0;
  androidx_compose_runtime_changelist_Operation_UpdateValue$stable = 0;
  androidx_compose_runtime_changelist_Operation_UpdateAnchoredValue$stable = 0;
  androidx_compose_runtime_changelist_Operation_UpdateAuxData$stable = 0;
  androidx_compose_runtime_changelist_Operation_EnsureRootGroupStarted$stable = 0;
  androidx_compose_runtime_changelist_Operation_EnsureGroupStarted$stable = 0;
  androidx_compose_runtime_changelist_Operation_RemoveCurrentGroup$stable = 0;
  androidx_compose_runtime_changelist_Operation_MoveCurrentGroup$stable = 0;
  androidx_compose_runtime_changelist_Operation_EndCurrentGroup$stable = 0;
  androidx_compose_runtime_changelist_Operation_SkipToEndOfCurrentGroup$stable = 0;
  androidx_compose_runtime_changelist_Operation_EndCompositionScope$stable = 0;
  androidx_compose_runtime_changelist_Operation_UseCurrentNode$stable = 0;
  androidx_compose_runtime_changelist_Operation_UpdateNode$stable = 0;
  androidx_compose_runtime_changelist_Operation_RemoveNode$stable = 0;
  androidx_compose_runtime_changelist_Operation_MoveNode$stable = 0;
  androidx_compose_runtime_changelist_Operation_InsertSlots$stable = 0;
  androidx_compose_runtime_changelist_Operation_InsertSlotsWithFixups$stable = 0;
  androidx_compose_runtime_changelist_Operation_InsertNodeFixup$stable = 0;
  androidx_compose_runtime_changelist_Operation_PostInsertNodeFixup$stable = 0;
  androidx_compose_runtime_changelist_Operation_DeactivateCurrentGroup$stable = 0;
  androidx_compose_runtime_changelist_Operation_ResetSlots$stable = 0;
  androidx_compose_runtime_changelist_Operation_DetermineMovableContentNodeIndex$stable = 0;
  androidx_compose_runtime_changelist_Operation_CopyNodesToNewAnchorLocation$stable = 0;
  androidx_compose_runtime_changelist_Operation_CopySlotTableToAnchorLocation$stable = 0;
  androidx_compose_runtime_changelist_Operation_EndMovableContentPlacement$stable = 0;
  androidx_compose_runtime_changelist_Operation_ReleaseMovableGroupAtCurrent$stable = 0;
  androidx_compose_runtime_changelist_Operation_ApplyChangeList$stable = 0;
  androidx_compose_runtime_changelist_Operation_TestOperation$stable = 8;
  androidx_compose_runtime_changelist_Operation$stable = 0;
  androidx_compose_runtime_changelist_Operations$stable = 8;
  androidx_compose_runtime_changelist_OperationsDebugStringFormattable$stable = 0;
  androidx_compose_runtime_collection_MutableVector$stable = 8;
  androidx_compose_runtime_collection_ScatterSetWrapper$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_adapters_ImmutableCollectionAdapter$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_adapters_ImmutableListAdapter$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_adapters_ImmutableSetAdapter$stable = 0;
  androidx_compose_runtime_external_kotlinx_collections_immutable_adapters_ImmutableMapAdapter$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableList_AbstractListIterator$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableList_SingleElementListIterator$stable = 0;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableList_AbstractPersistentList$stable = 0;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableList_BufferIterator$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableList_PersistentVector$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableList_PersistentVectorBuilder$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableList_PersistentVectorIterator$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableList_PersistentVectorMutableIterator$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableList_SmallPersistentVector$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableList_TrieIterator$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableList_ObjectRef$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableMap_PersistentHashMap$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableMap_PersistentHashMapBuilder$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableMap_TrieNodeMutableEntriesIterator$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableMap_PersistentHashMapBuilderBaseIterator$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableMap_PersistentHashMapBuilderEntriesIterator$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableMap_PersistentHashMapBuilderKeysIterator$stable = 0;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableMap_PersistentHashMapBuilderValuesIterator$stable = 0;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableMap_AbstractMapBuilderEntries$stable = 0;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableMap_PersistentHashMapBuilderEntries$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableMap_PersistentHashMapBuilderKeys$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableMap_PersistentHashMapBuilderValues$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableMap_TrieNodeBaseIterator$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableMap_TrieNodeKeysIterator$stable = 0;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableMap_TrieNodeValuesIterator$stable = 0;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableMap_TrieNodeEntriesIterator$stable = 0;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableMap_MapEntry$stable = 0;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableMap_PersistentHashMapBaseIterator$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableMap_PersistentHashMapEntriesIterator$stable = 0;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableMap_PersistentHashMapKeysIterator$stable = 0;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableMap_PersistentHashMapValuesIterator$stable = 0;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableMap_PersistentHashMapEntries$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableMap_PersistentHashMapKeys$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableMap_PersistentHashMapValues$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableMap_TrieNode_ModificationResult$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableMap_TrieNode$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableSet_PersistentHashSet$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableSet_PersistentHashSetBuilder$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableSet_PersistentHashSetIterator$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableSet_TrieNodeIterator$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableSet_PersistentHashSetMutableIterator$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_immutableSet_TrieNode$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_persistentOrderedMap_LinkedValue$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_persistentOrderedMap_PersistentOrderedMap$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_persistentOrderedMap_PersistentOrderedMapBuilder$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_persistentOrderedMap_PersistentOrderedMapBuilderLinksIterator$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_persistentOrderedMap_PersistentOrderedMapBuilderEntriesIterator$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_persistentOrderedMap_PersistentOrderedMapBuilderKeysIterator$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_persistentOrderedMap_PersistentOrderedMapBuilderValuesIterator$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_persistentOrderedMap_PersistentOrderedMapBuilderEntries$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_persistentOrderedMap_PersistentOrderedMapBuilderKeys$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_persistentOrderedMap_PersistentOrderedMapBuilderValues$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_persistentOrderedMap_PersistentOrderedMapLinksIterator$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_persistentOrderedMap_PersistentOrderedMapEntriesIterator$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_persistentOrderedMap_PersistentOrderedMapKeysIterator$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_persistentOrderedMap_PersistentOrderedMapValuesIterator$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_persistentOrderedMap_PersistentOrderedMapEntries$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_persistentOrderedMap_PersistentOrderedMapKeys$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_persistentOrderedMap_PersistentOrderedMapValues$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_persistentOrderedSet_Links$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_persistentOrderedSet_PersistentOrderedSet$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_persistentOrderedSet_PersistentOrderedSetBuilder$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_persistentOrderedSet_PersistentOrderedSetIterator$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_implementations_persistentOrderedSet_PersistentOrderedSetMutableIterator$stable = 8;
  androidx_compose_runtime_external_kotlinx_collections_immutable_internal_EndOfChain$stable = 0;
  EndOfChain_instance = new EndOfChain();
  androidx_compose_runtime_external_kotlinx_collections_immutable_internal_ListImplementation$stable = 0;
  ListImplementation_instance = new ListImplementation();
  androidx_compose_runtime_external_kotlinx_collections_immutable_internal_MutabilityOwnership$stable = 0;
  androidx_compose_runtime_external_kotlinx_collections_immutable_internal_DeltaCounter$stable = 8;
  androidx_compose_runtime_internal_IntRef$stable = 8;
  androidx_compose_runtime_internal_PersistentCompositionLocalHashMap_Builder$stable = 8;
  androidx_compose_runtime_internal_PersistentCompositionLocalHashMap$stable = 0;
  androidx_compose_runtime_internal_PausedCompositionRemembers$stable = 8;
  androidx_compose_runtime_internal_RememberEventDispatcher$stable = 8;
  Companion_instance_11 = new Companion_10();
  androidx_compose_runtime_snapshots_SnapshotDoubleIndexHeap$stable = 8;
  androidx_compose_runtime_snapshots_SnapshotIdSet$stable = 0;
  androidx_compose_runtime_snapshots_SnapshotStateObserver$stable = 8;
  androidx_compose_runtime_snapshots_SnapshotWeakSet$stable = 8;
  androidx_compose_runtime_snapshots_StateObjectImpl$stable = 8;
  Companion_instance_14 = new Companion_13();
  observers = null;
  androidx_compose_runtime_snapshots_tooling_SnapshotInstanceObservers$stable = 0;
  androidx_compose_runtime_snapshots_SnapshotIdArrayBuilder$stable = 8;
  MainThreadId = new Long(-1, -1);
  androidx_compose_runtime_internal_Trace$stable = 0;
  Trace_instance = new Trace();
  androidx_compose_runtime_internal_AtomicReference$stable = 8;
  androidx_compose_runtime_internal_AtomicInt$stable = 8;
  androidx_compose_runtime_internal_PlatformOptimizedCancellationException$stable = 0;
  androidx_compose_runtime_snapshots_SnapshotContextElementImpl$stable = 0;
  androidx_compose_runtime_internal_WeakReference$stable = 0;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = composableLambdaInstance;
  _.$_$.b = rememberComposableLambda;
  _.$_$.c = AbstractApplier;
  _.$_$.d = CompositionLocalProvider;
  _.$_$.e = ControlledComposition;
  _.$_$.f = get_DefaultMonotonicFrameClock;
  _.$_$.g = DisposableEffect_0;
  _.$_$.h = DisposableEffect_1;
  _.$_$.i = DisposableEffect;
  _.$_$.j = LaunchedEffect;
  _.$_$.k = LaunchedEffect_0;
  _.$_$.l = ProduceStateScope;
  _.$_$.m = Recomposer;
  _.$_$.n = androidx_compose_runtime_ProvidedValue$stableprop_getter;
  _.$_$.o = compositionLocalOf;
  _.$_$.p = invalidApplier;
  _.$_$.q = isTraceInProgress;
  _.$_$.r = mutableStateListOf;
  _.$_$.s = mutableStateMapOf;
  _.$_$.t = mutableStateOf;
  _.$_$.u = produceState;
  _.$_$.v = sourceInformationMarkerEnd;
  _.$_$.w = sourceInformationMarkerStart;
  _.$_$.x = staticCompositionLocalOf;
  _.$_$.y = traceEventEnd;
  _.$_$.z = traceEventStart;
  _.$_$.a1 = updateChangedFlags;
  _.$_$.b1 = _SkippableUpdater___init__impl__4ft0t9;
  _.$_$.c1 = _SkippableUpdater___get_composer__impl__6t7yne;
  _.$_$.d1 = _Updater___init__impl__rbfxm8;
  _.$_$.e1 = Updater__set_impl_v7kwss;
  _.$_$.f1 = Companion_instance_11;
  _.$_$.g1 = Companion_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-runtime-runtime.js.map
