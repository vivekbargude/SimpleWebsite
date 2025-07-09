(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kobweb-frontend-kobweb-core.js', './kotlin-kotlin-stdlib.js', './kobweb-frontend-silk-foundation.js', './compose-multiplatform-core-compose-runtime-runtime.js', './html-internal-html-core-runtime.js', './kobweb-frontend-silk-widgets.js', './kobweb-frontend-silk-widgets-kobweb.js', './kobweb-frontend-kobweb-silk.js', './kobweb-frontend-kobweb-compose.js', './html-html-core.js', './kobweb-frontend-compose-html-ext.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kobweb-frontend-kobweb-core.js'), require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-silk-foundation.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./html-internal-html-core-runtime.js'), require('./kobweb-frontend-silk-widgets.js'), require('./kobweb-frontend-silk-widgets-kobweb.js'), require('./kobweb-frontend-kobweb-silk.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./html-html-core.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof globalThis['kobweb-frontend-kobweb-core'] === 'undefined') {
      throw new Error("Error loading module 'com.vivek_bargude.simple_wesbsite:site'. Its dependency 'kobweb-frontend-kobweb-core' was not found. Please, check whether 'kobweb-frontend-kobweb-core' is loaded prior to 'com.vivek_bargude.simple_wesbsite:site'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'com.vivek_bargude.simple_wesbsite:site'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'com.vivek_bargude.simple_wesbsite:site'.");
    }
    if (typeof globalThis['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'com.vivek_bargude.simple_wesbsite:site'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'com.vivek_bargude.simple_wesbsite:site'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'com.vivek_bargude.simple_wesbsite:site'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'com.vivek_bargude.simple_wesbsite:site'.");
    }
    if (typeof globalThis['html-internal-html-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'com.vivek_bargude.simple_wesbsite:site'. Its dependency 'html-internal-html-core-runtime' was not found. Please, check whether 'html-internal-html-core-runtime' is loaded prior to 'com.vivek_bargude.simple_wesbsite:site'.");
    }
    if (typeof globalThis['kobweb-frontend-silk-widgets'] === 'undefined') {
      throw new Error("Error loading module 'com.vivek_bargude.simple_wesbsite:site'. Its dependency 'kobweb-frontend-silk-widgets' was not found. Please, check whether 'kobweb-frontend-silk-widgets' is loaded prior to 'com.vivek_bargude.simple_wesbsite:site'.");
    }
    if (typeof globalThis['kobweb-frontend-silk-widgets-kobweb'] === 'undefined') {
      throw new Error("Error loading module 'com.vivek_bargude.simple_wesbsite:site'. Its dependency 'kobweb-frontend-silk-widgets-kobweb' was not found. Please, check whether 'kobweb-frontend-silk-widgets-kobweb' is loaded prior to 'com.vivek_bargude.simple_wesbsite:site'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-silk'] === 'undefined') {
      throw new Error("Error loading module 'com.vivek_bargude.simple_wesbsite:site'. Its dependency 'kobweb-frontend-kobweb-silk' was not found. Please, check whether 'kobweb-frontend-kobweb-silk' is loaded prior to 'com.vivek_bargude.simple_wesbsite:site'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'com.vivek_bargude.simple_wesbsite:site'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'com.vivek_bargude.simple_wesbsite:site'.");
    }
    if (typeof globalThis['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'com.vivek_bargude.simple_wesbsite:site'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'com.vivek_bargude.simple_wesbsite:site'.");
    }
    if (typeof globalThis['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'com.vivek_bargude.simple_wesbsite:site'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'com.vivek_bargude.simple_wesbsite:site'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'com.vivek_bargude.simple_wesbsite:site'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'com.vivek_bargude.simple_wesbsite:site'.");
    }
    globalThis['com.vivek_bargude.simple_wesbsite:site'] = factory(typeof globalThis['com.vivek_bargude.simple_wesbsite:site'] === 'undefined' ? {} : globalThis['com.vivek_bargude.simple_wesbsite:site'], globalThis['kobweb-frontend-kobweb-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['kobweb-frontend-silk-foundation'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['html-internal-html-core-runtime'], globalThis['kobweb-frontend-silk-widgets'], globalThis['kobweb-frontend-silk-widgets-kobweb'], globalThis['kobweb-frontend-kobweb-silk'], globalThis['kobweb-frontend-kobweb-compose'], globalThis['html-html-core'], globalThis['kobweb-frontend-compose-html-ext'], globalThis['kotlinx-coroutines-core']);
  }
}(function (_, kotlin_com_varabyte_kobweb_kobweb_core, kotlin_kotlin, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_internal_html_core_runtime, kotlin_com_varabyte_kobweb_silk_widgets, kotlin_com_varabyte_kobweb_silk_widgets_kobweb, kotlin_com_varabyte_kobweb_kobweb_silk, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var AppGlobals_instance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.h;
  var to = kotlin_kotlin.$_$.la;
  var mapOf = kotlin_kotlin.$_$.i4;
  var Companion_instance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.i;
  var Router = kotlin_com_varabyte_kobweb_kobweb_core.$_$.d;
  var initKobweb = kotlin_com_varabyte_kobweb_kobweb_core.$_$.a;
  var set_additionalSilkInitialization = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c;
  var removePrefix = kotlin_kotlin.$_$.q8;
  var remove = kotlin_com_varabyte_kobweb_kobweb_core.$_$.f;
  var UpdateHistoryMode_REPLACE_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.g;
  var Unit_instance = kotlin_kotlin.$_$.c2;
  var ensureNotNull = kotlin_kotlin.$_$.ca;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var renderComposable = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.c;
  var rememberComposableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var THROW_CCE = kotlin_kotlin.$_$.v9;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var DeferringHost = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b;
  var initMetadataForObject = kotlin_kotlin.$_$.w6;
  var VOID = kotlin_kotlin.$_$.e;
  var removeSuffix = kotlin_kotlin.$_$.r8;
  var initSilkWidgets = kotlin_com_varabyte_kobweb_silk_widgets.$_$.f;
  var initSilkWidgetsKobweb = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.c;
  var com_varabyte_kobweb_navigation_Router$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_core.$_$.e;
  var registerStyleBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d;
  var SilkApp = kotlin_com_varabyte_kobweb_kobweb_silk.$_$.a;
  var get_button = kotlin_com_varabyte_kobweb_silk_widgets.$_$.j;
  var Companion_instance_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u3;
  var fillMaxHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e1;
  var get_SmoothColorStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.g;
  var com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c1;
  var toModifier = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h1;
  var Surface = kotlin_com_varabyte_kobweb_silk_widgets.$_$.d;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.x2;
  var Link = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.b;
  var enumEntries = kotlin_kotlin.$_$.y5;
  var Enum = kotlin_kotlin.$_$.o9;
  var protoOf = kotlin_kotlin.$_$.h7;
  var initMetadataForClass = kotlin_kotlin.$_$.r6;
  var size = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o2;
  var Image = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.a;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h2;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r;
  var Companion_instance_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c3;
  var cursor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c1;
  var Companion_instance_2 = kotlin_org_jetbrains_compose_html_html_core.$_$.m;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t;
  var onClick = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a2;
  var Box = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a;
  var fillMaxSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f1;
  var Center_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k3;
  var Start_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t3;
  var CenterHorizontally_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p3;
  var Breakpoint_SM_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b2;
  var com_varabyte_kobweb_compose_foundation_layout_Arrangement_Center$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d;
  var Column = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b;
  var margin = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t1;
  var fontSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j1;
  var Colors_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o3;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b1;
  var Companion_instance_3 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d3;
  var fontWeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k1;
  var fontFamily = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i1;
  var SpanText = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var contains = kotlin_kotlin.$_$.c8;
  var margin_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w1;
  var Companion_instance_4 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.n3;
  var textAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q2;
  var height = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n1;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a3;
  var background = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.v2;
  var opacity = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b2;
  var lineHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p1;
  var Companion_getInstance_0 = kotlin_com_varabyte_kobweb_silk_widgets.$_$.k;
  var com_varabyte_kobweb_silk_components_forms_ButtonSize$stableprop_getter = kotlin_com_varabyte_kobweb_silk_widgets.$_$.b;
  var Button = kotlin_com_varabyte_kobweb_silk_widgets.$_$.a;
  var fillMaxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g1;
  var gap = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l1;
  var Start_instance_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l3;
  var Row = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c;
  var rememberBreakpoint = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j1;
  var numColumns = kotlin_com_varabyte_kobweb_silk_widgets.$_$.e;
  var Breakpoint_MD_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a2;
  var thenIf = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g3;
  var boxShadow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w;
  var com_varabyte_kobweb_silk_style_breakpoint_ResponsiveValues$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h;
  var SimpleGrid = kotlin_com_varabyte_kobweb_silk_widgets.$_$.c;
  var Companion_instance_5 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j3;
  var objectFit = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z1;
  var Companion_instance_6 = kotlin_org_jetbrains_compose_html_html_core.$_$.n;
  var position = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j2;
  var zIndex = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b3;
  var styleModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f3;
  var Top_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m3;
  var End_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s3;
  var com_varabyte_kobweb_compose_foundation_layout_Arrangement_Top$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e;
  var com_varabyte_kobweb_compose_ui_Alignment_End$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e3;
  var margin_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u1;
  var Companion_instance_7 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k2;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j;
  var Direction_ToRight_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p2;
  var linearGradient = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b;
  var backgroundImage = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n;
  var Center_instance_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r3;
  var com_varabyte_kobweb_compose_ui_Alignment_Center$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c3;
  var KMutableProperty0 = kotlin_kotlin.$_$.q7;
  var getLocalDelegateReference = kotlin_kotlin.$_$.m6;
  var CoroutineImpl = kotlin_kotlin.$_$.w5;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var isInterface = kotlin_kotlin.$_$.z6;
  var valueOf = kotlin_com_varabyte_kobweb_silk_foundation.$_$.q1;
  var initMetadataForLambda = kotlin_kotlin.$_$.v6;
  var get_hover = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o;
  var padding_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i2;
  var Companion_instance_8 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p3;
  var get_ms = kotlin_org_jetbrains_compose_html_html_core.$_$.q2;
  var transition = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u2;
  var CssStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.u;
  var get_deg = kotlin_org_jetbrains_compose_html_html_core.$_$.t1;
  var rotate = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l2;
  var transition_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t2;
  var Companion_instance_9 = kotlin_org_jetbrains_compose_html_html_core.$_$.f;
  var Companion_instance_10 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n3;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt');
  initMetadataForClass(SocialIcon, 'SocialIcon', VOID, Enum);
  initMetadataForObject(ComposableSingletons$LeftSideKt, 'ComposableSingletons$LeftSideKt');
  initMetadataForObject(ComposableSingletons$RightSideKt, 'ComposableSingletons$RightSideKt');
  initMetadataForLambda(HomePage$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(Theme, 'Theme', VOID, Enum);
  //endregion
  function main() {
    AppGlobals_instance.w2w(mapOf(to('title', 'Simple_website')));
    Companion_instance.t2y('');
    var router = new Router();
    initKobweb(router, main$lambda);
    router.t2z(main$lambda_0);
    set_additionalSilkInitialization(main$lambda_1);
    router.v2z(remove(Companion_instance, removePrefix(window.location.href, window.origin)), UpdateHistoryMode_REPLACE_getInstance());
    var root = ensureNotNull(document.getElementById('_kobweb-root'));
    while (!(root.firstChild == null)) {
      root.removeChild(ensureNotNull(root.firstChild));
    }
    renderComposable('_kobweb-root', ComposableLambda$invoke$ref_2(composableLambdaInstance(1108811911, true, main$lambda_2(router))));
  }
  function ComposableLambda$invoke$ref(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.q2a(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda$_521244896$lambda_jdp3wp(pageCtx, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.r1i(!(($changed & 17) === 16), $changed & 1)) {
      HomePage($composer_0, 0);
    } else {
      $composer_0.w19();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_0(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.q2a(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda$1925275822$lambda(it, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.m1h(it) ? 4 : 2);
    if ($composer_0.r1i(!(($dirty & 19) === 18), $dirty & 1)) {
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(1015664045, true, ComposableSingletons$MainKt$lambda$1925275822$lambda$lambda(it), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.z16(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.y1h();
      var tmp;
      if (invalid || it_0 === Companion_getInstance().f1a_1) {
        var value = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.j1i(value);
        tmp = value;
      } else {
        tmp = it_0;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      DeferringHost(tmp0, $composer_0, 6);
    } else {
      $composer_0.w19();
    }
    return Unit_instance;
  }
  function ComposableSingletons$MainKt$lambda$1925275822$lambda$lambda($it) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.r1i(!(($changed & 3) === 2), $changed & 1)) {
        tmp = $it($composer_0, 0);
      } else {
        $composer_0.w19();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_1(p0) {
    return function (_this__u8e3s4, p0_0) {
      return p0.g1g(_this__u8e3s4, p0_0);
    };
  }
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.b3o_1 = ComposableLambda$invoke$ref(composableLambdaInstance(-521244896, false, ComposableSingletons$MainKt$lambda$_521244896$lambda_jdp3wp));
    var tmp_0 = this;
    tmp_0.c3o_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(1925275822, false, ComposableSingletons$MainKt$lambda$1925275822$lambda));
  }
  var ComposableSingletons$MainKt_instance;
  function ComposableSingletons$MainKt_getInstance() {
    if (ComposableSingletons$MainKt_instance == null)
      new ComposableSingletons$MainKt();
    return ComposableSingletons$MainKt_instance;
  }
  function main$lambda(ctx) {
    ctx.w2x_1.s2z('/', VOID, VOID, ComposableSingletons$MainKt_getInstance().b3o_1);
    return Unit_instance;
  }
  function main$lambda_0($this$addRouteInterceptor) {
    $this$addRouteInterceptor.w2z(removeSuffix(removeSuffix($this$addRouteInterceptor.j2z_1, '.html'), '.htm'));
    return Unit_instance;
  }
  function main$lambda_1(ctx) {
    initSilkWidgets(ctx);
    initSilkWidgetsKobweb(ctx);
    ctx.y33_1.d39('button', get_ButtonStyle());
    ctx.y33_1.d39('social-icon', get_SocialIconStyle());
    ctx.y33_1.d39('theme-icon', get_ThemeIconStyle());
    initStyles(ctx);
    overrideSilkTheme(ctx);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_2(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.q2a(_this__u8e3s4, p0_0, p1);
    };
  }
  function main$lambda$lambda($router) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.r1i(!(($changed & 3) === 2), $changed & 1)) {
        $router.m2z(ComposableSingletons$MainKt_getInstance().c3o_1, $composer_0, 6 | com_varabyte_kobweb_navigation_Router$stableprop_getter() << 3, 0);
        tmp = Unit_instance;
      } else {
        $composer_0.w19();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_3(p0) {
    return function (_this__u8e3s4, p0_0) {
      return p0.g1g(_this__u8e3s4, p0_0);
    };
  }
  function main$lambda_2($router) {
    return function ($this$renderComposable, $composer, $changed) {
      var $composer_0 = $composer;
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-1460047695, true, main$lambda$lambda($router), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.z16(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.y1h();
      var tmp;
      if (invalid || it === Companion_getInstance().f1a_1) {
        var value = ComposableLambda$invoke$ref_3(dispatchReceiver);
        $composer_1.j1i(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      MyApp(tmp0, $composer_0, 6);
      return Unit_instance;
    };
  }
  function mainWrapper() {
    main();
  }
  function initStyles(ctx) {
    registerStyleBase(ctx.x33_1, 'html, body', initStyles$lambda);
  }
  function MyApp(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.y1i(-180782929);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.m1h(content) ? 4 : 2);
    if ($composer_0.r1i(!(($dirty & 3) === 2), $dirty & 1)) {
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-387928624, true, MyApp$lambda(content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.z16(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.y1h();
      var tmp;
      if (invalid || it === Companion_getInstance().f1a_1) {
        var value = ComposableLambda$invoke$ref_5(dispatchReceiver);
        $composer_1.j1i(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      SilkApp(tmp0, $composer_0, 6);
    } else {
      $composer_0.w19();
    }
    var tmp0_safe_receiver = $composer_0.z1i();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d1o(MyApp$lambda_0(content, $changed));
    }
  }
  function overrideSilkTheme(context) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.apply' call
    var this_0 = context.y33_1.p34_1;
    // Inline function 'kotlin.apply' call
    var this_1 = this_0.m3b_1;
    // Inline function 'kotlin.apply' call
    var this_2 = get_button(this_1);
    this_2.k3m(Theme_BLUE_getInstance().f3o_1);
    this_2.l3m(Theme_BLUE_getInstance().f3o_1);
    this_2.o3m(Theme_BLUE_getInstance().f3o_1);
    // Inline function 'kotlin.apply' call
    var this_3 = this_0.n3b_1;
    // Inline function 'kotlin.apply' call
    var this_4 = get_button(this_3);
    this_4.k3m(Theme_LIGHT_BLUE_getInstance().f3o_1);
    this_4.l3m(Theme_LIGHT_BLUE_getInstance().f3o_1);
    this_4.o3m(Theme_LIGHT_BLUE_getInstance().f3o_1);
  }
  function initStyles$lambda() {
    return fillMaxHeight(Companion_instance_0);
  }
  function MyApp$lambda$lambda($content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.r1i(!(($changed & 3) === 2), $changed & 1)) {
        tmp = $content($composer_0, 0);
      } else {
        $composer_0.w19();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_4(p0) {
    return function (_this__u8e3s4, p0_0) {
      return p0.g1g(_this__u8e3s4, p0_0);
    };
  }
  function MyApp$lambda($content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.r1i(!(($changed & 3) === 2), $changed & 1)) {
        var tmp_0 = fillMaxHeight(toModifier(get_SmoothColorStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter()));
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-395234030, true, MyApp$lambda$lambda($content), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.z16(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.y1h();
        var tmp_1;
        if (invalid || it === Companion_getInstance().f1a_1) {
          var value = ComposableLambda$invoke$ref_4(dispatchReceiver);
          $composer_1.j1i(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Surface(tmp_0, null, null, null, tmp0, $composer_0, 24576, 14);
        tmp = Unit_instance;
      } else {
        $composer_0.w19();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_5(p0) {
    return function (_this__u8e3s4, p0_0) {
      return p0.g1g(_this__u8e3s4, p0_0);
    };
  }
  function MyApp$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      MyApp($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function IconButton(modifier, colorMode, link, icon, iconSize, onClick, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var link_0 = {_v: link};
    var iconSize_0 = {_v: iconSize};
    var onClick_0 = {_v: onClick};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.y1i(1370114816);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.m1h(modifier_0._v) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.o1h(colorMode.p2_1) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.z16(link_0._v) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.z16(icon) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | (($default & 16) === 0 && $composer_0.m1h(iconSize_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.m1h(onClick_0._v) ? 131072 : 65536);
    if ($composer_0.r1i(!(($dirty & 74899) === 74898), $dirty & 1)) {
      $composer_0.s1g();
      if (($changed & 1) === 0 || $composer_0.w1g()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_instance_0;
        }
        if (!(($default & 4) === 0)) {
          link_0._v = '';
        }
        if (!(($default & 16) === 0)) {
          iconSize_0._v = get_px(24);
          $dirty = $dirty & -57345;
        }
        if (!(($default & 32) === 0)) {
          onClick_0._v = null;
        }
      } else {
        $composer_0.w19();
        if (!(($default & 16) === 0))
          $dirty = $dirty & -57345;
      }
      $composer_0.t1g();
      var tmp = link_0._v;
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(198495182, true, IconButton$lambda(modifier_0, colorMode, onClick_0, iconSize_0, icon), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.z16(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.y1h();
      var tmp_0;
      if (invalid || it === Companion_getInstance().f1a_1) {
        var value = ComposableLambda$invoke$ref_7(dispatchReceiver);
        $composer_1.j1i(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Link(tmp, null, null, null, null, null, null, tmp0, $composer_0, 12582912 | 14 & $dirty >> 6, 126);
    } else {
      $composer_0.w19();
    }
    var tmp0_safe_receiver = $composer_0.z1i();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d1o(IconButton$lambda_0(modifier_0, colorMode, link_0, icon, iconSize_0, onClick_0, $changed, $default));
    }
  }
  var SocialIcon_Github_instance;
  var SocialIcon_GithubLight_instance;
  var SocialIcon_Gitlab_instance;
  var SocialIcon_GitlabLight_instance;
  var SocialIcon_LinkedIn_instance;
  var SocialIcon_LinkedInLight_instance;
  function values() {
    return [SocialIcon_Github_getInstance(), SocialIcon_GithubLight_getInstance(), SocialIcon_Gitlab_getInstance(), SocialIcon_GitlabLight_getInstance(), SocialIcon_LinkedIn_getInstance(), SocialIcon_LinkedInLight_getInstance()];
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var SocialIcon_entriesInitialized;
  function SocialIcon_initEntries() {
    if (SocialIcon_entriesInitialized)
      return Unit_instance;
    SocialIcon_entriesInitialized = true;
    SocialIcon_Github_instance = new SocialIcon('Github', 0, 'github.svg', 'https://github.com/vivekbargude');
    SocialIcon_GithubLight_instance = new SocialIcon('GithubLight', 1, 'github_light.svg', 'https://github.com/vivekbargude');
    SocialIcon_Gitlab_instance = new SocialIcon('Gitlab', 2, 'gitlab.svg', 'https://gitlab.com');
    SocialIcon_GitlabLight_instance = new SocialIcon('GitlabLight', 3, 'gitlab_light.svg', 'https://gitlab.com');
    SocialIcon_LinkedIn_instance = new SocialIcon('LinkedIn', 4, 'linkedin.svg', 'https://www.linkedin.com/in/vivekbargude');
    SocialIcon_LinkedInLight_instance = new SocialIcon('LinkedInLight', 5, 'linkedin_light.svg', 'https://www.linkedin.com/in/vivekbargude');
  }
  var $ENTRIES;
  function SocialIcon(name, ordinal, icon, link) {
    Enum.call(this, name, ordinal);
    this.i3o_1 = icon;
    this.j3o_1 = link;
  }
  function IconButton$lambda$lambda($onClick) {
    return function (it) {
      var tmp0_safe_receiver = $onClick._v;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver();
      return Unit_instance;
    };
  }
  function IconButton$lambda$lambda_0($iconSize, $icon) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.r1i(!(($changed & 17) === 16), $changed & 1)) {
        var tmp0_modifier = size(Companion_instance_0, $iconSize._v);
        Image($icon, tmp0_modifier, null, null, null, null, null, $composer_0, 0, 124);
        tmp = Unit_instance;
      } else {
        $composer_0.w19();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_6(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.q2a(_this__u8e3s4, p0_0, p1);
    };
  }
  function IconButton$lambda($modifier, $colorMode, $onClick, $iconSize, $icon) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.r1i(!(($changed & 3) === 2), $changed & 1)) {
        var tmp_0 = cursor(borderRadius(padding($modifier._v, get_px(8)), get_px(8)), Companion_instance_1.e2q());
        var tmp_1 = get_px(1);
        // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
        // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_2 = border(tmp_0, tmp_1, 'solid', $colorMode.z39() ? Theme_SOCIAL_ICON_BACKGROUND_LIGHT_getInstance().f3o_1 : Theme_SOCIAL_ICON_BACKGROUND_DARK_getInstance().f3o_1);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.z16($onClick._v);
        // Inline function 'kotlin.let' call
        var it = $composer_0.y1h();
        var tmp_3;
        if (invalid || it === Companion_getInstance().f1a_1) {
          var value = IconButton$lambda$lambda($onClick);
          $composer_0.j1i(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmp$ret$7 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        var tmp_5 = onClick(tmp_2, tmp$ret$7);
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-480119852, true, IconButton$lambda$lambda_0($iconSize, $icon), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_1.z16(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it_0 = $composer_1.y1h();
        var tmp_6;
        if (invalid_0 || it_0 === Companion_getInstance().f1a_1) {
          var value_0 = ComposableLambda$invoke$ref_6(dispatchReceiver);
          $composer_1.j1i(value_0);
          tmp_6 = value_0;
        } else {
          tmp_6 = it_0;
        }
        var tmp_7 = tmp_6;
        var tmp0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Box(tmp_5, null, null, tmp0, $composer_0, 3072, 6);
        tmp = Unit_instance;
      } else {
        $composer_0.w19();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_7(p0) {
    return function (_this__u8e3s4, p0_0) {
      return p0.g1g(_this__u8e3s4, p0_0);
    };
  }
  function IconButton$lambda_0($modifier, $colorMode, $link, $icon, $iconSize, $onClick, $$changed, $$default) {
    return function ($composer, $force) {
      IconButton($modifier._v, $colorMode, $link._v, $icon, $iconSize._v, $onClick._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function SocialIcon_Github_getInstance() {
    SocialIcon_initEntries();
    return SocialIcon_Github_instance;
  }
  function SocialIcon_GithubLight_getInstance() {
    SocialIcon_initEntries();
    return SocialIcon_GithubLight_instance;
  }
  function SocialIcon_Gitlab_getInstance() {
    SocialIcon_initEntries();
    return SocialIcon_Gitlab_instance;
  }
  function SocialIcon_GitlabLight_getInstance() {
    SocialIcon_initEntries();
    return SocialIcon_GitlabLight_instance;
  }
  function SocialIcon_LinkedIn_getInstance() {
    SocialIcon_initEntries();
    return SocialIcon_LinkedIn_instance;
  }
  function SocialIcon_LinkedInLight_getInstance() {
    SocialIcon_initEntries();
    return SocialIcon_LinkedInLight_instance;
  }
  function LeftSide(colorMode, breakpoint, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.y1i(-48279937);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.o1h(colorMode.p2_1) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.o1h(breakpoint.p2_1) ? 32 : 16);
    if ($composer_0.r1i(!(($dirty & 19) === 18), $dirty & 1)) {
      var tmp = padding(fillMaxSize(Companion_instance_0), get_px(50));
      var tmp_0 = Center_instance;
      var tmp_1 = breakpoint.q2(Breakpoint_SM_getInstance()) <= 0 ? CenterHorizontally_instance : Start_instance;
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-1331564312, true, LeftSide$lambda(colorMode, breakpoint), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.z16(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.y1h();
      var tmp_2;
      if (invalid || it === Companion_getInstance().f1a_1) {
        var value = ComposableLambda$invoke$ref_11(dispatchReceiver);
        $composer_1.j1i(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Column(tmp, tmp_0, tmp_1, null, tmp0, $composer_0, 24576 | com_varabyte_kobweb_compose_foundation_layout_Arrangement_Center$stableprop_getter() << 3, 8);
    } else {
      $composer_0.w19();
    }
    var tmp0_safe_receiver = $composer_0.z1i();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d1o(LeftSide$lambda_0(colorMode, breakpoint, $changed));
    }
  }
  function ComposableLambda$invoke$ref_8(p0) {
    return function (_this__u8e3s4, p0_0) {
      return p0.g1g(_this__u8e3s4, p0_0);
    };
  }
  function ComposableSingletons$LeftSideKt$lambda$_487716438$lambda_8l3amx($composer, $changed) {
    var $composer_0 = $composer;
    if (!$composer_0.r1i(!(($changed & 3) === 2), $changed & 1)) {
      $composer_0.w19();
    }
    return Unit_instance;
  }
  function ComposableSingletons$LeftSideKt() {
    ComposableSingletons$LeftSideKt_instance = this;
    var tmp = this;
    tmp.k3o_1 = ComposableLambda$invoke$ref_8(composableLambdaInstance(-487716438, false, ComposableSingletons$LeftSideKt$lambda$_487716438$lambda_8l3amx));
  }
  var ComposableSingletons$LeftSideKt_instance;
  function ComposableSingletons$LeftSideKt_getInstance() {
    if (ComposableSingletons$LeftSideKt_instance == null)
      new ComposableSingletons$LeftSideKt();
    return ComposableSingletons$LeftSideKt_instance;
  }
  function LeftSide$lambda$lambda(it) {
    window.location.href = 'mailto:vivekbargude1206@gmail.com';
    return Unit_instance;
  }
  function LeftSide$lambda$lambda_0($colorMode) {
    return function ($this$Button, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.r1i(!(($changed & 17) === 16), $changed & 1)) {
        var tmp0_modifier = margin(Companion_instance_0, VOID, get_px(12));
        var tmp1_src = $colorMode.z39() ? 'mail.svg' : 'mail_light.svg';
        Image(tmp1_src, tmp0_modifier, null, null, null, null, null, $composer_0, 0, 124);
        var tmp2_modifier = fontFamily(fontWeight(color(fontSize(Companion_instance_0, get_px(14)), $colorMode.z39() ? Colors_instance.l32() : Theme_GRADIENT_ONE_DARK_getInstance().f3o_1), Companion_instance_3.j2q()), ['RobotoRegular']);
        var tmp3_text = 'Get in touch';
        SpanText(tmp3_text, tmp2_modifier, null, null, $composer_0, 6, 12);
        tmp = Unit_instance;
      } else {
        $composer_0.w19();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_9(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.q2a(_this__u8e3s4, p0_0, p1);
    };
  }
  function LeftSide$lambda$lambda_1($colorMode) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.r1i(!(($changed & 17) === 16), $changed & 1)) {
        // Inline function 'kotlin.collections.filter' call
        var tmp0 = get_entries();
        // Inline function 'kotlin.collections.filterTo' call
        var destination = ArrayList_init_$Create$();
        var _iterator__ex2g4s = tmp0.g();
        while (_iterator__ex2g4s.h()) {
          var element = _iterator__ex2g4s.i();
          if ($colorMode.z39() ? !contains(element.o2_1, 'Light') : contains(element.o2_1, 'Light')) {
            destination.e(element);
          }
        }
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s_0 = destination.g();
        while (_iterator__ex2g4s_0.h()) {
          var element_0 = _iterator__ex2g4s_0.i();
          var tmp0_modifier = toModifier(get_SocialIconStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter());
          var tmp1_icon = element_0.i3o_1;
          var tmp2_link = element_0.j3o_1;
          IconButton(tmp0_modifier, $colorMode, tmp2_link, tmp1_icon, null, null, $composer_0, 0, 48);
        }
        tmp = Unit_instance;
      } else {
        $composer_0.w19();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_10(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.q2a(_this__u8e3s4, p0_0, p1);
    };
  }
  function LeftSide$lambda($colorMode, $breakpoint) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 6) === 0) {
        $dirty = $dirty | ($composer_0.z16($this$Column) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if ($composer_0.r1i(!(($dirty & 19) === 18), $dirty & 1)) {
        var tmp_1 = textAlign(fontWeight(fontSize(color(fontFamily(margin_0(Companion_instance_0, VOID, VOID, get_px(12)), ['RobotoCondensedBold']), $colorMode.z39() ? Colors_instance.s31() : Colors_instance.l32()), get_px(50)), Companion_instance_3.j2q()), $breakpoint.q2(Breakpoint_SM_getInstance()) <= 0 ? Companion_instance_4.r2p() : Companion_instance_4.s2p());
        SpanText('Vivek Bargude', tmp_1, null, null, $composer_0, 6, 12);
        var tmp_2 = fontSize(color(fontFamily(margin_0(Companion_instance_0, VOID, VOID, get_px(24)), ['RobotoRegular']), $colorMode.z39() ? Colors_instance.s31() : Colors_instance.l32()), get_px(18));
        SpanText('Android Developer', tmp_2, null, null, $composer_0, 6, 12);
        var tmp_3 = $this$Column.d30(background(margin_0(width(height(Companion_instance_0, get_px(4)), get_px(40)), VOID, VOID, get_px(24)), $colorMode.z39() ? Theme_BLUE_getInstance().f3o_1 : Theme_LIGHT_BLUE_getInstance().f3o_1, []), $breakpoint.q2(Breakpoint_SM_getInstance()) <= 0 ? CenterHorizontally_instance : Start_instance);
        Surface(tmp_3, null, null, null, ComposableSingletons$LeftSideKt_getInstance().k3o_1, $composer_0, 24576, 14);
        var tmp0_modifier = textAlign(margin_0(lineHeight(opacity(color(fontSize(fontFamily(Companion_instance_0, ['RobotoRegular']), get_px(14)), $colorMode.z39() ? Colors_instance.s31() : Colors_instance.l32()), get_percent(50)), 2), VOID, VOID, get_px(36)), $breakpoint.q2(Breakpoint_SM_getInstance()) <= 0 ? Companion_instance_4.r2p() : Companion_instance_4.s2p());
        var tmp1_text = 'Passionate Android developer focused on crafting seamless user experiences and building innovative mobile solutions.Driven by a passion for creating seamless user experiences and acommitment to continuous learning in the ever-evolving tech landscape.';
        SpanText(tmp1_text, tmp0_modifier, null, null, $composer_0, 6, 12);
        var tmp2_modifier = margin_0(toModifier(get_ButtonStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter()), VOID, VOID, get_px(50));
        var tmp3_size = Companion_getInstance_0().j3f_1;
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it = $composer_0.y1h();
        var tmp_4;
        if (false || it === Companion_getInstance().f1a_1) {
          var value = LeftSide$lambda$lambda;
          $composer_0.j1i(value);
          tmp_4 = value;
        } else {
          tmp_4 = it;
        }
        var tmp_5 = tmp_4;
        var tmp_6 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-1828150536, true, LeftSide$lambda$lambda_0($colorMode), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.z16(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it_0 = $composer_1.y1h();
        var tmp_7;
        if (invalid || it_0 === Companion_getInstance().f1a_1) {
          var value_0 = ComposableLambda$invoke$ref_9(dispatchReceiver);
          $composer_1.j1i(value_0);
          tmp_7 = value_0;
        } else {
          tmp_7 = it_0;
        }
        var tmp_8 = tmp_7;
        var tmp0 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Button(tmp_6, tmp2_modifier, null, null, false, tmp3_size, null, null, null, tmp0, $composer_0, 805306374 | com_varabyte_kobweb_silk_components_forms_ButtonSize$stableprop_getter() << 15, 476);
        var tmp_9 = gap(fillMaxWidth(Companion_instance_0), get_px(12));
        var tmp_10 = $breakpoint.q2(Breakpoint_SM_getInstance()) <= 0 ? Center_instance : Start_instance_0;
        // Inline function 'kotlin.run' call
        var dispatchReceiver_0 = rememberComposableLambda(-336763579, true, LeftSide$lambda$lambda_1($colorMode), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.z16(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        var it_1 = $composer_2.y1h();
        var tmp_11;
        if (invalid_0 || it_1 === Companion_getInstance().f1a_1) {
          var value_1 = ComposableLambda$invoke$ref_10(dispatchReceiver_0);
          $composer_2.j1i(value_1);
          tmp_11 = value_1;
        } else {
          tmp_11 = it_1;
        }
        var tmp_12 = tmp_11;
        var tmp0_0 = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
        sourceInformationMarkerEnd($composer_2);
        Row(tmp_9, tmp_10, null, null, tmp0_0, $composer_0, 24576, 12);
        tmp_0 = Unit_instance;
      } else {
        $composer_0.w19();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_11(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.q2a(_this__u8e3s4, p0_0, p1);
    };
  }
  function LeftSide$lambda_0($colorMode, $breakpoint, $$changed) {
    return function ($composer, $force) {
      LeftSide($colorMode, $breakpoint, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ProfileCard(colorMode, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.y1i(466771790);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.o1h(colorMode.p2_1) ? 4 : 2);
    if ($composer_0.r1i(!(($dirty & 3) === 2), $dirty & 1)) {
      var breakpoint = rememberBreakpoint($composer_0, 0);
      var tmp = numColumns(1, VOID, 2);
      var tmp0_$receiver = thenIf(fillMaxWidth(Companion_instance_0, breakpoint.q2(Breakpoint_MD_getInstance()) <= 0 ? get_percent(100) : get_px(1000)), breakpoint.q2(Breakpoint_MD_getInstance()) > 0, height(Companion_instance_0, get_px(600)));
      var tmp1_color = Colors_instance.s31().c31(VOID, VOID, VOID, 10);
      var tmp2_blurRadius = get_px(50);
      var tmp3_spreadRadius = get_px(50);
      var tmp_0 = background(borderRadius(padding(boxShadow(tmp0_$receiver, VOID, VOID, tmp2_blurRadius, tmp3_spreadRadius, tmp1_color), get_px(12)), get_px(8)), colorMode.z39() ? Colors_instance.l32() : Theme_DARK_BLUE_getInstance().f3o_1, []);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-433341577, true, ProfileCard$lambda(colorMode, breakpoint), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.z16(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.y1h();
      var tmp_1;
      if (invalid || it === Companion_getInstance().f1a_1) {
        var value = ComposableLambda$invoke$ref_12(dispatchReceiver);
        $composer_1.j1i(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      SimpleGrid(tmp, tmp_0, null, null, tmp0, $composer_0, 24576 | com_varabyte_kobweb_silk_style_breakpoint_ResponsiveValues$stableprop_getter(), 12);
    } else {
      $composer_0.w19();
    }
    var tmp0_safe_receiver = $composer_0.z1i();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d1o(ProfileCard$lambda_0(colorMode, $changed));
    }
  }
  function ProfileCard$lambda($colorMode, $breakpoint) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.r1i(!(($changed & 3) === 2), $changed & 1)) {
        LeftSide($colorMode, $breakpoint, $composer_0, 0);
        RightSide($breakpoint, $composer_0, 0);
        tmp = Unit_instance;
      } else {
        $composer_0.w19();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_12(p0) {
    return function (_this__u8e3s4, p0_0) {
      return p0.g1g(_this__u8e3s4, p0_0);
    };
  }
  function ProfileCard$lambda_0($colorMode, $$changed) {
    return function ($composer, $force) {
      ProfileCard($colorMode, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function RightSide(breakpoint, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.y1i(425638847);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.o1h(breakpoint.p2_1) ? 4 : 2);
    if ($composer_0.r1i(!(($dirty & 3) === 2), $dirty & 1)) {
      var tmp = thenIf(fillMaxWidth(Companion_instance_0), breakpoint.q2(Breakpoint_MD_getInstance()) > 0, height(Companion_instance_0, get_px(576)));
      Box(tmp, null, null, ComposableSingletons$RightSideKt_getInstance().l3o_1, $composer_0, 3072, 6);
    } else {
      $composer_0.w19();
    }
    var tmp0_safe_receiver = $composer_0.z1i();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d1o(RightSide$lambda(breakpoint, $changed));
    }
  }
  function ComposableLambda$invoke$ref_13(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.q2a(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$RightSideKt$lambda$_479155207$lambda_vzzfjo($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.r1i(!(($changed & 17) === 16), $changed & 1)) {
      var tmp0_modifier = objectFit(fillMaxSize(Companion_instance_0), Companion_instance_5.n2r());
      var tmp1_src = 'photo.png';
      Image(tmp1_src, tmp0_modifier, null, null, null, null, null, $composer_0, 6, 124);
    } else {
      $composer_0.w19();
    }
    return Unit_instance;
  }
  function ComposableSingletons$RightSideKt() {
    ComposableSingletons$RightSideKt_instance = this;
    var tmp = this;
    tmp.l3o_1 = ComposableLambda$invoke$ref_13(composableLambdaInstance(-479155207, false, ComposableSingletons$RightSideKt$lambda$_479155207$lambda_vzzfjo));
  }
  var ComposableSingletons$RightSideKt_instance;
  function ComposableSingletons$RightSideKt_getInstance() {
    if (ComposableSingletons$RightSideKt_instance == null)
      new ComposableSingletons$RightSideKt();
    return ComposableSingletons$RightSideKt_instance;
  }
  function RightSide$lambda($breakpoint, $$changed) {
    return function ($composer, $force) {
      RightSide($breakpoint, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ThemeSwitchButton(colorMode, onClick, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.y1i(-978707366);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.o1h(colorMode.p2_1) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.m1h(onClick) ? 32 : 16);
    if ($composer_0.r1i(!(($dirty & 19) === 18), $dirty & 1)) {
      var breakpoint = rememberBreakpoint($composer_0, 0);
      var tmp = fillMaxSize(Companion_instance_0);
      // Inline function 'org.jetbrains.compose.web.css.Companion.Fixed' call
      // Inline function 'org.jetbrains.compose.web.css.Position' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = zIndex(position(tmp, 'fixed'), 1);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.y1h();
      var tmp_1;
      if (false || it === Companion_getInstance().f1a_1) {
        var value = ThemeSwitchButton$lambda;
        this_0.j1i(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp$ret$7 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      var tmp_3 = styleModifier(tmp_0, tmp$ret$7);
      var tmp_4 = Top_instance;
      var tmp_5 = End_instance;
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(928348433, true, ThemeSwitchButton$lambda_0(breakpoint, colorMode, onClick), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.z16(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.y1h();
      var tmp_6;
      if (invalid || it_0 === Companion_getInstance().f1a_1) {
        var value_0 = ComposableLambda$invoke$ref_14(dispatchReceiver);
        $composer_1.j1i(value_0);
        tmp_6 = value_0;
      } else {
        tmp_6 = it_0;
      }
      var tmp_7 = tmp_6;
      var tmp0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Column(tmp_3, tmp_4, tmp_5, null, tmp0, $composer_0, 24576 | com_varabyte_kobweb_compose_foundation_layout_Arrangement_Top$stableprop_getter() << 3 | com_varabyte_kobweb_compose_ui_Alignment_End$stableprop_getter() << 6, 8);
    } else {
      $composer_0.w19();
    }
    var tmp0_safe_receiver = $composer_0.z1i();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d1o(ThemeSwitchButton$lambda_1(colorMode, onClick, $changed));
    }
  }
  function ThemeSwitchButton$lambda($this$styleModifier) {
    $this$styleModifier.t2l('pointer-events', 'none');
    return Unit_instance;
  }
  function ThemeSwitchButton$lambda$lambda($this$styleModifier) {
    $this$styleModifier.t2l('pointer-events', 'auto');
    return Unit_instance;
  }
  function ThemeSwitchButton$lambda_0($breakpoint, $colorMode, $onClick) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.r1i(!(($changed & 17) === 16), $changed & 1)) {
        var tmp_0 = margin_1(toModifier(get_ThemeIconStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter()), $breakpoint.q2(Breakpoint_SM_getInstance()) > 0 ? get_px(24) : get_px(16));
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it = $composer_0.y1h();
        var tmp_1;
        if (false || it === Companion_getInstance().f1a_1) {
          var value = ThemeSwitchButton$lambda$lambda;
          $composer_0.j1i(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp$ret$3 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        var tmp_3 = styleModifier(tmp_0, tmp$ret$3);
        IconButton(tmp_3, $colorMode, null, $colorMode.z39() ? 'sun.svg' : 'moon.svg', $breakpoint.q2(Breakpoint_SM_getInstance()) > 0 ? get_px(32) : get_px(24), $onClick, $composer_0, 0, 4);
        tmp = Unit_instance;
      } else {
        $composer_0.w19();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_14(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.q2a(_this__u8e3s4, p0_0, p1);
    };
  }
  function ThemeSwitchButton$lambda_1($colorMode, $onClick, $$changed) {
    return function ($composer, $force) {
      ThemeSwitchButton($colorMode, $onClick, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function HomePage($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.y1i(263352688);
    if ($composer_0.r1i(!($changed === 0), $changed & 1)) {
      var colorMode$delegate = Companion_instance_7.y39($composer_0, 6);
      var tmp = HomePage$lambda(colorMode$delegate);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.z16(colorMode$delegate);
      // Inline function 'kotlin.let' call
      var it = tmp0.y1h();
      var tmp_0;
      if (invalid || it === Companion_getInstance().f1a_1) {
        var value = HomePage$slambda_0(colorMode$delegate, null);
        tmp0.j1i(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp$ret$3 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      LaunchedEffect(tmp, tmp$ret$3, $composer_0, 0);
      var tmp_2 = HomePage$lambda(colorMode$delegate);
      var tmp0_0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_0.z16(colorMode$delegate);
      // Inline function 'kotlin.let' call
      var it_0 = tmp0_0.y1h();
      var tmp_3;
      if (invalid_0 || it_0 === Companion_getInstance().f1a_1) {
        var value_0 = HomePage$lambda_1(colorMode$delegate);
        tmp0_0.j1i(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp$ret$7 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      ThemeSwitchButton(tmp_2, tmp$ret$7, $composer_0, 0);
      var tmp_5 = fillMaxSize(Companion_instance_0);
      var tmp0_dir = Direction_ToRight_getInstance();
      var tmp1_from = HomePage$lambda(colorMode$delegate).z39() ? Theme_GRADIENT_ONE_getInstance().f3o_1 : Theme_GRADIENT_ONE_DARK_getInstance().f3o_1;
      var tmp2_to = HomePage$lambda(colorMode$delegate).z39() ? Theme_GRADIENT_TWO_getInstance().f3o_1 : Theme_GRADIENT_TWO_DARK_getInstance().f3o_1;
      var tmp_6 = backgroundImage(tmp_5, linearGradient(tmp1_from, tmp2_to, tmp0_dir));
      var tmp_7 = Center_instance_0;
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(1957642922, true, HomePage$lambda_2(colorMode$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = $composer_1.z16(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_1 = $composer_1.y1h();
      var tmp_8;
      if (invalid_1 || it_1 === Companion_getInstance().f1a_1) {
        var value_1 = ComposableLambda$invoke$ref_15(dispatchReceiver);
        $composer_1.j1i(value_1);
        tmp_8 = value_1;
      } else {
        tmp_8 = it_1;
      }
      var tmp_9 = tmp_8;
      var tmp0_1 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Box(tmp_6, tmp_7, null, tmp0_1, $composer_0, 3072 | com_varabyte_kobweb_compose_ui_Alignment_Center$stableprop_getter() << 3, 4);
    } else {
      $composer_0.w19();
    }
    var tmp0_safe_receiver = $composer_0.z1i();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d1o(HomePage$lambda_3($changed));
    }
  }
  function HomePage$lambda($colorMode$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('colorMode', KMutableProperty0, true);
    return $colorMode$delegate.e2();
  }
  function HomePage$lambda_0($colorMode$delegate, _set____db54di) {
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('colorMode', KMutableProperty0, true);
    $colorMode$delegate.ss(_set____db54di);
    return Unit_instance;
  }
  function HomePage$slambda($colorMode$delegate, resultContinuation) {
    this.u3o_1 = $colorMode$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HomePage$slambda).w1p = function ($this$LaunchedEffect, $completion) {
    var tmp = this.x1p($this$LaunchedEffect, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(HomePage$slambda).p9 = function (p1, $completion) {
    return this.w1p((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(HomePage$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        if (tmp === 0) {
          this.w8_1 = 1;
          var tmp0_elvis_lhs = localStorage.getItem('theme');
          var savedTheme = tmp0_elvis_lhs == null ? 'LIGHT' : tmp0_elvis_lhs;
          HomePage$lambda_0(this.u3o_1, valueOf(savedTheme));
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.y8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(HomePage$slambda).x1p = function ($this$LaunchedEffect, completion) {
    var i = new HomePage$slambda(this.u3o_1, completion);
    i.v3o_1 = $this$LaunchedEffect;
    return i;
  };
  function HomePage$slambda_0($colorMode$delegate, resultContinuation) {
    var i = new HomePage$slambda($colorMode$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.w1p($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function HomePage$lambda_1($colorMode$delegate) {
    return function () {
      HomePage$lambda_0($colorMode$delegate, HomePage$lambda($colorMode$delegate).i33());
      localStorage.setItem('theme', HomePage$lambda($colorMode$delegate).o2_1);
      return Unit_instance;
    };
  }
  function HomePage$lambda_2($colorMode$delegate) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.r1i(!(($changed & 17) === 16), $changed & 1)) {
        ProfileCard(HomePage$lambda($colorMode$delegate), $composer_0, 0);
        tmp = Unit_instance;
      } else {
        $composer_0.w19();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_15(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.q2a(_this__u8e3s4, p0_0, p1);
    };
  }
  function HomePage$lambda_3($$changed) {
    return function ($composer, $force) {
      HomePage($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function get_ButtonStyle() {
    _init_properties_ButtonStyle_kt__gkuc2b();
    return ButtonStyle;
  }
  var ButtonStyle;
  function ButtonStyle$lambda($this$CssStyle) {
    _init_properties_ButtonStyle_kt__gkuc2b();
    $this$CssStyle.n35(ButtonStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle);
    $this$CssStyle.p37(tmp, ButtonStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function ButtonStyle$lambda$lambda() {
    _init_properties_ButtonStyle_kt__gkuc2b();
    return transition(padding_0(Companion_instance_0, VOID, get_px(12)), [Companion_instance_8.x2s(get_ms(300))]);
  }
  function ButtonStyle$lambda$lambda_0() {
    _init_properties_ButtonStyle_kt__gkuc2b();
    return padding_0(Companion_instance_0, VOID, get_px(20));
  }
  var properties_initialized_ButtonStyle_kt_79ocgh;
  function _init_properties_ButtonStyle_kt__gkuc2b() {
    if (!properties_initialized_ButtonStyle_kt_79ocgh) {
      properties_initialized_ButtonStyle_kt_79ocgh = true;
      ButtonStyle = CssStyle(VOID, ButtonStyle$lambda);
    }
  }
  function get_SocialIconStyle() {
    _init_properties_IconStyle_kt__l78sai();
    return SocialIconStyle;
  }
  var SocialIconStyle;
  function get_ThemeIconStyle() {
    _init_properties_IconStyle_kt__l78sai();
    return ThemeIconStyle;
  }
  var ThemeIconStyle;
  function SocialIconStyle$lambda($this$CssStyle) {
    _init_properties_IconStyle_kt__l78sai();
    $this$CssStyle.n35(SocialIconStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle);
    $this$CssStyle.p37(tmp, SocialIconStyle$lambda$lambda_0($this$CssStyle));
    return Unit_instance;
  }
  function SocialIconStyle$lambda$lambda() {
    _init_properties_IconStyle_kt__l78sai();
    var tmp = background(rotate(Companion_instance_0, get_deg(0)), Colors_instance.q31(), []);
    return transition_0(tmp, SocialIconStyle$lambda$lambda$lambda);
  }
  function SocialIconStyle$lambda$lambda$lambda($this$transition) {
    _init_properties_IconStyle_kt__l78sai();
    $this$transition.c33(['rotate', 'background-color']);
    $this$transition.d33([get_ms(300)]);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Ease' call
    // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    $this$transition.e33(['ease']);
    return Unit_instance;
  }
  function SocialIconStyle$lambda$lambda_0($this_CssStyle) {
    return function () {
      return background(rotate(Companion_instance_0, get_deg(10)), $this_CssStyle.v36_1.z39() ? Theme_SOCIAL_ICON_BACKGROUND_LIGHT_getInstance().f3o_1 : Theme_SOCIAL_ICON_BACKGROUND_DARK_getInstance().f3o_1, []);
    };
  }
  function ThemeIconStyle$lambda($this$CssStyle) {
    _init_properties_IconStyle_kt__l78sai();
    $this$CssStyle.n35(ThemeIconStyle$lambda$lambda($this$CssStyle));
    var tmp = get_hover($this$CssStyle);
    $this$CssStyle.p37(tmp, ThemeIconStyle$lambda$lambda_0($this$CssStyle));
    return Unit_instance;
  }
  function ThemeIconStyle$lambda$lambda$lambda($this$transition) {
    _init_properties_IconStyle_kt__l78sai();
    $this$transition.c33(['background-color']);
    $this$transition.d33([get_ms(300)]);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Ease' call
    // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    $this$transition.e33(['ease']);
    return Unit_instance;
  }
  function ThemeIconStyle$lambda$lambda($this_CssStyle) {
    return function () {
      var tmp = background(Companion_instance_0, $this_CssStyle.v36_1.z39() ? Colors_instance.l32() : Theme_DARK_BLUE_getInstance().f3o_1, []);
      return transition_0(tmp, ThemeIconStyle$lambda$lambda$lambda);
    };
  }
  function ThemeIconStyle$lambda$lambda_0($this_CssStyle) {
    return function () {
      return background(Companion_instance_0, $this_CssStyle.v36_1.z39() ? Theme_SOCIAL_ICON_BACKGROUND_LIGHT_getInstance().f3o_1 : Theme_SOCIAL_ICON_BACKGROUND_DARK_getInstance().f3o_1, []);
    };
  }
  var properties_initialized_IconStyle_kt_mmvpug;
  function _init_properties_IconStyle_kt__l78sai() {
    if (!properties_initialized_IconStyle_kt_mmvpug) {
      properties_initialized_IconStyle_kt_mmvpug = true;
      SocialIconStyle = CssStyle(VOID, SocialIconStyle$lambda);
      ThemeIconStyle = CssStyle(VOID, ThemeIconStyle$lambda);
    }
  }
  var com_vivek_bargude_simple_wesbsite_utils_Res_Icon$stable;
  var com_vivek_bargude_simple_wesbsite_utils_Res_Image$stable;
  var com_vivek_bargude_simple_wesbsite_utils_Res_String$stable;
  var com_vivek_bargude_simple_wesbsite_utils_Res_Dimens$stable;
  var com_vivek_bargude_simple_wesbsite_utils_Res$stable;
  var Theme_BLUE_instance;
  var Theme_LIGHT_BLUE_instance;
  var Theme_DARK_BLUE_instance;
  var Theme_SOCIAL_ICON_BACKGROUND_LIGHT_instance;
  var Theme_SOCIAL_ICON_BACKGROUND_DARK_instance;
  var Theme_GRADIENT_ONE_instance;
  var Theme_GRADIENT_ONE_DARK_instance;
  var Theme_GRADIENT_TWO_instance;
  var Theme_GRADIENT_TWO_DARK_instance;
  var Theme_entriesInitialized;
  function Theme_initEntries() {
    if (Theme_entriesInitialized)
      return Unit_instance;
    Theme_entriesInitialized = true;
    Theme_BLUE_instance = new Theme('BLUE', 0, Companion_instance_10.p31(33, 150, 243));
    Theme_LIGHT_BLUE_instance = new Theme('LIGHT_BLUE', 1, Companion_instance_10.p31(168, 236, 255));
    Theme_DARK_BLUE_instance = new Theme('DARK_BLUE', 2, Companion_instance_10.p31(34, 63, 94));
    Theme_SOCIAL_ICON_BACKGROUND_LIGHT_instance = new Theme('SOCIAL_ICON_BACKGROUND_LIGHT', 3, Companion_instance_10.p31(230, 230, 230));
    Theme_SOCIAL_ICON_BACKGROUND_DARK_instance = new Theme('SOCIAL_ICON_BACKGROUND_DARK', 4, Companion_instance_10.p31(48, 82, 118));
    Theme_GRADIENT_ONE_instance = new Theme('GRADIENT_ONE', 5, Companion_instance_10.p31(161, 196, 253));
    Theme_GRADIENT_ONE_DARK_instance = new Theme('GRADIENT_ONE_DARK', 6, Companion_instance_10.p31(19, 38, 58));
    Theme_GRADIENT_TWO_instance = new Theme('GRADIENT_TWO', 7, Companion_instance_10.p31(194, 233, 251));
    Theme_GRADIENT_TWO_DARK_instance = new Theme('GRADIENT_TWO_DARK', 8, Companion_instance_10.p31(20, 46, 73));
  }
  function Theme(name, ordinal, color) {
    Enum.call(this, name, ordinal);
    this.f3o_1 = color;
  }
  function Theme_BLUE_getInstance() {
    Theme_initEntries();
    return Theme_BLUE_instance;
  }
  function Theme_LIGHT_BLUE_getInstance() {
    Theme_initEntries();
    return Theme_LIGHT_BLUE_instance;
  }
  function Theme_DARK_BLUE_getInstance() {
    Theme_initEntries();
    return Theme_DARK_BLUE_instance;
  }
  function Theme_SOCIAL_ICON_BACKGROUND_LIGHT_getInstance() {
    Theme_initEntries();
    return Theme_SOCIAL_ICON_BACKGROUND_LIGHT_instance;
  }
  function Theme_SOCIAL_ICON_BACKGROUND_DARK_getInstance() {
    Theme_initEntries();
    return Theme_SOCIAL_ICON_BACKGROUND_DARK_instance;
  }
  function Theme_GRADIENT_ONE_getInstance() {
    Theme_initEntries();
    return Theme_GRADIENT_ONE_instance;
  }
  function Theme_GRADIENT_ONE_DARK_getInstance() {
    Theme_initEntries();
    return Theme_GRADIENT_ONE_DARK_instance;
  }
  function Theme_GRADIENT_TWO_getInstance() {
    Theme_initEntries();
    return Theme_GRADIENT_TWO_instance;
  }
  function Theme_GRADIENT_TWO_DARK_getInstance() {
    Theme_initEntries();
    return Theme_GRADIENT_TWO_DARK_instance;
  }
  //region block: init
  com_vivek_bargude_simple_wesbsite_utils_Res_Icon$stable = 0;
  com_vivek_bargude_simple_wesbsite_utils_Res_Image$stable = 0;
  com_vivek_bargude_simple_wesbsite_utils_Res_String$stable = 0;
  com_vivek_bargude_simple_wesbsite_utils_Res_Dimens$stable = 0;
  com_vivek_bargude_simple_wesbsite_utils_Res$stable = 0;
  //endregion
  mainWrapper();
  return _;
}));

//# sourceMappingURL=simple_wesbsite.js.map
