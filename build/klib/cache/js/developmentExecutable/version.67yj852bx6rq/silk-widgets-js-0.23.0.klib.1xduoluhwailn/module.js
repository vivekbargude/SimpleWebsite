(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kobweb-frontend-silk-foundation.js', './kobweb-frontend-compose-html-ext.js', './html-html-core.js', './kobweb-frontend-kobweb-compose.js', './compose-multiplatform-core-compose-runtime-runtime.js', './kotlinx-coroutines-core.js', './kobweb-frontend-browser-ext.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-silk-foundation.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./html-html-core.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kotlinx-coroutines-core.js'), require('./kobweb-frontend-browser-ext.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof globalThis['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof globalThis['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof globalThis['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'kobweb-frontend-silk-widgets'.");
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
    globalThis['kobweb-frontend-silk-widgets'] = factory(typeof globalThis['kobweb-frontend-silk-widgets'] === 'undefined' ? {} : globalThis['kobweb-frontend-silk-widgets'], globalThis['kotlin-kotlin-stdlib'], globalThis['kobweb-frontend-silk-foundation'], globalThis['kobweb-frontend-compose-html-ext'], globalThis['html-html-core'], globalThis['kobweb-frontend-kobweb-compose'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['kotlinx-coroutines-core'], globalThis['kobweb-frontend-browser-ext']);
  }
}(function (_, kotlin_kotlin, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_com_varabyte_kobweb_browser_ext) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.lc;
  var ComponentKind = kotlin_com_varabyte_kobweb_silk_foundation.$_$.t;
  var initMetadataForInterface = kotlin_kotlin.$_$.lb;
  var VOID = kotlin_kotlin.$_$.f;
  var StyleVariable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h;
  var StyleVariable_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.k5;
  var StyleVariable_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g;
  var KProperty1 = kotlin_kotlin.$_$.bd;
  var getPropertyCallableRef = kotlin_kotlin.$_$.fb;
  var initMetadataForObject = kotlin_kotlin.$_$.nb;
  var Unit_getInstance = kotlin_kotlin.$_$.m4;
  var Companion_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u3;
  var fillMaxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g1;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.m;
  var borderBottom = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p;
  var tabIndex = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p2;
  var get_ariaDisabled = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j;
  var get_hover = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o;
  var not = kotlin_com_varabyte_kobweb_silk_foundation.$_$.q;
  var get_active = kotlin_com_varabyte_kobweb_silk_foundation.$_$.i;
  var Companion_getInstance_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.y3;
  var cursor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c1;
  var Companion_getInstance_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l4;
  var listOf = kotlin_kotlin.$_$.y7;
  var transition = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v2;
  var backgroundColor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b1;
  var Companion_getInstance_3 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.n4;
  var userSelect = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x2;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.c4;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h2;
  var calc = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a;
  var margin = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w1;
  var flexGrow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h1;
  var overflow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e2;
  var Companion_getInstance_4 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i4;
  var CssStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.w;
  var Companion_getInstance_5 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k2;
  var base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c1;
  var CssStyle_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.x;
  var StyleVariable_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f;
  var toPalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.p1;
  var objectCreate = kotlin_kotlin.$_$.kc;
  var initMetadataForCompanion = kotlin_kotlin.$_$.jb;
  var setVariable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n2;
  var Base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.u;
  var initMetadataForClass = kotlin_kotlin.$_$.ib;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var Companion_getInstance_6 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j4;
  var textAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q2;
  var get_em = kotlin_org_jetbrains_compose_html_html_core.$_$.f4;
  var marginBlock = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s1;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_html_html_core.$_$.j;
  var display = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d1;
  var Companion_getInstance_8 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.q3;
  var alignItems = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i;
  var Companion_getInstance_9 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.z3;
  var fontWeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k1;
  var fontSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j1;
  var gap = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l1;
  var lineHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p1;
  var borderLeft = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q;
  var padding_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i2;
  var margin_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v1;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r;
  var Companion_getInstance_10 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.v3;
  var Colors_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o3;
  var boxShadow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t;
  var descendants = kotlin_com_varabyte_kobweb_silk_foundation.$_$.l;
  var marginBlock_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r1;
  var addVariant = kotlin_com_varabyte_kobweb_silk_foundation.$_$.z;
  var com_varabyte_kobweb_silk_style_CssStyle_Restricted_Base$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f1;
  var com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e1;
  var Base_init_$Init$ = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h2;
  var ButtonType_Button_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.a;
  var com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d1;
  var toModifier = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h1;
  var toModifier_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.i1;
  var thenIf = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g3;
  var toModifier_1 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g1;
  var ensureNotNull = kotlin_kotlin.$_$.lg;
  var Companion_getInstance_11 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.l2;
  var get_isBright = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g;
  var ColorMode_DARK_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f2;
  var ColorMode_LIGHT_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g2;
  var Companion_getInstance_12 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k1;
  var THROW_CCE = kotlin_kotlin.$_$.tf;
  var onClick = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a2;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h3;
  var rememberComposableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var Button = kotlin_org_jetbrains_compose_html_html_core.$_$.u5;
  var get_focusVisible = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n;
  var height = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n1;
  var minWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y1;
  var Companion_getInstance_13 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p4;
  var whiteSpace = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z2;
  var Companion_getInstance_14 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o4;
  var verticalAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y2;
  var border_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u;
  var transition_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u2;
  var outline = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d2;
  var boxShadow_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w;
  var type = kotlin_org_jetbrains_compose_html_html_core.$_$.m2;
  var com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g3;
  var registerRefScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i3;
  var Center_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k3;
  var CenterVertically_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q3;
  var com_varabyte_kobweb_compose_foundation_layout_Arrangement_Center$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d;
  var com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d3;
  var Row = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e1;
  var Companion_getInstance_15 = kotlin_org_jetbrains_compose_html_html_core.$_$.n;
  var position = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j2;
  var opacity = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c2;
  var size = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o2;
  var rowClasses = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f;
  var Keyframes = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e;
  var addVariantBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.y;
  var paddingInline = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g2;
  var get_placeholder = kotlin_com_varabyte_kobweb_silk_foundation.$_$.r;
  var Companion_getInstance_16 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.s3;
  var appearance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j;
  var get_ariaInvalid = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k;
  var get_disabled = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m;
  var margin_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u1;
  var RectF_init_$Create$ = kotlin_com_varabyte_kobweb_silk_foundation.$_$.i2;
  var clip = kotlin_com_varabyte_kobweb_silk_foundation.$_$.w1;
  var overflow_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f2;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a3;
  var minHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x1;
  var Companion_getInstance_17 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.w3;
  var boxSizing = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y;
  var translateX = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w2;
  var ariaHidden = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l;
  var Companion_getInstance_18 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.q4;
  var com_varabyte_kobweb_compose_dom_svg_ViewBox$stableprop_getter = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e3;
  var Path = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c3;
  var Circle = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b3;
  var SVGStrokeLineCap_Round_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m3;
  var Svg = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d3;
  var overflow_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g2;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.og;
  var SVGStrokeType_CurrentColor_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.n3;
  var SVGFillType_None_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l3;
  var SVGFillType_CurrentColor_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k3;
  var SVGStrokeType_None_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o3;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.i5;
  var borderTop = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s;
  var Breakpoint_ZERO_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e2;
  var getValue = kotlin_kotlin.$_$.k7;
  var setVariable_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m2;
  var Breakpoint_SM_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c2;
  var Breakpoint_MD_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b2;
  var Breakpoint_LG_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a2;
  var Breakpoint_XL_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d2;
  var Div = kotlin_org_jetbrains_compose_html_html_core.$_$.v5;
  var ResponsiveValues = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g;
  var get_fr = kotlin_org_jetbrains_compose_html_html_core.$_$.k4;
  var gridTemplateColumns = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m1;
  var get_entries = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.j6;
  var mapCapacity = kotlin_kotlin.$_$.z7;
  var coerceAtLeast = kotlin_kotlin.$_$.rc;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.t;
  var NumberValue = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e;
  var get_cssClass = kotlin_com_varabyte_kobweb_silk_foundation.$_$.s1;
  var classNames = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var Companion_getInstance_19 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j2;
  var get_useScope = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j1;
  var KMutableProperty0 = kotlin_kotlin.$_$.yc;
  var getLocalDelegateReference = kotlin_kotlin.$_$.db;
  var androidx_compose_runtime_ProvidedValue$stableprop_getter = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var CompositionLocalProvider = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var DisposableEffectResult = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var CoroutineImpl = kotlin_kotlin.$_$.ia;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var isInterface = kotlin_kotlin.$_$.wb;
  var asList = kotlin_kotlin.$_$.yg;
  var CssIdent = kotlin_com_varabyte_kobweb_browser_ext.$_$.a;
  var suffixedWith = kotlin_com_varabyte_kobweb_silk_foundation.$_$.u1;
  var isSuffixedWith = kotlin_com_varabyte_kobweb_silk_foundation.$_$.t1;
  var get_SilkTheme = kotlin_com_varabyte_kobweb_silk_foundation.$_$.x1;
  var withColorModeSuffixRemoved = kotlin_com_varabyte_kobweb_silk_foundation.$_$.v1;
  var initMetadataForLambda = kotlin_kotlin.$_$.mb;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l;
  var SuspendFunction1 = kotlin_kotlin.$_$.ja;
  var unaryMinus = kotlin_org_jetbrains_compose_html_html_core.$_$.p5;
  var margin_2 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t1;
  var top = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s2;
  var left = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o1;
  var right = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k2;
  var bottom = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v;
  var Companion_getInstance_20 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.x3;
  var colorScheme = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a1;
  var Blue_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m2;
  var Gray_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n2;
  var Red_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o2;
  var lightened = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h;
  var get_entries_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.q1;
  var registerStyleBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d;
  var base_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b1;
  var KProperty0 = kotlin_kotlin.$_$.ad;
  var ariaDisabled = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k;
  var base_1 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a1;
  var get_ms = kotlin_org_jetbrains_compose_html_html_core.$_$.d5;
  var ColorGroup = kotlin_com_varabyte_kobweb_silk_foundation.$_$.l1;
  var KMutableProperty1 = kotlin_kotlin.$_$.zc;
  var MutablePalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m1;
  var com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n1;
  var com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o1;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(TabRow, 'TabRow', VOID, VOID, [ComponentKind]);
  initMetadataForInterface(Tab, 'Tab', VOID, VOID, [ComponentKind]);
  initMetadataForInterface(Panel, 'Panel', VOID, VOID, [ComponentKind]);
  initMetadataForInterface(TabsKind, 'TabsKind', VOID, VOID, [ComponentKind]);
  initMetadataForObject(TabVars, 'TabVars');
  initMetadataForInterface(CalloutKind, 'CalloutKind', VOID, VOID, [ComponentKind]);
  initMetadataForObject(CalloutVars, 'CalloutVars');
  initMetadataForCompanion(Companion);
  initMetadataForClass(CalloutType, 'CalloutType', VOID, Base);
  initMetadataForObject(ComposableSingletons$CalloutKt, 'ComposableSingletons$CalloutKt');
  initMetadataForInterface(ButtonKind, 'ButtonKind', VOID, VOID, [ComponentKind]);
  initMetadataForObject(ButtonVars, 'ButtonVars');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(ButtonSize, 'ButtonSize', VOID, Base);
  initMetadataForInterface(Container, 'Container', VOID, VOID, [ComponentKind]);
  initMetadataForInterface(Icon, 'Icon', VOID, VOID, [ComponentKind]);
  initMetadataForInterface(CheckboxKind, 'CheckboxKind', VOID, VOID, [ComponentKind]);
  initMetadataForObject(CheckboxVars, 'CheckboxVars');
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(CheckboxSize, 'CheckboxSize', VOID, Base);
  initMetadataForInterface(InputKind, 'InputKind', VOID, VOID, [ComponentKind]);
  initMetadataForInterface(InputGroupKind, 'InputGroupKind', VOID, VOID, [ComponentKind]);
  initMetadataForObject(InputVars, 'InputVars');
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(InputSize, 'InputSize', VOID, Base);
  initMetadataForInterface(Track, 'Track', VOID, VOID, [ComponentKind]);
  initMetadataForInterface(Thumb, 'Thumb', VOID, VOID, [ComponentKind]);
  initMetadataForInterface(SwitchKind, 'SwitchKind', VOID, VOID, [ComponentKind]);
  initMetadataForObject(SwitchVars, 'SwitchVars');
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(SwitchSize, 'SwitchSize', VOID, Base);
  initMetadataForInterface(CanvasKind, 'CanvasKind', VOID, VOID, [ComponentKind]);
  initMetadataForObject(ComposableSingletons$ExclaimIconKt, 'ComposableSingletons$ExclaimIconKt');
  initMetadataForObject(ComposableSingletons$InfoIconKt, 'ComposableSingletons$InfoIconKt');
  initMetadataForObject(ComposableSingletons$LightbulbIconKt, 'ComposableSingletons$LightbulbIconKt');
  initMetadataForObject(ComposableSingletons$QuestionIconKt, 'ComposableSingletons$QuestionIconKt');
  initMetadataForObject(ComposableSingletons$QuoteIconKt, 'ComposableSingletons$QuoteIconKt');
  initMetadataForObject(ComposableSingletons$StopIconKt, 'ComposableSingletons$StopIconKt');
  initMetadataForObject(ComposableSingletons$WarningIconKt, 'ComposableSingletons$WarningIconKt');
  initMetadataForInterface(IconRenderStyle, 'IconRenderStyle');
  initMetadataForClass(Fill, 'Fill', Fill, VOID, [IconRenderStyle]);
  initMetadataForClass(Stroke, 'Stroke', Stroke, VOID, [IconRenderStyle]);
  initMetadataForInterface(HorizontalDividerKind, 'HorizontalDividerKind', VOID, VOID, [ComponentKind]);
  initMetadataForObject(DividerVars, 'DividerVars');
  initMetadataForInterface(VerticalDividerKind, 'VerticalDividerKind', VOID, VOID, [ComponentKind]);
  initMetadataForInterface(SimpleGridKind, 'SimpleGridKind', VOID, VOID, [ComponentKind]);
  initMetadataForInterface(SurfaceKind, 'SurfaceKind', VOID, VOID, [ComponentKind]);
  initMetadataForObject(SurfaceVars, 'SurfaceVars');
  initMetadataForClass(_no_name_provided__qut3iv, VOID, VOID, VOID, [DisposableEffectResult]);
  initMetadataForLambda(Surface$lambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForInterface(OverlayKind, 'OverlayKind', VOID, VOID, [ComponentKind]);
  initMetadataForObject(OverlayVars, 'OverlayVars');
  initMetadataForInterface(PopupKind, 'PopupKind', VOID, VOID, [ComponentKind]);
  initMetadataForObject(PopupVars, 'PopupVars');
  initMetadataForInterface(Arrow, 'Arrow', VOID, VOID, [ComponentKind]);
  initMetadataForInterface(TextContainer, 'TextContainer', VOID, VOID, [ComponentKind]);
  initMetadataForInterface(TooltipKind, 'TooltipKind', VOID, VOID, [ComponentKind]);
  initMetadataForObject(TooltipVars, 'TooltipVars');
  initMetadataForObject(TransitionDurationVars, 'TransitionDurationVars');
  initMetadataForObject(FontSizeVars, 'FontSizeVars');
  initMetadataForObject(BorderRadiusVars, 'BorderRadiusVars');
  initMetadataForInterface(Button_1, 'Button');
  initMetadataForClass(MutableButton, 'MutableButton', VOID, ColorGroup, [ColorGroup, Button_1]);
  initMetadataForInterface(Callout, 'Callout');
  initMetadataForClass(MutableCallout, 'MutableCallout', VOID, ColorGroup, [ColorGroup, Callout]);
  initMetadataForInterface(Checkbox, 'Checkbox');
  initMetadataForClass(MutableCheckbox, 'MutableCheckbox', VOID, ColorGroup, [ColorGroup, Checkbox]);
  initMetadataForInterface(Input, 'Input');
  initMetadataForClass(MutableInput, 'MutableInput', VOID, ColorGroup, [ColorGroup, Input]);
  initMetadataForInterface(Switch, 'Switch');
  initMetadataForClass(MutableSwitch, 'MutableSwitch', VOID, ColorGroup, [ColorGroup, Switch]);
  initMetadataForInterface(Tab_0, 'Tab');
  initMetadataForClass(MutableTab, 'MutableTab', VOID, ColorGroup, [ColorGroup, Tab_0]);
  initMetadataForInterface(Tooltip, 'Tooltip');
  initMetadataForClass(MutableTooltip, 'MutableTooltip', VOID, ColorGroup, [ColorGroup, Tooltip]);
  initMetadataForObject(SilkWidgetColorGroups, 'SilkWidgetColorGroups');
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
  function TabRow() {
  }
  function Tab() {
  }
  function Panel() {
  }
  function TabsKind() {
  }
  function TabVars$_get_Color_$ref_chk8zq() {
    return function (p0) {
      return p0.get_Color_i88tui_k$();
    };
  }
  function TabVars$_get_BorderColor_$ref_tz611i() {
    return function (p0) {
      return p0.get_BorderColor_hljtgy_k$();
    };
  }
  function TabVars$_get_BackgroundColor_$ref_b468g8() {
    return function (p0) {
      return p0.get_BackgroundColor_qhx06s_k$();
    };
  }
  function TabVars$_get_DisabledBackgroundColor_$ref_r6n4kk() {
    return function (p0) {
      return p0.get_DisabledBackgroundColor_cqusog_k$();
    };
  }
  function TabVars$_get_HoverBackgroundColor_$ref_y2gnb8() {
    return function (p0) {
      return p0.get_HoverBackgroundColor_uy6r32_k$();
    };
  }
  function TabVars$_get_PressedBackgroundColor_$ref_yty52() {
    return function (p0) {
      return p0.get_PressedBackgroundColor_ow7ud8_k$();
    };
  }
  function TabVars$_get_BorderThickness_$ref_94q7qj() {
    return function (p0) {
      return p0.get_BorderThickness_psvqzl_k$();
    };
  }
  function TabVars$_get_ColorTransitionDuration_$ref_2jc6z3() {
    return function (p0) {
      return p0.get_ColorTransitionDuration_d6ufct_k$();
    };
  }
  function TabVars() {
    TabVars_instance = this;
    this.Color$delegate_1 = StyleVariable('silk');
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().value$default_36t2hw_k$();
    tmp.BorderColor$delegate_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.BackgroundColor$delegate_1 = StyleVariable('silk');
    this.DisabledBackgroundColor$delegate_1 = StyleVariable('silk');
    this.HoverBackgroundColor$delegate_1 = StyleVariable('silk');
    this.PressedBackgroundColor$delegate_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_px(2);
    tmp_0.BorderThickness$delegate_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().get_Normal_22avww_k$().value$default_36t2hw_k$();
    tmp_1.ColorTransitionDuration$delegate_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
  }
  protoOf(TabVars).get_Color_i88tui_k$ = function () {
    var tmp = KProperty1;
    return this.Color$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('Color', 1, tmp, TabVars$_get_Color_$ref_chk8zq(), null));
  };
  protoOf(TabVars).get_BorderColor_hljtgy_k$ = function () {
    var tmp = KProperty1;
    return this.BorderColor$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('BorderColor', 1, tmp, TabVars$_get_BorderColor_$ref_tz611i(), null));
  };
  protoOf(TabVars).get_BackgroundColor_qhx06s_k$ = function () {
    var tmp = KProperty1;
    return this.BackgroundColor$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('BackgroundColor', 1, tmp, TabVars$_get_BackgroundColor_$ref_b468g8(), null));
  };
  protoOf(TabVars).get_DisabledBackgroundColor_cqusog_k$ = function () {
    var tmp = KProperty1;
    return this.DisabledBackgroundColor$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('DisabledBackgroundColor', 1, tmp, TabVars$_get_DisabledBackgroundColor_$ref_r6n4kk(), null));
  };
  protoOf(TabVars).get_HoverBackgroundColor_uy6r32_k$ = function () {
    var tmp = KProperty1;
    return this.HoverBackgroundColor$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('HoverBackgroundColor', 1, tmp, TabVars$_get_HoverBackgroundColor_$ref_y2gnb8(), null));
  };
  protoOf(TabVars).get_PressedBackgroundColor_ow7ud8_k$ = function () {
    var tmp = KProperty1;
    return this.PressedBackgroundColor$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('PressedBackgroundColor', 1, tmp, TabVars$_get_PressedBackgroundColor_$ref_yty52(), null));
  };
  protoOf(TabVars).get_BorderThickness_psvqzl_k$ = function () {
    var tmp = KProperty1;
    return this.BorderThickness$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('BorderThickness', 1, tmp, TabVars$_get_BorderThickness_$ref_94q7qj(), null));
  };
  protoOf(TabVars).get_ColorTransitionDuration_d6ufct_k$ = function () {
    var tmp = KProperty1;
    return this.ColorTransitionDuration$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('ColorTransitionDuration', 1, tmp, TabVars$_get_ColorTransitionDuration_$ref_2jc6z3(), null));
  };
  var TabVars_instance;
  function TabVars_getInstance() {
    if (TabVars_instance == null)
      new TabVars();
    return TabVars_instance;
  }
  function TabsStyle$lambda($this$CssStyle) {
    _init_properties_Tabs_kt__myintq();
    return Unit_getInstance();
  }
  function TabsTabRowStyle$lambda($this$base) {
    _init_properties_Tabs_kt__myintq();
    var tmp = fillMaxWidth(Companion_getInstance());
    var tmp_0 = TabVars_getInstance().get_BorderThickness_psvqzl_k$().value$default_36t2hw_k$();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp, tmp_0, 'solid', TabVars_getInstance().get_BorderColor_hljtgy_k$().value$default_36t2hw_k$());
  }
  function TabsTabStyle$lambda($composer, $changed) {
    _init_properties_Tabs_kt__myintq();
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(2044107546);
    var tmp0 = tabIndex(Companion_getInstance(), 0);
    $composer_0.endReplaceGroup_ek144q_k$();
    return tmp0;
  }
  function TabsTabStyle$lambda_0($this$CssStyle) {
    _init_properties_Tabs_kt__myintq();
    $this$CssStyle.base_y8uu8g_k$(TabsTabStyle$lambda$lambda);
    var tmp = get_ariaDisabled($this$CssStyle);
    $this$CssStyle.invoke_9o9x0o_k$(tmp, TabsTabStyle$lambda$lambda_0);
    var tmp_0 = get_hover($this$CssStyle).plus_99tjwk_k$(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    $this$CssStyle.invoke_9o9x0o_k$(tmp_0, TabsTabStyle$lambda$lambda_1);
    var tmp_1 = get_active($this$CssStyle).plus_99tjwk_k$(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    $this$CssStyle.invoke_9o9x0o_k$(tmp_1, TabsTabStyle$lambda$lambda_2);
    return Unit_getInstance();
  }
  function TabsTabStyle$lambda$lambda() {
    _init_properties_Tabs_kt__myintq();
    var tmp = padding(userSelect(color(backgroundColor(transition(cursor(Companion_getInstance(), Companion_getInstance_1().get_Pointer_m64vg4_k$()), Companion_getInstance_2().group$default_78h45q_k$(listOf(['background-color', 'color', 'border-color']), TabVars_getInstance().get_ColorTransitionDuration_d6ufct_k$().value$default_36t2hw_k$())), TabVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_36t2hw_k$()), TabVars_getInstance().get_Color_i88tui_k$().value$default_36t2hw_k$()), Companion_getInstance_3().get_None_wo6tgh_k$()), get_cssRem(0.5));
    var tmp_0 = margin(tmp, VOID, VOID, calc(TabsTabStyle$lambda$lambda$lambda));
    var tmp_1 = TabVars_getInstance().get_BorderThickness_psvqzl_k$().value$default_36t2hw_k$();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp_0, tmp_1, 'solid', TabVars_getInstance().get_BorderColor_hljtgy_k$().value$default_36t2hw_k$());
  }
  function TabsTabStyle$lambda$lambda$lambda($this$calc) {
    _init_properties_Tabs_kt__myintq();
    return $this$calc.unaryMinus_d2gf0y_k$(TabVars_getInstance().get_BorderThickness_psvqzl_k$().value$default_36t2hw_k$());
  }
  function TabsTabStyle$lambda$lambda_0() {
    _init_properties_Tabs_kt__myintq();
    return cursor(backgroundColor(Companion_getInstance(), TabVars_getInstance().get_DisabledBackgroundColor_cqusog_k$().value$default_36t2hw_k$()), Companion_getInstance_1().get_NotAllowed_mobp4y_k$());
  }
  function TabsTabStyle$lambda$lambda_1() {
    _init_properties_Tabs_kt__myintq();
    return backgroundColor(Companion_getInstance(), TabVars_getInstance().get_HoverBackgroundColor_uy6r32_k$().value$default_36t2hw_k$());
  }
  function TabsTabStyle$lambda$lambda_2() {
    _init_properties_Tabs_kt__myintq();
    return backgroundColor(Companion_getInstance(), TabVars_getInstance().get_PressedBackgroundColor_ow7ud8_k$().value$default_36t2hw_k$());
  }
  function TabsPanelStyle$lambda($this$base) {
    _init_properties_Tabs_kt__myintq();
    var tmp = flexGrow(fillMaxWidth(padding(Companion_getInstance(), get_cssRem(1))), 1);
    return overflow(tmp, TabsPanelStyle$lambda$lambda);
  }
  function TabsPanelStyle$lambda$lambda($this$overflow) {
    _init_properties_Tabs_kt__myintq();
    $this$overflow.y_9zjijb_k$(Companion_getInstance_4().get_Auto_wnyn88_k$());
    return Unit_getInstance();
  }
  var properties_initialized_Tabs_kt_moodfk;
  function _init_properties_Tabs_kt__myintq() {
    if (!properties_initialized_Tabs_kt_moodfk) {
      properties_initialized_Tabs_kt_moodfk = true;
      TabsStyle = CssStyle(VOID, TabsStyle$lambda);
      var tmp = Companion_getInstance_5();
      TabsTabRowStyle = base(tmp, VOID, TabsTabRowStyle$lambda);
      var tmp_0 = TabsTabStyle$lambda;
      TabsTabStyle = CssStyle_0(tmp_0, TabsTabStyle$lambda_0);
      var tmp_1 = Companion_getInstance_5();
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
  function CalloutKind() {
  }
  function CalloutVars$_get_Color_$ref_c79x0r() {
    return function (p0) {
      return p0.get_Color_i88tui_k$();
    };
  }
  function CalloutVars$_get_BackgroundColor_$ref_6qzwbh() {
    return function (p0) {
      return p0.get_BackgroundColor_qhx06s_k$();
    };
  }
  function CalloutVars$_get_TitleFontSize_$ref_d27e7k() {
    return function (p0) {
      return p0.get_TitleFontSize_xxaxnl_k$();
    };
  }
  function CalloutVars$_get_TitleGap_$ref_ygrq2s() {
    return function (p0) {
      return p0.get_TitleGap_9dart3_k$();
    };
  }
  function CalloutVars$_get_TitleLineHeight_$ref_1mexdx() {
    return function (p0) {
      return p0.get_TitleLineHeight_6ln5be_k$();
    };
  }
  function CalloutVars() {
    CalloutVars_instance = this;
    this.Color$delegate_1 = StyleVariable('silk');
    this.BackgroundColor$delegate_1 = StyleVariable('silk');
    this.TitleFontSize$delegate_1 = StyleVariable('silk');
    var tmp = this;
    var tmp0_defaultFallback = get_cssRem(0.5);
    tmp.TitleGap$delegate_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.TitleLineHeight$delegate_1 = StyleVariable_2(1, 'silk');
  }
  protoOf(CalloutVars).get_Color_i88tui_k$ = function () {
    var tmp = KProperty1;
    return this.Color$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('Color', 1, tmp, CalloutVars$_get_Color_$ref_c79x0r(), null));
  };
  protoOf(CalloutVars).get_BackgroundColor_qhx06s_k$ = function () {
    var tmp = KProperty1;
    return this.BackgroundColor$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('BackgroundColor', 1, tmp, CalloutVars$_get_BackgroundColor_$ref_6qzwbh(), null));
  };
  protoOf(CalloutVars).get_TitleFontSize_xxaxnl_k$ = function () {
    var tmp = KProperty1;
    return this.TitleFontSize$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('TitleFontSize', 1, tmp, CalloutVars$_get_TitleFontSize_$ref_d27e7k(), null));
  };
  protoOf(CalloutVars).get_TitleGap_9dart3_k$ = function () {
    var tmp = KProperty1;
    return this.TitleGap$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('TitleGap', 1, tmp, CalloutVars$_get_TitleGap_$ref_ygrq2s(), null));
  };
  protoOf(CalloutVars).get_TitleLineHeight_6ln5be_k$ = function () {
    var tmp = KProperty1;
    return this.TitleLineHeight$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('TitleLineHeight', 1, tmp, CalloutVars$_get_TitleLineHeight_$ref_1mexdx(), null));
  };
  var CalloutVars_instance;
  function CalloutVars_getInstance() {
    if (CalloutVars_instance == null)
      new CalloutVars();
    return CalloutVars_instance;
  }
  function removeEdgeParagraphSpacing(_this__u8e3s4) {
    _init_properties_Callout_kt__ksu682();
    _this__u8e3s4.cssRule_fe6cwq_k$(' > .callout-body > p:first-child', removeEdgeParagraphSpacing$lambda);
    _this__u8e3s4.cssRule_fe6cwq_k$(' > .callout-body > p:last-child', removeEdgeParagraphSpacing$lambda_0);
  }
  function CalloutType$Companion$CAUTION$lambda(it) {
    return get_callout_0(toPalette(it)).get_caution_ahahdu_k$();
  }
  function CalloutType$Companion$IMPORTANT$lambda(it) {
    return get_callout_0(toPalette(it)).get_important_52de2h_k$();
  }
  function CalloutType$Companion$NOTE$lambda(it) {
    return get_callout_0(toPalette(it)).get_note_wor96j_k$();
  }
  function CalloutType$Companion$QUESTION$lambda(it) {
    return get_callout_0(toPalette(it)).get_question_jy1o6n_k$();
  }
  function CalloutType$Companion$QUOTE$lambda(it) {
    return get_callout_0(toPalette(it)).get_quote_ixn9eb_k$();
  }
  function CalloutType$Companion$TIP$lambda(it) {
    return get_callout_0(toPalette(it)).get_tip_18ivgu_k$();
  }
  function CalloutType$Companion$WARNING$lambda(it) {
    return get_callout_0(toPalette(it)).get_warning_jv0q7n_k$();
  }
  function CalloutType_init_$Init$(icon, label, color, $this) {
    CalloutType_init_$Init$_0(icon, label, CalloutType$_init_$lambda_4upqpt_0(color), $this);
    return $this;
  }
  function CalloutType_init_$Create$(icon, label, color) {
    return CalloutType_init_$Init$(icon, label, color, objectCreate(protoOf(CalloutType)));
  }
  function CalloutType_init_$Init$_0(icon, label, provideColor, $this) {
    var tmp = CalloutType$_init_$lambda_4upqpt_1(provideColor);
    CalloutType.call($this, icon, label, tmp, CalloutType$_init_$lambda_4upqpt_2(provideColor));
    return $this;
  }
  function CalloutType_init_$Create$_0(icon, label, provideColor) {
    return CalloutType_init_$Init$_0(icon, label, provideColor, objectCreate(protoOf(CalloutType)));
  }
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    var tmp_0 = ComposableSingletons$CalloutKt_getInstance().lambda$1105541261__1;
    tmp.CAUTION_1 = CalloutType_init_$Create$_0(tmp_0, 'Caution', CalloutType$Companion$CAUTION$lambda);
    var tmp_1 = this;
    var tmp_2 = ComposableSingletons$CalloutKt_getInstance().lambda$_700737724_d4ps9n_1;
    tmp_1.IMPORTANT_1 = CalloutType_init_$Create$_0(tmp_2, 'Important', CalloutType$Companion$IMPORTANT$lambda);
    var tmp_3 = this;
    var tmp_4 = ComposableSingletons$CalloutKt_getInstance().lambda$_1510536654_t7yu8g_1;
    tmp_3.NOTE_1 = CalloutType_init_$Create$_0(tmp_4, 'Note', CalloutType$Companion$NOTE$lambda);
    var tmp_5 = this;
    var tmp_6 = ComposableSingletons$CalloutKt_getInstance().lambda$_2086387290_wtu3dp_1;
    tmp_5.QUESTION_1 = CalloutType_init_$Create$_0(tmp_6, 'Question', CalloutType$Companion$QUESTION$lambda);
    var tmp_7 = this;
    var tmp_8 = ComposableSingletons$CalloutKt_getInstance().lambda$1974337438__1;
    tmp_7.QUOTE_1 = CalloutType_init_$Create$_0(tmp_8, 'Quote', CalloutType$Companion$QUOTE$lambda);
    var tmp_9 = this;
    var tmp_10 = ComposableSingletons$CalloutKt_getInstance().lambda$_613517763_hlwoe9__1;
    tmp_9.TIP_1 = CalloutType_init_$Create$_0(tmp_10, 'Tip', CalloutType$Companion$TIP$lambda);
    var tmp_11 = this;
    var tmp_12 = ComposableSingletons$CalloutKt_getInstance().lambda$2087814270__1;
    tmp_11.WARNING_1 = CalloutType_init_$Create$_0(tmp_12, 'Warning', CalloutType$Companion$WARNING$lambda);
  }
  protoOf(Companion).get_CAUTION_mcrcde_k$ = function () {
    return this.CAUTION_1;
  };
  protoOf(Companion).get_IMPORTANT_jvo9lz_k$ = function () {
    return this.IMPORTANT_1;
  };
  protoOf(Companion).get_NOTE_wo652z_k$ = function () {
    return this.NOTE_1;
  };
  protoOf(Companion).get_QUESTION_ww02wf_k$ = function () {
    return this.QUESTION_1;
  };
  protoOf(Companion).get_QUOTE_ifgqb7_k$ = function () {
    return this.QUOTE_1;
  };
  protoOf(Companion).get_TIP_18jjzi_k$ = function () {
    return this.TIP_1;
  };
  protoOf(Companion).get_WARNING_vqhl77_k$ = function () {
    return this.WARNING_1;
  };
  var Companion_instance;
  function Companion_getInstance_21() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function CalloutType$_init_$lambda_4upqpt($provideColor, $provideBackgroundColor) {
    return function (_this__u8e3s4) {
      return setVariable(setVariable(Companion_getInstance(), CalloutVars_getInstance().get_Color_i88tui_k$(), $provideColor(_this__u8e3s4.get_colorMode_trbg8z_k$())), CalloutVars_getInstance().get_BackgroundColor_qhx06s_k$(), $provideBackgroundColor(_this__u8e3s4.get_colorMode_trbg8z_k$()));
    };
  }
  function CalloutType$_init_$lambda_4upqpt_0($color) {
    return function (it) {
      return $color;
    };
  }
  function CalloutType$_init_$lambda_4upqpt_1($provideColor) {
    return function (it) {
      return $provideColor(it);
    };
  }
  function CalloutType$_init_$lambda_4upqpt_2($provideColor) {
    return function (it) {
      return $provideColor(it).toRgb_1tsrpu_k$().copyf$default_6pu18v_k$(VOID, VOID, VOID, it.get_isLight_zemp0j_k$() ? 0.15 : 0.2);
    };
  }
  function CalloutType(icon, label, provideColor, provideBackgroundColor) {
    Companion_getInstance_21();
    Base.call(this, CalloutType$_init_$lambda_4upqpt(provideColor, provideBackgroundColor));
    this.icon_1 = icon;
    this.label_1 = label;
  }
  protoOf(CalloutType).get_icon_wont8i_k$ = function () {
    return this.icon_1;
  };
  protoOf(CalloutType).get_label_iuj8p7_k$ = function () {
    return this.label_1;
  };
  function ComposableLambda$invoke$ref(p0) {
    return function (_this__u8e3s4, p0_0) {
      return p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
    };
  }
  function ComposableSingletons$CalloutKt$lambda$1105541261$lambda($composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
      StopIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_0(p0) {
    return function (_this__u8e3s4, p0_0) {
      return p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
    };
  }
  function ComposableSingletons$CalloutKt$lambda$_700737724$lambda_78p56o($composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
      ExclaimIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_1(p0) {
    return function (_this__u8e3s4, p0_0) {
      return p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
    };
  }
  function ComposableSingletons$CalloutKt$lambda$_1510536654$lambda_g5bhof($composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
      InfoIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_2(p0) {
    return function (_this__u8e3s4, p0_0) {
      return p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
    };
  }
  function ComposableSingletons$CalloutKt$lambda$_2086387290$lambda_cn27wu($composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
      QuestionIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_3(p0) {
    return function (_this__u8e3s4, p0_0) {
      return p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
    };
  }
  function ComposableSingletons$CalloutKt$lambda$1974337438$lambda($composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
      QuoteIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_4(p0) {
    return function (_this__u8e3s4, p0_0) {
      return p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
    };
  }
  function ComposableSingletons$CalloutKt$lambda$_613517763$lambda_5n9r8($composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
      LightbulbIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_5(p0) {
    return function (_this__u8e3s4, p0_0) {
      return p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
    };
  }
  function ComposableSingletons$CalloutKt$lambda$2087814270$lambda($composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
      WarningIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$CalloutKt() {
    ComposableSingletons$CalloutKt_instance = this;
    var tmp = this;
    tmp.lambda$1105541261__1 = ComposableLambda$invoke$ref(composableLambdaInstance(1105541261, false, ComposableSingletons$CalloutKt$lambda$1105541261$lambda));
    var tmp_0 = this;
    tmp_0.lambda$_700737724_d4ps9n_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-700737724, false, ComposableSingletons$CalloutKt$lambda$_700737724$lambda_78p56o));
    var tmp_1 = this;
    tmp_1.lambda$_1510536654_t7yu8g_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(-1510536654, false, ComposableSingletons$CalloutKt$lambda$_1510536654$lambda_g5bhof));
    var tmp_2 = this;
    tmp_2.lambda$_2086387290_wtu3dp_1 = ComposableLambda$invoke$ref_2(composableLambdaInstance(-2086387290, false, ComposableSingletons$CalloutKt$lambda$_2086387290$lambda_cn27wu));
    var tmp_3 = this;
    tmp_3.lambda$1974337438__1 = ComposableLambda$invoke$ref_3(composableLambdaInstance(1974337438, false, ComposableSingletons$CalloutKt$lambda$1974337438$lambda));
    var tmp_4 = this;
    tmp_4.lambda$_613517763_hlwoe9__1 = ComposableLambda$invoke$ref_4(composableLambdaInstance(-613517763, false, ComposableSingletons$CalloutKt$lambda$_613517763$lambda_5n9r8));
    var tmp_5 = this;
    tmp_5.lambda$2087814270__1 = ComposableLambda$invoke$ref_5(composableLambdaInstance(2087814270, false, ComposableSingletons$CalloutKt$lambda$2087814270$lambda));
  }
  protoOf(ComposableSingletons$CalloutKt).get_lambda$1105541261_ioje27_k$ = function () {
    return this.lambda$1105541261__1;
  };
  protoOf(ComposableSingletons$CalloutKt).get_lambda$_700737724_7qb449_k$ = function () {
    return this.lambda$_700737724_d4ps9n_1;
  };
  protoOf(ComposableSingletons$CalloutKt).get_lambda$_1510536654_robc3u_k$ = function () {
    return this.lambda$_1510536654_t7yu8g_1;
  };
  protoOf(ComposableSingletons$CalloutKt).get_lambda$_2086387290_hc1ocp_k$ = function () {
    return this.lambda$_2086387290_wtu3dp_1;
  };
  protoOf(ComposableSingletons$CalloutKt).get_lambda$1974337438_eino7s_k$ = function () {
    return this.lambda$1974337438__1;
  };
  protoOf(ComposableSingletons$CalloutKt).get_lambda$_613517763_vv4h2t_k$ = function () {
    return this.lambda$_613517763_hlwoe9__1;
  };
  protoOf(ComposableSingletons$CalloutKt).get_lambda$2087814270_hyh4le_k$ = function () {
    return this.lambda$2087814270__1;
  };
  var ComposableSingletons$CalloutKt_instance;
  function ComposableSingletons$CalloutKt_getInstance() {
    if (ComposableSingletons$CalloutKt_instance == null)
      new ComposableSingletons$CalloutKt();
    return ComposableSingletons$CalloutKt_instance;
  }
  function CalloutStyle$lambda($this$CssStyle) {
    _init_properties_Callout_kt__ksu682();
    $this$CssStyle.base_y8uu8g_k$(CalloutStyle$lambda$lambda);
    $this$CssStyle.cssRule_fe6cwq_k$(' >.callout-title', CalloutStyle$lambda$lambda_0);
    return Unit_getInstance();
  }
  function CalloutStyle$lambda$lambda() {
    _init_properties_Callout_kt__ksu682();
    return marginBlock(textAlign(Companion_getInstance(), Companion_getInstance_6().get_Start_ih4i6x_k$()), get_em(1));
  }
  function CalloutStyle$lambda$lambda_0() {
    _init_properties_Callout_kt__ksu682();
    var tmp = Companion_getInstance();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    Companion_getInstance_7();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return lineHeight(gap(fontSize(fontWeight(alignItems(display(tmp, 'flex'), Companion_getInstance_8().get_Center_3arb0i_k$()), Companion_getInstance_9().get_Medium_1fiba6_k$()), CalloutVars_getInstance().get_TitleFontSize_xxaxnl_k$().value$default_36t2hw_k$()), CalloutVars_getInstance().get_TitleGap_9dart3_k$().value$default_36t2hw_k$()), CalloutVars_getInstance().get_TitleLineHeight_6ln5be_k$().value$default_36t2hw_k$());
  }
  function LeftBorderedCalloutVariant$lambda($this$addVariant) {
    _init_properties_Callout_kt__ksu682();
    $this$addVariant.base_y8uu8g_k$(LeftBorderedCalloutVariant$lambda$lambda);
    $this$addVariant.cssRule_fe6cwq_k$(' >.callout-title', LeftBorderedCalloutVariant$lambda$lambda_0);
    removeEdgeParagraphSpacing($this$addVariant);
    return Unit_getInstance();
  }
  function LeftBorderedCalloutVariant$lambda$lambda() {
    _init_properties_Callout_kt__ksu682();
    var tmp = Companion_getInstance();
    var tmp_0 = get_em(0.25);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return padding_0(borderLeft(tmp, tmp_0, 'solid', CalloutVars_getInstance().get_Color_i88tui_k$().value$default_36t2hw_k$()), get_cssRem(0.5), get_cssRem(1));
  }
  function LeftBorderedCalloutVariant$lambda$lambda_0() {
    _init_properties_Callout_kt__ksu682();
    var tmp = color(Companion_getInstance(), CalloutVars_getInstance().get_Color_i88tui_k$().value$default_36t2hw_k$());
    return margin_0(tmp, LeftBorderedCalloutVariant$lambda$lambda$lambda);
  }
  function LeftBorderedCalloutVariant$lambda$lambda$lambda($this$margin) {
    _init_properties_Callout_kt__ksu682();
    $this$margin.bottom_k4p8ql_k$(get_cssRem(1));
    return Unit_getInstance();
  }
  function LeftBorderedFilledCalloutVariant$lambda($this$addVariant) {
    _init_properties_Callout_kt__ksu682();
    $this$addVariant.base_y8uu8g_k$(LeftBorderedFilledCalloutVariant$lambda$lambda);
    $this$addVariant.cssRule_fe6cwq_k$(' >.callout-title', LeftBorderedFilledCalloutVariant$lambda$lambda_0);
    removeEdgeParagraphSpacing($this$addVariant);
    return Unit_getInstance();
  }
  function LeftBorderedFilledCalloutVariant$lambda$lambda() {
    _init_properties_Callout_kt__ksu682();
    var tmp = Companion_getInstance();
    var tmp_0 = get_em(0.25);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return boxShadow(padding_0(borderRadius(backgroundColor(borderLeft(tmp, tmp_0, 'solid', CalloutVars_getInstance().get_Color_i88tui_k$().value$default_36t2hw_k$()), CalloutVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_36t2hw_k$()), get_px(4)), get_cssRem(0.75), get_cssRem(1)), [Companion_getInstance_10().of$default_s4a3oz_k$(get_px(0), get_px(1), get_px(2), VOID, Colors_getInstance().get_Black_i7mvue_k$().copyf$default_6pu18v_k$(VOID, VOID, VOID, 0.12)), Companion_getInstance_10().of$default_s4a3oz_k$(get_px(0), get_px(3), get_px(10), VOID, Colors_getInstance().get_Black_i7mvue_k$().copyf$default_6pu18v_k$(VOID, VOID, VOID, 0.08))]);
  }
  function LeftBorderedFilledCalloutVariant$lambda$lambda_0() {
    _init_properties_Callout_kt__ksu682();
    var tmp = color(Companion_getInstance(), CalloutVars_getInstance().get_Color_i88tui_k$().value$default_36t2hw_k$());
    return margin_0(tmp, LeftBorderedFilledCalloutVariant$lambda$lambda$lambda);
  }
  function LeftBorderedFilledCalloutVariant$lambda$lambda$lambda($this$margin) {
    _init_properties_Callout_kt__ksu682();
    $this$margin.bottom_k4p8ql_k$(get_cssRem(0.75));
    return Unit_getInstance();
  }
  function OutlinedCalloutVariant$lambda($this$addVariant) {
    _init_properties_Callout_kt__ksu682();
    $this$addVariant.base_y8uu8g_k$(OutlinedCalloutVariant$lambda$lambda);
    $this$addVariant.cssRule_fe6cwq_k$(' >.callout-title', OutlinedCalloutVariant$lambda$lambda_0);
    $this$addVariant.cssRule_fe6cwq_k$(' .callout-icon', OutlinedCalloutVariant$lambda$lambda_1);
    $this$addVariant.cssRule_fe6cwq_k$(' >.callout-body', OutlinedCalloutVariant$lambda$lambda_2);
    removeEdgeParagraphSpacing($this$addVariant);
    return Unit_getInstance();
  }
  function OutlinedCalloutVariant$lambda$lambda() {
    _init_properties_Callout_kt__ksu682();
    var tmp = Companion_getInstance();
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderRadius(border(tmp, tmp_0, 'solid', CalloutVars_getInstance().get_Color_i88tui_k$().value$default_36t2hw_k$()), get_cssRem(0.2));
  }
  function OutlinedCalloutVariant$lambda$lambda_0() {
    _init_properties_Callout_kt__ksu682();
    return padding_0(backgroundColor(Companion_getInstance(), CalloutVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_36t2hw_k$()), get_cssRem(0.75), get_cssRem(0.75));
  }
  function OutlinedCalloutVariant$lambda$lambda_1() {
    _init_properties_Callout_kt__ksu682();
    return color(Companion_getInstance(), CalloutVars_getInstance().get_Color_i88tui_k$().value$default_36t2hw_k$());
  }
  function OutlinedCalloutVariant$lambda$lambda_2() {
    _init_properties_Callout_kt__ksu682();
    return padding_0(Companion_getInstance(), get_cssRem(0.75), get_cssRem(0.75));
  }
  function OutlinedFilledCalloutVariant$lambda($this$addVariant) {
    _init_properties_Callout_kt__ksu682();
    $this$addVariant.base_y8uu8g_k$(OutlinedFilledCalloutVariant$lambda$lambda);
    $this$addVariant.cssRule_fe6cwq_k$(' >.callout-title', OutlinedFilledCalloutVariant$lambda$lambda_0);
    removeEdgeParagraphSpacing($this$addVariant);
    return Unit_getInstance();
  }
  function OutlinedFilledCalloutVariant$lambda$lambda() {
    _init_properties_Callout_kt__ksu682();
    var tmp = Companion_getInstance();
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return padding(borderRadius(backgroundColor(border(tmp, tmp_0, 'solid', CalloutVars_getInstance().get_Color_i88tui_k$().value$default_36t2hw_k$()), CalloutVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_36t2hw_k$()), get_px(4)), get_cssRem(0.75));
  }
  function OutlinedFilledCalloutVariant$lambda$lambda_0() {
    _init_properties_Callout_kt__ksu682();
    var tmp = color(Companion_getInstance(), CalloutVars_getInstance().get_Color_i88tui_k$().value$default_36t2hw_k$());
    return margin_0(tmp, OutlinedFilledCalloutVariant$lambda$lambda$lambda);
  }
  function OutlinedFilledCalloutVariant$lambda$lambda$lambda($this$margin) {
    _init_properties_Callout_kt__ksu682();
    $this$margin.bottom_k4p8ql_k$(get_cssRem(0.75));
    return Unit_getInstance();
  }
  function MatchingLinkCalloutVariant$lambda($this$addVariant) {
    _init_properties_Callout_kt__ksu682();
    descendants($this$addVariant, [':any-link'], MatchingLinkCalloutVariant$lambda$lambda);
    return Unit_getInstance();
  }
  function MatchingLinkCalloutVariant$lambda$lambda() {
    _init_properties_Callout_kt__ksu682();
    return color(Companion_getInstance(), CalloutVars_getInstance().get_Color_i88tui_k$().value$default_36t2hw_k$());
  }
  function removeEdgeParagraphSpacing$lambda() {
    _init_properties_Callout_kt__ksu682();
    var tmp = Companion_getInstance();
    return marginBlock_0(tmp, removeEdgeParagraphSpacing$lambda$lambda);
  }
  function removeEdgeParagraphSpacing$lambda$lambda($this$marginBlock) {
    _init_properties_Callout_kt__ksu682();
    $this$marginBlock.start_7t2yjw_k$(get_px(0));
    return Unit_getInstance();
  }
  function removeEdgeParagraphSpacing$lambda_0() {
    _init_properties_Callout_kt__ksu682();
    var tmp = Companion_getInstance();
    return marginBlock_0(tmp, removeEdgeParagraphSpacing$lambda$lambda_0);
  }
  function removeEdgeParagraphSpacing$lambda$lambda_0($this$marginBlock) {
    _init_properties_Callout_kt__ksu682();
    $this$marginBlock.end_t3ff3h_k$(get_px(0));
    return Unit_getInstance();
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
  function ButtonKind() {
  }
  function ButtonVars$_get_BackgroundDefaultColor_$ref_p4munk() {
    return function (p0) {
      return p0.get_BackgroundDefaultColor_so3bvr_k$();
    };
  }
  function ButtonVars$_get_BackgroundFocusColor_$ref_4ogjpj() {
    return function (p0) {
      return p0.get_BackgroundFocusColor_4vb99e_k$();
    };
  }
  function ButtonVars$_get_BackgroundHoverColor_$ref_sxwca3() {
    return function (p0) {
      return p0.get_BackgroundHoverColor_qkbxz2_k$();
    };
  }
  function ButtonVars$_get_BackgroundPressedColor_$ref_ig9prj() {
    return function (p0) {
      return p0.get_BackgroundPressedColor_qp3aco_k$();
    };
  }
  function ButtonVars$_get_Color_$ref_90hsrb() {
    return function (p0) {
      return p0.get_Color_i88tui_k$();
    };
  }
  function ButtonVars$_get_ColorTransitionDuration_$ref_7uf2ku() {
    return function (p0) {
      return p0.get_ColorTransitionDuration_d6ufct_k$();
    };
  }
  function ButtonVars$_get_FontSize_$ref_o5ikts() {
    return function (p0) {
      return p0.get_FontSize_oos3dz_k$();
    };
  }
  function ButtonVars$_get_Height_$ref_re4w87() {
    return function (p0) {
      return p0.get_Height_xmnjk_k$();
    };
  }
  function ButtonVars$_get_PaddingHorizontal_$ref_uqasd7() {
    return function (p0) {
      return p0.get_PaddingHorizontal_u991sc_k$();
    };
  }
  function ButtonVars() {
    ButtonVars_instance = this;
    this.BackgroundDefaultColor$delegate_1 = StyleVariable('silk');
    var tmp = this;
    var tmp0_defaultFallback = get_FocusOutlineColorVar().value$default_36t2hw_k$();
    tmp.BackgroundFocusColor$delegate_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.BackgroundHoverColor$delegate_1 = StyleVariable('silk');
    this.BackgroundPressedColor$delegate_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_ColorVar().value$default_36t2hw_k$();
    tmp_0.Color$delegate_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().get_Normal_22avww_k$().value$default_36t2hw_k$();
    tmp_1.ColorTransitionDuration$delegate_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
    this.FontSize$delegate_1 = StyleVariable('silk');
    this.Height$delegate_1 = StyleVariable('silk');
    this.PaddingHorizontal$delegate_1 = StyleVariable('silk');
  }
  protoOf(ButtonVars).get_BackgroundDefaultColor_so3bvr_k$ = function () {
    var tmp = KProperty1;
    return this.BackgroundDefaultColor$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('BackgroundDefaultColor', 1, tmp, ButtonVars$_get_BackgroundDefaultColor_$ref_p4munk(), null));
  };
  protoOf(ButtonVars).get_BackgroundFocusColor_4vb99e_k$ = function () {
    var tmp = KProperty1;
    return this.BackgroundFocusColor$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('BackgroundFocusColor', 1, tmp, ButtonVars$_get_BackgroundFocusColor_$ref_4ogjpj(), null));
  };
  protoOf(ButtonVars).get_BackgroundHoverColor_qkbxz2_k$ = function () {
    var tmp = KProperty1;
    return this.BackgroundHoverColor$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('BackgroundHoverColor', 1, tmp, ButtonVars$_get_BackgroundHoverColor_$ref_sxwca3(), null));
  };
  protoOf(ButtonVars).get_BackgroundPressedColor_qp3aco_k$ = function () {
    var tmp = KProperty1;
    return this.BackgroundPressedColor$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('BackgroundPressedColor', 1, tmp, ButtonVars$_get_BackgroundPressedColor_$ref_ig9prj(), null));
  };
  protoOf(ButtonVars).get_Color_i88tui_k$ = function () {
    var tmp = KProperty1;
    return this.Color$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('Color', 1, tmp, ButtonVars$_get_Color_$ref_90hsrb(), null));
  };
  protoOf(ButtonVars).get_ColorTransitionDuration_d6ufct_k$ = function () {
    var tmp = KProperty1;
    return this.ColorTransitionDuration$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('ColorTransitionDuration', 1, tmp, ButtonVars$_get_ColorTransitionDuration_$ref_7uf2ku(), null));
  };
  protoOf(ButtonVars).get_FontSize_oos3dz_k$ = function () {
    var tmp = KProperty1;
    return this.FontSize$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('FontSize', 1, tmp, ButtonVars$_get_FontSize_$ref_o5ikts(), null));
  };
  protoOf(ButtonVars).get_Height_xmnjk_k$ = function () {
    var tmp = KProperty1;
    return this.Height$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('Height', 1, tmp, ButtonVars$_get_Height_$ref_re4w87(), null));
  };
  protoOf(ButtonVars).get_PaddingHorizontal_u991sc_k$ = function () {
    var tmp = KProperty1;
    return this.PaddingHorizontal$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('PaddingHorizontal', 1, tmp, ButtonVars$_get_PaddingHorizontal_$ref_uqasd7(), null));
  };
  var ButtonVars_instance;
  function ButtonVars_getInstance() {
    if (ButtonVars_instance == null)
      new ButtonVars();
    return ButtonVars_instance;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.XS_1 = new ButtonSize(FontSizeVars_getInstance().get_XS_kntocc_k$().value$default_36t2hw_k$(), get_cssRem(1.5), get_cssRem(0.5));
    this.SM_1 = new ButtonSize(FontSizeVars_getInstance().get_SM_kntogt_k$().value$default_36t2hw_k$(), get_cssRem(2), get_cssRem(0.75));
    this.MD_1 = new ButtonSize(FontSizeVars_getInstance().get_MD_kntom8_k$().value$default_36t2hw_k$(), get_cssRem(2.5), get_cssRem(1));
    this.LG_1 = new ButtonSize(FontSizeVars_getInstance().get_LG_knton0_k$().value$default_36t2hw_k$(), get_cssRem(3), get_cssRem(1.5));
  }
  protoOf(Companion_0).get_XS_kntocc_k$ = function () {
    return this.XS_1;
  };
  protoOf(Companion_0).get_SM_kntogt_k$ = function () {
    return this.SM_1;
  };
  protoOf(Companion_0).get_MD_kntom8_k$ = function () {
    return this.MD_1;
  };
  protoOf(Companion_0).get_LG_knton0_k$ = function () {
    return this.LG_1;
  };
  var Companion_instance_0;
  function Companion_getInstance_22() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function ButtonSize(fontSize, height, horizontalPadding) {
    Companion_getInstance_22();
    Base_init_$Init$(setVariable(setVariable(setVariable(Companion_getInstance(), ButtonVars_getInstance().get_FontSize_oos3dz_k$(), fontSize), ButtonVars_getInstance().get_Height_xmnjk_k$(), height), ButtonVars_getInstance().get_PaddingHorizontal_u991sc_k$(), horizontalPadding), VOID, this);
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
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(366060417);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onClick_0) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ((($changed & 512) === 0 ? $composer_0.changed_ga7h3f_k$(variant_0._v) : $composer_0.changedInstance_s1wkiy_k$(variant_0._v)) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0) {
      var tmp;
      var tmp_0 = $composer_0;
      var tmpEnum = type_0._v;
      if (tmp_0.changed_kpusro_k$(tmpEnum == null ? -1 : tmpEnum.get_ordinal_ip24qg_k$())) {
        tmp = 2048;
      } else {
        tmp = 1024;
      }
      $dirty = $dirty | tmp;
    }
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(enabled_0._v) ? 16384 : 8192);
    if (($changed & 196608) === 0)
      $dirty = $dirty | (($default & 32) === 0 && (($changed & 262144) === 0 ? $composer_0.changed_ga7h3f_k$(size_0._v) : $composer_0.changedInstance_s1wkiy_k$(size_0._v)) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(colorPalette_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(focusBorderColor_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 100663296) === 0)
      $dirty = $dirty | ((($changed & 134217728) === 0 ? $composer_0.changed_ga7h3f_k$(ref_0._v) : $composer_0.changedInstance_s1wkiy_k$(ref_0._v)) ? 67108864 : 33554432);
    if (($changed & 805306368) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 536870912 : 268435456);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 306783379) === 306783378), $dirty & 1)) {
      $composer_0.startDefaults_g83kzo_k$();
      if (($changed & 1) === 0 || $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 2) === 0)) {
          modifier_0._v = Companion_getInstance();
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
          size_0._v = Companion_getInstance_22().MD_1;
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
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        if (!(($default & 32) === 0))
          $dirty = $dirty & -458753;
      }
      $composer_0.endDefaults_b0s0ot_k$();
      $composer_0.startReplaceGroup_5hh8aj_k$(-403206744);
      $composer_0.startReplaceGroup_5hh8aj_k$(-403236728);
      var tmp0 = thenIf(toModifier(get_ButtonStyle(), [variant_0._v], $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter() | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 3), !enabled_0._v, toModifier_0(get_DisabledStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter())).then_mmfvo6_k$(toModifier_1(size_0._v, $composer_0, com_varabyte_kobweb_silk_style_CssStyle_Restricted_Base$stableprop_getter() | 14 & $dirty >> 15));
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
      var tmp_1;
      if (!(colorPalette_0._v == null)) {
        var colorPalette_1 = ensureNotNull(colorPalette_0._v);
        var isDark = Companion_getInstance_11().get_current_2iudd5_k$($composer_0, 6).get_isDark_evw91l_k$();
        var isBrightColor = get_isBright(isDark ? colorPalette_1.get__200_wogdh8_k$() : colorPalette_1.get__500_wogfpb_k$());
        tmp_1 = setVariable(setVariable(setVariable(setVariable(Companion_getInstance(), ButtonVars_getInstance().get_Color_i88tui_k$(), get_color(toPalette(isBrightColor ? ColorMode_LIGHT_getInstance() : ColorMode_DARK_getInstance()))), ButtonVars_getInstance().get_BackgroundDefaultColor_so3bvr_k$(), isDark ? colorPalette_1.get__200_wogdh8_k$() : colorPalette_1.get__500_wogfpb_k$()), ButtonVars_getInstance().get_BackgroundHoverColor_qkbxz2_k$(), isDark ? colorPalette_1.get__300_woge7x_k$() : colorPalette_1.get__600_woggg0_k$()), ButtonVars_getInstance().get_BackgroundPressedColor_qp3aco_k$(), isDark ? colorPalette_1.get__400_wogeym_k$() : colorPalette_1.get__700_wogh6p_k$());
      } else {
        tmp_1 = Companion_getInstance();
      }
      var tmp0_group = tmp0.then_mmfvo6_k$(tmp_1);
      $composer_0.endReplaceGroup_ek144q_k$();
      var tmp0_0 = setVariable(tmp0_group, ButtonVars_getInstance().get_BackgroundFocusColor_4vb99e_k$(), focusBorderColor_0._v).then_mmfvo6_k$(modifier_0._v);
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
      var tmp_2;
      if (enabled_0._v) {
        var tmp_3 = Companion_getInstance();
        var tmp0_1 = $composer_0;
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = ($dirty & 14) === 4;
        // Inline function 'kotlin.let' call
        var it = tmp0_1.rememberedValue_4dg93v_k$();
        var tmp_4;
        if (invalid || it === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
          var value = Button$lambda(onClick_0);
          tmp0_1.updateRememberedValue_l1wh71_k$(value);
          tmp_4 = value;
        } else {
          tmp_4 = it;
        }
        var tmp_5 = tmp_4;
        var tmp$ret$5 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        tmp_2 = onClick(tmp_3, tmp$ret$5);
      } else {
        tmp_2 = Companion_getInstance();
      }
      var tmp1_group = tmp0_0.then_mmfvo6_k$(tmp_2);
      $composer_0.endReplaceGroup_ek144q_k$();
      var tmp0_2 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = ($dirty & 7168) === 2048;
      // Inline function 'kotlin.let' call
      var it_0 = tmp0_2.rememberedValue_4dg93v_k$();
      var tmp_6;
      if (invalid_0 || it_0 === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
        var value_0 = Button$lambda_0(type_0);
        tmp0_2.updateRememberedValue_l1wh71_k$(value_0);
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
      var invalid_1 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_1 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_9;
      if (invalid_1 || it_1 === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
        var value_1 = ComposableLambda$invoke$ref_6(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_1);
        tmp_9 = value_1;
      } else {
        tmp_9 = it_1;
      }
      var tmp_10 = tmp_9;
      var tmp0_3 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Button(tmp_8, tmp0_3, $composer_0, 48, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp2_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.updateScope_t8jcf_k$(Button$lambda_2(onClick_0, modifier_0, variant_0, type_0, enabled_0, size_0, colorPalette_0, focusBorderColor_0, ref_0, content, $changed, $default));
    }
  }
  function com_varabyte_kobweb_silk_components_forms_ButtonSize$stableprop_getter() {
    return com_varabyte_kobweb_silk_components_forms_ButtonSize$stable;
  }
  function ButtonStyle$lambda($this$CssStyle) {
    _init_properties_Button_kt__2845m6();
    $this$CssStyle.base_y8uu8g_k$(ButtonStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle).plus_99tjwk_k$(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    $this$CssStyle.invoke_9o9x0o_k$(tmp, ButtonStyle$lambda$lambda_0);
    var tmp_0 = get_focusVisible($this$CssStyle).plus_99tjwk_k$(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    $this$CssStyle.invoke_9o9x0o_k$(tmp_0, ButtonStyle$lambda$lambda_1);
    var tmp_1 = get_active($this$CssStyle).plus_99tjwk_k$(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    $this$CssStyle.invoke_9o9x0o_k$(tmp_1, ButtonStyle$lambda$lambda_2);
    return Unit_getInstance();
  }
  function ButtonStyle$lambda$lambda() {
    _init_properties_Button_kt__2845m6();
    var tmp = borderRadius(verticalAlign(padding_0(whiteSpace(fontWeight(fontSize(minWidth(height(lineHeight(backgroundColor(color(Companion_getInstance(), ButtonVars_getInstance().get_Color_i88tui_k$().value$default_36t2hw_k$()), ButtonVars_getInstance().get_BackgroundDefaultColor_so3bvr_k$().value$default_36t2hw_k$()), 1.2), ButtonVars_getInstance().get_Height_xmnjk_k$().value$default_36t2hw_k$()), ButtonVars_getInstance().get_Height_xmnjk_k$().value$default_36t2hw_k$()), ButtonVars_getInstance().get_FontSize_oos3dz_k$().value$default_36t2hw_k$()), Companion_getInstance_9().get_SemiBold_aid1c4_k$()), Companion_getInstance_13().get_NoWrap_21tqz8_k$()), VOID, ButtonVars_getInstance().get_PaddingHorizontal_u991sc_k$().value$default_36t2hw_k$()), Companion_getInstance_14().get_Middle_1hpdq6_k$()), get_cssRem(0.375));
    return transition_0(userSelect(border_0(tmp, ButtonStyle$lambda$lambda$lambda), Companion_getInstance_3().get_None_wo6tgh_k$()), [Companion_getInstance_2().of$default_ehijui_k$('background-color', ButtonVars_getInstance().get_ColorTransitionDuration_d6ufct_k$().value$default_36t2hw_k$())]);
  }
  function ButtonStyle$lambda$lambda$lambda($this$border) {
    _init_properties_Button_kt__2845m6();
    $this$border.width_iqjg4l_k$(get_px(0));
    return Unit_getInstance();
  }
  function ButtonStyle$lambda$lambda_0() {
    _init_properties_Button_kt__2845m6();
    return cursor(backgroundColor(Companion_getInstance(), ButtonVars_getInstance().get_BackgroundHoverColor_qkbxz2_k$().value$default_36t2hw_k$()), Companion_getInstance_1().get_Pointer_m64vg4_k$());
  }
  function ButtonStyle$lambda$lambda_1() {
    _init_properties_Button_kt__2845m6();
    var tmp = Companion_getInstance();
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return boxShadow_0(outline(tmp, tmp_0, 'solid', Colors_getInstance().get_Transparent_cxh4g9_k$()), VOID, VOID, VOID, get_cssRem(0.1875), ButtonVars_getInstance().get_BackgroundFocusColor_4vb99e_k$().value$default_36t2hw_k$());
  }
  function ButtonStyle$lambda$lambda_2() {
    _init_properties_Button_kt__2845m6();
    return backgroundColor(Companion_getInstance(), ButtonVars_getInstance().get_BackgroundPressedColor_qp3aco_k$().value$default_36t2hw_k$());
  }
  function Button$lambda($onClick) {
    return function (evt) {
      $onClick(evt);
      evt.stopPropagation_5qf8uy_k$();
      return Unit_getInstance();
    };
  }
  function Button$lambda_0($type) {
    return function ($this$toAttrs) {
      type($this$toAttrs, $type._v);
      return Unit_getInstance();
    };
  }
  function Button$lambda_1($ref, $content) {
    return function ($this$JbButton, $composer, $changed) {
      var $composer_0 = $composer;
      registerRefScope($this$JbButton, $ref._v, $composer_0, 14 & $changed | com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter() << 3);
      var tmp = Center_getInstance();
      var tmp_0 = CenterVertically_getInstance();
      Row(null, tmp, tmp_0, null, $content, $composer_0, com_varabyte_kobweb_compose_foundation_layout_Arrangement_Center$stableprop_getter() << 3 | com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stableprop_getter() << 6, 9);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_6(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function Button$lambda_2($onClick, $modifier, $variant, $type, $enabled, $size, $colorPalette, $focusBorderColor, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Button_0($onClick, $modifier._v, $variant._v, $type._v, $enabled._v, $size._v, $colorPalette._v, $focusBorderColor._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
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
  function Container() {
  }
  function Icon() {
  }
  function CheckboxKind() {
  }
  function CheckboxVars$_get_BorderColor_$ref_a3dxo() {
    return function (p0) {
      return p0.get_BorderColor_hljtgy_k$();
    };
  }
  function CheckboxVars$_get_BorderRadius_$ref_auagi9() {
    return function (p0) {
      return p0.get_BorderRadius_tko1mv_k$();
    };
  }
  function CheckboxVars$_get_BorderWidth_$ref_n68vn5() {
    return function (p0) {
      return p0.get_BorderWidth_hanxcf_k$();
    };
  }
  function CheckboxVars$_get_Size_$ref_kbhccu() {
    return function (p0) {
      return p0.get_Size_wo9w8a_k$();
    };
  }
  function CheckboxVars$_get_Spacing_$ref_o74arc() {
    return function (p0) {
      return p0.get_Spacing_4hcb0m_k$();
    };
  }
  function CheckboxVars$_get_FontSize_$ref_zfsngh() {
    return function (p0) {
      return p0.get_FontSize_oos3dz_k$();
    };
  }
  function CheckboxVars$_get_IconSize_$ref_estx9n() {
    return function (p0) {
      return p0.get_IconSize_s3avwj_k$();
    };
  }
  function CheckboxVars$_get_FocusOutlineColor_$ref_rvq14e() {
    return function (p0) {
      return p0.get_FocusOutlineColor_j0f8fk_k$();
    };
  }
  function CheckboxVars$_get_FocusOutlineSpread_$ref_i3390y() {
    return function (p0) {
      return p0.get_FocusOutlineSpread_spl6o6_k$();
    };
  }
  function CheckboxVars$_get_UncheckedBackgroundColor_$ref_6v46fc() {
    return function (p0) {
      return p0.get_UncheckedBackgroundColor_cj7b3k_k$();
    };
  }
  function CheckboxVars$_get_IconColor_$ref_yfe0ch() {
    return function (p0) {
      return p0.get_IconColor_i8bnoh_k$();
    };
  }
  function CheckboxVars$_get_IconBackgroundColor_$ref_eer9lb() {
    return function (p0) {
      return p0.get_IconBackgroundColor_fqf24z_k$();
    };
  }
  function CheckboxVars$_get_IconBackgroundHoverColor_$ref_olfszl() {
    return function (p0) {
      return p0.get_IconBackgroundHoverColor_gda561_k$();
    };
  }
  function CheckboxVars$_get_TransitionDuration_$ref_mdqjzu() {
    return function (p0) {
      return p0.get_TransitionDuration_6zl6by_k$();
    };
  }
  function CheckboxVars() {
    CheckboxVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().value$default_36t2hw_k$();
    tmp.BorderColor$delegate_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_cssRem(0.125);
    tmp_0.BorderRadius$delegate_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_cssRem(0.125);
    tmp_1.BorderWidth$delegate_1 = StyleVariable_0(tmp0_defaultFallback_1, 'silk');
    this.Size$delegate_1 = StyleVariable('silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_cssRem(0.5);
    tmp_2.Spacing$delegate_1 = StyleVariable_0(tmp0_defaultFallback_2, 'silk');
    this.FontSize$delegate_1 = StyleVariable('silk');
    this.IconSize$delegate_1 = StyleVariable('silk');
    var tmp_3 = this;
    var tmp0_defaultFallback_3 = get_FocusOutlineColorVar().value$default_36t2hw_k$();
    tmp_3.FocusOutlineColor$delegate_1 = StyleVariable_0(tmp0_defaultFallback_3, 'silk');
    var tmp_4 = this;
    var tmp0_defaultFallback_4 = get_cssRem(0.1875);
    tmp_4.FocusOutlineSpread$delegate_1 = StyleVariable_0(tmp0_defaultFallback_4, 'silk');
    this.UncheckedBackgroundColor$delegate_1 = StyleVariable('silk');
    this.IconColor$delegate_1 = StyleVariable('silk');
    this.IconBackgroundColor$delegate_1 = StyleVariable('silk');
    this.IconBackgroundHoverColor$delegate_1 = StyleVariable('silk');
    var tmp_5 = this;
    var tmp0_defaultFallback_5 = TransitionDurationVars_getInstance().get_VeryFast_7jhf2z_k$().value$default_36t2hw_k$();
    tmp_5.TransitionDuration$delegate_1 = StyleVariable_1(tmp0_defaultFallback_5, 'silk');
  }
  protoOf(CheckboxVars).get_BorderColor_hljtgy_k$ = function () {
    var tmp = KProperty1;
    return this.BorderColor$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('BorderColor', 1, tmp, CheckboxVars$_get_BorderColor_$ref_a3dxo(), null));
  };
  protoOf(CheckboxVars).get_BorderRadius_tko1mv_k$ = function () {
    var tmp = KProperty1;
    return this.BorderRadius$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('BorderRadius', 1, tmp, CheckboxVars$_get_BorderRadius_$ref_auagi9(), null));
  };
  protoOf(CheckboxVars).get_BorderWidth_hanxcf_k$ = function () {
    var tmp = KProperty1;
    return this.BorderWidth$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('BorderWidth', 1, tmp, CheckboxVars$_get_BorderWidth_$ref_n68vn5(), null));
  };
  protoOf(CheckboxVars).get_Size_wo9w8a_k$ = function () {
    var tmp = KProperty1;
    return this.Size$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('Size', 1, tmp, CheckboxVars$_get_Size_$ref_kbhccu(), null));
  };
  protoOf(CheckboxVars).get_Spacing_4hcb0m_k$ = function () {
    var tmp = KProperty1;
    return this.Spacing$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('Spacing', 1, tmp, CheckboxVars$_get_Spacing_$ref_o74arc(), null));
  };
  protoOf(CheckboxVars).get_FontSize_oos3dz_k$ = function () {
    var tmp = KProperty1;
    return this.FontSize$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('FontSize', 1, tmp, CheckboxVars$_get_FontSize_$ref_zfsngh(), null));
  };
  protoOf(CheckboxVars).get_IconSize_s3avwj_k$ = function () {
    var tmp = KProperty1;
    return this.IconSize$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('IconSize', 1, tmp, CheckboxVars$_get_IconSize_$ref_estx9n(), null));
  };
  protoOf(CheckboxVars).get_FocusOutlineColor_j0f8fk_k$ = function () {
    var tmp = KProperty1;
    return this.FocusOutlineColor$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('FocusOutlineColor', 1, tmp, CheckboxVars$_get_FocusOutlineColor_$ref_rvq14e(), null));
  };
  protoOf(CheckboxVars).get_FocusOutlineSpread_spl6o6_k$ = function () {
    var tmp = KProperty1;
    return this.FocusOutlineSpread$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('FocusOutlineSpread', 1, tmp, CheckboxVars$_get_FocusOutlineSpread_$ref_i3390y(), null));
  };
  protoOf(CheckboxVars).get_UncheckedBackgroundColor_cj7b3k_k$ = function () {
    var tmp = KProperty1;
    return this.UncheckedBackgroundColor$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('UncheckedBackgroundColor', 1, tmp, CheckboxVars$_get_UncheckedBackgroundColor_$ref_6v46fc(), null));
  };
  protoOf(CheckboxVars).get_IconColor_i8bnoh_k$ = function () {
    var tmp = KProperty1;
    return this.IconColor$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('IconColor', 1, tmp, CheckboxVars$_get_IconColor_$ref_yfe0ch(), null));
  };
  protoOf(CheckboxVars).get_IconBackgroundColor_fqf24z_k$ = function () {
    var tmp = KProperty1;
    return this.IconBackgroundColor$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('IconBackgroundColor', 1, tmp, CheckboxVars$_get_IconBackgroundColor_$ref_eer9lb(), null));
  };
  protoOf(CheckboxVars).get_IconBackgroundHoverColor_gda561_k$ = function () {
    var tmp = KProperty1;
    return this.IconBackgroundHoverColor$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('IconBackgroundHoverColor', 1, tmp, CheckboxVars$_get_IconBackgroundHoverColor_$ref_olfszl(), null));
  };
  protoOf(CheckboxVars).get_TransitionDuration_6zl6by_k$ = function () {
    var tmp = KProperty1;
    return this.TransitionDuration$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('TransitionDuration', 1, tmp, CheckboxVars$_get_TransitionDuration_$ref_mdqjzu(), null));
  };
  var CheckboxVars_instance;
  function CheckboxVars_getInstance() {
    if (CheckboxVars_instance == null)
      new CheckboxVars();
    return CheckboxVars_instance;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.SM_1 = new CheckboxSize(get_cssRem(0.875), get_cssRem(0.45), FontSizeVars_getInstance().get_SM_kntogt_k$().value$default_36t2hw_k$());
    this.MD_1 = new CheckboxSize(get_cssRem(1), get_cssRem(0.625), FontSizeVars_getInstance().get_MD_kntom8_k$().value$default_36t2hw_k$());
    this.LG_1 = new CheckboxSize(get_cssRem(1.25), get_cssRem(0.8), FontSizeVars_getInstance().get_LG_knton0_k$().value$default_36t2hw_k$());
  }
  protoOf(Companion_1).get_SM_kntogt_k$ = function () {
    return this.SM_1;
  };
  protoOf(Companion_1).get_MD_kntom8_k$ = function () {
    return this.MD_1;
  };
  protoOf(Companion_1).get_LG_knton0_k$ = function () {
    return this.LG_1;
  };
  var Companion_instance_1;
  function Companion_getInstance_23() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function CheckboxSize(boxSize, iconSize, fontSize) {
    Companion_getInstance_23();
    Base_init_$Init$(setVariable(setVariable(setVariable(Companion_getInstance(), CheckboxVars_getInstance().get_Size_wo9w8a_k$(), boxSize), CheckboxVars_getInstance().get_IconSize_s3avwj_k$(), iconSize), CheckboxVars_getInstance().get_FontSize_oos3dz_k$(), fontSize), VOID, this);
  }
  function CheckboxStyle$lambda($this$CssStyle) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$CssStyle.base_y8uu8g_k$(CheckboxStyle$lambda$lambda);
    return Unit_getInstance();
  }
  function CheckboxStyle$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = cursor(fontSize(userSelect(gap(Companion_getInstance(), CheckboxVars_getInstance().get_Spacing_4hcb0m_k$().value$default_36t2hw_k$()), Companion_getInstance_3().get_None_wo6tgh_k$()), CheckboxVars_getInstance().get_FontSize_oos3dz_k$().value$default_36t2hw_k$()), Companion_getInstance_1().get_Pointer_m64vg4_k$());
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    Companion_getInstance_15();
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'relative';
    return position(tmp, tmp$ret$3);
  }
  function CheckboxEnabledAnim$lambda($this$Keyframes) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$Keyframes.from_1urvt_k$(CheckboxEnabledAnim$lambda$lambda);
    $this$Keyframes.to_txs6jq_k$(CheckboxEnabledAnim$lambda$lambda_0);
    return Unit_getInstance();
  }
  function CheckboxEnabledAnim$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    return opacity(Companion_getInstance(), 0);
  }
  function CheckboxEnabledAnim$lambda$lambda_0() {
    _init_properties_Checkbox_kt__x46qhp();
    return opacity(Companion_getInstance(), 1);
  }
  function CheckboxIconContainerStyle$lambda($this$CssStyle) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$CssStyle.base_y8uu8g_k$(CheckboxIconContainerStyle$lambda$lambda);
    return Unit_getInstance();
  }
  function CheckboxIconContainerStyle$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = size(fontSize(Companion_getInstance(), CheckboxVars_getInstance().get_IconSize_s3avwj_k$().value$default_36t2hw_k$()), CheckboxVars_getInstance().get_Size_wo9w8a_k$().value$default_36t2hw_k$());
    var tmp_0 = CheckboxVars_getInstance().get_BorderWidth_hanxcf_k$().value$default_36t2hw_k$();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition(borderRadius(border(tmp, tmp_0, 'solid', CheckboxVars_getInstance().get_BorderColor_hljtgy_k$().value$default_36t2hw_k$()), CheckboxVars_getInstance().get_BorderRadius_tko1mv_k$().value$default_36t2hw_k$()), Companion_getInstance_2().group$default_78h45q_k$(listOf(['background-color', 'border-color']), CheckboxVars_getInstance().get_TransitionDuration_6zl6by_k$().value$default_36t2hw_k$()));
  }
  function UncheckedCheckboxIconContainerVariant$lambda($this$addVariantBase) {
    _init_properties_Checkbox_kt__x46qhp();
    return backgroundColor(Companion_getInstance(), CheckboxVars_getInstance().get_UncheckedBackgroundColor_cj7b3k_k$().value$default_36t2hw_k$());
  }
  function CheckedCheckboxIconContainerVariant$lambda($this$addVariant) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$addVariant.base_y8uu8g_k$(CheckedCheckboxIconContainerVariant$lambda$lambda);
    return Unit_getInstance();
  }
  function CheckedCheckboxIconContainerVariant$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = backgroundColor(Companion_getInstance(), CheckboxVars_getInstance().get_IconBackgroundColor_fqf24z_k$().value$default_36t2hw_k$());
    return border_0(tmp, CheckedCheckboxIconContainerVariant$lambda$lambda$lambda);
  }
  function CheckedCheckboxIconContainerVariant$lambda$lambda$lambda($this$border) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$border.color_lesdgv_k$(CheckboxVars_getInstance().get_IconBackgroundColor_fqf24z_k$().value$default_36t2hw_k$());
    return Unit_getInstance();
  }
  function CheckboxIconStyle$lambda($this$base) {
    _init_properties_Checkbox_kt__x46qhp();
    return color(size(Companion_getInstance(), CheckboxVars_getInstance().get_Size_wo9w8a_k$().value$default_36t2hw_k$()), CheckboxVars_getInstance().get_IconColor_i8bnoh_k$().value$default_36t2hw_k$());
  }
  function CheckboxInputVariant$lambda($this$addVariant) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$addVariant.base_y8uu8g_k$(CheckboxInputVariant$lambda$lambda);
    $this$addVariant.cssRule_fe6cwq_k$(':focus-visible + *', CheckboxInputVariant$lambda$lambda_0);
    $this$addVariant.cssRule_fe6cwq_k$(':not([aria-disabled]):hover + *', CheckboxInputVariant$lambda$lambda_1);
    return Unit_getInstance();
  }
  function CheckboxInputVariant$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    return get_HiddenInputModifier();
  }
  function CheckboxInputVariant$lambda$lambda_0() {
    _init_properties_Checkbox_kt__x46qhp();
    return boxShadow_0(Companion_getInstance(), VOID, VOID, VOID, CheckboxVars_getInstance().get_FocusOutlineSpread_spl6o6_k$().value$default_36t2hw_k$(), CheckboxVars_getInstance().get_FocusOutlineColor_j0f8fk_k$().value$default_36t2hw_k$());
  }
  function CheckboxInputVariant$lambda$lambda_1() {
    _init_properties_Checkbox_kt__x46qhp();
    return setVariable(Companion_getInstance(), CheckboxVars_getInstance().get_IconBackgroundColor_fqf24z_k$(), CheckboxVars_getInstance().get_IconBackgroundHoverColor_gda561_k$().value$default_36t2hw_k$());
  }
  var properties_initialized_Checkbox_kt_pem0wr;
  function _init_properties_Checkbox_kt__x46qhp() {
    if (!properties_initialized_Checkbox_kt_pem0wr) {
      properties_initialized_Checkbox_kt_pem0wr = true;
      var tmp = rowClasses(Companion_getInstance(), VOID, CenterVertically_getInstance());
      CheckboxStyle = CssStyle(tmp, CheckboxStyle$lambda);
      CheckboxEnabledAnim = new Keyframes(CheckboxEnabledAnim$lambda);
      CheckboxIconContainerStyle = CssStyle(VOID, CheckboxIconContainerStyle$lambda);
      var tmp_0 = get_CheckboxIconContainerStyle();
      UncheckedCheckboxIconContainerVariant = addVariantBase(tmp_0, VOID, UncheckedCheckboxIconContainerVariant$lambda);
      var tmp_1 = get_CheckboxIconContainerStyle();
      CheckedCheckboxIconContainerVariant = addVariant(tmp_1, VOID, CheckedCheckboxIconContainerVariant$lambda);
      var tmp_2 = Companion_getInstance_5();
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
  function InputKind() {
  }
  function InputGroupKind() {
  }
  function InputVars$_get_BorderColor_$ref_2lp9kr() {
    return function (p0) {
      return p0.get_BorderColor_hljtgy_k$();
    };
  }
  function InputVars$_get_BorderRadius_$ref_t6une2() {
    return function (p0) {
      return p0.get_BorderRadius_tko1mv_k$();
    };
  }
  function InputVars$_get_BorderFocusColor_$ref_h84gjz() {
    return function (p0) {
      return p0.get_BorderFocusColor_guhvfk_k$();
    };
  }
  function InputVars$_get_BorderHoverColor_$ref_71bc0l() {
    return function (p0) {
      return p0.get_BorderHoverColor_4uita4_k$();
    };
  }
  function InputVars$_get_BorderInvalidColor_$ref_nnzjrk() {
    return function (p0) {
      return p0.get_BorderInvalidColor_3xft0h_k$();
    };
  }
  function InputVars$_get_ColorTransitionDuration_$ref_bo92hm() {
    return function (p0) {
      return p0.get_ColorTransitionDuration_d6ufct_k$();
    };
  }
  function InputVars$_get_FilledColor_$ref_xjpdgx() {
    return function (p0) {
      return p0.get_FilledColor_27lcwo_k$();
    };
  }
  function InputVars$_get_FilledHoverColor_$ref_ae4fhd() {
    return function (p0) {
      return p0.get_FilledHoverColor_z8l4su_k$();
    };
  }
  function InputVars$_get_FilledFocusColor_$ref_ynk81x() {
    return function (p0) {
      return p0.get_FilledFocusColor_e3i8gm_k$();
    };
  }
  function InputVars$_get_FontSize_$ref_4vtdgo() {
    return function (p0) {
      return p0.get_FontSize_oos3dz_k$();
    };
  }
  function InputVars$_get_Height_$ref_qojn9d() {
    return function (p0) {
      return p0.get_Height_xmnjk_k$();
    };
  }
  function InputVars$_get_Padding_$ref_z3xou9() {
    return function (p0) {
      return p0.get_Padding_fgkl54_k$();
    };
  }
  function InputVars$_get_PlaceholderOpacity_$ref_a9qjzk() {
    return function (p0) {
      return p0.get_PlaceholderOpacity_y4d5tt_k$();
    };
  }
  function InputVars$_get_PlaceholderColor_$ref_7qanko() {
    return function (p0) {
      return p0.get_PlaceholderColor_fqs0o7_k$();
    };
  }
  function InputVars$_get_InsetLeftWidth_$ref_ihrdie() {
    return function (p0) {
      return p0.get_InsetLeftWidth_8un9fv_k$();
    };
  }
  function InputVars$_get_InsetRightWidth_$ref_9n16ff() {
    return function (p0) {
      return p0.get_InsetRightWidth_1gxxby_k$();
    };
  }
  function InputVars() {
    InputVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().value$default_36t2hw_k$();
    tmp.BorderColor$delegate_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.BorderRadius$delegate_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_FocusOutlineColorVar().value$default_36t2hw_k$();
    tmp_0.BorderFocusColor$delegate_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    this.BorderHoverColor$delegate_1 = StyleVariable('silk');
    this.BorderInvalidColor$delegate_1 = StyleVariable('silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().get_Normal_22avww_k$().value$default_36t2hw_k$();
    tmp_1.ColorTransitionDuration$delegate_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
    this.FilledColor$delegate_1 = StyleVariable('silk');
    this.FilledHoverColor$delegate_1 = StyleVariable('silk');
    this.FilledFocusColor$delegate_1 = StyleVariable('silk');
    this.FontSize$delegate_1 = StyleVariable('silk');
    this.Height$delegate_1 = StyleVariable('silk');
    this.Padding$delegate_1 = StyleVariable('silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_PlaceholderOpacityVar().value$default_36t2hw_k$();
    tmp_2.PlaceholderOpacity$delegate_1 = StyleVariable_2(tmp0_defaultFallback_2, 'silk');
    var tmp_3 = this;
    var tmp0_defaultFallback_3 = get_PlaceholderColorVar().value$default_36t2hw_k$();
    tmp_3.PlaceholderColor$delegate_1 = StyleVariable_0(tmp0_defaultFallback_3, 'silk');
    var tmp_4 = this;
    var tmp0_defaultFallback_4 = get_cssRem(2.25);
    tmp_4.InsetLeftWidth$delegate_1 = StyleVariable_0(tmp0_defaultFallback_4, 'silk');
    var tmp_5 = this;
    var tmp0_defaultFallback_5 = get_cssRem(2.25);
    tmp_5.InsetRightWidth$delegate_1 = StyleVariable_0(tmp0_defaultFallback_5, 'silk');
  }
  protoOf(InputVars).get_BorderColor_hljtgy_k$ = function () {
    var tmp = KProperty1;
    return this.BorderColor$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('BorderColor', 1, tmp, InputVars$_get_BorderColor_$ref_2lp9kr(), null));
  };
  protoOf(InputVars).get_BorderRadius_tko1mv_k$ = function () {
    var tmp = KProperty1;
    return this.BorderRadius$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('BorderRadius', 1, tmp, InputVars$_get_BorderRadius_$ref_t6une2(), null));
  };
  protoOf(InputVars).get_BorderFocusColor_guhvfk_k$ = function () {
    var tmp = KProperty1;
    return this.BorderFocusColor$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('BorderFocusColor', 1, tmp, InputVars$_get_BorderFocusColor_$ref_h84gjz(), null));
  };
  protoOf(InputVars).get_BorderHoverColor_4uita4_k$ = function () {
    var tmp = KProperty1;
    return this.BorderHoverColor$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('BorderHoverColor', 1, tmp, InputVars$_get_BorderHoverColor_$ref_71bc0l(), null));
  };
  protoOf(InputVars).get_BorderInvalidColor_3xft0h_k$ = function () {
    var tmp = KProperty1;
    return this.BorderInvalidColor$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('BorderInvalidColor', 1, tmp, InputVars$_get_BorderInvalidColor_$ref_nnzjrk(), null));
  };
  protoOf(InputVars).get_ColorTransitionDuration_d6ufct_k$ = function () {
    var tmp = KProperty1;
    return this.ColorTransitionDuration$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('ColorTransitionDuration', 1, tmp, InputVars$_get_ColorTransitionDuration_$ref_bo92hm(), null));
  };
  protoOf(InputVars).get_FilledColor_27lcwo_k$ = function () {
    var tmp = KProperty1;
    return this.FilledColor$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('FilledColor', 1, tmp, InputVars$_get_FilledColor_$ref_xjpdgx(), null));
  };
  protoOf(InputVars).get_FilledHoverColor_z8l4su_k$ = function () {
    var tmp = KProperty1;
    return this.FilledHoverColor$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('FilledHoverColor', 1, tmp, InputVars$_get_FilledHoverColor_$ref_ae4fhd(), null));
  };
  protoOf(InputVars).get_FilledFocusColor_e3i8gm_k$ = function () {
    var tmp = KProperty1;
    return this.FilledFocusColor$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('FilledFocusColor', 1, tmp, InputVars$_get_FilledFocusColor_$ref_ynk81x(), null));
  };
  protoOf(InputVars).get_FontSize_oos3dz_k$ = function () {
    var tmp = KProperty1;
    return this.FontSize$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('FontSize', 1, tmp, InputVars$_get_FontSize_$ref_4vtdgo(), null));
  };
  protoOf(InputVars).get_Height_xmnjk_k$ = function () {
    var tmp = KProperty1;
    return this.Height$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('Height', 1, tmp, InputVars$_get_Height_$ref_qojn9d(), null));
  };
  protoOf(InputVars).get_Padding_fgkl54_k$ = function () {
    var tmp = KProperty1;
    return this.Padding$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('Padding', 1, tmp, InputVars$_get_Padding_$ref_z3xou9(), null));
  };
  protoOf(InputVars).get_PlaceholderOpacity_y4d5tt_k$ = function () {
    var tmp = KProperty1;
    return this.PlaceholderOpacity$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('PlaceholderOpacity', 1, tmp, InputVars$_get_PlaceholderOpacity_$ref_a9qjzk(), null));
  };
  protoOf(InputVars).get_PlaceholderColor_fqs0o7_k$ = function () {
    var tmp = KProperty1;
    return this.PlaceholderColor$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('PlaceholderColor', 1, tmp, InputVars$_get_PlaceholderColor_$ref_7qanko(), null));
  };
  protoOf(InputVars).get_InsetLeftWidth_8un9fv_k$ = function () {
    var tmp = KProperty1;
    return this.InsetLeftWidth$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('InsetLeftWidth', 1, tmp, InputVars$_get_InsetLeftWidth_$ref_ihrdie(), null));
  };
  protoOf(InputVars).get_InsetRightWidth_1gxxby_k$ = function () {
    var tmp = KProperty1;
    return this.InsetRightWidth$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('InsetRightWidth', 1, tmp, InputVars$_get_InsetRightWidth_$ref_9n16ff(), null));
  };
  var InputVars_instance;
  function InputVars_getInstance() {
    if (InputVars_instance == null)
      new InputVars();
    return InputVars_instance;
  }
  function inputPadding(_this__u8e3s4) {
    _init_properties_Input_kt__b04mg8();
    var padding = InputVars_getInstance().get_Padding_fgkl54_k$().value$default_36t2hw_k$();
    return paddingInline(_this__u8e3s4, padding, padding);
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.XS_1 = new InputSize(FontSizeVars_getInstance().get_XS_kntocc_k$().value$default_36t2hw_k$(), get_cssRem(1.25), get_cssRem(0.375), BorderRadiusVars_getInstance().get_XS_kntocc_k$().value$default_36t2hw_k$());
    this.SM_1 = new InputSize(FontSizeVars_getInstance().get_SM_kntogt_k$().value$default_36t2hw_k$(), get_cssRem(1.75), get_cssRem(0.5), BorderRadiusVars_getInstance().get_SM_kntogt_k$().value$default_36t2hw_k$());
    this.MD_1 = new InputSize(FontSizeVars_getInstance().get_MD_kntom8_k$().value$default_36t2hw_k$(), get_cssRem(2.25), get_cssRem(0.625), BorderRadiusVars_getInstance().get_MD_kntom8_k$().value$default_36t2hw_k$());
    this.LG_1 = new InputSize(FontSizeVars_getInstance().get_LG_knton0_k$().value$default_36t2hw_k$(), get_cssRem(2.5), get_cssRem(0.75), BorderRadiusVars_getInstance().get_MD_kntom8_k$().value$default_36t2hw_k$());
  }
  protoOf(Companion_2).get_XS_kntocc_k$ = function () {
    return this.XS_1;
  };
  protoOf(Companion_2).get_SM_kntogt_k$ = function () {
    return this.SM_1;
  };
  protoOf(Companion_2).get_MD_kntom8_k$ = function () {
    return this.MD_1;
  };
  protoOf(Companion_2).get_LG_knton0_k$ = function () {
    return this.LG_1;
  };
  var Companion_instance_2;
  function Companion_getInstance_24() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function InputSize(fontSize, height, padding, borderRadius) {
    Companion_getInstance_24();
    Base_init_$Init$(setVariable(setVariable(setVariable(setVariable(Companion_getInstance(), InputVars_getInstance().get_FontSize_oos3dz_k$(), fontSize), InputVars_getInstance().get_Height_xmnjk_k$(), height), InputVars_getInstance().get_Padding_fgkl54_k$(), padding), InputVars_getInstance().get_BorderRadius_tko1mv_k$(), borderRadius), VOID, this);
  }
  function InputGroupStyle$lambda($this$base) {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_getInstance();
    var tmp_0 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = outline(tmp, tmp_0, 'solid', Colors_getInstance().get_Transparent_cxh4g9_k$());
    var tmp_2 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return fontSize(borderRadius(border(tmp_1, tmp_2, 'solid', Colors_getInstance().get_Transparent_cxh4g9_k$()), InputVars_getInstance().get_BorderRadius_tko1mv_k$().value$default_36t2hw_k$()), InputVars_getInstance().get_FontSize_oos3dz_k$().value$default_36t2hw_k$());
  }
  function InputStyle$lambda($this$CssStyle) {
    _init_properties_Input_kt__b04mg8();
    $this$CssStyle.base_y8uu8g_k$(InputStyle$lambda$lambda);
    var tmp = get_placeholder($this$CssStyle);
    $this$CssStyle.invoke_9o9x0o_k$(tmp, InputStyle$lambda$lambda_0);
    return Unit_getInstance();
  }
  function InputStyle$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = backgroundColor(fontSize(height(color(appearance(Companion_getInstance(), Companion_getInstance_16().get_None_wo6tgh_k$()), get_ColorVar().value$default_36t2hw_k$()), InputVars_getInstance().get_Height_xmnjk_k$().value$default_36t2hw_k$()), InputVars_getInstance().get_FontSize_oos3dz_k$().value$default_36t2hw_k$()), Colors_getInstance().get_Transparent_cxh4g9_k$());
    var tmp_0 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = outline(tmp, tmp_0, 'solid', Colors_getInstance().get_Transparent_cxh4g9_k$());
    var tmp_2 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition(border(tmp_1, tmp_2, 'solid', Colors_getInstance().get_Transparent_cxh4g9_k$()), Companion_getInstance_2().group$default_78h45q_k$(listOf(['border-color', 'box-shadow', 'background-color']), InputVars_getInstance().get_ColorTransitionDuration_d6ufct_k$().value$default_36t2hw_k$()));
  }
  function InputStyle$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return color(opacity(Companion_getInstance(), InputVars_getInstance().get_PlaceholderOpacity_y4d5tt_k$().value$default_36t2hw_k$()), InputVars_getInstance().get_PlaceholderColor_fqs0o7_k$().value$default_36t2hw_k$());
  }
  function OutlinedInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.base_y8uu8g_k$(OutlinedInputVariant$lambda$lambda);
    var tmp = get_ariaInvalid($this$addVariant);
    $this$addVariant.invoke_9o9x0o_k$(tmp, OutlinedInputVariant$lambda$lambda_0);
    var tmp_0 = get_hover($this$addVariant).plus_99tjwk_k$(not($this$addVariant, [get_disabled($this$addVariant)]));
    $this$addVariant.invoke_9o9x0o_k$(tmp_0, OutlinedInputVariant$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).plus_99tjwk_k$(not($this$addVariant, [get_disabled($this$addVariant)]));
    $this$addVariant.invoke_9o9x0o_k$(tmp_1, OutlinedInputVariant$lambda$lambda_2);
    return Unit_getInstance();
  }
  function invoke$bordered(_this__u8e3s4, color) {
    var tmp = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return boxShadow_0(border(_this__u8e3s4, tmp, 'solid', color), VOID, VOID, VOID, get_px(1), color);
  }
  function OutlinedInputVariant$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = borderRadius(inputPadding(Companion_getInstance()), InputVars_getInstance().get_BorderRadius_tko1mv_k$().value$default_36t2hw_k$());
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return border(tmp, tmp_0, 'solid', InputVars_getInstance().get_BorderColor_hljtgy_k$().value$default_36t2hw_k$());
  }
  function OutlinedInputVariant$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered(Companion_getInstance(), InputVars_getInstance().get_BorderInvalidColor_3xft0h_k$().value$default_36t2hw_k$());
  }
  function OutlinedInputVariant$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_getInstance();
    return border_0(tmp, OutlinedInputVariant$lambda$lambda$lambda);
  }
  function OutlinedInputVariant$lambda$lambda$lambda($this$border) {
    _init_properties_Input_kt__b04mg8();
    $this$border.color_lesdgv_k$(InputVars_getInstance().get_BorderHoverColor_4uita4_k$().value$default_36t2hw_k$());
    return Unit_getInstance();
  }
  function OutlinedInputVariant$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered(Companion_getInstance(), InputVars_getInstance().get_BorderFocusColor_guhvfk_k$().value$default_36t2hw_k$());
  }
  function FilledInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.base_y8uu8g_k$(FilledInputVariant$lambda$lambda);
    var tmp = get_hover($this$addVariant).plus_99tjwk_k$(not($this$addVariant, [get_disabled($this$addVariant)]));
    $this$addVariant.invoke_9o9x0o_k$(tmp, FilledInputVariant$lambda$lambda_0);
    var tmp_0 = get_ariaInvalid($this$addVariant);
    $this$addVariant.invoke_9o9x0o_k$(tmp_0, FilledInputVariant$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).plus_99tjwk_k$(not($this$addVariant, [get_disabled($this$addVariant)]));
    $this$addVariant.invoke_9o9x0o_k$(tmp_1, FilledInputVariant$lambda$lambda_2);
    return Unit_getInstance();
  }
  function invoke$bordered_0(_this__u8e3s4, color) {
    return boxShadow_0(border_0(_this__u8e3s4, FilledInputVariant$lambda$bordered$lambda(color)), VOID, VOID, VOID, get_px(1), color);
  }
  function FilledInputVariant$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = borderRadius(backgroundColor(inputPadding(Companion_getInstance()), InputVars_getInstance().get_FilledColor_27lcwo_k$().value$default_36t2hw_k$()), InputVars_getInstance().get_BorderRadius_tko1mv_k$().value$default_36t2hw_k$());
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return border(tmp, tmp_0, 'solid', Colors_getInstance().get_Transparent_cxh4g9_k$());
  }
  function FilledInputVariant$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return backgroundColor(Companion_getInstance(), InputVars_getInstance().get_FilledHoverColor_z8l4su_k$().value$default_36t2hw_k$());
  }
  function FilledInputVariant$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_0(Companion_getInstance(), InputVars_getInstance().get_BorderInvalidColor_3xft0h_k$().value$default_36t2hw_k$());
  }
  function FilledInputVariant$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_0(backgroundColor(Companion_getInstance(), InputVars_getInstance().get_FilledFocusColor_e3i8gm_k$().value$default_36t2hw_k$()), InputVars_getInstance().get_BorderFocusColor_guhvfk_k$().value$default_36t2hw_k$());
  }
  function FilledInputVariant$lambda$bordered$lambda($color) {
    return function ($this$border) {
      $this$border.color_lesdgv_k$($color);
      return Unit_getInstance();
    };
  }
  function FlushedInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.base_y8uu8g_k$(FlushedInputVariant$lambda$lambda);
    var tmp = get_ariaInvalid($this$addVariant);
    $this$addVariant.invoke_9o9x0o_k$(tmp, FlushedInputVariant$lambda$lambda_0);
    var tmp_0 = get_hover($this$addVariant).plus_99tjwk_k$(not($this$addVariant, [get_disabled($this$addVariant)]));
    $this$addVariant.invoke_9o9x0o_k$(tmp_0, FlushedInputVariant$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).plus_99tjwk_k$(not($this$addVariant, [get_disabled($this$addVariant)]));
    $this$addVariant.invoke_9o9x0o_k$(tmp_1, FlushedInputVariant$lambda$lambda_2);
    return Unit_getInstance();
  }
  function invoke$bordered_1(_this__u8e3s4, color) {
    return boxShadow_0(border_0(_this__u8e3s4, FlushedInputVariant$lambda$bordered$lambda(color)), VOID, get_px(1), VOID, VOID, color);
  }
  function FlushedInputVariant$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_getInstance();
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp, tmp_0, 'solid', InputVars_getInstance().get_BorderColor_hljtgy_k$().value$default_36t2hw_k$());
  }
  function FlushedInputVariant$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_1(Companion_getInstance(), InputVars_getInstance().get_BorderInvalidColor_3xft0h_k$().value$default_36t2hw_k$());
  }
  function FlushedInputVariant$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_getInstance();
    return border_0(tmp, FlushedInputVariant$lambda$lambda$lambda);
  }
  function FlushedInputVariant$lambda$lambda$lambda($this$border) {
    _init_properties_Input_kt__b04mg8();
    $this$border.color_lesdgv_k$(InputVars_getInstance().get_BorderHoverColor_4uita4_k$().value$default_36t2hw_k$());
    return Unit_getInstance();
  }
  function FlushedInputVariant$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_1(Companion_getInstance(), InputVars_getInstance().get_BorderFocusColor_guhvfk_k$().value$default_36t2hw_k$());
  }
  function FlushedInputVariant$lambda$bordered$lambda($color) {
    return function ($this$border) {
      $this$border.color_lesdgv_k$($color);
      return Unit_getInstance();
    };
  }
  function UnstyledInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    return Unit_getInstance();
  }
  var properties_initialized_Input_kt_tklayu;
  function _init_properties_Input_kt__b04mg8() {
    if (!properties_initialized_Input_kt_tklayu) {
      properties_initialized_Input_kt_tklayu = true;
      var tmp = whiteSpace(overflow_0(clip(padding(margin_1(size(border(Companion_getInstance(), get_px(0)), get_px(1)), get_px(-1)), get_px(0)), RectF_init_$Create$(50.0)), Companion_getInstance_4().get_Hidden_viqel_k$()), Companion_getInstance_13().get_NoWrap_21tqz8_k$());
      // Inline function 'org.jetbrains.compose.web.css.Companion.Absolute' call
      Companion_getInstance_15();
      // Inline function 'org.jetbrains.compose.web.css.Position' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$3 = 'absolute';
      HiddenInputModifier = position(tmp, tmp$ret$3);
      var tmp_0 = Companion_getInstance_5();
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
  function Track() {
  }
  function Thumb() {
  }
  function SwitchKind() {
  }
  function SwitchVars$_get_BorderRadius_$ref_6ja2gw() {
    return function (p0) {
      return p0.get_BorderRadius_tko1mv_k$();
    };
  }
  function SwitchVars$_get_TrackWidth_$ref_ivpddp() {
    return function (p0) {
      return p0.get_TrackWidth_vulqlg_k$();
    };
  }
  function SwitchVars$_get_TrackHeight_$ref_eiptze() {
    return function (p0) {
      return p0.get_TrackHeight_e8ng3b_k$();
    };
  }
  function SwitchVars$_get_TrackPadding_$ref_d8tr4o() {
    return function (p0) {
      return p0.get_TrackPadding_t5kbzj_k$();
    };
  }
  function SwitchVars$_get_TrackBackgroundColor_$ref_jnuze4() {
    return function (p0) {
      return p0.get_TrackBackgroundColor_6g6jkd_k$();
    };
  }
  function SwitchVars$_get_FocusColor_$ref_72ulnx() {
    return function (p0) {
      return p0.get_FocusColor_4uzwmk_k$();
    };
  }
  function SwitchVars$_get_ThumbOffset_$ref_5e86z1() {
    return function (p0) {
      return p0.get_ThumbOffset_629rpc_k$();
    };
  }
  function SwitchVars$_get_ThumbColor_$ref_jy53rl() {
    return function (p0) {
      return p0.get_ThumbColor_g0t1d6_k$();
    };
  }
  function SwitchVars$_get_TransitionDuration_$ref_o1aprp() {
    return function (p0) {
      return p0.get_TransitionDuration_6zl6by_k$();
    };
  }
  function SwitchVars() {
    SwitchVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_px(9999);
    tmp.BorderRadius$delegate_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.TrackWidth$delegate_1 = StyleVariable('silk');
    this.TrackHeight$delegate_1 = StyleVariable('silk');
    this.TrackPadding$delegate_1 = StyleVariable('silk');
    this.TrackBackgroundColor$delegate_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_FocusOutlineColorVar().value$default_36t2hw_k$();
    tmp_0.FocusColor$delegate_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    this.ThumbOffset$delegate_1 = StyleVariable('silk');
    this.ThumbColor$delegate_1 = StyleVariable('silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().get_Fast_wo1fb9_k$().value$default_36t2hw_k$();
    tmp_1.TransitionDuration$delegate_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
  }
  protoOf(SwitchVars).get_BorderRadius_tko1mv_k$ = function () {
    var tmp = KProperty1;
    return this.BorderRadius$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('BorderRadius', 1, tmp, SwitchVars$_get_BorderRadius_$ref_6ja2gw(), null));
  };
  protoOf(SwitchVars).get_TrackWidth_vulqlg_k$ = function () {
    var tmp = KProperty1;
    return this.TrackWidth$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('TrackWidth', 1, tmp, SwitchVars$_get_TrackWidth_$ref_ivpddp(), null));
  };
  protoOf(SwitchVars).get_TrackHeight_e8ng3b_k$ = function () {
    var tmp = KProperty1;
    return this.TrackHeight$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('TrackHeight', 1, tmp, SwitchVars$_get_TrackHeight_$ref_eiptze(), null));
  };
  protoOf(SwitchVars).get_TrackPadding_t5kbzj_k$ = function () {
    var tmp = KProperty1;
    return this.TrackPadding$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('TrackPadding', 1, tmp, SwitchVars$_get_TrackPadding_$ref_d8tr4o(), null));
  };
  protoOf(SwitchVars).get_TrackBackgroundColor_6g6jkd_k$ = function () {
    var tmp = KProperty1;
    return this.TrackBackgroundColor$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('TrackBackgroundColor', 1, tmp, SwitchVars$_get_TrackBackgroundColor_$ref_jnuze4(), null));
  };
  protoOf(SwitchVars).get_FocusColor_4uzwmk_k$ = function () {
    var tmp = KProperty1;
    return this.FocusColor$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('FocusColor', 1, tmp, SwitchVars$_get_FocusColor_$ref_72ulnx(), null));
  };
  protoOf(SwitchVars).get_ThumbOffset_629rpc_k$ = function () {
    var tmp = KProperty1;
    return this.ThumbOffset$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('ThumbOffset', 1, tmp, SwitchVars$_get_ThumbOffset_$ref_5e86z1(), null));
  };
  protoOf(SwitchVars).get_ThumbColor_g0t1d6_k$ = function () {
    var tmp = KProperty1;
    return this.ThumbColor$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('ThumbColor', 1, tmp, SwitchVars$_get_ThumbColor_$ref_jy53rl(), null));
  };
  protoOf(SwitchVars).get_TransitionDuration_6zl6by_k$ = function () {
    var tmp = KProperty1;
    return this.TransitionDuration$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('TransitionDuration', 1, tmp, SwitchVars$_get_TransitionDuration_$ref_o1aprp(), null));
  };
  var SwitchVars_instance;
  function SwitchVars_getInstance() {
    if (SwitchVars_instance == null)
      new SwitchVars();
    return SwitchVars_instance;
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.SM_1 = new SwitchSize(get_cssRem(1.375), get_cssRem(0.75));
    this.MD_1 = new SwitchSize(get_cssRem(1.875), get_cssRem(1));
    this.LG_1 = new SwitchSize(get_cssRem(2.875), get_cssRem(1.5));
  }
  protoOf(Companion_3).get_SM_kntogt_k$ = function () {
    return this.SM_1;
  };
  protoOf(Companion_3).get_MD_kntom8_k$ = function () {
    return this.MD_1;
  };
  protoOf(Companion_3).get_LG_knton0_k$ = function () {
    return this.LG_1;
  };
  var Companion_instance_3;
  function Companion_getInstance_25() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function SwitchSize(width, height, padding) {
    Companion_getInstance_25();
    padding = padding === VOID ? get_cssRem(0.188) : padding;
    Base_init_$Init$(setVariable(setVariable(setVariable(Companion_getInstance(), SwitchVars_getInstance().get_TrackWidth_vulqlg_k$(), width), SwitchVars_getInstance().get_TrackHeight_e8ng3b_k$(), height), SwitchVars_getInstance().get_TrackPadding_t5kbzj_k$(), padding), VOID, this);
  }
  function SwitchStyle$lambda($this$base) {
    _init_properties_Switch_kt__dwcqr0();
    var tmp = Companion_getInstance();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    Companion_getInstance_15();
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'relative';
    return position(tmp, tmp$ret$3);
  }
  function SwitchTrackStyle$lambda($this$CssStyle) {
    _init_properties_Switch_kt__dwcqr0();
    $this$CssStyle.base_y8uu8g_k$(SwitchTrackStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle).plus_99tjwk_k$(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    $this$CssStyle.invoke_9o9x0o_k$(tmp, SwitchTrackStyle$lambda$lambda_0);
    return Unit_getInstance();
  }
  function SwitchTrackStyle$lambda$lambda() {
    _init_properties_Switch_kt__dwcqr0();
    return boxSizing(transition_0(backgroundColor(borderRadius(padding(minHeight(height(minWidth(width(Companion_getInstance(), SwitchVars_getInstance().get_TrackWidth_vulqlg_k$().value$default_36t2hw_k$()), SwitchVars_getInstance().get_TrackWidth_vulqlg_k$().value$default_36t2hw_k$()), SwitchVars_getInstance().get_TrackHeight_e8ng3b_k$().value$default_36t2hw_k$()), SwitchVars_getInstance().get_TrackHeight_e8ng3b_k$().value$default_36t2hw_k$()), SwitchVars_getInstance().get_TrackPadding_t5kbzj_k$().value$default_36t2hw_k$()), SwitchVars_getInstance().get_BorderRadius_tko1mv_k$().value$default_36t2hw_k$()), SwitchVars_getInstance().get_TrackBackgroundColor_6g6jkd_k$().value$default_36t2hw_k$()), [Companion_getInstance_2().of$default_ehijui_k$('background-color', SwitchVars_getInstance().get_TransitionDuration_6zl6by_k$().value$default_36t2hw_k$())]), Companion_getInstance_17().get_ContentBox_h63h2z_k$());
  }
  function SwitchTrackStyle$lambda$lambda_0() {
    _init_properties_Switch_kt__dwcqr0();
    return cursor(Companion_getInstance(), Companion_getInstance_1().get_Pointer_m64vg4_k$());
  }
  function SwitchInputVariant$lambda($this$addVariant) {
    _init_properties_Switch_kt__dwcqr0();
    $this$addVariant.base_y8uu8g_k$(SwitchInputVariant$lambda$lambda);
    $this$addVariant.cssRule_fe6cwq_k$(':focus-visible + *', SwitchInputVariant$lambda$lambda_0);
    return Unit_getInstance();
  }
  function SwitchInputVariant$lambda$lambda() {
    _init_properties_Switch_kt__dwcqr0();
    return get_HiddenInputModifier();
  }
  function SwitchInputVariant$lambda$lambda_0() {
    _init_properties_Switch_kt__dwcqr0();
    return boxShadow_0(Companion_getInstance(), VOID, VOID, VOID, get_cssRem(0.1875), SwitchVars_getInstance().get_FocusColor_4uzwmk_k$().value$default_36t2hw_k$());
  }
  function SwitchThumbStyle$lambda($this$base) {
    _init_properties_Switch_kt__dwcqr0();
    return transition_0(translateX(backgroundColor(borderRadius(size(Companion_getInstance(), SwitchVars_getInstance().get_TrackHeight_e8ng3b_k$().value$default_36t2hw_k$()), SwitchVars_getInstance().get_BorderRadius_tko1mv_k$().value$default_36t2hw_k$()), SwitchVars_getInstance().get_ThumbColor_g0t1d6_k$().value$default_36t2hw_k$()), SwitchVars_getInstance().get_ThumbOffset_629rpc_k$().value$default_36t2hw_k$()), [Companion_getInstance_2().of$default_ehijui_k$('translate', SwitchVars_getInstance().get_TransitionDuration_6zl6by_k$().value$default_36t2hw_k$())]);
  }
  var properties_initialized_Switch_kt_7kkg8m;
  function _init_properties_Switch_kt__dwcqr0() {
    if (!properties_initialized_Switch_kt_7kkg8m) {
      properties_initialized_Switch_kt_7kkg8m = true;
      var tmp = Companion_getInstance_5();
      SwitchStyle = base(tmp, VOID, SwitchStyle$lambda);
      var tmp_0 = ariaHidden(tabIndex(Companion_getInstance(), -1));
      SwitchTrackStyle = CssStyle(tmp_0, SwitchTrackStyle$lambda);
      var tmp_1 = get_InputStyle();
      SwitchInputVariant = addVariant(tmp_1, VOID, SwitchInputVariant$lambda);
      var tmp_2 = Companion_getInstance_5();
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
  function CanvasKind() {
  }
  function CanvasStyle$lambda($this$CssStyle) {
    _init_properties_Canvas_kt__g1lz20();
    return Unit_getInstance();
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
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1482883947);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 3) === 2), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      var tmp = Companion_getInstance_18().sized$default_id0xg9_k$(16);
      createIcon(tmp, null, new Fill(), toAttrs(modifier_0._v), ComposableSingletons$ExclaimIconKt_getInstance().lambda$_675482057_6ftiw8__1, $composer_0, 24576 | com_varabyte_kobweb_compose_dom_svg_ViewBox$stableprop_getter(), 2);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(ExclaimIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_7(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$ExclaimIconKt$lambda$_675482057$lambda_ieignf($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false || it === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
      var value = ComposableSingletons$ExclaimIconKt$lambda$_675482057$lambda$lambda_6t7l8g;
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    Path($this$createIcon, tmp$ret$3, $composer_0, 48 | 14 & $changed);
    return Unit_getInstance();
  }
  function ComposableSingletons$ExclaimIconKt$lambda$_675482057$lambda$lambda_6t7l8g($this$Path) {
    $this$Path.d_e5qqiu_k$('M 0 1.75 C 0 0.784 0.784 0 1.75 0 h 12.5 C 15.216 0 16 0.784 16 1.75 v 9.5 A 1.75 1.75 0 0 1 14.25 13 H 8.06 l -2.573 2.573 A 1.458 1.458 0 0 1 3 14.543 V 13 H 1.75 A 1.75 1.75 0 0 1 0 11.25 Z m 1.75 -0.25 a 0.25 0.25 0 0 0 -0.25 0.25 v 9.5 c 0 0.138 0.112 0.25 0.25 0.25 h 2 a 0.75 0.75 0 0 1 0.75 0.75 v 2.19 l 2.72 -2.72 a 0.749 0.749 0 0 1 0.53 -0.22 h 6.5 a 0.25 0.25 0 0 0 0.25 -0.25 v -9.5 a 0.25 0.25 0 0 0 -0.25 -0.25 Z m 7 2.25 v 2.5 a 0.75 0.75 0 0 1 -1.5 0 v -2.5 a 0.75 0.75 0 0 1 1.5 0 Z M 9 9 a 1 1 0 1 1 -2 0 a 1 1 0 0 1 2 0 Z');
    return Unit_getInstance();
  }
  function ComposableSingletons$ExclaimIconKt() {
    ComposableSingletons$ExclaimIconKt_instance = this;
    var tmp = this;
    tmp.lambda$_675482057_6ftiw8__1 = ComposableLambda$invoke$ref_7(composableLambdaInstance(-675482057, false, ComposableSingletons$ExclaimIconKt$lambda$_675482057$lambda_ieignf));
  }
  protoOf(ComposableSingletons$ExclaimIconKt).get_lambda$_675482057_mu59cs_k$ = function () {
    return this.lambda$_675482057_6ftiw8__1;
  };
  var ComposableSingletons$ExclaimIconKt_instance;
  function ComposableSingletons$ExclaimIconKt_getInstance() {
    if (ComposableSingletons$ExclaimIconKt_instance == null)
      new ComposableSingletons$ExclaimIconKt();
    return ComposableSingletons$ExclaimIconKt_instance;
  }
  function ExclaimIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      ExclaimIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function InfoIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(197779673);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 3) === 2), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      var tmp = Companion_getInstance_18().sized$default_id0xg9_k$(16);
      createIcon(tmp, null, new Fill(), toAttrs(modifier_0._v), ComposableSingletons$InfoIconKt_getInstance().lambda$_954934107_b7f89m_1, $composer_0, 24576 | com_varabyte_kobweb_compose_dom_svg_ViewBox$stableprop_getter(), 2);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(InfoIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_8(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$InfoIconKt$lambda$_954934107$lambda_jf0t4a($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false || it === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
      var value = ComposableSingletons$InfoIconKt$lambda$_954934107$lambda$lambda_hfr7b3;
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    Path($this$createIcon, tmp$ret$3, $composer_0, 48 | 14 & $changed);
    return Unit_getInstance();
  }
  function ComposableSingletons$InfoIconKt$lambda$_954934107$lambda$lambda_hfr7b3($this$Path) {
    $this$Path.d_e5qqiu_k$('M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z');
    return Unit_getInstance();
  }
  function ComposableSingletons$InfoIconKt() {
    ComposableSingletons$InfoIconKt_instance = this;
    var tmp = this;
    tmp.lambda$_954934107_b7f89m_1 = ComposableLambda$invoke$ref_8(composableLambdaInstance(-954934107, false, ComposableSingletons$InfoIconKt$lambda$_954934107$lambda_jf0t4a));
  }
  protoOf(ComposableSingletons$InfoIconKt).get_lambda$_954934107_8i6b8m_k$ = function () {
    return this.lambda$_954934107_b7f89m_1;
  };
  var ComposableSingletons$InfoIconKt_instance;
  function ComposableSingletons$InfoIconKt_getInstance() {
    if (ComposableSingletons$InfoIconKt_instance == null)
      new ComposableSingletons$InfoIconKt();
    return ComposableSingletons$InfoIconKt_instance;
  }
  function InfoIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      InfoIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function LightbulbIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1309236181);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 3) === 2), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      var tmp = Companion_getInstance_18().sized$default_id0xg9_k$(16);
      createIcon(tmp, null, new Fill(), toAttrs(modifier_0._v), ComposableSingletons$LightbulbIconKt_getInstance().lambda$977424631__1, $composer_0, 24576 | com_varabyte_kobweb_compose_dom_svg_ViewBox$stableprop_getter(), 2);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(LightbulbIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_9(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$LightbulbIconKt$lambda$977424631$lambda($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false || it === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
      var value = ComposableSingletons$LightbulbIconKt$lambda$977424631$lambda$lambda;
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    Path($this$createIcon, tmp$ret$3, $composer_0, 48 | 14 & $changed);
    return Unit_getInstance();
  }
  function ComposableSingletons$LightbulbIconKt$lambda$977424631$lambda$lambda($this$Path) {
    $this$Path.d_e5qqiu_k$('M 8 1.5 c -2.363 0 -4 1.69 -4 3.75 c 0 0.984 0.424 1.625 0.984 2.304 l 0.214 0.253 c 0.223 0.264 0.47 0.556 0.673 0.848 c 0.284 0.411 0.537 0.896 0.621 1.49 a 0.75 0.75 0 0 1 -1.484 0.211 c -0.04 -0.282 -0.163 -0.547 -0.37 -0.847 a 8.456 8.456 0 0 0 -0.542 -0.68 c -0.084 -0.1 -0.173 -0.205 -0.268 -0.32 C 3.201 7.75 2.5 6.766 2.5 5.25 C 2.5 2.31 4.863 0 8 0 s 5.5 2.31 5.5 5.25 c 0 1.516 -0.701 2.5 -1.328 3.259 c -0.095 0.115 -0.184 0.22 -0.268 0.319 c -0.207 0.245 -0.383 0.453 -0.541 0.681 c -0.208 0.3 -0.33 0.565 -0.37 0.847 a 0.751 0.751 0 0 1 -1.485 -0.212 c 0.084 -0.593 0.337 -1.078 0.621 -1.489 c 0.203 -0.292 0.45 -0.584 0.673 -0.848 c 0.075 -0.088 0.147 -0.173 0.213 -0.253 c 0.561 -0.679 0.985 -1.32 0.985 -2.304 c 0 -2.06 -1.637 -3.75 -4 -3.75 Z M 5.75 12 h 4.5 a 0.75 0.75 0 0 1 0 1.5 h -4.5 a 0.75 0.75 0 0 1 0 -1.5 Z M 6 15.25 a 0.75 0.75 0 0 1 0.75 -0.75 h 2.5 a 0.75 0.75 0 0 1 0 1.5 h -2.5 a 0.75 0.75 0 0 1 -0.75 -0.75 Z');
    return Unit_getInstance();
  }
  function ComposableSingletons$LightbulbIconKt() {
    ComposableSingletons$LightbulbIconKt_instance = this;
    var tmp = this;
    tmp.lambda$977424631__1 = ComposableLambda$invoke$ref_9(composableLambdaInstance(977424631, false, ComposableSingletons$LightbulbIconKt$lambda$977424631$lambda));
  }
  protoOf(ComposableSingletons$LightbulbIconKt).get_lambda$977424631_lpp37k_k$ = function () {
    return this.lambda$977424631__1;
  };
  var ComposableSingletons$LightbulbIconKt_instance;
  function ComposableSingletons$LightbulbIconKt_getInstance() {
    if (ComposableSingletons$LightbulbIconKt_instance == null)
      new ComposableSingletons$LightbulbIconKt();
    return ComposableSingletons$LightbulbIconKt_instance;
  }
  function LightbulbIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      LightbulbIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function QuestionIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1830362903);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 3) === 2), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      createIcon(null, null, new Stroke(2), toAttrs(modifier_0._v), ComposableSingletons$QuestionIconKt_getInstance().lambda$_1550888779_3y5rg0__1, $composer_0, 24576, 3);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(QuestionIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_10(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$QuestionIconKt$lambda$_1550888779$lambda_b59ksy($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false || it === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
      var value = ComposableSingletons$QuestionIconKt$lambda$_1550888779$lambda$lambda_qvstoj;
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    Path($this$createIcon, tmp$ret$3, $composer_0, 48 | 14 & $changed);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it_0 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_1;
    if (false || it_0 === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
      var value_0 = ComposableSingletons$QuestionIconKt$lambda$_1550888779$lambda$lambda_qvstoj_0;
      $composer_0.updateRememberedValue_l1wh71_k$(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp$ret$7 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    Path($this$createIcon, tmp$ret$7, $composer_0, 48 | 14 & $changed);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it_1 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_3;
    if (false || it_1 === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
      var value_1 = ComposableSingletons$QuestionIconKt$lambda$_1550888779$lambda$lambda_qvstoj_1;
      $composer_0.updateRememberedValue_l1wh71_k$(value_1);
      tmp_3 = value_1;
    } else {
      tmp_3 = it_1;
    }
    var tmp_4 = tmp_3;
    var tmp$ret$11 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
    Circle($this$createIcon, tmp$ret$11, $composer_0, 48 | 14 & $changed);
    return Unit_getInstance();
  }
  function ComposableSingletons$QuestionIconKt$lambda$_1550888779$lambda$lambda_qvstoj($this$Path) {
    $this$Path.strokeLineCap_j27fru_k$(SVGStrokeLineCap_Round_getInstance());
    $this$Path.d_e5qqiu_k$('M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25');
    return Unit_getInstance();
  }
  function ComposableSingletons$QuestionIconKt$lambda$_1550888779$lambda$lambda_qvstoj_0($this$Path) {
    $this$Path.strokeLineCap_j27fru_k$(SVGStrokeLineCap_Round_getInstance());
    $this$Path.d_e5qqiu_k$('M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0');
    return Unit_getInstance();
  }
  function ComposableSingletons$QuestionIconKt$lambda$_1550888779$lambda$lambda_qvstoj_1($this$Circle) {
    $this$Circle.strokeMiterLimit_cvov7h_k$(10);
    $this$Circle.cx_7c4b4q_k$(12);
    $this$Circle.cy_5a8zln_k$(12);
    $this$Circle.r_4ompmx_k$(11.25);
    return Unit_getInstance();
  }
  function ComposableSingletons$QuestionIconKt() {
    ComposableSingletons$QuestionIconKt_instance = this;
    var tmp = this;
    tmp.lambda$_1550888779_3y5rg0__1 = ComposableLambda$invoke$ref_10(composableLambdaInstance(-1550888779, false, ComposableSingletons$QuestionIconKt$lambda$_1550888779$lambda_b59ksy));
  }
  protoOf(ComposableSingletons$QuestionIconKt).get_lambda$_1550888779_yd0oly_k$ = function () {
    return this.lambda$_1550888779_3y5rg0__1;
  };
  var ComposableSingletons$QuestionIconKt_instance;
  function ComposableSingletons$QuestionIconKt_getInstance() {
    if (ComposableSingletons$QuestionIconKt_instance == null)
      new ComposableSingletons$QuestionIconKt();
    return ComposableSingletons$QuestionIconKt_instance;
  }
  function QuestionIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      QuestionIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function QuoteIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1516926133);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 3) === 2), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      var tmp = Companion_getInstance_18().sized$default_id0xg9_k$(300);
      createIcon(tmp, null, new Fill(), toAttrs(modifier_0._v), ComposableSingletons$QuoteIconKt_getInstance().lambda$_1173306345_9m1nqf_1, $composer_0, 24576 | com_varabyte_kobweb_compose_dom_svg_ViewBox$stableprop_getter(), 2);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(QuoteIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_11(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$QuoteIconKt$lambda$_1173306345$lambda_5akkrz($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false || it === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
      var value = ComposableSingletons$QuoteIconKt$lambda$_1173306345$lambda$lambda_1v3ns4;
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    Path($this$createIcon, tmp$ret$3, $composer_0, 48 | 14 & $changed);
    return Unit_getInstance();
  }
  function ComposableSingletons$QuoteIconKt$lambda$_1173306345$lambda$lambda_1v3ns4($this$Path) {
    $this$Path.d_e5qqiu_k$('m175.6 204.73 22.19 46.49C258.61 223.15 278 189.49 278 151.18V48.78H175.6v102.4h51.2c0 15.64-12.42 35.66-51.2 53.55zm-153.6 0 22.19 46.49c60.83-28.07 80.21-61.73 80.21-100.04V48.78H22v102.4h51.2c0 15.64-12.42 35.66-51.2 53.55z');
    return Unit_getInstance();
  }
  function ComposableSingletons$QuoteIconKt() {
    ComposableSingletons$QuoteIconKt_instance = this;
    var tmp = this;
    tmp.lambda$_1173306345_9m1nqf_1 = ComposableLambda$invoke$ref_11(composableLambdaInstance(-1173306345, false, ComposableSingletons$QuoteIconKt$lambda$_1173306345$lambda_5akkrz));
  }
  protoOf(ComposableSingletons$QuoteIconKt).get_lambda$_1173306345_y0bmnn_k$ = function () {
    return this.lambda$_1173306345_9m1nqf_1;
  };
  var ComposableSingletons$QuoteIconKt_instance;
  function ComposableSingletons$QuoteIconKt_getInstance() {
    if (ComposableSingletons$QuoteIconKt_instance == null)
      new ComposableSingletons$QuoteIconKt();
    return ComposableSingletons$QuoteIconKt_instance;
  }
  function QuoteIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      QuoteIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function StopIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(637478449);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 3) === 2), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      var tmp = Companion_getInstance_18().sized$default_id0xg9_k$(16);
      createIcon(tmp, null, new Fill(), toAttrs(modifier_0._v), ComposableSingletons$StopIconKt_getInstance().lambda$_515235331_4fmkna_1, $composer_0, 24576 | com_varabyte_kobweb_compose_dom_svg_ViewBox$stableprop_getter(), 2);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(StopIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_12(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$StopIconKt$lambda$_515235331$lambda_6se70q($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false || it === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
      var value = ComposableSingletons$StopIconKt$lambda$_515235331$lambda$lambda_u1w1jf;
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    Path($this$createIcon, tmp$ret$3, $composer_0, 48 | 14 & $changed);
    return Unit_getInstance();
  }
  function ComposableSingletons$StopIconKt$lambda$_515235331$lambda$lambda_u1w1jf($this$Path) {
    $this$Path.d_e5qqiu_k$('M 4.47 0.22 A 0.749 0.749 0 0 1 5 0 h 6 c 0.199 0 0.389 0.079 0.53 0.22 l 4.25 4.25 c 0.141 0.14 0.22 0.331 0.22 0.53 v 6 a 0.749 0.749 0 0 1 -0.22 0.53 l -4.25 4.25 A 0.749 0.749 0 0 1 11 16 H 5 a 0.749 0.749 0 0 1 -0.53 -0.22 L 0.22 11.53 A 0.749 0.749 0 0 1 0 11 V 5 c 0 -0.199 0.079 -0.389 0.22 -0.53 Z m 0.84 1.28 L 1.5 5.31 v 5.38 l 3.81 3.81 h 5.38 l 3.81 -3.81 V 5.31 L 10.69 1.5 Z M 8 4 a 0.75 0.75 0 0 1 0.75 0.75 v 3.5 a 0.75 0.75 0 0 1 -1.5 0 v -3.5 A 0.75 0.75 0 0 1 8 4 Z m 0 8 a 1 1 0 1 1 0 -2 a 1 1 0 0 1 0 2 Z');
    return Unit_getInstance();
  }
  function ComposableSingletons$StopIconKt() {
    ComposableSingletons$StopIconKt_instance = this;
    var tmp = this;
    tmp.lambda$_515235331_4fmkna_1 = ComposableLambda$invoke$ref_12(composableLambdaInstance(-515235331, false, ComposableSingletons$StopIconKt$lambda$_515235331$lambda_6se70q));
  }
  protoOf(ComposableSingletons$StopIconKt).get_lambda$_515235331_a2hqyu_k$ = function () {
    return this.lambda$_515235331_4fmkna_1;
  };
  var ComposableSingletons$StopIconKt_instance;
  function ComposableSingletons$StopIconKt_getInstance() {
    if (ComposableSingletons$StopIconKt_instance == null)
      new ComposableSingletons$StopIconKt();
    return ComposableSingletons$StopIconKt_instance;
  }
  function StopIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      StopIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function WarningIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1461404811);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 3) === 2), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      var tmp = Companion_getInstance_18().sized$default_id0xg9_k$(16);
      createIcon(tmp, null, new Fill(), toAttrs(modifier_0._v), ComposableSingletons$WarningIconKt_getInstance().lambda$_696961193_a2glwa_1, $composer_0, 24576 | com_varabyte_kobweb_compose_dom_svg_ViewBox$stableprop_getter(), 2);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(WarningIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_13(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$WarningIconKt$lambda$_696961193$lambda_qp68sm($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false || it === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
      var value = ComposableSingletons$WarningIconKt$lambda$_696961193$lambda$lambda_cg9gpn;
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    Path($this$createIcon, tmp$ret$3, $composer_0, 48 | 14 & $changed);
    return Unit_getInstance();
  }
  function ComposableSingletons$WarningIconKt$lambda$_696961193$lambda$lambda_cg9gpn($this$Path) {
    $this$Path.d_e5qqiu_k$('M 6.457 1.047 c 0.659 -1.234 2.427 -1.234 3.086 0 l 6.082 11.378 A 1.75 1.75 0 0 1 14.082 15 H 1.918 a 1.75 1.75 0 0 1 -1.543 -2.575 Z m 1.763 0.707 a 0.25 0.25 0 0 0 -0.44 0 L 1.698 13.132 a 0.25 0.25 0 0 0 0.22 0.368 h 12.164 a 0.25 0.25 0 0 0 0.22 -0.368 Z m 0.53 3.996 v 2.5 a 0.75 0.75 0 0 1 -1.5 0 v -2.5 a 0.75 0.75 0 0 1 1.5 0 Z M 9 11 a 1 1 0 1 1 -2 0 a 1 1 0 0 1 2 0 Z');
    return Unit_getInstance();
  }
  function ComposableSingletons$WarningIconKt() {
    ComposableSingletons$WarningIconKt_instance = this;
    var tmp = this;
    tmp.lambda$_696961193_a2glwa_1 = ComposableLambda$invoke$ref_13(composableLambdaInstance(-696961193, false, ComposableSingletons$WarningIconKt$lambda$_696961193$lambda_qp68sm));
  }
  protoOf(ComposableSingletons$WarningIconKt).get_lambda$_696961193_9c7gni_k$ = function () {
    return this.lambda$_696961193_a2glwa_1;
  };
  var ComposableSingletons$WarningIconKt_instance;
  function ComposableSingletons$WarningIconKt_getInstance() {
    if (ComposableSingletons$WarningIconKt_instance == null)
      new ComposableSingletons$WarningIconKt();
    return ComposableSingletons$WarningIconKt_instance;
  }
  function WarningIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      WarningIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
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
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1506534634);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | (($default & 1) === 0 && (($changed & 8) === 0 ? $composer_0.changed_ga7h3f_k$(viewBox_0._v) : $composer_0.changedInstance_s1wkiy_k$(viewBox_0._v)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | (($default & 2) === 0 && $composer_0.changedInstance_s1wkiy_k$(width_0._v) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | (($default & 4) === 0 && (($changed & 512) === 0 ? $composer_0.changed_ga7h3f_k$(renderStyle_0._v) : $composer_0.changedInstance_s1wkiy_k$(renderStyle_0._v)) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs_0._v) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 16384 : 8192);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 9363) === 9362), $dirty & 1)) {
      $composer_0.startDefaults_g83kzo_k$();
      if (($changed & 1) === 0 || $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 1) === 0)) {
          viewBox_0._v = Companion_getInstance_18().sized$default_id0xg9_k$(24);
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
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.endDefaults_b0s0ot_k$();
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!(!!($composer_0.changedInstance_s1wkiy_k$(width_0._v) | (($dirty & 14 ^ 6) > 4 && $composer_0.changedInstance_s1wkiy_k$(viewBox_0._v) || ($dirty & 6) === 4)) | (($dirty & 896 ^ 384) > 256 && $composer_0.changedInstance_s1wkiy_k$(renderStyle_0._v) || ($dirty & 384) === 256)) | ($dirty & 7168) === 2048);
      // Inline function 'kotlin.let' call
      var it = tmp0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
        var value = createIcon$lambda(width_0, viewBox_0, renderStyle_0, attrs_0);
        tmp0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      Svg(tmp$ret$3, content, $composer_0, 112 & $dirty >> 9, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(createIcon$lambda_0(viewBox_0, width_0, renderStyle_0, attrs_0, content, $changed, $default));
    }
  }
  function Fill() {
  }
  function Stroke(strokeWidth) {
    strokeWidth = strokeWidth === VOID ? null : strokeWidth;
    this.strokeWidth_1 = strokeWidth;
  }
  protoOf(Stroke).get_strokeWidth_pbded7_k$ = function () {
    return this.strokeWidth_1;
  };
  function IconRenderStyle() {
  }
  function createIcon$lambda$lambda($this$style) {
    overflow_1($this$style, Companion_getInstance_4().get_Visible_yikvpz_k$());
    return Unit_getInstance();
  }
  function createIcon$lambda($width, $viewBox, $renderStyle, $attrs) {
    return function ($this$Svg) {
      var tmp0_safe_receiver = $width._v;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        $this$Svg.width_3dri8b_k$(tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $viewBox._v;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        $this$Svg.viewBox_s5pn86_k$(tmp1_safe_receiver.get_x_1mhr67_k$(), tmp1_safe_receiver.get_y_1mhr68_k$(), tmp1_safe_receiver.get_width_j0q4yl_k$(), tmp1_safe_receiver.get_height_e7t92o_k$());
      }
      var tmp2_safe_receiver = $renderStyle._v;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        var tmp;
        if (tmp2_safe_receiver instanceof Fill) {
          $this$Svg.fill_wlycpl_k$(SVGFillType_CurrentColor_getInstance());
          tmp = $this$Svg.stroke_m42ljs_k$(SVGStrokeType_None_getInstance());
        } else {
          if (tmp2_safe_receiver instanceof Stroke) {
            $this$Svg.stroke_m42ljs_k$(SVGStrokeType_CurrentColor_getInstance());
            $this$Svg.fill_wlycpl_k$(SVGFillType_None_getInstance());
            var tmp1_safe_receiver_0 = tmp2_safe_receiver.strokeWidth_1;
            var tmp_0;
            if (tmp1_safe_receiver_0 == null) {
              tmp_0 = null;
            } else {
              // Inline function 'kotlin.let' call
              tmp_0 = $this$Svg.strokeWidth_s6idgd_k$(tmp1_safe_receiver_0);
            }
            tmp = tmp_0;
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
      $this$Svg.style_xwwy6r_k$(createIcon$lambda$lambda);
      var tmp3_safe_receiver = $attrs._v;
      if (tmp3_safe_receiver == null)
        null;
      else
        tmp3_safe_receiver($this$Svg);
      return Unit_getInstance();
    };
  }
  function createIcon$lambda_0($viewBox, $width, $renderStyle, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      createIcon($viewBox._v, $width._v, $renderStyle._v, $attrs._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
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
  function HorizontalDividerKind() {
  }
  function DividerVars$_get_Color_$ref_qjroxu() {
    return function (p0) {
      return p0.get_Color_i88tui_k$();
    };
  }
  function DividerVars$_get_Length_$ref_k75zgt() {
    return function (p0) {
      return p0.get_Length_yn18v_k$();
    };
  }
  function DividerVars() {
    DividerVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().value$default_36t2hw_k$();
    tmp.Color$delegate_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_percent(90);
    tmp_0.Length$delegate_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
  }
  protoOf(DividerVars).get_Color_i88tui_k$ = function () {
    var tmp = KProperty1;
    return this.Color$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('Color', 1, tmp, DividerVars$_get_Color_$ref_qjroxu(), null));
  };
  protoOf(DividerVars).get_Length_yn18v_k$ = function () {
    var tmp = KProperty1;
    return this.Length$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('Length', 1, tmp, DividerVars$_get_Length_$ref_k75zgt(), null));
  };
  var DividerVars_instance;
  function DividerVars_getInstance() {
    if (DividerVars_instance == null)
      new DividerVars();
    return DividerVars_instance;
  }
  function VerticalDividerKind() {
  }
  function HorizontalDividerStyle$lambda($this$base) {
    _init_properties_Divider_kt__8b5dnr();
    var tmp = Companion_getInstance();
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return width(borderTop(tmp, tmp_0, 'solid', DividerVars_getInstance().get_Color_i88tui_k$().value$default_36t2hw_k$()), DividerVars_getInstance().get_Length_yn18v_k$().value$default_36t2hw_k$());
  }
  function VerticalDividerStyle$lambda($this$base) {
    _init_properties_Divider_kt__8b5dnr();
    var tmp = Companion_getInstance();
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return height(borderLeft(tmp, tmp_0, 'solid', DividerVars_getInstance().get_Color_i88tui_k$().value$default_36t2hw_k$()), DividerVars_getInstance().get_Length_yn18v_k$().value$default_36t2hw_k$());
  }
  var properties_initialized_Divider_kt_k1kxcn;
  function _init_properties_Divider_kt__8b5dnr() {
    if (!properties_initialized_Divider_kt_k1kxcn) {
      properties_initialized_Divider_kt_k1kxcn = true;
      var tmp = Companion_getInstance_5();
      HorizontalDividerStyle = base(tmp, VOID, HorizontalDividerStyle$lambda);
      var tmp_0 = Companion_getInstance_5();
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
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1950532178);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.changed_ga7h3f_k$(numColumns) : $composer_0.changedInstance_s1wkiy_k$(numColumns)) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ((($changed & 512) === 0 ? $composer_0.changed_ga7h3f_k$(variant_0._v) : $composer_0.changedInstance_s1wkiy_k$(variant_0._v)) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ((($changed & 4096) === 0 ? $composer_0.changed_ga7h3f_k$(ref_0._v) : $composer_0.changedInstance_s1wkiy_k$(ref_0._v)) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 16384 : 8192);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 9363) === 9362), $dirty & 1)) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 4) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        ref_0._v = null;
      }
      var tmp = toAttrs(setVariable_0(setVariable_0(setVariable_0(setVariable_0(setVariable_0(toModifier(get_SimpleGridStyle(), [variant_0._v], $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter() | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 3), getValue(get_columnVariables(), Breakpoint_ZERO_getInstance()), numColumns.get_base_wojaxm_k$()), getValue(get_columnVariables(), Breakpoint_SM_getInstance()), numColumns.get_sm_kntnod_k$()), getValue(get_columnVariables(), Breakpoint_MD_getInstance()), numColumns.get_md_kntnts_k$()), getValue(get_columnVariables(), Breakpoint_LG_getInstance()), numColumns.get_lg_kntnuk_k$()), getValue(get_columnVariables(), Breakpoint_XL_getInstance()), numColumns.get_xl_kntnk3_k$()).then_mmfvo6_k$(modifier_0._v));
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(656877393, true, SimpleGrid$lambda(ref_0, content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_14(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp, tmp0, $composer_0, 48, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(SimpleGrid$lambda_0(numColumns, modifier_0, variant_0, ref_0, content, $changed, $default));
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
  function SimpleGridKind() {
  }
  function SimpleGridStyle$lambda($this$CssStyle) {
    _init_properties_SimpleGrid_kt__tvipdk();
    $this$CssStyle.base_y8uu8g_k$(SimpleGridStyle$lambda$lambda);
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = get_columnVariables().get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'kotlin.collections.component1' call
      var breakpoint = element.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var variable = element.get_value_j01efc_k$();
      $this$CssStyle.invoke_xzuw0j_k$(breakpoint, SimpleGridStyle$lambda$lambda_0(variable));
    }
    return Unit_getInstance();
  }
  function SimpleGridStyle$lambda$lambda() {
    _init_properties_SimpleGrid_kt__tvipdk();
    var tmp = Companion_getInstance();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Grid' call
    Companion_getInstance_7();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'grid');
  }
  function SimpleGridStyle$lambda$lambda$lambda$lambda($this$repeat) {
    _init_properties_SimpleGrid_kt__tvipdk();
    $this$repeat.size_q03g6h_k$(get_fr(1));
    return Unit_getInstance();
  }
  function SimpleGridStyle$lambda$lambda$lambda($variable) {
    return function ($this$gridTemplateColumns) {
      var tmp = $variable.value$default_36t2hw_k$();
      $this$gridTemplateColumns.repeat_n9ti1_k$(tmp, SimpleGridStyle$lambda$lambda$lambda$lambda);
      return Unit_getInstance();
    };
  }
  function SimpleGridStyle$lambda$lambda_0($variable) {
    return function () {
      var tmp = Companion_getInstance();
      return gridTemplateColumns(tmp, SimpleGridStyle$lambda$lambda$lambda($variable));
    };
  }
  function SimpleGrid$lambda($ref, $content) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      registerRefScope($this$Div, $ref._v, $composer_0, 14 & $changed | com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter() << 3);
      $content($composer_0, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_14(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function SimpleGrid$lambda_0($numColumns, $modifier, $variant, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      SimpleGrid($numColumns, $modifier._v, $variant._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
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
      var _iterator__ex2g4s = this_0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'kotlin.text.lowercase' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = element.get_name_woqyms_k$().toLowerCase();
        var tmp$ret$2 = new NumberValue('simple-grid-col-count-' + tmp$ret$1, VOID, 'silk');
        result.put_4fpzoq_k$(element, tmp$ret$2);
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
  function SurfaceKind() {
  }
  function SurfaceVars$_get_BackgroundColor_$ref_ysiqw0() {
    return function (p0) {
      return p0.get_BackgroundColor_qhx06s_k$();
    };
  }
  function SurfaceVars$_get_Color_$ref_yzfonm() {
    return function (p0) {
      return p0.get_Color_i88tui_k$();
    };
  }
  function SurfaceVars() {
    SurfaceVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BackgroundColorVar().value$default_36t2hw_k$();
    tmp.BackgroundColor$delegate_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_ColorVar().value$default_36t2hw_k$();
    tmp_0.Color$delegate_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
  }
  protoOf(SurfaceVars).get_BackgroundColor_qhx06s_k$ = function () {
    var tmp = KProperty1;
    return this.BackgroundColor$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('BackgroundColor', 1, tmp, SurfaceVars$_get_BackgroundColor_$ref_ysiqw0(), null));
  };
  protoOf(SurfaceVars).get_Color_i88tui_k$ = function () {
    var tmp = KProperty1;
    return this.Color$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('Color', 1, tmp, SurfaceVars$_get_Color_$ref_yzfonm(), null));
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
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-2017137850);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ((($changed & 64) === 0 ? $composer_0.changed_ga7h3f_k$(variant_0._v) : $composer_0.changedInstance_s1wkiy_k$(variant_0._v)) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0) {
      var tmp;
      var tmp_0 = $composer_0;
      var tmpEnum = colorModeOverride_0._v;
      if (tmp_0.changed_kpusro_k$(tmpEnum == null ? -1 : tmpEnum.get_ordinal_ip24qg_k$())) {
        tmp = 256;
      } else {
        tmp = 128;
      }
      $dirty = $dirty | tmp;
    }
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ((($changed & 4096) === 0 ? $composer_0.changed_ga7h3f_k$(ref_0._v) : $composer_0.changedInstance_s1wkiy_k$(ref_0._v)) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 16384 : 8192);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 9363) === 9362), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
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
      var tmp0 = toModifier(get_SurfaceStyle(), [variant_0._v], $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter() | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 3).then_mmfvo6_k$(modifier_0._v);
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
      var tmp_1;
      if (!(colorModeOverride_0._v == null)) {
        tmp_1 = classNames(Companion_getInstance(), [get_cssClass(ensureNotNull(colorModeOverride_0._v))]);
      } else {
        tmp_1 = Companion_getInstance();
      }
      var surfaceModifier = tmp0.then_mmfvo6_k$(tmp_1);
      if (colorModeOverride_0._v == null || get_useScope(Companion_getInstance_19().get_current_jwi6j4_k$())) {
        $composer_0.startReplaceGroup_5hh8aj_k$(-1665730553);
        var tmp_2 = toAttrs(surfaceModifier);
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(555341228, true, Surface$lambda_1(ref_0, colorModeOverride_0, content), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid || it === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_16(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmp0_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Div(tmp_2, tmp0_0, $composer_0, 48, 0);
        $composer_0.endReplaceGroup_ek144q_k$();
      } else {
        $composer_0.startReplaceGroup_5hh8aj_k$(-1665322779);
        // Inline function 'androidx.compose.runtime.cache' call
        var this_0 = $composer_0;
        // Inline function 'kotlin.let' call
        var it_0 = this_0.rememberedValue_4dg93v_k$();
        var tmp_5;
        if (false || it_0 === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
          var value_0 = mutableStateOf(null);
          this_0.updateRememberedValue_l1wh71_k$(value_0);
          tmp_5 = value_0;
        } else {
          tmp_5 = it_0;
        }
        var tmp_6 = tmp_5;
        var surfaceElement$delegate = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        // Inline function 'androidx.compose.runtime.cache' call
        var this_1 = $composer_0;
        // Inline function 'kotlin.let' call
        var it_1 = this_1.rememberedValue_4dg93v_k$();
        var tmp_7;
        if (false || it_1 === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
          var value_1 = Surface$lambda_2(surfaceElement$delegate);
          this_1.updateRememberedValue_l1wh71_k$(value_1);
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
        var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        var it_2 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_10;
        if (invalid_0 || it_2 === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
          var value_2 = ComposableLambda$invoke$ref_18(dispatchReceiver_0);
          $composer_2.updateRememberedValue_l1wh71_k$(value_2);
          tmp_10 = value_2;
        } else {
          tmp_10 = it_2;
        }
        var tmp_11 = tmp_10;
        var tmp0_1 = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
        sourceInformationMarkerEnd($composer_2);
        Div(tmp_9, tmp0_1, $composer_0, 48, 0);
        $composer_0.endReplaceGroup_ek144q_k$();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Surface$lambda_4(modifier_0, variant_0, colorModeOverride_0, ref_0, content, $changed, $default));
    }
  }
  function Surface$lambda($surfaceElement$delegate) {
    _init_properties_Surface_kt__8o7unv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('surfaceElement', KMutableProperty0, true);
    return $surfaceElement$delegate.get_value_j01efc_k$();
  }
  function Surface$lambda_0($surfaceElement$delegate, _set____db54di) {
    _init_properties_Surface_kt__8o7unv();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('surfaceElement', KMutableProperty0, true);
    $surfaceElement$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function SurfaceStyle$lambda($this$CssStyle) {
    _init_properties_Surface_kt__8o7unv();
    $this$CssStyle.base_y8uu8g_k$(SurfaceStyle$lambda$lambda);
    return Unit_getInstance();
  }
  function SurfaceStyle$lambda$lambda() {
    _init_properties_Surface_kt__8o7unv();
    return color(backgroundColor(Companion_getInstance(), SurfaceVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_36t2hw_k$()), SurfaceVars_getInstance().get_Color_i88tui_k$().value$default_36t2hw_k$());
  }
  function Surface$lambda$lambda($content) {
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
  function ComposableLambda$invoke$ref_15(p0) {
    return function (_this__u8e3s4, p0_0) {
      return p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
    };
  }
  function Surface$lambda_1($ref, $colorModeOverride, $content) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      registerRefScope($this$Div, $ref._v, $composer_0, 14 & $changed | com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter() << 3);
      var tmp;
      if (!($colorModeOverride._v == null)) {
        $composer_0.startReplaceGroup_5hh8aj_k$(-43418289);
        var tmp_0 = $colorModeOverride._v.provide_53xuu7_k$();
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-152149391, true, Surface$lambda$lambda($content), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_15(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        CompositionLocalProvider(tmp_0, tmp0, $composer_0, 48 | androidx_compose_runtime_ProvidedValue$stableprop_getter());
        $composer_0.endReplaceGroup_ek144q_k$();
        tmp = Unit_getInstance();
      } else {
        $composer_0.startReplaceGroup_5hh8aj_k$(-43281331);
        $content($composer_0, 0);
        $composer_0.endReplaceGroup_ek144q_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_16(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function _no_name_provided__qut3iv() {
  }
  protoOf(_no_name_provided__qut3iv).dispose_3nnxhr_k$ = function () {
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
      $this$toAttrs.ref_o4g25g_k$(Surface$lambda$lambda_0($surfaceElement$delegate));
      return Unit_getInstance();
    };
  }
  function Surface$lambda$slambda($surfaceElement, $colorModeOverride, resultContinuation) {
    this.$surfaceElement_1 = $surfaceElement;
    this.$colorModeOverride_1 = $colorModeOverride;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Surface$lambda$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(Surface$lambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Surface$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var _iterator__ex2g4s = asList(this.$surfaceElement_1.classList).iterator_jk1svi_k$();
          while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
            var element = _iterator__ex2g4s.next_20eer_k$();
            var ident = new CssIdent(element);
            if (isSuffixedWith(ident, this.$colorModeOverride_1._v.get_opposite_ywslzk_k$()) && get_SilkTheme().hasStyle_98hiw3_k$(withColorModeSuffixRemoved(ident).get_asStr_iosp6e_k$())) {
              this.$surfaceElement_1.classList.replace(element, suffixedWith(ident, this.$colorModeOverride_1._v).get_asStr_iosp6e_k$());
            }
          }
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
  protoOf(Surface$lambda$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new Surface$lambda$slambda(this.$surfaceElement_1, this.$colorModeOverride_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(Surface$lambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function Surface$lambda$slambda_0($surfaceElement, $colorModeOverride, resultContinuation) {
    var i = new Surface$lambda$slambda($surfaceElement, $colorModeOverride, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Surface$lambda$lambda_1($content) {
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
  function ComposableLambda$invoke$ref_17(p0) {
    return function (_this__u8e3s4, p0_0) {
      return p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
    };
  }
  function Surface$lambda_3($ref, $colorModeOverride, $surfaceElement$delegate, $content) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      registerRefScope($this$Div, $ref._v, $composer_0, 14 & $changed | com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter() << 3);
      var tmp0_safe_receiver = Surface$lambda($surfaceElement$delegate);
      if (tmp0_safe_receiver == null) {
        $composer_0.startReplaceGroup_5hh8aj_k$(269355054);
        $composer_0.endReplaceGroup_ek144q_k$();
      } else {
        $composer_0.startReplaceGroup_5hh8aj_k$(269355055);
        // Inline function 'kotlin.let' call
        var parentColorMode = Companion_getInstance_11().get_current_2iudd5_k$($composer_0, 6);
        var tmp = $colorModeOverride._v;
        var tmp_0 = $composer_0.changedInstance_s1wkiy_k$(tmp0_safe_receiver);
        var tmp_1 = $composer_0;
        var tmpEnum = $colorModeOverride._v;
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!(tmp_0 | tmp_1.changed_kpusro_k$(tmpEnum == null ? -1 : tmpEnum.get_ordinal_ip24qg_k$()));
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (invalid || it === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
          var value = Surface$lambda$slambda_0(tmp0_safe_receiver, $colorModeOverride, null);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp$ret$3 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        LaunchedEffect(parentColorMode, tmp, tmp$ret$3, $composer_0, 0);
        var tmp_4 = $colorModeOverride._v.provide_53xuu7_k$();
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-1144900937, true, Surface$lambda$lambda_1($content), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_5;
        if (invalid_0 || it_0 === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
          var value_0 = ComposableLambda$invoke$ref_17(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_5 = value_0;
        } else {
          tmp_5 = it_0;
        }
        var tmp_6 = tmp_5;
        var tmp0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        CompositionLocalProvider(tmp_4, tmp0, $composer_0, 48 | androidx_compose_runtime_ProvidedValue$stableprop_getter());
        $composer_0.endReplaceGroup_ek144q_k$();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_18(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function Surface$lambda_4($modifier, $variant, $colorModeOverride, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Surface($modifier._v, $variant._v, $colorModeOverride._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
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
  function OverlayKind() {
  }
  function OverlayVars$_get_BackgroundColor_$ref_jn4iwz() {
    return function (p0) {
      return p0.get_BackgroundColor_qhx06s_k$();
    };
  }
  function OverlayVars() {
    OverlayVars_instance = this;
    this.BackgroundColor$delegate_1 = StyleVariable('silk');
  }
  protoOf(OverlayVars).get_BackgroundColor_qhx06s_k$ = function () {
    var tmp = KProperty1;
    return this.BackgroundColor$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('BackgroundColor', 1, tmp, OverlayVars$_get_BackgroundColor_$ref_jn4iwz(), null));
  };
  var OverlayVars_instance;
  function OverlayVars_getInstance() {
    if (OverlayVars_instance == null)
      new OverlayVars();
    return OverlayVars_instance;
  }
  function OverlayStyle$lambda($this$base) {
    _init_properties_Overlay_kt__p5agwu();
    return backgroundColor(Companion_getInstance(), OverlayVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_36t2hw_k$());
  }
  var properties_initialized_Overlay_kt_mvmds0;
  function _init_properties_Overlay_kt__p5agwu() {
    if (!properties_initialized_Overlay_kt_mvmds0) {
      properties_initialized_Overlay_kt_mvmds0 = true;
      var tmp = Companion_getInstance_5();
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
  function PopupKind() {
  }
  function PopupVars$_get_TransitionDuration_$ref_94payl() {
    return function (p0) {
      return p0.get_TransitionDuration_6zl6by_k$();
    };
  }
  function PopupVars() {
    PopupVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = TransitionDurationVars_getInstance().get_Fast_wo1fb9_k$().value$default_36t2hw_k$();
    tmp.TransitionDuration$delegate_1 = StyleVariable_1(tmp0_defaultFallback, 'silk');
  }
  protoOf(PopupVars).get_TransitionDuration_6zl6by_k$ = function () {
    var tmp = KProperty1;
    return this.TransitionDuration$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('TransitionDuration', 1, tmp, PopupVars$_get_TransitionDuration_$ref_94payl(), null));
  };
  var PopupVars_instance;
  function PopupVars_getInstance() {
    if (PopupVars_instance == null)
      new PopupVars();
    return PopupVars_instance;
  }
  function PopupStyle$lambda($this$base) {
    _init_properties_Popup_kt__lluomy();
    return transition_0(Companion_getInstance(), [Companion_getInstance_2().of$default_ehijui_k$('opacity', PopupVars_getInstance().get_TransitionDuration_6zl6by_k$().value$default_36t2hw_k$())]);
  }
  var properties_initialized_Popup_kt_wwy6qs;
  function _init_properties_Popup_kt__lluomy() {
    if (!properties_initialized_Popup_kt_wwy6qs) {
      properties_initialized_Popup_kt_wwy6qs = true;
      var tmp = Companion_getInstance_5();
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
  function Arrow() {
  }
  function TextContainer() {
  }
  function TooltipKind() {
  }
  function TooltipVars$_get_BackgroundColor_$ref_y3bglm() {
    return function (p0) {
      return p0.get_BackgroundColor_qhx06s_k$();
    };
  }
  function TooltipVars$_get_Color_$ref_gf06w8() {
    return function (p0) {
      return p0.get_Color_i88tui_k$();
    };
  }
  function TooltipVars() {
    TooltipVars_instance = this;
    this.BackgroundColor$delegate_1 = StyleVariable('silk');
    this.Color$delegate_1 = StyleVariable('silk');
  }
  protoOf(TooltipVars).get_BackgroundColor_qhx06s_k$ = function () {
    var tmp = KProperty1;
    return this.BackgroundColor$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('BackgroundColor', 1, tmp, TooltipVars$_get_BackgroundColor_$ref_y3bglm(), null));
  };
  protoOf(TooltipVars).get_Color_i88tui_k$ = function () {
    var tmp = KProperty1;
    return this.Color$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('Color', 1, tmp, TooltipVars$_get_Color_$ref_gf06w8(), null));
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
    var tmp = Companion_getInstance();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    Companion_getInstance_15();
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'relative';
    return borderRadius(color(backgroundColor(position(tmp, tmp$ret$3), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_36t2hw_k$()), TooltipVars_getInstance().get_Color_i88tui_k$().value$default_36t2hw_k$()), get_px(6));
  }
  function TooltipArrowStyle$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp = Companion_getInstance();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Absolute' call
    Companion_getInstance_15();
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'absolute';
    var tmp_0 = position(tmp, tmp$ret$3);
    return border_0(tmp_0, TooltipArrowStyle$lambda$lambda);
  }
  function TooltipArrowStyle$lambda$lambda($this$border) {
    _init_properties_Tooltip_kt__palx2n();
    $this$border.width_iqjg4l_k$(get_TRIANGLE_WIDTH());
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    $this$border.style_o6ud9q_k$('solid');
    return Unit_getInstance();
  }
  function TopLeftTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp0_$receiver = Companion_getInstance();
    var tmp1_left = get_TRIANGLE_WIDTH_2X();
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(margin_2(tmp0_$receiver, tmp2_top, VOID, VOID, tmp1_left), get_px(0)), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_36t2hw_k$());
  }
  function TopTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp0_$receiver = Companion_getInstance();
    var tmp1_left = unaryMinus(get_TRIANGLE_WIDTH());
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(left(margin_2(tmp0_$receiver, tmp2_top, VOID, VOID, tmp1_left), get_percent(50)), get_px(0)), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_36t2hw_k$());
  }
  function TopRightTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp0_$receiver = Companion_getInstance();
    var tmp1_right = get_TRIANGLE_WIDTH_2X();
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(right(margin_2(tmp0_$receiver, tmp2_top, tmp1_right), get_px(0)), get_px(0)), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_36t2hw_k$());
  }
  function LeftTopTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(top(left(margin_2(Companion_getInstance(), get_TRIANGLE_WIDTH_2X(), VOID, VOID, unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_36t2hw_k$());
  }
  function LeftTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(top(left(margin_2(Companion_getInstance(), unaryMinus(get_TRIANGLE_WIDTH()), VOID, VOID, unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_percent(50)), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_36t2hw_k$());
  }
  function LeftBottomTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(bottom(left(margin_2(Companion_getInstance(), VOID, VOID, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_36t2hw_k$());
  }
  function RightTopTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleRight(top(right(margin_2(Companion_getInstance(), get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_36t2hw_k$());
  }
  function RightTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleRight(top(right(margin_2(Companion_getInstance(), unaryMinus(get_TRIANGLE_WIDTH()), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_percent(50)), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_36t2hw_k$());
  }
  function RightBottomTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp0_$receiver = Companion_getInstance();
    var tmp1_bottom = get_TRIANGLE_WIDTH_2X();
    var tmp2_right = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleRight(bottom(right(margin_2(tmp0_$receiver, VOID, tmp2_right, tmp1_bottom), get_px(0)), get_px(0)), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_36t2hw_k$());
  }
  function BottomLeftTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp0_$receiver = Companion_getInstance();
    var tmp1_left = get_TRIANGLE_WIDTH_2X();
    var tmp2_bottom = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleUp(bottom(left(margin_2(tmp0_$receiver, VOID, VOID, tmp2_bottom, tmp1_left), get_px(0)), get_px(0)), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_36t2hw_k$());
  }
  function BottomTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp0_$receiver = Companion_getInstance();
    var tmp1_left = unaryMinus(get_TRIANGLE_WIDTH());
    var tmp2_bottom = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleUp(bottom(left(margin_2(tmp0_$receiver, VOID, VOID, tmp2_bottom, tmp1_left), get_percent(50)), get_px(0)), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_36t2hw_k$());
  }
  function BottomRightTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleUp(bottom(right(margin_2(Companion_getInstance(), VOID, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_36t2hw_k$());
  }
  function TooltipTextContainerStyle$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    return padding(Companion_getInstance(), get_px(5));
  }
  function triangleDown$lambda($color) {
    return function ($this$border) {
      $this$border.color_ypzt9p_k$(Colors_getInstance().get_Transparent_cxh4g9_k$(), Colors_getInstance().get_Transparent_cxh4g9_k$(), $color, Colors_getInstance().get_Transparent_cxh4g9_k$());
      return Unit_getInstance();
    };
  }
  function triangleLeft$lambda($color) {
    return function ($this$border) {
      $this$border.color_ypzt9p_k$(Colors_getInstance().get_Transparent_cxh4g9_k$(), $color, Colors_getInstance().get_Transparent_cxh4g9_k$(), Colors_getInstance().get_Transparent_cxh4g9_k$());
      return Unit_getInstance();
    };
  }
  function triangleRight$lambda($color) {
    return function ($this$border) {
      $this$border.color_ypzt9p_k$(Colors_getInstance().get_Transparent_cxh4g9_k$(), Colors_getInstance().get_Transparent_cxh4g9_k$(), Colors_getInstance().get_Transparent_cxh4g9_k$(), $color);
      return Unit_getInstance();
    };
  }
  function triangleUp$lambda($color) {
    return function ($this$border) {
      $this$border.color_ypzt9p_k$($color, Colors_getInstance().get_Transparent_cxh4g9_k$(), Colors_getInstance().get_Transparent_cxh4g9_k$(), Colors_getInstance().get_Transparent_cxh4g9_k$());
      return Unit_getInstance();
    };
  }
  var properties_initialized_Tooltip_kt_68t07n;
  function _init_properties_Tooltip_kt__palx2n() {
    if (!properties_initialized_Tooltip_kt_68t07n) {
      properties_initialized_Tooltip_kt_68t07n = true;
      TRIANGLE_WIDTH = get_px(5);
      TRIANGLE_WIDTH_2X = get_px(9);
      var tmp = Companion_getInstance_5();
      TooltipStyle = base(tmp, VOID, TooltipStyle$lambda);
      var tmp_0 = Companion_getInstance_5();
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
      var tmp_13 = Companion_getInstance_5();
      TooltipTextContainerStyle = base(tmp_13, VOID, TooltipTextContainerStyle$lambda);
      com_varabyte_kobweb_silk_components_overlay_TooltipVars$stable = 8;
    }
  }
  function get_SilkColorsStyle() {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    return SilkColorsStyle;
  }
  var SilkColorsStyle;
  function silkColorsModifier(colorMode) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var palette = toPalette(colorMode);
    return setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(colorScheme(Companion_getInstance(), colorMode.get_isLight_zemp0j_k$() ? Companion_getInstance_20().get_Light_id31e5_k$() : Companion_getInstance_20().get_Dark_wo05b3_k$()), get_BackgroundColorVar(), get_background_0(palette)), get_ColorVar(), get_color(palette)), get_BorderColorVar(), get_border(palette)), get_FocusOutlineColorVar(), get_focusOutline_0(palette)), get_PlaceholderColorVar(), get_placeholder_0(palette)), ButtonVars_getInstance().get_BackgroundDefaultColor_so3bvr_k$(), get_button_0(palette).get_default_qtagd4_k$()), ButtonVars_getInstance().get_BackgroundHoverColor_qkbxz2_k$(), get_button_0(palette).get_hover_islez7_k$()), ButtonVars_getInstance().get_BackgroundPressedColor_qp3aco_k$(), get_button_0(palette).get_pressed_3zxk93_k$()), CheckboxVars_getInstance().get_IconBackgroundColor_fqf24z_k$(), get_checkbox_0(palette).get_background_stpfw7_k$()), CheckboxVars_getInstance().get_IconBackgroundHoverColor_gda561_k$(), get_checkbox_0(palette).get_hover_islez7_k$()), CheckboxVars_getInstance().get_IconColor_i8bnoh_k$(), get_checkbox_0(palette).get_color_ipu8u2_k$()), InputVars_getInstance().get_BorderHoverColor_4uita4_k$(), get_input(palette).get_hoveredBorder_pnis3i_k$()), InputVars_getInstance().get_BorderInvalidColor_3xft0h_k$(), get_input(palette).get_invalidBorder_suexpi_k$()), InputVars_getInstance().get_FilledColor_27lcwo_k$(), get_input(palette).get_filled_dbz78r_k$()), InputVars_getInstance().get_FilledHoverColor_z8l4su_k$(), get_input(palette).get_filledHover_panomn_k$()), InputVars_getInstance().get_FilledFocusColor_e3i8gm_k$(), get_input(palette).get_filledFocus_pbrnir_k$()), OverlayVars_getInstance().get_BackgroundColor_qhx06s_k$(), get_overlay_0(palette)), SwitchVars_getInstance().get_ThumbColor_g0t1d6_k$(), get_switch_0(palette).get_thumb_iz2gml_k$()), TabVars_getInstance().get_Color_i88tui_k$(), get_tab(palette).get_color_ipu8u2_k$()), TabVars_getInstance().get_BackgroundColor_qhx06s_k$(), get_tab(palette).get_background_stpfw7_k$()), TabVars_getInstance().get_DisabledBackgroundColor_cqusog_k$(), get_tab(palette).get_disabled_rbmjej_k$()), TabVars_getInstance().get_HoverBackgroundColor_uy6r32_k$(), get_tab(palette).get_hover_islez7_k$()), TabVars_getInstance().get_PressedBackgroundColor_ow7ud8_k$(), get_tab(palette).get_pressed_3zxk93_k$()), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$(), get_tooltip_0(palette).get_background_stpfw7_k$()), TooltipVars_getInstance().get_Color_i88tui_k$(), get_tooltip_0(palette).get_color_ipu8u2_k$());
  }
  function initSilkWidgets(ctx) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var mutableTheme = ctx.get_theme_iz24rk_k$();
    // Inline function 'kotlin.apply' call
    var this_0 = ctx.get_theme_iz24rk_k$().get_palettes_f7ft27_k$();
    var focusOutline = Blue_getInstance().get__500_wogfpb_k$().toRgb_1tsrpu_k$().copyf$default_6pu18v_k$(VOID, VOID, VOID, 0.5);
    var placeholder = Gray_getInstance().get__500_wogfpb_k$();
    // Inline function 'kotlin.run' call
    var color = Colors_getInstance().get_Black_i7mvue_k$();
    set_background(this_0.get_light_iuogdp_k$(), Colors_getInstance().get_White_ij46ow_k$());
    set_color(this_0.get_light_iuogdp_k$(), color);
    set_border(this_0.get_light_iuogdp_k$(), color.copyf$default_6pu18v_k$(VOID, VOID, VOID, 0.2));
    set_focusOutline(this_0.get_light_iuogdp_k$(), focusOutline);
    set_overlay(this_0.get_light_iuogdp_k$(), color.copyf$default_6pu18v_k$(VOID, VOID, VOID, 0.5));
    set_placeholder(this_0.get_light_iuogdp_k$(), placeholder);
    var buttonBase = Colors_getInstance().get_White_ij46ow_k$().darkened_iwrtmu_k$(0.2);
    get_button(this_0.get_light_iuogdp_k$()).set_s40lvu_k$(buttonBase, buttonBase.darkened_iwrtmu_k$(0.2), Colors_getInstance().get_CornflowerBlue_r6uqqi_k$(), buttonBase.darkened_iwrtmu_k$(0.4));
    get_callout(this_0.get_light_iuogdp_k$()).set_6605l8_k$(Colors_getInstance().get_Crimson_p5oht6_k$(), Colors_getInstance().get_DarkOrchid_ky5rby_k$(), Colors_getInstance().get_DodgerBlue_w4tkwu_k$(), Colors_getInstance().get_SeaGreen_gor2g3_k$(), Colors_getInstance().get_Gray_wo2eh8_k$(), Colors_getInstance().get_LimeGreen_33bue3_k$(), Colors_getInstance().get_DarkOrange_ky6wwj_k$());
    get_checkbox(this_0.get_light_iuogdp_k$()).set_38lh8k_k$(Blue_getInstance().get__500_wogfpb_k$(), Blue_getInstance().get__600_woggg0_k$(), Colors_getInstance().get_White_ij46ow_k$());
    var inputFilled = Gray_getInstance().get__200_wogdh8_k$();
    var tmp0_$this = get_input_0(this_0.get_light_iuogdp_k$());
    var tmp1_filledFocus = Colors_getInstance().get_Transparent_cxh4g9_k$();
    var tmp2_hoveredBorder = Gray_getInstance().get__500_wogfpb_k$();
    var tmp3_invalidBorder = Red_getInstance().get__900_wogio3_k$();
    var tmp4_filledHover = inputFilled.darkened_iwrtmu_k$(0.1);
    tmp0_$this.set_ax4sbs_k$(tmp2_hoveredBorder, tmp3_invalidBorder, inputFilled, tmp4_filledHover, tmp1_filledFocus);
    var tmp5_$this = get_switch(this_0.get_light_iuogdp_k$());
    var tmp6_thumb = Colors_getInstance().get_White_ij46ow_k$();
    var tmp7_backgroundOn = Colors_getInstance().get_DodgerBlue_w4tkwu_k$();
    var tmp8_backgroundOff = Colors_getInstance().get_LightGray_i1h2r4_k$();
    tmp5_$this.set_38lh8k_k$(tmp7_backgroundOn, tmp8_backgroundOff, tmp6_thumb);
    get_tab_0(this_0.get_light_iuogdp_k$()).set$default_u64q8f_k$(Colors_getInstance().get_Black_i7mvue_k$(), Colors_getInstance().get_White_ij46ow_k$(), Colors_getInstance().get_CornflowerBlue_r6uqqi_k$(), VOID, VOID, Colors_getInstance().get_LightGray_i1h2r4_k$(), Colors_getInstance().get_WhiteSmoke_gvtxtb_k$(), Colors_getInstance().get_White_ij46ow_k$());
    get_tooltip(this_0.get_light_iuogdp_k$()).set_djj1hu_k$(get_color_0(this_0.get_light_iuogdp_k$()), get_background(this_0.get_light_iuogdp_k$()));
    // Inline function 'kotlin.run' call
    var color_0 = Colors_getInstance().get_White_ij46ow_k$();
    set_background(this_0.get_dark_wokkvz_k$(), Colors_getInstance().get_Black_i7mvue_k$());
    set_color(this_0.get_dark_wokkvz_k$(), color_0);
    set_border(this_0.get_dark_wokkvz_k$(), color_0.copyf$default_6pu18v_k$(VOID, VOID, VOID, 0.2));
    set_focusOutline(this_0.get_dark_wokkvz_k$(), focusOutline);
    set_overlay(this_0.get_dark_wokkvz_k$(), color_0.copyf$default_6pu18v_k$(VOID, VOID, VOID, 0.5));
    set_placeholder(this_0.get_dark_wokkvz_k$(), placeholder);
    var buttonBase_0 = lightened(Colors_getInstance().get_Black_i7mvue_k$(), 0.2);
    get_button(this_0.get_dark_wokkvz_k$()).set_s40lvu_k$(buttonBase_0, lightened(buttonBase_0, 0.2), Colors_getInstance().get_LightSkyBlue_74jx4i_k$(), lightened(buttonBase_0, 0.4));
    get_callout(this_0.get_dark_wokkvz_k$()).set_6605l8_k$(Colors_getInstance().get_Red_18jks8_k$(), get_callout(this_0.get_light_iuogdp_k$()).get_important_52de2h_k$(), get_callout(this_0.get_light_iuogdp_k$()).get_note_wor96j_k$(), Colors_getInstance().get_Aquamarine_wf4kkn_k$(), get_callout(this_0.get_light_iuogdp_k$()).get_quote_ixn9eb_k$(), get_callout(this_0.get_light_iuogdp_k$()).get_tip_18ivgu_k$(), Colors_getInstance().get_Orange_2kp26v_k$());
    get_checkbox(this_0.get_dark_wokkvz_k$()).set_38lh8k_k$(Blue_getInstance().get__200_wogdh8_k$(), Blue_getInstance().get__300_woge7x_k$(), Colors_getInstance().get_Black_i7mvue_k$());
    var inputFilled_0 = Gray_getInstance().get__900_wogio3_k$();
    var tmp0_$this_0 = get_input_0(this_0.get_dark_wokkvz_k$());
    var tmp1_filledFocus_0 = Colors_getInstance().get_Transparent_cxh4g9_k$();
    var tmp2_hoveredBorder_0 = Gray_getInstance().get__600_woggg0_k$();
    var tmp3_invalidBorder_0 = Red_getInstance().get__300_woge7x_k$();
    var tmp4_filledHover_0 = lightened(inputFilled_0, 0.1);
    tmp0_$this_0.set_ax4sbs_k$(tmp2_hoveredBorder_0, tmp3_invalidBorder_0, inputFilled_0, tmp4_filledHover_0, tmp1_filledFocus_0);
    var tmp5_$this_0 = get_switch(this_0.get_dark_wokkvz_k$());
    var tmp6_thumb_0 = Colors_getInstance().get_White_ij46ow_k$();
    var tmp7_backgroundOn_0 = Colors_getInstance().get_LightSkyBlue_74jx4i_k$();
    var tmp8_backgroundOff_0 = Colors_getInstance().get_DarkGray_1y3y8u_k$();
    tmp5_$this_0.set_38lh8k_k$(tmp7_backgroundOn_0, tmp8_backgroundOff_0, tmp6_thumb_0);
    get_tab_0(this_0.get_dark_wokkvz_k$()).set$default_u64q8f_k$(Colors_getInstance().get_White_ij46ow_k$(), Colors_getInstance().get_Black_i7mvue_k$(), Colors_getInstance().get_LightSkyBlue_74jx4i_k$(), VOID, VOID, Colors_getInstance().get_DarkSlateGray_s468al_k$(), Colors_getInstance().get_DarkGray_1y3y8u_k$(), Colors_getInstance().get_Black_i7mvue_k$());
    get_tooltip(this_0.get_dark_wokkvz_k$()).set_djj1hu_k$(get_color_0(this_0.get_dark_wokkvz_k$()), get_background(this_0.get_dark_wokkvz_k$()));
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = get_entries_0().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      var tmp = ctx.get_stylesheet_hk204p_k$();
      var tmp_0 = '.' + get_cssClass(element);
      registerStyleBase(tmp, tmp_0, initSilkWidgets$lambda(element));
    }
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-input', get_InputStyle());
    mutableTheme.registerVariant$default_k7o5vi_k$('-outlined', get_OutlinedInputVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-filled', get_FilledInputVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-flushed', get_FlushedInputVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-unstyled', get_UnstyledInputVariant());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-input-group', get_InputGroupStyle());
    mutableTheme.registerStyle$default_qiw5ck_k$('silk-disabled', get_DisabledStyle());
    mutableTheme.registerStyle$default_qiw5ck_k$('silk-smooth-color', get_SmoothColorStyle());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-button', get_ButtonStyle());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-canvas', get_CanvasStyle());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-callout', get_CalloutStyle());
    mutableTheme.registerVariant$default_k7o5vi_k$('-left-bordered', get_LeftBorderedCalloutVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-left-bordered-filled', get_LeftBorderedFilledCalloutVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-outlined', get_OutlinedCalloutVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-outlined-filled', get_OutlinedFilledCalloutVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-matching-link', get_MatchingLinkCalloutVariant());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-checkbox', get_CheckboxStyle());
    mutableTheme.registerVariant$default_k7o5vi_k$('-checkbox', get_CheckboxInputVariant());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-checkbox-icon-container', get_CheckboxIconContainerStyle());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-checkbox-icon', get_CheckboxIconStyle());
    mutableTheme.registerVariant$default_k7o5vi_k$('-checked', get_CheckedCheckboxIconContainerVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-unchecked', get_UncheckedCheckboxIconContainerVariant());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-overlay', get_OverlayStyle());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-popup', get_PopupStyle());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-simple-grid', get_SimpleGridStyle());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-surface', get_SurfaceStyle());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-horizontal-divider', get_HorizontalDividerStyle());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-vertical-divider', get_VerticalDividerStyle());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-switch', get_SwitchStyle());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-switch-track', get_SwitchTrackStyle());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-switch-thumb', get_SwitchThumbStyle());
    mutableTheme.registerVariant$default_k7o5vi_k$('-switch', get_SwitchInputVariant());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-tabs', get_TabsStyle());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-tabs-tab-row', get_TabsTabRowStyle());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-tabs-tab', get_TabsTabStyle());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-tabs-panel', get_TabsPanelStyle());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-tooltip-arrow', get_TooltipArrowStyle());
    mutableTheme.registerVariant$default_k7o5vi_k$('-top-left', get_TopLeftTooltipArrowVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-top', get_TopTooltipArrowVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-top-right', get_TopRightTooltipArrowVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-left-top', get_LeftTopTooltipArrowVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-left', get_LeftTooltipArrowVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-left-bottom', get_LeftBottomTooltipArrowVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-right-top', get_RightTopTooltipArrowVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-right', get_RightTooltipArrowVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-right-bottom', get_RightBottomTooltipArrowVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-bottom-left', get_BottomLeftTooltipArrowVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-bottom', get_BottomTooltipArrowVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-bottom-right', get_BottomRightTooltipArrowVariant());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-tooltip', get_TooltipStyle());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-tooltip-text', get_TooltipTextContainerStyle());
    mutableTheme.registerKeyframes_f5btlc_k$('silk-checkbox-enabled', get_CheckboxEnabledAnim());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-button-size_xs', Companion_getInstance_22().get_XS_kntocc_k$());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-button-size_sm', Companion_getInstance_22().get_SM_kntogt_k$());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-button-size_md', Companion_getInstance_22().get_MD_kntom8_k$());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-button-size_lg', Companion_getInstance_22().get_LG_knton0_k$());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-checkbox-size_sm', Companion_getInstance_23().get_SM_kntogt_k$());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-checkbox-size_md', Companion_getInstance_23().get_MD_kntom8_k$());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-checkbox-size_lg', Companion_getInstance_23().get_LG_knton0_k$());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-input-size_xs', Companion_getInstance_24().get_XS_kntocc_k$());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-input-size_sm', Companion_getInstance_24().get_SM_kntogt_k$());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-input-size_md', Companion_getInstance_24().get_MD_kntom8_k$());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-input-size_lg', Companion_getInstance_24().get_LG_knton0_k$());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-switch-size_sm', Companion_getInstance_25().get_SM_kntogt_k$());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-switch-size_md', Companion_getInstance_25().get_MD_kntom8_k$());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-switch-size_lg', Companion_getInstance_25().get_LG_knton0_k$());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-callout-type_caution', Companion_getInstance_21().get_CAUTION_mcrcde_k$());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-callout-type_important', Companion_getInstance_21().get_IMPORTANT_jvo9lz_k$());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-callout-type_note', Companion_getInstance_21().get_NOTE_wo652z_k$());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-callout-type_question', Companion_getInstance_21().get_QUESTION_ww02wf_k$());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-callout-type_quote', Companion_getInstance_21().get_QUOTE_ifgqb7_k$());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-callout-type_tip', Companion_getInstance_21().get_TIP_18jjzi_k$());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-callout-type_warning', Companion_getInstance_21().get_WARNING_vqhl77_k$());
  }
  function SilkColorsStyle$lambda($this$base) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    return silkColorsModifier($this$base.get_colorMode_trbg8z_k$());
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
      var tmp = Companion_getInstance_5();
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
    return SmoothColorTransitionDurationVar$delegate.getValue_fbnwi2_k$(null, getPropertyCallableRef('SmoothColorTransitionDurationVar', 0, tmp, _get_SmoothColorTransitionDurationVar_$ref_eamzbj(), null));
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
    $composer_0.startReplaceGroup_5hh8aj_k$(812442038);
    var tmp0 = tabIndex(ariaDisabled(Companion_getInstance()), -1);
    $composer_0.endReplaceGroup_ek144q_k$();
    return tmp0;
  }
  function DisabledStyle$lambda_0($this$base) {
    _init_properties_CommonStyles_kt__a7wisz();
    return cursor(opacity(Companion_getInstance(), 0.5), Companion_getInstance_1().get_NotAllowed_mobp4y_k$());
  }
  function _get_SmoothColorTransitionDurationVar_$ref_eamzbj() {
    return function () {
      return get_SmoothColorTransitionDurationVar();
    };
  }
  function SmoothColorStyle$lambda($this$base) {
    _init_properties_CommonStyles_kt__a7wisz();
    return transition_0(Companion_getInstance(), [Companion_getInstance_2().of$default_ehijui_k$('background-color', get_SmoothColorTransitionDurationVar().value$default_36t2hw_k$())]);
  }
  var properties_initialized_CommonStyles_kt_zd2b1t;
  function _init_properties_CommonStyles_kt__a7wisz() {
    if (!properties_initialized_CommonStyles_kt_zd2b1t) {
      properties_initialized_CommonStyles_kt_zd2b1t = true;
      var tmp = Companion_getInstance_5();
      var tmp_0 = DisabledStyle$lambda;
      DisabledStyle = base_1(tmp, tmp_0, DisabledStyle$lambda_0);
      var tmp0_defaultFallback = TransitionDurationVars_getInstance().get_Normal_22avww_k$().value$default_36t2hw_k$();
      SmoothColorTransitionDurationVar$delegate = StyleVariable_1(tmp0_defaultFallback, 'silk');
      var tmp_1 = Companion_getInstance_5();
      SmoothColorStyle = base_0(tmp_1, VOID, SmoothColorStyle$lambda);
    }
  }
  var com_varabyte_kobweb_silk_style_common_PlaceholderColor$stable;
  var com_varabyte_kobweb_silk_style_vars_animation_TransitionDurationVars$stable;
  function TransitionDurationVars$_get_Instant_$ref_7x6wls() {
    return function (p0) {
      return p0.get_Instant_9uzajs_k$();
    };
  }
  function TransitionDurationVars$_get_UltraFast_$ref_lxvnt() {
    return function (p0) {
      return p0.get_UltraFast_5ch09t_k$();
    };
  }
  function TransitionDurationVars$_get_VeryFast_$ref_cu0uvd() {
    return function (p0) {
      return p0.get_VeryFast_7jhf2z_k$();
    };
  }
  function TransitionDurationVars$_get_Fast_$ref_vg87kd() {
    return function (p0) {
      return p0.get_Fast_wo1fb9_k$();
    };
  }
  function TransitionDurationVars$_get_Normal_$ref_e4nae6() {
    return function (p0) {
      return p0.get_Normal_22avww_k$();
    };
  }
  function TransitionDurationVars$_get_Slow_$ref_qcp2rc() {
    return function (p0) {
      return p0.get_Slow_wo9y7e_k$();
    };
  }
  function TransitionDurationVars$_get_VerySlow_$ref_e5ws2() {
    return function (p0) {
      return p0.get_VerySlow_7jpxz4_k$();
    };
  }
  function TransitionDurationVars$_get_UltraSlow_$ref_du4nb8() {
    return function (p0) {
      return p0.get_UltraSlow_5c8hdo_k$();
    };
  }
  function TransitionDurationVars() {
    TransitionDurationVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_ms(0);
    tmp.Instant$delegate_1 = StyleVariable_1(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_ms(50);
    tmp_0.UltraFast$delegate_1 = StyleVariable_1(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_ms(100);
    tmp_1.VeryFast$delegate_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_ms(150);
    tmp_2.Fast$delegate_1 = StyleVariable_1(tmp0_defaultFallback_2, 'silk');
    var tmp_3 = this;
    var tmp0_defaultFallback_3 = get_ms(200);
    tmp_3.Normal$delegate_1 = StyleVariable_1(tmp0_defaultFallback_3, 'silk');
    var tmp_4 = this;
    var tmp0_defaultFallback_4 = get_ms(300);
    tmp_4.Slow$delegate_1 = StyleVariable_1(tmp0_defaultFallback_4, 'silk');
    var tmp_5 = this;
    var tmp0_defaultFallback_5 = get_ms(400);
    tmp_5.VerySlow$delegate_1 = StyleVariable_1(tmp0_defaultFallback_5, 'silk');
    var tmp_6 = this;
    var tmp0_defaultFallback_6 = get_ms(500);
    tmp_6.UltraSlow$delegate_1 = StyleVariable_1(tmp0_defaultFallback_6, 'silk');
  }
  protoOf(TransitionDurationVars).get_Instant_9uzajs_k$ = function () {
    var tmp = KProperty1;
    return this.Instant$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('Instant', 1, tmp, TransitionDurationVars$_get_Instant_$ref_7x6wls(), null));
  };
  protoOf(TransitionDurationVars).get_UltraFast_5ch09t_k$ = function () {
    var tmp = KProperty1;
    return this.UltraFast$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('UltraFast', 1, tmp, TransitionDurationVars$_get_UltraFast_$ref_lxvnt(), null));
  };
  protoOf(TransitionDurationVars).get_VeryFast_7jhf2z_k$ = function () {
    var tmp = KProperty1;
    return this.VeryFast$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('VeryFast', 1, tmp, TransitionDurationVars$_get_VeryFast_$ref_cu0uvd(), null));
  };
  protoOf(TransitionDurationVars).get_Fast_wo1fb9_k$ = function () {
    var tmp = KProperty1;
    return this.Fast$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('Fast', 1, tmp, TransitionDurationVars$_get_Fast_$ref_vg87kd(), null));
  };
  protoOf(TransitionDurationVars).get_Normal_22avww_k$ = function () {
    var tmp = KProperty1;
    return this.Normal$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('Normal', 1, tmp, TransitionDurationVars$_get_Normal_$ref_e4nae6(), null));
  };
  protoOf(TransitionDurationVars).get_Slow_wo9y7e_k$ = function () {
    var tmp = KProperty1;
    return this.Slow$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('Slow', 1, tmp, TransitionDurationVars$_get_Slow_$ref_qcp2rc(), null));
  };
  protoOf(TransitionDurationVars).get_VerySlow_7jpxz4_k$ = function () {
    var tmp = KProperty1;
    return this.VerySlow$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('VerySlow', 1, tmp, TransitionDurationVars$_get_VerySlow_$ref_e5ws2(), null));
  };
  protoOf(TransitionDurationVars).get_UltraSlow_5c8hdo_k$ = function () {
    var tmp = KProperty1;
    return this.UltraSlow$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('UltraSlow', 1, tmp, TransitionDurationVars$_get_UltraSlow_$ref_du4nb8(), null));
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
    return BackgroundColorVar$delegate.getValue_fbnwi2_k$(null, getPropertyCallableRef('BackgroundColorVar', 0, tmp, _get_BackgroundColorVar_$ref_pnobug(), null));
  }
  var BackgroundColorVar$delegate;
  function get_ColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    var tmp = KProperty0;
    return ColorVar$delegate.getValue_fbnwi2_k$(null, getPropertyCallableRef('ColorVar', 0, tmp, _get_ColorVar_$ref_cclgba(), null));
  }
  var ColorVar$delegate;
  function get_BorderColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    var tmp = KProperty0;
    return BorderColorVar$delegate.getValue_fbnwi2_k$(null, getPropertyCallableRef('BorderColorVar', 0, tmp, _get_BorderColorVar_$ref_280m9i(), null));
  }
  var BorderColorVar$delegate;
  function get_FocusOutlineColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    var tmp = KProperty0;
    return FocusOutlineColorVar$delegate.getValue_fbnwi2_k$(null, getPropertyCallableRef('FocusOutlineColorVar', 0, tmp, _get_FocusOutlineColorVar_$ref_r81ezw(), null));
  }
  var FocusOutlineColorVar$delegate;
  function get_PlaceholderOpacityVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    var tmp = KProperty0;
    return PlaceholderOpacityVar$delegate.getValue_fbnwi2_k$(null, getPropertyCallableRef('PlaceholderOpacityVar', 0, tmp, _get_PlaceholderOpacityVar_$ref_6cr8i9(), null));
  }
  var PlaceholderOpacityVar$delegate;
  function get_PlaceholderColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    var tmp = KProperty0;
    return PlaceholderColorVar$delegate.getValue_fbnwi2_k$(null, getPropertyCallableRef('PlaceholderColorVar', 0, tmp, _get_PlaceholderColorVar_$ref_is1luf(), null));
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
      return p0.get_XS_kntocc_k$();
    };
  }
  function FontSizeVars$_get_SM_$ref_l9l5g8() {
    return function (p0) {
      return p0.get_SM_kntogt_k$();
    };
  }
  function FontSizeVars$_get_MD_$ref_sgunm3() {
    return function (p0) {
      return p0.get_MD_kntom8_k$();
    };
  }
  function FontSizeVars$_get_LG_$ref_f7l8kn() {
    return function (p0) {
      return p0.get_LG_knton0_k$();
    };
  }
  function FontSizeVars() {
    FontSizeVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_cssRem(0.75);
    tmp.XS$delegate_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_cssRem(0.875);
    tmp_0.SM$delegate_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_cssRem(1);
    tmp_1.MD$delegate_1 = StyleVariable_0(tmp0_defaultFallback_1, 'silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_cssRem(1.125);
    tmp_2.LG$delegate_1 = StyleVariable_0(tmp0_defaultFallback_2, 'silk');
  }
  protoOf(FontSizeVars).get_XS_kntocc_k$ = function () {
    var tmp = KProperty1;
    return this.XS$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('XS', 1, tmp, FontSizeVars$_get_XS_$ref_g2g1y1(), null));
  };
  protoOf(FontSizeVars).get_SM_kntogt_k$ = function () {
    var tmp = KProperty1;
    return this.SM$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('SM', 1, tmp, FontSizeVars$_get_SM_$ref_l9l5g8(), null));
  };
  protoOf(FontSizeVars).get_MD_kntom8_k$ = function () {
    var tmp = KProperty1;
    return this.MD$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('MD', 1, tmp, FontSizeVars$_get_MD_$ref_sgunm3(), null));
  };
  protoOf(FontSizeVars).get_LG_knton0_k$ = function () {
    var tmp = KProperty1;
    return this.LG$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('LG', 1, tmp, FontSizeVars$_get_LG_$ref_f7l8kn(), null));
  };
  var FontSizeVars_instance;
  function FontSizeVars_getInstance() {
    if (FontSizeVars_instance == null)
      new FontSizeVars();
    return FontSizeVars_instance;
  }
  function BorderRadiusVars$_get_XS_$ref_y88cg7() {
    return function (p0) {
      return p0.get_XS_kntocc_k$();
    };
  }
  function BorderRadiusVars$_get_SM_$ref_vlqm0q() {
    return function (p0) {
      return p0.get_SM_kntogt_k$();
    };
  }
  function BorderRadiusVars$_get_MD_$ref_ab2d3x() {
    return function (p0) {
      return p0.get_MD_kntom8_k$();
    };
  }
  function BorderRadiusVars$_get_LG_$ref_2y71xj() {
    return function (p0) {
      return p0.get_LG_knton0_k$();
    };
  }
  function BorderRadiusVars() {
    BorderRadiusVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_cssRem(0.125);
    tmp.XS$delegate_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_cssRem(0.25);
    tmp_0.SM$delegate_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_cssRem(0.375);
    tmp_1.MD$delegate_1 = StyleVariable_0(tmp0_defaultFallback_1, 'silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_cssRem(0.5);
    tmp_2.LG$delegate_1 = StyleVariable_0(tmp0_defaultFallback_2, 'silk');
  }
  protoOf(BorderRadiusVars).get_XS_kntocc_k$ = function () {
    var tmp = KProperty1;
    return this.XS$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('XS', 1, tmp, BorderRadiusVars$_get_XS_$ref_y88cg7(), null));
  };
  protoOf(BorderRadiusVars).get_SM_kntogt_k$ = function () {
    var tmp = KProperty1;
    return this.SM$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('SM', 1, tmp, BorderRadiusVars$_get_SM_$ref_vlqm0q(), null));
  };
  protoOf(BorderRadiusVars).get_MD_kntom8_k$ = function () {
    var tmp = KProperty1;
    return this.MD$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('MD', 1, tmp, BorderRadiusVars$_get_MD_$ref_ab2d3x(), null));
  };
  protoOf(BorderRadiusVars).get_LG_knton0_k$ = function () {
    var tmp = KProperty1;
    return this.LG$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('LG', 1, tmp, BorderRadiusVars$_get_LG_$ref_2y71xj(), null));
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
  function set_focusOutline(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.set_17rjxm_k$('focusOutline', value);
  }
  function get_focusOutline(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.getValue_r24mvz_k$('focusOutline');
  }
  function SilkWidgetColorGroups$MutableButton$_get_default_$ref_x7wg9f() {
    return function (p0) {
      return p0.get_default_qtagd4_k$();
    };
  }
  function SilkWidgetColorGroups$MutableButton$_set_default_$ref_7itfdt() {
    return function (p0, p1) {
      p0.set_default_r70t7m_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableButton$_get_default_$ref_x7wg9f_0() {
    return function (p0) {
      return p0.get_default_qtagd4_k$();
    };
  }
  function SilkWidgetColorGroups$MutableButton$_set_default_$ref_7itfdt_0() {
    return function (p0, p1) {
      p0.set_default_r70t7m_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableButton$_get_hover_$ref_p9ijma() {
    return function (p0) {
      return p0.get_hover_islez7_k$();
    };
  }
  function SilkWidgetColorGroups$MutableButton$_set_hover_$ref_41bwsa() {
    return function (p0, p1) {
      p0.set_hover_2oswrh_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableButton$_get_hover_$ref_p9ijma_0() {
    return function (p0) {
      return p0.get_hover_islez7_k$();
    };
  }
  function SilkWidgetColorGroups$MutableButton$_set_hover_$ref_41bwsa_0() {
    return function (p0, p1) {
      p0.set_hover_2oswrh_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableButton$_get_focus_$ref_3khuwm() {
    return function (p0) {
      return p0.get_focus_irhg33_k$();
    };
  }
  function SilkWidgetColorGroups$MutableButton$_set_focus_$ref_pqclhy() {
    return function (p0, p1) {
      p0.set_focus_kvs67t_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableButton$_get_focus_$ref_3khuwm_0() {
    return function (p0) {
      return p0.get_focus_irhg33_k$();
    };
  }
  function SilkWidgetColorGroups$MutableButton$_set_focus_$ref_pqclhy_0() {
    return function (p0, p1) {
      p0.set_focus_kvs67t_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableButton$_get_pressed_$ref_v8weqc() {
    return function (p0) {
      return p0.get_pressed_3zxk93_k$();
    };
  }
  function SilkWidgetColorGroups$MutableButton$_set_pressed_$ref_9htgww() {
    return function (p0, p1) {
      p0.set_pressed_58wx37_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableButton$_get_pressed_$ref_v8weqc_0() {
    return function (p0) {
      return p0.get_pressed_3zxk93_k$();
    };
  }
  function SilkWidgetColorGroups$MutableButton$_set_pressed_$ref_9htgww_0() {
    return function (p0, p1) {
      p0.set_pressed_58wx37_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_caution_$ref_3zdyrj() {
    return function (p0) {
      return p0.get_caution_ahahdu_k$();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_caution_$ref_y9s53f() {
    return function (p0, p1) {
      p0.set_caution_qcastw_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_caution_$ref_3zdyrj_0() {
    return function (p0) {
      return p0.get_caution_ahahdu_k$();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_caution_$ref_y9s53f_0() {
    return function (p0, p1) {
      p0.set_caution_qcastw_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_important_$ref_cm0sdm() {
    return function (p0) {
      return p0.get_important_52de2h_k$();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_important_$ref_rtsavy() {
    return function (p0, p1) {
      p0.set_important_k32bpf_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_important_$ref_cm0sdm_0() {
    return function (p0) {
      return p0.get_important_52de2h_k$();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_important_$ref_rtsavy_0() {
    return function (p0, p1) {
      p0.set_important_k32bpf_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_note_$ref_uw9g78() {
    return function (p0) {
      return p0.get_note_wor96j_k$();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_note_$ref_i3d4qg() {
    return function (p0, p1) {
      p0.set_note_ga1pwt_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_note_$ref_uw9g78_0() {
    return function (p0) {
      return p0.get_note_wor96j_k$();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_note_$ref_i3d4qg_0() {
    return function (p0, p1) {
      p0.set_note_ga1pwt_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_question_$ref_83wkaw() {
    return function (p0) {
      return p0.get_question_jy1o6n_k$();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_question_$ref_7fu698() {
    return function (p0, p1) {
      p0.set_question_rocr1d_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_question_$ref_83wkaw_0() {
    return function (p0) {
      return p0.get_question_jy1o6n_k$();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_question_$ref_7fu698_0() {
    return function (p0, p1) {
      p0.set_question_rocr1d_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_quote_$ref_dge3v4() {
    return function (p0) {
      return p0.get_quote_ixn9eb_k$();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_quote_$ref_fugcjg() {
    return function (p0, p1) {
      p0.set_quote_2gksmb_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_quote_$ref_dge3v4_0() {
    return function (p0) {
      return p0.get_quote_ixn9eb_k$();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_quote_$ref_fugcjg_0() {
    return function (p0, p1) {
      p0.set_quote_2gksmb_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_tip_$ref_3elcdr() {
    return function (p0) {
      return p0.get_tip_18ivgu_k$();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_tip_$ref_m7mxz9() {
    return function (p0, p1) {
      p0.set_tip_emcy4k_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_tip_$ref_3elcdr_0() {
    return function (p0) {
      return p0.get_tip_18ivgu_k$();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_tip_$ref_m7mxz9_0() {
    return function (p0, p1) {
      p0.set_tip_emcy4k_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_warning_$ref_39pxao() {
    return function (p0) {
      return p0.get_warning_jv0q7n_k$();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_warning_$ref_xk43mk() {
    return function (p0, p1) {
      p0.set_warning_dgztz1_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_warning_$ref_39pxao_0() {
    return function (p0) {
      return p0.get_warning_jv0q7n_k$();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_warning_$ref_xk43mk_0() {
    return function (p0, p1) {
      p0.set_warning_dgztz1_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableCheckbox$_get_background_$ref_zg40z7() {
    return function (p0) {
      return p0.get_background_stpfw7_k$();
    };
  }
  function SilkWidgetColorGroups$MutableCheckbox$_set_background_$ref_a1wkyh() {
    return function (p0, p1) {
      p0.set_background_9u5jiv_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableCheckbox$_get_background_$ref_zg40z7_0() {
    return function (p0) {
      return p0.get_background_stpfw7_k$();
    };
  }
  function SilkWidgetColorGroups$MutableCheckbox$_set_background_$ref_a1wkyh_0() {
    return function (p0, p1) {
      p0.set_background_9u5jiv_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableCheckbox$_get_hover_$ref_tjb1ib() {
    return function (p0) {
      return p0.get_hover_islez7_k$();
    };
  }
  function SilkWidgetColorGroups$MutableCheckbox$_set_hover_$ref_8gl3r() {
    return function (p0, p1) {
      p0.set_hover_2oswrh_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableCheckbox$_get_hover_$ref_tjb1ib_0() {
    return function (p0) {
      return p0.get_hover_islez7_k$();
    };
  }
  function SilkWidgetColorGroups$MutableCheckbox$_set_hover_$ref_8gl3r_0() {
    return function (p0, p1) {
      p0.set_hover_2oswrh_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableCheckbox$_get_color_$ref_omuyxw() {
    return function (p0) {
      return p0.get_color_ipu8u2_k$();
    };
  }
  function SilkWidgetColorGroups$MutableCheckbox$_set_color_$ref_h3emmo() {
    return function (p0, p1) {
      p0.set_color_6hbvlo_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableCheckbox$_get_color_$ref_omuyxw_0() {
    return function (p0) {
      return p0.get_color_ipu8u2_k$();
    };
  }
  function SilkWidgetColorGroups$MutableCheckbox$_set_color_$ref_h3emmo_0() {
    return function (p0, p1) {
      p0.set_color_6hbvlo_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableInput$_get_hoveredBorder_$ref_n2nfhb() {
    return function (p0) {
      return p0.get_hoveredBorder_pnis3i_k$();
    };
  }
  function SilkWidgetColorGroups$MutableInput$_set_hoveredBorder_$ref_q8nq7h() {
    return function (p0, p1) {
      p0.set_hoveredBorder_9dobm0_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableInput$_get_hoveredBorder_$ref_n2nfhb_0() {
    return function (p0) {
      return p0.get_hoveredBorder_pnis3i_k$();
    };
  }
  function SilkWidgetColorGroups$MutableInput$_set_hoveredBorder_$ref_q8nq7h_0() {
    return function (p0, p1) {
      p0.set_hoveredBorder_9dobm0_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableInput$_get_invalidBorder_$ref_dqky9p() {
    return function (p0) {
      return p0.get_invalidBorder_suexpi_k$();
    };
  }
  function SilkWidgetColorGroups$MutableInput$_set_invalidBorder_$ref_7z7y0n() {
    return function (p0, p1) {
      p0.set_invalidBorder_v1jyzo_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableInput$_get_invalidBorder_$ref_dqky9p_0() {
    return function (p0) {
      return p0.get_invalidBorder_suexpi_k$();
    };
  }
  function SilkWidgetColorGroups$MutableInput$_set_invalidBorder_$ref_7z7y0n_0() {
    return function (p0, p1) {
      p0.set_invalidBorder_v1jyzo_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableInput$_get_filled_$ref_4wf80e() {
    return function (p0) {
      return p0.get_filled_dbz78r_k$();
    };
  }
  function SilkWidgetColorGroups$MutableInput$_set_filled_$ref_a5td4u() {
    return function (p0, p1) {
      p0.set_filled_owq1el_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableInput$_get_filled_$ref_4wf80e_0() {
    return function (p0) {
      return p0.get_filled_dbz78r_k$();
    };
  }
  function SilkWidgetColorGroups$MutableInput$_set_filled_$ref_a5td4u_0() {
    return function (p0, p1) {
      p0.set_filled_owq1el_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableInput$_get_filledHover_$ref_3cfpp0() {
    return function (p0) {
      return p0.get_filledHover_panomn_k$();
    };
  }
  function SilkWidgetColorGroups$MutableInput$_set_filledHover_$ref_dg5x7k() {
    return function (p0, p1) {
      p0.set_filledHover_xo7efv_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableInput$_get_filledHover_$ref_3cfpp0_0() {
    return function (p0) {
      return p0.get_filledHover_panomn_k$();
    };
  }
  function SilkWidgetColorGroups$MutableInput$_set_filledHover_$ref_dg5x7k_0() {
    return function (p0, p1) {
      p0.set_filledHover_xo7efv_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableInput$_get_filledFocus_$ref_p1geeo() {
    return function (p0) {
      return p0.get_filledFocus_pbrnir_k$();
    };
  }
  function SilkWidgetColorGroups$MutableInput$_set_filledFocus_$ref_z56lx8() {
    return function (p0, p1) {
      p0.set_filledFocus_j5xe2x_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableInput$_get_filledFocus_$ref_p1geeo_0() {
    return function (p0) {
      return p0.get_filledFocus_pbrnir_k$();
    };
  }
  function SilkWidgetColorGroups$MutableInput$_set_filledFocus_$ref_z56lx8_0() {
    return function (p0, p1) {
      p0.set_filledFocus_j5xe2x_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableSwitch$_get_backgroundOn_$ref_y8hjxf() {
    return function (p0) {
      return p0.get_backgroundOn_11s1ze_k$();
    };
  }
  function SilkWidgetColorGroups$MutableSwitch$_set_backgroundOn_$ref_7pi8yx() {
    return function (p0, p1) {
      p0.set_backgroundOn_jyhnko_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableSwitch$_get_backgroundOn_$ref_y8hjxf_0() {
    return function (p0) {
      return p0.get_backgroundOn_11s1ze_k$();
    };
  }
  function SilkWidgetColorGroups$MutableSwitch$_set_backgroundOn_$ref_7pi8yx_0() {
    return function (p0, p1) {
      p0.set_backgroundOn_jyhnko_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableSwitch$_get_backgroundOff_$ref_mxrk1d() {
    return function (p0) {
      return p0.get_backgroundOff_wj5pl4_k$();
    };
  }
  function SilkWidgetColorGroups$MutableSwitch$_set_backgroundOff_$ref_17ynr1() {
    return function (p0, p1) {
      p0.set_backgroundOff_a7rgle_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableSwitch$_get_backgroundOff_$ref_mxrk1d_0() {
    return function (p0) {
      return p0.get_backgroundOff_wj5pl4_k$();
    };
  }
  function SilkWidgetColorGroups$MutableSwitch$_set_backgroundOff_$ref_17ynr1_0() {
    return function (p0, p1) {
      p0.set_backgroundOff_a7rgle_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableSwitch$_get_thumb_$ref_9g7urq() {
    return function (p0) {
      return p0.get_thumb_iz2gml_k$();
    };
  }
  function SilkWidgetColorGroups$MutableSwitch$_set_thumb_$ref_wa1qsu() {
    return function (p0, p1) {
      p0.set_thumb_hhfkzb_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableSwitch$_get_thumb_$ref_9g7urq_0() {
    return function (p0) {
      return p0.get_thumb_iz2gml_k$();
    };
  }
  function SilkWidgetColorGroups$MutableSwitch$_set_thumb_$ref_wa1qsu_0() {
    return function (p0, p1) {
      p0.set_thumb_hhfkzb_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_color_$ref_6u4y5q() {
    return function (p0) {
      return p0.get_color_ipu8u2_k$();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_color_$ref_mgpi8u() {
    return function (p0, p1) {
      p0.set_color_6hbvlo_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_color_$ref_6u4y5q_0() {
    return function (p0) {
      return p0.get_color_ipu8u2_k$();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_color_$ref_mgpi8u_0() {
    return function (p0, p1) {
      p0.set_color_6hbvlo_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_background_$ref_xpiv3v() {
    return function (p0) {
      return p0.get_background_stpfw7_k$();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_background_$ref_86ff2f() {
    return function (p0, p1) {
      p0.set_background_9u5jiv_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_background_$ref_xpiv3v_0() {
    return function (p0) {
      return p0.get_background_stpfw7_k$();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_background_$ref_86ff2f_0() {
    return function (p0, p1) {
      p0.set_background_9u5jiv_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_selectedColor_$ref_py1w5z() {
    return function (p0) {
      return p0.get_selectedColor_mfz4gv_k$();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_selectedColor_$ref_488zvn() {
    return function (p0, p1) {
      p0.set_selectedColor_hlprkn_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_selectedColor_$ref_py1w5z_0() {
    return function (p0) {
      return p0.get_selectedColor_mfz4gv_k$();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_selectedColor_$ref_488zvn_0() {
    return function (p0, p1) {
      p0.set_selectedColor_hlprkn_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_selectedBackground_$ref_mhfin4() {
    return function (p0) {
      return p0.get_selectedBackground_7y8aq6_k$();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_selectedBackground_$ref_qal2wc() {
    return function (p0, p1) {
      p0.set_selectedBackground_c6bs9o_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_selectedBackground_$ref_mhfin4_0() {
    return function (p0) {
      return p0.get_selectedBackground_7y8aq6_k$();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_selectedBackground_$ref_qal2wc_0() {
    return function (p0, p1) {
      p0.set_selectedBackground_c6bs9o_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_selectedBorder_$ref_g7y9r2() {
    return function (p0) {
      return p0.get_selectedBorder_f0tq34_k$();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_selectedBorder_$ref_hpx1da() {
    return function (p0, p1) {
      p0.set_selectedBorder_84ayzm_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_selectedBorder_$ref_g7y9r2_0() {
    return function (p0) {
      return p0.get_selectedBorder_f0tq34_k$();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_selectedBorder_$ref_hpx1da_0() {
    return function (p0, p1) {
      p0.set_selectedBorder_84ayzm_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_hover_$ref_a0t3d7() {
    return function (p0) {
      return p0.get_hover_islez7_k$();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_hover_$ref_vpgi7d() {
    return function (p0, p1) {
      p0.set_hover_2oswrh_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_hover_$ref_a0t3d7_0() {
    return function (p0) {
      return p0.get_hover_islez7_k$();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_hover_$ref_vpgi7d_0() {
    return function (p0, p1) {
      p0.set_hover_2oswrh_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_pressed_$ref_ay98jz() {
    return function (p0) {
      return p0.get_pressed_3zxk93_k$();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_pressed_$ref_jc4xrx() {
    return function (p0, p1) {
      p0.set_pressed_58wx37_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_pressed_$ref_ay98jz_0() {
    return function (p0) {
      return p0.get_pressed_3zxk93_k$();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_pressed_$ref_jc4xrx_0() {
    return function (p0, p1) {
      p0.set_pressed_58wx37_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_disabled_$ref_hfh8yb() {
    return function (p0) {
      return p0.get_disabled_rbmjej_k$();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_disabled_$ref_wz7zif() {
    return function (p0, p1) {
      p0.set_disabled_v5i0p5_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_disabled_$ref_hfh8yb_0() {
    return function (p0) {
      return p0.get_disabled_rbmjej_k$();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_disabled_$ref_wz7zif_0() {
    return function (p0, p1) {
      p0.set_disabled_v5i0p5_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableTooltip$_get_background_$ref_qweez1() {
    return function (p0) {
      return p0.get_background_stpfw7_k$();
    };
  }
  function SilkWidgetColorGroups$MutableTooltip$_set_background_$ref_1dayxl() {
    return function (p0, p1) {
      p0.set_background_9u5jiv_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableTooltip$_get_background_$ref_qweez1_0() {
    return function (p0) {
      return p0.get_background_stpfw7_k$();
    };
  }
  function SilkWidgetColorGroups$MutableTooltip$_set_background_$ref_1dayxl_0() {
    return function (p0, p1) {
      p0.set_background_9u5jiv_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableTooltip$_get_color_$ref_bp380s() {
    return function (p0) {
      return p0.get_color_ipu8u2_k$();
    };
  }
  function SilkWidgetColorGroups$MutableTooltip$_set_color_$ref_hlr8ds() {
    return function (p0, p1) {
      p0.set_color_6hbvlo_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetColorGroups$MutableTooltip$_get_color_$ref_bp380s_0() {
    return function (p0) {
      return p0.get_color_ipu8u2_k$();
    };
  }
  function SilkWidgetColorGroups$MutableTooltip$_set_color_$ref_hlr8ds_0() {
    return function (p0, p1) {
      p0.set_color_6hbvlo_k$(p1);
      return Unit_getInstance();
    };
  }
  function Button_1() {
  }
  function MutableButton(palette) {
    ColorGroup.call(this, palette, 'button');
    this.default$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.hover$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.focus$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.pressed$delegate_1 = this.paletteEntry_4qg1pz_k$();
  }
  protoOf(MutableButton).set_default_r70t7m_k$ = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableButton$_get_default_$ref_x7wg9f_0();
    return this.default$delegate_1.setValue_jpcais_k$(this, getPropertyCallableRef('default', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableButton$_set_default_$ref_7itfdt_0()), _set____db54di);
  };
  protoOf(MutableButton).get_default_qtagd4_k$ = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableButton$_get_default_$ref_x7wg9f();
    return this.default$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('default', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableButton$_set_default_$ref_7itfdt()));
  };
  protoOf(MutableButton).set_hover_2oswrh_k$ = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableButton$_get_hover_$ref_p9ijma_0();
    return this.hover$delegate_1.setValue_jpcais_k$(this, getPropertyCallableRef('hover', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableButton$_set_hover_$ref_41bwsa_0()), _set____db54di);
  };
  protoOf(MutableButton).get_hover_islez7_k$ = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableButton$_get_hover_$ref_p9ijma();
    return this.hover$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('hover', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableButton$_set_hover_$ref_41bwsa()));
  };
  protoOf(MutableButton).set_focus_kvs67t_k$ = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableButton$_get_focus_$ref_3khuwm_0();
    return this.focus$delegate_1.setValue_jpcais_k$(this, getPropertyCallableRef('focus', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableButton$_set_focus_$ref_pqclhy_0()), _set____db54di);
  };
  protoOf(MutableButton).get_focus_irhg33_k$ = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableButton$_get_focus_$ref_3khuwm();
    return this.focus$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('focus', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableButton$_set_focus_$ref_pqclhy()));
  };
  protoOf(MutableButton).set_pressed_58wx37_k$ = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableButton$_get_pressed_$ref_v8weqc_0();
    return this.pressed$delegate_1.setValue_jpcais_k$(this, getPropertyCallableRef('pressed', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableButton$_set_pressed_$ref_9htgww_0()), _set____db54di);
  };
  protoOf(MutableButton).get_pressed_3zxk93_k$ = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableButton$_get_pressed_$ref_v8weqc();
    return this.pressed$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('pressed', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableButton$_set_pressed_$ref_9htgww()));
  };
  protoOf(MutableButton).set_s40lvu_k$ = function (default_0, hover, focus, pressed) {
    this.set_default_r70t7m_k$(default_0);
    this.set_hover_2oswrh_k$(hover);
    this.set_focus_kvs67t_k$(focus);
    this.set_pressed_58wx37_k$(pressed);
  };
  function Callout() {
  }
  function MutableCallout(palette) {
    ColorGroup.call(this, palette, 'callout');
    this.caution$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.important$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.note$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.question$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.quote$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.tip$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.warning$delegate_1 = this.paletteEntry_4qg1pz_k$();
  }
  protoOf(MutableCallout).set_caution_qcastw_k$ = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_caution_$ref_3zdyrj_0();
    return this.caution$delegate_1.setValue_jpcais_k$(this, getPropertyCallableRef('caution', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_caution_$ref_y9s53f_0()), _set____db54di);
  };
  protoOf(MutableCallout).get_caution_ahahdu_k$ = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_caution_$ref_3zdyrj();
    return this.caution$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('caution', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_caution_$ref_y9s53f()));
  };
  protoOf(MutableCallout).set_important_k32bpf_k$ = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_important_$ref_cm0sdm_0();
    return this.important$delegate_1.setValue_jpcais_k$(this, getPropertyCallableRef('important', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_important_$ref_rtsavy_0()), _set____db54di);
  };
  protoOf(MutableCallout).get_important_52de2h_k$ = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_important_$ref_cm0sdm();
    return this.important$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('important', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_important_$ref_rtsavy()));
  };
  protoOf(MutableCallout).set_note_ga1pwt_k$ = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_note_$ref_uw9g78_0();
    return this.note$delegate_1.setValue_jpcais_k$(this, getPropertyCallableRef('note', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_note_$ref_i3d4qg_0()), _set____db54di);
  };
  protoOf(MutableCallout).get_note_wor96j_k$ = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_note_$ref_uw9g78();
    return this.note$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('note', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_note_$ref_i3d4qg()));
  };
  protoOf(MutableCallout).set_question_rocr1d_k$ = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_question_$ref_83wkaw_0();
    return this.question$delegate_1.setValue_jpcais_k$(this, getPropertyCallableRef('question', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_question_$ref_7fu698_0()), _set____db54di);
  };
  protoOf(MutableCallout).get_question_jy1o6n_k$ = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_question_$ref_83wkaw();
    return this.question$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('question', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_question_$ref_7fu698()));
  };
  protoOf(MutableCallout).set_quote_2gksmb_k$ = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_quote_$ref_dge3v4_0();
    return this.quote$delegate_1.setValue_jpcais_k$(this, getPropertyCallableRef('quote', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_quote_$ref_fugcjg_0()), _set____db54di);
  };
  protoOf(MutableCallout).get_quote_ixn9eb_k$ = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_quote_$ref_dge3v4();
    return this.quote$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('quote', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_quote_$ref_fugcjg()));
  };
  protoOf(MutableCallout).set_tip_emcy4k_k$ = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_tip_$ref_3elcdr_0();
    return this.tip$delegate_1.setValue_jpcais_k$(this, getPropertyCallableRef('tip', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_tip_$ref_m7mxz9_0()), _set____db54di);
  };
  protoOf(MutableCallout).get_tip_18ivgu_k$ = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_tip_$ref_3elcdr();
    return this.tip$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('tip', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_tip_$ref_m7mxz9()));
  };
  protoOf(MutableCallout).set_warning_dgztz1_k$ = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_warning_$ref_39pxao_0();
    return this.warning$delegate_1.setValue_jpcais_k$(this, getPropertyCallableRef('warning', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_warning_$ref_xk43mk_0()), _set____db54di);
  };
  protoOf(MutableCallout).get_warning_jv0q7n_k$ = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_warning_$ref_39pxao();
    return this.warning$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('warning', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_warning_$ref_xk43mk()));
  };
  protoOf(MutableCallout).set_6605l8_k$ = function (caution, important, note, question, quote, tip, warning) {
    this.set_caution_qcastw_k$(caution);
    this.set_important_k32bpf_k$(important);
    this.set_note_ga1pwt_k$(note);
    this.set_question_rocr1d_k$(question);
    this.set_quote_2gksmb_k$(quote);
    this.set_tip_emcy4k_k$(tip);
    this.set_warning_dgztz1_k$(warning);
  };
  function Checkbox() {
  }
  function MutableCheckbox(palette) {
    ColorGroup.call(this, palette, 'checkbox');
    this.background$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.hover$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.color$delegate_1 = this.paletteEntry_4qg1pz_k$();
  }
  protoOf(MutableCheckbox).set_background_9u5jiv_k$ = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCheckbox$_get_background_$ref_zg40z7_0();
    return this.background$delegate_1.setValue_jpcais_k$(this, getPropertyCallableRef('background', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCheckbox$_set_background_$ref_a1wkyh_0()), _set____db54di);
  };
  protoOf(MutableCheckbox).get_background_stpfw7_k$ = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCheckbox$_get_background_$ref_zg40z7();
    return this.background$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('background', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCheckbox$_set_background_$ref_a1wkyh()));
  };
  protoOf(MutableCheckbox).set_hover_2oswrh_k$ = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCheckbox$_get_hover_$ref_tjb1ib_0();
    return this.hover$delegate_1.setValue_jpcais_k$(this, getPropertyCallableRef('hover', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCheckbox$_set_hover_$ref_8gl3r_0()), _set____db54di);
  };
  protoOf(MutableCheckbox).get_hover_islez7_k$ = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCheckbox$_get_hover_$ref_tjb1ib();
    return this.hover$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('hover', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCheckbox$_set_hover_$ref_8gl3r()));
  };
  protoOf(MutableCheckbox).set_color_6hbvlo_k$ = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCheckbox$_get_color_$ref_omuyxw_0();
    return this.color$delegate_1.setValue_jpcais_k$(this, getPropertyCallableRef('color', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCheckbox$_set_color_$ref_h3emmo_0()), _set____db54di);
  };
  protoOf(MutableCheckbox).get_color_ipu8u2_k$ = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCheckbox$_get_color_$ref_omuyxw();
    return this.color$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('color', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCheckbox$_set_color_$ref_h3emmo()));
  };
  protoOf(MutableCheckbox).set_38lh8k_k$ = function (background, hover, color) {
    this.set_background_9u5jiv_k$(background);
    this.set_hover_2oswrh_k$(hover);
    this.set_color_6hbvlo_k$(color);
  };
  function Input() {
  }
  function MutableInput(palette) {
    ColorGroup.call(this, palette, 'input');
    this.hoveredBorder$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.invalidBorder$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.filled$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.filledHover$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.filledFocus$delegate_1 = this.paletteEntry_4qg1pz_k$();
  }
  protoOf(MutableInput).set_hoveredBorder_9dobm0_k$ = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableInput$_get_hoveredBorder_$ref_n2nfhb_0();
    return this.hoveredBorder$delegate_1.setValue_jpcais_k$(this, getPropertyCallableRef('hoveredBorder', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableInput$_set_hoveredBorder_$ref_q8nq7h_0()), _set____db54di);
  };
  protoOf(MutableInput).get_hoveredBorder_pnis3i_k$ = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableInput$_get_hoveredBorder_$ref_n2nfhb();
    return this.hoveredBorder$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('hoveredBorder', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableInput$_set_hoveredBorder_$ref_q8nq7h()));
  };
  protoOf(MutableInput).set_invalidBorder_v1jyzo_k$ = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableInput$_get_invalidBorder_$ref_dqky9p_0();
    return this.invalidBorder$delegate_1.setValue_jpcais_k$(this, getPropertyCallableRef('invalidBorder', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableInput$_set_invalidBorder_$ref_7z7y0n_0()), _set____db54di);
  };
  protoOf(MutableInput).get_invalidBorder_suexpi_k$ = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableInput$_get_invalidBorder_$ref_dqky9p();
    return this.invalidBorder$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('invalidBorder', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableInput$_set_invalidBorder_$ref_7z7y0n()));
  };
  protoOf(MutableInput).set_filled_owq1el_k$ = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableInput$_get_filled_$ref_4wf80e_0();
    return this.filled$delegate_1.setValue_jpcais_k$(this, getPropertyCallableRef('filled', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableInput$_set_filled_$ref_a5td4u_0()), _set____db54di);
  };
  protoOf(MutableInput).get_filled_dbz78r_k$ = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableInput$_get_filled_$ref_4wf80e();
    return this.filled$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('filled', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableInput$_set_filled_$ref_a5td4u()));
  };
  protoOf(MutableInput).set_filledHover_xo7efv_k$ = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableInput$_get_filledHover_$ref_3cfpp0_0();
    return this.filledHover$delegate_1.setValue_jpcais_k$(this, getPropertyCallableRef('filledHover', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableInput$_set_filledHover_$ref_dg5x7k_0()), _set____db54di);
  };
  protoOf(MutableInput).get_filledHover_panomn_k$ = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableInput$_get_filledHover_$ref_3cfpp0();
    return this.filledHover$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('filledHover', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableInput$_set_filledHover_$ref_dg5x7k()));
  };
  protoOf(MutableInput).set_filledFocus_j5xe2x_k$ = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableInput$_get_filledFocus_$ref_p1geeo_0();
    return this.filledFocus$delegate_1.setValue_jpcais_k$(this, getPropertyCallableRef('filledFocus', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableInput$_set_filledFocus_$ref_z56lx8_0()), _set____db54di);
  };
  protoOf(MutableInput).get_filledFocus_pbrnir_k$ = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableInput$_get_filledFocus_$ref_p1geeo();
    return this.filledFocus$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('filledFocus', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableInput$_set_filledFocus_$ref_z56lx8()));
  };
  protoOf(MutableInput).set_ax4sbs_k$ = function (hoveredBorder, invalidBorder, filled, filledHover, filledFocus) {
    this.set_hoveredBorder_9dobm0_k$(hoveredBorder);
    this.set_invalidBorder_v1jyzo_k$(invalidBorder);
    this.set_filled_owq1el_k$(filled);
    this.set_filledHover_xo7efv_k$(filledHover);
    this.set_filledFocus_j5xe2x_k$(filledFocus);
  };
  function Switch() {
  }
  function MutableSwitch(palette) {
    ColorGroup.call(this, palette, 'switch');
    this.backgroundOn$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.backgroundOff$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.thumb$delegate_1 = this.paletteEntry_4qg1pz_k$();
  }
  protoOf(MutableSwitch).set_backgroundOn_jyhnko_k$ = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableSwitch$_get_backgroundOn_$ref_y8hjxf_0();
    return this.backgroundOn$delegate_1.setValue_jpcais_k$(this, getPropertyCallableRef('backgroundOn', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableSwitch$_set_backgroundOn_$ref_7pi8yx_0()), _set____db54di);
  };
  protoOf(MutableSwitch).get_backgroundOn_11s1ze_k$ = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableSwitch$_get_backgroundOn_$ref_y8hjxf();
    return this.backgroundOn$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('backgroundOn', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableSwitch$_set_backgroundOn_$ref_7pi8yx()));
  };
  protoOf(MutableSwitch).set_backgroundOff_a7rgle_k$ = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableSwitch$_get_backgroundOff_$ref_mxrk1d_0();
    return this.backgroundOff$delegate_1.setValue_jpcais_k$(this, getPropertyCallableRef('backgroundOff', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableSwitch$_set_backgroundOff_$ref_17ynr1_0()), _set____db54di);
  };
  protoOf(MutableSwitch).get_backgroundOff_wj5pl4_k$ = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableSwitch$_get_backgroundOff_$ref_mxrk1d();
    return this.backgroundOff$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('backgroundOff', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableSwitch$_set_backgroundOff_$ref_17ynr1()));
  };
  protoOf(MutableSwitch).set_thumb_hhfkzb_k$ = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableSwitch$_get_thumb_$ref_9g7urq_0();
    return this.thumb$delegate_1.setValue_jpcais_k$(this, getPropertyCallableRef('thumb', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableSwitch$_set_thumb_$ref_wa1qsu_0()), _set____db54di);
  };
  protoOf(MutableSwitch).get_thumb_iz2gml_k$ = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableSwitch$_get_thumb_$ref_9g7urq();
    return this.thumb$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('thumb', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableSwitch$_set_thumb_$ref_wa1qsu()));
  };
  protoOf(MutableSwitch).set_38lh8k_k$ = function (backgroundOn, backgroundOff, thumb) {
    this.set_backgroundOn_jyhnko_k$(backgroundOn);
    this.set_backgroundOff_a7rgle_k$(backgroundOff);
    this.set_thumb_hhfkzb_k$(thumb);
  };
  function Tab_0() {
  }
  function MutableTab(palette) {
    ColorGroup.call(this, palette, 'tab');
    this.color$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.background$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.selectedColor$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.selectedBackground$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.selectedBorder$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.hover$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.pressed$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.disabled$delegate_1 = this.paletteEntry_4qg1pz_k$();
  }
  protoOf(MutableTab).set_color_6hbvlo_k$ = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_color_$ref_6u4y5q_0();
    return this.color$delegate_1.setValue_jpcais_k$(this, getPropertyCallableRef('color', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_color_$ref_mgpi8u_0()), _set____db54di);
  };
  protoOf(MutableTab).get_color_ipu8u2_k$ = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_color_$ref_6u4y5q();
    return this.color$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('color', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_color_$ref_mgpi8u()));
  };
  protoOf(MutableTab).set_background_9u5jiv_k$ = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_background_$ref_xpiv3v_0();
    return this.background$delegate_1.setValue_jpcais_k$(this, getPropertyCallableRef('background', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_background_$ref_86ff2f_0()), _set____db54di);
  };
  protoOf(MutableTab).get_background_stpfw7_k$ = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_background_$ref_xpiv3v();
    return this.background$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('background', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_background_$ref_86ff2f()));
  };
  protoOf(MutableTab).set_selectedColor_hlprkn_k$ = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_selectedColor_$ref_py1w5z_0();
    return this.selectedColor$delegate_1.setValue_jpcais_k$(this, getPropertyCallableRef('selectedColor', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_selectedColor_$ref_488zvn_0()), _set____db54di);
  };
  protoOf(MutableTab).get_selectedColor_mfz4gv_k$ = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_selectedColor_$ref_py1w5z();
    return this.selectedColor$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('selectedColor', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_selectedColor_$ref_488zvn()));
  };
  protoOf(MutableTab).set_selectedBackground_c6bs9o_k$ = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_selectedBackground_$ref_mhfin4_0();
    return this.selectedBackground$delegate_1.setValue_jpcais_k$(this, getPropertyCallableRef('selectedBackground', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_selectedBackground_$ref_qal2wc_0()), _set____db54di);
  };
  protoOf(MutableTab).get_selectedBackground_7y8aq6_k$ = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_selectedBackground_$ref_mhfin4();
    return this.selectedBackground$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('selectedBackground', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_selectedBackground_$ref_qal2wc()));
  };
  protoOf(MutableTab).set_selectedBorder_84ayzm_k$ = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_selectedBorder_$ref_g7y9r2_0();
    return this.selectedBorder$delegate_1.setValue_jpcais_k$(this, getPropertyCallableRef('selectedBorder', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_selectedBorder_$ref_hpx1da_0()), _set____db54di);
  };
  protoOf(MutableTab).get_selectedBorder_f0tq34_k$ = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_selectedBorder_$ref_g7y9r2();
    return this.selectedBorder$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('selectedBorder', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_selectedBorder_$ref_hpx1da()));
  };
  protoOf(MutableTab).set_hover_2oswrh_k$ = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_hover_$ref_a0t3d7_0();
    return this.hover$delegate_1.setValue_jpcais_k$(this, getPropertyCallableRef('hover', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_hover_$ref_vpgi7d_0()), _set____db54di);
  };
  protoOf(MutableTab).get_hover_islez7_k$ = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_hover_$ref_a0t3d7();
    return this.hover$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('hover', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_hover_$ref_vpgi7d()));
  };
  protoOf(MutableTab).set_pressed_58wx37_k$ = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_pressed_$ref_ay98jz_0();
    return this.pressed$delegate_1.setValue_jpcais_k$(this, getPropertyCallableRef('pressed', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_pressed_$ref_jc4xrx_0()), _set____db54di);
  };
  protoOf(MutableTab).get_pressed_3zxk93_k$ = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_pressed_$ref_ay98jz();
    return this.pressed$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('pressed', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_pressed_$ref_jc4xrx()));
  };
  protoOf(MutableTab).set_disabled_v5i0p5_k$ = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_disabled_$ref_hfh8yb_0();
    return this.disabled$delegate_1.setValue_jpcais_k$(this, getPropertyCallableRef('disabled', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_disabled_$ref_wz7zif_0()), _set____db54di);
  };
  protoOf(MutableTab).get_disabled_rbmjej_k$ = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_disabled_$ref_hfh8yb();
    return this.disabled$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('disabled', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_disabled_$ref_wz7zif()));
  };
  protoOf(MutableTab).set_jzzawy_k$ = function (color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled) {
    this.set_color_6hbvlo_k$(color);
    this.set_background_9u5jiv_k$(background);
    this.set_selectedColor_hlprkn_k$(selectedColor);
    this.set_selectedBackground_c6bs9o_k$(selectedBackground);
    this.set_selectedBorder_84ayzm_k$(selectedBorder);
    this.set_hover_2oswrh_k$(hover);
    this.set_pressed_58wx37_k$(pressed);
    this.set_disabled_v5i0p5_k$(disabled);
  };
  protoOf(MutableTab).set$default_u64q8f_k$ = function (color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled, $super) {
    selectedBackground = selectedBackground === VOID ? background : selectedBackground;
    selectedBorder = selectedBorder === VOID ? selectedColor : selectedBorder;
    var tmp;
    if ($super === VOID) {
      this.set_jzzawy_k$(color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.set_jzzawy_k$.call(this, color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled);
    }
    return tmp;
  };
  function Tooltip() {
  }
  function MutableTooltip(palette) {
    ColorGroup.call(this, palette, 'tooltip');
    this.background$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.color$delegate_1 = this.paletteEntry_4qg1pz_k$();
  }
  protoOf(MutableTooltip).set_background_9u5jiv_k$ = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTooltip$_get_background_$ref_qweez1_0();
    return this.background$delegate_1.setValue_jpcais_k$(this, getPropertyCallableRef('background', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTooltip$_set_background_$ref_1dayxl_0()), _set____db54di);
  };
  protoOf(MutableTooltip).get_background_stpfw7_k$ = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTooltip$_get_background_$ref_qweez1();
    return this.background$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('background', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTooltip$_set_background_$ref_1dayxl()));
  };
  protoOf(MutableTooltip).set_color_6hbvlo_k$ = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTooltip$_get_color_$ref_bp380s_0();
    return this.color$delegate_1.setValue_jpcais_k$(this, getPropertyCallableRef('color', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTooltip$_set_color_$ref_hlr8ds_0()), _set____db54di);
  };
  protoOf(MutableTooltip).get_color_ipu8u2_k$ = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTooltip$_get_color_$ref_bp380s();
    return this.color$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('color', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTooltip$_set_color_$ref_hlr8ds()));
  };
  protoOf(MutableTooltip).set_djj1hu_k$ = function (background, color) {
    this.set_background_9u5jiv_k$(background);
    this.set_color_6hbvlo_k$(color);
  };
  function SilkWidgetColorGroups() {
    SilkWidgetColorGroups_instance = this;
  }
  var SilkWidgetColorGroups_instance;
  function SilkWidgetColorGroups_getInstance() {
    if (SilkWidgetColorGroups_instance == null)
      new SilkWidgetColorGroups();
    return SilkWidgetColorGroups_instance;
  }
  function get_color(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.getValue_r24mvz_k$('color');
  }
  function get_button(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableButton(_this__u8e3s4);
  }
  function get_placeholder_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.getValue_r24mvz_k$('placeholder');
  }
  function get_switch(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableSwitch(_this__u8e3s4);
  }
  function get_input(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_input_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_border(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.getValue_r24mvz_k$('border');
  }
  function get_callout(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableCallout(_this__u8e3s4);
  }
  function get_callout_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_callout(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_tab(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_tab_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function set_placeholder(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.set_17rjxm_k$('placeholder', value);
  }
  function get_placeholder_1(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.getValue_r24mvz_k$('placeholder');
  }
  function get_tab_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableTab(_this__u8e3s4);
  }
  function set_color(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.set_17rjxm_k$('color', value);
  }
  function get_color_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.getValue_r24mvz_k$('color');
  }
  function get_button_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_button(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function set_border(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.set_17rjxm_k$('border', value);
  }
  function get_border_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.getValue_r24mvz_k$('border');
  }
  function get_tooltip(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableTooltip(_this__u8e3s4);
  }
  function get_focusOutline_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.getValue_r24mvz_k$('focusOutline');
  }
  function set_overlay(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.set_17rjxm_k$('overlay', value);
  }
  function get_overlay(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.getValue_r24mvz_k$('overlay');
  }
  function get_overlay_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.getValue_r24mvz_k$('overlay');
  }
  function get_tooltip_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_tooltip(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_switch_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_switch(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_checkbox(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableCheckbox(_this__u8e3s4);
  }
  function set_background(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.set_17rjxm_k$('background', value);
  }
  function get_background(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.getValue_r24mvz_k$('background');
  }
  function get_checkbox_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_checkbox(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_input_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableInput(_this__u8e3s4);
  }
  function get_background_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.getValue_r24mvz_k$('background');
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
  _.$_$.j = get_button;
  _.$_$.k = Companion_getInstance_22;
  //endregion
  return _;
}));
