(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['kobweb-frontend-kobweb-worker-interface'] = factory(typeof globalThis['kobweb-frontend-kobweb-worker-interface'] === 'undefined' ? {} : globalThis['kobweb-frontend-kobweb-worker-interface']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-kobweb-worker-interface.js.map
