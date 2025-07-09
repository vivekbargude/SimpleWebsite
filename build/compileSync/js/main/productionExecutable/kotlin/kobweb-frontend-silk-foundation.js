(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-runtime-runtime.js', './kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js', './html-html-core.js', './kobweb-frontend-kobweb-compose.js', './kobweb-frontend-compose-html-ext.js', './kobweb-frontend-browser-ext.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'), require('./html-html-core.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./kobweb-frontend-browser-ext.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' was not found. Please, check whether 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof globalThis['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof globalThis['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof globalThis['kobweb-frontend-browser-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kobweb-frontend-browser-ext' was not found. Please, check whether 'kobweb-frontend-browser-ext' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    globalThis['kobweb-frontend-silk-foundation'] = factory(typeof globalThis['kobweb-frontend-silk-foundation'] === 'undefined' ? {} : globalThis['kobweb-frontend-silk-foundation'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, globalThis['html-html-core'], globalThis['kobweb-frontend-kobweb-compose'], globalThis['kobweb-frontend-compose-html-ext'], globalThis['kobweb-frontend-browser-ext']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_com_varabyte_kobweb_browser_ext) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.c2;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var THROW_CCE = kotlin_kotlin.$_$.v9;
  var DisposableEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i;
  var removeClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.b;
  var addClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.a;
  var protoOf = kotlin_kotlin.$_$.h7;
  var initMetadataForClass = kotlin_kotlin.$_$.r6;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var org_jetbrains_compose_web_css_StyleSheet$stableprop_getter = kotlin_org_jetbrains_compose_html_html_core.$_$.t2;
  var Style = kotlin_org_jetbrains_compose_html_html_core.$_$.m3;
  var StyleSheet = kotlin_org_jetbrains_compose_html_html_core.$_$.g1;
  var VOID = kotlin_kotlin.$_$.e;
  var StyleSheet_init_$Init$ = kotlin_org_jetbrains_compose_html_html_core.$_$.b;
  var initMetadataForObject = kotlin_kotlin.$_$.w6;
  var Companion_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u3;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.r1;
  var startsWith = kotlin_kotlin.$_$.x8;
  var endsWith = kotlin_kotlin.$_$.h8;
  var Companion_instance_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.s3;
  var whiteSpace = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z2;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h3;
  var rememberComposableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var Span = kotlin_org_jetbrains_compose_html_html_core.$_$.l3;
  var com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m2;
  var registerRefScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o2;
  var Text = kotlin_org_jetbrains_compose_html_html_core.$_$.o3;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var androidx_compose_runtime_ProvidedValue$stableprop_getter = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  var CompositionLocalProvider = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var toString = kotlin_kotlin.$_$.j7;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.f1;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var toSet = kotlin_kotlin.$_$.d5;
  var minus = kotlin_kotlin.$_$.k4;
  var to = kotlin_kotlin.$_$.la;
  var scope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.t1;
  var invokeLater = kotlin_com_varabyte_kobweb_browser_ext.$_$.b;
  var asList = kotlin_kotlin.$_$.na;
  var layer = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i1;
  var asSequence = kotlin_kotlin.$_$.b3;
  var flatMap = kotlin_kotlin.$_$.x7;
  var filter = kotlin_kotlin.$_$.w7;
  var Sequence = kotlin_kotlin.$_$.v7;
  var isInterface = kotlin_kotlin.$_$.z6;
  var map = kotlin_kotlin.$_$.z7;
  var toSet_0 = kotlin_kotlin.$_$.b8;
  var subtract = kotlin_kotlin.$_$.y4;
  var sorted = kotlin_kotlin.$_$.x4;
  var joinToString = kotlin_kotlin.$_$.x3;
  var trimIndent = kotlin_kotlin.$_$.f9;
  var initMetadataForCompanion = kotlin_kotlin.$_$.s6;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.p;
  var KtMap = kotlin_kotlin.$_$.p2;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.i;
  var CssIdent = kotlin_com_varabyte_kobweb_browser_ext.$_$.a;
  var enumEntries = kotlin_kotlin.$_$.y5;
  var Enum = kotlin_kotlin.$_$.o9;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ea;
  var toList = kotlin_kotlin.$_$.z4;
  var listOfNotNull = kotlin_kotlin.$_$.e4;
  var addAll = kotlin_kotlin.$_$.x2;
  var listOf = kotlin_kotlin.$_$.f4;
  var emptyList = kotlin_kotlin.$_$.n3;
  var listOf_0 = kotlin_kotlin.$_$.g4;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.x;
  var charSequenceLength = kotlin_kotlin.$_$.h6;
  var mapCapacity = kotlin_kotlin.$_$.h4;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.o;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var Companion_instance_1 = kotlin_com_varabyte_kobweb_browser_ext.$_$.d;
  var removePrefix = kotlin_kotlin.$_$.q8;
  var media = kotlin_org_jetbrains_compose_html_html_core.$_$.n2;
  var trimMargin = kotlin_kotlin.$_$.g9;
  var isNotEmpty = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e1;
  var mutableListOf = kotlin_kotlin.$_$.l4;
  var StyleSheet_init_$Create$ = kotlin_org_jetbrains_compose_html_html_core.$_$.c;
  var plus = kotlin_kotlin.$_$.p4;
  var CSSScopeRuleDeclaration = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c;
  var initMetadataForInterface = kotlin_kotlin.$_$.u6;
  var ComparableStyleScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d;
  var toStyles = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i3;
  var equals = kotlin_kotlin.$_$.l6;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.e3;
  var substringAfterLast = kotlin_kotlin.$_$.y8;
  var copyToArray = kotlin_kotlin.$_$.k3;
  var classNames = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z;
  var toList_0 = kotlin_kotlin.$_$.a5;
  var com_varabyte_kobweb_compose_css_ComparableStyleScope$stableprop_getter = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.z;
  var objectCreate = kotlin_kotlin.$_$.g7;
  var getStringHashCode = kotlin_kotlin.$_$.p6;
  var isBlank = kotlin_kotlin.$_$.k8;
  var first = kotlin_kotlin.$_$.j8;
  var Char = kotlin_kotlin.$_$.m9;
  var ComparableAttrsScope_init_$Create$ = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.v2;
  var setOf = kotlin_kotlin.$_$.v4;
  var From_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.g;
  var To_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.h;
  var hashCode = kotlin_kotlin.$_$.q6;
  var StyleScopeBuilder = kotlin_org_jetbrains_compose_html_html_core.$_$.e1;
  var CSSKeyframeRuleDeclaration = kotlin_org_jetbrains_compose_html_html_core.$_$.v;
  var CSSKeyframesRuleDeclaration = kotlin_org_jetbrains_compose_html_html_core.$_$.w;
  var distinct = kotlin_kotlin.$_$.l3;
  var lazy = kotlin_kotlin.$_$.da;
  var MediaFeature = kotlin_org_jetbrains_compose_html_html_core.$_$.x;
  var GenericTag = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l2;
  var CSSMediaRuleDeclaration = kotlin_org_jetbrains_compose_html_html_core.$_$.z;
  var Raw = kotlin_org_jetbrains_compose_html_html_core.$_$.y;
  var numberToDouble = kotlin_kotlin.$_$.e7;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.x2;
  var removeSuffix = kotlin_kotlin.$_$.r8;
  var toIntOrNull = kotlin_kotlin.$_$.d9;
  var plus_0 = kotlin_kotlin.$_$.q4;
  var toMutableList = kotlin_kotlin.$_$.b5;
  var joinToString_0 = kotlin_kotlin.$_$.y3;
  var getKClass = kotlin_kotlin.$_$.c;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.s1;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.q;
  var getValue = kotlin_kotlin.$_$.v3;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var produceState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var CoroutineImpl = kotlin_kotlin.$_$.w5;
  var ProduceStateScope = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l;
  var EventListener = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.c;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.h5;
  var throwKotlinNothingValueException = kotlin_kotlin.$_$.ia;
  var initMetadataForLambda = kotlin_kotlin.$_$.v6;
  var KProperty0 = kotlin_kotlin.$_$.s7;
  var getPropertyCallableRef = kotlin_kotlin.$_$.o6;
  var THROW_IAE = kotlin_kotlin.$_$.w9;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var endsWith_0 = kotlin_kotlin.$_$.g8;
  var compositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o;
  var Companion_instance_2 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n3;
  var ensureNotNull = kotlin_kotlin.$_$.ca;
  var styleModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f3;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(_no_name_provided__qut3iv);
  initMetadataForObject(SilkStyleSheet, 'SilkStyleSheet', VOID, StyleSheet);
  initMetadataForClass(DeferredComposablesState, 'DeferredComposablesState', DeferredComposablesState);
  initMetadataForObject(ComposableSingletons$DeferredKt, 'ComposableSingletons$DeferredKt');
  initMetadataForClass(InitSilkContext, 'InitSilkContext');
  initMetadataForClass(MutableSilkConfig, 'MutableSilkConfig', MutableSilkConfig);
  initMetadataForCompanion(Companion);
  initMetadataForClass(StyleScope, 'StyleScope');
  initMetadataForClass(SilkStylesheetInstance$assertNoAttributeModifiers$simpleStyleScope$1, VOID, VOID, StyleScope);
  initMetadataForObject(SilkStylesheetInstance, 'SilkStylesheetInstance');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(ColorModeStrategy, 'ColorModeStrategy', VOID, Enum);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(CssRule, 'CssRule');
  initMetadataForClass(NonMediaCssRule, 'NonMediaCssRule', VOID, CssRule);
  initMetadataForClass(OfAttributeSelector, 'OfAttributeSelector', VOID, NonMediaCssRule);
  initMetadataForClass(OfPseudoClass, 'OfPseudoClass', VOID, NonMediaCssRule);
  initMetadataForClass(OfPseudoElement, 'OfPseudoElement', VOID, NonMediaCssRule);
  initMetadataForClass(CompositeOpen, 'CompositeOpen', VOID, NonMediaCssRule);
  initMetadataForClass(CssStyle, 'CssStyle');
  initMetadataForClass(Restricted, 'Restricted', VOID, CssStyle);
  initMetadataForClass(Base, 'Base', VOID, Restricted);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(CssStyleScope, 'CssStyleScope', VOID, StyleScope);
  initMetadataForInterface(ComponentKind, 'ComponentKind');
  initMetadataForInterface(RestrictedKind, 'RestrictedKind');
  initMetadataForClass(CssStyleBaseScope, 'CssStyleBaseScope');
  initMetadataForClass(Light, 'Light');
  initMetadataForClass(Dark, 'Dark');
  initMetadataForClass(ColorAgnostic, 'ColorAgnostic');
  initMetadataForClass(ColorAware, 'ColorAware');
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(SimpleCssStyle, 'SimpleCssStyle', VOID, CssStyle);
  initMetadataForClass(ImmutableCssStyle, 'ImmutableCssStyle');
  initMetadataForInterface(GeneralKind, 'GeneralKind');
  initMetadataForClass(ExtendingCssStyle, 'ExtendingCssStyle', VOID, CssStyle);
  initMetadataForClass(CssStyle$3, VOID, VOID, CssStyle);
  initMetadataForClass(CssStyle$6, VOID, VOID, CssStyle);
  initMetadataForClass(base$5, VOID, VOID, CssStyle);
  initMetadataForClass(CssStyle$7, VOID, VOID, CssStyle);
  initMetadataForClass(CssStyleVariant, 'CssStyleVariant');
  initMetadataForClass(SimpleCssStyleVariant$1, VOID, VOID, CssStyle);
  initMetadataForClass(SimpleCssStyleVariant, 'SimpleCssStyleVariant', VOID, CssStyleVariant);
  initMetadataForClass(ExtendingCssStyleVariant, 'ExtendingCssStyleVariant', VOID, SimpleCssStyleVariant);
  initMetadataForClass(CompositeCssStyleVariant, 'CompositeCssStyleVariant', VOID, CssStyleVariant);
  initMetadataForClass(addVariant$1, VOID, VOID, CssStyle);
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(Key, 'Key');
  initMetadataForClass(CssModifier, 'CssModifier');
  initMetadataForClass(KeyframesBuilder, 'KeyframesBuilder');
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(Keyframes, 'Keyframes');
  initMetadataForClass(Breakpoint, 'Breakpoint', VOID, Enum);
  initMetadataForClass(_no_name_provided__qut3iv_0);
  initMetadataForObject(ComposableSingletons$BreakpointConditionsKt, 'ComposableSingletons$BreakpointConditionsKt');
  initMetadataForClass(BreakpointValues, 'BreakpointValues');
  initMetadataForClass(BreakpointUnitValue, 'BreakpointUnitValue');
  initMetadataForClass(Rem, 'Rem', VOID, BreakpointUnitValue);
  initMetadataForClass(ResponsiveValues, 'ResponsiveValues');
  initMetadataForClass(LayerListBuilder, 'LayerListBuilder', LayerListBuilder);
  initMetadataForClass(SilkLayer, 'SilkLayer', VOID, Enum);
  initMetadataForClass(MutableSilkTheme, 'MutableSilkTheme', MutableSilkTheme);
  initMetadataForClass(ImmutableSilkTheme, 'ImmutableSilkTheme');
  initMetadataForLambda(rememberBreakpoint$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(ColorMode, 'ColorMode', VOID, Enum);
  initMetadataForObject(Red, 'Red');
  initMetadataForObject(Blue, 'Blue');
  initMetadataForObject(Gray, 'Gray');
  function get(colorMode) {
    var tmp;
    switch (colorMode.p2_1) {
      case 0:
        tmp = this.o3b();
        break;
      case 1:
        tmp = this.p3b();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  initMetadataForInterface(Palettes, 'Palettes');
  initMetadataForClass(MutablePalettes, 'MutablePalettes', MutablePalettes, VOID, [Palettes]);
  function getValue_0(key) {
    return ensureNotNull(this.uc(key));
  }
  initMetadataForInterface(Palette, 'Palette');
  initMetadataForClass(EntryDelegate, 'EntryDelegate');
  initMetadataForClass(ColorGroup, 'ColorGroup');
  initMetadataForClass(MutablePalette, 'MutablePalette', MutablePalette, VOID, [Palette]);
  initMetadataForClass(RectF, 'RectF', RectF_init_$Create$);
  initMetadataForClass(Path, 'Path');
  initMetadataForClass(InsetPath, 'InsetPath', VOID, Path);
  //endregion
  function ColorModeAware(element, $composer, $changed, $default) {
    var element_0 = {_v: element};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.y1i(1268289190);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | (($default & 1) === 0 && $composer_0.m1h(element_0._v) ? 4 : 2);
    if ($composer_0.r1i(!(($dirty & 3) === 2), $dirty & 1)) {
      $composer_0.s1g();
      if (($changed & 1) === 0 || $composer_0.w1g()) {
        if (!(($default & 1) === 0)) {
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          element_0._v = document.documentElement;
          $dirty = $dirty & -15;
        }
      } else {
        $composer_0.w19();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
      }
      $composer_0.t1g();
      var colorMode = Companion_instance_10.f33($composer_0, 6);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!($composer_0.m1h(element_0._v) | $composer_0.o1h(colorMode.p2_1));
      // Inline function 'kotlin.let' call
      var it = tmp0.y1h();
      var tmp;
      if (invalid || it === Companion_getInstance().f1a_1) {
        var value = ColorModeAware$lambda(element_0, colorMode);
        tmp0.j1i(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp$ret$5 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      DisposableEffect(colorMode, tmp$ret$5, $composer_0, 0);
    } else {
      $composer_0.w19();
    }
    var tmp0_safe_receiver = $composer_0.z1i();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d1o(ColorModeAware$lambda_0(element_0, $changed, $default));
    }
  }
  function setStyleFor(_this__u8e3s4, colorMode) {
    removeClass(_this__u8e3s4, [get_cssClass(colorMode.i33())]);
    addClass(_this__u8e3s4, [get_cssClass(colorMode)]);
  }
  function _no_name_provided__qut3iv($element, $colorMode) {
    this.j33_1 = $element;
    this.k33_1 = $colorMode;
  }
  protoOf(_no_name_provided__qut3iv).pm = function () {
    removeClass(this.j33_1._v, [get_cssClass(this.k33_1)]);
  };
  function ColorModeAware$lambda($element, $colorMode) {
    return function ($this$DisposableEffect) {
      setStyleFor($element._v, $colorMode);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv($element, $colorMode);
    };
  }
  function ColorModeAware$lambda_0($element, $$changed, $$default) {
    return function ($composer, $force) {
      ColorModeAware($element._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function SilkFoundationStyles(initSilk_0, $composer, $changed, $default) {
    var initSilk_1 = {_v: initSilk_0};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.y1i(67758577);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.m1h(initSilk_1._v) ? 4 : 2);
    if ($composer_0.r1i(!(($dirty & 3) === 2), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        // Inline function 'androidx.compose.runtime.cache' call
        var this_0 = $composer_0;
        // Inline function 'kotlin.let' call
        var it = this_0.y1h();
        var tmp;
        if (false || it === Companion_getInstance().f1a_1) {
          var value = SilkFoundationStyles$lambda;
          this_0.j1i(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        initSilk_1._v = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      }
      $composer_0.v1c(691485911, Unit_instance);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it_0 = tmp0.y1h();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().f1a_1) {
        var value_0 = SilkFoundationStyles$lambda_0(initSilk_1);
        tmp0.j1i(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp$ret$7 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      initSilk(tmp$ret$7);
      $composer_0.y1c();
      var tmp0_0 = SilkStyleSheet_getInstance();
      var tmp2 = $composer_0;
      // Inline function 'org.jetbrains.compose.web.css.Style' call
      org_jetbrains_compose_web_css_StyleSheet$stableprop_getter();
      var $composer_1 = tmp2;
      $composer_1.p1g(-1196466140);
      Style(null, tmp0_0.n2m(), $composer_1, 0, 1);
      $composer_1.r1g();
      SilkBreakpointDisplayStyles($composer_0, 0);
    } else {
      $composer_0.w19();
    }
    var tmp0_safe_receiver = $composer_0.z1i();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d1o(SilkFoundationStyles$lambda_1(initSilk_1, $changed, $default));
    }
  }
  function SilkFoundationStyles$lambda(it) {
    return Unit_instance;
  }
  function SilkFoundationStyles$lambda_0($initSilk) {
    return function (ctx) {
      $initSilk._v(ctx);
      return Unit_instance;
    };
  }
  function SilkFoundationStyles$lambda_1($initSilk, $$changed, $$default) {
    return function ($composer, $force) {
      SilkFoundationStyles($initSilk._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function SilkStyleSheet() {
    SilkStyleSheet_instance = this;
    StyleSheet_init_$Init$(VOID, VOID, this);
  }
  protoOf(SilkStyleSheet).q2m = function (selector, cssRule) {
    return this.p2m(selector, cssRule);
  };
  var SilkStyleSheet_instance;
  function SilkStyleSheet_getInstance() {
    if (SilkStyleSheet_instance == null)
      new SilkStyleSheet();
    return SilkStyleSheet_instance;
  }
  function get_SpanTextStyle() {
    _init_properties_SpanText_kt__upt1hl();
    return SpanTextStyle;
  }
  var SpanTextStyle;
  function SpanText(text, modifier, variant, ref, $composer, $changed, $default) {
    _init_properties_SpanText_kt__upt1hl();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.y1i(-1400383509);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.z16(text) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.m1h(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.z16(variant_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ((($changed & 4096) === 0 ? $composer_0.z16(ref_0._v) : $composer_0.m1h(ref_0._v)) ? 2048 : 1024);
    if ($composer_0.r1i(!(($dirty & 1171) === 1170), $dirty & 1)) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 4) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        ref_0._v = null;
      }
      var tmp0 = toModifier_0(get_SpanTextStyle(), [variant_0._v], $composer_0, 6).c30(modifier_0._v);
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
      var tmp;
      if (startsWith(text, _Char___init__impl__6a9atx(32)) || endsWith(text, _Char___init__impl__6a9atx(32))) {
        tmp = whiteSpace(Companion_instance, Companion_instance_0.o2s());
      } else {
        tmp = Companion_instance;
      }
      var finalModifier = tmp0.c30(tmp);
      var tmp_0 = toAttrs(finalModifier);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(262293193, true, SpanText$lambda(ref_0, text), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.z16(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.y1h();
      var tmp_1;
      if (invalid || it === Companion_getInstance().f1a_1) {
        var value = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_1.j1i(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0_0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Span(tmp_0, tmp0_0, $composer_0, 48, 0);
    } else {
      $composer_0.w19();
    }
    var tmp0_safe_receiver = $composer_0.z1i();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d1o(SpanText$lambda_0(text, modifier_0, variant_0, ref_0, $changed, $default));
    }
  }
  function SpanTextStyle$lambda($this$CssStyle) {
    _init_properties_SpanText_kt__upt1hl();
    return Unit_instance;
  }
  function SpanText$lambda($ref, $text) {
    return function ($this$Span, $composer, $changed) {
      var $composer_0 = $composer;
      registerRefScope($this$Span, $ref._v, $composer_0, 14 & $changed | com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter() << 3);
      Text($text, $composer_0, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.q2a(_this__u8e3s4, p0_0, p1);
    };
  }
  function SpanText$lambda_0($text, $modifier, $variant, $ref, $$changed, $$default) {
    return function ($composer, $force) {
      SpanText($text, $modifier._v, $variant._v, $ref._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var properties_initialized_SpanText_kt_kccny1;
  function _init_properties_SpanText_kt__upt1hl() {
    if (!properties_initialized_SpanText_kt_kccny1) {
      properties_initialized_SpanText_kt_kccny1 = true;
      SpanTextStyle = CssStyle_0(VOID, SpanTextStyle$lambda);
    }
  }
  function get_LocalDeferred() {
    _init_properties_Deferred_kt__im2yn();
    return LocalDeferred;
  }
  var LocalDeferred;
  function DeferredComposablesState$forEach$lambda($tmp0_rcvr, $render, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.s33($render, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function DeferredComposablesState() {
    this.p33_1 = -1;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.q33_1 = ArrayList_init_$Create$();
    this.r33_1 = mutableStateListOf();
  }
  protoOf(DeferredComposablesState).s33 = function (render, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.y1i(2018041013);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.m1h(render) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.m1h(this) ? 32 : 16);
    if ($composer_0.r1i(!(($dirty & 19) === 18), $dirty & 1)) {
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = this.r33_1.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        render(element, $composer_0, 112 & $dirty << 3);
      }
    } else {
      $composer_0.w19();
    }
    var tmp1_safe_receiver = $composer_0.z1i();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.d1o(DeferredComposablesState$forEach$lambda(this, render, $changed));
    }
  };
  function DeferringHost(content, $composer, $changed) {
    _init_properties_Deferred_kt__im2yn();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.y1i(1578083138);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.m1h(content) ? 4 : 2);
    if ($composer_0.r1i(!(($dirty & 3) === 2), $dirty & 1)) {
      var state = new DeferredComposablesState();
      var tmp = get_LocalDeferred().y1n(state);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-2083084670, true, DeferringHost$lambda(content, state), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.z16(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.y1h();
      var tmp_0;
      if (invalid || it === Companion_getInstance().f1a_1) {
        var value = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.j1i(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      CompositionLocalProvider(tmp, tmp0, $composer_0, 48 | androidx_compose_runtime_ProvidedValue$stableprop_getter());
    } else {
      $composer_0.w19();
    }
    var tmp0_safe_receiver = $composer_0.z1i();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d1o(DeferringHost$lambda_0(content, $changed));
    }
  }
  function ComposableLambda$invoke$ref_0(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.q2a(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$DeferredKt$lambda$431504263$lambda(entry, $composer, $changed) {
    var $composer_0 = $composer;
    var tmp0_safe_receiver = entry.t33_1;
    if (tmp0_safe_receiver == null) {
      $composer_0.p1g(106674529);
      $composer_0.r1g();
    } else {
      $composer_0.p1g(106674530);
      // Inline function 'kotlin.let' call
      DeferringHost(tmp0_safe_receiver, $composer_0, 0);
      $composer_0.r1g();
    }
    return Unit_instance;
  }
  function ComposableSingletons$DeferredKt() {
    ComposableSingletons$DeferredKt_instance = this;
    var tmp = this;
    tmp.v33_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(431504263, false, ComposableSingletons$DeferredKt$lambda$431504263$lambda));
  }
  var ComposableSingletons$DeferredKt_instance;
  function ComposableSingletons$DeferredKt_getInstance() {
    if (ComposableSingletons$DeferredKt_instance == null)
      new ComposableSingletons$DeferredKt();
    return ComposableSingletons$DeferredKt_instance;
  }
  function LocalDeferred$lambda() {
    _init_properties_Deferred_kt__im2yn();
    // Inline function 'kotlin.error' call
    var message = 'Attempting to defer rendering without calling `DeferringHost`, a required pre-requisite.';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function DeferringHost$lambda($content, $state) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.r1i(!(($changed & 3) === 2), $changed & 1)) {
        $content($composer_0, 0);
        $state.s33(ComposableSingletons$DeferredKt_getInstance().v33_1, $composer_0, 6);
        tmp = Unit_instance;
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
  function DeferringHost$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      DeferringHost($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var properties_initialized_Deferred_kt_1ab2bj;
  function _init_properties_Deferred_kt__im2yn() {
    if (!properties_initialized_Deferred_kt_1ab2bj) {
      properties_initialized_Deferred_kt_1ab2bj = true;
      LocalDeferred = staticCompositionLocalOf(LocalDeferred$lambda);
    }
  }
  function set_additionalSilkInitialization(_set____db54di) {
    _init_properties_InitSilk_kt__vukue3();
    additionalSilkInitialization = _set____db54di;
  }
  function get_additionalSilkInitialization() {
    _init_properties_InitSilk_kt__vukue3();
    return additionalSilkInitialization;
  }
  var additionalSilkInitialization;
  var com_varabyte_kobweb_silk_init_InitSilkContext$stable;
  function InitSilkContext(config, stylesheet, theme) {
    this.w33_1 = config;
    this.x33_1 = stylesheet;
    this.y33_1 = theme;
  }
  function initSilk(additionalInit) {
    var tmp;
    if (additionalInit === VOID) {
      tmp = initSilk$lambda;
    } else {
      tmp = additionalInit;
    }
    additionalInit = tmp;
    _init_properties_InitSilk_kt__vukue3();
    var mutableTheme = new MutableSilkTheme();
    var config = new MutableSilkConfig();
    mutableTheme.r34('silk-span-text', get_SpanTextStyle());
    var ctx = new InitSilkContext(config, SilkStylesheetInstance_getInstance(), mutableTheme);
    additionalInit(ctx);
    get_additionalSilkInitialization()(ctx);
    set_MutableSilkConfigInstance(config);
    set__SilkTheme(new ImmutableSilkTheme(mutableTheme));
    get_SilkTheme().x34(SilkStylesheetInstance_getInstance());
    SilkStylesheetInstance_getInstance().b35(SilkStyleSheet_getInstance());
    get_SilkTheme().c35(SilkStyleSheet_getInstance());
    // Inline function 'kotlin.run' call
    var registeredCssLayers = toSet(SilkStylesheetInstance_getInstance().a35_1.f35());
    var finalCssLayers = getLayersWithCompat(Companion_getInstance_1().h35_1, registeredCssLayers);
    var _destruct__k2r9zo = to(finalCssLayers, minus(finalCssLayers, registeredCssLayers));
    var finalCssLayers_0 = _destruct__k2r9zo.af();
    var compatCssLayers = _destruct__k2r9zo.bf();
    // Inline function 'kotlin.run' call
    $l$block: {
      if (compatCssLayers.r()) {
        break $l$block;
      }
      // Inline function 'kotlin.check' call
      if (!Companion_getInstance_1().h35_1.equals(ColorModeStrategy_BOTH_getInstance())) {
        throw IllegalStateException_init_$Create$('Check failed.');
      }
      var tmp_0 = SilkStyleSheet_getInstance();
      scope(tmp_0, '*', VOID, initSilk$lambda_0(compatCssLayers));
    }
    var tmp_1 = window;
    invokeLater(tmp_1, initSilk$lambda_1(finalCssLayers_0));
  }
  function get_localStyleSheets(_this__u8e3s4) {
    _init_properties_InitSilk_kt__vukue3();
    // Inline function 'kotlin.collections.filterIsInstance' call
    var tmp0 = asList(_this__u8e3s4.styleSheets);
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      if (element instanceof CSSStyleSheet) {
        destination.e(element);
      }
    }
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$();
    var _iterator__ex2g4s_0 = destination.g();
    while (_iterator__ex2g4s_0.h()) {
      var element_0 = _iterator__ex2g4s_0.i();
      if (element_0.href == null) {
        destination_0.e(element_0);
      }
    }
    return destination_0;
  }
  function additionalSilkInitialization$lambda(it) {
    _init_properties_InitSilk_kt__vukue3();
    return Unit_instance;
  }
  function initSilk$lambda(it) {
    _init_properties_InitSilk_kt__vukue3();
    return Unit_instance;
  }
  function initSilk$lambda$lambda($this$layer) {
    _init_properties_InitSilk_kt__vukue3();
    $this$layer.r2m(':scope', initSilk$lambda$lambda$lambda);
    return Unit_instance;
  }
  function initSilk$lambda$lambda$lambda($this$style) {
    _init_properties_InitSilk_kt__vukue3();
    $this$style.t2l('all', 'revert-layer');
    return Unit_instance;
  }
  function initSilk$lambda_0($compatCssLayers) {
    return function ($this$scope) {
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = $compatCssLayers.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        layer($this$scope, element, initSilk$lambda$lambda);
      }
      return Unit_instance;
    };
  }
  function initSilk$lambda$lambda_0(it) {
    _init_properties_InitSilk_kt__vukue3();
    return asSequence(asList(it.cssRules));
  }
  function initSilk$lambda$lambda_1(it) {
    _init_properties_InitSilk_kt__vukue3();
    return it instanceof CSSLayerBlockRule;
  }
  function initSilk$lambda$lambda_2(it) {
    _init_properties_InitSilk_kt__vukue3();
    return it.name;
  }
  function initSilk$lambda$lambda_3(it) {
    _init_properties_InitSilk_kt__vukue3();
    return '"' + it + '"';
  }
  function initSilk$lambda_1($finalCssLayers) {
    return function () {
      // Inline function 'kotlin.run' call
      var tmp = asSequence(get_localStyleSheets(document));
      // Inline function 'kotlin.sequences.filterIsInstance' call
      var this_0 = flatMap(tmp, initSilk$lambda$lambda_0);
      var tmp_0 = filter(this_0, initSilk$lambda$lambda_1);
      var tmp_1 = isInterface(tmp_0, Sequence) ? tmp_0 : THROW_CCE();
      var referencedCssLayers = toSet_0(map(tmp_1, initSilk$lambda$lambda_2));
      var unregisteredLayers = subtract(referencedCssLayers, $finalCssLayers);
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!unregisteredLayers.r()) {
        var tmp_2 = console;
        var tmp_3 = sorted(unregisteredLayers);
        tmp_2.warn(trimIndent('\n                        One or more CSS layer(s) were referenced in code but not registered.\n                        \n                        Please add initialization to your project like:\n                        ```\n                        @InitSilk\n                        fun initSilk(ctx: InitSilkContext) {\n                           ctx.stylesheet.cssLayers.add(' + joinToString(tmp_3, VOID, VOID, VOID, VOID, VOID, initSilk$lambda$lambda_3) + ')\n                        }\n                        ```\n                        (but change the order of the layers to match your desired priority).\n                        \n                        If you are not the developer of this website, consider reporting this message to them.\n                    '));
      }
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = get_localStyleSheets(document).g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        element.insertRule('@layer ' + joinToString($finalCssLayers) + ';', 0);
      }
      return Unit_instance;
    };
  }
  var properties_initialized_InitSilk_kt_8x89gn;
  function _init_properties_InitSilk_kt__vukue3() {
    if (!properties_initialized_InitSilk_kt_8x89gn) {
      properties_initialized_InitSilk_kt_8x89gn = true;
      additionalSilkInitialization = additionalSilkInitialization$lambda;
      com_varabyte_kobweb_silk_init_InitSilkContext$stable = 8;
    }
  }
  function set_MutableSilkConfigInstance(_set____db54di) {
    _init_properties_SilkConfig_kt__z9kok7();
    MutableSilkConfigInstance = _set____db54di;
  }
  function get_MutableSilkConfigInstance() {
    _init_properties_SilkConfig_kt__z9kok7();
    return MutableSilkConfigInstance;
  }
  var MutableSilkConfigInstance;
  var com_varabyte_kobweb_silk_init_MutableSilkConfig$stable;
  function MutableSilkConfig() {
    this.i35_1 = ColorMode_LIGHT_getInstance();
  }
  protoOf(MutableSilkConfig).j35 = function () {
    return this.i35_1;
  };
  function Companion() {
  }
  protoOf(Companion).b2y = function () {
    return get_MutableSilkConfigInstance();
  };
  var Companion_instance_3;
  function Companion_getInstance_0() {
    return Companion_instance_3;
  }
  var properties_initialized_SilkConfig_kt_bfwaef;
  function _init_properties_SilkConfig_kt__z9kok7() {
    if (!properties_initialized_SilkConfig_kt_bfwaef) {
      properties_initialized_SilkConfig_kt_bfwaef = true;
      MutableSilkConfigInstance = new MutableSilkConfig();
      com_varabyte_kobweb_silk_init_MutableSilkConfig$stable = 8;
    }
  }
  var com_varabyte_kobweb_silk_init_CssStyleRegistrarImpl_Entry$stable;
  var com_varabyte_kobweb_silk_init_SilkStylesheetInstance$stable;
  function registerStyleBase(_this__u8e3s4, cssSelector, init) {
    _this__u8e3s4.k35(cssSelector, registerStyleBase$lambda(init));
  }
  function assertNoAttributeModifiers($this, _this__u8e3s4, selectorName) {
    var simpleStyleScope = new SilkStylesheetInstance$assertNoAttributeModifiers$simpleStyleScope$1();
    _this__u8e3s4(simpleStyleScope);
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = simpleStyleScope.m35_1.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      assertNoAttributes(element, selectorName, SilkStylesheetInstance$assertNoAttributeModifiers$lambda(selectorName));
    }
  }
  function SilkStylesheetInstance$assertNoAttributeModifiers$simpleStyleScope$1() {
    StyleScope.call(this);
  }
  function SilkStylesheetInstance$assertNoAttributeModifiers$lambda($selectorName) {
    return function () {
      return 'Please search your `@InitSilk` code for a line like `ctx.stylesheet.registerStyle("' + $selectorName + '")` and remove the offending attribute(s).';
    };
  }
  function SilkStylesheetInstance$registerStyle$lambda($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.p1g(-1866964764);
    $composer_0.r1g();
    return Companion_instance;
  }
  function SilkStylesheetInstance() {
    SilkStylesheetInstance_instance = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.y34_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.z34_1 = LinkedHashMap_init_$Create$();
    this.a35_1 = new LayerListBuilder();
  }
  protoOf(SilkStylesheetInstance).k35 = function (cssSelector, init) {
    this.y34_1.e(new SimpleCssStyle(cssSelector, init, SilkStylesheetInstance$registerStyle$lambda, null));
  };
  protoOf(SilkStylesheetInstance).r35 = function (name, build) {
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = this.z34_1;
    // Inline function 'kotlin.require' call
    if (!!(isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).f2(name)) {
      var message = 'User is registering duplicate keyframe name: ' + name;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.set' call
    this.z34_1.l2(name, build);
  };
  protoOf(SilkStylesheetInstance).b35 = function (siteStyleSheet) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = this.y34_1.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      var tmp = SilkStylesheetInstance_getInstance();
      var tmp_0 = element.s35_1;
      assertNoAttributeModifiers(tmp, typeof tmp_0 === 'function' ? tmp_0 : THROW_CCE(), element.w35_1);
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = this.y34_1.g();
    while (_iterator__ex2g4s_0.h()) {
      var element_0 = _iterator__ex2g4s_0.i();
      element_0.y35(siteStyleSheet);
    }
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.z34_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(this_0.j());
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_1 = this_0.k2().g();
    while (_iterator__ex2g4s_1.h()) {
      var item = _iterator__ex2g4s_1.i();
      // Inline function 'kotlin.collections.component1' call
      var name = item.d2();
      // Inline function 'kotlin.collections.component2' call
      var build = item.e2();
      // Inline function 'kotlin.apply' call
      var this_1 = new KeyframesBuilder(ColorMode_LIGHT_getInstance());
      build(this_1);
      var lightBuilder = this_1;
      // Inline function 'kotlin.apply' call
      var this_2 = new KeyframesBuilder(ColorMode_DARK_getInstance());
      build(this_2);
      var darkBuilder = this_2;
      if (lightBuilder.equals(darkBuilder)) {
        lightBuilder.b36(siteStyleSheet, name);
      } else {
        var ident = new CssIdent(name);
        lightBuilder.b36(siteStyleSheet, suffixedWith(ident, ColorMode_LIGHT_getInstance()).xu_1);
        darkBuilder.b36(siteStyleSheet, suffixedWith(ident, ColorMode_DARK_getInstance()).xu_1);
      }
      destination.e(Unit_instance);
    }
  };
  var SilkStylesheetInstance_instance;
  function SilkStylesheetInstance_getInstance() {
    if (SilkStylesheetInstance_instance == null)
      new SilkStylesheetInstance();
    return SilkStylesheetInstance_instance;
  }
  function registerStyleBase$lambda$lambda($init) {
    return function () {
      return $init();
    };
  }
  function registerStyleBase$lambda($init) {
    return function ($this$registerStyle) {
      $this$registerStyle.n35(registerStyleBase$lambda$lambda($init));
      return Unit_instance;
    };
  }
  function get_CSSScopeSupport() {
    _init_properties_ColorModeStrategy_kt__fbrwlj();
    return CSSScopeSupport;
  }
  var CSSScopeSupport;
  var ColorModeStrategy_SCOPE_instance;
  var ColorModeStrategy_SUFFIX_instance;
  var ColorModeStrategy_BOTH_instance;
  function Companion_0() {
    Companion_instance_4 = this;
    this.g35_1 = (new URLSearchParams(window.location.search)).get('_kobwebColorModeStrategy');
    var tmp = this;
    var tmp_0;
    if (!get_CSSScopeSupport()) {
      tmp_0 = ColorModeStrategy_SUFFIX_getInstance();
    } else {
      var tmp0 = get_entries();
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s = tmp0.g();
        while (_iterator__ex2g4s.h()) {
          var element = _iterator__ex2g4s.i();
          if (element.o2_1 === Companion_getInstance_1().g35_1) {
            tmp$ret$1 = element;
            break $l$block;
          }
        }
        tmp$ret$1 = null;
      }
      var tmp0_elvis_lhs = tmp$ret$1;
      tmp_0 = tmp0_elvis_lhs == null ? ColorModeStrategy_SCOPE_getInstance() : tmp0_elvis_lhs;
    }
    tmp.h35_1 = tmp_0;
  }
  var Companion_instance_4;
  function Companion_getInstance_1() {
    ColorModeStrategy_initEntries();
    if (Companion_instance_4 == null)
      new Companion_0();
    return Companion_instance_4;
  }
  function values() {
    return [ColorModeStrategy_SCOPE_getInstance(), ColorModeStrategy_SUFFIX_getInstance(), ColorModeStrategy_BOTH_getInstance()];
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var ColorModeStrategy_entriesInitialized;
  function ColorModeStrategy_initEntries() {
    if (ColorModeStrategy_entriesInitialized)
      return Unit_instance;
    ColorModeStrategy_entriesInitialized = true;
    ColorModeStrategy_SCOPE_instance = new ColorModeStrategy('SCOPE', 0);
    ColorModeStrategy_SUFFIX_instance = new ColorModeStrategy('SUFFIX', 1);
    ColorModeStrategy_BOTH_instance = new ColorModeStrategy('BOTH', 2);
    Companion_getInstance_1();
  }
  var $ENTRIES;
  function ColorModeStrategy(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function get_useScope(_this__u8e3s4) {
    _init_properties_ColorModeStrategy_kt__fbrwlj();
    return !_this__u8e3s4.equals(ColorModeStrategy_SUFFIX_getInstance());
  }
  function suffixedStyleLayer(_this__u8e3s4, layer) {
    _init_properties_ColorModeStrategy_kt__fbrwlj();
    var tmp;
    switch (_this__u8e3s4.p2_1) {
      case 0:
      case 1:
        tmp = layer;
        break;
      case 2:
        var tmp_0;
        if (layer == null) {
          tmp_0 = null;
        } else {
          // Inline function 'kotlin.let' call
          tmp_0 = layer + '-compat';
        }

        tmp = tmp_0;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function getLayersWithCompat(_this__u8e3s4, layers) {
    _init_properties_ColorModeStrategy_kt__fbrwlj();
    var tmp;
    switch (_this__u8e3s4.p2_1) {
      case 0:
      case 1:
        tmp = toList(layers);
        break;
      case 2:
        // Inline function 'kotlin.collections.flatMap' call

        // Inline function 'kotlin.collections.flatMapTo' call

        var destination = ArrayList_init_$Create$();
        var _iterator__ex2g4s = layers.g();
        while (_iterator__ex2g4s.h()) {
          var element = _iterator__ex2g4s.i();
          var list = listOfNotNull([suffixedStyleLayer(_this__u8e3s4, element), element]);
          addAll(destination, list);
        }

        tmp = destination;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function ColorModeStrategy_SCOPE_getInstance() {
    ColorModeStrategy_initEntries();
    return ColorModeStrategy_SCOPE_instance;
  }
  function ColorModeStrategy_SUFFIX_getInstance() {
    ColorModeStrategy_initEntries();
    return ColorModeStrategy_SUFFIX_instance;
  }
  function ColorModeStrategy_BOTH_getInstance() {
    ColorModeStrategy_initEntries();
    return ColorModeStrategy_BOTH_instance;
  }
  var properties_initialized_ColorModeStrategy_kt_cflytl;
  function _init_properties_ColorModeStrategy_kt__fbrwlj() {
    if (!properties_initialized_ColorModeStrategy_kt_cflytl) {
      properties_initialized_ColorModeStrategy_kt_cflytl = true;
      CSSScopeSupport = typeof CSSScopeRule != 'undefined';
    }
  }
  var com_varabyte_kobweb_silk_style_CssRule_OfMedia$stable;
  var com_varabyte_kobweb_silk_style_CssRule_NonMediaCssRule$stable;
  var com_varabyte_kobweb_silk_style_CssRule_OfAttributeSelector$stable;
  var com_varabyte_kobweb_silk_style_CssRule_OfPseudoClass$stable;
  var com_varabyte_kobweb_silk_style_CssRule_OfPseudoElement$stable;
  var com_varabyte_kobweb_silk_style_CssRule_CompositeOpen$stable;
  var com_varabyte_kobweb_silk_style_CssRule_CompositeClosed$stable;
  var com_varabyte_kobweb_silk_style_CssRule$stable;
  function Companion_1() {
  }
  protoOf(Companion_1).c36 = function (pseudoClass, params) {
    // Inline function 'kotlin.collections.mapNotNull' call
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var destination = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var inductionVariable = 0;
    var last = params.length;
    while (inductionVariable < last) {
      var element = params[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp0_safe_receiver = element.e36();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        destination.e(tmp0_safe_receiver);
      }
    }
    return new OfPseudoClass(pseudoClass + '(' + joinToString(destination) + ')');
  };
  var Companion_instance_5;
  function Companion_getInstance_2() {
    return Companion_instance_5;
  }
  function NonMediaCssRule() {
    CssRule.call(this);
  }
  function OfAttributeSelector(attributeSelector) {
    NonMediaCssRule.call(this);
    this.j36_1 = attributeSelector;
  }
  protoOf(OfAttributeSelector).e36 = function () {
    return this.h36(listOf(this), emptyList(), null);
  };
  function OfPseudoClass(pseudoClass) {
    NonMediaCssRule.call(this);
    this.l36_1 = pseudoClass;
  }
  protoOf(OfPseudoClass).e36 = function () {
    return this.h36(emptyList(), listOf(this), null);
  };
  protoOf(OfPseudoClass).m36 = function (other) {
    return new CompositeOpen(null, emptyList(), listOf_0([this, other]));
  };
  function OfPseudoElement(pseudoElement) {
    NonMediaCssRule.call(this);
    this.o36_1 = pseudoElement;
  }
  protoOf(OfPseudoElement).e36 = function () {
    return this.h36(emptyList(), emptyList(), this);
  };
  function CompositeOpen(mediaQuery, attributeSelectors, pseudoClasses) {
    NonMediaCssRule.call(this);
    this.q36_1 = mediaQuery;
    this.r36_1 = attributeSelectors;
    this.s36_1 = pseudoClasses;
  }
  protoOf(CompositeOpen).g36 = function () {
    return this.q36_1;
  };
  protoOf(CompositeOpen).e36 = function () {
    return this.h36(this.r36_1, this.s36_1, null);
  };
  function CssRule() {
    this.d36_1 = null;
  }
  protoOf(CssRule).f36 = function (target, createModifier) {
    target.o35(this.g36(), this.e36(), createModifier);
  };
  protoOf(CssRule).g36 = function () {
    return this.d36_1;
  };
  protoOf(CssRule).e36 = function () {
    return null;
  };
  protoOf(CssRule).h36 = function (attributeSelectors, pseudoClasses, pseudoElement) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = attributeSelectors.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      this_0.c8('[' + element.j36_1 + ']');
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = pseudoClasses.g();
    while (_iterator__ex2g4s_0.h()) {
      var element_0 = _iterator__ex2g4s_0.i();
      this_0.c8(':' + element_0.l36_1);
    }
    if (!(pseudoElement == null)) {
      this_0.c8('::' + pseudoElement.o36_1);
    }
    // Inline function 'kotlin.takeIf' call
    var this_1 = this_0.toString();
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(this_1) > 0) {
      tmp = this_1;
    } else {
      tmp = null;
    }
    return tmp;
  };
  var com_varabyte_kobweb_silk_style_CssStyle_Restricted_Base$stable;
  var com_varabyte_kobweb_silk_style_CssStyle_Restricted$stable;
  var com_varabyte_kobweb_silk_style_CssStyle$stable;
  var com_varabyte_kobweb_silk_style_SimpleCssStyle$stable;
  var com_varabyte_kobweb_silk_style_ExtendingCssStyle$stable;
  var com_varabyte_kobweb_silk_style_ImmutableCssStyle$stable;
  var com_varabyte_kobweb_silk_style_CssStyleScope$stable;
  var com_varabyte_kobweb_silk_style_CssStyleBaseScope$stable;
  var com_varabyte_kobweb_silk_style_StyleGroup_Light$stable;
  var com_varabyte_kobweb_silk_style_StyleGroup_Dark$stable;
  var com_varabyte_kobweb_silk_style_StyleGroup_ColorAgnostic$stable;
  var com_varabyte_kobweb_silk_style_StyleGroup_ColorAware$stable;
  function Base_init_$Init$(init, extraModifier, $this) {
    var tmp;
    if (extraModifier === VOID) {
      tmp = CssStyle$Restricted$Base$_init_$lambda_wfn4zd_1;
    } else {
      tmp = extraModifier;
    }
    extraModifier = tmp;
    Base.call($this, CssStyle$Restricted$Base$_init_$lambda_wfn4zd_2(init), extraModifier);
    return $this;
  }
  function CssStyle$Restricted$Base$_init_$lambda_wfn4zd($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.p1g(-589847720);
    $composer_0.r1g();
    return Companion_instance;
  }
  function CssStyle$Restricted$Base$_init_$lambda$lambda_7ly36($init, $this) {
    return function () {
      return $init(new CssStyleBaseScope($this.v36_1));
    };
  }
  function CssStyle$Restricted$Base$_init_$lambda_wfn4zd_0($init) {
    return function (_this__u8e3s4) {
      _this__u8e3s4.n35(CssStyle$Restricted$Base$_init_$lambda$lambda_7ly36($init, _this__u8e3s4));
      return Unit_instance;
    };
  }
  function CssStyle$Restricted$Base$_init_$lambda_wfn4zd_1($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.p1g(1583284929);
    $composer_0.r1g();
    return Companion_instance;
  }
  function CssStyle$Restricted$Base$_init_$lambda_wfn4zd_2($init) {
    return function (_this__u8e3s4) {
      return $init;
    };
  }
  function Base(init, extraModifier) {
    var tmp;
    if (extraModifier === VOID) {
      tmp = CssStyle$Restricted$Base$_init_$lambda_wfn4zd;
    } else {
      tmp = extraModifier;
    }
    extraModifier = tmp;
    Restricted.call(this, CssStyle$Restricted$Base$_init_$lambda_wfn4zd_0(init), extraModifier);
  }
  function CssStyle$Restricted$_init_$lambda_tv1gbe($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.p1g(-941642769);
    $composer_0.r1g();
    return Companion_instance;
  }
  function Restricted(init, extraModifier) {
    var tmp;
    if (extraModifier === VOID) {
      tmp = CssStyle$Restricted$_init_$lambda_tv1gbe;
    } else {
      tmp = extraModifier;
    }
    extraModifier = tmp;
    CssStyle.call(this, init, extraModifier);
  }
  function addStyles($this, _this__u8e3s4, cssRule, styles) {
    _this__u8e3s4.r2m(cssRule, CssStyle$addStyles$lambda(styles));
  }
  function withSuffixedSelectorName($this, selectorBaseName, group, handler) {
    if (group instanceof Light)
      handler(withSuffixedSelectorName$suffixedWith(selectorBaseName, ColorMode_LIGHT_getInstance()), group.c37_1);
    else {
      if (group instanceof Dark)
        handler(withSuffixedSelectorName$suffixedWith(selectorBaseName, ColorMode_DARK_getInstance()), group.b37_1);
      else {
        if (group instanceof ColorAgnostic)
          handler(selectorBaseName, group.a37_1);
        else {
          if (group instanceof ColorAware) {
            handler(withSuffixedSelectorName$suffixedWith(selectorBaseName, ColorMode_LIGHT_getInstance()), group.y36_1);
            handler(withSuffixedSelectorName$suffixedWith(selectorBaseName, ColorMode_DARK_getInstance()), group.z36_1);
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
    }
  }
  function withColorModeScope($this, _this__u8e3s4, selector, group, handler) {
    var inScopeSelector = ':where(&)' + selector + ', ' + selector;
    if (group instanceof Light) {
      var tmp = ColorMode_LIGHT_getInstance();
      withColorModeScope$scope(_this__u8e3s4, tmp, CssStyle$withColorModeScope$lambda(handler, inScopeSelector, group));
    } else {
      if (group instanceof Dark) {
        var tmp_0 = ColorMode_DARK_getInstance();
        withColorModeScope$scope(_this__u8e3s4, tmp_0, CssStyle$withColorModeScope$lambda_0(handler, inScopeSelector, group));
      } else {
        if (group instanceof ColorAgnostic) {
          if (!($this instanceof SimpleCssStyle)) {
            var tmp_1 = get_entries_2();
            var tmp_2 = joinToString(tmp_1, ', ', VOID, VOID, VOID, VOID, CssStyle$withColorModeScope$lambda_1);
            scope(_this__u8e3s4, tmp_2, VOID, CssStyle$withColorModeScope$lambda_2(handler, inScopeSelector, group));
          } else {
            handler(_this__u8e3s4, selector, group.a37_1);
          }
        } else {
          if (group instanceof ColorAware) {
            var tmp_3 = ColorMode_LIGHT_getInstance();
            withColorModeScope$scope(_this__u8e3s4, tmp_3, CssStyle$withColorModeScope$lambda_3(handler, inScopeSelector, group));
            var tmp_4 = ColorMode_DARK_getInstance();
            withColorModeScope$scope(_this__u8e3s4, tmp_4, CssStyle$withColorModeScope$lambda_4(handler, inScopeSelector, group));
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
    }
  }
  function mergeCssModifiers($this, _this__u8e3s4, init) {
    // Inline function 'kotlin.apply' call
    init(_this__u8e3s4);
    // Inline function 'kotlin.collections.groupBy' call
    var tmp0 = _this__u8e3s4.m35_1;
    // Inline function 'kotlin.collections.groupByTo' call
    var destination = LinkedHashMap_init_$Create$();
    var _iterator__ex2g4s = tmp0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      var key = element.d2();
      // Inline function 'kotlin.collections.getOrPut' call
      var value = destination.h2(key);
      var tmp;
      if (value == null) {
        var answer = ArrayList_init_$Create$();
        destination.l2(key, answer);
        tmp = answer;
      } else {
        tmp = value;
      }
      var list = tmp;
      list.e(element);
    }
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination_0 = LinkedHashMap_init_$Create$_0(mapCapacity(destination.j()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s_0 = destination.k2().g();
    while (_iterator__ex2g4s_0.h()) {
      var element_0 = _iterator__ex2g4s_0.i();
      var tmp_0 = element_0.d2();
      // Inline function 'kotlin.collections.component2' call
      var group = element_0.e2();
      // Inline function 'kotlin.collections.reduce' call
      var iterator = group.g();
      if (!iterator.h())
        throw UnsupportedOperationException_init_$Create$("Empty collection can't be reduced.");
      var accumulator = iterator.i();
      while (iterator.h()) {
        var tmp0_0 = accumulator;
        var curr = iterator.i();
        accumulator = tmp0_0.g37(curr);
      }
      var tmp$ret$10 = accumulator;
      destination_0.l2(tmp_0, tmp$ret$10);
    }
    return destination_0;
  }
  function assertNoAttributeModifiers_0($this, _this__u8e3s4, selectorName, layer) {
    // Inline function 'kotlin.collections.onEach' call
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = _this__u8e3s4.k2().g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'kotlin.collections.component2' call
      var cssModifier = element.e2();
      assertNoAttributes(cssModifier, selectorName, CssStyle$assertNoAttributeModifiers$lambda(layer));
    }
    return _this__u8e3s4;
  }
  function Companion_2() {
  }
  var Companion_instance_6;
  function Companion_getInstance_3() {
    return Companion_instance_6;
  }
  function withSuffixedSelectorName$suffixedWith(_this__u8e3s4, colorMode) {
    var tmp0_safe_receiver = Companion_instance_1.wu(removePrefix(_this__u8e3s4, '.'));
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : suffixedWith(tmp0_safe_receiver, colorMode);
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.xu_1;
    var tmp;
    if (tmp2_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = '.' + tmp2_safe_receiver;
    }
    var tmp3_elvis_lhs = tmp;
    return tmp3_elvis_lhs == null ? _this__u8e3s4 : tmp3_elvis_lhs;
  }
  function withColorModeScope$scope($this_withColorModeScope, colorMode, rulesBuild) {
    scope($this_withColorModeScope, '.' + get_cssClass(colorMode), '.' + get_cssClass(colorMode.i33()), rulesBuild);
  }
  function addStylesInto$mediaOrInPlace(_this__u8e3s4, query, rulesBuild) {
    if (query == null) {
      // Inline function 'kotlin.apply' call
      rulesBuild(_this__u8e3s4);
    } else {
      media(_this__u8e3s4, query, rulesBuild);
    }
  }
  function addStylesInto$layerOrInPlace(_this__u8e3s4, name, rulesBuild) {
    if (name == null) {
      // Inline function 'kotlin.apply' call
      rulesBuild(_this__u8e3s4);
    } else {
      layer(_this__u8e3s4, name, rulesBuild);
    }
  }
  function addStylesInto$registerSuffixedStyle(group) {
    var tmp;
    switch (Companion_getInstance_1().h35_1.p2_1) {
      case 0:
        tmp = false;
        break;
      case 1:
        tmp = true;
        break;
      case 2:
        tmp = !(group instanceof ColorAgnostic);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function CssStyle$_init_$lambda_598xul($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.p1g(2126113218);
    $composer_0.r1g();
    return Companion_instance;
  }
  function CssStyle$addStyles$lambda($styles) {
    return function ($this$style) {
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = $styles.c2q_1.k2().g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        $this$style.t2l(element.d2(), element.e2());
      }
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s_0 = $styles.d2q_1.k2().g();
      while (_iterator__ex2g4s_0.h()) {
        var element_0 = _iterator__ex2g4s_0.i();
        $this$style.y2l(element_0.d2(), element_0.e2());
      }
      return Unit_instance;
    };
  }
  function CssStyle$withColorModeScope$lambda($handler, $inScopeSelector, $group) {
    return function ($this$scope) {
      $handler($this$scope, $inScopeSelector, $group.c37_1);
      return Unit_instance;
    };
  }
  function CssStyle$withColorModeScope$lambda_0($handler, $inScopeSelector, $group) {
    return function ($this$scope) {
      $handler($this$scope, $inScopeSelector, $group.b37_1);
      return Unit_instance;
    };
  }
  function CssStyle$withColorModeScope$lambda_1(it) {
    return '.' + get_cssClass(it);
  }
  function CssStyle$withColorModeScope$lambda_2($handler, $inScopeSelector, $group) {
    return function ($this$scope) {
      $handler($this$scope, $inScopeSelector, $group.a37_1);
      return Unit_instance;
    };
  }
  function CssStyle$withColorModeScope$lambda_3($handler, $inScopeSelector, $group) {
    return function ($this$scope) {
      $handler($this$scope, $inScopeSelector, $group.y36_1);
      return Unit_instance;
    };
  }
  function CssStyle$withColorModeScope$lambda_4($handler, $inScopeSelector, $group) {
    return function ($this$scope) {
      $handler($this$scope, $inScopeSelector, $group.z36_1);
      return Unit_instance;
    };
  }
  function CssStyle$assertNoAttributeModifiers$lambda($layer) {
    return function () {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      var styleDeclaration = $layer === SilkLayer_COMPONENT_VARIANTS_getInstance().j37_1 ? 'val SomeExampleVariant = ExampleStyle.addVariant' : $layer === SilkLayer_COMPONENT_STYLES_getInstance().j37_1 ? 'val ExampleStyle = CssStyle<ExampleKind>' : 'val ExampleStyle = CssStyle';
      // Inline function 'kotlin.text.appendLine' call
      var value = 'Please move Modifiers associated with attributes to the `extraModifier` parameter.';
      // Inline function 'kotlin.text.appendLine' call
      this_0.c8(value).d8(_Char___init__impl__6a9atx(10));
      // Inline function 'kotlin.text.appendLine' call
      this_0.d8(_Char___init__impl__6a9atx(10));
      // Inline function 'kotlin.text.appendLine' call
      var value_0 = 'An example of how to fix this (e.g. if the offending attribute was `tab-index`):';
      // Inline function 'kotlin.text.appendLine' call
      this_0.c8(value_0).d8(_Char___init__impl__6a9atx(10));
      // Inline function 'kotlin.text.appendLine' call
      var value_1 = trimMargin('\n                        |   // Before\n                        |   ' + styleDeclaration + ' {\n                        |       base {\n                        |          Modifier\n                        |              .backgroundColor(Colors.Magenta))\n                        |              .tabIndex(0) // <-- The offending attribute modifier\n                        |       }\n                        |   }\n                        |\n                        |   // After\n                        |   ' + styleDeclaration + '(extraModifier = Modifier.tabIndex(0)) {\n                        |       base {\n                        |           Modifier.backgroundColor(Colors.Magenta)\n                        |       }\n                        |   }\n                        ');
      // Inline function 'kotlin.text.appendLine' call
      this_0.c8(value_1).d8(_Char___init__impl__6a9atx(10));
      return this_0.toString();
    };
  }
  function CssStyle$addStylesInto$lambda$lambda(this$0, $selector, $styles) {
    return function ($this$layerOrInPlace) {
      addStyles(this$0, $this$layerOrInPlace, $selector, $styles);
      return Unit_instance;
    };
  }
  function CssStyle$addStylesInto$lambda($layer, this$0) {
    return function ($this$withColorModeScope, selector, styles) {
      var tmp;
      if (isNotEmpty(styles)) {
        addStylesInto$layerOrInPlace($this$withColorModeScope, $layer, CssStyle$addStylesInto$lambda$lambda(this$0, selector, styles));
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function CssStyle$addStylesInto$lambda$lambda_0(this$0, $name, $styles) {
    return function ($this$layerOrInPlace) {
      addStyles(this$0, $this$layerOrInPlace, $name, $styles);
      return Unit_instance;
    };
  }
  function CssStyle$addStylesInto$lambda_0($classNames, $styleSheet, $layer, this$0) {
    return function (name, styles) {
      var tmp;
      if (isNotEmpty(styles)) {
        $classNames.e(name);
        var tmp_0 = suffixedStyleLayer(Companion_getInstance_1().h35_1, $layer);
        addStylesInto$layerOrInPlace($styleSheet, tmp_0, CssStyle$addStylesInto$lambda$lambda_0(this$0, name, styles));
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function CssStyle$addStylesInto$lambda$lambda$lambda(this$0, $selector, $styles) {
    return function ($this$layerOrInPlace) {
      addStyles(this$0, $this$layerOrInPlace, $selector, $styles);
      return Unit_instance;
    };
  }
  function CssStyle$addStylesInto$lambda$lambda_1($layer, this$0, $selector, $styles) {
    return function ($this$mediaOrInPlace) {
      addStylesInto$layerOrInPlace($this$mediaOrInPlace, $layer, CssStyle$addStylesInto$lambda$lambda$lambda(this$0, $selector, $styles));
      return Unit_instance;
    };
  }
  function CssStyle$addStylesInto$lambda_1($cssRuleKey, $layer, this$0) {
    return function ($this$withColorModeScope, selector, styles) {
      var tmp;
      if (isNotEmpty(styles)) {
        addStylesInto$mediaOrInPlace($this$withColorModeScope, $cssRuleKey.k37_1, CssStyle$addStylesInto$lambda$lambda_1($layer, this$0, selector, styles));
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function CssStyle$addStylesInto$lambda$lambda$lambda_0(this$0, $cssRule, $styles) {
    return function ($this$layerOrInPlace) {
      addStyles(this$0, $this$layerOrInPlace, $cssRule, $styles);
      return Unit_instance;
    };
  }
  function CssStyle$addStylesInto$lambda$lambda_2($layer, this$0, $cssRule, $styles) {
    return function ($this$mediaOrInPlace) {
      var tmp = suffixedStyleLayer(Companion_getInstance_1().h35_1, $layer);
      addStylesInto$layerOrInPlace($this$mediaOrInPlace, tmp, CssStyle$addStylesInto$lambda$lambda$lambda_0(this$0, $cssRule, $styles));
      return Unit_instance;
    };
  }
  function CssStyle$addStylesInto$lambda_2($classNames, $cssRuleKey, $styleSheet, $layer, this$0) {
    return function (name, styles) {
      var tmp;
      if (isNotEmpty(styles)) {
        $classNames.e(name);
        // Inline function 'kotlin.text.orEmpty' call
        var tmp0_elvis_lhs = $cssRuleKey.l37_1;
        var cssRule = name + (tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs);
        addStylesInto$mediaOrInPlace($styleSheet, $cssRuleKey.k37_1, CssStyle$addStylesInto$lambda$lambda_2($layer, this$0, cssRule, styles));
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function CssStyle(init, extraModifier) {
    var tmp;
    if (extraModifier === VOID) {
      tmp = CssStyle$_init_$lambda_598xul;
    } else {
      tmp = extraModifier;
    }
    extraModifier = tmp;
    this.s35_1 = init;
    this.t35_1 = extraModifier;
  }
  protoOf(CssStyle).w36 = function (selector, styleSheet, layer) {
    var classNames = mutableListOf([selector]);
    var lightModifiers = assertNoAttributeModifiers_0(this, mergeCssModifiers(this, new CssStyleScope(ColorMode_LIGHT_getInstance()), this.s35_1), selector, layer);
    var darkModifiers = assertNoAttributeModifiers_0(this, mergeCssModifiers(this, new CssStyleScope(ColorMode_DARK_getInstance()), this.s35_1), selector, layer);
    var lightStyleSheet = StyleSheet_init_$Create$();
    var darkStylesSheet = StyleSheet_init_$Create$();
    var tmp = Companion_instance_7;
    var tmp0_safe_receiver = lightModifiers.h2(Companion_getInstance_5().m37_1);
    var tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.d37_1;
    var tmp1_safe_receiver = darkModifiers.h2(Companion_getInstance_5().m37_1);
    var tmp2_safe_receiver = tmp.n37(tmp_0, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.d37_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      if (get_useScope(Companion_getInstance_1().h35_1)) {
        withColorModeScope(this, styleSheet, selector, tmp2_safe_receiver, CssStyle$addStylesInto$lambda(layer, this));
      }
      if (addStylesInto$registerSuffixedStyle(tmp2_safe_receiver)) {
        withSuffixedSelectorName(this, selector, tmp2_safe_receiver, CssStyle$addStylesInto$lambda_0(classNames, styleSheet, layer, this));
      }
    }
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = plus(lightModifiers.i2(), darkModifiers.i2());
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      if (!element.equals(Companion_getInstance_5().m37_1)) {
        destination.e(element);
      }
    }
    var allCssRuleKeys = destination;
    var _iterator__ex2g4s_0 = allCssRuleKeys.g();
    $l$loop: while (_iterator__ex2g4s_0.h()) {
      var cssRuleKey = _iterator__ex2g4s_0.i();
      var tmp_1 = Companion_instance_7;
      var tmp3_safe_receiver = lightModifiers.h2(cssRuleKey);
      var tmp_2 = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.d37_1;
      var tmp4_safe_receiver = darkModifiers.h2(cssRuleKey);
      var tmp5_elvis_lhs = tmp_1.n37(tmp_2, tmp4_safe_receiver == null ? null : tmp4_safe_receiver.d37_1);
      var tmp_3;
      if (tmp5_elvis_lhs == null) {
        continue $l$loop;
      } else {
        tmp_3 = tmp5_elvis_lhs;
      }
      var group = tmp_3;
      if (get_useScope(Companion_getInstance_1().h35_1)) {
        // Inline function 'kotlin.text.orEmpty' call
        var tmp0_elvis_lhs = cssRuleKey.l37_1;
        var tmp_4 = selector + (tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs);
        withColorModeScope(this, styleSheet, tmp_4, group, CssStyle$addStylesInto$lambda_1(cssRuleKey, layer, this));
      }
      if (addStylesInto$registerSuffixedStyle(group)) {
        withSuffixedSelectorName(this, selector, group, CssStyle$addStylesInto$lambda_2(classNames, cssRuleKey, styleSheet, layer, this));
      }
    }
    if (get_useScope(Companion_getInstance_1().h35_1)) {
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!lightStyleSheet.n2m().r()) {
        styleSheet.m2l(new CSSScopeRuleDeclaration('.' + get_cssClass(ColorMode_LIGHT_getInstance()), '.' + get_cssClass(ColorMode_DARK_getInstance()), lightStyleSheet.n2m()));
      }
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!darkStylesSheet.n2m().r()) {
        styleSheet.m2l(new CSSScopeRuleDeclaration('.' + get_cssClass(ColorMode_DARK_getInstance()), '.' + get_cssClass(ColorMode_LIGHT_getInstance()), darkStylesSheet.n2m()));
      }
    }
    return _ClassSelectors___init__impl__tbnzdx(classNames);
  };
  protoOf(CssStyle).x36 = function (classSelectors) {
    return new ImmutableCssStyle(classSelectors, this.t35_1);
  };
  function CssStyle_0(extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_instance : extraModifier;
    _init_properties_CssStyle_kt__srbhji();
    return new CssStyle$3(init, extraModifier);
  }
  function CssStyleScope(colorMode) {
    StyleScope.call(this);
    this.v36_1 = colorMode;
  }
  function ComponentKind() {
  }
  function RestrictedKind() {
  }
  function CssStyleBaseScope(colorMode) {
    this.q37_1 = colorMode;
  }
  function Light(styles) {
    this.c37_1 = styles;
  }
  function Dark(styles) {
    this.b37_1 = styles;
  }
  function ColorAgnostic(styles) {
    this.a37_1 = styles;
  }
  function ColorAware(lightStyles, darkStyles) {
    this.y36_1 = lightStyles;
    this.z36_1 = darkStyles;
  }
  function Companion_3() {
  }
  protoOf(Companion_3).n37 = function (lightModifiers, darkModifiers) {
    var tmp;
    if (lightModifiers == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.apply' call
      var this_0 = new ComparableStyleScope();
      toStyles(lightModifiers)(this_0);
      tmp = this_0;
    }
    var lightStyles = tmp;
    var tmp_0;
    if (darkModifiers == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.apply' call
      var this_1 = new ComparableStyleScope();
      toStyles(darkModifiers)(this_1);
      tmp_0 = this_1;
    }
    var darkStyles = tmp_0;
    if (lightStyles == null && darkStyles == null)
      return null;
    if (!(lightStyles == null) && darkStyles == null)
      return new Light(lightStyles);
    if (lightStyles == null && !(darkStyles == null))
      return new Dark(darkStyles);
    // Inline function 'kotlin.check' call
    if (!(!(lightStyles == null) && !(darkStyles == null))) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    var tmp_1;
    if (equals(lightStyles, darkStyles)) {
      tmp_1 = new ColorAgnostic(lightStyles);
    } else {
      tmp_1 = new ColorAware(lightStyles, darkStyles);
    }
    return tmp_1;
  };
  var Companion_instance_7;
  function Companion_getInstance_4() {
    return Companion_instance_7;
  }
  function SimpleCssStyle(selector, init, extraModifier, layer) {
    CssStyle.call(this, init, extraModifier);
    this.w35_1 = selector;
    this.x35_1 = layer;
  }
  protoOf(SimpleCssStyle).y35 = function (styleSheet) {
    return this.w36(this.w35_1, styleSheet, this.x35_1);
  };
  function _ClassSelectors___init__impl__tbnzdx(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function _ClassSelectors___get_classNames__impl__eyto04($this) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = _get_value__a43j40($this);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      var tmp$ret$0 = substringAfterLast(item, _Char___init__impl__6a9atx(46));
      destination.e(tmp$ret$0);
    }
    return destination;
  }
  function ImmutableCssStyle(classSelectors, extraModifier) {
    this.r37_1 = extraModifier;
    this.s37_1 = toSet(_ClassSelectors___get_classNames__impl__eyto04(classSelectors));
  }
  protoOf(ImmutableCssStyle).t37 = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.p1g(-1357649873);
    // Inline function 'kotlin.collections.filterNot' call
    var tmp0 = this.s37_1;
    // Inline function 'kotlin.collections.filterNotTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      if (!isSuffixedWith(new CssIdent(element), Companion_instance_10.f33($composer_0, 6).i33())) {
        destination.e(element);
      }
    }
    $composer_0.r1g();
    var currentClassNames = destination;
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!currentClassNames.r()) {
      var tmp_0 = Companion_instance;
      // Inline function 'kotlin.collections.toTypedArray' call
      var tmp$ret$4 = copyToArray(currentClassNames);
      tmp = classNames(tmp_0, tmp$ret$4.slice());
    } else {
      tmp = Companion_instance;
    }
    return tmp.c30(this.r37_1($composer_0, 0));
  };
  function GeneralKind() {
  }
  function ExtendingCssStyle() {
  }
  function toModifier(_this__u8e3s4, $composer, $changed) {
    _init_properties_CssStyle_kt__srbhji();
    var $composer_0 = $composer;
    return _toModifier(_this__u8e3s4, $composer_0, 14 & $changed);
  }
  function _toModifier(_this__u8e3s4, $composer, $changed) {
    _init_properties_CssStyle_kt__srbhji();
    var $composer_0 = $composer;
    var tmp0_safe_receiver = get_SilkTheme().w34_1.h2(_this__u8e3s4);
    var tmp;
    if (tmp0_safe_receiver == null) {
      $composer_0.p1g(4842712);
      $composer_0.r1g();
      tmp = null;
    } else {
      $composer_0.p1g(554345545);
      var tmp1_group = tmp0_safe_receiver.t37($composer_0, 0);
      $composer_0.r1g();
      tmp = tmp1_group;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var message = 'Failed to convert a CssStyle to a modifier. Double check that the style was declared at the top-level of your file or registered manually via an `@InitSilk` method.';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  }
  function toModifier_0(_this__u8e3s4, variants, $composer, $changed) {
    _init_properties_CssStyle_kt__srbhji();
    var $composer_0 = $composer;
    var tmp = _toModifier(_this__u8e3s4, $composer_0, 14 & $changed);
    var tmp0_safe_receiver = combine(toList_0(variants));
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      $composer_0.p1g(-303420220);
      $composer_0.r1g();
      tmp_0 = null;
    } else {
      $composer_0.p1g(-2087997731);
      var tmp1_group = tmp0_safe_receiver.u37($composer_0, 0);
      $composer_0.r1g();
      tmp_0 = tmp1_group;
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp.c30(tmp1_elvis_lhs == null ? Companion_instance : tmp1_elvis_lhs);
  }
  function base(_this__u8e3s4, extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_instance : extraModifier;
    _init_properties_CssStyle_kt__srbhji();
    return base_2(_this__u8e3s4, base$lambda(extraModifier), init);
  }
  function CssStyle_1(extraModifier, init) {
    _init_properties_CssStyle_kt__srbhji();
    return new CssStyle$6(init, extraModifier);
  }
  function com_varabyte_kobweb_silk_style_CssStyle_Restricted_Base$stableprop_getter() {
    return com_varabyte_kobweb_silk_style_CssStyle_Restricted_Base$stable;
  }
  function base_0(_this__u8e3s4, extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_instance : extraModifier;
    _init_properties_CssStyle_kt__srbhji();
    return base_1(_this__u8e3s4, base$lambda_0(extraModifier), init);
  }
  function base_1(_this__u8e3s4, extraModifier, init) {
    _init_properties_CssStyle_kt__srbhji();
    return new base$5(extraModifier, init);
  }
  function com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter() {
    return com_varabyte_kobweb_silk_style_CssStyle$stable;
  }
  function CssStyle_2(extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_instance : extraModifier;
    _init_properties_CssStyle_kt__srbhji();
    return new CssStyle$7(init, extraModifier);
  }
  function base_2(_this__u8e3s4, extraModifier, init) {
    _init_properties_CssStyle_kt__srbhji();
    return CssStyle_1(extraModifier, base$lambda_1(init));
  }
  function toModifier_1(_this__u8e3s4, $composer, $changed) {
    _init_properties_CssStyle_kt__srbhji();
    var $composer_0 = $composer;
    return _toModifier(_this__u8e3s4, $composer_0, 14 & $changed);
  }
  function CssStyle$o$_init_$lambda_60e9n6($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.p1g(-256215983);
      var tmp0 = $extraModifier;
      $composer_0.r1g();
      return tmp0;
    };
  }
  function CssStyle$3($init, $extraModifier) {
    CssStyle.call(this, $init, CssStyle$o$_init_$lambda_60e9n6($extraModifier));
  }
  function base$lambda($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.p1g(-2139862911);
      var tmp0 = $extraModifier;
      $composer_0.r1g();
      return tmp0;
    };
  }
  function CssStyle$6($init, $extraModifier) {
    CssStyle.call(this, $init, $extraModifier);
  }
  function base$lambda_0($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.p1g(-2139862911);
      var tmp0 = $extraModifier;
      $composer_0.r1g();
      return tmp0;
    };
  }
  function base$o$_init_$lambda$lambda_d0jdie($this, $init) {
    return function () {
      var tmp0 = new CssStyleBaseScope($this.v36_1);
      // Inline function 'kotlin.let' call
      return $init(tmp0);
    };
  }
  function base$o$_init_$lambda_5dljwv($init) {
    return function (_this__u8e3s4) {
      _this__u8e3s4.n35(base$o$_init_$lambda$lambda_d0jdie(_this__u8e3s4, $init));
      return Unit_instance;
    };
  }
  function base$5($extraModifier, $init) {
    CssStyle.call(this, base$o$_init_$lambda_5dljwv($init), $extraModifier);
  }
  function CssStyle$o$_init_$lambda_60e9n6_0($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.p1g(-256215983);
      var tmp0 = $extraModifier;
      $composer_0.r1g();
      return tmp0;
    };
  }
  function CssStyle$7($init, $extraModifier) {
    CssStyle.call(this, $init, CssStyle$o$_init_$lambda_60e9n6_0($extraModifier));
  }
  function base$lambda$lambda($this_CssStyle, $init) {
    return function () {
      var tmp0 = new CssStyleBaseScope($this_CssStyle.v36_1);
      // Inline function 'kotlin.let' call
      return $init(tmp0);
    };
  }
  function base$lambda_1($init) {
    return function ($this$CssStyle) {
      $this$CssStyle.n35(base$lambda$lambda($this$CssStyle, $init));
      return Unit_instance;
    };
  }
  var properties_initialized_CssStyle_kt_y9xggg;
  function _init_properties_CssStyle_kt__srbhji() {
    if (!properties_initialized_CssStyle_kt_y9xggg) {
      properties_initialized_CssStyle_kt_y9xggg = true;
      com_varabyte_kobweb_silk_style_CssStyle_Restricted_Base$stable = 0;
      com_varabyte_kobweb_silk_style_CssStyle_Restricted$stable = 0;
      com_varabyte_kobweb_silk_style_CssStyle$stable = 0;
      com_varabyte_kobweb_silk_style_SimpleCssStyle$stable = 0;
      com_varabyte_kobweb_silk_style_ExtendingCssStyle$stable = 0;
      com_varabyte_kobweb_silk_style_ImmutableCssStyle$stable = 8;
      com_varabyte_kobweb_silk_style_CssStyleScope$stable = 8;
      com_varabyte_kobweb_silk_style_CssStyleBaseScope$stable = 0;
      com_varabyte_kobweb_silk_style_StyleGroup_Light$stable = com_varabyte_kobweb_compose_css_ComparableStyleScope$stableprop_getter();
      com_varabyte_kobweb_silk_style_StyleGroup_Dark$stable = com_varabyte_kobweb_compose_css_ComparableStyleScope$stableprop_getter();
      com_varabyte_kobweb_silk_style_StyleGroup_ColorAgnostic$stable = com_varabyte_kobweb_compose_css_ComparableStyleScope$stableprop_getter();
      com_varabyte_kobweb_silk_style_StyleGroup_ColorAware$stable = com_varabyte_kobweb_compose_css_ComparableStyleScope$stableprop_getter() | com_varabyte_kobweb_compose_css_ComparableStyleScope$stableprop_getter();
    }
  }
  var com_varabyte_kobweb_silk_style_CssStyleVariant$stable;
  var com_varabyte_kobweb_silk_style_SimpleCssStyleVariant$stable;
  var com_varabyte_kobweb_silk_style_ExtendingCssStyleVariant$stable;
  function CssStyleVariant() {
  }
  protoOf(CssStyleVariant).v37 = function (next) {
    return new CompositeCssStyleVariant(this, next);
  };
  function SimpleCssStyleVariant_init_$Init$(init, extraModifier, baseStyle, $this) {
    SimpleCssStyleVariant.call($this, new SimpleCssStyleVariant$1(init, extraModifier), baseStyle);
    return $this;
  }
  function SimpleCssStyleVariant_init_$Create$(init, extraModifier, baseStyle) {
    return SimpleCssStyleVariant_init_$Init$(init, extraModifier, baseStyle, objectCreate(protoOf(SimpleCssStyleVariant)));
  }
  function SimpleCssStyleVariant$1($init, $extraModifier) {
    CssStyle.call(this, $init, $extraModifier);
  }
  function SimpleCssStyleVariant(cssStyle, baseStyle) {
    CssStyleVariant.call(this);
    this.w37_1 = cssStyle;
    this.x37_1 = baseStyle;
  }
  protoOf(SimpleCssStyleVariant).u37 = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.p1g(-1935545974);
    var tmp0 = toModifier_0(this.w37_1, [], $composer_0, 0);
    $composer_0.r1g();
    return tmp0;
  };
  function ExtendingCssStyleVariant() {
  }
  function addVariant(_this__u8e3s4, extraModifier, init) {
    return new SimpleCssStyleVariant(new addVariant$1(init, extraModifier), _this__u8e3s4);
  }
  function CompositeCssStyleVariant(head, tail) {
    CssStyleVariant.call(this);
    this.y37_1 = head;
    this.z37_1 = tail;
  }
  protoOf(CompositeCssStyleVariant).u37 = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.p1g(1761922567);
    var tmp0 = this.y37_1.u37($composer_0, 0).c30(this.z37_1.u37($composer_0, 0));
    $composer_0.r1g();
    return tmp0;
  };
  function combine(_this__u8e3s4) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.collections.reduceOrNull' call
      var iterator = _this__u8e3s4.g();
      if (!iterator.h()) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var accumulator = iterator.i();
      while (iterator.h()) {
        var tmp0 = accumulator;
        var variant = iterator.i();
        var tmp;
        if (!(tmp0 == null) && !(variant == null)) {
          tmp = tmp0.v37(variant);
        } else {
          tmp = tmp0 == null ? variant : tmp0;
        }
        accumulator = tmp;
      }
      tmp$ret$0 = accumulator;
    }
    return tmp$ret$0;
  }
  function addVariant_0(_this__u8e3s4, extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_instance : extraModifier;
    return addVariant(_this__u8e3s4, addVariant$lambda(extraModifier), init);
  }
  function com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() {
    return com_varabyte_kobweb_silk_style_CssStyleVariant$stable;
  }
  function addVariantBase(_this__u8e3s4, extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_instance : extraModifier;
    return addVariantBase_0(_this__u8e3s4, addVariantBase$lambda(extraModifier), init);
  }
  function addVariantBase_0(_this__u8e3s4, extraModifier, init) {
    return SimpleCssStyleVariant_init_$Create$(addVariantBase$lambda_0(init), extraModifier, _this__u8e3s4);
  }
  function addVariant$1($init, $extraModifier) {
    CssStyle.call(this, $init, $extraModifier);
  }
  function addVariant$lambda($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.p1g(1967918819);
      var tmp0 = $extraModifier;
      $composer_0.r1g();
      return tmp0;
    };
  }
  function addVariantBase$lambda($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.p1g(754846533);
      var tmp0 = $extraModifier;
      $composer_0.r1g();
      return tmp0;
    };
  }
  function addVariantBase$lambda$lambda($this_SimpleCssStyleVariant, $init) {
    return function () {
      var tmp0 = new CssStyleBaseScope($this_SimpleCssStyleVariant.v36_1);
      // Inline function 'kotlin.let' call
      return $init(tmp0);
    };
  }
  function addVariantBase$lambda_0($init) {
    return function ($this$SimpleCssStyleVariant) {
      $this$SimpleCssStyleVariant.n35(addVariantBase$lambda$lambda($this$SimpleCssStyleVariant, $init));
      return Unit_instance;
    };
  }
  function get_selectorSeparators() {
    _init_properties_StyleScope_kt__rik58j();
    return selectorSeparators;
  }
  var selectorSeparators;
  var com_varabyte_kobweb_silk_style_StyleScope$stable;
  var com_varabyte_kobweb_silk_style_CssModifier_Key$stable;
  var com_varabyte_kobweb_silk_style_CssModifier$stable;
  function StyleScope() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.l35_1 = ArrayList_init_$Create$();
    this.m35_1 = this.l35_1;
  }
  protoOf(StyleScope).n35 = function (createModifier) {
    this.l35_1.e(new CssModifier(createModifier()));
  };
  protoOf(StyleScope).o35 = function (mediaQuery, suffix, createModifier) {
    this.l35_1.e(new CssModifier(createModifier(), mediaQuery, suffix));
  };
  protoOf(StyleScope).p35 = function (suffix, createModifier) {
    this.l35_1.e(new CssModifier(createModifier(), null, suffix));
  };
  protoOf(StyleScope).q35 = function (mediaQuery, createModifier) {
    this.l35_1.e(new CssModifier(createModifier(), mediaQuery));
  };
  protoOf(StyleScope).o37 = function (_this__u8e3s4, createModifier) {
    this.q35(_this__u8e3s4.a38(), createModifier);
  };
  protoOf(StyleScope).p37 = function (_this__u8e3s4, createModifier) {
    _this__u8e3s4.f36(this, createModifier);
  };
  function Companion_4() {
    Companion_instance_8 = this;
    this.m37_1 = new Key(null, null);
  }
  var Companion_instance_8;
  function Companion_getInstance_5() {
    if (Companion_instance_8 == null)
      new Companion_4();
    return Companion_instance_8;
  }
  function Key(mediaQuery, suffix) {
    this.k37_1 = mediaQuery;
    this.l37_1 = suffix;
  }
  protoOf(Key).toString = function () {
    return 'Key(mediaQuery=' + this.k37_1 + ', suffix=' + this.l37_1 + ')';
  };
  protoOf(Key).hashCode = function () {
    var result = this.k37_1 == null ? 0 : getStringHashCode(this.k37_1);
    result = imul(result, 31) + (this.l37_1 == null ? 0 : getStringHashCode(this.l37_1)) | 0;
    return result;
  };
  protoOf(Key).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Key))
      return false;
    var tmp0_other_with_cast = other instanceof Key ? other : THROW_CCE();
    if (!(this.k37_1 == tmp0_other_with_cast.k37_1))
      return false;
    if (!(this.l37_1 == tmp0_other_with_cast.l37_1))
      return false;
    return true;
  };
  function CssModifier(modifier, mediaQuery, suffix) {
    Companion_getInstance_5();
    mediaQuery = mediaQuery === VOID ? null : mediaQuery;
    suffix = suffix === VOID ? null : suffix;
    this.d37_1 = modifier;
    this.e37_1 = mediaQuery;
    var tmp = this;
    var tmp_0;
    if (suffix == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      var tmp_1;
      // Inline function 'kotlin.text.isNotBlank' call
      if (!isBlank(suffix)) {
        tmp_1 = suffix;
      } else {
        tmp_1 = null;
      }
      tmp_0 = tmp_1;
    }
    var tmp1_safe_receiver = tmp_0;
    var tmp_2;
    if (tmp1_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_2 = !get_selectorSeparators().o(new Char(first(tmp1_safe_receiver))) ? ' ' + tmp1_safe_receiver : tmp1_safe_receiver;
    }
    tmp.f37_1 = tmp_2;
  }
  protoOf(CssModifier).g37 = function (other) {
    // Inline function 'kotlin.check' call
    if (!(!(this === other) && equals(this.e37_1, other.e37_1) && this.f37_1 == other.f37_1)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    return new CssModifier(this.d37_1.c30(other.d37_1), this.e37_1, this.f37_1);
  };
  protoOf(CssModifier).d2 = function () {
    var tmp0_safe_receiver = this.e37_1;
    return new Key(tmp0_safe_receiver == null ? null : toString(tmp0_safe_receiver), this.f37_1);
  };
  function assertNoAttributes(_this__u8e3s4, selectorName, lazyExtraContext) {
    _init_properties_StyleScope_kt__rik58j();
    var attrsScope = ComparableAttrsScope_init_$Create$();
    toAttrs(_this__u8e3s4.d37_1)(attrsScope);
    if (attrsScope.m2p_1.r())
      return Unit_instance;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.text.appendLine' call
    var value = 'Style block declarations cannot contain Modifiers that specify attributes. Only style modifiers are allowed here.';
    // Inline function 'kotlin.text.appendLine' call
    this_0.c8(value).d8(_Char___init__impl__6a9atx(10));
    // Inline function 'kotlin.text.appendLine' call
    this_0.d8(_Char___init__impl__6a9atx(10));
    // Inline function 'kotlin.text.appendLine' call
    var value_0 = 'Details:';
    // Inline function 'kotlin.text.appendLine' call
    this_0.c8(value_0).d8(_Char___init__impl__6a9atx(10));
    this_0.c8('\tCSS rule: ');
    this_0.c8('"' + selectorName);
    if (!(_this__u8e3s4.e37_1 == null)) {
      this_0.b8(_this__u8e3s4.e37_1);
    }
    if (!(_this__u8e3s4.f37_1 == null)) {
      this_0.c8(_this__u8e3s4.f37_1);
    }
    // Inline function 'kotlin.text.appendLine' call
    // Inline function 'kotlin.text.appendLine' call
    this_0.c8('"').d8(_Char___init__impl__6a9atx(10));
    var tmp = attrsScope.m2p_1.i2();
    // Inline function 'kotlin.text.appendLine' call
    var value_1 = '\tAttribute(s): ' + joinToString(tmp, ', ', VOID, VOID, VOID, VOID, assertNoAttributes$lambda);
    // Inline function 'kotlin.text.appendLine' call
    this_0.c8(value_1).d8(_Char___init__impl__6a9atx(10));
    // Inline function 'kotlin.text.appendLine' call
    this_0.d8(_Char___init__impl__6a9atx(10));
    // Inline function 'kotlin.text.appendLine' call
    var value_2 = lazyExtraContext();
    // Inline function 'kotlin.text.appendLine' call
    this_0.c8(value_2).d8(_Char___init__impl__6a9atx(10));
    // Inline function 'kotlin.error' call
    var message = this_0.toString();
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function assertNoAttributes$lambda(it) {
    _init_properties_StyleScope_kt__rik58j();
    return '"' + it + '"';
  }
  var properties_initialized_StyleScope_kt_8wepyz;
  function _init_properties_StyleScope_kt__rik58j() {
    if (!properties_initialized_StyleScope_kt_8wepyz) {
      properties_initialized_StyleScope_kt_8wepyz = true;
      selectorSeparators = setOf([new Char(_Char___init__impl__6a9atx(32)), new Char(_Char___init__impl__6a9atx(62)), new Char(_Char___init__impl__6a9atx(43)), new Char(_Char___init__impl__6a9atx(126)), new Char(_Char___init__impl__6a9atx(46)), new Char(_Char___init__impl__6a9atx(58)), new Char(_Char___init__impl__6a9atx(44)), new Char(_Char___init__impl__6a9atx(91))]);
      com_varabyte_kobweb_silk_style_StyleScope$stable = 8;
      com_varabyte_kobweb_silk_style_CssModifier_Key$stable = 0;
      com_varabyte_kobweb_silk_style_CssModifier$stable = 8;
    }
  }
  var com_varabyte_kobweb_silk_style_animation_KeyframesBuilder$stable;
  var com_varabyte_kobweb_silk_style_animation_Keyframes$stable;
  function _get_comparableKeyframeStyles__erog4h($this) {
    // Inline function 'kotlin.collections.mapValues' call
    var this_0 = $this.a36_1;
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination = LinkedHashMap_init_$Create$_0(mapCapacity(this_0.j()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s = this_0.k2().g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      var tmp = element.d2();
      // Inline function 'kotlin.collections.component2' call
      var modifier = element.e2();
      // Inline function 'kotlin.apply' call
      var this_1 = new ComparableStyleScope();
      toStyles(modifier)(this_1);
      destination.l2(tmp, this_1);
    }
    return destination;
  }
  function KeyframesBuilder(colorMode) {
    this.z35_1 = colorMode;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.a36_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(KeyframesBuilder).b38 = function (createStyle) {
    var tmp0 = this.a36_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var pair = to(From_getInstance(), createStyle());
    tmp0.l2(pair.ye_1, pair.ze_1);
  };
  protoOf(KeyframesBuilder).c38 = function (createStyle) {
    var tmp0 = this.a36_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var pair = to(To_getInstance(), createStyle());
    tmp0.l2(pair.ye_1, pair.ze_1);
  };
  protoOf(KeyframesBuilder).equals = function (other) {
    if (!(other instanceof KeyframesBuilder))
      return false;
    return this === other || equals(_get_comparableKeyframeStyles__erog4h(this), _get_comparableKeyframeStyles__erog4h(other));
  };
  protoOf(KeyframesBuilder).hashCode = function () {
    return hashCode(_get_comparableKeyframeStyles__erog4h(this));
  };
  protoOf(KeyframesBuilder).b36 = function (stylesheet, keyframesName) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.a36_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(this_0.j());
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this_0.k2().g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'kotlin.collections.component1' call
      var keyframe = item.d2();
      // Inline function 'kotlin.collections.component2' call
      var modifier = item.e2();
      var styles = toStyles(modifier);
      var cssRuleBuilder = new StyleScopeBuilder();
      styles(cssRuleBuilder);
      var tmp$ret$3 = new CSSKeyframeRuleDeclaration(keyframe, cssRuleBuilder);
      destination.e(tmp$ret$3);
    }
    var keyframeRules = destination;
    stylesheet.m2l(new CSSKeyframesRuleDeclaration(keyframesName, keyframeRules));
  };
  function Companion_5() {
  }
  protoOf(Companion_5).d38 = function (build) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = listOf_0([ColorMode_LIGHT_getInstance(), ColorMode_DARK_getInstance()]);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'kotlin.apply' call
      var this_1 = new KeyframesBuilder(item);
      build(this_1);
      destination.e(this_1);
    }
    // Inline function 'kotlin.collections.count' call
    return distinct(destination).j() === 1;
  };
  var Companion_instance_9;
  function Companion_getInstance_6() {
    return Companion_instance_9;
  }
  function Keyframes$usesColorMode$delegate$lambda(this$0) {
    return function () {
      return !Companion_instance_9.d38(this$0.e38_1);
    };
  }
  function Keyframes(init) {
    this.e38_1 = init;
    var tmp = this;
    tmp.f38_1 = lazy(Keyframes$usesColorMode$delegate$lambda(this));
  }
  var com_varabyte_kobweb_silk_style_breakpoint_Breakpoint_Range$stable;
  var Breakpoint_ZERO_instance;
  var Breakpoint_SM_instance;
  var Breakpoint_MD_instance;
  var Breakpoint_LG_instance;
  var Breakpoint_XL_instance;
  function values_0() {
    return [Breakpoint_ZERO_getInstance(), Breakpoint_SM_getInstance(), Breakpoint_MD_getInstance(), Breakpoint_LG_getInstance(), Breakpoint_XL_getInstance()];
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var Breakpoint_entriesInitialized;
  function Breakpoint_initEntries() {
    if (Breakpoint_entriesInitialized)
      return Unit_instance;
    Breakpoint_entriesInitialized = true;
    Breakpoint_ZERO_instance = new Breakpoint('ZERO', 0);
    Breakpoint_SM_instance = new Breakpoint('SM', 1);
    Breakpoint_MD_instance = new Breakpoint('MD', 2);
    Breakpoint_LG_instance = new Breakpoint('LG', 3);
    Breakpoint_XL_instance = new Breakpoint('XL', 4);
  }
  var $ENTRIES_0;
  function Breakpoint(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(Breakpoint).a38 = function () {
    return new MediaFeature('min-width', toWidth(this));
  };
  function Breakpoint_ZERO_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_ZERO_instance;
  }
  function Breakpoint_SM_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_SM_instance;
  }
  function Breakpoint_MD_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_MD_instance;
  }
  function Breakpoint_LG_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_LG_instance;
  }
  function Breakpoint_XL_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_XL_instance;
  }
  function SilkBreakpointDisplayStyles($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.y1i(1560920665);
    if ($composer_0.r1i(!($changed === 0), $changed & 1)) {
      GenericTag('style', null, ComposableSingletons$BreakpointConditionsKt_getInstance().i38_1, $composer_0, 390, 2);
    } else {
      $composer_0.w19();
    }
    var tmp0_safe_receiver = $composer_0.z1i();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d1o(SilkBreakpointDisplayStyles$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_2(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.q2a(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$BreakpointConditionsKt$lambda$321895361$lambda($this$GenericTag, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.m1h($this$GenericTag);
    // Inline function 'kotlin.let' call
    var it = $composer_0.y1h();
    var tmp;
    if (invalid || it === Companion_getInstance().f1a_1) {
      var value = ComposableSingletons$BreakpointConditionsKt$lambda$321895361$lambda$lambda($this$GenericTag);
      $composer_0.j1i(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    DisposableEffect(Unit_instance, tmp$ret$3, $composer_0, 6);
    return Unit_instance;
  }
  function _no_name_provided__qut3iv_0($cssStylesheet) {
    this.j38_1 = $cssStylesheet;
  }
  protoOf(_no_name_provided__qut3iv_0).pm = function () {
    var tmp0_safe_receiver = this.j38_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      clearCSSRules(tmp0_safe_receiver);
    }
  };
  function ComposableSingletons$BreakpointConditionsKt$lambda$321895361$lambda$lambda($this_GenericTag) {
    return function ($this$DisposableEffect) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = $this_GenericTag.n2n($this$DisposableEffect).sheet;
      var cssStylesheet = tmp instanceof CSSStyleSheet ? tmp : null;
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = get_entries_0().g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        var breakpointQuery = (new CSSMediaRuleDeclaration(element.a38(), emptyList())).f2l();
        var invertBreakpointQuery = (new CSSMediaRuleDeclaration(invert(element.a38()), emptyList())).f2l();
        if (cssStylesheet == null)
          null;
        else {
          // Inline function 'kotlin.text.lowercase' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp$ret$3 = element.o2_1.toLowerCase();
          addRule(cssStylesheet, invertBreakpointQuery + ' { .silk-display-if-at-least-' + tmp$ret$3 + ' { display: none !important; } }');
        }
        if (cssStylesheet == null)
          null;
        else {
          // Inline function 'kotlin.text.lowercase' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp$ret$5 = element.o2_1.toLowerCase();
          addRule(cssStylesheet, breakpointQuery + ' { .silk-display-until-' + tmp$ret$5 + ' { display: none !important; } }');
        }
      }
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv_0(cssStylesheet);
    };
  }
  function ComposableSingletons$BreakpointConditionsKt() {
    ComposableSingletons$BreakpointConditionsKt_instance = this;
    var tmp = this;
    tmp.i38_1 = ComposableLambda$invoke$ref_2(composableLambdaInstance(321895361, false, ComposableSingletons$BreakpointConditionsKt$lambda$321895361$lambda));
  }
  var ComposableSingletons$BreakpointConditionsKt_instance;
  function ComposableSingletons$BreakpointConditionsKt_getInstance() {
    if (ComposableSingletons$BreakpointConditionsKt_instance == null)
      new ComposableSingletons$BreakpointConditionsKt();
    return ComposableSingletons$BreakpointConditionsKt_instance;
  }
  function invert(_this__u8e3s4) {
    return new Raw('not all and ' + toString(_this__u8e3s4));
  }
  function addRule(_this__u8e3s4, cssRule) {
    var cssRuleIndex = _this__u8e3s4.insertRule(cssRule, _this__u8e3s4.cssRules.length);
    return _this__u8e3s4.cssRules.item(cssRuleIndex);
  }
  function clearCSSRules(_this__u8e3s4) {
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
  function SilkBreakpointDisplayStyles$lambda($$changed) {
    return function ($composer, $force) {
      SilkBreakpointDisplayStyles($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var com_varabyte_kobweb_silk_style_breakpoint_BreakpointUnitValue_Px$stable;
  var com_varabyte_kobweb_silk_style_breakpoint_BreakpointUnitValue_Em$stable;
  var com_varabyte_kobweb_silk_style_breakpoint_BreakpointUnitValue_Rem$stable;
  var com_varabyte_kobweb_silk_style_breakpoint_BreakpointUnitValue$stable;
  var com_varabyte_kobweb_silk_style_breakpoint_BreakpointValues$stable;
  function BreakpointValues(sm, md, lg, xl) {
    this.k38_1 = sm;
    this.l38_1 = md;
    this.m38_1 = lg;
    this.n38_1 = xl;
  }
  protoOf(BreakpointValues).toString = function () {
    return 'BreakpointValues(sm=' + toString(this.k38_1) + ', md=' + toString(this.l38_1) + ', lg=' + toString(this.m38_1) + ', xl=' + toString(this.n38_1) + ')';
  };
  protoOf(BreakpointValues).hashCode = function () {
    var result = hashCode(this.k38_1);
    result = imul(result, 31) + hashCode(this.l38_1) | 0;
    result = imul(result, 31) + hashCode(this.m38_1) | 0;
    result = imul(result, 31) + hashCode(this.n38_1) | 0;
    return result;
  };
  protoOf(BreakpointValues).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BreakpointValues))
      return false;
    var tmp0_other_with_cast = other instanceof BreakpointValues ? other : THROW_CCE();
    if (!equals(this.k38_1, tmp0_other_with_cast.k38_1))
      return false;
    if (!equals(this.l38_1, tmp0_other_with_cast.l38_1))
      return false;
    if (!equals(this.m38_1, tmp0_other_with_cast.m38_1))
      return false;
    if (!equals(this.n38_1, tmp0_other_with_cast.n38_1))
      return false;
    return true;
  };
  function BreakpointSizes(sm, md, lg, xl) {
    return new BreakpointValues(new Rem(sm), new Rem(md), new Rem(lg), new Rem(xl));
  }
  function Rem(value) {
    BreakpointUnitValue.call(this, value);
  }
  protoOf(Rem).p38 = function () {
    return get_px(this.q38_1.value * numberToDouble(get_bodyFontSize(window)));
  };
  function BreakpointUnitValue(width) {
    this.q38_1 = width;
  }
  function get_bodyFontSize(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.document.body;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = toIntOrNull(removeSuffix(_this__u8e3s4.getComputedStyle(tmp0_safe_receiver).getPropertyValue('font-size'), 'px'));
    }
    var bodySize = tmp;
    return bodySize == null ? 16 : bodySize;
  }
  var com_varabyte_kobweb_silk_style_breakpoint_ResponsiveValues$stable;
  function ResponsiveValues(base, sm, md, lg, xl) {
    this.r38_1 = base;
    this.s38_1 = sm;
    this.t38_1 = md;
    this.u38_1 = lg;
    this.v38_1 = xl;
  }
  function com_varabyte_kobweb_silk_style_breakpoint_ResponsiveValues$stableprop_getter() {
    return com_varabyte_kobweb_silk_style_breakpoint_ResponsiveValues$stable;
  }
  var com_varabyte_kobweb_silk_style_layer_LayerListBuilder$stable;
  function LayerListBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.d35_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.map' call
    var this_0 = get_entries_1();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      var tmp$ret$1 = item.j37_1;
      destination.e(tmp$ret$1);
    }
    tmp_0.e35_1 = destination;
  }
  protoOf(LayerListBuilder).f35 = function () {
    // Inline function 'kotlin.collections.orEmpty' call
    var tmp0_elvis_lhs = this.d35_1.h2(null);
    var tmp$ret$0 = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
    var layersToProcess = toMutableList(plus_0(this.e35_1, tmp$ret$0));
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$();
    $l$loop: while (true) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!!layersToProcess.r()) {
        break $l$loop;
      }
      var currLayer = layersToProcess.b2(0);
      this_0.e(currLayer);
      var tmp0_safe_receiver = this.d35_1.h2(currLayer);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        layersToProcess.w1(0, tmp0_safe_receiver);
      }
    }
    return this_0.i5();
  };
  var SilkLayer_RESET_instance;
  var SilkLayer_KOBWEB_COMPOSE_instance;
  var SilkLayer_BASE_instance;
  var SilkLayer_COMPONENT_STYLES_instance;
  var SilkLayer_COMPONENT_VARIANTS_instance;
  var SilkLayer_RESTRICTED_STYLES_instance;
  var SilkLayer_GENERAL_STYLES_instance;
  function values_1() {
    return [SilkLayer_RESET_getInstance(), SilkLayer_KOBWEB_COMPOSE_getInstance(), SilkLayer_BASE_getInstance(), SilkLayer_COMPONENT_STYLES_getInstance(), SilkLayer_COMPONENT_VARIANTS_getInstance(), SilkLayer_RESTRICTED_STYLES_getInstance(), SilkLayer_GENERAL_STYLES_getInstance()];
  }
  function get_entries_1() {
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_1());
    return $ENTRIES_1;
  }
  var SilkLayer_entriesInitialized;
  function SilkLayer_initEntries() {
    if (SilkLayer_entriesInitialized)
      return Unit_instance;
    SilkLayer_entriesInitialized = true;
    SilkLayer_RESET_instance = new SilkLayer('RESET', 0, 'reset');
    SilkLayer_KOBWEB_COMPOSE_instance = new SilkLayer('KOBWEB_COMPOSE', 1, 'kobweb-compose');
    SilkLayer_BASE_instance = new SilkLayer('BASE', 2, 'base');
    SilkLayer_COMPONENT_STYLES_instance = new SilkLayer('COMPONENT_STYLES', 3, 'component-styles');
    SilkLayer_COMPONENT_VARIANTS_instance = new SilkLayer('COMPONENT_VARIANTS', 4, 'component-variants');
    SilkLayer_RESTRICTED_STYLES_instance = new SilkLayer('RESTRICTED_STYLES', 5, 'restricted-styles');
    SilkLayer_GENERAL_STYLES_instance = new SilkLayer('GENERAL_STYLES', 6, 'general-styles');
  }
  var $ENTRIES_1;
  function SilkLayer(name, ordinal, layerName) {
    Enum.call(this, name, ordinal);
    this.j37_1 = layerName;
  }
  function SilkLayer_RESET_getInstance() {
    SilkLayer_initEntries();
    return SilkLayer_RESET_instance;
  }
  function SilkLayer_KOBWEB_COMPOSE_getInstance() {
    SilkLayer_initEntries();
    return SilkLayer_KOBWEB_COMPOSE_instance;
  }
  function SilkLayer_BASE_getInstance() {
    SilkLayer_initEntries();
    return SilkLayer_BASE_instance;
  }
  function SilkLayer_COMPONENT_STYLES_getInstance() {
    SilkLayer_initEntries();
    return SilkLayer_COMPONENT_STYLES_instance;
  }
  function SilkLayer_COMPONENT_VARIANTS_getInstance() {
    SilkLayer_initEntries();
    return SilkLayer_COMPONENT_VARIANTS_instance;
  }
  function SilkLayer_RESTRICTED_STYLES_getInstance() {
    SilkLayer_initEntries();
    return SilkLayer_RESTRICTED_STYLES_instance;
  }
  function SilkLayer_GENERAL_STYLES_getInstance() {
    SilkLayer_initEntries();
    return SilkLayer_GENERAL_STYLES_instance;
  }
  function descendants(_this__u8e3s4, elements, createModifier) {
    return _this__u8e3s4.p35(' :is(' + joinToString_0(elements) + ')', createModifier);
  }
  function get_ariaDisabled(_this__u8e3s4) {
    return new OfAttributeSelector('aria-disabled="true"');
  }
  function get_hover(_this__u8e3s4) {
    return new OfPseudoClass('hover');
  }
  function not(_this__u8e3s4, params) {
    return Companion_instance_5.c36('not', params.slice());
  }
  function get_active(_this__u8e3s4) {
    return new OfPseudoClass('active');
  }
  function get_focusVisible(_this__u8e3s4) {
    return new OfPseudoClass('focus-visible');
  }
  function get_placeholder(_this__u8e3s4) {
    return new OfPseudoElement('placeholder');
  }
  function get_ariaInvalid(_this__u8e3s4) {
    return new OfAttributeSelector('aria-invalid="true"');
  }
  function get_disabled(_this__u8e3s4) {
    return new OfPseudoClass('disabled');
  }
  function get_link(_this__u8e3s4) {
    return new OfPseudoClass('link');
  }
  function get_visited(_this__u8e3s4) {
    return new OfPseudoClass('visited');
  }
  function set__SilkTheme(_set____db54di) {
    _SilkTheme = _set____db54di;
  }
  var _SilkTheme;
  var com_varabyte_kobweb_silk_theme_MutableSilkTheme$stable;
  var com_varabyte_kobweb_silk_theme_ImmutableSilkTheme$stable;
  function _registerStyle($this, name, style, kind, layer) {
    // Inline function 'kotlin.let' call
    var it = $this.a34_1.h2(name);
    // Inline function 'kotlin.check' call
    if (!(it == null || it === style)) {
      var message = trimIndent('\n                Attempting to register a second CssStyle with a name that\'s already used: "' + name + '"\n\n                If this was an intentional override, you should use `replaceStyle` instead.\n            ');
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.set' call
    $this.z33_1.l2(name, style);
    // Inline function 'kotlin.collections.set' call
    $this.d34_1.l2(style, name);
    var tmp;
    if (layer == null) {
      var tmp_0;
      if (kind.equals(getKClass(ComponentKind))) {
        tmp_0 = SilkLayer_COMPONENT_STYLES_getInstance();
      } else if (kind.equals(getKClass(RestrictedKind))) {
        tmp_0 = SilkLayer_RESTRICTED_STYLES_getInstance();
      } else if (kind.equals(getKClass(GeneralKind))) {
        tmp_0 = SilkLayer_GENERAL_STYLES_getInstance();
      } else {
        var message_0 = 'Unknown kind: ' + toString(kind);
        throw IllegalStateException_init_$Create$(toString(message_0));
      }
      tmp = tmp_0.j37_1;
    } else {
      tmp = layer;
    }
    var finalLayer = tmp;
    // Inline function 'kotlin.takeIf' call
    var tmp_1;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(finalLayer) > 0) {
      tmp_1 = finalLayer;
    } else {
      tmp_1 = null;
    }
    var tmp2_safe_receiver = tmp_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.collections.set' call
      $this.f34_1.l2(name, tmp2_safe_receiver);
    }
    if (style instanceof ExtendingCssStyle) {
      // Inline function 'kotlin.collections.getOrPut' call
      var this_0 = $this.j34_1;
      var value = this_0.h2(style);
      var tmp_2;
      if (value == null) {
        // Inline function 'kotlin.collections.mutableListOf' call
        var answer = ArrayList_init_$Create$();
        this_0.l2(style, answer);
        tmp_2 = answer;
      } else {
        tmp_2 = value;
      }
      tmp_2.e(style.y38_1);
    }
  }
  function MutableSilkTheme() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.z33_1 = LinkedHashMap_init_$Create$();
    this.a34_1 = this.z33_1;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.b34_1 = LinkedHashMap_init_$Create$();
    this.c34_1 = this.b34_1;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.d34_1 = LinkedHashMap_init_$Create$();
    this.e34_1 = this.d34_1;
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_2.f34_1 = LinkedHashMap_init_$Create$();
    this.g34_1 = this.f34_1;
    var tmp_3 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_3.h34_1 = LinkedHashMap_init_$Create$();
    this.i34_1 = this.h34_1;
    var tmp_4 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_4.j34_1 = LinkedHashMap_init_$Create$();
    this.k34_1 = this.j34_1;
    var tmp_5 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_5.l34_1 = LinkedHashMap_init_$Create$();
    this.m34_1 = this.l34_1;
    var tmp_6 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_6.n34_1 = LinkedHashMap_init_$Create$();
    this.o34_1 = this.n34_1;
    this.p34_1 = new MutablePalettes();
    this.q34_1 = BreakpointSizes(get_cssRem(30), get_cssRem(48), get_cssRem(62), get_cssRem(80));
  }
  protoOf(MutableSilkTheme).z38 = function (name, style, layer) {
    return _registerStyle(this, name, style, getKClass(ComponentKind), layer);
  };
  protoOf(MutableSilkTheme).r34 = function (name, style, layer, $super) {
    layer = layer === VOID ? null : layer;
    var tmp;
    if ($super === VOID) {
      this.z38(name, style, layer);
      tmp = Unit_instance;
    } else {
      tmp = $super.z38.call(this, name, style, layer);
    }
    return tmp;
  };
  protoOf(MutableSilkTheme).a39 = function (name, style, layer) {
    return _registerStyle(this, name, style, getKClass(RestrictedKind), layer);
  };
  protoOf(MutableSilkTheme).b39 = function (name, style, layer, $super) {
    layer = layer === VOID ? null : layer;
    var tmp;
    if ($super === VOID) {
      this.a39(name, style, layer);
      tmp = Unit_instance;
    } else {
      tmp = $super.a39.call(this, name, style, layer);
    }
    return tmp;
  };
  protoOf(MutableSilkTheme).c39 = function (name, style, layer) {
    return _registerStyle(this, name, style, getKClass(GeneralKind), layer);
  };
  protoOf(MutableSilkTheme).d39 = function (name, style, layer, $super) {
    layer = layer === VOID ? null : layer;
    var tmp;
    if ($super === VOID) {
      this.c39(name, style, layer);
      tmp = Unit_instance;
    } else {
      tmp = $super.c39.call(this, name, style, layer);
    }
    return tmp;
  };
  protoOf(MutableSilkTheme).e39 = function (name, variant, layer) {
    var tmp0_elvis_lhs = variant instanceof SimpleCssStyleVariant ? variant : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'You can only register variants created by `addVariant` or `addVariantBase`.';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var simpleVariant = tmp;
    var tmp_0;
    if (startsWith(name, _Char___init__impl__6a9atx(45))) {
      var tmp1_elvis_lhs = this.e34_1.h2(simpleVariant.x37_1);
      var tmp_1;
      if (tmp1_elvis_lhs == null) {
        var message_0 = 'When registering variant "' + name + '", somehow its base style was not registered correctly. This is not expected, so please report the issue.';
        throw IllegalStateException_init_$Create$(toString(message_0));
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      var baseStyleName = tmp_1;
      tmp_0 = baseStyleName + name;
    } else {
      tmp_0 = name;
    }
    var name_0 = tmp_0;
    // Inline function 'kotlin.let' call
    var it = this.c34_1.h2(name_0);
    // Inline function 'kotlin.check' call
    if (!(it == null || it === variant)) {
      var message_1 = trimIndent('\n            Attempting to register a second variant with a name that\'s already used: "' + name_0 + "\"\n\n            This isn't allowed. Please choose a different name. If there's a usecase for this I'm unaware of,\n            consider filing an issue at https://github.com/varabyte/kobweb/issues\n        ");
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.collections.set' call
    this.b34_1.l2(name_0, variant);
    var tmp0 = this.d34_1;
    // Inline function 'kotlin.collections.set' call
    var key = variant.w37_1;
    tmp0.l2(key, name_0);
    // Inline function 'kotlin.takeIf' call
    var this_0 = layer == null ? SilkLayer_COMPONENT_VARIANTS_getInstance().j37_1 : layer;
    var tmp_2;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(this_0) > 0) {
      tmp_2 = this_0;
    } else {
      tmp_2 = null;
    }
    var finalLayer = tmp_2;
    if (finalLayer == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.collections.set' call
      this.f34_1.l2(name_0, finalLayer);
    }
    if (variant instanceof ExtendingCssStyleVariant) {
      var tmp0_0 = this.j34_1;
      // Inline function 'kotlin.collections.getOrPut' call
      var key_0 = variant.w37_1;
      var value = tmp0_0.h2(key_0);
      var tmp_3;
      if (value == null) {
        // Inline function 'kotlin.collections.mutableListOf' call
        var answer = ArrayList_init_$Create$();
        tmp0_0.l2(key_0, answer);
        tmp_3 = answer;
      } else {
        tmp_3 = value;
      }
      tmp_3.e(variant.h39_1.w37_1);
    }
  };
  protoOf(MutableSilkTheme).i39 = function (name, variant, layer, $super) {
    layer = layer === VOID ? null : layer;
    var tmp;
    if ($super === VOID) {
      this.e39(name, variant, layer);
      tmp = Unit_instance;
    } else {
      tmp = $super.e39.call(this, name, variant, layer);
    }
    return tmp;
  };
  protoOf(MutableSilkTheme).j39 = function (name, keyframes) {
    // Inline function 'kotlin.let' call
    var it = this.l34_1.h2(name);
    // Inline function 'kotlin.check' call
    if (!(it == null || it === keyframes)) {
      var message = trimIndent('\n                Attempting to register a second keyframes with a name that\'s already used: "' + name + '"\n            ');
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.set' call
    this.l34_1.l2(name, keyframes);
    // Inline function 'kotlin.collections.set' call
    this.n34_1.l2(keyframes, name);
  };
  function registerStylesInto$orderStyles$visit(visited, $dependencies, orderedStyles, style) {
    if (visited.o(style))
      return Unit_instance;
    visited.e(style);
    var tmp0_safe_receiver = $dependencies.h2(style);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = tmp0_safe_receiver.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        registerStylesInto$orderStyles$visit(visited, $dependencies, orderedStyles, element);
      }
    }
    orderedStyles.e(style);
  }
  function registerStylesInto$orderStyles(styles, dependencies) {
    if (dependencies.r())
      return styles;
    // Inline function 'kotlin.collections.mutableListOf' call
    var orderedStyles = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.mutableSetOf' call
    var visited = LinkedHashSet_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = styles.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      registerStylesInto$orderStyles$visit(visited, dependencies, orderedStyles, element);
    }
    return orderedStyles;
  }
  function ImmutableSilkTheme(mutableSilkTheme) {
    this.s34_1 = mutableSilkTheme;
    var tmp = this;
    var tmp_0 = this.s34_1.p34_1;
    tmp.t34_1 = isInterface(tmp_0, Palettes) ? tmp_0 : THROW_CCE();
    this.u34_1 = this.s34_1.q34_1;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.v34_1 = LinkedHashMap_init_$Create$();
    this.w34_1 = this.v34_1;
  }
  protoOf(ImmutableSilkTheme).k39 = function (name) {
    return !(this.s34_1.a34_1.h2(name) == null);
  };
  protoOf(ImmutableSilkTheme).l39 = function (style) {
    return this.s34_1.e34_1.h2(style);
  };
  protoOf(ImmutableSilkTheme).x34 = function (silkStyleSheet) {
    // Inline function 'kotlin.check' call
    if (!!(_SilkTheme == null)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.s34_1.m34_1.k2().g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'kotlin.collections.component1' call
      var name = element.d2();
      // Inline function 'kotlin.collections.component2' call
      var keyframes = element.e2();
      silkStyleSheet.r35(name, keyframes.e38_1);
    }
  };
  protoOf(ImmutableSilkTheme).c35 = function (stylesheet) {
    // Inline function 'kotlin.check' call
    if (!!(_SilkTheme == null)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    var tmp = this.s34_1.a34_1.j2();
    // Inline function 'kotlin.collections.filterIsInstance' call
    var tmp0 = this.s34_1.c34_1.j2();
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      if (element instanceof SimpleCssStyleVariant) {
        destination.e(element);
      }
    }
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(destination, 10));
    var _iterator__ex2g4s_0 = destination.g();
    while (_iterator__ex2g4s_0.h()) {
      var item = _iterator__ex2g4s_0.i();
      var tmp$ret$3 = item.w37_1;
      destination_0.e(tmp$ret$3);
    }
    var allCssStyles = plus_0(tmp, destination_0);
    var allCssStylesSorted = registerStylesInto$orderStyles(allCssStyles, this.s34_1.k34_1);
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_1 = allCssStylesSorted.g();
    while (_iterator__ex2g4s_1.h()) {
      var element_0 = _iterator__ex2g4s_1.i();
      var className = this.l39(element_0);
      // Inline function 'kotlin.collections.get' call
      var this_0 = this.s34_1.g34_1;
      var layer = (isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).h2(className);
      var classSelectors = element_0.w36('.' + className, stylesheet, layer);
      var tmp0_0 = this.v34_1;
      // Inline function 'kotlin.collections.set' call
      var value = element_0.x36(classSelectors);
      tmp0_0.l2(element_0, value);
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_2 = this.s34_1.i34_1.k2().g();
    while (_iterator__ex2g4s_2.h()) {
      var element_1 = _iterator__ex2g4s_2.i();
      // Inline function 'kotlin.collections.component1' call
      var originalStyle = element_1.d2();
      // Inline function 'kotlin.collections.component2' call
      var overrideStyle = element_1.e2();
      var tmp0_1 = this.v34_1;
      // Inline function 'kotlin.collections.set' call
      var value_0 = getValue(this.v34_1, overrideStyle);
      tmp0_1.l2(originalStyle, value_0);
    }
  };
  function get_SilkTheme() {
    var tmp0_elvis_lhs = _SilkTheme;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = "You can't access SilkTheme before first calling `prepareSilkFoundation` (or `SilkApp`, which calls it)";
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function toWidth(_this__u8e3s4) {
    var tmp0_safe_receiver = toValue(_this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q38_1;
    return tmp1_elvis_lhs == null ? get_px(0) : tmp1_elvis_lhs;
  }
  function get_breakpointFloor(_this__u8e3s4) {
    var tmp0 = get_entries_0();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.last' call
      var iterator = tmp0.q(tmp0.j());
      while (iterator.k4()) {
        var element = iterator.m4();
        if (toPx(element).value <= _this__u8e3s4.innerWidth) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      throw NoSuchElementException_init_$Create$('List contains no element matching the predicate.');
    }
    return tmp$ret$1;
  }
  function toValue(_this__u8e3s4) {
    var tmp;
    switch (_this__u8e3s4.p2_1) {
      case 0:
        tmp = null;
        break;
      case 1:
        tmp = get_SilkTheme().u34_1.k38_1;
        break;
      case 2:
        tmp = get_SilkTheme().u34_1.l38_1;
        break;
      case 3:
        tmp = get_SilkTheme().u34_1.m38_1;
        break;
      case 4:
        tmp = get_SilkTheme().u34_1.n38_1;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function toPx(_this__u8e3s4) {
    var tmp0_safe_receiver = toValue(_this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p38();
    return tmp1_elvis_lhs == null ? get_px(0) : tmp1_elvis_lhs;
  }
  function rememberBreakpoint($composer, $changed) {
    var $composer_0 = $composer;
    var tmp = get_breakpointFloor(window);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.y1h();
    var tmp_0;
    if (false || it === Companion_getInstance().f1a_1) {
      var value = rememberBreakpoint$slambda_0(null);
      $composer_0.j1i(value);
      tmp_0 = value;
    } else {
      tmp_0 = it;
    }
    var tmp_1 = tmp_0;
    var tmp$ret$3 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    return produceState(tmp, tmp$ret$3, $composer_0, 0).e2();
  }
  function rememberBreakpoint$slambda$lambda($this_produceState) {
    return function (it) {
      $this_produceState.ss(get_breakpointFloor(window));
      return Unit_instance;
    };
  }
  function rememberBreakpoint$slambda$lambda_0($resizeListener) {
    return function () {
      window.removeEventListener('resize', $resizeListener);
      return Unit_instance;
    };
  }
  function rememberBreakpoint$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(rememberBreakpoint$slambda).w39 = function ($this$produceState, $completion) {
    var tmp = this.x39($this$produceState, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(rememberBreakpoint$slambda).p9 = function (p1, $completion) {
    return this.w39((!(p1 == null) ? isInterface(p1, ProduceStateScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(rememberBreakpoint$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 2;
            var tmp_0 = this;
            tmp_0.v39_1 = EventListener(rememberBreakpoint$slambda$lambda(this.u39_1));
            window.addEventListener('resize', this.v39_1);
            this.v8_1 = 1;
            suspendResult = this.u39_1.x1o(rememberBreakpoint$slambda$lambda_0(this.v39_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            throwKotlinNothingValueException();
            break;
          case 2:
            throw this.y8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.w8_1 === 2) {
          throw e;
        } else {
          this.v8_1 = this.w8_1;
          this.y8_1 = e;
        }
      }
     while (true);
  };
  protoOf(rememberBreakpoint$slambda).x39 = function ($this$produceState, completion) {
    var i = new rememberBreakpoint$slambda(completion);
    i.u39_1 = $this$produceState;
    return i;
  };
  function rememberBreakpoint$slambda_0(resultContinuation) {
    var i = new rememberBreakpoint$slambda(resultContinuation);
    var l = function ($this$produceState, $completion) {
      return i.w39($this$produceState, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function get_rootColorModeState() {
    _init_properties_ColorMode_kt__lz79sc();
    var tmp0 = rootColorModeState$delegate;
    var tmp = KProperty0;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('rootColorModeState', 0, tmp, _get_rootColorModeState_$ref_qbjldf(), null);
    return tmp0.e2();
  }
  var rootColorModeState$delegate;
  function get_LocalColorMode() {
    _init_properties_ColorMode_kt__lz79sc();
    return LocalColorMode;
  }
  var LocalColorMode;
  var ColorMode_LIGHT_instance;
  var ColorMode_DARK_instance;
  function Companion_6() {
  }
  protoOf(Companion_6).y39 = function ($composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalColorMode();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.m1i(this_0);
    sourceInformationMarkerEnd($composer_1);
    return tmp0;
  };
  protoOf(Companion_6).f33 = function ($composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalColorMode();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.m1i(this_0);
    sourceInformationMarkerEnd($composer_1);
    return tmp0.e2();
  };
  var Companion_instance_10;
  function Companion_getInstance_7() {
    return Companion_instance_10;
  }
  function values_2() {
    return [ColorMode_LIGHT_getInstance(), ColorMode_DARK_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'LIGHT':
        return ColorMode_LIGHT_getInstance();
      case 'DARK':
        return ColorMode_DARK_getInstance();
      default:
        ColorMode_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_2() {
    if ($ENTRIES_2 == null)
      $ENTRIES_2 = enumEntries(values_2());
    return $ENTRIES_2;
  }
  var ColorMode_entriesInitialized;
  function ColorMode_initEntries() {
    if (ColorMode_entriesInitialized)
      return Unit_instance;
    ColorMode_entriesInitialized = true;
    ColorMode_LIGHT_instance = new ColorMode('LIGHT', 0);
    ColorMode_DARK_instance = new ColorMode('DARK', 1);
  }
  var $ENTRIES_2;
  function ColorMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(ColorMode).z39 = function () {
    return this.equals(ColorMode_LIGHT_getInstance());
  };
  protoOf(ColorMode).a3a = function () {
    return this.equals(ColorMode_DARK_getInstance());
  };
  protoOf(ColorMode).i33 = function () {
    var tmp;
    switch (this.p2_1) {
      case 0:
        tmp = ColorMode_DARK_getInstance();
        break;
      case 1:
        tmp = ColorMode_LIGHT_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(ColorMode).b3a = function () {
    return get_LocalColorMode().y1n(mutableStateOf(this));
  };
  function suffixedWith(_this__u8e3s4, colorMode) {
    _init_properties_ColorMode_kt__lz79sc();
    var tmp = withColorModeSuffixRemoved(_this__u8e3s4);
    return tmp.yu(suffixedWith$lambda(colorMode));
  }
  function get_cssClass(_this__u8e3s4) {
    _init_properties_ColorMode_kt__lz79sc();
    var tmp;
    switch (_this__u8e3s4.p2_1) {
      case 0:
        tmp = 'silk-light';
        break;
      case 1:
        tmp = 'silk-dark';
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function isSuffixedWith(_this__u8e3s4, colorMode) {
    _init_properties_ColorMode_kt__lz79sc();
    return endsWith_0(_this__u8e3s4, toSuffix(colorMode));
  }
  function withColorModeSuffixRemoved(_this__u8e3s4) {
    _init_properties_ColorMode_kt__lz79sc();
    var tmp0_safe_receiver = get_colorModeSuffix(_this__u8e3s4);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = _this__u8e3s4.yu(withColorModeSuffixRemoved$lambda(tmp0_safe_receiver));
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  }
  function toSuffix(_this__u8e3s4) {
    _init_properties_ColorMode_kt__lz79sc();
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    return '_' + _this__u8e3s4.o2_1.toLowerCase();
  }
  function get_colorModeSuffix(_this__u8e3s4) {
    _init_properties_ColorMode_kt__lz79sc();
    var self_0 = _this__u8e3s4;
    var tmp0 = get_entries_2();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        if (isSuffixedWith(self_0, element)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  }
  function rootColorModeState$delegate$lambda() {
    _init_properties_ColorMode_kt__lz79sc();
    return mutableStateOf(Companion_instance_3.b2y().j35());
  }
  function _get_rootColorModeState_$ref_qbjldf() {
    return function () {
      return get_rootColorModeState();
    };
  }
  function LocalColorMode$lambda() {
    _init_properties_ColorMode_kt__lz79sc();
    return get_rootColorModeState();
  }
  function suffixedWith$lambda($colorMode) {
    return function ($this$renamed) {
      return $this$renamed + toSuffix($colorMode);
    };
  }
  function withColorModeSuffixRemoved$lambda($colorMode) {
    return function ($this$renamed) {
      return removeSuffix($this$renamed, toSuffix($colorMode));
    };
  }
  function ColorMode_LIGHT_getInstance() {
    ColorMode_initEntries();
    return ColorMode_LIGHT_instance;
  }
  function ColorMode_DARK_getInstance() {
    ColorMode_initEntries();
    return ColorMode_DARK_instance;
  }
  var properties_initialized_ColorMode_kt_kbhp7u;
  function _init_properties_ColorMode_kt__lz79sc() {
    if (!properties_initialized_ColorMode_kt_kbhp7u) {
      properties_initialized_ColorMode_kt_kbhp7u = true;
      rootColorModeState$delegate = lazy(rootColorModeState$delegate$lambda);
      LocalColorMode = compositionLocalOf(VOID, LocalColorMode$lambda);
    }
  }
  var com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Monochrome$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Red$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Pink$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Purple$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorPalettes_DeepPurple$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Indigo$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Blue$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorPalettes_LightBlue$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Cyan$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Teal$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Green$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorPalettes_LightGreen$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Lime$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Yellow$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Amber$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Orange$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorPalettes_DeepOrange$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Brown$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Gray$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorPalettes_BlueGray$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorPalettes$stable;
  function Red() {
    Red_instance = this;
    this.c3a_1 = Companion_instance_2.o31(16772078);
    this.d3a_1 = Companion_instance_2.o31(16764370);
    this.e3a_1 = Companion_instance_2.o31(15702682);
    this.f3a_1 = Companion_instance_2.o31(15037299);
    this.g3a_1 = Companion_instance_2.o31(15684432);
    this.h3a_1 = Companion_instance_2.o31(16007990);
    this.i3a_1 = Companion_instance_2.o31(15022389);
    this.j3a_1 = Companion_instance_2.o31(13840175);
    this.k3a_1 = Companion_instance_2.o31(12986408);
    this.l3a_1 = Companion_instance_2.o31(12000284);
  }
  protoOf(Red).m3a = function () {
    return this.e3a_1;
  };
  protoOf(Red).n3a = function () {
    return this.f3a_1;
  };
  protoOf(Red).o3a = function () {
    return this.g3a_1;
  };
  protoOf(Red).p3a = function () {
    return this.h3a_1;
  };
  protoOf(Red).q3a = function () {
    return this.i3a_1;
  };
  protoOf(Red).r3a = function () {
    return this.j3a_1;
  };
  var Red_instance;
  function Red_getInstance() {
    if (Red_instance == null)
      new Red();
    return Red_instance;
  }
  function Blue() {
    Blue_instance = this;
    this.s3a_1 = Companion_instance_2.o31(14938877);
    this.t3a_1 = Companion_instance_2.o31(12312315);
    this.u3a_1 = Companion_instance_2.o31(9489145);
    this.v3a_1 = Companion_instance_2.o31(6600182);
    this.w3a_1 = Companion_instance_2.o31(4367861);
    this.x3a_1 = Companion_instance_2.o31(2201331);
    this.y3a_1 = Companion_instance_2.o31(2001125);
    this.z3a_1 = Companion_instance_2.o31(1668818);
    this.a3b_1 = Companion_instance_2.o31(1402304);
    this.b3b_1 = Companion_instance_2.o31(870305);
  }
  protoOf(Blue).m3a = function () {
    return this.u3a_1;
  };
  protoOf(Blue).n3a = function () {
    return this.v3a_1;
  };
  protoOf(Blue).o3a = function () {
    return this.w3a_1;
  };
  protoOf(Blue).p3a = function () {
    return this.x3a_1;
  };
  protoOf(Blue).q3a = function () {
    return this.y3a_1;
  };
  protoOf(Blue).r3a = function () {
    return this.z3a_1;
  };
  var Blue_instance;
  function Blue_getInstance() {
    if (Blue_instance == null)
      new Blue();
    return Blue_instance;
  }
  function Gray() {
    Gray_instance = this;
    this.c3b_1 = Companion_instance_2.o31(16448250);
    this.d3b_1 = Companion_instance_2.o31(16119285);
    this.e3b_1 = Companion_instance_2.o31(15658734);
    this.f3b_1 = Companion_instance_2.o31(14737632);
    this.g3b_1 = Companion_instance_2.o31(12434877);
    this.h3b_1 = Companion_instance_2.o31(10395294);
    this.i3b_1 = Companion_instance_2.o31(7697781);
    this.j3b_1 = Companion_instance_2.o31(6381921);
    this.k3b_1 = Companion_instance_2.o31(4342338);
    this.l3b_1 = Companion_instance_2.o31(2171169);
  }
  protoOf(Gray).m3a = function () {
    return this.e3b_1;
  };
  protoOf(Gray).n3a = function () {
    return this.f3b_1;
  };
  protoOf(Gray).o3a = function () {
    return this.g3b_1;
  };
  protoOf(Gray).p3a = function () {
    return this.h3b_1;
  };
  protoOf(Gray).q3a = function () {
    return this.i3b_1;
  };
  protoOf(Gray).r3a = function () {
    return this.j3b_1;
  };
  var Gray_instance;
  function Gray_getInstance() {
    if (Gray_instance == null)
      new Gray();
    return Gray_instance;
  }
  var com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_MutablePalettes$stable;
  function MutablePalettes() {
    this.m3b_1 = new MutablePalette();
    this.n3b_1 = new MutablePalette();
  }
  protoOf(MutablePalettes).o3b = function () {
    return this.m3b_1;
  };
  protoOf(MutablePalettes).p3b = function () {
    return this.n3b_1;
  };
  function Palettes() {
  }
  function Palette() {
  }
  function EntryDelegate(palette, prefix) {
    prefix = prefix === VOID ? null : prefix;
    this.s3b_1 = palette;
    this.t3b_1 = prefix;
  }
  protoOf(EntryDelegate).k2s = function (thisRef, property) {
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = this.t3b_1;
    var tmp$ret$0 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    return getValue(this.s3b_1.u3b_1, tmp$ret$0 + property.callableName);
  };
  protoOf(EntryDelegate).v3b = function (thisRef, property, value) {
    var tmp0 = this.s3b_1.u3b_1;
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = this.t3b_1;
    // Inline function 'kotlin.collections.set' call
    var key = (tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs) + property.callableName;
    tmp0.l2(key, value);
  };
  function ColorGroup(palette, groupName) {
    this.w3b_1 = palette;
    this.x3b_1 = groupName;
  }
  protoOf(ColorGroup).y3b = function () {
    return new EntryDelegate(this.w3b_1, this.x3b_1 + '.');
  };
  function MutablePalette() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.u3b_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(MutablePalette).uc = function (key) {
    return this.u3b_1.h2(key);
  };
  protoOf(MutablePalette).z3b = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    this.u3b_1.l2(key, value);
  };
  function toPalette(_this__u8e3s4) {
    return get_SilkTheme().t34_1.q3b(_this__u8e3s4);
  }
  function com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup$stableprop_getter() {
    return com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup$stable;
  }
  function com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() {
    return com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stable;
  }
  var com_varabyte_kobweb_silk_theme_shapes_Path$stable;
  var com_varabyte_kobweb_silk_theme_shapes_CirclePath$stable;
  var com_varabyte_kobweb_silk_theme_shapes_PolygonPath$stable;
  var com_varabyte_kobweb_silk_theme_shapes_InsetPath$stable;
  var com_varabyte_kobweb_silk_theme_shapes_RectF$stable;
  var com_varabyte_kobweb_silk_theme_shapes_Rect$stable;
  var com_varabyte_kobweb_silk_theme_shapes_CircleF$stable;
  var com_varabyte_kobweb_silk_theme_shapes_Circle$stable;
  var com_varabyte_kobweb_silk_theme_shapes_PolygonF$stable;
  var com_varabyte_kobweb_silk_theme_shapes_Polygon$stable;
  function clip(_this__u8e3s4, shape) {
    var tmp0_safe_receiver = shape.a3c();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = styleModifier(_this__u8e3s4, clip$lambda(tmp0_safe_receiver));
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  }
  function RectF_init_$Init$($this) {
    RectF_init_$Init$_0(get_px(0), $this);
    return $this;
  }
  function RectF_init_$Create$() {
    return RectF_init_$Init$(objectCreate(protoOf(RectF)));
  }
  function RectF_init_$Init$_0(cornerRadius, $this) {
    RectF.call($this, to(0.0, 0.0), to(100.0, 100.0), cornerRadius);
    return $this;
  }
  function RectF_init_$Init$_1(side, cornerRadius, $this) {
    cornerRadius = cornerRadius === VOID ? get_px(0) : cornerRadius;
    RectF.call($this, to(side, side), from100(to(side, side)), cornerRadius);
    return $this;
  }
  function RectF_init_$Create$_0(side, cornerRadius) {
    return RectF_init_$Init$_1(side, cornerRadius, objectCreate(protoOf(RectF)));
  }
  function RectF(topLeft, botRight, cornerRadius) {
    cornerRadius = cornerRadius === VOID ? get_px(0) : cornerRadius;
    this.b3c_1 = topLeft;
    this.c3c_1 = botRight;
    this.d3c_1 = cornerRadius;
  }
  protoOf(RectF).a3c = function () {
    var tmp;
    if (!(this.b3c_1.ye_1 === 0.0) || !(this.b3c_1.ze_1 === 0.0) || !(this.c3c_1.ye_1 === 100.0) || !(this.c3c_1.ze_1 === 100.0) || !equals(this.d3c_1, get_px(0))) {
      tmp = new InsetPath(this.b3c_1, this.c3c_1, this.d3c_1);
    } else {
      tmp = null;
    }
    return tmp;
  };
  function Path() {
  }
  protoOf(Path).f3c = function (_this__u8e3s4) {
    return toString(_this__u8e3s4) + '%';
  };
  protoOf(Path).g3c = function (_this__u8e3s4) {
    return toString(_this__u8e3s4.ye_1) + '% ' + toString(_this__u8e3s4.ze_1) + '%';
  };
  function from100(_this__u8e3s4) {
    return to(100.0 - _this__u8e3s4.ye_1, 100.0 - _this__u8e3s4.ze_1);
  }
  function InsetPath(topLeft, botRight, roundness) {
    roundness = roundness === VOID ? get_px(0) : roundness;
    Path.call(this);
    this.h3c_1 = topLeft;
    this.i3c_1 = roundness;
    this.j3c_1 = from100(botRight);
  }
  protoOf(InsetPath).e3c = function () {
    // Inline function 'kotlin.takeIf' call
    var this_0 = this.i3c_1;
    var tmp;
    if (!equals(this_0, get_px(0))) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_0 = 'round ' + toString(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    var roundnessPart = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    var left = this.h3c_1.ye_1;
    var top = this.h3c_1.ze_1;
    var right = this.j3c_1.ye_1;
    var bottom = this.j3c_1.ze_1;
    var insetPart = left === top && right === bottom && left === right ? this.f3c(left) : left === right && top === bottom ? this.g3c(to(top, left)) : this.f3c(top) + ' ' + this.f3c(right) + ' ' + this.f3c(bottom) + ' ' + this.f3c(left);
    return 'inset(' + insetPart + roundnessPart + ')';
  };
  function clip$lambda($path) {
    return function ($this$styleModifier) {
      $this$styleModifier.t2l('clip-path', $path.e3c());
      return Unit_instance;
    };
  }
  //region block: post-declaration
  protoOf(MutablePalettes).q3b = get;
  protoOf(MutablePalette).r3b = getValue_0;
  //endregion
  //region block: init
  Companion_instance_3 = new Companion();
  com_varabyte_kobweb_silk_init_CssStyleRegistrarImpl_Entry$stable = 0;
  com_varabyte_kobweb_silk_init_SilkStylesheetInstance$stable = 8;
  com_varabyte_kobweb_silk_style_CssRule_OfMedia$stable = 8;
  com_varabyte_kobweb_silk_style_CssRule_NonMediaCssRule$stable = 8;
  com_varabyte_kobweb_silk_style_CssRule_OfAttributeSelector$stable = 8;
  com_varabyte_kobweb_silk_style_CssRule_OfPseudoClass$stable = 8;
  com_varabyte_kobweb_silk_style_CssRule_OfPseudoElement$stable = 8;
  com_varabyte_kobweb_silk_style_CssRule_CompositeOpen$stable = 8;
  com_varabyte_kobweb_silk_style_CssRule_CompositeClosed$stable = 8;
  com_varabyte_kobweb_silk_style_CssRule$stable = 8;
  Companion_instance_5 = new Companion_1();
  Companion_instance_6 = new Companion_2();
  Companion_instance_7 = new Companion_3();
  com_varabyte_kobweb_silk_style_CssStyleVariant$stable = 0;
  com_varabyte_kobweb_silk_style_SimpleCssStyleVariant$stable = 0;
  com_varabyte_kobweb_silk_style_ExtendingCssStyleVariant$stable = 0;
  com_varabyte_kobweb_silk_style_animation_KeyframesBuilder$stable = 8;
  com_varabyte_kobweb_silk_style_animation_Keyframes$stable = 8;
  Companion_instance_9 = new Companion_5();
  com_varabyte_kobweb_silk_style_breakpoint_Breakpoint_Range$stable = 0;
  com_varabyte_kobweb_silk_style_breakpoint_BreakpointUnitValue_Px$stable = 8;
  com_varabyte_kobweb_silk_style_breakpoint_BreakpointUnitValue_Em$stable = 8;
  com_varabyte_kobweb_silk_style_breakpoint_BreakpointUnitValue_Rem$stable = 8;
  com_varabyte_kobweb_silk_style_breakpoint_BreakpointUnitValue$stable = 0;
  com_varabyte_kobweb_silk_style_breakpoint_BreakpointValues$stable = 0;
  com_varabyte_kobweb_silk_style_breakpoint_ResponsiveValues$stable = 0;
  com_varabyte_kobweb_silk_style_layer_LayerListBuilder$stable = 8;
  _SilkTheme = null;
  com_varabyte_kobweb_silk_theme_MutableSilkTheme$stable = 8;
  com_varabyte_kobweb_silk_theme_ImmutableSilkTheme$stable = 8;
  Companion_instance_10 = new Companion_6();
  com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Monochrome$stable = 8;
  com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Red$stable = 8;
  com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Pink$stable = 8;
  com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Purple$stable = 8;
  com_varabyte_kobweb_silk_theme_colors_ColorPalettes_DeepPurple$stable = 8;
  com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Indigo$stable = 8;
  com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Blue$stable = 8;
  com_varabyte_kobweb_silk_theme_colors_ColorPalettes_LightBlue$stable = 8;
  com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Cyan$stable = 8;
  com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Teal$stable = 8;
  com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Green$stable = 8;
  com_varabyte_kobweb_silk_theme_colors_ColorPalettes_LightGreen$stable = 8;
  com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Lime$stable = 8;
  com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Yellow$stable = 8;
  com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Amber$stable = 8;
  com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Orange$stable = 8;
  com_varabyte_kobweb_silk_theme_colors_ColorPalettes_DeepOrange$stable = 8;
  com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Brown$stable = 8;
  com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Gray$stable = 8;
  com_varabyte_kobweb_silk_theme_colors_ColorPalettes_BlueGray$stable = 8;
  com_varabyte_kobweb_silk_theme_colors_ColorPalettes$stable = 0;
  com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stable = 8;
  com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup$stable = 8;
  com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette$stable = 8;
  com_varabyte_kobweb_silk_theme_colors_palette_MutablePalettes$stable = 8;
  com_varabyte_kobweb_silk_theme_shapes_Path$stable = 0;
  com_varabyte_kobweb_silk_theme_shapes_CirclePath$stable = 0;
  com_varabyte_kobweb_silk_theme_shapes_PolygonPath$stable = 8;
  com_varabyte_kobweb_silk_theme_shapes_InsetPath$stable = 8;
  com_varabyte_kobweb_silk_theme_shapes_RectF$stable = 8;
  com_varabyte_kobweb_silk_theme_shapes_Rect$stable = 8;
  com_varabyte_kobweb_silk_theme_shapes_CircleF$stable = 0;
  com_varabyte_kobweb_silk_theme_shapes_Circle$stable = 0;
  com_varabyte_kobweb_silk_theme_shapes_PolygonF$stable = 8;
  com_varabyte_kobweb_silk_theme_shapes_Polygon$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = SpanText;
  _.$_$.b = DeferringHost;
  _.$_$.c = set_additionalSilkInitialization;
  _.$_$.d = registerStyleBase;
  _.$_$.e = Keyframes;
  _.$_$.f = get_entries_0;
  _.$_$.g = ResponsiveValues;
  _.$_$.h = com_varabyte_kobweb_silk_style_breakpoint_ResponsiveValues$stableprop_getter;
  _.$_$.i = get_active;
  _.$_$.j = get_ariaDisabled;
  _.$_$.k = get_ariaInvalid;
  _.$_$.l = descendants;
  _.$_$.m = get_disabled;
  _.$_$.n = get_focusVisible;
  _.$_$.o = get_hover;
  _.$_$.p = get_link;
  _.$_$.q = not;
  _.$_$.r = get_placeholder;
  _.$_$.s = get_visited;
  _.$_$.t = Base;
  _.$_$.u = CssStyle_2;
  _.$_$.v = CssStyle_0;
  _.$_$.w = CssStyle_1;
  _.$_$.x = addVariantBase;
  _.$_$.y = addVariant_0;
  _.$_$.z = base_1;
  _.$_$.a1 = base_0;
  _.$_$.b1 = base;
  _.$_$.c1 = com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter;
  _.$_$.d1 = com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter;
  _.$_$.e1 = com_varabyte_kobweb_silk_style_CssStyle_Restricted_Base$stableprop_getter;
  _.$_$.f1 = toModifier_1;
  _.$_$.g1 = toModifier_0;
  _.$_$.h1 = toModifier;
  _.$_$.i1 = get_useScope;
  _.$_$.j1 = rememberBreakpoint;
  _.$_$.k1 = ColorGroup;
  _.$_$.l1 = MutablePalette;
  _.$_$.m1 = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup$stableprop_getter;
  _.$_$.n1 = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter;
  _.$_$.o1 = toPalette;
  _.$_$.p1 = get_entries_2;
  _.$_$.q1 = valueOf;
  _.$_$.r1 = get_cssClass;
  _.$_$.s1 = isSuffixedWith;
  _.$_$.t1 = suffixedWith;
  _.$_$.u1 = withColorModeSuffixRemoved;
  _.$_$.v1 = clip;
  _.$_$.w1 = get_SilkTheme;
  _.$_$.x1 = ColorModeAware;
  _.$_$.y1 = SilkFoundationStyles;
  _.$_$.z1 = Breakpoint_LG_getInstance;
  _.$_$.a2 = Breakpoint_MD_getInstance;
  _.$_$.b2 = Breakpoint_SM_getInstance;
  _.$_$.c2 = Breakpoint_XL_getInstance;
  _.$_$.d2 = Breakpoint_ZERO_getInstance;
  _.$_$.e2 = ColorMode_DARK_getInstance;
  _.$_$.f2 = ColorMode_LIGHT_getInstance;
  _.$_$.g2 = Base_init_$Init$;
  _.$_$.h2 = RectF_init_$Create$_0;
  _.$_$.i2 = Companion_getInstance_1;
  _.$_$.j2 = Companion_instance_6;
  _.$_$.k2 = Companion_instance_10;
  _.$_$.l2 = Blue_getInstance;
  _.$_$.m2 = Gray_getInstance;
  _.$_$.n2 = Red_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-silk-foundation.js.map
