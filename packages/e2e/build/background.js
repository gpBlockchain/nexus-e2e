/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../lumos/packages/bi/lib/index.js":
/*!********************************************!*\
  !*** ../../lumos/packages/bi/lib/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ckbDecimals = exports.BI = void 0;
exports.formatUnit = formatUnit;
exports.isBIish = isBIish;
exports.parseUnit = parseUnit;
exports.toJSBI = toJSBI;
var _jsbi = _interopRequireDefault(__webpack_require__(/*! jsbi */ "../../node_modules/jsbi/dist/jsbi-umd.js"));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
function isBIish(value) {
  return value !== null && (typeof value === "number" && value % 1 === 0 || typeof value === "string" && (!!value.match(/^0x(0|[0-9a-fA-F]+)$/) || !!value.match(/^-?[0-9]+$/)) || typeof value === "bigint" || BI.isBI(value));
}
var BI = /*#__PURE__*/function () {
  function BI(value) {
    _classCallCheck(this, BI);
    this.jsbi = value;
    this._isBI = true;
  }
  _createClass(BI, [{
    key: "add",
    value: function add(other) {
      return toBI(_jsbi["default"].add(this.jsbi, toJSBI(other)));
    }
  }, {
    key: "sub",
    value: function sub(other) {
      return toBI(_jsbi["default"].subtract(this.jsbi, toJSBI(other)));
    }
  }, {
    key: "div",
    value: function div(other) {
      return toBI(_jsbi["default"].divide(this.jsbi, toJSBI(other)));
    }
  }, {
    key: "mul",
    value: function mul(other) {
      return toBI(_jsbi["default"].multiply(this.jsbi, toJSBI(other)));
    }
  }, {
    key: "mod",
    value: function mod(other) {
      return toBI(_jsbi["default"].remainder(this.jsbi, toJSBI(other)));
    }
  }, {
    key: "abs",
    value: function abs() {
      if (_jsbi["default"].greaterThanOrEqual(this.jsbi, toJSBI(0))) {
        return toBI(this.jsbi);
      } else {
        return toBI(_jsbi["default"].unaryMinus(this.jsbi));
      }
    }
  }, {
    key: "pow",
    value: function pow(other) {
      return toBI(_jsbi["default"].exponentiate(this.jsbi, toJSBI(other)));
    }
  }, {
    key: "and",
    value: function and(other) {
      return toBI(_jsbi["default"].bitwiseAnd(this.jsbi, toJSBI(other)));
    }
  }, {
    key: "or",
    value: function or(other) {
      return toBI(_jsbi["default"].bitwiseOr(this.jsbi, toJSBI(other)));
    }
  }, {
    key: "xor",
    value: function xor(other) {
      return toBI(_jsbi["default"].bitwiseXor(this.jsbi, toJSBI(other)));
    }
  }, {
    key: "not",
    value: function not() {
      return toBI(_jsbi["default"].bitwiseNot(this.jsbi));
    }
  }, {
    key: "mask",
    value: function mask(other) {
      var jsbiOther = toJSBI(other);
      if (_jsbi["default"].lessThan(jsbiOther, toJSBI(0)) || _jsbi["default"].lessThan(this.jsbi, toJSBI(0))) {
        throw new Error("mask works only with positive numbers");
      }
      var length = toJSBI(this.jsbi.toString(2).length);
      if (_jsbi["default"].lessThanOrEqual(length, jsbiOther)) {
        return toBI(this.jsbi);
      } else {
        var maskNum = _jsbi["default"].leftShift(_jsbi["default"].signedRightShift(this.jsbi, jsbiOther), jsbiOther);
        return toBI(_jsbi["default"].bitwiseXor(this.jsbi, maskNum));
      }
    }
  }, {
    key: "shl",
    value: function shl(other) {
      return toBI(_jsbi["default"].leftShift(this.jsbi, toJSBI(other)));
    }
  }, {
    key: "shr",
    value: function shr(other) {
      return toBI(_jsbi["default"].signedRightShift(this.jsbi, toJSBI(other)));
    }
  }, {
    key: "eq",
    value: function eq(other) {
      return _jsbi["default"].equal(this.jsbi, toJSBI(other));
    }
  }, {
    key: "lt",
    value: function lt(other) {
      return _jsbi["default"].lessThan(this.jsbi, toJSBI(other));
    }
  }, {
    key: "lte",
    value: function lte(other) {
      return _jsbi["default"].lessThanOrEqual(this.jsbi, toJSBI(other));
    }
  }, {
    key: "gt",
    value: function gt(other) {
      return _jsbi["default"].greaterThan(this.jsbi, toJSBI(other));
    }
  }, {
    key: "gte",
    value: function gte(other) {
      return _jsbi["default"].greaterThanOrEqual(this.jsbi, toJSBI(other));
    }
  }, {
    key: "isNegative",
    value: function isNegative() {
      return _jsbi["default"].lessThan(this.jsbi, toJSBI(0));
    }
  }, {
    key: "isZero",
    value: function isZero() {
      return _jsbi["default"].equal(this.jsbi, toJSBI(0));
    }
  }, {
    key: "toNumber",
    value: function toNumber() {
      return _jsbi["default"].toNumber(this.jsbi);
    }
  }, {
    key: "toBigInt",
    value: function toBigInt() {
      try {
        return BigInt(this.jsbi.toString(10));
      } catch (e) {
        throw new Error("this platform does not support BigInt");
      }
    }
  }, {
    key: "toString",
    value: function toString(radix) {
      radix = radix || 10;
      return this.jsbi.toString(radix);
    }
  }, {
    key: "toHexString",
    value: function toHexString() {
      if (_jsbi["default"].lessThan(this.jsbi, toJSBI(0))) {
        return "-0x" + _jsbi["default"].unaryMinus(this.jsbi).toString(16);
      } else {
        return "0x" + this.jsbi.toString(16);
      }
    }
  }], [{
    key: "from",
    value: function from(value) {
      if (value instanceof BI) {
        return value;
      } else if (isBIish(value)) {
        return toBI(toJSBI(value));
      } else if (value instanceof _jsbi["default"]) {
        return toBI(toJSBI(value.toString()));
      } else {
        throw new Error("invalid type: ".concat(value, " can't be converted into BI"));
      }
    }
  }, {
    key: "isBI",
    value: function isBI(value) {
      return isBILike(value) && !!value._isBI;
    }
  }]);
  return BI;
}();
exports.BI = BI;
function isBILike(value) {
  if (value == null) return false;
  return _typeof(value) === "object";
}
function toBI(value) {
  return new BI(value);
}
function toJSBI(value) {
  if (typeof value === "number" || typeof value === "string") {
    return _jsbi["default"].BigInt(value);
  } else {
    return _jsbi["default"].BigInt(value.toString());
  }
}
var validUnitNames = ["shannon", "ckb"];
var ckbDecimals = 8;
exports.ckbDecimals = ckbDecimals;
var negativeOne = BI.from(-1);
function formatUnit(value, unit) {
  var decimals = parseDecimals(unit);
  return formatFixed(value, decimals);
}
function parseUnit(value, unit) {
  var decimals = parseDecimals(unit);
  return parseFixed(value, decimals);
}
function formatFixed(value, decimals) {
  if (!isValidDecimalSize(decimals)) {
    throw new Error("decimal size must be a non-negative integer");
  }
  var multiplier = "1" + Array(decimals).fill("0").join("");
  value = BI.from(value);
  var isNegative = value.isNegative();
  if (isNegative) {
    value = value.mul(negativeOne);
  }
  var wholePart = value.div(multiplier).toString();
  var result = wholePart;
  if (multiplier.length > 1) {
    var decimalPart = value.mod(multiplier).toString();
    while (decimalPart.length < multiplier.length - 1) {
      decimalPart = "0" + decimalPart;
    }
    // remove trailing zeros
    decimalPart = decimalPart.match(/^([0-9]*[1-9]|0)(0*)/)[1];
    result += "." + decimalPart;
  }
  if (isNegative) {
    result = "-" + result;
  }
  return result;
}
function parseFixed(value, decimals) {
  if (!isValidDecimalSize(decimals)) {
    throw new Error("decimal size must be a non-negative integer");
  }

  // check if value represents a valid decimal number
  if (!value.match(/^-?\d+(\.\d{1,})?$/)) {
    throw new Error("invalid decimal string");
  }
  var multiplier = "1" + Array(decimals).fill("0").join("");
  var isNegative = value.substring(0, 1) === "-";
  if (isNegative) {
    value = value.substring(1);
  }
  var wholePart, decimalPart;
  var valueParts = value.split(".");
  if (valueParts.length === 1) {
    wholePart = valueParts[0];
    decimalPart = "0";
  } else if (valueParts.length === 2) {
    wholePart = valueParts[0];
    decimalPart = valueParts[1];
  } else {
    throw new Error("too many decimal points (should not happen)");
  }

  // remove leading zeros of whole part
  while (wholePart.length > 0 && wholePart[0] === "0") {
    wholePart = wholePart.substring(1);
  }
  if (wholePart === "") {
    wholePart = "0";
  }

  // remove trailing zeros of decimal part
  while (decimalPart.length > 0 && decimalPart[decimalPart.length - 1] === "0") {
    decimalPart = decimalPart.substring(0, decimalPart.length - 1);
  }
  if (decimalPart.length > multiplier.length - 1) {
    throw new Error("decimal part exceeds max decimals");
  }
  if (decimalPart === "") {
    decimalPart = "0";
  }

  // pad decimal part with zeros to get to shannon
  while (decimalPart.length < multiplier.length - 1) {
    decimalPart += "0";
  }
  var wholeValue = BI.from(wholePart);
  var decimalValue = BI.from(decimalPart);
  var shannons = wholeValue.mul(multiplier).add(decimalValue);
  if (isNegative) {
    shannons = shannons.mul(negativeOne);
  }
  return shannons;
}
function parseDecimals(unit) {
  var decimals = 0;
  if (typeof unit === "string") {
    if (validUnitNames.indexOf(unit) === -1) {
      throw new Error("invalid unit name, supported names are ".concat(validUnitNames.join(", ")));
    }
    if (unit === "ckb") {
      decimals = ckbDecimals;
    }
  } else {
    if (isValidDecimalSize(unit)) {
      decimals = unit;
    } else {
      throw new Error("unit of integer must be a non-negative integer");
    }
  }
  return decimals;
}
function isValidDecimalSize(decimals) {
  return Number.isInteger(decimals) && decimals >= 0;
}

/***/ }),

/***/ "../../lumos/packages/codec/lib/base.js":
/*!**********************************************!*\
  !*** ../../lumos/packages/codec/lib/base.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createBytesCodec = createBytesCodec;
exports.createFixedBytesCodec = createFixedBytesCodec;
exports.isFixedCodec = isFixedCodec;
var _utils = __webpack_require__(/*! ./utils */ "../../lumos/packages/codec/lib/utils.js");
var _bytes = __webpack_require__(/*! ./bytes */ "../../lumos/packages/codec/lib/bytes.js");
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * This function helps to create a codec that can
 * @param codec
 */
function createBytesCodec(codec) {
  return {
    pack: function pack(unpacked) {
      return codec.pack(unpacked);
    },
    unpack: function unpack(bytesLike) {
      return codec.unpack((0, _bytes.bytify)(bytesLike));
    }
  };
}
function isFixedCodec(codec) {
  return (0, _utils.isObjectLike)(codec) && !!codec.__isFixedCodec__;
}
function createFixedBytesCodec(codec) {
  var byteLength = codec.byteLength;
  return _objectSpread({
    __isFixedCodec__: true,
    byteLength: byteLength
  }, createBytesCodec({
    pack: function pack(u) {
      var packed = codec.pack(u);
      (0, _utils.assertBufferLength)(packed, byteLength);
      return packed;
    },
    unpack: function unpack(buf) {
      (0, _utils.assertBufferLength)(buf, byteLength);
      return codec.unpack(buf);
    }
  }));
}

/***/ }),

/***/ "../../lumos/packages/codec/lib/bytes.js":
/*!***********************************************!*\
  !*** ../../lumos/packages/codec/lib/bytes.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.bytify = bytify;
exports.bytifyRawString = bytifyRawString;
exports.concat = concat;
exports.equal = equal;
exports.hexify = hexify;
var _utils = __webpack_require__(/*! ./utils */ "../../lumos/packages/codec/lib/utils.js");
function bytifyRawString(rawString) {
  (0, _utils.assertUtf8String)(rawString);
  var buffer = new ArrayBuffer(rawString.length);
  var view = new DataView(buffer);
  for (var i = 0; i < rawString.length; i++) {
    var c = rawString.charCodeAt(i);
    view.setUint8(i, c);
  }
  return new Uint8Array(buffer);
}
function bytifyHex(hex) {
  (0, _utils.assertHexString)(hex);
  hex = hex.slice(2);
  var uint8s = [];
  for (var i = 0; i < hex.length; i += 2) {
    uint8s.push(parseInt(hex.substr(i, 2), 16));
  }
  return Uint8Array.from(uint8s);
}
function bytifyArrayLike(xs) {
  var isValidU8Vec = Array.from(xs).every(function (v) {
    return v >= 0 && v <= 255;
  });
  if (!isValidU8Vec) {
    throw new Error("invalid ArrayLike, all elements must be 0-255");
  }
  return Uint8Array.from(xs);
}

/**
 * convert a {@link BytesLike} to an Uint8Array
 * @param bytesLike
 */
function bytify(bytesLike) {
  if (bytesLike instanceof ArrayBuffer) return new Uint8Array(bytesLike);
  if (bytesLike instanceof Uint8Array) return Uint8Array.from(bytesLike);
  if (typeof bytesLike === "string") return bytifyHex(bytesLike);
  if (Array.isArray(bytesLike)) return bytifyArrayLike(bytesLike);
  throw new Error("Cannot convert ".concat(bytesLike));
}
function equal(a, b) {
  var aUint8Array = bytify(a);
  var bUint8Array = bytify(b);
  return equalUint8Array(aUint8Array, bUint8Array);
}
function equalUint8Array(a, b) {
  if (a.length !== b.length) return false;
  for (var i = a.length; -1 < i; i -= 1) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
/**
 * convert a {@link BytesLike} to an even length hex string prefixed with "0x"
 * @param buf
 * @example
 * hexify([0,1,2,3]) // "0x010203"
 * hexify(Buffer.from([1, 2, 3])) // "0x010203"
 */
function hexify(buf) {
  var hex = Array.from(bytify(buf)).map(function (b) {
    return b.toString(16).padStart(2, "0");
  }).join("");
  return "0x" + hex;
}
function concat() {
  for (var _len = arguments.length, bytesLikes = new Array(_len), _key = 0; _key < _len; _key++) {
    bytesLikes[_key] = arguments[_key];
  }
  var unmerged = bytesLikes.map(bytify);
  var totalSize = unmerged.reduce(function (size, item) {
    return size + item.length;
  }, 0);
  var merged = new Uint8Array(totalSize);
  var offset = 0;
  unmerged.forEach(function (item) {
    merged.set(item, offset);
    offset += item.length;
  });
  return merged;
}

// export function split(bytes: BytesLike, points: number[]): Uint8Array[] {
//   const u8vec = bytify(bytes);
//   const result: Uint8Array[] = [];
//   let offset = 0;
//   for (const point of points) {
//     result.push(u8vec.slice(offset, offset + point));
//     offset += point;
//   }
//   result.push(u8vec.slice(offset));
//   return result;
// }

/***/ }),

/***/ "../../lumos/packages/codec/lib/error.js":
/*!***********************************************!*\
  !*** ../../lumos/packages/codec/lib/error.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CodecExecuteError = exports.CodecBaseParseError = exports.CODEC_OPTIONAL_PATH = void 0;
exports.isCodecExecuteError = isCodecExecuteError;
// lc for lumos codec
var CODEC_OPTIONAL_PATH = "__lc_option__";
exports.CODEC_OPTIONAL_PATH = CODEC_OPTIONAL_PATH;
var CodecBaseParseError = /*#__PURE__*/function (_Error) {
  _inherits(CodecBaseParseError, _Error);
  var _super = _createSuper(CodecBaseParseError);
  function CodecBaseParseError(message, expectedType) {
    var _this;
    _classCallCheck(this, CodecBaseParseError);
    _this = _super.call(this, message);
    _this.expectedType = expectedType;
    return _this;
  }
  return _createClass(CodecBaseParseError);
}( /*#__PURE__*/_wrapNativeSuper(Error));
exports.CodecBaseParseError = CodecBaseParseError;
var CODEC_EXECUTE_ERROR_NAME = "CodecExecuteError";
function isCodecExecuteError(error) {
  if (!(error instanceof Error)) return false;
  return error.name === CODEC_EXECUTE_ERROR_NAME;
}

/**
 * This Error class can collect CodecBaseParseError, and put an human-readable error
 */
var CodecExecuteError = /*#__PURE__*/function (_Error2) {
  _inherits(CodecExecuteError, _Error2);
  var _super2 = _createSuper(CodecExecuteError);
  function CodecExecuteError(origin) {
    var _this2;
    _classCallCheck(this, CodecExecuteError);
    _this2 = _super2.call(this);
    _defineProperty(_assertThisInitialized(_this2), "name", CODEC_EXECUTE_ERROR_NAME);
    _defineProperty(_assertThisInitialized(_this2), "keys", []);
    _this2.origin = origin;
    return _this2;
  }
  _createClass(CodecExecuteError, [{
    key: "updateKey",
    value: function updateKey(key) {
      this.keys.push(key);
      this.message = this.getPackErrorMessage();
    }
  }, {
    key: "getPackErrorMessage",
    value: function getPackErrorMessage() {
      var _this$origin$stack;
      var reducer = function reducer(acc, cur, index) {
        if (cur === CODEC_OPTIONAL_PATH) {
          cur = index === 0 ? "?" : "?.";
        } else if (typeof cur === "number") {
          cur = "[".concat(cur, "]");
        } else {
          cur = ".".concat(cur);
        }
        return acc + cur;
      };
      var path = this.keys.reduceRight(reducer, "input");
      return "Expect type ".concat(this.origin.expectedType, " at ").concat(path, " but got error: ").concat(this.origin.message, "\n    ").concat((_this$origin$stack = this.origin.stack) === null || _this$origin$stack === void 0 ? void 0 : _this$origin$stack.replace(/Error:.+?\n/, ""), "\n    ");
    }
  }]);
  return CodecExecuteError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
exports.CodecExecuteError = CodecExecuteError;

/***/ }),

/***/ "../../lumos/packages/codec/lib/high-order/index.js":
/*!**********************************************************!*\
  !*** ../../lumos/packages/codec/lib/high-order/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "createArrayCodec", ({
  enumerable: true,
  get: function get() {
    return _nested.createArrayCodec;
  }
}));
Object.defineProperty(exports, "createNullableCodec", ({
  enumerable: true,
  get: function get() {
    return _nested.createNullableCodec;
  }
}));
Object.defineProperty(exports, "createObjectCodec", ({
  enumerable: true,
  get: function get() {
    return _nested.createObjectCodec;
  }
}));
Object.defineProperty(exports, "enhancePack", ({
  enumerable: true,
  get: function get() {
    return _nested.enhancePack;
  }
}));
var _nested = __webpack_require__(/*! ./nested */ "../../lumos/packages/codec/lib/high-order/nested.js");

/***/ }),

/***/ "../../lumos/packages/codec/lib/high-order/nested.js":
/*!***********************************************************!*\
  !*** ../../lumos/packages/codec/lib/high-order/nested.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createArrayCodec = createArrayCodec;
exports.createNullableCodec = createNullableCodec;
exports.createObjectCodec = createObjectCodec;
exports.enhancePack = enhancePack;
var _utils = __webpack_require__(/*! ../utils */ "../../lumos/packages/codec/lib/utils.js");
var _error = __webpack_require__(/*! ../error */ "../../lumos/packages/codec/lib/error.js");
function createNullableCodec(codec) {
  return {
    pack: function pack(packable) {
      if (packable == null) return packable;
      return (0, _utils.trackCodeExecuteError)(_error.CODEC_OPTIONAL_PATH, function () {
        return codec.pack(packable);
      });
    },
    unpack: function unpack(unpackable) {
      if (unpackable == null) return unpackable;
      return codec.unpack(unpackable);
    }
  };
}
/**
 * a high-order codec that helps to organize multiple codecs together into a single object
 * @param codecShape
 * @example
 * ```ts
 * const codec = createObjectCodec({
 *   r: Uint8,
 *   g: Uint8,
 *   b: Uint8,
 * });
 *
 * // { r: ArrayBuffer([0xff]), g: ArrayBuffer([0x00]), b: ArrayBuffer([0x00]) }
 * codec.pack({ r: 255, g: 0, b: 0 });
 * ```
 */
function createObjectCodec(codecShape) {
  var codecEntries = Object.entries(codecShape);
  return {
    pack: function pack(packableObj) {
      var result = {};
      codecEntries.forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          itemCodec = _ref2[1];
        Object.assign(result, _defineProperty({}, key, (0, _utils.trackCodeExecuteError)(key, function () {
          return itemCodec.pack(packableObj[key]);
        })));
      });
      return result;
    },
    unpack: function unpack(unpackableObj) {
      var result = {};
      codecEntries.forEach(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
          key = _ref4[0],
          itemCodec = _ref4[1];
        Object.assign(result, _defineProperty({}, key, itemCodec.unpack(unpackableObj[key])));
      });
      return result;
    }
  };
}
function createArrayCodec(codec) {
  return {
    pack: function pack(items) {
      return items.map(function (item, index) {
        return (0, _utils.trackCodeExecuteError)(index, function () {
          return codec.pack(item);
        });
      });
    },
    unpack: function unpack(items) {
      return items.map(function (item) {
        return codec.unpack(item);
      });
    }
  };
}

/**
 * @param codec
 * @param afterCodecPack
 * @param beforeCodecUnpack
 */
function enhancePack(codec, afterCodecPack, beforeCodecUnpack) {
  return {
    pack: function pack(packable) {
      return afterCodecPack(codec.pack(packable));
    },
    unpack: function unpack(unpackable) {
      return codec.unpack(beforeCodecUnpack(unpackable));
    }
  };
}

/***/ }),

/***/ "../../lumos/packages/codec/lib/index.js":
/*!***********************************************!*\
  !*** ../../lumos/packages/codec/lib/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  createBytesCodec: true,
  createFixedBytesCodec: true,
  isFixedCodec: true,
  bytes: true,
  number: true,
  molecule: true
};
exports.bytes = void 0;
Object.defineProperty(exports, "createBytesCodec", ({
  enumerable: true,
  get: function get() {
    return _base.createBytesCodec;
  }
}));
Object.defineProperty(exports, "createFixedBytesCodec", ({
  enumerable: true,
  get: function get() {
    return _base.createFixedBytesCodec;
  }
}));
Object.defineProperty(exports, "isFixedCodec", ({
  enumerable: true,
  get: function get() {
    return _base.isFixedCodec;
  }
}));
exports.number = exports.molecule = void 0;
var _base = __webpack_require__(/*! ./base */ "../../lumos/packages/codec/lib/base.js");
var _highOrder = __webpack_require__(/*! ./high-order */ "../../lumos/packages/codec/lib/high-order/index.js");
Object.keys(_highOrder).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _highOrder[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _highOrder[key];
    }
  });
});
var _bytes = _interopRequireWildcard(__webpack_require__(/*! ./bytes */ "../../lumos/packages/codec/lib/bytes.js"));
exports.bytes = _bytes;
var _number = _interopRequireWildcard(__webpack_require__(/*! ./number */ "../../lumos/packages/codec/lib/number/index.js"));
exports.number = _number;
var _molecule = _interopRequireWildcard(__webpack_require__(/*! ./molecule */ "../../lumos/packages/codec/lib/molecule/index.js"));
exports.molecule = _molecule;
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj["default"] = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

/***/ }),

/***/ "../../lumos/packages/codec/lib/molecule/helper.js":
/*!*********************************************************!*\
  !*** ../../lumos/packages/codec/lib/molecule/helper.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.byteArrayOf = byteArrayOf;
exports.byteOf = byteOf;
exports.byteVecOf = byteVecOf;
var _utils = __webpack_require__(/*! ../utils */ "../../lumos/packages/codec/lib/utils.js");
var _bytes = __webpack_require__(/*! ../bytes */ "../../lumos/packages/codec/lib/bytes.js");
var _base = __webpack_require__(/*! ../base */ "../../lumos/packages/codec/lib/base.js");
var _number = __webpack_require__(/*! ../number */ "../../lumos/packages/codec/lib/number/index.js");
/**
 * a helper function to create custom codec of `array SomeType [byte; n]`
 * @param codec
 */
function byteArrayOf(codec) {
  var byteLength = codec.byteLength;
  return (0, _base.createFixedBytesCodec)({
    byteLength: byteLength,
    pack: function pack(packable) {
      return codec.pack(packable);
    },
    unpack: function unpack(buf) {
      return codec.unpack(buf);
    }
  });
}

/**
 * a helper function to create custom codec of `byte`
 * @param codec
 */
function byteOf(codec) {
  return byteArrayOf(_objectSpread(_objectSpread({}, codec), {}, {
    byteLength: 1
  }));
}

/**
 * a helper function to create custom codec of `vector Bytes <byte>`
 * @param codec
 */
function byteVecOf(codec) {
  return (0, _base.createBytesCodec)({
    pack: function pack(unpacked) {
      var payload = codec.pack(unpacked);
      var header = _number.Uint32LE.pack(payload.byteLength);
      return (0, _bytes.concat)(header, payload);
    },
    unpack: function unpack(packed) {
      (0, _utils.assertMinBufferLength)(packed, 4);
      var header = _number.Uint32LE.unpack(packed.slice(0, 4));
      (0, _utils.assertBufferLength)(packed.slice(4), header);
      return codec.unpack(packed.slice(4));
    }
  });
}

/***/ }),

/***/ "../../lumos/packages/codec/lib/molecule/index.js":
/*!********************************************************!*\
  !*** ../../lumos/packages/codec/lib/molecule/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "array", ({
  enumerable: true,
  get: function get() {
    return _layout.array;
  }
}));
Object.defineProperty(exports, "byteArrayOf", ({
  enumerable: true,
  get: function get() {
    return _helper.byteArrayOf;
  }
}));
Object.defineProperty(exports, "byteOf", ({
  enumerable: true,
  get: function get() {
    return _helper.byteOf;
  }
}));
Object.defineProperty(exports, "byteVecOf", ({
  enumerable: true,
  get: function get() {
    return _helper.byteVecOf;
  }
}));
Object.defineProperty(exports, "option", ({
  enumerable: true,
  get: function get() {
    return _layout.option;
  }
}));
Object.defineProperty(exports, "struct", ({
  enumerable: true,
  get: function get() {
    return _layout.struct;
  }
}));
Object.defineProperty(exports, "table", ({
  enumerable: true,
  get: function get() {
    return _layout.table;
  }
}));
Object.defineProperty(exports, "union", ({
  enumerable: true,
  get: function get() {
    return _layout.union;
  }
}));
Object.defineProperty(exports, "vector", ({
  enumerable: true,
  get: function get() {
    return _layout.vector;
  }
}));
var _helper = __webpack_require__(/*! ./helper */ "../../lumos/packages/codec/lib/molecule/helper.js");
var _layout = __webpack_require__(/*! ./layout */ "../../lumos/packages/codec/lib/molecule/layout.js");

/***/ }),

/***/ "../../lumos/packages/codec/lib/molecule/layout.js":
/*!*********************************************************!*\
  !*** ../../lumos/packages/codec/lib/molecule/layout.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.array = array;
exports.dynvec = dynvec;
exports.fixvec = fixvec;
exports.option = option;
exports.struct = struct;
exports.table = table;
exports.union = union;
exports.vector = vector;
var _base = __webpack_require__(/*! ../base */ "../../lumos/packages/codec/lib/base.js");
var _number = __webpack_require__(/*! ../number */ "../../lumos/packages/codec/lib/number/index.js");
var _bytes = __webpack_require__(/*! ../bytes */ "../../lumos/packages/codec/lib/bytes.js");
var _error = __webpack_require__(/*! ../error */ "../../lumos/packages/codec/lib/error.js");
var _highOrder = __webpack_require__(/*! ../high-order */ "../../lumos/packages/codec/lib/high-order/index.js");
/**
 * |  Type  |                      Header                      |               Body                |
 * |--------+--------------------------------------------------+-----------------------------------|
 * | array  |                                                  |  item-0 |  item-1 | ... |  item-N |
 * | struct |                                                  | field-0 | field-1 | ... | field-N |
 * | fixvec | items-count                                      |  item-0 |  item-1 | ... |  item-N |
 * | dynvec | full-size | offset-0 | offset-1 | ... | offset-N |  item-0 |  item-1 | ... |  item-N |
 * | table  | full-size | offset-0 | offset-1 | ... | offset-N | filed-0 | field-1 | ... | field-N |
 * | option |                                                  | item or none (zero bytes)         |
 * | union  | item-type-id                                     | item                              |
 */

/**
 * The array is a fixed-size type: it has a fixed-size inner type and a fixed length.
 * The size of an array is the size of inner type times the length.
 * @param itemCodec the fixed-size array item codec
 * @param itemCount
 */
function array(itemCodec, itemCount) {
  var enhancedArrayCodec = (0, _highOrder.createArrayCodec)(itemCodec);
  return (0, _base.createFixedBytesCodec)({
    byteLength: itemCodec.byteLength * itemCount,
    pack: function pack(items) {
      var itemsBuf = enhancedArrayCodec.pack(items);
      return (0, _bytes.concat).apply(void 0, _toConsumableArray(itemsBuf));
    },
    unpack: function unpack(buf) {
      var result = [];
      var itemLength = itemCodec.byteLength;
      for (var offset = 0; offset < buf.byteLength; offset += itemLength) {
        result.push(itemCodec.unpack(buf.slice(offset, offset + itemLength)));
      }
      return result;
    }
  });
}
function diff(x1, x2) {
  return x1.filter(function (x) {
    return !x2.includes(x);
  });
}
function checkShape(shape, fields) {
  var shapeKeys = Object.keys(shape);
  var missingFields = diff(shapeKeys, fields);
  var missingShape = diff(fields, shapeKeys);
  if (missingFields.length > 0 || missingShape.length > 0) {
    throw new Error("Invalid shape: missing fields ".concat(missingFields.join(", "), " or shape ").concat(missingShape.join(", ")));
  }
}

/**
 * Struct is a fixed-size type: all fields in struct are fixed-size and it has a fixed quantity of fields.
 * The size of a struct is the sum of all fields' size.
 * @param shape a object contains all fields' codec
 * @param fields the shape's keys. It provide an order for serialization/deserialization.
 */
function struct(shape, fields) {
  checkShape(shape, fields);
  var objectCodec = (0, _highOrder.createObjectCodec)(shape);
  return (0, _base.createFixedBytesCodec)({
    byteLength: fields.reduce(function (sum, field) {
      return sum + shape[field].byteLength;
    }, 0),
    pack: function pack(obj) {
      var packed = objectCodec.pack(obj);
      return fields.reduce(function (result, field) {
        return (0, _bytes.concat)(result, packed[field]);
      }, Uint8Array.from([]));
    },
    unpack: function unpack(buf) {
      var result = {};
      var offset = 0;
      fields.forEach(function (field) {
        var itemCodec = shape[field];
        var itemBuf = buf.slice(offset, offset + itemCodec.byteLength);
        Object.assign(result, _defineProperty({}, field, itemCodec.unpack(itemBuf)));
        offset = offset + itemCodec.byteLength;
      });
      return result;
    }
  });
}

/**
 * Vector with fixed size item codec
 * @param itemCodec fixed-size vector item codec
 */
function fixvec(itemCodec) {
  return (0, _base.createBytesCodec)({
    pack: function pack(items) {
      var arrayCodec = (0, _highOrder.createArrayCodec)(itemCodec);
      return (0, _bytes.concat)(_number.Uint32LE.pack(items.length), arrayCodec.pack(items).reduce(function (buf, item) {
        return (0, _bytes.concat)(buf, item);
      }, new ArrayBuffer(0)));
    },
    unpack: function unpack(buf) {
      if (buf.byteLength < 4) {
        throw new Error("fixvec: buffer is too short, expected at least 4 bytes, got ".concat(buf.byteLength));
      }
      var itemCount = _number.Uint32LE.unpack(buf.slice(0, 4));
      return array(itemCodec, itemCount).unpack(buf.slice(4));
    }
  });
}

/**
 * Vector with dynamic size item codec
 * @param itemCodec the vector item codec. It can be fixed-size or dynamic-size.
 * For example, you can create a recursive vector with this.
 */
function dynvec(itemCodec) {
  return (0, _base.createBytesCodec)({
    pack: function pack(obj) {
      var arrayCodec = (0, _highOrder.createArrayCodec)(itemCodec);
      var packed = arrayCodec.pack(obj).reduce(function (result, item) {
        var packedHeader = _number.Uint32LE.pack(result.offset);
        return {
          header: (0, _bytes.concat)(result.header, packedHeader),
          body: (0, _bytes.concat)(result.body, item),
          offset: result.offset + item.byteLength
        };
      }, {
        header: new ArrayBuffer(0),
        body: new ArrayBuffer(0),
        offset: 4 + obj.length * 4
      });
      var packedTotalSize = _number.Uint32LE.pack(packed.header.byteLength + packed.body.byteLength + 4);
      return (0, _bytes.concat)(packedTotalSize, packed.header, packed.body);
    },
    unpack: function unpack(buf) {
      var totalSize = _number.Uint32LE.unpack(buf.slice(0, 4));
      if (totalSize !== buf.byteLength) {
        throw new Error("Invalid buffer size, read from header: ".concat(totalSize, ", actual: ").concat(buf.byteLength));
      }
      var result = [];
      if (totalSize <= 4) {
        return result;
      } else {
        var offset0 = _number.Uint32LE.unpack(buf.slice(4, 8));
        var itemCount = (offset0 - 4) / 4;
        var offsets = new Array(itemCount).fill(1).map(function (_, index) {
          return _number.Uint32LE.unpack(buf.slice(4 + index * 4, 8 + index * 4));
        });
        offsets.push(totalSize);
        var _result = [];
        for (var index = 0; index < offsets.length - 1; index++) {
          var start = offsets[index];
          var end = offsets[index + 1];
          var itemBuf = buf.slice(start, end);
          _result.push(itemCodec.unpack(itemBuf));
        }
        return _result;
      }
    }
  });
}

/**
 * General vector codec, if `itemCodec` is fixed size type, it will create a fixvec codec, otherwise a dynvec codec will be created.
 * @param itemCodec
 */
function vector(itemCodec) {
  if ((0, _base.isFixedCodec)(itemCodec)) {
    return fixvec(itemCodec);
  }
  return dynvec(itemCodec);
}

/**
 * Table is a dynamic-size type. It can be considered as a dynvec but the length is fixed.
 * @param shape The table shape, item codec can be dynamic size
 * @param fields the shape's keys. Also provide an order for pack/unpack.
 */
function table(shape, fields) {
  checkShape(shape, fields);
  return (0, _base.createBytesCodec)({
    pack: function pack(obj) {
      var headerLength = 4 + fields.length * 4;
      var objectCodec = (0, _highOrder.createObjectCodec)(shape);
      var packedObj = objectCodec.pack(obj);
      var packed = fields.reduce(function (result, field) {
        var packedItem = packedObj[field];
        var packedOffset = _number.Uint32LE.pack(result.offset);
        return {
          header: (0, _bytes.concat)(result.header, packedOffset),
          body: (0, _bytes.concat)(result.body, packedItem),
          offset: result.offset + packedItem.byteLength
        };
      }, {
        header: new ArrayBuffer(0),
        body: new ArrayBuffer(0),
        offset: headerLength
      });
      var packedTotalSize = _number.Uint32LE.pack(packed.header.byteLength + packed.body.byteLength + 4);
      return (0, _bytes.concat)(packedTotalSize, packed.header, packed.body);
    },
    unpack: function unpack(buf) {
      var totalSize = _number.Uint32LE.unpack(buf.slice(0, 4));
      if (totalSize !== buf.byteLength) {
        throw new Error("Invalid buffer size, read from header: ".concat(totalSize, ", actual: ").concat(buf.byteLength));
      }
      if (totalSize <= 4 || fields.length === 0) {
        return {};
      } else {
        var offsets = fields.map(function (_, index) {
          return _number.Uint32LE.unpack(buf.slice(4 + index * 4, 8 + index * 4));
        });
        offsets.push(totalSize);
        var obj = {};
        for (var index = 0; index < offsets.length - 1; index++) {
          var start = offsets[index];
          var end = offsets[index + 1];
          var field = fields[index];
          var itemCodec = shape[field];
          var itemBuf = buf.slice(start, end);
          Object.assign(obj, _defineProperty({}, field, itemCodec.unpack(itemBuf)));
        }
        return obj;
      }
    }
  });
}

/**
 * Union is a dynamic-size type.
 * Serializing a union has two steps:
 * - Serialize a item type id in bytes as a 32 bit unsigned integer in little-endian. The item type id is the index of the inner items, and it's starting at 0.
 * - Serialize the inner item.
 * @param itemCodec the union item record
 * @param fields the list of itemCodec's keys. It's also provide an order for pack/unpack.
 */
function union(itemCodec, fields) {
  return (0, _base.createBytesCodec)({
    pack: function pack(obj) {
      var type = obj.type;
      var typeName = "Union(".concat(fields.join(" | "), ")");

      /* c8 ignore next */
      if (typeof type !== "string") {
        throw new _error.CodecBaseParseError("Invalid type in union, type must be a string", typeName);
      }
      var fieldIndex = fields.indexOf(type);
      if (fieldIndex === -1) {
        throw new _error.CodecBaseParseError("Unknown union type: ".concat(String(obj.type)), typeName);
      }
      var packedFieldIndex = _number.Uint32LE.pack(fieldIndex);
      var packedBody = itemCodec[type].pack(obj.value);
      return (0, _bytes.concat)(packedFieldIndex, packedBody);
    },
    unpack: function unpack(buf) {
      var typeIndex = _number.Uint32LE.unpack(buf.slice(0, 4));
      var type = fields[typeIndex];
      return {
        type: type,
        value: itemCodec[type].unpack(buf.slice(4))
      };
    }
  });
}

/**
 * Option is a dynamic-size type.
 * Serializing an option depends on whether it is empty or not:
 * - if it's empty, there is zero bytes (the size is 0).
 * - if it's not empty, just serialize the inner item (the size is same as the inner item's size).
 * @param itemCodec
 */
function option(itemCodec) {
  return (0, _base.createBytesCodec)({
    pack: function pack(obj) {
      var nullableCodec = (0, _highOrder.createNullableCodec)(itemCodec);
      if (obj !== undefined && obj !== null) {
        return nullableCodec.pack(obj);
      } else {
        return Uint8Array.from([]);
      }
    },
    unpack: function unpack(buf) {
      if (buf.byteLength === 0) {
        return undefined;
      }
      return itemCodec.unpack(buf);
    }
  });
}

/***/ }),

/***/ "../../lumos/packages/codec/lib/number/index.js":
/*!******************************************************!*\
  !*** ../../lumos/packages/codec/lib/number/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _uint = __webpack_require__(/*! ./uint */ "../../lumos/packages/codec/lib/number/uint.js");
Object.keys(_uint).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _uint[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _uint[key];
    }
  });
});

/***/ }),

/***/ "../../lumos/packages/codec/lib/number/uint.js":
/*!*****************************************************!*\
  !*** ../../lumos/packages/codec/lib/number/uint.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Uint8 = exports.Uint64LE = exports.Uint64BE = exports.Uint64 = exports.Uint512LE = exports.Uint512BE = exports.Uint512 = exports.Uint32LE = exports.Uint32BE = exports.Uint32 = exports.Uint256LE = exports.Uint256BE = exports.Uint256 = exports.Uint16LE = exports.Uint16BE = exports.Uint16 = exports.Uint128LE = exports.Uint128BE = exports.Uint128 = void 0;
var _bi = __webpack_require__(/*! @ckb-lumos/bi */ "../../lumos/packages/bi/lib/index.js");
var _base = __webpack_require__(/*! ../base */ "../../lumos/packages/codec/lib/base.js");
var _error = __webpack_require__(/*! ../error */ "../../lumos/packages/codec/lib/error.js");
function assertNumberRange(value, min, max, typeName) {
  value = _bi.BI.from(value);
  if (value.lt(min) || value.gt(max)) {
    throw new _error.CodecBaseParseError("Value must be between ".concat(min.toString(), " and ").concat(max.toString(), ", but got ").concat(value.toString()), typeName);
  }
}
function createUintNumberCodec(byteLength) {
  var littleEndian = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var codec = createUintBICodec(byteLength, littleEndian);
  return {
    __isFixedCodec__: true,
    byteLength: byteLength,
    pack: function pack(packable) {
      return codec.pack(packable);
    },
    unpack: function unpack(unpackable) {
      return codec.unpack(unpackable).toNumber();
    }
  };
}
var createUintBICodec = function createUintBICodec(byteLength) {
  var littleEndian = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var max = _bi.BI.from(1).shl(byteLength * 8).sub(1);
  return (0, _base.createFixedBytesCodec)({
    byteLength: byteLength,
    pack: function pack(biIsh) {
      var endianType = littleEndian ? "LE" : "BE";
      if (byteLength <= 1) {
        endianType = "";
      }
      var typeName = "Uint".concat(byteLength * 8).concat(endianType);
      if (typeof biIsh === "number" && !Number.isSafeInteger(biIsh)) {
        throw new _error.CodecBaseParseError("".concat(biIsh, " is not a safe integer"), typeName);
      }
      var num = _bi.BI.from(biIsh);
      assertNumberRange(num, 0, max, typeName);
      var result = new DataView(new ArrayBuffer(byteLength));
      for (var i = 0; i < byteLength; i++) {
        if (littleEndian) {
          result.setUint8(i, num.and(0xff).toNumber());
        } else {
          result.setUint8(byteLength - i - 1, num.and(0xff).toNumber());
        }
        num = num.shr(8);
      }
      return new Uint8Array(result.buffer);
    },
    unpack: function unpack(buf) {
      var view = new DataView(Uint8Array.from(buf).buffer);
      var result = _bi.BI.from(0);
      for (var i = 0; i < byteLength; i++) {
        if (littleEndian) {
          result = result.or(_bi.BI.from(view.getUint8(i)).shl(i * 8));
        } else {
          result = result.shl(8).or(view.getUint8(i));
        }
      }
      return result;
    }
  });
};
var Uint8 = createUintNumberCodec(1);
exports.Uint8 = Uint8;
var Uint16LE = createUintNumberCodec(2, true);
exports.Uint16LE = Uint16LE;
var Uint16BE = createUintNumberCodec(2);
/**
 * @alias Uint16LE
 */
exports.Uint16BE = Uint16BE;
var Uint16 = Uint16LE;
exports.Uint16 = Uint16;
var Uint32LE = createUintNumberCodec(4, true);
exports.Uint32LE = Uint32LE;
var Uint32BE = createUintNumberCodec(4);
/**
 * @alias Uint32LE
 */
exports.Uint32BE = Uint32BE;
var Uint32 = Uint32LE;
exports.Uint32 = Uint32;
var Uint64LE = createUintBICodec(8, true);
exports.Uint64LE = Uint64LE;
var Uint64BE = createUintBICodec(8);
/**
 * @alias Uint64LE
 */
exports.Uint64BE = Uint64BE;
var Uint64 = Uint64LE;
exports.Uint64 = Uint64;
var Uint128LE = createUintBICodec(16, true);
exports.Uint128LE = Uint128LE;
var Uint128BE = createUintBICodec(16);
/**
 * @alias Uint128LE
 */
exports.Uint128BE = Uint128BE;
var Uint128 = Uint128LE;
exports.Uint128 = Uint128;
var Uint256LE = createUintBICodec(32, true);
exports.Uint256LE = Uint256LE;
var Uint256BE = createUintBICodec(32);
/**
 * @alias Uint256LE
 */
exports.Uint256BE = Uint256BE;
var Uint256 = Uint256LE;
exports.Uint256 = Uint256;
var Uint512LE = createUintBICodec(64, true);
exports.Uint512LE = Uint512LE;
var Uint512BE = createUintBICodec(64);
/**
 * @alias Uint512LE
 */
exports.Uint512BE = Uint512BE;
var Uint512 = Uint512LE;
exports.Uint512 = Uint512;

/***/ }),

/***/ "../../lumos/packages/codec/lib/utils.js":
/*!***********************************************!*\
  !*** ../../lumos/packages/codec/lib/utils.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.assertBufferLength = assertBufferLength;
exports.assertHexDecimal = assertHexDecimal;
exports.assertHexString = assertHexString;
exports.assertMinBufferLength = assertMinBufferLength;
exports.assertUtf8String = assertUtf8String;
exports.isObjectLike = isObjectLike;
exports.trackCodeExecuteError = trackCodeExecuteError;
var _error = __webpack_require__(/*! ./error */ "../../lumos/packages/codec/lib/error.js");
var HEX_DECIMAL_REGEX = /^0x([0-9a-fA-F])+$/;
var HEX_DECIMAL_WITH_BYTELENGTH_REGEX_MAP = new Map();
function assertHexDecimal(str, byteLength) {
  if (byteLength) {
    var regex = HEX_DECIMAL_WITH_BYTELENGTH_REGEX_MAP.get(byteLength);
    if (!regex) {
      var newRegex = new RegExp("^0x([0-9a-fA-F]){1,".concat(byteLength * 2, "}$"));
      HEX_DECIMAL_WITH_BYTELENGTH_REGEX_MAP.set(byteLength, newRegex);
      regex = newRegex;
    }
    if (!regex.test(str)) {
      throw new Error("Invalid hex decimal!");
    }
  } else {
    if (!HEX_DECIMAL_REGEX.test(str)) {
      throw new Error("Invalid hex decimal!");
    }
  }
}
var HEX_STRING_REGEX = /^0x([0-9a-fA-F][0-9a-fA-F])*$/;
var HEX_STRING_WITH_BYTELENGTH_REGEX_MAP = new Map();
function assertHexString(str, byteLength) {
  if (byteLength) {
    var regex = HEX_STRING_WITH_BYTELENGTH_REGEX_MAP.get(byteLength);
    if (!regex) {
      var newRegex = new RegExp("^0x([0-9a-fA-F][0-9a-fA-F]){".concat(byteLength, "}$"));
      HEX_STRING_WITH_BYTELENGTH_REGEX_MAP.set(byteLength, newRegex);
      regex = newRegex;
    }
    if (!regex.test(str)) {
      throw new Error("Invalid hex string!");
    }
  } else {
    if (!HEX_STRING_REGEX.test(str)) {
      throw new Error("Invalid hex string!");
    }
  }
}
function assertUtf8String(str) {
  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i);
    if (c > 0xff) {
      throw new Error("Invalid UTF-8 raw string!");
    }
  }
}
function assertBufferLength(buf, length) {
  if (buf.byteLength !== length) {
    throw new Error("Invalid buffer length: ".concat(buf.byteLength, ", should be ").concat(length));
  }
}
function assertMinBufferLength(buf, length) {
  if (buf.byteLength < length) {
    throw new Error("Invalid buffer length: ".concat(buf.byteLength, ", should be at least ").concat(length));
  }
}
function isObjectLike(x) {
  if (!x) return false;
  return _typeof(x) === "object";
}
function trackCodeExecuteError(path, fn) {
  try {
    return fn();
  } catch (e) {
    var readableError = (0, _error.isCodecExecuteError)(e) ? e : new _error.CodecExecuteError(e);
    readableError.updateKey(path);
    throw readableError;
  }
}

/***/ }),

/***/ "./src/messaging/adapters.ts":
/*!***********************************!*\
  !*** ./src/messaging/adapters.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "browserExtensionAdapter": () => (/* binding */ browserExtensionAdapter)
/* harmony export */ });
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webextension-polyfill */ "../../node_modules/webextension-polyfill/dist/browser-polyfill.js");
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__);

var browserExtensionAdapter = {
  send: function send(message) {
    return webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().runtime.sendMessage(message);
  },
  receive: function receive(handler) {
    return webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().runtime.onMessage.addListener(handler);
  },
  dispose: function dispose(receiver) {
    return webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().runtime.onMessage.removeListener(receiver);
  }
};

/***/ }),

/***/ "./src/messaging/session.ts":
/*!**********************************!*\
  !*** ./src/messaging/session.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SESSION_MESSAGE_SYMBOL": () => (/* binding */ SESSION_MESSAGE_SYMBOL),
/* harmony export */   "createSessionMessage": () => (/* binding */ createSessionMessage),
/* harmony export */   "createSessionMessenger": () => (/* binding */ createSessionMessenger),
/* harmony export */   "isSessionMessage": () => (/* binding */ isSessionMessage)
/* harmony export */ });
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nanoid */ "../../node_modules/nanoid/index.browser.js");
/* harmony import */ var json_rpc_2_0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! json-rpc-2.0 */ "./node_modules/json-rpc-2.0/dist/index.js");
/* harmony import */ var json_rpc_2_0__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(json_rpc_2_0__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nexus_wallet_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nexus-wallet/utils */ "../utils/lib/index.js");
/* harmony import */ var _nexus_wallet_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nexus_wallet_utils__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
// import browser from 'webextension-polyfill';



var SESSION_MESSAGE_SYMBOL = '__SESSION_MESSAGE_SYMBOL__';
/**
 * a two-way JSON-RPC 2.0 messenger wrapper for communication between two parties
 * @param config
 * @example
 * ```ts
 * type Map = {
 *   ping: Call<void, 'pong'>;
 * }
 *
 * const server = createSessionMessenger<Map>({ adapter });
 * server.receive('ping', () => 'pong');
 *
 * const client = createSessionMessenger<Map>({ adapter, sessionId: server.sessionId() });
 * await client.send('ping'); // 'pong'
 * ```
 */
function createSessionMessenger(config) {
  var _config$sessionId = config.sessionId,
    sessionId = _config$sessionId === void 0 ? (0,nanoid__WEBPACK_IMPORTED_MODULE_2__.nanoid)() : _config$sessionId,
    adapter = config.adapter;

  // a set of JSONRPC request handlers,
  // used to handle incoming JSONRPC requests
  // and these handlers will be removed after calling destroy()
  var handlers = new Set();
  var reqId = 1;
  var genJsonRpcRequestId = function genJsonRpcRequestId() {
    return "".concat(sessionId, ":").concat(reqId++);
  };
  var isCurrentSessionMessage = function isCurrentSessionMessage(message) {
    return typeof message.rpc.id === 'string' && message.rpc.id.startsWith(sessionId);
  };
  return {
    sessionId: function (_sessionId) {
      function sessionId() {
        return _sessionId.apply(this, arguments);
      }
      sessionId.toString = function () {
        return _sessionId.toString();
      };
      return sessionId;
    }(function () {
      return sessionId;
    }),
    send: function send(type, param) {
      var currentReqId = genJsonRpcRequestId();
      var requestMessage = createSessionMessage((0,json_rpc_2_0__WEBPACK_IMPORTED_MODULE_0__.createJSONRPCRequest)(currentReqId, String(type), param));
      adapter.send(requestMessage);
      return new Promise(function (resolve, reject) {
        adapter.receive(function handleResponse(unknownMessage) {
          if (!isSessionMessage(unknownMessage)) {
            return;
          }
          var res = unknownMessage.rpc;
          if (!(0,json_rpc_2_0__WEBPACK_IMPORTED_MODULE_0__.isJSONRPCResponse)(res) || res.id !== currentReqId) return;
          adapter.dispose(handleResponse);
          if (res.error) {
            reject(res.error);
          } else {
            resolve(res.result);
          }
        });
      });
    },
    register: function register(method, handler) {
      adapter.receive( /*#__PURE__*/function () {
        var _handleRequest = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(unknownMessage) {
          var req, res;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (isSessionMessage(unknownMessage)) {
                    _context2.next = 2;
                    break;
                  }
                  return _context2.abrupt("return");
                case 2:
                  if (isCurrentSessionMessage(unknownMessage)) {
                    _context2.next = 4;
                    break;
                  }
                  return _context2.abrupt("return");
                case 4:
                  req = unknownMessage.rpc;
                  if (!(!(0,json_rpc_2_0__WEBPACK_IMPORTED_MODULE_0__.isJSONRPCRequest)(req) || req.method !== method)) {
                    _context2.next = 7;
                    break;
                  }
                  return _context2.abrupt("return");
                case 7:
                  _context2.next = 9;
                  return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                    var errorMessage;
                    return _regeneratorRuntime().wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _nexus_wallet_utils__WEBPACK_IMPORTED_MODULE_1__.asserts.asserts(req.id, "request id is required");
                            _context.prev = 1;
                            _context.t0 = json_rpc_2_0__WEBPACK_IMPORTED_MODULE_0__.createJSONRPCSuccessResponse;
                            _context.t1 = req.id;
                            _context.next = 6;
                            return handler(req.params);
                          case 6:
                            _context.t2 = _context.sent;
                            return _context.abrupt("return", (0, _context.t0)(_context.t1, _context.t2));
                          case 10:
                            _context.prev = 10;
                            _context.t3 = _context["catch"](1);
                            errorMessage = _context.t3 instanceof Error ? _context.t3.message : 'Internal Error';
                            return _context.abrupt("return", (0,json_rpc_2_0__WEBPACK_IMPORTED_MODULE_0__.createJSONRPCErrorResponse)(req.id, json_rpc_2_0__WEBPACK_IMPORTED_MODULE_0__.JSONRPCErrorCode.InternalError, errorMessage, _context.t3));
                          case 14:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, null, [[1, 10]]);
                  }))();
                case 9:
                  res = _context2.sent;
                  adapter.send(createSessionMessage(res));
                  handlers.add(handleRequest);
                case 12:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));
        function handleRequest(_x) {
          return _handleRequest.apply(this, arguments);
        }
        return handleRequest;
      }());
    },
    destroy: function destroy() {
      handlers.forEach(function (handler) {
        return adapter.dispose(handler);
      });
    }
  };
}
function createSessionMessage(data) {
  var _ref2;
  return _ref2 = {}, _defineProperty(_ref2, SESSION_MESSAGE_SYMBOL, true), _defineProperty(_ref2, "rpc", data), _ref2;
}
function isSessionMessage(x) {
  if (!x || _typeof(x) !== 'object') return false;
  return SESSION_MESSAGE_SYMBOL in x;
}

/***/ }),

/***/ "./src/rpc/server.ts":
/*!***************************!*\
  !*** ./src/rpc/server.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addMethod": () => (/* binding */ addMethod),
/* harmony export */   "createRpcServerParams": () => (/* binding */ createRpcServerParams),
/* harmony export */   "server": () => (/* binding */ server)
/* harmony export */ });
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webextension-polyfill */ "../../node_modules/webextension-polyfill/dist/browser-polyfill.js");
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nexus_wallet_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nexus-wallet/utils */ "../utils/lib/index.js");
/* harmony import */ var _nexus_wallet_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nexus_wallet_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var json_rpc_2_0__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! json-rpc-2.0 */ "./node_modules/json-rpc-2.0/dist/index.js");
/* harmony import */ var json_rpc_2_0__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(json_rpc_2_0__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ "./src/services/index.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var server = new json_rpc_2_0__WEBPACK_IMPORTED_MODULE_2__.JSONRPCServer();
function addMethod(method, handler) {
  server.addMethod(method, handler);
}
var servicesFactory = (0,_services__WEBPACK_IMPORTED_MODULE_3__.createServicesFactory)();
function createRpcServerParams(payload) {
  return {
    getRequesterAppInfo: function () {
      var _getRequesterAppInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var tab;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().tabs.get(payload.endpoint.tabId);
              case 2:
                tab = _context.sent;
                if (!tab.url || !tab.favIconUrl) {
                  _nexus_wallet_utils__WEBPACK_IMPORTED_MODULE_1__.errors.throwError('It seems that there is no permission for "permissions.tab", please check if the "permissions.tab" is disabled');
                }
                return _context.abrupt("return", {
                  url: tab.url,
                  favIconUrl: tab.favIconUrl
                });
              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      function getRequesterAppInfo() {
        return _getRequesterAppInfo.apply(this, arguments);
      }
      return getRequesterAppInfo;
    }(),
    resolveService: function resolveService(k) {
      return servicesFactory.get(k);
    }
  };
}

/***/ }),

/***/ "./src/rpc/walletImpl.ts":
/*!*******************************!*\
  !*** ./src/rpc/walletImpl.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server */ "./src/rpc/server.ts");
/* harmony import */ var _nexus_wallet_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nexus-wallet/utils */ "../utils/lib/index.js");
/* harmony import */ var _nexus_wallet_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nexus_wallet_utils__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


(0,_server__WEBPACK_IMPORTED_MODULE_0__.addMethod)('wallet_enable', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_, _ref) {
    var getRequesterAppInfo, resolveService, grantService, _yield$getRequesterAp, url, _URL, host, isGranted, granted, notificationService;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            getRequesterAppInfo = _ref.getRequesterAppInfo, resolveService = _ref.resolveService;
            _context.next = 3;
            return resolveService('grantService');
          case 3:
            grantService = _context.sent;
            _context.next = 6;
            return getRequesterAppInfo();
          case 6:
            _yield$getRequesterAp = _context.sent;
            url = _yield$getRequesterAp.url;
            _URL = new URL(url), host = _URL.host;
            _context.next = 11;
            return grantService.getIsGranted({
              host: host
            });
          case 11:
            isGranted = _context.sent;
            if (!isGranted) {
              _context.next = 14;
              break;
            }
            return _context.abrupt("return");
          case 14:
            _context.next = 16;
            return grantService.getIsGranted({
              host: host
            });
          case 16:
            granted = _context.sent;
            if (!granted) {
              _context.next = 19;
              break;
            }
            return _context.abrupt("return");
          case 19:
            _context.next = 21;
            return resolveService('notificationService');
          case 21:
            notificationService = _context.sent;
            _context.prev = 22;
            _context.next = 25;
            return notificationService.requestGrant({
              url: url
            });
          case 25:
            _context.next = 30;
            break;
          case 27:
            _context.prev = 27;
            _context.t0 = _context["catch"](22);
            _nexus_wallet_utils__WEBPACK_IMPORTED_MODULE_1__.errors.throwError('User has rejected');
          case 30:
            _context.next = 32;
            return grantService.grant({
              host: host
            });
          case 32:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[22, 27]]);
  }));
  return function (_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}());
(0,_server__WEBPACK_IMPORTED_MODULE_0__.addMethod)('wallet_fullOwnership_getUnusedLocks', function () {
  // TODO implement me, this is just a mock
  return [{
    codeHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
    hashType: 'type',
    args: '0x0000000000000000000000000000000000000000'
  }];
});

/***/ }),

/***/ "./src/services/grant.ts":
/*!*******************************!*\
  !*** ./src/services/grant.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createGrantService": () => (/* binding */ createGrantService)
/* harmony export */ });
/* harmony import */ var _nexus_wallet_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nexus-wallet/utils */ "../utils/lib/index.js");
/* harmony import */ var _nexus_wallet_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nexus_wallet_utils__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function createGrantService(payload) {
  var storage = payload.storage;
  return {
    getIsGranted: function getIsGranted(payload) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var grantedUrls;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return storage.getItem('grant');
              case 2:
                grantedUrls = _context.sent;
                if (grantedUrls) {
                  _context.next = 5;
                  break;
                }
                return _context.abrupt("return", false);
              case 5:
                return _context.abrupt("return", grantedUrls.includes(payload.host));
              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    grant: function grant(payload) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var grantedUrls;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return storage.getItem('grant');
              case 2:
                grantedUrls = _context2.sent;
                if (!grantedUrls) {
                  _nexus_wallet_utils__WEBPACK_IMPORTED_MODULE_0__.errors.throwError('Storage is not initialized');
                }
                grantedUrls.push(payload.host);
                _context2.next = 7;
                return storage.setItem('grant', grantedUrls);
              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    revoke: function revoke(payload) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var grantedUrls, revoked;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return storage.getItem('grant');
              case 2:
                grantedUrls = _context3.sent;
                if (grantedUrls) {
                  _context3.next = 5;
                  break;
                }
                return _context3.abrupt("return");
              case 5:
                revoked = grantedUrls.filter(function (host) {
                  return host === payload.host;
                });
                _context3.next = 8;
                return storage.setItem('grant', revoked);
              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    }
  };
}

/***/ }),

/***/ "./src/services/index.ts":
/*!*******************************!*\
  !*** ./src/services/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createServicesFactory": () => (/* binding */ createServicesFactory)
/* harmony export */ });
/* harmony import */ var _grant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grant */ "./src/services/grant.ts");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/services/storage.ts");
/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification */ "./src/services/notification.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



function createServicesFactory() {
  var storage = (0,_storage__WEBPACK_IMPORTED_MODULE_1__.createInMemoryStorage)();
  var defaultStorage = {
    grant: []
  };
  storage.setAll(_objectSpread(_objectSpread({}, defaultStorage), storage.getAll()));
  var services = {
    storage: storage,
    grantService: (0,_grant__WEBPACK_IMPORTED_MODULE_0__.createGrantService)({
      storage: storage
    }),
    notificationService: (0,_notification__WEBPACK_IMPORTED_MODULE_2__.createNotificationService)()
  };
  return {
    get: function get(key) {
      return services[key];
    }
  };
}

/***/ }),

/***/ "./src/services/notification.ts":
/*!**************************************!*\
  !*** ./src/services/notification.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNotificationService": () => (/* binding */ createNotificationService)
/* harmony export */ });
/* harmony import */ var _nexus_wallet_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nexus-wallet/utils */ "../utils/lib/index.js");
/* harmony import */ var _nexus_wallet_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nexus_wallet_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webextension-polyfill */ "../../node_modules/webextension-polyfill/dist/browser-polyfill.js");
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _messaging_session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../messaging/session */ "./src/messaging/session.ts");
/* harmony import */ var _messaging_adapters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../messaging/adapters */ "./src/messaging/adapters.ts");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nanoid */ "../../node_modules/nanoid/index.browser.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var NOTIFICATION_WIDTH = 516;
var NOTIFICATION_HEIGHT = 640;

// TODO this is a mocked notification service,
//  just demonstrating how we organize the code
function createNotificationService() {
  return {
    requestGrant: function requestGrant(_ref) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var url, lastFocused, sessionId, notification, messenger;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = _ref.url;
                _context.next = 3;
                return webextension_polyfill__WEBPACK_IMPORTED_MODULE_1___default().windows.getLastFocused();
              case 3:
                lastFocused = _context.sent;
                sessionId = (0,nanoid__WEBPACK_IMPORTED_MODULE_4__.nanoid)();
                _context.next = 7;
                return webextension_polyfill__WEBPACK_IMPORTED_MODULE_1___default().windows.create({
                  type: 'popup',
                  focused: true,
                  top: lastFocused.top,
                  left: lastFocused.left + (lastFocused.width - 360),
                  width: NOTIFICATION_WIDTH,
                  height: NOTIFICATION_HEIGHT,
                  url: "notification.html#/grant?sessionId=".concat(sessionId)
                });
              case 7:
                notification = _context.sent;
                messenger = (0,_messaging_session__WEBPACK_IMPORTED_MODULE_2__.createSessionMessenger)({
                  adapter: _messaging_adapters__WEBPACK_IMPORTED_MODULE_3__.browserExtensionAdapter,
                  sessionId: sessionId
                });
                return _context.abrupt("return", new Promise(function (resolve, reject) {
                  messenger.register('session_getRequesterAppInfo', function () {
                    // TODO: favicon from url
                    return {
                      url: url,
                      favicon: "".concat(new URL(url).origin, "/favicon.ico")
                    };
                  });
                  messenger.register('session_approveEnableWallet', function () {
                    messenger.destroy();
                    resolve();
                  });
                  webextension_polyfill__WEBPACK_IMPORTED_MODULE_1___default().windows.onRemoved.addListener(function (windowId) {
                    if (windowId === notification.id) {
                      messenger.destroy();
                      reject();
                    }
                  });
                }));
              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    requestSignTransaction: function requestSignTransaction() {
      _nexus_wallet_utils__WEBPACK_IMPORTED_MODULE_0__.errors.unimplemented();
    },
    requestSignData: function requestSignData() {
      _nexus_wallet_utils__WEBPACK_IMPORTED_MODULE_0__.errors.unimplemented();
    }
  };
}

/***/ }),

/***/ "./src/services/storage.ts":
/*!*********************************!*\
  !*** ./src/services/storage.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createInMemoryStorage": () => (/* binding */ createInMemoryStorage)
/* harmony export */ });
/* harmony import */ var _nexus_wallet_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nexus-wallet/utils */ "../utils/lib/index.js");
/* harmony import */ var _nexus_wallet_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nexus_wallet_utils__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function createInMemoryStorage() {
  var store = new Map();
  return {
    getItem: function getItem(key) {
      return store.get(key);
    },
    hasItem: function hasItem(key) {
      return store.has(key);
    },
    removeItem: function removeItem(key) {
      return store["delete"](key);
    },
    setItem: function setItem(key, value) {
      store.set(key, value);
    },
    getAll: function getAll() {
      return Object.fromEntries(store.entries());
    },
    setAll: function setAll(s) {
      if (!s) _nexus_wallet_utils__WEBPACK_IMPORTED_MODULE_0__.errors.throwError("The storage cannot be set to ".concat(s));
      Object.entries(s).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];
        store.set(key, value);
      });
    }
  };
}

/***/ }),

/***/ "../utils/lib/asserts.js":
/*!*******************************!*\
  !*** ../utils/lib/asserts.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.asserts = exports.nonFalsy = exports.nonEmpty = void 0;
var error_1 = __webpack_require__(/*! ./error */ "../utils/lib/error.js");
function nonEmpty(x) {
  if (x === '' || x === null || x === undefined) (0, error_1.throwError)('cannot be empty');
}
exports.nonEmpty = nonEmpty;
function nonFalsy(x) {
  nonEmpty(x);
  if (!x) (0, error_1.throwError)('cannot be falsy');
}
exports.nonFalsy = nonFalsy;
function asserts(condition, message) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  if (!condition) (0, error_1.throwError)(message || 'Assertion failed', args);
}
exports.asserts = asserts;

/***/ }),

/***/ "../utils/lib/error.js":
/*!*****************************!*\
  !*** ../utils/lib/error.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.unimplemented = exports.throwError = exports.makeError = void 0;
var version_1 = __webpack_require__(/*! ./version */ "../utils/lib/version.js");
var internal_1 = __webpack_require__(/*! ./internal */ "../utils/lib/internal.js");
function makeError() {
  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Unknown error';
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  var formatted = (0, internal_1.formatMessage).apply(void 0, [message].concat(args));
  return new Error("[NexusWallet]: ".concat(formatted, "  (version=").concat(version_1.LIB_VERSION, ")"));
}
exports.makeError = makeError;
function throwError(message) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }
  throw makeError.apply(void 0, [message].concat(args));
}
exports.throwError = throwError;
function unimplemented() {
  throwError('Unimplemented');
}
exports.unimplemented = unimplemented;

/***/ }),

/***/ "../utils/lib/index.js":
/*!*****************************!*\
  !*** ../utils/lib/index.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }
  __setModuleDefault(result, mod);
  return result;
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createLogger = exports.logger = exports.formatMessage = exports.resolveProvider = exports.asserts = exports.errors = exports.LIB_VERSION = void 0;
var version_1 = __webpack_require__(/*! ./version */ "../utils/lib/version.js");
Object.defineProperty(exports, "LIB_VERSION", ({
  enumerable: true,
  get: function get() {
    return version_1.LIB_VERSION;
  }
}));
exports.errors = __importStar(__webpack_require__(/*! ./error */ "../utils/lib/error.js"));
exports.asserts = __importStar(__webpack_require__(/*! ./asserts */ "../utils/lib/asserts.js"));
var internal_1 = __webpack_require__(/*! ./internal */ "../utils/lib/internal.js");
Object.defineProperty(exports, "resolveProvider", ({
  enumerable: true,
  get: function get() {
    return internal_1.resolveProvider;
  }
}));
Object.defineProperty(exports, "formatMessage", ({
  enumerable: true,
  get: function get() {
    return internal_1.formatMessage;
  }
}));
exports.logger = __importStar(__webpack_require__(/*! ./logger */ "../utils/lib/logger.js"));
var logger_1 = __webpack_require__(/*! ./logger */ "../utils/lib/logger.js");
Object.defineProperty(exports, "createLogger", ({
  enumerable: true,
  get: function get() {
    return logger_1.createLogger;
  }
}));

/***/ }),

/***/ "../utils/lib/internal.js":
/*!********************************!*\
  !*** ../utils/lib/internal.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.formatMessage = exports.resolveProvider = void 0;
var codec_1 = __webpack_require__(/*! @ckb-lumos/codec */ "../../lumos/packages/codec/lib/index.js");
function resolveProvider(provider) {
  return provider instanceof Function ? provider() : provider;
}
exports.resolveProvider = resolveProvider;
function formatArgs(arg) {
  if (typeof arg === 'string') {
    return arg;
  }
  try {
    // TODO check if arg is a valid BytesLike string first
    //  instead of just try to convert it
    return codec_1.bytes.hexify(codec_1.bytes.bytify(arg));
  } catch (_a) {
    return JSON.stringify(arg);
  }
}
/**
 * format message with args, the %s will be replaced with args in order
 * @example
 * ```js
 * formatMessage('hello %s', 'world') // => 'hello world'
 * ```
 * @param message
 * @param args
 */
function formatMessage(message) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  var replaced = 0;
  var formatted = message.replace(/%s/g, function () {
    return formatArgs(args[replaced++]);
  });
  if (replaced < args.length) {
    formatted += ' ' + args.slice(replaced).map(formatArgs).join(' ');
  }
  return formatted;
}
exports.formatMessage = formatMessage;

/***/ }),

/***/ "../utils/lib/logger.js":
/*!******************************!*\
  !*** ../utils/lib/logger.js ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.setLogger = exports.setLogLevel = exports.createLogger = void 0;
var internal_1 = __webpack_require__(/*! ./internal */ "../utils/lib/internal.js");
var adapter = console;
var loglevel = 'info';
function createLogger() {
  var module = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Nexus';
  var log = function log(method) {
    return function (message) {
      var currentLogLevel = typeof loglevel === 'string' ? LOG_LEVELS[loglevel] : loglevel;
      if (LOG_LEVELS[method] < currentLogLevel || !message) return;
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      adapter[method]((0, internal_1.formatMessage).apply(void 0, ["[".concat(module, "]\t[").concat(method.toUpperCase(), "]\t").concat(message)].concat(args)));
    };
  };
  return {
    trace: log('trace'),
    debug: log('debug'),
    info: log('info'),
    warn: log('warn'),
    error: log('error')
  };
}
exports.createLogger = createLogger;
function setLogLevel(level) {
  loglevel = level;
}
exports.setLogLevel = setLogLevel;
function setLogger(newAdapter) {
  adapter = newAdapter;
}
exports.setLogger = setLogger;
var LOG_LEVELS = {
  trace: 0,
  debug: 1,
  info: 2,
  warn: 3,
  error: 4
};

/***/ }),

/***/ "../utils/lib/version.js":
/*!*******************************!*\
  !*** ../utils/lib/version.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.LIB_VERSION = void 0;
exports.LIB_VERSION = '0.0.1';

/***/ }),

/***/ "../../node_modules/jsbi/dist/jsbi-umd.js":
/*!************************************************!*\
  !*** ../../node_modules/jsbi/dist/jsbi-umd.js ***!
  \************************************************/
/***/ (function(module) {

(function(e,t){ true?module.exports=t():0})(this,function(){"use strict";var e=Math.imul,t=Math.clz32;function i(e){"@babel/helpers - typeof";return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var _,n=0;n<t.length;n++)_=t[n],_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(e,_.key,_)}function l(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}function g(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}function a(e){return a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},a(e)}function u(e,t){return u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},u(e,t)}function s(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function r(){return r=s()?Reflect.construct:function(e,t,i){var _=[null];_.push.apply(_,t);var n=Function.bind.apply(e,_),l=new n;return i&&u(l,i.prototype),l},r.apply(null,arguments)}function d(e){return-1!==Function.toString.call(e).indexOf("[native code]")}function h(e){var t="function"==typeof Map?new Map:void 0;return h=function(e){function i(){return r(e,arguments,a(this).constructor)}if(null===e||!d(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!=typeof t){if(t.has(e))return t.get(e);t.set(e,i)}return i.prototype=Object.create(e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),u(i,e)},h(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return b(e)}function c(e){var t=s();return function(){var i,_=a(e);if(t){var n=a(this).constructor;i=Reflect.construct(_,arguments,n)}else i=_.apply(this,arguments);return m(this,i)}}function v(e,t){return y(e)||f(e,t)||D(e,t)||k()}function y(e){if(Array.isArray(e))return e}function f(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var _,n,l=[],g=!0,o=!1;try{for(i=i.call(e);!(g=(_=i.next()).done)&&(l.push(_.value),!(t&&l.length===t));g=!0);}catch(e){o=!0,n=e}finally{try{g||null==i["return"]||i["return"]()}finally{if(o)throw n}}return l}}function D(e,t){if(e){if("string"==typeof e)return p(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?p(e,t):void 0}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var _=0,n=Array(t);_<t;_++)n[_]=e[_];return n}function k(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function B(e,t){var _="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!_){if(Array.isArray(e)||(_=D(e))||t&&e&&"number"==typeof e.length){_&&(e=_);var n=0,l=function(){};return{s:l,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(t){throw t},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var g,a=!0,u=!1;return{s:function(){_=_.call(e)},n:function(){var e=_.next();return a=e.done,e},e:function(t){u=!0,g=t},f:function(){try{a||null==_.return||_.return()}finally{if(u)throw g}}}}var S=function(e){var t=Math.abs,n=Math.max,o=Math.floor;function a(e,t){var i;if(_(this,a),i=u.call(this,e),i.sign=t,Object.setPrototypeOf(b(i),a.prototype),e>a.__kMaxLength)throw new RangeError("Maximum BigInt size exceeded");return i}g(a,e);var u=c(a);return l(a,[{key:"toDebugString",value:function(){var e,t=["BigInt["],i=B(this);try{for(i.s();!(e=i.n()).done;){var _=e.value;t.push((_?(_>>>0).toString(16):_)+", ")}}catch(e){i.e(e)}finally{i.f()}return t.push("]"),t.join("")}},{key:"toString",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:10;if(2>e||36<e)throw new RangeError("toString() radix argument must be between 2 and 36");return 0===this.length?"0":0==(e&e-1)?a.__toStringBasePowerOfTwo(this,e):a.__toStringGeneric(this,e,!1)}},{key:"valueOf",value:function(){throw new Error("Convert JSBI instances to native numbers using `toNumber`.")}},{key:"__copy",value:function(){for(var e=new a(this.length,this.sign),t=0;t<this.length;t++)e[t]=this[t];return e}},{key:"__trim",value:function(){for(var e=this.length,t=this[e-1];0===t;)e--,t=this[e-1],this.pop();return 0===e&&(this.sign=!1),this}},{key:"__initializeDigits",value:function(){for(var e=0;e<this.length;e++)this[e]=0}},{key:"__clzmsd",value:function(){return a.__clz30(this.__digit(this.length-1))}},{key:"__inplaceMultiplyAdd",value:function(e,t,_){_>this.length&&(_=this.length);for(var n=32767&e,l=e>>>15,g=0,o=t,u=0;u<_;u++){var s=this.__digit(u),r=32767&s,d=s>>>15,h=a.__imul(r,n),b=a.__imul(r,l),m=a.__imul(d,n),c=a.__imul(d,l),v=o+h+g;g=v>>>30,v&=1073741823,v+=((32767&b)<<15)+((32767&m)<<15),g+=v>>>30,o=c+(b>>>15)+(m>>>15),this.__setDigit(u,1073741823&v)}if(0!==g||0!==o)throw new Error("implementation bug")}},{key:"__inplaceAdd",value:function(e,t,_){for(var n,l=0,g=0;g<_;g++)n=this.__halfDigit(t+g)+e.__halfDigit(g)+l,l=n>>>15,this.__setHalfDigit(t+g,32767&n);return l}},{key:"__inplaceSub",value:function(e,t,_){var n=0;if(1&t){t>>=1;for(var l=this.__digit(t),g=32767&l,o=0;o<_-1>>>1;o++){var a=e.__digit(o),u=(l>>>15)-(32767&a)-n;n=1&u>>>15,this.__setDigit(t+o,(32767&u)<<15|32767&g),l=this.__digit(t+o+1),g=(32767&l)-(a>>>15)-n,n=1&g>>>15}var s=e.__digit(o),r=(l>>>15)-(32767&s)-n;n=1&r>>>15,this.__setDigit(t+o,(32767&r)<<15|32767&g);if(t+o+1>=this.length)throw new RangeError("out of bounds");0==(1&_)&&(l=this.__digit(t+o+1),g=(32767&l)-(s>>>15)-n,n=1&g>>>15,this.__setDigit(t+e.length,1073709056&l|32767&g))}else{t>>=1;for(var d=0;d<e.length-1;d++){var h=this.__digit(t+d),b=e.__digit(d),m=(32767&h)-(32767&b)-n;n=1&m>>>15;var c=(h>>>15)-(b>>>15)-n;n=1&c>>>15,this.__setDigit(t+d,(32767&c)<<15|32767&m)}var v=this.__digit(t+d),y=e.__digit(d),f=(32767&v)-(32767&y)-n;n=1&f>>>15;var D=0;0==(1&_)&&(D=(v>>>15)-(y>>>15)-n,n=1&D>>>15),this.__setDigit(t+d,(32767&D)<<15|32767&f)}return n}},{key:"__inplaceRightShift",value:function(e){if(0!==e){for(var t,_=this.__digit(0)>>>e,n=this.length-1,l=0;l<n;l++)t=this.__digit(l+1),this.__setDigit(l,1073741823&t<<30-e|_),_=t>>>e;this.__setDigit(n,_)}}},{key:"__digit",value:function(e){return this[e]}},{key:"__unsignedDigit",value:function(e){return this[e]>>>0}},{key:"__setDigit",value:function(e,t){this[e]=0|t}},{key:"__setDigitGrow",value:function(e,t){this[e]=0|t}},{key:"__halfDigitLength",value:function(){var e=this.length;return 32767>=this.__unsignedDigit(e-1)?2*e-1:2*e}},{key:"__halfDigit",value:function(e){return 32767&this[e>>>1]>>>15*(1&e)}},{key:"__setHalfDigit",value:function(e,t){var i=e>>>1,_=this.__digit(i),n=1&e?32767&_|t<<15:1073709056&_|32767&t;this.__setDigit(i,n)}}],[{key:"BigInt",value:function(e){var t=Number.isFinite;if("number"==typeof e){if(0===e)return a.__zero();if(a.__isOneDigitInt(e))return 0>e?a.__oneDigit(-e,!0):a.__oneDigit(e,!1);if(!t(e)||o(e)!==e)throw new RangeError("The number "+e+" cannot be converted to BigInt because it is not an integer");return a.__fromDouble(e)}if("string"==typeof e){var _=a.__fromString(e);if(null===_)throw new SyntaxError("Cannot convert "+e+" to a BigInt");return _}if("boolean"==typeof e)return!0===e?a.__oneDigit(1,!1):a.__zero();if("object"===i(e)){if(e.constructor===a)return e;var n=a.__toPrimitive(e);return a.BigInt(n)}throw new TypeError("Cannot convert "+e+" to a BigInt")}},{key:"toNumber",value:function(e){var t=e.length;if(0===t)return 0;if(1===t){var i=e.__unsignedDigit(0);return e.sign?-i:i}var _=e.__digit(t-1),n=a.__clz30(_),l=30*t-n;if(1024<l)return e.sign?-Infinity:1/0;var g=l-1,o=_,u=t-1,s=n+3,r=32===s?0:o<<s;r>>>=12;var d=s-12,h=12<=s?0:o<<20+s,b=20+s;for(0<d&&0<u&&(u--,o=e.__digit(u),r|=o>>>30-d,h=o<<d+2,b=d+2);0<b&&0<u;)u--,o=e.__digit(u),h|=30<=b?o<<b-30:o>>>30-b,b-=30;var m=a.__decideRounding(e,b,u,o);if((1===m||0===m&&1==(1&h))&&(h=h+1>>>0,0===h&&(r++,0!=r>>>20&&(r=0,g++,1023<g))))return e.sign?-Infinity:1/0;var c=e.sign?-2147483648:0;return g=g+1023<<20,a.__kBitConversionInts[1]=c|g|r,a.__kBitConversionInts[0]=h,a.__kBitConversionDouble[0]}},{key:"unaryMinus",value:function(e){if(0===e.length)return e;var t=e.__copy();return t.sign=!e.sign,t}},{key:"bitwiseNot",value:function(e){return e.sign?a.__absoluteSubOne(e).__trim():a.__absoluteAddOne(e,!0)}},{key:"exponentiate",value:function(e,t){if(t.sign)throw new RangeError("Exponent must be positive");if(0===t.length)return a.__oneDigit(1,!1);if(0===e.length)return e;if(1===e.length&&1===e.__digit(0))return e.sign&&0==(1&t.__digit(0))?a.unaryMinus(e):e;if(1<t.length)throw new RangeError("BigInt too big");var i=t.__unsignedDigit(0);if(1===i)return e;if(i>=a.__kMaxLengthBits)throw new RangeError("BigInt too big");if(1===e.length&&2===e.__digit(0)){var _=1+(0|i/30),n=e.sign&&0!=(1&i),l=new a(_,n);l.__initializeDigits();var g=1<<i%30;return l.__setDigit(_-1,g),l}var o=null,u=e;for(0!=(1&i)&&(o=e),i>>=1;0!==i;i>>=1)u=a.multiply(u,u),0!=(1&i)&&(null===o?o=u:o=a.multiply(o,u));return o}},{key:"multiply",value:function(e,t){if(0===e.length)return e;if(0===t.length)return t;var _=e.length+t.length;30<=e.__clzmsd()+t.__clzmsd()&&_--;var n=new a(_,e.sign!==t.sign);n.__initializeDigits();for(var l=0;l<e.length;l++)a.__multiplyAccumulate(t,e.__digit(l),n,l);return n.__trim()}},{key:"divide",value:function(e,t){if(0===t.length)throw new RangeError("Division by zero");if(0>a.__absoluteCompare(e,t))return a.__zero();var i,_=e.sign!==t.sign,n=t.__unsignedDigit(0);if(1===t.length&&32767>=n){if(1===n)return _===e.sign?e:a.unaryMinus(e);i=a.__absoluteDivSmall(e,n,null)}else i=a.__absoluteDivLarge(e,t,!0,!1);return i.sign=_,i.__trim()}},{key:"remainder",value:function i(e,t){if(0===t.length)throw new RangeError("Division by zero");if(0>a.__absoluteCompare(e,t))return e;var _=t.__unsignedDigit(0);if(1===t.length&&32767>=_){if(1===_)return a.__zero();var n=a.__absoluteModSmall(e,_);return 0===n?a.__zero():a.__oneDigit(n,e.sign)}var i=a.__absoluteDivLarge(e,t,!1,!0);return i.sign=e.sign,i.__trim()}},{key:"add",value:function(e,t){var i=e.sign;return i===t.sign?a.__absoluteAdd(e,t,i):0<=a.__absoluteCompare(e,t)?a.__absoluteSub(e,t,i):a.__absoluteSub(t,e,!i)}},{key:"subtract",value:function(e,t){var i=e.sign;return i===t.sign?0<=a.__absoluteCompare(e,t)?a.__absoluteSub(e,t,i):a.__absoluteSub(t,e,!i):a.__absoluteAdd(e,t,i)}},{key:"leftShift",value:function(e,t){return 0===t.length||0===e.length?e:t.sign?a.__rightShiftByAbsolute(e,t):a.__leftShiftByAbsolute(e,t)}},{key:"signedRightShift",value:function(e,t){return 0===t.length||0===e.length?e:t.sign?a.__leftShiftByAbsolute(e,t):a.__rightShiftByAbsolute(e,t)}},{key:"unsignedRightShift",value:function(){throw new TypeError("BigInts have no unsigned right shift; use >> instead")}},{key:"lessThan",value:function(e,t){return 0>a.__compareToBigInt(e,t)}},{key:"lessThanOrEqual",value:function(e,t){return 0>=a.__compareToBigInt(e,t)}},{key:"greaterThan",value:function(e,t){return 0<a.__compareToBigInt(e,t)}},{key:"greaterThanOrEqual",value:function(e,t){return 0<=a.__compareToBigInt(e,t)}},{key:"equal",value:function(e,t){if(e.sign!==t.sign)return!1;if(e.length!==t.length)return!1;for(var _=0;_<e.length;_++)if(e.__digit(_)!==t.__digit(_))return!1;return!0}},{key:"notEqual",value:function(e,t){return!a.equal(e,t)}},{key:"bitwiseAnd",value:function(e,t){if(!e.sign&&!t.sign)return a.__absoluteAnd(e,t).__trim();if(e.sign&&t.sign){var i=n(e.length,t.length)+1,_=a.__absoluteSubOne(e,i),l=a.__absoluteSubOne(t);return _=a.__absoluteOr(_,l,_),a.__absoluteAddOne(_,!0,_).__trim()}if(e.sign){var g=[t,e];e=g[0],t=g[1]}return a.__absoluteAndNot(e,a.__absoluteSubOne(t)).__trim()}},{key:"bitwiseXor",value:function(e,t){if(!e.sign&&!t.sign)return a.__absoluteXor(e,t).__trim();if(e.sign&&t.sign){var i=n(e.length,t.length),_=a.__absoluteSubOne(e,i),l=a.__absoluteSubOne(t);return a.__absoluteXor(_,l,_).__trim()}var g=n(e.length,t.length)+1;if(e.sign){var o=[t,e];e=o[0],t=o[1]}var u=a.__absoluteSubOne(t,g);return u=a.__absoluteXor(u,e,u),a.__absoluteAddOne(u,!0,u).__trim()}},{key:"bitwiseOr",value:function(e,t){var i=n(e.length,t.length);if(!e.sign&&!t.sign)return a.__absoluteOr(e,t).__trim();if(e.sign&&t.sign){var _=a.__absoluteSubOne(e,i),l=a.__absoluteSubOne(t);return _=a.__absoluteAnd(_,l,_),a.__absoluteAddOne(_,!0,_).__trim()}if(e.sign){var g=[t,e];e=g[0],t=g[1]}var o=a.__absoluteSubOne(t,i);return o=a.__absoluteAndNot(o,e,o),a.__absoluteAddOne(o,!0,o).__trim()}},{key:"asIntN",value:function(e,t){if(0===t.length)return t;if(e=o(e),0>e)throw new RangeError("Invalid value: not (convertible to) a safe integer");if(0===e)return a.__zero();if(e>=a.__kMaxLengthBits)return t;var _=0|(e+29)/30;if(t.length<_)return t;var l=t.__unsignedDigit(_-1),g=1<<(e-1)%30;if(t.length===_&&l<g)return t;if(!((l&g)===g))return a.__truncateToNBits(e,t);if(!t.sign)return a.__truncateAndSubFromPowerOfTwo(e,t,!0);if(0==(l&g-1)){for(var u=_-2;0<=u;u--)if(0!==t.__digit(u))return a.__truncateAndSubFromPowerOfTwo(e,t,!1);return t.length===_&&l===g?t:a.__truncateToNBits(e,t)}return a.__truncateAndSubFromPowerOfTwo(e,t,!1)}},{key:"asUintN",value:function(e,t){if(0===t.length)return t;if(e=o(e),0>e)throw new RangeError("Invalid value: not (convertible to) a safe integer");if(0===e)return a.__zero();if(t.sign){if(e>a.__kMaxLengthBits)throw new RangeError("BigInt too big");return a.__truncateAndSubFromPowerOfTwo(e,t,!1)}if(e>=a.__kMaxLengthBits)return t;var i=0|(e+29)/30;if(t.length<i)return t;var _=e%30;if(t.length==i){if(0===_)return t;var l=t.__digit(i-1);if(0==l>>>_)return t}return a.__truncateToNBits(e,t)}},{key:"ADD",value:function(e,t){if(e=a.__toPrimitive(e),t=a.__toPrimitive(t),"string"==typeof e)return"string"!=typeof t&&(t=t.toString()),e+t;if("string"==typeof t)return e.toString()+t;if(e=a.__toNumeric(e),t=a.__toNumeric(t),a.__isBigInt(e)&&a.__isBigInt(t))return a.add(e,t);if("number"==typeof e&&"number"==typeof t)return e+t;throw new TypeError("Cannot mix BigInt and other types, use explicit conversions")}},{key:"LT",value:function(e,t){return a.__compare(e,t,0)}},{key:"LE",value:function(e,t){return a.__compare(e,t,1)}},{key:"GT",value:function(e,t){return a.__compare(e,t,2)}},{key:"GE",value:function(e,t){return a.__compare(e,t,3)}},{key:"EQ",value:function(e,t){for(;;){if(a.__isBigInt(e))return a.__isBigInt(t)?a.equal(e,t):a.EQ(t,e);if("number"==typeof e){if(a.__isBigInt(t))return a.__equalToNumber(t,e);if("object"!==i(t))return e==t;t=a.__toPrimitive(t)}else if("string"==typeof e){if(a.__isBigInt(t))return e=a.__fromString(e),null!==e&&a.equal(e,t);if("object"!==i(t))return e==t;t=a.__toPrimitive(t)}else if("boolean"==typeof e){if(a.__isBigInt(t))return a.__equalToNumber(t,+e);if("object"!==i(t))return e==t;t=a.__toPrimitive(t)}else if("symbol"===i(e)){if(a.__isBigInt(t))return!1;if("object"!==i(t))return e==t;t=a.__toPrimitive(t)}else if("object"===i(e)){if("object"===i(t)&&t.constructor!==a)return e==t;e=a.__toPrimitive(e)}else return e==t}}},{key:"NE",value:function(e,t){return!a.EQ(e,t)}},{key:"DataViewGetBigInt64",value:function(e,t){var i=!!(2<arguments.length&&void 0!==arguments[2])&&arguments[2];return a.asIntN(64,a.DataViewGetBigUint64(e,t,i))}},{key:"DataViewGetBigUint64",value:function(e,t){var i=!!(2<arguments.length&&void 0!==arguments[2])&&arguments[2],_=i?[4,0]:[0,4],n=v(_,2),g=n[0],o=n[1],l=e.getUint32(t+g,i),u=e.getUint32(t+o,i),s=new a(3,!1);return s.__setDigit(0,1073741823&u),s.__setDigit(1,(268435455&l)<<2|u>>>30),s.__setDigit(2,l>>>28),s.__trim()}},{key:"DataViewSetBigInt64",value:function(e,t,i){var _=!!(3<arguments.length&&void 0!==arguments[3])&&arguments[3];a.DataViewSetBigUint64(e,t,i,_)}},{key:"DataViewSetBigUint64",value:function(e,t,i){var _=!!(3<arguments.length&&void 0!==arguments[3])&&arguments[3];i=a.asUintN(64,i);var n=0,g=0;if(0<i.length&&(g=i.__digit(0),1<i.length)){var o=i.__digit(1);g|=o<<30,n=o>>>2,2<i.length&&(n|=i.__digit(2)<<28)}var u=_?[4,0]:[0,4],s=v(u,2),r=s[0],d=s[1];e.setUint32(t+r,n,_),e.setUint32(t+d,g,_)}},{key:"__zero",value:function(){return new a(0,!1)}},{key:"__oneDigit",value:function(e,t){var i=new a(1,t);return i.__setDigit(0,e),i}},{key:"__decideRounding",value:function(e,t,i,_){if(0<t)return-1;var n;if(0>t)n=-t-1;else{if(0===i)return-1;i--,_=e.__digit(i),n=29}var l=1<<n;if(0==(_&l))return-1;if(l-=1,0!=(_&l))return 1;for(;0<i;)if(i--,0!==e.__digit(i))return 1;return 0}},{key:"__fromDouble",value:function(e){a.__kBitConversionDouble[0]=e;var t,i=2047&a.__kBitConversionInts[1]>>>20,_=i-1023,n=(0|_/30)+1,l=new a(n,0>e),g=1048575&a.__kBitConversionInts[1]|1048576,o=a.__kBitConversionInts[0],u=20,s=_%30,r=0;if(s<u){var d=u-s;r=d+32,t=g>>>d,g=g<<32-d|o>>>d,o<<=32-d}else if(s===u)r=32,t=g,g=o,o=0;else{var h=s-u;r=32-h,t=g<<h|o>>>32-h,g=o<<h,o=0}l.__setDigit(n-1,t);for(var b=n-2;0<=b;b--)0<r?(r-=30,t=g>>>2,g=g<<30|o>>>2,o<<=30):t=0,l.__setDigit(b,t);return l.__trim()}},{key:"__isWhitespace",value:function(e){return!!(13>=e&&9<=e)||(159>=e?32==e:131071>=e?160==e||5760==e:196607>=e?(e&=131071,10>=e||40==e||41==e||47==e||95==e||4096==e):65279==e)}},{key:"__fromString",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,i=0,_=e.length,n=0;if(n===_)return a.__zero();for(var l=e.charCodeAt(n);a.__isWhitespace(l);){if(++n===_)return a.__zero();l=e.charCodeAt(n)}if(43===l){if(++n===_)return null;l=e.charCodeAt(n),i=1}else if(45===l){if(++n===_)return null;l=e.charCodeAt(n),i=-1}if(0===t){if(t=10,48===l){if(++n===_)return a.__zero();if(l=e.charCodeAt(n),88===l||120===l){if(t=16,++n===_)return null;l=e.charCodeAt(n)}else if(79===l||111===l){if(t=8,++n===_)return null;l=e.charCodeAt(n)}else if(66===l||98===l){if(t=2,++n===_)return null;l=e.charCodeAt(n)}}}else if(16===t&&48===l){if(++n===_)return a.__zero();if(l=e.charCodeAt(n),88===l||120===l){if(++n===_)return null;l=e.charCodeAt(n)}}if(0!==i&&10!==t)return null;for(;48===l;){if(++n===_)return a.__zero();l=e.charCodeAt(n)}var g=_-n,o=a.__kMaxBitsPerChar[t],u=a.__kBitsPerCharTableMultiplier-1;if(g>1073741824/o)return null;var s=o*g+u>>>a.__kBitsPerCharTableShift,r=new a(0|(s+29)/30,!1),h=10>t?t:10,b=10<t?t-10:0;if(0==(t&t-1)){o>>=a.__kBitsPerCharTableShift;var c=[],v=[],y=!1;do{for(var f,D=0,p=0;;){if(f=void 0,l-48>>>0<h)f=l-48;else if((32|l)-97>>>0<b)f=(32|l)-87;else{y=!0;break}if(p+=o,D=D<<o|f,++n===_){y=!0;break}if(l=e.charCodeAt(n),30<p+o)break}c.push(D),v.push(p)}while(!y);a.__fillFromParts(r,c,v)}else{r.__initializeDigits();var k=!1,B=0;do{for(var S,C=0,I=1;;){if(S=void 0,l-48>>>0<h)S=l-48;else if((32|l)-97>>>0<b)S=(32|l)-87;else{k=!0;break}var A=I*t;if(1073741823<A)break;if(I=A,C=C*t+S,B++,++n===_){k=!0;break}l=e.charCodeAt(n)}u=30*a.__kBitsPerCharTableMultiplier-1;var m=0|(o*B+u>>>a.__kBitsPerCharTableShift)/30;r.__inplaceMultiplyAdd(I,C,m)}while(!k)}if(n!==_){if(!a.__isWhitespace(l))return null;for(n++;n<_;n++)if(l=e.charCodeAt(n),!a.__isWhitespace(l))return null}return r.sign=-1===i,r.__trim()}},{key:"__fillFromParts",value:function(e,t,_){for(var n=0,l=0,g=0,o=t.length-1;0<=o;o--){var a=t[o],u=_[o];l|=a<<g,g+=u,30===g?(e.__setDigit(n++,l),g=0,l=0):30<g&&(e.__setDigit(n++,1073741823&l),g-=30,l=a>>>u-g)}if(0!==l){if(n>=e.length)throw new Error("implementation bug");e.__setDigit(n++,l)}for(;n<e.length;n++)e.__setDigit(n,0)}},{key:"__toStringBasePowerOfTwo",value:function(e,t){var _=e.length,n=t-1;n=(85&n>>>1)+(85&n),n=(51&n>>>2)+(51&n),n=(15&n>>>4)+(15&n);var l=n,g=t-1,o=e.__digit(_-1),u=a.__clz30(o),s=0|(30*_-u+l-1)/l;if(e.sign&&s++,268435456<s)throw new Error("string too long");for(var r=Array(s),d=s-1,h=0,b=0,m=0;m<_-1;m++){var c=e.__digit(m),v=(h|c<<b)&g;r[d--]=a.__kConversionChars[v];var y=l-b;for(h=c>>>y,b=30-y;b>=l;)r[d--]=a.__kConversionChars[h&g],h>>>=l,b-=l}var f=(h|o<<b)&g;for(r[d--]=a.__kConversionChars[f],h=o>>>l-b;0!==h;)r[d--]=a.__kConversionChars[h&g],h>>>=l;if(e.sign&&(r[d--]="-"),-1!==d)throw new Error("implementation bug");return r.join("")}},{key:"__toStringGeneric",value:function(e,t,_){var n=e.length;if(0===n)return"";if(1===n){var l=e.__unsignedDigit(0).toString(t);return!1===_&&e.sign&&(l="-"+l),l}var g=30*n-a.__clz30(e.__digit(n-1)),o=a.__kMaxBitsPerChar[t],u=o-1,s=g*a.__kBitsPerCharTableMultiplier;s+=u-1,s=0|s/u;var r,d,h=s+1>>1,b=a.exponentiate(a.__oneDigit(t,!1),a.__oneDigit(h,!1)),m=b.__unsignedDigit(0);if(1===b.length&&32767>=m){r=new a(e.length,!1),r.__initializeDigits();for(var c,v=0,y=2*e.length-1;0<=y;y--)c=v<<15|e.__halfDigit(y),r.__setHalfDigit(y,0|c/m),v=0|c%m;d=v.toString(t)}else{var f=a.__absoluteDivLarge(e,b,!0,!0);r=f.quotient;var D=f.remainder.__trim();d=a.__toStringGeneric(D,t,!0)}r.__trim();for(var p=a.__toStringGeneric(r,t,!0);d.length<h;)d="0"+d;return!1===_&&e.sign&&(p="-"+p),p+d}},{key:"__unequalSign",value:function(e){return e?-1:1}},{key:"__absoluteGreater",value:function(e){return e?-1:1}},{key:"__absoluteLess",value:function(e){return e?1:-1}},{key:"__compareToBigInt",value:function(e,t){var i=e.sign;if(i!==t.sign)return a.__unequalSign(i);var _=a.__absoluteCompare(e,t);return 0<_?a.__absoluteGreater(i):0>_?a.__absoluteLess(i):0}},{key:"__compareToNumber",value:function(e,i){if(a.__isOneDigitInt(i)){var _=e.sign,n=0>i;if(_!==n)return a.__unequalSign(_);if(0===e.length){if(n)throw new Error("implementation bug");return 0===i?0:-1}if(1<e.length)return a.__absoluteGreater(_);var l=t(i),g=e.__unsignedDigit(0);return g>l?a.__absoluteGreater(_):g<l?a.__absoluteLess(_):0}return a.__compareToDouble(e,i)}},{key:"__compareToDouble",value:function(e,t){if(t!==t)return t;if(t===1/0)return-1;if(t===-Infinity)return 1;var i=e.sign;if(i!==0>t)return a.__unequalSign(i);if(0===t)throw new Error("implementation bug: should be handled elsewhere");if(0===e.length)return-1;a.__kBitConversionDouble[0]=t;var _=2047&a.__kBitConversionInts[1]>>>20;if(2047==_)throw new Error("implementation bug: handled elsewhere");var n=_-1023;if(0>n)return a.__absoluteGreater(i);var l=e.length,g=e.__digit(l-1),o=a.__clz30(g),u=30*l-o,s=n+1;if(u<s)return a.__absoluteLess(i);if(u>s)return a.__absoluteGreater(i);var r=1048576|1048575&a.__kBitConversionInts[1],d=a.__kBitConversionInts[0],h=20,b=29-o;if(b!==(0|(u-1)%30))throw new Error("implementation bug");var m,c=0;if(b<h){var v=h-b;c=v+32,m=r>>>v,r=r<<32-v|d>>>v,d<<=32-v}else if(b===h)c=32,m=r,r=d,d=0;else{var y=b-h;c=32-y,m=r<<y|d>>>32-y,r=d<<y,d=0}if(g>>>=0,m>>>=0,g>m)return a.__absoluteGreater(i);if(g<m)return a.__absoluteLess(i);for(var f=l-2;0<=f;f--){0<c?(c-=30,m=r>>>2,r=r<<30|d>>>2,d<<=30):m=0;var D=e.__unsignedDigit(f);if(D>m)return a.__absoluteGreater(i);if(D<m)return a.__absoluteLess(i)}if(0!==r||0!==d){if(0===c)throw new Error("implementation bug");return a.__absoluteLess(i)}return 0}},{key:"__equalToNumber",value:function(e,i){return a.__isOneDigitInt(i)?0===i?0===e.length:1===e.length&&e.sign===0>i&&e.__unsignedDigit(0)===t(i):0===a.__compareToDouble(e,i)}},{key:"__comparisonResultToBool",value:function(e,t){return 0===t?0>e:1===t?0>=e:2===t?0<e:3===t?0<=e:void 0}},{key:"__compare",value:function(e,t,i){if(e=a.__toPrimitive(e),t=a.__toPrimitive(t),"string"==typeof e&&"string"==typeof t)switch(i){case 0:return e<t;case 1:return e<=t;case 2:return e>t;case 3:return e>=t;}if(a.__isBigInt(e)&&"string"==typeof t)return t=a.__fromString(t),null!==t&&a.__comparisonResultToBool(a.__compareToBigInt(e,t),i);if("string"==typeof e&&a.__isBigInt(t))return e=a.__fromString(e),null!==e&&a.__comparisonResultToBool(a.__compareToBigInt(e,t),i);if(e=a.__toNumeric(e),t=a.__toNumeric(t),a.__isBigInt(e)){if(a.__isBigInt(t))return a.__comparisonResultToBool(a.__compareToBigInt(e,t),i);if("number"!=typeof t)throw new Error("implementation bug");return a.__comparisonResultToBool(a.__compareToNumber(e,t),i)}if("number"!=typeof e)throw new Error("implementation bug");if(a.__isBigInt(t))return a.__comparisonResultToBool(a.__compareToNumber(t,e),2^i);if("number"!=typeof t)throw new Error("implementation bug");return 0===i?e<t:1===i?e<=t:2===i?e>t:3===i?e>=t:void 0}},{key:"__absoluteAdd",value:function(e,t,_){if(e.length<t.length)return a.__absoluteAdd(t,e,_);if(0===e.length)return e;if(0===t.length)return e.sign===_?e:a.unaryMinus(e);var n=e.length;(0===e.__clzmsd()||t.length===e.length&&0===t.__clzmsd())&&n++;for(var l,g=new a(n,_),o=0,u=0;u<t.length;u++)l=e.__digit(u)+t.__digit(u)+o,o=l>>>30,g.__setDigit(u,1073741823&l);for(;u<e.length;u++){var s=e.__digit(u)+o;o=s>>>30,g.__setDigit(u,1073741823&s)}return u<g.length&&g.__setDigit(u,o),g.__trim()}},{key:"__absoluteSub",value:function(e,t,_){if(0===e.length)return e;if(0===t.length)return e.sign===_?e:a.unaryMinus(e);for(var n,l=new a(e.length,_),g=0,o=0;o<t.length;o++)n=e.__digit(o)-t.__digit(o)-g,g=1&n>>>30,l.__setDigit(o,1073741823&n);for(;o<e.length;o++){var u=e.__digit(o)-g;g=1&u>>>30,l.__setDigit(o,1073741823&u)}return l.__trim()}},{key:"__absoluteAddOne",value:function(e,t){var _=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null,n=e.length;null===_?_=new a(n,t):_.sign=t;for(var l,g=1,o=0;o<n;o++)l=e.__digit(o)+g,g=l>>>30,_.__setDigit(o,1073741823&l);return 0!==g&&_.__setDigitGrow(n,1),_}},{key:"__absoluteSubOne",value:function(e,t){var _=e.length;t=t||_;for(var n,l=new a(t,!1),g=1,o=0;o<_;o++)n=e.__digit(o)-g,g=1&n>>>30,l.__setDigit(o,1073741823&n);if(0!==g)throw new Error("implementation bug");for(var u=_;u<t;u++)l.__setDigit(u,0);return l}},{key:"__absoluteAnd",value:function(e,t){var _=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null,n=e.length,l=t.length,g=l;if(n<l){g=n;var o=e,u=n;e=t,n=l,t=o,l=u}var s=g;null===_?_=new a(s,!1):s=_.length;for(var r=0;r<g;r++)_.__setDigit(r,e.__digit(r)&t.__digit(r));for(;r<s;r++)_.__setDigit(r,0);return _}},{key:"__absoluteAndNot",value:function(e,t){var _=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null,n=e.length,l=t.length,g=l;n<l&&(g=n);var o=n;null===_?_=new a(o,!1):o=_.length;for(var u=0;u<g;u++)_.__setDigit(u,e.__digit(u)&~t.__digit(u));for(;u<n;u++)_.__setDigit(u,e.__digit(u));for(;u<o;u++)_.__setDigit(u,0);return _}},{key:"__absoluteOr",value:function(e,t){var _=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null,n=e.length,l=t.length,g=l;if(n<l){g=n;var o=e,u=n;e=t,n=l,t=o,l=u}var s=n;null===_?_=new a(s,!1):s=_.length;for(var r=0;r<g;r++)_.__setDigit(r,e.__digit(r)|t.__digit(r));for(;r<n;r++)_.__setDigit(r,e.__digit(r));for(;r<s;r++)_.__setDigit(r,0);return _}},{key:"__absoluteXor",value:function(e,t){var _=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null,n=e.length,l=t.length,g=l;if(n<l){g=n;var o=e,u=n;e=t,n=l,t=o,l=u}var s=n;null===_?_=new a(s,!1):s=_.length;for(var r=0;r<g;r++)_.__setDigit(r,e.__digit(r)^t.__digit(r));for(;r<n;r++)_.__setDigit(r,e.__digit(r));for(;r<s;r++)_.__setDigit(r,0);return _}},{key:"__absoluteCompare",value:function(e,t){var _=e.length-t.length;if(0!=_)return _;for(var n=e.length-1;0<=n&&e.__digit(n)===t.__digit(n);)n--;return 0>n?0:e.__unsignedDigit(n)>t.__unsignedDigit(n)?1:-1}},{key:"__multiplyAccumulate",value:function(e,t,_,n){if(0!==t){for(var l=32767&t,g=t>>>15,o=0,u=0,s=0;s<e.length;s++,n++){var r=_.__digit(n),d=e.__digit(s),h=32767&d,b=d>>>15,m=a.__imul(h,l),c=a.__imul(h,g),v=a.__imul(b,l),y=a.__imul(b,g);r+=u+m+o,o=r>>>30,r&=1073741823,r+=((32767&c)<<15)+((32767&v)<<15),o+=r>>>30,u=y+(c>>>15)+(v>>>15),_.__setDigit(n,1073741823&r)}for(;0!==o||0!==u;n++){var f=_.__digit(n);f+=o+u,u=0,o=f>>>30,_.__setDigit(n,1073741823&f)}}}},{key:"__internalMultiplyAdd",value:function(e,t,_,l,g){for(var o=_,u=0,s=0;s<l;s++){var d=e.__digit(s),h=a.__imul(32767&d,t),b=a.__imul(d>>>15,t),m=h+((32767&b)<<15)+u+o;o=m>>>30,u=b>>>15,g.__setDigit(s,1073741823&m)}if(g.length>l)for(g.__setDigit(l++,o+u);l<g.length;)g.__setDigit(l++,0);else if(0!==o+u)throw new Error("implementation bug")}},{key:"__absoluteDivSmall",value:function(e,t){var _=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;null===_&&(_=new a(e.length,!1));for(var n=0,l=2*e.length-1;0<=l;l-=2){var g=(n<<15|e.__halfDigit(l))>>>0,o=0|g/t;n=0|g%t,g=(n<<15|e.__halfDigit(l-1))>>>0;var u=0|g/t;n=0|g%t,_.__setDigit(l>>>1,o<<15|u)}return _}},{key:"__absoluteModSmall",value:function(e,t){for(var _,n=0,l=2*e.length-1;0<=l;l--)_=(n<<15|e.__halfDigit(l))>>>0,n=0|_%t;return n}},{key:"__absoluteDivLarge",value:function(e,t,i,_){var l=t.__halfDigitLength(),n=t.length,g=e.__halfDigitLength()-l,o=null;i&&(o=new a(g+2>>>1,!1),o.__initializeDigits());var s=new a(l+2>>>1,!1);s.__initializeDigits();var r=a.__clz15(t.__halfDigit(l-1));0<r&&(t=a.__specialLeftShift(t,r,0));for(var d=a.__specialLeftShift(e,r,1),u=t.__halfDigit(l-1),h=0,b=g;0<=b;b--){var m=32767,v=d.__halfDigit(b+l);if(v!==u){var y=(v<<15|d.__halfDigit(b+l-1))>>>0;m=0|y/u;for(var f=0|y%u,D=t.__halfDigit(l-2),p=d.__halfDigit(b+l-2);a.__imul(m,D)>>>0>(f<<16|p)>>>0&&(m--,f+=u,!(32767<f)););}a.__internalMultiplyAdd(t,m,0,n,s);var k=d.__inplaceSub(s,b,l+1);0!==k&&(k=d.__inplaceAdd(t,b,l),d.__setHalfDigit(b+l,32767&d.__halfDigit(b+l)+k),m--),i&&(1&b?h=m<<15:o.__setDigit(b>>>1,h|m))}if(_)return d.__inplaceRightShift(r),i?{quotient:o,remainder:d}:d;if(i)return o;throw new Error("unreachable")}},{key:"__clz15",value:function(e){return a.__clz30(e)-15}},{key:"__specialLeftShift",value:function(e,t,_){var l=e.length,n=new a(l+_,!1);if(0===t){for(var g=0;g<l;g++)n.__setDigit(g,e.__digit(g));return 0<_&&n.__setDigit(l,0),n}for(var o,u=0,s=0;s<l;s++)o=e.__digit(s),n.__setDigit(s,1073741823&o<<t|u),u=o>>>30-t;return 0<_&&n.__setDigit(l,u),n}},{key:"__leftShiftByAbsolute",value:function(e,t){var _=a.__toShiftAmount(t);if(0>_)throw new RangeError("BigInt too big");var n=0|_/30,l=_%30,g=e.length,o=0!==l&&0!=e.__digit(g-1)>>>30-l,u=g+n+(o?1:0),s=new a(u,e.sign);if(0===l){for(var r=0;r<n;r++)s.__setDigit(r,0);for(;r<u;r++)s.__setDigit(r,e.__digit(r-n))}else{for(var h=0,b=0;b<n;b++)s.__setDigit(b,0);for(var m,c=0;c<g;c++)m=e.__digit(c),s.__setDigit(c+n,1073741823&m<<l|h),h=m>>>30-l;if(o)s.__setDigit(g+n,h);else if(0!==h)throw new Error("implementation bug")}return s.__trim()}},{key:"__rightShiftByAbsolute",value:function(e,t){var _=e.length,n=e.sign,l=a.__toShiftAmount(t);if(0>l)return a.__rightShiftByMaximum(n);var g=0|l/30,o=l%30,u=_-g;if(0>=u)return a.__rightShiftByMaximum(n);var s=!1;if(n){if(0!=(e.__digit(g)&(1<<o)-1))s=!0;else for(var r=0;r<g;r++)if(0!==e.__digit(r)){s=!0;break}}if(s&&0===o){var h=e.__digit(_-1);0==~h&&u++}var b=new a(u,n);if(0===o){b.__setDigit(u-1,0);for(var m=g;m<_;m++)b.__setDigit(m-g,e.__digit(m))}else{for(var c,v=e.__digit(g)>>>o,y=_-g-1,f=0;f<y;f++)c=e.__digit(f+g+1),b.__setDigit(f,1073741823&c<<30-o|v),v=c>>>o;b.__setDigit(y,v)}return s&&(b=a.__absoluteAddOne(b,!0,b)),b.__trim()}},{key:"__rightShiftByMaximum",value:function(e){return e?a.__oneDigit(1,!0):a.__zero()}},{key:"__toShiftAmount",value:function(e){if(1<e.length)return-1;var t=e.__unsignedDigit(0);return t>a.__kMaxLengthBits?-1:t}},{key:"__toPrimitive",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"default";if("object"!==i(e))return e;if(e.constructor===a)return e;if("undefined"!=typeof Symbol&&"symbol"===i(Symbol.toPrimitive)){var _=e[Symbol.toPrimitive];if(_){var n=_(t);if("object"!==i(n))return n;throw new TypeError("Cannot convert object to primitive value")}}var l=e.valueOf;if(l){var g=l.call(e);if("object"!==i(g))return g}var o=e.toString;if(o){var u=o.call(e);if("object"!==i(u))return u}throw new TypeError("Cannot convert object to primitive value")}},{key:"__toNumeric",value:function(e){return a.__isBigInt(e)?e:+e}},{key:"__isBigInt",value:function(e){return"object"===i(e)&&null!==e&&e.constructor===a}},{key:"__truncateToNBits",value:function(e,t){for(var _=0|(e+29)/30,n=new a(_,t.sign),l=_-1,g=0;g<l;g++)n.__setDigit(g,t.__digit(g));var o=t.__digit(l);if(0!=e%30){var u=32-e%30;o=o<<u>>>u}return n.__setDigit(l,o),n.__trim()}},{key:"__truncateAndSubFromPowerOfTwo",value:function(e,t,_){for(var n=Math.min,l,g=0|(e+29)/30,o=new a(g,_),u=0,s=g-1,d=0,h=n(s,t.length);u<h;u++)l=0-t.__digit(u)-d,d=1&l>>>30,o.__setDigit(u,1073741823&l);for(;u<s;u++)o.__setDigit(u,0|1073741823&-d);var b,m=s<t.length?t.__digit(s):0,c=e%30;if(0===c)b=0-m-d,b&=1073741823;else{var v=32-c;m=m<<v>>>v;var y=1<<32-v;b=y-m-d,b&=y-1}return o.__setDigit(s,b),o.__trim()}},{key:"__digitPow",value:function(e,t){for(var i=1;0<t;)1&t&&(i*=e),t>>>=1,e*=e;return i}},{key:"__isOneDigitInt",value:function(e){return(1073741823&e)===e}}]),a}(h(Array));return S.__kMaxLength=33554432,S.__kMaxLengthBits=S.__kMaxLength<<5,S.__kMaxBitsPerChar=[0,0,32,51,64,75,83,90,96,102,107,111,115,119,122,126,128,131,134,136,139,141,143,145,147,149,151,153,154,156,158,159,160,162,163,165,166],S.__kBitsPerCharTableShift=5,S.__kBitsPerCharTableMultiplier=1<<S.__kBitsPerCharTableShift,S.__kConversionChars=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],S.__kBitConversionBuffer=new ArrayBuffer(8),S.__kBitConversionDouble=new Float64Array(S.__kBitConversionBuffer),S.__kBitConversionInts=new Int32Array(S.__kBitConversionBuffer),S.__clz30=t?function(e){return t(e)-2}:function(e){var t=Math.LN2,i=Math.log;return 0===e?30:0|29-(0|i(e>>>0)/t)},S.__imul=e||function(e,t){return 0|e*t},S});
//# sourceMappingURL=jsbi-umd.js.map


/***/ }),

/***/ "../../node_modules/tiny-uid/index.js":
/*!********************************************!*\
  !*** ../../node_modules/tiny-uid/index.js ***!
  \********************************************/
/***/ ((module) => {

const generator = (base) => (
	typeof crypto !== 'undefined' && typeof crypto.getRandomValues === 'function'
		? () => {
			const num = crypto.getRandomValues(new Uint8Array(1))[0];
			return (num >= base ? num % base : num).toString(base)
		}
		: () => Math.floor(Math.random() * base).toString(base)
);

const uid = (length = 7, hex = false) => (
	Array.from({ length }, generator(hex ? 16 : 36)).join('')
);

// Legacy
module.exports = uid;
// ES6+
module.exports["default"] = uid;


/***/ }),

/***/ "../../node_modules/webext-bridge/node_modules/webextension-polyfill/dist/browser-polyfill.js":
/*!****************************************************************************************************!*\
  !*** ../../node_modules/webext-bridge/node_modules/webextension-polyfill/dist/browser-polyfill.js ***!
  \****************************************************************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (module) {
  /* webextension-polyfill - v0.9.0 - Fri Mar 25 2022 17:00:23 */

  /* -*- Mode: indent-tabs-mode: nil; js-indent-level: 2 -*- */

  /* vim: set sts=2 sw=2 et tw=80: */

  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  "use strict";

  if (typeof globalThis != "object" || typeof chrome != "object" || !chrome || !chrome.runtime || !chrome.runtime.id) {
    throw new Error("This script should only be loaded in a browser extension.");
  }

  if (typeof globalThis.browser === "undefined" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
    const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";
    const SEND_RESPONSE_DEPRECATION_WARNING = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)"; // Wrapping the bulk of this polyfill in a one-time-use function is a minor
    // optimization for Firefox. Since Spidermonkey does not fully parse the
    // contents of a function until the first time it's called, and since it will
    // never actually need to be called, this allows the polyfill to be included
    // in Firefox nearly for free.

    const wrapAPIs = extensionAPIs => {
      // NOTE: apiMetadata is associated to the content of the api-metadata.json file
      // at build time by replacing the following "include" with the content of the
      // JSON file.
      const apiMetadata = {
        "alarms": {
          "clear": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "clearAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "get": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "bookmarks": {
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getChildren": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getRecent": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getSubTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTree": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "browserAction": {
          "disable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "enable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "getBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getBadgeText": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "openPopup": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setBadgeText": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "browsingData": {
          "remove": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "removeCache": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCookies": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeDownloads": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFormData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeHistory": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeLocalStorage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePasswords": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePluginData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "settings": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "commands": {
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "contextMenus": {
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "cookies": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAllCookieStores": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "set": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "devtools": {
          "inspectedWindow": {
            "eval": {
              "minArgs": 1,
              "maxArgs": 2,
              "singleCallbackArg": false
            }
          },
          "panels": {
            "create": {
              "minArgs": 3,
              "maxArgs": 3,
              "singleCallbackArg": true
            },
            "elements": {
              "createSidebarPane": {
                "minArgs": 1,
                "maxArgs": 1
              }
            }
          }
        },
        "downloads": {
          "cancel": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "download": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "erase": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFileIcon": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "open": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "pause": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFile": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "resume": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "extension": {
          "isAllowedFileSchemeAccess": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "isAllowedIncognitoAccess": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "history": {
          "addUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "deleteRange": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getVisits": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "i18n": {
          "detectLanguage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAcceptLanguages": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "identity": {
          "launchWebAuthFlow": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "idle": {
          "queryState": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "management": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getSelf": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setEnabled": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "uninstallSelf": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "notifications": {
          "clear": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPermissionLevel": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "pageAction": {
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "hide": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "permissions": {
          "contains": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "request": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "runtime": {
          "getBackgroundPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPlatformInfo": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "openOptionsPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "requestUpdateCheck": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "sendMessage": {
            "minArgs": 1,
            "maxArgs": 3
          },
          "sendNativeMessage": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "setUninstallURL": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "sessions": {
          "getDevices": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getRecentlyClosed": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "restore": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "storage": {
          "local": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "managed": {
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            }
          },
          "sync": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          }
        },
        "tabs": {
          "captureVisibleTab": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "detectLanguage": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "discard": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "duplicate": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "executeScript": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getZoom": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getZoomSettings": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "goBack": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "goForward": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "highlight": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "insertCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "query": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "reload": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "sendMessage": {
            "minArgs": 2,
            "maxArgs": 3
          },
          "setZoom": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "setZoomSettings": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "update": {
            "minArgs": 1,
            "maxArgs": 2
          }
        },
        "topSites": {
          "get": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "webNavigation": {
          "getAllFrames": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFrame": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "webRequest": {
          "handlerBehaviorChanged": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "windows": {
          "create": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getLastFocused": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        }
      };

      if (Object.keys(apiMetadata).length === 0) {
        throw new Error("api-metadata.json has not been included in browser-polyfill");
      }
      /**
       * A WeakMap subclass which creates and stores a value for any key which does
       * not exist when accessed, but behaves exactly as an ordinary WeakMap
       * otherwise.
       *
       * @param {function} createItem
       *        A function which will be called in order to create the value for any
       *        key which does not exist, the first time it is accessed. The
       *        function receives, as its only argument, the key being created.
       */


      class DefaultWeakMap extends WeakMap {
        constructor(createItem, items = undefined) {
          super(items);
          this.createItem = createItem;
        }

        get(key) {
          if (!this.has(key)) {
            this.set(key, this.createItem(key));
          }

          return super.get(key);
        }

      }
      /**
       * Returns true if the given object is an object with a `then` method, and can
       * therefore be assumed to behave as a Promise.
       *
       * @param {*} value The value to test.
       * @returns {boolean} True if the value is thenable.
       */


      const isThenable = value => {
        return value && typeof value === "object" && typeof value.then === "function";
      };
      /**
       * Creates and returns a function which, when called, will resolve or reject
       * the given promise based on how it is called:
       *
       * - If, when called, `chrome.runtime.lastError` contains a non-null object,
       *   the promise is rejected with that value.
       * - If the function is called with exactly one argument, the promise is
       *   resolved to that value.
       * - Otherwise, the promise is resolved to an array containing all of the
       *   function's arguments.
       *
       * @param {object} promise
       *        An object containing the resolution and rejection functions of a
       *        promise.
       * @param {function} promise.resolve
       *        The promise's resolution function.
       * @param {function} promise.reject
       *        The promise's rejection function.
       * @param {object} metadata
       *        Metadata about the wrapped method which has created the callback.
       * @param {boolean} metadata.singleCallbackArg
       *        Whether or not the promise is resolved with only the first
       *        argument of the callback, alternatively an array of all the
       *        callback arguments is resolved. By default, if the callback
       *        function is invoked with only a single argument, that will be
       *        resolved to the promise, while all arguments will be resolved as
       *        an array if multiple are given.
       *
       * @returns {function}
       *        The generated callback function.
       */


      const makeCallback = (promise, metadata) => {
        return (...callbackArgs) => {
          if (extensionAPIs.runtime.lastError) {
            promise.reject(new Error(extensionAPIs.runtime.lastError.message));
          } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
            promise.resolve(callbackArgs[0]);
          } else {
            promise.resolve(callbackArgs);
          }
        };
      };

      const pluralizeArguments = numArgs => numArgs == 1 ? "argument" : "arguments";
      /**
       * Creates a wrapper function for a method with the given name and metadata.
       *
       * @param {string} name
       *        The name of the method which is being wrapped.
       * @param {object} metadata
       *        Metadata about the method being wrapped.
       * @param {integer} metadata.minArgs
       *        The minimum number of arguments which must be passed to the
       *        function. If called with fewer than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxArgs
       *        The maximum number of arguments which may be passed to the
       *        function. If called with more than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {boolean} metadata.singleCallbackArg
       *        Whether or not the promise is resolved with only the first
       *        argument of the callback, alternatively an array of all the
       *        callback arguments is resolved. By default, if the callback
       *        function is invoked with only a single argument, that will be
       *        resolved to the promise, while all arguments will be resolved as
       *        an array if multiple are given.
       *
       * @returns {function(object, ...*)}
       *       The generated wrapper function.
       */


      const wrapAsyncFunction = (name, metadata) => {
        return function asyncFunctionWrapper(target, ...args) {
          if (args.length < metadata.minArgs) {
            throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
          }

          if (args.length > metadata.maxArgs) {
            throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
          }

          return new Promise((resolve, reject) => {
            if (metadata.fallbackToNoCallback) {
              // This API method has currently no callback on Chrome, but it return a promise on Firefox,
              // and so the polyfill will try to call it with a callback first, and it will fallback
              // to not passing the callback if the first call fails.
              try {
                target[name](...args, makeCallback({
                  resolve,
                  reject
                }, metadata));
              } catch (cbError) {
                console.warn(`${name} API method doesn't seem to support the callback parameter, ` + "falling back to call it without a callback: ", cbError);
                target[name](...args); // Update the API method metadata, so that the next API calls will not try to
                // use the unsupported callback anymore.

                metadata.fallbackToNoCallback = false;
                metadata.noCallback = true;
                resolve();
              }
            } else if (metadata.noCallback) {
              target[name](...args);
              resolve();
            } else {
              target[name](...args, makeCallback({
                resolve,
                reject
              }, metadata));
            }
          });
        };
      };
      /**
       * Wraps an existing method of the target object, so that calls to it are
       * intercepted by the given wrapper function. The wrapper function receives,
       * as its first argument, the original `target` object, followed by each of
       * the arguments passed to the original method.
       *
       * @param {object} target
       *        The original target object that the wrapped method belongs to.
       * @param {function} method
       *        The method being wrapped. This is used as the target of the Proxy
       *        object which is created to wrap the method.
       * @param {function} wrapper
       *        The wrapper function which is called in place of a direct invocation
       *        of the wrapped method.
       *
       * @returns {Proxy<function>}
       *        A Proxy object for the given method, which invokes the given wrapper
       *        method in its place.
       */


      const wrapMethod = (target, method, wrapper) => {
        return new Proxy(method, {
          apply(targetMethod, thisObj, args) {
            return wrapper.call(thisObj, target, ...args);
          }

        });
      };

      let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
      /**
       * Wraps an object in a Proxy which intercepts and wraps certain methods
       * based on the given `wrappers` and `metadata` objects.
       *
       * @param {object} target
       *        The target object to wrap.
       *
       * @param {object} [wrappers = {}]
       *        An object tree containing wrapper functions for special cases. Any
       *        function present in this object tree is called in place of the
       *        method in the same location in the `target` object tree. These
       *        wrapper methods are invoked as described in {@see wrapMethod}.
       *
       * @param {object} [metadata = {}]
       *        An object tree containing metadata used to automatically generate
       *        Promise-based wrapper functions for asynchronous. Any function in
       *        the `target` object tree which has a corresponding metadata object
       *        in the same location in the `metadata` tree is replaced with an
       *        automatically-generated wrapper function, as described in
       *        {@see wrapAsyncFunction}
       *
       * @returns {Proxy<object>}
       */

      const wrapObject = (target, wrappers = {}, metadata = {}) => {
        let cache = Object.create(null);
        let handlers = {
          has(proxyTarget, prop) {
            return prop in target || prop in cache;
          },

          get(proxyTarget, prop, receiver) {
            if (prop in cache) {
              return cache[prop];
            }

            if (!(prop in target)) {
              return undefined;
            }

            let value = target[prop];

            if (typeof value === "function") {
              // This is a method on the underlying object. Check if we need to do
              // any wrapping.
              if (typeof wrappers[prop] === "function") {
                // We have a special-case wrapper for this method.
                value = wrapMethod(target, target[prop], wrappers[prop]);
              } else if (hasOwnProperty(metadata, prop)) {
                // This is an async method that we have metadata for. Create a
                // Promise wrapper for it.
                let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                value = wrapMethod(target, target[prop], wrapper);
              } else {
                // This is a method that we don't know or care about. Return the
                // original method, bound to the underlying object.
                value = value.bind(target);
              }
            } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
              // This is an object that we need to do some wrapping for the children
              // of. Create a sub-object wrapper for it with the appropriate child
              // metadata.
              value = wrapObject(value, wrappers[prop], metadata[prop]);
            } else if (hasOwnProperty(metadata, "*")) {
              // Wrap all properties in * namespace.
              value = wrapObject(value, wrappers[prop], metadata["*"]);
            } else {
              // We don't need to do any wrapping for this property,
              // so just forward all access to the underlying object.
              Object.defineProperty(cache, prop, {
                configurable: true,
                enumerable: true,

                get() {
                  return target[prop];
                },

                set(value) {
                  target[prop] = value;
                }

              });
              return value;
            }

            cache[prop] = value;
            return value;
          },

          set(proxyTarget, prop, value, receiver) {
            if (prop in cache) {
              cache[prop] = value;
            } else {
              target[prop] = value;
            }

            return true;
          },

          defineProperty(proxyTarget, prop, desc) {
            return Reflect.defineProperty(cache, prop, desc);
          },

          deleteProperty(proxyTarget, prop) {
            return Reflect.deleteProperty(cache, prop);
          }

        }; // Per contract of the Proxy API, the "get" proxy handler must return the
        // original value of the target if that value is declared read-only and
        // non-configurable. For this reason, we create an object with the
        // prototype set to `target` instead of using `target` directly.
        // Otherwise we cannot return a custom object for APIs that
        // are declared read-only and non-configurable, such as `chrome.devtools`.
        //
        // The proxy handlers themselves will still use the original `target`
        // instead of the `proxyTarget`, so that the methods and properties are
        // dereferenced via the original targets.

        let proxyTarget = Object.create(target);
        return new Proxy(proxyTarget, handlers);
      };
      /**
       * Creates a set of wrapper functions for an event object, which handles
       * wrapping of listener functions that those messages are passed.
       *
       * A single wrapper is created for each listener function, and stored in a
       * map. Subsequent calls to `addListener`, `hasListener`, or `removeListener`
       * retrieve the original wrapper, so that  attempts to remove a
       * previously-added listener work as expected.
       *
       * @param {DefaultWeakMap<function, function>} wrapperMap
       *        A DefaultWeakMap object which will create the appropriate wrapper
       *        for a given listener function when one does not exist, and retrieve
       *        an existing one when it does.
       *
       * @returns {object}
       */


      const wrapEvent = wrapperMap => ({
        addListener(target, listener, ...args) {
          target.addListener(wrapperMap.get(listener), ...args);
        },

        hasListener(target, listener) {
          return target.hasListener(wrapperMap.get(listener));
        },

        removeListener(target, listener) {
          target.removeListener(wrapperMap.get(listener));
        }

      });

      const onRequestFinishedWrappers = new DefaultWeakMap(listener => {
        if (typeof listener !== "function") {
          return listener;
        }
        /**
         * Wraps an onRequestFinished listener function so that it will return a
         * `getContent()` property which returns a `Promise` rather than using a
         * callback API.
         *
         * @param {object} req
         *        The HAR entry object representing the network request.
         */


        return function onRequestFinished(req) {
          const wrappedReq = wrapObject(req, {}
          /* wrappers */
          , {
            getContent: {
              minArgs: 0,
              maxArgs: 0
            }
          });
          listener(wrappedReq);
        };
      }); // Keep track if the deprecation warning has been logged at least once.

      let loggedSendResponseDeprecationWarning = false;
      const onMessageWrappers = new DefaultWeakMap(listener => {
        if (typeof listener !== "function") {
          return listener;
        }
        /**
         * Wraps a message listener function so that it may send responses based on
         * its return value, rather than by returning a sentinel value and calling a
         * callback. If the listener function returns a Promise, the response is
         * sent when the promise either resolves or rejects.
         *
         * @param {*} message
         *        The message sent by the other end of the channel.
         * @param {object} sender
         *        Details about the sender of the message.
         * @param {function(*)} sendResponse
         *        A callback which, when called with an arbitrary argument, sends
         *        that value as a response.
         * @returns {boolean}
         *        True if the wrapped listener returned a Promise, which will later
         *        yield a response. False otherwise.
         */


        return function onMessage(message, sender, sendResponse) {
          let didCallSendResponse = false;
          let wrappedSendResponse;
          let sendResponsePromise = new Promise(resolve => {
            wrappedSendResponse = function (response) {
              if (!loggedSendResponseDeprecationWarning) {
                console.warn(SEND_RESPONSE_DEPRECATION_WARNING, new Error().stack);
                loggedSendResponseDeprecationWarning = true;
              }

              didCallSendResponse = true;
              resolve(response);
            };
          });
          let result;

          try {
            result = listener(message, sender, wrappedSendResponse);
          } catch (err) {
            result = Promise.reject(err);
          }

          const isResultThenable = result !== true && isThenable(result); // If the listener didn't returned true or a Promise, or called
          // wrappedSendResponse synchronously, we can exit earlier
          // because there will be no response sent from this listener.

          if (result !== true && !isResultThenable && !didCallSendResponse) {
            return false;
          } // A small helper to send the message if the promise resolves
          // and an error if the promise rejects (a wrapped sendMessage has
          // to translate the message into a resolved promise or a rejected
          // promise).


          const sendPromisedResult = promise => {
            promise.then(msg => {
              // send the message value.
              sendResponse(msg);
            }, error => {
              // Send a JSON representation of the error if the rejected value
              // is an instance of error, or the object itself otherwise.
              let message;

              if (error && (error instanceof Error || typeof error.message === "string")) {
                message = error.message;
              } else {
                message = "An unexpected error occurred";
              }

              sendResponse({
                __mozWebExtensionPolyfillReject__: true,
                message
              });
            }).catch(err => {
              // Print an error on the console if unable to send the response.
              console.error("Failed to send onMessage rejected reply", err);
            });
          }; // If the listener returned a Promise, send the resolved value as a
          // result, otherwise wait the promise related to the wrappedSendResponse
          // callback to resolve and send it as a response.


          if (isResultThenable) {
            sendPromisedResult(result);
          } else {
            sendPromisedResult(sendResponsePromise);
          } // Let Chrome know that the listener is replying.


          return true;
        };
      });

      const wrappedSendMessageCallback = ({
        reject,
        resolve
      }, reply) => {
        if (extensionAPIs.runtime.lastError) {
          // Detect when none of the listeners replied to the sendMessage call and resolve
          // the promise to undefined as in Firefox.
          // See https://github.com/mozilla/webextension-polyfill/issues/130
          if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
            resolve();
          } else {
            reject(new Error(extensionAPIs.runtime.lastError.message));
          }
        } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
          // Convert back the JSON representation of the error into
          // an Error instance.
          reject(new Error(reply.message));
        } else {
          resolve(reply);
        }
      };

      const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
        if (args.length < metadata.minArgs) {
          throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
        }

        if (args.length > metadata.maxArgs) {
          throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
        }

        return new Promise((resolve, reject) => {
          const wrappedCb = wrappedSendMessageCallback.bind(null, {
            resolve,
            reject
          });
          args.push(wrappedCb);
          apiNamespaceObj.sendMessage(...args);
        });
      };

      const staticWrappers = {
        devtools: {
          network: {
            onRequestFinished: wrapEvent(onRequestFinishedWrappers)
          }
        },
        runtime: {
          onMessage: wrapEvent(onMessageWrappers),
          onMessageExternal: wrapEvent(onMessageWrappers),
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
            minArgs: 1,
            maxArgs: 3
          })
        },
        tabs: {
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
            minArgs: 2,
            maxArgs: 3
          })
        }
      };
      const settingMetadata = {
        clear: {
          minArgs: 1,
          maxArgs: 1
        },
        get: {
          minArgs: 1,
          maxArgs: 1
        },
        set: {
          minArgs: 1,
          maxArgs: 1
        }
      };
      apiMetadata.privacy = {
        network: {
          "*": settingMetadata
        },
        services: {
          "*": settingMetadata
        },
        websites: {
          "*": settingMetadata
        }
      };
      return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
    }; // The build process adds a UMD wrapper around this file, which makes the
    // `module` variable available.


    module.exports = wrapAPIs(chrome);
  } else {
    module.exports = globalThis.browser;
  }
});
//# sourceMappingURL=browser-polyfill.js.map


/***/ }),

/***/ "../../node_modules/webextension-polyfill/dist/browser-polyfill.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/webextension-polyfill/dist/browser-polyfill.js ***!
  \*************************************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (module) {
  /* webextension-polyfill - v0.10.0 - Fri Aug 12 2022 19:42:44 */

  /* -*- Mode: indent-tabs-mode: nil; js-indent-level: 2 -*- */

  /* vim: set sts=2 sw=2 et tw=80: */

  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  "use strict";

  if (!globalThis.chrome?.runtime?.id) {
    throw new Error("This script should only be loaded in a browser extension.");
  }

  if (typeof globalThis.browser === "undefined" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
    const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received."; // Wrapping the bulk of this polyfill in a one-time-use function is a minor
    // optimization for Firefox. Since Spidermonkey does not fully parse the
    // contents of a function until the first time it's called, and since it will
    // never actually need to be called, this allows the polyfill to be included
    // in Firefox nearly for free.

    const wrapAPIs = extensionAPIs => {
      // NOTE: apiMetadata is associated to the content of the api-metadata.json file
      // at build time by replacing the following "include" with the content of the
      // JSON file.
      const apiMetadata = {
        "alarms": {
          "clear": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "clearAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "get": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "bookmarks": {
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getChildren": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getRecent": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getSubTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTree": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "browserAction": {
          "disable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "enable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "getBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getBadgeText": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "openPopup": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setBadgeText": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "browsingData": {
          "remove": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "removeCache": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCookies": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeDownloads": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFormData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeHistory": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeLocalStorage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePasswords": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePluginData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "settings": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "commands": {
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "contextMenus": {
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "cookies": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAllCookieStores": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "set": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "devtools": {
          "inspectedWindow": {
            "eval": {
              "minArgs": 1,
              "maxArgs": 2,
              "singleCallbackArg": false
            }
          },
          "panels": {
            "create": {
              "minArgs": 3,
              "maxArgs": 3,
              "singleCallbackArg": true
            },
            "elements": {
              "createSidebarPane": {
                "minArgs": 1,
                "maxArgs": 1
              }
            }
          }
        },
        "downloads": {
          "cancel": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "download": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "erase": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFileIcon": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "open": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "pause": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFile": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "resume": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "extension": {
          "isAllowedFileSchemeAccess": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "isAllowedIncognitoAccess": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "history": {
          "addUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "deleteRange": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getVisits": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "i18n": {
          "detectLanguage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAcceptLanguages": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "identity": {
          "launchWebAuthFlow": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "idle": {
          "queryState": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "management": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getSelf": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setEnabled": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "uninstallSelf": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "notifications": {
          "clear": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPermissionLevel": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "pageAction": {
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "hide": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "permissions": {
          "contains": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "request": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "runtime": {
          "getBackgroundPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPlatformInfo": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "openOptionsPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "requestUpdateCheck": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "sendMessage": {
            "minArgs": 1,
            "maxArgs": 3
          },
          "sendNativeMessage": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "setUninstallURL": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "sessions": {
          "getDevices": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getRecentlyClosed": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "restore": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "storage": {
          "local": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "managed": {
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            }
          },
          "sync": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          }
        },
        "tabs": {
          "captureVisibleTab": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "detectLanguage": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "discard": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "duplicate": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "executeScript": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getZoom": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getZoomSettings": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "goBack": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "goForward": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "highlight": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "insertCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "query": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "reload": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "sendMessage": {
            "minArgs": 2,
            "maxArgs": 3
          },
          "setZoom": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "setZoomSettings": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "update": {
            "minArgs": 1,
            "maxArgs": 2
          }
        },
        "topSites": {
          "get": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "webNavigation": {
          "getAllFrames": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFrame": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "webRequest": {
          "handlerBehaviorChanged": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "windows": {
          "create": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getLastFocused": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        }
      };

      if (Object.keys(apiMetadata).length === 0) {
        throw new Error("api-metadata.json has not been included in browser-polyfill");
      }
      /**
       * A WeakMap subclass which creates and stores a value for any key which does
       * not exist when accessed, but behaves exactly as an ordinary WeakMap
       * otherwise.
       *
       * @param {function} createItem
       *        A function which will be called in order to create the value for any
       *        key which does not exist, the first time it is accessed. The
       *        function receives, as its only argument, the key being created.
       */


      class DefaultWeakMap extends WeakMap {
        constructor(createItem, items = undefined) {
          super(items);
          this.createItem = createItem;
        }

        get(key) {
          if (!this.has(key)) {
            this.set(key, this.createItem(key));
          }

          return super.get(key);
        }

      }
      /**
       * Returns true if the given object is an object with a `then` method, and can
       * therefore be assumed to behave as a Promise.
       *
       * @param {*} value The value to test.
       * @returns {boolean} True if the value is thenable.
       */


      const isThenable = value => {
        return value && typeof value === "object" && typeof value.then === "function";
      };
      /**
       * Creates and returns a function which, when called, will resolve or reject
       * the given promise based on how it is called:
       *
       * - If, when called, `chrome.runtime.lastError` contains a non-null object,
       *   the promise is rejected with that value.
       * - If the function is called with exactly one argument, the promise is
       *   resolved to that value.
       * - Otherwise, the promise is resolved to an array containing all of the
       *   function's arguments.
       *
       * @param {object} promise
       *        An object containing the resolution and rejection functions of a
       *        promise.
       * @param {function} promise.resolve
       *        The promise's resolution function.
       * @param {function} promise.reject
       *        The promise's rejection function.
       * @param {object} metadata
       *        Metadata about the wrapped method which has created the callback.
       * @param {boolean} metadata.singleCallbackArg
       *        Whether or not the promise is resolved with only the first
       *        argument of the callback, alternatively an array of all the
       *        callback arguments is resolved. By default, if the callback
       *        function is invoked with only a single argument, that will be
       *        resolved to the promise, while all arguments will be resolved as
       *        an array if multiple are given.
       *
       * @returns {function}
       *        The generated callback function.
       */


      const makeCallback = (promise, metadata) => {
        return (...callbackArgs) => {
          if (extensionAPIs.runtime.lastError) {
            promise.reject(new Error(extensionAPIs.runtime.lastError.message));
          } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
            promise.resolve(callbackArgs[0]);
          } else {
            promise.resolve(callbackArgs);
          }
        };
      };

      const pluralizeArguments = numArgs => numArgs == 1 ? "argument" : "arguments";
      /**
       * Creates a wrapper function for a method with the given name and metadata.
       *
       * @param {string} name
       *        The name of the method which is being wrapped.
       * @param {object} metadata
       *        Metadata about the method being wrapped.
       * @param {integer} metadata.minArgs
       *        The minimum number of arguments which must be passed to the
       *        function. If called with fewer than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxArgs
       *        The maximum number of arguments which may be passed to the
       *        function. If called with more than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {boolean} metadata.singleCallbackArg
       *        Whether or not the promise is resolved with only the first
       *        argument of the callback, alternatively an array of all the
       *        callback arguments is resolved. By default, if the callback
       *        function is invoked with only a single argument, that will be
       *        resolved to the promise, while all arguments will be resolved as
       *        an array if multiple are given.
       *
       * @returns {function(object, ...*)}
       *       The generated wrapper function.
       */


      const wrapAsyncFunction = (name, metadata) => {
        return function asyncFunctionWrapper(target, ...args) {
          if (args.length < metadata.minArgs) {
            throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
          }

          if (args.length > metadata.maxArgs) {
            throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
          }

          return new Promise((resolve, reject) => {
            if (metadata.fallbackToNoCallback) {
              // This API method has currently no callback on Chrome, but it return a promise on Firefox,
              // and so the polyfill will try to call it with a callback first, and it will fallback
              // to not passing the callback if the first call fails.
              try {
                target[name](...args, makeCallback({
                  resolve,
                  reject
                }, metadata));
              } catch (cbError) {
                console.warn(`${name} API method doesn't seem to support the callback parameter, ` + "falling back to call it without a callback: ", cbError);
                target[name](...args); // Update the API method metadata, so that the next API calls will not try to
                // use the unsupported callback anymore.

                metadata.fallbackToNoCallback = false;
                metadata.noCallback = true;
                resolve();
              }
            } else if (metadata.noCallback) {
              target[name](...args);
              resolve();
            } else {
              target[name](...args, makeCallback({
                resolve,
                reject
              }, metadata));
            }
          });
        };
      };
      /**
       * Wraps an existing method of the target object, so that calls to it are
       * intercepted by the given wrapper function. The wrapper function receives,
       * as its first argument, the original `target` object, followed by each of
       * the arguments passed to the original method.
       *
       * @param {object} target
       *        The original target object that the wrapped method belongs to.
       * @param {function} method
       *        The method being wrapped. This is used as the target of the Proxy
       *        object which is created to wrap the method.
       * @param {function} wrapper
       *        The wrapper function which is called in place of a direct invocation
       *        of the wrapped method.
       *
       * @returns {Proxy<function>}
       *        A Proxy object for the given method, which invokes the given wrapper
       *        method in its place.
       */


      const wrapMethod = (target, method, wrapper) => {
        return new Proxy(method, {
          apply(targetMethod, thisObj, args) {
            return wrapper.call(thisObj, target, ...args);
          }

        });
      };

      let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
      /**
       * Wraps an object in a Proxy which intercepts and wraps certain methods
       * based on the given `wrappers` and `metadata` objects.
       *
       * @param {object} target
       *        The target object to wrap.
       *
       * @param {object} [wrappers = {}]
       *        An object tree containing wrapper functions for special cases. Any
       *        function present in this object tree is called in place of the
       *        method in the same location in the `target` object tree. These
       *        wrapper methods are invoked as described in {@see wrapMethod}.
       *
       * @param {object} [metadata = {}]
       *        An object tree containing metadata used to automatically generate
       *        Promise-based wrapper functions for asynchronous. Any function in
       *        the `target` object tree which has a corresponding metadata object
       *        in the same location in the `metadata` tree is replaced with an
       *        automatically-generated wrapper function, as described in
       *        {@see wrapAsyncFunction}
       *
       * @returns {Proxy<object>}
       */

      const wrapObject = (target, wrappers = {}, metadata = {}) => {
        let cache = Object.create(null);
        let handlers = {
          has(proxyTarget, prop) {
            return prop in target || prop in cache;
          },

          get(proxyTarget, prop, receiver) {
            if (prop in cache) {
              return cache[prop];
            }

            if (!(prop in target)) {
              return undefined;
            }

            let value = target[prop];

            if (typeof value === "function") {
              // This is a method on the underlying object. Check if we need to do
              // any wrapping.
              if (typeof wrappers[prop] === "function") {
                // We have a special-case wrapper for this method.
                value = wrapMethod(target, target[prop], wrappers[prop]);
              } else if (hasOwnProperty(metadata, prop)) {
                // This is an async method that we have metadata for. Create a
                // Promise wrapper for it.
                let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                value = wrapMethod(target, target[prop], wrapper);
              } else {
                // This is a method that we don't know or care about. Return the
                // original method, bound to the underlying object.
                value = value.bind(target);
              }
            } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
              // This is an object that we need to do some wrapping for the children
              // of. Create a sub-object wrapper for it with the appropriate child
              // metadata.
              value = wrapObject(value, wrappers[prop], metadata[prop]);
            } else if (hasOwnProperty(metadata, "*")) {
              // Wrap all properties in * namespace.
              value = wrapObject(value, wrappers[prop], metadata["*"]);
            } else {
              // We don't need to do any wrapping for this property,
              // so just forward all access to the underlying object.
              Object.defineProperty(cache, prop, {
                configurable: true,
                enumerable: true,

                get() {
                  return target[prop];
                },

                set(value) {
                  target[prop] = value;
                }

              });
              return value;
            }

            cache[prop] = value;
            return value;
          },

          set(proxyTarget, prop, value, receiver) {
            if (prop in cache) {
              cache[prop] = value;
            } else {
              target[prop] = value;
            }

            return true;
          },

          defineProperty(proxyTarget, prop, desc) {
            return Reflect.defineProperty(cache, prop, desc);
          },

          deleteProperty(proxyTarget, prop) {
            return Reflect.deleteProperty(cache, prop);
          }

        }; // Per contract of the Proxy API, the "get" proxy handler must return the
        // original value of the target if that value is declared read-only and
        // non-configurable. For this reason, we create an object with the
        // prototype set to `target` instead of using `target` directly.
        // Otherwise we cannot return a custom object for APIs that
        // are declared read-only and non-configurable, such as `chrome.devtools`.
        //
        // The proxy handlers themselves will still use the original `target`
        // instead of the `proxyTarget`, so that the methods and properties are
        // dereferenced via the original targets.

        let proxyTarget = Object.create(target);
        return new Proxy(proxyTarget, handlers);
      };
      /**
       * Creates a set of wrapper functions for an event object, which handles
       * wrapping of listener functions that those messages are passed.
       *
       * A single wrapper is created for each listener function, and stored in a
       * map. Subsequent calls to `addListener`, `hasListener`, or `removeListener`
       * retrieve the original wrapper, so that  attempts to remove a
       * previously-added listener work as expected.
       *
       * @param {DefaultWeakMap<function, function>} wrapperMap
       *        A DefaultWeakMap object which will create the appropriate wrapper
       *        for a given listener function when one does not exist, and retrieve
       *        an existing one when it does.
       *
       * @returns {object}
       */


      const wrapEvent = wrapperMap => ({
        addListener(target, listener, ...args) {
          target.addListener(wrapperMap.get(listener), ...args);
        },

        hasListener(target, listener) {
          return target.hasListener(wrapperMap.get(listener));
        },

        removeListener(target, listener) {
          target.removeListener(wrapperMap.get(listener));
        }

      });

      const onRequestFinishedWrappers = new DefaultWeakMap(listener => {
        if (typeof listener !== "function") {
          return listener;
        }
        /**
         * Wraps an onRequestFinished listener function so that it will return a
         * `getContent()` property which returns a `Promise` rather than using a
         * callback API.
         *
         * @param {object} req
         *        The HAR entry object representing the network request.
         */


        return function onRequestFinished(req) {
          const wrappedReq = wrapObject(req, {}
          /* wrappers */
          , {
            getContent: {
              minArgs: 0,
              maxArgs: 0
            }
          });
          listener(wrappedReq);
        };
      });
      const onMessageWrappers = new DefaultWeakMap(listener => {
        if (typeof listener !== "function") {
          return listener;
        }
        /**
         * Wraps a message listener function so that it may send responses based on
         * its return value, rather than by returning a sentinel value and calling a
         * callback. If the listener function returns a Promise, the response is
         * sent when the promise either resolves or rejects.
         *
         * @param {*} message
         *        The message sent by the other end of the channel.
         * @param {object} sender
         *        Details about the sender of the message.
         * @param {function(*)} sendResponse
         *        A callback which, when called with an arbitrary argument, sends
         *        that value as a response.
         * @returns {boolean}
         *        True if the wrapped listener returned a Promise, which will later
         *        yield a response. False otherwise.
         */


        return function onMessage(message, sender, sendResponse) {
          let didCallSendResponse = false;
          let wrappedSendResponse;
          let sendResponsePromise = new Promise(resolve => {
            wrappedSendResponse = function (response) {
              didCallSendResponse = true;
              resolve(response);
            };
          });
          let result;

          try {
            result = listener(message, sender, wrappedSendResponse);
          } catch (err) {
            result = Promise.reject(err);
          }

          const isResultThenable = result !== true && isThenable(result); // If the listener didn't returned true or a Promise, or called
          // wrappedSendResponse synchronously, we can exit earlier
          // because there will be no response sent from this listener.

          if (result !== true && !isResultThenable && !didCallSendResponse) {
            return false;
          } // A small helper to send the message if the promise resolves
          // and an error if the promise rejects (a wrapped sendMessage has
          // to translate the message into a resolved promise or a rejected
          // promise).


          const sendPromisedResult = promise => {
            promise.then(msg => {
              // send the message value.
              sendResponse(msg);
            }, error => {
              // Send a JSON representation of the error if the rejected value
              // is an instance of error, or the object itself otherwise.
              let message;

              if (error && (error instanceof Error || typeof error.message === "string")) {
                message = error.message;
              } else {
                message = "An unexpected error occurred";
              }

              sendResponse({
                __mozWebExtensionPolyfillReject__: true,
                message
              });
            }).catch(err => {
              // Print an error on the console if unable to send the response.
              console.error("Failed to send onMessage rejected reply", err);
            });
          }; // If the listener returned a Promise, send the resolved value as a
          // result, otherwise wait the promise related to the wrappedSendResponse
          // callback to resolve and send it as a response.


          if (isResultThenable) {
            sendPromisedResult(result);
          } else {
            sendPromisedResult(sendResponsePromise);
          } // Let Chrome know that the listener is replying.


          return true;
        };
      });

      const wrappedSendMessageCallback = ({
        reject,
        resolve
      }, reply) => {
        if (extensionAPIs.runtime.lastError) {
          // Detect when none of the listeners replied to the sendMessage call and resolve
          // the promise to undefined as in Firefox.
          // See https://github.com/mozilla/webextension-polyfill/issues/130
          if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
            resolve();
          } else {
            reject(new Error(extensionAPIs.runtime.lastError.message));
          }
        } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
          // Convert back the JSON representation of the error into
          // an Error instance.
          reject(new Error(reply.message));
        } else {
          resolve(reply);
        }
      };

      const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
        if (args.length < metadata.minArgs) {
          throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
        }

        if (args.length > metadata.maxArgs) {
          throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
        }

        return new Promise((resolve, reject) => {
          const wrappedCb = wrappedSendMessageCallback.bind(null, {
            resolve,
            reject
          });
          args.push(wrappedCb);
          apiNamespaceObj.sendMessage(...args);
        });
      };

      const staticWrappers = {
        devtools: {
          network: {
            onRequestFinished: wrapEvent(onRequestFinishedWrappers)
          }
        },
        runtime: {
          onMessage: wrapEvent(onMessageWrappers),
          onMessageExternal: wrapEvent(onMessageWrappers),
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
            minArgs: 1,
            maxArgs: 3
          })
        },
        tabs: {
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
            minArgs: 2,
            maxArgs: 3
          })
        }
      };
      const settingMetadata = {
        clear: {
          minArgs: 1,
          maxArgs: 1
        },
        get: {
          minArgs: 1,
          maxArgs: 1
        },
        set: {
          minArgs: 1,
          maxArgs: 1
        }
      };
      apiMetadata.privacy = {
        network: {
          "*": settingMetadata
        },
        services: {
          "*": settingMetadata
        },
        websites: {
          "*": settingMetadata
        }
      };
      return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
    }; // The build process adds a UMD wrapper around this file, which makes the
    // `module` variable available.


    module.exports = wrapAPIs(chrome);
  } else {
    module.exports = globalThis.browser;
  }
});
//# sourceMappingURL=browser-polyfill.js.map


/***/ }),

/***/ "./node_modules/json-rpc-2.0/dist/client.js":
/*!**************************************************!*\
  !*** ./node_modules/json-rpc-2.0/dist/client.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JSONRPCClient = void 0;
var models_1 = __webpack_require__(/*! ./models */ "./node_modules/json-rpc-2.0/dist/models.js");
var internal_1 = __webpack_require__(/*! ./internal */ "./node_modules/json-rpc-2.0/dist/internal.js");
var JSONRPCClient = /** @class */ (function () {
    function JSONRPCClient(_send, createID) {
        this._send = _send;
        this.createID = createID;
        this.idToResolveMap = new Map();
        this.id = 0;
    }
    JSONRPCClient.prototype._createID = function () {
        if (this.createID) {
            return this.createID();
        }
        else {
            return ++this.id;
        }
    };
    JSONRPCClient.prototype.timeout = function (delay, overrideCreateJSONRPCErrorResponse) {
        var _this = this;
        if (overrideCreateJSONRPCErrorResponse === void 0) { overrideCreateJSONRPCErrorResponse = function (id) {
            return (0, models_1.createJSONRPCErrorResponse)(id, internal_1.DefaultErrorCode, "Request timeout");
        }; }
        var timeoutRequest = function (ids, request) {
            var timeoutID = setTimeout(function () {
                ids.forEach(function (id) {
                    var resolve = _this.idToResolveMap.get(id);
                    if (resolve) {
                        _this.idToResolveMap.delete(id);
                        resolve(overrideCreateJSONRPCErrorResponse(id));
                    }
                });
            }, delay);
            return request().then(function (result) {
                clearTimeout(timeoutID);
                return result;
            }, function (error) {
                clearTimeout(timeoutID);
                return Promise.reject(error);
            });
        };
        var requestAdvanced = function (request, clientParams) {
            var ids = (!Array.isArray(request) ? [request] : request)
                .map(function (request) { return request.id; })
                .filter(isDefinedAndNonNull);
            return timeoutRequest(ids, function () {
                return _this.requestAdvanced(request, clientParams);
            });
        };
        return {
            request: function (method, params, clientParams) {
                var id = _this._createID();
                return timeoutRequest([id], function () {
                    return _this.requestWithID(method, params, clientParams, id);
                });
            },
            requestAdvanced: function (request, clientParams) { return requestAdvanced(request, clientParams); },
        };
    };
    JSONRPCClient.prototype.request = function (method, params, clientParams) {
        return this.requestWithID(method, params, clientParams, this._createID());
    };
    JSONRPCClient.prototype.requestWithID = function (method, params, clientParams, id) {
        return __awaiter(this, void 0, void 0, function () {
            var request, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        request = (0, models_1.createJSONRPCRequest)(id, method, params);
                        return [4 /*yield*/, this.requestAdvanced(request, clientParams)];
                    case 1:
                        response = _a.sent();
                        if (response.result !== undefined && !response.error) {
                            return [2 /*return*/, response.result];
                        }
                        else if (response.result === undefined && response.error) {
                            return [2 /*return*/, Promise.reject(new models_1.JSONRPCErrorException(response.error.message, response.error.code, response.error.data))];
                        }
                        else {
                            return [2 /*return*/, Promise.reject(new Error("An unexpected error occurred"))];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    JSONRPCClient.prototype.requestAdvanced = function (requests, clientParams) {
        var _this = this;
        var areRequestsOriginallyArray = Array.isArray(requests);
        if (!Array.isArray(requests)) {
            requests = [requests];
        }
        var requestsWithID = requests.filter(function (request) {
            return isDefinedAndNonNull(request.id);
        });
        var promises = requestsWithID.map(function (request) {
            return new Promise(function (resolve) { return _this.idToResolveMap.set(request.id, resolve); });
        });
        var promise = Promise.all(promises).then(function (responses) {
            if (areRequestsOriginallyArray || !responses.length) {
                return responses;
            }
            else {
                return responses[0];
            }
        });
        return this.send(areRequestsOriginallyArray ? requests : requests[0], clientParams).then(function () { return promise; }, function (error) {
            requestsWithID.forEach(function (request) {
                _this.receive((0, models_1.createJSONRPCErrorResponse)(request.id, internal_1.DefaultErrorCode, (error && error.message) || "Failed to send a request"));
            });
            return promise;
        });
    };
    JSONRPCClient.prototype.notify = function (method, params, clientParams) {
        var request = (0, models_1.createJSONRPCNotification)(method, params);
        this.send(request, clientParams).then(undefined, function () { return undefined; });
    };
    JSONRPCClient.prototype.send = function (payload, clientParams) {
        return this._send(payload, clientParams);
    };
    JSONRPCClient.prototype.rejectAllPendingRequests = function (message) {
        this.idToResolveMap.forEach(function (resolve, id) {
            return resolve((0, models_1.createJSONRPCErrorResponse)(id, internal_1.DefaultErrorCode, message));
        });
        this.idToResolveMap.clear();
    };
    JSONRPCClient.prototype.receive = function (responses) {
        var _this = this;
        if (!Array.isArray(responses)) {
            responses = [responses];
        }
        responses.forEach(function (response) {
            var resolve = _this.idToResolveMap.get(response.id);
            if (resolve) {
                _this.idToResolveMap.delete(response.id);
                resolve(response);
            }
        });
    };
    return JSONRPCClient;
}());
exports.JSONRPCClient = JSONRPCClient;
var isDefinedAndNonNull = function (value) {
    return value !== undefined && value !== null;
};


/***/ }),

/***/ "./node_modules/json-rpc-2.0/dist/index.js":
/*!*************************************************!*\
  !*** ./node_modules/json-rpc-2.0/dist/index.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./client */ "./node_modules/json-rpc-2.0/dist/client.js"), exports);
__exportStar(__webpack_require__(/*! ./models */ "./node_modules/json-rpc-2.0/dist/models.js"), exports);
__exportStar(__webpack_require__(/*! ./server */ "./node_modules/json-rpc-2.0/dist/server.js"), exports);
__exportStar(__webpack_require__(/*! ./server-and-client */ "./node_modules/json-rpc-2.0/dist/server-and-client.js"), exports);


/***/ }),

/***/ "./node_modules/json-rpc-2.0/dist/internal.js":
/*!****************************************************!*\
  !*** ./node_modules/json-rpc-2.0/dist/internal.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DefaultErrorCode = void 0;
exports.DefaultErrorCode = 0;


/***/ }),

/***/ "./node_modules/json-rpc-2.0/dist/models.js":
/*!**************************************************!*\
  !*** ./node_modules/json-rpc-2.0/dist/models.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createJSONRPCNotification = exports.createJSONRPCRequest = exports.createJSONRPCSuccessResponse = exports.createJSONRPCErrorResponse = exports.JSONRPCErrorCode = exports.JSONRPCErrorException = exports.isJSONRPCResponses = exports.isJSONRPCResponse = exports.isJSONRPCRequests = exports.isJSONRPCRequest = exports.isJSONRPCID = exports.JSONRPC = void 0;
exports.JSONRPC = "2.0";
var isJSONRPCID = function (id) {
    return typeof id === "string" || typeof id === "number" || id === null;
};
exports.isJSONRPCID = isJSONRPCID;
var isJSONRPCRequest = function (payload) {
    return (payload.jsonrpc === exports.JSONRPC &&
        payload.method !== undefined &&
        payload.result === undefined &&
        payload.error === undefined);
};
exports.isJSONRPCRequest = isJSONRPCRequest;
var isJSONRPCRequests = function (payload) {
    return Array.isArray(payload) && payload.every(exports.isJSONRPCRequest);
};
exports.isJSONRPCRequests = isJSONRPCRequests;
var isJSONRPCResponse = function (payload) {
    return (payload.jsonrpc === exports.JSONRPC &&
        payload.id !== undefined &&
        (payload.result !== undefined || payload.error !== undefined));
};
exports.isJSONRPCResponse = isJSONRPCResponse;
var isJSONRPCResponses = function (payload) {
    return Array.isArray(payload) && payload.every(exports.isJSONRPCResponse);
};
exports.isJSONRPCResponses = isJSONRPCResponses;
var createJSONRPCError = function (code, message, data) {
    var error = { code: code, message: message };
    if (data != null) {
        error.data = data;
    }
    return error;
};
var JSONRPCErrorException = /** @class */ (function (_super) {
    __extends(JSONRPCErrorException, _super);
    function JSONRPCErrorException(message, code, data) {
        var _this = _super.call(this, message) || this;
        // Manually set the prototype to fix TypeScript issue:
        // https://github.com/Microsoft/TypeScript-wiki/blob/main/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(_this, JSONRPCErrorException.prototype);
        _this.code = code;
        _this.data = data;
        return _this;
    }
    JSONRPCErrorException.prototype.toObject = function () {
        return createJSONRPCError(this.code, this.message, this.data);
    };
    return JSONRPCErrorException;
}(Error));
exports.JSONRPCErrorException = JSONRPCErrorException;
var JSONRPCErrorCode;
(function (JSONRPCErrorCode) {
    JSONRPCErrorCode[JSONRPCErrorCode["ParseError"] = -32700] = "ParseError";
    JSONRPCErrorCode[JSONRPCErrorCode["InvalidRequest"] = -32600] = "InvalidRequest";
    JSONRPCErrorCode[JSONRPCErrorCode["MethodNotFound"] = -32601] = "MethodNotFound";
    JSONRPCErrorCode[JSONRPCErrorCode["InvalidParams"] = -32602] = "InvalidParams";
    JSONRPCErrorCode[JSONRPCErrorCode["InternalError"] = -32603] = "InternalError";
})(JSONRPCErrorCode = exports.JSONRPCErrorCode || (exports.JSONRPCErrorCode = {}));
var createJSONRPCErrorResponse = function (id, code, message, data) {
    return {
        jsonrpc: exports.JSONRPC,
        id: id,
        error: createJSONRPCError(code, message, data),
    };
};
exports.createJSONRPCErrorResponse = createJSONRPCErrorResponse;
var createJSONRPCSuccessResponse = function (id, result) {
    return {
        jsonrpc: exports.JSONRPC,
        id: id,
        result: result !== null && result !== void 0 ? result : null,
    };
};
exports.createJSONRPCSuccessResponse = createJSONRPCSuccessResponse;
var createJSONRPCRequest = function (id, method, params) {
    return {
        jsonrpc: exports.JSONRPC,
        id: id,
        method: method,
        params: params,
    };
};
exports.createJSONRPCRequest = createJSONRPCRequest;
var createJSONRPCNotification = function (method, params) {
    return {
        jsonrpc: exports.JSONRPC,
        method: method,
        params: params,
    };
};
exports.createJSONRPCNotification = createJSONRPCNotification;


/***/ }),

/***/ "./node_modules/json-rpc-2.0/dist/server-and-client.js":
/*!*************************************************************!*\
  !*** ./node_modules/json-rpc-2.0/dist/server-and-client.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JSONRPCServerAndClient = void 0;
var models_1 = __webpack_require__(/*! ./models */ "./node_modules/json-rpc-2.0/dist/models.js");
var JSONRPCServerAndClient = /** @class */ (function () {
    function JSONRPCServerAndClient(server, client, options) {
        if (options === void 0) { options = {}; }
        var _a;
        this.server = server;
        this.client = client;
        this.errorListener = (_a = options.errorListener) !== null && _a !== void 0 ? _a : console.warn;
    }
    JSONRPCServerAndClient.prototype.applyServerMiddleware = function () {
        var _a;
        var middlewares = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            middlewares[_i] = arguments[_i];
        }
        (_a = this.server).applyMiddleware.apply(_a, middlewares);
    };
    JSONRPCServerAndClient.prototype.hasMethod = function (name) {
        return this.server.hasMethod(name);
    };
    JSONRPCServerAndClient.prototype.addMethod = function (name, method) {
        this.server.addMethod(name, method);
    };
    JSONRPCServerAndClient.prototype.addMethodAdvanced = function (name, method) {
        this.server.addMethodAdvanced(name, method);
    };
    JSONRPCServerAndClient.prototype.timeout = function (delay) {
        return this.client.timeout(delay);
    };
    JSONRPCServerAndClient.prototype.request = function (method, params, clientParams) {
        return this.client.request(method, params, clientParams);
    };
    JSONRPCServerAndClient.prototype.requestAdvanced = function (jsonRPCRequest, clientParams) {
        return this.client.requestAdvanced(jsonRPCRequest, clientParams);
    };
    JSONRPCServerAndClient.prototype.notify = function (method, params, clientParams) {
        this.client.notify(method, params, clientParams);
    };
    JSONRPCServerAndClient.prototype.rejectAllPendingRequests = function (message) {
        this.client.rejectAllPendingRequests(message);
    };
    JSONRPCServerAndClient.prototype.receiveAndSend = function (payload, serverParams, clientParams) {
        return __awaiter(this, void 0, void 0, function () {
            var response, message;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!((0, models_1.isJSONRPCResponse)(payload) || (0, models_1.isJSONRPCResponses)(payload))) return [3 /*break*/, 1];
                        this.client.receive(payload);
                        return [3 /*break*/, 4];
                    case 1:
                        if (!((0, models_1.isJSONRPCRequest)(payload) || (0, models_1.isJSONRPCRequests)(payload))) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.server.receive(payload, serverParams)];
                    case 2:
                        response = _a.sent();
                        if (response) {
                            return [2 /*return*/, this.client.send(response, clientParams)];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        message = "Received an invalid JSON-RPC message";
                        this.errorListener(message, payload);
                        return [2 /*return*/, Promise.reject(new Error(message))];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return JSONRPCServerAndClient;
}());
exports.JSONRPCServerAndClient = JSONRPCServerAndClient;


/***/ }),

/***/ "./node_modules/json-rpc-2.0/dist/server.js":
/*!**************************************************!*\
  !*** ./node_modules/json-rpc-2.0/dist/server.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JSONRPCServer = void 0;
var models_1 = __webpack_require__(/*! ./models */ "./node_modules/json-rpc-2.0/dist/models.js");
var internal_1 = __webpack_require__(/*! ./internal */ "./node_modules/json-rpc-2.0/dist/internal.js");
var createParseErrorResponse = function () {
    return (0, models_1.createJSONRPCErrorResponse)(null, models_1.JSONRPCErrorCode.ParseError, "Parse error");
};
var createInvalidRequestResponse = function (request) {
    return (0, models_1.createJSONRPCErrorResponse)((0, models_1.isJSONRPCID)(request.id) ? request.id : null, models_1.JSONRPCErrorCode.InvalidRequest, "Invalid Request");
};
var createMethodNotFoundResponse = function (id) {
    return (0, models_1.createJSONRPCErrorResponse)(id, models_1.JSONRPCErrorCode.MethodNotFound, "Method not found");
};
var JSONRPCServer = /** @class */ (function () {
    function JSONRPCServer(options) {
        if (options === void 0) { options = {}; }
        var _a;
        this.mapErrorToJSONRPCErrorResponse = defaultMapErrorToJSONRPCErrorResponse;
        this.nameToMethodDictionary = {};
        this.middleware = null;
        this.errorListener = (_a = options.errorListener) !== null && _a !== void 0 ? _a : console.warn;
    }
    JSONRPCServer.prototype.hasMethod = function (name) {
        return !!this.nameToMethodDictionary[name];
    };
    JSONRPCServer.prototype.addMethod = function (name, method) {
        this.addMethodAdvanced(name, this.toJSONRPCMethod(method));
    };
    JSONRPCServer.prototype.toJSONRPCMethod = function (method) {
        return function (request, serverParams) {
            var response = method(request.params, serverParams);
            return Promise.resolve(response).then(function (result) {
                return mapResultToJSONRPCResponse(request.id, result);
            });
        };
    };
    JSONRPCServer.prototype.addMethodAdvanced = function (name, method) {
        var _a;
        this.nameToMethodDictionary = __assign(__assign({}, this.nameToMethodDictionary), (_a = {}, _a[name] = method, _a));
    };
    JSONRPCServer.prototype.receiveJSON = function (json, serverParams) {
        var request = this.tryParseRequestJSON(json);
        if (request) {
            return this.receive(request, serverParams);
        }
        else {
            return Promise.resolve(createParseErrorResponse());
        }
    };
    JSONRPCServer.prototype.tryParseRequestJSON = function (json) {
        try {
            return JSON.parse(json);
        }
        catch (_a) {
            return null;
        }
    };
    JSONRPCServer.prototype.receive = function (request, serverParams) {
        if (Array.isArray(request)) {
            return this.receiveMultiple(request, serverParams);
        }
        else {
            return this.receiveSingle(request, serverParams);
        }
    };
    JSONRPCServer.prototype.receiveMultiple = function (requests, serverParams) {
        return __awaiter(this, void 0, void 0, function () {
            var responses;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(requests.map(function (request) { return _this.receiveSingle(request, serverParams); }))];
                    case 1:
                        responses = (_a.sent()).filter(isNonNull);
                        if (responses.length === 1) {
                            return [2 /*return*/, responses[0]];
                        }
                        else if (responses.length) {
                            return [2 /*return*/, responses];
                        }
                        else {
                            return [2 /*return*/, null];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    JSONRPCServer.prototype.receiveSingle = function (request, serverParams) {
        return __awaiter(this, void 0, void 0, function () {
            var method, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = this.nameToMethodDictionary[request.method];
                        if (!!(0, models_1.isJSONRPCRequest)(request)) return [3 /*break*/, 1];
                        return [2 /*return*/, createInvalidRequestResponse(request)];
                    case 1: return [4 /*yield*/, this.callMethod(method, request, serverParams)];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, mapResponse(request, response)];
                }
            });
        });
    };
    JSONRPCServer.prototype.applyMiddleware = function () {
        var middlewares = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            middlewares[_i] = arguments[_i];
        }
        if (this.middleware) {
            this.middleware = this.combineMiddlewares(__spreadArray([
                this.middleware
            ], middlewares, true));
        }
        else {
            this.middleware = this.combineMiddlewares(middlewares);
        }
    };
    JSONRPCServer.prototype.combineMiddlewares = function (middlewares) {
        if (!middlewares.length) {
            return null;
        }
        else {
            return middlewares.reduce(this.middlewareReducer);
        }
    };
    JSONRPCServer.prototype.middlewareReducer = function (prevMiddleware, nextMiddleware) {
        return function (next, request, serverParams) {
            return prevMiddleware(function (request, serverParams) { return nextMiddleware(next, request, serverParams); }, request, serverParams);
        };
    };
    JSONRPCServer.prototype.callMethod = function (method, request, serverParams) {
        var _this = this;
        var callMethod = function (request, serverParams) {
            if (method) {
                return method(request, serverParams);
            }
            else if (request.id !== undefined) {
                return Promise.resolve(createMethodNotFoundResponse(request.id));
            }
            else {
                return Promise.resolve(null);
            }
        };
        var onError = function (error) {
            _this.errorListener("An unexpected error occurred while executing \"".concat(request.method, "\" JSON-RPC method:"), error);
            return Promise.resolve(_this.mapErrorToJSONRPCErrorResponseIfNecessary(request.id, error));
        };
        try {
            return (this.middleware || noopMiddleware)(callMethod, request, serverParams).then(undefined, onError);
        }
        catch (error) {
            return onError(error);
        }
    };
    JSONRPCServer.prototype.mapErrorToJSONRPCErrorResponseIfNecessary = function (id, error) {
        if (id !== undefined) {
            return this.mapErrorToJSONRPCErrorResponse(id, error);
        }
        else {
            return null;
        }
    };
    return JSONRPCServer;
}());
exports.JSONRPCServer = JSONRPCServer;
var isNonNull = function (value) { return value !== null; };
var noopMiddleware = function (next, request, serverParams) { return next(request, serverParams); };
var mapResultToJSONRPCResponse = function (id, result) {
    if (id !== undefined) {
        return (0, models_1.createJSONRPCSuccessResponse)(id, result);
    }
    else {
        return null;
    }
};
var defaultMapErrorToJSONRPCErrorResponse = function (id, error) {
    var _a;
    var message = (_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : "An unexpected error occurred";
    var code = internal_1.DefaultErrorCode;
    var data;
    if (error instanceof models_1.JSONRPCErrorException) {
        code = error.code;
        data = error.data;
    }
    return (0, models_1.createJSONRPCErrorResponse)(id, code, message, data);
};
var mapResponse = function (request, response) {
    if (response) {
        return response;
    }
    else if (request.id !== undefined) {
        return (0, models_1.createJSONRPCErrorResponse)(request.id, models_1.JSONRPCErrorCode.InternalError, "Internal error");
    }
    else {
        return null;
    }
};


/***/ }),

/***/ "../../node_modules/nanoevents/index.js":
/*!**********************************************!*\
  !*** ../../node_modules/nanoevents/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNanoEvents": () => (/* binding */ createNanoEvents)
/* harmony export */ });
let createNanoEvents = () => ({
  events: {},
  emit(event, ...args) {
    ;(this.events[event] || []).forEach(i => i(...args))
  },
  on(event, cb) {
    ;(this.events[event] = this.events[event] || []).push(cb)
    return () =>
      (this.events[event] = (this.events[event] || []).filter(i => i !== cb))
  }
})


/***/ }),

/***/ "../../node_modules/nanoid/index.browser.js":
/*!**************************************************!*\
  !*** ../../node_modules/nanoid/index.browser.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customAlphabet": () => (/* binding */ customAlphabet),
/* harmony export */   "customRandom": () => (/* binding */ customRandom),
/* harmony export */   "nanoid": () => (/* binding */ nanoid),
/* harmony export */   "random": () => (/* binding */ random),
/* harmony export */   "urlAlphabet": () => (/* reexport safe */ _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__.urlAlphabet)
/* harmony export */ });
/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-alphabet/index.js */ "../../node_modules/nanoid/url-alphabet/index.js");

let random = bytes => crypto.getRandomValues(new Uint8Array(bytes))
let customRandom = (alphabet, defaultSize, getRandom) => {
  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1
  let step = -~((1.6 * mask * defaultSize) / alphabet.length)
  return (size = defaultSize) => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      let j = step
      while (j--) {
        id += alphabet[bytes[j] & mask] || ''
        if (id.length === size) return id
      }
    }
  }
}
let customAlphabet = (alphabet, size = 21) =>
  customRandom(alphabet, size, random)
let nanoid = (size = 21) =>
  crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {
    byte &= 63
    if (byte < 36) {
      id += byte.toString(36)
    } else if (byte < 62) {
      id += (byte - 26).toString(36).toUpperCase()
    } else if (byte > 62) {
      id += '-'
    } else {
      id += '_'
    }
    return id
  }, '')



/***/ }),

/***/ "../../node_modules/nanoid/url-alphabet/index.js":
/*!*******************************************************!*\
  !*** ../../node_modules/nanoid/url-alphabet/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "urlAlphabet": () => (/* binding */ urlAlphabet)
/* harmony export */ });
let urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'



/***/ }),

/***/ "../../node_modules/serialize-error/index.js":
/*!***************************************************!*\
  !*** ../../node_modules/serialize-error/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NonError": () => (/* binding */ NonError),
/* harmony export */   "deserializeError": () => (/* binding */ deserializeError),
/* harmony export */   "serializeError": () => (/* binding */ serializeError)
/* harmony export */ });
class NonError extends Error {
	name = 'NonError';

	constructor(message) {
		super(NonError._prepareSuperMessage(message));
	}

	static _prepareSuperMessage(message) {
		try {
			return JSON.stringify(message);
		} catch {
			return String(message);
		}
	}
}

const commonProperties = [
	{
		property: 'name',
		enumerable: false,
	},
	{
		property: 'message',
		enumerable: false,
	},
	{
		property: 'stack',
		enumerable: false,
	},
	{
		property: 'code',
		enumerable: true,
	},
];

const toJsonWasCalled = Symbol('.toJSON was called');

const toJSON = from => {
	from[toJsonWasCalled] = true;
	const json = from.toJSON();
	delete from[toJsonWasCalled];
	return json;
};

const destroyCircular = ({
	from,
	seen,
	to_,
	forceEnumerable,
	maxDepth,
	depth,
}) => {
	const to = to_ || (Array.isArray(from) ? [] : {});

	seen.push(from);

	if (depth >= maxDepth) {
		return to;
	}

	if (typeof from.toJSON === 'function' && from[toJsonWasCalled] !== true) {
		return toJSON(from);
	}

	for (const [key, value] of Object.entries(from)) {
		// eslint-disable-next-line node/prefer-global/buffer
		if (typeof Buffer === 'function' && Buffer.isBuffer(value)) {
			to[key] = '[object Buffer]';
			continue;
		}

		// TODO: Use `stream.isReadable()` when targeting Node.js 18.
		if (value !== null && typeof value === 'object' && typeof value.pipe === 'function') {
			to[key] = '[object Stream]';
			continue;
		}

		if (typeof value === 'function') {
			continue;
		}

		if (!value || typeof value !== 'object') {
			to[key] = value;
			continue;
		}

		if (!seen.includes(from[key])) {
			depth++;

			to[key] = destroyCircular({
				from: from[key],
				seen: [...seen],
				forceEnumerable,
				maxDepth,
				depth,
			});
			continue;
		}

		to[key] = '[Circular]';
	}

	for (const {property, enumerable} of commonProperties) {
		if (typeof from[property] === 'string') {
			Object.defineProperty(to, property, {
				value: from[property],
				enumerable: forceEnumerable ? true : enumerable,
				configurable: true,
				writable: true,
			});
		}
	}

	return to;
};

function serializeError(value, options = {}) {
	const {maxDepth = Number.POSITIVE_INFINITY} = options;

	if (typeof value === 'object' && value !== null) {
		return destroyCircular({
			from: value,
			seen: [],
			forceEnumerable: true,
			maxDepth,
			depth: 0,
		});
	}

	// People sometimes throw things besides Error objects…
	if (typeof value === 'function') {
		// `JSON.stringify()` discards functions. We do too, unless a function is thrown directly.
		return `[Function: ${(value.name || 'anonymous')}]`;
	}

	return value;
}

function deserializeError(value, options = {}) {
	const {maxDepth = Number.POSITIVE_INFINITY} = options;

	if (value instanceof Error) {
		return value;
	}

	if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
		const newError = new Error(); // eslint-disable-line unicorn/error-message
		destroyCircular({
			from: value,
			seen: [],
			to_: newError,
			maxDepth,
			depth: 0,
		});
		return newError;
	}

	return new NonError(value);
}


/***/ }),

/***/ "../../node_modules/webext-bridge/dist/index.mjs":
/*!*******************************************************!*\
  !*** ../../node_modules/webext-bridge/dist/index.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Stream": () => (/* binding */ Stream),
/* harmony export */   "allowWindowMessaging": () => (/* binding */ allowWindowMessaging),
/* harmony export */   "getCurrentContext": () => (/* binding */ getCurrentContext),
/* harmony export */   "isInternalEndpoint": () => (/* binding */ isInternalEndpoint),
/* harmony export */   "onMessage": () => (/* binding */ onMessage),
/* harmony export */   "onOpenStreamChannel": () => (/* binding */ onOpenStreamChannel),
/* harmony export */   "openStream": () => (/* binding */ openStream),
/* harmony export */   "parseEndpoint": () => (/* binding */ parseEndpoint),
/* harmony export */   "sendMessage": () => (/* binding */ sendMessage),
/* harmony export */   "setNamespace": () => (/* binding */ setNamespace)
/* harmony export */ });
/* harmony import */ var nanoevents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nanoevents */ "../../node_modules/nanoevents/index.js");
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webextension-polyfill */ "../../node_modules/webext-bridge/node_modules/webextension-polyfill/dist/browser-polyfill.js");
/* harmony import */ var serialize_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! serialize-error */ "../../node_modules/serialize-error/index.js");
/* harmony import */ var tiny_uid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tiny-uid */ "../../node_modules/tiny-uid/index.js");
// src/stream.ts


// src/internal.ts




// src/utils.ts

var ENDPOINT_RE = /^((?:background$)|devtools|popup|options|content-script|window)(?:@(\d+)(?:\.(\d+))?)?$/;
var parseEndpoint = (endpoint) => {
  const [, context2, tabId, frameId] = endpoint.match(ENDPOINT_RE) || [];
  return {
    context: context2,
    tabId: +tabId,
    frameId: frameId ? +frameId : void 0
  };
};
var isInternalEndpoint = ({ context: ctx }) => ["content-script", "background", "devtools"].includes(ctx);
var hasAPI = (nsps) => webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__[nsps];
var getBackgroundPageType = () => {
  var _a, _b, _c;
  const manifest = webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__.runtime.getManifest();
  if (typeof window === "undefined")
    return "background";
  const popupPage = ((_a = manifest.browser_action) == null ? void 0 : _a.default_popup) || ((_b = manifest.action) == null ? void 0 : _b.default_popup);
  if (popupPage) {
    const url = new URL(webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__.runtime.getURL(popupPage));
    if (url.pathname === window.location.pathname)
      return "popup";
  }
  if ((_c = manifest.options_ui) == null ? void 0 : _c.page) {
    const url = new URL(webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__.runtime.getURL(manifest.options_ui.page));
    if (url.pathname === window.location.pathname)
      return "options";
  }
  return "background";
};

// src/internal.ts
var context = hasAPI("devtools") ? "devtools" : hasAPI("tabs") ? getBackgroundPageType() : hasAPI("extension") ? "content-script" : typeof document !== "undefined" ? "window" : null;
var runtimeId = tiny_uid__WEBPACK_IMPORTED_MODULE_2__();
var openTransactions = /* @__PURE__ */ new Map();
var onMessageListeners = /* @__PURE__ */ new Map();
var messageQueue = /* @__PURE__ */ new Set();
var portMap = /* @__PURE__ */ new Map();
var port = null;
var namespace;
var isWindowMessagingAllowed;
initIntercoms();
function setNamespace(nsps) {
  namespace = nsps;
}
function allowWindowMessaging(nsps) {
  isWindowMessagingAllowed = true;
  namespace = nsps;
}
function initIntercoms() {
  if (context === null)
    throw new Error("Unable to detect runtime context i.e webext-bridge can't figure out what to do");
  if (context === "window" || context === "content-script")
    window.addEventListener("message", handleWindowOnMessage);
  if (context === "content-script" && top === window) {
    port = webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__.runtime.connect();
    port.onMessage.addListener((message) => {
      routeMessage(message);
    });
    port.onDisconnect.addListener(() => {
      port = null;
      initIntercoms();
    });
  }
  if (context === "content-script" && top !== window) {
    port = webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__.runtime.connect();
    port.onMessage.addListener((message) => {
      routeMessage(message);
    });
    port.onDisconnect.addListener(() => {
      port = null;
      initIntercoms();
    });
  }
  if (context === "devtools") {
    const { tabId } = webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__.devtools.inspectedWindow;
    const name = `devtools@${tabId}`;
    port = webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__.runtime.connect(void 0, { name });
    port.onMessage.addListener((message) => {
      routeMessage(message);
    });
    port.onDisconnect.addListener(() => {
      port = null;
      initIntercoms();
    });
  }
  if (context === "popup" || context === "options") {
    const name = `${context}`;
    port = webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__.runtime.connect(void 0, { name });
    port.onMessage.addListener((message) => {
      routeMessage(message);
    });
    port.onDisconnect.addListener(() => {
      port = null;
      initIntercoms();
    });
  }
  if (context === "background") {
    webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__.runtime.onConnect.addListener((incomingPort) => {
      let portId = incomingPort.name || `content-script@${incomingPort.sender.tab.id}`;
      const portFrame = incomingPort.sender.frameId;
      if (portFrame)
        portId = `${portId}.${portFrame}`;
      const { context: context2, tabId: linkedTabId, frameId: linkedFrameId } = parseEndpoint(portId);
      if (!linkedTabId && context2 !== "popup" && context2 !== "options")
        return;
      portMap.set(portId, incomingPort);
      messageQueue.forEach((queuedMsg) => {
        if (queuedMsg.resolvedDestination === portId) {
          incomingPort.postMessage(queuedMsg.message);
          messageQueue.delete(queuedMsg);
        }
      });
      incomingPort.onDisconnect.addListener(() => {
        portMap.delete(portId);
      });
      incomingPort.onMessage.addListener((message) => {
        var _a;
        if ((_a = message == null ? void 0 : message.origin) == null ? void 0 : _a.context) {
          message.origin.tabId = linkedTabId;
          message.origin.frameId = linkedFrameId;
          routeMessage(message);
        }
      });
    });
  }
}
function routeMessage(message) {
  const { origin, destination } = message;
  if (message.hops.includes(runtimeId))
    return;
  message.hops.push(runtimeId);
  if (context === "content-script" && [destination, origin].some((endpoint) => (endpoint == null ? void 0 : endpoint.context) === "window") && !isWindowMessagingAllowed)
    return;
  if (!destination)
    return handleInboundMessage(message);
  if (destination.context) {
    if (context === "window") {
      return routeMessageThroughWindow(window, message);
    } else if (context === "content-script" && destination.context === "window") {
      message.destination = null;
      return routeMessageThroughWindow(window, message);
    } else if (["devtools", "content-script", "popup", "options"].includes(context)) {
      if (destination.context === "background")
        message.destination = null;
      return port.postMessage(message);
    } else if (context === "background") {
      const { context: destName, tabId: destTabId, frameId: destFrameId } = destination;
      const { tabId: srcTabId } = origin;
      if (destName !== "window") {
        message.destination = null;
      } else {
        message.destination.tabId = null;
      }
      let resolvedDestination = ["popup", "options"].includes(destName) ? destName : `${destName === "window" ? "content-script" : destName}@${destTabId || srcTabId}`;
      if (destFrameId)
        resolvedDestination = `${resolvedDestination}.${destFrameId}`;
      const destPort = portMap.get(resolvedDestination);
      if (destPort)
        destPort.postMessage(message);
      else
        messageQueue.add({ resolvedDestination, message });
    }
  }
}
async function handleInboundMessage(message) {
  const { transactionId, messageID, messageType } = message;
  const handleReply = () => {
    const transactionP = openTransactions.get(transactionId);
    if (transactionP) {
      const { err, data } = message;
      if (err) {
        const dehydratedErr = err;
        const errCtr = self[dehydratedErr.name];
        const hydratedErr = new (typeof errCtr === "function" ? errCtr : Error)(dehydratedErr.message);
        for (const prop in dehydratedErr)
          hydratedErr[prop] = dehydratedErr[prop];
        transactionP.reject(hydratedErr);
      } else {
        transactionP.resolve(data);
      }
      openTransactions.delete(transactionId);
    }
  };
  const handleNewMessage = async () => {
    let reply;
    let err;
    let noHandlerFoundError = false;
    try {
      const cb = onMessageListeners.get(messageID);
      if (typeof cb === "function") {
        reply = await cb({
          sender: message.origin,
          id: messageID,
          data: message.data,
          timestamp: message.timestamp
        });
      } else {
        noHandlerFoundError = true;
        throw new Error(`[webext-bridge] No handler registered in '${context}' to accept messages with id '${messageID}'`);
      }
    } catch (error) {
      err = error;
    } finally {
      if (err)
        message.err = (0,serialize_error__WEBPACK_IMPORTED_MODULE_1__.serializeError)(err);
      routeMessage({
        ...message,
        messageType: "reply",
        data: reply,
        origin: { context, tabId: null },
        destination: message.origin,
        hops: []
      });
      if (err && !noHandlerFoundError)
        throw reply;
    }
  };
  switch (messageType) {
    case "reply":
      return handleReply();
    case "message":
      return handleNewMessage();
  }
}
function assertInternalMessage(msg) {
}
async function handleWindowOnMessage({ data, ports }) {
  if (context === "content-script" && !isWindowMessagingAllowed)
    return;
  if (data.cmd === "__crx_bridge_verify_listening" && data.scope === namespace && data.context !== context) {
    const msgPort = ports[0];
    msgPort.postMessage(true);
  } else if (data.cmd === "__crx_bridge_route_message" && data.scope === namespace && data.context !== context) {
    const { payload } = data;
    assertInternalMessage(payload);
    if (context === "content-script") {
      payload.origin = {
        context: "window",
        tabId: null
      };
    }
    routeMessage(payload);
  }
}
function routeMessageThroughWindow(win, msg) {
  ensureNamespaceSet();
  const channel = new MessageChannel();
  const retry = setTimeout(() => {
    channel.port1.onmessage = null;
    routeMessageThroughWindow(win, msg);
  }, 300);
  channel.port1.onmessage = () => {
    clearTimeout(retry);
    win.postMessage({
      cmd: "__crx_bridge_route_message",
      scope: namespace,
      context,
      payload: msg
    }, "*");
  };
  win.postMessage({
    cmd: "__crx_bridge_verify_listening",
    scope: namespace,
    context
  }, "*", [channel.port2]);
}
function ensureNamespaceSet() {
  if (typeof namespace !== "string" || namespace.length === 0) {
    throw new Error(`webext-bridge uses window.postMessage to talk with other "window"(s), for message routing and stuff,which is global/conflicting operation in case there are other scripts using webext-bridge. Call Bridge#setNamespace(nsps) to isolate your app. Example: setNamespace('com.facebook.react-devtools'). Make sure to use same namespace across all your scripts whereever window.postMessage is likely to be used\``);
  }
}
function getCurrentContext() {
  return context;
}

// src/apis/onMessage.ts
function onMessage(messageID, callback) {
  onMessageListeners.set(messageID, callback);
}

// src/apis/sendMessage.ts

async function sendMessage(messageID, data, destination = "background") {
  const endpoint = typeof destination === "string" ? parseEndpoint(destination) : destination;
  const errFn = "Bridge#sendMessage ->";
  if (!endpoint.context)
    throw new TypeError(`${errFn} Destination must be any one of known destinations`);
  if (context === "background") {
    const { context: dest, tabId: destTabId } = endpoint;
    if (dest !== "background" && !destTabId)
      throw new TypeError(`${errFn} When sending messages from background page, use @tabId syntax to target specific tab`);
  }
  return new Promise((resolve, reject) => {
    const payload = {
      messageID,
      data,
      destination: endpoint,
      messageType: "message",
      transactionId: tiny_uid__WEBPACK_IMPORTED_MODULE_2__(),
      origin: { context, tabId: null },
      hops: [],
      timestamp: Date.now()
    };
    openTransactions.set(payload.transactionId, { resolve, reject });
    routeMessage(payload);
  });
}

// src/stream.ts
var _Stream = class {
  constructor(t) {
    this.handleStreamClose = () => {
      if (!this.isClosed) {
        this.isClosed = true;
        this.emitter.emit("closed", true);
        this.emitter.events = {};
      }
    };
    this.internalInfo = t;
    this.emitter = (0,nanoevents__WEBPACK_IMPORTED_MODULE_3__.createNanoEvents)();
    this.isClosed = false;
    if (!_Stream.initDone) {
      onMessage("__crx_bridge_stream_transfer__", (msg) => {
        const { streamId, streamTransfer, action } = msg.data;
        const stream = _Stream.openStreams.get(streamId);
        if (stream && !stream.isClosed) {
          if (action === "transfer")
            stream.emitter.emit("message", streamTransfer);
          if (action === "close") {
            _Stream.openStreams.delete(streamId);
            stream.handleStreamClose();
          }
        }
      });
      _Stream.initDone = true;
    }
    _Stream.openStreams.set(t.streamId, this);
  }
  get info() {
    return this.internalInfo;
  }
  send(msg) {
    if (this.isClosed)
      throw new Error("Attempting to send a message over closed stream. Use stream.onClose(<callback>) to keep an eye on stream status");
    sendMessage("__crx_bridge_stream_transfer__", {
      streamId: this.internalInfo.streamId,
      streamTransfer: msg,
      action: "transfer"
    }, this.internalInfo.endpoint);
  }
  close(msg) {
    if (msg)
      this.send(msg);
    this.handleStreamClose();
    sendMessage("__crx_bridge_stream_transfer__", {
      streamId: this.internalInfo.streamId,
      streamTransfer: null,
      action: "close"
    }, this.internalInfo.endpoint);
  }
  onMessage(callback) {
    return this.getDisposable("message", callback);
  }
  onClose(callback) {
    return this.getDisposable("closed", callback);
  }
  getDisposable(event, callback) {
    const off = this.emitter.on(event, callback);
    return Object.assign(off, {
      dispose: off,
      close: off
    });
  }
};
var Stream = _Stream;
Stream.initDone = false;
Stream.openStreams = /* @__PURE__ */ new Map();

// src/bridge.ts


var openStreams = /* @__PURE__ */ new Map();
var onOpenStreamCallbacks = /* @__PURE__ */ new Map();
var streamyEmitter = (0,nanoevents__WEBPACK_IMPORTED_MODULE_3__.createNanoEvents)();
onMessage("__crx_bridge_stream_open__", (message) => {
  return new Promise((resolve) => {
    const { sender, data } = message;
    const { channel } = data;
    let watching = false;
    let off = () => {
    };
    const readyup = () => {
      const callback = onOpenStreamCallbacks.get(channel);
      if (typeof callback === "function") {
        callback(new Stream({ ...data, endpoint: sender }));
        if (watching)
          off();
        resolve(true);
      } else if (!watching) {
        watching = true;
        off = streamyEmitter.on("did-change-stream-callbacks", readyup);
      }
    };
    readyup();
  });
});
async function openStream(channel, destination) {
  if (openStreams.has(channel))
    throw new Error("webext-bridge: A Stream is already open at this channel");
  const endpoint = typeof destination === "string" ? parseEndpoint(destination) : destination;
  const streamInfo = { streamId: tiny_uid__WEBPACK_IMPORTED_MODULE_2__(), channel, endpoint };
  const stream = new Stream(streamInfo);
  stream.onClose(() => openStreams.delete(channel));
  await sendMessage("__crx_bridge_stream_open__", streamInfo, endpoint);
  openStreams.set(channel, stream);
  return stream;
}
function onOpenStreamChannel(channel, callback) {
  if (onOpenStreamCallbacks.has(channel))
    throw new Error("webext-bridge: This channel has already been claimed. Stream allows only one-on-one communication");
  onOpenStreamCallbacks.set(channel, callback);
  streamyEmitter.emit("did-change-stream-callbacks");
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*****************************************************************************************************************!*\
  !*** ../../node_modules/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1! ***!
  \*****************************************************************************************************************/
/** @type {WebSocket} */
let ws;
/** @type {number} */
let connectInterval;

function tryConnect() {
  connectInterval = setInterval(() => {
    try {
      if (!ws) {
        ws = new WebSocket(`ws://localhost:${23333}`);
      }
      clearInterval(connectInterval);

      ws.onmessage = (event) => {
        const message = JSON.parse(event.data);
        if (message.type === 'update') {
          console.log('Detect extension service worker change, reload extension');
          if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.reload) {
            chrome.runtime.reload();
          }
        }
      };
      ws.onclose = () => {
        ws = null;
        tryConnect();
      };
    } catch (e) {
      console.error('Can not connect extension hot reload server, retry in 3 seconds');
    }
  }, 3000);
}

tryConnect();

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************************!*\
  !*** ./src/background/main.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webext_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webext-bridge */ "../../node_modules/webext-bridge/dist/index.mjs");
/* harmony import */ var _rpc_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rpc/server */ "./src/rpc/server.ts");
/* harmony import */ var _rpc_walletImpl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rpc/walletImpl */ "./src/rpc/walletImpl.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




// listen message from content script
(0,webext_bridge__WEBPACK_IMPORTED_MODULE_0__.onMessage)('rpc', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
    var data, sender;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            data = _ref.data, sender = _ref.sender;
            return _context.abrupt("return", _rpc_server__WEBPACK_IMPORTED_MODULE_1__.server.receive(data, (0,_rpc_server__WEBPACK_IMPORTED_MODULE_1__.createRpcServerParams)({
              endpoint: sender
            })));
          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}());
})();

/******/ })()
;
//# sourceMappingURL=background.js.map