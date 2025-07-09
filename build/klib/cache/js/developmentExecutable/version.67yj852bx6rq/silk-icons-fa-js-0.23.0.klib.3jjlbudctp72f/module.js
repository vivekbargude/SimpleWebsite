(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['kobweb-frontend-silk-icons-fa'] = factory(typeof globalThis['kobweb-frontend-silk-icons-fa'] === 'undefined' ? {} : globalThis['kobweb-frontend-silk-icons-fa']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));
