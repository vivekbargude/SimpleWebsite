(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-runtime-runtime.js', './kobweb-frontend-kobweb-core.js', './kobweb-frontend-kobweb-compose.js', './kobweb-frontend-silk-foundation.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kobweb-frontend-kobweb-core.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./kobweb-frontend-silk-foundation.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-silk'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-kobweb-silk'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-silk'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-kobweb-silk'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-silk'. Its dependency 'kobweb-frontend-kobweb-core' was not found. Please, check whether 'kobweb-frontend-kobweb-core' is loaded prior to 'kobweb-frontend-kobweb-silk'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-silk'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'kobweb-frontend-kobweb-silk'.");
    }
    if (typeof globalThis['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-silk'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'kobweb-frontend-kobweb-silk'.");
    }
    globalThis['kobweb-frontend-kobweb-silk'] = factory(typeof globalThis['kobweb-frontend-kobweb-silk'] === 'undefined' ? {} : globalThis['kobweb-frontend-kobweb-silk'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['kobweb-frontend-kobweb-core'], globalThis['kobweb-frontend-kobweb-compose'], globalThis['kobweb-frontend-silk-foundation']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_com_varabyte_kobweb_kobweb_core, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_com_varabyte_kobweb_silk_foundation) {
  'use strict';
  //region block: imports
  var Unit_instance = kotlin_kotlin.$_$.c2;
  var rememberComposableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var THROW_CCE = kotlin_kotlin.$_$.v9;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var KobwebApp = kotlin_com_varabyte_kobweb_kobweb_core.$_$.b;
  var KobwebComposeStyles = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j3;
  var SilkFoundationStyles = kotlin_com_varabyte_kobweb_silk_foundation.$_$.y1;
  var ColorModeAware = kotlin_com_varabyte_kobweb_silk_foundation.$_$.x1;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  //endregion
  //region block: pre-declaration
  //endregion
  function SilkApp(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.y1i(921272959);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.m1h(content) ? 4 : 2);
    if ($composer_0.r1i(!(($dirty & 3) === 2), $dirty & 1)) {
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(696845695, true, SilkApp$lambda(content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.z16(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.y1h();
      var tmp;
      if (invalid || it === Companion_getInstance().f1a_1) {
        var value = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_1.j1i(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      KobwebApp(tmp0, $composer_0, 6);
    } else {
      $composer_0.w19();
    }
    var tmp0_safe_receiver = $composer_0.z1i();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d1o(SilkApp$lambda_0(content, $changed));
    }
  }
  function SilkApp$lambda($content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.r1i(!(($changed & 3) === 2), $changed & 1)) {
        KobwebComposeStyles($composer_0, 0);
        SilkFoundationStyles(null, $composer_0, 0, 1);
        ColorModeAware(null, $composer_0, 0, 1);
        tmp = $content($composer_0, 0);
      } else {
        $composer_0.w19();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref(p0) {
    return function (_this__u8e3s4, p0_0) {
      return p0.g1g(_this__u8e3s4, p0_0);
    };
  }
  function SilkApp$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      SilkApp($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = SilkApp;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-kobweb-silk.js.map
