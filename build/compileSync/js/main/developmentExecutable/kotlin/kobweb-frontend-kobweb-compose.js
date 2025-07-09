(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './html-html-core.js', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-runtime-runtime.js', './kobweb-frontend-compose-html-ext.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./html-html-core.js'), require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kobweb-frontend-compose-html-ext.js'));
  else {
    if (typeof globalThis['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-compose'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-kobweb-compose'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-compose'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-kobweb-compose'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-compose'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-kobweb-compose'.");
    }
    if (typeof globalThis['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-compose'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-kobweb-compose'.");
    }
    globalThis['kobweb-frontend-kobweb-compose'] = factory(typeof globalThis['kobweb-frontend-kobweb-compose'] === 'undefined' ? {} : globalThis['kobweb-frontend-kobweb-compose'], globalThis['html-html-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['kobweb-frontend-compose-html-ext']);
  }
}(function (_, kotlin_org_jetbrains_compose_html_html_core, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_com_varabyte_kobweb_compose_html_ext) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var org_jetbrains_compose_web_css_StyleSheet$stableprop_getter = kotlin_org_jetbrains_compose_html_html_core.$_$.g5;
  var Style = kotlin_org_jetbrains_compose_html_html_core.$_$.z5;
  var Unit_getInstance = kotlin_kotlin.$_$.m4;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e1;
  var protoOf = kotlin_kotlin.$_$.lc;
  var initMetadataForClass = kotlin_kotlin.$_$.ib;
  var VOID = kotlin_kotlin.$_$.f;
  var getKClassFromExpression = kotlin_kotlin.$_$.c;
  var THROW_CCE = kotlin_kotlin.$_$.tf;
  var equals = kotlin_kotlin.$_$.bb;
  var hashCode = kotlin_kotlin.$_$.hb;
  var initMetadataForInterface = kotlin_kotlin.$_$.lb;
  var initMetadataForObject = kotlin_kotlin.$_$.nb;
  var rememberComposableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var Div = kotlin_org_jetbrains_compose_html_html_core.$_$.v5;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g3;
  var registerRefScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i3;
  var ensureNotNull = kotlin_kotlin.$_$.lg;
  var arrayConcat = kotlin_kotlin.$_$.a;
  var Annotation = kotlin_kotlin.$_$.ef;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.og;
  var KProperty0 = kotlin_kotlin.$_$.ad;
  var getPropertyCallableRef = kotlin_kotlin.$_$.fb;
  var isInterface = kotlin_kotlin.$_$.wb;
  var columnGap = kotlin_org_jetbrains_compose_html_html_core.$_$.b4;
  var rowGap = kotlin_org_jetbrains_compose_html_html_core.$_$.m5;
  var StyleVariable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h;
  var grid = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.s1;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.k5;
  var get_fr = kotlin_org_jetbrains_compose_html_html_core.$_$.k4;
  var gridArea = kotlin_org_jetbrains_compose_html_html_core.$_$.m4;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.d;
  var alignItems = kotlin_org_jetbrains_compose_html_html_core.$_$.i3;
  var Companion_getInstance_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b4;
  var justifyItems = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.v1;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_html_html_core.$_$.e;
  var alignSelf = kotlin_org_jetbrains_compose_html_html_core.$_$.j3;
  var Companion_getInstance_3 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c4;
  var justifySelf = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.w1;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_html_html_core.$_$.j;
  var display = kotlin_org_jetbrains_compose_html_html_core.$_$.e4;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_html_html_core.$_$.k;
  var flexDirection = kotlin_org_jetbrains_compose_html_html_core.$_$.g4;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_html_html_core.$_$.l;
  var justifyContent = kotlin_org_jetbrains_compose_html_html_core.$_$.s4;
  var flexGrow = kotlin_org_jetbrains_compose_html_html_core.$_$.h4;
  var StyleSheet = kotlin_org_jetbrains_compose_html_html_core.$_$.h3;
  var StyleSheet_init_$Init$ = kotlin_org_jetbrains_compose_html_html_core.$_$.b;
  var layer = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.x1;
  var initMetadataForCompanion = kotlin_kotlin.$_$.jb;
  var ComparableStyleScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d;
  var ComparableAttrsScope_init_$Create$ = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p3;
  var objectCreate = kotlin_kotlin.$_$.kc;
  var Long = kotlin_kotlin.$_$.nf;
  var toString = kotlin_kotlin.$_$.we;
  var toString_0 = kotlin_kotlin.$_$.oc;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.n1;
  var getStringHashCode = kotlin_kotlin.$_$.gb;
  var numberToInt = kotlin_kotlin.$_$.jc;
  var getNumberHashCode = kotlin_kotlin.$_$.eb;
  var toDegrees = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o2;
  var roundToInt = kotlin_kotlin.$_$.pc;
  var coerceIn = kotlin_kotlin.$_$.tc;
  var ariaHidden = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m;
  var ariaDisabled = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l;
  var alignItems_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j;
  var backgroundAttachment = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.n;
  var backgroundClip = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o;
  var backgroundColor = kotlin_org_jetbrains_compose_html_html_core.$_$.m3;
  var backgroundColor_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p;
  var backgroundImage = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.r;
  var backgroundImage_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.s;
  var backgroundImage_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.q;
  var backgroundOrigin = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.t;
  var backgroundPosition = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.u;
  var Companion_getInstance_7 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.u3;
  var backgroundRepeat = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.v;
  var backgroundRepeat_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.w;
  var backgroundSize = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.x;
  var Companion_getInstance_8 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.t3;
  var background = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.y;
  var borderColor = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a1;
  var borderColor_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b1;
  var Color_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.i;
  var Color = kotlin_org_jetbrains_compose_html_html_core.$_$.x2;
  var borderColor_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c1;
  var borderColor_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d1;
  var borderStyle = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g1;
  var borderStyle_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i1;
  var Companion_getInstance_9 = kotlin_org_jetbrains_compose_html_html_core.$_$.m;
  var borderStyle_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f1;
  var borderStyle_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h1;
  var borderWidth = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k1;
  var borderWidth_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.u3;
  var borderWidth_1 = kotlin_org_jetbrains_compose_html_html_core.$_$.v3;
  var borderWidth_2 = kotlin_org_jetbrains_compose_html_html_core.$_$.t3;
  var borderBottom = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.z;
  var borderLeft = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e1;
  var borderRadius = kotlin_org_jetbrains_compose_html_html_core.$_$.s3;
  var border = kotlin_org_jetbrains_compose_html_html_core.$_$.w3;
  var borderTop = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j1;
  var Companion_getInstance_10 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.v3;
  var boxShadow = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l1;
  var boxSizing = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m1;
  var colorScheme = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.n1;
  var opacity = kotlin_org_jetbrains_compose_html_html_core.$_$.e5;
  var color = kotlin_org_jetbrains_compose_html_html_core.$_$.a4;
  var opacity_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.f5;
  var appearance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k;
  var gap = kotlin_org_jetbrains_compose_html_html_core.$_$.l4;
  var fontWeight = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.q1;
  var fontFamily = kotlin_org_jetbrains_compose_html_html_core.$_$.i4;
  var fontSize = kotlin_org_jetbrains_compose_html_html_core.$_$.j4;
  var gridTemplateColumns = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.r1;
  var userSelect = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.x2;
  var cursor = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p1;
  var marginBlockStart = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a2;
  var marginBlockEnd = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.z1;
  var marginLeft = kotlin_org_jetbrains_compose_html_html_core.$_$.w4;
  var marginRight = kotlin_org_jetbrains_compose_html_html_core.$_$.x4;
  var marginTop = kotlin_org_jetbrains_compose_html_html_core.$_$.y4;
  var marginBottom = kotlin_org_jetbrains_compose_html_html_core.$_$.v4;
  var padding = kotlin_org_jetbrains_compose_html_html_core.$_$.h5;
  var margin = kotlin_org_jetbrains_compose_html_html_core.$_$.z4;
  var lineHeight = kotlin_org_jetbrains_compose_html_html_core.$_$.u4;
  var paddingInline = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h2;
  var marginBlock = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b2;
  var zIndex = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a3;
  var verticalAlign = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.y2;
  var Companion_getInstance_11 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d4;
  var listStyle = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.y1;
  var objectFit = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c2;
  var Companion_getInstance_12 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g4;
  var Companion_getInstance_13 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h4;
  var outline = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d2;
  var overflowX = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e2;
  var overflowY = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f2;
  var overflow = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g2;
  var position = kotlin_org_jetbrains_compose_html_html_core.$_$.j5;
  var top = kotlin_org_jetbrains_compose_html_html_core.$_$.o5;
  var left = kotlin_org_jetbrains_compose_html_html_core.$_$.t4;
  var right = kotlin_org_jetbrains_compose_html_html_core.$_$.l5;
  var bottom = kotlin_org_jetbrains_compose_html_html_core.$_$.x3;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.i5;
  var height = kotlin_org_jetbrains_compose_html_html_core.$_$.r4;
  var width = kotlin_org_jetbrains_compose_html_html_core.$_$.r5;
  var minWidth = kotlin_org_jetbrains_compose_html_html_core.$_$.c5;
  var minHeight = kotlin_org_jetbrains_compose_html_html_core.$_$.b5;
  var textAlign = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m2;
  var whiteSpace = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.z2;
  var textDecorationLine = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.n2;
  var rotate = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i2;
  var translateX = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.w2;
  var transitionProperty = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.t2;
  var transitionProperty_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.s2;
  var transitionDuration = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.r2;
  var transitionTimingFunction = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.u2;
  var transitionDelay = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.q2;
  var Companion_getInstance_14 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m4;
  var transitionBehavior = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p2;
  var copyToArray = kotlin_kotlin.$_$.x6;
  var transition = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.v2;
  var Companion_getInstance_15 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l4;
  var setVariable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l2;
  var setVariable_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k2;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(Horizontal_0, 'Horizontal');
  initMetadataForInterface(Vertical_0, 'Vertical');
  initMetadataForInterface(HorizontalOrVertical_0, 'HorizontalOrVertical', VOID, VOID, [Horizontal_0, Vertical_0]);
  initMetadataForClass(SpacedAligned, 'SpacedAligned', VOID, VOID, [HorizontalOrVertical_0]);
  initMetadataForClass(HorizontalOrVertical, 'HorizontalOrVertical', VOID, SpacedAligned);
  initMetadataForClass(Vertical, 'Vertical', VOID, SpacedAligned);
  initMetadataForClass(Horizontal, 'Horizontal', VOID, SpacedAligned);
  initMetadataForObject(End, 'End', VOID, VOID, [Horizontal_0]);
  initMetadataForObject(Start, 'Start', VOID, VOID, [Horizontal_0]);
  initMetadataForObject(Top, 'Top', VOID, VOID, [Vertical_0]);
  initMetadataForObject(Bottom, 'Bottom', VOID, VOID, [Vertical_0]);
  initMetadataForObject(Center, 'Center', VOID, VOID, [HorizontalOrVertical_0]);
  initMetadataForObject(SpaceEvenly, 'SpaceEvenly', VOID, VOID, [HorizontalOrVertical_0]);
  initMetadataForObject(SpaceBetween, 'SpaceBetween', VOID, VOID, [HorizontalOrVertical_0]);
  initMetadataForObject(SpaceAround, 'SpaceAround', VOID, VOID, [HorizontalOrVertical_0]);
  initMetadataForObject(FromStyle, 'FromStyle', VOID, VOID, [HorizontalOrVertical_0]);
  initMetadataForObject(Arrangement, 'Arrangement');
  function align(_this__u8e3s4, alignment) {
    return attrsModifier(_this__u8e3s4, BoxScope$align$lambda(alignment));
  }
  initMetadataForInterface(BoxScope, 'BoxScope');
  initMetadataForObject(ComposableSingletons$BoxKt, 'ComposableSingletons$BoxKt');
  initMetadataForObject(BoxScopeInstance, 'BoxScopeInstance', VOID, VOID, [BoxScope]);
  initMetadataForObject(BoxDefaults, 'BoxDefaults');
  function weight(_this__u8e3s4, value) {
    return flexGrow_0(_this__u8e3s4, value);
  }
  initMetadataForInterface(FlexScope, 'FlexScope');
  function align_0(_this__u8e3s4, alignment) {
    return attrsModifier(_this__u8e3s4, ColumnScope$align$lambda(alignment));
  }
  initMetadataForInterface(ColumnScope, 'ColumnScope', VOID, VOID, [FlexScope]);
  initMetadataForObject(ColumnDefaults, 'ColumnDefaults');
  initMetadataForObject(ColumnScopeInstance, 'ColumnScopeInstance', VOID, VOID, [ColumnScope]);
  initMetadataForClass(LayoutScopeMarker, 'LayoutScopeMarker', VOID, VOID, [Annotation]);
  function align_1(_this__u8e3s4, alignment) {
    return attrsModifier(_this__u8e3s4, RowScope$align$lambda(alignment));
  }
  initMetadataForInterface(RowScope, 'RowScope', VOID, VOID, [FlexScope]);
  initMetadataForObject(RowDefaults, 'RowDefaults');
  initMetadataForObject(RowScopeInstance, 'RowScopeInstance', VOID, VOID, [RowScope]);
  initMetadataForObject(KobwebComposeStyleSheet, 'KobwebComposeStyleSheet', VOID, StyleSheet);
  initMetadataForInterface(Vertical_1, 'Vertical');
  initMetadataForInterface(Horizontal_1, 'Horizontal');
  initMetadataForInterface(Alignment, 'Alignment');
  initMetadataForObject(TopStart, 'TopStart', VOID, VOID, [Alignment]);
  initMetadataForObject(TopCenter, 'TopCenter', VOID, VOID, [Alignment]);
  initMetadataForObject(TopEnd, 'TopEnd', VOID, VOID, [Alignment]);
  initMetadataForObject(CenterStart, 'CenterStart', VOID, VOID, [Alignment]);
  initMetadataForObject(Center_0, 'Center', VOID, VOID, [Alignment]);
  initMetadataForObject(CenterEnd, 'CenterEnd', VOID, VOID, [Alignment]);
  initMetadataForObject(BottomStart, 'BottomStart', VOID, VOID, [Alignment]);
  initMetadataForObject(BottomCenter, 'BottomCenter', VOID, VOID, [Alignment]);
  initMetadataForObject(BottomEnd, 'BottomEnd', VOID, VOID, [Alignment]);
  initMetadataForObject(Top_0, 'Top', VOID, VOID, [Vertical_1]);
  initMetadataForObject(CenterVertically, 'CenterVertically', VOID, VOID, [Vertical_1]);
  initMetadataForObject(Bottom_0, 'Bottom', VOID, VOID, [Vertical_1]);
  initMetadataForObject(Start_0, 'Start', VOID, VOID, [Horizontal_1]);
  initMetadataForObject(CenterHorizontally, 'CenterHorizontally', VOID, VOID, [Horizontal_1]);
  initMetadataForObject(End_0, 'End', VOID, VOID, [Horizontal_1]);
  initMetadataForObject(FromStyle_0, 'FromStyle', VOID, VOID, [Alignment, Horizontal_1, Vertical_1]);
  function then(other) {
    return other === Companion_getInstance_16() ? this : new ChainedModifier(this, other);
  }
  initMetadataForInterface(Modifier, 'Modifier');
  function fold(initial, operation) {
    return operation(initial, this);
  }
  initMetadataForInterface(Element, 'Element', VOID, VOID, [Modifier]);
  initMetadataForCompanion(Companion, VOID, [Modifier]);
  initMetadataForClass(ChainedModifier, 'ChainedModifier', VOID, VOID, [Modifier]);
  initMetadataForInterface(WebModifier, 'WebModifier', VOID, VOID, [Element]);
  initMetadataForClass(StyleModifier, 'StyleModifier', VOID, VOID, [WebModifier]);
  initMetadataForClass(AttrsModifier, 'AttrsModifier', VOID, VOID, [WebModifier]);
  initMetadataForObject(Colors, 'Colors');
  function darkened$default(byPercent, $super) {
    byPercent = byPercent === VOID ? 0.3 : byPercent;
    return $super === VOID ? this.darkened_iwrtmu_k$(byPercent) : $super.darkened_iwrtmu_k$.call(this, byPercent);
  }
  initMetadataForInterface(Color_0, 'Color');
  function copy$default(red, green, blue, alpha, $super) {
    red = red === VOID ? this.get_red_18ix20_k$() : red;
    green = green === VOID ? this.get_green_is36qi_k$() : green;
    blue = blue === VOID ? this.get_blue_wojj4z_k$() : blue;
    alpha = alpha === VOID ? this.get_alpha_iooth1_k$() : alpha;
    return $super === VOID ? this.copy_my5h57_k$(red, green, blue, alpha) : $super.copy_my5h57_k$.call(this, red, green, blue, alpha);
  }
  function copyf$default(red, green, blue, alpha, $super) {
    red = red === VOID ? this.get_redf_wotlby_k$() : red;
    green = green === VOID ? this.get_greenf_dxud3g_k$() : green;
    blue = blue === VOID ? this.get_bluef_ip8ppf_k$() : blue;
    alpha = alpha === VOID ? this.get_alphaf_b0gxxt_k$() : alpha;
    return $super === VOID ? this.copyf_olenlb_k$(red, green, blue, alpha) : $super.copyf_olenlb_k$.call(this, red, green, blue, alpha);
  }
  initMetadataForInterface(Rgb, 'Rgb', VOID, VOID, [Color_0]);
  initMetadataForClass(RawRgb, 'RawRgb', VOID, VOID, [Rgb]);
  initMetadataForClass(NamedRgb_0, 'NamedRgb', VOID, VOID, [Rgb]);
  initMetadataForClass(Hsl, 'Hsl', VOID, VOID, [Color_0]);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(BackgroundScope, 'BackgroundScope');
  initMetadataForClass(BackgroundPositionScope, 'BackgroundPositionScope');
  initMetadataForClass(BorderScope, 'BorderScope');
  initMetadataForClass(MarginBlockScope, 'MarginBlockScope');
  initMetadataForClass(MarginScope, 'MarginScope');
  initMetadataForClass(OverflowScope, 'OverflowScope');
  initMetadataForClass(TransitionScope, 'TransitionScope');
  //endregion
  function KobwebComposeStyles($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-292028647);
    if ($composer_0.shouldExecute_4fplh_k$(!($changed === 0), $changed & 1)) {
      var tmp0 = KobwebComposeStyleSheet_getInstance();
      var tmp2 = $composer_0;
      // Inline function 'org.jetbrains.compose.web.css.Style' call
      org_jetbrains_compose_web_css_StyleSheet$stableprop_getter();
      var $composer_1 = tmp2;
      $composer_1.startReplaceGroup_5hh8aj_k$(-1196466140);
      Style(null, tmp0.get_cssRules_jdoznh_k$(), $composer_1, 0, 1);
      $composer_1.endReplaceGroup_ek144q_k$();
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(KobwebComposeStyles$lambda($changed));
    }
  }
  function KobwebComposeStyles$lambda($$changed) {
    return function ($composer, $force) {
      KobwebComposeStyles($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var com_varabyte_kobweb_compose_foundation_layout_Arrangement_End$stable;
  var com_varabyte_kobweb_compose_foundation_layout_Arrangement_Start$stable;
  var com_varabyte_kobweb_compose_foundation_layout_Arrangement_Top$stable;
  var com_varabyte_kobweb_compose_foundation_layout_Arrangement_Bottom$stable;
  var com_varabyte_kobweb_compose_foundation_layout_Arrangement_Center$stable;
  var com_varabyte_kobweb_compose_foundation_layout_Arrangement_SpaceEvenly$stable;
  var com_varabyte_kobweb_compose_foundation_layout_Arrangement_SpaceBetween$stable;
  var com_varabyte_kobweb_compose_foundation_layout_Arrangement_SpaceAround$stable;
  var com_varabyte_kobweb_compose_foundation_layout_Arrangement_FromStyle$stable;
  var com_varabyte_kobweb_compose_foundation_layout_Arrangement$stable;
  var com_varabyte_kobweb_compose_foundation_layout_SpacedAligned_HorizontalOrVertical$stable;
  var com_varabyte_kobweb_compose_foundation_layout_SpacedAligned_Vertical$stable;
  var com_varabyte_kobweb_compose_foundation_layout_SpacedAligned_Horizontal$stable;
  var com_varabyte_kobweb_compose_foundation_layout_SpacedAligned$stable;
  function com_varabyte_kobweb_compose_foundation_layout_Arrangement_Center$stableprop_getter() {
    return com_varabyte_kobweb_compose_foundation_layout_Arrangement_Center$stable;
  }
  function com_varabyte_kobweb_compose_foundation_layout_Arrangement_Top$stableprop_getter() {
    return com_varabyte_kobweb_compose_foundation_layout_Arrangement_Top$stable;
  }
  function HorizontalOrVertical(spacing) {
    SpacedAligned.call(this, spacing);
  }
  function Vertical(spacing, alignment) {
    SpacedAligned.call(this, spacing);
    this.alignment_1 = alignment;
  }
  protoOf(Vertical).get_alignment_3b5231_k$ = function () {
    return this.alignment_1;
  };
  function Horizontal(spacing, alignment) {
    SpacedAligned.call(this, spacing);
    this.alignment_1 = alignment;
  }
  protoOf(Horizontal).get_alignment_3b5231_k$ = function () {
    return this.alignment_1;
  };
  function SpacedAligned(spacing) {
    this.spacing_1 = spacing;
  }
  protoOf(SpacedAligned).get_spacing_w0flpi_k$ = function () {
    return this.spacing_1;
  };
  protoOf(SpacedAligned).equals = function (other) {
    if (this === other)
      return true;
    if (other == null)
      return false;
    if (!getKClassFromExpression(other).equals(getKClassFromExpression(this)))
      return false;
    var other_0 = other instanceof SpacedAligned ? other : THROW_CCE();
    var tmp;
    if (equals(this.spacing_1, other_0.spacing_1)) {
      var tmp_0;
      if (this instanceof Vertical) {
        tmp_0 = equals(this.alignment_1, (other_0 instanceof Vertical ? other_0 : THROW_CCE()).alignment_1);
      } else {
        if (this instanceof Horizontal) {
          tmp_0 = equals(this.alignment_1, (other_0 instanceof Horizontal ? other_0 : THROW_CCE()).alignment_1);
        } else {
          tmp_0 = true;
        }
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SpacedAligned).hashCode = function () {
    var result = hashCode(this.spacing_1);
    if (this instanceof Vertical)
      result = result + imul(31, hashCode(this.alignment_1)) | 0;
    else {
      if (this instanceof Horizontal)
        result = result + imul(31, hashCode(this.alignment_1)) | 0;
    }
    return result;
  };
  function Horizontal_0() {
  }
  function Vertical_0() {
  }
  function HorizontalOrVertical_0() {
  }
  function End() {
    End_instance = this;
  }
  var End_instance;
  function End_getInstance() {
    if (End_instance == null)
      new End();
    return End_instance;
  }
  function Start() {
    Start_instance = this;
  }
  var Start_instance;
  function Start_getInstance() {
    if (Start_instance == null)
      new Start();
    return Start_instance;
  }
  function Top() {
    Top_instance = this;
  }
  var Top_instance;
  function Top_getInstance() {
    if (Top_instance == null)
      new Top();
    return Top_instance;
  }
  function Bottom() {
    Bottom_instance = this;
  }
  var Bottom_instance;
  function Bottom_getInstance() {
    if (Bottom_instance == null)
      new Bottom();
    return Bottom_instance;
  }
  function Center() {
    Center_instance = this;
  }
  var Center_instance;
  function Center_getInstance() {
    if (Center_instance == null)
      new Center();
    return Center_instance;
  }
  function SpaceEvenly() {
    SpaceEvenly_instance = this;
  }
  var SpaceEvenly_instance;
  function SpaceEvenly_getInstance() {
    if (SpaceEvenly_instance == null)
      new SpaceEvenly();
    return SpaceEvenly_instance;
  }
  function SpaceBetween() {
    SpaceBetween_instance = this;
  }
  var SpaceBetween_instance;
  function SpaceBetween_getInstance() {
    if (SpaceBetween_instance == null)
      new SpaceBetween();
    return SpaceBetween_instance;
  }
  function SpaceAround() {
    SpaceAround_instance = this;
  }
  var SpaceAround_instance;
  function SpaceAround_getInstance() {
    if (SpaceAround_instance == null)
      new SpaceAround();
    return SpaceAround_instance;
  }
  function FromStyle() {
    FromStyle_instance = this;
  }
  var FromStyle_instance;
  function FromStyle_getInstance() {
    if (FromStyle_instance == null)
      new FromStyle();
    return FromStyle_instance;
  }
  function Arrangement() {
    Arrangement_instance = this;
  }
  protoOf(Arrangement).spacedBy_9noyc7_k$ = function (space) {
    return new HorizontalOrVertical(space);
  };
  protoOf(Arrangement).spacedBy_q5wwc_k$ = function (space, alignment) {
    return new Vertical(space, alignment);
  };
  protoOf(Arrangement).spacedBy_xrntom_k$ = function (space, alignment) {
    return new Horizontal(space, alignment);
  };
  var Arrangement_instance;
  function Arrangement_getInstance() {
    if (Arrangement_instance == null)
      new Arrangement();
    return Arrangement_instance;
  }
  var com_varabyte_kobweb_compose_foundation_layout_BoxScopeInstance$stable;
  var com_varabyte_kobweb_compose_foundation_layout_BoxDefaults$stable;
  function Box(modifier, contentAlignment, ref, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var contentAlignment_0 = {_v: contentAlignment};
    var ref_0 = {_v: ref};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-633554927);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.changed_ga7h3f_k$(modifier_0._v) : $composer_0.changedInstance_s1wkiy_k$(modifier_0._v)) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ((($changed & 64) === 0 ? $composer_0.changed_ga7h3f_k$(contentAlignment_0._v) : $composer_0.changedInstance_s1wkiy_k$(contentAlignment_0._v)) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ((($changed & 512) === 0 ? $composer_0.changed_ga7h3f_k$(ref_0._v) : $composer_0.changedInstance_s1wkiy_k$(ref_0._v)) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content_0._v) ? 2048 : 1024);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 1171) === 1170), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance_16();
      }
      if (!(($default & 2) === 0)) {
        contentAlignment_0._v = TopStart_getInstance();
      }
      if (!(($default & 4) === 0)) {
        ref_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        content_0._v = ComposableSingletons$BoxKt_getInstance().lambda$1700712661__1;
      }
      var tmp = toAttrs(boxClasses(modifier_0._v, contentAlignment_0._v));
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(1660882128, true, Box$lambda(ref_0, content_0), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_0(dispatchReceiver);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(Box$lambda_0(modifier_0, contentAlignment_0, ref_0, content_0, $changed, $default));
    }
  }
  function BoxScope$align$lambda($alignment) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.classes_ayghm2_k$([toClassName_0($alignment) + '-self']);
      return Unit_getInstance();
    };
  }
  function BoxScope() {
  }
  function ComposableLambda$invoke$ref(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$BoxKt$lambda$1700712661$lambda(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    if (!$composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$BoxKt() {
    ComposableSingletons$BoxKt_instance = this;
    var tmp = this;
    tmp.lambda$1700712661__1 = ComposableLambda$invoke$ref(composableLambdaInstance(1700712661, false, ComposableSingletons$BoxKt$lambda$1700712661$lambda));
  }
  protoOf(ComposableSingletons$BoxKt).get_lambda$1700712661_wz4z3o_k$ = function () {
    return this.lambda$1700712661__1;
  };
  var ComposableSingletons$BoxKt_instance;
  function ComposableSingletons$BoxKt_getInstance() {
    if (ComposableSingletons$BoxKt_instance == null)
      new ComposableSingletons$BoxKt();
    return ComposableSingletons$BoxKt_instance;
  }
  function boxClasses(_this__u8e3s4, contentAlignment) {
    contentAlignment = contentAlignment === VOID ? BoxDefaults_getInstance().ContentAlignment_1 : contentAlignment;
    return classNames(_this__u8e3s4, ['kobweb-box', toClassName_0(contentAlignment)]);
  }
  function BoxScopeInstance() {
    BoxScopeInstance_instance = this;
  }
  var BoxScopeInstance_instance;
  function BoxScopeInstance_getInstance() {
    if (BoxScopeInstance_instance == null)
      new BoxScopeInstance();
    return BoxScopeInstance_instance;
  }
  function BoxDefaults() {
    BoxDefaults_instance = this;
    this.ContentAlignment_1 = TopStart_getInstance();
  }
  protoOf(BoxDefaults).get_ContentAlignment_3kz1oz_k$ = function () {
    return this.ContentAlignment_1;
  };
  var BoxDefaults_instance;
  function BoxDefaults_getInstance() {
    if (BoxDefaults_instance == null)
      new BoxDefaults();
    return BoxDefaults_instance;
  }
  function Box$lambda($ref, $content) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      registerRefScope($this$Div, $ref._v, $composer_0, 14 & $changed | com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter() << 3);
      $content._v(BoxScopeInstance_getInstance(), $composer_0, 6);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_0(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function Box$lambda_0($modifier, $contentAlignment, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Box($modifier._v, $contentAlignment._v, $ref._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  var com_varabyte_kobweb_compose_foundation_layout_ColumnScopeInstance$stable;
  var com_varabyte_kobweb_compose_foundation_layout_ColumnDefaults$stable;
  function ColumnScope$align$lambda($alignment) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.classes_ayghm2_k$([toClassName_1($alignment) + '-self']);
      return Unit_getInstance();
    };
  }
  function ColumnScope() {
  }
  function Column(modifier, verticalArrangement, horizontalAlignment, ref, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var verticalArrangement_0 = {_v: verticalArrangement};
    var horizontalAlignment_0 = {_v: horizontalAlignment};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-523411892);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.changed_ga7h3f_k$(modifier_0._v) : $composer_0.changedInstance_s1wkiy_k$(modifier_0._v)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | (($default & 2) === 0 && (($changed & 64) === 0 ? $composer_0.changed_ga7h3f_k$(verticalArrangement_0._v) : $composer_0.changedInstance_s1wkiy_k$(verticalArrangement_0._v)) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | (($default & 4) === 0 && (($changed & 512) === 0 ? $composer_0.changed_ga7h3f_k$(horizontalAlignment_0._v) : $composer_0.changedInstance_s1wkiy_k$(horizontalAlignment_0._v)) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ((($changed & 4096) === 0 ? $composer_0.changed_ga7h3f_k$(ref_0._v) : $composer_0.changedInstance_s1wkiy_k$(ref_0._v)) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 16384 : 8192);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 9363) === 9362), $dirty & 1)) {
      $composer_0.startDefaults_g83kzo_k$();
      if (($changed & 1) === 0 || $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_getInstance_16();
        }
        if (!(($default & 2) === 0)) {
          verticalArrangement_0._v = ColumnDefaults_getInstance().VerticalArrangement_1;
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
          horizontalAlignment_0._v = ColumnDefaults_getInstance().HorizontalAlignment_1;
          $dirty = $dirty & -897;
        }
        if (!(($default & 8) === 0)) {
          ref_0._v = null;
        }
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.endDefaults_b0s0ot_k$();
      var tmp0 = columnClasses(modifier_0._v, verticalArrangement_0._v, horizontalAlignment_0._v);
      var tmp = verticalArrangement_0._v;
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIfNotNull' call
      var value = tmp instanceof SpacedAligned ? tmp : null;
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
      var tmp_0;
      if (!(value == null)) {
        var it = ensureNotNull(value);
        tmp_0 = setVariable_2(Companion_getInstance_16(), get_ArrangeSpacedByVar(), it.get_spacing_w0flpi_k$());
      } else {
        tmp_0 = Companion_getInstance_16();
      }
      var tmp$ret$3 = tmp0.then_mmfvo6_k$(tmp_0);
      var tmp_1 = toAttrs(tmp$ret$3);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-1859889909, true, Column$lambda(ref_0, content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp_1, tmp0_0, $composer_0, 48, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Column$lambda_0(modifier_0, verticalArrangement_0, horizontalAlignment_0, ref_0, content, $changed, $default));
    }
  }
  function ColumnDefaults() {
    ColumnDefaults_instance = this;
    this.VerticalArrangement_1 = Top_getInstance();
    this.HorizontalAlignment_1 = Start_getInstance_0();
  }
  protoOf(ColumnDefaults).get_VerticalArrangement_saziz9_k$ = function () {
    return this.VerticalArrangement_1;
  };
  protoOf(ColumnDefaults).get_HorizontalAlignment_d8l8ra_k$ = function () {
    return this.HorizontalAlignment_1;
  };
  var ColumnDefaults_instance;
  function ColumnDefaults_getInstance() {
    if (ColumnDefaults_instance == null)
      new ColumnDefaults();
    return ColumnDefaults_instance;
  }
  function columnClasses(_this__u8e3s4, verticalArrangement, horizontalAlignment) {
    verticalArrangement = verticalArrangement === VOID ? ColumnDefaults_getInstance().VerticalArrangement_1 : verticalArrangement;
    horizontalAlignment = horizontalAlignment === VOID ? ColumnDefaults_getInstance().HorizontalAlignment_1 : horizontalAlignment;
    return classNames(_this__u8e3s4, arrayConcat([['kobweb-col'], toClassNames_0(verticalArrangement), [toClassName_1(horizontalAlignment)]]));
  }
  function ColumnScopeInstance() {
    ColumnScopeInstance_instance = this;
  }
  var ColumnScopeInstance_instance;
  function ColumnScopeInstance_getInstance() {
    if (ColumnScopeInstance_instance == null)
      new ColumnScopeInstance();
    return ColumnScopeInstance_instance;
  }
  function Column$lambda($ref, $content) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      registerRefScope($this$Div, $ref._v, $composer_0, 14 & $changed | com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter() << 3);
      $content(ColumnScopeInstance_getInstance(), $composer_0, 6);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_1(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function Column$lambda_0($modifier, $verticalArrangement, $horizontalAlignment, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Column($modifier._v, $verticalArrangement._v, $horizontalAlignment._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function FlexScope() {
  }
  function LayoutScopeMarker() {
  }
  protoOf(LayoutScopeMarker).equals = function (other) {
    if (!(other instanceof LayoutScopeMarker))
      return false;
    other instanceof LayoutScopeMarker || THROW_CCE();
    return true;
  };
  protoOf(LayoutScopeMarker).hashCode = function () {
    return 0;
  };
  protoOf(LayoutScopeMarker).toString = function () {
    return '@com.varabyte.kobweb.compose.foundation.layout.LayoutScopeMarker(' + ')';
  };
  var com_varabyte_kobweb_compose_foundation_layout_RowScopeInstance$stable;
  var com_varabyte_kobweb_compose_foundation_layout_RowDefaults$stable;
  function RowScope$align$lambda($alignment) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.classes_ayghm2_k$([toClassName($alignment) + '-self']);
      return Unit_getInstance();
    };
  }
  function RowScope() {
  }
  function rowClasses(_this__u8e3s4, horizontalArrangement, verticalAlignment) {
    horizontalArrangement = horizontalArrangement === VOID ? RowDefaults_getInstance().HorizontalArrangement_1 : horizontalArrangement;
    verticalAlignment = verticalAlignment === VOID ? RowDefaults_getInstance().VerticalAlignment_1 : verticalAlignment;
    return classNames(_this__u8e3s4, arrayConcat([['kobweb-row'], toClassNames(horizontalArrangement), [toClassName(verticalAlignment)]]));
  }
  function RowDefaults() {
    RowDefaults_instance = this;
    this.HorizontalArrangement_1 = Start_getInstance();
    this.VerticalAlignment_1 = Top_getInstance_0();
  }
  protoOf(RowDefaults).get_HorizontalArrangement_ucg5j7_k$ = function () {
    return this.HorizontalArrangement_1;
  };
  protoOf(RowDefaults).get_VerticalAlignment_e9x2ys_k$ = function () {
    return this.VerticalAlignment_1;
  };
  var RowDefaults_instance;
  function RowDefaults_getInstance() {
    if (RowDefaults_instance == null)
      new RowDefaults();
    return RowDefaults_instance;
  }
  function Row(modifier, horizontalArrangement, verticalAlignment, ref, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var horizontalArrangement_0 = {_v: horizontalArrangement};
    var verticalAlignment_0 = {_v: verticalAlignment};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-99741930);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.changed_ga7h3f_k$(modifier_0._v) : $composer_0.changedInstance_s1wkiy_k$(modifier_0._v)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | (($default & 2) === 0 && (($changed & 64) === 0 ? $composer_0.changed_ga7h3f_k$(horizontalArrangement_0._v) : $composer_0.changedInstance_s1wkiy_k$(horizontalArrangement_0._v)) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | (($default & 4) === 0 && (($changed & 512) === 0 ? $composer_0.changed_ga7h3f_k$(verticalAlignment_0._v) : $composer_0.changedInstance_s1wkiy_k$(verticalAlignment_0._v)) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ((($changed & 4096) === 0 ? $composer_0.changed_ga7h3f_k$(ref_0._v) : $composer_0.changedInstance_s1wkiy_k$(ref_0._v)) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 16384 : 8192);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 9363) === 9362), $dirty & 1)) {
      $composer_0.startDefaults_g83kzo_k$();
      if (($changed & 1) === 0 || $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_getInstance_16();
        }
        if (!(($default & 2) === 0)) {
          horizontalArrangement_0._v = RowDefaults_getInstance().HorizontalArrangement_1;
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
          verticalAlignment_0._v = RowDefaults_getInstance().VerticalAlignment_1;
          $dirty = $dirty & -897;
        }
        if (!(($default & 8) === 0)) {
          ref_0._v = null;
        }
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.endDefaults_b0s0ot_k$();
      var tmp0 = rowClasses(modifier_0._v, horizontalArrangement_0._v, verticalAlignment_0._v);
      var tmp = horizontalArrangement_0._v;
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIfNotNull' call
      var value = tmp instanceof SpacedAligned ? tmp : null;
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
      var tmp_0;
      if (!(value == null)) {
        var it = ensureNotNull(value);
        tmp_0 = setVariable_2(Companion_getInstance_16(), get_ArrangeSpacedByVar(), it.get_spacing_w0flpi_k$());
      } else {
        tmp_0 = Companion_getInstance_16();
      }
      var tmp$ret$3 = tmp0.then_mmfvo6_k$(tmp_0);
      var tmp_1 = toAttrs(tmp$ret$3);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(429441301, true, Row$lambda(ref_0, content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableLambda$invoke$ref_2(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp_1, tmp0_0, $composer_0, 48, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Row$lambda_0(modifier_0, horizontalArrangement_0, verticalAlignment_0, ref_0, content, $changed, $default));
    }
  }
  function RowScopeInstance() {
    RowScopeInstance_instance = this;
  }
  var RowScopeInstance_instance;
  function RowScopeInstance_getInstance() {
    if (RowScopeInstance_instance == null)
      new RowScopeInstance();
    return RowScopeInstance_instance;
  }
  function Row$lambda($ref, $content) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      registerRefScope($this$Div, $ref._v, $composer_0, 14 & $changed | com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter() << 3);
      $content(RowScopeInstance_getInstance(), $composer_0, 6);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_2(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function Row$lambda_0($modifier, $horizontalArrangement, $verticalAlignment, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Row($modifier._v, $horizontalArrangement._v, $verticalAlignment._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function toClassName(_this__u8e3s4) {
    var tmp;
    if (equals(_this__u8e3s4, Top_getInstance_0())) {
      tmp = 'kobweb-align-top';
    } else if (equals(_this__u8e3s4, CenterVertically_getInstance())) {
      tmp = 'kobweb-align-center-vert';
    } else if (equals(_this__u8e3s4, Bottom_getInstance_0())) {
      tmp = 'kobweb-align-bottom';
    } else if (equals(_this__u8e3s4, FromStyle_getInstance_0())) {
      tmp = 'kobweb-align-from-style-vert';
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  }
  function toClassName_0(_this__u8e3s4) {
    var tmp;
    if (equals(_this__u8e3s4, TopStart_getInstance())) {
      tmp = 'kobweb-align-top-start';
    } else if (equals(_this__u8e3s4, TopCenter_getInstance())) {
      tmp = 'kobweb-align-top-center';
    } else if (equals(_this__u8e3s4, TopEnd_getInstance())) {
      tmp = 'kobweb-align-top-end';
    } else if (equals(_this__u8e3s4, CenterStart_getInstance())) {
      tmp = 'kobweb-align-center-start';
    } else if (equals(_this__u8e3s4, Center_getInstance_0())) {
      tmp = 'kobweb-align-center';
    } else if (equals(_this__u8e3s4, CenterEnd_getInstance())) {
      tmp = 'kobweb-align-center-end';
    } else if (equals(_this__u8e3s4, BottomStart_getInstance())) {
      tmp = 'kobweb-align-bottom-start';
    } else if (equals(_this__u8e3s4, BottomCenter_getInstance())) {
      tmp = 'kobweb-align-bottom-center';
    } else if (equals(_this__u8e3s4, BottomEnd_getInstance())) {
      tmp = 'kobweb-align-bottom-end';
    } else if (equals(_this__u8e3s4, FromStyle_getInstance_0())) {
      tmp = 'kobweb-align-from-style';
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  }
  function toClassName_1(_this__u8e3s4) {
    var tmp;
    if (equals(_this__u8e3s4, Start_getInstance_0())) {
      tmp = 'kobweb-align-start';
    } else if (equals(_this__u8e3s4, CenterHorizontally_getInstance())) {
      tmp = 'kobweb-align-center-horiz';
    } else if (equals(_this__u8e3s4, End_getInstance_0())) {
      tmp = 'kobweb-align-end';
    } else if (equals(_this__u8e3s4, FromStyle_getInstance_0())) {
      tmp = 'kobweb-align-from-style-horiz';
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  }
  function get_ArrangeSpacedByVar() {
    _init_properties_ArrangementExtensions_kt__c0bxro();
    var tmp = KProperty0;
    return ArrangeSpacedByVar$delegate.getValue_fbnwi2_k$(null, getPropertyCallableRef('ArrangeSpacedByVar', 0, tmp, _get_ArrangeSpacedByVar_$ref_4vv40k(), null));
  }
  var ArrangeSpacedByVar$delegate;
  function toClassNames(_this__u8e3s4) {
    _init_properties_ArrangementExtensions_kt__c0bxro();
    var tmp;
    if (equals(_this__u8e3s4, End_getInstance())) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = ['kobweb-arrange-end'];
    } else {
      if (equals(_this__u8e3s4, Start_getInstance())) {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = ['kobweb-arrange-start'];
      } else {
        if (isInterface(_this__u8e3s4, HorizontalOrVertical_0)) {
          tmp = toClassNames_1(_this__u8e3s4);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  }
  function toClassNames_0(_this__u8e3s4) {
    _init_properties_ArrangementExtensions_kt__c0bxro();
    var tmp;
    if (equals(_this__u8e3s4, Top_getInstance())) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = ['kobweb-arrange-top'];
    } else {
      if (equals(_this__u8e3s4, Bottom_getInstance())) {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = ['kobweb-arrange-bottom'];
      } else {
        if (isInterface(_this__u8e3s4, HorizontalOrVertical_0)) {
          tmp = toClassNames_1(_this__u8e3s4);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  }
  function initArrangeSpacedByStyle(_this__u8e3s4) {
    _init_properties_ArrangementExtensions_kt__c0bxro();
    _this__u8e3s4.invoke_17x10s_k$('.kobweb-row.kobweb-arrange-spaced-by', initArrangeSpacedByStyle$lambda);
    _this__u8e3s4.invoke_17x10s_k$('.kobweb-col.kobweb-arrange-spaced-by', initArrangeSpacedByStyle$lambda_0);
  }
  function toClassNames_1(_this__u8e3s4) {
    _init_properties_ArrangementExtensions_kt__c0bxro();
    var tmp;
    if (equals(_this__u8e3s4, Center_getInstance())) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = ['kobweb-arrange-center'];
    } else {
      if (equals(_this__u8e3s4, SpaceAround_getInstance())) {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = ['kobweb-arrange-space-around'];
      } else {
        if (equals(_this__u8e3s4, SpaceBetween_getInstance())) {
          // Inline function 'kotlin.arrayOf' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp = ['kobweb-arrange-space-between'];
        } else {
          if (equals(_this__u8e3s4, SpaceEvenly_getInstance())) {
            // Inline function 'kotlin.arrayOf' call
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp = ['kobweb-arrange-space-evenly'];
          } else {
            if (equals(_this__u8e3s4, FromStyle_getInstance())) {
              // Inline function 'kotlin.arrayOf' call
              // Inline function 'kotlin.js.unsafeCast' call
              // Inline function 'kotlin.js.asDynamic' call
              tmp = ['kobweb-arrange-from-style'];
            } else {
              if (_this__u8e3s4 instanceof SpacedAligned) {
                // Inline function 'kotlin.arrayOf' call
                // Inline function 'kotlin.js.unsafeCast' call
                // Inline function 'kotlin.js.asDynamic' call
                tmp = ['kobweb-arrange-spaced-by', get_alignmentClassName(_this__u8e3s4)];
              } else {
                noWhenBranchMatchedException();
              }
            }
          }
        }
      }
    }
    return tmp;
  }
  function get_alignmentClassName(_this__u8e3s4) {
    _init_properties_ArrangementExtensions_kt__c0bxro();
    var tmp;
    if (_this__u8e3s4 instanceof Vertical) {
      var tmp1_subject = _this__u8e3s4.get_alignment_3b5231_k$();
      var tmp_0;
      if (equals(tmp1_subject, Bottom_getInstance_0())) {
        tmp_0 = 'kobweb-arrange-bottom';
      } else if (equals(tmp1_subject, CenterVertically_getInstance())) {
        tmp_0 = 'kobweb-arrange-center';
      } else if (equals(tmp1_subject, FromStyle_getInstance_0())) {
        tmp_0 = 'kobweb-arrange-from-style';
      } else if (equals(tmp1_subject, Top_getInstance_0())) {
        tmp_0 = 'kobweb-arrange-top';
      } else {
        noWhenBranchMatchedException();
      }
      tmp = tmp_0;
    } else {
      if (_this__u8e3s4 instanceof Horizontal) {
        var tmp2_subject = _this__u8e3s4.get_alignment_3b5231_k$();
        var tmp_1;
        if (equals(tmp2_subject, Start_getInstance_0())) {
          tmp_1 = 'kobweb-arrange-start';
        } else if (equals(tmp2_subject, CenterHorizontally_getInstance())) {
          tmp_1 = 'kobweb-arrange-center';
        } else if (equals(tmp2_subject, FromStyle_getInstance_0())) {
          tmp_1 = 'kobweb-arrange-from-style';
        } else if (equals(tmp2_subject, End_getInstance_0())) {
          tmp_1 = 'kobweb-arrange-end';
        } else {
          noWhenBranchMatchedException();
        }
        tmp = tmp_1;
      } else {
        tmp = 'kobweb-arrange-start';
      }
    }
    return tmp;
  }
  function _get_ArrangeSpacedByVar_$ref_4vv40k() {
    return function () {
      return get_ArrangeSpacedByVar();
    };
  }
  function initArrangeSpacedByStyle$lambda($this$invoke) {
    _init_properties_ArrangementExtensions_kt__c0bxro();
    columnGap($this$invoke, get_ArrangeSpacedByVar().value$default_36t2hw_k$());
    return Unit_getInstance();
  }
  function initArrangeSpacedByStyle$lambda_0($this$invoke) {
    _init_properties_ArrangementExtensions_kt__c0bxro();
    rowGap($this$invoke, get_ArrangeSpacedByVar().value$default_36t2hw_k$());
    return Unit_getInstance();
  }
  var properties_initialized_ArrangementExtensions_kt_12f99q;
  function _init_properties_ArrangementExtensions_kt__c0bxro() {
    if (!properties_initialized_ArrangementExtensions_kt_12f99q) {
      properties_initialized_ArrangementExtensions_kt_12f99q = true;
      ArrangeSpacedByVar$delegate = StyleVariable('kobweb');
    }
  }
  var com_varabyte_kobweb_compose_style_KobwebComposeStyleSheet$stable;
  function initBox($this, _this__u8e3s4) {
    _this__u8e3s4.invoke_17x10s_k$('.kobweb-box', KobwebComposeStyleSheet$initBox$lambda);
    _this__u8e3s4.invoke_17x10s_k$('.kobweb-box > *', KobwebComposeStyleSheet$initBox$lambda_0);
    _this__u8e3s4.invoke_17x10s_k$('.kobweb-box.kobweb-align-top-start', KobwebComposeStyleSheet$initBox$lambda_1);
    _this__u8e3s4.invoke_17x10s_k$('.kobweb-box.kobweb-align-top-center', KobwebComposeStyleSheet$initBox$lambda_2);
    _this__u8e3s4.invoke_17x10s_k$('.kobweb-box.kobweb-align-top-end', KobwebComposeStyleSheet$initBox$lambda_3);
    _this__u8e3s4.invoke_17x10s_k$('.kobweb-box.kobweb-align-center-start', KobwebComposeStyleSheet$initBox$lambda_4);
    _this__u8e3s4.invoke_17x10s_k$('.kobweb-box.kobweb-align-center', KobwebComposeStyleSheet$initBox$lambda_5);
    _this__u8e3s4.invoke_17x10s_k$('.kobweb-box.kobweb-align-center-end', KobwebComposeStyleSheet$initBox$lambda_6);
    _this__u8e3s4.invoke_17x10s_k$('.kobweb-box.kobweb-align-bottom-start', KobwebComposeStyleSheet$initBox$lambda_7);
    _this__u8e3s4.invoke_17x10s_k$('.kobweb-box.kobweb-align-bottom-center', KobwebComposeStyleSheet$initBox$lambda_8);
    _this__u8e3s4.invoke_17x10s_k$('.kobweb-box.kobweb-align-bottom-end', KobwebComposeStyleSheet$initBox$lambda_9);
    _this__u8e3s4.invoke_17x10s_k$('.kobweb-box > .kobweb-align-top-start-self', KobwebComposeStyleSheet$initBox$lambda_10);
    _this__u8e3s4.invoke_17x10s_k$('.kobweb-box > .kobweb-align-top-center-self', KobwebComposeStyleSheet$initBox$lambda_11);
    _this__u8e3s4.invoke_17x10s_k$('.kobweb-box > .kobweb-align-top-end-self', KobwebComposeStyleSheet$initBox$lambda_12);
    _this__u8e3s4.invoke_17x10s_k$('.kobweb-box > .kobweb-align-center-start-self', KobwebComposeStyleSheet$initBox$lambda_13);
    _this__u8e3s4.invoke_17x10s_k$('.kobweb-box > .kobweb-align-center-self', KobwebComposeStyleSheet$initBox$lambda_14);
    _this__u8e3s4.invoke_17x10s_k$('.kobweb-box > .kobweb-align-center-end-self', KobwebComposeStyleSheet$initBox$lambda_15);
    _this__u8e3s4.invoke_17x10s_k$('.kobweb-box > .kobweb-align-bottom-start-self', KobwebComposeStyleSheet$initBox$lambda_16);
    _this__u8e3s4.invoke_17x10s_k$('.kobweb-box > .kobweb-align-bottom-center-self', KobwebComposeStyleSheet$initBox$lambda_17);
    _this__u8e3s4.invoke_17x10s_k$('.kobweb-box > .kobweb-align-bottom-end-self', KobwebComposeStyleSheet$initBox$lambda_18);
  }
  function initRow($this, _this__u8e3s4) {
    _this__u8e3s4.invoke_17x10s_k$('.kobweb-row', KobwebComposeStyleSheet$initRow$lambda);
    _this__u8e3s4.invoke_17x10s_k$('.kobweb-row.kobweb-arrange-start', KobwebComposeStyleSheet$initRow$lambda_0);
    _this__u8e3s4.invoke_17x10s_k$('.kobweb-row.kobweb-arrange-center', KobwebComposeStyleSheet$initRow$lambda_1);
    _this__u8e3s4.invoke_17x10s_k$('.kobweb-row.kobweb-arrange-end', KobwebComposeStyleSheet$initRow$lambda_2);
    _this__u8e3s4.invoke_17x10s_k$('.kobweb-row.kobweb-arrange-space-evenly', KobwebComposeStyleSheet$initRow$lambda_3);
    _this__u8e3s4.invoke_17x10s_k$('.kobweb-row.kobweb-arrange-space-between', KobwebComposeStyleSheet$initRow$lambda_4);
    _this__u8e3s4.invoke_17x10s_k$('.kobweb-row.kobweb-arrange-space-around', KobwebComposeStyleSheet$initRow$lambda_5);
    _this__u8e3s4.invoke_17x10s_k$('.kobweb-row.kobweb-align-top', KobwebComposeStyleSheet$initRow$lambda_6);
    _this__u8e3s4.invoke_17x10s_k$('.kobweb-row.kobweb-align-center-vert', KobwebComposeStyleSheet$initRow$lambda_7);
    _this__u8e3s4.invoke_17x10s_k$('.kobweb-row.kobweb-align-bottom', KobwebComposeStyleSheet$initRow$lambda_8);
    _this__u8e3s4.invoke_17x10s_k$('.kobweb-row > .kobweb-align-top-self', KobwebComposeStyleSheet$initRow$lambda_9);
    _this__u8e3s4.invoke_17x10s_k$('.kobweb-row > .kobweb-align-center-vert-self', KobwebComposeStyleSheet$initRow$lambda_10);
    _this__u8e3s4.invoke_17x10s_k$('.kobweb-row > .kobweb-align-bottom-self', KobwebComposeStyleSheet$initRow$lambda_11);
  }
  function initCol($this, _this__u8e3s4) {
    _this__u8e3s4.invoke_17x10s_k$('.kobweb-col', KobwebComposeStyleSheet$initCol$lambda);
    _this__u8e3s4.invoke_17x10s_k$('.kobweb-col.kobweb-arrange-top', KobwebComposeStyleSheet$initCol$lambda_0);
    _this__u8e3s4.invoke_17x10s_k$('.kobweb-col.kobweb-arrange-center', KobwebComposeStyleSheet$initCol$lambda_1);
    _this__u8e3s4.invoke_17x10s_k$('.kobweb-col.kobweb-arrange-bottom', KobwebComposeStyleSheet$initCol$lambda_2);
    _this__u8e3s4.invoke_17x10s_k$('.kobweb-col.kobweb-arrange-space-evenly', KobwebComposeStyleSheet$initCol$lambda_3);
    _this__u8e3s4.invoke_17x10s_k$('.kobweb-col.kobweb-arrange-space-between', KobwebComposeStyleSheet$initCol$lambda_4);
    _this__u8e3s4.invoke_17x10s_k$('.kobweb-col.kobweb-arrange-space-around', KobwebComposeStyleSheet$initCol$lambda_5);
    _this__u8e3s4.invoke_17x10s_k$('.kobweb-col.kobweb-align-start', KobwebComposeStyleSheet$initCol$lambda_6);
    _this__u8e3s4.invoke_17x10s_k$('.kobweb-col.kobweb-align-center-horiz', KobwebComposeStyleSheet$initCol$lambda_7);
    _this__u8e3s4.invoke_17x10s_k$('.kobweb-col.kobweb-align-end', KobwebComposeStyleSheet$initCol$lambda_8);
    _this__u8e3s4.invoke_17x10s_k$('.kobweb-col > .kobweb-align-start-self', KobwebComposeStyleSheet$initCol$lambda_9);
    _this__u8e3s4.invoke_17x10s_k$('.kobweb-col > .kobweb-align-center-horiz-self', KobwebComposeStyleSheet$initCol$lambda_10);
    _this__u8e3s4.invoke_17x10s_k$('.kobweb-col > .kobweb-align-end-self', KobwebComposeStyleSheet$initCol$lambda_11);
  }
  function initSpacer($this, _this__u8e3s4) {
    _this__u8e3s4.invoke_17x10s_k$('.kobweb-spacer', KobwebComposeStyleSheet$initSpacer$lambda);
  }
  function KobwebComposeStyleSheet$lambda(this$0) {
    return function ($this$layer) {
      initBox(this$0, $this$layer);
      initCol(this$0, $this$layer);
      initRow(this$0, $this$layer);
      initSpacer(this$0, $this$layer);
      initArrangeSpacedByStyle($this$layer);
      return Unit_getInstance();
    };
  }
  function KobwebComposeStyleSheet$initBox$lambda($this$invoke) {
    grid($this$invoke, KobwebComposeStyleSheet$initBox$lambda$lambda);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda$lambda($this$grid) {
    $this$grid.columns_o4h109_k$(KobwebComposeStyleSheet$initBox$lambda$lambda$lambda);
    $this$grid.rows_c0wtyb_k$(KobwebComposeStyleSheet$initBox$lambda$lambda$lambda_0);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda$lambda$lambda($this$columns) {
    $this$columns.minmax_1ha38s_k$(get_px(0), get_fr(1));
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda$lambda$lambda_0($this$rows) {
    $this$rows.minmax_1ha38s_k$(get_px(0), get_fr(1));
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_0($this$invoke) {
    gridArea($this$invoke, '1', '1');
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_1($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Start' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'start');
    justifyItems($this$invoke, Companion_getInstance_1().get_Start_ih4i6x_k$());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_2($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Start' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'start');
    justifyItems($this$invoke, Companion_getInstance_1().get_Center_3arb0i_k$());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_3($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Start' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'start');
    justifyItems($this$invoke, Companion_getInstance_1().get_End_18ju7i_k$());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_4($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'center');
    justifyItems($this$invoke, Companion_getInstance_1().get_Start_ih4i6x_k$());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_5($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'center');
    justifyItems($this$invoke, Companion_getInstance_1().get_Center_3arb0i_k$());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_6($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'center');
    justifyItems($this$invoke, Companion_getInstance_1().get_End_18ju7i_k$());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_7($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.End' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'end');
    justifyItems($this$invoke, Companion_getInstance_1().get_Start_ih4i6x_k$());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_8($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.End' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'end');
    justifyItems($this$invoke, Companion_getInstance_1().get_Center_3arb0i_k$());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_9($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.End' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'end');
    justifyItems($this$invoke, Companion_getInstance_1().get_End_18ju7i_k$());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_10($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Start' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'start');
    justifySelf($this$invoke, Companion_getInstance_3().get_Start_ih4i6x_k$());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_11($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Start' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'start');
    justifySelf($this$invoke, Companion_getInstance_3().get_Center_3arb0i_k$());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_12($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Start' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'start');
    justifySelf($this$invoke, Companion_getInstance_3().get_End_18ju7i_k$());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_13($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'center');
    justifySelf($this$invoke, Companion_getInstance_3().get_Start_ih4i6x_k$());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_14($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'center');
    justifySelf($this$invoke, Companion_getInstance_3().get_Center_3arb0i_k$());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_15($this$invoke) {
    justifySelf($this$invoke, Companion_getInstance_3().get_End_18ju7i_k$());
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'center');
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_16($this$invoke) {
    justifySelf($this$invoke, Companion_getInstance_3().get_Start_ih4i6x_k$());
    // Inline function 'org.jetbrains.compose.web.css.Companion.End' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'end');
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_17($this$invoke) {
    justifySelf($this$invoke, Companion_getInstance_3().get_Center_3arb0i_k$());
    // Inline function 'org.jetbrains.compose.web.css.Companion.End' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'end');
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_18($this$invoke) {
    justifySelf($this$invoke, Companion_getInstance_3().get_End_18ju7i_k$());
    // Inline function 'org.jetbrains.compose.web.css.Companion.End' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'end');
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initRow$lambda($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    Companion_getInstance_4();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$invoke, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Row' call
    Companion_getInstance_5();
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$invoke, 'row');
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initRow$lambda_0($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
    Companion_getInstance_6();
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-start';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initRow$lambda_1($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_6();
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    justifyContent($this$invoke, 'center');
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initRow$lambda_2($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
    Companion_getInstance_6();
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-end';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initRow$lambda_3($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceEvenly' call
    Companion_getInstance_6();
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'space-evenly';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initRow$lambda_4($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceBetween' call
    Companion_getInstance_6();
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'space-between';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initRow$lambda_5($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceAround' call
    Companion_getInstance_6();
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'space-around';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initRow$lambda_6($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-start';
    alignItems($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initRow$lambda_7($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'center');
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initRow$lambda_8($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-end';
    alignItems($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initRow$lambda_9($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-start';
    alignSelf($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initRow$lambda_10($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'center');
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initRow$lambda_11($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-end';
    alignSelf($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initCol$lambda($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    Companion_getInstance_4();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$invoke, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    Companion_getInstance_5();
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$invoke, 'column');
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initCol$lambda_0($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
    Companion_getInstance_6();
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-start';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initCol$lambda_1($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_6();
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    justifyContent($this$invoke, 'center');
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initCol$lambda_2($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
    Companion_getInstance_6();
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-end';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initCol$lambda_3($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceEvenly' call
    Companion_getInstance_6();
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'space-evenly';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initCol$lambda_4($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceBetween' call
    Companion_getInstance_6();
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'space-between';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initCol$lambda_5($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceAround' call
    Companion_getInstance_6();
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'space-around';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initCol$lambda_6($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-start';
    alignItems($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initCol$lambda_7($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'center');
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initCol$lambda_8($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-end';
    alignItems($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initCol$lambda_9($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-start';
    alignSelf($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initCol$lambda_10($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'center');
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initCol$lambda_11($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-end';
    alignSelf($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initSpacer$lambda($this$invoke) {
    flexGrow($this$invoke, 1);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet() {
    KobwebComposeStyleSheet_instance = this;
    StyleSheet_init_$Init$(VOID, VOID, this);
    layer(this, 'kobweb-compose', KobwebComposeStyleSheet$lambda(this));
  }
  protoOf(KobwebComposeStyleSheet).style_r4zx12_k$ = function (selector, cssRule) {
    return this.style_pgxmpo_k$(selector, cssRule);
  };
  var KobwebComposeStyleSheet_instance;
  function KobwebComposeStyleSheet_getInstance() {
    if (KobwebComposeStyleSheet_instance == null)
      new KobwebComposeStyleSheet();
    return KobwebComposeStyleSheet_instance;
  }
  var properties_initialized_KobwebComposeStyleSheet_kt_hrxuai;
  function _init_properties_KobwebComposeStyleSheet_kt__tay8qg() {
    if (!properties_initialized_KobwebComposeStyleSheet_kt_hrxuai) {
      properties_initialized_KobwebComposeStyleSheet_kt_hrxuai = true;
      com_varabyte_kobweb_compose_style_KobwebComposeStyleSheet$stable = org_jetbrains_compose_web_css_StyleSheet$stableprop_getter();
    }
  }
  var com_varabyte_kobweb_compose_ui_Alignment_TopStart$stable;
  var com_varabyte_kobweb_compose_ui_Alignment_TopCenter$stable;
  var com_varabyte_kobweb_compose_ui_Alignment_TopEnd$stable;
  var com_varabyte_kobweb_compose_ui_Alignment_CenterStart$stable;
  var com_varabyte_kobweb_compose_ui_Alignment_Center$stable;
  var com_varabyte_kobweb_compose_ui_Alignment_CenterEnd$stable;
  var com_varabyte_kobweb_compose_ui_Alignment_BottomStart$stable;
  var com_varabyte_kobweb_compose_ui_Alignment_BottomCenter$stable;
  var com_varabyte_kobweb_compose_ui_Alignment_BottomEnd$stable;
  var com_varabyte_kobweb_compose_ui_Alignment_Top$stable;
  var com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stable;
  var com_varabyte_kobweb_compose_ui_Alignment_Bottom$stable;
  var com_varabyte_kobweb_compose_ui_Alignment_Start$stable;
  var com_varabyte_kobweb_compose_ui_Alignment_CenterHorizontally$stable;
  var com_varabyte_kobweb_compose_ui_Alignment_End$stable;
  var com_varabyte_kobweb_compose_ui_Alignment_FromStyle$stable;
  function com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stableprop_getter() {
    return com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stable;
  }
  function com_varabyte_kobweb_compose_ui_Alignment_Center$stableprop_getter() {
    return com_varabyte_kobweb_compose_ui_Alignment_Center$stable;
  }
  function com_varabyte_kobweb_compose_ui_Alignment_End$stableprop_getter() {
    return com_varabyte_kobweb_compose_ui_Alignment_End$stable;
  }
  function Vertical_1() {
  }
  function Horizontal_1() {
  }
  function TopStart() {
    TopStart_instance = this;
  }
  var TopStart_instance;
  function TopStart_getInstance() {
    if (TopStart_instance == null)
      new TopStart();
    return TopStart_instance;
  }
  function TopCenter() {
    TopCenter_instance = this;
  }
  var TopCenter_instance;
  function TopCenter_getInstance() {
    if (TopCenter_instance == null)
      new TopCenter();
    return TopCenter_instance;
  }
  function TopEnd() {
    TopEnd_instance = this;
  }
  var TopEnd_instance;
  function TopEnd_getInstance() {
    if (TopEnd_instance == null)
      new TopEnd();
    return TopEnd_instance;
  }
  function CenterStart() {
    CenterStart_instance = this;
  }
  var CenterStart_instance;
  function CenterStart_getInstance() {
    if (CenterStart_instance == null)
      new CenterStart();
    return CenterStart_instance;
  }
  function Center_0() {
    Center_instance_0 = this;
  }
  var Center_instance_0;
  function Center_getInstance_0() {
    if (Center_instance_0 == null)
      new Center_0();
    return Center_instance_0;
  }
  function CenterEnd() {
    CenterEnd_instance = this;
  }
  var CenterEnd_instance;
  function CenterEnd_getInstance() {
    if (CenterEnd_instance == null)
      new CenterEnd();
    return CenterEnd_instance;
  }
  function BottomStart() {
    BottomStart_instance = this;
  }
  var BottomStart_instance;
  function BottomStart_getInstance() {
    if (BottomStart_instance == null)
      new BottomStart();
    return BottomStart_instance;
  }
  function BottomCenter() {
    BottomCenter_instance = this;
  }
  var BottomCenter_instance;
  function BottomCenter_getInstance() {
    if (BottomCenter_instance == null)
      new BottomCenter();
    return BottomCenter_instance;
  }
  function BottomEnd() {
    BottomEnd_instance = this;
  }
  var BottomEnd_instance;
  function BottomEnd_getInstance() {
    if (BottomEnd_instance == null)
      new BottomEnd();
    return BottomEnd_instance;
  }
  function Top_0() {
    Top_instance_0 = this;
  }
  var Top_instance_0;
  function Top_getInstance_0() {
    if (Top_instance_0 == null)
      new Top_0();
    return Top_instance_0;
  }
  function CenterVertically() {
    CenterVertically_instance = this;
  }
  var CenterVertically_instance;
  function CenterVertically_getInstance() {
    if (CenterVertically_instance == null)
      new CenterVertically();
    return CenterVertically_instance;
  }
  function Bottom_0() {
    Bottom_instance_0 = this;
  }
  var Bottom_instance_0;
  function Bottom_getInstance_0() {
    if (Bottom_instance_0 == null)
      new Bottom_0();
    return Bottom_instance_0;
  }
  function Start_0() {
    Start_instance_0 = this;
  }
  var Start_instance_0;
  function Start_getInstance_0() {
    if (Start_instance_0 == null)
      new Start_0();
    return Start_instance_0;
  }
  function CenterHorizontally() {
    CenterHorizontally_instance = this;
  }
  var CenterHorizontally_instance;
  function CenterHorizontally_getInstance() {
    if (CenterHorizontally_instance == null)
      new CenterHorizontally();
    return CenterHorizontally_instance;
  }
  function End_0() {
    End_instance_0 = this;
  }
  var End_instance_0;
  function End_getInstance_0() {
    if (End_instance_0 == null)
      new End_0();
    return End_instance_0;
  }
  function FromStyle_0() {
    FromStyle_instance_0 = this;
  }
  var FromStyle_instance_0;
  function FromStyle_getInstance_0() {
    if (FromStyle_instance_0 == null)
      new FromStyle_0();
    return FromStyle_instance_0;
  }
  function Alignment() {
  }
  function thenIfNotNull(_this__u8e3s4, value, consume) {
    // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
    var tmp;
    if (!(value == null)) {
      tmp = consume(ensureNotNull(value));
    } else {
      tmp = Companion_getInstance_16();
    }
    return _this__u8e3s4.then_mmfvo6_k$(tmp);
  }
  function thenIf(_this__u8e3s4, condition, lazyProduce) {
    return _this__u8e3s4.then_mmfvo6_k$(condition ? lazyProduce() : Companion_getInstance_16());
  }
  function Element() {
  }
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).fold_esqsf3_k$ = function (initial, operation) {
    return initial;
  };
  protoOf(Companion).then_mmfvo6_k$ = function (other) {
    return other;
  };
  var Companion_instance;
  function Companion_getInstance_16() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Modifier() {
  }
  function thenIf_0(_this__u8e3s4, condition, other) {
    // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
    var tmp;
    if (condition) {
      tmp = other;
    } else {
      tmp = Companion_getInstance_16();
    }
    return _this__u8e3s4.then_mmfvo6_k$(tmp);
  }
  function _get_current__qcrdxk($this) {
    return $this.current_1;
  }
  function _get_next__daux88($this) {
    return $this.next_1;
  }
  function ChainedModifier(current, next) {
    this.current_1 = current;
    this.next_1 = next;
  }
  protoOf(ChainedModifier).fold_esqsf3_k$ = function (initial, operation) {
    return this.next_1.fold_esqsf3_k$(this.current_1.fold_esqsf3_k$(initial, operation), operation);
  };
  protoOf(ChainedModifier).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof ChainedModifier) {
      tmp_0 = equals(this.current_1, other.current_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.next_1, other.next_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ChainedModifier).hashCode = function () {
    return hashCode(this.current_1) + imul(31, hashCode(this.next_1)) | 0;
  };
  var com_varabyte_kobweb_compose_ui_AttrsModifier$stable;
  var com_varabyte_kobweb_compose_ui_StyleModifier$stable;
  function toStyles(_this__u8e3s4, finalHandler) {
    finalHandler = finalHandler === VOID ? null : finalHandler;
    var firstModifier = _this__u8e3s4;
    return toStyles$lambda(firstModifier, finalHandler);
  }
  function toAttrs(_this__u8e3s4, finalHandler) {
    finalHandler = finalHandler === VOID ? null : finalHandler;
    var firstModifier = _this__u8e3s4;
    return toAttrs$lambda(firstModifier, finalHandler);
  }
  function StyleModifier(styles) {
    this.styles_1 = styles;
  }
  protoOf(StyleModifier).get_styles_820xk4_k$ = function () {
    return this.styles_1;
  };
  protoOf(StyleModifier).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleModifier))
      return false;
    var stylesResolved = new ComparableStyleScope();
    this.styles_1(stylesResolved);
    var otherStylesResolved = new ComparableStyleScope();
    other.styles_1(otherStylesResolved);
    return stylesResolved.equals(otherStylesResolved);
  };
  protoOf(StyleModifier).hashCode = function () {
    var stylesResolved = new ComparableStyleScope();
    this.styles_1(stylesResolved);
    return stylesResolved.hashCode();
  };
  function AttrsModifier(attrs) {
    this.attrs_1 = attrs;
  }
  protoOf(AttrsModifier).get_attrs_7eqr2m_k$ = function () {
    return this.attrs_1;
  };
  protoOf(AttrsModifier).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AttrsModifier))
      return false;
    var attrsResolved = ComparableAttrsScope_init_$Create$();
    this.attrs_1(attrsResolved);
    var otherAttrsResolved = ComparableAttrsScope_init_$Create$();
    other.attrs_1(otherAttrsResolved);
    return attrsResolved.equals(otherAttrsResolved);
  };
  protoOf(AttrsModifier).hashCode = function () {
    var attrsResolved = ComparableAttrsScope_init_$Create$();
    this.attrs_1(attrsResolved);
    return attrsResolved.hashCode();
  };
  function WebModifier() {
  }
  function attrsModifier(_this__u8e3s4, attrs) {
    return _this__u8e3s4.then_mmfvo6_k$(new AttrsModifier(attrs));
  }
  function styleModifier(_this__u8e3s4, styles) {
    return _this__u8e3s4.then_mmfvo6_k$(new StyleModifier(styles));
  }
  function toStyles$lambda$lambda($this) {
    return function (_unused_var__etf5q3, modifierElement) {
      var tmp;
      if (modifierElement instanceof StyleModifier) {
        tmp = modifierElement.styles_1($this);
      }
      return Unit_getInstance();
    };
  }
  function toStyles$lambda($firstModifier, $finalHandler) {
    return function (_this__u8e3s4) {
      $firstModifier.fold_esqsf3_k$(Unit_getInstance(), toStyles$lambda$lambda(_this__u8e3s4));
      var tmp0_safe_receiver = $finalHandler;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver(_this__u8e3s4);
      return Unit_getInstance();
    };
  }
  function toAttrs$lambda$lambda$lambda($modifierElement) {
    return function ($this$style) {
      $modifierElement.styles_1($this$style);
      return Unit_getInstance();
    };
  }
  function toAttrs$lambda$lambda($this) {
    return function (_unused_var__etf5q3, modifierElement) {
      var tmp;
      if (modifierElement instanceof AttrsModifier) {
        tmp = modifierElement.attrs_1($this);
      } else {
        if (modifierElement instanceof StyleModifier) {
          $this.style_xwwy6r_k$(toAttrs$lambda$lambda$lambda(modifierElement));
          tmp = Unit_getInstance();
        }
      }
      return Unit_getInstance();
    };
  }
  function toAttrs$lambda($firstModifier, $finalHandler) {
    return function (_this__u8e3s4) {
      $firstModifier.fold_esqsf3_k$(Unit_getInstance(), toAttrs$lambda$lambda(_this__u8e3s4));
      var tmp0_safe_receiver = $finalHandler;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver(_this__u8e3s4);
      return Unit_getInstance();
    };
  }
  var com_varabyte_kobweb_compose_ui_graphics_Color_RawRgb$stable;
  var com_varabyte_kobweb_compose_ui_graphics_Color_NamedRgb$stable;
  var com_varabyte_kobweb_compose_ui_graphics_Color_Hsl$stable;
  var com_varabyte_kobweb_compose_ui_graphics_Colors$stable;
  function NamedRgb($this, name, rgb) {
    return NamedRgb_init_$Create$(name, rgb.get_value_j01efc_k$());
  }
  function Colors() {
    Colors_instance = this;
  }
  protoOf(Colors).get_Transparent_cxh4g9_k$ = function () {
    return NamedRgb(this, 'transparent', Companion_getInstance_17().rgba_3xu3m4_k$(0, 0, 0, 0));
  };
  protoOf(Colors).get_AliceBlue_26ti33_k$ = function () {
    return NamedRgb(this, 'aliceblue', Companion_getInstance_17().rgb_udwlgr_k$(240, 248, 255));
  };
  protoOf(Colors).get_AntiqueWhite_ftryr7_k$ = function () {
    return NamedRgb(this, 'antiquewhite', Companion_getInstance_17().rgb_udwlgr_k$(250, 235, 215));
  };
  protoOf(Colors).get_Aqua_wnyk9x_k$ = function () {
    return NamedRgb(this, 'aqua', Companion_getInstance_17().rgb_udwlgr_k$(0, 255, 255));
  };
  protoOf(Colors).get_Aquamarine_wf4kkn_k$ = function () {
    return NamedRgb(this, 'aquamarine', Companion_getInstance_17().rgb_udwlgr_k$(127, 255, 212));
  };
  protoOf(Colors).get_Azure_i7cg92_k$ = function () {
    return NamedRgb(this, 'azure', Companion_getInstance_17().rgb_udwlgr_k$(240, 255, 255));
  };
  protoOf(Colors).get_Beige_i7ikyj_k$ = function () {
    return NamedRgb(this, 'beige', Companion_getInstance_17().rgb_udwlgr_k$(245, 245, 220));
  };
  protoOf(Colors).get_Bisque_3pilya_k$ = function () {
    return NamedRgb(this, 'bisque', Companion_getInstance_17().rgb_udwlgr_k$(255, 228, 196));
  };
  protoOf(Colors).get_Black_i7mvue_k$ = function () {
    return NamedRgb(this, 'black', Companion_getInstance_17().rgb_udwlgr_k$(0, 0, 0));
  };
  protoOf(Colors).get_BlanchedAlmond_1qzwzr_k$ = function () {
    return NamedRgb(this, 'blanchedalmond', Companion_getInstance_17().rgb_udwlgr_k$(255, 235, 205));
  };
  protoOf(Colors).get_Blue_wnz3k3_k$ = function () {
    return NamedRgb(this, 'blue', Companion_getInstance_17().rgb_udwlgr_k$(0, 0, 255));
  };
  protoOf(Colors).get_BlueViolet_dh8vfm_k$ = function () {
    return NamedRgb(this, 'blueviolet', Companion_getInstance_17().rgb_udwlgr_k$(138, 43, 226));
  };
  protoOf(Colors).get_Brown_i7r0ml_k$ = function () {
    return NamedRgb(this, 'brown', Companion_getInstance_17().rgb_udwlgr_k$(165, 42, 42));
  };
  protoOf(Colors).get_BurlyWood_8ugz0w_k$ = function () {
    return NamedRgb(this, 'burlywood', Companion_getInstance_17().rgb_udwlgr_k$(222, 184, 135));
  };
  protoOf(Colors).get_CadetBlue_p1vowq_k$ = function () {
    return NamedRgb(this, 'cadetblue', Companion_getInstance_17().rgb_udwlgr_k$(95, 158, 160));
  };
  protoOf(Colors).get_Chartreuse_sf60ap_k$ = function () {
    return NamedRgb(this, 'chartreuse', Companion_getInstance_17().rgb_udwlgr_k$(127, 255, 0));
  };
  protoOf(Colors).get_Chocolate_hzt5e5_k$ = function () {
    return NamedRgb(this, 'chocolate', Companion_getInstance_17().rgb_udwlgr_k$(210, 105, 30));
  };
  protoOf(Colors).get_Coral_i88xyg_k$ = function () {
    return NamedRgb(this, 'coral', Companion_getInstance_17().rgb_udwlgr_k$(255, 127, 80));
  };
  protoOf(Colors).get_CornflowerBlue_r6uqqi_k$ = function () {
    return NamedRgb(this, 'cornflowerblue', Companion_getInstance_17().rgb_udwlgr_k$(100, 149, 237));
  };
  protoOf(Colors).get_Cornsilk_wq0qna_k$ = function () {
    return NamedRgb(this, 'cornsilk', Companion_getInstance_17().rgb_udwlgr_k$(255, 248, 220));
  };
  protoOf(Colors).get_Crimson_p5oht6_k$ = function () {
    return NamedRgb(this, 'crimson', Companion_getInstance_17().rgb_udwlgr_k$(220, 20, 60));
  };
  protoOf(Colors).get_Cyan_wnzzpo_k$ = function () {
    return NamedRgb(this, 'cyan', Companion_getInstance_17().rgb_udwlgr_k$(0, 255, 255));
  };
  protoOf(Colors).get_DarkBlue_1y795z_k$ = function () {
    return NamedRgb(this, 'darkblue', Companion_getInstance_17().rgb_udwlgr_k$(0, 0, 139));
  };
  protoOf(Colors).get_DarkCyan_1y6d0e_k$ = function () {
    return NamedRgb(this, 'darkcyan', Companion_getInstance_17().rgb_udwlgr_k$(0, 139, 139));
  };
  protoOf(Colors).get_DarkGoldenRod_c3b5lt_k$ = function () {
    return NamedRgb(this, 'darkgoldenrod', Companion_getInstance_17().rgb_udwlgr_k$(184, 134, 11));
  };
  protoOf(Colors).get_DarkGray_1y3y8u_k$ = function () {
    return NamedRgb(this, 'darkgray', Companion_getInstance_17().rgb_udwlgr_k$(169, 169, 169));
  };
  protoOf(Colors).get_DarkGrey_1y3y5e_k$ = function () {
    return NamedRgb(this, 'darkgrey', Companion_getInstance_17().rgb_udwlgr_k$(169, 169, 169));
  };
  protoOf(Colors).get_DarkGreen_anpmxw_k$ = function () {
    return NamedRgb(this, 'darkgreen', Companion_getInstance_17().rgb_udwlgr_k$(0, 100, 0));
  };
  protoOf(Colors).get_DarkKhaki_apqcmb_k$ = function () {
    return NamedRgb(this, 'darkkhaki', Companion_getInstance_17().rgb_udwlgr_k$(189, 183, 107));
  };
  protoOf(Colors).get_DarkMagenta_njr8wa_k$ = function () {
    return NamedRgb(this, 'darkmagenta', Companion_getInstance_17().rgb_udwlgr_k$(139, 0, 139));
  };
  protoOf(Colors).get_DarkOliveGreen_81ck6f_k$ = function () {
    return NamedRgb(this, 'darkolivegreen', Companion_getInstance_17().rgb_udwlgr_k$(85, 107, 47));
  };
  protoOf(Colors).get_DarkOrange_ky6wwj_k$ = function () {
    return NamedRgb(this, 'darkorange', Companion_getInstance_17().rgb_udwlgr_k$(255, 140, 0));
  };
  protoOf(Colors).get_DarkOrchid_ky5rby_k$ = function () {
    return NamedRgb(this, 'darkorchid', Companion_getInstance_17().rgb_udwlgr_k$(153, 50, 204));
  };
  protoOf(Colors).get_DarkRed_ie5ln2_k$ = function () {
    return NamedRgb(this, 'darkred', Companion_getInstance_17().rgb_udwlgr_k$(139, 0, 0));
  };
  protoOf(Colors).get_DarkSalmon_jb5x3n_k$ = function () {
    return NamedRgb(this, 'darksalmon', Companion_getInstance_17().rgb_udwlgr_k$(233, 150, 122));
  };
  protoOf(Colors).get_DarkSeaGreen_yymm7n_k$ = function () {
    return NamedRgb(this, 'darkseagreen', Companion_getInstance_17().rgb_udwlgr_k$(143, 188, 143));
  };
  protoOf(Colors).get_DarkSlateBlue_s42xdg_k$ = function () {
    return NamedRgb(this, 'darkslateblue', Companion_getInstance_17().rgb_udwlgr_k$(72, 61, 139));
  };
  protoOf(Colors).get_DarkSlateGray_s468al_k$ = function () {
    return NamedRgb(this, 'darkslategray', Companion_getInstance_17().rgb_udwlgr_k$(47, 79, 79));
  };
  protoOf(Colors).get_DarkSlateGrey_s468e1_k$ = function () {
    return NamedRgb(this, 'darkslategrey', Companion_getInstance_17().rgb_udwlgr_k$(47, 79, 79));
  };
  protoOf(Colors).get_DarkTurquoise_8s04jm_k$ = function () {
    return NamedRgb(this, 'darkturquoise', Companion_getInstance_17().rgb_udwlgr_k$(0, 206, 209));
  };
  protoOf(Colors).get_DarkViolet_hrkt6q_k$ = function () {
    return NamedRgb(this, 'darkviolet', Companion_getInstance_17().rgb_udwlgr_k$(148, 0, 211));
  };
  protoOf(Colors).get_DeepPink_kcbez9_k$ = function () {
    return NamedRgb(this, 'deeppink', Companion_getInstance_17().rgb_udwlgr_k$(255, 20, 147));
  };
  protoOf(Colors).get_DeepSkyBlue_2ykmii_k$ = function () {
    return NamedRgb(this, 'deepskyblue', Companion_getInstance_17().rgb_udwlgr_k$(0, 191, 255));
  };
  protoOf(Colors).get_DimGray_ep5xby_k$ = function () {
    return NamedRgb(this, 'dimgray', Companion_getInstance_17().rgb_udwlgr_k$(105, 105, 105));
  };
  protoOf(Colors).get_DimGrey_ep5x8i_k$ = function () {
    return NamedRgb(this, 'dimgrey', Companion_getInstance_17().rgb_udwlgr_k$(105, 105, 105));
  };
  protoOf(Colors).get_DodgerBlue_w4tkwu_k$ = function () {
    return NamedRgb(this, 'dodgerblue', Companion_getInstance_17().rgb_udwlgr_k$(30, 144, 255));
  };
  protoOf(Colors).get_FireBrick_yjvehq_k$ = function () {
    return NamedRgb(this, 'firebrick', Companion_getInstance_17().rgb_udwlgr_k$(178, 34, 34));
  };
  protoOf(Colors).get_FloralWhite_l3nfn0_k$ = function () {
    return NamedRgb(this, 'floralwhite', Companion_getInstance_17().rgb_udwlgr_k$(255, 250, 240));
  };
  protoOf(Colors).get_ForestGreen_rtf599_k$ = function () {
    return NamedRgb(this, 'forestgreen', Companion_getInstance_17().rgb_udwlgr_k$(34, 139, 34));
  };
  protoOf(Colors).get_Fuchsia_k799e6_k$ = function () {
    return NamedRgb(this, 'fuchsia', Companion_getInstance_17().rgb_udwlgr_k$(255, 0, 255));
  };
  protoOf(Colors).get_Gainsboro_426zpx_k$ = function () {
    return NamedRgb(this, 'gainsboro', Companion_getInstance_17().rgb_udwlgr_k$(220, 220, 220));
  };
  protoOf(Colors).get_GhostWhite_l7lzsz_k$ = function () {
    return NamedRgb(this, 'ghostwhite', Companion_getInstance_17().rgb_udwlgr_k$(248, 248, 255));
  };
  protoOf(Colors).get_Gold_wo2ci1_k$ = function () {
    return NamedRgb(this, 'gold', Companion_getInstance_17().rgb_udwlgr_k$(255, 215, 0));
  };
  protoOf(Colors).get_GoldenRod_khhved_k$ = function () {
    return NamedRgb(this, 'goldenrod', Companion_getInstance_17().rgb_udwlgr_k$(218, 165, 32));
  };
  protoOf(Colors).get_Gray_wo2eh8_k$ = function () {
    return NamedRgb(this, 'gray', Companion_getInstance_17().rgb_udwlgr_k$(128, 128, 128));
  };
  protoOf(Colors).get_Grey_wo2eko_k$ = function () {
    return NamedRgb(this, 'grey', Companion_getInstance_17().rgb_udwlgr_k$(128, 128, 128));
  };
  protoOf(Colors).get_Green_iahrqy_k$ = function () {
    return NamedRgb(this, 'green', Companion_getInstance_17().rgb_udwlgr_k$(0, 128, 0));
  };
  protoOf(Colors).get_GreenYellow_73rc9a_k$ = function () {
    return NamedRgb(this, 'greenyellow', Companion_getInstance_17().rgb_udwlgr_k$(173, 255, 47));
  };
  protoOf(Colors).get_HoneyDew_wqvfes_k$ = function () {
    return NamedRgb(this, 'honeydew', Companion_getInstance_17().rgb_udwlgr_k$(240, 255, 240));
  };
  protoOf(Colors).get_HotPink_o2ezdy_k$ = function () {
    return NamedRgb(this, 'hotpink', Companion_getInstance_17().rgb_udwlgr_k$(255, 105, 180));
  };
  protoOf(Colors).get_IndianRed_tuu69d_k$ = function () {
    return NamedRgb(this, 'indianred', Companion_getInstance_17().rgb_udwlgr_k$(205, 92, 92));
  };
  protoOf(Colors).get_Indigo_bq1ad_k$ = function () {
    return NamedRgb(this, 'indigo', Companion_getInstance_17().rgb_udwlgr_k$(75, 0, 130));
  };
  protoOf(Colors).get_Ivory_ibo4m8_k$ = function () {
    return NamedRgb(this, 'ivory', Companion_getInstance_17().rgb_udwlgr_k$(255, 255, 240));
  };
  protoOf(Colors).get_Khaki_icihfd_k$ = function () {
    return NamedRgb(this, 'khaki', Companion_getInstance_17().rgb_udwlgr_k$(240, 230, 140));
  };
  protoOf(Colors).get_Lavender_hd40j4_k$ = function () {
    return NamedRgb(this, 'lavender', Companion_getInstance_17().rgb_udwlgr_k$(230, 230, 250));
  };
  protoOf(Colors).get_LavenderBlush_p15ihc_k$ = function () {
    return NamedRgb(this, 'lavenderblush', Companion_getInstance_17().rgb_udwlgr_k$(255, 240, 245));
  };
  protoOf(Colors).get_LawnGreen_blu54i_k$ = function () {
    return NamedRgb(this, 'lawngreen', Companion_getInstance_17().rgb_udwlgr_k$(124, 252, 0));
  };
  protoOf(Colors).get_LemonChiffon_t7hz2f_k$ = function () {
    return NamedRgb(this, 'lemonchiffon', Companion_getInstance_17().rgb_udwlgr_k$(255, 250, 205));
  };
  protoOf(Colors).get_LightBlue_i1kdo9_k$ = function () {
    return NamedRgb(this, 'lightblue', Companion_getInstance_17().rgb_udwlgr_k$(173, 216, 230));
  };
  protoOf(Colors).get_LightCoral_8wyb8k_k$ = function () {
    return NamedRgb(this, 'lightcoral', Companion_getInstance_17().rgb_udwlgr_k$(240, 128, 128));
  };
  protoOf(Colors).get_LightCyan_i1jhio_k$ = function () {
    return NamedRgb(this, 'lightcyan', Companion_getInstance_17().rgb_udwlgr_k$(224, 255, 255));
  };
  protoOf(Colors).get_LightGoldenRodYellow_yxbqf9_k$ = function () {
    return NamedRgb(this, 'lightgoldenrodyellow', Companion_getInstance_17().rgb_udwlgr_k$(250, 250, 210));
  };
  protoOf(Colors).get_LightGray_i1h2r4_k$ = function () {
    return NamedRgb(this, 'lightgray', Companion_getInstance_17().rgb_udwlgr_k$(211, 211, 211));
  };
  protoOf(Colors).get_LightGrey_i1h2no_k$ = function () {
    return NamedRgb(this, 'lightgrey', Companion_getInstance_17().rgb_udwlgr_k$(211, 211, 211));
  };
  protoOf(Colors).get_LightGreen_8z7512_k$ = function () {
    return NamedRgb(this, 'lightgreen', Companion_getInstance_17().rgb_udwlgr_k$(144, 238, 144));
  };
  protoOf(Colors).get_LightPink_i1bi8t_k$ = function () {
    return NamedRgb(this, 'lightpink', Companion_getInstance_17().rgb_udwlgr_k$(255, 182, 193));
  };
  protoOf(Colors).get_LightSalmon_dzaed_k$ = function () {
    return NamedRgb(this, 'lightsalmon', Companion_getInstance_17().rgb_udwlgr_k$(255, 160, 122));
  };
  protoOf(Colors).get_LightSeaGreen_yvslb5_k$ = function () {
    return NamedRgb(this, 'lightseagreen', Companion_getInstance_17().rgb_udwlgr_k$(32, 178, 170));
  };
  protoOf(Colors).get_LightSkyBlue_74jx4i_k$ = function () {
    return NamedRgb(this, 'lightskyblue', Companion_getInstance_17().rgb_udwlgr_k$(135, 206, 250));
  };
  protoOf(Colors).get_LightSlateGray_pobgb3_k$ = function () {
    return NamedRgb(this, 'lightslategray', Companion_getInstance_17().rgb_udwlgr_k$(119, 136, 153));
  };
  protoOf(Colors).get_LightSlateGrey_pobgej_k$ = function () {
    return NamedRgb(this, 'lightslategrey', Companion_getInstance_17().rgb_udwlgr_k$(119, 136, 153));
  };
  protoOf(Colors).get_LightSteelBlue_nuj33s_k$ = function () {
    return NamedRgb(this, 'lightsteelblue', Companion_getInstance_17().rgb_udwlgr_k$(176, 196, 222));
  };
  protoOf(Colors).get_LightYellow_2ihllt_k$ = function () {
    return NamedRgb(this, 'lightyellow', Companion_getInstance_17().rgb_udwlgr_k$(255, 255, 224));
  };
  protoOf(Colors).get_Lime_wo5f0e_k$ = function () {
    return NamedRgb(this, 'lime', Companion_getInstance_17().rgb_udwlgr_k$(0, 255, 0));
  };
  protoOf(Colors).get_LimeGreen_33bue3_k$ = function () {
    return NamedRgb(this, 'limegreen', Companion_getInstance_17().rgb_udwlgr_k$(50, 205, 50));
  };
  protoOf(Colors).get_Linen_id36i9_k$ = function () {
    return NamedRgb(this, 'linen', Companion_getInstance_17().rgb_udwlgr_k$(250, 240, 230));
  };
  protoOf(Colors).get_Magenta_siy4ww_k$ = function () {
    return NamedRgb(this, 'magenta', Companion_getInstance_17().rgb_udwlgr_k$(255, 0, 255));
  };
  protoOf(Colors).get_Maroon_1dk715_k$ = function () {
    return NamedRgb(this, 'maroon', Companion_getInstance_17().rgb_udwlgr_k$(128, 0, 0));
  };
  protoOf(Colors).get_MediumAquaMarine_9nmz8c_k$ = function () {
    return NamedRgb(this, 'mediumaquamarine', Companion_getInstance_17().rgb_udwlgr_k$(102, 205, 170));
  };
  protoOf(Colors).get_MediumBlue_ghumeg_k$ = function () {
    return NamedRgb(this, 'mediumblue', Companion_getInstance_17().rgb_udwlgr_k$(0, 0, 205));
  };
  protoOf(Colors).get_MediumOrchid_6dr9cv_k$ = function () {
    return NamedRgb(this, 'mediumorchid', Companion_getInstance_17().rgb_udwlgr_k$(186, 85, 211));
  };
  protoOf(Colors).get_MediumPurple_5usidi_k$ = function () {
    return NamedRgb(this, 'mediumpurple', Companion_getInstance_17().rgb_udwlgr_k$(147, 112, 219));
  };
  protoOf(Colors).get_MediumSeaGreen_uimfda_k$ = function () {
    return NamedRgb(this, 'mediumseagreen', Companion_getInstance_17().rgb_udwlgr_k$(60, 179, 113));
  };
  protoOf(Colors).get_MediumSlateBlue_cvjwbv_k$ = function () {
    return NamedRgb(this, 'mediumslateblue', Companion_getInstance_17().rgb_udwlgr_k$(123, 104, 238));
  };
  protoOf(Colors).get_MediumSpringGreen_68myrc_k$ = function () {
    return NamedRgb(this, 'mediumspringgreen', Companion_getInstance_17().rgb_udwlgr_k$(0, 250, 154));
  };
  protoOf(Colors).get_MediumTurquoise_w7mp5p_k$ = function () {
    return NamedRgb(this, 'mediumturquoise', Companion_getInstance_17().rgb_udwlgr_k$(72, 209, 204));
  };
  protoOf(Colors).get_MediumVioletRed_cpazro_k$ = function () {
    return NamedRgb(this, 'mediumvioletred', Companion_getInstance_17().rgb_udwlgr_k$(199, 21, 133));
  };
  protoOf(Colors).get_MidnightBlue_di5bxv_k$ = function () {
    return NamedRgb(this, 'midnightblue', Companion_getInstance_17().rgb_udwlgr_k$(25, 25, 112));
  };
  protoOf(Colors).get_MintCream_b9kfih_k$ = function () {
    return NamedRgb(this, 'mintcream', Companion_getInstance_17().rgb_udwlgr_k$(245, 255, 250));
  };
  protoOf(Colors).get_MistyRose_83ke2m_k$ = function () {
    return NamedRgb(this, 'mistyrose', Companion_getInstance_17().rgb_udwlgr_k$(255, 228, 225));
  };
  protoOf(Colors).get_Moccasin_tjrwhu_k$ = function () {
    return NamedRgb(this, 'moccasin', Companion_getInstance_17().rgb_udwlgr_k$(255, 228, 181));
  };
  protoOf(Colors).get_NavajoWhite_yqbnct_k$ = function () {
    return NamedRgb(this, 'navajowhite', Companion_getInstance_17().rgb_udwlgr_k$(255, 222, 173));
  };
  protoOf(Colors).get_Navy_wo6ja7_k$ = function () {
    return NamedRgb(this, 'navy', Companion_getInstance_17().rgb_udwlgr_k$(0, 0, 128));
  };
  protoOf(Colors).get_OldLace_5z8ndh_k$ = function () {
    return NamedRgb(this, 'oldlace', Companion_getInstance_17().rgb_udwlgr_k$(253, 245, 230));
  };
  protoOf(Colors).get_Olive_iesdxu_k$ = function () {
    return NamedRgb(this, 'olive', Companion_getInstance_17().rgb_udwlgr_k$(128, 128, 0));
  };
  protoOf(Colors).get_OliveDrab_ei6q5d_k$ = function () {
    return NamedRgb(this, 'olivedrab', Companion_getInstance_17().rgb_udwlgr_k$(107, 142, 35));
  };
  protoOf(Colors).get_Orange_2kp26v_k$ = function () {
    return NamedRgb(this, 'orange', Companion_getInstance_17().rgb_udwlgr_k$(255, 165, 0));
  };
  protoOf(Colors).get_OrangeRed_4r1q9y_k$ = function () {
    return NamedRgb(this, 'orangered', Companion_getInstance_17().rgb_udwlgr_k$(255, 69, 0));
  };
  protoOf(Colors).get_Orchid_2kq7rg_k$ = function () {
    return NamedRgb(this, 'orchid', Companion_getInstance_17().rgb_udwlgr_k$(218, 112, 214));
  };
  protoOf(Colors).get_PaleGoldenRod_ekls2d_k$ = function () {
    return NamedRgb(this, 'palegoldenrod', Companion_getInstance_17().rgb_udwlgr_k$(238, 232, 170));
  };
  protoOf(Colors).get_PaleGreen_crlqds_k$ = function () {
    return NamedRgb(this, 'palegreen', Companion_getInstance_17().rgb_udwlgr_k$(152, 251, 152));
  };
  protoOf(Colors).get_PaleTurquoise_6api32_k$ = function () {
    return NamedRgb(this, 'paleturquoise', Companion_getInstance_17().rgb_udwlgr_k$(175, 238, 238));
  };
  protoOf(Colors).get_PaleVioletRed_jtguyp_k$ = function () {
    return NamedRgb(this, 'palevioletred', Companion_getInstance_17().rgb_udwlgr_k$(219, 112, 147));
  };
  protoOf(Colors).get_PapayaWhip_vnp0lx_k$ = function () {
    return NamedRgb(this, 'papayawhip', Companion_getInstance_17().rgb_udwlgr_k$(255, 239, 213));
  };
  protoOf(Colors).get_PeachPuff_bn3oi5_k$ = function () {
    return NamedRgb(this, 'peachpuff', Companion_getInstance_17().rgb_udwlgr_k$(255, 218, 185));
  };
  protoOf(Colors).get_Peru_wo7w4h_k$ = function () {
    return NamedRgb(this, 'peru', Companion_getInstance_17().rgb_udwlgr_k$(205, 133, 63));
  };
  protoOf(Colors).get_Pink_wo7yzj_k$ = function () {
    return NamedRgb(this, 'pink', Companion_getInstance_17().rgb_udwlgr_k$(255, 192, 203));
  };
  protoOf(Colors).get_Plum_wo81dp_k$ = function () {
    return NamedRgb(this, 'plum', Companion_getInstance_17().rgb_udwlgr_k$(221, 160, 221));
  };
  protoOf(Colors).get_PowderBlue_ha8x0_k$ = function () {
    return NamedRgb(this, 'powderblue', Companion_getInstance_17().rgb_udwlgr_k$(176, 224, 230));
  };
  protoOf(Colors).get_Purple_33oyqt_k$ = function () {
    return NamedRgb(this, 'purple', Companion_getInstance_17().rgb_udwlgr_k$(128, 0, 128));
  };
  protoOf(Colors).get_RebeccaPurple_6mafj6_k$ = function () {
    return NamedRgb(this, 'rebeccapurple', Companion_getInstance_17().rgb_udwlgr_k$(102, 51, 153));
  };
  protoOf(Colors).get_Red_18jks8_k$ = function () {
    return NamedRgb(this, 'red', Companion_getInstance_17().rgb_udwlgr_k$(255, 0, 0));
  };
  protoOf(Colors).get_RosyBrown_gx67d6_k$ = function () {
    return NamedRgb(this, 'rosybrown', Companion_getInstance_17().rgb_udwlgr_k$(188, 143, 143));
  };
  protoOf(Colors).get_RoyalBlue_n7lkjc_k$ = function () {
    return NamedRgb(this, 'royalblue', Companion_getInstance_17().rgb_udwlgr_k$(65, 105, 225));
  };
  protoOf(Colors).get_SaddleBrown_xa0bbu_k$ = function () {
    return NamedRgb(this, 'saddlebrown', Companion_getInstance_17().rgb_udwlgr_k$(139, 69, 19));
  };
  protoOf(Colors).get_Salmon_47q1zr_k$ = function () {
    return NamedRgb(this, 'salmon', Companion_getInstance_17().rgb_udwlgr_k$(250, 128, 114));
  };
  protoOf(Colors).get_SandyBrown_fjstbe_k$ = function () {
    return NamedRgb(this, 'sandybrown', Companion_getInstance_17().rgb_udwlgr_k$(244, 164, 96));
  };
  protoOf(Colors).get_SeaGreen_gor2g3_k$ = function () {
    return NamedRgb(this, 'seagreen', Companion_getInstance_17().rgb_udwlgr_k$(46, 139, 87));
  };
  protoOf(Colors).get_SeaShell_gibx12_k$ = function () {
    return NamedRgb(this, 'seashell', Companion_getInstance_17().rgb_udwlgr_k$(255, 245, 238));
  };
  protoOf(Colors).get_Sienna_4bzyjf_k$ = function () {
    return NamedRgb(this, 'sienna', Companion_getInstance_17().rgb_udwlgr_k$(160, 82, 45));
  };
  protoOf(Colors).get_Silver_4c4l6e_k$ = function () {
    return NamedRgb(this, 'silver', Companion_getInstance_17().rgb_udwlgr_k$(192, 192, 192));
  };
  protoOf(Colors).get_SkyBlue_6hycxa_k$ = function () {
    return NamedRgb(this, 'skyblue', Companion_getInstance_17().rgb_udwlgr_k$(135, 206, 235));
  };
  protoOf(Colors).get_SlateBlue_ac83li_k$ = function () {
    return NamedRgb(this, 'slateblue', Companion_getInstance_17().rgb_udwlgr_k$(106, 90, 205));
  };
  protoOf(Colors).get_SlateGray_ac4sod_k$ = function () {
    return NamedRgb(this, 'slategray', Companion_getInstance_17().rgb_udwlgr_k$(112, 128, 144));
  };
  protoOf(Colors).get_SlateGrey_ac4skx_k$ = function () {
    return NamedRgb(this, 'slategrey', Companion_getInstance_17().rgb_udwlgr_k$(112, 128, 144));
  };
  protoOf(Colors).get_Snow_wo9zos_k$ = function () {
    return NamedRgb(this, 'snow', Companion_getInstance_17().rgb_udwlgr_k$(255, 250, 250));
  };
  protoOf(Colors).get_SpringGreen_t4r3al_k$ = function () {
    return NamedRgb(this, 'springgreen', Companion_getInstance_17().rgb_udwlgr_k$(0, 255, 127));
  };
  protoOf(Colors).get_SteelBlue_c5x5vo_k$ = function () {
    return NamedRgb(this, 'steelblue', Companion_getInstance_17().rgb_udwlgr_k$(70, 130, 180));
  };
  protoOf(Colors).get_Tan_18jje0_k$ = function () {
    return NamedRgb(this, 'tan', Companion_getInstance_17().rgb_udwlgr_k$(210, 180, 140));
  };
  protoOf(Colors).get_Teal_woafnp_k$ = function () {
    return NamedRgb(this, 'teal', Companion_getInstance_17().rgb_udwlgr_k$(0, 128, 128));
  };
  protoOf(Colors).get_Thistle_6jdsp2_k$ = function () {
    return NamedRgb(this, 'thistle', Companion_getInstance_17().rgb_udwlgr_k$(216, 191, 216));
  };
  protoOf(Colors).get_Tomato_4wh6wj_k$ = function () {
    return NamedRgb(this, 'tomato', Companion_getInstance_17().rgb_udwlgr_k$(255, 99, 71));
  };
  protoOf(Colors).get_Turquoise_toawfc_k$ = function () {
    return NamedRgb(this, 'turquoise', Companion_getInstance_17().rgb_udwlgr_k$(64, 224, 208));
  };
  protoOf(Colors).get_Violet_5rb5wo_k$ = function () {
    return NamedRgb(this, 'violet', Companion_getInstance_17().rgb_udwlgr_k$(238, 130, 238));
  };
  protoOf(Colors).get_Wheat_ij43a6_k$ = function () {
    return NamedRgb(this, 'wheat', Companion_getInstance_17().rgb_udwlgr_k$(245, 222, 179));
  };
  protoOf(Colors).get_White_ij46ow_k$ = function () {
    return NamedRgb(this, 'white', Companion_getInstance_17().rgb_udwlgr_k$(255, 255, 255));
  };
  protoOf(Colors).get_WhiteSmoke_gvtxtb_k$ = function () {
    return NamedRgb(this, 'whitesmoke', Companion_getInstance_17().rgb_udwlgr_k$(245, 245, 245));
  };
  protoOf(Colors).get_Yellow_746xzx_k$ = function () {
    return NamedRgb(this, 'yellow', Companion_getInstance_17().rgb_udwlgr_k$(255, 255, 0));
  };
  protoOf(Colors).get_YellowGreen_wl0z8m_k$ = function () {
    return NamedRgb(this, 'yellowgreen', Companion_getInstance_17().rgb_udwlgr_k$(154, 205, 50));
  };
  var Colors_instance;
  function Colors_getInstance() {
    if (Colors_instance == null)
      new Colors();
    return Colors_instance;
  }
  function get_isBright(_this__u8e3s4) {
    return get_luminance(_this__u8e3s4) > 0.5;
  }
  function lightened(_this__u8e3s4, byPercent) {
    byPercent = byPercent === VOID ? 0.3 : byPercent;
    return _this__u8e3s4.inverted_adp911_k$().darkened_iwrtmu_k$(byPercent).inverted_adp911_k$();
  }
  function NamedRgb_init_$Init$(name, value, $this) {
    NamedRgb_0.call($this, name, new RawRgb(value));
    return $this;
  }
  function NamedRgb_init_$Create$(name, value) {
    return NamedRgb_init_$Init$(name, value, objectCreate(protoOf(NamedRgb_0)));
  }
  function toInRangeInt($this, _this__u8e3s4) {
    // Inline function 'kotlin.check' call
    if (!(new Long(0, -1)).and_4spn93_k$(_this__u8e3s4).equals(new Long(0, 0))) {
      // Inline function 'kotlin.text.uppercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var message = 'Got an invalid hex color (0x' + toString(_this__u8e3s4, 16).toUpperCase() + ') value larger than 0xFFFFFFFF';
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    return _this__u8e3s4.toInt_1tsl84_k$();
  }
  function Rgb() {
  }
  function RawRgb(value) {
    this.value_1 = value;
  }
  protoOf(RawRgb).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(RawRgb).get_red_18ix20_k$ = function () {
    return this.value_1 >> 16 & 255;
  };
  protoOf(RawRgb).get_green_is36qi_k$ = function () {
    return this.value_1 >> 8 & 255;
  };
  protoOf(RawRgb).get_blue_wojj4z_k$ = function () {
    return this.value_1 >> 0 & 255;
  };
  protoOf(RawRgb).get_alpha_iooth1_k$ = function () {
    return this.value_1 >> 24 & 255;
  };
  protoOf(RawRgb).get_redf_wotlby_k$ = function () {
    return toColorFloat(this.get_red_18ix20_k$());
  };
  protoOf(RawRgb).get_greenf_dxud3g_k$ = function () {
    return toColorFloat(this.get_green_is36qi_k$());
  };
  protoOf(RawRgb).get_bluef_ip8ppf_k$ = function () {
    return toColorFloat(this.get_blue_wojj4z_k$());
  };
  protoOf(RawRgb).get_alphaf_b0gxxt_k$ = function () {
    return toColorFloat(this.get_alpha_iooth1_k$());
  };
  protoOf(RawRgb).inverted_adp911_k$ = function () {
    return Companion_getInstance_17().rgba_3xu3m4_k$(255 - this.get_red_18ix20_k$() | 0, 255 - this.get_green_is36qi_k$() | 0, 255 - this.get_blue_wojj4z_k$() | 0, this.get_alpha_iooth1_k$());
  };
  protoOf(RawRgb).darkened_iwrtmu_k$ = function (byPercent) {
    // Inline function 'kotlin.require' call
    if (!(0.0 <= byPercent ? byPercent <= 1.0 : false)) {
      var message = 'Invalid color shifting percent. Expected between 0 and 1, got ' + byPercent;
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    if (byPercent === 0.0)
      return this;
    var darkeningMultiplier = 1.0 - byPercent;
    return Companion_getInstance_17().rgba_bap9l8_k$(this.get_redf_wotlby_k$() * darkeningMultiplier, this.get_greenf_dxud3g_k$() * darkeningMultiplier, this.get_bluef_ip8ppf_k$() * darkeningMultiplier, this.get_alphaf_b0gxxt_k$());
  };
  protoOf(RawRgb).copy_my5h57_k$ = function (red, green, blue, alpha) {
    return Companion_getInstance_17().rgba_3xu3m4_k$(red, green, blue, alpha);
  };
  protoOf(RawRgb).copyf_olenlb_k$ = function (red, green, blue, alpha) {
    return Companion_getInstance_17().rgba_bap9l8_k$(red, green, blue, alpha);
  };
  protoOf(RawRgb).toRgb_1tsrpu_k$ = function () {
    return this;
  };
  protoOf(RawRgb).toHsl_1tskli_k$ = function () {
    var tmp0 = this.get_redf_wotlby_k$();
    var tmp2 = this.get_greenf_dxud3g_k$();
    // Inline function 'kotlin.comparisons.maxOf' call
    var c = this.get_bluef_ip8ppf_k$();
    var chromaMax = Math.max(tmp0, tmp2, c);
    var tmp0_0 = this.get_redf_wotlby_k$();
    var tmp2_0 = this.get_greenf_dxud3g_k$();
    // Inline function 'kotlin.comparisons.minOf' call
    var c_0 = this.get_bluef_ip8ppf_k$();
    var chromaMin = Math.min(tmp0_0, tmp2_0, c_0);
    var chromaDelta = chromaMax - chromaMin;
    var lightness = (chromaMin + chromaMax) / 2.0;
    // Inline function 'kotlin.math.abs' call
    var x = 2.0 * lightness - 1.0;
    var saturation = chromaDelta / (1.0 - Math.abs(x));
    var tmp;
    if (chromaDelta === 0.0) {
      tmp = 0.0;
    } else {
      var tmp_0;
      if (chromaMax === this.get_redf_wotlby_k$()) {
        tmp_0 = (this.get_greenf_dxud3g_k$() - this.get_bluef_ip8ppf_k$()) / chromaDelta % 6;
      } else if (chromaMax === this.get_greenf_dxud3g_k$()) {
        tmp_0 = (this.get_bluef_ip8ppf_k$() - this.get_redf_wotlby_k$()) / chromaDelta + 2.0;
      } else if (chromaMax === this.get_bluef_ip8ppf_k$()) {
        tmp_0 = (this.get_redf_wotlby_k$() - this.get_greenf_dxud3g_k$()) / chromaDelta + 4.0;
      } else {
        var message = 'Unexpected chromaMax value ' + chromaMax;
        throw IllegalStateException_init_$Create$(toString_0(message));
      }
      tmp = 60.0 * tmp_0;
    }
    var hue = tmp;
    return Companion_getInstance_17().hsla_rzsfr4_k$(hue, saturation, lightness, this.get_alphaf_b0gxxt_k$());
  };
  protoOf(RawRgb).toString = function () {
    return this.get_alpha_iooth1_k$() === 255 ? 'rgb(' + this.get_red_18ix20_k$() + ', ' + this.get_green_is36qi_k$() + ', ' + this.get_blue_wojj4z_k$() + ')' : 'rgba(' + this.get_red_18ix20_k$() + ', ' + this.get_green_is36qi_k$() + ', ' + this.get_blue_wojj4z_k$() + ', ' + roundTo(this.get_alphaf_b0gxxt_k$(), 2) + ')';
  };
  protoOf(RawRgb).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (!(other == null) ? isInterface(other, Rgb) : false) {
      tmp_2 = this.get_red_18ix20_k$() === other.get_red_18ix20_k$();
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.get_green_is36qi_k$() === other.get_green_is36qi_k$();
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.get_blue_wojj4z_k$() === other.get_blue_wojj4z_k$();
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.get_alpha_iooth1_k$() === other.get_alpha_iooth1_k$();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(RawRgb).hashCode = function () {
    var result = this.get_red_18ix20_k$();
    result = imul(31, result) + this.get_green_is36qi_k$() | 0;
    result = imul(31, result) + this.get_blue_wojj4z_k$() | 0;
    result = imul(31, result) + this.get_alpha_iooth1_k$() | 0;
    return result;
  };
  function NamedRgb_0(name, rgb) {
    this.$$delegate_0__1 = rgb;
    this.name_1 = name;
  }
  protoOf(NamedRgb_0).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(NamedRgb_0).toString = function () {
    return this.name_1;
  };
  protoOf(NamedRgb_0).equals = function (other) {
    return this === other;
  };
  protoOf(NamedRgb_0).hashCode = function () {
    return getStringHashCode(this.name_1);
  };
  protoOf(NamedRgb_0).get_value_j01efc_k$ = function () {
    return this.$$delegate_0__1.value_1;
  };
  protoOf(NamedRgb_0).get_red_18ix20_k$ = function () {
    return this.$$delegate_0__1.get_red_18ix20_k$();
  };
  protoOf(NamedRgb_0).get_green_is36qi_k$ = function () {
    return this.$$delegate_0__1.get_green_is36qi_k$();
  };
  protoOf(NamedRgb_0).get_blue_wojj4z_k$ = function () {
    return this.$$delegate_0__1.get_blue_wojj4z_k$();
  };
  protoOf(NamedRgb_0).get_alpha_iooth1_k$ = function () {
    return this.$$delegate_0__1.get_alpha_iooth1_k$();
  };
  protoOf(NamedRgb_0).get_redf_wotlby_k$ = function () {
    return this.$$delegate_0__1.get_redf_wotlby_k$();
  };
  protoOf(NamedRgb_0).get_greenf_dxud3g_k$ = function () {
    return this.$$delegate_0__1.get_greenf_dxud3g_k$();
  };
  protoOf(NamedRgb_0).get_bluef_ip8ppf_k$ = function () {
    return this.$$delegate_0__1.get_bluef_ip8ppf_k$();
  };
  protoOf(NamedRgb_0).get_alphaf_b0gxxt_k$ = function () {
    return this.$$delegate_0__1.get_alphaf_b0gxxt_k$();
  };
  protoOf(NamedRgb_0).copy_my5h57_k$ = function (red, green, blue, alpha) {
    return this.$$delegate_0__1.copy_my5h57_k$(red, green, blue, alpha);
  };
  protoOf(NamedRgb_0).copyf_olenlb_k$ = function (red, green, blue, alpha) {
    return this.$$delegate_0__1.copyf_olenlb_k$(red, green, blue, alpha);
  };
  protoOf(NamedRgb_0).inverted_adp911_k$ = function () {
    return this.$$delegate_0__1.inverted_adp911_k$();
  };
  protoOf(NamedRgb_0).darkened_iwrtmu_k$ = function (byPercent) {
    return this.$$delegate_0__1.darkened_iwrtmu_k$(byPercent);
  };
  protoOf(NamedRgb_0).toRgb_1tsrpu_k$ = function () {
    return this.$$delegate_0__1.toRgb_1tsrpu_k$();
  };
  protoOf(NamedRgb_0).toHsl_1tskli_k$ = function () {
    return this.$$delegate_0__1.toHsl_1tskli_k$();
  };
  function Hsl(hue, saturation, lightness, alpha) {
    this.hue_1 = hue;
    this.saturation_1 = saturation;
    this.lightness_1 = lightness;
    this.alpha_1 = alpha;
  }
  protoOf(Hsl).get_hue_18j435_k$ = function () {
    return this.hue_1;
  };
  protoOf(Hsl).get_saturation_nzhaqt_k$ = function () {
    return this.saturation_1;
  };
  protoOf(Hsl).get_lightness_jv7mx0_k$ = function () {
    return this.lightness_1;
  };
  protoOf(Hsl).get_alpha_iooth1_k$ = function () {
    return this.alpha_1;
  };
  protoOf(Hsl).inverted_adp911_k$ = function () {
    return this.toRgb_1tsrpu_k$().inverted_adp911_k$();
  };
  protoOf(Hsl).darkened_iwrtmu_k$ = function (byPercent) {
    return this.toRgb_1tsrpu_k$().darkened_iwrtmu_k$(byPercent);
  };
  protoOf(Hsl).copy_egrqb9_k$ = function (hue, saturation, lightness, alpha) {
    return Companion_getInstance_17().hsla_rzsfr4_k$(hue, saturation, lightness, alpha);
  };
  protoOf(Hsl).copy$default_vnqijd_k$ = function (hue, saturation, lightness, alpha, $super) {
    hue = hue === VOID ? this.hue_1 : hue;
    saturation = saturation === VOID ? this.saturation_1 : saturation;
    lightness = lightness === VOID ? this.lightness_1 : lightness;
    alpha = alpha === VOID ? this.alpha_1 : alpha;
    return $super === VOID ? this.copy_egrqb9_k$(hue, saturation, lightness, alpha) : $super.copy_egrqb9_k$.call(this, hue, saturation, lightness, alpha);
  };
  protoOf(Hsl).toRgb_1tsrpu_k$ = function () {
    // Inline function 'kotlin.math.abs' call
    var x = 2 * this.lightness_1 - 1;
    var chroma = (1 - Math.abs(x)) * this.saturation_1;
    // Inline function 'kotlin.math.abs' call
    var x_0 = this.hue_1 / 60 % 2 - 1;
    var intermediateValue = chroma * (1 - Math.abs(x_0));
    var hueSection = (numberToInt(this.hue_1) % 360 | 0) / 60 | 0;
    var r;
    var g;
    var b;
    switch (hueSection) {
      case 0:
        r = chroma;
        g = intermediateValue;
        b = 0.0;
        break;
      case 1:
        r = intermediateValue;
        g = chroma;
        b = 0.0;
        break;
      case 2:
        r = 0.0;
        g = chroma;
        b = intermediateValue;
        break;
      case 3:
        r = 0.0;
        g = intermediateValue;
        b = chroma;
        break;
      case 4:
        r = intermediateValue;
        g = 0.0;
        b = chroma;
        break;
      default:
        // Inline function 'kotlin.check' call

        if (!(hueSection === 5)) {
          throw IllegalStateException_init_$Create$('Check failed.');
        }

        r = chroma;
        g = 0.0;
        b = intermediateValue;
        break;
    }
    var lightnessAdjustment = this.lightness_1 - chroma / 2;
    return Companion_getInstance_17().rgba_bap9l8_k$(r + lightnessAdjustment, g + lightnessAdjustment, b + lightnessAdjustment, this.alpha_1);
  };
  protoOf(Hsl).toHsl_1tskli_k$ = function () {
    return this;
  };
  protoOf(Hsl).toString = function () {
    var hueRounded = roundTo(this.hue_1, 1);
    var saturationPercent = roundTo(this.saturation_1 * 100, 1);
    var lightnessPercent = roundTo(this.lightness_1 * 100, 1);
    return this.alpha_1 === 1.0 ? 'hsl(' + hueRounded + ', ' + saturationPercent + '%, ' + lightnessPercent + '%)' : 'hsla(' + hueRounded + ', ' + saturationPercent + '%, ' + lightnessPercent + '%, ' + this.alpha_1 + ')';
  };
  protoOf(Hsl).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof Hsl) {
      tmp_2 = this.hue_1 === other.hue_1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.saturation_1 === other.saturation_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.lightness_1 === other.lightness_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.alpha_1 === other.alpha_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Hsl).hashCode = function () {
    var result = getNumberHashCode(this.hue_1);
    result = imul(31, result) + getNumberHashCode(this.saturation_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.lightness_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.alpha_1) | 0;
    return result;
  };
  function Companion_0() {
    Companion_instance_0 = this;
    this.DEFAULT_SHIFTING_PERCENT_1 = 0.3;
  }
  protoOf(Companion_0).get_DEFAULT_SHIFTING_PERCENT_bgdcr7_k$ = function () {
    return this.DEFAULT_SHIFTING_PERCENT_1;
  };
  protoOf(Companion_0).rgb_6orfmz_k$ = function (value) {
    return new RawRgb(-16777216 | value);
  };
  protoOf(Companion_0).argb_u8nll8_k$ = function (value) {
    return new RawRgb(value);
  };
  protoOf(Companion_0).argb_v9u7oe_k$ = function (value) {
    return this.argb_u8nll8_k$(toInRangeInt(this, value));
  };
  protoOf(Companion_0).rgba_idjuxo_k$ = function (value) {
    // Inline function 'kotlin.run' call
    var alpha = (value & 255) << 24;
    var rgb = value >> 8;
    return this.argb_u8nll8_k$(alpha | rgb);
  };
  protoOf(Companion_0).rgba_dqu85i_k$ = function (value) {
    return this.rgba_idjuxo_k$(toInRangeInt(this, value));
  };
  protoOf(Companion_0).rgb_udwlgr_k$ = function (r, g, b) {
    return this.rgba_3xu3m4_k$(r, g, b, 255);
  };
  protoOf(Companion_0).rgba_3xu3m4_k$ = function (r, g, b, a) {
    return new RawRgb((r & 255) << 16 | (g & 255) << 8 | (b & 255) << 0 | (a & 255) << 24);
  };
  protoOf(Companion_0).argb_bgl9sc_k$ = function (a, r, g, b) {
    return this.rgba_3xu3m4_k$(r, g, b, a);
  };
  protoOf(Companion_0).rgb_o6n8ln_k$ = function (r, g, b) {
    return this.rgb_udwlgr_k$(toColorInt(r), toColorInt(g), toColorInt(b));
  };
  protoOf(Companion_0).rgba_bap9l8_k$ = function (r, g, b, a) {
    return this.rgba_3xu3m4_k$(toColorInt(r), toColorInt(g), toColorInt(b), toColorInt(a));
  };
  protoOf(Companion_0).argb_eb1cjw_k$ = function (a, r, g, b) {
    return this.rgba_bap9l8_k$(r, g, b, a);
  };
  protoOf(Companion_0).rgba_vsmmr0_k$ = function (r, g, b, a) {
    return this.rgba_3xu3m4_k$(r, g, b, toColorInt(a));
  };
  protoOf(Companion_0).argb_g07r6c_k$ = function (a, r, g, b) {
    return this.rgba_vsmmr0_k$(r, g, b, a);
  };
  protoOf(Companion_0).hsl_jlm5zd_k$ = function (h, s, l) {
    return this.hsl_ppe4lz_k$(h, s, l);
  };
  protoOf(Companion_0).hsla_nhswtc_k$ = function (h, s, l, a) {
    return this.hsla_rzsfr4_k$(h, s, l, a);
  };
  protoOf(Companion_0).hsl_ppe4lz_k$ = function (h, s, l) {
    return new Hsl(h, s, l, 1.0);
  };
  protoOf(Companion_0).hsla_rzsfr4_k$ = function (h, s, l, a) {
    return new Hsl(h, s, l, a);
  };
  protoOf(Companion_0).rgb_fpbdrf_k$ = function (r, g, b) {
    return this.rgba_68523u_k$(r, g, b, 1.0);
  };
  protoOf(Companion_0).rgba_sw8yb8_k$ = function (r, g, b, a) {
    return this.rgba_bap9l8_k$(r.value / 100.0, g.value / 100.0, b.value / 100.0, a.value / 100.0);
  };
  protoOf(Companion_0).rgba_68523u_k$ = function (r, g, b, a) {
    return this.rgba_bap9l8_k$(r.value / 100.0, g.value / 100.0, b.value / 100.0, a);
  };
  protoOf(Companion_0).argb_3qzbuc_k$ = function (a, r, g, b) {
    return this.argb_eb1cjw_k$(a.value / 100.0, r.value / 100.0, g.value / 100.0, b.value / 100.0);
  };
  protoOf(Companion_0).argb_ekqalm_k$ = function (a, r, g, b) {
    return this.argb_eb1cjw_k$(a, r.value / 100.0, g.value / 100.0, b.value / 100.0);
  };
  protoOf(Companion_0).hsl_okaric_k$ = function (h, s, l) {
    return this.hsla_sg5wgt_k$(h, s, l, 1.0);
  };
  protoOf(Companion_0).hsla_sg5wgt_k$ = function (h, s, l, alpha) {
    return this.hsla_rzsfr4_k$(toDegrees(h), s.value / 100.0, l.value / 100.0, alpha);
  };
  protoOf(Companion_0).hsla_bcgopz_k$ = function (h, s, l, alpha) {
    return this.hsla_sg5wgt_k$(h, s, l, alpha.value / 100.0);
  };
  var Companion_instance_0;
  function Companion_getInstance_17() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Color_0() {
  }
  function get_luminance(_this__u8e3s4) {
    // Inline function 'kotlin.let' call
    var rgb = _this__u8e3s4.toRgb_1tsrpu_k$();
    return rgb.get_redf_wotlby_k$() * 0.299 + rgb.get_greenf_dxud3g_k$() * 0.587 + rgb.get_bluef_ip8ppf_k$() * 0.114;
  }
  function toColorFloat(_this__u8e3s4) {
    return (_this__u8e3s4 & 255) / 255.0;
  }
  function roundTo(_this__u8e3s4, decimalPlaces) {
    // Inline function 'kotlin.math.pow' call
    var factor = Math.pow(10.0, decimalPlaces);
    // Inline function 'kotlin.math.roundToInt' call
    var this_0 = _this__u8e3s4 * factor;
    return roundToInt(this_0) / factor;
  }
  function toColorInt(_this__u8e3s4) {
    return numberToInt(coerceIn(_this__u8e3s4, 0.0, 1.0) * 255.0);
  }
  function ariaHidden_0(_this__u8e3s4, value) {
    value = value === VOID ? true : value;
    return attrsModifier(_this__u8e3s4, ariaHidden$lambda(value));
  }
  function ariaDisabled_0(_this__u8e3s4, value) {
    value = value === VOID ? true : value;
    return attrsModifier(_this__u8e3s4, ariaDisabled$lambda(value));
  }
  function ariaHidden$lambda($value) {
    return function ($this$attrsModifier) {
      ariaHidden($this$attrsModifier, $value);
      return Unit_getInstance();
    };
  }
  function ariaDisabled$lambda($value) {
    return function ($this$attrsModifier) {
      ariaDisabled($this$attrsModifier, $value);
      return Unit_getInstance();
    };
  }
  function alignItems_1(_this__u8e3s4, alignItems) {
    return styleModifier(_this__u8e3s4, alignItems$lambda(alignItems));
  }
  function alignItems$lambda($alignItems) {
    return function ($this$styleModifier) {
      alignItems_0($this$styleModifier, $alignItems);
      return Unit_getInstance();
    };
  }
  var com_varabyte_kobweb_compose_ui_modifiers_BackgroundPositionScope$stable;
  var com_varabyte_kobweb_compose_ui_modifiers_BackgroundScope$stable;
  function backgroundImage_2(_this__u8e3s4, gradient) {
    return background_1(_this__u8e3s4, backgroundImage$lambda(gradient));
  }
  function backgroundColor_1(_this__u8e3s4, color) {
    return background_1(_this__u8e3s4, backgroundColor$lambda(color));
  }
  function background_0(_this__u8e3s4, color, backgrounds) {
    return styleModifier(_this__u8e3s4, background$lambda(color, backgrounds));
  }
  function background_1(_this__u8e3s4, scope) {
    return styleModifier(_this__u8e3s4, background$lambda_0(scope));
  }
  function _get_styleScope__yp0uyw($this) {
    return $this.styleScope_1;
  }
  function BackgroundScope(styleScope) {
    this.styleScope_1 = styleScope;
  }
  protoOf(BackgroundScope).attachment_g0t0du_k$ = function (backgroundAttachment_0) {
    return backgroundAttachment(this.styleScope_1, backgroundAttachment_0);
  };
  protoOf(BackgroundScope).clip_hxcir2_k$ = function (backgroundClip_0) {
    return backgroundClip(this.styleScope_1, backgroundClip_0);
  };
  protoOf(BackgroundScope).color_lesdgv_k$ = function (color) {
    return backgroundColor(this.styleScope_1, color);
  };
  protoOf(BackgroundScope).color_ylwang_k$ = function (backgroundColor) {
    return backgroundColor_0(this.styleScope_1, backgroundColor);
  };
  protoOf(BackgroundScope).image_up1vyp_k$ = function (backgroundImage_0) {
    return backgroundImage(this.styleScope_1, backgroundImage_0);
  };
  protoOf(BackgroundScope).image_hfe2jf_k$ = function (url) {
    return backgroundImage_0(this.styleScope_1, url);
  };
  protoOf(BackgroundScope).image_3xh3op_k$ = function (gradient) {
    return backgroundImage_1(this.styleScope_1, gradient);
  };
  protoOf(BackgroundScope).origin_tph26q_k$ = function (backgroundOrigin_0) {
    return backgroundOrigin(this.styleScope_1, backgroundOrigin_0);
  };
  protoOf(BackgroundScope).position_n8cw4y_k$ = function (backgroundPosition_0) {
    return backgroundPosition(this.styleScope_1, backgroundPosition_0);
  };
  protoOf(BackgroundScope).position_w5pnf3_k$ = function (position) {
    return backgroundPosition(this.styleScope_1, Companion_getInstance_7().of_ke4f5d_k$(position));
  };
  protoOf(BackgroundScope).position_mxt41s_k$ = function (scope) {
    return scope(new BackgroundPositionScope(this.styleScope_1));
  };
  protoOf(BackgroundScope).repeat_loyu9e_k$ = function (backgroundRepeat_0) {
    return backgroundRepeat(this.styleScope_1, backgroundRepeat_0);
  };
  protoOf(BackgroundScope).repeat_wong3v_k$ = function (horizontalRepeat, verticalRepeat) {
    return backgroundRepeat_0(this.styleScope_1, horizontalRepeat, verticalRepeat);
  };
  protoOf(BackgroundScope).size_14bpou_k$ = function (backgroundSize_0) {
    return backgroundSize(this.styleScope_1, backgroundSize_0);
  };
  function _get_styleScope__yp0uyw_0($this) {
    return $this.styleScope_1;
  }
  function _x($this, value) {
    return $this.styleScope_1.property_npxg1h_k$('background-position-x', value);
  }
  function _y($this, value) {
    return $this.styleScope_1.property_npxg1h_k$('background-position-y', value);
  }
  function BackgroundPositionScope(styleScope) {
    this.styleScope_1 = styleScope;
  }
  protoOf(BackgroundPositionScope).x_u4zd7a_k$ = function (value) {
    return _x(this, value);
  };
  protoOf(BackgroundPositionScope).x_sjv0gl_k$ = function (value) {
    return _x(this, value);
  };
  protoOf(BackgroundPositionScope).x_20jd4y_k$ = function (value) {
    return _x(this, value);
  };
  protoOf(BackgroundPositionScope).y_q52yd1_k$ = function (value) {
    return _y(this, value);
  };
  protoOf(BackgroundPositionScope).y_78sglz_k$ = function (value) {
    return _y(this, value);
  };
  protoOf(BackgroundPositionScope).y_j04czo_k$ = function (value) {
    return _y(this, value);
  };
  function backgroundImage$lambda($gradient) {
    return function ($this$background) {
      $this$background.image_3xh3op_k$($gradient);
      return Unit_getInstance();
    };
  }
  function backgroundColor$lambda($color) {
    return function ($this$background) {
      $this$background.color_lesdgv_k$($color);
      return Unit_getInstance();
    };
  }
  function background$lambda($color, $backgrounds) {
    return function ($this$styleModifier) {
      background($this$styleModifier, Companion_getInstance_8().list_fmd9ox_k$($color, $backgrounds.slice()));
      return Unit_getInstance();
    };
  }
  function background$lambda_0($scope) {
    return function ($this$styleModifier) {
      var tmp0 = new BackgroundScope($this$styleModifier);
      // Inline function 'kotlin.apply' call
      $scope(tmp0);
      return Unit_getInstance();
    };
  }
  var com_varabyte_kobweb_compose_ui_modifiers_BorderScope$stable;
  var com_varabyte_kobweb_compose_ui_modifiers_BorderSideScope$stable;
  var com_varabyte_kobweb_compose_ui_modifiers_BorderRadiusScope$stable;
  var com_varabyte_kobweb_compose_ui_modifiers_BorderImageScope$stable;
  function borderBottom_0(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    return styleModifier(_this__u8e3s4, borderBottom$lambda(width, style, color));
  }
  function borderLeft_0(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    return styleModifier(_this__u8e3s4, borderLeft$lambda(width, style, color));
  }
  function borderRadius_0(_this__u8e3s4, r) {
    return styleModifier(_this__u8e3s4, borderRadius$lambda(r));
  }
  function border_0(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    return styleModifier(_this__u8e3s4, border$lambda(width, style, color));
  }
  function border_1(_this__u8e3s4, scope) {
    return styleModifier(_this__u8e3s4, border$lambda_0(scope));
  }
  function _get_styleScope__yp0uyw_1($this) {
    return $this.styleScope_1;
  }
  function BorderScope(styleScope) {
    this.styleScope_1 = styleScope;
  }
  protoOf(BorderScope).color_lesdgv_k$ = function (color) {
    return borderColor(this.styleScope_1, color);
  };
  protoOf(BorderScope).color_eijv83_k$ = function (topBottom, leftRight) {
    return borderColor_0(this.styleScope_1, topBottom, leftRight);
  };
  protoOf(BorderScope).color$default_qz2mky_k$ = function (topBottom, leftRight, $super) {
    var tmp;
    if (topBottom === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Color.currentColor' call
      Color_getInstance();
      tmp = Color('currentColor');
    } else {
      tmp = topBottom;
    }
    topBottom = tmp;
    var tmp_0;
    if (leftRight === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Color.currentColor' call
      Color_getInstance();
      tmp_0 = Color('currentColor');
    } else {
      tmp_0 = leftRight;
    }
    leftRight = tmp_0;
    var tmp_1;
    if ($super === VOID) {
      this.color_eijv83_k$(topBottom, leftRight);
      tmp_1 = Unit_getInstance();
    } else {
      tmp_1 = $super.color_eijv83_k$.call(this, topBottom, leftRight);
    }
    return tmp_1;
  };
  protoOf(BorderScope).color_9cb52n_k$ = function (top, leftRight, bottom) {
    return borderColor_1(this.styleScope_1, top, leftRight, bottom);
  };
  protoOf(BorderScope).color$default_v0tvx_k$ = function (top, leftRight, bottom, $super) {
    var tmp;
    if (top === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Color.currentColor' call
      Color_getInstance();
      tmp = Color('currentColor');
    } else {
      tmp = top;
    }
    top = tmp;
    var tmp_0;
    if (leftRight === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Color.currentColor' call
      Color_getInstance();
      tmp_0 = Color('currentColor');
    } else {
      tmp_0 = leftRight;
    }
    leftRight = tmp_0;
    var tmp_1;
    if (bottom === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Color.currentColor' call
      Color_getInstance();
      tmp_1 = Color('currentColor');
    } else {
      tmp_1 = bottom;
    }
    bottom = tmp_1;
    var tmp_2;
    if ($super === VOID) {
      this.color_9cb52n_k$(top, leftRight, bottom);
      tmp_2 = Unit_getInstance();
    } else {
      tmp_2 = $super.color_9cb52n_k$.call(this, top, leftRight, bottom);
    }
    return tmp_2;
  };
  protoOf(BorderScope).color_ypzt9p_k$ = function (top, right, bottom, left) {
    return borderColor_2(this.styleScope_1, top, right, bottom, left);
  };
  protoOf(BorderScope).color$default_69g248_k$ = function (top, right, bottom, left, $super) {
    var tmp;
    if (top === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Color.currentColor' call
      Color_getInstance();
      tmp = Color('currentColor');
    } else {
      tmp = top;
    }
    top = tmp;
    var tmp_0;
    if (right === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Color.currentColor' call
      Color_getInstance();
      tmp_0 = Color('currentColor');
    } else {
      tmp_0 = right;
    }
    right = tmp_0;
    var tmp_1;
    if (bottom === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Color.currentColor' call
      Color_getInstance();
      tmp_1 = Color('currentColor');
    } else {
      tmp_1 = bottom;
    }
    bottom = tmp_1;
    var tmp_2;
    if (left === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Color.currentColor' call
      Color_getInstance();
      tmp_2 = Color('currentColor');
    } else {
      tmp_2 = left;
    }
    left = tmp_2;
    var tmp_3;
    if ($super === VOID) {
      this.color_ypzt9p_k$(top, right, bottom, left);
      tmp_3 = Unit_getInstance();
    } else {
      tmp_3 = $super.color_ypzt9p_k$.call(this, top, right, bottom, left);
    }
    return tmp_3;
  };
  protoOf(BorderScope).style_o6ud9q_k$ = function (lineStyle) {
    return borderStyle(this.styleScope_1, lineStyle);
  };
  protoOf(BorderScope).style_r3r8sd_k$ = function (topBottom, leftRight) {
    return borderStyle_0(this.styleScope_1, topBottom, leftRight);
  };
  protoOf(BorderScope).style$default_fcu6ga_k$ = function (topBottom, leftRight, $super) {
    var tmp;
    if (topBottom === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
      Companion_getInstance_9();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = 'none';
    } else {
      tmp = topBottom;
    }
    topBottom = tmp;
    var tmp_0;
    if (leftRight === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
      Companion_getInstance_9();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_0 = 'none';
    } else {
      tmp_0 = leftRight;
    }
    leftRight = tmp_0;
    var tmp_1;
    if ($super === VOID) {
      this.style_r3r8sd_k$(topBottom, leftRight);
      tmp_1 = Unit_getInstance();
    } else {
      tmp_1 = $super.style_r3r8sd_k$.call(this, topBottom, leftRight);
    }
    return tmp_1;
  };
  protoOf(BorderScope).style_ql50i4_k$ = function (top, leftRight, bottom) {
    return borderStyle_1(this.styleScope_1, top, leftRight, bottom);
  };
  protoOf(BorderScope).style$default_e9aum4_k$ = function (top, leftRight, bottom, $super) {
    var tmp;
    if (top === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
      Companion_getInstance_9();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = 'none';
    } else {
      tmp = top;
    }
    top = tmp;
    var tmp_0;
    if (leftRight === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
      Companion_getInstance_9();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_0 = 'none';
    } else {
      tmp_0 = leftRight;
    }
    leftRight = tmp_0;
    var tmp_1;
    if (bottom === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
      Companion_getInstance_9();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_1 = 'none';
    } else {
      tmp_1 = bottom;
    }
    bottom = tmp_1;
    var tmp_2;
    if ($super === VOID) {
      this.style_ql50i4_k$(top, leftRight, bottom);
      tmp_2 = Unit_getInstance();
    } else {
      tmp_2 = $super.style_ql50i4_k$.call(this, top, leftRight, bottom);
    }
    return tmp_2;
  };
  protoOf(BorderScope).style_mhn8m3_k$ = function (top, right, bottom, left) {
    return borderStyle_2(this.styleScope_1, top, right, bottom, left);
  };
  protoOf(BorderScope).style$default_ue26p6_k$ = function (top, right, bottom, left, $super) {
    var tmp;
    if (top === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
      Companion_getInstance_9();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = 'none';
    } else {
      tmp = top;
    }
    top = tmp;
    var tmp_0;
    if (right === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
      Companion_getInstance_9();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_0 = 'none';
    } else {
      tmp_0 = right;
    }
    right = tmp_0;
    var tmp_1;
    if (bottom === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
      Companion_getInstance_9();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_1 = 'none';
    } else {
      tmp_1 = bottom;
    }
    bottom = tmp_1;
    var tmp_2;
    if (left === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
      Companion_getInstance_9();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_2 = 'none';
    } else {
      tmp_2 = left;
    }
    left = tmp_2;
    var tmp_3;
    if ($super === VOID) {
      this.style_mhn8m3_k$(top, right, bottom, left);
      tmp_3 = Unit_getInstance();
    } else {
      tmp_3 = $super.style_mhn8m3_k$.call(this, top, right, bottom, left);
    }
    return tmp_3;
  };
  protoOf(BorderScope).width_iqjg4l_k$ = function (width) {
    return borderWidth(this.styleScope_1, width);
  };
  protoOf(BorderScope).width_8c80ve_k$ = function (topBottom, leftRight) {
    return borderWidth_0(this.styleScope_1, topBottom, leftRight);
  };
  protoOf(BorderScope).width_jj1xyz_k$ = function (top, leftRight, bottom) {
    return borderWidth_1(this.styleScope_1, top, leftRight, bottom);
  };
  protoOf(BorderScope).width_ar2lo6_k$ = function (top, right, bottom, left) {
    return borderWidth_2(this.styleScope_1, top, right, bottom, left);
  };
  function borderTop_0(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    return styleModifier(_this__u8e3s4, borderTop$lambda(width, style, color));
  }
  function borderBottom$lambda($width, $style, $color) {
    return function ($this$styleModifier) {
      borderBottom($this$styleModifier, $width, $style, $color);
      return Unit_getInstance();
    };
  }
  function borderLeft$lambda($width, $style, $color) {
    return function ($this$styleModifier) {
      borderLeft($this$styleModifier, $width, $style, $color);
      return Unit_getInstance();
    };
  }
  function borderRadius$lambda($r) {
    return function ($this$styleModifier) {
      borderRadius($this$styleModifier, $r);
      return Unit_getInstance();
    };
  }
  function border$lambda($width, $style, $color) {
    return function ($this$styleModifier) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = $width;
      border($this$styleModifier, tmp$ret$1, $style, $color);
      return Unit_getInstance();
    };
  }
  function border$lambda_0($scope) {
    return function ($this$styleModifier) {
      var tmp0 = new BorderScope($this$styleModifier);
      // Inline function 'kotlin.apply' call
      $scope(tmp0);
      return Unit_getInstance();
    };
  }
  function borderTop$lambda($width, $style, $color) {
    return function ($this$styleModifier) {
      borderTop($this$styleModifier, $width, $style, $color);
      return Unit_getInstance();
    };
  }
  function boxShadow_0(_this__u8e3s4, boxShadows) {
    return styleModifier(_this__u8e3s4, boxShadow$lambda(boxShadows));
  }
  function boxShadow_1(_this__u8e3s4, offsetX, offsetY, blurRadius, spreadRadius, color, inset) {
    offsetX = offsetX === VOID ? get_px(0) : offsetX;
    offsetY = offsetY === VOID ? get_px(0) : offsetY;
    blurRadius = blurRadius === VOID ? null : blurRadius;
    spreadRadius = spreadRadius === VOID ? null : spreadRadius;
    color = color === VOID ? null : color;
    inset = inset === VOID ? false : inset;
    return boxShadow_0(_this__u8e3s4, [Companion_getInstance_10().of_w9d0f3_k$(offsetX, offsetY, blurRadius, spreadRadius, color, inset)]);
  }
  function boxSizing_0(_this__u8e3s4, boxSizing) {
    return styleModifier(_this__u8e3s4, boxSizing$lambda(boxSizing));
  }
  function boxShadow$lambda($boxShadows) {
    return function ($this$styleModifier) {
      boxShadow($this$styleModifier, Companion_getInstance_10().list_58wzgc_k$($boxShadows.slice()));
      return Unit_getInstance();
    };
  }
  function boxSizing$lambda($boxSizing) {
    return function ($this$styleModifier) {
      boxSizing($this$styleModifier, $boxSizing);
      return Unit_getInstance();
    };
  }
  function colorScheme_0(_this__u8e3s4, colorScheme) {
    return styleModifier(_this__u8e3s4, colorScheme$lambda(colorScheme));
  }
  function opacity_1(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, opacity$lambda(value));
  }
  function color_0(_this__u8e3s4, color) {
    return styleModifier(_this__u8e3s4, color$lambda(color));
  }
  function opacity_2(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, opacity$lambda_0(value));
  }
  function colorScheme$lambda($colorScheme) {
    return function ($this$styleModifier) {
      colorScheme($this$styleModifier, $colorScheme);
      return Unit_getInstance();
    };
  }
  function opacity$lambda($value) {
    return function ($this$styleModifier) {
      opacity($this$styleModifier, $value);
      return Unit_getInstance();
    };
  }
  function color$lambda($color) {
    return function ($this$styleModifier) {
      color($this$styleModifier, $color);
      return Unit_getInstance();
    };
  }
  function opacity$lambda_0($value) {
    return function ($this$styleModifier) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = $value;
      opacity_0($this$styleModifier, tmp$ret$1);
      return Unit_getInstance();
    };
  }
  var com_varabyte_kobweb_compose_ui_modifiers_ColumnRuleScope$stable;
  function display_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, display$lambda(value));
  }
  function display$lambda($value) {
    return function ($this$styleModifier) {
      display($this$styleModifier, $value);
      return Unit_getInstance();
    };
  }
  function classNames(_this__u8e3s4, classes) {
    return attrsModifier(_this__u8e3s4, classNames$lambda(classes));
  }
  function appearance_0(_this__u8e3s4, appearance) {
    return styleModifier(_this__u8e3s4, appearance$lambda(appearance));
  }
  function classNames$lambda($classes) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.classes_ayghm2_k$($classes.slice());
      return Unit_getInstance();
    };
  }
  function appearance$lambda($appearance) {
    return function ($this$styleModifier) {
      appearance($this$styleModifier, $appearance);
      return Unit_getInstance();
    };
  }
  function flexGrow_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, flexGrow$lambda(value));
  }
  function gap_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, gap$lambda(value));
  }
  function flexGrow$lambda($value) {
    return function ($this$styleModifier) {
      flexGrow($this$styleModifier, $value);
      return Unit_getInstance();
    };
  }
  function gap$lambda($value) {
    return function ($this$styleModifier) {
      gap($this$styleModifier, $value);
      return Unit_getInstance();
    };
  }
  var com_varabyte_kobweb_compose_ui_modifiers_FontScope$stable;
  var com_varabyte_kobweb_compose_ui_modifiers_FontVariantScope$stable;
  function fontWeight_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, fontWeight$lambda(value));
  }
  function fontFamily_0(_this__u8e3s4, values) {
    return styleModifier(_this__u8e3s4, fontFamily$lambda(values));
  }
  function fontSize_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, fontSize$lambda(value));
  }
  function fontWeight$lambda($value) {
    return function ($this$styleModifier) {
      fontWeight($this$styleModifier, $value);
      return Unit_getInstance();
    };
  }
  function fontFamily$lambda($values) {
    return function ($this$styleModifier) {
      fontFamily($this$styleModifier, $values.slice());
      return Unit_getInstance();
    };
  }
  function fontSize$lambda($value) {
    return function ($this$styleModifier) {
      fontSize($this$styleModifier, $value);
      return Unit_getInstance();
    };
  }
  function gridTemplateColumns_0(_this__u8e3s4, block) {
    return styleModifier(_this__u8e3s4, gridTemplateColumns$lambda(block));
  }
  function gridTemplateColumns$lambda($block) {
    return function ($this$styleModifier) {
      gridTemplateColumns($this$styleModifier, $block);
      return Unit_getInstance();
    };
  }
  function onClick(_this__u8e3s4, listener) {
    return attrsModifier(_this__u8e3s4, onClick$lambda(listener));
  }
  function tabIndex(_this__u8e3s4, value) {
    return attrsModifier(_this__u8e3s4, tabIndex$lambda(value));
  }
  function userSelect_0(_this__u8e3s4, userSelect) {
    return styleModifier(_this__u8e3s4, userSelect$lambda(userSelect));
  }
  function cursor_0(_this__u8e3s4, cursor) {
    return styleModifier(_this__u8e3s4, cursor$lambda(cursor));
  }
  function onClick$lambda($listener) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.onClick_q9cds6_k$($listener);
      return Unit_getInstance();
    };
  }
  function tabIndex$lambda($value) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.tabIndex_fn4aj_k$($value);
      return Unit_getInstance();
    };
  }
  function userSelect$lambda($userSelect) {
    return function ($this$styleModifier) {
      userSelect($this$styleModifier, $userSelect);
      return Unit_getInstance();
    };
  }
  function cursor$lambda($cursor) {
    return function ($this$styleModifier) {
      cursor($this$styleModifier, $cursor);
      return Unit_getInstance();
    };
  }
  var com_varabyte_kobweb_compose_ui_modifiers_MarginScope$stable;
  var com_varabyte_kobweb_compose_ui_modifiers_MarginInlineScope$stable;
  var com_varabyte_kobweb_compose_ui_modifiers_MarginBlockScope$stable;
  var com_varabyte_kobweb_compose_ui_modifiers_PaddingScope$stable;
  var com_varabyte_kobweb_compose_ui_modifiers_PaddingInlineScope$stable;
  var com_varabyte_kobweb_compose_ui_modifiers_PaddingBlockScope$stable;
  function _get_styleScope__yp0uyw_2($this) {
    return $this.styleScope_1;
  }
  function MarginBlockScope(styleScope) {
    this.styleScope_1 = styleScope;
  }
  protoOf(MarginBlockScope).start_7t2yjw_k$ = function (value) {
    return marginBlockStart(this.styleScope_1, value);
  };
  protoOf(MarginBlockScope).end_t3ff3h_k$ = function (value) {
    return marginBlockEnd(this.styleScope_1, value);
  };
  function marginBlock_0(_this__u8e3s4, scope) {
    return styleModifier(_this__u8e3s4, marginBlock$lambda(scope));
  }
  function padding_0(_this__u8e3s4, all) {
    return styleModifier(_this__u8e3s4, padding$lambda(all));
  }
  function margin_0(_this__u8e3s4, top, right, bottom, left) {
    top = top === VOID ? get_px(0) : top;
    right = right === VOID ? get_px(0) : right;
    bottom = bottom === VOID ? get_px(0) : bottom;
    left = left === VOID ? get_px(0) : left;
    return styleModifier(_this__u8e3s4, margin$lambda(top, right, bottom, left));
  }
  function margin_1(_this__u8e3s4, scope) {
    return styleModifier(_this__u8e3s4, margin$lambda_0(scope));
  }
  function lineHeight_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, lineHeight$lambda(value));
  }
  function padding_1(_this__u8e3s4, topBottom, leftRight) {
    topBottom = topBottom === VOID ? get_px(0) : topBottom;
    leftRight = leftRight === VOID ? get_px(0) : leftRight;
    return styleModifier(_this__u8e3s4, padding$lambda_0(topBottom, leftRight));
  }
  function paddingInline_0(_this__u8e3s4, start, end) {
    start = start === VOID ? get_px(0) : start;
    end = end === VOID ? get_px(0) : end;
    return styleModifier(_this__u8e3s4, paddingInline$lambda(start, end));
  }
  function marginBlock_1(_this__u8e3s4, both) {
    return styleModifier(_this__u8e3s4, marginBlock$lambda_0(both));
  }
  function _get_styleScope__yp0uyw_3($this) {
    return $this.styleScope_1;
  }
  function MarginScope(styleScope) {
    this.styleScope_1 = styleScope;
  }
  protoOf(MarginScope).left_pqi2av_k$ = function (value) {
    return marginLeft(this.styleScope_1, value);
  };
  protoOf(MarginScope).right_1eed0y_k$ = function (value) {
    return marginRight(this.styleScope_1, value);
  };
  protoOf(MarginScope).top_1wurxj_k$ = function (value) {
    return marginTop(this.styleScope_1, value);
  };
  protoOf(MarginScope).bottom_k4p8ql_k$ = function (value) {
    return marginBottom(this.styleScope_1, value);
  };
  function zIndex_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, zIndex$lambda(value));
  }
  function margin_2(_this__u8e3s4, top, leftRight, bottom) {
    top = top === VOID ? get_px(0) : top;
    leftRight = leftRight === VOID ? get_px(0) : leftRight;
    bottom = bottom === VOID ? get_px(0) : bottom;
    return styleModifier(_this__u8e3s4, margin$lambda_1(top, leftRight, bottom));
  }
  function margin_3(_this__u8e3s4, all) {
    return styleModifier(_this__u8e3s4, margin$lambda_2(all));
  }
  function verticalAlign_0(_this__u8e3s4, verticalAlign) {
    return styleModifier(_this__u8e3s4, verticalAlign$lambda(verticalAlign));
  }
  function marginBlock$lambda($scope) {
    return function ($this$styleModifier) {
      $scope(new MarginBlockScope($this$styleModifier));
      return Unit_getInstance();
    };
  }
  function padding$lambda($all) {
    return function ($this$styleModifier) {
      padding($this$styleModifier, [$all]);
      return Unit_getInstance();
    };
  }
  function margin$lambda($top, $right, $bottom, $left) {
    return function ($this$styleModifier) {
      margin($this$styleModifier, [$top, $right, $bottom, $left]);
      return Unit_getInstance();
    };
  }
  function margin$lambda_0($scope) {
    return function ($this$styleModifier) {
      $scope(new MarginScope($this$styleModifier));
      return Unit_getInstance();
    };
  }
  function lineHeight$lambda($value) {
    return function ($this$styleModifier) {
      lineHeight($this$styleModifier, toString_0($value));
      return Unit_getInstance();
    };
  }
  function padding$lambda_0($topBottom, $leftRight) {
    return function ($this$styleModifier) {
      padding($this$styleModifier, [$topBottom, $leftRight]);
      return Unit_getInstance();
    };
  }
  function paddingInline$lambda($start, $end) {
    return function ($this$styleModifier) {
      paddingInline($this$styleModifier, $start, $end);
      return Unit_getInstance();
    };
  }
  function marginBlock$lambda_0($both) {
    return function ($this$styleModifier) {
      marginBlock($this$styleModifier, $both);
      return Unit_getInstance();
    };
  }
  function zIndex$lambda($value) {
    return function ($this$styleModifier) {
      zIndex($this$styleModifier, $value);
      return Unit_getInstance();
    };
  }
  function margin$lambda_1($top, $leftRight, $bottom) {
    return function ($this$styleModifier) {
      margin($this$styleModifier, [$top, $leftRight, $bottom]);
      return Unit_getInstance();
    };
  }
  function margin$lambda_2($all) {
    return function ($this$styleModifier) {
      margin($this$styleModifier, [$all]);
      return Unit_getInstance();
    };
  }
  function verticalAlign$lambda($verticalAlign) {
    return function ($this$styleModifier) {
      verticalAlign($this$styleModifier, $verticalAlign);
      return Unit_getInstance();
    };
  }
  function listStyle_0(_this__u8e3s4, type, position, image) {
    type = type === VOID ? null : type;
    position = position === VOID ? null : position;
    image = image === VOID ? null : image;
    return styleModifier(_this__u8e3s4, listStyle$lambda(type, position, image));
  }
  function listStyle$lambda($type, $position, $image) {
    return function ($this$styleModifier) {
      listStyle($this$styleModifier, Companion_getInstance_11().of_g8209t_k$($type, $position, $image));
      return Unit_getInstance();
    };
  }
  function objectFit_0(_this__u8e3s4, objectFit) {
    return styleModifier(_this__u8e3s4, objectFit$lambda(objectFit));
  }
  function objectFit$lambda($objectFit) {
    return function ($this$styleModifier) {
      objectFit($this$styleModifier, $objectFit);
      return Unit_getInstance();
    };
  }
  var com_varabyte_kobweb_compose_ui_modifiers_OutlineScope$stable;
  function outline_0(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    return styleModifier(_this__u8e3s4, outline$lambda(width, style, color));
  }
  function outline$lambda($width, $style, $color) {
    return function ($this$styleModifier) {
      var tmp = Companion_getInstance_12();
      var tmp0_safe_receiver = $width;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_0 = Companion_getInstance_13().of_avfddw_k$(tmp0_safe_receiver);
      }
      outline($this$styleModifier, tmp.of_c4eeh1_k$(tmp_0, $style, $color));
      return Unit_getInstance();
    };
  }
  var com_varabyte_kobweb_compose_ui_modifiers_OverflowScope$stable;
  function overflow_0(_this__u8e3s4, scope) {
    return styleModifier(_this__u8e3s4, overflow$lambda(scope));
  }
  function _get_styleScope__yp0uyw_4($this) {
    return $this.styleScope_1;
  }
  function OverflowScope(styleScope) {
    this.styleScope_1 = styleScope;
  }
  protoOf(OverflowScope).x_7tere2_k$ = function (overflowX_0) {
    return overflowX(this.styleScope_1, overflowX_0);
  };
  protoOf(OverflowScope).y_9zjijb_k$ = function (overflowY_0) {
    return overflowY(this.styleScope_1, overflowY_0);
  };
  function overflow_1(_this__u8e3s4, overflow) {
    return styleModifier(_this__u8e3s4, overflow$lambda_0(overflow));
  }
  function overflow$lambda($scope) {
    return function ($this$styleModifier) {
      $scope(new OverflowScope($this$styleModifier));
      return Unit_getInstance();
    };
  }
  function overflow$lambda_0($overflow) {
    return function ($this$styleModifier) {
      overflow($this$styleModifier, $overflow);
      return Unit_getInstance();
    };
  }
  function position_0(_this__u8e3s4, position) {
    return styleModifier(_this__u8e3s4, position$lambda(position));
  }
  function top_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, top$lambda(value));
  }
  function left_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, left$lambda(value));
  }
  function right_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, right$lambda(value));
  }
  function bottom_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, bottom$lambda(value));
  }
  function position$lambda($position) {
    return function ($this$styleModifier) {
      position($this$styleModifier, $position);
      return Unit_getInstance();
    };
  }
  function top$lambda($value) {
    return function ($this$styleModifier) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = $value;
      top($this$styleModifier, tmp$ret$1);
      return Unit_getInstance();
    };
  }
  function left$lambda($value) {
    return function ($this$styleModifier) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = $value;
      left($this$styleModifier, tmp$ret$1);
      return Unit_getInstance();
    };
  }
  function right$lambda($value) {
    return function ($this$styleModifier) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = $value;
      right($this$styleModifier, tmp$ret$1);
      return Unit_getInstance();
    };
  }
  function bottom$lambda($value) {
    return function ($this$styleModifier) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = $value;
      bottom($this$styleModifier, tmp$ret$1);
      return Unit_getInstance();
    };
  }
  var com_varabyte_kobweb_compose_ui_modifiers_OverscrollBehaviorScope$stable;
  function size(_this__u8e3s4, size) {
    return size_0(_this__u8e3s4, size, size);
  }
  function height_0(_this__u8e3s4, size) {
    return styleModifier(_this__u8e3s4, height$lambda(size));
  }
  function fillMaxSize(_this__u8e3s4, percent) {
    percent = percent === VOID ? get_percent(100) : percent;
    return styleModifier(_this__u8e3s4, fillMaxSize$lambda(percent));
  }
  function width_0(_this__u8e3s4, size) {
    return styleModifier(_this__u8e3s4, width$lambda(size));
  }
  function fillMaxWidth(_this__u8e3s4, percent) {
    percent = percent === VOID ? get_percent(100) : percent;
    return styleModifier(_this__u8e3s4, fillMaxWidth$lambda(percent));
  }
  function minWidth_0(_this__u8e3s4, size) {
    return styleModifier(_this__u8e3s4, minWidth$lambda(size));
  }
  function minHeight_0(_this__u8e3s4, size) {
    return styleModifier(_this__u8e3s4, minHeight$lambda(size));
  }
  function fillMaxHeight(_this__u8e3s4, percent) {
    percent = percent === VOID ? get_percent(100) : percent;
    return styleModifier(_this__u8e3s4, fillMaxHeight$lambda(percent));
  }
  function size_0(_this__u8e3s4, width, height) {
    return styleModifier(_this__u8e3s4, size$lambda(width, height));
  }
  function height$lambda($size) {
    return function ($this$styleModifier) {
      height($this$styleModifier, $size);
      return Unit_getInstance();
    };
  }
  function fillMaxSize$lambda($percent) {
    return function ($this$styleModifier) {
      width($this$styleModifier, $percent);
      height($this$styleModifier, $percent);
      return Unit_getInstance();
    };
  }
  function width$lambda($size) {
    return function ($this$styleModifier) {
      width($this$styleModifier, $size);
      return Unit_getInstance();
    };
  }
  function fillMaxWidth$lambda($percent) {
    return function ($this$styleModifier) {
      width($this$styleModifier, $percent);
      return Unit_getInstance();
    };
  }
  function minWidth$lambda($size) {
    return function ($this$styleModifier) {
      minWidth($this$styleModifier, $size);
      return Unit_getInstance();
    };
  }
  function minHeight$lambda($size) {
    return function ($this$styleModifier) {
      minHeight($this$styleModifier, $size);
      return Unit_getInstance();
    };
  }
  function fillMaxHeight$lambda($percent) {
    return function ($this$styleModifier) {
      height($this$styleModifier, $percent);
      return Unit_getInstance();
    };
  }
  function size$lambda($width, $height) {
    return function ($this$styleModifier) {
      width($this$styleModifier, $width);
      height($this$styleModifier, $height);
      return Unit_getInstance();
    };
  }
  function textAlign_0(_this__u8e3s4, textAlign) {
    return styleModifier(_this__u8e3s4, textAlign$lambda(textAlign));
  }
  function whiteSpace_0(_this__u8e3s4, whiteSpace) {
    return styleModifier(_this__u8e3s4, whiteSpace$lambda(whiteSpace));
  }
  function textDecorationLine_0(_this__u8e3s4, textDecorationLine) {
    return styleModifier(_this__u8e3s4, textDecorationLine$lambda(textDecorationLine));
  }
  function textAlign$lambda($textAlign) {
    return function ($this$styleModifier) {
      textAlign($this$styleModifier, $textAlign);
      return Unit_getInstance();
    };
  }
  function whiteSpace$lambda($whiteSpace) {
    return function ($this$styleModifier) {
      whiteSpace($this$styleModifier, $whiteSpace);
      return Unit_getInstance();
    };
  }
  function textDecorationLine$lambda($textDecorationLine) {
    return function ($this$styleModifier) {
      textDecorationLine($this$styleModifier, [$textDecorationLine]);
      return Unit_getInstance();
    };
  }
  function rotate_0(_this__u8e3s4, a) {
    return styleModifier(_this__u8e3s4, rotate$lambda(a));
  }
  function translateX_0(_this__u8e3s4, tx) {
    return styleModifier(_this__u8e3s4, translateX$lambda(tx));
  }
  function rotate$lambda($a) {
    return function ($this$styleModifier) {
      rotate($this$styleModifier, $a);
      return Unit_getInstance();
    };
  }
  function translateX$lambda($tx) {
    return function ($this$styleModifier) {
      translateX($this$styleModifier, $tx);
      return Unit_getInstance();
    };
  }
  var com_varabyte_kobweb_compose_ui_modifiers_TransitionScope$stable;
  function transition_0(_this__u8e3s4, transition) {
    return styleModifier(_this__u8e3s4, transition$lambda(transition));
  }
  function _get_styleScope__yp0uyw_5($this) {
    return $this.styleScope_1;
  }
  function TransitionScope(styleScope) {
    this.styleScope_1 = styleScope;
  }
  protoOf(TransitionScope).property_511247_k$ = function (properties) {
    return transitionProperty(this.styleScope_1, properties.slice());
  };
  protoOf(TransitionScope).property_7ekuz_k$ = function (properties) {
    return transitionProperty_0(this.styleScope_1, properties.slice());
  };
  protoOf(TransitionScope).duration_30w21k_k$ = function (durations) {
    return transitionDuration(this.styleScope_1, durations.slice());
  };
  protoOf(TransitionScope).timingFunction_28o80i_k$ = function (timingFunctions) {
    return transitionTimingFunction(this.styleScope_1, timingFunctions.slice());
  };
  protoOf(TransitionScope).delay_81jtuf_k$ = function (delays) {
    return transitionDelay(this.styleScope_1, delays.slice());
  };
  protoOf(TransitionScope).behavior_6wo3wk_k$ = function (behaviors) {
    transitionBehavior(this.styleScope_1, Companion_getInstance_14().list_7uyshs_k$(behaviors.slice()));
  };
  protoOf(TransitionScope).property_u6i3qp_k$ = function (properties) {
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(properties);
    return this.property_511247_k$(tmp$ret$0.slice());
  };
  protoOf(TransitionScope).property_q4pla5_k$ = function (properties) {
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(properties);
    return this.property_7ekuz_k$(tmp$ret$0.slice());
  };
  protoOf(TransitionScope).duration_ato5e_k$ = function (durations) {
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(durations);
    return this.duration_30w21k_k$(tmp$ret$0.slice());
  };
  protoOf(TransitionScope).timingFunction_ylsdyo_k$ = function (timingFunctions) {
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(timingFunctions);
    return this.timingFunction_28o80i_k$(tmp$ret$0.slice());
  };
  protoOf(TransitionScope).delay_u90rzn_k$ = function (delays) {
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(delays);
    return this.delay_81jtuf_k$(tmp$ret$0.slice());
  };
  protoOf(TransitionScope).behavior_2tr60u_k$ = function (behaviors) {
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(behaviors);
    return this.behavior_6wo3wk_k$(tmp$ret$0.slice());
  };
  function transition_1(_this__u8e3s4, scope) {
    return styleModifier(_this__u8e3s4, transition$lambda_0(scope));
  }
  function transition_2(_this__u8e3s4, transitions) {
    return styleModifier(_this__u8e3s4, transition$lambda_1(transitions));
  }
  function transition$lambda($transition) {
    return function ($this$styleModifier) {
      transition($this$styleModifier, $transition);
      return Unit_getInstance();
    };
  }
  function transition$lambda_0($scope) {
    return function ($this$styleModifier) {
      var tmp0 = new TransitionScope($this$styleModifier);
      // Inline function 'kotlin.apply' call
      $scope(tmp0);
      return Unit_getInstance();
    };
  }
  function transition$lambda_1($transitions) {
    return function ($this$styleModifier) {
      transition($this$styleModifier, Companion_getInstance_15().list_jeggvm_k$($transitions.slice()));
      return Unit_getInstance();
    };
  }
  function setVariable_1(_this__u8e3s4, variable, value) {
    var tmp;
    if (!(value == null)) {
      tmp = styleModifier(_this__u8e3s4, setVariable$lambda(variable, value));
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function setVariable_2(_this__u8e3s4, variable, value) {
    var tmp;
    if (!(value == null)) {
      tmp = styleModifier(_this__u8e3s4, setVariable$lambda_0(variable, value));
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function setVariable$lambda($variable, $value) {
    return function ($this$styleModifier) {
      setVariable($this$styleModifier, $variable, $value);
      return Unit_getInstance();
    };
  }
  function setVariable$lambda_0($variable, $value) {
    return function ($this$styleModifier) {
      setVariable_0($this$styleModifier, $variable, $value);
      return Unit_getInstance();
    };
  }
  //region block: post-declaration
  protoOf(BoxScopeInstance).align_s6rwef_k$ = align;
  protoOf(ColumnScopeInstance).align_45bqjp_k$ = align_0;
  protoOf(ColumnScopeInstance).weight_stvlsa_k$ = weight;
  protoOf(RowScopeInstance).align_kdfg3t_k$ = align_1;
  protoOf(RowScopeInstance).weight_stvlsa_k$ = weight;
  protoOf(ChainedModifier).then_mmfvo6_k$ = then;
  protoOf(StyleModifier).fold_esqsf3_k$ = fold;
  protoOf(StyleModifier).then_mmfvo6_k$ = then;
  protoOf(AttrsModifier).fold_esqsf3_k$ = fold;
  protoOf(AttrsModifier).then_mmfvo6_k$ = then;
  protoOf(RawRgb).darkened$default_kpriub_k$ = darkened$default;
  protoOf(RawRgb).copy$default_mtju0j_k$ = copy$default;
  protoOf(RawRgb).copyf$default_6pu18v_k$ = copyf$default;
  protoOf(NamedRgb_0).copy$default_mtju0j_k$ = copy$default;
  protoOf(NamedRgb_0).copyf$default_6pu18v_k$ = copyf$default;
  protoOf(NamedRgb_0).darkened$default_kpriub_k$ = darkened$default;
  protoOf(Hsl).darkened$default_kpriub_k$ = darkened$default;
  //endregion
  //region block: init
  com_varabyte_kobweb_compose_foundation_layout_Arrangement_End$stable = 0;
  com_varabyte_kobweb_compose_foundation_layout_Arrangement_Start$stable = 0;
  com_varabyte_kobweb_compose_foundation_layout_Arrangement_Top$stable = 0;
  com_varabyte_kobweb_compose_foundation_layout_Arrangement_Bottom$stable = 0;
  com_varabyte_kobweb_compose_foundation_layout_Arrangement_Center$stable = 0;
  com_varabyte_kobweb_compose_foundation_layout_Arrangement_SpaceEvenly$stable = 0;
  com_varabyte_kobweb_compose_foundation_layout_Arrangement_SpaceBetween$stable = 0;
  com_varabyte_kobweb_compose_foundation_layout_Arrangement_SpaceAround$stable = 0;
  com_varabyte_kobweb_compose_foundation_layout_Arrangement_FromStyle$stable = 0;
  com_varabyte_kobweb_compose_foundation_layout_Arrangement$stable = 0;
  com_varabyte_kobweb_compose_foundation_layout_SpacedAligned_HorizontalOrVertical$stable = 8;
  com_varabyte_kobweb_compose_foundation_layout_SpacedAligned_Vertical$stable = 8;
  com_varabyte_kobweb_compose_foundation_layout_SpacedAligned_Horizontal$stable = 8;
  com_varabyte_kobweb_compose_foundation_layout_SpacedAligned$stable = 8;
  com_varabyte_kobweb_compose_foundation_layout_BoxScopeInstance$stable = 0;
  com_varabyte_kobweb_compose_foundation_layout_BoxDefaults$stable = 8;
  com_varabyte_kobweb_compose_foundation_layout_ColumnScopeInstance$stable = 0;
  com_varabyte_kobweb_compose_foundation_layout_ColumnDefaults$stable = 0;
  com_varabyte_kobweb_compose_foundation_layout_RowScopeInstance$stable = 0;
  com_varabyte_kobweb_compose_foundation_layout_RowDefaults$stable = 0;
  com_varabyte_kobweb_compose_ui_Alignment_TopStart$stable = 0;
  com_varabyte_kobweb_compose_ui_Alignment_TopCenter$stable = 0;
  com_varabyte_kobweb_compose_ui_Alignment_TopEnd$stable = 0;
  com_varabyte_kobweb_compose_ui_Alignment_CenterStart$stable = 0;
  com_varabyte_kobweb_compose_ui_Alignment_Center$stable = 0;
  com_varabyte_kobweb_compose_ui_Alignment_CenterEnd$stable = 0;
  com_varabyte_kobweb_compose_ui_Alignment_BottomStart$stable = 0;
  com_varabyte_kobweb_compose_ui_Alignment_BottomCenter$stable = 0;
  com_varabyte_kobweb_compose_ui_Alignment_BottomEnd$stable = 0;
  com_varabyte_kobweb_compose_ui_Alignment_Top$stable = 0;
  com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stable = 0;
  com_varabyte_kobweb_compose_ui_Alignment_Bottom$stable = 0;
  com_varabyte_kobweb_compose_ui_Alignment_Start$stable = 0;
  com_varabyte_kobweb_compose_ui_Alignment_CenterHorizontally$stable = 0;
  com_varabyte_kobweb_compose_ui_Alignment_End$stable = 0;
  com_varabyte_kobweb_compose_ui_Alignment_FromStyle$stable = 0;
  com_varabyte_kobweb_compose_ui_AttrsModifier$stable = 0;
  com_varabyte_kobweb_compose_ui_StyleModifier$stable = 0;
  com_varabyte_kobweb_compose_ui_graphics_Color_RawRgb$stable = 0;
  com_varabyte_kobweb_compose_ui_graphics_Color_NamedRgb$stable = 0;
  com_varabyte_kobweb_compose_ui_graphics_Color_Hsl$stable = 0;
  com_varabyte_kobweb_compose_ui_graphics_Colors$stable = 0;
  com_varabyte_kobweb_compose_ui_modifiers_BackgroundPositionScope$stable = 8;
  com_varabyte_kobweb_compose_ui_modifiers_BackgroundScope$stable = 8;
  com_varabyte_kobweb_compose_ui_modifiers_BorderScope$stable = 8;
  com_varabyte_kobweb_compose_ui_modifiers_BorderSideScope$stable = 8;
  com_varabyte_kobweb_compose_ui_modifiers_BorderRadiusScope$stable = 8;
  com_varabyte_kobweb_compose_ui_modifiers_BorderImageScope$stable = 8;
  com_varabyte_kobweb_compose_ui_modifiers_ColumnRuleScope$stable = 8;
  com_varabyte_kobweb_compose_ui_modifiers_FontScope$stable = 8;
  com_varabyte_kobweb_compose_ui_modifiers_FontVariantScope$stable = 8;
  com_varabyte_kobweb_compose_ui_modifiers_MarginScope$stable = 8;
  com_varabyte_kobweb_compose_ui_modifiers_MarginInlineScope$stable = 8;
  com_varabyte_kobweb_compose_ui_modifiers_MarginBlockScope$stable = 8;
  com_varabyte_kobweb_compose_ui_modifiers_PaddingScope$stable = 8;
  com_varabyte_kobweb_compose_ui_modifiers_PaddingInlineScope$stable = 8;
  com_varabyte_kobweb_compose_ui_modifiers_PaddingBlockScope$stable = 8;
  com_varabyte_kobweb_compose_ui_modifiers_OutlineScope$stable = 8;
  com_varabyte_kobweb_compose_ui_modifiers_OverflowScope$stable = 8;
  com_varabyte_kobweb_compose_ui_modifiers_OverscrollBehaviorScope$stable = 8;
  com_varabyte_kobweb_compose_ui_modifiers_TransitionScope$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Box;
  _.$_$.b = Column;
  _.$_$.c = Row;
  _.$_$.d = com_varabyte_kobweb_compose_foundation_layout_Arrangement_Center$stableprop_getter;
  _.$_$.e = com_varabyte_kobweb_compose_foundation_layout_Arrangement_Top$stableprop_getter;
  _.$_$.f = rowClasses;
  _.$_$.g = get_isBright;
  _.$_$.h = lightened;
  _.$_$.i = alignItems_1;
  _.$_$.j = appearance_0;
  _.$_$.k = ariaDisabled_0;
  _.$_$.l = ariaHidden_0;
  _.$_$.m = backgroundColor_1;
  _.$_$.n = backgroundImage_2;
  _.$_$.o = background_0;
  _.$_$.p = borderBottom_0;
  _.$_$.q = borderLeft_0;
  _.$_$.r = borderRadius_0;
  _.$_$.s = borderTop_0;
  _.$_$.t = border_0;
  _.$_$.u = border_1;
  _.$_$.v = bottom_0;
  _.$_$.w = boxShadow_1;
  _.$_$.x = boxShadow_0;
  _.$_$.y = boxSizing_0;
  _.$_$.z = classNames;
  _.$_$.a1 = colorScheme_0;
  _.$_$.b1 = color_0;
  _.$_$.c1 = cursor_0;
  _.$_$.d1 = display_0;
  _.$_$.e1 = fillMaxHeight;
  _.$_$.f1 = fillMaxSize;
  _.$_$.g1 = fillMaxWidth;
  _.$_$.h1 = flexGrow_0;
  _.$_$.i1 = fontFamily_0;
  _.$_$.j1 = fontSize_0;
  _.$_$.k1 = fontWeight_0;
  _.$_$.l1 = gap_0;
  _.$_$.m1 = gridTemplateColumns_0;
  _.$_$.n1 = height_0;
  _.$_$.o1 = left_0;
  _.$_$.p1 = lineHeight_0;
  _.$_$.q1 = listStyle_0;
  _.$_$.r1 = marginBlock_0;
  _.$_$.s1 = marginBlock_1;
  _.$_$.t1 = margin_0;
  _.$_$.u1 = margin_3;
  _.$_$.v1 = margin_1;
  _.$_$.w1 = margin_2;
  _.$_$.x1 = minHeight_0;
  _.$_$.y1 = minWidth_0;
  _.$_$.z1 = objectFit_0;
  _.$_$.a2 = onClick;
  _.$_$.b2 = opacity_2;
  _.$_$.c2 = opacity_1;
  _.$_$.d2 = outline_0;
  _.$_$.e2 = overflow_0;
  _.$_$.f2 = overflow_1;
  _.$_$.g2 = paddingInline_0;
  _.$_$.h2 = padding_0;
  _.$_$.i2 = padding_1;
  _.$_$.j2 = position_0;
  _.$_$.k2 = right_0;
  _.$_$.l2 = rotate_0;
  _.$_$.m2 = setVariable_1;
  _.$_$.n2 = setVariable_2;
  _.$_$.o2 = size;
  _.$_$.p2 = tabIndex;
  _.$_$.q2 = textAlign_0;
  _.$_$.r2 = textDecorationLine_0;
  _.$_$.s2 = top_0;
  _.$_$.t2 = transition_1;
  _.$_$.u2 = transition_2;
  _.$_$.v2 = transition_0;
  _.$_$.w2 = translateX_0;
  _.$_$.x2 = userSelect_0;
  _.$_$.y2 = verticalAlign_0;
  _.$_$.z2 = whiteSpace_0;
  _.$_$.a3 = width_0;
  _.$_$.b3 = zIndex_0;
  _.$_$.c3 = com_varabyte_kobweb_compose_ui_Alignment_Center$stableprop_getter;
  _.$_$.d3 = com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stableprop_getter;
  _.$_$.e3 = com_varabyte_kobweb_compose_ui_Alignment_End$stableprop_getter;
  _.$_$.f3 = styleModifier;
  _.$_$.g3 = thenIf_0;
  _.$_$.h3 = toAttrs;
  _.$_$.i3 = toStyles;
  _.$_$.j3 = KobwebComposeStyles;
  _.$_$.k3 = Center_getInstance;
  _.$_$.l3 = Start_getInstance;
  _.$_$.m3 = Top_getInstance;
  _.$_$.n3 = Companion_getInstance_17;
  _.$_$.o3 = Colors_getInstance;
  _.$_$.p3 = CenterHorizontally_getInstance;
  _.$_$.q3 = CenterVertically_getInstance;
  _.$_$.r3 = Center_getInstance_0;
  _.$_$.s3 = End_getInstance_0;
  _.$_$.t3 = Start_getInstance_0;
  _.$_$.u3 = Companion_getInstance_16;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-kobweb-compose.js.map
