(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat'.");
    }
    globalThis.kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat = factory(typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined' ? {} : kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.l;
  var THROW_CCE = kotlin_kotlin.$_$.tf;
  var isCharSequence = kotlin_kotlin.$_$.sb;
  var trim = kotlin_kotlin.$_$.af;
  var toString = kotlin_kotlin.$_$.oc;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.e1;
  var charSequenceLength = kotlin_kotlin.$_$.xa;
  var joinTo = kotlin_kotlin.$_$.q7;
  var Unit_getInstance = kotlin_kotlin.$_$.m4;
  var toSet = kotlin_kotlin.$_$.o9;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.d1;
  var joinToString = kotlin_kotlin.$_$.o7;
  var ensureNotNull = kotlin_kotlin.$_$.lg;
  var protoOf = kotlin_kotlin.$_$.lc;
  var initMetadataForClass = kotlin_kotlin.$_$.ib;
  var VOID = kotlin_kotlin.$_$.f;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(EventListenerHandler, 'EventListenerHandler');
  //endregion
  function addClass(_this__u8e3s4, cssClasses) {
    // Inline function 'kotlin.collections.filterNot' call
    // Inline function 'kotlin.collections.filterNotTo' call
    var destination = ArrayList_init_$Create$();
    var inductionVariable = 0;
    var last = cssClasses.length;
    while (inductionVariable < last) {
      var element = cssClasses[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (!hasClass(_this__u8e3s4, element)) {
        destination.add_utx5q5_k$(element);
      }
    }
    var missingClasses = destination;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!missingClasses.isEmpty_y1axqb_k$()) {
      // Inline function 'kotlin.text.trim' call
      var this_0 = _this__u8e3s4.className;
      var presentClasses = toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      this_1.append_22ad7x_k$(presentClasses);
      // Inline function 'kotlin.text.isEmpty' call
      if (!(charSequenceLength(presentClasses) === 0)) {
        this_1.append_22ad7x_k$(' ');
      }
      joinTo(missingClasses, this_1, ' ');
      _this__u8e3s4.className = this_1.toString();
      return true;
    }
    return false;
  }
  function removeClass(_this__u8e3s4, cssClasses) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.any' call
      var inductionVariable = 0;
      var last = cssClasses.length;
      while (inductionVariable < last) {
        var element = cssClasses[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if (hasClass(_this__u8e3s4, element)) {
          tmp$ret$1 = true;
          break $l$block;
        }
      }
      tmp$ret$1 = false;
    }
    if (tmp$ret$1) {
      var toBeRemoved = toSet(cssClasses);
      // Inline function 'kotlin.text.trim' call
      var this_0 = _this__u8e3s4.className;
      var tmp0 = toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
      // Inline function 'kotlin.text.toRegex' call
      // Inline function 'kotlin.text.split' call
      // Inline function 'kotlin.collections.filter' call
      var tmp0_0 = Regex_init_$Create$('\\s+').split_p7ck23_k$(tmp0, 0);
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList_init_$Create$();
      var _iterator__ex2g4s = tmp0_0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element_0 = _iterator__ex2g4s.next_20eer_k$();
        if (!toBeRemoved.contains_aljjnj_k$(element_0)) {
          destination.add_utx5q5_k$(element_0);
        }
      }
      _this__u8e3s4.className = joinToString(destination, ' ');
      return true;
    }
    return false;
  }
  function hasClass(_this__u8e3s4, cssClass) {
    var tmp0 = _this__u8e3s4.className;
    // Inline function 'kotlin.text.toRegex' call
    var this_0 = '(^|.*\\s+)' + cssClass + '($|\\s+.*)';
    // Inline function 'kotlin.text.matches' call
    return Regex_init_$Create$(this_0).matches_evli6i_k$(tmp0);
  }
  function clear(_this__u8e3s4) {
    while (_this__u8e3s4.hasChildNodes()) {
      _this__u8e3s4.removeChild(ensureNotNull(_this__u8e3s4.firstChild));
    }
  }
  function EventListener(handler) {
    return new EventListenerHandler(handler);
  }
  function _get_handler__z70553($this) {
    return $this.handler_1;
  }
  function EventListenerHandler(handler) {
    this.handler_1 = handler;
  }
  protoOf(EventListenerHandler).handleEvent_zcjn50_k$ = function (event) {
    this.handler_1(event);
  };
  protoOf(EventListenerHandler).handleEvent = function (event) {
    return this.handleEvent_zcjn50_k$(event);
  };
  protoOf(EventListenerHandler).toString = function () {
    return 'EventListenerHandler(' + toString(this.handler_1) + ')';
  };
  function get(_this__u8e3s4, index) {
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4[index];
  }
  function get_INSTANT(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    return 'instant';
  }
  function get_0(_this__u8e3s4, index) {
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4[index];
  }
  function ScrollToOptions(left, top, behavior) {
    left = left === VOID ? undefined : left;
    top = top === VOID ? undefined : top;
    var tmp;
    if (behavior === VOID) {
      // Inline function 'org.w3c.dom.AUTO' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.unsafeCast' call
      tmp = 'auto';
    } else {
      tmp = behavior;
    }
    behavior = tmp;
    var o = {};
    o['left'] = left;
    o['top'] = top;
    o['behavior'] = behavior;
    return o;
  }
  function get_AUTO(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    return 'auto';
  }
  function RequestInit(method, headers, body, referrer, referrerPolicy, mode, credentials, cache, redirect, integrity, keepalive, window_0) {
    method = method === VOID ? undefined : method;
    headers = headers === VOID ? undefined : headers;
    body = body === VOID ? undefined : body;
    referrer = referrer === VOID ? undefined : referrer;
    referrerPolicy = referrerPolicy === VOID ? undefined : referrerPolicy;
    mode = mode === VOID ? undefined : mode;
    credentials = credentials === VOID ? undefined : credentials;
    cache = cache === VOID ? undefined : cache;
    redirect = redirect === VOID ? undefined : redirect;
    integrity = integrity === VOID ? undefined : integrity;
    keepalive = keepalive === VOID ? undefined : keepalive;
    window_0 = window_0 === VOID ? undefined : window_0;
    var o = {};
    o['method'] = method;
    o['headers'] = headers;
    o['body'] = body;
    o['referrer'] = referrer;
    o['referrerPolicy'] = referrerPolicy;
    o['mode'] = mode;
    o['credentials'] = credentials;
    o['cache'] = cache;
    o['redirect'] = redirect;
    o['integrity'] = integrity;
    o['keepalive'] = keepalive;
    o['window'] = window_0;
    return o;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = addClass;
  _.$_$.b = clear;
  _.$_$.c = removeClass;
  _.$_$.d = EventListener;
  //endregion
  return _;
}));
