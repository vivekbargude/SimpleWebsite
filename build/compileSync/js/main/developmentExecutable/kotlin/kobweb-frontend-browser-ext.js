(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-browser-ext'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-browser-ext'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-browser-ext'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'kobweb-frontend-browser-ext'.");
    }
    globalThis['kobweb-frontend-browser-ext'] = factory(typeof globalThis['kobweb-frontend-browser-ext'] === 'undefined' ? {} : globalThis['kobweb-frontend-browser-ext'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.g2;
  var Char__rangeTo_impl_tkncvp = kotlin_kotlin.$_$.h2;
  var plus = kotlin_kotlin.$_$.j8;
  var plus_0 = kotlin_kotlin.$_$.k8;
  var protoOf = kotlin_kotlin.$_$.lc;
  var IllegalArgumentException = kotlin_kotlin.$_$.lf;
  var initMetadataForCompanion = kotlin_kotlin.$_$.jb;
  var charSequenceLength = kotlin_kotlin.$_$.xa;
  var toString = kotlin_kotlin.$_$.oc;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.n1;
  var Unit_getInstance = kotlin_kotlin.$_$.m4;
  var charCodeAt = kotlin_kotlin.$_$.va;
  var isDigit = kotlin_kotlin.$_$.yd;
  var substring = kotlin_kotlin.$_$.se;
  var CharSequence = kotlin_kotlin.$_$.ff;
  var initMetadataForClass = kotlin_kotlin.$_$.ib;
  var VOID = kotlin_kotlin.$_$.f;
  var initMetadataForObject = kotlin_kotlin.$_$.nb;
  var CompletableDeferred = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var json = kotlin_kotlin.$_$.cc;
  var THROW_IAE = kotlin_kotlin.$_$.uf;
  var enumEntries = kotlin_kotlin.$_$.ma;
  var Enum = kotlin_kotlin.$_$.if;
  var asCoroutineDispatcher = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t;
  var Exception = kotlin_kotlin.$_$.kf;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.e1;
  var decodeToString = kotlin_kotlin.$_$.od;
  var THROW_CCE = kotlin_kotlin.$_$.tf;
  var isCharSequence = kotlin_kotlin.$_$.sb;
  var trim = kotlin_kotlin.$_$.af;
  var isBlank = kotlin_kotlin.$_$.xd;
  var split = kotlin_kotlin.$_$.le;
  var compareTo = kotlin_kotlin.$_$.ya;
  var repeat = kotlin_kotlin.$_$.ie;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.j1;
  var captureStack = kotlin_kotlin.$_$.sa;
  var intercepted = kotlin_kotlin.$_$.u9;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.c1;
  var CoroutineImpl = kotlin_kotlin.$_$.ia;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var isInterface = kotlin_kotlin.$_$.wb;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.s9;
  var initMetadataForLambda = kotlin_kotlin.$_$.mb;
  var Companion_getInstance = kotlin_kotlin.$_$.h4;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.k2;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.kb;
  var SuspendFunction1 = kotlin_kotlin.$_$.ja;
  var KProperty1 = kotlin_kotlin.$_$.bd;
  var getPropertyCallableRef = kotlin_kotlin.$_$.fb;
  var lazy = kotlin_kotlin.$_$.ng;
  var replace = kotlin_kotlin.$_$.je;
  var first = kotlin_kotlin.$_$.ud;
  var last = kotlin_kotlin.$_$.de;
  var charSequenceGet = kotlin_kotlin.$_$.wa;
  var isUpperCase = kotlin_kotlin.$_$.ae;
  var Char = kotlin_kotlin.$_$.gf;
  var get_lastIndex = kotlin_kotlin.$_$.ce;
  var isLowerCase = kotlin_kotlin.$_$.zd;
  var toString_0 = kotlin_kotlin.$_$.j2;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.e4;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.g;
  var toDuration = kotlin_kotlin.$_$.df;
  var _Duration___get_inWholeMilliseconds__impl__msfiry = kotlin_kotlin.$_$.d2;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(CssIdent, 'CssIdent', VOID, VOID, [CharSequence]);
  initMetadataForObject(FetchDefaults, 'FetchDefaults');
  initMetadataForClass(HttpMethod, 'HttpMethod', VOID, Enum);
  initMetadataForClass(ResponseException, 'ResponseException', VOID, Exception);
  initMetadataForLambda(getBodyBytesAsync$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForCoroutine($tryFetchCOROUTINE$, CoroutineImpl);
  initMetadataForClass(HttpFetcher, 'HttpFetcher', VOID, VOID, VOID, [4, 5]);
  initMetadataForClass(AbortController_0, 'AbortController', AbortController_0);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(CancellableActionHandle, 'CancellableActionHandle');
  //endregion
  function get_ALPHANUMERICS() {
    _init_properties_ElementUtils_kt__9yjtit();
    return ALPHANUMERICS;
  }
  var ALPHANUMERICS;
  var properties_initialized_ElementUtils_kt_gopq0n;
  function _init_properties_ElementUtils_kt__9yjtit() {
    if (!properties_initialized_ElementUtils_kt_gopq0n) {
      properties_initialized_ElementUtils_kt_gopq0n = true;
      ALPHANUMERICS = plus_0(plus(Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(122)), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(65), _Char___init__impl__6a9atx(90))), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(57)));
    }
  }
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).isValid_lc9qh4_k$ = function (identifier) {
    return !(this.tryCreate_50aflp_k$(identifier) == null);
  };
  protoOf(Companion).tryCreate_50aflp_k$ = function (identifier) {
    var tmp;
    try {
      tmp = new CssIdent(identifier);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  var Companion_instance;
  function Companion_getInstance_1() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function CssIdent(asStr) {
    Companion_getInstance_1();
    this.asStr_1 = asStr;
    var errorMsg = 'Invalid CSS identifier: "' + this.asStr_1 + '". See https://developer.mozilla.org/en-US/docs/Web/CSS/ident#syntax';
    // Inline function 'kotlin.text.isNotEmpty' call
    var this_0 = this.asStr_1;
    // Inline function 'kotlin.require' call
    if (!(charSequenceLength(this_0) > 0)) {
      var message = errorMsg;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!!isDigit(charCodeAt(this.asStr_1, 0))) {
      var message_0 = errorMsg;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    if (!CSS.supports('--' + this.asStr_1 + ':0')) {
      var message_1 = errorMsg;
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
  }
  protoOf(CssIdent).get_asStr_iosp6e_k$ = function () {
    return this.asStr_1;
  };
  protoOf(CssIdent).renamed_j20m73_k$ = function (action) {
    return new CssIdent(action(this.asStr_1));
  };
  protoOf(CssIdent).get_kdzpvg_k$ = function (index) {
    return charCodeAt(this.asStr_1, index);
  };
  protoOf(CssIdent).subSequence_hm5hnj_k$ = function (startIndex, endIndex) {
    return substring(this.asStr_1, startIndex, endIndex);
  };
  protoOf(CssIdent).get_length_g42xv3_k$ = function () {
    return this.asStr_1.length;
  };
  function FetchDefaults() {
    FetchDefaults_instance = this;
    this.Headers_1 = null;
    this.Redirect_1 = null;
  }
  protoOf(FetchDefaults).set_Headers_4n4eh5_k$ = function (_set____db54di) {
    this.Headers_1 = _set____db54di;
  };
  protoOf(FetchDefaults).get_Headers_t2ylqb_k$ = function () {
    return this.Headers_1;
  };
  protoOf(FetchDefaults).set_Redirect_n90b3g_k$ = function (_set____db54di) {
    this.Redirect_1 = _set____db54di;
  };
  protoOf(FetchDefaults).get_Redirect_rgkds5_k$ = function () {
    return this.Redirect_1;
  };
  var FetchDefaults_instance;
  function FetchDefaults_getInstance() {
    if (FetchDefaults_instance == null)
      new FetchDefaults();
    return FetchDefaults_instance;
  }
  function fetch(_this__u8e3s4, method, resource, headers, body, redirect, abortController, $completion) {
    headers = headers === VOID ? FetchDefaults_getInstance().Headers_1 : headers;
    body = body === VOID ? null : body;
    redirect = redirect === VOID ? FetchDefaults_getInstance().Redirect_1 : redirect;
    abortController = abortController === VOID ? null : abortController;
    var responseBytesDeferred = CompletableDeferred();
    var tmp;
    var tmp_0;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    if (!(headers == null || headers.isEmpty_y1axqb_k$())) {
      tmp_0 = true;
    } else {
      tmp_0 = !(body == null);
    }
    if (tmp_0) {
      // Inline function 'kotlin.apply' call
      var this_0 = json([]);
      if (!(body == null)) {
        this_0['Content-Length'] = body.length;
      }
      if (headers == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.collections.iterator' call
        var _iterator__ex2g4s = headers.get_entries_p20ztl_k$().iterator_jk1svi_k$();
        while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
          var _destruct__k2r9zo = _iterator__ex2g4s.next_20eer_k$();
          // Inline function 'kotlin.collections.component1' call
          var key = _destruct__k2r9zo.get_key_18j28a_k$();
          // Inline function 'kotlin.collections.component2' call
          var value = _destruct__k2r9zo.get_value_j01efc_k$();
          this_0[key] = value;
        }
      }
      tmp = this_0;
    } else {
      tmp = null;
    }
    var headersJson = tmp;
    var tmp0 = method.get_name_woqyms_k$();
    var tmp2 = headersJson == null ? undefined : headersJson;
    var tmp4 = body == null ? undefined : body;
    // Inline function 'org.w3c.fetch.RequestInit' call
    var redirect_0 = redirect == null ? undefined : redirect;
    var referrer = undefined;
    var referrerPolicy = undefined;
    var mode = undefined;
    var credentials = undefined;
    var cache = undefined;
    var integrity = undefined;
    var keepalive = undefined;
    var window_0 = undefined;
    var o = {};
    o['method'] = tmp0;
    o['headers'] = tmp2;
    o['body'] = tmp4;
    o['referrer'] = referrer;
    o['referrerPolicy'] = referrerPolicy;
    o['mode'] = mode;
    o['credentials'] = credentials;
    o['cache'] = cache;
    o['redirect'] = redirect_0;
    o['integrity'] = integrity;
    o['keepalive'] = keepalive;
    o['window'] = window_0;
    var requestInit = o;
    if (!(abortController == null)) {
      var requestInitDynamic = requestInit;
      requestInitDynamic['signal'] = abortController.get_signal_9p0zln_k$();
    }
    var tmp_1 = _this__u8e3s4.window.fetch(resource, requestInit);
    var tmp_2 = fetch$lambda(responseBytesDeferred);
    tmp_1.then(tmp_2, fetch$lambda_0(responseBytesDeferred));
    return responseBytesDeferred.await_4rdzbx_k$($completion);
  }
  var HttpMethod_DELETE_instance;
  var HttpMethod_GET_instance;
  var HttpMethod_HEAD_instance;
  var HttpMethod_OPTIONS_instance;
  var HttpMethod_PATCH_instance;
  var HttpMethod_POST_instance;
  var HttpMethod_PUT_instance;
  function values() {
    return [HttpMethod_DELETE_getInstance(), HttpMethod_GET_getInstance(), HttpMethod_HEAD_getInstance(), HttpMethod_OPTIONS_getInstance(), HttpMethod_PATCH_getInstance(), HttpMethod_POST_getInstance(), HttpMethod_PUT_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'DELETE':
        return HttpMethod_DELETE_getInstance();
      case 'GET':
        return HttpMethod_GET_getInstance();
      case 'HEAD':
        return HttpMethod_HEAD_getInstance();
      case 'OPTIONS':
        return HttpMethod_OPTIONS_getInstance();
      case 'PATCH':
        return HttpMethod_PATCH_getInstance();
      case 'POST':
        return HttpMethod_POST_getInstance();
      case 'PUT':
        return HttpMethod_PUT_getInstance();
      default:
        HttpMethod_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var HttpMethod_entriesInitialized;
  function HttpMethod_initEntries() {
    if (HttpMethod_entriesInitialized)
      return Unit_getInstance();
    HttpMethod_entriesInitialized = true;
    HttpMethod_DELETE_instance = new HttpMethod('DELETE', 0);
    HttpMethod_GET_instance = new HttpMethod('GET', 1);
    HttpMethod_HEAD_instance = new HttpMethod('HEAD', 2);
    HttpMethod_OPTIONS_instance = new HttpMethod('OPTIONS', 3);
    HttpMethod_PATCH_instance = new HttpMethod('PATCH', 4);
    HttpMethod_POST_instance = new HttpMethod('POST', 5);
    HttpMethod_PUT_instance = new HttpMethod('PUT', 6);
  }
  var $ENTRIES;
  function HttpMethod(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function tryFetch(_this__u8e3s4, method, resource, headers, body, redirect, logOnError, abortController, $completion) {
    headers = headers === VOID ? FetchDefaults_getInstance().Headers_1 : headers;
    body = body === VOID ? null : body;
    redirect = redirect === VOID ? FetchDefaults_getInstance().Redirect_1 : redirect;
    logOnError = logOnError === VOID ? false : logOnError;
    abortController = abortController === VOID ? null : abortController;
    var tmp = new $tryFetchCOROUTINE$(_this__u8e3s4, method, resource, headers, body, redirect, logOnError, abortController, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function getBodyBytesAsync(_this__u8e3s4, result) {
    var tmp = CoroutineScope(asCoroutineDispatcher(window));
    launch(tmp, VOID, VOID, getBodyBytesAsync$slambda_0(result, _this__u8e3s4, null));
  }
  function ResponseException(response, bodyBytes) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.append_22ad7x_k$('URL = ' + response.url + ', Status = ' + response.status + ', Status Text = ' + response.statusText);
    var tmp1_safe_receiver = bodyBytes == null ? null : decodeToString(bodyBytes);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.text.trim' call
      tmp = toString(trim(isCharSequence(tmp1_safe_receiver) ? tmp1_safe_receiver : THROW_CCE()));
    }
    var tmp2_safe_receiver = tmp;
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      var tmp_1;
      // Inline function 'kotlin.text.isNotBlank' call
      if (!isBlank(tmp2_safe_receiver)) {
        tmp_1 = tmp2_safe_receiver;
      } else {
        tmp_1 = null;
      }
      tmp_0 = tmp_1;
    }
    var bodyString = tmp_0;
    if (!(bodyString == null)) {
      // Inline function 'kotlin.text.appendLine' call
      this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(10));
      var lines = split(bodyString, ['\n']);
      var tmp$ret$5;
      $l$block: {
        // Inline function 'kotlin.collections.maxOfOrNull' call
        var iterator = lines.iterator_jk1svi_k$();
        if (!iterator.hasNext_bitz1p_k$()) {
          tmp$ret$5 = null;
          break $l$block;
        }
        var maxValue = iterator.next_20eer_k$().length;
        while (iterator.hasNext_bitz1p_k$()) {
          var v = iterator.next_20eer_k$().length;
          if (compareTo(maxValue, v) < 0) {
            maxValue = v;
          }
        }
        tmp$ret$5 = maxValue;
      }
      var tmp3_elvis_lhs = tmp$ret$5;
      var longestLineLength = tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs;
      var indent = '  ';
      var boundary = indent + repeat('-', longestLineLength);
      // Inline function 'kotlin.text.appendLine' call
      // Inline function 'kotlin.text.appendLine' call
      this_0.append_22ad7x_k$(boundary).append_am5a4z_k$(_Char___init__impl__6a9atx(10));
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = lines.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'kotlin.text.appendLine' call
        var value = indent + element;
        // Inline function 'kotlin.text.appendLine' call
        this_0.append_22ad7x_k$(value).append_am5a4z_k$(_Char___init__impl__6a9atx(10));
      }
      // Inline function 'kotlin.text.appendLine' call
      // Inline function 'kotlin.text.appendLine' call
      this_0.append_22ad7x_k$(boundary).append_am5a4z_k$(_Char___init__impl__6a9atx(10));
    }
    var tmp$ret$18 = this_0.toString();
    Exception_init_$Init$(tmp$ret$18, this);
    captureStack(this, ResponseException);
    this.response_1 = response;
    this.bodyBytes_1 = bodyBytes;
  }
  protoOf(ResponseException).get_response_xlk07e_k$ = function () {
    return this.response_1;
  };
  protoOf(ResponseException).get_bodyBytes_ssopc0_k$ = function () {
    return this.bodyBytes_1;
  };
  function getBodyBytes(_this__u8e3s4, $completion) {
    var safe = SafeContinuation_init_$Create$(intercepted($completion));
    var tmp = _this__u8e3s4.arrayBuffer();
    var tmp_0 = tmp.then(getBodyBytes$lambda(safe));
    tmp_0.catch(getBodyBytes$lambda_0(safe));
    return safe.getOrThrow_23gqzp_k$();
  }
  function fetch$lambda$lambda($responseBytesDeferred) {
    return function (bodyBytes) {
      $responseBytesDeferred.complete_ixf84q_k$(bodyBytes);
      return Unit_getInstance();
    };
  }
  function fetch$lambda$lambda_0($responseBytesDeferred, $res) {
    return function (bodyBytes) {
      $responseBytesDeferred.completeExceptionally_xyzekf_k$(new ResponseException($res, bodyBytes));
      return Unit_getInstance();
    };
  }
  function fetch$lambda($responseBytesDeferred) {
    return function (res) {
      var tmp;
      if (res.ok) {
        getBodyBytesAsync(res, fetch$lambda$lambda($responseBytesDeferred));
        tmp = Unit_getInstance();
      } else {
        getBodyBytesAsync(res, fetch$lambda$lambda_0($responseBytesDeferred, res));
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function fetch$lambda_0($responseBytesDeferred) {
    return function (t) {
      return $responseBytesDeferred.completeExceptionally_xyzekf_k$(t);
    };
  }
  function getBodyBytesAsync$slambda($result, $this_getBodyBytesAsync, resultContinuation) {
    this.$result_1 = $result;
    this.$this_getBodyBytesAsync_1 = $this_getBodyBytesAsync;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(getBodyBytesAsync$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(getBodyBytesAsync$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(getBodyBytesAsync$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = getBodyBytes(this.$this_getBodyBytesAsync_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            this.$result_1(ARGUMENT);
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(getBodyBytesAsync$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new getBodyBytesAsync$slambda(this.$result_1, this.$this_getBodyBytesAsync_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(getBodyBytesAsync$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope_0) : false) ? value : THROW_CCE(), completion);
  };
  function getBodyBytesAsync$slambda_0($result, $this_getBodyBytesAsync, resultContinuation) {
    var i = new getBodyBytesAsync$slambda($result, $this_getBodyBytesAsync, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function getBodyBytes$lambda($cont) {
    return function (responseBuffer) {
      var int8Array = new Int8Array(responseBuffer);
      var tmp0 = $cont;
      var tmp = 0;
      var tmp_0 = int8Array.length;
      var tmp_1 = new Int8Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_1[tmp_2] = int8Array[tmp_2];
        tmp = tmp + 1 | 0;
      }
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      var tmp$ret$3 = _Result___init__impl__xyqfz8(tmp_1);
      tmp0.resumeWith_dtxwbr_k$(tmp$ret$3);
      return Unit_getInstance();
    };
  }
  function getBodyBytes$lambda_0($cont) {
    return function (it) {
      var tmp0 = $cont;
      // Inline function 'kotlin.coroutines.resume' call
      var value = new Int8Array(0);
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      var tmp$ret$0 = _Result___init__impl__xyqfz8(value);
      tmp0.resumeWith_dtxwbr_k$(tmp$ret$0);
      return Unit_getInstance();
    };
  }
  function HttpMethod_DELETE_getInstance() {
    HttpMethod_initEntries();
    return HttpMethod_DELETE_instance;
  }
  function HttpMethod_GET_getInstance() {
    HttpMethod_initEntries();
    return HttpMethod_GET_instance;
  }
  function HttpMethod_HEAD_getInstance() {
    HttpMethod_initEntries();
    return HttpMethod_HEAD_instance;
  }
  function HttpMethod_OPTIONS_getInstance() {
    HttpMethod_initEntries();
    return HttpMethod_OPTIONS_instance;
  }
  function HttpMethod_PATCH_getInstance() {
    HttpMethod_initEntries();
    return HttpMethod_PATCH_instance;
  }
  function HttpMethod_POST_getInstance() {
    HttpMethod_initEntries();
    return HttpMethod_POST_instance;
  }
  function HttpMethod_PUT_getInstance() {
    HttpMethod_initEntries();
    return HttpMethod_PUT_instance;
  }
  function $tryFetchCOROUTINE$(_this__u8e3s4, method, resource, headers, body, redirect, logOnError, abortController, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.method_1 = method;
    this.resource_1 = resource;
    this.headers_1 = headers;
    this.body_1 = body;
    this.redirect_1 = redirect;
    this.logOnError_1 = logOnError;
    this.abortController_1 = abortController;
  }
  protoOf($tryFetchCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = fetch(this._this__u8e3s4__1, this.method_1, this.resource_1, this.headers_1, this.body_1, this.redirect_1, this.abortController_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.TRY_RESULT0__1 = suspendResult;
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof Error) {
              var t = this.get_exception_x0n6w6_k$();
              var tmp_1 = this;
              if (this.logOnError_1) {
                console.log('Error fetching resource "' + this.resource_1 + '"\n\n' + t.toString());
              }
              tmp_1.TRY_RESULT0__1 = null;
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_fex74n_k$(3);
            return this.TRY_RESULT0__1;
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function get_http(_this__u8e3s4) {
    _init_properties_HttpFetcher_kt__6mmkul();
    var tmp0 = http$delegate;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('http', 1, tmp, _get_http_$ref_qxr9rm(), null);
    return tmp0.get_value_j01efc_k$();
  }
  var http$delegate;
  function _get_window__ax0zxh($this) {
    return $this.window_1;
  }
  function HttpFetcher(window_0) {
    this.window_1 = window_0;
    this.logOnError_1 = false;
  }
  protoOf(HttpFetcher).set_logOnError_wi584t_k$ = function (_set____db54di) {
    this.logOnError_1 = _set____db54di;
  };
  protoOf(HttpFetcher).get_logOnError_4wpkhe_k$ = function () {
    return this.logOnError_1;
  };
  protoOf(HttpFetcher).delete_2rffrg_k$ = function (resource, headers, redirect, abortController, $completion) {
    return fetch(this.window_1, HttpMethod_DELETE_getInstance(), resource, headers, null, redirect, abortController, $completion);
  };
  protoOf(HttpFetcher).delete$default_ijgc60_k$ = function (resource, headers, redirect, abortController, $completion, $super) {
    headers = headers === VOID ? FetchDefaults_getInstance().get_Headers_t2ylqb_k$() : headers;
    redirect = redirect === VOID ? FetchDefaults_getInstance().get_Redirect_rgkds5_k$() : redirect;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.delete_2rffrg_k$(resource, headers, redirect, abortController, $completion) : $super.delete_2rffrg_k$.call(this, resource, headers, redirect, abortController, $completion);
  };
  protoOf(HttpFetcher).tryDelete_5uhpdc_k$ = function (resource, headers, redirect, abortController, $completion) {
    return tryFetch(this.window_1, HttpMethod_DELETE_getInstance(), resource, headers, null, redirect, this.logOnError_1, abortController, $completion);
  };
  protoOf(HttpFetcher).tryDelete$default_v7swj6_k$ = function (resource, headers, redirect, abortController, $completion, $super) {
    headers = headers === VOID ? FetchDefaults_getInstance().get_Headers_t2ylqb_k$() : headers;
    redirect = redirect === VOID ? FetchDefaults_getInstance().get_Redirect_rgkds5_k$() : redirect;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.tryDelete_5uhpdc_k$(resource, headers, redirect, abortController, $completion) : $super.tryDelete_5uhpdc_k$.call(this, resource, headers, redirect, abortController, $completion);
  };
  protoOf(HttpFetcher).get_cn1crt_k$ = function (resource, headers, redirect, abortController, $completion) {
    return fetch(this.window_1, HttpMethod_GET_getInstance(), resource, headers, null, redirect, abortController, $completion);
  };
  protoOf(HttpFetcher).get$default_66pwul_k$ = function (resource, headers, redirect, abortController, $completion, $super) {
    headers = headers === VOID ? FetchDefaults_getInstance().get_Headers_t2ylqb_k$() : headers;
    redirect = redirect === VOID ? FetchDefaults_getInstance().get_Redirect_rgkds5_k$() : redirect;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.get_cn1crt_k$(resource, headers, redirect, abortController, $completion) : $super.get_cn1crt_k$.call(this, resource, headers, redirect, abortController, $completion);
  };
  protoOf(HttpFetcher).tryGet_ke4mjp_k$ = function (resource, headers, redirect, abortController, $completion) {
    return tryFetch(this.window_1, HttpMethod_GET_getInstance(), resource, headers, null, redirect, this.logOnError_1, abortController, $completion);
  };
  protoOf(HttpFetcher).tryGet$default_oel9mv_k$ = function (resource, headers, redirect, abortController, $completion, $super) {
    headers = headers === VOID ? FetchDefaults_getInstance().get_Headers_t2ylqb_k$() : headers;
    redirect = redirect === VOID ? FetchDefaults_getInstance().get_Redirect_rgkds5_k$() : redirect;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.tryGet_ke4mjp_k$(resource, headers, redirect, abortController, $completion) : $super.tryGet_ke4mjp_k$.call(this, resource, headers, redirect, abortController, $completion);
  };
  protoOf(HttpFetcher).head_kwlhpd_k$ = function (resource, headers, redirect, abortController, $completion) {
    return fetch(this.window_1, HttpMethod_HEAD_getInstance(), resource, headers, null, redirect, abortController, $completion);
  };
  protoOf(HttpFetcher).head$default_sexef1_k$ = function (resource, headers, redirect, abortController, $completion, $super) {
    headers = headers === VOID ? FetchDefaults_getInstance().get_Headers_t2ylqb_k$() : headers;
    redirect = redirect === VOID ? FetchDefaults_getInstance().get_Redirect_rgkds5_k$() : redirect;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.head_kwlhpd_k$(resource, headers, redirect, abortController, $completion) : $super.head_kwlhpd_k$.call(this, resource, headers, redirect, abortController, $completion);
  };
  protoOf(HttpFetcher).tryHead_ehzohx_k$ = function (resource, headers, redirect, abortController, $completion) {
    return tryFetch(this.window_1, HttpMethod_HEAD_getInstance(), resource, headers, null, redirect, this.logOnError_1, abortController, $completion);
  };
  protoOf(HttpFetcher).tryHead$default_zdj1rb_k$ = function (resource, headers, redirect, abortController, $completion, $super) {
    headers = headers === VOID ? FetchDefaults_getInstance().get_Headers_t2ylqb_k$() : headers;
    redirect = redirect === VOID ? FetchDefaults_getInstance().get_Redirect_rgkds5_k$() : redirect;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.tryHead_ehzohx_k$(resource, headers, redirect, abortController, $completion) : $super.tryHead_ehzohx_k$.call(this, resource, headers, redirect, abortController, $completion);
  };
  protoOf(HttpFetcher).options_i36ycf_k$ = function (resource, headers, redirect, abortController, $completion) {
    return fetch(this.window_1, HttpMethod_OPTIONS_getInstance(), resource, headers, null, redirect, abortController, $completion);
  };
  protoOf(HttpFetcher).options$default_f5ep8l_k$ = function (resource, headers, redirect, abortController, $completion, $super) {
    headers = headers === VOID ? FetchDefaults_getInstance().get_Headers_t2ylqb_k$() : headers;
    redirect = redirect === VOID ? FetchDefaults_getInstance().get_Redirect_rgkds5_k$() : redirect;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.options_i36ycf_k$(resource, headers, redirect, abortController, $completion) : $super.options_i36ycf_k$.call(this, resource, headers, redirect, abortController, $completion);
  };
  protoOf(HttpFetcher).tryOptions_pg8xyl_k$ = function (resource, headers, redirect, abortController, $completion) {
    return tryFetch(this.window_1, HttpMethod_OPTIONS_getInstance(), resource, headers, null, redirect, this.logOnError_1, abortController, $completion);
  };
  protoOf(HttpFetcher).tryOptions$default_olfzkf_k$ = function (resource, headers, redirect, abortController, $completion, $super) {
    headers = headers === VOID ? FetchDefaults_getInstance().get_Headers_t2ylqb_k$() : headers;
    redirect = redirect === VOID ? FetchDefaults_getInstance().get_Redirect_rgkds5_k$() : redirect;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.tryOptions_pg8xyl_k$(resource, headers, redirect, abortController, $completion) : $super.tryOptions_pg8xyl_k$.call(this, resource, headers, redirect, abortController, $completion);
  };
  protoOf(HttpFetcher).patch_3v7p74_k$ = function (resource, headers, body, redirect, abortController, $completion) {
    return fetch(this.window_1, HttpMethod_PATCH_getInstance(), resource, headers, body, redirect, abortController, $completion);
  };
  protoOf(HttpFetcher).patch$default_2wxsk3_k$ = function (resource, headers, body, redirect, abortController, $completion, $super) {
    headers = headers === VOID ? FetchDefaults_getInstance().get_Headers_t2ylqb_k$() : headers;
    body = body === VOID ? null : body;
    redirect = redirect === VOID ? FetchDefaults_getInstance().get_Redirect_rgkds5_k$() : redirect;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.patch_3v7p74_k$(resource, headers, body, redirect, abortController, $completion) : $super.patch_3v7p74_k$.call(this, resource, headers, body, redirect, abortController, $completion);
  };
  protoOf(HttpFetcher).tryPatch_owll70_k$ = function (resource, headers, body, redirect, abortController, $completion) {
    return tryFetch(this.window_1, HttpMethod_PATCH_getInstance(), resource, headers, body, redirect, this.logOnError_1, abortController, $completion);
  };
  protoOf(HttpFetcher).tryPatch$default_mqp6rl_k$ = function (resource, headers, body, redirect, abortController, $completion, $super) {
    headers = headers === VOID ? FetchDefaults_getInstance().get_Headers_t2ylqb_k$() : headers;
    body = body === VOID ? null : body;
    redirect = redirect === VOID ? FetchDefaults_getInstance().get_Redirect_rgkds5_k$() : redirect;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.tryPatch_owll70_k$(resource, headers, body, redirect, abortController, $completion) : $super.tryPatch_owll70_k$.call(this, resource, headers, body, redirect, abortController, $completion);
  };
  protoOf(HttpFetcher).post_sc77oo_k$ = function (resource, headers, body, redirect, abortController, $completion) {
    return fetch(this.window_1, HttpMethod_POST_getInstance(), resource, headers, body, redirect, abortController, $completion);
  };
  protoOf(HttpFetcher).post$default_rs8i2j_k$ = function (resource, headers, body, redirect, abortController, $completion, $super) {
    headers = headers === VOID ? FetchDefaults_getInstance().get_Headers_t2ylqb_k$() : headers;
    body = body === VOID ? null : body;
    redirect = redirect === VOID ? FetchDefaults_getInstance().get_Redirect_rgkds5_k$() : redirect;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.post_sc77oo_k$(resource, headers, body, redirect, abortController, $completion) : $super.post_sc77oo_k$.call(this, resource, headers, body, redirect, abortController, $completion);
  };
  protoOf(HttpFetcher).tryPost_tmk9za_k$ = function (resource, headers, body, redirect, abortController, $completion) {
    return tryFetch(this.window_1, HttpMethod_POST_getInstance(), resource, headers, body, redirect, this.logOnError_1, abortController, $completion);
  };
  protoOf(HttpFetcher).tryPost$default_2anpnz_k$ = function (resource, headers, body, redirect, abortController, $completion, $super) {
    headers = headers === VOID ? FetchDefaults_getInstance().get_Headers_t2ylqb_k$() : headers;
    body = body === VOID ? null : body;
    redirect = redirect === VOID ? FetchDefaults_getInstance().get_Redirect_rgkds5_k$() : redirect;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.tryPost_tmk9za_k$(resource, headers, body, redirect, abortController, $completion) : $super.tryPost_tmk9za_k$.call(this, resource, headers, body, redirect, abortController, $completion);
  };
  protoOf(HttpFetcher).put_5f231l_k$ = function (resource, headers, body, redirect, abortController, $completion) {
    return fetch(this.window_1, HttpMethod_PUT_getInstance(), resource, headers, body, redirect, abortController, $completion);
  };
  protoOf(HttpFetcher).put$default_thb2qc_k$ = function (resource, headers, body, redirect, abortController, $completion, $super) {
    headers = headers === VOID ? FetchDefaults_getInstance().get_Headers_t2ylqb_k$() : headers;
    body = body === VOID ? null : body;
    redirect = redirect === VOID ? FetchDefaults_getInstance().get_Redirect_rgkds5_k$() : redirect;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.put_5f231l_k$(resource, headers, body, redirect, abortController, $completion) : $super.put_5f231l_k$.call(this, resource, headers, body, redirect, abortController, $completion);
  };
  protoOf(HttpFetcher).tryPut_ar7nhv_k$ = function (resource, headers, body, redirect, abortController, $completion) {
    return tryFetch(this.window_1, HttpMethod_PUT_getInstance(), resource, headers, body, redirect, this.logOnError_1, abortController, $completion);
  };
  protoOf(HttpFetcher).tryPut$default_b7zjjs_k$ = function (resource, headers, body, redirect, abortController, $completion, $super) {
    headers = headers === VOID ? FetchDefaults_getInstance().get_Headers_t2ylqb_k$() : headers;
    body = body === VOID ? null : body;
    redirect = redirect === VOID ? FetchDefaults_getInstance().get_Redirect_rgkds5_k$() : redirect;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.tryPut_ar7nhv_k$(resource, headers, body, redirect, abortController, $completion) : $super.tryPut_ar7nhv_k$.call(this, resource, headers, body, redirect, abortController, $completion);
  };
  function _get_controller__bh9bov($this) {
    return $this.controller_1;
  }
  function AbortController_0() {
    this.controller_1 = new AbortController();
    this.signal_1 = this.controller_1.signal;
  }
  protoOf(AbortController_0).get_signal_9p0zln_k$ = function () {
    return this.signal_1;
  };
  protoOf(AbortController_0).abort_lahfmo_k$ = function () {
    this.controller_1.abort();
  };
  function http$delegate$lambda() {
    _init_properties_HttpFetcher_kt__6mmkul();
    return new HttpFetcher(window);
  }
  function _get_http_$ref_qxr9rm() {
    return function (p0) {
      return get_http(p0);
    };
  }
  var properties_initialized_HttpFetcher_kt_uxns7j;
  function _init_properties_HttpFetcher_kt__6mmkul() {
    if (!properties_initialized_HttpFetcher_kt_uxns7j) {
      properties_initialized_HttpFetcher_kt_uxns7j = true;
      http$delegate = lazy(http$delegate$lambda);
    }
  }
  function titleCamelCaseToKebabCase(_this__u8e3s4) {
    return camelCaseToKebabCase(_this__u8e3s4);
  }
  function wrapQuotesIfNecessary(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.length >= 2 && first(_this__u8e3s4) === _Char___init__impl__6a9atx(34) && last(_this__u8e3s4) === _Char___init__impl__6a9atx(34)) {
      tmp = _this__u8e3s4;
    } else {
      tmp = '"' + replace(_this__u8e3s4, '"', '\\"') + '"';
    }
    return tmp;
  }
  function camelCaseToKebabCase(_this__u8e3s4) {
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(_this__u8e3s4)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var lastIsUpper = false;
    var str = _this__u8e3s4;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.text.forEachIndexed' call
    var index = 0;
    var inductionVariable = 0;
    while (inductionVariable < charSequenceLength(str)) {
      var item = charSequenceGet(str, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      var isUpper = isUpperCase(item);
      var tmp;
      if (isUpper) {
        // Inline function 'kotlin.text.isNotEmpty' call
        if (charSequenceLength(this_0) > 0) {
          if (!lastIsUpper || (_unary__edvuaz < get_lastIndex(str) && isLowerCase(charCodeAt(str, _unary__edvuaz + 1 | 0)))) {
            this_0.append_22ad7x_k$('-');
          }
        }
        // Inline function 'kotlin.text.lowercase' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.unsafeCast' call
        tmp = toString_0(item).toLowerCase();
      } else {
        tmp = new Char(item);
      }
      var cFinal = tmp;
      this_0.append_t8pm91_k$(cFinal);
      lastIsUpper = isUpper;
    }
    return this_0.toString();
  }
  function _set_isInterval__bobeco($this, _set____db54di) {
    $this.isInterval_1 = _set____db54di;
  }
  function _get_isInterval__3dx6sk($this) {
    return $this.isInterval_1;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.Stub_1 = new CancellableActionHandle(0);
  }
  protoOf(Companion_0).get_Stub_woa49j_k$ = function () {
    return this.Stub_1;
  };
  var Companion_instance_0;
  function Companion_getInstance_2() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function _set_id__dl8o4k($this, _set____db54di) {
    $this.id_1 = _set____db54di;
  }
  function CancellableActionHandle(id, isInterval) {
    Companion_getInstance_2();
    isInterval = isInterval === VOID ? false : isInterval;
    this.isInterval_1 = isInterval;
    this.id_1 = id;
  }
  protoOf(CancellableActionHandle).get_id_kgu9y0_k$ = function () {
    return this.id_1;
  };
  protoOf(CancellableActionHandle).get_isCancelled_trk8pu_k$ = function () {
    return this.id_1 === 0;
  };
  protoOf(CancellableActionHandle).cancel_2l89ey_k$ = function () {
    if (this.isInterval_1) {
      self.clearInterval(this.id_1);
    } else {
      self.clearTimeout(this.id_1);
    }
    this.id_1 = 0;
  };
  protoOf(CancellableActionHandle).setTo_gw8ag5_k$ = function (other) {
    this.id_1 = other.id_1;
    this.isInterval_1 = other.isInterval_1;
  };
  function invokeLater(_this__u8e3s4, block) {
    // Inline function 'kotlin.time.Companion.milliseconds' call
    Companion_getInstance_0();
    var tmp$ret$0 = toDuration(0, DurationUnit_MILLISECONDS_getInstance());
    return setTimeout(_this__u8e3s4, tmp$ret$0, block);
  }
  function setTimeout(_this__u8e3s4, timeout, block) {
    var id = _this__u8e3s4.setTimeout(block, _Duration___get_inWholeMilliseconds__impl__msfiry(timeout).toInt_1tsl84_k$());
    return new CancellableActionHandle(id);
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CssIdent;
  _.$_$.b = get_http;
  _.$_$.c = invokeLater;
  _.$_$.d = titleCamelCaseToKebabCase;
  _.$_$.e = wrapQuotesIfNecessary;
  _.$_$.f = Companion_getInstance_1;
  _.$_$.g = FetchDefaults_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-browser-ext.js.map
