(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './html-html-core.js', './kobweb-frontend-compose-html-ext.js', './compose-multiplatform-core-compose-runtime-runtime.js', './kobweb-common-client-server-internal.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./html-html-core.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kobweb-common-client-server-internal.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-kobweb-core'.");
    }
    if (typeof globalThis['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-core'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-kobweb-core'.");
    }
    if (typeof globalThis['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-core'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-kobweb-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-core'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-kobweb-core'.");
    }
    if (typeof globalThis['kobweb-common-client-server-internal'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-core'. Its dependency 'kobweb-common-client-server-internal' was not found. Please, check whether 'kobweb-common-client-server-internal' is loaded prior to 'kobweb-frontend-kobweb-core'.");
    }
    globalThis['kobweb-frontend-kobweb-core'] = factory(typeof globalThis['kobweb-frontend-kobweb-core'] === 'undefined' ? {} : globalThis['kobweb-frontend-kobweb-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['html-html-core'], globalThis['kobweb-frontend-compose-html-ext'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['kobweb-common-client-server-internal']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_com_varabyte_kobweb_client_server_internal) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.c2;
  var org_jetbrains_compose_web_css_StyleSheet$stableprop_getter = kotlin_org_jetbrains_compose_html_html_core.$_$.t2;
  var Style = kotlin_org_jetbrains_compose_html_html_core.$_$.m3;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.x2;
  var padding = kotlin_org_jetbrains_compose_html_html_core.$_$.u2;
  var margin = kotlin_org_jetbrains_compose_html_html_core.$_$.m2;
  var boxSizing = kotlin_org_jetbrains_compose_html_html_core.$_$.o1;
  var StyleSheet = kotlin_org_jetbrains_compose_html_html_core.$_$.g1;
  var VOID = kotlin_kotlin.$_$.e;
  var StyleSheet_init_$Init$ = kotlin_org_jetbrains_compose_html_html_core.$_$.b;
  var layer = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i1;
  var protoOf = kotlin_kotlin.$_$.h7;
  var initMetadataForObject = kotlin_kotlin.$_$.w6;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var toString = kotlin_kotlin.$_$.j7;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.f1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.ja;
  var initMetadataForCompanion = kotlin_kotlin.$_$.s6;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var initMetadataForClass = kotlin_kotlin.$_$.r6;
  var mapCapacity = kotlin_kotlin.$_$.h4;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.o;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.r1;
  var substringAfterLast = kotlin_kotlin.$_$.y8;
  var plus = kotlin_kotlin.$_$.o4;
  var equals = kotlin_kotlin.$_$.l6;
  var getStringHashCode = kotlin_kotlin.$_$.p6;
  var hashCode = kotlin_kotlin.$_$.q6;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var mutableStateMapOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var THROW_CCE = kotlin_kotlin.$_$.v9;
  var A = kotlin_org_jetbrains_compose_html_html_core.$_$.g3;
  var ensureNotNull = kotlin_kotlin.$_$.ca;
  var isBlank = kotlin_kotlin.$_$.k8;
  var startsWith = kotlin_kotlin.$_$.x8;
  var endsWith = kotlin_kotlin.$_$.h8;
  var startsWith_0 = kotlin_kotlin.$_$.w8;
  var dropLast = kotlin_kotlin.$_$.e8;
  var charSequenceLength = kotlin_kotlin.$_$.h6;
  var removePrefix = kotlin_kotlin.$_$.q8;
  var Enum = kotlin_kotlin.$_$.o9;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ea;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.x;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var joinToString = kotlin_kotlin.$_$.x3;
  var objectCreate = kotlin_kotlin.$_$.g7;
  var substringBefore = kotlin_kotlin.$_$.a9;
  var to = kotlin_kotlin.$_$.la;
  var split = kotlin_kotlin.$_$.v8;
  var charArrayOf = kotlin_kotlin.$_$.e6;
  var trimStart = kotlin_kotlin.$_$.h9;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.w;
  var drop = kotlin_kotlin.$_$.f8;
  var first = kotlin_kotlin.$_$.j8;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.p;
  var split_0 = kotlin_kotlin.$_$.u8;
  var getOrNull = kotlin_kotlin.$_$.u3;
  var Exception = kotlin_kotlin.$_$.q9;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.b1;
  var captureStack = kotlin_kotlin.$_$.d6;
  var emptyMap = kotlin_kotlin.$_$.o3;
  var last = kotlin_kotlin.$_$.d4;
  var DynamicNode = kotlin_com_varabyte_kobweb_client_server_internal.$_$.a;
  var toRouteString = kotlin_com_varabyte_kobweb_client_server_internal.$_$.c;
  var KMutableProperty1 = kotlin_kotlin.$_$.r7;
  var getPropertyCallableRef = kotlin_kotlin.$_$.o6;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.j;
  var KtMap = kotlin_kotlin.$_$.p2;
  var isInterface = kotlin_kotlin.$_$.z6;
  var DisposableEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i;
  var rememberComposableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var asReversed = kotlin_kotlin.$_$.a3;
  var substringAfter = kotlin_kotlin.$_$.z8;
  var RouteTree = kotlin_com_varabyte_kobweb_client_server_internal.$_$.b;
  var androidx_compose_runtime_ProvidedValue$stableprop_getter = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  var CompositionLocalProvider = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var contains = kotlin_kotlin.$_$.c8;
  var removeSuffix = kotlin_kotlin.$_$.r8;
  var contains_0 = kotlin_kotlin.$_$.d8;
  var Text = kotlin_org_jetbrains_compose_html_html_core.$_$.o3;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var toMutableMap = kotlin_kotlin.$_$.c5;
  var Div = kotlin_org_jetbrains_compose_html_html_core.$_$.i3;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.v2;
  var width = kotlin_org_jetbrains_compose_html_html_core.$_$.e3;
  var get_vh = kotlin_org_jetbrains_compose_html_html_core.$_$.d3;
  var height = kotlin_org_jetbrains_compose_html_html_core.$_$.h2;
  var Companion_instance = kotlin_org_jetbrains_compose_html_html_core.$_$.j;
  var display = kotlin_org_jetbrains_compose_html_html_core.$_$.u1;
  var Companion_instance_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.w2;
  var alignItems = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j;
  var Companion_instance_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e3;
  var justifyContent = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f1;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(DefaultStyleSheet, 'DefaultStyleSheet', VOID, StyleSheet);
  initMetadataForObject(AppGlobals, 'AppGlobals');
  initMetadataForCompanion(Companion);
  initMetadataForClass(PageContext, 'PageContext');
  initMetadataForClass(RouteInfo, 'RouteInfo');
  initMetadataForClass(MutableData, 'MutableData', MutableData);
  initMetadataForClass(InitKobwebContext, 'InitKobwebContext');
  initMetadataForClass(InitRouteContext, 'InitRouteContext');
  initMetadataForClass(MutableKobwebConfig, 'MutableKobwebConfig', MutableKobwebConfig);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(MutableOpenLinkStrategies, 'MutableOpenLinkStrategies', MutableOpenLinkStrategies);
  initMetadataForCompanion(Companion_1);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(BasePathImpl, 'BasePathImpl');
  initMetadataForClass(OpenLinkStrategy, 'OpenLinkStrategy', VOID, Enum);
  initMetadataForClass(PageData, 'PageData');
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(Route, 'Route');
  initMetadataForClass(RouteException, 'RouteException', VOID, Exception);
  initMetadataForClass(_no_name_provided__qut3iv);
  initMetadataForClass(Router, 'Router', Router);
  initMetadataForObject(ComposableSingletons$RouterKt, 'ComposableSingletons$RouterKt');
  initMetadataForClass(RouteInterceptorScope, 'RouteInterceptorScope');
  initMetadataForClass(UpdateHistoryMode, 'UpdateHistoryMode', VOID, Enum);
  //endregion
  var com_varabyte_kobweb_core_DefaultStyleSheet$stable;
  function KobwebApp(content, $composer, $changed) {
    _init_properties_App_kt__fk8usv();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.y1i(1293008755);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.m1h(content) ? 4 : 2);
    if ($composer_0.r1i(!(($dirty & 3) === 2), $dirty & 1)) {
      var tmp0 = DefaultStyleSheet_getInstance();
      var tmp2 = $composer_0;
      // Inline function 'org.jetbrains.compose.web.css.Style' call
      org_jetbrains_compose_web_css_StyleSheet$stableprop_getter();
      var $composer_1 = tmp2;
      $composer_1.p1g(-1196466140);
      Style(null, tmp0.n2m(), $composer_1, 0, 1);
      $composer_1.r1g();
      content($composer_0, 14 & $dirty);
    } else {
      $composer_0.w19();
    }
    var tmp0_safe_receiver = $composer_0.z1i();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d1o(KobwebApp$lambda(content, $changed));
    }
  }
  function DefaultStyleSheet$lambda($this$layer) {
    $this$layer.r2m('html, body', DefaultStyleSheet$lambda$lambda);
    $this$layer.r2m('*', DefaultStyleSheet$lambda$lambda_0);
    return Unit_instance;
  }
  function DefaultStyleSheet$lambda$lambda($this$style) {
    padding($this$style, [get_px(0)]);
    margin($this$style, [get_px(0)]);
    return Unit_instance;
  }
  function DefaultStyleSheet$lambda$lambda_0($this$style) {
    boxSizing($this$style, 'border-box');
    return Unit_instance;
  }
  function DefaultStyleSheet() {
    DefaultStyleSheet_instance = this;
    StyleSheet_init_$Init$(VOID, VOID, this);
    layer(this, 'reset', DefaultStyleSheet$lambda);
  }
  protoOf(DefaultStyleSheet).q2m = function (selector, cssRule) {
    return this.p2m(selector, cssRule);
  };
  var DefaultStyleSheet_instance;
  function DefaultStyleSheet_getInstance() {
    if (DefaultStyleSheet_instance == null)
      new DefaultStyleSheet();
    return DefaultStyleSheet_instance;
  }
  function KobwebApp$lambda($content, $$changed) {
    return function ($composer, $force) {
      KobwebApp($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var properties_initialized_App_kt_kalemn;
  function _init_properties_App_kt__fk8usv() {
    if (!properties_initialized_App_kt_kalemn) {
      properties_initialized_App_kt_kalemn = true;
      com_varabyte_kobweb_core_DefaultStyleSheet$stable = org_jetbrains_compose_web_css_StyleSheet$stableprop_getter();
    }
  }
  var com_varabyte_kobweb_core_AppGlobals$stable;
  function AppGlobals() {
  }
  protoOf(AppGlobals).w2w = function (values) {
    // Inline function 'kotlin.check' call
    if (!!!(this.v2w_1 == null)) {
      var message = 'Cannot initialize AppGlobals more than once';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.v2w_1 = values;
  };
  var AppGlobals_instance;
  function AppGlobals_getInstance() {
    return AppGlobals_instance;
  }
  function get_PageContextLocal() {
    _init_properties_PageContext_kt__u2hiem();
    return PageContextLocal;
  }
  var PageContextLocal;
  var com_varabyte_kobweb_core_RouteInfo$stable;
  var com_varabyte_kobweb_core_PageContext$stable;
  function Companion() {
  }
  protoOf(Companion).y2w = function () {
    var tmp = this.x2w_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('instance');
    }
  };
  protoOf(Companion).z2w = function (router, data) {
    this.x2w_1 = new PageContext(router, data);
  };
  var Companion_instance_2;
  function Companion_getInstance_0() {
    return Companion_instance_2;
  }
  function PageContext(router, data) {
    this.a2x_1 = router;
    this.b2x_1 = data;
    this.c2x_1 = mutableStateOf(null);
  }
  protoOf(PageContext).d2x = function (value) {
    this.c2x_1.ss(value);
  };
  protoOf(PageContext).e2x = function () {
    var tmp0_elvis_lhs = this.c2x_1.e2();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'PageContext route info is only valid within a @Page composable';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  function RouteInfo(route, dynamicParams) {
    this.f2x_1 = route;
    var tmp = this;
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination = LinkedHashMap_init_$Create$(mapCapacity(dynamicParams.j()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s = dynamicParams.k2().g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      var tmp_0 = element.d2();
      // Inline function 'kotlin.collections.component2' call
      var value = element.e2();
      var tmp$ret$2 = decodeURIComponent(value);
      destination.l2(tmp_0, tmp$ret$2);
    }
    tmp.g2x_1 = destination;
    this.h2x_1 = substringAfterLast(this.f2x_1.o2x_1, _Char___init__impl__6a9atx(47));
    this.i2x_1 = this.f2x_1.o2x_1;
    this.j2x_1 = plus(this.f2x_1.p2x_1, dynamicParams);
    this.k2x_1 = this.f2x_1.p2x_1;
    this.l2x_1 = this.f2x_1.q2x_1;
  }
  protoOf(RouteInfo).r2x = function () {
    return this.f2x_1.toString();
  };
  protoOf(RouteInfo).toString = function () {
    return this.r2x();
  };
  protoOf(RouteInfo).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (other instanceof RouteInfo) {
      tmp_1 = other.i2x_1 === this.i2x_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals(other.j2x_1, this.j2x_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.l2x_1 == this.l2x_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(RouteInfo).hashCode = function () {
    var result = getStringHashCode(this.i2x_1);
    result = imul(31, result) + hashCode(this.j2x_1) | 0;
    var tmp = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.l2x_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(RouteInfo).s2x = function (path, queryParams, fragment, dynamicParams) {
    return new RouteInfo(Route_init_$Create$(path, queryParams, fragment), dynamicParams);
  };
  protoOf(RouteInfo).t2x = function (path, queryParams, fragment, dynamicParams, $super) {
    path = path === VOID ? this.f2x_1.o2x_1 : path;
    queryParams = queryParams === VOID ? this.f2x_1.p2x_1 : queryParams;
    fragment = fragment === VOID ? this.f2x_1.q2x_1 : fragment;
    dynamicParams = dynamicParams === VOID ? this.g2x_1 : dynamicParams;
    return $super === VOID ? this.s2x(path, queryParams, fragment, dynamicParams) : $super.s2x.call(this, path, queryParams, fragment, dynamicParams);
  };
  function rememberPageContext($composer, $changed) {
    _init_properties_PageContext_kt__u2hiem();
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_PageContextLocal();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.m1i(this_0);
    sourceInformationMarkerEnd($composer_1);
    var tmp;
    if (tmp0 == null) {
      var message = 'PageContext is only valid within a @Page composable';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0;
    }
    return tmp;
  }
  function PageContextLocal$lambda() {
    _init_properties_PageContext_kt__u2hiem();
    return null;
  }
  var properties_initialized_PageContext_kt_8ruj8w;
  function _init_properties_PageContext_kt__u2hiem() {
    if (!properties_initialized_PageContext_kt_8ruj8w) {
      properties_initialized_PageContext_kt_8ruj8w = true;
      PageContextLocal = staticCompositionLocalOf(PageContextLocal$lambda);
      com_varabyte_kobweb_core_RouteInfo$stable = 8;
      com_varabyte_kobweb_core_PageContext$stable = 8;
    }
  }
  var com_varabyte_kobweb_core_data_MutableData$stable;
  function MutableData() {
    this.u2x_1 = mutableStateMapOf();
  }
  protoOf(MutableData).y1 = function () {
    this.u2x_1.y1();
  };
  var com_varabyte_kobweb_core_init_InitKobwebContext$stable;
  function initKobweb(router, init) {
    var config = new MutableKobwebConfig();
    init(new InitKobwebContext(config, router));
    set_MutableKobwebConfigInstance(config);
  }
  function InitKobwebContext(config, router) {
    this.v2x_1 = config;
    this.w2x_1 = router;
  }
  var com_varabyte_kobweb_core_init_InitRouteContext$stable;
  function InitRouteContext(route, data) {
    this.x2x_1 = route;
    this.y2x_1 = data;
  }
  function set_MutableKobwebConfigInstance(_set____db54di) {
    _init_properties_KobwebConfig_kt__rz30d4();
    MutableKobwebConfigInstance = _set____db54di;
  }
  function get_MutableKobwebConfigInstance() {
    _init_properties_KobwebConfig_kt__rz30d4();
    return MutableKobwebConfigInstance;
  }
  var MutableKobwebConfigInstance;
  var com_varabyte_kobweb_core_init_MutableOpenLinkStrategies$stable;
  var com_varabyte_kobweb_core_init_MutableKobwebConfig$stable;
  function MutableKobwebConfig() {
    this.z2x_1 = new MutableOpenLinkStrategies();
  }
  protoOf(MutableKobwebConfig).a2y = function () {
    return this.z2x_1;
  };
  function Companion_0() {
  }
  protoOf(Companion_0).b2y = function () {
    return get_MutableKobwebConfigInstance();
  };
  var Companion_instance_3;
  function Companion_getInstance_1() {
    return Companion_instance_3;
  }
  function MutableOpenLinkStrategies(internal, external) {
    internal = internal === VOID ? OpenLinkStrategy_IN_PLACE_getInstance() : internal;
    external = external === VOID ? OpenLinkStrategy_IN_NEW_TAB_getInstance() : external;
    this.c2y_1 = internal;
    this.d2y_1 = external;
  }
  protoOf(MutableOpenLinkStrategies).e2y = function () {
    return this.c2y_1;
  };
  protoOf(MutableOpenLinkStrategies).f2y = function () {
    return this.d2y_1;
  };
  var properties_initialized_KobwebConfig_kt_yaxikm;
  function _init_properties_KobwebConfig_kt__rz30d4() {
    if (!properties_initialized_KobwebConfig_kt_yaxikm) {
      properties_initialized_KobwebConfig_kt_yaxikm = true;
      MutableKobwebConfigInstance = new MutableKobwebConfig();
      com_varabyte_kobweb_core_init_MutableOpenLinkStrategies$stable = 8;
      com_varabyte_kobweb_core_init_MutableKobwebConfig$stable = 8;
    }
  }
  function Anchor(href, attrs, openInternalLinksStrategy, openExternalLinksStrategy, updateHistoryMode, content, $composer, $changed, $default) {
    var attrs_0 = {_v: attrs};
    var openInternalLinksStrategy_0 = {_v: openInternalLinksStrategy};
    var openExternalLinksStrategy_0 = {_v: openExternalLinksStrategy};
    var updateHistoryMode_0 = {_v: updateHistoryMode};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.y1i(1682374411);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.z16(href) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.m1h(attrs_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0) {
      var tmp;
      var tmp_0 = $composer_0;
      var tmpEnum = openInternalLinksStrategy_0._v;
      if (tmp_0.o1h(tmpEnum == null ? -1 : tmpEnum.p2_1)) {
        tmp = 256;
      } else {
        tmp = 128;
      }
      $dirty = $dirty | tmp;
    }
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0) {
      var tmp_1;
      var tmp_2 = $composer_0;
      var tmpEnum_0 = openExternalLinksStrategy_0._v;
      if (tmp_2.o1h(tmpEnum_0 == null ? -1 : tmpEnum_0.p2_1)) {
        tmp_1 = 2048;
      } else {
        tmp_1 = 1024;
      }
      $dirty = $dirty | tmp_1;
    }
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0) {
      var tmp_3;
      var tmp_4 = $composer_0;
      var tmpEnum_1 = updateHistoryMode_0._v;
      if (tmp_4.o1h(tmpEnum_1 == null ? -1 : tmpEnum_1.p2_1)) {
        tmp_3 = 16384;
      } else {
        tmp_3 = 8192;
      }
      $dirty = $dirty | tmp_3;
    }
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.m1h(content_0._v) ? 131072 : 65536);
    if ($composer_0.r1i(!(($dirty & 74899) === 74898), $dirty & 1)) {
      if (!(($default & 2) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        openInternalLinksStrategy_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        openExternalLinksStrategy_0._v = null;
      }
      if (!(($default & 16) === 0)) {
        updateHistoryMode_0._v = null;
      }
      if (!(($default & 32) === 0)) {
        content_0._v = null;
      }
      var ctx = rememberPageContext($composer_0, 0);
      var tmp_5 = Companion_instance_4.g2y(href);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!(!!(!!(!!(($dirty & 112) === 32 | ($dirty & 896) === 256) | ($dirty & 7168) === 2048) | $composer_0.m1h(ctx)) | ($dirty & 14) === 4) | ($dirty & 57344) === 16384);
      // Inline function 'kotlin.let' call
      var it = tmp0.y1h();
      var tmp_6;
      if (invalid || it === Companion_getInstance().f1a_1) {
        var value = Anchor$lambda(attrs_0, openInternalLinksStrategy_0, openExternalLinksStrategy_0, ctx, href, updateHistoryMode_0);
        tmp0.j1i(value);
        tmp_6 = value;
      } else {
        tmp_6 = it;
      }
      var tmp_7 = tmp_6;
      var tmp$ret$3 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      A(tmp_5, tmp$ret$3, content_0._v, $composer_0, 896 & $dirty >> 9, 0);
    } else {
      $composer_0.w19();
    }
    var tmp0_safe_receiver = $composer_0.z1i();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d1o(Anchor$lambda_0(href, attrs_0, openInternalLinksStrategy_0, openExternalLinksStrategy_0, updateHistoryMode_0, content_0, $changed, $default));
    }
  }
  function Anchor$lambda$lambda($openInternalLinksStrategy, $openExternalLinksStrategy, $ctx, $href, $updateHistoryMode) {
    return function (evt) {
      var tmp0_elvis_lhs = $openInternalLinksStrategy._v;
      var openInternalLinksStrategy = tmp0_elvis_lhs == null ? toOpenLinkStrategy(evt, Companion_instance_3.b2y().a2y().e2y()) : tmp0_elvis_lhs;
      var tmp1_elvis_lhs = $openExternalLinksStrategy._v;
      var openExternalLinksStrategy = tmp1_elvis_lhs == null ? toOpenLinkStrategy(evt, Companion_instance_3.b2y().a2y().f2y()) : tmp1_elvis_lhs;
      var tmp2_elvis_lhs = $updateHistoryMode._v;
      $ctx.a2x_1.s2y($href, tmp2_elvis_lhs == null ? UpdateHistoryMode_PUSH_getInstance() : tmp2_elvis_lhs, openInternalLinksStrategy, openExternalLinksStrategy);
      evt.d2o();
      evt.e2o();
      return Unit_instance;
    };
  }
  function Anchor$lambda($attrs, $openInternalLinksStrategy, $openExternalLinksStrategy, $ctx, $href, $updateHistoryMode) {
    return function ($this$A) {
      var tmp;
      if (!($attrs._v == null)) {
        tmp = $attrs._v($this$A);
      }
      $this$A.m2k(Anchor$lambda$lambda($openInternalLinksStrategy, $openExternalLinksStrategy, $ctx, $href, $updateHistoryMode));
      return Unit_instance;
    };
  }
  function Anchor$lambda_0($href, $attrs, $openInternalLinksStrategy, $openExternalLinksStrategy, $updateHistoryMode, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Anchor($href, $attrs._v, $openInternalLinksStrategy._v, $openExternalLinksStrategy._v, $updateHistoryMode._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var com_varabyte_kobweb_navigation_BasePathImpl$stable;
  function Companion_1() {
  }
  protoOf(Companion_1).t2y = function (value) {
    Companion_instance_5.v2y(new BasePathImpl(value));
  };
  protoOf(Companion_1).e2 = function () {
    return Companion_instance_5.x2y().w2y_1;
  };
  protoOf(Companion_1).g2y = function (path) {
    return Companion_instance_5.x2y().g2y(path);
  };
  var Companion_instance_4;
  function Companion_getInstance_2() {
    return Companion_instance_4;
  }
  function Companion_2() {
    this.u2y_1 = null;
  }
  protoOf(Companion_2).v2y = function (value) {
    // Inline function 'kotlin.check' call
    if (!(this.u2y_1 == null)) {
      var message = 'Cannot overwrite base path once set';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.u2y_1 = value;
  };
  protoOf(Companion_2).y2y = function () {
    if (this.u2y_1 == null) {
      this.u2y_1 = new BasePathImpl('');
    }
    return this.u2y_1;
  };
  protoOf(Companion_2).x2y = function () {
    return ensureNotNull(this.y2y());
  };
  var Companion_instance_5;
  function Companion_getInstance_3() {
    return Companion_instance_5;
  }
  function BasePathImpl(value) {
    var tmp = this;
    // Inline function 'kotlin.takeIf' call
    var tmp_0;
    // Inline function 'kotlin.text.isNotBlank' call
    if (!isBlank(value)) {
      tmp_0 = value;
    } else {
      tmp_0 = null;
    }
    var tmp0_safe_receiver = tmp_0;
    var tmp_1;
    if (tmp0_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_1 = startsWith(tmp0_safe_receiver, _Char___init__impl__6a9atx(47)) ? tmp0_safe_receiver : '/' + tmp0_safe_receiver;
    }
    var tmp1_safe_receiver = tmp_1;
    var tmp_2;
    if (tmp1_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_2 = endsWith(tmp1_safe_receiver, _Char___init__impl__6a9atx(47)) ? tmp1_safe_receiver : tmp1_safe_receiver + '/';
    }
    var tmp2_elvis_lhs = tmp_2;
    tmp.w2y_1 = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
  }
  protoOf(BasePathImpl).g2y = function (path) {
    if (isBlank(this.w2y_1))
      return path;
    if (!startsWith_0(path, '/'))
      return path;
    return dropLast(this.w2y_1, 1) + path;
  };
  protoOf(BasePathImpl).toString = function () {
    return this.w2y_1;
  };
  function remove(_this__u8e3s4, path) {
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    var this_0 = _this__u8e3s4.e2();
    if (charSequenceLength(this_0) > 0) {
      tmp = removePrefix(path, dropLast(_this__u8e3s4.e2(), 1));
    } else {
      tmp = path;
    }
    return tmp;
  }
  function prependIf(_this__u8e3s4, condition, path) {
    return condition ? _this__u8e3s4.g2y(path) : path;
  }
  var OpenLinkStrategy_IN_PLACE_instance;
  var OpenLinkStrategy_IN_NEW_TAB_instance;
  var OpenLinkStrategy_entriesInitialized;
  function OpenLinkStrategy_initEntries() {
    if (OpenLinkStrategy_entriesInitialized)
      return Unit_instance;
    OpenLinkStrategy_entriesInitialized = true;
    OpenLinkStrategy_IN_PLACE_instance = new OpenLinkStrategy('IN_PLACE', 0);
    OpenLinkStrategy_IN_NEW_TAB_instance = new OpenLinkStrategy('IN_NEW_TAB', 1);
  }
  function OpenLinkStrategy(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function open(_this__u8e3s4, href, strategy) {
    switch (strategy.p2_1) {
      case 0:
        _this__u8e3s4.open(href, '_self');
        break;
      case 1:
        _this__u8e3s4.open(href, '_blank');
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
  }
  function toOpenLinkStrategy(_this__u8e3s4, default_0) {
    default_0 = default_0 === VOID ? OpenLinkStrategy_IN_PLACE_getInstance() : default_0;
    return _this__u8e3s4.w2o_1 || _this__u8e3s4.i2p_1 ? OpenLinkStrategy_IN_NEW_TAB_getInstance() : default_0;
  }
  function OpenLinkStrategy_IN_PLACE_getInstance() {
    OpenLinkStrategy_initEntries();
    return OpenLinkStrategy_IN_PLACE_instance;
  }
  function OpenLinkStrategy_IN_NEW_TAB_getInstance() {
    OpenLinkStrategy_initEntries();
    return OpenLinkStrategy_IN_NEW_TAB_instance;
  }
  var com_varabyte_kobweb_navigation_PageData$stable;
  function PageData(pageMethod, routeInfo) {
    this.z2y_1 = pageMethod;
    this.a2z_1 = routeInfo;
  }
  var com_varabyte_kobweb_navigation_RouteException$stable;
  var com_varabyte_kobweb_navigation_Route$stable;
  function Route_init_$Init$(path, queryParams, fragment, $this) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.c8(path);
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!queryParams.r()) {
      this_0.d8(_Char___init__impl__6a9atx(63));
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(queryParams.j());
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = queryParams.k2().g();
      while (_iterator__ex2g4s.h()) {
        var item = _iterator__ex2g4s.i();
        // Inline function 'kotlin.collections.component1' call
        var key = item.d2();
        // Inline function 'kotlin.collections.component2' call
        var value = item.e2();
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.apply' call
        var this_1 = StringBuilder_init_$Create$();
        this_1.c8(key);
        // Inline function 'kotlin.text.isNotEmpty' call
        if (charSequenceLength(value) > 0) {
          this_1.d8(_Char___init__impl__6a9atx(61));
          this_1.c8(value);
        }
        var tmp$ret$8 = this_1.toString();
        destination.e(tmp$ret$8);
      }
      this_0.c8(joinToString(destination, '&'));
    }
    if (!(fragment == null)) {
      this_0.d8(_Char___init__impl__6a9atx(35));
      this_0.c8(fragment);
    }
    var tmp$ret$13 = this_0.toString();
    Route.call($this, tmp$ret$13);
    return $this;
  }
  function Route_init_$Create$(path, queryParams, fragment) {
    return Route_init_$Init$(path, queryParams, fragment, objectCreate(protoOf(Route)));
  }
  function Companion_3() {
  }
  protoOf(Companion_3).b2z = function (pathQueryAndFragment) {
    var pathPart = substringBefore(substringBefore(pathQueryAndFragment, _Char___init__impl__6a9atx(63)), _Char___init__impl__6a9atx(35));
    return to(pathPart, removePrefix(pathQueryAndFragment, pathPart));
  };
  protoOf(Companion_3).c2z = function (url) {
    // Inline function 'kotlin.let' call
    var splitResult = split(url, ['://'], VOID, 2);
    var _destruct__k2r9zo = splitResult.j() === 1 ? to('', splitResult.p(0)) : to(splitResult.p(0) + '://', trimStart(splitResult.p(1), charArrayOf([_Char___init__impl__6a9atx(47)])));
    var origin = _destruct__k2r9zo.af();
    var rest = _destruct__k2r9zo.bf();
    var _destruct__k2r9zo_0 = this.b2z(rest);
    var path = _destruct__k2r9zo_0.af();
    var queryAndFragment = _destruct__k2r9zo_0.bf();
    // Inline function 'kotlin.text.replace' call
    return origin + Regex_init_$Create$('//+').jc(path, '/') + queryAndFragment;
  };
  protoOf(Companion_3).d2z = function (path) {
    return !(this.wu(path) == null);
  };
  protoOf(Companion_3).wu = function (path) {
    var tmp;
    try {
      tmp = new Route(path);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof RouteException) {
        var _unused_var__etf5q3 = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Companion_3).e2z = function (url) {
    var tmp0_elvis_lhs = this.wu(removePrefix(url.href, url.origin));
    return tmp0_elvis_lhs == null ? new Route('') : tmp0_elvis_lhs;
  };
  var Companion_instance_6;
  function Companion_getInstance_4() {
    return Companion_instance_6;
  }
  function Route(pathQueryAndFragment) {
    this.m2x_1 = Companion_instance_6.c2z(pathQueryAndFragment);
    var tmp;
    try {
      new URL(this.m2x_1);
      tmp = false;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var _unused_var__etf5q3 = $p;
        tmp_0 = true;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var isValidRoute = tmp;
    if (!isValidRoute) {
      throw new RouteException(pathQueryAndFragment);
    }
    this.n2x_1 = new URL(this.m2x_1, 'http://unused.com');
    var isAbsolute = startsWith_0(this.m2x_1, '/');
    var tmp_1 = this;
    var tmp_2;
    if (isAbsolute) {
      tmp_2 = this.n2x_1.pathname;
    } else {
      // Inline function 'kotlin.also' call
      var this_0 = drop(this.n2x_1.pathname, 1);
      // Inline function 'kotlin.check' call
      if (!(first(this.n2x_1.pathname) === _Char___init__impl__6a9atx(47))) {
        throw IllegalStateException_init_$Create$('Check failed.');
      }
      tmp_2 = this_0;
    }
    tmp_1.o2x_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.apply' call
    var this_1 = LinkedHashMap_init_$Create$_0();
    $l$block: {
      // Inline function 'kotlin.text.isEmpty' call
      var this_2 = this.n2x_1.search;
      if (charSequenceLength(this_2) === 0) {
        break $l$block;
      }
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = split_0(removePrefix(this.n2x_1.search, '?'), charArrayOf([_Char___init__impl__6a9atx(38)])).g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        var keyValue = split_0(element, charArrayOf([_Char___init__impl__6a9atx(61)]), VOID, 2);
        var key = keyValue.p(0);
        // Inline function 'kotlin.collections.elementAtOrNull' call
        var tmp0_safe_receiver = getOrNull(keyValue, 1);
        var tmp_4;
        if (tmp0_safe_receiver == null) {
          tmp_4 = null;
        } else {
          // Inline function 'kotlin.let' call
          tmp_4 = decodeURIComponent(tmp0_safe_receiver);
        }
        var tmp1_elvis_lhs = tmp_4;
        // Inline function 'kotlin.collections.set' call
        var value = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
        this_1.l2(key, value);
      }
    }
    tmp_3.p2x_1 = this_1;
    var tmp_5 = this;
    // Inline function 'kotlin.takeIf' call
    var this_3 = this.n2x_1.hash;
    var tmp_6;
    if (startsWith_0(this_3, '#')) {
      tmp_6 = this_3;
    } else {
      tmp_6 = null;
    }
    var tmp0_safe_receiver_0 = tmp_6;
    var tmp1_safe_receiver = tmp0_safe_receiver_0 == null ? null : removePrefix(tmp0_safe_receiver_0, '#');
    var tmp_7;
    if (tmp1_safe_receiver == null) {
      tmp_7 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_7 = decodeURIComponent(tmp1_safe_receiver);
    }
    tmp_5.q2x_1 = tmp_7;
  }
  protoOf(Route).f2z = function (path, queryParams, fragment) {
    return Route_init_$Create$(path, queryParams, fragment);
  };
  protoOf(Route).g2z = function (path, queryParams, fragment, $super) {
    path = path === VOID ? this.o2x_1 : path;
    queryParams = queryParams === VOID ? this.p2x_1 : queryParams;
    fragment = fragment === VOID ? this.q2x_1 : fragment;
    return $super === VOID ? this.f2z(path, queryParams, fragment) : $super.f2z.call(this, path, queryParams, fragment);
  };
  protoOf(Route).toString = function () {
    return this.o2x_1 + this.n2x_1.search + this.n2x_1.hash;
  };
  function RouteException(value) {
    Exception_init_$Init$('Failed to create a route. Routes should be valid URLs without a leading domain. Got: ' + value, this);
    captureStack(this, RouteException);
  }
  function createPageData(_this__u8e3s4, route, errorPageMethod) {
    var self_0 = _this__u8e3s4;
    var tmp0_elvis_lhs = self_0.o2w(route.o2x_1, true);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return new PageData(errorPageMethod, new RouteInfo(route, emptyMap()));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var resolved = tmp;
    var tmp1_elvis_lhs = last(resolved).h2w_1.c2v();
    var pageMethod = tmp1_elvis_lhs == null ? errorPageMethod : tmp1_elvis_lhs;
    // Inline function 'kotlin.collections.mutableMapOf' call
    var dynamicParams = LinkedHashMap_init_$Create$_0();
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = resolved.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      var tmp_0 = element.h2w_1;
      if (tmp_0 instanceof DynamicNode) {
        var tmp2 = element.h2w_1.k20();
        // Inline function 'kotlin.collections.set' call
        var value = element.i2w_1;
        dynamicParams.l2(tmp2, value);
      }
    }
    return new PageData(pageMethod, new RouteInfo(route.g2z(toRouteString(resolved)), dynamicParams));
  }
  var com_varabyte_kobweb_navigation_RouteInterceptorScope$stable;
  var com_varabyte_kobweb_navigation_Router_RouteEntry$stable;
  var com_varabyte_kobweb_navigation_Router$stable;
  function _set_activePageMethod__f6z3vj($this, _set____db54di) {
    var tmp0 = $this.o2y_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Router$_get_activePageMethod_$ref_kzrggv_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('activePageMethod', 1, tmp, tmp_0, Router$_set_activePageMethod_$ref_yxu4h7_0());
    tmp0.ss(_set____db54di);
    return Unit_instance;
  }
  function _get_activePageMethod__dw5579($this) {
    var tmp0 = $this.o2y_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Router$_get_activePageMethod_$ref_kzrggv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('activePageMethod', 1, tmp, tmp_0, Router$_set_activePageMethod_$ref_yxu4h7());
    return tmp0.e2();
  }
  function _set_scrollRequest__vmu5bx($this, _set____db54di) {
    var tmp0 = $this.r2y_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Router$_get_scrollRequest_$ref_4bly9p_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('scrollRequest', 1, tmp, tmp_0, Router$_set_scrollRequest_$ref_he6y0n_0());
    tmp0.ss(_set____db54di);
    return Unit_instance;
  }
  function _get_scrollRequest__o6ie4v($this) {
    var tmp0 = $this.r2y_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Router$_get_scrollRequest_$ref_4bly9p();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('scrollRequest', 1, tmp, tmp_0, Router$_set_scrollRequest_$ref_he6y0n());
    return tmp0.e2();
  }
  function updatePageContext($this, _this__u8e3s4, pathQueryAndFragment) {
    if (startsWith_0(pathQueryAndFragment, '#')) {
      var routeInfo = _this__u8e3s4.c2x_1.e2();
      if (!(routeInfo == null)) {
        _this__u8e3s4.c2x_1.ss(routeInfo.t2x(VOID, VOID, removePrefix(pathQueryAndFragment, '#')));
        return true;
      } else {
        return false;
      }
    }
    var route = Companion_instance_6.wu(pathQueryAndFragment);
    var tmp;
    if (!(route == null)) {
      var data = createPageData($this.p2y_1, route, $this.h2y_1);
      var tmp0_safe_receiver = _this__u8e3s4.c2x_1.e2();
      var previousRoutePath = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i2x_1;
      _set_activePageMethod__f6z3vj($this, data.z2y_1);
      _this__u8e3s4.d2x(data.a2z_1);
      if (!(previousRoutePath === route.o2x_1)) {
        // Inline function 'kotlin.collections.mutableListOf' call
        var initRouteMethods = ArrayList_init_$Create$_0();
        var tmp0 = $this.m2y_1;
        // Inline function 'kotlin.collections.get' call
        var key = _get_activePageMethod__dw5579($this);
        var tmp1_safe_receiver = (isInterface(tmp0, KtMap) ? tmp0 : THROW_CCE()).h2(key);
        if (tmp1_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          initRouteMethods.e(tmp1_safe_receiver);
        }
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = $this.h2z(data.z2y_1).g();
        while (_iterator__ex2g4s.h()) {
          var element = _iterator__ex2g4s.i();
          var tmp0_safe_receiver_0 = $this.n2y_1.h2(element);
          if (tmp0_safe_receiver_0 == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            initRouteMethods.e(tmp0_safe_receiver_0);
          }
        }
        $this.i2y_1.y1();
        var ctx = new InitRouteContext(data.a2z_1, $this.i2y_1);
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s_0 = initRouteMethods.g();
        while (_iterator__ex2g4s_0.h()) {
          var element_0 = _iterator__ex2g4s_0.i();
          element_0(ctx);
        }
      }
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function normalize($this, _this__u8e3s4) {
    // Inline function 'kotlin.check' call
    if (!Companion_instance_6.d2z(_this__u8e3s4)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    var hrefResolved = Companion_instance_6.e2z(new URL(Companion_instance_6.c2z(_this__u8e3s4), window.location.href)).toString();
    // Inline function 'kotlin.takeIf' call
    var this_0 = remove(Companion_instance_4, hrefResolved);
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(this_0) > 0) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    var tmp0_elvis_lhs = tmp;
    var withoutPrefix = tmp0_elvis_lhs == null ? '/' : tmp0_elvis_lhs;
    var hadPrefix = !(withoutPrefix === hrefResolved);
    var tmp_0 = Companion_instance_4;
    var tmp0 = $this.q2y_1;
    // Inline function 'kotlin.collections.fold' call
    var accumulator = (new Route(withoutPrefix)).toString();
    var _iterator__ex2g4s = tmp0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      var acc = accumulator;
      var interceptor = new RouteInterceptorScope(acc);
      element(interceptor);
      accumulator = Companion_instance_6.c2z(interceptor.r2x());
    }
    var tmp$ret$5 = accumulator;
    return prependIf(tmp_0, hadPrefix, tmp$ret$5);
  }
  function Router$_get_activePageMethod_$ref_kzrggv() {
    return function (p0) {
      return _get_activePageMethod__dw5579(p0);
    };
  }
  function Router$_set_activePageMethod_$ref_yxu4h7() {
    return function (p0, p1) {
      _set_activePageMethod__f6z3vj(p0, p1);
      return Unit_instance;
    };
  }
  function Router$_get_activePageMethod_$ref_kzrggv_0() {
    return function (p0) {
      return _get_activePageMethod__dw5579(p0);
    };
  }
  function Router$_set_activePageMethod_$ref_yxu4h7_0() {
    return function (p0, p1) {
      _set_activePageMethod__f6z3vj(p0, p1);
      return Unit_instance;
    };
  }
  function Router$_get_scrollRequest_$ref_4bly9p() {
    return function (p0) {
      return _get_scrollRequest__o6ie4v(p0);
    };
  }
  function Router$_set_scrollRequest_$ref_he6y0n() {
    return function (p0, p1) {
      _set_scrollRequest__vmu5bx(p0, p1);
      return Unit_instance;
    };
  }
  function Router$_get_scrollRequest_$ref_4bly9p_0() {
    return function (p0) {
      return _get_scrollRequest__o6ie4v(p0);
    };
  }
  function Router$_set_scrollRequest_$ref_he6y0n_0() {
    return function (p0, p1) {
      _set_scrollRequest__vmu5bx(p0, p1);
      return Unit_instance;
    };
  }
  function Router$lambda(this$0) {
    return function (it) {
      var tmp = Companion_instance_2.y2w();
      // Inline function 'kotlin.let' call
      var it_0 = ensureNotNull(document.location);
      var tmp$ret$1 = removePrefix(it_0.href, it_0.origin);
      return updatePageContext(this$0, tmp, tmp$ret$1);
    };
  }
  function _no_name_provided__qut3iv() {
  }
  protoOf(_no_name_provided__qut3iv).pm = function () {
  };
  function Router$renderActivePage$lambda$lambda$lambda(this$0) {
    return function ($this$DisposableEffect) {
      var tmp0_safe_receiver = _get_scrollRequest__o6ie4v(this$0);
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver();
      _set_scrollRequest__vmu5bx(this$0, null);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv();
    };
  }
  function Router$renderActivePage$lambda$lambda$lambda_0($pageMethod) {
    return function (ctx, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.v1c(850244467, Companion_instance_2.y2w().e2x().i2x_1);
      $pageMethod(ctx, $composer_0, 14 & $changed);
      $composer_0.y1c();
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.q2a(_this__u8e3s4, p0_0, p1);
    };
  }
  function Router$renderActivePage$lambda$lambda$lambda_1($layout, $accum) {
    return function (ctx, $composer, $changed) {
      var $composer_0 = $composer;
      $layout(ctx, $accum, $composer_0, 14 & $changed);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_0(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.q2a(_this__u8e3s4, p0_0, p1);
    };
  }
  function Router$renderActivePage$lambda$lambda(this$0, $pageMethod) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.r1i(!(($changed & 3) === 2), $changed & 1)) {
        var tmp_0 = _get_scrollRequest__o6ie4v(this$0);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.m1h(this$0);
        // Inline function 'kotlin.let' call
        var it = $composer_0.y1h();
        var tmp_1;
        if (invalid || it === Companion_getInstance().f1a_1) {
          var value = Router$renderActivePage$lambda$lambda$lambda(this$0);
          $composer_0.j1i(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp$ret$3 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        DisposableEffect(tmp_0, tmp$ret$3, $composer_0, 0);
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-973415845, true, Router$renderActivePage$lambda$lambda$lambda_0($pageMethod), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_1.z16(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it_0 = $composer_1.y1h();
        var tmp_3;
        if (invalid_0 || it_0 === Companion_getInstance().f1a_1) {
          var value_0 = ComposableLambda$invoke$ref(dispatchReceiver);
          $composer_1.j1i(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        var keyedPageMethod = tmp0;
        $composer_0.p1g(1960057240);
        // Inline function 'kotlin.collections.foldRight' call
        var this_0 = asReversed(this$0.h2z($pageMethod));
        var accumulator = keyedPageMethod;
        if (!this_0.r()) {
          var iterator = this_0.q(this_0.j());
          while (iterator.k4()) {
            var tmp0_0 = iterator.m4();
            var accum = accumulator;
            // Inline function 'kotlin.run' call
            var dispatchReceiver_0 = rememberComposableLambda(1052452521, true, Router$renderActivePage$lambda$lambda$lambda_1(tmp0_0, accum), $composer_0, 54);
            // Inline function 'androidx.compose.runtime.remember' call
            var $composer_2 = $composer_0;
            sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
            // Inline function 'androidx.compose.runtime.cache' call
            var invalid_1 = $composer_2.z16(dispatchReceiver_0);
            // Inline function 'kotlin.let' call
            var it_1 = $composer_2.y1h();
            var tmp_5;
            if (invalid_1 || it_1 === Companion_getInstance().f1a_1) {
              var value_1 = ComposableLambda$invoke$ref_0(dispatchReceiver_0);
              $composer_2.j1i(value_1);
              tmp_5 = value_1;
            } else {
              tmp_5 = it_1;
            }
            var tmp_6 = tmp_5;
            var tmp0_1 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
            sourceInformationMarkerEnd($composer_2);
            accumulator = tmp0_1;
          }
        }
        var tmp0_group = accumulator;
        $composer_0.r1g();
        tmp = tmp0_group(Companion_instance_2.y2w(), $composer_0, 0);
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
  function Router$renderActivePage$lambda($pageWrapper, this$0, $pageMethod) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.r1i(!(($changed & 3) === 2), $changed & 1)) {
        var tmp_0 = $pageWrapper._v;
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-1343210329, true, Router$renderActivePage$lambda$lambda(this$0, $pageMethod), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.z16(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.y1h();
        var tmp_1;
        if (invalid || it === Companion_getInstance().f1a_1) {
          var value = ComposableLambda$invoke$ref_1(dispatchReceiver);
          $composer_1.j1i(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        tmp = tmp_0(tmp0, $composer_0, 6);
      } else {
        $composer_0.w19();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_2(p0) {
    return function (_this__u8e3s4, p0_0) {
      return p0.g1g(_this__u8e3s4, p0_0);
    };
  }
  function Router$renderActivePage$lambda_0($tmp0_rcvr, $pageWrapper, $$changed, $$default) {
    return function ($composer, $force) {
      $tmp0_rcvr.m2z($pageWrapper._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Router$tryRoutingTo$lambda($fileExistsOnServer, $xhr) {
    return function (it) {
      $fileExistsOnServer._v = $xhr.status === 200;
      return Unit_instance;
    };
  }
  function Router$tryRoutingTo$lambda_0(it) {
    return Unit_instance;
  }
  function Router$tryRoutingTo$lambda_1(it) {
    return Unit_instance;
  }
  function Router$tryRoutingTo$lambda_2() {
    var tmp = window;
    // Inline function 'org.w3c.dom.INSTANT' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'org.w3c.dom.ScrollToOptions' call
    var o = {};
    o['left'] = 0.0;
    o['top'] = 0.0;
    o['behavior'] = 'instant';
    tmp.scroll(o);
    return Unit_instance;
  }
  function Router$tryRoutingTo$lambda_3($url) {
    return function () {
      var tmp0_safe_receiver = document.getElementById(substringAfter($url, _Char___init__impl__6a9atx(35)));
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.scrollIntoView();
      }
      return Unit_instance;
    };
  }
  function Router() {
    this.h2y_1 = ComposableSingletons$RouterKt_getInstance().o2z_1;
    this.i2y_1 = new MutableData();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.apply' call
    var this_0 = LinkedHashMap_init_$Create$_0();
    var tmp2 = 'com.varabyte.kobweb.core.layout.NoLayout';
    // Inline function 'kotlin.collections.set' call
    var value = ComposableSingletons$RouterKt_getInstance().p2z_1;
    this_0.l2(tmp2, value);
    tmp.j2y_1 = this_0;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.apply' call
    var this_1 = LinkedHashMap_init_$Create$_0();
    var tmp2_0 = this.h2y_1;
    // Inline function 'kotlin.collections.set' call
    var value_0 = 'com.varabyte.kobweb.core.layout.NoLayout';
    this_1.l2(tmp2_0, value_0);
    tmp_0.k2y_1 = this_1;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.l2y_1 = LinkedHashMap_init_$Create$_0();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_2.m2y_1 = LinkedHashMap_init_$Create$_0();
    var tmp_3 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_3.n2y_1 = LinkedHashMap_init_$Create$_0();
    this.o2y_1 = mutableStateOf(null);
    this.p2y_1 = new RouteTree();
    var tmp_4 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_4.q2y_1 = ArrayList_init_$Create$_0();
    this.r2y_1 = mutableStateOf(null);
    Companion_instance_2.z2w(this, this.i2y_1);
    var tmp_5 = window;
    tmp_5.onpopstate = Router$lambda(this);
  }
  protoOf(Router).h2z = function (_this__u8e3s4) {
    var tmp0_safe_receiver = this.k2y_1.h2(_this__u8e3s4);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = this.j2y_1.h2(tmp0_safe_receiver);
    }
    var layoutMethod = tmp;
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$_0();
    while (!(layoutMethod == null)) {
      this_0.e(layoutMethod);
      var tmp0_safe_receiver_0 = this.l2y_1.h2(layoutMethod);
      var tmp_0;
      if (tmp0_safe_receiver_0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_0 = this.j2y_1.h2(tmp0_safe_receiver_0);
      }
      layoutMethod = tmp_0;
    }
    return this_0.i5();
  };
  protoOf(Router).m2z = function (pageWrapper, $composer, $changed, $default) {
    var pageWrapper_0 = {_v: pageWrapper};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.y1i(137063404);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.m1h(pageWrapper_0._v) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.m1h(this) ? 32 : 16);
    if ($composer_0.r1i(!(($dirty & 19) === 18), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        pageWrapper_0._v = ComposableSingletons$RouterKt_getInstance().q2z_1;
      }
      var tmp0_elvis_lhs = _get_activePageMethod__dw5579(this);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        var message = "Make sure you have visited a page (via `navigateTo` or `tryRoutingTo`) at least once before calling 'renderActivePage'";
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var pageMethod = tmp;
      var tmp_0 = get_PageContextLocal().y1n(Companion_instance_2.y2w());
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(248233772, true, Router$renderActivePage$lambda(pageWrapper_0, this, pageMethod), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.z16(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.y1h();
      var tmp_1;
      if (invalid || it === Companion_getInstance().f1a_1) {
        var value = ComposableLambda$invoke$ref_2(dispatchReceiver);
        $composer_1.j1i(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      CompositionLocalProvider(tmp_0, tmp0, $composer_0, 48 | androidx_compose_runtime_ProvidedValue$stableprop_getter());
    } else {
      $composer_0.w19();
    }
    var tmp1_safe_receiver = $composer_0.z1i();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.d1o(Router$renderActivePage$lambda_0(this, pageWrapper_0, $changed, $default));
    }
  };
  protoOf(Router).r2z = function (route, layoutId, initRouteMethod, pageMethod) {
    // Inline function 'kotlin.require' call
    if (!(Companion_instance_6.d2z(route) && startsWith(route, _Char___init__impl__6a9atx(47)))) {
      var message = 'Registration only allowed for internal, rooted routes, e.g. /example/path. Got: ' + route;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!this.p2y_1.q2w(Companion_instance_4.g2y(route), pageMethod)) {
      var message_0 = 'Registration failure. Path is already registered: ' + route;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    if (layoutId == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.collections.set' call
      this.k2y_1.l2(pageMethod, layoutId);
    }
    if (initRouteMethod == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.collections.set' call
      this.m2y_1.l2(pageMethod, initRouteMethod);
    }
  };
  protoOf(Router).s2z = function (route, layoutId, initRouteMethod, pageMethod, $super) {
    layoutId = layoutId === VOID ? null : layoutId;
    initRouteMethod = initRouteMethod === VOID ? null : initRouteMethod;
    var tmp;
    if ($super === VOID) {
      this.r2z(route, layoutId, initRouteMethod, pageMethod);
      tmp = Unit_instance;
    } else {
      tmp = $super.r2z.call(this, route, layoutId, initRouteMethod, pageMethod);
    }
    return tmp;
  };
  protoOf(Router).t2z = function (interceptor) {
    this.q2y_1.e(interceptor);
  };
  protoOf(Router).u2z = function (pathQueryAndFragment, updateHistoryMode, openLinkStrategy) {
    if (contains(pathQueryAndFragment, '://'))
      return false;
    var pathQueryAndFragment_0 = Companion_instance_4.g2y(pathQueryAndFragment);
    if (Companion_instance_6.d2z(pathQueryAndFragment_0)) {
      pathQueryAndFragment_0 = normalize(this, pathQueryAndFragment_0);
      // Inline function 'kotlin.run' call
      var _destruct__k2r9zo = Companion_instance_6.b2z(pathQueryAndFragment_0);
      var pathPart = _destruct__k2r9zo.af();
      var queryAndFragmentPart = _destruct__k2r9zo.bf();
      if (!(pathPart === '/')) {
        if (!this.p2y_1.p2w(pathPart)) {
          if (endsWith(pathPart, _Char___init__impl__6a9atx(47))) {
            var withoutSlash = removeSuffix(pathPart, '/');
            if (this.p2y_1.p2w(withoutSlash)) {
              pathQueryAndFragment_0 = withoutSlash + queryAndFragmentPart;
            }
          } else {
            var withSlash = pathPart + '/';
            if (this.p2y_1.p2w(withSlash)) {
              pathQueryAndFragment_0 = withSlash + queryAndFragmentPart;
            }
          }
        }
      }
      // Inline function 'kotlin.run' call
      var pathPart_0 = Companion_instance_6.b2z(pathQueryAndFragment_0).af();
      if (!this.p2y_1.p2w(pathPart_0)) {
        var xhr = new XMLHttpRequest();
        var fileExistsOnServer = {_v: false};
        xhr.open('HEAD', pathQueryAndFragment_0, false);
        xhr.onload = Router$tryRoutingTo$lambda(fileExistsOnServer, xhr);
        xhr.onerror = Router$tryRoutingTo$lambda_0;
        xhr.onabort = Router$tryRoutingTo$lambda_1;
        xhr.send(null);
        if (fileExistsOnServer._v) {
          open(window, pathQueryAndFragment_0, OpenLinkStrategy_IN_PLACE_getInstance());
          return true;
        }
      }
    }
    if (!openLinkStrategy.equals(OpenLinkStrategy_IN_PLACE_getInstance())) {
      open(window, pathQueryAndFragment_0, openLinkStrategy);
      return true;
    }
    var tmp;
    if (updatePageContext(this, Companion_instance_2.y2w(), pathQueryAndFragment_0)) {
      pathQueryAndFragment_0 = Companion_instance_2.y2w().e2x().i2x_1 + Companion_instance_6.b2z(pathQueryAndFragment_0).ze_1;
      // Inline function 'kotlin.let' call
      var url = window.location.origin + pathQueryAndFragment_0;
      var onNewPage = !(window.location.pathname === Companion_instance_6.e2z(new URL(url)).o2x_1);
      if (!(window.location.href === url)) {
        switch (updateHistoryMode.p2_1) {
          case 0:
            window.history.pushState(window.history.state, '', url);
            break;
          case 1:
            window.history.replaceState(window.history.state, '', url);
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        if (onNewPage) {
          _set_scrollRequest__vmu5bx(this, Router$tryRoutingTo$lambda_2);
        }
      }
      if (contains_0(url, _Char___init__impl__6a9atx(35))) {
        _set_scrollRequest__vmu5bx(this, Router$tryRoutingTo$lambda_3(url));
      }
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Router).v2z = function (pathQueryAndFragment, updateHistoryMode, openLinkStrategy, $super) {
    updateHistoryMode = updateHistoryMode === VOID ? UpdateHistoryMode_PUSH_getInstance() : updateHistoryMode;
    openLinkStrategy = openLinkStrategy === VOID ? OpenLinkStrategy_IN_PLACE_getInstance() : openLinkStrategy;
    return $super === VOID ? this.u2z(pathQueryAndFragment, updateHistoryMode, openLinkStrategy) : $super.u2z.call(this, pathQueryAndFragment, updateHistoryMode, openLinkStrategy);
  };
  protoOf(Router).s2y = function (pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy, openExternalLinksStrategy) {
    if (!this.u2z(pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy)) {
      var tmp = window;
      var tmp_0;
      if (startsWith_0(pathQueryAndFragment, window.origin)) {
        tmp_0 = openInternalLinksStrategy;
      } else {
        tmp_0 = openExternalLinksStrategy;
      }
      open(tmp, pathQueryAndFragment, tmp_0);
    }
  };
  function ComposableLambda$invoke$ref_3(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.q2a(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$RouterKt$lambda$215212537$lambda($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Page Not Found', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_4(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.q2a(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$RouterKt$lambda$_1582477545$lambda_kdntrc(ctx, $composer, $changed) {
    var $composer_0 = $composer;
    DefaultErrorPage($composer_0, 0);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_5(p0) {
    return function (_this__u8e3s4, p0_0, p1, p2) {
      return p0.r2a(_this__u8e3s4, p0_0, p1, p2);
    };
  }
  function ComposableSingletons$RouterKt$lambda$_1070949088$lambda_malff6(ctx, content, $composer, $changed) {
    var $composer_0 = $composer;
    content(ctx, $composer_0, 14 & $changed | 112 & $changed);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_6(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.q2a(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$RouterKt$lambda$_149473399$lambda_vw12th(it, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.m1h(it) ? 4 : 2);
    if ($composer_0.r1i(!(($dirty & 19) === 18), $dirty & 1)) {
      it($composer_0, 14 & $dirty);
    } else {
      $composer_0.w19();
    }
    return Unit_instance;
  }
  function ComposableSingletons$RouterKt() {
    ComposableSingletons$RouterKt_instance = this;
    var tmp = this;
    tmp.n2z_1 = ComposableLambda$invoke$ref_3(composableLambdaInstance(215212537, false, ComposableSingletons$RouterKt$lambda$215212537$lambda));
    var tmp_0 = this;
    tmp_0.o2z_1 = ComposableLambda$invoke$ref_4(composableLambdaInstance(-1582477545, false, ComposableSingletons$RouterKt$lambda$_1582477545$lambda_kdntrc));
    var tmp_1 = this;
    tmp_1.p2z_1 = ComposableLambda$invoke$ref_5(composableLambdaInstance(-1070949088, false, ComposableSingletons$RouterKt$lambda$_1070949088$lambda_malff6));
    var tmp_2 = this;
    tmp_2.q2z_1 = ComposableLambda$invoke$ref_6(composableLambdaInstance(-149473399, false, ComposableSingletons$RouterKt$lambda$_149473399$lambda_vw12th));
  }
  var ComposableSingletons$RouterKt_instance;
  function ComposableSingletons$RouterKt_getInstance() {
    if (ComposableSingletons$RouterKt_instance == null)
      new ComposableSingletons$RouterKt();
    return ComposableSingletons$RouterKt_instance;
  }
  function RouteInterceptorScope(pathQueryAndFragment) {
    this.i2z_1 = new Route(pathQueryAndFragment);
    this.j2z_1 = this.i2z_1.o2x_1;
    this.k2z_1 = toMutableMap(this.i2z_1.p2x_1);
    this.l2z_1 = this.i2z_1.q2x_1;
  }
  protoOf(RouteInterceptorScope).w2z = function (value) {
    this.j2z_1 = startsWith(value, _Char___init__impl__6a9atx(47)) ? value : '/' + value;
  };
  protoOf(RouteInterceptorScope).r2x = function () {
    return Route_init_$Create$(this.j2z_1, this.k2z_1, this.l2z_1).toString();
  };
  var UpdateHistoryMode_PUSH_instance;
  var UpdateHistoryMode_REPLACE_instance;
  var UpdateHistoryMode_entriesInitialized;
  function UpdateHistoryMode_initEntries() {
    if (UpdateHistoryMode_entriesInitialized)
      return Unit_instance;
    UpdateHistoryMode_entriesInitialized = true;
    UpdateHistoryMode_PUSH_instance = new UpdateHistoryMode('PUSH', 0);
    UpdateHistoryMode_REPLACE_instance = new UpdateHistoryMode('REPLACE', 1);
  }
  function UpdateHistoryMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function DefaultErrorPage($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.y1i(1831390232);
    if ($composer_0.r1i(!($changed === 0), $changed & 1)) {
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.y1h();
      var tmp;
      if (false || it === Companion_getInstance().f1a_1) {
        var value = DefaultErrorPage$lambda;
        this_0.j1i(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      Div(tmp$ret$3, ComposableSingletons$RouterKt_getInstance().n2z_1, $composer_0, 54, 0);
    } else {
      $composer_0.w19();
    }
    var tmp0_safe_receiver = $composer_0.z1i();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d1o(DefaultErrorPage$lambda_0($changed));
    }
  }
  function com_varabyte_kobweb_navigation_Router$stableprop_getter() {
    return com_varabyte_kobweb_navigation_Router$stable;
  }
  function DefaultErrorPage$lambda($this$Div) {
    $this$Div.g2k(DefaultErrorPage$lambda$lambda);
    return Unit_instance;
  }
  function DefaultErrorPage$lambda$lambda($this$style) {
    width($this$style, get_percent(100));
    height($this$style, get_vh(100));
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    alignItems($this$style, Companion_instance_0.r2p());
    justifyContent($this$style, Companion_instance_1.r2p());
    return Unit_instance;
  }
  function DefaultErrorPage$lambda_0($$changed) {
    return function ($composer, $force) {
      DefaultErrorPage($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function UpdateHistoryMode_PUSH_getInstance() {
    UpdateHistoryMode_initEntries();
    return UpdateHistoryMode_PUSH_instance;
  }
  function UpdateHistoryMode_REPLACE_getInstance() {
    UpdateHistoryMode_initEntries();
    return UpdateHistoryMode_REPLACE_instance;
  }
  var com_varabyte_kobweb_streams_ApiStreamListener_ConnectedContext$stable;
  var com_varabyte_kobweb_streams_ApiStreamListener_TextReceivedContext$stable;
  var com_varabyte_kobweb_streams_ApiStreamListener_DisconnectedContext$stable;
  var com_varabyte_kobweb_streams_ApiStream_WebSocketChannel$stable;
  var com_varabyte_kobweb_streams_ApiStream$stable;
  //region block: init
  com_varabyte_kobweb_core_AppGlobals$stable = 8;
  AppGlobals_instance = new AppGlobals();
  Companion_instance_2 = new Companion();
  com_varabyte_kobweb_core_data_MutableData$stable = 0;
  com_varabyte_kobweb_core_init_InitKobwebContext$stable = 8;
  com_varabyte_kobweb_core_init_InitRouteContext$stable = 8;
  Companion_instance_3 = new Companion_0();
  com_varabyte_kobweb_navigation_BasePathImpl$stable = 0;
  Companion_instance_4 = new Companion_1();
  Companion_instance_5 = new Companion_2();
  com_varabyte_kobweb_navigation_PageData$stable = 8;
  com_varabyte_kobweb_navigation_RouteException$stable = 8;
  com_varabyte_kobweb_navigation_Route$stable = 8;
  Companion_instance_6 = new Companion_3();
  com_varabyte_kobweb_navigation_RouteInterceptorScope$stable = 8;
  com_varabyte_kobweb_navigation_Router_RouteEntry$stable = 0;
  com_varabyte_kobweb_navigation_Router$stable = 8;
  com_varabyte_kobweb_streams_ApiStreamListener_ConnectedContext$stable = 8;
  com_varabyte_kobweb_streams_ApiStreamListener_TextReceivedContext$stable = 8;
  com_varabyte_kobweb_streams_ApiStreamListener_DisconnectedContext$stable = 8;
  com_varabyte_kobweb_streams_ApiStream_WebSocketChannel$stable = 8;
  com_varabyte_kobweb_streams_ApiStream$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = initKobweb;
  _.$_$.b = KobwebApp;
  _.$_$.c = Anchor;
  _.$_$.d = Router;
  _.$_$.e = com_varabyte_kobweb_navigation_Router$stableprop_getter;
  _.$_$.f = remove;
  _.$_$.g = UpdateHistoryMode_REPLACE_getInstance;
  _.$_$.h = AppGlobals_instance;
  _.$_$.i = Companion_instance_4;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-kobweb-core.js.map
