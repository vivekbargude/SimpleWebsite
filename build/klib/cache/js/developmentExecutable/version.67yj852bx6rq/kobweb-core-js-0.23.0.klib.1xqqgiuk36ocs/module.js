(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kobweb-frontend-browser-ext.js', './html-html-core.js', './kobweb-frontend-compose-html-ext.js', './compose-multiplatform-core-compose-runtime-runtime.js', './kobweb-common-client-server-internal.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-browser-ext.js'), require('./html-html-core.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kobweb-common-client-server-internal.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-kobweb-core'.");
    }
    if (typeof globalThis['kobweb-frontend-browser-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-core'. Its dependency 'kobweb-frontend-browser-ext' was not found. Please, check whether 'kobweb-frontend-browser-ext' is loaded prior to 'kobweb-frontend-kobweb-core'.");
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
    globalThis['kobweb-frontend-kobweb-core'] = factory(typeof globalThis['kobweb-frontend-kobweb-core'] === 'undefined' ? {} : globalThis['kobweb-frontend-kobweb-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['kobweb-frontend-browser-ext'], globalThis['html-html-core'], globalThis['kobweb-frontend-compose-html-ext'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['kobweb-common-client-server-internal']);
  }
}(function (_, kotlin_kotlin, kotlin_com_varabyte_kobweb_browser_ext, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_com_varabyte_kobweb_client_server_internal) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var KProperty1 = kotlin_kotlin.$_$.bd;
  var getPropertyCallableRef = kotlin_kotlin.$_$.fb;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.g2;
  var charArrayOf = kotlin_kotlin.$_$.ta;
  var trimStart = kotlin_kotlin.$_$.ze;
  var Unit_getInstance = kotlin_kotlin.$_$.m4;
  var get_http = kotlin_com_varabyte_kobweb_browser_ext.$_$.b;
  var KMutableProperty0 = kotlin_kotlin.$_$.yc;
  var KMutableProperty1 = kotlin_kotlin.$_$.zc;
  var protoOf = kotlin_kotlin.$_$.lc;
  var FetchDefaults_getInstance = kotlin_com_varabyte_kobweb_browser_ext.$_$.g;
  var VOID = kotlin_kotlin.$_$.f;
  var initMetadataForClass = kotlin_kotlin.$_$.ib;
  var lazy = kotlin_kotlin.$_$.ng;
  var THROW_CCE = kotlin_kotlin.$_$.tf;
  var Annotation = kotlin_kotlin.$_$.ef;
  var org_jetbrains_compose_web_css_StyleSheet$stableprop_getter = kotlin_org_jetbrains_compose_html_html_core.$_$.g5;
  var Style = kotlin_org_jetbrains_compose_html_html_core.$_$.z5;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.k5;
  var padding = kotlin_org_jetbrains_compose_html_html_core.$_$.h5;
  var margin = kotlin_org_jetbrains_compose_html_html_core.$_$.z4;
  var boxSizing = kotlin_org_jetbrains_compose_html_html_core.$_$.y3;
  var StyleSheet = kotlin_org_jetbrains_compose_html_html_core.$_$.h3;
  var StyleSheet_init_$Init$ = kotlin_org_jetbrains_compose_html_html_core.$_$.b;
  var layer = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.x1;
  var initMetadataForObject = kotlin_kotlin.$_$.nb;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.ug;
  var toString = kotlin_kotlin.$_$.oc;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var getValue = kotlin_kotlin.$_$.k7;
  var getStringHashCode = kotlin_kotlin.$_$.gb;
  var mapCapacity = kotlin_kotlin.$_$.z7;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.t;
  var substringAfterLast = kotlin_kotlin.$_$.oe;
  var plus = kotlin_kotlin.$_$.h8;
  var equals = kotlin_kotlin.$_$.bb;
  var hashCode = kotlin_kotlin.$_$.hb;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var initMetadataForCompanion = kotlin_kotlin.$_$.jb;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var initMetadataForInterface = kotlin_kotlin.$_$.lb;
  var mutableStateMapOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k1;
  var A = kotlin_org_jetbrains_compose_html_html_core.$_$.t5;
  var ensureNotNull = kotlin_kotlin.$_$.lg;
  var isBlank = kotlin_kotlin.$_$.xd;
  var startsWith = kotlin_kotlin.$_$.ne;
  var endsWith = kotlin_kotlin.$_$.sd;
  var startsWith_0 = kotlin_kotlin.$_$.me;
  var dropLast = kotlin_kotlin.$_$.pd;
  var charSequenceLength = kotlin_kotlin.$_$.xa;
  var removePrefix = kotlin_kotlin.$_$.ee;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.og;
  var THROW_IAE = kotlin_kotlin.$_$.uf;
  var enumEntries = kotlin_kotlin.$_$.ma;
  var Enum = kotlin_kotlin.$_$.if;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.e1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.k;
  var joinToString = kotlin_kotlin.$_$.o7;
  var objectCreate = kotlin_kotlin.$_$.kc;
  var substringBefore = kotlin_kotlin.$_$.qe;
  var to = kotlin_kotlin.$_$.wg;
  var split = kotlin_kotlin.$_$.le;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.d1;
  var drop = kotlin_kotlin.$_$.qd;
  var first = kotlin_kotlin.$_$.ud;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.u;
  var split_0 = kotlin_kotlin.$_$.ke;
  var getOrNull = kotlin_kotlin.$_$.j7;
  var Exception = kotlin_kotlin.$_$.kf;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.j1;
  var captureStack = kotlin_kotlin.$_$.sa;
  var emptyMap = kotlin_kotlin.$_$.b7;
  var last = kotlin_kotlin.$_$.v7;
  var DynamicNode = kotlin_com_varabyte_kobweb_client_server_internal.$_$.a;
  var toRouteString = kotlin_com_varabyte_kobweb_client_server_internal.$_$.c;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.l;
  var KtMap = kotlin_kotlin.$_$.i5;
  var isInterface = kotlin_kotlin.$_$.wb;
  var Collection = kotlin_kotlin.$_$.w4;
  var DisposableEffectResult = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var DisposableEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j;
  var rememberComposableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var asReversed = kotlin_kotlin.$_$.f6;
  var substringAfter = kotlin_kotlin.$_$.pe;
  var RouteTree = kotlin_com_varabyte_kobweb_client_server_internal.$_$.b;
  var filter = kotlin_kotlin.$_$.gd;
  var map = kotlin_kotlin.$_$.jd;
  var androidx_compose_runtime_ProvidedValue$stableprop_getter = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var CompositionLocalProvider = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.n1;
  var listOf = kotlin_kotlin.$_$.y7;
  var removeSuffix = kotlin_kotlin.$_$.fe;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var contains = kotlin_kotlin.$_$.md;
  var contains_0 = kotlin_kotlin.$_$.nd;
  var toMutableMap = kotlin_kotlin.$_$.m9;
  var Text = kotlin_org_jetbrains_compose_html_html_core.$_$.b6;
  var Div = kotlin_org_jetbrains_compose_html_html_core.$_$.v5;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.i5;
  var width = kotlin_org_jetbrains_compose_html_html_core.$_$.r5;
  var get_vh = kotlin_org_jetbrains_compose_html_html_core.$_$.q5;
  var height = kotlin_org_jetbrains_compose_html_html_core.$_$.r4;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.j;
  var display = kotlin_org_jetbrains_compose_html_html_core.$_$.e4;
  var Companion_getInstance_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.q3;
  var alignItems = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j;
  var Companion_getInstance_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a4;
  var justifyContent = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.u1;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(ApiFetcher, 'ApiFetcher', VOID, VOID, VOID, [4, 5]);
  initMetadataForClass(App, 'App', VOID, VOID, [Annotation]);
  initMetadataForObject(DefaultStyleSheet, 'DefaultStyleSheet', VOID, StyleSheet);
  initMetadataForObject(AppGlobals, 'AppGlobals');
  initMetadataForClass(Page, 'Page', VOID, VOID, [Annotation]);
  initMetadataForClass(RouteInfo, 'RouteInfo');
  initMetadataForCompanion(Companion);
  initMetadataForClass(PageContext, 'PageContext');
  initMetadataForInterface(Data, 'Data');
  initMetadataForClass(MutableData, 'MutableData', MutableData, VOID, [Data]);
  initMetadataForClass(InitKobwebContext, 'InitKobwebContext');
  initMetadataForClass(InitRouteContext, 'InitRouteContext');
  initMetadataForInterface(OpenLinkStrategies, 'OpenLinkStrategies');
  initMetadataForInterface(KobwebConfig, 'KobwebConfig');
  initMetadataForClass(MutableKobwebConfig, 'MutableKobwebConfig', MutableKobwebConfig, VOID, [KobwebConfig]);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(MutableOpenLinkStrategies, 'MutableOpenLinkStrategies', MutableOpenLinkStrategies, VOID, [OpenLinkStrategies]);
  function prepend(path) {
    return this.prependTo_e25c5r_k$(path);
  }
  initMetadataForInterface(BasePath, 'BasePath');
  initMetadataForCompanion(Companion_1, VOID, [BasePath]);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(BasePathImpl, 'BasePathImpl', VOID, VOID, [BasePath]);
  initMetadataForClass(OpenLinkStrategy, 'OpenLinkStrategy', VOID, Enum);
  initMetadataForClass(PageData, 'PageData');
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(Route, 'Route');
  initMetadataForClass(RouteException, 'RouteException', VOID, Exception);
  initMetadataForClass(RouteEntry, 'RouteEntry');
  initMetadataForClass(_no_name_provided__qut3iv, VOID, VOID, VOID, [DisposableEffectResult]);
  initMetadataForClass(Router, 'Router', Router);
  initMetadataForClass(UpdateHistoryMode, 'UpdateHistoryMode', VOID, Enum);
  initMetadataForClass(RouteInterceptorScope, 'RouteInterceptorScope');
  initMetadataForObject(ComposableSingletons$RouterKt, 'ComposableSingletons$RouterKt');
  //endregion
  function get_api(_this__u8e3s4) {
    _init_properties_ApiFetcher_kt__epxlpv();
    var tmp0 = api$delegate;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('api', 1, tmp, _get_api_$ref_kewz4q(), null);
    return tmp0.get_value_j01efc_k$();
  }
  var api$delegate;
  var com_varabyte_kobweb_browser_ApiFetcher$stable;
  function _get_window__ax0zxh($this) {
    return $this.window_1;
  }
  function toResource($this, apiPath) {
    return Companion_getInstance_5().prependTo_e25c5r_k$('/api/' + trimStart(apiPath, charArrayOf([_Char___init__impl__6a9atx(47)])));
  }
  function HttpFetcher$_get_logOnError_$ref_m3da12(p0) {
    return function () {
      return p0.get_logOnError_4wpkhe_k$();
    };
  }
  function HttpFetcher$_set_logOnError_$ref_nenbwm(p0) {
    return function (_this__u8e3s4) {
      p0.set_logOnError_wi584t_k$(_this__u8e3s4);
      return Unit_getInstance();
    };
  }
  function ApiFetcher$_get_logOnError_$ref_5p87yk() {
    return function (p0) {
      return p0.get_logOnError_4wpkhe_k$();
    };
  }
  function ApiFetcher$_set_logOnError_$ref_jtv82w() {
    return function (p0, p1) {
      p0.set_logOnError_wi584t_k$(p1);
      return Unit_getInstance();
    };
  }
  function ApiFetcher$_get_logOnError_$ref_5p87yk_0() {
    return function (p0) {
      return p0.get_logOnError_4wpkhe_k$();
    };
  }
  function ApiFetcher$_set_logOnError_$ref_jtv82w_0() {
    return function (p0, p1) {
      p0.set_logOnError_wi584t_k$(p1);
      return Unit_getInstance();
    };
  }
  function ApiFetcher(window_0) {
    this.window_1 = window_0;
    var tmp = this;
    var tmp0 = get_http(this.window_1);
    var tmp_0 = KMutableProperty0;
    var tmp_1 = HttpFetcher$_get_logOnError_$ref_m3da12(tmp0);
    tmp.logOnError$delegate_1 = getPropertyCallableRef('logOnError', 0, tmp_0, tmp_1, HttpFetcher$_set_logOnError_$ref_nenbwm(tmp0));
  }
  protoOf(ApiFetcher).set_logOnError_wi584t_k$ = function (_set____db54di) {
    var tmp0 = this.logOnError$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = ApiFetcher$_get_logOnError_$ref_5p87yk_0();
    // Inline function 'kotlin.setValue' call
    getPropertyCallableRef('logOnError', 1, tmp, tmp_0, ApiFetcher$_set_logOnError_$ref_jtv82w_0());
    tmp0.set(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(ApiFetcher).get_logOnError_4wpkhe_k$ = function () {
    var tmp0 = this.logOnError$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = ApiFetcher$_get_logOnError_$ref_5p87yk();
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('logOnError', 1, tmp, tmp_0, ApiFetcher$_set_logOnError_$ref_jtv82w());
    return tmp0.get();
  };
  protoOf(ApiFetcher).delete_2rffrg_k$ = function (apiPath, headers, redirect, abortController, $completion) {
    return get_http(this.window_1).delete_2rffrg_k$(toResource(this, apiPath), headers, redirect, abortController, $completion);
  };
  protoOf(ApiFetcher).delete$default_f0j0c3_k$ = function (apiPath, headers, redirect, abortController, $completion, $super) {
    headers = headers === VOID ? FetchDefaults_getInstance().get_Headers_t2ylqb_k$() : headers;
    redirect = redirect === VOID ? FetchDefaults_getInstance().get_Redirect_rgkds5_k$() : redirect;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.delete_2rffrg_k$(apiPath, headers, redirect, abortController, $completion) : $super.delete_2rffrg_k$.call(this, apiPath, headers, redirect, abortController, $completion);
  };
  protoOf(ApiFetcher).tryDelete_5uhpdc_k$ = function (apiPath, headers, redirect, abortController, $completion) {
    return get_http(this.window_1).tryDelete_5uhpdc_k$(toResource(this, apiPath), headers, redirect, abortController, $completion);
  };
  protoOf(ApiFetcher).tryDelete$default_13oz4p_k$ = function (apiPath, headers, redirect, abortController, $completion, $super) {
    headers = headers === VOID ? FetchDefaults_getInstance().get_Headers_t2ylqb_k$() : headers;
    redirect = redirect === VOID ? FetchDefaults_getInstance().get_Redirect_rgkds5_k$() : redirect;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.tryDelete_5uhpdc_k$(apiPath, headers, redirect, abortController, $completion) : $super.tryDelete_5uhpdc_k$.call(this, apiPath, headers, redirect, abortController, $completion);
  };
  protoOf(ApiFetcher).get_cn1crt_k$ = function (apiPath, headers, redirect, abortController, $completion) {
    return get_http(this.window_1).get_cn1crt_k$(toResource(this, apiPath), headers, redirect, abortController, $completion);
  };
  protoOf(ApiFetcher).get$default_59b6wu_k$ = function (apiPath, headers, redirect, abortController, $completion, $super) {
    headers = headers === VOID ? FetchDefaults_getInstance().get_Headers_t2ylqb_k$() : headers;
    redirect = redirect === VOID ? FetchDefaults_getInstance().get_Redirect_rgkds5_k$() : redirect;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.get_cn1crt_k$(apiPath, headers, redirect, abortController, $completion) : $super.get_cn1crt_k$.call(this, apiPath, headers, redirect, abortController, $completion);
  };
  protoOf(ApiFetcher).tryGet_ke4mjp_k$ = function (apiPath, headers, redirect, abortController, $completion) {
    return get_http(this.window_1).tryGet_ke4mjp_k$(toResource(this, apiPath), headers, redirect, abortController, $completion);
  };
  protoOf(ApiFetcher).tryGet$default_43jnb8_k$ = function (apiPath, headers, redirect, abortController, $completion, $super) {
    headers = headers === VOID ? FetchDefaults_getInstance().get_Headers_t2ylqb_k$() : headers;
    redirect = redirect === VOID ? FetchDefaults_getInstance().get_Redirect_rgkds5_k$() : redirect;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.tryGet_ke4mjp_k$(apiPath, headers, redirect, abortController, $completion) : $super.tryGet_ke4mjp_k$.call(this, apiPath, headers, redirect, abortController, $completion);
  };
  protoOf(ApiFetcher).head_kwlhpd_k$ = function (apiPath, headers, redirect, abortController, $completion) {
    return get_http(this.window_1).head_kwlhpd_k$(toResource(this, apiPath), headers, redirect, abortController, $completion);
  };
  protoOf(ApiFetcher).head$default_avyfc_k$ = function (apiPath, headers, redirect, abortController, $completion, $super) {
    headers = headers === VOID ? FetchDefaults_getInstance().get_Headers_t2ylqb_k$() : headers;
    redirect = redirect === VOID ? FetchDefaults_getInstance().get_Redirect_rgkds5_k$() : redirect;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.head_kwlhpd_k$(apiPath, headers, redirect, abortController, $completion) : $super.head_kwlhpd_k$.call(this, apiPath, headers, redirect, abortController, $completion);
  };
  protoOf(ApiFetcher).tryHead_ehzohx_k$ = function (apiPath, headers, redirect, abortController, $completion) {
    return get_http(this.window_1).tryHead_ehzohx_k$(toResource(this, apiPath), headers, redirect, abortController, $completion);
  };
  protoOf(ApiFetcher).tryHead$default_qm7x2c_k$ = function (apiPath, headers, redirect, abortController, $completion, $super) {
    headers = headers === VOID ? FetchDefaults_getInstance().get_Headers_t2ylqb_k$() : headers;
    redirect = redirect === VOID ? FetchDefaults_getInstance().get_Redirect_rgkds5_k$() : redirect;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.tryHead_ehzohx_k$(apiPath, headers, redirect, abortController, $completion) : $super.tryHead_ehzohx_k$.call(this, apiPath, headers, redirect, abortController, $completion);
  };
  protoOf(ApiFetcher).options_i36ycf_k$ = function (apiPath, headers, redirect, abortController, $completion) {
    return get_http(this.window_1).options_i36ycf_k$(toResource(this, apiPath), headers, redirect, abortController, $completion);
  };
  protoOf(ApiFetcher).options$default_lodypm_k$ = function (apiPath, headers, redirect, abortController, $completion, $super) {
    headers = headers === VOID ? FetchDefaults_getInstance().get_Headers_t2ylqb_k$() : headers;
    redirect = redirect === VOID ? FetchDefaults_getInstance().get_Redirect_rgkds5_k$() : redirect;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.options_i36ycf_k$(apiPath, headers, redirect, abortController, $completion) : $super.options_i36ycf_k$.call(this, apiPath, headers, redirect, abortController, $completion);
  };
  protoOf(ApiFetcher).tryOptions_pg8xyl_k$ = function (apiPath, headers, redirect, abortController, $completion) {
    return get_http(this.window_1).tryOptions_pg8xyl_k$(toResource(this, apiPath), headers, redirect, abortController, $completion);
  };
  protoOf(ApiFetcher).tryOptions$default_y8oykc_k$ = function (apiPath, headers, redirect, abortController, $completion, $super) {
    headers = headers === VOID ? FetchDefaults_getInstance().get_Headers_t2ylqb_k$() : headers;
    redirect = redirect === VOID ? FetchDefaults_getInstance().get_Redirect_rgkds5_k$() : redirect;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.tryOptions_pg8xyl_k$(apiPath, headers, redirect, abortController, $completion) : $super.tryOptions_pg8xyl_k$.call(this, apiPath, headers, redirect, abortController, $completion);
  };
  protoOf(ApiFetcher).patch_3v7p74_k$ = function (apiPath, headers, body, redirect, abortController, $completion) {
    return get_http(this.window_1).patch_3v7p74_k$(toResource(this, apiPath), headers, body, redirect, abortController, $completion);
  };
  protoOf(ApiFetcher).patch$default_2u6h2w_k$ = function (apiPath, headers, body, redirect, abortController, $completion, $super) {
    headers = headers === VOID ? FetchDefaults_getInstance().get_Headers_t2ylqb_k$() : headers;
    body = body === VOID ? null : body;
    redirect = redirect === VOID ? FetchDefaults_getInstance().get_Redirect_rgkds5_k$() : redirect;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.patch_3v7p74_k$(apiPath, headers, body, redirect, abortController, $completion) : $super.patch_3v7p74_k$.call(this, apiPath, headers, body, redirect, abortController, $completion);
  };
  protoOf(ApiFetcher).tryPatch_owll70_k$ = function (apiPath, headers, body, redirect, abortController, $completion) {
    return get_http(this.window_1).tryPatch_owll70_k$(toResource(this, apiPath), headers, body, redirect, abortController, $completion);
  };
  protoOf(ApiFetcher).tryPatch$default_whzjd6_k$ = function (apiPath, headers, body, redirect, abortController, $completion, $super) {
    headers = headers === VOID ? FetchDefaults_getInstance().get_Headers_t2ylqb_k$() : headers;
    body = body === VOID ? null : body;
    redirect = redirect === VOID ? FetchDefaults_getInstance().get_Redirect_rgkds5_k$() : redirect;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.tryPatch_owll70_k$(apiPath, headers, body, redirect, abortController, $completion) : $super.tryPatch_owll70_k$.call(this, apiPath, headers, body, redirect, abortController, $completion);
  };
  protoOf(ApiFetcher).post_sc77oo_k$ = function (apiPath, headers, body, redirect, abortController, $completion) {
    return get_http(this.window_1).post_sc77oo_k$(toResource(this, apiPath), headers, body, redirect, abortController, $completion);
  };
  protoOf(ApiFetcher).post$default_wc4cpc_k$ = function (apiPath, headers, body, redirect, abortController, $completion, $super) {
    headers = headers === VOID ? FetchDefaults_getInstance().get_Headers_t2ylqb_k$() : headers;
    body = body === VOID ? null : body;
    redirect = redirect === VOID ? FetchDefaults_getInstance().get_Redirect_rgkds5_k$() : redirect;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.post_sc77oo_k$(apiPath, headers, body, redirect, abortController, $completion) : $super.post_sc77oo_k$.call(this, apiPath, headers, body, redirect, abortController, $completion);
  };
  protoOf(ApiFetcher).tryPost_tmk9za_k$ = function (apiPath, headers, body, redirect, abortController, $completion) {
    return get_http(this.window_1).tryPost_tmk9za_k$(toResource(this, apiPath), headers, body, redirect, abortController, $completion);
  };
  protoOf(ApiFetcher).tryPost$default_2jrokc_k$ = function (apiPath, headers, body, redirect, abortController, $completion, $super) {
    headers = headers === VOID ? FetchDefaults_getInstance().get_Headers_t2ylqb_k$() : headers;
    body = body === VOID ? null : body;
    redirect = redirect === VOID ? FetchDefaults_getInstance().get_Redirect_rgkds5_k$() : redirect;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.tryPost_tmk9za_k$(apiPath, headers, body, redirect, abortController, $completion) : $super.tryPost_tmk9za_k$.call(this, apiPath, headers, body, redirect, abortController, $completion);
  };
  protoOf(ApiFetcher).put_5f231l_k$ = function (apiPath, headers, body, redirect, abortController, $completion) {
    return get_http(this.window_1).put_5f231l_k$(toResource(this, apiPath), headers, body, redirect, abortController, $completion);
  };
  protoOf(ApiFetcher).put$default_r18kf5_k$ = function (apiPath, headers, body, redirect, abortController, $completion, $super) {
    headers = headers === VOID ? FetchDefaults_getInstance().get_Headers_t2ylqb_k$() : headers;
    body = body === VOID ? null : body;
    redirect = redirect === VOID ? FetchDefaults_getInstance().get_Redirect_rgkds5_k$() : redirect;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.put_5f231l_k$(apiPath, headers, body, redirect, abortController, $completion) : $super.put_5f231l_k$.call(this, apiPath, headers, body, redirect, abortController, $completion);
  };
  protoOf(ApiFetcher).tryPut_ar7nhv_k$ = function (apiPath, headers, body, redirect, abortController, $completion) {
    return get_http(this.window_1).tryPut_ar7nhv_k$(toResource(this, apiPath), headers, body, redirect, abortController, $completion);
  };
  protoOf(ApiFetcher).tryPut$default_7v8471_k$ = function (apiPath, headers, body, redirect, abortController, $completion, $super) {
    headers = headers === VOID ? FetchDefaults_getInstance().get_Headers_t2ylqb_k$() : headers;
    body = body === VOID ? null : body;
    redirect = redirect === VOID ? FetchDefaults_getInstance().get_Redirect_rgkds5_k$() : redirect;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.tryPut_ar7nhv_k$(apiPath, headers, body, redirect, abortController, $completion) : $super.tryPut_ar7nhv_k$.call(this, apiPath, headers, body, redirect, abortController, $completion);
  };
  function api$delegate$lambda() {
    _init_properties_ApiFetcher_kt__epxlpv();
    return new ApiFetcher(window);
  }
  function _get_api_$ref_kewz4q() {
    return function (p0) {
      return get_api(p0);
    };
  }
  var properties_initialized_ApiFetcher_kt_nwc4x;
  function _init_properties_ApiFetcher_kt__epxlpv() {
    if (!properties_initialized_ApiFetcher_kt_nwc4x) {
      properties_initialized_ApiFetcher_kt_nwc4x = true;
      api$delegate = lazy(api$delegate$lambda);
      com_varabyte_kobweb_browser_ApiFetcher$stable = 8;
    }
  }
  var com_varabyte_kobweb_core_DefaultStyleSheet$stable;
  function App() {
  }
  protoOf(App).equals = function (other) {
    if (!(other instanceof App))
      return false;
    other instanceof App || THROW_CCE();
    return true;
  };
  protoOf(App).hashCode = function () {
    return 0;
  };
  protoOf(App).toString = function () {
    return '@com.varabyte.kobweb.core.App(' + ')';
  };
  function KobwebApp(content, $composer, $changed) {
    _init_properties_App_kt__fk8usv();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1293008755);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 3) === 2), $dirty & 1)) {
      var tmp0 = DefaultStyleSheet_getInstance();
      var tmp2 = $composer_0;
      // Inline function 'org.jetbrains.compose.web.css.Style' call
      org_jetbrains_compose_web_css_StyleSheet$stableprop_getter();
      var $composer_1 = tmp2;
      $composer_1.startReplaceGroup_5hh8aj_k$(-1196466140);
      Style(null, tmp0.get_cssRules_jdoznh_k$(), $composer_1, 0, 1);
      $composer_1.endReplaceGroup_ek144q_k$();
      content($composer_0, 14 & $dirty);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(KobwebApp$lambda(content, $changed));
    }
  }
  function DefaultStyleSheet$lambda($this$layer) {
    $this$layer.style_qsvaqb_k$('html, body', DefaultStyleSheet$lambda$lambda);
    $this$layer.style_qsvaqb_k$('*', DefaultStyleSheet$lambda$lambda_0);
    return Unit_getInstance();
  }
  function DefaultStyleSheet$lambda$lambda($this$style) {
    padding($this$style, [get_px(0)]);
    margin($this$style, [get_px(0)]);
    return Unit_getInstance();
  }
  function DefaultStyleSheet$lambda$lambda_0($this$style) {
    boxSizing($this$style, 'border-box');
    return Unit_getInstance();
  }
  function DefaultStyleSheet() {
    DefaultStyleSheet_instance = this;
    StyleSheet_init_$Init$(VOID, VOID, this);
    layer(this, 'reset', DefaultStyleSheet$lambda);
  }
  protoOf(DefaultStyleSheet).style_r4zx12_k$ = function (selector, cssRule) {
    return this.style_pgxmpo_k$(selector, cssRule);
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
      return Unit_getInstance();
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
  function _set__values__wkt36s($this, _set____db54di) {
    $this._values_1 = _set____db54di;
  }
  function _get__values__6yksts($this) {
    var tmp = $this._values_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('_values');
    }
  }
  function AppGlobals() {
    AppGlobals_instance = this;
  }
  protoOf(AppGlobals).initialize_8ufbf0_k$ = function (values) {
    // Inline function 'kotlin.check' call
    if (!!!(this._values_1 == null)) {
      var message = 'Cannot initialize AppGlobals more than once';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this._values_1 = values;
  };
  protoOf(AppGlobals).get_6bo4tg_k$ = function (key) {
    return _get__values__6yksts(this).get_wei43m_k$(key);
  };
  protoOf(AppGlobals).getValue_r24mvz_k$ = function (key) {
    return getValue(_get__values__6yksts(this), key);
  };
  var AppGlobals_instance;
  function AppGlobals_getInstance() {
    if (AppGlobals_instance == null)
      new AppGlobals();
    return AppGlobals_instance;
  }
  function Page(routeOverride) {
    routeOverride = routeOverride === VOID ? '' : routeOverride;
    this.routeOverride_1 = routeOverride;
  }
  protoOf(Page).get_routeOverride_6ld14k_k$ = function () {
    return this.routeOverride_1;
  };
  protoOf(Page).equals = function (other) {
    if (!(other instanceof Page))
      return false;
    var tmp0_other_with_cast = other instanceof Page ? other : THROW_CCE();
    if (!(this.routeOverride_1 === tmp0_other_with_cast.routeOverride_1))
      return false;
    return true;
  };
  protoOf(Page).hashCode = function () {
    return imul(getStringHashCode('routeOverride'), 127) ^ getStringHashCode(this.routeOverride_1);
  };
  protoOf(Page).toString = function () {
    return '@com.varabyte.kobweb.core.Page(' + 'routeOverride=' + this.routeOverride_1 + ')';
  };
  function get_PageContextLocal() {
    _init_properties_PageContext_kt__u2hiem();
    return PageContextLocal;
  }
  var PageContextLocal;
  var com_varabyte_kobweb_core_RouteInfo$stable;
  var com_varabyte_kobweb_core_PageContext$stable;
  function _get_route__bsf68o($this) {
    return $this.route_1;
  }
  function RouteInfo(route, dynamicParams) {
    this.route_1 = route;
    var tmp = this;
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination = LinkedHashMap_init_$Create$(mapCapacity(dynamicParams.get_size_woubt6_k$()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s = dynamicParams.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      var tmp_0 = element.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var value = element.get_value_j01efc_k$();
      var tmp$ret$2 = decodeURIComponent(value);
      destination.put_4fpzoq_k$(tmp_0, tmp$ret$2);
    }
    tmp.dynamicParams_1 = destination;
    this.slug_1 = substringAfterLast(this.route_1.get_path_wos8ry_k$(), _Char___init__impl__6a9atx(47));
    this.path_1 = this.route_1.get_path_wos8ry_k$();
    this.params_1 = plus(this.route_1.get_queryParams_8o6v3v_k$(), dynamicParams);
    this.queryParams_1 = this.route_1.get_queryParams_8o6v3v_k$();
    this.fragment_1 = this.route_1.get_fragment_bxnb4p_k$();
  }
  protoOf(RouteInfo).get_dynamicParams_5ec6f0_k$ = function () {
    return this.dynamicParams_1;
  };
  protoOf(RouteInfo).get_origin_hq9xkf_k$ = function () {
    return window.location.origin;
  };
  protoOf(RouteInfo).get_slug_woudx0_k$ = function () {
    return this.slug_1;
  };
  protoOf(RouteInfo).get_path_wos8ry_k$ = function () {
    return this.path_1;
  };
  protoOf(RouteInfo).get_params_hy4oen_k$ = function () {
    return this.params_1;
  };
  protoOf(RouteInfo).get_queryParams_8o6v3v_k$ = function () {
    return this.queryParams_1;
  };
  protoOf(RouteInfo).get_fragment_bxnb4p_k$ = function () {
    return this.fragment_1;
  };
  protoOf(RouteInfo).get_pathQueryAndFragment_8mv2zx_k$ = function () {
    return this.route_1.toString();
  };
  protoOf(RouteInfo).toString = function () {
    return this.get_pathQueryAndFragment_8mv2zx_k$();
  };
  protoOf(RouteInfo).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (other instanceof RouteInfo) {
      tmp_1 = other.path_1 === this.path_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals(other.params_1, this.params_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.fragment_1 == this.fragment_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(RouteInfo).hashCode = function () {
    var result = getStringHashCode(this.path_1);
    result = imul(31, result) + hashCode(this.params_1) | 0;
    var tmp = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.fragment_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(RouteInfo).copy_bbhpbo_k$ = function (path, queryParams, fragment, dynamicParams) {
    return new RouteInfo(Route_init_$Create$(path, queryParams, fragment), dynamicParams);
  };
  protoOf(RouteInfo).copy$default_hmqeol_k$ = function (path, queryParams, fragment, dynamicParams, $super) {
    path = path === VOID ? this.route_1.get_path_wos8ry_k$() : path;
    queryParams = queryParams === VOID ? this.route_1.get_queryParams_8o6v3v_k$() : queryParams;
    fragment = fragment === VOID ? this.route_1.get_fragment_bxnb4p_k$() : fragment;
    dynamicParams = dynamicParams === VOID ? this.dynamicParams_1 : dynamicParams;
    return $super === VOID ? this.copy_bbhpbo_k$(path, queryParams, fragment, dynamicParams) : $super.copy_bbhpbo_k$.call(this, path, queryParams, fragment, dynamicParams);
  };
  function rememberPageContext($composer, $changed) {
    _init_properties_PageContext_kt__u2hiem();
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_PageContextLocal();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_ebzcrh_k$(this_0);
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
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).set_instance_la0v6y_k$ = function (_set____db54di) {
    this.instance_1 = _set____db54di;
  };
  protoOf(Companion).get_instance_vwsfsk_k$ = function () {
    var tmp = this.instance_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('instance');
    }
  };
  protoOf(Companion).init_d5yddb_k$ = function (router, data) {
    this.instance_1 = new PageContext(router, data);
  };
  var Companion_instance;
  function Companion_getInstance_3() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function PageContext(router, data) {
    Companion_getInstance_3();
    this.router_1 = router;
    this.data_1 = data;
    this.routeState_1 = mutableStateOf(null);
  }
  protoOf(PageContext).get_router_j3zccy_k$ = function () {
    return this.router_1;
  };
  protoOf(PageContext).get_data_wokkxf_k$ = function () {
    return this.data_1;
  };
  protoOf(PageContext).get_routeState_3gc4kf_k$ = function () {
    return this.routeState_1;
  };
  protoOf(PageContext).set_route_q85h3b_k$ = function (value) {
    this.routeState_1.set_value_v1vabv_k$(value);
  };
  protoOf(PageContext).get_route_iy3cio_k$ = function () {
    var tmp0_elvis_lhs = this.routeState_1.get_value_j01efc_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'PageContext route info is only valid within a @Page composable';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
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
  function Data() {
  }
  function _get_map__e6co1h($this) {
    return $this.map_1;
  }
  function MutableData() {
    this.map_1 = mutableStateMapOf();
  }
  protoOf(MutableData).set_wb2scb_k$ = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    this.map_1.put_4fpzoq_k$(key, value);
  };
  protoOf(MutableData).get_rskua5_k$ = function (key) {
    var tmp = this.map_1.get_wei43m_k$(key);
    return !(tmp == null) ? tmp : null;
  };
  protoOf(MutableData).clear_j9egeb_k$ = function () {
    this.map_1.clear_j9egeb_k$();
  };
  var com_varabyte_kobweb_core_init_InitKobwebContext$stable;
  function initKobweb(router, init) {
    var config = new MutableKobwebConfig();
    init(new InitKobwebContext(config, router));
    set_MutableKobwebConfigInstance(config);
  }
  function InitKobwebContext(config, router) {
    this.config_1 = config;
    this.router_1 = router;
  }
  protoOf(InitKobwebContext).get_config_c0698r_k$ = function () {
    return this.config_1;
  };
  protoOf(InitKobwebContext).get_router_j3zccy_k$ = function () {
    return this.router_1;
  };
  var com_varabyte_kobweb_core_init_InitRouteContext$stable;
  function InitRouteContext(route, data) {
    this.route_1 = route;
    this.data_1 = data;
  }
  protoOf(InitRouteContext).get_route_iy3cio_k$ = function () {
    return this.route_1;
  };
  protoOf(InitRouteContext).get_data_wokkxf_k$ = function () {
    return this.data_1;
  };
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
  function OpenLinkStrategies() {
  }
  function MutableKobwebConfig() {
    this.openLinkStrategies_1 = new MutableOpenLinkStrategies();
  }
  protoOf(MutableKobwebConfig).get_openLinkStrategies_sr8wv2_k$ = function () {
    return this.openLinkStrategies_1;
  };
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).get_Instance_ljxvgi_k$ = function () {
    return get_MutableKobwebConfigInstance();
  };
  var Companion_instance_0;
  function Companion_getInstance_4() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function KobwebConfig() {
  }
  function MutableOpenLinkStrategies(internal, external) {
    internal = internal === VOID ? OpenLinkStrategy_IN_PLACE_getInstance() : internal;
    external = external === VOID ? OpenLinkStrategy_IN_NEW_TAB_getInstance() : external;
    this.internal_1 = internal;
    this.external_1 = external;
  }
  protoOf(MutableOpenLinkStrategies).set_internal_x2k4j8_k$ = function (_set____db54di) {
    this.internal_1 = _set____db54di;
  };
  protoOf(MutableOpenLinkStrategies).get_internal_mdbuyi_k$ = function () {
    return this.internal_1;
  };
  protoOf(MutableOpenLinkStrategies).set_external_q3km6y_k$ = function (_set____db54di) {
    this.external_1 = _set____db54di;
  };
  protoOf(MutableOpenLinkStrategies).get_external_945310_k$ = function () {
    return this.external_1;
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
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1682374411);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(href) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0) {
      var tmp;
      var tmp_0 = $composer_0;
      var tmpEnum = openInternalLinksStrategy_0._v;
      if (tmp_0.changed_kpusro_k$(tmpEnum == null ? -1 : tmpEnum.get_ordinal_ip24qg_k$())) {
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
      if (tmp_2.changed_kpusro_k$(tmpEnum_0 == null ? -1 : tmpEnum_0.get_ordinal_ip24qg_k$())) {
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
      if (tmp_4.changed_kpusro_k$(tmpEnum_1 == null ? -1 : tmpEnum_1.get_ordinal_ip24qg_k$())) {
        tmp_3 = 16384;
      } else {
        tmp_3 = 8192;
      }
      $dirty = $dirty | tmp_3;
    }
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content_0._v) ? 131072 : 65536);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 74899) === 74898), $dirty & 1)) {
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
      var tmp_5 = Companion_getInstance_5().prependTo_e25c5r_k$(href);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!(!!(!!(!!(($dirty & 112) === 32 | ($dirty & 896) === 256) | ($dirty & 7168) === 2048) | $composer_0.changedInstance_s1wkiy_k$(ctx)) | ($dirty & 14) === 4) | ($dirty & 57344) === 16384);
      // Inline function 'kotlin.let' call
      var it = tmp0.rememberedValue_4dg93v_k$();
      var tmp_6;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = Anchor$lambda(attrs_0, openInternalLinksStrategy_0, openExternalLinksStrategy_0, ctx, href, updateHistoryMode_0);
        tmp0.updateRememberedValue_l1wh71_k$(value);
        tmp_6 = value;
      } else {
        tmp_6 = it;
      }
      var tmp_7 = tmp_6;
      var tmp$ret$3 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      A(tmp_5, tmp$ret$3, content_0._v, $composer_0, 896 & $dirty >> 9, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Anchor$lambda_0(href, attrs_0, openInternalLinksStrategy_0, openExternalLinksStrategy_0, updateHistoryMode_0, content_0, $changed, $default));
    }
  }
  function Anchor$lambda$lambda($openInternalLinksStrategy, $openExternalLinksStrategy, $ctx, $href, $updateHistoryMode) {
    return function (evt) {
      var tmp0_elvis_lhs = $openInternalLinksStrategy._v;
      var openInternalLinksStrategy = tmp0_elvis_lhs == null ? toOpenLinkStrategy(evt, Companion_getInstance_4().get_Instance_ljxvgi_k$().get_openLinkStrategies_sr8wv2_k$().get_internal_mdbuyi_k$()) : tmp0_elvis_lhs;
      var tmp1_elvis_lhs = $openExternalLinksStrategy._v;
      var openExternalLinksStrategy = tmp1_elvis_lhs == null ? toOpenLinkStrategy(evt, Companion_getInstance_4().get_Instance_ljxvgi_k$().get_openLinkStrategies_sr8wv2_k$().get_external_945310_k$()) : tmp1_elvis_lhs;
      var tmp = $ctx.get_router_j3zccy_k$();
      var tmp2_elvis_lhs = $updateHistoryMode._v;
      tmp.navigateTo_5oprea_k$($href, tmp2_elvis_lhs == null ? UpdateHistoryMode_PUSH_getInstance() : tmp2_elvis_lhs, openInternalLinksStrategy, openExternalLinksStrategy);
      evt.preventDefault_xs6po9_k$();
      evt.stopPropagation_5qf8uy_k$();
      return Unit_getInstance();
    };
  }
  function Anchor$lambda($attrs, $openInternalLinksStrategy, $openExternalLinksStrategy, $ctx, $href, $updateHistoryMode) {
    return function ($this$A) {
      var tmp;
      if (!($attrs._v == null)) {
        tmp = $attrs._v($this$A);
      }
      $this$A.onClick_q9cds6_k$(Anchor$lambda$lambda($openInternalLinksStrategy, $openExternalLinksStrategy, $ctx, $href, $updateHistoryMode));
      return Unit_getInstance();
    };
  }
  function Anchor$lambda_0($href, $attrs, $openInternalLinksStrategy, $openExternalLinksStrategy, $updateHistoryMode, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Anchor($href, $attrs._v, $openInternalLinksStrategy._v, $openExternalLinksStrategy._v, $updateHistoryMode._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  var com_varabyte_kobweb_navigation_BasePathImpl$stable;
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).set_wjk6wo_k$ = function (value) {
    Companion_getInstance_6().set__instance_esdryr_k$(new BasePathImpl(value));
  };
  protoOf(Companion_1).get_value_j01efc_k$ = function () {
    return Companion_getInstance_6().get_instance_mmff6q_k$().value_1;
  };
  protoOf(Companion_1).prependTo_e25c5r_k$ = function (path) {
    return Companion_getInstance_6().get_instance_mmff6q_k$().prependTo_e25c5r_k$(path);
  };
  var Companion_instance_1;
  function Companion_getInstance_5() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function BasePath() {
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this._instance_1 = null;
  }
  protoOf(Companion_2).set__instance_esdryr_k$ = function (value) {
    // Inline function 'kotlin.check' call
    if (!(this._instance_1 == null)) {
      var message = 'Cannot overwrite base path once set';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this._instance_1 = value;
  };
  protoOf(Companion_2).get__instance_j6x8p7_k$ = function () {
    if (this._instance_1 == null) {
      this._instance_1 = new BasePathImpl('');
    }
    return this._instance_1;
  };
  protoOf(Companion_2).get_instance_mmff6q_k$ = function () {
    return ensureNotNull(this.get__instance_j6x8p7_k$());
  };
  var Companion_instance_2;
  function Companion_getInstance_6() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function BasePathImpl(value) {
    Companion_getInstance_6();
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
    tmp.value_1 = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
  }
  protoOf(BasePathImpl).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(BasePathImpl).prependTo_e25c5r_k$ = function (path) {
    if (isBlank(this.value_1))
      return path;
    if (!startsWith_0(path, '/'))
      return path;
    return dropLast(this.value_1, 1) + path;
  };
  protoOf(BasePathImpl).toString = function () {
    return this.value_1;
  };
  function remove(_this__u8e3s4, path) {
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    var this_0 = _this__u8e3s4.get_value_j01efc_k$();
    if (charSequenceLength(this_0) > 0) {
      tmp = removePrefix(path, dropLast(_this__u8e3s4.get_value_j01efc_k$(), 1));
    } else {
      tmp = path;
    }
    return tmp;
  }
  function prependIf(_this__u8e3s4, condition, path) {
    return condition ? _this__u8e3s4.prependTo_e25c5r_k$(path) : path;
  }
  function open(_this__u8e3s4, href, strategy) {
    switch (strategy.get_ordinal_ip24qg_k$()) {
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
    return _this__u8e3s4.get_ctrlKey_jfc6q3_k$() || _this__u8e3s4.get_shiftKey_ujdkqu_k$() ? OpenLinkStrategy_IN_NEW_TAB_getInstance() : default_0;
  }
  var OpenLinkStrategy_IN_PLACE_instance;
  var OpenLinkStrategy_IN_NEW_TAB_instance;
  function values() {
    return [OpenLinkStrategy_IN_PLACE_getInstance(), OpenLinkStrategy_IN_NEW_TAB_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'IN_PLACE':
        return OpenLinkStrategy_IN_PLACE_getInstance();
      case 'IN_NEW_TAB':
        return OpenLinkStrategy_IN_NEW_TAB_getInstance();
      default:
        OpenLinkStrategy_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var OpenLinkStrategy_entriesInitialized;
  function OpenLinkStrategy_initEntries() {
    if (OpenLinkStrategy_entriesInitialized)
      return Unit_getInstance();
    OpenLinkStrategy_entriesInitialized = true;
    OpenLinkStrategy_IN_PLACE_instance = new OpenLinkStrategy('IN_PLACE', 0);
    OpenLinkStrategy_IN_NEW_TAB_instance = new OpenLinkStrategy('IN_NEW_TAB', 1);
  }
  var $ENTRIES;
  function OpenLinkStrategy(name, ordinal) {
    Enum.call(this, name, ordinal);
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
    this.pageMethod_1 = pageMethod;
    this.routeInfo_1 = routeInfo;
  }
  protoOf(PageData).get_pageMethod_1yegx3_k$ = function () {
    return this.pageMethod_1;
  };
  protoOf(PageData).get_routeInfo_ba59f2_k$ = function () {
    return this.routeInfo_1;
  };
  var com_varabyte_kobweb_navigation_RouteException$stable;
  var com_varabyte_kobweb_navigation_Route$stable;
  function _get_pathQueryAndFragment__53z9ax($this) {
    return $this.pathQueryAndFragment_1;
  }
  function Route_init_$Init$(path, queryParams, fragment, $this) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.append_22ad7x_k$(path);
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!queryParams.isEmpty_y1axqb_k$()) {
      this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(63));
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(queryParams.get_size_woubt6_k$());
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = queryParams.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var item = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'kotlin.collections.component1' call
        var key = item.get_key_18j28a_k$();
        // Inline function 'kotlin.collections.component2' call
        var value = item.get_value_j01efc_k$();
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.apply' call
        var this_1 = StringBuilder_init_$Create$();
        this_1.append_22ad7x_k$(key);
        // Inline function 'kotlin.text.isNotEmpty' call
        if (charSequenceLength(value) > 0) {
          this_1.append_am5a4z_k$(_Char___init__impl__6a9atx(61));
          this_1.append_22ad7x_k$(value);
        }
        var tmp$ret$8 = this_1.toString();
        destination.add_utx5q5_k$(tmp$ret$8);
      }
      this_0.append_22ad7x_k$(joinToString(destination, '&'));
    }
    if (!(fragment == null)) {
      this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(35));
      this_0.append_22ad7x_k$(fragment);
    }
    var tmp$ret$13 = this_0.toString();
    Route.call($this, tmp$ret$13);
    return $this;
  }
  function Route_init_$Create$(path, queryParams, fragment) {
    return Route_init_$Init$(path, queryParams, fragment, objectCreate(protoOf(Route)));
  }
  function Companion_3() {
    Companion_instance_3 = this;
  }
  protoOf(Companion_3).partition_9jxcnk_k$ = function (pathQueryAndFragment) {
    var pathPart = substringBefore(substringBefore(pathQueryAndFragment, _Char___init__impl__6a9atx(63)), _Char___init__impl__6a9atx(35));
    return to(pathPart, removePrefix(pathQueryAndFragment, pathPart));
  };
  protoOf(Companion_3).normalizeSlashes_d036g4_k$ = function (url) {
    // Inline function 'kotlin.let' call
    var splitResult = split(url, ['://'], VOID, 2);
    var _destruct__k2r9zo = splitResult.get_size_woubt6_k$() === 1 ? to('', splitResult.get_c1px32_k$(0)) : to(splitResult.get_c1px32_k$(0) + '://', trimStart(splitResult.get_c1px32_k$(1), charArrayOf([_Char___init__impl__6a9atx(47)])));
    var origin = _destruct__k2r9zo.component1_7eebsc_k$();
    var rest = _destruct__k2r9zo.component2_7eebsb_k$();
    var _destruct__k2r9zo_0 = this.partition_9jxcnk_k$(rest);
    var path = _destruct__k2r9zo_0.component1_7eebsc_k$();
    var queryAndFragment = _destruct__k2r9zo_0.component2_7eebsb_k$();
    // Inline function 'kotlin.text.replace' call
    return origin + Regex_init_$Create$('//+').replace_1ix0wf_k$(path, '/') + queryAndFragment;
  };
  protoOf(Companion_3).isRoute_nlgap1_k$ = function (path) {
    return !(this.tryCreate_50aflp_k$(path) == null);
  };
  protoOf(Companion_3).tryCreate_50aflp_k$ = function (path) {
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
  protoOf(Companion_3).fromUrl_6grbna_k$ = function (url) {
    var tmp0_elvis_lhs = this.tryCreate_50aflp_k$(removePrefix(url.href, url.origin));
    return tmp0_elvis_lhs == null ? new Route('') : tmp0_elvis_lhs;
  };
  var Companion_instance_3;
  function Companion_getInstance_7() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function _get_url__e6i4g2($this) {
    return $this.url_1;
  }
  function Route(pathQueryAndFragment) {
    Companion_getInstance_7();
    this.pathQueryAndFragment_1 = Companion_getInstance_7().normalizeSlashes_d036g4_k$(pathQueryAndFragment);
    var tmp;
    try {
      new URL(this.pathQueryAndFragment_1);
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
    this.url_1 = new URL(this.pathQueryAndFragment_1, 'http://unused.com');
    var isAbsolute = startsWith_0(this.pathQueryAndFragment_1, '/');
    var tmp_1 = this;
    var tmp_2;
    if (isAbsolute) {
      tmp_2 = this.url_1.pathname;
    } else {
      // Inline function 'kotlin.also' call
      var this_0 = drop(this.url_1.pathname, 1);
      // Inline function 'kotlin.check' call
      if (!(first(this.url_1.pathname) === _Char___init__impl__6a9atx(47))) {
        throw IllegalStateException_init_$Create$('Check failed.');
      }
      tmp_2 = this_0;
    }
    tmp_1.path_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.apply' call
    var this_1 = LinkedHashMap_init_$Create$_0();
    $l$block: {
      // Inline function 'kotlin.text.isEmpty' call
      var this_2 = this.url_1.search;
      if (charSequenceLength(this_2) === 0) {
        break $l$block;
      }
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = split_0(removePrefix(this.url_1.search, '?'), charArrayOf([_Char___init__impl__6a9atx(38)])).iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        var keyValue = split_0(element, charArrayOf([_Char___init__impl__6a9atx(61)]), VOID, 2);
        var key = keyValue.get_c1px32_k$(0);
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
        this_1.put_4fpzoq_k$(key, value);
      }
    }
    tmp_3.queryParams_1 = this_1;
    var tmp_5 = this;
    // Inline function 'kotlin.takeIf' call
    var this_3 = this.url_1.hash;
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
    tmp_5.fragment_1 = tmp_7;
  }
  protoOf(Route).get_path_wos8ry_k$ = function () {
    return this.path_1;
  };
  protoOf(Route).get_queryParams_8o6v3v_k$ = function () {
    return this.queryParams_1;
  };
  protoOf(Route).get_fragment_bxnb4p_k$ = function () {
    return this.fragment_1;
  };
  protoOf(Route).copy_2qmnq8_k$ = function (path, queryParams, fragment) {
    return Route_init_$Create$(path, queryParams, fragment);
  };
  protoOf(Route).copy$default_rqy2en_k$ = function (path, queryParams, fragment, $super) {
    path = path === VOID ? this.path_1 : path;
    queryParams = queryParams === VOID ? this.queryParams_1 : queryParams;
    fragment = fragment === VOID ? this.fragment_1 : fragment;
    return $super === VOID ? this.copy_2qmnq8_k$(path, queryParams, fragment) : $super.copy_2qmnq8_k$.call(this, path, queryParams, fragment);
  };
  protoOf(Route).toString = function () {
    return this.path_1 + this.url_1.search + this.url_1.hash;
  };
  function RouteException(value) {
    Exception_init_$Init$('Failed to create a route. Routes should be valid URLs without a leading domain. Got: ' + value, this);
    captureStack(this, RouteException);
  }
  function createPageData(_this__u8e3s4, route, errorPageMethod) {
    var self_0 = _this__u8e3s4;
    var tmp0_elvis_lhs = self_0.resolve_7ctaaf_k$(route.get_path_wos8ry_k$(), true);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return new PageData(errorPageMethod, new RouteInfo(route, emptyMap()));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var resolved = tmp;
    var tmp1_elvis_lhs = last(resolved).get_node_wor8sr_k$().get_data_wokkxf_k$();
    var pageMethod = tmp1_elvis_lhs == null ? errorPageMethod : tmp1_elvis_lhs;
    // Inline function 'kotlin.collections.mutableMapOf' call
    var dynamicParams = LinkedHashMap_init_$Create$_0();
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = resolved.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      var tmp_0 = element.get_node_wor8sr_k$();
      if (tmp_0 instanceof DynamicNode) {
        var tmp2 = element.get_node_wor8sr_k$().get_name_woqyms_k$();
        // Inline function 'kotlin.collections.set' call
        var value = element.get_capturedRouteSegment_txp7g1_k$();
        dynamicParams.put_4fpzoq_k$(tmp2, value);
      }
    }
    return new PageData(pageMethod, new RouteInfo(route.copy$default_rqy2en_k$(toRouteString(resolved)), dynamicParams));
  }
  var com_varabyte_kobweb_navigation_RouteInterceptorScope$stable;
  var com_varabyte_kobweb_navigation_Router_RouteEntry$stable;
  var com_varabyte_kobweb_navigation_Router$stable;
  function RouteEntry(path, isDynamic) {
    this.path_1 = path;
    this.isDynamic_1 = isDynamic;
  }
  protoOf(RouteEntry).get_path_wos8ry_k$ = function () {
    return this.path_1;
  };
  protoOf(RouteEntry).get_isDynamic_y2da18_k$ = function () {
    return this.isDynamic_1;
  };
  function _set_errorPageMethod__c2pb7x($this, _set____db54di) {
    $this.errorPageMethod_1 = _set____db54di;
  }
  function _get_errorPageMethod__m6fiqh($this) {
    return $this.errorPageMethod_1;
  }
  function _get_pageDataStore__67ishj($this) {
    return $this.pageDataStore_1;
  }
  function _get_layouts__dszkbs($this) {
    return $this.layouts_1;
  }
  function _get_layoutIdForPage__s65ejm($this) {
    return $this.layoutIdForPage_1;
  }
  function _get_layoutIdForLayout__37agbn($this) {
    return $this.layoutIdForLayout_1;
  }
  function _get_initRouteForPage__258ff0($this) {
    return $this.initRouteForPage_1;
  }
  function _get_initRouteForLayout__efcrdd($this) {
    return $this.initRouteForLayout_1;
  }
  function _set_activePageMethod__f6z3vj($this, _set____db54di) {
    var tmp0 = $this.activePageMethod$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Router$_get_activePageMethod_$ref_kzrggv_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('activePageMethod', 1, tmp, tmp_0, Router$_set_activePageMethod_$ref_yxu4h7_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get_activePageMethod__dw5579($this) {
    var tmp0 = $this.activePageMethod$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Router$_get_activePageMethod_$ref_kzrggv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('activePageMethod', 1, tmp, tmp_0, Router$_set_activePageMethod_$ref_yxu4h7());
    return tmp0.get_value_j01efc_k$();
  }
  function _get_routeTree__6p9yza($this) {
    return $this.routeTree_1;
  }
  function _get_interceptors__h4min7($this) {
    return $this.interceptors_1;
  }
  function _set_scrollRequest__vmu5bx($this, _set____db54di) {
    var tmp0 = $this.scrollRequest$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Router$_get_scrollRequest_$ref_4bly9p_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('scrollRequest', 1, tmp, tmp_0, Router$_set_scrollRequest_$ref_he6y0n_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get_scrollRequest__o6ie4v($this) {
    var tmp0 = $this.scrollRequest$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Router$_get_scrollRequest_$ref_4bly9p();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('scrollRequest', 1, tmp, tmp_0, Router$_set_scrollRequest_$ref_he6y0n());
    return tmp0.get_value_j01efc_k$();
  }
  function updatePageContext($this, _this__u8e3s4, pathQueryAndFragment) {
    if (startsWith_0(pathQueryAndFragment, '#')) {
      var routeInfo = _this__u8e3s4.get_routeState_3gc4kf_k$().get_value_j01efc_k$();
      if (!(routeInfo == null)) {
        _this__u8e3s4.get_routeState_3gc4kf_k$().set_value_v1vabv_k$(routeInfo.copy$default_hmqeol_k$(VOID, VOID, removePrefix(pathQueryAndFragment, '#')));
        return true;
      } else {
        return false;
      }
    }
    var route = Companion_getInstance_7().tryCreate_50aflp_k$(pathQueryAndFragment);
    var tmp;
    if (!(route == null)) {
      var data = createPageData($this.routeTree_1, route, $this.errorPageMethod_1);
      var tmp0_safe_receiver = _this__u8e3s4.get_routeState_3gc4kf_k$().get_value_j01efc_k$();
      var previousRoutePath = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_path_wos8ry_k$();
      _set_activePageMethod__f6z3vj($this, data.get_pageMethod_1yegx3_k$());
      _this__u8e3s4.set_route_q85h3b_k$(data.get_routeInfo_ba59f2_k$());
      if (!(previousRoutePath === route.get_path_wos8ry_k$())) {
        // Inline function 'kotlin.collections.mutableListOf' call
        var initRouteMethods = ArrayList_init_$Create$_0();
        var tmp0 = $this.initRouteForPage_1;
        // Inline function 'kotlin.collections.get' call
        var key = _get_activePageMethod__dw5579($this);
        var tmp1_safe_receiver = (isInterface(tmp0, KtMap) ? tmp0 : THROW_CCE()).get_wei43m_k$(key);
        if (tmp1_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          initRouteMethods.add_utx5q5_k$(tmp1_safe_receiver);
        }
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = $this.get_parentLayouts_xiy8wf_k$(data.get_pageMethod_1yegx3_k$()).iterator_jk1svi_k$();
        while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
          var element = _iterator__ex2g4s.next_20eer_k$();
          var tmp0_safe_receiver_0 = $this.initRouteForLayout_1.get_wei43m_k$(element);
          if (tmp0_safe_receiver_0 == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            initRouteMethods.add_utx5q5_k$(tmp0_safe_receiver_0);
          }
        }
        $this.pageDataStore_1.clear_j9egeb_k$();
        var ctx = new InitRouteContext(data.get_routeInfo_ba59f2_k$(), $this.pageDataStore_1);
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s_0 = initRouteMethods.iterator_jk1svi_k$();
        while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
          var element_0 = _iterator__ex2g4s_0.next_20eer_k$();
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
    if (!Companion_getInstance_7().isRoute_nlgap1_k$(_this__u8e3s4)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    var hrefResolved = Companion_getInstance_7().fromUrl_6grbna_k$(new URL(Companion_getInstance_7().normalizeSlashes_d036g4_k$(_this__u8e3s4), window.location.href)).toString();
    // Inline function 'kotlin.takeIf' call
    var this_0 = remove(Companion_getInstance_5(), hrefResolved);
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
    var tmp_0 = Companion_getInstance_5();
    var tmp0 = $this.interceptors_1;
    // Inline function 'kotlin.collections.fold' call
    var accumulator = (new Route(withoutPrefix)).toString();
    var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      var acc = accumulator;
      var interceptor = new RouteInterceptorScope(acc);
      element(interceptor);
      accumulator = Companion_getInstance_7().normalizeSlashes_d036g4_k$(interceptor.get_pathQueryAndFragment_8mv2zx_k$());
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
      return Unit_getInstance();
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
      return Unit_getInstance();
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
      return Unit_getInstance();
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
      return Unit_getInstance();
    };
  }
  function Router$_get_routes_$lambda_rcb3m7(nodeList) {
    return !(last(nodeList).get_data_wokkxf_k$() == null);
  }
  function Router$_get_routes_$lambda_rcb3m7_0(nodeList) {
    var tmp = joinToString(nodeList, '/', VOID, VOID, VOID, VOID, Router$_get_routes_$lambda$lambda_cgkhdw);
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp_0;
      if (isInterface(nodeList, Collection)) {
        tmp_0 = nodeList.isEmpty_y1axqb_k$();
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var _iterator__ex2g4s = nodeList.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        if (element instanceof DynamicNode) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    return new RouteEntry(tmp, tmp$ret$0);
  }
  function Router$_get_routes_$lambda$lambda_cgkhdw(node) {
    return node.get_sourceRouteSegment_7qwr9u_k$();
  }
  function Router$lambda(this$0) {
    return function (it) {
      var tmp = Companion_getInstance_3().get_instance_vwsfsk_k$();
      // Inline function 'kotlin.let' call
      var it_0 = ensureNotNull(document.location);
      var tmp$ret$1 = removePrefix(it_0.href, it_0.origin);
      return updatePageContext(this$0, tmp, tmp$ret$1);
    };
  }
  function _no_name_provided__qut3iv() {
  }
  protoOf(_no_name_provided__qut3iv).dispose_3nnxhr_k$ = function () {
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
      $composer_0.startMovableGroup_clfloq_k$(850244467, Companion_getInstance_3().get_instance_vwsfsk_k$().get_route_iy3cio_k$().get_path_wos8ry_k$());
      $pageMethod(ctx, $composer_0, 14 & $changed);
      $composer_0.endMovableGroup_kd2hcs_k$();
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function Router$renderActivePage$lambda$lambda$lambda_1($layout, $accum) {
    return function (ctx, $composer, $changed) {
      var $composer_0 = $composer;
      $layout(ctx, $accum, $composer_0, 14 & $changed);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_0(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function Router$renderActivePage$lambda$lambda(this$0, $pageMethod) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        var tmp_0 = _get_scrollRequest__o6ie4v(this$0);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.changedInstance_s1wkiy_k$(this$0);
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value = Router$renderActivePage$lambda$lambda$lambda(this$0);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
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
        var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid_0 || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_0 = ComposableLambda$invoke$ref(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        var keyedPageMethod = tmp0;
        $composer_0.startReplaceGroup_5hh8aj_k$(1960057240);
        // Inline function 'kotlin.collections.foldRight' call
        var this_0 = asReversed(this$0.get_parentLayouts_xiy8wf_k$($pageMethod));
        var accumulator = keyedPageMethod;
        if (!this_0.isEmpty_y1axqb_k$()) {
          var iterator = this_0.listIterator_70e65o_k$(this_0.get_size_woubt6_k$());
          while (iterator.hasPrevious_qh0629_k$()) {
            var tmp0_0 = iterator.previous_l2dfd5_k$();
            var accum = accumulator;
            // Inline function 'kotlin.run' call
            var dispatchReceiver_0 = rememberComposableLambda(1052452521, true, Router$renderActivePage$lambda$lambda$lambda_1(tmp0_0, accum), $composer_0, 54);
            // Inline function 'androidx.compose.runtime.remember' call
            var $composer_2 = $composer_0;
            sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
            // Inline function 'androidx.compose.runtime.cache' call
            var invalid_1 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
            // Inline function 'kotlin.let' call
            var it_1 = $composer_2.rememberedValue_4dg93v_k$();
            var tmp_5;
            if (invalid_1 || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
              var value_1 = ComposableLambda$invoke$ref_0(dispatchReceiver_0);
              $composer_2.updateRememberedValue_l1wh71_k$(value_1);
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
        $composer_0.endReplaceGroup_ek144q_k$();
        tmp = tmp0_group(Companion_getInstance_3().get_instance_vwsfsk_k$(), $composer_0, 0);
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
  function Router$renderActivePage$lambda($pageWrapper, this$0, $pageMethod) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        var tmp_0 = $pageWrapper._v;
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-1343210329, true, Router$renderActivePage$lambda$lambda(this$0, $pageMethod), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_1(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        tmp = tmp_0(tmp0, $composer_0, 6);
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_2(p0) {
    return function (_this__u8e3s4, p0_0) {
      return p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
    };
  }
  function Router$renderActivePage$lambda_0($tmp0_rcvr, $pageWrapper, $$changed, $$default) {
    return function ($composer, $force) {
      $tmp0_rcvr.renderActivePage_fc13h0_k$($pageWrapper._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_3(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function Router$setErrorHandler$lambda($errorPageMethod) {
    return function (ctx, $composer, $changed) {
      var $composer_0 = $composer;
      $errorPageMethod(404, $composer_0, 6);
      return Unit_getInstance();
    };
  }
  function Router$tryRoutingTo$lambda($fileExistsOnServer, $xhr) {
    return function (it) {
      $fileExistsOnServer._v = $xhr.status === 200;
      return Unit_getInstance();
    };
  }
  function Router$tryRoutingTo$lambda_0(it) {
    return Unit_getInstance();
  }
  function Router$tryRoutingTo$lambda_1(it) {
    return Unit_getInstance();
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
    return Unit_getInstance();
  }
  function Router$tryRoutingTo$lambda_3($url) {
    return function () {
      var tmp0_safe_receiver = document.getElementById(substringAfter($url, _Char___init__impl__6a9atx(35)));
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.scrollIntoView();
      }
      return Unit_getInstance();
    };
  }
  function Router() {
    this.errorPageMethod_1 = ComposableSingletons$RouterKt_getInstance().lambda$_1582477545_o75blc_1;
    this.pageDataStore_1 = new MutableData();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.apply' call
    var this_0 = LinkedHashMap_init_$Create$_0();
    var tmp2 = 'com.varabyte.kobweb.core.layout.NoLayout';
    // Inline function 'kotlin.collections.set' call
    var value = ComposableSingletons$RouterKt_getInstance().lambda$_1070949088_1miekm_1;
    this_0.put_4fpzoq_k$(tmp2, value);
    tmp.layouts_1 = this_0;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.apply' call
    var this_1 = LinkedHashMap_init_$Create$_0();
    var tmp2_0 = this.errorPageMethod_1;
    // Inline function 'kotlin.collections.set' call
    var value_0 = 'com.varabyte.kobweb.core.layout.NoLayout';
    this_1.put_4fpzoq_k$(tmp2_0, value_0);
    tmp_0.layoutIdForPage_1 = this_1;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.layoutIdForLayout_1 = LinkedHashMap_init_$Create$_0();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_2.initRouteForPage_1 = LinkedHashMap_init_$Create$_0();
    var tmp_3 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_3.initRouteForLayout_1 = LinkedHashMap_init_$Create$_0();
    this.activePageMethod$delegate_1 = mutableStateOf(null);
    this.routeTree_1 = new RouteTree();
    var tmp_4 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_4.interceptors_1 = ArrayList_init_$Create$_0();
    this.scrollRequest$delegate_1 = mutableStateOf(null);
    Companion_getInstance_3().init_d5yddb_k$(this, this.pageDataStore_1);
    var tmp_5 = window;
    tmp_5.onpopstate = Router$lambda(this);
  }
  protoOf(Router).get_routes_j3zccz_k$ = function () {
    var tmp = this.routeTree_1.get_nodes_ivvt6w_k$();
    var tmp_0 = filter(tmp, Router$_get_routes_$lambda_rcb3m7);
    return map(tmp_0, Router$_get_routes_$lambda_rcb3m7_0);
  };
  protoOf(Router).get_parentLayouts_xiy8wf_k$ = function (_this__u8e3s4) {
    var tmp0_safe_receiver = this.layoutIdForPage_1.get_wei43m_k$(_this__u8e3s4);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = this.layouts_1.get_wei43m_k$(tmp0_safe_receiver);
    }
    var layoutMethod = tmp;
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$_0();
    while (!(layoutMethod == null)) {
      this_0.add_utx5q5_k$(layoutMethod);
      var tmp0_safe_receiver_0 = this.layoutIdForLayout_1.get_wei43m_k$(layoutMethod);
      var tmp_0;
      if (tmp0_safe_receiver_0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_0 = this.layouts_1.get_wei43m_k$(tmp0_safe_receiver_0);
      }
      layoutMethod = tmp_0;
    }
    return this_0.build_nmwvly_k$();
  };
  protoOf(Router).renderActivePage_fc13h0_k$ = function (pageWrapper, $composer, $changed, $default) {
    var pageWrapper_0 = {_v: pageWrapper};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(137063404);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(pageWrapper_0._v) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(this) ? 32 : 16);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 19) === 18), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        pageWrapper_0._v = ComposableSingletons$RouterKt_getInstance().lambda$_149473399_dxnuon_1;
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
      var tmp_0 = get_PageContextLocal().provides_3agxel_k$(Companion_getInstance_3().get_instance_vwsfsk_k$());
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(248233772, true, Router$renderActivePage$lambda(pageWrapper_0, this, pageMethod), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_2(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      CompositionLocalProvider(tmp_0, tmp0, $composer_0, 48 | androidx_compose_runtime_ProvidedValue$stableprop_getter());
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(Router$renderActivePage$lambda_0(this, pageWrapper_0, $changed, $default));
    }
  };
  protoOf(Router).registerLayout_p67cby_k$ = function (layoutId, parentLayoutId, initRouteMethod, layoutMethod) {
    // Inline function 'kotlin.collections.set' call
    this.layouts_1.put_4fpzoq_k$(layoutId, layoutMethod);
    if (parentLayoutId == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.collections.set' call
      this.layoutIdForLayout_1.put_4fpzoq_k$(layoutMethod, parentLayoutId);
    }
    if (initRouteMethod == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.collections.set' call
      this.initRouteForLayout_1.put_4fpzoq_k$(layoutMethod, initRouteMethod);
    }
  };
  protoOf(Router).registerLayout$default_45q2ls_k$ = function (layoutId, parentLayoutId, initRouteMethod, layoutMethod, $super) {
    parentLayoutId = parentLayoutId === VOID ? null : parentLayoutId;
    initRouteMethod = initRouteMethod === VOID ? null : initRouteMethod;
    var tmp;
    if ($super === VOID) {
      this.registerLayout_p67cby_k$(layoutId, parentLayoutId, initRouteMethod, layoutMethod);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.registerLayout_p67cby_k$.call(this, layoutId, parentLayoutId, initRouteMethod, layoutMethod);
    }
    return tmp;
  };
  protoOf(Router).register_7fiee8_k$ = function (route, layoutId, initRouteMethod, pageMethod) {
    // Inline function 'kotlin.require' call
    if (!(Companion_getInstance_7().isRoute_nlgap1_k$(route) && startsWith(route, _Char___init__impl__6a9atx(47)))) {
      var message = 'Registration only allowed for internal, rooted routes, e.g. /example/path. Got: ' + route;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!this.routeTree_1.register_ela2uv_k$(Companion_getInstance_5().prependTo_e25c5r_k$(route), pageMethod)) {
      var message_0 = 'Registration failure. Path is already registered: ' + route;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    if (layoutId == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.collections.set' call
      this.layoutIdForPage_1.put_4fpzoq_k$(pageMethod, layoutId);
    }
    if (initRouteMethod == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.collections.set' call
      this.initRouteForPage_1.put_4fpzoq_k$(pageMethod, initRouteMethod);
    }
  };
  protoOf(Router).register$default_cpqgbm_k$ = function (route, layoutId, initRouteMethod, pageMethod, $super) {
    layoutId = layoutId === VOID ? null : layoutId;
    initRouteMethod = initRouteMethod === VOID ? null : initRouteMethod;
    var tmp;
    if ($super === VOID) {
      this.register_7fiee8_k$(route, layoutId, initRouteMethod, pageMethod);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.register_7fiee8_k$.call(this, route, layoutId, initRouteMethod, pageMethod);
    }
    return tmp;
  };
  protoOf(Router).registerRedirect_o9yje9_k$ = function (fromRoute, toRoute) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = listOf([fromRoute, toRoute]).iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'kotlin.require' call
      if (!(Companion_getInstance_7().isRoute_nlgap1_k$(element) && startsWith(element, _Char___init__impl__6a9atx(47)))) {
        var message = 'Registration only allowed for rooted routes, e.g. `/example/path`. Got: ' + element;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    var prefix = removeSuffix(Companion_getInstance_5().get_value_j01efc_k$(), '/');
    this.routeTree_1.registerRedirect_o9yje9_k$(prefix + fromRoute, prefix + toRoute);
  };
  protoOf(Router).setErrorPage_2r1n1a_k$ = function (layoutId, initRouteMethod, pageMethod) {
    this.errorPageMethod_1 = pageMethod;
    if (layoutId == null) {
      this.layoutIdForPage_1.remove_gppy8k_k$(this.errorPageMethod_1);
    } else {
      var tmp0 = this.layoutIdForPage_1;
      // Inline function 'kotlin.collections.set' call
      var key = this.errorPageMethod_1;
      tmp0.put_4fpzoq_k$(key, layoutId);
    }
    if (initRouteMethod == null) {
      this.initRouteForPage_1.remove_gppy8k_k$(this.errorPageMethod_1);
    } else {
      var tmp0_0 = this.initRouteForPage_1;
      // Inline function 'kotlin.collections.set' call
      var key_0 = this.errorPageMethod_1;
      tmp0_0.put_4fpzoq_k$(key_0, initRouteMethod);
    }
  };
  protoOf(Router).setErrorPage$default_7bz80a_k$ = function (layoutId, initRouteMethod, pageMethod, $super) {
    layoutId = layoutId === VOID ? 'com.varabyte.kobweb.core.layout.NoLayout' : layoutId;
    initRouteMethod = initRouteMethod === VOID ? null : initRouteMethod;
    var tmp;
    if ($super === VOID) {
      this.setErrorPage_2r1n1a_k$(layoutId, initRouteMethod, pageMethod);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.setErrorPage_2r1n1a_k$.call(this, layoutId, initRouteMethod, pageMethod);
    }
    return tmp;
  };
  protoOf(Router).setErrorHandler_vreya8_k$ = function (layoutId, errorPageMethod) {
    this.setErrorPage$default_7bz80a_k$(layoutId, VOID, ComposableLambda$invoke$ref_3(composableLambdaInstance(2014437432, true, Router$setErrorHandler$lambda(errorPageMethod))));
  };
  protoOf(Router).setErrorHandler$default_g2l4dz_k$ = function (layoutId, errorPageMethod, $super) {
    layoutId = layoutId === VOID ? '' : layoutId;
    var tmp;
    if ($super === VOID) {
      this.setErrorHandler_vreya8_k$(layoutId, errorPageMethod);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.setErrorHandler_vreya8_k$.call(this, layoutId, errorPageMethod);
    }
    return tmp;
  };
  protoOf(Router).addRouteInterceptor_kgq7h7_k$ = function (interceptor) {
    this.interceptors_1.add_utx5q5_k$(interceptor);
  };
  protoOf(Router).tryRoutingTo_5doa86_k$ = function (pathQueryAndFragment, updateHistoryMode, openLinkStrategy) {
    if (contains(pathQueryAndFragment, '://'))
      return false;
    var pathQueryAndFragment_0 = Companion_getInstance_5().prependTo_e25c5r_k$(pathQueryAndFragment);
    if (Companion_getInstance_7().isRoute_nlgap1_k$(pathQueryAndFragment_0)) {
      pathQueryAndFragment_0 = normalize(this, pathQueryAndFragment_0);
      // Inline function 'kotlin.run' call
      var _destruct__k2r9zo = Companion_getInstance_7().partition_9jxcnk_k$(pathQueryAndFragment_0);
      var pathPart = _destruct__k2r9zo.component1_7eebsc_k$();
      var queryAndFragmentPart = _destruct__k2r9zo.component2_7eebsb_k$();
      if (!(pathPart === '/')) {
        if (!this.routeTree_1.isRegistered_1ncfv6_k$(pathPart)) {
          if (endsWith(pathPart, _Char___init__impl__6a9atx(47))) {
            var withoutSlash = removeSuffix(pathPart, '/');
            if (this.routeTree_1.isRegistered_1ncfv6_k$(withoutSlash)) {
              pathQueryAndFragment_0 = withoutSlash + queryAndFragmentPart;
            }
          } else {
            var withSlash = pathPart + '/';
            if (this.routeTree_1.isRegistered_1ncfv6_k$(withSlash)) {
              pathQueryAndFragment_0 = withSlash + queryAndFragmentPart;
            }
          }
        }
      }
      // Inline function 'kotlin.run' call
      var pathPart_0 = Companion_getInstance_7().partition_9jxcnk_k$(pathQueryAndFragment_0).component1_7eebsc_k$();
      if (!this.routeTree_1.isRegistered_1ncfv6_k$(pathPart_0)) {
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
    if (updatePageContext(this, Companion_getInstance_3().get_instance_vwsfsk_k$(), pathQueryAndFragment_0)) {
      pathQueryAndFragment_0 = Companion_getInstance_3().get_instance_vwsfsk_k$().get_route_iy3cio_k$().get_path_wos8ry_k$() + Companion_getInstance_7().partition_9jxcnk_k$(pathQueryAndFragment_0).get_second_jf7fjx_k$();
      // Inline function 'kotlin.let' call
      var url = window.location.origin + pathQueryAndFragment_0;
      var onNewPage = !(window.location.pathname === Companion_getInstance_7().fromUrl_6grbna_k$(new URL(url)).get_path_wos8ry_k$());
      if (!(window.location.href === url)) {
        switch (updateHistoryMode.get_ordinal_ip24qg_k$()) {
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
  protoOf(Router).tryRoutingTo$default_gm9buu_k$ = function (pathQueryAndFragment, updateHistoryMode, openLinkStrategy, $super) {
    updateHistoryMode = updateHistoryMode === VOID ? UpdateHistoryMode_PUSH_getInstance() : updateHistoryMode;
    openLinkStrategy = openLinkStrategy === VOID ? OpenLinkStrategy_IN_PLACE_getInstance() : openLinkStrategy;
    return $super === VOID ? this.tryRoutingTo_5doa86_k$(pathQueryAndFragment, updateHistoryMode, openLinkStrategy) : $super.tryRoutingTo_5doa86_k$.call(this, pathQueryAndFragment, updateHistoryMode, openLinkStrategy);
  };
  protoOf(Router).navigateTo_5oprea_k$ = function (pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy, openExternalLinksStrategy) {
    if (!this.tryRoutingTo_5doa86_k$(pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy)) {
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
  protoOf(Router).navigateTo$default_onbd51_k$ = function (pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy, openExternalLinksStrategy, $super) {
    updateHistoryMode = updateHistoryMode === VOID ? UpdateHistoryMode_PUSH_getInstance() : updateHistoryMode;
    openInternalLinksStrategy = openInternalLinksStrategy === VOID ? OpenLinkStrategy_IN_PLACE_getInstance() : openInternalLinksStrategy;
    openExternalLinksStrategy = openExternalLinksStrategy === VOID ? OpenLinkStrategy_IN_NEW_TAB_getInstance() : openExternalLinksStrategy;
    var tmp;
    if ($super === VOID) {
      this.navigateTo_5oprea_k$(pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy, openExternalLinksStrategy);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.navigateTo_5oprea_k$.call(this, pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy, openExternalLinksStrategy);
    }
    return tmp;
  };
  var UpdateHistoryMode_PUSH_instance;
  var UpdateHistoryMode_REPLACE_instance;
  function values_0() {
    return [UpdateHistoryMode_PUSH_getInstance(), UpdateHistoryMode_REPLACE_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'PUSH':
        return UpdateHistoryMode_PUSH_getInstance();
      case 'REPLACE':
        return UpdateHistoryMode_REPLACE_getInstance();
      default:
        UpdateHistoryMode_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var UpdateHistoryMode_entriesInitialized;
  function UpdateHistoryMode_initEntries() {
    if (UpdateHistoryMode_entriesInitialized)
      return Unit_getInstance();
    UpdateHistoryMode_entriesInitialized = true;
    UpdateHistoryMode_PUSH_instance = new UpdateHistoryMode('PUSH', 0);
    UpdateHistoryMode_REPLACE_instance = new UpdateHistoryMode('REPLACE', 1);
  }
  var $ENTRIES_0;
  function UpdateHistoryMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function _get_route__bsf68o_0($this) {
    return $this.route_1;
  }
  function RouteInterceptorScope(pathQueryAndFragment) {
    this.route_1 = new Route(pathQueryAndFragment);
    this.path_1 = this.route_1.get_path_wos8ry_k$();
    this.queryParams_1 = toMutableMap(this.route_1.get_queryParams_8o6v3v_k$());
    this.fragment_1 = this.route_1.get_fragment_bxnb4p_k$();
  }
  protoOf(RouteInterceptorScope).set_path_tgrnnc_k$ = function (value) {
    this.path_1 = startsWith(value, _Char___init__impl__6a9atx(47)) ? value : '/' + value;
  };
  protoOf(RouteInterceptorScope).get_path_wos8ry_k$ = function () {
    return this.path_1;
  };
  protoOf(RouteInterceptorScope).set_queryParams_v3ipd5_k$ = function (_set____db54di) {
    this.queryParams_1 = _set____db54di;
  };
  protoOf(RouteInterceptorScope).get_queryParams_8o6v3v_k$ = function () {
    return this.queryParams_1;
  };
  protoOf(RouteInterceptorScope).set_fragment_dufueu_k$ = function (_set____db54di) {
    this.fragment_1 = _set____db54di;
  };
  protoOf(RouteInterceptorScope).get_fragment_bxnb4p_k$ = function () {
    return this.fragment_1;
  };
  protoOf(RouteInterceptorScope).get_pathQueryAndFragment_8mv2zx_k$ = function () {
    return Route_init_$Create$(this.path_1, this.queryParams_1, this.fragment_1).toString();
  };
  function com_varabyte_kobweb_navigation_Router$stableprop_getter() {
    return com_varabyte_kobweb_navigation_Router$stable;
  }
  function ComposableLambda$invoke$ref_4(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$RouterKt$lambda$215212537$lambda($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Page Not Found', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_5(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$RouterKt$lambda$_1582477545$lambda_kdntrc(ctx, $composer, $changed) {
    var $composer_0 = $composer;
    DefaultErrorPage($composer_0, 0);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_6(p0) {
    return function (_this__u8e3s4, p0_0, p1, p2) {
      return p0.invoke_gk4tfu_k$(_this__u8e3s4, p0_0, p1, p2);
    };
  }
  function ComposableSingletons$RouterKt$lambda$_1070949088$lambda_malff6(ctx, content, $composer, $changed) {
    var $composer_0 = $composer;
    content(ctx, $composer_0, 14 & $changed | 112 & $changed);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_7(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$RouterKt$lambda$_149473399$lambda_vw12th(it, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(it) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 19) === 18), $dirty & 1)) {
      it($composer_0, 14 & $dirty);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$RouterKt() {
    ComposableSingletons$RouterKt_instance = this;
    var tmp = this;
    tmp.lambda$215212537__1 = ComposableLambda$invoke$ref_4(composableLambdaInstance(215212537, false, ComposableSingletons$RouterKt$lambda$215212537$lambda));
    var tmp_0 = this;
    tmp_0.lambda$_1582477545_o75blc_1 = ComposableLambda$invoke$ref_5(composableLambdaInstance(-1582477545, false, ComposableSingletons$RouterKt$lambda$_1582477545$lambda_kdntrc));
    var tmp_1 = this;
    tmp_1.lambda$_1070949088_1miekm_1 = ComposableLambda$invoke$ref_6(composableLambdaInstance(-1070949088, false, ComposableSingletons$RouterKt$lambda$_1070949088$lambda_malff6));
    var tmp_2 = this;
    tmp_2.lambda$_149473399_dxnuon_1 = ComposableLambda$invoke$ref_7(composableLambdaInstance(-149473399, false, ComposableSingletons$RouterKt$lambda$_149473399$lambda_vw12th));
  }
  protoOf(ComposableSingletons$RouterKt).get_lambda$215212537_kektjq_k$ = function () {
    return this.lambda$215212537__1;
  };
  protoOf(ComposableSingletons$RouterKt).get_lambda$_1582477545_uy19jt_k$ = function () {
    return this.lambda$_1582477545_o75blc_1;
  };
  protoOf(ComposableSingletons$RouterKt).get_lambda$_1070949088_hcomvl_k$ = function () {
    return this.lambda$_1070949088_1miekm_1;
  };
  protoOf(ComposableSingletons$RouterKt).get_lambda$_149473399_c46um_k$ = function () {
    return this.lambda$_149473399_dxnuon_1;
  };
  var ComposableSingletons$RouterKt_instance;
  function ComposableSingletons$RouterKt_getInstance() {
    if (ComposableSingletons$RouterKt_instance == null)
      new ComposableSingletons$RouterKt();
    return ComposableSingletons$RouterKt_instance;
  }
  function DefaultErrorPage($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1831390232);
    if ($composer_0.shouldExecute_4fplh_k$(!($changed === 0), $changed & 1)) {
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = DefaultErrorPage$lambda;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      Div(tmp$ret$3, ComposableSingletons$RouterKt_getInstance().lambda$215212537__1, $composer_0, 54, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(DefaultErrorPage$lambda_0($changed));
    }
  }
  function DefaultErrorPage$lambda($this$Div) {
    $this$Div.style_xwwy6r_k$(DefaultErrorPage$lambda$lambda);
    return Unit_getInstance();
  }
  function DefaultErrorPage$lambda$lambda($this$style) {
    width($this$style, get_percent(100));
    height($this$style, get_vh(100));
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    alignItems($this$style, Companion_getInstance_1().get_Center_3arb0i_k$());
    justifyContent($this$style, Companion_getInstance_2().get_Center_3arb0i_k$());
    return Unit_getInstance();
  }
  function DefaultErrorPage$lambda_0($$changed) {
    return function ($composer, $force) {
      DefaultErrorPage($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
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
  //region block: post-declaration
  protoOf(Companion_1).prepend_osifcc_k$ = prepend;
  protoOf(BasePathImpl).prepend_osifcc_k$ = prepend;
  //endregion
  //region block: init
  com_varabyte_kobweb_core_AppGlobals$stable = 8;
  com_varabyte_kobweb_core_data_MutableData$stable = 0;
  com_varabyte_kobweb_core_init_InitKobwebContext$stable = 8;
  com_varabyte_kobweb_core_init_InitRouteContext$stable = 8;
  com_varabyte_kobweb_navigation_BasePathImpl$stable = 0;
  com_varabyte_kobweb_navigation_PageData$stable = 8;
  com_varabyte_kobweb_navigation_RouteException$stable = 8;
  com_varabyte_kobweb_navigation_Route$stable = 8;
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
  _.$_$.h = AppGlobals_getInstance;
  _.$_$.i = Companion_getInstance_5;
  //endregion
  return _;
}));
