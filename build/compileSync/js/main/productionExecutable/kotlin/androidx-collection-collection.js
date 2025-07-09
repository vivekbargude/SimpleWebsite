(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'androidx-collection-collection'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'androidx-collection-collection'.");
    }
    globalThis['androidx-collection-collection'] = factory(typeof globalThis['androidx-collection-collection'] === 'undefined' ? {} : globalThis['androidx-collection-collection'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var clz32 = Math.clz32;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.x;
  var Unit_instance = kotlin_kotlin.$_$.c2;
  var protoOf = kotlin_kotlin.$_$.h7;
  var VOID = kotlin_kotlin.$_$.e;
  var getNumberHashCode = kotlin_kotlin.$_$.n6;
  var until = kotlin_kotlin.$_$.p7;
  var initMetadataForClass = kotlin_kotlin.$_$.r6;
  var arrayCopy = kotlin_kotlin.$_$.y2;
  var copyOf = kotlin_kotlin.$_$.h3;
  var longArray = kotlin_kotlin.$_$.c7;
  var Long = kotlin_kotlin.$_$.t9;
  var fill = kotlin_kotlin.$_$.r3;
  var toLong = kotlin_kotlin.$_$.i7;
  var countTrailingZeroBits = kotlin_kotlin.$_$.aa;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.w1;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.x1;
  var ulongCompare = kotlin_kotlin.$_$.ma;
  var get_lastIndex = kotlin_kotlin.$_$.a4;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.r1;
  var copyOf_0 = kotlin_kotlin.$_$.j3;
  var THROW_CCE = kotlin_kotlin.$_$.v9;
  var hashCode = kotlin_kotlin.$_$.q6;
  var equals = kotlin_kotlin.$_$.l6;
  var toString = kotlin_kotlin.$_$.ka;
  var KtMutableList = kotlin_kotlin.$_$.r2;
  var checkIndexOverflow = kotlin_kotlin.$_$.d3;
  var fill_0 = kotlin_kotlin.$_$.s3;
  var longArrayOf = kotlin_kotlin.$_$.b7;
  var CoroutineImpl = kotlin_kotlin.$_$.w5;
  var SequenceScope = kotlin_kotlin.$_$.u7;
  var numberRangeToNumber = kotlin_kotlin.$_$.d7;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.h5;
  var initMetadataForLambda = kotlin_kotlin.$_$.v6;
  var iterator = kotlin_kotlin.$_$.y7;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var KtSet = kotlin_kotlin.$_$.v2;
  var MutableIterable = kotlin_kotlin.$_$.q2;
  var Collection = kotlin_kotlin.$_$.m2;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.h1;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.c1;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(DoubleList, 'DoubleList');
  initMetadataForClass(MutableDoubleList, 'MutableDoubleList', MutableDoubleList, DoubleList);
  initMetadataForClass(IntIntMap, 'IntIntMap');
  initMetadataForClass(MutableIntIntMap, 'MutableIntIntMap', MutableIntIntMap, IntIntMap);
  initMetadataForClass(IntList, 'IntList');
  initMetadataForClass(MutableIntList, 'MutableIntList', MutableIntList, IntList);
  initMetadataForClass(IntObjectMap, 'IntObjectMap');
  initMetadataForClass(MutableIntObjectMap, 'MutableIntObjectMap', MutableIntObjectMap, IntObjectMap);
  initMetadataForClass(IntSet, 'IntSet');
  initMetadataForClass(MutableIntSet, 'MutableIntSet', MutableIntSet, IntSet);
  initMetadataForClass(ObjectIntMap, 'ObjectIntMap');
  initMetadataForClass(MutableObjectIntMap, 'MutableObjectIntMap', MutableObjectIntMap, ObjectIntMap);
  initMetadataForClass(ObjectList, 'ObjectList');
  initMetadataForClass(MutableObjectListIterator, 'MutableObjectListIterator');
  initMetadataForClass(ObjectListMutableList, 'ObjectListMutableList', VOID, VOID, [KtMutableList]);
  initMetadataForClass(MutableObjectList, 'MutableObjectList', MutableObjectList, ObjectList);
  initMetadataForClass(ScatterMap, 'ScatterMap');
  initMetadataForClass(MutableScatterMap, 'MutableScatterMap', MutableScatterMap, ScatterMap);
  initMetadataForClass(ScatterSet, 'ScatterSet');
  initMetadataForClass(MutableScatterSet, 'MutableScatterSet', MutableScatterSet, ScatterSet);
  initMetadataForLambda(SetWrapper$iterator$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(SetWrapper, 'SetWrapper', VOID, VOID, [KtSet]);
  initMetadataForLambda(MutableSetWrapper$iterator$o$iterator$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(MutableSetWrapper$iterator$1);
  initMetadataForClass(MutableSetWrapper, 'MutableSetWrapper', VOID, SetWrapper, [SetWrapper, MutableIterable, KtSet, Collection]);
  //endregion
  function DoubleList(initialCapacity) {
    var tmp = this;
    var tmp_0;
    if (initialCapacity === 0) {
      tmp_0 = get_EmptyDoubleArray();
    } else {
      tmp_0 = new Float64Array(initialCapacity);
    }
    tmp.cv_1 = tmp_0;
    this.dv_1 = 0;
  }
  protoOf(DoubleList).ev = function (separator, prefix, postfix, limit, truncated) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    $l$block: {
      this_0.f(prefix);
      // Inline function 'androidx.collection.DoubleList.forEachIndexed' call
      // Inline function 'kotlin.contracts.contract' call
      var content = this.cv_1;
      var inductionVariable = 0;
      var last = this.dv_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var element = content[i];
          if (i === limit) {
            this_0.f(truncated);
            break $l$block;
          }
          if (!(i === 0)) {
            this_0.f(separator);
          }
          this_0.qb(element);
        }
         while (inductionVariable < last);
      this_0.f(postfix);
    }
    return this_0.toString();
  };
  protoOf(DoubleList).fv = function (separator, prefix, postfix, limit, truncated, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    return $super === VOID ? this.ev(separator, prefix, postfix, limit, truncated) : $super.ev.call(this, separator, prefix, postfix, limit, truncated);
  };
  protoOf(DoubleList).hashCode = function () {
    var hashCode = 0;
    // Inline function 'androidx.collection.DoubleList.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var content = this.cv_1;
    var inductionVariable = 0;
    var last = this.dv_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = content[i];
        hashCode = hashCode + imul(31, getNumberHashCode(element)) | 0;
      }
       while (inductionVariable < last);
    return hashCode;
  };
  protoOf(DoubleList).equals = function (other) {
    var tmp;
    if (!(other instanceof DoubleList)) {
      tmp = true;
    } else {
      tmp = !(other.dv_1 === this.dv_1);
    }
    if (tmp) {
      return false;
    }
    var content = this.cv_1;
    var otherContent = other.cv_1;
    // Inline function 'androidx.collection.DoubleList.indices' call
    var progression = until(0, this.dv_1);
    var inductionVariable = progression.z_1;
    var last = progression.a1_1;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(content[i] === otherContent[i])) {
          return false;
        }
      }
       while (!(i === last));
    return true;
  };
  protoOf(DoubleList).toString = function () {
    return this.fv(VOID, '[', ']');
  };
  function MutableDoubleList(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 16 : initialCapacity;
    DoubleList.call(this, initialCapacity);
  }
  protoOf(MutableDoubleList).iv = function (element) {
    this.jv(this.dv_1 + 1 | 0);
    this.cv_1[this.dv_1] = element;
    this.dv_1 = this.dv_1 + 1 | 0;
    return true;
  };
  protoOf(MutableDoubleList).kv = function (index, elements) {
    if (!(0 <= index ? index <= this.dv_1 : false)) {
      throwIndexOutOfBoundsException('');
    }
    // Inline function 'kotlin.collections.isEmpty' call
    if (elements.length === 0)
      return false;
    this.jv(this.dv_1 + elements.length | 0);
    var content = this.cv_1;
    if (!(index === this.dv_1)) {
      var tmp4 = index + elements.length | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.dv_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = content;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, content, tmp4, index, endIndex);
    }
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex_0 = elements.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = elements;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_0, content, index, 0, endIndex_0);
    this.dv_1 = this.dv_1 + elements.length | 0;
    return true;
  };
  protoOf(MutableDoubleList).jv = function (capacity) {
    var oldContent = this.cv_1;
    if (oldContent.length < capacity) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = imul(oldContent.length, 3) / 2 | 0;
      var newSize = Math.max(capacity, b);
      this.cv_1 = copyOf(oldContent, newSize);
    }
  };
  function get_EmptyDoubleArray() {
    _init_properties_DoubleSet_kt__4b4k9t();
    return EmptyDoubleArray;
  }
  var EmptyDoubleArray;
  var properties_initialized_DoubleSet_kt_kcrj8h;
  function _init_properties_DoubleSet_kt__4b4k9t() {
    if (!properties_initialized_DoubleSet_kt_kcrj8h) {
      properties_initialized_DoubleSet_kt_kcrj8h = true;
      EmptyDoubleArray = new Float64Array(0);
    }
  }
  function initializeStorage($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.ov_1 = newCapacity;
    initializeMetadata($this, newCapacity);
    $this.mv_1 = new Int32Array(newCapacity);
    $this.nv_1 = new Int32Array(newCapacity);
  }
  function initializeMetadata($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.lv_1 = tmp_0;
    var tmp0 = $this.lv_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp0[i] = tmp0[i].f3((new Long(255, 0)).c3(b).b3()).g3(value.c3(b));
    initializeGrowth($this);
  }
  function initializeGrowth($this) {
    $this.vv_1 = loadedCapacity($this.wv()) - $this.pv_1 | 0;
  }
  function findInsertIndex($this, key) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(key, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.ov_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp0 = $this.lv_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp0[i].e3(b).g3(tmp0[i + 1 | 0].c3(64 - b | 0).f3(toLong(b).a3().d3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$4 = (new Long(16843009, 16843009)).x2(toLong(hash2));
      var x = g.h3(tmp$ret$4);
      var m = x.w2(new Long(16843009, 16843009)).f3(x.b3()).f3(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if ($this.mv_1[index] === key) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.f3(this_1.w2(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.f3(g.b3().c3(6)).f3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot($this, hash1);
    var tmp_0;
    if ($this.vv_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !$this.lv_1[offset_0 >> 3].d3((offset_0 & 7) << 3).f3(new Long(255, 0)).equals(new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      $this.xv();
      index_0 = findFirstAvailableSlot($this, hash1);
    }
    $this.pv_1 = $this.pv_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.vv_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if ($this.lv_1[offset_1 >> 3].d3((offset_1 & 7) << 3).f3(new Long(255, 0)).equals(new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.vv_1 = tmp_2 - tmp_3 | 0;
    var tmp0_0 = $this.lv_1;
    var tmp2 = $this.ov_1;
    var tmp4 = index_0;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = toLong(hash2);
    var i_0 = tmp4 >> 3;
    var b_0 = (tmp4 & 7) << 3;
    tmp0_0[i_0] = tmp0_0[i_0].f3((new Long(255, 0)).c3(b_0).b3()).g3(value.c3(b_0));
    var cloneIndex = ((tmp4 - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0_0[cloneIndex >> 3] = tmp0_0[tmp4 >> 3];
    return ~index_0;
  }
  function findFirstAvailableSlot($this, hash1) {
    var probeMask = $this.ov_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.lv_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp0[i].e3(b).g3(tmp0[i + 1 | 0].c3(64 - b | 0).f3(toLong(b).a3().d3(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.f3(g.b3().c3(7)).f3(new Long(-2139062144, -2139062144));
      if (!m.equals(new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function MutableIntIntMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    IntIntMap.call(this);
    this.vv_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      var tmp$ret$1 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$1);
    }
    initializeStorage(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableIntIntMap).yv = function (key, value) {
    var index = findInsertIndex(this, key);
    if (index < 0)
      index = ~index;
    this.mv_1[index] = key;
    this.nv_1[index] = value;
  };
  protoOf(MutableIntIntMap).xv = function () {
    var tmp;
    if (this.ov_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = this.pv_1;
      var tmp0 = _ULong___init__impl__c78o9k(toLong(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp0_0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0).x2(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = this.ov_1;
      var tmp0_1 = _ULong___init__impl__c78o9k(toLong(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_1).x2(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp0_0), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.aw();
    } else {
      this.zv(nextCapacity(this.ov_1));
    }
  };
  protoOf(MutableIntIntMap).aw = function () {
    var metadata = this.lv_1;
    var capacity = this.ov_1;
    var keys = this.mv_1;
    var values = this.nv_1;
    // Inline function 'androidx.collection.convertMetadataForCleanup' call
    var end = (capacity + 7 | 0) >> 3;
    var inductionVariable = 0;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var maskedGroup = metadata[i].f3(new Long(-2139062144, -2139062144));
        metadata[i] = maskedGroup.b3().v2(maskedGroup.e3(7)).f3(new Long(-16843010, -16843010));
      }
       while (inductionVariable < end);
    var lastIndex = get_lastIndex(metadata);
    metadata[lastIndex - 1 | 0] = (new Long(0, -16777216)).g3(metadata[lastIndex - 1 | 0].f3(new Long(-1, 16777215)));
    metadata[lastIndex] = metadata[0];
    var index = 0;
    $l$loop_1: while (!(index === capacity)) {
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset = index;
      var m = metadata[offset >> 3].d3((offset & 7) << 3).f3(new Long(255, 0));
      if (m.equals(new Long(128, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      if (!m.equals(new Long(254, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.hash' call
      var k = keys[index];
      var hash = imul(k, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h1' call
      var hash1 = hash_0 >>> 7 | 0;
      var targetIndex = findFirstAvailableSlot(this, hash1);
      var probeOffset = hash1 & capacity;
      var newProbeIndex = ((targetIndex - probeOffset | 0) & capacity) / 8 | 0;
      var oldProbeIndex = ((index - probeOffset | 0) & capacity) / 8 | 0;
      if (newProbeIndex === oldProbeIndex) {
        // Inline function 'androidx.collection.h2' call
        var hash2 = hash_0 & 127;
        var tmp2 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value = toLong(hash2);
        var i_0 = tmp2 >> 3;
        var b = (tmp2 & 7) << 3;
        metadata[i_0] = metadata[i_0].f3((new Long(255, 0)).c3(b).b3()).g3(value.c3(b));
        metadata[get_lastIndex(metadata)] = (new Long(0, -2147483648)).g3(metadata[0].f3(new Long(-1, 16777215)));
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.readRawMetadata' call
      m = metadata[targetIndex >> 3].d3((targetIndex & 7) << 3).f3(new Long(255, 0));
      if (m.equals(new Long(128, 0))) {
        // Inline function 'androidx.collection.h2' call
        var hash2_0 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_0 = toLong(hash2_0);
        var i_1 = targetIndex >> 3;
        var b_0 = (targetIndex & 7) << 3;
        metadata[i_1] = metadata[i_1].f3((new Long(255, 0)).c3(b_0).b3()).g3(value_0.c3(b_0));
        var tmp2_0 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_1 = new Long(128, 0);
        var i_2 = tmp2_0 >> 3;
        var b_1 = (tmp2_0 & 7) << 3;
        metadata[i_2] = metadata[i_2].f3((new Long(255, 0)).c3(b_1).b3()).g3(value_1.c3(b_1));
        keys[targetIndex] = keys[index];
        keys[index] = 0;
        values[targetIndex] = values[index];
        values[index] = 0;
      } else {
        // Inline function 'androidx.collection.h2' call
        var hash2_1 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_2 = toLong(hash2_1);
        var i_3 = targetIndex >> 3;
        var b_2 = (targetIndex & 7) << 3;
        metadata[i_3] = metadata[i_3].f3((new Long(255, 0)).c3(b_2).b3()).g3(value_2.c3(b_2));
        var oldKey = keys[targetIndex];
        keys[targetIndex] = keys[index];
        keys[index] = oldKey;
        var oldValue = values[targetIndex];
        values[targetIndex] = values[index];
        values[index] = oldValue;
        index = index - 1 | 0;
      }
      metadata[get_lastIndex(metadata)] = (new Long(0, -2147483648)).g3(metadata[0].f3(new Long(-1, 16777215)));
      index = index + 1 | 0;
    }
    initializeGrowth(this);
  };
  protoOf(MutableIntIntMap).zv = function (newCapacity) {
    var previousMetadata = this.lv_1;
    var previousKeys = this.mv_1;
    var previousValues = this.nv_1;
    var previousCapacity = this.ov_1;
    initializeStorage(this, newCapacity);
    var newMetadata = this.lv_1;
    var newKeys = this.mv_1;
    var newValues = this.nv_1;
    var capacity = this.ov_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].d3((i & 7) << 3).f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
          var previousKey = previousKeys[i];
          // Inline function 'androidx.collection.hash' call
          var hash = imul(previousKey, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$3 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot(this, tmp$ret$3);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$4 = hash_0 & 127;
          // Inline function 'androidx.collection.writeMetadata' call
          // Inline function 'androidx.collection.writeRawMetadata' call
          var value = toLong(tmp$ret$4);
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          newMetadata[i_0] = newMetadata[i_0].f3((new Long(255, 0)).c3(b).b3()).g3(value.c3(b));
          var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
          newMetadata[cloneIndex >> 3] = newMetadata[index >> 3];
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  };
  function IntIntMap() {
    this.lv_1 = get_EmptyGroup();
    this.mv_1 = get_EmptyIntArray();
    this.nv_1 = get_EmptyIntArray();
    this.ov_1 = 0;
    this.pv_1 = 0;
  }
  protoOf(IntIntMap).wv = function () {
    return this.ov_1;
  };
  protoOf(IntIntMap).j = function () {
    return this.pv_1;
  };
  protoOf(IntIntMap).r = function () {
    return this.pv_1 === 0;
  };
  protoOf(IntIntMap).p = function (key) {
    var index = this.cw(key);
    if (index < 0) {
      throwNoSuchElementException('Cannot find value for key ' + key);
    }
    return this.nv_1[index];
  };
  protoOf(IntIntMap).bw = function (key) {
    return this.cw(key) >= 0;
  };
  protoOf(IntIntMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.IntIntMap.forEach' call
    var k = this.mv_1;
    var v = this.nv_1;
    $l$block: {
      // Inline function 'androidx.collection.IntIntMap.forEachIndexed' call
      var m = this.lv_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.f3(this_0.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  hash = hash + (k[index] ^ v[index]) | 0;
                }
                slot = slot.d3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return hash;
  };
  protoOf(IntIntMap).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof IntIntMap)) {
      return false;
    }
    if (!(other.j() === this.j())) {
      return false;
    }
    // Inline function 'androidx.collection.IntIntMap.forEach' call
    var k = this.mv_1;
    var v = this.nv_1;
    $l$block: {
      // Inline function 'androidx.collection.IntIntMap.forEachIndexed' call
      var m = this.lv_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.f3(this_0.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  var tmp0 = k[index];
                  var value = v[index];
                  var index_0 = other.cw(tmp0);
                  if (index_0 < 0 || !(value === other.nv_1[index_0])) {
                    return false;
                  }
                }
                slot = slot.d3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return true;
  };
  protoOf(IntIntMap).toString = function () {
    if (this.r()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().d8(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.IntIntMap.forEach' call
    var k = this.mv_1;
    var v = this.nv_1;
    $l$block: {
      // Inline function 'androidx.collection.IntIntMap.forEachIndexed' call
      var m = this.lv_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.f3(this_0.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  var tmp0 = k[index];
                  var value = v[index];
                  s.pb(tmp0);
                  s.c8('=');
                  s.pb(value);
                  i = i + 1 | 0;
                  if (i < this.pv_1) {
                    s.d8(_Char___init__impl__6a9atx(44)).d8(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = slot.d3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.d8(_Char___init__impl__6a9atx(125)).toString();
  };
  protoOf(IntIntMap).cw = function (key) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(key, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = this.ov_1;
    // Inline function 'androidx.collection.h1' call
    var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp0 = this.lv_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp0[i].e3(b).g3(tmp0[i + 1 | 0].c3(64 - b | 0).f3(toLong(b).a3().d3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$4 = (new Long(16843009, 16843009)).x2(toLong(hash2));
      var x = g.h3(tmp$ret$4);
      var m = x.w2(new Long(16843009, 16843009)).f3(x.b3()).f3(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if (this.mv_1[index] === key) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.f3(this_1.w2(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.f3(g.b3().c3(6)).f3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    return -1;
  };
  function IntList(initialCapacity) {
    var tmp = this;
    var tmp_0;
    if (initialCapacity === 0) {
      tmp_0 = get_EmptyIntArray();
    } else {
      tmp_0 = new Int32Array(initialCapacity);
    }
    tmp.dw_1 = tmp_0;
    this.ew_1 = 0;
  }
  protoOf(IntList).fw = function () {
    // Inline function 'androidx.collection.IntList.isEmpty' call
    if (this.ew_1 === 0) {
      throwNoSuchElementException('IntList is empty.');
    }
    return this.dw_1[0];
  };
  protoOf(IntList).p = function (index) {
    if (!(0 <= index ? index < this.ew_1 : false)) {
      throwIndexOutOfBoundsException('Index must be between 0 and size');
    }
    return this.dw_1[index];
  };
  protoOf(IntList).gw = function () {
    // Inline function 'androidx.collection.IntList.isEmpty' call
    if (this.ew_1 === 0) {
      throwNoSuchElementException('IntList is empty.');
    }
    var tmp = this.dw_1;
    // Inline function 'androidx.collection.IntList.lastIndex' call
    return tmp[this.ew_1 - 1 | 0];
  };
  protoOf(IntList).ev = function (separator, prefix, postfix, limit, truncated) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    $l$block: {
      this_0.f(prefix);
      // Inline function 'androidx.collection.IntList.forEachIndexed' call
      // Inline function 'kotlin.contracts.contract' call
      var content = this.dw_1;
      var inductionVariable = 0;
      var last = this.ew_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var element = content[i];
          if (i === limit) {
            this_0.f(truncated);
            break $l$block;
          }
          if (!(i === 0)) {
            this_0.f(separator);
          }
          this_0.pb(element);
        }
         while (inductionVariable < last);
      this_0.f(postfix);
    }
    return this_0.toString();
  };
  protoOf(IntList).hw = function (separator, prefix, postfix, limit, truncated, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    return $super === VOID ? this.ev(separator, prefix, postfix, limit, truncated) : $super.ev.call(this, separator, prefix, postfix, limit, truncated);
  };
  protoOf(IntList).hashCode = function () {
    var hashCode = 0;
    // Inline function 'androidx.collection.IntList.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var content = this.dw_1;
    var inductionVariable = 0;
    var last = this.ew_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = content[i];
        hashCode = hashCode + imul(31, element) | 0;
      }
       while (inductionVariable < last);
    return hashCode;
  };
  protoOf(IntList).equals = function (other) {
    var tmp;
    if (!(other instanceof IntList)) {
      tmp = true;
    } else {
      tmp = !(other.ew_1 === this.ew_1);
    }
    if (tmp) {
      return false;
    }
    var content = this.dw_1;
    var otherContent = other.dw_1;
    // Inline function 'androidx.collection.IntList.indices' call
    var progression = until(0, this.ew_1);
    var inductionVariable = progression.z_1;
    var last = progression.a1_1;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(content[i] === otherContent[i])) {
          return false;
        }
      }
       while (!(i === last));
    return true;
  };
  protoOf(IntList).toString = function () {
    return this.hw(VOID, '[', ']');
  };
  function MutableIntList(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 16 : initialCapacity;
    IntList.call(this, initialCapacity);
  }
  protoOf(MutableIntList).kw = function (element) {
    this.jv(this.ew_1 + 1 | 0);
    this.dw_1[this.ew_1] = element;
    this.ew_1 = this.ew_1 + 1 | 0;
    return true;
  };
  protoOf(MutableIntList).jv = function (capacity) {
    var oldContent = this.dw_1;
    if (oldContent.length < capacity) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = imul(oldContent.length, 3) / 2 | 0;
      var newSize = Math.max(capacity, b);
      this.dw_1 = copyOf_0(oldContent, newSize);
    }
  };
  protoOf(MutableIntList).b2 = function (index) {
    if (!(0 <= index ? index < this.ew_1 : false)) {
      throwIndexOutOfBoundsException('Index must be between 0 and size');
    }
    var content = this.dw_1;
    var item = content[index];
    // Inline function 'androidx.collection.IntList.lastIndex' call
    if (!(index === (this.ew_1 - 1 | 0))) {
      var tmp6 = index + 1 | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.ew_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = content;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, content, index, tmp6, endIndex);
    }
    this.ew_1 = this.ew_1 - 1 | 0;
    return item;
  };
  protoOf(MutableIntList).lw = function (index, element) {
    if (!(0 <= index ? index < this.ew_1 : false)) {
      throwIndexOutOfBoundsException('Index must be between 0 and size');
    }
    var content = this.dw_1;
    var old = content[index];
    content[index] = element;
    return old;
  };
  function initializeStorage_0($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.pw_1 = newCapacity;
    initializeMetadata_0($this, newCapacity);
    $this.nw_1 = new Int32Array(newCapacity);
    var tmp_0 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.ow_1 = Array(newCapacity);
  }
  function initializeMetadata_0($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.mw_1 = tmp_0;
    var tmp0 = $this.mw_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp0[i] = tmp0[i].f3((new Long(255, 0)).c3(b).b3()).g3(value.c3(b));
    initializeGrowth_0($this);
  }
  function initializeGrowth_0($this) {
    $this.ww_1 = loadedCapacity($this.wv()) - $this.qw_1 | 0;
  }
  function findAbsoluteInsertIndex($this, key) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(key, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.pw_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp0 = $this.mw_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp0[i].e3(b).g3(tmp0[i + 1 | 0].c3(64 - b | 0).f3(toLong(b).a3().d3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$4 = (new Long(16843009, 16843009)).x2(toLong(hash2));
      var x = g.h3(tmp$ret$4);
      var m = x.w2(new Long(16843009, 16843009)).f3(x.b3()).f3(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if ($this.nw_1[index] === key) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.f3(this_1.w2(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.f3(g.b3().c3(6)).f3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_0($this, hash1);
    var tmp_0;
    if ($this.ww_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !$this.mw_1[offset_0 >> 3].d3((offset_0 & 7) << 3).f3(new Long(255, 0)).equals(new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      $this.xv();
      index_0 = findFirstAvailableSlot_0($this, hash1);
    }
    $this.qw_1 = $this.qw_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.ww_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if ($this.mw_1[offset_1 >> 3].d3((offset_1 & 7) << 3).f3(new Long(255, 0)).equals(new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.ww_1 = tmp_2 - tmp_3 | 0;
    var tmp0_0 = $this.mw_1;
    var tmp2 = $this.pw_1;
    var tmp4 = index_0;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = toLong(hash2);
    var i_0 = tmp4 >> 3;
    var b_0 = (tmp4 & 7) << 3;
    tmp0_0[i_0] = tmp0_0[i_0].f3((new Long(255, 0)).c3(b_0).b3()).g3(value.c3(b_0));
    var cloneIndex = ((tmp4 - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0_0[cloneIndex >> 3] = tmp0_0[tmp4 >> 3];
    return index_0;
  }
  function findFirstAvailableSlot_0($this, hash1) {
    var probeMask = $this.pw_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.mw_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp0[i].e3(b).g3(tmp0[i + 1 | 0].c3(64 - b | 0).f3(toLong(b).a3().d3(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.f3(g.b3().c3(7)).f3(new Long(-2139062144, -2139062144));
      if (!m.equals(new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function MutableIntObjectMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    IntObjectMap.call(this);
    this.ww_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      var tmp$ret$1 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$1);
    }
    initializeStorage_0(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableIntObjectMap).xw = function (key, value) {
    var index = findAbsoluteInsertIndex(this, key);
    this.nw_1[index] = key;
    this.ow_1[index] = value;
  };
  protoOf(MutableIntObjectMap).yw = function (key) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(key, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.pw_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.mw_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = tmp0[i].e3(b).g3(tmp0[i + 1 | 0].c3(64 - b | 0).f3(toLong(b).a3().d3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$4 = (new Long(16843009, 16843009)).x2(toLong(hash2));
        var x = g.h3(tmp$ret$4);
        var m = x.w2(new Long(16843009, 16843009)).f3(x.b3()).f3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (this.nw_1[index] === key) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.f3(this_1.w2(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.f3(g.b3().c3(6)).f3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$9 = -1;
    }
    var index_0 = tmp$ret$9;
    if (index_0 >= 0) {
      return this.zw(index_0);
    }
    return null;
  };
  protoOf(MutableIntObjectMap).zw = function (index) {
    this.qw_1 = this.qw_1 - 1 | 0;
    var tmp0 = this.mw_1;
    var tmp2 = this.pw_1;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(254, 0);
    var i = index >> 3;
    var b = (index & 7) << 3;
    tmp0[i] = tmp0[i].f3((new Long(255, 0)).c3(b).b3()).g3(value.c3(b));
    var cloneIndex = ((index - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0[cloneIndex >> 3] = tmp0[index >> 3];
    var oldValue = this.ow_1[index];
    this.ow_1[index] = null;
    return (oldValue == null ? true : !(oldValue == null)) ? oldValue : THROW_CCE();
  };
  protoOf(MutableIntObjectMap).xv = function () {
    var tmp;
    if (this.pw_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = this.qw_1;
      var tmp0 = _ULong___init__impl__c78o9k(toLong(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp0_0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0).x2(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = this.pw_1;
      var tmp0_1 = _ULong___init__impl__c78o9k(toLong(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_1).x2(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp0_0), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.aw();
    } else {
      this.zv(nextCapacity(this.pw_1));
    }
  };
  protoOf(MutableIntObjectMap).aw = function () {
    var metadata = this.mw_1;
    var capacity = this.pw_1;
    var keys = this.nw_1;
    var values = this.ow_1;
    // Inline function 'androidx.collection.convertMetadataForCleanup' call
    var end = (capacity + 7 | 0) >> 3;
    var inductionVariable = 0;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var maskedGroup = metadata[i].f3(new Long(-2139062144, -2139062144));
        metadata[i] = maskedGroup.b3().v2(maskedGroup.e3(7)).f3(new Long(-16843010, -16843010));
      }
       while (inductionVariable < end);
    var lastIndex = get_lastIndex(metadata);
    metadata[lastIndex - 1 | 0] = (new Long(0, -16777216)).g3(metadata[lastIndex - 1 | 0].f3(new Long(-1, 16777215)));
    metadata[lastIndex] = metadata[0];
    var index = 0;
    $l$loop_1: while (!(index === capacity)) {
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset = index;
      var m = metadata[offset >> 3].d3((offset & 7) << 3).f3(new Long(255, 0));
      if (m.equals(new Long(128, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      if (!m.equals(new Long(254, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.hash' call
      var k = keys[index];
      var hash = imul(k, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h1' call
      var hash1 = hash_0 >>> 7 | 0;
      var targetIndex = findFirstAvailableSlot_0(this, hash1);
      var probeOffset = hash1 & capacity;
      var newProbeIndex = ((targetIndex - probeOffset | 0) & capacity) / 8 | 0;
      var oldProbeIndex = ((index - probeOffset | 0) & capacity) / 8 | 0;
      if (newProbeIndex === oldProbeIndex) {
        // Inline function 'androidx.collection.h2' call
        var hash2 = hash_0 & 127;
        var tmp2 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value = toLong(hash2);
        var i_0 = tmp2 >> 3;
        var b = (tmp2 & 7) << 3;
        metadata[i_0] = metadata[i_0].f3((new Long(255, 0)).c3(b).b3()).g3(value.c3(b));
        metadata[get_lastIndex(metadata)] = (new Long(0, -2147483648)).g3(metadata[0].f3(new Long(-1, 16777215)));
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.readRawMetadata' call
      m = metadata[targetIndex >> 3].d3((targetIndex & 7) << 3).f3(new Long(255, 0));
      if (m.equals(new Long(128, 0))) {
        // Inline function 'androidx.collection.h2' call
        var hash2_0 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_0 = toLong(hash2_0);
        var i_1 = targetIndex >> 3;
        var b_0 = (targetIndex & 7) << 3;
        metadata[i_1] = metadata[i_1].f3((new Long(255, 0)).c3(b_0).b3()).g3(value_0.c3(b_0));
        var tmp2_0 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_1 = new Long(128, 0);
        var i_2 = tmp2_0 >> 3;
        var b_1 = (tmp2_0 & 7) << 3;
        metadata[i_2] = metadata[i_2].f3((new Long(255, 0)).c3(b_1).b3()).g3(value_1.c3(b_1));
        keys[targetIndex] = keys[index];
        keys[index] = 0;
        values[targetIndex] = values[index];
        values[index] = null;
      } else {
        // Inline function 'androidx.collection.h2' call
        var hash2_1 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_2 = toLong(hash2_1);
        var i_3 = targetIndex >> 3;
        var b_2 = (targetIndex & 7) << 3;
        metadata[i_3] = metadata[i_3].f3((new Long(255, 0)).c3(b_2).b3()).g3(value_2.c3(b_2));
        var oldKey = keys[targetIndex];
        keys[targetIndex] = keys[index];
        keys[index] = oldKey;
        var oldValue = values[targetIndex];
        values[targetIndex] = values[index];
        values[index] = oldValue;
        index = index - 1 | 0;
      }
      metadata[get_lastIndex(metadata)] = (new Long(0, -2147483648)).g3(metadata[0].f3(new Long(-1, 16777215)));
      index = index + 1 | 0;
    }
    initializeGrowth_0(this);
  };
  protoOf(MutableIntObjectMap).zv = function (newCapacity) {
    var previousMetadata = this.mw_1;
    var previousKeys = this.nw_1;
    var previousValues = this.ow_1;
    var previousCapacity = this.pw_1;
    initializeStorage_0(this, newCapacity);
    var newMetadata = this.mw_1;
    var newKeys = this.nw_1;
    var newValues = this.ow_1;
    var capacity = this.pw_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].d3((i & 7) << 3).f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
          var previousKey = previousKeys[i];
          // Inline function 'androidx.collection.hash' call
          var hash = imul(previousKey, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$3 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_0(this, tmp$ret$3);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$4 = hash_0 & 127;
          // Inline function 'androidx.collection.writeMetadata' call
          // Inline function 'androidx.collection.writeRawMetadata' call
          var value = toLong(tmp$ret$4);
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          newMetadata[i_0] = newMetadata[i_0].f3((new Long(255, 0)).c3(b).b3()).g3(value.c3(b));
          var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
          newMetadata[cloneIndex >> 3] = newMetadata[index >> 3];
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  };
  function IntObjectMap() {
    this.mw_1 = get_EmptyGroup();
    this.nw_1 = get_EmptyIntArray();
    this.ow_1 = get_EMPTY_OBJECTS();
    this.pw_1 = 0;
    this.qw_1 = 0;
  }
  protoOf(IntObjectMap).wv = function () {
    return this.pw_1;
  };
  protoOf(IntObjectMap).j = function () {
    return this.qw_1;
  };
  protoOf(IntObjectMap).r = function () {
    return this.qw_1 === 0;
  };
  protoOf(IntObjectMap).p = function (key) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(key, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.pw_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.mw_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = tmp0[i].e3(b).g3(tmp0[i + 1 | 0].c3(64 - b | 0).f3(toLong(b).a3().d3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$4 = (new Long(16843009, 16843009)).x2(toLong(hash2));
        var x = g.h3(tmp$ret$4);
        var m = x.w2(new Long(16843009, 16843009)).f3(x.b3()).f3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (this.nw_1[index] === key) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.f3(this_1.w2(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.f3(g.b3().c3(6)).f3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$9 = -1;
    }
    var index_0 = tmp$ret$9;
    var tmp_0;
    if (index_0 >= 0) {
      var tmp_1 = this.ow_1[index_0];
      tmp_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp_0 = null;
    }
    return tmp_0;
  };
  protoOf(IntObjectMap).bw = function (key) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(key, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.pw_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.mw_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = tmp0[i].e3(b).g3(tmp0[i + 1 | 0].c3(64 - b | 0).f3(toLong(b).a3().d3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$4 = (new Long(16843009, 16843009)).x2(toLong(hash2));
        var x = g.h3(tmp$ret$4);
        var m = x.w2(new Long(16843009, 16843009)).f3(x.b3()).f3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (this.nw_1[index] === key) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.f3(this_1.w2(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.f3(g.b3().c3(6)).f3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$9 = -1;
    }
    return tmp$ret$9 >= 0;
  };
  protoOf(IntObjectMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.IntObjectMap.forEach' call
    var k = this.nw_1;
    var v = this.ow_1;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
      var m = this.mw_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.f3(this_0.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  var tmp0 = k[index];
                  var tmp = v[index];
                  var tmp_0 = hash;
                  var tmp_1 = tmp0;
                  // Inline function 'kotlin.hashCode' call
                  var tmp0_safe_receiver = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
                  hash = tmp_0 + (tmp_1 ^ (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs)) | 0;
                }
                slot = slot.d3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return hash;
  };
  protoOf(IntObjectMap).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof IntObjectMap)) {
      return false;
    }
    if (!(other.j() === this.j())) {
      return false;
    }
    // Inline function 'androidx.collection.IntObjectMap.forEach' call
    var k = this.nw_1;
    var v = this.ow_1;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
      var m = this.mw_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.f3(this_0.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  var tmp0 = k[index];
                  var tmp = v[index];
                  var value = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  if (value == null) {
                    if (!(other.p(tmp0) == null) || !other.bw(tmp0)) {
                      return false;
                    }
                  } else if (!equals(value, other.p(tmp0))) {
                    return false;
                  }
                }
                slot = slot.d3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return true;
  };
  protoOf(IntObjectMap).toString = function () {
    if (this.r()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().d8(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.IntObjectMap.forEach' call
    var k = this.nw_1;
    var v = this.ow_1;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
      var m = this.mw_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.f3(this_0.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  var tmp0 = k[index];
                  var tmp = v[index];
                  var value = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  s.pb(tmp0);
                  s.c8('=');
                  s.b8(value === this ? '(this)' : value);
                  i = i + 1 | 0;
                  if (i < this.qw_1) {
                    s.d8(_Char___init__impl__6a9atx(44)).d8(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = slot.d3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.d8(_Char___init__impl__6a9atx(125)).toString();
  };
  var EmptyIntSet;
  function get_EmptyIntArray() {
    _init_properties_IntSet_kt__km4dgt();
    return EmptyIntArray;
  }
  var EmptyIntArray;
  function IntSet() {
    this.ax_1 = get_EmptyGroup();
    this.bx_1 = get_EmptyIntArray();
    this.cx_1 = 0;
    this.dx_1 = 0;
  }
  protoOf(IntSet).wv = function () {
    return this.cx_1;
  };
  protoOf(IntSet).ex = function (element) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.IntSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(element, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.cx_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.ax_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = tmp0[i].e3(b).g3(tmp0[i + 1 | 0].c3(64 - b | 0).f3(toLong(b).a3().d3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$4 = (new Long(16843009, 16843009)).x2(toLong(hash2));
        var x = g.h3(tmp$ret$4);
        var m = x.w2(new Long(16843009, 16843009)).f3(x.b3()).f3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (this.bx_1[index] === element) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.f3(this_1.w2(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.f3(g.b3().c3(6)).f3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$9 = -1;
    }
    return tmp$ret$9 >= 0;
  };
  protoOf(IntSet).ev = function (separator, prefix, postfix, limit, truncated) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    $l$block: {
      this_0.f(prefix);
      var index = 0;
      // Inline function 'androidx.collection.IntSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var k = this.bx_1;
      $l$block_0: {
        // Inline function 'androidx.collection.IntSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this.ax_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            if (!this_1.f3(this_1.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                    var index_0 = (i << 3) + j | 0;
                    var element = k[index_0];
                    if (index === limit) {
                      this_0.f(truncated);
                      break $l$block;
                    }
                    if (!(index === 0)) {
                      this_0.f(separator);
                    }
                    this_0.pb(element);
                    index = index + 1 | 0;
                  }
                  slot = slot.d3(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block_0;
              }
            }
          }
           while (!(i === lastIndex));
      }
      this_0.f(postfix);
    }
    return this_0.toString();
  };
  protoOf(IntSet).fx = function (separator, prefix, postfix, limit, truncated, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    return $super === VOID ? this.ev(separator, prefix, postfix, limit, truncated) : $super.ev.call(this, separator, prefix, postfix, limit, truncated);
  };
  protoOf(IntSet).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.IntSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.bx_1;
    $l$block: {
      // Inline function 'androidx.collection.IntSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.ax_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.f3(this_0.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  hash = hash + k[index] | 0;
                }
                slot = slot.d3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return hash;
  };
  protoOf(IntSet).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof IntSet)) {
      return false;
    }
    if (!(other.dx_1 === this.dx_1)) {
      return false;
    }
    // Inline function 'androidx.collection.IntSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.bx_1;
    $l$block: {
      // Inline function 'androidx.collection.IntSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.ax_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.f3(this_0.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  var element = k[index];
                  if (!other.ex(element)) {
                    return false;
                  }
                }
                slot = slot.d3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return true;
  };
  protoOf(IntSet).toString = function () {
    return this.fx(VOID, '[', ']');
  };
  function initializeStorage_1($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.cx_1 = newCapacity;
    initializeMetadata_1($this, newCapacity);
    $this.bx_1 = new Int32Array(newCapacity);
  }
  function initializeMetadata_1($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.ax_1 = tmp_0;
    var tmp0 = $this.ax_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp0[i] = tmp0[i].f3((new Long(255, 0)).c3(b).b3()).g3(value.c3(b));
    initializeGrowth_1($this);
  }
  function initializeGrowth_1($this) {
    $this.kx_1 = loadedCapacity($this.wv()) - $this.dx_1 | 0;
  }
  function findAbsoluteInsertIndex_0($this, element) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(element, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.cx_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp0 = $this.ax_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp0[i].e3(b).g3(tmp0[i + 1 | 0].c3(64 - b | 0).f3(toLong(b).a3().d3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$4 = (new Long(16843009, 16843009)).x2(toLong(hash2));
      var x = g.h3(tmp$ret$4);
      var m = x.w2(new Long(16843009, 16843009)).f3(x.b3()).f3(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if ($this.bx_1[index] === element) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.f3(this_1.w2(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.f3(g.b3().c3(6)).f3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_1($this, hash1);
    var tmp_0;
    if ($this.kx_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !$this.ax_1[offset_0 >> 3].d3((offset_0 & 7) << 3).f3(new Long(255, 0)).equals(new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      $this.xv();
      index_0 = findFirstAvailableSlot_1($this, hash1);
    }
    $this.dx_1 = $this.dx_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.kx_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if ($this.ax_1[offset_1 >> 3].d3((offset_1 & 7) << 3).f3(new Long(255, 0)).equals(new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.kx_1 = tmp_2 - tmp_3 | 0;
    var tmp0_0 = $this.ax_1;
    var tmp2 = $this.cx_1;
    var tmp4 = index_0;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = toLong(hash2);
    var i_0 = tmp4 >> 3;
    var b_0 = (tmp4 & 7) << 3;
    tmp0_0[i_0] = tmp0_0[i_0].f3((new Long(255, 0)).c3(b_0).b3()).g3(value.c3(b_0));
    var cloneIndex = ((tmp4 - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0_0[cloneIndex >> 3] = tmp0_0[tmp4 >> 3];
    return index_0;
  }
  function findFirstAvailableSlot_1($this, hash1) {
    var probeMask = $this.cx_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.ax_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp0[i].e3(b).g3(tmp0[i + 1 | 0].c3(64 - b | 0).f3(toLong(b).a3().d3(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.f3(g.b3().c3(7)).f3(new Long(-2139062144, -2139062144));
      if (!m.equals(new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function MutableIntSet(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    IntSet.call(this);
    this.kx_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      var tmp$ret$1 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$1);
    }
    initializeStorage_1(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableIntSet).kw = function (element) {
    var oldSize = this.dx_1;
    var index = findAbsoluteInsertIndex_0(this, element);
    this.bx_1[index] = element;
    return !(this.dx_1 === oldSize);
  };
  protoOf(MutableIntSet).xv = function () {
    var tmp;
    if (this.cx_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = this.dx_1;
      var tmp0 = _ULong___init__impl__c78o9k(toLong(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp0_0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0).x2(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = this.cx_1;
      var tmp0_1 = _ULong___init__impl__c78o9k(toLong(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_1).x2(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp0_0), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.aw();
    } else {
      this.zv(nextCapacity(this.cx_1));
    }
  };
  protoOf(MutableIntSet).aw = function () {
    var metadata = this.ax_1;
    var capacity = this.cx_1;
    var elements = this.bx_1;
    // Inline function 'androidx.collection.convertMetadataForCleanup' call
    var end = (capacity + 7 | 0) >> 3;
    var inductionVariable = 0;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var maskedGroup = metadata[i].f3(new Long(-2139062144, -2139062144));
        metadata[i] = maskedGroup.b3().v2(maskedGroup.e3(7)).f3(new Long(-16843010, -16843010));
      }
       while (inductionVariable < end);
    var lastIndex = get_lastIndex(metadata);
    metadata[lastIndex - 1 | 0] = (new Long(0, -16777216)).g3(metadata[lastIndex - 1 | 0].f3(new Long(-1, 16777215)));
    metadata[lastIndex] = metadata[0];
    var index = 0;
    $l$loop_1: while (!(index === capacity)) {
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset = index;
      var m = metadata[offset >> 3].d3((offset & 7) << 3).f3(new Long(255, 0));
      if (m.equals(new Long(128, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      if (!m.equals(new Long(254, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.hash' call
      var k = elements[index];
      var hash = imul(k, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h1' call
      var hash1 = hash_0 >>> 7 | 0;
      var targetIndex = findFirstAvailableSlot_1(this, hash1);
      var probeOffset = hash1 & capacity;
      var newProbeIndex = ((targetIndex - probeOffset | 0) & capacity) / 8 | 0;
      var oldProbeIndex = ((index - probeOffset | 0) & capacity) / 8 | 0;
      if (newProbeIndex === oldProbeIndex) {
        // Inline function 'androidx.collection.h2' call
        var hash2 = hash_0 & 127;
        var tmp2 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value = toLong(hash2);
        var i_0 = tmp2 >> 3;
        var b = (tmp2 & 7) << 3;
        metadata[i_0] = metadata[i_0].f3((new Long(255, 0)).c3(b).b3()).g3(value.c3(b));
        metadata[get_lastIndex(metadata)] = (new Long(0, -2147483648)).g3(metadata[0].f3(new Long(-1, 16777215)));
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.readRawMetadata' call
      m = metadata[targetIndex >> 3].d3((targetIndex & 7) << 3).f3(new Long(255, 0));
      if (m.equals(new Long(128, 0))) {
        // Inline function 'androidx.collection.h2' call
        var hash2_0 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_0 = toLong(hash2_0);
        var i_1 = targetIndex >> 3;
        var b_0 = (targetIndex & 7) << 3;
        metadata[i_1] = metadata[i_1].f3((new Long(255, 0)).c3(b_0).b3()).g3(value_0.c3(b_0));
        var tmp2_0 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_1 = new Long(128, 0);
        var i_2 = tmp2_0 >> 3;
        var b_1 = (tmp2_0 & 7) << 3;
        metadata[i_2] = metadata[i_2].f3((new Long(255, 0)).c3(b_1).b3()).g3(value_1.c3(b_1));
        elements[targetIndex] = elements[index];
        elements[index] = 0;
      } else {
        // Inline function 'androidx.collection.h2' call
        var hash2_1 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_2 = toLong(hash2_1);
        var i_3 = targetIndex >> 3;
        var b_2 = (targetIndex & 7) << 3;
        metadata[i_3] = metadata[i_3].f3((new Long(255, 0)).c3(b_2).b3()).g3(value_2.c3(b_2));
        var oldElement = elements[targetIndex];
        elements[targetIndex] = elements[index];
        elements[index] = oldElement;
        index = index - 1 | 0;
      }
      metadata[get_lastIndex(metadata)] = (new Long(0, -2147483648)).g3(metadata[0].f3(new Long(-1, 16777215)));
      index = index + 1 | 0;
    }
    initializeGrowth_1(this);
  };
  protoOf(MutableIntSet).zv = function (newCapacity) {
    var previousMetadata = this.ax_1;
    var previousElements = this.bx_1;
    var previousCapacity = this.cx_1;
    initializeStorage_1(this, newCapacity);
    var newMetadata = this.ax_1;
    var newElements = this.bx_1;
    var capacity = this.cx_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].d3((i & 7) << 3).f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
          var previousElement = previousElements[i];
          // Inline function 'androidx.collection.hash' call
          var hash = imul(previousElement, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$3 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_1(this, tmp$ret$3);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$4 = hash_0 & 127;
          // Inline function 'androidx.collection.writeMetadata' call
          // Inline function 'androidx.collection.writeRawMetadata' call
          var value = toLong(tmp$ret$4);
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          newMetadata[i_0] = newMetadata[i_0].f3((new Long(255, 0)).c3(b).b3()).g3(value.c3(b));
          var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
          newMetadata[cloneIndex >> 3] = newMetadata[index >> 3];
          newElements[index] = previousElement;
        }
      }
       while (inductionVariable < previousCapacity);
  };
  var properties_initialized_IntSet_kt_za7tcl;
  function _init_properties_IntSet_kt__km4dgt() {
    if (!properties_initialized_IntSet_kt_za7tcl) {
      properties_initialized_IntSet_kt_za7tcl = true;
      EmptyIntSet = new MutableIntSet(0);
      EmptyIntArray = new Int32Array(0);
    }
  }
  function initializeStorage_2($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.ox_1 = newCapacity;
    initializeMetadata_2($this, newCapacity);
    var tmp_0 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.mx_1 = Array(newCapacity);
    $this.nx_1 = new Int32Array(newCapacity);
  }
  function initializeMetadata_2($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.lx_1 = tmp_0;
    var tmp0 = $this.lx_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp0[i] = tmp0[i].f3((new Long(255, 0)).c3(b).b3()).g3(value.c3(b));
    initializeGrowth_2($this);
  }
  function initializeGrowth_2($this) {
    $this.vx_1 = loadedCapacity($this.wv()) - $this.px_1 | 0;
  }
  function findIndex($this, key) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$0, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.ox_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp0 = $this.lx_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp0[i].e3(b).g3(tmp0[i + 1 | 0].c3(64 - b | 0).f3(toLong(b).a3().d3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$5 = (new Long(16843009, 16843009)).x2(toLong(hash2));
      var x = g.h3(tmp$ret$5);
      var m = x.w2(new Long(16843009, 16843009)).f3(x.b3()).f3(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if (equals($this.mx_1[index], key)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.f3(this_1.w2(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.f3(g.b3().c3(6)).f3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_2($this, hash1);
    var tmp_0;
    if ($this.vx_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !$this.lx_1[offset_0 >> 3].d3((offset_0 & 7) << 3).f3(new Long(255, 0)).equals(new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      $this.xv();
      index_0 = findFirstAvailableSlot_2($this, hash1);
    }
    $this.px_1 = $this.px_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.vx_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if ($this.lx_1[offset_1 >> 3].d3((offset_1 & 7) << 3).f3(new Long(255, 0)).equals(new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.vx_1 = tmp_2 - tmp_3 | 0;
    var tmp0_0 = $this.lx_1;
    var tmp2 = $this.ox_1;
    var tmp4 = index_0;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = toLong(hash2);
    var i_0 = tmp4 >> 3;
    var b_0 = (tmp4 & 7) << 3;
    tmp0_0[i_0] = tmp0_0[i_0].f3((new Long(255, 0)).c3(b_0).b3()).g3(value.c3(b_0));
    var cloneIndex = ((tmp4 - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0_0[cloneIndex >> 3] = tmp0_0[tmp4 >> 3];
    return ~index_0;
  }
  function findFirstAvailableSlot_2($this, hash1) {
    var probeMask = $this.ox_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.lx_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp0[i].e3(b).g3(tmp0[i + 1 | 0].c3(64 - b | 0).f3(toLong(b).a3().d3(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.f3(g.b3().c3(7)).f3(new Long(-2139062144, -2139062144));
      if (!m.equals(new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function MutableObjectIntMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    ObjectIntMap.call(this);
    this.vx_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      var tmp$ret$1 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$1);
    }
    initializeStorage_2(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableObjectIntMap).wx = function (key, value, default_0) {
    var index = findIndex(this, key);
    var previous = default_0;
    if (index < 0) {
      index = ~index;
    } else {
      previous = this.nx_1[index];
    }
    this.mx_1[index] = key;
    this.nx_1[index] = value;
    return previous;
  };
  protoOf(MutableObjectIntMap).xx = function (index) {
    this.px_1 = this.px_1 - 1 | 0;
    var tmp0 = this.lx_1;
    var tmp2 = this.ox_1;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(254, 0);
    var i = index >> 3;
    var b = (index & 7) << 3;
    tmp0[i] = tmp0[i].f3((new Long(255, 0)).c3(b).b3()).g3(value.c3(b));
    var cloneIndex = ((index - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0[cloneIndex >> 3] = tmp0[index >> 3];
    this.mx_1[index] = null;
  };
  protoOf(MutableObjectIntMap).xv = function () {
    var tmp;
    if (this.ox_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = this.px_1;
      var tmp0 = _ULong___init__impl__c78o9k(toLong(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp0_0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0).x2(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = this.ox_1;
      var tmp0_1 = _ULong___init__impl__c78o9k(toLong(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_1).x2(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp0_0), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.aw();
    } else {
      this.zv(nextCapacity(this.ox_1));
    }
  };
  protoOf(MutableObjectIntMap).aw = function () {
    var metadata = this.lx_1;
    var capacity = this.ox_1;
    var keys = this.mx_1;
    var values = this.nx_1;
    // Inline function 'androidx.collection.convertMetadataForCleanup' call
    var end = (capacity + 7 | 0) >> 3;
    var inductionVariable = 0;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var maskedGroup = metadata[i].f3(new Long(-2139062144, -2139062144));
        metadata[i] = maskedGroup.b3().v2(maskedGroup.e3(7)).f3(new Long(-16843010, -16843010));
      }
       while (inductionVariable < end);
    var lastIndex = get_lastIndex(metadata);
    metadata[lastIndex - 1 | 0] = (new Long(0, -16777216)).g3(metadata[lastIndex - 1 | 0].f3(new Long(-1, 16777215)));
    metadata[lastIndex] = metadata[0];
    var index = 0;
    $l$loop_1: while (!(index === capacity)) {
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset = index;
      var m = metadata[offset >> 3].d3((offset & 7) << 3).f3(new Long(255, 0));
      if (m.equals(new Long(128, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      if (!m.equals(new Long(254, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = keys[index];
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      var tmp$ret$2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$2, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h1' call
      var hash1 = hash_0 >>> 7 | 0;
      var targetIndex = findFirstAvailableSlot_2(this, hash1);
      var probeOffset = hash1 & capacity;
      var newProbeIndex = ((targetIndex - probeOffset | 0) & capacity) / 8 | 0;
      var oldProbeIndex = ((index - probeOffset | 0) & capacity) / 8 | 0;
      if (newProbeIndex === oldProbeIndex) {
        // Inline function 'androidx.collection.h2' call
        var hash2 = hash_0 & 127;
        var tmp2 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value = toLong(hash2);
        var i_0 = tmp2 >> 3;
        var b = (tmp2 & 7) << 3;
        metadata[i_0] = metadata[i_0].f3((new Long(255, 0)).c3(b).b3()).g3(value.c3(b));
        metadata[get_lastIndex(metadata)] = (new Long(0, -2147483648)).g3(metadata[0].f3(new Long(-1, 16777215)));
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.readRawMetadata' call
      m = metadata[targetIndex >> 3].d3((targetIndex & 7) << 3).f3(new Long(255, 0));
      if (m.equals(new Long(128, 0))) {
        // Inline function 'androidx.collection.h2' call
        var hash2_0 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_0 = toLong(hash2_0);
        var i_1 = targetIndex >> 3;
        var b_0 = (targetIndex & 7) << 3;
        metadata[i_1] = metadata[i_1].f3((new Long(255, 0)).c3(b_0).b3()).g3(value_0.c3(b_0));
        var tmp2_0 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_1 = new Long(128, 0);
        var i_2 = tmp2_0 >> 3;
        var b_1 = (tmp2_0 & 7) << 3;
        metadata[i_2] = metadata[i_2].f3((new Long(255, 0)).c3(b_1).b3()).g3(value_1.c3(b_1));
        keys[targetIndex] = keys[index];
        keys[index] = null;
        values[targetIndex] = values[index];
        values[index] = 0;
      } else {
        // Inline function 'androidx.collection.h2' call
        var hash2_1 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_2 = toLong(hash2_1);
        var i_3 = targetIndex >> 3;
        var b_2 = (targetIndex & 7) << 3;
        metadata[i_3] = metadata[i_3].f3((new Long(255, 0)).c3(b_2).b3()).g3(value_2.c3(b_2));
        var oldKey = keys[targetIndex];
        keys[targetIndex] = keys[index];
        keys[index] = oldKey;
        var oldValue = values[targetIndex];
        values[targetIndex] = values[index];
        values[index] = oldValue;
        index = index - 1 | 0;
      }
      metadata[get_lastIndex(metadata)] = (new Long(0, -2147483648)).g3(metadata[0].f3(new Long(-1, 16777215)));
      index = index + 1 | 0;
    }
    initializeGrowth_2(this);
  };
  protoOf(MutableObjectIntMap).zv = function (newCapacity) {
    var previousMetadata = this.lx_1;
    var previousKeys = this.mx_1;
    var previousValues = this.nx_1;
    var previousCapacity = this.ox_1;
    initializeStorage_2(this, newCapacity);
    var newMetadata = this.lx_1;
    var newKeys = this.mx_1;
    var newValues = this.nx_1;
    var capacity = this.ox_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].d3((i & 7) << 3).f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
          var previousKey = previousKeys[i];
          // Inline function 'androidx.collection.hash' call
          // Inline function 'kotlin.hashCode' call
          var tmp1_elvis_lhs = previousKey == null ? null : hashCode(previousKey);
          var tmp$ret$2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
          var hash = imul(tmp$ret$2, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$4 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_2(this, tmp$ret$4);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$5 = hash_0 & 127;
          // Inline function 'androidx.collection.writeMetadata' call
          // Inline function 'androidx.collection.writeRawMetadata' call
          var value = toLong(tmp$ret$5);
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          newMetadata[i_0] = newMetadata[i_0].f3((new Long(255, 0)).c3(b).b3()).g3(value.c3(b));
          var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
          newMetadata[cloneIndex >> 3] = newMetadata[index >> 3];
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  };
  function ObjectIntMap() {
    this.lx_1 = get_EmptyGroup();
    this.mx_1 = get_EMPTY_OBJECTS();
    this.nx_1 = get_EmptyIntArray();
    this.ox_1 = 0;
    this.px_1 = 0;
  }
  protoOf(ObjectIntMap).wv = function () {
    return this.ox_1;
  };
  protoOf(ObjectIntMap).j = function () {
    return this.px_1;
  };
  protoOf(ObjectIntMap).r = function () {
    return this.px_1 === 0;
  };
  protoOf(ObjectIntMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.ObjectIntMap.forEach' call
    var k = this.mx_1;
    var v = this.nx_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
      var m = this.lx_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.f3(this_0.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  var tmp = k[index];
                  var tmp0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp_0 = hash;
                  // Inline function 'kotlin.hashCode' call
                  var tmp1_elvis_lhs = tmp0 == null ? null : hashCode(tmp0);
                  hash = tmp_0 + ((tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) ^ v[index]) | 0;
                }
                slot = slot.d3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return hash;
  };
  protoOf(ObjectIntMap).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof ObjectIntMap)) {
      return false;
    }
    if (!(other.j() === this.j())) {
      return false;
    }
    var o = other instanceof ObjectIntMap ? other : THROW_CCE();
    // Inline function 'androidx.collection.ObjectIntMap.forEach' call
    var k = this.mx_1;
    var v = this.nx_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
      var m = this.lx_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.f3(this_0.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  var tmp = k[index];
                  var tmp0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var value = v[index];
                  var index_0 = o.yx(tmp0);
                  if (index_0 < 0 || !(value === o.nx_1[index_0])) {
                    return false;
                  }
                }
                slot = slot.d3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return true;
  };
  protoOf(ObjectIntMap).toString = function () {
    if (this.r()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().d8(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.ObjectIntMap.forEach' call
    var k = this.mx_1;
    var v = this.nx_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
      var m = this.lx_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.f3(this_0.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  var tmp = k[index];
                  var tmp0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var value = v[index];
                  s.b8(tmp0 === this ? '(this)' : tmp0);
                  s.c8('=');
                  s.pb(value);
                  i = i + 1 | 0;
                  if (i < this.px_1) {
                    s.d8(_Char___init__impl__6a9atx(44)).d8(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = slot.d3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.d8(_Char___init__impl__6a9atx(125)).toString();
  };
  protoOf(ObjectIntMap).yx = function (key) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$0, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = this.ox_1;
    // Inline function 'androidx.collection.h1' call
    var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp0 = this.lx_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp0[i].e3(b).g3(tmp0[i + 1 | 0].c3(64 - b | 0).f3(toLong(b).a3().d3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$5 = (new Long(16843009, 16843009)).x2(toLong(hash2));
      var x = g.h3(tmp$ret$5);
      var m = x.w2(new Long(16843009, 16843009)).f3(x.b3()).f3(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if (equals(this.mx_1[index], key)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.f3(this_1.w2(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.f3(g.b3().c3(6)).f3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    return -1;
  };
  function get_EmptyArray() {
    _init_properties_ObjectList_kt__fnapct();
    return EmptyArray;
  }
  var EmptyArray;
  function get_EmptyObjectList() {
    _init_properties_ObjectList_kt__fnapct();
    return EmptyObjectList;
  }
  var EmptyObjectList;
  function ObjectList$toString$lambda(this$0) {
    return function (element) {
      var tmp;
      if (element === this$0) {
        tmp = '(this)';
      } else {
        tmp = toString(element);
      }
      return tmp;
    };
  }
  function ObjectList(initialCapacity) {
    var tmp = this;
    var tmp_0;
    if (initialCapacity === 0) {
      tmp_0 = get_EmptyArray();
    } else {
      // Inline function 'kotlin.arrayOfNulls' call
      tmp_0 = Array(initialCapacity);
    }
    tmp.zx_1 = tmp_0;
    this.ay_1 = 0;
  }
  protoOf(ObjectList).j = function () {
    return this.ay_1;
  };
  protoOf(ObjectList).o = function (element) {
    return this.s(element) >= 0;
  };
  protoOf(ObjectList).fw = function () {
    if (this.r()) {
      throwNoSuchElementException('ObjectList is empty.');
    }
    var tmp = this.zx_1[0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(ObjectList).p = function (index) {
    if (!(0 <= index ? index < this.ay_1 : false)) {
      this.by(index);
    }
    var tmp = this.zx_1[index];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(ObjectList).by = function (index) {
    // Inline function 'androidx.collection.ObjectList.lastIndex' call
    var tmp$ret$0 = this.ay_1 - 1 | 0;
    throwIndexOutOfBoundsException('Index ' + index + ' must be in 0..' + tmp$ret$0);
  };
  protoOf(ObjectList).s = function (element) {
    if (element == null) {
      // Inline function 'androidx.collection.ObjectList.forEachIndexed' call
      // Inline function 'kotlin.contracts.contract' call
      var content = this.zx_1;
      var inductionVariable = 0;
      var last = this.ay_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp = content[i];
          if (((tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE()) == null) {
            return i;
          }
        }
         while (inductionVariable < last);
    } else {
      // Inline function 'androidx.collection.ObjectList.forEachIndexed' call
      // Inline function 'kotlin.contracts.contract' call
      var content_0 = this.zx_1;
      var inductionVariable_0 = 0;
      var last_0 = this.ay_1;
      if (inductionVariable_0 < last_0)
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var tmp_0 = content_0[i_0];
          var item = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
          if (equals(element, item)) {
            return i_0;
          }
        }
         while (inductionVariable_0 < last_0);
    }
    return -1;
  };
  protoOf(ObjectList).r = function () {
    return this.ay_1 === 0;
  };
  protoOf(ObjectList).cy = function () {
    return !(this.ay_1 === 0);
  };
  protoOf(ObjectList).dy = function (separator, prefix, postfix, limit, truncated, transform) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    $l$block: {
      this_0.f(prefix);
      // Inline function 'androidx.collection.ObjectList.forEachIndexed' call
      // Inline function 'kotlin.contracts.contract' call
      var content = this.zx_1;
      var inductionVariable = 0;
      var last = this.ay_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp = content[i];
          var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
          if (i === limit) {
            this_0.f(truncated);
            break $l$block;
          }
          if (!(i === 0)) {
            this_0.f(separator);
          }
          if (transform == null) {
            this_0.b8(element);
          } else {
            this_0.f(transform(element));
          }
        }
         while (inductionVariable < last);
      this_0.f(postfix);
    }
    return this_0.toString();
  };
  protoOf(ObjectList).ey = function (separator, prefix, postfix, limit, truncated, transform, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return $super === VOID ? this.dy(separator, prefix, postfix, limit, truncated, transform) : $super.dy.call(this, separator, prefix, postfix, limit, truncated, transform);
  };
  protoOf(ObjectList).hashCode = function () {
    var hashCode_0 = 0;
    // Inline function 'androidx.collection.ObjectList.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var content = this.zx_1;
    var inductionVariable = 0;
    var last = this.ay_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = content[i];
        var tmp_0 = hashCode_0;
        // Inline function 'kotlin.hashCode' call
        var tmp0_safe_receiver = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
        var tmp$ret$1 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
        hashCode_0 = tmp_0 + imul(31, tmp$ret$1) | 0;
      }
       while (inductionVariable < last);
    return hashCode_0;
  };
  protoOf(ObjectList).equals = function (other) {
    var tmp;
    if (!(other instanceof ObjectList)) {
      tmp = true;
    } else {
      tmp = !(other.ay_1 === this.ay_1);
    }
    if (tmp) {
      return false;
    }
    var content = this.zx_1;
    var otherContent = other.zx_1;
    // Inline function 'androidx.collection.ObjectList.indices' call
    var progression = until(0, this.ay_1);
    var inductionVariable = progression.z_1;
    var last = progression.a1_1;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!equals(content[i], otherContent[i])) {
          return false;
        }
      }
       while (!(i === last));
    return true;
  };
  protoOf(ObjectList).toString = function () {
    return this.ey(VOID, '[', ']', VOID, VOID, ObjectList$toString$lambda(this));
  };
  function throwIndexOutOfBoundsInclusiveException($this, index) {
    throwIndexOutOfBoundsException('Index ' + index + ' must be in 0..' + $this.ay_1);
  }
  function MutableObjectListIterator(list, index) {
    this.fy_1 = list;
    this.gy_1 = index - 1 | 0;
  }
  protoOf(MutableObjectListIterator).h = function () {
    return this.gy_1 < (this.fy_1.j() - 1 | 0);
  };
  protoOf(MutableObjectListIterator).i = function () {
    this.gy_1 = this.gy_1 + 1 | 0;
    return this.fy_1.p(this.gy_1);
  };
  protoOf(MutableObjectListIterator).a4 = function () {
    this.fy_1.b2(this.gy_1);
    this.gy_1 = this.gy_1 - 1 | 0;
  };
  protoOf(MutableObjectListIterator).k4 = function () {
    return this.gy_1 >= 0;
  };
  protoOf(MutableObjectListIterator).l4 = function () {
    return this.gy_1 + 1 | 0;
  };
  protoOf(MutableObjectListIterator).m4 = function () {
    var tmp1 = this.gy_1;
    this.gy_1 = tmp1 - 1 | 0;
    return this.fy_1.p(tmp1);
  };
  protoOf(MutableObjectListIterator).n4 = function () {
    return this.gy_1;
  };
  function ObjectListMutableList(objectList) {
    this.hy_1 = objectList;
  }
  protoOf(ObjectListMutableList).j = function () {
    return this.hy_1.j();
  };
  protoOf(ObjectListMutableList).te = function (element) {
    return this.hy_1.o(element);
  };
  protoOf(ObjectListMutableList).o = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.te((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(ObjectListMutableList).p = function (index) {
    checkIndex(this, index);
    return this.hy_1.p(index);
  };
  protoOf(ObjectListMutableList).iy = function (element) {
    return this.hy_1.s(element);
  };
  protoOf(ObjectListMutableList).s = function (element) {
    if (!(element == null ? true : !(element == null)))
      return -1;
    return this.iy((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(ObjectListMutableList).r = function () {
    return this.hy_1.r();
  };
  protoOf(ObjectListMutableList).g = function () {
    return new MutableObjectListIterator(this, 0);
  };
  protoOf(ObjectListMutableList).jy = function (element) {
    return this.hy_1.e(element);
  };
  protoOf(ObjectListMutableList).e = function (element) {
    return this.jy((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(ObjectListMutableList).ny = function (index, element) {
    return this.hy_1.a2(index, element);
  };
  protoOf(ObjectListMutableList).a2 = function (index, element) {
    return this.ny(index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(ObjectListMutableList).oy = function (index, elements) {
    return this.hy_1.w1(index, elements);
  };
  protoOf(ObjectListMutableList).w1 = function (index, elements) {
    return this.oy(index, elements);
  };
  protoOf(ObjectListMutableList).py = function (elements) {
    return this.hy_1.qy(elements);
  };
  protoOf(ObjectListMutableList).n = function (elements) {
    return this.py(elements);
  };
  protoOf(ObjectListMutableList).y1 = function () {
    return this.hy_1.y1();
  };
  protoOf(ObjectListMutableList).q = function (index) {
    return new MutableObjectListIterator(this, index);
  };
  protoOf(ObjectListMutableList).ry = function (element) {
    return this.hy_1.v1(element);
  };
  protoOf(ObjectListMutableList).v1 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.ry((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(ObjectListMutableList).sy = function (elements) {
    return this.hy_1.ty(elements);
  };
  protoOf(ObjectListMutableList).x1 = function (elements) {
    return this.sy(elements);
  };
  protoOf(ObjectListMutableList).b2 = function (index) {
    checkIndex(this, index);
    return this.hy_1.b2(index);
  };
  protoOf(ObjectListMutableList).uy = function (index, element) {
    checkIndex(this, index);
    return this.hy_1.z1(index, element);
  };
  protoOf(ObjectListMutableList).z1 = function (index, element) {
    return this.uy(index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function MutableObjectList(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 16 : initialCapacity;
    ObjectList.call(this, initialCapacity);
    this.my_1 = null;
  }
  protoOf(MutableObjectList).e = function (element) {
    // Inline function 'androidx.collection.MutableObjectList.ensureCapacity' call
    var capacity = this.ay_1 + 1 | 0;
    var oldContent = this.zx_1;
    if (oldContent.length < capacity) {
      this.vy(capacity, oldContent);
    }
    this.zx_1[this.ay_1] = element;
    this.ay_1 = this.ay_1 + 1 | 0;
    return true;
  };
  protoOf(MutableObjectList).a2 = function (index, element) {
    if (!(0 <= index ? index <= this.ay_1 : false)) {
      throwIndexOutOfBoundsInclusiveException(this, index);
    }
    // Inline function 'androidx.collection.MutableObjectList.ensureCapacity' call
    var capacity = this.ay_1 + 1 | 0;
    var oldContent = this.zx_1;
    if (oldContent.length < capacity) {
      this.vy(capacity, oldContent);
    }
    var content = this.zx_1;
    if (!(index === this.ay_1)) {
      var tmp4 = index + 1 | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.ay_1;
      arrayCopy(content, content, tmp4, index, endIndex);
    }
    content[index] = element;
    this.ay_1 = this.ay_1 + 1 | 0;
  };
  protoOf(MutableObjectList).w1 = function (index, elements) {
    if (!(0 <= index ? index <= this.ay_1 : false)) {
      throwIndexOutOfBoundsInclusiveException(this, index);
    }
    if (elements.r())
      return false;
    // Inline function 'androidx.collection.MutableObjectList.ensureCapacity' call
    var capacity = this.ay_1 + elements.j() | 0;
    var oldContent = this.zx_1;
    if (oldContent.length < capacity) {
      this.vy(capacity, oldContent);
    }
    var content = this.zx_1;
    if (!(index === this.ay_1)) {
      var tmp4 = index + elements.j() | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.ay_1;
      arrayCopy(content, content, tmp4, index, endIndex);
    }
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index_0 = 0;
    var _iterator__ex2g4s = elements.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      var _unary__edvuaz = index_0;
      index_0 = _unary__edvuaz + 1 | 0;
      content[index + checkIndexOverflow(_unary__edvuaz) | 0] = item;
    }
    this.ay_1 = this.ay_1 + elements.j() | 0;
    return true;
  };
  protoOf(MutableObjectList).wy = function (elements) {
    var oldSize = this.ay_1;
    this.xy(elements);
    return !(oldSize === this.ay_1);
  };
  protoOf(MutableObjectList).qy = function (elements) {
    var oldSize = this.ay_1;
    this.yy(elements);
    return !(oldSize === this.ay_1);
  };
  protoOf(MutableObjectList).xy = function (elements) {
    if (elements.r())
      return Unit_instance;
    // Inline function 'androidx.collection.MutableObjectList.ensureCapacity' call
    var capacity = this.ay_1 + elements.ay_1 | 0;
    var oldContent = this.zx_1;
    if (oldContent.length < capacity) {
      this.vy(capacity, oldContent);
    }
    var content = this.zx_1;
    var tmp0 = elements.zx_1;
    var tmp4 = this.ay_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = elements.ay_1;
    arrayCopy(tmp0, content, tmp4, 0, endIndex);
    this.ay_1 = this.ay_1 + elements.ay_1 | 0;
  };
  protoOf(MutableObjectList).yy = function (elements) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = elements.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'androidx.collection.MutableObjectList.plusAssign' call
      this.e(element);
    }
  };
  protoOf(MutableObjectList).y1 = function () {
    fill_0(this.zx_1, null, 0, this.ay_1);
    this.ay_1 = 0;
  };
  protoOf(MutableObjectList).vy = function (capacity, oldContent) {
    var oldSize = oldContent.length;
    // Inline function 'kotlin.math.max' call
    var b = imul(oldSize, 3) / 2 | 0;
    var newSize = Math.max(capacity, b);
    // Inline function 'kotlin.arrayOfNulls' call
    var newContent = Array(newSize);
    var tmp = this;
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(oldContent, newContent, 0, 0, oldSize);
    tmp.zx_1 = newContent;
  };
  protoOf(MutableObjectList).v1 = function (element) {
    var index = this.s(element);
    if (index >= 0) {
      this.b2(index);
      return true;
    }
    return false;
  };
  protoOf(MutableObjectList).ty = function (elements) {
    var initialSize = this.ay_1;
    this.zy(elements);
    return !(initialSize === this.ay_1);
  };
  protoOf(MutableObjectList).zy = function (elements) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = elements.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'androidx.collection.MutableObjectList.minusAssign' call
      this.v1(element);
    }
  };
  protoOf(MutableObjectList).b2 = function (index) {
    if (!(0 <= index ? index < this.ay_1 : false)) {
      this.by(index);
    }
    var content = this.zx_1;
    var element = content[index];
    // Inline function 'androidx.collection.ObjectList.lastIndex' call
    if (!(index === (this.ay_1 - 1 | 0))) {
      var tmp6 = index + 1 | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.ay_1;
      arrayCopy(content, content, index, tmp6, endIndex);
    }
    this.ay_1 = this.ay_1 - 1 | 0;
    content[this.ay_1] = null;
    return (element == null ? true : !(element == null)) ? element : THROW_CCE();
  };
  protoOf(MutableObjectList).z1 = function (index, element) {
    if (!(0 <= index ? index < this.ay_1 : false)) {
      this.by(index);
    }
    var content = this.zx_1;
    var old = content[index];
    content[index] = element;
    return (old == null ? true : !(old == null)) ? old : THROW_CCE();
  };
  protoOf(MutableObjectList).az = function () {
    var tmp0_elvis_lhs = this.my_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new ObjectListMutableList(this);
      this.my_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  function checkIndex(_this__u8e3s4, index) {
    _init_properties_ObjectList_kt__fnapct();
    var size = _this__u8e3s4.j();
    if (index < 0 || index >= size) {
      throwIndexOutOfBoundsException('Index ' + index + ' is out of bounds. The list has ' + size + ' elements.');
    }
  }
  function emptyObjectList() {
    _init_properties_ObjectList_kt__fnapct();
    var tmp = get_EmptyObjectList();
    return tmp instanceof ObjectList ? tmp : THROW_CCE();
  }
  function mutableObjectListOf(element1, element2) {
    _init_properties_ObjectList_kt__fnapct();
    var list = new MutableObjectList(2);
    // Inline function 'androidx.collection.MutableObjectList.plusAssign' call
    list.e(element1);
    // Inline function 'androidx.collection.MutableObjectList.plusAssign' call
    list.e(element2);
    return list;
  }
  function objectListOf(element1) {
    _init_properties_ObjectList_kt__fnapct();
    return mutableObjectListOf_0(element1);
  }
  function mutableObjectListOf_0(element1) {
    _init_properties_ObjectList_kt__fnapct();
    var list = new MutableObjectList(1);
    // Inline function 'androidx.collection.MutableObjectList.plusAssign' call
    list.e(element1);
    return list;
  }
  var properties_initialized_ObjectList_kt_7isazj;
  function _init_properties_ObjectList_kt__fnapct() {
    if (!properties_initialized_ObjectList_kt_7isazj) {
      properties_initialized_ObjectList_kt_7isazj = true;
      // Inline function 'kotlin.arrayOfNulls' call
      EmptyArray = Array(0);
      EmptyObjectList = new MutableObjectList(0);
    }
  }
  function get_EmptyGroup() {
    _init_properties_ScatterMap_kt__cygxb2();
    return EmptyGroup;
  }
  var EmptyGroup;
  function get_EmptyScatterMap() {
    _init_properties_ScatterMap_kt__cygxb2();
    return EmptyScatterMap;
  }
  var EmptyScatterMap;
  function unloadedCapacity(capacity) {
    _init_properties_ScatterMap_kt__cygxb2();
    if (true && capacity === 7) {
      return 8;
    }
    return capacity + ((capacity - 1 | 0) / 7 | 0) | 0;
  }
  function normalizeCapacity(n) {
    _init_properties_ScatterMap_kt__cygxb2();
    var tmp;
    if (n > 0) {
      // Inline function 'kotlin.countLeadingZeroBits' call
      tmp = -1 >>> clz32(n) | 0;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function loadedCapacity(capacity) {
    _init_properties_ScatterMap_kt__cygxb2();
    if (true && capacity === 7) {
      return 6;
    }
    return capacity - (capacity / 8 | 0) | 0;
  }
  function nextCapacity(capacity) {
    _init_properties_ScatterMap_kt__cygxb2();
    var tmp;
    if (capacity === 0) {
      tmp = 6;
    } else {
      tmp = imul(capacity, 2) + 1 | 0;
    }
    return tmp;
  }
  function initializeStorage_3($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.math.max' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.ez_1 = newCapacity;
    initializeMetadata_3($this, newCapacity);
    var tmp_0 = $this;
    var tmp_1;
    if (newCapacity === 0) {
      tmp_1 = get_EMPTY_OBJECTS();
    } else {
      // Inline function 'kotlin.arrayOfNulls' call
      tmp_1 = Array(newCapacity);
    }
    tmp_0.cz_1 = tmp_1;
    var tmp_2 = $this;
    var tmp_3;
    if (newCapacity === 0) {
      tmp_3 = get_EMPTY_OBJECTS();
    } else {
      // Inline function 'kotlin.arrayOfNulls' call
      tmp_3 = Array(newCapacity);
    }
    tmp_2.dz_1 = tmp_3;
  }
  function initializeMetadata_3($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      fill(this_0, new Long(-2139062144, -2139062144));
      // Inline function 'androidx.collection.writeRawMetadata' call
      var value = new Long(255, 0);
      var i = capacity >> 3;
      var b = (capacity & 7) << 3;
      this_0[i] = this_0[i].f3((new Long(255, 0)).c3(b).b3()).g3(value.c3(b));
      tmp_0 = this_0;
    }
    tmp.bz_1 = tmp_0;
    initializeGrowth_3($this);
  }
  function initializeGrowth_3($this) {
    $this.lz_1 = loadedCapacity($this.wv()) - $this.fz_1 | 0;
  }
  function findFirstAvailableSlot_3($this, hash1) {
    var probeMask = $this.ez_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.bz_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp0[i].e3(b).g3(tmp0[i + 1 | 0].c3(64 - b | 0).f3(toLong(b).a3().d3(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.f3(g.b3().c3(7)).f3(new Long(-2139062144, -2139062144));
      if (!m.equals(new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function MutableScatterMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    ScatterMap.call(this);
    this.lz_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      var tmp$ret$1 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$1);
    }
    initializeStorage_3(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableScatterMap).mz = function (key, value) {
    // Inline function 'kotlin.let' call
    var index = this.nz(key);
    var index_0 = index < 0 ? ~index : index;
    this.cz_1[index_0] = key;
    this.dz_1[index_0] = value;
  };
  protoOf(MutableScatterMap).m2 = function (key) {
    var tmp$ret$10;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = key == null ? null : hashCode(key);
      var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$0, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.ez_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.bz_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = tmp0[i].e3(b).g3(tmp0[i + 1 | 0].c3(64 - b | 0).f3(toLong(b).a3().d3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$5 = (new Long(16843009, 16843009)).x2(toLong(hash2));
        var x = g.h3(tmp$ret$5);
        var m = x.w2(new Long(16843009, 16843009)).f3(x.b3()).f3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (equals(this.cz_1[index], key)) {
            tmp$ret$10 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.f3(this_1.w2(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.f3(g.b3().c3(6)).f3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$10 = -1;
    }
    var index_0 = tmp$ret$10;
    if (index_0 >= 0) {
      return this.zw(index_0);
    }
    return null;
  };
  protoOf(MutableScatterMap).zw = function (index) {
    this.fz_1 = this.fz_1 - 1 | 0;
    var tmp0 = this.bz_1;
    var tmp2 = this.ez_1;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(254, 0);
    var i = index >> 3;
    var b = (index & 7) << 3;
    tmp0[i] = tmp0[i].f3((new Long(255, 0)).c3(b).b3()).g3(value.c3(b));
    var cloneIndex = ((index - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0[cloneIndex >> 3] = tmp0[index >> 3];
    this.cz_1[index] = null;
    var oldValue = this.dz_1[index];
    this.dz_1[index] = null;
    return (oldValue == null ? true : !(oldValue == null)) ? oldValue : THROW_CCE();
  };
  protoOf(MutableScatterMap).y1 = function () {
    this.fz_1 = 0;
    if (!(this.bz_1 === get_EmptyGroup())) {
      fill(this.bz_1, new Long(-2139062144, -2139062144));
      var tmp0 = this.bz_1;
      var tmp2 = this.ez_1;
      // Inline function 'androidx.collection.writeRawMetadata' call
      var value = new Long(255, 0);
      var i = tmp2 >> 3;
      var b = (tmp2 & 7) << 3;
      tmp0[i] = tmp0[i].f3((new Long(255, 0)).c3(b).b3()).g3(value.c3(b));
    }
    fill_0(this.dz_1, null, 0, this.ez_1);
    fill_0(this.cz_1, null, 0, this.ez_1);
    initializeGrowth_3(this);
  };
  protoOf(MutableScatterMap).nz = function (key) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$0, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = this.ez_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp0 = this.bz_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp0[i].e3(b).g3(tmp0[i + 1 | 0].c3(64 - b | 0).f3(toLong(b).a3().d3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$5 = (new Long(16843009, 16843009)).x2(toLong(hash2));
      var x = g.h3(tmp$ret$5);
      var m = x.w2(new Long(16843009, 16843009)).f3(x.b3()).f3(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if (equals(this.cz_1[index], key)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.f3(this_1.w2(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.f3(g.b3().c3(6)).f3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_3(this, hash1);
    var tmp_0;
    if (this.lz_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !this.bz_1[offset_0 >> 3].d3((offset_0 & 7) << 3).f3(new Long(255, 0)).equals(new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      this.xv();
      index_0 = findFirstAvailableSlot_3(this, hash1);
    }
    this.fz_1 = this.fz_1 + 1 | 0;
    var tmp_1 = this;
    var tmp_2 = this.lz_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if (this.bz_1[offset_1 >> 3].d3((offset_1 & 7) << 3).f3(new Long(255, 0)).equals(new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.lz_1 = tmp_2 - tmp_3 | 0;
    var tmp0_0 = this.bz_1;
    var tmp2 = this.ez_1;
    var tmp4 = index_0;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = toLong(hash2);
    var i_0 = tmp4 >> 3;
    var b_0 = (tmp4 & 7) << 3;
    tmp0_0[i_0] = tmp0_0[i_0].f3((new Long(255, 0)).c3(b_0).b3()).g3(value.c3(b_0));
    var cloneIndex = ((tmp4 - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0_0[cloneIndex >> 3] = tmp0_0[tmp4 >> 3];
    return ~index_0;
  };
  protoOf(MutableScatterMap).xv = function () {
    var tmp;
    if (this.ez_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = this.fz_1;
      var tmp0 = _ULong___init__impl__c78o9k(toLong(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp0_0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0).x2(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = this.ez_1;
      var tmp0_1 = _ULong___init__impl__c78o9k(toLong(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_1).x2(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp0_0), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.aw();
    } else {
      this.zv(nextCapacity(this.ez_1));
    }
  };
  protoOf(MutableScatterMap).aw = function () {
    var metadata = this.bz_1;
    var capacity = this.ez_1;
    var keys = this.cz_1;
    var values = this.dz_1;
    // Inline function 'androidx.collection.convertMetadataForCleanup' call
    var end = (capacity + 7 | 0) >> 3;
    var inductionVariable = 0;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var maskedGroup = metadata[i].f3(new Long(-2139062144, -2139062144));
        metadata[i] = maskedGroup.b3().v2(maskedGroup.e3(7)).f3(new Long(-16843010, -16843010));
      }
       while (inductionVariable < end);
    var lastIndex = get_lastIndex(metadata);
    metadata[lastIndex - 1 | 0] = (new Long(0, -16777216)).g3(metadata[lastIndex - 1 | 0].f3(new Long(-1, 16777215)));
    metadata[lastIndex] = metadata[0];
    var index = 0;
    $l$loop_1: while (!(index === capacity)) {
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset = index;
      var m = metadata[offset >> 3].d3((offset & 7) << 3).f3(new Long(255, 0));
      if (m.equals(new Long(128, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      if (!m.equals(new Long(254, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = keys[index];
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      var tmp$ret$2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$2, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h1' call
      var hash1 = hash_0 >>> 7 | 0;
      var targetIndex = findFirstAvailableSlot_3(this, hash1);
      var probeOffset = hash1 & capacity;
      var newProbeIndex = ((targetIndex - probeOffset | 0) & capacity) / 8 | 0;
      var oldProbeIndex = ((index - probeOffset | 0) & capacity) / 8 | 0;
      if (newProbeIndex === oldProbeIndex) {
        // Inline function 'androidx.collection.h2' call
        var hash2 = hash_0 & 127;
        var tmp2 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value = toLong(hash2);
        var i_0 = tmp2 >> 3;
        var b = (tmp2 & 7) << 3;
        metadata[i_0] = metadata[i_0].f3((new Long(255, 0)).c3(b).b3()).g3(value.c3(b));
        metadata[get_lastIndex(metadata)] = metadata[0];
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.readRawMetadata' call
      m = metadata[targetIndex >> 3].d3((targetIndex & 7) << 3).f3(new Long(255, 0));
      if (m.equals(new Long(128, 0))) {
        // Inline function 'androidx.collection.h2' call
        var hash2_0 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_0 = toLong(hash2_0);
        var i_1 = targetIndex >> 3;
        var b_0 = (targetIndex & 7) << 3;
        metadata[i_1] = metadata[i_1].f3((new Long(255, 0)).c3(b_0).b3()).g3(value_0.c3(b_0));
        var tmp2_0 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_1 = new Long(128, 0);
        var i_2 = tmp2_0 >> 3;
        var b_1 = (tmp2_0 & 7) << 3;
        metadata[i_2] = metadata[i_2].f3((new Long(255, 0)).c3(b_1).b3()).g3(value_1.c3(b_1));
        keys[targetIndex] = keys[index];
        keys[index] = null;
        values[targetIndex] = values[index];
        values[index] = null;
      } else {
        // Inline function 'androidx.collection.h2' call
        var hash2_1 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_2 = toLong(hash2_1);
        var i_3 = targetIndex >> 3;
        var b_2 = (targetIndex & 7) << 3;
        metadata[i_3] = metadata[i_3].f3((new Long(255, 0)).c3(b_2).b3()).g3(value_2.c3(b_2));
        var oldKey = keys[targetIndex];
        keys[targetIndex] = keys[index];
        keys[index] = oldKey;
        var oldValue = values[targetIndex];
        values[targetIndex] = values[index];
        values[index] = oldValue;
        index = index - 1 | 0;
      }
      metadata[get_lastIndex(metadata)] = metadata[0];
      index = index + 1 | 0;
    }
    initializeGrowth_3(this);
  };
  protoOf(MutableScatterMap).zv = function (newCapacity) {
    var previousMetadata = this.bz_1;
    var previousKeys = this.cz_1;
    var previousValues = this.dz_1;
    var previousCapacity = this.ez_1;
    initializeStorage_3(this, newCapacity);
    var newMetadata = this.bz_1;
    var newKeys = this.cz_1;
    var newValues = this.dz_1;
    var capacity = this.ez_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].d3((i & 7) << 3).f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
          var previousKey = previousKeys[i];
          // Inline function 'androidx.collection.hash' call
          // Inline function 'kotlin.hashCode' call
          var tmp1_elvis_lhs = previousKey == null ? null : hashCode(previousKey);
          var tmp$ret$2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
          var hash = imul(tmp$ret$2, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$4 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_3(this, tmp$ret$4);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$5 = hash_0 & 127;
          // Inline function 'androidx.collection.writeMetadata' call
          // Inline function 'androidx.collection.writeRawMetadata' call
          var value = toLong(tmp$ret$5);
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          newMetadata[i_0] = newMetadata[i_0].f3((new Long(255, 0)).c3(b).b3()).g3(value.c3(b));
          var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
          newMetadata[cloneIndex >> 3] = newMetadata[index >> 3];
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  };
  function ScatterMap() {
    this.bz_1 = get_EmptyGroup();
    this.cz_1 = get_EMPTY_OBJECTS();
    this.dz_1 = get_EMPTY_OBJECTS();
    this.ez_1 = 0;
    this.fz_1 = 0;
  }
  protoOf(ScatterMap).wv = function () {
    return this.ez_1;
  };
  protoOf(ScatterMap).j = function () {
    return this.fz_1;
  };
  protoOf(ScatterMap).r = function () {
    return this.fz_1 === 0;
  };
  protoOf(ScatterMap).cy = function () {
    return !(this.fz_1 === 0);
  };
  protoOf(ScatterMap).h2 = function (key) {
    var tmp$ret$10;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = key == null ? null : hashCode(key);
      var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$0, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.ez_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.bz_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = tmp0[i].e3(b).g3(tmp0[i + 1 | 0].c3(64 - b | 0).f3(toLong(b).a3().d3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$5 = (new Long(16843009, 16843009)).x2(toLong(hash2));
        var x = g.h3(tmp$ret$5);
        var m = x.w2(new Long(16843009, 16843009)).f3(x.b3()).f3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (equals(this.cz_1[index], key)) {
            tmp$ret$10 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.f3(this_1.w2(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.f3(g.b3().c3(6)).f3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$10 = -1;
    }
    var index_0 = tmp$ret$10;
    var tmp_0;
    if (index_0 >= 0) {
      var tmp_1 = this.dz_1[index_0];
      tmp_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp_0 = null;
    }
    return tmp_0;
  };
  protoOf(ScatterMap).q5 = function (key) {
    var tmp$ret$10;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = key == null ? null : hashCode(key);
      var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$0, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.ez_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.bz_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = tmp0[i].e3(b).g3(tmp0[i + 1 | 0].c3(64 - b | 0).f3(toLong(b).a3().d3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$5 = (new Long(16843009, 16843009)).x2(toLong(hash2));
        var x = g.h3(tmp$ret$5);
        var m = x.w2(new Long(16843009, 16843009)).f3(x.b3()).f3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (equals(this.cz_1[index], key)) {
            tmp$ret$10 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.f3(this_1.w2(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.f3(g.b3().c3(6)).f3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$10 = -1;
    }
    return tmp$ret$10 >= 0;
  };
  protoOf(ScatterMap).f2 = function (key) {
    var tmp$ret$10;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = key == null ? null : hashCode(key);
      var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$0, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.ez_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.bz_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = tmp0[i].e3(b).g3(tmp0[i + 1 | 0].c3(64 - b | 0).f3(toLong(b).a3().d3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$5 = (new Long(16843009, 16843009)).x2(toLong(hash2));
        var x = g.h3(tmp$ret$5);
        var m = x.w2(new Long(16843009, 16843009)).f3(x.b3()).f3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (equals(this.cz_1[index], key)) {
            tmp$ret$10 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.f3(this_1.w2(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.f3(g.b3().c3(6)).f3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$10 = -1;
    }
    return tmp$ret$10 >= 0;
  };
  protoOf(ScatterMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var k = this.cz_1;
    var v = this.dz_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this.bz_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.f3(this_0.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  var tmp = k[index];
                  var tmp0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp_0 = v[index];
                  var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  var tmp_1 = hash;
                  // Inline function 'kotlin.hashCode' call
                  var tmp1_elvis_lhs = tmp0 == null ? null : hashCode(tmp0);
                  var tmp_2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
                  // Inline function 'kotlin.hashCode' call
                  var tmp1_elvis_lhs_0 = value == null ? null : hashCode(value);
                  hash = tmp_1 + (tmp_2 ^ (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0)) | 0;
                }
                slot = slot.d3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return hash;
  };
  protoOf(ScatterMap).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof ScatterMap)) {
      return false;
    }
    if (!(other.j() === this.j())) {
      return false;
    }
    var o = other instanceof ScatterMap ? other : THROW_CCE();
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var k = this.cz_1;
    var v = this.dz_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this.bz_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.f3(this_0.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  var tmp = k[index];
                  var tmp0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp_0 = v[index];
                  var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  if (value == null) {
                    if (!(o.h2(tmp0) == null) || !o.f2(tmp0)) {
                      return false;
                    }
                  } else if (!equals(value, o.h2(tmp0))) {
                    return false;
                  }
                }
                slot = slot.d3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return true;
  };
  protoOf(ScatterMap).toString = function () {
    if (this.r()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().d8(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var k = this.cz_1;
    var v = this.dz_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this.bz_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.f3(this_0.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  var tmp = k[index];
                  var tmp0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp_0 = v[index];
                  var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  s.b8(tmp0 === this ? '(this)' : tmp0);
                  s.c8('=');
                  s.b8(value === this ? '(this)' : value);
                  i = i + 1 | 0;
                  if (i < this.fz_1) {
                    s.d8(_Char___init__impl__6a9atx(44)).d8(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = slot.d3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.d8(_Char___init__impl__6a9atx(125)).toString();
  };
  function mutableScatterMapOf() {
    _init_properties_ScatterMap_kt__cygxb2();
    return new MutableScatterMap();
  }
  function emptyScatterMap() {
    _init_properties_ScatterMap_kt__cygxb2();
    var tmp = get_EmptyScatterMap();
    return tmp instanceof ScatterMap ? tmp : THROW_CCE();
  }
  var properties_initialized_ScatterMap_kt_apzngg;
  function _init_properties_ScatterMap_kt__cygxb2() {
    if (!properties_initialized_ScatterMap_kt_apzngg) {
      properties_initialized_ScatterMap_kt_apzngg = true;
      // Inline function 'kotlin.longArrayOf' call
      EmptyGroup = longArrayOf([new Long(-2139062017, -2139062144), new Long(-1, -1)]);
      EmptyScatterMap = new MutableScatterMap(0);
    }
  }
  var EmptyScatterSet;
  function ScatterSet$toString$lambda(this$0) {
    return function (element) {
      var tmp;
      if (element === this$0) {
        tmp = '(this)';
      } else {
        tmp = toString(element);
      }
      return tmp;
    };
  }
  function ScatterSet() {
    this.oz_1 = get_EmptyGroup();
    this.pz_1 = get_EMPTY_OBJECTS();
    this.qz_1 = 0;
    this.rz_1 = 0;
  }
  protoOf(ScatterSet).wv = function () {
    return this.qz_1;
  };
  protoOf(ScatterSet).j = function () {
    return this.rz_1;
  };
  protoOf(ScatterSet).r = function () {
    return this.rz_1 === 0;
  };
  protoOf(ScatterSet).cy = function () {
    return !(this.rz_1 === 0);
  };
  protoOf(ScatterSet).o = function (element) {
    var tmp$ret$10;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = element == null ? null : hashCode(element);
      var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$0, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.qz_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.oz_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = tmp0[i].e3(b).g3(tmp0[i + 1 | 0].c3(64 - b | 0).f3(toLong(b).a3().d3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$5 = (new Long(16843009, 16843009)).x2(toLong(hash2));
        var x = g.h3(tmp$ret$5);
        var m = x.w2(new Long(16843009, 16843009)).f3(x.b3()).f3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (equals(this.pz_1[index], element)) {
            tmp$ret$10 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.f3(this_1.w2(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.f3(g.b3().c3(6)).f3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$10 = -1;
    }
    return tmp$ret$10 >= 0;
  };
  protoOf(ScatterSet).dy = function (separator, prefix, postfix, limit, truncated, transform) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    $l$block: {
      this_0.f(prefix);
      var index = 0;
      // Inline function 'androidx.collection.ScatterSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var elements = this.pz_1;
      $l$block_0: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this.oz_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            if (!this_1.f3(this_1.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                    var index_0 = (i << 3) + j | 0;
                    var tmp = elements[index_0];
                    var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                    if (index === limit) {
                      this_0.f(truncated);
                      break $l$block;
                    }
                    if (!(index === 0)) {
                      this_0.f(separator);
                    }
                    if (transform == null) {
                      this_0.b8(element);
                    } else {
                      this_0.f(transform(element));
                    }
                    index = index + 1 | 0;
                  }
                  slot = slot.d3(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block_0;
              }
            }
          }
           while (!(i === lastIndex));
      }
      this_0.f(postfix);
    }
    return this_0.toString();
  };
  protoOf(ScatterSet).sz = function (separator, prefix, postfix, limit, truncated, transform, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return $super === VOID ? this.dy(separator, prefix, postfix, limit, truncated, transform) : $super.dy.call(this, separator, prefix, postfix, limit, truncated, transform);
  };
  protoOf(ScatterSet).hashCode = function () {
    var hash = this.qz_1;
    hash = imul(31, hash) + this.rz_1 | 0;
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var elements = this.pz_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.oz_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.f3(this_0.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  var tmp = elements[index];
                  var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  if (!equals(element, this)) {
                    var tmp_0 = hash;
                    // Inline function 'kotlin.hashCode' call
                    var tmp1_elvis_lhs = element == null ? null : hashCode(element);
                    hash = tmp_0 + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
                  }
                }
                slot = slot.d3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return hash;
  };
  protoOf(ScatterSet).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof ScatterSet)) {
      return false;
    }
    if (!(other.j() === this.j())) {
      return false;
    }
    var o = other instanceof ScatterSet ? other : THROW_CCE();
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var elements = this.pz_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.oz_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.f3(this_0.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  var tmp = elements[index];
                  var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  if (!o.o(element)) {
                    return false;
                  }
                }
                slot = slot.d3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return true;
  };
  protoOf(ScatterSet).toString = function () {
    return this.sz(VOID, '[', ']', VOID, VOID, ScatterSet$toString$lambda(this));
  };
  protoOf(ScatterSet).tz = function () {
    return new SetWrapper(this);
  };
  function initializeStorage_4($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.qz_1 = newCapacity;
    initializeMetadata_4($this, newCapacity);
    var tmp_0 = $this;
    var tmp_1;
    if (newCapacity === 0) {
      tmp_1 = get_EMPTY_OBJECTS();
    } else {
      // Inline function 'kotlin.arrayOfNulls' call
      tmp_1 = Array(newCapacity);
    }
    tmp_0.pz_1 = tmp_1;
  }
  function initializeMetadata_4($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.oz_1 = tmp_0;
    var tmp0 = $this.oz_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp0[i] = tmp0[i].f3((new Long(255, 0)).c3(b).b3()).g3(value.c3(b));
    initializeGrowth_4($this);
  }
  function initializeGrowth_4($this) {
    $this.yz_1 = loadedCapacity($this.wv()) - $this.rz_1 | 0;
  }
  function findAbsoluteInsertIndex_1($this, element) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = element == null ? null : hashCode(element);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$0, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.qz_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp0 = $this.oz_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp0[i].e3(b).g3(tmp0[i + 1 | 0].c3(64 - b | 0).f3(toLong(b).a3().d3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$5 = (new Long(16843009, 16843009)).x2(toLong(hash2));
      var x = g.h3(tmp$ret$5);
      var m = x.w2(new Long(16843009, 16843009)).f3(x.b3()).f3(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if (equals($this.pz_1[index], element)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.f3(this_1.w2(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.f3(g.b3().c3(6)).f3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_4($this, hash1);
    var tmp_0;
    if ($this.yz_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !$this.oz_1[offset_0 >> 3].d3((offset_0 & 7) << 3).f3(new Long(255, 0)).equals(new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      $this.xv();
      index_0 = findFirstAvailableSlot_4($this, hash1);
    }
    $this.rz_1 = $this.rz_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.yz_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if ($this.oz_1[offset_1 >> 3].d3((offset_1 & 7) << 3).f3(new Long(255, 0)).equals(new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.yz_1 = tmp_2 - tmp_3 | 0;
    var tmp0_0 = $this.oz_1;
    var tmp2 = $this.qz_1;
    var tmp4 = index_0;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = toLong(hash2);
    var i_0 = tmp4 >> 3;
    var b_0 = (tmp4 & 7) << 3;
    tmp0_0[i_0] = tmp0_0[i_0].f3((new Long(255, 0)).c3(b_0).b3()).g3(value.c3(b_0));
    var cloneIndex = ((tmp4 - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0_0[cloneIndex >> 3] = tmp0_0[tmp4 >> 3];
    return index_0;
  }
  function findFirstAvailableSlot_4($this, hash1) {
    var probeMask = $this.qz_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.oz_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp0[i].e3(b).g3(tmp0[i + 1 | 0].c3(64 - b | 0).f3(toLong(b).a3().d3(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.f3(g.b3().c3(7)).f3(new Long(-2139062144, -2139062144));
      if (!m.equals(new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function MutableScatterSet(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    ScatterSet.call(this);
    this.yz_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      var tmp$ret$1 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$1);
    }
    initializeStorage_4(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableScatterSet).e = function (element) {
    var oldSize = this.j();
    var index = findAbsoluteInsertIndex_1(this, element);
    this.pz_1[index] = element;
    return !(this.j() === oldSize);
  };
  protoOf(MutableScatterSet).zz = function (element) {
    var index = findAbsoluteInsertIndex_1(this, element);
    this.pz_1[index] = element;
  };
  protoOf(MutableScatterSet).qy = function (elements) {
    var oldSize = this.j();
    this.yy(elements);
    return !(oldSize === this.j());
  };
  protoOf(MutableScatterSet).a10 = function (elements) {
    var oldSize = this.j();
    this.b10(elements);
    return !(oldSize === this.j());
  };
  protoOf(MutableScatterSet).yy = function (elements) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = elements.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      this.zz(element);
    }
  };
  protoOf(MutableScatterSet).b10 = function (elements) {
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var elements_0 = elements.pz_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = elements.oz_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.f3(this_0.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  var tmp = elements_0[index];
                  var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  this.zz(element);
                }
                slot = slot.d3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
  };
  protoOf(MutableScatterSet).v1 = function (element) {
    var tmp$ret$10;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = element == null ? null : hashCode(element);
      var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$0, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.qz_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.oz_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = tmp0[i].e3(b).g3(tmp0[i + 1 | 0].c3(64 - b | 0).f3(toLong(b).a3().d3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$5 = (new Long(16843009, 16843009)).x2(toLong(hash2));
        var x = g.h3(tmp$ret$5);
        var m = x.w2(new Long(16843009, 16843009)).f3(x.b3()).f3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (equals(this.pz_1[index], element)) {
            tmp$ret$10 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.f3(this_1.w2(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.f3(g.b3().c3(6)).f3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$10 = -1;
    }
    var index_0 = tmp$ret$10;
    var exists = index_0 >= 0;
    if (exists) {
      this.c10(index_0);
    }
    return exists;
  };
  protoOf(MutableScatterSet).d10 = function (element) {
    var tmp$ret$10;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = element == null ? null : hashCode(element);
      var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$0, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.qz_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.oz_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = tmp0[i].e3(b).g3(tmp0[i + 1 | 0].c3(64 - b | 0).f3(toLong(b).a3().d3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$5 = (new Long(16843009, 16843009)).x2(toLong(hash2));
        var x = g.h3(tmp$ret$5);
        var m = x.w2(new Long(16843009, 16843009)).f3(x.b3()).f3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (equals(this.pz_1[index], element)) {
            tmp$ret$10 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.f3(this_1.w2(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.f3(g.b3().c3(6)).f3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$10 = -1;
    }
    var index_0 = tmp$ret$10;
    if (index_0 >= 0) {
      this.c10(index_0);
    }
  };
  protoOf(MutableScatterSet).ty = function (elements) {
    var oldSize = this.j();
    this.zy(elements);
    return !(oldSize === this.j());
  };
  protoOf(MutableScatterSet).zy = function (elements) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = elements.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      this.d10(element);
    }
  };
  protoOf(MutableScatterSet).c10 = function (index) {
    this.rz_1 = this.rz_1 - 1 | 0;
    var tmp0 = this.oz_1;
    var tmp2 = this.qz_1;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(254, 0);
    var i = index >> 3;
    var b = (index & 7) << 3;
    tmp0[i] = tmp0[i].f3((new Long(255, 0)).c3(b).b3()).g3(value.c3(b));
    var cloneIndex = ((index - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0[cloneIndex >> 3] = tmp0[index >> 3];
    this.pz_1[index] = null;
  };
  protoOf(MutableScatterSet).y1 = function () {
    this.rz_1 = 0;
    if (!(this.oz_1 === get_EmptyGroup())) {
      fill(this.oz_1, new Long(-2139062144, -2139062144));
      var tmp0 = this.oz_1;
      var tmp2 = this.qz_1;
      // Inline function 'androidx.collection.writeRawMetadata' call
      var value = new Long(255, 0);
      var i = tmp2 >> 3;
      var b = (tmp2 & 7) << 3;
      tmp0[i] = tmp0[i].f3((new Long(255, 0)).c3(b).b3()).g3(value.c3(b));
    }
    fill_0(this.pz_1, null, 0, this.qz_1);
    initializeGrowth_4(this);
  };
  protoOf(MutableScatterSet).xv = function () {
    var tmp;
    if (this.qz_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = this.rz_1;
      var tmp0 = _ULong___init__impl__c78o9k(toLong(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp0_0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0).x2(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = this.qz_1;
      var tmp0_1 = _ULong___init__impl__c78o9k(toLong(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_1).x2(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp0_0), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.aw();
    } else {
      this.zv(nextCapacity(this.qz_1));
    }
  };
  protoOf(MutableScatterSet).aw = function () {
    var metadata = this.oz_1;
    var capacity = this.qz_1;
    var elements = this.pz_1;
    // Inline function 'androidx.collection.convertMetadataForCleanup' call
    var end = (capacity + 7 | 0) >> 3;
    var inductionVariable = 0;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var maskedGroup = metadata[i].f3(new Long(-2139062144, -2139062144));
        metadata[i] = maskedGroup.b3().v2(maskedGroup.e3(7)).f3(new Long(-16843010, -16843010));
      }
       while (inductionVariable < end);
    var lastIndex = get_lastIndex(metadata);
    metadata[lastIndex - 1 | 0] = (new Long(0, -16777216)).g3(metadata[lastIndex - 1 | 0].f3(new Long(-1, 16777215)));
    metadata[lastIndex] = metadata[0];
    var index = 0;
    $l$loop_1: while (!(index === capacity)) {
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset = index;
      var m = metadata[offset >> 3].d3((offset & 7) << 3).f3(new Long(255, 0));
      if (m.equals(new Long(128, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      if (!m.equals(new Long(254, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = elements[index];
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      var tmp$ret$2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$2, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h1' call
      var hash1 = hash_0 >>> 7 | 0;
      var targetIndex = findFirstAvailableSlot_4(this, hash1);
      var probeOffset = hash1 & capacity;
      var newProbeIndex = ((targetIndex - probeOffset | 0) & capacity) / 8 | 0;
      var oldProbeIndex = ((index - probeOffset | 0) & capacity) / 8 | 0;
      if (newProbeIndex === oldProbeIndex) {
        // Inline function 'androidx.collection.h2' call
        var hash2 = hash_0 & 127;
        var tmp2 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value = toLong(hash2);
        var i_0 = tmp2 >> 3;
        var b = (tmp2 & 7) << 3;
        metadata[i_0] = metadata[i_0].f3((new Long(255, 0)).c3(b).b3()).g3(value.c3(b));
        metadata[get_lastIndex(metadata)] = (new Long(0, -2147483648)).g3(metadata[0].f3(new Long(-1, 16777215)));
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.readRawMetadata' call
      m = metadata[targetIndex >> 3].d3((targetIndex & 7) << 3).f3(new Long(255, 0));
      if (m.equals(new Long(128, 0))) {
        // Inline function 'androidx.collection.h2' call
        var hash2_0 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_0 = toLong(hash2_0);
        var i_1 = targetIndex >> 3;
        var b_0 = (targetIndex & 7) << 3;
        metadata[i_1] = metadata[i_1].f3((new Long(255, 0)).c3(b_0).b3()).g3(value_0.c3(b_0));
        var tmp2_0 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_1 = new Long(128, 0);
        var i_2 = tmp2_0 >> 3;
        var b_1 = (tmp2_0 & 7) << 3;
        metadata[i_2] = metadata[i_2].f3((new Long(255, 0)).c3(b_1).b3()).g3(value_1.c3(b_1));
        elements[targetIndex] = elements[index];
        elements[index] = null;
      } else {
        // Inline function 'androidx.collection.h2' call
        var hash2_1 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_2 = toLong(hash2_1);
        var i_3 = targetIndex >> 3;
        var b_2 = (targetIndex & 7) << 3;
        metadata[i_3] = metadata[i_3].f3((new Long(255, 0)).c3(b_2).b3()).g3(value_2.c3(b_2));
        var oldElement = elements[targetIndex];
        elements[targetIndex] = elements[index];
        elements[index] = oldElement;
        index = index - 1 | 0;
      }
      metadata[get_lastIndex(metadata)] = (new Long(0, -2147483648)).g3(metadata[0].f3(new Long(-1, 16777215)));
      index = index + 1 | 0;
    }
    initializeGrowth_4(this);
  };
  protoOf(MutableScatterSet).zv = function (newCapacity) {
    var previousMetadata = this.oz_1;
    var previousElements = this.pz_1;
    var previousCapacity = this.qz_1;
    initializeStorage_4(this, newCapacity);
    var newMetadata = this.oz_1;
    var newElements = this.pz_1;
    var capacity = this.qz_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].d3((i & 7) << 3).f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
          var previousElement = previousElements[i];
          // Inline function 'androidx.collection.hash' call
          // Inline function 'kotlin.hashCode' call
          var tmp1_elvis_lhs = previousElement == null ? null : hashCode(previousElement);
          var tmp$ret$2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
          var hash = imul(tmp$ret$2, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$4 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_4(this, tmp$ret$4);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$5 = hash_0 & 127;
          // Inline function 'androidx.collection.writeMetadata' call
          // Inline function 'androidx.collection.writeRawMetadata' call
          var value = toLong(tmp$ret$5);
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          newMetadata[i_0] = newMetadata[i_0].f3((new Long(255, 0)).c3(b).b3()).g3(value.c3(b));
          var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
          newMetadata[cloneIndex >> 3] = newMetadata[index >> 3];
          newElements[index] = previousElement;
        }
      }
       while (inductionVariable < previousCapacity);
  };
  protoOf(MutableScatterSet).e10 = function () {
    return new MutableSetWrapper(this);
  };
  function SetWrapper$iterator$slambda(this$0, resultContinuation) {
    this.n10_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SetWrapper$iterator$slambda).i11 = function ($this$iterator, $completion) {
    var tmp = this.j11($this$iterator, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(SetWrapper$iterator$slambda).p9 = function (p1, $completion) {
    return this.i11(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SetWrapper$iterator$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 11;
            var tmp_0 = this;
            tmp_0.p10_1 = this.n10_1.k11_1;
            this.q10_1 = this.p10_1;
            this.r10_1 = this.q10_1.pz_1;
            var tmp_1 = this;
            tmp_1.s10_1 = this.q10_1;
            this.v8_1 = 1;
            continue $sm;
          case 1:
            this.u10_1 = this.s10_1;
            this.v10_1 = this.u10_1.oz_1;
            this.w10_1 = this.v10_1.length - 2 | 0;
            this.x10_1 = numberRangeToNumber(0, this.w10_1).g();
            this.v8_1 = 2;
            continue $sm;
          case 2:
            if (!this.x10_1.h()) {
              this.v8_1 = 9;
              continue $sm;
            }

            this.y10_1 = this.x10_1.i();
            this.z10_1 = this.v10_1[this.y10_1];
            var this_0 = this.z10_1;
            if (!this_0.f3(this_0.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              this.a11_1 = 8 - (~(this.y10_1 - this.w10_1 | 0) >>> 31 | 0) | 0;
              this.b11_1 = until(0, this.a11_1).g();
              this.v8_1 = 3;
              continue $sm;
            } else {
              this.v8_1 = 8;
              continue $sm;
            }

          case 3:
            if (!this.b11_1.h()) {
              this.v8_1 = 6;
              continue $sm;
            }

            this.c11_1 = this.b11_1.i();
            if (this.z10_1.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
              this.d11_1 = (this.y10_1 << 3) + this.c11_1 | 0;
              var tmp_2 = this;
              tmp_2.e11_1 = this.d11_1;
              this.f11_1 = this.e11_1;
              var tmp_3 = this;
              var tmp_4 = this.r10_1[this.f11_1];
              tmp_3.g11_1 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
              this.h11_1 = this.g11_1;
              this.v8_1 = 4;
              suspendResult = this.o10_1.gf(this.h11_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.v8_1 = 5;
              continue $sm;
            }

          case 4:
            this.v8_1 = 5;
            continue $sm;
          case 5:
            this.z10_1 = this.z10_1.d3(8);
            this.v8_1 = 3;
            continue $sm;
          case 6:
            if (!(this.a11_1 === 8)) {
              this.t10_1 = Unit_instance;
              this.v8_1 = 10;
              continue $sm;
            } else {
              this.v8_1 = 7;
              continue $sm;
            }

          case 7:
            this.v8_1 = 8;
            continue $sm;
          case 8:
            this.v8_1 = 2;
            continue $sm;
          case 9:
            this.t10_1 = Unit_instance;
            if (false) {
              this.v8_1 = 1;
              continue $sm;
            }

            this.v8_1 = 10;
            continue $sm;
          case 10:
            return Unit_instance;
          case 11:
            throw this.y8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.w8_1 === 11) {
          throw e;
        } else {
          this.v8_1 = this.w8_1;
          this.y8_1 = e;
        }
      }
     while (true);
  };
  protoOf(SetWrapper$iterator$slambda).j11 = function ($this$iterator, completion) {
    var i = new SetWrapper$iterator$slambda(this.n10_1, completion);
    i.o10_1 = $this$iterator;
    return i;
  };
  function SetWrapper$iterator$slambda_0(this$0, resultContinuation) {
    var i = new SetWrapper$iterator$slambda(this$0, resultContinuation);
    var l = function ($this$iterator, $completion) {
      return i.i11($this$iterator, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SetWrapper(parent) {
    this.k11_1 = parent;
  }
  protoOf(SetWrapper).j = function () {
    return this.k11_1.rz_1;
  };
  protoOf(SetWrapper).u1 = function (elements) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = elements.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      if (!this.k11_1.o(element)) {
        return false;
      }
    }
    return true;
  };
  protoOf(SetWrapper).o = function (element) {
    return this.k11_1.o(element);
  };
  protoOf(SetWrapper).r = function () {
    return this.k11_1.r();
  };
  protoOf(SetWrapper).g = function () {
    return iterator(SetWrapper$iterator$slambda_0(this, null));
  };
  protoOf(SetWrapper).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof SetWrapper))
      THROW_CCE();
    return this.k11_1.equals(other.k11_1);
  };
  protoOf(SetWrapper).hashCode = function () {
    return this.k11_1.hashCode();
  };
  protoOf(SetWrapper).toString = function () {
    return this.k11_1.toString();
  };
  function MutableSetWrapper$iterator$o$iterator$slambda(this$0, this$1, resultContinuation) {
    this.t11_1 = this$0;
    this.u11_1 = this$1;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MutableSetWrapper$iterator$o$iterator$slambda).i11 = function ($this$iterator, $completion) {
    var tmp = this.j11($this$iterator, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(MutableSetWrapper$iterator$o$iterator$slambda).p9 = function (p1, $completion) {
    return this.i11(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MutableSetWrapper$iterator$o$iterator$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 11;
            var tmp_0 = this;
            tmp_0.w11_1 = this.t11_1.l12_1;
            this.v8_1 = 1;
            continue $sm;
          case 1:
            this.y11_1 = this.w11_1;
            this.z11_1 = this.y11_1.oz_1;
            this.a12_1 = this.z11_1.length - 2 | 0;
            this.b12_1 = numberRangeToNumber(0, this.a12_1).g();
            this.v8_1 = 2;
            continue $sm;
          case 2:
            if (!this.b12_1.h()) {
              this.v8_1 = 9;
              continue $sm;
            }

            this.c12_1 = this.b12_1.i();
            this.d12_1 = this.z11_1[this.c12_1];
            var this_0 = this.d12_1;
            if (!this_0.f3(this_0.b3().c3(7)).f3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              this.e12_1 = 8 - (~(this.c12_1 - this.a12_1 | 0) >>> 31 | 0) | 0;
              this.f12_1 = until(0, this.e12_1).g();
              this.v8_1 = 3;
              continue $sm;
            } else {
              this.v8_1 = 8;
              continue $sm;
            }

          case 3:
            if (!this.f12_1.h()) {
              this.v8_1 = 6;
              continue $sm;
            }

            this.g12_1 = this.f12_1.i();
            if (this.d12_1.f3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
              this.h12_1 = (this.c12_1 << 3) + this.g12_1 | 0;
              var tmp_1 = this;
              tmp_1.i12_1 = this.h12_1;
              this.j12_1 = this.i12_1;
              this.u11_1.m12_1 = this.j12_1;
              this.v8_1 = 4;
              var tmp_2 = this.t11_1.l12_1.pz_1[this.j12_1];
              suspendResult = this.v11_1.gf((tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.v8_1 = 5;
              continue $sm;
            }

          case 4:
            this.v8_1 = 5;
            continue $sm;
          case 5:
            this.d12_1 = this.d12_1.d3(8);
            this.v8_1 = 3;
            continue $sm;
          case 6:
            if (!(this.e12_1 === 8)) {
              this.x11_1 = Unit_instance;
              this.v8_1 = 10;
              continue $sm;
            } else {
              this.v8_1 = 7;
              continue $sm;
            }

          case 7:
            this.v8_1 = 8;
            continue $sm;
          case 8:
            this.v8_1 = 2;
            continue $sm;
          case 9:
            this.x11_1 = Unit_instance;
            if (false) {
              this.v8_1 = 1;
              continue $sm;
            }

            this.v8_1 = 10;
            continue $sm;
          case 10:
            return Unit_instance;
          case 11:
            throw this.y8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.w8_1 === 11) {
          throw e;
        } else {
          this.v8_1 = this.w8_1;
          this.y8_1 = e;
        }
      }
     while (true);
  };
  protoOf(MutableSetWrapper$iterator$o$iterator$slambda).j11 = function ($this$iterator, completion) {
    var i = new MutableSetWrapper$iterator$o$iterator$slambda(this.t11_1, this.u11_1, completion);
    i.v11_1 = $this$iterator;
    return i;
  };
  function MutableSetWrapper$iterator$o$iterator$slambda_0(this$0, this$1, resultContinuation) {
    var i = new MutableSetWrapper$iterator$o$iterator$slambda(this$0, this$1, resultContinuation);
    var l = function ($this$iterator, $completion) {
      return i.i11($this$iterator, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MutableSetWrapper$iterator$1(this$0) {
    this.o12_1 = this$0;
    this.m12_1 = -1;
    var tmp = this;
    tmp.n12_1 = iterator(MutableSetWrapper$iterator$o$iterator$slambda_0(this$0, this, null));
  }
  protoOf(MutableSetWrapper$iterator$1).h = function () {
    return this.n12_1.h();
  };
  protoOf(MutableSetWrapper$iterator$1).i = function () {
    return this.n12_1.i();
  };
  protoOf(MutableSetWrapper$iterator$1).a4 = function () {
    if (!(this.m12_1 === -1)) {
      this.o12_1.l12_1.c10(this.m12_1);
      this.m12_1 = -1;
    }
  };
  function MutableSetWrapper(parent) {
    SetWrapper.call(this, parent);
    this.l12_1 = parent;
  }
  protoOf(MutableSetWrapper).e = function (element) {
    return this.l12_1.e(element);
  };
  protoOf(MutableSetWrapper).n = function (elements) {
    return this.l12_1.qy(elements);
  };
  protoOf(MutableSetWrapper).g = function () {
    return new MutableSetWrapper$iterator$1(this);
  };
  protoOf(MutableSetWrapper).v1 = function (element) {
    return this.l12_1.v1(element);
  };
  protoOf(MutableSetWrapper).x1 = function (elements) {
    return this.l12_1.ty(elements);
  };
  function mutableScatterSetOf() {
    _init_properties_ScatterSet_kt__vy48mc();
    return new MutableScatterSet();
  }
  function mutableScatterSetOf_0(element1, element2) {
    _init_properties_ScatterSet_kt__vy48mc();
    // Inline function 'kotlin.apply' call
    var this_0 = new MutableScatterSet(2);
    this_0.zz(element1);
    this_0.zz(element2);
    return this_0;
  }
  var properties_initialized_ScatterSet_kt_dmj456;
  function _init_properties_ScatterSet_kt__vy48mc() {
    if (!properties_initialized_ScatterSet_kt_dmj456) {
      properties_initialized_ScatterSet_kt_dmj456 = true;
      EmptyScatterSet = new MutableScatterSet(0);
    }
  }
  var EMPTY_INTS;
  var EMPTY_LONGS;
  function get_EMPTY_OBJECTS() {
    _init_properties_ContainerHelpers_kt__6fon4s();
    return EMPTY_OBJECTS;
  }
  var EMPTY_OBJECTS;
  var properties_initialized_ContainerHelpers_kt_9fe6be;
  function _init_properties_ContainerHelpers_kt__6fon4s() {
    if (!properties_initialized_ContainerHelpers_kt_9fe6be) {
      properties_initialized_ContainerHelpers_kt_9fe6be = true;
      EMPTY_INTS = new Int32Array(0);
      EMPTY_LONGS = longArray(0);
      // Inline function 'kotlin.arrayOfNulls' call
      EMPTY_OBJECTS = Array(0);
    }
  }
  function throwNoSuchElementException(message) {
    throw NoSuchElementException_init_$Create$(message);
  }
  function throwIndexOutOfBoundsException(message) {
    throw IndexOutOfBoundsException_init_$Create$(message);
  }
  function throwIllegalArgumentException(message) {
    throw IllegalArgumentException_init_$Create$(message);
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = MutableDoubleList;
  _.$_$.b = MutableIntIntMap;
  _.$_$.c = MutableIntList;
  _.$_$.d = MutableIntObjectMap;
  _.$_$.e = MutableIntSet;
  _.$_$.f = MutableObjectIntMap;
  _.$_$.g = MutableObjectList;
  _.$_$.h = MutableScatterMap;
  _.$_$.i = MutableScatterSet;
  _.$_$.j = ObjectList;
  _.$_$.k = ScatterSet;
  _.$_$.l = emptyObjectList;
  _.$_$.m = emptyScatterMap;
  _.$_$.n = mutableObjectListOf;
  _.$_$.o = mutableScatterMapOf;
  _.$_$.p = mutableScatterSetOf_0;
  _.$_$.q = mutableScatterSetOf;
  _.$_$.r = objectListOf;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-collection-collection.js.map
