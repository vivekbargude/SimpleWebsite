(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-browser-ext'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-browser-ext'.");
    }
    globalThis['kobweb-frontend-browser-ext'] = factory(typeof globalThis['kobweb-frontend-browser-ext'] === 'undefined' ? {} : globalThis['kobweb-frontend-browser-ext'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var IllegalArgumentException = kotlin_kotlin.$_$.r9;
  var protoOf = kotlin_kotlin.$_$.h7;
  var initMetadataForCompanion = kotlin_kotlin.$_$.s6;
  var charSequenceLength = kotlin_kotlin.$_$.h6;
  var toString = kotlin_kotlin.$_$.j7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var Unit_instance = kotlin_kotlin.$_$.c2;
  var charCodeAt = kotlin_kotlin.$_$.f6;
  var isDigit = kotlin_kotlin.$_$.l8;
  var substring = kotlin_kotlin.$_$.c9;
  var CharSequence = kotlin_kotlin.$_$.l9;
  var initMetadataForClass = kotlin_kotlin.$_$.r6;
  var VOID = kotlin_kotlin.$_$.e;
  var isBlank = kotlin_kotlin.$_$.k8;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.x;
  var charSequenceGet = kotlin_kotlin.$_$.g6;
  var isUpperCase = kotlin_kotlin.$_$.n8;
  var Char = kotlin_kotlin.$_$.m9;
  var get_lastIndex = kotlin_kotlin.$_$.p8;
  var isLowerCase = kotlin_kotlin.$_$.m8;
  var toString_0 = kotlin_kotlin.$_$.s1;
  var Companion_getInstance = kotlin_kotlin.$_$.a2;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.f;
  var toDuration = kotlin_kotlin.$_$.k9;
  var _Duration___get_inWholeMilliseconds__impl__msfiry = kotlin_kotlin.$_$.p1;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(CssIdent, 'CssIdent', VOID, VOID, [CharSequence]);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(CancellableActionHandle, 'CancellableActionHandle');
  //endregion
  function Companion() {
  }
  protoOf(Companion).wu = function (identifier) {
    var tmp;
    try {
      tmp = new CssIdent(identifier);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    return Companion_instance;
  }
  function CssIdent(asStr) {
    this.xu_1 = asStr;
    var errorMsg = 'Invalid CSS identifier: "' + this.xu_1 + '". See https://developer.mozilla.org/en-US/docs/Web/CSS/ident#syntax';
    // Inline function 'kotlin.text.isNotEmpty' call
    var this_0 = this.xu_1;
    // Inline function 'kotlin.require' call
    if (!(charSequenceLength(this_0) > 0)) {
      var message = errorMsg;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!!isDigit(charCodeAt(this.xu_1, 0))) {
      var message_0 = errorMsg;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    if (!CSS.supports('--' + this.xu_1 + ':0')) {
      var message_1 = errorMsg;
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
  }
  protoOf(CssIdent).yu = function (action) {
    return new CssIdent(action(this.xu_1));
  };
  protoOf(CssIdent).b = function (index) {
    return charCodeAt(this.xu_1, index);
  };
  protoOf(CssIdent).c = function (startIndex, endIndex) {
    return substring(this.xu_1, startIndex, endIndex);
  };
  protoOf(CssIdent).a = function () {
    return this.xu_1.length;
  };
  function titleCamelCaseToKebabCase(_this__u8e3s4) {
    return camelCaseToKebabCase(_this__u8e3s4);
  }
  function camelCaseToKebabCase(_this__u8e3s4) {
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(_this__u8e3s4)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var lastIsUpper = false;
    var str = _this__u8e3s4;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.text.forEachIndexed' call
    var index = 0;
    var inductionVariable = 0;
    while (inductionVariable < charSequenceLength(str)) {
      var item = charSequenceGet(str, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      var isUpper = isUpperCase(item);
      var tmp;
      if (isUpper) {
        // Inline function 'kotlin.text.isNotEmpty' call
        if (charSequenceLength(this_0) > 0) {
          if (!lastIsUpper || (_unary__edvuaz < get_lastIndex(str) && isLowerCase(charCodeAt(str, _unary__edvuaz + 1 | 0)))) {
            this_0.c8('-');
          }
        }
        // Inline function 'kotlin.text.lowercase' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.unsafeCast' call
        tmp = toString_0(item).toLowerCase();
      } else {
        tmp = new Char(item);
      }
      var cFinal = tmp;
      this_0.b8(cFinal);
      lastIsUpper = isUpper;
    }
    return this_0.toString();
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.zu_1 = new CancellableActionHandle(0);
  }
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function CancellableActionHandle(id, isInterval) {
    Companion_getInstance_1();
    isInterval = isInterval === VOID ? false : isInterval;
    this.av_1 = isInterval;
    this.bv_1 = id;
  }
  function invokeLater(_this__u8e3s4, block) {
    // Inline function 'kotlin.time.Companion.milliseconds' call
    Companion_getInstance();
    var tmp$ret$0 = toDuration(0, DurationUnit_MILLISECONDS_getInstance());
    return setTimeout(_this__u8e3s4, tmp$ret$0, block);
  }
  function setTimeout(_this__u8e3s4, timeout, block) {
    var id = _this__u8e3s4.setTimeout(block, _Duration___get_inWholeMilliseconds__impl__msfiry(timeout).i3());
    return new CancellableActionHandle(id);
  }
  //region block: init
  Companion_instance = new Companion();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CssIdent;
  _.$_$.b = invokeLater;
  _.$_$.c = titleCamelCaseToKebabCase;
  _.$_$.d = Companion_instance;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-browser-ext.js.map
