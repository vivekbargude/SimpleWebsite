(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-atomicfu.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-atomicfu.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-coroutines-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-coroutines-core'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-coroutines-core'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'kotlinx-coroutines-core'.");
    }
    globalThis['kotlinx-coroutines-core'] = factory(typeof globalThis['kotlinx-coroutines-core'] === 'undefined' ? {} : globalThis['kotlinx-coroutines-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-atomicfu']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.lc;
  var THROW_CCE = kotlin_kotlin.$_$.tf;
  var Unit_getInstance = kotlin_kotlin.$_$.m4;
  var Continuation = kotlin_kotlin.$_$.ba;
  var initMetadataForClass = kotlin_kotlin.$_$.ib;
  var VOID = kotlin_kotlin.$_$.f;
  var Annotation = kotlin_kotlin.$_$.ef;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.v3;
  var Key_getInstance = kotlin_kotlin.$_$.u3;
  var equals = kotlin_kotlin.$_$.bb;
  var createCoroutineUnintercepted = kotlin_kotlin.$_$.t9;
  var toString = kotlin_kotlin.$_$.oc;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.e;
  var intercepted = kotlin_kotlin.$_$.u9;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.s9;
  var initMetadataForInterface = kotlin_kotlin.$_$.lb;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.c2;
  var isInterface = kotlin_kotlin.$_$.wb;
  var toString_0 = kotlin_kotlin.$_$.vg;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var initMetadataForObject = kotlin_kotlin.$_$.nb;
  var hashCode = kotlin_kotlin.$_$.hb;
  var CoroutineImpl = kotlin_kotlin.$_$.ia;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.kb;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.z;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.l2;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.n2;
  var Companion_getInstance = kotlin_kotlin.$_$.h4;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.k2;
  var createFailure = kotlin_kotlin.$_$.kg;
  var AbstractCoroutineContextKey = kotlin_kotlin.$_$.x9;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.w9;
  var get = kotlin_kotlin.$_$.y9;
  var minusKey = kotlin_kotlin.$_$.z9;
  var ContinuationInterceptor = kotlin_kotlin.$_$.aa;
  var Key = kotlin_kotlin.$_$.ga;
  var Element = kotlin_kotlin.$_$.fa;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var addSuppressed = kotlin_kotlin.$_$.gg;
  var THROW_IAE = kotlin_kotlin.$_$.uf;
  var enumEntries = kotlin_kotlin.$_$.ma;
  var Enum = kotlin_kotlin.$_$.if;
  var startCoroutine = kotlin_kotlin.$_$.la;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.og;
  var Long = kotlin_kotlin.$_$.nf;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.j;
  var RuntimeException = kotlin_kotlin.$_$.sf;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.z1;
  var captureStack = kotlin_kotlin.$_$.sa;
  var Error_0 = kotlin_kotlin.$_$.jf;
  var Error_init_$Init$ = kotlin_kotlin.$_$.h1;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.b1;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.e1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.ug;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.k;
  var CancellationException = kotlin_kotlin.$_$.r9;
  var ArrayList = kotlin_kotlin.$_$.v4;
  var SequenceScope = kotlin_kotlin.$_$.dd;
  var initMetadataForLambda = kotlin_kotlin.$_$.mb;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.t1;
  var sequence = kotlin_kotlin.$_$.kd;
  var plus = kotlin_kotlin.$_$.ha;
  var get_0 = kotlin_kotlin.$_$.da;
  var fold = kotlin_kotlin.$_$.ca;
  var minusKey_0 = kotlin_kotlin.$_$.ea;
  var anyToString = kotlin_kotlin.$_$.pa;
  var SuspendFunction1 = kotlin_kotlin.$_$.ja;
  var UnsupportedOperationException = kotlin_kotlin.$_$.fg;
  var objectCreate = kotlin_kotlin.$_$.kc;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.y;
  var atomicfu$AtomicRefArray$ofNulls = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var ensureNotNull = kotlin_kotlin.$_$.lg;
  var toLong = kotlin_kotlin.$_$.nc;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.n1;
  var atomic$long$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var listOf = kotlin_kotlin.$_$.y7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.l;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.v1;
  var compareTo = kotlin_kotlin.$_$.ya;
  var last = kotlin_kotlin.$_$.de;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.g2;
  var initMetadataForCompanion = kotlin_kotlin.$_$.jb;
  var IllegalStateException = kotlin_kotlin.$_$.mf;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.r1;
  var NoSuchElementException = kotlin_kotlin.$_$.of;
  var NoSuchElementException_init_$Init$ = kotlin_kotlin.$_$.w1;
  var getKClass = kotlin_kotlin.$_$.d;
  var Unit = kotlin_kotlin.$_$.eg;
  var copyOf = kotlin_kotlin.$_$.v6;
  var emptyList = kotlin_kotlin.$_$.a7;
  var listOf_0 = kotlin_kotlin.$_$.x7;
  var joinToString = kotlin_kotlin.$_$.o7;
  var startCoroutineUninterceptedOrReturnNonGeneratorVersion = kotlin_kotlin.$_$.v9;
  var NoSuchElementException_init_$Create$_0 = kotlin_kotlin.$_$.x1;
  var throwKotlinNothingValueException = kotlin_kotlin.$_$.tg;
  var Exception = kotlin_kotlin.$_$.kf;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.i1;
  var toLongOrNull = kotlin_kotlin.$_$.ue;
  var isSuspendFunction = kotlin_kotlin.$_$.ac;
  var KtList = kotlin_kotlin.$_$.f5;
  var Collection = kotlin_kotlin.$_$.w4;
  var plus_0 = kotlin_kotlin.$_$.l8;
  var getKClassFromExpression = kotlin_kotlin.$_$.c;
  var CancellationException_init_$Init$_0 = kotlin_kotlin.$_$.a1;
  var getStringHashCode = kotlin_kotlin.$_$.gb;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.q;
  var RuntimeException_init_$Init$_0 = kotlin_kotlin.$_$.y1;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.w;
  var removeFirstOrNull = kotlin_kotlin.$_$.n8;
  var asJsArrayView = kotlin_kotlin.$_$.l5;
  var asJsReadonlyArrayView = kotlin_kotlin.$_$.d5;
  var KtMutableList = kotlin_kotlin.$_$.n5;
  var coerceIn = kotlin_kotlin.$_$.uc;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.b2;
  //endregion
  //region block: pre-declaration
  function cancel$default(cause, $super) {
    cause = cause === VOID ? null : cause;
    var tmp;
    if ($super === VOID) {
      this.cancel_hkmm2i_k$(cause);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.cancel_hkmm2i_k$.call(this, cause);
    }
    return tmp;
  }
  function cancel() {
    return this.cancel_hkmm2i_k$(null);
  }
  function cancel$default_0(cause, $super) {
    cause = cause === VOID ? null : cause;
    return $super === VOID ? this.cancel_e74who_k$(cause) : $super.cancel_e74who_k$.call(this, cause);
  }
  function invokeOnCompletion$default(onCancelling, invokeImmediately, handler, $super) {
    onCancelling = onCancelling === VOID ? false : onCancelling;
    invokeImmediately = invokeImmediately === VOID ? true : invokeImmediately;
    return $super === VOID ? this.invokeOnCompletion_sct3wq_k$(onCancelling, invokeImmediately, handler) : $super.invokeOnCompletion_sct3wq_k$.call(this, onCancelling, invokeImmediately, handler);
  }
  function plus_1(other) {
    return other;
  }
  initMetadataForInterface(Job, 'Job', VOID, VOID, [Element], [0]);
  initMetadataForInterface(ChildJob, 'ChildJob', VOID, VOID, [Job], [0]);
  initMetadataForInterface(ParentJob, 'ParentJob', VOID, VOID, [Job], [0]);
  initMetadataForClass(JobSupport, 'JobSupport', VOID, VOID, [Job, ChildJob, ParentJob], [0]);
  initMetadataForInterface(CoroutineScope, 'CoroutineScope');
  initMetadataForClass(AbstractCoroutine, 'AbstractCoroutine', VOID, JobSupport, [JobSupport, Job, Continuation, CoroutineScope], [0]);
  initMetadataForClass(InternalCoroutinesApi, 'InternalCoroutinesApi', VOID, VOID, [Annotation]);
  initMetadataForClass(ExperimentalCoroutinesApi, 'ExperimentalCoroutinesApi', VOID, VOID, [Annotation]);
  initMetadataForClass(DelicateCoroutinesApi, 'DelicateCoroutinesApi', VOID, VOID, [Annotation]);
  initMetadataForClass(FlowPreview, 'FlowPreview', VOID, VOID, [Annotation]);
  initMetadataForClass(StandaloneCoroutine, 'StandaloneCoroutine', VOID, AbstractCoroutine, VOID, [0]);
  initMetadataForClass(LazyStandaloneCoroutine, 'LazyStandaloneCoroutine', VOID, StandaloneCoroutine, VOID, [0]);
  initMetadataForInterface(CoroutineStackFrame, 'CoroutineStackFrame');
  initMetadataForClass(ScopeCoroutine, 'ScopeCoroutine', VOID, AbstractCoroutine, [AbstractCoroutine, CoroutineStackFrame], [0]);
  initMetadataForClass(DispatchedCoroutine, 'DispatchedCoroutine', VOID, ScopeCoroutine, VOID, [0]);
  function tryResume$default(value, idempotent, $super) {
    idempotent = idempotent === VOID ? null : idempotent;
    return $super === VOID ? this.tryResume_8iaqti_k$(value, idempotent) : $super.tryResume_8iaqti_k$.call(this, value, idempotent);
  }
  function cancel$default_1(cause, $super) {
    cause = cause === VOID ? null : cause;
    return $super === VOID ? this.cancel_e74who_k$(cause) : $super.cancel_e74who_k$.call(this, cause);
  }
  initMetadataForInterface(CancellableContinuation, 'CancellableContinuation', VOID, VOID, [Continuation]);
  initMetadataForInterface(NotCompleted, 'NotCompleted');
  initMetadataForInterface(CancelHandler, 'CancelHandler', VOID, VOID, [NotCompleted]);
  initMetadataForClass(DisposeOnCancel, 'DisposeOnCancel', VOID, VOID, [CancelHandler]);
  initMetadataForInterface(Runnable, 'Runnable');
  initMetadataForClass(SchedulerTask, 'SchedulerTask', VOID, VOID, [Runnable]);
  initMetadataForClass(DispatchedTask, 'DispatchedTask', VOID, SchedulerTask);
  initMetadataForInterface(Waiter, 'Waiter');
  initMetadataForClass(CancellableContinuationImpl, 'CancellableContinuationImpl', VOID, DispatchedTask, [DispatchedTask, CancellableContinuation, CoroutineStackFrame, Waiter]);
  initMetadataForClass(UserSupplied, 'UserSupplied', VOID, VOID, [CancelHandler]);
  initMetadataForObject(Active, 'Active', VOID, VOID, [NotCompleted]);
  initMetadataForClass(CompletedContinuation, 'CompletedContinuation');
  initMetadataForInterface(Deferred, 'Deferred', VOID, VOID, [Job], [0]);
  initMetadataForInterface(CompletableDeferred, 'CompletableDeferred', VOID, VOID, [Deferred], [0]);
  initMetadataForCoroutine($awaitCOROUTINE$, CoroutineImpl);
  initMetadataForClass(CompletableDeferredImpl, 'CompletableDeferredImpl', VOID, JobSupport, [JobSupport, CompletableDeferred], [0]);
  initMetadataForInterface(CompletableJob, 'CompletableJob', VOID, VOID, [Job], [0]);
  initMetadataForInterface(InternalCompletionHandler, 'InternalCompletionHandler');
  initMetadataForClass(UserSupplied_0, 'UserSupplied', VOID, VOID, [InternalCompletionHandler]);
  initMetadataForClass(CompletedExceptionally, 'CompletedExceptionally');
  initMetadataForClass(CancelledContinuation, 'CancelledContinuation', VOID, CompletedExceptionally);
  initMetadataForClass(CompletedWithCancellation, 'CompletedWithCancellation');
  initMetadataForObject(Key_0, 'Key', VOID, AbstractCoroutineContextKey);
  initMetadataForClass(CoroutineDispatcher, 'CoroutineDispatcher', VOID, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, ContinuationInterceptor]);
  initMetadataForObject(Key_1, 'Key', VOID, VOID, [Key]);
  initMetadataForInterface(CoroutineExceptionHandler, 'CoroutineExceptionHandler', VOID, VOID, [Element]);
  initMetadataForClass(CoroutineStart, 'CoroutineStart', VOID, Enum);
  initMetadataForInterface(CopyableThrowable, 'CopyableThrowable');
  function delay(time, $completion) {
    if (time.compareTo_9jj042_k$(new Long(0, 0)) <= 0)
      return Unit_getInstance();
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.initCancellability_shqc60_k$();
    this.scheduleResumeAfterDelay_ohc91i_k$(time, cancellable);
    return cancellable.getResult_fck196_k$();
  }
  function invokeOnTimeout(timeMillis, block, context) {
    return get_DefaultDelay().invokeOnTimeout_x4e3ys_k$(timeMillis, block, context);
  }
  initMetadataForInterface(Delay, 'Delay', VOID, VOID, VOID, [1]);
  initMetadataForClass(EventLoop, 'EventLoop', VOID, CoroutineDispatcher);
  initMetadataForObject(ThreadLocalEventLoop, 'ThreadLocalEventLoop');
  initMetadataForClass(CompletionHandlerException, 'CompletionHandlerException', VOID, RuntimeException);
  initMetadataForClass(CoroutinesInternalError, 'CoroutinesInternalError', VOID, Error_0);
  initMetadataForInterface(DisposableHandle, 'DisposableHandle');
  initMetadataForObject(Key_2, 'Key', VOID, VOID, [Key]);
  initMetadataForInterface(ChildHandle, 'ChildHandle', VOID, VOID, [DisposableHandle]);
  initMetadataForObject(NonDisposableHandle, 'NonDisposableHandle', VOID, VOID, [DisposableHandle, ChildHandle]);
  initMetadataForInterface(Incomplete, 'Incomplete');
  initMetadataForClass(Empty, 'Empty', VOID, VOID, [Incomplete]);
  initMetadataForClass(LinkedListNode, 'LinkedListNode', LinkedListNode, VOID, [DisposableHandle]);
  initMetadataForClass(LinkedListHead, 'LinkedListHead', LinkedListHead, LinkedListNode);
  initMetadataForClass(NodeList, 'NodeList', NodeList, LinkedListHead, [LinkedListHead, Incomplete]);
  initMetadataForClass(JobNode, 'JobNode', VOID, LinkedListNode, [LinkedListNode, InternalCompletionHandler, DisposableHandle, Incomplete]);
  initMetadataForClass(SelectOnJoinCompletionHandler, 'SelectOnJoinCompletionHandler', VOID, JobNode);
  initMetadataForClass(SynchronizedObject, 'SynchronizedObject', SynchronizedObject);
  initMetadataForClass(Finishing, 'Finishing', VOID, SynchronizedObject, [SynchronizedObject, Incomplete]);
  initMetadataForClass(ChildCompletion, 'ChildCompletion', VOID, JobNode);
  initMetadataForClass(AwaitContinuation, 'AwaitContinuation', VOID, CancellableContinuationImpl);
  initMetadataForClass(SelectOnAwaitCompletionHandler, 'SelectOnAwaitCompletionHandler', VOID, JobNode);
  initMetadataForLambda(JobSupport$_get_children_$slambda_k839f8, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(JobCancellingNode, 'JobCancellingNode', VOID, JobNode);
  initMetadataForClass(InactiveNodeList, 'InactiveNodeList', VOID, VOID, [Incomplete]);
  initMetadataForClass(ChildHandleNode, 'ChildHandleNode', VOID, JobCancellingNode, [JobCancellingNode, ChildHandle]);
  initMetadataForClass(InvokeOnCancelling, 'InvokeOnCancelling', VOID, JobCancellingNode);
  initMetadataForClass(InvokeOnCompletion, 'InvokeOnCompletion', VOID, JobNode);
  initMetadataForClass(ResumeOnCompletion, 'ResumeOnCompletion', VOID, JobNode);
  initMetadataForClass(ResumeAwaitOnCompletion, 'ResumeAwaitOnCompletion', VOID, JobNode);
  initMetadataForClass(IncompleteStateBox, 'IncompleteStateBox');
  initMetadataForClass(ChildContinuation, 'ChildContinuation', VOID, JobCancellingNode);
  initMetadataForClass(JobImpl, 'JobImpl', VOID, JobSupport, [JobSupport, CompletableJob], [0]);
  initMetadataForClass(MainCoroutineDispatcher, 'MainCoroutineDispatcher', VOID, CoroutineDispatcher);
  initMetadataForClass(SupervisorJobImpl, 'SupervisorJobImpl', VOID, JobImpl, VOID, [0]);
  initMetadataForClass(TimeoutCancellationException, 'TimeoutCancellationException', VOID, CancellationException, [CancellationException, CopyableThrowable]);
  initMetadataForObject(Unconfined, 'Unconfined', VOID, CoroutineDispatcher);
  initMetadataForObject(Key_3, 'Key', VOID, VOID, [Key]);
  initMetadataForClass(YieldContext, 'YieldContext', YieldContext, AbstractCoroutineContextElement);
  initMetadataForClass(BufferOverflow, 'BufferOverflow', VOID, Enum);
  initMetadataForClass(ConcurrentLinkedListNode, 'ConcurrentLinkedListNode');
  initMetadataForClass(Segment, 'Segment', VOID, ConcurrentLinkedListNode, [ConcurrentLinkedListNode, NotCompleted]);
  initMetadataForClass(ChannelSegment, 'ChannelSegment', VOID, Segment);
  initMetadataForCoroutine($hasNextCOROUTINE$, CoroutineImpl);
  initMetadataForClass(SendBroadcast, 'SendBroadcast', VOID, VOID, [Waiter]);
  function next0($completion) {
    var tmp = new $next0COROUTINE$(this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  initMetadataForInterface(ChannelIterator, 'ChannelIterator', VOID, VOID, VOID, [0]);
  initMetadataForClass(BufferedChannelIterator, 'BufferedChannelIterator', VOID, VOID, [ChannelIterator, Waiter], [0, 3]);
  initMetadataForCoroutine($sendCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($receiveCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($receiveCatchingCOROUTINE$, CoroutineImpl);
  function close$default(cause, $super) {
    cause = cause === VOID ? null : cause;
    return $super === VOID ? this.close_ukldxa_k$(cause) : $super.close_ukldxa_k$.call(this, cause);
  }
  function offer(element) {
    var result = this.trySend_62dpg8_k$(element);
    if (_ChannelResult___get_isSuccess__impl__odq1z9(result))
      return true;
    var tmp0_elvis_lhs = ChannelResult__exceptionOrNull_impl_16ei30(result);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    throw recoverStackTrace_0(tmp);
  }
  initMetadataForInterface(SendChannel, 'SendChannel', VOID, VOID, VOID, [1]);
  function cancel$default_2(cause, $super) {
    cause = cause === VOID ? null : cause;
    var tmp;
    if ($super === VOID) {
      this.cancel_hkmm2i_k$(cause);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.cancel_hkmm2i_k$.call(this, cause);
    }
    return tmp;
  }
  function cancel_0() {
    return this.cancel_hkmm2i_k$(null);
  }
  function cancel$default_3(cause, $super) {
    cause = cause === VOID ? null : cause;
    return $super === VOID ? this.cancel_e74who_k$(cause) : $super.cancel_e74who_k$.call(this, cause);
  }
  function poll() {
    var result = this.tryReceive_y3ovg2_k$();
    if (_ChannelResult___get_isSuccess__impl__odq1z9(result))
      return ChannelResult__getOrThrow_impl_od1axs(result);
    var tmp0_elvis_lhs = ChannelResult__exceptionOrNull_impl_16ei30(result);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    throw recoverStackTrace_0(tmp);
  }
  function receiveOrNull($completion) {
    var tmp = new $receiveOrNullCOROUTINE$(this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function get_onReceiveOrNull() {
    return (this instanceof BufferedChannel ? this : THROW_CCE()).get_onReceiveOrNull_5u62it_k$();
  }
  initMetadataForInterface(ReceiveChannel, 'ReceiveChannel', VOID, VOID, VOID, [0]);
  initMetadataForInterface(Channel, 'Channel', VOID, VOID, [SendChannel, ReceiveChannel], [1, 0]);
  initMetadataForClass(BufferedChannel, 'BufferedChannel', VOID, VOID, [Channel], [1, 4, 0, 3]);
  initMetadataForClass(WaiterEB, 'WaiterEB');
  initMetadataForClass(ReceiveCatching, 'ReceiveCatching', VOID, VOID, [Waiter]);
  initMetadataForObject(Factory, 'Factory');
  initMetadataForClass(Failed, 'Failed', Failed);
  initMetadataForClass(Closed, 'Closed', VOID, Failed);
  initMetadataForCompanion(Companion);
  initMetadataForClass(ChannelResult, 'ChannelResult');
  initMetadataForCoroutine($next0COROUTINE$, CoroutineImpl);
  initMetadataForClass(ClosedSendChannelException, 'ClosedSendChannelException', VOID, IllegalStateException);
  initMetadataForClass(ClosedReceiveChannelException, 'ClosedReceiveChannelException', VOID, NoSuchElementException);
  initMetadataForCoroutine($receiveOrNullCOROUTINE$, CoroutineImpl);
  initMetadataForClass(ChannelCoroutine, 'ChannelCoroutine', VOID, AbstractCoroutine, [AbstractCoroutine, Channel], [0, 1]);
  initMetadataForClass(ConflatedBufferedChannel, 'ConflatedBufferedChannel', VOID, BufferedChannel, VOID, [1, 0]);
  initMetadataForInterface(ProducerScope, 'ProducerScope', VOID, VOID, [CoroutineScope, SendChannel], [1]);
  initMetadataForClass(ProducerCoroutine, 'ProducerCoroutine', VOID, ChannelCoroutine, [ChannelCoroutine, ProducerScope], [0, 1]);
  initMetadataForCoroutine($emitAllImplCOROUTINE$, CoroutineImpl);
  initMetadataForInterface(Flow, 'Flow', VOID, VOID, VOID, [1]);
  initMetadataForInterface(FlowCollector, 'FlowCollector', VOID, VOID, VOID, [1]);
  initMetadataForInterface(SharedFlow, 'SharedFlow', VOID, VOID, [Flow], [1]);
  initMetadataForInterface(MutableSharedFlow, 'MutableSharedFlow', VOID, VOID, [SharedFlow, FlowCollector], [1]);
  initMetadataForClass(Emitter, 'Emitter', VOID, VOID, [DisposableHandle]);
  initMetadataForCoroutine($collectCOROUTINE$, CoroutineImpl);
  initMetadataForClass(AbstractSharedFlow, 'AbstractSharedFlow', VOID, SynchronizedObject);
  initMetadataForInterface(CancellableFlow, 'CancellableFlow', VOID, VOID, [Flow], [1]);
  function fuse$default(context, capacity, onBufferOverflow, $super) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    capacity = capacity === VOID ? -3 : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    return $super === VOID ? this.fuse_gny1ac_k$(context, capacity, onBufferOverflow) : $super.fuse_gny1ac_k$.call(this, context, capacity, onBufferOverflow);
  }
  initMetadataForInterface(FusibleFlow, 'FusibleFlow', VOID, VOID, [Flow], [1]);
  initMetadataForClass(SharedFlowImpl, 'SharedFlowImpl', VOID, AbstractSharedFlow, [AbstractSharedFlow, MutableSharedFlow, CancellableFlow, FusibleFlow], [1]);
  initMetadataForClass(AbstractSharedFlowSlot, 'AbstractSharedFlowSlot');
  initMetadataForClass(SharedFlowSlot, 'SharedFlowSlot', SharedFlowSlot, AbstractSharedFlowSlot);
  initMetadataForInterface(StateFlow, 'StateFlow', VOID, VOID, [SharedFlow], [1]);
  initMetadataForInterface(MutableStateFlow, 'MutableStateFlow', VOID, VOID, [StateFlow, MutableSharedFlow], [1]);
  initMetadataForCoroutine($collectCOROUTINE$_0, CoroutineImpl);
  initMetadataForClass(StateFlowImpl, 'StateFlowImpl', VOID, AbstractSharedFlow, [AbstractSharedFlow, MutableStateFlow, CancellableFlow, FusibleFlow], [1]);
  initMetadataForClass(StateFlowSlot, 'StateFlowSlot', StateFlowSlot, AbstractSharedFlowSlot, VOID, [0]);
  initMetadataForClass(SubscriptionCountStateFlow, 'SubscriptionCountStateFlow', VOID, SharedFlowImpl, [StateFlow, SharedFlowImpl], [1]);
  initMetadataForClass(ChannelFlow, 'ChannelFlow', VOID, VOID, [FusibleFlow], [1]);
  initMetadataForClass(ChannelFlowOperator, 'ChannelFlowOperator', VOID, ChannelFlow, VOID, [1, 2]);
  initMetadataForClass(ChannelFlowOperatorImpl, 'ChannelFlowOperatorImpl', VOID, ChannelFlowOperator, VOID, [1]);
  initMetadataForLambda(ChannelFlowOperator$collectWithContextUndispatched$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForCoroutine($collectCOROUTINE$_1, CoroutineImpl);
  initMetadataForLambda(ChannelFlow$_get_collectToFun_$slambda_j53z2e, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(ChannelFlow$collect$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(UndispatchedContextCollector$emitRef$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(UndispatchedContextCollector, 'UndispatchedContextCollector', VOID, VOID, [FlowCollector], [1]);
  initMetadataForClass(StackFrameContinuation, 'StackFrameContinuation', VOID, VOID, [Continuation, CoroutineStackFrame]);
  initMetadataForObject(NopCollector, 'NopCollector', VOID, VOID, [FlowCollector], [1]);
  initMetadataForClass(unsafeFlow$1, VOID, VOID, VOID, [Flow], [1]);
  initMetadataForClass(SendingCollector, 'SendingCollector', VOID, VOID, [FlowCollector], [1]);
  initMetadataForClass(ThrowingCollector, 'ThrowingCollector', VOID, VOID, [FlowCollector], [1]);
  initMetadataForCoroutine($emitCOROUTINE$, CoroutineImpl);
  initMetadataForClass(takeWhile$$inlined$unsafeFlow$1$collect$2, VOID, VOID, VOID, [FlowCollector], [1]);
  initMetadataForCoroutine($collectCOROUTINE$_2, CoroutineImpl);
  initMetadataForClass(takeWhile$$inlined$unsafeFlow$1, VOID, VOID, VOID, [Flow], [1]);
  initMetadataForCoroutine($emitCOROUTINE$_0, CoroutineImpl);
  initMetadataForClass(collectWhile$collector$1, VOID, VOID, VOID, [FlowCollector], [1]);
  initMetadataForCoroutine($collectWhileCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($onSubscriptionCOROUTINE$, CoroutineImpl);
  initMetadataForClass(SubscribedFlowCollector, 'SubscribedFlowCollector', VOID, VOID, [FlowCollector], [1, 0]);
  initMetadataForCoroutine($emitCOROUTINE$_1, CoroutineImpl);
  initMetadataForClass(first$$inlined$collectWhile$1, VOID, VOID, VOID, [FlowCollector], [1]);
  initMetadataForCoroutine($firstCOROUTINE$, CoroutineImpl);
  initMetadataForClass(OpDescriptor, 'OpDescriptor');
  initMetadataForClass(AtomicOp, 'AtomicOp', VOID, OpDescriptor);
  initMetadataForClass(SegmentOrClosed, 'SegmentOrClosed');
  initMetadataForObject(ExceptionSuccessfullyProcessed, 'ExceptionSuccessfullyProcessed', VOID, Exception);
  initMetadataForClass(DispatchedContinuation, 'DispatchedContinuation', VOID, DispatchedTask, [DispatchedTask, CoroutineStackFrame, Continuation]);
  initMetadataForClass(InlineList, 'InlineList');
  initMetadataForClass(Worker, 'Worker', VOID, VOID, [Runnable]);
  initMetadataForClass(LimitedDispatcher, 'LimitedDispatcher', VOID, CoroutineDispatcher, [CoroutineDispatcher, Delay], [1]);
  initMetadataForClass(LockFreeTaskQueue, 'LockFreeTaskQueue');
  initMetadataForClass(Placeholder, 'Placeholder');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(LockFreeTaskQueueCore, 'LockFreeTaskQueueCore');
  initMetadataForClass(UndeliveredElementException, 'UndeliveredElementException', VOID, RuntimeException);
  initMetadataForClass(ContextScope, 'ContextScope', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(Symbol, 'Symbol');
  initMetadataForClass(OnTimeout$register$$inlined$Runnable$1, VOID, VOID, VOID, [Runnable]);
  initMetadataForClass(OnTimeout, 'OnTimeout');
  initMetadataForInterface(SelectClause, 'SelectClause');
  initMetadataForInterface(SelectClause0, 'SelectClause0', VOID, VOID, [SelectClause]);
  initMetadataForClass(SelectClause0Impl, 'SelectClause0Impl', VOID, VOID, [SelectClause0]);
  initMetadataForInterface(SelectInstance, 'SelectInstance');
  initMetadataForInterface(SelectClause1, 'SelectClause1', VOID, VOID, [SelectClause]);
  initMetadataForClass(SelectClause1Impl, 'SelectClause1Impl', VOID, VOID, [SelectClause1]);
  initMetadataForCoroutine($invokeBlockCOROUTINE$, CoroutineImpl);
  initMetadataForClass(ClauseData, 'ClauseData', VOID, VOID, VOID, [1]);
  initMetadataForCoroutine($doSelectCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($doSelectSuspendCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($completeCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($processResultAndInvokeBlockRecoveringExceptionCOROUTINE$, CoroutineImpl);
  function invoke(_this__u8e3s4, block) {
    return this.invoke_13uk3f_k$(_this__u8e3s4, null, block);
  }
  function onTimeout(timeMillis, block) {
    return onTimeout_0(this, timeMillis, block);
  }
  initMetadataForInterface(SelectBuilder, 'SelectBuilder');
  initMetadataForInterface(SelectInstanceInternal, 'SelectInstanceInternal', VOID, VOID, [SelectInstance, Waiter]);
  initMetadataForClass(SelectImplementation, 'SelectImplementation', VOID, VOID, [CancelHandler, SelectBuilder, SelectInstanceInternal], [0, 2]);
  initMetadataForClass(TrySelectDetailedResult, 'TrySelectDetailedResult', VOID, Enum);
  initMetadataForInterface(SelectClause2, 'SelectClause2', VOID, VOID, [SelectClause]);
  initMetadataForClass(SelectClause2Impl, 'SelectClause2Impl', VOID, VOID, [SelectClause2]);
  initMetadataForClass(UndispatchedCoroutine, 'UndispatchedCoroutine', VOID, ScopeCoroutine, VOID, [0]);
  initMetadataForClass(SetTimeoutBasedDispatcher, 'SetTimeoutBasedDispatcher', VOID, CoroutineDispatcher, [CoroutineDispatcher, Delay], [1]);
  initMetadataForObject(NodeDispatcher, 'NodeDispatcher', VOID, SetTimeoutBasedDispatcher, VOID, [1]);
  initMetadataForClass(MessageQueue, 'MessageQueue', VOID, VOID, [KtMutableList]);
  initMetadataForClass(ScheduledMessageQueue, 'ScheduledMessageQueue', VOID, MessageQueue);
  initMetadataForClass(WindowMessageQueue, 'WindowMessageQueue', VOID, MessageQueue);
  initMetadataForObject(Dispatchers, 'Dispatchers');
  initMetadataForClass(JsMainDispatcher, 'JsMainDispatcher', VOID, MainCoroutineDispatcher);
  initMetadataForClass(UnconfinedEventLoop, 'UnconfinedEventLoop', UnconfinedEventLoop, EventLoop);
  initMetadataForClass(JobCancellationException, 'JobCancellationException', VOID, CancellationException);
  initMetadataForClass(Runnable$1, VOID, VOID, VOID, [Runnable]);
  initMetadataForInterface(SchedulerTaskContext, 'SchedulerTaskContext');
  initMetadataForObject(TaskContext, 'TaskContext', VOID, VOID, [SchedulerTaskContext]);
  initMetadataForClass(AbortFlowException, 'AbortFlowException', VOID, CancellationException);
  initMetadataForClass(SafeCollector, 'SafeCollector', VOID, VOID, [FlowCollector], [1]);
  initMetadataForClass(WorkaroundAtomicReference, 'WorkaroundAtomicReference');
  initMetadataForClass(DiagnosticCoroutineContextException, 'DiagnosticCoroutineContextException', VOID, RuntimeException);
  initMetadataForObject(SetTimeoutDispatcher, 'SetTimeoutDispatcher', VOID, SetTimeoutBasedDispatcher, VOID, [1]);
  initMetadataForClass(ClearTimeout, 'ClearTimeout', VOID, VOID, [CancelHandler, DisposableHandle]);
  initMetadataForClass(WindowClearTimeout, 'WindowClearTimeout', VOID, ClearTimeout);
  initMetadataForClass(WindowDispatcher, 'WindowDispatcher', VOID, CoroutineDispatcher, [CoroutineDispatcher, Delay], [1]);
  initMetadataForClass(CommonThreadLocal, 'CommonThreadLocal', CommonThreadLocal);
  //endregion
  function AbstractCoroutine(parentContext, initParentJob, active) {
    JobSupport.call(this, active);
    if (initParentJob) {
      this.initParentJob_jbhsg3_k$(parentContext.get_y2st91_k$(Key_getInstance_2()));
    }
    this.context_1 = parentContext.plus_s13ygv_k$(this);
  }
  protoOf(AbstractCoroutine).get_context_h02k06_k$ = function () {
    return this.context_1;
  };
  protoOf(AbstractCoroutine).get_coroutineContext_115oqo_k$ = function () {
    return this.context_1;
  };
  protoOf(AbstractCoroutine).get_isActive_quafmh_k$ = function () {
    return protoOf(JobSupport).get_isActive_quafmh_k$.call(this);
  };
  protoOf(AbstractCoroutine).onCompleted_whnx9v_k$ = function (value) {
  };
  protoOf(AbstractCoroutine).onCancelled_gb68wi_k$ = function (cause, handled) {
  };
  protoOf(AbstractCoroutine).cancellationExceptionMessage_a64063_k$ = function () {
    return get_classSimpleName(this) + ' was cancelled';
  };
  protoOf(AbstractCoroutine).onCompletionInternal_38s8uv_k$ = function (state) {
    if (state instanceof CompletedExceptionally) {
      this.onCancelled_gb68wi_k$(state.get_cause_iplhs0_k$(), state.get_handled_cq14k3_k$());
    } else {
      this.onCompleted_whnx9v_k$((state == null ? true : !(state == null)) ? state : THROW_CCE());
    }
  };
  protoOf(AbstractCoroutine).resumeWith_dtxwbr_k$ = function (result) {
    var state = this.makeCompletingOnce_m8ggg9_k$(toState_0(result));
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return Unit_getInstance();
    this.afterResume_ugh2hm_k$(state);
  };
  protoOf(AbstractCoroutine).afterResume_ugh2hm_k$ = function (state) {
    return this.afterCompletion_2p0irt_k$(state);
  };
  protoOf(AbstractCoroutine).handleOnCompletionException_l1g6ri_k$ = function (exception) {
    handleCoroutineException(this.context_1, exception);
  };
  protoOf(AbstractCoroutine).nameString_4rfuxd_k$ = function () {
    var tmp0_elvis_lhs = get_coroutineName(this.context_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return protoOf(JobSupport).nameString_4rfuxd_k$.call(this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var coroutineName = tmp;
    return '"' + coroutineName + '":' + protoOf(JobSupport).nameString_4rfuxd_k$.call(this);
  };
  protoOf(AbstractCoroutine).start_rn6v44_k$ = function (start, receiver, block) {
    start.invoke_neaz0o_k$(block, receiver, this);
  };
  function InternalCoroutinesApi() {
  }
  protoOf(InternalCoroutinesApi).equals = function (other) {
    if (!(other instanceof InternalCoroutinesApi))
      return false;
    other instanceof InternalCoroutinesApi || THROW_CCE();
    return true;
  };
  protoOf(InternalCoroutinesApi).hashCode = function () {
    return 0;
  };
  protoOf(InternalCoroutinesApi).toString = function () {
    return '@kotlinx.coroutines.InternalCoroutinesApi(' + ')';
  };
  function ExperimentalCoroutinesApi() {
  }
  protoOf(ExperimentalCoroutinesApi).equals = function (other) {
    if (!(other instanceof ExperimentalCoroutinesApi))
      return false;
    other instanceof ExperimentalCoroutinesApi || THROW_CCE();
    return true;
  };
  protoOf(ExperimentalCoroutinesApi).hashCode = function () {
    return 0;
  };
  protoOf(ExperimentalCoroutinesApi).toString = function () {
    return '@kotlinx.coroutines.ExperimentalCoroutinesApi(' + ')';
  };
  function DelicateCoroutinesApi() {
  }
  protoOf(DelicateCoroutinesApi).equals = function (other) {
    if (!(other instanceof DelicateCoroutinesApi))
      return false;
    other instanceof DelicateCoroutinesApi || THROW_CCE();
    return true;
  };
  protoOf(DelicateCoroutinesApi).hashCode = function () {
    return 0;
  };
  protoOf(DelicateCoroutinesApi).toString = function () {
    return '@kotlinx.coroutines.DelicateCoroutinesApi(' + ')';
  };
  function FlowPreview() {
  }
  protoOf(FlowPreview).equals = function (other) {
    if (!(other instanceof FlowPreview))
      return false;
    other instanceof FlowPreview || THROW_CCE();
    return true;
  };
  protoOf(FlowPreview).hashCode = function () {
    return 0;
  };
  protoOf(FlowPreview).toString = function () {
    return '@kotlinx.coroutines.FlowPreview(' + ')';
  };
  function launch(_this__u8e3s4, context, start, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.get_isLazy_ew1d53_k$() ? new LazyStandaloneCoroutine(newContext, block) : new StandaloneCoroutine(newContext, true);
    coroutine.start_rn6v44_k$(start, coroutine, block);
    return coroutine;
  }
  function withContext(context, block, $completion) {
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    $l$block_0: {
      var oldContext = $completion.get_context_h02k06_k$();
      var newContext = newCoroutineContext_0(oldContext, context);
      ensureActive(newContext);
      if (newContext === oldContext) {
        var coroutine = new ScopeCoroutine(newContext, $completion);
        tmp$ret$1 = startUndispatchedOrReturn(coroutine, coroutine, block);
        break $l$block_0;
      }
      if (equals(newContext.get_y2st91_k$(Key_getInstance()), oldContext.get_y2st91_k$(Key_getInstance()))) {
        var coroutine_0 = new UndispatchedCoroutine(newContext, $completion);
        // Inline function 'kotlinx.coroutines.withCoroutineContext' call
        coroutine_0.get_context_h02k06_k$();
        tmp$ret$1 = startUndispatchedOrReturn(coroutine_0, coroutine_0, block);
        break $l$block_0;
      }
      var coroutine_1 = new DispatchedCoroutine(newContext, $completion);
      startCoroutineCancellable(block, coroutine_1, coroutine_1);
      tmp$ret$1 = coroutine_1.getResult_fck196_k$();
    }
    return tmp$ret$1;
  }
  function StandaloneCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  protoOf(StandaloneCoroutine).handleJobException_9fdet1_k$ = function (exception) {
    handleCoroutineException(this.get_context_h02k06_k$(), exception);
    return true;
  };
  function _get_continuation__y3gzck($this) {
    return $this.continuation_1;
  }
  function LazyStandaloneCoroutine(parentContext, block) {
    StandaloneCoroutine.call(this, parentContext, false);
    this.continuation_1 = createCoroutineUnintercepted(block, this, this);
  }
  protoOf(LazyStandaloneCoroutine).onStart_qsx7gt_k$ = function () {
    startCoroutineCancellable_0(this.continuation_1, this);
  };
  function trySuspend($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this._decision_1;
    while (true) {
      switch (this_0.get_kotlinx$atomicfu$value_vi2am5_k$()) {
        case 0:
          if ($this._decision_1.atomicfu$compareAndSet(0, 1))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already suspended';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function tryResume($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this._decision_1;
    while (true) {
      switch (this_0.get_kotlinx$atomicfu$value_vi2am5_k$()) {
        case 0:
          if ($this._decision_1.atomicfu$compareAndSet(0, 2))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already resumed';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function DispatchedCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
    this._decision_1 = atomic$int$1(0);
  }
  protoOf(DispatchedCoroutine).get__decision_jd88sy_k$ = function () {
    return this._decision_1;
  };
  protoOf(DispatchedCoroutine).afterCompletion_2p0irt_k$ = function (state) {
    this.afterResume_ugh2hm_k$(state);
  };
  protoOf(DispatchedCoroutine).afterResume_ugh2hm_k$ = function (state) {
    if (tryResume(this))
      return Unit_getInstance();
    resumeCancellableWith(intercepted(this.get_uCont_iyyiam_k$()), recoverResult(state, this.get_uCont_iyyiam_k$()));
  };
  protoOf(DispatchedCoroutine).getResult_fck196_k$ = function () {
    if (trySuspend(this))
      return get_COROUTINE_SUSPENDED();
    var state = unboxState(this.get_state_2t6sbp_k$());
    if (state instanceof CompletedExceptionally)
      throw state.get_cause_iplhs0_k$();
    return (state == null ? true : !(state == null)) ? state : THROW_CCE();
  };
  function get_UNDECIDED() {
    return UNDECIDED;
  }
  var UNDECIDED;
  function get_SUSPENDED() {
    return SUSPENDED;
  }
  var SUSPENDED;
  function get_RESUMED() {
    return RESUMED;
  }
  var RESUMED;
  function suspendCancellableCoroutine(block, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.initCancellability_shqc60_k$();
    block(cancellable);
    return cancellable.getResult_fck196_k$();
  }
  function CancellableContinuation() {
  }
  function disposeOnCancellation(_this__u8e3s4, handle) {
    return invokeOnCancellation(_this__u8e3s4, new DisposeOnCancel(handle));
  }
  function suspendCancellableCoroutineReusable(block, $completion) {
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      block(cancellable);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.releaseClaimedReusableContinuation_mdg0s9_k$();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.getResult_fck196_k$();
  }
  function invokeOnCancellation(_this__u8e3s4, handler) {
    var tmp;
    if (_this__u8e3s4 instanceof CancellableContinuationImpl) {
      _this__u8e3s4.invokeOnCancellationInternal_vx7l43_k$(handler);
      tmp = Unit_getInstance();
    } else {
      throw UnsupportedOperationException_init_$Create$('third-party implementation of CancellableContinuation is not supported');
    }
    return tmp;
  }
  function _get_handle__ls055p($this) {
    return $this.handle_1;
  }
  function DisposeOnCancel(handle) {
    this.handle_1 = handle;
  }
  protoOf(DisposeOnCancel).invoke_py2q9a_k$ = function (cause) {
    return this.handle_1.dispose_3nnxhr_k$();
  };
  protoOf(DisposeOnCancel).toString = function () {
    return 'DisposeOnCancel[' + toString(this.handle_1) + ']';
  };
  function getOrCreateCancellableContinuation(delegate) {
    if (!(delegate instanceof DispatchedContinuation)) {
      return new CancellableContinuationImpl(delegate, 1);
    }
    var tmp0_safe_receiver = delegate.claimReusableCancellableContinuation_924qwh_k$();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      var tmp_0;
      if (tmp0_safe_receiver.resetStateReusable_ptatgg_k$()) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      return new CancellableContinuationImpl(delegate, 2);
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function get_RESUME_TOKEN() {
    _init_properties_CancellableContinuationImpl_kt__6rrtdd();
    return RESUME_TOKEN;
  }
  var RESUME_TOKEN;
  function _get__decisionAndIndex__k6ut8l($this) {
    return $this._decisionAndIndex_1;
  }
  function _get__state__37adl3($this) {
    return $this._state_1;
  }
  function _get__parentHandle__f9kzhc($this) {
    return $this._parentHandle_1;
  }
  function _get_parentHandle__f8dcex($this) {
    return $this._parentHandle_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  }
  function _get_stateDebugRepresentation__bf18u4($this) {
    var tmp0_subject = $this.get_state_2t6sbp_k$();
    var tmp;
    if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
      tmp = 'Active';
    } else {
      if (tmp0_subject instanceof CancelledContinuation) {
        tmp = 'Cancelled';
      } else {
        tmp = 'Completed';
      }
    }
    return tmp;
  }
  function isReusable($this) {
    var tmp;
    if (get_isReusableMode($this.get_resumeMode_te1i4n_k$())) {
      var tmp_0 = $this.delegate_1;
      tmp = (tmp_0 instanceof DispatchedContinuation ? tmp_0 : THROW_CCE()).isReusable_asltyw_k$();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function cancelLater($this, cause) {
    if (!isReusable($this))
      return false;
    var tmp = $this.delegate_1;
    var dispatched = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
    return dispatched.postponeCancellation_hjv3hh_k$(cause);
  }
  function callCancelHandlerSafely($this, block) {
    try {
      block();
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException($this.get_context_h02k06_k$(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + $this.toString(), ex));
      } else {
        throw $p;
      }
    }
  }
  function callCancelHandler($this, handler, cause) {
    // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callCancelHandlerSafely' call
    try {
      handler.invoke_py2q9a_k$(cause);
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException($this.get_context_h02k06_k$(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + $this.toString(), ex));
      } else {
        throw $p;
      }
    }
    return Unit_getInstance();
  }
  function callSegmentOnCancellation($this, segment, cause) {
    // Inline function 'kotlinx.coroutines.index' call
    var index = $this._decisionAndIndex_1.get_kotlinx$atomicfu$value_vi2am5_k$() & 536870911;
    // Inline function 'kotlin.check' call
    if (!!(index === 536870911)) {
      var message = 'The index for Segment.onCancellation(..) is broken';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callCancelHandlerSafely' call
    try {
      segment.onCancellation_4jec3b_k$(index, cause, $this.get_context_h02k06_k$());
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException($this.get_context_h02k06_k$(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + $this.toString(), ex));
      } else {
        throw $p;
      }
    }
  }
  function trySuspend_0($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this._decisionAndIndex_1;
    while (true) {
      var cur = this_0.get_kotlinx$atomicfu$value_vi2am5_k$();
      // Inline function 'kotlinx.coroutines.decision' call
      switch (cur >> 29) {
        case 0:
          // Inline function 'kotlinx.coroutines.index' call

          // Inline function 'kotlinx.coroutines.decisionAndIndex' call

          var tmp$ret$2 = (1 << 29) + (cur & 536870911) | 0;
          if ($this._decisionAndIndex_1.atomicfu$compareAndSet(cur, tmp$ret$2))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already suspended';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function tryResume_0($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this._decisionAndIndex_1;
    while (true) {
      var cur = this_0.get_kotlinx$atomicfu$value_vi2am5_k$();
      // Inline function 'kotlinx.coroutines.decision' call
      switch (cur >> 29) {
        case 0:
          // Inline function 'kotlinx.coroutines.index' call

          // Inline function 'kotlinx.coroutines.decisionAndIndex' call

          var tmp$ret$2 = (2 << 29) + (cur & 536870911) | 0;
          if ($this._decisionAndIndex_1.atomicfu$compareAndSet(cur, tmp$ret$2))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already resumed';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function installParentHandle($this) {
    var tmp0_elvis_lhs = $this.get_context_h02k06_k$().get_y2st91_k$(Key_getInstance_2());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    var handle = invokeOnCompletion(parent, true, VOID, new ChildContinuation($this));
    $this._parentHandle_1.atomicfu$compareAndSet(null, handle);
    return handle;
  }
  function invokeOnCancellationImpl($this, handler) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this._state_1;
    while (true) {
      var state = this_0.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (state instanceof Active) {
        if ($this._state_1.atomicfu$compareAndSet(state, handler))
          return Unit_getInstance();
      } else {
        var tmp;
        if (!(state == null) ? isInterface(state, CancelHandler) : false) {
          tmp = true;
        } else {
          tmp = state instanceof Segment;
        }
        if (tmp) {
          multipleHandlersError($this, handler, state);
        } else {
          if (state instanceof CompletedExceptionally) {
            if (!state.makeHandled_ws9oq6_k$()) {
              multipleHandlersError($this, handler, state);
            }
            if (state instanceof CancelledContinuation) {
              var tmp1_safe_receiver = state instanceof CompletedExceptionally ? state : null;
              var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_cause_iplhs0_k$();
              if (isInterface(handler, CancelHandler)) {
                $this.callCancelHandler_e6l0np_k$(handler, cause);
              } else {
                var segment = handler instanceof Segment ? handler : THROW_CCE();
                callSegmentOnCancellation($this, segment, cause);
              }
            }
            return Unit_getInstance();
          } else {
            if (state instanceof CompletedContinuation) {
              if (!(state.cancelHandler_1 == null)) {
                multipleHandlersError($this, handler, state);
              }
              if (handler instanceof Segment)
                return Unit_getInstance();
              if (!isInterface(handler, CancelHandler))
                THROW_CCE();
              if (state.get_cancelled_ge9r54_k$()) {
                $this.callCancelHandler_e6l0np_k$(handler, state.cancelCause_1);
                return Unit_getInstance();
              }
              var update = state.copy$default_wexsgh_k$(VOID, handler);
              if ($this._state_1.atomicfu$compareAndSet(state, update))
                return Unit_getInstance();
            } else {
              if (handler instanceof Segment)
                return Unit_getInstance();
              if (!isInterface(handler, CancelHandler))
                THROW_CCE();
              var update_0 = new CompletedContinuation(state, handler);
              if ($this._state_1.atomicfu$compareAndSet(state, update_0))
                return Unit_getInstance();
            }
          }
        }
      }
    }
  }
  function multipleHandlersError($this, handler, state) {
    // Inline function 'kotlin.error' call
    var message = "It's prohibited to register multiple handlers, tried to register " + toString(handler) + ', already has ' + toString_0(state);
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function dispatchResume($this, mode) {
    if (tryResume_0($this))
      return Unit_getInstance();
    dispatch($this, mode);
  }
  function resumedState($this, state, proposedUpdate, resumeMode, onCancellation, idempotent) {
    var tmp;
    if (proposedUpdate instanceof CompletedExceptionally) {
      // Inline function 'kotlinx.coroutines.assert' call
      // Inline function 'kotlinx.coroutines.assert' call
      tmp = proposedUpdate;
    } else {
      if (!get_isCancellableMode(resumeMode) && idempotent == null) {
        tmp = proposedUpdate;
      } else {
        var tmp_0;
        var tmp_1;
        if (!(onCancellation == null)) {
          tmp_1 = true;
        } else {
          tmp_1 = isInterface(state, CancelHandler);
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = !(idempotent == null);
        }
        if (tmp_0) {
          tmp = new CompletedContinuation(proposedUpdate, isInterface(state, CancelHandler) ? state : null, onCancellation, idempotent);
        } else {
          tmp = proposedUpdate;
        }
      }
    }
    return tmp;
  }
  function resumeImpl($this, proposedUpdate, resumeMode, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this._state_1;
    while (true) {
      var tmp0 = this_0.get_kotlinx$atomicfu$value_vi2am5_k$();
      $l$block: {
        if (!(tmp0 == null) ? isInterface(tmp0, NotCompleted) : false) {
          var update = resumedState($this, tmp0, proposedUpdate, resumeMode, onCancellation, null);
          if (!$this._state_1.atomicfu$compareAndSet(tmp0, update)) {
            break $l$block;
          }
          detachChildIfNonResuable($this);
          dispatchResume($this, resumeMode);
          return Unit_getInstance();
        } else {
          if (tmp0 instanceof CancelledContinuation) {
            if (tmp0.makeResumed_vjvawn_k$()) {
              if (onCancellation == null)
                null;
              else {
                // Inline function 'kotlin.let' call
                $this.callOnCancellation_kwfdrp_k$(onCancellation, tmp0.get_cause_iplhs0_k$());
              }
              return Unit_getInstance();
            }
          }
        }
        alreadyResumedError($this, proposedUpdate);
      }
    }
  }
  function resumeImpl$default($this, proposedUpdate, resumeMode, onCancellation, $super) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    return resumeImpl($this, proposedUpdate, resumeMode, onCancellation);
  }
  function tryResumeImpl($this, proposedUpdate, idempotent, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this._state_1;
    while (true) {
      var tmp0 = this_0.get_kotlinx$atomicfu$value_vi2am5_k$();
      $l$block: {
        if (!(tmp0 == null) ? isInterface(tmp0, NotCompleted) : false) {
          var update = resumedState($this, tmp0, proposedUpdate, $this.get_resumeMode_te1i4n_k$(), onCancellation, idempotent);
          if (!$this._state_1.atomicfu$compareAndSet(tmp0, update)) {
            break $l$block;
          }
          detachChildIfNonResuable($this);
          return get_RESUME_TOKEN();
        } else {
          if (tmp0 instanceof CompletedContinuation) {
            var tmp;
            if (!(idempotent == null) && tmp0.idempotentResume_1 === idempotent) {
              // Inline function 'kotlinx.coroutines.assert' call
              tmp = get_RESUME_TOKEN();
            } else {
              tmp = null;
            }
            return tmp;
          } else {
            return null;
          }
        }
      }
    }
  }
  function alreadyResumedError($this, proposedUpdate) {
    // Inline function 'kotlin.error' call
    var message = 'Already resumed, but proposed with update ' + toString_0(proposedUpdate);
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function detachChildIfNonResuable($this) {
    if (!isReusable($this)) {
      $this.detachChild_85lap8_k$();
    }
  }
  function CancellableContinuationImpl(delegate, resumeMode) {
    DispatchedTask.call(this, resumeMode);
    this.delegate_1 = delegate;
    // Inline function 'kotlinx.coroutines.assert' call
    this.context_1 = this.delegate_1.get_context_h02k06_k$();
    var tmp = this;
    // Inline function 'kotlinx.coroutines.decisionAndIndex' call
    var tmp$ret$1 = (0 << 29) + 536870911 | 0;
    tmp._decisionAndIndex_1 = atomic$int$1(tmp$ret$1);
    this._state_1 = atomic$ref$1(Active_getInstance());
    this._parentHandle_1 = atomic$ref$1(null);
  }
  protoOf(CancellableContinuationImpl).get_delegate_hasf9b_k$ = function () {
    return this.delegate_1;
  };
  protoOf(CancellableContinuationImpl).get_context_h02k06_k$ = function () {
    return this.context_1;
  };
  protoOf(CancellableContinuationImpl).get_state_2t6sbp_k$ = function () {
    return this._state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  };
  protoOf(CancellableContinuationImpl).get_isActive_quafmh_k$ = function () {
    var tmp = this.get_state_2t6sbp_k$();
    return !(tmp == null) ? isInterface(tmp, NotCompleted) : false;
  };
  protoOf(CancellableContinuationImpl).get_isCompleted_a6j6c8_k$ = function () {
    var tmp = this.get_state_2t6sbp_k$();
    return !(!(tmp == null) ? isInterface(tmp, NotCompleted) : false);
  };
  protoOf(CancellableContinuationImpl).get_isCancelled_trk8pu_k$ = function () {
    var tmp = this.get_state_2t6sbp_k$();
    return tmp instanceof CancelledContinuation;
  };
  protoOf(CancellableContinuationImpl).initCancellability_shqc60_k$ = function () {
    var tmp0_elvis_lhs = installParentHandle(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    if (this.get_isCompleted_a6j6c8_k$()) {
      handle.dispose_3nnxhr_k$();
      this._parentHandle_1.set_kotlinx$atomicfu$value_508e3y_k$(NonDisposableHandle_getInstance());
    }
  };
  protoOf(CancellableContinuationImpl).resetStateReusable_ptatgg_k$ = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var state = this._state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp;
    if (state instanceof CompletedContinuation) {
      tmp = !(state.idempotentResume_1 == null);
    } else {
      tmp = false;
    }
    if (tmp) {
      this.detachChild_85lap8_k$();
      return false;
    }
    // Inline function 'kotlinx.coroutines.decisionAndIndex' call
    var tmp$ret$3 = (0 << 29) + 536870911 | 0;
    this._decisionAndIndex_1.set_kotlinx$atomicfu$value_nm6d3_k$(tmp$ret$3);
    this._state_1.set_kotlinx$atomicfu$value_508e3y_k$(Active_getInstance());
    return true;
  };
  protoOf(CancellableContinuationImpl).get_callerFrame_pfdb95_k$ = function () {
    var tmp = this.delegate_1;
    return isInterface(tmp, CoroutineStackFrame) ? tmp : null;
  };
  protoOf(CancellableContinuationImpl).getStackTraceElement_um8m53_k$ = function () {
    return null;
  };
  protoOf(CancellableContinuationImpl).takeState_a1bv3x_k$ = function () {
    return this.get_state_2t6sbp_k$();
  };
  protoOf(CancellableContinuationImpl).cancelCompletedResult_pnx7en_k$ = function (takenState, cause) {
    var this_0 = this._state_1;
    while (true) {
      var state = this_0.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (!(state == null) ? isInterface(state, NotCompleted) : false) {
        // Inline function 'kotlin.error' call
        var message = 'Not completed';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        if (state instanceof CompletedExceptionally)
          return Unit_getInstance();
        else {
          if (state instanceof CompletedContinuation) {
            // Inline function 'kotlin.check' call
            if (!!state.get_cancelled_ge9r54_k$()) {
              var message_0 = 'Must be called at most once';
              throw IllegalStateException_init_$Create$(toString(message_0));
            }
            var update = state.copy$default_wexsgh_k$(VOID, VOID, VOID, VOID, cause);
            if (this._state_1.atomicfu$compareAndSet(state, update)) {
              state.invokeHandlers_17pdpa_k$(this, cause);
              return Unit_getInstance();
            }
          } else {
            if (this._state_1.atomicfu$compareAndSet(state, new CompletedContinuation(state, VOID, VOID, VOID, cause))) {
              return Unit_getInstance();
            }
          }
        }
      }
    }
    return Unit_getInstance();
  };
  protoOf(CancellableContinuationImpl).cancel_e74who_k$ = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this._state_1;
    while (true) {
      var tmp0 = this_0.get_kotlinx$atomicfu$value_vi2am5_k$();
      $l$block: {
        if (!(!(tmp0 == null) ? isInterface(tmp0, NotCompleted) : false))
          return false;
        var tmp;
        if (!(tmp0 == null) ? isInterface(tmp0, CancelHandler) : false) {
          tmp = true;
        } else {
          tmp = tmp0 instanceof Segment;
        }
        var update = new CancelledContinuation(this, cause, tmp);
        if (!this._state_1.atomicfu$compareAndSet(tmp0, update)) {
          break $l$block;
        }
        if (isInterface(tmp0, CancelHandler)) {
          this.callCancelHandler_e6l0np_k$(tmp0, cause);
        } else {
          if (tmp0 instanceof Segment) {
            callSegmentOnCancellation(this, tmp0, cause);
          }
        }
        detachChildIfNonResuable(this);
        dispatchResume(this, this.get_resumeMode_te1i4n_k$());
        return true;
      }
    }
  };
  protoOf(CancellableContinuationImpl).parentCancelled_jw71o9_k$ = function (cause) {
    if (cancelLater(this, cause))
      return Unit_getInstance();
    this.cancel_e74who_k$(cause);
    detachChildIfNonResuable(this);
  };
  protoOf(CancellableContinuationImpl).callCancelHandler_e6l0np_k$ = function (handler, cause) {
    // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callCancelHandlerSafely' call
    try {
      handler.invoke_py2q9a_k$(cause);
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.get_context_h02k06_k$(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + this.toString(), ex));
      } else {
        throw $p;
      }
    }
    return Unit_getInstance();
  };
  protoOf(CancellableContinuationImpl).callOnCancellation_kwfdrp_k$ = function (onCancellation, cause) {
    try {
      onCancellation(cause);
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.get_context_h02k06_k$(), new CompletionHandlerException('Exception in resume onCancellation handler for ' + this.toString(), ex));
      } else {
        throw $p;
      }
    }
  };
  protoOf(CancellableContinuationImpl).getContinuationCancellationCause_3nurbc_k$ = function (parent) {
    return parent.getCancellationException_8i1q6u_k$();
  };
  protoOf(CancellableContinuationImpl).getResult_fck196_k$ = function () {
    var isReusable_0 = isReusable(this);
    if (trySuspend_0(this)) {
      if (_get_parentHandle__f8dcex(this) == null) {
        installParentHandle(this);
      }
      if (isReusable_0) {
        this.releaseClaimedReusableContinuation_mdg0s9_k$();
      }
      return get_COROUTINE_SUSPENDED();
    }
    if (isReusable_0) {
      this.releaseClaimedReusableContinuation_mdg0s9_k$();
    }
    var state = this.get_state_2t6sbp_k$();
    if (state instanceof CompletedExceptionally)
      throw recoverStackTrace(state.get_cause_iplhs0_k$(), this);
    if (get_isCancellableMode(this.get_resumeMode_te1i4n_k$())) {
      var job = this.get_context_h02k06_k$().get_y2st91_k$(Key_getInstance_2());
      if (!(job == null) && !job.get_isActive_quafmh_k$()) {
        var cause = job.getCancellationException_8i1q6u_k$();
        this.cancelCompletedResult_pnx7en_k$(state, cause);
        throw recoverStackTrace(cause, this);
      }
    }
    return this.getSuccessfulResult_4uqe9r_k$(state);
  };
  protoOf(CancellableContinuationImpl).releaseClaimedReusableContinuation_mdg0s9_k$ = function () {
    var tmp = this.delegate_1;
    var tmp0_safe_receiver = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.tryReleaseClaimedContinuation_ko810q_k$(this);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var cancellationCause = tmp_0;
    this.detachChild_85lap8_k$();
    this.cancel_e74who_k$(cancellationCause);
  };
  protoOf(CancellableContinuationImpl).resumeWith_dtxwbr_k$ = function (result) {
    return resumeImpl$default(this, toState(result, this), this.get_resumeMode_te1i4n_k$());
  };
  protoOf(CancellableContinuationImpl).resume_a4kjl1_k$ = function (value, onCancellation) {
    return resumeImpl(this, value, this.get_resumeMode_te1i4n_k$(), onCancellation);
  };
  protoOf(CancellableContinuationImpl).invokeOnCancellation_9j58v1_k$ = function (segment, index) {
    var tmp0 = this._decisionAndIndex_1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp0.get_kotlinx$atomicfu$value_vi2am5_k$();
        // Inline function 'kotlinx.coroutines.index' call
        // Inline function 'kotlin.check' call
        if (!((cur & 536870911) === 536870911)) {
          var message = 'invokeOnCancellation should be called at most once';
          throw IllegalStateException_init_$Create$(toString(message));
        }
        // Inline function 'kotlinx.coroutines.decision' call
        // Inline function 'kotlinx.coroutines.decisionAndIndex' call
        var upd = (cur >> 29 << 29) + index | 0;
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          break $l$block;
        }
      }
    }
    invokeOnCancellationImpl(this, segment);
  };
  protoOf(CancellableContinuationImpl).invokeOnCancellation_kffkqp_k$ = function (handler) {
    return invokeOnCancellation(this, new UserSupplied(handler));
  };
  protoOf(CancellableContinuationImpl).invokeOnCancellationInternal_vx7l43_k$ = function (handler) {
    return invokeOnCancellationImpl(this, handler);
  };
  protoOf(CancellableContinuationImpl).detachChild_85lap8_k$ = function () {
    var tmp0_elvis_lhs = _get_parentHandle__f8dcex(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    handle.dispose_3nnxhr_k$();
    this._parentHandle_1.set_kotlinx$atomicfu$value_508e3y_k$(NonDisposableHandle_getInstance());
  };
  protoOf(CancellableContinuationImpl).tryResume_8iaqti_k$ = function (value, idempotent) {
    return tryResumeImpl(this, value, idempotent, null);
  };
  protoOf(CancellableContinuationImpl).tryResume_2flfz_k$ = function (value, idempotent, onCancellation) {
    return tryResumeImpl(this, value, idempotent, onCancellation);
  };
  protoOf(CancellableContinuationImpl).tryResumeWithException_4drsj6_k$ = function (exception) {
    return tryResumeImpl(this, new CompletedExceptionally(exception), null, null);
  };
  protoOf(CancellableContinuationImpl).completeResume_fabtk_k$ = function (token) {
    // Inline function 'kotlinx.coroutines.assert' call
    dispatchResume(this, this.get_resumeMode_te1i4n_k$());
  };
  protoOf(CancellableContinuationImpl).resumeUndispatched_tyhwz7_k$ = function (_this__u8e3s4, value) {
    var tmp = this.delegate_1;
    var dc = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp_0;
    if ((dc == null ? null : dc.get_dispatcher_xk0rod_k$()) === _this__u8e3s4) {
      tmp_0 = 4;
    } else {
      tmp_0 = this.get_resumeMode_te1i4n_k$();
    }
    resumeImpl$default(this, value, tmp_0);
  };
  protoOf(CancellableContinuationImpl).resumeUndispatchedWithException_m42me0_k$ = function (_this__u8e3s4, exception) {
    var tmp = this.delegate_1;
    var dc = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp_0 = new CompletedExceptionally(exception);
    var tmp_1;
    if ((dc == null ? null : dc.get_dispatcher_xk0rod_k$()) === _this__u8e3s4) {
      tmp_1 = 4;
    } else {
      tmp_1 = this.get_resumeMode_te1i4n_k$();
    }
    resumeImpl$default(this, tmp_0, tmp_1);
  };
  protoOf(CancellableContinuationImpl).getSuccessfulResult_4uqe9r_k$ = function (state) {
    var tmp;
    if (state instanceof CompletedContinuation) {
      var tmp_0 = state.result_1;
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = (state == null ? true : !(state == null)) ? state : THROW_CCE();
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).getExceptionalResult_i3cs19_k$ = function (state) {
    var tmp0_safe_receiver = protoOf(DispatchedTask).getExceptionalResult_i3cs19_k$.call(this, state);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = recoverStackTrace(tmp0_safe_receiver, this.delegate_1);
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).toString = function () {
    return this.nameString_cd9e9w_k$() + '(' + toDebugString(this.delegate_1) + '){' + _get_stateDebugRepresentation__bf18u4(this) + '}@' + get_hexAddress(this);
  };
  protoOf(CancellableContinuationImpl).nameString_cd9e9w_k$ = function () {
    return 'CancellableContinuation';
  };
  function NotCompleted() {
  }
  function _get_handler__z70553($this) {
    return $this.handler_1;
  }
  function UserSupplied(handler) {
    this.handler_1 = handler;
  }
  protoOf(UserSupplied).invoke_py2q9a_k$ = function (cause) {
    this.handler_1(cause);
  };
  protoOf(UserSupplied).toString = function () {
    return 'CancelHandler.UserSupplied[' + get_classSimpleName(this.handler_1) + '@' + get_hexAddress(this) + ']';
  };
  function CancelHandler() {
  }
  function decisionAndIndex(decision, index) {
    _init_properties_CancellableContinuationImpl_kt__6rrtdd();
    return (decision << 29) + index | 0;
  }
  function get_UNDECIDED_0() {
    return UNDECIDED_0;
  }
  var UNDECIDED_0;
  function get_NO_INDEX() {
    return NO_INDEX;
  }
  var NO_INDEX;
  function Active() {
    Active_instance = this;
  }
  protoOf(Active).toString = function () {
    return 'Active';
  };
  var Active_instance;
  function Active_getInstance() {
    if (Active_instance == null)
      new Active();
    return Active_instance;
  }
  function CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    cancelHandler = cancelHandler === VOID ? null : cancelHandler;
    onCancellation = onCancellation === VOID ? null : onCancellation;
    idempotentResume = idempotentResume === VOID ? null : idempotentResume;
    cancelCause = cancelCause === VOID ? null : cancelCause;
    this.result_1 = result;
    this.cancelHandler_1 = cancelHandler;
    this.onCancellation_1 = onCancellation;
    this.idempotentResume_1 = idempotentResume;
    this.cancelCause_1 = cancelCause;
  }
  protoOf(CompletedContinuation).get_result_iyg5d2_k$ = function () {
    return this.result_1;
  };
  protoOf(CompletedContinuation).get_cancelHandler_w4ijbb_k$ = function () {
    return this.cancelHandler_1;
  };
  protoOf(CompletedContinuation).get_onCancellation_no7t6d_k$ = function () {
    return this.onCancellation_1;
  };
  protoOf(CompletedContinuation).get_idempotentResume_61d27l_k$ = function () {
    return this.idempotentResume_1;
  };
  protoOf(CompletedContinuation).get_cancelCause_cj8bx6_k$ = function () {
    return this.cancelCause_1;
  };
  protoOf(CompletedContinuation).get_cancelled_ge9r54_k$ = function () {
    return !(this.cancelCause_1 == null);
  };
  protoOf(CompletedContinuation).invokeHandlers_17pdpa_k$ = function (cont, cause) {
    var tmp0_safe_receiver = this.cancelHandler_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      cont.callCancelHandler_e6l0np_k$(tmp0_safe_receiver, cause);
    }
    var tmp1_safe_receiver = this.onCancellation_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      cont.callOnCancellation_kwfdrp_k$(tmp1_safe_receiver, cause);
    }
  };
  protoOf(CompletedContinuation).component1_7eebsc_k$ = function () {
    return this.result_1;
  };
  protoOf(CompletedContinuation).component2_7eebsb_k$ = function () {
    return this.cancelHandler_1;
  };
  protoOf(CompletedContinuation).component3_7eebsa_k$ = function () {
    return this.onCancellation_1;
  };
  protoOf(CompletedContinuation).component4_7eebs9_k$ = function () {
    return this.idempotentResume_1;
  };
  protoOf(CompletedContinuation).component5_7eebs8_k$ = function () {
    return this.cancelCause_1;
  };
  protoOf(CompletedContinuation).copy_nkyq0u_k$ = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    return new CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).copy$default_wexsgh_k$ = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause, $super) {
    result = result === VOID ? this.result_1 : result;
    cancelHandler = cancelHandler === VOID ? this.cancelHandler_1 : cancelHandler;
    onCancellation = onCancellation === VOID ? this.onCancellation_1 : onCancellation;
    idempotentResume = idempotentResume === VOID ? this.idempotentResume_1 : idempotentResume;
    cancelCause = cancelCause === VOID ? this.cancelCause_1 : cancelCause;
    return $super === VOID ? this.copy_nkyq0u_k$(result, cancelHandler, onCancellation, idempotentResume, cancelCause) : $super.copy_nkyq0u_k$.call(this, result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).toString = function () {
    return 'CompletedContinuation(result=' + toString_0(this.result_1) + ', cancelHandler=' + toString_0(this.cancelHandler_1) + ', onCancellation=' + toString_0(this.onCancellation_1) + ', idempotentResume=' + toString_0(this.idempotentResume_1) + ', cancelCause=' + toString_0(this.cancelCause_1) + ')';
  };
  protoOf(CompletedContinuation).hashCode = function () {
    var result = this.result_1 == null ? 0 : hashCode(this.result_1);
    result = imul(result, 31) + (this.cancelHandler_1 == null ? 0 : hashCode(this.cancelHandler_1)) | 0;
    result = imul(result, 31) + (this.onCancellation_1 == null ? 0 : hashCode(this.onCancellation_1)) | 0;
    result = imul(result, 31) + (this.idempotentResume_1 == null ? 0 : hashCode(this.idempotentResume_1)) | 0;
    result = imul(result, 31) + (this.cancelCause_1 == null ? 0 : hashCode(this.cancelCause_1)) | 0;
    return result;
  };
  protoOf(CompletedContinuation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedContinuation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedContinuation ? other : THROW_CCE();
    if (!equals(this.result_1, tmp0_other_with_cast.result_1))
      return false;
    if (!equals(this.cancelHandler_1, tmp0_other_with_cast.cancelHandler_1))
      return false;
    if (!equals(this.onCancellation_1, tmp0_other_with_cast.onCancellation_1))
      return false;
    if (!equals(this.idempotentResume_1, tmp0_other_with_cast.idempotentResume_1))
      return false;
    if (!equals(this.cancelCause_1, tmp0_other_with_cast.cancelCause_1))
      return false;
    return true;
  };
  function get_index(_this__u8e3s4) {
    _init_properties_CancellableContinuationImpl_kt__6rrtdd();
    return _this__u8e3s4 & 536870911;
  }
  function get_decision(_this__u8e3s4) {
    _init_properties_CancellableContinuationImpl_kt__6rrtdd();
    return _this__u8e3s4 >> 29;
  }
  function get_SUSPENDED_0() {
    return SUSPENDED_0;
  }
  var SUSPENDED_0;
  function get_RESUMED_0() {
    return RESUMED_0;
  }
  var RESUMED_0;
  function get_DECISION_SHIFT() {
    return DECISION_SHIFT;
  }
  var DECISION_SHIFT;
  function get_INDEX_MASK() {
    return INDEX_MASK;
  }
  var INDEX_MASK;
  var properties_initialized_CancellableContinuationImpl_kt_xtzb03;
  function _init_properties_CancellableContinuationImpl_kt__6rrtdd() {
    if (!properties_initialized_CancellableContinuationImpl_kt_xtzb03) {
      properties_initialized_CancellableContinuationImpl_kt_xtzb03 = true;
      RESUME_TOKEN = new Symbol('RESUME_TOKEN');
    }
  }
  function CompletableDeferred() {
  }
  function CompletableDeferred_0(parent) {
    parent = parent === VOID ? null : parent;
    return new CompletableDeferredImpl(parent);
  }
  function $awaitCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($awaitCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.awaitInternal_5d94r6_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return (suspendResult == null ? true : !(suspendResult == null)) ? suspendResult : THROW_CCE();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function CompletableDeferredImpl(parent) {
    JobSupport.call(this, true);
    this.initParentJob_jbhsg3_k$(parent);
  }
  protoOf(CompletableDeferredImpl).get_onCancelComplete_jew0sy_k$ = function () {
    return true;
  };
  protoOf(CompletableDeferredImpl).getCompleted_nczk2z_k$ = function () {
    var tmp = this.getCompletedInternal_tfzdln_k$();
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(CompletableDeferredImpl).await_4rdzbx_k$ = function ($completion) {
    var tmp = new $awaitCOROUTINE$(this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(CompletableDeferredImpl).get_onAwait_l48qpe_k$ = function () {
    var tmp = this.get_onAwaitInternal_onp3dh_k$();
    return isInterface(tmp, SelectClause1) ? tmp : THROW_CCE();
  };
  protoOf(CompletableDeferredImpl).complete_ixf84q_k$ = function (value) {
    return this.makeCompleting_fohkwa_k$(value);
  };
  protoOf(CompletableDeferredImpl).completeExceptionally_xyzekf_k$ = function (exception) {
    return this.makeCompleting_fohkwa_k$(new CompletedExceptionally(exception));
  };
  function CompletableJob() {
  }
  function _get_handler__z70553_0($this) {
    return $this.handler_1;
  }
  function UserSupplied_0(handler) {
    this.handler_1 = handler;
  }
  protoOf(UserSupplied_0).invoke_py2q9a_k$ = function (cause) {
    this.handler_1(cause);
  };
  protoOf(UserSupplied_0).toString = function () {
    return 'InternalCompletionHandler.UserSupplied[' + get_classSimpleName(this.handler_1) + '@' + get_hexAddress(this) + ']';
  };
  function InternalCompletionHandler() {
  }
  function _get__handled__q1dawe($this) {
    return $this._handled_1;
  }
  function CompletedExceptionally(cause, handled) {
    handled = handled === VOID ? false : handled;
    this.cause_1 = cause;
    this._handled_1 = atomic$boolean$1(handled);
  }
  protoOf(CompletedExceptionally).get_cause_iplhs0_k$ = function () {
    return this.cause_1;
  };
  protoOf(CompletedExceptionally).get_handled_cq14k3_k$ = function () {
    return this._handled_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  };
  protoOf(CompletedExceptionally).makeHandled_ws9oq6_k$ = function () {
    return this._handled_1.atomicfu$compareAndSet(false, true);
  };
  protoOf(CompletedExceptionally).toString = function () {
    return get_classSimpleName(this) + '[' + this.cause_1.toString() + ']';
  };
  function _get__resumed__kg85kj($this) {
    return $this._resumed_1;
  }
  function CancelledContinuation(continuation, cause, handled) {
    CompletedExceptionally.call(this, cause == null ? CancellationException_init_$Create$('Continuation ' + toString(continuation) + ' was cancelled normally') : cause, handled);
    this._resumed_1 = atomic$boolean$1(false);
  }
  protoOf(CancelledContinuation).makeResumed_vjvawn_k$ = function () {
    return this._resumed_1.atomicfu$compareAndSet(false, true);
  };
  function toState(_this__u8e3s4, caller) {
    // Inline function 'kotlin.fold' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = new CompletedExceptionally(recoverStackTrace(exception, caller));
    }
    return tmp;
  }
  function toState_0(_this__u8e3s4, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    // Inline function 'kotlin.fold' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      var it = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      tmp = !(onCancellation == null) ? new CompletedWithCancellation(it, onCancellation) : it;
    } else {
      tmp = new CompletedExceptionally(exception);
    }
    return tmp;
  }
  function CompletedWithCancellation(result, onCancellation) {
    this.result_1 = result;
    this.onCancellation_1 = onCancellation;
  }
  protoOf(CompletedWithCancellation).get_result_iyg5d2_k$ = function () {
    return this.result_1;
  };
  protoOf(CompletedWithCancellation).get_onCancellation_no7t6d_k$ = function () {
    return this.onCancellation_1;
  };
  protoOf(CompletedWithCancellation).component1_7eebsc_k$ = function () {
    return this.result_1;
  };
  protoOf(CompletedWithCancellation).component2_7eebsb_k$ = function () {
    return this.onCancellation_1;
  };
  protoOf(CompletedWithCancellation).copy_4w9jcm_k$ = function (result, onCancellation) {
    return new CompletedWithCancellation(result, onCancellation);
  };
  protoOf(CompletedWithCancellation).copy$default_3qnym4_k$ = function (result, onCancellation, $super) {
    result = result === VOID ? this.result_1 : result;
    onCancellation = onCancellation === VOID ? this.onCancellation_1 : onCancellation;
    return $super === VOID ? this.copy_4w9jcm_k$(result, onCancellation) : $super.copy_4w9jcm_k$.call(this, result, onCancellation);
  };
  protoOf(CompletedWithCancellation).toString = function () {
    return 'CompletedWithCancellation(result=' + toString_0(this.result_1) + ', onCancellation=' + toString(this.onCancellation_1) + ')';
  };
  protoOf(CompletedWithCancellation).hashCode = function () {
    var result = this.result_1 == null ? 0 : hashCode(this.result_1);
    result = imul(result, 31) + hashCode(this.onCancellation_1) | 0;
    return result;
  };
  protoOf(CompletedWithCancellation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedWithCancellation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedWithCancellation ? other : THROW_CCE();
    if (!equals(this.result_1, tmp0_other_with_cast.result_1))
      return false;
    if (!equals(this.onCancellation_1, tmp0_other_with_cast.onCancellation_1))
      return false;
    return true;
  };
  function recoverResult(state, uCont) {
    var tmp;
    if (state instanceof CompletedExceptionally) {
      Companion_getInstance();
      // Inline function 'kotlin.Companion.failure' call
      var exception = recoverStackTrace(state.cause_1, uCont);
      tmp = _Result___init__impl__xyqfz8(createFailure(exception));
    } else {
      Companion_getInstance();
      // Inline function 'kotlin.Companion.success' call
      var value = (state == null ? true : !(state == null)) ? state : THROW_CCE();
      tmp = _Result___init__impl__xyqfz8(value);
    }
    return tmp;
  }
  function CoroutineDispatcher$Key$_init_$lambda_akl8b5(it) {
    return it instanceof CoroutineDispatcher ? it : null;
  }
  function Key_0() {
    Key_instance = this;
    var tmp = Key_getInstance();
    AbstractCoroutineContextKey.call(this, tmp, CoroutineDispatcher$Key$_init_$lambda_akl8b5);
  }
  var Key_instance;
  function Key_getInstance_0() {
    if (Key_instance == null)
      new Key_0();
    return Key_instance;
  }
  function CoroutineDispatcher() {
    Key_getInstance_0();
    AbstractCoroutineContextElement.call(this, Key_getInstance());
  }
  protoOf(CoroutineDispatcher).isDispatchNeeded_ft82v4_k$ = function (context) {
    return true;
  };
  protoOf(CoroutineDispatcher).limitedParallelism_b7nunq_k$ = function (parallelism) {
    checkParallelism(parallelism);
    return new LimitedDispatcher(this, parallelism);
  };
  protoOf(CoroutineDispatcher).dispatchYield_t7bwip_k$ = function (context, block) {
    return this.dispatch_qa3n0o_k$(context, block);
  };
  protoOf(CoroutineDispatcher).interceptContinuation_3dnmlu_k$ = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  protoOf(CoroutineDispatcher).releaseInterceptedContinuation_rgafzi_k$ = function (continuation) {
    var dispatched = continuation instanceof DispatchedContinuation ? continuation : THROW_CCE();
    dispatched.release_8sql92_k$();
  };
  protoOf(CoroutineDispatcher).plus_rufu3f_k$ = function (other) {
    return other;
  };
  protoOf(CoroutineDispatcher).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  function handleCoroutineException(context, exception) {
    try {
      var tmp0_safe_receiver = context.get_y2st91_k$(Key_getInstance_1());
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        tmp0_safe_receiver.handleException_e679jj_k$(context, exception);
        return Unit_getInstance();
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var t = $p;
        handleUncaughtCoroutineException(context, handlerException(exception, t));
        return Unit_getInstance();
      } else {
        throw $p;
      }
    }
    handleUncaughtCoroutineException(context, exception);
  }
  function Key_1() {
    Key_instance_0 = this;
  }
  var Key_instance_0;
  function Key_getInstance_1() {
    if (Key_instance_0 == null)
      new Key_1();
    return Key_instance_0;
  }
  function CoroutineExceptionHandler() {
  }
  function handlerException(originalException, thrownException) {
    if (originalException === thrownException)
      return originalException;
    // Inline function 'kotlin.apply' call
    var this_0 = RuntimeException_init_$Create$('Exception while trying to handle coroutine exception', thrownException);
    addSuppressed(this_0, originalException);
    return this_0;
  }
  function CoroutineScope() {
  }
  function CoroutineScope_0(context) {
    return new ContextScope(!(context.get_y2st91_k$(Key_getInstance_2()) == null) ? context : context.plus_s13ygv_k$(Job_0()));
  }
  function coroutineScope(block, $completion) {
    // Inline function 'kotlin.contracts.contract' call
    var coroutine = new ScopeCoroutine($completion.get_context_h02k06_k$(), $completion);
    return startUndispatchedOrReturn(coroutine, coroutine, block);
  }
  function currentCoroutineContext($completion) {
    // Inline function 'kotlin.js.getCoroutineContext' call
    return $completion.get_context_h02k06_k$();
  }
  var CoroutineStart_DEFAULT_instance;
  var CoroutineStart_LAZY_instance;
  var CoroutineStart_ATOMIC_instance;
  var CoroutineStart_UNDISPATCHED_instance;
  function values() {
    return [CoroutineStart_DEFAULT_getInstance(), CoroutineStart_LAZY_getInstance(), CoroutineStart_ATOMIC_getInstance(), CoroutineStart_UNDISPATCHED_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'DEFAULT':
        return CoroutineStart_DEFAULT_getInstance();
      case 'LAZY':
        return CoroutineStart_LAZY_getInstance();
      case 'ATOMIC':
        return CoroutineStart_ATOMIC_getInstance();
      case 'UNDISPATCHED':
        return CoroutineStart_UNDISPATCHED_getInstance();
      default:
        CoroutineStart_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var CoroutineStart_entriesInitialized;
  function CoroutineStart_initEntries() {
    if (CoroutineStart_entriesInitialized)
      return Unit_getInstance();
    CoroutineStart_entriesInitialized = true;
    CoroutineStart_DEFAULT_instance = new CoroutineStart('DEFAULT', 0);
    CoroutineStart_LAZY_instance = new CoroutineStart('LAZY', 1);
    CoroutineStart_ATOMIC_instance = new CoroutineStart('ATOMIC', 2);
    CoroutineStart_UNDISPATCHED_instance = new CoroutineStart('UNDISPATCHED', 3);
  }
  var $ENTRIES;
  function CoroutineStart(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(CoroutineStart).invoke_neaz0o_k$ = function (block, receiver, completion) {
    var tmp;
    switch (this.get_ordinal_ip24qg_k$()) {
      case 0:
        startCoroutineCancellable(block, receiver, completion);
        tmp = Unit_getInstance();
        break;
      case 2:
        startCoroutine(block, receiver, completion);
        tmp = Unit_getInstance();
        break;
      case 3:
        startCoroutineUndispatched(block, receiver, completion);
        tmp = Unit_getInstance();
        break;
      case 1:
        tmp = Unit_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(CoroutineStart).get_isLazy_ew1d53_k$ = function () {
    return this === CoroutineStart_LAZY_getInstance();
  };
  function CoroutineStart_DEFAULT_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_DEFAULT_instance;
  }
  function CoroutineStart_LAZY_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_LAZY_instance;
  }
  function CoroutineStart_ATOMIC_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_ATOMIC_instance;
  }
  function CoroutineStart_UNDISPATCHED_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_UNDISPATCHED_instance;
  }
  function CopyableThrowable() {
  }
  function Deferred() {
  }
  function Delay() {
  }
  function get_delay(_this__u8e3s4) {
    var tmp = _this__u8e3s4.get_y2st91_k$(Key_getInstance());
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, Delay) : false) ? tmp : null;
    return tmp0_elvis_lhs == null ? get_DefaultDelay() : tmp0_elvis_lhs;
  }
  function get_DISPOSED_TASK() {
    _init_properties_EventLoop_common_kt__pwfggr();
    return DISPOSED_TASK;
  }
  var DISPOSED_TASK;
  function get_CLOSED_EMPTY() {
    _init_properties_EventLoop_common_kt__pwfggr();
    return CLOSED_EMPTY;
  }
  var CLOSED_EMPTY;
  function _set_useCount__kwzmz3($this, _set____db54di) {
    $this.useCount_1 = _set____db54di;
  }
  function _get_useCount__843bib($this) {
    return $this.useCount_1;
  }
  function _set_shared__q6vn2($this, _set____db54di) {
    $this.shared_1 = _set____db54di;
  }
  function _get_shared__qjozq($this) {
    return $this.shared_1;
  }
  function _set_unconfinedQueue__ri92ob($this, _set____db54di) {
    $this.unconfinedQueue_1 = _set____db54di;
  }
  function _get_unconfinedQueue__heiv5r($this) {
    return $this.unconfinedQueue_1;
  }
  function delta($this, unconfined) {
    return unconfined ? new Long(0, 1) : new Long(1, 0);
  }
  function EventLoop() {
    CoroutineDispatcher.call(this);
    this.useCount_1 = new Long(0, 0);
    this.shared_1 = false;
    this.unconfinedQueue_1 = null;
  }
  protoOf(EventLoop).processNextEvent_jmndfc_k$ = function () {
    if (!this.processUnconfinedEvent_mypjl6_k$())
      return new Long(-1, 2147483647);
    return new Long(0, 0);
  };
  protoOf(EventLoop).get_isEmpty_zauvru_k$ = function () {
    return this.get_isUnconfinedQueueEmpty_mi405s_k$();
  };
  protoOf(EventLoop).get_nextTime_88vw7r_k$ = function () {
    var tmp0_elvis_lhs = this.unconfinedQueue_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return new Long(-1, 2147483647);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    return queue.isEmpty_y1axqb_k$() ? new Long(-1, 2147483647) : new Long(0, 0);
  };
  protoOf(EventLoop).processUnconfinedEvent_mypjl6_k$ = function () {
    var tmp0_elvis_lhs = this.unconfinedQueue_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    var tmp1_elvis_lhs = queue.removeFirstOrNull_eges3a_k$();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var task = tmp_0;
    task.run_mvkpxh_k$();
    return true;
  };
  protoOf(EventLoop).shouldBeProcessedFromContext_tzcyz7_k$ = function () {
    return false;
  };
  protoOf(EventLoop).dispatchUnconfined_o79kaq_k$ = function (task) {
    var tmp0_elvis_lhs = this.unconfinedQueue_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = ArrayDeque_init_$Create$();
      this.unconfinedQueue_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    queue.addLast_gaaijb_k$(task);
  };
  protoOf(EventLoop).get_isActive_quafmh_k$ = function () {
    return this.useCount_1.compareTo_9jj042_k$(new Long(0, 0)) > 0;
  };
  protoOf(EventLoop).get_isUnconfinedLoopActive_g78ri6_k$ = function () {
    return this.useCount_1.compareTo_9jj042_k$(delta(this, true)) >= 0;
  };
  protoOf(EventLoop).get_isUnconfinedQueueEmpty_mi405s_k$ = function () {
    var tmp0_safe_receiver = this.unconfinedQueue_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.isEmpty_y1axqb_k$();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  };
  protoOf(EventLoop).incrementUseCount_jadqvy_k$ = function (unconfined) {
    this.useCount_1 = this.useCount_1.plus_r93sks_k$(delta(this, unconfined));
    if (!unconfined)
      this.shared_1 = true;
  };
  protoOf(EventLoop).incrementUseCount$default_rfdd2j_k$ = function (unconfined, $super) {
    unconfined = unconfined === VOID ? false : unconfined;
    var tmp;
    if ($super === VOID) {
      this.incrementUseCount_jadqvy_k$(unconfined);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.incrementUseCount_jadqvy_k$.call(this, unconfined);
    }
    return tmp;
  };
  protoOf(EventLoop).decrementUseCount_x8i8ca_k$ = function (unconfined) {
    this.useCount_1 = this.useCount_1.minus_mfbszm_k$(delta(this, unconfined));
    if (this.useCount_1.compareTo_9jj042_k$(new Long(0, 0)) > 0)
      return Unit_getInstance();
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.shared_1) {
      this.shutdown_cplwmy_k$();
    }
  };
  protoOf(EventLoop).decrementUseCount$default_p9beih_k$ = function (unconfined, $super) {
    unconfined = unconfined === VOID ? false : unconfined;
    var tmp;
    if ($super === VOID) {
      this.decrementUseCount_x8i8ca_k$(unconfined);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.decrementUseCount_x8i8ca_k$.call(this, unconfined);
    }
    return tmp;
  };
  protoOf(EventLoop).limitedParallelism_b7nunq_k$ = function (parallelism) {
    checkParallelism(parallelism);
    return this;
  };
  protoOf(EventLoop).shutdown_cplwmy_k$ = function () {
  };
  function _get_ref__e6fxpa($this) {
    return $this.ref_1;
  }
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this.ref_1 = commonThreadLocal(new Symbol('ThreadLocalEventLoop'));
  }
  protoOf(ThreadLocalEventLoop).get_eventLoop_wo5hfs_k$ = function () {
    var tmp0_elvis_lhs = this.ref_1.get_26vq_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = createEventLoop();
      ThreadLocalEventLoop_getInstance().ref_1.set_tg4fwj_k$(this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ThreadLocalEventLoop).currentOrNull_epsoei_k$ = function () {
    return this.ref_1.get_26vq_k$();
  };
  protoOf(ThreadLocalEventLoop).resetEventLoop_nx8swe_k$ = function () {
    this.ref_1.set_tg4fwj_k$(null);
  };
  protoOf(ThreadLocalEventLoop).setEventLoop_nn9j5l_k$ = function (eventLoop) {
    this.ref_1.set_tg4fwj_k$(eventLoop);
  };
  var ThreadLocalEventLoop_instance;
  function ThreadLocalEventLoop_getInstance() {
    if (ThreadLocalEventLoop_instance == null)
      new ThreadLocalEventLoop();
    return ThreadLocalEventLoop_instance;
  }
  var properties_initialized_EventLoop_common_kt_cfxg9p;
  function _init_properties_EventLoop_common_kt__pwfggr() {
    if (!properties_initialized_EventLoop_common_kt_cfxg9p) {
      properties_initialized_EventLoop_common_kt_cfxg9p = true;
      DISPOSED_TASK = new Symbol('REMOVED_TASK');
      CLOSED_EMPTY = new Symbol('CLOSED_EMPTY');
    }
  }
  function CompletionHandlerException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, CompletionHandlerException);
  }
  function CoroutinesInternalError(message, cause) {
    Error_init_$Init$(message, cause, this);
    captureStack(this, CoroutinesInternalError);
  }
  function DisposableHandle() {
  }
  function Key_2() {
    Key_instance_1 = this;
  }
  var Key_instance_1;
  function Key_getInstance_2() {
    if (Key_instance_1 == null)
      new Key_2();
    return Key_instance_1;
  }
  function Job() {
  }
  function ChildJob() {
  }
  function ParentJob() {
  }
  function ChildHandle() {
  }
  function NonDisposableHandle() {
    NonDisposableHandle_instance = this;
  }
  protoOf(NonDisposableHandle).get_parent_hy4reb_k$ = function () {
    return null;
  };
  protoOf(NonDisposableHandle).dispose_3nnxhr_k$ = function () {
  };
  protoOf(NonDisposableHandle).childCancelled_hsnipy_k$ = function (cause) {
    return false;
  };
  protoOf(NonDisposableHandle).toString = function () {
    return 'NonDisposableHandle';
  };
  var NonDisposableHandle_instance;
  function NonDisposableHandle_getInstance() {
    if (NonDisposableHandle_instance == null)
      new NonDisposableHandle();
    return NonDisposableHandle_instance;
  }
  function ensureActive(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.get_y2st91_k$(Key_getInstance_2());
    if (tmp0_safe_receiver == null)
      null;
    else {
      ensureActive_0(tmp0_safe_receiver);
    }
  }
  function invokeOnCompletion(_this__u8e3s4, onCancelling, invokeImmediately, handler) {
    onCancelling = onCancelling === VOID ? false : onCancelling;
    invokeImmediately = invokeImmediately === VOID ? true : invokeImmediately;
    var tmp;
    if (_this__u8e3s4 instanceof JobSupport) {
      tmp = _this__u8e3s4.invokeOnCompletionInternal_2fo53g_k$(onCancelling, invokeImmediately, handler);
    } else {
      tmp = _this__u8e3s4.invokeOnCompletion_sct3wq_k$(onCancelling, invokeImmediately, InternalCompletionHandler$invoke$ref(handler));
    }
    return tmp;
  }
  function ensureActive_0(_this__u8e3s4) {
    if (!_this__u8e3s4.get_isActive_quafmh_k$())
      throw _this__u8e3s4.getCancellationException_8i1q6u_k$();
  }
  function Job_0(parent) {
    parent = parent === VOID ? null : parent;
    return new JobImpl(parent);
  }
  function get_job(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.get_y2st91_k$(Key_getInstance_2());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = "Current context doesn't contain Job in it: " + toString(_this__u8e3s4);
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function cancelAndJoin(_this__u8e3s4, $completion) {
    _this__u8e3s4.cancel$default_8haxne_k$();
    return _this__u8e3s4.join_o20dar_k$($completion);
  }
  function cancel_1(_this__u8e3s4, message, cause) {
    cause = cause === VOID ? null : cause;
    return _this__u8e3s4.cancel_hkmm2i_k$(CancellationException_init_$Create$_0(message, cause));
  }
  function InternalCompletionHandler$invoke$ref(p0) {
    var l = function (_this__u8e3s4) {
      p0.invoke_py2q9a_k$(_this__u8e3s4);
      return Unit_getInstance();
    };
    l.callableName = 'invoke';
    return l;
  }
  function get_COMPLETING_ALREADY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_ALREADY;
  }
  var COMPLETING_ALREADY;
  function get_COMPLETING_WAITING_CHILDREN() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_WAITING_CHILDREN;
  }
  var COMPLETING_WAITING_CHILDREN;
  function get_COMPLETING_RETRY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_RETRY;
  }
  var COMPLETING_RETRY;
  function get_TOO_LATE_TO_CANCEL() {
    _init_properties_JobSupport_kt__68f172();
    return TOO_LATE_TO_CANCEL;
  }
  var TOO_LATE_TO_CANCEL;
  function get_SEALED() {
    _init_properties_JobSupport_kt__68f172();
    return SEALED;
  }
  var SEALED;
  function get_EMPTY_NEW() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_NEW;
  }
  var EMPTY_NEW;
  function get_EMPTY_ACTIVE() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_ACTIVE;
  }
  var EMPTY_ACTIVE;
  function Empty(isActive) {
    this.isActive_1 = isActive;
  }
  protoOf(Empty).get_isActive_quafmh_k$ = function () {
    return this.isActive_1;
  };
  protoOf(Empty).get_list_wopuqv_k$ = function () {
    return null;
  };
  protoOf(Empty).toString = function () {
    return 'Empty{' + (this.isActive_1 ? 'Active' : 'New') + '}';
  };
  function Incomplete() {
  }
  function NodeList() {
    LinkedListHead.call(this);
  }
  protoOf(NodeList).get_isActive_quafmh_k$ = function () {
    return true;
  };
  protoOf(NodeList).get_list_wopuqv_k$ = function () {
    return this;
  };
  protoOf(NodeList).getString_gb1pt9_k$ = function (state) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.append_22ad7x_k$('List{');
    this_0.append_22ad7x_k$(state);
    this_0.append_22ad7x_k$('}[');
    var first = true;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = this.get__next_joogec_k$();
    while (!equals(cur, this)) {
      if (cur instanceof JobNode) {
        var node = cur;
        if (first)
          first = false;
        else {
          this_0.append_22ad7x_k$(', ');
        }
        this_0.append_t8pm91_k$(node);
      }
      cur = cur.get__next_joogec_k$();
    }
    this_0.append_22ad7x_k$(']');
    return this_0.toString();
  };
  protoOf(NodeList).toString = function () {
    return get_DEBUG() ? this.getString_gb1pt9_k$('Active') : protoOf(LinkedListHead).toString.call(this);
  };
  function JobNode() {
    LinkedListNode.call(this);
  }
  protoOf(JobNode).set_job_f7gwn8_k$ = function (_set____db54di) {
    this.job_1 = _set____db54di;
  };
  protoOf(JobNode).get_job_18j2r0_k$ = function () {
    var tmp = this.job_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('job');
    }
  };
  protoOf(JobNode).get_isActive_quafmh_k$ = function () {
    return true;
  };
  protoOf(JobNode).get_list_wopuqv_k$ = function () {
    return null;
  };
  protoOf(JobNode).dispose_3nnxhr_k$ = function () {
    return this.get_job_18j2r0_k$().removeNode_mzn109_k$(this);
  };
  protoOf(JobNode).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '[job@' + get_hexAddress(this.get_job_18j2r0_k$()) + ']';
  };
  function _get_select__irrld($this) {
    return $this.select_1;
  }
  function _get__isCompleting__kxhw32($this) {
    return $this._isCompleting_1;
  }
  function _get__rootCause__pzi6w3($this) {
    return $this._rootCause_1;
  }
  function _get__exceptionsHolder__e2tfjy($this) {
    return $this._exceptionsHolder_1;
  }
  function _set_exceptionsHolder__tqm22h($this, value) {
    $this._exceptionsHolder_1.set_kotlinx$atomicfu$value_508e3y_k$(value);
  }
  function _get_exceptionsHolder__nhszp($this) {
    return $this._exceptionsHolder_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  }
  function allocateList($this) {
    return ArrayList_init_$Create$(4);
  }
  function _get_parent__oo9xup($this) {
    return $this.parent_1;
  }
  function _get_state__b8zcm8($this) {
    return $this.state_1;
  }
  function _get_child__j05w3v($this) {
    return $this.child_1;
  }
  function _get_proposedUpdate__cai7fg($this) {
    return $this.proposedUpdate_1;
  }
  function _get_job__e6b14k($this) {
    return $this.job_1;
  }
  function _get_select__irrld_0($this) {
    return $this.select_1;
  }
  function _get__state__37adl3_0($this) {
    return $this._state_1;
  }
  function _get__parentHandle__f9kzhc_0($this) {
    return $this._parentHandle_1;
  }
  function loopOnState($this, block) {
    while (true) {
      block($this.get_state_2t6sbp_k$());
    }
  }
  function finalizeFinishingState($this, state, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    var proposedException = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_cause_iplhs0_k$();
    var wasCancelling;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    wasCancelling = state.get_isCancelling_o1apv_k$();
    var exceptions = state.sealLocked_m2r6b3_k$(proposedException);
    var finalCause = getFinalRootCause($this, state, exceptions);
    if (!(finalCause == null)) {
      addSuppressedExceptions($this, finalCause, exceptions);
    }
    var finalException = finalCause;
    var finalState = finalException == null ? proposedUpdate : finalException === proposedException ? proposedUpdate : new CompletedExceptionally(finalException);
    if (!(finalException == null)) {
      var handled = cancelParent($this, finalException) || $this.handleJobException_9fdet1_k$(finalException);
      if (handled) {
        (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).makeHandled_ws9oq6_k$();
      }
    }
    if (!wasCancelling) {
      $this.onCancelling_aqzbl5_k$(finalException);
    }
    $this.onCompletionInternal_38s8uv_k$(finalState);
    var casSuccess = $this._state_1.atomicfu$compareAndSet(state, boxIncomplete(finalState));
    // Inline function 'kotlinx.coroutines.assert' call
    completeStateFinalization($this, state, finalState);
    return finalState;
  }
  function getFinalRootCause($this, state, exceptions) {
    if (exceptions.isEmpty_y1axqb_k$()) {
      if (state.get_isCancelling_o1apv_k$()) {
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        return new JobCancellationException(null == null ? $this.cancellationExceptionMessage_a64063_k$() : null, null, $this);
      }
      return null;
    }
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = exceptions.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        if (!(element instanceof CancellationException)) {
          tmp$ret$2 = element;
          break $l$block;
        }
      }
      tmp$ret$2 = null;
    }
    var firstNonCancellation = tmp$ret$2;
    if (!(firstNonCancellation == null))
      return firstNonCancellation;
    var first = exceptions.get_c1px32_k$(0);
    if (first instanceof TimeoutCancellationException) {
      var tmp$ret$4;
      $l$block_0: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s_0 = exceptions.iterator_jk1svi_k$();
        while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
          var element_0 = _iterator__ex2g4s_0.next_20eer_k$();
          var tmp;
          if (!(element_0 === first)) {
            tmp = element_0 instanceof TimeoutCancellationException;
          } else {
            tmp = false;
          }
          if (tmp) {
            tmp$ret$4 = element_0;
            break $l$block_0;
          }
        }
        tmp$ret$4 = null;
      }
      var detailedTimeoutException = tmp$ret$4;
      if (!(detailedTimeoutException == null))
        return detailedTimeoutException;
    }
    return first;
  }
  function addSuppressedExceptions($this, rootCause, exceptions) {
    if (exceptions.get_size_woubt6_k$() <= 1)
      return Unit_getInstance();
    var seenExceptions = identitySet(exceptions.get_size_woubt6_k$());
    var unwrappedCause = unwrap(rootCause);
    var tmp0_iterator = exceptions.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var exception = tmp0_iterator.next_20eer_k$();
      var unwrapped = unwrap(exception);
      var tmp;
      var tmp_0;
      if (!(unwrapped === rootCause) && !(unwrapped === unwrappedCause)) {
        tmp_0 = !(unwrapped instanceof CancellationException);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = seenExceptions.add_utx5q5_k$(unwrapped);
      } else {
        tmp = false;
      }
      if (tmp) {
        addSuppressed(rootCause, unwrapped);
      }
    }
  }
  function tryFinalizeSimpleState($this, state, update) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    if (!$this._state_1.atomicfu$compareAndSet(state, boxIncomplete(update)))
      return false;
    $this.onCancelling_aqzbl5_k$(null);
    $this.onCompletionInternal_38s8uv_k$(update);
    completeStateFinalization($this, state, update);
    return true;
  }
  function completeStateFinalization($this, state, update) {
    var tmp0_safe_receiver = $this.get_parentHandle_h80e5u_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      tmp0_safe_receiver.dispose_3nnxhr_k$();
      $this.set_parentHandle_knepiy_k$(NonDisposableHandle_getInstance());
    }
    var tmp1_safe_receiver = update instanceof CompletedExceptionally ? update : null;
    var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_cause_iplhs0_k$();
    if (state instanceof JobNode) {
      try {
        state.invoke_py2q9a_k$(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          var ex = $p;
          $this.handleOnCompletionException_l1g6ri_k$(new CompletionHandlerException('Exception in completion handler ' + toString(state) + ' for ' + $this.toString(), ex));
        } else {
          throw $p;
        }
      }
    } else {
      var tmp2_safe_receiver = state.get_list_wopuqv_k$();
      if (tmp2_safe_receiver == null)
        null;
      else {
        notifyCompletion($this, tmp2_safe_receiver, cause);
      }
    }
  }
  function notifyCancelling($this, list, cause) {
    $this.onCancelling_aqzbl5_k$(cause);
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = list.get__next_joogec_k$();
    while (!equals(cur, list)) {
      if (cur instanceof JobCancellingNode) {
        var node = cur;
        try {
          node.invoke_py2q9a_k$(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp0_safe_receiver = exception;
            var tmp;
            if (tmp0_safe_receiver == null) {
              tmp = null;
            } else {
              // Inline function 'kotlin.apply' call
              addSuppressed(tmp0_safe_receiver, ex);
              tmp = tmp0_safe_receiver;
            }
            if (tmp == null) {
              // Inline function 'kotlin.run' call
              exception = new CompletionHandlerException('Exception in completion handler ' + node.toString() + ' for ' + $this.toString(), ex);
            }
          } else {
            throw $p;
          }
        }
      }
      cur = cur.get__next_joogec_k$();
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      $this.handleOnCompletionException_l1g6ri_k$(tmp0_safe_receiver_0);
    }
    cancelParent($this, cause);
  }
  function cancelParent($this, cause) {
    if ($this.get_isScopedCoroutine_rwmmff_k$())
      return true;
    var isCancellation = cause instanceof CancellationException;
    var parent = $this.get_parentHandle_h80e5u_k$();
    if (parent === null || parent === NonDisposableHandle_getInstance()) {
      return isCancellation;
    }
    return parent.childCancelled_hsnipy_k$(cause) || isCancellation;
  }
  function notifyCompletion($this, _this__u8e3s4, cause) {
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = _this__u8e3s4.get__next_joogec_k$();
    while (!equals(cur, _this__u8e3s4)) {
      if (cur instanceof JobNode) {
        var node = cur;
        try {
          node.invoke_py2q9a_k$(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp0_safe_receiver = exception;
            var tmp;
            if (tmp0_safe_receiver == null) {
              tmp = null;
            } else {
              // Inline function 'kotlin.apply' call
              addSuppressed(tmp0_safe_receiver, ex);
              tmp = tmp0_safe_receiver;
            }
            if (tmp == null) {
              // Inline function 'kotlin.run' call
              exception = new CompletionHandlerException('Exception in completion handler ' + node.toString() + ' for ' + $this.toString(), ex);
            }
          } else {
            throw $p;
          }
        }
      }
      cur = cur.get__next_joogec_k$();
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      $this.handleOnCompletionException_l1g6ri_k$(tmp0_safe_receiver_0);
    }
    return Unit_getInstance();
  }
  function startInternal($this, state) {
    if (state instanceof Empty) {
      if (state.isActive_1)
        return 0;
      if (!$this._state_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
        return -1;
      $this.onStart_qsx7gt_k$();
      return 1;
    } else {
      if (state instanceof InactiveNodeList) {
        if (!$this._state_1.atomicfu$compareAndSet(state, state.list_1))
          return -1;
        $this.onStart_qsx7gt_k$();
        return 1;
      } else {
        return 0;
      }
    }
  }
  function makeNode($this, handler, onCancelling) {
    var tmp;
    if (onCancelling) {
      var tmp0_elvis_lhs = handler instanceof JobCancellingNode ? handler : null;
      tmp = tmp0_elvis_lhs == null ? new InvokeOnCancelling(handler) : tmp0_elvis_lhs;
    } else {
      var tmp1_safe_receiver = handler instanceof JobNode ? handler : null;
      var tmp_0;
      if (tmp1_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.also' call
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_0 = tmp1_safe_receiver;
      }
      var tmp2_elvis_lhs = tmp_0;
      tmp = tmp2_elvis_lhs == null ? new InvokeOnCompletion(handler) : tmp2_elvis_lhs;
    }
    var node = tmp;
    node.job_1 = $this;
    return node;
  }
  function addLastAtomic($this, expect, list, node) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIf' call
      if (!($this.get_state_2t6sbp_k$() === expect)) {
        tmp$ret$1 = false;
        break $l$block;
      }
      list.addLast_dyfyav_k$(node);
      tmp$ret$1 = true;
    }
    return tmp$ret$1;
  }
  function promoteEmptyToNodeList($this, state) {
    var list = new NodeList();
    var update = state.isActive_1 ? list : new InactiveNodeList(list);
    $this._state_1.atomicfu$compareAndSet(state, update);
  }
  function promoteSingleToNodeList($this, state) {
    state.addOneIfEmpty_tvdaub_k$(new NodeList());
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var list = state.get__next_joogec_k$();
    $this._state_1.atomicfu$compareAndSet(state, list);
  }
  function joinInternal($this) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var state = $this.get_state_2t6sbp_k$();
      if (!(!(state == null) ? isInterface(state, Incomplete) : false))
        return false;
      if (startInternal($this, state) >= 0)
        return true;
    }
  }
  function joinSuspend($this, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.initCancellability_shqc60_k$();
    disposeOnCancellation(cancellable, invokeOnCompletion($this, VOID, VOID, new ResumeOnCompletion(cancellable)));
    return cancellable.getResult_fck196_k$();
  }
  function registerSelectForOnJoin($this, select, ignoredParam) {
    if (!joinInternal($this)) {
      select.selectInRegistrationPhase_ldg7ua_k$(Unit_getInstance());
      return Unit_getInstance();
    }
    var disposableHandle = invokeOnCompletion($this, VOID, VOID, new SelectOnJoinCompletionHandler($this, select));
    select.disposeOnCompletion_1gln1w_k$(disposableHandle);
  }
  function SelectOnJoinCompletionHandler($outer, select) {
    this.$this_1 = $outer;
    JobNode.call(this);
    this.select_1 = select;
  }
  protoOf(SelectOnJoinCompletionHandler).invoke_py2q9a_k$ = function (cause) {
    this.select_1.trySelect_fbege0_k$(this.$this_1, Unit_getInstance());
  };
  function cancelMakeCompleting($this, cause) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var state = $this.get_state_2t6sbp_k$();
      var tmp;
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        tmp = true;
      } else {
        var tmp_0;
        if (state instanceof Finishing) {
          tmp_0 = state.get_isCompleting_vi2bwp_k$();
        } else {
          tmp_0 = false;
        }
        tmp = tmp_0;
      }
      if (tmp) {
        return get_COMPLETING_ALREADY();
      }
      var proposedUpdate = new CompletedExceptionally(createCauseException($this, cause));
      var finalState = tryMakeCompleting($this, state, proposedUpdate);
      if (!(finalState === get_COMPLETING_RETRY()))
        return finalState;
    }
  }
  function createCauseException($this, cause) {
    var tmp;
    if (cause == null ? true : cause instanceof Error) {
      var tmp_0;
      if (cause == null) {
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        tmp_0 = new JobCancellationException(null == null ? $this.cancellationExceptionMessage_a64063_k$() : null, null, $this);
      } else {
        tmp_0 = cause;
      }
      tmp = tmp_0;
    } else {
      tmp = ((!(cause == null) ? isInterface(cause, ParentJob) : false) ? cause : THROW_CCE()).getChildJobCancellationCause_wx9uoh_k$();
    }
    return tmp;
  }
  function makeCancelling($this, cause) {
    var causeExceptionCache = null;
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp0 = $this.get_state_2t6sbp_k$();
      $l$block: {
        if (tmp0 instanceof Finishing) {
          // Inline function 'kotlinx.coroutines.internal.synchronized' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
          if (tmp0.get_isSealed_zdv4z3_k$())
            return get_TOO_LATE_TO_CANCEL();
          var wasCancelling = tmp0.get_isCancelling_o1apv_k$();
          if (!(cause == null) || !wasCancelling) {
            var tmp0_elvis_lhs = causeExceptionCache;
            var tmp;
            if (tmp0_elvis_lhs == null) {
              // Inline function 'kotlin.also' call
              var this_0 = createCauseException($this, cause);
              causeExceptionCache = this_0;
              tmp = this_0;
            } else {
              tmp = tmp0_elvis_lhs;
            }
            var causeException = tmp;
            tmp0.addExceptionLocked_hjqo7b_k$(causeException);
          }
          // Inline function 'kotlin.takeIf' call
          var this_1 = tmp0.get_rootCause_69dwxu_k$();
          var tmp_0;
          if (!wasCancelling) {
            tmp_0 = this_1;
          } else {
            tmp_0 = null;
          }
          var notifyRootCause = tmp_0;
          if (notifyRootCause == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            notifyCancelling($this, tmp0.list_1, notifyRootCause);
          }
          return get_COMPLETING_ALREADY();
        } else {
          if (!(tmp0 == null) ? isInterface(tmp0, Incomplete) : false) {
            var tmp2_elvis_lhs = causeExceptionCache;
            var tmp_1;
            if (tmp2_elvis_lhs == null) {
              // Inline function 'kotlin.also' call
              var this_2 = createCauseException($this, cause);
              causeExceptionCache = this_2;
              tmp_1 = this_2;
            } else {
              tmp_1 = tmp2_elvis_lhs;
            }
            var causeException_0 = tmp_1;
            if (tmp0.get_isActive_quafmh_k$()) {
              if (tryMakeCancelling($this, tmp0, causeException_0))
                return get_COMPLETING_ALREADY();
            } else {
              var finalState = tryMakeCompleting($this, tmp0, new CompletedExceptionally(causeException_0));
              if (finalState === get_COMPLETING_ALREADY()) {
                // Inline function 'kotlin.error' call
                var message = 'Cannot happen in ' + toString_0(tmp0);
                throw IllegalStateException_init_$Create$(toString(message));
              } else if (finalState === get_COMPLETING_RETRY()) {
                break $l$block;
              } else
                return finalState;
            }
          } else {
            return get_TOO_LATE_TO_CANCEL();
          }
        }
      }
    }
  }
  function getOrPromoteCancellingList($this, state) {
    var tmp1_elvis_lhs = state.get_list_wopuqv_k$();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp_0;
      if (state instanceof Empty) {
        tmp_0 = new NodeList();
      } else {
        if (state instanceof JobNode) {
          promoteSingleToNodeList($this, state);
          tmp_0 = null;
        } else {
          var message = 'State should have list: ' + toString(state);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
      tmp = tmp_0;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryMakeCancelling($this, state, rootCause) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var cancelling = new Finishing(list, false, rootCause);
    if (!$this._state_1.atomicfu$compareAndSet(state, cancelling))
      return false;
    notifyCancelling($this, list, rootCause);
    return true;
  }
  function tryMakeCompleting($this, state, proposedUpdate) {
    if (!(!(state == null) ? isInterface(state, Incomplete) : false))
      return get_COMPLETING_ALREADY();
    var tmp;
    var tmp_0;
    var tmp_1;
    if (state instanceof Empty) {
      tmp_1 = true;
    } else {
      tmp_1 = state instanceof JobNode;
    }
    if (tmp_1) {
      tmp_0 = !(state instanceof ChildHandleNode);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !(proposedUpdate instanceof CompletedExceptionally);
    } else {
      tmp = false;
    }
    if (tmp) {
      if (tryFinalizeSimpleState($this, state, proposedUpdate)) {
        return proposedUpdate;
      }
      return get_COMPLETING_RETRY();
    }
    return tryMakeCompletingSlowPath($this, state, proposedUpdate);
  }
  function tryMakeCompletingSlowPath($this, state, proposedUpdate) {
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return get_COMPLETING_RETRY();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var tmp1_elvis_lhs = state instanceof Finishing ? state : null;
    var finishing = tmp1_elvis_lhs == null ? new Finishing(list, false, null) : tmp1_elvis_lhs;
    var notifyRootCause = null;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    if (finishing.get_isCompleting_vi2bwp_k$())
      return get_COMPLETING_ALREADY();
    finishing.set_isCompleting_1h5iw_k$(true);
    if (!(finishing === state)) {
      if (!$this._state_1.atomicfu$compareAndSet(state, finishing))
        return get_COMPLETING_RETRY();
    }
    // Inline function 'kotlinx.coroutines.assert' call
    var wasCancelling = finishing.get_isCancelling_o1apv_k$();
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      finishing.addExceptionLocked_hjqo7b_k$(tmp0_safe_receiver.get_cause_iplhs0_k$());
    }
    // Inline function 'kotlin.takeIf' call
    var this_0 = finishing.get_rootCause_69dwxu_k$();
    var tmp_0;
    if (!wasCancelling) {
      tmp_0 = this_0;
    } else {
      tmp_0 = null;
    }
    notifyRootCause = tmp_0;
    var tmp2_safe_receiver = notifyRootCause;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      notifyCancelling($this, list, tmp2_safe_receiver);
    }
    var child = firstChild($this, state);
    if (!(child == null) && tryWaitForChild($this, finishing, child, proposedUpdate))
      return get_COMPLETING_WAITING_CHILDREN();
    return finalizeFinishingState($this, finishing, proposedUpdate);
  }
  function _get_exceptionOrNull__b3j7js($this, _this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4 instanceof CompletedExceptionally ? _this__u8e3s4 : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_cause_iplhs0_k$();
  }
  function firstChild($this, state) {
    var tmp1_elvis_lhs = state instanceof ChildHandleNode ? state : null;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = state.get_list_wopuqv_k$();
      tmp = tmp0_safe_receiver == null ? null : nextChild($this, tmp0_safe_receiver);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryWaitForChild($this, state, child, proposedUpdate) {
    var $this_0 = $this;
    var state_0 = state;
    var child_0 = child;
    var proposedUpdate_0 = proposedUpdate;
    $l$1: do {
      $l$0: do {
        var handle = invokeOnCompletion(child_0.childJob_1, VOID, false, new ChildCompletion($this_0, state_0, child_0, proposedUpdate_0));
        if (!(handle === NonDisposableHandle_getInstance()))
          return true;
        var tmp0_elvis_lhs = nextChild($this_0, child_0);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          return false;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var nextChild_0 = tmp;
        var tmp0 = $this_0;
        var tmp1 = state_0;
        var tmp3 = proposedUpdate_0;
        $this_0 = tmp0;
        state_0 = tmp1;
        child_0 = nextChild_0;
        proposedUpdate_0 = tmp3;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function continueCompleting($this, state, lastChild, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    var waitChild = nextChild($this, lastChild);
    if (!(waitChild == null) && tryWaitForChild($this, state, waitChild, proposedUpdate))
      return Unit_getInstance();
    var finalState = finalizeFinishingState($this, state, proposedUpdate);
    $this.afterCompletion_2p0irt_k$(finalState);
  }
  function nextChild($this, _this__u8e3s4) {
    var cur = _this__u8e3s4;
    $l$loop: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
      if (!cur.get__removed_4gr6sj_k$()) {
        break $l$loop;
      }
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      cur = cur.get__prev_e21d18_k$();
    }
    $l$loop_0: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
      cur = cur.get__next_joogec_k$();
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
      if (cur.get__removed_4gr6sj_k$())
        continue $l$loop_0;
      if (cur instanceof ChildHandleNode)
        return cur;
      if (cur instanceof NodeList)
        return null;
    }
  }
  function stateString($this, state) {
    var tmp;
    if (state instanceof Finishing) {
      tmp = state.get_isCancelling_o1apv_k$() ? 'Cancelling' : state.get_isCompleting_vi2bwp_k$() ? 'Completing' : 'Active';
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        tmp = state.get_isActive_quafmh_k$() ? 'Active' : 'New';
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = 'Cancelled';
        } else {
          tmp = 'Completed';
        }
      }
    }
    return tmp;
  }
  function Finishing(list, isCompleting, rootCause) {
    SynchronizedObject.call(this);
    this.list_1 = list;
    this._isCompleting_1 = atomic$boolean$1(isCompleting);
    this._rootCause_1 = atomic$ref$1(rootCause);
    this._exceptionsHolder_1 = atomic$ref$1(null);
  }
  protoOf(Finishing).get_list_wopuqv_k$ = function () {
    return this.list_1;
  };
  protoOf(Finishing).set_isCompleting_1h5iw_k$ = function (value) {
    this._isCompleting_1.set_kotlinx$atomicfu$value_tm3k58_k$(value);
  };
  protoOf(Finishing).get_isCompleting_vi2bwp_k$ = function () {
    return this._isCompleting_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  };
  protoOf(Finishing).set_rootCause_zflycc_k$ = function (value) {
    this._rootCause_1.set_kotlinx$atomicfu$value_508e3y_k$(value);
  };
  protoOf(Finishing).get_rootCause_69dwxu_k$ = function () {
    return this._rootCause_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  };
  protoOf(Finishing).get_isSealed_zdv4z3_k$ = function () {
    return _get_exceptionsHolder__nhszp(this) === get_SEALED();
  };
  protoOf(Finishing).get_isCancelling_o1apv_k$ = function () {
    return !(this.get_rootCause_69dwxu_k$() == null);
  };
  protoOf(Finishing).get_isActive_quafmh_k$ = function () {
    return this.get_rootCause_69dwxu_k$() == null;
  };
  protoOf(Finishing).sealLocked_m2r6b3_k$ = function (proposedException) {
    var eh = _get_exceptionsHolder__nhszp(this);
    var tmp;
    if (eh == null) {
      tmp = allocateList(this);
    } else {
      if (eh instanceof Error) {
        // Inline function 'kotlin.also' call
        var this_0 = allocateList(this);
        this_0.add_utx5q5_k$(eh);
        tmp = this_0;
      } else {
        if (eh instanceof ArrayList) {
          tmp = eh instanceof ArrayList ? eh : THROW_CCE();
        } else {
          var message = 'State is ' + toString_0(eh);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    var list = tmp;
    var rootCause = this.get_rootCause_69dwxu_k$();
    if (rootCause == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      list.add_dl6gt3_k$(0, rootCause);
    }
    if (!(proposedException == null) && !equals(proposedException, rootCause)) {
      list.add_utx5q5_k$(proposedException);
    }
    _set_exceptionsHolder__tqm22h(this, get_SEALED());
    return list;
  };
  protoOf(Finishing).addExceptionLocked_hjqo7b_k$ = function (exception) {
    var rootCause = this.get_rootCause_69dwxu_k$();
    if (rootCause == null) {
      this.set_rootCause_zflycc_k$(exception);
      return Unit_getInstance();
    }
    if (exception === rootCause)
      return Unit_getInstance();
    var eh = _get_exceptionsHolder__nhszp(this);
    if (eh == null) {
      _set_exceptionsHolder__tqm22h(this, exception);
    } else {
      if (eh instanceof Error) {
        if (exception === eh)
          return Unit_getInstance();
        // Inline function 'kotlin.apply' call
        var this_0 = allocateList(this);
        this_0.add_utx5q5_k$(eh);
        this_0.add_utx5q5_k$(exception);
        _set_exceptionsHolder__tqm22h(this, this_0);
      } else {
        if (eh instanceof ArrayList) {
          (eh instanceof ArrayList ? eh : THROW_CCE()).add_utx5q5_k$(exception);
        } else {
          // Inline function 'kotlin.error' call
          var message = 'State is ' + toString_0(eh);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
  };
  protoOf(Finishing).toString = function () {
    return 'Finishing[cancelling=' + this.get_isCancelling_o1apv_k$() + ', completing=' + this.get_isCompleting_vi2bwp_k$() + ', rootCause=' + toString_0(this.get_rootCause_69dwxu_k$()) + ', exceptions=' + toString_0(_get_exceptionsHolder__nhszp(this)) + ', list=' + this.list_1.toString() + ']';
  };
  function _get_isCancelling__hlz7m9($this, _this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof Finishing) {
      tmp = _this__u8e3s4.get_isCancelling_o1apv_k$();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this);
    this.parent_1 = parent;
    this.state_1 = state;
    this.child_1 = child;
    this.proposedUpdate_1 = proposedUpdate;
  }
  protoOf(ChildCompletion).invoke_py2q9a_k$ = function (cause) {
    continueCompleting(this.parent_1, this.state_1, this.child_1, this.proposedUpdate_1);
  };
  function AwaitContinuation(delegate, job) {
    CancellableContinuationImpl.call(this, delegate, 1);
    this.job_1 = job;
  }
  protoOf(AwaitContinuation).getContinuationCancellationCause_3nurbc_k$ = function (parent) {
    var state = this.job_1.get_state_2t6sbp_k$();
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.get_rootCause_69dwxu_k$();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        return tmp0_safe_receiver;
      }
    }
    if (state instanceof CompletedExceptionally)
      return state.get_cause_iplhs0_k$();
    return parent.getCancellationException_8i1q6u_k$();
  };
  protoOf(AwaitContinuation).nameString_cd9e9w_k$ = function () {
    return 'AwaitContinuation';
  };
  function awaitSuspend($this, $completion) {
    var cont = new AwaitContinuation(intercepted($completion), $this);
    cont.initCancellability_shqc60_k$();
    disposeOnCancellation(cont, invokeOnCompletion($this, VOID, VOID, new ResumeAwaitOnCompletion(cont)));
    return cont.getResult_fck196_k$();
  }
  function onAwaitInternalRegFunc($this, select, ignoredParam) {
    $l$loop: while (true) {
      var state = $this.get_state_2t6sbp_k$();
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        var tmp;
        if (state instanceof CompletedExceptionally) {
          tmp = state;
        } else {
          tmp = unboxState(state);
        }
        var result = tmp;
        select.selectInRegistrationPhase_ldg7ua_k$(result);
        return Unit_getInstance();
      }
      if (startInternal($this, state) >= 0)
        break $l$loop;
    }
    var disposableHandle = invokeOnCompletion($this, VOID, VOID, new SelectOnAwaitCompletionHandler($this, select));
    select.disposeOnCompletion_1gln1w_k$(disposableHandle);
  }
  function onAwaitInternalProcessResFunc($this, ignoredParam, result) {
    if (result instanceof CompletedExceptionally)
      throw result.get_cause_iplhs0_k$();
    return result;
  }
  function SelectOnAwaitCompletionHandler($outer, select) {
    this.$this_1 = $outer;
    JobNode.call(this);
    this.select_1 = select;
  }
  protoOf(SelectOnAwaitCompletionHandler).invoke_py2q9a_k$ = function (cause) {
    var state = this.$this_1.get_state_2t6sbp_k$();
    var tmp;
    if (state instanceof CompletedExceptionally) {
      tmp = state;
    } else {
      tmp = unboxState(state);
    }
    var result = tmp;
    this.select_1.trySelect_fbege0_k$(this.$this_1, result);
  };
  function JobSupport$registerSelectForOnJoin$ref() {
    var l = function (p0, p1, p2) {
      registerSelectForOnJoin(p0, p1, p2);
      return Unit_getInstance();
    };
    l.callableName = 'registerSelectForOnJoin';
    return l;
  }
  function JobSupport$_get_children_$slambda_k839f8(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JobSupport$_get_children_$slambda_k839f8).invoke_jau6kc_k$ = function ($this$sequence, $completion) {
    var tmp = this.create_ce2a14_k$($this$sequence, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_jau6kc_k$(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(8);
            this.state0__1 = this.this$0__1.get_state_2t6sbp_k$();
            var tmp_0 = this.state0__1;
            if (tmp_0 instanceof ChildHandleNode) {
              this.set_state_rjd8d0_k$(6);
              suspendResult = this.$this$sequence_1.yield_3xhcex_k$(this.state0__1.childJob_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1 = this.state0__1;
              if (!(tmp_1 == null) ? isInterface(tmp_1, Incomplete) : false) {
                this.tmp0_safe_receiver1__1 = this.state0__1.get_list_wopuqv_k$();
                if (this.tmp0_safe_receiver1__1 == null) {
                  this.WHEN_RESULT2__1 = null;
                  this.set_state_rjd8d0_k$(5);
                  continue $sm;
                } else {
                  var tmp_2 = this;
                  tmp_2.tmp03__1 = this.tmp0_safe_receiver1__1;
                  this.this4__1 = this.tmp03__1;
                  var tmp_3 = this;
                  tmp_3.tmp05__1 = this.this4__1;
                  this.list6__1 = this.tmp05__1;
                  var tmp_4 = this;
                  tmp_4.tmp07__1 = this.list6__1;
                  this.this8__1 = this.tmp07__1;
                  this.cur9__1 = this.this8__1.get__next_joogec_k$();
                  this.set_state_rjd8d0_k$(1);
                  continue $sm;
                }
              } else {
                this.set_state_rjd8d0_k$(7);
                continue $sm;
              }
            }

          case 1:
            if (!!equals(this.cur9__1, this.this8__1)) {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

            var tmp_5 = this.cur9__1;
            if (tmp_5 instanceof ChildHandleNode) {
              var tmp_6 = this;
              tmp_6.tmp010__1 = this.cur9__1;
              this.it11__1 = this.tmp010__1;
              this.set_state_rjd8d0_k$(2);
              suspendResult = this.$this$sequence_1.yield_3xhcex_k$(this.it11__1.childJob_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

          case 2:
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            this.cur9__1 = this.cur9__1.get__next_joogec_k$();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 4:
            var tmp_7 = this;
            tmp_7.WHEN_RESULT2__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(5);
            continue $sm;
          case 5:
            this.set_state_rjd8d0_k$(7);
            continue $sm;
          case 6:
            this.set_state_rjd8d0_k$(7);
            continue $sm;
          case 7:
            return Unit_getInstance();
          case 8:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 8) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).create_ce2a14_k$ = function ($this$sequence, completion) {
    var i = new JobSupport$_get_children_$slambda_k839f8(this.this$0__1, completion);
    i.$this$sequence_1 = $this$sequence;
    return i;
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).create_wyq9v6_k$ = function (value, completion) {
    return this.create_ce2a14_k$(value instanceof SequenceScope ? value : THROW_CCE(), completion);
  };
  function JobSupport$_get_children_$slambda_k839f8_0(this$0, resultContinuation) {
    var i = new JobSupport$_get_children_$slambda_k839f8(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.invoke_jau6kc_k$($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function JobSupport$onAwaitInternalRegFunc$ref() {
    var l = function (p0, p1, p2) {
      onAwaitInternalRegFunc(p0, p1, p2);
      return Unit_getInstance();
    };
    l.callableName = 'onAwaitInternalRegFunc';
    return l;
  }
  function JobSupport$onAwaitInternalProcessResFunc$ref() {
    var l = function (p0, p1, p2) {
      return onAwaitInternalProcessResFunc(p0, p1, p2);
    };
    l.callableName = 'onAwaitInternalProcessResFunc';
    return l;
  }
  function JobSupport(active) {
    this._state_1 = atomic$ref$1(active ? get_EMPTY_ACTIVE() : get_EMPTY_NEW());
    this._parentHandle_1 = atomic$ref$1(null);
  }
  protoOf(JobSupport).get_key_18j28a_k$ = function () {
    return Key_getInstance_2();
  };
  protoOf(JobSupport).set_parentHandle_knepiy_k$ = function (value) {
    this._parentHandle_1.set_kotlinx$atomicfu$value_508e3y_k$(value);
  };
  protoOf(JobSupport).get_parentHandle_h80e5u_k$ = function () {
    return this._parentHandle_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  };
  protoOf(JobSupport).get_parent_hy4reb_k$ = function () {
    var tmp0_safe_receiver = this.get_parentHandle_h80e5u_k$();
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_parent_hy4reb_k$();
  };
  protoOf(JobSupport).initParentJob_jbhsg3_k$ = function (parent) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (parent == null) {
      this.set_parentHandle_knepiy_k$(NonDisposableHandle_getInstance());
      return Unit_getInstance();
    }
    parent.start_1tchgi_k$();
    var handle = parent.attachChild_314ws0_k$(this);
    this.set_parentHandle_knepiy_k$(handle);
    if (this.get_isCompleted_a6j6c8_k$()) {
      handle.dispose_3nnxhr_k$();
      this.set_parentHandle_knepiy_k$(NonDisposableHandle_getInstance());
    }
  };
  protoOf(JobSupport).get_state_2t6sbp_k$ = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this._state_1;
    while (true) {
      var state = this_0.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (!(state instanceof OpDescriptor))
        return state;
      state.perform_8emi3i_k$(this);
    }
  };
  protoOf(JobSupport).get_isActive_quafmh_k$ = function () {
    var state = this.get_state_2t6sbp_k$();
    var tmp;
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state.get_isActive_quafmh_k$();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(JobSupport).get_isCompleted_a6j6c8_k$ = function () {
    var tmp = this.get_state_2t6sbp_k$();
    return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
  };
  protoOf(JobSupport).get_isCancelled_trk8pu_k$ = function () {
    var state = this.get_state_2t6sbp_k$();
    var tmp;
    if (state instanceof CompletedExceptionally) {
      tmp = true;
    } else {
      var tmp_0;
      if (state instanceof Finishing) {
        tmp_0 = state.get_isCancelling_o1apv_k$();
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(JobSupport).start_1tchgi_k$ = function () {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var state = this.get_state_2t6sbp_k$();
      var tmp0_subject = startInternal(this, state);
      if (tmp0_subject === 0)
        return false;
      else if (tmp0_subject === 1)
        return true;
    }
  };
  protoOf(JobSupport).onStart_qsx7gt_k$ = function () {
  };
  protoOf(JobSupport).getCancellationException_8i1q6u_k$ = function () {
    var state = this.get_state_2t6sbp_k$();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.get_rootCause_69dwxu_k$();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.toCancellationException_70r72h_k$(tmp0_safe_receiver, get_classSimpleName(this) + ' is cancelling');
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var message = 'Job is still new or active: ' + this.toString();
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        var message_0 = 'Job is still new or active: ' + this.toString();
        throw IllegalStateException_init_$Create$(toString(message_0));
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = this.toCancellationException$default_6uwjik_k$(state.get_cause_iplhs0_k$());
        } else {
          tmp = new JobCancellationException(get_classSimpleName(this) + ' has completed normally', null, this);
        }
      }
    }
    return tmp;
  };
  protoOf(JobSupport).toCancellationException_70r72h_k$ = function (_this__u8e3s4, message) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof CancellationException ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(message == null ? this.cancellationExceptionMessage_a64063_k$() : message, _this__u8e3s4, this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(JobSupport).toCancellationException$default_6uwjik_k$ = function (_this__u8e3s4, message, $super) {
    message = message === VOID ? null : message;
    return $super === VOID ? this.toCancellationException_70r72h_k$(_this__u8e3s4, message) : $super.toCancellationException_70r72h_k$.call(this, _this__u8e3s4, message);
  };
  protoOf(JobSupport).get_completionCause_bxx3i4_k$ = function () {
    var state = this.get_state_2t6sbp_k$();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_elvis_lhs = state.get_rootCause_69dwxu_k$();
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        var message = 'Job is still new or active: ' + this.toString();
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        var message_0 = 'Job is still new or active: ' + this.toString();
        throw IllegalStateException_init_$Create$(toString(message_0));
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = state.get_cause_iplhs0_k$();
        } else {
          tmp = null;
        }
      }
    }
    return tmp;
  };
  protoOf(JobSupport).get_completionCauseHandled_bdr920_k$ = function () {
    // Inline function 'kotlin.let' call
    var it = this.get_state_2t6sbp_k$();
    var tmp;
    if (it instanceof CompletedExceptionally) {
      tmp = it.get_handled_cq14k3_k$();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(JobSupport).invokeOnCompletion_n6cffu_k$ = function (handler) {
    return this.invokeOnCompletionInternal_2fo53g_k$(false, true, new UserSupplied_0(handler));
  };
  protoOf(JobSupport).invokeOnCompletion_sct3wq_k$ = function (onCancelling, invokeImmediately, handler) {
    return this.invokeOnCompletionInternal_2fo53g_k$(onCancelling, invokeImmediately, new UserSupplied_0(handler));
  };
  protoOf(JobSupport).invokeOnCompletionInternal_2fo53g_k$ = function (onCancelling, invokeImmediately, handler) {
    var node = makeNode(this, handler, onCancelling);
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp0 = this.get_state_2t6sbp_k$();
      $l$block: {
        if (tmp0 instanceof Empty) {
          if (tmp0.isActive_1) {
            if (this._state_1.atomicfu$compareAndSet(tmp0, node))
              return node;
          } else {
            promoteEmptyToNodeList(this, tmp0);
          }
        } else {
          if (!(tmp0 == null) ? isInterface(tmp0, Incomplete) : false) {
            var list = tmp0.get_list_wopuqv_k$();
            if (list == null) {
              promoteSingleToNodeList(this, tmp0 instanceof JobNode ? tmp0 : THROW_CCE());
            } else {
              var rootCause = null;
              var handle = NonDisposableHandle_getInstance();
              var tmp;
              if (onCancelling) {
                tmp = tmp0 instanceof Finishing;
              } else {
                tmp = false;
              }
              if (tmp) {
                // Inline function 'kotlinx.coroutines.internal.synchronized' call
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
                rootCause = tmp0.get_rootCause_69dwxu_k$();
                var tmp_0;
                if (rootCause == null) {
                  tmp_0 = true;
                } else {
                  var tmp_1;
                  if (handler instanceof ChildHandleNode) {
                    tmp_1 = !tmp0.get_isCompleting_vi2bwp_k$();
                  } else {
                    tmp_1 = false;
                  }
                  tmp_0 = tmp_1;
                }
                if (tmp_0) {
                  if (!addLastAtomic(this, tmp0, list, node)) {
                    break $l$block;
                  }
                  if (rootCause == null)
                    return node;
                  handle = node;
                }
              }
              if (!(rootCause == null)) {
                if (invokeImmediately) {
                  handler.invoke_py2q9a_k$(rootCause);
                }
                return handle;
              } else {
                if (addLastAtomic(this, tmp0, list, node))
                  return node;
              }
            }
          } else {
            if (invokeImmediately) {
              var tmp1_safe_receiver = tmp0 instanceof CompletedExceptionally ? tmp0 : null;
              handler.invoke_py2q9a_k$(tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_cause_iplhs0_k$());
            }
            return NonDisposableHandle_getInstance();
          }
        }
      }
    }
  };
  protoOf(JobSupport).join_o20dar_k$ = function ($completion) {
    if (!joinInternal(this)) {
      // Inline function 'kotlin.js.getCoroutineContext' call
      var tmp$ret$0 = $completion.get_context_h02k06_k$();
      ensureActive(tmp$ret$0);
      return Unit_getInstance();
    }
    return joinSuspend(this, $completion);
  };
  protoOf(JobSupport).get_onJoin_hnj4j6_k$ = function () {
    var tmp = JobSupport$registerSelectForOnJoin$ref();
    return new SelectClause0Impl(this, typeof tmp === 'function' ? tmp : THROW_CCE());
  };
  protoOf(JobSupport).removeNode_mzn109_k$ = function (node) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var state = this.get_state_2t6sbp_k$();
      if (state instanceof JobNode) {
        if (!(state === node))
          return Unit_getInstance();
        if (this._state_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
          return Unit_getInstance();
      } else {
        if (!(state == null) ? isInterface(state, Incomplete) : false) {
          if (!(state.get_list_wopuqv_k$() == null)) {
            node.remove_fgfybg_k$();
          }
          return Unit_getInstance();
        } else {
          return Unit_getInstance();
        }
      }
    }
  };
  protoOf(JobSupport).get_onCancelComplete_jew0sy_k$ = function () {
    return false;
  };
  protoOf(JobSupport).cancel_hkmm2i_k$ = function (cause) {
    var tmp;
    if (cause == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(null == null ? this.cancellationExceptionMessage_a64063_k$() : null, null, this);
    } else {
      tmp = cause;
    }
    this.cancelInternal_fraw7c_k$(tmp);
  };
  protoOf(JobSupport).cancellationExceptionMessage_a64063_k$ = function () {
    return 'Job was cancelled';
  };
  protoOf(JobSupport).cancel_e74who_k$ = function (cause) {
    var tmp1_elvis_lhs = cause == null ? null : this.toCancellationException$default_6uwjik_k$(cause);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(null == null ? this.cancellationExceptionMessage_a64063_k$() : null, null, this);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    this.cancelInternal_fraw7c_k$(tmp);
    return true;
  };
  protoOf(JobSupport).cancelInternal_fraw7c_k$ = function (cause) {
    this.cancelImpl_465b6c_k$(cause);
  };
  protoOf(JobSupport).parentCancelled_ev6cqi_k$ = function (parentJob) {
    this.cancelImpl_465b6c_k$(parentJob);
  };
  protoOf(JobSupport).childCancelled_hsnipy_k$ = function (cause) {
    if (cause instanceof CancellationException)
      return true;
    return this.cancelImpl_465b6c_k$(cause) && this.get_handlesException_ctmhwg_k$();
  };
  protoOf(JobSupport).cancelCoroutine_rpko3c_k$ = function (cause) {
    return this.cancelImpl_465b6c_k$(cause);
  };
  protoOf(JobSupport).cancelImpl_465b6c_k$ = function (cause) {
    var finalState = get_COMPLETING_ALREADY();
    if (this.get_onCancelComplete_jew0sy_k$()) {
      finalState = cancelMakeCompleting(this, cause);
      if (finalState === get_COMPLETING_WAITING_CHILDREN())
        return true;
    }
    if (finalState === get_COMPLETING_ALREADY()) {
      finalState = makeCancelling(this, cause);
    }
    var tmp;
    if (finalState === get_COMPLETING_ALREADY()) {
      tmp = true;
    } else if (finalState === get_COMPLETING_WAITING_CHILDREN()) {
      tmp = true;
    } else if (finalState === get_TOO_LATE_TO_CANCEL()) {
      tmp = false;
    } else {
      this.afterCompletion_2p0irt_k$(finalState);
      tmp = true;
    }
    return tmp;
  };
  protoOf(JobSupport).defaultCancellationException_qzyq9n_k$ = function (message, cause) {
    return new JobCancellationException(message == null ? this.cancellationExceptionMessage_a64063_k$() : message, cause, this);
  };
  protoOf(JobSupport).getChildJobCancellationCause_wx9uoh_k$ = function () {
    var state = this.get_state_2t6sbp_k$();
    var tmp;
    if (state instanceof Finishing) {
      tmp = state.get_rootCause_69dwxu_k$();
    } else {
      if (state instanceof CompletedExceptionally) {
        tmp = state.get_cause_iplhs0_k$();
      } else {
        if (!(state == null) ? isInterface(state, Incomplete) : false) {
          var message = 'Cannot be cancelling child in this state: ' + toString_0(state);
          throw IllegalStateException_init_$Create$(toString(message));
        } else {
          tmp = null;
        }
      }
    }
    var rootCause = tmp;
    var tmp1_elvis_lhs = rootCause instanceof CancellationException ? rootCause : null;
    return tmp1_elvis_lhs == null ? new JobCancellationException('Parent job is ' + stateString(this, state), rootCause, this) : tmp1_elvis_lhs;
  };
  protoOf(JobSupport).makeCompleting_fohkwa_k$ = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp0 = this.get_state_2t6sbp_k$();
      $l$block: {
        var finalState = tryMakeCompleting(this, tmp0, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          return false;
        else if (finalState === get_COMPLETING_WAITING_CHILDREN())
          return true;
        else if (finalState === get_COMPLETING_RETRY()) {
          break $l$block;
        } else {
          this.afterCompletion_2p0irt_k$(finalState);
          return true;
        }
      }
    }
  };
  protoOf(JobSupport).makeCompletingOnce_m8ggg9_k$ = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp0 = this.get_state_2t6sbp_k$();
      $l$block: {
        var finalState = tryMakeCompleting(this, tmp0, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          throw IllegalStateException_init_$Create$_0('Job ' + this.toString() + ' is already complete or completing, ' + ('but is being completed with ' + toString_0(proposedUpdate)), _get_exceptionOrNull__b3j7js(this, proposedUpdate));
        else if (finalState === get_COMPLETING_RETRY()) {
          break $l$block;
        } else
          return finalState;
      }
    }
  };
  protoOf(JobSupport).get_children_4cwbp4_k$ = function () {
    return sequence(JobSupport$_get_children_$slambda_k839f8_0(this, null));
  };
  protoOf(JobSupport).attachChild_314ws0_k$ = function (child) {
    var tmp = invokeOnCompletion(this, true, VOID, new ChildHandleNode(child));
    return isInterface(tmp, ChildHandle) ? tmp : THROW_CCE();
  };
  protoOf(JobSupport).handleOnCompletionException_l1g6ri_k$ = function (exception) {
    throw exception;
  };
  protoOf(JobSupport).onCancelling_aqzbl5_k$ = function (cause) {
  };
  protoOf(JobSupport).get_isScopedCoroutine_rwmmff_k$ = function () {
    return false;
  };
  protoOf(JobSupport).get_handlesException_ctmhwg_k$ = function () {
    return true;
  };
  protoOf(JobSupport).handleJobException_9fdet1_k$ = function (exception) {
    return false;
  };
  protoOf(JobSupport).onCompletionInternal_38s8uv_k$ = function (state) {
  };
  protoOf(JobSupport).afterCompletion_2p0irt_k$ = function (state) {
  };
  protoOf(JobSupport).toString = function () {
    return this.toDebugString_v3moy1_k$() + '@' + get_hexAddress(this);
  };
  protoOf(JobSupport).toDebugString_v3moy1_k$ = function () {
    return this.nameString_4rfuxd_k$() + '{' + stateString(this, this.get_state_2t6sbp_k$()) + '}';
  };
  protoOf(JobSupport).nameString_4rfuxd_k$ = function () {
    return get_classSimpleName(this);
  };
  protoOf(JobSupport).get_isCompletedExceptionally_i25lfz_k$ = function () {
    var tmp = this.get_state_2t6sbp_k$();
    return tmp instanceof CompletedExceptionally;
  };
  protoOf(JobSupport).getCompletionExceptionOrNull_snuvbb_k$ = function () {
    var state = this.get_state_2t6sbp_k$();
    // Inline function 'kotlin.check' call
    if (!!(!(state == null) ? isInterface(state, Incomplete) : false)) {
      var message = 'This job has not completed yet';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return _get_exceptionOrNull__b3j7js(this, state);
  };
  protoOf(JobSupport).getCompletedInternal_tfzdln_k$ = function () {
    var state = this.get_state_2t6sbp_k$();
    // Inline function 'kotlin.check' call
    if (!!(!(state == null) ? isInterface(state, Incomplete) : false)) {
      var message = 'This job has not completed yet';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (state instanceof CompletedExceptionally)
      throw state.get_cause_iplhs0_k$();
    return unboxState(state);
  };
  protoOf(JobSupport).awaitInternal_5d94r6_k$ = function ($completion) {
    $l$loop: while (true) {
      var state = this.get_state_2t6sbp_k$();
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        if (state instanceof CompletedExceptionally) {
          // Inline function 'kotlinx.coroutines.internal.recoverAndThrow' call
          throw state.get_cause_iplhs0_k$();
        }
        return unboxState(state);
      }
      if (startInternal(this, state) >= 0)
        break $l$loop;
    }
    return awaitSuspend(this, $completion);
  };
  protoOf(JobSupport).get_onAwaitInternal_onp3dh_k$ = function () {
    var tmp = JobSupport$onAwaitInternalRegFunc$ref();
    var tmp_0 = typeof tmp === 'function' ? tmp : THROW_CCE();
    var tmp_1 = JobSupport$onAwaitInternalProcessResFunc$ref();
    return new SelectClause1Impl(this, tmp_0, typeof tmp_1 === 'function' ? tmp_1 : THROW_CCE());
  };
  function boxIncomplete(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp;
    if (!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Incomplete) : false) {
      tmp = new IncompleteStateBox(_this__u8e3s4);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function JobCancellingNode() {
    JobNode.call(this);
  }
  function get_FALSE() {
    return FALSE;
  }
  var FALSE;
  function get_TRUE() {
    return TRUE;
  }
  var TRUE;
  function get_RETRY() {
    return RETRY;
  }
  var RETRY;
  function InactiveNodeList(list) {
    this.list_1 = list;
  }
  protoOf(InactiveNodeList).get_list_wopuqv_k$ = function () {
    return this.list_1;
  };
  protoOf(InactiveNodeList).get_isActive_quafmh_k$ = function () {
    return false;
  };
  protoOf(InactiveNodeList).toString = function () {
    return get_DEBUG() ? this.list_1.getString_gb1pt9_k$('New') : anyToString(this);
  };
  function ChildHandleNode(childJob) {
    JobCancellingNode.call(this);
    this.childJob_1 = childJob;
  }
  protoOf(ChildHandleNode).get_childJob_4cx54m_k$ = function () {
    return this.childJob_1;
  };
  protoOf(ChildHandleNode).get_parent_hy4reb_k$ = function () {
    return this.get_job_18j2r0_k$();
  };
  protoOf(ChildHandleNode).invoke_py2q9a_k$ = function (cause) {
    return this.childJob_1.parentCancelled_ev6cqi_k$(this.get_job_18j2r0_k$());
  };
  protoOf(ChildHandleNode).childCancelled_hsnipy_k$ = function (cause) {
    return this.get_job_18j2r0_k$().childCancelled_hsnipy_k$(cause);
  };
  function _get_handler__z70553_1($this) {
    return $this.handler_1;
  }
  function _get__invoked__yhwoci($this) {
    return $this._invoked_1;
  }
  function InvokeOnCancelling(handler) {
    JobCancellingNode.call(this);
    this.handler_1 = handler;
    this._invoked_1 = atomic$int$1(0);
  }
  protoOf(InvokeOnCancelling).invoke_py2q9a_k$ = function (cause) {
    if (this._invoked_1.atomicfu$compareAndSet(0, 1)) {
      this.handler_1.invoke_py2q9a_k$(cause);
    }
  };
  function _get_handler__z70553_2($this) {
    return $this.handler_1;
  }
  function InvokeOnCompletion(handler) {
    JobNode.call(this);
    this.handler_1 = handler;
  }
  protoOf(InvokeOnCompletion).invoke_py2q9a_k$ = function (cause) {
    return this.handler_1.invoke_py2q9a_k$(cause);
  };
  function _get_continuation__y3gzck_0($this) {
    return $this.continuation_1;
  }
  function ResumeOnCompletion(continuation) {
    JobNode.call(this);
    this.continuation_1 = continuation;
  }
  protoOf(ResumeOnCompletion).invoke_py2q9a_k$ = function (cause) {
    // Inline function 'kotlin.coroutines.resume' call
    var this_0 = this.continuation_1;
    // Inline function 'kotlin.Companion.success' call
    Companion_getInstance();
    var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
    this_0.resumeWith_dtxwbr_k$(tmp$ret$0);
    return Unit_getInstance();
  };
  function unboxState(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp0_safe_receiver = _this__u8e3s4 instanceof IncompleteStateBox ? _this__u8e3s4 : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.state_1;
    return tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  }
  function _get_continuation__y3gzck_1($this) {
    return $this.continuation_1;
  }
  function ResumeAwaitOnCompletion(continuation) {
    JobNode.call(this);
    this.continuation_1 = continuation;
  }
  protoOf(ResumeAwaitOnCompletion).invoke_py2q9a_k$ = function (cause) {
    var state = this.get_job_18j2r0_k$().get_state_2t6sbp_k$();
    // Inline function 'kotlinx.coroutines.assert' call
    if (state instanceof CompletedExceptionally) {
      var tmp0 = this.continuation_1;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var exception = state.get_cause_iplhs0_k$();
      // Inline function 'kotlin.Companion.failure' call
      Companion_getInstance();
      var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
      tmp0.resumeWith_dtxwbr_k$(tmp$ret$1);
    } else {
      var tmp0_0 = this.continuation_1;
      var tmp = unboxState(state);
      // Inline function 'kotlin.coroutines.resume' call
      var value = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      var tmp$ret$3 = _Result___init__impl__xyqfz8(value);
      tmp0_0.resumeWith_dtxwbr_k$(tmp$ret$3);
    }
  };
  function IncompleteStateBox(state) {
    this.state_1 = state;
  }
  protoOf(IncompleteStateBox).get_state_iypx7s_k$ = function () {
    return this.state_1;
  };
  function ChildContinuation(child) {
    JobCancellingNode.call(this);
    this.child_1 = child;
  }
  protoOf(ChildContinuation).get_child_ipppmb_k$ = function () {
    return this.child_1;
  };
  protoOf(ChildContinuation).invoke_py2q9a_k$ = function (cause) {
    this.child_1.parentCancelled_jw71o9_k$(this.child_1.getContinuationCancellationCause_3nurbc_k$(this.get_job_18j2r0_k$()));
  };
  function handlesExceptionF($this) {
    var tmp = $this.get_parentHandle_h80e5u_k$();
    var tmp0_safe_receiver = tmp instanceof ChildHandleNode ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_job_18j2r0_k$();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parentJob = tmp_0;
    while (true) {
      if (parentJob.get_handlesException_ctmhwg_k$())
        return true;
      var tmp_1 = parentJob.get_parentHandle_h80e5u_k$();
      var tmp2_safe_receiver = tmp_1 instanceof ChildHandleNode ? tmp_1 : null;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.get_job_18j2r0_k$();
      var tmp_2;
      if (tmp3_elvis_lhs == null) {
        return false;
      } else {
        tmp_2 = tmp3_elvis_lhs;
      }
      parentJob = tmp_2;
    }
  }
  function JobImpl(parent) {
    JobSupport.call(this, true);
    this.initParentJob_jbhsg3_k$(parent);
    this.handlesException_1 = handlesExceptionF(this);
  }
  protoOf(JobImpl).get_onCancelComplete_jew0sy_k$ = function () {
    return true;
  };
  protoOf(JobImpl).get_handlesException_ctmhwg_k$ = function () {
    return this.handlesException_1;
  };
  protoOf(JobImpl).complete_9ww6vb_k$ = function () {
    return this.makeCompleting_fohkwa_k$(Unit_getInstance());
  };
  protoOf(JobImpl).completeExceptionally_xyzekf_k$ = function (exception) {
    return this.makeCompleting_fohkwa_k$(new CompletedExceptionally(exception));
  };
  var properties_initialized_JobSupport_kt_5iq8a4;
  function _init_properties_JobSupport_kt__68f172() {
    if (!properties_initialized_JobSupport_kt_5iq8a4) {
      properties_initialized_JobSupport_kt_5iq8a4 = true;
      COMPLETING_ALREADY = new Symbol('COMPLETING_ALREADY');
      COMPLETING_WAITING_CHILDREN = new Symbol('COMPLETING_WAITING_CHILDREN');
      COMPLETING_RETRY = new Symbol('COMPLETING_RETRY');
      TOO_LATE_TO_CANCEL = new Symbol('TOO_LATE_TO_CANCEL');
      SEALED = new Symbol('SEALED');
      EMPTY_NEW = new Empty(false);
      EMPTY_ACTIVE = new Empty(true);
    }
  }
  function MainCoroutineDispatcher() {
    CoroutineDispatcher.call(this);
  }
  protoOf(MainCoroutineDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.toStringInternalImpl_hcqz93_k$();
    return tmp0_elvis_lhs == null ? get_classSimpleName(this) + '@' + get_hexAddress(this) : tmp0_elvis_lhs;
  };
  protoOf(MainCoroutineDispatcher).limitedParallelism_b7nunq_k$ = function (parallelism) {
    checkParallelism(parallelism);
    return this;
  };
  protoOf(MainCoroutineDispatcher).toStringInternalImpl_hcqz93_k$ = function () {
    var main = Dispatchers_getInstance().get_Main_wo5vz6_k$();
    if (this === main)
      return 'Dispatchers.Main';
    var tmp;
    try {
      tmp = main.get_immediate_r3y8eg_k$();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof UnsupportedOperationException) {
        var e = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var immediate = tmp;
    if (this === immediate)
      return 'Dispatchers.Main.immediate';
    return null;
  };
  function SupervisorJob(parent) {
    parent = parent === VOID ? null : parent;
    return new SupervisorJobImpl(parent);
  }
  function SupervisorJobImpl(parent) {
    JobImpl.call(this, parent);
  }
  protoOf(SupervisorJobImpl).childCancelled_hsnipy_k$ = function (cause) {
    return false;
  };
  function TimeoutCancellationException_init_$Init$(message, $this) {
    TimeoutCancellationException.call($this, message, null);
    return $this;
  }
  function TimeoutCancellationException_init_$Create$(message) {
    var tmp = TimeoutCancellationException_init_$Init$(message, objectCreate(protoOf(TimeoutCancellationException)));
    captureStack(tmp, TimeoutCancellationException_init_$Create$);
    return tmp;
  }
  function TimeoutCancellationException(message, coroutine) {
    CancellationException_init_$Init$(message, this);
    captureStack(this, TimeoutCancellationException);
    this.coroutine_1 = coroutine;
  }
  protoOf(TimeoutCancellationException).get_coroutine_nk9kjm_k$ = function () {
    return this.coroutine_1;
  };
  protoOf(TimeoutCancellationException).createCopy_mmw9ld_k$ = function () {
    var tmp0_elvis_lhs = this.message;
    // Inline function 'kotlin.also' call
    var this_0 = new TimeoutCancellationException(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, this.coroutine_1);
    initCause(this_0, this);
    return this_0;
  };
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  protoOf(Unconfined).limitedParallelism_b7nunq_k$ = function (parallelism) {
    throw UnsupportedOperationException_init_$Create$('limitedParallelism is not supported for Dispatchers.Unconfined');
  };
  protoOf(Unconfined).isDispatchNeeded_ft82v4_k$ = function (context) {
    return false;
  };
  protoOf(Unconfined).dispatch_qa3n0o_k$ = function (context, block) {
    var yieldContext = context.get_y2st91_k$(Key_getInstance_3());
    if (!(yieldContext == null)) {
      yieldContext.dispatcherWasUnconfined_1 = true;
      return Unit_getInstance();
    }
    throw UnsupportedOperationException_init_$Create$('Dispatchers.Unconfined.dispatch function can only be used by the yield function. If you wrap Unconfined dispatcher in your code, make sure you properly delegate isDispatchNeeded and dispatch calls.');
  };
  protoOf(Unconfined).toString = function () {
    return 'Dispatchers.Unconfined';
  };
  var Unconfined_instance;
  function Unconfined_getInstance() {
    if (Unconfined_instance == null)
      new Unconfined();
    return Unconfined_instance;
  }
  function Key_3() {
    Key_instance_2 = this;
  }
  var Key_instance_2;
  function Key_getInstance_3() {
    if (Key_instance_2 == null)
      new Key_3();
    return Key_instance_2;
  }
  function YieldContext() {
    Key_getInstance_3();
    AbstractCoroutineContextElement.call(this, Key_getInstance_3());
    this.dispatcherWasUnconfined_1 = false;
  }
  protoOf(YieldContext).set_dispatcherWasUnconfined_dtzy9d_k$ = function (_set____db54di) {
    this.dispatcherWasUnconfined_1 = _set____db54di;
  };
  protoOf(YieldContext).get_dispatcherWasUnconfined_gkf39i_k$ = function () {
    return this.dispatcherWasUnconfined_1;
  };
  function Waiter() {
  }
  function get_NO_ELEMENT() {
    _init_properties_BroadcastChannel_kt__6bnf1a();
    return NO_ELEMENT;
  }
  var NO_ELEMENT;
  var properties_initialized_BroadcastChannel_kt_tirhqc;
  function _init_properties_BroadcastChannel_kt__6bnf1a() {
    if (!properties_initialized_BroadcastChannel_kt_tirhqc) {
      properties_initialized_BroadcastChannel_kt_tirhqc = true;
      NO_ELEMENT = new Symbol('NO_ELEMENT');
    }
  }
  var BufferOverflow_SUSPEND_instance;
  var BufferOverflow_DROP_OLDEST_instance;
  var BufferOverflow_DROP_LATEST_instance;
  function values_0() {
    return [BufferOverflow_SUSPEND_getInstance(), BufferOverflow_DROP_OLDEST_getInstance(), BufferOverflow_DROP_LATEST_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'SUSPEND':
        return BufferOverflow_SUSPEND_getInstance();
      case 'DROP_OLDEST':
        return BufferOverflow_DROP_OLDEST_getInstance();
      case 'DROP_LATEST':
        return BufferOverflow_DROP_LATEST_getInstance();
      default:
        BufferOverflow_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var BufferOverflow_entriesInitialized;
  function BufferOverflow_initEntries() {
    if (BufferOverflow_entriesInitialized)
      return Unit_getInstance();
    BufferOverflow_entriesInitialized = true;
    BufferOverflow_SUSPEND_instance = new BufferOverflow('SUSPEND', 0);
    BufferOverflow_DROP_OLDEST_instance = new BufferOverflow('DROP_OLDEST', 1);
    BufferOverflow_DROP_LATEST_instance = new BufferOverflow('DROP_LATEST', 2);
  }
  var $ENTRIES_0;
  function BufferOverflow(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function BufferOverflow_SUSPEND_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_SUSPEND_instance;
  }
  function BufferOverflow_DROP_OLDEST_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_DROP_OLDEST_instance;
  }
  function BufferOverflow_DROP_LATEST_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_DROP_LATEST_instance;
  }
  function get_NULL_SEGMENT() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return NULL_SEGMENT;
  }
  var NULL_SEGMENT;
  function get_SEGMENT_SIZE() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return SEGMENT_SIZE;
  }
  var SEGMENT_SIZE;
  function get_EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS;
  }
  var EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS;
  function get_BUFFERED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return BUFFERED;
  }
  var BUFFERED;
  function get_IN_BUFFER() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return IN_BUFFER;
  }
  var IN_BUFFER;
  function get_RESUMING_BY_RCV() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return RESUMING_BY_RCV;
  }
  var RESUMING_BY_RCV;
  function get_RESUMING_BY_EB() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return RESUMING_BY_EB;
  }
  var RESUMING_BY_EB;
  function get_POISONED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return POISONED;
  }
  var POISONED;
  function get_DONE_RCV() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return DONE_RCV;
  }
  var DONE_RCV;
  function get_INTERRUPTED_SEND() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return INTERRUPTED_SEND;
  }
  var INTERRUPTED_SEND;
  function get_INTERRUPTED_RCV() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return INTERRUPTED_RCV;
  }
  var INTERRUPTED_RCV;
  function get_CHANNEL_CLOSED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return CHANNEL_CLOSED;
  }
  var CHANNEL_CLOSED;
  function get_SUSPEND() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return SUSPEND;
  }
  var SUSPEND;
  function get_SUSPEND_NO_WAITER() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return SUSPEND_NO_WAITER;
  }
  var SUSPEND_NO_WAITER;
  function get_FAILED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return FAILED;
  }
  var FAILED;
  function get_NO_RECEIVE_RESULT() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return NO_RECEIVE_RESULT;
  }
  var NO_RECEIVE_RESULT;
  function get_CLOSE_HANDLER_CLOSED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return CLOSE_HANDLER_CLOSED;
  }
  var CLOSE_HANDLER_CLOSED;
  function get_CLOSE_HANDLER_INVOKED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return CLOSE_HANDLER_INVOKED;
  }
  var CLOSE_HANDLER_INVOKED;
  function get_NO_CLOSE_CAUSE() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return NO_CLOSE_CAUSE;
  }
  var NO_CLOSE_CAUSE;
  function _get__channel__lc0xvd($this) {
    return $this._channel_1;
  }
  function _get_data__d5abxd($this) {
    return $this.data_1;
  }
  function setElementLazy($this, index, value) {
    // Inline function 'kotlinx.atomicfu.AtomicRef.lazySet' call
    $this.data_1.atomicfu$get(imul(index, 2)).set_kotlinx$atomicfu$value_508e3y_k$(value);
  }
  function ChannelSegment(id, prev, channel, pointers) {
    Segment.call(this, id, prev, pointers);
    this._channel_1 = channel;
    this.data_1 = atomicfu$AtomicRefArray$ofNulls(imul(get_SEGMENT_SIZE(), 2));
  }
  protoOf(ChannelSegment).get_channel_dhi7tm_k$ = function () {
    return ensureNotNull(this._channel_1);
  };
  protoOf(ChannelSegment).get_numberOfSlots_n3mgwk_k$ = function () {
    return get_SEGMENT_SIZE();
  };
  protoOf(ChannelSegment).storeElement_gce1i0_k$ = function (index, element) {
    setElementLazy(this, index, element);
  };
  protoOf(ChannelSegment).getElement_ye1phr_k$ = function (index) {
    var tmp = this.data_1.atomicfu$get(imul(index, 2)).get_kotlinx$atomicfu$value_vi2am5_k$();
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(ChannelSegment).retrieveElement_j8ywl1_k$ = function (index) {
    // Inline function 'kotlin.also' call
    var this_0 = this.getElement_ye1phr_k$(index);
    this.cleanElement_ob56q6_k$(index);
    return this_0;
  };
  protoOf(ChannelSegment).cleanElement_ob56q6_k$ = function (index) {
    setElementLazy(this, index, null);
  };
  protoOf(ChannelSegment).getState_jak5mi_k$ = function (index) {
    return this.data_1.atomicfu$get(imul(index, 2) + 1 | 0).get_kotlinx$atomicfu$value_vi2am5_k$();
  };
  protoOf(ChannelSegment).setState_bwy33f_k$ = function (index, value) {
    this.data_1.atomicfu$get(imul(index, 2) + 1 | 0).set_kotlinx$atomicfu$value_508e3y_k$(value);
  };
  protoOf(ChannelSegment).casState_u37dcn_k$ = function (index, from, to) {
    return this.data_1.atomicfu$get(imul(index, 2) + 1 | 0).atomicfu$compareAndSet(from, to);
  };
  protoOf(ChannelSegment).getAndSetState_5asfss_k$ = function (index, update) {
    return this.data_1.atomicfu$get(imul(index, 2) + 1 | 0).atomicfu$getAndSet(update);
  };
  protoOf(ChannelSegment).onCancellation_4jec3b_k$ = function (index, cause, context) {
    var isSender = index >= get_SEGMENT_SIZE();
    var index_0 = isSender ? index - get_SEGMENT_SIZE() | 0 : index;
    var element = this.getElement_ye1phr_k$(index_0);
    $l$loop: while (true) {
      var cur = this.getState_jak5mi_k$(index_0);
      var tmp;
      if (!(cur == null) ? isInterface(cur, Waiter) : false) {
        tmp = true;
      } else {
        tmp = cur instanceof WaiterEB;
      }
      if (tmp) {
        var update = isSender ? get_INTERRUPTED_SEND() : get_INTERRUPTED_RCV();
        if (this.casState_u37dcn_k$(index_0, cur, update)) {
          this.cleanElement_ob56q6_k$(index_0);
          this.onCancelledRequest_bhmu12_k$(index_0, !isSender);
          if (isSender) {
            var tmp0_safe_receiver = this.get_channel_dhi7tm_k$().onUndeliveredElement_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              callUndeliveredElement(tmp0_safe_receiver, element, context);
            }
          }
          return Unit_getInstance();
        }
      } else {
        if (cur === get_INTERRUPTED_SEND() || cur === get_INTERRUPTED_RCV()) {
          this.cleanElement_ob56q6_k$(index_0);
          if (isSender) {
            var tmp1_safe_receiver = this.get_channel_dhi7tm_k$().onUndeliveredElement_1;
            if (tmp1_safe_receiver == null)
              null;
            else {
              callUndeliveredElement(tmp1_safe_receiver, element, context);
            }
          }
          return Unit_getInstance();
        } else {
          if (cur === get_RESUMING_BY_EB() || cur === get_RESUMING_BY_RCV())
            continue $l$loop;
          else {
            if (cur === get_DONE_RCV() || cur === get_BUFFERED())
              return Unit_getInstance();
            else {
              if (cur === get_CHANNEL_CLOSED())
                return Unit_getInstance();
              else {
                // Inline function 'kotlin.error' call
                var message = 'unexpected state: ' + toString_0(cur);
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }
          }
        }
      }
    }
  };
  protoOf(ChannelSegment).onCancelledRequest_bhmu12_k$ = function (index, receiver) {
    if (receiver) {
      var tmp = this.get_channel_dhi7tm_k$();
      var tmp0 = this.get_id_kntnx8_k$();
      // Inline function 'kotlin.Long.times' call
      var other = get_SEGMENT_SIZE();
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$1 = tmp0.times_nfzjiw_k$(toLong(other)).plus_r93sks_k$(toLong(index));
      tmp.waitExpandBufferCompletion_78swxo_k$(tmp$ret$1);
    }
    this.onSlotCleaned_do6lqz_k$();
  };
  function _set_receiveResult__70wql7($this, _set____db54di) {
    $this.receiveResult_1 = _set____db54di;
  }
  function _get_receiveResult__m8o93j($this) {
    return $this.receiveResult_1;
  }
  function _set_continuation__ijq8sg($this, _set____db54di) {
    $this.continuation_1 = _set____db54di;
  }
  function _get_continuation__y3gzck_2($this) {
    return $this.continuation_1;
  }
  function onClosedHasNext($this) {
    $this.receiveResult_1 = get_CHANNEL_CLOSED();
    var tmp0_elvis_lhs = $this.$this_1.get_closeCause_gbqkm2_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var cause = tmp;
    throw recoverStackTrace_0(cause);
  }
  function hasNextOnNoWaiterSuspend($this, segment, index, r, $completion) {
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      $this.continuation_1 = cancellable;
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImplOnNoWaiter' call
      var this_0 = $this.$this_1;
      var updCellResult = updateCellReceive(this_0, segment, index, r, $this);
      if (updCellResult === get_SUSPEND()) {
        prepareReceiverForSuspension(this_0, $this, segment, index);
      } else if (updCellResult === get_FAILED()) {
        if (r.compareTo_9jj042_k$(this_0.get_sendersCounter_mvbt0m_k$()) < 0) {
          segment.cleanPrev_rn0kss_k$();
        }
        $l$block_0: {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl' call
          var segment_0 = this_0.receiveSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$();
          $l$loop_0: while (true) {
            if (this_0.get_isClosedForReceive_v0r77d_k$()) {
              onClosedHasNextNoWaiterSuspend($this);
              break $l$block_0;
            }
            var r_0 = this_0.receivers_1.atomicfu$getAndIncrement$long();
            // Inline function 'kotlin.Long.div' call
            var other = get_SEGMENT_SIZE();
            var id = r_0.div_jun7gj_k$(toLong(other));
            // Inline function 'kotlin.Long.rem' call
            var other_0 = get_SEGMENT_SIZE();
            var i = r_0.rem_bsnl9o_k$(toLong(other_0)).toInt_1tsl84_k$();
            if (!segment_0.get_id_kntnx8_k$().equals(id)) {
              var tmp0_elvis_lhs = findSegmentReceive(this_0, id, segment_0);
              var tmp;
              if (tmp0_elvis_lhs == null) {
                continue $l$loop_0;
              } else {
                tmp = tmp0_elvis_lhs;
              }
              segment_0 = tmp;
            }
            var updCellResult_0 = updateCellReceive(this_0, segment_0, i, r_0, $this);
            if (updCellResult_0 === get_SUSPEND()) {
              var tmp1_safe_receiver = (!($this == null) ? isInterface($this, Waiter) : false) ? $this : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(this_0, tmp1_safe_receiver, segment_0, i);
              }
            } else if (updCellResult_0 === get_FAILED()) {
              if (r_0.compareTo_9jj042_k$(this_0.get_sendersCounter_mvbt0m_k$()) < 0) {
                segment_0.cleanPrev_rn0kss_k$();
              }
              continue $l$loop_0;
            } else if (updCellResult_0 === get_SUSPEND_NO_WAITER()) {
              var message = 'unexpected';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              segment_0.cleanPrev_rn0kss_k$();
              var element = (updCellResult_0 == null ? true : !(updCellResult_0 == null)) ? updCellResult_0 : THROW_CCE();
              $this.receiveResult_1 = element;
              $this.continuation_1 = null;
              var tmp0_safe_receiver = $this.$this_1.onUndeliveredElement_1;
              cancellable.resume_a4kjl1_k$(true, tmp0_safe_receiver == null ? null : bindCancellationFun(tmp0_safe_receiver, element, cancellable.get_context_h02k06_k$()));
            }
            break $l$block_0;
          }
        }
      } else {
        segment.cleanPrev_rn0kss_k$();
        var element_0 = (updCellResult == null ? true : !(updCellResult == null)) ? updCellResult : THROW_CCE();
        $this.receiveResult_1 = element_0;
        $this.continuation_1 = null;
        var tmp0_safe_receiver_0 = $this.$this_1.onUndeliveredElement_1;
        cancellable.resume_a4kjl1_k$(true, tmp0_safe_receiver_0 == null ? null : bindCancellationFun(tmp0_safe_receiver_0, element_0, cancellable.get_context_h02k06_k$()));
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.releaseClaimedReusableContinuation_mdg0s9_k$();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.getResult_fck196_k$();
  }
  function onClosedHasNextNoWaiterSuspend($this) {
    var cont = ensureNotNull($this.continuation_1);
    $this.continuation_1 = null;
    $this.receiveResult_1 = get_CHANNEL_CLOSED();
    var cause = $this.$this_1.get_closeCause_gbqkm2_k$();
    if (cause == null) {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      var tmp$ret$0 = _Result___init__impl__xyqfz8(false);
      cont.resumeWith_dtxwbr_k$(tmp$ret$0);
    } else {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var exception = recoverStackTrace(cause, cont);
      // Inline function 'kotlin.Companion.failure' call
      Companion_getInstance();
      var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(exception));
      cont.resumeWith_dtxwbr_k$(tmp$ret$2);
    }
  }
  function $hasNextCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($hasNextCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(8);
            var tmp_0 = this;
            tmp_0.tmp00__1 = this._this__u8e3s4__1.$this_1;
            var tmp_1 = this;
            tmp_1.tmp21__1 = null;
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.this3__1 = this.tmp00__1;
            this.waiter4__1 = this.tmp21__1;
            this.segment5__1 = this.this3__1.receiveSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$();
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            if (!true) {
              this.set_state_rjd8d0_k$(9);
              continue $sm;
            }

            if (this.this3__1.get_isClosedForReceive_v0r77d_k$()) {
              var tmp_2 = this;
              tmp_2.tmp$ret$02__1 = onClosedHasNext(this._this__u8e3s4__1);
              this.set_state_rjd8d0_k$(10);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

          case 3:
            this.r6__1 = this.this3__1.receivers_1.atomicfu$getAndIncrement$long();
            var tmp_3 = this;
            var tmp0 = this.r6__1;
            var other = get_SEGMENT_SIZE();
            tmp_3.id7__1 = tmp0.div_jun7gj_k$(toLong(other));
            var tmp_4 = this;
            var tmp0_0 = this.r6__1;
            var other_0 = get_SEGMENT_SIZE();
            tmp_4.i8__1 = tmp0_0.rem_bsnl9o_k$(toLong(other_0)).toInt_1tsl84_k$();
            if (!this.segment5__1.get_id_kntnx8_k$().equals(this.id7__1)) {
              this.tmp0_elvis_lhs9__1 = findSegmentReceive(this.this3__1, this.id7__1, this.segment5__1);
              if (this.tmp0_elvis_lhs9__1 == null) {
                this.set_state_rjd8d0_k$(2);
                var tmp_5 = this;
                continue $sm;
              } else {
                this.WHEN_RESULT10__1 = this.tmp0_elvis_lhs9__1;
                this.set_state_rjd8d0_k$(4);
                continue $sm;
              }
            } else {
              this.set_state_rjd8d0_k$(5);
              continue $sm;
            }

          case 4:
            this.segment5__1 = this.WHEN_RESULT10__1;
            this.set_state_rjd8d0_k$(5);
            continue $sm;
          case 5:
            this.updCellResult11__1 = updateCellReceive(this.this3__1, this.segment5__1, this.i8__1, this.r6__1, this.waiter4__1);
            if (this.updCellResult11__1 === get_SUSPEND()) {
              var tmp_6 = this;
              var tmp_7 = this.waiter4__1;
              var tmp1_safe_receiver = (!(tmp_7 == null) ? isInterface(tmp_7, Waiter) : false) ? tmp_7 : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(this.this3__1, tmp1_safe_receiver, this.segment5__1, this.i8__1);
              }
              this.segment5__1;
              this.i8__1;
              this.r6__1;
              var message = 'unreachable';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              if (this.updCellResult11__1 === get_FAILED()) {
                if (this.r6__1.compareTo_9jj042_k$(this.this3__1.get_sendersCounter_mvbt0m_k$()) < 0) {
                  this.segment5__1.cleanPrev_rn0kss_k$();
                }
                this.set_state_rjd8d0_k$(2);
                var tmp_8 = this;
                continue $sm;
              } else {
                if (this.updCellResult11__1 === get_SUSPEND_NO_WAITER()) {
                  var tmp_9 = this;
                  tmp_9.tmp013__1 = this.segment5__1;
                  var tmp_10 = this;
                  tmp_10.tmp214__1 = this.i8__1;
                  var tmp_11 = this;
                  tmp_11.tmp415__1 = this.r6__1;
                  this.segm16__1 = this.tmp013__1;
                  this.i17__1 = this.tmp214__1;
                  this.r18__1 = this.tmp415__1;
                  this.set_state_rjd8d0_k$(6);
                  suspendResult = hasNextOnNoWaiterSuspend(this._this__u8e3s4__1, this.segm16__1, this.i17__1, this.r18__1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  var tmp_12 = this;
                  this.segment5__1.cleanPrev_rn0kss_k$();
                  var tmp_13 = this.updCellResult11__1;
                  var element = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
                  this._this__u8e3s4__1.receiveResult_1 = element;
                  tmp_12.WHEN_RESULT12__1 = true;
                  this.set_state_rjd8d0_k$(7);
                  continue $sm;
                }
              }
            }

          case 6:
            var tmp_14 = this;
            return suspendResult;
          case 7:
            this.tmp$ret$02__1 = this.WHEN_RESULT12__1;
            this.set_state_rjd8d0_k$(10);
            continue $sm;
          case 8:
            throw this.get_exception_x0n6w6_k$();
          case 9:
            if (false) {
              this.set_state_rjd8d0_k$(1);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(10);
            continue $sm;
          case 10:
            return this.tmp$ret$02__1;
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 8) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function _get_capacity__a9k9f3($this) {
    return $this.capacity_1;
  }
  function _get_sendersAndCloseStatus__3cwhts($this) {
    return $this.sendersAndCloseStatus_1;
  }
  function _get_receivers__i60qs3($this) {
    return $this.receivers_1;
  }
  function _get_bufferEnd__9w25o6($this) {
    return $this.bufferEnd_1;
  }
  function _get_bufferEndCounter__2d4hee($this) {
    return $this.bufferEnd_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  }
  function _get_completedExpandBuffersAndPauseFlag__og9unm($this) {
    return $this.completedExpandBuffersAndPauseFlag_1;
  }
  function _get_isRendezvousOrUnlimited__3mdufi($this) {
    // Inline function 'kotlin.let' call
    var it = _get_bufferEndCounter__2d4hee($this);
    return it.equals(new Long(0, 0)) || it.equals(new Long(-1, 2147483647));
  }
  function _get_sendSegment__j86hsq($this) {
    return $this.sendSegment_1;
  }
  function _get_receiveSegment__r6b8p1($this) {
    return $this.receiveSegment_1;
  }
  function _get_bufferEndSegment__l9058z($this) {
    return $this.bufferEndSegment_1;
  }
  function onClosedSend($this, element, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.initCancellability_shqc60_k$();
    $l$block: {
      var tmp0_safe_receiver = $this.onUndeliveredElement_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp0_safe_receiver, element);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        addSuppressed(tmp1_safe_receiver, $this.get_sendException_qpq1ry_k$());
        // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
        Companion_getInstance();
        // Inline function 'kotlin.Companion.failure' call
        var exception = recoverStackTrace(tmp1_safe_receiver, cancellable);
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
        cancellable.resumeWith_dtxwbr_k$(tmp$ret$0);
        break $l$block;
      }
      // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
      var exception_0 = $this.get_sendException_qpq1ry_k$();
      Companion_getInstance();
      // Inline function 'kotlin.Companion.failure' call
      var exception_1 = recoverStackTrace(exception_0, cancellable);
      var tmp$ret$4 = _Result___init__impl__xyqfz8(createFailure(exception_1));
      cancellable.resumeWith_dtxwbr_k$(tmp$ret$4);
    }
    return cancellable.getResult_fck196_k$();
  }
  function sendOnNoWaiterSuspend($this, segment, index, element, s, $completion) {
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImplOnNoWaiter' call
      switch (updateCellSend($this, segment, index, element, s, cancellable, false)) {
        case 0:
          segment.cleanPrev_rn0kss_k$();
          // Inline function 'kotlin.coroutines.resume' call

          // Inline function 'kotlin.Companion.success' call

          Companion_getInstance();
          var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
          cancellable.resumeWith_dtxwbr_k$(tmp$ret$0);
          break;
        case 1:
          // Inline function 'kotlin.coroutines.resume' call

          // Inline function 'kotlin.Companion.success' call

          Companion_getInstance();
          var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_getInstance());
          cancellable.resumeWith_dtxwbr_k$(tmp$ret$3);
          break;
        case 2:
          prepareSenderForSuspension($this, cancellable, segment, index);
          break;
        case 4:
          if (s.compareTo_9jj042_k$($this.get_receiversCounter_ne8ics_k$()) < 0) {
            segment.cleanPrev_rn0kss_k$();
          }

          onClosedSendOnNoWaiterSuspend($this, element, cancellable);
          break;
        case 5:
          segment.cleanPrev_rn0kss_k$();
          $l$block_5: {
            // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
            var segment_0 = $this.sendSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$();
            $l$loop_0: while (true) {
              var sendersAndCloseStatusCur = $this.sendersAndCloseStatus_1.atomicfu$getAndIncrement$long();
              // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
              var s_0 = sendersAndCloseStatusCur.and_4spn93_k$(new Long(-1, 268435455));
              var closed = _get_isClosedForSend0__kxgf9m($this, sendersAndCloseStatusCur);
              // Inline function 'kotlin.Long.div' call
              var other = get_SEGMENT_SIZE();
              var id = s_0.div_jun7gj_k$(toLong(other));
              // Inline function 'kotlin.Long.rem' call
              var other_0 = get_SEGMENT_SIZE();
              var i = s_0.rem_bsnl9o_k$(toLong(other_0)).toInt_1tsl84_k$();
              if (!segment_0.get_id_kntnx8_k$().equals(id)) {
                var tmp0_elvis_lhs = findSegmentSend($this, id, segment_0);
                var tmp;
                if (tmp0_elvis_lhs == null) {
                  var tmp_0;
                  if (closed) {
                    onClosedSendOnNoWaiterSuspend($this, element, cancellable);
                    break $l$block_5;
                  } else {
                    continue $l$loop_0;
                  }
                } else {
                  tmp = tmp0_elvis_lhs;
                }
                segment_0 = tmp;
              }
              switch (updateCellSend($this, segment_0, i, element, s_0, cancellable, closed)) {
                case 0:
                  segment_0.cleanPrev_rn0kss_k$();
                  // Inline function 'kotlin.coroutines.resume' call

                  // Inline function 'kotlin.Companion.success' call

                  Companion_getInstance();
                  var tmp$ret$12 = _Result___init__impl__xyqfz8(Unit_getInstance());
                  cancellable.resumeWith_dtxwbr_k$(tmp$ret$12);
                  break $l$block_5;
                case 1:
                  // Inline function 'kotlin.coroutines.resume' call

                  // Inline function 'kotlin.Companion.success' call

                  Companion_getInstance();
                  var tmp$ret$15 = _Result___init__impl__xyqfz8(Unit_getInstance());
                  cancellable.resumeWith_dtxwbr_k$(tmp$ret$15);
                  break $l$block_5;
                case 2:
                  if (closed) {
                    segment_0.onSlotCleaned_do6lqz_k$();
                    onClosedSendOnNoWaiterSuspend($this, element, cancellable);
                    break $l$block_5;
                  }

                  var tmp2_safe_receiver = (!(cancellable == null) ? isInterface(cancellable, Waiter) : false) ? cancellable : null;
                  if (tmp2_safe_receiver == null)
                    null;
                  else {
                    prepareSenderForSuspension($this, tmp2_safe_receiver, segment_0, i);
                  }

                  break $l$block_5;
                case 4:
                  if (s_0.compareTo_9jj042_k$($this.get_receiversCounter_ne8ics_k$()) < 0) {
                    segment_0.cleanPrev_rn0kss_k$();
                  }

                  onClosedSendOnNoWaiterSuspend($this, element, cancellable);
                  break $l$block_5;
                case 5:
                  segment_0.cleanPrev_rn0kss_k$();
                  continue $l$loop_0;
                case 3:
                  var message = 'unexpected';
                  throw IllegalStateException_init_$Create$(toString(message));
              }
            }
          }

          break;
        default:
          // Inline function 'kotlin.error' call

          var message_0 = 'unexpected';
          throw IllegalStateException_init_$Create$(toString(message_0));
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.releaseClaimedReusableContinuation_mdg0s9_k$();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.getResult_fck196_k$();
  }
  function prepareSenderForSuspension($this, _this__u8e3s4, segment, index) {
    _this__u8e3s4.invokeOnCancellation_9j58v1_k$(segment, index + get_SEGMENT_SIZE() | 0);
  }
  function onClosedSendOnNoWaiterSuspend($this, element, cont) {
    var tmp0_safe_receiver = $this.onUndeliveredElement_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      callUndeliveredElement(tmp0_safe_receiver, element, cont.get_context_h02k06_k$());
    }
    // Inline function 'kotlin.coroutines.resumeWithException' call
    var exception = recoverStackTrace($this.get_sendException_qpq1ry_k$(), cont);
    // Inline function 'kotlin.Companion.failure' call
    Companion_getInstance();
    var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
    cont.resumeWith_dtxwbr_k$(tmp$ret$0);
  }
  function SendBroadcast(cont) {
    this.cont_1 = cont;
    var tmp = this;
    tmp.$$delegate_0__1 = cont instanceof CancellableContinuationImpl ? cont : THROW_CCE();
  }
  protoOf(SendBroadcast).get_cont_wok86z_k$ = function () {
    return this.cont_1;
  };
  protoOf(SendBroadcast).invokeOnCancellation_9j58v1_k$ = function (segment, index) {
    this.$$delegate_0__1.invokeOnCancellation_9j58v1_k$(segment, index);
  };
  function sendImpl($this, element, waiter, onRendezvousOrBuffered, onSuspend, onClosed, onNoWaiterSuspend) {
    var segment = $this.sendSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    $l$loop_0: while (true) {
      var sendersAndCloseStatusCur = $this.sendersAndCloseStatus_1.atomicfu$getAndIncrement$long();
      // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
      var s = sendersAndCloseStatusCur.and_4spn93_k$(new Long(-1, 268435455));
      var closed = _get_isClosedForSend0__kxgf9m($this, sendersAndCloseStatusCur);
      // Inline function 'kotlin.Long.div' call
      var other = get_SEGMENT_SIZE();
      var id = s.div_jun7gj_k$(toLong(other));
      // Inline function 'kotlin.Long.rem' call
      var other_0 = get_SEGMENT_SIZE();
      var i = s.rem_bsnl9o_k$(toLong(other_0)).toInt_1tsl84_k$();
      if (!segment.get_id_kntnx8_k$().equals(id)) {
        var tmp0_elvis_lhs = findSegmentSend($this, id, segment);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          var tmp_0;
          if (closed) {
            return onClosed();
          } else {
            continue $l$loop_0;
          }
        } else {
          tmp = tmp0_elvis_lhs;
        }
        segment = tmp;
      }
      switch (updateCellSend($this, segment, i, element, s, waiter, closed)) {
        case 0:
          segment.cleanPrev_rn0kss_k$();
          return onRendezvousOrBuffered();
        case 1:
          return onRendezvousOrBuffered();
        case 2:
          if (closed) {
            segment.onSlotCleaned_do6lqz_k$();
            return onClosed();
          }

          var tmp2_safe_receiver = (!(waiter == null) ? isInterface(waiter, Waiter) : false) ? waiter : null;
          if (tmp2_safe_receiver == null)
            null;
          else {
            prepareSenderForSuspension($this, tmp2_safe_receiver, segment, i);
          }

          return onSuspend(segment, i);
        case 4:
          if (s.compareTo_9jj042_k$($this.get_receiversCounter_ne8ics_k$()) < 0) {
            segment.cleanPrev_rn0kss_k$();
          }

          return onClosed();
        case 5:
          segment.cleanPrev_rn0kss_k$();
          continue $l$loop_0;
        case 3:
          return onNoWaiterSuspend(segment, i, element, s);
      }
    }
  }
  function sendImplOnNoWaiter($this, segment, index, element, s, waiter, onRendezvousOrBuffered, onClosed) {
    switch (updateCellSend($this, segment, index, element, s, waiter, false)) {
      case 0:
        segment.cleanPrev_rn0kss_k$();
        onRendezvousOrBuffered();
        break;
      case 1:
        onRendezvousOrBuffered();
        break;
      case 2:
        prepareSenderForSuspension($this, waiter, segment, index);
        break;
      case 4:
        if (s.compareTo_9jj042_k$($this.get_receiversCounter_ne8ics_k$()) < 0) {
          segment.cleanPrev_rn0kss_k$();
        }

        onClosed();
        break;
      case 5:
        segment.cleanPrev_rn0kss_k$();
        $l$block_5: {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
          var segment_0 = $this.sendSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$();
          $l$loop_0: while (true) {
            var sendersAndCloseStatusCur = $this.sendersAndCloseStatus_1.atomicfu$getAndIncrement$long();
            // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
            var s_0 = sendersAndCloseStatusCur.and_4spn93_k$(new Long(-1, 268435455));
            var closed = _get_isClosedForSend0__kxgf9m($this, sendersAndCloseStatusCur);
            // Inline function 'kotlin.Long.div' call
            var other = get_SEGMENT_SIZE();
            var id = s_0.div_jun7gj_k$(toLong(other));
            // Inline function 'kotlin.Long.rem' call
            var other_0 = get_SEGMENT_SIZE();
            var i = s_0.rem_bsnl9o_k$(toLong(other_0)).toInt_1tsl84_k$();
            if (!segment_0.get_id_kntnx8_k$().equals(id)) {
              var tmp0_elvis_lhs = findSegmentSend($this, id, segment_0);
              var tmp;
              if (tmp0_elvis_lhs == null) {
                var tmp_0;
                if (closed) {
                  onClosed();
                  break $l$block_5;
                } else {
                  continue $l$loop_0;
                }
              } else {
                tmp = tmp0_elvis_lhs;
              }
              segment_0 = tmp;
            }
            switch (updateCellSend($this, segment_0, i, element, s_0, waiter, closed)) {
              case 0:
                segment_0.cleanPrev_rn0kss_k$();
                onRendezvousOrBuffered();
                break $l$block_5;
              case 1:
                onRendezvousOrBuffered();
                break $l$block_5;
              case 2:
                if (closed) {
                  segment_0.onSlotCleaned_do6lqz_k$();
                  onClosed();
                  break $l$block_5;
                }

                var tmp2_safe_receiver = (!(waiter == null) ? isInterface(waiter, Waiter) : false) ? waiter : null;
                if (tmp2_safe_receiver == null)
                  null;
                else {
                  prepareSenderForSuspension($this, tmp2_safe_receiver, segment_0, i);
                }

                break $l$block_5;
              case 4:
                if (s_0.compareTo_9jj042_k$($this.get_receiversCounter_ne8ics_k$()) < 0) {
                  segment_0.cleanPrev_rn0kss_k$();
                }

                onClosed();
                break $l$block_5;
              case 5:
                segment_0.cleanPrev_rn0kss_k$();
                continue $l$loop_0;
              case 3:
                var message = 'unexpected';
                throw IllegalStateException_init_$Create$(toString(message));
            }
          }
        }

        break;
      default:
        // Inline function 'kotlin.error' call

        var message_0 = 'unexpected';
        throw IllegalStateException_init_$Create$(toString(message_0));
    }
  }
  function updateCellSend($this, segment, index, element, s, waiter, closed) {
    segment.storeElement_gce1i0_k$(index, element);
    if (closed)
      return updateCellSendSlow($this, segment, index, element, s, waiter, closed);
    var state = segment.getState_jak5mi_k$(index);
    if (state === null) {
      if (bufferOrRendezvousSend($this, s)) {
        if (segment.casState_u37dcn_k$(index, null, get_BUFFERED())) {
          return 1;
        }
      } else {
        if (waiter == null) {
          return 3;
        } else {
          if (segment.casState_u37dcn_k$(index, null, waiter))
            return 2;
        }
      }
    } else {
      if (!(state == null) ? isInterface(state, Waiter) : false) {
        segment.cleanElement_ob56q6_k$(index);
        var tmp;
        if (tryResumeReceiver($this, state, element)) {
          segment.setState_bwy33f_k$(index, get_DONE_RCV());
          $this.onReceiveDequeued_4w5qpk_k$();
          tmp = 0;
        } else {
          if (!(segment.getAndSetState_5asfss_k$(index, get_INTERRUPTED_RCV()) === get_INTERRUPTED_RCV())) {
            segment.onCancelledRequest_bhmu12_k$(index, true);
          }
          tmp = 5;
        }
        return tmp;
      }
    }
    return updateCellSendSlow($this, segment, index, element, s, waiter, closed);
  }
  function updateCellSendSlow($this, segment, index, element, s, waiter, closed) {
    while (true) {
      var state = segment.getState_jak5mi_k$(index);
      if (state === null) {
        if (bufferOrRendezvousSend($this, s) && !closed) {
          if (segment.casState_u37dcn_k$(index, null, get_BUFFERED())) {
            return 1;
          }
        } else {
          if (closed) {
            if (segment.casState_u37dcn_k$(index, null, get_INTERRUPTED_SEND())) {
              segment.onCancelledRequest_bhmu12_k$(index, false);
              return 4;
            }
          } else if (waiter == null)
            return 3;
          else if (segment.casState_u37dcn_k$(index, null, waiter))
            return 2;
        }
      } else if (state === get_IN_BUFFER()) {
        if (segment.casState_u37dcn_k$(index, state, get_BUFFERED())) {
          return 1;
        }
      } else if (state === get_INTERRUPTED_RCV()) {
        segment.cleanElement_ob56q6_k$(index);
        return 5;
      } else if (state === get_POISONED()) {
        segment.cleanElement_ob56q6_k$(index);
        return 5;
      } else if (state === get_CHANNEL_CLOSED()) {
        segment.cleanElement_ob56q6_k$(index);
        completeCloseOrCancel($this);
        return 4;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        segment.cleanElement_ob56q6_k$(index);
        var tmp;
        if (state instanceof WaiterEB) {
          tmp = state.waiter_1;
        } else {
          tmp = state;
        }
        var receiver = tmp;
        var tmp_0;
        if (tryResumeReceiver($this, receiver, element)) {
          segment.setState_bwy33f_k$(index, get_DONE_RCV());
          $this.onReceiveDequeued_4w5qpk_k$();
          tmp_0 = 0;
        } else {
          if (!(segment.getAndSetState_5asfss_k$(index, get_INTERRUPTED_RCV()) === get_INTERRUPTED_RCV())) {
            segment.onCancelledRequest_bhmu12_k$(index, true);
          }
          tmp_0 = 5;
        }
        return tmp_0;
      }
    }
  }
  function shouldSendSuspend0($this, curSendersAndCloseStatus) {
    if (_get_isClosedForSend0__kxgf9m($this, curSendersAndCloseStatus))
      return false;
    // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
    var tmp$ret$0 = curSendersAndCloseStatus.and_4spn93_k$(new Long(-1, 268435455));
    return !bufferOrRendezvousSend($this, tmp$ret$0);
  }
  function bufferOrRendezvousSend($this, curSenders) {
    var tmp;
    if (curSenders.compareTo_9jj042_k$(_get_bufferEndCounter__2d4hee($this)) < 0) {
      tmp = true;
    } else {
      var tmp0 = $this.get_receiversCounter_ne8ics_k$();
      // Inline function 'kotlin.Long.plus' call
      var other = $this.capacity_1;
      var tmp$ret$0 = tmp0.plus_r93sks_k$(toLong(other));
      tmp = curSenders.compareTo_9jj042_k$(tmp$ret$0) < 0;
    }
    return tmp;
  }
  function tryResumeReceiver($this, _this__u8e3s4, element) {
    var tmp;
    if (isInterface(_this__u8e3s4, SelectInstance)) {
      tmp = _this__u8e3s4.trySelect_fbege0_k$($this, element);
    } else {
      if (_this__u8e3s4 instanceof ReceiveCatching) {
        if (!(_this__u8e3s4 instanceof ReceiveCatching))
          THROW_CCE();
        var tmp_0 = Companion_getInstance_0().success_tizbw6_k$(element);
        var tmp1_safe_receiver = $this.onUndeliveredElement_1;
        tmp = tryResume0(_this__u8e3s4.cont_1, new ChannelResult(tmp_0), tmp1_safe_receiver == null ? null : bindCancellationFun(tmp1_safe_receiver, element, _this__u8e3s4.cont_1.get_context_h02k06_k$()));
      } else {
        if (_this__u8e3s4 instanceof BufferedChannelIterator) {
          if (!(_this__u8e3s4 instanceof BufferedChannelIterator))
            THROW_CCE();
          tmp = _this__u8e3s4.tryResumeHasNext_yugi5j_k$(element);
        } else {
          if (isInterface(_this__u8e3s4, CancellableContinuation)) {
            if (!isInterface(_this__u8e3s4, CancellableContinuation))
              THROW_CCE();
            var tmp2_safe_receiver = $this.onUndeliveredElement_1;
            tmp = tryResume0(_this__u8e3s4, element, tmp2_safe_receiver == null ? null : bindCancellationFun(tmp2_safe_receiver, element, _this__u8e3s4.get_context_h02k06_k$()));
          } else {
            var message = 'Unexpected receiver type: ' + toString(_this__u8e3s4);
            throw IllegalStateException_init_$Create$(toString(message));
          }
        }
      }
    }
    return tmp;
  }
  function receiveOnNoWaiterSuspend($this, segment, index, r, $completion) {
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImplOnNoWaiter' call
      var updCellResult = updateCellReceive($this, segment, index, r, cancellable);
      if (updCellResult === get_SUSPEND()) {
        prepareReceiverForSuspension($this, cancellable, segment, index);
      } else if (updCellResult === get_FAILED()) {
        if (r.compareTo_9jj042_k$($this.get_sendersCounter_mvbt0m_k$()) < 0) {
          segment.cleanPrev_rn0kss_k$();
        }
        $l$block_0: {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl' call
          var segment_0 = $this.receiveSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$();
          $l$loop_0: while (true) {
            if ($this.get_isClosedForReceive_v0r77d_k$()) {
              onClosedReceiveOnNoWaiterSuspend($this, cancellable);
              break $l$block_0;
            }
            var r_0 = $this.receivers_1.atomicfu$getAndIncrement$long();
            // Inline function 'kotlin.Long.div' call
            var other = get_SEGMENT_SIZE();
            var id = r_0.div_jun7gj_k$(toLong(other));
            // Inline function 'kotlin.Long.rem' call
            var other_0 = get_SEGMENT_SIZE();
            var i = r_0.rem_bsnl9o_k$(toLong(other_0)).toInt_1tsl84_k$();
            if (!segment_0.get_id_kntnx8_k$().equals(id)) {
              var tmp0_elvis_lhs = findSegmentReceive($this, id, segment_0);
              var tmp;
              if (tmp0_elvis_lhs == null) {
                continue $l$loop_0;
              } else {
                tmp = tmp0_elvis_lhs;
              }
              segment_0 = tmp;
            }
            var updCellResult_0 = updateCellReceive($this, segment_0, i, r_0, cancellable);
            if (updCellResult_0 === get_SUSPEND()) {
              var tmp1_safe_receiver = (!(cancellable == null) ? isInterface(cancellable, Waiter) : false) ? cancellable : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension($this, tmp1_safe_receiver, segment_0, i);
              }
            } else if (updCellResult_0 === get_FAILED()) {
              if (r_0.compareTo_9jj042_k$($this.get_sendersCounter_mvbt0m_k$()) < 0) {
                segment_0.cleanPrev_rn0kss_k$();
              }
              continue $l$loop_0;
            } else if (updCellResult_0 === get_SUSPEND_NO_WAITER()) {
              var message = 'unexpected';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              segment_0.cleanPrev_rn0kss_k$();
              var element = (updCellResult_0 == null ? true : !(updCellResult_0 == null)) ? updCellResult_0 : THROW_CCE();
              var tmp0_safe_receiver = $this.onUndeliveredElement_1;
              var onCancellation = tmp0_safe_receiver == null ? null : bindCancellationFun(tmp0_safe_receiver, element, cancellable.get_context_h02k06_k$());
              cancellable.resume_a4kjl1_k$(element, onCancellation);
            }
            break $l$block_0;
          }
        }
      } else {
        segment.cleanPrev_rn0kss_k$();
        var element_0 = (updCellResult == null ? true : !(updCellResult == null)) ? updCellResult : THROW_CCE();
        var tmp0_safe_receiver_0 = $this.onUndeliveredElement_1;
        var onCancellation_0 = tmp0_safe_receiver_0 == null ? null : bindCancellationFun(tmp0_safe_receiver_0, element_0, cancellable.get_context_h02k06_k$());
        cancellable.resume_a4kjl1_k$(element_0, onCancellation_0);
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.releaseClaimedReusableContinuation_mdg0s9_k$();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.getResult_fck196_k$();
  }
  function prepareReceiverForSuspension($this, _this__u8e3s4, segment, index) {
    $this.onReceiveEnqueued_xthhlc_k$();
    _this__u8e3s4.invokeOnCancellation_9j58v1_k$(segment, index);
  }
  function onClosedReceiveOnNoWaiterSuspend($this, cont) {
    // Inline function 'kotlin.coroutines.resumeWithException' call
    var exception = _get_receiveException__foorc1($this);
    // Inline function 'kotlin.Companion.failure' call
    Companion_getInstance();
    var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
    cont.resumeWith_dtxwbr_k$(tmp$ret$0);
  }
  function receiveCatchingOnNoWaiterSuspend($this, segment, index, r, $completion) {
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      var waiter = new ReceiveCatching(cancellable instanceof CancellableContinuationImpl ? cancellable : THROW_CCE());
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImplOnNoWaiter' call
      var updCellResult = updateCellReceive($this, segment, index, r, waiter);
      if (updCellResult === get_SUSPEND()) {
        prepareReceiverForSuspension($this, waiter, segment, index);
      } else if (updCellResult === get_FAILED()) {
        if (r.compareTo_9jj042_k$($this.get_sendersCounter_mvbt0m_k$()) < 0) {
          segment.cleanPrev_rn0kss_k$();
        }
        $l$block_0: {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl' call
          var segment_0 = $this.receiveSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$();
          $l$loop_0: while (true) {
            if ($this.get_isClosedForReceive_v0r77d_k$()) {
              onClosedReceiveCatchingOnNoWaiterSuspend($this, cancellable);
              break $l$block_0;
            }
            var r_0 = $this.receivers_1.atomicfu$getAndIncrement$long();
            // Inline function 'kotlin.Long.div' call
            var other = get_SEGMENT_SIZE();
            var id = r_0.div_jun7gj_k$(toLong(other));
            // Inline function 'kotlin.Long.rem' call
            var other_0 = get_SEGMENT_SIZE();
            var i = r_0.rem_bsnl9o_k$(toLong(other_0)).toInt_1tsl84_k$();
            if (!segment_0.get_id_kntnx8_k$().equals(id)) {
              var tmp0_elvis_lhs = findSegmentReceive($this, id, segment_0);
              var tmp;
              if (tmp0_elvis_lhs == null) {
                continue $l$loop_0;
              } else {
                tmp = tmp0_elvis_lhs;
              }
              segment_0 = tmp;
            }
            var updCellResult_0 = updateCellReceive($this, segment_0, i, r_0, waiter);
            if (updCellResult_0 === get_SUSPEND()) {
              var tmp1_safe_receiver = (!(waiter == null) ? isInterface(waiter, Waiter) : false) ? waiter : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension($this, tmp1_safe_receiver, segment_0, i);
              }
            } else if (updCellResult_0 === get_FAILED()) {
              if (r_0.compareTo_9jj042_k$($this.get_sendersCounter_mvbt0m_k$()) < 0) {
                segment_0.cleanPrev_rn0kss_k$();
              }
              continue $l$loop_0;
            } else if (updCellResult_0 === get_SUSPEND_NO_WAITER()) {
              var message = 'unexpected';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              segment_0.cleanPrev_rn0kss_k$();
              var element = (updCellResult_0 == null ? true : !(updCellResult_0 == null)) ? updCellResult_0 : THROW_CCE();
              var tmp_0 = Companion_getInstance_0().success_tizbw6_k$(element);
              var tmp0_safe_receiver = $this.onUndeliveredElement_1;
              cancellable.resume_a4kjl1_k$(new ChannelResult(tmp_0), tmp0_safe_receiver == null ? null : bindCancellationFun(tmp0_safe_receiver, element, cancellable.get_context_h02k06_k$()));
            }
            break $l$block_0;
          }
        }
      } else {
        segment.cleanPrev_rn0kss_k$();
        var element_0 = (updCellResult == null ? true : !(updCellResult == null)) ? updCellResult : THROW_CCE();
        var tmp_1 = Companion_getInstance_0().success_tizbw6_k$(element_0);
        var tmp0_safe_receiver_0 = $this.onUndeliveredElement_1;
        cancellable.resume_a4kjl1_k$(new ChannelResult(tmp_1), tmp0_safe_receiver_0 == null ? null : bindCancellationFun(tmp0_safe_receiver_0, element_0, cancellable.get_context_h02k06_k$()));
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.releaseClaimedReusableContinuation_mdg0s9_k$();
        throw e;
      } else {
        throw $p;
      }
    }
    var tmp_2 = cancellable.getResult_fck196_k$();
    if (tmp_2 === get_COROUTINE_SUSPENDED())
      return tmp_2;
    return tmp_2;
  }
  function onClosedReceiveCatchingOnNoWaiterSuspend($this, cont) {
    // Inline function 'kotlin.coroutines.resume' call
    var value = new ChannelResult(Companion_getInstance_0().closed_xuwu5z_k$($this.get_closeCause_gbqkm2_k$()));
    // Inline function 'kotlin.Companion.success' call
    Companion_getInstance();
    var tmp$ret$0 = _Result___init__impl__xyqfz8(value);
    cont.resumeWith_dtxwbr_k$(tmp$ret$0);
  }
  function receiveImpl($this, waiter, onElementRetrieved, onSuspend, onClosed, onNoWaiterSuspend) {
    var segment = $this.receiveSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    $l$loop_0: while (true) {
      if ($this.get_isClosedForReceive_v0r77d_k$())
        return onClosed();
      var r = $this.receivers_1.atomicfu$getAndIncrement$long();
      // Inline function 'kotlin.Long.div' call
      var other = get_SEGMENT_SIZE();
      var id = r.div_jun7gj_k$(toLong(other));
      // Inline function 'kotlin.Long.rem' call
      var other_0 = get_SEGMENT_SIZE();
      var i = r.rem_bsnl9o_k$(toLong(other_0)).toInt_1tsl84_k$();
      if (!segment.get_id_kntnx8_k$().equals(id)) {
        var tmp0_elvis_lhs = findSegmentReceive($this, id, segment);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          continue $l$loop_0;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        segment = tmp;
      }
      var updCellResult = updateCellReceive($this, segment, i, r, waiter);
      var tmp_0;
      if (updCellResult === get_SUSPEND()) {
        var tmp1_safe_receiver = (!(waiter == null) ? isInterface(waiter, Waiter) : false) ? waiter : null;
        if (tmp1_safe_receiver == null)
          null;
        else {
          prepareReceiverForSuspension($this, tmp1_safe_receiver, segment, i);
        }
        tmp_0 = onSuspend(segment, i, r);
      } else if (updCellResult === get_FAILED()) {
        if (r.compareTo_9jj042_k$($this.get_sendersCounter_mvbt0m_k$()) < 0) {
          segment.cleanPrev_rn0kss_k$();
        }
        continue $l$loop_0;
      } else if (updCellResult === get_SUSPEND_NO_WAITER()) {
        tmp_0 = onNoWaiterSuspend(segment, i, r);
      } else {
        segment.cleanPrev_rn0kss_k$();
        tmp_0 = onElementRetrieved((updCellResult == null ? true : !(updCellResult == null)) ? updCellResult : THROW_CCE());
      }
      return tmp_0;
    }
  }
  function receiveImplOnNoWaiter($this, segment, index, r, waiter, onElementRetrieved, onClosed) {
    var updCellResult = updateCellReceive($this, segment, index, r, waiter);
    if (updCellResult === get_SUSPEND()) {
      prepareReceiverForSuspension($this, waiter, segment, index);
    } else if (updCellResult === get_FAILED()) {
      if (r.compareTo_9jj042_k$($this.get_sendersCounter_mvbt0m_k$()) < 0) {
        segment.cleanPrev_rn0kss_k$();
      }
      $l$block_0: {
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl' call
        var segment_0 = $this.receiveSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$();
        $l$loop_0: while (true) {
          if ($this.get_isClosedForReceive_v0r77d_k$()) {
            onClosed();
            break $l$block_0;
          }
          var r_0 = $this.receivers_1.atomicfu$getAndIncrement$long();
          // Inline function 'kotlin.Long.div' call
          var other = get_SEGMENT_SIZE();
          var id = r_0.div_jun7gj_k$(toLong(other));
          // Inline function 'kotlin.Long.rem' call
          var other_0 = get_SEGMENT_SIZE();
          var i = r_0.rem_bsnl9o_k$(toLong(other_0)).toInt_1tsl84_k$();
          if (!segment_0.get_id_kntnx8_k$().equals(id)) {
            var tmp0_elvis_lhs = findSegmentReceive($this, id, segment_0);
            var tmp;
            if (tmp0_elvis_lhs == null) {
              continue $l$loop_0;
            } else {
              tmp = tmp0_elvis_lhs;
            }
            segment_0 = tmp;
          }
          var updCellResult_0 = updateCellReceive($this, segment_0, i, r_0, waiter);
          if (updCellResult_0 === get_SUSPEND()) {
            var tmp1_safe_receiver = (!(waiter == null) ? isInterface(waiter, Waiter) : false) ? waiter : null;
            if (tmp1_safe_receiver == null)
              null;
            else {
              prepareReceiverForSuspension($this, tmp1_safe_receiver, segment_0, i);
            }
          } else if (updCellResult_0 === get_FAILED()) {
            if (r_0.compareTo_9jj042_k$($this.get_sendersCounter_mvbt0m_k$()) < 0) {
              segment_0.cleanPrev_rn0kss_k$();
            }
            continue $l$loop_0;
          } else if (updCellResult_0 === get_SUSPEND_NO_WAITER()) {
            var message = 'unexpected';
            throw IllegalStateException_init_$Create$(toString(message));
          } else {
            segment_0.cleanPrev_rn0kss_k$();
            onElementRetrieved((updCellResult_0 == null ? true : !(updCellResult_0 == null)) ? updCellResult_0 : THROW_CCE());
          }
          break $l$block_0;
        }
      }
    } else {
      segment.cleanPrev_rn0kss_k$();
      onElementRetrieved((updCellResult == null ? true : !(updCellResult == null)) ? updCellResult : THROW_CCE());
    }
  }
  function updateCellReceive($this, segment, index, r, waiter) {
    var state = segment.getState_jak5mi_k$(index);
    if (state === null) {
      // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
      var senders = $this.sendersAndCloseStatus_1.get_kotlinx$atomicfu$value_vi2am5_k$().and_4spn93_k$(new Long(-1, 268435455));
      if (r.compareTo_9jj042_k$(senders) >= 0) {
        if (waiter === null) {
          return get_SUSPEND_NO_WAITER();
        }
        if (segment.casState_u37dcn_k$(index, state, waiter)) {
          expandBuffer($this);
          return get_SUSPEND();
        }
      }
    } else if (state === get_BUFFERED())
      if (segment.casState_u37dcn_k$(index, state, get_DONE_RCV())) {
        expandBuffer($this);
        return segment.retrieveElement_j8ywl1_k$(index);
      }
    return updateCellReceiveSlow($this, segment, index, r, waiter);
  }
  function updateCellReceiveSlow($this, segment, index, r, waiter) {
    $l$loop: while (true) {
      var state = segment.getState_jak5mi_k$(index);
      if (state === null || state === get_IN_BUFFER()) {
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var senders = $this.sendersAndCloseStatus_1.get_kotlinx$atomicfu$value_vi2am5_k$().and_4spn93_k$(new Long(-1, 268435455));
        if (r.compareTo_9jj042_k$(senders) < 0) {
          if (segment.casState_u37dcn_k$(index, state, get_POISONED())) {
            expandBuffer($this);
            return get_FAILED();
          }
        } else {
          if (waiter === null) {
            return get_SUSPEND_NO_WAITER();
          }
          if (segment.casState_u37dcn_k$(index, state, waiter)) {
            expandBuffer($this);
            return get_SUSPEND();
          }
        }
      } else if (state === get_BUFFERED()) {
        if (segment.casState_u37dcn_k$(index, state, get_DONE_RCV())) {
          expandBuffer($this);
          return segment.retrieveElement_j8ywl1_k$(index);
        }
      } else if (state === get_INTERRUPTED_SEND())
        return get_FAILED();
      else if (state === get_POISONED())
        return get_FAILED();
      else if (state === get_CHANNEL_CLOSED()) {
        expandBuffer($this);
        return get_FAILED();
      } else if (state === get_RESUMING_BY_EB())
        continue $l$loop;
      else {
        if (segment.casState_u37dcn_k$(index, state, get_RESUMING_BY_RCV())) {
          var helpExpandBuffer = state instanceof WaiterEB;
          var tmp;
          if (state instanceof WaiterEB) {
            tmp = state.waiter_1;
          } else {
            tmp = state;
          }
          var sender = tmp;
          var tmp_0;
          if (tryResumeSender($this, sender, segment, index)) {
            segment.setState_bwy33f_k$(index, get_DONE_RCV());
            expandBuffer($this);
            tmp_0 = segment.retrieveElement_j8ywl1_k$(index);
          } else {
            segment.setState_bwy33f_k$(index, get_INTERRUPTED_SEND());
            segment.onCancelledRequest_bhmu12_k$(index, false);
            if (helpExpandBuffer) {
              expandBuffer($this);
            }
            tmp_0 = get_FAILED();
          }
          return tmp_0;
        }
      }
    }
  }
  function tryResumeSender($this, _this__u8e3s4, segment, index) {
    var tmp;
    if (isInterface(_this__u8e3s4, CancellableContinuation)) {
      if (!isInterface(_this__u8e3s4, CancellableContinuation))
        THROW_CCE();
      tmp = tryResume0(_this__u8e3s4, Unit_getInstance());
    } else {
      if (isInterface(_this__u8e3s4, SelectInstance)) {
        if (!(_this__u8e3s4 instanceof SelectImplementation))
          THROW_CCE();
        var trySelectResult = _this__u8e3s4.trySelectDetailed_t8yc08_k$($this, Unit_getInstance());
        if (trySelectResult === TrySelectDetailedResult_REREGISTER_getInstance()) {
          segment.cleanElement_ob56q6_k$(index);
        }
        tmp = trySelectResult === TrySelectDetailedResult_SUCCESSFUL_getInstance();
      } else {
        if (_this__u8e3s4 instanceof SendBroadcast) {
          tmp = tryResume0(_this__u8e3s4.cont_1, true);
        } else {
          var message = 'Unexpected waiter: ' + toString(_this__u8e3s4);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    return tmp;
  }
  function expandBuffer($this) {
    if (_get_isRendezvousOrUnlimited__3mdufi($this))
      return Unit_getInstance();
    var segment = $this.bufferEndSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    try_again: while (true) {
      var b = $this.bufferEnd_1.atomicfu$getAndIncrement$long();
      // Inline function 'kotlin.Long.div' call
      var other = get_SEGMENT_SIZE();
      var id = b.div_jun7gj_k$(toLong(other));
      var s = $this.get_sendersCounter_mvbt0m_k$();
      if (s.compareTo_9jj042_k$(b) <= 0) {
        if (segment.get_id_kntnx8_k$().compareTo_9jj042_k$(id) < 0 && !(segment.get_next_wor1vg_k$() == null)) {
          moveSegmentBufferEndToSpecifiedOrLast($this, id, segment);
        }
        incCompletedExpandBufferAttempts$default($this);
        return Unit_getInstance();
      }
      if (!segment.get_id_kntnx8_k$().equals(id)) {
        var tmp0_elvis_lhs = findSegmentBufferEnd($this, id, segment, b);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          continue try_again;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        segment = tmp;
      }
      // Inline function 'kotlin.Long.rem' call
      var other_0 = get_SEGMENT_SIZE();
      var i = b.rem_bsnl9o_k$(toLong(other_0)).toInt_1tsl84_k$();
      if (updateCellExpandBuffer($this, segment, i, b)) {
        incCompletedExpandBufferAttempts$default($this);
        return Unit_getInstance();
      } else {
        incCompletedExpandBufferAttempts$default($this);
        continue try_again;
      }
    }
  }
  function updateCellExpandBuffer($this, segment, index, b) {
    var state = segment.getState_jak5mi_k$(index);
    if (!(state == null) ? isInterface(state, Waiter) : false) {
      if (b.compareTo_9jj042_k$($this.receivers_1.get_kotlinx$atomicfu$value_vi2am5_k$()) >= 0) {
        if (segment.casState_u37dcn_k$(index, state, get_RESUMING_BY_EB())) {
          var tmp;
          if (tryResumeSender($this, state, segment, index)) {
            segment.setState_bwy33f_k$(index, get_BUFFERED());
            tmp = true;
          } else {
            segment.setState_bwy33f_k$(index, get_INTERRUPTED_SEND());
            segment.onCancelledRequest_bhmu12_k$(index, false);
            tmp = false;
          }
          return tmp;
        }
      }
    }
    return updateCellExpandBufferSlow($this, segment, index, b);
  }
  function updateCellExpandBufferSlow($this, segment, index, b) {
    $l$loop: while (true) {
      var state = segment.getState_jak5mi_k$(index);
      if (!(state == null) ? isInterface(state, Waiter) : false) {
        if (b.compareTo_9jj042_k$($this.receivers_1.get_kotlinx$atomicfu$value_vi2am5_k$()) < 0) {
          if (segment.casState_u37dcn_k$(index, state, new WaiterEB(state)))
            return true;
        } else {
          if (segment.casState_u37dcn_k$(index, state, get_RESUMING_BY_EB())) {
            var tmp;
            if (tryResumeSender($this, state, segment, index)) {
              segment.setState_bwy33f_k$(index, get_BUFFERED());
              tmp = true;
            } else {
              segment.setState_bwy33f_k$(index, get_INTERRUPTED_SEND());
              segment.onCancelledRequest_bhmu12_k$(index, false);
              tmp = false;
            }
            return tmp;
          }
        }
      } else {
        if (state === get_INTERRUPTED_SEND())
          return false;
        else {
          if (state === null) {
            if (segment.casState_u37dcn_k$(index, state, get_IN_BUFFER()))
              return true;
          } else {
            if (state === get_BUFFERED())
              return true;
            else {
              if (state === get_POISONED() || state === get_DONE_RCV() || state === get_INTERRUPTED_RCV())
                return true;
              else {
                if (state === get_CHANNEL_CLOSED())
                  return true;
                else {
                  if (state === get_RESUMING_BY_RCV())
                    continue $l$loop;
                  else {
                    // Inline function 'kotlin.error' call
                    var message = 'Unexpected cell state: ' + toString_0(state);
                    throw IllegalStateException_init_$Create$(toString(message));
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  function incCompletedExpandBufferAttempts($this, nAttempts) {
    // Inline function 'kotlin.also' call
    // Inline function 'kotlinx.coroutines.channels.ebPauseExpandBuffers' call
    if (!$this.completedExpandBuffersAndPauseFlag_1.atomicfu$addAndGet$long(nAttempts).and_4spn93_k$(new Long(0, 1073741824)).equals(new Long(0, 0))) {
      $l$loop: while (true) {
        // Inline function 'kotlinx.coroutines.channels.ebPauseExpandBuffers' call
        if (!!$this.completedExpandBuffersAndPauseFlag_1.get_kotlinx$atomicfu$value_vi2am5_k$().and_4spn93_k$(new Long(0, 1073741824)).equals(new Long(0, 0))) {
          break $l$loop;
        }
      }
    }
  }
  function incCompletedExpandBufferAttempts$default($this, nAttempts, $super) {
    nAttempts = nAttempts === VOID ? new Long(1, 0) : nAttempts;
    return incCompletedExpandBufferAttempts($this, nAttempts);
  }
  function onClosedSelectOnSend($this, element, select) {
    var tmp0_safe_receiver = $this.onUndeliveredElement_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      callUndeliveredElement(tmp0_safe_receiver, element, select.get_context_h02k06_k$());
    }
    select.selectInRegistrationPhase_ldg7ua_k$(get_CHANNEL_CLOSED());
  }
  function processResultSelectSend($this, ignoredParam, selectResult) {
    var tmp;
    if (selectResult === get_CHANNEL_CLOSED()) {
      throw $this.get_sendException_qpq1ry_k$();
    } else {
      tmp = $this;
    }
    return tmp;
  }
  function registerSelectForReceive($this, select, ignoredParam) {
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl' call
      var segment = $this.receiveSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$();
      $l$loop_0: while (true) {
        if ($this.get_isClosedForReceive_v0r77d_k$()) {
          onClosedSelectOnReceive($this, select);
          tmp$ret$1 = Unit_getInstance();
          break $l$block_0;
        }
        var r = $this.receivers_1.atomicfu$getAndIncrement$long();
        // Inline function 'kotlin.Long.div' call
        var other = get_SEGMENT_SIZE();
        var id = r.div_jun7gj_k$(toLong(other));
        // Inline function 'kotlin.Long.rem' call
        var other_0 = get_SEGMENT_SIZE();
        var i = r.rem_bsnl9o_k$(toLong(other_0)).toInt_1tsl84_k$();
        if (!segment.get_id_kntnx8_k$().equals(id)) {
          var tmp0_elvis_lhs = findSegmentReceive($this, id, segment);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            continue $l$loop_0;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          segment = tmp;
        }
        var updCellResult = updateCellReceive($this, segment, i, r, select);
        if (updCellResult === get_SUSPEND()) {
          var tmp1_safe_receiver = (!(select == null) ? isInterface(select, Waiter) : false) ? select : null;
          if (tmp1_safe_receiver == null)
            null;
          else {
            prepareReceiverForSuspension($this, tmp1_safe_receiver, segment, i);
          }
        } else if (updCellResult === get_FAILED()) {
          if (r.compareTo_9jj042_k$($this.get_sendersCounter_mvbt0m_k$()) < 0) {
            segment.cleanPrev_rn0kss_k$();
          }
          continue $l$loop_0;
        } else if (updCellResult === get_SUSPEND_NO_WAITER()) {
          var message = 'unexpected';
          throw IllegalStateException_init_$Create$(toString(message));
        } else {
          segment.cleanPrev_rn0kss_k$();
          var elem = (updCellResult == null ? true : !(updCellResult == null)) ? updCellResult : THROW_CCE();
          select.selectInRegistrationPhase_ldg7ua_k$(elem);
        }
        tmp$ret$1 = Unit_getInstance();
        break $l$block_0;
      }
    }
    return tmp$ret$1;
  }
  function onClosedSelectOnReceive($this, select) {
    select.selectInRegistrationPhase_ldg7ua_k$(get_CHANNEL_CLOSED());
  }
  function processResultSelectReceive($this, ignoredParam, selectResult) {
    var tmp;
    if (selectResult === get_CHANNEL_CLOSED()) {
      throw _get_receiveException__foorc1($this);
    } else {
      tmp = selectResult;
    }
    return tmp;
  }
  function processResultSelectReceiveOrNull($this, ignoredParam, selectResult) {
    var tmp;
    if (selectResult === get_CHANNEL_CLOSED()) {
      var tmp_0;
      if ($this.get_closeCause_gbqkm2_k$() == null) {
        tmp_0 = null;
      } else {
        throw _get_receiveException__foorc1($this);
      }
      tmp = tmp_0;
    } else {
      tmp = selectResult;
    }
    return tmp;
  }
  function processResultSelectReceiveCatching($this, ignoredParam, selectResult) {
    var tmp;
    if (selectResult === get_CHANNEL_CLOSED()) {
      tmp = Companion_getInstance_0().closed_xuwu5z_k$($this.get_closeCause_gbqkm2_k$());
    } else {
      var tmp_0 = Companion_getInstance_0();
      tmp = tmp_0.success_tizbw6_k$((selectResult == null ? true : !(selectResult == null)) ? selectResult : THROW_CCE());
    }
    return new ChannelResult(tmp);
  }
  function _get_onUndeliveredElementReceiveCancellationConstructor__scoip3($this) {
    return $this.onUndeliveredElementReceiveCancellationConstructor_1;
  }
  function BufferedChannelIterator($outer) {
    this.$this_1 = $outer;
    this.receiveResult_1 = get_NO_RECEIVE_RESULT();
    this.continuation_1 = null;
  }
  protoOf(BufferedChannelIterator).hasNext_nhy1w3_k$ = function ($completion) {
    var tmp = new $hasNextCOROUTINE$(this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BufferedChannelIterator).invokeOnCancellation_9j58v1_k$ = function (segment, index) {
    var tmp0_safe_receiver = this.continuation_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.invokeOnCancellation_9j58v1_k$(segment, index);
    }
  };
  protoOf(BufferedChannelIterator).next_20eer_k$ = function () {
    var result = this.receiveResult_1;
    // Inline function 'kotlin.check' call
    if (!!(result === get_NO_RECEIVE_RESULT())) {
      var message = '`hasNext()` has not been invoked';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.receiveResult_1 = get_NO_RECEIVE_RESULT();
    if (result === get_CHANNEL_CLOSED())
      throw recoverStackTrace_0(_get_receiveException__foorc1(this.$this_1));
    return (result == null ? true : !(result == null)) ? result : THROW_CCE();
  };
  protoOf(BufferedChannelIterator).tryResumeHasNext_yugi5j_k$ = function (element) {
    var cont = ensureNotNull(this.continuation_1);
    this.continuation_1 = null;
    this.receiveResult_1 = element;
    var tmp0_safe_receiver = this.$this_1.onUndeliveredElement_1;
    return tryResume0(cont, true, tmp0_safe_receiver == null ? null : bindCancellationFun(tmp0_safe_receiver, element, cont.get_context_h02k06_k$()));
  };
  protoOf(BufferedChannelIterator).tryResumeHasNextOnClosedChannel_mc581v_k$ = function () {
    var cont = ensureNotNull(this.continuation_1);
    this.continuation_1 = null;
    this.receiveResult_1 = get_CHANNEL_CLOSED();
    var cause = this.$this_1.get_closeCause_gbqkm2_k$();
    if (cause == null) {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      var tmp$ret$0 = _Result___init__impl__xyqfz8(false);
      cont.resumeWith_dtxwbr_k$(tmp$ret$0);
    } else {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var exception = recoverStackTrace(cause, cont);
      // Inline function 'kotlin.Companion.failure' call
      Companion_getInstance();
      var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(exception));
      cont.resumeWith_dtxwbr_k$(tmp$ret$2);
    }
  };
  function _get__closeCause__c2eaw1($this) {
    return $this._closeCause_1;
  }
  function _get_receiveException__foorc1($this) {
    var tmp0_elvis_lhs = $this.get_closeCause_gbqkm2_k$();
    return tmp0_elvis_lhs == null ? new ClosedReceiveChannelException('Channel was closed') : tmp0_elvis_lhs;
  }
  function _get_closeHandler__gfpg7t($this) {
    return $this.closeHandler_1;
  }
  function invokeCloseHandler($this) {
    var tmp0 = $this.closeHandler_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.getAndUpdate' call
      while (true) {
        var cur = tmp0.get_kotlinx$atomicfu$value_vi2am5_k$();
        var tmp;
        if (cur === null) {
          tmp = get_CLOSE_HANDLER_CLOSED();
        } else {
          tmp = get_CLOSE_HANDLER_INVOKED();
        }
        var upd = tmp;
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$1 = cur;
          break $l$block;
        }
      }
    }
    var tmp0_elvis_lhs = tmp$ret$1;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var closeHandler = tmp_0;
    if (typeof closeHandler !== 'function')
      THROW_CCE();
    closeHandler($this.get_closeCause_gbqkm2_k$());
  }
  function markClosed($this) {
    var tmp0 = $this.sendersAndCloseStatus_1;
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp0.get_kotlinx$atomicfu$value_vi2am5_k$();
        // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
        var tmp;
        switch (cur.shr_9fl3wl_k$(60).toInt_1tsl84_k$()) {
          case 0:
            // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

            var tmp$ret$1 = cur.and_4spn93_k$(new Long(-1, 268435455));
            tmp = constructSendersAndCloseStatus(tmp$ret$1, 2);
            break;
          case 1:
            // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

            var tmp$ret$2 = cur.and_4spn93_k$(new Long(-1, 268435455));
            tmp = constructSendersAndCloseStatus(tmp$ret$2, 3);
            break;
          default:
            return Unit_getInstance();
        }
        var upd = tmp;
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$4 = Unit_getInstance();
          break $l$block;
        }
      }
      tmp$ret$4 = Unit_getInstance();
    }
    return tmp$ret$4;
  }
  function markCancelled($this) {
    var tmp0 = $this.sendersAndCloseStatus_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp0.get_kotlinx$atomicfu$value_vi2am5_k$();
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var tmp$ret$0 = cur.and_4spn93_k$(new Long(-1, 268435455));
        var upd = constructSendersAndCloseStatus(tmp$ret$0, 3);
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$2 = Unit_getInstance();
          break $l$block;
        }
      }
      tmp$ret$2 = Unit_getInstance();
    }
    return tmp$ret$2;
  }
  function markCancellationStarted($this) {
    var tmp0 = $this.sendersAndCloseStatus_1;
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp0.get_kotlinx$atomicfu$value_vi2am5_k$();
        var tmp;
        // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
        if (cur.shr_9fl3wl_k$(60).toInt_1tsl84_k$() === 0) {
          // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
          var tmp$ret$1 = cur.and_4spn93_k$(new Long(-1, 268435455));
          tmp = constructSendersAndCloseStatus(tmp$ret$1, 1);
        } else {
          return Unit_getInstance();
        }
        var upd = tmp;
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$3 = Unit_getInstance();
          break $l$block;
        }
      }
      tmp$ret$3 = Unit_getInstance();
    }
    return tmp$ret$3;
  }
  function completeCloseOrCancel($this) {
    $this.get_isClosedForSend_ajczci_k$();
  }
  function completeClose($this, sendersCur) {
    var lastSegment = closeLinkedList($this);
    if ($this.get_isConflatedDropOldest_qp2q39_k$()) {
      var lastBufferedCellGlobalIndex = markAllEmptyCellsAsClosed($this, lastSegment);
      if (!lastBufferedCellGlobalIndex.equals(new Long(-1, -1))) {
        $this.dropFirstElementUntilTheSpecifiedCellIsInTheBuffer_gc2gkg_k$(lastBufferedCellGlobalIndex);
      }
    }
    cancelSuspendedReceiveRequests($this, lastSegment, sendersCur);
    return lastSegment;
  }
  function completeCancel($this, sendersCur) {
    var lastSegment = completeClose($this, sendersCur);
    removeUnprocessedElements($this, lastSegment);
  }
  function closeLinkedList($this) {
    var lastSegment = $this.bufferEndSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    // Inline function 'kotlin.let' call
    var it = $this.sendSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    if (it.get_id_kntnx8_k$().compareTo_9jj042_k$(lastSegment.get_id_kntnx8_k$()) > 0)
      lastSegment = it;
    // Inline function 'kotlin.let' call
    var it_0 = $this.receiveSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    if (it_0.get_id_kntnx8_k$().compareTo_9jj042_k$(lastSegment.get_id_kntnx8_k$()) > 0)
      lastSegment = it_0;
    return close(lastSegment);
  }
  function markAllEmptyCellsAsClosed($this, lastSegment) {
    var segment = lastSegment;
    while (true) {
      var inductionVariable = get_SEGMENT_SIZE() - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          var tmp0 = segment.get_id_kntnx8_k$();
          // Inline function 'kotlin.Long.times' call
          var other = get_SEGMENT_SIZE();
          // Inline function 'kotlin.Long.plus' call
          var globalIndex = tmp0.times_nfzjiw_k$(toLong(other)).plus_r93sks_k$(toLong(index));
          if (globalIndex.compareTo_9jj042_k$($this.get_receiversCounter_ne8ics_k$()) < 0)
            return new Long(-1, -1);
          cell_update: while (true) {
            var state = segment.getState_jak5mi_k$(index);
            if (state === null || state === get_IN_BUFFER()) {
              if (segment.casState_u37dcn_k$(index, state, get_CHANNEL_CLOSED())) {
                segment.onSlotCleaned_do6lqz_k$();
                break cell_update;
              }
            } else if (state === get_BUFFERED())
              return globalIndex;
            else
              break cell_update;
          }
        }
         while (0 <= inductionVariable);
      var tmp1_elvis_lhs = segment.get_prev_wosl18_k$();
      var tmp;
      if (tmp1_elvis_lhs == null) {
        return new Long(-1, -1);
      } else {
        tmp = tmp1_elvis_lhs;
      }
      segment = tmp;
    }
  }
  function removeUnprocessedElements($this, lastSegment) {
    var onUndeliveredElement = $this.onUndeliveredElement_1;
    var undeliveredElementException = null;
    var suspendedSenders = _InlineList___init__impl__z8n56();
    var segment = lastSegment;
    process_segments: while (true) {
      var inductionVariable = get_SEGMENT_SIZE() - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          var tmp0 = segment.get_id_kntnx8_k$();
          // Inline function 'kotlin.Long.times' call
          var other = get_SEGMENT_SIZE();
          // Inline function 'kotlin.Long.plus' call
          var globalIndex = tmp0.times_nfzjiw_k$(toLong(other)).plus_r93sks_k$(toLong(index));
          update_cell: while (true) {
            var state = segment.getState_jak5mi_k$(index);
            if (state === get_DONE_RCV())
              break process_segments;
            else {
              if (state === get_BUFFERED()) {
                if (globalIndex.compareTo_9jj042_k$($this.get_receiversCounter_ne8ics_k$()) < 0)
                  break process_segments;
                if (segment.casState_u37dcn_k$(index, state, get_CHANNEL_CLOSED())) {
                  if (!(onUndeliveredElement == null)) {
                    var element = segment.getElement_ye1phr_k$(index);
                    undeliveredElementException = callUndeliveredElementCatchingException(onUndeliveredElement, element, undeliveredElementException);
                  }
                  segment.cleanElement_ob56q6_k$(index);
                  segment.onSlotCleaned_do6lqz_k$();
                  break update_cell;
                }
              } else {
                if (state === get_IN_BUFFER() || state === null) {
                  if (segment.casState_u37dcn_k$(index, state, get_CHANNEL_CLOSED())) {
                    segment.onSlotCleaned_do6lqz_k$();
                    break update_cell;
                  }
                } else {
                  var tmp;
                  if (!(state == null) ? isInterface(state, Waiter) : false) {
                    tmp = true;
                  } else {
                    tmp = state instanceof WaiterEB;
                  }
                  if (tmp) {
                    if (globalIndex.compareTo_9jj042_k$($this.get_receiversCounter_ne8ics_k$()) < 0)
                      break process_segments;
                    var tmp_0;
                    if (state instanceof WaiterEB) {
                      tmp_0 = state.waiter_1;
                    } else {
                      tmp_0 = (!(state == null) ? isInterface(state, Waiter) : false) ? state : THROW_CCE();
                    }
                    var sender = tmp_0;
                    if (segment.casState_u37dcn_k$(index, state, get_CHANNEL_CLOSED())) {
                      if (!(onUndeliveredElement == null)) {
                        var element_0 = segment.getElement_ye1phr_k$(index);
                        undeliveredElementException = callUndeliveredElementCatchingException(onUndeliveredElement, element_0, undeliveredElementException);
                      }
                      suspendedSenders = InlineList__plus_impl_nuetvo(suspendedSenders, sender);
                      segment.cleanElement_ob56q6_k$(index);
                      segment.onSlotCleaned_do6lqz_k$();
                      break update_cell;
                    }
                  } else {
                    if (state === get_RESUMING_BY_EB() || state === get_RESUMING_BY_RCV())
                      break process_segments;
                    else {
                      if (state === get_RESUMING_BY_EB())
                        continue update_cell;
                      else {
                        break update_cell;
                      }
                    }
                  }
                }
              }
            }
          }
        }
         while (0 <= inductionVariable);
      var tmp1_elvis_lhs = segment.get_prev_wosl18_k$();
      var tmp_1;
      if (tmp1_elvis_lhs == null) {
        break process_segments;
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      segment = tmp_1;
    }
    var tmp0_0 = suspendedSenders;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp0_subject = access$_get_holder__kkflen(tmp0_0);
      if (tmp0_subject == null) {
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          var tmp_2 = access$_get_holder__kkflen(tmp0_0);
          var it = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
          resumeSenderOnCancelledChannel($this, it);
        } else {
          var tmp_3 = access$_get_holder__kkflen(tmp0_0);
          var list = tmp_3 instanceof ArrayList ? tmp_3 : THROW_CCE();
          var inductionVariable_0 = list.get_size_woubt6_k$() - 1 | 0;
          if (0 <= inductionVariable_0)
            do {
              var i = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              var it_0 = list.get_c1px32_k$(i);
              resumeSenderOnCancelledChannel($this, it_0);
            }
             while (0 <= inductionVariable_0);
        }
      }
    }
    var tmp2_safe_receiver = undeliveredElementException;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp2_safe_receiver;
    }
  }
  function cancelSuspendedReceiveRequests($this, lastSegment, sendersCounter) {
    var suspendedReceivers = _InlineList___init__impl__z8n56();
    var segment = lastSegment;
    process_segments: while (!(segment == null)) {
      var inductionVariable = get_SEGMENT_SIZE() - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          var tmp0 = segment.get_id_kntnx8_k$();
          // Inline function 'kotlin.Long.times' call
          var other = get_SEGMENT_SIZE();
          // Inline function 'kotlin.Long.plus' call
          if (tmp0.times_nfzjiw_k$(toLong(other)).plus_r93sks_k$(toLong(index)).compareTo_9jj042_k$(sendersCounter) < 0)
            break process_segments;
          cell_update: while (true) {
            var state = segment.getState_jak5mi_k$(index);
            if (state === null || state === get_IN_BUFFER()) {
              if (segment.casState_u37dcn_k$(index, state, get_CHANNEL_CLOSED())) {
                segment.onSlotCleaned_do6lqz_k$();
                break cell_update;
              }
            } else {
              if (state instanceof WaiterEB) {
                if (segment.casState_u37dcn_k$(index, state, get_CHANNEL_CLOSED())) {
                  suspendedReceivers = InlineList__plus_impl_nuetvo(suspendedReceivers, state.waiter_1);
                  segment.onCancelledRequest_bhmu12_k$(index, true);
                  break cell_update;
                }
              } else {
                if (!(state == null) ? isInterface(state, Waiter) : false) {
                  if (segment.casState_u37dcn_k$(index, state, get_CHANNEL_CLOSED())) {
                    suspendedReceivers = InlineList__plus_impl_nuetvo(suspendedReceivers, state);
                    segment.onCancelledRequest_bhmu12_k$(index, true);
                    break cell_update;
                  }
                } else {
                  break cell_update;
                }
              }
            }
          }
        }
         while (0 <= inductionVariable);
      segment = segment.get_prev_wosl18_k$();
    }
    var tmp0_0 = suspendedReceivers;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp0_subject = access$_get_holder__kkflen(tmp0_0);
      if (tmp0_subject == null) {
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          var tmp = access$_get_holder__kkflen(tmp0_0);
          var it = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
          resumeReceiverOnClosedChannel($this, it);
        } else {
          var tmp_0 = access$_get_holder__kkflen(tmp0_0);
          var list = tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE();
          var inductionVariable_0 = list.get_size_woubt6_k$() - 1 | 0;
          if (0 <= inductionVariable_0)
            do {
              var i = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              var it_0 = list.get_c1px32_k$(i);
              resumeReceiverOnClosedChannel($this, it_0);
            }
             while (0 <= inductionVariable_0);
        }
      }
    }
  }
  function resumeReceiverOnClosedChannel($this, _this__u8e3s4) {
    return resumeWaiterOnClosedChannel($this, _this__u8e3s4, true);
  }
  function resumeSenderOnCancelledChannel($this, _this__u8e3s4) {
    return resumeWaiterOnClosedChannel($this, _this__u8e3s4, false);
  }
  function resumeWaiterOnClosedChannel($this, _this__u8e3s4, receiver) {
    if (_this__u8e3s4 instanceof SendBroadcast) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = _this__u8e3s4.cont_1;
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      var tmp$ret$0 = _Result___init__impl__xyqfz8(false);
      this_0.resumeWith_dtxwbr_k$(tmp$ret$0);
    } else {
      if (isInterface(_this__u8e3s4, CancellableContinuation)) {
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var exception = receiver ? _get_receiveException__foorc1($this) : $this.get_sendException_qpq1ry_k$();
        // Inline function 'kotlin.Companion.failure' call
        Companion_getInstance();
        var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(exception));
        _this__u8e3s4.resumeWith_dtxwbr_k$(tmp$ret$2);
      } else {
        if (_this__u8e3s4 instanceof ReceiveCatching) {
          var tmp0 = _this__u8e3s4.cont_1;
          // Inline function 'kotlin.coroutines.resume' call
          var value = new ChannelResult(Companion_getInstance_0().closed_xuwu5z_k$($this.get_closeCause_gbqkm2_k$()));
          // Inline function 'kotlin.Companion.success' call
          Companion_getInstance();
          var tmp$ret$4 = _Result___init__impl__xyqfz8(value);
          tmp0.resumeWith_dtxwbr_k$(tmp$ret$4);
        } else {
          if (_this__u8e3s4 instanceof BufferedChannelIterator) {
            _this__u8e3s4.tryResumeHasNextOnClosedChannel_mc581v_k$();
          } else {
            if (isInterface(_this__u8e3s4, SelectInstance)) {
              _this__u8e3s4.trySelect_fbege0_k$($this, get_CHANNEL_CLOSED());
            } else {
              // Inline function 'kotlin.error' call
              var message = 'Unexpected waiter: ' + toString(_this__u8e3s4);
              throw IllegalStateException_init_$Create$(toString(message));
            }
          }
        }
      }
    }
  }
  function _get_isClosedForSend0__kxgf9m($this, _this__u8e3s4) {
    return isClosed($this, _this__u8e3s4, false);
  }
  function _get_isClosedForReceive0__f7qknl($this, _this__u8e3s4) {
    return isClosed($this, _this__u8e3s4, true);
  }
  function isClosed($this, sendersAndCloseStatusCur, isClosedForReceive) {
    // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
    var tmp;
    switch (sendersAndCloseStatusCur.shr_9fl3wl_k$(60).toInt_1tsl84_k$()) {
      case 0:
        tmp = false;
        break;
      case 1:
        tmp = false;
        break;
      case 2:
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

        var tmp$ret$1 = sendersAndCloseStatusCur.and_4spn93_k$(new Long(-1, 268435455));
        completeClose($this, tmp$ret$1);
        tmp = isClosedForReceive ? !$this.hasElements_2busqs_k$() : true;
        break;
      case 3:
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

        var tmp$ret$2 = sendersAndCloseStatusCur.and_4spn93_k$(new Long(-1, 268435455));
        completeCancel($this, tmp$ret$2);
        tmp = true;
        break;
      default:
        // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call

        var message = 'unexpected close status: ' + sendersAndCloseStatusCur.shr_9fl3wl_k$(60).toInt_1tsl84_k$();
        throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  }
  function isCellNonEmpty($this, segment, index, globalIndex) {
    while (true) {
      var state = segment.getState_jak5mi_k$(index);
      if (state === null || state === get_IN_BUFFER()) {
        if (segment.casState_u37dcn_k$(index, state, get_POISONED())) {
          expandBuffer($this);
          return false;
        }
      } else if (state === get_BUFFERED())
        return true;
      else if (state === get_INTERRUPTED_SEND())
        return false;
      else if (state === get_CHANNEL_CLOSED())
        return false;
      else if (state === get_DONE_RCV())
        return false;
      else if (state === get_POISONED())
        return false;
      else if (state === get_RESUMING_BY_EB())
        return true;
      else if (state === get_RESUMING_BY_RCV())
        return false;
      else
        return globalIndex.equals($this.get_receiversCounter_ne8ics_k$());
    }
  }
  function findSegmentSend($this, id, startFrom) {
    var tmp0 = $this.sendSegment_1;
    var tmp6 = createSegmentFunction();
    var tmp$ret$2;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      while (true) {
        var s = findSegmentInternal(startFrom, id, tmp6);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp2 = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
          var tmp$ret$0;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            while (true) {
              var cur = tmp0.get_kotlinx$atomicfu$value_vi2am5_k$();
              if (cur.get_id_kntnx8_k$().compareTo_9jj042_k$(tmp2.get_id_kntnx8_k$()) >= 0) {
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (!tmp2.tryIncPointers_6zsfpw_k$()) {
                tmp$ret$0 = false;
                break $l$block_1;
              }
              if (tmp0.atomicfu$compareAndSet(cur, tmp2)) {
                if (cur.decPointers_vy306j_k$()) {
                  cur.remove_ldkf9o_k$();
                }
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (tmp2.decPointers_vy306j_k$()) {
                tmp2.remove_ldkf9o_k$();
              }
            }
            tmp$ret$0 = Unit_getInstance();
          }
          tmp = tmp$ret$0;
        }
        if (tmp) {
          tmp$ret$2 = s;
          break $l$block_2;
        }
      }
    }
    // Inline function 'kotlin.let' call
    var it = tmp$ret$2;
    var tmp_0;
    if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(it)) {
      completeCloseOrCancel($this);
      var tmp0_0 = startFrom.get_id_kntnx8_k$();
      // Inline function 'kotlin.Long.times' call
      var other = get_SEGMENT_SIZE();
      if (tmp0_0.times_nfzjiw_k$(toLong(other)).compareTo_9jj042_k$($this.get_receiversCounter_ne8ics_k$()) < 0) {
        startFrom.cleanPrev_rn0kss_k$();
      }
      tmp_0 = null;
    } else {
      var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(it);
      var tmp_1;
      if (segment.get_id_kntnx8_k$().compareTo_9jj042_k$(id) > 0) {
        var tmp0_1 = segment.get_id_kntnx8_k$();
        // Inline function 'kotlin.Long.times' call
        var other_0 = get_SEGMENT_SIZE();
        var tmp$ret$4 = tmp0_1.times_nfzjiw_k$(toLong(other_0));
        updateSendersCounterIfLower($this, tmp$ret$4);
        var tmp0_2 = segment.get_id_kntnx8_k$();
        // Inline function 'kotlin.Long.times' call
        var other_1 = get_SEGMENT_SIZE();
        if (tmp0_2.times_nfzjiw_k$(toLong(other_1)).compareTo_9jj042_k$($this.get_receiversCounter_ne8ics_k$()) < 0) {
          segment.cleanPrev_rn0kss_k$();
        }
        tmp_1 = null;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_1 = segment;
      }
      tmp_0 = tmp_1;
    }
    return tmp_0;
  }
  function findSegmentReceive($this, id, startFrom) {
    var tmp0 = $this.receiveSegment_1;
    var tmp6 = createSegmentFunction();
    var tmp$ret$2;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      while (true) {
        var s = findSegmentInternal(startFrom, id, tmp6);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp2 = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
          var tmp$ret$0;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            while (true) {
              var cur = tmp0.get_kotlinx$atomicfu$value_vi2am5_k$();
              if (cur.get_id_kntnx8_k$().compareTo_9jj042_k$(tmp2.get_id_kntnx8_k$()) >= 0) {
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (!tmp2.tryIncPointers_6zsfpw_k$()) {
                tmp$ret$0 = false;
                break $l$block_1;
              }
              if (tmp0.atomicfu$compareAndSet(cur, tmp2)) {
                if (cur.decPointers_vy306j_k$()) {
                  cur.remove_ldkf9o_k$();
                }
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (tmp2.decPointers_vy306j_k$()) {
                tmp2.remove_ldkf9o_k$();
              }
            }
            tmp$ret$0 = Unit_getInstance();
          }
          tmp = tmp$ret$0;
        }
        if (tmp) {
          tmp$ret$2 = s;
          break $l$block_2;
        }
      }
    }
    // Inline function 'kotlin.let' call
    var it = tmp$ret$2;
    var tmp_0;
    if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(it)) {
      completeCloseOrCancel($this);
      var tmp0_0 = startFrom.get_id_kntnx8_k$();
      // Inline function 'kotlin.Long.times' call
      var other = get_SEGMENT_SIZE();
      if (tmp0_0.times_nfzjiw_k$(toLong(other)).compareTo_9jj042_k$($this.get_sendersCounter_mvbt0m_k$()) < 0) {
        startFrom.cleanPrev_rn0kss_k$();
      }
      tmp_0 = null;
    } else {
      var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(it);
      var tmp_1;
      if (!_get_isRendezvousOrUnlimited__3mdufi($this)) {
        var tmp0_1 = _get_bufferEndCounter__2d4hee($this);
        // Inline function 'kotlin.Long.div' call
        var other_0 = get_SEGMENT_SIZE();
        var tmp$ret$4 = tmp0_1.div_jun7gj_k$(toLong(other_0));
        tmp_1 = id.compareTo_9jj042_k$(tmp$ret$4) <= 0;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var tmp0_2 = $this.bufferEndSegment_1;
        $l$block_5: {
          // Inline function 'kotlinx.coroutines.internal.moveForward' call
          while (true) {
            var cur_0 = tmp0_2.get_kotlinx$atomicfu$value_vi2am5_k$();
            if (cur_0.get_id_kntnx8_k$().compareTo_9jj042_k$(segment.get_id_kntnx8_k$()) >= 0) {
              break $l$block_5;
            }
            if (!segment.tryIncPointers_6zsfpw_k$()) {
              break $l$block_5;
            }
            if (tmp0_2.atomicfu$compareAndSet(cur_0, segment)) {
              if (cur_0.decPointers_vy306j_k$()) {
                cur_0.remove_ldkf9o_k$();
              }
              break $l$block_5;
            }
            if (segment.decPointers_vy306j_k$()) {
              segment.remove_ldkf9o_k$();
            }
          }
        }
      }
      var tmp_2;
      if (segment.get_id_kntnx8_k$().compareTo_9jj042_k$(id) > 0) {
        var tmp0_3 = segment.get_id_kntnx8_k$();
        // Inline function 'kotlin.Long.times' call
        var other_1 = get_SEGMENT_SIZE();
        var tmp$ret$7 = tmp0_3.times_nfzjiw_k$(toLong(other_1));
        updateReceiversCounterIfLower($this, tmp$ret$7);
        var tmp0_4 = segment.get_id_kntnx8_k$();
        // Inline function 'kotlin.Long.times' call
        var other_2 = get_SEGMENT_SIZE();
        if (tmp0_4.times_nfzjiw_k$(toLong(other_2)).compareTo_9jj042_k$($this.get_sendersCounter_mvbt0m_k$()) < 0) {
          segment.cleanPrev_rn0kss_k$();
        }
        tmp_2 = null;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_2 = segment;
      }
      tmp_0 = tmp_2;
    }
    return tmp_0;
  }
  function findSegmentBufferEnd($this, id, startFrom, currentBufferEndCounter) {
    var tmp0 = $this.bufferEndSegment_1;
    var tmp6 = createSegmentFunction();
    var tmp$ret$2;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      while (true) {
        var s = findSegmentInternal(startFrom, id, tmp6);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp2 = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
          var tmp$ret$0;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            while (true) {
              var cur = tmp0.get_kotlinx$atomicfu$value_vi2am5_k$();
              if (cur.get_id_kntnx8_k$().compareTo_9jj042_k$(tmp2.get_id_kntnx8_k$()) >= 0) {
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (!tmp2.tryIncPointers_6zsfpw_k$()) {
                tmp$ret$0 = false;
                break $l$block_1;
              }
              if (tmp0.atomicfu$compareAndSet(cur, tmp2)) {
                if (cur.decPointers_vy306j_k$()) {
                  cur.remove_ldkf9o_k$();
                }
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (tmp2.decPointers_vy306j_k$()) {
                tmp2.remove_ldkf9o_k$();
              }
            }
            tmp$ret$0 = Unit_getInstance();
          }
          tmp = tmp$ret$0;
        }
        if (tmp) {
          tmp$ret$2 = s;
          break $l$block_2;
        }
      }
    }
    // Inline function 'kotlin.let' call
    var it = tmp$ret$2;
    var tmp_0;
    if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(it)) {
      completeCloseOrCancel($this);
      moveSegmentBufferEndToSpecifiedOrLast($this, id, startFrom);
      incCompletedExpandBufferAttempts$default($this);
      tmp_0 = null;
    } else {
      var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(it);
      var tmp_1;
      if (segment.get_id_kntnx8_k$().compareTo_9jj042_k$(id) > 0) {
        // Inline function 'kotlin.Long.plus' call
        var tmp_2 = currentBufferEndCounter.plus_r93sks_k$(toLong(1));
        var tmp0_0 = segment.get_id_kntnx8_k$();
        // Inline function 'kotlin.Long.times' call
        var other = get_SEGMENT_SIZE();
        var tmp$ret$4 = tmp0_0.times_nfzjiw_k$(toLong(other));
        if ($this.bufferEnd_1.atomicfu$compareAndSet(tmp_2, tmp$ret$4)) {
          var tmp0_1 = segment.get_id_kntnx8_k$();
          // Inline function 'kotlin.Long.times' call
          var other_0 = get_SEGMENT_SIZE();
          var tmp$ret$5 = tmp0_1.times_nfzjiw_k$(toLong(other_0));
          incCompletedExpandBufferAttempts($this, tmp$ret$5.minus_mfbszm_k$(currentBufferEndCounter));
        } else {
          incCompletedExpandBufferAttempts$default($this);
        }
        tmp_1 = null;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_1 = segment;
      }
      tmp_0 = tmp_1;
    }
    return tmp_0;
  }
  function moveSegmentBufferEndToSpecifiedOrLast($this, id, startFrom) {
    var segment = startFrom;
    $l$loop: while (segment.get_id_kntnx8_k$().compareTo_9jj042_k$(id) < 0) {
      var tmp0_elvis_lhs = segment.get_next_wor1vg_k$();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break $l$loop;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      segment = tmp;
    }
    while (true) {
      $l$loop_0: while (segment.get_isRemoved_gzdz59_k$()) {
        var tmp1_elvis_lhs = segment.get_next_wor1vg_k$();
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          break $l$loop_0;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        segment = tmp_0;
      }
      var tmp0 = $this.bufferEndSegment_1;
      var tmp2 = segment;
      var tmp$ret$0;
      $l$block_1: {
        // Inline function 'kotlinx.coroutines.internal.moveForward' call
        while (true) {
          var cur = tmp0.get_kotlinx$atomicfu$value_vi2am5_k$();
          if (cur.get_id_kntnx8_k$().compareTo_9jj042_k$(tmp2.get_id_kntnx8_k$()) >= 0) {
            tmp$ret$0 = true;
            break $l$block_1;
          }
          if (!tmp2.tryIncPointers_6zsfpw_k$()) {
            tmp$ret$0 = false;
            break $l$block_1;
          }
          if (tmp0.atomicfu$compareAndSet(cur, tmp2)) {
            if (cur.decPointers_vy306j_k$()) {
              cur.remove_ldkf9o_k$();
            }
            tmp$ret$0 = true;
            break $l$block_1;
          }
          if (tmp2.decPointers_vy306j_k$()) {
            tmp2.remove_ldkf9o_k$();
          }
        }
        tmp$ret$0 = Unit_getInstance();
      }
      if (tmp$ret$0)
        return Unit_getInstance();
    }
  }
  function updateSendersCounterIfLower($this, value) {
    var this_0 = $this.sendersAndCloseStatus_1;
    while (true) {
      var cur = this_0.get_kotlinx$atomicfu$value_vi2am5_k$();
      // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
      var curCounter = cur.and_4spn93_k$(new Long(-1, 268435455));
      if (curCounter.compareTo_9jj042_k$(value) >= 0)
        return Unit_getInstance();
      // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
      var tmp$ret$1 = cur.shr_9fl3wl_k$(60).toInt_1tsl84_k$();
      var update = constructSendersAndCloseStatus(curCounter, tmp$ret$1);
      if ($this.sendersAndCloseStatus_1.atomicfu$compareAndSet(cur, update))
        return Unit_getInstance();
    }
    return Unit_getInstance();
  }
  function updateReceiversCounterIfLower($this, value) {
    var this_0 = $this.receivers_1;
    while (true) {
      var cur = this_0.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (cur.compareTo_9jj042_k$(value) >= 0)
        return Unit_getInstance();
      if ($this.receivers_1.atomicfu$compareAndSet(cur, value))
        return Unit_getInstance();
    }
    return Unit_getInstance();
  }
  function BufferedChannel$sendImpl$lambda(_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi, _anonymous_parameter_3__qggqen) {
    var message = 'unexpected';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function BufferedChannel$receiveImpl$lambda(_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
    var message = 'unexpected';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function BufferedChannel$registerSelectForSend$ref() {
    var l = function (p0, p1, p2) {
      p0.registerSelectForSend_39wkg4_k$(p1, p2);
      return Unit_getInstance();
    };
    l.callableName = 'registerSelectForSend';
    return l;
  }
  function BufferedChannel$processResultSelectSend$ref() {
    var l = function (p0, p1, p2) {
      return processResultSelectSend(p0, p1, p2);
    };
    l.callableName = 'processResultSelectSend';
    return l;
  }
  function BufferedChannel$registerSelectForReceive$ref() {
    var l = function (p0, p1, p2) {
      registerSelectForReceive(p0, p1, p2);
      return Unit_getInstance();
    };
    l.callableName = 'registerSelectForReceive';
    return l;
  }
  function BufferedChannel$processResultSelectReceive$ref() {
    var l = function (p0, p1, p2) {
      return processResultSelectReceive(p0, p1, p2);
    };
    l.callableName = 'processResultSelectReceive';
    return l;
  }
  function BufferedChannel$registerSelectForReceive$ref_0() {
    var l = function (p0, p1, p2) {
      registerSelectForReceive(p0, p1, p2);
      return Unit_getInstance();
    };
    l.callableName = 'registerSelectForReceive';
    return l;
  }
  function BufferedChannel$processResultSelectReceiveCatching$ref() {
    var l = function (p0, p1, p2) {
      return processResultSelectReceiveCatching(p0, p1, p2);
    };
    l.callableName = 'processResultSelectReceiveCatching';
    return l;
  }
  function BufferedChannel$registerSelectForReceive$ref_1() {
    var l = function (p0, p1, p2) {
      registerSelectForReceive(p0, p1, p2);
      return Unit_getInstance();
    };
    l.callableName = 'registerSelectForReceive';
    return l;
  }
  function BufferedChannel$processResultSelectReceiveOrNull$ref() {
    var l = function (p0, p1, p2) {
      return processResultSelectReceiveOrNull(p0, p1, p2);
    };
    l.callableName = 'processResultSelectReceiveOrNull';
    return l;
  }
  function BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda$lambda($element, this$0, $select) {
    return function (it) {
      var tmp;
      if (!($element === get_CHANNEL_CLOSED())) {
        callUndeliveredElement(this$0.onUndeliveredElement_1, ($element == null ? true : !($element == null)) ? $element : THROW_CCE(), $select.get_context_h02k06_k$());
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda(this$0) {
    return function (select, _anonymous_parameter_1__qggqgd, element) {
      return BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda$lambda(element, this$0, select);
    };
  }
  function $sendCOROUTINE$(_this__u8e3s4, element, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.element_1 = element;
  }
  protoOf($sendCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(11);
            var tmp_0 = this;
            tmp_0.tmp00__1 = this._this__u8e3s4__1;
            var tmp_1 = this;
            tmp_1.tmp21__1 = this.element_1;
            var tmp_2 = this;
            tmp_2.tmp42__1 = null;
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.this4__1 = this.tmp00__1;
            this.element5__1 = this.tmp21__1;
            this.waiter6__1 = this.tmp42__1;
            this.segment7__1 = this.this4__1.sendSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$();
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            if (!true) {
              this.set_state_rjd8d0_k$(12);
              continue $sm;
            }

            this.sendersAndCloseStatusCur8__1 = this.this4__1.sendersAndCloseStatus_1.atomicfu$getAndIncrement$long();
            var tmp_3 = this;
            tmp_3.s9__1 = this.sendersAndCloseStatusCur8__1.and_4spn93_k$(new Long(-1, 268435455));
            this.closed10__1 = _get_isClosedForSend0__kxgf9m(this.this4__1, this.sendersAndCloseStatusCur8__1);
            var tmp_4 = this;
            var tmp0 = this.s9__1;
            var other = get_SEGMENT_SIZE();
            tmp_4.id11__1 = tmp0.div_jun7gj_k$(toLong(other));
            var tmp_5 = this;
            var tmp0_0 = this.s9__1;
            var other_0 = get_SEGMENT_SIZE();
            tmp_5.i12__1 = tmp0_0.rem_bsnl9o_k$(toLong(other_0)).toInt_1tsl84_k$();
            if (!this.segment7__1.get_id_kntnx8_k$().equals(this.id11__1)) {
              this.tmp0_elvis_lhs13__1 = findSegmentSend(this.this4__1, this.id11__1, this.segment7__1);
              if (this.tmp0_elvis_lhs13__1 == null) {
                if (this.closed10__1) {
                  this.set_state_rjd8d0_k$(10);
                  suspendResult = onClosedSend(this._this__u8e3s4__1, this.element_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.set_state_rjd8d0_k$(2);
                  continue $sm;
                }
              } else {
                this.WHEN_RESULT14__1 = this.tmp0_elvis_lhs13__1;
                this.set_state_rjd8d0_k$(3);
                continue $sm;
              }
            } else {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

          case 3:
            this.segment7__1 = this.WHEN_RESULT14__1;
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 4:
            this.tmp1_subject15__1 = updateCellSend(this.this4__1, this.segment7__1, this.i12__1, this.element5__1, this.s9__1, this.waiter6__1, this.closed10__1);
            if (this.tmp1_subject15__1 === 0) {
              this.segment7__1.cleanPrev_rn0kss_k$();
              var tmp_6 = this;
              tmp_6.tmp$ret$03__1 = Unit_getInstance();
              this.set_state_rjd8d0_k$(13);
              continue $sm;
            } else {
              if (this.tmp1_subject15__1 === 1) {
                var tmp_7 = this;
                tmp_7.tmp$ret$03__1 = Unit_getInstance();
                this.set_state_rjd8d0_k$(13);
                continue $sm;
              } else {
                if (this.tmp1_subject15__1 === 2) {
                  if (this.closed10__1) {
                    this.segment7__1.onSlotCleaned_do6lqz_k$();
                    this.set_state_rjd8d0_k$(9);
                    suspendResult = onClosedSend(this._this__u8e3s4__1, this.element_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    this.set_state_rjd8d0_k$(8);
                    continue $sm;
                  }
                } else {
                  if (this.tmp1_subject15__1 === 4) {
                    if (this.s9__1.compareTo_9jj042_k$(this.this4__1.get_receiversCounter_ne8ics_k$()) < 0) {
                      this.segment7__1.cleanPrev_rn0kss_k$();
                    }
                    this.set_state_rjd8d0_k$(7);
                    suspendResult = onClosedSend(this._this__u8e3s4__1, this.element_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    if (this.tmp1_subject15__1 === 5) {
                      this.segment7__1.cleanPrev_rn0kss_k$();
                      this.set_state_rjd8d0_k$(2);
                      continue $sm;
                    } else {
                      if (this.tmp1_subject15__1 === 3) {
                        var tmp_8 = this;
                        tmp_8.tmp016__1 = this.segment7__1;
                        var tmp_9 = this;
                        tmp_9.tmp217__1 = this.i12__1;
                        var tmp_10 = this;
                        tmp_10.tmp418__1 = this.element5__1;
                        var tmp_11 = this;
                        tmp_11.tmp619__1 = this.s9__1;
                        this.segm20__1 = this.tmp016__1;
                        this.i21__1 = this.tmp217__1;
                        this.elem22__1 = this.tmp418__1;
                        this.s23__1 = this.tmp619__1;
                        this.set_state_rjd8d0_k$(6);
                        suspendResult = sendOnNoWaiterSuspend(this._this__u8e3s4__1, this.segm20__1, this.i21__1, this.elem22__1, this.s23__1, this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                          return suspendResult;
                        }
                        continue $sm;
                      } else {
                        this.set_state_rjd8d0_k$(5);
                        continue $sm;
                      }
                    }
                  }
                }
              }
            }

          case 5:
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 6:
            var tmp_12 = this;
            tmp_12.tmp$ret$03__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(13);
            continue $sm;
          case 7:
            var tmp_13 = this;
            tmp_13.tmp$ret$03__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(13);
            continue $sm;
          case 8:
            var tmp_14 = this.waiter6__1;
            var tmp2_safe_receiver = (!(tmp_14 == null) ? isInterface(tmp_14, Waiter) : false) ? tmp_14 : null;
            if (tmp2_safe_receiver == null)
              null;
            else {
              prepareSenderForSuspension(this.this4__1, tmp2_safe_receiver, this.segment7__1, this.i12__1);
            }

            var tmp_15 = this;
            this.segment7__1;
            this.i12__1;
            tmp_15.tmp$ret$03__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(13);
            continue $sm;
          case 9:
            var tmp_16 = this;
            tmp_16.tmp$ret$03__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(13);
            continue $sm;
          case 10:
            var tmp_17 = this;
            tmp_17.tmp$ret$03__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(13);
            continue $sm;
          case 11:
            throw this.get_exception_x0n6w6_k$();
          case 12:
            if (false) {
              this.set_state_rjd8d0_k$(1);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(13);
            continue $sm;
          case 13:
            return Unit_getInstance();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 11) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $receiveCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($receiveCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(8);
            var tmp_0 = this;
            tmp_0.tmp00__1 = this._this__u8e3s4__1;
            var tmp_1 = this;
            tmp_1.tmp21__1 = null;
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.this3__1 = this.tmp00__1;
            this.waiter4__1 = this.tmp21__1;
            this.segment5__1 = this.this3__1.receiveSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$();
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            if (!true) {
              this.set_state_rjd8d0_k$(9);
              continue $sm;
            }

            if (this.this3__1.get_isClosedForReceive_v0r77d_k$()) {
              var tmp_2 = this;
              throw recoverStackTrace_0(_get_receiveException__foorc1(this._this__u8e3s4__1));
            } else {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

          case 3:
            this.r6__1 = this.this3__1.receivers_1.atomicfu$getAndIncrement$long();
            var tmp_3 = this;
            var tmp0 = this.r6__1;
            var other = get_SEGMENT_SIZE();
            tmp_3.id7__1 = tmp0.div_jun7gj_k$(toLong(other));
            var tmp_4 = this;
            var tmp0_0 = this.r6__1;
            var other_0 = get_SEGMENT_SIZE();
            tmp_4.i8__1 = tmp0_0.rem_bsnl9o_k$(toLong(other_0)).toInt_1tsl84_k$();
            if (!this.segment5__1.get_id_kntnx8_k$().equals(this.id7__1)) {
              this.tmp0_elvis_lhs9__1 = findSegmentReceive(this.this3__1, this.id7__1, this.segment5__1);
              if (this.tmp0_elvis_lhs9__1 == null) {
                this.set_state_rjd8d0_k$(2);
                var tmp_5 = this;
                continue $sm;
              } else {
                this.WHEN_RESULT10__1 = this.tmp0_elvis_lhs9__1;
                this.set_state_rjd8d0_k$(4);
                continue $sm;
              }
            } else {
              this.set_state_rjd8d0_k$(5);
              continue $sm;
            }

          case 4:
            this.segment5__1 = this.WHEN_RESULT10__1;
            this.set_state_rjd8d0_k$(5);
            continue $sm;
          case 5:
            this.updCellResult11__1 = updateCellReceive(this.this3__1, this.segment5__1, this.i8__1, this.r6__1, this.waiter4__1);
            if (this.updCellResult11__1 === get_SUSPEND()) {
              var tmp_6 = this;
              var tmp_7 = this.waiter4__1;
              var tmp1_safe_receiver = (!(tmp_7 == null) ? isInterface(tmp_7, Waiter) : false) ? tmp_7 : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(this.this3__1, tmp1_safe_receiver, this.segment5__1, this.i8__1);
              }
              this.segment5__1;
              this.i8__1;
              this.r6__1;
              var message = 'unexpected';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              if (this.updCellResult11__1 === get_FAILED()) {
                if (this.r6__1.compareTo_9jj042_k$(this.this3__1.get_sendersCounter_mvbt0m_k$()) < 0) {
                  this.segment5__1.cleanPrev_rn0kss_k$();
                }
                this.set_state_rjd8d0_k$(2);
                var tmp_8 = this;
                continue $sm;
              } else {
                if (this.updCellResult11__1 === get_SUSPEND_NO_WAITER()) {
                  var tmp_9 = this;
                  tmp_9.tmp013__1 = this.segment5__1;
                  var tmp_10 = this;
                  tmp_10.tmp214__1 = this.i8__1;
                  var tmp_11 = this;
                  tmp_11.tmp415__1 = this.r6__1;
                  this.segm16__1 = this.tmp013__1;
                  this.i17__1 = this.tmp214__1;
                  this.r18__1 = this.tmp415__1;
                  this.set_state_rjd8d0_k$(6);
                  suspendResult = receiveOnNoWaiterSuspend(this._this__u8e3s4__1, this.segm16__1, this.i17__1, this.r18__1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  var tmp_12 = this;
                  this.segment5__1.cleanPrev_rn0kss_k$();
                  var tmp_13 = this.updCellResult11__1;
                  return (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
                }
              }
            }

          case 6:
            this.WHEN_RESULT12__1 = suspendResult;
            this.set_state_rjd8d0_k$(7);
            continue $sm;
          case 7:
            this.tmp$ret$02__1 = this.WHEN_RESULT12__1;
            this.set_state_rjd8d0_k$(10);
            continue $sm;
          case 8:
            throw this.get_exception_x0n6w6_k$();
          case 9:
            if (false) {
              this.set_state_rjd8d0_k$(1);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(10);
            continue $sm;
          case 10:
            return this.tmp$ret$02__1;
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 8) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $receiveCatchingCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($receiveCatchingCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(9);
            var tmp_0 = this;
            tmp_0.tmp00__1 = this._this__u8e3s4__1;
            var tmp_1 = this;
            tmp_1.tmp21__1 = null;
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.this3__1 = this.tmp00__1;
            this.waiter4__1 = this.tmp21__1;
            this.segment5__1 = this.this3__1.receiveSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$();
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            if (!true) {
              this.set_state_rjd8d0_k$(10);
              continue $sm;
            }

            if (this.this3__1.get_isClosedForReceive_v0r77d_k$()) {
              var tmp_2 = this;
              tmp_2.tmp$ret$02__1 = Companion_getInstance_0().closed_xuwu5z_k$(this._this__u8e3s4__1.get_closeCause_gbqkm2_k$());
              this.set_state_rjd8d0_k$(11);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

          case 3:
            this.r6__1 = this.this3__1.receivers_1.atomicfu$getAndIncrement$long();
            var tmp_3 = this;
            var tmp0 = this.r6__1;
            var other = get_SEGMENT_SIZE();
            tmp_3.id7__1 = tmp0.div_jun7gj_k$(toLong(other));
            var tmp_4 = this;
            var tmp0_0 = this.r6__1;
            var other_0 = get_SEGMENT_SIZE();
            tmp_4.i8__1 = tmp0_0.rem_bsnl9o_k$(toLong(other_0)).toInt_1tsl84_k$();
            if (!this.segment5__1.get_id_kntnx8_k$().equals(this.id7__1)) {
              this.tmp0_elvis_lhs9__1 = findSegmentReceive(this.this3__1, this.id7__1, this.segment5__1);
              if (this.tmp0_elvis_lhs9__1 == null) {
                this.set_state_rjd8d0_k$(2);
                var tmp_5 = this;
                continue $sm;
              } else {
                this.WHEN_RESULT10__1 = this.tmp0_elvis_lhs9__1;
                this.set_state_rjd8d0_k$(4);
                continue $sm;
              }
            } else {
              this.set_state_rjd8d0_k$(5);
              continue $sm;
            }

          case 4:
            this.segment5__1 = this.WHEN_RESULT10__1;
            this.set_state_rjd8d0_k$(5);
            continue $sm;
          case 5:
            this.updCellResult11__1 = updateCellReceive(this.this3__1, this.segment5__1, this.i8__1, this.r6__1, this.waiter4__1);
            if (this.updCellResult11__1 === get_SUSPEND()) {
              var tmp_6 = this;
              var tmp_7 = this.waiter4__1;
              var tmp1_safe_receiver = (!(tmp_7 == null) ? isInterface(tmp_7, Waiter) : false) ? tmp_7 : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(this.this3__1, tmp1_safe_receiver, this.segment5__1, this.i8__1);
              }
              this.segment5__1;
              this.i8__1;
              this.r6__1;
              var message = 'unexpected';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              if (this.updCellResult11__1 === get_FAILED()) {
                if (this.r6__1.compareTo_9jj042_k$(this.this3__1.get_sendersCounter_mvbt0m_k$()) < 0) {
                  this.segment5__1.cleanPrev_rn0kss_k$();
                }
                this.set_state_rjd8d0_k$(2);
                var tmp_8 = this;
                continue $sm;
              } else {
                if (this.updCellResult11__1 === get_SUSPEND_NO_WAITER()) {
                  var tmp_9 = this;
                  tmp_9.tmp013__1 = this.segment5__1;
                  var tmp_10 = this;
                  tmp_10.tmp214__1 = this.i8__1;
                  var tmp_11 = this;
                  tmp_11.tmp415__1 = this.r6__1;
                  this.segm16__1 = this.tmp013__1;
                  this.i17__1 = this.tmp214__1;
                  this.r18__1 = this.tmp415__1;
                  this.set_state_rjd8d0_k$(6);
                  suspendResult = receiveCatchingOnNoWaiterSuspend(this._this__u8e3s4__1, this.segm16__1, this.i17__1, this.r18__1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  this.set_state_rjd8d0_k$(7);
                  continue $sm;
                } else {
                  var tmp_12 = this;
                  this.segment5__1.cleanPrev_rn0kss_k$();
                  var tmp_13 = this.updCellResult11__1;
                  var element = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
                  tmp_12.WHEN_RESULT12__1 = new ChannelResult(Companion_getInstance_0().success_tizbw6_k$(element));
                  this.set_state_rjd8d0_k$(8);
                  continue $sm;
                }
              }
            }

          case 6:
            var unboxed = suspendResult.holder_1;
            suspendResult = new ChannelResult(unboxed);
            this.set_state_rjd8d0_k$(7);
            continue $sm;
          case 7:
            this.WHEN_RESULT12__1 = suspendResult;
            this.set_state_rjd8d0_k$(8);
            continue $sm;
          case 8:
            this.tmp$ret$02__1 = this.WHEN_RESULT12__1.holder_1;
            this.set_state_rjd8d0_k$(11);
            continue $sm;
          case 9:
            throw this.get_exception_x0n6w6_k$();
          case 10:
            if (false) {
              this.set_state_rjd8d0_k$(1);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(11);
            continue $sm;
          case 11:
            return new ChannelResult(this.tmp$ret$02__1);
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 9) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function BufferedChannel(capacity, onUndeliveredElement) {
    onUndeliveredElement = onUndeliveredElement === VOID ? null : onUndeliveredElement;
    this.capacity_1 = capacity;
    this.onUndeliveredElement_1 = onUndeliveredElement;
    // Inline function 'kotlin.require' call
    if (!(this.capacity_1 >= 0)) {
      var message = 'Invalid channel capacity: ' + this.capacity_1 + ', should be >=0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.sendersAndCloseStatus_1 = atomic$long$1(new Long(0, 0));
    this.receivers_1 = atomic$long$1(new Long(0, 0));
    this.bufferEnd_1 = atomic$long$1(initialBufferEnd(this.capacity_1));
    this.completedExpandBuffersAndPauseFlag_1 = atomic$long$1(_get_bufferEndCounter__2d4hee(this));
    var firstSegment = new ChannelSegment(new Long(0, 0), null, this, 3);
    this.sendSegment_1 = atomic$ref$1(firstSegment);
    this.receiveSegment_1 = atomic$ref$1(firstSegment);
    var tmp = this;
    var tmp_0;
    if (_get_isRendezvousOrUnlimited__3mdufi(this)) {
      var tmp_1 = get_NULL_SEGMENT();
      tmp_0 = tmp_1 instanceof ChannelSegment ? tmp_1 : THROW_CCE();
    } else {
      tmp_0 = firstSegment;
    }
    tmp.bufferEndSegment_1 = atomic$ref$1(tmp_0);
    var tmp_2 = this;
    var tmp_3;
    if (this.onUndeliveredElement_1 == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_3 = BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda(this);
    }
    tmp_2.onUndeliveredElementReceiveCancellationConstructor_1 = tmp_3;
    this._closeCause_1 = atomic$ref$1(get_NO_CLOSE_CAUSE());
    this.closeHandler_1 = atomic$ref$1(null);
  }
  protoOf(BufferedChannel).get_onUndeliveredElement_hdiudo_k$ = function () {
    return this.onUndeliveredElement_1;
  };
  protoOf(BufferedChannel).get_sendersCounter_mvbt0m_k$ = function () {
    // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
    return this.sendersAndCloseStatus_1.get_kotlinx$atomicfu$value_vi2am5_k$().and_4spn93_k$(new Long(-1, 268435455));
  };
  protoOf(BufferedChannel).get_receiversCounter_ne8ics_k$ = function () {
    return this.receivers_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  };
  protoOf(BufferedChannel).send_44jogj_k$ = function (element, $completion) {
    var tmp = new $sendCOROUTINE$(this, element, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BufferedChannel).trySend_62dpg8_k$ = function (element) {
    if (shouldSendSuspend0(this, this.sendersAndCloseStatus_1.get_kotlinx$atomicfu$value_vi2am5_k$()))
      return Companion_getInstance_0().failure_q0nifh_k$();
    var tmp4 = get_INTERRUPTED_SEND();
    var tmp$ret$4;
    $l$block_5: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
      var segment = this.sendSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$();
      $l$loop_0: while (true) {
        var sendersAndCloseStatusCur = this.sendersAndCloseStatus_1.atomicfu$getAndIncrement$long();
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var s = sendersAndCloseStatusCur.and_4spn93_k$(new Long(-1, 268435455));
        var closed = _get_isClosedForSend0__kxgf9m(this, sendersAndCloseStatusCur);
        // Inline function 'kotlin.Long.div' call
        var other = get_SEGMENT_SIZE();
        var id = s.div_jun7gj_k$(toLong(other));
        // Inline function 'kotlin.Long.rem' call
        var other_0 = get_SEGMENT_SIZE();
        var i = s.rem_bsnl9o_k$(toLong(other_0)).toInt_1tsl84_k$();
        if (!segment.get_id_kntnx8_k$().equals(id)) {
          var tmp0_elvis_lhs = findSegmentSend(this, id, segment);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            var tmp_0;
            if (closed) {
              tmp$ret$4 = Companion_getInstance_0().closed_xuwu5z_k$(this.get_sendException_qpq1ry_k$());
              break $l$block_5;
            } else {
              continue $l$loop_0;
            }
          } else {
            tmp = tmp0_elvis_lhs;
          }
          segment = tmp;
        }
        switch (updateCellSend(this, segment, i, element, s, tmp4, closed)) {
          case 0:
            segment.cleanPrev_rn0kss_k$();
            tmp$ret$4 = Companion_getInstance_0().success_tizbw6_k$(Unit_getInstance());
            break $l$block_5;
          case 1:
            tmp$ret$4 = Companion_getInstance_0().success_tizbw6_k$(Unit_getInstance());
            break $l$block_5;
          case 2:
            if (closed) {
              segment.onSlotCleaned_do6lqz_k$();
              tmp$ret$4 = Companion_getInstance_0().closed_xuwu5z_k$(this.get_sendException_qpq1ry_k$());
              break $l$block_5;
            }

            var tmp2_safe_receiver = (!(tmp4 == null) ? isInterface(tmp4, Waiter) : false) ? tmp4 : null;
            if (tmp2_safe_receiver == null)
              null;
            else {
              prepareSenderForSuspension(this, tmp2_safe_receiver, segment, i);
            }

            segment.onSlotCleaned_do6lqz_k$();
            tmp$ret$4 = Companion_getInstance_0().failure_q0nifh_k$();
            break $l$block_5;
          case 4:
            if (s.compareTo_9jj042_k$(this.get_receiversCounter_ne8ics_k$()) < 0) {
              segment.cleanPrev_rn0kss_k$();
            }

            tmp$ret$4 = Companion_getInstance_0().closed_xuwu5z_k$(this.get_sendException_qpq1ry_k$());
            break $l$block_5;
          case 5:
            segment.cleanPrev_rn0kss_k$();
            continue $l$loop_0;
          case 3:
            var message = 'unexpected';
            throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    return tmp$ret$4;
  };
  protoOf(BufferedChannel).sendBroadcast_18uj62_k$ = function (element, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.initCancellability_shqc60_k$();
    // Inline function 'kotlin.check' call
    if (!(this.onUndeliveredElement_1 == null)) {
      var message = 'the `onUndeliveredElement` feature is unsupported for `sendBroadcast(e)`';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp4 = new SendBroadcast(cancellable);
    $l$block_5: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
      var segment = this.sendSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$();
      $l$loop_0: while (true) {
        var sendersAndCloseStatusCur = this.sendersAndCloseStatus_1.atomicfu$getAndIncrement$long();
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var s = sendersAndCloseStatusCur.and_4spn93_k$(new Long(-1, 268435455));
        var closed = _get_isClosedForSend0__kxgf9m(this, sendersAndCloseStatusCur);
        // Inline function 'kotlin.Long.div' call
        var other = get_SEGMENT_SIZE();
        var id = s.div_jun7gj_k$(toLong(other));
        // Inline function 'kotlin.Long.rem' call
        var other_0 = get_SEGMENT_SIZE();
        var i = s.rem_bsnl9o_k$(toLong(other_0)).toInt_1tsl84_k$();
        if (!segment.get_id_kntnx8_k$().equals(id)) {
          var tmp0_elvis_lhs = findSegmentSend(this, id, segment);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            var tmp_0;
            if (closed) {
              // Inline function 'kotlin.coroutines.resume' call
              // Inline function 'kotlin.Companion.success' call
              Companion_getInstance();
              var tmp$ret$5 = _Result___init__impl__xyqfz8(false);
              cancellable.resumeWith_dtxwbr_k$(tmp$ret$5);
              break $l$block_5;
            } else {
              continue $l$loop_0;
            }
          } else {
            tmp = tmp0_elvis_lhs;
          }
          segment = tmp;
        }
        switch (updateCellSend(this, segment, i, element, s, tmp4, closed)) {
          case 0:
            segment.cleanPrev_rn0kss_k$();
            // Inline function 'kotlin.coroutines.resume' call

            // Inline function 'kotlin.Companion.success' call

            Companion_getInstance();
            var tmp$ret$9 = _Result___init__impl__xyqfz8(true);
            cancellable.resumeWith_dtxwbr_k$(tmp$ret$9);
            break $l$block_5;
          case 1:
            // Inline function 'kotlin.coroutines.resume' call

            // Inline function 'kotlin.Companion.success' call

            Companion_getInstance();
            var tmp$ret$12 = _Result___init__impl__xyqfz8(true);
            cancellable.resumeWith_dtxwbr_k$(tmp$ret$12);
            break $l$block_5;
          case 2:
            if (closed) {
              segment.onSlotCleaned_do6lqz_k$();
              // Inline function 'kotlin.coroutines.resume' call
              // Inline function 'kotlin.Companion.success' call
              Companion_getInstance();
              var tmp$ret$15 = _Result___init__impl__xyqfz8(false);
              cancellable.resumeWith_dtxwbr_k$(tmp$ret$15);
              break $l$block_5;
            }

            var tmp2_safe_receiver = (!(tmp4 == null) ? isInterface(tmp4, Waiter) : false) ? tmp4 : null;
            if (tmp2_safe_receiver == null)
              null;
            else {
              prepareSenderForSuspension(this, tmp2_safe_receiver, segment, i);
            }

            break $l$block_5;
          case 4:
            if (s.compareTo_9jj042_k$(this.get_receiversCounter_ne8ics_k$()) < 0) {
              segment.cleanPrev_rn0kss_k$();
            }

            // Inline function 'kotlin.coroutines.resume' call

            // Inline function 'kotlin.Companion.success' call

            Companion_getInstance();
            var tmp$ret$19 = _Result___init__impl__xyqfz8(false);
            cancellable.resumeWith_dtxwbr_k$(tmp$ret$19);
            break $l$block_5;
          case 5:
            segment.cleanPrev_rn0kss_k$();
            continue $l$loop_0;
          case 3:
            var message_0 = 'unexpected';
            throw IllegalStateException_init_$Create$(toString(message_0));
        }
      }
    }
    return cancellable.getResult_fck196_k$();
  };
  protoOf(BufferedChannel).trySendDropOldest_sx2u86_k$ = function (element) {
    var tmp4 = get_BUFFERED();
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
      var segment = this.sendSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$();
      $l$loop_0: while (true) {
        var sendersAndCloseStatusCur = this.sendersAndCloseStatus_1.atomicfu$getAndIncrement$long();
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var s = sendersAndCloseStatusCur.and_4spn93_k$(new Long(-1, 268435455));
        var closed = _get_isClosedForSend0__kxgf9m(this, sendersAndCloseStatusCur);
        // Inline function 'kotlin.Long.div' call
        var other = get_SEGMENT_SIZE();
        var id = s.div_jun7gj_k$(toLong(other));
        // Inline function 'kotlin.Long.rem' call
        var other_0 = get_SEGMENT_SIZE();
        var i = s.rem_bsnl9o_k$(toLong(other_0)).toInt_1tsl84_k$();
        if (!segment.get_id_kntnx8_k$().equals(id)) {
          var tmp0_elvis_lhs = findSegmentSend(this, id, segment);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            var tmp_0;
            if (closed) {
              return Companion_getInstance_0().closed_xuwu5z_k$(this.get_sendException_qpq1ry_k$());
            } else {
              continue $l$loop_0;
            }
          } else {
            tmp = tmp0_elvis_lhs;
          }
          segment = tmp;
        }
        switch (updateCellSend(this, segment, i, element, s, tmp4, closed)) {
          case 0:
            segment.cleanPrev_rn0kss_k$();
            return Companion_getInstance_0().success_tizbw6_k$(Unit_getInstance());
          case 1:
            return Companion_getInstance_0().success_tizbw6_k$(Unit_getInstance());
          case 2:
            if (closed) {
              segment.onSlotCleaned_do6lqz_k$();
              return Companion_getInstance_0().closed_xuwu5z_k$(this.get_sendException_qpq1ry_k$());
            }

            var tmp2_safe_receiver = (!(tmp4 == null) ? isInterface(tmp4, Waiter) : false) ? tmp4 : null;
            if (tmp2_safe_receiver == null)
              null;
            else {
              prepareSenderForSuspension(this, tmp2_safe_receiver, segment, i);
            }

            var tmp0 = segment.get_id_kntnx8_k$();
            // Inline function 'kotlin.Long.times' call

            var other_1 = get_SEGMENT_SIZE();
            // Inline function 'kotlin.Long.plus' call

            var tmp$ret$5 = tmp0.times_nfzjiw_k$(toLong(other_1)).plus_r93sks_k$(toLong(i));
            this.dropFirstElementUntilTheSpecifiedCellIsInTheBuffer_gc2gkg_k$(tmp$ret$5);
            return Companion_getInstance_0().success_tizbw6_k$(Unit_getInstance());
          case 4:
            if (s.compareTo_9jj042_k$(this.get_receiversCounter_ne8ics_k$()) < 0) {
              segment.cleanPrev_rn0kss_k$();
            }

            return Companion_getInstance_0().closed_xuwu5z_k$(this.get_sendException_qpq1ry_k$());
          case 5:
            segment.cleanPrev_rn0kss_k$();
            continue $l$loop_0;
          case 3:
            var message = 'unexpected';
            throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    return tmp$ret$3;
  };
  protoOf(BufferedChannel).shouldSendSuspend_mnochg_k$ = function () {
    return shouldSendSuspend0(this, this.sendersAndCloseStatus_1.get_kotlinx$atomicfu$value_vi2am5_k$());
  };
  protoOf(BufferedChannel).onReceiveEnqueued_xthhlc_k$ = function () {
  };
  protoOf(BufferedChannel).onReceiveDequeued_4w5qpk_k$ = function () {
  };
  protoOf(BufferedChannel).receive_awoumx_k$ = function ($completion) {
    var tmp = new $receiveCOROUTINE$(this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BufferedChannel).receiveCatching_golgg7_k$ = function ($completion) {
    var tmp = new $receiveCatchingCOROUTINE$(this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    var tmp_0 = tmp.doResume_5yljmg_k$();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(BufferedChannel).tryReceive_y3ovg2_k$ = function () {
    var r = this.receivers_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    var sendersAndCloseStatusCur = this.sendersAndCloseStatus_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    if (_get_isClosedForReceive0__f7qknl(this, sendersAndCloseStatusCur)) {
      return Companion_getInstance_0().closed_xuwu5z_k$(this.get_closeCause_gbqkm2_k$());
    }
    // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
    var s = sendersAndCloseStatusCur.and_4spn93_k$(new Long(-1, 268435455));
    if (r.compareTo_9jj042_k$(s) >= 0)
      return Companion_getInstance_0().failure_q0nifh_k$();
    var tmp2 = get_INTERRUPTED_RCV();
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl' call
      var segment = this.receiveSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$();
      $l$loop_0: while (true) {
        if (this.get_isClosedForReceive_v0r77d_k$()) {
          tmp$ret$2 = Companion_getInstance_0().closed_xuwu5z_k$(this.get_closeCause_gbqkm2_k$());
          break $l$block_0;
        }
        var r_0 = this.receivers_1.atomicfu$getAndIncrement$long();
        // Inline function 'kotlin.Long.div' call
        var other = get_SEGMENT_SIZE();
        var id = r_0.div_jun7gj_k$(toLong(other));
        // Inline function 'kotlin.Long.rem' call
        var other_0 = get_SEGMENT_SIZE();
        var i = r_0.rem_bsnl9o_k$(toLong(other_0)).toInt_1tsl84_k$();
        if (!segment.get_id_kntnx8_k$().equals(id)) {
          var tmp0_elvis_lhs = findSegmentReceive(this, id, segment);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            continue $l$loop_0;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          segment = tmp;
        }
        var updCellResult = updateCellReceive(this, segment, i, r_0, tmp2);
        var tmp_0;
        if (updCellResult === get_SUSPEND()) {
          var tmp1_safe_receiver = (!(tmp2 == null) ? isInterface(tmp2, Waiter) : false) ? tmp2 : null;
          if (tmp1_safe_receiver == null)
            null;
          else {
            prepareReceiverForSuspension(this, tmp1_safe_receiver, segment, i);
          }
          var segm = segment;
          this.waitExpandBufferCompletion_78swxo_k$(r_0);
          segm.onSlotCleaned_do6lqz_k$();
          tmp_0 = new ChannelResult(Companion_getInstance_0().failure_q0nifh_k$());
        } else if (updCellResult === get_FAILED()) {
          if (r_0.compareTo_9jj042_k$(this.get_sendersCounter_mvbt0m_k$()) < 0) {
            segment.cleanPrev_rn0kss_k$();
          }
          continue $l$loop_0;
        } else if (updCellResult === get_SUSPEND_NO_WAITER()) {
          var message = 'unexpected';
          throw IllegalStateException_init_$Create$(toString(message));
        } else {
          segment.cleanPrev_rn0kss_k$();
          var element = (updCellResult == null ? true : !(updCellResult == null)) ? updCellResult : THROW_CCE();
          tmp_0 = new ChannelResult(Companion_getInstance_0().success_tizbw6_k$(element));
        }
        tmp$ret$2 = tmp_0.holder_1;
        break $l$block_0;
      }
    }
    return tmp$ret$2;
  };
  protoOf(BufferedChannel).dropFirstElementUntilTheSpecifiedCellIsInTheBuffer_gc2gkg_k$ = function (globalCellIndex) {
    // Inline function 'kotlinx.coroutines.assert' call
    var segment = this.receiveSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    $l$loop_0: while (true) {
      var r = this.receivers_1.get_kotlinx$atomicfu$value_vi2am5_k$();
      // Inline function 'kotlin.Long.plus' call
      var other = this.capacity_1;
      var tmp0 = r.plus_r93sks_k$(toLong(other));
      // Inline function 'kotlin.math.max' call
      var b = _get_bufferEndCounter__2d4hee(this);
      var tmp$ret$2 = tmp0.compareTo_9jj042_k$(b) >= 0 ? tmp0 : b;
      if (globalCellIndex.compareTo_9jj042_k$(tmp$ret$2) < 0)
        return Unit_getInstance();
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$3 = r.plus_r93sks_k$(toLong(1));
      if (!this.receivers_1.atomicfu$compareAndSet(r, tmp$ret$3))
        continue $l$loop_0;
      // Inline function 'kotlin.Long.div' call
      var other_0 = get_SEGMENT_SIZE();
      var id = r.div_jun7gj_k$(toLong(other_0));
      // Inline function 'kotlin.Long.rem' call
      var other_1 = get_SEGMENT_SIZE();
      var i = r.rem_bsnl9o_k$(toLong(other_1)).toInt_1tsl84_k$();
      if (!segment.get_id_kntnx8_k$().equals(id)) {
        var tmp0_elvis_lhs = findSegmentReceive(this, id, segment);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          continue $l$loop_0;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        segment = tmp;
      }
      var updCellResult = updateCellReceive(this, segment, i, r, null);
      if (updCellResult === get_FAILED()) {
        if (r.compareTo_9jj042_k$(this.get_sendersCounter_mvbt0m_k$()) < 0) {
          segment.cleanPrev_rn0kss_k$();
        }
      } else {
        segment.cleanPrev_rn0kss_k$();
        var tmp1_safe_receiver = this.onUndeliveredElement_1;
        var tmp_0;
        if (tmp1_safe_receiver == null) {
          tmp_0 = null;
        } else {
          tmp_0 = callUndeliveredElementCatchingException(tmp1_safe_receiver, (updCellResult == null ? true : !(updCellResult == null)) ? updCellResult : THROW_CCE());
        }
        var tmp2_safe_receiver = tmp_0;
        if (tmp2_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          throw tmp2_safe_receiver;
        }
      }
    }
  };
  protoOf(BufferedChannel).waitExpandBufferCompletion_78swxo_k$ = function (globalIndex) {
    if (_get_isRendezvousOrUnlimited__3mdufi(this))
      return Unit_getInstance();
    while (_get_bufferEndCounter__2d4hee(this).compareTo_9jj042_k$(globalIndex) <= 0) {
    }
    // Inline function 'kotlin.repeat' call
    var times = get_EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS();
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var b = _get_bufferEndCounter__2d4hee(this);
        // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
        var ebCompleted = this.completedExpandBuffersAndPauseFlag_1.get_kotlinx$atomicfu$value_vi2am5_k$().and_4spn93_k$(new Long(-1, 1073741823));
        if (b.equals(ebCompleted) && b.equals(_get_bufferEndCounter__2d4hee(this)))
          return Unit_getInstance();
      }
       while (inductionVariable < times);
    var tmp0 = this.completedExpandBuffersAndPauseFlag_1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp0.get_kotlinx$atomicfu$value_vi2am5_k$();
        // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
        var tmp$ret$3 = cur.and_4spn93_k$(new Long(-1, 1073741823));
        var upd = constructEBCompletedAndPauseFlag(tmp$ret$3, true);
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          break $l$block;
        }
      }
    }
    while (true) {
      var b_0 = _get_bufferEndCounter__2d4hee(this);
      var ebCompletedAndBit = this.completedExpandBuffersAndPauseFlag_1.get_kotlinx$atomicfu$value_vi2am5_k$();
      // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
      var ebCompleted_0 = ebCompletedAndBit.and_4spn93_k$(new Long(-1, 1073741823));
      // Inline function 'kotlinx.coroutines.channels.ebPauseExpandBuffers' call
      var pauseExpandBuffers = !ebCompletedAndBit.and_4spn93_k$(new Long(0, 1073741824)).equals(new Long(0, 0));
      if (b_0.equals(ebCompleted_0) && b_0.equals(_get_bufferEndCounter__2d4hee(this))) {
        var tmp0_0 = this.completedExpandBuffersAndPauseFlag_1;
        $l$block_0: {
          // Inline function 'kotlinx.atomicfu.update' call
          while (true) {
            var cur_0 = tmp0_0.get_kotlinx$atomicfu$value_vi2am5_k$();
            // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
            var tmp$ret$8 = cur_0.and_4spn93_k$(new Long(-1, 1073741823));
            var upd_0 = constructEBCompletedAndPauseFlag(tmp$ret$8, false);
            if (tmp0_0.atomicfu$compareAndSet(cur_0, upd_0)) {
              break $l$block_0;
            }
          }
        }
        return Unit_getInstance();
      }
      if (!pauseExpandBuffers) {
        this.completedExpandBuffersAndPauseFlag_1.atomicfu$compareAndSet(ebCompletedAndBit, constructEBCompletedAndPauseFlag(ebCompleted_0, true));
      }
    }
  };
  protoOf(BufferedChannel).get_onSend_hnoo40_k$ = function () {
    var tmp = BufferedChannel$registerSelectForSend$ref();
    var tmp_0 = typeof tmp === 'function' ? tmp : THROW_CCE();
    var tmp_1 = BufferedChannel$processResultSelectSend$ref();
    return new SelectClause2Impl(this, tmp_0, typeof tmp_1 === 'function' ? tmp_1 : THROW_CCE());
  };
  protoOf(BufferedChannel).registerSelectForSend_39wkg4_k$ = function (select, element) {
    var tmp2 = (element == null ? true : !(element == null)) ? element : THROW_CCE();
    var tmp$ret$4;
    $l$block_5: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
      var segment = this.sendSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$();
      $l$loop_0: while (true) {
        var sendersAndCloseStatusCur = this.sendersAndCloseStatus_1.atomicfu$getAndIncrement$long();
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var s = sendersAndCloseStatusCur.and_4spn93_k$(new Long(-1, 268435455));
        var closed = _get_isClosedForSend0__kxgf9m(this, sendersAndCloseStatusCur);
        // Inline function 'kotlin.Long.div' call
        var other = get_SEGMENT_SIZE();
        var id = s.div_jun7gj_k$(toLong(other));
        // Inline function 'kotlin.Long.rem' call
        var other_0 = get_SEGMENT_SIZE();
        var i = s.rem_bsnl9o_k$(toLong(other_0)).toInt_1tsl84_k$();
        if (!segment.get_id_kntnx8_k$().equals(id)) {
          var tmp0_elvis_lhs = findSegmentSend(this, id, segment);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            var tmp_0;
            if (closed) {
              onClosedSelectOnSend(this, element, select);
              tmp$ret$4 = Unit_getInstance();
              break $l$block_5;
            } else {
              continue $l$loop_0;
            }
          } else {
            tmp = tmp0_elvis_lhs;
          }
          segment = tmp;
        }
        switch (updateCellSend(this, segment, i, tmp2, s, select, closed)) {
          case 0:
            segment.cleanPrev_rn0kss_k$();
            select.selectInRegistrationPhase_ldg7ua_k$(Unit_getInstance());
            tmp$ret$4 = Unit_getInstance();
            break $l$block_5;
          case 1:
            select.selectInRegistrationPhase_ldg7ua_k$(Unit_getInstance());
            tmp$ret$4 = Unit_getInstance();
            break $l$block_5;
          case 2:
            if (closed) {
              segment.onSlotCleaned_do6lqz_k$();
              onClosedSelectOnSend(this, element, select);
              tmp$ret$4 = Unit_getInstance();
              break $l$block_5;
            }

            var tmp2_safe_receiver = (!(select == null) ? isInterface(select, Waiter) : false) ? select : null;
            if (tmp2_safe_receiver == null)
              null;
            else {
              prepareSenderForSuspension(this, tmp2_safe_receiver, segment, i);
            }

            tmp$ret$4 = Unit_getInstance();
            break $l$block_5;
          case 4:
            if (s.compareTo_9jj042_k$(this.get_receiversCounter_ne8ics_k$()) < 0) {
              segment.cleanPrev_rn0kss_k$();
            }

            onClosedSelectOnSend(this, element, select);
            tmp$ret$4 = Unit_getInstance();
            break $l$block_5;
          case 5:
            segment.cleanPrev_rn0kss_k$();
            continue $l$loop_0;
          case 3:
            var message = 'unexpected';
            throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    return tmp$ret$4;
  };
  protoOf(BufferedChannel).get_onReceive_mimw11_k$ = function () {
    var tmp = BufferedChannel$registerSelectForReceive$ref();
    var tmp_0 = typeof tmp === 'function' ? tmp : THROW_CCE();
    var tmp_1 = BufferedChannel$processResultSelectReceive$ref();
    return new SelectClause1Impl(this, tmp_0, typeof tmp_1 === 'function' ? tmp_1 : THROW_CCE(), this.onUndeliveredElementReceiveCancellationConstructor_1);
  };
  protoOf(BufferedChannel).get_onReceiveCatching_ajg9xa_k$ = function () {
    var tmp = BufferedChannel$registerSelectForReceive$ref_0();
    var tmp_0 = typeof tmp === 'function' ? tmp : THROW_CCE();
    var tmp_1 = BufferedChannel$processResultSelectReceiveCatching$ref();
    return new SelectClause1Impl(this, tmp_0, typeof tmp_1 === 'function' ? tmp_1 : THROW_CCE(), this.onUndeliveredElementReceiveCancellationConstructor_1);
  };
  protoOf(BufferedChannel).get_onReceiveOrNull_5u62it_k$ = function () {
    var tmp = BufferedChannel$registerSelectForReceive$ref_1();
    var tmp_0 = typeof tmp === 'function' ? tmp : THROW_CCE();
    var tmp_1 = BufferedChannel$processResultSelectReceiveOrNull$ref();
    return new SelectClause1Impl(this, tmp_0, typeof tmp_1 === 'function' ? tmp_1 : THROW_CCE(), this.onUndeliveredElementReceiveCancellationConstructor_1);
  };
  protoOf(BufferedChannel).iterator_jk1svi_k$ = function () {
    return new BufferedChannelIterator(this);
  };
  protoOf(BufferedChannel).get_closeCause_gbqkm2_k$ = function () {
    var tmp = this._closeCause_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    return (tmp == null ? true : tmp instanceof Error) ? tmp : THROW_CCE();
  };
  protoOf(BufferedChannel).get_sendException_qpq1ry_k$ = function () {
    var tmp0_elvis_lhs = this.get_closeCause_gbqkm2_k$();
    return tmp0_elvis_lhs == null ? new ClosedSendChannelException('Channel was closed') : tmp0_elvis_lhs;
  };
  protoOf(BufferedChannel).onClosedIdempotent_yws25w_k$ = function () {
  };
  protoOf(BufferedChannel).close_ukldxa_k$ = function (cause) {
    return this.closeOrCancelImpl_46q3uk_k$(cause, false);
  };
  protoOf(BufferedChannel).cancel_e74who_k$ = function (cause) {
    return this.cancelImpl_1ciz43_k$(cause);
  };
  protoOf(BufferedChannel).cancel_2l89ey_k$ = function () {
    this.cancelImpl_1ciz43_k$(null);
  };
  protoOf(BufferedChannel).cancel_hkmm2i_k$ = function (cause) {
    this.cancelImpl_1ciz43_k$(cause);
  };
  protoOf(BufferedChannel).cancelImpl_1ciz43_k$ = function (cause) {
    return this.closeOrCancelImpl_46q3uk_k$(cause == null ? CancellationException_init_$Create$('Channel was cancelled') : cause, true);
  };
  protoOf(BufferedChannel).closeOrCancelImpl_46q3uk_k$ = function (cause, cancel) {
    if (cancel) {
      markCancellationStarted(this);
    }
    var closedByThisOperation = this._closeCause_1.atomicfu$compareAndSet(get_NO_CLOSE_CAUSE(), cause);
    if (cancel) {
      markCancelled(this);
    } else {
      markClosed(this);
    }
    completeCloseOrCancel(this);
    // Inline function 'kotlin.also' call
    this.onClosedIdempotent_yws25w_k$();
    if (closedByThisOperation) {
      invokeCloseHandler(this);
    }
    return closedByThisOperation;
  };
  protoOf(BufferedChannel).invokeOnClose_xlde4o_k$ = function (handler) {
    if (this.closeHandler_1.atomicfu$compareAndSet(null, handler)) {
      return Unit_getInstance();
    }
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.closeHandler_1;
    while (true) {
      var cur = this_0.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (cur === get_CLOSE_HANDLER_CLOSED()) {
        if (this.closeHandler_1.atomicfu$compareAndSet(get_CLOSE_HANDLER_CLOSED(), get_CLOSE_HANDLER_INVOKED())) {
          handler(this.get_closeCause_gbqkm2_k$());
          return Unit_getInstance();
        }
      } else if (cur === get_CLOSE_HANDLER_INVOKED()) {
        // Inline function 'kotlin.error' call
        var message = 'Another handler was already registered and successfully invoked';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        // Inline function 'kotlin.error' call
        var message_0 = 'Another handler is already registered: ' + toString_0(cur);
        throw IllegalStateException_init_$Create$(toString(message_0));
      }
    }
  };
  protoOf(BufferedChannel).get_isConflatedDropOldest_qp2q39_k$ = function () {
    return false;
  };
  protoOf(BufferedChannel).get_isClosedForSend_ajczci_k$ = function () {
    return _get_isClosedForSend0__kxgf9m(this, this.sendersAndCloseStatus_1.get_kotlinx$atomicfu$value_vi2am5_k$());
  };
  protoOf(BufferedChannel).get_isClosedForReceive_v0r77d_k$ = function () {
    return _get_isClosedForReceive0__f7qknl(this, this.sendersAndCloseStatus_1.get_kotlinx$atomicfu$value_vi2am5_k$());
  };
  protoOf(BufferedChannel).get_isEmpty_zauvru_k$ = function () {
    if (this.get_isClosedForReceive_v0r77d_k$())
      return false;
    if (this.hasElements_2busqs_k$())
      return false;
    return !this.get_isClosedForReceive_v0r77d_k$();
  };
  protoOf(BufferedChannel).hasElements_2busqs_k$ = function () {
    $l$loop: while (true) {
      var segment = this.receiveSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$();
      var r = this.get_receiversCounter_ne8ics_k$();
      var s = this.get_sendersCounter_mvbt0m_k$();
      if (s.compareTo_9jj042_k$(r) <= 0)
        return false;
      // Inline function 'kotlin.Long.div' call
      var other = get_SEGMENT_SIZE();
      var id = r.div_jun7gj_k$(toLong(other));
      if (!segment.get_id_kntnx8_k$().equals(id)) {
        var tmp0_elvis_lhs = findSegmentReceive(this, id, segment);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          var tmp_0;
          if (this.receiveSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$().get_id_kntnx8_k$().compareTo_9jj042_k$(id) < 0) {
            return false;
          } else {
            continue $l$loop;
          }
        } else {
          tmp = tmp0_elvis_lhs;
        }
        segment = tmp;
      }
      segment.cleanPrev_rn0kss_k$();
      // Inline function 'kotlin.Long.rem' call
      var other_0 = get_SEGMENT_SIZE();
      var i = r.rem_bsnl9o_k$(toLong(other_0)).toInt_1tsl84_k$();
      if (isCellNonEmpty(this, segment, i, r))
        return true;
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$2 = r.plus_r93sks_k$(toLong(1));
      this.receivers_1.atomicfu$compareAndSet(r, tmp$ret$2);
    }
  };
  protoOf(BufferedChannel).toString = function () {
    var sb = StringBuilder_init_$Create$();
    // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
    var tmp0_subject = this.sendersAndCloseStatus_1.get_kotlinx$atomicfu$value_vi2am5_k$().shr_9fl3wl_k$(60).toInt_1tsl84_k$();
    if (tmp0_subject === 2) {
      sb.append_22ad7x_k$('closed,');
    } else if (tmp0_subject === 3) {
      sb.append_22ad7x_k$('cancelled,');
    }
    sb.append_22ad7x_k$('capacity=' + this.capacity_1 + ',');
    sb.append_22ad7x_k$('data=[');
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = listOf([this.receiveSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$(), this.sendSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$(), this.bufferEndSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$()]);
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      if (!(element === get_NULL_SEGMENT())) {
        destination.add_utx5q5_k$(element);
      }
    }
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlin.collections.minBy' call
      var iterator = destination.iterator_jk1svi_k$();
      if (!iterator.hasNext_bitz1p_k$())
        throw NoSuchElementException_init_$Create$();
      var minElem = iterator.next_20eer_k$();
      if (!iterator.hasNext_bitz1p_k$()) {
        tmp$ret$4 = minElem;
        break $l$block;
      }
      var minValue = minElem.get_id_kntnx8_k$();
      do {
        var e = iterator.next_20eer_k$();
        var v = e.get_id_kntnx8_k$();
        if (compareTo(minValue, v) > 0) {
          minElem = e;
          minValue = v;
        }
      }
       while (iterator.hasNext_bitz1p_k$());
      tmp$ret$4 = minElem;
    }
    var firstSegment = tmp$ret$4;
    var r = this.get_receiversCounter_ne8ics_k$();
    var s = this.get_sendersCounter_mvbt0m_k$();
    var segment = firstSegment;
    append_elements: while (true) {
      var inductionVariable = 0;
      var last_0 = get_SEGMENT_SIZE();
      if (inductionVariable < last_0)
        process_cell: do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp0_0 = segment.get_id_kntnx8_k$();
          // Inline function 'kotlin.Long.times' call
          var other = get_SEGMENT_SIZE();
          // Inline function 'kotlin.Long.plus' call
          var globalCellIndex = tmp0_0.times_nfzjiw_k$(toLong(other)).plus_r93sks_k$(toLong(i));
          if (globalCellIndex.compareTo_9jj042_k$(s) >= 0 && globalCellIndex.compareTo_9jj042_k$(r) >= 0)
            break append_elements;
          var cellState = segment.getState_jak5mi_k$(i);
          var element_0 = segment.getElement_ye1phr_k$(i);
          var tmp;
          if (!(cellState == null) ? isInterface(cellState, CancellableContinuation) : false) {
            tmp = globalCellIndex.compareTo_9jj042_k$(r) < 0 && globalCellIndex.compareTo_9jj042_k$(s) >= 0 ? 'receive' : globalCellIndex.compareTo_9jj042_k$(s) < 0 && globalCellIndex.compareTo_9jj042_k$(r) >= 0 ? 'send' : 'cont';
          } else {
            if (!(cellState == null) ? isInterface(cellState, SelectInstance) : false) {
              tmp = globalCellIndex.compareTo_9jj042_k$(r) < 0 && globalCellIndex.compareTo_9jj042_k$(s) >= 0 ? 'onReceive' : globalCellIndex.compareTo_9jj042_k$(s) < 0 && globalCellIndex.compareTo_9jj042_k$(r) >= 0 ? 'onSend' : 'select';
            } else {
              if (cellState instanceof ReceiveCatching) {
                tmp = 'receiveCatching';
              } else {
                if (cellState instanceof SendBroadcast) {
                  tmp = 'sendBroadcast';
                } else {
                  if (cellState instanceof WaiterEB) {
                    tmp = 'EB(' + toString_0(cellState) + ')';
                  } else {
                    if (equals(cellState, get_RESUMING_BY_RCV()) ? true : equals(cellState, get_RESUMING_BY_EB())) {
                      tmp = 'resuming_sender';
                    } else {
                      if ((((((cellState == null ? true : equals(cellState, get_IN_BUFFER())) ? true : equals(cellState, get_DONE_RCV())) ? true : equals(cellState, get_POISONED())) ? true : equals(cellState, get_INTERRUPTED_RCV())) ? true : equals(cellState, get_INTERRUPTED_SEND())) ? true : equals(cellState, get_CHANNEL_CLOSED())) {
                        continue process_cell;
                      } else {
                        tmp = toString(cellState);
                      }
                    }
                  }
                }
              }
            }
          }
          var cellStateString = tmp;
          if (!(element_0 == null)) {
            sb.append_22ad7x_k$('(' + cellStateString + ',' + toString_0(element_0) + '),');
          } else {
            sb.append_22ad7x_k$(cellStateString + ',');
          }
        }
         while (inductionVariable < last_0);
      var tmp3_elvis_lhs = segment.get_next_wor1vg_k$();
      var tmp_0;
      if (tmp3_elvis_lhs == null) {
        break append_elements;
      } else {
        tmp_0 = tmp3_elvis_lhs;
      }
      segment = tmp_0;
    }
    if (last(sb) === _Char___init__impl__6a9atx(44)) {
      sb.deleteAt_mq1vvq_k$(sb.get_length_g42xv3_k$() - 1 | 0);
    }
    sb.append_22ad7x_k$(']');
    return sb.toString();
  };
  protoOf(BufferedChannel).toStringDebug_ftu17q_k$ = function () {
    var sb = StringBuilder_init_$Create$();
    var tmp = this.get_sendersCounter_mvbt0m_k$().toString();
    var tmp_0 = this.get_receiversCounter_ne8ics_k$().toString();
    var tmp_1 = _get_bufferEndCounter__2d4hee(this).toString();
    var tmp_2 = this.completedExpandBuffersAndPauseFlag_1.get_kotlinx$atomicfu$value_vi2am5_k$().toString();
    // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
    var tmp$ret$0 = this.sendersAndCloseStatus_1.get_kotlinx$atomicfu$value_vi2am5_k$().shr_9fl3wl_k$(60).toInt_1tsl84_k$();
    sb.append_22ad7x_k$('S=' + tmp + ',R=' + tmp_0 + ',B=' + tmp_1 + ",B'=" + tmp_2 + ',C=' + tmp$ret$0 + ',');
    // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
    switch (this.sendersAndCloseStatus_1.get_kotlinx$atomicfu$value_vi2am5_k$().shr_9fl3wl_k$(60).toInt_1tsl84_k$()) {
      case 1:
        sb.append_22ad7x_k$('CANCELLATION_STARTED,');
        break;
      case 2:
        sb.append_22ad7x_k$('CLOSED,');
        break;
      case 3:
        sb.append_22ad7x_k$('CANCELLED,');
        break;
    }
    sb.append_22ad7x_k$('SEND_SEGM=' + get_hexAddress(this.sendSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$()) + ',RCV_SEGM=' + get_hexAddress(this.receiveSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$()));
    if (!_get_isRendezvousOrUnlimited__3mdufi(this)) {
      sb.append_22ad7x_k$(',EB_SEGM=' + get_hexAddress(this.bufferEndSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$()));
    }
    sb.append_22ad7x_k$('  ');
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = listOf([this.receiveSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$(), this.sendSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$(), this.bufferEndSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$()]);
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      if (!(element === get_NULL_SEGMENT())) {
        destination.add_utx5q5_k$(element);
      }
    }
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlin.collections.minBy' call
      var iterator = destination.iterator_jk1svi_k$();
      if (!iterator.hasNext_bitz1p_k$())
        throw NoSuchElementException_init_$Create$();
      var minElem = iterator.next_20eer_k$();
      if (!iterator.hasNext_bitz1p_k$()) {
        tmp$ret$5 = minElem;
        break $l$block;
      }
      var minValue = minElem.get_id_kntnx8_k$();
      do {
        var e = iterator.next_20eer_k$();
        var v = e.get_id_kntnx8_k$();
        if (compareTo(minValue, v) > 0) {
          minElem = e;
          minValue = v;
        }
      }
       while (iterator.hasNext_bitz1p_k$());
      tmp$ret$5 = minElem;
    }
    var firstSegment = tmp$ret$5;
    var segment = firstSegment;
    $l$loop: while (true) {
      var tmp_3 = get_hexAddress(segment);
      var tmp_4 = segment.get_isRemoved_gzdz59_k$() ? '*' : '';
      var tmp_5 = segment.get_id_kntnx8_k$().toString();
      var tmp1_safe_receiver = segment.get_prev_wosl18_k$();
      sb.append_22ad7x_k$(tmp_3 + '=[' + tmp_4 + tmp_5 + ',prev=' + (tmp1_safe_receiver == null ? null : get_hexAddress(tmp1_safe_receiver)) + ',');
      // Inline function 'kotlin.repeat' call
      var times = get_SEGMENT_SIZE();
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var cellState = segment.getState_jak5mi_k$(index);
          var element_0 = segment.getElement_ye1phr_k$(index);
          var tmp_6;
          if (!(cellState == null) ? isInterface(cellState, CancellableContinuation) : false) {
            tmp_6 = 'cont';
          } else {
            if (!(cellState == null) ? isInterface(cellState, SelectInstance) : false) {
              tmp_6 = 'select';
            } else {
              if (cellState instanceof ReceiveCatching) {
                tmp_6 = 'receiveCatching';
              } else {
                if (cellState instanceof SendBroadcast) {
                  tmp_6 = 'send(broadcast)';
                } else {
                  if (cellState instanceof WaiterEB) {
                    tmp_6 = 'EB(' + toString_0(cellState) + ')';
                  } else {
                    tmp_6 = toString_0(cellState);
                  }
                }
              }
            }
          }
          var cellStateString = tmp_6;
          sb.append_22ad7x_k$('[' + index + ']=(' + cellStateString + ',' + toString_0(element_0) + '),');
        }
         while (inductionVariable < times);
      var tmp2_safe_receiver = segment.get_next_wor1vg_k$();
      sb.append_22ad7x_k$('next=' + (tmp2_safe_receiver == null ? null : get_hexAddress(tmp2_safe_receiver)) + ']  ');
      var tmp3_elvis_lhs = segment.get_next_wor1vg_k$();
      var tmp_7;
      if (tmp3_elvis_lhs == null) {
        break $l$loop;
      } else {
        tmp_7 = tmp3_elvis_lhs;
      }
      segment = tmp_7;
    }
    return sb.toString();
  };
  protoOf(BufferedChannel).checkSegmentStructureInvariants_c6tk8b_k$ = function () {
    if (_get_isRendezvousOrUnlimited__3mdufi(this)) {
      // Inline function 'kotlin.check' call
      if (!(this.bufferEndSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$() === get_NULL_SEGMENT())) {
        var message = 'bufferEndSegment must be NULL_SEGMENT for rendezvous and unlimited channels; they do not manipulate it.\n' + ('Channel state: ' + this.toString());
        throw IllegalStateException_init_$Create$(toString(message));
      }
    } else {
      // Inline function 'kotlin.check' call
      if (!(this.receiveSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$().get_id_kntnx8_k$().compareTo_9jj042_k$(this.bufferEndSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$().get_id_kntnx8_k$()) <= 0)) {
        var message_0 = 'bufferEndSegment should not have lower id than receiveSegment.\n' + ('Channel state: ' + this.toString());
        throw IllegalStateException_init_$Create$(toString(message_0));
      }
    }
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = listOf([this.receiveSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$(), this.sendSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$(), this.bufferEndSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$()]);
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      if (!(element === get_NULL_SEGMENT())) {
        destination.add_utx5q5_k$(element);
      }
    }
    var tmp$ret$7;
    $l$block: {
      // Inline function 'kotlin.collections.minBy' call
      var iterator = destination.iterator_jk1svi_k$();
      if (!iterator.hasNext_bitz1p_k$())
        throw NoSuchElementException_init_$Create$();
      var minElem = iterator.next_20eer_k$();
      if (!iterator.hasNext_bitz1p_k$()) {
        tmp$ret$7 = minElem;
        break $l$block;
      }
      var minValue = minElem.get_id_kntnx8_k$();
      do {
        var e = iterator.next_20eer_k$();
        var v = e.get_id_kntnx8_k$();
        if (compareTo(minValue, v) > 0) {
          minElem = e;
          minValue = v;
        }
      }
       while (iterator.hasNext_bitz1p_k$());
      tmp$ret$7 = minElem;
    }
    var firstSegment = tmp$ret$7;
    // Inline function 'kotlin.check' call
    if (!(firstSegment.get_prev_wosl18_k$() == null)) {
      var message_1 = 'All processed segments should be unreachable from the data structure, but the `prev` link of the leftmost segment is non-null.\n' + ('Channel state: ' + this.toString());
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
    var segment = firstSegment;
    while (!(segment.get_next_wor1vg_k$() == null)) {
      // Inline function 'kotlin.check' call
      if (!(ensureNotNull(segment.get_next_wor1vg_k$()).get_prev_wosl18_k$() == null || ensureNotNull(segment.get_next_wor1vg_k$()).get_prev_wosl18_k$() === segment)) {
        var message_2 = 'The `segment.next.prev === segment` invariant is violated.\n' + ('Channel state: ' + this.toString());
        throw IllegalStateException_init_$Create$(toString(message_2));
      }
      var interruptedOrClosedCells = 0;
      var inductionVariable = 0;
      var last = get_SEGMENT_SIZE();
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var state = segment.getState_jak5mi_k$(i);
          if (!equals(state, get_BUFFERED())) {
            if (!(!(state == null) ? isInterface(state, Waiter) : false)) {
              if ((equals(state, get_INTERRUPTED_RCV()) ? true : equals(state, get_INTERRUPTED_SEND())) ? true : equals(state, get_CHANNEL_CLOSED())) {
                // Inline function 'kotlin.check' call
                if (!(segment.getElement_ye1phr_k$(i) == null)) {
                  throw IllegalStateException_init_$Create$('Check failed.');
                }
                interruptedOrClosedCells = interruptedOrClosedCells + 1 | 0;
              } else {
                if (equals(state, get_POISONED()) ? true : equals(state, get_DONE_RCV())) {
                  // Inline function 'kotlin.check' call
                  if (!(segment.getElement_ye1phr_k$(i) == null)) {
                    throw IllegalStateException_init_$Create$('Check failed.');
                  }
                } else {
                  // Inline function 'kotlin.error' call
                  var message_3 = 'Unexpected segment cell state: ' + toString_0(state) + '.\nChannel state: ' + this.toString();
                  throw IllegalStateException_init_$Create$(toString(message_3));
                }
              }
            }
          }
        }
         while (inductionVariable < last);
      if (interruptedOrClosedCells === get_SEGMENT_SIZE()) {
        // Inline function 'kotlin.check' call
        if (!(segment === this.receiveSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$() || segment === this.sendSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$() || segment === this.bufferEndSegment_1.get_kotlinx$atomicfu$value_vi2am5_k$())) {
          var message_4 = 'Logically removed segment is reachable.\nChannel state: ' + this.toString();
          throw IllegalStateException_init_$Create$(toString(message_4));
        }
      }
      segment = ensureNotNull(segment.get_next_wor1vg_k$());
    }
  };
  function WaiterEB(waiter) {
    this.waiter_1 = waiter;
  }
  protoOf(WaiterEB).get_waiter_l9ao6j_k$ = function () {
    return this.waiter_1;
  };
  protoOf(WaiterEB).toString = function () {
    return 'WaiterEB(' + toString(this.waiter_1) + ')';
  };
  function initialBufferEnd(capacity) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    switch (capacity) {
      case 0:
        return new Long(0, 0);
      case 2147483647:
        return new Long(-1, 2147483647);
      default:
        return toLong(capacity);
    }
  }
  function get_sendersCounter(_this__u8e3s4) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return _this__u8e3s4.and_4spn93_k$(new Long(-1, 268435455));
  }
  function get_BUFFER_END_RENDEZVOUS() {
    return BUFFER_END_RENDEZVOUS;
  }
  var BUFFER_END_RENDEZVOUS;
  function get_BUFFER_END_UNLIMITED() {
    return BUFFER_END_UNLIMITED;
  }
  var BUFFER_END_UNLIMITED;
  function get_RESULT_RENDEZVOUS() {
    return RESULT_RENDEZVOUS;
  }
  var RESULT_RENDEZVOUS;
  function get_RESULT_BUFFERED() {
    return RESULT_BUFFERED;
  }
  var RESULT_BUFFERED;
  function get_RESULT_SUSPEND() {
    return RESULT_SUSPEND;
  }
  var RESULT_SUSPEND;
  function get_RESULT_CLOSED() {
    return RESULT_CLOSED;
  }
  var RESULT_CLOSED;
  function get_RESULT_FAILED() {
    return RESULT_FAILED;
  }
  var RESULT_FAILED;
  function get_RESULT_SUSPEND_NO_WAITER() {
    return RESULT_SUSPEND_NO_WAITER;
  }
  var RESULT_SUSPEND_NO_WAITER;
  function ReceiveCatching(cont) {
    this.cont_1 = cont;
  }
  protoOf(ReceiveCatching).get_cont_wok86z_k$ = function () {
    return this.cont_1;
  };
  protoOf(ReceiveCatching).invokeOnCancellation_9j58v1_k$ = function (segment, index) {
    this.cont_1.invokeOnCancellation_9j58v1_k$(segment, index);
  };
  function tryResume0(_this__u8e3s4, value, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    _init_properties_BufferedChannel_kt__d6uc4y();
    // Inline function 'kotlin.let' call
    var token = _this__u8e3s4.tryResume_2flfz_k$(value, null, onCancellation);
    var tmp;
    if (!(token == null)) {
      _this__u8e3s4.completeResume_fabtk_k$(token);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function get_ebPauseExpandBuffers(_this__u8e3s4) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return !_this__u8e3s4.and_4spn93_k$(new Long(0, 1073741824)).equals(new Long(0, 0));
  }
  function get_ebCompletedCounter(_this__u8e3s4) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return _this__u8e3s4.and_4spn93_k$(new Long(-1, 1073741823));
  }
  function constructEBCompletedAndPauseFlag(counter, pauseEB) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return (pauseEB ? new Long(0, 1073741824) : new Long(0, 0)).plus_r93sks_k$(counter);
  }
  function get_sendersCloseStatus(_this__u8e3s4) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return _this__u8e3s4.shr_9fl3wl_k$(60).toInt_1tsl84_k$();
  }
  function get_CLOSE_STATUS_ACTIVE() {
    return CLOSE_STATUS_ACTIVE;
  }
  var CLOSE_STATUS_ACTIVE;
  function constructSendersAndCloseStatus(counter, closeStatus) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return toLong(closeStatus).shl_bg8if3_k$(60).plus_r93sks_k$(counter);
  }
  function get_CLOSE_STATUS_CLOSED() {
    return CLOSE_STATUS_CLOSED;
  }
  var CLOSE_STATUS_CLOSED;
  function get_CLOSE_STATUS_CANCELLATION_STARTED() {
    return CLOSE_STATUS_CANCELLATION_STARTED;
  }
  var CLOSE_STATUS_CANCELLATION_STARTED;
  function get_CLOSE_STATUS_CANCELLED() {
    return CLOSE_STATUS_CANCELLED;
  }
  var CLOSE_STATUS_CANCELLED;
  function createSegmentFunction() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return createSegment$ref();
  }
  function get_SENDERS_COUNTER_MASK() {
    return SENDERS_COUNTER_MASK;
  }
  var SENDERS_COUNTER_MASK;
  function get_EB_COMPLETED_PAUSE_EXPAND_BUFFERS_BIT() {
    return EB_COMPLETED_PAUSE_EXPAND_BUFFERS_BIT;
  }
  var EB_COMPLETED_PAUSE_EXPAND_BUFFERS_BIT;
  function get_EB_COMPLETED_COUNTER_MASK() {
    return EB_COMPLETED_COUNTER_MASK;
  }
  var EB_COMPLETED_COUNTER_MASK;
  function get_SENDERS_CLOSE_STATUS_SHIFT() {
    return SENDERS_CLOSE_STATUS_SHIFT;
  }
  var SENDERS_CLOSE_STATUS_SHIFT;
  function createSegment(id, prev) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return new ChannelSegment(id, prev, prev.get_channel_dhi7tm_k$(), 0);
  }
  function createSegment$ref() {
    var l = function (p0, p1) {
      return createSegment(p0, p1);
    };
    l.callableName = 'createSegment';
    return l;
  }
  var properties_initialized_BufferedChannel_kt_58tjvw;
  function _init_properties_BufferedChannel_kt__d6uc4y() {
    if (!properties_initialized_BufferedChannel_kt_58tjvw) {
      properties_initialized_BufferedChannel_kt_58tjvw = true;
      NULL_SEGMENT = new ChannelSegment(new Long(-1, -1), null, null, 0);
      SEGMENT_SIZE = systemProp('kotlinx.coroutines.bufferedChannel.segmentSize', 32);
      EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS = systemProp('kotlinx.coroutines.bufferedChannel.expandBufferCompletionWaitIterations', 10000);
      BUFFERED = new Symbol('BUFFERED');
      IN_BUFFER = new Symbol('SHOULD_BUFFER');
      RESUMING_BY_RCV = new Symbol('S_RESUMING_BY_RCV');
      RESUMING_BY_EB = new Symbol('RESUMING_BY_EB');
      POISONED = new Symbol('POISONED');
      DONE_RCV = new Symbol('DONE_RCV');
      INTERRUPTED_SEND = new Symbol('INTERRUPTED_SEND');
      INTERRUPTED_RCV = new Symbol('INTERRUPTED_RCV');
      CHANNEL_CLOSED = new Symbol('CHANNEL_CLOSED');
      SUSPEND = new Symbol('SUSPEND');
      SUSPEND_NO_WAITER = new Symbol('SUSPEND_NO_WAITER');
      FAILED = new Symbol('FAILED');
      NO_RECEIVE_RESULT = new Symbol('NO_RECEIVE_RESULT');
      CLOSE_HANDLER_CLOSED = new Symbol('CLOSE_HANDLER_CLOSED');
      CLOSE_HANDLER_INVOKED = new Symbol('CLOSE_HANDLER_INVOKED');
      NO_CLOSE_CAUSE = new Symbol('NO_CLOSE_CAUSE');
    }
  }
  function Factory() {
    Factory_instance = this;
    this.UNLIMITED_1 = 2147483647;
    this.RENDEZVOUS_1 = 0;
    this.CONFLATED_1 = -1;
    this.BUFFERED_1 = -2;
    this.OPTIONAL_CHANNEL_1 = -3;
    this.DEFAULT_BUFFER_PROPERTY_NAME_1 = 'kotlinx.coroutines.channels.defaultBuffer';
    this.CHANNEL_DEFAULT_CAPACITY_1 = systemProp('kotlinx.coroutines.channels.defaultBuffer', 64, 1, 2147483646);
  }
  protoOf(Factory).get_UNLIMITED_eshsm0_k$ = function () {
    return this.UNLIMITED_1;
  };
  protoOf(Factory).get_RENDEZVOUS_7qhqgu_k$ = function () {
    return this.RENDEZVOUS_1;
  };
  protoOf(Factory).get_CONFLATED_tox14f_k$ = function () {
    return this.CONFLATED_1;
  };
  protoOf(Factory).get_BUFFERED_qzy754_k$ = function () {
    return this.BUFFERED_1;
  };
  protoOf(Factory).get_OPTIONAL_CHANNEL_ssto4g_k$ = function () {
    return this.OPTIONAL_CHANNEL_1;
  };
  protoOf(Factory).get_DEFAULT_BUFFER_PROPERTY_NAME_rafy59_k$ = function () {
    return this.DEFAULT_BUFFER_PROPERTY_NAME_1;
  };
  protoOf(Factory).get_CHANNEL_DEFAULT_CAPACITY_uuwk8g_k$ = function () {
    return this.CHANNEL_DEFAULT_CAPACITY_1;
  };
  var Factory_instance;
  function Factory_getInstance() {
    if (Factory_instance == null)
      new Factory();
    return Factory_instance;
  }
  function Channel() {
  }
  function _get_failed__jtpc32($this) {
    return $this.failed_1;
  }
  function _ChannelResult___init__impl__siwsuf(holder) {
    return holder;
  }
  function _ChannelResult___get_holder__impl__pm9gzw($this) {
    return $this;
  }
  function _ChannelResult___get_isSuccess__impl__odq1z9($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    return !(tmp instanceof Failed);
  }
  function _ChannelResult___get_isFailure__impl__nz6ehu($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    return tmp instanceof Failed;
  }
  function _ChannelResult___get_isClosed__impl__mg7kuu($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    return tmp instanceof Closed;
  }
  function ChannelResult__getOrNull_impl_f5e07h($this) {
    var tmp;
    var tmp_0 = _ChannelResult___get_holder__impl__pm9gzw($this);
    if (!(tmp_0 instanceof Failed)) {
      var tmp_1 = _ChannelResult___get_holder__impl__pm9gzw($this);
      tmp = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  }
  function ChannelResult__getOrThrow_impl_od1axs($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    if (!(tmp instanceof Failed)) {
      var tmp_0 = _ChannelResult___get_holder__impl__pm9gzw($this);
      return (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    }
    var tmp_1;
    var tmp_2 = _ChannelResult___get_holder__impl__pm9gzw($this);
    if (tmp_2 instanceof Closed) {
      tmp_1 = !(_ChannelResult___get_holder__impl__pm9gzw($this).cause_1 == null);
    } else {
      tmp_1 = false;
    }
    if (tmp_1)
      throw _ChannelResult___get_holder__impl__pm9gzw($this).cause_1;
    // Inline function 'kotlin.error' call
    var message = "Trying to call 'getOrThrow' on a failed channel result: " + toString_0(_ChannelResult___get_holder__impl__pm9gzw($this));
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function ChannelResult__exceptionOrNull_impl_16ei30($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    var tmp0_safe_receiver = tmp instanceof Closed ? tmp : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.cause_1;
  }
  function Failed() {
  }
  protoOf(Failed).toString = function () {
    return 'Failed';
  };
  function Closed(cause) {
    Failed.call(this);
    this.cause_1 = cause;
  }
  protoOf(Closed).get_cause_iplhs0_k$ = function () {
    return this.cause_1;
  };
  protoOf(Closed).equals = function (other) {
    var tmp;
    if (other instanceof Closed) {
      tmp = equals(this.cause_1, other.cause_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Closed).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.cause_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(Closed).toString = function () {
    return 'Closed(' + toString_0(this.cause_1) + ')';
  };
  function Companion() {
    Companion_instance = this;
    this.failed_1 = new Failed();
  }
  protoOf(Companion).success_tizbw6_k$ = function (value) {
    return _ChannelResult___init__impl__siwsuf(value);
  };
  protoOf(Companion).failure_q0nifh_k$ = function () {
    return _ChannelResult___init__impl__siwsuf(this.failed_1);
  };
  protoOf(Companion).closed_xuwu5z_k$ = function (cause) {
    return _ChannelResult___init__impl__siwsuf(new Closed(cause));
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function ChannelResult__toString_impl_rrcqu7($this) {
    var tmp;
    if (_ChannelResult___get_holder__impl__pm9gzw($this) instanceof Closed) {
      tmp = toString(_ChannelResult___get_holder__impl__pm9gzw($this));
    } else {
      tmp = 'Value(' + toString_0(_ChannelResult___get_holder__impl__pm9gzw($this)) + ')';
    }
    return tmp;
  }
  function ChannelResult__hashCode_impl_lilec2($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function ChannelResult__equals_impl_f471ri($this, other) {
    if (!(other instanceof ChannelResult))
      return false;
    var tmp0_other_with_cast = other instanceof ChannelResult ? other.holder_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function ChannelResult(holder) {
    Companion_getInstance_0();
    this.holder_1 = holder;
  }
  protoOf(ChannelResult).toString = function () {
    return ChannelResult__toString_impl_rrcqu7(this.holder_1);
  };
  protoOf(ChannelResult).hashCode = function () {
    return ChannelResult__hashCode_impl_lilec2(this.holder_1);
  };
  protoOf(ChannelResult).equals = function (other) {
    return ChannelResult__equals_impl_f471ri(this.holder_1, other);
  };
  function $next0COROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($next0COROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.hasNext_nhy1w3_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            if (!ARGUMENT) {
              throw new ClosedReceiveChannelException('Channel was closed');
            } else {
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            }

          case 2:
            return this._this__u8e3s4__1.next_20eer_k$();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function ChannelIterator() {
  }
  function ClosedSendChannelException(message) {
    IllegalStateException_init_$Init$(message, this);
    captureStack(this, ClosedSendChannelException);
  }
  function ClosedReceiveChannelException(message) {
    NoSuchElementException_init_$Init$(message, this);
    captureStack(this, ClosedReceiveChannelException);
  }
  function SendChannel() {
  }
  function $receiveOrNullCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($receiveOrNullCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.receiveCatching_golgg7_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 1:
            var unboxed = suspendResult.holder_1;
            suspendResult = new ChannelResult(unboxed);
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            var ARGUMENT = suspendResult.holder_1;
            return ChannelResult__getOrNull_impl_f5e07h(ARGUMENT);
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function ReceiveChannel() {
  }
  function Channel_0(capacity, onBufferOverflow, onUndeliveredElement) {
    capacity = capacity === VOID ? 0 : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    onUndeliveredElement = onUndeliveredElement === VOID ? null : onUndeliveredElement;
    var tmp;
    switch (capacity) {
      case 0:
        tmp = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? new BufferedChannel(0, onUndeliveredElement) : new ConflatedBufferedChannel(1, onBufferOverflow, onUndeliveredElement);
        break;
      case -1:
        // Inline function 'kotlin.require' call

        if (!onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance())) {
          var message = 'CONFLATED capacity cannot be used with non-default onBufferOverflow';
          throw IllegalArgumentException_init_$Create$(toString(message));
        }

        tmp = new ConflatedBufferedChannel(1, BufferOverflow_DROP_OLDEST_getInstance(), onUndeliveredElement);
        break;
      case 2147483647:
        tmp = new BufferedChannel(2147483647, onUndeliveredElement);
        break;
      case -2:
        tmp = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? new BufferedChannel(Factory_getInstance().CHANNEL_DEFAULT_CAPACITY_1, onUndeliveredElement) : new ConflatedBufferedChannel(1, onBufferOverflow, onUndeliveredElement);
        break;
      default:
        tmp = onBufferOverflow === BufferOverflow_SUSPEND_getInstance() ? new BufferedChannel(capacity, onUndeliveredElement) : new ConflatedBufferedChannel(capacity, onBufferOverflow, onUndeliveredElement);
        break;
    }
    return tmp;
  }
  function onClosed(_this__u8e3s4, action) {
    // Inline function 'kotlin.contracts.contract' call
    var tmp = _ChannelResult___get_holder__impl__pm9gzw(_this__u8e3s4);
    if (tmp instanceof Closed)
      action(ChannelResult__exceptionOrNull_impl_16ei30(_this__u8e3s4));
    return _this__u8e3s4;
  }
  function onSuccess(_this__u8e3s4, action) {
    // Inline function 'kotlin.contracts.contract' call
    var tmp = _ChannelResult___get_holder__impl__pm9gzw(_this__u8e3s4);
    if (!(tmp instanceof Failed)) {
      var tmp_0 = _ChannelResult___get_holder__impl__pm9gzw(_this__u8e3s4);
      action((tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE());
    }
    return _this__u8e3s4;
  }
  function ChannelCoroutine(parentContext, _channel, initParentJob, active) {
    AbstractCoroutine.call(this, parentContext, initParentJob, active);
    this._channel_1 = _channel;
  }
  protoOf(ChannelCoroutine).get__channel_jf1gul_k$ = function () {
    return this._channel_1;
  };
  protoOf(ChannelCoroutine).get_isClosedForReceive_v0r77d_k$ = function () {
    return this._channel_1.get_isClosedForReceive_v0r77d_k$();
  };
  protoOf(ChannelCoroutine).get_isClosedForSend_ajczci_k$ = function () {
    return this._channel_1.get_isClosedForSend_ajczci_k$();
  };
  protoOf(ChannelCoroutine).get_isEmpty_zauvru_k$ = function () {
    return this._channel_1.get_isEmpty_zauvru_k$();
  };
  protoOf(ChannelCoroutine).get_onReceive_mimw11_k$ = function () {
    return this._channel_1.get_onReceive_mimw11_k$();
  };
  protoOf(ChannelCoroutine).get_onReceiveCatching_ajg9xa_k$ = function () {
    return this._channel_1.get_onReceiveCatching_ajg9xa_k$();
  };
  protoOf(ChannelCoroutine).get_onReceiveOrNull_5u62it_k$ = function () {
    return this._channel_1.get_onReceiveOrNull_5u62it_k$();
  };
  protoOf(ChannelCoroutine).get_onSend_hnoo40_k$ = function () {
    return this._channel_1.get_onSend_hnoo40_k$();
  };
  protoOf(ChannelCoroutine).close_ukldxa_k$ = function (cause) {
    return this._channel_1.close_ukldxa_k$(cause);
  };
  protoOf(ChannelCoroutine).invokeOnClose_xlde4o_k$ = function (handler) {
    this._channel_1.invokeOnClose_xlde4o_k$(handler);
  };
  protoOf(ChannelCoroutine).iterator_jk1svi_k$ = function () {
    return this._channel_1.iterator_jk1svi_k$();
  };
  protoOf(ChannelCoroutine).offer_uqgnr2_k$ = function (element) {
    return this._channel_1.offer_uqgnr2_k$(element);
  };
  protoOf(ChannelCoroutine).poll_21vi7_k$ = function () {
    return this._channel_1.poll_21vi7_k$();
  };
  protoOf(ChannelCoroutine).receive_awoumx_k$ = function ($completion) {
    return this._channel_1.receive_awoumx_k$($completion);
  };
  protoOf(ChannelCoroutine).receiveCatching_golgg7_k$ = function ($completion) {
    var tmp = this._channel_1.receiveCatching_golgg7_k$($completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      return tmp;
    return tmp;
  };
  protoOf(ChannelCoroutine).receiveOrNull_7f8d4k_k$ = function ($completion) {
    return this._channel_1.receiveOrNull_7f8d4k_k$($completion);
  };
  protoOf(ChannelCoroutine).send_44jogj_k$ = function (element, $completion) {
    return this._channel_1.send_44jogj_k$(element, $completion);
  };
  protoOf(ChannelCoroutine).tryReceive_y3ovg2_k$ = function () {
    return this._channel_1.tryReceive_y3ovg2_k$();
  };
  protoOf(ChannelCoroutine).trySend_62dpg8_k$ = function (element) {
    return this._channel_1.trySend_62dpg8_k$(element);
  };
  protoOf(ChannelCoroutine).get_channel_dhi7tm_k$ = function () {
    return this;
  };
  protoOf(ChannelCoroutine).cancel_2l89ey_k$ = function () {
    // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
    var tmp$ret$0 = new JobCancellationException(null == null ? this.cancellationExceptionMessage_a64063_k$() : null, null, this);
    this.cancelInternal_fraw7c_k$(tmp$ret$0);
  };
  protoOf(ChannelCoroutine).cancel_e74who_k$ = function (cause) {
    // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
    var tmp$ret$0 = new JobCancellationException(null == null ? this.cancellationExceptionMessage_a64063_k$() : null, null, this);
    this.cancelInternal_fraw7c_k$(tmp$ret$0);
    return true;
  };
  protoOf(ChannelCoroutine).cancel$default_2ouzfv_k$ = function (cause, $super) {
    return this.cancel$default_w08z00_k$(cause, ($super == null ? true : $super instanceof ChannelCoroutine) ? $super : THROW_CCE());
  };
  protoOf(ChannelCoroutine).cancel_hkmm2i_k$ = function (cause) {
    if (this.get_isCancelled_trk8pu_k$())
      return Unit_getInstance();
    var tmp;
    if (cause == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(null == null ? this.cancellationExceptionMessage_a64063_k$() : null, null, this);
    } else {
      tmp = cause;
    }
    this.cancelInternal_fraw7c_k$(tmp);
  };
  protoOf(ChannelCoroutine).cancel$default_880p35_k$ = function (cause, $super) {
    return this.cancel$default_8haxne_k$(cause, ($super == null ? true : $super instanceof ChannelCoroutine) ? $super : THROW_CCE());
  };
  protoOf(ChannelCoroutine).cancelInternal_fraw7c_k$ = function (cause) {
    var exception = this.toCancellationException$default_6uwjik_k$(cause);
    this._channel_1.cancel_hkmm2i_k$(exception);
    this.cancelCoroutine_rpko3c_k$(exception);
  };
  function get_DEFAULT_CLOSE_MESSAGE() {
    return DEFAULT_CLOSE_MESSAGE;
  }
  var DEFAULT_CLOSE_MESSAGE;
  function cancelConsumed(_this__u8e3s4, cause) {
    var tmp;
    if (cause == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp0_elvis_lhs = cause instanceof CancellationException ? cause : null;
      tmp = tmp0_elvis_lhs == null ? CancellationException_init_$Create$_0('Channel was consumed, consumer had failed', cause) : tmp0_elvis_lhs;
    }
    _this__u8e3s4.cancel_hkmm2i_k$(tmp);
  }
  function _get_capacity__a9k9f3_0($this) {
    return $this.capacity_2;
  }
  function _get_onBufferOverflow__4ha2pi($this) {
    return $this.onBufferOverflow_1;
  }
  function trySendImpl($this, element, isSendOp) {
    return $this.onBufferOverflow_1 === BufferOverflow_DROP_LATEST_getInstance() ? trySendDropLatest($this, element, isSendOp) : $this.trySendDropOldest_sx2u86_k$(element);
  }
  function trySendDropLatest($this, element, isSendOp) {
    var result = protoOf(BufferedChannel).trySend_62dpg8_k$.call($this, element);
    if (_ChannelResult___get_isSuccess__impl__odq1z9(result) || _ChannelResult___get_isClosed__impl__mg7kuu(result))
      return result;
    if (isSendOp) {
      var tmp0_safe_receiver = $this.get_onUndeliveredElement_hdiudo_k$();
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp0_safe_receiver, element);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        throw tmp1_safe_receiver;
      }
    }
    return Companion_getInstance_0().success_tizbw6_k$(Unit_getInstance());
  }
  function ConflatedBufferedChannel(capacity, onBufferOverflow, onUndeliveredElement) {
    onUndeliveredElement = onUndeliveredElement === VOID ? null : onUndeliveredElement;
    BufferedChannel.call(this, capacity, onUndeliveredElement);
    this.capacity_2 = capacity;
    this.onBufferOverflow_1 = onBufferOverflow;
    // Inline function 'kotlin.require' call
    if (!!(this.onBufferOverflow_1 === BufferOverflow_SUSPEND_getInstance())) {
      var message = 'This implementation does not support suspension for senders, use ' + getKClass(BufferedChannel).get_simpleName_r6f8py_k$() + ' instead';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.capacity_2 >= 1)) {
      var message_0 = 'Buffered channel capacity must be at least 1, but ' + this.capacity_2 + ' was specified';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(ConflatedBufferedChannel).get_isConflatedDropOldest_qp2q39_k$ = function () {
    return this.onBufferOverflow_1.equals(BufferOverflow_DROP_OLDEST_getInstance());
  };
  protoOf(ConflatedBufferedChannel).send_44jogj_k$ = function (element, $completion) {
    // Inline function 'kotlinx.coroutines.channels.onClosed' call
    var this_0 = trySendImpl(this, element, true);
    // Inline function 'kotlin.contracts.contract' call
    var tmp = _ChannelResult___get_holder__impl__pm9gzw(this_0);
    if (tmp instanceof Closed) {
      ChannelResult__exceptionOrNull_impl_16ei30(this_0);
      var tmp0_safe_receiver = this.get_onUndeliveredElement_hdiudo_k$();
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp0_safe_receiver, element);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        addSuppressed(tmp1_safe_receiver, this.get_sendException_qpq1ry_k$());
        throw tmp1_safe_receiver;
      }
      throw this.get_sendException_qpq1ry_k$();
    }
    return Unit_getInstance();
  };
  protoOf(ConflatedBufferedChannel).sendBroadcast_18uj62_k$ = function (element, $completion) {
    // Inline function 'kotlinx.coroutines.channels.onSuccess' call
    var this_0 = trySendImpl(this, element, true);
    // Inline function 'kotlin.contracts.contract' call
    var tmp = _ChannelResult___get_holder__impl__pm9gzw(this_0);
    if (!(tmp instanceof Failed)) {
      var tmp_0 = _ChannelResult___get_holder__impl__pm9gzw(this_0);
      if (!(tmp_0 == null ? true : !(tmp_0 == null)))
        THROW_CCE();
      return true;
    }
    return false;
  };
  protoOf(ConflatedBufferedChannel).trySend_62dpg8_k$ = function (element) {
    return trySendImpl(this, element, false);
  };
  protoOf(ConflatedBufferedChannel).registerSelectForSend_39wkg4_k$ = function (select, element) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlinx.coroutines.channels.onSuccess' call
    var this_0 = this.trySend_62dpg8_k$((element == null ? true : !(element == null)) ? element : THROW_CCE());
    // Inline function 'kotlin.contracts.contract' call
    var tmp = _ChannelResult___get_holder__impl__pm9gzw(this_0);
    if (!(tmp instanceof Failed)) {
      var tmp_0 = _ChannelResult___get_holder__impl__pm9gzw(this_0);
      if (!(tmp_0 == null ? true : !(tmp_0 == null)))
        THROW_CCE();
      select.selectInRegistrationPhase_ldg7ua_k$(Unit_getInstance());
      return Unit_getInstance();
    }
    // Inline function 'kotlinx.coroutines.channels.onClosed' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp_1 = _ChannelResult___get_holder__impl__pm9gzw(this_0);
    if (tmp_1 instanceof Closed) {
      ChannelResult__exceptionOrNull_impl_16ei30(this_0);
      select.selectInRegistrationPhase_ldg7ua_k$(get_CHANNEL_CLOSED());
      return Unit_getInstance();
    }
    // Inline function 'kotlin.error' call
    var message = 'unreachable';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(ConflatedBufferedChannel).shouldSendSuspend_mnochg_k$ = function () {
    return false;
  };
  function ProducerScope() {
  }
  function produce(_this__u8e3s4, context, capacity, onBufferOverflow, start, onCompletion, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    capacity = capacity === VOID ? 0 : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    onCompletion = onCompletion === VOID ? null : onCompletion;
    var channel = Channel_0(capacity, onBufferOverflow);
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = new ProducerCoroutine(newContext, channel);
    if (!(onCompletion == null)) {
      coroutine.invokeOnCompletion_n6cffu_k$(onCompletion);
    }
    coroutine.start_rn6v44_k$(start, coroutine, block);
    return coroutine;
  }
  function ProducerCoroutine(parentContext, channel) {
    ChannelCoroutine.call(this, parentContext, channel, true, true);
  }
  protoOf(ProducerCoroutine).get_isActive_quafmh_k$ = function () {
    return protoOf(ChannelCoroutine).get_isActive_quafmh_k$.call(this);
  };
  protoOf(ProducerCoroutine).onCompleted_pl6y9g_k$ = function (value) {
    this.get__channel_jf1gul_k$().close$default_kcbl7u_k$();
  };
  protoOf(ProducerCoroutine).onCompleted_whnx9v_k$ = function (value) {
    return this.onCompleted_pl6y9g_k$(value instanceof Unit ? value : THROW_CCE());
  };
  protoOf(ProducerCoroutine).onCancelled_gb68wi_k$ = function (cause, handled) {
    var processed = this.get__channel_jf1gul_k$().close_ukldxa_k$(cause);
    if (!processed && !handled) {
      handleCoroutineException(this.get_context_h02k06_k$(), cause);
    }
  };
  protoOf(ProducerCoroutine).cancel$default_2ouzfv_k$ = function (cause, $super) {
    return this.cancel$default_w08z00_k$(cause, ($super == null ? true : $super instanceof ProducerCoroutine) ? $super : THROW_CCE());
  };
  protoOf(ProducerCoroutine).cancel$default_880p35_k$ = function (cause, $super) {
    return this.cancel$default_8haxne_k$(cause, ($super == null ? true : $super instanceof ProducerCoroutine) ? $super : THROW_CCE());
  };
  function emitAll(_this__u8e3s4, channel, $completion) {
    return emitAllImpl(_this__u8e3s4, channel, true, $completion);
  }
  function emitAllImpl(_this__u8e3s4, channel, consume, $completion) {
    var tmp = new $emitAllImplCOROUTINE$(_this__u8e3s4, channel, consume, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function $emitAllImplCOROUTINE$(_this__u8e3s4, channel, consume, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.channel_1 = channel;
    this.consume_1 = consume;
  }
  protoOf($emitAllImplCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(9);
            ensureActive_1(this._this__u8e3s4__1);
            this.cause0__1 = null;
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(7);
            this.set_exceptionState_fex74n_k$(6);
            this.tmp0_iterator2__1 = this.channel_1.iterator_jk1svi_k$();
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            this.set_state_rjd8d0_k$(3);
            suspendResult = this.tmp0_iterator2__1.hasNext_nhy1w3_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            if (!suspendResult) {
              this.set_state_rjd8d0_k$(5);
              continue $sm;
            }

            this.element3__1 = this.tmp0_iterator2__1.next_20eer_k$();
            this.set_state_rjd8d0_k$(4);
            suspendResult = this._this__u8e3s4__1.emit_t92u1f_k$(this.element3__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 5:
            this.tmp$ret$01__1 = Unit_getInstance();
            this.set_exceptionState_fex74n_k$(9);
            this.set_state_rjd8d0_k$(8);
            continue $sm;
          case 6:
            this.set_exceptionState_fex74n_k$(7);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof Error) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp_1 = this;
              this.cause0__1 = e;
              throw e;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 7:
            this.set_exceptionState_fex74n_k$(9);
            var t = this.get_exception_x0n6w6_k$();
            if (this.consume_1) {
              cancelConsumed(this.channel_1, this.cause0__1);
            }

            throw t;
          case 8:
            this.set_exceptionState_fex74n_k$(9);
            if (this.consume_1) {
              cancelConsumed(this.channel_1, this.cause0__1);
            }

            return Unit_getInstance();
          case 9:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 9) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  function Flow() {
  }
  function FlowCollector() {
  }
  function get_NO_VALUE() {
    _init_properties_SharedFlow_kt__umasnn();
    return NO_VALUE;
  }
  var NO_VALUE;
  function MutableSharedFlow() {
  }
  function SharedFlow() {
  }
  function fuseSharedFlow(_this__u8e3s4, context, capacity, onBufferOverflow) {
    _init_properties_SharedFlow_kt__umasnn();
    if ((capacity === 0 || capacity === -3) && onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance())) {
      return _this__u8e3s4;
    }
    return new ChannelFlowOperatorImpl(_this__u8e3s4, context, capacity, onBufferOverflow);
  }
  function _get_replay__f4ufwc($this) {
    return $this.replay_1;
  }
  function _get_bufferCapacity__1egje9($this) {
    return $this.bufferCapacity_1;
  }
  function _get_onBufferOverflow__4ha2pi_0($this) {
    return $this.onBufferOverflow_1;
  }
  function _set_buffer__uxh4x5($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad($this) {
    return $this.buffer_1;
  }
  function _set_replayIndex__ufyvqy($this, _set____db54di) {
    $this.replayIndex_1 = _set____db54di;
  }
  function _get_replayIndex__aaqzwa($this) {
    return $this.replayIndex_1;
  }
  function _set_minCollectorIndex__ukunhq($this, _set____db54di) {
    $this.minCollectorIndex_1 = _set____db54di;
  }
  function _get_minCollectorIndex__8v1r7e($this) {
    return $this.minCollectorIndex_1;
  }
  function _set_bufferSize__x9ue96($this, _set____db54di) {
    $this.bufferSize_1 = _set____db54di;
  }
  function _get_bufferSize__mp12kq($this) {
    return $this.bufferSize_1;
  }
  function _set_queueSize__jc2i7h($this, _set____db54di) {
    $this.queueSize_1 = _set____db54di;
  }
  function _get_queueSize__9yry73($this) {
    return $this.queueSize_1;
  }
  function _get_head__d7jo8b($this) {
    var tmp0 = $this.minCollectorIndex_1;
    // Inline function 'kotlin.comparisons.minOf' call
    var b = $this.replayIndex_1;
    return tmp0.compareTo_9jj042_k$(b) <= 0 ? tmp0 : b;
  }
  function _get_replaySize__dxgnb1($this) {
    var tmp0 = _get_head__d7jo8b($this);
    // Inline function 'kotlin.Long.plus' call
    var other = $this.bufferSize_1;
    return tmp0.plus_r93sks_k$(toLong(other)).minus_mfbszm_k$($this.replayIndex_1).toInt_1tsl84_k$();
  }
  function _get_totalSize__xhdb3o($this) {
    return $this.bufferSize_1 + $this.queueSize_1 | 0;
  }
  function _get_bufferEndIndex__d2rk18($this) {
    var tmp0 = _get_head__d7jo8b($this);
    // Inline function 'kotlin.Long.plus' call
    var other = $this.bufferSize_1;
    return tmp0.plus_r93sks_k$(toLong(other));
  }
  function _get_queueEndIndex__4m025l($this) {
    var tmp0 = _get_head__d7jo8b($this);
    // Inline function 'kotlin.Long.plus' call
    var other = $this.bufferSize_1;
    var tmp0_0 = tmp0.plus_r93sks_k$(toLong(other));
    // Inline function 'kotlin.Long.plus' call
    var other_0 = $this.queueSize_1;
    return tmp0_0.plus_r93sks_k$(toLong(other_0));
  }
  function tryEmitLocked($this, value) {
    if ($this.get_nCollectors_gh2yp7_k$() === 0)
      return tryEmitNoCollectorsLocked($this, value);
    if ($this.bufferSize_1 >= $this.bufferCapacity_1 && $this.minCollectorIndex_1.compareTo_9jj042_k$($this.replayIndex_1) <= 0) {
      switch ($this.onBufferOverflow_1.get_ordinal_ip24qg_k$()) {
        case 0:
          return false;
        case 2:
          return true;
        case 1:
          break;
      }
    }
    enqueueLocked($this, value);
    $this.bufferSize_1 = $this.bufferSize_1 + 1 | 0;
    if ($this.bufferSize_1 > $this.bufferCapacity_1) {
      dropOldestLocked($this);
    }
    if (_get_replaySize__dxgnb1($this) > $this.replay_1) {
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$0 = $this.replayIndex_1.plus_r93sks_k$(toLong(1));
      updateBufferLocked($this, tmp$ret$0, $this.minCollectorIndex_1, _get_bufferEndIndex__d2rk18($this), _get_queueEndIndex__4m025l($this));
    }
    return true;
  }
  function tryEmitNoCollectorsLocked($this, value) {
    // Inline function 'kotlinx.coroutines.assert' call
    if ($this.replay_1 === 0)
      return true;
    enqueueLocked($this, value);
    $this.bufferSize_1 = $this.bufferSize_1 + 1 | 0;
    if ($this.bufferSize_1 > $this.replay_1) {
      dropOldestLocked($this);
    }
    var tmp = $this;
    var tmp0 = _get_head__d7jo8b($this);
    // Inline function 'kotlin.Long.plus' call
    var other = $this.bufferSize_1;
    tmp.minCollectorIndex_1 = tmp0.plus_r93sks_k$(toLong(other));
    return true;
  }
  function dropOldestLocked($this) {
    setBufferAt(ensureNotNull($this.buffer_1), _get_head__d7jo8b($this), null);
    $this.bufferSize_1 = $this.bufferSize_1 - 1 | 0;
    // Inline function 'kotlin.Long.plus' call
    var newHead = _get_head__d7jo8b($this).plus_r93sks_k$(toLong(1));
    if ($this.replayIndex_1.compareTo_9jj042_k$(newHead) < 0)
      $this.replayIndex_1 = newHead;
    if ($this.minCollectorIndex_1.compareTo_9jj042_k$(newHead) < 0) {
      correctCollectorIndexesOnDropOldest($this, newHead);
    }
    // Inline function 'kotlinx.coroutines.assert' call
  }
  function correctCollectorIndexesOnDropOldest($this, newHead) {
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked' call
      if ($this.get_nCollectors_gh2yp7_k$() === 0) {
        break $l$block;
      }
      var tmp0_safe_receiver = $this.get_slots_iyl3po_k$();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable = 0;
        var last = tmp0_safe_receiver.length;
        while (inductionVariable < last) {
          var element = tmp0_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          if (!(element == null)) {
            if (element.index_1.compareTo_9jj042_k$(new Long(0, 0)) >= 0 && element.index_1.compareTo_9jj042_k$(newHead) < 0) {
              element.index_1 = newHead;
            }
          }
        }
      }
    }
    $this.minCollectorIndex_1 = newHead;
  }
  function enqueueLocked($this, item) {
    var curSize = _get_totalSize__xhdb3o($this);
    var curBuffer = $this.buffer_1;
    var buffer = curBuffer == null ? growBuffer($this, null, 0, 2) : curSize >= curBuffer.length ? growBuffer($this, curBuffer, curSize, imul(curBuffer.length, 2)) : curBuffer;
    // Inline function 'kotlin.Long.plus' call
    var tmp$ret$0 = _get_head__d7jo8b($this).plus_r93sks_k$(toLong(curSize));
    setBufferAt(buffer, tmp$ret$0, item);
  }
  function growBuffer($this, curBuffer, curSize, newSize) {
    // Inline function 'kotlin.check' call
    if (!(newSize > 0)) {
      var message = 'Buffer size overflow';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.arrayOfNulls' call
    // Inline function 'kotlin.also' call
    var this_0 = Array(newSize);
    $this.buffer_1 = this_0;
    var newBuffer = this_0;
    if (curBuffer == null)
      return newBuffer;
    var head = _get_head__d7jo8b($this);
    var inductionVariable = 0;
    if (inductionVariable < curSize)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.Long.plus' call
        var tmp = head.plus_r93sks_k$(toLong(i));
        // Inline function 'kotlin.Long.plus' call
        var tmp$ret$6 = head.plus_r93sks_k$(toLong(i));
        setBufferAt(newBuffer, tmp, getBufferAt(curBuffer, tmp$ret$6));
      }
       while (inductionVariable < curSize);
    return newBuffer;
  }
  function emitSuspend($this, value, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.initCancellability_shqc60_k$();
    var resumes = get_EMPTY_RESUMES();
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    var tmp$ret$3;
    $l$block: {
      if (tryEmitLocked($this, value)) {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        Companion_getInstance();
        var tmp$ret$1 = _Result___init__impl__xyqfz8(Unit_getInstance());
        cancellable.resumeWith_dtxwbr_k$(tmp$ret$1);
        resumes = findSlotsToResumeLocked($this, resumes);
        tmp$ret$3 = null;
        break $l$block;
      }
      var tmp0 = _get_head__d7jo8b($this);
      // Inline function 'kotlin.Long.plus' call
      var other = _get_totalSize__xhdb3o($this);
      var tmp$ret$4 = tmp0.plus_r93sks_k$(toLong(other));
      // Inline function 'kotlin.also' call
      var this_0 = new Emitter($this, tmp$ret$4, value, cancellable);
      enqueueLocked($this, this_0);
      $this.queueSize_1 = $this.queueSize_1 + 1 | 0;
      if ($this.bufferCapacity_1 === 0)
        resumes = findSlotsToResumeLocked($this, resumes);
      tmp$ret$3 = this_0;
    }
    var emitter = tmp$ret$3;
    if (emitter == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      disposeOnCancellation(cancellable, emitter);
    }
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var r = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (r == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        Companion_getInstance();
        var tmp$ret$11 = _Result___init__impl__xyqfz8(Unit_getInstance());
        r.resumeWith_dtxwbr_k$(tmp$ret$11);
      }
    }
    return cancellable.getResult_fck196_k$();
  }
  function cancelEmitter($this, emitter) {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    if (emitter.index_1.compareTo_9jj042_k$(_get_head__d7jo8b($this)) < 0)
      return Unit_getInstance();
    var buffer = ensureNotNull($this.buffer_1);
    if (!(getBufferAt(buffer, emitter.index_1) === emitter))
      return Unit_getInstance();
    setBufferAt(buffer, emitter.index_1, get_NO_VALUE());
    cleanupTailLocked($this);
    return Unit_getInstance();
  }
  function updateBufferLocked($this, newReplayIndex, newMinCollectorIndex, newBufferEndIndex, newQueueEndIndex) {
    // Inline function 'kotlin.comparisons.minOf' call
    var newHead = newMinCollectorIndex.compareTo_9jj042_k$(newReplayIndex) <= 0 ? newMinCollectorIndex : newReplayIndex;
    // Inline function 'kotlinx.coroutines.assert' call
    var inductionVariable = _get_head__d7jo8b($this);
    if (inductionVariable.compareTo_9jj042_k$(newHead) < 0)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable.plus_r93sks_k$(new Long(1, 0));
        setBufferAt(ensureNotNull($this.buffer_1), index, null);
      }
       while (inductionVariable.compareTo_9jj042_k$(newHead) < 0);
    $this.replayIndex_1 = newReplayIndex;
    $this.minCollectorIndex_1 = newMinCollectorIndex;
    $this.bufferSize_1 = newBufferEndIndex.minus_mfbszm_k$(newHead).toInt_1tsl84_k$();
    $this.queueSize_1 = newQueueEndIndex.minus_mfbszm_k$(newBufferEndIndex).toInt_1tsl84_k$();
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
  }
  function cleanupTailLocked($this) {
    if ($this.bufferCapacity_1 === 0 && $this.queueSize_1 <= 1)
      return Unit_getInstance();
    var buffer = ensureNotNull($this.buffer_1);
    $l$loop: while (true) {
      var tmp;
      if ($this.queueSize_1 > 0) {
        var tmp0 = _get_head__d7jo8b($this);
        // Inline function 'kotlin.Long.plus' call
        var other = _get_totalSize__xhdb3o($this);
        // Inline function 'kotlin.Long.minus' call
        var tmp$ret$1 = tmp0.plus_r93sks_k$(toLong(other)).minus_mfbszm_k$(toLong(1));
        tmp = getBufferAt(buffer, tmp$ret$1) === get_NO_VALUE();
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      $this.queueSize_1 = $this.queueSize_1 - 1 | 0;
      var tmp0_0 = _get_head__d7jo8b($this);
      // Inline function 'kotlin.Long.plus' call
      var other_0 = _get_totalSize__xhdb3o($this);
      var tmp$ret$2 = tmp0_0.plus_r93sks_k$(toLong(other_0));
      setBufferAt(buffer, tmp$ret$2, null);
    }
  }
  function tryTakeValue($this, slot) {
    var resumes = get_EMPTY_RESUMES();
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    var index = tryPeekLocked($this, slot);
    var tmp;
    if (index.compareTo_9jj042_k$(new Long(0, 0)) < 0) {
      tmp = get_NO_VALUE();
    } else {
      var oldIndex = slot.index_1;
      var newValue = getPeekedValueLockedAt($this, index);
      var tmp_0 = slot;
      // Inline function 'kotlin.Long.plus' call
      tmp_0.index_1 = index.plus_r93sks_k$(toLong(1));
      resumes = $this.updateCollectorIndexLocked_r0wcdj_k$(oldIndex);
      tmp = newValue;
    }
    var value = tmp;
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var resume = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (resume == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        Companion_getInstance();
        var tmp$ret$5 = _Result___init__impl__xyqfz8(Unit_getInstance());
        resume.resumeWith_dtxwbr_k$(tmp$ret$5);
      }
    }
    return value;
  }
  function tryPeekLocked($this, slot) {
    var index = slot.index_1;
    if (index.compareTo_9jj042_k$(_get_bufferEndIndex__d2rk18($this)) < 0)
      return index;
    if ($this.bufferCapacity_1 > 0)
      return new Long(-1, -1);
    if (index.compareTo_9jj042_k$(_get_head__d7jo8b($this)) > 0)
      return new Long(-1, -1);
    if ($this.queueSize_1 === 0)
      return new Long(-1, -1);
    return index;
  }
  function getPeekedValueLockedAt($this, index) {
    var item = getBufferAt(ensureNotNull($this.buffer_1), index);
    var tmp;
    if (item instanceof Emitter) {
      tmp = item.value_1;
    } else {
      tmp = item;
    }
    return tmp;
  }
  function awaitValue($this, slot, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.initCancellability_shqc60_k$();
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    $l$block: {
      var index = tryPeekLocked($this, slot);
      if (index.compareTo_9jj042_k$(new Long(0, 0)) < 0) {
        slot.cont_1 = cancellable;
      } else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        Companion_getInstance();
        var tmp$ret$1 = _Result___init__impl__xyqfz8(Unit_getInstance());
        cancellable.resumeWith_dtxwbr_k$(tmp$ret$1);
        break $l$block;
      }
      slot.cont_1 = cancellable;
    }
    return cancellable.getResult_fck196_k$();
  }
  function findSlotsToResumeLocked($this, resumesIn) {
    var resumes = resumesIn;
    var resumeCount = resumesIn.length;
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked' call
      if ($this.get_nCollectors_gh2yp7_k$() === 0) {
        break $l$block;
      }
      var tmp0_safe_receiver = $this.get_slots_iyl3po_k$();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable = 0;
        var last = tmp0_safe_receiver.length;
        while (inductionVariable < last) {
          var element = tmp0_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          if (!(element == null)) {
            $l$block_1: {
              var tmp0_elvis_lhs = element.cont_1;
              var tmp;
              if (tmp0_elvis_lhs == null) {
                break $l$block_1;
              } else {
                tmp = tmp0_elvis_lhs;
              }
              var cont = tmp;
              if (tryPeekLocked($this, element).compareTo_9jj042_k$(new Long(0, 0)) < 0) {
                break $l$block_1;
              }
              if (resumeCount >= resumes.length) {
                var tmp_0 = resumes;
                // Inline function 'kotlin.comparisons.maxOf' call
                var b = imul(2, resumes.length);
                var tmp$ret$2 = Math.max(2, b);
                resumes = copyOf(tmp_0, tmp$ret$2);
              }
              var tmp_1 = resumes;
              var tmp1 = resumeCount;
              resumeCount = tmp1 + 1 | 0;
              tmp_1[tmp1] = cont;
              element.cont_1 = null;
            }
          }
        }
      }
    }
    return resumes;
  }
  function Emitter(flow, index, value, cont) {
    this.flow_1 = flow;
    this.index_1 = index;
    this.value_1 = value;
    this.cont_1 = cont;
  }
  protoOf(Emitter).get_flow_wom2yf_k$ = function () {
    return this.flow_1;
  };
  protoOf(Emitter).set_index_qwvax5_k$ = function (_set____db54di) {
    this.index_1 = _set____db54di;
  };
  protoOf(Emitter).get_index_it478p_k$ = function () {
    return this.index_1;
  };
  protoOf(Emitter).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(Emitter).get_cont_wok86z_k$ = function () {
    return this.cont_1;
  };
  protoOf(Emitter).dispose_3nnxhr_k$ = function () {
    return cancelEmitter(this.flow_1, this);
  };
  function $collectCOROUTINE$(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  protoOf($collectCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(13);
            this.slot0__1 = this._this__u8e3s4__1.allocateSlot_67zie3_k$();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(12);
            var tmp_0 = this.collector_1;
            if (tmp_0 instanceof SubscribedFlowCollector) {
              this.set_state_rjd8d0_k$(2);
              suspendResult = this.collector_1.onSubscription_q7qr5n_k$(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

          case 2:
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            var tmp_1 = this;
            tmp_1.collectorJob2__1 = this.get_context_h02k06_k$().get_y2st91_k$(Key_getInstance_2());
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 4:
            if (!true) {
              this.set_state_rjd8d0_k$(10);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(5);
            continue $sm;
          case 5:
            if (!true) {
              this.set_state_rjd8d0_k$(8);
              continue $sm;
            }

            this.newValue3__1 = tryTakeValue(this._this__u8e3s4__1, this.slot0__1);
            if (!(this.newValue3__1 === get_NO_VALUE())) {
              this.set_state_rjd8d0_k$(8);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(6);
              continue $sm;
            }

          case 6:
            this.set_state_rjd8d0_k$(7);
            suspendResult = awaitValue(this._this__u8e3s4__1, this.slot0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            this.set_state_rjd8d0_k$(5);
            continue $sm;
          case 8:
            var tmp0_safe_receiver = this.collectorJob2__1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              ensureActive_0(tmp0_safe_receiver);
            }

            this.set_state_rjd8d0_k$(9);
            var tmp_2 = this.newValue3__1;
            suspendResult = this.collector_1.emit_t92u1f_k$((tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 10:
            this.tmp$ret$01__1 = Unit_getInstance();
            this.set_exceptionState_fex74n_k$(13);
            this.set_state_rjd8d0_k$(11);
            continue $sm;
          case 11:
            this.set_exceptionState_fex74n_k$(13);
            this._this__u8e3s4__1.freeSlot_95hriy_k$(this.slot0__1);
            return Unit_getInstance();
          case 12:
            this.set_exceptionState_fex74n_k$(13);
            var t = this.get_exception_x0n6w6_k$();
            this._this__u8e3s4__1.freeSlot_95hriy_k$(this.slot0__1);
            throw t;
          case 13:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 13) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function SharedFlowImpl(replay, bufferCapacity, onBufferOverflow) {
    AbstractSharedFlow.call(this);
    this.replay_1 = replay;
    this.bufferCapacity_1 = bufferCapacity;
    this.onBufferOverflow_1 = onBufferOverflow;
    this.buffer_1 = null;
    this.replayIndex_1 = new Long(0, 0);
    this.minCollectorIndex_1 = new Long(0, 0);
    this.bufferSize_1 = 0;
    this.queueSize_1 = 0;
  }
  protoOf(SharedFlowImpl).get_replayCache_uwub8y_k$ = function () {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    var replaySize = _get_replaySize__dxgnb1(this);
    if (replaySize === 0)
      return emptyList();
    var result = ArrayList_init_$Create$(replaySize);
    var buffer = ensureNotNull(this.buffer_1);
    var inductionVariable = 0;
    if (inductionVariable < replaySize)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.Long.plus' call
        var tmp$ret$1 = this.replayIndex_1.plus_r93sks_k$(toLong(i));
        var tmp = getBufferAt(buffer, tmp$ret$1);
        // Inline function 'kotlin.collections.plusAssign' call
        var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
        result.add_utx5q5_k$(element);
      }
       while (inductionVariable < replaySize);
    return result;
  };
  protoOf(SharedFlowImpl).get_lastReplayedLocked_pnaey7_k$ = function () {
    var tmp = ensureNotNull(this.buffer_1);
    var tmp0 = this.replayIndex_1;
    // Inline function 'kotlin.Long.plus' call
    var other = _get_replaySize__dxgnb1(this);
    // Inline function 'kotlin.Long.minus' call
    var tmp$ret$1 = tmp0.plus_r93sks_k$(toLong(other)).minus_mfbszm_k$(toLong(1));
    var tmp_0 = getBufferAt(tmp, tmp$ret$1);
    return (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
  };
  protoOf(SharedFlowImpl).collect_ve9kyv_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$(this, collector, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(SharedFlowImpl).collect_aksokr_k$ = function (collector, $completion) {
    return this.collect_ve9kyv_k$(collector, $completion);
  };
  protoOf(SharedFlowImpl).tryEmit_ru0jrz_k$ = function (value) {
    var resumes = get_EMPTY_RESUMES();
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    var tmp;
    if (tryEmitLocked(this, value)) {
      resumes = findSlotsToResumeLocked(this, resumes);
      tmp = true;
    } else {
      tmp = false;
    }
    var emitted = tmp;
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var cont = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (cont == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        Companion_getInstance();
        var tmp$ret$4 = _Result___init__impl__xyqfz8(Unit_getInstance());
        cont.resumeWith_dtxwbr_k$(tmp$ret$4);
      }
    }
    return emitted;
  };
  protoOf(SharedFlowImpl).emit_t92u1f_k$ = function (value, $completion) {
    if (this.tryEmit_ru0jrz_k$(value))
      return Unit_getInstance();
    return emitSuspend(this, value, $completion);
  };
  protoOf(SharedFlowImpl).updateNewCollectorIndexLocked_8rfw0p_k$ = function () {
    var index = this.replayIndex_1;
    if (index.compareTo_9jj042_k$(this.minCollectorIndex_1) < 0)
      this.minCollectorIndex_1 = index;
    return index;
  };
  protoOf(SharedFlowImpl).updateCollectorIndexLocked_r0wcdj_k$ = function (oldIndex) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (oldIndex.compareTo_9jj042_k$(this.minCollectorIndex_1) > 0)
      return get_EMPTY_RESUMES();
    var head = _get_head__d7jo8b(this);
    // Inline function 'kotlin.Long.plus' call
    var other = this.bufferSize_1;
    var newMinCollectorIndex = head.plus_r93sks_k$(toLong(other));
    if (this.bufferCapacity_1 === 0 && this.queueSize_1 > 0) {
      newMinCollectorIndex = newMinCollectorIndex.inc_28ke_k$();
    }
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked' call
      if (this.get_nCollectors_gh2yp7_k$() === 0) {
        break $l$block;
      }
      var tmp0_safe_receiver = this.get_slots_iyl3po_k$();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable = 0;
        var last = tmp0_safe_receiver.length;
        while (inductionVariable < last) {
          var element = tmp0_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          if (!(element == null)) {
            if (element.index_1.compareTo_9jj042_k$(new Long(0, 0)) >= 0 && element.index_1.compareTo_9jj042_k$(newMinCollectorIndex) < 0)
              newMinCollectorIndex = element.index_1;
          }
        }
      }
    }
    // Inline function 'kotlinx.coroutines.assert' call
    if (newMinCollectorIndex.compareTo_9jj042_k$(this.minCollectorIndex_1) <= 0)
      return get_EMPTY_RESUMES();
    var newBufferEndIndex = _get_bufferEndIndex__d2rk18(this);
    var tmp;
    if (this.get_nCollectors_gh2yp7_k$() > 0) {
      var newBufferSize0 = newBufferEndIndex.minus_mfbszm_k$(newMinCollectorIndex).toInt_1tsl84_k$();
      var tmp0 = this.queueSize_1;
      // Inline function 'kotlin.comparisons.minOf' call
      var b = this.bufferCapacity_1 - newBufferSize0 | 0;
      tmp = Math.min(tmp0, b);
    } else {
      tmp = this.queueSize_1;
    }
    var maxResumeCount = tmp;
    var resumes = get_EMPTY_RESUMES();
    var tmp0_0 = newBufferEndIndex;
    // Inline function 'kotlin.Long.plus' call
    var other_0 = this.queueSize_1;
    var newQueueEndIndex = tmp0_0.plus_r93sks_k$(toLong(other_0));
    if (maxResumeCount > 0) {
      // Inline function 'kotlin.arrayOfNulls' call
      resumes = Array(maxResumeCount);
      var resumeCount = 0;
      var buffer = ensureNotNull(this.buffer_1);
      var inductionVariable_0 = newBufferEndIndex;
      if (inductionVariable_0.compareTo_9jj042_k$(newQueueEndIndex) < 0)
        $l$loop: do {
          var curEmitterIndex = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0.plus_r93sks_k$(new Long(1, 0));
          var emitter = getBufferAt(buffer, curEmitterIndex);
          if (!(emitter === get_NO_VALUE())) {
            if (!(emitter instanceof Emitter))
              THROW_CCE();
            var tmp_0 = resumes;
            var tmp2 = resumeCount;
            resumeCount = tmp2 + 1 | 0;
            tmp_0[tmp2] = emitter.cont_1;
            setBufferAt(buffer, curEmitterIndex, get_NO_VALUE());
            setBufferAt(buffer, newBufferEndIndex, emitter.value_1);
            newBufferEndIndex = newBufferEndIndex.inc_28ke_k$();
            if (resumeCount >= maxResumeCount)
              break $l$loop;
          }
        }
         while (inductionVariable_0.compareTo_9jj042_k$(newQueueEndIndex) < 0);
    }
    var newBufferSize1 = newBufferEndIndex.minus_mfbszm_k$(head).toInt_1tsl84_k$();
    if (this.get_nCollectors_gh2yp7_k$() === 0)
      newMinCollectorIndex = newBufferEndIndex;
    var tmp0_1 = this.replayIndex_1;
    var tmp0_2 = newBufferEndIndex;
    // Inline function 'kotlin.comparisons.minOf' call
    var a = this.replay_1;
    // Inline function 'kotlin.Long.minus' call
    var other_1 = Math.min(a, newBufferSize1);
    // Inline function 'kotlin.comparisons.maxOf' call
    var b_0 = tmp0_2.minus_mfbszm_k$(toLong(other_1));
    var newReplayIndex = tmp0_1.compareTo_9jj042_k$(b_0) >= 0 ? tmp0_1 : b_0;
    if (this.bufferCapacity_1 === 0 && newReplayIndex.compareTo_9jj042_k$(newQueueEndIndex) < 0 && equals(getBufferAt(ensureNotNull(this.buffer_1), newReplayIndex), get_NO_VALUE())) {
      newBufferEndIndex = newBufferEndIndex.inc_28ke_k$();
      newReplayIndex = newReplayIndex.inc_28ke_k$();
    }
    updateBufferLocked(this, newReplayIndex, newMinCollectorIndex, newBufferEndIndex, newQueueEndIndex);
    cleanupTailLocked(this);
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(resumes.length === 0))
      resumes = findSlotsToResumeLocked(this, resumes);
    return resumes;
  };
  protoOf(SharedFlowImpl).createSlot_mn6f4q_k$ = function () {
    return new SharedFlowSlot();
  };
  protoOf(SharedFlowImpl).createSlotArray_10rtp5_k$ = function (size) {
    // Inline function 'kotlin.arrayOfNulls' call
    return Array(size);
  };
  protoOf(SharedFlowImpl).resetReplayCache_u0fxh8_k$ = function () {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    updateBufferLocked(this, _get_bufferEndIndex__d2rk18(this), this.minCollectorIndex_1, _get_bufferEndIndex__d2rk18(this), _get_queueEndIndex__4m025l(this));
    return Unit_getInstance();
  };
  protoOf(SharedFlowImpl).fuse_gny1ac_k$ = function (context, capacity, onBufferOverflow) {
    return fuseSharedFlow(this, context, capacity, onBufferOverflow);
  };
  function SharedFlowSlot() {
    AbstractSharedFlowSlot.call(this);
    this.index_1 = new Long(-1, -1);
    this.cont_1 = null;
  }
  protoOf(SharedFlowSlot).set_index_qwvax5_k$ = function (_set____db54di) {
    this.index_1 = _set____db54di;
  };
  protoOf(SharedFlowSlot).get_index_it478p_k$ = function () {
    return this.index_1;
  };
  protoOf(SharedFlowSlot).set_cont_vzgc77_k$ = function (_set____db54di) {
    this.cont_1 = _set____db54di;
  };
  protoOf(SharedFlowSlot).get_cont_wok86z_k$ = function () {
    return this.cont_1;
  };
  protoOf(SharedFlowSlot).allocateLocked_8q8et0_k$ = function (flow) {
    if (this.index_1.compareTo_9jj042_k$(new Long(0, 0)) >= 0)
      return false;
    this.index_1 = flow.updateNewCollectorIndexLocked_8rfw0p_k$();
    return true;
  };
  protoOf(SharedFlowSlot).allocateLocked_z5itrq_k$ = function (flow) {
    return this.allocateLocked_8q8et0_k$(flow instanceof SharedFlowImpl ? flow : THROW_CCE());
  };
  protoOf(SharedFlowSlot).freeLocked_z0adlp_k$ = function (flow) {
    // Inline function 'kotlinx.coroutines.assert' call
    var oldIndex = this.index_1;
    this.index_1 = new Long(-1, -1);
    this.cont_1 = null;
    return flow.updateCollectorIndexLocked_r0wcdj_k$(oldIndex);
  };
  protoOf(SharedFlowSlot).freeLocked_1gezd3_k$ = function (flow) {
    return this.freeLocked_z0adlp_k$(flow instanceof SharedFlowImpl ? flow : THROW_CCE());
  };
  function getBufferAt(_this__u8e3s4, index) {
    _init_properties_SharedFlow_kt__umasnn();
    return _this__u8e3s4[index.toInt_1tsl84_k$() & (_this__u8e3s4.length - 1 | 0)];
  }
  function setBufferAt(_this__u8e3s4, index, item) {
    _init_properties_SharedFlow_kt__umasnn();
    return _this__u8e3s4[index.toInt_1tsl84_k$() & (_this__u8e3s4.length - 1 | 0)] = item;
  }
  var properties_initialized_SharedFlow_kt_tmefor;
  function _init_properties_SharedFlow_kt__umasnn() {
    if (!properties_initialized_SharedFlow_kt_tmefor) {
      properties_initialized_SharedFlow_kt_tmefor = true;
      NO_VALUE = new Symbol('NO_VALUE');
    }
  }
  function get_NONE() {
    _init_properties_StateFlow_kt__eu9yi5();
    return NONE;
  }
  var NONE;
  function get_PENDING() {
    _init_properties_StateFlow_kt__eu9yi5();
    return PENDING;
  }
  var PENDING;
  function MutableStateFlow() {
  }
  function MutableStateFlow_0(value) {
    _init_properties_StateFlow_kt__eu9yi5();
    return new StateFlowImpl(value == null ? get_NULL() : value);
  }
  function StateFlow() {
  }
  function _get__state__37adl3_1($this) {
    return $this._state_1;
  }
  function _set_sequence__iw30om($this, _set____db54di) {
    $this.sequence_1 = _set____db54di;
  }
  function _get_sequence__636p7u($this) {
    return $this.sequence_1;
  }
  function updateState($this, expectedState, newState) {
    var curSequence;
    var curSlots;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    var oldState = $this._state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    if (!(expectedState == null) && !equals(oldState, expectedState))
      return false;
    if (equals(oldState, newState))
      return true;
    $this._state_1.set_kotlinx$atomicfu$value_508e3y_k$(newState);
    curSequence = $this.sequence_1;
    if ((curSequence & 1) === 0) {
      curSequence = curSequence + 1 | 0;
      $this.sequence_1 = curSequence;
    } else {
      $this.sequence_1 = curSequence + 2 | 0;
      return true;
    }
    curSlots = $this.get_slots_iyl3po_k$();
    while (true) {
      var tmp0_safe_receiver = curSlots;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable = 0;
        var last = tmp0_safe_receiver.length;
        while (inductionVariable < last) {
          var element = tmp0_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          if (element == null)
            null;
          else {
            element.makePending_e7hvrb_k$();
          }
        }
      }
      // Inline function 'kotlinx.coroutines.internal.synchronized' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
      if ($this.sequence_1 === curSequence) {
        $this.sequence_1 = curSequence + 1 | 0;
        return true;
      }
      curSequence = $this.sequence_1;
      curSlots = $this.get_slots_iyl3po_k$();
    }
  }
  function $collectCOROUTINE$_0(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  protoOf($collectCOROUTINE$_0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(12);
            this.slot0__1 = this._this__u8e3s4__1.allocateSlot_67zie3_k$();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(11);
            var tmp_0 = this.collector_1;
            if (tmp_0 instanceof SubscribedFlowCollector) {
              this.set_state_rjd8d0_k$(2);
              suspendResult = this.collector_1.onSubscription_q7qr5n_k$(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

          case 2:
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            var tmp_1 = this;
            tmp_1.collectorJob2__1 = this.get_context_h02k06_k$().get_y2st91_k$(Key_getInstance_2());
            this.oldState3__1 = null;
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 4:
            if (!true) {
              this.set_state_rjd8d0_k$(9);
              continue $sm;
            }

            this.newState4__1 = this._this__u8e3s4__1._state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
            var tmp0_safe_receiver = this.collectorJob2__1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              ensureActive_0(tmp0_safe_receiver);
            }

            if (this.oldState3__1 == null || !equals(this.oldState3__1, this.newState4__1)) {
              this.set_state_rjd8d0_k$(5);
              var tmp0 = get_NULL();
              var value = this.newState4__1;
              var tmp_2;
              if (value === tmp0) {
                tmp_2 = (null == null ? true : !(null == null)) ? null : THROW_CCE();
              } else {
                tmp_2 = (value == null ? true : !(value == null)) ? value : THROW_CCE();
              }
              suspendResult = this.collector_1.emit_t92u1f_k$(tmp_2, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(6);
              continue $sm;
            }

          case 5:
            this.oldState3__1 = this.newState4__1;
            this.set_state_rjd8d0_k$(6);
            continue $sm;
          case 6:
            if (!this.slot0__1.takePending_f3q49c_k$()) {
              this.set_state_rjd8d0_k$(7);
              suspendResult = this.slot0__1.awaitPending_uaxl06_k$(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(8);
              continue $sm;
            }

          case 7:
            this.set_state_rjd8d0_k$(8);
            continue $sm;
          case 8:
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 9:
            this.tmp$ret$01__1 = Unit_getInstance();
            this.set_exceptionState_fex74n_k$(12);
            this.set_state_rjd8d0_k$(10);
            continue $sm;
          case 10:
            this.set_exceptionState_fex74n_k$(12);
            this._this__u8e3s4__1.freeSlot_95hriy_k$(this.slot0__1);
            return Unit_getInstance();
          case 11:
            this.set_exceptionState_fex74n_k$(12);
            var t = this.get_exception_x0n6w6_k$();
            this._this__u8e3s4__1.freeSlot_95hriy_k$(this.slot0__1);
            throw t;
          case 12:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 12) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function StateFlowImpl(initialState) {
    AbstractSharedFlow.call(this);
    this._state_1 = atomic$ref$1(initialState);
    this.sequence_1 = 0;
  }
  protoOf(StateFlowImpl).set_value_v1vabv_k$ = function (value) {
    updateState(this, null, value == null ? get_NULL() : value);
  };
  protoOf(StateFlowImpl).get_value_j01efc_k$ = function () {
    var tmp0 = get_NULL();
    // Inline function 'kotlinx.coroutines.internal.Symbol.unbox' call
    var value = this._state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    var tmp;
    if (value === tmp0) {
      tmp = (null == null ? true : !(null == null)) ? null : THROW_CCE();
    } else {
      tmp = (value == null ? true : !(value == null)) ? value : THROW_CCE();
    }
    return tmp;
  };
  protoOf(StateFlowImpl).compareAndSet_l3595a_k$ = function (expect, update) {
    var tmp = expect == null ? get_NULL() : expect;
    return updateState(this, tmp, update == null ? get_NULL() : update);
  };
  protoOf(StateFlowImpl).get_replayCache_uwub8y_k$ = function () {
    return listOf_0(this.get_value_j01efc_k$());
  };
  protoOf(StateFlowImpl).tryEmit_ru0jrz_k$ = function (value) {
    this.set_value_v1vabv_k$(value);
    return true;
  };
  protoOf(StateFlowImpl).emit_t92u1f_k$ = function (value, $completion) {
    this.set_value_v1vabv_k$(value);
    return Unit_getInstance();
  };
  protoOf(StateFlowImpl).resetReplayCache_u0fxh8_k$ = function () {
    throw UnsupportedOperationException_init_$Create$('MutableStateFlow.resetReplayCache is not supported');
  };
  protoOf(StateFlowImpl).collect_ve9kyv_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$_0(this, collector, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(StateFlowImpl).collect_aksokr_k$ = function (collector, $completion) {
    return this.collect_ve9kyv_k$(collector, $completion);
  };
  protoOf(StateFlowImpl).createSlot_mn6f4q_k$ = function () {
    return new StateFlowSlot();
  };
  protoOf(StateFlowImpl).createSlotArray_10rtp5_k$ = function (size) {
    // Inline function 'kotlin.arrayOfNulls' call
    return Array(size);
  };
  protoOf(StateFlowImpl).fuse_gny1ac_k$ = function (context, capacity, onBufferOverflow) {
    return fuseStateFlow(this, context, capacity, onBufferOverflow);
  };
  function _get__state__37adl3_2($this) {
    return $this._state_1;
  }
  function StateFlowSlot() {
    AbstractSharedFlowSlot.call(this);
    this._state_1 = new WorkaroundAtomicReference(null);
  }
  protoOf(StateFlowSlot).allocateLocked_8qbrc6_k$ = function (flow) {
    if (!(get_value(this._state_1) == null))
      return false;
    set_value(this._state_1, get_NONE());
    return true;
  };
  protoOf(StateFlowSlot).allocateLocked_z5itrq_k$ = function (flow) {
    return this.allocateLocked_8qbrc6_k$(flow instanceof StateFlowImpl ? flow : THROW_CCE());
  };
  protoOf(StateFlowSlot).freeLocked_vptyqx_k$ = function (flow) {
    set_value(this._state_1, null);
    return get_EMPTY_RESUMES();
  };
  protoOf(StateFlowSlot).freeLocked_1gezd3_k$ = function (flow) {
    return this.freeLocked_vptyqx_k$(flow instanceof StateFlowImpl ? flow : THROW_CCE());
  };
  protoOf(StateFlowSlot).makePending_e7hvrb_k$ = function () {
    // Inline function 'kotlinx.coroutines.internal.loop' call
    var this_0 = this._state_1;
    while (true) {
      var state = get_value(this_0);
      if (state == null)
        return Unit_getInstance();
      else if (state === get_PENDING())
        return Unit_getInstance();
      else if (state === get_NONE()) {
        if (this._state_1.compareAndSet_l3595a_k$(state, get_PENDING()))
          return Unit_getInstance();
      } else {
        if (this._state_1.compareAndSet_l3595a_k$(state, get_NONE())) {
          // Inline function 'kotlin.coroutines.resume' call
          var this_1 = state instanceof CancellableContinuationImpl ? state : THROW_CCE();
          // Inline function 'kotlin.Companion.success' call
          Companion_getInstance();
          var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
          this_1.resumeWith_dtxwbr_k$(tmp$ret$0);
          return Unit_getInstance();
        }
      }
    }
  };
  protoOf(StateFlowSlot).takePending_f3q49c_k$ = function () {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlinx.coroutines.assert' call
    return ensureNotNull(this._state_1.getAndSet_gc0982_k$(get_NONE())) === get_PENDING();
  };
  protoOf(StateFlowSlot).awaitPending_uaxl06_k$ = function ($completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.initCancellability_shqc60_k$();
    $l$block: {
      // Inline function 'kotlinx.coroutines.assert' call
      if (this._state_1.compareAndSet_l3595a_k$(get_NONE(), cancellable)) {
        break $l$block;
      }
      // Inline function 'kotlinx.coroutines.assert' call
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_getInstance());
      cancellable.resumeWith_dtxwbr_k$(tmp$ret$3);
    }
    return cancellable.getResult_fck196_k$();
  };
  function fuseStateFlow(_this__u8e3s4, context, capacity, onBufferOverflow) {
    _init_properties_StateFlow_kt__eu9yi5();
    // Inline function 'kotlinx.coroutines.assert' call
    if (((0 <= capacity ? capacity <= 1 : false) || capacity === -2) && onBufferOverflow.equals(BufferOverflow_DROP_OLDEST_getInstance())) {
      return _this__u8e3s4;
    }
    return fuseSharedFlow(_this__u8e3s4, context, capacity, onBufferOverflow);
  }
  var properties_initialized_StateFlow_kt_nsqikx;
  function _init_properties_StateFlow_kt__eu9yi5() {
    if (!properties_initialized_StateFlow_kt_nsqikx) {
      properties_initialized_StateFlow_kt_nsqikx = true;
      NONE = new Symbol('NONE');
      PENDING = new Symbol('PENDING');
    }
  }
  function get_EMPTY_RESUMES() {
    _init_properties_AbstractSharedFlow_kt__h2xygb();
    return EMPTY_RESUMES;
  }
  var EMPTY_RESUMES;
  function _set_slots__knzp9s($this, _set____db54di) {
    $this.slots_1 = _set____db54di;
  }
  function _set_nCollectors__60nrap($this, _set____db54di) {
    $this.nCollectors_1 = _set____db54di;
  }
  function _set_nextIndex__5mwvzu($this, _set____db54di) {
    $this.nextIndex_1 = _set____db54di;
  }
  function _get_nextIndex__nnxkeq($this) {
    return $this.nextIndex_1;
  }
  function _set__subscriptionCount__l7i64c($this, _set____db54di) {
    $this._subscriptionCount_1 = _set____db54di;
  }
  function _get__subscriptionCount__fvqkqg($this) {
    return $this._subscriptionCount_1;
  }
  function AbstractSharedFlow() {
    SynchronizedObject.call(this);
    this.slots_1 = null;
    this.nCollectors_1 = 0;
    this.nextIndex_1 = 0;
    this._subscriptionCount_1 = null;
  }
  protoOf(AbstractSharedFlow).get_slots_iyl3po_k$ = function () {
    return this.slots_1;
  };
  protoOf(AbstractSharedFlow).get_nCollectors_gh2yp7_k$ = function () {
    return this.nCollectors_1;
  };
  protoOf(AbstractSharedFlow).get_subscriptionCount_9h9j93_k$ = function () {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    var tmp0_elvis_lhs = this._subscriptionCount_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new SubscriptionCountStateFlow(this.nCollectors_1);
      this._subscriptionCount_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(AbstractSharedFlow).allocateSlot_67zie3_k$ = function () {
    var subscriptionCount;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    var curSlots = this.slots_1;
    var tmp;
    if (curSlots == null) {
      // Inline function 'kotlin.also' call
      var this_0 = this.createSlotArray_10rtp5_k$(2);
      this.slots_1 = this_0;
      tmp = this_0;
    } else {
      var tmp_0;
      if (this.nCollectors_1 >= curSlots.length) {
        // Inline function 'kotlin.also' call
        var this_1 = copyOf(curSlots, imul(2, curSlots.length));
        this.slots_1 = this_1;
        tmp_0 = this_1;
      } else {
        tmp_0 = curSlots;
      }
      tmp = tmp_0;
    }
    var slots = tmp;
    var index = this.nextIndex_1;
    var slot;
    $l$loop: while (true) {
      var tmp0_elvis_lhs = slots[index];
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_2 = this.createSlot_mn6f4q_k$();
        slots[index] = this_2;
        tmp_1 = this_2;
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      slot = tmp_1;
      index = index + 1 | 0;
      if (index >= slots.length)
        index = 0;
      if ((slot instanceof AbstractSharedFlowSlot ? slot : THROW_CCE()).allocateLocked_z5itrq_k$(this))
        break $l$loop;
    }
    this.nextIndex_1 = index;
    this.nCollectors_1 = this.nCollectors_1 + 1 | 0;
    subscriptionCount = this._subscriptionCount_1;
    var slot_0 = slot;
    if (subscriptionCount == null)
      null;
    else
      subscriptionCount.increment_rp2k21_k$(1);
    return slot_0;
  };
  protoOf(AbstractSharedFlow).freeSlot_95hriy_k$ = function (slot) {
    var subscriptionCount;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    this.nCollectors_1 = this.nCollectors_1 - 1 | 0;
    subscriptionCount = this._subscriptionCount_1;
    if (this.nCollectors_1 === 0)
      this.nextIndex_1 = 0;
    var resumes = (slot instanceof AbstractSharedFlowSlot ? slot : THROW_CCE()).freeLocked_1gezd3_k$(this);
    var inductionVariable = 0;
    var last = resumes.length;
    while (inductionVariable < last) {
      var cont = resumes[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (cont == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        Companion_getInstance();
        var tmp$ret$4 = _Result___init__impl__xyqfz8(Unit_getInstance());
        cont.resumeWith_dtxwbr_k$(tmp$ret$4);
      }
    }
    if (subscriptionCount == null)
      null;
    else
      subscriptionCount.increment_rp2k21_k$(-1);
  };
  protoOf(AbstractSharedFlow).forEachSlotLocked_4hw8um_k$ = function (block) {
    if (this.nCollectors_1 === 0)
      return Unit_getInstance();
    var tmp0_safe_receiver = this.slots_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var inductionVariable = 0;
      var last = tmp0_safe_receiver.length;
      while (inductionVariable < last) {
        var element = tmp0_safe_receiver[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if (!(element == null))
          block(element);
      }
    }
  };
  function AbstractSharedFlowSlot() {
  }
  function SubscriptionCountStateFlow(initialValue) {
    SharedFlowImpl.call(this, 1, 2147483647, BufferOverflow_DROP_OLDEST_getInstance());
    this.tryEmit_ru0jrz_k$(initialValue);
  }
  protoOf(SubscriptionCountStateFlow).get_value_j01efc_k$ = function () {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    return this.get_lastReplayedLocked_pnaey7_k$();
  };
  protoOf(SubscriptionCountStateFlow).increment_rp2k21_k$ = function (delta) {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    return this.tryEmit_ru0jrz_k$(this.get_lastReplayedLocked_pnaey7_k$() + delta | 0);
  };
  var properties_initialized_AbstractSharedFlow_kt_2mpafr;
  function _init_properties_AbstractSharedFlow_kt__h2xygb() {
    if (!properties_initialized_AbstractSharedFlow_kt_2mpafr) {
      properties_initialized_AbstractSharedFlow_kt_2mpafr = true;
      // Inline function 'kotlin.arrayOfNulls' call
      EMPTY_RESUMES = Array(0);
    }
  }
  function FusibleFlow() {
  }
  function ChannelFlowOperatorImpl(flow, context, capacity, onBufferOverflow) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    capacity = capacity === VOID ? -3 : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    ChannelFlowOperator.call(this, flow, context, capacity, onBufferOverflow);
  }
  protoOf(ChannelFlowOperatorImpl).create_lydvvb_k$ = function (context, capacity, onBufferOverflow) {
    return new ChannelFlowOperatorImpl(this.flow_1, context, capacity, onBufferOverflow);
  };
  protoOf(ChannelFlowOperatorImpl).dropChannelOperators_b7m5cr_k$ = function () {
    return this.flow_1;
  };
  protoOf(ChannelFlowOperatorImpl).flowCollect_ki1wtf_k$ = function (collector, $completion) {
    return this.flow_1.collect_aksokr_k$(collector, $completion);
  };
  function collectWithContextUndispatched($this, collector, newContext, $completion) {
    // Inline function 'kotlin.js.getCoroutineContext' call
    var tmp$ret$0 = $completion.get_context_h02k06_k$();
    var originalContextCollector = withUndispatchedContextCollector(collector, tmp$ret$0);
    return withContextUndispatched(newContext, originalContextCollector, VOID, ChannelFlowOperator$collectWithContextUndispatched$slambda_0($this, null), $completion);
  }
  function ChannelFlowOperator$collectWithContextUndispatched$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelFlowOperator$collectWithContextUndispatched$slambda).invoke_ilgcjr_k$ = function (it, $completion) {
    var tmp = this.create_xc9ltn_k$(it, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ChannelFlowOperator$collectWithContextUndispatched$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_ilgcjr_k$((!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelFlowOperator$collectWithContextUndispatched$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this$0__1.flowCollect_ki1wtf_k$(this.it_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(ChannelFlowOperator$collectWithContextUndispatched$slambda).create_xc9ltn_k$ = function (it, completion) {
    var i = new ChannelFlowOperator$collectWithContextUndispatched$slambda(this.this$0__1, completion);
    i.it_1 = it;
    return i;
  };
  protoOf(ChannelFlowOperator$collectWithContextUndispatched$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_xc9ltn_k$((!(value == null) ? isInterface(value, FlowCollector) : false) ? value : THROW_CCE(), completion);
  };
  function ChannelFlowOperator$collectWithContextUndispatched$slambda_0(this$0, resultContinuation) {
    var i = new ChannelFlowOperator$collectWithContextUndispatched$slambda(this$0, resultContinuation);
    var l = function (it, $completion) {
      return i.invoke_ilgcjr_k$(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$_1(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  protoOf($collectCOROUTINE$_1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(7);
            if (this._this__u8e3s4__1.capacity_1 === -3) {
              var tmp_0 = this;
              tmp_0.collectContext0__1 = this.get_context_h02k06_k$();
              this.newContext1__1 = newCoroutineContext_0(this.collectContext0__1, this._this__u8e3s4__1.context_1);
              if (equals(this.newContext1__1, this.collectContext0__1)) {
                this.set_state_rjd8d0_k$(6);
                suspendResult = this._this__u8e3s4__1.flowCollect_ki1wtf_k$(this.collector_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.set_state_rjd8d0_k$(1);
                continue $sm;
              }
            } else {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

          case 1:
            if (equals(this.newContext1__1.get_y2st91_k$(Key_getInstance()), this.collectContext0__1.get_y2st91_k$(Key_getInstance()))) {
              this.set_state_rjd8d0_k$(5);
              suspendResult = collectWithContextUndispatched(this._this__u8e3s4__1, this.collector_1, this.newContext1__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            }

          case 2:
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            this.set_state_rjd8d0_k$(4);
            suspendResult = protoOf(ChannelFlow).collect_aksokr_k$.call(this._this__u8e3s4__1, this.collector_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            return Unit_getInstance();
          case 5:
            return Unit_getInstance();
          case 6:
            return Unit_getInstance();
          case 7:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 7) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function ChannelFlowOperator(flow, context, capacity, onBufferOverflow) {
    ChannelFlow.call(this, context, capacity, onBufferOverflow);
    this.flow_1 = flow;
  }
  protoOf(ChannelFlowOperator).get_flow_wom2yf_k$ = function () {
    return this.flow_1;
  };
  protoOf(ChannelFlowOperator).collectTo_qjwlth_k$ = function (scope, $completion) {
    return this.flowCollect_ki1wtf_k$(new SendingCollector(scope), $completion);
  };
  protoOf(ChannelFlowOperator).collect_aksokr_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$_1(this, collector, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ChannelFlowOperator).toString = function () {
    return toString(this.flow_1) + ' -> ' + protoOf(ChannelFlow).toString.call(this);
  };
  function ChannelFlow$_get_collectToFun_$slambda_j53z2e(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).invoke_c55cnc_k$ = function (it, $completion) {
    var tmp = this.create_8tn3fw_k$(it, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_c55cnc_k$((!(p1 == null) ? isInterface(p1, ProducerScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this$0__1.collectTo_qjwlth_k$(this.it_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).create_8tn3fw_k$ = function (it, completion) {
    var i = new ChannelFlow$_get_collectToFun_$slambda_j53z2e(this.this$0__1, completion);
    i.it_1 = it;
    return i;
  };
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).create_wyq9v6_k$ = function (value, completion) {
    return this.create_8tn3fw_k$((!(value == null) ? isInterface(value, ProducerScope) : false) ? value : THROW_CCE(), completion);
  };
  function ChannelFlow$_get_collectToFun_$slambda_j53z2e_0(this$0, resultContinuation) {
    var i = new ChannelFlow$_get_collectToFun_$slambda_j53z2e(this$0, resultContinuation);
    var l = function (it, $completion) {
      return i.invoke_c55cnc_k$(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ChannelFlow$collect$slambda($collector, this$0, resultContinuation) {
    this.$collector_1 = $collector;
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelFlow$collect$slambda).invoke_d9fzmj_k$ = function ($this$coroutineScope, $completion) {
    var tmp = this.create_rcuf4x_k$($this$coroutineScope, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ChannelFlow$collect$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelFlow$collect$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = emitAll(this.$collector_1, this.this$0__1.produceImpl_qjsv5i_k$(this.$this$coroutineScope_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(ChannelFlow$collect$slambda).create_rcuf4x_k$ = function ($this$coroutineScope, completion) {
    var i = new ChannelFlow$collect$slambda(this.$collector_1, this.this$0__1, completion);
    i.$this$coroutineScope_1 = $this$coroutineScope;
    return i;
  };
  protoOf(ChannelFlow$collect$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function ChannelFlow$collect$slambda_0($collector, this$0, resultContinuation) {
    var i = new ChannelFlow$collect$slambda($collector, this$0, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.invoke_d9fzmj_k$($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ChannelFlow(context, capacity, onBufferOverflow) {
    this.context_1 = context;
    this.capacity_1 = capacity;
    this.onBufferOverflow_1 = onBufferOverflow;
    // Inline function 'kotlinx.coroutines.assert' call
  }
  protoOf(ChannelFlow).get_context_h02k06_k$ = function () {
    return this.context_1;
  };
  protoOf(ChannelFlow).get_capacity_wxbgcd_k$ = function () {
    return this.capacity_1;
  };
  protoOf(ChannelFlow).get_onBufferOverflow_51en86_k$ = function () {
    return this.onBufferOverflow_1;
  };
  protoOf(ChannelFlow).get_collectToFun_6oxkuu_k$ = function () {
    return ChannelFlow$_get_collectToFun_$slambda_j53z2e_0(this, null);
  };
  protoOf(ChannelFlow).get_produceCapacity_futzxg_k$ = function () {
    return this.capacity_1 === -3 ? -2 : this.capacity_1;
  };
  protoOf(ChannelFlow).dropChannelOperators_b7m5cr_k$ = function () {
    return null;
  };
  protoOf(ChannelFlow).fuse_gny1ac_k$ = function (context, capacity, onBufferOverflow) {
    // Inline function 'kotlinx.coroutines.assert' call
    var newContext = context.plus_s13ygv_k$(this.context_1);
    var newCapacity;
    var newOverflow;
    if (!onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance())) {
      newCapacity = capacity;
      newOverflow = onBufferOverflow;
    } else {
      var tmp;
      if (this.capacity_1 === -3) {
        tmp = capacity;
      } else if (capacity === -3) {
        tmp = this.capacity_1;
      } else if (this.capacity_1 === -2) {
        tmp = capacity;
      } else if (capacity === -2) {
        tmp = this.capacity_1;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        // Inline function 'kotlinx.coroutines.assert' call
        var sum = this.capacity_1 + capacity | 0;
        tmp = sum >= 0 ? sum : 2147483647;
      }
      newCapacity = tmp;
      newOverflow = this.onBufferOverflow_1;
    }
    if (equals(newContext, this.context_1) && newCapacity === this.capacity_1 && newOverflow.equals(this.onBufferOverflow_1))
      return this;
    return this.create_lydvvb_k$(newContext, newCapacity, newOverflow);
  };
  protoOf(ChannelFlow).produceImpl_qjsv5i_k$ = function (scope) {
    return produce(scope, this.context_1, this.get_produceCapacity_futzxg_k$(), this.onBufferOverflow_1, CoroutineStart_ATOMIC_getInstance(), VOID, this.get_collectToFun_6oxkuu_k$());
  };
  protoOf(ChannelFlow).collect_aksokr_k$ = function (collector, $completion) {
    return coroutineScope(ChannelFlow$collect$slambda_0(collector, this, null), $completion);
  };
  protoOf(ChannelFlow).additionalToStringProps_j3cp6l_k$ = function () {
    return null;
  };
  protoOf(ChannelFlow).toString = function () {
    var props = ArrayList_init_$Create$(4);
    var tmp0_safe_receiver = this.additionalToStringProps_j3cp6l_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      props.add_utx5q5_k$(tmp0_safe_receiver);
    }
    if (!(this.context_1 === EmptyCoroutineContext_getInstance())) {
      props.add_utx5q5_k$('context=' + toString(this.context_1));
    }
    if (!(this.capacity_1 === -3)) {
      props.add_utx5q5_k$('capacity=' + this.capacity_1);
    }
    if (!this.onBufferOverflow_1.equals(BufferOverflow_SUSPEND_getInstance())) {
      props.add_utx5q5_k$('onBufferOverflow=' + this.onBufferOverflow_1.toString());
    }
    return get_classSimpleName(this) + '[' + joinToString(props, ', ') + ']';
  };
  function withUndispatchedContextCollector(_this__u8e3s4, emitContext) {
    var tmp;
    var tmp_0;
    if (_this__u8e3s4 instanceof SendingCollector) {
      tmp_0 = true;
    } else {
      tmp_0 = _this__u8e3s4 instanceof NopCollector;
    }
    if (tmp_0) {
      tmp = _this__u8e3s4;
    } else {
      tmp = new UndispatchedContextCollector(_this__u8e3s4, emitContext);
    }
    return tmp;
  }
  function withContextUndispatched(newContext, value, countOrElement, block, $completion) {
    countOrElement = countOrElement === VOID ? threadContextElements(newContext) : countOrElement;
    // Inline function 'kotlinx.coroutines.withCoroutineContext' call
    // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
    var completion = new StackFrameContinuation($completion, newContext);
    return startCoroutineUninterceptedOrReturnNonGeneratorVersion(block, value, completion);
  }
  function _get_emitContext__5m2ab9($this) {
    return $this.emitContext_1;
  }
  function _get_countOrElement__mr0q9r($this) {
    return $this.countOrElement_1;
  }
  function _get_emitRef__jc7zqn($this) {
    return $this.emitRef_1;
  }
  function UndispatchedContextCollector$emitRef$slambda($downstream, resultContinuation) {
    this.$downstream_1 = $downstream;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UndispatchedContextCollector$emitRef$slambda).invoke_oz8tte_k$ = function (it, $completion) {
    var tmp = this.create_zam77m_k$(it, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(UndispatchedContextCollector$emitRef$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_oz8tte_k$((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(UndispatchedContextCollector$emitRef$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.$downstream_1.emit_t92u1f_k$(this.it_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(UndispatchedContextCollector$emitRef$slambda).create_zam77m_k$ = function (it, completion) {
    var i = new UndispatchedContextCollector$emitRef$slambda(this.$downstream_1, completion);
    i.it_1 = it;
    return i;
  };
  protoOf(UndispatchedContextCollector$emitRef$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_zam77m_k$((value == null ? true : !(value == null)) ? value : THROW_CCE(), completion);
  };
  function UndispatchedContextCollector$emitRef$slambda_0($downstream, resultContinuation) {
    var i = new UndispatchedContextCollector$emitRef$slambda($downstream, resultContinuation);
    var l = function (it, $completion) {
      return i.invoke_oz8tte_k$(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function UndispatchedContextCollector(downstream, emitContext) {
    this.emitContext_1 = emitContext;
    this.countOrElement_1 = threadContextElements(this.emitContext_1);
    var tmp = this;
    tmp.emitRef_1 = UndispatchedContextCollector$emitRef$slambda_0(downstream, null);
  }
  protoOf(UndispatchedContextCollector).emit_t92u1f_k$ = function (value, $completion) {
    return withContextUndispatched(this.emitContext_1, value, this.countOrElement_1, this.emitRef_1, $completion);
  };
  function _get_uCont__b1l76e($this) {
    return $this.uCont_1;
  }
  function StackFrameContinuation(uCont, context) {
    this.uCont_1 = uCont;
    this.context_1 = context;
  }
  protoOf(StackFrameContinuation).get_context_h02k06_k$ = function () {
    return this.context_1;
  };
  protoOf(StackFrameContinuation).get_callerFrame_pfdb95_k$ = function () {
    var tmp = this.uCont_1;
    return isInterface(tmp, CoroutineStackFrame) ? tmp : null;
  };
  protoOf(StackFrameContinuation).resumeWith_dtxwbr_k$ = function (result) {
    this.uCont_1.resumeWith_dtxwbr_k$(result);
  };
  protoOf(StackFrameContinuation).getStackTraceElement_um8m53_k$ = function () {
    return null;
  };
  function checkOwnership(_this__u8e3s4, owner) {
    if (!(_this__u8e3s4.get_owner_iwkx3e_k$() === owner))
      throw _this__u8e3s4;
  }
  function NopCollector() {
    NopCollector_instance = this;
  }
  protoOf(NopCollector).emit_53hnst_k$ = function (value, $completion) {
    return Unit_getInstance();
  };
  protoOf(NopCollector).emit_t92u1f_k$ = function (value, $completion) {
    return this.emit_53hnst_k$((value == null ? true : !(value == null)) ? value : THROW_CCE(), $completion);
  };
  var NopCollector_instance;
  function NopCollector_getInstance() {
    if (NopCollector_instance == null)
      new NopCollector();
    return NopCollector_instance;
  }
  function get_NULL() {
    _init_properties_NullSurrogate_kt__n2yti9();
    return NULL;
  }
  var NULL;
  function get_UNINITIALIZED() {
    _init_properties_NullSurrogate_kt__n2yti9();
    return UNINITIALIZED;
  }
  var UNINITIALIZED;
  function get_DONE() {
    _init_properties_NullSurrogate_kt__n2yti9();
    return DONE;
  }
  var DONE;
  var properties_initialized_NullSurrogate_kt_39v8bl;
  function _init_properties_NullSurrogate_kt__n2yti9() {
    if (!properties_initialized_NullSurrogate_kt_39v8bl) {
      properties_initialized_NullSurrogate_kt_39v8bl = true;
      NULL = new Symbol('NULL');
      UNINITIALIZED = new Symbol('UNINITIALIZED');
      DONE = new Symbol('DONE');
    }
  }
  function unsafeFlow(block) {
    return new unsafeFlow$1(block);
  }
  function checkContext(_this__u8e3s4, currentContext) {
    var result = currentContext.fold_j2vaxd_k$(0, checkContext$lambda(_this__u8e3s4));
    if (!(result === _this__u8e3s4.get_collectContextSize_a6jz4u_k$())) {
      // Inline function 'kotlin.error' call
      var message = 'Flow invariant is violated:\n' + ('\t\tFlow was collected in ' + toString(_this__u8e3s4.get_collectContext_68p07z_k$()) + ',\n') + ('\t\tbut emission happened in ' + toString(currentContext) + '.\n') + "\t\tPlease refer to 'flow' documentation or use 'flowOn' instead";
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function transitiveCoroutineParent(_this__u8e3s4, collectJob) {
    var $this = _this__u8e3s4;
    var collectJob_0 = collectJob;
    $l$1: do {
      $l$0: do {
        if ($this === null)
          return null;
        if ($this === collectJob_0)
          return $this;
        if (!($this instanceof ScopeCoroutine))
          return $this;
        var tmp0 = $this.get_parent_hy4reb_k$();
        var tmp1 = collectJob_0;
        $this = tmp0;
        collectJob_0 = tmp1;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function unsafeFlow$1($block) {
    this.$block_1 = $block;
  }
  protoOf(unsafeFlow$1).collect_aksokr_k$ = function (collector, $completion) {
    return this.$block_1(collector, $completion);
  };
  function checkContext$lambda($this_checkContext) {
    return function (count, element) {
      var key = element.get_key_18j28a_k$();
      var collectElement = $this_checkContext.get_collectContext_68p07z_k$().get_y2st91_k$(key);
      var tmp;
      if (!(key === Key_getInstance_2())) {
        return !(element === collectElement) ? -2147483648 : count + 1 | 0;
      }
      var collectJob = (collectElement == null ? true : isInterface(collectElement, Job)) ? collectElement : THROW_CCE();
      var emissionParentJob = transitiveCoroutineParent(isInterface(element, Job) ? element : THROW_CCE(), collectJob);
      var tmp_0;
      if (!(emissionParentJob === collectJob)) {
        var message = 'Flow invariant is violated:\n\t\tEmission from another coroutine is detected.\n' + ('\t\tChild of ' + toString_0(emissionParentJob) + ', expected child of ' + toString_0(collectJob) + '.\n') + '\t\tFlowCollector is not thread-safe and concurrent emissions are prohibited.\n' + "\t\tTo mitigate this restriction please use 'channelFlow' builder instead of 'flow'";
        throw IllegalStateException_init_$Create$(toString(message));
      }
      return collectJob == null ? count : count + 1 | 0;
    };
  }
  function _get_channel__c6e3yq($this) {
    return $this.channel_1;
  }
  function SendingCollector(channel) {
    this.channel_1 = channel;
  }
  protoOf(SendingCollector).emit_t92u1f_k$ = function (value, $completion) {
    return this.channel_1.send_44jogj_k$(value, $completion);
  };
  function CancellableFlow() {
  }
  function get_defaultKeySelector() {
    _init_properties_Distinct_kt__4eindw();
    return defaultKeySelector;
  }
  var defaultKeySelector;
  function get_defaultAreEquivalent() {
    _init_properties_Distinct_kt__4eindw();
    return defaultAreEquivalent;
  }
  var defaultAreEquivalent;
  function defaultKeySelector$lambda(it) {
    _init_properties_Distinct_kt__4eindw();
    return it;
  }
  function defaultAreEquivalent$lambda(old, new_0) {
    _init_properties_Distinct_kt__4eindw();
    return equals(old, new_0);
  }
  var properties_initialized_Distinct_kt_uy8c72;
  function _init_properties_Distinct_kt__4eindw() {
    if (!properties_initialized_Distinct_kt_uy8c72) {
      properties_initialized_Distinct_kt_uy8c72 = true;
      defaultKeySelector = defaultKeySelector$lambda;
      defaultAreEquivalent = defaultAreEquivalent$lambda;
    }
  }
  function ensureActive_1(_this__u8e3s4) {
    if (_this__u8e3s4 instanceof ThrowingCollector)
      throw _this__u8e3s4.e_1;
  }
  function ThrowingCollector(e) {
    this.e_1 = e;
  }
  protoOf(ThrowingCollector).get_e_1mhr5o_k$ = function () {
    return this.e_1;
  };
  protoOf(ThrowingCollector).emit_53hnst_k$ = function (value, $completion) {
    throw this.e_1;
  };
  protoOf(ThrowingCollector).emit_t92u1f_k$ = function (value, $completion) {
    return this.emit_53hnst_k$((value == null ? true : !(value == null)) ? value : THROW_CCE(), $completion);
  };
  function takeWhile(_this__u8e3s4, predicate) {
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    return new takeWhile$$inlined$unsafeFlow$1(_this__u8e3s4, predicate);
  }
  function collectWhile(_this__u8e3s4, predicate, $completion) {
    var tmp = new $collectWhileCOROUTINE$(_this__u8e3s4, predicate, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function $emitCOROUTINE$(_this__u8e3s4, value, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.value_1 = value;
  }
  protoOf($emitCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_0 = this;
            tmp_0.tmp00__1 = this.value_1;
            this.value1__1 = this.tmp00__1;
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.$predicate_1(this.value1__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (suspendResult) {
              this.set_state_rjd8d0_k$(2);
              suspendResult = this._this__u8e3s4__1.$$this$unsafeFlow_1.emit_t92u1f_k$(this.value1__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1 = this;
              tmp_1.WHEN_RESULT2__1 = false;
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

          case 2:
            this.WHEN_RESULT2__1 = true;
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            var ARGUMENT = this.WHEN_RESULT2__1;
            if (!ARGUMENT) {
              throw new AbortFlowException(this._this__u8e3s4__1);
            } else {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

          case 4:
            return Unit_getInstance();
          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function takeWhile$$inlined$unsafeFlow$1$collect$2($predicate, $$this$unsafeFlow) {
    this.$predicate_1 = $predicate;
    this.$$this$unsafeFlow_1 = $$this$unsafeFlow;
  }
  protoOf(takeWhile$$inlined$unsafeFlow$1$collect$2).emit_53hnst_k$ = function (value, $completion) {
    var tmp = new $emitCOROUTINE$(this, value, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(takeWhile$$inlined$unsafeFlow$1$collect$2).emit_t92u1f_k$ = function (value, $completion) {
    return this.emit_53hnst_k$((value == null ? true : !(value == null)) ? value : THROW_CCE(), $completion);
  };
  function $collectCOROUTINE$_2(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  protoOf($collectCOROUTINE$_2).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_0 = this;
            tmp_0.tmp00__1 = this.collector_1;
            this.$this$unsafeFlow1__1 = this.tmp00__1;
            var tmp_1 = this;
            tmp_1.tmp02__1 = this._this__u8e3s4__1.$this_takeWhile_1;
            this.this3__1 = this.tmp02__1;
            var tmp_2 = this;
            tmp_2.collector4__1 = new takeWhile$$inlined$unsafeFlow$1$collect$2(this._this__u8e3s4__1.$predicate_1, this.$this$unsafeFlow1__1);
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this3__1.collect_aksokr_k$(this.collector4__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_3 = this.get_exception_x0n6w6_k$();
            if (tmp_3 instanceof AbortFlowException) {
              var e = this.get_exception_x0n6w6_k$();
              checkOwnership(e, this.collector4__1);
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_fex74n_k$(3);
            return Unit_getInstance();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  function takeWhile$$inlined$unsafeFlow$1($this_takeWhile, $predicate) {
    this.$this_takeWhile_1 = $this_takeWhile;
    this.$predicate_1 = $predicate;
  }
  protoOf(takeWhile$$inlined$unsafeFlow$1).collect_ooju95_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$_2(this, collector, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(takeWhile$$inlined$unsafeFlow$1).collect_aksokr_k$ = function (collector, $completion) {
    return this.collect_ooju95_k$(collector, $completion);
  };
  function $emitCOROUTINE$_0(_this__u8e3s4, value, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.value_1 = value;
  }
  protoOf($emitCOROUTINE$_0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.$predicate_1(this.value_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            if (!ARGUMENT) {
              throw new AbortFlowException(this._this__u8e3s4__1);
            } else {
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            }

          case 2:
            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function collectWhile$collector$1($predicate) {
    this.$predicate_1 = $predicate;
  }
  protoOf(collectWhile$collector$1).emit_t92u1f_k$ = function (value, $completion) {
    var tmp = new $emitCOROUTINE$_0(this, value, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function $collectWhileCOROUTINE$(_this__u8e3s4, predicate, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.predicate_1 = predicate;
  }
  protoOf($collectWhileCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_0 = this;
            tmp_0.collector0__1 = new collectWhile$collector$1(this.predicate_1);
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.collect_aksokr_k$(this.collector0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof AbortFlowException) {
              var e = this.get_exception_x0n6w6_k$();
              checkOwnership(e, this.collector0__1);
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_fex74n_k$(3);
            return Unit_getInstance();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  function get_DEFAULT_CONCURRENCY() {
    _init_properties_Merge_kt__cbpr96();
    return DEFAULT_CONCURRENCY;
  }
  var DEFAULT_CONCURRENCY;
  function get_DEFAULT_CONCURRENCY_PROPERTY_NAME() {
    return DEFAULT_CONCURRENCY_PROPERTY_NAME;
  }
  var DEFAULT_CONCURRENCY_PROPERTY_NAME;
  var properties_initialized_Merge_kt_dhn6vs;
  function _init_properties_Merge_kt__cbpr96() {
    if (!properties_initialized_Merge_kt_dhn6vs) {
      properties_initialized_Merge_kt_dhn6vs = true;
      DEFAULT_CONCURRENCY = systemProp('kotlinx.coroutines.flow.defaultConcurrency', 16, 1, 2147483647);
    }
  }
  function _get_collector__klro10($this) {
    return $this.collector_1;
  }
  function _get_action__ikx8yd($this) {
    return $this.action_1;
  }
  function $onSubscriptionCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($onSubscriptionCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(7);
            var tmp_0 = this;
            tmp_0.safeCollector0__1 = new SafeCollector(this._this__u8e3s4__1.collector_1, this.get_context_h02k06_k$());
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(6);
            this.set_state_rjd8d0_k$(2);
            suspendResult = this._this__u8e3s4__1.action_1(this.safeCollector0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.tmp$ret$01__1 = suspendResult;
            this.set_exceptionState_fex74n_k$(7);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            this.set_exceptionState_fex74n_k$(7);
            this.safeCollector0__1.releaseIntercepted_5cyqh6_k$();
            var tmp_1 = this._this__u8e3s4__1.collector_1;
            if (tmp_1 instanceof SubscribedFlowCollector) {
              this.set_state_rjd8d0_k$(4);
              suspendResult = this._this__u8e3s4__1.collector_1.onSubscription_q7qr5n_k$(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(5);
              continue $sm;
            }

          case 4:
            this.set_state_rjd8d0_k$(5);
            continue $sm;
          case 5:
            return Unit_getInstance();
          case 6:
            this.set_exceptionState_fex74n_k$(7);
            var t = this.get_exception_x0n6w6_k$();
            this.safeCollector0__1.releaseIntercepted_5cyqh6_k$();
            throw t;
          case 7:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 7) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function SubscribedFlowCollector(collector, action) {
    this.collector_1 = collector;
    this.action_1 = action;
  }
  protoOf(SubscribedFlowCollector).emit_t92u1f_k$ = function (value, $completion) {
    return this.collector_1.emit_t92u1f_k$(value, $completion);
  };
  protoOf(SubscribedFlowCollector).onSubscription_q7qr5n_k$ = function ($completion) {
    var tmp = new $onSubscriptionCOROUTINE$(this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function collect(_this__u8e3s4, $completion) {
    return _this__u8e3s4.collect_aksokr_k$(NopCollector_getInstance(), $completion);
  }
  function first(_this__u8e3s4, predicate, $completion) {
    var tmp = new $firstCOROUTINE$(_this__u8e3s4, predicate, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function $emitCOROUTINE$_1(_this__u8e3s4, value, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.value_1 = value;
  }
  protoOf($emitCOROUTINE$_1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_0 = this;
            tmp_0.tmp00__1 = this.value_1;
            this.it1__1 = this.tmp00__1;
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.$predicate_1(this.it1__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (suspendResult) {
              var tmp_1 = this;
              this._this__u8e3s4__1.$result_1._v = this.it1__1;
              tmp_1.WHEN_RESULT2__1 = false;
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            } else {
              var tmp_2 = this;
              tmp_2.WHEN_RESULT2__1 = true;
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            }

          case 2:
            var ARGUMENT = this.WHEN_RESULT2__1;
            if (!ARGUMENT) {
              throw new AbortFlowException(this._this__u8e3s4__1);
            } else {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

          case 3:
            return Unit_getInstance();
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function first$$inlined$collectWhile$1($predicate, $result) {
    this.$predicate_1 = $predicate;
    this.$result_1 = $result;
  }
  protoOf(first$$inlined$collectWhile$1).emit_53hnst_k$ = function (value, $completion) {
    var tmp = new $emitCOROUTINE$_1(this, value, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(first$$inlined$collectWhile$1).emit_t92u1f_k$ = function (value, $completion) {
    return this.emit_53hnst_k$((value == null ? true : !(value == null)) ? value : THROW_CCE(), $completion);
  };
  function $firstCOROUTINE$(_this__u8e3s4, predicate, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.predicate_1 = predicate;
  }
  protoOf($firstCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.result0__1 = {_v: get_NULL()};
            var tmp_0 = this;
            tmp_0.tmp01__1 = this._this__u8e3s4__1;
            this.this2__1 = this.tmp01__1;
            var tmp_1 = this;
            tmp_1.collector3__1 = new first$$inlined$collectWhile$1(this.predicate_1, this.result0__1);
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this2__1.collect_aksokr_k$(this.collector3__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_2 = this.get_exception_x0n6w6_k$();
            if (tmp_2 instanceof AbortFlowException) {
              var e = this.get_exception_x0n6w6_k$();
              checkOwnership(e, this.collector3__1);
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_fex74n_k$(3);
            if (this.result0__1._v === get_NULL())
              throw NoSuchElementException_init_$Create$_0('Expected at least one element matching the predicate ' + toString(this.predicate_1));
            var tmp_3 = this.result0__1._v;
            return (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  function get_NO_DECISION() {
    _init_properties_Atomic_kt__5uvtv9();
    return NO_DECISION;
  }
  var NO_DECISION;
  function OpDescriptor() {
  }
  protoOf(OpDescriptor).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  function _get__consensus__nhzvjh($this) {
    return $this._consensus_1;
  }
  function decide($this, decision) {
    // Inline function 'kotlinx.coroutines.assert' call
    var current = $this._consensus_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    if (!(current === get_NO_DECISION()))
      return current;
    if ($this._consensus_1.atomicfu$compareAndSet(get_NO_DECISION(), decision))
      return decision;
    return $this._consensus_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  }
  function AtomicOp() {
    OpDescriptor.call(this);
    this._consensus_1 = atomic$ref$1(get_NO_DECISION());
  }
  protoOf(AtomicOp).get_atomicOp_p2pkuj_k$ = function () {
    return this;
  };
  protoOf(AtomicOp).perform_8emi3i_k$ = function (affected) {
    var decision = this._consensus_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    if (decision === get_NO_DECISION()) {
      decision = decide(this, this.prepare_226la0_k$((affected == null ? true : !(affected == null)) ? affected : THROW_CCE()));
    }
    this.complete_4av0gr_k$((affected == null ? true : !(affected == null)) ? affected : THROW_CCE(), decision);
    return decision;
  };
  var properties_initialized_Atomic_kt_vn225v;
  function _init_properties_Atomic_kt__5uvtv9() {
    if (!properties_initialized_Atomic_kt_vn225v) {
      properties_initialized_Atomic_kt_vn225v = true;
      NO_DECISION = new Symbol('NO_DECISION');
    }
  }
  function set_value(_this__u8e3s4, value) {
    return _this__u8e3s4.set_tg4fwj_k$(value);
  }
  function get_value(_this__u8e3s4) {
    return _this__u8e3s4.get_26vq_k$();
  }
  function loop(_this__u8e3s4, action) {
    while (true) {
      action(_this__u8e3s4, get_value(_this__u8e3s4));
    }
  }
  function get_CLOSED() {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    return CLOSED;
  }
  var CLOSED;
  function _get_cleanedAndPointers__hkgc2u($this) {
    return $this.cleanedAndPointers_1;
  }
  function Segment(id, prev, pointers) {
    ConcurrentLinkedListNode.call(this, prev);
    this.id_1 = id;
    this.cleanedAndPointers_1 = atomic$int$1(pointers << 16);
  }
  protoOf(Segment).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(Segment).get_isRemoved_gzdz59_k$ = function () {
    return this.cleanedAndPointers_1.get_kotlinx$atomicfu$value_vi2am5_k$() === this.get_numberOfSlots_n3mgwk_k$() && !this.get_isTail_ew6gmb_k$();
  };
  protoOf(Segment).tryIncPointers_6zsfpw_k$ = function () {
    var tmp0 = this.cleanedAndPointers_1;
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.internal.addConditionally' call
      while (true) {
        var cur = tmp0.get_kotlinx$atomicfu$value_vi2am5_k$();
        if (!(!(cur === this.get_numberOfSlots_n3mgwk_k$()) || this.get_isTail_ew6gmb_k$())) {
          tmp$ret$1 = false;
          break $l$block_0;
        }
        if (tmp0.atomicfu$compareAndSet(cur, cur + 65536 | 0)) {
          tmp$ret$1 = true;
          break $l$block_0;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(Segment).decPointers_vy306j_k$ = function () {
    return this.cleanedAndPointers_1.atomicfu$addAndGet(-65536) === this.get_numberOfSlots_n3mgwk_k$() && !this.get_isTail_ew6gmb_k$();
  };
  protoOf(Segment).onSlotCleaned_do6lqz_k$ = function () {
    if (this.cleanedAndPointers_1.atomicfu$incrementAndGet() === this.get_numberOfSlots_n3mgwk_k$()) {
      this.remove_ldkf9o_k$();
    }
  };
  function close(_this__u8e3s4) {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    var cur = _this__u8e3s4;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed' call
      var this_0 = cur;
      // Inline function 'kotlin.let' call
      var it = access$_get_nextOrClosed__ywzond(this_0);
      var tmp;
      if (it === access$_get_CLOSED_$tConcurrentLinkedListKt_wmtpdy()) {
        return cur;
      } else {
        tmp = (it == null ? true : it instanceof ConcurrentLinkedListNode) ? it : THROW_CCE();
      }
      var next = tmp;
      if (next === null) {
        if (cur.markAsClosed_42mcdn_k$())
          return cur;
      } else {
        cur = next;
      }
    }
  }
  function _SegmentOrClosed___init__impl__jnexvb(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function _SegmentOrClosed___get_isClosed__impl__qmxmlo($this) {
    return _get_value__a43j40($this) === get_CLOSED();
  }
  function _SegmentOrClosed___get_segment__impl__jvcr9l($this) {
    var tmp;
    if (_get_value__a43j40($this) === get_CLOSED()) {
      var message = 'Does not contain segment';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      var tmp_0 = _get_value__a43j40($this);
      tmp = tmp_0 instanceof Segment ? tmp_0 : THROW_CCE();
    }
    return tmp;
  }
  function SegmentOrClosed__toString_impl_pzb2an($this) {
    return 'SegmentOrClosed(value=' + toString_0($this) + ')';
  }
  function SegmentOrClosed__hashCode_impl_4855hs($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function SegmentOrClosed__equals_impl_6erq1g($this, other) {
    if (!(other instanceof SegmentOrClosed))
      return false;
    var tmp0_other_with_cast = other instanceof SegmentOrClosed ? other.value_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function SegmentOrClosed(value) {
    this.value_1 = value;
  }
  protoOf(SegmentOrClosed).toString = function () {
    return SegmentOrClosed__toString_impl_pzb2an(this.value_1);
  };
  protoOf(SegmentOrClosed).hashCode = function () {
    return SegmentOrClosed__hashCode_impl_4855hs(this.value_1);
  };
  protoOf(SegmentOrClosed).equals = function (other) {
    return SegmentOrClosed__equals_impl_6erq1g(this.value_1, other);
  };
  function findSegmentAndMoveForward(_this__u8e3s4, id, startFrom, createNewSegment) {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    while (true) {
      var s = findSegmentInternal(startFrom, id, createNewSegment);
      var tmp;
      if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
        tmp = true;
      } else {
        var tmp2 = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
        var tmp$ret$0;
        $l$block_1: {
          // Inline function 'kotlinx.coroutines.internal.moveForward' call
          while (true) {
            var cur = _this__u8e3s4.get_kotlinx$atomicfu$value_vi2am5_k$();
            if (cur.id_1.compareTo_9jj042_k$(tmp2.id_1) >= 0) {
              tmp$ret$0 = true;
              break $l$block_1;
            }
            if (!tmp2.tryIncPointers_6zsfpw_k$()) {
              tmp$ret$0 = false;
              break $l$block_1;
            }
            if (_this__u8e3s4.atomicfu$compareAndSet(cur, tmp2)) {
              if (cur.decPointers_vy306j_k$()) {
                cur.remove_ldkf9o_k$();
              }
              tmp$ret$0 = true;
              break $l$block_1;
            }
            if (tmp2.decPointers_vy306j_k$()) {
              tmp2.remove_ldkf9o_k$();
            }
          }
          tmp$ret$0 = Unit_getInstance();
        }
        tmp = tmp$ret$0;
      }
      if (tmp)
        return s;
    }
  }
  function moveForward(_this__u8e3s4, to) {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    while (true) {
      var cur = _this__u8e3s4.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (cur.id_1.compareTo_9jj042_k$(to.id_1) >= 0)
        return true;
      if (!to.tryIncPointers_6zsfpw_k$())
        return false;
      if (_this__u8e3s4.atomicfu$compareAndSet(cur, to)) {
        if (cur.decPointers_vy306j_k$()) {
          cur.remove_ldkf9o_k$();
        }
        return true;
      }
      if (to.decPointers_vy306j_k$()) {
        to.remove_ldkf9o_k$();
      }
    }
    return Unit_getInstance();
  }
  function _get__next__kt3wsh($this) {
    return $this._next_1;
  }
  function _get__prev__krsetd($this) {
    return $this._prev_1;
  }
  function _get_nextOrClosed__w0gmuv($this) {
    return $this._next_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  }
  function _get_aliveSegmentLeft__mr4ndu($this) {
    var cur = $this.get_prev_wosl18_k$();
    while (!(cur === null) && cur.get_isRemoved_gzdz59_k$())
      cur = cur._prev_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    return cur;
  }
  function _get_aliveSegmentRight__7ulr0b($this) {
    // Inline function 'kotlinx.coroutines.assert' call
    var cur = ensureNotNull($this.get_next_wor1vg_k$());
    while (cur.get_isRemoved_gzdz59_k$()) {
      var tmp0_elvis_lhs = cur.get_next_wor1vg_k$();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return cur;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      cur = tmp;
    }
    return cur;
  }
  function access$_get_nextOrClosed__ywzond($this) {
    return _get_nextOrClosed__w0gmuv($this);
  }
  function ConcurrentLinkedListNode(prev) {
    this._next_1 = atomic$ref$1(null);
    this._prev_1 = atomic$ref$1(prev);
  }
  protoOf(ConcurrentLinkedListNode).nextOrIfClosed_u0tsfv_k$ = function (onClosedAction) {
    // Inline function 'kotlin.let' call
    var it = access$_get_nextOrClosed__ywzond(this);
    var tmp;
    if (it === access$_get_CLOSED_$tConcurrentLinkedListKt_wmtpdy()) {
      onClosedAction();
      tmp = throwKotlinNothingValueException();
    } else {
      tmp = (it == null ? true : it instanceof ConcurrentLinkedListNode) ? it : THROW_CCE();
    }
    return tmp;
  };
  protoOf(ConcurrentLinkedListNode).get_next_wor1vg_k$ = function () {
    // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed' call
    // Inline function 'kotlin.let' call
    var it = access$_get_nextOrClosed__ywzond(this);
    var tmp;
    if (it === access$_get_CLOSED_$tConcurrentLinkedListKt_wmtpdy()) {
      return null;
    } else {
      tmp = (it == null ? true : it instanceof ConcurrentLinkedListNode) ? it : THROW_CCE();
    }
    return tmp;
  };
  protoOf(ConcurrentLinkedListNode).trySetNext_31oiph_k$ = function (value) {
    return this._next_1.atomicfu$compareAndSet(null, value);
  };
  protoOf(ConcurrentLinkedListNode).get_isTail_ew6gmb_k$ = function () {
    return this.get_next_wor1vg_k$() == null;
  };
  protoOf(ConcurrentLinkedListNode).get_prev_wosl18_k$ = function () {
    return this._prev_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  };
  protoOf(ConcurrentLinkedListNode).cleanPrev_rn0kss_k$ = function () {
    // Inline function 'kotlinx.atomicfu.AtomicRef.lazySet' call
    this._prev_1.set_kotlinx$atomicfu$value_508e3y_k$(null);
  };
  protoOf(ConcurrentLinkedListNode).markAsClosed_42mcdn_k$ = function () {
    return this._next_1.atomicfu$compareAndSet(null, get_CLOSED());
  };
  protoOf(ConcurrentLinkedListNode).remove_ldkf9o_k$ = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.get_isTail_ew6gmb_k$())
      return Unit_getInstance();
    $l$loop_0: while (true) {
      var prev = _get_aliveSegmentLeft__mr4ndu(this);
      var next = _get_aliveSegmentRight__7ulr0b(this);
      var tmp0 = next._prev_1;
      $l$block: {
        // Inline function 'kotlinx.atomicfu.update' call
        while (true) {
          var cur = tmp0.get_kotlinx$atomicfu$value_vi2am5_k$();
          var upd = cur === null ? null : prev;
          if (tmp0.atomicfu$compareAndSet(cur, upd)) {
            break $l$block;
          }
        }
      }
      if (!(prev === null)) {
        prev._next_1.set_kotlinx$atomicfu$value_508e3y_k$(next);
      }
      if (next.get_isRemoved_gzdz59_k$() && !next.get_isTail_ew6gmb_k$())
        continue $l$loop_0;
      if (!(prev === null) && prev.get_isRemoved_gzdz59_k$())
        continue $l$loop_0;
      return Unit_getInstance();
    }
  };
  function get_POINTERS_SHIFT() {
    return POINTERS_SHIFT;
  }
  var POINTERS_SHIFT;
  function addConditionally(_this__u8e3s4, delta, condition) {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    while (true) {
      var cur = _this__u8e3s4.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (!condition(cur))
        return false;
      if (_this__u8e3s4.atomicfu$compareAndSet(cur, cur + delta | 0))
        return true;
    }
  }
  function findSegmentInternal(_this__u8e3s4, id, createNewSegment) {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    var cur = _this__u8e3s4;
    $l$loop: while (cur.id_1.compareTo_9jj042_k$(id) < 0 || cur.get_isRemoved_gzdz59_k$()) {
      // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed' call
      var this_0 = cur;
      // Inline function 'kotlin.let' call
      var it = access$_get_nextOrClosed__ywzond(this_0);
      var tmp;
      if (it === access$_get_CLOSED_$tConcurrentLinkedListKt_wmtpdy()) {
        return _SegmentOrClosed___init__impl__jnexvb(get_CLOSED());
      } else {
        tmp = (it == null ? true : it instanceof ConcurrentLinkedListNode) ? it : THROW_CCE();
      }
      var next = tmp;
      if (!(next == null)) {
        cur = next;
        continue $l$loop;
      }
      // Inline function 'kotlin.Long.plus' call
      var newTail = createNewSegment(cur.id_1.plus_r93sks_k$(toLong(1)), cur);
      if (cur.trySetNext_31oiph_k$(newTail)) {
        if (cur.get_isRemoved_gzdz59_k$()) {
          cur.remove_ldkf9o_k$();
        }
        cur = newTail;
      }
    }
    return _SegmentOrClosed___init__impl__jnexvb(cur);
  }
  function access$_get_CLOSED_$tConcurrentLinkedListKt_wmtpdy() {
    return get_CLOSED();
  }
  var properties_initialized_ConcurrentLinkedList_kt_kwt434;
  function _init_properties_ConcurrentLinkedList_kt__5gcgzy() {
    if (!properties_initialized_ConcurrentLinkedList_kt_kwt434) {
      properties_initialized_ConcurrentLinkedList_kt_kwt434 = true;
      CLOSED = new Symbol('CLOSED');
    }
  }
  function handleUncaughtCoroutineException(context, exception) {
    var tmp0_iterator = get_platformExceptionHandlers().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var handler = tmp0_iterator.next_20eer_k$();
      try {
        handler.handleException_e679jj_k$(context, exception);
      } catch ($p) {
        if ($p instanceof ExceptionSuccessfullyProcessed) {
          var _ = $p;
          return Unit_getInstance();
        } else {
          if ($p instanceof Error) {
            var t = $p;
            propagateExceptionFinalResort(handlerException(exception, t));
          } else {
            throw $p;
          }
        }
      }
    }
    try {
      addSuppressed(exception, new DiagnosticCoroutineContextException(context));
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
      } else {
        throw $p;
      }
    }
    propagateExceptionFinalResort(exception);
  }
  function ExceptionSuccessfullyProcessed() {
    ExceptionSuccessfullyProcessed_instance = this;
    Exception_init_$Init$(this);
    captureStack(this, ExceptionSuccessfullyProcessed);
  }
  var ExceptionSuccessfullyProcessed_instance;
  function ExceptionSuccessfullyProcessed_getInstance() {
    if (ExceptionSuccessfullyProcessed_instance == null)
      new ExceptionSuccessfullyProcessed();
    return ExceptionSuccessfullyProcessed_instance;
  }
  function get_UNDEFINED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return UNDEFINED;
  }
  var UNDEFINED;
  function get_REUSABLE_CLAIMED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return REUSABLE_CLAIMED;
  }
  var REUSABLE_CLAIMED;
  function _get__reusableCancellableContinuation__ic28e($this) {
    return $this._reusableCancellableContinuation_1;
  }
  function _get_reusableCancellableContinuation__9qex09($this) {
    var tmp = $this._reusableCancellableContinuation_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    return tmp instanceof CancellableContinuationImpl ? tmp : null;
  }
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, -1);
    this.dispatcher_1 = dispatcher;
    this.continuation_1 = continuation;
    this._state_1 = get_UNDEFINED();
    this.countOrElement_1 = threadContextElements(this.get_context_h02k06_k$());
    this._reusableCancellableContinuation_1 = atomic$ref$1(null);
  }
  protoOf(DispatchedContinuation).get_dispatcher_xk0rod_k$ = function () {
    return this.dispatcher_1;
  };
  protoOf(DispatchedContinuation).get_continuation_7yron4_k$ = function () {
    return this.continuation_1;
  };
  protoOf(DispatchedContinuation).get_context_h02k06_k$ = function () {
    return this.continuation_1.get_context_h02k06_k$();
  };
  protoOf(DispatchedContinuation).set__state_jl328f_k$ = function (_set____db54di) {
    this._state_1 = _set____db54di;
  };
  protoOf(DispatchedContinuation).get__state_up23te_k$ = function () {
    return this._state_1;
  };
  protoOf(DispatchedContinuation).get_callerFrame_pfdb95_k$ = function () {
    var tmp = this.continuation_1;
    return isInterface(tmp, CoroutineStackFrame) ? tmp : null;
  };
  protoOf(DispatchedContinuation).getStackTraceElement_um8m53_k$ = function () {
    return null;
  };
  protoOf(DispatchedContinuation).get_countOrElement_7ftmoq_k$ = function () {
    return this.countOrElement_1;
  };
  protoOf(DispatchedContinuation).isReusable_asltyw_k$ = function () {
    return !(this._reusableCancellableContinuation_1.get_kotlinx$atomicfu$value_vi2am5_k$() == null);
  };
  protoOf(DispatchedContinuation).awaitReusability_6g41eu_k$ = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this._reusableCancellableContinuation_1;
    while (true) {
      if (!(this_0.get_kotlinx$atomicfu$value_vi2am5_k$() === get_REUSABLE_CLAIMED()))
        return Unit_getInstance();
    }
  };
  protoOf(DispatchedContinuation).release_8sql92_k$ = function () {
    this.awaitReusability_6g41eu_k$();
    var tmp0_safe_receiver = _get_reusableCancellableContinuation__9qex09(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.detachChild_85lap8_k$();
    }
  };
  protoOf(DispatchedContinuation).claimReusableCancellableContinuation_924qwh_k$ = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this._reusableCancellableContinuation_1;
    while (true) {
      var state = this_0.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (state === null) {
        this._reusableCancellableContinuation_1.set_kotlinx$atomicfu$value_508e3y_k$(get_REUSABLE_CLAIMED());
        return null;
      } else {
        if (state instanceof CancellableContinuationImpl) {
          if (this._reusableCancellableContinuation_1.atomicfu$compareAndSet(state, get_REUSABLE_CLAIMED())) {
            return state instanceof CancellableContinuationImpl ? state : THROW_CCE();
          }
        } else {
          if (state !== get_REUSABLE_CLAIMED()) {
            if (!(state instanceof Error)) {
              // Inline function 'kotlin.error' call
              var message = 'Inconsistent state ' + toString_0(state);
              throw IllegalStateException_init_$Create$(toString(message));
            }
          }
        }
      }
    }
  };
  protoOf(DispatchedContinuation).tryReleaseClaimedContinuation_ko810q_k$ = function (continuation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this._reusableCancellableContinuation_1;
    while (true) {
      var state = this_0.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (state === get_REUSABLE_CLAIMED()) {
        if (this._reusableCancellableContinuation_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), continuation))
          return null;
      } else {
        if (state instanceof Error) {
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.require' call
          if (!this._reusableCancellableContinuation_1.atomicfu$compareAndSet(state, null)) {
            var message = 'Failed requirement.';
            throw IllegalArgumentException_init_$Create$(toString(message));
          }
          return state;
        } else {
          // Inline function 'kotlin.error' call
          var message_0 = 'Inconsistent state ' + toString_0(state);
          throw IllegalStateException_init_$Create$(toString(message_0));
        }
      }
    }
  };
  protoOf(DispatchedContinuation).postponeCancellation_hjv3hh_k$ = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this._reusableCancellableContinuation_1;
    while (true) {
      var state = this_0.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (equals(state, get_REUSABLE_CLAIMED())) {
        if (this._reusableCancellableContinuation_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), cause))
          return true;
      } else {
        if (state instanceof Error)
          return true;
        else {
          if (this._reusableCancellableContinuation_1.atomicfu$compareAndSet(state, null))
            return false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).takeState_a1bv3x_k$ = function () {
    var state = this._state_1;
    // Inline function 'kotlinx.coroutines.assert' call
    this._state_1 = get_UNDEFINED();
    return state;
  };
  protoOf(DispatchedContinuation).get_delegate_hasf9b_k$ = function () {
    return this;
  };
  protoOf(DispatchedContinuation).resumeWith_dtxwbr_k$ = function (result) {
    var context = this.continuation_1.get_context_h02k06_k$();
    var state = toState_0(result);
    if (this.dispatcher_1.isDispatchNeeded_ft82v4_k$(context)) {
      this._state_1 = state;
      this.set_resumeMode_yy1myt_k$(0);
      this.dispatcher_1.dispatch_qa3n0o_k$(context, this);
    } else {
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
        // Inline function 'kotlinx.coroutines.assert' call
        var eventLoop = ThreadLocalEventLoop_getInstance().get_eventLoop_wo5hfs_k$();
        if (false && eventLoop.get_isUnconfinedQueueEmpty_mi405s_k$()) {
          break $l$block;
        }
        var tmp;
        if (eventLoop.get_isUnconfinedLoopActive_g78ri6_k$()) {
          this._state_1 = state;
          this.set_resumeMode_yy1myt_k$(0);
          eventLoop.dispatchUnconfined_o79kaq_k$(this);
          tmp = true;
        } else {
          // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
          eventLoop.incrementUseCount_jadqvy_k$(true);
          try {
            this.get_context_h02k06_k$();
            // Inline function 'kotlinx.coroutines.withCoroutineContext' call
            this.countOrElement_1;
            this.continuation_1.resumeWith_dtxwbr_k$(result);
            $l$loop: while (eventLoop.processUnconfinedEvent_mypjl6_k$()) {
            }
          } catch ($p) {
            if ($p instanceof Error) {
              var e = $p;
              this.handleFatalException_i5e50q_k$(e, null);
            } else {
              throw $p;
            }
          }
          finally {
            eventLoop.decrementUseCount_x8i8ca_k$(true);
          }
          tmp = false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).resumeCancellableWith_1hlntf_k$ = function (result, onCancellation) {
    var state = toState_0(result, onCancellation);
    if (this.dispatcher_1.isDispatchNeeded_ft82v4_k$(this.get_context_h02k06_k$())) {
      this._state_1 = state;
      this.set_resumeMode_yy1myt_k$(1);
      this.dispatcher_1.dispatch_qa3n0o_k$(this.get_context_h02k06_k$(), this);
    } else {
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
        // Inline function 'kotlinx.coroutines.assert' call
        var eventLoop = ThreadLocalEventLoop_getInstance().get_eventLoop_wo5hfs_k$();
        if (false && eventLoop.get_isUnconfinedQueueEmpty_mi405s_k$()) {
          break $l$block;
        }
        var tmp;
        if (eventLoop.get_isUnconfinedLoopActive_g78ri6_k$()) {
          this._state_1 = state;
          this.set_resumeMode_yy1myt_k$(1);
          eventLoop.dispatchUnconfined_o79kaq_k$(this);
          tmp = true;
        } else {
          // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
          eventLoop.incrementUseCount_jadqvy_k$(true);
          try {
            var tmp$ret$4;
            $l$block_0: {
              // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancelled' call
              var job = this.get_context_h02k06_k$().get_y2st91_k$(Key_getInstance_2());
              if (!(job == null) && !job.get_isActive_quafmh_k$()) {
                var cause = job.getCancellationException_8i1q6u_k$();
                this.cancelCompletedResult_pnx7en_k$(state, cause);
                // Inline function 'kotlin.coroutines.resumeWithException' call
                // Inline function 'kotlin.Companion.failure' call
                Companion_getInstance();
                var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(cause));
                this.resumeWith_dtxwbr_k$(tmp$ret$2);
                tmp$ret$4 = true;
                break $l$block_0;
              }
              tmp$ret$4 = false;
            }
            if (!tmp$ret$4) {
              // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
              this.continuation_1;
              // Inline function 'kotlinx.coroutines.withContinuationContext' call
              this.countOrElement_1;
              this.continuation_1.resumeWith_dtxwbr_k$(result);
            }
            $l$loop: while (eventLoop.processUnconfinedEvent_mypjl6_k$()) {
            }
          } catch ($p) {
            if ($p instanceof Error) {
              var e = $p;
              this.handleFatalException_i5e50q_k$(e, null);
            } else {
              throw $p;
            }
          }
          finally {
            eventLoop.decrementUseCount_x8i8ca_k$(true);
          }
          tmp = false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).cancelCompletedResult_pnx7en_k$ = function (takenState, cause) {
    if (takenState instanceof CompletedWithCancellation) {
      takenState.get_onCancellation_no7t6d_k$()(cause);
    }
  };
  protoOf(DispatchedContinuation).resumeCancelled_vzy1t6_k$ = function (state) {
    var job = this.get_context_h02k06_k$().get_y2st91_k$(Key_getInstance_2());
    if (!(job == null) && !job.get_isActive_quafmh_k$()) {
      var cause = job.getCancellationException_8i1q6u_k$();
      this.cancelCompletedResult_pnx7en_k$(state, cause);
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      Companion_getInstance();
      var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
      this.resumeWith_dtxwbr_k$(tmp$ret$0);
      return true;
    }
    return false;
  };
  protoOf(DispatchedContinuation).resumeUndispatchedWith_hqi278_k$ = function (result) {
    this.continuation_1;
    // Inline function 'kotlinx.coroutines.withContinuationContext' call
    this.countOrElement_1;
    this.continuation_1.resumeWith_dtxwbr_k$(result);
  };
  protoOf(DispatchedContinuation).dispatchYield_tdqcou_k$ = function (context, value) {
    this._state_1 = value;
    this.set_resumeMode_yy1myt_k$(1);
    this.dispatcher_1.dispatchYield_t7bwip_k$(context, this);
  };
  protoOf(DispatchedContinuation).toString = function () {
    return 'DispatchedContinuation[' + this.dispatcher_1.toString() + ', ' + toDebugString(this.continuation_1) + ']';
  };
  function executeUnconfined(_this__u8e3s4, contState, mode, doYield, block) {
    doYield = doYield === VOID ? false : doYield;
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    // Inline function 'kotlinx.coroutines.assert' call
    var eventLoop = ThreadLocalEventLoop_getInstance().get_eventLoop_wo5hfs_k$();
    if (doYield && eventLoop.get_isUnconfinedQueueEmpty_mi405s_k$())
      return false;
    var tmp;
    if (eventLoop.get_isUnconfinedLoopActive_g78ri6_k$()) {
      _this__u8e3s4._state_1 = contState;
      _this__u8e3s4.set_resumeMode_yy1myt_k$(mode);
      eventLoop.dispatchUnconfined_o79kaq_k$(_this__u8e3s4);
      tmp = true;
    } else {
      // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
      eventLoop.incrementUseCount_jadqvy_k$(true);
      try {
        block();
        $l$loop: while (eventLoop.processUnconfinedEvent_mypjl6_k$()) {
        }
      } catch ($p) {
        if ($p instanceof Error) {
          var e = $p;
          _this__u8e3s4.handleFatalException_i5e50q_k$(e, null);
        } else {
          throw $p;
        }
      }
      finally {
        eventLoop.decrementUseCount_x8i8ca_k$(true);
      }
      tmp = false;
    }
    return tmp;
  }
  function resumeCancellableWith(_this__u8e3s4, result, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    var tmp;
    if (_this__u8e3s4 instanceof DispatchedContinuation) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancellableWith' call
      var state = toState_0(result, onCancellation);
      if (_this__u8e3s4.dispatcher_1.isDispatchNeeded_ft82v4_k$(_this__u8e3s4.get_context_h02k06_k$())) {
        _this__u8e3s4._state_1 = state;
        _this__u8e3s4.set_resumeMode_yy1myt_k$(1);
        _this__u8e3s4.dispatcher_1.dispatch_qa3n0o_k$(_this__u8e3s4.get_context_h02k06_k$(), _this__u8e3s4);
      } else {
        $l$block: {
          // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
          // Inline function 'kotlinx.coroutines.assert' call
          var eventLoop = ThreadLocalEventLoop_getInstance().get_eventLoop_wo5hfs_k$();
          if (false && eventLoop.get_isUnconfinedQueueEmpty_mi405s_k$()) {
            break $l$block;
          }
          var tmp_0;
          if (eventLoop.get_isUnconfinedLoopActive_g78ri6_k$()) {
            _this__u8e3s4._state_1 = state;
            _this__u8e3s4.set_resumeMode_yy1myt_k$(1);
            eventLoop.dispatchUnconfined_o79kaq_k$(_this__u8e3s4);
            tmp_0 = true;
          } else {
            // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
            eventLoop.incrementUseCount_jadqvy_k$(true);
            try {
              var tmp$ret$4;
              $l$block_0: {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancelled' call
                var job = _this__u8e3s4.get_context_h02k06_k$().get_y2st91_k$(Key_getInstance_2());
                if (!(job == null) && !job.get_isActive_quafmh_k$()) {
                  var cause = job.getCancellationException_8i1q6u_k$();
                  _this__u8e3s4.cancelCompletedResult_pnx7en_k$(state, cause);
                  // Inline function 'kotlin.coroutines.resumeWithException' call
                  // Inline function 'kotlin.Companion.failure' call
                  Companion_getInstance();
                  var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(cause));
                  _this__u8e3s4.resumeWith_dtxwbr_k$(tmp$ret$2);
                  tmp$ret$4 = true;
                  break $l$block_0;
                }
                tmp$ret$4 = false;
              }
              if (!tmp$ret$4) {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
                _this__u8e3s4.continuation_1;
                // Inline function 'kotlinx.coroutines.withContinuationContext' call
                _this__u8e3s4.countOrElement_1;
                _this__u8e3s4.continuation_1.resumeWith_dtxwbr_k$(result);
              }
              $l$loop: while (eventLoop.processUnconfinedEvent_mypjl6_k$()) {
              }
            } catch ($p) {
              if ($p instanceof Error) {
                var e = $p;
                _this__u8e3s4.handleFatalException_i5e50q_k$(e, null);
              } else {
                throw $p;
              }
            }
            finally {
              eventLoop.decrementUseCount_x8i8ca_k$(true);
            }
            tmp_0 = false;
          }
        }
      }
      tmp = Unit_getInstance();
    } else {
      _this__u8e3s4.resumeWith_dtxwbr_k$(result);
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  var properties_initialized_DispatchedContinuation_kt_2siadq;
  function _init_properties_DispatchedContinuation_kt__tnmqc0() {
    if (!properties_initialized_DispatchedContinuation_kt_2siadq) {
      properties_initialized_DispatchedContinuation_kt_2siadq = true;
      UNDEFINED = new Symbol('UNDEFINED');
      REUSABLE_CLAIMED = new Symbol('REUSABLE_CLAIMED');
    }
  }
  function get_MODE_CANCELLABLE() {
    return MODE_CANCELLABLE;
  }
  var MODE_CANCELLABLE;
  function resumeWithStackTrace(_this__u8e3s4, exception) {
    Companion_getInstance();
    // Inline function 'kotlin.Companion.failure' call
    var exception_0 = recoverStackTrace(exception, _this__u8e3s4);
    var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception_0));
    _this__u8e3s4.resumeWith_dtxwbr_k$(tmp$ret$0);
  }
  function get_MODE_CANCELLABLE_REUSABLE() {
    return MODE_CANCELLABLE_REUSABLE;
  }
  var MODE_CANCELLABLE_REUSABLE;
  function DispatchedTask(resumeMode) {
    SchedulerTask.call(this);
    this.resumeMode_1 = resumeMode;
  }
  protoOf(DispatchedTask).set_resumeMode_yy1myt_k$ = function (_set____db54di) {
    this.resumeMode_1 = _set____db54di;
  };
  protoOf(DispatchedTask).get_resumeMode_te1i4n_k$ = function () {
    return this.resumeMode_1;
  };
  protoOf(DispatchedTask).cancelCompletedResult_pnx7en_k$ = function (takenState, cause) {
  };
  protoOf(DispatchedTask).getSuccessfulResult_4uqe9r_k$ = function (state) {
    return (state == null ? true : !(state == null)) ? state : THROW_CCE();
  };
  protoOf(DispatchedTask).getExceptionalResult_i3cs19_k$ = function (state) {
    var tmp0_safe_receiver = state instanceof CompletedExceptionally ? state : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_cause_iplhs0_k$();
  };
  protoOf(DispatchedTask).run_mvkpxh_k$ = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    var taskContext = get_taskContext(this);
    var fatalException = null;
    try {
      var tmp = this.get_delegate_hasf9b_k$();
      var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
      var continuation = delegate.get_continuation_7yron4_k$();
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      delegate.get_countOrElement_7ftmoq_k$();
      var context = continuation.get_context_h02k06_k$();
      var state = this.takeState_a1bv3x_k$();
      var exception = this.getExceptionalResult_i3cs19_k$(state);
      var job = exception == null && get_isCancellableMode(this.resumeMode_1) ? context.get_y2st91_k$(Key_getInstance_2()) : null;
      if (!(job == null) && !job.get_isActive_quafmh_k$()) {
        var cause = job.getCancellationException_8i1q6u_k$();
        this.cancelCompletedResult_pnx7en_k$(state, cause);
        // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
        Companion_getInstance();
        // Inline function 'kotlin.Companion.failure' call
        var exception_0 = recoverStackTrace(cause, continuation);
        var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception_0));
        continuation.resumeWith_dtxwbr_k$(tmp$ret$1);
      } else {
        if (!(exception == null)) {
          // Inline function 'kotlin.coroutines.resumeWithException' call
          // Inline function 'kotlin.Companion.failure' call
          Companion_getInstance();
          var tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(exception));
          continuation.resumeWith_dtxwbr_k$(tmp$ret$3);
        } else {
          // Inline function 'kotlin.coroutines.resume' call
          var value = this.getSuccessfulResult_4uqe9r_k$(state);
          // Inline function 'kotlin.Companion.success' call
          Companion_getInstance();
          var tmp$ret$5 = _Result___init__impl__xyqfz8(value);
          continuation.resumeWith_dtxwbr_k$(tmp$ret$5);
        }
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        fatalException = e;
      } else {
        throw $p;
      }
    }
    finally {
      // Inline function 'kotlin.runCatching' call
      var tmp_0;
      try {
        // Inline function 'kotlinx.coroutines.afterTask' call
        // Inline function 'kotlin.Companion.success' call
        Companion_getInstance();
        tmp_0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var e_0 = $p;
          // Inline function 'kotlin.Companion.failure' call
          Companion_getInstance();
          tmp_1 = _Result___init__impl__xyqfz8(createFailure(e_0));
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var result = tmp_0;
      this.handleFatalException_i5e50q_k$(fatalException, Result__exceptionOrNull_impl_p6xea9(result));
    }
  };
  protoOf(DispatchedTask).handleFatalException_i5e50q_k$ = function (exception, finallyException) {
    if (exception === null && finallyException === null)
      return Unit_getInstance();
    if (!(exception === null) && !(finallyException === null)) {
      addSuppressed(exception, finallyException);
    }
    var cause = exception == null ? finallyException : exception;
    var reason = new CoroutinesInternalError('Fatal exception in coroutines machinery for ' + toString(this) + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", ensureNotNull(cause));
    handleCoroutineException(this.get_delegate_hasf9b_k$().get_context_h02k06_k$(), reason);
  };
  function get_MODE_UNINITIALIZED() {
    return MODE_UNINITIALIZED;
  }
  var MODE_UNINITIALIZED;
  function get_isReusableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 2;
  }
  function get_isCancellableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 1 || _this__u8e3s4 === 2;
  }
  function dispatch(_this__u8e3s4, mode) {
    // Inline function 'kotlinx.coroutines.assert' call
    var delegate = _this__u8e3s4.get_delegate_hasf9b_k$();
    var undispatched = mode === 4;
    var tmp;
    var tmp_0;
    if (!undispatched) {
      tmp_0 = delegate instanceof DispatchedContinuation;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = get_isCancellableMode(mode) === get_isCancellableMode(_this__u8e3s4.resumeMode_1);
    } else {
      tmp = false;
    }
    if (tmp) {
      var dispatcher = delegate.get_dispatcher_xk0rod_k$();
      var context = delegate.get_context_h02k06_k$();
      if (dispatcher.isDispatchNeeded_ft82v4_k$(context)) {
        dispatcher.dispatch_qa3n0o_k$(context, _this__u8e3s4);
      } else {
        resumeUnconfined(_this__u8e3s4);
      }
    } else {
      resume(_this__u8e3s4, delegate, undispatched);
    }
  }
  function get_MODE_UNDISPATCHED() {
    return MODE_UNDISPATCHED;
  }
  var MODE_UNDISPATCHED;
  function resumeUnconfined(_this__u8e3s4) {
    var eventLoop = ThreadLocalEventLoop_getInstance().get_eventLoop_wo5hfs_k$();
    if (eventLoop.get_isUnconfinedLoopActive_g78ri6_k$()) {
      eventLoop.dispatchUnconfined_o79kaq_k$(_this__u8e3s4);
    } else {
      // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
      eventLoop.incrementUseCount_jadqvy_k$(true);
      try {
        resume(_this__u8e3s4, _this__u8e3s4.get_delegate_hasf9b_k$(), true);
        $l$loop: while (eventLoop.processUnconfinedEvent_mypjl6_k$()) {
        }
      } catch ($p) {
        if ($p instanceof Error) {
          var e = $p;
          _this__u8e3s4.handleFatalException_i5e50q_k$(e, null);
        } else {
          throw $p;
        }
      }
      finally {
        eventLoop.decrementUseCount_x8i8ca_k$(true);
      }
    }
  }
  function resume(_this__u8e3s4, delegate, undispatched) {
    var state = _this__u8e3s4.takeState_a1bv3x_k$();
    var exception = _this__u8e3s4.getExceptionalResult_i3cs19_k$(state);
    var tmp;
    if (!(exception == null)) {
      // Inline function 'kotlin.Companion.failure' call
      Companion_getInstance();
      tmp = _Result___init__impl__xyqfz8(createFailure(exception));
    } else {
      Companion_getInstance();
      // Inline function 'kotlin.Companion.success' call
      var value = _this__u8e3s4.getSuccessfulResult_4uqe9r_k$(state);
      tmp = _Result___init__impl__xyqfz8(value);
    }
    var result = tmp;
    if (undispatched) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
      var this_0 = delegate instanceof DispatchedContinuation ? delegate : THROW_CCE();
      this_0.get_continuation_7yron4_k$();
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      this_0.get_countOrElement_7ftmoq_k$();
      this_0.get_continuation_7yron4_k$().resumeWith_dtxwbr_k$(result);
    } else {
      delegate.resumeWith_dtxwbr_k$(result);
    }
  }
  function runUnconfinedEventLoop(_this__u8e3s4, eventLoop, block) {
    eventLoop.incrementUseCount_jadqvy_k$(true);
    try {
      block();
      $l$loop: while (eventLoop.processUnconfinedEvent_mypjl6_k$()) {
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        _this__u8e3s4.handleFatalException_i5e50q_k$(e, null);
      } else {
        throw $p;
      }
    }
    finally {
      eventLoop.decrementUseCount_x8i8ca_k$(true);
    }
  }
  function get_MODE_ATOMIC() {
    return MODE_ATOMIC;
  }
  var MODE_ATOMIC;
  function _InlineList___init__impl__z8n56(holder) {
    holder = holder === VOID ? null : holder;
    return holder;
  }
  function _get_holder__f6h5pd($this) {
    return $this;
  }
  function InlineList__plus_impl_nuetvo($this, element) {
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_subject = _get_holder__f6h5pd($this);
    var tmp;
    if (tmp0_subject == null) {
      tmp = _InlineList___init__impl__z8n56(element);
    } else {
      if (tmp0_subject instanceof ArrayList) {
        var tmp_0 = _get_holder__f6h5pd($this);
        (tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE()).add_utx5q5_k$(element);
        tmp = _InlineList___init__impl__z8n56(_get_holder__f6h5pd($this));
      } else {
        var list = ArrayList_init_$Create$(4);
        var tmp_1 = _get_holder__f6h5pd($this);
        list.add_utx5q5_k$((tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE());
        list.add_utx5q5_k$(element);
        tmp = _InlineList___init__impl__z8n56(list);
      }
    }
    return tmp;
  }
  function InlineList__forEachReversed_impl_jituug($this, action) {
    var tmp0_subject = access$_get_holder__kkflen($this);
    if (tmp0_subject == null)
      return Unit_getInstance();
    else {
      if (!(tmp0_subject instanceof ArrayList)) {
        var tmp = access$_get_holder__kkflen($this);
        action((tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE());
      } else {
        var tmp_0 = access$_get_holder__kkflen($this);
        var list = tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE();
        var inductionVariable = list.get_size_woubt6_k$() - 1 | 0;
        if (0 <= inductionVariable)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + -1 | 0;
            action(list.get_c1px32_k$(i));
          }
           while (0 <= inductionVariable);
      }
    }
  }
  function InlineList__toString_impl_1aej86($this) {
    return 'InlineList(holder=' + toString_0($this) + ')';
  }
  function InlineList__hashCode_impl_n1kg11($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function InlineList__equals_impl_wwe0i1($this, other) {
    if (!(other instanceof InlineList))
      return false;
    var tmp0_other_with_cast = other instanceof InlineList ? other.holder_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function access$_get_holder__kkflen($this) {
    return _get_holder__f6h5pd($this);
  }
  function InlineList(holder) {
    this.holder_1 = holder;
  }
  protoOf(InlineList).toString = function () {
    return InlineList__toString_impl_1aej86(this.holder_1);
  };
  protoOf(InlineList).hashCode = function () {
    return InlineList__hashCode_impl_n1kg11(this.holder_1);
  };
  protoOf(InlineList).equals = function (other) {
    return InlineList__equals_impl_wwe0i1(this.holder_1, other);
  };
  function checkParallelism(_this__u8e3s4) {
    // Inline function 'kotlin.require' call
    if (!(_this__u8e3s4 >= 1)) {
      var message = 'Expected positive parallelism level, but got ' + _this__u8e3s4;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return Unit_getInstance();
  }
  function _set_currentTask__l6mrzb($this, _set____db54di) {
    $this.currentTask_1 = _set____db54di;
  }
  function _get_currentTask__jk33nx($this) {
    return $this.currentTask_1;
  }
  function _get_dispatcher__dketks($this) {
    return $this.dispatcher_1;
  }
  function _get_parallelism__25q2h7($this) {
    return $this.parallelism_1;
  }
  function _get_runningWorkers__wolfe3($this) {
    return $this.runningWorkers_1;
  }
  function _get_queue__c6g84g($this) {
    return $this.queue_1;
  }
  function _get_workerAllocationLock__l5417m($this) {
    return $this.workerAllocationLock_1;
  }
  function dispatchInternal($this, block, startWorker) {
    $this.queue_1.addLast_3381om_k$(block);
    if ($this.runningWorkers_1.get_kotlinx$atomicfu$value_vi2am5_k$() >= $this.parallelism_1)
      return Unit_getInstance();
    if (!tryAllocateWorker($this))
      return Unit_getInstance();
    var tmp0_elvis_lhs = obtainTaskOrDeallocateWorker($this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var task = tmp;
    startWorker(new Worker($this, task));
  }
  function tryAllocateWorker($this) {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    $this.workerAllocationLock_1;
    if ($this.runningWorkers_1.get_kotlinx$atomicfu$value_vi2am5_k$() >= $this.parallelism_1)
      return false;
    $this.runningWorkers_1.atomicfu$incrementAndGet();
    return true;
  }
  function obtainTaskOrDeallocateWorker($this) {
    while (true) {
      var nextTask = $this.queue_1.removeFirstOrNull_eges3a_k$();
      if (nextTask == null) {
        // Inline function 'kotlinx.coroutines.internal.synchronized' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
        $this.workerAllocationLock_1;
        $this.runningWorkers_1.atomicfu$decrementAndGet();
        if ($this.queue_1.get_size_woubt6_k$() === 0)
          return null;
        $this.runningWorkers_1.atomicfu$incrementAndGet();
      } else
        return nextTask;
    }
  }
  function Worker($outer, currentTask) {
    this.$this_1 = $outer;
    this.currentTask_1 = currentTask;
  }
  protoOf(Worker).run_mvkpxh_k$ = function () {
    var fairnessCounter = 0;
    while (true) {
      try {
        this.currentTask_1.run_mvkpxh_k$();
      } catch ($p) {
        if ($p instanceof Error) {
          var e = $p;
          handleCoroutineException(EmptyCoroutineContext_getInstance(), e);
        } else {
          throw $p;
        }
      }
      var tmp = this;
      var tmp0_elvis_lhs = obtainTaskOrDeallocateWorker(this.$this_1);
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        return Unit_getInstance();
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      tmp.currentTask_1 = tmp_0;
      var tmp_1;
      fairnessCounter = fairnessCounter + 1 | 0;
      if (fairnessCounter >= 16) {
        tmp_1 = this.$this_1.dispatcher_1.isDispatchNeeded_ft82v4_k$(this.$this_1);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        this.$this_1.dispatcher_1.dispatch_qa3n0o_k$(this.$this_1, this);
        return Unit_getInstance();
      }
    }
  };
  function LimitedDispatcher(dispatcher, parallelism) {
    CoroutineDispatcher.call(this);
    this.dispatcher_1 = dispatcher;
    this.parallelism_1 = parallelism;
    var tmp = this;
    var tmp0_elvis_lhs = isInterface(dispatcher, Delay) ? dispatcher : null;
    tmp.$$delegate_0__1 = tmp0_elvis_lhs == null ? get_DefaultDelay() : tmp0_elvis_lhs;
    this.runningWorkers_1 = atomic$int$1(0);
    this.queue_1 = new LockFreeTaskQueue(false);
    this.workerAllocationLock_1 = new SynchronizedObject();
  }
  protoOf(LimitedDispatcher).delay_xigjxo_k$ = function (time, $completion) {
    return this.$$delegate_0__1.delay_xigjxo_k$(time, $completion);
  };
  protoOf(LimitedDispatcher).invokeOnTimeout_x4e3ys_k$ = function (timeMillis, block, context) {
    return this.$$delegate_0__1.invokeOnTimeout_x4e3ys_k$(timeMillis, block, context);
  };
  protoOf(LimitedDispatcher).scheduleResumeAfterDelay_ohc91i_k$ = function (timeMillis, continuation) {
    this.$$delegate_0__1.scheduleResumeAfterDelay_ohc91i_k$(timeMillis, continuation);
  };
  protoOf(LimitedDispatcher).limitedParallelism_b7nunq_k$ = function (parallelism) {
    checkParallelism(parallelism);
    if (parallelism >= this.parallelism_1)
      return this;
    return protoOf(CoroutineDispatcher).limitedParallelism_b7nunq_k$.call(this, parallelism);
  };
  protoOf(LimitedDispatcher).dispatch_qa3n0o_k$ = function (context, block) {
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.internal.LimitedDispatcher.dispatchInternal' call
      this.queue_1.addLast_3381om_k$(block);
      if (this.runningWorkers_1.get_kotlinx$atomicfu$value_vi2am5_k$() >= this.parallelism_1) {
        break $l$block_1;
      }
      if (!tryAllocateWorker(this)) {
        break $l$block_1;
      }
      var tmp0_elvis_lhs = obtainTaskOrDeallocateWorker(this);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break $l$block_1;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var task = tmp;
      var worker = new Worker(this, task);
      this.dispatcher_1.dispatch_qa3n0o_k$(this, worker);
    }
  };
  protoOf(LimitedDispatcher).dispatchYield_t7bwip_k$ = function (context, block) {
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.internal.LimitedDispatcher.dispatchInternal' call
      this.queue_1.addLast_3381om_k$(block);
      if (this.runningWorkers_1.get_kotlinx$atomicfu$value_vi2am5_k$() >= this.parallelism_1) {
        break $l$block_1;
      }
      if (!tryAllocateWorker(this)) {
        break $l$block_1;
      }
      var tmp0_elvis_lhs = obtainTaskOrDeallocateWorker(this);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break $l$block_1;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var task = tmp;
      var worker = new Worker(this, task);
      this.dispatcher_1.dispatchYield_t7bwip_k$(this, worker);
    }
  };
  function _get__cur__d2ko2y($this) {
    return $this._cur_1;
  }
  function LockFreeTaskQueue(singleConsumer) {
    this._cur_1 = atomic$ref$1(new LockFreeTaskQueueCore(8, singleConsumer));
  }
  protoOf(LockFreeTaskQueue).get_isEmpty_zauvru_k$ = function () {
    return this._cur_1.get_kotlinx$atomicfu$value_vi2am5_k$().get_isEmpty_zauvru_k$();
  };
  protoOf(LockFreeTaskQueue).get_size_woubt6_k$ = function () {
    return this._cur_1.get_kotlinx$atomicfu$value_vi2am5_k$().get_size_woubt6_k$();
  };
  protoOf(LockFreeTaskQueue).close_yn9xrc_k$ = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this._cur_1;
    while (true) {
      var cur = this_0.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (cur.close_1keygo_k$())
        return Unit_getInstance();
      this._cur_1.atomicfu$compareAndSet(cur, cur.next_20eer_k$());
    }
  };
  protoOf(LockFreeTaskQueue).addLast_3381om_k$ = function (element) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this._cur_1;
    while (true) {
      var cur = this_0.get_kotlinx$atomicfu$value_vi2am5_k$();
      switch (cur.addLast_3381om_k$(element)) {
        case 0:
          return true;
        case 2:
          return false;
        case 1:
          this._cur_1.atomicfu$compareAndSet(cur, cur.next_20eer_k$());
          break;
      }
    }
  };
  protoOf(LockFreeTaskQueue).removeFirstOrNull_eges3a_k$ = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this._cur_1;
    while (true) {
      var cur = this_0.get_kotlinx$atomicfu$value_vi2am5_k$();
      var result = cur.removeFirstOrNull_eges3a_k$();
      if (!(result === Companion_getInstance_1().REMOVE_FROZEN_1)) {
        return (result == null ? true : !(result == null)) ? result : THROW_CCE();
      }
      this._cur_1.atomicfu$compareAndSet(cur, cur.next_20eer_k$());
    }
  };
  protoOf(LockFreeTaskQueue).map_pbuh9c_k$ = function (transform) {
    return this._cur_1.get_kotlinx$atomicfu$value_vi2am5_k$().map_pbuh9c_k$(transform);
  };
  protoOf(LockFreeTaskQueue).isClosed_baxhhm_k$ = function () {
    return this._cur_1.get_kotlinx$atomicfu$value_vi2am5_k$().isClosed_baxhhm_k$();
  };
  function _get_capacity__a9k9f3_1($this) {
    return $this.capacity_1;
  }
  function _get_singleConsumer__485sb7($this) {
    return $this.singleConsumer_1;
  }
  function _get_mask__da8grj($this) {
    return $this.mask_1;
  }
  function _get__next__kt3wsh_0($this) {
    return $this._next_1;
  }
  function _get__state__37adl3_3($this) {
    return $this._state_1;
  }
  function _get_array__jslnqg($this) {
    return $this.array_1;
  }
  function fillPlaceholder($this, index, element) {
    var old = $this.array_1.atomicfu$get(index & $this.mask_1).get_kotlinx$atomicfu$value_vi2am5_k$();
    var tmp;
    if (old instanceof Placeholder) {
      tmp = old.index_1 === index;
    } else {
      tmp = false;
    }
    if (tmp) {
      $this.array_1.atomicfu$get(index & $this.mask_1).set_kotlinx$atomicfu$value_508e3y_k$(element);
      return $this;
    }
    return null;
  }
  function removeSlowPath($this, oldHead, newHead) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this._state_1;
    while (true) {
      var state = this_0.get_kotlinx$atomicfu$value_vi2am5_k$();
      // Inline function 'kotlinx.coroutines.internal.Companion.withState' call
      Companion_getInstance_1();
      var head = state.and_4spn93_k$(new Long(1073741823, 0)).shr_9fl3wl_k$(0).toInt_1tsl84_k$();
      var tail = state.and_4spn93_k$(new Long(-1073741824, 268435455)).shr_9fl3wl_k$(30).toInt_1tsl84_k$();
      // Inline function 'kotlinx.coroutines.assert' call
      if (!state.and_4spn93_k$(new Long(0, 268435456)).equals(new Long(0, 0))) {
        return $this.next_20eer_k$();
      }
      if ($this._state_1.atomicfu$compareAndSet(state, Companion_getInstance_1().updateHead_ucn5bz_k$(state, newHead))) {
        $this.array_1.atomicfu$get(head & $this.mask_1).set_kotlinx$atomicfu$value_508e3y_k$(null);
        return null;
      }
    }
  }
  function markFrozen($this) {
    var tmp0 = $this._state_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.updateAndGet' call
      while (true) {
        var cur = tmp0.get_kotlinx$atomicfu$value_vi2am5_k$();
        if (!cur.and_4spn93_k$(new Long(0, 268435456)).equals(new Long(0, 0)))
          return cur;
        var upd = cur.or_v7fvkl_k$(new Long(0, 268435456));
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$1 = upd;
          break $l$block;
        }
      }
    }
    return tmp$ret$1;
  }
  function allocateOrGetNextCopy($this, state) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this._next_1;
    while (true) {
      var next = this_0.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (!(next == null))
        return next;
      $this._next_1.atomicfu$compareAndSet(null, allocateNextCopy($this, state));
    }
  }
  function allocateNextCopy($this, state) {
    var next = new LockFreeTaskQueueCore(imul($this.capacity_1, 2), $this.singleConsumer_1);
    // Inline function 'kotlinx.coroutines.internal.Companion.withState' call
    Companion_getInstance_1();
    var head = state.and_4spn93_k$(new Long(1073741823, 0)).shr_9fl3wl_k$(0).toInt_1tsl84_k$();
    var tail = state.and_4spn93_k$(new Long(-1073741824, 268435455)).shr_9fl3wl_k$(30).toInt_1tsl84_k$();
    var index = head;
    while (!((index & $this.mask_1) === (tail & $this.mask_1))) {
      var tmp0_elvis_lhs = $this.array_1.atomicfu$get(index & $this.mask_1).get_kotlinx$atomicfu$value_vi2am5_k$();
      var value = tmp0_elvis_lhs == null ? new Placeholder(index) : tmp0_elvis_lhs;
      next.array_1.atomicfu$get(index & next.mask_1).set_kotlinx$atomicfu$value_508e3y_k$(value);
      index = index + 1 | 0;
    }
    next._state_1.set_kotlinx$atomicfu$value_22wj1v_k$(Companion_getInstance_1().wo_pxb82u_k$(state, new Long(0, 268435456)));
    return next;
  }
  function Placeholder(index) {
    this.index_1 = index;
  }
  protoOf(Placeholder).get_index_it478p_k$ = function () {
    return this.index_1;
  };
  function Companion_0() {
    Companion_instance_0 = this;
    this.INITIAL_CAPACITY_1 = 8;
    this.CAPACITY_BITS_1 = 30;
    this.MAX_CAPACITY_MASK_1 = 1073741823;
    this.HEAD_SHIFT_1 = 0;
    this.HEAD_MASK_1 = new Long(1073741823, 0);
    this.TAIL_SHIFT_1 = 30;
    this.TAIL_MASK_1 = new Long(-1073741824, 268435455);
    this.FROZEN_SHIFT_1 = 60;
    this.FROZEN_MASK_1 = new Long(0, 268435456);
    this.CLOSED_SHIFT_1 = 61;
    this.CLOSED_MASK_1 = new Long(0, 536870912);
    this.MIN_ADD_SPIN_CAPACITY_1 = 1024;
    this.REMOVE_FROZEN_1 = new Symbol('REMOVE_FROZEN');
    this.ADD_SUCCESS_1 = 0;
    this.ADD_FROZEN_1 = 1;
    this.ADD_CLOSED_1 = 2;
  }
  protoOf(Companion_0).get_INITIAL_CAPACITY_tvo5ku_k$ = function () {
    return this.INITIAL_CAPACITY_1;
  };
  protoOf(Companion_0).get_CAPACITY_BITS_m7bade_k$ = function () {
    return this.CAPACITY_BITS_1;
  };
  protoOf(Companion_0).get_MAX_CAPACITY_MASK_bnmlt9_k$ = function () {
    return this.MAX_CAPACITY_MASK_1;
  };
  protoOf(Companion_0).get_HEAD_SHIFT_ww01xo_k$ = function () {
    return this.HEAD_SHIFT_1;
  };
  protoOf(Companion_0).get_HEAD_MASK_jkay7y_k$ = function () {
    return this.HEAD_MASK_1;
  };
  protoOf(Companion_0).get_TAIL_SHIFT_z9ya0s_k$ = function () {
    return this.TAIL_SHIFT_1;
  };
  protoOf(Companion_0).get_TAIL_MASK_h71l4e_k$ = function () {
    return this.TAIL_MASK_1;
  };
  protoOf(Companion_0).get_FROZEN_SHIFT_9ve6oc_k$ = function () {
    return this.FROZEN_SHIFT_1;
  };
  protoOf(Companion_0).get_FROZEN_MASK_gcrlj6_k$ = function () {
    return this.FROZEN_MASK_1;
  };
  protoOf(Companion_0).get_CLOSED_SHIFT_v5gopk_k$ = function () {
    return this.CLOSED_SHIFT_1;
  };
  protoOf(Companion_0).get_CLOSED_MASK_agddhm_k$ = function () {
    return this.CLOSED_MASK_1;
  };
  protoOf(Companion_0).get_MIN_ADD_SPIN_CAPACITY_z2m7z7_k$ = function () {
    return this.MIN_ADD_SPIN_CAPACITY_1;
  };
  protoOf(Companion_0).get_REMOVE_FROZEN_w56qum_k$ = function () {
    return this.REMOVE_FROZEN_1;
  };
  protoOf(Companion_0).get_ADD_SUCCESS_vnro04_k$ = function () {
    return this.ADD_SUCCESS_1;
  };
  protoOf(Companion_0).get_ADD_FROZEN_bsr1ax_k$ = function () {
    return this.ADD_FROZEN_1;
  };
  protoOf(Companion_0).get_ADD_CLOSED_db6t8t_k$ = function () {
    return this.ADD_CLOSED_1;
  };
  protoOf(Companion_0).wo_pxb82u_k$ = function (_this__u8e3s4, other) {
    return _this__u8e3s4.and_4spn93_k$(other.inv_28kx_k$());
  };
  protoOf(Companion_0).updateHead_ucn5bz_k$ = function (_this__u8e3s4, newHead) {
    return this.wo_pxb82u_k$(_this__u8e3s4, new Long(1073741823, 0)).or_v7fvkl_k$(toLong(newHead).shl_bg8if3_k$(0));
  };
  protoOf(Companion_0).updateTail_keq27l_k$ = function (_this__u8e3s4, newTail) {
    return this.wo_pxb82u_k$(_this__u8e3s4, new Long(-1073741824, 268435455)).or_v7fvkl_k$(toLong(newTail).shl_bg8if3_k$(30));
  };
  protoOf(Companion_0).withState_mvgy67_k$ = function (_this__u8e3s4, block) {
    var head = _this__u8e3s4.and_4spn93_k$(new Long(1073741823, 0)).shr_9fl3wl_k$(0).toInt_1tsl84_k$();
    var tail = _this__u8e3s4.and_4spn93_k$(new Long(-1073741824, 268435455)).shr_9fl3wl_k$(30).toInt_1tsl84_k$();
    return block(head, tail);
  };
  protoOf(Companion_0).addFailReason_vnyta5_k$ = function (_this__u8e3s4) {
    return !_this__u8e3s4.and_4spn93_k$(new Long(0, 536870912)).equals(new Long(0, 0)) ? 2 : 1;
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function LockFreeTaskQueueCore(capacity, singleConsumer) {
    Companion_getInstance_1();
    this.capacity_1 = capacity;
    this.singleConsumer_1 = singleConsumer;
    this.mask_1 = this.capacity_1 - 1 | 0;
    this._next_1 = atomic$ref$1(null);
    this._state_1 = atomic$long$1(new Long(0, 0));
    this.array_1 = atomicfu$AtomicRefArray$ofNulls(this.capacity_1);
    // Inline function 'kotlin.check' call
    if (!(this.mask_1 <= 1073741823)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    // Inline function 'kotlin.check' call
    if (!((this.capacity_1 & this.mask_1) === 0)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
  }
  protoOf(LockFreeTaskQueueCore).get_isEmpty_zauvru_k$ = function () {
    Companion_getInstance_1();
    // Inline function 'kotlinx.coroutines.internal.Companion.withState' call
    var this_0 = this._state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    var head = this_0.and_4spn93_k$(new Long(1073741823, 0)).shr_9fl3wl_k$(0).toInt_1tsl84_k$();
    var tail = this_0.and_4spn93_k$(new Long(-1073741824, 268435455)).shr_9fl3wl_k$(30).toInt_1tsl84_k$();
    return head === tail;
  };
  protoOf(LockFreeTaskQueueCore).get_size_woubt6_k$ = function () {
    Companion_getInstance_1();
    // Inline function 'kotlinx.coroutines.internal.Companion.withState' call
    var this_0 = this._state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    var head = this_0.and_4spn93_k$(new Long(1073741823, 0)).shr_9fl3wl_k$(0).toInt_1tsl84_k$();
    var tail = this_0.and_4spn93_k$(new Long(-1073741824, 268435455)).shr_9fl3wl_k$(30).toInt_1tsl84_k$();
    return (tail - head | 0) & 1073741823;
  };
  protoOf(LockFreeTaskQueueCore).close_1keygo_k$ = function () {
    var tmp0 = this._state_1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp0.get_kotlinx$atomicfu$value_vi2am5_k$();
        if (!cur.and_4spn93_k$(new Long(0, 536870912)).equals(new Long(0, 0)))
          return true;
        if (!cur.and_4spn93_k$(new Long(0, 268435456)).equals(new Long(0, 0)))
          return false;
        var upd = cur.or_v7fvkl_k$(new Long(0, 536870912));
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          break $l$block;
        }
      }
    }
    return true;
  };
  protoOf(LockFreeTaskQueueCore).addLast_3381om_k$ = function (element) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this._state_1;
    while (true) {
      var tmp0 = this_0.get_kotlinx$atomicfu$value_vi2am5_k$();
      $l$block: {
        if (!tmp0.and_4spn93_k$(new Long(0, 805306368)).equals(new Long(0, 0)))
          return Companion_getInstance_1().addFailReason_vnyta5_k$(tmp0);
        // Inline function 'kotlinx.coroutines.internal.Companion.withState' call
        Companion_getInstance_1();
        var head = tmp0.and_4spn93_k$(new Long(1073741823, 0)).shr_9fl3wl_k$(0).toInt_1tsl84_k$();
        var tail = tmp0.and_4spn93_k$(new Long(-1073741824, 268435455)).shr_9fl3wl_k$(30).toInt_1tsl84_k$();
        var mask = this.mask_1;
        if (((tail + 2 | 0) & mask) === (head & mask))
          return 1;
        if (!this.singleConsumer_1 && !(this.array_1.atomicfu$get(tail & mask).get_kotlinx$atomicfu$value_vi2am5_k$() == null)) {
          if (this.capacity_1 < 1024 || ((tail - head | 0) & 1073741823) > this.capacity_1 >> 1) {
            return 1;
          }
          break $l$block;
        }
        var newTail = (tail + 1 | 0) & 1073741823;
        if (this._state_1.atomicfu$compareAndSet(tmp0, Companion_getInstance_1().updateTail_keq27l_k$(tmp0, newTail))) {
          this.array_1.atomicfu$get(tail & mask).set_kotlinx$atomicfu$value_508e3y_k$(element);
          var cur = this;
          $l$loop_0: while (!cur._state_1.get_kotlinx$atomicfu$value_vi2am5_k$().and_4spn93_k$(new Long(0, 268435456)).equals(new Long(0, 0))) {
            var tmp0_elvis_lhs = fillPlaceholder(cur.next_20eer_k$(), tail, element);
            var tmp;
            if (tmp0_elvis_lhs == null) {
              break $l$loop_0;
            } else {
              tmp = tmp0_elvis_lhs;
            }
            cur = tmp;
          }
          return 0;
        }
      }
    }
  };
  protoOf(LockFreeTaskQueueCore).removeFirstOrNull_eges3a_k$ = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this._state_1;
    while (true) {
      var tmp0 = this_0.get_kotlinx$atomicfu$value_vi2am5_k$();
      $l$block_0: {
        if (!tmp0.and_4spn93_k$(new Long(0, 268435456)).equals(new Long(0, 0)))
          return Companion_getInstance_1().REMOVE_FROZEN_1;
        // Inline function 'kotlinx.coroutines.internal.Companion.withState' call
        Companion_getInstance_1();
        var head = tmp0.and_4spn93_k$(new Long(1073741823, 0)).shr_9fl3wl_k$(0).toInt_1tsl84_k$();
        var tail = tmp0.and_4spn93_k$(new Long(-1073741824, 268435455)).shr_9fl3wl_k$(30).toInt_1tsl84_k$();
        if ((tail & this.mask_1) === (head & this.mask_1))
          return null;
        var element = this.array_1.atomicfu$get(head & this.mask_1).get_kotlinx$atomicfu$value_vi2am5_k$();
        if (element == null) {
          if (this.singleConsumer_1)
            return null;
          break $l$block_0;
        }
        if (element instanceof Placeholder)
          return null;
        var newHead = (head + 1 | 0) & 1073741823;
        if (this._state_1.atomicfu$compareAndSet(tmp0, Companion_getInstance_1().updateHead_ucn5bz_k$(tmp0, newHead))) {
          this.array_1.atomicfu$get(head & this.mask_1).set_kotlinx$atomicfu$value_508e3y_k$(null);
          return element;
        }
        if (!this.singleConsumer_1) {
          break $l$block_0;
        }
        var cur = this;
        while (true) {
          var tmp0_elvis_lhs = removeSlowPath(cur, head, newHead);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            return element;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          cur = tmp;
        }
      }
    }
  };
  protoOf(LockFreeTaskQueueCore).next_20eer_k$ = function () {
    return allocateOrGetNextCopy(this, markFrozen(this));
  };
  protoOf(LockFreeTaskQueueCore).map_pbuh9c_k$ = function (transform) {
    var res = ArrayList_init_$Create$(this.capacity_1);
    Companion_getInstance_1();
    // Inline function 'kotlinx.coroutines.internal.Companion.withState' call
    var this_0 = this._state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    var head = this_0.and_4spn93_k$(new Long(1073741823, 0)).shr_9fl3wl_k$(0).toInt_1tsl84_k$();
    var tail = this_0.and_4spn93_k$(new Long(-1073741824, 268435455)).shr_9fl3wl_k$(30).toInt_1tsl84_k$();
    var index = head;
    while (!((index & this.mask_1) === (tail & this.mask_1))) {
      var element = this.array_1.atomicfu$get(index & this.mask_1).get_kotlinx$atomicfu$value_vi2am5_k$();
      var tmp;
      if (!(element == null)) {
        tmp = !(element instanceof Placeholder);
      } else {
        tmp = false;
      }
      if (tmp) {
        res.add_utx5q5_k$(transform(!(element == null) ? element : THROW_CCE()));
      }
      index = index + 1 | 0;
    }
    return res;
  };
  protoOf(LockFreeTaskQueueCore).isClosed_baxhhm_k$ = function () {
    return !this._state_1.get_kotlinx$atomicfu$value_vi2am5_k$().and_4spn93_k$(new Long(0, 536870912)).equals(new Long(0, 0));
  };
  function callUndeliveredElement(_this__u8e3s4, element, context) {
    var tmp0_safe_receiver = callUndeliveredElementCatchingException(_this__u8e3s4, element, null);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      handleCoroutineException(context, tmp0_safe_receiver);
    }
  }
  function UndeliveredElementException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, UndeliveredElementException);
  }
  function callUndeliveredElementCatchingException(_this__u8e3s4, element, undeliveredElementException) {
    undeliveredElementException = undeliveredElementException === VOID ? null : undeliveredElementException;
    try {
      _this__u8e3s4(element);
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        if (!(undeliveredElementException == null) && !(undeliveredElementException.cause === ex)) {
          addSuppressed(undeliveredElementException, ex);
        } else {
          return new UndeliveredElementException('Exception in undelivered element handler for ' + toString_0(element), ex);
        }
      } else {
        throw $p;
      }
    }
    return undeliveredElementException;
  }
  function bindCancellationFun(_this__u8e3s4, element, context) {
    return bindCancellationFun$lambda(_this__u8e3s4, element, context);
  }
  function bindCancellationFun$lambda($this_bindCancellationFun, $element, $context) {
    return function (_anonymous_parameter_0__qggqh8) {
      callUndeliveredElement($this_bindCancellationFun, $element, $context);
      return Unit_getInstance();
    };
  }
  function ScopeCoroutine(context, uCont) {
    AbstractCoroutine.call(this, context, true, true);
    this.uCont_1 = uCont;
  }
  protoOf(ScopeCoroutine).get_uCont_iyyiam_k$ = function () {
    return this.uCont_1;
  };
  protoOf(ScopeCoroutine).get_callerFrame_pfdb95_k$ = function () {
    var tmp = this.uCont_1;
    return isInterface(tmp, CoroutineStackFrame) ? tmp : null;
  };
  protoOf(ScopeCoroutine).getStackTraceElement_um8m53_k$ = function () {
    return null;
  };
  protoOf(ScopeCoroutine).get_isScopedCoroutine_rwmmff_k$ = function () {
    return true;
  };
  protoOf(ScopeCoroutine).afterCompletion_2p0irt_k$ = function (state) {
    resumeCancellableWith(intercepted(this.uCont_1), recoverResult(state, this.uCont_1));
  };
  protoOf(ScopeCoroutine).afterResume_ugh2hm_k$ = function (state) {
    this.uCont_1.resumeWith_dtxwbr_k$(recoverResult(state, this.uCont_1));
  };
  function ContextScope(context) {
    this.coroutineContext_1 = context;
  }
  protoOf(ContextScope).get_coroutineContext_115oqo_k$ = function () {
    return this.coroutineContext_1;
  };
  protoOf(ContextScope).toString = function () {
    return 'CoroutineScope(coroutineContext=' + toString(this.coroutineContext_1) + ')';
  };
  function Symbol(symbol) {
    this.symbol_1 = symbol;
  }
  protoOf(Symbol).get_symbol_jqdfoh_k$ = function () {
    return this.symbol_1;
  };
  protoOf(Symbol).toString = function () {
    return '<' + this.symbol_1 + '>';
  };
  protoOf(Symbol).unbox_4pmzbj_k$ = function (value) {
    var tmp;
    if (value === this) {
      tmp = (null == null ? true : !(null == null)) ? null : THROW_CCE();
    } else {
      tmp = (value == null ? true : !(value == null)) ? value : THROW_CCE();
    }
    return tmp;
  };
  function synchronized(lock, block) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    return block();
  }
  function systemProp(propertyName, defaultValue, minValue, maxValue) {
    minValue = minValue === VOID ? 1 : minValue;
    maxValue = maxValue === VOID ? 2147483647 : maxValue;
    return systemProp_0(propertyName, toLong(defaultValue), toLong(minValue), toLong(maxValue)).toInt_1tsl84_k$();
  }
  function systemProp_0(propertyName, defaultValue, minValue, maxValue) {
    minValue = minValue === VOID ? new Long(1, 0) : minValue;
    maxValue = maxValue === VOID ? new Long(-1, 2147483647) : maxValue;
    var tmp0_elvis_lhs = systemProp_1(propertyName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return defaultValue;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var value = tmp;
    var tmp1_elvis_lhs = toLongOrNull(value);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var message = "System property '" + propertyName + "' has unrecognized value '" + value + "'";
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parsed = tmp_0;
    if (!(minValue.compareTo_9jj042_k$(parsed) <= 0 ? parsed.compareTo_9jj042_k$(maxValue) <= 0 : false)) {
      // Inline function 'kotlin.error' call
      var message_0 = "System property '" + propertyName + "' should be in range " + minValue.toString() + '..' + maxValue.toString() + ", but is '" + parsed.toString() + "'";
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    return parsed;
  }
  function startCoroutineCancellable(_this__u8e3s4, receiver, completion, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    // Inline function 'kotlinx.coroutines.intrinsics.runSafely' call
    try {
      var tmp = intercepted(createCoroutineUnintercepted(_this__u8e3s4, receiver, completion));
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      resumeCancellableWith(tmp, tmp$ret$0, onCancellation);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure(completion, e);
      } else {
        throw $p;
      }
    }
    return Unit_getInstance();
  }
  function startCoroutineCancellable_0(_this__u8e3s4, fatalCompletion) {
    // Inline function 'kotlinx.coroutines.intrinsics.runSafely' call
    try {
      var tmp = intercepted(_this__u8e3s4);
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      resumeCancellableWith(tmp, tmp$ret$0);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure(fatalCompletion, e);
      } else {
        throw $p;
      }
    }
    return Unit_getInstance();
  }
  function runSafely(completion, block) {
    try {
      block();
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure(completion, e);
      } else {
        throw $p;
      }
    }
  }
  function dispatcherFailure(completion, e) {
    // Inline function 'kotlin.Companion.failure' call
    Companion_getInstance();
    var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(e));
    completion.resumeWith_dtxwbr_k$(tmp$ret$0);
    throw e;
  }
  function startUndispatchedOrReturn(_this__u8e3s4, receiver, block) {
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.intrinsics.undispatchedResult' call
      var tmp;
      try {
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        tmp = startCoroutineUninterceptedOrReturnNonGeneratorVersion(block, receiver, _this__u8e3s4);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          tmp_0 = new CompletedExceptionally(e);
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var result = tmp;
      if (result === get_COROUTINE_SUSPENDED()) {
        tmp$ret$2 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var state = _this__u8e3s4.makeCompletingOnce_m8ggg9_k$(result);
      if (state === get_COMPLETING_WAITING_CHILDREN()) {
        tmp$ret$2 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var tmp_1;
      if (state instanceof CompletedExceptionally) {
        var tmp_2;
        state.get_cause_iplhs0_k$();
        if (true) {
          throw recoverStackTrace(state.get_cause_iplhs0_k$(), _this__u8e3s4.get_uCont_iyyiam_k$());
        } else {
          if (result instanceof CompletedExceptionally) {
            throw recoverStackTrace(result.get_cause_iplhs0_k$(), _this__u8e3s4.get_uCont_iyyiam_k$());
          } else {
            tmp_2 = result;
          }
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = unboxState(state);
      }
      tmp$ret$2 = tmp_1;
    }
    return tmp$ret$2;
  }
  function startCoroutineUndispatched(_this__u8e3s4, receiver, completion) {
    $l$block: {
      // Inline function 'kotlinx.coroutines.intrinsics.startDirect' call
      // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
      var actualCompletion = completion;
      var tmp;
      try {
        // Inline function 'kotlinx.coroutines.withCoroutineContext' call
        completion.get_context_h02k06_k$();
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        tmp = startCoroutineUninterceptedOrReturnNonGeneratorVersion(_this__u8e3s4, receiver, actualCompletion);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          // Inline function 'kotlin.coroutines.resumeWithException' call
          // Inline function 'kotlin.Companion.failure' call
          Companion_getInstance();
          var tmp$ret$5 = _Result___init__impl__xyqfz8(createFailure(e));
          actualCompletion.resumeWith_dtxwbr_k$(tmp$ret$5);
          break $l$block;
        } else {
          throw $p;
        }
      }
      var value = tmp;
      if (!(value === get_COROUTINE_SUSPENDED())) {
        // Inline function 'kotlin.coroutines.resume' call
        var value_0 = (value == null ? true : !(value == null)) ? value : THROW_CCE();
        // Inline function 'kotlin.Companion.success' call
        Companion_getInstance();
        var tmp$ret$8 = _Result___init__impl__xyqfz8(value_0);
        actualCompletion.resumeWith_dtxwbr_k$(tmp$ret$8);
      }
    }
  }
  function undispatchedResult(_this__u8e3s4, shouldThrow, startBlock) {
    var tmp;
    try {
      tmp = startBlock();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        tmp_0 = new CompletedExceptionally(e);
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var result = tmp;
    if (result === get_COROUTINE_SUSPENDED())
      return get_COROUTINE_SUSPENDED();
    var state = _this__u8e3s4.makeCompletingOnce_m8ggg9_k$(result);
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return get_COROUTINE_SUSPENDED();
    var tmp_1;
    if (state instanceof CompletedExceptionally) {
      var tmp_2;
      if (shouldThrow(state.get_cause_iplhs0_k$())) {
        throw recoverStackTrace(state.get_cause_iplhs0_k$(), _this__u8e3s4.get_uCont_iyyiam_k$());
      } else {
        if (result instanceof CompletedExceptionally) {
          throw recoverStackTrace(result.get_cause_iplhs0_k$(), _this__u8e3s4.get_uCont_iyyiam_k$());
        } else {
          tmp_2 = result;
        }
      }
      tmp_1 = tmp_2;
    } else {
      tmp_1 = unboxState(state);
    }
    return tmp_1;
  }
  function startDirect(completion, block) {
    // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
    var actualCompletion = completion;
    var tmp;
    try {
      tmp = block(actualCompletion);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        Companion_getInstance();
        var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(e));
        actualCompletion.resumeWith_dtxwbr_k$(tmp$ret$1);
        return Unit_getInstance();
      } else {
        throw $p;
      }
    }
    var value = tmp;
    if (!(value === get_COROUTINE_SUSPENDED())) {
      // Inline function 'kotlin.coroutines.resume' call
      var value_0 = (value == null ? true : !(value == null)) ? value : THROW_CCE();
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      var tmp$ret$3 = _Result___init__impl__xyqfz8(value_0);
      actualCompletion.resumeWith_dtxwbr_k$(tmp$ret$3);
    }
  }
  function onTimeout_0(_this__u8e3s4, timeMillis, block) {
    return _this__u8e3s4.invoke_43nm97_k$((new OnTimeout(timeMillis)).get_selectClause_ul7s9g_k$(), block);
  }
  function _get_timeMillis__1zae14($this) {
    return $this.timeMillis_1;
  }
  function register($this, select, ignoredParam) {
    if ($this.timeMillis_1.compareTo_9jj042_k$(new Long(0, 0)) <= 0) {
      select.selectInRegistrationPhase_ldg7ua_k$(Unit_getInstance());
      return Unit_getInstance();
    }
    // Inline function 'kotlinx.coroutines.Runnable' call
    var action = new OnTimeout$register$$inlined$Runnable$1(select, $this);
    if (!(select instanceof SelectImplementation))
      THROW_CCE();
    var context = select.get_context_h02k06_k$();
    var disposableHandle = get_delay(context).invokeOnTimeout_x4e3ys_k$($this.timeMillis_1, action, context);
    select.disposeOnCompletion_1gln1w_k$(disposableHandle);
  }
  function OnTimeout$register$ref() {
    var l = function (p0, p1, p2) {
      register(p0, p1, p2);
      return Unit_getInstance();
    };
    l.callableName = 'register';
    return l;
  }
  function OnTimeout$register$$inlined$Runnable$1($select, this$0) {
    this.$select_1 = $select;
    this.this$0__1 = this$0;
  }
  protoOf(OnTimeout$register$$inlined$Runnable$1).run_mvkpxh_k$ = function () {
    this.$select_1.trySelect_fbege0_k$(this.this$0__1, Unit_getInstance());
  };
  function OnTimeout(timeMillis) {
    this.timeMillis_1 = timeMillis;
  }
  protoOf(OnTimeout).get_selectClause_ul7s9g_k$ = function () {
    var tmp = OnTimeout$register$ref();
    return new SelectClause0Impl(this, typeof tmp === 'function' ? tmp : THROW_CCE());
  };
  function get_DUMMY_PROCESS_RESULT_FUNCTION() {
    _init_properties_Select_kt__zhm2jg();
    return DUMMY_PROCESS_RESULT_FUNCTION;
  }
  var DUMMY_PROCESS_RESULT_FUNCTION;
  function get_STATE_REG() {
    _init_properties_Select_kt__zhm2jg();
    return STATE_REG;
  }
  var STATE_REG;
  function get_STATE_COMPLETED() {
    _init_properties_Select_kt__zhm2jg();
    return STATE_COMPLETED;
  }
  var STATE_COMPLETED;
  function get_STATE_CANCELLED() {
    _init_properties_Select_kt__zhm2jg();
    return STATE_CANCELLED;
  }
  var STATE_CANCELLED;
  function get_NO_RESULT() {
    _init_properties_Select_kt__zhm2jg();
    return NO_RESULT;
  }
  var NO_RESULT;
  function get_PARAM_CLAUSE_0() {
    _init_properties_Select_kt__zhm2jg();
    return PARAM_CLAUSE_0;
  }
  var PARAM_CLAUSE_0;
  function SelectClause0() {
  }
  function SelectClause0Impl(clauseObject, regFunc, onCancellationConstructor) {
    onCancellationConstructor = onCancellationConstructor === VOID ? null : onCancellationConstructor;
    this.clauseObject_1 = clauseObject;
    this.regFunc_1 = regFunc;
    this.onCancellationConstructor_1 = onCancellationConstructor;
    this.processResFunc_1 = get_DUMMY_PROCESS_RESULT_FUNCTION();
  }
  protoOf(SelectClause0Impl).get_clauseObject_ilo9nb_k$ = function () {
    return this.clauseObject_1;
  };
  protoOf(SelectClause0Impl).get_regFunc_j7ktjj_k$ = function () {
    return this.regFunc_1;
  };
  protoOf(SelectClause0Impl).get_onCancellationConstructor_4kgej5_k$ = function () {
    return this.onCancellationConstructor_1;
  };
  protoOf(SelectClause0Impl).get_processResFunc_ky2xuq_k$ = function () {
    return this.processResFunc_1;
  };
  function SelectInstance() {
  }
  function SelectClause1() {
  }
  function SelectClause1Impl(clauseObject, regFunc, processResFunc, onCancellationConstructor) {
    onCancellationConstructor = onCancellationConstructor === VOID ? null : onCancellationConstructor;
    this.clauseObject_1 = clauseObject;
    this.regFunc_1 = regFunc;
    this.processResFunc_1 = processResFunc;
    this.onCancellationConstructor_1 = onCancellationConstructor;
  }
  protoOf(SelectClause1Impl).get_clauseObject_ilo9nb_k$ = function () {
    return this.clauseObject_1;
  };
  protoOf(SelectClause1Impl).get_regFunc_j7ktjj_k$ = function () {
    return this.regFunc_1;
  };
  protoOf(SelectClause1Impl).get_processResFunc_ky2xuq_k$ = function () {
    return this.processResFunc_1;
  };
  protoOf(SelectClause1Impl).get_onCancellationConstructor_4kgej5_k$ = function () {
    return this.onCancellationConstructor_1;
  };
  function _get_regFunc__n7mheh($this) {
    return $this.regFunc_1;
  }
  function _get_processResFunc__6f7ziu($this) {
    return $this.processResFunc_1;
  }
  function _get_param__cy9u70($this) {
    return $this.param_1;
  }
  function _get_block__jewopo($this) {
    return $this.block_1;
  }
  function $invokeBlockCOROUTINE$(_this__u8e3s4, argument, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.argument_1 = argument;
  }
  protoOf($invokeBlockCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            this.block0__1 = this._this__u8e3s4__1.block_1;
            if (this._this__u8e3s4__1.param_1 === get_PARAM_CLAUSE_0()) {
              var tmp_0 = this.block0__1;
              if (!isSuspendFunction(tmp_0, 0))
                THROW_CCE();
              this.set_state_rjd8d0_k$(2);
              suspendResult = this.block0__1(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1 = this.block0__1;
              if (!isSuspendFunction(tmp_1, 1))
                THROW_CCE();
              this.set_state_rjd8d0_k$(1);
              suspendResult = this.block0__1(this.argument_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.WHEN_RESULT1__1 = suspendResult;
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 2:
            this.WHEN_RESULT1__1 = suspendResult;
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.WHEN_RESULT1__1;
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function _get_state__b8zcm8_0($this) {
    return $this.state_1;
  }
  function _get_inRegistrationPhase__dkcj1o($this) {
    // Inline function 'kotlin.let' call
    var it = $this.state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    var tmp;
    if (it === get_STATE_REG()) {
      tmp = true;
    } else {
      tmp = isInterface(it, KtList);
    }
    return tmp;
  }
  function _get_isSelected__uy0hmu($this) {
    var tmp = $this.state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    return tmp instanceof ClauseData;
  }
  function _get_isCancelled__nhbn6y($this) {
    return $this.state_1.get_kotlinx$atomicfu$value_vi2am5_k$() === get_STATE_CANCELLED();
  }
  function _set_clauses__1890kh($this, _set____db54di) {
    $this.clauses_1 = _set____db54di;
  }
  function _get_clauses__odz9sj($this) {
    return $this.clauses_1;
  }
  function _set_disposableHandleOrSegment__6b4y0z($this, _set____db54di) {
    $this.disposableHandleOrSegment_1 = _set____db54di;
  }
  function _get_disposableHandleOrSegment__8jzgzb($this) {
    return $this.disposableHandleOrSegment_1;
  }
  function _set_indexInSegment__2cjdhh($this, _set____db54di) {
    $this.indexInSegment_1 = _set____db54di;
  }
  function _get_indexInSegment__n6k2jz($this) {
    return $this.indexInSegment_1;
  }
  function _set_internalResult__q6gt25($this, _set____db54di) {
    $this.internalResult_1 = _set____db54di;
  }
  function _get_internalResult__jbjsvj($this) {
    return $this.internalResult_1;
  }
  function doSelectSuspend($this, $completion) {
    var tmp = new $doSelectSuspendCOROUTINE$($this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function checkClauseObject($this, clauseObject) {
    var clauses = ensureNotNull($this.clauses_1);
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.none' call
      var tmp;
      if (isInterface(clauses, Collection)) {
        tmp = clauses.isEmpty_y1axqb_k$();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = clauses.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        if (element.clauseObject_1 === clauseObject) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    // Inline function 'kotlin.check' call
    if (!tmp$ret$0) {
      var message = 'Cannot use select clauses on the same object: ' + toString(clauseObject);
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function waitUntilSelected($this, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.initCancellability_shqc60_k$();
    $l$block_0: {
      // Inline function 'kotlinx.atomicfu.loop' call
      var this_0 = $this.state_1;
      while (true) {
        var curState = this_0.get_kotlinx$atomicfu$value_vi2am5_k$();
        if (curState === get_STATE_REG()) {
          if ($this.state_1.atomicfu$compareAndSet(curState, cancellable)) {
            invokeOnCancellation(cancellable, $this);
            break $l$block_0;
          }
        } else {
          if (isInterface(curState, KtList)) {
            if ($this.state_1.atomicfu$compareAndSet(curState, get_STATE_REG())) {
              if (!isInterface(curState, KtList))
                THROW_CCE();
              // Inline function 'kotlin.collections.forEach' call
              var _iterator__ex2g4s = curState.iterator_jk1svi_k$();
              while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
                var element = _iterator__ex2g4s.next_20eer_k$();
                reregisterClause($this, element);
              }
            }
          } else {
            if (curState instanceof ClauseData) {
              cancellable.resume_a4kjl1_k$(Unit_getInstance(), curState.createOnCancellationAction_6k7l4i_k$($this, $this.internalResult_1));
              break $l$block_0;
            } else {
              // Inline function 'kotlin.error' call
              var message = 'unexpected state: ' + toString(curState);
              throw IllegalStateException_init_$Create$(toString(message));
            }
          }
        }
      }
    }
    return cancellable.getResult_fck196_k$();
  }
  function reregisterClause($this, clauseObject) {
    var clause = ensureNotNull(findClause($this, clauseObject));
    clause.disposableHandleOrSegment_1 = null;
    clause.indexInSegment_1 = -1;
    $this.register_4szh8u_k$(clause, true);
  }
  function trySelectInternal($this, clauseObject, internalResult) {
    $l$loop: while (true) {
      var curState = $this.state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (isInterface(curState, CancellableContinuation)) {
        var tmp0_elvis_lhs = findClause($this, clauseObject);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          continue $l$loop;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var clause = tmp;
        var onCancellation = clause.createOnCancellationAction_6k7l4i_k$($this, internalResult);
        if ($this.state_1.atomicfu$compareAndSet(curState, clause)) {
          var cont = isInterface(curState, CancellableContinuation) ? curState : THROW_CCE();
          $this.internalResult_1 = internalResult;
          if (tryResume_1(cont, onCancellation))
            return 0;
          $this.internalResult_1 = get_NO_RESULT();
          return 2;
        }
      } else {
        var tmp_0;
        if (equals(curState, get_STATE_COMPLETED())) {
          tmp_0 = true;
        } else {
          tmp_0 = curState instanceof ClauseData;
        }
        if (tmp_0)
          return 3;
        else {
          if (equals(curState, get_STATE_CANCELLED()))
            return 2;
          else {
            if (equals(curState, get_STATE_REG())) {
              if ($this.state_1.atomicfu$compareAndSet(curState, listOf_0(clauseObject)))
                return 1;
            } else {
              if (isInterface(curState, KtList)) {
                if ($this.state_1.atomicfu$compareAndSet(curState, plus_0(curState, clauseObject)))
                  return 1;
              } else {
                // Inline function 'kotlin.error' call
                var message = 'Unexpected state: ' + toString(curState);
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }
          }
        }
      }
    }
  }
  function findClause($this, clauseObject) {
    var tmp0_elvis_lhs = $this.clauses_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var clauses = tmp;
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = clauses.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        if (element.clauseObject_1 === clauseObject) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp1_elvis_lhs = tmp$ret$1;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var message = 'Clause with object ' + toString(clauseObject) + ' is not found';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  }
  function complete($this, $completion) {
    var tmp = new $completeCOROUTINE$($this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function processResultAndInvokeBlockRecoveringException($this, clause, internalResult, $completion) {
    var tmp = new $processResultAndInvokeBlockRecoveringExceptionCOROUTINE$($this, clause, internalResult, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function cleanup($this, selectedClause) {
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_elvis_lhs = $this.clauses_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var clauses = tmp;
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = clauses.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      if (!(element === selectedClause)) {
        element.dispose_3nnxhr_k$();
      }
    }
    $this.state_1.set_kotlinx$atomicfu$value_508e3y_k$(get_STATE_COMPLETED());
    $this.internalResult_1 = get_NO_RESULT();
    $this.clauses_1 = null;
  }
  function ClauseData($outer, clauseObject, regFunc, processResFunc, param, block, onCancellationConstructor) {
    this.$this_1 = $outer;
    this.clauseObject_1 = clauseObject;
    this.regFunc_1 = regFunc;
    this.processResFunc_1 = processResFunc;
    this.param_1 = param;
    this.block_1 = block;
    this.onCancellationConstructor_1 = onCancellationConstructor;
    this.disposableHandleOrSegment_1 = null;
    this.indexInSegment_1 = -1;
  }
  protoOf(ClauseData).get_clauseObject_ilo9nb_k$ = function () {
    return this.clauseObject_1;
  };
  protoOf(ClauseData).get_onCancellationConstructor_4kgej5_k$ = function () {
    return this.onCancellationConstructor_1;
  };
  protoOf(ClauseData).set_disposableHandleOrSegment_len2ec_k$ = function (_set____db54di) {
    this.disposableHandleOrSegment_1 = _set____db54di;
  };
  protoOf(ClauseData).get_disposableHandleOrSegment_te0n1d_k$ = function () {
    return this.disposableHandleOrSegment_1;
  };
  protoOf(ClauseData).set_indexInSegment_icmi7l_k$ = function (_set____db54di) {
    this.indexInSegment_1 = _set____db54di;
  };
  protoOf(ClauseData).get_indexInSegment_ra2xy3_k$ = function () {
    return this.indexInSegment_1;
  };
  protoOf(ClauseData).tryRegisterAsWaiter_45oob0_k$ = function (select) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    this.regFunc_1(this.clauseObject_1, select, this.param_1);
    return select.internalResult_1 === get_NO_RESULT();
  };
  protoOf(ClauseData).processResult_nsa4yb_k$ = function (result) {
    return this.processResFunc_1(this.clauseObject_1, this.param_1, result);
  };
  protoOf(ClauseData).invokeBlock_xrc4lb_k$ = function (argument, $completion) {
    var tmp = new $invokeBlockCOROUTINE$(this, argument, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ClauseData).dispose_3nnxhr_k$ = function () {
    // Inline function 'kotlin.with' call
    var $this$with = this.disposableHandleOrSegment_1;
    var tmp;
    if ($this$with instanceof Segment) {
      $this$with.onCancellation_4jec3b_k$(this.indexInSegment_1, null, this.$this_1.get_context_h02k06_k$());
      tmp = Unit_getInstance();
    } else {
      var tmp0_safe_receiver = (!($this$with == null) ? isInterface($this$with, DisposableHandle) : false) ? $this$with : null;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        tmp0_safe_receiver.dispose_3nnxhr_k$();
        tmp_0 = Unit_getInstance();
      }
      tmp = tmp_0;
    }
  };
  protoOf(ClauseData).createOnCancellationAction_6k7l4i_k$ = function (select, internalResult) {
    var tmp0_safe_receiver = this.onCancellationConstructor_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver(select, this.param_1, internalResult);
  };
  function $doSelectCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($doSelectCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            if (_get_isSelected__uy0hmu(this._this__u8e3s4__1)) {
              this.set_state_rjd8d0_k$(2);
              suspendResult = complete(this._this__u8e3s4__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(1);
              suspendResult = doSelectSuspend(this._this__u8e3s4__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.WHEN_RESULT0__1 = suspendResult;
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 2:
            this.WHEN_RESULT0__1 = suspendResult;
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.WHEN_RESULT0__1;
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $doSelectSuspendCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($doSelectSuspendCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            suspendResult = waitUntilSelected(this._this__u8e3s4__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.set_state_rjd8d0_k$(2);
            suspendResult = complete(this._this__u8e3s4__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $completeCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($completeCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_0 = this;
            var tmp_1 = this._this__u8e3s4__1.state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
            tmp_0.selectedClause0__1 = tmp_1 instanceof ClauseData ? tmp_1 : THROW_CCE();
            this.internalResult1__1 = this._this__u8e3s4__1.internalResult_1;
            cleanup(this._this__u8e3s4__1, this.selectedClause0__1);
            if (!get_RECOVER_STACK_TRACES()) {
              this.blockArgument3__1 = this.selectedClause0__1.processResult_nsa4yb_k$(this.internalResult1__1);
              this.set_state_rjd8d0_k$(2);
              suspendResult = this.selectedClause0__1.invokeBlock_xrc4lb_k$(this.blockArgument3__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(1);
              suspendResult = processResultAndInvokeBlockRecoveringException(this._this__u8e3s4__1, this.selectedClause0__1, this.internalResult1__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.WHEN_RESULT2__1 = suspendResult;
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 2:
            this.WHEN_RESULT2__1 = suspendResult;
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.WHEN_RESULT2__1;
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $processResultAndInvokeBlockRecoveringExceptionCOROUTINE$(_this__u8e3s4, clause, internalResult, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.clause_1 = clause;
    this.internalResult_1 = internalResult;
  }
  protoOf($processResultAndInvokeBlockRecoveringExceptionCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_exceptionState_fex74n_k$(2);
            this.blockArgument1__1 = this.clause_1.processResult_nsa4yb_k$(this.internalResult_1);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.clause_1.invokeBlock_xrc4lb_k$(this.blockArgument1__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.TRY_RESULT0__1 = suspendResult;
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof Error) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp_1 = this;
              throw e;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_fex74n_k$(3);
            return this.TRY_RESULT0__1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  function SelectImplementation(context) {
    this.context_1 = context;
    this.state_1 = atomic$ref$1(get_STATE_REG());
    this.clauses_1 = ArrayList_init_$Create$(2);
    this.disposableHandleOrSegment_1 = null;
    this.indexInSegment_1 = -1;
    this.internalResult_1 = get_NO_RESULT();
  }
  protoOf(SelectImplementation).get_context_h02k06_k$ = function () {
    return this.context_1;
  };
  protoOf(SelectImplementation).doSelect_om1v0v_k$ = function ($completion) {
    var tmp = new $doSelectCOROUTINE$(this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(SelectImplementation).invoke_43nm97_k$ = function (_this__u8e3s4, block) {
    return this.register$default_af5jpc_k$(new ClauseData(this, _this__u8e3s4.get_clauseObject_ilo9nb_k$(), _this__u8e3s4.get_regFunc_j7ktjj_k$(), _this__u8e3s4.get_processResFunc_ky2xuq_k$(), get_PARAM_CLAUSE_0(), block, _this__u8e3s4.get_onCancellationConstructor_4kgej5_k$()));
  };
  protoOf(SelectImplementation).invoke_8p69io_k$ = function (_this__u8e3s4, block) {
    return this.register$default_af5jpc_k$(new ClauseData(this, _this__u8e3s4.get_clauseObject_ilo9nb_k$(), _this__u8e3s4.get_regFunc_j7ktjj_k$(), _this__u8e3s4.get_processResFunc_ky2xuq_k$(), null, block, _this__u8e3s4.get_onCancellationConstructor_4kgej5_k$()));
  };
  protoOf(SelectImplementation).invoke_13uk3f_k$ = function (_this__u8e3s4, param, block) {
    return this.register$default_af5jpc_k$(new ClauseData(this, _this__u8e3s4.get_clauseObject_ilo9nb_k$(), _this__u8e3s4.get_regFunc_j7ktjj_k$(), _this__u8e3s4.get_processResFunc_ky2xuq_k$(), param, block, _this__u8e3s4.get_onCancellationConstructor_4kgej5_k$()));
  };
  protoOf(SelectImplementation).register_4szh8u_k$ = function (_this__u8e3s4, reregister) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlin.let' call
    if (this.state_1.get_kotlinx$atomicfu$value_vi2am5_k$() instanceof ClauseData)
      return Unit_getInstance();
    if (!reregister) {
      checkClauseObject(this, _this__u8e3s4.clauseObject_1);
    }
    if (_this__u8e3s4.tryRegisterAsWaiter_45oob0_k$(this)) {
      if (!reregister) {
        // Inline function 'kotlin.collections.plusAssign' call
        ensureNotNull(this.clauses_1).add_utx5q5_k$(_this__u8e3s4);
      }
      _this__u8e3s4.disposableHandleOrSegment_1 = this.disposableHandleOrSegment_1;
      _this__u8e3s4.indexInSegment_1 = this.indexInSegment_1;
      this.disposableHandleOrSegment_1 = null;
      this.indexInSegment_1 = -1;
    } else {
      this.state_1.set_kotlinx$atomicfu$value_508e3y_k$(_this__u8e3s4);
    }
  };
  protoOf(SelectImplementation).register$default_af5jpc_k$ = function (_this__u8e3s4, reregister, $super) {
    reregister = reregister === VOID ? false : reregister;
    var tmp;
    if ($super === VOID) {
      this.register_4szh8u_k$(_this__u8e3s4, reregister);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.register_4szh8u_k$.call(this, _this__u8e3s4, reregister);
    }
    return tmp;
  };
  protoOf(SelectImplementation).disposeOnCompletion_1gln1w_k$ = function (disposableHandle) {
    this.disposableHandleOrSegment_1 = disposableHandle;
  };
  protoOf(SelectImplementation).invokeOnCancellation_9j58v1_k$ = function (segment, index) {
    this.disposableHandleOrSegment_1 = segment;
    this.indexInSegment_1 = index;
  };
  protoOf(SelectImplementation).selectInRegistrationPhase_ldg7ua_k$ = function (internalResult) {
    this.internalResult_1 = internalResult;
  };
  protoOf(SelectImplementation).trySelect_fbege0_k$ = function (clauseObject, result) {
    return trySelectInternal(this, clauseObject, result) === 0;
  };
  protoOf(SelectImplementation).trySelectDetailed_t8yc08_k$ = function (clauseObject, result) {
    return TrySelectDetailedResult_0(trySelectInternal(this, clauseObject, result));
  };
  protoOf(SelectImplementation).invoke_py2q9a_k$ = function (cause) {
    var tmp0 = this.state_1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp0.get_kotlinx$atomicfu$value_vi2am5_k$();
        if (cur === get_STATE_COMPLETED())
          return Unit_getInstance();
        var upd = get_STATE_CANCELLED();
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          break $l$block;
        }
      }
    }
    var tmp0_elvis_lhs = this.clauses_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var clauses = tmp;
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = clauses.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      element.dispose_3nnxhr_k$();
    }
    this.internalResult_1 = get_NO_RESULT();
    this.clauses_1 = null;
  };
  var TrySelectDetailedResult_SUCCESSFUL_instance;
  var TrySelectDetailedResult_REREGISTER_instance;
  var TrySelectDetailedResult_CANCELLED_instance;
  var TrySelectDetailedResult_ALREADY_SELECTED_instance;
  function values_1() {
    return [TrySelectDetailedResult_SUCCESSFUL_getInstance(), TrySelectDetailedResult_REREGISTER_getInstance(), TrySelectDetailedResult_CANCELLED_getInstance(), TrySelectDetailedResult_ALREADY_SELECTED_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'SUCCESSFUL':
        return TrySelectDetailedResult_SUCCESSFUL_getInstance();
      case 'REREGISTER':
        return TrySelectDetailedResult_REREGISTER_getInstance();
      case 'CANCELLED':
        return TrySelectDetailedResult_CANCELLED_getInstance();
      case 'ALREADY_SELECTED':
        return TrySelectDetailedResult_ALREADY_SELECTED_getInstance();
      default:
        TrySelectDetailedResult_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_1() {
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_1());
    return $ENTRIES_1;
  }
  var TrySelectDetailedResult_entriesInitialized;
  function TrySelectDetailedResult_initEntries() {
    if (TrySelectDetailedResult_entriesInitialized)
      return Unit_getInstance();
    TrySelectDetailedResult_entriesInitialized = true;
    TrySelectDetailedResult_SUCCESSFUL_instance = new TrySelectDetailedResult('SUCCESSFUL', 0);
    TrySelectDetailedResult_REREGISTER_instance = new TrySelectDetailedResult('REREGISTER', 1);
    TrySelectDetailedResult_CANCELLED_instance = new TrySelectDetailedResult('CANCELLED', 2);
    TrySelectDetailedResult_ALREADY_SELECTED_instance = new TrySelectDetailedResult('ALREADY_SELECTED', 3);
  }
  var $ENTRIES_1;
  function TrySelectDetailedResult(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SelectClause2() {
  }
  function SelectClause2Impl(clauseObject, regFunc, processResFunc, onCancellationConstructor) {
    onCancellationConstructor = onCancellationConstructor === VOID ? null : onCancellationConstructor;
    this.clauseObject_1 = clauseObject;
    this.regFunc_1 = regFunc;
    this.processResFunc_1 = processResFunc;
    this.onCancellationConstructor_1 = onCancellationConstructor;
  }
  protoOf(SelectClause2Impl).get_clauseObject_ilo9nb_k$ = function () {
    return this.clauseObject_1;
  };
  protoOf(SelectClause2Impl).get_regFunc_j7ktjj_k$ = function () {
    return this.regFunc_1;
  };
  protoOf(SelectClause2Impl).get_processResFunc_ky2xuq_k$ = function () {
    return this.processResFunc_1;
  };
  protoOf(SelectClause2Impl).get_onCancellationConstructor_4kgej5_k$ = function () {
    return this.onCancellationConstructor_1;
  };
  function SelectClause() {
  }
  function SelectBuilder() {
  }
  function SelectInstanceInternal() {
  }
  function get_TRY_SELECT_SUCCESSFUL() {
    return TRY_SELECT_SUCCESSFUL;
  }
  var TRY_SELECT_SUCCESSFUL;
  function TrySelectDetailedResult_0(trySelectInternalResult) {
    _init_properties_Select_kt__zhm2jg();
    var tmp;
    switch (trySelectInternalResult) {
      case 0:
        tmp = TrySelectDetailedResult_SUCCESSFUL_getInstance();
        break;
      case 1:
        tmp = TrySelectDetailedResult_REREGISTER_getInstance();
        break;
      case 2:
        tmp = TrySelectDetailedResult_CANCELLED_getInstance();
        break;
      case 3:
        tmp = TrySelectDetailedResult_ALREADY_SELECTED_getInstance();
        break;
      default:
        var message = 'Unexpected internal result: ' + trySelectInternalResult;
        throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  }
  function tryResume_1(_this__u8e3s4, onCancellation) {
    _init_properties_Select_kt__zhm2jg();
    var tmp0_elvis_lhs = _this__u8e3s4.tryResume_2flfz_k$(Unit_getInstance(), null, onCancellation);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var token = tmp;
    _this__u8e3s4.completeResume_fabtk_k$(token);
    return true;
  }
  function get_TRY_SELECT_CANCELLED() {
    return TRY_SELECT_CANCELLED;
  }
  var TRY_SELECT_CANCELLED;
  function get_TRY_SELECT_ALREADY_SELECTED() {
    return TRY_SELECT_ALREADY_SELECTED;
  }
  var TRY_SELECT_ALREADY_SELECTED;
  function get_TRY_SELECT_REREGISTER() {
    return TRY_SELECT_REREGISTER;
  }
  var TRY_SELECT_REREGISTER;
  function DUMMY_PROCESS_RESULT_FUNCTION$lambda(_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
    _init_properties_Select_kt__zhm2jg();
    return null;
  }
  function TrySelectDetailedResult_SUCCESSFUL_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_SUCCESSFUL_instance;
  }
  function TrySelectDetailedResult_REREGISTER_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_REREGISTER_instance;
  }
  function TrySelectDetailedResult_CANCELLED_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_CANCELLED_instance;
  }
  function TrySelectDetailedResult_ALREADY_SELECTED_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_ALREADY_SELECTED_instance;
  }
  var properties_initialized_Select_kt_7rpl36;
  function _init_properties_Select_kt__zhm2jg() {
    if (!properties_initialized_Select_kt_7rpl36) {
      properties_initialized_Select_kt_7rpl36 = true;
      DUMMY_PROCESS_RESULT_FUNCTION = DUMMY_PROCESS_RESULT_FUNCTION$lambda;
      STATE_REG = new Symbol('STATE_REG');
      STATE_COMPLETED = new Symbol('STATE_COMPLETED');
      STATE_CANCELLED = new Symbol('STATE_CANCELLED');
      NO_RESULT = new Symbol('NO_RESULT');
      PARAM_CLAUSE_0 = new Symbol('PARAM_CLAUSE_0');
    }
  }
  function get_NO_OWNER() {
    _init_properties_Mutex_kt__jod56b();
    return NO_OWNER;
  }
  var NO_OWNER;
  function get_ON_LOCK_ALREADY_LOCKED_BY_OWNER() {
    _init_properties_Mutex_kt__jod56b();
    return ON_LOCK_ALREADY_LOCKED_BY_OWNER;
  }
  var ON_LOCK_ALREADY_LOCKED_BY_OWNER;
  var properties_initialized_Mutex_kt_yv4p3j;
  function _init_properties_Mutex_kt__jod56b() {
    if (!properties_initialized_Mutex_kt_yv4p3j) {
      properties_initialized_Mutex_kt_yv4p3j = true;
      NO_OWNER = new Symbol('NO_OWNER');
      ON_LOCK_ALREADY_LOCKED_BY_OWNER = new Symbol('ALREADY_LOCKED_BY_OWNER');
    }
  }
  function get_MAX_SPIN_CYCLES() {
    _init_properties_Semaphore_kt__t514r6();
    return MAX_SPIN_CYCLES;
  }
  var MAX_SPIN_CYCLES;
  function get_PERMIT() {
    _init_properties_Semaphore_kt__t514r6();
    return PERMIT;
  }
  var PERMIT;
  function get_TAKEN() {
    _init_properties_Semaphore_kt__t514r6();
    return TAKEN;
  }
  var TAKEN;
  function get_BROKEN() {
    _init_properties_Semaphore_kt__t514r6();
    return BROKEN;
  }
  var BROKEN;
  function get_CANCELLED() {
    _init_properties_Semaphore_kt__t514r6();
    return CANCELLED;
  }
  var CANCELLED;
  function get_SEGMENT_SIZE_0() {
    _init_properties_Semaphore_kt__t514r6();
    return SEGMENT_SIZE_0;
  }
  var SEGMENT_SIZE_0;
  var properties_initialized_Semaphore_kt_uqcwok;
  function _init_properties_Semaphore_kt__t514r6() {
    if (!properties_initialized_Semaphore_kt_uqcwok) {
      properties_initialized_Semaphore_kt_uqcwok = true;
      MAX_SPIN_CYCLES = systemProp('kotlinx.coroutines.semaphore.maxSpinCycles', 100);
      PERMIT = new Symbol('PERMIT');
      TAKEN = new Symbol('TAKEN');
      BROKEN = new Symbol('BROKEN');
      CANCELLED = new Symbol('CANCELLED');
      SEGMENT_SIZE_0 = systemProp('kotlinx.coroutines.semaphore.segmentSize', 16);
    }
  }
  function toDebugString(_this__u8e3s4) {
    return toString(_this__u8e3s4);
  }
  function withContinuationContext(continuation, countOrElement, block) {
    return block();
  }
  function withCoroutineContext(context, countOrElement, block) {
    return block();
  }
  function get_DefaultDelay() {
    var tmp = Dispatchers_getInstance().get_Default_goqax4_k$();
    return isInterface(tmp, Delay) ? tmp : THROW_CCE();
  }
  function createDefaultDispatcher() {
    var tmp;
    if (isJsdom()) {
      tmp = NodeDispatcher_getInstance();
    } else {
      var tmp_0;
      var tmp_1;
      if (!(typeof window === 'undefined')) {
        // Inline function 'kotlin.js.asDynamic' call
        tmp_1 = window != null;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = !(typeof window.addEventListener === 'undefined');
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = asCoroutineDispatcher(window);
      } else {
        if (typeof process === 'undefined' || typeof process.nextTick === 'undefined') {
          tmp = SetTimeoutDispatcher_getInstance();
        } else {
          tmp = NodeDispatcher_getInstance();
        }
      }
    }
    return tmp;
  }
  function isJsdom() {
    return !(typeof navigator === 'undefined') && navigator != null && navigator.userAgent != null && !(typeof navigator.userAgent === 'undefined') && !(typeof navigator.userAgent.match === 'undefined') && navigator.userAgent.match('\\bjsdom\\b');
  }
  function get_UNDEFINED_0() {
    return UNDEFINED_0;
  }
  var UNDEFINED_0;
  function newCoroutineContext(_this__u8e3s4, context) {
    var combined = _this__u8e3s4.get_coroutineContext_115oqo_k$().plus_s13ygv_k$(context);
    return !(combined === Dispatchers_getInstance().get_Default_goqax4_k$()) && combined.get_y2st91_k$(Key_getInstance()) == null ? combined.plus_s13ygv_k$(Dispatchers_getInstance().get_Default_goqax4_k$()) : combined;
  }
  function newCoroutineContext_0(_this__u8e3s4, addedContext) {
    return _this__u8e3s4.plus_s13ygv_k$(addedContext);
  }
  function UndispatchedCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
  }
  protoOf(UndispatchedCoroutine).afterResume_ugh2hm_k$ = function (state) {
    return this.get_uCont_iyyiam_k$().resumeWith_dtxwbr_k$(recoverResult(state, this.get_uCont_iyyiam_k$()));
  };
  function get_coroutineName(_this__u8e3s4) {
    return null;
  }
  function set_counter(_set____db54di) {
    counter = _set____db54di;
  }
  function get_counter() {
    return counter;
  }
  var counter;
  function get_DEBUG() {
    return DEBUG;
  }
  var DEBUG;
  function get_classSimpleName(_this__u8e3s4) {
    var tmp0_elvis_lhs = getKClassFromExpression(_this__u8e3s4).get_simpleName_r6f8py_k$();
    return tmp0_elvis_lhs == null ? 'Unknown' : tmp0_elvis_lhs;
  }
  function get_hexAddress(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var result = _this__u8e3s4.__debug_counter;
    if (!(typeof result === 'number')) {
      counter = counter + 1 | 0;
      result = counter;
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.__debug_counter = result;
    }
    return ((!(result == null) ? typeof result === 'number' : false) ? result : THROW_CCE()).toString();
  }
  function assert(value) {
  }
  function NodeDispatcher() {
    NodeDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(NodeDispatcher).scheduleQueueProcessing_nxtlcz_k$ = function () {
    process.nextTick(this.get_messageQueue_9lpzve_k$().processQueue_1);
  };
  var NodeDispatcher_instance;
  function NodeDispatcher_getInstance() {
    if (NodeDispatcher_instance == null)
      new NodeDispatcher();
    return NodeDispatcher_instance;
  }
  function _get_dispatcher__dketks_0($this) {
    return $this.dispatcher_1;
  }
  function ScheduledMessageQueue$processQueue$lambda(this$0) {
    return function () {
      this$0.process_myqcf5_k$();
      return Unit_getInstance();
    };
  }
  function ScheduledMessageQueue(dispatcher) {
    MessageQueue.call(this);
    this.dispatcher_1 = dispatcher;
    var tmp = this;
    tmp.processQueue_1 = ScheduledMessageQueue$processQueue$lambda(this);
  }
  protoOf(ScheduledMessageQueue).get_processQueue_any91e_k$ = function () {
    return this.processQueue_1;
  };
  protoOf(ScheduledMessageQueue).schedule_o777if_k$ = function () {
    this.dispatcher_1.scheduleQueueProcessing_nxtlcz_k$();
  };
  protoOf(ScheduledMessageQueue).reschedule_mhlssa_k$ = function () {
    setTimeout(this.processQueue_1, 0);
  };
  protoOf(ScheduledMessageQueue).setTimeout_6sdjei_k$ = function (timeout) {
    setTimeout(this.processQueue_1, timeout);
  };
  function w3cSetTimeout(handler, timeout) {
    return setTimeout(handler, timeout);
  }
  function _get_window__ax0zxh($this) {
    return $this.window_1;
  }
  function _get_messageName__5th09r($this) {
    return $this.messageName_1;
  }
  function WindowMessageQueue$lambda(this$0) {
    return function (event) {
      var tmp;
      if (event.source == this$0.window_1 && event.data == this$0.messageName_1) {
        event.stopPropagation();
        this$0.process_myqcf5_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function WindowMessageQueue$schedule$lambda(this$0) {
    return function (it) {
      this$0.process_myqcf5_k$();
      return Unit_getInstance();
    };
  }
  function WindowMessageQueue(window_0) {
    MessageQueue.call(this);
    this.window_1 = window_0;
    this.messageName_1 = 'dispatchCoroutine';
    this.window_1.addEventListener('message', WindowMessageQueue$lambda(this), true);
  }
  protoOf(WindowMessageQueue).schedule_o777if_k$ = function () {
    var tmp = Promise.resolve(Unit_getInstance());
    tmp.then(WindowMessageQueue$schedule$lambda(this));
  };
  protoOf(WindowMessageQueue).reschedule_mhlssa_k$ = function () {
    this.window_1.postMessage(this.messageName_1, '*');
  };
  function w3cSetTimeout_0(window_0, handler, timeout) {
    return setTimeout_0(window_0, handler, timeout);
  }
  function w3cClearTimeout(window_0, handle) {
    return window_0.clearTimeout(handle);
  }
  function w3cClearTimeout_0(handle) {
    return clearTimeout(handle);
  }
  function setTimeout_0(window_0, handler, timeout) {
    return window_0.setTimeout(handler, timeout);
  }
  function asCoroutineDispatcher(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_elvis_lhs = _this__u8e3s4.coroutineDispatcher;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new WindowDispatcher(_this__u8e3s4);
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.coroutineDispatcher = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function propagateExceptionFinalResort(exception) {
    console.error(exception.toString());
  }
  function _get_mainDispatcher__sm5ex7($this) {
    return $this.mainDispatcher_1;
  }
  function _set_injectedMainDispatcher__9278zd($this, _set____db54di) {
    $this.injectedMainDispatcher_1 = _set____db54di;
  }
  function _get_injectedMainDispatcher__d6w7gb($this) {
    return $this.injectedMainDispatcher_1;
  }
  function Dispatchers() {
    Dispatchers_instance = this;
    this.Default_1 = createDefaultDispatcher();
    this.Unconfined_1 = Unconfined_getInstance();
    this.mainDispatcher_1 = new JsMainDispatcher(this.Default_1, false);
    this.injectedMainDispatcher_1 = null;
  }
  protoOf(Dispatchers).get_Default_goqax4_k$ = function () {
    return this.Default_1;
  };
  protoOf(Dispatchers).get_Main_wo5vz6_k$ = function () {
    var tmp0_elvis_lhs = this.injectedMainDispatcher_1;
    return tmp0_elvis_lhs == null ? this.mainDispatcher_1 : tmp0_elvis_lhs;
  };
  protoOf(Dispatchers).get_Unconfined_sfvx0q_k$ = function () {
    return this.Unconfined_1;
  };
  protoOf(Dispatchers).injectMain_7p3pu7_k$ = function (dispatcher) {
    this.injectedMainDispatcher_1 = dispatcher;
  };
  var Dispatchers_instance;
  function Dispatchers_getInstance() {
    if (Dispatchers_instance == null)
      new Dispatchers();
    return Dispatchers_instance;
  }
  function _get_invokeImmediately__pxbc17($this) {
    return $this.invokeImmediately_1;
  }
  function JsMainDispatcher(delegate, invokeImmediately) {
    MainCoroutineDispatcher.call(this);
    this.delegate_1 = delegate;
    this.invokeImmediately_1 = invokeImmediately;
    this.immediate_1 = this.invokeImmediately_1 ? this : new JsMainDispatcher(this.delegate_1, true);
  }
  protoOf(JsMainDispatcher).get_delegate_i94tki_k$ = function () {
    return this.delegate_1;
  };
  protoOf(JsMainDispatcher).get_immediate_r3y8eg_k$ = function () {
    return this.immediate_1;
  };
  protoOf(JsMainDispatcher).isDispatchNeeded_ft82v4_k$ = function (context) {
    return !this.invokeImmediately_1;
  };
  protoOf(JsMainDispatcher).dispatch_qa3n0o_k$ = function (context, block) {
    return this.delegate_1.dispatch_qa3n0o_k$(context, block);
  };
  protoOf(JsMainDispatcher).dispatchYield_t7bwip_k$ = function (context, block) {
    return this.delegate_1.dispatchYield_t7bwip_k$(context, block);
  };
  protoOf(JsMainDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.toStringInternalImpl_hcqz93_k$();
    return tmp0_elvis_lhs == null ? this.delegate_1.toString() : tmp0_elvis_lhs;
  };
  function createEventLoop() {
    return new UnconfinedEventLoop();
  }
  function UnconfinedEventLoop() {
    EventLoop.call(this);
  }
  protoOf(UnconfinedEventLoop).dispatch_qa3n0o_k$ = function (context, block) {
    unsupported();
  };
  function unsupported() {
    throw UnsupportedOperationException_init_$Create$('runBlocking event loop is not supported');
  }
  function get_RECOVER_STACK_TRACES() {
    return RECOVER_STACK_TRACES;
  }
  var RECOVER_STACK_TRACES;
  function JobCancellationException(message, cause, job) {
    CancellationException_init_$Init$_0(message, cause, this);
    captureStack(this, JobCancellationException);
    this.job_1 = job;
  }
  protoOf(JobCancellationException).get_job_v4io7_k$ = function () {
    return this.job_1;
  };
  protoOf(JobCancellationException).toString = function () {
    return protoOf(CancellationException).toString.call(this) + '; job=' + toString(this.job_1);
  };
  protoOf(JobCancellationException).equals = function (other) {
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      var tmp_2;
      if (other instanceof JobCancellationException) {
        tmp_2 = other.message == this.message;
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp_1 = equals(other.job_1, this.job_1);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = equals(other.cause, this.cause);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(JobCancellationException).hashCode = function () {
    var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this.job_1) | 0, 31);
    var tmp0_safe_receiver = this.cause;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  };
  function Runnable() {
  }
  function Runnable_0(block) {
    return new Runnable$1(block);
  }
  function Runnable$1($block) {
    this.$block_1 = $block;
  }
  protoOf(Runnable$1).run_mvkpxh_k$ = function () {
    this.$block_1();
  };
  function SchedulerTask() {
  }
  function SchedulerTaskContext() {
  }
  function get_taskContext(_this__u8e3s4) {
    return TaskContext_getInstance();
  }
  function afterTask(_this__u8e3s4) {
  }
  function TaskContext() {
    TaskContext_instance = this;
  }
  var TaskContext_instance;
  function TaskContext_getInstance() {
    if (TaskContext_instance == null)
      new TaskContext();
    return TaskContext_instance;
  }
  function AbortFlowException(owner) {
    CancellationException_init_$Init$('Flow was aborted, no more elements needed', this);
    captureStack(this, AbortFlowException);
    this.owner_1 = owner;
  }
  protoOf(AbortFlowException).get_owner_iwkx3e_k$ = function () {
    return this.owner_1;
  };
  function _set_lastEmissionContext__smyz7($this, _set____db54di) {
    $this.lastEmissionContext_1 = _set____db54di;
  }
  function _get_lastEmissionContext__e3d7vj($this) {
    return $this.lastEmissionContext_1;
  }
  function SafeCollector$collectContextSize$lambda(count, _anonymous_parameter_1__qggqgd) {
    return count + 1 | 0;
  }
  function SafeCollector(collector, collectContext) {
    this.collector_1 = collector;
    this.collectContext_1 = collectContext;
    var tmp = this;
    tmp.collectContextSize_1 = this.collectContext_1.fold_j2vaxd_k$(0, SafeCollector$collectContextSize$lambda);
    this.lastEmissionContext_1 = null;
  }
  protoOf(SafeCollector).get_collector_7jp6g9_k$ = function () {
    return this.collector_1;
  };
  protoOf(SafeCollector).get_collectContext_68p07z_k$ = function () {
    return this.collectContext_1;
  };
  protoOf(SafeCollector).get_collectContextSize_a6jz4u_k$ = function () {
    return this.collectContextSize_1;
  };
  protoOf(SafeCollector).emit_t92u1f_k$ = function (value, $completion) {
    // Inline function 'kotlinx.coroutines.currentCoroutineContext' call
    // Inline function 'kotlin.js.getCoroutineContext' call
    var currentContext = $completion.get_context_h02k06_k$();
    ensureActive(currentContext);
    if (!(this.lastEmissionContext_1 === currentContext)) {
      checkContext(this, currentContext);
      this.lastEmissionContext_1 = currentContext;
    }
    return this.collector_1.emit_t92u1f_k$(value, $completion);
  };
  protoOf(SafeCollector).releaseIntercepted_5cyqh6_k$ = function () {
  };
  function identitySet(expectedSize) {
    return HashSet_init_$Create$(expectedSize);
  }
  function _set_value__lx0xdg($this, _set____db54di) {
    $this.value_1 = _set____db54di;
  }
  function _get_value__a43j40_0($this) {
    return $this.value_1;
  }
  function WorkaroundAtomicReference(value) {
    this.value_1 = value;
  }
  protoOf(WorkaroundAtomicReference).get_26vq_k$ = function () {
    return this.value_1;
  };
  protoOf(WorkaroundAtomicReference).set_tg4fwj_k$ = function (value) {
    this.value_1 = value;
  };
  protoOf(WorkaroundAtomicReference).getAndSet_gc0982_k$ = function (value) {
    var prev = this.value_1;
    this.value_1 = value;
    return prev;
  };
  protoOf(WorkaroundAtomicReference).compareAndSet_l3595a_k$ = function (expected, value) {
    if (this.value_1 === expected) {
      this.value_1 = value;
      return true;
    }
    return false;
  };
  function get_platformExceptionHandlers_() {
    _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf();
    return platformExceptionHandlers_;
  }
  var platformExceptionHandlers_;
  function get_platformExceptionHandlers() {
    _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf();
    return get_platformExceptionHandlers_();
  }
  function DiagnosticCoroutineContextException(context) {
    RuntimeException_init_$Init$_0(toString(context), this);
    captureStack(this, DiagnosticCoroutineContextException);
  }
  var properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx;
  function _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf() {
    if (!properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx) {
      properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx = true;
      // Inline function 'kotlin.collections.mutableSetOf' call
      platformExceptionHandlers_ = LinkedHashSet_init_$Create$();
    }
  }
  function SetTimeoutDispatcher() {
    SetTimeoutDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(SetTimeoutDispatcher).scheduleQueueProcessing_nxtlcz_k$ = function () {
    this.messageQueue_1.setTimeout_6sdjei_k$(0);
  };
  var SetTimeoutDispatcher_instance;
  function SetTimeoutDispatcher_getInstance() {
    if (SetTimeoutDispatcher_instance == null)
      new SetTimeoutDispatcher();
    return SetTimeoutDispatcher_instance;
  }
  function SetTimeoutBasedDispatcher$invokeOnTimeout$lambda($block) {
    return function () {
      $block.run_mvkpxh_k$();
      return Unit_getInstance();
    };
  }
  function SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      // Inline function 'kotlin.with' call
      $continuation.resumeUndispatched_tyhwz7_k$(this$0, Unit_getInstance());
      return Unit_getInstance();
    };
  }
  function SetTimeoutBasedDispatcher() {
    CoroutineDispatcher.call(this);
    this.messageQueue_1 = new ScheduledMessageQueue(this);
  }
  protoOf(SetTimeoutBasedDispatcher).get_messageQueue_9lpzve_k$ = function () {
    return this.messageQueue_1;
  };
  protoOf(SetTimeoutBasedDispatcher).limitedParallelism_b7nunq_k$ = function (parallelism) {
    checkParallelism(parallelism);
    return this;
  };
  protoOf(SetTimeoutBasedDispatcher).dispatch_qa3n0o_k$ = function (context, block) {
    this.messageQueue_1.enqueue_uiib2n_k$(block);
  };
  protoOf(SetTimeoutBasedDispatcher).invokeOnTimeout_x4e3ys_k$ = function (timeMillis, block, context) {
    var handle = w3cSetTimeout(SetTimeoutBasedDispatcher$invokeOnTimeout$lambda(block), delayToInt(timeMillis));
    return new ClearTimeout(handle);
  };
  protoOf(SetTimeoutBasedDispatcher).scheduleResumeAfterDelay_ohc91i_k$ = function (timeMillis, continuation) {
    var handle = w3cSetTimeout(SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    invokeOnCancellation(continuation, new ClearTimeout(handle));
  };
  function _set_scheduled__8qlfaw($this, _set____db54di) {
    $this.scheduled_1 = _set____db54di;
  }
  function _get_scheduled__wzo69o($this) {
    return $this.scheduled_1;
  }
  function MessageQueue() {
    this.$$delegate_0__1 = ArrayDeque_init_$Create$();
    this.yieldEvery_1 = 16;
    this.scheduled_1 = false;
  }
  protoOf(MessageQueue).get_size_woubt6_k$ = function () {
    return this.$$delegate_0__1.get_size_woubt6_k$();
  };
  protoOf(MessageQueue).add_phqi2m_k$ = function (index, element) {
    this.$$delegate_0__1.add_dl6gt3_k$(index, element);
  };
  protoOf(MessageQueue).add_dl6gt3_k$ = function (index, element) {
    return this.add_phqi2m_k$(index, (!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).add_a21854_k$ = function (element) {
    return this.$$delegate_0__1.add_utx5q5_k$(element);
  };
  protoOf(MessageQueue).add_utx5q5_k$ = function (element) {
    return this.add_a21854_k$((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).addAll_hruyrh_k$ = function (index, elements) {
    return this.$$delegate_0__1.addAll_lxodh3_k$(index, elements);
  };
  protoOf(MessageQueue).addAll_lxodh3_k$ = function (index, elements) {
    return this.addAll_hruyrh_k$(index, elements);
  };
  protoOf(MessageQueue).addAll_5l9vff_k$ = function (elements) {
    return this.$$delegate_0__1.addAll_4lagoh_k$(elements);
  };
  protoOf(MessageQueue).addAll_4lagoh_k$ = function (elements) {
    return this.addAll_5l9vff_k$(elements);
  };
  protoOf(MessageQueue).clear_j9egeb_k$ = function () {
    this.$$delegate_0__1.clear_j9egeb_k$();
  };
  protoOf(MessageQueue).contains_bxhpai_k$ = function (element) {
    return this.$$delegate_0__1.contains_aljjnj_k$(element);
  };
  protoOf(MessageQueue).contains_aljjnj_k$ = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return false;
    return this.contains_bxhpai_k$((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).containsAll_mzccgp_k$ = function (elements) {
    return this.$$delegate_0__1.containsAll_xk45sd_k$(elements);
  };
  protoOf(MessageQueue).containsAll_xk45sd_k$ = function (elements) {
    return this.containsAll_mzccgp_k$(elements);
  };
  protoOf(MessageQueue).get_c1px32_k$ = function (index) {
    return this.$$delegate_0__1.get_c1px32_k$(index);
  };
  protoOf(MessageQueue).indexOf_gb589s_k$ = function (element) {
    return this.$$delegate_0__1.indexOf_si1fv9_k$(element);
  };
  protoOf(MessageQueue).indexOf_si1fv9_k$ = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return -1;
    return this.indexOf_gb589s_k$((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).isEmpty_y1axqb_k$ = function () {
    return this.$$delegate_0__1.isEmpty_y1axqb_k$();
  };
  protoOf(MessageQueue).iterator_jk1svi_k$ = function () {
    return this.$$delegate_0__1.iterator_jk1svi_k$();
  };
  protoOf(MessageQueue).lastIndexOf_vj4mwa_k$ = function (element) {
    return this.$$delegate_0__1.lastIndexOf_v2p1fv_k$(element);
  };
  protoOf(MessageQueue).lastIndexOf_v2p1fv_k$ = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return -1;
    return this.lastIndexOf_vj4mwa_k$((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).listIterator_xjshxw_k$ = function () {
    return this.$$delegate_0__1.listIterator_xjshxw_k$();
  };
  protoOf(MessageQueue).listIterator_70e65o_k$ = function (index) {
    return this.$$delegate_0__1.listIterator_70e65o_k$(index);
  };
  protoOf(MessageQueue).remove_9lpry3_k$ = function (element) {
    return this.$$delegate_0__1.remove_cedx0m_k$(element);
  };
  protoOf(MessageQueue).remove_cedx0m_k$ = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return false;
    return this.remove_9lpry3_k$((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).removeAll_ub1ig2_k$ = function (elements) {
    return this.$$delegate_0__1.removeAll_y0z8pe_k$(elements);
  };
  protoOf(MessageQueue).removeAll_y0z8pe_k$ = function (elements) {
    return this.removeAll_ub1ig2_k$(elements);
  };
  protoOf(MessageQueue).removeAt_6niowx_k$ = function (index) {
    return this.$$delegate_0__1.removeAt_6niowx_k$(index);
  };
  protoOf(MessageQueue).retainAll_kfvlmn_k$ = function (elements) {
    return this.$$delegate_0__1.retainAll_9fhiib_k$(elements);
  };
  protoOf(MessageQueue).retainAll_9fhiib_k$ = function (elements) {
    return this.retainAll_kfvlmn_k$(elements);
  };
  protoOf(MessageQueue).set_r80eul_k$ = function (index, element) {
    return this.$$delegate_0__1.set_82063s_k$(index, element);
  };
  protoOf(MessageQueue).set_82063s_k$ = function (index, element) {
    return this.set_r80eul_k$(index, (!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).subList_xle3r2_k$ = function (fromIndex, toIndex) {
    return this.$$delegate_0__1.subList_xle3r2_k$(fromIndex, toIndex);
  };
  protoOf(MessageQueue).get_yieldEvery_1qy12h_k$ = function () {
    return this.yieldEvery_1;
  };
  protoOf(MessageQueue).enqueue_uiib2n_k$ = function (element) {
    this.add_a21854_k$(element);
    if (!this.scheduled_1) {
      this.scheduled_1 = true;
      this.schedule_o777if_k$();
    }
  };
  protoOf(MessageQueue).process_myqcf5_k$ = function () {
    try {
      // Inline function 'kotlin.repeat' call
      var times = this.yieldEvery_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp0_elvis_lhs = removeFirstOrNull(this);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            return Unit_getInstance();
          } else {
            tmp = tmp0_elvis_lhs;
          }
          var element = tmp;
          element.run_mvkpxh_k$();
        }
         while (inductionVariable < times);
    }finally {
      if (this.isEmpty_y1axqb_k$()) {
        this.scheduled_1 = false;
      } else {
        this.reschedule_mhlssa_k$();
      }
    }
  };
  function _get_window__ax0zxh_0($this) {
    return $this.window_1;
  }
  function _get_queue__c6g84g_0($this) {
    return $this.queue_1;
  }
  function WindowClearTimeout($outer, handle) {
    this.$this_1 = $outer;
    ClearTimeout.call(this, handle);
  }
  protoOf(WindowClearTimeout).dispose_3nnxhr_k$ = function () {
    w3cClearTimeout(this.$this_1.window_1, this.handle_1);
  };
  function WindowDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      // Inline function 'kotlin.with' call
      $continuation.resumeUndispatched_tyhwz7_k$(this$0, Unit_getInstance());
      return Unit_getInstance();
    };
  }
  function Runnable$run$ref(p0) {
    var l = function () {
      p0.run_mvkpxh_k$();
      return Unit_getInstance();
    };
    l.callableName = 'run';
    return l;
  }
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this.window_1 = window_0;
    this.queue_1 = new WindowMessageQueue(this.window_1);
  }
  protoOf(WindowDispatcher).dispatch_qa3n0o_k$ = function (context, block) {
    return this.queue_1.enqueue_uiib2n_k$(block);
  };
  protoOf(WindowDispatcher).scheduleResumeAfterDelay_ohc91i_k$ = function (timeMillis, continuation) {
    var handle = w3cSetTimeout_0(this.window_1, WindowDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    invokeOnCancellation(continuation, new WindowClearTimeout(this, handle));
  };
  protoOf(WindowDispatcher).invokeOnTimeout_x4e3ys_k$ = function (timeMillis, block, context) {
    var handle = w3cSetTimeout_0(this.window_1, Runnable$run$ref(block), delayToInt(timeMillis));
    return new WindowClearTimeout(this, handle);
  };
  function delayToInt(timeMillis) {
    return coerceIn(timeMillis, new Long(0, 0), new Long(2147483647, 0)).toInt_1tsl84_k$();
  }
  function ClearTimeout(handle) {
    this.handle_1 = handle;
  }
  protoOf(ClearTimeout).get_handle_e5p7ht_k$ = function () {
    return this.handle_1;
  };
  protoOf(ClearTimeout).dispose_3nnxhr_k$ = function () {
    w3cClearTimeout_0(this.handle_1);
  };
  protoOf(ClearTimeout).invoke_py2q9a_k$ = function (cause) {
    this.dispose_3nnxhr_k$();
  };
  protoOf(ClearTimeout).toString = function () {
    return 'ClearTimeout[' + this.handle_1 + ']';
  };
  function get_MAX_DELAY() {
    return MAX_DELAY;
  }
  var MAX_DELAY;
  function LinkedListHead() {
    LinkedListNode.call(this);
  }
  protoOf(LinkedListHead).get_isEmpty_zauvru_k$ = function () {
    return this._next_1 === this;
  };
  protoOf(LinkedListHead).remove_fgfybg_k$ = function () {
    throw UnsupportedOperationException_init_$Create$_0();
  };
  function LinkedListNode() {
    this._next_1 = this;
    this._prev_1 = this;
    this._removed_1 = false;
  }
  protoOf(LinkedListNode).set__next_ldah7q_k$ = function (_set____db54di) {
    this._next_1 = _set____db54di;
  };
  protoOf(LinkedListNode).get__next_joogec_k$ = function () {
    return this._next_1;
  };
  protoOf(LinkedListNode).set__prev_kyp72y_k$ = function (_set____db54di) {
    this._prev_1 = _set____db54di;
  };
  protoOf(LinkedListNode).get__prev_e21d18_k$ = function () {
    return this._prev_1;
  };
  protoOf(LinkedListNode).set__removed_aykjui_k$ = function (_set____db54di) {
    this._removed_1 = _set____db54di;
  };
  protoOf(LinkedListNode).get__removed_4gr6sj_k$ = function () {
    return this._removed_1;
  };
  protoOf(LinkedListNode).get_nextNode_88zlwi_k$ = function () {
    return this._next_1;
  };
  protoOf(LinkedListNode).get_prevNode_i5bmvy_k$ = function () {
    return this._prev_1;
  };
  protoOf(LinkedListNode).get_isRemoved_gzdz59_k$ = function () {
    return this._removed_1;
  };
  protoOf(LinkedListNode).addLast_dyfyav_k$ = function (node) {
    var prev = this._prev_1;
    node._next_1 = this;
    node._prev_1 = prev;
    prev._next_1 = node;
    this._prev_1 = node;
  };
  protoOf(LinkedListNode).remove_fgfybg_k$ = function () {
    return this.removeImpl_usng95_k$();
  };
  protoOf(LinkedListNode).dispose_3nnxhr_k$ = function () {
    this.remove_fgfybg_k$();
  };
  protoOf(LinkedListNode).removeImpl_usng95_k$ = function () {
    if (this._removed_1)
      return false;
    var prev = this._prev_1;
    var next = this._next_1;
    prev._next_1 = next;
    next._prev_1 = prev;
    this._removed_1 = true;
    return true;
  };
  protoOf(LinkedListNode).addOneIfEmpty_tvdaub_k$ = function (node) {
    if (!(this._next_1 === this))
      return false;
    this.addLast_dyfyav_k$(node);
    return true;
  };
  protoOf(LinkedListNode).addLastIf_ssoghd_k$ = function (node, condition) {
    if (!condition())
      return false;
    this.addLast_dyfyav_k$(node);
    return true;
  };
  protoOf(LinkedListNode).addLastIfPrev_3yt8bs_k$ = function (node, predicate) {
    if (!predicate(this._prev_1))
      return false;
    this.addLast_dyfyav_k$(node);
    return true;
  };
  protoOf(LinkedListNode).addLastIfPrevAndIf_2wf1x7_k$ = function (node, predicate, condition) {
    if (!predicate(this._prev_1))
      return false;
    if (!condition())
      return false;
    this.addLast_dyfyav_k$(node);
    return true;
  };
  protoOf(LinkedListNode).helpRemove_v3bmp7_k$ = function () {
  };
  protoOf(LinkedListNode).removeFirstOrNull_eges3a_k$ = function () {
    var next = this._next_1;
    if (next === this)
      return null;
    // Inline function 'kotlin.check' call
    if (!next.removeImpl_usng95_k$()) {
      var message = 'Should remove';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return next;
  };
  function probeCoroutineCreated(completion) {
    return completion;
  }
  function unwrap(exception) {
    return exception;
  }
  function recoverAndThrow(exception, $completion) {
    throw exception;
  }
  function initCause(_this__u8e3s4, cause) {
  }
  function recoverStackTrace(exception, continuation) {
    return exception;
  }
  function recoverStackTrace_0(exception) {
    return exception;
  }
  function CoroutineStackFrame() {
  }
  function SynchronizedObject() {
  }
  function synchronizedImpl(lock, block) {
    return block();
  }
  function systemProp_1(propertyName) {
    return null;
  }
  function threadContextElements(context) {
    return 0;
  }
  function _set_value__lx0xdg_0($this, _set____db54di) {
    $this.value_1 = _set____db54di;
  }
  function _get_value__a43j40_1($this) {
    return $this.value_1;
  }
  function CommonThreadLocal() {
    this.value_1 = null;
  }
  protoOf(CommonThreadLocal).get_26vq_k$ = function () {
    var tmp = this.value_1;
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(CommonThreadLocal).set_tg4fwj_k$ = function (value) {
    this.value_1 = value;
  };
  function commonThreadLocal(name) {
    return new CommonThreadLocal();
  }
  //region block: post-declaration
  protoOf(JobSupport).invokeOnCompletion$default_1v3utx_k$ = invokeOnCompletion$default;
  protoOf(JobSupport).cancel$default_8haxne_k$ = cancel$default;
  protoOf(JobSupport).cancel$default_w08z00_k$ = cancel$default_0;
  protoOf(JobSupport).cancel_2l89ey_k$ = cancel;
  protoOf(JobSupport).plus_x16axj_k$ = plus_1;
  protoOf(JobSupport).plus_s13ygv_k$ = plus;
  protoOf(JobSupport).get_y2st91_k$ = get_0;
  protoOf(JobSupport).fold_j2vaxd_k$ = fold;
  protoOf(JobSupport).minusKey_9i5ggf_k$ = minusKey_0;
  protoOf(CancellableContinuationImpl).cancel$default_vwdpyq_k$ = cancel$default_1;
  protoOf(CancellableContinuationImpl).tryResume$default_cgwzli_k$ = tryResume$default;
  protoOf(CoroutineDispatcher).get_y2st91_k$ = get;
  protoOf(CoroutineDispatcher).minusKey_9i5ggf_k$ = minusKey;
  protoOf(BufferedChannelIterator).next0_gvc0h9_k$ = next0;
  protoOf(BufferedChannel).close$default_kcbl7u_k$ = close$default;
  protoOf(BufferedChannel).cancel$default_2ouzfv_k$ = cancel$default_3;
  protoOf(BufferedChannel).cancel$default_880p35_k$ = cancel$default_2;
  protoOf(BufferedChannel).offer_uqgnr2_k$ = offer;
  protoOf(BufferedChannel).poll_21vi7_k$ = poll;
  protoOf(BufferedChannel).receiveOrNull_7f8d4k_k$ = receiveOrNull;
  protoOf(ChannelCoroutine).close$default_kcbl7u_k$ = close$default;
  protoOf(SharedFlowImpl).fuse$default_3fvd2g_k$ = fuse$default;
  protoOf(StateFlowImpl).fuse$default_3fvd2g_k$ = fuse$default;
  protoOf(ChannelFlow).fuse$default_3fvd2g_k$ = fuse$default;
  protoOf(SelectImplementation).invoke_if6p1h_k$ = invoke;
  protoOf(SelectImplementation).onTimeout_u5run0_k$ = onTimeout;
  protoOf(SetTimeoutBasedDispatcher).delay_xigjxo_k$ = delay;
  protoOf(MessageQueue).asJsArrayView_ialsn1_k$ = asJsArrayView;
  protoOf(MessageQueue).asJsReadonlyArrayView_ch6hjz_k$ = asJsReadonlyArrayView;
  protoOf(WindowDispatcher).delay_xigjxo_k$ = delay;
  //endregion
  //region block: init
  UNDECIDED = 0;
  SUSPENDED = 1;
  RESUMED = 2;
  UNDECIDED_0 = 0;
  NO_INDEX = 536870911;
  SUSPENDED_0 = 1;
  RESUMED_0 = 2;
  DECISION_SHIFT = 29;
  INDEX_MASK = 536870911;
  FALSE = 0;
  TRUE = 1;
  RETRY = -1;
  BUFFER_END_RENDEZVOUS = new Long(0, 0);
  BUFFER_END_UNLIMITED = new Long(-1, 2147483647);
  RESULT_RENDEZVOUS = 0;
  RESULT_BUFFERED = 1;
  RESULT_SUSPEND = 2;
  RESULT_CLOSED = 4;
  RESULT_FAILED = 5;
  RESULT_SUSPEND_NO_WAITER = 3;
  CLOSE_STATUS_ACTIVE = 0;
  CLOSE_STATUS_CLOSED = 2;
  CLOSE_STATUS_CANCELLATION_STARTED = 1;
  CLOSE_STATUS_CANCELLED = 3;
  SENDERS_COUNTER_MASK = new Long(-1, 268435455);
  EB_COMPLETED_PAUSE_EXPAND_BUFFERS_BIT = new Long(0, 1073741824);
  EB_COMPLETED_COUNTER_MASK = new Long(-1, 1073741823);
  SENDERS_CLOSE_STATUS_SHIFT = 60;
  DEFAULT_CLOSE_MESSAGE = 'Channel was closed';
  DEFAULT_CONCURRENCY_PROPERTY_NAME = 'kotlinx.coroutines.flow.defaultConcurrency';
  POINTERS_SHIFT = 16;
  MODE_CANCELLABLE = 1;
  MODE_CANCELLABLE_REUSABLE = 2;
  MODE_UNINITIALIZED = -1;
  MODE_UNDISPATCHED = 4;
  MODE_ATOMIC = 0;
  TRY_SELECT_SUCCESSFUL = 0;
  TRY_SELECT_CANCELLED = 2;
  TRY_SELECT_ALREADY_SELECTED = 3;
  TRY_SELECT_REREGISTER = 1;
  UNDEFINED_0 = 'undefined';
  counter = 0;
  DEBUG = false;
  RECOVER_STACK_TRACES = false;
  MAX_DELAY = new Long(2147483647, 0);
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CoroutineStart_UNDISPATCHED_getInstance;
  _.$_$.b = collect;
  _.$_$.c = first;
  _.$_$.d = cancelAndJoin;
  _.$_$.e = coroutineScope;
  _.$_$.f = withContext;
  _.$_$.g = Key_getInstance_2;
  _.$_$.h = MutableStateFlow_0;
  _.$_$.i = takeWhile;
  _.$_$.j = CancellableContinuationImpl;
  _.$_$.k = CompletableDeferred_0;
  _.$_$.l = CoroutineDispatcher;
  _.$_$.m = CoroutineScope_0;
  _.$_$.n = CoroutineScope;
  _.$_$.o = Job_0;
  _.$_$.p = SupervisorJob;
  _.$_$.q = asCoroutineDispatcher;
  _.$_$.r = cancel_1;
  _.$_$.s = get_job;
  _.$_$.t = launch;
  //endregion
  return _;
}));
