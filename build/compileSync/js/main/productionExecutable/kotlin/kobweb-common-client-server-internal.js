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
  var Unit_instance = kotlin_kotlin.$_$.c2;
  var Enum = kotlin_kotlin.$_$.o9;
  var protoOf = kotlin_kotlin.$_$.h7;
  var initMetadataForClass = kotlin_kotlin.$_$.r6;
  var VOID = kotlin_kotlin.$_$.e;
  var listOf = kotlin_kotlin.$_$.f4;
  var removeSurrounding = kotlin_kotlin.$_$.s8;
  var removeSuffix = kotlin_kotlin.$_$.r8;
  var endsWith = kotlin_kotlin.$_$.i8;
  var removePrefix = kotlin_kotlin.$_$.q8;
  var startsWith = kotlin_kotlin.$_$.w8;
  var initMetadataForCompanion = kotlin_kotlin.$_$.s6;
  var getStringHashCode = kotlin_kotlin.$_$.p6;
  var THROW_CCE = kotlin_kotlin.$_$.v9;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var toString = kotlin_kotlin.$_$.j7;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.f1;
  var first = kotlin_kotlin.$_$.t3;
  var drop = kotlin_kotlin.$_$.m3;
  var to = kotlin_kotlin.$_$.la;
  var joinToString = kotlin_kotlin.$_$.x3;
  var emptyList = kotlin_kotlin.$_$.n3;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ea;
  var plus = kotlin_kotlin.$_$.q4;
  var charSequenceLength = kotlin_kotlin.$_$.h6;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.r1;
  var charArrayOf = kotlin_kotlin.$_$.e6;
  var split = kotlin_kotlin.$_$.u8;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var startsWith_0 = kotlin_kotlin.$_$.x8;
  var toMutableList = kotlin_kotlin.$_$.b5;
  var removeFirst = kotlin_kotlin.$_$.t4;
  var endsWith_0 = kotlin_kotlin.$_$.h8;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(AcceptResult, 'AcceptResult', VOID, Enum);
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
  //endregion
  var AcceptResult_NONE_instance;
  var AcceptResult_SINGLE_instance;
  var AcceptResult_ALL_instance;
  var AcceptResult_entriesInitialized;
  function AcceptResult_initEntries() {
    if (AcceptResult_entriesInitialized)
      return Unit_instance;
    AcceptResult_entriesInitialized = true;
    AcceptResult_NONE_instance = new AcceptResult('NONE', 0);
    AcceptResult_SINGLE_instance = new AcceptResult('SINGLE', 1);
    AcceptResult_ALL_instance = new AcceptResult('ALL', 2);
  }
  function AcceptResult(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function resolve$createResolvedEntry(this$0, consumedPart) {
    return listOf(new ResolvedEntry(this$0, consumedPart));
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
  }
  protoOf(Companion).s2u = function (routeSegment) {
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
    return Companion_instance;
  }
  var Match_SINGLE_instance;
  var Match_SINGLE_OPTIONAL_instance;
  var Match_REST_instance;
  var Match_REST_OPTIONAL_instance;
  var Match_entriesInitialized;
  function Match_initEntries() {
    if (Match_entriesInitialized)
      return Unit_instance;
    Match_entriesInitialized = true;
    Match_SINGLE_instance = new Match('SINGLE', 0);
    Match_SINGLE_OPTIONAL_instance = new Match('SINGLE_OPTIONAL', 1);
    Match_REST_instance = new Match('REST', 2);
    Match_REST_OPTIONAL_instance = new Match('REST_OPTIONAL', 3);
  }
  function Info(name, match) {
    this.t2u_1 = name;
    this.u2u_1 = match;
  }
  protoOf(Info).toString = function () {
    return 'Info(name=' + this.t2u_1 + ', match=' + this.u2u_1.toString() + ')';
  };
  protoOf(Info).hashCode = function () {
    var result = getStringHashCode(this.t2u_1);
    result = imul(result, 31) + this.u2u_1.hashCode() | 0;
    return result;
  };
  protoOf(Info).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Info))
      return false;
    var tmp0_other_with_cast = other instanceof Info ? other : THROW_CCE();
    if (!(this.t2u_1 === tmp0_other_with_cast.t2u_1))
      return false;
    if (!this.u2u_1.equals(tmp0_other_with_cast.u2u_1))
      return false;
    return true;
  };
  function Match(name, ordinal) {
    Enum.call(this, name, ordinal);
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
    this.v2u_1 = parent;
    this.w2u_1 = sourceRouteSegment;
    this.x2u_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.y2u_1 = ArrayList_init_$Create$();
    this.z2u_1 = null;
    this.a2v_1 = this.w2u_1;
    this.b2v_1 = false;
  }
  protoOf(Node).c2v = function () {
    return this.x2u_1;
  };
  protoOf(Node).xq = function () {
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$();
    this_0.n(this.y2u_1);
    var tmp0_safe_receiver = this.z2u_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this_0.e(tmp0_safe_receiver);
    }
    return this_0.i5();
  };
  protoOf(Node).k20 = function () {
    return this.a2v_1;
  };
  protoOf(Node).d2v = function () {
    return this.b2v_1;
  };
  protoOf(Node).g2v = function (routeSegment) {
    var tmp0 = this.xq();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        if (element.f2v(routeSegment)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  };
  protoOf(Node).h2v = function (routeSegment) {
    // Inline function 'kotlin.check' call
    if (!(this.g2v(routeSegment) == null)) {
      var message = 'Node.createChild called unexpectedly. Please report this issue.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    if (!!this.d2v()) {
      var message_0 = 'User attempted to register an invalid route. "' + this.w2u_1 + '" must be the last segment of the route, but it was followed by "' + routeSegment + '".';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    var tmp;
    if (isDynamicSegment(routeSegment)) {
      // Inline function 'kotlin.also' call
      var this_0 = new DynamicNode(this, routeSegment);
      this.z2u_1 = this_0;
      tmp = this_0;
    } else {
      // Inline function 'kotlin.also' call
      var this_1 = new StaticNode(this, routeSegment);
      this.y2u_1.e(this_1);
      tmp = this_1;
    }
    return tmp;
  };
  protoOf(Node).i2v = function (routeSegments) {
    var consumeResult = this.e2v(routeSegments);
    var tmp;
    switch (consumeResult.p2_1) {
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
    var consumedPart = _destruct__k2r9zo.af();
    var remainingSegments = _destruct__k2r9zo.bf();
    if (remainingSegments.r() && this.c2v() == null)
      return null;
    if (remainingSegments.r())
      return resolve$createResolvedEntry(this, consumedPart);
    var tmp0 = this.xq();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstNotNullOfOrNull' call
      var _iterator__ex2g4s = tmp0.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        var result = element.i2v(remainingSegments);
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
  function RootNode() {
    Node.call(this, null, '');
  }
  protoOf(RootNode).f2v = function (routeSegment) {
    // Inline function 'kotlin.text.isEmpty' call
    return charSequenceLength(routeSegment) === 0;
  };
  protoOf(RootNode).e2v = function (routeSegments) {
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
  protoOf(StaticNode).f2v = function (routeSegment) {
    return routeSegment === this.w2u_1;
  };
  protoOf(StaticNode).e2v = function (routeSegments) {
    if (this.f2v(first(routeSegments)))
      return AcceptResult_SINGLE_getInstance();
    return AcceptResult_NONE_getInstance();
  };
  function DynamicNode(parent, sourceRouteSegment) {
    ChildNode.call(this, parent, sourceRouteSegment);
    var tmp = this;
    var tmp0_elvis_lhs = Companion_instance.s2u(sourceRouteSegment);
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      var message = 'Expected a dynamic route segment here, but got "' + sourceRouteSegment + '"';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    tmp.e2w_1 = tmp_0;
    this.f2w_1 = this.e2w_1.t2u_1;
    this.g2w_1 = !this.e2w_1.u2u_1.equals(Match_SINGLE_getInstance());
  }
  protoOf(DynamicNode).k20 = function () {
    return this.f2w_1;
  };
  protoOf(DynamicNode).d2v = function () {
    return this.g2w_1;
  };
  protoOf(DynamicNode).f2v = function (routeSegment) {
    var tmp0_safe_receiver = Companion_instance.s2u(routeSegment);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      if (!this.e2w_1.equals(tmp0_safe_receiver)) {
        // Inline function 'kotlin.error' call
        var message = 'User is attempting to register a dynamic route that conflicts with another dynamic route already set up. "' + routeSegment + '" is being registered but "' + this.w2u_1 + '" already exists.';
        throw IllegalStateException_init_$Create$(toString(message));
      }
      return true;
    }
    return false;
  };
  protoOf(DynamicNode).e2v = function (routeSegments) {
    var tmp;
    switch (this.e2w_1.u2u_1.p2_1) {
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
    this.h2w_1 = node;
    this.i2w_1 = capturedRouteSegment;
  }
  function resolveWithoutRedirects($this, route) {
    return $this.j2w_1.i2v(split(route, charArrayOf([_Char___init__impl__6a9atx(47)])));
  }
  function resolveAllowingRedirects($this, route) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = route;
    var _iterator__ex2g4s = $this.k2w_1.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      var route_0 = accumulator;
      var tmp0_elvis_lhs = element.n2w(route_0);
      accumulator = tmp0_elvis_lhs == null ? route_0 : tmp0_elvis_lhs;
    }
    var redirectedRoute = accumulator;
    return resolveWithoutRedirects($this, redirectedRoute);
  }
  function checkRoute($this, route) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.require' call
    if (!!$this.j2w_1.xq().r()) {
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
    this.j2w_1 = new RootNode();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.k2w_1 = ArrayList_init_$Create$();
  }
  protoOf(RouteTree).o2w = function (route, allowRedirects) {
    return allowRedirects ? resolveAllowingRedirects(this, route) : resolveWithoutRedirects(this, route);
  };
  protoOf(RouteTree).p2w = function (route) {
    return !(checkRoute(this, route) == null);
  };
  protoOf(RouteTree).q2w = function (route, data) {
    var routeSegments = toMutableList(split(route, charArrayOf([_Char___init__impl__6a9atx(47)])));
    var currNode = this.j2w_1;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!this.j2w_1.f2v(removeFirst(routeSegments))) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    $l$loop: while (true) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!!routeSegments.r()) {
        break $l$loop;
      }
      var nextRouteSegment = removeFirst(routeSegments);
      var tmp0_elvis_lhs = currNode.g2v(nextRouteSegment);
      currNode = tmp0_elvis_lhs == null ? currNode.h2v(nextRouteSegment) : tmp0_elvis_lhs;
    }
    if (!(currNode.c2v() == null))
      return false;
    currNode.x2u_1 = data;
    return true;
  };
  function toRouteString(_this__u8e3s4) {
    return joinToString(_this__u8e3s4, '/', VOID, VOID, VOID, VOID, toRouteString$lambda);
  }
  function isDynamicSegment(_this__u8e3s4) {
    return startsWith_0(_this__u8e3s4, _Char___init__impl__6a9atx(123)) && endsWith_0(_this__u8e3s4, _Char___init__impl__6a9atx(125));
  }
  function toRouteString$lambda(it) {
    return it.i2w_1;
  }
  //region block: init
  Companion_instance = new Companion();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = DynamicNode;
  _.$_$.b = RouteTree;
  _.$_$.c = toRouteString;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-common-client-server-internal.js.map
