(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kobweb-frontend-silk-foundation.js', './kobweb-frontend-silk-widgets.js', './kobweb-frontend-compose-html-ext.js', './kobweb-frontend-kobweb-compose.js', './html-html-core.js', './compose-multiplatform-core-compose-runtime-runtime.js', './kobweb-frontend-kobweb-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-silk-foundation.js'), require('./kobweb-frontend-silk-widgets.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./html-html-core.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kobweb-frontend-kobweb-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof globalThis['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof globalThis['kobweb-frontend-silk-widgets'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kobweb-frontend-silk-widgets' was not found. Please, check whether 'kobweb-frontend-silk-widgets' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof globalThis['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof globalThis['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kobweb-frontend-kobweb-core' was not found. Please, check whether 'kobweb-frontend-kobweb-core' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    globalThis['kobweb-frontend-silk-widgets-kobweb'] = factory(typeof globalThis['kobweb-frontend-silk-widgets-kobweb'] === 'undefined' ? {} : globalThis['kobweb-frontend-silk-widgets-kobweb'], globalThis['kotlin-kotlin-stdlib'], globalThis['kobweb-frontend-silk-foundation'], globalThis['kobweb-frontend-silk-widgets'], globalThis['kobweb-frontend-compose-html-ext'], globalThis['kobweb-frontend-kobweb-compose'], globalThis['html-html-core'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['kobweb-frontend-kobweb-core']);
  }
}(function (_, kotlin_kotlin, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_com_varabyte_kobweb_silk_widgets, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_org_jetbrains_compose_html_html_core, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_com_varabyte_kobweb_kobweb_core) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.lc;
  var ComponentKind = kotlin_com_varabyte_kobweb_silk_foundation.$_$.t;
  var initMetadataForInterface = kotlin_kotlin.$_$.lb;
  var VOID = kotlin_kotlin.$_$.f;
  var get_BorderColorVar = kotlin_com_varabyte_kobweb_silk_widgets.$_$.h;
  var StyleVariable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i;
  var KProperty1 = kotlin_kotlin.$_$.bd;
  var getPropertyCallableRef = kotlin_kotlin.$_$.fb;
  var initMetadataForObject = kotlin_kotlin.$_$.nb;
  var Companion_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u3;
  var Companion_getInstance_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e4;
  var listStyle = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q1;
  var Companion_getInstance_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j4;
  var textAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q2;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.c4;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h2;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.k5;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_html_html_core.$_$.m;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t;
  var Companion_getInstance_3 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k2;
  var base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c1;
  var addVariantBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.y;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_html_html_core.$_$.j;
  var display = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d1;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h3;
  var rememberComposableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k1;
  var THROW_CCE = kotlin_kotlin.$_$.tf;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var Div = kotlin_org_jetbrains_compose_html_html_core.$_$.v5;
  var Companion_getInstance_6 = kotlin_com_varabyte_kobweb_kobweb_core.$_$.i;
  var com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d1;
  var com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e1;
  var toModifier = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h1;
  var Img = kotlin_org_jetbrains_compose_html_html_core.$_$.x5;
  var Unit_getInstance = kotlin_kotlin.$_$.m4;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.i5;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a3;
  var Companion_getInstance_7 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f4;
  var objectFit = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z1;
  var com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g3;
  var registerRefScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h3;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e1;
  var CssStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.w;
  var StyleVariable_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h;
  var Anchor = kotlin_com_varabyte_kobweb_kobweb_core.$_$.c;
  var get_link = kotlin_com_varabyte_kobweb_silk_foundation.$_$.p;
  var get_visited = kotlin_com_varabyte_kobweb_silk_foundation.$_$.s;
  var get_hover = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o;
  var Companion_getInstance_8 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k4;
  var textDecorationLine = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r2;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b1;
  var get_ColorVar = kotlin_com_varabyte_kobweb_silk_widgets.$_$.i;
  var registerRefScope_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i3;
  var addVariant = kotlin_com_varabyte_kobweb_silk_foundation.$_$.z;
  var Colors_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o3;
  var get_entries = kotlin_com_varabyte_kobweb_silk_foundation.$_$.q1;
  var get_cssClass = kotlin_com_varabyte_kobweb_silk_foundation.$_$.s1;
  var registerStyleBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d;
  var toPalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.p1;
  var setVariable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n2;
  var ColorGroup = kotlin_com_varabyte_kobweb_silk_foundation.$_$.l1;
  var KMutableProperty1 = kotlin_kotlin.$_$.zc;
  var initMetadataForClass = kotlin_kotlin.$_$.ib;
  var MutablePalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m1;
  var com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n1;
  var com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o1;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(TocKind, 'TocKind', VOID, VOID, [ComponentKind]);
  initMetadataForObject(TocVars, 'TocVars');
  initMetadataForInterface(ImageKind, 'ImageKind', VOID, VOID, [ComponentKind]);
  initMetadataForInterface(LinkKind, 'LinkKind', VOID, VOID, [ComponentKind]);
  initMetadataForObject(LinkVars, 'LinkVars');
  initMetadataForInterface(Link_0, 'Link');
  initMetadataForClass(MutableLink, 'MutableLink', VOID, ColorGroup, [ColorGroup, Link_0]);
  initMetadataForObject(SilkWidgetKobwebColorGroups, 'SilkWidgetKobwebColorGroups');
  //endregion
  function get_TocStyle() {
    _init_properties_Toc_kt__9n5312();
    return TocStyle;
  }
  var TocStyle;
  function get_TocBorderedVariant() {
    _init_properties_Toc_kt__9n5312();
    return TocBorderedVariant;
  }
  var TocBorderedVariant;
  var com_varabyte_kobweb_silk_components_document_TocVars$stable;
  function TocKind() {
  }
  function TocVars$_get_BorderColor_$ref_d3lohz() {
    return function (p0) {
      return p0.get_BorderColor_hljtgy_k$();
    };
  }
  function TocVars() {
    TocVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().value$default_36t2hw_k$();
    tmp.BorderColor$delegate_1 = StyleVariable(tmp0_defaultFallback, 'silk');
  }
  protoOf(TocVars).get_BorderColor_hljtgy_k$ = function () {
    var tmp = KProperty1;
    return this.BorderColor$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('BorderColor', 1, tmp, TocVars$_get_BorderColor_$ref_d3lohz(), null));
  };
  var TocVars_instance;
  function TocVars_getInstance() {
    if (TocVars_instance == null)
      new TocVars();
    return TocVars_instance;
  }
  function TocStyle$lambda($this$base) {
    _init_properties_Toc_kt__9n5312();
    return padding(textAlign(listStyle(Companion_getInstance(), Companion_getInstance_0().get_None_wo6tgh_k$()), Companion_getInstance_1().get_Start_ih4i6x_k$()), get_cssRem(0));
  }
  function TocBorderedVariant$lambda($this$addVariantBase) {
    _init_properties_Toc_kt__9n5312();
    var tmp = borderRadius(Companion_getInstance(), get_px(5));
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return padding(border(tmp, tmp_0, 'solid', TocVars_getInstance().get_BorderColor_hljtgy_k$().value$default_36t2hw_k$()), get_cssRem(1));
  }
  var properties_initialized_Toc_kt_t9o4p4;
  function _init_properties_Toc_kt__9n5312() {
    if (!properties_initialized_Toc_kt_t9o4p4) {
      properties_initialized_Toc_kt_t9o4p4 = true;
      var tmp = Companion_getInstance_3();
      TocStyle = base(tmp, VOID, TocStyle$lambda);
      var tmp_0 = get_TocStyle();
      TocBorderedVariant = addVariantBase(tmp_0, VOID, TocBorderedVariant$lambda);
      com_varabyte_kobweb_silk_components_document_TocVars$stable = 8;
    }
  }
  function get_ImageStyle() {
    _init_properties_Image_kt__h9v8mh();
    return ImageStyle;
  }
  var ImageStyle;
  function get_FitWidthImageVariant() {
    _init_properties_Image_kt__h9v8mh();
    return FitWidthImageVariant;
  }
  var FitWidthImageVariant;
  function Image(src, modifier, variant, width, height, alt, ref, $composer, $changed, $default) {
    _init_properties_Image_kt__h9v8mh();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var width_0 = {_v: width};
    var height_0 = {_v: height};
    var alt_0 = {_v: alt};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(355628426);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(src) ? 4 : 2);
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
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(width_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(height_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(alt_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ((($changed & 2097152) === 0 ? $composer_0.changed_ga7h3f_k$(ref_0._v) : $composer_0.changedInstance_s1wkiy_k$(ref_0._v)) ? 1048576 : 524288);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 599187) === 599186), $dirty & 1)) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 4) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        width_0._v = null;
      }
      if (!(($default & 16) === 0)) {
        height_0._v = null;
      }
      if (!(($default & 32) === 0)) {
        alt_0._v = '';
      }
      if (!(($default & 64) === 0)) {
        ref_0._v = null;
      }
      if (!(ref_0._v == null)) {
        $composer_0.startReplaceGroup_5hh8aj_k$(-1157605759);
        var tmp = Companion_getInstance();
        // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
        Companion_getInstance_4();
        // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = toAttrs(display(tmp, 'none'));
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-1877997712, true, Image$lambda(ref_0), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance_5().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Div(tmp_0, tmp0, $composer_0, 48, 0);
        $composer_0.endReplaceGroup_ek144q_k$();
      } else {
        $composer_0.startReplaceGroup_5hh8aj_k$(-1159477384);
        $composer_0.endReplaceGroup_ek144q_k$();
      }
      var tmp_3 = Companion_getInstance_6().prependTo_e25c5r_k$(src);
      var tmp_4 = alt_0._v;
      var tmp_5 = toModifier(get_ImageStyle(), [variant_0._v], $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter() | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 3).then_mmfvo6_k$(modifier_0._v);
      var tmp0_0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = !!(($dirty & 7168) === 2048 | ($dirty & 57344) === 16384);
      // Inline function 'kotlin.let' call
      var it_0 = tmp0_0.rememberedValue_4dg93v_k$();
      var tmp_6;
      if (invalid_0 || it_0 === Companion_getInstance_5().get_Empty_i9b85g_k$()) {
        var value_0 = Image$lambda_0(width_0, height_0);
        tmp0_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_6 = value_0;
      } else {
        tmp_6 = it_0;
      }
      var tmp_7 = tmp_6;
      var tmp$ret$14 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      Img(tmp_3, tmp_4, toAttrs(tmp_5, tmp$ret$14), $composer_0, 112 & $dirty >> 12, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Image$lambda_1(src, modifier_0, variant_0, width_0, height_0, alt_0, ref_0, $changed, $default));
    }
  }
  function ImageKind() {
  }
  function ImageStyle$lambda($this$CssStyle) {
    _init_properties_Image_kt__h9v8mh();
    return Unit_getInstance();
  }
  function FitWidthImageVariant$lambda($this$addVariantBase) {
    _init_properties_Image_kt__h9v8mh();
    return objectFit(width(Companion_getInstance(), get_percent(100)), Companion_getInstance_7().get_ScaleDown_ala7ur_k$());
  }
  function Image$lambda$lambda(it) {
    _init_properties_Image_kt__h9v8mh();
    var tmp = it.nextSibling;
    return tmp instanceof HTMLImageElement ? tmp : THROW_CCE();
  }
  function Image$lambda($ref) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp = $ref._v;
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (false || it === Companion_getInstance_5().get_Empty_i9b85g_k$()) {
        var value = Image$lambda$lambda;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp$ret$3 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      registerRefScope($this$Div, tmp, tmp$ret$3, $composer_0, 384 | 14 & $changed | com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter() << 3);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function Image$lambda_0($width, $height) {
    return function ($this$toAttrs) {
      var tmp;
      if (!($width._v == null)) {
        $this$toAttrs.attr_w68641_k$('width', $width._v.toString());
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!($height._v == null)) {
        $this$toAttrs.attr_w68641_k$('height', $height._v.toString());
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Image$lambda_1($src, $modifier, $variant, $width, $height, $alt, $ref, $$changed, $$default) {
    return function ($composer, $force) {
      Image($src, $modifier._v, $variant._v, $width._v, $height._v, $alt._v, $ref._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  var properties_initialized_Image_kt_7kjzpx;
  function _init_properties_Image_kt__h9v8mh() {
    if (!properties_initialized_Image_kt_7kjzpx) {
      properties_initialized_Image_kt_7kjzpx = true;
      ImageStyle = CssStyle(VOID, ImageStyle$lambda);
      var tmp = get_ImageStyle();
      FitWidthImageVariant = addVariantBase(tmp, VOID, FitWidthImageVariant$lambda);
    }
  }
  function get_LinkStyle() {
    _init_properties_Link_kt__dm1ox2();
    return LinkStyle;
  }
  var LinkStyle;
  function get_UndecoratedLinkVariant() {
    _init_properties_Link_kt__dm1ox2();
    return UndecoratedLinkVariant;
  }
  var UndecoratedLinkVariant;
  function get_UncoloredLinkVariant() {
    _init_properties_Link_kt__dm1ox2();
    return UncoloredLinkVariant;
  }
  var UncoloredLinkVariant;
  function get_AlwaysUnderlinedLinkVariant() {
    _init_properties_Link_kt__dm1ox2();
    return AlwaysUnderlinedLinkVariant;
  }
  var AlwaysUnderlinedLinkVariant;
  var com_varabyte_kobweb_silk_components_navigation_LinkVars$stable;
  function LinkKind() {
  }
  function LinkVars$_get_DefaultColor_$ref_plujau() {
    return function (p0) {
      return p0.get_DefaultColor_3x88vp_k$();
    };
  }
  function LinkVars$_get_VisitedColor_$ref_j60201() {
    return function (p0) {
      return p0.get_VisitedColor_7oj77i_k$();
    };
  }
  function LinkVars() {
    LinkVars_instance = this;
    this.DefaultColor$delegate_1 = StyleVariable_0('silk');
    this.VisitedColor$delegate_1 = StyleVariable_0('silk');
  }
  protoOf(LinkVars).get_DefaultColor_3x88vp_k$ = function () {
    var tmp = KProperty1;
    return this.DefaultColor$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('DefaultColor', 1, tmp, LinkVars$_get_DefaultColor_$ref_plujau(), null));
  };
  protoOf(LinkVars).get_VisitedColor_7oj77i_k$ = function () {
    var tmp = KProperty1;
    return this.VisitedColor$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('VisitedColor', 1, tmp, LinkVars$_get_VisitedColor_$ref_j60201(), null));
  };
  var LinkVars_instance;
  function LinkVars_getInstance() {
    if (LinkVars_instance == null)
      new LinkVars();
    return LinkVars_instance;
  }
  function Link(path, modifier, variant, openInternalLinksStrategy, openExternalLinksStrategy, updateHistoryMode, ref, content, $composer, $changed, $default) {
    _init_properties_Link_kt__dm1ox2();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var openInternalLinksStrategy_0 = {_v: openInternalLinksStrategy};
    var openExternalLinksStrategy_0 = {_v: openExternalLinksStrategy};
    var updateHistoryMode_0 = {_v: updateHistoryMode};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-253586851);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(path) ? 4 : 2);
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
      var tmpEnum = openInternalLinksStrategy_0._v;
      if (tmp_0.changed_kpusro_k$(tmpEnum == null ? -1 : tmpEnum.get_ordinal_ip24qg_k$())) {
        tmp = 2048;
      } else {
        tmp = 1024;
      }
      $dirty = $dirty | tmp;
    }
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0) {
      var tmp_1;
      var tmp_2 = $composer_0;
      var tmpEnum_0 = openExternalLinksStrategy_0._v;
      if (tmp_2.changed_kpusro_k$(tmpEnum_0 == null ? -1 : tmpEnum_0.get_ordinal_ip24qg_k$())) {
        tmp_1 = 16384;
      } else {
        tmp_1 = 8192;
      }
      $dirty = $dirty | tmp_1;
    }
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0) {
      var tmp_3;
      var tmp_4 = $composer_0;
      var tmpEnum_1 = updateHistoryMode_0._v;
      if (tmp_4.changed_kpusro_k$(tmpEnum_1 == null ? -1 : tmpEnum_1.get_ordinal_ip24qg_k$())) {
        tmp_3 = 131072;
      } else {
        tmp_3 = 65536;
      }
      $dirty = $dirty | tmp_3;
    }
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ((($changed & 2097152) === 0 ? $composer_0.changed_ga7h3f_k$(ref_0._v) : $composer_0.changedInstance_s1wkiy_k$(ref_0._v)) ? 1048576 : 524288);
    if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 8388608 : 4194304);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 4793491) === 4793490), $dirty & 1)) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 4) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        openInternalLinksStrategy_0._v = null;
      }
      if (!(($default & 16) === 0)) {
        openExternalLinksStrategy_0._v = null;
      }
      if (!(($default & 32) === 0)) {
        updateHistoryMode_0._v = null;
      }
      if (!(($default & 64) === 0)) {
        ref_0._v = null;
      }
      var tmp_5 = toAttrs(toModifier(get_LinkStyle(), [variant_0._v], $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter() | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 3).then_mmfvo6_k$(modifier_0._v));
      var tmp_6 = openInternalLinksStrategy_0._v;
      var tmp_7 = openExternalLinksStrategy_0._v;
      var tmp_8 = updateHistoryMode_0._v;
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(682923050, true, Link$lambda(ref_0, content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_9;
      if (invalid || it === Companion_getInstance_5().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_0(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_9 = value;
      } else {
        tmp_9 = it;
      }
      var tmp_10 = tmp_9;
      var tmp0 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Anchor(path, tmp_5, tmp_6, tmp_7, tmp_8, tmp0, $composer_0, 196608 | 14 & $dirty | 896 & $dirty >> 3 | 7168 & $dirty >> 3 | 57344 & $dirty >> 3, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Link$lambda_0(path, modifier_0, variant_0, openInternalLinksStrategy_0, openExternalLinksStrategy_0, updateHistoryMode_0, ref_0, content, $changed, $default));
    }
  }
  function LinkStyle$lambda($this$CssStyle) {
    _init_properties_Link_kt__dm1ox2();
    $this$CssStyle.base_y8uu8g_k$(LinkStyle$lambda$lambda);
    var tmp = get_link($this$CssStyle);
    $this$CssStyle.invoke_9o9x0o_k$(tmp, LinkStyle$lambda$lambda_0);
    var tmp_0 = get_visited($this$CssStyle);
    $this$CssStyle.invoke_9o9x0o_k$(tmp_0, LinkStyle$lambda$lambda_1);
    var tmp_1 = get_hover($this$CssStyle);
    $this$CssStyle.invoke_9o9x0o_k$(tmp_1, LinkStyle$lambda$lambda_2);
    return Unit_getInstance();
  }
  function LinkStyle$lambda$lambda() {
    _init_properties_Link_kt__dm1ox2();
    return textDecorationLine(Companion_getInstance(), Companion_getInstance_8().get_None_wo6tgh_k$());
  }
  function LinkStyle$lambda$lambda_0() {
    _init_properties_Link_kt__dm1ox2();
    return color(Companion_getInstance(), LinkVars_getInstance().get_DefaultColor_3x88vp_k$().value$default_36t2hw_k$());
  }
  function LinkStyle$lambda$lambda_1() {
    _init_properties_Link_kt__dm1ox2();
    return color(Companion_getInstance(), LinkVars_getInstance().get_VisitedColor_7oj77i_k$().value$default_36t2hw_k$());
  }
  function LinkStyle$lambda$lambda_2() {
    _init_properties_Link_kt__dm1ox2();
    return textDecorationLine(Companion_getInstance(), Companion_getInstance_8().get_Underline_oo7egz_k$());
  }
  function UndecoratedLinkVariant$lambda($this$addVariant) {
    _init_properties_Link_kt__dm1ox2();
    var tmp = get_hover($this$addVariant);
    $this$addVariant.invoke_9o9x0o_k$(tmp, UndecoratedLinkVariant$lambda$lambda);
    return Unit_getInstance();
  }
  function UndecoratedLinkVariant$lambda$lambda() {
    _init_properties_Link_kt__dm1ox2();
    return textDecorationLine(Companion_getInstance(), Companion_getInstance_8().get_None_wo6tgh_k$());
  }
  function UncoloredLinkVariant$lambda($this$addVariant) {
    _init_properties_Link_kt__dm1ox2();
    var colorModifier = color(Companion_getInstance(), get_ColorVar().value$default_36t2hw_k$());
    var tmp = get_link($this$addVariant);
    $this$addVariant.invoke_9o9x0o_k$(tmp, UncoloredLinkVariant$lambda$lambda(colorModifier));
    var tmp_0 = get_visited($this$addVariant);
    $this$addVariant.invoke_9o9x0o_k$(tmp_0, UncoloredLinkVariant$lambda$lambda_0(colorModifier));
    return Unit_getInstance();
  }
  function UncoloredLinkVariant$lambda$lambda($colorModifier) {
    return function () {
      return $colorModifier;
    };
  }
  function UncoloredLinkVariant$lambda$lambda_0($colorModifier) {
    return function () {
      return $colorModifier;
    };
  }
  function AlwaysUnderlinedLinkVariant$lambda($this$addVariant) {
    _init_properties_Link_kt__dm1ox2();
    $this$addVariant.base_y8uu8g_k$(AlwaysUnderlinedLinkVariant$lambda$lambda);
    return Unit_getInstance();
  }
  function AlwaysUnderlinedLinkVariant$lambda$lambda() {
    _init_properties_Link_kt__dm1ox2();
    return textDecorationLine(Companion_getInstance(), Companion_getInstance_8().get_Underline_oo7egz_k$());
  }
  function Link$lambda($ref, $content) {
    return function ($this$Anchor, $composer, $changed) {
      var $composer_0 = $composer;
      registerRefScope_0($this$Anchor, $ref._v, $composer_0, 14 & $changed | com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter() << 3);
      $content($composer_0, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_0(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function Link$lambda_0($path, $modifier, $variant, $openInternalLinksStrategy, $openExternalLinksStrategy, $updateHistoryMode, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Link($path, $modifier._v, $variant._v, $openInternalLinksStrategy._v, $openExternalLinksStrategy._v, $updateHistoryMode._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  var properties_initialized_Link_kt_5x6v44;
  function _init_properties_Link_kt__dm1ox2() {
    if (!properties_initialized_Link_kt_5x6v44) {
      properties_initialized_Link_kt_5x6v44 = true;
      LinkStyle = CssStyle(VOID, LinkStyle$lambda);
      var tmp = get_LinkStyle();
      UndecoratedLinkVariant = addVariant(tmp, VOID, UndecoratedLinkVariant$lambda);
      var tmp_0 = get_LinkStyle();
      UncoloredLinkVariant = addVariant(tmp_0, VOID, UncoloredLinkVariant$lambda);
      var tmp_1 = get_LinkStyle();
      AlwaysUnderlinedLinkVariant = addVariant(tmp_1, VOID, AlwaysUnderlinedLinkVariant$lambda);
      com_varabyte_kobweb_silk_components_navigation_LinkVars$stable = 8;
    }
  }
  function initSilkWidgetsKobweb(ctx) {
    var mutableTheme = ctx.get_theme_iz24rk_k$();
    // Inline function 'kotlin.apply' call
    var this_0 = mutableTheme.get_palettes_f7ft27_k$();
    // Inline function 'kotlin.apply' call
    var this_1 = this_0.get_light_iuogdp_k$();
    get_link_0(this_1).set_djj1hu_k$(Colors_getInstance().get_Blue_wnz3k3_k$(), Colors_getInstance().get_Purple_33oyqt_k$());
    // Inline function 'kotlin.apply' call
    var this_2 = this_0.get_dark_wokkvz_k$();
    get_link_0(this_2).set_djj1hu_k$(Colors_getInstance().get_Cyan_wnzzpo_k$(), Colors_getInstance().get_Violet_5rb5wo_k$());
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = get_entries().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      var tmp = ctx.get_stylesheet_hk204p_k$();
      var tmp_0 = '.' + get_cssClass(element);
      registerStyleBase(tmp, tmp_0, initSilkWidgetsKobweb$lambda(element));
    }
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-image', get_ImageStyle());
    mutableTheme.registerVariant$default_k7o5vi_k$('-fit-width', get_FitWidthImageVariant());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-link', get_LinkStyle());
    mutableTheme.registerVariant$default_k7o5vi_k$('-uncolored', get_UncoloredLinkVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-undecorated', get_UndecoratedLinkVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-always-underlined', get_AlwaysUnderlinedLinkVariant());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-toc', get_TocStyle());
    mutableTheme.registerVariant$default_k7o5vi_k$('-bordered', get_TocBorderedVariant());
  }
  function initSilkWidgetsKobweb$lambda($colorMode) {
    return function () {
      var palette = toPalette($colorMode);
      return setVariable(setVariable(Companion_getInstance(), LinkVars_getInstance().get_DefaultColor_3x88vp_k$(), get_link_1(palette).get_default_qtagd4_k$()), LinkVars_getInstance().get_VisitedColor_7oj77i_k$(), get_link_1(palette).get_visited_8zg8qp_k$());
    };
  }
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetKobwebColorGroups_MutableLink$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetKobwebColorGroups$stable;
  function SilkWidgetKobwebColorGroups$MutableLink$_get_default_$ref_q6ezpd() {
    return function (p0) {
      return p0.get_default_qtagd4_k$();
    };
  }
  function SilkWidgetKobwebColorGroups$MutableLink$_set_default_$ref_ekavxv() {
    return function (p0, p1) {
      p0.set_default_r70t7m_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetKobwebColorGroups$MutableLink$_get_default_$ref_q6ezpd_0() {
    return function (p0) {
      return p0.get_default_qtagd4_k$();
    };
  }
  function SilkWidgetKobwebColorGroups$MutableLink$_set_default_$ref_ekavxv_0() {
    return function (p0, p1) {
      p0.set_default_r70t7m_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetKobwebColorGroups$MutableLink$_get_visited_$ref_txpy16() {
    return function (p0) {
      return p0.get_visited_8zg8qp_k$();
    };
  }
  function SilkWidgetKobwebColorGroups$MutableLink$_set_visited_$ref_aszxm2() {
    return function (p0, p1) {
      p0.set_visited_wsyhe3_k$(p1);
      return Unit_getInstance();
    };
  }
  function SilkWidgetKobwebColorGroups$MutableLink$_get_visited_$ref_txpy16_0() {
    return function (p0) {
      return p0.get_visited_8zg8qp_k$();
    };
  }
  function SilkWidgetKobwebColorGroups$MutableLink$_set_visited_$ref_aszxm2_0() {
    return function (p0, p1) {
      p0.set_visited_wsyhe3_k$(p1);
      return Unit_getInstance();
    };
  }
  function Link_0() {
  }
  function MutableLink(palette) {
    ColorGroup.call(this, palette, 'link');
    this.default$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.visited$delegate_1 = this.paletteEntry_4qg1pz_k$();
  }
  protoOf(MutableLink).set_default_r70t7m_k$ = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetKobwebColorGroups$MutableLink$_get_default_$ref_q6ezpd_0();
    return this.default$delegate_1.setValue_jpcais_k$(this, getPropertyCallableRef('default', 1, tmp, tmp_0, SilkWidgetKobwebColorGroups$MutableLink$_set_default_$ref_ekavxv_0()), _set____db54di);
  };
  protoOf(MutableLink).get_default_qtagd4_k$ = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetKobwebColorGroups$MutableLink$_get_default_$ref_q6ezpd();
    return this.default$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('default', 1, tmp, tmp_0, SilkWidgetKobwebColorGroups$MutableLink$_set_default_$ref_ekavxv()));
  };
  protoOf(MutableLink).set_visited_wsyhe3_k$ = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetKobwebColorGroups$MutableLink$_get_visited_$ref_txpy16_0();
    return this.visited$delegate_1.setValue_jpcais_k$(this, getPropertyCallableRef('visited', 1, tmp, tmp_0, SilkWidgetKobwebColorGroups$MutableLink$_set_visited_$ref_aszxm2_0()), _set____db54di);
  };
  protoOf(MutableLink).get_visited_8zg8qp_k$ = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetKobwebColorGroups$MutableLink$_get_visited_$ref_txpy16();
    return this.visited$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('visited', 1, tmp, tmp_0, SilkWidgetKobwebColorGroups$MutableLink$_set_visited_$ref_aszxm2()));
  };
  protoOf(MutableLink).set_djj1hu_k$ = function (default_0, visited) {
    this.set_default_r70t7m_k$(default_0);
    this.set_visited_wsyhe3_k$(visited);
  };
  function SilkWidgetKobwebColorGroups() {
    SilkWidgetKobwebColorGroups_instance = this;
  }
  var SilkWidgetKobwebColorGroups_instance;
  function SilkWidgetKobwebColorGroups_getInstance() {
    if (SilkWidgetKobwebColorGroups_instance == null)
      new SilkWidgetKobwebColorGroups();
    return SilkWidgetKobwebColorGroups_instance;
  }
  function get_link_0(_this__u8e3s4) {
    _init_properties_SilkWidgetKobwebColorGroups_kt__t3jte2();
    return new MutableLink(_this__u8e3s4);
  }
  function get_link_1(_this__u8e3s4) {
    _init_properties_SilkWidgetKobwebColorGroups_kt__t3jte2();
    return get_link_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  var properties_initialized_SilkWidgetKobwebColorGroups_kt_ed8ye0;
  function _init_properties_SilkWidgetKobwebColorGroups_kt__t3jte2() {
    if (!properties_initialized_SilkWidgetKobwebColorGroups_kt_ed8ye0) {
      properties_initialized_SilkWidgetKobwebColorGroups_kt_ed8ye0 = true;
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetKobwebColorGroups_MutableLink$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetKobwebColorGroups$stable = 0;
    }
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Image;
  _.$_$.b = Link;
  _.$_$.c = initSilkWidgetsKobweb;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-silk-widgets-kobweb.js.map
