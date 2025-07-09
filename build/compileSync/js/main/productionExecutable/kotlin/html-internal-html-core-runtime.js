(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-compose-runtime-runtime.js', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'html-internal-html-core-runtime'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'html-internal-html-core-runtime'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'html-internal-html-core-runtime'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'html-internal-html-core-runtime'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'html-internal-html-core-runtime'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'html-internal-html-core-runtime'.");
    }
    globalThis['html-internal-html-core-runtime'] = factory(typeof globalThis['html-internal-html-core-runtime'] === 'undefined' ? {} : globalThis['html-internal-html-core-runtime'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core']);
  }
}(function (_, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var AbstractApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var protoOf = kotlin_kotlin.$_$.h7;
  var THROW_CCE = kotlin_kotlin.$_$.v9;
  var initMetadataForClass = kotlin_kotlin.$_$.r6;
  var VOID = kotlin_kotlin.$_$.e;
  var ensureNotNull = kotlin_kotlin.$_$.ca;
  var Unit_instance = kotlin_kotlin.$_$.c2;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var Companion_instance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var CoroutineImpl = kotlin_kotlin.$_$.w5;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var isInterface = kotlin_kotlin.$_$.z6;
  var initMetadataForLambda = kotlin_kotlin.$_$.v6;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var initMetadataForObject = kotlin_kotlin.$_$.w6;
  var CoroutineDispatcher = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var get_DefaultMonotonicFrameClock = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f;
  var Recomposer = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var ControlledComposition = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.h5;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(DomApplier, 'DomApplier', VOID, AbstractApplier);
  initMetadataForClass(DomNodeWrapper, 'DomNodeWrapper');
  initMetadataForLambda(GlobalSnapshotManager$schedule$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForObject(GlobalSnapshotManager, 'GlobalSnapshotManager');
  initMetadataForClass(JsMicrotasksDispatcher, 'JsMicrotasksDispatcher', JsMicrotasksDispatcher, CoroutineDispatcher);
  initMetadataForLambda(renderComposable$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(renderComposable$scope$1);
  //endregion
  var org_jetbrains_compose_web_internal_runtime_DomApplier$stable;
  var org_jetbrains_compose_web_internal_runtime_DomNodeWrapper$stable;
  function DomApplier(root) {
    AbstractApplier.call(this, root);
  }
  protoOf(DomApplier).u2i = function (index, instance) {
  };
  protoOf(DomApplier).u12 = function (index, instance) {
    return this.u2i(index, instance instanceof DomNodeWrapper ? instance : THROW_CCE());
  };
  protoOf(DomApplier).v2i = function (index, instance) {
    this.p12().x2i(index, instance);
  };
  protoOf(DomApplier).v12 = function (index, instance) {
    return this.v2i(index, instance instanceof DomNodeWrapper ? instance : THROW_CCE());
  };
  protoOf(DomApplier).w12 = function (index, count) {
    this.p12().w12(index, count);
  };
  protoOf(DomApplier).x12 = function (from, to, count) {
    this.p12().x12(from, to, count);
  };
  function DomNodeWrapper(node) {
    this.w2i_1 = node;
  }
  protoOf(DomNodeWrapper).y2i = function () {
    return this.w2i_1;
  };
  protoOf(DomNodeWrapper).x2i = function (index, nodeWrapper) {
    var length = this.y2i().childNodes.length;
    if (index < length) {
      var tmp = this.y2i();
      var tmp_0 = nodeWrapper.y2i();
      // Inline function 'org.w3c.dom.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = this.y2i().childNodes[index];
      tmp.insertBefore(tmp_0, ensureNotNull(tmp$ret$1));
    } else {
      this.y2i().appendChild(nodeWrapper.y2i());
    }
  };
  protoOf(DomNodeWrapper).w12 = function (index, count) {
    // Inline function 'kotlin.repeat' call
    var inductionVariable = 0;
    if (inductionVariable < count)
      do {
        var index_0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.y2i();
        // Inline function 'org.w3c.dom.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = this.y2i().childNodes[index];
        tmp.removeChild(ensureNotNull(tmp$ret$1));
      }
       while (inductionVariable < count);
  };
  protoOf(DomNodeWrapper).x12 = function (from, to, count) {
    if (from === to) {
      return Unit_instance;
    }
    var inductionVariable = 0;
    if (inductionVariable < count)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var fromIndex = from > to ? from + i | 0 : from;
        var toIndex = from > to ? to + i | 0 : (to + count | 0) - 2 | 0;
        var tmp = this.y2i();
        // Inline function 'org.w3c.dom.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = this.y2i().childNodes[fromIndex];
        var child = tmp.removeChild(ensureNotNull(tmp$ret$1));
        var tmp_0 = this.y2i();
        // Inline function 'org.w3c.dom.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$3 = this.y2i().childNodes[toIndex];
        tmp_0.insertBefore(child, ensureNotNull(tmp$ret$3));
      }
       while (inductionVariable < count);
  };
  var org_jetbrains_compose_web_internal_runtime_GlobalSnapshotManager$stable;
  function synchronize($this) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = $this.e2j_1.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      element();
    }
    $this.e2j_1.y1();
    $this.f2j_1 = false;
  }
  function schedule($this, block) {
    $this.e2j_1.e(block);
    if (!$this.f2j_1) {
      $this.f2j_1 = true;
      launch($this.c2j_1, VOID, VOID, GlobalSnapshotManager$schedule$slambda_0(null));
    }
  }
  function GlobalSnapshotManager$globalWriteObserver$lambda(it) {
    if (!GlobalSnapshotManager_getInstance().a2j_1) {
      GlobalSnapshotManager_getInstance().a2j_1 = true;
      var tmp = GlobalSnapshotManager_getInstance();
      schedule(tmp, GlobalSnapshotManager$globalWriteObserver$lambda$lambda);
    }
    return Unit_instance;
  }
  function GlobalSnapshotManager$globalWriteObserver$lambda$lambda() {
    GlobalSnapshotManager_getInstance().a2j_1 = false;
    Companion_instance.k1r();
    return Unit_instance;
  }
  function GlobalSnapshotManager$schedule$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(GlobalSnapshotManager$schedule$slambda).w1p = function ($this$launch, $completion) {
    var tmp = this.x1p($this$launch, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(GlobalSnapshotManager$schedule$slambda).p9 = function (p1, $completion) {
    return this.w1p((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(GlobalSnapshotManager$schedule$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        if (tmp === 0) {
          this.w8_1 = 1;
          synchronize(GlobalSnapshotManager_getInstance());
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.y8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(GlobalSnapshotManager$schedule$slambda).x1p = function ($this$launch, completion) {
    var i = new GlobalSnapshotManager$schedule$slambda(completion);
    i.o2j_1 = $this$launch;
    return i;
  };
  function GlobalSnapshotManager$schedule$slambda_0(resultContinuation) {
    var i = new GlobalSnapshotManager$schedule$slambda(resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.w1p($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function GlobalSnapshotManager() {
    GlobalSnapshotManager_instance = this;
    this.z2i_1 = false;
    this.a2j_1 = false;
    this.b2j_1 = null;
    this.c2j_1 = CoroutineScope_0((new JsMicrotasksDispatcher()).xg(SupervisorJob()));
    var tmp = this;
    tmp.d2j_1 = GlobalSnapshotManager$globalWriteObserver$lambda;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.e2j_1 = ArrayList_init_$Create$();
    this.f2j_1 = false;
  }
  protoOf(GlobalSnapshotManager).p2j = function () {
    if (!this.z2i_1) {
      this.z2i_1 = true;
      this.b2j_1 = Companion_instance.u2b(this.d2j_1);
    }
  };
  var GlobalSnapshotManager_instance;
  function GlobalSnapshotManager_getInstance() {
    if (GlobalSnapshotManager_instance == null)
      new GlobalSnapshotManager();
    return GlobalSnapshotManager_instance;
  }
  var org_jetbrains_compose_web_internal_runtime_JsMicrotasksDispatcher$stable;
  function JsMicrotasksDispatcher$dispatch$lambda($block) {
    return function (it) {
      $block.bn();
      return Unit_instance;
    };
  }
  function JsMicrotasksDispatcher() {
    CoroutineDispatcher.call(this);
  }
  protoOf(JsMicrotasksDispatcher).kn = function (context, block) {
    var tmp = Promise.resolve(Unit_instance);
    tmp.then(JsMicrotasksDispatcher$dispatch$lambda(block));
  };
  function renderComposable(rootElementId, content) {
    return renderComposable_0(ensureNotNull(document.getElementById(rootElementId)), VOID, content);
  }
  function renderComposable_0(root, monotonicFrameClock, content) {
    monotonicFrameClock = monotonicFrameClock === VOID ? get_DefaultMonotonicFrameClock() : monotonicFrameClock;
    GlobalSnapshotManager_getInstance().p2j();
    var context = monotonicFrameClock.xg(new JsMicrotasksDispatcher());
    var recomposer = new Recomposer(context);
    var tmp = CoroutineScope_0(context);
    var tmp_0 = CoroutineStart_UNDISPATCHED_getInstance();
    launch(tmp, VOID, tmp_0, renderComposable$slambda_0(recomposer, null));
    var composition = ControlledComposition(new DomApplier(new DomNodeWrapper(root)), recomposer);
    var scope = new renderComposable$scope$1(root);
    composition.q1m(ComposableLambda$invoke$ref(composableLambdaInstance(-844806999, true, renderComposable$lambda(content, scope))));
    return composition;
  }
  function renderComposable$slambda($recomposer, resultContinuation) {
    this.z2j_1 = $recomposer;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(renderComposable$slambda).w1p = function ($this$launch, $completion) {
    var tmp = this.x1p($this$launch, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(renderComposable$slambda).p9 = function (p1, $completion) {
    return this.w1p((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(renderComposable$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 2;
            this.v8_1 = 1;
            suspendResult = this.z2j_1.y1u(this);
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
  protoOf(renderComposable$slambda).x1p = function ($this$launch, completion) {
    var i = new renderComposable$slambda(this.z2j_1, completion);
    i.a2k_1 = $this$launch;
    return i;
  };
  function renderComposable$slambda_0($recomposer, resultContinuation) {
    var i = new renderComposable$slambda($recomposer, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.w1p($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function renderComposable$scope$1($root) {
    this.b2k_1 = $root;
  }
  function ComposableLambda$invoke$ref(p0) {
    return function (_this__u8e3s4, p0_0) {
      return p0.g1g(_this__u8e3s4, p0_0);
    };
  }
  function renderComposable$lambda($content, $scope) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.i1g()) {
        if (isTraceInProgress()) {
          traceEventStart(-844806999, $changed, -1, 'org.jetbrains.compose.web.renderComposable.<anonymous> (renderComposable.kt:60)');
        }
        $content($scope, $composer_0, 0);
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
  //region block: init
  org_jetbrains_compose_web_internal_runtime_DomApplier$stable = 0;
  org_jetbrains_compose_web_internal_runtime_DomNodeWrapper$stable = 8;
  org_jetbrains_compose_web_internal_runtime_GlobalSnapshotManager$stable = 8;
  org_jetbrains_compose_web_internal_runtime_JsMicrotasksDispatcher$stable = 0;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = DomApplier;
  _.$_$.b = DomNodeWrapper;
  _.$_$.c = renderComposable;
  //endregion
  return _;
}));

//# sourceMappingURL=html-internal-html-core-runtime.js.map
