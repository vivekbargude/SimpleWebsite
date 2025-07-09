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
  var AppGlobals_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.h;
  var to = kotlin_kotlin.$_$.wg;
  var mapOf = kotlin_kotlin.$_$.a8;
  var Companion_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.i;
  var Router = kotlin_com_varabyte_kobweb_kobweb_core.$_$.d;
  var initKobweb = kotlin_com_varabyte_kobweb_kobweb_core.$_$.a;
  var set_additionalSilkInitialization = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c;
  var removePrefix = kotlin_kotlin.$_$.ee;
  var remove = kotlin_com_varabyte_kobweb_kobweb_core.$_$.f;
  var UpdateHistoryMode_REPLACE_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.g;
  var ensureNotNull = kotlin_kotlin.$_$.lg;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var renderComposable = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.e;
  var Unit_getInstance = kotlin_kotlin.$_$.m4;
  var rememberComposableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k1;
  var THROW_CCE = kotlin_kotlin.$_$.tf;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var DeferringHost = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b;
  var protoOf = kotlin_kotlin.$_$.lc;
  var initMetadataForObject = kotlin_kotlin.$_$.nb;
  var VOID = kotlin_kotlin.$_$.f;
  var removeSuffix = kotlin_kotlin.$_$.fe;
  var initSilkWidgets = kotlin_com_varabyte_kobweb_silk_widgets.$_$.f;
  var initSilkWidgetsKobweb = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.c;
  var com_varabyte_kobweb_navigation_Router$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_core.$_$.e;
  var registerStyleBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d;
  var SilkApp = kotlin_com_varabyte_kobweb_kobweb_silk.$_$.a;
  var get_button = kotlin_com_varabyte_kobweb_silk_widgets.$_$.j;
  var Companion_getInstance_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u3;
  var fillMaxHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e1;
  var get_SmoothColorStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.g;
  var com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d1;
  var toModifier = kotlin_com_varabyte_kobweb_silk_foundation.$_$.i1;
  var Surface = kotlin_com_varabyte_kobweb_silk_widgets.$_$.d;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e1;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.k5;
  var Link = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.b;
  var THROW_IAE = kotlin_kotlin.$_$.uf;
  var enumEntries = kotlin_kotlin.$_$.ma;
  var Enum = kotlin_kotlin.$_$.if;
  var initMetadataForClass = kotlin_kotlin.$_$.ib;
  var size = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o2;
  var Image = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.a;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h2;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r;
  var Companion_getInstance_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.y3;
  var cursor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c1;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_html_html_core.$_$.m;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t;
  var onClick = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a2;
  var Box = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a;
  var fillMaxSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f1;
  var Center_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k3;
  var Start_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t3;
  var CenterHorizontally_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p3;
  var Breakpoint_SM_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c2;
  var com_varabyte_kobweb_compose_foundation_layout_Arrangement_Center$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d;
  var Column = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b;
  var margin = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t1;
  var fontSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j1;
  var Colors_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o3;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b1;
  var Companion_getInstance_4 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.z3;
  var fontWeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k1;
  var fontFamily = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i1;
  var SpanText = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.l;
  var contains = kotlin_kotlin.$_$.md;
  var margin_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w1;
  var Companion_getInstance_5 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j4;
  var textAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q2;
  var height = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n1;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a3;
  var background = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.i5;
  var opacity = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b2;
  var lineHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p1;
  var Companion_getInstance_6 = kotlin_com_varabyte_kobweb_silk_widgets.$_$.k;
  var com_varabyte_kobweb_silk_components_forms_ButtonSize$stableprop_getter = kotlin_com_varabyte_kobweb_silk_widgets.$_$.b;
  var Button = kotlin_com_varabyte_kobweb_silk_widgets.$_$.a;
  var fillMaxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g1;
  var gap = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l1;
  var Start_getInstance_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l3;
  var Row = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c;
  var rememberBreakpoint = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k1;
  var numColumns = kotlin_com_varabyte_kobweb_silk_widgets.$_$.e;
  var Breakpoint_MD_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b2;
  var thenIf = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g3;
  var boxShadow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w;
  var com_varabyte_kobweb_silk_style_breakpoint_ResponsiveValues$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h;
  var SimpleGrid = kotlin_com_varabyte_kobweb_silk_widgets.$_$.c;
  var Companion_getInstance_7 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f4;
  var objectFit = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z1;
  var Companion_getInstance_8 = kotlin_org_jetbrains_compose_html_html_core.$_$.n;
  var position = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j2;
  var zIndex = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b3;
  var styleModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f3;
  var Top_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m3;
  var End_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s3;
  var com_varabyte_kobweb_compose_foundation_layout_Arrangement_Top$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e;
  var com_varabyte_kobweb_compose_ui_Alignment_End$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e3;
  var margin_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u1;
  var Companion_getInstance_9 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.l2;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k;
  var Direction_ToRight_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j3;
  var linearGradient = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b;
  var backgroundImage = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n;
  var Center_getInstance_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r3;
  var com_varabyte_kobweb_compose_ui_Alignment_Center$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c3;
  var KMutableProperty0 = kotlin_kotlin.$_$.yc;
  var getLocalDelegateReference = kotlin_kotlin.$_$.db;
  var CoroutineImpl = kotlin_kotlin.$_$.ia;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var isInterface = kotlin_kotlin.$_$.wb;
  var valueOf = kotlin_com_varabyte_kobweb_silk_foundation.$_$.r1;
  var initMetadataForLambda = kotlin_kotlin.$_$.mb;
  var SuspendFunction1 = kotlin_kotlin.$_$.ja;
  var get_hover = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o;
  var padding_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i2;
  var Companion_getInstance_10 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l4;
  var get_ms = kotlin_org_jetbrains_compose_html_html_core.$_$.d5;
  var transition = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u2;
  var CssStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.v;
  var get_deg = kotlin_org_jetbrains_compose_html_html_core.$_$.d4;
  var rotate = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l2;
  var transition_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t2;
  var Companion_getInstance_11 = kotlin_org_jetbrains_compose_html_html_core.$_$.f;
  var Companion_getInstance_12 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n3;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt');
  initMetadataForClass(SocialIcon, 'SocialIcon', VOID, Enum);
  initMetadataForObject(ComposableSingletons$LeftSideKt, 'ComposableSingletons$LeftSideKt');
  initMetadataForObject(ComposableSingletons$RightSideKt, 'ComposableSingletons$RightSideKt');
  initMetadataForLambda(HomePage$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(Theme, 'Theme', VOID, Enum);
  initMetadataForObject(Icon, 'Icon');
  initMetadataForObject(Image_0, 'Image');
  initMetadataForObject(String_0, 'String');
  initMetadataForObject(Dimens, 'Dimens');
  initMetadataForObject(Res, 'Res');
  //endregion
  function main() {
    AppGlobals_getInstance().initialize_8ufbf0_k$(mapOf(to('title', 'Simple_website')));
    Companion_getInstance().set_wjk6wo_k$('');
    var router = new Router();
    initKobweb(router, main$lambda);
    router.addRouteInterceptor_kgq7h7_k$(main$lambda_0);
    set_additionalSilkInitialization(main$lambda_1);
    router.tryRoutingTo$default_gm9buu_k$(remove(Companion_getInstance(), removePrefix(window.location.href, window.origin)), UpdateHistoryMode_REPLACE_getInstance());
    var root = ensureNotNull(document.getElementById('_kobweb-root'));
    while (!(root.firstChild == null)) {
      root.removeChild(ensureNotNull(root.firstChild));
    }
    renderComposable('_kobweb-root', ComposableLambda$invoke$ref_2(composableLambdaInstance(1108811911, true, main$lambda_2(router))));
  }
  function ComposableLambda$invoke$ref(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda$_521244896$lambda_jdp3wp(pageCtx, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
      HomePage($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_0(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda$1925275822$lambda(it, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(it) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 19) === 18), $dirty & 1)) {
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(1015664045, true, ComposableSingletons$MainKt$lambda$1925275822$lambda$lambda(it), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it_0;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      DeferringHost(tmp0, $composer_0, 6);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$MainKt$lambda$1925275822$lambda$lambda($it) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        tmp = $it($composer_0, 0);
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_1(p0) {
    return function (_this__u8e3s4, p0_0) {
      return p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
    };
  }
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.lambda$_521244896_pfstq1__1 = ComposableLambda$invoke$ref(composableLambdaInstance(-521244896, false, ComposableSingletons$MainKt$lambda$_521244896$lambda_jdp3wp));
    var tmp_0 = this;
    tmp_0.lambda$1925275822__1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(1925275822, false, ComposableSingletons$MainKt$lambda$1925275822$lambda));
  }
  protoOf(ComposableSingletons$MainKt).get_lambda$_521244896_2hiyyg_k$ = function () {
    return this.lambda$_521244896_pfstq1__1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda$1925275822_v3srcx_k$ = function () {
    return this.lambda$1925275822__1;
  };
  var ComposableSingletons$MainKt_instance;
  function ComposableSingletons$MainKt_getInstance() {
    if (ComposableSingletons$MainKt_instance == null)
      new ComposableSingletons$MainKt();
    return ComposableSingletons$MainKt_instance;
  }
  function main$lambda(ctx) {
    ctx.get_router_j3zccy_k$().register$default_cpqgbm_k$('/', VOID, VOID, ComposableSingletons$MainKt_getInstance().lambda$_521244896_pfstq1__1);
    return Unit_getInstance();
  }
  function main$lambda_0($this$addRouteInterceptor) {
    $this$addRouteInterceptor.set_path_tgrnnc_k$(removeSuffix(removeSuffix($this$addRouteInterceptor.get_path_wos8ry_k$(), '.html'), '.htm'));
    return Unit_getInstance();
  }
  function main$lambda_1(ctx) {
    initSilkWidgets(ctx);
    initSilkWidgetsKobweb(ctx);
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('button', get_ButtonStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('social-icon', get_SocialIconStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('theme-icon', get_ThemeIconStyle());
    initStyles(ctx);
    overrideSilkTheme(ctx);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_2(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function main$lambda$lambda($router) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        $router.renderActivePage_fc13h0_k$(ComposableSingletons$MainKt_getInstance().lambda$1925275822__1, $composer_0, 6 | com_varabyte_kobweb_navigation_Router$stableprop_getter() << 3, 0);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_3(p0) {
    return function (_this__u8e3s4, p0_0) {
      return p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
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
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_3(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      MyApp(tmp0, $composer_0, 6);
      return Unit_getInstance();
    };
  }
  function mainWrapper() {
    main();
  }
  function initStyles(ctx) {
    var tmp = ctx.get_stylesheet_hk204p_k$();
    registerStyleBase(tmp, 'html, body', initStyles$lambda);
  }
  function MyApp(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-180782929);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 3) === 2), $dirty & 1)) {
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-387928624, true, MyApp$lambda(content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_5(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      SilkApp(tmp0, $composer_0, 6);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(MyApp$lambda_0(content, $changed));
    }
  }
  function overrideSilkTheme(context) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.apply' call
    var this_0 = context.get_theme_iz24rk_k$().get_palettes_f7ft27_k$();
    // Inline function 'kotlin.apply' call
    var this_1 = this_0.get_light_iuogdp_k$();
    // Inline function 'kotlin.apply' call
    var this_2 = get_button(this_1);
    this_2.set_default_r70t7m_k$(Theme_BLUE_getInstance().get_color_ipu8u2_k$());
    this_2.set_hover_2oswrh_k$(Theme_BLUE_getInstance().get_color_ipu8u2_k$());
    this_2.set_pressed_58wx37_k$(Theme_BLUE_getInstance().get_color_ipu8u2_k$());
    // Inline function 'kotlin.apply' call
    var this_3 = this_0.get_dark_wokkvz_k$();
    // Inline function 'kotlin.apply' call
    var this_4 = get_button(this_3);
    this_4.set_default_r70t7m_k$(Theme_LIGHT_BLUE_getInstance().get_color_ipu8u2_k$());
    this_4.set_hover_2oswrh_k$(Theme_LIGHT_BLUE_getInstance().get_color_ipu8u2_k$());
    this_4.set_pressed_58wx37_k$(Theme_LIGHT_BLUE_getInstance().get_color_ipu8u2_k$());
  }
  function initStyles$lambda() {
    return fillMaxHeight(Companion_getInstance_1());
  }
  function MyApp$lambda$lambda($content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        tmp = $content($composer_0, 0);
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_4(p0) {
    return function (_this__u8e3s4, p0_0) {
      return p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
    };
  }
  function MyApp$lambda($content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        var tmp_0 = fillMaxHeight(toModifier(get_SmoothColorStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter()));
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-395234030, true, MyApp$lambda$lambda($content), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_4(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Surface(tmp_0, null, null, null, tmp0, $composer_0, 24576, 14);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_5(p0) {
    return function (_this__u8e3s4, p0_0) {
      return p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
    };
  }
  function MyApp$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      MyApp($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function IconButton(modifier, colorMode, link, icon, iconSize, onClick, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var link_0 = {_v: link};
    var iconSize_0 = {_v: iconSize};
    var onClick_0 = {_v: onClick};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1370114816);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(colorMode.get_ordinal_ip24qg_k$()) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(link_0._v) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(icon) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | (($default & 16) === 0 && $composer_0.changedInstance_s1wkiy_k$(iconSize_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onClick_0._v) ? 131072 : 65536);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 74899) === 74898), $dirty & 1)) {
      $composer_0.startDefaults_g83kzo_k$();
      if (($changed & 1) === 0 || $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_getInstance_1();
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
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        if (!(($default & 16) === 0))
          $dirty = $dirty & -57345;
      }
      $composer_0.endDefaults_b0s0ot_k$();
      var tmp = link_0._v;
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(198495182, true, IconButton$lambda(modifier_0, colorMode, onClick_0, iconSize_0, icon), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_7(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Link(tmp, null, null, null, null, null, null, tmp0, $composer_0, 12582912 | 14 & $dirty >> 6, 126);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(IconButton$lambda_0(modifier_0, colorMode, link_0, icon, iconSize_0, onClick_0, $changed, $default));
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
  function valueOf_0(value) {
    switch (value) {
      case 'Github':
        return SocialIcon_Github_getInstance();
      case 'GithubLight':
        return SocialIcon_GithubLight_getInstance();
      case 'Gitlab':
        return SocialIcon_Gitlab_getInstance();
      case 'GitlabLight':
        return SocialIcon_GitlabLight_getInstance();
      case 'LinkedIn':
        return SocialIcon_LinkedIn_getInstance();
      case 'LinkedInLight':
        return SocialIcon_LinkedInLight_getInstance();
      default:
        SocialIcon_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var SocialIcon_entriesInitialized;
  function SocialIcon_initEntries() {
    if (SocialIcon_entriesInitialized)
      return Unit_getInstance();
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
    this.icon_1 = icon;
    this.link_1 = link;
  }
  protoOf(SocialIcon).get_icon_wont8i_k$ = function () {
    return this.icon_1;
  };
  protoOf(SocialIcon).get_link_wopumb_k$ = function () {
    return this.link_1;
  };
  function IconButton$lambda$lambda($onClick) {
    return function (it) {
      var tmp0_safe_receiver = $onClick._v;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver();
      return Unit_getInstance();
    };
  }
  function IconButton$lambda$lambda_0($iconSize, $icon) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        var tmp0_modifier = size(Companion_getInstance_1(), $iconSize._v);
        Image($icon, tmp0_modifier, null, null, null, null, null, $composer_0, 0, 124);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_6(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function IconButton$lambda($modifier, $colorMode, $onClick, $iconSize, $icon) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        var tmp_0 = cursor(borderRadius(padding($modifier._v, get_px(8)), get_px(8)), Companion_getInstance_2().get_Pointer_m64vg4_k$());
        var tmp_1 = get_px(1);
        // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
        Companion_getInstance_3();
        // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_2 = border(tmp_0, tmp_1, 'solid', $colorMode.get_isLight_zemp0j_k$() ? Theme_SOCIAL_ICON_BACKGROUND_LIGHT_getInstance().get_color_ipu8u2_k$() : Theme_SOCIAL_ICON_BACKGROUND_DARK_getInstance().get_color_ipu8u2_k$());
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.changed_ga7h3f_k$($onClick._v);
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = IconButton$lambda$lambda($onClick);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
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
        var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_6;
        if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value_0 = ComposableLambda$invoke$ref_6(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_6 = value_0;
        } else {
          tmp_6 = it_0;
        }
        var tmp_7 = tmp_6;
        var tmp0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Box(tmp_5, null, null, tmp0, $composer_0, 3072, 6);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_7(p0) {
    return function (_this__u8e3s4, p0_0) {
      return p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
    };
  }
  function IconButton$lambda_0($modifier, $colorMode, $link, $icon, $iconSize, $onClick, $$changed, $$default) {
    return function ($composer, $force) {
      IconButton($modifier._v, $colorMode, $link._v, $icon, $iconSize._v, $onClick._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
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
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-48279937);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(colorMode.get_ordinal_ip24qg_k$()) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(breakpoint.get_ordinal_ip24qg_k$()) ? 32 : 16);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 19) === 18), $dirty & 1)) {
      var tmp = padding(fillMaxSize(Companion_getInstance_1()), get_px(50));
      var tmp_0 = Center_getInstance();
      var tmp_1 = breakpoint.compareTo_30rs7w_k$(Breakpoint_SM_getInstance()) <= 0 ? CenterHorizontally_getInstance() : Start_getInstance();
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-1331564312, true, LeftSide$lambda(colorMode, breakpoint), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_11(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Column(tmp, tmp_0, tmp_1, null, tmp0, $composer_0, 24576 | com_varabyte_kobweb_compose_foundation_layout_Arrangement_Center$stableprop_getter() << 3, 8);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(LeftSide$lambda_0(colorMode, breakpoint, $changed));
    }
  }
  function ComposableLambda$invoke$ref_8(p0) {
    return function (_this__u8e3s4, p0_0) {
      return p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
    };
  }
  function ComposableSingletons$LeftSideKt$lambda$_487716438$lambda_8l3amx($composer, $changed) {
    var $composer_0 = $composer;
    if (!$composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$LeftSideKt() {
    ComposableSingletons$LeftSideKt_instance = this;
    var tmp = this;
    tmp.lambda$_487716438_gcek2o_1 = ComposableLambda$invoke$ref_8(composableLambdaInstance(-487716438, false, ComposableSingletons$LeftSideKt$lambda$_487716438$lambda_8l3amx));
  }
  protoOf(ComposableSingletons$LeftSideKt).get_lambda$_487716438_oe0bip_k$ = function () {
    return this.lambda$_487716438_gcek2o_1;
  };
  var ComposableSingletons$LeftSideKt_instance;
  function ComposableSingletons$LeftSideKt_getInstance() {
    if (ComposableSingletons$LeftSideKt_instance == null)
      new ComposableSingletons$LeftSideKt();
    return ComposableSingletons$LeftSideKt_instance;
  }
  function LeftSide$lambda$lambda(it) {
    window.location.href = 'mailto:vivekbargude1206@gmail.com';
    return Unit_getInstance();
  }
  function LeftSide$lambda$lambda_0($colorMode) {
    return function ($this$Button, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        var tmp0_modifier = margin(Companion_getInstance_1(), VOID, get_px(12));
        var tmp1_src = $colorMode.get_isLight_zemp0j_k$() ? 'mail.svg' : 'mail_light.svg';
        Image(tmp1_src, tmp0_modifier, null, null, null, null, null, $composer_0, 0, 124);
        var tmp2_modifier = fontFamily(fontWeight(color(fontSize(Companion_getInstance_1(), get_px(14)), $colorMode.get_isLight_zemp0j_k$() ? Colors_getInstance().get_White_ij46ow_k$() : Theme_GRADIENT_ONE_DARK_getInstance().get_color_ipu8u2_k$()), Companion_getInstance_4().get_Bold_wnz5ke_k$()), ['RobotoRegular']);
        var tmp3_text = 'Get in touch';
        SpanText(tmp3_text, tmp2_modifier, null, null, $composer_0, 6, 12);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_9(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function LeftSide$lambda$lambda_1($colorMode) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        // Inline function 'kotlin.collections.filter' call
        var tmp0 = get_entries();
        // Inline function 'kotlin.collections.filterTo' call
        var destination = ArrayList_init_$Create$();
        var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
        while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
          var element = _iterator__ex2g4s.next_20eer_k$();
          if ($colorMode.get_isLight_zemp0j_k$() ? !contains(element.get_name_woqyms_k$(), 'Light') : contains(element.get_name_woqyms_k$(), 'Light')) {
            destination.add_utx5q5_k$(element);
          }
        }
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s_0 = destination.iterator_jk1svi_k$();
        while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
          var element_0 = _iterator__ex2g4s_0.next_20eer_k$();
          var tmp0_modifier = toModifier(get_SocialIconStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter());
          var tmp1_icon = element_0.get_icon_wont8i_k$();
          var tmp2_link = element_0.get_link_wopumb_k$();
          IconButton(tmp0_modifier, $colorMode, tmp2_link, tmp1_icon, null, null, $composer_0, 0, 48);
        }
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_10(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function LeftSide$lambda($colorMode, $breakpoint) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 6) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$Column) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 19) === 18), $dirty & 1)) {
        var tmp_1 = textAlign(fontWeight(fontSize(color(fontFamily(margin_0(Companion_getInstance_1(), VOID, VOID, get_px(12)), ['RobotoCondensedBold']), $colorMode.get_isLight_zemp0j_k$() ? Colors_getInstance().get_Black_i7mvue_k$() : Colors_getInstance().get_White_ij46ow_k$()), get_px(50)), Companion_getInstance_4().get_Bold_wnz5ke_k$()), $breakpoint.compareTo_30rs7w_k$(Breakpoint_SM_getInstance()) <= 0 ? Companion_getInstance_5().get_Center_3arb0i_k$() : Companion_getInstance_5().get_Start_ih4i6x_k$());
        SpanText('Vivek Bargude', tmp_1, null, null, $composer_0, 6, 12);
        var tmp_2 = fontSize(color(fontFamily(margin_0(Companion_getInstance_1(), VOID, VOID, get_px(24)), ['RobotoRegular']), $colorMode.get_isLight_zemp0j_k$() ? Colors_getInstance().get_Black_i7mvue_k$() : Colors_getInstance().get_White_ij46ow_k$()), get_px(18));
        SpanText('Android Developer', tmp_2, null, null, $composer_0, 6, 12);
        var tmp_3 = $this$Column.align_45bqjp_k$(background(margin_0(width(height(Companion_getInstance_1(), get_px(4)), get_px(40)), VOID, VOID, get_px(24)), $colorMode.get_isLight_zemp0j_k$() ? Theme_BLUE_getInstance().get_color_ipu8u2_k$() : Theme_LIGHT_BLUE_getInstance().get_color_ipu8u2_k$(), []), $breakpoint.compareTo_30rs7w_k$(Breakpoint_SM_getInstance()) <= 0 ? CenterHorizontally_getInstance() : Start_getInstance());
        Surface(tmp_3, null, null, null, ComposableSingletons$LeftSideKt_getInstance().lambda$_487716438_gcek2o_1, $composer_0, 24576, 14);
        var tmp0_modifier = textAlign(margin_0(lineHeight(opacity(color(fontSize(fontFamily(Companion_getInstance_1(), ['RobotoRegular']), get_px(14)), $colorMode.get_isLight_zemp0j_k$() ? Colors_getInstance().get_Black_i7mvue_k$() : Colors_getInstance().get_White_ij46ow_k$()), get_percent(50)), 2), VOID, VOID, get_px(36)), $breakpoint.compareTo_30rs7w_k$(Breakpoint_SM_getInstance()) <= 0 ? Companion_getInstance_5().get_Center_3arb0i_k$() : Companion_getInstance_5().get_Start_ih4i6x_k$());
        var tmp1_text = 'Passionate Android developer focused on crafting seamless user experiences and building innovative mobile solutions.Driven by a passion for creating seamless user experiences and acommitment to continuous learning in the ever-evolving tech landscape.';
        SpanText(tmp1_text, tmp0_modifier, null, null, $composer_0, 6, 12);
        var tmp2_modifier = margin_0(toModifier(get_ButtonStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter()), VOID, VOID, get_px(50));
        var tmp3_size = Companion_getInstance_6().get_LG_knton0_k$();
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_4;
        if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = LeftSide$lambda$lambda;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
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
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_7;
        if (invalid || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value_0 = ComposableLambda$invoke$ref_9(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_7 = value_0;
        } else {
          tmp_7 = it_0;
        }
        var tmp_8 = tmp_7;
        var tmp0 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Button(tmp_6, tmp2_modifier, null, null, false, tmp3_size, null, null, null, tmp0, $composer_0, 805306374 | com_varabyte_kobweb_silk_components_forms_ButtonSize$stableprop_getter() << 15, 476);
        var tmp_9 = gap(fillMaxWidth(Companion_getInstance_1()), get_px(12));
        var tmp_10 = $breakpoint.compareTo_30rs7w_k$(Breakpoint_SM_getInstance()) <= 0 ? Center_getInstance() : Start_getInstance_0();
        // Inline function 'kotlin.run' call
        var dispatchReceiver_0 = rememberComposableLambda(-336763579, true, LeftSide$lambda$lambda_1($colorMode), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        var it_1 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_11;
        if (invalid_0 || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value_1 = ComposableLambda$invoke$ref_10(dispatchReceiver_0);
          $composer_2.updateRememberedValue_l1wh71_k$(value_1);
          tmp_11 = value_1;
        } else {
          tmp_11 = it_1;
        }
        var tmp_12 = tmp_11;
        var tmp0_0 = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
        sourceInformationMarkerEnd($composer_2);
        Row(tmp_9, tmp_10, null, null, tmp0_0, $composer_0, 24576, 12);
        tmp_0 = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_11(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function LeftSide$lambda_0($colorMode, $breakpoint, $$changed) {
    return function ($composer, $force) {
      LeftSide($colorMode, $breakpoint, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ProfileCard(colorMode, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(466771790);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(colorMode.get_ordinal_ip24qg_k$()) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 3) === 2), $dirty & 1)) {
      var breakpoint = rememberBreakpoint($composer_0, 0);
      var tmp = numColumns(1, VOID, 2);
      var tmp0_$receiver = thenIf(fillMaxWidth(Companion_getInstance_1(), breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) <= 0 ? get_percent(100) : get_px(1000)), breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) > 0, height(Companion_getInstance_1(), get_px(600)));
      var tmp1_color = Colors_getInstance().get_Black_i7mvue_k$().copy$default_mtju0j_k$(VOID, VOID, VOID, 10);
      var tmp2_blurRadius = get_px(50);
      var tmp3_spreadRadius = get_px(50);
      var tmp_0 = background(borderRadius(padding(boxShadow(tmp0_$receiver, VOID, VOID, tmp2_blurRadius, tmp3_spreadRadius, tmp1_color), get_px(12)), get_px(8)), colorMode.get_isLight_zemp0j_k$() ? Colors_getInstance().get_White_ij46ow_k$() : Theme_DARK_BLUE_getInstance().get_color_ipu8u2_k$(), []);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-433341577, true, ProfileCard$lambda(colorMode, breakpoint), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_12(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      SimpleGrid(tmp, tmp_0, null, null, tmp0, $composer_0, 24576 | com_varabyte_kobweb_silk_style_breakpoint_ResponsiveValues$stableprop_getter(), 12);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(ProfileCard$lambda_0(colorMode, $changed));
    }
  }
  function ProfileCard$lambda($colorMode, $breakpoint) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        LeftSide($colorMode, $breakpoint, $composer_0, 0);
        RightSide($breakpoint, $composer_0, 0);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_12(p0) {
    return function (_this__u8e3s4, p0_0) {
      return p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
    };
  }
  function ProfileCard$lambda_0($colorMode, $$changed) {
    return function ($composer, $force) {
      ProfileCard($colorMode, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function RightSide(breakpoint, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(425638847);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(breakpoint.get_ordinal_ip24qg_k$()) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 3) === 2), $dirty & 1)) {
      var tmp = thenIf(fillMaxWidth(Companion_getInstance_1()), breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) > 0, height(Companion_getInstance_1(), get_px(576)));
      Box(tmp, null, null, ComposableSingletons$RightSideKt_getInstance().lambda$_479155207_ilbp82__1, $composer_0, 3072, 6);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(RightSide$lambda(breakpoint, $changed));
    }
  }
  function ComposableLambda$invoke$ref_13(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$RightSideKt$lambda$_479155207$lambda_vzzfjo($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
      var tmp0_modifier = objectFit(fillMaxSize(Companion_getInstance_1()), Companion_getInstance_7().get_Cover_i8910u_k$());
      var tmp1_src = 'photo.png';
      Image(tmp1_src, tmp0_modifier, null, null, null, null, null, $composer_0, 6, 124);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$RightSideKt() {
    ComposableSingletons$RightSideKt_instance = this;
    var tmp = this;
    tmp.lambda$_479155207_ilbp82__1 = ComposableLambda$invoke$ref_13(composableLambdaInstance(-479155207, false, ComposableSingletons$RightSideKt$lambda$_479155207$lambda_vzzfjo));
  }
  protoOf(ComposableSingletons$RightSideKt).get_lambda$_479155207_733z0f_k$ = function () {
    return this.lambda$_479155207_ilbp82__1;
  };
  var ComposableSingletons$RightSideKt_instance;
  function ComposableSingletons$RightSideKt_getInstance() {
    if (ComposableSingletons$RightSideKt_instance == null)
      new ComposableSingletons$RightSideKt();
    return ComposableSingletons$RightSideKt_instance;
  }
  function RightSide$lambda($breakpoint, $$changed) {
    return function ($composer, $force) {
      RightSide($breakpoint, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ThemeSwitchButton(colorMode, onClick, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-978707366);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(colorMode.get_ordinal_ip24qg_k$()) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onClick) ? 32 : 16);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 19) === 18), $dirty & 1)) {
      var breakpoint = rememberBreakpoint($composer_0, 0);
      var tmp = fillMaxSize(Companion_getInstance_1());
      // Inline function 'org.jetbrains.compose.web.css.Companion.Fixed' call
      Companion_getInstance_8();
      // Inline function 'org.jetbrains.compose.web.css.Position' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = zIndex(position(tmp, 'fixed'), 1);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ThemeSwitchButton$lambda;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp$ret$7 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      var tmp_3 = styleModifier(tmp_0, tmp$ret$7);
      var tmp_4 = Top_getInstance();
      var tmp_5 = End_getInstance();
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(928348433, true, ThemeSwitchButton$lambda_0(breakpoint, colorMode, onClick), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_6;
      if (invalid || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableLambda$invoke$ref_14(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_6 = value_0;
      } else {
        tmp_6 = it_0;
      }
      var tmp_7 = tmp_6;
      var tmp0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Column(tmp_3, tmp_4, tmp_5, null, tmp0, $composer_0, 24576 | com_varabyte_kobweb_compose_foundation_layout_Arrangement_Top$stableprop_getter() << 3 | com_varabyte_kobweb_compose_ui_Alignment_End$stableprop_getter() << 6, 8);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(ThemeSwitchButton$lambda_1(colorMode, onClick, $changed));
    }
  }
  function ThemeSwitchButton$lambda($this$styleModifier) {
    $this$styleModifier.property_wcrait_k$('pointer-events', 'none');
    return Unit_getInstance();
  }
  function ThemeSwitchButton$lambda$lambda($this$styleModifier) {
    $this$styleModifier.property_wcrait_k$('pointer-events', 'auto');
    return Unit_getInstance();
  }
  function ThemeSwitchButton$lambda_0($breakpoint, $colorMode, $onClick) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        var tmp_0 = margin_1(toModifier(get_ThemeIconStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter()), $breakpoint.compareTo_30rs7w_k$(Breakpoint_SM_getInstance()) > 0 ? get_px(24) : get_px(16));
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = ThemeSwitchButton$lambda$lambda;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp$ret$3 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        var tmp_3 = styleModifier(tmp_0, tmp$ret$3);
        IconButton(tmp_3, $colorMode, null, $colorMode.get_isLight_zemp0j_k$() ? 'sun.svg' : 'moon.svg', $breakpoint.compareTo_30rs7w_k$(Breakpoint_SM_getInstance()) > 0 ? get_px(32) : get_px(24), $onClick, $composer_0, 0, 4);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_14(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ThemeSwitchButton$lambda_1($colorMode, $onClick, $$changed) {
    return function ($composer, $force) {
      ThemeSwitchButton($colorMode, $onClick, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function HomePage($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(263352688);
    if ($composer_0.shouldExecute_4fplh_k$(!($changed === 0), $changed & 1)) {
      var colorMode$delegate = Companion_getInstance_9().get_currentState_dmzs7c_k$($composer_0, 6);
      var tmp = HomePage$lambda(colorMode$delegate);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.changed_ga7h3f_k$(colorMode$delegate);
      // Inline function 'kotlin.let' call
      var it = tmp0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = HomePage$slambda_0(colorMode$delegate, null);
        tmp0.updateRememberedValue_l1wh71_k$(value);
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
      var invalid_0 = $composer_0.changed_ga7h3f_k$(colorMode$delegate);
      // Inline function 'kotlin.let' call
      var it_0 = tmp0_0.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_0 = HomePage$lambda_1(colorMode$delegate);
        tmp0_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp$ret$7 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      ThemeSwitchButton(tmp_2, tmp$ret$7, $composer_0, 0);
      var tmp_5 = fillMaxSize(Companion_getInstance_1());
      var tmp0_dir = Direction_ToRight_getInstance();
      var tmp1_from = HomePage$lambda(colorMode$delegate).get_isLight_zemp0j_k$() ? Theme_GRADIENT_ONE_getInstance().get_color_ipu8u2_k$() : Theme_GRADIENT_ONE_DARK_getInstance().get_color_ipu8u2_k$();
      var tmp2_to = HomePage$lambda(colorMode$delegate).get_isLight_zemp0j_k$() ? Theme_GRADIENT_TWO_getInstance().get_color_ipu8u2_k$() : Theme_GRADIENT_TWO_DARK_getInstance().get_color_ipu8u2_k$();
      var tmp_6 = backgroundImage(tmp_5, linearGradient(tmp1_from, tmp2_to, tmp0_dir));
      var tmp_7 = Center_getInstance_0();
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(1957642922, true, HomePage$lambda_2(colorMode$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_1 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_8;
      if (invalid_1 || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_1 = ComposableLambda$invoke$ref_15(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_1);
        tmp_8 = value_1;
      } else {
        tmp_8 = it_1;
      }
      var tmp_9 = tmp_8;
      var tmp0_1 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Box(tmp_6, tmp_7, null, tmp0_1, $composer_0, 3072 | com_varabyte_kobweb_compose_ui_Alignment_Center$stableprop_getter() << 3, 4);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(HomePage$lambda_3($changed));
    }
  }
  function HomePage$lambda($colorMode$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('colorMode', KMutableProperty0, true);
    return $colorMode$delegate.get_value_j01efc_k$();
  }
  function HomePage$lambda_0($colorMode$delegate, _set____db54di) {
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('colorMode', KMutableProperty0, true);
    $colorMode$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function HomePage$slambda($colorMode$delegate, resultContinuation) {
    this.$colorMode$delegate_1 = $colorMode$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HomePage$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(HomePage$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(HomePage$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var tmp0_elvis_lhs = localStorage.getItem('theme');
          var savedTheme = tmp0_elvis_lhs == null ? 'LIGHT' : tmp0_elvis_lhs;
          HomePage$lambda_0(this.$colorMode$delegate_1, valueOf(savedTheme));
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(HomePage$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new HomePage$slambda(this.$colorMode$delegate_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(HomePage$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function HomePage$slambda_0($colorMode$delegate, resultContinuation) {
    var i = new HomePage$slambda($colorMode$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function HomePage$lambda_1($colorMode$delegate) {
    return function () {
      HomePage$lambda_0($colorMode$delegate, HomePage$lambda($colorMode$delegate).get_opposite_ywslzk_k$());
      localStorage.setItem('theme', HomePage$lambda($colorMode$delegate).get_name_woqyms_k$());
      return Unit_getInstance();
    };
  }
  function HomePage$lambda_2($colorMode$delegate) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        ProfileCard(HomePage$lambda($colorMode$delegate), $composer_0, 0);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_15(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function HomePage$lambda_3($$changed) {
    return function ($composer, $force) {
      HomePage($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function get_ButtonStyle() {
    _init_properties_ButtonStyle_kt__gkuc2b();
    return ButtonStyle;
  }
  var ButtonStyle;
  function ButtonStyle$lambda($this$CssStyle) {
    _init_properties_ButtonStyle_kt__gkuc2b();
    $this$CssStyle.base_y8uu8g_k$(ButtonStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle);
    $this$CssStyle.invoke_9o9x0o_k$(tmp, ButtonStyle$lambda$lambda_0);
    return Unit_getInstance();
  }
  function ButtonStyle$lambda$lambda() {
    _init_properties_ButtonStyle_kt__gkuc2b();
    return transition(padding_0(Companion_getInstance_1(), VOID, get_px(12)), [Companion_getInstance_10().all$default_bcbycy_k$(get_ms(300))]);
  }
  function ButtonStyle$lambda$lambda_0() {
    _init_properties_ButtonStyle_kt__gkuc2b();
    return padding_0(Companion_getInstance_1(), VOID, get_px(20));
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
    $this$CssStyle.base_y8uu8g_k$(SocialIconStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle);
    $this$CssStyle.invoke_9o9x0o_k$(tmp, SocialIconStyle$lambda$lambda_0($this$CssStyle));
    return Unit_getInstance();
  }
  function SocialIconStyle$lambda$lambda() {
    _init_properties_IconStyle_kt__l78sai();
    var tmp = background(rotate(Companion_getInstance_1(), get_deg(0)), Colors_getInstance().get_Transparent_cxh4g9_k$(), []);
    return transition_0(tmp, SocialIconStyle$lambda$lambda$lambda);
  }
  function SocialIconStyle$lambda$lambda$lambda($this$transition) {
    _init_properties_IconStyle_kt__l78sai();
    $this$transition.property_7ekuz_k$(['rotate', 'background-color']);
    $this$transition.duration_30w21k_k$([get_ms(300)]);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Ease' call
    Companion_getInstance_11();
    // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    $this$transition.timingFunction_28o80i_k$(['ease']);
    return Unit_getInstance();
  }
  function SocialIconStyle$lambda$lambda_0($this_CssStyle) {
    return function () {
      return background(rotate(Companion_getInstance_1(), get_deg(10)), $this_CssStyle.get_colorMode_trbg8z_k$().get_isLight_zemp0j_k$() ? Theme_SOCIAL_ICON_BACKGROUND_LIGHT_getInstance().get_color_ipu8u2_k$() : Theme_SOCIAL_ICON_BACKGROUND_DARK_getInstance().get_color_ipu8u2_k$(), []);
    };
  }
  function ThemeIconStyle$lambda($this$CssStyle) {
    _init_properties_IconStyle_kt__l78sai();
    $this$CssStyle.base_y8uu8g_k$(ThemeIconStyle$lambda$lambda($this$CssStyle));
    var tmp = get_hover($this$CssStyle);
    $this$CssStyle.invoke_9o9x0o_k$(tmp, ThemeIconStyle$lambda$lambda_0($this$CssStyle));
    return Unit_getInstance();
  }
  function ThemeIconStyle$lambda$lambda$lambda($this$transition) {
    _init_properties_IconStyle_kt__l78sai();
    $this$transition.property_7ekuz_k$(['background-color']);
    $this$transition.duration_30w21k_k$([get_ms(300)]);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Ease' call
    Companion_getInstance_11();
    // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    $this$transition.timingFunction_28o80i_k$(['ease']);
    return Unit_getInstance();
  }
  function ThemeIconStyle$lambda$lambda($this_CssStyle) {
    return function () {
      var tmp = background(Companion_getInstance_1(), $this_CssStyle.get_colorMode_trbg8z_k$().get_isLight_zemp0j_k$() ? Colors_getInstance().get_White_ij46ow_k$() : Theme_DARK_BLUE_getInstance().get_color_ipu8u2_k$(), []);
      return transition_0(tmp, ThemeIconStyle$lambda$lambda$lambda);
    };
  }
  function ThemeIconStyle$lambda$lambda_0($this_CssStyle) {
    return function () {
      return background(Companion_getInstance_1(), $this_CssStyle.get_colorMode_trbg8z_k$().get_isLight_zemp0j_k$() ? Theme_SOCIAL_ICON_BACKGROUND_LIGHT_getInstance().get_color_ipu8u2_k$() : Theme_SOCIAL_ICON_BACKGROUND_DARK_getInstance().get_color_ipu8u2_k$(), []);
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
  function values_0() {
    return [Theme_BLUE_getInstance(), Theme_LIGHT_BLUE_getInstance(), Theme_DARK_BLUE_getInstance(), Theme_SOCIAL_ICON_BACKGROUND_LIGHT_getInstance(), Theme_SOCIAL_ICON_BACKGROUND_DARK_getInstance(), Theme_GRADIENT_ONE_getInstance(), Theme_GRADIENT_ONE_DARK_getInstance(), Theme_GRADIENT_TWO_getInstance(), Theme_GRADIENT_TWO_DARK_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'BLUE':
        return Theme_BLUE_getInstance();
      case 'LIGHT_BLUE':
        return Theme_LIGHT_BLUE_getInstance();
      case 'DARK_BLUE':
        return Theme_DARK_BLUE_getInstance();
      case 'SOCIAL_ICON_BACKGROUND_LIGHT':
        return Theme_SOCIAL_ICON_BACKGROUND_LIGHT_getInstance();
      case 'SOCIAL_ICON_BACKGROUND_DARK':
        return Theme_SOCIAL_ICON_BACKGROUND_DARK_getInstance();
      case 'GRADIENT_ONE':
        return Theme_GRADIENT_ONE_getInstance();
      case 'GRADIENT_ONE_DARK':
        return Theme_GRADIENT_ONE_DARK_getInstance();
      case 'GRADIENT_TWO':
        return Theme_GRADIENT_TWO_getInstance();
      case 'GRADIENT_TWO_DARK':
        return Theme_GRADIENT_TWO_DARK_getInstance();
      default:
        Theme_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var Theme_entriesInitialized;
  function Theme_initEntries() {
    if (Theme_entriesInitialized)
      return Unit_getInstance();
    Theme_entriesInitialized = true;
    Theme_BLUE_instance = new Theme('BLUE', 0, Companion_getInstance_12().rgb_udwlgr_k$(33, 150, 243));
    Theme_LIGHT_BLUE_instance = new Theme('LIGHT_BLUE', 1, Companion_getInstance_12().rgb_udwlgr_k$(168, 236, 255));
    Theme_DARK_BLUE_instance = new Theme('DARK_BLUE', 2, Companion_getInstance_12().rgb_udwlgr_k$(34, 63, 94));
    Theme_SOCIAL_ICON_BACKGROUND_LIGHT_instance = new Theme('SOCIAL_ICON_BACKGROUND_LIGHT', 3, Companion_getInstance_12().rgb_udwlgr_k$(230, 230, 230));
    Theme_SOCIAL_ICON_BACKGROUND_DARK_instance = new Theme('SOCIAL_ICON_BACKGROUND_DARK', 4, Companion_getInstance_12().rgb_udwlgr_k$(48, 82, 118));
    Theme_GRADIENT_ONE_instance = new Theme('GRADIENT_ONE', 5, Companion_getInstance_12().rgb_udwlgr_k$(161, 196, 253));
    Theme_GRADIENT_ONE_DARK_instance = new Theme('GRADIENT_ONE_DARK', 6, Companion_getInstance_12().rgb_udwlgr_k$(19, 38, 58));
    Theme_GRADIENT_TWO_instance = new Theme('GRADIENT_TWO', 7, Companion_getInstance_12().rgb_udwlgr_k$(194, 233, 251));
    Theme_GRADIENT_TWO_DARK_instance = new Theme('GRADIENT_TWO_DARK', 8, Companion_getInstance_12().rgb_udwlgr_k$(20, 46, 73));
  }
  var $ENTRIES_0;
  function Theme(name, ordinal, color) {
    Enum.call(this, name, ordinal);
    this.color_1 = color;
  }
  protoOf(Theme).get_color_ipu8u2_k$ = function () {
    return this.color_1;
  };
  function Icon() {
    Icon_instance = this;
    this.EMAIL_LIGHT_1 = 'mail.svg';
    this.EMAIL_DARK_1 = 'mail_light.svg';
    this.GITHUB_1 = 'github.svg';
    this.GITHUB_LIGHT_1 = 'github_light.svg';
    this.GITLAB_1 = 'gitlab.svg';
    this.GITLAB_LIGHT_1 = 'gitlab_light.svg';
    this.LINKEDIN_1 = 'linkedin.svg';
    this.LINKEDIN_LIGHT_1 = 'linkedin_light.svg';
    this.SUN_1 = 'sun.svg';
    this.MOON_1 = 'moon.svg';
  }
  protoOf(Icon).get_EMAIL_LIGHT_uahkay_k$ = function () {
    return this.EMAIL_LIGHT_1;
  };
  protoOf(Icon).get_EMAIL_DARK_a4zb36_k$ = function () {
    return this.EMAIL_DARK_1;
  };
  protoOf(Icon).get_GITHUB_1ugkr8_k$ = function () {
    return this.GITHUB_1;
  };
  protoOf(Icon).get_GITHUB_LIGHT_kqoyqr_k$ = function () {
    return this.GITHUB_LIGHT_1;
  };
  protoOf(Icon).get_GITLAB_1ugi9o_k$ = function () {
    return this.GITLAB_1;
  };
  protoOf(Icon).get_GITLAB_LIGHT_z0vy4b_k$ = function () {
    return this.GITLAB_LIGHT_1;
  };
  protoOf(Icon).get_LINKEDIN_wb2yv_k$ = function () {
    return this.LINKEDIN_1;
  };
  protoOf(Icon).get_LINKEDIN_LIGHT_8ex18e_k$ = function () {
    return this.LINKEDIN_LIGHT_1;
  };
  protoOf(Icon).get_SUN_18jkfx_k$ = function () {
    return this.SUN_1;
  };
  protoOf(Icon).get_MOON_wo5hze_k$ = function () {
    return this.MOON_1;
  };
  var Icon_instance;
  function Icon_getInstance() {
    if (Icon_instance == null)
      new Icon();
    return Icon_instance;
  }
  function Image_0() {
    Image_instance = this;
    this.PROFILE_PHOTO_1 = 'photo.png';
  }
  protoOf(Image_0).get_PROFILE_PHOTO_hfe98t_k$ = function () {
    return this.PROFILE_PHOTO_1;
  };
  var Image_instance;
  function Image_getInstance() {
    if (Image_instance == null)
      new Image_0();
    return Image_instance;
  }
  function String_0() {
    String_instance = this;
    this.NAME_1 = 'Vivek Bargude';
    this.PROFESSION_1 = 'Android Developer';
    this.ABOUT_ME_1 = 'Passionate Android developer focused on crafting seamless user experiences and building innovative mobile solutions.Driven by a passion for creating seamless user experiences and acommitment to continuous learning in the ever-evolving tech landscape.';
    this.BUTTON_TEXT_1 = 'Get in touch';
    this.ROBOTO_CONDENSED_1 = 'RobotoCondensedBold';
    this.ROBOTO_REGULAR_1 = 'RobotoRegular';
    this.MY_EMAIL_1 = 'mailto:vivekbargude1206@gmail.com';
    this.SAVED_THEME_1 = 'theme';
  }
  protoOf(String_0).get_NAME_wo5uj8_k$ = function () {
    return this.NAME_1;
  };
  protoOf(String_0).get_PROFESSION_w5zyij_k$ = function () {
    return this.PROFESSION_1;
  };
  protoOf(String_0).get_ABOUT_ME_7x5wtv_k$ = function () {
    return this.ABOUT_ME_1;
  };
  protoOf(String_0).get_BUTTON_TEXT_kw3t81_k$ = function () {
    return this.BUTTON_TEXT_1;
  };
  protoOf(String_0).get_ROBOTO_CONDENSED_j3kcyy_k$ = function () {
    return this.ROBOTO_CONDENSED_1;
  };
  protoOf(String_0).get_ROBOTO_REGULAR_ghge4r_k$ = function () {
    return this.ROBOTO_REGULAR_1;
  };
  protoOf(String_0).get_MY_EMAIL_blk9hq_k$ = function () {
    return this.MY_EMAIL_1;
  };
  protoOf(String_0).get_SAVED_THEME_fqhk8_k$ = function () {
    return this.SAVED_THEME_1;
  };
  var String_instance;
  function String_getInstance() {
    if (String_instance == null)
      new String_0();
    return String_instance;
  }
  function Dimens() {
    Dimens_instance = this;
    this.BORDER_RADIUS_1 = 8;
    this.MAX_CARD_WIDTH_1 = 1000;
    this.MAX_CARD_HEIGHT_1 = 600;
    this.ICON_SIZE_1 = 24;
    this.ICON_SIZE_LG_1 = 32;
  }
  protoOf(Dimens).get_BORDER_RADIUS_a3cxt0_k$ = function () {
    return this.BORDER_RADIUS_1;
  };
  protoOf(Dimens).get_MAX_CARD_WIDTH_tzcivv_k$ = function () {
    return this.MAX_CARD_WIDTH_1;
  };
  protoOf(Dimens).get_MAX_CARD_HEIGHT_14h166_k$ = function () {
    return this.MAX_CARD_HEIGHT_1;
  };
  protoOf(Dimens).get_ICON_SIZE_w3c7z2_k$ = function () {
    return this.ICON_SIZE_1;
  };
  protoOf(Dimens).get_ICON_SIZE_LG_he0w4_k$ = function () {
    return this.ICON_SIZE_LG_1;
  };
  var Dimens_instance;
  function Dimens_getInstance() {
    if (Dimens_instance == null)
      new Dimens();
    return Dimens_instance;
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
  function Res() {
    Res_instance = this;
  }
  var Res_instance;
  function Res_getInstance() {
    if (Res_instance == null)
      new Res();
    return Res_instance;
  }
  function com_vivek_bargude_simple_wesbsite_utils_Res_Icon$stableprop_getter() {
    return com_vivek_bargude_simple_wesbsite_utils_Res_Icon$stable;
  }
  function com_vivek_bargude_simple_wesbsite_utils_Res_Image$stableprop_getter() {
    return com_vivek_bargude_simple_wesbsite_utils_Res_Image$stable;
  }
  function com_vivek_bargude_simple_wesbsite_utils_Res_String$stableprop_getter() {
    return com_vivek_bargude_simple_wesbsite_utils_Res_String$stable;
  }
  function com_vivek_bargude_simple_wesbsite_utils_Res_Dimens$stableprop_getter() {
    return com_vivek_bargude_simple_wesbsite_utils_Res_Dimens$stable;
  }
  function com_vivek_bargude_simple_wesbsite_utils_Res$stableprop_getter() {
    return com_vivek_bargude_simple_wesbsite_utils_Res$stable;
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
