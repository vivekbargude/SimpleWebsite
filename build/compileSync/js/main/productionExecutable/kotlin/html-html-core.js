(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-runtime-runtime.js', './html-internal-html-core-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./html-internal-html-core-runtime.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'html-html-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'html-html-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'html-html-core'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'html-html-core'.");
    }
    if (typeof globalThis['html-internal-html-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'html-html-core'. Its dependency 'html-internal-html-core-runtime' was not found. Please, check whether 'html-internal-html-core-runtime' is loaded prior to 'html-html-core'.");
    }
    globalThis['html-html-core'] = factory(typeof globalThis['html-html-core'] === 'undefined' ? {} : globalThis['html-html-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['html-internal-html-core-runtime']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_internal_html_core_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.c2;
  var protoOf = kotlin_kotlin.$_$.h7;
  var asList = kotlin_kotlin.$_$.z2;
  var initMetadataForInterface = kotlin_kotlin.$_$.u6;
  var VOID = kotlin_kotlin.$_$.e;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.p;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var addAll = kotlin_kotlin.$_$.w2;
  var initMetadataForClass = kotlin_kotlin.$_$.r6;
  var Enum = kotlin_kotlin.$_$.o9;
  var charSequenceLength = kotlin_kotlin.$_$.h6;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.q;
  var ensureNotNull = kotlin_kotlin.$_$.ca;
  var initMetadataForCompanion = kotlin_kotlin.$_$.s6;
  var initMetadataForObject = kotlin_kotlin.$_$.w6;
  var toString = kotlin_kotlin.$_$.j7;
  var hashCode = kotlin_kotlin.$_$.q6;
  var THROW_CCE = kotlin_kotlin.$_$.v9;
  var equals = kotlin_kotlin.$_$.l6;
  var getStringHashCode = kotlin_kotlin.$_$.p6;
  var toString_0 = kotlin_kotlin.$_$.ka;
  var numberToDouble = kotlin_kotlin.$_$.e7;
  var getNumberHashCode = kotlin_kotlin.$_$.n6;
  var defineProp = kotlin_kotlin.$_$.j6;
  var isInterface = kotlin_kotlin.$_$.z6;
  var Collection = kotlin_kotlin.$_$.m2;
  var objectCreate = kotlin_kotlin.$_$.g7;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var listOfNotNull = kotlin_kotlin.$_$.e4;
  var joinToString = kotlin_kotlin.$_$.x3;
  var joinToString_0 = kotlin_kotlin.$_$.y3;
  var contains = kotlin_kotlin.$_$.c8;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var _SkippableUpdater___init__impl__4ft0t9 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var _SkippableUpdater___get_composer__impl__6t7yne = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e1;
  var DisposableEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var DomNodeWrapper = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.b;
  var emptyList = kotlin_kotlin.$_$.n3;
  var copyToArray = kotlin_kotlin.$_$.k3;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.ja;
  var KProperty1 = kotlin_kotlin.$_$.t7;
  var getPropertyCallableRef = kotlin_kotlin.$_$.o6;
  var lazy = kotlin_kotlin.$_$.da;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var DomApplier = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.a;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var rememberComposableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var DisposableEffect_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h;
  //endregion
  //region block: pre-declaration
  function onClick(listener) {
    this.l2k(new MouseEventListener('click', listener));
  }
  initMetadataForInterface(EventsListenerScope, 'EventsListenerScope');
  function classes(classes) {
    return this.h2k(asList(classes));
  }
  function tabIndex(value) {
    return this.f2k('tabindex', value.toString());
  }
  initMetadataForInterface(AttrsScope, 'AttrsScope', VOID, VOID, [EventsListenerScope]);
  initMetadataForClass(AttrsScopeBuilder, 'AttrsScopeBuilder', AttrsScopeBuilder, VOID, [AttrsScope, EventsListenerScope]);
  initMetadataForClass(EventsListenerScopeBuilder, 'EventsListenerScopeBuilder', EventsListenerScopeBuilder, VOID, [EventsListenerScope]);
  initMetadataForClass(ButtonType, 'ButtonType', VOID, Enum);
  initMetadataForClass(SyntheticEventListener, 'SyntheticEventListener');
  initMetadataForClass(MouseEventListener, 'MouseEventListener', VOID, SyntheticEventListener);
  initMetadataForCompanion(Companion);
  initMetadataForCompanion(Companion_0);
  initMetadataForCompanion(Companion_1);
  initMetadataForCompanion(Companion_2);
  initMetadataForCompanion(Companion_3);
  initMetadataForCompanion(Companion_4);
  initMetadataForCompanion(Companion_5);
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(CSSKeyframe, 'CSSKeyframe');
  initMetadataForObject(From, 'From', VOID, CSSKeyframe);
  initMetadataForObject(To, 'To', VOID, CSSKeyframe);
  initMetadataForInterface(CSSStyledRuleDeclaration, 'CSSStyledRuleDeclaration');
  initMetadataForClass(CSSKeyframeRuleDeclaration, 'CSSKeyframeRuleDeclaration', VOID, VOID, [CSSStyledRuleDeclaration]);
  initMetadataForClass(CSSKeyframesRuleDeclaration, 'CSSKeyframesRuleDeclaration');
  initMetadataForClass(Raw, 'Raw');
  initMetadataForClass(MediaFeature, 'MediaFeature');
  initMetadataForInterface(CSSGroupingRuleDeclaration, 'CSSGroupingRuleDeclaration');
  initMetadataForClass(CSSMediaRuleDeclaration, 'CSSMediaRuleDeclaration', VOID, VOID, [CSSGroupingRuleDeclaration]);
  initMetadataForClass(CSSStyleRuleDeclaration, 'CSSStyleRuleDeclaration', VOID, VOID, [CSSStyledRuleDeclaration]);
  function property(propertyName, value) {
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.x2l(propertyName, value);
  }
  function property_0(propertyName, value) {
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.x2l(propertyName, value);
  }
  function variable(variableName, value) {
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.z2l(variableName, value);
  }
  initMetadataForInterface(StyleScope, 'StyleScope');
  initMetadataForInterface(StyleHolder, 'StyleHolder');
  initMetadataForClass(StyleScopeBuilder, 'StyleScopeBuilder', StyleScopeBuilder, VOID, [StyleScope, StyleHolder]);
  initMetadataForClass(CSSRuleBuilderImpl, 'CSSRuleBuilderImpl', CSSRuleBuilderImpl, StyleScopeBuilder, [StyleScope, StyleScopeBuilder]);
  initMetadataForCompanion(Companion_7);
  initMetadataForClass(CSSUnitValueTyped, 'CSSUnitValueTyped');
  initMetadataForObject(Color, 'Color');
  initMetadataForClass(StylePropertyDeclaration, 'StylePropertyDeclaration');
  initMetadataForCompanion(Companion_8);
  function add(selector, style) {
    this.m2l(new CSSStyleRuleDeclaration(selector, style));
  }
  initMetadataForInterface(CSSRulesHolder, 'CSSRulesHolder');
  function returnUniversalSelector() {
    return get_Universal();
  }
  function returnHoverSelector() {
    return this.t2m();
  }
  function get_hover() {
    return new PseudoClassInternal('hover');
  }
  initMetadataForInterface(SelectorsScope, 'SelectorsScope');
  function invoke(_this__u8e3s4, cssRule) {
    this.q2m(new RawSelector(_this__u8e3s4), cssRule);
  }
  function style(_this__u8e3s4, cssRule) {
    this.q2m(new RawSelector(_this__u8e3s4), cssRule);
  }
  initMetadataForInterface(GenericStyleSheetBuilder, 'GenericStyleSheetBuilder', VOID, VOID, [CSSRulesHolder, SelectorsScope]);
  function style_0(selector, cssRule) {
    this.o2m(selector, buildCSSStyleRule(cssRule));
  }
  initMetadataForInterface(StyleSheetBuilder, 'StyleSheetBuilder', VOID, VOID, [CSSRulesHolder, GenericStyleSheetBuilder]);
  initMetadataForClass(StyleSheet, 'StyleSheet', StyleSheet_init_$Create$, VOID, [StyleSheetBuilder, CSSRulesHolder]);
  initMetadataForClass(CSSRulesHolderState, 'CSSRulesHolderState', CSSRulesHolderState, VOID, [CSSRulesHolder]);
  initMetadataForClass(CSSSelector, 'CSSSelector');
  initMetadataForClass(RawSelector, 'RawSelector', VOID, CSSSelector);
  initMetadataForClass(PseudoClassInternal, 'PseudoClassInternal', VOID, CSSSelector);
  initMetadataForClass(CSSBorder, 'CSSBorder', CSSBorder);
  initMetadataForClass(DomElementWrapper, 'DomElementWrapper', VOID, DomNodeWrapper);
  initMetadataForClass(ElementScopeBase, 'ElementScopeBase');
  initMetadataForClass(ElementScopeImpl, 'ElementScopeImpl', ElementScopeImpl, ElementScopeBase);
  initMetadataForInterface(ElementBuilder, 'ElementBuilder');
  initMetadataForClass(ElementBuilderImplementation, 'ElementBuilderImplementation', VOID, VOID, [ElementBuilder]);
  initMetadataForClass(_no_name_provided__qut3iv);
  initMetadataForClass(SyntheticEvent, 'SyntheticEvent');
  initMetadataForClass(SyntheticMouseEvent, 'SyntheticMouseEvent', VOID, SyntheticEvent);
  //endregion
  var setInputValue;
  var setTextAreaDefaultValue;
  var setCheckedValue;
  function type(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.f2k('type', value.e2k_1);
  }
  function alt(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.f2k('alt', value);
  }
  function src(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.f2k('src', value);
  }
  function href(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.f2k('href', value);
  }
  function setInputValue$lambda(e, v) {
    _init_properties_Attrs_kt__w5qjhs();
    if (!(v === e.value)) {
      e.value = v;
    }
    saveControlledInputState(e, v);
    return Unit_instance;
  }
  function setTextAreaDefaultValue$lambda(e, v) {
    _init_properties_Attrs_kt__w5qjhs();
    e.innerText = v;
    return Unit_instance;
  }
  function setCheckedValue$lambda(e, v) {
    _init_properties_Attrs_kt__w5qjhs();
    e.checked = v;
    saveControlledInputState(e, v);
    return Unit_instance;
  }
  var properties_initialized_Attrs_kt_uypsku;
  function _init_properties_Attrs_kt__w5qjhs() {
    if (!properties_initialized_Attrs_kt_uypsku) {
      properties_initialized_Attrs_kt_uypsku = true;
      setInputValue = setInputValue$lambda;
      setTextAreaDefaultValue = setTextAreaDefaultValue$lambda;
      setCheckedValue = setCheckedValue$lambda;
    }
  }
  function AttrsScope() {
  }
  function AttrsScopeBuilder(eventsListenerScopeBuilder) {
    eventsListenerScopeBuilder = eventsListenerScopeBuilder === VOID ? new EventsListenerScopeBuilder() : eventsListenerScopeBuilder;
    this.n2k_1 = eventsListenerScopeBuilder;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.o2k_1 = LinkedHashMap_init_$Create$();
    this.p2k_1 = new StyleScopeBuilder();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.q2k_1 = ArrayList_init_$Create$();
    this.r2k_1 = null;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.s2k_1 = ArrayList_init_$Create$();
  }
  protoOf(AttrsScopeBuilder).h2k = function (classes) {
    this.s2k_1.n(classes);
  };
  protoOf(AttrsScopeBuilder).i2k = function (classes) {
    addAll(this.s2k_1, classes);
  };
  protoOf(AttrsScopeBuilder).g2k = function (builder) {
    // Inline function 'kotlin.apply' call
    builder(this.p2k_1);
  };
  protoOf(AttrsScopeBuilder).k2k = function (effect) {
    this.r2k_1 = effect;
  };
  protoOf(AttrsScopeBuilder).f2k = function (attr, value) {
    // Inline function 'kotlin.collections.set' call
    this.o2k_1.l2(attr, value);
    return this;
  };
  protoOf(AttrsScopeBuilder).t2k = function () {
    return this.o2k_1;
  };
  protoOf(AttrsScopeBuilder).l2k = function (listener) {
    this.n2k_1.l2k(listener);
  };
  protoOf(AttrsScopeBuilder).m2k = function (listener) {
    this.n2k_1.m2k(listener);
  };
  var org_jetbrains_compose_web_attributes_EventsListenerScopeBuilder$stable;
  function EventsListenerScope() {
  }
  function EventsListenerScopeBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.u2k_1 = ArrayList_init_$Create$();
  }
  protoOf(EventsListenerScopeBuilder).l2k = function (listener) {
    this.u2k_1.e(listener);
  };
  protoOf(EventsListenerScopeBuilder).v2k = function () {
    return this.u2k_1;
  };
  var org_jetbrains_compose_web_attributes_InputType_Button$stable;
  var org_jetbrains_compose_web_attributes_InputType_Checkbox$stable;
  var org_jetbrains_compose_web_attributes_InputType_Color$stable;
  var org_jetbrains_compose_web_attributes_InputType_Date$stable;
  var org_jetbrains_compose_web_attributes_InputType_DateTimeLocal$stable;
  var org_jetbrains_compose_web_attributes_InputType_Email$stable;
  var org_jetbrains_compose_web_attributes_InputType_File$stable;
  var org_jetbrains_compose_web_attributes_InputType_Hidden$stable;
  var org_jetbrains_compose_web_attributes_InputType_Month$stable;
  var org_jetbrains_compose_web_attributes_InputType_Number$stable;
  var org_jetbrains_compose_web_attributes_InputType_Password$stable;
  var org_jetbrains_compose_web_attributes_InputType_Radio$stable;
  var org_jetbrains_compose_web_attributes_InputType_Range$stable;
  var org_jetbrains_compose_web_attributes_InputType_Search$stable;
  var org_jetbrains_compose_web_attributes_InputType_Submit$stable;
  var org_jetbrains_compose_web_attributes_InputType_Tel$stable;
  var org_jetbrains_compose_web_attributes_InputType_Text$stable;
  var org_jetbrains_compose_web_attributes_InputType_Time$stable;
  var org_jetbrains_compose_web_attributes_InputType_Url$stable;
  var org_jetbrains_compose_web_attributes_InputType_Week$stable;
  var org_jetbrains_compose_web_attributes_InputType_InputTypeWithStringValue$stable;
  var org_jetbrains_compose_web_attributes_InputType_InputTypeWithUnitValue$stable;
  var org_jetbrains_compose_web_attributes_InputType_InputTypeCheckedValue$stable;
  var org_jetbrains_compose_web_attributes_InputType_InputTypeNumberValue$stable;
  var org_jetbrains_compose_web_attributes_InputType$stable;
  var org_jetbrains_compose_web_attributes_DirType_Ltr$stable;
  var org_jetbrains_compose_web_attributes_DirType_Rtl$stable;
  var org_jetbrains_compose_web_attributes_DirType_Auto$stable;
  var org_jetbrains_compose_web_attributes_DirType$stable;
  var org_jetbrains_compose_web_attributes_ATarget_Blank$stable;
  var org_jetbrains_compose_web_attributes_ATarget_Parent$stable;
  var org_jetbrains_compose_web_attributes_ATarget_Self$stable;
  var org_jetbrains_compose_web_attributes_ATarget_Top$stable;
  var org_jetbrains_compose_web_attributes_ATarget$stable;
  var org_jetbrains_compose_web_attributes_ARel_Alternate$stable;
  var org_jetbrains_compose_web_attributes_ARel_Author$stable;
  var org_jetbrains_compose_web_attributes_ARel_Bookmark$stable;
  var org_jetbrains_compose_web_attributes_ARel_External$stable;
  var org_jetbrains_compose_web_attributes_ARel_Help$stable;
  var org_jetbrains_compose_web_attributes_ARel_License$stable;
  var org_jetbrains_compose_web_attributes_ARel_Next$stable;
  var org_jetbrains_compose_web_attributes_ARel_First$stable;
  var org_jetbrains_compose_web_attributes_ARel_Prev$stable;
  var org_jetbrains_compose_web_attributes_ARel_Last$stable;
  var org_jetbrains_compose_web_attributes_ARel_NoFollow$stable;
  var org_jetbrains_compose_web_attributes_ARel_NoOpener$stable;
  var org_jetbrains_compose_web_attributes_ARel_NoReferrer$stable;
  var org_jetbrains_compose_web_attributes_ARel_Opener$stable;
  var org_jetbrains_compose_web_attributes_ARel_Search$stable;
  var org_jetbrains_compose_web_attributes_ARel_Tag$stable;
  var org_jetbrains_compose_web_attributes_ARel_CustomARel$stable;
  var org_jetbrains_compose_web_attributes_ARel$stable;
  var org_jetbrains_compose_web_attributes_ButtonFormTarget_Blank$stable;
  var org_jetbrains_compose_web_attributes_ButtonFormTarget_Parent$stable;
  var org_jetbrains_compose_web_attributes_ButtonFormTarget_Self$stable;
  var org_jetbrains_compose_web_attributes_ButtonFormTarget_Top$stable;
  var org_jetbrains_compose_web_attributes_ButtonFormTarget$stable;
  var org_jetbrains_compose_web_attributes_FormTarget_Blank$stable;
  var org_jetbrains_compose_web_attributes_FormTarget_Parent$stable;
  var org_jetbrains_compose_web_attributes_FormTarget_Self$stable;
  var org_jetbrains_compose_web_attributes_FormTarget_Top$stable;
  var org_jetbrains_compose_web_attributes_FormTarget$stable;
  var org_jetbrains_compose_web_attributes_InputFormTarget_Blank$stable;
  var org_jetbrains_compose_web_attributes_InputFormTarget_Parent$stable;
  var org_jetbrains_compose_web_attributes_InputFormTarget_Self$stable;
  var org_jetbrains_compose_web_attributes_InputFormTarget_Top$stable;
  var org_jetbrains_compose_web_attributes_InputFormTarget$stable;
  var ButtonType_Button_instance;
  var ButtonType_Reset_instance;
  var ButtonType_Submit_instance;
  var ButtonType_entriesInitialized;
  function ButtonType_initEntries() {
    if (ButtonType_entriesInitialized)
      return Unit_instance;
    ButtonType_entriesInitialized = true;
    ButtonType_Button_instance = new ButtonType('Button', 0, 'button');
    ButtonType_Reset_instance = new ButtonType('Reset', 1, 'reset');
    ButtonType_Submit_instance = new ButtonType('Submit', 2, 'submit');
  }
  function ButtonType(name, ordinal, str) {
    Enum.call(this, name, ordinal);
    this.e2k_1 = str;
  }
  function ButtonType_Button_getInstance() {
    ButtonType_initEntries();
    return ButtonType_Button_instance;
  }
  var org_jetbrains_compose_web_attributes_SyntheticEventListener$stable;
  var org_jetbrains_compose_web_attributes_AnimationEventListener$stable;
  var org_jetbrains_compose_web_attributes_MouseEventListener$stable;
  var org_jetbrains_compose_web_attributes_MouseWheelEventListener$stable;
  var org_jetbrains_compose_web_attributes_KeyboardEventListener$stable;
  var org_jetbrains_compose_web_attributes_FocusEventListener$stable;
  var org_jetbrains_compose_web_attributes_TouchEventListener$stable;
  var org_jetbrains_compose_web_attributes_DragEventListener$stable;
  var org_jetbrains_compose_web_attributes_ClipboardEventListener$stable;
  var org_jetbrains_compose_web_attributes_InputEventListener$stable;
  var org_jetbrains_compose_web_attributes_ChangeEventListener$stable;
  var org_jetbrains_compose_web_attributes_SelectEventListener$stable;
  function SyntheticEventListener(event, listener) {
    this.w2k_1 = event;
    this.x2k_1 = listener;
    this.y2k_1 = this.w2k_1;
  }
  protoOf(SyntheticEventListener).k20 = function () {
    return this.y2k_1;
  };
  protoOf(SyntheticEventListener).ji = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = new SyntheticEvent(event);
    this.x2k_1(tmp$ret$1);
  };
  protoOf(SyntheticEventListener).handleEvent = function (event) {
    return this.ji(event);
  };
  function MouseEventListener(event, listener) {
    SyntheticEventListener.call(this, event, listener);
  }
  protoOf(MouseEventListener).ji = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this.x2k_1(new SyntheticMouseEvent(event));
  };
  protoOf(MouseEventListener).handleEvent = function (event) {
    return this.ji(event);
  };
  var org_jetbrains_compose_web_attributes_builders_InputAttrsScope$stable;
  function get_controlledInputsValuesWeakMap() {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    return controlledInputsValuesWeakMap;
  }
  var controlledInputsValuesWeakMap;
  function get_controlledRadioGroups() {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    return controlledRadioGroups;
  }
  var controlledRadioGroups;
  function saveControlledInputState(element, value) {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    get_controlledInputsValuesWeakMap().set(element, value);
    if (element instanceof HTMLInputElement) {
      updateRadioGroupIfNeeded(element);
    }
  }
  function updateRadioGroupIfNeeded(element) {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    var tmp;
    if (element.type === 'radio') {
      // Inline function 'kotlin.text.isNotEmpty' call
      var this_0 = element.name;
      tmp = charSequenceLength(this_0) > 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      if (!get_controlledRadioGroups().f2(element.name)) {
        var tmp0 = get_controlledRadioGroups();
        var tmp2 = element.name;
        // Inline function 'kotlin.collections.mutableSetOf' call
        // Inline function 'kotlin.collections.set' call
        var value = LinkedHashSet_init_$Create$();
        tmp0.l2(tmp2, value);
      }
      ensureNotNull(get_controlledRadioGroups().h2(element.name)).e(element);
    }
  }
  var properties_initialized_InternalControlledInputUtils_kt_dwq2r0;
  function _init_properties_InternalControlledInputUtils_kt__h0qaxa() {
    if (!properties_initialized_InternalControlledInputUtils_kt_dwq2r0) {
      properties_initialized_InternalControlledInputUtils_kt_dwq2r0 = true;
      // Inline function 'kotlin.js.unsafeCast' call
      controlledInputsValuesWeakMap = new WeakMap();
      // Inline function 'kotlin.collections.mutableMapOf' call
      controlledRadioGroups = LinkedHashMap_init_$Create$();
    }
  }
  var androidx_compose_web_attributes_SelectAttrsScope$stable;
  var org_jetbrains_compose_web_attributes_builders_TextAreaAttrsScope$stable;
  var org_jetbrains_compose_web_css_CSSKeyframesRule$stable;
  var org_jetbrains_compose_web_css_CSSBuilderImpl$stable;
  var org_jetbrains_compose_web_css_GridAutoFlow$stable;
  function Companion() {
  }
  var Companion_instance;
  function Companion_getInstance_0() {
    return Companion_instance;
  }
  function Companion_0() {
  }
  var Companion_instance_0;
  function Companion_getInstance_1() {
    return Companion_instance_0;
  }
  function Companion_1() {
  }
  var Companion_instance_1;
  function Companion_getInstance_2() {
    return Companion_instance_1;
  }
  function Companion_2() {
  }
  var Companion_instance_2;
  function Companion_getInstance_3() {
    return Companion_instance_2;
  }
  function Companion_3() {
  }
  var Companion_instance_3;
  function Companion_getInstance_4() {
    return Companion_instance_3;
  }
  function Companion_4() {
  }
  var Companion_instance_4;
  function Companion_getInstance_5() {
    return Companion_instance_4;
  }
  function Companion_5() {
  }
  var Companion_instance_5;
  function Companion_getInstance_6() {
    return Companion_instance_5;
  }
  function Companion_6() {
  }
  var Companion_instance_6;
  function Companion_getInstance_7() {
    return Companion_instance_6;
  }
  var org_jetbrains_compose_web_css_CSSKeyframesRuleDeclaration$stable;
  var org_jetbrains_compose_web_css_CSSKeyframe_From$stable;
  var org_jetbrains_compose_web_css_CSSKeyframe_To$stable;
  var org_jetbrains_compose_web_css_CSSKeyframe_Percentage$stable;
  var org_jetbrains_compose_web_css_CSSKeyframe_Combine$stable;
  var org_jetbrains_compose_web_css_CSSKeyframe$stable;
  var org_jetbrains_compose_web_css_CSSKeyframeRuleDeclaration$stable;
  var org_jetbrains_compose_web_css_CSSKeyframesBuilder$stable;
  function From() {
    From_instance = this;
    CSSKeyframe.call(this);
  }
  protoOf(From).toString = function () {
    return 'from';
  };
  var From_instance;
  function From_getInstance() {
    if (From_instance == null)
      new From();
    return From_instance;
  }
  function To() {
    To_instance = this;
    CSSKeyframe.call(this);
  }
  protoOf(To).toString = function () {
    return 'to';
  };
  var To_instance;
  function To_getInstance() {
    if (To_instance == null)
      new To();
    return To_instance;
  }
  function CSSKeyframe() {
  }
  function CSSKeyframeRuleDeclaration(keyframe, style) {
    this.c2l_1 = keyframe;
    this.d2l_1 = style;
  }
  protoOf(CSSKeyframeRuleDeclaration).e2l = function () {
    return this.d2l_1;
  };
  protoOf(CSSKeyframeRuleDeclaration).f2l = function () {
    return this.c2l_1.toString();
  };
  protoOf(CSSKeyframeRuleDeclaration).toString = function () {
    return 'CSSKeyframeRuleDeclaration(keyframe=' + this.c2l_1.toString() + ', style=' + toString(this.d2l_1) + ')';
  };
  protoOf(CSSKeyframeRuleDeclaration).hashCode = function () {
    var result = hashCode(this.c2l_1);
    result = imul(result, 31) + hashCode(this.d2l_1) | 0;
    return result;
  };
  protoOf(CSSKeyframeRuleDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSKeyframeRuleDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof CSSKeyframeRuleDeclaration ? other : THROW_CCE();
    if (!equals(this.c2l_1, tmp0_other_with_cast.c2l_1))
      return false;
    if (!equals(this.d2l_1, tmp0_other_with_cast.d2l_1))
      return false;
    return true;
  };
  function CSSKeyframesRuleDeclaration(name, keys) {
    this.g2l_1 = name;
    this.h2l_1 = keys;
  }
  protoOf(CSSKeyframesRuleDeclaration).f2l = function () {
    return '@keyframes ' + this.g2l_1;
  };
  protoOf(CSSKeyframesRuleDeclaration).toString = function () {
    return 'CSSKeyframesRuleDeclaration(name=' + this.g2l_1 + ', keys=' + toString(this.h2l_1) + ')';
  };
  protoOf(CSSKeyframesRuleDeclaration).hashCode = function () {
    var result = getStringHashCode(this.g2l_1);
    result = imul(result, 31) + hashCode(this.h2l_1) | 0;
    return result;
  };
  protoOf(CSSKeyframesRuleDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSKeyframesRuleDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof CSSKeyframesRuleDeclaration ? other : THROW_CCE();
    if (!(this.g2l_1 === tmp0_other_with_cast.g2l_1))
      return false;
    if (!equals(this.h2l_1, tmp0_other_with_cast.h2l_1))
      return false;
    return true;
  };
  var org_jetbrains_compose_web_css_CSSMediaQuery_Raw$stable;
  var org_jetbrains_compose_web_css_CSSMediaQuery_MediaType$stable;
  var org_jetbrains_compose_web_css_CSSMediaQuery_MediaFeature$stable;
  var org_jetbrains_compose_web_css_CSSMediaQuery_NotFeature$stable;
  var org_jetbrains_compose_web_css_CSSMediaQuery_And$stable;
  var org_jetbrains_compose_web_css_CSSMediaQuery_Not$stable;
  var org_jetbrains_compose_web_css_CSSMediaQuery_Combine$stable;
  var org_jetbrains_compose_web_css_CSSMediaQuery_Only$stable;
  var org_jetbrains_compose_web_css_CSSMediaQuery_Or$stable;
  var org_jetbrains_compose_web_css_CSSMediaRuleDeclaration$stable;
  function media(_this__u8e3s4, query, rulesBuild) {
    media_0(_this__u8e3s4, new Raw(query), rulesBuild);
  }
  function Raw(string) {
    this.i2l_1 = string;
  }
  protoOf(Raw).toString = function () {
    return this.i2l_1;
  };
  protoOf(Raw).hashCode = function () {
    return getStringHashCode(this.i2l_1);
  };
  protoOf(Raw).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Raw))
      return false;
    var tmp0_other_with_cast = other instanceof Raw ? other : THROW_CCE();
    if (!(this.i2l_1 === tmp0_other_with_cast.i2l_1))
      return false;
    return true;
  };
  function MediaFeature(name, value) {
    value = value === VOID ? null : value;
    this.j2l_1 = name;
    this.k2l_1 = value;
  }
  protoOf(MediaFeature).equals = function (other) {
    var tmp;
    if (other instanceof MediaFeature) {
      tmp = (this.j2l_1 === other.j2l_1 && toString_0(this.k2l_1) === toString_0(other.k2l_1));
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(MediaFeature).toString = function () {
    var tmp;
    if (this.k2l_1 == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = ': ' + toString_0(this.k2l_1) + ')';
    }
    var tmp1_elvis_lhs = tmp;
    return '(' + this.j2l_1 + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
  };
  function media_0(_this__u8e3s4, query, rulesBuild) {
    var rules = _this__u8e3s4.l2l(rulesBuild);
    _this__u8e3s4.m2l(new CSSMediaRuleDeclaration(query, rules));
  }
  function CSSMediaRuleDeclaration(query, rules) {
    this.n2l_1 = query;
    this.o2l_1 = rules;
  }
  protoOf(CSSMediaRuleDeclaration).p2l = function () {
    return this.o2l_1;
  };
  protoOf(CSSMediaRuleDeclaration).f2l = function () {
    return '@media ' + toString(this.n2l_1);
  };
  protoOf(CSSMediaRuleDeclaration).equals = function (other) {
    var tmp;
    if (other instanceof CSSMediaRuleDeclaration) {
      tmp = (equals(this.o2l_1, other.o2l_1) && equals(this.n2l_1, other.n2l_1));
    } else {
      tmp = false;
    }
    return tmp;
  };
  var org_jetbrains_compose_web_css_CSSCalcValue$stable;
  function unaryMinus(_this__u8e3s4) {
    return new CSSUnitValueTyped(-_this__u8e3s4.value, _this__u8e3s4.unit);
  }
  var org_jetbrains_compose_web_css_CSSRuleBuilderImpl$stable;
  var org_jetbrains_compose_web_css_CSSStyleRuleDeclaration$stable;
  function buildCSSStyleRule(cssRule) {
    var builder = new CSSRuleBuilderImpl();
    cssRule(builder);
    return builder;
  }
  function CSSStyleRuleDeclaration(selector, style) {
    this.q2l_1 = selector;
    this.r2l_1 = style;
  }
  protoOf(CSSStyleRuleDeclaration).e2l = function () {
    return this.r2l_1;
  };
  protoOf(CSSStyleRuleDeclaration).f2l = function () {
    return this.q2l_1.s2l();
  };
  protoOf(CSSStyleRuleDeclaration).toString = function () {
    return 'CSSStyleRuleDeclaration(selector=' + toString(this.q2l_1) + ', style=' + toString(this.r2l_1) + ')';
  };
  protoOf(CSSStyleRuleDeclaration).hashCode = function () {
    var result = hashCode(this.q2l_1);
    result = imul(result, 31) + hashCode(this.r2l_1) | 0;
    return result;
  };
  protoOf(CSSStyleRuleDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSStyleRuleDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof CSSStyleRuleDeclaration ? other : THROW_CCE();
    if (!equals(this.q2l_1, tmp0_other_with_cast.q2l_1))
      return false;
    if (!equals(this.r2l_1, tmp0_other_with_cast.r2l_1))
      return false;
    return true;
  };
  function CSSRuleBuilderImpl() {
    StyleScopeBuilder.call(this);
  }
  function CSSStyledRuleDeclaration() {
  }
  function CSSGroupingRuleDeclaration() {
  }
  var org_jetbrains_compose_web_css_CSSUnitValueTyped$stable;
  function Companion_7() {
  }
  var Companion_instance_7;
  function Companion_getInstance_8() {
    return Companion_instance_7;
  }
  function get_percent(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.percent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, '%');
  }
  function get_vh(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.vh' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'vh');
  }
  function get_cssRem(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.rem' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'rem');
  }
  function get_px(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'px');
  }
  function get_em(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.em' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'em');
  }
  function get_fr(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.fr' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'fr');
  }
  function get_ms(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.ms' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'ms');
  }
  function get_deg(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.deg' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'deg');
  }
  function CSSUnitValueTyped(value, unit) {
    this.c2m_1 = value;
    this.d2m_1 = unit;
    delete this.value;
    delete this.unit;
  }
  protoOf(CSSUnitValueTyped).e2 = function () {
    return this.c2m_1;
  };
  protoOf(CSSUnitValueTyped).e2m = function () {
    return this.d2m_1;
  };
  protoOf(CSSUnitValueTyped).toString = function () {
    return '' + this.c2m_1 + toString(this.d2m_1);
  };
  protoOf(CSSUnitValueTyped).hashCode = function () {
    var result = getNumberHashCode(this.c2m_1);
    result = imul(result, 31) + hashCode(this.d2m_1) | 0;
    return result;
  };
  protoOf(CSSUnitValueTyped).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSUnitValueTyped))
      return false;
    var tmp0_other_with_cast = other instanceof CSSUnitValueTyped ? other : THROW_CCE();
    if (!equals(this.c2m_1, tmp0_other_with_cast.c2m_1))
      return false;
    if (!equals(this.d2m_1, tmp0_other_with_cast.d2m_1))
      return false;
    return true;
  };
  var org_jetbrains_compose_web_css_Color_RGB$stable;
  var org_jetbrains_compose_web_css_Color_RGBA$stable;
  var org_jetbrains_compose_web_css_Color_HSL$stable;
  var org_jetbrains_compose_web_css_Color_HSLA$stable;
  var org_jetbrains_compose_web_css_Color$stable;
  function Color() {
  }
  var Color_instance;
  function Color_getInstance() {
    return Color_instance;
  }
  function Color_0(name) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return name;
  }
  var org_jetbrains_compose_web_css_CSSStyleVariable$stable;
  var org_jetbrains_compose_web_css_StyleScopeBuilder$stable;
  var org_jetbrains_compose_web_css_StylePropertyDeclaration$stable;
  function StyleScope() {
  }
  function StyleScopeBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.v2l_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.w2l_1 = ArrayList_init_$Create$();
  }
  protoOf(StyleScopeBuilder).a2m = function () {
    return this.v2l_1;
  };
  protoOf(StyleScopeBuilder).b2m = function () {
    return this.w2l_1;
  };
  protoOf(StyleScopeBuilder).x2l = function (propertyName, value) {
    this.a2m().e(new StylePropertyDeclaration(propertyName, value));
  };
  protoOf(StyleScopeBuilder).z2l = function (variableName, value) {
    this.b2m().e(new StylePropertyDeclaration(variableName, value));
  };
  protoOf(StyleScopeBuilder).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, StyleHolder) : false) {
      tmp = (nativeEquals(this.a2m(), other.a2m()) && nativeEquals(this.b2m(), other.b2m()));
    } else {
      tmp = false;
    }
    return tmp;
  };
  function StyleHolder() {
  }
  function StylePropertyDeclaration(name, value) {
    this.f2m_1 = name;
    this.g2m_1 = value;
  }
  protoOf(StylePropertyDeclaration).af = function () {
    return this.f2m_1;
  };
  protoOf(StylePropertyDeclaration).bf = function () {
    return this.g2m_1;
  };
  protoOf(StylePropertyDeclaration).toString = function () {
    return 'StylePropertyDeclaration(name=' + this.f2m_1 + ', value=' + toString(this.g2m_1) + ')';
  };
  protoOf(StylePropertyDeclaration).hashCode = function () {
    var result = getStringHashCode(this.f2m_1);
    result = imul(result, 31) + hashCode(this.g2m_1) | 0;
    return result;
  };
  protoOf(StylePropertyDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StylePropertyDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof StylePropertyDeclaration ? other : THROW_CCE();
    if (!(this.f2m_1 === tmp0_other_with_cast.f2m_1))
      return false;
    if (!equals(this.g2m_1, tmp0_other_with_cast.g2m_1))
      return false;
    return true;
  };
  function nativeEquals(_this__u8e3s4, properties) {
    if (!(_this__u8e3s4.j() === properties.j()))
      return false;
    var index = 0;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(_this__u8e3s4, Collection)) {
        tmp = _this__u8e3s4.r();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = _this__u8e3s4.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        var otherProp = properties.p(_unary__edvuaz);
        if (!(element.f2m_1 === otherProp.f2m_1 && toString(element.g2m_1) === toString(otherProp.g2m_1))) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  }
  var org_jetbrains_compose_web_css_CSSRulesHolderState$stable;
  var org_jetbrains_compose_web_css_StyleSheet_CSSSelfSelector$stable;
  var org_jetbrains_compose_web_css_StyleSheet$stable;
  function org_jetbrains_compose_web_css_StyleSheet$stableprop_getter() {
    return org_jetbrains_compose_web_css_StyleSheet$stable;
  }
  function StyleSheet_init_$Init$(rulesHolder, usePrefix, $this) {
    rulesHolder = rulesHolder === VOID ? new CSSRulesHolderState() : rulesHolder;
    usePrefix = usePrefix === VOID ? true : usePrefix;
    StyleSheet.call($this, usePrefix ? null : '', rulesHolder);
    return $this;
  }
  function StyleSheet_init_$Create$(rulesHolder, usePrefix) {
    return StyleSheet_init_$Init$(rulesHolder, usePrefix, objectCreate(protoOf(StyleSheet)));
  }
  function Companion_8() {
    this.h2m_1 = 0;
  }
  var Companion_instance_8;
  function Companion_getInstance_9() {
    return Companion_instance_8;
  }
  function StyleSheet(customPrefix, rulesHolder) {
    rulesHolder = rulesHolder === VOID ? new CSSRulesHolderState() : rulesHolder;
    this.i2m_1 = rulesHolder;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.j2m_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    tmp_0.k2m_1 = customPrefix == null ? '' + getKClassFromExpression(this).ja() + '-' : customPrefix;
    this.l2m_1 = customPrefix == null;
  }
  protoOf(StyleSheet).m2m = function (rulesBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = StyleSheet_init_$Create$();
    rulesBuild(this_0);
    return this_0.n2m();
  };
  protoOf(StyleSheet).l2l = function (rulesBuild) {
    return this.m2m(rulesBuild);
  };
  protoOf(StyleSheet).n2m = function () {
    return this.i2m_1.n2m();
  };
  protoOf(StyleSheet).m2l = function (cssRule) {
    this.i2m_1.m2l(cssRule);
  };
  protoOf(StyleSheet).o2m = function (selector, style) {
    this.i2m_1.o2m(selector, style);
  };
  protoOf(StyleSheet).q2m = function (selector, cssRule) {
    return this.p2m(selector, cssRule);
  };
  function CSSRulesHolderState() {
    this.u2m_1 = mutableStateListOf();
  }
  protoOf(CSSRulesHolderState).n2m = function () {
    return this.u2m_1;
  };
  protoOf(CSSRulesHolderState).m2l = function (cssRule) {
    this.u2m_1.jy(cssRule);
  };
  function get_Universal() {
    _init_properties_StyleSheetBuilder_kt__ftybdn();
    return Universal;
  }
  var Universal;
  var org_jetbrains_compose_web_css_PseudoClassInternal_Lang$stable;
  var org_jetbrains_compose_web_css_PseudoClassInternal_NthChild$stable;
  var org_jetbrains_compose_web_css_PseudoClassInternal_NthLastChild$stable;
  var org_jetbrains_compose_web_css_PseudoClassInternal_NthOfType$stable;
  var org_jetbrains_compose_web_css_PseudoClassInternal_NthLastOfType$stable;
  var org_jetbrains_compose_web_css_PseudoClassInternal_Host$stable;
  var org_jetbrains_compose_web_css_PseudoClassInternal_Not$stable;
  var org_jetbrains_compose_web_css_PseudoElementInternal_Slotted$stable;
  var org_jetbrains_compose_web_css_StyleSheetBuilderImpl$stable;
  function RawSelector(selector) {
    CSSSelector.call(this);
    this.v2m_1 = selector;
  }
  protoOf(RawSelector).toString = function () {
    return this.v2m_1;
  };
  protoOf(RawSelector).hashCode = function () {
    return getStringHashCode(this.v2m_1);
  };
  protoOf(RawSelector).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RawSelector))
      return false;
    var tmp0_other_with_cast = other instanceof RawSelector ? other : THROW_CCE();
    if (!(this.v2m_1 === tmp0_other_with_cast.v2m_1))
      return false;
    return true;
  };
  function SelectorsScope() {
  }
  function PseudoClassInternal(name) {
    CSSSelector.call(this);
    this.w2m_1 = name;
  }
  protoOf(PseudoClassInternal).equals = function (other) {
    var tmp;
    if (other instanceof PseudoClassInternal) {
      tmp = (this.w2m_1 === other.w2m_1 && this.x2m() == other.x2m());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(PseudoClassInternal).x2m = function () {
    return null;
  };
  protoOf(PseudoClassInternal).toString = function () {
    var tmp0_safe_receiver = this.x2m();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = '(' + tmp0_safe_receiver + ')';
    }
    var tmp1_elvis_lhs = tmp;
    return ':' + this.w2m_1 + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
  };
  function GenericStyleSheetBuilder() {
  }
  function StyleSheetBuilder() {
  }
  function CSSRulesHolder() {
  }
  var properties_initialized_StyleSheetBuilder_kt_uqx9b1;
  function _init_properties_StyleSheetBuilder_kt__ftybdn() {
    if (!properties_initialized_StyleSheetBuilder_kt_uqx9b1) {
      properties_initialized_StyleSheetBuilder_kt_uqx9b1 = true;
      Universal = new RawSelector('*');
      org_jetbrains_compose_web_css_PseudoClassInternal_Lang$stable = 0;
      org_jetbrains_compose_web_css_PseudoClassInternal_NthChild$stable = 8;
      org_jetbrains_compose_web_css_PseudoClassInternal_NthLastChild$stable = 8;
      org_jetbrains_compose_web_css_PseudoClassInternal_NthOfType$stable = 8;
      org_jetbrains_compose_web_css_PseudoClassInternal_NthLastOfType$stable = 8;
      org_jetbrains_compose_web_css_PseudoClassInternal_Host$stable = 0;
      org_jetbrains_compose_web_css_PseudoClassInternal_Not$stable = 0;
      org_jetbrains_compose_web_css_PseudoElementInternal_Slotted$stable = 0;
      org_jetbrains_compose_web_css_StyleSheetBuilderImpl$stable = 8;
    }
  }
  var org_jetbrains_compose_web_css_CSSAnimation$stable;
  function backgroundColor(_this__u8e3s4, value) {
    _this__u8e3s4.x2l('background-color', value);
  }
  function backgroundImage(_this__u8e3s4, value) {
    _this__u8e3s4.t2l('background-image', value);
  }
  var org_jetbrains_compose_web_css_CSSBorder$stable;
  function borderRadius(_this__u8e3s4, r) {
    _this__u8e3s4.x2l('border-radius', r);
  }
  function border(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    border_0(_this__u8e3s4, border$lambda(width, style, color));
  }
  function border_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSBorder();
    borderBuild(this_0);
    _this__u8e3s4.x2l('border', this_0);
  }
  function CSSBorder() {
    this.y2m_1 = null;
    this.z2m_1 = null;
    this.a2n_1 = null;
  }
  protoOf(CSSBorder).equals = function (other) {
    var tmp;
    if (other instanceof CSSBorder) {
      tmp = (equals(this.y2m_1, other.y2m_1) && equals(this.z2m_1, other.z2m_1) && equals(this.a2n_1, other.a2n_1));
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(CSSBorder).toString = function () {
    var values = listOfNotNull([this.y2m_1, this.z2m_1, this.a2n_1]);
    return joinToString(values, ' ');
  };
  function width(_this__u8e3s4, size) {
    _this__u8e3s4.y2m_1 = size;
  }
  function style_1(_this__u8e3s4, style) {
    _this__u8e3s4.z2m_1 = style;
  }
  function color(_this__u8e3s4, color) {
    _this__u8e3s4.a2n_1 = color;
  }
  function border$lambda($width, $style, $color) {
    return function ($this$border) {
      var tmp0_safe_receiver = $width;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        width($this$border, tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $style;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        style_1($this$border, tmp1_safe_receiver);
      }
      var tmp2_safe_receiver = $color;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        color($this$border, tmp2_safe_receiver);
      }
      return Unit_instance;
    };
  }
  function width_0(_this__u8e3s4, value) {
    _this__u8e3s4.x2l('width', value);
  }
  function height(_this__u8e3s4, value) {
    _this__u8e3s4.x2l('height', value);
  }
  function minWidth(_this__u8e3s4, value) {
    _this__u8e3s4.x2l('min-width', value);
  }
  function minHeight(_this__u8e3s4, value) {
    _this__u8e3s4.x2l('min-height', value);
  }
  function boxSizing(_this__u8e3s4, value) {
    _this__u8e3s4.t2l('box-sizing', value);
  }
  function color_0(_this__u8e3s4, value) {
    _this__u8e3s4.x2l('color', value);
  }
  function flexGrow(_this__u8e3s4, value) {
    _this__u8e3s4.u2l('flex-grow', value);
  }
  function alignItems(_this__u8e3s4, alignItems) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.t2l('align-items', alignItems);
  }
  function alignSelf(_this__u8e3s4, alignSelf) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.t2l('align-self', alignSelf);
  }
  function flexDirection(_this__u8e3s4, flexDirection) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.t2l('flex-direction', flexDirection);
  }
  function justifyContent(_this__u8e3s4, justifyContent) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.t2l('justify-content', justifyContent);
  }
  function gap(_this__u8e3s4, value) {
    _this__u8e3s4.x2l('gap', value);
  }
  function gridTemplateColumns(_this__u8e3s4, value) {
    _this__u8e3s4.t2l('grid-template-columns', value);
  }
  function gridArea(_this__u8e3s4, rowStart, columnStart) {
    _this__u8e3s4.t2l('grid-area', rowStart + ' / ' + columnStart);
  }
  function columnGap(_this__u8e3s4, value) {
    _this__u8e3s4.x2l('column-gap', value);
  }
  function rowGap(_this__u8e3s4, value) {
    _this__u8e3s4.x2l('row-gap', value);
  }
  function gridTemplateRows(_this__u8e3s4, value) {
    _this__u8e3s4.t2l('grid-template-rows', value);
  }
  function gridAutoColumns(_this__u8e3s4, value) {
    _this__u8e3s4.t2l('grid-auto-columns', value);
  }
  function gridAutoRows(_this__u8e3s4, value) {
    _this__u8e3s4.t2l('grid-auto-rows', value);
  }
  function margin(_this__u8e3s4, value) {
    _this__u8e3s4.t2l('margin', joinToString_0(value, ' '));
  }
  function marginBottom(_this__u8e3s4, value) {
    _this__u8e3s4.x2l('margin-bottom', value);
  }
  function padding(_this__u8e3s4, value) {
    _this__u8e3s4.t2l('padding', joinToString_0(value, ' '));
  }
  function position(_this__u8e3s4, position) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.t2l('position', position);
  }
  function top(_this__u8e3s4, value) {
    _this__u8e3s4.x2l('top', value);
  }
  function left(_this__u8e3s4, value) {
    _this__u8e3s4.x2l('left', value);
  }
  function right(_this__u8e3s4, value) {
    _this__u8e3s4.x2l('right', value);
  }
  function bottom(_this__u8e3s4, value) {
    _this__u8e3s4.x2l('bottom', value);
  }
  function display(_this__u8e3s4, displayStyle) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.t2l('display', displayStyle);
  }
  function opacity(_this__u8e3s4, value) {
    _this__u8e3s4.u2l('opacity', value);
  }
  function opacity_0(_this__u8e3s4, value) {
    _this__u8e3s4.u2l('opacity', value.value / 100);
  }
  function lineHeight(_this__u8e3s4, value) {
    _this__u8e3s4.t2l('line-height', value);
  }
  function fontSize(_this__u8e3s4, value) {
    _this__u8e3s4.x2l('font-size', value);
  }
  function fontFamily(_this__u8e3s4, value) {
    _this__u8e3s4.t2l('font-family', joinToString_0(value, ', ', VOID, VOID, VOID, VOID, fontFamily$lambda));
  }
  function fontFamily$lambda(it) {
    return contains(it, ' ') ? '"' + it + '"' : it;
  }
  var org_jetbrains_compose_web_css_Transition$stable;
  var org_jetbrains_compose_web_css_Transitions$stable;
  function CSSSelector() {
  }
  protoOf(CSSSelector).s2l = function () {
    return toString(this);
  };
  function TagElement(elementBuilder, applyAttrs, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.y1i(-410614847);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.z16(elementBuilder) : $composer_0.m1h(elementBuilder)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.m1h(applyAttrs) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.m1h(content) ? 256 : 128);
    if (!(($dirty & 147) === 146) || !$composer_0.i1g()) {
      if (isTraceInProgress()) {
        traceEventStart(-410614847, $dirty, -1, 'org.jetbrains.compose.web.dom.TagElement (Base.kt:110)');
      }
      $composer_0.p1g(1701086896);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.y1h();
      var tmp;
      if (false || it === Companion_getInstance().f1a_1) {
        var value = new ElementScopeImpl();
        this_0.j1i(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.r1g();
      var scope = tmp0_group;
      var refEffect = null;
      // Inline function 'org.jetbrains.compose.web.dom.ComposeDomNode' call
      var $composer_1 = $composer_0;
      $composer_1.e1a();
      if ($composer_1.y1g()) {
        var tmp_1 = $composer_1;
        tmp_1.a1h(TagElement$lambda(elementBuilder, scope));
      } else {
        $composer_1.d1h();
      }
      var tmp0 = _SkippableUpdater___init__impl__4ft0t9($composer_1);
      var $composer_2 = $composer_1;
      var attrsScope = new AttrsScopeBuilder();
      if (applyAttrs == null)
        null;
      else
        applyAttrs(attrsScope);
      refEffect = attrsScope.r2k_1;
      $composer_2.p1g(-1221589876);
      // Inline function 'androidx.compose.runtime.SkippableUpdater.update' call
      _SkippableUpdater___get_composer__impl__6t7yne(tmp0).n1g(509942095);
      var $this$update = _Updater___init__impl__rbfxm8(_SkippableUpdater___get_composer__impl__6t7yne(tmp0));
      $composer_2.p1g(-294995132);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_0 = $composer_2.y1h();
      var tmp_2;
      if (false || it_0 === Companion_getInstance().f1a_1) {
        var value_0 = DomElementWrapper$updateClasses$ref();
        $composer_2.j1i(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0_group_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_2.r1g();
      Updater__set_impl_v7kwss($this$update, attrsScope.s2k_1, tmp0_group_0);
      $composer_2.p1g(-294992658);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_1 = $composer_2.y1h();
      var tmp_4;
      if (false || it_1 === Companion_getInstance().f1a_1) {
        var value_1 = DomElementWrapper$updateStyleDeclarations$ref();
        $composer_2.j1i(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmp1_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_2.r1g();
      Updater__set_impl_v7kwss($this$update, attrsScope.p2k_1, tmp1_group);
      var tmp_6 = attrsScope.t2k();
      $composer_2.p1g(-294989918);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_2 = $composer_2.y1h();
      var tmp_7;
      if (false || it_2 === Companion_getInstance().f1a_1) {
        var value_2 = DomElementWrapper$updateAttrs$ref();
        $composer_2.j1i(value_2);
        tmp_7 = value_2;
      } else {
        tmp_7 = it_2;
      }
      var tmp_8 = tmp_7;
      var tmp2_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_2.r1g();
      Updater__set_impl_v7kwss($this$update, tmp_6, tmp2_group);
      var tmp_9 = attrsScope.n2k_1.v2k();
      $composer_2.p1g(-294985077);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_3 = $composer_2.y1h();
      var tmp_10;
      if (false || it_3 === Companion_getInstance().f1a_1) {
        var value_3 = DomElementWrapper$updateEventListeners$ref();
        $composer_2.j1i(value_3);
        tmp_10 = value_3;
      } else {
        tmp_10 = it_3;
      }
      var tmp_11 = tmp_10;
      var tmp3_group = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
      $composer_2.r1g();
      Updater__set_impl_v7kwss($this$update, tmp_9, tmp3_group);
      $composer_2.p1g(-294981689);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_4 = $composer_2.y1h();
      var tmp_12;
      if (false || it_4 === Companion_getInstance().f1a_1) {
        var value_4 = DomElementWrapper$updateProperties$ref();
        $composer_2.j1i(value_4);
        tmp_12 = value_4;
      } else {
        tmp_12 = it_4;
      }
      var tmp_13 = tmp_12;
      var tmp4_group = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
      $composer_2.r1g();
      Updater__set_impl_v7kwss($this$update, attrsScope.q2k_1, tmp4_group);
      _SkippableUpdater___get_composer__impl__6t7yne(tmp0).o1g();
      $composer_2.r1g();
      $composer_1.n1g(2058660585);
      var $changed_0 = 8 & 0 >> 3 | 14 & 0 >> 3 | 112 & 0 >> 6;
      var $composer_3 = $composer_1;
      $composer_3.p1g(-1221571119);
      content == null || content(scope, $composer_3, 14 & $changed_0 | 112 & $dirty >> 3);
      $composer_3.r1g();
      $composer_1.o1g();
      $composer_1.f1h();
      var tmp0_safe_receiver = refEffect;
      var tmp_14;
      if (tmp0_safe_receiver == null) {
        tmp_14 = null;
      } else {
        // Inline function 'kotlin.let' call
        $composer_0.p1g(-1221568129);
        var tmp0_0 = $composer_0;
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!($composer_0.z16(tmp0_safe_receiver) | $composer_0.m1h(scope));
        // Inline function 'kotlin.let' call
        var it_5 = tmp0_0.y1h();
        var tmp_15;
        if (invalid || it_5 === Companion_getInstance().f1a_1) {
          var value_5 = TagElement$lambda_0(tmp0_safe_receiver, scope);
          tmp0_0.j1i(value_5);
          tmp_15 = value_5;
        } else {
          tmp_15 = it_5;
        }
        var tmp_16 = tmp_15;
        var tmp0_group_1 = (tmp_16 == null ? true : !(tmp_16 == null)) ? tmp_16 : THROW_CCE();
        $composer_0.r1g();
        DisposableEffect(null, tmp0_group_1, $composer_0, 6);
        tmp_14 = Unit_instance;
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.w19();
    }
    var tmp2_safe_receiver = $composer_0.z1i();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.d1o(TagElement$lambda_1(elementBuilder, applyAttrs, content, $changed));
    }
  }
  function DomElementWrapper(node) {
    DomNodeWrapper.call(this, node);
    this.c2n_1 = node;
    this.d2n_1 = emptyList();
  }
  protoOf(DomElementWrapper).y2i = function () {
    return this.c2n_1;
  };
  protoOf(DomElementWrapper).e2n = function (list) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = this.d2n_1.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      this.c2n_1.removeEventListener(element.k20(), element);
    }
    this.d2n_1 = list;
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = this.d2n_1.g();
    while (_iterator__ex2g4s_0.h()) {
      var element_0 = _iterator__ex2g4s_0.i();
      this.c2n_1.addEventListener(element_0.k20(), element_0);
    }
  };
  protoOf(DomElementWrapper).f2n = function (applicators) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = applicators.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      var applicator = element.af();
      var item = element.bf();
      applicator(this.c2n_1, item);
    }
  };
  protoOf(DomElementWrapper).g2n = function (styleApplier) {
    var tmp0_subject = this.c2n_1;
    var tmp;
    if (tmp0_subject instanceof HTMLElement) {
      tmp = true;
    } else {
      tmp = tmp0_subject instanceof SVGElement;
    }
    if (tmp) {
      this.c2n_1.removeAttribute('style');
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var style = this.c2n_1.style;
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = styleApplier.a2m().g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        var name = element.af();
        var value = element.bf();
        style.setProperty(name, toString(value));
      }
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_0 = styleApplier.b2m().g();
      while (_iterator__ex2g4s_0.h()) {
        var element_0 = _iterator__ex2g4s_0.i();
        var name_0 = element_0.af();
        var value_0 = element_0.bf();
        style.setProperty(name_0, toString(value_0));
      }
    }
  };
  protoOf(DomElementWrapper).h2n = function (attrs) {
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = this.c2n_1.getAttributeNames();
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      switch (element) {
        case 'style':
        case 'class':
          break;
        default:
          this.c2n_1.removeAttribute(element);
          break;
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = attrs.k2().g();
    while (_iterator__ex2g4s.h()) {
      var element_0 = _iterator__ex2g4s.i();
      this.c2n_1.setAttribute(element_0.d2(), element_0.e2());
    }
  };
  protoOf(DomElementWrapper).i2n = function (classes) {
    this.c2n_1.removeAttribute('class');
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!classes.r()) {
      var tmp = this.c2n_1.classList;
      // Inline function 'kotlin.collections.toTypedArray' call
      var tmp$ret$1 = copyToArray(classes);
      (function () {
        var $externalVarargReceiverTmp = tmp;
        return $externalVarargReceiverTmp.add.apply($externalVarargReceiverTmp, [].slice.call(tmp$ret$1.slice()));
      }.call(this));
    }
  };
  function TagElement$lambda($elementBuilder, $scope) {
    return function () {
      var node = $elementBuilder.x1x();
      $scope.l2n(node);
      return new DomElementWrapper(node);
    };
  }
  function DomElementWrapper$updateClasses$ref() {
    var l = function (p0, p1) {
      p0.i2n(p1);
      return Unit_instance;
    };
    l.callableName = 'updateClasses';
    return l;
  }
  function DomElementWrapper$updateStyleDeclarations$ref() {
    var l = function (p0, p1) {
      p0.g2n(p1);
      return Unit_instance;
    };
    l.callableName = 'updateStyleDeclarations';
    return l;
  }
  function DomElementWrapper$updateAttrs$ref() {
    var l = function (p0, p1) {
      p0.h2n(p1);
      return Unit_instance;
    };
    l.callableName = 'updateAttrs';
    return l;
  }
  function DomElementWrapper$updateEventListeners$ref() {
    var l = function (p0, p1) {
      p0.e2n(p1);
      return Unit_instance;
    };
    l.callableName = 'updateEventListeners';
    return l;
  }
  function DomElementWrapper$updateProperties$ref() {
    var l = function (p0, p1) {
      p0.f2n(p1);
      return Unit_instance;
    };
    l.callableName = 'updateProperties';
    return l;
  }
  function TagElement$lambda_0($effect, $scope) {
    return function ($this$DisposableEffect) {
      return $effect($this$DisposableEffect, $scope.m2n());
    };
  }
  function TagElement$lambda_1($elementBuilder, $applyAttrs, $content, $$changed) {
    return function ($composer, $force) {
      TagElement($elementBuilder, $applyAttrs, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var org_jetbrains_compose_web_dom_ElementScopeBase$stable;
  var org_jetbrains_compose_web_dom_ElementScopeImpl$stable;
  function ElementScopeImpl() {
    ElementScopeBase.call(this);
  }
  protoOf(ElementScopeImpl).l2n = function (_set____db54di) {
    this.k2n_1 = _set____db54di;
  };
  protoOf(ElementScopeImpl).m2n = function () {
    var tmp = this.k2n_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('element');
    }
  };
  protoOf(ElementScopeImpl).n2n = function (_this__u8e3s4) {
    return this.m2n();
  };
  function ElementScopeBase() {
    this.o2n_1 = 0;
  }
  var Address;
  var Article;
  var Aside;
  var Header;
  var Area;
  var Audio;
  var Map;
  var Track;
  var Video;
  var Datalist;
  var Fieldset;
  var Legend;
  var Meter;
  var Output;
  var Progress;
  var Embed;
  var Iframe;
  var Object_0;
  var Param;
  var Picture;
  var Source;
  var Canvas;
  var DList;
  var DTerm;
  var DDescription;
  function get_Div() {
    _init_properties_Elements_kt__eyv5nt();
    return Div;
  }
  var Div;
  function get_A() {
    _init_properties_Elements_kt__eyv5nt();
    return A;
  }
  var A;
  var Input;
  function get_Button() {
    _init_properties_Elements_kt__eyv5nt();
    return Button;
  }
  var Button;
  var H1;
  var H2;
  var H3;
  var H4;
  var H5;
  var H6;
  var P;
  var Em;
  var I;
  var B;
  var Small;
  var Sup;
  var Sub;
  var Blockquote;
  function get_Span() {
    _init_properties_Elements_kt__eyv5nt();
    return Span;
  }
  var Span;
  var Br;
  var Ul;
  var Ol;
  var Li;
  function get_Img() {
    _init_properties_Elements_kt__eyv5nt();
    return Img;
  }
  var Img;
  var Form;
  var Select;
  var Option;
  var OptGroup;
  var Section;
  var TextArea;
  var Nav;
  var Pre;
  var Code;
  var Main;
  var Footer;
  var Hr;
  var Label;
  var Table;
  var Caption;
  var Col;
  var Colgroup;
  var Tr;
  var Thead;
  var Th;
  var Td;
  var Tbody;
  var Tfoot;
  function get_Style() {
    _init_properties_Elements_kt__eyv5nt();
    return Style;
  }
  var Style;
  function ElementBuilder() {
  }
  function _get_el__ndc0ck($this) {
    var tmp0 = $this.q2n_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('el', 1, tmp, ElementBuilderImplementation$_get_el_$ref_ff87uu(), null);
    return tmp0.e2();
  }
  function ElementBuilderImplementation$el$delegate$lambda(this$0) {
    return function () {
      return document.createElement(this$0.p2n_1);
    };
  }
  function ElementBuilderImplementation$_get_el_$ref_ff87uu() {
    return function (p0) {
      return _get_el__ndc0ck(p0);
    };
  }
  function ElementBuilderImplementation(tagName) {
    this.p2n_1 = tagName;
    var tmp = this;
    tmp.q2n_1 = lazy(ElementBuilderImplementation$el$delegate$lambda(this));
  }
  protoOf(ElementBuilderImplementation).x1x = function () {
    var tmp = _get_el__ndc0ck(this).cloneNode();
    return tmp instanceof Element ? tmp : THROW_CCE();
  };
  function Text_0(value, $composer, $changed) {
    _init_properties_Elements_kt__eyv5nt();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.y1i(-1813500779);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.z16(value) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.i1g()) {
      if (isTraceInProgress()) {
        traceEventStart(-1813500779, $dirty, -1, 'org.jetbrains.compose.web.dom.Text (Elements.kt:482)');
      }
      $composer_0.p1g(-1122484256);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.y1h();
      var tmp;
      if (false || it === Companion_getInstance().f1a_1) {
        var value_0 = Text$lambda;
        this_0.j1i(value_0);
        tmp = value_0;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.r1g();
      // Inline function 'androidx.compose.runtime.ComposeNode' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1886828752, 'CC(ComposeNode):Composables.kt#9igjgp');
      var tmp_1 = $composer_1.j1g();
      if (!(tmp_1 instanceof DomApplier)) {
        invalidApplier();
      }
      $composer_1.e1a();
      if ($composer_1.y1g()) {
        $composer_1.a1h(tmp0_group);
      } else {
        $composer_1.d1h();
      }
      var $this$ComposeNode = _Updater___init__impl__rbfxm8($composer_1);
      Updater__set_impl_v7kwss($this$ComposeNode, value, Text$lambda_0);
      $composer_1.f1h();
      sourceInformationMarkerEnd($composer_1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.w19();
    }
    var tmp1_safe_receiver = $composer_0.z1i();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.d1o(Text$lambda_1(value, $changed));
    }
  }
  function Div_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.y1i(-2046833685);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.m1h(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.m1h(content_0._v) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.i1g()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-2046833685, $dirty, -1, 'org.jetbrains.compose.web.dom.Div (Elements.kt:495)');
      }
      TagElement(get_Div(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.w19();
    }
    var tmp0_safe_receiver = $composer_0.z1i();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d1o(Div$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Span_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.y1i(1254704640);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.m1h(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.m1h(content_0._v) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.i1g()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1254704640, $dirty, -1, 'org.jetbrains.compose.web.dom.Span (Elements.kt:617)');
      }
      TagElement(get_Span(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.w19();
    }
    var tmp0_safe_receiver = $composer_0.z1i();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d1o(Span$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Button_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.y1i(686179432);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.m1h(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.m1h(content_0._v) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.i1g()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(686179432, $dirty, -1, 'org.jetbrains.compose.web.dom.Button (Elements.kt:527)');
      }
      TagElement(get_Button(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.w19();
    }
    var tmp0_safe_receiver = $composer_0.z1i();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d1o(Button$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Img_0(src, alt, attrs, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var alt_0 = {_v: alt};
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.y1i(140604733);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.z16(src) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.z16(alt_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.m1h(attrs_0._v) ? 256 : 128);
    if (!(($dirty & 147) === 146) || !$composer_0.i1g()) {
      if (!(($default & 2) === 0)) {
        alt_0._v = '';
      }
      if (!(($default & 4) === 0)) {
        attrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(140604733, $dirty, -1, 'org.jetbrains.compose.web.dom.Img (Elements.kt:646)');
      }
      var tmp = get_Img();
      $composer_0.p1g(-876760709);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!(($dirty & 14) === 4 | ($dirty & 112) === 32) | ($dirty & 896) === 256);
      // Inline function 'kotlin.let' call
      var it = tmp0.y1h();
      var tmp_0;
      if (invalid || it === Companion_getInstance().f1a_1) {
        var value = Img$lambda(src, alt_0, attrs_0);
        tmp0.j1i(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.r1g();
      TagElement(tmp, tmp0_group, null, $composer_0, 384);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.w19();
    }
    var tmp1_safe_receiver = $composer_0.z1i();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.d1o(Img$lambda_0(src, alt_0, attrs_0, $changed, $default));
    }
  }
  function A_0(href, attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var href_0 = {_v: href};
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.y1i(1783231114);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.z16(href_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.m1h(attrs_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.m1h(content_0._v) ? 256 : 128);
    if (!(($dirty & 147) === 146) || !$composer_0.i1g()) {
      if (!(($default & 1) === 0)) {
        href_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1783231114, $dirty, -1, 'org.jetbrains.compose.web.dom.A (Elements.kt:508)');
      }
      var tmp = get_A();
      $composer_0.p1g(-1913223363);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(($dirty & 14) === 4 | ($dirty & 112) === 32);
      // Inline function 'kotlin.let' call
      var it = tmp0.y1h();
      var tmp_0;
      if (invalid || it === Companion_getInstance().f1a_1) {
        var value = A$lambda(href_0, attrs_0);
        tmp0.j1i(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.r1g();
      TagElement(tmp, tmp0_group, content_0._v, $composer_0, 896 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.w19();
    }
    var tmp1_safe_receiver = $composer_0.z1i();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.d1o(A$lambda_0(href_0, attrs_0, content_0, $changed, $default));
    }
  }
  function Style_0(applyAttrs, cssRules, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var applyAttrs_0 = {_v: applyAttrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.y1i(244974285);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.m1h(applyAttrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.m1h(cssRules) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.i1g()) {
      if (!(($default & 1) === 0)) {
        applyAttrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(244974285, $dirty, -1, 'org.jetbrains.compose.web.dom.Style (Elements.kt:1002)');
      }
      var tmp = get_Style();
      $composer_0.p1g(-909970263);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it = tmp0.y1h();
      var tmp_0;
      if (invalid || it === Companion_getInstance().f1a_1) {
        var value = Style$lambda(applyAttrs_0);
        tmp0.j1i(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.r1g();
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(962227798, true, Style$lambda_0(cssRules), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.z16(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.y1h();
      var tmp_2;
      if (invalid_0 || it_0 === Companion_getInstance().f1a_1) {
        var value_0 = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_1.j1i(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      TagElement(tmp, tmp0_group, tmp0_0, $composer_0, 384);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.w19();
    }
    var tmp1_safe_receiver = $composer_0.z1i();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.d1o(Style$lambda_1(applyAttrs_0, cssRules, $changed, $default));
    }
  }
  function clearCSSRules(_this__u8e3s4) {
    _init_properties_Elements_kt__eyv5nt();
    // Inline function 'kotlin.repeat' call
    var times = _this__u8e3s4.cssRules.length;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _this__u8e3s4.deleteRule(0);
      }
       while (inductionVariable < times);
  }
  function Text$lambda() {
    _init_properties_Elements_kt__eyv5nt();
    return new DomNodeWrapper(document.createTextNode(''));
  }
  function Text$lambda_0($this$set, value) {
    _init_properties_Elements_kt__eyv5nt();
    var tmp = $this$set.y2i();
    (tmp instanceof Text ? tmp : THROW_CCE()).data = value;
    return Unit_instance;
  }
  function Text$lambda_1($value, $$changed) {
    return function ($composer, $force) {
      Text_0($value, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Div$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Div_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Span$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Span_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Button$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Button_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Img$lambda($src, $alt, $attrs) {
    return function ($this$TagElement) {
      alt(src($this$TagElement, $src), $alt._v);
      var tmp;
      if (!($attrs._v == null)) {
        tmp = $attrs._v($this$TagElement);
      }
      return Unit_instance;
    };
  }
  function Img$lambda_0($src, $alt, $attrs, $$changed, $$default) {
    return function ($composer, $force) {
      Img_0($src, $alt._v, $attrs._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function A$lambda($href, $attrs) {
    return function ($this$TagElement) {
      var tmp;
      if (!($href._v == null)) {
        href($this$TagElement, $href._v);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!($attrs._v == null)) {
        tmp_0 = $attrs._v($this$TagElement);
      }
      return Unit_instance;
    };
  }
  function A$lambda_0($href, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      A_0($href._v, $attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Style$lambda($applyAttrs) {
    return function ($this$TagElement) {
      var tmp;
      if (!($applyAttrs._v == null)) {
        tmp = $applyAttrs._v($this$TagElement);
      }
      return Unit_instance;
    };
  }
  function _no_name_provided__qut3iv($cssStylesheet) {
    this.r2n_1 = $cssStylesheet;
  }
  protoOf(_no_name_provided__qut3iv).pm = function () {
    var tmp0_safe_receiver = this.r2n_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      clearCSSRules(tmp0_safe_receiver);
    }
  };
  function Style$lambda$lambda($this_TagElement, $cssRules) {
    return function ($this$DisposableEffect) {
      var tmp = $this_TagElement.n2n($this$DisposableEffect).sheet;
      var cssStylesheet = tmp instanceof CSSStyleSheet ? tmp : null;
      if (cssStylesheet == null)
        null;
      else {
        setCSSRules(cssStylesheet, $cssRules);
      }
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv(cssStylesheet);
    };
  }
  function Style$lambda_0($cssRules) {
    return function ($this$TagElement, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 6) === 0) {
        $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.z16($this$TagElement) : $composer_0.m1h($this$TagElement)) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 19) === 18) || !$composer_0.i1g()) {
        if (isTraceInProgress()) {
          traceEventStart(962227798, $dirty, -1, 'org.jetbrains.compose.web.dom.Style.<anonymous> (Elements.kt:1011)');
        }
        var tmp_1 = $cssRules.j();
        $composer_0.p1g(866926242);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!((($dirty & 14) === 4 || (!(($dirty & 8) === 0) && $composer_0.m1h($this$TagElement))) | $composer_0.m1h($cssRules));
        // Inline function 'kotlin.let' call
        var it = $composer_0.y1h();
        var tmp_2;
        if (invalid || it === Companion_getInstance().f1a_1) {
          var value = Style$lambda$lambda($this$TagElement, $cssRules);
          $composer_0.j1i(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_0.r1g();
        DisposableEffect_0($cssRules, tmp_1, tmp0_group, $composer_0, 0);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_instance;
        }
        tmp_0 = tmp_4;
      } else {
        $composer_0.w19();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.q2a(_this__u8e3s4, p0_0, p1);
    };
  }
  function Style$lambda_1($applyAttrs, $cssRules, $$changed, $$default) {
    return function ($composer, $force) {
      Style_0($applyAttrs._v, $cssRules, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var properties_initialized_Elements_kt_gtqiqv;
  function _init_properties_Elements_kt__eyv5nt() {
    if (!properties_initialized_Elements_kt_gtqiqv) {
      properties_initialized_Elements_kt_gtqiqv = true;
      Address = new ElementBuilderImplementation('address');
      Article = new ElementBuilderImplementation('article');
      Aside = new ElementBuilderImplementation('aside');
      Header = new ElementBuilderImplementation('header');
      Area = new ElementBuilderImplementation('area');
      Audio = new ElementBuilderImplementation('audio');
      Map = new ElementBuilderImplementation('map');
      Track = new ElementBuilderImplementation('track');
      Video = new ElementBuilderImplementation('video');
      Datalist = new ElementBuilderImplementation('datalist');
      Fieldset = new ElementBuilderImplementation('fieldset');
      Legend = new ElementBuilderImplementation('legend');
      Meter = new ElementBuilderImplementation('meter');
      Output = new ElementBuilderImplementation('output');
      Progress = new ElementBuilderImplementation('progress');
      Embed = new ElementBuilderImplementation('embed');
      Iframe = new ElementBuilderImplementation('iframe');
      Object_0 = new ElementBuilderImplementation('object');
      Param = new ElementBuilderImplementation('param');
      Picture = new ElementBuilderImplementation('picture');
      Source = new ElementBuilderImplementation('source');
      Canvas = new ElementBuilderImplementation('canvas');
      DList = new ElementBuilderImplementation('dl');
      DTerm = new ElementBuilderImplementation('dt');
      DDescription = new ElementBuilderImplementation('dd');
      Div = new ElementBuilderImplementation('div');
      A = new ElementBuilderImplementation('a');
      Input = new ElementBuilderImplementation('input');
      Button = new ElementBuilderImplementation('button');
      H1 = new ElementBuilderImplementation('h1');
      H2 = new ElementBuilderImplementation('h2');
      H3 = new ElementBuilderImplementation('h3');
      H4 = new ElementBuilderImplementation('h4');
      H5 = new ElementBuilderImplementation('h5');
      H6 = new ElementBuilderImplementation('h6');
      P = new ElementBuilderImplementation('p');
      Em = new ElementBuilderImplementation('em');
      I = new ElementBuilderImplementation('i');
      B = new ElementBuilderImplementation('b');
      Small = new ElementBuilderImplementation('small');
      Sup = new ElementBuilderImplementation('sup');
      Sub = new ElementBuilderImplementation('sub');
      Blockquote = new ElementBuilderImplementation('blockquote');
      Span = new ElementBuilderImplementation('span');
      Br = new ElementBuilderImplementation('br');
      Ul = new ElementBuilderImplementation('ul');
      Ol = new ElementBuilderImplementation('ol');
      Li = new ElementBuilderImplementation('li');
      Img = new ElementBuilderImplementation('img');
      Form = new ElementBuilderImplementation('form');
      Select = new ElementBuilderImplementation('select');
      Option = new ElementBuilderImplementation('option');
      OptGroup = new ElementBuilderImplementation('optgroup');
      Section = new ElementBuilderImplementation('section');
      TextArea = new ElementBuilderImplementation('textarea');
      Nav = new ElementBuilderImplementation('nav');
      Pre = new ElementBuilderImplementation('pre');
      Code = new ElementBuilderImplementation('code');
      Main = new ElementBuilderImplementation('main');
      Footer = new ElementBuilderImplementation('footer');
      Hr = new ElementBuilderImplementation('hr');
      Label = new ElementBuilderImplementation('label');
      Table = new ElementBuilderImplementation('table');
      Caption = new ElementBuilderImplementation('caption');
      Col = new ElementBuilderImplementation('col');
      Colgroup = new ElementBuilderImplementation('colgroup');
      Tr = new ElementBuilderImplementation('tr');
      Thead = new ElementBuilderImplementation('thead');
      Th = new ElementBuilderImplementation('th');
      Td = new ElementBuilderImplementation('td');
      Tbody = new ElementBuilderImplementation('tbody');
      Tfoot = new ElementBuilderImplementation('tfoot');
      Style = new ElementBuilderImplementation('style');
    }
  }
  function setCSSRules(_this__u8e3s4, cssRules) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = cssRules.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      addRule(_this__u8e3s4, element);
    }
  }
  function addRule(_this__u8e3s4, cssRuleDeclaration) {
    var tmp0_safe_receiver = addRule_0(_this__u8e3s4, cssRuleDeclaration.f2l() + ' {}');
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      fillRule(cssRuleDeclaration, tmp0_safe_receiver);
    }
  }
  function addRule_0(_this__u8e3s4, cssRule) {
    var cssRuleIndex = _this__u8e3s4.insertRule(cssRule, _this__u8e3s4.cssRules.length);
    return _this__u8e3s4.cssRules.item(cssRuleIndex);
  }
  function fillRule(cssRuleDeclaration, cssRule) {
    if (isInterface(cssRuleDeclaration, CSSStyledRuleDeclaration)) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var cssStyleRule = cssRule;
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = cssRuleDeclaration.e2l().a2m().g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        var name = element.af();
        var value = element.bf();
        setProperty(cssStyleRule.style, name, value);
      }
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_0 = cssRuleDeclaration.e2l().b2m().g();
      while (_iterator__ex2g4s_0.h()) {
        var element_0 = _iterator__ex2g4s_0.i();
        var name_0 = element_0.af();
        var value_0 = element_0.bf();
        setVariable(cssStyleRule.style, name_0, value_0);
      }
    } else {
      if (isInterface(cssRuleDeclaration, CSSGroupingRuleDeclaration)) {
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var cssGroupingRule = cssRule;
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s_1 = cssRuleDeclaration.p2l().g();
        while (_iterator__ex2g4s_1.h()) {
          var element_1 = _iterator__ex2g4s_1.i();
          addRule_1(cssGroupingRule, element_1);
        }
      } else {
        if (cssRuleDeclaration instanceof CSSKeyframesRuleDeclaration) {
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var cssGroupingRule_0 = cssRule;
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s_2 = cssRuleDeclaration.h2l_1.g();
          while (_iterator__ex2g4s_2.h()) {
            var element_2 = _iterator__ex2g4s_2.i();
            addRule_2(cssGroupingRule_0, element_2);
          }
        }
      }
    }
  }
  function setProperty(style, name, value) {
    style.setProperty(name, toString(value));
  }
  function setVariable(style, name, value) {
    style.setProperty('--' + name, toString(value));
  }
  function addRule_1(_this__u8e3s4, cssRuleDeclaration) {
    var tmp0_safe_receiver = addRule_3(_this__u8e3s4, cssRuleDeclaration.f2l() + ' {}');
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      fillRule(cssRuleDeclaration, tmp0_safe_receiver);
    }
  }
  function addRule_2(_this__u8e3s4, cssRuleDeclaration) {
    var tmp0_safe_receiver = addRule_4(_this__u8e3s4, cssRuleDeclaration.f2l() + ' {}');
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      fillRule(cssRuleDeclaration, tmp0_safe_receiver);
    }
  }
  function addRule_3(_this__u8e3s4, cssRule) {
    var cssRuleIndex = _this__u8e3s4.insertRule(cssRule, _this__u8e3s4.cssRules.length);
    return _this__u8e3s4.cssRules.item(cssRuleIndex);
  }
  function addRule_4(_this__u8e3s4, cssRule) {
    // Inline function 'org.jetbrains.compose.web.css.appendRule' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.appendRule(cssRule);
    return _this__u8e3s4.cssRules.item(_this__u8e3s4.cssRules.length - 1 | 0);
  }
  var org_jetbrains_compose_web_events_SyntheticAnimationEvent$stable;
  var org_jetbrains_compose_web_events_SyntheticChangeEvent$stable;
  var org_jetbrains_compose_web_events_SyntheticClipboardEvent$stable;
  var androidx_compose_web_events_SyntheticEvent$stable;
  function SyntheticEvent(nativeEvent) {
    this.s2n_1 = nativeEvent;
    var tmp = this;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.t2n_1 = this.s2n_1.target;
    this.u2n_1 = this.s2n_1.bubbles;
    this.v2n_1 = this.s2n_1.cancelable;
    this.w2n_1 = this.s2n_1.composed;
    this.x2n_1 = this.s2n_1.currentTarget;
    this.y2n_1 = this.s2n_1.eventPhase;
    this.z2n_1 = this.s2n_1.defaultPrevented;
    this.a2o_1 = this.s2n_1.timeStamp;
    this.b2o_1 = this.s2n_1.type;
    this.c2o_1 = this.s2n_1.isTrusted;
  }
  protoOf(SyntheticEvent).d2o = function () {
    return this.s2n_1.preventDefault();
  };
  protoOf(SyntheticEvent).e2o = function () {
    return this.s2n_1.stopPropagation();
  };
  var org_jetbrains_compose_web_events_SyntheticFocusEvent$stable;
  var org_jetbrains_compose_web_events_SyntheticInputEvent$stable;
  var androidx_compose_web_events_SyntheticMouseEvent$stable;
  var androidx_compose_web_events_SyntheticWheelEvent$stable;
  var androidx_compose_web_events_SyntheticDragEvent$stable;
  function SyntheticMouseEvent(nativeEvent) {
    SyntheticEvent.call(this, nativeEvent);
    this.q2o_1 = nativeEvent;
    this.r2o_1 = nativeEvent.altKey;
    this.s2o_1 = nativeEvent.button;
    this.t2o_1 = nativeEvent.buttons;
    this.u2o_1 = nativeEvent.clientX;
    this.v2o_1 = nativeEvent.clientY;
    this.w2o_1 = nativeEvent.ctrlKey;
    this.x2o_1 = nativeEvent.metaKey;
    var tmp = this;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = nativeEvent.movementX;
    var tmp0_elvis_lhs = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : null;
    tmp.y2o_1 = tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
    var tmp_1 = this;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = nativeEvent.movementY;
    var tmp0_elvis_lhs_0 = (!(tmp_2 == null) ? typeof tmp_2 === 'number' : false) ? tmp_2 : null;
    tmp_1.z2o_1 = tmp0_elvis_lhs_0 == null ? 0 : tmp0_elvis_lhs_0;
    this.a2p_1 = nativeEvent.offsetX;
    this.b2p_1 = nativeEvent.offsetY;
    this.c2p_1 = nativeEvent.pageX;
    this.d2p_1 = nativeEvent.pageY;
    this.e2p_1 = nativeEvent.region;
    this.f2p_1 = nativeEvent.relatedTarget;
    this.g2p_1 = nativeEvent.screenX;
    this.h2p_1 = nativeEvent.screenY;
    this.i2p_1 = nativeEvent.shiftKey;
    this.j2p_1 = nativeEvent.x;
    this.k2p_1 = nativeEvent.y;
  }
  var org_jetbrains_compose_web_events_SyntheticSelectEvent$stable;
  var org_jetbrains_compose_web_events_SyntheticSubmitEvent$stable;
  var org_jetbrains_compose_web_events_SyntheticTouchEvent$stable;
  //region block: post-declaration
  protoOf(AttrsScopeBuilder).j2k = tabIndex;
  protoOf(EventsListenerScopeBuilder).m2k = onClick;
  protoOf(StyleScopeBuilder).t2l = property;
  protoOf(StyleScopeBuilder).u2l = property_0;
  protoOf(StyleScopeBuilder).y2l = variable;
  defineProp(protoOf(CSSUnitValueTyped), 'value', function () {
    return this.e2();
  });
  defineProp(protoOf(CSSUnitValueTyped), 'unit', function () {
    return this.e2m();
  });
  protoOf(StyleSheet).p2m = style_0;
  protoOf(StyleSheet).r2m = style;
  protoOf(StyleSheet).s2m = invoke;
  protoOf(StyleSheet).returnUniversalSelector = returnUniversalSelector;
  protoOf(StyleSheet).returnHoverSelector = returnHoverSelector;
  protoOf(StyleSheet).t2m = get_hover;
  protoOf(CSSRulesHolderState).o2m = add;
  //endregion
  //region block: init
  org_jetbrains_compose_web_attributes_EventsListenerScopeBuilder$stable = 8;
  org_jetbrains_compose_web_attributes_InputType_Button$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Checkbox$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Color$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Date$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_DateTimeLocal$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Email$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_File$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Hidden$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Month$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Number$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Password$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Radio$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Range$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Search$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Submit$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Tel$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Text$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Time$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Url$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Week$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_InputTypeWithStringValue$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_InputTypeWithUnitValue$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_InputTypeCheckedValue$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_InputTypeNumberValue$stable = 0;
  org_jetbrains_compose_web_attributes_InputType$stable = 0;
  org_jetbrains_compose_web_attributes_DirType_Ltr$stable = 0;
  org_jetbrains_compose_web_attributes_DirType_Rtl$stable = 0;
  org_jetbrains_compose_web_attributes_DirType_Auto$stable = 0;
  org_jetbrains_compose_web_attributes_DirType$stable = 0;
  org_jetbrains_compose_web_attributes_ATarget_Blank$stable = 0;
  org_jetbrains_compose_web_attributes_ATarget_Parent$stable = 0;
  org_jetbrains_compose_web_attributes_ATarget_Self$stable = 0;
  org_jetbrains_compose_web_attributes_ATarget_Top$stable = 0;
  org_jetbrains_compose_web_attributes_ATarget$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_Alternate$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_Author$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_Bookmark$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_External$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_Help$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_License$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_Next$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_First$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_Prev$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_Last$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_NoFollow$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_NoOpener$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_NoReferrer$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_Opener$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_Search$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_Tag$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_CustomARel$stable = 0;
  org_jetbrains_compose_web_attributes_ARel$stable = 0;
  org_jetbrains_compose_web_attributes_ButtonFormTarget_Blank$stable = 0;
  org_jetbrains_compose_web_attributes_ButtonFormTarget_Parent$stable = 0;
  org_jetbrains_compose_web_attributes_ButtonFormTarget_Self$stable = 0;
  org_jetbrains_compose_web_attributes_ButtonFormTarget_Top$stable = 0;
  org_jetbrains_compose_web_attributes_ButtonFormTarget$stable = 0;
  org_jetbrains_compose_web_attributes_FormTarget_Blank$stable = 0;
  org_jetbrains_compose_web_attributes_FormTarget_Parent$stable = 0;
  org_jetbrains_compose_web_attributes_FormTarget_Self$stable = 0;
  org_jetbrains_compose_web_attributes_FormTarget_Top$stable = 0;
  org_jetbrains_compose_web_attributes_FormTarget$stable = 0;
  org_jetbrains_compose_web_attributes_InputFormTarget_Blank$stable = 0;
  org_jetbrains_compose_web_attributes_InputFormTarget_Parent$stable = 0;
  org_jetbrains_compose_web_attributes_InputFormTarget_Self$stable = 0;
  org_jetbrains_compose_web_attributes_InputFormTarget_Top$stable = 0;
  org_jetbrains_compose_web_attributes_InputFormTarget$stable = 0;
  org_jetbrains_compose_web_attributes_SyntheticEventListener$stable = 0;
  org_jetbrains_compose_web_attributes_AnimationEventListener$stable = 0;
  org_jetbrains_compose_web_attributes_MouseEventListener$stable = 0;
  org_jetbrains_compose_web_attributes_MouseWheelEventListener$stable = 0;
  org_jetbrains_compose_web_attributes_KeyboardEventListener$stable = 0;
  org_jetbrains_compose_web_attributes_FocusEventListener$stable = 0;
  org_jetbrains_compose_web_attributes_TouchEventListener$stable = 0;
  org_jetbrains_compose_web_attributes_DragEventListener$stable = 0;
  org_jetbrains_compose_web_attributes_ClipboardEventListener$stable = 0;
  org_jetbrains_compose_web_attributes_InputEventListener$stable = 0;
  org_jetbrains_compose_web_attributes_ChangeEventListener$stable = 0;
  org_jetbrains_compose_web_attributes_SelectEventListener$stable = 0;
  org_jetbrains_compose_web_attributes_builders_InputAttrsScope$stable = 8;
  androidx_compose_web_attributes_SelectAttrsScope$stable = 8;
  org_jetbrains_compose_web_attributes_builders_TextAreaAttrsScope$stable = 8;
  org_jetbrains_compose_web_css_CSSKeyframesRule$stable = 8;
  org_jetbrains_compose_web_css_CSSBuilderImpl$stable = 8;
  org_jetbrains_compose_web_css_GridAutoFlow$stable = 0;
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  Companion_instance_1 = new Companion_1();
  Companion_instance_2 = new Companion_2();
  Companion_instance_3 = new Companion_3();
  Companion_instance_4 = new Companion_4();
  Companion_instance_5 = new Companion_5();
  Companion_instance_6 = new Companion_6();
  org_jetbrains_compose_web_css_CSSKeyframesRuleDeclaration$stable = 8;
  org_jetbrains_compose_web_css_CSSKeyframe_From$stable = 0;
  org_jetbrains_compose_web_css_CSSKeyframe_To$stable = 0;
  org_jetbrains_compose_web_css_CSSKeyframe_Percentage$stable = 8;
  org_jetbrains_compose_web_css_CSSKeyframe_Combine$stable = 8;
  org_jetbrains_compose_web_css_CSSKeyframe$stable = 0;
  org_jetbrains_compose_web_css_CSSKeyframeRuleDeclaration$stable = 8;
  org_jetbrains_compose_web_css_CSSKeyframesBuilder$stable = 8;
  org_jetbrains_compose_web_css_CSSMediaQuery_Raw$stable = 0;
  org_jetbrains_compose_web_css_CSSMediaQuery_MediaType$stable = 0;
  org_jetbrains_compose_web_css_CSSMediaQuery_MediaFeature$stable = 8;
  org_jetbrains_compose_web_css_CSSMediaQuery_NotFeature$stable = 8;
  org_jetbrains_compose_web_css_CSSMediaQuery_And$stable = 8;
  org_jetbrains_compose_web_css_CSSMediaQuery_Not$stable = 8;
  org_jetbrains_compose_web_css_CSSMediaQuery_Combine$stable = 8;
  org_jetbrains_compose_web_css_CSSMediaQuery_Only$stable = 8;
  org_jetbrains_compose_web_css_CSSMediaQuery_Or$stable = 8;
  org_jetbrains_compose_web_css_CSSMediaRuleDeclaration$stable = 8;
  org_jetbrains_compose_web_css_CSSCalcValue$stable = 8;
  org_jetbrains_compose_web_css_CSSRuleBuilderImpl$stable = 0;
  org_jetbrains_compose_web_css_CSSStyleRuleDeclaration$stable = 8;
  org_jetbrains_compose_web_css_CSSUnitValueTyped$stable = 0;
  Companion_instance_7 = new Companion_7();
  org_jetbrains_compose_web_css_Color_RGB$stable = 8;
  org_jetbrains_compose_web_css_Color_RGBA$stable = 8;
  org_jetbrains_compose_web_css_Color_HSL$stable = 8;
  org_jetbrains_compose_web_css_Color_HSLA$stable = 8;
  org_jetbrains_compose_web_css_Color$stable = 0;
  Color_instance = new Color();
  org_jetbrains_compose_web_css_CSSStyleVariable$stable = 0;
  org_jetbrains_compose_web_css_StyleScopeBuilder$stable = 8;
  org_jetbrains_compose_web_css_StylePropertyDeclaration$stable = 8;
  org_jetbrains_compose_web_css_CSSRulesHolderState$stable = 0;
  org_jetbrains_compose_web_css_StyleSheet_CSSSelfSelector$stable = 8;
  org_jetbrains_compose_web_css_StyleSheet$stable = 8;
  Companion_instance_8 = new Companion_8();
  org_jetbrains_compose_web_css_CSSAnimation$stable = 8;
  org_jetbrains_compose_web_css_CSSBorder$stable = 8;
  org_jetbrains_compose_web_css_Transition$stable = 8;
  org_jetbrains_compose_web_css_Transitions$stable = 8;
  org_jetbrains_compose_web_dom_ElementScopeBase$stable = 8;
  org_jetbrains_compose_web_dom_ElementScopeImpl$stable = 8;
  org_jetbrains_compose_web_events_SyntheticAnimationEvent$stable = 8;
  org_jetbrains_compose_web_events_SyntheticChangeEvent$stable = 0;
  org_jetbrains_compose_web_events_SyntheticClipboardEvent$stable = 8;
  androidx_compose_web_events_SyntheticEvent$stable = 8;
  org_jetbrains_compose_web_events_SyntheticFocusEvent$stable = 8;
  org_jetbrains_compose_web_events_SyntheticInputEvent$stable = 8;
  androidx_compose_web_events_SyntheticMouseEvent$stable = 8;
  androidx_compose_web_events_SyntheticWheelEvent$stable = 0;
  androidx_compose_web_events_SyntheticDragEvent$stable = 8;
  org_jetbrains_compose_web_events_SyntheticSelectEvent$stable = 0;
  org_jetbrains_compose_web_events_SyntheticSubmitEvent$stable = 0;
  org_jetbrains_compose_web_events_SyntheticTouchEvent$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ButtonType_Button_getInstance;
  _.$_$.b = StyleSheet_init_$Init$;
  _.$_$.c = StyleSheet_init_$Create$;
  _.$_$.d = Companion_instance_3;
  _.$_$.e = Companion_instance_4;
  _.$_$.f = Companion_instance_0;
  _.$_$.g = From_getInstance;
  _.$_$.h = To_getInstance;
  _.$_$.i = Color_instance;
  _.$_$.j = Companion_instance;
  _.$_$.k = Companion_instance_5;
  _.$_$.l = Companion_instance_6;
  _.$_$.m = Companion_instance_1;
  _.$_$.n = Companion_instance_2;
  _.$_$.o = classes;
  _.$_$.p = tabIndex;
  _.$_$.q = AttrsScope;
  _.$_$.r = onClick;
  _.$_$.s = type;
  _.$_$.t = CSSBorder;
  _.$_$.u = CSSGroupingRuleDeclaration;
  _.$_$.v = CSSKeyframeRuleDeclaration;
  _.$_$.w = CSSKeyframesRuleDeclaration;
  _.$_$.x = MediaFeature;
  _.$_$.y = Raw;
  _.$_$.z = CSSMediaRuleDeclaration;
  _.$_$.a1 = Color_0;
  _.$_$.b1 = property;
  _.$_$.c1 = property_0;
  _.$_$.d1 = variable;
  _.$_$.e1 = StyleScopeBuilder;
  _.$_$.f1 = StyleScope;
  _.$_$.g1 = StyleSheet;
  _.$_$.h1 = alignItems;
  _.$_$.i1 = alignSelf;
  _.$_$.j1 = backgroundColor;
  _.$_$.k1 = backgroundImage;
  _.$_$.l1 = borderRadius;
  _.$_$.m1 = border;
  _.$_$.n1 = bottom;
  _.$_$.o1 = boxSizing;
  _.$_$.p1 = color;
  _.$_$.q1 = color_0;
  _.$_$.r1 = columnGap;
  _.$_$.s1 = get_cssRem;
  _.$_$.t1 = get_deg;
  _.$_$.u1 = display;
  _.$_$.v1 = get_em;
  _.$_$.w1 = flexDirection;
  _.$_$.x1 = flexGrow;
  _.$_$.y1 = fontFamily;
  _.$_$.z1 = fontSize;
  _.$_$.a2 = get_fr;
  _.$_$.b2 = gap;
  _.$_$.c2 = gridArea;
  _.$_$.d2 = gridAutoColumns;
  _.$_$.e2 = gridAutoRows;
  _.$_$.f2 = gridTemplateColumns;
  _.$_$.g2 = gridTemplateRows;
  _.$_$.h2 = height;
  _.$_$.i2 = justifyContent;
  _.$_$.j2 = left;
  _.$_$.k2 = lineHeight;
  _.$_$.l2 = marginBottom;
  _.$_$.m2 = margin;
  _.$_$.n2 = media;
  _.$_$.o2 = minHeight;
  _.$_$.p2 = minWidth;
  _.$_$.q2 = get_ms;
  _.$_$.r2 = opacity;
  _.$_$.s2 = opacity_0;
  _.$_$.t2 = org_jetbrains_compose_web_css_StyleSheet$stableprop_getter;
  _.$_$.u2 = padding;
  _.$_$.v2 = get_percent;
  _.$_$.w2 = position;
  _.$_$.x2 = get_px;
  _.$_$.y2 = right;
  _.$_$.z2 = rowGap;
  _.$_$.a3 = style_1;
  _.$_$.b3 = top;
  _.$_$.c3 = unaryMinus;
  _.$_$.d3 = get_vh;
  _.$_$.e3 = width_0;
  _.$_$.f3 = width;
  _.$_$.g3 = A_0;
  _.$_$.h3 = Button_0;
  _.$_$.i3 = Div_0;
  _.$_$.j3 = ElementBuilder;
  _.$_$.k3 = Img_0;
  _.$_$.l3 = Span_0;
  _.$_$.m3 = Style_0;
  _.$_$.n3 = TagElement;
  _.$_$.o3 = Text_0;
  //endregion
  return _;
}));

//# sourceMappingURL=html-html-core.js.map
