(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['kobweb-common-framework-annotations'] = factory(typeof globalThis['kobweb-common-framework-annotations'] === 'undefined' ? {} : globalThis['kobweb-common-framework-annotations']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-common-framework-annotations.js.map
