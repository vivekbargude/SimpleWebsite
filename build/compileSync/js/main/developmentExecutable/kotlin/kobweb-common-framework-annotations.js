(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-common-framework-annotations'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-common-framework-annotations'.");
    }
    globalThis['kobweb-common-framework-annotations'] = factory(typeof globalThis['kobweb-common-framework-annotations'] === 'undefined' ? {} : globalThis['kobweb-common-framework-annotations'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.lc;
  var THROW_CCE = kotlin_kotlin.$_$.tf;
  var getStringHashCode = kotlin_kotlin.$_$.gb;
  var Annotation = kotlin_kotlin.$_$.ef;
  var initMetadataForClass = kotlin_kotlin.$_$.ib;
  var VOID = kotlin_kotlin.$_$.f;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(DelicateApi, 'DelicateApi', VOID, VOID, [Annotation]);
  //endregion
  function DelicateApi(message) {
    this.message_1 = message;
  }
  protoOf(DelicateApi).get_message_h23axq_k$ = function () {
    return this.message_1;
  };
  protoOf(DelicateApi).equals = function (other) {
    if (!(other instanceof DelicateApi))
      return false;
    var tmp0_other_with_cast = other instanceof DelicateApi ? other : THROW_CCE();
    if (!(this.message_1 === tmp0_other_with_cast.message_1))
      return false;
    return true;
  };
  protoOf(DelicateApi).hashCode = function () {
    return imul(getStringHashCode('message'), 127) ^ getStringHashCode(this.message_1);
  };
  protoOf(DelicateApi).toString = function () {
    return '@com.varabyte.kobweb.framework.annotations.DelicateApi(' + 'message=' + this.message_1 + ')';
  };
  return _;
}));

//# sourceMappingURL=kobweb-common-framework-annotations.js.map
