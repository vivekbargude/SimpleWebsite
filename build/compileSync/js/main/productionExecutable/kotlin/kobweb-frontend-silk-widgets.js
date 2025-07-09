(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kobweb-frontend-compose-html-ext.js', './html-html-core.js', './kotlin-kotlin-stdlib.js', './kobweb-frontend-kobweb-compose.js', './kobweb-frontend-silk-foundation.js', './compose-multiplatform-core-compose-runtime-runtime.js', './kotlinx-coroutines-core.js', './kobweb-frontend-browser-ext.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kobweb-frontend-compose-html-ext.js'), require('./html-html-core.js'), require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./kobweb-frontend-silk-foundation.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kotlinx-coroutines-core.js'), require('./kobweb-frontend-browser-ext.js'));
  else {
    if (typeof globalThis['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof globalThis['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof globalThis['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof globalThis['kobweb-frontend-browser-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-browser-ext' was not found. Please, check whether 'kobweb-frontend-browser-ext' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    globalThis['kobweb-frontend-silk-widgets'] = factory(typeof globalThis['kobweb-frontend-silk-widgets'] === 'undefined' ? {} : globalThis['kobweb-frontend-silk-widgets'], globalThis['kobweb-frontend-compose-html-ext'], globalThis['html-html-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['kobweb-frontend-kobweb-compose'], globalThis['kobweb-frontend-silk-foundation'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['kotlinx-coroutines-core'], globalThis['kobweb-frontend-browser-ext']);
  }
}(function (_, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_org_jetbrains_compose_html_html_core, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_com_varabyte_kobweb_browser_ext) {
  'use strict';
  //region block: imports
  var StyleVariable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h;
  var StyleVariable_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.x2;
  var StyleVariable_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g;
  var KProperty1 = kotlin_kotlin.$_$.t7;
  var getPropertyCallableRef = kotlin_kotlin.$_$.o6;
  var protoOf = kotlin_kotlin.$_$.h7;
  var initMetadataForObject = kotlin_kotlin.$_$.w6;
  var Unit_instance = kotlin_kotlin.$_$.c2;
  var Companion_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u3;
  var fillMaxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g1;
  var Companion_instance_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.m;
  var borderBottom = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p;
  var tabIndex = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p2;
  var get_ariaDisabled = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j;
  var get_hover = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o;
  var not = kotlin_com_varabyte_kobweb_silk_foundation.$_$.q;
  var get_active = kotlin_com_varabyte_kobweb_silk_foundation.$_$.i;
  var Companion_instance_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c3;
  var cursor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c1;
  var Companion_instance_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p3;
  var listOf = kotlin_kotlin.$_$.g4;
  var transition = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v2;
  var backgroundColor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b1;
  var Companion_instance_3 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.q3;
  var userSelect = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x2;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.s1;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h2;
  var calc = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a;
  var VOID = kotlin_kotlin.$_$.e;
  var margin = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w1;
  var flexGrow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h1;
  var overflow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e2;
  var Companion_instance_4 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m3;
  var CssStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.v;
  var Companion_instance_5 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j2;
  var base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b1;
  var CssStyle_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.w;
  var StyleVariable_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f;
  var toPalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o1;
  var objectCreate = kotlin_kotlin.$_$.g7;
  var initMetadataForCompanion = kotlin_kotlin.$_$.s6;
  var setVariable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n2;
  var Base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.t;
  var initMetadataForClass = kotlin_kotlin.$_$.r6;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var Companion_instance_6 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.n3;
  var textAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q2;
  var get_em = kotlin_org_jetbrains_compose_html_html_core.$_$.v1;
  var marginBlock = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s1;
  var Companion_instance_7 = kotlin_org_jetbrains_compose_html_html_core.$_$.j;
  var display = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d1;
  var Companion_instance_8 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.w2;
  var alignItems = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i;
  var Companion_instance_9 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d3;
  var fontWeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k1;
  var fontSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j1;
  var gap = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l1;
  var lineHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p1;
  var borderLeft = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q;
  var padding_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i2;
  var margin_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v1;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r;
  var Companion_instance_10 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.z2;
  var Colors_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o3;
  var boxShadow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t;
  var descendants = kotlin_com_varabyte_kobweb_silk_foundation.$_$.l;
  var marginBlock_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r1;
  var addVariant = kotlin_com_varabyte_kobweb_silk_foundation.$_$.y;
  var com_varabyte_kobweb_silk_style_CssStyle_Restricted_Base$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e1;
  var com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d1;
  var Base_init_$Init$ = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g2;
  var ButtonType_Button_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.a;
  var com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c1;
  var toModifier = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g1;
  var toModifier_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h1;
  var thenIf = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g3;
  var toModifier_1 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f1;
  var ensureNotNull = kotlin_kotlin.$_$.ca;
  var Companion_instance_11 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k2;
  var get_isBright = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g;
  var ColorMode_DARK_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e2;
  var ColorMode_LIGHT_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f2;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var THROW_CCE = kotlin_kotlin.$_$.v9;
  var onClick = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a2;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h3;
  var rememberComposableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var Button = kotlin_org_jetbrains_compose_html_html_core.$_$.h3;
  var get_focusVisible = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n;
  var height = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n1;
  var minWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y1;
  var Companion_instance_12 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.s3;
  var whiteSpace = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z2;
  var Companion_instance_13 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.r3;
  var verticalAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y2;
  var border_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u;
  var transition_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u2;
  var outline = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d2;
  var boxShadow_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w;
  var type = kotlin_org_jetbrains_compose_html_html_core.$_$.s;
  var com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m2;
  var registerRefScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o2;
  var Center_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k3;
  var CenterVertically_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q3;
  var com_varabyte_kobweb_compose_foundation_layout_Arrangement_Center$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d;
  var com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d3;
  var Row = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var Companion_instance_14 = kotlin_org_jetbrains_compose_html_html_core.$_$.n;
  var position = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j2;
  var opacity = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c2;
  var size = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o2;
  var rowClasses = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f;
  var Keyframes = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e;
  var addVariantBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.x;
  var paddingInline = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g2;
  var get_placeholder = kotlin_com_varabyte_kobweb_silk_foundation.$_$.r;
  var Companion_instance_15 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.x2;
  var appearance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j;
  var get_ariaInvalid = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k;
  var get_disabled = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m;
  var margin_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u1;
  var RectF_init_$Create$ = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h2;
  var clip = kotlin_com_varabyte_kobweb_silk_foundation.$_$.v1;
  var overflow_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f2;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a3;
  var minHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x1;
  var Companion_instance_16 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a3;
  var boxSizing = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y;
  var translateX = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w2;
  var ariaHidden = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l;
  var Companion_instance_17 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.t3;
  var com_varabyte_kobweb_compose_dom_svg_ViewBox$stableprop_getter = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k2;
  var Path = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i2;
  var Circle = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h2;
  var SVGStrokeLineCap_Round_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.s2;
  var Svg = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j2;
  var overflow_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.q1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ea;
  var SVGStrokeType_CurrentColor_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.t2;
  var SVGFillType_None_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.r2;
  var SVGFillType_CurrentColor_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.q2;
  var SVGStrokeType_None_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.u2;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.v2;
  var borderTop = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s;
  var Breakpoint_ZERO_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d2;
  var getValue = kotlin_kotlin.$_$.v3;
  var setVariable_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m2;
  var Breakpoint_SM_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b2;
  var Breakpoint_MD_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a2;
  var Breakpoint_LG_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.z1;
  var Breakpoint_XL_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c2;
  var Div = kotlin_org_jetbrains_compose_html_html_core.$_$.i3;
  var ResponsiveValues = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g;
  var get_fr = kotlin_org_jetbrains_compose_html_html_core.$_$.a2;
  var gridTemplateColumns = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m1;
  var get_entries = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.e3;
  var mapCapacity = kotlin_kotlin.$_$.h4;
  var coerceAtLeast = kotlin_kotlin.$_$.l7;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.o;
  var NumberValue = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e;
  var get_cssClass = kotlin_com_varabyte_kobweb_silk_foundation.$_$.r1;
  var classNames = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var Companion_getInstance_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.i2;
  var get_useScope = kotlin_com_varabyte_kobweb_silk_foundation.$_$.i1;
  var KMutableProperty0 = kotlin_kotlin.$_$.q7;
  var getLocalDelegateReference = kotlin_kotlin.$_$.m6;
  var androidx_compose_runtime_ProvidedValue$stableprop_getter = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  var CompositionLocalProvider = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var CoroutineImpl = kotlin_kotlin.$_$.w5;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var isInterface = kotlin_kotlin.$_$.z6;
  var asList = kotlin_kotlin.$_$.na;
  var CssIdent = kotlin_com_varabyte_kobweb_browser_ext.$_$.a;
  var suffixedWith = kotlin_com_varabyte_kobweb_silk_foundation.$_$.t1;
  var isSuffixedWith = kotlin_com_varabyte_kobweb_silk_foundation.$_$.s1;
  var get_SilkTheme = kotlin_com_varabyte_kobweb_silk_foundation.$_$.w1;
  var withColorModeSuffixRemoved = kotlin_com_varabyte_kobweb_silk_foundation.$_$.u1;
  var initMetadataForLambda = kotlin_kotlin.$_$.v6;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k;
  var unaryMinus = kotlin_org_jetbrains_compose_html_html_core.$_$.c3;
  var margin_2 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t1;
  var top = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s2;
  var left = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o1;
  var right = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k2;
  var bottom = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v;
  var Companion_instance_18 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b3;
  var colorScheme = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a1;
  var Blue_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.l2;
  var Gray_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m2;
  var Red_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n2;
  var lightened = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h;
  var get_entries_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.p1;
  var registerStyleBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d;
  var base_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a1;
  var KProperty0 = kotlin_kotlin.$_$.s7;
  var ariaDisabled = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k;
  var base_1 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.z;
  var get_ms = kotlin_org_jetbrains_compose_html_html_core.$_$.q2;
  var ColorGroup = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k1;
  var KMutableProperty1 = kotlin_kotlin.$_$.r7;
  var MutablePalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.l1;
  var com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m1;
  var com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n1;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(TabVars, 'TabVars');
  initMetadataForObject(CalloutVars, 'CalloutVars');
  initMetadataForCompanion(Companion);
  initMetadataForClass(CalloutType, 'CalloutType', VOID, Base);
  initMetadataForObject(ComposableSingletons$CalloutKt, 'ComposableSingletons$CalloutKt');
  initMetadataForObject(ButtonVars, 'ButtonVars');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(ButtonSize, 'ButtonSize', VOID, Base);
  initMetadataForObject(CheckboxVars, 'CheckboxVars');
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(CheckboxSize, 'CheckboxSize', VOID, Base);
  initMetadataForObject(InputVars, 'InputVars');
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(InputSize, 'InputSize', VOID, Base);
  initMetadataForObject(SwitchVars, 'SwitchVars');
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(SwitchSize, 'SwitchSize', VOID, Base);
  initMetadataForObject(ComposableSingletons$ExclaimIconKt, 'ComposableSingletons$ExclaimIconKt');
  initMetadataForObject(ComposableSingletons$InfoIconKt, 'ComposableSingletons$InfoIconKt');
  initMetadataForObject(ComposableSingletons$LightbulbIconKt, 'ComposableSingletons$LightbulbIconKt');
  initMetadataForObject(ComposableSingletons$QuestionIconKt, 'ComposableSingletons$QuestionIconKt');
  initMetadataForObject(ComposableSingletons$QuoteIconKt, 'ComposableSingletons$QuoteIconKt');
  initMetadataForObject(ComposableSingletons$StopIconKt, 'ComposableSingletons$StopIconKt');
  initMetadataForObject(ComposableSingletons$WarningIconKt, 'ComposableSingletons$WarningIconKt');
  initMetadataForClass(Fill, 'Fill', Fill);
  initMetadataForClass(Stroke, 'Stroke', Stroke);
  initMetadataForObject(DividerVars, 'DividerVars');
  initMetadataForObject(SurfaceVars, 'SurfaceVars');
  initMetadataForClass(_no_name_provided__qut3iv);
  initMetadataForLambda(Surface$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForObject(OverlayVars, 'OverlayVars');
  initMetadataForObject(PopupVars, 'PopupVars');
  initMetadataForObject(TooltipVars, 'TooltipVars');
  initMetadataForObject(TransitionDurationVars, 'TransitionDurationVars');
  initMetadataForObject(FontSizeVars, 'FontSizeVars');
  initMetadataForObject(BorderRadiusVars, 'BorderRadiusVars');
  initMetadataForClass(MutableButton, 'MutableButton', VOID, ColorGroup);
  initMetadataForClass(MutableCallout, 'MutableCallout', VOID, ColorGroup);
  initMetadataForClass(MutableCheckbox, 'MutableCheckbox', VOID, ColorGroup);
  initMetadataForClass(MutableInput, 'MutableInput', VOID, ColorGroup);
  initMetadataForClass(MutableSwitch, 'MutableSwitch', VOID, ColorGroup);
  initMetadataForClass(MutableTab, 'MutableTab', VOID, ColorGroup);
  initMetadataForClass(MutableTooltip, 'MutableTooltip', VOID, ColorGroup);
  //endregion
  function get_TabsStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsStyle;
  }
  var TabsStyle;
  function get_TabsTabRowStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsTabRowStyle;
  }
  var TabsTabRowStyle;
  function get_TabsTabStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsTabStyle;
  }
  var TabsTabStyle;
  function get_TabsPanelStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsPanelStyle;
  }
  var TabsPanelStyle;
  var com_varabyte_kobweb_silk_components_disclosure_TabVars$stable;
  var com_varabyte_kobweb_silk_components_disclosure_TabData$stable;
  var com_varabyte_kobweb_silk_components_disclosure_PanelData$stable;
  var com_varabyte_kobweb_silk_components_disclosure_TabPanelData$stable;
  var com_varabyte_kobweb_silk_components_disclosure_TabPanelScope$stable;
  var com_varabyte_kobweb_silk_components_disclosure_TabsScope$stable;
  function TabVars$_get_Color_$ref_chk8zq() {
    return function (p0) {
      return p0.s3c();
    };
  }
  function TabVars$_get_BorderColor_$ref_tz611i() {
    return function (p0) {
      return p0.t3c();
    };
  }
  function TabVars$_get_BackgroundColor_$ref_b468g8() {
    return function (p0) {
      return p0.u3c();
    };
  }
  function TabVars$_get_DisabledBackgroundColor_$ref_r6n4kk() {
    return function (p0) {
      return p0.v3c();
    };
  }
  function TabVars$_get_HoverBackgroundColor_$ref_y2gnb8() {
    return function (p0) {
      return p0.w3c();
    };
  }
  function TabVars$_get_PressedBackgroundColor_$ref_yty52() {
    return function (p0) {
      return p0.x3c();
    };
  }
  function TabVars$_get_BorderThickness_$ref_94q7qj() {
    return function (p0) {
      return p0.y3c();
    };
  }
  function TabVars$_get_ColorTransitionDuration_$ref_2jc6z3() {
    return function (p0) {
      return p0.z3c();
    };
  }
  function TabVars() {
    TabVars_instance = this;
    this.k3c_1 = StyleVariable('silk');
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().e2s();
    tmp.l3c_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.m3c_1 = StyleVariable('silk');
    this.n3c_1 = StyleVariable('silk');
    this.o3c_1 = StyleVariable('silk');
    this.p3c_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_px(2);
    tmp_0.q3c_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().i3d().e2s();
    tmp_1.r3c_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
  }
  protoOf(TabVars).s3c = function () {
    var tmp = KProperty1;
    return this.k3c_1.k2s(this, getPropertyCallableRef('Color', 1, tmp, TabVars$_get_Color_$ref_chk8zq(), null));
  };
  protoOf(TabVars).t3c = function () {
    var tmp = KProperty1;
    return this.l3c_1.k2s(this, getPropertyCallableRef('BorderColor', 1, tmp, TabVars$_get_BorderColor_$ref_tz611i(), null));
  };
  protoOf(TabVars).u3c = function () {
    var tmp = KProperty1;
    return this.m3c_1.k2s(this, getPropertyCallableRef('BackgroundColor', 1, tmp, TabVars$_get_BackgroundColor_$ref_b468g8(), null));
  };
  protoOf(TabVars).v3c = function () {
    var tmp = KProperty1;
    return this.n3c_1.k2s(this, getPropertyCallableRef('DisabledBackgroundColor', 1, tmp, TabVars$_get_DisabledBackgroundColor_$ref_r6n4kk(), null));
  };
  protoOf(TabVars).w3c = function () {
    var tmp = KProperty1;
    return this.o3c_1.k2s(this, getPropertyCallableRef('HoverBackgroundColor', 1, tmp, TabVars$_get_HoverBackgroundColor_$ref_y2gnb8(), null));
  };
  protoOf(TabVars).x3c = function () {
    var tmp = KProperty1;
    return this.p3c_1.k2s(this, getPropertyCallableRef('PressedBackgroundColor', 1, tmp, TabVars$_get_PressedBackgroundColor_$ref_yty52(), null));
  };
  protoOf(TabVars).y3c = function () {
    var tmp = KProperty1;
    return this.q3c_1.k2s(this, getPropertyCallableRef('BorderThickness', 1, tmp, TabVars$_get_BorderThickness_$ref_94q7qj(), null));
  };
  protoOf(TabVars).z3c = function () {
    var tmp = KProperty1;
    return this.r3c_1.k2s(this, getPropertyCallableRef('ColorTransitionDuration', 1, tmp, TabVars$_get_ColorTransitionDuration_$ref_2jc6z3(), null));
  };
  var TabVars_instance;
  function TabVars_getInstance() {
    if (TabVars_instance == null)
      new TabVars();
    return TabVars_instance;
  }
  function TabsStyle$lambda($this$CssStyle) {
    _init_properties_Tabs_kt__myintq();
    return Unit_instance;
  }
  function TabsTabRowStyle$lambda($this$base) {
    _init_properties_Tabs_kt__myintq();
    var tmp = fillMaxWidth(Companion_instance);
    var tmp_0 = TabVars_getInstance().y3c().e2s();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp, tmp_0, 'solid', TabVars_getInstance().t3c().e2s());
  }
  function TabsTabStyle$lambda($composer, $changed) {
    _init_properties_Tabs_kt__myintq();
    var $composer_0 = $composer;
    $composer_0.p1g(2044107546);
    var tmp0 = tabIndex(Companion_instance, 0);
    $composer_0.r1g();
    return tmp0;
  }
  function TabsTabStyle$lambda_0($this$CssStyle) {
    _init_properties_Tabs_kt__myintq();
    $this$CssStyle.n35(TabsTabStyle$lambda$lambda);
    var tmp = get_ariaDisabled($this$CssStyle);
    $this$CssStyle.p37(tmp, TabsTabStyle$lambda$lambda_0);
    var tmp_0 = get_hover($this$CssStyle).m36(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    $this$CssStyle.p37(tmp_0, TabsTabStyle$lambda$lambda_1);
    var tmp_1 = get_active($this$CssStyle).m36(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    $this$CssStyle.p37(tmp_1, TabsTabStyle$lambda$lambda_2);
    return Unit_instance;
  }
  function TabsTabStyle$lambda$lambda() {
    _init_properties_Tabs_kt__myintq();
    var tmp = padding(userSelect(color(backgroundColor(transition(cursor(Companion_instance, Companion_instance_1.e2q()), Companion_instance_2.z2s(listOf(['background-color', 'color', 'border-color']), TabVars_getInstance().z3c().e2s())), TabVars_getInstance().u3c().e2s()), TabVars_getInstance().s3c().e2s()), Companion_instance_3.g2q()), get_cssRem(0.5));
    var tmp_0 = margin(tmp, VOID, VOID, calc(TabsTabStyle$lambda$lambda$lambda));
    var tmp_1 = TabVars_getInstance().y3c().e2s();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp_0, tmp_1, 'solid', TabVars_getInstance().t3c().e2s());
  }
  function TabsTabStyle$lambda$lambda$lambda($this$calc) {
    _init_properties_Tabs_kt__myintq();
    return $this$calc.a2t(TabVars_getInstance().y3c().e2s());
  }
  function TabsTabStyle$lambda$lambda_0() {
    _init_properties_Tabs_kt__myintq();
    return cursor(backgroundColor(Companion_instance, TabVars_getInstance().v3c().e2s()), Companion_instance_1.f2q());
  }
  function TabsTabStyle$lambda$lambda_1() {
    _init_properties_Tabs_kt__myintq();
    return backgroundColor(Companion_instance, TabVars_getInstance().w3c().e2s());
  }
  function TabsTabStyle$lambda$lambda_2() {
    _init_properties_Tabs_kt__myintq();
    return backgroundColor(Companion_instance, TabVars_getInstance().x3c().e2s());
  }
  function TabsPanelStyle$lambda($this$base) {
    _init_properties_Tabs_kt__myintq();
    var tmp = flexGrow(fillMaxWidth(padding(Companion_instance, get_cssRem(1))), 1);
    return overflow(tmp, TabsPanelStyle$lambda$lambda);
  }
  function TabsPanelStyle$lambda$lambda($this$overflow) {
    _init_properties_Tabs_kt__myintq();
    $this$overflow.a33(Companion_instance_4.t2r());
    return Unit_instance;
  }
  var properties_initialized_Tabs_kt_moodfk;
  function _init_properties_Tabs_kt__myintq() {
    if (!properties_initialized_Tabs_kt_moodfk) {
      properties_initialized_Tabs_kt_moodfk = true;
      TabsStyle = CssStyle(VOID, TabsStyle$lambda);
      var tmp = Companion_instance_5;
      TabsTabRowStyle = base(tmp, VOID, TabsTabRowStyle$lambda);
      var tmp_0 = TabsTabStyle$lambda;
      TabsTabStyle = CssStyle_0(tmp_0, TabsTabStyle$lambda_0);
      var tmp_1 = Companion_instance_5;
      TabsPanelStyle = base(tmp_1, VOID, TabsPanelStyle$lambda);
      com_varabyte_kobweb_silk_components_disclosure_TabVars$stable = 8;
      com_varabyte_kobweb_silk_components_disclosure_TabData$stable = 8;
      com_varabyte_kobweb_silk_components_disclosure_PanelData$stable = 8;
      com_varabyte_kobweb_silk_components_disclosure_TabPanelData$stable = 8;
      com_varabyte_kobweb_silk_components_disclosure_TabPanelScope$stable = 8;
      com_varabyte_kobweb_silk_components_disclosure_TabsScope$stable = 8;
    }
  }
  function get_CalloutStyle() {
    _init_properties_Callout_kt__ksu682();
    return CalloutStyle;
  }
  var CalloutStyle;
  function get_LeftBorderedCalloutVariant() {
    _init_properties_Callout_kt__ksu682();
    return LeftBorderedCalloutVariant;
  }
  var LeftBorderedCalloutVariant;
  function get_LeftBorderedFilledCalloutVariant() {
    _init_properties_Callout_kt__ksu682();
    return LeftBorderedFilledCalloutVariant;
  }
  var LeftBorderedFilledCalloutVariant;
  function get_OutlinedCalloutVariant() {
    _init_properties_Callout_kt__ksu682();
    return OutlinedCalloutVariant;
  }
  var OutlinedCalloutVariant;
  function get_OutlinedFilledCalloutVariant() {
    _init_properties_Callout_kt__ksu682();
    return OutlinedFilledCalloutVariant;
  }
  var OutlinedFilledCalloutVariant;
  function get_MatchingLinkCalloutVariant() {
    _init_properties_Callout_kt__ksu682();
    return MatchingLinkCalloutVariant;
  }
  var MatchingLinkCalloutVariant;
  var com_varabyte_kobweb_silk_components_display_CalloutVars$stable;
  var com_varabyte_kobweb_silk_components_display_CalloutType$stable;
  var com_varabyte_kobweb_silk_components_display_CalloutDefaults$stable;
  function CalloutVars$_get_Color_$ref_c79x0r() {
    return function (p0) {
      return p0.s3c();
    };
  }
  function CalloutVars$_get_BackgroundColor_$ref_6qzwbh() {
    return function (p0) {
      return p0.u3c();
    };
  }
  function CalloutVars$_get_TitleFontSize_$ref_d27e7k() {
    return function (p0) {
      return p0.o3d();
    };
  }
  function CalloutVars$_get_TitleGap_$ref_ygrq2s() {
    return function (p0) {
      return p0.p3d();
    };
  }
  function CalloutVars$_get_TitleLineHeight_$ref_1mexdx() {
    return function (p0) {
      return p0.q3d();
    };
  }
  function CalloutVars() {
    CalloutVars_instance = this;
    this.j3d_1 = StyleVariable('silk');
    this.k3d_1 = StyleVariable('silk');
    this.l3d_1 = StyleVariable('silk');
    var tmp = this;
    var tmp0_defaultFallback = get_cssRem(0.5);
    tmp.m3d_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.n3d_1 = StyleVariable_2(1, 'silk');
  }
  protoOf(CalloutVars).s3c = function () {
    var tmp = KProperty1;
    return this.j3d_1.k2s(this, getPropertyCallableRef('Color', 1, tmp, CalloutVars$_get_Color_$ref_c79x0r(), null));
  };
  protoOf(CalloutVars).u3c = function () {
    var tmp = KProperty1;
    return this.k3d_1.k2s(this, getPropertyCallableRef('BackgroundColor', 1, tmp, CalloutVars$_get_BackgroundColor_$ref_6qzwbh(), null));
  };
  protoOf(CalloutVars).o3d = function () {
    var tmp = KProperty1;
    return this.l3d_1.k2s(this, getPropertyCallableRef('TitleFontSize', 1, tmp, CalloutVars$_get_TitleFontSize_$ref_d27e7k(), null));
  };
  protoOf(CalloutVars).p3d = function () {
    var tmp = KProperty1;
    return this.m3d_1.k2s(this, getPropertyCallableRef('TitleGap', 1, tmp, CalloutVars$_get_TitleGap_$ref_ygrq2s(), null));
  };
  protoOf(CalloutVars).q3d = function () {
    var tmp = KProperty1;
    return this.n3d_1.k2s(this, getPropertyCallableRef('TitleLineHeight', 1, tmp, CalloutVars$_get_TitleLineHeight_$ref_1mexdx(), null));
  };
  var CalloutVars_instance;
  function CalloutVars_getInstance() {
    if (CalloutVars_instance == null)
      new CalloutVars();
    return CalloutVars_instance;
  }
  function removeEdgeParagraphSpacing(_this__u8e3s4) {
    _init_properties_Callout_kt__ksu682();
    _this__u8e3s4.p35(' > .callout-body > p:first-child', removeEdgeParagraphSpacing$lambda);
    _this__u8e3s4.p35(' > .callout-body > p:last-child', removeEdgeParagraphSpacing$lambda_0);
  }
  function CalloutType$Companion$CAUTION$lambda(it) {
    return get_callout_0(toPalette(it)).r3d();
  }
  function CalloutType$Companion$IMPORTANT$lambda(it) {
    return get_callout_0(toPalette(it)).s3d();
  }
  function CalloutType$Companion$NOTE$lambda(it) {
    return get_callout_0(toPalette(it)).t3d();
  }
  function CalloutType$Companion$QUESTION$lambda(it) {
    return get_callout_0(toPalette(it)).u3d();
  }
  function CalloutType$Companion$QUOTE$lambda(it) {
    return get_callout_0(toPalette(it)).v3d();
  }
  function CalloutType$Companion$TIP$lambda(it) {
    return get_callout_0(toPalette(it)).w3d();
  }
  function CalloutType$Companion$WARNING$lambda(it) {
    return get_callout_0(toPalette(it)).x3d();
  }
  function CalloutType_init_$Init$(icon, label, provideColor, $this) {
    var tmp = CalloutType$_init_$lambda_4upqpt_0(provideColor);
    CalloutType.call($this, icon, label, tmp, CalloutType$_init_$lambda_4upqpt_1(provideColor));
    return $this;
  }
  function CalloutType_init_$Create$(icon, label, provideColor) {
    return CalloutType_init_$Init$(icon, label, provideColor, objectCreate(protoOf(CalloutType)));
  }
  function Companion() {
    Companion_instance_19 = this;
    var tmp = this;
    var tmp_0 = ComposableSingletons$CalloutKt_getInstance().y3d_1;
    tmp.f3e_1 = CalloutType_init_$Create$(tmp_0, 'Caution', CalloutType$Companion$CAUTION$lambda);
    var tmp_1 = this;
    var tmp_2 = ComposableSingletons$CalloutKt_getInstance().z3d_1;
    tmp_1.g3e_1 = CalloutType_init_$Create$(tmp_2, 'Important', CalloutType$Companion$IMPORTANT$lambda);
    var tmp_3 = this;
    var tmp_4 = ComposableSingletons$CalloutKt_getInstance().a3e_1;
    tmp_3.h3e_1 = CalloutType_init_$Create$(tmp_4, 'Note', CalloutType$Companion$NOTE$lambda);
    var tmp_5 = this;
    var tmp_6 = ComposableSingletons$CalloutKt_getInstance().b3e_1;
    tmp_5.i3e_1 = CalloutType_init_$Create$(tmp_6, 'Question', CalloutType$Companion$QUESTION$lambda);
    var tmp_7 = this;
    var tmp_8 = ComposableSingletons$CalloutKt_getInstance().c3e_1;
    tmp_7.j3e_1 = CalloutType_init_$Create$(tmp_8, 'Quote', CalloutType$Companion$QUOTE$lambda);
    var tmp_9 = this;
    var tmp_10 = ComposableSingletons$CalloutKt_getInstance().d3e_1;
    tmp_9.k3e_1 = CalloutType_init_$Create$(tmp_10, 'Tip', CalloutType$Companion$TIP$lambda);
    var tmp_11 = this;
    var tmp_12 = ComposableSingletons$CalloutKt_getInstance().e3e_1;
    tmp_11.l3e_1 = CalloutType_init_$Create$(tmp_12, 'Warning', CalloutType$Companion$WARNING$lambda);
  }
  var Companion_instance_19;
  function Companion_getInstance_1() {
    if (Companion_instance_19 == null)
      new Companion();
    return Companion_instance_19;
  }
  function CalloutType$_init_$lambda_4upqpt($provideColor, $provideBackgroundColor) {
    return function (_this__u8e3s4) {
      return setVariable(setVariable(Companion_instance, CalloutVars_getInstance().s3c(), $provideColor(_this__u8e3s4.q37_1)), CalloutVars_getInstance().u3c(), $provideBackgroundColor(_this__u8e3s4.q37_1));
    };
  }
  function CalloutType$_init_$lambda_4upqpt_0($provideColor) {
    return function (it) {
      return $provideColor(it);
    };
  }
  function CalloutType$_init_$lambda_4upqpt_1($provideColor) {
    return function (it) {
      return $provideColor(it).g31().e31(VOID, VOID, VOID, it.z39() ? 0.15 : 0.2);
    };
  }
  function CalloutType(icon, label, provideColor, provideBackgroundColor) {
    Companion_getInstance_1();
    Base.call(this, CalloutType$_init_$lambda_4upqpt(provideColor, provideBackgroundColor));
    this.o3e_1 = icon;
    this.p3e_1 = label;
  }
  function ComposableLambda$invoke$ref(p0) {
    return function (_this__u8e3s4, p0_0) {
      return p0.g1g(_this__u8e3s4, p0_0);
    };
  }
  function ComposableSingletons$CalloutKt$lambda$1105541261$lambda($composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.r1i(!(($changed & 3) === 2), $changed & 1)) {
      StopIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.w19();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_0(p0) {
    return function (_this__u8e3s4, p0_0) {
      return p0.g1g(_this__u8e3s4, p0_0);
    };
  }
  function ComposableSingletons$CalloutKt$lambda$_700737724$lambda_78p56o($composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.r1i(!(($changed & 3) === 2), $changed & 1)) {
      ExclaimIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.w19();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_1(p0) {
    return function (_this__u8e3s4, p0_0) {
      return p0.g1g(_this__u8e3s4, p0_0);
    };
  }
  function ComposableSingletons$CalloutKt$lambda$_1510536654$lambda_g5bhof($composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.r1i(!(($changed & 3) === 2), $changed & 1)) {
      InfoIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.w19();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_2(p0) {
    return function (_this__u8e3s4, p0_0) {
      return p0.g1g(_this__u8e3s4, p0_0);
    };
  }
  function ComposableSingletons$CalloutKt$lambda$_2086387290$lambda_cn27wu($composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.r1i(!(($changed & 3) === 2), $changed & 1)) {
      QuestionIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.w19();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_3(p0) {
    return function (_this__u8e3s4, p0_0) {
      return p0.g1g(_this__u8e3s4, p0_0);
    };
  }
  function ComposableSingletons$CalloutKt$lambda$1974337438$lambda($composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.r1i(!(($changed & 3) === 2), $changed & 1)) {
      QuoteIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.w19();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_4(p0) {
    return function (_this__u8e3s4, p0_0) {
      return p0.g1g(_this__u8e3s4, p0_0);
    };
  }
  function ComposableSingletons$CalloutKt$lambda$_613517763$lambda_5n9r8($composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.r1i(!(($changed & 3) === 2), $changed & 1)) {
      LightbulbIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.w19();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_5(p0) {
    return function (_this__u8e3s4, p0_0) {
      return p0.g1g(_this__u8e3s4, p0_0);
    };
  }
  function ComposableSingletons$CalloutKt$lambda$2087814270$lambda($composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.r1i(!(($changed & 3) === 2), $changed & 1)) {
      WarningIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.w19();
    }
    return Unit_instance;
  }
  function ComposableSingletons$CalloutKt() {
    ComposableSingletons$CalloutKt_instance = this;
    var tmp = this;
    tmp.y3d_1 = ComposableLambda$invoke$ref(composableLambdaInstance(1105541261, false, ComposableSingletons$CalloutKt$lambda$1105541261$lambda));
    var tmp_0 = this;
    tmp_0.z3d_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-700737724, false, ComposableSingletons$CalloutKt$lambda$_700737724$lambda_78p56o));
    var tmp_1 = this;
    tmp_1.a3e_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(-1510536654, false, ComposableSingletons$CalloutKt$lambda$_1510536654$lambda_g5bhof));
    var tmp_2 = this;
    tmp_2.b3e_1 = ComposableLambda$invoke$ref_2(composableLambdaInstance(-2086387290, false, ComposableSingletons$CalloutKt$lambda$_2086387290$lambda_cn27wu));
    var tmp_3 = this;
    tmp_3.c3e_1 = ComposableLambda$invoke$ref_3(composableLambdaInstance(1974337438, false, ComposableSingletons$CalloutKt$lambda$1974337438$lambda));
    var tmp_4 = this;
    tmp_4.d3e_1 = ComposableLambda$invoke$ref_4(composableLambdaInstance(-613517763, false, ComposableSingletons$CalloutKt$lambda$_613517763$lambda_5n9r8));
    var tmp_5 = this;
    tmp_5.e3e_1 = ComposableLambda$invoke$ref_5(composableLambdaInstance(2087814270, false, ComposableSingletons$CalloutKt$lambda$2087814270$lambda));
  }
  var ComposableSingletons$CalloutKt_instance;
  function ComposableSingletons$CalloutKt_getInstance() {
    if (ComposableSingletons$CalloutKt_instance == null)
      new ComposableSingletons$CalloutKt();
    return ComposableSingletons$CalloutKt_instance;
  }
  function CalloutStyle$lambda($this$CssStyle) {
    _init_properties_Callout_kt__ksu682();
    $this$CssStyle.n35(CalloutStyle$lambda$lambda);
    $this$CssStyle.p35(' >.callout-title', CalloutStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function CalloutStyle$lambda$lambda() {
    _init_properties_Callout_kt__ksu682();
    return marginBlock(textAlign(Companion_instance, Companion_instance_6.s2p()), get_em(1));
  }
  function CalloutStyle$lambda$lambda_0() {
    _init_properties_Callout_kt__ksu682();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return lineHeight(gap(fontSize(fontWeight(alignItems(display(tmp, 'flex'), Companion_instance_8.r2p()), Companion_instance_9.h2q()), CalloutVars_getInstance().o3d().e2s()), CalloutVars_getInstance().p3d().e2s()), CalloutVars_getInstance().q3d().e2s());
  }
  function LeftBorderedCalloutVariant$lambda($this$addVariant) {
    _init_properties_Callout_kt__ksu682();
    $this$addVariant.n35(LeftBorderedCalloutVariant$lambda$lambda);
    $this$addVariant.p35(' >.callout-title', LeftBorderedCalloutVariant$lambda$lambda_0);
    removeEdgeParagraphSpacing($this$addVariant);
    return Unit_instance;
  }
  function LeftBorderedCalloutVariant$lambda$lambda() {
    _init_properties_Callout_kt__ksu682();
    var tmp = Companion_instance;
    var tmp_0 = get_em(0.25);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return padding_0(borderLeft(tmp, tmp_0, 'solid', CalloutVars_getInstance().s3c().e2s()), get_cssRem(0.5), get_cssRem(1));
  }
  function LeftBorderedCalloutVariant$lambda$lambda_0() {
    _init_properties_Callout_kt__ksu682();
    var tmp = color(Companion_instance, CalloutVars_getInstance().s3c().e2s());
    return margin_0(tmp, LeftBorderedCalloutVariant$lambda$lambda$lambda);
  }
  function LeftBorderedCalloutVariant$lambda$lambda$lambda($this$margin) {
    _init_properties_Callout_kt__ksu682();
    $this$margin.v32(get_cssRem(1));
    return Unit_instance;
  }
  function LeftBorderedFilledCalloutVariant$lambda($this$addVariant) {
    _init_properties_Callout_kt__ksu682();
    $this$addVariant.n35(LeftBorderedFilledCalloutVariant$lambda$lambda);
    $this$addVariant.p35(' >.callout-title', LeftBorderedFilledCalloutVariant$lambda$lambda_0);
    removeEdgeParagraphSpacing($this$addVariant);
    return Unit_instance;
  }
  function LeftBorderedFilledCalloutVariant$lambda$lambda() {
    _init_properties_Callout_kt__ksu682();
    var tmp = Companion_instance;
    var tmp_0 = get_em(0.25);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return boxShadow(padding_0(borderRadius(backgroundColor(borderLeft(tmp, tmp_0, 'solid', CalloutVars_getInstance().s3c().e2s()), CalloutVars_getInstance().u3c().e2s()), get_px(4)), get_cssRem(0.75), get_cssRem(1)), [Companion_instance_10.x2p(get_px(0), get_px(1), get_px(2), VOID, Colors_instance.s31().e31(VOID, VOID, VOID, 0.12)), Companion_instance_10.x2p(get_px(0), get_px(3), get_px(10), VOID, Colors_instance.s31().e31(VOID, VOID, VOID, 0.08))]);
  }
  function LeftBorderedFilledCalloutVariant$lambda$lambda_0() {
    _init_properties_Callout_kt__ksu682();
    var tmp = color(Companion_instance, CalloutVars_getInstance().s3c().e2s());
    return margin_0(tmp, LeftBorderedFilledCalloutVariant$lambda$lambda$lambda);
  }
  function LeftBorderedFilledCalloutVariant$lambda$lambda$lambda($this$margin) {
    _init_properties_Callout_kt__ksu682();
    $this$margin.v32(get_cssRem(0.75));
    return Unit_instance;
  }
  function OutlinedCalloutVariant$lambda($this$addVariant) {
    _init_properties_Callout_kt__ksu682();
    $this$addVariant.n35(OutlinedCalloutVariant$lambda$lambda);
    $this$addVariant.p35(' >.callout-title', OutlinedCalloutVariant$lambda$lambda_0);
    $this$addVariant.p35(' .callout-icon', OutlinedCalloutVariant$lambda$lambda_1);
    $this$addVariant.p35(' >.callout-body', OutlinedCalloutVariant$lambda$lambda_2);
    removeEdgeParagraphSpacing($this$addVariant);
    return Unit_instance;
  }
  function OutlinedCalloutVariant$lambda$lambda() {
    _init_properties_Callout_kt__ksu682();
    var tmp = Companion_instance;
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderRadius(border(tmp, tmp_0, 'solid', CalloutVars_getInstance().s3c().e2s()), get_cssRem(0.2));
  }
  function OutlinedCalloutVariant$lambda$lambda_0() {
    _init_properties_Callout_kt__ksu682();
    return padding_0(backgroundColor(Companion_instance, CalloutVars_getInstance().u3c().e2s()), get_cssRem(0.75), get_cssRem(0.75));
  }
  function OutlinedCalloutVariant$lambda$lambda_1() {
    _init_properties_Callout_kt__ksu682();
    return color(Companion_instance, CalloutVars_getInstance().s3c().e2s());
  }
  function OutlinedCalloutVariant$lambda$lambda_2() {
    _init_properties_Callout_kt__ksu682();
    return padding_0(Companion_instance, get_cssRem(0.75), get_cssRem(0.75));
  }
  function OutlinedFilledCalloutVariant$lambda($this$addVariant) {
    _init_properties_Callout_kt__ksu682();
    $this$addVariant.n35(OutlinedFilledCalloutVariant$lambda$lambda);
    $this$addVariant.p35(' >.callout-title', OutlinedFilledCalloutVariant$lambda$lambda_0);
    removeEdgeParagraphSpacing($this$addVariant);
    return Unit_instance;
  }
  function OutlinedFilledCalloutVariant$lambda$lambda() {
    _init_properties_Callout_kt__ksu682();
    var tmp = Companion_instance;
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return padding(borderRadius(backgroundColor(border(tmp, tmp_0, 'solid', CalloutVars_getInstance().s3c().e2s()), CalloutVars_getInstance().u3c().e2s()), get_px(4)), get_cssRem(0.75));
  }
  function OutlinedFilledCalloutVariant$lambda$lambda_0() {
    _init_properties_Callout_kt__ksu682();
    var tmp = color(Companion_instance, CalloutVars_getInstance().s3c().e2s());
    return margin_0(tmp, OutlinedFilledCalloutVariant$lambda$lambda$lambda);
  }
  function OutlinedFilledCalloutVariant$lambda$lambda$lambda($this$margin) {
    _init_properties_Callout_kt__ksu682();
    $this$margin.v32(get_cssRem(0.75));
    return Unit_instance;
  }
  function MatchingLinkCalloutVariant$lambda($this$addVariant) {
    _init_properties_Callout_kt__ksu682();
    descendants($this$addVariant, [':any-link'], MatchingLinkCalloutVariant$lambda$lambda);
    return Unit_instance;
  }
  function MatchingLinkCalloutVariant$lambda$lambda() {
    _init_properties_Callout_kt__ksu682();
    return color(Companion_instance, CalloutVars_getInstance().s3c().e2s());
  }
  function removeEdgeParagraphSpacing$lambda() {
    _init_properties_Callout_kt__ksu682();
    var tmp = Companion_instance;
    return marginBlock_0(tmp, removeEdgeParagraphSpacing$lambda$lambda);
  }
  function removeEdgeParagraphSpacing$lambda$lambda($this$marginBlock) {
    _init_properties_Callout_kt__ksu682();
    $this$marginBlock.x32(get_px(0));
    return Unit_instance;
  }
  function removeEdgeParagraphSpacing$lambda_0() {
    _init_properties_Callout_kt__ksu682();
    var tmp = Companion_instance;
    return marginBlock_0(tmp, removeEdgeParagraphSpacing$lambda$lambda_0);
  }
  function removeEdgeParagraphSpacing$lambda$lambda_0($this$marginBlock) {
    _init_properties_Callout_kt__ksu682();
    $this$marginBlock.y32(get_px(0));
    return Unit_instance;
  }
  var properties_initialized_Callout_kt_nor0bk;
  function _init_properties_Callout_kt__ksu682() {
    if (!properties_initialized_Callout_kt_nor0bk) {
      properties_initialized_Callout_kt_nor0bk = true;
      CalloutStyle = CssStyle(VOID, CalloutStyle$lambda);
      var tmp = get_CalloutStyle();
      LeftBorderedCalloutVariant = addVariant(tmp, VOID, LeftBorderedCalloutVariant$lambda);
      var tmp_0 = get_CalloutStyle();
      LeftBorderedFilledCalloutVariant = addVariant(tmp_0, VOID, LeftBorderedFilledCalloutVariant$lambda);
      var tmp_1 = get_CalloutStyle();
      OutlinedCalloutVariant = addVariant(tmp_1, VOID, OutlinedCalloutVariant$lambda);
      var tmp_2 = get_CalloutStyle();
      OutlinedFilledCalloutVariant = addVariant(tmp_2, VOID, OutlinedFilledCalloutVariant$lambda);
      var tmp_3 = get_CalloutStyle();
      MatchingLinkCalloutVariant = addVariant(tmp_3, VOID, MatchingLinkCalloutVariant$lambda);
      com_varabyte_kobweb_silk_components_display_CalloutVars$stable = 8;
      com_varabyte_kobweb_silk_components_display_CalloutType$stable = com_varabyte_kobweb_silk_style_CssStyle_Restricted_Base$stableprop_getter();
      com_varabyte_kobweb_silk_components_display_CalloutDefaults$stable = com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter();
    }
  }
  function get_ButtonStyle() {
    _init_properties_Button_kt__2845m6();
    return ButtonStyle;
  }
  var ButtonStyle;
  var com_varabyte_kobweb_silk_components_forms_ButtonVars$stable;
  var com_varabyte_kobweb_silk_components_forms_ButtonSize$stable;
  function ButtonVars$_get_BackgroundDefaultColor_$ref_p4munk() {
    return function (p0) {
      return p0.z3e();
    };
  }
  function ButtonVars$_get_BackgroundFocusColor_$ref_4ogjpj() {
    return function (p0) {
      return p0.a3f();
    };
  }
  function ButtonVars$_get_BackgroundHoverColor_$ref_sxwca3() {
    return function (p0) {
      return p0.b3f();
    };
  }
  function ButtonVars$_get_BackgroundPressedColor_$ref_ig9prj() {
    return function (p0) {
      return p0.c3f();
    };
  }
  function ButtonVars$_get_Color_$ref_90hsrb() {
    return function (p0) {
      return p0.s3c();
    };
  }
  function ButtonVars$_get_ColorTransitionDuration_$ref_7uf2ku() {
    return function (p0) {
      return p0.z3c();
    };
  }
  function ButtonVars$_get_FontSize_$ref_o5ikts() {
    return function (p0) {
      return p0.d3f();
    };
  }
  function ButtonVars$_get_Height_$ref_re4w87() {
    return function (p0) {
      return p0.e3f();
    };
  }
  function ButtonVars$_get_PaddingHorizontal_$ref_uqasd7() {
    return function (p0) {
      return p0.f3f();
    };
  }
  function ButtonVars() {
    ButtonVars_instance = this;
    this.q3e_1 = StyleVariable('silk');
    var tmp = this;
    var tmp0_defaultFallback = get_FocusOutlineColorVar().e2s();
    tmp.r3e_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.s3e_1 = StyleVariable('silk');
    this.t3e_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_ColorVar().e2s();
    tmp_0.u3e_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().i3d().e2s();
    tmp_1.v3e_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
    this.w3e_1 = StyleVariable('silk');
    this.x3e_1 = StyleVariable('silk');
    this.y3e_1 = StyleVariable('silk');
  }
  protoOf(ButtonVars).z3e = function () {
    var tmp = KProperty1;
    return this.q3e_1.k2s(this, getPropertyCallableRef('BackgroundDefaultColor', 1, tmp, ButtonVars$_get_BackgroundDefaultColor_$ref_p4munk(), null));
  };
  protoOf(ButtonVars).a3f = function () {
    var tmp = KProperty1;
    return this.r3e_1.k2s(this, getPropertyCallableRef('BackgroundFocusColor', 1, tmp, ButtonVars$_get_BackgroundFocusColor_$ref_4ogjpj(), null));
  };
  protoOf(ButtonVars).b3f = function () {
    var tmp = KProperty1;
    return this.s3e_1.k2s(this, getPropertyCallableRef('BackgroundHoverColor', 1, tmp, ButtonVars$_get_BackgroundHoverColor_$ref_sxwca3(), null));
  };
  protoOf(ButtonVars).c3f = function () {
    var tmp = KProperty1;
    return this.t3e_1.k2s(this, getPropertyCallableRef('BackgroundPressedColor', 1, tmp, ButtonVars$_get_BackgroundPressedColor_$ref_ig9prj(), null));
  };
  protoOf(ButtonVars).s3c = function () {
    var tmp = KProperty1;
    return this.u3e_1.k2s(this, getPropertyCallableRef('Color', 1, tmp, ButtonVars$_get_Color_$ref_90hsrb(), null));
  };
  protoOf(ButtonVars).z3c = function () {
    var tmp = KProperty1;
    return this.v3e_1.k2s(this, getPropertyCallableRef('ColorTransitionDuration', 1, tmp, ButtonVars$_get_ColorTransitionDuration_$ref_7uf2ku(), null));
  };
  protoOf(ButtonVars).d3f = function () {
    var tmp = KProperty1;
    return this.w3e_1.k2s(this, getPropertyCallableRef('FontSize', 1, tmp, ButtonVars$_get_FontSize_$ref_o5ikts(), null));
  };
  protoOf(ButtonVars).e3f = function () {
    var tmp = KProperty1;
    return this.x3e_1.k2s(this, getPropertyCallableRef('Height', 1, tmp, ButtonVars$_get_Height_$ref_re4w87(), null));
  };
  protoOf(ButtonVars).f3f = function () {
    var tmp = KProperty1;
    return this.y3e_1.k2s(this, getPropertyCallableRef('PaddingHorizontal', 1, tmp, ButtonVars$_get_PaddingHorizontal_$ref_uqasd7(), null));
  };
  var ButtonVars_instance;
  function ButtonVars_getInstance() {
    if (ButtonVars_instance == null)
      new ButtonVars();
    return ButtonVars_instance;
  }
  function Companion_0() {
    Companion_instance_20 = this;
    this.g3f_1 = new ButtonSize(FontSizeVars_getInstance().o3f().e2s(), get_cssRem(1.5), get_cssRem(0.5));
    this.h3f_1 = new ButtonSize(FontSizeVars_getInstance().p3f().e2s(), get_cssRem(2), get_cssRem(0.75));
    this.i3f_1 = new ButtonSize(FontSizeVars_getInstance().q3f().e2s(), get_cssRem(2.5), get_cssRem(1));
    this.j3f_1 = new ButtonSize(FontSizeVars_getInstance().r3f().e2s(), get_cssRem(3), get_cssRem(1.5));
  }
  var Companion_instance_20;
  function Companion_getInstance_2() {
    if (Companion_instance_20 == null)
      new Companion_0();
    return Companion_instance_20;
  }
  function ButtonSize(fontSize, height, horizontalPadding) {
    Companion_getInstance_2();
    Base_init_$Init$(setVariable(setVariable(setVariable(Companion_instance, ButtonVars_getInstance().d3f(), fontSize), ButtonVars_getInstance().e3f(), height), ButtonVars_getInstance().f3f(), horizontalPadding), VOID, this);
  }
  function Button_0(onClick_0, modifier, variant, type, enabled, size, colorPalette, focusBorderColor, ref, content, $composer, $changed, $default) {
    _init_properties_Button_kt__2845m6();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var type_0 = {_v: type};
    var enabled_0 = {_v: enabled};
    var size_0 = {_v: size};
    var colorPalette_0 = {_v: colorPalette};
    var focusBorderColor_0 = {_v: focusBorderColor};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.y1i(366060417);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.m1h(onClick_0) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.m1h(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ((($changed & 512) === 0 ? $composer_0.z16(variant_0._v) : $composer_0.m1h(variant_0._v)) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0) {
      var tmp;
      var tmp_0 = $composer_0;
      var tmpEnum = type_0._v;
      if (tmp_0.o1h(tmpEnum == null ? -1 : tmpEnum.p2_1)) {
        tmp = 2048;
      } else {
        tmp = 1024;
      }
      $dirty = $dirty | tmp;
    }
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.n1h(enabled_0._v) ? 16384 : 8192);
    if (($changed & 196608) === 0)
      $dirty = $dirty | (($default & 32) === 0 && (($changed & 262144) === 0 ? $composer_0.z16(size_0._v) : $composer_0.m1h(size_0._v)) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.m1h(colorPalette_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.m1h(focusBorderColor_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 100663296) === 0)
      $dirty = $dirty | ((($changed & 134217728) === 0 ? $composer_0.z16(ref_0._v) : $composer_0.m1h(ref_0._v)) ? 67108864 : 33554432);
    if (($changed & 805306368) === 0)
      $dirty = $dirty | ($composer_0.m1h(content) ? 536870912 : 268435456);
    if ($composer_0.r1i(!(($dirty & 306783379) === 306783378), $dirty & 1)) {
      $composer_0.s1g();
      if (($changed & 1) === 0 || $composer_0.w1g()) {
        if (!(($default & 2) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 4) === 0)) {
          variant_0._v = null;
        }
        if (!(($default & 8) === 0)) {
          type_0._v = ButtonType_Button_getInstance();
        }
        if (!(($default & 16) === 0)) {
          enabled_0._v = true;
        }
        if (!(($default & 32) === 0)) {
          size_0._v = Companion_getInstance_2().i3f_1;
          $dirty = $dirty & -458753;
        }
        if (!(($default & 64) === 0)) {
          colorPalette_0._v = null;
        }
        if (!(($default & 128) === 0)) {
          focusBorderColor_0._v = null;
        }
        if (!(($default & 256) === 0)) {
          ref_0._v = null;
        }
      } else {
        $composer_0.w19();
        if (!(($default & 32) === 0))
          $dirty = $dirty & -458753;
      }
      $composer_0.t1g();
      $composer_0.p1g(-403206744);
      $composer_0.p1g(-403236728);
      var tmp0 = thenIf(toModifier(get_ButtonStyle(), [variant_0._v], $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter() | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 3), !enabled_0._v, toModifier_0(get_DisabledStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter())).c30(toModifier_1(size_0._v, $composer_0, com_varabyte_kobweb_silk_style_CssStyle_Restricted_Base$stableprop_getter() | 14 & $dirty >> 15));
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
      var tmp_1;
      if (!(colorPalette_0._v == null)) {
        var colorPalette_1 = ensureNotNull(colorPalette_0._v);
        var isDark = Companion_instance_11.f33($composer_0, 6).a3a();
        var isBrightColor = get_isBright(isDark ? colorPalette_1.m3a() : colorPalette_1.p3a());
        tmp_1 = setVariable(setVariable(setVariable(setVariable(Companion_instance, ButtonVars_getInstance().s3c(), get_color(toPalette(isBrightColor ? ColorMode_LIGHT_getInstance() : ColorMode_DARK_getInstance()))), ButtonVars_getInstance().z3e(), isDark ? colorPalette_1.m3a() : colorPalette_1.p3a()), ButtonVars_getInstance().b3f(), isDark ? colorPalette_1.n3a() : colorPalette_1.q3a()), ButtonVars_getInstance().c3f(), isDark ? colorPalette_1.o3a() : colorPalette_1.r3a());
      } else {
        tmp_1 = Companion_instance;
      }
      var tmp0_group = tmp0.c30(tmp_1);
      $composer_0.r1g();
      var tmp0_0 = setVariable(tmp0_group, ButtonVars_getInstance().a3f(), focusBorderColor_0._v).c30(modifier_0._v);
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
      var tmp_2;
      if (enabled_0._v) {
        var tmp_3 = Companion_instance;
        var tmp0_1 = $composer_0;
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = ($dirty & 14) === 4;
        // Inline function 'kotlin.let' call
        var it = tmp0_1.y1h();
        var tmp_4;
        if (invalid || it === Companion_getInstance().f1a_1) {
          var value = Button$lambda(onClick_0);
          tmp0_1.j1i(value);
          tmp_4 = value;
        } else {
          tmp_4 = it;
        }
        var tmp_5 = tmp_4;
        var tmp$ret$5 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        tmp_2 = onClick(tmp_3, tmp$ret$5);
      } else {
        tmp_2 = Companion_instance;
      }
      var tmp1_group = tmp0_0.c30(tmp_2);
      $composer_0.r1g();
      var tmp0_2 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = ($dirty & 7168) === 2048;
      // Inline function 'kotlin.let' call
      var it_0 = tmp0_2.y1h();
      var tmp_6;
      if (invalid_0 || it_0 === Companion_getInstance().f1a_1) {
        var value_0 = Button$lambda_0(type_0);
        tmp0_2.j1i(value_0);
        tmp_6 = value_0;
      } else {
        tmp_6 = it_0;
      }
      var tmp_7 = tmp_6;
      var tmp$ret$11 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      var tmp_8 = toAttrs(tmp1_group, tmp$ret$11);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(934841147, true, Button$lambda_1(ref_0, content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = $composer_1.z16(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_1 = $composer_1.y1h();
      var tmp_9;
      if (invalid_1 || it_1 === Companion_getInstance().f1a_1) {
        var value_1 = ComposableLambda$invoke$ref_6(dispatchReceiver);
        $composer_1.j1i(value_1);
        tmp_9 = value_1;
      } else {
        tmp_9 = it_1;
      }
      var tmp_10 = tmp_9;
      var tmp0_3 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Button(tmp_8, tmp0_3, $composer_0, 48, 0);
    } else {
      $composer_0.w19();
    }
    var tmp2_safe_receiver = $composer_0.z1i();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.d1o(Button$lambda_2(onClick_0, modifier_0, variant_0, type_0, enabled_0, size_0, colorPalette_0, focusBorderColor_0, ref_0, content, $changed, $default));
    }
  }
  function com_varabyte_kobweb_silk_components_forms_ButtonSize$stableprop_getter() {
    return com_varabyte_kobweb_silk_components_forms_ButtonSize$stable;
  }
  function ButtonStyle$lambda($this$CssStyle) {
    _init_properties_Button_kt__2845m6();
    $this$CssStyle.n35(ButtonStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle).m36(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    $this$CssStyle.p37(tmp, ButtonStyle$lambda$lambda_0);
    var tmp_0 = get_focusVisible($this$CssStyle).m36(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    $this$CssStyle.p37(tmp_0, ButtonStyle$lambda$lambda_1);
    var tmp_1 = get_active($this$CssStyle).m36(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    $this$CssStyle.p37(tmp_1, ButtonStyle$lambda$lambda_2);
    return Unit_instance;
  }
  function ButtonStyle$lambda$lambda() {
    _init_properties_Button_kt__2845m6();
    var tmp = borderRadius(verticalAlign(padding_0(whiteSpace(fontWeight(fontSize(minWidth(height(lineHeight(backgroundColor(color(Companion_instance, ButtonVars_getInstance().s3c().e2s()), ButtonVars_getInstance().z3e().e2s()), 1.2), ButtonVars_getInstance().e3f().e2s()), ButtonVars_getInstance().e3f().e2s()), ButtonVars_getInstance().d3f().e2s()), Companion_instance_9.i2q()), Companion_instance_12.n2s()), VOID, ButtonVars_getInstance().f3f().e2s()), Companion_instance_13.l2r()), get_cssRem(0.375));
    return transition_0(userSelect(border_0(tmp, ButtonStyle$lambda$lambda$lambda), Companion_instance_3.g2q()), [Companion_instance_2.t2s('background-color', ButtonVars_getInstance().z3c().e2s())]);
  }
  function ButtonStyle$lambda$lambda$lambda($this$border) {
    _init_properties_Button_kt__2845m6();
    $this$border.t32(get_px(0));
    return Unit_instance;
  }
  function ButtonStyle$lambda$lambda_0() {
    _init_properties_Button_kt__2845m6();
    return cursor(backgroundColor(Companion_instance, ButtonVars_getInstance().b3f().e2s()), Companion_instance_1.e2q());
  }
  function ButtonStyle$lambda$lambda_1() {
    _init_properties_Button_kt__2845m6();
    var tmp = Companion_instance;
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return boxShadow_0(outline(tmp, tmp_0, 'solid', Colors_instance.q31()), VOID, VOID, VOID, get_cssRem(0.1875), ButtonVars_getInstance().a3f().e2s());
  }
  function ButtonStyle$lambda$lambda_2() {
    _init_properties_Button_kt__2845m6();
    return backgroundColor(Companion_instance, ButtonVars_getInstance().c3f().e2s());
  }
  function Button$lambda($onClick) {
    return function (evt) {
      $onClick(evt);
      evt.e2o();
      return Unit_instance;
    };
  }
  function Button$lambda_0($type) {
    return function ($this$toAttrs) {
      type($this$toAttrs, $type._v);
      return Unit_instance;
    };
  }
  function Button$lambda_1($ref, $content) {
    return function ($this$JbButton, $composer, $changed) {
      var $composer_0 = $composer;
      registerRefScope($this$JbButton, $ref._v, $composer_0, 14 & $changed | com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter() << 3);
      var tmp = Center_instance;
      var tmp_0 = CenterVertically_instance;
      Row(null, tmp, tmp_0, null, $content, $composer_0, com_varabyte_kobweb_compose_foundation_layout_Arrangement_Center$stableprop_getter() << 3 | com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stableprop_getter() << 6, 9);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_6(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.q2a(_this__u8e3s4, p0_0, p1);
    };
  }
  function Button$lambda_2($onClick, $modifier, $variant, $type, $enabled, $size, $colorPalette, $focusBorderColor, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Button_0($onClick, $modifier._v, $variant._v, $type._v, $enabled._v, $size._v, $colorPalette._v, $focusBorderColor._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var properties_initialized_Button_kt_yov184;
  function _init_properties_Button_kt__2845m6() {
    if (!properties_initialized_Button_kt_yov184) {
      properties_initialized_Button_kt_yov184 = true;
      ButtonStyle = CssStyle(VOID, ButtonStyle$lambda);
      com_varabyte_kobweb_silk_components_forms_ButtonVars$stable = 8;
      com_varabyte_kobweb_silk_components_forms_ButtonSize$stable = com_varabyte_kobweb_silk_style_CssStyle_Restricted_Base$stableprop_getter();
    }
  }
  function get_CheckboxStyle() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxStyle;
  }
  var CheckboxStyle;
  function get_CheckboxEnabledAnim() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxEnabledAnim;
  }
  var CheckboxEnabledAnim;
  function get_CheckboxIconContainerStyle() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxIconContainerStyle;
  }
  var CheckboxIconContainerStyle;
  function get_UncheckedCheckboxIconContainerVariant() {
    _init_properties_Checkbox_kt__x46qhp();
    return UncheckedCheckboxIconContainerVariant;
  }
  var UncheckedCheckboxIconContainerVariant;
  function get_CheckedCheckboxIconContainerVariant() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckedCheckboxIconContainerVariant;
  }
  var CheckedCheckboxIconContainerVariant;
  function get_CheckboxIconStyle() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxIconStyle;
  }
  var CheckboxIconStyle;
  function get_CheckboxInputVariant() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxInputVariant;
  }
  var CheckboxInputVariant;
  var com_varabyte_kobweb_silk_components_forms_CheckboxDefaults$stable;
  var com_varabyte_kobweb_silk_components_forms_CheckboxVars$stable;
  var com_varabyte_kobweb_silk_components_forms_CheckboxSize$stable;
  var com_varabyte_kobweb_silk_components_forms_CheckboxIconScope$stable;
  function CheckboxVars$_get_BorderColor_$ref_a3dxo() {
    return function (p0) {
      return p0.t3c();
    };
  }
  function CheckboxVars$_get_BorderRadius_$ref_auagi9() {
    return function (p0) {
      return p0.g3g();
    };
  }
  function CheckboxVars$_get_BorderWidth_$ref_n68vn5() {
    return function (p0) {
      return p0.h3g();
    };
  }
  function CheckboxVars$_get_Size_$ref_kbhccu() {
    return function (p0) {
      return p0.i3g();
    };
  }
  function CheckboxVars$_get_Spacing_$ref_o74arc() {
    return function (p0) {
      return p0.j3g();
    };
  }
  function CheckboxVars$_get_FontSize_$ref_zfsngh() {
    return function (p0) {
      return p0.d3f();
    };
  }
  function CheckboxVars$_get_IconSize_$ref_estx9n() {
    return function (p0) {
      return p0.k3g();
    };
  }
  function CheckboxVars$_get_FocusOutlineColor_$ref_rvq14e() {
    return function (p0) {
      return p0.l3g();
    };
  }
  function CheckboxVars$_get_FocusOutlineSpread_$ref_i3390y() {
    return function (p0) {
      return p0.m3g();
    };
  }
  function CheckboxVars$_get_UncheckedBackgroundColor_$ref_6v46fc() {
    return function (p0) {
      return p0.n3g();
    };
  }
  function CheckboxVars$_get_IconColor_$ref_yfe0ch() {
    return function (p0) {
      return p0.o3g();
    };
  }
  function CheckboxVars$_get_IconBackgroundColor_$ref_eer9lb() {
    return function (p0) {
      return p0.p3g();
    };
  }
  function CheckboxVars$_get_IconBackgroundHoverColor_$ref_olfszl() {
    return function (p0) {
      return p0.q3g();
    };
  }
  function CheckboxVars$_get_TransitionDuration_$ref_mdqjzu() {
    return function (p0) {
      return p0.r3g();
    };
  }
  function CheckboxVars() {
    CheckboxVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().e2s();
    tmp.s3f_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_cssRem(0.125);
    tmp_0.t3f_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_cssRem(0.125);
    tmp_1.u3f_1 = StyleVariable_0(tmp0_defaultFallback_1, 'silk');
    this.v3f_1 = StyleVariable('silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_cssRem(0.5);
    tmp_2.w3f_1 = StyleVariable_0(tmp0_defaultFallback_2, 'silk');
    this.x3f_1 = StyleVariable('silk');
    this.y3f_1 = StyleVariable('silk');
    var tmp_3 = this;
    var tmp0_defaultFallback_3 = get_FocusOutlineColorVar().e2s();
    tmp_3.z3f_1 = StyleVariable_0(tmp0_defaultFallback_3, 'silk');
    var tmp_4 = this;
    var tmp0_defaultFallback_4 = get_cssRem(0.1875);
    tmp_4.a3g_1 = StyleVariable_0(tmp0_defaultFallback_4, 'silk');
    this.b3g_1 = StyleVariable('silk');
    this.c3g_1 = StyleVariable('silk');
    this.d3g_1 = StyleVariable('silk');
    this.e3g_1 = StyleVariable('silk');
    var tmp_5 = this;
    var tmp0_defaultFallback_5 = TransitionDurationVars_getInstance().s3g().e2s();
    tmp_5.f3g_1 = StyleVariable_1(tmp0_defaultFallback_5, 'silk');
  }
  protoOf(CheckboxVars).t3c = function () {
    var tmp = KProperty1;
    return this.s3f_1.k2s(this, getPropertyCallableRef('BorderColor', 1, tmp, CheckboxVars$_get_BorderColor_$ref_a3dxo(), null));
  };
  protoOf(CheckboxVars).g3g = function () {
    var tmp = KProperty1;
    return this.t3f_1.k2s(this, getPropertyCallableRef('BorderRadius', 1, tmp, CheckboxVars$_get_BorderRadius_$ref_auagi9(), null));
  };
  protoOf(CheckboxVars).h3g = function () {
    var tmp = KProperty1;
    return this.u3f_1.k2s(this, getPropertyCallableRef('BorderWidth', 1, tmp, CheckboxVars$_get_BorderWidth_$ref_n68vn5(), null));
  };
  protoOf(CheckboxVars).i3g = function () {
    var tmp = KProperty1;
    return this.v3f_1.k2s(this, getPropertyCallableRef('Size', 1, tmp, CheckboxVars$_get_Size_$ref_kbhccu(), null));
  };
  protoOf(CheckboxVars).j3g = function () {
    var tmp = KProperty1;
    return this.w3f_1.k2s(this, getPropertyCallableRef('Spacing', 1, tmp, CheckboxVars$_get_Spacing_$ref_o74arc(), null));
  };
  protoOf(CheckboxVars).d3f = function () {
    var tmp = KProperty1;
    return this.x3f_1.k2s(this, getPropertyCallableRef('FontSize', 1, tmp, CheckboxVars$_get_FontSize_$ref_zfsngh(), null));
  };
  protoOf(CheckboxVars).k3g = function () {
    var tmp = KProperty1;
    return this.y3f_1.k2s(this, getPropertyCallableRef('IconSize', 1, tmp, CheckboxVars$_get_IconSize_$ref_estx9n(), null));
  };
  protoOf(CheckboxVars).l3g = function () {
    var tmp = KProperty1;
    return this.z3f_1.k2s(this, getPropertyCallableRef('FocusOutlineColor', 1, tmp, CheckboxVars$_get_FocusOutlineColor_$ref_rvq14e(), null));
  };
  protoOf(CheckboxVars).m3g = function () {
    var tmp = KProperty1;
    return this.a3g_1.k2s(this, getPropertyCallableRef('FocusOutlineSpread', 1, tmp, CheckboxVars$_get_FocusOutlineSpread_$ref_i3390y(), null));
  };
  protoOf(CheckboxVars).n3g = function () {
    var tmp = KProperty1;
    return this.b3g_1.k2s(this, getPropertyCallableRef('UncheckedBackgroundColor', 1, tmp, CheckboxVars$_get_UncheckedBackgroundColor_$ref_6v46fc(), null));
  };
  protoOf(CheckboxVars).o3g = function () {
    var tmp = KProperty1;
    return this.c3g_1.k2s(this, getPropertyCallableRef('IconColor', 1, tmp, CheckboxVars$_get_IconColor_$ref_yfe0ch(), null));
  };
  protoOf(CheckboxVars).p3g = function () {
    var tmp = KProperty1;
    return this.d3g_1.k2s(this, getPropertyCallableRef('IconBackgroundColor', 1, tmp, CheckboxVars$_get_IconBackgroundColor_$ref_eer9lb(), null));
  };
  protoOf(CheckboxVars).q3g = function () {
    var tmp = KProperty1;
    return this.e3g_1.k2s(this, getPropertyCallableRef('IconBackgroundHoverColor', 1, tmp, CheckboxVars$_get_IconBackgroundHoverColor_$ref_olfszl(), null));
  };
  protoOf(CheckboxVars).r3g = function () {
    var tmp = KProperty1;
    return this.f3g_1.k2s(this, getPropertyCallableRef('TransitionDuration', 1, tmp, CheckboxVars$_get_TransitionDuration_$ref_mdqjzu(), null));
  };
  var CheckboxVars_instance;
  function CheckboxVars_getInstance() {
    if (CheckboxVars_instance == null)
      new CheckboxVars();
    return CheckboxVars_instance;
  }
  function Companion_1() {
    Companion_instance_21 = this;
    this.t3g_1 = new CheckboxSize(get_cssRem(0.875), get_cssRem(0.45), FontSizeVars_getInstance().p3f().e2s());
    this.u3g_1 = new CheckboxSize(get_cssRem(1), get_cssRem(0.625), FontSizeVars_getInstance().q3f().e2s());
    this.v3g_1 = new CheckboxSize(get_cssRem(1.25), get_cssRem(0.8), FontSizeVars_getInstance().r3f().e2s());
  }
  var Companion_instance_21;
  function Companion_getInstance_3() {
    if (Companion_instance_21 == null)
      new Companion_1();
    return Companion_instance_21;
  }
  function CheckboxSize(boxSize, iconSize, fontSize) {
    Companion_getInstance_3();
    Base_init_$Init$(setVariable(setVariable(setVariable(Companion_instance, CheckboxVars_getInstance().i3g(), boxSize), CheckboxVars_getInstance().k3g(), iconSize), CheckboxVars_getInstance().d3f(), fontSize), VOID, this);
  }
  function CheckboxStyle$lambda($this$CssStyle) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$CssStyle.n35(CheckboxStyle$lambda$lambda);
    return Unit_instance;
  }
  function CheckboxStyle$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = cursor(fontSize(userSelect(gap(Companion_instance, CheckboxVars_getInstance().j3g().e2s()), Companion_instance_3.g2q()), CheckboxVars_getInstance().d3f().e2s()), Companion_instance_1.e2q());
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'relative';
    return position(tmp, tmp$ret$3);
  }
  function CheckboxEnabledAnim$lambda($this$Keyframes) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$Keyframes.b38(CheckboxEnabledAnim$lambda$lambda);
    $this$Keyframes.c38(CheckboxEnabledAnim$lambda$lambda_0);
    return Unit_instance;
  }
  function CheckboxEnabledAnim$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    return opacity(Companion_instance, 0);
  }
  function CheckboxEnabledAnim$lambda$lambda_0() {
    _init_properties_Checkbox_kt__x46qhp();
    return opacity(Companion_instance, 1);
  }
  function CheckboxIconContainerStyle$lambda($this$CssStyle) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$CssStyle.n35(CheckboxIconContainerStyle$lambda$lambda);
    return Unit_instance;
  }
  function CheckboxIconContainerStyle$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = size(fontSize(Companion_instance, CheckboxVars_getInstance().k3g().e2s()), CheckboxVars_getInstance().i3g().e2s());
    var tmp_0 = CheckboxVars_getInstance().h3g().e2s();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition(borderRadius(border(tmp, tmp_0, 'solid', CheckboxVars_getInstance().t3c().e2s()), CheckboxVars_getInstance().g3g().e2s()), Companion_instance_2.z2s(listOf(['background-color', 'border-color']), CheckboxVars_getInstance().r3g().e2s()));
  }
  function UncheckedCheckboxIconContainerVariant$lambda($this$addVariantBase) {
    _init_properties_Checkbox_kt__x46qhp();
    return backgroundColor(Companion_instance, CheckboxVars_getInstance().n3g().e2s());
  }
  function CheckedCheckboxIconContainerVariant$lambda($this$addVariant) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$addVariant.n35(CheckedCheckboxIconContainerVariant$lambda$lambda);
    return Unit_instance;
  }
  function CheckedCheckboxIconContainerVariant$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = backgroundColor(Companion_instance, CheckboxVars_getInstance().p3g().e2s());
    return border_0(tmp, CheckedCheckboxIconContainerVariant$lambda$lambda$lambda);
  }
  function CheckedCheckboxIconContainerVariant$lambda$lambda$lambda($this$border) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$border.o32(CheckboxVars_getInstance().p3g().e2s());
    return Unit_instance;
  }
  function CheckboxIconStyle$lambda($this$base) {
    _init_properties_Checkbox_kt__x46qhp();
    return color(size(Companion_instance, CheckboxVars_getInstance().i3g().e2s()), CheckboxVars_getInstance().o3g().e2s());
  }
  function CheckboxInputVariant$lambda($this$addVariant) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$addVariant.n35(CheckboxInputVariant$lambda$lambda);
    $this$addVariant.p35(':focus-visible + *', CheckboxInputVariant$lambda$lambda_0);
    $this$addVariant.p35(':not([aria-disabled]):hover + *', CheckboxInputVariant$lambda$lambda_1);
    return Unit_instance;
  }
  function CheckboxInputVariant$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    return get_HiddenInputModifier();
  }
  function CheckboxInputVariant$lambda$lambda_0() {
    _init_properties_Checkbox_kt__x46qhp();
    return boxShadow_0(Companion_instance, VOID, VOID, VOID, CheckboxVars_getInstance().m3g().e2s(), CheckboxVars_getInstance().l3g().e2s());
  }
  function CheckboxInputVariant$lambda$lambda_1() {
    _init_properties_Checkbox_kt__x46qhp();
    return setVariable(Companion_instance, CheckboxVars_getInstance().p3g(), CheckboxVars_getInstance().q3g().e2s());
  }
  var properties_initialized_Checkbox_kt_pem0wr;
  function _init_properties_Checkbox_kt__x46qhp() {
    if (!properties_initialized_Checkbox_kt_pem0wr) {
      properties_initialized_Checkbox_kt_pem0wr = true;
      var tmp = rowClasses(Companion_instance, VOID, CenterVertically_instance);
      CheckboxStyle = CssStyle(tmp, CheckboxStyle$lambda);
      CheckboxEnabledAnim = new Keyframes(CheckboxEnabledAnim$lambda);
      CheckboxIconContainerStyle = CssStyle(VOID, CheckboxIconContainerStyle$lambda);
      var tmp_0 = get_CheckboxIconContainerStyle();
      UncheckedCheckboxIconContainerVariant = addVariantBase(tmp_0, VOID, UncheckedCheckboxIconContainerVariant$lambda);
      var tmp_1 = get_CheckboxIconContainerStyle();
      CheckedCheckboxIconContainerVariant = addVariant(tmp_1, VOID, CheckedCheckboxIconContainerVariant$lambda);
      var tmp_2 = Companion_instance_5;
      CheckboxIconStyle = base(tmp_2, VOID, CheckboxIconStyle$lambda);
      var tmp_3 = get_InputStyle();
      CheckboxInputVariant = addVariant(tmp_3, VOID, CheckboxInputVariant$lambda);
      com_varabyte_kobweb_silk_components_forms_CheckboxDefaults$stable = com_varabyte_kobweb_silk_style_CssStyle_Restricted_Base$stableprop_getter();
      com_varabyte_kobweb_silk_components_forms_CheckboxVars$stable = 8;
      com_varabyte_kobweb_silk_components_forms_CheckboxSize$stable = com_varabyte_kobweb_silk_style_CssStyle_Restricted_Base$stableprop_getter();
      com_varabyte_kobweb_silk_components_forms_CheckboxIconScope$stable = 0;
    }
  }
  function get_HiddenInputModifier() {
    _init_properties_Input_kt__b04mg8();
    return HiddenInputModifier;
  }
  var HiddenInputModifier;
  function get_InputGroupStyle() {
    _init_properties_Input_kt__b04mg8();
    return InputGroupStyle;
  }
  var InputGroupStyle;
  function get_InputStyle() {
    _init_properties_Input_kt__b04mg8();
    return InputStyle;
  }
  var InputStyle;
  function get_OutlinedInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return OutlinedInputVariant;
  }
  var OutlinedInputVariant;
  function get_FilledInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return FilledInputVariant;
  }
  var FilledInputVariant;
  function get_FlushedInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return FlushedInputVariant;
  }
  var FlushedInputVariant;
  function get_UnstyledInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return UnstyledInputVariant;
  }
  var UnstyledInputVariant;
  var com_varabyte_kobweb_silk_components_forms_InputDefaults$stable;
  var com_varabyte_kobweb_silk_components_forms_InputVars$stable;
  var com_varabyte_kobweb_silk_components_forms_InputParams$stable;
  var com_varabyte_kobweb_silk_components_forms_InputGroupScope$stable;
  var com_varabyte_kobweb_silk_components_forms_InputSize$stable;
  function InputVars$_get_BorderColor_$ref_2lp9kr() {
    return function (p0) {
      return p0.t3c();
    };
  }
  function InputVars$_get_BorderRadius_$ref_t6une2() {
    return function (p0) {
      return p0.g3g();
    };
  }
  function InputVars$_get_BorderFocusColor_$ref_h84gjz() {
    return function (p0) {
      return p0.m3h();
    };
  }
  function InputVars$_get_BorderHoverColor_$ref_71bc0l() {
    return function (p0) {
      return p0.n3h();
    };
  }
  function InputVars$_get_BorderInvalidColor_$ref_nnzjrk() {
    return function (p0) {
      return p0.o3h();
    };
  }
  function InputVars$_get_ColorTransitionDuration_$ref_bo92hm() {
    return function (p0) {
      return p0.z3c();
    };
  }
  function InputVars$_get_FilledColor_$ref_xjpdgx() {
    return function (p0) {
      return p0.p3h();
    };
  }
  function InputVars$_get_FilledHoverColor_$ref_ae4fhd() {
    return function (p0) {
      return p0.q3h();
    };
  }
  function InputVars$_get_FilledFocusColor_$ref_ynk81x() {
    return function (p0) {
      return p0.r3h();
    };
  }
  function InputVars$_get_FontSize_$ref_4vtdgo() {
    return function (p0) {
      return p0.d3f();
    };
  }
  function InputVars$_get_Height_$ref_qojn9d() {
    return function (p0) {
      return p0.e3f();
    };
  }
  function InputVars$_get_Padding_$ref_z3xou9() {
    return function (p0) {
      return p0.s3h();
    };
  }
  function InputVars$_get_PlaceholderOpacity_$ref_a9qjzk() {
    return function (p0) {
      return p0.t3h();
    };
  }
  function InputVars$_get_PlaceholderColor_$ref_7qanko() {
    return function (p0) {
      return p0.u3h();
    };
  }
  function InputVars() {
    InputVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().e2s();
    tmp.w3g_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.x3g_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_FocusOutlineColorVar().e2s();
    tmp_0.y3g_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    this.z3g_1 = StyleVariable('silk');
    this.a3h_1 = StyleVariable('silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().i3d().e2s();
    tmp_1.b3h_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
    this.c3h_1 = StyleVariable('silk');
    this.d3h_1 = StyleVariable('silk');
    this.e3h_1 = StyleVariable('silk');
    this.f3h_1 = StyleVariable('silk');
    this.g3h_1 = StyleVariable('silk');
    this.h3h_1 = StyleVariable('silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_PlaceholderOpacityVar().e2s();
    tmp_2.i3h_1 = StyleVariable_2(tmp0_defaultFallback_2, 'silk');
    var tmp_3 = this;
    var tmp0_defaultFallback_3 = get_PlaceholderColorVar().e2s();
    tmp_3.j3h_1 = StyleVariable_0(tmp0_defaultFallback_3, 'silk');
    var tmp_4 = this;
    var tmp0_defaultFallback_4 = get_cssRem(2.25);
    tmp_4.k3h_1 = StyleVariable_0(tmp0_defaultFallback_4, 'silk');
    var tmp_5 = this;
    var tmp0_defaultFallback_5 = get_cssRem(2.25);
    tmp_5.l3h_1 = StyleVariable_0(tmp0_defaultFallback_5, 'silk');
  }
  protoOf(InputVars).t3c = function () {
    var tmp = KProperty1;
    return this.w3g_1.k2s(this, getPropertyCallableRef('BorderColor', 1, tmp, InputVars$_get_BorderColor_$ref_2lp9kr(), null));
  };
  protoOf(InputVars).g3g = function () {
    var tmp = KProperty1;
    return this.x3g_1.k2s(this, getPropertyCallableRef('BorderRadius', 1, tmp, InputVars$_get_BorderRadius_$ref_t6une2(), null));
  };
  protoOf(InputVars).m3h = function () {
    var tmp = KProperty1;
    return this.y3g_1.k2s(this, getPropertyCallableRef('BorderFocusColor', 1, tmp, InputVars$_get_BorderFocusColor_$ref_h84gjz(), null));
  };
  protoOf(InputVars).n3h = function () {
    var tmp = KProperty1;
    return this.z3g_1.k2s(this, getPropertyCallableRef('BorderHoverColor', 1, tmp, InputVars$_get_BorderHoverColor_$ref_71bc0l(), null));
  };
  protoOf(InputVars).o3h = function () {
    var tmp = KProperty1;
    return this.a3h_1.k2s(this, getPropertyCallableRef('BorderInvalidColor', 1, tmp, InputVars$_get_BorderInvalidColor_$ref_nnzjrk(), null));
  };
  protoOf(InputVars).z3c = function () {
    var tmp = KProperty1;
    return this.b3h_1.k2s(this, getPropertyCallableRef('ColorTransitionDuration', 1, tmp, InputVars$_get_ColorTransitionDuration_$ref_bo92hm(), null));
  };
  protoOf(InputVars).p3h = function () {
    var tmp = KProperty1;
    return this.c3h_1.k2s(this, getPropertyCallableRef('FilledColor', 1, tmp, InputVars$_get_FilledColor_$ref_xjpdgx(), null));
  };
  protoOf(InputVars).q3h = function () {
    var tmp = KProperty1;
    return this.d3h_1.k2s(this, getPropertyCallableRef('FilledHoverColor', 1, tmp, InputVars$_get_FilledHoverColor_$ref_ae4fhd(), null));
  };
  protoOf(InputVars).r3h = function () {
    var tmp = KProperty1;
    return this.e3h_1.k2s(this, getPropertyCallableRef('FilledFocusColor', 1, tmp, InputVars$_get_FilledFocusColor_$ref_ynk81x(), null));
  };
  protoOf(InputVars).d3f = function () {
    var tmp = KProperty1;
    return this.f3h_1.k2s(this, getPropertyCallableRef('FontSize', 1, tmp, InputVars$_get_FontSize_$ref_4vtdgo(), null));
  };
  protoOf(InputVars).e3f = function () {
    var tmp = KProperty1;
    return this.g3h_1.k2s(this, getPropertyCallableRef('Height', 1, tmp, InputVars$_get_Height_$ref_qojn9d(), null));
  };
  protoOf(InputVars).s3h = function () {
    var tmp = KProperty1;
    return this.h3h_1.k2s(this, getPropertyCallableRef('Padding', 1, tmp, InputVars$_get_Padding_$ref_z3xou9(), null));
  };
  protoOf(InputVars).t3h = function () {
    var tmp = KProperty1;
    return this.i3h_1.k2s(this, getPropertyCallableRef('PlaceholderOpacity', 1, tmp, InputVars$_get_PlaceholderOpacity_$ref_a9qjzk(), null));
  };
  protoOf(InputVars).u3h = function () {
    var tmp = KProperty1;
    return this.j3h_1.k2s(this, getPropertyCallableRef('PlaceholderColor', 1, tmp, InputVars$_get_PlaceholderColor_$ref_7qanko(), null));
  };
  var InputVars_instance;
  function InputVars_getInstance() {
    if (InputVars_instance == null)
      new InputVars();
    return InputVars_instance;
  }
  function inputPadding(_this__u8e3s4) {
    _init_properties_Input_kt__b04mg8();
    var padding = InputVars_getInstance().s3h().e2s();
    return paddingInline(_this__u8e3s4, padding, padding);
  }
  function Companion_2() {
    Companion_instance_22 = this;
    this.v3h_1 = new InputSize(FontSizeVars_getInstance().o3f().e2s(), get_cssRem(1.25), get_cssRem(0.375), BorderRadiusVars_getInstance().o3f().e2s());
    this.w3h_1 = new InputSize(FontSizeVars_getInstance().p3f().e2s(), get_cssRem(1.75), get_cssRem(0.5), BorderRadiusVars_getInstance().p3f().e2s());
    this.x3h_1 = new InputSize(FontSizeVars_getInstance().q3f().e2s(), get_cssRem(2.25), get_cssRem(0.625), BorderRadiusVars_getInstance().q3f().e2s());
    this.y3h_1 = new InputSize(FontSizeVars_getInstance().r3f().e2s(), get_cssRem(2.5), get_cssRem(0.75), BorderRadiusVars_getInstance().q3f().e2s());
  }
  var Companion_instance_22;
  function Companion_getInstance_4() {
    if (Companion_instance_22 == null)
      new Companion_2();
    return Companion_instance_22;
  }
  function InputSize(fontSize, height, padding, borderRadius) {
    Companion_getInstance_4();
    Base_init_$Init$(setVariable(setVariable(setVariable(setVariable(Companion_instance, InputVars_getInstance().d3f(), fontSize), InputVars_getInstance().e3f(), height), InputVars_getInstance().s3h(), padding), InputVars_getInstance().g3g(), borderRadius), VOID, this);
  }
  function InputGroupStyle$lambda($this$base) {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    var tmp_0 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = outline(tmp, tmp_0, 'solid', Colors_instance.q31());
    var tmp_2 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return fontSize(borderRadius(border(tmp_1, tmp_2, 'solid', Colors_instance.q31()), InputVars_getInstance().g3g().e2s()), InputVars_getInstance().d3f().e2s());
  }
  function InputStyle$lambda($this$CssStyle) {
    _init_properties_Input_kt__b04mg8();
    $this$CssStyle.n35(InputStyle$lambda$lambda);
    var tmp = get_placeholder($this$CssStyle);
    $this$CssStyle.p37(tmp, InputStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function InputStyle$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = backgroundColor(fontSize(height(color(appearance(Companion_instance, Companion_instance_15.g2q()), get_ColorVar().e2s()), InputVars_getInstance().e3f().e2s()), InputVars_getInstance().d3f().e2s()), Colors_instance.q31());
    var tmp_0 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = outline(tmp, tmp_0, 'solid', Colors_instance.q31());
    var tmp_2 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition(border(tmp_1, tmp_2, 'solid', Colors_instance.q31()), Companion_instance_2.z2s(listOf(['border-color', 'box-shadow', 'background-color']), InputVars_getInstance().z3c().e2s()));
  }
  function InputStyle$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return color(opacity(Companion_instance, InputVars_getInstance().t3h().e2s()), InputVars_getInstance().u3h().e2s());
  }
  function OutlinedInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.n35(OutlinedInputVariant$lambda$lambda);
    var tmp = get_ariaInvalid($this$addVariant);
    $this$addVariant.p37(tmp, OutlinedInputVariant$lambda$lambda_0);
    var tmp_0 = get_hover($this$addVariant).m36(not($this$addVariant, [get_disabled($this$addVariant)]));
    $this$addVariant.p37(tmp_0, OutlinedInputVariant$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).m36(not($this$addVariant, [get_disabled($this$addVariant)]));
    $this$addVariant.p37(tmp_1, OutlinedInputVariant$lambda$lambda_2);
    return Unit_instance;
  }
  function invoke$bordered(_this__u8e3s4, color) {
    var tmp = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return boxShadow_0(border(_this__u8e3s4, tmp, 'solid', color), VOID, VOID, VOID, get_px(1), color);
  }
  function OutlinedInputVariant$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = borderRadius(inputPadding(Companion_instance), InputVars_getInstance().g3g().e2s());
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return border(tmp, tmp_0, 'solid', InputVars_getInstance().t3c().e2s());
  }
  function OutlinedInputVariant$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered(Companion_instance, InputVars_getInstance().o3h().e2s());
  }
  function OutlinedInputVariant$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    return border_0(tmp, OutlinedInputVariant$lambda$lambda$lambda);
  }
  function OutlinedInputVariant$lambda$lambda$lambda($this$border) {
    _init_properties_Input_kt__b04mg8();
    $this$border.o32(InputVars_getInstance().n3h().e2s());
    return Unit_instance;
  }
  function OutlinedInputVariant$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered(Companion_instance, InputVars_getInstance().m3h().e2s());
  }
  function FilledInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.n35(FilledInputVariant$lambda$lambda);
    var tmp = get_hover($this$addVariant).m36(not($this$addVariant, [get_disabled($this$addVariant)]));
    $this$addVariant.p37(tmp, FilledInputVariant$lambda$lambda_0);
    var tmp_0 = get_ariaInvalid($this$addVariant);
    $this$addVariant.p37(tmp_0, FilledInputVariant$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).m36(not($this$addVariant, [get_disabled($this$addVariant)]));
    $this$addVariant.p37(tmp_1, FilledInputVariant$lambda$lambda_2);
    return Unit_instance;
  }
  function invoke$bordered_0(_this__u8e3s4, color) {
    return boxShadow_0(border_0(_this__u8e3s4, FilledInputVariant$lambda$bordered$lambda(color)), VOID, VOID, VOID, get_px(1), color);
  }
  function FilledInputVariant$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = borderRadius(backgroundColor(inputPadding(Companion_instance), InputVars_getInstance().p3h().e2s()), InputVars_getInstance().g3g().e2s());
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return border(tmp, tmp_0, 'solid', Colors_instance.q31());
  }
  function FilledInputVariant$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return backgroundColor(Companion_instance, InputVars_getInstance().q3h().e2s());
  }
  function FilledInputVariant$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_0(Companion_instance, InputVars_getInstance().o3h().e2s());
  }
  function FilledInputVariant$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_0(backgroundColor(Companion_instance, InputVars_getInstance().r3h().e2s()), InputVars_getInstance().m3h().e2s());
  }
  function FilledInputVariant$lambda$bordered$lambda($color) {
    return function ($this$border) {
      $this$border.o32($color);
      return Unit_instance;
    };
  }
  function FlushedInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.n35(FlushedInputVariant$lambda$lambda);
    var tmp = get_ariaInvalid($this$addVariant);
    $this$addVariant.p37(tmp, FlushedInputVariant$lambda$lambda_0);
    var tmp_0 = get_hover($this$addVariant).m36(not($this$addVariant, [get_disabled($this$addVariant)]));
    $this$addVariant.p37(tmp_0, FlushedInputVariant$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).m36(not($this$addVariant, [get_disabled($this$addVariant)]));
    $this$addVariant.p37(tmp_1, FlushedInputVariant$lambda$lambda_2);
    return Unit_instance;
  }
  function invoke$bordered_1(_this__u8e3s4, color) {
    return boxShadow_0(border_0(_this__u8e3s4, FlushedInputVariant$lambda$bordered$lambda(color)), VOID, get_px(1), VOID, VOID, color);
  }
  function FlushedInputVariant$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp, tmp_0, 'solid', InputVars_getInstance().t3c().e2s());
  }
  function FlushedInputVariant$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_1(Companion_instance, InputVars_getInstance().o3h().e2s());
  }
  function FlushedInputVariant$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    return border_0(tmp, FlushedInputVariant$lambda$lambda$lambda);
  }
  function FlushedInputVariant$lambda$lambda$lambda($this$border) {
    _init_properties_Input_kt__b04mg8();
    $this$border.o32(InputVars_getInstance().n3h().e2s());
    return Unit_instance;
  }
  function FlushedInputVariant$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_1(Companion_instance, InputVars_getInstance().m3h().e2s());
  }
  function FlushedInputVariant$lambda$bordered$lambda($color) {
    return function ($this$border) {
      $this$border.o32($color);
      return Unit_instance;
    };
  }
  function UnstyledInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    return Unit_instance;
  }
  var properties_initialized_Input_kt_tklayu;
  function _init_properties_Input_kt__b04mg8() {
    if (!properties_initialized_Input_kt_tklayu) {
      properties_initialized_Input_kt_tklayu = true;
      var tmp = whiteSpace(overflow_0(clip(padding(margin_1(size(border(Companion_instance, get_px(0)), get_px(1)), get_px(-1)), get_px(0)), RectF_init_$Create$(50.0)), Companion_instance_4.s2r()), Companion_instance_12.n2s());
      // Inline function 'org.jetbrains.compose.web.css.Companion.Absolute' call
      // Inline function 'org.jetbrains.compose.web.css.Position' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$3 = 'absolute';
      HiddenInputModifier = position(tmp, tmp$ret$3);
      var tmp_0 = Companion_instance_5;
      InputGroupStyle = base(tmp_0, VOID, InputGroupStyle$lambda);
      InputStyle = CssStyle(VOID, InputStyle$lambda);
      var tmp_1 = get_InputStyle();
      OutlinedInputVariant = addVariant(tmp_1, VOID, OutlinedInputVariant$lambda);
      var tmp_2 = get_InputStyle();
      FilledInputVariant = addVariant(tmp_2, VOID, FilledInputVariant$lambda);
      var tmp_3 = get_InputStyle();
      FlushedInputVariant = addVariant(tmp_3, VOID, FlushedInputVariant$lambda);
      var tmp_4 = get_InputStyle();
      UnstyledInputVariant = addVariant(tmp_4, VOID, UnstyledInputVariant$lambda);
      com_varabyte_kobweb_silk_components_forms_InputDefaults$stable = com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() | com_varabyte_kobweb_silk_style_CssStyle_Restricted_Base$stableprop_getter();
      com_varabyte_kobweb_silk_components_forms_InputVars$stable = 8;
      com_varabyte_kobweb_silk_components_forms_InputParams$stable = 8;
      com_varabyte_kobweb_silk_components_forms_InputGroupScope$stable = 8;
      com_varabyte_kobweb_silk_components_forms_InputSize$stable = com_varabyte_kobweb_silk_style_CssStyle_Restricted_Base$stableprop_getter();
    }
  }
  function get_SwitchStyle() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchStyle;
  }
  var SwitchStyle;
  function get_SwitchTrackStyle() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchTrackStyle;
  }
  var SwitchTrackStyle;
  function get_SwitchInputVariant() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchInputVariant;
  }
  var SwitchInputVariant;
  function get_SwitchThumbStyle() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchThumbStyle;
  }
  var SwitchThumbStyle;
  var com_varabyte_kobweb_silk_components_forms_SwitchVars$stable;
  var com_varabyte_kobweb_silk_components_forms_SwitchSize$stable;
  function SwitchVars$_get_BorderRadius_$ref_6ja2gw() {
    return function (p0) {
      return p0.g3g();
    };
  }
  function SwitchVars$_get_TrackWidth_$ref_ivpddp() {
    return function (p0) {
      return p0.m3i();
    };
  }
  function SwitchVars$_get_TrackHeight_$ref_eiptze() {
    return function (p0) {
      return p0.n3i();
    };
  }
  function SwitchVars$_get_TrackPadding_$ref_d8tr4o() {
    return function (p0) {
      return p0.o3i();
    };
  }
  function SwitchVars$_get_TrackBackgroundColor_$ref_jnuze4() {
    return function (p0) {
      return p0.p3i();
    };
  }
  function SwitchVars$_get_FocusColor_$ref_72ulnx() {
    return function (p0) {
      return p0.q3i();
    };
  }
  function SwitchVars$_get_ThumbOffset_$ref_5e86z1() {
    return function (p0) {
      return p0.r3i();
    };
  }
  function SwitchVars$_get_ThumbColor_$ref_jy53rl() {
    return function (p0) {
      return p0.s3i();
    };
  }
  function SwitchVars$_get_TransitionDuration_$ref_o1aprp() {
    return function (p0) {
      return p0.r3g();
    };
  }
  function SwitchVars() {
    SwitchVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_px(9999);
    tmp.d3i_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.e3i_1 = StyleVariable('silk');
    this.f3i_1 = StyleVariable('silk');
    this.g3i_1 = StyleVariable('silk');
    this.h3i_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_FocusOutlineColorVar().e2s();
    tmp_0.i3i_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    this.j3i_1 = StyleVariable('silk');
    this.k3i_1 = StyleVariable('silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().t3i().e2s();
    tmp_1.l3i_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
  }
  protoOf(SwitchVars).g3g = function () {
    var tmp = KProperty1;
    return this.d3i_1.k2s(this, getPropertyCallableRef('BorderRadius', 1, tmp, SwitchVars$_get_BorderRadius_$ref_6ja2gw(), null));
  };
  protoOf(SwitchVars).m3i = function () {
    var tmp = KProperty1;
    return this.e3i_1.k2s(this, getPropertyCallableRef('TrackWidth', 1, tmp, SwitchVars$_get_TrackWidth_$ref_ivpddp(), null));
  };
  protoOf(SwitchVars).n3i = function () {
    var tmp = KProperty1;
    return this.f3i_1.k2s(this, getPropertyCallableRef('TrackHeight', 1, tmp, SwitchVars$_get_TrackHeight_$ref_eiptze(), null));
  };
  protoOf(SwitchVars).o3i = function () {
    var tmp = KProperty1;
    return this.g3i_1.k2s(this, getPropertyCallableRef('TrackPadding', 1, tmp, SwitchVars$_get_TrackPadding_$ref_d8tr4o(), null));
  };
  protoOf(SwitchVars).p3i = function () {
    var tmp = KProperty1;
    return this.h3i_1.k2s(this, getPropertyCallableRef('TrackBackgroundColor', 1, tmp, SwitchVars$_get_TrackBackgroundColor_$ref_jnuze4(), null));
  };
  protoOf(SwitchVars).q3i = function () {
    var tmp = KProperty1;
    return this.i3i_1.k2s(this, getPropertyCallableRef('FocusColor', 1, tmp, SwitchVars$_get_FocusColor_$ref_72ulnx(), null));
  };
  protoOf(SwitchVars).r3i = function () {
    var tmp = KProperty1;
    return this.j3i_1.k2s(this, getPropertyCallableRef('ThumbOffset', 1, tmp, SwitchVars$_get_ThumbOffset_$ref_5e86z1(), null));
  };
  protoOf(SwitchVars).s3i = function () {
    var tmp = KProperty1;
    return this.k3i_1.k2s(this, getPropertyCallableRef('ThumbColor', 1, tmp, SwitchVars$_get_ThumbColor_$ref_jy53rl(), null));
  };
  protoOf(SwitchVars).r3g = function () {
    var tmp = KProperty1;
    return this.l3i_1.k2s(this, getPropertyCallableRef('TransitionDuration', 1, tmp, SwitchVars$_get_TransitionDuration_$ref_o1aprp(), null));
  };
  var SwitchVars_instance;
  function SwitchVars_getInstance() {
    if (SwitchVars_instance == null)
      new SwitchVars();
    return SwitchVars_instance;
  }
  function Companion_3() {
    Companion_instance_23 = this;
    this.u3i_1 = new SwitchSize(get_cssRem(1.375), get_cssRem(0.75));
    this.v3i_1 = new SwitchSize(get_cssRem(1.875), get_cssRem(1));
    this.w3i_1 = new SwitchSize(get_cssRem(2.875), get_cssRem(1.5));
  }
  var Companion_instance_23;
  function Companion_getInstance_5() {
    if (Companion_instance_23 == null)
      new Companion_3();
    return Companion_instance_23;
  }
  function SwitchSize(width, height, padding) {
    Companion_getInstance_5();
    padding = padding === VOID ? get_cssRem(0.188) : padding;
    Base_init_$Init$(setVariable(setVariable(setVariable(Companion_instance, SwitchVars_getInstance().m3i(), width), SwitchVars_getInstance().n3i(), height), SwitchVars_getInstance().o3i(), padding), VOID, this);
  }
  function SwitchStyle$lambda($this$base) {
    _init_properties_Switch_kt__dwcqr0();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'relative';
    return position(tmp, tmp$ret$3);
  }
  function SwitchTrackStyle$lambda($this$CssStyle) {
    _init_properties_Switch_kt__dwcqr0();
    $this$CssStyle.n35(SwitchTrackStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle).m36(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    $this$CssStyle.p37(tmp, SwitchTrackStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function SwitchTrackStyle$lambda$lambda() {
    _init_properties_Switch_kt__dwcqr0();
    return boxSizing(transition_0(backgroundColor(borderRadius(padding(minHeight(height(minWidth(width(Companion_instance, SwitchVars_getInstance().m3i().e2s()), SwitchVars_getInstance().m3i().e2s()), SwitchVars_getInstance().n3i().e2s()), SwitchVars_getInstance().n3i().e2s()), SwitchVars_getInstance().o3i().e2s()), SwitchVars_getInstance().g3g().e2s()), SwitchVars_getInstance().p3i().e2s()), [Companion_instance_2.t2s('background-color', SwitchVars_getInstance().r3g().e2s())]), Companion_instance_16.z2p());
  }
  function SwitchTrackStyle$lambda$lambda_0() {
    _init_properties_Switch_kt__dwcqr0();
    return cursor(Companion_instance, Companion_instance_1.e2q());
  }
  function SwitchInputVariant$lambda($this$addVariant) {
    _init_properties_Switch_kt__dwcqr0();
    $this$addVariant.n35(SwitchInputVariant$lambda$lambda);
    $this$addVariant.p35(':focus-visible + *', SwitchInputVariant$lambda$lambda_0);
    return Unit_instance;
  }
  function SwitchInputVariant$lambda$lambda() {
    _init_properties_Switch_kt__dwcqr0();
    return get_HiddenInputModifier();
  }
  function SwitchInputVariant$lambda$lambda_0() {
    _init_properties_Switch_kt__dwcqr0();
    return boxShadow_0(Companion_instance, VOID, VOID, VOID, get_cssRem(0.1875), SwitchVars_getInstance().q3i().e2s());
  }
  function SwitchThumbStyle$lambda($this$base) {
    _init_properties_Switch_kt__dwcqr0();
    return transition_0(translateX(backgroundColor(borderRadius(size(Companion_instance, SwitchVars_getInstance().n3i().e2s()), SwitchVars_getInstance().g3g().e2s()), SwitchVars_getInstance().s3i().e2s()), SwitchVars_getInstance().r3i().e2s()), [Companion_instance_2.t2s('translate', SwitchVars_getInstance().r3g().e2s())]);
  }
  var properties_initialized_Switch_kt_7kkg8m;
  function _init_properties_Switch_kt__dwcqr0() {
    if (!properties_initialized_Switch_kt_7kkg8m) {
      properties_initialized_Switch_kt_7kkg8m = true;
      var tmp = Companion_instance_5;
      SwitchStyle = base(tmp, VOID, SwitchStyle$lambda);
      var tmp_0 = ariaHidden(tabIndex(Companion_instance, -1));
      SwitchTrackStyle = CssStyle(tmp_0, SwitchTrackStyle$lambda);
      var tmp_1 = get_InputStyle();
      SwitchInputVariant = addVariant(tmp_1, VOID, SwitchInputVariant$lambda);
      var tmp_2 = Companion_instance_5;
      SwitchThumbStyle = base(tmp_2, VOID, SwitchThumbStyle$lambda);
      com_varabyte_kobweb_silk_components_forms_SwitchVars$stable = 8;
      com_varabyte_kobweb_silk_components_forms_SwitchSize$stable = com_varabyte_kobweb_silk_style_CssStyle_Restricted_Base$stableprop_getter();
    }
  }
  function get_CanvasStyle() {
    _init_properties_Canvas_kt__g1lz20();
    return CanvasStyle;
  }
  var CanvasStyle;
  var com_varabyte_kobweb_silk_components_graphics_RenderScope$stable;
  var com_varabyte_kobweb_silk_components_graphics_CanvasRepainter$stable;
  function CanvasStyle$lambda($this$CssStyle) {
    _init_properties_Canvas_kt__g1lz20();
    return Unit_instance;
  }
  var properties_initialized_Canvas_kt_i28dei;
  function _init_properties_Canvas_kt__g1lz20() {
    if (!properties_initialized_Canvas_kt_i28dei) {
      properties_initialized_Canvas_kt_i28dei = true;
      CanvasStyle = CssStyle(VOID, CanvasStyle$lambda);
      com_varabyte_kobweb_silk_components_graphics_RenderScope$stable = 0;
      com_varabyte_kobweb_silk_components_graphics_CanvasRepainter$stable = 8;
    }
  }
  function ExclaimIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.y1i(1482883947);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.m1h(modifier_0._v) ? 4 : 2);
    if ($composer_0.r1i(!(($dirty & 3) === 2), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      var tmp = Companion_instance_17.w2t(16);
      createIcon(tmp, null, new Fill(), toAttrs(modifier_0._v), ComposableSingletons$ExclaimIconKt_getInstance().x3i_1, $composer_0, 24576 | com_varabyte_kobweb_compose_dom_svg_ViewBox$stableprop_getter(), 2);
    } else {
      $composer_0.w19();
    }
    var tmp0_safe_receiver = $composer_0.z1i();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d1o(ExclaimIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_7(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.q2a(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$ExclaimIconKt$lambda$_675482057$lambda_ieignf($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.y1h();
    var tmp;
    if (false || it === Companion_getInstance().f1a_1) {
      var value = ComposableSingletons$ExclaimIconKt$lambda$_675482057$lambda$lambda_6t7l8g;
      $composer_0.j1i(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    Path($this$createIcon, tmp$ret$3, $composer_0, 48 | 14 & $changed);
    return Unit_instance;
  }
  function ComposableSingletons$ExclaimIconKt$lambda$_675482057$lambda$lambda_6t7l8g($this$Path) {
    $this$Path.k2u('M 0 1.75 C 0 0.784 0.784 0 1.75 0 h 12.5 C 15.216 0 16 0.784 16 1.75 v 9.5 A 1.75 1.75 0 0 1 14.25 13 H 8.06 l -2.573 2.573 A 1.458 1.458 0 0 1 3 14.543 V 13 H 1.75 A 1.75 1.75 0 0 1 0 11.25 Z m 1.75 -0.25 a 0.25 0.25 0 0 0 -0.25 0.25 v 9.5 c 0 0.138 0.112 0.25 0.25 0.25 h 2 a 0.75 0.75 0 0 1 0.75 0.75 v 2.19 l 2.72 -2.72 a 0.749 0.749 0 0 1 0.53 -0.22 h 6.5 a 0.25 0.25 0 0 0 0.25 -0.25 v -9.5 a 0.25 0.25 0 0 0 -0.25 -0.25 Z m 7 2.25 v 2.5 a 0.75 0.75 0 0 1 -1.5 0 v -2.5 a 0.75 0.75 0 0 1 1.5 0 Z M 9 9 a 1 1 0 1 1 -2 0 a 1 1 0 0 1 2 0 Z');
    return Unit_instance;
  }
  function ComposableSingletons$ExclaimIconKt() {
    ComposableSingletons$ExclaimIconKt_instance = this;
    var tmp = this;
    tmp.x3i_1 = ComposableLambda$invoke$ref_7(composableLambdaInstance(-675482057, false, ComposableSingletons$ExclaimIconKt$lambda$_675482057$lambda_ieignf));
  }
  var ComposableSingletons$ExclaimIconKt_instance;
  function ComposableSingletons$ExclaimIconKt_getInstance() {
    if (ComposableSingletons$ExclaimIconKt_instance == null)
      new ComposableSingletons$ExclaimIconKt();
    return ComposableSingletons$ExclaimIconKt_instance;
  }
  function ExclaimIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      ExclaimIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function InfoIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.y1i(197779673);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.m1h(modifier_0._v) ? 4 : 2);
    if ($composer_0.r1i(!(($dirty & 3) === 2), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      var tmp = Companion_instance_17.w2t(16);
      createIcon(tmp, null, new Fill(), toAttrs(modifier_0._v), ComposableSingletons$InfoIconKt_getInstance().y3i_1, $composer_0, 24576 | com_varabyte_kobweb_compose_dom_svg_ViewBox$stableprop_getter(), 2);
    } else {
      $composer_0.w19();
    }
    var tmp0_safe_receiver = $composer_0.z1i();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d1o(InfoIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_8(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.q2a(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$InfoIconKt$lambda$_954934107$lambda_jf0t4a($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.y1h();
    var tmp;
    if (false || it === Companion_getInstance().f1a_1) {
      var value = ComposableSingletons$InfoIconKt$lambda$_954934107$lambda$lambda_hfr7b3;
      $composer_0.j1i(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    Path($this$createIcon, tmp$ret$3, $composer_0, 48 | 14 & $changed);
    return Unit_instance;
  }
  function ComposableSingletons$InfoIconKt$lambda$_954934107$lambda$lambda_hfr7b3($this$Path) {
    $this$Path.k2u('M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z');
    return Unit_instance;
  }
  function ComposableSingletons$InfoIconKt() {
    ComposableSingletons$InfoIconKt_instance = this;
    var tmp = this;
    tmp.y3i_1 = ComposableLambda$invoke$ref_8(composableLambdaInstance(-954934107, false, ComposableSingletons$InfoIconKt$lambda$_954934107$lambda_jf0t4a));
  }
  var ComposableSingletons$InfoIconKt_instance;
  function ComposableSingletons$InfoIconKt_getInstance() {
    if (ComposableSingletons$InfoIconKt_instance == null)
      new ComposableSingletons$InfoIconKt();
    return ComposableSingletons$InfoIconKt_instance;
  }
  function InfoIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      InfoIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function LightbulbIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.y1i(-1309236181);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.m1h(modifier_0._v) ? 4 : 2);
    if ($composer_0.r1i(!(($dirty & 3) === 2), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      var tmp = Companion_instance_17.w2t(16);
      createIcon(tmp, null, new Fill(), toAttrs(modifier_0._v), ComposableSingletons$LightbulbIconKt_getInstance().z3i_1, $composer_0, 24576 | com_varabyte_kobweb_compose_dom_svg_ViewBox$stableprop_getter(), 2);
    } else {
      $composer_0.w19();
    }
    var tmp0_safe_receiver = $composer_0.z1i();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d1o(LightbulbIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_9(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.q2a(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$LightbulbIconKt$lambda$977424631$lambda($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.y1h();
    var tmp;
    if (false || it === Companion_getInstance().f1a_1) {
      var value = ComposableSingletons$LightbulbIconKt$lambda$977424631$lambda$lambda;
      $composer_0.j1i(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    Path($this$createIcon, tmp$ret$3, $composer_0, 48 | 14 & $changed);
    return Unit_instance;
  }
  function ComposableSingletons$LightbulbIconKt$lambda$977424631$lambda$lambda($this$Path) {
    $this$Path.k2u('M 8 1.5 c -2.363 0 -4 1.69 -4 3.75 c 0 0.984 0.424 1.625 0.984 2.304 l 0.214 0.253 c 0.223 0.264 0.47 0.556 0.673 0.848 c 0.284 0.411 0.537 0.896 0.621 1.49 a 0.75 0.75 0 0 1 -1.484 0.211 c -0.04 -0.282 -0.163 -0.547 -0.37 -0.847 a 8.456 8.456 0 0 0 -0.542 -0.68 c -0.084 -0.1 -0.173 -0.205 -0.268 -0.32 C 3.201 7.75 2.5 6.766 2.5 5.25 C 2.5 2.31 4.863 0 8 0 s 5.5 2.31 5.5 5.25 c 0 1.516 -0.701 2.5 -1.328 3.259 c -0.095 0.115 -0.184 0.22 -0.268 0.319 c -0.207 0.245 -0.383 0.453 -0.541 0.681 c -0.208 0.3 -0.33 0.565 -0.37 0.847 a 0.751 0.751 0 0 1 -1.485 -0.212 c 0.084 -0.593 0.337 -1.078 0.621 -1.489 c 0.203 -0.292 0.45 -0.584 0.673 -0.848 c 0.075 -0.088 0.147 -0.173 0.213 -0.253 c 0.561 -0.679 0.985 -1.32 0.985 -2.304 c 0 -2.06 -1.637 -3.75 -4 -3.75 Z M 5.75 12 h 4.5 a 0.75 0.75 0 0 1 0 1.5 h -4.5 a 0.75 0.75 0 0 1 0 -1.5 Z M 6 15.25 a 0.75 0.75 0 0 1 0.75 -0.75 h 2.5 a 0.75 0.75 0 0 1 0 1.5 h -2.5 a 0.75 0.75 0 0 1 -0.75 -0.75 Z');
    return Unit_instance;
  }
  function ComposableSingletons$LightbulbIconKt() {
    ComposableSingletons$LightbulbIconKt_instance = this;
    var tmp = this;
    tmp.z3i_1 = ComposableLambda$invoke$ref_9(composableLambdaInstance(977424631, false, ComposableSingletons$LightbulbIconKt$lambda$977424631$lambda));
  }
  var ComposableSingletons$LightbulbIconKt_instance;
  function ComposableSingletons$LightbulbIconKt_getInstance() {
    if (ComposableSingletons$LightbulbIconKt_instance == null)
      new ComposableSingletons$LightbulbIconKt();
    return ComposableSingletons$LightbulbIconKt_instance;
  }
  function LightbulbIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      LightbulbIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function QuestionIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.y1i(-1830362903);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.m1h(modifier_0._v) ? 4 : 2);
    if ($composer_0.r1i(!(($dirty & 3) === 2), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      createIcon(null, null, new Stroke(2), toAttrs(modifier_0._v), ComposableSingletons$QuestionIconKt_getInstance().a3j_1, $composer_0, 24576, 3);
    } else {
      $composer_0.w19();
    }
    var tmp0_safe_receiver = $composer_0.z1i();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d1o(QuestionIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_10(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.q2a(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$QuestionIconKt$lambda$_1550888779$lambda_b59ksy($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.y1h();
    var tmp;
    if (false || it === Companion_getInstance().f1a_1) {
      var value = ComposableSingletons$QuestionIconKt$lambda$_1550888779$lambda$lambda_qvstoj;
      $composer_0.j1i(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    Path($this$createIcon, tmp$ret$3, $composer_0, 48 | 14 & $changed);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it_0 = $composer_0.y1h();
    var tmp_1;
    if (false || it_0 === Companion_getInstance().f1a_1) {
      var value_0 = ComposableSingletons$QuestionIconKt$lambda$_1550888779$lambda$lambda_qvstoj_0;
      $composer_0.j1i(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp$ret$7 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    Path($this$createIcon, tmp$ret$7, $composer_0, 48 | 14 & $changed);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it_1 = $composer_0.y1h();
    var tmp_3;
    if (false || it_1 === Companion_getInstance().f1a_1) {
      var value_1 = ComposableSingletons$QuestionIconKt$lambda$_1550888779$lambda$lambda_qvstoj_1;
      $composer_0.j1i(value_1);
      tmp_3 = value_1;
    } else {
      tmp_3 = it_1;
    }
    var tmp_4 = tmp_3;
    var tmp$ret$11 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
    Circle($this$createIcon, tmp$ret$11, $composer_0, 48 | 14 & $changed);
    return Unit_instance;
  }
  function ComposableSingletons$QuestionIconKt$lambda$_1550888779$lambda$lambda_qvstoj($this$Path) {
    $this$Path.l2u(SVGStrokeLineCap_Round_getInstance());
    $this$Path.k2u('M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25');
    return Unit_instance;
  }
  function ComposableSingletons$QuestionIconKt$lambda$_1550888779$lambda$lambda_qvstoj_0($this$Path) {
    $this$Path.l2u(SVGStrokeLineCap_Round_getInstance());
    $this$Path.k2u('M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0');
    return Unit_instance;
  }
  function ComposableSingletons$QuestionIconKt$lambda$_1550888779$lambda$lambda_qvstoj_1($this$Circle) {
    $this$Circle.p2u(10);
    $this$Circle.q2u(12);
    $this$Circle.r2u(12);
    $this$Circle.o2u(11.25);
    return Unit_instance;
  }
  function ComposableSingletons$QuestionIconKt() {
    ComposableSingletons$QuestionIconKt_instance = this;
    var tmp = this;
    tmp.a3j_1 = ComposableLambda$invoke$ref_10(composableLambdaInstance(-1550888779, false, ComposableSingletons$QuestionIconKt$lambda$_1550888779$lambda_b59ksy));
  }
  var ComposableSingletons$QuestionIconKt_instance;
  function ComposableSingletons$QuestionIconKt_getInstance() {
    if (ComposableSingletons$QuestionIconKt_instance == null)
      new ComposableSingletons$QuestionIconKt();
    return ComposableSingletons$QuestionIconKt_instance;
  }
  function QuestionIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      QuestionIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function QuoteIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.y1i(-1516926133);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.m1h(modifier_0._v) ? 4 : 2);
    if ($composer_0.r1i(!(($dirty & 3) === 2), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      var tmp = Companion_instance_17.w2t(300);
      createIcon(tmp, null, new Fill(), toAttrs(modifier_0._v), ComposableSingletons$QuoteIconKt_getInstance().b3j_1, $composer_0, 24576 | com_varabyte_kobweb_compose_dom_svg_ViewBox$stableprop_getter(), 2);
    } else {
      $composer_0.w19();
    }
    var tmp0_safe_receiver = $composer_0.z1i();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d1o(QuoteIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_11(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.q2a(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$QuoteIconKt$lambda$_1173306345$lambda_5akkrz($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.y1h();
    var tmp;
    if (false || it === Companion_getInstance().f1a_1) {
      var value = ComposableSingletons$QuoteIconKt$lambda$_1173306345$lambda$lambda_1v3ns4;
      $composer_0.j1i(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    Path($this$createIcon, tmp$ret$3, $composer_0, 48 | 14 & $changed);
    return Unit_instance;
  }
  function ComposableSingletons$QuoteIconKt$lambda$_1173306345$lambda$lambda_1v3ns4($this$Path) {
    $this$Path.k2u('m175.6 204.73 22.19 46.49C258.61 223.15 278 189.49 278 151.18V48.78H175.6v102.4h51.2c0 15.64-12.42 35.66-51.2 53.55zm-153.6 0 22.19 46.49c60.83-28.07 80.21-61.73 80.21-100.04V48.78H22v102.4h51.2c0 15.64-12.42 35.66-51.2 53.55z');
    return Unit_instance;
  }
  function ComposableSingletons$QuoteIconKt() {
    ComposableSingletons$QuoteIconKt_instance = this;
    var tmp = this;
    tmp.b3j_1 = ComposableLambda$invoke$ref_11(composableLambdaInstance(-1173306345, false, ComposableSingletons$QuoteIconKt$lambda$_1173306345$lambda_5akkrz));
  }
  var ComposableSingletons$QuoteIconKt_instance;
  function ComposableSingletons$QuoteIconKt_getInstance() {
    if (ComposableSingletons$QuoteIconKt_instance == null)
      new ComposableSingletons$QuoteIconKt();
    return ComposableSingletons$QuoteIconKt_instance;
  }
  function QuoteIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      QuoteIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function StopIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.y1i(637478449);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.m1h(modifier_0._v) ? 4 : 2);
    if ($composer_0.r1i(!(($dirty & 3) === 2), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      var tmp = Companion_instance_17.w2t(16);
      createIcon(tmp, null, new Fill(), toAttrs(modifier_0._v), ComposableSingletons$StopIconKt_getInstance().c3j_1, $composer_0, 24576 | com_varabyte_kobweb_compose_dom_svg_ViewBox$stableprop_getter(), 2);
    } else {
      $composer_0.w19();
    }
    var tmp0_safe_receiver = $composer_0.z1i();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d1o(StopIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_12(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.q2a(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$StopIconKt$lambda$_515235331$lambda_6se70q($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.y1h();
    var tmp;
    if (false || it === Companion_getInstance().f1a_1) {
      var value = ComposableSingletons$StopIconKt$lambda$_515235331$lambda$lambda_u1w1jf;
      $composer_0.j1i(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    Path($this$createIcon, tmp$ret$3, $composer_0, 48 | 14 & $changed);
    return Unit_instance;
  }
  function ComposableSingletons$StopIconKt$lambda$_515235331$lambda$lambda_u1w1jf($this$Path) {
    $this$Path.k2u('M 4.47 0.22 A 0.749 0.749 0 0 1 5 0 h 6 c 0.199 0 0.389 0.079 0.53 0.22 l 4.25 4.25 c 0.141 0.14 0.22 0.331 0.22 0.53 v 6 a 0.749 0.749 0 0 1 -0.22 0.53 l -4.25 4.25 A 0.749 0.749 0 0 1 11 16 H 5 a 0.749 0.749 0 0 1 -0.53 -0.22 L 0.22 11.53 A 0.749 0.749 0 0 1 0 11 V 5 c 0 -0.199 0.079 -0.389 0.22 -0.53 Z m 0.84 1.28 L 1.5 5.31 v 5.38 l 3.81 3.81 h 5.38 l 3.81 -3.81 V 5.31 L 10.69 1.5 Z M 8 4 a 0.75 0.75 0 0 1 0.75 0.75 v 3.5 a 0.75 0.75 0 0 1 -1.5 0 v -3.5 A 0.75 0.75 0 0 1 8 4 Z m 0 8 a 1 1 0 1 1 0 -2 a 1 1 0 0 1 0 2 Z');
    return Unit_instance;
  }
  function ComposableSingletons$StopIconKt() {
    ComposableSingletons$StopIconKt_instance = this;
    var tmp = this;
    tmp.c3j_1 = ComposableLambda$invoke$ref_12(composableLambdaInstance(-515235331, false, ComposableSingletons$StopIconKt$lambda$_515235331$lambda_6se70q));
  }
  var ComposableSingletons$StopIconKt_instance;
  function ComposableSingletons$StopIconKt_getInstance() {
    if (ComposableSingletons$StopIconKt_instance == null)
      new ComposableSingletons$StopIconKt();
    return ComposableSingletons$StopIconKt_instance;
  }
  function StopIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      StopIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function WarningIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.y1i(1461404811);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.m1h(modifier_0._v) ? 4 : 2);
    if ($composer_0.r1i(!(($dirty & 3) === 2), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      var tmp = Companion_instance_17.w2t(16);
      createIcon(tmp, null, new Fill(), toAttrs(modifier_0._v), ComposableSingletons$WarningIconKt_getInstance().d3j_1, $composer_0, 24576 | com_varabyte_kobweb_compose_dom_svg_ViewBox$stableprop_getter(), 2);
    } else {
      $composer_0.w19();
    }
    var tmp0_safe_receiver = $composer_0.z1i();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d1o(WarningIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_13(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.q2a(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$WarningIconKt$lambda$_696961193$lambda_qp68sm($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.y1h();
    var tmp;
    if (false || it === Companion_getInstance().f1a_1) {
      var value = ComposableSingletons$WarningIconKt$lambda$_696961193$lambda$lambda_cg9gpn;
      $composer_0.j1i(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    Path($this$createIcon, tmp$ret$3, $composer_0, 48 | 14 & $changed);
    return Unit_instance;
  }
  function ComposableSingletons$WarningIconKt$lambda$_696961193$lambda$lambda_cg9gpn($this$Path) {
    $this$Path.k2u('M 6.457 1.047 c 0.659 -1.234 2.427 -1.234 3.086 0 l 6.082 11.378 A 1.75 1.75 0 0 1 14.082 15 H 1.918 a 1.75 1.75 0 0 1 -1.543 -2.575 Z m 1.763 0.707 a 0.25 0.25 0 0 0 -0.44 0 L 1.698 13.132 a 0.25 0.25 0 0 0 0.22 0.368 h 12.164 a 0.25 0.25 0 0 0 0.22 -0.368 Z m 0.53 3.996 v 2.5 a 0.75 0.75 0 0 1 -1.5 0 v -2.5 a 0.75 0.75 0 0 1 1.5 0 Z M 9 11 a 1 1 0 1 1 -2 0 a 1 1 0 0 1 2 0 Z');
    return Unit_instance;
  }
  function ComposableSingletons$WarningIconKt() {
    ComposableSingletons$WarningIconKt_instance = this;
    var tmp = this;
    tmp.d3j_1 = ComposableLambda$invoke$ref_13(composableLambdaInstance(-696961193, false, ComposableSingletons$WarningIconKt$lambda$_696961193$lambda_qp68sm));
  }
  var ComposableSingletons$WarningIconKt_instance;
  function ComposableSingletons$WarningIconKt_getInstance() {
    if (ComposableSingletons$WarningIconKt_instance == null)
      new ComposableSingletons$WarningIconKt();
    return ComposableSingletons$WarningIconKt_instance;
  }
  function WarningIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      WarningIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var com_varabyte_kobweb_silk_components_icons_IconRenderStyle_Fill$stable;
  var com_varabyte_kobweb_silk_components_icons_IconRenderStyle_Stroke$stable;
  function createIcon(viewBox, width, renderStyle, attrs, content, $composer, $changed, $default) {
    var viewBox_0 = {_v: viewBox};
    var width_0 = {_v: width};
    var renderStyle_0 = {_v: renderStyle};
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.y1i(-1506534634);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | (($default & 1) === 0 && (($changed & 8) === 0 ? $composer_0.z16(viewBox_0._v) : $composer_0.m1h(viewBox_0._v)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | (($default & 2) === 0 && $composer_0.m1h(width_0._v) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | (($default & 4) === 0 && (($changed & 512) === 0 ? $composer_0.z16(renderStyle_0._v) : $composer_0.m1h(renderStyle_0._v)) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.m1h(attrs_0._v) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.m1h(content) ? 16384 : 8192);
    if ($composer_0.r1i(!(($dirty & 9363) === 9362), $dirty & 1)) {
      $composer_0.s1g();
      if (($changed & 1) === 0 || $composer_0.w1g()) {
        if (!(($default & 1) === 0)) {
          viewBox_0._v = Companion_instance_17.w2t(24);
          $dirty = $dirty & -15;
        }
        if (!(($default & 2) === 0)) {
          width_0._v = get_em(1);
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
          renderStyle_0._v = new Stroke();
          $dirty = $dirty & -897;
        }
        if (!(($default & 8) === 0)) {
          attrs_0._v = null;
        }
      } else {
        $composer_0.w19();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.t1g();
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!(!!($composer_0.m1h(width_0._v) | (($dirty & 14 ^ 6) > 4 && $composer_0.m1h(viewBox_0._v) || ($dirty & 6) === 4)) | (($dirty & 896 ^ 384) > 256 && $composer_0.m1h(renderStyle_0._v) || ($dirty & 384) === 256)) | ($dirty & 7168) === 2048);
      // Inline function 'kotlin.let' call
      var it = tmp0.y1h();
      var tmp;
      if (invalid || it === Companion_getInstance().f1a_1) {
        var value = createIcon$lambda(width_0, viewBox_0, renderStyle_0, attrs_0);
        tmp0.j1i(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      Svg(tmp$ret$3, content, $composer_0, 112 & $dirty >> 9, 0);
    } else {
      $composer_0.w19();
    }
    var tmp0_safe_receiver = $composer_0.z1i();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d1o(createIcon$lambda_0(viewBox_0, width_0, renderStyle_0, attrs_0, content, $changed, $default));
    }
  }
  function Fill() {
  }
  function Stroke(strokeWidth) {
    strokeWidth = strokeWidth === VOID ? null : strokeWidth;
    this.e3j_1 = strokeWidth;
  }
  function createIcon$lambda$lambda($this$style) {
    overflow_1($this$style, Companion_instance_4.r2r());
    return Unit_instance;
  }
  function createIcon$lambda($width, $viewBox, $renderStyle, $attrs) {
    return function ($this$Svg) {
      var tmp0_safe_receiver = $width._v;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        $this$Svg.g2u(tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $viewBox._v;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        $this$Svg.h2u(tmp1_safe_receiver.x2t_1, tmp1_safe_receiver.y2t_1, tmp1_safe_receiver.z2t_1, tmp1_safe_receiver.a2u_1);
      }
      var tmp2_safe_receiver = $renderStyle._v;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        var tmp;
        if (tmp2_safe_receiver instanceof Fill) {
          $this$Svg.f2u(SVGFillType_CurrentColor_getInstance());
          tmp = $this$Svg.d2u(SVGStrokeType_None_getInstance());
        } else {
          if (tmp2_safe_receiver instanceof Stroke) {
            $this$Svg.d2u(SVGStrokeType_CurrentColor_getInstance());
            $this$Svg.f2u(SVGFillType_None_getInstance());
            var tmp1_safe_receiver_0 = tmp2_safe_receiver.e3j_1;
            var tmp_0;
            if (tmp1_safe_receiver_0 == null) {
              tmp_0 = null;
            } else {
              // Inline function 'kotlin.let' call
              tmp_0 = $this$Svg.e2u(tmp1_safe_receiver_0);
            }
            tmp = tmp_0;
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
      $this$Svg.g2k(createIcon$lambda$lambda);
      var tmp3_safe_receiver = $attrs._v;
      if (tmp3_safe_receiver == null)
        null;
      else
        tmp3_safe_receiver($this$Svg);
      return Unit_instance;
    };
  }
  function createIcon$lambda_0($viewBox, $width, $renderStyle, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      createIcon($viewBox._v, $width._v, $renderStyle._v, $attrs._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function get_HorizontalDividerStyle() {
    _init_properties_Divider_kt__8b5dnr();
    return HorizontalDividerStyle;
  }
  var HorizontalDividerStyle;
  function get_VerticalDividerStyle() {
    _init_properties_Divider_kt__8b5dnr();
    return VerticalDividerStyle;
  }
  var VerticalDividerStyle;
  var com_varabyte_kobweb_silk_components_layout_DividerVars$stable;
  function DividerVars$_get_Color_$ref_qjroxu() {
    return function (p0) {
      return p0.s3c();
    };
  }
  function DividerVars$_get_Length_$ref_k75zgt() {
    return function (p0) {
      return p0.h3j();
    };
  }
  function DividerVars() {
    DividerVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().e2s();
    tmp.f3j_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_percent(90);
    tmp_0.g3j_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
  }
  protoOf(DividerVars).s3c = function () {
    var tmp = KProperty1;
    return this.f3j_1.k2s(this, getPropertyCallableRef('Color', 1, tmp, DividerVars$_get_Color_$ref_qjroxu(), null));
  };
  protoOf(DividerVars).h3j = function () {
    var tmp = KProperty1;
    return this.g3j_1.k2s(this, getPropertyCallableRef('Length', 1, tmp, DividerVars$_get_Length_$ref_k75zgt(), null));
  };
  var DividerVars_instance;
  function DividerVars_getInstance() {
    if (DividerVars_instance == null)
      new DividerVars();
    return DividerVars_instance;
  }
  function HorizontalDividerStyle$lambda($this$base) {
    _init_properties_Divider_kt__8b5dnr();
    var tmp = Companion_instance;
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return width(borderTop(tmp, tmp_0, 'solid', DividerVars_getInstance().s3c().e2s()), DividerVars_getInstance().h3j().e2s());
  }
  function VerticalDividerStyle$lambda($this$base) {
    _init_properties_Divider_kt__8b5dnr();
    var tmp = Companion_instance;
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return height(borderLeft(tmp, tmp_0, 'solid', DividerVars_getInstance().s3c().e2s()), DividerVars_getInstance().h3j().e2s());
  }
  var properties_initialized_Divider_kt_k1kxcn;
  function _init_properties_Divider_kt__8b5dnr() {
    if (!properties_initialized_Divider_kt_k1kxcn) {
      properties_initialized_Divider_kt_k1kxcn = true;
      var tmp = Companion_instance_5;
      HorizontalDividerStyle = base(tmp, VOID, HorizontalDividerStyle$lambda);
      var tmp_0 = Companion_instance_5;
      VerticalDividerStyle = base(tmp_0, VOID, VerticalDividerStyle$lambda);
      com_varabyte_kobweb_silk_components_layout_DividerVars$stable = 8;
    }
  }
  function get_columnVariables() {
    _init_properties_SimpleGrid_kt__tvipdk();
    return columnVariables;
  }
  var columnVariables;
  function get_SimpleGridStyle() {
    _init_properties_SimpleGrid_kt__tvipdk();
    return SimpleGridStyle;
  }
  var SimpleGridStyle;
  function SimpleGrid(numColumns, modifier, variant, ref, content, $composer, $changed, $default) {
    _init_properties_SimpleGrid_kt__tvipdk();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.y1i(1950532178);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.z16(numColumns) : $composer_0.m1h(numColumns)) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.m1h(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ((($changed & 512) === 0 ? $composer_0.z16(variant_0._v) : $composer_0.m1h(variant_0._v)) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ((($changed & 4096) === 0 ? $composer_0.z16(ref_0._v) : $composer_0.m1h(ref_0._v)) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.m1h(content) ? 16384 : 8192);
    if ($composer_0.r1i(!(($dirty & 9363) === 9362), $dirty & 1)) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 4) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        ref_0._v = null;
      }
      var tmp = toAttrs(setVariable_0(setVariable_0(setVariable_0(setVariable_0(setVariable_0(toModifier(get_SimpleGridStyle(), [variant_0._v], $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter() | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 3), getValue(get_columnVariables(), Breakpoint_ZERO_getInstance()), numColumns.r38_1), getValue(get_columnVariables(), Breakpoint_SM_getInstance()), numColumns.s38_1), getValue(get_columnVariables(), Breakpoint_MD_getInstance()), numColumns.t38_1), getValue(get_columnVariables(), Breakpoint_LG_getInstance()), numColumns.u38_1), getValue(get_columnVariables(), Breakpoint_XL_getInstance()), numColumns.v38_1).c30(modifier_0._v));
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(656877393, true, SimpleGrid$lambda(ref_0, content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.z16(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.y1h();
      var tmp_0;
      if (invalid || it === Companion_getInstance().f1a_1) {
        var value = ComposableLambda$invoke$ref_14(dispatchReceiver);
        $composer_1.j1i(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp, tmp0, $composer_0, 48, 0);
    } else {
      $composer_0.w19();
    }
    var tmp0_safe_receiver = $composer_0.z1i();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d1o(SimpleGrid$lambda_0(numColumns, modifier_0, variant_0, ref_0, content, $changed, $default));
    }
  }
  function numColumns(base, sm, md, lg, xl) {
    sm = sm === VOID ? base : sm;
    md = md === VOID ? sm : md;
    lg = lg === VOID ? md : lg;
    xl = xl === VOID ? lg : xl;
    _init_properties_SimpleGrid_kt__tvipdk();
    return new ResponsiveValues(base, sm, md, lg, xl);
  }
  function SimpleGridStyle$lambda($this$CssStyle) {
    _init_properties_SimpleGrid_kt__tvipdk();
    $this$CssStyle.n35(SimpleGridStyle$lambda$lambda);
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = get_columnVariables().k2().g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'kotlin.collections.component1' call
      var breakpoint = element.d2();
      // Inline function 'kotlin.collections.component2' call
      var variable = element.e2();
      $this$CssStyle.o37(breakpoint, SimpleGridStyle$lambda$lambda_0(variable));
    }
    return Unit_instance;
  }
  function SimpleGridStyle$lambda$lambda() {
    _init_properties_SimpleGrid_kt__tvipdk();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Grid' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'grid');
  }
  function SimpleGridStyle$lambda$lambda$lambda$lambda($this$repeat) {
    _init_properties_SimpleGrid_kt__tvipdk();
    $this$repeat.p2q(get_fr(1));
    return Unit_instance;
  }
  function SimpleGridStyle$lambda$lambda$lambda($variable) {
    return function ($this$gridTemplateColumns) {
      var tmp = $variable.e2s();
      $this$gridTemplateColumns.l2q(tmp, SimpleGridStyle$lambda$lambda$lambda$lambda);
      return Unit_instance;
    };
  }
  function SimpleGridStyle$lambda$lambda_0($variable) {
    return function () {
      var tmp = Companion_instance;
      return gridTemplateColumns(tmp, SimpleGridStyle$lambda$lambda$lambda($variable));
    };
  }
  function SimpleGrid$lambda($ref, $content) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      registerRefScope($this$Div, $ref._v, $composer_0, 14 & $changed | com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter() << 3);
      $content($composer_0, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_14(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.q2a(_this__u8e3s4, p0_0, p1);
    };
  }
  function SimpleGrid$lambda_0($numColumns, $modifier, $variant, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      SimpleGrid($numColumns, $modifier._v, $variant._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var properties_initialized_SimpleGrid_kt_fum19i;
  function _init_properties_SimpleGrid_kt__tvipdk() {
    if (!properties_initialized_SimpleGrid_kt_fum19i) {
      properties_initialized_SimpleGrid_kt_fum19i = true;
      // Inline function 'kotlin.collections.associateWith' call
      var this_0 = get_entries();
      var result = LinkedHashMap_init_$Create$(coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16));
      // Inline function 'kotlin.collections.associateWithTo' call
      var _iterator__ex2g4s = this_0.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        // Inline function 'kotlin.text.lowercase' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = element.o2_1.toLowerCase();
        var tmp$ret$2 = new NumberValue('simple-grid-col-count-' + tmp$ret$1, VOID, 'silk');
        result.l2(element, tmp$ret$2);
      }
      columnVariables = result;
      SimpleGridStyle = CssStyle(VOID, SimpleGridStyle$lambda);
    }
  }
  function get_SurfaceStyle() {
    _init_properties_Surface_kt__8o7unv();
    return SurfaceStyle;
  }
  var SurfaceStyle;
  var com_varabyte_kobweb_silk_components_layout_SurfaceVars$stable;
  function SurfaceVars$_get_BackgroundColor_$ref_ysiqw0() {
    return function (p0) {
      return p0.u3c();
    };
  }
  function SurfaceVars$_get_Color_$ref_yzfonm() {
    return function (p0) {
      return p0.s3c();
    };
  }
  function SurfaceVars() {
    SurfaceVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BackgroundColorVar().e2s();
    tmp.i3j_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_ColorVar().e2s();
    tmp_0.j3j_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
  }
  protoOf(SurfaceVars).u3c = function () {
    var tmp = KProperty1;
    return this.i3j_1.k2s(this, getPropertyCallableRef('BackgroundColor', 1, tmp, SurfaceVars$_get_BackgroundColor_$ref_ysiqw0(), null));
  };
  protoOf(SurfaceVars).s3c = function () {
    var tmp = KProperty1;
    return this.j3j_1.k2s(this, getPropertyCallableRef('Color', 1, tmp, SurfaceVars$_get_Color_$ref_yzfonm(), null));
  };
  var SurfaceVars_instance;
  function SurfaceVars_getInstance() {
    if (SurfaceVars_instance == null)
      new SurfaceVars();
    return SurfaceVars_instance;
  }
  function Surface(modifier, variant, colorModeOverride, ref, content, $composer, $changed, $default) {
    _init_properties_Surface_kt__8o7unv();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var colorModeOverride_0 = {_v: colorModeOverride};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.y1i(-2017137850);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.m1h(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ((($changed & 64) === 0 ? $composer_0.z16(variant_0._v) : $composer_0.m1h(variant_0._v)) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0) {
      var tmp;
      var tmp_0 = $composer_0;
      var tmpEnum = colorModeOverride_0._v;
      if (tmp_0.o1h(tmpEnum == null ? -1 : tmpEnum.p2_1)) {
        tmp = 256;
      } else {
        tmp = 128;
      }
      $dirty = $dirty | tmp;
    }
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ((($changed & 4096) === 0 ? $composer_0.z16(ref_0._v) : $composer_0.m1h(ref_0._v)) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.m1h(content) ? 16384 : 8192);
    if ($composer_0.r1i(!(($dirty & 9363) === 9362), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 2) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        colorModeOverride_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        ref_0._v = null;
      }
      var tmp0 = toModifier(get_SurfaceStyle(), [variant_0._v], $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter() | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 3).c30(modifier_0._v);
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
      var tmp_1;
      if (!(colorModeOverride_0._v == null)) {
        tmp_1 = classNames(Companion_instance, [get_cssClass(ensureNotNull(colorModeOverride_0._v))]);
      } else {
        tmp_1 = Companion_instance;
      }
      var surfaceModifier = tmp0.c30(tmp_1);
      if (colorModeOverride_0._v == null || get_useScope(Companion_getInstance_0().h35_1)) {
        $composer_0.p1g(-1665730553);
        var tmp_2 = toAttrs(surfaceModifier);
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(555341228, true, Surface$lambda_1(ref_0, colorModeOverride_0, content), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.z16(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.y1h();
        var tmp_3;
        if (invalid || it === Companion_getInstance().f1a_1) {
          var value = ComposableLambda$invoke$ref_16(dispatchReceiver);
          $composer_1.j1i(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmp0_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Div(tmp_2, tmp0_0, $composer_0, 48, 0);
        $composer_0.r1g();
      } else {
        $composer_0.p1g(-1665322779);
        // Inline function 'androidx.compose.runtime.cache' call
        var this_0 = $composer_0;
        // Inline function 'kotlin.let' call
        var it_0 = this_0.y1h();
        var tmp_5;
        if (false || it_0 === Companion_getInstance().f1a_1) {
          var value_0 = mutableStateOf(null);
          this_0.j1i(value_0);
          tmp_5 = value_0;
        } else {
          tmp_5 = it_0;
        }
        var tmp_6 = tmp_5;
        var surfaceElement$delegate = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        // Inline function 'androidx.compose.runtime.cache' call
        var this_1 = $composer_0;
        // Inline function 'kotlin.let' call
        var it_1 = this_1.y1h();
        var tmp_7;
        if (false || it_1 === Companion_getInstance().f1a_1) {
          var value_1 = Surface$lambda_2(surfaceElement$delegate);
          this_1.j1i(value_1);
          tmp_7 = value_1;
        } else {
          tmp_7 = it_1;
        }
        var tmp_8 = tmp_7;
        var tmp$ret$16 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
        var tmp_9 = toAttrs(surfaceModifier, tmp$ret$16);
        // Inline function 'kotlin.run' call
        var dispatchReceiver_0 = rememberComposableLambda(-189574461, true, Surface$lambda_3(ref_0, colorModeOverride_0, surfaceElement$delegate, content), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.z16(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        var it_2 = $composer_2.y1h();
        var tmp_10;
        if (invalid_0 || it_2 === Companion_getInstance().f1a_1) {
          var value_2 = ComposableLambda$invoke$ref_18(dispatchReceiver_0);
          $composer_2.j1i(value_2);
          tmp_10 = value_2;
        } else {
          tmp_10 = it_2;
        }
        var tmp_11 = tmp_10;
        var tmp0_1 = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
        sourceInformationMarkerEnd($composer_2);
        Div(tmp_9, tmp0_1, $composer_0, 48, 0);
        $composer_0.r1g();
      }
    } else {
      $composer_0.w19();
    }
    var tmp0_safe_receiver = $composer_0.z1i();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d1o(Surface$lambda_4(modifier_0, variant_0, colorModeOverride_0, ref_0, content, $changed, $default));
    }
  }
  function Surface$lambda($surfaceElement$delegate) {
    _init_properties_Surface_kt__8o7unv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('surfaceElement', KMutableProperty0, true);
    return $surfaceElement$delegate.e2();
  }
  function Surface$lambda_0($surfaceElement$delegate, _set____db54di) {
    _init_properties_Surface_kt__8o7unv();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('surfaceElement', KMutableProperty0, true);
    $surfaceElement$delegate.ss(_set____db54di);
    return Unit_instance;
  }
  function SurfaceStyle$lambda($this$CssStyle) {
    _init_properties_Surface_kt__8o7unv();
    $this$CssStyle.n35(SurfaceStyle$lambda$lambda);
    return Unit_instance;
  }
  function SurfaceStyle$lambda$lambda() {
    _init_properties_Surface_kt__8o7unv();
    return color(backgroundColor(Companion_instance, SurfaceVars_getInstance().u3c().e2s()), SurfaceVars_getInstance().s3c().e2s());
  }
  function Surface$lambda$lambda($content) {
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
  function ComposableLambda$invoke$ref_15(p0) {
    return function (_this__u8e3s4, p0_0) {
      return p0.g1g(_this__u8e3s4, p0_0);
    };
  }
  function Surface$lambda_1($ref, $colorModeOverride, $content) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      registerRefScope($this$Div, $ref._v, $composer_0, 14 & $changed | com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter() << 3);
      var tmp;
      if (!($colorModeOverride._v == null)) {
        $composer_0.p1g(-43418289);
        var tmp_0 = $colorModeOverride._v.b3a();
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-152149391, true, Surface$lambda$lambda($content), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.z16(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.y1h();
        var tmp_1;
        if (invalid || it === Companion_getInstance().f1a_1) {
          var value = ComposableLambda$invoke$ref_15(dispatchReceiver);
          $composer_1.j1i(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        CompositionLocalProvider(tmp_0, tmp0, $composer_0, 48 | androidx_compose_runtime_ProvidedValue$stableprop_getter());
        $composer_0.r1g();
        tmp = Unit_instance;
      } else {
        $composer_0.p1g(-43281331);
        $content($composer_0, 0);
        $composer_0.r1g();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_16(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.q2a(_this__u8e3s4, p0_0, p1);
    };
  }
  function _no_name_provided__qut3iv() {
  }
  protoOf(_no_name_provided__qut3iv).pm = function () {
  };
  function Surface$lambda$lambda_0($surfaceElement$delegate) {
    return function ($this$ref, it) {
      Surface$lambda_0($surfaceElement$delegate, it);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv();
    };
  }
  function Surface$lambda_2($surfaceElement$delegate) {
    return function ($this$toAttrs) {
      $this$toAttrs.k2k(Surface$lambda$lambda_0($surfaceElement$delegate));
      return Unit_instance;
    };
  }
  function Surface$lambda$slambda($surfaceElement, $colorModeOverride, resultContinuation) {
    this.s3j_1 = $surfaceElement;
    this.t3j_1 = $colorModeOverride;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Surface$lambda$slambda).w1p = function ($this$LaunchedEffect, $completion) {
    var tmp = this.x1p($this$LaunchedEffect, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(Surface$lambda$slambda).p9 = function (p1, $completion) {
    return this.w1p((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Surface$lambda$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        if (tmp === 0) {
          this.w8_1 = 1;
          var _iterator__ex2g4s = asList(this.s3j_1.classList).g();
          while (_iterator__ex2g4s.h()) {
            var element = _iterator__ex2g4s.i();
            var ident = new CssIdent(element);
            if (isSuffixedWith(ident, this.t3j_1._v.i33()) && get_SilkTheme().k39(withColorModeSuffixRemoved(ident).xu_1)) {
              this.s3j_1.classList.replace(element, suffixedWith(ident, this.t3j_1._v).xu_1);
            }
          }
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
  protoOf(Surface$lambda$slambda).x1p = function ($this$LaunchedEffect, completion) {
    var i = new Surface$lambda$slambda(this.s3j_1, this.t3j_1, completion);
    i.u3j_1 = $this$LaunchedEffect;
    return i;
  };
  function Surface$lambda$slambda_0($surfaceElement, $colorModeOverride, resultContinuation) {
    var i = new Surface$lambda$slambda($surfaceElement, $colorModeOverride, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.w1p($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Surface$lambda$lambda_1($content) {
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
  function ComposableLambda$invoke$ref_17(p0) {
    return function (_this__u8e3s4, p0_0) {
      return p0.g1g(_this__u8e3s4, p0_0);
    };
  }
  function Surface$lambda_3($ref, $colorModeOverride, $surfaceElement$delegate, $content) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      registerRefScope($this$Div, $ref._v, $composer_0, 14 & $changed | com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter() << 3);
      var tmp0_safe_receiver = Surface$lambda($surfaceElement$delegate);
      if (tmp0_safe_receiver == null) {
        $composer_0.p1g(269355054);
        $composer_0.r1g();
      } else {
        $composer_0.p1g(269355055);
        // Inline function 'kotlin.let' call
        var parentColorMode = Companion_instance_11.f33($composer_0, 6);
        var tmp = $colorModeOverride._v;
        var tmp_0 = $composer_0.m1h(tmp0_safe_receiver);
        var tmp_1 = $composer_0;
        var tmpEnum = $colorModeOverride._v;
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!(tmp_0 | tmp_1.o1h(tmpEnum == null ? -1 : tmpEnum.p2_1));
        // Inline function 'kotlin.let' call
        var it = $composer_0.y1h();
        var tmp_2;
        if (invalid || it === Companion_getInstance().f1a_1) {
          var value = Surface$lambda$slambda_0(tmp0_safe_receiver, $colorModeOverride, null);
          $composer_0.j1i(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp$ret$3 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        LaunchedEffect(parentColorMode, tmp, tmp$ret$3, $composer_0, 0);
        var tmp_4 = $colorModeOverride._v.b3a();
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-1144900937, true, Surface$lambda$lambda_1($content), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_1.z16(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it_0 = $composer_1.y1h();
        var tmp_5;
        if (invalid_0 || it_0 === Companion_getInstance().f1a_1) {
          var value_0 = ComposableLambda$invoke$ref_17(dispatchReceiver);
          $composer_1.j1i(value_0);
          tmp_5 = value_0;
        } else {
          tmp_5 = it_0;
        }
        var tmp_6 = tmp_5;
        var tmp0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        CompositionLocalProvider(tmp_4, tmp0, $composer_0, 48 | androidx_compose_runtime_ProvidedValue$stableprop_getter());
        $composer_0.r1g();
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_18(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.q2a(_this__u8e3s4, p0_0, p1);
    };
  }
  function Surface$lambda_4($modifier, $variant, $colorModeOverride, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Surface($modifier._v, $variant._v, $colorModeOverride._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var properties_initialized_Surface_kt_k203pf;
  function _init_properties_Surface_kt__8o7unv() {
    if (!properties_initialized_Surface_kt_k203pf) {
      properties_initialized_Surface_kt_k203pf = true;
      SurfaceStyle = CssStyle(VOID, SurfaceStyle$lambda);
      com_varabyte_kobweb_silk_components_layout_SurfaceVars$stable = 8;
    }
  }
  var com_varabyte_kobweb_silk_components_overlay_KeepPopupOpenStrategy$stable;
  var com_varabyte_kobweb_silk_components_overlay_ManualKeepPopupOpenStrategy$stable;
  var com_varabyte_kobweb_silk_components_overlay_OpenClosePopupStrategy$stable;
  var com_varabyte_kobweb_silk_components_overlay_ManualOpenClosePopupStrategy$stable;
  var com_varabyte_kobweb_silk_components_overlay_TimedOpenClosePopupStrategy$stable;
  function get_OverlayStyle() {
    _init_properties_Overlay_kt__p5agwu();
    return OverlayStyle;
  }
  var OverlayStyle;
  var com_varabyte_kobweb_silk_components_overlay_OverlayVars$stable;
  function OverlayVars$_get_BackgroundColor_$ref_jn4iwz() {
    return function (p0) {
      return p0.u3c();
    };
  }
  function OverlayVars() {
    OverlayVars_instance = this;
    this.v3j_1 = StyleVariable('silk');
  }
  protoOf(OverlayVars).u3c = function () {
    var tmp = KProperty1;
    return this.v3j_1.k2s(this, getPropertyCallableRef('BackgroundColor', 1, tmp, OverlayVars$_get_BackgroundColor_$ref_jn4iwz(), null));
  };
  var OverlayVars_instance;
  function OverlayVars_getInstance() {
    if (OverlayVars_instance == null)
      new OverlayVars();
    return OverlayVars_instance;
  }
  function OverlayStyle$lambda($this$base) {
    _init_properties_Overlay_kt__p5agwu();
    return backgroundColor(Companion_instance, OverlayVars_getInstance().u3c().e2s());
  }
  var properties_initialized_Overlay_kt_mvmds0;
  function _init_properties_Overlay_kt__p5agwu() {
    if (!properties_initialized_Overlay_kt_mvmds0) {
      properties_initialized_Overlay_kt_mvmds0 = true;
      var tmp = Companion_instance_5;
      OverlayStyle = base(tmp, VOID, OverlayStyle$lambda);
      com_varabyte_kobweb_silk_components_overlay_OverlayVars$stable = 8;
    }
  }
  var com_varabyte_kobweb_silk_components_overlay_PopoverState_Uninitialized$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopoverState_FoundElements$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopoverState_Calculating$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopoverState_Shown$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopoverState_Hiding$stable;
  function get_PopupStyle() {
    _init_properties_Popup_kt__lluomy();
    return PopupStyle;
  }
  var PopupStyle;
  var com_varabyte_kobweb_silk_components_overlay_PopupVars$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopupScope$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopupPlacementStrategy_Position$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopupPlacementStrategy_PositionAndPlacement$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopupPlacementStrategy$stable;
  function PopupVars$_get_TransitionDuration_$ref_94payl() {
    return function (p0) {
      return p0.r3g();
    };
  }
  function PopupVars() {
    PopupVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = TransitionDurationVars_getInstance().t3i().e2s();
    tmp.w3j_1 = StyleVariable_1(tmp0_defaultFallback, 'silk');
  }
  protoOf(PopupVars).r3g = function () {
    var tmp = KProperty1;
    return this.w3j_1.k2s(this, getPropertyCallableRef('TransitionDuration', 1, tmp, PopupVars$_get_TransitionDuration_$ref_94payl(), null));
  };
  var PopupVars_instance;
  function PopupVars_getInstance() {
    if (PopupVars_instance == null)
      new PopupVars();
    return PopupVars_instance;
  }
  function PopupStyle$lambda($this$base) {
    _init_properties_Popup_kt__lluomy();
    return transition_0(Companion_instance, [Companion_instance_2.t2s('opacity', PopupVars_getInstance().r3g().e2s())]);
  }
  var properties_initialized_Popup_kt_wwy6qs;
  function _init_properties_Popup_kt__lluomy() {
    if (!properties_initialized_Popup_kt_wwy6qs) {
      properties_initialized_Popup_kt_wwy6qs = true;
      var tmp = Companion_instance_5;
      PopupStyle = base(tmp, VOID, PopupStyle$lambda);
      com_varabyte_kobweb_silk_components_overlay_PopupVars$stable = 8;
      com_varabyte_kobweb_silk_components_overlay_PopupScope$stable = 0;
      com_varabyte_kobweb_silk_components_overlay_PopupPlacementStrategy_Position$stable = 8;
      com_varabyte_kobweb_silk_components_overlay_PopupPlacementStrategy_PositionAndPlacement$stable = 8;
      com_varabyte_kobweb_silk_components_overlay_PopupPlacementStrategy$stable = 0;
    }
  }
  function get_TRIANGLE_WIDTH() {
    _init_properties_Tooltip_kt__palx2n();
    return TRIANGLE_WIDTH;
  }
  var TRIANGLE_WIDTH;
  function get_TRIANGLE_WIDTH_2X() {
    _init_properties_Tooltip_kt__palx2n();
    return TRIANGLE_WIDTH_2X;
  }
  var TRIANGLE_WIDTH_2X;
  function get_TooltipStyle() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipStyle;
  }
  var TooltipStyle;
  function get_TooltipArrowStyle() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipArrowStyle;
  }
  var TooltipArrowStyle;
  function get_TopLeftTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return TopLeftTooltipArrowVariant;
  }
  var TopLeftTooltipArrowVariant;
  function get_TopTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return TopTooltipArrowVariant;
  }
  var TopTooltipArrowVariant;
  function get_TopRightTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return TopRightTooltipArrowVariant;
  }
  var TopRightTooltipArrowVariant;
  function get_LeftTopTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return LeftTopTooltipArrowVariant;
  }
  var LeftTopTooltipArrowVariant;
  function get_LeftTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return LeftTooltipArrowVariant;
  }
  var LeftTooltipArrowVariant;
  function get_LeftBottomTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return LeftBottomTooltipArrowVariant;
  }
  var LeftBottomTooltipArrowVariant;
  function get_RightTopTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return RightTopTooltipArrowVariant;
  }
  var RightTopTooltipArrowVariant;
  function get_RightTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return RightTooltipArrowVariant;
  }
  var RightTooltipArrowVariant;
  function get_RightBottomTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return RightBottomTooltipArrowVariant;
  }
  var RightBottomTooltipArrowVariant;
  function get_BottomLeftTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return BottomLeftTooltipArrowVariant;
  }
  var BottomLeftTooltipArrowVariant;
  function get_BottomTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return BottomTooltipArrowVariant;
  }
  var BottomTooltipArrowVariant;
  function get_BottomRightTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return BottomRightTooltipArrowVariant;
  }
  var BottomRightTooltipArrowVariant;
  function get_TooltipTextContainerStyle() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipTextContainerStyle;
  }
  var TooltipTextContainerStyle;
  var com_varabyte_kobweb_silk_components_overlay_TooltipVars$stable;
  function TooltipVars$_get_BackgroundColor_$ref_y3bglm() {
    return function (p0) {
      return p0.u3c();
    };
  }
  function TooltipVars$_get_Color_$ref_gf06w8() {
    return function (p0) {
      return p0.s3c();
    };
  }
  function TooltipVars() {
    TooltipVars_instance = this;
    this.x3j_1 = StyleVariable('silk');
    this.y3j_1 = StyleVariable('silk');
  }
  protoOf(TooltipVars).u3c = function () {
    var tmp = KProperty1;
    return this.x3j_1.k2s(this, getPropertyCallableRef('BackgroundColor', 1, tmp, TooltipVars$_get_BackgroundColor_$ref_y3bglm(), null));
  };
  protoOf(TooltipVars).s3c = function () {
    var tmp = KProperty1;
    return this.y3j_1.k2s(this, getPropertyCallableRef('Color', 1, tmp, TooltipVars$_get_Color_$ref_gf06w8(), null));
  };
  var TooltipVars_instance;
  function TooltipVars_getInstance() {
    if (TooltipVars_instance == null)
      new TooltipVars();
    return TooltipVars_instance;
  }
  function triangleDown(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return border_0(_this__u8e3s4, triangleDown$lambda(color));
  }
  function triangleLeft(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return border_0(_this__u8e3s4, triangleLeft$lambda(color));
  }
  function triangleRight(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return border_0(_this__u8e3s4, triangleRight$lambda(color));
  }
  function triangleUp(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return border_0(_this__u8e3s4, triangleUp$lambda(color));
  }
  function TooltipStyle$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'relative';
    return borderRadius(color(backgroundColor(position(tmp, tmp$ret$3), TooltipVars_getInstance().u3c().e2s()), TooltipVars_getInstance().s3c().e2s()), get_px(6));
  }
  function TooltipArrowStyle$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Absolute' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'absolute';
    var tmp_0 = position(tmp, tmp$ret$3);
    return border_0(tmp_0, TooltipArrowStyle$lambda$lambda);
  }
  function TooltipArrowStyle$lambda$lambda($this$border) {
    _init_properties_Tooltip_kt__palx2n();
    $this$border.t32(get_TRIANGLE_WIDTH());
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    $this$border.s32('solid');
    return Unit_instance;
  }
  function TopLeftTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_left = get_TRIANGLE_WIDTH_2X();
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(margin_2(Companion_instance, tmp2_top, VOID, VOID, tmp1_left), get_px(0)), TooltipVars_getInstance().u3c().e2s());
  }
  function TopTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_left = unaryMinus(get_TRIANGLE_WIDTH());
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(left(margin_2(Companion_instance, tmp2_top, VOID, VOID, tmp1_left), get_percent(50)), get_px(0)), TooltipVars_getInstance().u3c().e2s());
  }
  function TopRightTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_right = get_TRIANGLE_WIDTH_2X();
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(right(margin_2(Companion_instance, tmp2_top, tmp1_right), get_px(0)), get_px(0)), TooltipVars_getInstance().u3c().e2s());
  }
  function LeftTopTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(top(left(margin_2(Companion_instance, get_TRIANGLE_WIDTH_2X(), VOID, VOID, unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().u3c().e2s());
  }
  function LeftTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(top(left(margin_2(Companion_instance, unaryMinus(get_TRIANGLE_WIDTH()), VOID, VOID, unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_percent(50)), TooltipVars_getInstance().u3c().e2s());
  }
  function LeftBottomTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(bottom(left(margin_2(Companion_instance, VOID, VOID, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().u3c().e2s());
  }
  function RightTopTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleRight(top(right(margin_2(Companion_instance, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().u3c().e2s());
  }
  function RightTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleRight(top(right(margin_2(Companion_instance, unaryMinus(get_TRIANGLE_WIDTH()), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_percent(50)), TooltipVars_getInstance().u3c().e2s());
  }
  function RightBottomTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_bottom = get_TRIANGLE_WIDTH_2X();
    var tmp2_right = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleRight(bottom(right(margin_2(Companion_instance, VOID, tmp2_right, tmp1_bottom), get_px(0)), get_px(0)), TooltipVars_getInstance().u3c().e2s());
  }
  function BottomLeftTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_left = get_TRIANGLE_WIDTH_2X();
    var tmp2_bottom = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleUp(bottom(left(margin_2(Companion_instance, VOID, VOID, tmp2_bottom, tmp1_left), get_px(0)), get_px(0)), TooltipVars_getInstance().u3c().e2s());
  }
  function BottomTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_left = unaryMinus(get_TRIANGLE_WIDTH());
    var tmp2_bottom = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleUp(bottom(left(margin_2(Companion_instance, VOID, VOID, tmp2_bottom, tmp1_left), get_percent(50)), get_px(0)), TooltipVars_getInstance().u3c().e2s());
  }
  function BottomRightTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleUp(bottom(right(margin_2(Companion_instance, VOID, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().u3c().e2s());
  }
  function TooltipTextContainerStyle$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    return padding(Companion_instance, get_px(5));
  }
  function triangleDown$lambda($color) {
    return function ($this$border) {
      $this$border.r32(Colors_instance.q31(), Colors_instance.q31(), $color, Colors_instance.q31());
      return Unit_instance;
    };
  }
  function triangleLeft$lambda($color) {
    return function ($this$border) {
      $this$border.r32(Colors_instance.q31(), $color, Colors_instance.q31(), Colors_instance.q31());
      return Unit_instance;
    };
  }
  function triangleRight$lambda($color) {
    return function ($this$border) {
      $this$border.r32(Colors_instance.q31(), Colors_instance.q31(), Colors_instance.q31(), $color);
      return Unit_instance;
    };
  }
  function triangleUp$lambda($color) {
    return function ($this$border) {
      $this$border.r32($color, Colors_instance.q31(), Colors_instance.q31(), Colors_instance.q31());
      return Unit_instance;
    };
  }
  var properties_initialized_Tooltip_kt_68t07n;
  function _init_properties_Tooltip_kt__palx2n() {
    if (!properties_initialized_Tooltip_kt_68t07n) {
      properties_initialized_Tooltip_kt_68t07n = true;
      TRIANGLE_WIDTH = get_px(5);
      TRIANGLE_WIDTH_2X = get_px(9);
      var tmp = Companion_instance_5;
      TooltipStyle = base(tmp, VOID, TooltipStyle$lambda);
      var tmp_0 = Companion_instance_5;
      TooltipArrowStyle = base(tmp_0, VOID, TooltipArrowStyle$lambda);
      var tmp_1 = get_TooltipArrowStyle();
      TopLeftTooltipArrowVariant = addVariantBase(tmp_1, VOID, TopLeftTooltipArrowVariant$lambda);
      var tmp_2 = get_TooltipArrowStyle();
      TopTooltipArrowVariant = addVariantBase(tmp_2, VOID, TopTooltipArrowVariant$lambda);
      var tmp_3 = get_TooltipArrowStyle();
      TopRightTooltipArrowVariant = addVariantBase(tmp_3, VOID, TopRightTooltipArrowVariant$lambda);
      var tmp_4 = get_TooltipArrowStyle();
      LeftTopTooltipArrowVariant = addVariantBase(tmp_4, VOID, LeftTopTooltipArrowVariant$lambda);
      var tmp_5 = get_TooltipArrowStyle();
      LeftTooltipArrowVariant = addVariantBase(tmp_5, VOID, LeftTooltipArrowVariant$lambda);
      var tmp_6 = get_TooltipArrowStyle();
      LeftBottomTooltipArrowVariant = addVariantBase(tmp_6, VOID, LeftBottomTooltipArrowVariant$lambda);
      var tmp_7 = get_TooltipArrowStyle();
      RightTopTooltipArrowVariant = addVariantBase(tmp_7, VOID, RightTopTooltipArrowVariant$lambda);
      var tmp_8 = get_TooltipArrowStyle();
      RightTooltipArrowVariant = addVariantBase(tmp_8, VOID, RightTooltipArrowVariant$lambda);
      var tmp_9 = get_TooltipArrowStyle();
      RightBottomTooltipArrowVariant = addVariantBase(tmp_9, VOID, RightBottomTooltipArrowVariant$lambda);
      var tmp_10 = get_TooltipArrowStyle();
      BottomLeftTooltipArrowVariant = addVariantBase(tmp_10, VOID, BottomLeftTooltipArrowVariant$lambda);
      var tmp_11 = get_TooltipArrowStyle();
      BottomTooltipArrowVariant = addVariantBase(tmp_11, VOID, BottomTooltipArrowVariant$lambda);
      var tmp_12 = get_TooltipArrowStyle();
      BottomRightTooltipArrowVariant = addVariantBase(tmp_12, VOID, BottomRightTooltipArrowVariant$lambda);
      var tmp_13 = Companion_instance_5;
      TooltipTextContainerStyle = base(tmp_13, VOID, TooltipTextContainerStyle$lambda);
      com_varabyte_kobweb_silk_components_overlay_TooltipVars$stable = 8;
    }
  }
  var SilkColorsStyle;
  function silkColorsModifier(colorMode) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var palette = toPalette(colorMode);
    return setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(colorScheme(Companion_instance, colorMode.z39() ? Companion_instance_18.a2q() : Companion_instance_18.b2q()), get_BackgroundColorVar(), get_background(palette)), get_ColorVar(), get_color(palette)), get_BorderColorVar(), get_border(palette)), get_FocusOutlineColorVar(), get_focusOutline(palette)), get_PlaceholderColorVar(), get_placeholder_0(palette)), ButtonVars_getInstance().z3e(), get_button(palette).z3j()), ButtonVars_getInstance().b3f(), get_button(palette).t2m()), ButtonVars_getInstance().c3f(), get_button(palette).a3k()), CheckboxVars_getInstance().p3g(), get_checkbox(palette).b3k()), CheckboxVars_getInstance().q3g(), get_checkbox(palette).t2m()), CheckboxVars_getInstance().o3g(), get_checkbox(palette).c3k()), InputVars_getInstance().n3h(), get_input(palette).d3k()), InputVars_getInstance().o3h(), get_input(palette).e3k()), InputVars_getInstance().p3h(), get_input(palette).f3k()), InputVars_getInstance().q3h(), get_input(palette).g3k()), InputVars_getInstance().r3h(), get_input(palette).h3k()), OverlayVars_getInstance().u3c(), get_overlay(palette)), SwitchVars_getInstance().s3i(), get_switch(palette).i3k()), TabVars_getInstance().s3c(), get_tab(palette).c3k()), TabVars_getInstance().u3c(), get_tab(palette).b3k()), TabVars_getInstance().v3c(), get_tab(palette).j3k()), TabVars_getInstance().w3c(), get_tab(palette).t2m()), TabVars_getInstance().x3c(), get_tab(palette).a3k()), TooltipVars_getInstance().u3c(), get_tooltip(palette).b3k()), TooltipVars_getInstance().s3c(), get_tooltip(palette).c3k());
  }
  function initSilkWidgets(ctx) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var mutableTheme = ctx.y33_1;
    // Inline function 'kotlin.apply' call
    var this_0 = ctx.y33_1.p34_1;
    var focusOutline = Blue_getInstance().x3a_1.g31().e31(VOID, VOID, VOID, 0.5);
    var placeholder = Gray_getInstance().h3b_1;
    // Inline function 'kotlin.run' call
    var color = Colors_instance.s31();
    set_background(this_0.m3b_1, Colors_instance.l32());
    set_color(this_0.m3b_1, color);
    set_border(this_0.m3b_1, color.e31(VOID, VOID, VOID, 0.2));
    set_focusOutline(this_0.m3b_1, focusOutline);
    set_overlay(this_0.m3b_1, color.e31(VOID, VOID, VOID, 0.5));
    set_placeholder(this_0.m3b_1, placeholder);
    var buttonBase = Colors_instance.l32().f31(0.2);
    get_button_0(this_0.m3b_1).q3k(buttonBase, buttonBase.f31(0.2), Colors_instance.u31(), buttonBase.f31(0.4));
    get_callout(this_0.m3b_1).a3l(Colors_instance.v31(), Colors_instance.z31(), Colors_instance.b32(), Colors_instance.j32(), Colors_instance.c32(), Colors_instance.f32(), Colors_instance.y31());
    get_checkbox_0(this_0.m3b_1).g3l(Blue_getInstance().x3a_1, Blue_getInstance().y3a_1, Colors_instance.l32());
    var inputFilled = Gray_getInstance().e3b_1;
    var tmp0_$this = get_input_0(this_0.m3b_1);
    var tmp1_filledFocus = Colors_instance.q31();
    var tmp2_hoveredBorder = Gray_getInstance().h3b_1;
    var tmp3_invalidBorder = Red_getInstance().l3a_1;
    var tmp4_filledHover = inputFilled.f31(0.1);
    tmp0_$this.o3l(tmp2_hoveredBorder, tmp3_invalidBorder, inputFilled, tmp4_filledHover, tmp1_filledFocus);
    var tmp5_$this = get_switch_0(this_0.m3b_1);
    var tmp6_thumb = Colors_instance.l32();
    var tmp7_backgroundOn = Colors_instance.b32();
    var tmp8_backgroundOff = Colors_instance.d32();
    tmp5_$this.g3l(tmp7_backgroundOn, tmp8_backgroundOff, tmp6_thumb);
    get_tab_0(this_0.m3b_1).e3m(Colors_instance.s31(), Colors_instance.l32(), Colors_instance.u31(), VOID, VOID, Colors_instance.d32(), Colors_instance.m32(), Colors_instance.l32());
    get_tooltip_0(this_0.m3b_1).j3m(get_color_0(this_0.m3b_1), get_background_0(this_0.m3b_1));
    // Inline function 'kotlin.run' call
    var color_0 = Colors_instance.l32();
    set_background(this_0.n3b_1, Colors_instance.s31());
    set_color(this_0.n3b_1, color_0);
    set_border(this_0.n3b_1, color_0.e31(VOID, VOID, VOID, 0.2));
    set_focusOutline(this_0.n3b_1, focusOutline);
    set_overlay(this_0.n3b_1, color_0.e31(VOID, VOID, VOID, 0.5));
    set_placeholder(this_0.n3b_1, placeholder);
    var buttonBase_0 = lightened(Colors_instance.s31(), 0.2);
    get_button_0(this_0.n3b_1).q3k(buttonBase_0, lightened(buttonBase_0, 0.2), Colors_instance.e32(), lightened(buttonBase_0, 0.4));
    get_callout(this_0.n3b_1).a3l(Colors_instance.i32(), get_callout(this_0.m3b_1).s3d(), get_callout(this_0.m3b_1).t3d(), Colors_instance.r31(), get_callout(this_0.m3b_1).v3d(), get_callout(this_0.m3b_1).w3d(), Colors_instance.g32());
    get_checkbox_0(this_0.n3b_1).g3l(Blue_getInstance().u3a_1, Blue_getInstance().v3a_1, Colors_instance.s31());
    var inputFilled_0 = Gray_getInstance().l3b_1;
    var tmp0_$this_0 = get_input_0(this_0.n3b_1);
    var tmp1_filledFocus_0 = Colors_instance.q31();
    var tmp2_hoveredBorder_0 = Gray_getInstance().i3b_1;
    var tmp3_invalidBorder_0 = Red_getInstance().f3a_1;
    var tmp4_filledHover_0 = lightened(inputFilled_0, 0.1);
    tmp0_$this_0.o3l(tmp2_hoveredBorder_0, tmp3_invalidBorder_0, inputFilled_0, tmp4_filledHover_0, tmp1_filledFocus_0);
    var tmp5_$this_0 = get_switch_0(this_0.n3b_1);
    var tmp6_thumb_0 = Colors_instance.l32();
    var tmp7_backgroundOn_0 = Colors_instance.e32();
    var tmp8_backgroundOff_0 = Colors_instance.x31();
    tmp5_$this_0.g3l(tmp7_backgroundOn_0, tmp8_backgroundOff_0, tmp6_thumb_0);
    get_tab_0(this_0.n3b_1).e3m(Colors_instance.l32(), Colors_instance.s31(), Colors_instance.e32(), VOID, VOID, Colors_instance.a32(), Colors_instance.x31(), Colors_instance.s31());
    get_tooltip_0(this_0.n3b_1).j3m(get_color_0(this_0.n3b_1), get_background_0(this_0.n3b_1));
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = get_entries_0().g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      var tmp = '.' + get_cssClass(element);
      registerStyleBase(ctx.x33_1, tmp, initSilkWidgets$lambda(element));
    }
    mutableTheme.r34('silk-input', get_InputStyle());
    mutableTheme.i39('-outlined', get_OutlinedInputVariant());
    mutableTheme.i39('-filled', get_FilledInputVariant());
    mutableTheme.i39('-flushed', get_FlushedInputVariant());
    mutableTheme.i39('-unstyled', get_UnstyledInputVariant());
    mutableTheme.r34('silk-input-group', get_InputGroupStyle());
    mutableTheme.d39('silk-disabled', get_DisabledStyle());
    mutableTheme.d39('silk-smooth-color', get_SmoothColorStyle());
    mutableTheme.r34('silk-button', get_ButtonStyle());
    mutableTheme.r34('silk-canvas', get_CanvasStyle());
    mutableTheme.r34('silk-callout', get_CalloutStyle());
    mutableTheme.i39('-left-bordered', get_LeftBorderedCalloutVariant());
    mutableTheme.i39('-left-bordered-filled', get_LeftBorderedFilledCalloutVariant());
    mutableTheme.i39('-outlined', get_OutlinedCalloutVariant());
    mutableTheme.i39('-outlined-filled', get_OutlinedFilledCalloutVariant());
    mutableTheme.i39('-matching-link', get_MatchingLinkCalloutVariant());
    mutableTheme.r34('silk-checkbox', get_CheckboxStyle());
    mutableTheme.i39('-checkbox', get_CheckboxInputVariant());
    mutableTheme.r34('silk-checkbox-icon-container', get_CheckboxIconContainerStyle());
    mutableTheme.r34('silk-checkbox-icon', get_CheckboxIconStyle());
    mutableTheme.i39('-checked', get_CheckedCheckboxIconContainerVariant());
    mutableTheme.i39('-unchecked', get_UncheckedCheckboxIconContainerVariant());
    mutableTheme.r34('silk-overlay', get_OverlayStyle());
    mutableTheme.r34('silk-popup', get_PopupStyle());
    mutableTheme.r34('silk-simple-grid', get_SimpleGridStyle());
    mutableTheme.r34('silk-surface', get_SurfaceStyle());
    mutableTheme.r34('silk-horizontal-divider', get_HorizontalDividerStyle());
    mutableTheme.r34('silk-vertical-divider', get_VerticalDividerStyle());
    mutableTheme.r34('silk-switch', get_SwitchStyle());
    mutableTheme.r34('silk-switch-track', get_SwitchTrackStyle());
    mutableTheme.r34('silk-switch-thumb', get_SwitchThumbStyle());
    mutableTheme.i39('-switch', get_SwitchInputVariant());
    mutableTheme.r34('silk-tabs', get_TabsStyle());
    mutableTheme.r34('silk-tabs-tab-row', get_TabsTabRowStyle());
    mutableTheme.r34('silk-tabs-tab', get_TabsTabStyle());
    mutableTheme.r34('silk-tabs-panel', get_TabsPanelStyle());
    mutableTheme.r34('silk-tooltip-arrow', get_TooltipArrowStyle());
    mutableTheme.i39('-top-left', get_TopLeftTooltipArrowVariant());
    mutableTheme.i39('-top', get_TopTooltipArrowVariant());
    mutableTheme.i39('-top-right', get_TopRightTooltipArrowVariant());
    mutableTheme.i39('-left-top', get_LeftTopTooltipArrowVariant());
    mutableTheme.i39('-left', get_LeftTooltipArrowVariant());
    mutableTheme.i39('-left-bottom', get_LeftBottomTooltipArrowVariant());
    mutableTheme.i39('-right-top', get_RightTopTooltipArrowVariant());
    mutableTheme.i39('-right', get_RightTooltipArrowVariant());
    mutableTheme.i39('-right-bottom', get_RightBottomTooltipArrowVariant());
    mutableTheme.i39('-bottom-left', get_BottomLeftTooltipArrowVariant());
    mutableTheme.i39('-bottom', get_BottomTooltipArrowVariant());
    mutableTheme.i39('-bottom-right', get_BottomRightTooltipArrowVariant());
    mutableTheme.r34('silk-tooltip', get_TooltipStyle());
    mutableTheme.r34('silk-tooltip-text', get_TooltipTextContainerStyle());
    mutableTheme.j39('silk-checkbox-enabled', get_CheckboxEnabledAnim());
    mutableTheme.b39('silk-button-size_xs', Companion_getInstance_2().g3f_1);
    mutableTheme.b39('silk-button-size_sm', Companion_getInstance_2().h3f_1);
    mutableTheme.b39('silk-button-size_md', Companion_getInstance_2().i3f_1);
    mutableTheme.b39('silk-button-size_lg', Companion_getInstance_2().j3f_1);
    mutableTheme.b39('silk-checkbox-size_sm', Companion_getInstance_3().t3g_1);
    mutableTheme.b39('silk-checkbox-size_md', Companion_getInstance_3().u3g_1);
    mutableTheme.b39('silk-checkbox-size_lg', Companion_getInstance_3().v3g_1);
    mutableTheme.b39('silk-input-size_xs', Companion_getInstance_4().v3h_1);
    mutableTheme.b39('silk-input-size_sm', Companion_getInstance_4().w3h_1);
    mutableTheme.b39('silk-input-size_md', Companion_getInstance_4().x3h_1);
    mutableTheme.b39('silk-input-size_lg', Companion_getInstance_4().y3h_1);
    mutableTheme.b39('silk-switch-size_sm', Companion_getInstance_5().u3i_1);
    mutableTheme.b39('silk-switch-size_md', Companion_getInstance_5().v3i_1);
    mutableTheme.b39('silk-switch-size_lg', Companion_getInstance_5().w3i_1);
    mutableTheme.b39('silk-callout-type_caution', Companion_getInstance_1().f3e_1);
    mutableTheme.b39('silk-callout-type_important', Companion_getInstance_1().g3e_1);
    mutableTheme.b39('silk-callout-type_note', Companion_getInstance_1().h3e_1);
    mutableTheme.b39('silk-callout-type_question', Companion_getInstance_1().i3e_1);
    mutableTheme.b39('silk-callout-type_quote', Companion_getInstance_1().j3e_1);
    mutableTheme.b39('silk-callout-type_tip', Companion_getInstance_1().k3e_1);
    mutableTheme.b39('silk-callout-type_warning', Companion_getInstance_1().l3e_1);
  }
  function SilkColorsStyle$lambda($this$base) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    return silkColorsModifier($this$base.q37_1);
  }
  function initSilkWidgets$lambda($colorMode) {
    return function () {
      return silkColorsModifier($colorMode);
    };
  }
  var properties_initialized_InitSilkWidgets_kt_dse0va;
  function _init_properties_InitSilkWidgets_kt__62z9ag() {
    if (!properties_initialized_InitSilkWidgets_kt_dse0va) {
      properties_initialized_InitSilkWidgets_kt_dse0va = true;
      var tmp = Companion_instance_5;
      SilkColorsStyle = base_0(tmp, VOID, SilkColorsStyle$lambda);
    }
  }
  function get_DisabledStyle() {
    _init_properties_CommonStyles_kt__a7wisz();
    return DisabledStyle;
  }
  var DisabledStyle;
  function get_SmoothColorTransitionDurationVar() {
    _init_properties_CommonStyles_kt__a7wisz();
    var tmp = KProperty0;
    return SmoothColorTransitionDurationVar$delegate.k2s(null, getPropertyCallableRef('SmoothColorTransitionDurationVar', 0, tmp, _get_SmoothColorTransitionDurationVar_$ref_eamzbj(), null));
  }
  var SmoothColorTransitionDurationVar$delegate;
  function get_SmoothColorStyle() {
    _init_properties_CommonStyles_kt__a7wisz();
    return SmoothColorStyle;
  }
  var SmoothColorStyle;
  function DisabledStyle$lambda($composer, $changed) {
    _init_properties_CommonStyles_kt__a7wisz();
    var $composer_0 = $composer;
    $composer_0.p1g(812442038);
    var tmp0 = tabIndex(ariaDisabled(Companion_instance), -1);
    $composer_0.r1g();
    return tmp0;
  }
  function DisabledStyle$lambda_0($this$base) {
    _init_properties_CommonStyles_kt__a7wisz();
    return cursor(opacity(Companion_instance, 0.5), Companion_instance_1.f2q());
  }
  function _get_SmoothColorTransitionDurationVar_$ref_eamzbj() {
    return function () {
      return get_SmoothColorTransitionDurationVar();
    };
  }
  function SmoothColorStyle$lambda($this$base) {
    _init_properties_CommonStyles_kt__a7wisz();
    return transition_0(Companion_instance, [Companion_instance_2.t2s('background-color', get_SmoothColorTransitionDurationVar().e2s())]);
  }
  var properties_initialized_CommonStyles_kt_zd2b1t;
  function _init_properties_CommonStyles_kt__a7wisz() {
    if (!properties_initialized_CommonStyles_kt_zd2b1t) {
      properties_initialized_CommonStyles_kt_zd2b1t = true;
      var tmp = Companion_instance_5;
      var tmp_0 = DisabledStyle$lambda;
      DisabledStyle = base_1(tmp, tmp_0, DisabledStyle$lambda_0);
      var tmp0_defaultFallback = TransitionDurationVars_getInstance().i3d().e2s();
      SmoothColorTransitionDurationVar$delegate = StyleVariable_1(tmp0_defaultFallback, 'silk');
      var tmp_1 = Companion_instance_5;
      SmoothColorStyle = base_0(tmp_1, VOID, SmoothColorStyle$lambda);
    }
  }
  var com_varabyte_kobweb_silk_style_common_PlaceholderColor$stable;
  var com_varabyte_kobweb_silk_style_vars_animation_TransitionDurationVars$stable;
  function TransitionDurationVars$_get_VeryFast_$ref_cu0uvd() {
    return function (p0) {
      return p0.s3g();
    };
  }
  function TransitionDurationVars$_get_Fast_$ref_vg87kd() {
    return function (p0) {
      return p0.t3i();
    };
  }
  function TransitionDurationVars$_get_Normal_$ref_e4nae6() {
    return function (p0) {
      return p0.i3d();
    };
  }
  function TransitionDurationVars() {
    TransitionDurationVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_ms(0);
    tmp.a3d_1 = StyleVariable_1(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_ms(50);
    tmp_0.b3d_1 = StyleVariable_1(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_ms(100);
    tmp_1.c3d_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_ms(150);
    tmp_2.d3d_1 = StyleVariable_1(tmp0_defaultFallback_2, 'silk');
    var tmp_3 = this;
    var tmp0_defaultFallback_3 = get_ms(200);
    tmp_3.e3d_1 = StyleVariable_1(tmp0_defaultFallback_3, 'silk');
    var tmp_4 = this;
    var tmp0_defaultFallback_4 = get_ms(300);
    tmp_4.f3d_1 = StyleVariable_1(tmp0_defaultFallback_4, 'silk');
    var tmp_5 = this;
    var tmp0_defaultFallback_5 = get_ms(400);
    tmp_5.g3d_1 = StyleVariable_1(tmp0_defaultFallback_5, 'silk');
    var tmp_6 = this;
    var tmp0_defaultFallback_6 = get_ms(500);
    tmp_6.h3d_1 = StyleVariable_1(tmp0_defaultFallback_6, 'silk');
  }
  protoOf(TransitionDurationVars).s3g = function () {
    var tmp = KProperty1;
    return this.c3d_1.k2s(this, getPropertyCallableRef('VeryFast', 1, tmp, TransitionDurationVars$_get_VeryFast_$ref_cu0uvd(), null));
  };
  protoOf(TransitionDurationVars).t3i = function () {
    var tmp = KProperty1;
    return this.d3d_1.k2s(this, getPropertyCallableRef('Fast', 1, tmp, TransitionDurationVars$_get_Fast_$ref_vg87kd(), null));
  };
  protoOf(TransitionDurationVars).i3d = function () {
    var tmp = KProperty1;
    return this.e3d_1.k2s(this, getPropertyCallableRef('Normal', 1, tmp, TransitionDurationVars$_get_Normal_$ref_e4nae6(), null));
  };
  var TransitionDurationVars_instance;
  function TransitionDurationVars_getInstance() {
    if (TransitionDurationVars_instance == null)
      new TransitionDurationVars();
    return TransitionDurationVars_instance;
  }
  function get_BackgroundColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    var tmp = KProperty0;
    return BackgroundColorVar$delegate.k2s(null, getPropertyCallableRef('BackgroundColorVar', 0, tmp, _get_BackgroundColorVar_$ref_pnobug(), null));
  }
  var BackgroundColorVar$delegate;
  function get_ColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    var tmp = KProperty0;
    return ColorVar$delegate.k2s(null, getPropertyCallableRef('ColorVar', 0, tmp, _get_ColorVar_$ref_cclgba(), null));
  }
  var ColorVar$delegate;
  function get_BorderColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    var tmp = KProperty0;
    return BorderColorVar$delegate.k2s(null, getPropertyCallableRef('BorderColorVar', 0, tmp, _get_BorderColorVar_$ref_280m9i(), null));
  }
  var BorderColorVar$delegate;
  function get_FocusOutlineColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    var tmp = KProperty0;
    return FocusOutlineColorVar$delegate.k2s(null, getPropertyCallableRef('FocusOutlineColorVar', 0, tmp, _get_FocusOutlineColorVar_$ref_r81ezw(), null));
  }
  var FocusOutlineColorVar$delegate;
  function get_PlaceholderOpacityVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    var tmp = KProperty0;
    return PlaceholderOpacityVar$delegate.k2s(null, getPropertyCallableRef('PlaceholderOpacityVar', 0, tmp, _get_PlaceholderOpacityVar_$ref_6cr8i9(), null));
  }
  var PlaceholderOpacityVar$delegate;
  function get_PlaceholderColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    var tmp = KProperty0;
    return PlaceholderColorVar$delegate.k2s(null, getPropertyCallableRef('PlaceholderColorVar', 0, tmp, _get_PlaceholderColorVar_$ref_is1luf(), null));
  }
  var PlaceholderColorVar$delegate;
  function _get_BackgroundColorVar_$ref_pnobug() {
    return function () {
      return get_BackgroundColorVar();
    };
  }
  function _get_ColorVar_$ref_cclgba() {
    return function () {
      return get_ColorVar();
    };
  }
  function _get_BorderColorVar_$ref_280m9i() {
    return function () {
      return get_BorderColorVar();
    };
  }
  function _get_FocusOutlineColorVar_$ref_r81ezw() {
    return function () {
      return get_FocusOutlineColorVar();
    };
  }
  function _get_PlaceholderOpacityVar_$ref_6cr8i9() {
    return function () {
      return get_PlaceholderOpacityVar();
    };
  }
  function _get_PlaceholderColorVar_$ref_is1luf() {
    return function () {
      return get_PlaceholderColorVar();
    };
  }
  var properties_initialized_ColorVars_kt_3y5hvl;
  function _init_properties_ColorVars_kt__w8x7ib() {
    if (!properties_initialized_ColorVars_kt_3y5hvl) {
      properties_initialized_ColorVars_kt_3y5hvl = true;
      BackgroundColorVar$delegate = StyleVariable('silk');
      ColorVar$delegate = StyleVariable('silk');
      BorderColorVar$delegate = StyleVariable('silk');
      FocusOutlineColorVar$delegate = StyleVariable('silk');
      PlaceholderOpacityVar$delegate = StyleVariable_2(1.0, 'silk');
      PlaceholderColorVar$delegate = StyleVariable('silk');
    }
  }
  var com_varabyte_kobweb_silk_style_vars_size_BorderRadiusVars$stable;
  var com_varabyte_kobweb_silk_style_vars_size_FontSizeVars$stable;
  function FontSizeVars$_get_XS_$ref_g2g1y1() {
    return function (p0) {
      return p0.o3f();
    };
  }
  function FontSizeVars$_get_SM_$ref_l9l5g8() {
    return function (p0) {
      return p0.p3f();
    };
  }
  function FontSizeVars$_get_MD_$ref_sgunm3() {
    return function (p0) {
      return p0.q3f();
    };
  }
  function FontSizeVars$_get_LG_$ref_f7l8kn() {
    return function (p0) {
      return p0.r3f();
    };
  }
  function FontSizeVars() {
    FontSizeVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_cssRem(0.75);
    tmp.k3f_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_cssRem(0.875);
    tmp_0.l3f_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_cssRem(1);
    tmp_1.m3f_1 = StyleVariable_0(tmp0_defaultFallback_1, 'silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_cssRem(1.125);
    tmp_2.n3f_1 = StyleVariable_0(tmp0_defaultFallback_2, 'silk');
  }
  protoOf(FontSizeVars).o3f = function () {
    var tmp = KProperty1;
    return this.k3f_1.k2s(this, getPropertyCallableRef('XS', 1, tmp, FontSizeVars$_get_XS_$ref_g2g1y1(), null));
  };
  protoOf(FontSizeVars).p3f = function () {
    var tmp = KProperty1;
    return this.l3f_1.k2s(this, getPropertyCallableRef('SM', 1, tmp, FontSizeVars$_get_SM_$ref_l9l5g8(), null));
  };
  protoOf(FontSizeVars).q3f = function () {
    var tmp = KProperty1;
    return this.m3f_1.k2s(this, getPropertyCallableRef('MD', 1, tmp, FontSizeVars$_get_MD_$ref_sgunm3(), null));
  };
  protoOf(FontSizeVars).r3f = function () {
    var tmp = KProperty1;
    return this.n3f_1.k2s(this, getPropertyCallableRef('LG', 1, tmp, FontSizeVars$_get_LG_$ref_f7l8kn(), null));
  };
  var FontSizeVars_instance;
  function FontSizeVars_getInstance() {
    if (FontSizeVars_instance == null)
      new FontSizeVars();
    return FontSizeVars_instance;
  }
  function BorderRadiusVars$_get_XS_$ref_y88cg7() {
    return function (p0) {
      return p0.o3f();
    };
  }
  function BorderRadiusVars$_get_SM_$ref_vlqm0q() {
    return function (p0) {
      return p0.p3f();
    };
  }
  function BorderRadiusVars$_get_MD_$ref_ab2d3x() {
    return function (p0) {
      return p0.q3f();
    };
  }
  function BorderRadiusVars() {
    BorderRadiusVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_cssRem(0.125);
    tmp.z3h_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_cssRem(0.25);
    tmp_0.a3i_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_cssRem(0.375);
    tmp_1.b3i_1 = StyleVariable_0(tmp0_defaultFallback_1, 'silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_cssRem(0.5);
    tmp_2.c3i_1 = StyleVariable_0(tmp0_defaultFallback_2, 'silk');
  }
  protoOf(BorderRadiusVars).o3f = function () {
    var tmp = KProperty1;
    return this.z3h_1.k2s(this, getPropertyCallableRef('XS', 1, tmp, BorderRadiusVars$_get_XS_$ref_y88cg7(), null));
  };
  protoOf(BorderRadiusVars).p3f = function () {
    var tmp = KProperty1;
    return this.a3i_1.k2s(this, getPropertyCallableRef('SM', 1, tmp, BorderRadiusVars$_get_SM_$ref_vlqm0q(), null));
  };
  protoOf(BorderRadiusVars).q3f = function () {
    var tmp = KProperty1;
    return this.b3i_1.k2s(this, getPropertyCallableRef('MD', 1, tmp, BorderRadiusVars$_get_MD_$ref_ab2d3x(), null));
  };
  var BorderRadiusVars_instance;
  function BorderRadiusVars_getInstance() {
    if (BorderRadiusVars_instance == null)
      new BorderRadiusVars();
    return BorderRadiusVars_instance;
  }
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableButton$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableCallout$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableCheckbox$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableInput$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableSwitch$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableTab$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableTooltip$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups$stable;
  function get_background(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.r3b('background');
  }
  function get_color(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.r3b('color');
  }
  function get_border(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.r3b('border');
  }
  function get_focusOutline(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.r3b('focusOutline');
  }
  function get_placeholder_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.r3b('placeholder');
  }
  function SilkWidgetColorGroups$MutableButton$_get_default_$ref_x7wg9f() {
    return function (p0) {
      return p0.z3j();
    };
  }
  function SilkWidgetColorGroups$MutableButton$_set_default_$ref_7itfdt() {
    return function (p0, p1) {
      p0.k3m(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableButton$_get_default_$ref_x7wg9f_0() {
    return function (p0) {
      return p0.z3j();
    };
  }
  function SilkWidgetColorGroups$MutableButton$_set_default_$ref_7itfdt_0() {
    return function (p0, p1) {
      p0.k3m(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableButton$_get_hover_$ref_p9ijma() {
    return function (p0) {
      return p0.t2m();
    };
  }
  function SilkWidgetColorGroups$MutableButton$_set_hover_$ref_41bwsa() {
    return function (p0, p1) {
      p0.l3m(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableButton$_get_hover_$ref_p9ijma_0() {
    return function (p0) {
      return p0.t2m();
    };
  }
  function SilkWidgetColorGroups$MutableButton$_set_hover_$ref_41bwsa_0() {
    return function (p0, p1) {
      p0.l3m(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableButton$_get_focus_$ref_3khuwm() {
    return function (p0) {
      return p0.m3m();
    };
  }
  function SilkWidgetColorGroups$MutableButton$_set_focus_$ref_pqclhy() {
    return function (p0, p1) {
      p0.n3m(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableButton$_get_focus_$ref_3khuwm_0() {
    return function (p0) {
      return p0.m3m();
    };
  }
  function SilkWidgetColorGroups$MutableButton$_set_focus_$ref_pqclhy_0() {
    return function (p0, p1) {
      p0.n3m(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableButton$_get_pressed_$ref_v8weqc() {
    return function (p0) {
      return p0.a3k();
    };
  }
  function SilkWidgetColorGroups$MutableButton$_set_pressed_$ref_9htgww() {
    return function (p0, p1) {
      p0.o3m(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableButton$_get_pressed_$ref_v8weqc_0() {
    return function (p0) {
      return p0.a3k();
    };
  }
  function SilkWidgetColorGroups$MutableButton$_set_pressed_$ref_9htgww_0() {
    return function (p0, p1) {
      p0.o3m(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_caution_$ref_3zdyrj() {
    return function (p0) {
      return p0.r3d();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_caution_$ref_y9s53f() {
    return function (p0, p1) {
      p0.p3m(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_caution_$ref_3zdyrj_0() {
    return function (p0) {
      return p0.r3d();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_caution_$ref_y9s53f_0() {
    return function (p0, p1) {
      p0.p3m(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_important_$ref_cm0sdm() {
    return function (p0) {
      return p0.s3d();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_important_$ref_rtsavy() {
    return function (p0, p1) {
      p0.q3m(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_important_$ref_cm0sdm_0() {
    return function (p0) {
      return p0.s3d();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_important_$ref_rtsavy_0() {
    return function (p0, p1) {
      p0.q3m(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_note_$ref_uw9g78() {
    return function (p0) {
      return p0.t3d();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_note_$ref_i3d4qg() {
    return function (p0, p1) {
      p0.r3m(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_note_$ref_uw9g78_0() {
    return function (p0) {
      return p0.t3d();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_note_$ref_i3d4qg_0() {
    return function (p0, p1) {
      p0.r3m(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_question_$ref_83wkaw() {
    return function (p0) {
      return p0.u3d();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_question_$ref_7fu698() {
    return function (p0, p1) {
      p0.s3m(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_question_$ref_83wkaw_0() {
    return function (p0) {
      return p0.u3d();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_question_$ref_7fu698_0() {
    return function (p0, p1) {
      p0.s3m(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_quote_$ref_dge3v4() {
    return function (p0) {
      return p0.v3d();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_quote_$ref_fugcjg() {
    return function (p0, p1) {
      p0.t3m(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_quote_$ref_dge3v4_0() {
    return function (p0) {
      return p0.v3d();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_quote_$ref_fugcjg_0() {
    return function (p0, p1) {
      p0.t3m(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_tip_$ref_3elcdr() {
    return function (p0) {
      return p0.w3d();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_tip_$ref_m7mxz9() {
    return function (p0, p1) {
      p0.u3m(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_tip_$ref_3elcdr_0() {
    return function (p0) {
      return p0.w3d();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_tip_$ref_m7mxz9_0() {
    return function (p0, p1) {
      p0.u3m(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_warning_$ref_39pxao() {
    return function (p0) {
      return p0.x3d();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_warning_$ref_xk43mk() {
    return function (p0, p1) {
      p0.v3m(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_warning_$ref_39pxao_0() {
    return function (p0) {
      return p0.x3d();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_warning_$ref_xk43mk_0() {
    return function (p0, p1) {
      p0.v3m(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCheckbox$_get_background_$ref_zg40z7() {
    return function (p0) {
      return p0.b3k();
    };
  }
  function SilkWidgetColorGroups$MutableCheckbox$_set_background_$ref_a1wkyh() {
    return function (p0, p1) {
      p0.w3m(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCheckbox$_get_background_$ref_zg40z7_0() {
    return function (p0) {
      return p0.b3k();
    };
  }
  function SilkWidgetColorGroups$MutableCheckbox$_set_background_$ref_a1wkyh_0() {
    return function (p0, p1) {
      p0.w3m(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCheckbox$_get_hover_$ref_tjb1ib() {
    return function (p0) {
      return p0.t2m();
    };
  }
  function SilkWidgetColorGroups$MutableCheckbox$_set_hover_$ref_8gl3r() {
    return function (p0, p1) {
      p0.l3m(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCheckbox$_get_hover_$ref_tjb1ib_0() {
    return function (p0) {
      return p0.t2m();
    };
  }
  function SilkWidgetColorGroups$MutableCheckbox$_set_hover_$ref_8gl3r_0() {
    return function (p0, p1) {
      p0.l3m(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCheckbox$_get_color_$ref_omuyxw() {
    return function (p0) {
      return p0.c3k();
    };
  }
  function SilkWidgetColorGroups$MutableCheckbox$_set_color_$ref_h3emmo() {
    return function (p0, p1) {
      p0.x3m(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCheckbox$_get_color_$ref_omuyxw_0() {
    return function (p0) {
      return p0.c3k();
    };
  }
  function SilkWidgetColorGroups$MutableCheckbox$_set_color_$ref_h3emmo_0() {
    return function (p0, p1) {
      p0.x3m(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableInput$_get_hoveredBorder_$ref_n2nfhb() {
    return function (p0) {
      return p0.d3k();
    };
  }
  function SilkWidgetColorGroups$MutableInput$_set_hoveredBorder_$ref_q8nq7h() {
    return function (p0, p1) {
      p0.y3m(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableInput$_get_hoveredBorder_$ref_n2nfhb_0() {
    return function (p0) {
      return p0.d3k();
    };
  }
  function SilkWidgetColorGroups$MutableInput$_set_hoveredBorder_$ref_q8nq7h_0() {
    return function (p0, p1) {
      p0.y3m(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableInput$_get_invalidBorder_$ref_dqky9p() {
    return function (p0) {
      return p0.e3k();
    };
  }
  function SilkWidgetColorGroups$MutableInput$_set_invalidBorder_$ref_7z7y0n() {
    return function (p0, p1) {
      p0.z3m(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableInput$_get_invalidBorder_$ref_dqky9p_0() {
    return function (p0) {
      return p0.e3k();
    };
  }
  function SilkWidgetColorGroups$MutableInput$_set_invalidBorder_$ref_7z7y0n_0() {
    return function (p0, p1) {
      p0.z3m(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableInput$_get_filled_$ref_4wf80e() {
    return function (p0) {
      return p0.f3k();
    };
  }
  function SilkWidgetColorGroups$MutableInput$_set_filled_$ref_a5td4u() {
    return function (p0, p1) {
      p0.a3n(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableInput$_get_filled_$ref_4wf80e_0() {
    return function (p0) {
      return p0.f3k();
    };
  }
  function SilkWidgetColorGroups$MutableInput$_set_filled_$ref_a5td4u_0() {
    return function (p0, p1) {
      p0.a3n(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableInput$_get_filledHover_$ref_3cfpp0() {
    return function (p0) {
      return p0.g3k();
    };
  }
  function SilkWidgetColorGroups$MutableInput$_set_filledHover_$ref_dg5x7k() {
    return function (p0, p1) {
      p0.b3n(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableInput$_get_filledHover_$ref_3cfpp0_0() {
    return function (p0) {
      return p0.g3k();
    };
  }
  function SilkWidgetColorGroups$MutableInput$_set_filledHover_$ref_dg5x7k_0() {
    return function (p0, p1) {
      p0.b3n(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableInput$_get_filledFocus_$ref_p1geeo() {
    return function (p0) {
      return p0.h3k();
    };
  }
  function SilkWidgetColorGroups$MutableInput$_set_filledFocus_$ref_z56lx8() {
    return function (p0, p1) {
      p0.c3n(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableInput$_get_filledFocus_$ref_p1geeo_0() {
    return function (p0) {
      return p0.h3k();
    };
  }
  function SilkWidgetColorGroups$MutableInput$_set_filledFocus_$ref_z56lx8_0() {
    return function (p0, p1) {
      p0.c3n(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableSwitch$_get_backgroundOn_$ref_y8hjxf() {
    return function (p0) {
      return p0.d3n();
    };
  }
  function SilkWidgetColorGroups$MutableSwitch$_set_backgroundOn_$ref_7pi8yx() {
    return function (p0, p1) {
      p0.e3n(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableSwitch$_get_backgroundOn_$ref_y8hjxf_0() {
    return function (p0) {
      return p0.d3n();
    };
  }
  function SilkWidgetColorGroups$MutableSwitch$_set_backgroundOn_$ref_7pi8yx_0() {
    return function (p0, p1) {
      p0.e3n(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableSwitch$_get_backgroundOff_$ref_mxrk1d() {
    return function (p0) {
      return p0.f3n();
    };
  }
  function SilkWidgetColorGroups$MutableSwitch$_set_backgroundOff_$ref_17ynr1() {
    return function (p0, p1) {
      p0.g3n(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableSwitch$_get_backgroundOff_$ref_mxrk1d_0() {
    return function (p0) {
      return p0.f3n();
    };
  }
  function SilkWidgetColorGroups$MutableSwitch$_set_backgroundOff_$ref_17ynr1_0() {
    return function (p0, p1) {
      p0.g3n(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableSwitch$_get_thumb_$ref_9g7urq() {
    return function (p0) {
      return p0.i3k();
    };
  }
  function SilkWidgetColorGroups$MutableSwitch$_set_thumb_$ref_wa1qsu() {
    return function (p0, p1) {
      p0.h3n(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableSwitch$_get_thumb_$ref_9g7urq_0() {
    return function (p0) {
      return p0.i3k();
    };
  }
  function SilkWidgetColorGroups$MutableSwitch$_set_thumb_$ref_wa1qsu_0() {
    return function (p0, p1) {
      p0.h3n(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_color_$ref_6u4y5q() {
    return function (p0) {
      return p0.c3k();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_color_$ref_mgpi8u() {
    return function (p0, p1) {
      p0.x3m(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_color_$ref_6u4y5q_0() {
    return function (p0) {
      return p0.c3k();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_color_$ref_mgpi8u_0() {
    return function (p0, p1) {
      p0.x3m(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_background_$ref_xpiv3v() {
    return function (p0) {
      return p0.b3k();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_background_$ref_86ff2f() {
    return function (p0, p1) {
      p0.w3m(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_background_$ref_xpiv3v_0() {
    return function (p0) {
      return p0.b3k();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_background_$ref_86ff2f_0() {
    return function (p0, p1) {
      p0.w3m(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_selectedColor_$ref_py1w5z() {
    return function (p0) {
      return p0.i3n();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_selectedColor_$ref_488zvn() {
    return function (p0, p1) {
      p0.j3n(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_selectedColor_$ref_py1w5z_0() {
    return function (p0) {
      return p0.i3n();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_selectedColor_$ref_488zvn_0() {
    return function (p0, p1) {
      p0.j3n(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_selectedBackground_$ref_mhfin4() {
    return function (p0) {
      return p0.k3n();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_selectedBackground_$ref_qal2wc() {
    return function (p0, p1) {
      p0.l3n(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_selectedBackground_$ref_mhfin4_0() {
    return function (p0) {
      return p0.k3n();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_selectedBackground_$ref_qal2wc_0() {
    return function (p0, p1) {
      p0.l3n(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_selectedBorder_$ref_g7y9r2() {
    return function (p0) {
      return p0.m3n();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_selectedBorder_$ref_hpx1da() {
    return function (p0, p1) {
      p0.n3n(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_selectedBorder_$ref_g7y9r2_0() {
    return function (p0) {
      return p0.m3n();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_selectedBorder_$ref_hpx1da_0() {
    return function (p0, p1) {
      p0.n3n(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_hover_$ref_a0t3d7() {
    return function (p0) {
      return p0.t2m();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_hover_$ref_vpgi7d() {
    return function (p0, p1) {
      p0.l3m(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_hover_$ref_a0t3d7_0() {
    return function (p0) {
      return p0.t2m();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_hover_$ref_vpgi7d_0() {
    return function (p0, p1) {
      p0.l3m(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_pressed_$ref_ay98jz() {
    return function (p0) {
      return p0.a3k();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_pressed_$ref_jc4xrx() {
    return function (p0, p1) {
      p0.o3m(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_pressed_$ref_ay98jz_0() {
    return function (p0) {
      return p0.a3k();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_pressed_$ref_jc4xrx_0() {
    return function (p0, p1) {
      p0.o3m(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_disabled_$ref_hfh8yb() {
    return function (p0) {
      return p0.j3k();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_disabled_$ref_wz7zif() {
    return function (p0, p1) {
      p0.o3n(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_disabled_$ref_hfh8yb_0() {
    return function (p0) {
      return p0.j3k();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_disabled_$ref_wz7zif_0() {
    return function (p0, p1) {
      p0.o3n(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTooltip$_get_background_$ref_qweez1() {
    return function (p0) {
      return p0.b3k();
    };
  }
  function SilkWidgetColorGroups$MutableTooltip$_set_background_$ref_1dayxl() {
    return function (p0, p1) {
      p0.w3m(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTooltip$_get_background_$ref_qweez1_0() {
    return function (p0) {
      return p0.b3k();
    };
  }
  function SilkWidgetColorGroups$MutableTooltip$_set_background_$ref_1dayxl_0() {
    return function (p0, p1) {
      p0.w3m(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTooltip$_get_color_$ref_bp380s() {
    return function (p0) {
      return p0.c3k();
    };
  }
  function SilkWidgetColorGroups$MutableTooltip$_set_color_$ref_hlr8ds() {
    return function (p0, p1) {
      p0.x3m(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTooltip$_get_color_$ref_bp380s_0() {
    return function (p0) {
      return p0.c3k();
    };
  }
  function SilkWidgetColorGroups$MutableTooltip$_set_color_$ref_hlr8ds_0() {
    return function (p0, p1) {
      p0.x3m(p1);
      return Unit_instance;
    };
  }
  function MutableButton(palette) {
    ColorGroup.call(this, palette, 'button');
    this.m3k_1 = this.y3b();
    this.n3k_1 = this.y3b();
    this.o3k_1 = this.y3b();
    this.p3k_1 = this.y3b();
  }
  protoOf(MutableButton).k3m = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableButton$_get_default_$ref_x7wg9f_0();
    return this.m3k_1.v3b(this, getPropertyCallableRef('default', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableButton$_set_default_$ref_7itfdt_0()), _set____db54di);
  };
  protoOf(MutableButton).z3j = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableButton$_get_default_$ref_x7wg9f();
    return this.m3k_1.k2s(this, getPropertyCallableRef('default', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableButton$_set_default_$ref_7itfdt()));
  };
  protoOf(MutableButton).l3m = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableButton$_get_hover_$ref_p9ijma_0();
    return this.n3k_1.v3b(this, getPropertyCallableRef('hover', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableButton$_set_hover_$ref_41bwsa_0()), _set____db54di);
  };
  protoOf(MutableButton).t2m = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableButton$_get_hover_$ref_p9ijma();
    return this.n3k_1.k2s(this, getPropertyCallableRef('hover', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableButton$_set_hover_$ref_41bwsa()));
  };
  protoOf(MutableButton).n3m = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableButton$_get_focus_$ref_3khuwm_0();
    return this.o3k_1.v3b(this, getPropertyCallableRef('focus', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableButton$_set_focus_$ref_pqclhy_0()), _set____db54di);
  };
  protoOf(MutableButton).m3m = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableButton$_get_focus_$ref_3khuwm();
    return this.o3k_1.k2s(this, getPropertyCallableRef('focus', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableButton$_set_focus_$ref_pqclhy()));
  };
  protoOf(MutableButton).o3m = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableButton$_get_pressed_$ref_v8weqc_0();
    return this.p3k_1.v3b(this, getPropertyCallableRef('pressed', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableButton$_set_pressed_$ref_9htgww_0()), _set____db54di);
  };
  protoOf(MutableButton).a3k = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableButton$_get_pressed_$ref_v8weqc();
    return this.p3k_1.k2s(this, getPropertyCallableRef('pressed', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableButton$_set_pressed_$ref_9htgww()));
  };
  protoOf(MutableButton).q3k = function (default_0, hover, focus, pressed) {
    this.k3m(default_0);
    this.l3m(hover);
    this.n3m(focus);
    this.o3m(pressed);
  };
  function MutableCallout(palette) {
    ColorGroup.call(this, palette, 'callout');
    this.t3k_1 = this.y3b();
    this.u3k_1 = this.y3b();
    this.v3k_1 = this.y3b();
    this.w3k_1 = this.y3b();
    this.x3k_1 = this.y3b();
    this.y3k_1 = this.y3b();
    this.z3k_1 = this.y3b();
  }
  protoOf(MutableCallout).p3m = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_caution_$ref_3zdyrj_0();
    return this.t3k_1.v3b(this, getPropertyCallableRef('caution', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_caution_$ref_y9s53f_0()), _set____db54di);
  };
  protoOf(MutableCallout).r3d = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_caution_$ref_3zdyrj();
    return this.t3k_1.k2s(this, getPropertyCallableRef('caution', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_caution_$ref_y9s53f()));
  };
  protoOf(MutableCallout).q3m = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_important_$ref_cm0sdm_0();
    return this.u3k_1.v3b(this, getPropertyCallableRef('important', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_important_$ref_rtsavy_0()), _set____db54di);
  };
  protoOf(MutableCallout).s3d = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_important_$ref_cm0sdm();
    return this.u3k_1.k2s(this, getPropertyCallableRef('important', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_important_$ref_rtsavy()));
  };
  protoOf(MutableCallout).r3m = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_note_$ref_uw9g78_0();
    return this.v3k_1.v3b(this, getPropertyCallableRef('note', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_note_$ref_i3d4qg_0()), _set____db54di);
  };
  protoOf(MutableCallout).t3d = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_note_$ref_uw9g78();
    return this.v3k_1.k2s(this, getPropertyCallableRef('note', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_note_$ref_i3d4qg()));
  };
  protoOf(MutableCallout).s3m = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_question_$ref_83wkaw_0();
    return this.w3k_1.v3b(this, getPropertyCallableRef('question', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_question_$ref_7fu698_0()), _set____db54di);
  };
  protoOf(MutableCallout).u3d = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_question_$ref_83wkaw();
    return this.w3k_1.k2s(this, getPropertyCallableRef('question', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_question_$ref_7fu698()));
  };
  protoOf(MutableCallout).t3m = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_quote_$ref_dge3v4_0();
    return this.x3k_1.v3b(this, getPropertyCallableRef('quote', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_quote_$ref_fugcjg_0()), _set____db54di);
  };
  protoOf(MutableCallout).v3d = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_quote_$ref_dge3v4();
    return this.x3k_1.k2s(this, getPropertyCallableRef('quote', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_quote_$ref_fugcjg()));
  };
  protoOf(MutableCallout).u3m = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_tip_$ref_3elcdr_0();
    return this.y3k_1.v3b(this, getPropertyCallableRef('tip', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_tip_$ref_m7mxz9_0()), _set____db54di);
  };
  protoOf(MutableCallout).w3d = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_tip_$ref_3elcdr();
    return this.y3k_1.k2s(this, getPropertyCallableRef('tip', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_tip_$ref_m7mxz9()));
  };
  protoOf(MutableCallout).v3m = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_warning_$ref_39pxao_0();
    return this.z3k_1.v3b(this, getPropertyCallableRef('warning', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_warning_$ref_xk43mk_0()), _set____db54di);
  };
  protoOf(MutableCallout).x3d = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_warning_$ref_39pxao();
    return this.z3k_1.k2s(this, getPropertyCallableRef('warning', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_warning_$ref_xk43mk()));
  };
  protoOf(MutableCallout).a3l = function (caution, important, note, question, quote, tip, warning) {
    this.p3m(caution);
    this.q3m(important);
    this.r3m(note);
    this.s3m(question);
    this.t3m(quote);
    this.u3m(tip);
    this.v3m(warning);
  };
  function MutableCheckbox(palette) {
    ColorGroup.call(this, palette, 'checkbox');
    this.d3l_1 = this.y3b();
    this.e3l_1 = this.y3b();
    this.f3l_1 = this.y3b();
  }
  protoOf(MutableCheckbox).w3m = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCheckbox$_get_background_$ref_zg40z7_0();
    return this.d3l_1.v3b(this, getPropertyCallableRef('background', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCheckbox$_set_background_$ref_a1wkyh_0()), _set____db54di);
  };
  protoOf(MutableCheckbox).b3k = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCheckbox$_get_background_$ref_zg40z7();
    return this.d3l_1.k2s(this, getPropertyCallableRef('background', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCheckbox$_set_background_$ref_a1wkyh()));
  };
  protoOf(MutableCheckbox).l3m = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCheckbox$_get_hover_$ref_tjb1ib_0();
    return this.e3l_1.v3b(this, getPropertyCallableRef('hover', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCheckbox$_set_hover_$ref_8gl3r_0()), _set____db54di);
  };
  protoOf(MutableCheckbox).t2m = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCheckbox$_get_hover_$ref_tjb1ib();
    return this.e3l_1.k2s(this, getPropertyCallableRef('hover', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCheckbox$_set_hover_$ref_8gl3r()));
  };
  protoOf(MutableCheckbox).x3m = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCheckbox$_get_color_$ref_omuyxw_0();
    return this.f3l_1.v3b(this, getPropertyCallableRef('color', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCheckbox$_set_color_$ref_h3emmo_0()), _set____db54di);
  };
  protoOf(MutableCheckbox).c3k = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCheckbox$_get_color_$ref_omuyxw();
    return this.f3l_1.k2s(this, getPropertyCallableRef('color', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCheckbox$_set_color_$ref_h3emmo()));
  };
  protoOf(MutableCheckbox).g3l = function (background, hover, color) {
    this.w3m(background);
    this.l3m(hover);
    this.x3m(color);
  };
  function MutableInput(palette) {
    ColorGroup.call(this, palette, 'input');
    this.j3l_1 = this.y3b();
    this.k3l_1 = this.y3b();
    this.l3l_1 = this.y3b();
    this.m3l_1 = this.y3b();
    this.n3l_1 = this.y3b();
  }
  protoOf(MutableInput).y3m = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableInput$_get_hoveredBorder_$ref_n2nfhb_0();
    return this.j3l_1.v3b(this, getPropertyCallableRef('hoveredBorder', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableInput$_set_hoveredBorder_$ref_q8nq7h_0()), _set____db54di);
  };
  protoOf(MutableInput).d3k = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableInput$_get_hoveredBorder_$ref_n2nfhb();
    return this.j3l_1.k2s(this, getPropertyCallableRef('hoveredBorder', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableInput$_set_hoveredBorder_$ref_q8nq7h()));
  };
  protoOf(MutableInput).z3m = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableInput$_get_invalidBorder_$ref_dqky9p_0();
    return this.k3l_1.v3b(this, getPropertyCallableRef('invalidBorder', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableInput$_set_invalidBorder_$ref_7z7y0n_0()), _set____db54di);
  };
  protoOf(MutableInput).e3k = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableInput$_get_invalidBorder_$ref_dqky9p();
    return this.k3l_1.k2s(this, getPropertyCallableRef('invalidBorder', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableInput$_set_invalidBorder_$ref_7z7y0n()));
  };
  protoOf(MutableInput).a3n = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableInput$_get_filled_$ref_4wf80e_0();
    return this.l3l_1.v3b(this, getPropertyCallableRef('filled', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableInput$_set_filled_$ref_a5td4u_0()), _set____db54di);
  };
  protoOf(MutableInput).f3k = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableInput$_get_filled_$ref_4wf80e();
    return this.l3l_1.k2s(this, getPropertyCallableRef('filled', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableInput$_set_filled_$ref_a5td4u()));
  };
  protoOf(MutableInput).b3n = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableInput$_get_filledHover_$ref_3cfpp0_0();
    return this.m3l_1.v3b(this, getPropertyCallableRef('filledHover', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableInput$_set_filledHover_$ref_dg5x7k_0()), _set____db54di);
  };
  protoOf(MutableInput).g3k = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableInput$_get_filledHover_$ref_3cfpp0();
    return this.m3l_1.k2s(this, getPropertyCallableRef('filledHover', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableInput$_set_filledHover_$ref_dg5x7k()));
  };
  protoOf(MutableInput).c3n = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableInput$_get_filledFocus_$ref_p1geeo_0();
    return this.n3l_1.v3b(this, getPropertyCallableRef('filledFocus', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableInput$_set_filledFocus_$ref_z56lx8_0()), _set____db54di);
  };
  protoOf(MutableInput).h3k = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableInput$_get_filledFocus_$ref_p1geeo();
    return this.n3l_1.k2s(this, getPropertyCallableRef('filledFocus', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableInput$_set_filledFocus_$ref_z56lx8()));
  };
  protoOf(MutableInput).o3l = function (hoveredBorder, invalidBorder, filled, filledHover, filledFocus) {
    this.y3m(hoveredBorder);
    this.z3m(invalidBorder);
    this.a3n(filled);
    this.b3n(filledHover);
    this.c3n(filledFocus);
  };
  function MutableSwitch(palette) {
    ColorGroup.call(this, palette, 'switch');
    this.r3l_1 = this.y3b();
    this.s3l_1 = this.y3b();
    this.t3l_1 = this.y3b();
  }
  protoOf(MutableSwitch).e3n = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableSwitch$_get_backgroundOn_$ref_y8hjxf_0();
    return this.r3l_1.v3b(this, getPropertyCallableRef('backgroundOn', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableSwitch$_set_backgroundOn_$ref_7pi8yx_0()), _set____db54di);
  };
  protoOf(MutableSwitch).d3n = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableSwitch$_get_backgroundOn_$ref_y8hjxf();
    return this.r3l_1.k2s(this, getPropertyCallableRef('backgroundOn', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableSwitch$_set_backgroundOn_$ref_7pi8yx()));
  };
  protoOf(MutableSwitch).g3n = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableSwitch$_get_backgroundOff_$ref_mxrk1d_0();
    return this.s3l_1.v3b(this, getPropertyCallableRef('backgroundOff', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableSwitch$_set_backgroundOff_$ref_17ynr1_0()), _set____db54di);
  };
  protoOf(MutableSwitch).f3n = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableSwitch$_get_backgroundOff_$ref_mxrk1d();
    return this.s3l_1.k2s(this, getPropertyCallableRef('backgroundOff', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableSwitch$_set_backgroundOff_$ref_17ynr1()));
  };
  protoOf(MutableSwitch).h3n = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableSwitch$_get_thumb_$ref_9g7urq_0();
    return this.t3l_1.v3b(this, getPropertyCallableRef('thumb', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableSwitch$_set_thumb_$ref_wa1qsu_0()), _set____db54di);
  };
  protoOf(MutableSwitch).i3k = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableSwitch$_get_thumb_$ref_9g7urq();
    return this.t3l_1.k2s(this, getPropertyCallableRef('thumb', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableSwitch$_set_thumb_$ref_wa1qsu()));
  };
  protoOf(MutableSwitch).g3l = function (backgroundOn, backgroundOff, thumb) {
    this.e3n(backgroundOn);
    this.g3n(backgroundOff);
    this.h3n(thumb);
  };
  function MutableTab(palette) {
    ColorGroup.call(this, palette, 'tab');
    this.w3l_1 = this.y3b();
    this.x3l_1 = this.y3b();
    this.y3l_1 = this.y3b();
    this.z3l_1 = this.y3b();
    this.a3m_1 = this.y3b();
    this.b3m_1 = this.y3b();
    this.c3m_1 = this.y3b();
    this.d3m_1 = this.y3b();
  }
  protoOf(MutableTab).x3m = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_color_$ref_6u4y5q_0();
    return this.w3l_1.v3b(this, getPropertyCallableRef('color', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_color_$ref_mgpi8u_0()), _set____db54di);
  };
  protoOf(MutableTab).c3k = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_color_$ref_6u4y5q();
    return this.w3l_1.k2s(this, getPropertyCallableRef('color', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_color_$ref_mgpi8u()));
  };
  protoOf(MutableTab).w3m = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_background_$ref_xpiv3v_0();
    return this.x3l_1.v3b(this, getPropertyCallableRef('background', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_background_$ref_86ff2f_0()), _set____db54di);
  };
  protoOf(MutableTab).b3k = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_background_$ref_xpiv3v();
    return this.x3l_1.k2s(this, getPropertyCallableRef('background', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_background_$ref_86ff2f()));
  };
  protoOf(MutableTab).j3n = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_selectedColor_$ref_py1w5z_0();
    return this.y3l_1.v3b(this, getPropertyCallableRef('selectedColor', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_selectedColor_$ref_488zvn_0()), _set____db54di);
  };
  protoOf(MutableTab).i3n = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_selectedColor_$ref_py1w5z();
    return this.y3l_1.k2s(this, getPropertyCallableRef('selectedColor', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_selectedColor_$ref_488zvn()));
  };
  protoOf(MutableTab).l3n = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_selectedBackground_$ref_mhfin4_0();
    return this.z3l_1.v3b(this, getPropertyCallableRef('selectedBackground', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_selectedBackground_$ref_qal2wc_0()), _set____db54di);
  };
  protoOf(MutableTab).k3n = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_selectedBackground_$ref_mhfin4();
    return this.z3l_1.k2s(this, getPropertyCallableRef('selectedBackground', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_selectedBackground_$ref_qal2wc()));
  };
  protoOf(MutableTab).n3n = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_selectedBorder_$ref_g7y9r2_0();
    return this.a3m_1.v3b(this, getPropertyCallableRef('selectedBorder', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_selectedBorder_$ref_hpx1da_0()), _set____db54di);
  };
  protoOf(MutableTab).m3n = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_selectedBorder_$ref_g7y9r2();
    return this.a3m_1.k2s(this, getPropertyCallableRef('selectedBorder', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_selectedBorder_$ref_hpx1da()));
  };
  protoOf(MutableTab).l3m = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_hover_$ref_a0t3d7_0();
    return this.b3m_1.v3b(this, getPropertyCallableRef('hover', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_hover_$ref_vpgi7d_0()), _set____db54di);
  };
  protoOf(MutableTab).t2m = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_hover_$ref_a0t3d7();
    return this.b3m_1.k2s(this, getPropertyCallableRef('hover', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_hover_$ref_vpgi7d()));
  };
  protoOf(MutableTab).o3m = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_pressed_$ref_ay98jz_0();
    return this.c3m_1.v3b(this, getPropertyCallableRef('pressed', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_pressed_$ref_jc4xrx_0()), _set____db54di);
  };
  protoOf(MutableTab).a3k = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_pressed_$ref_ay98jz();
    return this.c3m_1.k2s(this, getPropertyCallableRef('pressed', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_pressed_$ref_jc4xrx()));
  };
  protoOf(MutableTab).o3n = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_disabled_$ref_hfh8yb_0();
    return this.d3m_1.v3b(this, getPropertyCallableRef('disabled', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_disabled_$ref_wz7zif_0()), _set____db54di);
  };
  protoOf(MutableTab).j3k = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_disabled_$ref_hfh8yb();
    return this.d3m_1.k2s(this, getPropertyCallableRef('disabled', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_disabled_$ref_wz7zif()));
  };
  protoOf(MutableTab).p3n = function (color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled) {
    this.x3m(color);
    this.w3m(background);
    this.j3n(selectedColor);
    this.l3n(selectedBackground);
    this.n3n(selectedBorder);
    this.l3m(hover);
    this.o3m(pressed);
    this.o3n(disabled);
  };
  protoOf(MutableTab).e3m = function (color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled, $super) {
    selectedBackground = selectedBackground === VOID ? background : selectedBackground;
    selectedBorder = selectedBorder === VOID ? selectedColor : selectedBorder;
    var tmp;
    if ($super === VOID) {
      this.p3n(color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled);
      tmp = Unit_instance;
    } else {
      tmp = $super.p3n.call(this, color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled);
    }
    return tmp;
  };
  function MutableTooltip(palette) {
    ColorGroup.call(this, palette, 'tooltip');
    this.h3m_1 = this.y3b();
    this.i3m_1 = this.y3b();
  }
  protoOf(MutableTooltip).w3m = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTooltip$_get_background_$ref_qweez1_0();
    return this.h3m_1.v3b(this, getPropertyCallableRef('background', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTooltip$_set_background_$ref_1dayxl_0()), _set____db54di);
  };
  protoOf(MutableTooltip).b3k = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTooltip$_get_background_$ref_qweez1();
    return this.h3m_1.k2s(this, getPropertyCallableRef('background', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTooltip$_set_background_$ref_1dayxl()));
  };
  protoOf(MutableTooltip).x3m = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTooltip$_get_color_$ref_bp380s_0();
    return this.i3m_1.v3b(this, getPropertyCallableRef('color', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTooltip$_set_color_$ref_hlr8ds_0()), _set____db54di);
  };
  protoOf(MutableTooltip).c3k = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTooltip$_get_color_$ref_bp380s();
    return this.i3m_1.k2s(this, getPropertyCallableRef('color', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTooltip$_set_color_$ref_hlr8ds()));
  };
  protoOf(MutableTooltip).j3m = function (background, color) {
    this.w3m(background);
    this.x3m(color);
  };
  function get_button(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_button_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_checkbox(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_checkbox_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_input(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_input_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_overlay(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.r3b('overlay');
  }
  function get_switch(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_switch_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_tab(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_tab_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_tooltip(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_tooltip_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_button_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableButton(_this__u8e3s4);
  }
  function get_checkbox_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableCheckbox(_this__u8e3s4);
  }
  function get_input_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableInput(_this__u8e3s4);
  }
  function get_switch_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableSwitch(_this__u8e3s4);
  }
  function get_tab_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableTab(_this__u8e3s4);
  }
  function get_tooltip_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableTooltip(_this__u8e3s4);
  }
  function set_background(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.z3b('background', value);
  }
  function get_background_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.r3b('background');
  }
  function set_color(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.z3b('color', value);
  }
  function get_color_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.r3b('color');
  }
  function set_border(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.z3b('border', value);
  }
  function set_focusOutline(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.z3b('focusOutline', value);
  }
  function set_overlay(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.z3b('overlay', value);
  }
  function set_placeholder(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.z3b('placeholder', value);
  }
  function get_callout(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableCallout(_this__u8e3s4);
  }
  function get_callout_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_callout(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  var properties_initialized_SilkWidgetColorGroups_kt_1mdo2;
  function _init_properties_SilkWidgetColorGroups_kt__mh2tbg() {
    if (!properties_initialized_SilkWidgetColorGroups_kt_1mdo2) {
      properties_initialized_SilkWidgetColorGroups_kt_1mdo2 = true;
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableButton$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableCallout$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableCheckbox$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableInput$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableSwitch$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableTab$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableTooltip$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups$stable = 0;
    }
  }
  //region block: init
  com_varabyte_kobweb_silk_components_icons_IconRenderStyle_Fill$stable = 0;
  com_varabyte_kobweb_silk_components_icons_IconRenderStyle_Stroke$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_KeepPopupOpenStrategy$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_ManualKeepPopupOpenStrategy$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_OpenClosePopupStrategy$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_ManualOpenClosePopupStrategy$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_TimedOpenClosePopupStrategy$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_PopoverState_Uninitialized$stable = 0;
  com_varabyte_kobweb_silk_components_overlay_PopoverState_FoundElements$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_PopoverState_Calculating$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_PopoverState_Shown$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_PopoverState_Hiding$stable = 8;
  com_varabyte_kobweb_silk_style_common_PlaceholderColor$stable = 8;
  com_varabyte_kobweb_silk_style_vars_animation_TransitionDurationVars$stable = 8;
  com_varabyte_kobweb_silk_style_vars_size_BorderRadiusVars$stable = 8;
  com_varabyte_kobweb_silk_style_vars_size_FontSizeVars$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Button_0;
  _.$_$.b = com_varabyte_kobweb_silk_components_forms_ButtonSize$stableprop_getter;
  _.$_$.c = SimpleGrid;
  _.$_$.d = Surface;
  _.$_$.e = numColumns;
  _.$_$.f = initSilkWidgets;
  _.$_$.g = get_SmoothColorStyle;
  _.$_$.h = get_BorderColorVar;
  _.$_$.i = get_ColorVar;
  _.$_$.j = get_button_0;
  _.$_$.k = Companion_getInstance_2;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-silk-widgets.js.map
