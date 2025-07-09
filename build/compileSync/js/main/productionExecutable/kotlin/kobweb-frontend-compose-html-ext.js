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
  var protoOf = kotlin_kotlin.$_$.h7;
  var objectCreate = kotlin_kotlin.$_$.g7;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.p;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.q;
  var Unit_instance = kotlin_kotlin.$_$.c2;
  var equals = kotlin_kotlin.$_$.l6;
  var hashCode = kotlin_kotlin.$_$.q6;
  var classes = kotlin_org_jetbrains_compose_html_html_core.$_$.o;
  var tabIndex = kotlin_org_jetbrains_compose_html_html_core.$_$.p;
  var onClick = kotlin_org_jetbrains_compose_html_html_core.$_$.r;
  var AttrsScope = kotlin_org_jetbrains_compose_html_html_core.$_$.q;
  var initMetadataForClass = kotlin_kotlin.$_$.r6;
  var VOID = kotlin_kotlin.$_$.e;
  var initMetadataForCompanion = kotlin_kotlin.$_$.s6;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.x;
  var reversed = kotlin_kotlin.$_$.u4;
  var joinToString = kotlin_kotlin.$_$.x3;
  var charSequenceLength = kotlin_kotlin.$_$.h6;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.r1;
  var toList = kotlin_kotlin.$_$.a5;
  var toString = kotlin_kotlin.$_$.j7;
  var backgroundImage = kotlin_org_jetbrains_compose_html_html_core.$_$.k1;
  var Color_instance = kotlin_org_jetbrains_compose_html_html_core.$_$.i;
  var Color = kotlin_org_jetbrains_compose_html_html_core.$_$.a1;
  var CSSBorder = kotlin_org_jetbrains_compose_html_html_core.$_$.t;
  var width = kotlin_org_jetbrains_compose_html_html_core.$_$.f3;
  var style = kotlin_org_jetbrains_compose_html_html_core.$_$.a3;
  var color = kotlin_org_jetbrains_compose_html_html_core.$_$.p1;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.x2;
  var joinToString_0 = kotlin_kotlin.$_$.y3;
  var boxSizing = kotlin_org_jetbrains_compose_html_html_core.$_$.o1;
  var property = kotlin_org_jetbrains_compose_html_html_core.$_$.b1;
  var property_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.c1;
  var variable = kotlin_org_jetbrains_compose_html_html_core.$_$.d1;
  var StyleScope = kotlin_org_jetbrains_compose_html_html_core.$_$.f1;
  var copyToArray = kotlin_kotlin.$_$.k3;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var lastOrNull = kotlin_kotlin.$_$.c4;
  var get_lastIndex = kotlin_kotlin.$_$.b4;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ea;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var listOf = kotlin_kotlin.$_$.f4;
  var emptyList = kotlin_kotlin.$_$.n3;
  var addAll = kotlin_kotlin.$_$.x2;
  var ensureNotNull = kotlin_kotlin.$_$.ca;
  var gridTemplateColumns = kotlin_org_jetbrains_compose_html_html_core.$_$.f2;
  var Companion_instance = kotlin_org_jetbrains_compose_html_html_core.$_$.j;
  var display = kotlin_org_jetbrains_compose_html_html_core.$_$.u1;
  var gridTemplateRows = kotlin_org_jetbrains_compose_html_html_core.$_$.g2;
  var gridAutoColumns = kotlin_org_jetbrains_compose_html_html_core.$_$.d2;
  var gridAutoRows = kotlin_org_jetbrains_compose_html_html_core.$_$.e2;
  var StyleSheet_init_$Create$ = kotlin_org_jetbrains_compose_html_html_core.$_$.c;
  var CSSGroupingRuleDeclaration = kotlin_org_jetbrains_compose_html_html_core.$_$.u;
  var listOfNotNull = kotlin_kotlin.$_$.e4;
  var initMetadataForInterface = kotlin_kotlin.$_$.u6;
  var THROW_CCE = kotlin_kotlin.$_$.v9;
  var isNumber = kotlin_kotlin.$_$.a7;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var titleCamelCaseToKebabCase = kotlin_com_varabyte_kobweb_browser_ext.$_$.c;
  var removeSuffix = kotlin_kotlin.$_$.r8;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.e3;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.i;
  var charSequenceGet = kotlin_kotlin.$_$.g6;
  var isWhitespace = kotlin_kotlin.$_$.o8;
  var initMetadataForObject = kotlin_kotlin.$_$.w6;
  var Enum = kotlin_kotlin.$_$.o9;
  var Collection = kotlin_kotlin.$_$.m2;
  var isInterface = kotlin_kotlin.$_$.z6;
  var checkCountOverflow = kotlin_kotlin.$_$.c3;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.f1;
  var checkIndexOverflow = kotlin_kotlin.$_$.d3;
  var getOrNull = kotlin_kotlin.$_$.u3;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var DisposableEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var ElementBuilder = kotlin_org_jetbrains_compose_html_html_core.$_$.j3;
  var TagElement = kotlin_org_jetbrains_compose_html_html_core.$_$.n3;
  var to = kotlin_kotlin.$_$.la;
  var KProperty1 = kotlin_kotlin.$_$.t7;
  var getPropertyCallableRef = kotlin_kotlin.$_$.o6;
  var lazy = kotlin_kotlin.$_$.da;
  var charArrayOf = kotlin_kotlin.$_$.e6;
  var split = kotlin_kotlin.$_$.u8;
  var removeSurrounding = kotlin_kotlin.$_$.t8;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var charCodeAt = kotlin_kotlin.$_$.f6;
  var toString_0 = kotlin_kotlin.$_$.s1;
  var substring = kotlin_kotlin.$_$.b9;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(ComparableAttrsScope, 'ComparableAttrsScope', ComparableAttrsScope_init_$Create$, VOID, [AttrsScope]);
  initMetadataForClass(DummyAttrsScope, 'DummyAttrsScope', DummyAttrsScope, VOID, [AttrsScope]);
  initMetadataForCompanion(Companion);
  initMetadataForCompanion(Companion_0);
  initMetadataForCompanion(Companion_1);
  initMetadataForCompanion(Companion_2);
  initMetadataForCompanion(Companion_3);
  initMetadataForCompanion(Companion_4);
  initMetadataForCompanion(Companion_5);
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(ComparableStyleScope, 'ComparableStyleScope', ComparableStyleScope, VOID, [StyleScope]);
  initMetadataForCompanion(Companion_7);
  initMetadataForCompanion(Companion_8);
  initMetadataForCompanion(Companion_9);
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
  initMetadataForCompanion(Companion_10);
  initMetadataForClass(Repeat, 'Repeat', VOID, GridEntry);
  initMetadataForClass(Track, 'Track', VOID, Repeat);
  initMetadataForClass(Auto, 'Auto', VOID, Repeat);
  initMetadataForClass(LineNames, 'LineNames', VOID, GridEntry);
  initMetadataForCompanion(Companion_11);
  initMetadataForClass(GridBuilderInAuto, 'GridBuilderInAuto');
  initMetadataForClass(GridBuilder, 'GridBuilder', GridBuilder, GridBuilderInAuto);
  initMetadataForClass(CSSLayerRuleDeclaration, 'CSSLayerRuleDeclaration', VOID, VOID, [CSSGroupingRuleDeclaration]);
  initMetadataForCompanion(Companion_12);
  initMetadataForCompanion(Companion_13);
  initMetadataForCompanion(Companion_14);
  initMetadataForCompanion(Companion_15);
  initMetadataForCompanion(Companion_16);
  initMetadataForCompanion(Companion_17);
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
  function get_Auto() {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'auto';
  }
  initMetadataForInterface(CssOverflowModeValues, 'CssOverflowModeValues');
  initMetadataForCompanion(Companion_18, VOID, [CssOverflowModeValues]);
  initMetadataForClass(CSSScopeRuleDeclaration, 'CSSScopeRuleDeclaration', VOID, VOID, [CSSGroupingRuleDeclaration]);
  initMetadataForClass(StyleVariable, 'StyleVariable');
  initMetadataForClass(PropertyValue, 'PropertyValue', VOID, StyleVariable);
  initMetadataForClass(NumberValue, 'NumberValue', VOID, StyleVariable);
  initMetadataForClass(StyleVariablePropertyProvider, 'StyleVariablePropertyProvider');
  initMetadataForClass(StyleVariableNumberProvider, 'StyleVariableNumberProvider');
  initMetadataForCompanion(Companion_19);
  initMetadataForCompanion(Companion_20);
  initMetadataForCompanion(Companion_21);
  initMetadataForCompanion(Companion_22);
  initMetadataForCompanion(Companion_23);
  initMetadataForCompanion(Companion_24);
  initMetadataForCompanion(Companion_25);
  function unaryMinus(_this__u8e3s4) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'calc(-1 * ' + toString(_this__u8e3s4) + ')';
  }
  initMetadataForInterface(CalcScope, 'CalcScope');
  initMetadataForObject(CalcScopeInstance, 'CalcScopeInstance', VOID, VOID, [CalcScope]);
  initMetadataForClass(Direction, 'Direction', VOID, Enum);
  initMetadataForClass(LinearGradient, 'LinearGradient');
  initMetadataForClass(Base, 'Base', VOID, LinearGradient);
  initMetadataForClass(ByDirection, 'ByDirection', VOID, Base);
  initMetadataForClass(Entry, 'Entry');
  initMetadataForClass(Color_0, 'Color', VOID, Entry);
  initMetadataForClass(Simple, 'Simple', VOID, Color_0);
  initMetadataForClass(Hint, 'Hint', VOID, Entry);
  initMetadataForClass(ColorStopsBuilder, 'ColorStopsBuilder', ColorStopsBuilder);
  initMetadataForCompanion(Companion_26);
  initMetadataForClass(GenericNamespacedElementBuilder, 'GenericNamespacedElementBuilder', VOID, VOID, [ElementBuilder]);
  initMetadataForCompanion(Companion_27);
  initMetadataForClass(GenericElementBuilder, 'GenericElementBuilder', VOID, VOID, [ElementBuilder]);
  initMetadataForCompanion(Companion_28);
  initMetadataForClass(ViewBox, 'ViewBox');
  initMetadataForCompanion(Companion_29);
  initMetadataForClass(SVGElementAttrsScope, 'SVGElementAttrsScope', VOID, VOID, [AttrsScope]);
  function stroke(value) {
    return this.f2k('stroke', value.toString());
  }
  function strokeLineCap(value) {
    return this.f2k('stroke-linecap', value.toString());
  }
  function strokeMiterLimit(value) {
    return this.f2k('stroke-miterlimit', toString(value));
  }
  function strokeWidth(value) {
    return this.f2k('stroke-width', toString(value));
  }
  function fill(value) {
    return this.f2k('fill', value.toString());
  }
  initMetadataForInterface(SvgPresentationAttrs, 'SvgPresentationAttrs', VOID, VOID, [AttrsScope]);
  initMetadataForClass(SVGGraphicalElementAttrsScope, 'SVGGraphicalElementAttrsScope', VOID, SVGElementAttrsScope, [SVGElementAttrsScope, SvgPresentationAttrs]);
  initMetadataForClass(SVGContainerElementAttrsScope, 'SVGContainerElementAttrsScope', VOID, SVGGraphicalElementAttrsScope);
  function width_0(value) {
    this.f2k('width', toString(value));
  }
  initMetadataForInterface(SvgLengthAttrs, 'SvgLengthAttrs', VOID, VOID, [AttrsScope]);
  function viewBox(x, y, width, height) {
    this.f2k('viewBox', toString(x) + ' ' + toString(y) + ' ' + toString(width) + ' ' + toString(height));
  }
  initMetadataForInterface(SvgViewBoxAttrs, 'SvgViewBoxAttrs', VOID, VOID, [AttrsScope]);
  initMetadataForClass(SVGSvgAttrsScope, 'SVGSvgAttrsScope', VOID, SVGContainerElementAttrsScope, [SVGContainerElementAttrsScope, AttrsScope, SvgLengthAttrs, SvgViewBoxAttrs]);
  initMetadataForCompanion(Companion_30);
  initMetadataForClass(SVGPathAttrsScope, 'SVGPathAttrsScope', VOID, SVGGraphicalElementAttrsScope);
  initMetadataForClass(SVGStrokeLineCap, 'SVGStrokeLineCap', VOID, Enum);
  initMetadataForCompanion(Companion_31);
  function cx(value) {
    this.f2k('cx', toString(value));
  }
  function cy(value) {
    this.f2k('cy', toString(value));
  }
  initMetadataForInterface(SvgCenterCoordinateAttrs, 'SvgCenterCoordinateAttrs', VOID, VOID, [AttrsScope]);
  initMetadataForClass(SVGCircleAttrsScope, 'SVGCircleAttrsScope', VOID, SVGGraphicalElementAttrsScope, [SVGGraphicalElementAttrsScope, SvgCenterCoordinateAttrs]);
  initMetadataForClass(SVGFillType, 'SVGFillType', VOID, Enum);
  initMetadataForClass(SVGStrokeType, 'SVGStrokeType', VOID, Enum);
  //endregion
  var com_varabyte_kobweb_compose_attributes_ComparableAttrsScope$stable;
  function ComparableAttrsScope_init_$Init$($this) {
    ComparableAttrsScope.call($this, new DummyAttrsScope());
    return $this;
  }
  function ComparableAttrsScope_init_$Create$() {
    return ComparableAttrsScope_init_$Init$(objectCreate(protoOf(ComparableAttrsScope)));
  }
  function ComparableAttrsScope(wrapped) {
    this.l2p_1 = wrapped;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.m2p_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_0.n2p_1 = LinkedHashSet_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_1.o2p_1 = LinkedHashSet_init_$Create$();
    this.p2p_1 = null;
  }
  protoOf(ComparableAttrsScope).f2k = function (attr, value) {
    // Inline function 'kotlin.collections.set' call
    this.m2p_1.l2(attr, value);
    this.l2p_1.f2k(attr, value);
    return this;
  };
  protoOf(ComparableAttrsScope).h2k = function (classes) {
    this.n2p_1.n(classes);
  };
  protoOf(ComparableAttrsScope).l2k = function (listener) {
    this.o2p_1.e(listener);
    this.l2p_1.l2k(listener);
  };
  protoOf(ComparableAttrsScope).g2k = function (builder) {
    var tmp0_elvis_lhs = this.p2p_1;
    var style = tmp0_elvis_lhs == null ? new ComparableStyleScope() : tmp0_elvis_lhs;
    builder(style);
    this.p2p_1 = style;
    this.l2p_1.g2k(builder);
  };
  protoOf(ComparableAttrsScope).q2p = function (effect) {
    this.l2p_1.k2k(effect);
  };
  protoOf(ComparableAttrsScope).k2k = function (effect) {
    return this.q2p(effect);
  };
  protoOf(ComparableAttrsScope).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof ComparableAttrsScope) {
      tmp_2 = equals(other.m2p_1, this.m2p_1);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = equals(other.n2p_1, this.n2p_1);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals(other.o2p_1, this.o2p_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(other.p2p_1, this.p2p_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComparableAttrsScope).hashCode = function () {
    var result = hashCode(this.m2p_1);
    result = imul(31, result) + hashCode(this.n2p_1) | 0;
    result = imul(31, result) + hashCode(this.o2p_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.p2p_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  function DummyAttrsScope() {
  }
  protoOf(DummyAttrsScope).f2k = function (attr, value) {
    return this;
  };
  protoOf(DummyAttrsScope).h2k = function (classes) {
    return Unit_instance;
  };
  protoOf(DummyAttrsScope).l2k = function (listener) {
    return Unit_instance;
  };
  protoOf(DummyAttrsScope).g2k = function (builder) {
    return Unit_instance;
  };
  protoOf(DummyAttrsScope).q2p = function (effect) {
    return Unit_instance;
  };
  protoOf(DummyAttrsScope).k2k = function (effect) {
    return this.q2p(effect);
  };
  var com_varabyte_kobweb_compose_attributes_SyntheticEventListener$stable;
  var com_varabyte_kobweb_compose_attributes_TransitionEventListener$stable;
  function ariaHidden(_this__u8e3s4, value) {
    value = value === VOID ? true : value;
    _this__u8e3s4.f2k('aria-hidden', value.toString());
  }
  function ariaDisabled(_this__u8e3s4, value) {
    value = value === VOID ? true : value;
    _this__u8e3s4.f2k('aria-disabled', value.toString());
  }
  function alignItems(_this__u8e3s4, alignItems) {
    _this__u8e3s4.x2l('align-items', alignItems);
  }
  function Companion() {
  }
  protoOf(Companion).r2p = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'center';
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    return Companion_instance_0;
  }
  function justifyContent(_this__u8e3s4, justifyContent) {
    _this__u8e3s4.x2l('justify-content', justifyContent);
  }
  function Companion_0() {
  }
  protoOf(Companion_0).r2p = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'center';
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    return Companion_instance_1;
  }
  function justifyItems(_this__u8e3s4, justifyItems) {
    _this__u8e3s4.x2l('justify-items', justifyItems);
  }
  function Companion_1() {
  }
  protoOf(Companion_1).r2p = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'center';
  };
  protoOf(Companion_1).s2p = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'start';
  };
  protoOf(Companion_1).t2p = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'end';
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    return Companion_instance_2;
  }
  function justifySelf(_this__u8e3s4, justifySelf) {
    _this__u8e3s4.x2l('justify-self', justifySelf);
  }
  function Companion_2() {
  }
  protoOf(Companion_2).r2p = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'center';
  };
  protoOf(Companion_2).s2p = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'start';
  };
  protoOf(Companion_2).t2p = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'end';
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    return Companion_instance_3;
  }
  function _list($this, color, backgrounds) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    $l$block: {
      if (color == null && backgrounds.r()) {
        break $l$block;
      }
      this_0.c8(joinToString(reversed(backgrounds)));
      if (!(color == null)) {
        // Inline function 'kotlin.text.isNotEmpty' call
        if (charSequenceLength(this_0) > 0) {
          this_0.d8(_Char___init__impl__6a9atx(32));
        }
        this_0.b8(color);
      }
    }
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this_0.toString();
  }
  function Companion_3() {
  }
  protoOf(Companion_3).u2p = function (color, backgrounds) {
    return _list(this, color, toList(backgrounds));
  };
  var Companion_instance_4;
  function Companion_getInstance_4() {
    return Companion_instance_4;
  }
  function background(_this__u8e3s4, background) {
    _this__u8e3s4.x2l('background', background);
  }
  function backgroundImage_0(_this__u8e3s4, backgroundImage_0) {
    backgroundImage(_this__u8e3s4, toString(backgroundImage_0));
  }
  function backgroundImage_1(_this__u8e3s4, gradient) {
    return backgroundImage_0(_this__u8e3s4, Companion_instance_26.v2p(gradient));
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
    _this__u8e3s4.x2l('border-color', color);
  }
  function borderColor_0(_this__u8e3s4, top, right, bottom, left) {
    var tmp;
    if (top === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Color.currentColor' call
      tmp = Color('currentColor');
    } else {
      tmp = top;
    }
    top = tmp;
    var tmp_0;
    if (right === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Color.currentColor' call
      tmp_0 = Color('currentColor');
    } else {
      tmp_0 = right;
    }
    right = tmp_0;
    var tmp_1;
    if (bottom === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Color.currentColor' call
      tmp_1 = Color('currentColor');
    } else {
      tmp_1 = bottom;
    }
    bottom = tmp_1;
    var tmp_2;
    if (left === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Color.currentColor' call
      tmp_2 = Color('currentColor');
    } else {
      tmp_2 = left;
    }
    left = tmp_2;
    _this__u8e3s4.t2l('border-color', toString(top) + ' ' + toString(right) + ' ' + toString(bottom) + ' ' + toString(left));
  }
  function borderStyle(_this__u8e3s4, lineStyle) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.t2l('border-style', lineStyle);
  }
  function borderWidth(_this__u8e3s4, width) {
    _this__u8e3s4.x2l('border-width', width);
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
    _this__u8e3s4.x2l('border-bottom', this_0);
  }
  function borderLeft_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSBorder();
    borderBuild(this_0);
    _this__u8e3s4.x2l('border-left', this_0);
  }
  function borderTop_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSBorder();
    borderBuild(this_0);
    _this__u8e3s4.x2l('border-top', this_0);
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
      return Unit_instance;
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
      return Unit_instance;
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
      return Unit_instance;
    };
  }
  function Companion_4() {
  }
  protoOf(Companion_4).w2p = function (offsetX, offsetY, blurRadius, spreadRadius, color, inset) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    if (inset) {
      this_0.c8('inset');
      this_0.d8(_Char___init__impl__6a9atx(32));
    }
    this_0.b8(offsetX);
    this_0.d8(_Char___init__impl__6a9atx(32));
    this_0.b8(offsetY);
    if (!(blurRadius == null)) {
      this_0.d8(_Char___init__impl__6a9atx(32));
      this_0.b8(blurRadius);
    }
    if (!(spreadRadius == null)) {
      if (blurRadius == null) {
        this_0.d8(_Char___init__impl__6a9atx(32));
        this_0.d8(_Char___init__impl__6a9atx(48));
      }
      this_0.d8(_Char___init__impl__6a9atx(32));
      this_0.b8(spreadRadius);
    }
    if (!(color == null)) {
      this_0.d8(_Char___init__impl__6a9atx(32));
      this_0.b8(color);
    }
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this_0.toString();
  };
  protoOf(Companion_4).x2p = function (offsetX, offsetY, blurRadius, spreadRadius, color, inset, $super) {
    offsetX = offsetX === VOID ? get_px(0) : offsetX;
    offsetY = offsetY === VOID ? get_px(0) : offsetY;
    blurRadius = blurRadius === VOID ? null : blurRadius;
    spreadRadius = spreadRadius === VOID ? null : spreadRadius;
    color = color === VOID ? null : color;
    inset = inset === VOID ? false : inset;
    return $super === VOID ? this.w2p(offsetX, offsetY, blurRadius, spreadRadius, color, inset) : $super.w2p.call(this, offsetX, offsetY, blurRadius, spreadRadius, color, inset);
  };
  protoOf(Companion_4).y2p = function (shadows) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return joinToString_0(shadows);
  };
  var Companion_instance_5;
  function Companion_getInstance_5() {
    return Companion_instance_5;
  }
  function Companion_5() {
  }
  protoOf(Companion_5).z2p = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'content-box';
  };
  var Companion_instance_6;
  function Companion_getInstance_6() {
    return Companion_instance_6;
  }
  function boxShadow(_this__u8e3s4, boxShadow) {
    boxShadow_0(_this__u8e3s4, toString(boxShadow));
  }
  function boxSizing_0(_this__u8e3s4, boxSizing_0) {
    boxSizing(_this__u8e3s4, toString(boxSizing_0));
  }
  function boxShadow_0(_this__u8e3s4, value) {
    _this__u8e3s4.t2l('box-shadow', value);
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
  var com_varabyte_kobweb_compose_css_HueInterpolationMethod$stable;
  var com_varabyte_kobweb_compose_css_ColorInterpolationMethod_PolarColorSpace$stable;
  var com_varabyte_kobweb_compose_css_ColorInterpolationMethod$stable;
  function Companion_6() {
  }
  protoOf(Companion_6).a2q = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'light';
  };
  protoOf(Companion_6).b2q = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'dark';
  };
  var Companion_instance_7;
  function Companion_getInstance_7() {
    return Companion_instance_7;
  }
  function colorScheme(_this__u8e3s4, colorScheme) {
    _this__u8e3s4.x2l('color-scheme', colorScheme);
  }
  var com_varabyte_kobweb_compose_css_ComparableStyleScope$stable;
  function com_varabyte_kobweb_compose_css_ComparableStyleScope$stableprop_getter() {
    return com_varabyte_kobweb_compose_css_ComparableStyleScope$stable;
  }
  function ComparableStyleScope() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.c2q_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.d2q_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(ComparableStyleScope).x2l = function (propertyName, value) {
    var tmp0 = this.c2q_1;
    // Inline function 'kotlin.collections.set' call
    var value_0 = toString(value);
    tmp0.l2(propertyName, value_0);
  };
  protoOf(ComparableStyleScope).z2l = function (variableName, value) {
    var tmp0 = this.d2q_1;
    // Inline function 'kotlin.collections.set' call
    var value_0 = toString(value);
    tmp0.l2(variableName, value_0);
  };
  protoOf(ComparableStyleScope).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof ComparableStyleScope) {
      tmp_0 = equals(this.c2q_1, other.c2q_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.d2q_1, other.d2q_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComparableStyleScope).hashCode = function () {
    var result = hashCode(this.c2q_1);
    result = imul(31, result) + hashCode(this.d2q_1) | 0;
    return result;
  };
  function isNotEmpty(_this__u8e3s4) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!_this__u8e3s4.c2q_1.r()) {
      tmp = true;
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp = !_this__u8e3s4.d2q_1.r();
    }
    return tmp;
  }
  function Companion_7() {
  }
  protoOf(Companion_7).e2q = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'pointer';
  };
  protoOf(Companion_7).f2q = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'not-allowed';
  };
  var Companion_instance_8;
  function Companion_getInstance_8() {
    return Companion_instance_8;
  }
  function cursor(_this__u8e3s4, cursor) {
    _this__u8e3s4.x2l('cursor', cursor);
  }
  function Companion_8() {
  }
  protoOf(Companion_8).g2q = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'none';
  };
  var Companion_instance_9;
  function Companion_getInstance_9() {
    return Companion_instance_9;
  }
  function appearance(_this__u8e3s4, appearance) {
    _this__u8e3s4.x2l('appearance', appearance);
  }
  function Companion_9() {
  }
  protoOf(Companion_9).h2q = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return '500';
  };
  protoOf(Companion_9).i2q = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return '600';
  };
  protoOf(Companion_9).j2q = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'bold';
  };
  var Companion_instance_10;
  function Companion_getInstance_10() {
    return Companion_instance_10;
  }
  function fontWeight(_this__u8e3s4, weight) {
    _this__u8e3s4.x2l('font-weight', weight);
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
  protoOf(GridTrackBuilder).l2q = function (count, block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    block(this_0);
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = this_0.m2q_1;
    var repeatTracks = copyToArray(this_1);
    this.m2q_1.e(Companion_instance_12.n2q(count, repeatTracks.slice()));
  };
  function GridTrackBuilderInRepeat() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.m2q_1 = ArrayList_init_$Create$();
  }
  protoOf(GridTrackBuilderInRepeat).o2q = function (track) {
    this.m2q_1.e(track);
  };
  protoOf(GridTrackBuilderInRepeat).p2q = function (value) {
    return this.o2q(Companion_instance_11.s2q(value));
  };
  protoOf(GridTrackBuilderInRepeat).q2q = function (min, max) {
    return this.o2q(Companion_instance_11.t2q(min, max));
  };
  protoOf(GridTrackBuilderInRepeat).r2q = function (min, max) {
    return this.q2q(Companion_instance_11.u2q(min), Companion_instance_11.s2q(max));
  };
  function FitContent() {
  }
  function MinMax(min, max) {
    TrackSize.call(this, 'minmax(' + min.toString() + ', ' + max.toString() + ')');
    this.w2q_1 = min;
    this.x2q_1 = max;
  }
  function Flex(value) {
    TrackSize.call(this, toString(value));
  }
  function Inflexible(value) {
    TrackSize.call(this, value);
  }
  function Keyword() {
  }
  function Fixed(value) {
    Inflexible.call(this, toString(value));
  }
  function Companion_10() {
  }
  protoOf(Companion_10).u2q = function (value) {
    return new Fixed(value);
  };
  protoOf(Companion_10).s2q = function (value) {
    return new Flex(value);
  };
  protoOf(Companion_10).t2q = function (min, max) {
    return new MinMax(min, max);
  };
  var Companion_instance_11;
  function Companion_getInstance_11() {
    return Companion_instance_11;
  }
  function Track(count, entries) {
    Repeat.call(this, count, entries);
  }
  function Auto() {
  }
  function TrackSize(value) {
    GridEntry.call(this, value);
  }
  function Repeat(value, entries) {
    GridEntry.call(this, 'repeat(' + toString(value) + ', ' + toTrackListString(entries) + ')');
    this.z2q_1 = entries;
  }
  function LineNames(names) {
    GridEntry.call(this, joinToString_0(names, ' ', '[', ']'));
    this.b2r_1 = names;
  }
  function Companion_11() {
  }
  protoOf(Companion_11).n2q = function (count, entries) {
    return new Track(count, entries.slice());
  };
  var Companion_instance_12;
  function Companion_getInstance_12() {
    return Companion_instance_12;
  }
  function GridEntry(value) {
    this.c2r_1 = value;
  }
  protoOf(GridEntry).toString = function () {
    return this.c2r_1;
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
        var tmp0 = prev.b2r_1;
        // Inline function 'kotlin.collections.plus' call
        var elements = element.b2r_1;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$2 = tmp0.concat(elements);
        acc.z1(tmp_0, new LineNames(tmp$ret$2.slice()));
      } else {
        acc.e(element);
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
            var tmp0 = element.z2q_1;
            // Inline function 'kotlin.collections.filterIsInstanceTo' call
            var destination_0 = ArrayList_init_$Create$();
            var inductionVariable_0 = 0;
            var last_0 = tmp0.length;
            while (inductionVariable_0 < last_0) {
              var element_0 = tmp0[inductionVariable_0];
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              if (element_0 instanceof TrackSize) {
                destination_0.e(element_0);
              }
            }
            // Inline function 'kotlin.also' call
            // Inline function 'kotlin.collections.isNotEmpty' call
            // Inline function 'kotlin.require' call
            if (!!destination_0.r()) {
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
    if (!!trackSizes.r()) {
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
      return Unit_instance;
    // Inline function 'kotlin.require' call
    if (!(autoRepeatCount === 1)) {
      var message_1 = 'Only one auto-repeat call is allowed per track list';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = trackSizes.g();
    while (_iterator__ex2g4s.h()) {
      var element_2 = _iterator__ex2g4s.i();
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
                var tmp_3 = element_2.w2q_1;
                if (!(tmp_3 instanceof Fixed)) {
                  var tmp_4 = element_2.x2q_1;
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
    gridTemplateColumns(_this__u8e3s4, toTrackListString_0(this_0.m2q_1));
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
    this_0.g2r(_this__u8e3s4);
  }
  function GridBuilder() {
    GridBuilderInAuto.call(this);
  }
  function GridBuilderInAuto() {
    this.d2r_1 = null;
    this.e2r_1 = null;
    this.f2r_1 = null;
  }
  protoOf(GridBuilderInAuto).h2r = function (block) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    block(this_0);
    tmp.d2r_1 = this_0.m2q_1;
  };
  protoOf(GridBuilderInAuto).i2r = function (block) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    block(this_0);
    tmp.e2r_1 = this_0.m2q_1;
  };
  protoOf(GridBuilderInAuto).g2r = function (scope) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Grid' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display(scope, 'grid');
    var tmp0_safe_receiver = this.d2r_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      gridTemplateColumns(scope, toTrackListString_0(tmp0_safe_receiver));
    }
    var tmp1_safe_receiver = this.e2r_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      gridTemplateRows(scope, toTrackListString_0(tmp1_safe_receiver));
    }
    var tmp2_safe_receiver = this.f2r_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp0_safe_receiver_0 = tmp2_safe_receiver.d2r_1;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        gridAutoColumns(scope, toTrackListString_0(tmp0_safe_receiver_0));
      }
      var tmp1_safe_receiver_0 = tmp2_safe_receiver.e2r_1;
      var tmp;
      if (tmp1_safe_receiver_0 == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        gridAutoRows(scope, toTrackListString_0(tmp1_safe_receiver_0));
        tmp = Unit_instance;
      }
    }
  };
  var com_varabyte_kobweb_compose_css_CSSLayerRuleDeclaration$stable;
  function layer(_this__u8e3s4, name, rulesBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = StyleSheet_init_$Create$();
    rulesBuild(this_0);
    var rules = this_0.n2m();
    _this__u8e3s4.m2l(new CSSLayerRuleDeclaration(name, rules));
  }
  function CSSLayerRuleDeclaration(name, rules) {
    this.j2r_1 = name;
    this.k2r_1 = rules;
  }
  protoOf(CSSLayerRuleDeclaration).p2l = function () {
    return this.k2r_1;
  };
  protoOf(CSSLayerRuleDeclaration).f2l = function () {
    return '@layer ' + this.j2r_1;
  };
  protoOf(CSSLayerRuleDeclaration).equals = function (other) {
    var tmp;
    if (other instanceof CSSLayerRuleDeclaration) {
      tmp = (this.j2r_1 === other.j2r_1 && equals(this.k2r_1, other.k2r_1));
    } else {
      tmp = false;
    }
    return tmp;
  };
  function Companion_12() {
  }
  protoOf(Companion_12).l2r = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'middle';
  };
  var Companion_instance_13;
  function Companion_getInstance_13() {
    return Companion_instance_13;
  }
  function marginBlock(_this__u8e3s4, both) {
    _this__u8e3s4.x2l('margin-block', both);
  }
  function marginBlockStart(_this__u8e3s4, value) {
    _this__u8e3s4.x2l('margin-block-start', value);
  }
  function marginBlockEnd(_this__u8e3s4, value) {
    _this__u8e3s4.x2l('margin-block-end', value);
  }
  function verticalAlign(_this__u8e3s4, verticalAlign) {
    _this__u8e3s4.x2l('vertical-align', verticalAlign);
  }
  function paddingInline(_this__u8e3s4, start, end) {
    start = start === VOID ? get_px(0) : start;
    end = end === VOID ? get_px(0) : end;
    _this__u8e3s4.t2l('padding-inline', toString(start) + ' ' + toString(end));
  }
  function zIndex(_this__u8e3s4, value) {
    _this__u8e3s4.u2l('z-index', value);
  }
  function Companion_13() {
  }
  protoOf(Companion_13).g2q = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'none';
  };
  var Companion_instance_14;
  function Companion_getInstance_14() {
    return Companion_instance_14;
  }
  function listStyle(_this__u8e3s4, listStyle) {
    _this__u8e3s4.x2l('list-style', listStyle);
  }
  function ListStyle$Companion$of$lambda(it) {
    return toString(it);
  }
  function Companion_14() {
  }
  protoOf(Companion_14).m2r = function (type, position, image) {
    var tmp = listOfNotNull([type, position, image]);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return joinToString(tmp, ' ', VOID, VOID, VOID, VOID, ListStyle$Companion$of$lambda);
  };
  var Companion_instance_15;
  function Companion_getInstance_15() {
    return Companion_instance_15;
  }
  var com_varabyte_kobweb_compose_css_CSSMargin$stable;
  function Companion_15() {
  }
  protoOf(Companion_15).n2r = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'cover';
  };
  protoOf(Companion_15).o2r = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'scale-down';
  };
  var Companion_instance_16;
  function Companion_getInstance_16() {
    return Companion_instance_16;
  }
  function objectFit(_this__u8e3s4, objectFit) {
    _this__u8e3s4.x2l('object-fit', objectFit);
  }
  var com_varabyte_kobweb_compose_css_CSSOutline$stable;
  function outline(_this__u8e3s4, outline) {
    _this__u8e3s4.x2l('outline', outline);
  }
  function Companion_16() {
  }
  protoOf(Companion_16).p2r = function (outlineWidth, outlineStyle, outlineColor) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return joinToString(listOfNotNull([outlineWidth, outlineStyle, outlineColor]), ' ');
  };
  var Companion_instance_17;
  function Companion_getInstance_17() {
    return Companion_instance_17;
  }
  function Companion_17() {
  }
  protoOf(Companion_17).q2r = function (value) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toString(value);
  };
  var Companion_instance_18;
  function Companion_getInstance_18() {
    return Companion_instance_18;
  }
  function Companion_18() {
  }
  var Companion_instance_19;
  function Companion_getInstance_19() {
    return Companion_instance_19;
  }
  function CssOverflowModeValues() {
  }
  function overflowY(_this__u8e3s4, overflowY) {
    _this__u8e3s4.x2l('overflow-y', overflowY);
  }
  function overflow(_this__u8e3s4, overflow) {
    _this__u8e3s4.x2l('overflow', overflow);
  }
  var com_varabyte_kobweb_compose_css_CSSScopeRuleDeclaration$stable;
  function scope(_this__u8e3s4, start, end, rulesBuild) {
    start = start === VOID ? null : start;
    end = end === VOID ? null : end;
    // Inline function 'kotlin.apply' call
    var this_0 = StyleSheet_init_$Create$();
    rulesBuild(this_0);
    var rules = this_0.n2m();
    _this__u8e3s4.m2l(new CSSScopeRuleDeclaration(start, end, rules));
  }
  function CSSScopeRuleDeclaration(start, end, rules) {
    this.u2r_1 = start;
    this.v2r_1 = end;
    this.w2r_1 = rules;
  }
  protoOf(CSSScopeRuleDeclaration).p2l = function () {
    return this.w2r_1;
  };
  protoOf(CSSScopeRuleDeclaration).f2l = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.c8('@scope');
    if (!(this.u2r_1 == null)) {
      this_0.c8(' (' + this.u2r_1 + ')');
    }
    if (!(this.v2r_1 == null)) {
      this_0.c8(' to (' + this.v2r_1 + ')');
    }
    return this_0.toString();
  };
  protoOf(CSSScopeRuleDeclaration).equals = function (other) {
    var tmp;
    if (other instanceof CSSScopeRuleDeclaration) {
      tmp = (this.u2r_1 == other.u2r_1 && this.v2r_1 == other.v2r_1 && equals(this.w2r_1, other.w2r_1));
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
  function PropertyValue(name, defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    StyleVariable.call(this, name, defaultFallback, prefix);
  }
  protoOf(PropertyValue).z2r = function (fallback) {
    return this.c2s(fallback);
  };
  protoOf(PropertyValue).d2s = function (fallback) {
    return this.z2r((fallback == null ? true : !(fallback == null)) ? fallback : THROW_CCE());
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
    StyleVariable.call(this, name, tmp, prefix);
  }
  protoOf(NumberValue).h2s = function (fallback) {
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
    return this.c2s(tmp);
  };
  protoOf(NumberValue).d2s = function (fallback) {
    return this.h2s((fallback == null ? true : isNumber(fallback)) ? fallback : THROW_CCE());
  };
  function StyleVariable(name, defaultFallback, prefix) {
    this.a2s_1 = defaultFallback;
    var tmp = this;
    var tmp_0;
    if (prefix == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_0 = prefix + '-' + name;
    }
    var tmp1_elvis_lhs = tmp_0;
    tmp.b2s_1 = tmp1_elvis_lhs == null ? name : tmp1_elvis_lhs;
  }
  protoOf(StyleVariable).e2s = function (fallback, $super) {
    fallback = fallback === VOID ? null : fallback;
    return $super === VOID ? this.d2s(fallback) : $super.d2s.call(this, fallback);
  };
  protoOf(StyleVariable).c2s = function (fallback) {
    var tmp1_safe_receiver = fallback == null ? this.a2s_1 : fallback;
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
    return 'var(--' + this.b2s_1 + (tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs) + ')';
  };
  function StyleVariablePropertyProvider(defaultFallback, prefix) {
    this.i2s_1 = defaultFallback;
    this.j2s_1 = prefix;
  }
  protoOf(StyleVariablePropertyProvider).k2s = function (thisRef, property) {
    return new PropertyValue(provideVariableName(thisRef, property), this.i2s_1, this.j2s_1);
  };
  function StyleVariable_0(prefix) {
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariablePropertyProvider(null, prefix);
  }
  function StyleVariable_1(defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariablePropertyProvider(defaultFallback, prefix);
  }
  function StyleVariable_2(defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariablePropertyProvider(defaultFallback, prefix);
  }
  function StyleVariableNumberProvider(defaultFallback, prefix) {
    this.l2s_1 = defaultFallback;
    this.m2s_1 = prefix;
  }
  protoOf(StyleVariableNumberProvider).k2s = function (thisRef, property) {
    return new NumberValue(provideVariableName(thisRef, property), this.l2s_1, this.m2s_1);
  };
  function StyleVariable_3(defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariableNumberProvider(defaultFallback, prefix);
  }
  function provideVariableName(groupObject, property) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    if (!(groupObject == null)) {
      this_0.c8(removeSuffix(removeSuffix(titleCamelCaseToKebabCase(ensureNotNull(getKClassFromExpression(groupObject).ja())), '-vars'), '-variables'));
      this_0.d8(_Char___init__impl__6a9atx(45));
    }
    this_0.c8(removeSuffix(removeSuffix(titleCamelCaseToKebabCase(property.callableName), '-var'), '-variable'));
    return this_0.toString();
  }
  function setVariable(_this__u8e3s4, variable, value) {
    _this__u8e3s4.x2l('--' + variable.b2s_1, value);
  }
  function setVariable_0(_this__u8e3s4, variable, value) {
    _this__u8e3s4.u2l('--' + variable.b2s_1, value);
  }
  var com_varabyte_kobweb_compose_css_CSSTextShadow$stable;
  function Companion_19() {
  }
  protoOf(Companion_19).g2q = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'none';
  };
  var Companion_instance_20;
  function Companion_getInstance_20() {
    return Companion_instance_20;
  }
  function Companion_20() {
  }
  protoOf(Companion_20).r2p = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'center';
  };
  protoOf(Companion_20).s2p = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'start';
  };
  var Companion_instance_21;
  function Companion_getInstance_21() {
    return Companion_instance_21;
  }
  function Companion_21() {
  }
  protoOf(Companion_21).n2s = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'nowrap';
  };
  protoOf(Companion_21).o2s = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'pre-wrap';
  };
  var Companion_instance_22;
  function Companion_getInstance_22() {
    return Companion_instance_22;
  }
  function Companion_22() {
  }
  protoOf(Companion_22).p2s = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'underline';
  };
  protoOf(Companion_22).g2q = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'none';
  };
  var Companion_instance_23;
  function Companion_getInstance_23() {
    return Companion_instance_23;
  }
  function userSelect(_this__u8e3s4, userSelect) {
    _this__u8e3s4.x2l('user-select', userSelect);
  }
  function textAlign(_this__u8e3s4, textAlign) {
    _this__u8e3s4.x2l('text-align', textAlign);
  }
  function whiteSpace(_this__u8e3s4, whiteSpace) {
    _this__u8e3s4.x2l('white-space', whiteSpace);
  }
  function textDecorationLine(_this__u8e3s4, textDecorationLines) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(textDecorationLines.length === 0)) {
      _this__u8e3s4.t2l('text-decoration-line', joinToString_0(textDecorationLines, ' '));
    }
  }
  function translateX(_this__u8e3s4, tx) {
    translate(_this__u8e3s4, tx);
  }
  function rotate(_this__u8e3s4, a) {
    _this__u8e3s4.x2l('rotate', a);
  }
  function translate(_this__u8e3s4, tx) {
    _this__u8e3s4.x2l('translate', tx);
  }
  function Companion_23() {
  }
  protoOf(Companion_23).q2s = function (property, duration, timingFunction, delay, behavior) {
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$();
    this_0.e(toString(property));
    if (duration == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this_0.e(toString(duration));
    }
    if (timingFunction == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this_0.e(toString(timingFunction));
    }
    if (!(delay == null)) {
      if (duration == null) {
        this_0.e('0s');
      }
      this_0.e(toString(delay));
    }
    if (behavior == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this_0.e(toString(behavior));
    }
    var tmp$ret$9 = this_0.i5();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return joinToString(tmp$ret$9, ' ');
  };
  protoOf(Companion_23).r2s = function (property, duration, timingFunction, delay, behavior) {
    return this.q2s(Companion_instance_25.s2s(property), duration, timingFunction, delay, behavior);
  };
  protoOf(Companion_23).t2s = function (property, duration, timingFunction, delay, behavior, $super) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    behavior = behavior === VOID ? null : behavior;
    return $super === VOID ? this.r2s(property, duration, timingFunction, delay, behavior) : $super.r2s.call(this, property, duration, timingFunction, delay, behavior);
  };
  protoOf(Companion_23).u2s = function (transitions) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return joinToString_0(transitions);
  };
  protoOf(Companion_23).v2s = function (duration, timingFunction, delay, behavior) {
    return this.q2s(Companion_instance_25.w2s(), duration, timingFunction, delay, behavior);
  };
  protoOf(Companion_23).x2s = function (duration, timingFunction, delay, behavior, $super) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    behavior = behavior === VOID ? null : behavior;
    return $super === VOID ? this.v2s(duration, timingFunction, delay, behavior) : $super.v2s.call(this, duration, timingFunction, delay, behavior);
  };
  protoOf(Companion_23).y2s = function (properties, duration, timingFunction, delay, behavior) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(properties, 10));
    var _iterator__ex2g4s = properties.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      var tmp$ret$0 = Companion_instance_24.r2s(item, duration, timingFunction, delay, behavior);
      destination.e(tmp$ret$0);
    }
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return joinToString(destination);
  };
  protoOf(Companion_23).z2s = function (properties, duration, timingFunction, delay, behavior, $super) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    behavior = behavior === VOID ? null : behavior;
    return $super === VOID ? this.y2s(properties, duration, timingFunction, delay, behavior) : $super.y2s.call(this, properties, duration, timingFunction, delay, behavior);
  };
  var Companion_instance_24;
  function Companion_getInstance_24() {
    return Companion_instance_24;
  }
  function Companion_24() {
  }
  protoOf(Companion_24).s2s = function (customValue) {
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
  protoOf(Companion_24).w2s = function () {
    return this.s2s('all');
  };
  var Companion_instance_25;
  function Companion_getInstance_25() {
    return Companion_instance_25;
  }
  function transition(_this__u8e3s4, transition) {
    _this__u8e3s4.x2l('transition', transition);
  }
  function transitionProperty(_this__u8e3s4, properties) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(properties.length === 0)) {
      _this__u8e3s4.t2l('transition-property', joinToString_0(properties));
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
      var tmp$ret$0 = Companion_instance_25.s2s(item);
      destination.e(tmp$ret$0);
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$3 = copyToArray(destination);
    transitionProperty(_this__u8e3s4, tmp$ret$3.slice());
  }
  function transitionDuration(_this__u8e3s4, durations) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(durations.length === 0)) {
      _this__u8e3s4.t2l('transition-duration', joinToString_0(durations));
    }
  }
  function transitionTimingFunction(_this__u8e3s4, timingFunctions) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(timingFunctions.length === 0)) {
      _this__u8e3s4.t2l('transition-timing-function', joinToString_0(timingFunctions, VOID, VOID, VOID, VOID, VOID, transitionTimingFunction$lambda));
    }
  }
  function transitionTimingFunction$lambda(it) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return it;
  }
  function Companion_25() {
  }
  protoOf(Companion_25).v2p = function (gradient) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return gradient.toString();
  };
  var Companion_instance_26;
  function Companion_getInstance_26() {
    return Companion_instance_26;
  }
  var com_varabyte_kobweb_compose_css_functions_CalcScope_CalcNum$stable;
  function calc(action) {
    // Inline function 'kotlin.with' call
    return action(CalcScopeInstance_instance);
  }
  function CalcScope() {
  }
  function CalcScopeInstance() {
  }
  var CalcScopeInstance_instance;
  function CalcScopeInstance_getInstance() {
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
  var Direction_entriesInitialized;
  function Direction_initEntries() {
    if (Direction_entriesInitialized)
      return Unit_instance;
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
  function Direction(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(Direction).toString = function () {
    var tmp;
    switch (this.p2_1) {
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
    this_0.c8(joinToString(listOfNotNull([dir, interpolation]), ' '));
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(this_0) > 0) {
      this_0.c8(', ');
    }
    this_0.c8(joinToString_0(entries));
    var tmp$ret$3 = this_0.toString();
    LinearGradient.call(this, tmp$ret$3);
  }
  function ByDirection(dir, interpolation, entries) {
    Base.call(this, dir, interpolation, entries.slice());
  }
  function Direction_ToRight_getInstance() {
    Direction_initEntries();
    return Direction_ToRight_instance;
  }
  function LinearGradient(gradientStr) {
    this.b2t_1 = gradientStr;
  }
  protoOf(LinearGradient).toString = function () {
    return 'linear-gradient(' + this.b2t_1 + ')';
  };
  function linearGradient(from, to, dir, interpolation) {
    interpolation = interpolation === VOID ? null : interpolation;
    return linearGradient_0(dir, interpolation, linearGradient$lambda(from, to));
  }
  function Simple(value) {
    Color_0.call(this, toString(value));
  }
  function Color_0(value) {
    Entry.call(this, value);
    this.d2t_1 = value;
  }
  function Hint() {
  }
  function Entry(entryStr) {
    this.e2t_1 = entryStr;
  }
  protoOf(Entry).toString = function () {
    return this.e2t_1;
  };
  function ColorStopsBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.f2t_1 = ArrayList_init_$Create$();
  }
  protoOf(ColorStopsBuilder).g2t = function () {
    var tmp0 = this.f2t_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.collections.count' call
      var tmp;
      if (isInterface(tmp0, Collection)) {
        tmp = tmp0.r();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      var count = 0;
      var _iterator__ex2g4s = tmp0.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
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
    var _iterator__ex2g4s_0 = this.f2t_1.g();
    while (_iterator__ex2g4s_0.h()) {
      var item = _iterator__ex2g4s_0.i();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      var i = checkIndexOverflow(_unary__edvuaz);
      if (item instanceof Hint) {
        var tmp_0;
        var tmp_1 = getOrNull(this.f2t_1, i - 1 | 0);
        if (tmp_1 instanceof Color_0) {
          var tmp_2 = getOrNull(this.f2t_1, i + 1 | 0);
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
    var this_0 = this.f2t_1;
    return copyToArray(this_0);
  };
  protoOf(ColorStopsBuilder).h2t = function (color) {
    return this.f2t_1.e(new Simple(color));
  };
  function linearGradient_0(dir, interpolation, init) {
    interpolation = interpolation === VOID ? null : interpolation;
    // Inline function 'kotlin.apply' call
    var this_0 = new ColorStopsBuilder();
    init(this_0);
    // Inline function 'kotlin.let' call
    return new ByDirection(dir, interpolation, this_0.g2t().slice());
  }
  function linearGradient$lambda($from, $to) {
    return function ($this$linearGradient) {
      $this$linearGradient.h2t($from);
      $this$linearGradient.h2t($to);
      return Unit_instance;
    };
  }
  var com_varabyte_kobweb_compose_css_functions_CSSClamp$stable;
  var com_varabyte_kobweb_compose_css_functions_CSSMin$stable;
  var com_varabyte_kobweb_compose_css_functions_CSSMax$stable;
  var com_varabyte_kobweb_compose_css_functions_CSSUrl$stable;
  var com_varabyte_kobweb_compose_dom_ElementRefScope_RefCallback_Simple$stable;
  var com_varabyte_kobweb_compose_dom_ElementRefScope_RefCallback_Disposable$stable;
  var com_varabyte_kobweb_compose_dom_ElementRefScope_RefCallback$stable;
  var com_varabyte_kobweb_compose_dom_ElementRefScope_KeysToEffect$stable;
  var com_varabyte_kobweb_compose_dom_ElementRefScope_Builder$stable;
  var com_varabyte_kobweb_compose_dom_ElementRefScope$stable;
  function registerRefScope(_this__u8e3s4, scope, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.y1h();
    var tmp;
    if (false || it === Companion_getInstance().f1a_1) {
      var value = registerRefScope$lambda;
      $composer_0.j1i(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    registerRefScope_0(_this__u8e3s4, scope, tmp$ret$3, $composer_0, 384 | 14 & $changed | 112 & $changed);
  }
  function com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter() {
    return com_varabyte_kobweb_compose_dom_ElementRefScope$stable;
  }
  function registerRefScope_0(_this__u8e3s4, scope, transform, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.p1g(1100234072);
    if (scope == null) {
      $composer_0.r1g();
      return Unit_instance;
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = scope.i2t_1.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'kotlin.collections.toTypedArray' call
      var this_0 = element.j2t_1;
      var tmp = copyToArray(this_0).slice();
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!($composer_0.m1h(element) | (($changed & 896 ^ 384) > 256 && $composer_0.z16(transform) || ($changed & 384) === 256)) | $composer_0.m1h(_this__u8e3s4));
      // Inline function 'kotlin.let' call
      var it = $composer_0.y1h();
      var tmp_0;
      if (invalid || it === Companion_getInstance().f1a_1) {
        var value = registerRefScope$lambda_0(element, transform, _this__u8e3s4);
        $composer_0.j1i(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp$ret$4 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      DisposableEffect(tmp, tmp$ret$4, $composer_0, 0);
    }
    $composer_0.r1g();
  }
  function registerRefScope$lambda(it) {
    return it;
  }
  function registerRefScope$lambda_0($keyedCallback, $transform, $this_registerRefScope) {
    return function ($this$DisposableEffect) {
      return $keyedCallback.k2t_1.l2t($this$DisposableEffect, $transform($this_registerRefScope.n2n($this$DisposableEffect)));
    };
  }
  var com_varabyte_kobweb_compose_dom_GenericElementBuilder$stable;
  var com_varabyte_kobweb_compose_dom_GenericNamespacedElementBuilder$stable;
  function GenericTag(name, namespace, attrs, content, $composer, $changed, $default) {
    var namespace_0 = {_v: namespace};
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.y1i(1162580906);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.z16(name) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.z16(namespace_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.m1h(attrs_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.m1h(content_0._v) ? 2048 : 1024);
    if ($composer_0.r1i(!(($dirty & 1171) === 1170), $dirty & 1)) {
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
        tmp = Companion_getInstance_27().n2t(tmp0_safe_receiver, name);
      }
      var tmp1_elvis_lhs = tmp;
      var tmp_0 = tmp1_elvis_lhs == null ? Companion_getInstance_28().p2t(name) : tmp1_elvis_lhs;
      TagElement(isInterface(tmp_0, ElementBuilder) ? tmp_0 : THROW_CCE(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty >> 3 | 896 & $dirty >> 3);
    } else {
      $composer_0.w19();
    }
    var tmp0_safe_receiver_0 = $composer_0.z1i();
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      tmp0_safe_receiver_0.d1o(GenericTag$lambda(name, namespace_0, attrs_0, content_0, $changed, $default));
    }
  }
  function Companion_26() {
    Companion_instance_27 = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.m2t_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(Companion_26).n2t = function (namespace, qualifiedName) {
    var tmp0 = this.m2t_1;
    // Inline function 'kotlin.collections.getOrPut' call
    var key = to(namespace, qualifiedName);
    var value = tmp0.h2(key);
    var tmp;
    if (value == null) {
      var answer = new GenericNamespacedElementBuilder(namespace, qualifiedName);
      tmp0.l2(key, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    return tmp;
  };
  var Companion_instance_27;
  function Companion_getInstance_27() {
    if (Companion_instance_27 == null)
      new Companion_26();
    return Companion_instance_27;
  }
  function _get_element__z0t21h($this) {
    var tmp0 = $this.s2t_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('element', 1, tmp, GenericNamespacedElementBuilder$_get_element_$ref_eof03j(), null);
    return tmp0.e2();
  }
  function GenericNamespacedElementBuilder$element$delegate$lambda(this$0) {
    return function () {
      return document.createElementNS(this$0.q2t_1, this$0.r2t_1);
    };
  }
  function GenericNamespacedElementBuilder$_get_element_$ref_eof03j() {
    return function (p0) {
      return _get_element__z0t21h(p0);
    };
  }
  function GenericNamespacedElementBuilder(namespace, qualifiedName) {
    Companion_getInstance_27();
    this.q2t_1 = namespace;
    this.r2t_1 = qualifiedName;
    var tmp = this;
    tmp.s2t_1 = lazy(GenericNamespacedElementBuilder$element$delegate$lambda(this));
  }
  protoOf(GenericNamespacedElementBuilder).x1x = function () {
    var tmp = _get_element__z0t21h(this).cloneNode();
    return tmp instanceof Element ? tmp : THROW_CCE();
  };
  function Companion_27() {
    Companion_instance_28 = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.o2t_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(Companion_27).p2t = function (name) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.o2t_1;
    var value = this_0.h2(name);
    var tmp;
    if (value == null) {
      var answer = new GenericElementBuilder(name);
      this_0.l2(name, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    return tmp;
  };
  var Companion_instance_28;
  function Companion_getInstance_28() {
    if (Companion_instance_28 == null)
      new Companion_27();
    return Companion_instance_28;
  }
  function _get_element__z0t21h_0($this) {
    var tmp0 = $this.u2t_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('element', 1, tmp, GenericElementBuilder$_get_element_$ref_4jw5ti(), null);
    return tmp0.e2();
  }
  function GenericElementBuilder$element$delegate$lambda(this$0) {
    return function () {
      return document.createElement(this$0.t2t_1);
    };
  }
  function GenericElementBuilder$_get_element_$ref_4jw5ti() {
    return function (p0) {
      return _get_element__z0t21h_0(p0);
    };
  }
  function GenericElementBuilder(name) {
    Companion_getInstance_28();
    this.t2t_1 = name;
    var tmp = this;
    tmp.u2t_1 = lazy(GenericElementBuilder$element$delegate$lambda(this));
  }
  protoOf(GenericElementBuilder).x1x = function () {
    var tmp = _get_element__z0t21h_0(this).cloneNode();
    return tmp instanceof Element ? tmp : THROW_CCE();
  };
  function GenericTag_0(name, attrsStr, content, $composer, $changed, $default) {
    var attrsStr_0 = {_v: attrsStr};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.y1i(-1150610595);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.z16(name) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.z16(attrsStr_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.m1h(content_0._v) ? 256 : 128);
    if ($composer_0.r1i(!(($dirty & 147) === 146), $dirty & 1)) {
      if (!(($default & 2) === 0)) {
        attrsStr_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        content_0._v = null;
      }
      var tmp;
      if (attrsStr_0._v == null) {
        $composer_0.p1g(293997423);
        $composer_0.r1g();
        tmp = null;
      } else {
        $composer_0.p1g(293997424);
        // Inline function 'kotlin.let' call
        var tmp0 = $composer_0;
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = ($dirty & 112) === 32;
        // Inline function 'kotlin.let' call
        var it = tmp0.y1h();
        var tmp_0;
        if (invalid || it === Companion_getInstance().f1a_1) {
          var value = GenericTag$lambda_0(attrsStr_0);
          tmp0.j1i(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp1_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.r1g();
        tmp = tmp1_group;
      }
      var attrs = tmp;
      GenericTag(name, null, attrs, content_0._v, $composer_0, 48 | 14 & $dirty | 7168 & $dirty << 3, 0);
    } else {
      $composer_0.w19();
    }
    var tmp2_safe_receiver = $composer_0.z1i();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.d1o(GenericTag$lambda_1(name, attrsStr_0, content_0, $changed, $default));
    }
  }
  function GenericTag$_anonymous_$_anonymous_$_anonymous_$parseAttrAssignment_r3pqj($this_let, attrAssignment) {
    var parts = split(attrAssignment, charArrayOf([_Char___init__impl__6a9atx(61)]), VOID, 2);
    var attr = parts.p(0);
    // Inline function 'kotlin.collections.getOrElse' call
    var tmp;
    if (0 <= 1 ? 1 < parts.j() : false) {
      tmp = parts.p(1);
    } else {
      tmp = '';
    }
    var value = tmp;
    $this_let.f2k(attr, removeSurrounding(value, '"'));
  }
  function GenericTag$lambda($name, $namespace, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      GenericTag($name, $namespace._v, $attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
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
          sb.d8(c);
        } else if (c === _Char___init__impl__6a9atx(32)) {
          if (insideQuotes) {
            sb.d8(c);
          } else {
            GenericTag$_anonymous_$_anonymous_$_anonymous_$parseAttrAssignment_r3pqj($this$let, sb.toString());
            sb.rb();
          }
        } else
          sb.d8(c);
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
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function GenericTag$lambda_1($name, $attrsStr, $content, $$changed, $$default) {
    return function ($composer, $force) {
      GenericTag_0($name, $attrsStr._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
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
  function Companion_28() {
  }
  protoOf(Companion_28).v2t = function (width, height) {
    return new ViewBox(0, 0, width, height);
  };
  protoOf(Companion_28).w2t = function (width, height, $super) {
    height = height === VOID ? width : height;
    return $super === VOID ? this.v2t(width, height) : $super.v2t.call(this, width, height);
  };
  var Companion_instance_29;
  function Companion_getInstance_29() {
    return Companion_instance_29;
  }
  function ViewBox(x, y, width, height) {
    this.x2t_1 = x;
    this.y2t_1 = y;
    this.z2t_1 = width;
    this.a2u_1 = height;
  }
  function SVGSvgAttrsScope$Companion$invoke$lambda($attrs) {
    return function (_this__u8e3s4) {
      if (!($attrs == null))
        $attrs(new SVGSvgAttrsScope(_this__u8e3s4));
      return Unit_instance;
    };
  }
  function Companion_29() {
  }
  protoOf(Companion_29).b2u = function (attrs) {
    return SVGSvgAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_30;
  function Companion_getInstance_30() {
    return Companion_instance_30;
  }
  function SVGSvgAttrsScope(attrs) {
    SVGContainerElementAttrsScope.call(this, attrs);
  }
  function com_varabyte_kobweb_compose_dom_svg_ViewBox$stableprop_getter() {
    return com_varabyte_kobweb_compose_dom_svg_ViewBox$stable;
  }
  function Path(_this__u8e3s4, attrs, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.y1i(275418487);
    var $dirty = $changed;
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.m1h(attrs) ? 32 : 16);
    if ($composer_0.r1i(!(($dirty & 17) === 16), $dirty & 1)) {
      var tmp = Companion_instance_31.i2u(attrs);
      GenericTag('path', 'http://www.w3.org/2000/svg', tmp, null, $composer_0, 54, 8);
    } else {
      $composer_0.w19();
    }
    var tmp0_safe_receiver = $composer_0.z1i();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d1o(Path$lambda(_this__u8e3s4, attrs, $changed));
    }
  }
  function SVGPathAttrsScope$Companion$invoke$lambda($attrs) {
    return function (_this__u8e3s4) {
      $attrs(new SVGPathAttrsScope(_this__u8e3s4));
      return Unit_instance;
    };
  }
  function Companion_30() {
  }
  protoOf(Companion_30).i2u = function (attrs) {
    return SVGPathAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_31;
  function Companion_getInstance_31() {
    return Companion_instance_31;
  }
  function SVGPathAttrsScope(attrs) {
    SVGGraphicalElementAttrsScope.call(this, attrs);
  }
  protoOf(SVGPathAttrsScope).k2u = function (value) {
    this.f2k('d', value);
  };
  var SVGStrokeLineCap_Butt_instance;
  var SVGStrokeLineCap_Round_instance;
  var SVGStrokeLineCap_Square_instance;
  var SVGStrokeLineCap_entriesInitialized;
  function SVGStrokeLineCap_initEntries() {
    if (SVGStrokeLineCap_entriesInitialized)
      return Unit_instance;
    SVGStrokeLineCap_entriesInitialized = true;
    SVGStrokeLineCap_Butt_instance = new SVGStrokeLineCap('Butt', 0);
    SVGStrokeLineCap_Round_instance = new SVGStrokeLineCap('Round', 1);
    SVGStrokeLineCap_Square_instance = new SVGStrokeLineCap('Square', 2);
  }
  function SVGStrokeLineCap(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SVGStrokeLineCap).toString = function () {
    return toSvgValue(this);
  };
  function Circle(_this__u8e3s4, attrs, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.y1i(-2079059220);
    var $dirty = $changed;
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.m1h(attrs) ? 32 : 16);
    if ($composer_0.r1i(!(($dirty & 17) === 16), $dirty & 1)) {
      var tmp = Companion_instance_32.m2u(attrs);
      GenericTag('circle', 'http://www.w3.org/2000/svg', tmp, null, $composer_0, 54, 8);
    } else {
      $composer_0.w19();
    }
    var tmp0_safe_receiver = $composer_0.z1i();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d1o(Circle$lambda(_this__u8e3s4, attrs, $changed));
    }
  }
  function SVGCircleAttrsScope$Companion$invoke$lambda($attrs) {
    return function (_this__u8e3s4) {
      $attrs(new SVGCircleAttrsScope(_this__u8e3s4));
      return Unit_instance;
    };
  }
  function Companion_31() {
  }
  protoOf(Companion_31).m2u = function (attrs) {
    return SVGCircleAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_32;
  function Companion_getInstance_32() {
    return Companion_instance_32;
  }
  function SVGCircleAttrsScope(attrs) {
    SVGGraphicalElementAttrsScope.call(this, attrs);
  }
  protoOf(SVGCircleAttrsScope).o2u = function (value) {
    this.f2k('r', toString(value));
  };
  function Svg(attrs, content, $composer, $changed, $default) {
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.y1i(-1507789010);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.m1h(attrs_0._v) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.m1h(content) ? 32 : 16);
    if ($composer_0.r1i(!(($dirty & 19) === 18), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      GenericTag('svg', 'http://www.w3.org/2000/svg', Companion_instance_30.b2u(attrs_0._v), content, $composer_0, 54 | 7168 & $dirty << 6, 0);
    } else {
      $composer_0.w19();
    }
    var tmp0_safe_receiver = $composer_0.z1i();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d1o(Svg$lambda(attrs_0, content, $changed, $default));
    }
  }
  var SVGFillType_None_instance;
  var SVGFillType_CurrentColor_instance;
  var SVGFillType_entriesInitialized;
  function SVGFillType_initEntries() {
    if (SVGFillType_entriesInitialized)
      return Unit_instance;
    SVGFillType_entriesInitialized = true;
    SVGFillType_None_instance = new SVGFillType('None', 0);
    SVGFillType_CurrentColor_instance = new SVGFillType('CurrentColor', 1);
  }
  function SVGFillType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SVGFillType).toString = function () {
    return toSvgValue(this);
  };
  var SVGStrokeType_None_instance;
  var SVGStrokeType_CurrentColor_instance;
  var SVGStrokeType_entriesInitialized;
  function SVGStrokeType_initEntries() {
    if (SVGStrokeType_entriesInitialized)
      return Unit_instance;
    SVGStrokeType_entriesInitialized = true;
    SVGStrokeType_None_instance = new SVGStrokeType('None', 0);
    SVGStrokeType_CurrentColor_instance = new SVGStrokeType('CurrentColor', 1);
  }
  function SVGStrokeType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SVGStrokeType).toString = function () {
    return toSvgValue(this);
  };
  function SVGContainerElementAttrsScope(attrs) {
    SVGGraphicalElementAttrsScope.call(this, attrs);
  }
  function SvgLengthAttrs() {
  }
  function SvgViewBoxAttrs() {
  }
  function SVGGraphicalElementAttrsScope(attrs) {
    SVGElementAttrsScope.call(this, attrs);
  }
  function toSvgValue(_this__u8e3s4) {
    // Inline function 'kotlin.text.replaceFirstChar' call
    var this_0 = _this__u8e3s4.o2_1;
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(this_0) > 0) {
      // Inline function 'kotlin.text.lowercase' call
      var this_1 = charCodeAt(this_0, 0);
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$4 = toString_0(this_1).toLowerCase();
      tmp = toString(tmp$ret$4) + substring(this_0, 1);
    } else {
      tmp = this_0;
    }
    return tmp;
  }
  function SvgCenterCoordinateAttrs() {
  }
  function SVGElementAttrsScope(attrs) {
    this.c2u_1 = attrs;
  }
  protoOf(SVGElementAttrsScope).g2k = function (builder) {
    this.c2u_1.g2k(builder);
  };
  protoOf(SVGElementAttrsScope).h2k = function (classes) {
    this.c2u_1.h2k(classes);
  };
  protoOf(SVGElementAttrsScope).i2k = function (classes) {
    this.c2u_1.i2k(classes);
  };
  protoOf(SVGElementAttrsScope).j2k = function (value) {
    return this.c2u_1.j2k(value);
  };
  protoOf(SVGElementAttrsScope).q2p = function (effect) {
    this.c2u_1.k2k(effect);
  };
  protoOf(SVGElementAttrsScope).k2k = function (effect) {
    return this.q2p(effect);
  };
  protoOf(SVGElementAttrsScope).f2k = function (attr, value) {
    return this.c2u_1.f2k(attr, value);
  };
  protoOf(SVGElementAttrsScope).l2k = function (listener) {
    this.c2u_1.l2k(listener);
  };
  protoOf(SVGElementAttrsScope).m2k = function (listener) {
    this.c2u_1.m2k(listener);
  };
  function SvgPresentationAttrs() {
  }
  function Path$lambda($this_Path, $attrs, $$changed) {
    return function ($composer, $force) {
      Path($this_Path, $attrs, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Circle$lambda($this_Circle, $attrs, $$changed) {
    return function ($composer, $force) {
      Circle($this_Circle, $attrs, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Svg$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Svg($attrs._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function SVGStrokeLineCap_Round_getInstance() {
    SVGStrokeLineCap_initEntries();
    return SVGStrokeLineCap_Round_instance;
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
  protoOf(ComparableAttrsScope).i2k = classes;
  protoOf(ComparableAttrsScope).j2k = tabIndex;
  protoOf(ComparableAttrsScope).m2k = onClick;
  protoOf(DummyAttrsScope).i2k = classes;
  protoOf(DummyAttrsScope).j2k = tabIndex;
  protoOf(DummyAttrsScope).m2k = onClick;
  protoOf(ComparableStyleScope).t2l = property;
  protoOf(ComparableStyleScope).u2l = property_0;
  protoOf(ComparableStyleScope).y2l = variable;
  protoOf(Companion_18).r2r = get_Visible;
  protoOf(Companion_18).s2r = get_Hidden;
  protoOf(Companion_18).t2r = get_Auto;
  protoOf(CalcScopeInstance).a2t = unaryMinus;
  protoOf(SVGGraphicalElementAttrsScope).d2u = stroke;
  protoOf(SVGGraphicalElementAttrsScope).l2u = strokeLineCap;
  protoOf(SVGGraphicalElementAttrsScope).p2u = strokeMiterLimit;
  protoOf(SVGGraphicalElementAttrsScope).e2u = strokeWidth;
  protoOf(SVGGraphicalElementAttrsScope).f2u = fill;
  protoOf(SVGSvgAttrsScope).g2u = width_0;
  protoOf(SVGSvgAttrsScope).h2u = viewBox;
  protoOf(SVGCircleAttrsScope).q2u = cx;
  protoOf(SVGCircleAttrsScope).r2u = cy;
  //endregion
  //region block: init
  com_varabyte_kobweb_compose_attributes_ComparableAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_attributes_SyntheticEventListener$stable = 0;
  com_varabyte_kobweb_compose_attributes_TransitionEventListener$stable = 0;
  Companion_instance_0 = new Companion();
  Companion_instance_1 = new Companion_0();
  Companion_instance_2 = new Companion_1();
  Companion_instance_3 = new Companion_2();
  Companion_instance_4 = new Companion_3();
  com_varabyte_kobweb_compose_css_BorderImageNumericBuilder$stable = 8;
  com_varabyte_kobweb_compose_css_BorderImageSlice_Builder$stable = 8;
  com_varabyte_kobweb_compose_css_BorderImageWidth_Builder$stable = 8;
  com_varabyte_kobweb_compose_css_BorderImageOutset_Builder$stable = 8;
  Companion_instance_5 = new Companion_4();
  Companion_instance_6 = new Companion_5();
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
  Companion_instance_7 = new Companion_6();
  com_varabyte_kobweb_compose_css_ComparableStyleScope$stable = 8;
  Companion_instance_8 = new Companion_7();
  Companion_instance_9 = new Companion_8();
  Companion_instance_10 = new Companion_9();
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
  Companion_instance_11 = new Companion_10();
  Companion_instance_12 = new Companion_11();
  com_varabyte_kobweb_compose_css_CSSLayerRuleDeclaration$stable = 8;
  Companion_instance_13 = new Companion_12();
  Companion_instance_14 = new Companion_13();
  Companion_instance_15 = new Companion_14();
  com_varabyte_kobweb_compose_css_CSSMargin$stable = 8;
  Companion_instance_16 = new Companion_15();
  com_varabyte_kobweb_compose_css_CSSOutline$stable = 8;
  Companion_instance_17 = new Companion_16();
  Companion_instance_18 = new Companion_17();
  Companion_instance_19 = new Companion_18();
  com_varabyte_kobweb_compose_css_CSSScopeRuleDeclaration$stable = 8;
  com_varabyte_kobweb_compose_css_StyleVariable_PropertyValue$stable = 8;
  com_varabyte_kobweb_compose_css_StyleVariable_NumberValue$stable = 8;
  com_varabyte_kobweb_compose_css_StyleVariable_StringValue$stable = 8;
  com_varabyte_kobweb_compose_css_StyleVariable$stable = 0;
  com_varabyte_kobweb_compose_css_StyleVariablePropertyProvider$stable = 0;
  com_varabyte_kobweb_compose_css_StyleVariableNumberProvider$stable = 0;
  com_varabyte_kobweb_compose_css_StyleVariableStringProvider$stable = 0;
  com_varabyte_kobweb_compose_css_CSSTextShadow$stable = 8;
  Companion_instance_20 = new Companion_19();
  Companion_instance_21 = new Companion_20();
  Companion_instance_22 = new Companion_21();
  Companion_instance_23 = new Companion_22();
  Companion_instance_24 = new Companion_23();
  Companion_instance_25 = new Companion_24();
  Companion_instance_26 = new Companion_25();
  com_varabyte_kobweb_compose_css_functions_CalcScope_CalcNum$stable = 8;
  CalcScopeInstance_instance = new CalcScopeInstance();
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
  Companion_instance_29 = new Companion_28();
  Companion_instance_30 = new Companion_29();
  Companion_instance_31 = new Companion_30();
  Companion_instance_32 = new Companion_31();
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
  _.$_$.f = StyleVariable_3;
  _.$_$.g = StyleVariable_2;
  _.$_$.h = StyleVariable_0;
  _.$_$.i = StyleVariable_1;
  _.$_$.j = alignItems;
  _.$_$.k = appearance;
  _.$_$.l = ariaDisabled;
  _.$_$.m = ariaHidden;
  _.$_$.n = backgroundImage_1;
  _.$_$.o = background;
  _.$_$.p = borderBottom;
  _.$_$.q = borderColor;
  _.$_$.r = borderColor_0;
  _.$_$.s = borderLeft;
  _.$_$.t = borderStyle;
  _.$_$.u = borderTop;
  _.$_$.v = borderWidth;
  _.$_$.w = boxShadow;
  _.$_$.x = boxSizing_0;
  _.$_$.y = colorScheme;
  _.$_$.z = com_varabyte_kobweb_compose_css_ComparableStyleScope$stableprop_getter;
  _.$_$.a1 = cursor;
  _.$_$.b1 = fontWeight;
  _.$_$.c1 = gridTemplateColumns_0;
  _.$_$.d1 = grid;
  _.$_$.e1 = isNotEmpty;
  _.$_$.f1 = justifyContent;
  _.$_$.g1 = justifyItems;
  _.$_$.h1 = justifySelf;
  _.$_$.i1 = layer;
  _.$_$.j1 = listStyle;
  _.$_$.k1 = marginBlockEnd;
  _.$_$.l1 = marginBlockStart;
  _.$_$.m1 = marginBlock;
  _.$_$.n1 = objectFit;
  _.$_$.o1 = outline;
  _.$_$.p1 = overflowY;
  _.$_$.q1 = overflow;
  _.$_$.r1 = paddingInline;
  _.$_$.s1 = rotate;
  _.$_$.t1 = scope;
  _.$_$.u1 = setVariable;
  _.$_$.v1 = setVariable_0;
  _.$_$.w1 = textAlign;
  _.$_$.x1 = textDecorationLine;
  _.$_$.y1 = transitionDuration;
  _.$_$.z1 = transitionProperty_0;
  _.$_$.a2 = transitionTimingFunction;
  _.$_$.b2 = transition;
  _.$_$.c2 = translateX;
  _.$_$.d2 = userSelect;
  _.$_$.e2 = verticalAlign;
  _.$_$.f2 = whiteSpace;
  _.$_$.g2 = zIndex;
  _.$_$.h2 = Circle;
  _.$_$.i2 = Path;
  _.$_$.j2 = Svg;
  _.$_$.k2 = com_varabyte_kobweb_compose_dom_svg_ViewBox$stableprop_getter;
  _.$_$.l2 = GenericTag_0;
  _.$_$.m2 = com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter;
  _.$_$.n2 = registerRefScope_0;
  _.$_$.o2 = registerRefScope;
  _.$_$.p2 = Direction_ToRight_getInstance;
  _.$_$.q2 = SVGFillType_CurrentColor_getInstance;
  _.$_$.r2 = SVGFillType_None_getInstance;
  _.$_$.s2 = SVGStrokeLineCap_Round_getInstance;
  _.$_$.t2 = SVGStrokeType_CurrentColor_getInstance;
  _.$_$.u2 = SVGStrokeType_None_getInstance;
  _.$_$.v2 = ComparableAttrsScope_init_$Create$;
  _.$_$.w2 = Companion_instance_0;
  _.$_$.x2 = Companion_instance_9;
  _.$_$.y2 = Companion_instance_4;
  _.$_$.z2 = Companion_instance_5;
  _.$_$.a3 = Companion_instance_6;
  _.$_$.b3 = Companion_instance_7;
  _.$_$.c3 = Companion_instance_8;
  _.$_$.d3 = Companion_instance_10;
  _.$_$.e3 = Companion_instance_1;
  _.$_$.f3 = Companion_instance_2;
  _.$_$.g3 = Companion_instance_3;
  _.$_$.h3 = Companion_instance_15;
  _.$_$.i3 = Companion_instance_14;
  _.$_$.j3 = Companion_instance_16;
  _.$_$.k3 = Companion_instance_17;
  _.$_$.l3 = Companion_instance_18;
  _.$_$.m3 = Companion_instance_19;
  _.$_$.n3 = Companion_instance_21;
  _.$_$.o3 = Companion_instance_23;
  _.$_$.p3 = Companion_instance_24;
  _.$_$.q3 = Companion_instance_20;
  _.$_$.r3 = Companion_instance_13;
  _.$_$.s3 = Companion_instance_22;
  _.$_$.t3 = Companion_instance_29;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-compose-html-ext.js.map
