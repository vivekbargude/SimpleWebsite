(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './html-html-core.js', './compose-multiplatform-core-compose-runtime-runtime.js', './kobweb-frontend-compose-html-ext.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./html-html-core.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kobweb-frontend-compose-html-ext.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-compose'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-kobweb-compose'.");
    }
    if (typeof globalThis['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-compose'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-kobweb-compose'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-compose'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-kobweb-compose'.");
    }
    if (typeof globalThis['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-compose'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-kobweb-compose'.");
    }
    globalThis['kobweb-frontend-kobweb-compose'] = factory(typeof globalThis['kobweb-frontend-kobweb-compose'] === 'undefined' ? {} : globalThis['kobweb-frontend-kobweb-compose'], globalThis['kotlin-kotlin-stdlib'], globalThis['html-html-core'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['kobweb-frontend-compose-html-ext']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_html_html_core, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_com_varabyte_kobweb_compose_html_ext) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.c2;
  var org_jetbrains_compose_web_css_StyleSheet$stableprop_getter = kotlin_org_jetbrains_compose_html_html_core.$_$.t2;
  var Style = kotlin_org_jetbrains_compose_html_html_core.$_$.m3;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var protoOf = kotlin_kotlin.$_$.h7;
  var initMetadataForInterface = kotlin_kotlin.$_$.u6;
  var initMetadataForObject = kotlin_kotlin.$_$.w6;
  var VOID = kotlin_kotlin.$_$.e;
  var initMetadataForClass = kotlin_kotlin.$_$.r6;
  var rememberComposableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var THROW_CCE = kotlin_kotlin.$_$.v9;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var Div = kotlin_org_jetbrains_compose_html_html_core.$_$.i3;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m2;
  var registerRefScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o2;
  var ensureNotNull = kotlin_kotlin.$_$.ca;
  var arrayConcat = kotlin_kotlin.$_$.a;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ea;
  var equals = kotlin_kotlin.$_$.l6;
  var KProperty0 = kotlin_kotlin.$_$.s7;
  var getPropertyCallableRef = kotlin_kotlin.$_$.o6;
  var isInterface = kotlin_kotlin.$_$.z6;
  var columnGap = kotlin_org_jetbrains_compose_html_html_core.$_$.r1;
  var rowGap = kotlin_org_jetbrains_compose_html_html_core.$_$.z2;
  var StyleVariable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h;
  var grid = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d1;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.x2;
  var get_fr = kotlin_org_jetbrains_compose_html_html_core.$_$.a2;
  var gridArea = kotlin_org_jetbrains_compose_html_html_core.$_$.c2;
  var Companion_instance = kotlin_org_jetbrains_compose_html_html_core.$_$.d;
  var alignItems = kotlin_org_jetbrains_compose_html_html_core.$_$.h1;
  var Companion_instance_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f3;
  var justifyItems = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g1;
  var Companion_instance_1 = kotlin_org_jetbrains_compose_html_html_core.$_$.e;
  var alignSelf = kotlin_org_jetbrains_compose_html_html_core.$_$.i1;
  var Companion_instance_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g3;
  var justifySelf = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h1;
  var Companion_instance_3 = kotlin_org_jetbrains_compose_html_html_core.$_$.j;
  var display = kotlin_org_jetbrains_compose_html_html_core.$_$.u1;
  var Companion_instance_4 = kotlin_org_jetbrains_compose_html_html_core.$_$.k;
  var flexDirection = kotlin_org_jetbrains_compose_html_html_core.$_$.w1;
  var Companion_instance_5 = kotlin_org_jetbrains_compose_html_html_core.$_$.l;
  var justifyContent = kotlin_org_jetbrains_compose_html_html_core.$_$.i2;
  var flexGrow = kotlin_org_jetbrains_compose_html_html_core.$_$.x1;
  var StyleSheet = kotlin_org_jetbrains_compose_html_html_core.$_$.g1;
  var StyleSheet_init_$Init$ = kotlin_org_jetbrains_compose_html_html_core.$_$.b;
  var layer = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i1;
  var initMetadataForCompanion = kotlin_kotlin.$_$.s6;
  var hashCode = kotlin_kotlin.$_$.q6;
  var ComparableStyleScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d;
  var ComparableAttrsScope_init_$Create$ = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.v2;
  var objectCreate = kotlin_kotlin.$_$.g7;
  var toString = kotlin_kotlin.$_$.j7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var getStringHashCode = kotlin_kotlin.$_$.p6;
  var roundToInt = kotlin_kotlin.$_$.k7;
  var coerceIn = kotlin_kotlin.$_$.n7;
  var numberToInt = kotlin_kotlin.$_$.f7;
  var ariaHidden = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m;
  var ariaDisabled = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l;
  var alignItems_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j;
  var backgroundColor = kotlin_org_jetbrains_compose_html_html_core.$_$.j1;
  var backgroundImage = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.n;
  var Companion_instance_6 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.y2;
  var background = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o;
  var borderColor = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.q;
  var borderColor_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.r;
  var borderStyle = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.t;
  var borderWidth = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.v;
  var borderBottom = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p;
  var borderLeft = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.s;
  var borderRadius = kotlin_org_jetbrains_compose_html_html_core.$_$.l1;
  var border = kotlin_org_jetbrains_compose_html_html_core.$_$.m1;
  var borderTop = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.u;
  var Companion_instance_7 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.z2;
  var boxShadow = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.w;
  var boxSizing = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.x;
  var color = kotlin_org_jetbrains_compose_html_html_core.$_$.q1;
  var opacity = kotlin_org_jetbrains_compose_html_html_core.$_$.r2;
  var colorScheme = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.y;
  var opacity_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.s2;
  var appearance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k;
  var gap = kotlin_org_jetbrains_compose_html_html_core.$_$.b2;
  var fontSize = kotlin_org_jetbrains_compose_html_html_core.$_$.z1;
  var fontWeight = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b1;
  var fontFamily = kotlin_org_jetbrains_compose_html_html_core.$_$.y1;
  var gridTemplateColumns = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c1;
  var userSelect = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d2;
  var cursor = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a1;
  var marginBottom = kotlin_org_jetbrains_compose_html_html_core.$_$.l2;
  var marginBlockStart = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l1;
  var marginBlockEnd = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k1;
  var margin = kotlin_org_jetbrains_compose_html_html_core.$_$.m2;
  var padding = kotlin_org_jetbrains_compose_html_html_core.$_$.u2;
  var marginBlock = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m1;
  var lineHeight = kotlin_org_jetbrains_compose_html_html_core.$_$.k2;
  var verticalAlign = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e2;
  var paddingInline = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.r1;
  var zIndex = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g2;
  var Companion_instance_8 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h3;
  var listStyle = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j1;
  var objectFit = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.n1;
  var Companion_instance_9 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k3;
  var Companion_instance_10 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l3;
  var outline = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o1;
  var overflowY = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p1;
  var overflow = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.q1;
  var position = kotlin_org_jetbrains_compose_html_html_core.$_$.w2;
  var top = kotlin_org_jetbrains_compose_html_html_core.$_$.b3;
  var left = kotlin_org_jetbrains_compose_html_html_core.$_$.j2;
  var right = kotlin_org_jetbrains_compose_html_html_core.$_$.y2;
  var bottom = kotlin_org_jetbrains_compose_html_html_core.$_$.n1;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.v2;
  var width = kotlin_org_jetbrains_compose_html_html_core.$_$.e3;
  var minWidth = kotlin_org_jetbrains_compose_html_html_core.$_$.p2;
  var height = kotlin_org_jetbrains_compose_html_html_core.$_$.h2;
  var minHeight = kotlin_org_jetbrains_compose_html_html_core.$_$.o2;
  var textAlign = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.w1;
  var whiteSpace = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f2;
  var textDecorationLine = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.x1;
  var translateX = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c2;
  var rotate = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.s1;
  var transitionProperty = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.z1;
  var transitionDuration = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.y1;
  var transitionTimingFunction = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a2;
  var transition = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b2;
  var Companion_instance_11 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p3;
  var setVariable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.u1;
  var setVariable_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.v1;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(HorizontalOrVertical, 'HorizontalOrVertical');
  initMetadataForObject(End, 'End');
  initMetadataForObject(Start, 'Start');
  initMetadataForObject(Top, 'Top');
  initMetadataForObject(Bottom, 'Bottom');
  initMetadataForObject(Center, 'Center', VOID, VOID, [HorizontalOrVertical]);
  initMetadataForObject(SpaceEvenly, 'SpaceEvenly', VOID, VOID, [HorizontalOrVertical]);
  initMetadataForObject(SpaceBetween, 'SpaceBetween', VOID, VOID, [HorizontalOrVertical]);
  initMetadataForObject(SpaceAround, 'SpaceAround', VOID, VOID, [HorizontalOrVertical]);
  initMetadataForObject(FromStyle, 'FromStyle', VOID, VOID, [HorizontalOrVertical]);
  initMetadataForClass(SpacedAligned, 'SpacedAligned', VOID, VOID, [HorizontalOrVertical]);
  initMetadataForClass(Vertical, 'Vertical', VOID, SpacedAligned);
  initMetadataForClass(Horizontal, 'Horizontal', VOID, SpacedAligned);
  initMetadataForObject(ComposableSingletons$BoxKt, 'ComposableSingletons$BoxKt');
  initMetadataForObject(BoxScopeInstance, 'BoxScopeInstance');
  initMetadataForObject(BoxDefaults, 'BoxDefaults');
  function align(_this__u8e3s4, alignment) {
    return attrsModifier(_this__u8e3s4, ColumnScope$align$lambda(alignment));
  }
  initMetadataForInterface(ColumnScope, 'ColumnScope');
  initMetadataForObject(ColumnDefaults, 'ColumnDefaults');
  initMetadataForObject(ColumnScopeInstance, 'ColumnScopeInstance', VOID, VOID, [ColumnScope]);
  initMetadataForObject(RowDefaults, 'RowDefaults');
  initMetadataForObject(RowScopeInstance, 'RowScopeInstance');
  initMetadataForObject(KobwebComposeStyleSheet, 'KobwebComposeStyleSheet', VOID, StyleSheet);
  initMetadataForObject(TopStart, 'TopStart');
  initMetadataForObject(TopCenter, 'TopCenter');
  initMetadataForObject(TopEnd, 'TopEnd');
  initMetadataForObject(CenterStart, 'CenterStart');
  initMetadataForObject(Center_0, 'Center');
  initMetadataForObject(CenterEnd, 'CenterEnd');
  initMetadataForObject(BottomStart, 'BottomStart');
  initMetadataForObject(BottomCenter, 'BottomCenter');
  initMetadataForObject(BottomEnd, 'BottomEnd');
  initMetadataForObject(Top_0, 'Top');
  initMetadataForObject(CenterVertically, 'CenterVertically');
  initMetadataForObject(Bottom_0, 'Bottom');
  initMetadataForObject(Start_0, 'Start');
  initMetadataForObject(CenterHorizontally, 'CenterHorizontally');
  initMetadataForObject(End_0, 'End');
  initMetadataForObject(FromStyle_0, 'FromStyle');
  function then(other) {
    return other === Companion_instance_12 ? this : new ChainedModifier(this, other);
  }
  initMetadataForInterface(Modifier, 'Modifier');
  function fold(initial, operation) {
    return operation(initial, this);
  }
  initMetadataForInterface(Element, 'Element', VOID, VOID, [Modifier]);
  initMetadataForCompanion(Companion, VOID, [Modifier]);
  initMetadataForClass(ChainedModifier, 'ChainedModifier', VOID, VOID, [Modifier]);
  initMetadataForClass(StyleModifier, 'StyleModifier', VOID, VOID, [Element]);
  initMetadataForClass(AttrsModifier, 'AttrsModifier', VOID, VOID, [Element]);
  function copy$default(red, green, blue, alpha, $super) {
    red = red === VOID ? this.t30() : red;
    green = green === VOID ? this.u30() : green;
    blue = blue === VOID ? this.v30() : blue;
    alpha = alpha === VOID ? this.w30() : alpha;
    return $super === VOID ? this.b31(red, green, blue, alpha) : $super.b31.call(this, red, green, blue, alpha);
  }
  function copyf$default(red, green, blue, alpha, $super) {
    red = red === VOID ? this.x30() : red;
    green = green === VOID ? this.y30() : green;
    blue = blue === VOID ? this.z30() : blue;
    alpha = alpha === VOID ? this.a31() : alpha;
    return $super === VOID ? this.d31(red, green, blue, alpha) : $super.d31.call(this, red, green, blue, alpha);
  }
  initMetadataForInterface(Rgb, 'Rgb');
  initMetadataForClass(RawRgb, 'RawRgb', VOID, VOID, [Rgb]);
  initMetadataForClass(NamedRgb, 'NamedRgb', VOID, VOID, [Rgb]);
  initMetadataForCompanion(Companion_0);
  initMetadataForObject(Colors, 'Colors');
  initMetadataForClass(BackgroundScope, 'BackgroundScope');
  initMetadataForClass(BorderScope, 'BorderScope');
  initMetadataForClass(MarginScope, 'MarginScope');
  initMetadataForClass(MarginBlockScope, 'MarginBlockScope');
  initMetadataForClass(OverflowScope, 'OverflowScope');
  initMetadataForClass(TransitionScope, 'TransitionScope');
  //endregion
  function KobwebComposeStyles($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.y1i(-292028647);
    if ($composer_0.r1i(!($changed === 0), $changed & 1)) {
      var tmp0 = KobwebComposeStyleSheet_getInstance();
      var tmp2 = $composer_0;
      // Inline function 'org.jetbrains.compose.web.css.Style' call
      org_jetbrains_compose_web_css_StyleSheet$stableprop_getter();
      var $composer_1 = tmp2;
      $composer_1.p1g(-1196466140);
      Style(null, tmp0.n2m(), $composer_1, 0, 1);
      $composer_1.r1g();
    } else {
      $composer_0.w19();
    }
    var tmp0_safe_receiver = $composer_0.z1i();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d1o(KobwebComposeStyles$lambda($changed));
    }
  }
  function KobwebComposeStyles$lambda($$changed) {
    return function ($composer, $force) {
      KobwebComposeStyles($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
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
  function HorizontalOrVertical() {
  }
  function End() {
  }
  var End_instance;
  function End_getInstance() {
    return End_instance;
  }
  function Start() {
  }
  var Start_instance;
  function Start_getInstance() {
    return Start_instance;
  }
  function Top() {
  }
  var Top_instance;
  function Top_getInstance() {
    return Top_instance;
  }
  function Bottom() {
  }
  var Bottom_instance;
  function Bottom_getInstance() {
    return Bottom_instance;
  }
  function Center() {
  }
  var Center_instance;
  function Center_getInstance() {
    return Center_instance;
  }
  function SpaceEvenly() {
  }
  var SpaceEvenly_instance;
  function SpaceEvenly_getInstance() {
    return SpaceEvenly_instance;
  }
  function SpaceBetween() {
  }
  var SpaceBetween_instance;
  function SpaceBetween_getInstance() {
    return SpaceBetween_instance;
  }
  function SpaceAround() {
  }
  var SpaceAround_instance;
  function SpaceAround_getInstance() {
    return SpaceAround_instance;
  }
  function FromStyle() {
  }
  var FromStyle_instance;
  function FromStyle_getInstance() {
    return FromStyle_instance;
  }
  function com_varabyte_kobweb_compose_foundation_layout_Arrangement_Center$stableprop_getter() {
    return com_varabyte_kobweb_compose_foundation_layout_Arrangement_Center$stable;
  }
  function com_varabyte_kobweb_compose_foundation_layout_Arrangement_Top$stableprop_getter() {
    return com_varabyte_kobweb_compose_foundation_layout_Arrangement_Top$stable;
  }
  function Vertical() {
  }
  function Horizontal() {
  }
  function SpacedAligned() {
  }
  var com_varabyte_kobweb_compose_foundation_layout_BoxScopeInstance$stable;
  var com_varabyte_kobweb_compose_foundation_layout_BoxDefaults$stable;
  function Box(modifier, contentAlignment, ref, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var contentAlignment_0 = {_v: contentAlignment};
    var ref_0 = {_v: ref};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.y1i(-633554927);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.z16(modifier_0._v) : $composer_0.m1h(modifier_0._v)) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ((($changed & 64) === 0 ? $composer_0.z16(contentAlignment_0._v) : $composer_0.m1h(contentAlignment_0._v)) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ((($changed & 512) === 0 ? $composer_0.z16(ref_0._v) : $composer_0.m1h(ref_0._v)) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.m1h(content_0._v) ? 2048 : 1024);
    if ($composer_0.r1i(!(($dirty & 1171) === 1170), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance_12;
      }
      if (!(($default & 2) === 0)) {
        contentAlignment_0._v = TopStart_instance;
      }
      if (!(($default & 4) === 0)) {
        ref_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        content_0._v = ComposableSingletons$BoxKt_getInstance().x2z_1;
      }
      var tmp = toAttrs(boxClasses(modifier_0._v, contentAlignment_0._v));
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(1660882128, true, Box$lambda(ref_0, content_0), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.z16(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.y1h();
      var tmp_0;
      if (invalid || it === Companion_getInstance().f1a_1) {
        var value = ComposableLambda$invoke$ref_0(dispatchReceiver);
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
      tmp0_safe_receiver.d1o(Box$lambda_0(modifier_0, contentAlignment_0, ref_0, content_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.q2a(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$BoxKt$lambda$1700712661$lambda(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    if (!$composer_0.r1i(!(($changed & 17) === 16), $changed & 1)) {
      $composer_0.w19();
    }
    return Unit_instance;
  }
  function ComposableSingletons$BoxKt() {
    ComposableSingletons$BoxKt_instance = this;
    var tmp = this;
    tmp.x2z_1 = ComposableLambda$invoke$ref(composableLambdaInstance(1700712661, false, ComposableSingletons$BoxKt$lambda$1700712661$lambda));
  }
  var ComposableSingletons$BoxKt_instance;
  function ComposableSingletons$BoxKt_getInstance() {
    if (ComposableSingletons$BoxKt_instance == null)
      new ComposableSingletons$BoxKt();
    return ComposableSingletons$BoxKt_instance;
  }
  function boxClasses(_this__u8e3s4, contentAlignment) {
    contentAlignment = contentAlignment === VOID ? BoxDefaults_getInstance().y2z_1 : contentAlignment;
    return classNames(_this__u8e3s4, ['kobweb-box', toClassName_0(contentAlignment)]);
  }
  function BoxScopeInstance() {
  }
  var BoxScopeInstance_instance;
  function BoxScopeInstance_getInstance() {
    return BoxScopeInstance_instance;
  }
  function BoxDefaults() {
    BoxDefaults_instance = this;
    this.y2z_1 = TopStart_instance;
  }
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
      $content._v(BoxScopeInstance_instance, $composer_0, 6);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_0(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.q2a(_this__u8e3s4, p0_0, p1);
    };
  }
  function Box$lambda_0($modifier, $contentAlignment, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Box($modifier._v, $contentAlignment._v, $ref._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var com_varabyte_kobweb_compose_foundation_layout_ColumnScopeInstance$stable;
  var com_varabyte_kobweb_compose_foundation_layout_ColumnDefaults$stable;
  function Column(modifier, verticalArrangement, horizontalAlignment, ref, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var verticalArrangement_0 = {_v: verticalArrangement};
    var horizontalAlignment_0 = {_v: horizontalAlignment};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.y1i(-523411892);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.z16(modifier_0._v) : $composer_0.m1h(modifier_0._v)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | (($default & 2) === 0 && (($changed & 64) === 0 ? $composer_0.z16(verticalArrangement_0._v) : $composer_0.m1h(verticalArrangement_0._v)) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | (($default & 4) === 0 && (($changed & 512) === 0 ? $composer_0.z16(horizontalAlignment_0._v) : $composer_0.m1h(horizontalAlignment_0._v)) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ((($changed & 4096) === 0 ? $composer_0.z16(ref_0._v) : $composer_0.m1h(ref_0._v)) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.m1h(content) ? 16384 : 8192);
    if ($composer_0.r1i(!(($dirty & 9363) === 9362), $dirty & 1)) {
      $composer_0.s1g();
      if (($changed & 1) === 0 || $composer_0.w1g()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_instance_12;
        }
        if (!(($default & 2) === 0)) {
          verticalArrangement_0._v = ColumnDefaults_getInstance().z2z_1;
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
          horizontalAlignment_0._v = ColumnDefaults_getInstance().a30_1;
          $dirty = $dirty & -897;
        }
        if (!(($default & 8) === 0)) {
          ref_0._v = null;
        }
      } else {
        $composer_0.w19();
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.t1g();
      var tmp0 = columnClasses(modifier_0._v, verticalArrangement_0._v, horizontalAlignment_0._v);
      var tmp = verticalArrangement_0._v;
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIfNotNull' call
      var value = tmp instanceof SpacedAligned ? tmp : null;
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
      var tmp_0;
      if (!(value == null)) {
        var it = ensureNotNull(value);
        tmp_0 = setVariable_1(Companion_instance_12, get_ArrangeSpacedByVar(), it.b30_1);
      } else {
        tmp_0 = Companion_instance_12;
      }
      var tmp$ret$3 = tmp0.c30(tmp_0);
      var tmp_1 = toAttrs(tmp$ret$3);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-1859889909, true, Column$lambda(ref_0, content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.z16(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.y1h();
      var tmp_2;
      if (invalid || it_0 === Companion_getInstance().f1a_1) {
        var value_0 = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.j1i(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp_1, tmp0_0, $composer_0, 48, 0);
    } else {
      $composer_0.w19();
    }
    var tmp0_safe_receiver = $composer_0.z1i();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d1o(Column$lambda_0(modifier_0, verticalArrangement_0, horizontalAlignment_0, ref_0, content, $changed, $default));
    }
  }
  function ColumnScope$align$lambda($alignment) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.i2k([toClassName_1($alignment) + '-self']);
      return Unit_instance;
    };
  }
  function ColumnScope() {
  }
  function ColumnDefaults() {
    ColumnDefaults_instance = this;
    this.z2z_1 = Top_instance;
    this.a30_1 = Start_instance_0;
  }
  var ColumnDefaults_instance;
  function ColumnDefaults_getInstance() {
    if (ColumnDefaults_instance == null)
      new ColumnDefaults();
    return ColumnDefaults_instance;
  }
  function columnClasses(_this__u8e3s4, verticalArrangement, horizontalAlignment) {
    verticalArrangement = verticalArrangement === VOID ? ColumnDefaults_getInstance().z2z_1 : verticalArrangement;
    horizontalAlignment = horizontalAlignment === VOID ? ColumnDefaults_getInstance().a30_1 : horizontalAlignment;
    return classNames(_this__u8e3s4, arrayConcat([['kobweb-col'], toClassNames_0(verticalArrangement), [toClassName_1(horizontalAlignment)]]));
  }
  function ColumnScopeInstance() {
  }
  var ColumnScopeInstance_instance;
  function ColumnScopeInstance_getInstance() {
    return ColumnScopeInstance_instance;
  }
  function Column$lambda($ref, $content) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      registerRefScope($this$Div, $ref._v, $composer_0, 14 & $changed | com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter() << 3);
      $content(ColumnScopeInstance_instance, $composer_0, 6);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_1(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.q2a(_this__u8e3s4, p0_0, p1);
    };
  }
  function Column$lambda_0($modifier, $verticalArrangement, $horizontalAlignment, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Column($modifier._v, $verticalArrangement._v, $horizontalAlignment._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var com_varabyte_kobweb_compose_foundation_layout_RowScopeInstance$stable;
  var com_varabyte_kobweb_compose_foundation_layout_RowDefaults$stable;
  function rowClasses(_this__u8e3s4, horizontalArrangement, verticalAlignment) {
    horizontalArrangement = horizontalArrangement === VOID ? RowDefaults_getInstance().e30_1 : horizontalArrangement;
    verticalAlignment = verticalAlignment === VOID ? RowDefaults_getInstance().f30_1 : verticalAlignment;
    return classNames(_this__u8e3s4, arrayConcat([['kobweb-row'], toClassNames(horizontalArrangement), [toClassName(verticalAlignment)]]));
  }
  function Row(modifier, horizontalArrangement, verticalAlignment, ref, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var horizontalArrangement_0 = {_v: horizontalArrangement};
    var verticalAlignment_0 = {_v: verticalAlignment};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.y1i(-99741930);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.z16(modifier_0._v) : $composer_0.m1h(modifier_0._v)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | (($default & 2) === 0 && (($changed & 64) === 0 ? $composer_0.z16(horizontalArrangement_0._v) : $composer_0.m1h(horizontalArrangement_0._v)) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | (($default & 4) === 0 && (($changed & 512) === 0 ? $composer_0.z16(verticalAlignment_0._v) : $composer_0.m1h(verticalAlignment_0._v)) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ((($changed & 4096) === 0 ? $composer_0.z16(ref_0._v) : $composer_0.m1h(ref_0._v)) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.m1h(content) ? 16384 : 8192);
    if ($composer_0.r1i(!(($dirty & 9363) === 9362), $dirty & 1)) {
      $composer_0.s1g();
      if (($changed & 1) === 0 || $composer_0.w1g()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_instance_12;
        }
        if (!(($default & 2) === 0)) {
          horizontalArrangement_0._v = RowDefaults_getInstance().e30_1;
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
          verticalAlignment_0._v = RowDefaults_getInstance().f30_1;
          $dirty = $dirty & -897;
        }
        if (!(($default & 8) === 0)) {
          ref_0._v = null;
        }
      } else {
        $composer_0.w19();
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.t1g();
      var tmp0 = rowClasses(modifier_0._v, horizontalArrangement_0._v, verticalAlignment_0._v);
      var tmp = horizontalArrangement_0._v;
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIfNotNull' call
      var value = tmp instanceof SpacedAligned ? tmp : null;
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
      var tmp_0;
      if (!(value == null)) {
        var it = ensureNotNull(value);
        tmp_0 = setVariable_1(Companion_instance_12, get_ArrangeSpacedByVar(), it.b30_1);
      } else {
        tmp_0 = Companion_instance_12;
      }
      var tmp$ret$3 = tmp0.c30(tmp_0);
      var tmp_1 = toAttrs(tmp$ret$3);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(429441301, true, Row$lambda(ref_0, content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.z16(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.y1h();
      var tmp_2;
      if (invalid || it_0 === Companion_getInstance().f1a_1) {
        var value_0 = ComposableLambda$invoke$ref_2(dispatchReceiver);
        $composer_1.j1i(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp_1, tmp0_0, $composer_0, 48, 0);
    } else {
      $composer_0.w19();
    }
    var tmp0_safe_receiver = $composer_0.z1i();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d1o(Row$lambda_0(modifier_0, horizontalArrangement_0, verticalAlignment_0, ref_0, content, $changed, $default));
    }
  }
  function RowDefaults() {
    RowDefaults_instance = this;
    this.e30_1 = Start_instance;
    this.f30_1 = Top_instance_0;
  }
  var RowDefaults_instance;
  function RowDefaults_getInstance() {
    if (RowDefaults_instance == null)
      new RowDefaults();
    return RowDefaults_instance;
  }
  function RowScopeInstance() {
  }
  var RowScopeInstance_instance;
  function RowScopeInstance_getInstance() {
    return RowScopeInstance_instance;
  }
  function Row$lambda($ref, $content) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      registerRefScope($this$Div, $ref._v, $composer_0, 14 & $changed | com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter() << 3);
      $content(RowScopeInstance_instance, $composer_0, 6);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_2(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.q2a(_this__u8e3s4, p0_0, p1);
    };
  }
  function Row$lambda_0($modifier, $horizontalArrangement, $verticalAlignment, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Row($modifier._v, $horizontalArrangement._v, $verticalAlignment._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function toClassName(_this__u8e3s4) {
    var tmp;
    if (equals(_this__u8e3s4, Top_instance_0)) {
      tmp = 'kobweb-align-top';
    } else if (equals(_this__u8e3s4, CenterVertically_instance)) {
      tmp = 'kobweb-align-center-vert';
    } else if (equals(_this__u8e3s4, Bottom_instance_0)) {
      tmp = 'kobweb-align-bottom';
    } else if (equals(_this__u8e3s4, FromStyle_instance_0)) {
      tmp = 'kobweb-align-from-style-vert';
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  }
  function toClassName_0(_this__u8e3s4) {
    var tmp;
    if (equals(_this__u8e3s4, TopStart_instance)) {
      tmp = 'kobweb-align-top-start';
    } else if (equals(_this__u8e3s4, TopCenter_instance)) {
      tmp = 'kobweb-align-top-center';
    } else if (equals(_this__u8e3s4, TopEnd_instance)) {
      tmp = 'kobweb-align-top-end';
    } else if (equals(_this__u8e3s4, CenterStart_instance)) {
      tmp = 'kobweb-align-center-start';
    } else if (equals(_this__u8e3s4, Center_instance_0)) {
      tmp = 'kobweb-align-center';
    } else if (equals(_this__u8e3s4, CenterEnd_instance)) {
      tmp = 'kobweb-align-center-end';
    } else if (equals(_this__u8e3s4, BottomStart_instance)) {
      tmp = 'kobweb-align-bottom-start';
    } else if (equals(_this__u8e3s4, BottomCenter_instance)) {
      tmp = 'kobweb-align-bottom-center';
    } else if (equals(_this__u8e3s4, BottomEnd_instance)) {
      tmp = 'kobweb-align-bottom-end';
    } else if (equals(_this__u8e3s4, FromStyle_instance_0)) {
      tmp = 'kobweb-align-from-style';
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  }
  function toClassName_1(_this__u8e3s4) {
    var tmp;
    if (equals(_this__u8e3s4, Start_instance_0)) {
      tmp = 'kobweb-align-start';
    } else if (equals(_this__u8e3s4, CenterHorizontally_instance)) {
      tmp = 'kobweb-align-center-horiz';
    } else if (equals(_this__u8e3s4, End_instance_0)) {
      tmp = 'kobweb-align-end';
    } else if (equals(_this__u8e3s4, FromStyle_instance_0)) {
      tmp = 'kobweb-align-from-style-horiz';
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  }
  function get_ArrangeSpacedByVar() {
    _init_properties_ArrangementExtensions_kt__c0bxro();
    var tmp = KProperty0;
    return ArrangeSpacedByVar$delegate.k2s(null, getPropertyCallableRef('ArrangeSpacedByVar', 0, tmp, _get_ArrangeSpacedByVar_$ref_4vv40k(), null));
  }
  var ArrangeSpacedByVar$delegate;
  function toClassNames(_this__u8e3s4) {
    _init_properties_ArrangementExtensions_kt__c0bxro();
    var tmp;
    if (equals(_this__u8e3s4, End_instance)) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = ['kobweb-arrange-end'];
    } else {
      if (equals(_this__u8e3s4, Start_instance)) {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = ['kobweb-arrange-start'];
      } else {
        if (isInterface(_this__u8e3s4, HorizontalOrVertical)) {
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
    if (equals(_this__u8e3s4, Top_instance)) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = ['kobweb-arrange-top'];
    } else {
      if (equals(_this__u8e3s4, Bottom_instance)) {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = ['kobweb-arrange-bottom'];
      } else {
        if (isInterface(_this__u8e3s4, HorizontalOrVertical)) {
          tmp = toClassNames_1(_this__u8e3s4);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  }
  function toClassNames_1(_this__u8e3s4) {
    _init_properties_ArrangementExtensions_kt__c0bxro();
    var tmp;
    if (equals(_this__u8e3s4, Center_instance)) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = ['kobweb-arrange-center'];
    } else {
      if (equals(_this__u8e3s4, SpaceAround_instance)) {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = ['kobweb-arrange-space-around'];
      } else {
        if (equals(_this__u8e3s4, SpaceBetween_instance)) {
          // Inline function 'kotlin.arrayOf' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp = ['kobweb-arrange-space-between'];
        } else {
          if (equals(_this__u8e3s4, SpaceEvenly_instance)) {
            // Inline function 'kotlin.arrayOf' call
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp = ['kobweb-arrange-space-evenly'];
          } else {
            if (equals(_this__u8e3s4, FromStyle_instance)) {
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
      var tmp1_subject = _this__u8e3s4.j30_1;
      var tmp_0;
      if (equals(tmp1_subject, Bottom_instance_0)) {
        tmp_0 = 'kobweb-arrange-bottom';
      } else if (equals(tmp1_subject, CenterVertically_instance)) {
        tmp_0 = 'kobweb-arrange-center';
      } else if (equals(tmp1_subject, FromStyle_instance_0)) {
        tmp_0 = 'kobweb-arrange-from-style';
      } else if (equals(tmp1_subject, Top_instance_0)) {
        tmp_0 = 'kobweb-arrange-top';
      } else {
        noWhenBranchMatchedException();
      }
      tmp = tmp_0;
    } else {
      if (_this__u8e3s4 instanceof Horizontal) {
        var tmp2_subject = _this__u8e3s4.h30_1;
        var tmp_1;
        if (equals(tmp2_subject, Start_instance_0)) {
          tmp_1 = 'kobweb-arrange-start';
        } else if (equals(tmp2_subject, CenterHorizontally_instance)) {
          tmp_1 = 'kobweb-arrange-center';
        } else if (equals(tmp2_subject, FromStyle_instance_0)) {
          tmp_1 = 'kobweb-arrange-from-style';
        } else if (equals(tmp2_subject, End_instance_0)) {
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
  function initArrangeSpacedByStyle(_this__u8e3s4) {
    _init_properties_ArrangementExtensions_kt__c0bxro();
    _this__u8e3s4.s2m('.kobweb-row.kobweb-arrange-spaced-by', initArrangeSpacedByStyle$lambda);
    _this__u8e3s4.s2m('.kobweb-col.kobweb-arrange-spaced-by', initArrangeSpacedByStyle$lambda_0);
  }
  function _get_ArrangeSpacedByVar_$ref_4vv40k() {
    return function () {
      return get_ArrangeSpacedByVar();
    };
  }
  function initArrangeSpacedByStyle$lambda($this$invoke) {
    _init_properties_ArrangementExtensions_kt__c0bxro();
    columnGap($this$invoke, get_ArrangeSpacedByVar().e2s());
    return Unit_instance;
  }
  function initArrangeSpacedByStyle$lambda_0($this$invoke) {
    _init_properties_ArrangementExtensions_kt__c0bxro();
    rowGap($this$invoke, get_ArrangeSpacedByVar().e2s());
    return Unit_instance;
  }
  var properties_initialized_ArrangementExtensions_kt_12f99q;
  function _init_properties_ArrangementExtensions_kt__c0bxro() {
    if (!properties_initialized_ArrangementExtensions_kt_12f99q) {
      properties_initialized_ArrangementExtensions_kt_12f99q = true;
      ArrangeSpacedByVar$delegate = StyleVariable('kobweb');
    }
  }
  function initBox($this, _this__u8e3s4) {
    _this__u8e3s4.s2m('.kobweb-box', KobwebComposeStyleSheet$initBox$lambda);
    _this__u8e3s4.s2m('.kobweb-box > *', KobwebComposeStyleSheet$initBox$lambda_0);
    _this__u8e3s4.s2m('.kobweb-box.kobweb-align-top-start', KobwebComposeStyleSheet$initBox$lambda_1);
    _this__u8e3s4.s2m('.kobweb-box.kobweb-align-top-center', KobwebComposeStyleSheet$initBox$lambda_2);
    _this__u8e3s4.s2m('.kobweb-box.kobweb-align-top-end', KobwebComposeStyleSheet$initBox$lambda_3);
    _this__u8e3s4.s2m('.kobweb-box.kobweb-align-center-start', KobwebComposeStyleSheet$initBox$lambda_4);
    _this__u8e3s4.s2m('.kobweb-box.kobweb-align-center', KobwebComposeStyleSheet$initBox$lambda_5);
    _this__u8e3s4.s2m('.kobweb-box.kobweb-align-center-end', KobwebComposeStyleSheet$initBox$lambda_6);
    _this__u8e3s4.s2m('.kobweb-box.kobweb-align-bottom-start', KobwebComposeStyleSheet$initBox$lambda_7);
    _this__u8e3s4.s2m('.kobweb-box.kobweb-align-bottom-center', KobwebComposeStyleSheet$initBox$lambda_8);
    _this__u8e3s4.s2m('.kobweb-box.kobweb-align-bottom-end', KobwebComposeStyleSheet$initBox$lambda_9);
    _this__u8e3s4.s2m('.kobweb-box > .kobweb-align-top-start-self', KobwebComposeStyleSheet$initBox$lambda_10);
    _this__u8e3s4.s2m('.kobweb-box > .kobweb-align-top-center-self', KobwebComposeStyleSheet$initBox$lambda_11);
    _this__u8e3s4.s2m('.kobweb-box > .kobweb-align-top-end-self', KobwebComposeStyleSheet$initBox$lambda_12);
    _this__u8e3s4.s2m('.kobweb-box > .kobweb-align-center-start-self', KobwebComposeStyleSheet$initBox$lambda_13);
    _this__u8e3s4.s2m('.kobweb-box > .kobweb-align-center-self', KobwebComposeStyleSheet$initBox$lambda_14);
    _this__u8e3s4.s2m('.kobweb-box > .kobweb-align-center-end-self', KobwebComposeStyleSheet$initBox$lambda_15);
    _this__u8e3s4.s2m('.kobweb-box > .kobweb-align-bottom-start-self', KobwebComposeStyleSheet$initBox$lambda_16);
    _this__u8e3s4.s2m('.kobweb-box > .kobweb-align-bottom-center-self', KobwebComposeStyleSheet$initBox$lambda_17);
    _this__u8e3s4.s2m('.kobweb-box > .kobweb-align-bottom-end-self', KobwebComposeStyleSheet$initBox$lambda_18);
  }
  function initRow($this, _this__u8e3s4) {
    _this__u8e3s4.s2m('.kobweb-row', KobwebComposeStyleSheet$initRow$lambda);
    _this__u8e3s4.s2m('.kobweb-row.kobweb-arrange-start', KobwebComposeStyleSheet$initRow$lambda_0);
    _this__u8e3s4.s2m('.kobweb-row.kobweb-arrange-center', KobwebComposeStyleSheet$initRow$lambda_1);
    _this__u8e3s4.s2m('.kobweb-row.kobweb-arrange-end', KobwebComposeStyleSheet$initRow$lambda_2);
    _this__u8e3s4.s2m('.kobweb-row.kobweb-arrange-space-evenly', KobwebComposeStyleSheet$initRow$lambda_3);
    _this__u8e3s4.s2m('.kobweb-row.kobweb-arrange-space-between', KobwebComposeStyleSheet$initRow$lambda_4);
    _this__u8e3s4.s2m('.kobweb-row.kobweb-arrange-space-around', KobwebComposeStyleSheet$initRow$lambda_5);
    _this__u8e3s4.s2m('.kobweb-row.kobweb-align-top', KobwebComposeStyleSheet$initRow$lambda_6);
    _this__u8e3s4.s2m('.kobweb-row.kobweb-align-center-vert', KobwebComposeStyleSheet$initRow$lambda_7);
    _this__u8e3s4.s2m('.kobweb-row.kobweb-align-bottom', KobwebComposeStyleSheet$initRow$lambda_8);
    _this__u8e3s4.s2m('.kobweb-row > .kobweb-align-top-self', KobwebComposeStyleSheet$initRow$lambda_9);
    _this__u8e3s4.s2m('.kobweb-row > .kobweb-align-center-vert-self', KobwebComposeStyleSheet$initRow$lambda_10);
    _this__u8e3s4.s2m('.kobweb-row > .kobweb-align-bottom-self', KobwebComposeStyleSheet$initRow$lambda_11);
  }
  function initCol($this, _this__u8e3s4) {
    _this__u8e3s4.s2m('.kobweb-col', KobwebComposeStyleSheet$initCol$lambda);
    _this__u8e3s4.s2m('.kobweb-col.kobweb-arrange-top', KobwebComposeStyleSheet$initCol$lambda_0);
    _this__u8e3s4.s2m('.kobweb-col.kobweb-arrange-center', KobwebComposeStyleSheet$initCol$lambda_1);
    _this__u8e3s4.s2m('.kobweb-col.kobweb-arrange-bottom', KobwebComposeStyleSheet$initCol$lambda_2);
    _this__u8e3s4.s2m('.kobweb-col.kobweb-arrange-space-evenly', KobwebComposeStyleSheet$initCol$lambda_3);
    _this__u8e3s4.s2m('.kobweb-col.kobweb-arrange-space-between', KobwebComposeStyleSheet$initCol$lambda_4);
    _this__u8e3s4.s2m('.kobweb-col.kobweb-arrange-space-around', KobwebComposeStyleSheet$initCol$lambda_5);
    _this__u8e3s4.s2m('.kobweb-col.kobweb-align-start', KobwebComposeStyleSheet$initCol$lambda_6);
    _this__u8e3s4.s2m('.kobweb-col.kobweb-align-center-horiz', KobwebComposeStyleSheet$initCol$lambda_7);
    _this__u8e3s4.s2m('.kobweb-col.kobweb-align-end', KobwebComposeStyleSheet$initCol$lambda_8);
    _this__u8e3s4.s2m('.kobweb-col > .kobweb-align-start-self', KobwebComposeStyleSheet$initCol$lambda_9);
    _this__u8e3s4.s2m('.kobweb-col > .kobweb-align-center-horiz-self', KobwebComposeStyleSheet$initCol$lambda_10);
    _this__u8e3s4.s2m('.kobweb-col > .kobweb-align-end-self', KobwebComposeStyleSheet$initCol$lambda_11);
  }
  function initSpacer($this, _this__u8e3s4) {
    _this__u8e3s4.s2m('.kobweb-spacer', KobwebComposeStyleSheet$initSpacer$lambda);
  }
  function KobwebComposeStyleSheet$lambda(this$0) {
    return function ($this$layer) {
      initBox(this$0, $this$layer);
      initCol(this$0, $this$layer);
      initRow(this$0, $this$layer);
      initSpacer(this$0, $this$layer);
      initArrangeSpacedByStyle($this$layer);
      return Unit_instance;
    };
  }
  function KobwebComposeStyleSheet$initBox$lambda($this$invoke) {
    grid($this$invoke, KobwebComposeStyleSheet$initBox$lambda$lambda);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda$lambda($this$grid) {
    $this$grid.h2r(KobwebComposeStyleSheet$initBox$lambda$lambda$lambda);
    $this$grid.i2r(KobwebComposeStyleSheet$initBox$lambda$lambda$lambda_0);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda$lambda$lambda($this$columns) {
    $this$columns.r2q(get_px(0), get_fr(1));
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda$lambda$lambda_0($this$rows) {
    $this$rows.r2q(get_px(0), get_fr(1));
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_0($this$invoke) {
    gridArea($this$invoke, '1', '1');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_1($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Start' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'start');
    justifyItems($this$invoke, Companion_instance_0.s2p());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_2($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Start' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'start');
    justifyItems($this$invoke, Companion_instance_0.r2p());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_3($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Start' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'start');
    justifyItems($this$invoke, Companion_instance_0.t2p());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_4($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'center');
    justifyItems($this$invoke, Companion_instance_0.s2p());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_5($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'center');
    justifyItems($this$invoke, Companion_instance_0.r2p());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_6($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'center');
    justifyItems($this$invoke, Companion_instance_0.t2p());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_7($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.End' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'end');
    justifyItems($this$invoke, Companion_instance_0.s2p());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_8($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.End' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'end');
    justifyItems($this$invoke, Companion_instance_0.r2p());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_9($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.End' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'end');
    justifyItems($this$invoke, Companion_instance_0.t2p());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_10($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Start' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'start');
    justifySelf($this$invoke, Companion_instance_2.s2p());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_11($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Start' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'start');
    justifySelf($this$invoke, Companion_instance_2.r2p());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_12($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Start' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'start');
    justifySelf($this$invoke, Companion_instance_2.t2p());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_13($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'center');
    justifySelf($this$invoke, Companion_instance_2.s2p());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_14($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'center');
    justifySelf($this$invoke, Companion_instance_2.r2p());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_15($this$invoke) {
    justifySelf($this$invoke, Companion_instance_2.t2p());
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'center');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_16($this$invoke) {
    justifySelf($this$invoke, Companion_instance_2.s2p());
    // Inline function 'org.jetbrains.compose.web.css.Companion.End' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'end');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_17($this$invoke) {
    justifySelf($this$invoke, Companion_instance_2.r2p());
    // Inline function 'org.jetbrains.compose.web.css.Companion.End' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'end');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_18($this$invoke) {
    justifySelf($this$invoke, Companion_instance_2.t2p());
    // Inline function 'org.jetbrains.compose.web.css.Companion.End' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'end');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$invoke, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Row' call
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$invoke, 'row');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_0($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-start';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_1($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    justifyContent($this$invoke, 'center');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_2($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-end';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_3($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceEvenly' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'space-evenly';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_4($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceBetween' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'space-between';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_5($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceAround' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'space-around';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_6($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-start';
    alignItems($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_7($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'center');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_8($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-end';
    alignItems($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_9($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-start';
    alignSelf($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_10($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'center');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_11($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-end';
    alignSelf($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$invoke, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$invoke, 'column');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_0($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-start';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_1($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    justifyContent($this$invoke, 'center');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_2($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-end';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_3($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceEvenly' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'space-evenly';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_4($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceBetween' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'space-between';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_5($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceAround' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'space-around';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_6($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-start';
    alignItems($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_7($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'center');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_8($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-end';
    alignItems($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_9($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-start';
    alignSelf($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_10($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'center');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_11($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-end';
    alignSelf($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initSpacer$lambda($this$invoke) {
    flexGrow($this$invoke, 1);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet() {
    KobwebComposeStyleSheet_instance = this;
    StyleSheet_init_$Init$(VOID, VOID, this);
    layer(this, 'kobweb-compose', KobwebComposeStyleSheet$lambda(this));
  }
  protoOf(KobwebComposeStyleSheet).q2m = function (selector, cssRule) {
    return this.p2m(selector, cssRule);
  };
  var KobwebComposeStyleSheet_instance;
  function KobwebComposeStyleSheet_getInstance() {
    if (KobwebComposeStyleSheet_instance == null)
      new KobwebComposeStyleSheet();
    return KobwebComposeStyleSheet_instance;
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
  function TopStart() {
  }
  var TopStart_instance;
  function TopStart_getInstance() {
    return TopStart_instance;
  }
  function TopCenter() {
  }
  var TopCenter_instance;
  function TopCenter_getInstance() {
    return TopCenter_instance;
  }
  function TopEnd() {
  }
  var TopEnd_instance;
  function TopEnd_getInstance() {
    return TopEnd_instance;
  }
  function CenterStart() {
  }
  var CenterStart_instance;
  function CenterStart_getInstance() {
    return CenterStart_instance;
  }
  function Center_0() {
  }
  var Center_instance_0;
  function Center_getInstance_0() {
    return Center_instance_0;
  }
  function CenterEnd() {
  }
  var CenterEnd_instance;
  function CenterEnd_getInstance() {
    return CenterEnd_instance;
  }
  function BottomStart() {
  }
  var BottomStart_instance;
  function BottomStart_getInstance() {
    return BottomStart_instance;
  }
  function BottomCenter() {
  }
  var BottomCenter_instance;
  function BottomCenter_getInstance() {
    return BottomCenter_instance;
  }
  function BottomEnd() {
  }
  var BottomEnd_instance;
  function BottomEnd_getInstance() {
    return BottomEnd_instance;
  }
  function Top_0() {
  }
  var Top_instance_0;
  function Top_getInstance_0() {
    return Top_instance_0;
  }
  function CenterVertically() {
  }
  var CenterVertically_instance;
  function CenterVertically_getInstance() {
    return CenterVertically_instance;
  }
  function Bottom_0() {
  }
  var Bottom_instance_0;
  function Bottom_getInstance_0() {
    return Bottom_instance_0;
  }
  function Start_0() {
  }
  var Start_instance_0;
  function Start_getInstance_0() {
    return Start_instance_0;
  }
  function CenterHorizontally() {
  }
  var CenterHorizontally_instance;
  function CenterHorizontally_getInstance() {
    return CenterHorizontally_instance;
  }
  function End_0() {
  }
  var End_instance_0;
  function End_getInstance_0() {
    return End_instance_0;
  }
  function FromStyle_0() {
  }
  var FromStyle_instance_0;
  function FromStyle_getInstance_0() {
    return FromStyle_instance_0;
  }
  function com_varabyte_kobweb_compose_ui_Alignment_End$stableprop_getter() {
    return com_varabyte_kobweb_compose_ui_Alignment_End$stable;
  }
  function com_varabyte_kobweb_compose_ui_Alignment_Center$stableprop_getter() {
    return com_varabyte_kobweb_compose_ui_Alignment_Center$stable;
  }
  function com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stableprop_getter() {
    return com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stable;
  }
  function Element() {
  }
  function Companion() {
  }
  protoOf(Companion).o30 = function (initial, operation) {
    return initial;
  };
  protoOf(Companion).c30 = function (other) {
    return other;
  };
  var Companion_instance_12;
  function Companion_getInstance_0() {
    return Companion_instance_12;
  }
  function Modifier() {
  }
  function thenIf(_this__u8e3s4, condition, other) {
    // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
    var tmp;
    if (condition) {
      tmp = other;
    } else {
      tmp = Companion_instance_12;
    }
    return _this__u8e3s4.c30(tmp);
  }
  function ChainedModifier(current, next) {
    this.p30_1 = current;
    this.q30_1 = next;
  }
  protoOf(ChainedModifier).o30 = function (initial, operation) {
    return this.q30_1.o30(this.p30_1.o30(initial, operation), operation);
  };
  protoOf(ChainedModifier).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof ChainedModifier) {
      tmp_0 = equals(this.p30_1, other.p30_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.q30_1, other.q30_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ChainedModifier).hashCode = function () {
    return hashCode(this.p30_1) + imul(31, hashCode(this.q30_1)) | 0;
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
  function styleModifier(_this__u8e3s4, styles) {
    return _this__u8e3s4.c30(new StyleModifier(styles));
  }
  function StyleModifier(styles) {
    this.r30_1 = styles;
  }
  protoOf(StyleModifier).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleModifier))
      return false;
    var stylesResolved = new ComparableStyleScope();
    this.r30_1(stylesResolved);
    var otherStylesResolved = new ComparableStyleScope();
    other.r30_1(otherStylesResolved);
    return stylesResolved.equals(otherStylesResolved);
  };
  protoOf(StyleModifier).hashCode = function () {
    var stylesResolved = new ComparableStyleScope();
    this.r30_1(stylesResolved);
    return stylesResolved.hashCode();
  };
  function AttrsModifier(attrs) {
    this.s30_1 = attrs;
  }
  protoOf(AttrsModifier).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AttrsModifier))
      return false;
    var attrsResolved = ComparableAttrsScope_init_$Create$();
    this.s30_1(attrsResolved);
    var otherAttrsResolved = ComparableAttrsScope_init_$Create$();
    other.s30_1(otherAttrsResolved);
    return attrsResolved.equals(otherAttrsResolved);
  };
  protoOf(AttrsModifier).hashCode = function () {
    var attrsResolved = ComparableAttrsScope_init_$Create$();
    this.s30_1(attrsResolved);
    return attrsResolved.hashCode();
  };
  function attrsModifier(_this__u8e3s4, attrs) {
    return _this__u8e3s4.c30(new AttrsModifier(attrs));
  }
  function toStyles$lambda$lambda($this) {
    return function (_unused_var__etf5q3, modifierElement) {
      var tmp;
      if (modifierElement instanceof StyleModifier) {
        tmp = modifierElement.r30_1($this);
      }
      return Unit_instance;
    };
  }
  function toStyles$lambda($firstModifier, $finalHandler) {
    return function (_this__u8e3s4) {
      $firstModifier.o30(Unit_instance, toStyles$lambda$lambda(_this__u8e3s4));
      var tmp0_safe_receiver = $finalHandler;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver(_this__u8e3s4);
      return Unit_instance;
    };
  }
  function toAttrs$lambda$lambda$lambda($modifierElement) {
    return function ($this$style) {
      $modifierElement.r30_1($this$style);
      return Unit_instance;
    };
  }
  function toAttrs$lambda$lambda($this) {
    return function (_unused_var__etf5q3, modifierElement) {
      var tmp;
      if (modifierElement instanceof AttrsModifier) {
        tmp = modifierElement.s30_1($this);
      } else {
        if (modifierElement instanceof StyleModifier) {
          $this.g2k(toAttrs$lambda$lambda$lambda(modifierElement));
          tmp = Unit_instance;
        }
      }
      return Unit_instance;
    };
  }
  function toAttrs$lambda($firstModifier, $finalHandler) {
    return function (_this__u8e3s4) {
      $firstModifier.o30(Unit_instance, toAttrs$lambda$lambda(_this__u8e3s4));
      var tmp0_safe_receiver = $finalHandler;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver(_this__u8e3s4);
      return Unit_instance;
    };
  }
  var com_varabyte_kobweb_compose_ui_graphics_Color_RawRgb$stable;
  var com_varabyte_kobweb_compose_ui_graphics_Color_NamedRgb$stable;
  var com_varabyte_kobweb_compose_ui_graphics_Color_Hsl$stable;
  var com_varabyte_kobweb_compose_ui_graphics_Colors$stable;
  function NamedRgb_init_$Init$(name, value, $this) {
    NamedRgb.call($this, name, new RawRgb(value));
    return $this;
  }
  function NamedRgb_init_$Create$(name, value) {
    return NamedRgb_init_$Init$(name, value, objectCreate(protoOf(NamedRgb)));
  }
  function Rgb() {
  }
  function RawRgb(value) {
    this.h31_1 = value;
  }
  protoOf(RawRgb).e2 = function () {
    return this.h31_1;
  };
  protoOf(RawRgb).t30 = function () {
    return this.h31_1 >> 16 & 255;
  };
  protoOf(RawRgb).u30 = function () {
    return this.h31_1 >> 8 & 255;
  };
  protoOf(RawRgb).v30 = function () {
    return this.h31_1 >> 0 & 255;
  };
  protoOf(RawRgb).w30 = function () {
    return this.h31_1 >> 24 & 255;
  };
  protoOf(RawRgb).x30 = function () {
    return toColorFloat(this.t30());
  };
  protoOf(RawRgb).y30 = function () {
    return toColorFloat(this.u30());
  };
  protoOf(RawRgb).z30 = function () {
    return toColorFloat(this.v30());
  };
  protoOf(RawRgb).a31 = function () {
    return toColorFloat(this.w30());
  };
  protoOf(RawRgb).i31 = function () {
    return Companion_instance_13.k31(255 - this.t30() | 0, 255 - this.u30() | 0, 255 - this.v30() | 0, this.w30());
  };
  protoOf(RawRgb).f31 = function (byPercent) {
    // Inline function 'kotlin.require' call
    if (!(0.0 <= byPercent ? byPercent <= 1.0 : false)) {
      var message = 'Invalid color shifting percent. Expected between 0 and 1, got ' + byPercent;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (byPercent === 0.0)
      return this;
    var darkeningMultiplier = 1.0 - byPercent;
    return Companion_instance_13.l31(this.x30() * darkeningMultiplier, this.y30() * darkeningMultiplier, this.z30() * darkeningMultiplier, this.a31());
  };
  protoOf(RawRgb).b31 = function (red, green, blue, alpha) {
    return Companion_instance_13.k31(red, green, blue, alpha);
  };
  protoOf(RawRgb).d31 = function (red, green, blue, alpha) {
    return Companion_instance_13.l31(red, green, blue, alpha);
  };
  protoOf(RawRgb).g31 = function () {
    return this;
  };
  protoOf(RawRgb).toString = function () {
    return this.w30() === 255 ? 'rgb(' + this.t30() + ', ' + this.u30() + ', ' + this.v30() + ')' : 'rgba(' + this.t30() + ', ' + this.u30() + ', ' + this.v30() + ', ' + roundTo(this.a31(), 2) + ')';
  };
  protoOf(RawRgb).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (!(other == null) ? isInterface(other, Rgb) : false) {
      tmp_2 = this.t30() === other.t30();
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.u30() === other.u30();
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.v30() === other.v30();
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.w30() === other.w30();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(RawRgb).hashCode = function () {
    var result = this.t30();
    result = imul(31, result) + this.u30() | 0;
    result = imul(31, result) + this.v30() | 0;
    result = imul(31, result) + this.w30() | 0;
    return result;
  };
  function NamedRgb(name, rgb) {
    this.m31_1 = rgb;
    this.n31_1 = name;
  }
  protoOf(NamedRgb).toString = function () {
    return this.n31_1;
  };
  protoOf(NamedRgb).equals = function (other) {
    return this === other;
  };
  protoOf(NamedRgb).hashCode = function () {
    return getStringHashCode(this.n31_1);
  };
  protoOf(NamedRgb).e2 = function () {
    return this.m31_1.h31_1;
  };
  protoOf(NamedRgb).t30 = function () {
    return this.m31_1.t30();
  };
  protoOf(NamedRgb).u30 = function () {
    return this.m31_1.u30();
  };
  protoOf(NamedRgb).v30 = function () {
    return this.m31_1.v30();
  };
  protoOf(NamedRgb).w30 = function () {
    return this.m31_1.w30();
  };
  protoOf(NamedRgb).x30 = function () {
    return this.m31_1.x30();
  };
  protoOf(NamedRgb).y30 = function () {
    return this.m31_1.y30();
  };
  protoOf(NamedRgb).z30 = function () {
    return this.m31_1.z30();
  };
  protoOf(NamedRgb).a31 = function () {
    return this.m31_1.a31();
  };
  protoOf(NamedRgb).b31 = function (red, green, blue, alpha) {
    return this.m31_1.b31(red, green, blue, alpha);
  };
  protoOf(NamedRgb).d31 = function (red, green, blue, alpha) {
    return this.m31_1.d31(red, green, blue, alpha);
  };
  protoOf(NamedRgb).i31 = function () {
    return this.m31_1.i31();
  };
  protoOf(NamedRgb).f31 = function (byPercent) {
    return this.m31_1.f31(byPercent);
  };
  protoOf(NamedRgb).g31 = function () {
    return this.m31_1.g31();
  };
  function Companion_0() {
    this.j31_1 = 0.3;
  }
  protoOf(Companion_0).o31 = function (value) {
    return new RawRgb(-16777216 | value);
  };
  protoOf(Companion_0).p31 = function (r, g, b) {
    return this.k31(r, g, b, 255);
  };
  protoOf(Companion_0).k31 = function (r, g, b, a) {
    return new RawRgb((r & 255) << 16 | (g & 255) << 8 | (b & 255) << 0 | (a & 255) << 24);
  };
  protoOf(Companion_0).l31 = function (r, g, b, a) {
    return this.k31(toColorInt(r), toColorInt(g), toColorInt(b), toColorInt(a));
  };
  var Companion_instance_13;
  function Companion_getInstance_1() {
    return Companion_instance_13;
  }
  function NamedRgb_0($this, name, rgb) {
    return NamedRgb_init_$Create$(name, rgb.e2());
  }
  function Colors() {
  }
  protoOf(Colors).q31 = function () {
    return NamedRgb_0(this, 'transparent', Companion_instance_13.k31(0, 0, 0, 0));
  };
  protoOf(Colors).r31 = function () {
    return NamedRgb_0(this, 'aquamarine', Companion_instance_13.p31(127, 255, 212));
  };
  protoOf(Colors).s31 = function () {
    return NamedRgb_0(this, 'black', Companion_instance_13.p31(0, 0, 0));
  };
  protoOf(Colors).t31 = function () {
    return NamedRgb_0(this, 'blue', Companion_instance_13.p31(0, 0, 255));
  };
  protoOf(Colors).u31 = function () {
    return NamedRgb_0(this, 'cornflowerblue', Companion_instance_13.p31(100, 149, 237));
  };
  protoOf(Colors).v31 = function () {
    return NamedRgb_0(this, 'crimson', Companion_instance_13.p31(220, 20, 60));
  };
  protoOf(Colors).w31 = function () {
    return NamedRgb_0(this, 'cyan', Companion_instance_13.p31(0, 255, 255));
  };
  protoOf(Colors).x31 = function () {
    return NamedRgb_0(this, 'darkgray', Companion_instance_13.p31(169, 169, 169));
  };
  protoOf(Colors).y31 = function () {
    return NamedRgb_0(this, 'darkorange', Companion_instance_13.p31(255, 140, 0));
  };
  protoOf(Colors).z31 = function () {
    return NamedRgb_0(this, 'darkorchid', Companion_instance_13.p31(153, 50, 204));
  };
  protoOf(Colors).a32 = function () {
    return NamedRgb_0(this, 'darkslategray', Companion_instance_13.p31(47, 79, 79));
  };
  protoOf(Colors).b32 = function () {
    return NamedRgb_0(this, 'dodgerblue', Companion_instance_13.p31(30, 144, 255));
  };
  protoOf(Colors).c32 = function () {
    return NamedRgb_0(this, 'gray', Companion_instance_13.p31(128, 128, 128));
  };
  protoOf(Colors).d32 = function () {
    return NamedRgb_0(this, 'lightgray', Companion_instance_13.p31(211, 211, 211));
  };
  protoOf(Colors).e32 = function () {
    return NamedRgb_0(this, 'lightskyblue', Companion_instance_13.p31(135, 206, 250));
  };
  protoOf(Colors).f32 = function () {
    return NamedRgb_0(this, 'limegreen', Companion_instance_13.p31(50, 205, 50));
  };
  protoOf(Colors).g32 = function () {
    return NamedRgb_0(this, 'orange', Companion_instance_13.p31(255, 165, 0));
  };
  protoOf(Colors).h32 = function () {
    return NamedRgb_0(this, 'purple', Companion_instance_13.p31(128, 0, 128));
  };
  protoOf(Colors).i32 = function () {
    return NamedRgb_0(this, 'red', Companion_instance_13.p31(255, 0, 0));
  };
  protoOf(Colors).j32 = function () {
    return NamedRgb_0(this, 'seagreen', Companion_instance_13.p31(46, 139, 87));
  };
  protoOf(Colors).k32 = function () {
    return NamedRgb_0(this, 'violet', Companion_instance_13.p31(238, 130, 238));
  };
  protoOf(Colors).l32 = function () {
    return NamedRgb_0(this, 'white', Companion_instance_13.p31(255, 255, 255));
  };
  protoOf(Colors).m32 = function () {
    return NamedRgb_0(this, 'whitesmoke', Companion_instance_13.p31(245, 245, 245));
  };
  var Colors_instance;
  function Colors_getInstance() {
    return Colors_instance;
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
  function lightened(_this__u8e3s4, byPercent) {
    byPercent = byPercent === VOID ? 0.3 : byPercent;
    return _this__u8e3s4.i31().f31(byPercent).i31();
  }
  function get_isBright(_this__u8e3s4) {
    return get_luminance(_this__u8e3s4) > 0.5;
  }
  function get_luminance(_this__u8e3s4) {
    // Inline function 'kotlin.let' call
    var rgb = _this__u8e3s4.g31();
    return rgb.x30() * 0.299 + rgb.y30() * 0.587 + rgb.z30() * 0.114;
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
      return Unit_instance;
    };
  }
  function ariaDisabled$lambda($value) {
    return function ($this$attrsModifier) {
      ariaDisabled($this$attrsModifier, $value);
      return Unit_instance;
    };
  }
  function alignItems_1(_this__u8e3s4, alignItems) {
    return styleModifier(_this__u8e3s4, alignItems$lambda(alignItems));
  }
  function alignItems$lambda($alignItems) {
    return function ($this$styleModifier) {
      alignItems_0($this$styleModifier, $alignItems);
      return Unit_instance;
    };
  }
  var com_varabyte_kobweb_compose_ui_modifiers_BackgroundPositionScope$stable;
  var com_varabyte_kobweb_compose_ui_modifiers_BackgroundScope$stable;
  function backgroundColor_0(_this__u8e3s4, color) {
    return background_1(_this__u8e3s4, backgroundColor$lambda(color));
  }
  function background_0(_this__u8e3s4, color, backgrounds) {
    return styleModifier(_this__u8e3s4, background$lambda(color, backgrounds));
  }
  function backgroundImage_0(_this__u8e3s4, gradient) {
    return background_1(_this__u8e3s4, backgroundImage$lambda(gradient));
  }
  function background_1(_this__u8e3s4, scope) {
    return styleModifier(_this__u8e3s4, background$lambda_0(scope));
  }
  function BackgroundScope(styleScope) {
    this.n32_1 = styleScope;
  }
  protoOf(BackgroundScope).o32 = function (color) {
    return backgroundColor(this.n32_1, color);
  };
  protoOf(BackgroundScope).p32 = function (gradient) {
    return backgroundImage(this.n32_1, gradient);
  };
  function backgroundColor$lambda($color) {
    return function ($this$background) {
      $this$background.o32($color);
      return Unit_instance;
    };
  }
  function background$lambda($color, $backgrounds) {
    return function ($this$styleModifier) {
      background($this$styleModifier, Companion_instance_6.u2p($color, $backgrounds.slice()));
      return Unit_instance;
    };
  }
  function backgroundImage$lambda($gradient) {
    return function ($this$background) {
      $this$background.p32($gradient);
      return Unit_instance;
    };
  }
  function background$lambda_0($scope) {
    return function ($this$styleModifier) {
      var tmp0 = new BackgroundScope($this$styleModifier);
      // Inline function 'kotlin.apply' call
      $scope(tmp0);
      return Unit_instance;
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
  function BorderScope(styleScope) {
    this.q32_1 = styleScope;
  }
  protoOf(BorderScope).o32 = function (color) {
    return borderColor(this.q32_1, color);
  };
  protoOf(BorderScope).r32 = function (top, right, bottom, left) {
    return borderColor_0(this.q32_1, top, right, bottom, left);
  };
  protoOf(BorderScope).s32 = function (lineStyle) {
    return borderStyle(this.q32_1, lineStyle);
  };
  protoOf(BorderScope).t32 = function (width) {
    return borderWidth(this.q32_1, width);
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
      return Unit_instance;
    };
  }
  function borderLeft$lambda($width, $style, $color) {
    return function ($this$styleModifier) {
      borderLeft($this$styleModifier, $width, $style, $color);
      return Unit_instance;
    };
  }
  function borderRadius$lambda($r) {
    return function ($this$styleModifier) {
      borderRadius($this$styleModifier, $r);
      return Unit_instance;
    };
  }
  function border$lambda($width, $style, $color) {
    return function ($this$styleModifier) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = $width;
      border($this$styleModifier, tmp$ret$1, $style, $color);
      return Unit_instance;
    };
  }
  function border$lambda_0($scope) {
    return function ($this$styleModifier) {
      var tmp0 = new BorderScope($this$styleModifier);
      // Inline function 'kotlin.apply' call
      $scope(tmp0);
      return Unit_instance;
    };
  }
  function borderTop$lambda($width, $style, $color) {
    return function ($this$styleModifier) {
      borderTop($this$styleModifier, $width, $style, $color);
      return Unit_instance;
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
    return boxShadow_0(_this__u8e3s4, [Companion_instance_7.w2p(offsetX, offsetY, blurRadius, spreadRadius, color, inset)]);
  }
  function boxSizing_0(_this__u8e3s4, boxSizing) {
    return styleModifier(_this__u8e3s4, boxSizing$lambda(boxSizing));
  }
  function boxShadow$lambda($boxShadows) {
    return function ($this$styleModifier) {
      boxShadow($this$styleModifier, Companion_instance_7.y2p($boxShadows.slice()));
      return Unit_instance;
    };
  }
  function boxSizing$lambda($boxSizing) {
    return function ($this$styleModifier) {
      boxSizing($this$styleModifier, $boxSizing);
      return Unit_instance;
    };
  }
  function color_0(_this__u8e3s4, color) {
    return styleModifier(_this__u8e3s4, color$lambda(color));
  }
  function opacity_1(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, opacity$lambda(value));
  }
  function colorScheme_0(_this__u8e3s4, colorScheme) {
    return styleModifier(_this__u8e3s4, colorScheme$lambda(colorScheme));
  }
  function opacity_2(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, opacity$lambda_0(value));
  }
  function color$lambda($color) {
    return function ($this$styleModifier) {
      color($this$styleModifier, $color);
      return Unit_instance;
    };
  }
  function opacity$lambda($value) {
    return function ($this$styleModifier) {
      opacity($this$styleModifier, $value);
      return Unit_instance;
    };
  }
  function colorScheme$lambda($colorScheme) {
    return function ($this$styleModifier) {
      colorScheme($this$styleModifier, $colorScheme);
      return Unit_instance;
    };
  }
  function opacity$lambda_0($value) {
    return function ($this$styleModifier) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = $value;
      opacity_0($this$styleModifier, tmp$ret$1);
      return Unit_instance;
    };
  }
  var com_varabyte_kobweb_compose_ui_modifiers_ColumnRuleScope$stable;
  function display_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, display$lambda(value));
  }
  function display$lambda($value) {
    return function ($this$styleModifier) {
      display($this$styleModifier, $value);
      return Unit_instance;
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
      $this$attrsModifier.i2k($classes.slice());
      return Unit_instance;
    };
  }
  function appearance$lambda($appearance) {
    return function ($this$styleModifier) {
      appearance($this$styleModifier, $appearance);
      return Unit_instance;
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
      return Unit_instance;
    };
  }
  function gap$lambda($value) {
    return function ($this$styleModifier) {
      gap($this$styleModifier, $value);
      return Unit_instance;
    };
  }
  var com_varabyte_kobweb_compose_ui_modifiers_FontScope$stable;
  var com_varabyte_kobweb_compose_ui_modifiers_FontVariantScope$stable;
  function fontSize_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, fontSize$lambda(value));
  }
  function fontWeight_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, fontWeight$lambda(value));
  }
  function fontFamily_0(_this__u8e3s4, values) {
    return styleModifier(_this__u8e3s4, fontFamily$lambda(values));
  }
  function fontSize$lambda($value) {
    return function ($this$styleModifier) {
      fontSize($this$styleModifier, $value);
      return Unit_instance;
    };
  }
  function fontWeight$lambda($value) {
    return function ($this$styleModifier) {
      fontWeight($this$styleModifier, $value);
      return Unit_instance;
    };
  }
  function fontFamily$lambda($values) {
    return function ($this$styleModifier) {
      fontFamily($this$styleModifier, $values.slice());
      return Unit_instance;
    };
  }
  function gridTemplateColumns_0(_this__u8e3s4, block) {
    return styleModifier(_this__u8e3s4, gridTemplateColumns$lambda(block));
  }
  function gridTemplateColumns$lambda($block) {
    return function ($this$styleModifier) {
      gridTemplateColumns($this$styleModifier, $block);
      return Unit_instance;
    };
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
  function onClick(_this__u8e3s4, listener) {
    return attrsModifier(_this__u8e3s4, onClick$lambda(listener));
  }
  function tabIndex$lambda($value) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.j2k($value);
      return Unit_instance;
    };
  }
  function userSelect$lambda($userSelect) {
    return function ($this$styleModifier) {
      userSelect($this$styleModifier, $userSelect);
      return Unit_instance;
    };
  }
  function cursor$lambda($cursor) {
    return function ($this$styleModifier) {
      cursor($this$styleModifier, $cursor);
      return Unit_instance;
    };
  }
  function onClick$lambda($listener) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.m2k($listener);
      return Unit_instance;
    };
  }
  var com_varabyte_kobweb_compose_ui_modifiers_MarginScope$stable;
  var com_varabyte_kobweb_compose_ui_modifiers_MarginInlineScope$stable;
  var com_varabyte_kobweb_compose_ui_modifiers_MarginBlockScope$stable;
  var com_varabyte_kobweb_compose_ui_modifiers_PaddingScope$stable;
  var com_varabyte_kobweb_compose_ui_modifiers_PaddingInlineScope$stable;
  var com_varabyte_kobweb_compose_ui_modifiers_PaddingBlockScope$stable;
  function margin_0(_this__u8e3s4, top, leftRight, bottom) {
    top = top === VOID ? get_px(0) : top;
    leftRight = leftRight === VOID ? get_px(0) : leftRight;
    bottom = bottom === VOID ? get_px(0) : bottom;
    return styleModifier(_this__u8e3s4, margin$lambda(top, leftRight, bottom));
  }
  function padding_0(_this__u8e3s4, all) {
    return styleModifier(_this__u8e3s4, padding$lambda(all));
  }
  function marginBlock_0(_this__u8e3s4, both) {
    return styleModifier(_this__u8e3s4, marginBlock$lambda(both));
  }
  function lineHeight_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, lineHeight$lambda(value));
  }
  function padding_1(_this__u8e3s4, topBottom, leftRight) {
    topBottom = topBottom === VOID ? get_px(0) : topBottom;
    leftRight = leftRight === VOID ? get_px(0) : leftRight;
    return styleModifier(_this__u8e3s4, padding$lambda_0(topBottom, leftRight));
  }
  function margin_1(_this__u8e3s4, scope) {
    return styleModifier(_this__u8e3s4, margin$lambda_0(scope));
  }
  function MarginScope(styleScope) {
    this.u32_1 = styleScope;
  }
  protoOf(MarginScope).v32 = function (value) {
    return marginBottom(this.u32_1, value);
  };
  function marginBlock_1(_this__u8e3s4, scope) {
    return styleModifier(_this__u8e3s4, marginBlock$lambda_0(scope));
  }
  function MarginBlockScope(styleScope) {
    this.w32_1 = styleScope;
  }
  protoOf(MarginBlockScope).x32 = function (value) {
    return marginBlockStart(this.w32_1, value);
  };
  protoOf(MarginBlockScope).y32 = function (value) {
    return marginBlockEnd(this.w32_1, value);
  };
  function verticalAlign_0(_this__u8e3s4, verticalAlign) {
    return styleModifier(_this__u8e3s4, verticalAlign$lambda(verticalAlign));
  }
  function margin_2(_this__u8e3s4, all) {
    return styleModifier(_this__u8e3s4, margin$lambda_1(all));
  }
  function paddingInline_0(_this__u8e3s4, start, end) {
    start = start === VOID ? get_px(0) : start;
    end = end === VOID ? get_px(0) : end;
    return styleModifier(_this__u8e3s4, paddingInline$lambda(start, end));
  }
  function margin_3(_this__u8e3s4, top, right, bottom, left) {
    top = top === VOID ? get_px(0) : top;
    right = right === VOID ? get_px(0) : right;
    bottom = bottom === VOID ? get_px(0) : bottom;
    left = left === VOID ? get_px(0) : left;
    return styleModifier(_this__u8e3s4, margin$lambda_2(top, right, bottom, left));
  }
  function zIndex_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, zIndex$lambda(value));
  }
  function margin$lambda($top, $leftRight, $bottom) {
    return function ($this$styleModifier) {
      margin($this$styleModifier, [$top, $leftRight, $bottom]);
      return Unit_instance;
    };
  }
  function padding$lambda($all) {
    return function ($this$styleModifier) {
      padding($this$styleModifier, [$all]);
      return Unit_instance;
    };
  }
  function marginBlock$lambda($both) {
    return function ($this$styleModifier) {
      marginBlock($this$styleModifier, $both);
      return Unit_instance;
    };
  }
  function lineHeight$lambda($value) {
    return function ($this$styleModifier) {
      lineHeight($this$styleModifier, toString($value));
      return Unit_instance;
    };
  }
  function padding$lambda_0($topBottom, $leftRight) {
    return function ($this$styleModifier) {
      padding($this$styleModifier, [$topBottom, $leftRight]);
      return Unit_instance;
    };
  }
  function margin$lambda_0($scope) {
    return function ($this$styleModifier) {
      $scope(new MarginScope($this$styleModifier));
      return Unit_instance;
    };
  }
  function marginBlock$lambda_0($scope) {
    return function ($this$styleModifier) {
      $scope(new MarginBlockScope($this$styleModifier));
      return Unit_instance;
    };
  }
  function verticalAlign$lambda($verticalAlign) {
    return function ($this$styleModifier) {
      verticalAlign($this$styleModifier, $verticalAlign);
      return Unit_instance;
    };
  }
  function margin$lambda_1($all) {
    return function ($this$styleModifier) {
      margin($this$styleModifier, [$all]);
      return Unit_instance;
    };
  }
  function paddingInline$lambda($start, $end) {
    return function ($this$styleModifier) {
      paddingInline($this$styleModifier, $start, $end);
      return Unit_instance;
    };
  }
  function margin$lambda_2($top, $right, $bottom, $left) {
    return function ($this$styleModifier) {
      margin($this$styleModifier, [$top, $right, $bottom, $left]);
      return Unit_instance;
    };
  }
  function zIndex$lambda($value) {
    return function ($this$styleModifier) {
      zIndex($this$styleModifier, $value);
      return Unit_instance;
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
      listStyle($this$styleModifier, Companion_instance_8.m2r($type, $position, $image));
      return Unit_instance;
    };
  }
  function objectFit_0(_this__u8e3s4, objectFit) {
    return styleModifier(_this__u8e3s4, objectFit$lambda(objectFit));
  }
  function objectFit$lambda($objectFit) {
    return function ($this$styleModifier) {
      objectFit($this$styleModifier, $objectFit);
      return Unit_instance;
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
      var tmp = Companion_instance_9;
      var tmp0_safe_receiver = $width;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_0 = Companion_instance_10.q2r(tmp0_safe_receiver);
      }
      outline($this$styleModifier, tmp.p2r(tmp_0, $style, $color));
      return Unit_instance;
    };
  }
  var com_varabyte_kobweb_compose_ui_modifiers_OverflowScope$stable;
  function overflow_0(_this__u8e3s4, scope) {
    return styleModifier(_this__u8e3s4, overflow$lambda(scope));
  }
  function OverflowScope(styleScope) {
    this.z32_1 = styleScope;
  }
  protoOf(OverflowScope).a33 = function (overflowY_0) {
    return overflowY(this.z32_1, overflowY_0);
  };
  function overflow_1(_this__u8e3s4, overflow) {
    return styleModifier(_this__u8e3s4, overflow$lambda_0(overflow));
  }
  function overflow$lambda($scope) {
    return function ($this$styleModifier) {
      $scope(new OverflowScope($this$styleModifier));
      return Unit_instance;
    };
  }
  function overflow$lambda_0($overflow) {
    return function ($this$styleModifier) {
      overflow($this$styleModifier, $overflow);
      return Unit_instance;
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
      return Unit_instance;
    };
  }
  function top$lambda($value) {
    return function ($this$styleModifier) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = $value;
      top($this$styleModifier, tmp$ret$1);
      return Unit_instance;
    };
  }
  function left$lambda($value) {
    return function ($this$styleModifier) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = $value;
      left($this$styleModifier, tmp$ret$1);
      return Unit_instance;
    };
  }
  function right$lambda($value) {
    return function ($this$styleModifier) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = $value;
      right($this$styleModifier, tmp$ret$1);
      return Unit_instance;
    };
  }
  function bottom$lambda($value) {
    return function ($this$styleModifier) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = $value;
      bottom($this$styleModifier, tmp$ret$1);
      return Unit_instance;
    };
  }
  var com_varabyte_kobweb_compose_ui_modifiers_OverscrollBehaviorScope$stable;
  function fillMaxWidth(_this__u8e3s4, percent) {
    percent = percent === VOID ? get_percent(100) : percent;
    return styleModifier(_this__u8e3s4, fillMaxWidth$lambda(percent));
  }
  function minWidth_0(_this__u8e3s4, size) {
    return styleModifier(_this__u8e3s4, minWidth$lambda(size));
  }
  function height_0(_this__u8e3s4, size) {
    return styleModifier(_this__u8e3s4, height$lambda(size));
  }
  function size(_this__u8e3s4, size) {
    return size_0(_this__u8e3s4, size, size);
  }
  function minHeight_0(_this__u8e3s4, size) {
    return styleModifier(_this__u8e3s4, minHeight$lambda(size));
  }
  function width_0(_this__u8e3s4, size) {
    return styleModifier(_this__u8e3s4, width$lambda(size));
  }
  function fillMaxHeight(_this__u8e3s4, percent) {
    percent = percent === VOID ? get_percent(100) : percent;
    return styleModifier(_this__u8e3s4, fillMaxHeight$lambda(percent));
  }
  function fillMaxSize(_this__u8e3s4, percent) {
    percent = percent === VOID ? get_percent(100) : percent;
    return styleModifier(_this__u8e3s4, fillMaxSize$lambda(percent));
  }
  function size_0(_this__u8e3s4, width, height) {
    return styleModifier(_this__u8e3s4, size$lambda(width, height));
  }
  function fillMaxWidth$lambda($percent) {
    return function ($this$styleModifier) {
      width($this$styleModifier, $percent);
      return Unit_instance;
    };
  }
  function minWidth$lambda($size) {
    return function ($this$styleModifier) {
      minWidth($this$styleModifier, $size);
      return Unit_instance;
    };
  }
  function height$lambda($size) {
    return function ($this$styleModifier) {
      height($this$styleModifier, $size);
      return Unit_instance;
    };
  }
  function minHeight$lambda($size) {
    return function ($this$styleModifier) {
      minHeight($this$styleModifier, $size);
      return Unit_instance;
    };
  }
  function width$lambda($size) {
    return function ($this$styleModifier) {
      width($this$styleModifier, $size);
      return Unit_instance;
    };
  }
  function fillMaxHeight$lambda($percent) {
    return function ($this$styleModifier) {
      height($this$styleModifier, $percent);
      return Unit_instance;
    };
  }
  function fillMaxSize$lambda($percent) {
    return function ($this$styleModifier) {
      width($this$styleModifier, $percent);
      height($this$styleModifier, $percent);
      return Unit_instance;
    };
  }
  function size$lambda($width, $height) {
    return function ($this$styleModifier) {
      width($this$styleModifier, $width);
      height($this$styleModifier, $height);
      return Unit_instance;
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
      return Unit_instance;
    };
  }
  function whiteSpace$lambda($whiteSpace) {
    return function ($this$styleModifier) {
      whiteSpace($this$styleModifier, $whiteSpace);
      return Unit_instance;
    };
  }
  function textDecorationLine$lambda($textDecorationLine) {
    return function ($this$styleModifier) {
      textDecorationLine($this$styleModifier, [$textDecorationLine]);
      return Unit_instance;
    };
  }
  function translateX_0(_this__u8e3s4, tx) {
    return styleModifier(_this__u8e3s4, translateX$lambda(tx));
  }
  function rotate_0(_this__u8e3s4, a) {
    return styleModifier(_this__u8e3s4, rotate$lambda(a));
  }
  function translateX$lambda($tx) {
    return function ($this$styleModifier) {
      translateX($this$styleModifier, $tx);
      return Unit_instance;
    };
  }
  function rotate$lambda($a) {
    return function ($this$styleModifier) {
      rotate($this$styleModifier, $a);
      return Unit_instance;
    };
  }
  var com_varabyte_kobweb_compose_ui_modifiers_TransitionScope$stable;
  function transition_0(_this__u8e3s4, transition) {
    return styleModifier(_this__u8e3s4, transition$lambda(transition));
  }
  function transition_1(_this__u8e3s4, transitions) {
    return styleModifier(_this__u8e3s4, transition$lambda_0(transitions));
  }
  function transition_2(_this__u8e3s4, scope) {
    return styleModifier(_this__u8e3s4, transition$lambda_1(scope));
  }
  function TransitionScope(styleScope) {
    this.b33_1 = styleScope;
  }
  protoOf(TransitionScope).c33 = function (properties) {
    return transitionProperty(this.b33_1, properties.slice());
  };
  protoOf(TransitionScope).d33 = function (durations) {
    return transitionDuration(this.b33_1, durations.slice());
  };
  protoOf(TransitionScope).e33 = function (timingFunctions) {
    return transitionTimingFunction(this.b33_1, timingFunctions.slice());
  };
  function transition$lambda($transition) {
    return function ($this$styleModifier) {
      transition($this$styleModifier, $transition);
      return Unit_instance;
    };
  }
  function transition$lambda_0($transitions) {
    return function ($this$styleModifier) {
      transition($this$styleModifier, Companion_instance_11.u2s($transitions.slice()));
      return Unit_instance;
    };
  }
  function transition$lambda_1($scope) {
    return function ($this$styleModifier) {
      var tmp0 = new TransitionScope($this$styleModifier);
      // Inline function 'kotlin.apply' call
      $scope(tmp0);
      return Unit_instance;
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
      return Unit_instance;
    };
  }
  function setVariable$lambda_0($variable, $value) {
    return function ($this$styleModifier) {
      setVariable_0($this$styleModifier, $variable, $value);
      return Unit_instance;
    };
  }
  //region block: post-declaration
  protoOf(ColumnScopeInstance).d30 = align;
  protoOf(ChainedModifier).c30 = then;
  protoOf(StyleModifier).o30 = fold;
  protoOf(StyleModifier).c30 = then;
  protoOf(AttrsModifier).o30 = fold;
  protoOf(AttrsModifier).c30 = then;
  protoOf(RawRgb).c31 = copy$default;
  protoOf(RawRgb).e31 = copyf$default;
  protoOf(NamedRgb).c31 = copy$default;
  protoOf(NamedRgb).e31 = copyf$default;
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
  End_instance = new End();
  Start_instance = new Start();
  Top_instance = new Top();
  Bottom_instance = new Bottom();
  Center_instance = new Center();
  SpaceEvenly_instance = new SpaceEvenly();
  SpaceBetween_instance = new SpaceBetween();
  SpaceAround_instance = new SpaceAround();
  FromStyle_instance = new FromStyle();
  com_varabyte_kobweb_compose_foundation_layout_BoxScopeInstance$stable = 0;
  com_varabyte_kobweb_compose_foundation_layout_BoxDefaults$stable = 8;
  BoxScopeInstance_instance = new BoxScopeInstance();
  com_varabyte_kobweb_compose_foundation_layout_ColumnScopeInstance$stable = 0;
  com_varabyte_kobweb_compose_foundation_layout_ColumnDefaults$stable = 0;
  ColumnScopeInstance_instance = new ColumnScopeInstance();
  com_varabyte_kobweb_compose_foundation_layout_RowScopeInstance$stable = 0;
  com_varabyte_kobweb_compose_foundation_layout_RowDefaults$stable = 0;
  RowScopeInstance_instance = new RowScopeInstance();
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
  TopStart_instance = new TopStart();
  TopCenter_instance = new TopCenter();
  TopEnd_instance = new TopEnd();
  CenterStart_instance = new CenterStart();
  Center_instance_0 = new Center_0();
  CenterEnd_instance = new CenterEnd();
  BottomStart_instance = new BottomStart();
  BottomCenter_instance = new BottomCenter();
  BottomEnd_instance = new BottomEnd();
  Top_instance_0 = new Top_0();
  CenterVertically_instance = new CenterVertically();
  Bottom_instance_0 = new Bottom_0();
  Start_instance_0 = new Start_0();
  CenterHorizontally_instance = new CenterHorizontally();
  End_instance_0 = new End_0();
  FromStyle_instance_0 = new FromStyle_0();
  Companion_instance_12 = new Companion();
  com_varabyte_kobweb_compose_ui_AttrsModifier$stable = 0;
  com_varabyte_kobweb_compose_ui_StyleModifier$stable = 0;
  com_varabyte_kobweb_compose_ui_graphics_Color_RawRgb$stable = 0;
  com_varabyte_kobweb_compose_ui_graphics_Color_NamedRgb$stable = 0;
  com_varabyte_kobweb_compose_ui_graphics_Color_Hsl$stable = 0;
  com_varabyte_kobweb_compose_ui_graphics_Colors$stable = 0;
  Companion_instance_13 = new Companion_0();
  Colors_instance = new Colors();
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
  _.$_$.m = backgroundColor_0;
  _.$_$.n = backgroundImage_0;
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
  _.$_$.r1 = marginBlock_1;
  _.$_$.s1 = marginBlock_0;
  _.$_$.t1 = margin_3;
  _.$_$.u1 = margin_2;
  _.$_$.v1 = margin_1;
  _.$_$.w1 = margin_0;
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
  _.$_$.m2 = setVariable_2;
  _.$_$.n2 = setVariable_1;
  _.$_$.o2 = size;
  _.$_$.p2 = tabIndex;
  _.$_$.q2 = textAlign_0;
  _.$_$.r2 = textDecorationLine_0;
  _.$_$.s2 = top_0;
  _.$_$.t2 = transition_2;
  _.$_$.u2 = transition_1;
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
  _.$_$.g3 = thenIf;
  _.$_$.h3 = toAttrs;
  _.$_$.i3 = toStyles;
  _.$_$.j3 = KobwebComposeStyles;
  _.$_$.k3 = Center_instance;
  _.$_$.l3 = Start_instance;
  _.$_$.m3 = Top_instance;
  _.$_$.n3 = Companion_instance_13;
  _.$_$.o3 = Colors_instance;
  _.$_$.p3 = CenterHorizontally_instance;
  _.$_$.q3 = CenterVertically_instance;
  _.$_$.r3 = Center_instance_0;
  _.$_$.s3 = End_instance_0;
  _.$_$.t3 = Start_instance_0;
  _.$_$.u3 = Companion_instance_12;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-kobweb-compose.js.map
