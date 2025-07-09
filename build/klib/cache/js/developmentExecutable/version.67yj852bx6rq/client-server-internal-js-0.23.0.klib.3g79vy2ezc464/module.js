(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-common-client-server-internal'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-common-client-server-internal'.");
    }
    globalThis['kobweb-common-client-server-internal'] = factory(typeof globalThis['kobweb-common-client-server-internal'] === 'undefined' ? {} : globalThis['kobweb-common-client-server-internal'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var THROW_IAE = kotlin_kotlin.$_$.uf;
  var enumEntries = kotlin_kotlin.$_$.ma;
  var Unit_getInstance = kotlin_kotlin.$_$.m4;
  var Enum = kotlin_kotlin.$_$.if;
  var protoOf = kotlin_kotlin.$_$.lc;
  var initMetadataForClass = kotlin_kotlin.$_$.ib;
  var VOID = kotlin_kotlin.$_$.f;
  var listOf = kotlin_kotlin.$_$.x7;
  var CoroutineImpl = kotlin_kotlin.$_$.ia;
  var THROW_CCE = kotlin_kotlin.$_$.tf;
  var SequenceScope = kotlin_kotlin.$_$.dd;
  var mutableListOf = kotlin_kotlin.$_$.e8;
  var removeFirst = kotlin_kotlin.$_$.o8;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.l;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.s9;
  var initMetadataForLambda = kotlin_kotlin.$_$.mb;
  var removeSurrounding = kotlin_kotlin.$_$.ge;
  var removeSuffix = kotlin_kotlin.$_$.fe;
  var endsWith = kotlin_kotlin.$_$.td;
  var removePrefix = kotlin_kotlin.$_$.ee;
  var startsWith = kotlin_kotlin.$_$.me;
  var initMetadataForCompanion = kotlin_kotlin.$_$.jb;
  var getStringHashCode = kotlin_kotlin.$_$.gb;
  var toString = kotlin_kotlin.$_$.oc;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var first = kotlin_kotlin.$_$.h7;
  var drop = kotlin_kotlin.$_$.z6;
  var to = kotlin_kotlin.$_$.wg;
  var joinToString = kotlin_kotlin.$_$.o7;
  var emptyList = kotlin_kotlin.$_$.a7;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.og;
  var plus = kotlin_kotlin.$_$.k8;
  var sequence = kotlin_kotlin.$_$.kd;
  var charSequenceLength = kotlin_kotlin.$_$.xa;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.g2;
  var charArrayOf = kotlin_kotlin.$_$.ta;
  var split = kotlin_kotlin.$_$.ke;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.n1;
  var startsWith_0 = kotlin_kotlin.$_$.ne;
  var toMutableList = kotlin_kotlin.$_$.k9;
  var endsWith_0 = kotlin_kotlin.$_$.sd;
  var SuspendFunction1 = kotlin_kotlin.$_$.ja;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.d1;
  var objectCreate = kotlin_kotlin.$_$.kc;
  var get_lastIndex = kotlin_kotlin.$_$.s7;
  var replace = kotlin_kotlin.$_$.je;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(AcceptResult, 'AcceptResult', VOID, Enum);
  initMetadataForLambda(RouteTree$Node$_get_nodes_$slambda_9kqj3, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForCompanion(Companion);
  initMetadataForClass(Info, 'Info');
  initMetadataForClass(Match, 'Match', VOID, Enum);
  initMetadataForClass(Node, 'Node');
  initMetadataForClass(RootNode, 'RootNode', RootNode, Node);
  initMetadataForClass(ChildNode, 'ChildNode', VOID, Node);
  initMetadataForClass(StaticNode, 'StaticNode', VOID, ChildNode);
  initMetadataForClass(DynamicNode, 'DynamicNode', VOID, ChildNode);
  initMetadataForClass(ResolvedEntry, 'ResolvedEntry');
  initMetadataForClass(RouteTree, 'RouteTree', RouteTree);
  initMetadataForClass(PatternMapper, 'PatternMapper');
  //endregion
  var AcceptResult_NONE_instance;
  var AcceptResult_SINGLE_instance;
  var AcceptResult_ALL_instance;
  function values() {
    return [AcceptResult_NONE_getInstance(), AcceptResult_SINGLE_getInstance(), AcceptResult_ALL_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'NONE':
        return AcceptResult_NONE_getInstance();
      case 'SINGLE':
        return AcceptResult_SINGLE_getInstance();
      case 'ALL':
        return AcceptResult_ALL_getInstance();
      default:
        AcceptResult_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var AcceptResult_entriesInitialized;
  function AcceptResult_initEntries() {
    if (AcceptResult_entriesInitialized)
      return Unit_getInstance();
    AcceptResult_entriesInitialized = true;
    AcceptResult_NONE_instance = new AcceptResult('NONE', 0);
    AcceptResult_SINGLE_instance = new AcceptResult('SINGLE', 1);
    AcceptResult_ALL_instance = new AcceptResult('ALL', 2);
  }
  var $ENTRIES;
  function _get__staticChildren__e0ay3f($this) {
    return $this._staticChildren_1;
  }
  function _set__dynamicChild__bia9c9($this, _set____db54di) {
    $this._dynamicChild_1 = _set____db54di;
  }
  function _get__dynamicChild__3ph963($this) {
    return $this._dynamicChild_1;
  }
  function AcceptResult(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function resolve$createResolvedEntry(this$0, consumedPart) {
    return listOf(new ResolvedEntry(this$0, consumedPart));
  }
  function RouteTree$Node$_get_nodes_$slambda_9kqj3(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RouteTree$Node$_get_nodes_$slambda_9kqj3).invoke_b7agel_k$ = function ($this$sequence, $completion) {
    var tmp = this.create_8w91ht_k$($this$sequence, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(RouteTree$Node$_get_nodes_$slambda_9kqj3).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_b7agel_k$(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RouteTree$Node$_get_nodes_$slambda_9kqj3).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.nodeQueue0__1 = mutableListOf([this.this$0__1]);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!!this.nodeQueue0__1.isEmpty_y1axqb_k$()) {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

            this.node1__1 = removeFirst(this.nodeQueue0__1);
            var tmp_0 = this;
            tmp_0.nodePath2__1 = ArrayList_init_$Create$();
            this.nodePath2__1.add_utx5q5_k$(this.node1__1);
            this.parent3__1 = this.node1__1.parent_1;
            while (!(this.parent3__1 == null)) {
              this.nodePath2__1.add_dl6gt3_k$(0, this.parent3__1);
              this.parent3__1 = this.parent3__1.parent_1;
            }

            this.set_state_rjd8d0_k$(2);
            suspendResult = this.$this$sequence_1.yield_3xhcex_k$(this.nodePath2__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.nodeQueue0__1.addAll_4lagoh_k$(this.node1__1.get_children_4cwbp4_k$());
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            return Unit_getInstance();
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
  protoOf(RouteTree$Node$_get_nodes_$slambda_9kqj3).create_8w91ht_k$ = function ($this$sequence, completion) {
    var i = new RouteTree$Node$_get_nodes_$slambda_9kqj3(this.this$0__1, completion);
    i.$this$sequence_1 = $this$sequence;
    return i;
  };
  protoOf(RouteTree$Node$_get_nodes_$slambda_9kqj3).create_wyq9v6_k$ = function (value, completion) {
    return this.create_8w91ht_k$(value instanceof SequenceScope ? value : THROW_CCE(), completion);
  };
  function RouteTree$Node$_get_nodes_$slambda_9kqj3_0(this$0, resultContinuation) {
    var i = new RouteTree$Node$_get_nodes_$slambda_9kqj3(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.invoke_b7agel_k$($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AcceptResult_NONE_getInstance() {
    AcceptResult_initEntries();
    return AcceptResult_NONE_instance;
  }
  function AcceptResult_SINGLE_getInstance() {
    AcceptResult_initEntries();
    return AcceptResult_SINGLE_instance;
  }
  function AcceptResult_ALL_getInstance() {
    AcceptResult_initEntries();
    return AcceptResult_ALL_instance;
  }
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).tryCreateFrom_1s9czd_k$ = function (routeSegment) {
    if (!isDynamicSegment(routeSegment))
      return null;
    var name = routeSegment;
    name = removeSurrounding(name, '{', '}');
    var tmp;
    if (startsWith(name, '...')) {
      name = removePrefix(name, '...');
      var tmp_0;
      if (endsWith(name, '?')) {
        name = removeSuffix(name, '?');
        tmp_0 = Match_REST_OPTIONAL_getInstance();
      } else {
        tmp_0 = Match_REST_getInstance();
      }
      tmp = tmp_0;
    } else {
      var tmp_1;
      if (endsWith(name, '?')) {
        name = removeSuffix(name, '?');
        tmp_1 = Match_SINGLE_OPTIONAL_getInstance();
      } else {
        tmp_1 = Match_SINGLE_getInstance();
      }
      tmp = tmp_1;
    }
    var match = tmp;
    return new Info(name, match);
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  var Match_SINGLE_instance;
  var Match_SINGLE_OPTIONAL_instance;
  var Match_REST_instance;
  var Match_REST_OPTIONAL_instance;
  function values_0() {
    return [Match_SINGLE_getInstance(), Match_SINGLE_OPTIONAL_getInstance(), Match_REST_getInstance(), Match_REST_OPTIONAL_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'SINGLE':
        return Match_SINGLE_getInstance();
      case 'SINGLE_OPTIONAL':
        return Match_SINGLE_OPTIONAL_getInstance();
      case 'REST':
        return Match_REST_getInstance();
      case 'REST_OPTIONAL':
        return Match_REST_OPTIONAL_getInstance();
      default:
        Match_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var Match_entriesInitialized;
  function Match_initEntries() {
    if (Match_entriesInitialized)
      return Unit_getInstance();
    Match_entriesInitialized = true;
    Match_SINGLE_instance = new Match('SINGLE', 0);
    Match_SINGLE_OPTIONAL_instance = new Match('SINGLE_OPTIONAL', 1);
    Match_REST_instance = new Match('REST', 2);
    Match_REST_OPTIONAL_instance = new Match('REST_OPTIONAL', 3);
  }
  var $ENTRIES_0;
  function Info(name, match) {
    Companion_getInstance();
    this.name_1 = name;
    this.match_1 = match;
  }
  protoOf(Info).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(Info).get_match_iv3el8_k$ = function () {
    return this.match_1;
  };
  protoOf(Info).component1_7eebsc_k$ = function () {
    return this.name_1;
  };
  protoOf(Info).component2_7eebsb_k$ = function () {
    return this.match_1;
  };
  protoOf(Info).copy_qpkj1j_k$ = function (name, match) {
    return new Info(name, match);
  };
  protoOf(Info).copy$default_ajivda_k$ = function (name, match, $super) {
    name = name === VOID ? this.name_1 : name;
    match = match === VOID ? this.match_1 : match;
    return $super === VOID ? this.copy_qpkj1j_k$(name, match) : $super.copy_qpkj1j_k$.call(this, name, match);
  };
  protoOf(Info).toString = function () {
    return 'Info(name=' + this.name_1 + ', match=' + this.match_1.toString() + ')';
  };
  protoOf(Info).hashCode = function () {
    var result = getStringHashCode(this.name_1);
    result = imul(result, 31) + this.match_1.hashCode() | 0;
    return result;
  };
  protoOf(Info).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Info))
      return false;
    var tmp0_other_with_cast = other instanceof Info ? other : THROW_CCE();
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    if (!this.match_1.equals(tmp0_other_with_cast.match_1))
      return false;
    return true;
  };
  function Match(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function _get_info__d89bod($this) {
    return $this.info_1;
  }
  function Match_SINGLE_getInstance() {
    Match_initEntries();
    return Match_SINGLE_instance;
  }
  function Match_SINGLE_OPTIONAL_getInstance() {
    Match_initEntries();
    return Match_SINGLE_OPTIONAL_instance;
  }
  function Match_REST_getInstance() {
    Match_initEntries();
    return Match_REST_instance;
  }
  function Match_REST_OPTIONAL_getInstance() {
    Match_initEntries();
    return Match_REST_OPTIONAL_instance;
  }
  function Node(parent, sourceRouteSegment) {
    parent = parent === VOID ? null : parent;
    this.parent_1 = parent;
    this.sourceRouteSegment_1 = sourceRouteSegment;
    this._data_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp._staticChildren_1 = ArrayList_init_$Create$();
    this._dynamicChild_1 = null;
    this.name_1 = this.sourceRouteSegment_1;
    this.isRouteTerminator_1 = false;
  }
  protoOf(Node).get_parent_hy4reb_k$ = function () {
    return this.parent_1;
  };
  protoOf(Node).get_sourceRouteSegment_7qwr9u_k$ = function () {
    return this.sourceRouteSegment_1;
  };
  protoOf(Node).set__data_yxyb97_k$ = function (_set____db54di) {
    this._data_1 = _set____db54di;
  };
  protoOf(Node).get__data_yco901_k$ = function () {
    return this._data_1;
  };
  protoOf(Node).get_data_wokkxf_k$ = function () {
    return this._data_1;
  };
  protoOf(Node).get_children_4cwbp4_k$ = function () {
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$();
    this_0.addAll_4lagoh_k$(this._staticChildren_1);
    var tmp0_safe_receiver = this._dynamicChild_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this_0.add_utx5q5_k$(tmp0_safe_receiver);
    }
    return this_0.build_nmwvly_k$();
  };
  protoOf(Node).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(Node).get_isRouteTerminator_8jl3dp_k$ = function () {
    return this.isRouteTerminator_1;
  };
  protoOf(Node).findChild_rhky47_k$ = function (routeSegment) {
    var tmp0 = this.get_children_4cwbp4_k$();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        if (element.matches_j19087_k$(routeSegment)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  };
  protoOf(Node).createChild_48vfnq_k$ = function (routeSegment) {
    // Inline function 'kotlin.check' call
    if (!(this.findChild_rhky47_k$(routeSegment) == null)) {
      var message = 'Node.createChild called unexpectedly. Please report this issue.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    if (!!this.get_isRouteTerminator_8jl3dp_k$()) {
      var message_0 = 'User attempted to register an invalid route. "' + this.sourceRouteSegment_1 + '" must be the last segment of the route, but it was followed by "' + routeSegment + '".';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    var tmp;
    if (isDynamicSegment(routeSegment)) {
      // Inline function 'kotlin.also' call
      var this_0 = new DynamicNode(this, routeSegment);
      this._dynamicChild_1 = this_0;
      tmp = this_0;
    } else {
      // Inline function 'kotlin.also' call
      var this_1 = new StaticNode(this, routeSegment);
      this._staticChildren_1.add_utx5q5_k$(this_1);
      tmp = this_1;
    }
    return tmp;
  };
  protoOf(Node).resolve_kdk6xi_k$ = function (routeSegments) {
    var consumeResult = this.accepts_7ck42f_k$(routeSegments);
    var tmp;
    switch (consumeResult.get_ordinal_ip24qg_k$()) {
      case 0:
        return null;
      case 1:
        tmp = to(first(routeSegments), drop(routeSegments, 1));
        break;
      case 2:
        tmp = to(joinToString(routeSegments, '/'), emptyList());
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    var _destruct__k2r9zo = tmp;
    var consumedPart = _destruct__k2r9zo.component1_7eebsc_k$();
    var remainingSegments = _destruct__k2r9zo.component2_7eebsb_k$();
    if (remainingSegments.isEmpty_y1axqb_k$() && this.get_data_wokkxf_k$() == null)
      return null;
    if (remainingSegments.isEmpty_y1axqb_k$())
      return resolve$createResolvedEntry(this, consumedPart);
    var tmp0 = this.get_children_4cwbp4_k$();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstNotNullOfOrNull' call
      var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        var result = element.resolve_kdk6xi_k$(remainingSegments);
        if (!(result == null)) {
          tmp$ret$1 = result;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp1_safe_receiver = tmp$ret$1;
    var tmp_0;
    if (tmp1_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_0 = plus(resolve$createResolvedEntry(this, consumedPart), tmp1_safe_receiver);
    }
    return tmp_0;
  };
  protoOf(Node).get_nodes_ivvt6w_k$ = function () {
    return sequence(RouteTree$Node$_get_nodes_$slambda_9kqj3_0(this, null));
  };
  function RootNode() {
    Node.call(this, null, '');
  }
  protoOf(RootNode).matches_j19087_k$ = function (routeSegment) {
    // Inline function 'kotlin.text.isEmpty' call
    return charSequenceLength(routeSegment) === 0;
  };
  protoOf(RootNode).accepts_7ck42f_k$ = function (routeSegments) {
    // Inline function 'kotlin.check' call
    if (!(first(routeSegments) === '')) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    return AcceptResult_SINGLE_getInstance();
  };
  function ChildNode(parent, sourceRouteSegment) {
    Node.call(this, parent, sourceRouteSegment);
  }
  function StaticNode(parent, sourceRouteSegment) {
    ChildNode.call(this, parent, sourceRouteSegment);
  }
  protoOf(StaticNode).matches_j19087_k$ = function (routeSegment) {
    return routeSegment === this.sourceRouteSegment_1;
  };
  protoOf(StaticNode).accepts_7ck42f_k$ = function (routeSegments) {
    if (this.matches_j19087_k$(first(routeSegments)))
      return AcceptResult_SINGLE_getInstance();
    return AcceptResult_NONE_getInstance();
  };
  function DynamicNode(parent, sourceRouteSegment) {
    ChildNode.call(this, parent, sourceRouteSegment);
    var tmp = this;
    var tmp0_elvis_lhs = Companion_getInstance().tryCreateFrom_1s9czd_k$(sourceRouteSegment);
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      var message = 'Expected a dynamic route segment here, but got "' + sourceRouteSegment + '"';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    tmp.info_1 = tmp_0;
    this.name_2 = this.info_1.name_1;
    this.isRouteTerminator_2 = !this.info_1.match_1.equals(Match_SINGLE_getInstance());
  }
  protoOf(DynamicNode).get_name_woqyms_k$ = function () {
    return this.name_2;
  };
  protoOf(DynamicNode).get_isRouteTerminator_8jl3dp_k$ = function () {
    return this.isRouteTerminator_2;
  };
  protoOf(DynamicNode).matches_j19087_k$ = function (routeSegment) {
    var tmp0_safe_receiver = Companion_getInstance().tryCreateFrom_1s9czd_k$(routeSegment);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      if (!this.info_1.equals(tmp0_safe_receiver)) {
        // Inline function 'kotlin.error' call
        var message = 'User is attempting to register a dynamic route that conflicts with another dynamic route already set up. "' + routeSegment + '" is being registered but "' + this.sourceRouteSegment_1 + '" already exists.';
        throw IllegalStateException_init_$Create$(toString(message));
      }
      return true;
    }
    return false;
  };
  protoOf(DynamicNode).accepts_7ck42f_k$ = function (routeSegments) {
    var tmp;
    switch (this.info_1.match_1.get_ordinal_ip24qg_k$()) {
      case 0:
        tmp = !(first(routeSegments) === '') ? AcceptResult_SINGLE_getInstance() : AcceptResult_NONE_getInstance();
        break;
      case 1:
        tmp = AcceptResult_SINGLE_getInstance();
        break;
      case 2:
        tmp = !(first(routeSegments) === '') ? AcceptResult_ALL_getInstance() : AcceptResult_NONE_getInstance();
        break;
      case 3:
        tmp = AcceptResult_ALL_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  function ResolvedEntry(node, capturedRouteSegment) {
    this.node_1 = node;
    this.capturedRouteSegment_1 = capturedRouteSegment;
  }
  protoOf(ResolvedEntry).get_node_wor8sr_k$ = function () {
    return this.node_1;
  };
  protoOf(ResolvedEntry).get_capturedRouteSegment_txp7g1_k$ = function () {
    return this.capturedRouteSegment_1;
  };
  function _get_root__dd8asp($this) {
    return $this.root_1;
  }
  function _get_redirects__2c3o62($this) {
    return $this.redirects_1;
  }
  function resolveWithoutRedirects($this, route) {
    return $this.root_1.resolve_kdk6xi_k$(split(route, charArrayOf([_Char___init__impl__6a9atx(47)])));
  }
  function resolveAllowingRedirects($this, route) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = route;
    var _iterator__ex2g4s = $this.redirects_1.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      var route_0 = accumulator;
      var tmp0_elvis_lhs = element.map_epzkwu_k$(route_0);
      accumulator = tmp0_elvis_lhs == null ? route_0 : tmp0_elvis_lhs;
    }
    var redirectedRoute = accumulator;
    return resolveWithoutRedirects($this, redirectedRoute);
  }
  function checkRoute($this, route) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.require' call
    if (!!$this.root_1.get_children_4cwbp4_k$().isEmpty_y1axqb_k$()) {
      var message = "No routes were ever registered. This is unexpected and probably means no `@Page` was defined (or pages were defined in the wrong place where Kobweb couldn't discover them).";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!startsWith_0(route, _Char___init__impl__6a9atx(47))) {
      var message_0 = 'When checking a route, it must begin with a slash. Got: "' + route + '"';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var tmp0_elvis_lhs = resolveAllowingRedirects($this, route);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var resolvedNodes = tmp;
    return toRouteString(resolvedNodes);
  }
  function RouteTree() {
    this.root_1 = new RootNode();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.redirects_1 = ArrayList_init_$Create$();
  }
  protoOf(RouteTree).resolve_7ctaaf_k$ = function (route, allowRedirects) {
    return allowRedirects ? resolveAllowingRedirects(this, route) : resolveWithoutRedirects(this, route);
  };
  protoOf(RouteTree).resolve$default_qmjuym_k$ = function (route, allowRedirects, $super) {
    allowRedirects = allowRedirects === VOID ? true : allowRedirects;
    return $super === VOID ? this.resolve_7ctaaf_k$(route, allowRedirects) : $super.resolve_7ctaaf_k$.call(this, route, allowRedirects);
  };
  protoOf(RouteTree).isRegistered_1ncfv6_k$ = function (route) {
    return !(checkRoute(this, route) == null);
  };
  protoOf(RouteTree).register_ela2uv_k$ = function (route, data) {
    var routeSegments = toMutableList(split(route, charArrayOf([_Char___init__impl__6a9atx(47)])));
    var currNode = this.root_1;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!this.root_1.matches_j19087_k$(removeFirst(routeSegments))) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    $l$loop: while (true) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!!routeSegments.isEmpty_y1axqb_k$()) {
        break $l$loop;
      }
      var nextRouteSegment = removeFirst(routeSegments);
      var tmp0_elvis_lhs = currNode.findChild_rhky47_k$(nextRouteSegment);
      currNode = tmp0_elvis_lhs == null ? currNode.createChild_48vfnq_k$(nextRouteSegment) : tmp0_elvis_lhs;
    }
    if (!(currNode.get_data_wokkxf_k$() == null))
      return false;
    currNode._data_1 = data;
    return true;
  };
  protoOf(RouteTree).registerRedirect_o9yje9_k$ = function (redirectRoute, actualRoute) {
    this.redirects_1.add_utx5q5_k$(PatternMapper_init_$Create$('^' + redirectRoute + '$', actualRoute));
  };
  protoOf(RouteTree).get_nodes_ivvt6w_k$ = function () {
    return this.root_1.get_nodes_ivvt6w_k$();
  };
  function toRouteString(_this__u8e3s4) {
    return joinToString(_this__u8e3s4, '/', VOID, VOID, VOID, VOID, toRouteString$lambda);
  }
  function isDynamicSegment(_this__u8e3s4) {
    return startsWith_0(_this__u8e3s4, _Char___init__impl__6a9atx(123)) && endsWith_0(_this__u8e3s4, _Char___init__impl__6a9atx(125));
  }
  function toRouteString$lambda(it) {
    return it.capturedRouteSegment_1;
  }
  function PatternMapper_init_$Init$(pattern, target, $this) {
    PatternMapper.call($this, Regex_init_$Create$(pattern), target);
    return $this;
  }
  function PatternMapper_init_$Create$(pattern, target) {
    return PatternMapper_init_$Init$(pattern, target, objectCreate(protoOf(PatternMapper)));
  }
  function PatternMapper(pattern, target) {
    this.pattern_1 = pattern;
    this.target_1 = target;
  }
  protoOf(PatternMapper).get_pattern_btfv4p_k$ = function () {
    return this.pattern_1;
  };
  protoOf(PatternMapper).get_target_juba8q_k$ = function () {
    return this.target_1;
  };
  protoOf(PatternMapper).map_epzkwu_k$ = function (text) {
    var tmp0_safe_receiver = this.pattern_1.matchEntire_6100vb_k$(text);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var final = this.target_1;
      var inductionVariable = get_lastIndex(tmp0_safe_receiver.get_groupValues_rkv314_k$());
      if (0 <= inductionVariable)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          final = replace(final, '$' + i, tmp0_safe_receiver.get_groupValues_rkv314_k$().get_c1px32_k$(i));
        }
         while (0 <= inductionVariable);
      return final;
    }
    return tmp;
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = DynamicNode;
  _.$_$.b = RouteTree;
  _.$_$.c = toRouteString;
  //endregion
  return _;
}));
