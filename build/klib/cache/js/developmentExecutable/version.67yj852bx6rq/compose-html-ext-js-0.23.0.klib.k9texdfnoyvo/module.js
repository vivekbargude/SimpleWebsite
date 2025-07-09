(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './html-html-core.js', './kobweb-frontend-browser-ext.js', './compose-multiplatform-core-compose-runtime-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./html-html-core.js'), require('./kobweb-frontend-browser-ext.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-compose-html-ext'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-compose-html-ext'.");
    }
    if (typeof globalThis['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-compose-html-ext'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-compose-html-ext'.");
    }
    if (typeof globalThis['kobweb-frontend-browser-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-compose-html-ext'. Its dependency 'kobweb-frontend-browser-ext' was not found. Please, check whether 'kobweb-frontend-browser-ext' is loaded prior to 'kobweb-frontend-compose-html-ext'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-compose-html-ext'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-compose-html-ext'.");
    }
    globalThis['kobweb-frontend-compose-html-ext'] = factory(typeof globalThis['kobweb-frontend-compose-html-ext'] === 'undefined' ? {} : globalThis['kobweb-frontend-compose-html-ext'], globalThis['kotlin-kotlin-stdlib'], globalThis['html-html-core'], globalThis['kobweb-frontend-browser-ext'], globalThis['compose-multiplatform-core-compose-runtime-runtime']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_browser_ext, kotlin_org_jetbrains_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.lc;
  var objectCreate = kotlin_kotlin.$_$.kc;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.u;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.w;
  var Unit_getInstance = kotlin_kotlin.$_$.m4;
  var equals = kotlin_kotlin.$_$.bb;
  var hashCode = kotlin_kotlin.$_$.hb;
  var classes = kotlin_org_jetbrains_compose_html_html_core.$_$.o;
  var id = kotlin_org_jetbrains_compose_html_html_core.$_$.t;
  var hidden = kotlin_org_jetbrains_compose_html_html_core.$_$.s;
  var title = kotlin_org_jetbrains_compose_html_html_core.$_$.z;
  var dir = kotlin_org_jetbrains_compose_html_html_core.$_$.q;
  var draggable = kotlin_org_jetbrains_compose_html_html_core.$_$.r;
  var contentEditable = kotlin_org_jetbrains_compose_html_html_core.$_$.p;
  var lang = kotlin_org_jetbrains_compose_html_html_core.$_$.w;
  var tabIndex = kotlin_org_jetbrains_compose_html_html_core.$_$.y;
  var spellCheck = kotlin_org_jetbrains_compose_html_html_core.$_$.x;
  var inputMode = kotlin_org_jetbrains_compose_html_html_core.$_$.v;
  var inputMode_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.u;
  var onContextMenu = kotlin_org_jetbrains_compose_html_html_core.$_$.i1;
  var onClick = kotlin_org_jetbrains_compose_html_html_core.$_$.h1;
  var onDoubleClick = kotlin_org_jetbrains_compose_html_html_core.$_$.l1;
  var onMouseDown = kotlin_org_jetbrains_compose_html_html_core.$_$.y1;
  var onMouseUp = kotlin_org_jetbrains_compose_html_html_core.$_$.e2;
  var onMouseEnter = kotlin_org_jetbrains_compose_html_html_core.$_$.z1;
  var onMouseLeave = kotlin_org_jetbrains_compose_html_html_core.$_$.a2;
  var onMouseMove = kotlin_org_jetbrains_compose_html_html_core.$_$.b2;
  var onMouseOut = kotlin_org_jetbrains_compose_html_html_core.$_$.c2;
  var onMouseOver = kotlin_org_jetbrains_compose_html_html_core.$_$.d2;
  var onWheel = kotlin_org_jetbrains_compose_html_html_core.$_$.l2;
  var onDrag = kotlin_org_jetbrains_compose_html_html_core.$_$.r1;
  var onDrop = kotlin_org_jetbrains_compose_html_html_core.$_$.s1;
  var onDragStart = kotlin_org_jetbrains_compose_html_html_core.$_$.q1;
  var onDragEnd = kotlin_org_jetbrains_compose_html_html_core.$_$.m1;
  var onDragOver = kotlin_org_jetbrains_compose_html_html_core.$_$.p1;
  var onDragEnter = kotlin_org_jetbrains_compose_html_html_core.$_$.n1;
  var onDragLeave = kotlin_org_jetbrains_compose_html_html_core.$_$.o1;
  var onCopy = kotlin_org_jetbrains_compose_html_html_core.$_$.j1;
  var onCut = kotlin_org_jetbrains_compose_html_html_core.$_$.k1;
  var onPaste = kotlin_org_jetbrains_compose_html_html_core.$_$.f2;
  var onKeyDown = kotlin_org_jetbrains_compose_html_html_core.$_$.w1;
  var onKeyUp = kotlin_org_jetbrains_compose_html_html_core.$_$.x1;
  var onFocus = kotlin_org_jetbrains_compose_html_html_core.$_$.v1;
  var onBlur = kotlin_org_jetbrains_compose_html_html_core.$_$.g1;
  var onFocusIn = kotlin_org_jetbrains_compose_html_html_core.$_$.t1;
  var onFocusOut = kotlin_org_jetbrains_compose_html_html_core.$_$.u1;
  var onTouchCancel = kotlin_org_jetbrains_compose_html_html_core.$_$.h2;
  var onTouchMove = kotlin_org_jetbrains_compose_html_html_core.$_$.j2;
  var onTouchEnd = kotlin_org_jetbrains_compose_html_html_core.$_$.i2;
  var onTouchStart = kotlin_org_jetbrains_compose_html_html_core.$_$.k2;
  var onAnimationEnd = kotlin_org_jetbrains_compose_html_html_core.$_$.d1;
  var onAnimationIteration = kotlin_org_jetbrains_compose_html_html_core.$_$.e1;
  var onAnimationStart = kotlin_org_jetbrains_compose_html_html_core.$_$.f1;
  var onScroll = kotlin_org_jetbrains_compose_html_html_core.$_$.g2;
  var addEventListener = kotlin_org_jetbrains_compose_html_html_core.$_$.c1;
  var addEventListener_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.b1;
  var AttrsScope = kotlin_org_jetbrains_compose_html_html_core.$_$.a1;
  var initMetadataForClass = kotlin_kotlin.$_$.ib;
  var VOID = kotlin_kotlin.$_$.f;
  var initMetadataForInterface = kotlin_kotlin.$_$.lb;
  var initMetadataForCompanion = kotlin_kotlin.$_$.jb;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.e1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.g2;
  var THROW_IAE = kotlin_kotlin.$_$.uf;
  var enumEntries = kotlin_kotlin.$_$.ma;
  var Enum = kotlin_kotlin.$_$.if;
  var toString = kotlin_kotlin.$_$.oc;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.l;
  var joinToString = kotlin_kotlin.$_$.o7;
  var joinToString_0 = kotlin_kotlin.$_$.p7;
  var backgroundImage = kotlin_org_jetbrains_compose_html_html_core.$_$.n3;
  var backgroundSize = kotlin_org_jetbrains_compose_html_html_core.$_$.r3;
  var backgroundClip = kotlin_org_jetbrains_compose_html_html_core.$_$.l3;
  var backgroundRepeat = kotlin_org_jetbrains_compose_html_html_core.$_$.q3;
  var backgroundPosition = kotlin_org_jetbrains_compose_html_html_core.$_$.p3;
  var backgroundAttachment = kotlin_org_jetbrains_compose_html_html_core.$_$.k3;
  var reversed = kotlin_kotlin.$_$.q8;
  var charSequenceLength = kotlin_kotlin.$_$.xa;
  var toList = kotlin_kotlin.$_$.i9;
  var backgroundOrigin = kotlin_org_jetbrains_compose_html_html_core.$_$.o3;
  var Color_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.i;
  var Color = kotlin_org_jetbrains_compose_html_html_core.$_$.x2;
  var Companion_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.m;
  var CSSBorder = kotlin_org_jetbrains_compose_html_html_core.$_$.n2;
  var width = kotlin_org_jetbrains_compose_html_html_core.$_$.s5;
  var style = kotlin_org_jetbrains_compose_html_html_core.$_$.n5;
  var color = kotlin_org_jetbrains_compose_html_html_core.$_$.z3;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.k5;
  var boxSizing = kotlin_org_jetbrains_compose_html_html_core.$_$.y3;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.i5;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.og;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var toString_0 = kotlin_kotlin.$_$.vg;
  var property = kotlin_org_jetbrains_compose_html_html_core.$_$.b3;
  var property_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.c3;
  var variable = kotlin_org_jetbrains_compose_html_html_core.$_$.e3;
  var variable_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.d3;
  var invoke = kotlin_org_jetbrains_compose_html_html_core.$_$.a3;
  var invoke_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.z2;
  var invoke_1 = kotlin_org_jetbrains_compose_html_html_core.$_$.y2;
  var StyleScope = kotlin_org_jetbrains_compose_html_html_core.$_$.g3;
  var copyToArray = kotlin_kotlin.$_$.x6;
  var titleCamelCaseToKebabCase = kotlin_com_varabyte_kobweb_browser_ext.$_$.d;
  var THROW_CCE = kotlin_kotlin.$_$.tf;
  var Annotation = kotlin_kotlin.$_$.ef;
  var lastOrNull = kotlin_kotlin.$_$.u7;
  var get_lastIndex = kotlin_kotlin.$_$.s7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.n1;
  var listOf = kotlin_kotlin.$_$.x7;
  var emptyList = kotlin_kotlin.$_$.a7;
  var addAll = kotlin_kotlin.$_$.x5;
  var ensureNotNull = kotlin_kotlin.$_$.lg;
  var gridTemplateColumns = kotlin_org_jetbrains_compose_html_html_core.$_$.p4;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.j;
  var display = kotlin_org_jetbrains_compose_html_html_core.$_$.e4;
  var gridTemplateRows = kotlin_org_jetbrains_compose_html_html_core.$_$.q4;
  var gridAutoColumns = kotlin_org_jetbrains_compose_html_html_core.$_$.n4;
  var gridAutoRows = kotlin_org_jetbrains_compose_html_html_core.$_$.o4;
  var StyleSheet_init_$Create$ = kotlin_org_jetbrains_compose_html_html_core.$_$.c;
  var CSSGroupingRuleDeclaration = kotlin_org_jetbrains_compose_html_html_core.$_$.o2;
  var wrapQuotesIfNecessary = kotlin_com_varabyte_kobweb_browser_ext.$_$.e;
  var listOfNotNull = kotlin_kotlin.$_$.w7;
  var isNumber = kotlin_kotlin.$_$.yb;
  var CSSVariable = kotlin_org_jetbrains_compose_html_html_core.$_$.w2;
  var getKClassFromExpression = kotlin_kotlin.$_$.c;
  var removeSuffix = kotlin_kotlin.$_$.fe;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.j6;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.k;
  var charSequenceGet = kotlin_kotlin.$_$.wa;
  var isWhitespace = kotlin_kotlin.$_$.be;
  var Number_0 = kotlin_kotlin.$_$.pf;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.b2;
  var initMetadataForObject = kotlin_kotlin.$_$.nb;
  var Collection = kotlin_kotlin.$_$.w4;
  var isInterface = kotlin_kotlin.$_$.wb;
  var checkCountOverflow = kotlin_kotlin.$_$.h6;
  var checkIndexOverflow = kotlin_kotlin.$_$.i6;
  var getOrNull = kotlin_kotlin.$_$.j7;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k1;
  var DisposableEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h;
  var DisposableEffectResult = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var ElementBuilder = kotlin_org_jetbrains_compose_html_html_core.$_$.w5;
  var TagElement = kotlin_org_jetbrains_compose_html_html_core.$_$.a6;
  var to = kotlin_kotlin.$_$.wg;
  var KProperty1 = kotlin_kotlin.$_$.bd;
  var getPropertyCallableRef = kotlin_kotlin.$_$.fb;
  var lazy = kotlin_kotlin.$_$.ng;
  var charArrayOf = kotlin_kotlin.$_$.ta;
  var split = kotlin_kotlin.$_$.ke;
  var removeSurrounding = kotlin_kotlin.$_$.he;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e1;
  var charCodeAt = kotlin_kotlin.$_$.va;
  var toString_1 = kotlin_kotlin.$_$.j2;
  var substring = kotlin_kotlin.$_$.re;
  var getStringHashCode = kotlin_kotlin.$_$.gb;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(ComparableAttrsScope, 'ComparableAttrsScope', ComparableAttrsScope_init_$Create$, VOID, [AttrsScope]);
  initMetadataForClass(DummyAttrsScope, 'DummyAttrsScope', DummyAttrsScope, VOID, [AttrsScope]);
  initMetadataForInterface(AlignItems, 'AlignItems');
  initMetadataForInterface(AlignItemsPosition, 'AlignItemsPosition', VOID, VOID, [AlignItems]);
  function get_Inherit() {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'inherit';
  }
  function get_Initial() {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'initial';
  }
  function get_Revert() {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'revert';
  }
  function get_RevertLayer() {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'revert-layer';
  }
  function get_Unset() {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'unset';
  }
  initMetadataForInterface(CssGlobalValues, 'CssGlobalValues');
  initMetadataForCompanion(Companion, VOID, [CssGlobalValues]);
  initMetadataForInterface(JustifyContent, 'JustifyContent');
  initMetadataForInterface(JustifyContentPosition, 'JustifyContentPosition', VOID, VOID, [JustifyContent]);
  initMetadataForCompanion(Companion_0, VOID, [CssGlobalValues]);
  initMetadataForClass(BaselineSet, 'BaselineSet', VOID, Enum);
  initMetadataForClass(OverflowStrategy, 'OverflowStrategy', VOID, Enum);
  initMetadataForInterface(JustifyItems, 'JustifyItems');
  initMetadataForInterface(JustifyItemsPosition, 'JustifyItemsPosition', VOID, VOID, [JustifyItems]);
  initMetadataForCompanion(Companion_1, VOID, [CssGlobalValues]);
  initMetadataForInterface(JustifySelf, 'JustifySelf');
  initMetadataForInterface(JustifySelfPosition, 'JustifySelfPosition', VOID, VOID, [JustifySelf]);
  initMetadataForCompanion(Companion_2, VOID, [CssGlobalValues]);
  initMetadataForInterface(Animation, 'Animation');
  initMetadataForInterface(Listable, 'Listable', VOID, VOID, [Animation]);
  initMetadataForCompanion(Companion_3, VOID, [CssGlobalValues]);
  initMetadataForCompanion(Companion_4);
  initMetadataForInterface(AnimationIterationCount, 'AnimationIterationCount');
  initMetadataForCompanion(Companion_5, VOID, [CssGlobalValues]);
  initMetadataForInterface(BackgroundColor, 'BackgroundColor');
  initMetadataForCompanion(Companion_6, VOID, [CssGlobalValues]);
  initMetadataForInterface(BackgroundOrigin, 'BackgroundOrigin');
  initMetadataForCompanion(Companion_7, VOID, [CssGlobalValues]);
  initMetadataForInterface(BackgroundClip, 'BackgroundClip');
  initMetadataForInterface(BackgroundRepeat, 'BackgroundRepeat');
  initMetadataForInterface(Mode, 'Mode', VOID, VOID, [BackgroundRepeat]);
  initMetadataForCompanion(Companion_8, VOID, [CssGlobalValues]);
  initMetadataForInterface(Background, 'Background');
  initMetadataForInterface(Listable_0, 'Listable', VOID, VOID, [Background]);
  initMetadataForCompanion(Companion_9, VOID, [CssGlobalValues]);
  initMetadataForCompanion(Companion_10, VOID, [CssGlobalValues]);
  initMetadataForInterface(BackgroundAttachment, 'BackgroundAttachment');
  initMetadataForCompanion(Companion_11, VOID, [CssGlobalValues]);
  initMetadataForInterface(BackgroundPosition, 'BackgroundPosition');
  initMetadataForCompanion(Companion_12, VOID, [CssGlobalValues]);
  initMetadataForInterface(BackgroundSize, 'BackgroundSize');
  initMetadataForInterface(BackgroundBlendMode, 'BackgroundBlendMode');
  initMetadataForInterface(Listable_1, 'Listable', VOID, VOID, [BackgroundBlendMode]);
  initMetadataForInterface(CssBlendModeValues, 'CssBlendModeValues');
  initMetadataForCompanion(Companion_13, VOID, [CssBlendModeValues, CssGlobalValues]);
  initMetadataForInterface(BoxShadow, 'BoxShadow');
  initMetadataForInterface(Listable_2, 'Listable', VOID, VOID, [BoxShadow]);
  initMetadataForCompanion(Companion_14, VOID, [CssGlobalValues]);
  initMetadataForCompanion(Companion_15, VOID, [CssGlobalValues]);
  initMetadataForInterface(BoxSizing, 'BoxSizing');
  initMetadataForClass(Edge, 'Edge');
  initMetadataForClass(EdgeXOrCenter, 'EdgeXOrCenter', VOID, Edge);
  initMetadataForClass(EdgeXOffset, 'EdgeXOffset');
  initMetadataForCompanion(Companion_16);
  initMetadataForClass(CSSPosition, 'CSSPosition', CSSPosition_init_$Create$);
  initMetadataForClass(EdgeYOrCenter, 'EdgeYOrCenter', VOID, Edge);
  initMetadataForClass(EdgeYOffset, 'EdgeYOffset');
  initMetadataForCompanion(Companion_17);
  initMetadataForClass(EdgeX, 'EdgeX', VOID, EdgeXOrCenter);
  initMetadataForClass(CenterX, 'CenterX', VOID, EdgeXOrCenter);
  initMetadataForClass(CenterY, 'CenterY', VOID, EdgeYOrCenter);
  initMetadataForClass(EdgeY, 'EdgeY', VOID, EdgeYOrCenter);
  initMetadataForClass(ColorInterpolationMethod, 'ColorInterpolationMethod');
  initMetadataForClass(RectangularColorSpace, 'RectangularColorSpace', VOID, ColorInterpolationMethod);
  initMetadataForClass(PolarColorSpace, 'PolarColorSpace', VOID, ColorInterpolationMethod);
  initMetadataForCompanion(Companion_18);
  initMetadataForCompanion(Companion_19, VOID, [CssGlobalValues]);
  initMetadataForInterface(ColorScheme, 'ColorScheme');
  initMetadataForCompanion(Companion_20);
  initMetadataForClass(HueInterpolationMethod, 'HueInterpolationMethod');
  initMetadataForClass(ComparableStyleScope, 'ComparableStyleScope', ComparableStyleScope, VOID, [StyleScope]);
  initMetadataForCompanion(Companion_21, VOID, [CssGlobalValues]);
  initMetadataForInterface(Cursor, 'Cursor');
  initMetadataForCompanion(Companion_22, VOID, [CssGlobalValues]);
  initMetadataForInterface(Appearance, 'Appearance');
  initMetadataForCompanion(Companion_23, VOID, [CssGlobalValues]);
  initMetadataForInterface(FontWeight, 'FontWeight');
  initMetadataForClass(GridTrackBuilderInRepeat, 'GridTrackBuilderInRepeat');
  initMetadataForClass(GridTrackBuilder, 'GridTrackBuilder', GridTrackBuilder, GridTrackBuilderInRepeat);
  initMetadataForClass(GridEntry, 'GridEntry');
  initMetadataForClass(TrackSize, 'TrackSize', VOID, GridEntry);
  initMetadataForClass(FitContent, 'FitContent', VOID, TrackSize);
  initMetadataForClass(MinMax, 'MinMax', VOID, TrackSize);
  initMetadataForClass(Flex, 'Flex', VOID, TrackSize);
  initMetadataForClass(Inflexible, 'Inflexible', VOID, TrackSize);
  initMetadataForClass(Keyword, 'Keyword', VOID, Inflexible);
  initMetadataForClass(Fixed, 'Fixed', VOID, Inflexible);
  initMetadataForCompanion(Companion_24);
  initMetadataForClass(Type, 'Type', VOID, Enum);
  initMetadataForClass(Repeat, 'Repeat', VOID, GridEntry);
  initMetadataForClass(Track, 'Track', VOID, Repeat);
  initMetadataForClass(Auto, 'Auto', VOID, Repeat);
  initMetadataForClass(LineNames, 'LineNames', VOID, GridEntry);
  initMetadataForCompanion(Companion_25);
  initMetadataForClass(GridDslMarker, 'GridDslMarker', VOID, VOID, [Annotation]);
  initMetadataForClass(GridBuilderInAuto, 'GridBuilderInAuto');
  initMetadataForClass(GridBuilder, 'GridBuilder', GridBuilder, GridBuilderInAuto);
  initMetadataForClass(CSSLayerRuleDeclaration, 'CSSLayerRuleDeclaration', VOID, VOID, [CSSGroupingRuleDeclaration]);
  initMetadataForCompanion(Companion_26, VOID, [CssGlobalValues]);
  initMetadataForInterface(VerticalAlign, 'VerticalAlign');
  initMetadataForCompanion(Companion_27, VOID, [CssGlobalValues]);
  initMetadataForInterface(ListStyleType, 'ListStyleType');
  initMetadataForCompanion(Companion_28, VOID, [CssGlobalValues]);
  initMetadataForInterface(ListStylePosition, 'ListStylePosition');
  initMetadataForCompanion(Companion_29, VOID, [CssGlobalValues]);
  initMetadataForInterface(ListStyle, 'ListStyle');
  initMetadataForCompanion(Companion_30, VOID, [CssGlobalValues]);
  initMetadataForInterface(ObjectFit, 'ObjectFit');
  initMetadataForCompanion(Companion_31, VOID, [CssGlobalValues]);
  initMetadataForInterface(Outline, 'Outline');
  initMetadataForCompanion(Companion_32, VOID, [CssGlobalValues]);
  initMetadataForInterface(OutlineWidth, 'OutlineWidth');
  initMetadataForInterface(Overflow, 'Overflow');
  initMetadataForInterface(SingleValue, 'SingleValue', VOID, VOID, [Overflow]);
  initMetadataForInterface(Mode_0, 'Mode', VOID, VOID, [SingleValue]);
  function get_Visible() {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'visible';
  }
  function get_Hidden() {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'hidden';
  }
  function get_Clip() {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'clip';
  }
  function get_Scroll() {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'scroll';
  }
  function get_Auto() {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'auto';
  }
  initMetadataForInterface(CssOverflowModeValues, 'CssOverflowModeValues');
  initMetadataForCompanion(Companion_33, VOID, [CssOverflowModeValues, CssGlobalValues]);
  initMetadataForClass(CSSScopeRuleDeclaration, 'CSSScopeRuleDeclaration', VOID, VOID, [CSSGroupingRuleDeclaration]);
  initMetadataForClass(StyleVariableNumberProvider, 'StyleVariableNumberProvider');
  initMetadataForClass(StyleVariable_1, 'StyleVariable', VOID, VOID, [CSSVariable]);
  initMetadataForClass(PropertyValue, 'PropertyValue', VOID, StyleVariable_1);
  initMetadataForClass(NumberValue, 'NumberValue', VOID, StyleVariable_1);
  initMetadataForClass(StringValue, 'StringValue', VOID, StyleVariable_1);
  initMetadataForClass(StyleVariablePropertyProvider, 'StyleVariablePropertyProvider');
  initMetadataForCompanion(Companion_34, VOID, [CssGlobalValues]);
  initMetadataForInterface(UserSelect, 'UserSelect');
  initMetadataForCompanion(Companion_35, VOID, [CssGlobalValues]);
  initMetadataForInterface(TextDecorationLine, 'TextDecorationLine');
  initMetadataForCompanion(Companion_36, VOID, [CssGlobalValues]);
  initMetadataForInterface(TextAlign, 'TextAlign');
  initMetadataForCompanion(Companion_37, VOID, [CssGlobalValues]);
  initMetadataForInterface(WhiteSpace, 'WhiteSpace');
  initMetadataForInterface(Transition, 'Transition');
  initMetadataForInterface(Listable_3, 'Listable', VOID, VOID, [Transition]);
  initMetadataForCompanion(Companion_38, VOID, [CssGlobalValues]);
  initMetadataForInterface(TransitionProperty, 'TransitionProperty');
  initMetadataForInterface(Name, 'Name', VOID, VOID, [TransitionProperty]);
  initMetadataForCompanion(Companion_39, VOID, [CssGlobalValues]);
  initMetadataForInterface(TransitionBehavior, 'TransitionBehavior');
  initMetadataForInterface(Listable_4, 'Listable', VOID, VOID, [TransitionBehavior]);
  initMetadataForCompanion(Companion_40, VOID, [CssGlobalValues]);
  initMetadataForCompanion(Companion_41, VOID, [CssGlobalValues]);
  initMetadataForInterface(CSSImage, 'CSSImage');
  initMetadataForClass(CalcNum, 'CalcNum', VOID, Number_0);
  function times(_this__u8e3s4, b) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'calc(' + toString(_this__u8e3s4) + ' * ' + toString(b) + ')';
  }
  function times_0(_this__u8e3s4, unit) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'calc(' + toString(_this__u8e3s4) + ' * ' + toString(unit) + ')';
  }
  function div(_this__u8e3s4, num) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'calc(' + toString(_this__u8e3s4) + ' / ' + toString(num) + ')';
  }
  function plus(_this__u8e3s4, b) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'calc(' + toString(_this__u8e3s4) + ' + ' + toString(b) + ')';
  }
  function minus(_this__u8e3s4, b) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'calc(' + toString(_this__u8e3s4) + ' - ' + toString(b) + ')';
  }
  function unaryMinus(_this__u8e3s4) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'calc(-1 * ' + toString(_this__u8e3s4) + ')';
  }
  function unaryPlus(_this__u8e3s4) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'calc(1 * ' + toString(_this__u8e3s4) + ')';
  }
  function num(num) {
    return new CalcNum(toString(num));
  }
  initMetadataForInterface(CalcScope, 'CalcScope');
  initMetadataForObject(CalcScopeInstance, 'CalcScopeInstance', VOID, VOID, [CalcScope]);
  initMetadataForClass(Direction, 'Direction', VOID, Enum);
  initMetadataForInterface(Gradient, 'Gradient');
  initMetadataForClass(LinearGradient, 'LinearGradient', VOID, VOID, [Gradient]);
  initMetadataForClass(Base, 'Base', VOID, LinearGradient);
  initMetadataForClass(ByDirection, 'ByDirection', VOID, Base);
  initMetadataForClass(ByAngle, 'ByAngle', VOID, Base);
  initMetadataForClass(Entry, 'Entry');
  initMetadataForClass(Color_0, 'Color', VOID, Entry);
  initMetadataForClass(Simple, 'Simple', VOID, Color_0);
  initMetadataForClass(Stop, 'Stop', VOID, Color_0);
  initMetadataForClass(StopRange, 'StopRange', VOID, Color_0);
  initMetadataForClass(Hint, 'Hint', VOID, Entry);
  initMetadataForClass(ColorStopsBuilder, 'ColorStopsBuilder', ColorStopsBuilder);
  initMetadataForClass(CSSUrl, 'CSSUrl');
  initMetadataForClass(ElementRefScope$RefCallback$Simple$invoke$$inlined$onDispose$1, VOID, VOID, VOID, [DisposableEffectResult]);
  initMetadataForClass(RefCallback, 'RefCallback');
  initMetadataForClass(Simple_0, 'Simple', VOID, RefCallback);
  initMetadataForClass(Disposable, 'Disposable', VOID, RefCallback);
  initMetadataForClass(KeysToEffect, 'KeysToEffect');
  initMetadataForClass(Builder, 'Builder', Builder);
  initMetadataForClass(ElementRefScope, 'ElementRefScope');
  initMetadataForCompanion(Companion_42);
  initMetadataForClass(GenericNamespacedElementBuilder, 'GenericNamespacedElementBuilder', VOID, VOID, [ElementBuilder]);
  initMetadataForCompanion(Companion_43);
  initMetadataForClass(GenericElementBuilder, 'GenericElementBuilder', VOID, VOID, [ElementBuilder]);
  initMetadataForCompanion(Companion_44);
  initMetadataForClass(ViewBox, 'ViewBox');
  initMetadataForCompanion(Companion_45);
  initMetadataForClass(SVGElementAttrsScope, 'SVGElementAttrsScope', VOID, VOID, [AttrsScope]);
  function stroke(value) {
    return this.attr_w68641_k$('stroke', toString(value));
  }
  function stroke_0(value) {
    return this.attr_w68641_k$('stroke', value.toString());
  }
  function stroke_1(id) {
    return this.attr_w68641_k$('stroke', _SvgId___get_urlReference__impl__ehpa8t(id));
  }
  function strokeDashArray(values) {
    this.attr_w68641_k$('stroke-dasharray', joinToString_0(values, ',', VOID, VOID, VOID, VOID, SvgPresentationAttrs$strokeDashArray$lambda));
  }
  function strokeDashArray_0(values) {
    this.attr_w68641_k$('stroke-dasharray', joinToString_0(values, ',', VOID, VOID, VOID, VOID, SvgPresentationAttrs$strokeDashArray$lambda_0));
  }
  function strokeDashOffset(value) {
    return this.attr_w68641_k$('stroke-dashoffset', toString(value));
  }
  function strokeDashOffset_0(value) {
    return this.attr_w68641_k$('stroke-dashoffset', toString(value));
  }
  function strokeLineCap(value) {
    return this.attr_w68641_k$('stroke-linecap', value.toString());
  }
  function strokeLineJoin(value) {
    return this.attr_w68641_k$('stroke-linejoin', value.toString());
  }
  function strokeMiterLimit(value) {
    return this.attr_w68641_k$('stroke-miterlimit', toString(value));
  }
  function strokeOpacity(value) {
    return this.attr_w68641_k$('stroke-opacity', toString(value));
  }
  function strokeWidth(value) {
    return this.attr_w68641_k$('stroke-width', toString(value));
  }
  function strokeWidth_0(value) {
    return this.attr_w68641_k$('stroke-width', toString(value));
  }
  function fill(value) {
    return this.attr_w68641_k$('fill', toString(value));
  }
  function fill_0(value) {
    return this.attr_w68641_k$('fill', value.toString());
  }
  function fill_1(id) {
    return this.attr_w68641_k$('fill', _SvgId___get_urlReference__impl__ehpa8t(id));
  }
  function fillRule(value) {
    return this.attr_w68641_k$('fill-rule', value.toString());
  }
  function fillOpacity(value) {
    return this.attr_w68641_k$('fill-opacity', toString(value));
  }
  function filter(id) {
    return this.attr_w68641_k$('filter', _SvgId___get_urlReference__impl__ehpa8t(id));
  }
  function floodColor(color) {
    return this.attr_w68641_k$('flood-color', toString(color));
  }
  function floodOpacity(value) {
    return this.attr_w68641_k$('flood-opacity', toString(value));
  }
  function lightingColor(color) {
    return this.attr_w68641_k$('lighting-color', toString(color));
  }
  initMetadataForInterface(SvgPresentationAttrs, 'SvgPresentationAttrs', VOID, VOID, [AttrsScope]);
  initMetadataForClass(SVGGraphicalElementAttrsScope, 'SVGGraphicalElementAttrsScope', VOID, SVGElementAttrsScope, [SVGElementAttrsScope, SvgPresentationAttrs]);
  initMetadataForClass(SVGContainerElementAttrsScope, 'SVGContainerElementAttrsScope', VOID, SVGGraphicalElementAttrsScope);
  function x(value) {
    this.attr_w68641_k$('x', toString(value));
  }
  function x_0(value) {
    this.attr_w68641_k$('x', toString(value));
  }
  function y(value) {
    this.attr_w68641_k$('y', toString(value));
  }
  function y_0(value) {
    this.attr_w68641_k$('y', toString(value));
  }
  initMetadataForInterface(SvgCoordinateAttrs, 'SvgCoordinateAttrs', VOID, VOID, [AttrsScope]);
  function height(value) {
    this.attr_w68641_k$('height', toString(value));
  }
  function height_0(value) {
    this.attr_w68641_k$('height', toString(value));
  }
  function width_0(value) {
    this.attr_w68641_k$('width', toString(value));
  }
  function width_1(value) {
    this.attr_w68641_k$('width', toString(value));
  }
  initMetadataForInterface(SvgLengthAttrs, 'SvgLengthAttrs', VOID, VOID, [AttrsScope]);
  function viewBox(x, y, width, height) {
    this.attr_w68641_k$('viewBox', toString(x) + ' ' + toString(y) + ' ' + toString(width) + ' ' + toString(height));
  }
  function viewBox_0(viewBox) {
    this.viewBox_s5pn86_k$(viewBox.x_1, viewBox.y_1, viewBox.width_1, viewBox.height_1);
  }
  initMetadataForInterface(SvgViewBoxAttrs, 'SvgViewBoxAttrs', VOID, VOID, [AttrsScope]);
  initMetadataForClass(SVGSvgAttrsScope, 'SVGSvgAttrsScope', VOID, SVGContainerElementAttrsScope, [SVGContainerElementAttrsScope, SvgCoordinateAttrs, SvgLengthAttrs, SvgViewBoxAttrs]);
  initMetadataForCompanion(Companion_46);
  initMetadataForClass(SVGPathAttrsScope, 'SVGPathAttrsScope', VOID, SVGGraphicalElementAttrsScope);
  initMetadataForClass(SVGStrokeLineCap, 'SVGStrokeLineCap', VOID, Enum);
  initMetadataForCompanion(Companion_47);
  function cx(value) {
    this.attr_w68641_k$('cx', toString(value));
  }
  function cx_0(value) {
    this.attr_w68641_k$('cx', toString(value));
  }
  function cy(value) {
    this.attr_w68641_k$('cy', toString(value));
  }
  function cy_0(value) {
    this.attr_w68641_k$('cy', toString(value));
  }
  initMetadataForInterface(SvgCenterCoordinateAttrs, 'SvgCenterCoordinateAttrs', VOID, VOID, [AttrsScope]);
  initMetadataForClass(SVGCircleAttrsScope, 'SVGCircleAttrsScope', VOID, SVGGraphicalElementAttrsScope, [SVGGraphicalElementAttrsScope, SvgCenterCoordinateAttrs]);
  initMetadataForClass(SVGFillType, 'SVGFillType', VOID, Enum);
  initMetadataForClass(SVGStrokeType, 'SVGStrokeType', VOID, Enum);
  initMetadataForClass(SVGPathDataScope, 'SVGPathDataScope');
  initMetadataForClass(SVGTransformScope, 'SVGTransformScope');
  initMetadataForClass(SvgId, 'SvgId');
  initMetadataForClass(SVGStrokeLineJoin, 'SVGStrokeLineJoin', VOID, Enum);
  initMetadataForClass(SVGFillRule, 'SVGFillRule', VOID, Enum);
  //endregion
  var com_varabyte_kobweb_compose_attributes_ComparableAttrsScope$stable;
  function _get_wrapped__s2ip8($this) {
    return $this.wrapped_1;
  }
  function ComparableAttrsScope_init_$Init$($this) {
    ComparableAttrsScope.call($this, new DummyAttrsScope());
    return $this;
  }
  function ComparableAttrsScope_init_$Create$() {
    return ComparableAttrsScope_init_$Init$(objectCreate(protoOf(ComparableAttrsScope)));
  }
  function ComparableAttrsScope(wrapped) {
    this.wrapped_1 = wrapped;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.attributes_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_0.classes_1 = LinkedHashSet_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_1.listeners_1 = LinkedHashSet_init_$Create$();
    this.style_1 = null;
  }
  protoOf(ComparableAttrsScope).get_attributes_dgqof4_k$ = function () {
    return this.attributes_1;
  };
  protoOf(ComparableAttrsScope).get_classes_fds01p_k$ = function () {
    return this.classes_1;
  };
  protoOf(ComparableAttrsScope).get_listeners_bn2kiy_k$ = function () {
    return this.listeners_1;
  };
  protoOf(ComparableAttrsScope).set_style_x1cred_k$ = function (_set____db54di) {
    this.style_1 = _set____db54di;
  };
  protoOf(ComparableAttrsScope).get_style_iyqetk_k$ = function () {
    return this.style_1;
  };
  protoOf(ComparableAttrsScope).attr_w68641_k$ = function (attr, value) {
    // Inline function 'kotlin.collections.set' call
    this.attributes_1.put_4fpzoq_k$(attr, value);
    this.wrapped_1.attr_w68641_k$(attr, value);
    return this;
  };
  protoOf(ComparableAttrsScope).classes_ephr7k_k$ = function (classes) {
    this.classes_1.addAll_4lagoh_k$(classes);
  };
  protoOf(ComparableAttrsScope).prop_cha5mt_k$ = function (update, value) {
    this.wrapped_1.prop_cha5mt_k$(update, value);
  };
  protoOf(ComparableAttrsScope).registerEventListener_oiyxlj_k$ = function (listener) {
    this.listeners_1.add_utx5q5_k$(listener);
    this.wrapped_1.registerEventListener_oiyxlj_k$(listener);
  };
  protoOf(ComparableAttrsScope).style_xwwy6r_k$ = function (builder) {
    var tmp0_elvis_lhs = this.style_1;
    var style = tmp0_elvis_lhs == null ? new ComparableStyleScope() : tmp0_elvis_lhs;
    builder(style);
    this.style_1 = style;
    this.wrapped_1.style_xwwy6r_k$(builder);
  };
  protoOf(ComparableAttrsScope).ref_wkg4fv_k$ = function (effect) {
    this.wrapped_1.ref_o4g25g_k$(effect);
  };
  protoOf(ComparableAttrsScope).ref_o4g25g_k$ = function (effect) {
    return this.ref_wkg4fv_k$(effect);
  };
  protoOf(ComparableAttrsScope).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof ComparableAttrsScope) {
      tmp_2 = equals(other.attributes_1, this.attributes_1);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = equals(other.classes_1, this.classes_1);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals(other.listeners_1, this.listeners_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(other.style_1, this.style_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComparableAttrsScope).hashCode = function () {
    var result = hashCode(this.attributes_1);
    result = imul(31, result) + hashCode(this.classes_1) | 0;
    result = imul(31, result) + hashCode(this.listeners_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.style_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  function DummyAttrsScope() {
  }
  protoOf(DummyAttrsScope).attr_w68641_k$ = function (attr, value) {
    return this;
  };
  protoOf(DummyAttrsScope).classes_ephr7k_k$ = function (classes) {
    return Unit_getInstance();
  };
  protoOf(DummyAttrsScope).prop_cha5mt_k$ = function (update, value) {
    return Unit_getInstance();
  };
  protoOf(DummyAttrsScope).registerEventListener_oiyxlj_k$ = function (listener) {
    return Unit_getInstance();
  };
  protoOf(DummyAttrsScope).style_xwwy6r_k$ = function (builder) {
    return Unit_getInstance();
  };
  protoOf(DummyAttrsScope).ref_wkg4fv_k$ = function (effect) {
    return Unit_getInstance();
  };
  protoOf(DummyAttrsScope).ref_o4g25g_k$ = function (effect) {
    return this.ref_wkg4fv_k$(effect);
  };
  var com_varabyte_kobweb_compose_attributes_SyntheticEventListener$stable;
  var com_varabyte_kobweb_compose_attributes_TransitionEventListener$stable;
  function ariaHidden(_this__u8e3s4, value) {
    value = value === VOID ? true : value;
    _this__u8e3s4.attr_w68641_k$('aria-hidden', value.toString());
  }
  function ariaDisabled(_this__u8e3s4, value) {
    value = value === VOID ? true : value;
    _this__u8e3s4.attr_w68641_k$('aria-disabled', value.toString());
  }
  function alignItems(_this__u8e3s4, alignItems) {
    _this__u8e3s4.property_npxg1h_k$('align-items', alignItems);
  }
  function AlignItemsPosition() {
  }
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).get_Normal_22avww_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'normal';
  };
  protoOf(Companion).get_Stretch_2brthg_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'stretch';
  };
  protoOf(Companion).get_Center_3arb0i_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'center';
  };
  protoOf(Companion).get_Start_ih4i6x_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'start';
  };
  protoOf(Companion).get_End_18ju7i_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'end';
  };
  protoOf(Companion).get_SelfStart_di8gbx_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'self-start';
  };
  protoOf(Companion).get_SelfEnd_9ir8ka_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'self-end';
  };
  protoOf(Companion).get_FlexStart_cfavq8_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'flex-start';
  };
  protoOf(Companion).get_FlexEnd_fz7iu1_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'flex-end';
  };
  protoOf(Companion).get_Baseline_bu5gku_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toValue((null == null ? true : null instanceof BaselineSet) ? null : null);
  };
  protoOf(Companion).get_FirstBaseline_dztmto_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toValue(BaselineSet_First_getInstance());
  };
  protoOf(Companion).get_LastBaseline_ldoo6c_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toValue(BaselineSet_Last_getInstance());
  };
  protoOf(Companion).Safe_nudcv4_k$ = function (position) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toValue_0(OverflowStrategy_Safe_getInstance(), position);
  };
  protoOf(Companion).Unsafe_932xll_k$ = function (position) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toValue_0(OverflowStrategy_Unsafe_getInstance(), position);
  };
  var Companion_instance;
  function Companion_getInstance_2() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function AlignItems() {
  }
  function justifyContent(_this__u8e3s4, justifyContent) {
    _this__u8e3s4.property_npxg1h_k$('justify-content', justifyContent);
  }
  function JustifyContentPosition() {
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).get_Normal_22avww_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'normal';
  };
  protoOf(Companion_0).get_Center_3arb0i_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'center';
  };
  protoOf(Companion_0).get_Start_ih4i6x_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'start';
  };
  protoOf(Companion_0).get_End_18ju7i_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'end';
  };
  protoOf(Companion_0).get_FlexStart_cfavq8_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'flex-start';
  };
  protoOf(Companion_0).get_FlexEnd_fz7iu1_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'flex-end';
  };
  protoOf(Companion_0).get_Left_wo5bw0_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'left';
  };
  protoOf(Companion_0).get_Right_igdsyb_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'right';
  };
  protoOf(Companion_0).get_SpaceBetween_5p3wqd_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'space-between';
  };
  protoOf(Companion_0).get_SpaceAround_1tvu22_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'space-around';
  };
  protoOf(Companion_0).get_SpaceEvenly_3s2yx0_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'space-evenly';
  };
  protoOf(Companion_0).get_Stretch_2brthg_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'stretch';
  };
  protoOf(Companion_0).Safe_hanrce_k$ = function (position) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toValue_0(OverflowStrategy_Safe_getInstance(), position);
  };
  protoOf(Companion_0).Unsafe_nn34c5_k$ = function (position) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toValue_0(OverflowStrategy_Unsafe_getInstance(), position);
  };
  var Companion_instance_0;
  function Companion_getInstance_3() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function JustifyContent() {
  }
  function toValue(_this__u8e3s4) {
    var self_0 = _this__u8e3s4;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    if (!(self_0 == null)) {
      this_0.append_22ad7x_k$(self_0.toString());
      this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(32));
    }
    this_0.append_22ad7x_k$('baseline');
    return this_0.toString();
  }
  var BaselineSet_First_instance;
  var BaselineSet_Last_instance;
  function values() {
    return [BaselineSet_First_getInstance(), BaselineSet_Last_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'First':
        return BaselineSet_First_getInstance();
      case 'Last':
        return BaselineSet_Last_getInstance();
      default:
        BaselineSet_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var BaselineSet_entriesInitialized;
  function BaselineSet_initEntries() {
    if (BaselineSet_entriesInitialized)
      return Unit_getInstance();
    BaselineSet_entriesInitialized = true;
    BaselineSet_First_instance = new BaselineSet('First', 0);
    BaselineSet_Last_instance = new BaselineSet('Last', 1);
  }
  var $ENTRIES;
  function BaselineSet(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(BaselineSet).toString = function () {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.get_name_woqyms_k$().toLowerCase();
  };
  function toValue_0(_this__u8e3s4, position) {
    return _this__u8e3s4.toString() + ' ' + toString(position);
  }
  var OverflowStrategy_Safe_instance;
  var OverflowStrategy_Unsafe_instance;
  function values_0() {
    return [OverflowStrategy_Safe_getInstance(), OverflowStrategy_Unsafe_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'Safe':
        return OverflowStrategy_Safe_getInstance();
      case 'Unsafe':
        return OverflowStrategy_Unsafe_getInstance();
      default:
        OverflowStrategy_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var OverflowStrategy_entriesInitialized;
  function OverflowStrategy_initEntries() {
    if (OverflowStrategy_entriesInitialized)
      return Unit_getInstance();
    OverflowStrategy_entriesInitialized = true;
    OverflowStrategy_Safe_instance = new OverflowStrategy('Safe', 0);
    OverflowStrategy_Unsafe_instance = new OverflowStrategy('Unsafe', 1);
  }
  var $ENTRIES_0;
  function OverflowStrategy(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(OverflowStrategy).toString = function () {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.get_name_woqyms_k$().toLowerCase();
  };
  function justifyItems(_this__u8e3s4, justifyItems) {
    _this__u8e3s4.property_npxg1h_k$('justify-items', justifyItems);
  }
  function JustifyItemsPosition() {
  }
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).get_Normal_22avww_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'normal';
  };
  protoOf(Companion_1).get_Stretch_2brthg_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'stretch';
  };
  protoOf(Companion_1).get_Center_3arb0i_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'center';
  };
  protoOf(Companion_1).get_Start_ih4i6x_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'start';
  };
  protoOf(Companion_1).get_End_18ju7i_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'end';
  };
  protoOf(Companion_1).get_FlexStart_cfavq8_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'flex-start';
  };
  protoOf(Companion_1).get_FlexEnd_fz7iu1_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'flex-end';
  };
  protoOf(Companion_1).get_SelfStart_di8gbx_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'self-start';
  };
  protoOf(Companion_1).get_SelfEnd_9ir8ka_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'self-end';
  };
  protoOf(Companion_1).get_Left_wo5bw0_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'left';
  };
  protoOf(Companion_1).get_Right_igdsyb_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'right';
  };
  protoOf(Companion_1).get_Baseline_bu5gku_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toValue((null == null ? true : null instanceof BaselineSet) ? null : null);
  };
  protoOf(Companion_1).get_FirstBaseline_dztmto_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toValue(BaselineSet_First_getInstance());
  };
  protoOf(Companion_1).get_LastBaseline_ldoo6c_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toValue(BaselineSet_Last_getInstance());
  };
  protoOf(Companion_1).Safe_n4n8gl_k$ = function (position) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toValue_0(OverflowStrategy_Safe_getInstance(), position);
  };
  protoOf(Companion_1).Unsafe_kggy3o_k$ = function (position) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toValue_0(OverflowStrategy_Unsafe_getInstance(), position);
  };
  var Companion_instance_1;
  function Companion_getInstance_4() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function JustifyItems() {
  }
  function justifySelf(_this__u8e3s4, justifySelf) {
    _this__u8e3s4.property_npxg1h_k$('justify-self', justifySelf);
  }
  function JustifySelfPosition() {
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  protoOf(Companion_2).get_Auto_wnyn88_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'auto';
  };
  protoOf(Companion_2).get_Normal_22avww_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'normal';
  };
  protoOf(Companion_2).get_Stretch_2brthg_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'stretch';
  };
  protoOf(Companion_2).get_Center_3arb0i_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'center';
  };
  protoOf(Companion_2).get_Start_ih4i6x_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'start';
  };
  protoOf(Companion_2).get_End_18ju7i_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'end';
  };
  protoOf(Companion_2).get_SelfStart_di8gbx_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'self-start';
  };
  protoOf(Companion_2).get_SelfEnd_9ir8ka_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'self-end';
  };
  protoOf(Companion_2).get_FlexStart_cfavq8_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'flex-start';
  };
  protoOf(Companion_2).get_FlexEnd_fz7iu1_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'flex-end';
  };
  protoOf(Companion_2).get_Left_wo5bw0_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'left';
  };
  protoOf(Companion_2).get_Right_igdsyb_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'right';
  };
  protoOf(Companion_2).get_Baseline_bu5gku_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toValue((null == null ? true : null instanceof BaselineSet) ? null : null);
  };
  protoOf(Companion_2).get_FirstBaseline_dztmto_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toValue(BaselineSet_First_getInstance());
  };
  protoOf(Companion_2).get_LastBaseline_ldoo6c_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toValue(BaselineSet_Last_getInstance());
  };
  protoOf(Companion_2).Safe_wxt3v1_k$ = function (position) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toValue_0(OverflowStrategy_Safe_getInstance(), position);
  };
  protoOf(Companion_2).Unsafe_jz6bzo_k$ = function (position) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toValue_0(OverflowStrategy_Unsafe_getInstance(), position);
  };
  var Companion_instance_2;
  function Companion_getInstance_5() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function JustifySelf() {
  }
  function BaselineSet_First_getInstance() {
    BaselineSet_initEntries();
    return BaselineSet_First_instance;
  }
  function BaselineSet_Last_getInstance() {
    BaselineSet_initEntries();
    return BaselineSet_Last_instance;
  }
  function OverflowStrategy_Safe_getInstance() {
    OverflowStrategy_initEntries();
    return OverflowStrategy_Safe_instance;
  }
  function OverflowStrategy_Unsafe_getInstance() {
    OverflowStrategy_initEntries();
    return OverflowStrategy_Unsafe_instance;
  }
  function Listable() {
  }
  function Companion_3() {
    Companion_instance_3 = this;
  }
  protoOf(Companion_3).of_a1x18a_k$ = function (name, duration, timingFunction, delay, iterationCount, direction, fillMode, playState) {
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$();
    if (duration == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this_0.add_utx5q5_k$(toString(duration));
    }
    if (timingFunction == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this_0.add_utx5q5_k$(toString(timingFunction));
    }
    if (!(delay == null)) {
      if (duration == null) {
        this_0.add_utx5q5_k$('0s');
      }
      this_0.add_utx5q5_k$(toString(delay));
    }
    if (iterationCount == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this_0.add_utx5q5_k$(toString(iterationCount));
    }
    if (direction == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this_0.add_utx5q5_k$(toString(direction));
    }
    if (fillMode == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this_0.add_utx5q5_k$(toString(fillMode));
    }
    if (playState == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$11 = toString(playState).toLowerCase();
      this_0.add_utx5q5_k$(tmp$ret$11);
    }
    this_0.add_utx5q5_k$(name);
    var tmp$ret$17 = this_0.build_nmwvly_k$();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return joinToString(tmp$ret$17, ' ');
  };
  protoOf(Companion_3).of$default_qt93kr_k$ = function (name, duration, timingFunction, delay, iterationCount, direction, fillMode, playState, $super) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    iterationCount = iterationCount === VOID ? null : iterationCount;
    direction = direction === VOID ? null : direction;
    fillMode = fillMode === VOID ? null : fillMode;
    playState = playState === VOID ? null : playState;
    return $super === VOID ? this.of_a1x18a_k$(name, duration, timingFunction, delay, iterationCount, direction, fillMode, playState) : $super.of_a1x18a_k$.call(this, name, duration, timingFunction, delay, iterationCount, direction, fillMode, playState);
  };
  protoOf(Companion_3).list_u9cc4r_k$ = function (animations) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return joinToString_0(animations);
  };
  protoOf(Companion_3).get_None_wo6tgh_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'none';
  };
  var Companion_instance_3;
  function Companion_getInstance_6() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function Animation() {
  }
  function Companion_4() {
    Companion_instance_4 = this;
  }
  protoOf(Companion_4).of_h621qs_k$ = function (count) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toString(count);
  };
  protoOf(Companion_4).get_Infinite_rvchkz_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'infinite';
  };
  var Companion_instance_4;
  function Companion_getInstance_7() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function AnimationIterationCount() {
  }
  function Companion_5() {
    Companion_instance_5 = this;
  }
  protoOf(Companion_5).get_CurrentColor_v4grmb_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'currentcolor';
  };
  protoOf(Companion_5).get_Transparent_cxh4g9_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'transparent';
  };
  var Companion_instance_5;
  function Companion_getInstance_8() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function BackgroundColor() {
  }
  function backgroundImage_0(_this__u8e3s4, backgroundImage_0) {
    backgroundImage(_this__u8e3s4, toString(backgroundImage_0));
  }
  function Companion_6() {
    Companion_instance_6 = this;
  }
  protoOf(Companion_6).get_BorderBox_q3yb4a_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'border-box';
  };
  protoOf(Companion_6).get_PaddingBox_ea98df_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'padding-box';
  };
  protoOf(Companion_6).get_ContentBox_h63h2z_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'content-box';
  };
  var Companion_instance_6;
  function Companion_getInstance_9() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function BackgroundOrigin() {
  }
  function backgroundSize_0(_this__u8e3s4, backgroundSize_0) {
    backgroundSize(_this__u8e3s4, toString(backgroundSize_0));
  }
  function Companion_7() {
    Companion_instance_7 = this;
  }
  protoOf(Companion_7).get_BorderBox_q3yb4a_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'border-box';
  };
  protoOf(Companion_7).get_PaddingBox_ea98df_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'padding-box';
  };
  protoOf(Companion_7).get_ContentBox_h63h2z_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'content-box';
  };
  protoOf(Companion_7).get_Text_woag7q_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'text';
  };
  var Companion_instance_7;
  function Companion_getInstance_10() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function BackgroundClip() {
  }
  function backgroundClip_0(_this__u8e3s4, backgroundClip_0) {
    backgroundClip(_this__u8e3s4, toString(backgroundClip_0));
  }
  function backgroundImage_1(_this__u8e3s4, url) {
    return backgroundImage_0(_this__u8e3s4, Companion_getInstance_44().of_dq0j3b_k$(url));
  }
  function backgroundRepeat_0(_this__u8e3s4, backgroundRepeat_0) {
    backgroundRepeat(_this__u8e3s4, toString(backgroundRepeat_0));
  }
  function Mode() {
  }
  function Companion_8() {
    Companion_instance_8 = this;
  }
  protoOf(Companion_8).of_4kldwp_k$ = function (horizontal, vertical) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toString(horizontal) + ' ' + toString(vertical);
  };
  protoOf(Companion_8).get_RepeatX_o4yei4_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'repeat-x';
  };
  protoOf(Companion_8).get_RepeatY_o4yei3_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'repeat-y';
  };
  protoOf(Companion_8).get_Repeat_3sxzno_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'repeat';
  };
  protoOf(Companion_8).get_Space_ih1xvh_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'space';
  };
  protoOf(Companion_8).get_Round_ighxdx_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'round';
  };
  protoOf(Companion_8).get_NoRepeat_ko4dp7_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'no-repeat';
  };
  var Companion_instance_8;
  function Companion_getInstance_11() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function BackgroundRepeat() {
  }
  function backgroundPosition_0(_this__u8e3s4, backgroundPosition_0) {
    backgroundPosition(_this__u8e3s4, toString(backgroundPosition_0));
  }
  function backgroundAttachment_0(_this__u8e3s4, backgroundAttachment_0) {
    backgroundAttachment(_this__u8e3s4, toString(backgroundAttachment_0));
  }
  function _list($this, color, backgrounds) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    $l$block: {
      if (color == null && backgrounds.isEmpty_y1axqb_k$()) {
        break $l$block;
      }
      this_0.append_22ad7x_k$(joinToString(reversed(backgrounds)));
      if (!(color == null)) {
        // Inline function 'kotlin.text.isNotEmpty' call
        if (charSequenceLength(this_0) > 0) {
          this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(32));
        }
        this_0.append_t8pm91_k$(color);
      }
    }
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this_0.toString();
  }
  function Listable_0() {
  }
  function Companion_9() {
    Companion_instance_9 = this;
  }
  protoOf(Companion_9).get_None_wo6tgh_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'none';
  };
  protoOf(Companion_9).of_b4c56o_k$ = function (image, repeat, size, position, origin, clip, attachment) {
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$();
    if (image == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this_0.add_utx5q5_k$(toString(image));
    }
    if (repeat == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this_0.add_utx5q5_k$(repeat);
    }
    if (position == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this_0.add_utx5q5_k$(toString(position));
    }
    if (size == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      if (position == null) {
        this_0.add_utx5q5_k$(Companion_getInstance_14().of_ke4f5d_k$(Companion_getInstance_19().get_TopLeft_9xuhv7_k$()));
      }
      this_0.add_utx5q5_k$('/');
      this_0.add_utx5q5_k$(toString(size));
    }
    if (origin == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this_0.add_utx5q5_k$(origin);
      if (clip == null) {
        this_0.add_utx5q5_k$(toString(Companion_getInstance_10().get_BorderBox_q3yb4a_k$()));
      }
    }
    if (clip == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      if (origin == null) {
        this_0.add_utx5q5_k$(toString(Companion_getInstance_9().get_PaddingBox_ea98df_k$()));
      }
      this_0.add_utx5q5_k$(clip);
    }
    if (attachment == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this_0.add_utx5q5_k$(attachment);
    }
    var tmp$ret$17 = this_0.build_nmwvly_k$();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return joinToString(tmp$ret$17, ' ');
  };
  protoOf(Companion_9).of$default_8buf8f_k$ = function (image, repeat, size, position, origin, clip, attachment, $super) {
    image = image === VOID ? null : image;
    repeat = repeat === VOID ? null : repeat;
    size = size === VOID ? null : size;
    position = position === VOID ? null : position;
    origin = origin === VOID ? null : origin;
    clip = clip === VOID ? null : clip;
    attachment = attachment === VOID ? null : attachment;
    return $super === VOID ? this.of_b4c56o_k$(image, repeat, size, position, origin, clip, attachment) : $super.of_b4c56o_k$.call(this, image, repeat, size, position, origin, clip, attachment);
  };
  protoOf(Companion_9).of_67etvb_k$ = function (image, repeat, size, position, blend, origin, clip, attachment) {
    return this.of_b4c56o_k$(image, repeat, size, position, origin, clip, attachment);
  };
  protoOf(Companion_9).of$default_46vpca_k$ = function (image, repeat, size, position, blend, origin, clip, attachment, $super) {
    image = image === VOID ? null : image;
    repeat = repeat === VOID ? null : repeat;
    size = size === VOID ? null : size;
    position = position === VOID ? null : position;
    origin = origin === VOID ? null : origin;
    clip = clip === VOID ? null : clip;
    attachment = attachment === VOID ? null : attachment;
    return $super === VOID ? this.of_67etvb_k$(image, repeat, size, position, blend, origin, clip, attachment) : $super.of_67etvb_k$.call(this, image, repeat, size, position, blend, origin, clip, attachment);
  };
  protoOf(Companion_9).list_mz8shl_k$ = function (backgrounds) {
    return _list(this, null, toList(backgrounds));
  };
  protoOf(Companion_9).list_fmd9ox_k$ = function (color, backgrounds) {
    return _list(this, color, toList(backgrounds));
  };
  var Companion_instance_9;
  function Companion_getInstance_12() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function Background() {
  }
  function backgroundColor(_this__u8e3s4, backgroundColor) {
    _this__u8e3s4.property_npxg1h_k$('background-color', backgroundColor);
  }
  function background(_this__u8e3s4, background) {
    _this__u8e3s4.property_npxg1h_k$('background', background);
  }
  function backgroundRepeat_1(_this__u8e3s4, horizontal, vertical) {
    backgroundRepeat_0(_this__u8e3s4, Companion_getInstance_11().of_4kldwp_k$(horizontal, vertical));
  }
  function Companion_10() {
    Companion_instance_10 = this;
  }
  protoOf(Companion_10).get_Scroll_48xiie_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'scroll';
  };
  protoOf(Companion_10).get_Fixed_i9smcr_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'fixed';
  };
  protoOf(Companion_10).get_Local_id6s6a_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'local';
  };
  var Companion_instance_10;
  function Companion_getInstance_13() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function BackgroundAttachment() {
  }
  function Companion_11() {
    Companion_instance_11 = this;
  }
  protoOf(Companion_11).of_ke4f5d_k$ = function (position) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return position.toString();
  };
  var Companion_instance_11;
  function Companion_getInstance_14() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function BackgroundPosition() {
  }
  function Companion_12() {
    Companion_instance_12 = this;
  }
  protoOf(Companion_12).of_bnlfbt_k$ = function (width) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toString(width);
  };
  protoOf(Companion_12).of_5s0ir0_k$ = function (width) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return width.toString();
  };
  protoOf(Companion_12).of_7ht9sn_k$ = function (width, height) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toString(width) + ' ' + toString(height);
  };
  protoOf(Companion_12).of_89wy16_k$ = function (width, height) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return width.toString() + ' ' + toString(height);
  };
  protoOf(Companion_12).of_1gkwv8_k$ = function (width, height) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toString(width) + ' ' + height.toString();
  };
  protoOf(Companion_12).get_Cover_i8910u_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'cover';
  };
  protoOf(Companion_12).get_Contain_qhyalx_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'contain';
  };
  var Companion_instance_12;
  function Companion_getInstance_15() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  function BackgroundSize() {
  }
  function backgroundImage_2(_this__u8e3s4, gradient) {
    return backgroundImage_0(_this__u8e3s4, Companion_getInstance_44().of_jjeryt_k$(gradient));
  }
  function backgroundOrigin_0(_this__u8e3s4, backgroundOrigin_0) {
    backgroundOrigin(_this__u8e3s4, toString(backgroundOrigin_0));
  }
  function Listable_1() {
  }
  function Companion_13() {
    Companion_instance_13 = this;
  }
  protoOf(Companion_13).list_bu9uxj_k$ = function (blendModes) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return joinToString_0(blendModes);
  };
  protoOf(Companion_13).get_Normal_22avww_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'normal';
  };
  protoOf(Companion_13).get_Multiply_jx6cqb_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'multiply';
  };
  protoOf(Companion_13).get_Screen_48xaxh_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'screen';
  };
  protoOf(Companion_13).get_Overlay_aqx5jb_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'overlay';
  };
  protoOf(Companion_13).get_Darken_2vuhq0_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'darken';
  };
  protoOf(Companion_13).get_Lighten_vm6n1y_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'lighten';
  };
  protoOf(Companion_13).get_ColorDodge_xpig2l_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'color-dodge';
  };
  protoOf(Companion_13).get_ColorBurn_3dln9l_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'color-burn';
  };
  protoOf(Companion_13).get_HardLight_twrkma_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'hard-light';
  };
  protoOf(Companion_13).get_SoftLight_73ckeb_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'soft-light';
  };
  protoOf(Companion_13).get_Difference_tnhgre_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'difference';
  };
  protoOf(Companion_13).get_Exclusion_1hb6rf_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'exclusion';
  };
  protoOf(Companion_13).get_Hue_18jrtd_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'hue';
  };
  protoOf(Companion_13).get_Saturation_8zdkl7_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'saturation';
  };
  protoOf(Companion_13).get_Color_i88tui_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'color';
  };
  protoOf(Companion_13).get_Luminosity_ma147q_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'luminosity';
  };
  protoOf(Companion_13).get_PlusDarker_mrfjwm_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'plus-darker';
  };
  protoOf(Companion_13).get_PlusLighter_ppim9s_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'plus-lighter';
  };
  var Companion_instance_13;
  function Companion_getInstance_16() {
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  function BackgroundBlendMode() {
  }
  var com_varabyte_kobweb_compose_css_BorderImageNumericBuilder$stable;
  var com_varabyte_kobweb_compose_css_BorderImageSlice_Builder$stable;
  var com_varabyte_kobweb_compose_css_BorderImageWidth_Builder$stable;
  var com_varabyte_kobweb_compose_css_BorderImageOutset_Builder$stable;
  function borderBottom(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    borderBottom_0(_this__u8e3s4, borderBottom$lambda(width, style, color));
  }
  function borderLeft(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    borderLeft_0(_this__u8e3s4, borderLeft$lambda(width, style, color));
  }
  function borderColor(_this__u8e3s4, color) {
    _this__u8e3s4.property_npxg1h_k$('border-color', color);
  }
  function borderColor_0(_this__u8e3s4, topBottom, leftRight) {
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
    _this__u8e3s4.property_wcrait_k$('border-color', toString(topBottom) + ' ' + toString(leftRight));
  }
  function borderColor_1(_this__u8e3s4, top, leftRight, bottom) {
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
    _this__u8e3s4.property_wcrait_k$('border-color', toString(top) + ' ' + toString(leftRight) + ' ' + toString(bottom));
  }
  function borderColor_2(_this__u8e3s4, top, right, bottom, left) {
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
    _this__u8e3s4.property_wcrait_k$('border-color', toString(top) + ' ' + toString(right) + ' ' + toString(bottom) + ' ' + toString(left));
  }
  function borderStyle(_this__u8e3s4, lineStyle) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.property_wcrait_k$('border-style', lineStyle);
  }
  function borderStyle_0(_this__u8e3s4, topBottom, leftRight) {
    var tmp;
    if (topBottom === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
      Companion_getInstance();
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
      Companion_getInstance();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_0 = 'none';
    } else {
      tmp_0 = leftRight;
    }
    leftRight = tmp_0;
    _this__u8e3s4.property_wcrait_k$('border-style', toString(topBottom) + ' ' + toString(leftRight));
  }
  function borderStyle_1(_this__u8e3s4, top, leftRight, bottom) {
    var tmp;
    if (top === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
      Companion_getInstance();
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
      Companion_getInstance();
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
      Companion_getInstance();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_1 = 'none';
    } else {
      tmp_1 = bottom;
    }
    bottom = tmp_1;
    _this__u8e3s4.property_wcrait_k$('border-style', toString(top) + ' ' + toString(leftRight) + ' ' + toString(bottom));
  }
  function borderStyle_2(_this__u8e3s4, top, right, bottom, left) {
    var tmp;
    if (top === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
      Companion_getInstance();
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
      Companion_getInstance();
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
      Companion_getInstance();
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
      Companion_getInstance();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_2 = 'none';
    } else {
      tmp_2 = left;
    }
    left = tmp_2;
    _this__u8e3s4.property_wcrait_k$('border-style', toString(top) + ' ' + toString(right) + ' ' + toString(bottom) + ' ' + toString(left));
  }
  function borderWidth(_this__u8e3s4, width) {
    _this__u8e3s4.property_npxg1h_k$('border-width', width);
  }
  function borderTop(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    borderTop_0(_this__u8e3s4, borderTop$lambda(width, style, color));
  }
  function borderBottom_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSBorder();
    borderBuild(this_0);
    _this__u8e3s4.property_npxg1h_k$('border-bottom', this_0);
  }
  function borderLeft_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSBorder();
    borderBuild(this_0);
    _this__u8e3s4.property_npxg1h_k$('border-left', this_0);
  }
  function borderTop_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSBorder();
    borderBuild(this_0);
    _this__u8e3s4.property_npxg1h_k$('border-top', this_0);
  }
  function borderBottom$lambda($width, $style, $color) {
    return function ($this$borderBottom) {
      var tmp0_safe_receiver = $width;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        width($this$borderBottom, tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $style;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        style($this$borderBottom, tmp1_safe_receiver);
      }
      var tmp2_safe_receiver = $color;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        color($this$borderBottom, tmp2_safe_receiver);
      }
      return Unit_getInstance();
    };
  }
  function borderLeft$lambda($width, $style, $color) {
    return function ($this$borderLeft) {
      var tmp0_safe_receiver = $width;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        width($this$borderLeft, tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $style;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        style($this$borderLeft, tmp1_safe_receiver);
      }
      var tmp2_safe_receiver = $color;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        color($this$borderLeft, tmp2_safe_receiver);
      }
      return Unit_getInstance();
    };
  }
  function borderTop$lambda($width, $style, $color) {
    return function ($this$borderTop) {
      var tmp0_safe_receiver = $width;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        width($this$borderTop, tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $style;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        style($this$borderTop, tmp1_safe_receiver);
      }
      var tmp2_safe_receiver = $color;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        color($this$borderTop, tmp2_safe_receiver);
      }
      return Unit_getInstance();
    };
  }
  function Listable_2() {
  }
  function Companion_14() {
    Companion_instance_14 = this;
  }
  protoOf(Companion_14).get_None_wo6tgh_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'none';
  };
  protoOf(Companion_14).of_w9d0f3_k$ = function (offsetX, offsetY, blurRadius, spreadRadius, color, inset) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    if (inset) {
      this_0.append_22ad7x_k$('inset');
      this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(32));
    }
    this_0.append_t8pm91_k$(offsetX);
    this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(32));
    this_0.append_t8pm91_k$(offsetY);
    if (!(blurRadius == null)) {
      this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(32));
      this_0.append_t8pm91_k$(blurRadius);
    }
    if (!(spreadRadius == null)) {
      if (blurRadius == null) {
        this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(32));
        this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(48));
      }
      this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(32));
      this_0.append_t8pm91_k$(spreadRadius);
    }
    if (!(color == null)) {
      this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(32));
      this_0.append_t8pm91_k$(color);
    }
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this_0.toString();
  };
  protoOf(Companion_14).of$default_s4a3oz_k$ = function (offsetX, offsetY, blurRadius, spreadRadius, color, inset, $super) {
    offsetX = offsetX === VOID ? get_px(0) : offsetX;
    offsetY = offsetY === VOID ? get_px(0) : offsetY;
    blurRadius = blurRadius === VOID ? null : blurRadius;
    spreadRadius = spreadRadius === VOID ? null : spreadRadius;
    color = color === VOID ? null : color;
    inset = inset === VOID ? false : inset;
    return $super === VOID ? this.of_w9d0f3_k$(offsetX, offsetY, blurRadius, spreadRadius, color, inset) : $super.of_w9d0f3_k$.call(this, offsetX, offsetY, blurRadius, spreadRadius, color, inset);
  };
  protoOf(Companion_14).list_58wzgc_k$ = function (shadows) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return joinToString_0(shadows);
  };
  var Companion_instance_14;
  function Companion_getInstance_17() {
    if (Companion_instance_14 == null)
      new Companion_14();
    return Companion_instance_14;
  }
  function BoxShadow() {
  }
  function Companion_15() {
    Companion_instance_15 = this;
  }
  protoOf(Companion_15).get_BorderBox_q3yb4a_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'border-box';
  };
  protoOf(Companion_15).get_ContentBox_h63h2z_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'content-box';
  };
  var Companion_instance_15;
  function Companion_getInstance_18() {
    if (Companion_instance_15 == null)
      new Companion_15();
    return Companion_instance_15;
  }
  function BoxSizing() {
  }
  function boxShadow(_this__u8e3s4, boxShadow) {
    boxShadow_0(_this__u8e3s4, toString(boxShadow));
  }
  function boxSizing_0(_this__u8e3s4, boxSizing_0) {
    boxSizing(_this__u8e3s4, toString(boxSizing_0));
  }
  function boxShadow_0(_this__u8e3s4, value) {
    _this__u8e3s4.property_wcrait_k$('box-shadow', value);
  }
  var com_varabyte_kobweb_compose_css_Edge$stable;
  var com_varabyte_kobweb_compose_css_EdgeXOrCenter$stable;
  var com_varabyte_kobweb_compose_css_EdgeX$stable;
  var com_varabyte_kobweb_compose_css_CenterX$stable;
  var com_varabyte_kobweb_compose_css_EdgeXOffset$stable;
  var com_varabyte_kobweb_compose_css_EdgeYOrCenter$stable;
  var com_varabyte_kobweb_compose_css_EdgeY$stable;
  var com_varabyte_kobweb_compose_css_CenterY$stable;
  var com_varabyte_kobweb_compose_css_EdgeYOffset$stable;
  var com_varabyte_kobweb_compose_css_CSSPosition$stable;
  function EdgeXOrCenter(value) {
    Edge.call(this, value);
  }
  function EdgeXOffset(edgeX, offset) {
    this.edgeX_1 = edgeX;
    this.offset_1 = offset;
  }
  protoOf(EdgeXOffset).get_edgeX_iqqp76_k$ = function () {
    return this.edgeX_1;
  };
  protoOf(EdgeXOffset).get_offset_hjmqak_k$ = function () {
    return this.offset_1;
  };
  protoOf(EdgeXOffset).toString = function () {
    return this.edgeX_1.toString() + ' ' + toString(this.offset_1);
  };
  function _get_value__a43j40($this) {
    return $this.value_1;
  }
  function CSSPosition_init_$Init$(x, y, $this) {
    x = x === VOID ? get_percent(50) : x;
    y = y === VOID ? get_percent(50) : y;
    CSSPosition.call($this, toString(x) + ' ' + toString(y));
    return $this;
  }
  function CSSPosition_init_$Create$(x, y) {
    return CSSPosition_init_$Init$(x, y, objectCreate(protoOf(CSSPosition)));
  }
  function CSSPosition_init_$Init$_0(xAnchor, $this) {
    CSSPosition.call($this, xAnchor.toString());
    return $this;
  }
  function CSSPosition_init_$Create$_0(xAnchor) {
    return CSSPosition_init_$Init$_0(xAnchor, objectCreate(protoOf(CSSPosition)));
  }
  function CSSPosition_init_$Init$_1(yAnchor, $this) {
    CSSPosition.call($this, toOffset(Companion_getInstance_20().get_CenterX_v8efdy_k$()).toString() + ' ' + toOffset_0(yAnchor).toString());
    return $this;
  }
  function CSSPosition_init_$Create$_1(yAnchor) {
    return CSSPosition_init_$Init$_1(yAnchor, objectCreate(protoOf(CSSPosition)));
  }
  function CSSPosition_init_$Init$_2(xAnchor, yAnchor, $this) {
    CSSPosition_init_$Init$_9(toOffset(xAnchor), toOffset_0(yAnchor), $this);
    return $this;
  }
  function CSSPosition_init_$Create$_2(xAnchor, yAnchor) {
    return CSSPosition_init_$Init$_2(xAnchor, yAnchor, objectCreate(protoOf(CSSPosition)));
  }
  function CSSPosition_init_$Init$_3(xOffset, $this) {
    CSSPosition_init_$Init$_9(xOffset, toOffset_0(Companion_getInstance_20().get_CenterY_v8efdx_k$()), $this);
    return $this;
  }
  function CSSPosition_init_$Create$_3(xOffset) {
    return CSSPosition_init_$Init$_3(xOffset, objectCreate(protoOf(CSSPosition)));
  }
  function CSSPosition_init_$Init$_4(yOffset, $this) {
    CSSPosition_init_$Init$_9(toOffset(Companion_getInstance_20().get_CenterX_v8efdy_k$()), yOffset, $this);
    return $this;
  }
  function CSSPosition_init_$Create$_4(yOffset) {
    return CSSPosition_init_$Init$_4(yOffset, objectCreate(protoOf(CSSPosition)));
  }
  function CSSPosition_init_$Init$_5(xCenter, y, $this) {
    CSSPosition.call($this, xCenter.toString() + ' ' + toString(y));
    return $this;
  }
  function CSSPosition_init_$Create$_5(xCenter, y) {
    return CSSPosition_init_$Init$_5(xCenter, y, objectCreate(protoOf(CSSPosition)));
  }
  function CSSPosition_init_$Init$_6(x, yCenter, $this) {
    CSSPosition.call($this, toString(x) + ' ' + yCenter.toString());
    return $this;
  }
  function CSSPosition_init_$Create$_6(x, yCenter) {
    return CSSPosition_init_$Init$_6(x, yCenter, objectCreate(protoOf(CSSPosition)));
  }
  function CSSPosition_init_$Init$_7(xOffset, yAnchor, $this) {
    CSSPosition_init_$Init$_9(xOffset, toOffset_0(yAnchor), $this);
    return $this;
  }
  function CSSPosition_init_$Create$_7(xOffset, yAnchor) {
    return CSSPosition_init_$Init$_7(xOffset, yAnchor, objectCreate(protoOf(CSSPosition)));
  }
  function CSSPosition_init_$Init$_8(xAnchor, yOffset, $this) {
    CSSPosition_init_$Init$_9(toOffset(xAnchor), yOffset, $this);
    return $this;
  }
  function CSSPosition_init_$Create$_8(xAnchor, yOffset) {
    return CSSPosition_init_$Init$_8(xAnchor, yOffset, objectCreate(protoOf(CSSPosition)));
  }
  function CSSPosition_init_$Init$_9(xAnchor, yAnchor, $this) {
    CSSPosition.call($this, xAnchor.toString() + ' ' + yAnchor.toString());
    return $this;
  }
  function CSSPosition_init_$Create$_9(xAnchor, yAnchor) {
    return CSSPosition_init_$Init$_9(xAnchor, yAnchor, objectCreate(protoOf(CSSPosition)));
  }
  function Companion_16() {
    Companion_instance_16 = this;
  }
  protoOf(Companion_16).get_Top_18jj1w_k$ = function () {
    return CSSPosition_init_$Create$_1(Companion_getInstance_20().get_Top_18jj1w_k$());
  };
  protoOf(Companion_16).get_TopRight_o46i0g_k$ = function () {
    return CSSPosition_init_$Create$_2(Companion_getInstance_20().get_Right_igdsyb_k$(), Companion_getInstance_20().get_Top_18jj1w_k$());
  };
  protoOf(Companion_16).get_Right_igdsyb_k$ = function () {
    return CSSPosition_init_$Create$_0(Companion_getInstance_20().get_Right_igdsyb_k$());
  };
  protoOf(Companion_16).get_BottomRight_v7b1go_k$ = function () {
    return CSSPosition_init_$Create$_2(Companion_getInstance_20().get_Right_igdsyb_k$(), Companion_getInstance_20().get_Bottom_3m75bg_k$());
  };
  protoOf(Companion_16).get_Bottom_3m75bg_k$ = function () {
    return CSSPosition_init_$Create$_1(Companion_getInstance_20().get_Bottom_3m75bg_k$());
  };
  protoOf(Companion_16).get_BottomLeft_f1aa2t_k$ = function () {
    return CSSPosition_init_$Create$_2(Companion_getInstance_20().get_Left_wo5bw0_k$(), Companion_getInstance_20().get_Bottom_3m75bg_k$());
  };
  protoOf(Companion_16).get_Left_wo5bw0_k$ = function () {
    return CSSPosition_init_$Create$_0(Companion_getInstance_20().get_Left_wo5bw0_k$());
  };
  protoOf(Companion_16).get_TopLeft_9xuhv7_k$ = function () {
    return CSSPosition_init_$Create$_2(Companion_getInstance_20().get_Left_wo5bw0_k$(), Companion_getInstance_20().get_Top_18jj1w_k$());
  };
  protoOf(Companion_16).get_Center_3arb0i_k$ = function () {
    return CSSPosition_init_$Create$_2(Companion_getInstance_20().get_CenterX_v8efdy_k$(), Companion_getInstance_20().get_CenterY_v8efdx_k$());
  };
  var Companion_instance_16;
  function Companion_getInstance_19() {
    if (Companion_instance_16 == null)
      new Companion_16();
    return Companion_instance_16;
  }
  function CSSPosition(value) {
    Companion_getInstance_19();
    this.value_1 = value;
  }
  protoOf(CSSPosition).toString = function () {
    return this.value_1;
  };
  function EdgeYOrCenter(value) {
    Edge.call(this, value);
  }
  function EdgeYOffset(edgeY, offset) {
    this.edgeY_1 = edgeY;
    this.offset_1 = offset;
  }
  protoOf(EdgeYOffset).get_edgeY_iqqp77_k$ = function () {
    return this.edgeY_1;
  };
  protoOf(EdgeYOffset).get_offset_hjmqak_k$ = function () {
    return this.offset_1;
  };
  protoOf(EdgeYOffset).toString = function () {
    return this.edgeY_1.toString() + ' ' + toString(this.offset_1);
  };
  function _get_value__a43j40_0($this) {
    return $this.value_1;
  }
  function Companion_17() {
    Companion_instance_17 = this;
  }
  protoOf(Companion_17).get_Top_18jj1w_k$ = function () {
    return new EdgeY('top');
  };
  protoOf(Companion_17).get_Bottom_3m75bg_k$ = function () {
    return new EdgeY('bottom');
  };
  protoOf(Companion_17).get_Left_wo5bw0_k$ = function () {
    return new EdgeX('left');
  };
  protoOf(Companion_17).get_Right_igdsyb_k$ = function () {
    return new EdgeX('right');
  };
  protoOf(Companion_17).get_CenterX_v8efdy_k$ = function () {
    return new CenterX();
  };
  protoOf(Companion_17).get_CenterY_v8efdx_k$ = function () {
    return new CenterY();
  };
  var Companion_instance_17;
  function Companion_getInstance_20() {
    if (Companion_instance_17 == null)
      new Companion_17();
    return Companion_instance_17;
  }
  function Edge(value) {
    Companion_getInstance_20();
    this.value_1 = value;
  }
  protoOf(Edge).toString = function () {
    return this.value_1;
  };
  function EdgeX(value) {
    EdgeXOrCenter.call(this, value);
  }
  protoOf(EdgeX).invoke_wfll5y_k$ = function (offset) {
    return new EdgeXOffset(this, offset);
  };
  function toOffset(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof EdgeX) {
      tmp = _this__u8e3s4.invoke_wfll5y_k$(get_percent(0));
    } else {
      if (_this__u8e3s4 instanceof CenterX) {
        tmp = Companion_getInstance_20().get_Left_wo5bw0_k$().invoke_wfll5y_k$(get_percent(50));
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  }
  function CenterX() {
    EdgeXOrCenter.call(this, 'center');
  }
  function toOffset_0(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof EdgeY) {
      tmp = _this__u8e3s4.invoke_wfll5y_k$(get_percent(0));
    } else {
      if (_this__u8e3s4 instanceof CenterY) {
        tmp = Companion_getInstance_20().get_Top_18jj1w_k$().invoke_wfll5y_k$(get_percent(50));
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  }
  function CenterY() {
    EdgeYOrCenter.call(this, 'center');
  }
  function EdgeY(value) {
    EdgeYOrCenter.call(this, value);
  }
  protoOf(EdgeY).invoke_wfll5y_k$ = function (offset) {
    return new EdgeYOffset(this, offset);
  };
  function toDegrees(_this__u8e3s4) {
    var tmp;
    switch (toString(_this__u8e3s4.unit)) {
      case 'deg':
        tmp = _this__u8e3s4.value;
        break;
      case 'grad':
        tmp = _this__u8e3s4.value * 0.9;
        break;
      case 'rad':
        tmp = _this__u8e3s4.value * 180.0 / 3.141592653589793;
        break;
      case 'turn':
        tmp = _this__u8e3s4.value * 360.0;
        break;
      default:
        var message = 'Unexpected unit type ' + toString(_this__u8e3s4.unit);
        throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp % 360.0;
  }
  var com_varabyte_kobweb_compose_css_HueInterpolationMethod$stable;
  var com_varabyte_kobweb_compose_css_ColorInterpolationMethod_PolarColorSpace$stable;
  var com_varabyte_kobweb_compose_css_ColorInterpolationMethod$stable;
  function _get_space__bb6vlh($this) {
    return $this.space_1;
  }
  function _get_value__a43j40_1($this) {
    return $this.value_1;
  }
  function RectangularColorSpace(space) {
    ColorInterpolationMethod.call(this, 'in ' + space);
  }
  function PolarColorSpace(space, hue) {
    hue = hue === VOID ? null : hue;
    ColorInterpolationMethod.call(this, 'in ' + space + (!(hue == null) ? ' ' + toString_0(hue) : ''));
    this.space_1 = space;
  }
  protoOf(PolarColorSpace).withHue_q86tyu_k$ = function (hue) {
    return new PolarColorSpace(this.space_1, hue);
  };
  protoOf(PolarColorSpace).get_ShorterHue_w8x26g_k$ = function () {
    return this.withHue_q86tyu_k$(Companion_getInstance_23().get_Shorter_81qd40_k$());
  };
  protoOf(PolarColorSpace).get_LongerHue_r5ye9m_k$ = function () {
    return this.withHue_q86tyu_k$(Companion_getInstance_23().get_Longer_144ytu_k$());
  };
  protoOf(PolarColorSpace).get_IncreasingHue_q7a28_k$ = function () {
    return this.withHue_q86tyu_k$(Companion_getInstance_23().get_Increasing_yx50wo_k$());
  };
  protoOf(PolarColorSpace).get_DecreasingHue_5ryac4_k$ = function () {
    return this.withHue_q86tyu_k$(Companion_getInstance_23().get_Decreasing_xrl7r0_k$());
  };
  function Companion_18() {
    Companion_instance_18 = this;
  }
  protoOf(Companion_18).get_Srgb_woa2g3_k$ = function () {
    return new RectangularColorSpace('srgb');
  };
  protoOf(Companion_18).get_SrgbLinear_y4sopk_k$ = function () {
    return new RectangularColorSpace('srgb-linear');
  };
  protoOf(Companion_18).get_DisplayP3_pa2gtg_k$ = function () {
    return new RectangularColorSpace('display-p3');
  };
  protoOf(Companion_18).get_A98Rgb_4y0odm_k$ = function () {
    return new RectangularColorSpace('a98-rgb');
  };
  protoOf(Companion_18).get_ProphotoRgb_zi8qqn_k$ = function () {
    return new RectangularColorSpace('prophoto-rgb');
  };
  protoOf(Companion_18).get_Rec2020_od1chp_k$ = function () {
    return new RectangularColorSpace('rec2020');
  };
  protoOf(Companion_18).get_Lab_18jpbw_k$ = function () {
    return new RectangularColorSpace('lab');
  };
  protoOf(Companion_18).get_Oklab_ierso8_k$ = function () {
    return new RectangularColorSpace('oklab');
  };
  protoOf(Companion_18).get_Xyz_18jfu8_k$ = function () {
    return new RectangularColorSpace('xyz');
  };
  protoOf(Companion_18).get_XyzD50_6yda6n_k$ = function () {
    return new RectangularColorSpace('xyz-d50');
  };
  protoOf(Companion_18).get_XyzD65_6yda7n_k$ = function () {
    return new RectangularColorSpace('xyz-d65');
  };
  protoOf(Companion_18).get_Hsl_18jruw_k$ = function () {
    return new PolarColorSpace('hsl');
  };
  protoOf(Companion_18).get_Hwb_18jrrq_k$ = function () {
    return new PolarColorSpace('hwb');
  };
  protoOf(Companion_18).get_Lch_18jpa0_k$ = function () {
    return new PolarColorSpace('lch');
  };
  protoOf(Companion_18).get_Oklch_iersq4_k$ = function () {
    return new PolarColorSpace('oklch');
  };
  protoOf(Companion_18).of_qz9zeh_k$ = function (space, hueInterpolationMethod) {
    return space.withHue_q86tyu_k$(hueInterpolationMethod);
  };
  protoOf(Companion_18).of$default_r49x25_k$ = function (space, hueInterpolationMethod, $super) {
    hueInterpolationMethod = hueInterpolationMethod === VOID ? null : hueInterpolationMethod;
    return $super === VOID ? this.of_qz9zeh_k$(space, hueInterpolationMethod) : $super.of_qz9zeh_k$.call(this, space, hueInterpolationMethod);
  };
  var Companion_instance_18;
  function Companion_getInstance_21() {
    if (Companion_instance_18 == null)
      new Companion_18();
    return Companion_instance_18;
  }
  function ColorInterpolationMethod(value) {
    Companion_getInstance_21();
    this.value_1 = value;
  }
  protoOf(ColorInterpolationMethod).toString = function () {
    return this.value_1;
  };
  function colorScheme(_this__u8e3s4, colorScheme) {
    _this__u8e3s4.property_npxg1h_k$('color-scheme', colorScheme);
  }
  function Companion_19() {
    Companion_instance_19 = this;
  }
  protoOf(Companion_19).get_Normal_22avww_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'normal';
  };
  protoOf(Companion_19).get_Light_id31e5_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'light';
  };
  protoOf(Companion_19).get_Dark_wo05b3_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'dark';
  };
  protoOf(Companion_19).get_LightDark_i1jbx9_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'light dark';
  };
  protoOf(Companion_19).get_DarkLight_aqawl3_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'dark light';
  };
  protoOf(Companion_19).get_OnlyLight_otk64f_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'only light';
  };
  protoOf(Companion_19).get_OnlyDark_62hp9n_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'only dark';
  };
  var Companion_instance_19;
  function Companion_getInstance_22() {
    if (Companion_instance_19 == null)
      new Companion_19();
    return Companion_instance_19;
  }
  function ColorScheme() {
  }
  function _get_value__a43j40_2($this) {
    return $this.value_1;
  }
  function Companion_20() {
    Companion_instance_20 = this;
  }
  protoOf(Companion_20).get_Shorter_81qd40_k$ = function () {
    return new HueInterpolationMethod('shorter');
  };
  protoOf(Companion_20).get_Longer_144ytu_k$ = function () {
    return new HueInterpolationMethod('longer');
  };
  protoOf(Companion_20).get_Increasing_yx50wo_k$ = function () {
    return new HueInterpolationMethod('increasing');
  };
  protoOf(Companion_20).get_Decreasing_xrl7r0_k$ = function () {
    return new HueInterpolationMethod('decreasing');
  };
  var Companion_instance_20;
  function Companion_getInstance_23() {
    if (Companion_instance_20 == null)
      new Companion_20();
    return Companion_instance_20;
  }
  function HueInterpolationMethod(value) {
    Companion_getInstance_23();
    this.value_1 = value;
  }
  protoOf(HueInterpolationMethod).toString = function () {
    return this.value_1 + ' hue';
  };
  var com_varabyte_kobweb_compose_css_ComparableStyleScope$stable;
  function com_varabyte_kobweb_compose_css_ComparableStyleScope$stableprop_getter() {
    return com_varabyte_kobweb_compose_css_ComparableStyleScope$stable;
  }
  function ComparableStyleScope() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.properties_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.variables_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(ComparableStyleScope).get_properties_zhllqc_k$ = function () {
    return this.properties_1;
  };
  protoOf(ComparableStyleScope).get_variables_75f0zy_k$ = function () {
    return this.variables_1;
  };
  protoOf(ComparableStyleScope).property_npxg1h_k$ = function (propertyName, value) {
    var tmp0 = this.properties_1;
    // Inline function 'kotlin.collections.set' call
    var value_0 = toString(value);
    tmp0.put_4fpzoq_k$(propertyName, value_0);
  };
  protoOf(ComparableStyleScope).variable_px6kuc_k$ = function (variableName, value) {
    var tmp0 = this.variables_1;
    // Inline function 'kotlin.collections.set' call
    var value_0 = toString(value);
    tmp0.put_4fpzoq_k$(variableName, value_0);
  };
  protoOf(ComparableStyleScope).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof ComparableStyleScope) {
      tmp_0 = equals(this.properties_1, other.properties_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.variables_1, other.variables_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComparableStyleScope).hashCode = function () {
    var result = hashCode(this.properties_1);
    result = imul(31, result) + hashCode(this.variables_1) | 0;
    return result;
  };
  function isNotEmpty(_this__u8e3s4) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!_this__u8e3s4.properties_1.isEmpty_y1axqb_k$()) {
      tmp = true;
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp = !_this__u8e3s4.variables_1.isEmpty_y1axqb_k$();
    }
    return tmp;
  }
  function Companion_21() {
    Companion_instance_21 = this;
  }
  protoOf(Companion_21).get_Auto_wnyn88_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'auto';
  };
  protoOf(Companion_21).get_Default_goqax4_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'default';
  };
  protoOf(Companion_21).get_None_wo6tgh_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'none';
  };
  protoOf(Companion_21).get_ContextMenu_v99p0b_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'context-menu';
  };
  protoOf(Companion_21).get_Help_wo2s2y_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'help';
  };
  protoOf(Companion_21).get_Pointer_m64vg4_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'pointer';
  };
  protoOf(Companion_21).get_Progress_nqna52_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'progress';
  };
  protoOf(Companion_21).get_Wait_woc9um_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'wait';
  };
  protoOf(Companion_21).get_Cell_wnzl57_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'cell';
  };
  protoOf(Companion_21).get_Crosshair_69627b_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'crosshair';
  };
  protoOf(Companion_21).get_Text_woag7q_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'text';
  };
  protoOf(Companion_21).get_VerticalText_6nu4a4_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'vertical-text';
  };
  protoOf(Companion_21).get_Alias_i73953_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'alias';
  };
  protoOf(Companion_21).get_Copy_wnzsny_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'copy';
  };
  protoOf(Companion_21).get_Move_wo66nu_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'move';
  };
  protoOf(Companion_21).get_NoDrop_21hmk9_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'no-drop';
  };
  protoOf(Companion_21).get_NotAllowed_mobp4y_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'not-allowed';
  };
  protoOf(Companion_21).get_Grab_wo2egl_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'grab';
  };
  protoOf(Companion_21).get_Grabbing_taamx7_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'grabbing';
  };
  protoOf(Companion_21).get_AllScroll_y9eih1_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'all-scroll';
  };
  protoOf(Companion_21).get_ColumnResize_w27e5_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'col-resize';
  };
  protoOf(Companion_21).get_RowResize_dbunq3_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'row-resize';
  };
  protoOf(Companion_21).get_NResize_kz2xjb_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'n-resize';
  };
  protoOf(Companion_21).get_NeResize_pdt3gs_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'ne-resize';
  };
  protoOf(Companion_21).get_EResize_b0fdlc_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'e-resize';
  };
  protoOf(Companion_21).get_SeResize_nbwu41_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'se-resize';
  };
  protoOf(Companion_21).get_SResize_im7kea_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 's-resize';
  };
  protoOf(Companion_21).get_SwResize_rrw3z5_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'sw-resize';
  };
  protoOf(Companion_21).get_WResize_uxqhha_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'w-resize';
  };
  protoOf(Companion_21).get_NwResize_ppzume_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'nw-resize';
  };
  protoOf(Companion_21).get_EwResize_kla901_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'ew-resize';
  };
  protoOf(Companion_21).get_NsResize_wzla9q_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'ns-resize';
  };
  protoOf(Companion_21).get_NeswResize_x625qw_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'nesw-resize';
  };
  protoOf(Companion_21).get_NwseResize_c95994_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'nwse-resize';
  };
  protoOf(Companion_21).get_ZoomIn_7qsf41_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'zoom-in';
  };
  protoOf(Companion_21).get_ZoomOut_qz4z8y_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'zoom-out';
  };
  var Companion_instance_21;
  function Companion_getInstance_24() {
    if (Companion_instance_21 == null)
      new Companion_21();
    return Companion_instance_21;
  }
  function Cursor() {
  }
  function cursor(_this__u8e3s4, cursor) {
    _this__u8e3s4.property_npxg1h_k$('cursor', cursor);
  }
  function Companion_22() {
    Companion_instance_22 = this;
  }
  protoOf(Companion_22).get_None_wo6tgh_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'none';
  };
  protoOf(Companion_22).get_Auto_wnyn88_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'auto';
  };
  protoOf(Companion_22).get_MenuListButton_l4aue0_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'menulist-button';
  };
  protoOf(Companion_22).get_TextField_o3y610_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'textfield';
  };
  var Companion_instance_22;
  function Companion_getInstance_25() {
    if (Companion_instance_22 == null)
      new Companion_22();
    return Companion_instance_22;
  }
  function Appearance() {
  }
  function appearance(_this__u8e3s4, appearance) {
    _this__u8e3s4.property_npxg1h_k$('appearance', appearance);
  }
  function Companion_23() {
    Companion_instance_23 = this;
  }
  protoOf(Companion_23).get_Thin_woai2q_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return '100';
  };
  protoOf(Companion_23).get_ExtraLight_ov7yxb_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return '200';
  };
  protoOf(Companion_23).get_Light_id31e5_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return '300';
  };
  protoOf(Companion_23).get_Medium_1fiba6_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return '500';
  };
  protoOf(Companion_23).get_SemiBold_aid1c4_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return '600';
  };
  protoOf(Companion_23).get_ExtraBold_xklwd0_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return '800';
  };
  protoOf(Companion_23).get_Black_i7mvue_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return '900';
  };
  protoOf(Companion_23).get_ExtraBlack_oprtdk_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return '950';
  };
  protoOf(Companion_23).get_Normal_22avww_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'normal';
  };
  protoOf(Companion_23).get_Bold_wnz5ke_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'bold';
  };
  protoOf(Companion_23).get_Lighter_vm6n22_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'lighter';
  };
  protoOf(Companion_23).get_Bolder_3mclb9_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'bolder';
  };
  var Companion_instance_23;
  function Companion_getInstance_26() {
    if (Companion_instance_23 == null)
      new Companion_23();
    return Companion_instance_23;
  }
  function FontWeight() {
  }
  function fontWeight(_this__u8e3s4, weight) {
    _this__u8e3s4.property_npxg1h_k$('font-weight', weight);
  }
  function CssGlobalValues() {
  }
  var com_varabyte_kobweb_compose_css_GridEntry_TrackSize_FitContent$stable;
  var com_varabyte_kobweb_compose_css_GridEntry_TrackSize_MinMax$stable;
  var com_varabyte_kobweb_compose_css_GridEntry_TrackSize_Flex$stable;
  var com_varabyte_kobweb_compose_css_GridEntry_TrackSize_Inflexible$stable;
  var com_varabyte_kobweb_compose_css_GridEntry_TrackSize_Keyword$stable;
  var com_varabyte_kobweb_compose_css_GridEntry_TrackSize_Fixed$stable;
  var com_varabyte_kobweb_compose_css_GridEntry_TrackSize$stable;
  var com_varabyte_kobweb_compose_css_GridEntry_Repeat_Track$stable;
  var com_varabyte_kobweb_compose_css_GridEntry_Repeat_Auto$stable;
  var com_varabyte_kobweb_compose_css_GridEntry_Repeat$stable;
  var com_varabyte_kobweb_compose_css_GridEntry_LineNames$stable;
  var com_varabyte_kobweb_compose_css_GridEntry$stable;
  var com_varabyte_kobweb_compose_css_GridTrackBuilderInRepeat$stable;
  var com_varabyte_kobweb_compose_css_GridTrackBuilder$stable;
  var com_varabyte_kobweb_compose_css_GridTemplate_SubgridBuilder$stable;
  var com_varabyte_kobweb_compose_css_GridBuilderInAuto$stable;
  var com_varabyte_kobweb_compose_css_GridBuilder$stable;
  function GridTrackBuilder() {
    GridTrackBuilderInRepeat.call(this);
  }
  protoOf(GridTrackBuilder).repeat_n9ti1_k$ = function (count, block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    block(this_0);
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = this_0.tracks_1;
    var repeatTracks = copyToArray(this_1);
    this.tracks_1.add_utx5q5_k$(Companion_getInstance_28().repeat_1fs2oe_k$(count, repeatTracks.slice()));
  };
  protoOf(GridTrackBuilder).repeat_hnvzo1_k$ = function (type, block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    block(this_0);
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = this_0.tracks_1;
    var repeatTracks = copyToArray(this_1);
    this.tracks_1.add_utx5q5_k$(Companion_getInstance_28().repeat_4zac3e_k$(type, repeatTracks.slice()));
  };
  function GridTrackBuilderInRepeat() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.tracks_1 = ArrayList_init_$Create$();
  }
  protoOf(GridTrackBuilderInRepeat).get_auto_woj2t4_k$ = function () {
    return Companion_getInstance_27().get_Auto_wnyn88_k$();
  };
  protoOf(GridTrackBuilderInRepeat).get_minContent_f65gog_k$ = function () {
    return Companion_getInstance_27().get_MinContent_hspenk_k$();
  };
  protoOf(GridTrackBuilderInRepeat).get_maxContent_ez72f2_k$ = function () {
    return Companion_getInstance_27().get_MaxContent_n32482_k$();
  };
  protoOf(GridTrackBuilderInRepeat).get_autoFit_9f9csn_k$ = function () {
    return Type_AutoFit_getInstance();
  };
  protoOf(GridTrackBuilderInRepeat).get_autoFill_80lsv9_k$ = function () {
    return Type_AutoFill_getInstance();
  };
  protoOf(GridTrackBuilderInRepeat).get_tracks_f5ew17_k$ = function () {
    return this.tracks_1;
  };
  protoOf(GridTrackBuilderInRepeat).size_azcpvi_k$ = function (track) {
    this.tracks_1.add_utx5q5_k$(track);
  };
  protoOf(GridTrackBuilderInRepeat).size_n8bj0z_k$ = function (value) {
    return this.size_azcpvi_k$(Companion_getInstance_27().invoke_wfll5y_k$(value));
  };
  protoOf(GridTrackBuilderInRepeat).size_q03g6h_k$ = function (value) {
    return this.size_azcpvi_k$(Companion_getInstance_27().invoke_3uf9u8_k$(value));
  };
  protoOf(GridTrackBuilderInRepeat).fitContent_8jd78m_k$ = function (value) {
    return this.size_azcpvi_k$(Companion_getInstance_27().fitContent_vrn1yu_k$(value));
  };
  protoOf(GridTrackBuilderInRepeat).minmax_msesvw_k$ = function (min, max) {
    return this.size_azcpvi_k$(Companion_getInstance_27().minmax_mdatpo_k$(min, max));
  };
  protoOf(GridTrackBuilderInRepeat).minmax_el7xbs_k$ = function (min, max) {
    return this.size_azcpvi_k$(Companion_getInstance_27().minmax_mdatpo_k$(min, max));
  };
  protoOf(GridTrackBuilderInRepeat).minmax_9paic1_k$ = function (min, max) {
    return this.minmax_msesvw_k$(min, Companion_getInstance_27().invoke_3uf9u8_k$(max));
  };
  protoOf(GridTrackBuilderInRepeat).minmax_labs7t_k$ = function (min, max) {
    return this.minmax_msesvw_k$(min, Companion_getInstance_27().invoke_wfll5y_k$(max));
  };
  protoOf(GridTrackBuilderInRepeat).minmax_npodc9_k$ = function (min, max) {
    return this.minmax_el7xbs_k$(Companion_getInstance_27().invoke_wfll5y_k$(min), max);
  };
  protoOf(GridTrackBuilderInRepeat).minmax_fxpgw2_k$ = function (min, max) {
    return this.minmax_el7xbs_k$(Companion_getInstance_27().invoke_wfll5y_k$(min), Companion_getInstance_27().invoke_wfll5y_k$(max));
  };
  protoOf(GridTrackBuilderInRepeat).minmax_1ha38s_k$ = function (min, max) {
    return this.minmax_el7xbs_k$(Companion_getInstance_27().invoke_wfll5y_k$(min), Companion_getInstance_27().invoke_3uf9u8_k$(max));
  };
  protoOf(GridTrackBuilderInRepeat).lineNames_ii8gtg_k$ = function (names) {
    this.tracks_1.add_utx5q5_k$(Companion_getInstance_28().lineNames_npjmfo_k$(names.slice()));
  };
  function FitContent(value) {
    TrackSize.call(this, 'fit-content(' + toString(value) + ')');
  }
  function MinMax(min, max) {
    TrackSize.call(this, 'minmax(' + min.toString() + ', ' + max.toString() + ')');
    this.min_1 = min;
    this.max_1 = max;
  }
  protoOf(MinMax).get_min_jm7wn1_k$ = function () {
    return this.min_1;
  };
  protoOf(MinMax).get_max_ta58x7_k$ = function () {
    return this.max_1;
  };
  function Flex(value) {
    TrackSize.call(this, toString(value));
  }
  function Inflexible(value) {
    TrackSize.call(this, value);
  }
  function Keyword(value) {
    Inflexible.call(this, value);
  }
  function Fixed(value) {
    Inflexible.call(this, toString(value));
  }
  function Companion_24() {
    Companion_instance_24 = this;
  }
  protoOf(Companion_24).get_Auto_wnyn88_k$ = function () {
    return new Keyword('auto');
  };
  protoOf(Companion_24).get_MinContent_hspenk_k$ = function () {
    return new Keyword('min-content');
  };
  protoOf(Companion_24).get_MaxContent_n32482_k$ = function () {
    return new Keyword('max-content');
  };
  protoOf(Companion_24).invoke_wfll5y_k$ = function (value) {
    return new Fixed(value);
  };
  protoOf(Companion_24).invoke_3uf9u8_k$ = function (value) {
    return new Flex(value);
  };
  protoOf(Companion_24).minmax_mdatpo_k$ = function (min, max) {
    return new MinMax(min, max);
  };
  protoOf(Companion_24).fitContent_vrn1yu_k$ = function (value) {
    return new FitContent(value);
  };
  var Companion_instance_24;
  function Companion_getInstance_27() {
    if (Companion_instance_24 == null)
      new Companion_24();
    return Companion_instance_24;
  }
  var Type_AutoFill_instance;
  var Type_AutoFit_instance;
  function values_1() {
    return [Type_AutoFill_getInstance(), Type_AutoFit_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'AutoFill':
        return Type_AutoFill_getInstance();
      case 'AutoFit':
        return Type_AutoFit_getInstance();
      default:
        Type_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_1() {
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_1());
    return $ENTRIES_1;
  }
  var Type_entriesInitialized;
  function Type_initEntries() {
    if (Type_entriesInitialized)
      return Unit_getInstance();
    Type_entriesInitialized = true;
    Type_AutoFill_instance = new Type('AutoFill', 0);
    Type_AutoFit_instance = new Type('AutoFit', 1);
  }
  var $ENTRIES_1;
  function Type(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(Type).toString = function () {
    return titleCamelCaseToKebabCase(this.get_name_woqyms_k$());
  };
  function Type_AutoFill_getInstance() {
    Type_initEntries();
    return Type_AutoFill_instance;
  }
  function Type_AutoFit_getInstance() {
    Type_initEntries();
    return Type_AutoFit_instance;
  }
  function Track(count, entries) {
    Repeat.call(this, count, entries);
  }
  function Auto(type, entries) {
    Repeat.call(this, type, entries);
  }
  function _get_value__a43j40_3($this) {
    return $this.value_1;
  }
  function TrackSize(value) {
    Companion_getInstance_27();
    GridEntry.call(this, value);
  }
  function Repeat(value, entries) {
    GridEntry.call(this, 'repeat(' + toString(value) + ', ' + toTrackListString(entries) + ')');
    this.entries_1 = entries;
  }
  protoOf(Repeat).get_entries_iro5of_k$ = function () {
    return this.entries_1;
  };
  function LineNames(names) {
    GridEntry.call(this, joinToString_0(names, ' ', '[', ']'));
    this.names_1 = names;
  }
  protoOf(LineNames).get_names_j0ldz_k$ = function () {
    return this.names_1;
  };
  function Companion_25() {
    Companion_instance_25 = this;
  }
  protoOf(Companion_25).repeat_1fs2oe_k$ = function (count, entries) {
    return new Track(count, entries.slice());
  };
  protoOf(Companion_25).repeat_4zac3e_k$ = function (type, entries) {
    return new Auto(type, entries.slice());
  };
  protoOf(Companion_25).lineNames_npjmfo_k$ = function (names) {
    return new LineNames(names.slice());
  };
  var Companion_instance_25;
  function Companion_getInstance_28() {
    if (Companion_instance_25 == null)
      new Companion_25();
    return Companion_instance_25;
  }
  function GridEntry(value) {
    Companion_getInstance_28();
    this.value_1 = value;
  }
  protoOf(GridEntry).toString = function () {
    return this.value_1;
  };
  function GridDslMarker() {
  }
  protoOf(GridDslMarker).equals = function (other) {
    if (!(other instanceof GridDslMarker))
      return false;
    other instanceof GridDslMarker || THROW_CCE();
    return true;
  };
  protoOf(GridDslMarker).hashCode = function () {
    return 0;
  };
  protoOf(GridDslMarker).toString = function () {
    return '@com.varabyte.kobweb.compose.css.GridDslMarker(' + ')';
  };
  function toTrackListString(_this__u8e3s4) {
    validate(_this__u8e3s4);
    // Inline function 'kotlin.collections.mutableListOf' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = ArrayList_init_$Create$();
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    while (inductionVariable < last) {
      var element = _this__u8e3s4[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var acc = accumulator;
      var prev = lastOrNull(acc);
      var tmp;
      if (prev instanceof LineNames) {
        tmp = element instanceof LineNames;
      } else {
        tmp = false;
      }
      if (tmp) {
        var tmp_0 = get_lastIndex(acc);
        var tmp0 = prev.names_1;
        // Inline function 'kotlin.collections.plus' call
        var elements = element.names_1;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$2 = tmp0.concat(elements);
        acc.set_82063s_k$(tmp_0, new LineNames(tmp$ret$2.slice()));
      } else {
        acc.add_utx5q5_k$(element);
      }
      accumulator = acc;
    }
    var tmp$ret$4 = accumulator;
    return joinToString(tmp$ret$4, ' ');
  }
  function validate(_this__u8e3s4) {
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$();
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    while (inductionVariable < last) {
      var element = _this__u8e3s4[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp;
      if (element instanceof LineNames) {
        tmp = emptyList();
      } else {
        if (element instanceof TrackSize) {
          tmp = listOf(element);
        } else {
          if (element instanceof Repeat) {
            // Inline function 'kotlin.collections.filterIsInstance' call
            var tmp0 = element.entries_1;
            // Inline function 'kotlin.collections.filterIsInstanceTo' call
            var destination_0 = ArrayList_init_$Create$();
            var inductionVariable_0 = 0;
            var last_0 = tmp0.length;
            while (inductionVariable_0 < last_0) {
              var element_0 = tmp0[inductionVariable_0];
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              if (element_0 instanceof TrackSize) {
                destination_0.add_utx5q5_k$(element_0);
              }
            }
            // Inline function 'kotlin.also' call
            // Inline function 'kotlin.collections.isNotEmpty' call
            // Inline function 'kotlin.require' call
            if (!!destination_0.isEmpty_y1axqb_k$()) {
              var message = 'repeat() must contain at least one track size';
              throw IllegalArgumentException_init_$Create$(toString(message));
            }
            tmp = destination_0;
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
      var list = tmp;
      addAll(destination, list);
    }
    var trackSizes = destination;
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.require' call
    if (!!trackSizes.isEmpty_y1axqb_k$()) {
      var message_0 = 'You must specify at least one track size';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.collections.count' call
    var count = 0;
    var inductionVariable_1 = 0;
    var last_1 = _this__u8e3s4.length;
    while (inductionVariable_1 < last_1) {
      var element_1 = _this__u8e3s4[inductionVariable_1];
      inductionVariable_1 = inductionVariable_1 + 1 | 0;
      if (element_1 instanceof Auto) {
        count = count + 1 | 0;
      }
    }
    var autoRepeatCount = count;
    if (autoRepeatCount === 0)
      return Unit_getInstance();
    // Inline function 'kotlin.require' call
    if (!(autoRepeatCount === 1)) {
      var message_1 = 'Only one auto-repeat call is allowed per track list';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = trackSizes.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element_2 = _iterator__ex2g4s.next_20eer_k$();
      var tmp_0;
      if (element_2 instanceof Fixed) {
        tmp_0 = null;
      } else {
        if (element_2 instanceof FitContent) {
          tmp_0 = 'Cannot use fit-content with auto-repeat';
        } else {
          if (element_2 instanceof Flex) {
            tmp_0 = 'Cannot use flex values with auto-repeat';
          } else {
            if (element_2 instanceof Keyword) {
              tmp_0 = 'Cannot use keywords with auto-repeat';
            } else {
              if (element_2 instanceof MinMax) {
                var tmp_1;
                var tmp_2;
                var tmp_3 = element_2.min_1;
                if (!(tmp_3 instanceof Fixed)) {
                  var tmp_4 = element_2.max_1;
                  tmp_2 = !(tmp_4 instanceof Fixed);
                } else {
                  tmp_2 = false;
                }
                if (tmp_2) {
                  tmp_1 = 'Cannot use minmax with auto-repeat unless at least one of the values is a fixed value (a length or percentage)';
                } else {
                  tmp_1 = null;
                }
                tmp_0 = tmp_1;
              } else {
                noWhenBranchMatchedException();
              }
            }
          }
        }
      }
      var errorMessage = tmp_0;
      // Inline function 'kotlin.require' call
      if (!(errorMessage == null)) {
        var message_2 = ensureNotNull(errorMessage);
        throw IllegalArgumentException_init_$Create$(toString(message_2));
      }
    }
  }
  function gridTemplateColumns_0(_this__u8e3s4, block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    block(this_0);
    gridTemplateColumns(_this__u8e3s4, toTrackListString_0(this_0.tracks_1));
  }
  function toTrackListString_0(_this__u8e3s4) {
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(_this__u8e3s4);
    return toTrackListString(tmp$ret$0);
  }
  function grid(_this__u8e3s4, block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new GridBuilder();
    block(this_0);
    this_0.buildInto_ndb3ht_k$(_this__u8e3s4);
  }
  function GridBuilder() {
    GridBuilderInAuto.call(this);
  }
  protoOf(GridBuilder).auto_9oitg_k$ = function (block) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new GridBuilder();
    block(this_0);
    tmp.autoBuilder_1 = this_0;
  };
  function GridBuilderInAuto() {
    this.columns_1 = null;
    this.rows_1 = null;
    this.autoBuilder_1 = null;
  }
  protoOf(GridBuilderInAuto).set_columns_gc9ooa_k$ = function (_set____db54di) {
    this.columns_1 = _set____db54di;
  };
  protoOf(GridBuilderInAuto).get_columns_gyzrhw_k$ = function () {
    return this.columns_1;
  };
  protoOf(GridBuilderInAuto).set_rows_8edm7g_k$ = function (_set____db54di) {
    this.rows_1 = _set____db54di;
  };
  protoOf(GridBuilderInAuto).get_rows_wott7m_k$ = function () {
    return this.rows_1;
  };
  protoOf(GridBuilderInAuto).set_autoBuilder_13371t_k$ = function (_set____db54di) {
    this.autoBuilder_1 = _set____db54di;
  };
  protoOf(GridBuilderInAuto).get_autoBuilder_5aiikd_k$ = function () {
    return this.autoBuilder_1;
  };
  protoOf(GridBuilderInAuto).columns_o4h109_k$ = function (block) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    block(this_0);
    tmp.columns_1 = this_0.tracks_1;
  };
  protoOf(GridBuilderInAuto).rows_c0wtyb_k$ = function (block) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    block(this_0);
    tmp.rows_1 = this_0.tracks_1;
  };
  protoOf(GridBuilderInAuto).buildInto_ndb3ht_k$ = function (scope) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Grid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display(scope, 'grid');
    var tmp0_safe_receiver = this.columns_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      gridTemplateColumns(scope, toTrackListString_0(tmp0_safe_receiver));
    }
    var tmp1_safe_receiver = this.rows_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      gridTemplateRows(scope, toTrackListString_0(tmp1_safe_receiver));
    }
    var tmp2_safe_receiver = this.autoBuilder_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp0_safe_receiver_0 = tmp2_safe_receiver.columns_1;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        gridAutoColumns(scope, toTrackListString_0(tmp0_safe_receiver_0));
      }
      var tmp1_safe_receiver_0 = tmp2_safe_receiver.rows_1;
      var tmp;
      if (tmp1_safe_receiver_0 == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        gridAutoRows(scope, toTrackListString_0(tmp1_safe_receiver_0));
        tmp = Unit_getInstance();
      }
    }
  };
  var com_varabyte_kobweb_compose_css_CSSLayerRuleDeclaration$stable;
  function layer(_this__u8e3s4, name, rulesBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = StyleSheet_init_$Create$();
    rulesBuild(this_0);
    var rules = this_0.get_cssRules_jdoznh_k$();
    _this__u8e3s4.add_19esmm_k$(new CSSLayerRuleDeclaration(name, rules));
  }
  function CSSLayerRuleDeclaration(name, rules) {
    this.name_1 = name;
    this.rules_1 = rules;
  }
  protoOf(CSSLayerRuleDeclaration).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(CSSLayerRuleDeclaration).get_rules_iy6zf2_k$ = function () {
    return this.rules_1;
  };
  protoOf(CSSLayerRuleDeclaration).get_header_e7o2vq_k$ = function () {
    return '@layer ' + this.name_1;
  };
  protoOf(CSSLayerRuleDeclaration).equals = function (other) {
    var tmp;
    if (other instanceof CSSLayerRuleDeclaration) {
      tmp = (this.name_1 === other.name_1 && equals(this.rules_1, other.rules_1));
    } else {
      tmp = false;
    }
    return tmp;
  };
  function marginBlock(_this__u8e3s4, both) {
    _this__u8e3s4.property_npxg1h_k$('margin-block', both);
  }
  function marginBlockStart(_this__u8e3s4, value) {
    _this__u8e3s4.property_npxg1h_k$('margin-block-start', value);
  }
  function verticalAlign(_this__u8e3s4, verticalAlign) {
    _this__u8e3s4.property_npxg1h_k$('vertical-align', verticalAlign);
  }
  function zIndex(_this__u8e3s4, value) {
    _this__u8e3s4.property_jk9dw6_k$('z-index', value);
  }
  function paddingInline(_this__u8e3s4, start, end) {
    start = start === VOID ? get_px(0) : start;
    end = end === VOID ? get_px(0) : end;
    _this__u8e3s4.property_wcrait_k$('padding-inline', toString(start) + ' ' + toString(end));
  }
  function Companion_26() {
    Companion_instance_26 = this;
  }
  protoOf(Companion_26).get_Baseline_bu5gku_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'baseline';
  };
  protoOf(Companion_26).get_Sub_18jjnt_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'sub';
  };
  protoOf(Companion_26).get_Super_ih5fzm_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'super';
  };
  protoOf(Companion_26).get_TextTop_5chtr3_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'text-top';
  };
  protoOf(Companion_26).get_TextBottom_zaoo69_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'text-bottom';
  };
  protoOf(Companion_26).get_Middle_1hpdq6_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'middle';
  };
  protoOf(Companion_26).get_Top_18jj1w_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'top';
  };
  protoOf(Companion_26).get_Bottom_3m75bg_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'bottom';
  };
  var Companion_instance_26;
  function Companion_getInstance_29() {
    if (Companion_instance_26 == null)
      new Companion_26();
    return Companion_instance_26;
  }
  function VerticalAlign() {
  }
  function marginBlockEnd(_this__u8e3s4, value) {
    _this__u8e3s4.property_npxg1h_k$('margin-block-end', value);
  }
  function Companion_27() {
    Companion_instance_27 = this;
  }
  protoOf(Companion_27).of_5gnbr7_k$ = function (text) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return wrapQuotesIfNecessary(text);
  };
  protoOf(Companion_27).get_ArabicIndic_7dczms_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'arabic-indic';
  };
  protoOf(Companion_27).get_Armenian_glp6oq_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'armenian';
  };
  protoOf(Companion_27).get_Bengali_p42yft_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'bengali';
  };
  protoOf(Companion_27).get_Cambodian_yjaltx_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'cambodian';
  };
  protoOf(Companion_27).get_Circle_38hx53_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'circle';
  };
  protoOf(Companion_27).get_CjkDecimal_eqj52u_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'cjk-decimal';
  };
  protoOf(Companion_27).get_CjkEarthlyBranch_kcpnsy_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'cjk-earthly-branch';
  };
  protoOf(Companion_27).get_CjkHeavenlyStem_v60yes_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'cjk-heavenly-stem';
  };
  protoOf(Companion_27).get_CjkIdeographic_325ofc_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'cjk-ideographic';
  };
  protoOf(Companion_27).get_Decimal_gq8r08_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'decimal';
  };
  protoOf(Companion_27).get_DecimalLeadingZero_5q6aue_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'decimal-leading-zero';
  };
  protoOf(Companion_27).get_Devanagari_fiqhev_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'devanagari';
  };
  protoOf(Companion_27).get_Disc_wo0b9a_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'disc';
  };
  protoOf(Companion_27).get_DisclosureClosed_juf1pa_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'disclosure-closed';
  };
  protoOf(Companion_27).get_DisclosureOpen_l759fk_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'disclosure-open';
  };
  protoOf(Companion_27).get_EthiopicNumeric_yayaef_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'ethiopic-numeric';
  };
  protoOf(Companion_27).get_Georgian_4lk93_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'georgian';
  };
  protoOf(Companion_27).get_Gujarati_j012pe_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'gujarati';
  };
  protoOf(Companion_27).get_Gurmukhi_mz1p2h_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'gurmukhi';
  };
  protoOf(Companion_27).get_Hebrew_xqwd4_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'hebrew';
  };
  protoOf(Companion_27).get_Hiragana_hja76u_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'hiragana';
  };
  protoOf(Companion_27).get_HiraganaIroha_z3xrq1_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'hiragana-iroha';
  };
  protoOf(Companion_27).get_JapaneseFormal_srlfzd_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'japanese-formal';
  };
  protoOf(Companion_27).get_JapaneseInformal_8qufwu_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'japanese-informal';
  };
  protoOf(Companion_27).get_Kannada_d9ddmn_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'kannada';
  };
  protoOf(Companion_27).get_Katakana_cguuob_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'katakana';
  };
  protoOf(Companion_27).get_KatakanaIroha_xgvh3q_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'katakana-iroha';
  };
  protoOf(Companion_27).get_Khmer_iciq6s_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'khmer';
  };
  protoOf(Companion_27).get_KoreanHangulFormal_rvp4md_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'korean-hangul-formal';
  };
  protoOf(Companion_27).get_KoreanHanjaFormal_xdca1e_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'korean-hanja-formal';
  };
  protoOf(Companion_27).get_KoreanHanjaInformal_vycz4j_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'korean-hanja-informal';
  };
  protoOf(Companion_27).get_Lao_18jpbj_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'lao';
  };
  protoOf(Companion_27).get_LowerAlpha_wmhyme_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'lower-alpha';
  };
  protoOf(Companion_27).get_LowerArmenian_u6eqrt_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'lower-armenian';
  };
  protoOf(Companion_27).get_LowerGreek_wpwbvs_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'lower-greek';
  };
  protoOf(Companion_27).get_LowerLatin_wscrak_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'lower-latin';
  };
  protoOf(Companion_27).get_LowerRoman_wvwbad_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'lower-roman';
  };
  protoOf(Companion_27).get_Malayalam_4qmsf2_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'malayalam';
  };
  protoOf(Companion_27).get_Mongolian_e4gexh_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'mongolian';
  };
  protoOf(Companion_27).get_Myanmar_h909b8_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'myanmar';
  };
  protoOf(Companion_27).get_Oriya_iew7xh_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'oriya';
  };
  protoOf(Companion_27).get_Persian_hkpriv_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'persian';
  };
  protoOf(Companion_27).get_SimpChineseFormal_vtcj22_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'simp-chinese-formal';
  };
  protoOf(Companion_27).get_SimpChineseInformal_q999un_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'simp-chinese-informal';
  };
  protoOf(Companion_27).get_Square_4go9ja_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'square';
  };
  protoOf(Companion_27).get_Tamil_ihcepm_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'tamil';
  };
  protoOf(Companion_27).get_Telugu_4qz0i9_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'telugu';
  };
  protoOf(Companion_27).get_Thai_woahvp_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'thai';
  };
  protoOf(Companion_27).get_Tibetan_6wbwv4_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'tibetan';
  };
  protoOf(Companion_27).get_TradChineseFormal_7jy5gu_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'trad-chinese-formal';
  };
  protoOf(Companion_27).get_TradChineseInformal_j8y7ih_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'trad-chinese-informal';
  };
  protoOf(Companion_27).get_UpperAlpha_f6mwsb_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'upper-alpha';
  };
  protoOf(Companion_27).get_UpperArmenian_gf87di_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'upper-armenian';
  };
  protoOf(Companion_27).get_UpperLatin_f0s445_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'upper-latin';
  };
  protoOf(Companion_27).get_UpperRoman_ex8k4c_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'upper-roman';
  };
  protoOf(Companion_27).get_None_wo6tgh_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'none';
  };
  var Companion_instance_27;
  function Companion_getInstance_30() {
    if (Companion_instance_27 == null)
      new Companion_27();
    return Companion_instance_27;
  }
  function ListStyleType() {
  }
  function Companion_28() {
    Companion_instance_28 = this;
  }
  protoOf(Companion_28).get_Inside_bggkb_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'inside';
  };
  protoOf(Companion_28).get_Outside_ai50v0_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'outside';
  };
  var Companion_instance_28;
  function Companion_getInstance_31() {
    if (Companion_instance_28 == null)
      new Companion_28();
    return Companion_instance_28;
  }
  function ListStylePosition() {
  }
  function listStyle(_this__u8e3s4, listStyle) {
    _this__u8e3s4.property_npxg1h_k$('list-style', listStyle);
  }
  function ListStyle$Companion$of$lambda(it) {
    return toString(it);
  }
  function Companion_29() {
    Companion_instance_29 = this;
  }
  protoOf(Companion_29).of_g8209t_k$ = function (type, position, image) {
    var tmp = listOfNotNull([type, position, image]);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return joinToString(tmp, ' ', VOID, VOID, VOID, VOID, ListStyle$Companion$of$lambda);
  };
  protoOf(Companion_29).of$default_lcbby4_k$ = function (type, position, image, $super) {
    type = type === VOID ? null : type;
    position = position === VOID ? null : position;
    image = image === VOID ? null : image;
    return $super === VOID ? this.of_g8209t_k$(type, position, image) : $super.of_g8209t_k$.call(this, type, position, image);
  };
  protoOf(Companion_29).get_None_wo6tgh_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'none';
  };
  var Companion_instance_29;
  function Companion_getInstance_32() {
    if (Companion_instance_29 == null)
      new Companion_29();
    return Companion_instance_29;
  }
  function ListStyle() {
  }
  var com_varabyte_kobweb_compose_css_CSSMargin$stable;
  function objectFit(_this__u8e3s4, objectFit) {
    _this__u8e3s4.property_npxg1h_k$('object-fit', objectFit);
  }
  function Companion_30() {
    Companion_instance_30 = this;
  }
  protoOf(Companion_30).get_Contain_qhyalx_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'contain';
  };
  protoOf(Companion_30).get_Cover_i8910u_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'cover';
  };
  protoOf(Companion_30).get_Fill_wo1l2k_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'fill';
  };
  protoOf(Companion_30).get_None_wo6tgh_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'none';
  };
  protoOf(Companion_30).get_ScaleDown_ala7ur_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'scale-down';
  };
  var Companion_instance_30;
  function Companion_getInstance_33() {
    if (Companion_instance_30 == null)
      new Companion_30();
    return Companion_instance_30;
  }
  function ObjectFit() {
  }
  function CssBlendModeValues() {
  }
  var com_varabyte_kobweb_compose_css_CSSOutline$stable;
  function outline(_this__u8e3s4, outline) {
    _this__u8e3s4.property_npxg1h_k$('outline', outline);
  }
  function Companion_31() {
    Companion_instance_31 = this;
  }
  protoOf(Companion_31).of_c4eeh1_k$ = function (outlineWidth, outlineStyle, outlineColor) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return joinToString(listOfNotNull([outlineWidth, outlineStyle, outlineColor]), ' ');
  };
  protoOf(Companion_31).of$default_cd0dz4_k$ = function (outlineWidth, outlineStyle, outlineColor, $super) {
    outlineWidth = outlineWidth === VOID ? null : outlineWidth;
    outlineStyle = outlineStyle === VOID ? null : outlineStyle;
    outlineColor = outlineColor === VOID ? null : outlineColor;
    return $super === VOID ? this.of_c4eeh1_k$(outlineWidth, outlineStyle, outlineColor) : $super.of_c4eeh1_k$.call(this, outlineWidth, outlineStyle, outlineColor);
  };
  protoOf(Companion_31).of_ema35v_k$ = function (outlineWidth, outlineStyle, outlineColor) {
    return this.of_c4eeh1_k$(Companion_getInstance_35().of_avfddw_k$(outlineWidth), outlineStyle, outlineColor);
  };
  protoOf(Companion_31).of$default_g4ezcj_k$ = function (outlineWidth, outlineStyle, outlineColor, $super) {
    outlineStyle = outlineStyle === VOID ? null : outlineStyle;
    outlineColor = outlineColor === VOID ? null : outlineColor;
    return $super === VOID ? this.of_ema35v_k$(outlineWidth, outlineStyle, outlineColor) : $super.of_ema35v_k$.call(this, outlineWidth, outlineStyle, outlineColor);
  };
  var Companion_instance_31;
  function Companion_getInstance_34() {
    if (Companion_instance_31 == null)
      new Companion_31();
    return Companion_instance_31;
  }
  function Outline() {
  }
  function Companion_32() {
    Companion_instance_32 = this;
  }
  protoOf(Companion_32).of_avfddw_k$ = function (value) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toString(value);
  };
  protoOf(Companion_32).get_Thin_woai2q_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'thin';
  };
  protoOf(Companion_32).get_Medium_1fiba6_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'medium';
  };
  protoOf(Companion_32).get_Thick_ihgsic_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'thick';
  };
  var Companion_instance_32;
  function Companion_getInstance_35() {
    if (Companion_instance_32 == null)
      new Companion_32();
    return Companion_instance_32;
  }
  function OutlineWidth() {
  }
  function SingleValue() {
  }
  function Mode_0() {
  }
  function Companion_33() {
    Companion_instance_33 = this;
  }
  protoOf(Companion_33).of_4oixmx_k$ = function (x, y) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toString(x) + ' ' + toString(y);
  };
  var Companion_instance_33;
  function Companion_getInstance_36() {
    if (Companion_instance_33 == null)
      new Companion_33();
    return Companion_instance_33;
  }
  function Overflow() {
  }
  function CssOverflowModeValues() {
  }
  function overflowX(_this__u8e3s4, overflowX) {
    _this__u8e3s4.property_npxg1h_k$('overflow-x', overflowX);
  }
  function overflowY(_this__u8e3s4, overflowY) {
    _this__u8e3s4.property_npxg1h_k$('overflow-y', overflowY);
  }
  function overflow(_this__u8e3s4, overflow) {
    _this__u8e3s4.property_npxg1h_k$('overflow', overflow);
  }
  var com_varabyte_kobweb_compose_css_CSSScopeRuleDeclaration$stable;
  function scope(_this__u8e3s4, start, end, rulesBuild) {
    start = start === VOID ? null : start;
    end = end === VOID ? null : end;
    // Inline function 'kotlin.apply' call
    var this_0 = StyleSheet_init_$Create$();
    rulesBuild(this_0);
    var rules = this_0.get_cssRules_jdoznh_k$();
    _this__u8e3s4.add_19esmm_k$(new CSSScopeRuleDeclaration(start, end, rules));
  }
  function CSSScopeRuleDeclaration(start, end, rules) {
    this.start_1 = start;
    this.end_1 = end;
    this.rules_1 = rules;
  }
  protoOf(CSSScopeRuleDeclaration).get_start_iypx6h_k$ = function () {
    return this.start_1;
  };
  protoOf(CSSScopeRuleDeclaration).get_end_18j6ha_k$ = function () {
    return this.end_1;
  };
  protoOf(CSSScopeRuleDeclaration).get_rules_iy6zf2_k$ = function () {
    return this.rules_1;
  };
  protoOf(CSSScopeRuleDeclaration).get_header_e7o2vq_k$ = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.append_22ad7x_k$('@scope');
    if (!(this.start_1 == null)) {
      this_0.append_22ad7x_k$(' (' + this.start_1 + ')');
    }
    if (!(this.end_1 == null)) {
      this_0.append_22ad7x_k$(' to (' + this.end_1 + ')');
    }
    return this_0.toString();
  };
  protoOf(CSSScopeRuleDeclaration).equals = function (other) {
    var tmp;
    if (other instanceof CSSScopeRuleDeclaration) {
      tmp = (this.start_1 == other.start_1 && this.end_1 == other.end_1 && equals(this.rules_1, other.rules_1));
    } else {
      tmp = false;
    }
    return tmp;
  };
  var com_varabyte_kobweb_compose_css_StyleVariable_PropertyValue$stable;
  var com_varabyte_kobweb_compose_css_StyleVariable_NumberValue$stable;
  var com_varabyte_kobweb_compose_css_StyleVariable_StringValue$stable;
  var com_varabyte_kobweb_compose_css_StyleVariable$stable;
  var com_varabyte_kobweb_compose_css_StyleVariablePropertyProvider$stable;
  var com_varabyte_kobweb_compose_css_StyleVariableNumberProvider$stable;
  var com_varabyte_kobweb_compose_css_StyleVariableStringProvider$stable;
  function setVariable(_this__u8e3s4, variable, value) {
    _this__u8e3s4.property_jk9dw6_k$('--' + variable.name_1, value);
  }
  function StyleVariable(defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariablePropertyProvider(defaultFallback, prefix);
  }
  function setVariable_0(_this__u8e3s4, variable, value) {
    _this__u8e3s4.property_npxg1h_k$('--' + variable.name_1, value);
  }
  function StyleVariable_0(prefix) {
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariablePropertyProvider(null, prefix);
  }
  function _get_defaultFallback__wdjuwe($this) {
    return $this.defaultFallback_1;
  }
  function _get_prefix__wiwq7t($this) {
    return $this.prefix_1;
  }
  function StyleVariableNumberProvider(defaultFallback, prefix) {
    this.defaultFallback_1 = defaultFallback;
    this.prefix_1 = prefix;
  }
  protoOf(StyleVariableNumberProvider).getValue_fbnwi2_k$ = function (thisRef, property) {
    return new NumberValue(provideVariableName(thisRef, property), this.defaultFallback_1, this.prefix_1);
  };
  function _get_defaultFallback__wdjuwe_0($this) {
    return $this.defaultFallback_1;
  }
  function PropertyValue(name, defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    StyleVariable_1.call(this, name, defaultFallback, prefix);
  }
  protoOf(PropertyValue).value_wk9s6x_k$ = function (fallback) {
    return this.variableValue_ovgee5_k$(fallback);
  };
  protoOf(PropertyValue).value_66g3ir_k$ = function (fallback) {
    return this.value_wk9s6x_k$((fallback == null ? true : !(fallback == null)) ? fallback : THROW_CCE());
  };
  function NumberValue(name, defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    var tmp;
    if (defaultFallback == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = defaultFallback;
    }
    StyleVariable_1.call(this, name, tmp, prefix);
  }
  protoOf(NumberValue).value_9bth3g_k$ = function (fallback) {
    var tmp;
    if (fallback == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = fallback;
    }
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.variableValue_ovgee5_k$(tmp);
  };
  protoOf(NumberValue).value_66g3ir_k$ = function (fallback) {
    return this.value_9bth3g_k$((fallback == null ? true : isNumber(fallback)) ? fallback : THROW_CCE());
  };
  function StringValue(name, defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    var tmp;
    if (defaultFallback == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = defaultFallback;
    }
    StyleVariable_1.call(this, name, tmp, prefix);
  }
  protoOf(StringValue).value_lu1i8m_k$ = function (fallback) {
    var tmp;
    if (fallback == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = fallback;
    }
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.variableValue_ovgee5_k$(tmp);
  };
  protoOf(StringValue).value_66g3ir_k$ = function (fallback) {
    return this.value_lu1i8m_k$((fallback == null ? true : typeof fallback === 'string') ? fallback : THROW_CCE());
  };
  function StyleVariable_1(name, defaultFallback, prefix) {
    this.defaultFallback_1 = defaultFallback;
    var tmp = this;
    var tmp_0;
    if (prefix == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_0 = prefix + '-' + name;
    }
    var tmp1_elvis_lhs = tmp_0;
    tmp.name_1 = tmp1_elvis_lhs == null ? name : tmp1_elvis_lhs;
  }
  protoOf(StyleVariable_1).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(StyleVariable_1).value$default_36t2hw_k$ = function (fallback, $super) {
    fallback = fallback === VOID ? null : fallback;
    return $super === VOID ? this.value_66g3ir_k$(fallback) : $super.value_66g3ir_k$.call(this, fallback);
  };
  protoOf(StyleVariable_1).variableValue_ovgee5_k$ = function (fallback) {
    var tmp1_safe_receiver = fallback == null ? this.defaultFallback_1 : fallback;
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = ', ' + toString(tmp1_safe_receiver);
    }
    var tmp2_elvis_lhs = tmp;
    // Inline function 'org.jetbrains.compose.web.css.CSSVariableValue' call
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'org.jetbrains.compose.web.css.CSSVariableValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'var(--' + this.name_1 + (tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs) + ')';
  };
  function StyleVariable_2(defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariableNumberProvider(defaultFallback, prefix);
  }
  function _get_defaultFallback__wdjuwe_1($this) {
    return $this.defaultFallback_1;
  }
  function _get_prefix__wiwq7t_0($this) {
    return $this.prefix_1;
  }
  function StyleVariablePropertyProvider(defaultFallback, prefix) {
    this.defaultFallback_1 = defaultFallback;
    this.prefix_1 = prefix;
  }
  protoOf(StyleVariablePropertyProvider).getValue_fbnwi2_k$ = function (thisRef, property) {
    return new PropertyValue(provideVariableName(thisRef, property), this.defaultFallback_1, this.prefix_1);
  };
  function StyleVariable_3(defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariablePropertyProvider(defaultFallback, prefix);
  }
  function provideVariableName(groupObject, property) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    if (!(groupObject == null)) {
      this_0.append_22ad7x_k$(removeSuffix(removeSuffix(titleCamelCaseToKebabCase(ensureNotNull(getKClassFromExpression(groupObject).get_simpleName_r6f8py_k$())), '-vars'), '-variables'));
      this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(45));
    }
    this_0.append_22ad7x_k$(removeSuffix(removeSuffix(titleCamelCaseToKebabCase(property.callableName), '-var'), '-variable'));
    return this_0.toString();
  }
  var com_varabyte_kobweb_compose_css_CSSTextShadow$stable;
  function whiteSpace(_this__u8e3s4, whiteSpace) {
    _this__u8e3s4.property_npxg1h_k$('white-space', whiteSpace);
  }
  function Companion_34() {
    Companion_instance_34 = this;
  }
  protoOf(Companion_34).get_None_wo6tgh_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'none';
  };
  protoOf(Companion_34).get_Auto_wnyn88_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'auto';
  };
  protoOf(Companion_34).get_Text_woag7q_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'text';
  };
  protoOf(Companion_34).get_Contain_qhyalx_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'contain';
  };
  protoOf(Companion_34).get_All_18jx7s_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'all';
  };
  var Companion_instance_34;
  function Companion_getInstance_37() {
    if (Companion_instance_34 == null)
      new Companion_34();
    return Companion_instance_34;
  }
  function UserSelect() {
  }
  function Companion_35() {
    Companion_instance_35 = this;
  }
  protoOf(Companion_35).get_Underline_oo7egz_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'underline';
  };
  protoOf(Companion_35).get_Overline_lz0ci7_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'overline';
  };
  protoOf(Companion_35).get_LineThrough_pr9ajs_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'line-through';
  };
  protoOf(Companion_35).get_None_wo6tgh_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'none';
  };
  var Companion_instance_35;
  function Companion_getInstance_38() {
    if (Companion_instance_35 == null)
      new Companion_35();
    return Companion_instance_35;
  }
  function TextDecorationLine() {
  }
  function userSelect(_this__u8e3s4, userSelect) {
    _this__u8e3s4.property_npxg1h_k$('user-select', userSelect);
  }
  function Companion_36() {
    Companion_instance_36 = this;
  }
  protoOf(Companion_36).get_Left_wo5bw0_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'left';
  };
  protoOf(Companion_36).get_Right_igdsyb_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'right';
  };
  protoOf(Companion_36).get_Center_3arb0i_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'center';
  };
  protoOf(Companion_36).get_Justify_84qi6f_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'justify';
  };
  protoOf(Companion_36).get_JustifyAll_vzjb16_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'justify-all';
  };
  protoOf(Companion_36).get_Start_ih4i6x_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'start';
  };
  protoOf(Companion_36).get_End_18ju7i_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'end';
  };
  protoOf(Companion_36).get_MatchParent_4236be_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'match-parent';
  };
  var Companion_instance_36;
  function Companion_getInstance_39() {
    if (Companion_instance_36 == null)
      new Companion_36();
    return Companion_instance_36;
  }
  function TextAlign() {
  }
  function textDecorationLine(_this__u8e3s4, textDecorationLines) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(textDecorationLines.length === 0)) {
      _this__u8e3s4.property_wcrait_k$('text-decoration-line', joinToString_0(textDecorationLines, ' '));
    }
  }
  function textAlign(_this__u8e3s4, textAlign) {
    _this__u8e3s4.property_npxg1h_k$('text-align', textAlign);
  }
  function Companion_37() {
    Companion_instance_37 = this;
  }
  protoOf(Companion_37).get_Normal_22avww_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'normal';
  };
  protoOf(Companion_37).get_NoWrap_21tqz8_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'nowrap';
  };
  protoOf(Companion_37).get_Pre_18jlye_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'pre';
  };
  protoOf(Companion_37).get_PreWrap_nintz8_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'pre-wrap';
  };
  protoOf(Companion_37).get_PreLine_nigmr2_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'pre-line';
  };
  protoOf(Companion_37).get_BreakSpaces_6b23jx_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'break-spaces';
  };
  var Companion_instance_37;
  function Companion_getInstance_40() {
    if (Companion_instance_37 == null)
      new Companion_37();
    return Companion_instance_37;
  }
  function WhiteSpace() {
  }
  function translateX(_this__u8e3s4, tx) {
    translate(_this__u8e3s4, tx);
  }
  function rotate(_this__u8e3s4, a) {
    _this__u8e3s4.property_npxg1h_k$('rotate', a);
  }
  function translate(_this__u8e3s4, tx) {
    _this__u8e3s4.property_npxg1h_k$('translate', tx);
  }
  function Listable_3() {
  }
  function Companion_38() {
    Companion_instance_38 = this;
  }
  protoOf(Companion_38).get_None_wo6tgh_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'none';
  };
  protoOf(Companion_38).of_sy0jte_k$ = function (property, duration, timingFunction, delay, behavior) {
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$();
    this_0.add_utx5q5_k$(toString(property));
    if (duration == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this_0.add_utx5q5_k$(toString(duration));
    }
    if (timingFunction == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this_0.add_utx5q5_k$(toString(timingFunction));
    }
    if (!(delay == null)) {
      if (duration == null) {
        this_0.add_utx5q5_k$('0s');
      }
      this_0.add_utx5q5_k$(toString(delay));
    }
    if (behavior == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this_0.add_utx5q5_k$(toString(behavior));
    }
    var tmp$ret$9 = this_0.build_nmwvly_k$();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return joinToString(tmp$ret$9, ' ');
  };
  protoOf(Companion_38).of$default_ren6e4_k$ = function (property, duration, timingFunction, delay, behavior, $super) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    behavior = behavior === VOID ? null : behavior;
    return $super === VOID ? this.of_sy0jte_k$(property, duration, timingFunction, delay, behavior) : $super.of_sy0jte_k$.call(this, property, duration, timingFunction, delay, behavior);
  };
  protoOf(Companion_38).of_9dpxvg_k$ = function (property, duration, timingFunction, delay, behavior) {
    return this.of_sy0jte_k$(Companion_getInstance_42().of_5gnbr7_k$(property), duration, timingFunction, delay, behavior);
  };
  protoOf(Companion_38).of$default_ehijui_k$ = function (property, duration, timingFunction, delay, behavior, $super) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    behavior = behavior === VOID ? null : behavior;
    return $super === VOID ? this.of_9dpxvg_k$(property, duration, timingFunction, delay, behavior) : $super.of_9dpxvg_k$.call(this, property, duration, timingFunction, delay, behavior);
  };
  protoOf(Companion_38).list_jeggvm_k$ = function (transitions) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return joinToString_0(transitions);
  };
  protoOf(Companion_38).all_radqjm_k$ = function (duration, timingFunction, delay, behavior) {
    return this.of_sy0jte_k$(Companion_getInstance_42().get_All_18jx7s_k$(), duration, timingFunction, delay, behavior);
  };
  protoOf(Companion_38).all$default_bcbycy_k$ = function (duration, timingFunction, delay, behavior, $super) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    behavior = behavior === VOID ? null : behavior;
    return $super === VOID ? this.all_radqjm_k$(duration, timingFunction, delay, behavior) : $super.all_radqjm_k$.call(this, duration, timingFunction, delay, behavior);
  };
  protoOf(Companion_38).group_ketaxq_k$ = function (properties, duration, timingFunction, delay, behavior) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(properties, 10));
    var _iterator__ex2g4s = properties.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var item = _iterator__ex2g4s.next_20eer_k$();
      var tmp$ret$0 = Companion_getInstance_41().of_9dpxvg_k$(item, duration, timingFunction, delay, behavior);
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return joinToString(destination);
  };
  protoOf(Companion_38).group$default_78h45q_k$ = function (properties, duration, timingFunction, delay, behavior, $super) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    behavior = behavior === VOID ? null : behavior;
    return $super === VOID ? this.group_ketaxq_k$(properties, duration, timingFunction, delay, behavior) : $super.group_ketaxq_k$.call(this, properties, duration, timingFunction, delay, behavior);
  };
  protoOf(Companion_38).group_blhpe8_k$ = function (properties, duration, timingFunction, delay, behavior) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(properties, 10));
    var _iterator__ex2g4s = properties.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var item = _iterator__ex2g4s.next_20eer_k$();
      var tmp$ret$0 = Companion_getInstance_41().of_sy0jte_k$(item, duration, timingFunction, delay, behavior);
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return joinToString(destination);
  };
  protoOf(Companion_38).group$default_gdth0g_k$ = function (properties, duration, timingFunction, delay, behavior, $super) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    behavior = behavior === VOID ? null : behavior;
    return $super === VOID ? this.group_blhpe8_k$(properties, duration, timingFunction, delay, behavior) : $super.group_blhpe8_k$.call(this, properties, duration, timingFunction, delay, behavior);
  };
  var Companion_instance_38;
  function Companion_getInstance_41() {
    if (Companion_instance_38 == null)
      new Companion_38();
    return Companion_instance_38;
  }
  function Transition() {
  }
  function transition(_this__u8e3s4, transition) {
    _this__u8e3s4.property_npxg1h_k$('transition', transition);
  }
  function Name() {
  }
  function Companion_39() {
    Companion_instance_39 = this;
  }
  protoOf(Companion_39).of_5gnbr7_k$ = function (customValue) {
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(customValue) > 0) {
      var tmp$ret$2;
      $l$block: {
        // Inline function 'kotlin.text.none' call
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(customValue)) {
          var element = charSequenceGet(customValue, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          if (isWhitespace(element)) {
            tmp$ret$2 = false;
            break $l$block;
          }
        }
        tmp$ret$2 = true;
      }
      tmp = tmp$ret$2;
    } else {
      tmp = false;
    }
    // Inline function 'kotlin.require' call
    if (!tmp) {
      var message = 'Invalid transition property name. A property shouldn\'t contain any spaces, but got "' + customValue + '".';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return customValue;
  };
  protoOf(Companion_39).get_None_wo6tgh_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'none';
  };
  protoOf(Companion_39).get_All_18jx7s_k$ = function () {
    return this.of_5gnbr7_k$('all');
  };
  var Companion_instance_39;
  function Companion_getInstance_42() {
    if (Companion_instance_39 == null)
      new Companion_39();
    return Companion_instance_39;
  }
  function TransitionProperty() {
  }
  function Listable_4() {
  }
  function Companion_40() {
    Companion_instance_40 = this;
  }
  protoOf(Companion_40).list_7uyshs_k$ = function (behaviors) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return joinToString_0(behaviors);
  };
  protoOf(Companion_40).get_AllowDiscrete_xtiqjr_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'allow-discrete';
  };
  protoOf(Companion_40).get_Normal_22avww_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'normal';
  };
  var Companion_instance_40;
  function Companion_getInstance_43() {
    if (Companion_instance_40 == null)
      new Companion_40();
    return Companion_instance_40;
  }
  function TransitionBehavior() {
  }
  function transitionProperty(_this__u8e3s4, properties) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(properties.length === 0)) {
      _this__u8e3s4.property_wcrait_k$('transition-property', joinToString_0(properties));
    }
  }
  function transitionProperty_0(_this__u8e3s4, properties) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(properties.length);
    var inductionVariable = 0;
    var last = properties.length;
    while (inductionVariable < last) {
      var item = properties[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$0 = Companion_getInstance_42().of_5gnbr7_k$(item);
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$3 = copyToArray(destination);
    transitionProperty(_this__u8e3s4, tmp$ret$3.slice());
  }
  function transitionDuration(_this__u8e3s4, durations) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(durations.length === 0)) {
      _this__u8e3s4.property_wcrait_k$('transition-duration', joinToString_0(durations));
    }
  }
  function transitionTimingFunction(_this__u8e3s4, timingFunctions) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(timingFunctions.length === 0)) {
      _this__u8e3s4.property_wcrait_k$('transition-timing-function', joinToString_0(timingFunctions, VOID, VOID, VOID, VOID, VOID, transitionTimingFunction$lambda));
    }
  }
  function transitionDelay(_this__u8e3s4, delays) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(delays.length === 0)) {
      _this__u8e3s4.property_wcrait_k$('transition-delay', joinToString_0(delays));
    }
  }
  function transitionBehavior(_this__u8e3s4, behavior) {
    _this__u8e3s4.property_npxg1h_k$('transition-behavior', behavior);
  }
  function transitionTimingFunction$lambda(it) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return it;
  }
  function Companion_41() {
    Companion_instance_41 = this;
  }
  protoOf(Companion_41).of_dq0j3b_k$ = function (url) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return url.toString();
  };
  protoOf(Companion_41).of_jjeryt_k$ = function (gradient) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return gradient.toString();
  };
  protoOf(Companion_41).get_None_wo6tgh_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'none';
  };
  var Companion_instance_41;
  function Companion_getInstance_44() {
    if (Companion_instance_41 == null)
      new Companion_41();
    return Companion_instance_41;
  }
  function CSSImage() {
  }
  var com_varabyte_kobweb_compose_css_functions_CalcScope_CalcNum$stable;
  function calc(action) {
    // Inline function 'kotlin.with' call
    return action(CalcScopeInstance_getInstance());
  }
  function _get_value__a43j40_4($this) {
    return $this.value_1;
  }
  function CalcNum(value) {
    Number_0.call(this);
    this.value_1 = value;
  }
  protoOf(CalcNum).toString = function () {
    return this.value_1;
  };
  protoOf(CalcNum).toInt_1tsl84_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.value_1;
  };
  protoOf(CalcNum).toLong_edfucp_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.value_1;
  };
  protoOf(CalcNum).toFloat_jhbgwv_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.value_1;
  };
  protoOf(CalcNum).toDouble_ygsx0s_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.value_1;
  };
  protoOf(CalcNum).toByte_edm0nx_k$ = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(CalcNum).toShort_ja8oqn_k$ = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(CalcNum).plus_4ppioj_k$ = function (b) {
    return new CalcNum('calc(' + this.toString() + ' + ' + b.toString() + ')');
  };
  protoOf(CalcNum).minus_wfjn7n_k$ = function (b) {
    return new CalcNum('calc(' + this.toString() + ' - ' + b.toString() + ')');
  };
  protoOf(CalcNum).times_z3zgpl_k$ = function (b) {
    return new CalcNum('calc(' + this.toString() + ' * ' + b.toString() + ')');
  };
  protoOf(CalcNum).div_8ho5ac_k$ = function (b) {
    return new CalcNum('calc(' + this.toString() + ' / ' + b.toString() + ')');
  };
  protoOf(CalcNum).unaryMinus_6uz0qp_k$ = function () {
    return new CalcNum('calc(-1 * ' + this.toString() + ')');
  };
  protoOf(CalcNum).unaryPlus_g9fn1l_k$ = function () {
    return new CalcNum('calc(1 * ' + this.toString() + ')');
  };
  protoOf(CalcNum).plus_46f1vh_k$ = function (b) {
    return new CalcNum('calc(' + this.toString() + ' + ' + b.toString() + ')');
  };
  protoOf(CalcNum).minus_wyu40p_k$ = function (b) {
    return new CalcNum('calc(' + this.toString() + ' - ' + b.toString() + ')');
  };
  protoOf(CalcNum).times_zdu4gh_k$ = function (b) {
    return new CalcNum('calc(' + this.toString() + ' * ' + b.toString() + ')');
  };
  protoOf(CalcNum).div_90ym3e_k$ = function (b) {
    return new CalcNum('calc(' + this.toString() + ' / ' + b.toString() + ')');
  };
  function CalcScope() {
  }
  function CalcScopeInstance() {
    CalcScopeInstance_instance = this;
  }
  var CalcScopeInstance_instance;
  function CalcScopeInstance_getInstance() {
    if (CalcScopeInstance_instance == null)
      new CalcScopeInstance();
    return CalcScopeInstance_instance;
  }
  var com_varabyte_kobweb_compose_css_functions_CSSFilter$stable;
  var com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry_Color_Simple$stable;
  var com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry_Color_Stop$stable;
  var com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry_Color_StopRange$stable;
  var com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry_Color$stable;
  var com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry_Hint$stable;
  var com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry$stable;
  var com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder$stable;
  var com_varabyte_kobweb_compose_css_functions_RepeatingGradient$stable;
  var com_varabyte_kobweb_compose_css_functions_LinearGradient_Base$stable;
  var com_varabyte_kobweb_compose_css_functions_LinearGradient_ByDirection$stable;
  var com_varabyte_kobweb_compose_css_functions_LinearGradient_ByAngle$stable;
  var com_varabyte_kobweb_compose_css_functions_LinearGradient$stable;
  var com_varabyte_kobweb_compose_css_functions_RadialGradient_Shape_Circle$stable;
  var com_varabyte_kobweb_compose_css_functions_RadialGradient_Shape_Ellipse$stable;
  var com_varabyte_kobweb_compose_css_functions_RadialGradient_Shape$stable;
  var com_varabyte_kobweb_compose_css_functions_RadialGradient$stable;
  var com_varabyte_kobweb_compose_css_functions_ConicGradient$stable;
  var Direction_ToTop_instance;
  var Direction_ToTopRight_instance;
  var Direction_ToRight_instance;
  var Direction_ToBottomRight_instance;
  var Direction_ToBottom_instance;
  var Direction_ToBottomLeft_instance;
  var Direction_ToLeft_instance;
  var Direction_ToTopLeft_instance;
  function values_2() {
    return [Direction_ToTop_getInstance(), Direction_ToTopRight_getInstance(), Direction_ToRight_getInstance(), Direction_ToBottomRight_getInstance(), Direction_ToBottom_getInstance(), Direction_ToBottomLeft_getInstance(), Direction_ToLeft_getInstance(), Direction_ToTopLeft_getInstance()];
  }
  function valueOf_2(value) {
    switch (value) {
      case 'ToTop':
        return Direction_ToTop_getInstance();
      case 'ToTopRight':
        return Direction_ToTopRight_getInstance();
      case 'ToRight':
        return Direction_ToRight_getInstance();
      case 'ToBottomRight':
        return Direction_ToBottomRight_getInstance();
      case 'ToBottom':
        return Direction_ToBottom_getInstance();
      case 'ToBottomLeft':
        return Direction_ToBottomLeft_getInstance();
      case 'ToLeft':
        return Direction_ToLeft_getInstance();
      case 'ToTopLeft':
        return Direction_ToTopLeft_getInstance();
      default:
        Direction_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_2() {
    if ($ENTRIES_2 == null)
      $ENTRIES_2 = enumEntries(values_2());
    return $ENTRIES_2;
  }
  var Direction_entriesInitialized;
  function Direction_initEntries() {
    if (Direction_entriesInitialized)
      return Unit_getInstance();
    Direction_entriesInitialized = true;
    Direction_ToTop_instance = new Direction('ToTop', 0);
    Direction_ToTopRight_instance = new Direction('ToTopRight', 1);
    Direction_ToRight_instance = new Direction('ToRight', 2);
    Direction_ToBottomRight_instance = new Direction('ToBottomRight', 3);
    Direction_ToBottom_instance = new Direction('ToBottom', 4);
    Direction_ToBottomLeft_instance = new Direction('ToBottomLeft', 5);
    Direction_ToLeft_instance = new Direction('ToLeft', 6);
    Direction_ToTopLeft_instance = new Direction('ToTopLeft', 7);
  }
  var $ENTRIES_2;
  function _get_gradientStr__zhnu1c($this) {
    return $this.gradientStr_1;
  }
  function Direction(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(Direction).toString = function () {
    var tmp;
    switch (this.get_ordinal_ip24qg_k$()) {
      case 0:
        tmp = 'to top';
        break;
      case 1:
        tmp = 'to top right';
        break;
      case 2:
        tmp = 'to right';
        break;
      case 3:
        tmp = 'to bottom right';
        break;
      case 4:
        tmp = 'to bottom';
        break;
      case 5:
        tmp = 'to bottom left';
        break;
      case 6:
        tmp = 'to left';
        break;
      case 7:
        tmp = 'to top left';
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  function Base(dir, interpolation, entries) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.append_22ad7x_k$(joinToString(listOfNotNull([dir, interpolation]), ' '));
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(this_0) > 0) {
      this_0.append_22ad7x_k$(', ');
    }
    this_0.append_22ad7x_k$(joinToString_0(entries));
    var tmp$ret$3 = this_0.toString();
    LinearGradient.call(this, tmp$ret$3);
  }
  function ByDirection(dir, interpolation, entries) {
    Base.call(this, dir, interpolation, entries.slice());
  }
  function ByAngle(angle, interpolation, entries) {
    Base.call(this, angle, interpolation, entries.slice());
  }
  function Direction_ToTop_getInstance() {
    Direction_initEntries();
    return Direction_ToTop_instance;
  }
  function Direction_ToTopRight_getInstance() {
    Direction_initEntries();
    return Direction_ToTopRight_instance;
  }
  function Direction_ToRight_getInstance() {
    Direction_initEntries();
    return Direction_ToRight_instance;
  }
  function Direction_ToBottomRight_getInstance() {
    Direction_initEntries();
    return Direction_ToBottomRight_instance;
  }
  function Direction_ToBottom_getInstance() {
    Direction_initEntries();
    return Direction_ToBottom_instance;
  }
  function Direction_ToBottomLeft_getInstance() {
    Direction_initEntries();
    return Direction_ToBottomLeft_instance;
  }
  function Direction_ToLeft_getInstance() {
    Direction_initEntries();
    return Direction_ToLeft_instance;
  }
  function Direction_ToTopLeft_getInstance() {
    Direction_initEntries();
    return Direction_ToTopLeft_instance;
  }
  function LinearGradient(gradientStr) {
    this.gradientStr_1 = gradientStr;
  }
  protoOf(LinearGradient).toString = function () {
    return 'linear-gradient(' + this.gradientStr_1 + ')';
  };
  function Simple(value) {
    Color_0.call(this, toString(value));
  }
  function Stop(color, stop) {
    Color_0.call(this, toString(color) + ' ' + toString(stop));
  }
  function StopRange(color, from, to) {
    Color_0.call(this, toString(color) + ' ' + toString(from) + ' ' + toString(to));
  }
  function _get_entryStr__gktpos($this) {
    return $this.entryStr_1;
  }
  function Color_0(value) {
    Entry.call(this, value);
    this.value_1 = value;
  }
  protoOf(Color_0).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  function Hint(value) {
    Entry.call(this, toString(value));
    this.value_1 = value;
  }
  protoOf(Hint).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  function Entry(entryStr) {
    this.entryStr_1 = entryStr;
  }
  protoOf(Entry).toString = function () {
    return this.entryStr_1;
  };
  function _get_entries__iz8n5($this) {
    return $this.entries_1;
  }
  function ColorStopsBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.entries_1 = ArrayList_init_$Create$();
  }
  protoOf(ColorStopsBuilder).verifiedEntries_q37nr2_k$ = function () {
    var tmp0 = this.entries_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.collections.count' call
      var tmp;
      if (isInterface(tmp0, Collection)) {
        tmp = tmp0.isEmpty_y1axqb_k$();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      var count = 0;
      var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        if (element instanceof Color_0) {
          count = count + 1 | 0;
          checkCountOverflow(count);
        }
      }
      tmp$ret$0 = count;
    }
    // Inline function 'kotlin.check' call
    if (!(tmp$ret$0 >= 2)) {
      var message = 'A gradient should consistent of at least two color entries (an initial color and an end color)';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var _iterator__ex2g4s_0 = this.entries_1.iterator_jk1svi_k$();
    while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
      var item = _iterator__ex2g4s_0.next_20eer_k$();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      var i = checkIndexOverflow(_unary__edvuaz);
      if (item instanceof Hint) {
        var tmp_0;
        var tmp_1 = getOrNull(this.entries_1, i - 1 | 0);
        if (tmp_1 instanceof Color_0) {
          var tmp_2 = getOrNull(this.entries_1, i + 1 | 0);
          tmp_0 = tmp_2 instanceof Color_0;
        } else {
          tmp_0 = false;
        }
        // Inline function 'kotlin.check' call
        if (!tmp_0) {
          var message_0 = 'A gradient color midpoint must only be added between two colors';
          throw IllegalStateException_init_$Create$(toString(message_0));
        }
      }
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = this.entries_1;
    return copyToArray(this_0);
  };
  protoOf(ColorStopsBuilder).add_ad4gbn_k$ = function (color) {
    return this.entries_1.add_utx5q5_k$(new Simple(color));
  };
  protoOf(ColorStopsBuilder).add_hkfvmd_k$ = function (color, stop) {
    return this.entries_1.add_utx5q5_k$(new Stop(color, stop));
  };
  protoOf(ColorStopsBuilder).add_8cat99_k$ = function (color, from, to) {
    return this.entries_1.add_utx5q5_k$(new StopRange(color, from, to));
  };
  protoOf(ColorStopsBuilder).setMidpoint_jac6ry_k$ = function (hint) {
    return this.entries_1.add_utx5q5_k$(new Hint(hint));
  };
  function Gradient() {
  }
  function linearGradient(from, to, dir, interpolation) {
    interpolation = interpolation === VOID ? null : interpolation;
    return linearGradient_0(dir, interpolation, linearGradient$lambda(from, to));
  }
  function linearGradient_0(dir, interpolation, init) {
    interpolation = interpolation === VOID ? null : interpolation;
    // Inline function 'kotlin.apply' call
    var this_0 = new ColorStopsBuilder();
    init(this_0);
    // Inline function 'kotlin.let' call
    return new ByDirection(dir, interpolation, this_0.verifiedEntries_q37nr2_k$().slice());
  }
  function linearGradient$lambda($from, $to) {
    return function ($this$linearGradient) {
      $this$linearGradient.add_ad4gbn_k$($from);
      $this$linearGradient.add_ad4gbn_k$($to);
      return Unit_getInstance();
    };
  }
  var com_varabyte_kobweb_compose_css_functions_CSSClamp$stable;
  var com_varabyte_kobweb_compose_css_functions_CSSMin$stable;
  var com_varabyte_kobweb_compose_css_functions_CSSMax$stable;
  var com_varabyte_kobweb_compose_css_functions_CSSUrl$stable;
  function _get_url__e6i4g2($this) {
    return $this.url_1;
  }
  function CSSUrl(url) {
    this.url_1 = url;
  }
  protoOf(CSSUrl).toString = function () {
    return 'url("' + this.url_1 + '")';
  };
  var com_varabyte_kobweb_compose_dom_ElementRefScope_RefCallback_Simple$stable;
  var com_varabyte_kobweb_compose_dom_ElementRefScope_RefCallback_Disposable$stable;
  var com_varabyte_kobweb_compose_dom_ElementRefScope_RefCallback$stable;
  var com_varabyte_kobweb_compose_dom_ElementRefScope_KeysToEffect$stable;
  var com_varabyte_kobweb_compose_dom_ElementRefScope_Builder$stable;
  var com_varabyte_kobweb_compose_dom_ElementRefScope$stable;
  function registerRefScope(_this__u8e3s4, scope, transform, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(1100234072);
    if (scope == null) {
      $composer_0.endReplaceGroup_ek144q_k$();
      return Unit_getInstance();
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = scope.keyedCallbacks_1.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'kotlin.collections.toTypedArray' call
      var this_0 = element.keys_1;
      var tmp = copyToArray(this_0).slice();
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!($composer_0.changedInstance_s1wkiy_k$(element) | (($changed & 896 ^ 384) > 256 && $composer_0.changed_ga7h3f_k$(transform) || ($changed & 384) === 256)) | $composer_0.changedInstance_s1wkiy_k$(_this__u8e3s4));
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        var value = registerRefScope$lambda(element, transform, _this__u8e3s4);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp$ret$4 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      DisposableEffect(tmp, tmp$ret$4, $composer_0, 0);
    }
    $composer_0.endReplaceGroup_ek144q_k$();
  }
  function com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter() {
    return com_varabyte_kobweb_compose_dom_ElementRefScope$stable;
  }
  function registerRefScope_0(_this__u8e3s4, scope, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false || it === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
      var value = registerRefScope$lambda_0;
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    registerRefScope(_this__u8e3s4, scope, tmp$ret$3, $composer_0, 384 | 14 & $changed | 112 & $changed);
  }
  function ElementRefScope$RefCallback$Simple$invoke$$inlined$onDispose$1() {
  }
  protoOf(ElementRefScope$RefCallback$Simple$invoke$$inlined$onDispose$1).dispose_3nnxhr_k$ = function () {
  };
  function Simple_0(handle) {
    RefCallback.call(this);
    this.handle_1 = handle;
  }
  protoOf(Simple_0).get_handle_e5p7ht_k$ = function () {
    return this.handle_1;
  };
  protoOf(Simple_0).invoke_64dhf5_k$ = function (scope, element) {
    this.handle_1(element);
    // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
    return new ElementRefScope$RefCallback$Simple$invoke$$inlined$onDispose$1();
  };
  protoOf(Simple_0).component1_7eebsc_k$ = function () {
    return this.handle_1;
  };
  protoOf(Simple_0).copy_t6xq8u_k$ = function (handle) {
    return new Simple_0(handle);
  };
  protoOf(Simple_0).copy$default_xzeph6_k$ = function (handle, $super) {
    handle = handle === VOID ? this.handle_1 : handle;
    return $super === VOID ? this.copy_t6xq8u_k$(handle) : $super.copy_t6xq8u_k$.call(this, handle);
  };
  protoOf(Simple_0).toString = function () {
    return 'Simple(handle=' + toString(this.handle_1) + ')';
  };
  protoOf(Simple_0).hashCode = function () {
    return hashCode(this.handle_1);
  };
  protoOf(Simple_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Simple_0))
      return false;
    var tmp0_other_with_cast = other instanceof Simple_0 ? other : THROW_CCE();
    if (!equals(this.handle_1, tmp0_other_with_cast.handle_1))
      return false;
    return true;
  };
  function Disposable(effect) {
    RefCallback.call(this);
    this.effect_1 = effect;
  }
  protoOf(Disposable).get_effect_ct67x6_k$ = function () {
    return this.effect_1;
  };
  protoOf(Disposable).invoke_64dhf5_k$ = function (scope, element) {
    return this.effect_1(scope, element);
  };
  protoOf(Disposable).component1_7eebsc_k$ = function () {
    return this.effect_1;
  };
  protoOf(Disposable).copy_jgzjgq_k$ = function (effect) {
    return new Disposable(effect);
  };
  protoOf(Disposable).copy$default_46k12y_k$ = function (effect, $super) {
    effect = effect === VOID ? this.effect_1 : effect;
    return $super === VOID ? this.copy_jgzjgq_k$(effect) : $super.copy_jgzjgq_k$.call(this, effect);
  };
  protoOf(Disposable).toString = function () {
    return 'Disposable(effect=' + toString(this.effect_1) + ')';
  };
  protoOf(Disposable).hashCode = function () {
    return hashCode(this.effect_1);
  };
  protoOf(Disposable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Disposable))
      return false;
    var tmp0_other_with_cast = other instanceof Disposable ? other : THROW_CCE();
    if (!equals(this.effect_1, tmp0_other_with_cast.effect_1))
      return false;
    return true;
  };
  function _get_keyedCallbacks__mth523($this) {
    return $this.keyedCallbacks_1;
  }
  function RefCallback() {
  }
  function KeysToEffect(keys, refCallback) {
    this.keys_1 = keys;
    this.refCallback_1 = refCallback;
  }
  protoOf(KeysToEffect).get_keys_wop4xp_k$ = function () {
    return this.keys_1;
  };
  protoOf(KeysToEffect).get_refCallback_52b629_k$ = function () {
    return this.refCallback_1;
  };
  protoOf(KeysToEffect).component1_7eebsc_k$ = function () {
    return this.keys_1;
  };
  protoOf(KeysToEffect).component2_7eebsb_k$ = function () {
    return this.refCallback_1;
  };
  protoOf(KeysToEffect).copy_36kynk_k$ = function (keys, refCallback) {
    return new KeysToEffect(keys, refCallback);
  };
  protoOf(KeysToEffect).copy$default_2gjwzt_k$ = function (keys, refCallback, $super) {
    keys = keys === VOID ? this.keys_1 : keys;
    refCallback = refCallback === VOID ? this.refCallback_1 : refCallback;
    return $super === VOID ? this.copy_36kynk_k$(keys, refCallback) : $super.copy_36kynk_k$.call(this, keys, refCallback);
  };
  protoOf(KeysToEffect).toString = function () {
    return 'KeysToEffect(keys=' + toString(this.keys_1) + ', refCallback=' + toString(this.refCallback_1) + ')';
  };
  protoOf(KeysToEffect).hashCode = function () {
    var result = hashCode(this.keys_1);
    result = imul(result, 31) + hashCode(this.refCallback_1) | 0;
    return result;
  };
  protoOf(KeysToEffect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KeysToEffect))
      return false;
    var tmp0_other_with_cast = other instanceof KeysToEffect ? other : THROW_CCE();
    if (!equals(this.keys_1, tmp0_other_with_cast.keys_1))
      return false;
    if (!equals(this.refCallback_1, tmp0_other_with_cast.refCallback_1))
      return false;
    return true;
  };
  function Builder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.keyedCallbacks_1 = ArrayList_init_$Create$();
  }
  protoOf(Builder).ref_ilxxe0_k$ = function (keys, handle) {
    this.keyedCallbacks_1.add_utx5q5_k$(new KeysToEffect(toList(keys), new Simple_0(handle)));
  };
  protoOf(Builder).disposableRef_sdjxhc_k$ = function (keys, effect) {
    this.keyedCallbacks_1.add_utx5q5_k$(new KeysToEffect(toList(keys), new Disposable(effect)));
  };
  protoOf(Builder).add_uaq22z_k$ = function (other) {
    if (!(other == null)) {
      this.keyedCallbacks_1.addAll_4lagoh_k$(other.keyedCallbacks_1);
    }
  };
  protoOf(Builder).build_l9cn20_k$ = function () {
    return new ElementRefScope(this.keyedCallbacks_1);
  };
  function ElementRefScope(keyedCallbacks) {
    this.keyedCallbacks_1 = keyedCallbacks;
  }
  protoOf(ElementRefScope).get_keyedCallbacks_k6udlf_k$ = function () {
    return this.keyedCallbacks_1;
  };
  protoOf(ElementRefScope).component1_cmggya_k$ = function () {
    return this.keyedCallbacks_1;
  };
  protoOf(ElementRefScope).copy_1mi07e_k$ = function (keyedCallbacks) {
    return new ElementRefScope(keyedCallbacks);
  };
  protoOf(ElementRefScope).copy$default_dzqv18_k$ = function (keyedCallbacks, $super) {
    keyedCallbacks = keyedCallbacks === VOID ? this.keyedCallbacks_1 : keyedCallbacks;
    return $super === VOID ? this.copy_1mi07e_k$(keyedCallbacks) : $super.copy_1mi07e_k$.call(this, keyedCallbacks);
  };
  protoOf(ElementRefScope).toString = function () {
    return 'ElementRefScope(keyedCallbacks=' + toString(this.keyedCallbacks_1) + ')';
  };
  protoOf(ElementRefScope).hashCode = function () {
    return hashCode(this.keyedCallbacks_1);
  };
  protoOf(ElementRefScope).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementRefScope))
      return false;
    var tmp0_other_with_cast = other instanceof ElementRefScope ? other : THROW_CCE();
    if (!equals(this.keyedCallbacks_1, tmp0_other_with_cast.keyedCallbacks_1))
      return false;
    return true;
  };
  function registerRefScope$lambda($keyedCallback, $transform, $this_registerRefScope) {
    return function ($this$DisposableEffect) {
      return $keyedCallback.refCallback_1.invoke_64dhf5_k$($this$DisposableEffect, $transform($this_registerRefScope.get_scopeElement_61kop2_k$($this$DisposableEffect)));
    };
  }
  function registerRefScope$lambda_0(it) {
    return it;
  }
  var com_varabyte_kobweb_compose_dom_GenericElementBuilder$stable;
  var com_varabyte_kobweb_compose_dom_GenericNamespacedElementBuilder$stable;
  function GenericTag(name, namespace, attrs, content, $composer, $changed, $default) {
    var namespace_0 = {_v: namespace};
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1162580906);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(name) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(namespace_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content_0._v) ? 2048 : 1024);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 1171) === 1170), $dirty & 1)) {
      if (!(($default & 2) === 0)) {
        namespace_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        content_0._v = null;
      }
      var tmp0_safe_receiver = namespace_0._v;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp = Companion_getInstance_45().create_dmzjy4_k$(tmp0_safe_receiver, name);
      }
      var tmp1_elvis_lhs = tmp;
      var tmp_0 = tmp1_elvis_lhs == null ? Companion_getInstance_46().create_oysagu_k$(name) : tmp1_elvis_lhs;
      TagElement(isInterface(tmp_0, ElementBuilder) ? tmp_0 : THROW_CCE(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty >> 3 | 896 & $dirty >> 3);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver_0 = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      tmp0_safe_receiver_0.updateScope_t8jcf_k$(GenericTag$lambda(name, namespace_0, attrs_0, content_0, $changed, $default));
    }
  }
  function _get_cachedBuilders__emr31r($this) {
    return $this.cachedBuilders_1;
  }
  function _get_namespace__iwxsq2($this) {
    return $this.namespace_1;
  }
  function _get_qualifiedName__o5yty($this) {
    return $this.qualifiedName_1;
  }
  function Companion_42() {
    Companion_instance_42 = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.cachedBuilders_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(Companion_42).create_dmzjy4_k$ = function (namespace, qualifiedName) {
    var tmp0 = this.cachedBuilders_1;
    // Inline function 'kotlin.collections.getOrPut' call
    var key = to(namespace, qualifiedName);
    var value = tmp0.get_wei43m_k$(key);
    var tmp;
    if (value == null) {
      var answer = new GenericNamespacedElementBuilder(namespace, qualifiedName);
      tmp0.put_4fpzoq_k$(key, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    return tmp;
  };
  var Companion_instance_42;
  function Companion_getInstance_45() {
    if (Companion_instance_42 == null)
      new Companion_42();
    return Companion_instance_42;
  }
  function _get_element__z0t21h($this) {
    var tmp0 = $this.element$delegate_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('element', 1, tmp, GenericNamespacedElementBuilder$_get_element_$ref_eof03j(), null);
    return tmp0.get_value_j01efc_k$();
  }
  function GenericNamespacedElementBuilder$element$delegate$lambda(this$0) {
    return function () {
      return document.createElementNS(this$0.namespace_1, this$0.qualifiedName_1);
    };
  }
  function GenericNamespacedElementBuilder$_get_element_$ref_eof03j() {
    return function (p0) {
      return _get_element__z0t21h(p0);
    };
  }
  function GenericNamespacedElementBuilder(namespace, qualifiedName) {
    Companion_getInstance_45();
    this.namespace_1 = namespace;
    this.qualifiedName_1 = qualifiedName;
    var tmp = this;
    tmp.element$delegate_1 = lazy(GenericNamespacedElementBuilder$element$delegate$lambda(this));
  }
  protoOf(GenericNamespacedElementBuilder).create_md4cuc_k$ = function () {
    var tmp = _get_element__z0t21h(this).cloneNode();
    return tmp instanceof Element ? tmp : THROW_CCE();
  };
  function _get_cachedBuilders__emr31r_0($this) {
    return $this.cachedBuilders_1;
  }
  function _get_name__das4rk($this) {
    return $this.name_1;
  }
  function Companion_43() {
    Companion_instance_43 = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.cachedBuilders_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(Companion_43).create_oysagu_k$ = function (name) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.cachedBuilders_1;
    var value = this_0.get_wei43m_k$(name);
    var tmp;
    if (value == null) {
      var answer = new GenericElementBuilder(name);
      this_0.put_4fpzoq_k$(name, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    return tmp;
  };
  var Companion_instance_43;
  function Companion_getInstance_46() {
    if (Companion_instance_43 == null)
      new Companion_43();
    return Companion_instance_43;
  }
  function _get_element__z0t21h_0($this) {
    var tmp0 = $this.element$delegate_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('element', 1, tmp, GenericElementBuilder$_get_element_$ref_4jw5ti(), null);
    return tmp0.get_value_j01efc_k$();
  }
  function GenericElementBuilder$element$delegate$lambda(this$0) {
    return function () {
      return document.createElement(this$0.name_1);
    };
  }
  function GenericElementBuilder$_get_element_$ref_4jw5ti() {
    return function (p0) {
      return _get_element__z0t21h_0(p0);
    };
  }
  function GenericElementBuilder(name) {
    Companion_getInstance_46();
    this.name_1 = name;
    var tmp = this;
    tmp.element$delegate_1 = lazy(GenericElementBuilder$element$delegate$lambda(this));
  }
  protoOf(GenericElementBuilder).create_md4cuc_k$ = function () {
    var tmp = _get_element__z0t21h_0(this).cloneNode();
    return tmp instanceof Element ? tmp : THROW_CCE();
  };
  function GenericTag_0(name, attrsStr, content, $composer, $changed, $default) {
    var attrsStr_0 = {_v: attrsStr};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1150610595);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(name) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(attrsStr_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content_0._v) ? 256 : 128);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 147) === 146), $dirty & 1)) {
      if (!(($default & 2) === 0)) {
        attrsStr_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        content_0._v = null;
      }
      var tmp;
      if (attrsStr_0._v == null) {
        $composer_0.startReplaceGroup_5hh8aj_k$(293997423);
        $composer_0.endReplaceGroup_ek144q_k$();
        tmp = null;
      } else {
        $composer_0.startReplaceGroup_5hh8aj_k$(293997424);
        // Inline function 'kotlin.let' call
        var tmp0 = $composer_0;
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = ($dirty & 112) === 32;
        // Inline function 'kotlin.let' call
        var it = tmp0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (invalid || it === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
          var value = GenericTag$lambda_0(attrsStr_0);
          tmp0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp1_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        tmp = tmp1_group;
      }
      var attrs = tmp;
      GenericTag(name, null, attrs, content_0._v, $composer_0, 48 | 14 & $dirty | 7168 & $dirty << 3, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp2_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.updateScope_t8jcf_k$(GenericTag$lambda_1(name, attrsStr_0, content_0, $changed, $default));
    }
  }
  function GenericTag$_anonymous_$_anonymous_$_anonymous_$parseAttrAssignment_r3pqj($this_let, attrAssignment) {
    var parts = split(attrAssignment, charArrayOf([_Char___init__impl__6a9atx(61)]), VOID, 2);
    var attr = parts.get_c1px32_k$(0);
    // Inline function 'kotlin.collections.getOrElse' call
    var tmp;
    if (0 <= 1 ? 1 < parts.get_size_woubt6_k$() : false) {
      tmp = parts.get_c1px32_k$(1);
    } else {
      tmp = '';
    }
    var value = tmp;
    $this_let.attr_w68641_k$(attr, removeSurrounding(value, '"'));
  }
  function GenericTag$lambda($name, $namespace, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      GenericTag($name, $namespace._v, $attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function GenericTag$lambda_0($attrsStr) {
    return function ($this$let) {
      var sb = StringBuilder_init_$Create$();
      var insideQuotes = false;
      var indexedObject = $attrsStr._v;
      var inductionVariable = 0;
      while (inductionVariable < charSequenceLength(indexedObject)) {
        var c = charSequenceGet(indexedObject, inductionVariable);
        inductionVariable = inductionVariable + 1 | 0;
        if (c === _Char___init__impl__6a9atx(34)) {
          insideQuotes = !insideQuotes;
          sb.append_am5a4z_k$(c);
        } else if (c === _Char___init__impl__6a9atx(32)) {
          if (insideQuotes) {
            sb.append_am5a4z_k$(c);
          } else {
            GenericTag$_anonymous_$_anonymous_$_anonymous_$parseAttrAssignment_r3pqj($this$let, sb.toString());
            sb.clear_1keqml_k$();
          }
        } else
          sb.append_am5a4z_k$(c);
      }
      var tmp;
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(sb) > 0) {
        // Inline function 'kotlin.check' call
        if (!!insideQuotes) {
          var message = 'Got invalid attributes with unclosed string: ' + $attrsStr._v;
          throw IllegalStateException_init_$Create$(toString(message));
        }
        GenericTag$_anonymous_$_anonymous_$_anonymous_$parseAttrAssignment_r3pqj($this$let, sb.toString());
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function GenericTag$lambda_1($name, $attrsStr, $content, $$changed, $$default) {
    return function ($composer, $force) {
      GenericTag_0($name, $attrsStr._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  var com_varabyte_kobweb_compose_dom_svg_SVGTransformScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGElementAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_ViewBox$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGGraphicalElementAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGContainerElementAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGSvgAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGDefsAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGGradientAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGLinearGradientAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGRadialGradientAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGStopAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGPatternAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGSymbolAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGUseAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGCircleAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGEllipseAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGGroupAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGImageAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGLineAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGPathDataScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGPathAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGPolygonAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGPolylineAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGRectAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGTextAttrsScope$stable;
  function Companion_44() {
    Companion_instance_44 = this;
  }
  protoOf(Companion_44).sized_aiz6wt_k$ = function (width, height) {
    return new ViewBox(0, 0, width, height);
  };
  protoOf(Companion_44).sized$default_id0xg9_k$ = function (width, height, $super) {
    height = height === VOID ? width : height;
    return $super === VOID ? this.sized_aiz6wt_k$(width, height) : $super.sized_aiz6wt_k$.call(this, width, height);
  };
  var Companion_instance_44;
  function Companion_getInstance_47() {
    if (Companion_instance_44 == null)
      new Companion_44();
    return Companion_instance_44;
  }
  function ViewBox(x, y, width, height) {
    Companion_getInstance_47();
    this.x_1 = x;
    this.y_1 = y;
    this.width_1 = width;
    this.height_1 = height;
  }
  protoOf(ViewBox).get_x_1mhr67_k$ = function () {
    return this.x_1;
  };
  protoOf(ViewBox).get_y_1mhr68_k$ = function () {
    return this.y_1;
  };
  protoOf(ViewBox).get_width_j0q4yl_k$ = function () {
    return this.width_1;
  };
  protoOf(ViewBox).get_height_e7t92o_k$ = function () {
    return this.height_1;
  };
  function SVGSvgAttrsScope$Companion$invoke$lambda($attrs) {
    return function (_this__u8e3s4) {
      if (!($attrs == null))
        $attrs(new SVGSvgAttrsScope(_this__u8e3s4));
      return Unit_getInstance();
    };
  }
  function Companion_45() {
    Companion_instance_45 = this;
  }
  protoOf(Companion_45).invoke_uvzfhd_k$ = function (attrs) {
    return SVGSvgAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_45;
  function Companion_getInstance_48() {
    if (Companion_instance_45 == null)
      new Companion_45();
    return Companion_instance_45;
  }
  function SVGSvgAttrsScope(attrs) {
    Companion_getInstance_48();
    SVGContainerElementAttrsScope.call(this, attrs);
  }
  function com_varabyte_kobweb_compose_dom_svg_ViewBox$stableprop_getter() {
    return com_varabyte_kobweb_compose_dom_svg_ViewBox$stable;
  }
  function Path(_this__u8e3s4, attrs, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(275418487);
    var $dirty = $changed;
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs) ? 32 : 16);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 17) === 16), $dirty & 1)) {
      var tmp = Companion_getInstance_49().invoke_ck7z5b_k$(attrs);
      GenericTag('path', 'http://www.w3.org/2000/svg', tmp, null, $composer_0, 54, 8);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Path$lambda(_this__u8e3s4, attrs, $changed));
    }
  }
  function SVGPathAttrsScope$Companion$invoke$lambda($attrs) {
    return function (_this__u8e3s4) {
      $attrs(new SVGPathAttrsScope(_this__u8e3s4));
      return Unit_getInstance();
    };
  }
  function Companion_46() {
    Companion_instance_46 = this;
  }
  protoOf(Companion_46).invoke_ck7z5b_k$ = function (attrs) {
    return SVGPathAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_46;
  function Companion_getInstance_49() {
    if (Companion_instance_46 == null)
      new Companion_46();
    return Companion_instance_46;
  }
  function SVGPathAttrsScope(attrs) {
    Companion_getInstance_49();
    SVGGraphicalElementAttrsScope.call(this, attrs);
  }
  protoOf(SVGPathAttrsScope).d_tonr5x_k$ = function (pathDataScope) {
    // Inline function 'kotlin.apply' call
    var this_0 = new SVGPathDataScope();
    pathDataScope(this_0);
    this.attr_w68641_k$('d', joinToString(this_0.pathCommands_1, ' '));
  };
  protoOf(SVGPathAttrsScope).d_e5qqiu_k$ = function (value) {
    this.attr_w68641_k$('d', value);
  };
  var SVGStrokeLineCap_Butt_instance;
  var SVGStrokeLineCap_Round_instance;
  var SVGStrokeLineCap_Square_instance;
  function values_3() {
    return [SVGStrokeLineCap_Butt_getInstance(), SVGStrokeLineCap_Round_getInstance(), SVGStrokeLineCap_Square_getInstance()];
  }
  function valueOf_3(value) {
    switch (value) {
      case 'Butt':
        return SVGStrokeLineCap_Butt_getInstance();
      case 'Round':
        return SVGStrokeLineCap_Round_getInstance();
      case 'Square':
        return SVGStrokeLineCap_Square_getInstance();
      default:
        SVGStrokeLineCap_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_3() {
    if ($ENTRIES_3 == null)
      $ENTRIES_3 = enumEntries(values_3());
    return $ENTRIES_3;
  }
  var SVGStrokeLineCap_entriesInitialized;
  function SVGStrokeLineCap_initEntries() {
    if (SVGStrokeLineCap_entriesInitialized)
      return Unit_getInstance();
    SVGStrokeLineCap_entriesInitialized = true;
    SVGStrokeLineCap_Butt_instance = new SVGStrokeLineCap('Butt', 0);
    SVGStrokeLineCap_Round_instance = new SVGStrokeLineCap('Round', 1);
    SVGStrokeLineCap_Square_instance = new SVGStrokeLineCap('Square', 2);
  }
  var $ENTRIES_3;
  function SVGStrokeLineCap(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SVGStrokeLineCap).toString = function () {
    return toSvgValue(this);
  };
  function Circle(_this__u8e3s4, attrs, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-2079059220);
    var $dirty = $changed;
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs) ? 32 : 16);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 17) === 16), $dirty & 1)) {
      var tmp = Companion_getInstance_50().invoke_f9pwg4_k$(attrs);
      GenericTag('circle', 'http://www.w3.org/2000/svg', tmp, null, $composer_0, 54, 8);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Circle$lambda(_this__u8e3s4, attrs, $changed));
    }
  }
  function SVGCircleAttrsScope$Companion$invoke$lambda($attrs) {
    return function (_this__u8e3s4) {
      $attrs(new SVGCircleAttrsScope(_this__u8e3s4));
      return Unit_getInstance();
    };
  }
  function Companion_47() {
    Companion_instance_47 = this;
  }
  protoOf(Companion_47).invoke_f9pwg4_k$ = function (attrs) {
    return SVGCircleAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_47;
  function Companion_getInstance_50() {
    if (Companion_instance_47 == null)
      new Companion_47();
    return Companion_instance_47;
  }
  function SVGCircleAttrsScope(attrs) {
    Companion_getInstance_50();
    SVGGraphicalElementAttrsScope.call(this, attrs);
  }
  protoOf(SVGCircleAttrsScope).r_4ompmx_k$ = function (value) {
    this.attr_w68641_k$('r', toString(value));
  };
  protoOf(SVGCircleAttrsScope).r_uxqzt5_k$ = function (value) {
    this.attr_w68641_k$('r', toString(value));
  };
  function Svg(attrs, content, $composer, $changed, $default) {
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1507789010);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs_0._v) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 32 : 16);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 19) === 18), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      GenericTag('svg', 'http://www.w3.org/2000/svg', Companion_getInstance_48().invoke_uvzfhd_k$(attrs_0._v), content, $composer_0, 54 | 7168 & $dirty << 6, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Svg$lambda(attrs_0, content, $changed, $default));
    }
  }
  var SVGFillType_None_instance;
  var SVGFillType_CurrentColor_instance;
  function values_4() {
    return [SVGFillType_None_getInstance(), SVGFillType_CurrentColor_getInstance()];
  }
  function valueOf_4(value) {
    switch (value) {
      case 'None':
        return SVGFillType_None_getInstance();
      case 'CurrentColor':
        return SVGFillType_CurrentColor_getInstance();
      default:
        SVGFillType_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_4() {
    if ($ENTRIES_4 == null)
      $ENTRIES_4 = enumEntries(values_4());
    return $ENTRIES_4;
  }
  var SVGFillType_entriesInitialized;
  function SVGFillType_initEntries() {
    if (SVGFillType_entriesInitialized)
      return Unit_getInstance();
    SVGFillType_entriesInitialized = true;
    SVGFillType_None_instance = new SVGFillType('None', 0);
    SVGFillType_CurrentColor_instance = new SVGFillType('CurrentColor', 1);
  }
  var $ENTRIES_4;
  function SVGFillType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SVGFillType).toString = function () {
    return toSvgValue(this);
  };
  var SVGStrokeType_None_instance;
  var SVGStrokeType_CurrentColor_instance;
  function values_5() {
    return [SVGStrokeType_None_getInstance(), SVGStrokeType_CurrentColor_getInstance()];
  }
  function valueOf_5(value) {
    switch (value) {
      case 'None':
        return SVGStrokeType_None_getInstance();
      case 'CurrentColor':
        return SVGStrokeType_CurrentColor_getInstance();
      default:
        SVGStrokeType_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_5() {
    if ($ENTRIES_5 == null)
      $ENTRIES_5 = enumEntries(values_5());
    return $ENTRIES_5;
  }
  var SVGStrokeType_entriesInitialized;
  function SVGStrokeType_initEntries() {
    if (SVGStrokeType_entriesInitialized)
      return Unit_getInstance();
    SVGStrokeType_entriesInitialized = true;
    SVGStrokeType_None_instance = new SVGStrokeType('None', 0);
    SVGStrokeType_CurrentColor_instance = new SVGStrokeType('CurrentColor', 1);
  }
  var $ENTRIES_5;
  function SVGStrokeType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SVGStrokeType).toString = function () {
    return toSvgValue(this);
  };
  function SVGContainerElementAttrsScope(attrs) {
    SVGGraphicalElementAttrsScope.call(this, attrs);
  }
  function SvgCoordinateAttrs() {
  }
  function SvgLengthAttrs() {
  }
  function SvgViewBoxAttrs() {
  }
  function SVGGraphicalElementAttrsScope(attrs) {
    SVGElementAttrsScope.call(this, attrs);
  }
  function SVGPathDataScope() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.pathCommands_1 = ArrayList_init_$Create$();
  }
  protoOf(SVGPathDataScope).get_pathCommands_bozswg_k$ = function () {
    return this.pathCommands_1;
  };
  protoOf(SVGPathDataScope).moveTo_3kg6ro_k$ = function (x, y) {
    this.pathCommands_1.add_utx5q5_k$('M ' + toString(x) + ' ' + toString(y));
  };
  protoOf(SVGPathDataScope).lineTo_wo5zt2_k$ = function (x, y, isRelative) {
    var command = isRelative ? 'l' : 'L';
    this.pathCommands_1.add_utx5q5_k$(command + ' ' + toString(x) + ' ' + toString(y));
  };
  protoOf(SVGPathDataScope).lineTo$default_92g2t9_k$ = function (x, y, isRelative, $super) {
    isRelative = isRelative === VOID ? false : isRelative;
    var tmp;
    if ($super === VOID) {
      this.lineTo_wo5zt2_k$(x, y, isRelative);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.lineTo_wo5zt2_k$.call(this, x, y, isRelative);
    }
    return tmp;
  };
  protoOf(SVGPathDataScope).verticalLineTo_1jzv3_k$ = function (x, isRelative) {
    var command = isRelative ? 'v' : 'V';
    this.pathCommands_1.add_utx5q5_k$(command + ' ' + toString(x));
  };
  protoOf(SVGPathDataScope).verticalLineTo$default_w5grj4_k$ = function (x, isRelative, $super) {
    isRelative = isRelative === VOID ? false : isRelative;
    var tmp;
    if ($super === VOID) {
      this.verticalLineTo_1jzv3_k$(x, isRelative);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.verticalLineTo_1jzv3_k$.call(this, x, isRelative);
    }
    return tmp;
  };
  protoOf(SVGPathDataScope).horizontalLineTo_vd3o5f_k$ = function (x, isRelative) {
    var command = isRelative ? 'h' : 'H';
    this.pathCommands_1.add_utx5q5_k$(command + ' ' + toString(x));
  };
  protoOf(SVGPathDataScope).horizontalLineTo$default_sdjoge_k$ = function (x, isRelative, $super) {
    isRelative = isRelative === VOID ? false : isRelative;
    var tmp;
    if ($super === VOID) {
      this.horizontalLineTo_vd3o5f_k$(x, isRelative);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.horizontalLineTo_vd3o5f_k$.call(this, x, isRelative);
    }
    return tmp;
  };
  protoOf(SVGPathDataScope).curveTo_dux3mz_k$ = function (x1, y1, x2, y2, x, y, isRelative) {
    var command = isRelative ? 'c' : 'C';
    this.pathCommands_1.add_utx5q5_k$(command + ' ' + toString(x1) + ' ' + toString(y1) + ' ' + toString(x2) + ' ' + toString(y2) + ' ' + toString(x) + ' ' + toString(y));
  };
  protoOf(SVGPathDataScope).curveTo$default_10zpsu_k$ = function (x1, y1, x2, y2, x, y, isRelative, $super) {
    isRelative = isRelative === VOID ? false : isRelative;
    var tmp;
    if ($super === VOID) {
      this.curveTo_dux3mz_k$(x1, y1, x2, y2, x, y, isRelative);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.curveTo_dux3mz_k$.call(this, x1, y1, x2, y2, x, y, isRelative);
    }
    return tmp;
  };
  protoOf(SVGPathDataScope).smoothCurveTo_m2p9yf_k$ = function (x2, y2, x, y, isRelative) {
    var command = isRelative ? 's' : 'S';
    this.pathCommands_1.add_utx5q5_k$(command + ' ' + toString(x2) + ' ' + toString(y2) + ' ' + toString(x) + ' ' + toString(y));
  };
  protoOf(SVGPathDataScope).smoothCurveTo$default_an6pv4_k$ = function (x2, y2, x, y, isRelative, $super) {
    isRelative = isRelative === VOID ? false : isRelative;
    var tmp;
    if ($super === VOID) {
      this.smoothCurveTo_m2p9yf_k$(x2, y2, x, y, isRelative);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.smoothCurveTo_m2p9yf_k$.call(this, x2, y2, x, y, isRelative);
    }
    return tmp;
  };
  protoOf(SVGPathDataScope).quadraticBezierCurve_4zqqkj_k$ = function (x1, y1, x, y, isRelative) {
    var command = isRelative ? 'q' : 'Q';
    this.pathCommands_1.add_utx5q5_k$(command + ' ' + toString(x1) + ' ' + toString(y1) + ' ' + toString(x) + ' ' + toString(y));
  };
  protoOf(SVGPathDataScope).smoothQuadraticBezierCurve_qx2ddd_k$ = function (x, y, isRelative) {
    var command = isRelative ? 't' : 'T';
    this.pathCommands_1.add_utx5q5_k$(command + ' ' + toString(x) + ' ' + toString(y));
  };
  protoOf(SVGPathDataScope).ellipticalArc_dlakgh_k$ = function (rx, ry, rotate, largeArcFlag, sweepFlag, x, y, isRelative) {
    var command = isRelative ? 'a' : 'A';
    this.pathCommands_1.add_utx5q5_k$(command + ' ' + toString(rx) + ' ' + toString(ry) + ' ' + toString(rotate) + ' ' + toString(largeArcFlag) + ' ' + toString(sweepFlag) + ' ' + toString(x) + ' ' + toString(y));
  };
  protoOf(SVGPathDataScope).ellipticalArc$default_j89yrk_k$ = function (rx, ry, rotate, largeArcFlag, sweepFlag, x, y, isRelative, $super) {
    isRelative = isRelative === VOID ? false : isRelative;
    var tmp;
    if ($super === VOID) {
      this.ellipticalArc_dlakgh_k$(rx, ry, rotate, largeArcFlag, sweepFlag, x, y, isRelative);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.ellipticalArc_dlakgh_k$.call(this, rx, ry, rotate, largeArcFlag, sweepFlag, x, y, isRelative);
    }
    return tmp;
  };
  protoOf(SVGPathDataScope).closePath_hm2tg3_k$ = function () {
    this.pathCommands_1.add_utx5q5_k$('Z');
  };
  function toSvgValue(_this__u8e3s4) {
    // Inline function 'kotlin.text.replaceFirstChar' call
    var this_0 = _this__u8e3s4.get_name_woqyms_k$();
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(this_0) > 0) {
      // Inline function 'kotlin.text.lowercase' call
      var this_1 = charCodeAt(this_0, 0);
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$4 = toString_1(this_1).toLowerCase();
      tmp = toString(tmp$ret$4) + substring(this_0, 1);
    } else {
      tmp = this_0;
    }
    return tmp;
  }
  function SvgCenterCoordinateAttrs() {
  }
  function SVGElementAttrsScope(attrs) {
    this.$$delegate_0__1 = attrs;
  }
  protoOf(SVGElementAttrsScope).transform_smv5a6_k$ = function (transformScope) {
    var scope = new SVGTransformScope();
    transformScope(scope);
    this.attr_w68641_k$('transform', joinToString(scope.transformCommands_1, ' '));
  };
  protoOf(SVGElementAttrsScope).style_xwwy6r_k$ = function (builder) {
    this.$$delegate_0__1.style_xwwy6r_k$(builder);
  };
  protoOf(SVGElementAttrsScope).classes_ephr7k_k$ = function (classes) {
    this.$$delegate_0__1.classes_ephr7k_k$(classes);
  };
  protoOf(SVGElementAttrsScope).classes_ayghm2_k$ = function (classes) {
    this.$$delegate_0__1.classes_ayghm2_k$(classes);
  };
  protoOf(SVGElementAttrsScope).id_e4l56n_k$ = function (value) {
    return this.$$delegate_0__1.id_e4l56n_k$(value);
  };
  protoOf(SVGElementAttrsScope).hidden_k4uzbq_k$ = function () {
    return this.$$delegate_0__1.hidden_k4uzbq_k$();
  };
  protoOf(SVGElementAttrsScope).title_qpfo4e_k$ = function (value) {
    return this.$$delegate_0__1.title_qpfo4e_k$(value);
  };
  protoOf(SVGElementAttrsScope).dir_uokp4q_k$ = function (value) {
    return this.$$delegate_0__1.dir_uokp4q_k$(value);
  };
  protoOf(SVGElementAttrsScope).draggable_cxyxb5_k$ = function (value) {
    return this.$$delegate_0__1.draggable_cxyxb5_k$(value);
  };
  protoOf(SVGElementAttrsScope).contentEditable_hbi188_k$ = function (value) {
    return this.$$delegate_0__1.contentEditable_hbi188_k$(value);
  };
  protoOf(SVGElementAttrsScope).lang_9i4u6k_k$ = function (value) {
    return this.$$delegate_0__1.lang_9i4u6k_k$(value);
  };
  protoOf(SVGElementAttrsScope).tabIndex_fn4aj_k$ = function (value) {
    return this.$$delegate_0__1.tabIndex_fn4aj_k$(value);
  };
  protoOf(SVGElementAttrsScope).spellCheck_hp5v6j_k$ = function (value) {
    return this.$$delegate_0__1.spellCheck_hp5v6j_k$(value);
  };
  protoOf(SVGElementAttrsScope).inputMode_1lh0s3_k$ = function (value) {
    return this.$$delegate_0__1.inputMode_1lh0s3_k$(value);
  };
  protoOf(SVGElementAttrsScope).inputMode_7krh0f_k$ = function (value) {
    return this.$$delegate_0__1.inputMode_7krh0f_k$(value);
  };
  protoOf(SVGElementAttrsScope).ref_wkg4fv_k$ = function (effect) {
    this.$$delegate_0__1.ref_o4g25g_k$(effect);
  };
  protoOf(SVGElementAttrsScope).ref_o4g25g_k$ = function (effect) {
    return this.ref_wkg4fv_k$(effect);
  };
  protoOf(SVGElementAttrsScope).attr_w68641_k$ = function (attr, value) {
    return this.$$delegate_0__1.attr_w68641_k$(attr, value);
  };
  protoOf(SVGElementAttrsScope).prop_cha5mt_k$ = function (update, value) {
    this.$$delegate_0__1.prop_cha5mt_k$(update, value);
  };
  protoOf(SVGElementAttrsScope).registerEventListener_oiyxlj_k$ = function (listener) {
    this.$$delegate_0__1.registerEventListener_oiyxlj_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onContextMenu_uus4bk_k$ = function (listener) {
    this.$$delegate_0__1.onContextMenu_uus4bk_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onClick_q9cds6_k$ = function (listener) {
    this.$$delegate_0__1.onClick_q9cds6_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onDoubleClick_gh82mh_k$ = function (listener) {
    this.$$delegate_0__1.onDoubleClick_gh82mh_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onMouseDown_hebxzb_k$ = function (listener) {
    this.$$delegate_0__1.onMouseDown_hebxzb_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onMouseUp_at21zm_k$ = function (listener) {
    this.$$delegate_0__1.onMouseUp_at21zm_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onMouseEnter_smfckd_k$ = function (listener) {
    this.$$delegate_0__1.onMouseEnter_smfckd_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onMouseLeave_j862le_k$ = function (listener) {
    this.$$delegate_0__1.onMouseLeave_j862le_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onMouseMove_r2z3wo_k$ = function (listener) {
    this.$$delegate_0__1.onMouseMove_r2z3wo_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onMouseOut_nootgn_k$ = function (listener) {
    this.$$delegate_0__1.onMouseOut_nootgn_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onMouseOver_o893qj_k$ = function (listener) {
    this.$$delegate_0__1.onMouseOver_o893qj_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onWheel_59frrx_k$ = function (listener) {
    this.$$delegate_0__1.onWheel_59frrx_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onDrag_xkse65_k$ = function (listener) {
    this.$$delegate_0__1.onDrag_xkse65_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onDrop_373vqw_k$ = function (listener) {
    this.$$delegate_0__1.onDrop_373vqw_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onDragStart_ispt2x_k$ = function (listener) {
    this.$$delegate_0__1.onDragStart_ispt2x_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onDragEnd_4or1o2_k$ = function (listener) {
    this.$$delegate_0__1.onDragEnd_4or1o2_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onDragOver_tkxwb3_k$ = function (listener) {
    this.$$delegate_0__1.onDragOver_tkxwb3_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onDragEnter_9tqs4v_k$ = function (listener) {
    this.$$delegate_0__1.onDragEnter_9tqs4v_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onDragLeave_nsncqa_k$ = function (listener) {
    this.$$delegate_0__1.onDragLeave_nsncqa_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onCopy_4jq33g_k$ = function (listener) {
    this.$$delegate_0__1.onCopy_4jq33g_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onCut_wod3pf_k$ = function (listener) {
    this.$$delegate_0__1.onCut_wod3pf_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onPaste_8ucd2k_k$ = function (listener) {
    this.$$delegate_0__1.onPaste_8ucd2k_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onKeyDown_2pa1il_k$ = function (listener) {
    this.$$delegate_0__1.onKeyDown_2pa1il_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onKeyUp_g6q8ee_k$ = function (listener) {
    this.$$delegate_0__1.onKeyUp_g6q8ee_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onFocus_ozgn2v_k$ = function (listener) {
    this.$$delegate_0__1.onFocus_ozgn2v_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onBlur_yy3d4s_k$ = function (listener) {
    this.$$delegate_0__1.onBlur_yy3d4s_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onFocusIn_vryg4c_k$ = function (listener) {
    this.$$delegate_0__1.onFocusIn_vryg4c_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onFocusOut_jw1zh_k$ = function (listener) {
    this.$$delegate_0__1.onFocusOut_jw1zh_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onTouchCancel_rg0d1t_k$ = function (listener) {
    this.$$delegate_0__1.onTouchCancel_rg0d1t_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onTouchMove_wm6qxk_k$ = function (listener) {
    this.$$delegate_0__1.onTouchMove_wm6qxk_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onTouchEnd_ugz1se_k$ = function (listener) {
    this.$$delegate_0__1.onTouchEnd_ugz1se_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onTouchStart_4yr0c9_k$ = function (listener) {
    this.$$delegate_0__1.onTouchStart_4yr0c9_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onAnimationEnd_l576ug_k$ = function (listener) {
    this.$$delegate_0__1.onAnimationEnd_l576ug_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onAnimationIteration_o79r9y_k$ = function (listener) {
    this.$$delegate_0__1.onAnimationIteration_o79r9y_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onAnimationStart_ir5kdr_k$ = function (listener) {
    this.$$delegate_0__1.onAnimationStart_ir5kdr_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onScroll_ur92mf_k$ = function (listener) {
    this.$$delegate_0__1.onScroll_ur92mf_k$(listener);
  };
  protoOf(SVGElementAttrsScope).addEventListener_pu8o1q_k$ = function (eventName, listener) {
    this.$$delegate_0__1.addEventListener_pu8o1q_k$(eventName, listener);
  };
  protoOf(SVGElementAttrsScope).addEventListener_xhf81m_k$ = function (eventName, listener) {
    this.$$delegate_0__1.addEventListener_xhf81m_k$(eventName, listener);
  };
  function SvgPresentationAttrs$strokeDashArray$lambda(it) {
    return toString(it);
  }
  function SvgPresentationAttrs$strokeDashArray$lambda_0(it) {
    return toString(it);
  }
  function SvgPresentationAttrs() {
  }
  function SVGTransformScope() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.transformCommands_1 = ArrayList_init_$Create$();
  }
  protoOf(SVGTransformScope).get_transformCommands_3z6osb_k$ = function () {
    return this.transformCommands_1;
  };
  protoOf(SVGTransformScope).matrix_4qaz4h_k$ = function (a, b, c, d, e, f) {
    this.transformCommands_1.add_utx5q5_k$('matrix(' + toString(a) + ' ' + toString(b) + ' ' + toString(c) + ' ' + toString(d) + ' ' + toString(e) + ' ' + toString(f) + ')');
  };
  protoOf(SVGTransformScope).translate_es2bih_k$ = function (x, y) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.append_22ad7x_k$('translate(' + toString(x));
    if (y == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this_0.append_22ad7x_k$(' ' + toString(y));
    }
    this_0.append_22ad7x_k$(')');
    var tmp$ret$4 = this_0.toString();
    this.transformCommands_1.add_utx5q5_k$(tmp$ret$4);
  };
  protoOf(SVGTransformScope).translate$default_8lzvt7_k$ = function (x, y, $super) {
    y = y === VOID ? null : y;
    var tmp;
    if ($super === VOID) {
      this.translate_es2bih_k$(x, y);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.translate_es2bih_k$.call(this, x, y);
    }
    return tmp;
  };
  protoOf(SVGTransformScope).translateX_ud826n_k$ = function (value) {
    this.translate$default_8lzvt7_k$(value);
  };
  protoOf(SVGTransformScope).translateY_sbcqnk_k$ = function (value) {
    this.translate_es2bih_k$(0, value);
  };
  protoOf(SVGTransformScope).scale_c9i1jh_k$ = function (x, y) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.append_22ad7x_k$('scale(' + toString(x));
    if (y == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this_0.append_22ad7x_k$(' ' + toString(y));
    }
    this_0.append_22ad7x_k$(')');
    var tmp$ret$4 = this_0.toString();
    this.transformCommands_1.add_utx5q5_k$(tmp$ret$4);
  };
  protoOf(SVGTransformScope).scale$default_les05r_k$ = function (x, y, $super) {
    y = y === VOID ? null : y;
    var tmp;
    if ($super === VOID) {
      this.scale_c9i1jh_k$(x, y);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.scale_c9i1jh_k$.call(this, x, y);
    }
    return tmp;
  };
  protoOf(SVGTransformScope).scaleX_5vhlnx_k$ = function (value) {
    this.scale$default_les05r_k$(value);
  };
  protoOf(SVGTransformScope).scaleY_7xcx70_k$ = function (value) {
    this.scale_c9i1jh_k$(1, value);
  };
  protoOf(SVGTransformScope).rotate_lnsw20_k$ = function (angle, x, y) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.append_22ad7x_k$('rotate(' + toString(angle));
    if (x == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this_0.append_22ad7x_k$(' ' + toString(x));
    }
    if (y == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this_0.append_22ad7x_k$(' ' + toString(y));
    }
    this_0.append_22ad7x_k$(')');
    var tmp$ret$6 = this_0.toString();
    this.transformCommands_1.add_utx5q5_k$(tmp$ret$6);
  };
  protoOf(SVGTransformScope).rotate$default_an1ocb_k$ = function (angle, x, y, $super) {
    x = x === VOID ? null : x;
    y = y === VOID ? null : y;
    var tmp;
    if ($super === VOID) {
      this.rotate_lnsw20_k$(angle, x, y);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.rotate_lnsw20_k$.call(this, angle, x, y);
    }
    return tmp;
  };
  protoOf(SVGTransformScope).rotate_t30zjy_k$ = function (angle, x, y) {
    this.rotate_lnsw20_k$(toDegrees(angle), x, y);
  };
  protoOf(SVGTransformScope).rotate$default_6p7g9n_k$ = function (angle, x, y, $super) {
    x = x === VOID ? null : x;
    y = y === VOID ? null : y;
    var tmp;
    if ($super === VOID) {
      this.rotate_t30zjy_k$(angle, x, y);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.rotate_t30zjy_k$.call(this, angle, x, y);
    }
    return tmp;
  };
  protoOf(SVGTransformScope).skewX_j3bzv7_k$ = function (angle) {
    this.transformCommands_1.add_utx5q5_k$('skewX(' + toString(angle) + ')');
  };
  protoOf(SVGTransformScope).skewX_vhgz95_k$ = function (angle) {
    this.skewX_j3bzv7_k$(toDegrees(angle));
  };
  protoOf(SVGTransformScope).skewY_h1goc4_k$ = function (angle) {
    this.transformCommands_1.add_utx5q5_k$('skewY(' + toString(angle) + ')');
  };
  protoOf(SVGTransformScope).skewY_yc4et6_k$ = function (angle) {
    this.skewY_h1goc4_k$(toDegrees(angle));
  };
  function _SvgId___init__impl__pmt7ru(value) {
    return value;
  }
  function _SvgId___get_value__impl__pof1ma($this) {
    return $this;
  }
  function SvgId__toString_impl_l4ivdq($this) {
    return _SvgId___get_value__impl__pof1ma($this);
  }
  function _SvgId___get_urlReference__impl__ehpa8t($this) {
    return 'url(#' + _SvgId___get_value__impl__pof1ma($this) + ')';
  }
  function _SvgId___get_hashReference__impl__naeswu($this) {
    return '#' + _SvgId___get_value__impl__pof1ma($this);
  }
  function SvgId__hashCode_impl_s5f9sj($this) {
    return getStringHashCode($this);
  }
  function SvgId__equals_impl_mxwuq9($this, other) {
    if (!(other instanceof SvgId))
      return false;
    if (!($this === (other instanceof SvgId ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function SvgId(value) {
    this.value_1 = value;
  }
  protoOf(SvgId).toString = function () {
    return SvgId__toString_impl_l4ivdq(this.value_1);
  };
  protoOf(SvgId).hashCode = function () {
    return SvgId__hashCode_impl_s5f9sj(this.value_1);
  };
  protoOf(SvgId).equals = function (other) {
    return SvgId__equals_impl_mxwuq9(this.value_1, other);
  };
  var SVGStrokeLineJoin_Miter_instance;
  var SVGStrokeLineJoin_Round_instance;
  var SVGStrokeLineJoin_Bevel_instance;
  function values_6() {
    return [SVGStrokeLineJoin_Miter_getInstance(), SVGStrokeLineJoin_Round_getInstance(), SVGStrokeLineJoin_Bevel_getInstance()];
  }
  function valueOf_6(value) {
    switch (value) {
      case 'Miter':
        return SVGStrokeLineJoin_Miter_getInstance();
      case 'Round':
        return SVGStrokeLineJoin_Round_getInstance();
      case 'Bevel':
        return SVGStrokeLineJoin_Bevel_getInstance();
      default:
        SVGStrokeLineJoin_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_6() {
    if ($ENTRIES_6 == null)
      $ENTRIES_6 = enumEntries(values_6());
    return $ENTRIES_6;
  }
  var SVGStrokeLineJoin_entriesInitialized;
  function SVGStrokeLineJoin_initEntries() {
    if (SVGStrokeLineJoin_entriesInitialized)
      return Unit_getInstance();
    SVGStrokeLineJoin_entriesInitialized = true;
    SVGStrokeLineJoin_Miter_instance = new SVGStrokeLineJoin('Miter', 0);
    SVGStrokeLineJoin_Round_instance = new SVGStrokeLineJoin('Round', 1);
    SVGStrokeLineJoin_Bevel_instance = new SVGStrokeLineJoin('Bevel', 2);
  }
  var $ENTRIES_6;
  function SVGStrokeLineJoin(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SVGStrokeLineJoin).toString = function () {
    return toSvgValue(this);
  };
  var SVGFillRule_NonZero_instance;
  var SVGFillRule_EvenOdd_instance;
  function values_7() {
    return [SVGFillRule_NonZero_getInstance(), SVGFillRule_EvenOdd_getInstance()];
  }
  function valueOf_7(value) {
    switch (value) {
      case 'NonZero':
        return SVGFillRule_NonZero_getInstance();
      case 'EvenOdd':
        return SVGFillRule_EvenOdd_getInstance();
      default:
        SVGFillRule_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_7() {
    if ($ENTRIES_7 == null)
      $ENTRIES_7 = enumEntries(values_7());
    return $ENTRIES_7;
  }
  var SVGFillRule_entriesInitialized;
  function SVGFillRule_initEntries() {
    if (SVGFillRule_entriesInitialized)
      return Unit_getInstance();
    SVGFillRule_entriesInitialized = true;
    SVGFillRule_NonZero_instance = new SVGFillRule('NonZero', 0);
    SVGFillRule_EvenOdd_instance = new SVGFillRule('EvenOdd', 1);
  }
  var $ENTRIES_7;
  function SVGFillRule(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SVGFillRule).toString = function () {
    return toSvgValue(this);
  };
  function Path$lambda($this_Path, $attrs, $$changed) {
    return function ($composer, $force) {
      Path($this_Path, $attrs, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Circle$lambda($this_Circle, $attrs, $$changed) {
    return function ($composer, $force) {
      Circle($this_Circle, $attrs, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Svg$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Svg($attrs._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function SVGStrokeLineCap_Butt_getInstance() {
    SVGStrokeLineCap_initEntries();
    return SVGStrokeLineCap_Butt_instance;
  }
  function SVGStrokeLineCap_Round_getInstance() {
    SVGStrokeLineCap_initEntries();
    return SVGStrokeLineCap_Round_instance;
  }
  function SVGStrokeLineCap_Square_getInstance() {
    SVGStrokeLineCap_initEntries();
    return SVGStrokeLineCap_Square_instance;
  }
  function SVGFillType_None_getInstance() {
    SVGFillType_initEntries();
    return SVGFillType_None_instance;
  }
  function SVGFillType_CurrentColor_getInstance() {
    SVGFillType_initEntries();
    return SVGFillType_CurrentColor_instance;
  }
  function SVGStrokeType_None_getInstance() {
    SVGStrokeType_initEntries();
    return SVGStrokeType_None_instance;
  }
  function SVGStrokeType_CurrentColor_getInstance() {
    SVGStrokeType_initEntries();
    return SVGStrokeType_CurrentColor_instance;
  }
  function SVGStrokeLineJoin_Miter_getInstance() {
    SVGStrokeLineJoin_initEntries();
    return SVGStrokeLineJoin_Miter_instance;
  }
  function SVGStrokeLineJoin_Round_getInstance() {
    SVGStrokeLineJoin_initEntries();
    return SVGStrokeLineJoin_Round_instance;
  }
  function SVGStrokeLineJoin_Bevel_getInstance() {
    SVGStrokeLineJoin_initEntries();
    return SVGStrokeLineJoin_Bevel_instance;
  }
  function SVGFillRule_NonZero_getInstance() {
    SVGFillRule_initEntries();
    return SVGFillRule_NonZero_instance;
  }
  function SVGFillRule_EvenOdd_getInstance() {
    SVGFillRule_initEntries();
    return SVGFillRule_EvenOdd_instance;
  }
  var com_varabyte_kobweb_compose_dom_svg_SVGFilterElementAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFilterElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFilterAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEBlendElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEBlendAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEColorMatrixElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEColorMatrixAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFECompositeElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFECompositeAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEConvolveMatrixElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEConvolveMatrixAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEDiffuseLightingElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEDiffuseLightingAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEDistantLightElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEDistantLightAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEPointLightElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEPointLightAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFESpotLightElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFESpotLightAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEDisplacementMapElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEDisplacementMapAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEDropShadowElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEDropShadowAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEFloodElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEFloodAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEGaussianBlurElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEGaussianBlurAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEImageElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEImageAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEMergeElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEMergeAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEMergeNodeElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEMergeNodeAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEComponentTransferElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEComponentTransferAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGComponentTransferFunctionElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEFuncAElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEFuncRElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEFuncGElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEFuncBElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGComponentTransferFunctionAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEMorphologyElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEMorphologyAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEOffsetElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEOffsetAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFESpecularLightingElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFESpecularLightingAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFETileElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFETileAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFETurbulenceElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFETurbulenceAttrsScope$stable;
  var com_varabyte_kobweb_compose_events_SyntheticEvent$stable;
  var com_varabyte_kobweb_compose_events_SyntheticTransitionEvent$stable;
  //region block: post-declaration
  protoOf(ComparableAttrsScope).classes_ayghm2_k$ = classes;
  protoOf(ComparableAttrsScope).id_e4l56n_k$ = id;
  protoOf(ComparableAttrsScope).hidden_k4uzbq_k$ = hidden;
  protoOf(ComparableAttrsScope).title_qpfo4e_k$ = title;
  protoOf(ComparableAttrsScope).dir_uokp4q_k$ = dir;
  protoOf(ComparableAttrsScope).draggable_cxyxb5_k$ = draggable;
  protoOf(ComparableAttrsScope).contentEditable_hbi188_k$ = contentEditable;
  protoOf(ComparableAttrsScope).lang_9i4u6k_k$ = lang;
  protoOf(ComparableAttrsScope).tabIndex_fn4aj_k$ = tabIndex;
  protoOf(ComparableAttrsScope).spellCheck_hp5v6j_k$ = spellCheck;
  protoOf(ComparableAttrsScope).inputMode_1lh0s3_k$ = inputMode;
  protoOf(ComparableAttrsScope).inputMode_7krh0f_k$ = inputMode_0;
  protoOf(ComparableAttrsScope).onContextMenu_uus4bk_k$ = onContextMenu;
  protoOf(ComparableAttrsScope).onClick_q9cds6_k$ = onClick;
  protoOf(ComparableAttrsScope).onDoubleClick_gh82mh_k$ = onDoubleClick;
  protoOf(ComparableAttrsScope).onMouseDown_hebxzb_k$ = onMouseDown;
  protoOf(ComparableAttrsScope).onMouseUp_at21zm_k$ = onMouseUp;
  protoOf(ComparableAttrsScope).onMouseEnter_smfckd_k$ = onMouseEnter;
  protoOf(ComparableAttrsScope).onMouseLeave_j862le_k$ = onMouseLeave;
  protoOf(ComparableAttrsScope).onMouseMove_r2z3wo_k$ = onMouseMove;
  protoOf(ComparableAttrsScope).onMouseOut_nootgn_k$ = onMouseOut;
  protoOf(ComparableAttrsScope).onMouseOver_o893qj_k$ = onMouseOver;
  protoOf(ComparableAttrsScope).onWheel_59frrx_k$ = onWheel;
  protoOf(ComparableAttrsScope).onDrag_xkse65_k$ = onDrag;
  protoOf(ComparableAttrsScope).onDrop_373vqw_k$ = onDrop;
  protoOf(ComparableAttrsScope).onDragStart_ispt2x_k$ = onDragStart;
  protoOf(ComparableAttrsScope).onDragEnd_4or1o2_k$ = onDragEnd;
  protoOf(ComparableAttrsScope).onDragOver_tkxwb3_k$ = onDragOver;
  protoOf(ComparableAttrsScope).onDragEnter_9tqs4v_k$ = onDragEnter;
  protoOf(ComparableAttrsScope).onDragLeave_nsncqa_k$ = onDragLeave;
  protoOf(ComparableAttrsScope).onCopy_4jq33g_k$ = onCopy;
  protoOf(ComparableAttrsScope).onCut_wod3pf_k$ = onCut;
  protoOf(ComparableAttrsScope).onPaste_8ucd2k_k$ = onPaste;
  protoOf(ComparableAttrsScope).onKeyDown_2pa1il_k$ = onKeyDown;
  protoOf(ComparableAttrsScope).onKeyUp_g6q8ee_k$ = onKeyUp;
  protoOf(ComparableAttrsScope).onFocus_ozgn2v_k$ = onFocus;
  protoOf(ComparableAttrsScope).onBlur_yy3d4s_k$ = onBlur;
  protoOf(ComparableAttrsScope).onFocusIn_vryg4c_k$ = onFocusIn;
  protoOf(ComparableAttrsScope).onFocusOut_jw1zh_k$ = onFocusOut;
  protoOf(ComparableAttrsScope).onTouchCancel_rg0d1t_k$ = onTouchCancel;
  protoOf(ComparableAttrsScope).onTouchMove_wm6qxk_k$ = onTouchMove;
  protoOf(ComparableAttrsScope).onTouchEnd_ugz1se_k$ = onTouchEnd;
  protoOf(ComparableAttrsScope).onTouchStart_4yr0c9_k$ = onTouchStart;
  protoOf(ComparableAttrsScope).onAnimationEnd_l576ug_k$ = onAnimationEnd;
  protoOf(ComparableAttrsScope).onAnimationIteration_o79r9y_k$ = onAnimationIteration;
  protoOf(ComparableAttrsScope).onAnimationStart_ir5kdr_k$ = onAnimationStart;
  protoOf(ComparableAttrsScope).onScroll_ur92mf_k$ = onScroll;
  protoOf(ComparableAttrsScope).addEventListener_pu8o1q_k$ = addEventListener;
  protoOf(ComparableAttrsScope).addEventListener_xhf81m_k$ = addEventListener_0;
  protoOf(DummyAttrsScope).classes_ayghm2_k$ = classes;
  protoOf(DummyAttrsScope).id_e4l56n_k$ = id;
  protoOf(DummyAttrsScope).hidden_k4uzbq_k$ = hidden;
  protoOf(DummyAttrsScope).title_qpfo4e_k$ = title;
  protoOf(DummyAttrsScope).dir_uokp4q_k$ = dir;
  protoOf(DummyAttrsScope).draggable_cxyxb5_k$ = draggable;
  protoOf(DummyAttrsScope).contentEditable_hbi188_k$ = contentEditable;
  protoOf(DummyAttrsScope).lang_9i4u6k_k$ = lang;
  protoOf(DummyAttrsScope).tabIndex_fn4aj_k$ = tabIndex;
  protoOf(DummyAttrsScope).spellCheck_hp5v6j_k$ = spellCheck;
  protoOf(DummyAttrsScope).inputMode_1lh0s3_k$ = inputMode;
  protoOf(DummyAttrsScope).inputMode_7krh0f_k$ = inputMode_0;
  protoOf(DummyAttrsScope).onContextMenu_uus4bk_k$ = onContextMenu;
  protoOf(DummyAttrsScope).onClick_q9cds6_k$ = onClick;
  protoOf(DummyAttrsScope).onDoubleClick_gh82mh_k$ = onDoubleClick;
  protoOf(DummyAttrsScope).onMouseDown_hebxzb_k$ = onMouseDown;
  protoOf(DummyAttrsScope).onMouseUp_at21zm_k$ = onMouseUp;
  protoOf(DummyAttrsScope).onMouseEnter_smfckd_k$ = onMouseEnter;
  protoOf(DummyAttrsScope).onMouseLeave_j862le_k$ = onMouseLeave;
  protoOf(DummyAttrsScope).onMouseMove_r2z3wo_k$ = onMouseMove;
  protoOf(DummyAttrsScope).onMouseOut_nootgn_k$ = onMouseOut;
  protoOf(DummyAttrsScope).onMouseOver_o893qj_k$ = onMouseOver;
  protoOf(DummyAttrsScope).onWheel_59frrx_k$ = onWheel;
  protoOf(DummyAttrsScope).onDrag_xkse65_k$ = onDrag;
  protoOf(DummyAttrsScope).onDrop_373vqw_k$ = onDrop;
  protoOf(DummyAttrsScope).onDragStart_ispt2x_k$ = onDragStart;
  protoOf(DummyAttrsScope).onDragEnd_4or1o2_k$ = onDragEnd;
  protoOf(DummyAttrsScope).onDragOver_tkxwb3_k$ = onDragOver;
  protoOf(DummyAttrsScope).onDragEnter_9tqs4v_k$ = onDragEnter;
  protoOf(DummyAttrsScope).onDragLeave_nsncqa_k$ = onDragLeave;
  protoOf(DummyAttrsScope).onCopy_4jq33g_k$ = onCopy;
  protoOf(DummyAttrsScope).onCut_wod3pf_k$ = onCut;
  protoOf(DummyAttrsScope).onPaste_8ucd2k_k$ = onPaste;
  protoOf(DummyAttrsScope).onKeyDown_2pa1il_k$ = onKeyDown;
  protoOf(DummyAttrsScope).onKeyUp_g6q8ee_k$ = onKeyUp;
  protoOf(DummyAttrsScope).onFocus_ozgn2v_k$ = onFocus;
  protoOf(DummyAttrsScope).onBlur_yy3d4s_k$ = onBlur;
  protoOf(DummyAttrsScope).onFocusIn_vryg4c_k$ = onFocusIn;
  protoOf(DummyAttrsScope).onFocusOut_jw1zh_k$ = onFocusOut;
  protoOf(DummyAttrsScope).onTouchCancel_rg0d1t_k$ = onTouchCancel;
  protoOf(DummyAttrsScope).onTouchMove_wm6qxk_k$ = onTouchMove;
  protoOf(DummyAttrsScope).onTouchEnd_ugz1se_k$ = onTouchEnd;
  protoOf(DummyAttrsScope).onTouchStart_4yr0c9_k$ = onTouchStart;
  protoOf(DummyAttrsScope).onAnimationEnd_l576ug_k$ = onAnimationEnd;
  protoOf(DummyAttrsScope).onAnimationIteration_o79r9y_k$ = onAnimationIteration;
  protoOf(DummyAttrsScope).onAnimationStart_ir5kdr_k$ = onAnimationStart;
  protoOf(DummyAttrsScope).onScroll_ur92mf_k$ = onScroll;
  protoOf(DummyAttrsScope).addEventListener_pu8o1q_k$ = addEventListener;
  protoOf(DummyAttrsScope).addEventListener_xhf81m_k$ = addEventListener_0;
  protoOf(Companion).get_Inherit_a1a9e6_k$ = get_Inherit;
  protoOf(Companion).get_Initial_a0h2v9_k$ = get_Initial;
  protoOf(Companion).get_Revert_3t1tzh_k$ = get_Revert;
  protoOf(Companion).get_RevertLayer_4aljuk_k$ = get_RevertLayer;
  protoOf(Companion).get_Unset_ii4mhs_k$ = get_Unset;
  protoOf(Companion_0).get_Inherit_a1a9e6_k$ = get_Inherit;
  protoOf(Companion_0).get_Initial_a0h2v9_k$ = get_Initial;
  protoOf(Companion_0).get_Revert_3t1tzh_k$ = get_Revert;
  protoOf(Companion_0).get_RevertLayer_4aljuk_k$ = get_RevertLayer;
  protoOf(Companion_0).get_Unset_ii4mhs_k$ = get_Unset;
  protoOf(Companion_1).get_Inherit_a1a9e6_k$ = get_Inherit;
  protoOf(Companion_1).get_Initial_a0h2v9_k$ = get_Initial;
  protoOf(Companion_1).get_Revert_3t1tzh_k$ = get_Revert;
  protoOf(Companion_1).get_RevertLayer_4aljuk_k$ = get_RevertLayer;
  protoOf(Companion_1).get_Unset_ii4mhs_k$ = get_Unset;
  protoOf(Companion_2).get_Inherit_a1a9e6_k$ = get_Inherit;
  protoOf(Companion_2).get_Initial_a0h2v9_k$ = get_Initial;
  protoOf(Companion_2).get_Revert_3t1tzh_k$ = get_Revert;
  protoOf(Companion_2).get_RevertLayer_4aljuk_k$ = get_RevertLayer;
  protoOf(Companion_2).get_Unset_ii4mhs_k$ = get_Unset;
  protoOf(Companion_3).get_Inherit_a1a9e6_k$ = get_Inherit;
  protoOf(Companion_3).get_Initial_a0h2v9_k$ = get_Initial;
  protoOf(Companion_3).get_Revert_3t1tzh_k$ = get_Revert;
  protoOf(Companion_3).get_RevertLayer_4aljuk_k$ = get_RevertLayer;
  protoOf(Companion_3).get_Unset_ii4mhs_k$ = get_Unset;
  protoOf(Companion_5).get_Inherit_a1a9e6_k$ = get_Inherit;
  protoOf(Companion_5).get_Initial_a0h2v9_k$ = get_Initial;
  protoOf(Companion_5).get_Revert_3t1tzh_k$ = get_Revert;
  protoOf(Companion_5).get_RevertLayer_4aljuk_k$ = get_RevertLayer;
  protoOf(Companion_5).get_Unset_ii4mhs_k$ = get_Unset;
  protoOf(Companion_6).get_Inherit_a1a9e6_k$ = get_Inherit;
  protoOf(Companion_6).get_Initial_a0h2v9_k$ = get_Initial;
  protoOf(Companion_6).get_Revert_3t1tzh_k$ = get_Revert;
  protoOf(Companion_6).get_RevertLayer_4aljuk_k$ = get_RevertLayer;
  protoOf(Companion_6).get_Unset_ii4mhs_k$ = get_Unset;
  protoOf(Companion_7).get_Inherit_a1a9e6_k$ = get_Inherit;
  protoOf(Companion_7).get_Initial_a0h2v9_k$ = get_Initial;
  protoOf(Companion_7).get_Revert_3t1tzh_k$ = get_Revert;
  protoOf(Companion_7).get_RevertLayer_4aljuk_k$ = get_RevertLayer;
  protoOf(Companion_7).get_Unset_ii4mhs_k$ = get_Unset;
  protoOf(Companion_8).get_Inherit_a1a9e6_k$ = get_Inherit;
  protoOf(Companion_8).get_Initial_a0h2v9_k$ = get_Initial;
  protoOf(Companion_8).get_Revert_3t1tzh_k$ = get_Revert;
  protoOf(Companion_8).get_RevertLayer_4aljuk_k$ = get_RevertLayer;
  protoOf(Companion_8).get_Unset_ii4mhs_k$ = get_Unset;
  protoOf(Companion_9).get_Inherit_a1a9e6_k$ = get_Inherit;
  protoOf(Companion_9).get_Initial_a0h2v9_k$ = get_Initial;
  protoOf(Companion_9).get_Revert_3t1tzh_k$ = get_Revert;
  protoOf(Companion_9).get_RevertLayer_4aljuk_k$ = get_RevertLayer;
  protoOf(Companion_9).get_Unset_ii4mhs_k$ = get_Unset;
  protoOf(Companion_10).get_Inherit_a1a9e6_k$ = get_Inherit;
  protoOf(Companion_10).get_Initial_a0h2v9_k$ = get_Initial;
  protoOf(Companion_10).get_Revert_3t1tzh_k$ = get_Revert;
  protoOf(Companion_10).get_RevertLayer_4aljuk_k$ = get_RevertLayer;
  protoOf(Companion_10).get_Unset_ii4mhs_k$ = get_Unset;
  protoOf(Companion_11).get_Inherit_a1a9e6_k$ = get_Inherit;
  protoOf(Companion_11).get_Initial_a0h2v9_k$ = get_Initial;
  protoOf(Companion_11).get_Revert_3t1tzh_k$ = get_Revert;
  protoOf(Companion_11).get_RevertLayer_4aljuk_k$ = get_RevertLayer;
  protoOf(Companion_11).get_Unset_ii4mhs_k$ = get_Unset;
  protoOf(Companion_12).get_Inherit_a1a9e6_k$ = get_Inherit;
  protoOf(Companion_12).get_Initial_a0h2v9_k$ = get_Initial;
  protoOf(Companion_12).get_Revert_3t1tzh_k$ = get_Revert;
  protoOf(Companion_12).get_RevertLayer_4aljuk_k$ = get_RevertLayer;
  protoOf(Companion_12).get_Unset_ii4mhs_k$ = get_Unset;
  protoOf(Companion_13).get_Inherit_a1a9e6_k$ = get_Inherit;
  protoOf(Companion_13).get_Initial_a0h2v9_k$ = get_Initial;
  protoOf(Companion_13).get_Revert_3t1tzh_k$ = get_Revert;
  protoOf(Companion_13).get_RevertLayer_4aljuk_k$ = get_RevertLayer;
  protoOf(Companion_13).get_Unset_ii4mhs_k$ = get_Unset;
  protoOf(Companion_14).get_Inherit_a1a9e6_k$ = get_Inherit;
  protoOf(Companion_14).get_Initial_a0h2v9_k$ = get_Initial;
  protoOf(Companion_14).get_Revert_3t1tzh_k$ = get_Revert;
  protoOf(Companion_14).get_RevertLayer_4aljuk_k$ = get_RevertLayer;
  protoOf(Companion_14).get_Unset_ii4mhs_k$ = get_Unset;
  protoOf(Companion_15).get_Inherit_a1a9e6_k$ = get_Inherit;
  protoOf(Companion_15).get_Initial_a0h2v9_k$ = get_Initial;
  protoOf(Companion_15).get_Revert_3t1tzh_k$ = get_Revert;
  protoOf(Companion_15).get_RevertLayer_4aljuk_k$ = get_RevertLayer;
  protoOf(Companion_15).get_Unset_ii4mhs_k$ = get_Unset;
  protoOf(Companion_19).get_Inherit_a1a9e6_k$ = get_Inherit;
  protoOf(Companion_19).get_Initial_a0h2v9_k$ = get_Initial;
  protoOf(Companion_19).get_Revert_3t1tzh_k$ = get_Revert;
  protoOf(Companion_19).get_RevertLayer_4aljuk_k$ = get_RevertLayer;
  protoOf(Companion_19).get_Unset_ii4mhs_k$ = get_Unset;
  protoOf(ComparableStyleScope).property_wcrait_k$ = property;
  protoOf(ComparableStyleScope).property_jk9dw6_k$ = property_0;
  protoOf(ComparableStyleScope).variable_kvosx8_k$ = variable;
  protoOf(ComparableStyleScope).variable_j4rwe5_k$ = variable_0;
  protoOf(ComparableStyleScope).invoke_77zbl8_k$ = invoke;
  protoOf(ComparableStyleScope).invoke_rxx4vw_k$ = invoke_0;
  protoOf(ComparableStyleScope).invoke_jsk60r_k$ = invoke_1;
  protoOf(Companion_21).get_Inherit_a1a9e6_k$ = get_Inherit;
  protoOf(Companion_21).get_Initial_a0h2v9_k$ = get_Initial;
  protoOf(Companion_21).get_Revert_3t1tzh_k$ = get_Revert;
  protoOf(Companion_21).get_RevertLayer_4aljuk_k$ = get_RevertLayer;
  protoOf(Companion_21).get_Unset_ii4mhs_k$ = get_Unset;
  protoOf(Companion_22).get_Inherit_a1a9e6_k$ = get_Inherit;
  protoOf(Companion_22).get_Initial_a0h2v9_k$ = get_Initial;
  protoOf(Companion_22).get_Revert_3t1tzh_k$ = get_Revert;
  protoOf(Companion_22).get_RevertLayer_4aljuk_k$ = get_RevertLayer;
  protoOf(Companion_22).get_Unset_ii4mhs_k$ = get_Unset;
  protoOf(Companion_23).get_Inherit_a1a9e6_k$ = get_Inherit;
  protoOf(Companion_23).get_Initial_a0h2v9_k$ = get_Initial;
  protoOf(Companion_23).get_Revert_3t1tzh_k$ = get_Revert;
  protoOf(Companion_23).get_RevertLayer_4aljuk_k$ = get_RevertLayer;
  protoOf(Companion_23).get_Unset_ii4mhs_k$ = get_Unset;
  protoOf(Companion_26).get_Inherit_a1a9e6_k$ = get_Inherit;
  protoOf(Companion_26).get_Initial_a0h2v9_k$ = get_Initial;
  protoOf(Companion_26).get_Revert_3t1tzh_k$ = get_Revert;
  protoOf(Companion_26).get_RevertLayer_4aljuk_k$ = get_RevertLayer;
  protoOf(Companion_26).get_Unset_ii4mhs_k$ = get_Unset;
  protoOf(Companion_27).get_Inherit_a1a9e6_k$ = get_Inherit;
  protoOf(Companion_27).get_Initial_a0h2v9_k$ = get_Initial;
  protoOf(Companion_27).get_Revert_3t1tzh_k$ = get_Revert;
  protoOf(Companion_27).get_RevertLayer_4aljuk_k$ = get_RevertLayer;
  protoOf(Companion_27).get_Unset_ii4mhs_k$ = get_Unset;
  protoOf(Companion_28).get_Inherit_a1a9e6_k$ = get_Inherit;
  protoOf(Companion_28).get_Initial_a0h2v9_k$ = get_Initial;
  protoOf(Companion_28).get_Revert_3t1tzh_k$ = get_Revert;
  protoOf(Companion_28).get_RevertLayer_4aljuk_k$ = get_RevertLayer;
  protoOf(Companion_28).get_Unset_ii4mhs_k$ = get_Unset;
  protoOf(Companion_29).get_Inherit_a1a9e6_k$ = get_Inherit;
  protoOf(Companion_29).get_Initial_a0h2v9_k$ = get_Initial;
  protoOf(Companion_29).get_Revert_3t1tzh_k$ = get_Revert;
  protoOf(Companion_29).get_RevertLayer_4aljuk_k$ = get_RevertLayer;
  protoOf(Companion_29).get_Unset_ii4mhs_k$ = get_Unset;
  protoOf(Companion_30).get_Inherit_a1a9e6_k$ = get_Inherit;
  protoOf(Companion_30).get_Initial_a0h2v9_k$ = get_Initial;
  protoOf(Companion_30).get_Revert_3t1tzh_k$ = get_Revert;
  protoOf(Companion_30).get_RevertLayer_4aljuk_k$ = get_RevertLayer;
  protoOf(Companion_30).get_Unset_ii4mhs_k$ = get_Unset;
  protoOf(Companion_31).get_Inherit_a1a9e6_k$ = get_Inherit;
  protoOf(Companion_31).get_Initial_a0h2v9_k$ = get_Initial;
  protoOf(Companion_31).get_Revert_3t1tzh_k$ = get_Revert;
  protoOf(Companion_31).get_RevertLayer_4aljuk_k$ = get_RevertLayer;
  protoOf(Companion_31).get_Unset_ii4mhs_k$ = get_Unset;
  protoOf(Companion_32).get_Inherit_a1a9e6_k$ = get_Inherit;
  protoOf(Companion_32).get_Initial_a0h2v9_k$ = get_Initial;
  protoOf(Companion_32).get_Revert_3t1tzh_k$ = get_Revert;
  protoOf(Companion_32).get_RevertLayer_4aljuk_k$ = get_RevertLayer;
  protoOf(Companion_32).get_Unset_ii4mhs_k$ = get_Unset;
  protoOf(Companion_33).get_Visible_yikvpz_k$ = get_Visible;
  protoOf(Companion_33).get_Hidden_viqel_k$ = get_Hidden;
  protoOf(Companion_33).get_Clip_wnzq9l_k$ = get_Clip;
  protoOf(Companion_33).get_Scroll_48xiie_k$ = get_Scroll;
  protoOf(Companion_33).get_Auto_wnyn88_k$ = get_Auto;
  protoOf(Companion_33).get_Inherit_a1a9e6_k$ = get_Inherit;
  protoOf(Companion_33).get_Initial_a0h2v9_k$ = get_Initial;
  protoOf(Companion_33).get_Revert_3t1tzh_k$ = get_Revert;
  protoOf(Companion_33).get_RevertLayer_4aljuk_k$ = get_RevertLayer;
  protoOf(Companion_33).get_Unset_ii4mhs_k$ = get_Unset;
  protoOf(Companion_34).get_Inherit_a1a9e6_k$ = get_Inherit;
  protoOf(Companion_34).get_Initial_a0h2v9_k$ = get_Initial;
  protoOf(Companion_34).get_Revert_3t1tzh_k$ = get_Revert;
  protoOf(Companion_34).get_RevertLayer_4aljuk_k$ = get_RevertLayer;
  protoOf(Companion_34).get_Unset_ii4mhs_k$ = get_Unset;
  protoOf(Companion_35).get_Inherit_a1a9e6_k$ = get_Inherit;
  protoOf(Companion_35).get_Initial_a0h2v9_k$ = get_Initial;
  protoOf(Companion_35).get_Revert_3t1tzh_k$ = get_Revert;
  protoOf(Companion_35).get_RevertLayer_4aljuk_k$ = get_RevertLayer;
  protoOf(Companion_35).get_Unset_ii4mhs_k$ = get_Unset;
  protoOf(Companion_36).get_Inherit_a1a9e6_k$ = get_Inherit;
  protoOf(Companion_36).get_Initial_a0h2v9_k$ = get_Initial;
  protoOf(Companion_36).get_Revert_3t1tzh_k$ = get_Revert;
  protoOf(Companion_36).get_RevertLayer_4aljuk_k$ = get_RevertLayer;
  protoOf(Companion_36).get_Unset_ii4mhs_k$ = get_Unset;
  protoOf(Companion_37).get_Inherit_a1a9e6_k$ = get_Inherit;
  protoOf(Companion_37).get_Initial_a0h2v9_k$ = get_Initial;
  protoOf(Companion_37).get_Revert_3t1tzh_k$ = get_Revert;
  protoOf(Companion_37).get_RevertLayer_4aljuk_k$ = get_RevertLayer;
  protoOf(Companion_37).get_Unset_ii4mhs_k$ = get_Unset;
  protoOf(Companion_38).get_Inherit_a1a9e6_k$ = get_Inherit;
  protoOf(Companion_38).get_Initial_a0h2v9_k$ = get_Initial;
  protoOf(Companion_38).get_Revert_3t1tzh_k$ = get_Revert;
  protoOf(Companion_38).get_RevertLayer_4aljuk_k$ = get_RevertLayer;
  protoOf(Companion_38).get_Unset_ii4mhs_k$ = get_Unset;
  protoOf(Companion_39).get_Inherit_a1a9e6_k$ = get_Inherit;
  protoOf(Companion_39).get_Initial_a0h2v9_k$ = get_Initial;
  protoOf(Companion_39).get_Revert_3t1tzh_k$ = get_Revert;
  protoOf(Companion_39).get_RevertLayer_4aljuk_k$ = get_RevertLayer;
  protoOf(Companion_39).get_Unset_ii4mhs_k$ = get_Unset;
  protoOf(Companion_40).get_Inherit_a1a9e6_k$ = get_Inherit;
  protoOf(Companion_40).get_Initial_a0h2v9_k$ = get_Initial;
  protoOf(Companion_40).get_Revert_3t1tzh_k$ = get_Revert;
  protoOf(Companion_40).get_RevertLayer_4aljuk_k$ = get_RevertLayer;
  protoOf(Companion_40).get_Unset_ii4mhs_k$ = get_Unset;
  protoOf(Companion_41).get_Inherit_a1a9e6_k$ = get_Inherit;
  protoOf(Companion_41).get_Initial_a0h2v9_k$ = get_Initial;
  protoOf(Companion_41).get_Revert_3t1tzh_k$ = get_Revert;
  protoOf(Companion_41).get_RevertLayer_4aljuk_k$ = get_RevertLayer;
  protoOf(Companion_41).get_Unset_ii4mhs_k$ = get_Unset;
  protoOf(CalcScopeInstance).times_cubebc_k$ = times;
  protoOf(CalcScopeInstance).times_6xg5ti_k$ = times_0;
  protoOf(CalcScopeInstance).div_wucann_k$ = div;
  protoOf(CalcScopeInstance).plus_g6zkc3_k$ = plus;
  protoOf(CalcScopeInstance).minus_29zpb7_k$ = minus;
  protoOf(CalcScopeInstance).unaryMinus_d2gf0y_k$ = unaryMinus;
  protoOf(CalcScopeInstance).unaryPlus_9h1xw6_k$ = unaryPlus;
  protoOf(CalcScopeInstance).num_5kpq4n_k$ = num;
  protoOf(SVGGraphicalElementAttrsScope).stroke_gwdh04_k$ = stroke;
  protoOf(SVGGraphicalElementAttrsScope).stroke_m42ljs_k$ = stroke_0;
  protoOf(SVGGraphicalElementAttrsScope).stroke_yaq6g6_k$ = stroke_1;
  protoOf(SVGGraphicalElementAttrsScope).strokeDashArray_61cnbu_k$ = strokeDashArray;
  protoOf(SVGGraphicalElementAttrsScope).strokeDashArray_w05e8t_k$ = strokeDashArray_0;
  protoOf(SVGGraphicalElementAttrsScope).strokeDashOffset_gmplu6_k$ = strokeDashOffset;
  protoOf(SVGGraphicalElementAttrsScope).strokeDashOffset_4g6nv2_k$ = strokeDashOffset_0;
  protoOf(SVGGraphicalElementAttrsScope).strokeLineCap_j27fru_k$ = strokeLineCap;
  protoOf(SVGGraphicalElementAttrsScope).strokeLineJoin_i3mwce_k$ = strokeLineJoin;
  protoOf(SVGGraphicalElementAttrsScope).strokeMiterLimit_cvov7h_k$ = strokeMiterLimit;
  protoOf(SVGGraphicalElementAttrsScope).strokeOpacity_9z0e14_k$ = strokeOpacity;
  protoOf(SVGGraphicalElementAttrsScope).strokeWidth_s6idgd_k$ = strokeWidth;
  protoOf(SVGGraphicalElementAttrsScope).strokeWidth_qi05wj_k$ = strokeWidth_0;
  protoOf(SVGGraphicalElementAttrsScope).fill_m6m1z3_k$ = fill;
  protoOf(SVGGraphicalElementAttrsScope).fill_wlycpl_k$ = fill_0;
  protoOf(SVGGraphicalElementAttrsScope).fill_gyvskv_k$ = fill_1;
  protoOf(SVGGraphicalElementAttrsScope).fillRule_uv8r2f_k$ = fillRule;
  protoOf(SVGGraphicalElementAttrsScope).fillOpacity_3uni2r_k$ = fillOpacity;
  protoOf(SVGGraphicalElementAttrsScope).filter_81gu56_k$ = filter;
  protoOf(SVGGraphicalElementAttrsScope).floodColor_c7kev5_k$ = floodColor;
  protoOf(SVGGraphicalElementAttrsScope).floodOpacity_dw0q4i_k$ = floodOpacity;
  protoOf(SVGGraphicalElementAttrsScope).lightingColor_3dqaer_k$ = lightingColor;
  protoOf(SVGSvgAttrsScope).x_gzumtf_k$ = x;
  protoOf(SVGSvgAttrsScope).x_re57k3_k$ = x_0;
  protoOf(SVGSvgAttrsScope).y_j1pyci_k$ = y;
  protoOf(SVGSvgAttrsScope).y_eyowiq_k$ = y_0;
  protoOf(SVGSvgAttrsScope).height_azv3o_k$ = height;
  protoOf(SVGSvgAttrsScope).height_vnwjw4_k$ = height_0;
  protoOf(SVGSvgAttrsScope).width_ux3u5x_k$ = width_0;
  protoOf(SVGSvgAttrsScope).width_3dri8b_k$ = width_1;
  protoOf(SVGSvgAttrsScope).viewBox_s5pn86_k$ = viewBox;
  protoOf(SVGSvgAttrsScope).viewBox_cjnss5_k$ = viewBox_0;
  protoOf(SVGCircleAttrsScope).cx_7c4b4q_k$ = cx;
  protoOf(SVGCircleAttrsScope).cx_pmhp9i_k$ = cx_0;
  protoOf(SVGCircleAttrsScope).cy_5a8zln_k$ = cy;
  protoOf(SVGCircleAttrsScope).cy_d71e85_k$ = cy_0;
  //endregion
  //region block: init
  com_varabyte_kobweb_compose_attributes_ComparableAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_attributes_SyntheticEventListener$stable = 0;
  com_varabyte_kobweb_compose_attributes_TransitionEventListener$stable = 0;
  com_varabyte_kobweb_compose_css_BorderImageNumericBuilder$stable = 8;
  com_varabyte_kobweb_compose_css_BorderImageSlice_Builder$stable = 8;
  com_varabyte_kobweb_compose_css_BorderImageWidth_Builder$stable = 8;
  com_varabyte_kobweb_compose_css_BorderImageOutset_Builder$stable = 8;
  com_varabyte_kobweb_compose_css_Edge$stable = 0;
  com_varabyte_kobweb_compose_css_EdgeXOrCenter$stable = 0;
  com_varabyte_kobweb_compose_css_EdgeX$stable = 0;
  com_varabyte_kobweb_compose_css_CenterX$stable = 0;
  com_varabyte_kobweb_compose_css_EdgeXOffset$stable = 8;
  com_varabyte_kobweb_compose_css_EdgeYOrCenter$stable = 0;
  com_varabyte_kobweb_compose_css_EdgeY$stable = 0;
  com_varabyte_kobweb_compose_css_CenterY$stable = 0;
  com_varabyte_kobweb_compose_css_EdgeYOffset$stable = 8;
  com_varabyte_kobweb_compose_css_CSSPosition$stable = 0;
  com_varabyte_kobweb_compose_css_HueInterpolationMethod$stable = 0;
  com_varabyte_kobweb_compose_css_ColorInterpolationMethod_PolarColorSpace$stable = 0;
  com_varabyte_kobweb_compose_css_ColorInterpolationMethod$stable = 0;
  com_varabyte_kobweb_compose_css_ComparableStyleScope$stable = 8;
  com_varabyte_kobweb_compose_css_GridEntry_TrackSize_FitContent$stable = 0;
  com_varabyte_kobweb_compose_css_GridEntry_TrackSize_MinMax$stable = 0;
  com_varabyte_kobweb_compose_css_GridEntry_TrackSize_Flex$stable = 0;
  com_varabyte_kobweb_compose_css_GridEntry_TrackSize_Inflexible$stable = 0;
  com_varabyte_kobweb_compose_css_GridEntry_TrackSize_Keyword$stable = 0;
  com_varabyte_kobweb_compose_css_GridEntry_TrackSize_Fixed$stable = 0;
  com_varabyte_kobweb_compose_css_GridEntry_TrackSize$stable = 0;
  com_varabyte_kobweb_compose_css_GridEntry_Repeat_Track$stable = 8;
  com_varabyte_kobweb_compose_css_GridEntry_Repeat_Auto$stable = 8;
  com_varabyte_kobweb_compose_css_GridEntry_Repeat$stable = 8;
  com_varabyte_kobweb_compose_css_GridEntry_LineNames$stable = 8;
  com_varabyte_kobweb_compose_css_GridEntry$stable = 0;
  com_varabyte_kobweb_compose_css_GridTrackBuilderInRepeat$stable = 8;
  com_varabyte_kobweb_compose_css_GridTrackBuilder$stable = 8;
  com_varabyte_kobweb_compose_css_GridTemplate_SubgridBuilder$stable = 8;
  com_varabyte_kobweb_compose_css_GridBuilderInAuto$stable = 8;
  com_varabyte_kobweb_compose_css_GridBuilder$stable = 8;
  com_varabyte_kobweb_compose_css_CSSLayerRuleDeclaration$stable = 8;
  com_varabyte_kobweb_compose_css_CSSMargin$stable = 8;
  com_varabyte_kobweb_compose_css_CSSOutline$stable = 8;
  com_varabyte_kobweb_compose_css_CSSScopeRuleDeclaration$stable = 8;
  com_varabyte_kobweb_compose_css_StyleVariable_PropertyValue$stable = 8;
  com_varabyte_kobweb_compose_css_StyleVariable_NumberValue$stable = 8;
  com_varabyte_kobweb_compose_css_StyleVariable_StringValue$stable = 8;
  com_varabyte_kobweb_compose_css_StyleVariable$stable = 0;
  com_varabyte_kobweb_compose_css_StyleVariablePropertyProvider$stable = 0;
  com_varabyte_kobweb_compose_css_StyleVariableNumberProvider$stable = 0;
  com_varabyte_kobweb_compose_css_StyleVariableStringProvider$stable = 0;
  com_varabyte_kobweb_compose_css_CSSTextShadow$stable = 8;
  com_varabyte_kobweb_compose_css_functions_CalcScope_CalcNum$stable = 8;
  com_varabyte_kobweb_compose_css_functions_CSSFilter$stable = 0;
  com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry_Color_Simple$stable = 0;
  com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry_Color_Stop$stable = 0;
  com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry_Color_StopRange$stable = 0;
  com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry_Color$stable = 0;
  com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry_Hint$stable = 0;
  com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry$stable = 0;
  com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder$stable = 8;
  com_varabyte_kobweb_compose_css_functions_RepeatingGradient$stable = 0;
  com_varabyte_kobweb_compose_css_functions_LinearGradient_Base$stable = 0;
  com_varabyte_kobweb_compose_css_functions_LinearGradient_ByDirection$stable = 0;
  com_varabyte_kobweb_compose_css_functions_LinearGradient_ByAngle$stable = 0;
  com_varabyte_kobweb_compose_css_functions_LinearGradient$stable = 0;
  com_varabyte_kobweb_compose_css_functions_RadialGradient_Shape_Circle$stable = 0;
  com_varabyte_kobweb_compose_css_functions_RadialGradient_Shape_Ellipse$stable = 0;
  com_varabyte_kobweb_compose_css_functions_RadialGradient_Shape$stable = 0;
  com_varabyte_kobweb_compose_css_functions_RadialGradient$stable = 0;
  com_varabyte_kobweb_compose_css_functions_ConicGradient$stable = 0;
  com_varabyte_kobweb_compose_css_functions_CSSClamp$stable = 8;
  com_varabyte_kobweb_compose_css_functions_CSSMin$stable = 8;
  com_varabyte_kobweb_compose_css_functions_CSSMax$stable = 8;
  com_varabyte_kobweb_compose_css_functions_CSSUrl$stable = 0;
  com_varabyte_kobweb_compose_dom_ElementRefScope_RefCallback_Simple$stable = 0;
  com_varabyte_kobweb_compose_dom_ElementRefScope_RefCallback_Disposable$stable = 0;
  com_varabyte_kobweb_compose_dom_ElementRefScope_RefCallback$stable = 0;
  com_varabyte_kobweb_compose_dom_ElementRefScope_KeysToEffect$stable = 8;
  com_varabyte_kobweb_compose_dom_ElementRefScope_Builder$stable = 8;
  com_varabyte_kobweb_compose_dom_ElementRefScope$stable = 8;
  com_varabyte_kobweb_compose_dom_GenericElementBuilder$stable = 8;
  com_varabyte_kobweb_compose_dom_GenericNamespacedElementBuilder$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGTransformScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGElementAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_ViewBox$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGGraphicalElementAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGContainerElementAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGSvgAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGDefsAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGGradientAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGLinearGradientAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGRadialGradientAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGStopAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGPatternAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGSymbolAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGUseAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGCircleAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGEllipseAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGGroupAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGImageAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGLineAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGPathDataScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGPathAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGPolygonAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGPolylineAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGRectAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGTextAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFilterElementAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFilterElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFilterAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEBlendElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEBlendAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEColorMatrixElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEColorMatrixAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFECompositeElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFECompositeAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEConvolveMatrixElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEConvolveMatrixAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEDiffuseLightingElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEDiffuseLightingAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEDistantLightElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEDistantLightAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEPointLightElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEPointLightAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFESpotLightElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFESpotLightAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEDisplacementMapElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEDisplacementMapAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEDropShadowElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEDropShadowAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEFloodElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEFloodAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEGaussianBlurElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEGaussianBlurAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEImageElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEImageAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEMergeElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEMergeAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEMergeNodeElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEMergeNodeAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEComponentTransferElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEComponentTransferAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGComponentTransferFunctionElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEFuncAElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEFuncRElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEFuncGElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEFuncBElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGComponentTransferFunctionAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEMorphologyElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEMorphologyAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEOffsetElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEOffsetAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFESpecularLightingElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFESpecularLightingAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFETileElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFETileAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFETurbulenceElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFETurbulenceAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_events_SyntheticEvent$stable = 8;
  com_varabyte_kobweb_compose_events_SyntheticTransitionEvent$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = calc;
  _.$_$.b = linearGradient;
  _.$_$.c = CSSScopeRuleDeclaration;
  _.$_$.d = ComparableStyleScope;
  _.$_$.e = NumberValue;
  _.$_$.f = StyleVariable_2;
  _.$_$.g = StyleVariable;
  _.$_$.h = StyleVariable_0;
  _.$_$.i = StyleVariable_3;
  _.$_$.j = alignItems;
  _.$_$.k = appearance;
  _.$_$.l = ariaDisabled;
  _.$_$.m = ariaHidden;
  _.$_$.n = backgroundAttachment_0;
  _.$_$.o = backgroundClip_0;
  _.$_$.p = backgroundColor;
  _.$_$.q = backgroundImage_2;
  _.$_$.r = backgroundImage_0;
  _.$_$.s = backgroundImage_1;
  _.$_$.t = backgroundOrigin_0;
  _.$_$.u = backgroundPosition_0;
  _.$_$.v = backgroundRepeat_0;
  _.$_$.w = backgroundRepeat_1;
  _.$_$.x = backgroundSize_0;
  _.$_$.y = background;
  _.$_$.z = borderBottom;
  _.$_$.a1 = borderColor;
  _.$_$.b1 = borderColor_0;
  _.$_$.c1 = borderColor_1;
  _.$_$.d1 = borderColor_2;
  _.$_$.e1 = borderLeft;
  _.$_$.f1 = borderStyle_1;
  _.$_$.g1 = borderStyle;
  _.$_$.h1 = borderStyle_2;
  _.$_$.i1 = borderStyle_0;
  _.$_$.j1 = borderTop;
  _.$_$.k1 = borderWidth;
  _.$_$.l1 = boxShadow;
  _.$_$.m1 = boxSizing_0;
  _.$_$.n1 = colorScheme;
  _.$_$.o1 = com_varabyte_kobweb_compose_css_ComparableStyleScope$stableprop_getter;
  _.$_$.p1 = cursor;
  _.$_$.q1 = fontWeight;
  _.$_$.r1 = gridTemplateColumns_0;
  _.$_$.s1 = grid;
  _.$_$.t1 = isNotEmpty;
  _.$_$.u1 = justifyContent;
  _.$_$.v1 = justifyItems;
  _.$_$.w1 = justifySelf;
  _.$_$.x1 = layer;
  _.$_$.y1 = listStyle;
  _.$_$.z1 = marginBlockEnd;
  _.$_$.a2 = marginBlockStart;
  _.$_$.b2 = marginBlock;
  _.$_$.c2 = objectFit;
  _.$_$.d2 = outline;
  _.$_$.e2 = overflowX;
  _.$_$.f2 = overflowY;
  _.$_$.g2 = overflow;
  _.$_$.h2 = paddingInline;
  _.$_$.i2 = rotate;
  _.$_$.j2 = scope;
  _.$_$.k2 = setVariable_0;
  _.$_$.l2 = setVariable;
  _.$_$.m2 = textAlign;
  _.$_$.n2 = textDecorationLine;
  _.$_$.o2 = toDegrees;
  _.$_$.p2 = transitionBehavior;
  _.$_$.q2 = transitionDelay;
  _.$_$.r2 = transitionDuration;
  _.$_$.s2 = transitionProperty_0;
  _.$_$.t2 = transitionProperty;
  _.$_$.u2 = transitionTimingFunction;
  _.$_$.v2 = transition;
  _.$_$.w2 = translateX;
  _.$_$.x2 = userSelect;
  _.$_$.y2 = verticalAlign;
  _.$_$.z2 = whiteSpace;
  _.$_$.a3 = zIndex;
  _.$_$.b3 = Circle;
  _.$_$.c3 = Path;
  _.$_$.d3 = Svg;
  _.$_$.e3 = com_varabyte_kobweb_compose_dom_svg_ViewBox$stableprop_getter;
  _.$_$.f3 = GenericTag_0;
  _.$_$.g3 = com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter;
  _.$_$.h3 = registerRefScope;
  _.$_$.i3 = registerRefScope_0;
  _.$_$.j3 = Direction_ToRight_getInstance;
  _.$_$.k3 = SVGFillType_CurrentColor_getInstance;
  _.$_$.l3 = SVGFillType_None_getInstance;
  _.$_$.m3 = SVGStrokeLineCap_Round_getInstance;
  _.$_$.n3 = SVGStrokeType_CurrentColor_getInstance;
  _.$_$.o3 = SVGStrokeType_None_getInstance;
  _.$_$.p3 = ComparableAttrsScope_init_$Create$;
  _.$_$.q3 = Companion_getInstance_2;
  _.$_$.r3 = Companion_getInstance_6;
  _.$_$.s3 = Companion_getInstance_25;
  _.$_$.t3 = Companion_getInstance_12;
  _.$_$.u3 = Companion_getInstance_14;
  _.$_$.v3 = Companion_getInstance_17;
  _.$_$.w3 = Companion_getInstance_18;
  _.$_$.x3 = Companion_getInstance_22;
  _.$_$.y3 = Companion_getInstance_24;
  _.$_$.z3 = Companion_getInstance_26;
  _.$_$.a4 = Companion_getInstance_3;
  _.$_$.b4 = Companion_getInstance_4;
  _.$_$.c4 = Companion_getInstance_5;
  _.$_$.d4 = Companion_getInstance_32;
  _.$_$.e4 = Companion_getInstance_30;
  _.$_$.f4 = Companion_getInstance_33;
  _.$_$.g4 = Companion_getInstance_34;
  _.$_$.h4 = Companion_getInstance_35;
  _.$_$.i4 = Companion_getInstance_36;
  _.$_$.j4 = Companion_getInstance_39;
  _.$_$.k4 = Companion_getInstance_38;
  _.$_$.l4 = Companion_getInstance_41;
  _.$_$.m4 = Companion_getInstance_43;
  _.$_$.n4 = Companion_getInstance_37;
  _.$_$.o4 = Companion_getInstance_29;
  _.$_$.p4 = Companion_getInstance_40;
  _.$_$.q4 = Companion_getInstance_47;
  //endregion
  return _;
}));
