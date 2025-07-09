(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['kobweb-common-kobwebx-frontmatter'] = factory(typeof globalThis['kobweb-common-kobwebx-frontmatter'] === 'undefined' ? {} : globalThis['kobweb-common-kobwebx-frontmatter']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));
