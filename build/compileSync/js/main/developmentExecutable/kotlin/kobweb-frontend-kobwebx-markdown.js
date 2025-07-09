(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['kobweb-frontend-kobwebx-markdown'] = factory(typeof globalThis['kobweb-frontend-kobwebx-markdown'] === 'undefined' ? {} : globalThis['kobweb-frontend-kobwebx-markdown']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  var com_varabyte_kobwebx_markdown_MarkdownContext$stable;
  //region block: init
  com_varabyte_kobwebx_markdown_MarkdownContext$stable = 8;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-kobwebx-markdown.js.map
