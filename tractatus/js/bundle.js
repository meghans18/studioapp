/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
;(function() {

  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;

  /** Used as the semantic version number. */
  var VERSION = '4.17.4';

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /** Error message constants. */
  var CORE_ERROR_TEXT = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
      FUNC_ERROR_TEXT = 'Expected a function';

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /** Used as the maximum memoize cache size. */
  var MAX_MEMOIZE_SIZE = 500;

  /** Used as the internal argument placeholder. */
  var PLACEHOLDER = '__lodash_placeholder__';

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG = 1,
      CLONE_FLAT_FLAG = 2,
      CLONE_SYMBOLS_FLAG = 4;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG = 1,
      COMPARE_UNORDERED_FLAG = 2;

  /** Used to compose bitmasks for function metadata. */
  var WRAP_BIND_FLAG = 1,
      WRAP_BIND_KEY_FLAG = 2,
      WRAP_CURRY_BOUND_FLAG = 4,
      WRAP_CURRY_FLAG = 8,
      WRAP_CURRY_RIGHT_FLAG = 16,
      WRAP_PARTIAL_FLAG = 32,
      WRAP_PARTIAL_RIGHT_FLAG = 64,
      WRAP_ARY_FLAG = 128,
      WRAP_REARG_FLAG = 256,
      WRAP_FLIP_FLAG = 512;

  /** Used as default options for `_.truncate`. */
  var DEFAULT_TRUNC_LENGTH = 30,
      DEFAULT_TRUNC_OMISSION = '...';

  /** Used to detect hot functions by number of calls within a span of milliseconds. */
  var HOT_COUNT = 800,
      HOT_SPAN = 16;

  /** Used to indicate the type of lazy iteratees. */
  var LAZY_FILTER_FLAG = 1,
      LAZY_MAP_FLAG = 2,
      LAZY_WHILE_FLAG = 3;

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0,
      MAX_SAFE_INTEGER = 9007199254740991,
      MAX_INTEGER = 1.7976931348623157e+308,
      NAN = 0 / 0;

  /** Used as references for the maximum length and index of an array. */
  var MAX_ARRAY_LENGTH = 4294967295,
      MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
      HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;

  /** Used to associate wrap methods with their bit flags. */
  var wrapFlags = [
    ['ary', WRAP_ARY_FLAG],
    ['bind', WRAP_BIND_FLAG],
    ['bindKey', WRAP_BIND_KEY_FLAG],
    ['curry', WRAP_CURRY_FLAG],
    ['curryRight', WRAP_CURRY_RIGHT_FLAG],
    ['flip', WRAP_FLIP_FLAG],
    ['partial', WRAP_PARTIAL_FLAG],
    ['partialRight', WRAP_PARTIAL_RIGHT_FLAG],
    ['rearg', WRAP_REARG_FLAG]
  ];

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      asyncTag = '[object AsyncFunction]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      domExcTag = '[object DOMException]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      nullTag = '[object Null]',
      objectTag = '[object Object]',
      promiseTag = '[object Promise]',
      proxyTag = '[object Proxy]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      symbolTag = '[object Symbol]',
      undefinedTag = '[object Undefined]',
      weakMapTag = '[object WeakMap]',
      weakSetTag = '[object WeakSet]';

  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';

  /** Used to match empty string literals in compiled template source. */
  var reEmptyStringLeading = /\b__p \+= '';/g,
      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

  /** Used to match HTML entities and HTML characters. */
  var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g,
      reUnescapedHtml = /[&<>"']/g,
      reHasEscapedHtml = RegExp(reEscapedHtml.source),
      reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

  /** Used to match template delimiters. */
  var reEscape = /<%-([\s\S]+?)%>/g,
      reEvaluate = /<%([\s\S]+?)%>/g,
      reInterpolate = /<%=([\s\S]+?)%>/g;

  /** Used to match property names within property paths. */
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/,
      reLeadingDot = /^\./,
      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
      reHasRegExpChar = RegExp(reRegExpChar.source);

  /** Used to match leading and trailing whitespace. */
  var reTrim = /^\s+|\s+$/g,
      reTrimStart = /^\s+/,
      reTrimEnd = /\s+$/;

  /** Used to match wrap detail comments. */
  var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
      reSplitDetails = /,? & /;

  /** Used to match words composed of alphanumeric characters. */
  var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

  /** Used to match backslashes in property paths. */
  var reEscapeChar = /\\(\\)?/g;

  /**
   * Used to match
   * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
   */
  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;

  /** Used to match `RegExp` flags from their coerced string values. */
  var reFlags = /\w*$/;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /** Used to match Latin Unicode letters (excluding mathematical operators). */
  var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

  /** Used to ensure capturing order of template delimiters. */
  var reNoMatch = /($^)/;

  /** Used to match unescaped characters in compiled string literals. */
  var reUnescapedString = /['\n\r\u2028\u2029\\]/g;

  /** Used to compose unicode character classes. */
  var rsAstralRange = '\\ud800-\\udfff',
      rsComboMarksRange = '\\u0300-\\u036f',
      reComboHalfMarksRange = '\\ufe20-\\ufe2f',
      rsComboSymbolsRange = '\\u20d0-\\u20ff',
      rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
      rsDingbatRange = '\\u2700-\\u27bf',
      rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
      rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
      rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
      rsPunctuationRange = '\\u2000-\\u206f',
      rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
      rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
      rsVarRange = '\\ufe0e\\ufe0f',
      rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

  /** Used to compose unicode capture groups. */
  var rsApos = "['\u2019]",
      rsAstral = '[' + rsAstralRange + ']',
      rsBreak = '[' + rsBreakRange + ']',
      rsCombo = '[' + rsComboRange + ']',
      rsDigits = '\\d+',
      rsDingbat = '[' + rsDingbatRange + ']',
      rsLower = '[' + rsLowerRange + ']',
      rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
      rsFitz = '\\ud83c[\\udffb-\\udfff]',
      rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
      rsNonAstral = '[^' + rsAstralRange + ']',
      rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      rsUpper = '[' + rsUpperRange + ']',
      rsZWJ = '\\u200d';

  /** Used to compose unicode regexes. */
  var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
      rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
      rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
      rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
      reOptMod = rsModifier + '?',
      rsOptVar = '[' + rsVarRange + ']?',
      rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
      rsOrdLower = '\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)',
      rsOrdUpper = '\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)',
      rsSeq = rsOptVar + reOptMod + rsOptJoin,
      rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq,
      rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

  /** Used to match apostrophes. */
  var reApos = RegExp(rsApos, 'g');

  /**
   * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
   * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
   */
  var reComboMark = RegExp(rsCombo, 'g');

  /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
  var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

  /** Used to match complex or compound words. */
  var reUnicodeWord = RegExp([
    rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
    rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
    rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
    rsUpper + '+' + rsOptContrUpper,
    rsOrdUpper,
    rsOrdLower,
    rsDigits,
    rsEmoji
  ].join('|'), 'g');

  /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
  var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

  /** Used to detect strings that need a more robust regexp to match words. */
  var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

  /** Used to assign default `context` object properties. */
  var contextProps = [
    'Array', 'Buffer', 'DataView', 'Date', 'Error', 'Float32Array', 'Float64Array',
    'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Map', 'Math', 'Object',
    'Promise', 'RegExp', 'Set', 'String', 'Symbol', 'TypeError', 'Uint8Array',
    'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap',
    '_', 'clearTimeout', 'isFinite', 'parseInt', 'setTimeout'
  ];

  /** Used to make template sourceURLs easier to identify. */
  var templateCounter = -1;

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
  typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
  typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
  typedArrayTags[errorTag] = typedArrayTags[funcTag] =
  typedArrayTags[mapTag] = typedArrayTags[numberTag] =
  typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
  typedArrayTags[setTag] = typedArrayTags[stringTag] =
  typedArrayTags[weakMapTag] = false;

  /** Used to identify `toStringTag` values supported by `_.clone`. */
  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] =
  cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
  cloneableTags[boolTag] = cloneableTags[dateTag] =
  cloneableTags[float32Tag] = cloneableTags[float64Tag] =
  cloneableTags[int8Tag] = cloneableTags[int16Tag] =
  cloneableTags[int32Tag] = cloneableTags[mapTag] =
  cloneableTags[numberTag] = cloneableTags[objectTag] =
  cloneableTags[regexpTag] = cloneableTags[setTag] =
  cloneableTags[stringTag] = cloneableTags[symbolTag] =
  cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
  cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] =
  cloneableTags[weakMapTag] = false;

  /** Used to map Latin Unicode letters to basic Latin letters. */
  var deburredLetters = {
    // Latin-1 Supplement block.
    '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
    '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
    '\xc7': 'C',  '\xe7': 'c',
    '\xd0': 'D',  '\xf0': 'd',
    '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
    '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
    '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
    '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
    '\xd1': 'N',  '\xf1': 'n',
    '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
    '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
    '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
    '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
    '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
    '\xc6': 'Ae', '\xe6': 'ae',
    '\xde': 'Th', '\xfe': 'th',
    '\xdf': 'ss',
    // Latin Extended-A block.
    '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
    '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
    '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
    '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
    '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
    '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
    '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
    '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
    '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
    '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
    '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
    '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
    '\u0134': 'J',  '\u0135': 'j',
    '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
    '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
    '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
    '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
    '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
    '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
    '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
    '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
    '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
    '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
    '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
    '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
    '\u0163': 't',  '\u0165': 't', '\u0167': 't',
    '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
    '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
    '\u0174': 'W',  '\u0175': 'w',
    '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
    '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
    '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
    '\u0132': 'IJ', '\u0133': 'ij',
    '\u0152': 'Oe', '\u0153': 'oe',
    '\u0149': "'n", '\u017f': 's'
  };

  /** Used to map characters to HTML entities. */
  var htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };

  /** Used to map HTML entities to characters. */
  var htmlUnescapes = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'"
  };

  /** Used to escape characters for inclusion in compiled string literals. */
  var stringEscapes = {
    '\\': '\\',
    "'": "'",
    '\n': 'n',
    '\r': 'r',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  /** Built-in method references without a dependency on `root`. */
  var freeParseFloat = parseFloat,
      freeParseInt = parseInt;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Detect free variable `exports`. */
  var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = (function() {
    try {
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }());

  /* Node.js helper references. */
  var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer,
      nodeIsDate = nodeUtil && nodeUtil.isDate,
      nodeIsMap = nodeUtil && nodeUtil.isMap,
      nodeIsRegExp = nodeUtil && nodeUtil.isRegExp,
      nodeIsSet = nodeUtil && nodeUtil.isSet,
      nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

  /*--------------------------------------------------------------------------*/

  /**
   * Adds the key-value `pair` to `map`.
   *
   * @private
   * @param {Object} map The map to modify.
   * @param {Array} pair The key-value pair to add.
   * @returns {Object} Returns `map`.
   */
  function addMapEntry(map, pair) {
    // Don't return `map.set` because it's not chainable in IE 11.
    map.set(pair[0], pair[1]);
    return map;
  }

  /**
   * Adds `value` to `set`.
   *
   * @private
   * @param {Object} set The set to modify.
   * @param {*} value The value to add.
   * @returns {Object} Returns `set`.
   */
  function addSetEntry(set, value) {
    // Don't return `set.add` because it's not chainable in IE 11.
    set.add(value);
    return set;
  }

  /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0: return func.call(thisArg);
      case 1: return func.call(thisArg, args[0]);
      case 2: return func.call(thisArg, args[0], args[1]);
      case 3: return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }

  /**
   * A specialized version of `baseAggregator` for arrays.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} setter The function to set `accumulator` values.
   * @param {Function} iteratee The iteratee to transform keys.
   * @param {Object} accumulator The initial aggregated object.
   * @returns {Function} Returns `accumulator`.
   */
  function arrayAggregator(array, setter, iteratee, accumulator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      var value = array[index];
      setter(accumulator, value, iteratee(value), array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEach(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * A specialized version of `_.forEachRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEachRight(array, iteratee) {
    var length = array == null ? 0 : array.length;

    while (length--) {
      if (iteratee(array[length], length, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * A specialized version of `_.every` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if all elements pass the predicate check,
   *  else `false`.
   */
  function arrayEvery(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (!predicate(array[index], index, array)) {
        return false;
      }
    }
    return true;
  }

  /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
  function arrayFilter(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }

  /**
   * A specialized version of `_.includes` for arrays without support for
   * specifying an index to search from.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludes(array, value) {
    var length = array == null ? 0 : array.length;
    return !!length && baseIndexOf(array, value, 0) > -1;
  }

  /**
   * This function is like `arrayIncludes` except that it accepts a comparator.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludesWith(array, value, comparator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (comparator(value, array[index])) {
        return true;
      }
    }
    return false;
  }

  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function arrayMap(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }

  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */
  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }

  /**
   * A specialized version of `_.reduce` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the first element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduce(array, iteratee, accumulator, initAccum) {
    var index = -1,
        length = array == null ? 0 : array.length;

    if (initAccum && length) {
      accumulator = array[++index];
    }
    while (++index < length) {
      accumulator = iteratee(accumulator, array[index], index, array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.reduceRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the last element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduceRight(array, iteratee, accumulator, initAccum) {
    var length = array == null ? 0 : array.length;
    if (initAccum && length) {
      accumulator = array[--length];
    }
    while (length--) {
      accumulator = iteratee(accumulator, array[length], length, array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */
  function arraySome(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Gets the size of an ASCII `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  var asciiSize = baseProperty('length');

  /**
   * Converts an ASCII `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function asciiToArray(string) {
    return string.split('');
  }

  /**
   * Splits an ASCII `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function asciiWords(string) {
    return string.match(reAsciiWord) || [];
  }

  /**
   * The base implementation of methods like `_.findKey` and `_.findLastKey`,
   * without support for iteratee shorthands, which iterates over `collection`
   * using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the found element or its key, else `undefined`.
   */
  function baseFindKey(collection, predicate, eachFunc) {
    var result;
    eachFunc(collection, function(value, key, collection) {
      if (predicate(value, key, collection)) {
        result = key;
        return false;
      }
    });
    return result;
  }

  /**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length,
        index = fromIndex + (fromRight ? 1 : -1);

    while ((fromRight ? index-- : ++index < length)) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOf(array, value, fromIndex) {
    return value === value
      ? strictIndexOf(array, value, fromIndex)
      : baseFindIndex(array, baseIsNaN, fromIndex);
  }

  /**
   * This function is like `baseIndexOf` except that it accepts a comparator.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOfWith(array, value, fromIndex, comparator) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (comparator(array[index], value)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */
  function baseIsNaN(value) {
    return value !== value;
  }

  /**
   * The base implementation of `_.mean` and `_.meanBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the mean.
   */
  function baseMean(array, iteratee) {
    var length = array == null ? 0 : array.length;
    return length ? (baseSum(array, iteratee) / length) : NAN;
  }

  /**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
  function baseProperty(key) {
    return function(object) {
      return object == null ? undefined : object[key];
    };
  }

  /**
   * The base implementation of `_.propertyOf` without support for deep paths.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Function} Returns the new accessor function.
   */
  function basePropertyOf(object) {
    return function(key) {
      return object == null ? undefined : object[key];
    };
  }

  /**
   * The base implementation of `_.reduce` and `_.reduceRight`, without support
   * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} accumulator The initial value.
   * @param {boolean} initAccum Specify using the first or last element of
   *  `collection` as the initial value.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the accumulated value.
   */
  function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
    eachFunc(collection, function(value, index, collection) {
      accumulator = initAccum
        ? (initAccum = false, value)
        : iteratee(accumulator, value, index, collection);
    });
    return accumulator;
  }

  /**
   * The base implementation of `_.sortBy` which uses `comparer` to define the
   * sort order of `array` and replaces criteria objects with their corresponding
   * values.
   *
   * @private
   * @param {Array} array The array to sort.
   * @param {Function} comparer The function to define sort order.
   * @returns {Array} Returns `array`.
   */
  function baseSortBy(array, comparer) {
    var length = array.length;

    array.sort(comparer);
    while (length--) {
      array[length] = array[length].value;
    }
    return array;
  }

  /**
   * The base implementation of `_.sum` and `_.sumBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the sum.
   */
  function baseSum(array, iteratee) {
    var result,
        index = -1,
        length = array.length;

    while (++index < length) {
      var current = iteratee(array[index]);
      if (current !== undefined) {
        result = result === undefined ? current : (result + current);
      }
    }
    return result;
  }

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  /**
   * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
   * of key-value pairs for `object` corresponding to the property names of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the key-value pairs.
   */
  function baseToPairs(object, props) {
    return arrayMap(props, function(key) {
      return [key, object[key]];
    });
  }

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }

  /**
   * The base implementation of `_.values` and `_.valuesIn` which creates an
   * array of `object` property values corresponding to the property names
   * of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the array of property values.
   */
  function baseValues(object, props) {
    return arrayMap(props, function(key) {
      return object[key];
    });
  }

  /**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function cacheHas(cache, key) {
    return cache.has(key);
  }

  /**
   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the first unmatched string symbol.
   */
  function charsStartIndex(strSymbols, chrSymbols) {
    var index = -1,
        length = strSymbols.length;

    while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the last unmatched string symbol.
   */
  function charsEndIndex(strSymbols, chrSymbols) {
    var index = strSymbols.length;

    while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /**
   * Gets the number of `placeholder` occurrences in `array`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} placeholder The placeholder to search for.
   * @returns {number} Returns the placeholder count.
   */
  function countHolders(array, placeholder) {
    var length = array.length,
        result = 0;

    while (length--) {
      if (array[length] === placeholder) {
        ++result;
      }
    }
    return result;
  }

  /**
   * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
   * letters to basic Latin letters.
   *
   * @private
   * @param {string} letter The matched letter to deburr.
   * @returns {string} Returns the deburred letter.
   */
  var deburrLetter = basePropertyOf(deburredLetters);

  /**
   * Used by `_.escape` to convert characters to HTML entities.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  var escapeHtmlChar = basePropertyOf(htmlEscapes);

  /**
   * Used by `_.template` to escape characters for inclusion in compiled string literals.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  function escapeStringChar(chr) {
    return '\\' + stringEscapes[chr];
  }

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  /**
   * Checks if `string` contains Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
   */
  function hasUnicode(string) {
    return reHasUnicode.test(string);
  }

  /**
   * Checks if `string` contains a word composed of Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a word is found, else `false`.
   */
  function hasUnicodeWord(string) {
    return reHasUnicodeWord.test(string);
  }

  /**
   * Converts `iterator` to an array.
   *
   * @private
   * @param {Object} iterator The iterator to convert.
   * @returns {Array} Returns the converted array.
   */
  function iteratorToArray(iterator) {
    var data,
        result = [];

    while (!(data = iterator.next()).done) {
      result.push(data.value);
    }
    return result;
  }

  /**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */
  function mapToArray(map) {
    var index = -1,
        result = Array(map.size);

    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }

  /**
   * Replaces all `placeholder` elements in `array` with an internal placeholder
   * and returns an array of their indexes.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {*} placeholder The placeholder to replace.
   * @returns {Array} Returns the new array of placeholder indexes.
   */
  function replaceHolders(array, placeholder) {
    var index = -1,
        length = array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (value === placeholder || value === PLACEHOLDER) {
        array[index] = PLACEHOLDER;
        result[resIndex++] = index;
      }
    }
    return result;
  }

  /**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */
  function setToArray(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }

  /**
   * Converts `set` to its value-value pairs.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the value-value pairs.
   */
  function setToPairs(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = [value, value];
    });
    return result;
  }

  /**
   * A specialized version of `_.indexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictIndexOf(array, value, fromIndex) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }

  /**
   * A specialized version of `_.lastIndexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictLastIndexOf(array, value, fromIndex) {
    var index = fromIndex + 1;
    while (index--) {
      if (array[index] === value) {
        return index;
      }
    }
    return index;
  }

  /**
   * Gets the number of symbols in `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the string size.
   */
  function stringSize(string) {
    return hasUnicode(string)
      ? unicodeSize(string)
      : asciiSize(string);
  }

  /**
   * Converts `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function stringToArray(string) {
    return hasUnicode(string)
      ? unicodeToArray(string)
      : asciiToArray(string);
  }

  /**
   * Used by `_.unescape` to convert HTML entities to characters.
   *
   * @private
   * @param {string} chr The matched character to unescape.
   * @returns {string} Returns the unescaped character.
   */
  var unescapeHtmlChar = basePropertyOf(htmlUnescapes);

  /**
   * Gets the size of a Unicode `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  function unicodeSize(string) {
    var result = reUnicode.lastIndex = 0;
    while (reUnicode.test(string)) {
      ++result;
    }
    return result;
  }

  /**
   * Converts a Unicode `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function unicodeToArray(string) {
    return string.match(reUnicode) || [];
  }

  /**
   * Splits a Unicode `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function unicodeWords(string) {
    return string.match(reUnicodeWord) || [];
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Create a new pristine `lodash` function using the `context` object.
   *
   * @static
   * @memberOf _
   * @since 1.1.0
   * @category Util
   * @param {Object} [context=root] The context object.
   * @returns {Function} Returns a new `lodash` function.
   * @example
   *
   * _.mixin({ 'foo': _.constant('foo') });
   *
   * var lodash = _.runInContext();
   * lodash.mixin({ 'bar': lodash.constant('bar') });
   *
   * _.isFunction(_.foo);
   * // => true
   * _.isFunction(_.bar);
   * // => false
   *
   * lodash.isFunction(lodash.foo);
   * // => false
   * lodash.isFunction(lodash.bar);
   * // => true
   *
   * // Create a suped-up `defer` in Node.js.
   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
   */
  var runInContext = (function runInContext(context) {
    context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));

    /** Built-in constructor references. */
    var Array = context.Array,
        Date = context.Date,
        Error = context.Error,
        Function = context.Function,
        Math = context.Math,
        Object = context.Object,
        RegExp = context.RegExp,
        String = context.String,
        TypeError = context.TypeError;

    /** Used for built-in method references. */
    var arrayProto = Array.prototype,
        funcProto = Function.prototype,
        objectProto = Object.prototype;

    /** Used to detect overreaching core-js shims. */
    var coreJsData = context['__core-js_shared__'];

    /** Used to resolve the decompiled source of functions. */
    var funcToString = funcProto.toString;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /** Used to generate unique IDs. */
    var idCounter = 0;

    /** Used to detect methods masquerading as native. */
    var maskSrcKey = (function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
      return uid ? ('Symbol(src)_1.' + uid) : '';
    }());

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */
    var nativeObjectToString = objectProto.toString;

    /** Used to infer the `Object` constructor. */
    var objectCtorString = funcToString.call(Object);

    /** Used to restore the original `_` reference in `_.noConflict`. */
    var oldDash = root._;

    /** Used to detect if a method is native. */
    var reIsNative = RegExp('^' +
      funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
    );

    /** Built-in value references. */
    var Buffer = moduleExports ? context.Buffer : undefined,
        Symbol = context.Symbol,
        Uint8Array = context.Uint8Array,
        allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
        getPrototype = overArg(Object.getPrototypeOf, Object),
        objectCreate = Object.create,
        propertyIsEnumerable = objectProto.propertyIsEnumerable,
        splice = arrayProto.splice,
        spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined,
        symIterator = Symbol ? Symbol.iterator : undefined,
        symToStringTag = Symbol ? Symbol.toStringTag : undefined;

    var defineProperty = (function() {
      try {
        var func = getNative(Object, 'defineProperty');
        func({}, '', {});
        return func;
      } catch (e) {}
    }());

    /** Mocked built-ins. */
    var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout,
        ctxNow = Date && Date.now !== root.Date.now && Date.now,
        ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;

    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeCeil = Math.ceil,
        nativeFloor = Math.floor,
        nativeGetSymbols = Object.getOwnPropertySymbols,
        nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
        nativeIsFinite = context.isFinite,
        nativeJoin = arrayProto.join,
        nativeKeys = overArg(Object.keys, Object),
        nativeMax = Math.max,
        nativeMin = Math.min,
        nativeNow = Date.now,
        nativeParseInt = context.parseInt,
        nativeRandom = Math.random,
        nativeReverse = arrayProto.reverse;

    /* Built-in method references that are verified to be native. */
    var DataView = getNative(context, 'DataView'),
        Map = getNative(context, 'Map'),
        Promise = getNative(context, 'Promise'),
        Set = getNative(context, 'Set'),
        WeakMap = getNative(context, 'WeakMap'),
        nativeCreate = getNative(Object, 'create');

    /** Used to store function metadata. */
    var metaMap = WeakMap && new WeakMap;

    /** Used to lookup unminified function names. */
    var realNames = {};

    /** Used to detect maps, sets, and weakmaps. */
    var dataViewCtorString = toSource(DataView),
        mapCtorString = toSource(Map),
        promiseCtorString = toSource(Promise),
        setCtorString = toSource(Set),
        weakMapCtorString = toSource(WeakMap);

    /** Used to convert symbols to primitives and strings. */
    var symbolProto = Symbol ? Symbol.prototype : undefined,
        symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
        symbolToString = symbolProto ? symbolProto.toString : undefined;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` object which wraps `value` to enable implicit method
     * chain sequences. Methods that operate on and return arrays, collections,
     * and functions can be chained together. Methods that retrieve a single value
     * or may return a primitive value will automatically end the chain sequence
     * and return the unwrapped value. Otherwise, the value must be unwrapped
     * with `_#value`.
     *
     * Explicit chain sequences, which must be unwrapped with `_#value`, may be
     * enabled using `_.chain`.
     *
     * The execution of chained methods is lazy, that is, it's deferred until
     * `_#value` is implicitly or explicitly called.
     *
     * Lazy evaluation allows several methods to support shortcut fusion.
     * Shortcut fusion is an optimization to merge iteratee calls; this avoids
     * the creation of intermediate arrays and can greatly reduce the number of
     * iteratee executions. Sections of a chain sequence qualify for shortcut
     * fusion if the section is applied to an array and iteratees accept only
     * one argument. The heuristic for whether a section qualifies for shortcut
     * fusion is subject to change.
     *
     * Chaining is supported in custom builds as long as the `_#value` method is
     * directly or indirectly included in the build.
     *
     * In addition to lodash methods, wrappers have `Array` and `String` methods.
     *
     * The wrapper `Array` methods are:
     * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
     *
     * The wrapper `String` methods are:
     * `replace` and `split`
     *
     * The wrapper methods that support shortcut fusion are:
     * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
     * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
     * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
     *
     * The chainable wrapper methods are:
     * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
     * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
     * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
     * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
     * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
     * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
     * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
     * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
     * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
     * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
     * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
     * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
     * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
     * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
     * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
     * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
     * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
     * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
     * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
     * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
     * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
     * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
     * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
     * `zipObject`, `zipObjectDeep`, and `zipWith`
     *
     * The wrapper methods that are **not** chainable by default are:
     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
     * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
     * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
     * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
     * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
     * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
     * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
     * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
     * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
     * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
     * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
     * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
     * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
     * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
     * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
     * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
     * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
     * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
     * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
     * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
     * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
     * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
     * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
     * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
     * `upperFirst`, `value`, and `words`
     *
     * @name _
     * @constructor
     * @category Seq
     * @param {*} value The value to wrap in a `lodash` instance.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2, 3]);
     *
     * // Returns an unwrapped value.
     * wrapped.reduce(_.add);
     * // => 6
     *
     * // Returns a wrapped value.
     * var squares = wrapped.map(square);
     *
     * _.isArray(squares);
     * // => false
     *
     * _.isArray(squares.value());
     * // => true
     */
    function lodash(value) {
      if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
        if (value instanceof LodashWrapper) {
          return value;
        }
        if (hasOwnProperty.call(value, '__wrapped__')) {
          return wrapperClone(value);
        }
      }
      return new LodashWrapper(value);
    }

    /**
     * The base implementation of `_.create` without support for assigning
     * properties to the created object.
     *
     * @private
     * @param {Object} proto The object to inherit from.
     * @returns {Object} Returns the new object.
     */
    var baseCreate = (function() {
      function object() {}
      return function(proto) {
        if (!isObject(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object;
        object.prototype = undefined;
        return result;
      };
    }());

    /**
     * The function whose prototype chain sequence wrappers inherit from.
     *
     * @private
     */
    function baseLodash() {
      // No operation performed.
    }

    /**
     * The base constructor for creating `lodash` wrapper objects.
     *
     * @private
     * @param {*} value The value to wrap.
     * @param {boolean} [chainAll] Enable explicit method chain sequences.
     */
    function LodashWrapper(value, chainAll) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__chain__ = !!chainAll;
      this.__index__ = 0;
      this.__values__ = undefined;
    }

    /**
     * By default, the template delimiters used by lodash are like those in
     * embedded Ruby (ERB) as well as ES2015 template strings. Change the
     * following template settings to use alternative delimiters.
     *
     * @static
     * @memberOf _
     * @type {Object}
     */
    lodash.templateSettings = {

      /**
       * Used to detect `data` property values to be HTML-escaped.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'escape': reEscape,

      /**
       * Used to detect code to be evaluated.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'evaluate': reEvaluate,

      /**
       * Used to detect `data` property values to inject.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'interpolate': reInterpolate,

      /**
       * Used to reference the data object in the template text.
       *
       * @memberOf _.templateSettings
       * @type {string}
       */
      'variable': '',

      /**
       * Used to import variables into the compiled template.
       *
       * @memberOf _.templateSettings
       * @type {Object}
       */
      'imports': {

        /**
         * A reference to the `lodash` function.
         *
         * @memberOf _.templateSettings.imports
         * @type {Function}
         */
        '_': lodash
      }
    };

    // Ensure wrappers are instances of `baseLodash`.
    lodash.prototype = baseLodash.prototype;
    lodash.prototype.constructor = lodash;

    LodashWrapper.prototype = baseCreate(baseLodash.prototype);
    LodashWrapper.prototype.constructor = LodashWrapper;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
     *
     * @private
     * @constructor
     * @param {*} value The value to wrap.
     */
    function LazyWrapper(value) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__dir__ = 1;
      this.__filtered__ = false;
      this.__iteratees__ = [];
      this.__takeCount__ = MAX_ARRAY_LENGTH;
      this.__views__ = [];
    }

    /**
     * Creates a clone of the lazy wrapper object.
     *
     * @private
     * @name clone
     * @memberOf LazyWrapper
     * @returns {Object} Returns the cloned `LazyWrapper` object.
     */
    function lazyClone() {
      var result = new LazyWrapper(this.__wrapped__);
      result.__actions__ = copyArray(this.__actions__);
      result.__dir__ = this.__dir__;
      result.__filtered__ = this.__filtered__;
      result.__iteratees__ = copyArray(this.__iteratees__);
      result.__takeCount__ = this.__takeCount__;
      result.__views__ = copyArray(this.__views__);
      return result;
    }

    /**
     * Reverses the direction of lazy iteration.
     *
     * @private
     * @name reverse
     * @memberOf LazyWrapper
     * @returns {Object} Returns the new reversed `LazyWrapper` object.
     */
    function lazyReverse() {
      if (this.__filtered__) {
        var result = new LazyWrapper(this);
        result.__dir__ = -1;
        result.__filtered__ = true;
      } else {
        result = this.clone();
        result.__dir__ *= -1;
      }
      return result;
    }

    /**
     * Extracts the unwrapped value from its lazy wrapper.
     *
     * @private
     * @name value
     * @memberOf LazyWrapper
     * @returns {*} Returns the unwrapped value.
     */
    function lazyValue() {
      var array = this.__wrapped__.value(),
          dir = this.__dir__,
          isArr = isArray(array),
          isRight = dir < 0,
          arrLength = isArr ? array.length : 0,
          view = getView(0, arrLength, this.__views__),
          start = view.start,
          end = view.end,
          length = end - start,
          index = isRight ? end : (start - 1),
          iteratees = this.__iteratees__,
          iterLength = iteratees.length,
          resIndex = 0,
          takeCount = nativeMin(length, this.__takeCount__);

      if (!isArr || (!isRight && arrLength == length && takeCount == length)) {
        return baseWrapperValue(array, this.__actions__);
      }
      var result = [];

      outer:
      while (length-- && resIndex < takeCount) {
        index += dir;

        var iterIndex = -1,
            value = array[index];

        while (++iterIndex < iterLength) {
          var data = iteratees[iterIndex],
              iteratee = data.iteratee,
              type = data.type,
              computed = iteratee(value);

          if (type == LAZY_MAP_FLAG) {
            value = computed;
          } else if (!computed) {
            if (type == LAZY_FILTER_FLAG) {
              continue outer;
            } else {
              break outer;
            }
          }
        }
        result[resIndex++] = value;
      }
      return result;
    }

    // Ensure `LazyWrapper` is an instance of `baseLodash`.
    LazyWrapper.prototype = baseCreate(baseLodash.prototype);
    LazyWrapper.prototype.constructor = LazyWrapper;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Hash(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the hash.
     *
     * @private
     * @name clear
     * @memberOf Hash
     */
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the hash.
     *
     * @private
     * @name delete
     * @memberOf Hash
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }

    /**
     * Gets the hash value for `key`.
     *
     * @private
     * @name get
     * @memberOf Hash
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : undefined;
    }

    /**
     * Checks if a hash value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Hash
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
    }

    /**
     * Sets the hash `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Hash
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the hash instance.
     */
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
      return this;
    }

    // Add methods to `Hash`.
    Hash.prototype.clear = hashClear;
    Hash.prototype['delete'] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function ListCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the list cache.
     *
     * @private
     * @name clear
     * @memberOf ListCache
     */
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the list cache.
     *
     * @private
     * @name delete
     * @memberOf ListCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function listCacheDelete(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }

    /**
     * Gets the list cache value for `key`.
     *
     * @private
     * @name get
     * @memberOf ListCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function listCacheGet(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      return index < 0 ? undefined : data[index][1];
    }

    /**
     * Checks if a list cache value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf ListCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }

    /**
     * Sets the list cache `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf ListCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the list cache instance.
     */
    function listCacheSet(key, value) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }

    // Add methods to `ListCache`.
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype['delete'] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function MapCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the map.
     *
     * @private
     * @name clear
     * @memberOf MapCache
     */
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        'hash': new Hash,
        'map': new (Map || ListCache),
        'string': new Hash
      };
    }

    /**
     * Removes `key` and its value from the map.
     *
     * @private
     * @name delete
     * @memberOf MapCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function mapCacheDelete(key) {
      var result = getMapData(this, key)['delete'](key);
      this.size -= result ? 1 : 0;
      return result;
    }

    /**
     * Gets the map value for `key`.
     *
     * @private
     * @name get
     * @memberOf MapCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }

    /**
     * Checks if a map value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf MapCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }

    /**
     * Sets the map `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf MapCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the map cache instance.
     */
    function mapCacheSet(key, value) {
      var data = getMapData(this, key),
          size = data.size;

      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }

    // Add methods to `MapCache`.
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype['delete'] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;

    /*------------------------------------------------------------------------*/

    /**
     *
     * Creates an array cache object to store unique values.
     *
     * @private
     * @constructor
     * @param {Array} [values] The values to cache.
     */
    function SetCache(values) {
      var index = -1,
          length = values == null ? 0 : values.length;

      this.__data__ = new MapCache;
      while (++index < length) {
        this.add(values[index]);
      }
    }

    /**
     * Adds `value` to the array cache.
     *
     * @private
     * @name add
     * @memberOf SetCache
     * @alias push
     * @param {*} value The value to cache.
     * @returns {Object} Returns the cache instance.
     */
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }

    /**
     * Checks if `value` is in the array cache.
     *
     * @private
     * @name has
     * @memberOf SetCache
     * @param {*} value The value to search for.
     * @returns {number} Returns `true` if `value` is found, else `false`.
     */
    function setCacheHas(value) {
      return this.__data__.has(value);
    }

    // Add methods to `SetCache`.
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a stack cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }

    /**
     * Removes all key-value entries from the stack.
     *
     * @private
     * @name clear
     * @memberOf Stack
     */
    function stackClear() {
      this.__data__ = new ListCache;
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the stack.
     *
     * @private
     * @name delete
     * @memberOf Stack
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function stackDelete(key) {
      var data = this.__data__,
          result = data['delete'](key);

      this.size = data.size;
      return result;
    }

    /**
     * Gets the stack value for `key`.
     *
     * @private
     * @name get
     * @memberOf Stack
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function stackGet(key) {
      return this.__data__.get(key);
    }

    /**
     * Checks if a stack value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Stack
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function stackHas(key) {
      return this.__data__.has(key);
    }

    /**
     * Sets the stack `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Stack
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the stack cache instance.
     */
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }

    // Add methods to `Stack`.
    Stack.prototype.clear = stackClear;
    Stack.prototype['delete'] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returns {Array} Returns the array of property names.
     */
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value),
          isArg = !isArr && isArguments(value),
          isBuff = !isArr && !isArg && isBuffer(value),
          isType = !isArr && !isArg && !isBuff && isTypedArray(value),
          skipIndexes = isArr || isArg || isBuff || isType,
          result = skipIndexes ? baseTimes(value.length, String) : [],
          length = result.length;

      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) &&
            !(skipIndexes && (
               // Safari 9 has enumerable `arguments.length` in strict mode.
               key == 'length' ||
               // Node.js 0.10 has enumerable non-index properties on buffers.
               (isBuff && (key == 'offset' || key == 'parent')) ||
               // PhantomJS 2 has enumerable non-index properties on typed arrays.
               (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
               // Skip index properties.
               isIndex(key, length)
            ))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * A specialized version of `_.sample` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @returns {*} Returns the random element.
     */
    function arraySample(array) {
      var length = array.length;
      return length ? array[baseRandom(0, length - 1)] : undefined;
    }

    /**
     * A specialized version of `_.sampleSize` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
    function arraySampleSize(array, n) {
      return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
    }

    /**
     * A specialized version of `_.shuffle` for arrays.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
    function arrayShuffle(array) {
      return shuffleSelf(copyArray(array));
    }

    /**
     * This function is like `assignValue` except that it doesn't assign
     * `undefined` values.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function assignMergeValue(object, key, value) {
      if ((value !== undefined && !eq(object[key], value)) ||
          (value === undefined && !(key in object))) {
        baseAssignValue(object, key, value);
      }
    }

    /**
     * Assigns `value` to `key` of `object` if the existing value is not equivalent
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
          (value === undefined && !(key in object))) {
        baseAssignValue(object, key, value);
      }
    }

    /**
     * Gets the index at which the `key` is found in `array` of key-value pairs.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} key The key to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }

    /**
     * Aggregates elements of `collection` on `accumulator` with keys transformed
     * by `iteratee` and values set by `setter`.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform keys.
     * @param {Object} accumulator The initial aggregated object.
     * @returns {Function} Returns `accumulator`.
     */
    function baseAggregator(collection, setter, iteratee, accumulator) {
      baseEach(collection, function(value, key, collection) {
        setter(accumulator, value, iteratee(value), collection);
      });
      return accumulator;
    }

    /**
     * The base implementation of `_.assign` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssign(object, source) {
      return object && copyObject(source, keys(source), object);
    }

    /**
     * The base implementation of `_.assignIn` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssignIn(object, source) {
      return object && copyObject(source, keysIn(source), object);
    }

    /**
     * The base implementation of `assignValue` and `assignMergeValue` without
     * value checks.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function baseAssignValue(object, key, value) {
      if (key == '__proto__' && defineProperty) {
        defineProperty(object, key, {
          'configurable': true,
          'enumerable': true,
          'value': value,
          'writable': true
        });
      } else {
        object[key] = value;
      }
    }

    /**
     * The base implementation of `_.at` without support for individual paths.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {string[]} paths The property paths to pick.
     * @returns {Array} Returns the picked elements.
     */
    function baseAt(object, paths) {
      var index = -1,
          length = paths.length,
          result = Array(length),
          skip = object == null;

      while (++index < length) {
        result[index] = skip ? undefined : get(object, paths[index]);
      }
      return result;
    }

    /**
     * The base implementation of `_.clamp` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     */
    function baseClamp(number, lower, upper) {
      if (number === number) {
        if (upper !== undefined) {
          number = number <= upper ? number : upper;
        }
        if (lower !== undefined) {
          number = number >= lower ? number : lower;
        }
      }
      return number;
    }

    /**
     * The base implementation of `_.clone` and `_.cloneDeep` which tracks
     * traversed objects.
     *
     * @private
     * @param {*} value The value to clone.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Deep clone
     *  2 - Flatten inherited properties
     *  4 - Clone symbols
     * @param {Function} [customizer] The function to customize cloning.
     * @param {string} [key] The key of `value`.
     * @param {Object} [object] The parent object of `value`.
     * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
     * @returns {*} Returns the cloned value.
     */
    function baseClone(value, bitmask, customizer, key, object, stack) {
      var result,
          isDeep = bitmask & CLONE_DEEP_FLAG,
          isFlat = bitmask & CLONE_FLAT_FLAG,
          isFull = bitmask & CLONE_SYMBOLS_FLAG;

      if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
      }
      if (result !== undefined) {
        return result;
      }
      if (!isObject(value)) {
        return value;
      }
      var isArr = isArray(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag(value),
            isFunc = tag == funcTag || tag == genTag;

        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
          result = (isFlat || isFunc) ? {} : initCloneObject(value);
          if (!isDeep) {
            return isFlat
              ? copySymbolsIn(value, baseAssignIn(result, value))
              : copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }
          result = initCloneByTag(value, tag, baseClone, isDeep);
        }
      }
      // Check for circular references and return its corresponding clone.
      stack || (stack = new Stack);
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);

      var keysFunc = isFull
        ? (isFlat ? getAllKeysIn : getAllKeys)
        : (isFlat ? keysIn : keys);

      var props = isArr ? undefined : keysFunc(value);
      arrayEach(props || value, function(subValue, key) {
        if (props) {
          key = subValue;
          subValue = value[key];
        }
        // Recursively populate clone (susceptible to call stack limits).
        assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
      });
      return result;
    }

    /**
     * The base implementation of `_.conforms` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     */
    function baseConforms(source) {
      var props = keys(source);
      return function(object) {
        return baseConformsTo(object, source, props);
      };
    }

    /**
     * The base implementation of `_.conformsTo` which accepts `props` to check.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     */
    function baseConformsTo(object, source, props) {
      var length = props.length;
      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (length--) {
        var key = props[length],
            predicate = source[key],
            value = object[key];

        if ((value === undefined && !(key in object)) || !predicate(value)) {
          return false;
        }
      }
      return true;
    }

    /**
     * The base implementation of `_.delay` and `_.defer` which accepts `args`
     * to provide to `func`.
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {Array} args The arguments to provide to `func`.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
    function baseDelay(func, wait, args) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return setTimeout(function() { func.apply(undefined, args); }, wait);
    }

    /**
     * The base implementation of methods like `_.difference` without support
     * for excluding multiple arrays or iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Array} values The values to exclude.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     */
    function baseDifference(array, values, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          isCommon = true,
          length = array.length,
          result = [],
          valuesLength = values.length;

      if (!length) {
        return result;
      }
      if (iteratee) {
        values = arrayMap(values, baseUnary(iteratee));
      }
      if (comparator) {
        includes = arrayIncludesWith;
        isCommon = false;
      }
      else if (values.length >= LARGE_ARRAY_SIZE) {
        includes = cacheHas;
        isCommon = false;
        values = new SetCache(values);
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee == null ? value : iteratee(value);

        value = (comparator || value !== 0) ? value : 0;
        if (isCommon && computed === computed) {
          var valuesIndex = valuesLength;
          while (valuesIndex--) {
            if (values[valuesIndex] === computed) {
              continue outer;
            }
          }
          result.push(value);
        }
        else if (!includes(values, computed, comparator)) {
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.forEach` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEach = createBaseEach(baseForOwn);

    /**
     * The base implementation of `_.forEachRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEachRight = createBaseEach(baseForOwnRight, true);

    /**
     * The base implementation of `_.every` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`
     */
    function baseEvery(collection, predicate) {
      var result = true;
      baseEach(collection, function(value, index, collection) {
        result = !!predicate(value, index, collection);
        return result;
      });
      return result;
    }

    /**
     * The base implementation of methods like `_.max` and `_.min` which accepts a
     * `comparator` to determine the extremum value.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The iteratee invoked per iteration.
     * @param {Function} comparator The comparator used to compare values.
     * @returns {*} Returns the extremum value.
     */
    function baseExtremum(array, iteratee, comparator) {
      var index = -1,
          length = array.length;

      while (++index < length) {
        var value = array[index],
            current = iteratee(value);

        if (current != null && (computed === undefined
              ? (current === current && !isSymbol(current))
              : comparator(current, computed)
            )) {
          var computed = current,
              result = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.fill` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     */
    function baseFill(array, value, start, end) {
      var length = array.length;

      start = toInteger(start);
      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = (end === undefined || end > length) ? length : toInteger(end);
      if (end < 0) {
        end += length;
      }
      end = start > end ? 0 : toLength(end);
      while (start < end) {
        array[start++] = value;
      }
      return array;
    }

    /**
     * The base implementation of `_.filter` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */
    function baseFilter(collection, predicate) {
      var result = [];
      baseEach(collection, function(value, index, collection) {
        if (predicate(value, index, collection)) {
          result.push(value);
        }
      });
      return result;
    }

    /**
     * The base implementation of `_.flatten` with support for restricting flattening.
     *
     * @private
     * @param {Array} array The array to flatten.
     * @param {number} depth The maximum recursion depth.
     * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
     * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
     * @param {Array} [result=[]] The initial result value.
     * @returns {Array} Returns the new flattened array.
     */
    function baseFlatten(array, depth, predicate, isStrict, result) {
      var index = -1,
          length = array.length;

      predicate || (predicate = isFlattenable);
      result || (result = []);

      while (++index < length) {
        var value = array[index];
        if (depth > 0 && predicate(value)) {
          if (depth > 1) {
            // Recursively flatten arrays (susceptible to call stack limits).
            baseFlatten(value, depth - 1, predicate, isStrict, result);
          } else {
            arrayPush(result, value);
          }
        } else if (!isStrict) {
          result[result.length] = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `baseForOwn` which iterates over `object`
     * properties returned by `keysFunc` and invokes `iteratee` for each property.
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseFor = createBaseFor();

    /**
     * This function is like `baseFor` except that it iterates over properties
     * in the opposite order.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseForRight = createBaseFor(true);

    /**
     * The base implementation of `_.forOwn` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwn(object, iteratee) {
      return object && baseFor(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwnRight(object, iteratee) {
      return object && baseForRight(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.functions` which creates an array of
     * `object` function property names filtered from `props`.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Array} props The property names to filter.
     * @returns {Array} Returns the function names.
     */
    function baseFunctions(object, props) {
      return arrayFilter(props, function(key) {
        return isFunction(object[key]);
      });
    }

    /**
     * The base implementation of `_.get` without support for default values.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @returns {*} Returns the resolved value.
     */
    function baseGet(object, path) {
      path = castPath(path, object);

      var index = 0,
          length = path.length;

      while (object != null && index < length) {
        object = object[toKey(path[index++])];
      }
      return (index && index == length) ? object : undefined;
    }

    /**
     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @param {Function} symbolsFunc The function to get the symbols of `object`.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }

    /**
     * The base implementation of `getTag` without fallbacks for buggy environments.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    function baseGetTag(value) {
      if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
      }
      return (symToStringTag && symToStringTag in Object(value))
        ? getRawTag(value)
        : objectToString(value);
    }

    /**
     * The base implementation of `_.gt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     */
    function baseGt(value, other) {
      return value > other;
    }

    /**
     * The base implementation of `_.has` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHas(object, key) {
      return object != null && hasOwnProperty.call(object, key);
    }

    /**
     * The base implementation of `_.hasIn` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHasIn(object, key) {
      return object != null && key in Object(object);
    }

    /**
     * The base implementation of `_.inRange` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to check.
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     */
    function baseInRange(number, start, end) {
      return number >= nativeMin(start, end) && number < nativeMax(start, end);
    }

    /**
     * The base implementation of methods like `_.intersection`, without support
     * for iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of shared values.
     */
    function baseIntersection(arrays, iteratee, comparator) {
      var includes = comparator ? arrayIncludesWith : arrayIncludes,
          length = arrays[0].length,
          othLength = arrays.length,
          othIndex = othLength,
          caches = Array(othLength),
          maxLength = Infinity,
          result = [];

      while (othIndex--) {
        var array = arrays[othIndex];
        if (othIndex && iteratee) {
          array = arrayMap(array, baseUnary(iteratee));
        }
        maxLength = nativeMin(array.length, maxLength);
        caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
          ? new SetCache(othIndex && array)
          : undefined;
      }
      array = arrays[0];

      var index = -1,
          seen = caches[0];

      outer:
      while (++index < length && result.length < maxLength) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (!(seen
              ? cacheHas(seen, computed)
              : includes(result, computed, comparator)
            )) {
          othIndex = othLength;
          while (--othIndex) {
            var cache = caches[othIndex];
            if (!(cache
                  ? cacheHas(cache, computed)
                  : includes(arrays[othIndex], computed, comparator))
                ) {
              continue outer;
            }
          }
          if (seen) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.invert` and `_.invertBy` which inverts
     * `object` with values transformed by `iteratee` and set by `setter`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform values.
     * @param {Object} accumulator The initial inverted object.
     * @returns {Function} Returns `accumulator`.
     */
    function baseInverter(object, setter, iteratee, accumulator) {
      baseForOwn(object, function(value, key, object) {
        setter(accumulator, iteratee(value), key, object);
      });
      return accumulator;
    }

    /**
     * The base implementation of `_.invoke` without support for individual
     * method arguments.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {Array} args The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     */
    function baseInvoke(object, path, args) {
      path = castPath(path, object);
      object = parent(object, path);
      var func = object == null ? object : object[toKey(last(path))];
      return func == null ? undefined : apply(func, object, args);
    }

    /**
     * The base implementation of `_.isArguments`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     */
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }

    /**
     * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     */
    function baseIsArrayBuffer(value) {
      return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
    }

    /**
     * The base implementation of `_.isDate` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     */
    function baseIsDate(value) {
      return isObjectLike(value) && baseGetTag(value) == dateTag;
    }

    /**
     * The base implementation of `_.isEqual` which supports partial comparisons
     * and tracks traversed objects.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Unordered comparison
     *  2 - Partial comparison
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     */
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }

    /**
     * A specialized version of `baseIsEqual` for arrays and objects which performs
     * deep comparisons and tracks traversed objects enabling objects with circular
     * references to be compared.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object),
          othIsArr = isArray(other),
          objTag = objIsArr ? arrayTag : getTag(object),
          othTag = othIsArr ? arrayTag : getTag(other);

      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;

      var objIsObj = objTag == objectTag,
          othIsObj = othTag == objectTag,
          isSameTag = objTag == othTag;

      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack);
        return (objIsArr || isTypedArray(object))
          ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
          : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
            othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object,
              othUnwrapped = othIsWrapped ? other.value() : other;

          stack || (stack = new Stack);
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack);
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }

    /**
     * The base implementation of `_.isMap` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     */
    function baseIsMap(value) {
      return isObjectLike(value) && getTag(value) == mapTag;
    }

    /**
     * The base implementation of `_.isMatch` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Array} matchData The property names, values, and compare flags to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     */
    function baseIsMatch(object, source, matchData, customizer) {
      var index = matchData.length,
          length = index,
          noCustomizer = !customizer;

      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (index--) {
        var data = matchData[index];
        if ((noCustomizer && data[2])
              ? data[1] !== object[data[0]]
              : !(data[0] in object)
            ) {
          return false;
        }
      }
      while (++index < length) {
        data = matchData[index];
        var key = data[0],
            objValue = object[key],
            srcValue = data[1];

        if (noCustomizer && data[2]) {
          if (objValue === undefined && !(key in object)) {
            return false;
          }
        } else {
          var stack = new Stack;
          if (customizer) {
            var result = customizer(objValue, srcValue, key, object, source, stack);
          }
          if (!(result === undefined
                ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
                : result
              )) {
            return false;
          }
        }
      }
      return true;
    }

    /**
     * The base implementation of `_.isNative` without bad shim checks.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     */
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }

    /**
     * The base implementation of `_.isRegExp` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     */
    function baseIsRegExp(value) {
      return isObjectLike(value) && baseGetTag(value) == regexpTag;
    }

    /**
     * The base implementation of `_.isSet` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     */
    function baseIsSet(value) {
      return isObjectLike(value) && getTag(value) == setTag;
    }

    /**
     * The base implementation of `_.isTypedArray` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     */
    function baseIsTypedArray(value) {
      return isObjectLike(value) &&
        isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }

    /**
     * The base implementation of `_.iteratee`.
     *
     * @private
     * @param {*} [value=_.identity] The value to convert to an iteratee.
     * @returns {Function} Returns the iteratee.
     */
    function baseIteratee(value) {
      // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
      // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
      if (typeof value == 'function') {
        return value;
      }
      if (value == null) {
        return identity;
      }
      if (typeof value == 'object') {
        return isArray(value)
          ? baseMatchesProperty(value[0], value[1])
          : baseMatches(value);
      }
      return property(value);
    }

    /**
     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != 'constructor') {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeysIn(object) {
      if (!isObject(object)) {
        return nativeKeysIn(object);
      }
      var isProto = isPrototype(object),
          result = [];

      for (var key in object) {
        if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.lt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     */
    function baseLt(value, other) {
      return value < other;
    }

    /**
     * The base implementation of `_.map` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */
    function baseMap(collection, iteratee) {
      var index = -1,
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value, key, collection) {
        result[++index] = iteratee(value, key, collection);
      });
      return result;
    }

    /**
     * The base implementation of `_.matches` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatches(source) {
      var matchData = getMatchData(source);
      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
      }
      return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
      };
    }

    /**
     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
     *
     * @private
     * @param {string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatchesProperty(path, srcValue) {
      if (isKey(path) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey(path), srcValue);
      }
      return function(object) {
        var objValue = get(object, path);
        return (objValue === undefined && objValue === srcValue)
          ? hasIn(object, path)
          : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
      };
    }

    /**
     * The base implementation of `_.merge` without support for multiple sources.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} [customizer] The function to customize merged values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
    function baseMerge(object, source, srcIndex, customizer, stack) {
      if (object === source) {
        return;
      }
      baseFor(source, function(srcValue, key) {
        if (isObject(srcValue)) {
          stack || (stack = new Stack);
          baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
        }
        else {
          var newValue = customizer
            ? customizer(object[key], srcValue, (key + ''), object, source, stack)
            : undefined;

          if (newValue === undefined) {
            newValue = srcValue;
          }
          assignMergeValue(object, key, newValue);
        }
      }, keysIn);
    }

    /**
     * A specialized version of `baseMerge` for arrays and objects which performs
     * deep merges and tracks traversed objects enabling objects with circular
     * references to be merged.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {string} key The key of the value to merge.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} mergeFunc The function to merge values.
     * @param {Function} [customizer] The function to customize assigned values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
    function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
      var objValue = object[key],
          srcValue = source[key],
          stacked = stack.get(srcValue);

      if (stacked) {
        assignMergeValue(object, key, stacked);
        return;
      }
      var newValue = customizer
        ? customizer(objValue, srcValue, (key + ''), object, source, stack)
        : undefined;

      var isCommon = newValue === undefined;

      if (isCommon) {
        var isArr = isArray(srcValue),
            isBuff = !isArr && isBuffer(srcValue),
            isTyped = !isArr && !isBuff && isTypedArray(srcValue);

        newValue = srcValue;
        if (isArr || isBuff || isTyped) {
          if (isArray(objValue)) {
            newValue = objValue;
          }
          else if (isArrayLikeObject(objValue)) {
            newValue = copyArray(objValue);
          }
          else if (isBuff) {
            isCommon = false;
            newValue = cloneBuffer(srcValue, true);
          }
          else if (isTyped) {
            isCommon = false;
            newValue = cloneTypedArray(srcValue, true);
          }
          else {
            newValue = [];
          }
        }
        else if (isPlainObject(srcValue) || isArguments(srcValue)) {
          newValue = objValue;
          if (isArguments(objValue)) {
            newValue = toPlainObject(objValue);
          }
          else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
            newValue = initCloneObject(srcValue);
          }
        }
        else {
          isCommon = false;
        }
      }
      if (isCommon) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, newValue);
        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        stack['delete'](srcValue);
      }
      assignMergeValue(object, key, newValue);
    }

    /**
     * The base implementation of `_.nth` which doesn't coerce arguments.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {number} n The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     */
    function baseNth(array, n) {
      var length = array.length;
      if (!length) {
        return;
      }
      n += n < 0 ? length : 0;
      return isIndex(n, length) ? array[n] : undefined;
    }

    /**
     * The base implementation of `_.orderBy` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
     * @param {string[]} orders The sort orders of `iteratees`.
     * @returns {Array} Returns the new sorted array.
     */
    function baseOrderBy(collection, iteratees, orders) {
      var index = -1;
      iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(getIteratee()));

      var result = baseMap(collection, function(value, key, collection) {
        var criteria = arrayMap(iteratees, function(iteratee) {
          return iteratee(value);
        });
        return { 'criteria': criteria, 'index': ++index, 'value': value };
      });

      return baseSortBy(result, function(object, other) {
        return compareMultiple(object, other, orders);
      });
    }

    /**
     * The base implementation of `_.pick` without support for individual
     * property identifiers.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @returns {Object} Returns the new object.
     */
    function basePick(object, paths) {
      return basePickBy(object, paths, function(value, path) {
        return hasIn(object, path);
      });
    }

    /**
     * The base implementation of  `_.pickBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @param {Function} predicate The function invoked per property.
     * @returns {Object} Returns the new object.
     */
    function basePickBy(object, paths, predicate) {
      var index = -1,
          length = paths.length,
          result = {};

      while (++index < length) {
        var path = paths[index],
            value = baseGet(object, path);

        if (predicate(value, path)) {
          baseSet(result, castPath(path, object), value);
        }
      }
      return result;
    }

    /**
     * A specialized version of `baseProperty` which supports deep paths.
     *
     * @private
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     */
    function basePropertyDeep(path) {
      return function(object) {
        return baseGet(object, path);
      };
    }

    /**
     * The base implementation of `_.pullAllBy` without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     */
    function basePullAll(array, values, iteratee, comparator) {
      var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
          index = -1,
          length = values.length,
          seen = array;

      if (array === values) {
        values = copyArray(values);
      }
      if (iteratee) {
        seen = arrayMap(array, baseUnary(iteratee));
      }
      while (++index < length) {
        var fromIndex = 0,
            value = values[index],
            computed = iteratee ? iteratee(value) : value;

        while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
          if (seen !== array) {
            splice.call(seen, fromIndex, 1);
          }
          splice.call(array, fromIndex, 1);
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.pullAt` without support for individual
     * indexes or capturing the removed elements.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {number[]} indexes The indexes of elements to remove.
     * @returns {Array} Returns `array`.
     */
    function basePullAt(array, indexes) {
      var length = array ? indexes.length : 0,
          lastIndex = length - 1;

      while (length--) {
        var index = indexes[length];
        if (length == lastIndex || index !== previous) {
          var previous = index;
          if (isIndex(index)) {
            splice.call(array, index, 1);
          } else {
            baseUnset(array, index);
          }
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.random` without support for returning
     * floating-point numbers.
     *
     * @private
     * @param {number} lower The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the random number.
     */
    function baseRandom(lower, upper) {
      return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
    }

    /**
     * The base implementation of `_.range` and `_.rangeRight` which doesn't
     * coerce arguments.
     *
     * @private
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @param {number} step The value to increment or decrement by.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the range of numbers.
     */
    function baseRange(start, end, step, fromRight) {
      var index = -1,
          length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
          result = Array(length);

      while (length--) {
        result[fromRight ? length : ++index] = start;
        start += step;
      }
      return result;
    }

    /**
     * The base implementation of `_.repeat` which doesn't coerce arguments.
     *
     * @private
     * @param {string} string The string to repeat.
     * @param {number} n The number of times to repeat the string.
     * @returns {string} Returns the repeated string.
     */
    function baseRepeat(string, n) {
      var result = '';
      if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
        return result;
      }
      // Leverage the exponentiation by squaring algorithm for a faster repeat.
      // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
      do {
        if (n % 2) {
          result += string;
        }
        n = nativeFloor(n / 2);
        if (n) {
          string += string;
        }
      } while (n);

      return result;
    }

    /**
     * The base implementation of `_.rest` which doesn't validate or coerce arguments.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     */
    function baseRest(func, start) {
      return setToString(overRest(func, start, identity), func + '');
    }

    /**
     * The base implementation of `_.sample`.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     */
    function baseSample(collection) {
      return arraySample(values(collection));
    }

    /**
     * The base implementation of `_.sampleSize` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
    function baseSampleSize(collection, n) {
      var array = values(collection);
      return shuffleSelf(array, baseClamp(n, 0, array.length));
    }

    /**
     * The base implementation of `_.set`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */
    function baseSet(object, path, value, customizer) {
      if (!isObject(object)) {
        return object;
      }
      path = castPath(path, object);

      var index = -1,
          length = path.length,
          lastIndex = length - 1,
          nested = object;

      while (nested != null && ++index < length) {
        var key = toKey(path[index]),
            newValue = value;

        if (index != lastIndex) {
          var objValue = nested[key];
          newValue = customizer ? customizer(objValue, key, nested) : undefined;
          if (newValue === undefined) {
            newValue = isObject(objValue)
              ? objValue
              : (isIndex(path[index + 1]) ? [] : {});
          }
        }
        assignValue(nested, key, newValue);
        nested = nested[key];
      }
      return object;
    }

    /**
     * The base implementation of `setData` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var baseSetData = !metaMap ? identity : function(func, data) {
      metaMap.set(func, data);
      return func;
    };

    /**
     * The base implementation of `setToString` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var baseSetToString = !defineProperty ? identity : function(func, string) {
      return defineProperty(func, 'toString', {
        'configurable': true,
        'enumerable': false,
        'value': constant(string),
        'writable': true
      });
    };

    /**
     * The base implementation of `_.shuffle`.
     *
     * @private
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
    function baseShuffle(collection) {
      return shuffleSelf(values(collection));
    }

    /**
     * The base implementation of `_.slice` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseSlice(array, start, end) {
      var index = -1,
          length = array.length;

      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = end > length ? length : end;
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : ((end - start) >>> 0);
      start >>>= 0;

      var result = Array(length);
      while (++index < length) {
        result[index] = array[index + start];
      }
      return result;
    }

    /**
     * The base implementation of `_.some` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     */
    function baseSome(collection, predicate) {
      var result;

      baseEach(collection, function(value, index, collection) {
        result = predicate(value, index, collection);
        return !result;
      });
      return !!result;
    }

    /**
     * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
     * performs a binary search of `array` to determine the index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function baseSortedIndex(array, value, retHighest) {
      var low = 0,
          high = array == null ? low : array.length;

      if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
        while (low < high) {
          var mid = (low + high) >>> 1,
              computed = array[mid];

          if (computed !== null && !isSymbol(computed) &&
              (retHighest ? (computed <= value) : (computed < value))) {
            low = mid + 1;
          } else {
            high = mid;
          }
        }
        return high;
      }
      return baseSortedIndexBy(array, value, identity, retHighest);
    }

    /**
     * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
     * which invokes `iteratee` for `value` and each element of `array` to compute
     * their sort ranking. The iteratee is invoked with one argument; (value).
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} iteratee The iteratee invoked per element.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function baseSortedIndexBy(array, value, iteratee, retHighest) {
      value = iteratee(value);

      var low = 0,
          high = array == null ? 0 : array.length,
          valIsNaN = value !== value,
          valIsNull = value === null,
          valIsSymbol = isSymbol(value),
          valIsUndefined = value === undefined;

      while (low < high) {
        var mid = nativeFloor((low + high) / 2),
            computed = iteratee(array[mid]),
            othIsDefined = computed !== undefined,
            othIsNull = computed === null,
            othIsReflexive = computed === computed,
            othIsSymbol = isSymbol(computed);

        if (valIsNaN) {
          var setLow = retHighest || othIsReflexive;
        } else if (valIsUndefined) {
          setLow = othIsReflexive && (retHighest || othIsDefined);
        } else if (valIsNull) {
          setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
        } else if (valIsSymbol) {
          setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
        } else if (othIsNull || othIsSymbol) {
          setLow = false;
        } else {
          setLow = retHighest ? (computed <= value) : (computed < value);
        }
        if (setLow) {
          low = mid + 1;
        } else {
          high = mid;
        }
      }
      return nativeMin(high, MAX_ARRAY_INDEX);
    }

    /**
     * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
     * support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
    function baseSortedUniq(array, iteratee) {
      var index = -1,
          length = array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        if (!index || !eq(computed, seen)) {
          var seen = computed;
          result[resIndex++] = value === 0 ? 0 : value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.toNumber` which doesn't ensure correct
     * conversions of binary, hexadecimal, or octal string values.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     */
    function baseToNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      return +value;
    }

    /**
     * The base implementation of `_.toString` which doesn't convert nullish
     * values to empty strings.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {string} Returns the string.
     */
    function baseToString(value) {
      // Exit early for strings to avoid a performance hit in some environments.
      if (typeof value == 'string') {
        return value;
      }
      if (isArray(value)) {
        // Recursively convert values (susceptible to call stack limits).
        return arrayMap(value, baseToString) + '';
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : '';
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    /**
     * The base implementation of `_.uniqBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
    function baseUniq(array, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          length = array.length,
          isCommon = true,
          result = [],
          seen = result;

      if (comparator) {
        isCommon = false;
        includes = arrayIncludesWith;
      }
      else if (length >= LARGE_ARRAY_SIZE) {
        var set = iteratee ? null : createSet(array);
        if (set) {
          return setToArray(set);
        }
        isCommon = false;
        includes = cacheHas;
        seen = new SetCache;
      }
      else {
        seen = iteratee ? [] : result;
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (isCommon && computed === computed) {
          var seenIndex = seen.length;
          while (seenIndex--) {
            if (seen[seenIndex] === computed) {
              continue outer;
            }
          }
          if (iteratee) {
            seen.push(computed);
          }
          result.push(value);
        }
        else if (!includes(seen, computed, comparator)) {
          if (seen !== result) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.unset`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The property path to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     */
    function baseUnset(object, path) {
      path = castPath(path, object);
      object = parent(object, path);
      return object == null || delete object[toKey(last(path))];
    }

    /**
     * The base implementation of `_.update`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to update.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */
    function baseUpdate(object, path, updater, customizer) {
      return baseSet(object, path, updater(baseGet(object, path)), customizer);
    }

    /**
     * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
     * without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {Function} predicate The function invoked per iteration.
     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseWhile(array, predicate, isDrop, fromRight) {
      var length = array.length,
          index = fromRight ? length : -1;

      while ((fromRight ? index-- : ++index < length) &&
        predicate(array[index], index, array)) {}

      return isDrop
        ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
        : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
    }

    /**
     * The base implementation of `wrapperValue` which returns the result of
     * performing a sequence of actions on the unwrapped `value`, where each
     * successive action is supplied the return value of the previous.
     *
     * @private
     * @param {*} value The unwrapped value.
     * @param {Array} actions Actions to perform to resolve the unwrapped value.
     * @returns {*} Returns the resolved value.
     */
    function baseWrapperValue(value, actions) {
      var result = value;
      if (result instanceof LazyWrapper) {
        result = result.value();
      }
      return arrayReduce(actions, function(result, action) {
        return action.func.apply(action.thisArg, arrayPush([result], action.args));
      }, result);
    }

    /**
     * The base implementation of methods like `_.xor`, without support for
     * iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of values.
     */
    function baseXor(arrays, iteratee, comparator) {
      var length = arrays.length;
      if (length < 2) {
        return length ? baseUniq(arrays[0]) : [];
      }
      var index = -1,
          result = Array(length);

      while (++index < length) {
        var array = arrays[index],
            othIndex = -1;

        while (++othIndex < length) {
          if (othIndex != index) {
            result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
          }
        }
      }
      return baseUniq(baseFlatten(result, 1), iteratee, comparator);
    }

    /**
     * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
     *
     * @private
     * @param {Array} props The property identifiers.
     * @param {Array} values The property values.
     * @param {Function} assignFunc The function to assign values.
     * @returns {Object} Returns the new object.
     */
    function baseZipObject(props, values, assignFunc) {
      var index = -1,
          length = props.length,
          valsLength = values.length,
          result = {};

      while (++index < length) {
        var value = index < valsLength ? values[index] : undefined;
        assignFunc(result, props[index], value);
      }
      return result;
    }

    /**
     * Casts `value` to an empty array if it's not an array like object.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Array|Object} Returns the cast array-like object.
     */
    function castArrayLikeObject(value) {
      return isArrayLikeObject(value) ? value : [];
    }

    /**
     * Casts `value` to `identity` if it's not a function.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Function} Returns cast function.
     */
    function castFunction(value) {
      return typeof value == 'function' ? value : identity;
    }

    /**
     * Casts `value` to a path array if it's not one.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {Object} [object] The object to query keys on.
     * @returns {Array} Returns the cast property path array.
     */
    function castPath(value, object) {
      if (isArray(value)) {
        return value;
      }
      return isKey(value, object) ? [value] : stringToPath(toString(value));
    }

    /**
     * A `baseRest` alias which can be replaced with `identity` by module
     * replacement plugins.
     *
     * @private
     * @type {Function}
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
    var castRest = baseRest;

    /**
     * Casts `array` to a slice if it's needed.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {number} start The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the cast slice.
     */
    function castSlice(array, start, end) {
      var length = array.length;
      end = end === undefined ? length : end;
      return (!start && end >= length) ? array : baseSlice(array, start, end);
    }

    /**
     * A simple wrapper around the global [`clearTimeout`](https://mdn.io/clearTimeout).
     *
     * @private
     * @param {number|Object} id The timer id or timeout object of the timer to clear.
     */
    var clearTimeout = ctxClearTimeout || function(id) {
      return root.clearTimeout(id);
    };

    /**
     * Creates a clone of  `buffer`.
     *
     * @private
     * @param {Buffer} buffer The buffer to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Buffer} Returns the cloned buffer.
     */
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length,
          result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

      buffer.copy(result);
      return result;
    }

    /**
     * Creates a clone of `arrayBuffer`.
     *
     * @private
     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
     * @returns {ArrayBuffer} Returns the cloned array buffer.
     */
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array(result).set(new Uint8Array(arrayBuffer));
      return result;
    }

    /**
     * Creates a clone of `dataView`.
     *
     * @private
     * @param {Object} dataView The data view to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned data view.
     */
    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }

    /**
     * Creates a clone of `map`.
     *
     * @private
     * @param {Object} map The map to clone.
     * @param {Function} cloneFunc The function to clone values.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned map.
     */
    function cloneMap(map, isDeep, cloneFunc) {
      var array = isDeep ? cloneFunc(mapToArray(map), CLONE_DEEP_FLAG) : mapToArray(map);
      return arrayReduce(array, addMapEntry, new map.constructor);
    }

    /**
     * Creates a clone of `regexp`.
     *
     * @private
     * @param {Object} regexp The regexp to clone.
     * @returns {Object} Returns the cloned regexp.
     */
    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }

    /**
     * Creates a clone of `set`.
     *
     * @private
     * @param {Object} set The set to clone.
     * @param {Function} cloneFunc The function to clone values.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned set.
     */
    function cloneSet(set, isDeep, cloneFunc) {
      var array = isDeep ? cloneFunc(setToArray(set), CLONE_DEEP_FLAG) : setToArray(set);
      return arrayReduce(array, addSetEntry, new set.constructor);
    }

    /**
     * Creates a clone of the `symbol` object.
     *
     * @private
     * @param {Object} symbol The symbol object to clone.
     * @returns {Object} Returns the cloned symbol object.
     */
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }

    /**
     * Creates a clone of `typedArray`.
     *
     * @private
     * @param {Object} typedArray The typed array to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned typed array.
     */
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }

    /**
     * Compares values to sort them in ascending order.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {number} Returns the sort order indicator for `value`.
     */
    function compareAscending(value, other) {
      if (value !== other) {
        var valIsDefined = value !== undefined,
            valIsNull = value === null,
            valIsReflexive = value === value,
            valIsSymbol = isSymbol(value);

        var othIsDefined = other !== undefined,
            othIsNull = other === null,
            othIsReflexive = other === other,
            othIsSymbol = isSymbol(other);

        if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
            (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
            (valIsNull && othIsDefined && othIsReflexive) ||
            (!valIsDefined && othIsReflexive) ||
            !valIsReflexive) {
          return 1;
        }
        if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
            (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
            (othIsNull && valIsDefined && valIsReflexive) ||
            (!othIsDefined && valIsReflexive) ||
            !othIsReflexive) {
          return -1;
        }
      }
      return 0;
    }

    /**
     * Used by `_.orderBy` to compare multiple properties of a value to another
     * and stable sort them.
     *
     * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
     * specify an order of "desc" for descending or "asc" for ascending sort order
     * of corresponding values.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {boolean[]|string[]} orders The order to sort by for each property.
     * @returns {number} Returns the sort order indicator for `object`.
     */
    function compareMultiple(object, other, orders) {
      var index = -1,
          objCriteria = object.criteria,
          othCriteria = other.criteria,
          length = objCriteria.length,
          ordersLength = orders.length;

      while (++index < length) {
        var result = compareAscending(objCriteria[index], othCriteria[index]);
        if (result) {
          if (index >= ordersLength) {
            return result;
          }
          var order = orders[index];
          return result * (order == 'desc' ? -1 : 1);
        }
      }
      // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
      // that causes it, under certain circumstances, to provide the same value for
      // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
      // for more details.
      //
      // This also ensures a stable sort in V8 and other engines.
      // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
      return object.index - other.index;
    }

    /**
     * Creates an array that is the composition of partially applied arguments,
     * placeholders, and provided arguments into a single array of arguments.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to prepend to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgs(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersLength = holders.length,
          leftIndex = -1,
          leftLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(leftLength + rangeLength),
          isUncurried = !isCurried;

      while (++leftIndex < leftLength) {
        result[leftIndex] = partials[leftIndex];
      }
      while (++argsIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[holders[argsIndex]] = args[argsIndex];
        }
      }
      while (rangeLength--) {
        result[leftIndex++] = args[argsIndex++];
      }
      return result;
    }

    /**
     * This function is like `composeArgs` except that the arguments composition
     * is tailored for `_.partialRight`.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to append to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgsRight(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersIndex = -1,
          holdersLength = holders.length,
          rightIndex = -1,
          rightLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(rangeLength + rightLength),
          isUncurried = !isCurried;

      while (++argsIndex < rangeLength) {
        result[argsIndex] = args[argsIndex];
      }
      var offset = argsIndex;
      while (++rightIndex < rightLength) {
        result[offset + rightIndex] = partials[rightIndex];
      }
      while (++holdersIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[offset + holders[holdersIndex]] = args[argsIndex++];
        }
      }
      return result;
    }

    /**
     * Copies the values of `source` to `array`.
     *
     * @private
     * @param {Array} source The array to copy values from.
     * @param {Array} [array=[]] The array to copy values to.
     * @returns {Array} Returns `array`.
     */
    function copyArray(source, array) {
      var index = -1,
          length = source.length;

      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }

    /**
     * Copies properties of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy properties from.
     * @param {Array} props The property identifiers to copy.
     * @param {Object} [object={}] The object to copy properties to.
     * @param {Function} [customizer] The function to customize copied values.
     * @returns {Object} Returns `object`.
     */
    function copyObject(source, props, object, customizer) {
      var isNew = !object;
      object || (object = {});

      var index = -1,
          length = props.length;

      while (++index < length) {
        var key = props[index];

        var newValue = customizer
          ? customizer(object[key], source[key], key, object, source)
          : undefined;

        if (newValue === undefined) {
          newValue = source[key];
        }
        if (isNew) {
          baseAssignValue(object, key, newValue);
        } else {
          assignValue(object, key, newValue);
        }
      }
      return object;
    }

    /**
     * Copies own symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
    function copySymbols(source, object) {
      return copyObject(source, getSymbols(source), object);
    }

    /**
     * Copies own and inherited symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
    function copySymbolsIn(source, object) {
      return copyObject(source, getSymbolsIn(source), object);
    }

    /**
     * Creates a function like `_.groupBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} [initializer] The accumulator object initializer.
     * @returns {Function} Returns the new aggregator function.
     */
    function createAggregator(setter, initializer) {
      return function(collection, iteratee) {
        var func = isArray(collection) ? arrayAggregator : baseAggregator,
            accumulator = initializer ? initializer() : {};

        return func(collection, setter, getIteratee(iteratee, 2), accumulator);
      };
    }

    /**
     * Creates a function like `_.assign`.
     *
     * @private
     * @param {Function} assigner The function to assign values.
     * @returns {Function} Returns the new assigner function.
     */
    function createAssigner(assigner) {
      return baseRest(function(object, sources) {
        var index = -1,
            length = sources.length,
            customizer = length > 1 ? sources[length - 1] : undefined,
            guard = length > 2 ? sources[2] : undefined;

        customizer = (assigner.length > 3 && typeof customizer == 'function')
          ? (length--, customizer)
          : undefined;

        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          customizer = length < 3 ? undefined : customizer;
          length = 1;
        }
        object = Object(object);
        while (++index < length) {
          var source = sources[index];
          if (source) {
            assigner(object, source, index, customizer);
          }
        }
        return object;
      });
    }

    /**
     * Creates a `baseEach` or `baseEachRight` function.
     *
     * @private
     * @param {Function} eachFunc The function to iterate over a collection.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseEach(eachFunc, fromRight) {
      return function(collection, iteratee) {
        if (collection == null) {
          return collection;
        }
        if (!isArrayLike(collection)) {
          return eachFunc(collection, iteratee);
        }
        var length = collection.length,
            index = fromRight ? length : -1,
            iterable = Object(collection);

        while ((fromRight ? index-- : ++index < length)) {
          if (iteratee(iterable[index], index, iterable) === false) {
            break;
          }
        }
        return collection;
      };
    }

    /**
     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index = -1,
            iterable = Object(object),
            props = keysFunc(object),
            length = props.length;

        while (length--) {
          var key = props[fromRight ? length : ++index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }

    /**
     * Creates a function that wraps `func` to invoke it with the optional `this`
     * binding of `thisArg`.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createBind(func, bitmask, thisArg) {
      var isBind = bitmask & WRAP_BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return fn.apply(isBind ? thisArg : this, arguments);
      }
      return wrapper;
    }

    /**
     * Creates a function like `_.lowerFirst`.
     *
     * @private
     * @param {string} methodName The name of the `String` case method to use.
     * @returns {Function} Returns the new case function.
     */
    function createCaseFirst(methodName) {
      return function(string) {
        string = toString(string);

        var strSymbols = hasUnicode(string)
          ? stringToArray(string)
          : undefined;

        var chr = strSymbols
          ? strSymbols[0]
          : string.charAt(0);

        var trailing = strSymbols
          ? castSlice(strSymbols, 1).join('')
          : string.slice(1);

        return chr[methodName]() + trailing;
      };
    }

    /**
     * Creates a function like `_.camelCase`.
     *
     * @private
     * @param {Function} callback The function to combine each word.
     * @returns {Function} Returns the new compounder function.
     */
    function createCompounder(callback) {
      return function(string) {
        return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
      };
    }

    /**
     * Creates a function that produces an instance of `Ctor` regardless of
     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
     *
     * @private
     * @param {Function} Ctor The constructor to wrap.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCtor(Ctor) {
      return function() {
        // Use a `switch` statement to work with class constructors. See
        // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
        // for more details.
        var args = arguments;
        switch (args.length) {
          case 0: return new Ctor;
          case 1: return new Ctor(args[0]);
          case 2: return new Ctor(args[0], args[1]);
          case 3: return new Ctor(args[0], args[1], args[2]);
          case 4: return new Ctor(args[0], args[1], args[2], args[3]);
          case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
          case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
          case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
        }
        var thisBinding = baseCreate(Ctor.prototype),
            result = Ctor.apply(thisBinding, args);

        // Mimic the constructor's `return` behavior.
        // See https://es5.github.io/#x13.2.2 for more details.
        return isObject(result) ? result : thisBinding;
      };
    }

    /**
     * Creates a function that wraps `func` to enable currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {number} arity The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCurry(func, bitmask, arity) {
      var Ctor = createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length,
            placeholder = getHolder(wrapper);

        while (index--) {
          args[index] = arguments[index];
        }
        var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
          ? []
          : replaceHolders(args, placeholder);

        length -= holders.length;
        if (length < arity) {
          return createRecurry(
            func, bitmask, createHybrid, wrapper.placeholder, undefined,
            args, holders, undefined, undefined, arity - length);
        }
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return apply(fn, this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.find` or `_.findLast` function.
     *
     * @private
     * @param {Function} findIndexFunc The function to find the collection index.
     * @returns {Function} Returns the new find function.
     */
    function createFind(findIndexFunc) {
      return function(collection, predicate, fromIndex) {
        var iterable = Object(collection);
        if (!isArrayLike(collection)) {
          var iteratee = getIteratee(predicate, 3);
          collection = keys(collection);
          predicate = function(key) { return iteratee(iterable[key], key, iterable); };
        }
        var index = findIndexFunc(collection, predicate, fromIndex);
        return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
      };
    }

    /**
     * Creates a `_.flow` or `_.flowRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new flow function.
     */
    function createFlow(fromRight) {
      return flatRest(function(funcs) {
        var length = funcs.length,
            index = length,
            prereq = LodashWrapper.prototype.thru;

        if (fromRight) {
          funcs.reverse();
        }
        while (index--) {
          var func = funcs[index];
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
            var wrapper = new LodashWrapper([], true);
          }
        }
        index = wrapper ? index : length;
        while (++index < length) {
          func = funcs[index];

          var funcName = getFuncName(func),
              data = funcName == 'wrapper' ? getData(func) : undefined;

          if (data && isLaziable(data[0]) &&
                data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) &&
                !data[4].length && data[9] == 1
              ) {
            wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
          } else {
            wrapper = (func.length == 1 && isLaziable(func))
              ? wrapper[funcName]()
              : wrapper.thru(func);
          }
        }
        return function() {
          var args = arguments,
              value = args[0];

          if (wrapper && args.length == 1 && isArray(value)) {
            return wrapper.plant(value).value();
          }
          var index = 0,
              result = length ? funcs[index].apply(this, args) : value;

          while (++index < length) {
            result = funcs[index].call(this, result);
          }
          return result;
        };
      });
    }

    /**
     * Creates a function that wraps `func` to invoke it with optional `this`
     * binding of `thisArg`, partial application, and currying.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [partialsRight] The arguments to append to those provided
     *  to the new function.
     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
      var isAry = bitmask & WRAP_ARY_FLAG,
          isBind = bitmask & WRAP_BIND_FLAG,
          isBindKey = bitmask & WRAP_BIND_KEY_FLAG,
          isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),
          isFlip = bitmask & WRAP_FLIP_FLAG,
          Ctor = isBindKey ? undefined : createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length;

        while (index--) {
          args[index] = arguments[index];
        }
        if (isCurried) {
          var placeholder = getHolder(wrapper),
              holdersCount = countHolders(args, placeholder);
        }
        if (partials) {
          args = composeArgs(args, partials, holders, isCurried);
        }
        if (partialsRight) {
          args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
        }
        length -= holdersCount;
        if (isCurried && length < arity) {
          var newHolders = replaceHolders(args, placeholder);
          return createRecurry(
            func, bitmask, createHybrid, wrapper.placeholder, thisArg,
            args, newHolders, argPos, ary, arity - length
          );
        }
        var thisBinding = isBind ? thisArg : this,
            fn = isBindKey ? thisBinding[func] : func;

        length = args.length;
        if (argPos) {
          args = reorder(args, argPos);
        } else if (isFlip && length > 1) {
          args.reverse();
        }
        if (isAry && ary < length) {
          args.length = ary;
        }
        if (this && this !== root && this instanceof wrapper) {
          fn = Ctor || createCtor(fn);
        }
        return fn.apply(thisBinding, args);
      }
      return wrapper;
    }

    /**
     * Creates a function like `_.invertBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} toIteratee The function to resolve iteratees.
     * @returns {Function} Returns the new inverter function.
     */
    function createInverter(setter, toIteratee) {
      return function(object, iteratee) {
        return baseInverter(object, setter, toIteratee(iteratee), {});
      };
    }

    /**
     * Creates a function that performs a mathematical operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @param {number} [defaultValue] The value used for `undefined` arguments.
     * @returns {Function} Returns the new mathematical operation function.
     */
    function createMathOperation(operator, defaultValue) {
      return function(value, other) {
        var result;
        if (value === undefined && other === undefined) {
          return defaultValue;
        }
        if (value !== undefined) {
          result = value;
        }
        if (other !== undefined) {
          if (result === undefined) {
            return other;
          }
          if (typeof value == 'string' || typeof other == 'string') {
            value = baseToString(value);
            other = baseToString(other);
          } else {
            value = baseToNumber(value);
            other = baseToNumber(other);
          }
          result = operator(value, other);
        }
        return result;
      };
    }

    /**
     * Creates a function like `_.over`.
     *
     * @private
     * @param {Function} arrayFunc The function to iterate over iteratees.
     * @returns {Function} Returns the new over function.
     */
    function createOver(arrayFunc) {
      return flatRest(function(iteratees) {
        iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
        return baseRest(function(args) {
          var thisArg = this;
          return arrayFunc(iteratees, function(iteratee) {
            return apply(iteratee, thisArg, args);
          });
        });
      });
    }

    /**
     * Creates the padding for `string` based on `length`. The `chars` string
     * is truncated if the number of characters exceeds `length`.
     *
     * @private
     * @param {number} length The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padding for `string`.
     */
    function createPadding(length, chars) {
      chars = chars === undefined ? ' ' : baseToString(chars);

      var charsLength = chars.length;
      if (charsLength < 2) {
        return charsLength ? baseRepeat(chars, length) : chars;
      }
      var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
      return hasUnicode(chars)
        ? castSlice(stringToArray(result), 0, length).join('')
        : result.slice(0, length);
    }

    /**
     * Creates a function that wraps `func` to invoke it with the `this` binding
     * of `thisArg` and `partials` prepended to the arguments it receives.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {Array} partials The arguments to prepend to those provided to
     *  the new function.
     * @returns {Function} Returns the new wrapped function.
     */
    function createPartial(func, bitmask, thisArg, partials) {
      var isBind = bitmask & WRAP_BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var argsIndex = -1,
            argsLength = arguments.length,
            leftIndex = -1,
            leftLength = partials.length,
            args = Array(leftLength + argsLength),
            fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

        while (++leftIndex < leftLength) {
          args[leftIndex] = partials[leftIndex];
        }
        while (argsLength--) {
          args[leftIndex++] = arguments[++argsIndex];
        }
        return apply(fn, isBind ? thisArg : this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.range` or `_.rangeRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new range function.
     */
    function createRange(fromRight) {
      return function(start, end, step) {
        if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
          end = step = undefined;
        }
        // Ensure the sign of `-0` is preserved.
        start = toFinite(start);
        if (end === undefined) {
          end = start;
          start = 0;
        } else {
          end = toFinite(end);
        }
        step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
        return baseRange(start, end, step, fromRight);
      };
    }

    /**
     * Creates a function that performs a relational operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @returns {Function} Returns the new relational operation function.
     */
    function createRelationalOperation(operator) {
      return function(value, other) {
        if (!(typeof value == 'string' && typeof other == 'string')) {
          value = toNumber(value);
          other = toNumber(other);
        }
        return operator(value, other);
      };
    }

    /**
     * Creates a function that wraps `func` to continue currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {Function} wrapFunc The function to create the `func` wrapper.
     * @param {*} placeholder The placeholder value.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
      var isCurry = bitmask & WRAP_CURRY_FLAG,
          newHolders = isCurry ? holders : undefined,
          newHoldersRight = isCurry ? undefined : holders,
          newPartials = isCurry ? partials : undefined,
          newPartialsRight = isCurry ? undefined : partials;

      bitmask |= (isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG);
      bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);

      if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
        bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
      }
      var newData = [
        func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
        newHoldersRight, argPos, ary, arity
      ];

      var result = wrapFunc.apply(undefined, newData);
      if (isLaziable(func)) {
        setData(result, newData);
      }
      result.placeholder = placeholder;
      return setWrapToString(result, func, bitmask);
    }

    /**
     * Creates a function like `_.round`.
     *
     * @private
     * @param {string} methodName The name of the `Math` method to use when rounding.
     * @returns {Function} Returns the new round function.
     */
    function createRound(methodName) {
      var func = Math[methodName];
      return function(number, precision) {
        number = toNumber(number);
        precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
        if (precision) {
          // Shift with exponential notation to avoid floating-point issues.
          // See [MDN](https://mdn.io/round#Examples) for more details.
          var pair = (toString(number) + 'e').split('e'),
              value = func(pair[0] + 'e' + (+pair[1] + precision));

          pair = (toString(value) + 'e').split('e');
          return +(pair[0] + 'e' + (+pair[1] - precision));
        }
        return func(number);
      };
    }

    /**
     * Creates a set object of `values`.
     *
     * @private
     * @param {Array} values The values to add to the set.
     * @returns {Object} Returns the new set.
     */
    var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
      return new Set(values);
    };

    /**
     * Creates a `_.toPairs` or `_.toPairsIn` function.
     *
     * @private
     * @param {Function} keysFunc The function to get the keys of a given object.
     * @returns {Function} Returns the new pairs function.
     */
    function createToPairs(keysFunc) {
      return function(object) {
        var tag = getTag(object);
        if (tag == mapTag) {
          return mapToArray(object);
        }
        if (tag == setTag) {
          return setToPairs(object);
        }
        return baseToPairs(object, keysFunc(object));
      };
    }

    /**
     * Creates a function that either curries or invokes `func` with optional
     * `this` binding and partially applied arguments.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags.
     *    1 - `_.bind`
     *    2 - `_.bindKey`
     *    4 - `_.curry` or `_.curryRight` of a bound function
     *    8 - `_.curry`
     *   16 - `_.curryRight`
     *   32 - `_.partial`
     *   64 - `_.partialRight`
     *  128 - `_.rearg`
     *  256 - `_.ary`
     *  512 - `_.flip`
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to be partially applied.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
      var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
      if (!isBindKey && typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var length = partials ? partials.length : 0;
      if (!length) {
        bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
        partials = holders = undefined;
      }
      ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
      arity = arity === undefined ? arity : toInteger(arity);
      length -= holders ? holders.length : 0;

      if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
        var partialsRight = partials,
            holdersRight = holders;

        partials = holders = undefined;
      }
      var data = isBindKey ? undefined : getData(func);

      var newData = [
        func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
        argPos, ary, arity
      ];

      if (data) {
        mergeData(newData, data);
      }
      func = newData[0];
      bitmask = newData[1];
      thisArg = newData[2];
      partials = newData[3];
      holders = newData[4];
      arity = newData[9] = newData[9] === undefined
        ? (isBindKey ? 0 : func.length)
        : nativeMax(newData[9] - length, 0);

      if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
        bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
      }
      if (!bitmask || bitmask == WRAP_BIND_FLAG) {
        var result = createBind(func, bitmask, thisArg);
      } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
        result = createCurry(func, bitmask, arity);
      } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
        result = createPartial(func, bitmask, thisArg, partials);
      } else {
        result = createHybrid.apply(undefined, newData);
      }
      var setter = data ? baseSetData : setData;
      return setWrapToString(setter(result, newData), func, bitmask);
    }

    /**
     * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
     * of source objects to the destination object for all destination properties
     * that resolve to `undefined`.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to assign.
     * @param {Object} object The parent object of `objValue`.
     * @returns {*} Returns the value to assign.
     */
    function customDefaultsAssignIn(objValue, srcValue, key, object) {
      if (objValue === undefined ||
          (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
        return srcValue;
      }
      return objValue;
    }

    /**
     * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
     * objects into destination objects that are passed thru.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to merge.
     * @param {Object} object The parent object of `objValue`.
     * @param {Object} source The parent object of `srcValue`.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     * @returns {*} Returns the value to assign.
     */
    function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
      if (isObject(objValue) && isObject(srcValue)) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, objValue);
        baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);
        stack['delete'](srcValue);
      }
      return objValue;
    }

    /**
     * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
     * objects.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {string} key The key of the property to inspect.
     * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
     */
    function customOmitClone(value) {
      return isPlainObject(value) ? undefined : value;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for arrays with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Array} array The array to compare.
     * @param {Array} other The other array to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `array` and `other` objects.
     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
     */
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          arrLength = array.length,
          othLength = other.length;

      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(array);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var index = -1,
          result = true,
          seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

      stack.set(array, other);
      stack.set(other, array);

      // Ignore non-index properties.
      while (++index < arrLength) {
        var arrValue = array[index],
            othValue = other[index];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, arrValue, index, other, array, stack)
            : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== undefined) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        // Recursively compare arrays (susceptible to call stack limits).
        if (seen) {
          if (!arraySome(other, function(othValue, othIndex) {
                if (!cacheHas(seen, othIndex) &&
                    (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
            result = false;
            break;
          }
        } else if (!(
              arrValue === othValue ||
                equalFunc(arrValue, othValue, bitmask, customizer, stack)
            )) {
          result = false;
          break;
        }
      }
      stack['delete'](array);
      stack['delete'](other);
      return result;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for comparing objects of
     * the same `toStringTag`.
     *
     * **Note:** This function only supports comparing values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {string} tag The `toStringTag` of the objects to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if ((object.byteLength != other.byteLength) ||
              (object.byteOffset != other.byteOffset)) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;

        case arrayBufferTag:
          if ((object.byteLength != other.byteLength) ||
              !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
            return false;
          }
          return true;

        case boolTag:
        case dateTag:
        case numberTag:
          // Coerce booleans to `1` or `0` and dates to milliseconds.
          // Invalid dates are coerced to `NaN`.
          return eq(+object, +other);

        case errorTag:
          return object.name == other.name && object.message == other.message;

        case regexpTag:
        case stringTag:
          // Coerce regexes to strings and treat strings, primitives and objects,
          // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
          // for more details.
          return object == (other + '');

        case mapTag:
          var convert = mapToArray;

        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);

          if (object.size != other.size && !isPartial) {
            return false;
          }
          // Assume cyclic values are equal.
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;

          // Recursively compare objects (susceptible to call stack limits).
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack['delete'](object);
          return result;

        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for objects with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          objProps = getAllKeys(object),
          objLength = objProps.length,
          othProps = getAllKeys(other),
          othLength = othProps.length;

      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);

      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key],
            othValue = other[key];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, objValue, key, other, object, stack)
            : customizer(objValue, othValue, key, object, other, stack);
        }
        // Recursively compare objects (susceptible to call stack limits).
        if (!(compared === undefined
              ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
              : compared
            )) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == 'constructor');
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor,
            othCtor = other.constructor;

        // Non `Object` object instances with different constructors are not equal.
        if (objCtor != othCtor &&
            ('constructor' in object && 'constructor' in other) &&
            !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
              typeof othCtor == 'function' && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack['delete'](object);
      stack['delete'](other);
      return result;
    }

    /**
     * A specialized version of `baseRest` which flattens the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
    function flatRest(func) {
      return setToString(overRest(func, undefined, flatten), func + '');
    }

    /**
     * Creates an array of own enumerable property names and symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }

    /**
     * Creates an array of own and inherited enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeysIn(object) {
      return baseGetAllKeys(object, keysIn, getSymbolsIn);
    }

    /**
     * Gets metadata for `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {*} Returns the metadata for `func`.
     */
    var getData = !metaMap ? noop : function(func) {
      return metaMap.get(func);
    };

    /**
     * Gets the name of `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {string} Returns the function name.
     */
    function getFuncName(func) {
      var result = (func.name + ''),
          array = realNames[result],
          length = hasOwnProperty.call(realNames, result) ? array.length : 0;

      while (length--) {
        var data = array[length],
            otherFunc = data.func;
        if (otherFunc == null || otherFunc == func) {
          return data.name;
        }
      }
      return result;
    }

    /**
     * Gets the argument placeholder value for `func`.
     *
     * @private
     * @param {Function} func The function to inspect.
     * @returns {*} Returns the placeholder value.
     */
    function getHolder(func) {
      var object = hasOwnProperty.call(lodash, 'placeholder') ? lodash : func;
      return object.placeholder;
    }

    /**
     * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
     * this function returns the custom method, otherwise it returns `baseIteratee`.
     * If arguments are provided, the chosen function is invoked with them and
     * its result is returned.
     *
     * @private
     * @param {*} [value] The value to convert to an iteratee.
     * @param {number} [arity] The arity of the created iteratee.
     * @returns {Function} Returns the chosen function or its result.
     */
    function getIteratee() {
      var result = lodash.iteratee || iteratee;
      result = result === iteratee ? baseIteratee : result;
      return arguments.length ? result(arguments[0], arguments[1]) : result;
    }

    /**
     * Gets the data for `map`.
     *
     * @private
     * @param {Object} map The map to query.
     * @param {string} key The reference key.
     * @returns {*} Returns the map data.
     */
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key)
        ? data[typeof key == 'string' ? 'string' : 'hash']
        : data.map;
    }

    /**
     * Gets the property names, values, and compare flags of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the match data of `object`.
     */
    function getMatchData(object) {
      var result = keys(object),
          length = result.length;

      while (length--) {
        var key = result[length],
            value = object[key];

        result[length] = [key, value, isStrictComparable(value)];
      }
      return result;
    }

    /**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : undefined;
    }

    /**
     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the raw `toStringTag`.
     */
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag),
          tag = value[symToStringTag];

      try {
        value[symToStringTag] = undefined;
        var unmasked = true;
      } catch (e) {}

      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }

    /**
     * Creates an array of the own enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };

    /**
     * Creates an array of the own and inherited enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
      var result = [];
      while (object) {
        arrayPush(result, getSymbols(object));
        object = getPrototype(object);
      }
      return result;
    };

    /**
     * Gets the `toStringTag` of `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    var getTag = baseGetTag;

    // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
    if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
        (Map && getTag(new Map) != mapTag) ||
        (Promise && getTag(Promise.resolve()) != promiseTag) ||
        (Set && getTag(new Set) != setTag) ||
        (WeakMap && getTag(new WeakMap) != weakMapTag)) {
      getTag = function(value) {
        var result = baseGetTag(value),
            Ctor = result == objectTag ? value.constructor : undefined,
            ctorString = Ctor ? toSource(Ctor) : '';

        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString: return dataViewTag;
            case mapCtorString: return mapTag;
            case promiseCtorString: return promiseTag;
            case setCtorString: return setTag;
            case weakMapCtorString: return weakMapTag;
          }
        }
        return result;
      };
    }

    /**
     * Gets the view, applying any `transforms` to the `start` and `end` positions.
     *
     * @private
     * @param {number} start The start of the view.
     * @param {number} end The end of the view.
     * @param {Array} transforms The transformations to apply to the view.
     * @returns {Object} Returns an object containing the `start` and `end`
     *  positions of the view.
     */
    function getView(start, end, transforms) {
      var index = -1,
          length = transforms.length;

      while (++index < length) {
        var data = transforms[index],
            size = data.size;

        switch (data.type) {
          case 'drop':      start += size; break;
          case 'dropRight': end -= size; break;
          case 'take':      end = nativeMin(end, start + size); break;
          case 'takeRight': start = nativeMax(start, end - size); break;
        }
      }
      return { 'start': start, 'end': end };
    }

    /**
     * Extracts wrapper details from the `source` body comment.
     *
     * @private
     * @param {string} source The source to inspect.
     * @returns {Array} Returns the wrapper details.
     */
    function getWrapDetails(source) {
      var match = source.match(reWrapDetails);
      return match ? match[1].split(reSplitDetails) : [];
    }

    /**
     * Checks if `path` exists on `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @param {Function} hasFunc The function to check properties.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     */
    function hasPath(object, path, hasFunc) {
      path = castPath(path, object);

      var index = -1,
          length = path.length,
          result = false;

      while (++index < length) {
        var key = toKey(path[index]);
        if (!(result = object != null && hasFunc(object, key))) {
          break;
        }
        object = object[key];
      }
      if (result || ++index != length) {
        return result;
      }
      length = object == null ? 0 : object.length;
      return !!length && isLength(length) && isIndex(key, length) &&
        (isArray(object) || isArguments(object));
    }

    /**
     * Initializes an array clone.
     *
     * @private
     * @param {Array} array The array to clone.
     * @returns {Array} Returns the initialized clone.
     */
    function initCloneArray(array) {
      var length = array.length,
          result = array.constructor(length);

      // Add properties assigned by `RegExp#exec`.
      if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }

    /**
     * Initializes an object clone.
     *
     * @private
     * @param {Object} object The object to clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneObject(object) {
      return (typeof object.constructor == 'function' && !isPrototype(object))
        ? baseCreate(getPrototype(object))
        : {};
    }

    /**
     * Initializes an object clone based on its `toStringTag`.
     *
     * **Note:** This function only supports cloning values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to clone.
     * @param {string} tag The `toStringTag` of the object to clone.
     * @param {Function} cloneFunc The function to clone values.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneByTag(object, tag, cloneFunc, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag:
          return cloneArrayBuffer(object);

        case boolTag:
        case dateTag:
          return new Ctor(+object);

        case dataViewTag:
          return cloneDataView(object, isDeep);

        case float32Tag: case float64Tag:
        case int8Tag: case int16Tag: case int32Tag:
        case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
          return cloneTypedArray(object, isDeep);

        case mapTag:
          return cloneMap(object, isDeep, cloneFunc);

        case numberTag:
        case stringTag:
          return new Ctor(object);

        case regexpTag:
          return cloneRegExp(object);

        case setTag:
          return cloneSet(object, isDeep, cloneFunc);

        case symbolTag:
          return cloneSymbol(object);
      }
    }

    /**
     * Inserts wrapper `details` in a comment at the top of the `source` body.
     *
     * @private
     * @param {string} source The source to modify.
     * @returns {Array} details The details to insert.
     * @returns {string} Returns the modified source.
     */
    function insertWrapDetails(source, details) {
      var length = details.length;
      if (!length) {
        return source;
      }
      var lastIndex = length - 1;
      details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
      details = details.join(length > 2 ? ', ' : ' ');
      return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
    }

    /**
     * Checks if `value` is a flattenable `arguments` object or array.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
     */
    function isFlattenable(value) {
      return isArray(value) || isArguments(value) ||
        !!(spreadableSymbol && value && value[spreadableSymbol]);
    }

    /**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */
    function isIndex(value, length) {
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length &&
        (typeof value == 'number' || reIsUint.test(value)) &&
        (value > -1 && value % 1 == 0 && value < length);
    }

    /**
     * Checks if the given arguments are from an iteratee call.
     *
     * @private
     * @param {*} value The potential iteratee value argument.
     * @param {*} index The potential iteratee index or key argument.
     * @param {*} object The potential iteratee object argument.
     * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
     *  else `false`.
     */
    function isIterateeCall(value, index, object) {
      if (!isObject(object)) {
        return false;
      }
      var type = typeof index;
      if (type == 'number'
            ? (isArrayLike(object) && isIndex(index, object.length))
            : (type == 'string' && index in object)
          ) {
        return eq(object[index], value);
      }
      return false;
    }

    /**
     * Checks if `value` is a property name and not a property path.
     *
     * @private
     * @param {*} value The value to check.
     * @param {Object} [object] The object to query keys on.
     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
     */
    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }
      var type = typeof value;
      if (type == 'number' || type == 'symbol' || type == 'boolean' ||
          value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
        (object != null && value in Object(object));
    }

    /**
     * Checks if `value` is suitable for use as unique object key.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
     */
    function isKeyable(value) {
      var type = typeof value;
      return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
        ? (value !== '__proto__')
        : (value === null);
    }

    /**
     * Checks if `func` has a lazy counterpart.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
     *  else `false`.
     */
    function isLaziable(func) {
      var funcName = getFuncName(func),
          other = lodash[funcName];

      if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
        return false;
      }
      if (func === other) {
        return true;
      }
      var data = getData(other);
      return !!data && func === data[0];
    }

    /**
     * Checks if `func` has its source masked.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
     */
    function isMasked(func) {
      return !!maskSrcKey && (maskSrcKey in func);
    }

    /**
     * Checks if `func` is capable of being masked.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
     */
    var isMaskable = coreJsData ? isFunction : stubFalse;

    /**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */
    function isPrototype(value) {
      var Ctor = value && value.constructor,
          proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

      return value === proto;
    }

    /**
     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` if suitable for strict
     *  equality comparisons, else `false`.
     */
    function isStrictComparable(value) {
      return value === value && !isObject(value);
    }

    /**
     * A specialized version of `matchesProperty` for source values suitable
     * for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function matchesStrictComparable(key, srcValue) {
      return function(object) {
        if (object == null) {
          return false;
        }
        return object[key] === srcValue &&
          (srcValue !== undefined || (key in Object(object)));
      };
    }

    /**
     * A specialized version of `_.memoize` which clears the memoized function's
     * cache when it exceeds `MAX_MEMOIZE_SIZE`.
     *
     * @private
     * @param {Function} func The function to have its output memoized.
     * @returns {Function} Returns the new memoized function.
     */
    function memoizeCapped(func) {
      var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key;
      });

      var cache = result.cache;
      return result;
    }

    /**
     * Merges the function metadata of `source` into `data`.
     *
     * Merging metadata reduces the number of wrappers used to invoke a function.
     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
     * may be applied regardless of execution order. Methods like `_.ary` and
     * `_.rearg` modify function arguments, making the order in which they are
     * executed important, preventing the merging of metadata. However, we make
     * an exception for a safe combined case where curried functions have `_.ary`
     * and or `_.rearg` applied.
     *
     * @private
     * @param {Array} data The destination metadata.
     * @param {Array} source The source metadata.
     * @returns {Array} Returns `data`.
     */
    function mergeData(data, source) {
      var bitmask = data[1],
          srcBitmask = source[1],
          newBitmask = bitmask | srcBitmask,
          isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);

      var isCombo =
        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_CURRY_FLAG)) ||
        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_REARG_FLAG) && (data[7].length <= source[8])) ||
        ((srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == WRAP_CURRY_FLAG));

      // Exit early if metadata can't be merged.
      if (!(isCommon || isCombo)) {
        return data;
      }
      // Use source `thisArg` if available.
      if (srcBitmask & WRAP_BIND_FLAG) {
        data[2] = source[2];
        // Set when currying a bound function.
        newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
      }
      // Compose partial arguments.
      var value = source[3];
      if (value) {
        var partials = data[3];
        data[3] = partials ? composeArgs(partials, value, source[4]) : value;
        data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
      }
      // Compose partial right arguments.
      value = source[5];
      if (value) {
        partials = data[5];
        data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
        data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
      }
      // Use source `argPos` if available.
      value = source[7];
      if (value) {
        data[7] = value;
      }
      // Use source `ary` if it's smaller.
      if (srcBitmask & WRAP_ARY_FLAG) {
        data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
      }
      // Use source `arity` if one is not provided.
      if (data[9] == null) {
        data[9] = source[9];
      }
      // Use source `func` and merge bitmasks.
      data[0] = source[0];
      data[1] = newBitmask;

      return data;
    }

    /**
     * This function is like
     * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * except that it includes inherited enumerable properties.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function nativeKeysIn(object) {
      var result = [];
      if (object != null) {
        for (var key in Object(object)) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * Converts `value` to a string using `Object.prototype.toString`.
     *
     * @private
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     */
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }

    /**
     * A specialized version of `baseRest` which transforms the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @param {Function} transform The rest array transform.
     * @returns {Function} Returns the new function.
     */
    function overRest(func, start, transform) {
      start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
      return function() {
        var args = arguments,
            index = -1,
            length = nativeMax(args.length - start, 0),
            array = Array(length);

        while (++index < length) {
          array[index] = args[start + index];
        }
        index = -1;
        var otherArgs = Array(start + 1);
        while (++index < start) {
          otherArgs[index] = args[index];
        }
        otherArgs[start] = transform(array);
        return apply(func, this, otherArgs);
      };
    }

    /**
     * Gets the parent value at `path` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} path The path to get the parent value of.
     * @returns {*} Returns the parent value.
     */
    function parent(object, path) {
      return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
    }

    /**
     * Reorder `array` according to the specified indexes where the element at
     * the first index is assigned as the first element, the element at
     * the second index is assigned as the second element, and so on.
     *
     * @private
     * @param {Array} array The array to reorder.
     * @param {Array} indexes The arranged array indexes.
     * @returns {Array} Returns `array`.
     */
    function reorder(array, indexes) {
      var arrLength = array.length,
          length = nativeMin(indexes.length, arrLength),
          oldArray = copyArray(array);

      while (length--) {
        var index = indexes[length];
        array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
      }
      return array;
    }

    /**
     * Sets metadata for `func`.
     *
     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
     * period of time, it will trip its breaker and transition to an identity
     * function to avoid garbage collection pauses in V8. See
     * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
     * for more details.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var setData = shortOut(baseSetData);

    /**
     * A simple wrapper around the global [`setTimeout`](https://mdn.io/setTimeout).
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
    var setTimeout = ctxSetTimeout || function(func, wait) {
      return root.setTimeout(func, wait);
    };

    /**
     * Sets the `toString` method of `func` to return `string`.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var setToString = shortOut(baseSetToString);

    /**
     * Sets the `toString` method of `wrapper` to mimic the source of `reference`
     * with wrapper details in a comment at the top of the source body.
     *
     * @private
     * @param {Function} wrapper The function to modify.
     * @param {Function} reference The reference function.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Function} Returns `wrapper`.
     */
    function setWrapToString(wrapper, reference, bitmask) {
      var source = (reference + '');
      return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
    }

    /**
     * Creates a function that'll short out and invoke `identity` instead
     * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
     * milliseconds.
     *
     * @private
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new shortable function.
     */
    function shortOut(func) {
      var count = 0,
          lastCalled = 0;

      return function() {
        var stamp = nativeNow(),
            remaining = HOT_SPAN - (stamp - lastCalled);

        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count = 0;
        }
        return func.apply(undefined, arguments);
      };
    }

    /**
     * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @param {number} [size=array.length] The size of `array`.
     * @returns {Array} Returns `array`.
     */
    function shuffleSelf(array, size) {
      var index = -1,
          length = array.length,
          lastIndex = length - 1;

      size = size === undefined ? length : size;
      while (++index < size) {
        var rand = baseRandom(index, lastIndex),
            value = array[rand];

        array[rand] = array[index];
        array[index] = value;
      }
      array.length = size;
      return array;
    }

    /**
     * Converts `string` to a property path array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the property path array.
     */
    var stringToPath = memoizeCapped(function(string) {
      var result = [];
      if (reLeadingDot.test(string)) {
        result.push('');
      }
      string.replace(rePropName, function(match, number, quote, string) {
        result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
      });
      return result;
    });

    /**
     * Converts `value` to a string key if it's not a string or symbol.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {string|symbol} Returns the key.
     */
    function toKey(value) {
      if (typeof value == 'string' || isSymbol(value)) {
        return value;
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    /**
     * Converts `func` to its source code.
     *
     * @private
     * @param {Function} func The function to convert.
     * @returns {string} Returns the source code.
     */
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {}
        try {
          return (func + '');
        } catch (e) {}
      }
      return '';
    }

    /**
     * Updates wrapper `details` based on `bitmask` flags.
     *
     * @private
     * @returns {Array} details The details to modify.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Array} Returns `details`.
     */
    function updateWrapDetails(details, bitmask) {
      arrayEach(wrapFlags, function(pair) {
        var value = '_.' + pair[0];
        if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
          details.push(value);
        }
      });
      return details.sort();
    }

    /**
     * Creates a clone of `wrapper`.
     *
     * @private
     * @param {Object} wrapper The wrapper to clone.
     * @returns {Object} Returns the cloned wrapper.
     */
    function wrapperClone(wrapper) {
      if (wrapper instanceof LazyWrapper) {
        return wrapper.clone();
      }
      var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
      result.__actions__ = copyArray(wrapper.__actions__);
      result.__index__  = wrapper.__index__;
      result.__values__ = wrapper.__values__;
      return result;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of elements split into groups the length of `size`.
     * If `array` can't be split evenly, the final chunk will be the remaining
     * elements.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to process.
     * @param {number} [size=1] The length of each chunk
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the new array of chunks.
     * @example
     *
     * _.chunk(['a', 'b', 'c', 'd'], 2);
     * // => [['a', 'b'], ['c', 'd']]
     *
     * _.chunk(['a', 'b', 'c', 'd'], 3);
     * // => [['a', 'b', 'c'], ['d']]
     */
    function chunk(array, size, guard) {
      if ((guard ? isIterateeCall(array, size, guard) : size === undefined)) {
        size = 1;
      } else {
        size = nativeMax(toInteger(size), 0);
      }
      var length = array == null ? 0 : array.length;
      if (!length || size < 1) {
        return [];
      }
      var index = 0,
          resIndex = 0,
          result = Array(nativeCeil(length / size));

      while (index < length) {
        result[resIndex++] = baseSlice(array, index, (index += size));
      }
      return result;
    }

    /**
     * Creates an array with all falsey values removed. The values `false`, `null`,
     * `0`, `""`, `undefined`, and `NaN` are falsey.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to compact.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.compact([0, 1, false, 2, '', 3]);
     * // => [1, 2, 3]
     */
    function compact(array) {
      var index = -1,
          length = array == null ? 0 : array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index];
        if (value) {
          result[resIndex++] = value;
        }
      }
      return result;
    }

    /**
     * Creates a new array concatenating `array` with any additional arrays
     * and/or values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to concatenate.
     * @param {...*} [values] The values to concatenate.
     * @returns {Array} Returns the new concatenated array.
     * @example
     *
     * var array = [1];
     * var other = _.concat(array, 2, [3], [[4]]);
     *
     * console.log(other);
     * // => [1, 2, 3, [4]]
     *
     * console.log(array);
     * // => [1]
     */
    function concat() {
      var length = arguments.length;
      if (!length) {
        return [];
      }
      var args = Array(length - 1),
          array = arguments[0],
          index = length;

      while (index--) {
        args[index - 1] = arguments[index];
      }
      return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
    }

    /**
     * Creates an array of `array` values not included in the other given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * **Note:** Unlike `_.pullAll`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.without, _.xor
     * @example
     *
     * _.difference([2, 1], [2, 3]);
     * // => [1]
     */
    var difference = baseRest(function(array, values) {
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
        : [];
    });

    /**
     * This method is like `_.difference` except that it accepts `iteratee` which
     * is invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
    var differenceBy = baseRest(function(array, values) {
      var iteratee = last(values);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), getIteratee(iteratee, 2))
        : [];
    });

    /**
     * This method is like `_.difference` except that it accepts `comparator`
     * which is invoked to compare elements of `array` to `values`. The order and
     * references of result values are determined by the first array. The comparator
     * is invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     *
     * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }]
     */
    var differenceWith = baseRest(function(array, values) {
      var comparator = last(values);
      if (isArrayLikeObject(comparator)) {
        comparator = undefined;
      }
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator)
        : [];
    });

    /**
     * Creates a slice of `array` with `n` elements dropped from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.drop([1, 2, 3]);
     * // => [2, 3]
     *
     * _.drop([1, 2, 3], 2);
     * // => [3]
     *
     * _.drop([1, 2, 3], 5);
     * // => []
     *
     * _.drop([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function drop(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      return baseSlice(array, n < 0 ? 0 : n, length);
    }

    /**
     * Creates a slice of `array` with `n` elements dropped from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.dropRight([1, 2, 3]);
     * // => [1, 2]
     *
     * _.dropRight([1, 2, 3], 2);
     * // => [1]
     *
     * _.dropRight([1, 2, 3], 5);
     * // => []
     *
     * _.dropRight([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function dropRight(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the end.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.dropRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropRightWhile(users, ['active', false]);
     * // => objects for ['barney']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropRightWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
    function dropRightWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), true, true)
        : [];
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the beginning.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.dropWhile(users, function(o) { return !o.active; });
     * // => objects for ['pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropWhile(users, ['active', false]);
     * // => objects for ['pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
    function dropWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), true)
        : [];
    }

    /**
     * Fills elements of `array` with `value` from `start` up to, but not
     * including, `end`.
     *
     * **Note:** This method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Array
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.fill(array, 'a');
     * console.log(array);
     * // => ['a', 'a', 'a']
     *
     * _.fill(Array(3), 2);
     * // => [2, 2, 2]
     *
     * _.fill([4, 6, 8, 10], '*', 1, 3);
     * // => [4, '*', '*', 10]
     */
    function fill(array, value, start, end) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
        start = 0;
        end = length;
      }
      return baseFill(array, value, start, end);
    }

    /**
     * This method is like `_.find` except that it returns the index of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.findIndex(users, function(o) { return o.user == 'barney'; });
     * // => 0
     *
     * // The `_.matches` iteratee shorthand.
     * _.findIndex(users, { 'user': 'fred', 'active': false });
     * // => 1
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findIndex(users, ['active', false]);
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.findIndex(users, 'active');
     * // => 2
     */
    function findIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseFindIndex(array, getIteratee(predicate, 3), index);
    }

    /**
     * This method is like `_.findIndex` except that it iterates over elements
     * of `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
     * // => 2
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
     * // => 0
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastIndex(users, ['active', false]);
     * // => 2
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastIndex(users, 'active');
     * // => 0
     */
    function findLastIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = length - 1;
      if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = fromIndex < 0
          ? nativeMax(length + index, 0)
          : nativeMin(index, length - 1);
      }
      return baseFindIndex(array, getIteratee(predicate, 3), index, true);
    }

    /**
     * Flattens `array` a single level deep.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flatten([1, [2, [3, [4]], 5]]);
     * // => [1, 2, [3, [4]], 5]
     */
    function flatten(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, 1) : [];
    }

    /**
     * Recursively flattens `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flattenDeep([1, [2, [3, [4]], 5]]);
     * // => [1, 2, 3, 4, 5]
     */
    function flattenDeep(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, INFINITY) : [];
    }

    /**
     * Recursively flatten `array` up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * var array = [1, [2, [3, [4]], 5]];
     *
     * _.flattenDepth(array, 1);
     * // => [1, 2, [3, [4]], 5]
     *
     * _.flattenDepth(array, 2);
     * // => [1, 2, 3, [4], 5]
     */
    function flattenDepth(array, depth) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      depth = depth === undefined ? 1 : toInteger(depth);
      return baseFlatten(array, depth);
    }

    /**
     * The inverse of `_.toPairs`; this method returns an object composed
     * from key-value `pairs`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} pairs The key-value pairs.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.fromPairs([['a', 1], ['b', 2]]);
     * // => { 'a': 1, 'b': 2 }
     */
    function fromPairs(pairs) {
      var index = -1,
          length = pairs == null ? 0 : pairs.length,
          result = {};

      while (++index < length) {
        var pair = pairs[index];
        result[pair[0]] = pair[1];
      }
      return result;
    }

    /**
     * Gets the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias first
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the first element of `array`.
     * @example
     *
     * _.head([1, 2, 3]);
     * // => 1
     *
     * _.head([]);
     * // => undefined
     */
    function head(array) {
      return (array && array.length) ? array[0] : undefined;
    }

    /**
     * Gets the index at which the first occurrence of `value` is found in `array`
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. If `fromIndex` is negative, it's used as the
     * offset from the end of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.indexOf([1, 2, 1, 2], 2);
     * // => 1
     *
     * // Search from the `fromIndex`.
     * _.indexOf([1, 2, 1, 2], 2, 2);
     * // => 3
     */
    function indexOf(array, value, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseIndexOf(array, value, index);
    }

    /**
     * Gets all but the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.initial([1, 2, 3]);
     * // => [1, 2]
     */
    function initial(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseSlice(array, 0, -1) : [];
    }

    /**
     * Creates an array of unique values that are included in all given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersection([2, 1], [2, 3]);
     * // => [2]
     */
    var intersection = baseRest(function(arrays) {
      var mapped = arrayMap(arrays, castArrayLikeObject);
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped)
        : [];
    });

    /**
     * This method is like `_.intersection` except that it accepts `iteratee`
     * which is invoked for each element of each `arrays` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [2.1]
     *
     * // The `_.property` iteratee shorthand.
     * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }]
     */
    var intersectionBy = baseRest(function(arrays) {
      var iteratee = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      if (iteratee === last(mapped)) {
        iteratee = undefined;
      } else {
        mapped.pop();
      }
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped, getIteratee(iteratee, 2))
        : [];
    });

    /**
     * This method is like `_.intersection` except that it accepts `comparator`
     * which is invoked to compare elements of `arrays`. The order and references
     * of result values are determined by the first array. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.intersectionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }]
     */
    var intersectionWith = baseRest(function(arrays) {
      var comparator = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      comparator = typeof comparator == 'function' ? comparator : undefined;
      if (comparator) {
        mapped.pop();
      }
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped, undefined, comparator)
        : [];
    });

    /**
     * Converts all elements in `array` into a string separated by `separator`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to convert.
     * @param {string} [separator=','] The element separator.
     * @returns {string} Returns the joined string.
     * @example
     *
     * _.join(['a', 'b', 'c'], '~');
     * // => 'a~b~c'
     */
    function join(array, separator) {
      return array == null ? '' : nativeJoin.call(array, separator);
    }

    /**
     * Gets the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the last element of `array`.
     * @example
     *
     * _.last([1, 2, 3]);
     * // => 3
     */
    function last(array) {
      var length = array == null ? 0 : array.length;
      return length ? array[length - 1] : undefined;
    }

    /**
     * This method is like `_.indexOf` except that it iterates over elements of
     * `array` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.lastIndexOf([1, 2, 1, 2], 2);
     * // => 3
     *
     * // Search from the `fromIndex`.
     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
     * // => 1
     */
    function lastIndexOf(array, value, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = length;
      if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
      }
      return value === value
        ? strictLastIndexOf(array, value, index)
        : baseFindIndex(array, baseIsNaN, index, true);
    }

    /**
     * Gets the element at index `n` of `array`. If `n` is negative, the nth
     * element from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.11.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=0] The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     *
     * _.nth(array, 1);
     * // => 'b'
     *
     * _.nth(array, -2);
     * // => 'c';
     */
    function nth(array, n) {
      return (array && array.length) ? baseNth(array, toInteger(n)) : undefined;
    }

    /**
     * Removes all given values from `array` using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
     * to remove elements from an array by predicate.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...*} [values] The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pull(array, 'a', 'c');
     * console.log(array);
     * // => ['b', 'b']
     */
    var pull = baseRest(pullAll);

    /**
     * This method is like `_.pull` except that it accepts an array of values to remove.
     *
     * **Note:** Unlike `_.difference`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pullAll(array, ['a', 'c']);
     * console.log(array);
     * // => ['b', 'b']
     */
    function pullAll(array, values) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values)
        : array;
    }

    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    function pullAllBy(array, values, iteratee) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values, getIteratee(iteratee, 2))
        : array;
    }

    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which
     * is invoked to compare elements of `array` to `values`. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    function pullAllWith(array, values, comparator) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values, undefined, comparator)
        : array;
    }

    /**
     * Removes elements from `array` corresponding to `indexes` and returns an
     * array of removed elements.
     *
     * **Note:** Unlike `_.at`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...(number|number[])} [indexes] The indexes of elements to remove.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     * var pulled = _.pullAt(array, [1, 3]);
     *
     * console.log(array);
     * // => ['a', 'c']
     *
     * console.log(pulled);
     * // => ['b', 'd']
     */
    var pullAt = flatRest(function(array, indexes) {
      var length = array == null ? 0 : array.length,
          result = baseAt(array, indexes);

      basePullAt(array, arrayMap(indexes, function(index) {
        return isIndex(index, length) ? +index : index;
      }).sort(compareAscending));

      return result;
    });

    /**
     * Removes all elements from `array` that `predicate` returns truthy for
     * and returns an array of the removed elements. The predicate is invoked
     * with three arguments: (value, index, array).
     *
     * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
     * to pull elements from an array by value.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = [1, 2, 3, 4];
     * var evens = _.remove(array, function(n) {
     *   return n % 2 == 0;
     * });
     *
     * console.log(array);
     * // => [1, 3]
     *
     * console.log(evens);
     * // => [2, 4]
     */
    function remove(array, predicate) {
      var result = [];
      if (!(array && array.length)) {
        return result;
      }
      var index = -1,
          indexes = [],
          length = array.length;

      predicate = getIteratee(predicate, 3);
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result.push(value);
          indexes.push(index);
        }
      }
      basePullAt(array, indexes);
      return result;
    }

    /**
     * Reverses `array` so that the first element becomes the last, the second
     * element becomes the second to last, and so on.
     *
     * **Note:** This method mutates `array` and is based on
     * [`Array#reverse`](https://mdn.io/Array/reverse).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.reverse(array);
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function reverse(array) {
      return array == null ? array : nativeReverse.call(array);
    }

    /**
     * Creates a slice of `array` from `start` up to, but not including, `end`.
     *
     * **Note:** This method is used instead of
     * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
     * returned.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function slice(array, start, end) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
        start = 0;
        end = length;
      }
      else {
        start = start == null ? 0 : toInteger(start);
        end = end === undefined ? length : toInteger(end);
      }
      return baseSlice(array, start, end);
    }

    /**
     * Uses a binary search to determine the lowest index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedIndex([30, 50], 40);
     * // => 1
     */
    function sortedIndex(array, value) {
      return baseSortedIndex(array, value);
    }

    /**
     * This method is like `_.sortedIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
     * // => 0
     */
    function sortedIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2));
    }

    /**
     * This method is like `_.indexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
     * // => 1
     */
    function sortedIndexOf(array, value) {
      var length = array == null ? 0 : array.length;
      if (length) {
        var index = baseSortedIndex(array, value);
        if (index < length && eq(array[index], value)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.sortedIndex` except that it returns the highest
     * index at which `value` should be inserted into `array` in order to
     * maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedLastIndex([4, 5, 5, 5, 6], 5);
     * // => 4
     */
    function sortedLastIndex(array, value) {
      return baseSortedIndex(array, value, true);
    }

    /**
     * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 1
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
     * // => 1
     */
    function sortedLastIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2), true);
    }

    /**
     * This method is like `_.lastIndexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
     * // => 3
     */
    function sortedLastIndexOf(array, value) {
      var length = array == null ? 0 : array.length;
      if (length) {
        var index = baseSortedIndex(array, value, true) - 1;
        if (eq(array[index], value)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.uniq` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniq([1, 1, 2]);
     * // => [1, 2]
     */
    function sortedUniq(array) {
      return (array && array.length)
        ? baseSortedUniq(array)
        : [];
    }

    /**
     * This method is like `_.uniqBy` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
     * // => [1.1, 2.3]
     */
    function sortedUniqBy(array, iteratee) {
      return (array && array.length)
        ? baseSortedUniq(array, getIteratee(iteratee, 2))
        : [];
    }

    /**
     * Gets all but the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.tail([1, 2, 3]);
     * // => [2, 3]
     */
    function tail(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseSlice(array, 1, length) : [];
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.take([1, 2, 3]);
     * // => [1]
     *
     * _.take([1, 2, 3], 2);
     * // => [1, 2]
     *
     * _.take([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.take([1, 2, 3], 0);
     * // => []
     */
    function take(array, n, guard) {
      if (!(array && array.length)) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.takeRight([1, 2, 3]);
     * // => [3]
     *
     * _.takeRight([1, 2, 3], 2);
     * // => [2, 3]
     *
     * _.takeRight([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.takeRight([1, 2, 3], 0);
     * // => []
     */
    function takeRight(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, n < 0 ? 0 : n, length);
    }

    /**
     * Creates a slice of `array` with elements taken from the end. Elements are
     * taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.takeRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeRightWhile(users, ['active', false]);
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeRightWhile(users, 'active');
     * // => []
     */
    function takeRightWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), false, true)
        : [];
    }

    /**
     * Creates a slice of `array` with elements taken from the beginning. Elements
     * are taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.takeWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeWhile(users, ['active', false]);
     * // => objects for ['barney', 'fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeWhile(users, 'active');
     * // => []
     */
    function takeWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3))
        : [];
    }

    /**
     * Creates an array of unique values, in order, from all given arrays using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.union([2], [1, 2]);
     * // => [2, 1]
     */
    var union = baseRest(function(arrays) {
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
    });

    /**
     * This method is like `_.union` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which uniqueness is computed. Result values are chosen from the first
     * array in which the value occurs. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.unionBy([2.1], [1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    var unionBy = baseRest(function(arrays) {
      var iteratee = last(arrays);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee, 2));
    });

    /**
     * This method is like `_.union` except that it accepts `comparator` which
     * is invoked to compare elements of `arrays`. Result values are chosen from
     * the first array in which the value occurs. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.unionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    var unionWith = baseRest(function(arrays) {
      var comparator = last(arrays);
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined, comparator);
    });

    /**
     * Creates a duplicate-free version of an array, using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons, in which only the first occurrence of each element
     * is kept. The order of result values is determined by the order they occur
     * in the array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniq([2, 1, 2]);
     * // => [2, 1]
     */
    function uniq(array) {
      return (array && array.length) ? baseUniq(array) : [];
    }

    /**
     * This method is like `_.uniq` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * uniqueness is computed. The order of result values is determined by the
     * order they occur in the array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    function uniqBy(array, iteratee) {
      return (array && array.length) ? baseUniq(array, getIteratee(iteratee, 2)) : [];
    }

    /**
     * This method is like `_.uniq` except that it accepts `comparator` which
     * is invoked to compare elements of `array`. The order of result values is
     * determined by the order they occur in the array.The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.uniqWith(objects, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
     */
    function uniqWith(array, comparator) {
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return (array && array.length) ? baseUniq(array, undefined, comparator) : [];
    }

    /**
     * This method is like `_.zip` except that it accepts an array of grouped
     * elements and creates an array regrouping the elements to their pre-zip
     * configuration.
     *
     * @static
     * @memberOf _
     * @since 1.2.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     *
     * _.unzip(zipped);
     * // => [['a', 'b'], [1, 2], [true, false]]
     */
    function unzip(array) {
      if (!(array && array.length)) {
        return [];
      }
      var length = 0;
      array = arrayFilter(array, function(group) {
        if (isArrayLikeObject(group)) {
          length = nativeMax(group.length, length);
          return true;
        }
      });
      return baseTimes(length, function(index) {
        return arrayMap(array, baseProperty(index));
      });
    }

    /**
     * This method is like `_.unzip` except that it accepts `iteratee` to specify
     * how regrouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  regrouped values.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
     * // => [[1, 10, 100], [2, 20, 200]]
     *
     * _.unzipWith(zipped, _.add);
     * // => [3, 30, 300]
     */
    function unzipWith(array, iteratee) {
      if (!(array && array.length)) {
        return [];
      }
      var result = unzip(array);
      if (iteratee == null) {
        return result;
      }
      return arrayMap(result, function(group) {
        return apply(iteratee, undefined, group);
      });
    }

    /**
     * Creates an array excluding all given values using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.pull`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...*} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.xor
     * @example
     *
     * _.without([2, 1, 2, 3], 1, 2);
     * // => [3]
     */
    var without = baseRest(function(array, values) {
      return isArrayLikeObject(array)
        ? baseDifference(array, values)
        : [];
    });

    /**
     * Creates an array of unique values that is the
     * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
     * of the given arrays. The order of result values is determined by the order
     * they occur in the arrays.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.without
     * @example
     *
     * _.xor([2, 1], [2, 3]);
     * // => [1, 3]
     */
    var xor = baseRest(function(arrays) {
      return baseXor(arrayFilter(arrays, isArrayLikeObject));
    });

    /**
     * This method is like `_.xor` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which by which they're compared. The order of result values is determined
     * by the order they occur in the arrays. The iteratee is invoked with one
     * argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2, 3.4]
     *
     * // The `_.property` iteratee shorthand.
     * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
    var xorBy = baseRest(function(arrays) {
      var iteratee = last(arrays);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee, 2));
    });

    /**
     * This method is like `_.xor` except that it accepts `comparator` which is
     * invoked to compare elements of `arrays`. The order of result values is
     * determined by the order they occur in the arrays. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.xorWith(objects, others, _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    var xorWith = baseRest(function(arrays) {
      var comparator = last(arrays);
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator);
    });

    /**
     * Creates an array of grouped elements, the first of which contains the
     * first elements of the given arrays, the second of which contains the
     * second elements of the given arrays, and so on.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     */
    var zip = baseRest(unzip);

    /**
     * This method is like `_.fromPairs` except that it accepts two arrays,
     * one of property identifiers and one of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 0.4.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObject(['a', 'b'], [1, 2]);
     * // => { 'a': 1, 'b': 2 }
     */
    function zipObject(props, values) {
      return baseZipObject(props || [], values || [], assignValue);
    }

    /**
     * This method is like `_.zipObject` except that it supports property paths.
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
     * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
     */
    function zipObjectDeep(props, values) {
      return baseZipObject(props || [], values || [], baseSet);
    }

    /**
     * This method is like `_.zip` except that it accepts `iteratee` to specify
     * how grouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  grouped values.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
     *   return a + b + c;
     * });
     * // => [111, 222]
     */
    var zipWith = baseRest(function(arrays) {
      var length = arrays.length,
          iteratee = length > 1 ? arrays[length - 1] : undefined;

      iteratee = typeof iteratee == 'function' ? (arrays.pop(), iteratee) : undefined;
      return unzipWith(arrays, iteratee);
    });

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` wrapper instance that wraps `value` with explicit method
     * chain sequences enabled. The result of such sequences must be unwrapped
     * with `_#value`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Seq
     * @param {*} value The value to wrap.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36 },
     *   { 'user': 'fred',    'age': 40 },
     *   { 'user': 'pebbles', 'age': 1 }
     * ];
     *
     * var youngest = _
     *   .chain(users)
     *   .sortBy('age')
     *   .map(function(o) {
     *     return o.user + ' is ' + o.age;
     *   })
     *   .head()
     *   .value();
     * // => 'pebbles is 1'
     */
    function chain(value) {
      var result = lodash(value);
      result.__chain__ = true;
      return result;
    }

    /**
     * This method invokes `interceptor` and returns `value`. The interceptor
     * is invoked with one argument; (value). The purpose of this method is to
     * "tap into" a method chain sequence in order to modify intermediate results.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns `value`.
     * @example
     *
     * _([1, 2, 3])
     *  .tap(function(array) {
     *    // Mutate input array.
     *    array.pop();
     *  })
     *  .reverse()
     *  .value();
     * // => [2, 1]
     */
    function tap(value, interceptor) {
      interceptor(value);
      return value;
    }

    /**
     * This method is like `_.tap` except that it returns the result of `interceptor`.
     * The purpose of this method is to "pass thru" values replacing intermediate
     * results in a method chain sequence.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns the result of `interceptor`.
     * @example
     *
     * _('  abc  ')
     *  .chain()
     *  .trim()
     *  .thru(function(value) {
     *    return [value];
     *  })
     *  .value();
     * // => ['abc']
     */
    function thru(value, interceptor) {
      return interceptor(value);
    }

    /**
     * This method is the wrapper version of `_.at`.
     *
     * @name at
     * @memberOf _
     * @since 1.0.0
     * @category Seq
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _(object).at(['a[0].b.c', 'a[1]']).value();
     * // => [3, 4]
     */
    var wrapperAt = flatRest(function(paths) {
      var length = paths.length,
          start = length ? paths[0] : 0,
          value = this.__wrapped__,
          interceptor = function(object) { return baseAt(object, paths); };

      if (length > 1 || this.__actions__.length ||
          !(value instanceof LazyWrapper) || !isIndex(start)) {
        return this.thru(interceptor);
      }
      value = value.slice(start, +start + (length ? 1 : 0));
      value.__actions__.push({
        'func': thru,
        'args': [interceptor],
        'thisArg': undefined
      });
      return new LodashWrapper(value, this.__chain__).thru(function(array) {
        if (length && !array.length) {
          array.push(undefined);
        }
        return array;
      });
    });

    /**
     * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
     *
     * @name chain
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * // A sequence without explicit chaining.
     * _(users).head();
     * // => { 'user': 'barney', 'age': 36 }
     *
     * // A sequence with explicit chaining.
     * _(users)
     *   .chain()
     *   .head()
     *   .pick('user')
     *   .value();
     * // => { 'user': 'barney' }
     */
    function wrapperChain() {
      return chain(this);
    }

    /**
     * Executes the chain sequence and returns the wrapped result.
     *
     * @name commit
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2];
     * var wrapped = _(array).push(3);
     *
     * console.log(array);
     * // => [1, 2]
     *
     * wrapped = wrapped.commit();
     * console.log(array);
     * // => [1, 2, 3]
     *
     * wrapped.last();
     * // => 3
     *
     * console.log(array);
     * // => [1, 2, 3]
     */
    function wrapperCommit() {
      return new LodashWrapper(this.value(), this.__chain__);
    }

    /**
     * Gets the next value on a wrapped object following the
     * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
     *
     * @name next
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the next iterator value.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 1 }
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 2 }
     *
     * wrapped.next();
     * // => { 'done': true, 'value': undefined }
     */
    function wrapperNext() {
      if (this.__values__ === undefined) {
        this.__values__ = toArray(this.value());
      }
      var done = this.__index__ >= this.__values__.length,
          value = done ? undefined : this.__values__[this.__index__++];

      return { 'done': done, 'value': value };
    }

    /**
     * Enables the wrapper to be iterable.
     *
     * @name Symbol.iterator
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the wrapper object.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped[Symbol.iterator]() === wrapped;
     * // => true
     *
     * Array.from(wrapped);
     * // => [1, 2]
     */
    function wrapperToIterator() {
      return this;
    }

    /**
     * Creates a clone of the chain sequence planting `value` as the wrapped value.
     *
     * @name plant
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @param {*} value The value to plant.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2]).map(square);
     * var other = wrapped.plant([3, 4]);
     *
     * other.value();
     * // => [9, 16]
     *
     * wrapped.value();
     * // => [1, 4]
     */
    function wrapperPlant(value) {
      var result,
          parent = this;

      while (parent instanceof baseLodash) {
        var clone = wrapperClone(parent);
        clone.__index__ = 0;
        clone.__values__ = undefined;
        if (result) {
          previous.__wrapped__ = clone;
        } else {
          result = clone;
        }
        var previous = clone;
        parent = parent.__wrapped__;
      }
      previous.__wrapped__ = value;
      return result;
    }

    /**
     * This method is the wrapper version of `_.reverse`.
     *
     * **Note:** This method mutates the wrapped array.
     *
     * @name reverse
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _(array).reverse().value()
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function wrapperReverse() {
      var value = this.__wrapped__;
      if (value instanceof LazyWrapper) {
        var wrapped = value;
        if (this.__actions__.length) {
          wrapped = new LazyWrapper(this);
        }
        wrapped = wrapped.reverse();
        wrapped.__actions__.push({
          'func': thru,
          'args': [reverse],
          'thisArg': undefined
        });
        return new LodashWrapper(wrapped, this.__chain__);
      }
      return this.thru(reverse);
    }

    /**
     * Executes the chain sequence to resolve the unwrapped value.
     *
     * @name value
     * @memberOf _
     * @since 0.1.0
     * @alias toJSON, valueOf
     * @category Seq
     * @returns {*} Returns the resolved unwrapped value.
     * @example
     *
     * _([1, 2, 3]).value();
     * // => [1, 2, 3]
     */
    function wrapperValue() {
      return baseWrapperValue(this.__wrapped__, this.__actions__);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the number of times the key was returned by `iteratee`. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.countBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': 1, '6': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.countBy(['one', 'two', 'three'], 'length');
     * // => { '3': 2, '5': 1 }
     */
    var countBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        ++result[key];
      } else {
        baseAssignValue(result, key, 1);
      }
    });

    /**
     * Checks if `predicate` returns truthy for **all** elements of `collection`.
     * Iteration is stopped once `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * **Note:** This method returns `true` for
     * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
     * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
     * elements of empty collections.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`.
     * @example
     *
     * _.every([true, 1, null, 'yes'], Boolean);
     * // => false
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.every(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.every(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.every(users, 'active');
     * // => false
     */
    function every(collection, predicate, guard) {
      var func = isArray(collection) ? arrayEvery : baseEvery;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined;
      }
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Iterates over elements of `collection`, returning an array of all elements
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * **Note:** Unlike `_.remove`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.reject
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * _.filter(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, { 'age': 36, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.filter(users, 'active');
     * // => objects for ['barney']
     */
    function filter(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Iterates over elements of `collection`, returning the first element
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': true },
     *   { 'user': 'fred',    'age': 40, 'active': false },
     *   { 'user': 'pebbles', 'age': 1,  'active': true }
     * ];
     *
     * _.find(users, function(o) { return o.age < 40; });
     * // => object for 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.find(users, { 'age': 1, 'active': true });
     * // => object for 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.find(users, ['active', false]);
     * // => object for 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.find(users, 'active');
     * // => object for 'barney'
     */
    var find = createFind(findIndex);

    /**
     * This method is like `_.find` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=collection.length-1] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * _.findLast([1, 2, 3, 4], function(n) {
     *   return n % 2 == 1;
     * });
     * // => 3
     */
    var findLast = createFind(findLastIndex);

    /**
     * Creates a flattened array of values by running each element in `collection`
     * thru `iteratee` and flattening the mapped results. The iteratee is invoked
     * with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [n, n];
     * }
     *
     * _.flatMap([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
    function flatMap(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), 1);
    }

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDeep([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
    function flatMapDeep(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), INFINITY);
    }

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDepth([1, 2], duplicate, 2);
     * // => [[1, 1], [2, 2]]
     */
    function flatMapDepth(collection, iteratee, depth) {
      depth = depth === undefined ? 1 : toInteger(depth);
      return baseFlatten(map(collection, iteratee), depth);
    }

    /**
     * Iterates over elements of `collection` and invokes `iteratee` for each element.
     * The iteratee is invoked with three arguments: (value, index|key, collection).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * **Note:** As with other "Collections" methods, objects with a "length"
     * property are iterated like arrays. To avoid this behavior use `_.forIn`
     * or `_.forOwn` for object iteration.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias each
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEachRight
     * @example
     *
     * _.forEach([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `1` then `2`.
     *
     * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
    function forEach(collection, iteratee) {
      var func = isArray(collection) ? arrayEach : baseEach;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.forEach` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @alias eachRight
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEach
     * @example
     *
     * _.forEachRight([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `2` then `1`.
     */
    function forEachRight(collection, iteratee) {
      var func = isArray(collection) ? arrayEachRight : baseEachRight;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The order of grouped values
     * is determined by the order they occur in `collection`. The corresponding
     * value of each key is an array of elements responsible for generating the
     * key. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.groupBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': [4.2], '6': [6.1, 6.3] }
     *
     * // The `_.property` iteratee shorthand.
     * _.groupBy(['one', 'two', 'three'], 'length');
     * // => { '3': ['one', 'two'], '5': ['three'] }
     */
    var groupBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        result[key].push(value);
      } else {
        baseAssignValue(result, key, [value]);
      }
    });

    /**
     * Checks if `value` is in `collection`. If `collection` is a string, it's
     * checked for a substring of `value`, otherwise
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * is used for equality comparisons. If `fromIndex` is negative, it's used as
     * the offset from the end of `collection`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {boolean} Returns `true` if `value` is found, else `false`.
     * @example
     *
     * _.includes([1, 2, 3], 1);
     * // => true
     *
     * _.includes([1, 2, 3], 1, 2);
     * // => false
     *
     * _.includes({ 'a': 1, 'b': 2 }, 1);
     * // => true
     *
     * _.includes('abcd', 'bc');
     * // => true
     */
    function includes(collection, value, fromIndex, guard) {
      collection = isArrayLike(collection) ? collection : values(collection);
      fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

      var length = collection.length;
      if (fromIndex < 0) {
        fromIndex = nativeMax(length + fromIndex, 0);
      }
      return isString(collection)
        ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
        : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
    }

    /**
     * Invokes the method at `path` of each element in `collection`, returning
     * an array of the results of each invoked method. Any additional arguments
     * are provided to each invoked method. If `path` is a function, it's invoked
     * for, and `this` bound to, each element in `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array|Function|string} path The path of the method to invoke or
     *  the function invoked per iteration.
     * @param {...*} [args] The arguments to invoke each method with.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
     * // => [[1, 5, 7], [1, 2, 3]]
     *
     * _.invokeMap([123, 456], String.prototype.split, '');
     * // => [['1', '2', '3'], ['4', '5', '6']]
     */
    var invokeMap = baseRest(function(collection, path, args) {
      var index = -1,
          isFunc = typeof path == 'function',
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value) {
        result[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
      });
      return result;
    });

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the last element responsible for generating the key. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * var array = [
     *   { 'dir': 'left', 'code': 97 },
     *   { 'dir': 'right', 'code': 100 }
     * ];
     *
     * _.keyBy(array, function(o) {
     *   return String.fromCharCode(o.code);
     * });
     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
     *
     * _.keyBy(array, 'dir');
     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
     */
    var keyBy = createAggregator(function(result, value, key) {
      baseAssignValue(result, key, value);
    });

    /**
     * Creates an array of values by running each element in `collection` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
     *
     * The guarded methods are:
     * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
     * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
     * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
     * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * _.map([4, 8], square);
     * // => [16, 64]
     *
     * _.map({ 'a': 4, 'b': 8 }, square);
     * // => [16, 64] (iteration order is not guaranteed)
     *
     * var users = [
     *   { 'user': 'barney' },
     *   { 'user': 'fred' }
     * ];
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, 'user');
     * // => ['barney', 'fred']
     */
    function map(collection, iteratee) {
      var func = isArray(collection) ? arrayMap : baseMap;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.sortBy` except that it allows specifying the sort
     * orders of the iteratees to sort by. If `orders` is unspecified, all values
     * are sorted in ascending order. Otherwise, specify an order of "desc" for
     * descending or "asc" for ascending sort order of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @param {string[]} [orders] The sort orders of `iteratees`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 34 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 36 }
     * ];
     *
     * // Sort by `user` in ascending order and by `age` in descending order.
     * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     */
    function orderBy(collection, iteratees, orders, guard) {
      if (collection == null) {
        return [];
      }
      if (!isArray(iteratees)) {
        iteratees = iteratees == null ? [] : [iteratees];
      }
      orders = guard ? undefined : orders;
      if (!isArray(orders)) {
        orders = orders == null ? [] : [orders];
      }
      return baseOrderBy(collection, iteratees, orders);
    }

    /**
     * Creates an array of elements split into two groups, the first of which
     * contains elements `predicate` returns truthy for, the second of which
     * contains elements `predicate` returns falsey for. The predicate is
     * invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of grouped elements.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': false },
     *   { 'user': 'fred',    'age': 40, 'active': true },
     *   { 'user': 'pebbles', 'age': 1,  'active': false }
     * ];
     *
     * _.partition(users, function(o) { return o.active; });
     * // => objects for [['fred'], ['barney', 'pebbles']]
     *
     * // The `_.matches` iteratee shorthand.
     * _.partition(users, { 'age': 1, 'active': false });
     * // => objects for [['pebbles'], ['barney', 'fred']]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.partition(users, ['active', false]);
     * // => objects for [['barney', 'pebbles'], ['fred']]
     *
     * // The `_.property` iteratee shorthand.
     * _.partition(users, 'active');
     * // => objects for [['fred'], ['barney', 'pebbles']]
     */
    var partition = createAggregator(function(result, value, key) {
      result[key ? 0 : 1].push(value);
    }, function() { return [[], []]; });

    /**
     * Reduces `collection` to a value which is the accumulated result of running
     * each element in `collection` thru `iteratee`, where each successive
     * invocation is supplied the return value of the previous. If `accumulator`
     * is not given, the first element of `collection` is used as the initial
     * value. The iteratee is invoked with four arguments:
     * (accumulator, value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.reduce`, `_.reduceRight`, and `_.transform`.
     *
     * The guarded methods are:
     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
     * and `sortBy`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduceRight
     * @example
     *
     * _.reduce([1, 2], function(sum, n) {
     *   return sum + n;
     * }, 0);
     * // => 3
     *
     * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     *   return result;
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
     */
    function reduce(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduce : baseReduce,
          initAccum = arguments.length < 3;

      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEach);
    }

    /**
     * This method is like `_.reduce` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduce
     * @example
     *
     * var array = [[0, 1], [2, 3], [4, 5]];
     *
     * _.reduceRight(array, function(flattened, other) {
     *   return flattened.concat(other);
     * }, []);
     * // => [4, 5, 2, 3, 0, 1]
     */
    function reduceRight(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduceRight : baseReduce,
          initAccum = arguments.length < 3;

      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEachRight);
    }

    /**
     * The opposite of `_.filter`; this method returns the elements of `collection`
     * that `predicate` does **not** return truthy for.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.filter
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': true }
     * ];
     *
     * _.reject(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.reject(users, { 'age': 40, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.reject(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.reject(users, 'active');
     * // => objects for ['barney']
     */
    function reject(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, negate(getIteratee(predicate, 3)));
    }

    /**
     * Gets a random element from `collection`.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     * @example
     *
     * _.sample([1, 2, 3, 4]);
     * // => 2
     */
    function sample(collection) {
      var func = isArray(collection) ? arraySample : baseSample;
      return func(collection);
    }

    /**
     * Gets `n` random elements at unique keys from `collection` up to the
     * size of `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @param {number} [n=1] The number of elements to sample.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the random elements.
     * @example
     *
     * _.sampleSize([1, 2, 3], 2);
     * // => [3, 1]
     *
     * _.sampleSize([1, 2, 3], 4);
     * // => [2, 3, 1]
     */
    function sampleSize(collection, n, guard) {
      if ((guard ? isIterateeCall(collection, n, guard) : n === undefined)) {
        n = 1;
      } else {
        n = toInteger(n);
      }
      var func = isArray(collection) ? arraySampleSize : baseSampleSize;
      return func(collection, n);
    }

    /**
     * Creates an array of shuffled values, using a version of the
     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     * @example
     *
     * _.shuffle([1, 2, 3, 4]);
     * // => [4, 1, 3, 2]
     */
    function shuffle(collection) {
      var func = isArray(collection) ? arrayShuffle : baseShuffle;
      return func(collection);
    }

    /**
     * Gets the size of `collection` by returning its length for array-like
     * values or the number of own enumerable string keyed properties for objects.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @returns {number} Returns the collection size.
     * @example
     *
     * _.size([1, 2, 3]);
     * // => 3
     *
     * _.size({ 'a': 1, 'b': 2 });
     * // => 2
     *
     * _.size('pebbles');
     * // => 7
     */
    function size(collection) {
      if (collection == null) {
        return 0;
      }
      if (isArrayLike(collection)) {
        return isString(collection) ? stringSize(collection) : collection.length;
      }
      var tag = getTag(collection);
      if (tag == mapTag || tag == setTag) {
        return collection.size;
      }
      return baseKeys(collection).length;
    }

    /**
     * Checks if `predicate` returns truthy for **any** element of `collection`.
     * Iteration is stopped once `predicate` returns truthy. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     * @example
     *
     * _.some([null, 0, 'yes', false], Boolean);
     * // => true
     *
     * var users = [
     *   { 'user': 'barney', 'active': true },
     *   { 'user': 'fred',   'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.some(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.some(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.some(users, 'active');
     * // => true
     */
    function some(collection, predicate, guard) {
      var func = isArray(collection) ? arraySome : baseSome;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined;
      }
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Creates an array of elements, sorted in ascending order by the results of
     * running each element in a collection thru each iteratee. This method
     * performs a stable sort, that is, it preserves the original sort order of
     * equal elements. The iteratees are invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 34 }
     * ];
     *
     * _.sortBy(users, [function(o) { return o.user; }]);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     *
     * _.sortBy(users, ['user', 'age']);
     * // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
     */
    var sortBy = baseRest(function(collection, iteratees) {
      if (collection == null) {
        return [];
      }
      var length = iteratees.length;
      if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
        iteratees = [];
      } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
        iteratees = [iteratees[0]];
      }
      return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
    });

    /*------------------------------------------------------------------------*/

    /**
     * Gets the timestamp of the number of milliseconds that have elapsed since
     * the Unix epoch (1 January 1970 00:00:00 UTC).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Date
     * @returns {number} Returns the timestamp.
     * @example
     *
     * _.defer(function(stamp) {
     *   console.log(_.now() - stamp);
     * }, _.now());
     * // => Logs the number of milliseconds it took for the deferred invocation.
     */
    var now = ctxNow || function() {
      return root.Date.now();
    };

    /*------------------------------------------------------------------------*/

    /**
     * The opposite of `_.before`; this method creates a function that invokes
     * `func` once it's called `n` or more times.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {number} n The number of calls before `func` is invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var saves = ['profile', 'settings'];
     *
     * var done = _.after(saves.length, function() {
     *   console.log('done saving!');
     * });
     *
     * _.forEach(saves, function(type) {
     *   asyncSave({ 'type': type, 'complete': done });
     * });
     * // => Logs 'done saving!' after the two async saves have completed.
     */
    function after(n, func) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n < 1) {
          return func.apply(this, arguments);
        }
      };
    }

    /**
     * Creates a function that invokes `func`, with up to `n` arguments,
     * ignoring any additional arguments.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @param {number} [n=func.length] The arity cap.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
     * // => [6, 8, 10]
     */
    function ary(func, n, guard) {
      n = guard ? undefined : n;
      n = (func && n == null) ? func.length : n;
      return createWrap(func, WRAP_ARY_FLAG, undefined, undefined, undefined, undefined, n);
    }

    /**
     * Creates a function that invokes `func`, with the `this` binding and arguments
     * of the created function, while it's called less than `n` times. Subsequent
     * calls to the created function return the result of the last `func` invocation.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {number} n The number of calls at which `func` is no longer invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * jQuery(element).on('click', _.before(5, addContactToList));
     * // => Allows adding up to 4 contacts to the list.
     */
    function before(n, func) {
      var result;
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n > 0) {
          result = func.apply(this, arguments);
        }
        if (n <= 1) {
          func = undefined;
        }
        return result;
      };
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of `thisArg`
     * and `partials` prepended to the arguments it receives.
     *
     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for partially applied arguments.
     *
     * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
     * property of bound functions.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to bind.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * function greet(greeting, punctuation) {
     *   return greeting + ' ' + this.user + punctuation;
     * }
     *
     * var object = { 'user': 'fred' };
     *
     * var bound = _.bind(greet, object, 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bind(greet, object, _, '!');
     * bound('hi');
     * // => 'hi fred!'
     */
    var bind = baseRest(function(func, thisArg, partials) {
      var bitmask = WRAP_BIND_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bind));
        bitmask |= WRAP_PARTIAL_FLAG;
      }
      return createWrap(func, bitmask, thisArg, partials, holders);
    });

    /**
     * Creates a function that invokes the method at `object[key]` with `partials`
     * prepended to the arguments it receives.
     *
     * This method differs from `_.bind` by allowing bound functions to reference
     * methods that may be redefined or don't yet exist. See
     * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
     * for more details.
     *
     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Function
     * @param {Object} object The object to invoke the method on.
     * @param {string} key The key of the method.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * var object = {
     *   'user': 'fred',
     *   'greet': function(greeting, punctuation) {
     *     return greeting + ' ' + this.user + punctuation;
     *   }
     * };
     *
     * var bound = _.bindKey(object, 'greet', 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * object.greet = function(greeting, punctuation) {
     *   return greeting + 'ya ' + this.user + punctuation;
     * };
     *
     * bound('!');
     * // => 'hiya fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bindKey(object, 'greet', _, '!');
     * bound('hi');
     * // => 'hiya fred!'
     */
    var bindKey = baseRest(function(object, key, partials) {
      var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bindKey));
        bitmask |= WRAP_PARTIAL_FLAG;
      }
      return createWrap(key, bitmask, object, partials, holders);
    });

    /**
     * Creates a function that accepts arguments of `func` and either invokes
     * `func` returning its result, if at least `arity` number of arguments have
     * been provided, or returns a function that accepts the remaining `func`
     * arguments, and so on. The arity of `func` may be specified if `func.length`
     * is not sufficient.
     *
     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curry(abc);
     *
     * curried(1)(2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(1)(_, 3)(2);
     * // => [1, 2, 3]
     */
    function curry(func, arity, guard) {
      arity = guard ? undefined : arity;
      var result = createWrap(func, WRAP_CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
      result.placeholder = curry.placeholder;
      return result;
    }

    /**
     * This method is like `_.curry` except that arguments are applied to `func`
     * in the manner of `_.partialRight` instead of `_.partial`.
     *
     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curryRight(abc);
     *
     * curried(3)(2)(1);
     * // => [1, 2, 3]
     *
     * curried(2, 3)(1);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(3)(1, _)(2);
     * // => [1, 2, 3]
     */
    function curryRight(func, arity, guard) {
      arity = guard ? undefined : arity;
      var result = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
      result.placeholder = curryRight.placeholder;
      return result;
    }

    /**
     * Creates a debounced function that delays invoking `func` until after `wait`
     * milliseconds have elapsed since the last time the debounced function was
     * invoked. The debounced function comes with a `cancel` method to cancel
     * delayed `func` invocations and a `flush` method to immediately invoke them.
     * Provide `options` to indicate whether `func` should be invoked on the
     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
     * with the last arguments provided to the debounced function. Subsequent
     * calls to the debounced function return the result of the last `func`
     * invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the debounced function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.debounce` and `_.throttle`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to debounce.
     * @param {number} [wait=0] The number of milliseconds to delay.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=false]
     *  Specify invoking on the leading edge of the timeout.
     * @param {number} [options.maxWait]
     *  The maximum time `func` is allowed to be delayed before it's invoked.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new debounced function.
     * @example
     *
     * // Avoid costly calculations while the window size is in flux.
     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
     *
     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
     * jQuery(element).on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * }));
     *
     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
     * var source = new EventSource('/stream');
     * jQuery(source).on('message', debounced);
     *
     * // Cancel the trailing debounced invocation.
     * jQuery(window).on('popstate', debounced.cancel);
     */
    function debounce(func, wait, options) {
      var lastArgs,
          lastThis,
          maxWait,
          result,
          timerId,
          lastCallTime,
          lastInvokeTime = 0,
          leading = false,
          maxing = false,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }

      function invokeFunc(time) {
        var args = lastArgs,
            thisArg = lastThis;

        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }

      function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
      }

      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime,
            result = wait - timeSinceLastCall;

        return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
      }

      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime;

        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
          (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
      }

      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
      }

      function trailingEdge(time) {
        timerId = undefined;

        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = undefined;
        return result;
      }

      function cancel() {
        if (timerId !== undefined) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
      }

      function flush() {
        return timerId === undefined ? result : trailingEdge(now());
      }

      function debounced() {
        var time = now(),
            isInvoking = shouldInvoke(time);

        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;

        if (isInvoking) {
          if (timerId === undefined) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            // Handle invocations in a tight loop.
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === undefined) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }

    /**
     * Defers invoking the `func` until the current call stack has cleared. Any
     * additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to defer.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.defer(function(text) {
     *   console.log(text);
     * }, 'deferred');
     * // => Logs 'deferred' after one millisecond.
     */
    var defer = baseRest(function(func, args) {
      return baseDelay(func, 1, args);
    });

    /**
     * Invokes `func` after `wait` milliseconds. Any additional arguments are
     * provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.delay(function(text) {
     *   console.log(text);
     * }, 1000, 'later');
     * // => Logs 'later' after one second.
     */
    var delay = baseRest(function(func, wait, args) {
      return baseDelay(func, toNumber(wait) || 0, args);
    });

    /**
     * Creates a function that invokes `func` with arguments reversed.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to flip arguments for.
     * @returns {Function} Returns the new flipped function.
     * @example
     *
     * var flipped = _.flip(function() {
     *   return _.toArray(arguments);
     * });
     *
     * flipped('a', 'b', 'c', 'd');
     * // => ['d', 'c', 'b', 'a']
     */
    function flip(func) {
      return createWrap(func, WRAP_FLIP_FLAG);
    }

    /**
     * Creates a function that memoizes the result of `func`. If `resolver` is
     * provided, it determines the cache key for storing the result based on the
     * arguments provided to the memoized function. By default, the first argument
     * provided to the memoized function is used as the map cache key. The `func`
     * is invoked with the `this` binding of the memoized function.
     *
     * **Note:** The cache is exposed as the `cache` property on the memoized
     * function. Its creation may be customized by replacing the `_.memoize.Cache`
     * constructor with one whose instances implement the
     * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
     * method interface of `clear`, `delete`, `get`, `has`, and `set`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to have its output memoized.
     * @param {Function} [resolver] The function to resolve the cache key.
     * @returns {Function} Returns the new memoized function.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     * var other = { 'c': 3, 'd': 4 };
     *
     * var values = _.memoize(_.values);
     * values(object);
     * // => [1, 2]
     *
     * values(other);
     * // => [3, 4]
     *
     * object.a = 2;
     * values(object);
     * // => [1, 2]
     *
     * // Modify the result cache.
     * values.cache.set(object, ['a', 'b']);
     * values(object);
     * // => ['a', 'b']
     *
     * // Replace `_.memoize.Cache`.
     * _.memoize.Cache = WeakMap;
     */
    function memoize(func, resolver) {
      if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments,
            key = resolver ? resolver.apply(this, args) : args[0],
            cache = memoized.cache;

        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache);
      return memoized;
    }

    // Expose `MapCache`.
    memoize.Cache = MapCache;

    /**
     * Creates a function that negates the result of the predicate `func`. The
     * `func` predicate is invoked with the `this` binding and arguments of the
     * created function.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} predicate The predicate to negate.
     * @returns {Function} Returns the new negated function.
     * @example
     *
     * function isEven(n) {
     *   return n % 2 == 0;
     * }
     *
     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
     * // => [1, 3, 5]
     */
    function negate(predicate) {
      if (typeof predicate != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return function() {
        var args = arguments;
        switch (args.length) {
          case 0: return !predicate.call(this);
          case 1: return !predicate.call(this, args[0]);
          case 2: return !predicate.call(this, args[0], args[1]);
          case 3: return !predicate.call(this, args[0], args[1], args[2]);
        }
        return !predicate.apply(this, args);
      };
    }

    /**
     * Creates a function that is restricted to invoking `func` once. Repeat calls
     * to the function return the value of the first invocation. The `func` is
     * invoked with the `this` binding and arguments of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var initialize = _.once(createApplication);
     * initialize();
     * initialize();
     * // => `createApplication` is invoked once
     */
    function once(func) {
      return before(2, func);
    }

    /**
     * Creates a function that invokes `func` with its arguments transformed.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Function
     * @param {Function} func The function to wrap.
     * @param {...(Function|Function[])} [transforms=[_.identity]]
     *  The argument transforms.
     * @returns {Function} Returns the new function.
     * @example
     *
     * function doubled(n) {
     *   return n * 2;
     * }
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var func = _.overArgs(function(x, y) {
     *   return [x, y];
     * }, [square, doubled]);
     *
     * func(9, 3);
     * // => [81, 6]
     *
     * func(10, 5);
     * // => [100, 10]
     */
    var overArgs = castRest(function(func, transforms) {
      transforms = (transforms.length == 1 && isArray(transforms[0]))
        ? arrayMap(transforms[0], baseUnary(getIteratee()))
        : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));

      var funcsLength = transforms.length;
      return baseRest(function(args) {
        var index = -1,
            length = nativeMin(args.length, funcsLength);

        while (++index < length) {
          args[index] = transforms[index].call(this, args[index]);
        }
        return apply(func, this, args);
      });
    });

    /**
     * Creates a function that invokes `func` with `partials` prepended to the
     * arguments it receives. This method is like `_.bind` except it does **not**
     * alter the `this` binding.
     *
     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 0.2.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var sayHelloTo = _.partial(greet, 'hello');
     * sayHelloTo('fred');
     * // => 'hello fred'
     *
     * // Partially applied with placeholders.
     * var greetFred = _.partial(greet, _, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     */
    var partial = baseRest(function(func, partials) {
      var holders = replaceHolders(partials, getHolder(partial));
      return createWrap(func, WRAP_PARTIAL_FLAG, undefined, partials, holders);
    });

    /**
     * This method is like `_.partial` except that partially applied arguments
     * are appended to the arguments it receives.
     *
     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var greetFred = _.partialRight(greet, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     *
     * // Partially applied with placeholders.
     * var sayHelloTo = _.partialRight(greet, 'hello', _);
     * sayHelloTo('fred');
     * // => 'hello fred'
     */
    var partialRight = baseRest(function(func, partials) {
      var holders = replaceHolders(partials, getHolder(partialRight));
      return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined, partials, holders);
    });

    /**
     * Creates a function that invokes `func` with arguments arranged according
     * to the specified `indexes` where the argument value at the first index is
     * provided as the first argument, the argument value at the second index is
     * provided as the second argument, and so on.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to rearrange arguments for.
     * @param {...(number|number[])} indexes The arranged argument indexes.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var rearged = _.rearg(function(a, b, c) {
     *   return [a, b, c];
     * }, [2, 0, 1]);
     *
     * rearged('b', 'c', 'a')
     * // => ['a', 'b', 'c']
     */
    var rearg = flatRest(function(func, indexes) {
      return createWrap(func, WRAP_REARG_FLAG, undefined, undefined, undefined, indexes);
    });

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * created function and arguments from `start` and beyond provided as
     * an array.
     *
     * **Note:** This method is based on the
     * [rest parameter](https://mdn.io/rest_parameters).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.rest(function(what, names) {
     *   return what + ' ' + _.initial(names).join(', ') +
     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
     * });
     *
     * say('hello', 'fred', 'barney', 'pebbles');
     * // => 'hello fred, barney, & pebbles'
     */
    function rest(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = start === undefined ? start : toInteger(start);
      return baseRest(func, start);
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * create function and an array of arguments much like
     * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
     *
     * **Note:** This method is based on the
     * [spread operator](https://mdn.io/spread_operator).
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Function
     * @param {Function} func The function to spread arguments over.
     * @param {number} [start=0] The start position of the spread.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.spread(function(who, what) {
     *   return who + ' says ' + what;
     * });
     *
     * say(['fred', 'hello']);
     * // => 'fred says hello'
     *
     * var numbers = Promise.all([
     *   Promise.resolve(40),
     *   Promise.resolve(36)
     * ]);
     *
     * numbers.then(_.spread(function(x, y) {
     *   return x + y;
     * }));
     * // => a Promise of 76
     */
    function spread(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = start == null ? 0 : nativeMax(toInteger(start), 0);
      return baseRest(function(args) {
        var array = args[start],
            otherArgs = castSlice(args, 0, start);

        if (array) {
          arrayPush(otherArgs, array);
        }
        return apply(func, this, otherArgs);
      });
    }

    /**
     * Creates a throttled function that only invokes `func` at most once per
     * every `wait` milliseconds. The throttled function comes with a `cancel`
     * method to cancel delayed `func` invocations and a `flush` method to
     * immediately invoke them. Provide `options` to indicate whether `func`
     * should be invoked on the leading and/or trailing edge of the `wait`
     * timeout. The `func` is invoked with the last arguments provided to the
     * throttled function. Subsequent calls to the throttled function return the
     * result of the last `func` invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the throttled function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.throttle` and `_.debounce`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to throttle.
     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=true]
     *  Specify invoking on the leading edge of the timeout.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new throttled function.
     * @example
     *
     * // Avoid excessively updating the position while scrolling.
     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
     *
     * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
     * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
     * jQuery(element).on('click', throttled);
     *
     * // Cancel the trailing throttled invocation.
     * jQuery(window).on('popstate', throttled.cancel);
     */
    function throttle(func, wait, options) {
      var leading = true,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (isObject(options)) {
        leading = 'leading' in options ? !!options.leading : leading;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }
      return debounce(func, wait, {
        'leading': leading,
        'maxWait': wait,
        'trailing': trailing
      });
    }

    /**
     * Creates a function that accepts up to one argument, ignoring any
     * additional arguments.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.unary(parseInt));
     * // => [6, 8, 10]
     */
    function unary(func) {
      return ary(func, 1);
    }

    /**
     * Creates a function that provides `value` to `wrapper` as its first
     * argument. Any additional arguments provided to the function are appended
     * to those provided to the `wrapper`. The wrapper is invoked with the `this`
     * binding of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {*} value The value to wrap.
     * @param {Function} [wrapper=identity] The wrapper function.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var p = _.wrap(_.escape, function(func, text) {
     *   return '<p>' + func(text) + '</p>';
     * });
     *
     * p('fred, barney, & pebbles');
     * // => '<p>fred, barney, &amp; pebbles</p>'
     */
    function wrap(value, wrapper) {
      return partial(castFunction(wrapper), value);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Casts `value` as an array if it's not one.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Lang
     * @param {*} value The value to inspect.
     * @returns {Array} Returns the cast array.
     * @example
     *
     * _.castArray(1);
     * // => [1]
     *
     * _.castArray({ 'a': 1 });
     * // => [{ 'a': 1 }]
     *
     * _.castArray('abc');
     * // => ['abc']
     *
     * _.castArray(null);
     * // => [null]
     *
     * _.castArray(undefined);
     * // => [undefined]
     *
     * _.castArray();
     * // => []
     *
     * var array = [1, 2, 3];
     * console.log(_.castArray(array) === array);
     * // => true
     */
    function castArray() {
      if (!arguments.length) {
        return [];
      }
      var value = arguments[0];
      return isArray(value) ? value : [value];
    }

    /**
     * Creates a shallow clone of `value`.
     *
     * **Note:** This method is loosely based on the
     * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
     * and supports cloning arrays, array buffers, booleans, date objects, maps,
     * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
     * arrays. The own enumerable properties of `arguments` objects are cloned
     * as plain objects. An empty object is returned for uncloneable values such
     * as error objects, functions, DOM nodes, and WeakMaps.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to clone.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeep
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var shallow = _.clone(objects);
     * console.log(shallow[0] === objects[0]);
     * // => true
     */
    function clone(value) {
      return baseClone(value, CLONE_SYMBOLS_FLAG);
    }

    /**
     * This method is like `_.clone` except that it accepts `customizer` which
     * is invoked to produce the cloned value. If `customizer` returns `undefined`,
     * cloning is handled by the method instead. The `customizer` is invoked with
     * up to four arguments; (value [, index|key, object, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeepWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(false);
     *   }
     * }
     *
     * var el = _.cloneWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 0
     */
    function cloneWith(value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
    }

    /**
     * This method is like `_.clone` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @returns {*} Returns the deep cloned value.
     * @see _.clone
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var deep = _.cloneDeep(objects);
     * console.log(deep[0] === objects[0]);
     * // => false
     */
    function cloneDeep(value) {
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
    }

    /**
     * This method is like `_.cloneWith` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the deep cloned value.
     * @see _.cloneWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(true);
     *   }
     * }
     *
     * var el = _.cloneDeepWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 20
     */
    function cloneDeepWith(value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
    }

    /**
     * Checks if `object` conforms to `source` by invoking the predicate
     * properties of `source` with the corresponding property values of `object`.
     *
     * **Note:** This method is equivalent to `_.conforms` when `source` is
     * partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 1; } });
     * // => true
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 2; } });
     * // => false
     */
    function conformsTo(object, source) {
      return source == null || baseConformsTo(object, source, keys(source));
    }

    /**
     * Performs a
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * comparison between two values to determine if they are equivalent.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.eq(object, object);
     * // => true
     *
     * _.eq(object, other);
     * // => false
     *
     * _.eq('a', 'a');
     * // => true
     *
     * _.eq('a', Object('a'));
     * // => false
     *
     * _.eq(NaN, NaN);
     * // => true
     */
    function eq(value, other) {
      return value === other || (value !== value && other !== other);
    }

    /**
     * Checks if `value` is greater than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     * @see _.lt
     * @example
     *
     * _.gt(3, 1);
     * // => true
     *
     * _.gt(3, 3);
     * // => false
     *
     * _.gt(1, 3);
     * // => false
     */
    var gt = createRelationalOperation(baseGt);

    /**
     * Checks if `value` is greater than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than or equal to
     *  `other`, else `false`.
     * @see _.lte
     * @example
     *
     * _.gte(3, 1);
     * // => true
     *
     * _.gte(3, 3);
     * // => true
     *
     * _.gte(1, 3);
     * // => false
     */
    var gte = createRelationalOperation(function(value, other) {
      return value >= other;
    });

    /**
     * Checks if `value` is likely an `arguments` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     *  else `false`.
     * @example
     *
     * _.isArguments(function() { return arguments; }());
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */
    var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
        !propertyIsEnumerable.call(value, 'callee');
    };

    /**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(document.body.children);
     * // => false
     *
     * _.isArray('abc');
     * // => false
     *
     * _.isArray(_.noop);
     * // => false
     */
    var isArray = Array.isArray;

    /**
     * Checks if `value` is classified as an `ArrayBuffer` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     * @example
     *
     * _.isArrayBuffer(new ArrayBuffer(2));
     * // => true
     *
     * _.isArrayBuffer(new Array(2));
     * // => false
     */
    var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;

    /**
     * Checks if `value` is array-like. A value is considered array-like if it's
     * not a function and has a `value.length` that's an integer greater than or
     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     * @example
     *
     * _.isArrayLike([1, 2, 3]);
     * // => true
     *
     * _.isArrayLike(document.body.children);
     * // => true
     *
     * _.isArrayLike('abc');
     * // => true
     *
     * _.isArrayLike(_.noop);
     * // => false
     */
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }

    /**
     * This method is like `_.isArrayLike` except that it also checks if `value`
     * is an object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array-like object,
     *  else `false`.
     * @example
     *
     * _.isArrayLikeObject([1, 2, 3]);
     * // => true
     *
     * _.isArrayLikeObject(document.body.children);
     * // => true
     *
     * _.isArrayLikeObject('abc');
     * // => false
     *
     * _.isArrayLikeObject(_.noop);
     * // => false
     */
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }

    /**
     * Checks if `value` is classified as a boolean primitive or object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
     * @example
     *
     * _.isBoolean(false);
     * // => true
     *
     * _.isBoolean(null);
     * // => false
     */
    function isBoolean(value) {
      return value === true || value === false ||
        (isObjectLike(value) && baseGetTag(value) == boolTag);
    }

    /**
     * Checks if `value` is a buffer.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
     * @example
     *
     * _.isBuffer(new Buffer(2));
     * // => true
     *
     * _.isBuffer(new Uint8Array(2));
     * // => false
     */
    var isBuffer = nativeIsBuffer || stubFalse;

    /**
     * Checks if `value` is classified as a `Date` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     * @example
     *
     * _.isDate(new Date);
     * // => true
     *
     * _.isDate('Mon April 23 2012');
     * // => false
     */
    var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;

    /**
     * Checks if `value` is likely a DOM element.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
     * @example
     *
     * _.isElement(document.body);
     * // => true
     *
     * _.isElement('<body>');
     * // => false
     */
    function isElement(value) {
      return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
    }

    /**
     * Checks if `value` is an empty object, collection, map, or set.
     *
     * Objects are considered empty if they have no own enumerable string keyed
     * properties.
     *
     * Array-like values such as `arguments` objects, arrays, buffers, strings, or
     * jQuery-like collections are considered empty if they have a `length` of `0`.
     * Similarly, maps and sets are considered empty if they have a `size` of `0`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
     * @example
     *
     * _.isEmpty(null);
     * // => true
     *
     * _.isEmpty(true);
     * // => true
     *
     * _.isEmpty(1);
     * // => true
     *
     * _.isEmpty([1, 2, 3]);
     * // => false
     *
     * _.isEmpty({ 'a': 1 });
     * // => false
     */
    function isEmpty(value) {
      if (value == null) {
        return true;
      }
      if (isArrayLike(value) &&
          (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
            isBuffer(value) || isTypedArray(value) || isArguments(value))) {
        return !value.length;
      }
      var tag = getTag(value);
      if (tag == mapTag || tag == setTag) {
        return !value.size;
      }
      if (isPrototype(value)) {
        return !baseKeys(value).length;
      }
      for (var key in value) {
        if (hasOwnProperty.call(value, key)) {
          return false;
        }
      }
      return true;
    }

    /**
     * Performs a deep comparison between two values to determine if they are
     * equivalent.
     *
     * **Note:** This method supports comparing arrays, array buffers, booleans,
     * date objects, error objects, maps, numbers, `Object` objects, regexes,
     * sets, strings, symbols, and typed arrays. `Object` objects are compared
     * by their own, not inherited, enumerable properties. Functions and DOM
     * nodes are compared by strict equality, i.e. `===`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.isEqual(object, other);
     * // => true
     *
     * object === other;
     * // => false
     */
    function isEqual(value, other) {
      return baseIsEqual(value, other);
    }

    /**
     * This method is like `_.isEqual` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with up to
     * six arguments: (objValue, othValue [, index|key, object, other, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, othValue) {
     *   if (isGreeting(objValue) && isGreeting(othValue)) {
     *     return true;
     *   }
     * }
     *
     * var array = ['hello', 'goodbye'];
     * var other = ['hi', 'goodbye'];
     *
     * _.isEqualWith(array, other, customizer);
     * // => true
     */
    function isEqualWith(value, other, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      var result = customizer ? customizer(value, other) : undefined;
      return result === undefined ? baseIsEqual(value, other, undefined, customizer) : !!result;
    }

    /**
     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
     * `SyntaxError`, `TypeError`, or `URIError` object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
     * @example
     *
     * _.isError(new Error);
     * // => true
     *
     * _.isError(Error);
     * // => false
     */
    function isError(value) {
      if (!isObjectLike(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == errorTag || tag == domExcTag ||
        (typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value));
    }

    /**
     * Checks if `value` is a finite primitive number.
     *
     * **Note:** This method is based on
     * [`Number.isFinite`](https://mdn.io/Number/isFinite).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
     * @example
     *
     * _.isFinite(3);
     * // => true
     *
     * _.isFinite(Number.MIN_VALUE);
     * // => true
     *
     * _.isFinite(Infinity);
     * // => false
     *
     * _.isFinite('3');
     * // => false
     */
    function isFinite(value) {
      return typeof value == 'number' && nativeIsFinite(value);
    }

    /**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      // The use of `Object#toString` avoids issues with the `typeof` operator
      // in Safari 9 which returns 'object' for typed arrays and other constructors.
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }

    /**
     * Checks if `value` is an integer.
     *
     * **Note:** This method is based on
     * [`Number.isInteger`](https://mdn.io/Number/isInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
     * @example
     *
     * _.isInteger(3);
     * // => true
     *
     * _.isInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isInteger(Infinity);
     * // => false
     *
     * _.isInteger('3');
     * // => false
     */
    function isInteger(value) {
      return typeof value == 'number' && value == toInteger(value);
    }

    /**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This method is loosely based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     * @example
     *
     * _.isLength(3);
     * // => true
     *
     * _.isLength(Number.MIN_VALUE);
     * // => false
     *
     * _.isLength(Infinity);
     * // => false
     *
     * _.isLength('3');
     * // => false
     */
    function isLength(value) {
      return typeof value == 'number' &&
        value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == 'object' || type == 'function');
    }

    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */
    function isObjectLike(value) {
      return value != null && typeof value == 'object';
    }

    /**
     * Checks if `value` is classified as a `Map` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     * @example
     *
     * _.isMap(new Map);
     * // => true
     *
     * _.isMap(new WeakMap);
     * // => false
     */
    var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

    /**
     * Performs a partial deep comparison between `object` and `source` to
     * determine if `object` contains equivalent property values.
     *
     * **Note:** This method is equivalent to `_.matches` when `source` is
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.isMatch(object, { 'b': 2 });
     * // => true
     *
     * _.isMatch(object, { 'b': 1 });
     * // => false
     */
    function isMatch(object, source) {
      return object === source || baseIsMatch(object, source, getMatchData(source));
    }

    /**
     * This method is like `_.isMatch` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with five
     * arguments: (objValue, srcValue, index|key, object, source).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, srcValue) {
     *   if (isGreeting(objValue) && isGreeting(srcValue)) {
     *     return true;
     *   }
     * }
     *
     * var object = { 'greeting': 'hello' };
     * var source = { 'greeting': 'hi' };
     *
     * _.isMatchWith(object, source, customizer);
     * // => true
     */
    function isMatchWith(object, source, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseIsMatch(object, source, getMatchData(source), customizer);
    }

    /**
     * Checks if `value` is `NaN`.
     *
     * **Note:** This method is based on
     * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
     * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
     * `undefined` and other non-number values.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
     * @example
     *
     * _.isNaN(NaN);
     * // => true
     *
     * _.isNaN(new Number(NaN));
     * // => true
     *
     * isNaN(undefined);
     * // => true
     *
     * _.isNaN(undefined);
     * // => false
     */
    function isNaN(value) {
      // An `NaN` primitive is the only value that is not equal to itself.
      // Perform the `toStringTag` check first to avoid errors with some
      // ActiveX objects in IE.
      return isNumber(value) && value != +value;
    }

    /**
     * Checks if `value` is a pristine native function.
     *
     * **Note:** This method can't reliably detect native functions in the presence
     * of the core-js package because core-js circumvents this kind of detection.
     * Despite multiple requests, the core-js maintainer has made it clear: any
     * attempt to fix the detection will be obstructed. As a result, we're left
     * with little choice but to throw an error. Unfortunately, this also affects
     * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
     * which rely on core-js.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     * @example
     *
     * _.isNative(Array.prototype.push);
     * // => true
     *
     * _.isNative(_);
     * // => false
     */
    function isNative(value) {
      if (isMaskable(value)) {
        throw new Error(CORE_ERROR_TEXT);
      }
      return baseIsNative(value);
    }

    /**
     * Checks if `value` is `null`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
     * @example
     *
     * _.isNull(null);
     * // => true
     *
     * _.isNull(void 0);
     * // => false
     */
    function isNull(value) {
      return value === null;
    }

    /**
     * Checks if `value` is `null` or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
     * @example
     *
     * _.isNil(null);
     * // => true
     *
     * _.isNil(void 0);
     * // => true
     *
     * _.isNil(NaN);
     * // => false
     */
    function isNil(value) {
      return value == null;
    }

    /**
     * Checks if `value` is classified as a `Number` primitive or object.
     *
     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
     * classified as numbers, use the `_.isFinite` method.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a number, else `false`.
     * @example
     *
     * _.isNumber(3);
     * // => true
     *
     * _.isNumber(Number.MIN_VALUE);
     * // => true
     *
     * _.isNumber(Infinity);
     * // => true
     *
     * _.isNumber('3');
     * // => false
     */
    function isNumber(value) {
      return typeof value == 'number' ||
        (isObjectLike(value) && baseGetTag(value) == numberTag);
    }

    /**
     * Checks if `value` is a plain object, that is, an object created by the
     * `Object` constructor or one with a `[[Prototype]]` of `null`.
     *
     * @static
     * @memberOf _
     * @since 0.8.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * _.isPlainObject(new Foo);
     * // => false
     *
     * _.isPlainObject([1, 2, 3]);
     * // => false
     *
     * _.isPlainObject({ 'x': 0, 'y': 0 });
     * // => true
     *
     * _.isPlainObject(Object.create(null));
     * // => true
     */
    function isPlainObject(value) {
      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
      return typeof Ctor == 'function' && Ctor instanceof Ctor &&
        funcToString.call(Ctor) == objectCtorString;
    }

    /**
     * Checks if `value` is classified as a `RegExp` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     * @example
     *
     * _.isRegExp(/abc/);
     * // => true
     *
     * _.isRegExp('/abc/');
     * // => false
     */
    var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

    /**
     * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
     * double precision number which isn't the result of a rounded unsafe integer.
     *
     * **Note:** This method is based on
     * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
     * @example
     *
     * _.isSafeInteger(3);
     * // => true
     *
     * _.isSafeInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isSafeInteger(Infinity);
     * // => false
     *
     * _.isSafeInteger('3');
     * // => false
     */
    function isSafeInteger(value) {
      return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is classified as a `Set` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     * @example
     *
     * _.isSet(new Set);
     * // => true
     *
     * _.isSet(new WeakSet);
     * // => false
     */
    var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

    /**
     * Checks if `value` is classified as a `String` primitive or object.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a string, else `false`.
     * @example
     *
     * _.isString('abc');
     * // => true
     *
     * _.isString(1);
     * // => false
     */
    function isString(value) {
      return typeof value == 'string' ||
        (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
    }

    /**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */
    function isSymbol(value) {
      return typeof value == 'symbol' ||
        (isObjectLike(value) && baseGetTag(value) == symbolTag);
    }

    /**
     * Checks if `value` is classified as a typed array.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     * @example
     *
     * _.isTypedArray(new Uint8Array);
     * // => true
     *
     * _.isTypedArray([]);
     * // => false
     */
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

    /**
     * Checks if `value` is `undefined`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
     * @example
     *
     * _.isUndefined(void 0);
     * // => true
     *
     * _.isUndefined(null);
     * // => false
     */
    function isUndefined(value) {
      return value === undefined;
    }

    /**
     * Checks if `value` is classified as a `WeakMap` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
     * @example
     *
     * _.isWeakMap(new WeakMap);
     * // => true
     *
     * _.isWeakMap(new Map);
     * // => false
     */
    function isWeakMap(value) {
      return isObjectLike(value) && getTag(value) == weakMapTag;
    }

    /**
     * Checks if `value` is classified as a `WeakSet` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
     * @example
     *
     * _.isWeakSet(new WeakSet);
     * // => true
     *
     * _.isWeakSet(new Set);
     * // => false
     */
    function isWeakSet(value) {
      return isObjectLike(value) && baseGetTag(value) == weakSetTag;
    }

    /**
     * Checks if `value` is less than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     * @see _.gt
     * @example
     *
     * _.lt(1, 3);
     * // => true
     *
     * _.lt(3, 3);
     * // => false
     *
     * _.lt(3, 1);
     * // => false
     */
    var lt = createRelationalOperation(baseLt);

    /**
     * Checks if `value` is less than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than or equal to
     *  `other`, else `false`.
     * @see _.gte
     * @example
     *
     * _.lte(1, 3);
     * // => true
     *
     * _.lte(3, 3);
     * // => true
     *
     * _.lte(3, 1);
     * // => false
     */
    var lte = createRelationalOperation(function(value, other) {
      return value <= other;
    });

    /**
     * Converts `value` to an array.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Array} Returns the converted array.
     * @example
     *
     * _.toArray({ 'a': 1, 'b': 2 });
     * // => [1, 2]
     *
     * _.toArray('abc');
     * // => ['a', 'b', 'c']
     *
     * _.toArray(1);
     * // => []
     *
     * _.toArray(null);
     * // => []
     */
    function toArray(value) {
      if (!value) {
        return [];
      }
      if (isArrayLike(value)) {
        return isString(value) ? stringToArray(value) : copyArray(value);
      }
      if (symIterator && value[symIterator]) {
        return iteratorToArray(value[symIterator]());
      }
      var tag = getTag(value),
          func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values);

      return func(value);
    }

    /**
     * Converts `value` to a finite number.
     *
     * @static
     * @memberOf _
     * @since 4.12.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted number.
     * @example
     *
     * _.toFinite(3.2);
     * // => 3.2
     *
     * _.toFinite(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toFinite(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toFinite('3.2');
     * // => 3.2
     */
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign = (value < 0 ? -1 : 1);
        return sign * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }

    /**
     * Converts `value` to an integer.
     *
     * **Note:** This method is loosely based on
     * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toInteger(3.2);
     * // => 3
     *
     * _.toInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toInteger(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toInteger('3.2');
     * // => 3
     */
    function toInteger(value) {
      var result = toFinite(value),
          remainder = result % 1;

      return result === result ? (remainder ? result - remainder : result) : 0;
    }

    /**
     * Converts `value` to an integer suitable for use as the length of an
     * array-like object.
     *
     * **Note:** This method is based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toLength(3.2);
     * // => 3
     *
     * _.toLength(Number.MIN_VALUE);
     * // => 0
     *
     * _.toLength(Infinity);
     * // => 4294967295
     *
     * _.toLength('3.2');
     * // => 3
     */
    function toLength(value) {
      return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
    }

    /**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3.2);
     * // => 3.2
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
     *
     * _.toNumber('3.2');
     * // => 3.2
     */
    function toNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? (other + '') : other;
      }
      if (typeof value != 'string') {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, '');
      var isBinary = reIsBinary.test(value);
      return (isBinary || reIsOctal.test(value))
        ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
        : (reIsBadHex.test(value) ? NAN : +value);
    }

    /**
     * Converts `value` to a plain object flattening inherited enumerable string
     * keyed properties of `value` to own properties of the plain object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Object} Returns the converted plain object.
     * @example
     *
     * function Foo() {
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.assign({ 'a': 1 }, new Foo);
     * // => { 'a': 1, 'b': 2 }
     *
     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
     * // => { 'a': 1, 'b': 2, 'c': 3 }
     */
    function toPlainObject(value) {
      return copyObject(value, keysIn(value));
    }

    /**
     * Converts `value` to a safe integer. A safe integer can be compared and
     * represented correctly.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toSafeInteger(3.2);
     * // => 3
     *
     * _.toSafeInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toSafeInteger(Infinity);
     * // => 9007199254740991
     *
     * _.toSafeInteger('3.2');
     * // => 3
     */
    function toSafeInteger(value) {
      return value
        ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER)
        : (value === 0 ? value : 0);
    }

    /**
     * Converts `value` to a string. An empty string is returned for `null`
     * and `undefined` values. The sign of `-0` is preserved.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.toString(null);
     * // => ''
     *
     * _.toString(-0);
     * // => '-0'
     *
     * _.toString([1, 2, 3]);
     * // => '1,2,3'
     */
    function toString(value) {
      return value == null ? '' : baseToString(value);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Assigns own enumerable string keyed properties of source objects to the
     * destination object. Source objects are applied from left to right.
     * Subsequent sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object` and is loosely based on
     * [`Object.assign`](https://mdn.io/Object/assign).
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assignIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assign({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'c': 3 }
     */
    var assign = createAssigner(function(object, source) {
      if (isPrototype(source) || isArrayLike(source)) {
        copyObject(source, keys(source), object);
        return;
      }
      for (var key in source) {
        if (hasOwnProperty.call(source, key)) {
          assignValue(object, key, source[key]);
        }
      }
    });

    /**
     * This method is like `_.assign` except that it iterates over own and
     * inherited source properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extend
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assign
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assignIn({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
     */
    var assignIn = createAssigner(function(object, source) {
      copyObject(source, keysIn(source), object);
    });

    /**
     * This method is like `_.assignIn` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extendWith
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignInWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
      copyObject(source, keysIn(source), object, customizer);
    });

    /**
     * This method is like `_.assign` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignInWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
      copyObject(source, keys(source), object, customizer);
    });

    /**
     * Creates an array of values corresponding to `paths` of `object`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Array} Returns the picked values.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _.at(object, ['a[0].b.c', 'a[1]']);
     * // => [3, 4]
     */
    var at = flatRest(baseAt);

    /**
     * Creates an object that inherits from the `prototype` object. If a
     * `properties` object is given, its own enumerable string keyed properties
     * are assigned to the created object.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Object
     * @param {Object} prototype The object to inherit from.
     * @param {Object} [properties] The properties to assign to the object.
     * @returns {Object} Returns the new object.
     * @example
     *
     * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
     *
     * function Circle() {
     *   Shape.call(this);
     * }
     *
     * Circle.prototype = _.create(Shape.prototype, {
     *   'constructor': Circle
     * });
     *
     * var circle = new Circle;
     * circle instanceof Circle;
     * // => true
     *
     * circle instanceof Shape;
     * // => true
     */
    function create(prototype, properties) {
      var result = baseCreate(prototype);
      return properties == null ? result : baseAssign(result, properties);
    }

    /**
     * Assigns own and inherited enumerable string keyed properties of source
     * objects to the destination object for all destination properties that
     * resolve to `undefined`. Source objects are applied from left to right.
     * Once a property is set, additional values of the same property are ignored.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaultsDeep
     * @example
     *
     * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var defaults = baseRest(function(args) {
      args.push(undefined, customDefaultsAssignIn);
      return apply(assignInWith, undefined, args);
    });

    /**
     * This method is like `_.defaults` except that it recursively assigns
     * default properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaults
     * @example
     *
     * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
     * // => { 'a': { 'b': 2, 'c': 3 } }
     */
    var defaultsDeep = baseRest(function(args) {
      args.push(undefined, customDefaultsMerge);
      return apply(mergeWith, undefined, args);
    });

    /**
     * This method is like `_.find` except that it returns the key of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findKey(users, function(o) { return o.age < 40; });
     * // => 'barney' (iteration order is not guaranteed)
     *
     * // The `_.matches` iteratee shorthand.
     * _.findKey(users, { 'age': 1, 'active': true });
     * // => 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findKey(users, 'active');
     * // => 'barney'
     */
    function findKey(object, predicate) {
      return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
    }

    /**
     * This method is like `_.findKey` except that it iterates over elements of
     * a collection in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findLastKey(users, function(o) { return o.age < 40; });
     * // => returns 'pebbles' assuming `_.findKey` returns 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastKey(users, { 'age': 36, 'active': true });
     * // => 'barney'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastKey(users, 'active');
     * // => 'pebbles'
     */
    function findLastKey(object, predicate) {
      return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
    }

    /**
     * Iterates over own and inherited enumerable string keyed properties of an
     * object and invokes `iteratee` for each property. The iteratee is invoked
     * with three arguments: (value, key, object). Iteratee functions may exit
     * iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forInRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forIn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
     */
    function forIn(object, iteratee) {
      return object == null
        ? object
        : baseFor(object, getIteratee(iteratee, 3), keysIn);
    }

    /**
     * This method is like `_.forIn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forInRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
     */
    function forInRight(object, iteratee) {
      return object == null
        ? object
        : baseForRight(object, getIteratee(iteratee, 3), keysIn);
    }

    /**
     * Iterates over own enumerable string keyed properties of an object and
     * invokes `iteratee` for each property. The iteratee is invoked with three
     * arguments: (value, key, object). Iteratee functions may exit iteration
     * early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwnRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
    function forOwn(object, iteratee) {
      return object && baseForOwn(object, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.forOwn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwnRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
     */
    function forOwnRight(object, iteratee) {
      return object && baseForOwnRight(object, getIteratee(iteratee, 3));
    }

    /**
     * Creates an array of function property names from own enumerable properties
     * of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functionsIn
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functions(new Foo);
     * // => ['a', 'b']
     */
    function functions(object) {
      return object == null ? [] : baseFunctions(object, keys(object));
    }

    /**
     * Creates an array of function property names from own and inherited
     * enumerable properties of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functions
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functionsIn(new Foo);
     * // => ['a', 'b', 'c']
     */
    function functionsIn(object) {
      return object == null ? [] : baseFunctions(object, keysIn(object));
    }

    /**
     * Gets the value at `path` of `object`. If the resolved value is
     * `undefined`, the `defaultValue` is returned in its place.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.get(object, 'a[0].b.c');
     * // => 3
     *
     * _.get(object, ['a', '0', 'b', 'c']);
     * // => 3
     *
     * _.get(object, 'a.b.c', 'default');
     * // => 'default'
     */
    function get(object, path, defaultValue) {
      var result = object == null ? undefined : baseGet(object, path);
      return result === undefined ? defaultValue : result;
    }

    /**
     * Checks if `path` is a direct property of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = { 'a': { 'b': 2 } };
     * var other = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.has(object, 'a');
     * // => true
     *
     * _.has(object, 'a.b');
     * // => true
     *
     * _.has(object, ['a', 'b']);
     * // => true
     *
     * _.has(other, 'a');
     * // => false
     */
    function has(object, path) {
      return object != null && hasPath(object, path, baseHas);
    }

    /**
     * Checks if `path` is a direct or inherited property of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.hasIn(object, 'a');
     * // => true
     *
     * _.hasIn(object, 'a.b');
     * // => true
     *
     * _.hasIn(object, ['a', 'b']);
     * // => true
     *
     * _.hasIn(object, 'b');
     * // => false
     */
    function hasIn(object, path) {
      return object != null && hasPath(object, path, baseHasIn);
    }

    /**
     * Creates an object composed of the inverted keys and values of `object`.
     * If `object` contains duplicate values, subsequent values overwrite
     * property assignments of previous values.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Object
     * @param {Object} object The object to invert.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invert(object);
     * // => { '1': 'c', '2': 'b' }
     */
    var invert = createInverter(function(result, value, key) {
      result[value] = key;
    }, constant(identity));

    /**
     * This method is like `_.invert` except that the inverted object is generated
     * from the results of running each element of `object` thru `iteratee`. The
     * corresponding inverted value of each inverted key is an array of keys
     * responsible for generating the inverted value. The iteratee is invoked
     * with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Object
     * @param {Object} object The object to invert.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invertBy(object);
     * // => { '1': ['a', 'c'], '2': ['b'] }
     *
     * _.invertBy(object, function(value) {
     *   return 'group' + value;
     * });
     * // => { 'group1': ['a', 'c'], 'group2': ['b'] }
     */
    var invertBy = createInverter(function(result, value, key) {
      if (hasOwnProperty.call(result, value)) {
        result[value].push(key);
      } else {
        result[value] = [key];
      }
    }, getIteratee);

    /**
     * Invokes the method at `path` of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
     *
     * _.invoke(object, 'a[0].b.c.slice', 1, 3);
     * // => [2, 3]
     */
    var invoke = baseRest(baseInvoke);

    /**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * for more details.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     *
     * _.keys('hi');
     * // => ['0', '1']
     */
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }

    /**
     * Creates an array of the own and inherited enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keysIn(new Foo);
     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
     */
    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }

    /**
     * The opposite of `_.mapValues`; this method creates an object with the
     * same values as `object` and keys generated by running each own enumerable
     * string keyed property of `object` thru `iteratee`. The iteratee is invoked
     * with three arguments: (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapValues
     * @example
     *
     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
     *   return key + value;
     * });
     * // => { 'a1': 1, 'b2': 2 }
     */
    function mapKeys(object, iteratee) {
      var result = {};
      iteratee = getIteratee(iteratee, 3);

      baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, iteratee(value, key, object), value);
      });
      return result;
    }

    /**
     * Creates an object with the same keys as `object` and values generated
     * by running each own enumerable string keyed property of `object` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapKeys
     * @example
     *
     * var users = {
     *   'fred':    { 'user': 'fred',    'age': 40 },
     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
     * };
     *
     * _.mapValues(users, function(o) { return o.age; });
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     *
     * // The `_.property` iteratee shorthand.
     * _.mapValues(users, 'age');
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     */
    function mapValues(object, iteratee) {
      var result = {};
      iteratee = getIteratee(iteratee, 3);

      baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, key, iteratee(value, key, object));
      });
      return result;
    }

    /**
     * This method is like `_.assign` except that it recursively merges own and
     * inherited enumerable string keyed properties of source objects into the
     * destination object. Source properties that resolve to `undefined` are
     * skipped if a destination value exists. Array and plain object properties
     * are merged recursively. Other objects and value types are overridden by
     * assignment. Source objects are applied from left to right. Subsequent
     * sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {
     *   'a': [{ 'b': 2 }, { 'd': 4 }]
     * };
     *
     * var other = {
     *   'a': [{ 'c': 3 }, { 'e': 5 }]
     * };
     *
     * _.merge(object, other);
     * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
     */
    var merge = createAssigner(function(object, source, srcIndex) {
      baseMerge(object, source, srcIndex);
    });

    /**
     * This method is like `_.merge` except that it accepts `customizer` which
     * is invoked to produce the merged values of the destination and source
     * properties. If `customizer` returns `undefined`, merging is handled by the
     * method instead. The `customizer` is invoked with six arguments:
     * (objValue, srcValue, key, object, source, stack).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} customizer The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   if (_.isArray(objValue)) {
     *     return objValue.concat(srcValue);
     *   }
     * }
     *
     * var object = { 'a': [1], 'b': [2] };
     * var other = { 'a': [3], 'b': [4] };
     *
     * _.mergeWith(object, other, customizer);
     * // => { 'a': [1, 3], 'b': [2, 4] }
     */
    var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
      baseMerge(object, source, srcIndex, customizer);
    });

    /**
     * The opposite of `_.pick`; this method creates an object composed of the
     * own and inherited enumerable property paths of `object` that are not omitted.
     *
     * **Note:** This method is considerably slower than `_.pick`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to omit.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omit(object, ['a', 'c']);
     * // => { 'b': '2' }
     */
    var omit = flatRest(function(object, paths) {
      var result = {};
      if (object == null) {
        return result;
      }
      var isDeep = false;
      paths = arrayMap(paths, function(path) {
        path = castPath(path, object);
        isDeep || (isDeep = path.length > 1);
        return path;
      });
      copyObject(object, getAllKeysIn(object), result);
      if (isDeep) {
        result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
      }
      var length = paths.length;
      while (length--) {
        baseUnset(result, paths[length]);
      }
      return result;
    });

    /**
     * The opposite of `_.pickBy`; this method creates an object composed of
     * the own and inherited enumerable string keyed properties of `object` that
     * `predicate` doesn't return truthy for. The predicate is invoked with two
     * arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omitBy(object, _.isNumber);
     * // => { 'b': '2' }
     */
    function omitBy(object, predicate) {
      return pickBy(object, negate(getIteratee(predicate)));
    }

    /**
     * Creates an object composed of the picked `object` properties.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pick(object, ['a', 'c']);
     * // => { 'a': 1, 'c': 3 }
     */
    var pick = flatRest(function(object, paths) {
      return object == null ? {} : basePick(object, paths);
    });

    /**
     * Creates an object composed of the `object` properties `predicate` returns
     * truthy for. The predicate is invoked with two arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pickBy(object, _.isNumber);
     * // => { 'a': 1, 'c': 3 }
     */
    function pickBy(object, predicate) {
      if (object == null) {
        return {};
      }
      var props = arrayMap(getAllKeysIn(object), function(prop) {
        return [prop];
      });
      predicate = getIteratee(predicate);
      return basePickBy(object, props, function(value, path) {
        return predicate(value, path[0]);
      });
    }

    /**
     * This method is like `_.get` except that if the resolved value is a
     * function it's invoked with the `this` binding of its parent object and
     * its result is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to resolve.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
     *
     * _.result(object, 'a[0].b.c1');
     * // => 3
     *
     * _.result(object, 'a[0].b.c2');
     * // => 4
     *
     * _.result(object, 'a[0].b.c3', 'default');
     * // => 'default'
     *
     * _.result(object, 'a[0].b.c3', _.constant('default'));
     * // => 'default'
     */
    function result(object, path, defaultValue) {
      path = castPath(path, object);

      var index = -1,
          length = path.length;

      // Ensure the loop is entered when path is empty.
      if (!length) {
        length = 1;
        object = undefined;
      }
      while (++index < length) {
        var value = object == null ? undefined : object[toKey(path[index])];
        if (value === undefined) {
          index = length;
          value = defaultValue;
        }
        object = isFunction(value) ? value.call(object) : value;
      }
      return object;
    }

    /**
     * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
     * it's created. Arrays are created for missing index properties while objects
     * are created for all other missing properties. Use `_.setWith` to customize
     * `path` creation.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.set(object, 'a[0].b.c', 4);
     * console.log(object.a[0].b.c);
     * // => 4
     *
     * _.set(object, ['x', '0', 'y', 'z'], 5);
     * console.log(object.x[0].y.z);
     * // => 5
     */
    function set(object, path, value) {
      return object == null ? object : baseSet(object, path, value);
    }

    /**
     * This method is like `_.set` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.setWith(object, '[0][1]', 'a', Object);
     * // => { '0': { '1': 'a' } }
     */
    function setWith(object, path, value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return object == null ? object : baseSet(object, path, value, customizer);
    }

    /**
     * Creates an array of own enumerable string keyed-value pairs for `object`
     * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
     * entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entries
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairs(new Foo);
     * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
     */
    var toPairs = createToPairs(keys);

    /**
     * Creates an array of own and inherited enumerable string keyed-value pairs
     * for `object` which can be consumed by `_.fromPairs`. If `object` is a map
     * or set, its entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entriesIn
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairsIn(new Foo);
     * // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
     */
    var toPairsIn = createToPairs(keysIn);

    /**
     * An alternative to `_.reduce`; this method transforms `object` to a new
     * `accumulator` object which is the result of running each of its own
     * enumerable string keyed properties thru `iteratee`, with each invocation
     * potentially mutating the `accumulator` object. If `accumulator` is not
     * provided, a new object with the same `[[Prototype]]` will be used. The
     * iteratee is invoked with four arguments: (accumulator, value, key, object).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The custom accumulator value.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * _.transform([2, 3, 4], function(result, n) {
     *   result.push(n *= n);
     *   return n % 2 == 0;
     * }, []);
     * // => [4, 9]
     *
     * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] }
     */
    function transform(object, iteratee, accumulator) {
      var isArr = isArray(object),
          isArrLike = isArr || isBuffer(object) || isTypedArray(object);

      iteratee = getIteratee(iteratee, 4);
      if (accumulator == null) {
        var Ctor = object && object.constructor;
        if (isArrLike) {
          accumulator = isArr ? new Ctor : [];
        }
        else if (isObject(object)) {
          accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
        }
        else {
          accumulator = {};
        }
      }
      (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
        return iteratee(accumulator, value, index, object);
      });
      return accumulator;
    }

    /**
     * Removes the property at `path` of `object`.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 7 } }] };
     * _.unset(object, 'a[0].b.c');
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     *
     * _.unset(object, ['a', '0', 'b', 'c']);
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     */
    function unset(object, path) {
      return object == null ? true : baseUnset(object, path);
    }

    /**
     * This method is like `_.set` except that accepts `updater` to produce the
     * value to set. Use `_.updateWith` to customize `path` creation. The `updater`
     * is invoked with one argument: (value).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.update(object, 'a[0].b.c', function(n) { return n * n; });
     * console.log(object.a[0].b.c);
     * // => 9
     *
     * _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
     * console.log(object.x[0].y.z);
     * // => 0
     */
    function update(object, path, updater) {
      return object == null ? object : baseUpdate(object, path, castFunction(updater));
    }

    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    function updateWith(object, path, updater, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
    }

    /**
     * Creates an array of the own enumerable string keyed property values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.values(new Foo);
     * // => [1, 2] (iteration order is not guaranteed)
     *
     * _.values('hi');
     * // => ['h', 'i']
     */
    function values(object) {
      return object == null ? [] : baseValues(object, keys(object));
    }

    /**
     * Creates an array of the own and inherited enumerable string keyed property
     * values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.valuesIn(new Foo);
     * // => [1, 2, 3] (iteration order is not guaranteed)
     */
    function valuesIn(object) {
      return object == null ? [] : baseValues(object, keysIn(object));
    }

    /*------------------------------------------------------------------------*/

    /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Number
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */
    function clamp(number, lower, upper) {
      if (upper === undefined) {
        upper = lower;
        lower = undefined;
      }
      if (upper !== undefined) {
        upper = toNumber(upper);
        upper = upper === upper ? upper : 0;
      }
      if (lower !== undefined) {
        lower = toNumber(lower);
        lower = lower === lower ? lower : 0;
      }
      return baseClamp(toNumber(number), lower, upper);
    }

    /**
     * Checks if `n` is between `start` and up to, but not including, `end`. If
     * `end` is not specified, it's set to `start` with `start` then set to `0`.
     * If `start` is greater than `end` the params are swapped to support
     * negative ranges.
     *
     * @static
     * @memberOf _
     * @since 3.3.0
     * @category Number
     * @param {number} number The number to check.
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     * @see _.range, _.rangeRight
     * @example
     *
     * _.inRange(3, 2, 4);
     * // => true
     *
     * _.inRange(4, 8);
     * // => true
     *
     * _.inRange(4, 2);
     * // => false
     *
     * _.inRange(2, 2);
     * // => false
     *
     * _.inRange(1.2, 2);
     * // => true
     *
     * _.inRange(5.2, 4);
     * // => false
     *
     * _.inRange(-3, -2, -6);
     * // => true
     */
    function inRange(number, start, end) {
      start = toFinite(start);
      if (end === undefined) {
        end = start;
        start = 0;
      } else {
        end = toFinite(end);
      }
      number = toNumber(number);
      return baseInRange(number, start, end);
    }

    /**
     * Produces a random number between the inclusive `lower` and `upper` bounds.
     * If only one argument is provided a number between `0` and the given number
     * is returned. If `floating` is `true`, or either `lower` or `upper` are
     * floats, a floating-point number is returned instead of an integer.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Number
     * @param {number} [lower=0] The lower bound.
     * @param {number} [upper=1] The upper bound.
     * @param {boolean} [floating] Specify returning a floating-point number.
     * @returns {number} Returns the random number.
     * @example
     *
     * _.random(0, 5);
     * // => an integer between 0 and 5
     *
     * _.random(5);
     * // => also an integer between 0 and 5
     *
     * _.random(5, true);
     * // => a floating-point number between 0 and 5
     *
     * _.random(1.2, 5.2);
     * // => a floating-point number between 1.2 and 5.2
     */
    function random(lower, upper, floating) {
      if (floating && typeof floating != 'boolean' && isIterateeCall(lower, upper, floating)) {
        upper = floating = undefined;
      }
      if (floating === undefined) {
        if (typeof upper == 'boolean') {
          floating = upper;
          upper = undefined;
        }
        else if (typeof lower == 'boolean') {
          floating = lower;
          lower = undefined;
        }
      }
      if (lower === undefined && upper === undefined) {
        lower = 0;
        upper = 1;
      }
      else {
        lower = toFinite(lower);
        if (upper === undefined) {
          upper = lower;
          lower = 0;
        } else {
          upper = toFinite(upper);
        }
      }
      if (lower > upper) {
        var temp = lower;
        lower = upper;
        upper = temp;
      }
      if (floating || lower % 1 || upper % 1) {
        var rand = nativeRandom();
        return nativeMin(lower + (rand * (upper - lower + freeParseFloat('1e-' + ((rand + '').length - 1)))), upper);
      }
      return baseRandom(lower, upper);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the camel cased string.
     * @example
     *
     * _.camelCase('Foo Bar');
     * // => 'fooBar'
     *
     * _.camelCase('--foo-bar--');
     * // => 'fooBar'
     *
     * _.camelCase('__FOO_BAR__');
     * // => 'fooBar'
     */
    var camelCase = createCompounder(function(result, word, index) {
      word = word.toLowerCase();
      return result + (index ? capitalize(word) : word);
    });

    /**
     * Converts the first character of `string` to upper case and the remaining
     * to lower case.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to capitalize.
     * @returns {string} Returns the capitalized string.
     * @example
     *
     * _.capitalize('FRED');
     * // => 'Fred'
     */
    function capitalize(string) {
      return upperFirst(toString(string).toLowerCase());
    }

    /**
     * Deburrs `string` by converting
     * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
     * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
     * letters to basic Latin letters and removing
     * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to deburr.
     * @returns {string} Returns the deburred string.
     * @example
     *
     * _.deburr('déjà vu');
     * // => 'deja vu'
     */
    function deburr(string) {
      string = toString(string);
      return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
    }

    /**
     * Checks if `string` ends with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=string.length] The position to search up to.
     * @returns {boolean} Returns `true` if `string` ends with `target`,
     *  else `false`.
     * @example
     *
     * _.endsWith('abc', 'c');
     * // => true
     *
     * _.endsWith('abc', 'b');
     * // => false
     *
     * _.endsWith('abc', 'b', 2);
     * // => true
     */
    function endsWith(string, target, position) {
      string = toString(string);
      target = baseToString(target);

      var length = string.length;
      position = position === undefined
        ? length
        : baseClamp(toInteger(position), 0, length);

      var end = position;
      position -= target.length;
      return position >= 0 && string.slice(position, end) == target;
    }

    /**
     * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
     * corresponding HTML entities.
     *
     * **Note:** No other characters are escaped. To escape additional
     * characters use a third-party library like [_he_](https://mths.be/he).
     *
     * Though the ">" character is escaped for symmetry, characters like
     * ">" and "/" don't need escaping in HTML and have no special meaning
     * unless they're part of a tag or unquoted attribute value. See
     * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
     * (under "semi-related fun fact") for more details.
     *
     * When working with HTML you should always
     * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
     * XSS vectors.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escape('fred, barney, & pebbles');
     * // => 'fred, barney, &amp; pebbles'
     */
    function escape(string) {
      string = toString(string);
      return (string && reHasUnescapedHtml.test(string))
        ? string.replace(reUnescapedHtml, escapeHtmlChar)
        : string;
    }

    /**
     * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
     * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escapeRegExp('[lodash](https://lodash.com/)');
     * // => '\[lodash\]\(https://lodash\.com/\)'
     */
    function escapeRegExp(string) {
      string = toString(string);
      return (string && reHasRegExpChar.test(string))
        ? string.replace(reRegExpChar, '\\$&')
        : string;
    }

    /**
     * Converts `string` to
     * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the kebab cased string.
     * @example
     *
     * _.kebabCase('Foo Bar');
     * // => 'foo-bar'
     *
     * _.kebabCase('fooBar');
     * // => 'foo-bar'
     *
     * _.kebabCase('__FOO_BAR__');
     * // => 'foo-bar'
     */
    var kebabCase = createCompounder(function(result, word, index) {
      return result + (index ? '-' : '') + word.toLowerCase();
    });

    /**
     * Converts `string`, as space separated words, to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.lowerCase('--Foo-Bar--');
     * // => 'foo bar'
     *
     * _.lowerCase('fooBar');
     * // => 'foo bar'
     *
     * _.lowerCase('__FOO_BAR__');
     * // => 'foo bar'
     */
    var lowerCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + word.toLowerCase();
    });

    /**
     * Converts the first character of `string` to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.lowerFirst('Fred');
     * // => 'fred'
     *
     * _.lowerFirst('FRED');
     * // => 'fRED'
     */
    var lowerFirst = createCaseFirst('toLowerCase');

    /**
     * Pads `string` on the left and right sides if it's shorter than `length`.
     * Padding characters are truncated if they can't be evenly divided by `length`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.pad('abc', 8);
     * // => '  abc   '
     *
     * _.pad('abc', 8, '_-');
     * // => '_-abc_-_'
     *
     * _.pad('abc', 3);
     * // => 'abc'
     */
    function pad(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      if (!length || strLength >= length) {
        return string;
      }
      var mid = (length - strLength) / 2;
      return (
        createPadding(nativeFloor(mid), chars) +
        string +
        createPadding(nativeCeil(mid), chars)
      );
    }

    /**
     * Pads `string` on the right side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padEnd('abc', 6);
     * // => 'abc   '
     *
     * _.padEnd('abc', 6, '_-');
     * // => 'abc_-_'
     *
     * _.padEnd('abc', 3);
     * // => 'abc'
     */
    function padEnd(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      return (length && strLength < length)
        ? (string + createPadding(length - strLength, chars))
        : string;
    }

    /**
     * Pads `string` on the left side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padStart('abc', 6);
     * // => '   abc'
     *
     * _.padStart('abc', 6, '_-');
     * // => '_-_abc'
     *
     * _.padStart('abc', 3);
     * // => 'abc'
     */
    function padStart(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      return (length && strLength < length)
        ? (createPadding(length - strLength, chars) + string)
        : string;
    }

    /**
     * Converts `string` to an integer of the specified radix. If `radix` is
     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
     * hexadecimal, in which case a `radix` of `16` is used.
     *
     * **Note:** This method aligns with the
     * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category String
     * @param {string} string The string to convert.
     * @param {number} [radix=10] The radix to interpret `value` by.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.parseInt('08');
     * // => 8
     *
     * _.map(['6', '08', '10'], _.parseInt);
     * // => [6, 8, 10]
     */
    function parseInt(string, radix, guard) {
      if (guard || radix == null) {
        radix = 0;
      } else if (radix) {
        radix = +radix;
      }
      return nativeParseInt(toString(string).replace(reTrimStart, ''), radix || 0);
    }

    /**
     * Repeats the given string `n` times.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to repeat.
     * @param {number} [n=1] The number of times to repeat the string.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the repeated string.
     * @example
     *
     * _.repeat('*', 3);
     * // => '***'
     *
     * _.repeat('abc', 2);
     * // => 'abcabc'
     *
     * _.repeat('abc', 0);
     * // => ''
     */
    function repeat(string, n, guard) {
      if ((guard ? isIterateeCall(string, n, guard) : n === undefined)) {
        n = 1;
      } else {
        n = toInteger(n);
      }
      return baseRepeat(toString(string), n);
    }

    /**
     * Replaces matches for `pattern` in `string` with `replacement`.
     *
     * **Note:** This method is based on
     * [`String#replace`](https://mdn.io/String/replace).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to modify.
     * @param {RegExp|string} pattern The pattern to replace.
     * @param {Function|string} replacement The match replacement.
     * @returns {string} Returns the modified string.
     * @example
     *
     * _.replace('Hi Fred', 'Fred', 'Barney');
     * // => 'Hi Barney'
     */
    function replace() {
      var args = arguments,
          string = toString(args[0]);

      return args.length < 3 ? string : string.replace(args[1], args[2]);
    }

    /**
     * Converts `string` to
     * [snake case](https://en.wikipedia.org/wiki/Snake_case).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the snake cased string.
     * @example
     *
     * _.snakeCase('Foo Bar');
     * // => 'foo_bar'
     *
     * _.snakeCase('fooBar');
     * // => 'foo_bar'
     *
     * _.snakeCase('--FOO-BAR--');
     * // => 'foo_bar'
     */
    var snakeCase = createCompounder(function(result, word, index) {
      return result + (index ? '_' : '') + word.toLowerCase();
    });

    /**
     * Splits `string` by `separator`.
     *
     * **Note:** This method is based on
     * [`String#split`](https://mdn.io/String/split).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to split.
     * @param {RegExp|string} separator The separator pattern to split by.
     * @param {number} [limit] The length to truncate results to.
     * @returns {Array} Returns the string segments.
     * @example
     *
     * _.split('a-b-c', '-', 2);
     * // => ['a', 'b']
     */
    function split(string, separator, limit) {
      if (limit && typeof limit != 'number' && isIterateeCall(string, separator, limit)) {
        separator = limit = undefined;
      }
      limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
      if (!limit) {
        return [];
      }
      string = toString(string);
      if (string && (
            typeof separator == 'string' ||
            (separator != null && !isRegExp(separator))
          )) {
        separator = baseToString(separator);
        if (!separator && hasUnicode(string)) {
          return castSlice(stringToArray(string), 0, limit);
        }
      }
      return string.split(separator, limit);
    }

    /**
     * Converts `string` to
     * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
     *
     * @static
     * @memberOf _
     * @since 3.1.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the start cased string.
     * @example
     *
     * _.startCase('--foo-bar--');
     * // => 'Foo Bar'
     *
     * _.startCase('fooBar');
     * // => 'Foo Bar'
     *
     * _.startCase('__FOO_BAR__');
     * // => 'FOO BAR'
     */
    var startCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + upperFirst(word);
    });

    /**
     * Checks if `string` starts with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=0] The position to search from.
     * @returns {boolean} Returns `true` if `string` starts with `target`,
     *  else `false`.
     * @example
     *
     * _.startsWith('abc', 'a');
     * // => true
     *
     * _.startsWith('abc', 'b');
     * // => false
     *
     * _.startsWith('abc', 'b', 1);
     * // => true
     */
    function startsWith(string, target, position) {
      string = toString(string);
      position = position == null
        ? 0
        : baseClamp(toInteger(position), 0, string.length);

      target = baseToString(target);
      return string.slice(position, position + target.length) == target;
    }

    /**
     * Creates a compiled template function that can interpolate data properties
     * in "interpolate" delimiters, HTML-escape interpolated data properties in
     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
     * properties may be accessed as free variables in the template. If a setting
     * object is given, it takes precedence over `_.templateSettings` values.
     *
     * **Note:** In the development build `_.template` utilizes
     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
     * for easier debugging.
     *
     * For more information on precompiling templates see
     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
     *
     * For more information on Chrome extension sandboxes see
     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The template string.
     * @param {Object} [options={}] The options object.
     * @param {RegExp} [options.escape=_.templateSettings.escape]
     *  The HTML "escape" delimiter.
     * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
     *  The "evaluate" delimiter.
     * @param {Object} [options.imports=_.templateSettings.imports]
     *  An object to import into the template as free variables.
     * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
     *  The "interpolate" delimiter.
     * @param {string} [options.sourceURL='lodash.templateSources[n]']
     *  The sourceURL of the compiled template.
     * @param {string} [options.variable='obj']
     *  The data object variable name.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the compiled template function.
     * @example
     *
     * // Use the "interpolate" delimiter to create a compiled template.
     * var compiled = _.template('hello <%= user %>!');
     * compiled({ 'user': 'fred' });
     * // => 'hello fred!'
     *
     * // Use the HTML "escape" delimiter to escape data property values.
     * var compiled = _.template('<b><%- value %></b>');
     * compiled({ 'value': '<script>' });
     * // => '<b>&lt;script&gt;</b>'
     *
     * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the internal `print` function in "evaluate" delimiters.
     * var compiled = _.template('<% print("hello " + user); %>!');
     * compiled({ 'user': 'barney' });
     * // => 'hello barney!'
     *
     * // Use the ES template literal delimiter as an "interpolate" delimiter.
     * // Disable support by replacing the "interpolate" delimiter.
     * var compiled = _.template('hello ${ user }!');
     * compiled({ 'user': 'pebbles' });
     * // => 'hello pebbles!'
     *
     * // Use backslashes to treat delimiters as plain text.
     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
     * compiled({ 'value': 'ignored' });
     * // => '<%- value %>'
     *
     * // Use the `imports` option to import `jQuery` as `jq`.
     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the `sourceURL` option to specify a custom sourceURL for the template.
     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
     * compiled(data);
     * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
     *
     * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
     * compiled.source;
     * // => function(data) {
     * //   var __t, __p = '';
     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
     * //   return __p;
     * // }
     *
     * // Use custom template delimiters.
     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
     * var compiled = _.template('hello {{ user }}!');
     * compiled({ 'user': 'mustache' });
     * // => 'hello mustache!'
     *
     * // Use the `source` property to inline compiled templates for meaningful
     * // line numbers in error messages and stack traces.
     * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
     *   var JST = {\
     *     "main": ' + _.template(mainText).source + '\
     *   };\
     * ');
     */
    function template(string, options, guard) {
      // Based on John Resig's `tmpl` implementation
      // (http://ejohn.org/blog/javascript-micro-templating/)
      // and Laura Doktorova's doT.js (https://github.com/olado/doT).
      var settings = lodash.templateSettings;

      if (guard && isIterateeCall(string, options, guard)) {
        options = undefined;
      }
      string = toString(string);
      options = assignInWith({}, options, settings, customDefaultsAssignIn);

      var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn),
          importsKeys = keys(imports),
          importsValues = baseValues(imports, importsKeys);

      var isEscaping,
          isEvaluating,
          index = 0,
          interpolate = options.interpolate || reNoMatch,
          source = "__p += '";

      // Compile the regexp to match each delimiter.
      var reDelimiters = RegExp(
        (options.escape || reNoMatch).source + '|' +
        interpolate.source + '|' +
        (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
        (options.evaluate || reNoMatch).source + '|$'
      , 'g');

      // Use a sourceURL for easier debugging.
      var sourceURL = '//# sourceURL=' +
        ('sourceURL' in options
          ? options.sourceURL
          : ('lodash.templateSources[' + (++templateCounter) + ']')
        ) + '\n';

      string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
        interpolateValue || (interpolateValue = esTemplateValue);

        // Escape characters that can't be included in string literals.
        source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);

        // Replace delimiters with snippets.
        if (escapeValue) {
          isEscaping = true;
          source += "' +\n__e(" + escapeValue + ") +\n'";
        }
        if (evaluateValue) {
          isEvaluating = true;
          source += "';\n" + evaluateValue + ";\n__p += '";
        }
        if (interpolateValue) {
          source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
        }
        index = offset + match.length;

        // The JS engine embedded in Adobe products needs `match` returned in
        // order to produce the correct `offset` value.
        return match;
      });

      source += "';\n";

      // If `variable` is not specified wrap a with-statement around the generated
      // code to add the data object to the top of the scope chain.
      var variable = options.variable;
      if (!variable) {
        source = 'with (obj) {\n' + source + '\n}\n';
      }
      // Cleanup code by stripping empty strings.
      source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
        .replace(reEmptyStringMiddle, '$1')
        .replace(reEmptyStringTrailing, '$1;');

      // Frame code as the function body.
      source = 'function(' + (variable || 'obj') + ') {\n' +
        (variable
          ? ''
          : 'obj || (obj = {});\n'
        ) +
        "var __t, __p = ''" +
        (isEscaping
           ? ', __e = _.escape'
           : ''
        ) +
        (isEvaluating
          ? ', __j = Array.prototype.join;\n' +
            "function print() { __p += __j.call(arguments, '') }\n"
          : ';\n'
        ) +
        source +
        'return __p\n}';

      var result = attempt(function() {
        return Function(importsKeys, sourceURL + 'return ' + source)
          .apply(undefined, importsValues);
      });

      // Provide the compiled function's source by its `toString` method or
      // the `source` property as a convenience for inlining compiled templates.
      result.source = source;
      if (isError(result)) {
        throw result;
      }
      return result;
    }

    /**
     * Converts `string`, as a whole, to lower case just like
     * [String#toLowerCase](https://mdn.io/toLowerCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.toLower('--Foo-Bar--');
     * // => '--foo-bar--'
     *
     * _.toLower('fooBar');
     * // => 'foobar'
     *
     * _.toLower('__FOO_BAR__');
     * // => '__foo_bar__'
     */
    function toLower(value) {
      return toString(value).toLowerCase();
    }

    /**
     * Converts `string`, as a whole, to upper case just like
     * [String#toUpperCase](https://mdn.io/toUpperCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.toUpper('--foo-bar--');
     * // => '--FOO-BAR--'
     *
     * _.toUpper('fooBar');
     * // => 'FOOBAR'
     *
     * _.toUpper('__foo_bar__');
     * // => '__FOO_BAR__'
     */
    function toUpper(value) {
      return toString(value).toUpperCase();
    }

    /**
     * Removes leading and trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trim('  abc  ');
     * // => 'abc'
     *
     * _.trim('-_-abc-_-', '_-');
     * // => 'abc'
     *
     * _.map(['  foo  ', '  bar  '], _.trim);
     * // => ['foo', 'bar']
     */
    function trim(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrim, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          chrSymbols = stringToArray(chars),
          start = charsStartIndex(strSymbols, chrSymbols),
          end = charsEndIndex(strSymbols, chrSymbols) + 1;

      return castSlice(strSymbols, start, end).join('');
    }

    /**
     * Removes trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimEnd('  abc  ');
     * // => '  abc'
     *
     * _.trimEnd('-_-abc-_-', '_-');
     * // => '-_-abc'
     */
    function trimEnd(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrimEnd, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;

      return castSlice(strSymbols, 0, end).join('');
    }

    /**
     * Removes leading whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimStart('  abc  ');
     * // => 'abc  '
     *
     * _.trimStart('-_-abc-_-', '_-');
     * // => 'abc-_-'
     */
    function trimStart(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrimStart, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          start = charsStartIndex(strSymbols, stringToArray(chars));

      return castSlice(strSymbols, start).join('');
    }

    /**
     * Truncates `string` if it's longer than the given maximum string length.
     * The last characters of the truncated string are replaced with the omission
     * string which defaults to "...".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to truncate.
     * @param {Object} [options={}] The options object.
     * @param {number} [options.length=30] The maximum string length.
     * @param {string} [options.omission='...'] The string to indicate text is omitted.
     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
     * @returns {string} Returns the truncated string.
     * @example
     *
     * _.truncate('hi-diddly-ho there, neighborino');
     * // => 'hi-diddly-ho there, neighbo...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': ' '
     * });
     * // => 'hi-diddly-ho there,...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': /,? +/
     * });
     * // => 'hi-diddly-ho there...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'omission': ' [...]'
     * });
     * // => 'hi-diddly-ho there, neig [...]'
     */
    function truncate(string, options) {
      var length = DEFAULT_TRUNC_LENGTH,
          omission = DEFAULT_TRUNC_OMISSION;

      if (isObject(options)) {
        var separator = 'separator' in options ? options.separator : separator;
        length = 'length' in options ? toInteger(options.length) : length;
        omission = 'omission' in options ? baseToString(options.omission) : omission;
      }
      string = toString(string);

      var strLength = string.length;
      if (hasUnicode(string)) {
        var strSymbols = stringToArray(string);
        strLength = strSymbols.length;
      }
      if (length >= strLength) {
        return string;
      }
      var end = length - stringSize(omission);
      if (end < 1) {
        return omission;
      }
      var result = strSymbols
        ? castSlice(strSymbols, 0, end).join('')
        : string.slice(0, end);

      if (separator === undefined) {
        return result + omission;
      }
      if (strSymbols) {
        end += (result.length - end);
      }
      if (isRegExp(separator)) {
        if (string.slice(end).search(separator)) {
          var match,
              substring = result;

          if (!separator.global) {
            separator = RegExp(separator.source, toString(reFlags.exec(separator)) + 'g');
          }
          separator.lastIndex = 0;
          while ((match = separator.exec(substring))) {
            var newEnd = match.index;
          }
          result = result.slice(0, newEnd === undefined ? end : newEnd);
        }
      } else if (string.indexOf(baseToString(separator), end) != end) {
        var index = result.lastIndexOf(separator);
        if (index > -1) {
          result = result.slice(0, index);
        }
      }
      return result + omission;
    }

    /**
     * The inverse of `_.escape`; this method converts the HTML entities
     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
     * their corresponding characters.
     *
     * **Note:** No other HTML entities are unescaped. To unescape additional
     * HTML entities use a third-party library like [_he_](https://mths.be/he).
     *
     * @static
     * @memberOf _
     * @since 0.6.0
     * @category String
     * @param {string} [string=''] The string to unescape.
     * @returns {string} Returns the unescaped string.
     * @example
     *
     * _.unescape('fred, barney, &amp; pebbles');
     * // => 'fred, barney, & pebbles'
     */
    function unescape(string) {
      string = toString(string);
      return (string && reHasEscapedHtml.test(string))
        ? string.replace(reEscapedHtml, unescapeHtmlChar)
        : string;
    }

    /**
     * Converts `string`, as space separated words, to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.upperCase('--foo-bar');
     * // => 'FOO BAR'
     *
     * _.upperCase('fooBar');
     * // => 'FOO BAR'
     *
     * _.upperCase('__foo_bar__');
     * // => 'FOO BAR'
     */
    var upperCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + word.toUpperCase();
    });

    /**
     * Converts the first character of `string` to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.upperFirst('fred');
     * // => 'Fred'
     *
     * _.upperFirst('FRED');
     * // => 'FRED'
     */
    var upperFirst = createCaseFirst('toUpperCase');

    /**
     * Splits `string` into an array of its words.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {RegExp|string} [pattern] The pattern to match words.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the words of `string`.
     * @example
     *
     * _.words('fred, barney, & pebbles');
     * // => ['fred', 'barney', 'pebbles']
     *
     * _.words('fred, barney, & pebbles', /[^, ]+/g);
     * // => ['fred', 'barney', '&', 'pebbles']
     */
    function words(string, pattern, guard) {
      string = toString(string);
      pattern = guard ? undefined : pattern;

      if (pattern === undefined) {
        return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
      }
      return string.match(pattern) || [];
    }

    /*------------------------------------------------------------------------*/

    /**
     * Attempts to invoke `func`, returning either the result or the caught error
     * object. Any additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Function} func The function to attempt.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {*} Returns the `func` result or error object.
     * @example
     *
     * // Avoid throwing errors for invalid selectors.
     * var elements = _.attempt(function(selector) {
     *   return document.querySelectorAll(selector);
     * }, '>_>');
     *
     * if (_.isError(elements)) {
     *   elements = [];
     * }
     */
    var attempt = baseRest(function(func, args) {
      try {
        return apply(func, undefined, args);
      } catch (e) {
        return isError(e) ? e : new Error(e);
      }
    });

    /**
     * Binds methods of an object to the object itself, overwriting the existing
     * method.
     *
     * **Note:** This method doesn't set the "length" property of bound functions.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Object} object The object to bind and assign the bound methods to.
     * @param {...(string|string[])} methodNames The object method names to bind.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var view = {
     *   'label': 'docs',
     *   'click': function() {
     *     console.log('clicked ' + this.label);
     *   }
     * };
     *
     * _.bindAll(view, ['click']);
     * jQuery(element).on('click', view.click);
     * // => Logs 'clicked docs' when clicked.
     */
    var bindAll = flatRest(function(object, methodNames) {
      arrayEach(methodNames, function(key) {
        key = toKey(key);
        baseAssignValue(object, key, bind(object[key], object));
      });
      return object;
    });

    /**
     * Creates a function that iterates over `pairs` and invokes the corresponding
     * function of the first predicate to return truthy. The predicate-function
     * pairs are invoked with the `this` binding and arguments of the created
     * function.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Array} pairs The predicate-function pairs.
     * @returns {Function} Returns the new composite function.
     * @example
     *
     * var func = _.cond([
     *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
     *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
     *   [_.stubTrue,                      _.constant('no match')]
     * ]);
     *
     * func({ 'a': 1, 'b': 2 });
     * // => 'matches A'
     *
     * func({ 'a': 0, 'b': 1 });
     * // => 'matches B'
     *
     * func({ 'a': '1', 'b': '2' });
     * // => 'no match'
     */
    function cond(pairs) {
      var length = pairs == null ? 0 : pairs.length,
          toIteratee = getIteratee();

      pairs = !length ? [] : arrayMap(pairs, function(pair) {
        if (typeof pair[1] != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        return [toIteratee(pair[0]), pair[1]];
      });

      return baseRest(function(args) {
        var index = -1;
        while (++index < length) {
          var pair = pairs[index];
          if (apply(pair[0], this, args)) {
            return apply(pair[1], this, args);
          }
        }
      });
    }

    /**
     * Creates a function that invokes the predicate properties of `source` with
     * the corresponding property values of a given object, returning `true` if
     * all predicates return truthy, else `false`.
     *
     * **Note:** The created function is equivalent to `_.conformsTo` with
     * `source` partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 2, 'b': 1 },
     *   { 'a': 1, 'b': 2 }
     * ];
     *
     * _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
     * // => [{ 'a': 1, 'b': 2 }]
     */
    function conforms(source) {
      return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that returns `value`.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {*} value The value to return from the new function.
     * @returns {Function} Returns the new constant function.
     * @example
     *
     * var objects = _.times(2, _.constant({ 'a': 1 }));
     *
     * console.log(objects);
     * // => [{ 'a': 1 }, { 'a': 1 }]
     *
     * console.log(objects[0] === objects[1]);
     * // => true
     */
    function constant(value) {
      return function() {
        return value;
      };
    }

    /**
     * Checks `value` to determine whether a default value should be returned in
     * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
     * or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Util
     * @param {*} value The value to check.
     * @param {*} defaultValue The default value.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * _.defaultTo(1, 10);
     * // => 1
     *
     * _.defaultTo(undefined, 10);
     * // => 10
     */
    function defaultTo(value, defaultValue) {
      return (value == null || value !== value) ? defaultValue : value;
    }

    /**
     * Creates a function that returns the result of invoking the given functions
     * with the `this` binding of the created function, where each successive
     * invocation is supplied the return value of the previous.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flowRight
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flow([_.add, square]);
     * addSquare(1, 2);
     * // => 9
     */
    var flow = createFlow();

    /**
     * This method is like `_.flow` except that it creates a function that
     * invokes the given functions from right to left.
     *
     * @static
     * @since 3.0.0
     * @memberOf _
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flow
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flowRight([square, _.add]);
     * addSquare(1, 2);
     * // => 9
     */
    var flowRight = createFlow(true);

    /**
     * This method returns the first argument it receives.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'a': 1 };
     *
     * console.log(_.identity(object) === object);
     * // => true
     */
    function identity(value) {
      return value;
    }

    /**
     * Creates a function that invokes `func` with the arguments of the created
     * function. If `func` is a property name, the created function returns the
     * property value for a given element. If `func` is an array or object, the
     * created function returns `true` for elements that contain the equivalent
     * source properties, otherwise it returns `false`.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Util
     * @param {*} [func=_.identity] The value to convert to a callback.
     * @returns {Function} Returns the callback.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
     * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, _.iteratee(['user', 'fred']));
     * // => [{ 'user': 'fred', 'age': 40 }]
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, _.iteratee('user'));
     * // => ['barney', 'fred']
     *
     * // Create custom iteratee shorthands.
     * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
     *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
     *     return func.test(string);
     *   };
     * });
     *
     * _.filter(['abc', 'def'], /ef/);
     * // => ['def']
     */
    function iteratee(func) {
      return baseIteratee(typeof func == 'function' ? func : baseClone(func, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that performs a partial deep comparison between a given
     * object and `source`, returning `true` if the given object has equivalent
     * property values, else `false`.
     *
     * **Note:** The created function is equivalent to `_.isMatch` with `source`
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
     * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
     */
    function matches(source) {
      return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that performs a partial deep comparison between the
     * value at `path` of a given object to `srcValue`, returning `true` if the
     * object value is equivalent, else `false`.
     *
     * **Note:** Partial comparisons will match empty array and empty object
     * `srcValue` values against any array or object value, respectively. See
     * `_.isEqual` for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.find(objects, _.matchesProperty('a', 4));
     * // => { 'a': 4, 'b': 5, 'c': 6 }
     */
    function matchesProperty(path, srcValue) {
      return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that invokes the method at `path` of a given object.
     * Any additional arguments are provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': _.constant(2) } },
     *   { 'a': { 'b': _.constant(1) } }
     * ];
     *
     * _.map(objects, _.method('a.b'));
     * // => [2, 1]
     *
     * _.map(objects, _.method(['a', 'b']));
     * // => [2, 1]
     */
    var method = baseRest(function(path, args) {
      return function(object) {
        return baseInvoke(object, path, args);
      };
    });

    /**
     * The opposite of `_.method`; this method creates a function that invokes
     * the method at a given path of `object`. Any additional arguments are
     * provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Object} object The object to query.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var array = _.times(3, _.constant),
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
     * // => [2, 0]
     */
    var methodOf = baseRest(function(object, args) {
      return function(path) {
        return baseInvoke(object, path, args);
      };
    });

    /**
     * Adds all own enumerable string keyed function properties of a source
     * object to the destination object. If `object` is a function, then methods
     * are added to its prototype as well.
     *
     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
     * avoid conflicts caused by modifying the original.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Function|Object} [object=lodash] The destination object.
     * @param {Object} source The object of functions to add.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.chain=true] Specify whether mixins are chainable.
     * @returns {Function|Object} Returns `object`.
     * @example
     *
     * function vowels(string) {
     *   return _.filter(string, function(v) {
     *     return /[aeiou]/i.test(v);
     *   });
     * }
     *
     * _.mixin({ 'vowels': vowels });
     * _.vowels('fred');
     * // => ['e']
     *
     * _('fred').vowels().value();
     * // => ['e']
     *
     * _.mixin({ 'vowels': vowels }, { 'chain': false });
     * _('fred').vowels();
     * // => ['e']
     */
    function mixin(object, source, options) {
      var props = keys(source),
          methodNames = baseFunctions(source, props);

      if (options == null &&
          !(isObject(source) && (methodNames.length || !props.length))) {
        options = source;
        source = object;
        object = this;
        methodNames = baseFunctions(source, keys(source));
      }
      var chain = !(isObject(options) && 'chain' in options) || !!options.chain,
          isFunc = isFunction(object);

      arrayEach(methodNames, function(methodName) {
        var func = source[methodName];
        object[methodName] = func;
        if (isFunc) {
          object.prototype[methodName] = function() {
            var chainAll = this.__chain__;
            if (chain || chainAll) {
              var result = object(this.__wrapped__),
                  actions = result.__actions__ = copyArray(this.__actions__);

              actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
              result.__chain__ = chainAll;
              return result;
            }
            return func.apply(object, arrayPush([this.value()], arguments));
          };
        }
      });

      return object;
    }

    /**
     * Reverts the `_` variable to its previous value and returns a reference to
     * the `lodash` function.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @returns {Function} Returns the `lodash` function.
     * @example
     *
     * var lodash = _.noConflict();
     */
    function noConflict() {
      if (root._ === this) {
        root._ = oldDash;
      }
      return this;
    }

    /**
     * This method returns `undefined`.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Util
     * @example
     *
     * _.times(2, _.noop);
     * // => [undefined, undefined]
     */
    function noop() {
      // No operation performed.
    }

    /**
     * Creates a function that gets the argument at index `n`. If `n` is negative,
     * the nth argument from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [n=0] The index of the argument to return.
     * @returns {Function} Returns the new pass-thru function.
     * @example
     *
     * var func = _.nthArg(1);
     * func('a', 'b', 'c', 'd');
     * // => 'b'
     *
     * var func = _.nthArg(-2);
     * func('a', 'b', 'c', 'd');
     * // => 'c'
     */
    function nthArg(n) {
      n = toInteger(n);
      return baseRest(function(args) {
        return baseNth(args, n);
      });
    }

    /**
     * Creates a function that invokes `iteratees` with the arguments it receives
     * and returns their results.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to invoke.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.over([Math.max, Math.min]);
     *
     * func(1, 2, 3, 4);
     * // => [4, 1]
     */
    var over = createOver(arrayMap);

    /**
     * Creates a function that checks if **all** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overEvery([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => false
     *
     * func(NaN);
     * // => false
     */
    var overEvery = createOver(arrayEvery);

    /**
     * Creates a function that checks if **any** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overSome([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => true
     *
     * func(NaN);
     * // => false
     */
    var overSome = createOver(arraySome);

    /**
     * Creates a function that returns the value at `path` of a given object.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': 2 } },
     *   { 'a': { 'b': 1 } }
     * ];
     *
     * _.map(objects, _.property('a.b'));
     * // => [2, 1]
     *
     * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
     * // => [1, 2]
     */
    function property(path) {
      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
    }

    /**
     * The opposite of `_.property`; this method creates a function that returns
     * the value at a given path of `object`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} object The object to query.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var array = [0, 1, 2],
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
     * // => [2, 0]
     */
    function propertyOf(object) {
      return function(path) {
        return object == null ? undefined : baseGet(object, path);
      };
    }

    /**
     * Creates an array of numbers (positive and/or negative) progressing from
     * `start` up to, but not including, `end`. A step of `-1` is used if a negative
     * `start` is specified without an `end` or `step`. If `end` is not specified,
     * it's set to `start` with `start` then set to `0`.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.rangeRight
     * @example
     *
     * _.range(4);
     * // => [0, 1, 2, 3]
     *
     * _.range(-4);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 5);
     * // => [1, 2, 3, 4]
     *
     * _.range(0, 20, 5);
     * // => [0, 5, 10, 15]
     *
     * _.range(0, -4, -1);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.range(0);
     * // => []
     */
    var range = createRange();

    /**
     * This method is like `_.range` except that it populates values in
     * descending order.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.range
     * @example
     *
     * _.rangeRight(4);
     * // => [3, 2, 1, 0]
     *
     * _.rangeRight(-4);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 5);
     * // => [4, 3, 2, 1]
     *
     * _.rangeRight(0, 20, 5);
     * // => [15, 10, 5, 0]
     *
     * _.rangeRight(0, -4, -1);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.rangeRight(0);
     * // => []
     */
    var rangeRight = createRange(true);

    /**
     * This method returns a new empty array.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Array} Returns the new empty array.
     * @example
     *
     * var arrays = _.times(2, _.stubArray);
     *
     * console.log(arrays);
     * // => [[], []]
     *
     * console.log(arrays[0] === arrays[1]);
     * // => false
     */
    function stubArray() {
      return [];
    }

    /**
     * This method returns `false`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `false`.
     * @example
     *
     * _.times(2, _.stubFalse);
     * // => [false, false]
     */
    function stubFalse() {
      return false;
    }

    /**
     * This method returns a new empty object.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Object} Returns the new empty object.
     * @example
     *
     * var objects = _.times(2, _.stubObject);
     *
     * console.log(objects);
     * // => [{}, {}]
     *
     * console.log(objects[0] === objects[1]);
     * // => false
     */
    function stubObject() {
      return {};
    }

    /**
     * This method returns an empty string.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {string} Returns the empty string.
     * @example
     *
     * _.times(2, _.stubString);
     * // => ['', '']
     */
    function stubString() {
      return '';
    }

    /**
     * This method returns `true`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `true`.
     * @example
     *
     * _.times(2, _.stubTrue);
     * // => [true, true]
     */
    function stubTrue() {
      return true;
    }

    /**
     * Invokes the iteratee `n` times, returning an array of the results of
     * each invocation. The iteratee is invoked with one argument; (index).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.times(3, String);
     * // => ['0', '1', '2']
     *
     *  _.times(4, _.constant(0));
     * // => [0, 0, 0, 0]
     */
    function times(n, iteratee) {
      n = toInteger(n);
      if (n < 1 || n > MAX_SAFE_INTEGER) {
        return [];
      }
      var index = MAX_ARRAY_LENGTH,
          length = nativeMin(n, MAX_ARRAY_LENGTH);

      iteratee = getIteratee(iteratee);
      n -= MAX_ARRAY_LENGTH;

      var result = baseTimes(length, iteratee);
      while (++index < n) {
        iteratee(index);
      }
      return result;
    }

    /**
     * Converts `value` to a property path array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {*} value The value to convert.
     * @returns {Array} Returns the new property path array.
     * @example
     *
     * _.toPath('a.b.c');
     * // => ['a', 'b', 'c']
     *
     * _.toPath('a[0].b.c');
     * // => ['a', '0', 'b', 'c']
     */
    function toPath(value) {
      if (isArray(value)) {
        return arrayMap(value, toKey);
      }
      return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
    }

    /**
     * Generates a unique ID. If `prefix` is given, the ID is appended to it.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {string} [prefix=''] The value to prefix the ID with.
     * @returns {string} Returns the unique ID.
     * @example
     *
     * _.uniqueId('contact_');
     * // => 'contact_104'
     *
     * _.uniqueId();
     * // => '105'
     */
    function uniqueId(prefix) {
      var id = ++idCounter;
      return toString(prefix) + id;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Adds two numbers.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {number} augend The first number in an addition.
     * @param {number} addend The second number in an addition.
     * @returns {number} Returns the total.
     * @example
     *
     * _.add(6, 4);
     * // => 10
     */
    var add = createMathOperation(function(augend, addend) {
      return augend + addend;
    }, 0);

    /**
     * Computes `number` rounded up to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round up.
     * @param {number} [precision=0] The precision to round up to.
     * @returns {number} Returns the rounded up number.
     * @example
     *
     * _.ceil(4.006);
     * // => 5
     *
     * _.ceil(6.004, 2);
     * // => 6.01
     *
     * _.ceil(6040, -2);
     * // => 6100
     */
    var ceil = createRound('ceil');

    /**
     * Divide two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} dividend The first number in a division.
     * @param {number} divisor The second number in a division.
     * @returns {number} Returns the quotient.
     * @example
     *
     * _.divide(6, 4);
     * // => 1.5
     */
    var divide = createMathOperation(function(dividend, divisor) {
      return dividend / divisor;
    }, 1);

    /**
     * Computes `number` rounded down to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round down.
     * @param {number} [precision=0] The precision to round down to.
     * @returns {number} Returns the rounded down number.
     * @example
     *
     * _.floor(4.006);
     * // => 4
     *
     * _.floor(0.046, 2);
     * // => 0.04
     *
     * _.floor(4060, -2);
     * // => 4000
     */
    var floor = createRound('floor');

    /**
     * Computes the maximum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * _.max([4, 2, 8, 6]);
     * // => 8
     *
     * _.max([]);
     * // => undefined
     */
    function max(array) {
      return (array && array.length)
        ? baseExtremum(array, identity, baseGt)
        : undefined;
    }

    /**
     * This method is like `_.max` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.maxBy(objects, function(o) { return o.n; });
     * // => { 'n': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.maxBy(objects, 'n');
     * // => { 'n': 2 }
     */
    function maxBy(array, iteratee) {
      return (array && array.length)
        ? baseExtremum(array, getIteratee(iteratee, 2), baseGt)
        : undefined;
    }

    /**
     * Computes the mean of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the mean.
     * @example
     *
     * _.mean([4, 2, 8, 6]);
     * // => 5
     */
    function mean(array) {
      return baseMean(array, identity);
    }

    /**
     * This method is like `_.mean` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be averaged.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the mean.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.meanBy(objects, function(o) { return o.n; });
     * // => 5
     *
     * // The `_.property` iteratee shorthand.
     * _.meanBy(objects, 'n');
     * // => 5
     */
    function meanBy(array, iteratee) {
      return baseMean(array, getIteratee(iteratee, 2));
    }

    /**
     * Computes the minimum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * _.min([4, 2, 8, 6]);
     * // => 2
     *
     * _.min([]);
     * // => undefined
     */
    function min(array) {
      return (array && array.length)
        ? baseExtremum(array, identity, baseLt)
        : undefined;
    }

    /**
     * This method is like `_.min` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.minBy(objects, function(o) { return o.n; });
     * // => { 'n': 1 }
     *
     * // The `_.property` iteratee shorthand.
     * _.minBy(objects, 'n');
     * // => { 'n': 1 }
     */
    function minBy(array, iteratee) {
      return (array && array.length)
        ? baseExtremum(array, getIteratee(iteratee, 2), baseLt)
        : undefined;
    }

    /**
     * Multiply two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} multiplier The first number in a multiplication.
     * @param {number} multiplicand The second number in a multiplication.
     * @returns {number} Returns the product.
     * @example
     *
     * _.multiply(6, 4);
     * // => 24
     */
    var multiply = createMathOperation(function(multiplier, multiplicand) {
      return multiplier * multiplicand;
    }, 1);

    /**
     * Computes `number` rounded to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round.
     * @param {number} [precision=0] The precision to round to.
     * @returns {number} Returns the rounded number.
     * @example
     *
     * _.round(4.006);
     * // => 4
     *
     * _.round(4.006, 2);
     * // => 4.01
     *
     * _.round(4060, -2);
     * // => 4100
     */
    var round = createRound('round');

    /**
     * Subtract two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {number} minuend The first number in a subtraction.
     * @param {number} subtrahend The second number in a subtraction.
     * @returns {number} Returns the difference.
     * @example
     *
     * _.subtract(6, 4);
     * // => 2
     */
    var subtract = createMathOperation(function(minuend, subtrahend) {
      return minuend - subtrahend;
    }, 0);

    /**
     * Computes the sum of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the sum.
     * @example
     *
     * _.sum([4, 2, 8, 6]);
     * // => 20
     */
    function sum(array) {
      return (array && array.length)
        ? baseSum(array, identity)
        : 0;
    }

    /**
     * This method is like `_.sum` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be summed.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the sum.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.sumBy(objects, function(o) { return o.n; });
     * // => 20
     *
     * // The `_.property` iteratee shorthand.
     * _.sumBy(objects, 'n');
     * // => 20
     */
    function sumBy(array, iteratee) {
      return (array && array.length)
        ? baseSum(array, getIteratee(iteratee, 2))
        : 0;
    }

    /*------------------------------------------------------------------------*/

    // Add methods that return wrapped values in chain sequences.
    lodash.after = after;
    lodash.ary = ary;
    lodash.assign = assign;
    lodash.assignIn = assignIn;
    lodash.assignInWith = assignInWith;
    lodash.assignWith = assignWith;
    lodash.at = at;
    lodash.before = before;
    lodash.bind = bind;
    lodash.bindAll = bindAll;
    lodash.bindKey = bindKey;
    lodash.castArray = castArray;
    lodash.chain = chain;
    lodash.chunk = chunk;
    lodash.compact = compact;
    lodash.concat = concat;
    lodash.cond = cond;
    lodash.conforms = conforms;
    lodash.constant = constant;
    lodash.countBy = countBy;
    lodash.create = create;
    lodash.curry = curry;
    lodash.curryRight = curryRight;
    lodash.debounce = debounce;
    lodash.defaults = defaults;
    lodash.defaultsDeep = defaultsDeep;
    lodash.defer = defer;
    lodash.delay = delay;
    lodash.difference = difference;
    lodash.differenceBy = differenceBy;
    lodash.differenceWith = differenceWith;
    lodash.drop = drop;
    lodash.dropRight = dropRight;
    lodash.dropRightWhile = dropRightWhile;
    lodash.dropWhile = dropWhile;
    lodash.fill = fill;
    lodash.filter = filter;
    lodash.flatMap = flatMap;
    lodash.flatMapDeep = flatMapDeep;
    lodash.flatMapDepth = flatMapDepth;
    lodash.flatten = flatten;
    lodash.flattenDeep = flattenDeep;
    lodash.flattenDepth = flattenDepth;
    lodash.flip = flip;
    lodash.flow = flow;
    lodash.flowRight = flowRight;
    lodash.fromPairs = fromPairs;
    lodash.functions = functions;
    lodash.functionsIn = functionsIn;
    lodash.groupBy = groupBy;
    lodash.initial = initial;
    lodash.intersection = intersection;
    lodash.intersectionBy = intersectionBy;
    lodash.intersectionWith = intersectionWith;
    lodash.invert = invert;
    lodash.invertBy = invertBy;
    lodash.invokeMap = invokeMap;
    lodash.iteratee = iteratee;
    lodash.keyBy = keyBy;
    lodash.keys = keys;
    lodash.keysIn = keysIn;
    lodash.map = map;
    lodash.mapKeys = mapKeys;
    lodash.mapValues = mapValues;
    lodash.matches = matches;
    lodash.matchesProperty = matchesProperty;
    lodash.memoize = memoize;
    lodash.merge = merge;
    lodash.mergeWith = mergeWith;
    lodash.method = method;
    lodash.methodOf = methodOf;
    lodash.mixin = mixin;
    lodash.negate = negate;
    lodash.nthArg = nthArg;
    lodash.omit = omit;
    lodash.omitBy = omitBy;
    lodash.once = once;
    lodash.orderBy = orderBy;
    lodash.over = over;
    lodash.overArgs = overArgs;
    lodash.overEvery = overEvery;
    lodash.overSome = overSome;
    lodash.partial = partial;
    lodash.partialRight = partialRight;
    lodash.partition = partition;
    lodash.pick = pick;
    lodash.pickBy = pickBy;
    lodash.property = property;
    lodash.propertyOf = propertyOf;
    lodash.pull = pull;
    lodash.pullAll = pullAll;
    lodash.pullAllBy = pullAllBy;
    lodash.pullAllWith = pullAllWith;
    lodash.pullAt = pullAt;
    lodash.range = range;
    lodash.rangeRight = rangeRight;
    lodash.rearg = rearg;
    lodash.reject = reject;
    lodash.remove = remove;
    lodash.rest = rest;
    lodash.reverse = reverse;
    lodash.sampleSize = sampleSize;
    lodash.set = set;
    lodash.setWith = setWith;
    lodash.shuffle = shuffle;
    lodash.slice = slice;
    lodash.sortBy = sortBy;
    lodash.sortedUniq = sortedUniq;
    lodash.sortedUniqBy = sortedUniqBy;
    lodash.split = split;
    lodash.spread = spread;
    lodash.tail = tail;
    lodash.take = take;
    lodash.takeRight = takeRight;
    lodash.takeRightWhile = takeRightWhile;
    lodash.takeWhile = takeWhile;
    lodash.tap = tap;
    lodash.throttle = throttle;
    lodash.thru = thru;
    lodash.toArray = toArray;
    lodash.toPairs = toPairs;
    lodash.toPairsIn = toPairsIn;
    lodash.toPath = toPath;
    lodash.toPlainObject = toPlainObject;
    lodash.transform = transform;
    lodash.unary = unary;
    lodash.union = union;
    lodash.unionBy = unionBy;
    lodash.unionWith = unionWith;
    lodash.uniq = uniq;
    lodash.uniqBy = uniqBy;
    lodash.uniqWith = uniqWith;
    lodash.unset = unset;
    lodash.unzip = unzip;
    lodash.unzipWith = unzipWith;
    lodash.update = update;
    lodash.updateWith = updateWith;
    lodash.values = values;
    lodash.valuesIn = valuesIn;
    lodash.without = without;
    lodash.words = words;
    lodash.wrap = wrap;
    lodash.xor = xor;
    lodash.xorBy = xorBy;
    lodash.xorWith = xorWith;
    lodash.zip = zip;
    lodash.zipObject = zipObject;
    lodash.zipObjectDeep = zipObjectDeep;
    lodash.zipWith = zipWith;

    // Add aliases.
    lodash.entries = toPairs;
    lodash.entriesIn = toPairsIn;
    lodash.extend = assignIn;
    lodash.extendWith = assignInWith;

    // Add methods to `lodash.prototype`.
    mixin(lodash, lodash);

    /*------------------------------------------------------------------------*/

    // Add methods that return unwrapped values in chain sequences.
    lodash.add = add;
    lodash.attempt = attempt;
    lodash.camelCase = camelCase;
    lodash.capitalize = capitalize;
    lodash.ceil = ceil;
    lodash.clamp = clamp;
    lodash.clone = clone;
    lodash.cloneDeep = cloneDeep;
    lodash.cloneDeepWith = cloneDeepWith;
    lodash.cloneWith = cloneWith;
    lodash.conformsTo = conformsTo;
    lodash.deburr = deburr;
    lodash.defaultTo = defaultTo;
    lodash.divide = divide;
    lodash.endsWith = endsWith;
    lodash.eq = eq;
    lodash.escape = escape;
    lodash.escapeRegExp = escapeRegExp;
    lodash.every = every;
    lodash.find = find;
    lodash.findIndex = findIndex;
    lodash.findKey = findKey;
    lodash.findLast = findLast;
    lodash.findLastIndex = findLastIndex;
    lodash.findLastKey = findLastKey;
    lodash.floor = floor;
    lodash.forEach = forEach;
    lodash.forEachRight = forEachRight;
    lodash.forIn = forIn;
    lodash.forInRight = forInRight;
    lodash.forOwn = forOwn;
    lodash.forOwnRight = forOwnRight;
    lodash.get = get;
    lodash.gt = gt;
    lodash.gte = gte;
    lodash.has = has;
    lodash.hasIn = hasIn;
    lodash.head = head;
    lodash.identity = identity;
    lodash.includes = includes;
    lodash.indexOf = indexOf;
    lodash.inRange = inRange;
    lodash.invoke = invoke;
    lodash.isArguments = isArguments;
    lodash.isArray = isArray;
    lodash.isArrayBuffer = isArrayBuffer;
    lodash.isArrayLike = isArrayLike;
    lodash.isArrayLikeObject = isArrayLikeObject;
    lodash.isBoolean = isBoolean;
    lodash.isBuffer = isBuffer;
    lodash.isDate = isDate;
    lodash.isElement = isElement;
    lodash.isEmpty = isEmpty;
    lodash.isEqual = isEqual;
    lodash.isEqualWith = isEqualWith;
    lodash.isError = isError;
    lodash.isFinite = isFinite;
    lodash.isFunction = isFunction;
    lodash.isInteger = isInteger;
    lodash.isLength = isLength;
    lodash.isMap = isMap;
    lodash.isMatch = isMatch;
    lodash.isMatchWith = isMatchWith;
    lodash.isNaN = isNaN;
    lodash.isNative = isNative;
    lodash.isNil = isNil;
    lodash.isNull = isNull;
    lodash.isNumber = isNumber;
    lodash.isObject = isObject;
    lodash.isObjectLike = isObjectLike;
    lodash.isPlainObject = isPlainObject;
    lodash.isRegExp = isRegExp;
    lodash.isSafeInteger = isSafeInteger;
    lodash.isSet = isSet;
    lodash.isString = isString;
    lodash.isSymbol = isSymbol;
    lodash.isTypedArray = isTypedArray;
    lodash.isUndefined = isUndefined;
    lodash.isWeakMap = isWeakMap;
    lodash.isWeakSet = isWeakSet;
    lodash.join = join;
    lodash.kebabCase = kebabCase;
    lodash.last = last;
    lodash.lastIndexOf = lastIndexOf;
    lodash.lowerCase = lowerCase;
    lodash.lowerFirst = lowerFirst;
    lodash.lt = lt;
    lodash.lte = lte;
    lodash.max = max;
    lodash.maxBy = maxBy;
    lodash.mean = mean;
    lodash.meanBy = meanBy;
    lodash.min = min;
    lodash.minBy = minBy;
    lodash.stubArray = stubArray;
    lodash.stubFalse = stubFalse;
    lodash.stubObject = stubObject;
    lodash.stubString = stubString;
    lodash.stubTrue = stubTrue;
    lodash.multiply = multiply;
    lodash.nth = nth;
    lodash.noConflict = noConflict;
    lodash.noop = noop;
    lodash.now = now;
    lodash.pad = pad;
    lodash.padEnd = padEnd;
    lodash.padStart = padStart;
    lodash.parseInt = parseInt;
    lodash.random = random;
    lodash.reduce = reduce;
    lodash.reduceRight = reduceRight;
    lodash.repeat = repeat;
    lodash.replace = replace;
    lodash.result = result;
    lodash.round = round;
    lodash.runInContext = runInContext;
    lodash.sample = sample;
    lodash.size = size;
    lodash.snakeCase = snakeCase;
    lodash.some = some;
    lodash.sortedIndex = sortedIndex;
    lodash.sortedIndexBy = sortedIndexBy;
    lodash.sortedIndexOf = sortedIndexOf;
    lodash.sortedLastIndex = sortedLastIndex;
    lodash.sortedLastIndexBy = sortedLastIndexBy;
    lodash.sortedLastIndexOf = sortedLastIndexOf;
    lodash.startCase = startCase;
    lodash.startsWith = startsWith;
    lodash.subtract = subtract;
    lodash.sum = sum;
    lodash.sumBy = sumBy;
    lodash.template = template;
    lodash.times = times;
    lodash.toFinite = toFinite;
    lodash.toInteger = toInteger;
    lodash.toLength = toLength;
    lodash.toLower = toLower;
    lodash.toNumber = toNumber;
    lodash.toSafeInteger = toSafeInteger;
    lodash.toString = toString;
    lodash.toUpper = toUpper;
    lodash.trim = trim;
    lodash.trimEnd = trimEnd;
    lodash.trimStart = trimStart;
    lodash.truncate = truncate;
    lodash.unescape = unescape;
    lodash.uniqueId = uniqueId;
    lodash.upperCase = upperCase;
    lodash.upperFirst = upperFirst;

    // Add aliases.
    lodash.each = forEach;
    lodash.eachRight = forEachRight;
    lodash.first = head;

    mixin(lodash, (function() {
      var source = {};
      baseForOwn(lodash, function(func, methodName) {
        if (!hasOwnProperty.call(lodash.prototype, methodName)) {
          source[methodName] = func;
        }
      });
      return source;
    }()), { 'chain': false });

    /*------------------------------------------------------------------------*/

    /**
     * The semantic version number.
     *
     * @static
     * @memberOf _
     * @type {string}
     */
    lodash.VERSION = VERSION;

    // Assign default placeholders.
    arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(methodName) {
      lodash[methodName].placeholder = lodash;
    });

    // Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
    arrayEach(['drop', 'take'], function(methodName, index) {
      LazyWrapper.prototype[methodName] = function(n) {
        n = n === undefined ? 1 : nativeMax(toInteger(n), 0);

        var result = (this.__filtered__ && !index)
          ? new LazyWrapper(this)
          : this.clone();

        if (result.__filtered__) {
          result.__takeCount__ = nativeMin(n, result.__takeCount__);
        } else {
          result.__views__.push({
            'size': nativeMin(n, MAX_ARRAY_LENGTH),
            'type': methodName + (result.__dir__ < 0 ? 'Right' : '')
          });
        }
        return result;
      };

      LazyWrapper.prototype[methodName + 'Right'] = function(n) {
        return this.reverse()[methodName](n).reverse();
      };
    });

    // Add `LazyWrapper` methods that accept an `iteratee` value.
    arrayEach(['filter', 'map', 'takeWhile'], function(methodName, index) {
      var type = index + 1,
          isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;

      LazyWrapper.prototype[methodName] = function(iteratee) {
        var result = this.clone();
        result.__iteratees__.push({
          'iteratee': getIteratee(iteratee, 3),
          'type': type
        });
        result.__filtered__ = result.__filtered__ || isFilter;
        return result;
      };
    });

    // Add `LazyWrapper` methods for `_.head` and `_.last`.
    arrayEach(['head', 'last'], function(methodName, index) {
      var takeName = 'take' + (index ? 'Right' : '');

      LazyWrapper.prototype[methodName] = function() {
        return this[takeName](1).value()[0];
      };
    });

    // Add `LazyWrapper` methods for `_.initial` and `_.tail`.
    arrayEach(['initial', 'tail'], function(methodName, index) {
      var dropName = 'drop' + (index ? '' : 'Right');

      LazyWrapper.prototype[methodName] = function() {
        return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
      };
    });

    LazyWrapper.prototype.compact = function() {
      return this.filter(identity);
    };

    LazyWrapper.prototype.find = function(predicate) {
      return this.filter(predicate).head();
    };

    LazyWrapper.prototype.findLast = function(predicate) {
      return this.reverse().find(predicate);
    };

    LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
      if (typeof path == 'function') {
        return new LazyWrapper(this);
      }
      return this.map(function(value) {
        return baseInvoke(value, path, args);
      });
    });

    LazyWrapper.prototype.reject = function(predicate) {
      return this.filter(negate(getIteratee(predicate)));
    };

    LazyWrapper.prototype.slice = function(start, end) {
      start = toInteger(start);

      var result = this;
      if (result.__filtered__ && (start > 0 || end < 0)) {
        return new LazyWrapper(result);
      }
      if (start < 0) {
        result = result.takeRight(-start);
      } else if (start) {
        result = result.drop(start);
      }
      if (end !== undefined) {
        end = toInteger(end);
        result = end < 0 ? result.dropRight(-end) : result.take(end - start);
      }
      return result;
    };

    LazyWrapper.prototype.takeRightWhile = function(predicate) {
      return this.reverse().takeWhile(predicate).reverse();
    };

    LazyWrapper.prototype.toArray = function() {
      return this.take(MAX_ARRAY_LENGTH);
    };

    // Add `LazyWrapper` methods to `lodash.prototype`.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName),
          isTaker = /^(?:head|last)$/.test(methodName),
          lodashFunc = lodash[isTaker ? ('take' + (methodName == 'last' ? 'Right' : '')) : methodName],
          retUnwrapped = isTaker || /^find/.test(methodName);

      if (!lodashFunc) {
        return;
      }
      lodash.prototype[methodName] = function() {
        var value = this.__wrapped__,
            args = isTaker ? [1] : arguments,
            isLazy = value instanceof LazyWrapper,
            iteratee = args[0],
            useLazy = isLazy || isArray(value);

        var interceptor = function(value) {
          var result = lodashFunc.apply(lodash, arrayPush([value], args));
          return (isTaker && chainAll) ? result[0] : result;
        };

        if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
          // Avoid lazy use if the iteratee has a "length" value other than `1`.
          isLazy = useLazy = false;
        }
        var chainAll = this.__chain__,
            isHybrid = !!this.__actions__.length,
            isUnwrapped = retUnwrapped && !chainAll,
            onlyLazy = isLazy && !isHybrid;

        if (!retUnwrapped && useLazy) {
          value = onlyLazy ? value : new LazyWrapper(this);
          var result = func.apply(value, args);
          result.__actions__.push({ 'func': thru, 'args': [interceptor], 'thisArg': undefined });
          return new LodashWrapper(result, chainAll);
        }
        if (isUnwrapped && onlyLazy) {
          return func.apply(this, args);
        }
        result = this.thru(interceptor);
        return isUnwrapped ? (isTaker ? result.value()[0] : result.value()) : result;
      };
    });

    // Add `Array` methods to `lodash.prototype`.
    arrayEach(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function(methodName) {
      var func = arrayProto[methodName],
          chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
          retUnwrapped = /^(?:pop|shift)$/.test(methodName);

      lodash.prototype[methodName] = function() {
        var args = arguments;
        if (retUnwrapped && !this.__chain__) {
          var value = this.value();
          return func.apply(isArray(value) ? value : [], args);
        }
        return this[chainName](function(value) {
          return func.apply(isArray(value) ? value : [], args);
        });
      };
    });

    // Map minified method names to their real names.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var lodashFunc = lodash[methodName];
      if (lodashFunc) {
        var key = (lodashFunc.name + ''),
            names = realNames[key] || (realNames[key] = []);

        names.push({ 'name': methodName, 'func': lodashFunc });
      }
    });

    realNames[createHybrid(undefined, WRAP_BIND_KEY_FLAG).name] = [{
      'name': 'wrapper',
      'func': undefined
    }];

    // Add methods to `LazyWrapper`.
    LazyWrapper.prototype.clone = lazyClone;
    LazyWrapper.prototype.reverse = lazyReverse;
    LazyWrapper.prototype.value = lazyValue;

    // Add chain sequence methods to the `lodash` wrapper.
    lodash.prototype.at = wrapperAt;
    lodash.prototype.chain = wrapperChain;
    lodash.prototype.commit = wrapperCommit;
    lodash.prototype.next = wrapperNext;
    lodash.prototype.plant = wrapperPlant;
    lodash.prototype.reverse = wrapperReverse;
    lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;

    // Add lazy aliases.
    lodash.prototype.first = lodash.prototype.head;

    if (symIterator) {
      lodash.prototype[symIterator] = wrapperToIterator;
    }
    return lodash;
  });

  /*--------------------------------------------------------------------------*/

  // Export lodash.
  var _ = runInContext();

  // Some AMD build optimizers, like r.js, check for condition patterns like:
  if (true) {
    // Expose Lodash on the global object to prevent errors when Lodash is
    // loaded by a script tag in the presence of an AMD loader.
    // See http://requirejs.org/docs/errors.html#mismatch for more details.
    // Use `_.noConflict` to remove Lodash from the global object.
    root._ = _;

    // Define as an anonymous module so, through path mapping, it can be
    // referenced as the "underscore" module.
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
      return _;
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
  // Check for `exports` after `define` in case a build optimizer adds it.
  else if (freeModule) {
    // Export for Node.js.
    (freeModule.exports = _)._ = _;
    // Export for CommonJS support.
    freeExports._ = _;
  }
  else {
    // Export to the global object.
    root._ = _;
  }
}.call(this));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13), __webpack_require__(14)(module)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__(0);
var Section = /** @class */ (function () {
    function Section(label, fontSize, precision, x_axis, y_axis, ger, ogd, pmc) {
        this.label = label;
        this.fontSize = fontSize;
        this.precision = precision;
        this.x_axis = x_axis;
        this.y_axis = y_axis;
        this.ger = ger;
        this.ogd = ogd;
        this.pmc = pmc;
    }
    Section.prototype.getTextForSelectedVersion = function (version) {
        var v;
        if (version == "ger") {
            v = this.ger;
        }
        else if (version == "ogd") {
            v = this.ogd;
        }
        else if (version == "pmc") {
            v = this.pmc;
        }
        return v;
    };
    Section.prototype.displayText = function (showSelector, version, divCounter, template, util) {
        var div = "collapse" + divCounter;
        //create a new div and append to accordion div. Add 'Section ' + to line 48 for optional label
        var element = $('<div class="panel panel-default">' +
            '<div class="panel-heading" data-toggle="collapse" href="#' + div + '" class="accordion-toggle" >' +
            '<h4 class="panel-title">' +
            '<a class="accordion-header">' +
            this.label + '<span class="glyphicon glyphicon-remove close-panel" style="float:right"></span></a>' +
            '</h4>' +
            '</div>' +
            '<div id="' + div + '" class="panel-collapse collapse in"><div class="panel-body" value="' + this.label + '"></div>').appendTo('#accordion');
        var text = this.getTextForSelectedVersion(version);
        //showSelector will be true when an individual Section/Circle is clicked.  Will be false when a line is clicked.
        if (showSelector) {
            //append the language selector
            var langVersion = template == "pt" ? 'pt-lang-version.html' : 'lang-version.html';
            $('#' + div + ' .panel-body').append($('<div>').load(langVersion, function () {
                $('.version-selector').val(version);
            }));
            element.addClass("individual-section");
        }
        $('#' + div + ' .panel-body').attr('ger', this.getTextForSelectedVersion('ger'));
        $('#' + div + ' .panel-body').attr('ogd', this.getTextForSelectedVersion('ogd'));
        $('#' + div + ' .panel-body').attr('pmc', this.getTextForSelectedVersion('pmc'));
        $('#' + div + ' .panel-body').append($('<li class="text-display-li">' + text + '</li>').load(text, function () {
            MathJax.Hub.Queue(["Typeset", MathJax.Hub, div]);
        }));
        $(".accordion-column").show();
        //the Collapseable panels will now show, and the tractatus map will move over to the right.
        $(".map-column").removeClass('col-md-12').addClass('col-md-9');
        //check if page is pt
        if (template == 'pt') {
            var label = this.label;
            var textLabel = label.toString();
            var returnVal = util.findDiff(textLabel, version);
            $('#' + div).append('<br /><div class="pnum">text difference when compared to TLP ' + util.ptToTlp(textLabel) + '</div>');
            $('#' + div).append(returnVal);
        }
        return divCounter + 1;
    };
    // if the circle is in the current start and end range, use its original color. If not, make it grey
    Section.prototype.checkCircleColor = function (sections, startValue, color) {
        var startVal = Number(startValue);
        var resultStart = _.includes(sections, startVal);
        if (resultStart === true) {
            return color;
        }
        else {
            return '#E8E8EE';
        }
    };
    return Section;
}());
exports.Section = Section;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
///<reference path="reference.ts"/>
var _ = __webpack_require__(0);
var JsDiff = __webpack_require__(3);
var Section_1 = __webpack_require__(1);
var PTSection_1 = __webpack_require__(10);
var Utility;
(function (Utility) {
    var Utils = /** @class */ (function () {
        function Utils() {
        }
        Utils.prototype.setup = function () {
            //populate the ptSectionAr array
            var ptSectionAr = [];
            $.each(this.container.ref.ptSectionsJson.sections, function () {
                var o = $(this)[0];
                var ptSection = new PTSection_1.PTSection(o.label, o.page, o.tlp, o.pmc, o.ger);
                ptSectionAr.push(ptSection);
            });
            this._ptSectionAr = ptSectionAr;
        };
        //find the tlp sections that correspond to the pt label
        Utils.prototype.ptToTlp = function (textLabel) {
            var ptsec, sectionNum;
            ptsec = _.find(this.container.ref.ptSectionsJson.sections, function (obj) {
                return obj.label == textLabel;
            });
            sectionNum = ptsec.tlp;
            return sectionNum;
        };
        // create an HTML fragment of color-coded text differences between a specified PT number and its corresponding TLP section
        Utils.prototype.findDiff = function (textLabel, lang) {
            var sectionNum = this.ptToTlp(textLabel), sectionContent = this.createHTML(textLabel), sectionText = $(sectionContent).find("." + lang).text(), diff, fragment = $('<div class="diff"></div>');
            for (var i = 0; i < sectionNum.length; i++) {
                this.container.ref.sectionsJson.sections.forEach(function (d) {
                    var sec = new Section_1.Section(d.label, d.fontSize, d.precision, d.x_axis, d.y_axis, d.ger, d.ogd, d.pmc);
                    if (d.label == sectionNum[i]) {
                        var result = sec.getTextForSelectedVersion(lang);
                        result = result.replace(/<\/?[^>]+(>|$)/g, "");
                        sectionText = sectionText.replace(/<\/?[^>]+(>|$)/g, "");
                        diff = JsDiff.diffWords(result, sectionText);
                        diff.forEach(function (part) {
                            // blue for additions, red for deletions
                            // grey for common parts
                            var color = part.added ? 'red' :
                                part.removed ? 'blue' : 'grey';
                            var span = document.createElement('span');
                            span.style.color = color;
                            span.appendChild(document
                                .createTextNode(part.value));
                            $(fragment).append(span);
                        });
                        $(fragment).append("</br/><br/>");
                    }
                });
            }
            return fragment;
        };
        Utils.prototype.createHTML = function (textLabel) {
            var ptsec = _.find(this._ptSectionAr, function (obj) {
                return obj.label.toString() == textLabel;
            });
            var html = "<div class=\"sections\"><div class=\"pnum\" id=\"p" + ptsec.label + "\">" + ptsec.label + "</div>\n            <div class=\"ger\">" + ptsec.ger + "</div>\n            <div class=\"pmc\">" + ptsec.pmc + "</div></div>";
            return html;
        };
        Object.defineProperty(Utils.prototype, "ptSectionAr", {
            get: function () {
                return this._ptSectionAr;
            },
            set: function (value) {
                this._ptSectionAr = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Utils.prototype, "container", {
            get: function () {
                return this._container;
            },
            set: function (value) {
                this._container = value;
            },
            enumerable: true,
            configurable: true
        });
        return Utils;
    }());
    Utility.Utils = Utils;
})(Utility = exports.Utility || (exports.Utility = {}));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/*!

 diff v3.4.0

Software License Agreement (BSD License)

Copyright (c) 2009-2015, Kevin Decker <kpdecker@gmail.com>

All rights reserved.

Redistribution and use of this software in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above
  copyright notice, this list of conditions and the
  following disclaimer.

* Redistributions in binary form must reproduce the above
  copyright notice, this list of conditions and the
  following disclaimer in the documentation and/or other
  materials provided with the distribution.

* Neither the name of Kevin Decker nor the names of its
  contributors may be used to endorse or promote products
  derived from this software without specific prior
  written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR
IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER
IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT
OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
@license
*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["JsDiff"] = factory();
	else
		root["JsDiff"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	/*istanbul ignore start*/'use strict';

	exports.__esModule = true;
	exports.canonicalize = exports.convertChangesToXML = exports.convertChangesToDMP = exports.merge = exports.parsePatch = exports.applyPatches = exports.applyPatch = exports.createPatch = exports.createTwoFilesPatch = exports.structuredPatch = exports.diffArrays = exports.diffJson = exports.diffCss = exports.diffSentences = exports.diffTrimmedLines = exports.diffLines = exports.diffWordsWithSpace = exports.diffWords = exports.diffChars = exports.Diff = undefined;

	/*istanbul ignore end*/var /*istanbul ignore start*/_base = __webpack_require__(1) /*istanbul ignore end*/;

	/*istanbul ignore start*/var _base2 = _interopRequireDefault(_base);

	/*istanbul ignore end*/var /*istanbul ignore start*/_character = __webpack_require__(2) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_word = __webpack_require__(3) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_line = __webpack_require__(5) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_sentence = __webpack_require__(6) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_css = __webpack_require__(7) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_json = __webpack_require__(8) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_array = __webpack_require__(9) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_apply = __webpack_require__(10) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_parse = __webpack_require__(11) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_merge = __webpack_require__(13) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_create = __webpack_require__(14) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_dmp = __webpack_require__(16) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_xml = __webpack_require__(17) /*istanbul ignore end*/;

	/*istanbul ignore start*/function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/* See LICENSE file for terms of use */

	/*
	 * Text diff implementation.
	 *
	 * This library supports the following APIS:
	 * JsDiff.diffChars: Character by character diff
	 * JsDiff.diffWords: Word (as defined by \b regex) diff which ignores whitespace
	 * JsDiff.diffLines: Line based diff
	 *
	 * JsDiff.diffCss: Diff targeted at CSS content
	 *
	 * These methods are based on the implementation proposed in
	 * "An O(ND) Difference Algorithm and its Variations" (Myers, 1986).
	 * http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.4.6927
	 */
	exports. /*istanbul ignore end*/Diff = _base2['default'];
	/*istanbul ignore start*/exports. /*istanbul ignore end*/diffChars = _character.diffChars;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/diffWords = _word.diffWords;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/diffWordsWithSpace = _word.diffWordsWithSpace;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/diffLines = _line.diffLines;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/diffTrimmedLines = _line.diffTrimmedLines;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/diffSentences = _sentence.diffSentences;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/diffCss = _css.diffCss;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/diffJson = _json.diffJson;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/diffArrays = _array.diffArrays;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/structuredPatch = _create.structuredPatch;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/createTwoFilesPatch = _create.createTwoFilesPatch;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/createPatch = _create.createPatch;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/applyPatch = _apply.applyPatch;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/applyPatches = _apply.applyPatches;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/parsePatch = _parse.parsePatch;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/merge = _merge.merge;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/convertChangesToDMP = _dmp.convertChangesToDMP;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/convertChangesToXML = _xml.convertChangesToXML;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/canonicalize = _json.canonicalize;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJEaWZmIiwiZGlmZkNoYXJzIiwiZGlmZldvcmRzIiwiZGlmZldvcmRzV2l0aFNwYWNlIiwiZGlmZkxpbmVzIiwiZGlmZlRyaW1tZWRMaW5lcyIsImRpZmZTZW50ZW5jZXMiLCJkaWZmQ3NzIiwiZGlmZkpzb24iLCJkaWZmQXJyYXlzIiwic3RydWN0dXJlZFBhdGNoIiwiY3JlYXRlVHdvRmlsZXNQYXRjaCIsImNyZWF0ZVBhdGNoIiwiYXBwbHlQYXRjaCIsImFwcGx5UGF0Y2hlcyIsInBhcnNlUGF0Y2giLCJtZXJnZSIsImNvbnZlcnRDaGFuZ2VzVG9ETVAiLCJjb252ZXJ0Q2hhbmdlc1RvWE1MIiwiY2Fub25pY2FsaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozt1QkFnQkE7Ozs7dUJBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7QUFqQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O2dDQWtDRUEsSTt5REFFQUMsUzt5REFDQUMsUzt5REFDQUMsa0I7eURBQ0FDLFM7eURBQ0FDLGdCO3lEQUNBQyxhO3lEQUVBQyxPO3lEQUNBQyxRO3lEQUVBQyxVO3lEQUVBQyxlO3lEQUNBQyxtQjt5REFDQUMsVzt5REFDQUMsVTt5REFDQUMsWTt5REFDQUMsVTt5REFDQUMsSzt5REFDQUMsbUI7eURBQ0FDLG1CO3lEQUNBQyxZIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU2VlIExJQ0VOU0UgZmlsZSBmb3IgdGVybXMgb2YgdXNlICovXG5cbi8qXG4gKiBUZXh0IGRpZmYgaW1wbGVtZW50YXRpb24uXG4gKlxuICogVGhpcyBsaWJyYXJ5IHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgQVBJUzpcbiAqIEpzRGlmZi5kaWZmQ2hhcnM6IENoYXJhY3RlciBieSBjaGFyYWN0ZXIgZGlmZlxuICogSnNEaWZmLmRpZmZXb3JkczogV29yZCAoYXMgZGVmaW5lZCBieSBcXGIgcmVnZXgpIGRpZmYgd2hpY2ggaWdub3JlcyB3aGl0ZXNwYWNlXG4gKiBKc0RpZmYuZGlmZkxpbmVzOiBMaW5lIGJhc2VkIGRpZmZcbiAqXG4gKiBKc0RpZmYuZGlmZkNzczogRGlmZiB0YXJnZXRlZCBhdCBDU1MgY29udGVudFxuICpcbiAqIFRoZXNlIG1ldGhvZHMgYXJlIGJhc2VkIG9uIHRoZSBpbXBsZW1lbnRhdGlvbiBwcm9wb3NlZCBpblxuICogXCJBbiBPKE5EKSBEaWZmZXJlbmNlIEFsZ29yaXRobSBhbmQgaXRzIFZhcmlhdGlvbnNcIiAoTXllcnMsIDE5ODYpLlxuICogaHR0cDovL2NpdGVzZWVyeC5pc3QucHN1LmVkdS92aWV3ZG9jL3N1bW1hcnk/ZG9pPTEwLjEuMS40LjY5MjdcbiAqL1xuaW1wb3J0IERpZmYgZnJvbSAnLi9kaWZmL2Jhc2UnO1xuaW1wb3J0IHtkaWZmQ2hhcnN9IGZyb20gJy4vZGlmZi9jaGFyYWN0ZXInO1xuaW1wb3J0IHtkaWZmV29yZHMsIGRpZmZXb3Jkc1dpdGhTcGFjZX0gZnJvbSAnLi9kaWZmL3dvcmQnO1xuaW1wb3J0IHtkaWZmTGluZXMsIGRpZmZUcmltbWVkTGluZXN9IGZyb20gJy4vZGlmZi9saW5lJztcbmltcG9ydCB7ZGlmZlNlbnRlbmNlc30gZnJvbSAnLi9kaWZmL3NlbnRlbmNlJztcblxuaW1wb3J0IHtkaWZmQ3NzfSBmcm9tICcuL2RpZmYvY3NzJztcbmltcG9ydCB7ZGlmZkpzb24sIGNhbm9uaWNhbGl6ZX0gZnJvbSAnLi9kaWZmL2pzb24nO1xuXG5pbXBvcnQge2RpZmZBcnJheXN9IGZyb20gJy4vZGlmZi9hcnJheSc7XG5cbmltcG9ydCB7YXBwbHlQYXRjaCwgYXBwbHlQYXRjaGVzfSBmcm9tICcuL3BhdGNoL2FwcGx5JztcbmltcG9ydCB7cGFyc2VQYXRjaH0gZnJvbSAnLi9wYXRjaC9wYXJzZSc7XG5pbXBvcnQge21lcmdlfSBmcm9tICcuL3BhdGNoL21lcmdlJztcbmltcG9ydCB7c3RydWN0dXJlZFBhdGNoLCBjcmVhdGVUd29GaWxlc1BhdGNoLCBjcmVhdGVQYXRjaH0gZnJvbSAnLi9wYXRjaC9jcmVhdGUnO1xuXG5pbXBvcnQge2NvbnZlcnRDaGFuZ2VzVG9ETVB9IGZyb20gJy4vY29udmVydC9kbXAnO1xuaW1wb3J0IHtjb252ZXJ0Q2hhbmdlc1RvWE1MfSBmcm9tICcuL2NvbnZlcnQveG1sJztcblxuZXhwb3J0IHtcbiAgRGlmZixcblxuICBkaWZmQ2hhcnMsXG4gIGRpZmZXb3JkcyxcbiAgZGlmZldvcmRzV2l0aFNwYWNlLFxuICBkaWZmTGluZXMsXG4gIGRpZmZUcmltbWVkTGluZXMsXG4gIGRpZmZTZW50ZW5jZXMsXG5cbiAgZGlmZkNzcyxcbiAgZGlmZkpzb24sXG5cbiAgZGlmZkFycmF5cyxcblxuICBzdHJ1Y3R1cmVkUGF0Y2gsXG4gIGNyZWF0ZVR3b0ZpbGVzUGF0Y2gsXG4gIGNyZWF0ZVBhdGNoLFxuICBhcHBseVBhdGNoLFxuICBhcHBseVBhdGNoZXMsXG4gIHBhcnNlUGF0Y2gsXG4gIG1lcmdlLFxuICBjb252ZXJ0Q2hhbmdlc1RvRE1QLFxuICBjb252ZXJ0Q2hhbmdlc1RvWE1MLFxuICBjYW5vbmljYWxpemVcbn07XG4iXX0=


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	/*istanbul ignore start*/'use strict';

	exports.__esModule = true;
	exports['default'] = /*istanbul ignore end*/Diff;
	function Diff() {}

	Diff.prototype = {
	  /*istanbul ignore start*/ /*istanbul ignore end*/diff: function diff(oldString, newString) {
	    /*istanbul ignore start*/var /*istanbul ignore end*/options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	    var callback = options.callback;
	    if (typeof options === 'function') {
	      callback = options;
	      options = {};
	    }
	    this.options = options;

	    var self = this;

	    function done(value) {
	      if (callback) {
	        setTimeout(function () {
	          callback(undefined, value);
	        }, 0);
	        return true;
	      } else {
	        return value;
	      }
	    }

	    // Allow subclasses to massage the input prior to running
	    oldString = this.castInput(oldString);
	    newString = this.castInput(newString);

	    oldString = this.removeEmpty(this.tokenize(oldString));
	    newString = this.removeEmpty(this.tokenize(newString));

	    var newLen = newString.length,
	        oldLen = oldString.length;
	    var editLength = 1;
	    var maxEditLength = newLen + oldLen;
	    var bestPath = [{ newPos: -1, components: [] }];

	    // Seed editLength = 0, i.e. the content starts with the same values
	    var oldPos = this.extractCommon(bestPath[0], newString, oldString, 0);
	    if (bestPath[0].newPos + 1 >= newLen && oldPos + 1 >= oldLen) {
	      // Identity per the equality and tokenizer
	      return done([{ value: this.join(newString), count: newString.length }]);
	    }

	    // Main worker method. checks all permutations of a given edit length for acceptance.
	    function execEditLength() {
	      for (var diagonalPath = -1 * editLength; diagonalPath <= editLength; diagonalPath += 2) {
	        var basePath = /*istanbul ignore start*/void 0 /*istanbul ignore end*/;
	        var addPath = bestPath[diagonalPath - 1],
	            removePath = bestPath[diagonalPath + 1],
	            _oldPos = (removePath ? removePath.newPos : 0) - diagonalPath;
	        if (addPath) {
	          // No one else is going to attempt to use this value, clear it
	          bestPath[diagonalPath - 1] = undefined;
	        }

	        var canAdd = addPath && addPath.newPos + 1 < newLen,
	            canRemove = removePath && 0 <= _oldPos && _oldPos < oldLen;
	        if (!canAdd && !canRemove) {
	          // If this path is a terminal then prune
	          bestPath[diagonalPath] = undefined;
	          continue;
	        }

	        // Select the diagonal that we want to branch from. We select the prior
	        // path whose position in the new string is the farthest from the origin
	        // and does not pass the bounds of the diff graph
	        if (!canAdd || canRemove && addPath.newPos < removePath.newPos) {
	          basePath = clonePath(removePath);
	          self.pushComponent(basePath.components, undefined, true);
	        } else {
	          basePath = addPath; // No need to clone, we've pulled it from the list
	          basePath.newPos++;
	          self.pushComponent(basePath.components, true, undefined);
	        }

	        _oldPos = self.extractCommon(basePath, newString, oldString, diagonalPath);

	        // If we have hit the end of both strings, then we are done
	        if (basePath.newPos + 1 >= newLen && _oldPos + 1 >= oldLen) {
	          return done(buildValues(self, basePath.components, newString, oldString, self.useLongestToken));
	        } else {
	          // Otherwise track this path as a potential candidate and continue.
	          bestPath[diagonalPath] = basePath;
	        }
	      }

	      editLength++;
	    }

	    // Performs the length of edit iteration. Is a bit fugly as this has to support the
	    // sync and async mode which is never fun. Loops over execEditLength until a value
	    // is produced.
	    if (callback) {
	      (function exec() {
	        setTimeout(function () {
	          // This should not happen, but we want to be safe.
	          /* istanbul ignore next */
	          if (editLength > maxEditLength) {
	            return callback();
	          }

	          if (!execEditLength()) {
	            exec();
	          }
	        }, 0);
	      })();
	    } else {
	      while (editLength <= maxEditLength) {
	        var ret = execEditLength();
	        if (ret) {
	          return ret;
	        }
	      }
	    }
	  },
	  /*istanbul ignore start*/ /*istanbul ignore end*/pushComponent: function pushComponent(components, added, removed) {
	    var last = components[components.length - 1];
	    if (last && last.added === added && last.removed === removed) {
	      // We need to clone here as the component clone operation is just
	      // as shallow array clone
	      components[components.length - 1] = { count: last.count + 1, added: added, removed: removed };
	    } else {
	      components.push({ count: 1, added: added, removed: removed });
	    }
	  },
	  /*istanbul ignore start*/ /*istanbul ignore end*/extractCommon: function extractCommon(basePath, newString, oldString, diagonalPath) {
	    var newLen = newString.length,
	        oldLen = oldString.length,
	        newPos = basePath.newPos,
	        oldPos = newPos - diagonalPath,
	        commonCount = 0;
	    while (newPos + 1 < newLen && oldPos + 1 < oldLen && this.equals(newString[newPos + 1], oldString[oldPos + 1])) {
	      newPos++;
	      oldPos++;
	      commonCount++;
	    }

	    if (commonCount) {
	      basePath.components.push({ count: commonCount });
	    }

	    basePath.newPos = newPos;
	    return oldPos;
	  },
	  /*istanbul ignore start*/ /*istanbul ignore end*/equals: function equals(left, right) {
	    if (this.options.comparator) {
	      return this.options.comparator(left, right);
	    } else {
	      return left === right || this.options.ignoreCase && left.toLowerCase() === right.toLowerCase();
	    }
	  },
	  /*istanbul ignore start*/ /*istanbul ignore end*/removeEmpty: function removeEmpty(array) {
	    var ret = [];
	    for (var i = 0; i < array.length; i++) {
	      if (array[i]) {
	        ret.push(array[i]);
	      }
	    }
	    return ret;
	  },
	  /*istanbul ignore start*/ /*istanbul ignore end*/castInput: function castInput(value) {
	    return value;
	  },
	  /*istanbul ignore start*/ /*istanbul ignore end*/tokenize: function tokenize(value) {
	    return value.split('');
	  },
	  /*istanbul ignore start*/ /*istanbul ignore end*/join: function join(chars) {
	    return chars.join('');
	  }
	};

	function buildValues(diff, components, newString, oldString, useLongestToken) {
	  var componentPos = 0,
	      componentLen = components.length,
	      newPos = 0,
	      oldPos = 0;

	  for (; componentPos < componentLen; componentPos++) {
	    var component = components[componentPos];
	    if (!component.removed) {
	      if (!component.added && useLongestToken) {
	        var value = newString.slice(newPos, newPos + component.count);
	        value = value.map(function (value, i) {
	          var oldValue = oldString[oldPos + i];
	          return oldValue.length > value.length ? oldValue : value;
	        });

	        component.value = diff.join(value);
	      } else {
	        component.value = diff.join(newString.slice(newPos, newPos + component.count));
	      }
	      newPos += component.count;

	      // Common case
	      if (!component.added) {
	        oldPos += component.count;
	      }
	    } else {
	      component.value = diff.join(oldString.slice(oldPos, oldPos + component.count));
	      oldPos += component.count;

	      // Reverse add and remove so removes are output first to match common convention
	      // The diffing algorithm is tied to add then remove output and this is the simplest
	      // route to get the desired output with minimal overhead.
	      if (componentPos && components[componentPos - 1].added) {
	        var tmp = components[componentPos - 1];
	        components[componentPos - 1] = components[componentPos];
	        components[componentPos] = tmp;
	      }
	    }
	  }

	  // Special case handle for when one terminal is ignored (i.e. whitespace).
	  // For this case we merge the terminal into the prior string and drop the change.
	  // This is only available for string mode.
	  var lastComponent = components[componentLen - 1];
	  if (componentLen > 1 && typeof lastComponent.value === 'string' && (lastComponent.added || lastComponent.removed) && diff.equals('', lastComponent.value)) {
	    components[componentLen - 2].value += lastComponent.value;
	    components.pop();
	  }

	  return components;
	}

	function clonePath(path) {
	  return { newPos: path.newPos, components: path.components.slice(0) };
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2Jhc2UuanMiXSwibmFtZXMiOlsiRGlmZiIsInByb3RvdHlwZSIsImRpZmYiLCJvbGRTdHJpbmciLCJuZXdTdHJpbmciLCJvcHRpb25zIiwiY2FsbGJhY2siLCJzZWxmIiwiZG9uZSIsInZhbHVlIiwic2V0VGltZW91dCIsInVuZGVmaW5lZCIsImNhc3RJbnB1dCIsInJlbW92ZUVtcHR5IiwidG9rZW5pemUiLCJuZXdMZW4iLCJsZW5ndGgiLCJvbGRMZW4iLCJlZGl0TGVuZ3RoIiwibWF4RWRpdExlbmd0aCIsImJlc3RQYXRoIiwibmV3UG9zIiwiY29tcG9uZW50cyIsIm9sZFBvcyIsImV4dHJhY3RDb21tb24iLCJqb2luIiwiY291bnQiLCJleGVjRWRpdExlbmd0aCIsImRpYWdvbmFsUGF0aCIsImJhc2VQYXRoIiwiYWRkUGF0aCIsInJlbW92ZVBhdGgiLCJjYW5BZGQiLCJjYW5SZW1vdmUiLCJjbG9uZVBhdGgiLCJwdXNoQ29tcG9uZW50IiwiYnVpbGRWYWx1ZXMiLCJ1c2VMb25nZXN0VG9rZW4iLCJleGVjIiwicmV0IiwiYWRkZWQiLCJyZW1vdmVkIiwibGFzdCIsInB1c2giLCJjb21tb25Db3VudCIsImVxdWFscyIsImxlZnQiLCJyaWdodCIsImNvbXBhcmF0b3IiLCJpZ25vcmVDYXNlIiwidG9Mb3dlckNhc2UiLCJhcnJheSIsImkiLCJzcGxpdCIsImNoYXJzIiwiY29tcG9uZW50UG9zIiwiY29tcG9uZW50TGVuIiwiY29tcG9uZW50Iiwic2xpY2UiLCJtYXAiLCJvbGRWYWx1ZSIsInRtcCIsImxhc3RDb21wb25lbnQiLCJwb3AiLCJwYXRoIl0sIm1hcHBpbmdzIjoiOzs7NENBQXdCQSxJO0FBQVQsU0FBU0EsSUFBVCxHQUFnQixDQUFFOztBQUVqQ0EsS0FBS0MsU0FBTCxHQUFpQjtBQUFBLG1EQUNmQyxJQURlLGdCQUNWQyxTQURVLEVBQ0NDLFNBREQsRUFDMEI7QUFBQSx3REFBZEMsT0FBYyx1RUFBSixFQUFJOztBQUN2QyxRQUFJQyxXQUFXRCxRQUFRQyxRQUF2QjtBQUNBLFFBQUksT0FBT0QsT0FBUCxLQUFtQixVQUF2QixFQUFtQztBQUNqQ0MsaUJBQVdELE9BQVg7QUFDQUEsZ0JBQVUsRUFBVjtBQUNEO0FBQ0QsU0FBS0EsT0FBTCxHQUFlQSxPQUFmOztBQUVBLFFBQUlFLE9BQU8sSUFBWDs7QUFFQSxhQUFTQyxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFDbkIsVUFBSUgsUUFBSixFQUFjO0FBQ1pJLG1CQUFXLFlBQVc7QUFBRUosbUJBQVNLLFNBQVQsRUFBb0JGLEtBQXBCO0FBQTZCLFNBQXJELEVBQXVELENBQXZEO0FBQ0EsZUFBTyxJQUFQO0FBQ0QsT0FIRCxNQUdPO0FBQ0wsZUFBT0EsS0FBUDtBQUNEO0FBQ0Y7O0FBRUQ7QUFDQU4sZ0JBQVksS0FBS1MsU0FBTCxDQUFlVCxTQUFmLENBQVo7QUFDQUMsZ0JBQVksS0FBS1EsU0FBTCxDQUFlUixTQUFmLENBQVo7O0FBRUFELGdCQUFZLEtBQUtVLFdBQUwsQ0FBaUIsS0FBS0MsUUFBTCxDQUFjWCxTQUFkLENBQWpCLENBQVo7QUFDQUMsZ0JBQVksS0FBS1MsV0FBTCxDQUFpQixLQUFLQyxRQUFMLENBQWNWLFNBQWQsQ0FBakIsQ0FBWjs7QUFFQSxRQUFJVyxTQUFTWCxVQUFVWSxNQUF2QjtBQUFBLFFBQStCQyxTQUFTZCxVQUFVYSxNQUFsRDtBQUNBLFFBQUlFLGFBQWEsQ0FBakI7QUFDQSxRQUFJQyxnQkFBZ0JKLFNBQVNFLE1BQTdCO0FBQ0EsUUFBSUcsV0FBVyxDQUFDLEVBQUVDLFFBQVEsQ0FBQyxDQUFYLEVBQWNDLFlBQVksRUFBMUIsRUFBRCxDQUFmOztBQUVBO0FBQ0EsUUFBSUMsU0FBUyxLQUFLQyxhQUFMLENBQW1CSixTQUFTLENBQVQsQ0FBbkIsRUFBZ0NoQixTQUFoQyxFQUEyQ0QsU0FBM0MsRUFBc0QsQ0FBdEQsQ0FBYjtBQUNBLFFBQUlpQixTQUFTLENBQVQsRUFBWUMsTUFBWixHQUFxQixDQUFyQixJQUEwQk4sTUFBMUIsSUFBb0NRLFNBQVMsQ0FBVCxJQUFjTixNQUF0RCxFQUE4RDtBQUM1RDtBQUNBLGFBQU9ULEtBQUssQ0FBQyxFQUFDQyxPQUFPLEtBQUtnQixJQUFMLENBQVVyQixTQUFWLENBQVIsRUFBOEJzQixPQUFPdEIsVUFBVVksTUFBL0MsRUFBRCxDQUFMLENBQVA7QUFDRDs7QUFFRDtBQUNBLGFBQVNXLGNBQVQsR0FBMEI7QUFDeEIsV0FBSyxJQUFJQyxlQUFlLENBQUMsQ0FBRCxHQUFLVixVQUE3QixFQUF5Q1UsZ0JBQWdCVixVQUF6RCxFQUFxRVUsZ0JBQWdCLENBQXJGLEVBQXdGO0FBQ3RGLFlBQUlDLDBDQUFKO0FBQ0EsWUFBSUMsVUFBVVYsU0FBU1EsZUFBZSxDQUF4QixDQUFkO0FBQUEsWUFDSUcsYUFBYVgsU0FBU1EsZUFBZSxDQUF4QixDQURqQjtBQUFBLFlBRUlMLFVBQVMsQ0FBQ1EsYUFBYUEsV0FBV1YsTUFBeEIsR0FBaUMsQ0FBbEMsSUFBdUNPLFlBRnBEO0FBR0EsWUFBSUUsT0FBSixFQUFhO0FBQ1g7QUFDQVYsbUJBQVNRLGVBQWUsQ0FBeEIsSUFBNkJqQixTQUE3QjtBQUNEOztBQUVELFlBQUlxQixTQUFTRixXQUFXQSxRQUFRVCxNQUFSLEdBQWlCLENBQWpCLEdBQXFCTixNQUE3QztBQUFBLFlBQ0lrQixZQUFZRixjQUFjLEtBQUtSLE9BQW5CLElBQTZCQSxVQUFTTixNQUR0RDtBQUVBLFlBQUksQ0FBQ2UsTUFBRCxJQUFXLENBQUNDLFNBQWhCLEVBQTJCO0FBQ3pCO0FBQ0FiLG1CQUFTUSxZQUFULElBQXlCakIsU0FBekI7QUFDQTtBQUNEOztBQUVEO0FBQ0E7QUFDQTtBQUNBLFlBQUksQ0FBQ3FCLE1BQUQsSUFBWUMsYUFBYUgsUUFBUVQsTUFBUixHQUFpQlUsV0FBV1YsTUFBekQsRUFBa0U7QUFDaEVRLHFCQUFXSyxVQUFVSCxVQUFWLENBQVg7QUFDQXhCLGVBQUs0QixhQUFMLENBQW1CTixTQUFTUCxVQUE1QixFQUF3Q1gsU0FBeEMsRUFBbUQsSUFBbkQ7QUFDRCxTQUhELE1BR087QUFDTGtCLHFCQUFXQyxPQUFYLENBREssQ0FDaUI7QUFDdEJELG1CQUFTUixNQUFUO0FBQ0FkLGVBQUs0QixhQUFMLENBQW1CTixTQUFTUCxVQUE1QixFQUF3QyxJQUF4QyxFQUE4Q1gsU0FBOUM7QUFDRDs7QUFFRFksa0JBQVNoQixLQUFLaUIsYUFBTCxDQUFtQkssUUFBbkIsRUFBNkJ6QixTQUE3QixFQUF3Q0QsU0FBeEMsRUFBbUR5QixZQUFuRCxDQUFUOztBQUVBO0FBQ0EsWUFBSUMsU0FBU1IsTUFBVCxHQUFrQixDQUFsQixJQUF1Qk4sTUFBdkIsSUFBaUNRLFVBQVMsQ0FBVCxJQUFjTixNQUFuRCxFQUEyRDtBQUN6RCxpQkFBT1QsS0FBSzRCLFlBQVk3QixJQUFaLEVBQWtCc0IsU0FBU1AsVUFBM0IsRUFBdUNsQixTQUF2QyxFQUFrREQsU0FBbEQsRUFBNkRJLEtBQUs4QixlQUFsRSxDQUFMLENBQVA7QUFDRCxTQUZELE1BRU87QUFDTDtBQUNBakIsbUJBQVNRLFlBQVQsSUFBeUJDLFFBQXpCO0FBQ0Q7QUFDRjs7QUFFRFg7QUFDRDs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxRQUFJWixRQUFKLEVBQWM7QUFDWCxnQkFBU2dDLElBQVQsR0FBZ0I7QUFDZjVCLG1CQUFXLFlBQVc7QUFDcEI7QUFDQTtBQUNBLGNBQUlRLGFBQWFDLGFBQWpCLEVBQWdDO0FBQzlCLG1CQUFPYixVQUFQO0FBQ0Q7O0FBRUQsY0FBSSxDQUFDcUIsZ0JBQUwsRUFBdUI7QUFDckJXO0FBQ0Q7QUFDRixTQVZELEVBVUcsQ0FWSDtBQVdELE9BWkEsR0FBRDtBQWFELEtBZEQsTUFjTztBQUNMLGFBQU9wQixjQUFjQyxhQUFyQixFQUFvQztBQUNsQyxZQUFJb0IsTUFBTVosZ0JBQVY7QUFDQSxZQUFJWSxHQUFKLEVBQVM7QUFDUCxpQkFBT0EsR0FBUDtBQUNEO0FBQ0Y7QUFDRjtBQUNGLEdBOUdjO0FBQUEsbURBZ0hmSixhQWhIZSx5QkFnSERiLFVBaEhDLEVBZ0hXa0IsS0FoSFgsRUFnSGtCQyxPQWhIbEIsRUFnSDJCO0FBQ3hDLFFBQUlDLE9BQU9wQixXQUFXQSxXQUFXTixNQUFYLEdBQW9CLENBQS9CLENBQVg7QUFDQSxRQUFJMEIsUUFBUUEsS0FBS0YsS0FBTCxLQUFlQSxLQUF2QixJQUFnQ0UsS0FBS0QsT0FBTCxLQUFpQkEsT0FBckQsRUFBOEQ7QUFDNUQ7QUFDQTtBQUNBbkIsaUJBQVdBLFdBQVdOLE1BQVgsR0FBb0IsQ0FBL0IsSUFBb0MsRUFBQ1UsT0FBT2dCLEtBQUtoQixLQUFMLEdBQWEsQ0FBckIsRUFBd0JjLE9BQU9BLEtBQS9CLEVBQXNDQyxTQUFTQSxPQUEvQyxFQUFwQztBQUNELEtBSkQsTUFJTztBQUNMbkIsaUJBQVdxQixJQUFYLENBQWdCLEVBQUNqQixPQUFPLENBQVIsRUFBV2MsT0FBT0EsS0FBbEIsRUFBeUJDLFNBQVNBLE9BQWxDLEVBQWhCO0FBQ0Q7QUFDRixHQXpIYztBQUFBLG1EQTBIZmpCLGFBMUhlLHlCQTBIREssUUExSEMsRUEwSFN6QixTQTFIVCxFQTBIb0JELFNBMUhwQixFQTBIK0J5QixZQTFIL0IsRUEwSDZDO0FBQzFELFFBQUliLFNBQVNYLFVBQVVZLE1BQXZCO0FBQUEsUUFDSUMsU0FBU2QsVUFBVWEsTUFEdkI7QUFBQSxRQUVJSyxTQUFTUSxTQUFTUixNQUZ0QjtBQUFBLFFBR0lFLFNBQVNGLFNBQVNPLFlBSHRCO0FBQUEsUUFLSWdCLGNBQWMsQ0FMbEI7QUFNQSxXQUFPdkIsU0FBUyxDQUFULEdBQWFOLE1BQWIsSUFBdUJRLFNBQVMsQ0FBVCxHQUFhTixNQUFwQyxJQUE4QyxLQUFLNEIsTUFBTCxDQUFZekMsVUFBVWlCLFNBQVMsQ0FBbkIsQ0FBWixFQUFtQ2xCLFVBQVVvQixTQUFTLENBQW5CLENBQW5DLENBQXJELEVBQWdIO0FBQzlHRjtBQUNBRTtBQUNBcUI7QUFDRDs7QUFFRCxRQUFJQSxXQUFKLEVBQWlCO0FBQ2ZmLGVBQVNQLFVBQVQsQ0FBb0JxQixJQUFwQixDQUF5QixFQUFDakIsT0FBT2tCLFdBQVIsRUFBekI7QUFDRDs7QUFFRGYsYUFBU1IsTUFBVCxHQUFrQkEsTUFBbEI7QUFDQSxXQUFPRSxNQUFQO0FBQ0QsR0E3SWM7QUFBQSxtREErSWZzQixNQS9JZSxrQkErSVJDLElBL0lRLEVBK0lGQyxLQS9JRSxFQStJSztBQUNsQixRQUFJLEtBQUsxQyxPQUFMLENBQWEyQyxVQUFqQixFQUE2QjtBQUMzQixhQUFPLEtBQUszQyxPQUFMLENBQWEyQyxVQUFiLENBQXdCRixJQUF4QixFQUE4QkMsS0FBOUIsQ0FBUDtBQUNELEtBRkQsTUFFTztBQUNMLGFBQU9ELFNBQVNDLEtBQVQsSUFDRCxLQUFLMUMsT0FBTCxDQUFhNEMsVUFBYixJQUEyQkgsS0FBS0ksV0FBTCxPQUF1QkgsTUFBTUcsV0FBTixFQUR4RDtBQUVEO0FBQ0YsR0F0SmM7QUFBQSxtREF1SmZyQyxXQXZKZSx1QkF1SkhzQyxLQXZKRyxFQXVKSTtBQUNqQixRQUFJWixNQUFNLEVBQVY7QUFDQSxTQUFLLElBQUlhLElBQUksQ0FBYixFQUFnQkEsSUFBSUQsTUFBTW5DLE1BQTFCLEVBQWtDb0MsR0FBbEMsRUFBdUM7QUFDckMsVUFBSUQsTUFBTUMsQ0FBTixDQUFKLEVBQWM7QUFDWmIsWUFBSUksSUFBSixDQUFTUSxNQUFNQyxDQUFOLENBQVQ7QUFDRDtBQUNGO0FBQ0QsV0FBT2IsR0FBUDtBQUNELEdBL0pjO0FBQUEsbURBZ0tmM0IsU0FoS2UscUJBZ0tMSCxLQWhLSyxFQWdLRTtBQUNmLFdBQU9BLEtBQVA7QUFDRCxHQWxLYztBQUFBLG1EQW1LZkssUUFuS2Usb0JBbUtOTCxLQW5LTSxFQW1LQztBQUNkLFdBQU9BLE1BQU00QyxLQUFOLENBQVksRUFBWixDQUFQO0FBQ0QsR0FyS2M7QUFBQSxtREFzS2Y1QixJQXRLZSxnQkFzS1Y2QixLQXRLVSxFQXNLSDtBQUNWLFdBQU9BLE1BQU03QixJQUFOLENBQVcsRUFBWCxDQUFQO0FBQ0Q7QUF4S2MsQ0FBakI7O0FBMktBLFNBQVNXLFdBQVQsQ0FBcUJsQyxJQUFyQixFQUEyQm9CLFVBQTNCLEVBQXVDbEIsU0FBdkMsRUFBa0RELFNBQWxELEVBQTZEa0MsZUFBN0QsRUFBOEU7QUFDNUUsTUFBSWtCLGVBQWUsQ0FBbkI7QUFBQSxNQUNJQyxlQUFlbEMsV0FBV04sTUFEOUI7QUFBQSxNQUVJSyxTQUFTLENBRmI7QUFBQSxNQUdJRSxTQUFTLENBSGI7O0FBS0EsU0FBT2dDLGVBQWVDLFlBQXRCLEVBQW9DRCxjQUFwQyxFQUFvRDtBQUNsRCxRQUFJRSxZQUFZbkMsV0FBV2lDLFlBQVgsQ0FBaEI7QUFDQSxRQUFJLENBQUNFLFVBQVVoQixPQUFmLEVBQXdCO0FBQ3RCLFVBQUksQ0FBQ2dCLFVBQVVqQixLQUFYLElBQW9CSCxlQUF4QixFQUF5QztBQUN2QyxZQUFJNUIsUUFBUUwsVUFBVXNELEtBQVYsQ0FBZ0JyQyxNQUFoQixFQUF3QkEsU0FBU29DLFVBQVUvQixLQUEzQyxDQUFaO0FBQ0FqQixnQkFBUUEsTUFBTWtELEdBQU4sQ0FBVSxVQUFTbEQsS0FBVCxFQUFnQjJDLENBQWhCLEVBQW1CO0FBQ25DLGNBQUlRLFdBQVd6RCxVQUFVb0IsU0FBUzZCLENBQW5CLENBQWY7QUFDQSxpQkFBT1EsU0FBUzVDLE1BQVQsR0FBa0JQLE1BQU1PLE1BQXhCLEdBQWlDNEMsUUFBakMsR0FBNENuRCxLQUFuRDtBQUNELFNBSE8sQ0FBUjs7QUFLQWdELGtCQUFVaEQsS0FBVixHQUFrQlAsS0FBS3VCLElBQUwsQ0FBVWhCLEtBQVYsQ0FBbEI7QUFDRCxPQVJELE1BUU87QUFDTGdELGtCQUFVaEQsS0FBVixHQUFrQlAsS0FBS3VCLElBQUwsQ0FBVXJCLFVBQVVzRCxLQUFWLENBQWdCckMsTUFBaEIsRUFBd0JBLFNBQVNvQyxVQUFVL0IsS0FBM0MsQ0FBVixDQUFsQjtBQUNEO0FBQ0RMLGdCQUFVb0MsVUFBVS9CLEtBQXBCOztBQUVBO0FBQ0EsVUFBSSxDQUFDK0IsVUFBVWpCLEtBQWYsRUFBc0I7QUFDcEJqQixrQkFBVWtDLFVBQVUvQixLQUFwQjtBQUNEO0FBQ0YsS0FsQkQsTUFrQk87QUFDTCtCLGdCQUFVaEQsS0FBVixHQUFrQlAsS0FBS3VCLElBQUwsQ0FBVXRCLFVBQVV1RCxLQUFWLENBQWdCbkMsTUFBaEIsRUFBd0JBLFNBQVNrQyxVQUFVL0IsS0FBM0MsQ0FBVixDQUFsQjtBQUNBSCxnQkFBVWtDLFVBQVUvQixLQUFwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFJNkIsZ0JBQWdCakMsV0FBV2lDLGVBQWUsQ0FBMUIsRUFBNkJmLEtBQWpELEVBQXdEO0FBQ3RELFlBQUlxQixNQUFNdkMsV0FBV2lDLGVBQWUsQ0FBMUIsQ0FBVjtBQUNBakMsbUJBQVdpQyxlQUFlLENBQTFCLElBQStCakMsV0FBV2lDLFlBQVgsQ0FBL0I7QUFDQWpDLG1CQUFXaUMsWUFBWCxJQUEyQk0sR0FBM0I7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsTUFBSUMsZ0JBQWdCeEMsV0FBV2tDLGVBQWUsQ0FBMUIsQ0FBcEI7QUFDQSxNQUFJQSxlQUFlLENBQWYsSUFDRyxPQUFPTSxjQUFjckQsS0FBckIsS0FBK0IsUUFEbEMsS0FFSXFELGNBQWN0QixLQUFkLElBQXVCc0IsY0FBY3JCLE9BRnpDLEtBR0d2QyxLQUFLMkMsTUFBTCxDQUFZLEVBQVosRUFBZ0JpQixjQUFjckQsS0FBOUIsQ0FIUCxFQUc2QztBQUMzQ2EsZUFBV2tDLGVBQWUsQ0FBMUIsRUFBNkIvQyxLQUE3QixJQUFzQ3FELGNBQWNyRCxLQUFwRDtBQUNBYSxlQUFXeUMsR0FBWDtBQUNEOztBQUVELFNBQU96QyxVQUFQO0FBQ0Q7O0FBRUQsU0FBU1ksU0FBVCxDQUFtQjhCLElBQW5CLEVBQXlCO0FBQ3ZCLFNBQU8sRUFBRTNDLFFBQVEyQyxLQUFLM0MsTUFBZixFQUF1QkMsWUFBWTBDLEtBQUsxQyxVQUFMLENBQWdCb0MsS0FBaEIsQ0FBc0IsQ0FBdEIsQ0FBbkMsRUFBUDtBQUNEIiwiZmlsZSI6ImJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEaWZmKCkge31cblxuRGlmZi5wcm90b3R5cGUgPSB7XG4gIGRpZmYob2xkU3RyaW5nLCBuZXdTdHJpbmcsIG9wdGlvbnMgPSB7fSkge1xuICAgIGxldCBjYWxsYmFjayA9IG9wdGlvbnMuY2FsbGJhY2s7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYWxsYmFjayA9IG9wdGlvbnM7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICBmdW5jdGlvbiBkb25lKHZhbHVlKSB7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgY2FsbGJhY2sodW5kZWZpbmVkLCB2YWx1ZSk7IH0sIDApO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBbGxvdyBzdWJjbGFzc2VzIHRvIG1hc3NhZ2UgdGhlIGlucHV0IHByaW9yIHRvIHJ1bm5pbmdcbiAgICBvbGRTdHJpbmcgPSB0aGlzLmNhc3RJbnB1dChvbGRTdHJpbmcpO1xuICAgIG5ld1N0cmluZyA9IHRoaXMuY2FzdElucHV0KG5ld1N0cmluZyk7XG5cbiAgICBvbGRTdHJpbmcgPSB0aGlzLnJlbW92ZUVtcHR5KHRoaXMudG9rZW5pemUob2xkU3RyaW5nKSk7XG4gICAgbmV3U3RyaW5nID0gdGhpcy5yZW1vdmVFbXB0eSh0aGlzLnRva2VuaXplKG5ld1N0cmluZykpO1xuXG4gICAgbGV0IG5ld0xlbiA9IG5ld1N0cmluZy5sZW5ndGgsIG9sZExlbiA9IG9sZFN0cmluZy5sZW5ndGg7XG4gICAgbGV0IGVkaXRMZW5ndGggPSAxO1xuICAgIGxldCBtYXhFZGl0TGVuZ3RoID0gbmV3TGVuICsgb2xkTGVuO1xuICAgIGxldCBiZXN0UGF0aCA9IFt7IG5ld1BvczogLTEsIGNvbXBvbmVudHM6IFtdIH1dO1xuXG4gICAgLy8gU2VlZCBlZGl0TGVuZ3RoID0gMCwgaS5lLiB0aGUgY29udGVudCBzdGFydHMgd2l0aCB0aGUgc2FtZSB2YWx1ZXNcbiAgICBsZXQgb2xkUG9zID0gdGhpcy5leHRyYWN0Q29tbW9uKGJlc3RQYXRoWzBdLCBuZXdTdHJpbmcsIG9sZFN0cmluZywgMCk7XG4gICAgaWYgKGJlc3RQYXRoWzBdLm5ld1BvcyArIDEgPj0gbmV3TGVuICYmIG9sZFBvcyArIDEgPj0gb2xkTGVuKSB7XG4gICAgICAvLyBJZGVudGl0eSBwZXIgdGhlIGVxdWFsaXR5IGFuZCB0b2tlbml6ZXJcbiAgICAgIHJldHVybiBkb25lKFt7dmFsdWU6IHRoaXMuam9pbihuZXdTdHJpbmcpLCBjb3VudDogbmV3U3RyaW5nLmxlbmd0aH1dKTtcbiAgICB9XG5cbiAgICAvLyBNYWluIHdvcmtlciBtZXRob2QuIGNoZWNrcyBhbGwgcGVybXV0YXRpb25zIG9mIGEgZ2l2ZW4gZWRpdCBsZW5ndGggZm9yIGFjY2VwdGFuY2UuXG4gICAgZnVuY3Rpb24gZXhlY0VkaXRMZW5ndGgoKSB7XG4gICAgICBmb3IgKGxldCBkaWFnb25hbFBhdGggPSAtMSAqIGVkaXRMZW5ndGg7IGRpYWdvbmFsUGF0aCA8PSBlZGl0TGVuZ3RoOyBkaWFnb25hbFBhdGggKz0gMikge1xuICAgICAgICBsZXQgYmFzZVBhdGg7XG4gICAgICAgIGxldCBhZGRQYXRoID0gYmVzdFBhdGhbZGlhZ29uYWxQYXRoIC0gMV0sXG4gICAgICAgICAgICByZW1vdmVQYXRoID0gYmVzdFBhdGhbZGlhZ29uYWxQYXRoICsgMV0sXG4gICAgICAgICAgICBvbGRQb3MgPSAocmVtb3ZlUGF0aCA/IHJlbW92ZVBhdGgubmV3UG9zIDogMCkgLSBkaWFnb25hbFBhdGg7XG4gICAgICAgIGlmIChhZGRQYXRoKSB7XG4gICAgICAgICAgLy8gTm8gb25lIGVsc2UgaXMgZ29pbmcgdG8gYXR0ZW1wdCB0byB1c2UgdGhpcyB2YWx1ZSwgY2xlYXIgaXRcbiAgICAgICAgICBiZXN0UGF0aFtkaWFnb25hbFBhdGggLSAxXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjYW5BZGQgPSBhZGRQYXRoICYmIGFkZFBhdGgubmV3UG9zICsgMSA8IG5ld0xlbixcbiAgICAgICAgICAgIGNhblJlbW92ZSA9IHJlbW92ZVBhdGggJiYgMCA8PSBvbGRQb3MgJiYgb2xkUG9zIDwgb2xkTGVuO1xuICAgICAgICBpZiAoIWNhbkFkZCAmJiAhY2FuUmVtb3ZlKSB7XG4gICAgICAgICAgLy8gSWYgdGhpcyBwYXRoIGlzIGEgdGVybWluYWwgdGhlbiBwcnVuZVxuICAgICAgICAgIGJlc3RQYXRoW2RpYWdvbmFsUGF0aF0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZWxlY3QgdGhlIGRpYWdvbmFsIHRoYXQgd2Ugd2FudCB0byBicmFuY2ggZnJvbS4gV2Ugc2VsZWN0IHRoZSBwcmlvclxuICAgICAgICAvLyBwYXRoIHdob3NlIHBvc2l0aW9uIGluIHRoZSBuZXcgc3RyaW5nIGlzIHRoZSBmYXJ0aGVzdCBmcm9tIHRoZSBvcmlnaW5cbiAgICAgICAgLy8gYW5kIGRvZXMgbm90IHBhc3MgdGhlIGJvdW5kcyBvZiB0aGUgZGlmZiBncmFwaFxuICAgICAgICBpZiAoIWNhbkFkZCB8fCAoY2FuUmVtb3ZlICYmIGFkZFBhdGgubmV3UG9zIDwgcmVtb3ZlUGF0aC5uZXdQb3MpKSB7XG4gICAgICAgICAgYmFzZVBhdGggPSBjbG9uZVBhdGgocmVtb3ZlUGF0aCk7XG4gICAgICAgICAgc2VsZi5wdXNoQ29tcG9uZW50KGJhc2VQYXRoLmNvbXBvbmVudHMsIHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYmFzZVBhdGggPSBhZGRQYXRoOyAgIC8vIE5vIG5lZWQgdG8gY2xvbmUsIHdlJ3ZlIHB1bGxlZCBpdCBmcm9tIHRoZSBsaXN0XG4gICAgICAgICAgYmFzZVBhdGgubmV3UG9zKys7XG4gICAgICAgICAgc2VsZi5wdXNoQ29tcG9uZW50KGJhc2VQYXRoLmNvbXBvbmVudHMsIHRydWUsIHVuZGVmaW5lZCk7XG4gICAgICAgIH1cblxuICAgICAgICBvbGRQb3MgPSBzZWxmLmV4dHJhY3RDb21tb24oYmFzZVBhdGgsIG5ld1N0cmluZywgb2xkU3RyaW5nLCBkaWFnb25hbFBhdGgpO1xuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgaGl0IHRoZSBlbmQgb2YgYm90aCBzdHJpbmdzLCB0aGVuIHdlIGFyZSBkb25lXG4gICAgICAgIGlmIChiYXNlUGF0aC5uZXdQb3MgKyAxID49IG5ld0xlbiAmJiBvbGRQb3MgKyAxID49IG9sZExlbikge1xuICAgICAgICAgIHJldHVybiBkb25lKGJ1aWxkVmFsdWVzKHNlbGYsIGJhc2VQYXRoLmNvbXBvbmVudHMsIG5ld1N0cmluZywgb2xkU3RyaW5nLCBzZWxmLnVzZUxvbmdlc3RUb2tlbikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSB0cmFjayB0aGlzIHBhdGggYXMgYSBwb3RlbnRpYWwgY2FuZGlkYXRlIGFuZCBjb250aW51ZS5cbiAgICAgICAgICBiZXN0UGF0aFtkaWFnb25hbFBhdGhdID0gYmFzZVBhdGg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZWRpdExlbmd0aCsrO1xuICAgIH1cblxuICAgIC8vIFBlcmZvcm1zIHRoZSBsZW5ndGggb2YgZWRpdCBpdGVyYXRpb24uIElzIGEgYml0IGZ1Z2x5IGFzIHRoaXMgaGFzIHRvIHN1cHBvcnQgdGhlXG4gICAgLy8gc3luYyBhbmQgYXN5bmMgbW9kZSB3aGljaCBpcyBuZXZlciBmdW4uIExvb3BzIG92ZXIgZXhlY0VkaXRMZW5ndGggdW50aWwgYSB2YWx1ZVxuICAgIC8vIGlzIHByb2R1Y2VkLlxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgKGZ1bmN0aW9uIGV4ZWMoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gVGhpcyBzaG91bGQgbm90IGhhcHBlbiwgYnV0IHdlIHdhbnQgdG8gYmUgc2FmZS5cbiAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICAgIGlmIChlZGl0TGVuZ3RoID4gbWF4RWRpdExlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFleGVjRWRpdExlbmd0aCgpKSB7XG4gICAgICAgICAgICBleGVjKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAwKTtcbiAgICAgIH0oKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdoaWxlIChlZGl0TGVuZ3RoIDw9IG1heEVkaXRMZW5ndGgpIHtcbiAgICAgICAgbGV0IHJldCA9IGV4ZWNFZGl0TGVuZ3RoKCk7XG4gICAgICAgIGlmIChyZXQpIHtcbiAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHB1c2hDb21wb25lbnQoY29tcG9uZW50cywgYWRkZWQsIHJlbW92ZWQpIHtcbiAgICBsZXQgbGFzdCA9IGNvbXBvbmVudHNbY29tcG9uZW50cy5sZW5ndGggLSAxXTtcbiAgICBpZiAobGFzdCAmJiBsYXN0LmFkZGVkID09PSBhZGRlZCAmJiBsYXN0LnJlbW92ZWQgPT09IHJlbW92ZWQpIHtcbiAgICAgIC8vIFdlIG5lZWQgdG8gY2xvbmUgaGVyZSBhcyB0aGUgY29tcG9uZW50IGNsb25lIG9wZXJhdGlvbiBpcyBqdXN0XG4gICAgICAvLyBhcyBzaGFsbG93IGFycmF5IGNsb25lXG4gICAgICBjb21wb25lbnRzW2NvbXBvbmVudHMubGVuZ3RoIC0gMV0gPSB7Y291bnQ6IGxhc3QuY291bnQgKyAxLCBhZGRlZDogYWRkZWQsIHJlbW92ZWQ6IHJlbW92ZWQgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcG9uZW50cy5wdXNoKHtjb3VudDogMSwgYWRkZWQ6IGFkZGVkLCByZW1vdmVkOiByZW1vdmVkIH0pO1xuICAgIH1cbiAgfSxcbiAgZXh0cmFjdENvbW1vbihiYXNlUGF0aCwgbmV3U3RyaW5nLCBvbGRTdHJpbmcsIGRpYWdvbmFsUGF0aCkge1xuICAgIGxldCBuZXdMZW4gPSBuZXdTdHJpbmcubGVuZ3RoLFxuICAgICAgICBvbGRMZW4gPSBvbGRTdHJpbmcubGVuZ3RoLFxuICAgICAgICBuZXdQb3MgPSBiYXNlUGF0aC5uZXdQb3MsXG4gICAgICAgIG9sZFBvcyA9IG5ld1BvcyAtIGRpYWdvbmFsUGF0aCxcblxuICAgICAgICBjb21tb25Db3VudCA9IDA7XG4gICAgd2hpbGUgKG5ld1BvcyArIDEgPCBuZXdMZW4gJiYgb2xkUG9zICsgMSA8IG9sZExlbiAmJiB0aGlzLmVxdWFscyhuZXdTdHJpbmdbbmV3UG9zICsgMV0sIG9sZFN0cmluZ1tvbGRQb3MgKyAxXSkpIHtcbiAgICAgIG5ld1BvcysrO1xuICAgICAgb2xkUG9zKys7XG4gICAgICBjb21tb25Db3VudCsrO1xuICAgIH1cblxuICAgIGlmIChjb21tb25Db3VudCkge1xuICAgICAgYmFzZVBhdGguY29tcG9uZW50cy5wdXNoKHtjb3VudDogY29tbW9uQ291bnR9KTtcbiAgICB9XG5cbiAgICBiYXNlUGF0aC5uZXdQb3MgPSBuZXdQb3M7XG4gICAgcmV0dXJuIG9sZFBvcztcbiAgfSxcblxuICBlcXVhbHMobGVmdCwgcmlnaHQpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmNvbXBhcmF0b3IpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY29tcGFyYXRvcihsZWZ0LCByaWdodCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBsZWZ0ID09PSByaWdodFxuICAgICAgICB8fCAodGhpcy5vcHRpb25zLmlnbm9yZUNhc2UgJiYgbGVmdC50b0xvd2VyQ2FzZSgpID09PSByaWdodC50b0xvd2VyQ2FzZSgpKTtcbiAgICB9XG4gIH0sXG4gIHJlbW92ZUVtcHR5KGFycmF5KSB7XG4gICAgbGV0IHJldCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhcnJheVtpXSkge1xuICAgICAgICByZXQucHVzaChhcnJheVtpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH0sXG4gIGNhc3RJbnB1dCh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfSxcbiAgdG9rZW5pemUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUuc3BsaXQoJycpO1xuICB9LFxuICBqb2luKGNoYXJzKSB7XG4gICAgcmV0dXJuIGNoYXJzLmpvaW4oJycpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBidWlsZFZhbHVlcyhkaWZmLCBjb21wb25lbnRzLCBuZXdTdHJpbmcsIG9sZFN0cmluZywgdXNlTG9uZ2VzdFRva2VuKSB7XG4gIGxldCBjb21wb25lbnRQb3MgPSAwLFxuICAgICAgY29tcG9uZW50TGVuID0gY29tcG9uZW50cy5sZW5ndGgsXG4gICAgICBuZXdQb3MgPSAwLFxuICAgICAgb2xkUG9zID0gMDtcblxuICBmb3IgKDsgY29tcG9uZW50UG9zIDwgY29tcG9uZW50TGVuOyBjb21wb25lbnRQb3MrKykge1xuICAgIGxldCBjb21wb25lbnQgPSBjb21wb25lbnRzW2NvbXBvbmVudFBvc107XG4gICAgaWYgKCFjb21wb25lbnQucmVtb3ZlZCkge1xuICAgICAgaWYgKCFjb21wb25lbnQuYWRkZWQgJiYgdXNlTG9uZ2VzdFRva2VuKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IG5ld1N0cmluZy5zbGljZShuZXdQb3MsIG5ld1BvcyArIGNvbXBvbmVudC5jb3VudCk7XG4gICAgICAgIHZhbHVlID0gdmFsdWUubWFwKGZ1bmN0aW9uKHZhbHVlLCBpKSB7XG4gICAgICAgICAgbGV0IG9sZFZhbHVlID0gb2xkU3RyaW5nW29sZFBvcyArIGldO1xuICAgICAgICAgIHJldHVybiBvbGRWYWx1ZS5sZW5ndGggPiB2YWx1ZS5sZW5ndGggPyBvbGRWYWx1ZSA6IHZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb21wb25lbnQudmFsdWUgPSBkaWZmLmpvaW4odmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tcG9uZW50LnZhbHVlID0gZGlmZi5qb2luKG5ld1N0cmluZy5zbGljZShuZXdQb3MsIG5ld1BvcyArIGNvbXBvbmVudC5jb3VudCkpO1xuICAgICAgfVxuICAgICAgbmV3UG9zICs9IGNvbXBvbmVudC5jb3VudDtcblxuICAgICAgLy8gQ29tbW9uIGNhc2VcbiAgICAgIGlmICghY29tcG9uZW50LmFkZGVkKSB7XG4gICAgICAgIG9sZFBvcyArPSBjb21wb25lbnQuY291bnQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBvbmVudC52YWx1ZSA9IGRpZmYuam9pbihvbGRTdHJpbmcuc2xpY2Uob2xkUG9zLCBvbGRQb3MgKyBjb21wb25lbnQuY291bnQpKTtcbiAgICAgIG9sZFBvcyArPSBjb21wb25lbnQuY291bnQ7XG5cbiAgICAgIC8vIFJldmVyc2UgYWRkIGFuZCByZW1vdmUgc28gcmVtb3ZlcyBhcmUgb3V0cHV0IGZpcnN0IHRvIG1hdGNoIGNvbW1vbiBjb252ZW50aW9uXG4gICAgICAvLyBUaGUgZGlmZmluZyBhbGdvcml0aG0gaXMgdGllZCB0byBhZGQgdGhlbiByZW1vdmUgb3V0cHV0IGFuZCB0aGlzIGlzIHRoZSBzaW1wbGVzdFxuICAgICAgLy8gcm91dGUgdG8gZ2V0IHRoZSBkZXNpcmVkIG91dHB1dCB3aXRoIG1pbmltYWwgb3ZlcmhlYWQuXG4gICAgICBpZiAoY29tcG9uZW50UG9zICYmIGNvbXBvbmVudHNbY29tcG9uZW50UG9zIC0gMV0uYWRkZWQpIHtcbiAgICAgICAgbGV0IHRtcCA9IGNvbXBvbmVudHNbY29tcG9uZW50UG9zIC0gMV07XG4gICAgICAgIGNvbXBvbmVudHNbY29tcG9uZW50UG9zIC0gMV0gPSBjb21wb25lbnRzW2NvbXBvbmVudFBvc107XG4gICAgICAgIGNvbXBvbmVudHNbY29tcG9uZW50UG9zXSA9IHRtcDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBTcGVjaWFsIGNhc2UgaGFuZGxlIGZvciB3aGVuIG9uZSB0ZXJtaW5hbCBpcyBpZ25vcmVkIChpLmUuIHdoaXRlc3BhY2UpLlxuICAvLyBGb3IgdGhpcyBjYXNlIHdlIG1lcmdlIHRoZSB0ZXJtaW5hbCBpbnRvIHRoZSBwcmlvciBzdHJpbmcgYW5kIGRyb3AgdGhlIGNoYW5nZS5cbiAgLy8gVGhpcyBpcyBvbmx5IGF2YWlsYWJsZSBmb3Igc3RyaW5nIG1vZGUuXG4gIGxldCBsYXN0Q29tcG9uZW50ID0gY29tcG9uZW50c1tjb21wb25lbnRMZW4gLSAxXTtcbiAgaWYgKGNvbXBvbmVudExlbiA+IDFcbiAgICAgICYmIHR5cGVvZiBsYXN0Q29tcG9uZW50LnZhbHVlID09PSAnc3RyaW5nJ1xuICAgICAgJiYgKGxhc3RDb21wb25lbnQuYWRkZWQgfHwgbGFzdENvbXBvbmVudC5yZW1vdmVkKVxuICAgICAgJiYgZGlmZi5lcXVhbHMoJycsIGxhc3RDb21wb25lbnQudmFsdWUpKSB7XG4gICAgY29tcG9uZW50c1tjb21wb25lbnRMZW4gLSAyXS52YWx1ZSArPSBsYXN0Q29tcG9uZW50LnZhbHVlO1xuICAgIGNvbXBvbmVudHMucG9wKCk7XG4gIH1cblxuICByZXR1cm4gY29tcG9uZW50cztcbn1cblxuZnVuY3Rpb24gY2xvbmVQYXRoKHBhdGgpIHtcbiAgcmV0dXJuIHsgbmV3UG9zOiBwYXRoLm5ld1BvcywgY29tcG9uZW50czogcGF0aC5jb21wb25lbnRzLnNsaWNlKDApIH07XG59XG4iXX0=


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	/*istanbul ignore start*/'use strict';

	exports.__esModule = true;
	exports.characterDiff = undefined;
	exports. /*istanbul ignore end*/diffChars = diffChars;

	var /*istanbul ignore start*/_base = __webpack_require__(1) /*istanbul ignore end*/;

	/*istanbul ignore start*/var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/*istanbul ignore end*/var characterDiff = /*istanbul ignore start*/exports. /*istanbul ignore end*/characterDiff = new /*istanbul ignore start*/_base2['default'] /*istanbul ignore end*/();
	function diffChars(oldStr, newStr, options) {
	  return characterDiff.diff(oldStr, newStr, options);
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2NoYXJhY3Rlci5qcyJdLCJuYW1lcyI6WyJkaWZmQ2hhcnMiLCJjaGFyYWN0ZXJEaWZmIiwib2xkU3RyIiwibmV3U3RyIiwib3B0aW9ucyIsImRpZmYiXSwibWFwcGluZ3MiOiI7Ozs7Z0NBR2dCQSxTLEdBQUFBLFM7O0FBSGhCOzs7Ozs7dUJBRU8sSUFBTUMseUZBQWdCLHdFQUF0QjtBQUNBLFNBQVNELFNBQVQsQ0FBbUJFLE1BQW5CLEVBQTJCQyxNQUEzQixFQUFtQ0MsT0FBbkMsRUFBNEM7QUFBRSxTQUFPSCxjQUFjSSxJQUFkLENBQW1CSCxNQUFuQixFQUEyQkMsTUFBM0IsRUFBbUNDLE9BQW5DLENBQVA7QUFBcUQiLCJmaWxlIjoiY2hhcmFjdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpZmYgZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGNvbnN0IGNoYXJhY3RlckRpZmYgPSBuZXcgRGlmZigpO1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmZDaGFycyhvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucykgeyByZXR1cm4gY2hhcmFjdGVyRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBvcHRpb25zKTsgfVxuIl19


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	/*istanbul ignore start*/'use strict';

	exports.__esModule = true;
	exports.wordDiff = undefined;
	exports. /*istanbul ignore end*/diffWords = diffWords;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/diffWordsWithSpace = diffWordsWithSpace;

	var /*istanbul ignore start*/_base = __webpack_require__(1) /*istanbul ignore end*/;

	/*istanbul ignore start*/var _base2 = _interopRequireDefault(_base);

	/*istanbul ignore end*/var /*istanbul ignore start*/_params = __webpack_require__(4) /*istanbul ignore end*/;

	/*istanbul ignore start*/function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/*istanbul ignore end*/ // Based on https://en.wikipedia.org/wiki/Latin_script_in_Unicode
	//
	// Ranges and exceptions:
	// Latin-1 Supplement, 0080–00FF
	//  - U+00D7  × Multiplication sign
	//  - U+00F7  ÷ Division sign
	// Latin Extended-A, 0100–017F
	// Latin Extended-B, 0180–024F
	// IPA Extensions, 0250–02AF
	// Spacing Modifier Letters, 02B0–02FF
	//  - U+02C7  ˇ &#711;  Caron
	//  - U+02D8  ˘ &#728;  Breve
	//  - U+02D9  ˙ &#729;  Dot Above
	//  - U+02DA  ˚ &#730;  Ring Above
	//  - U+02DB  ˛ &#731;  Ogonek
	//  - U+02DC  ˜ &#732;  Small Tilde
	//  - U+02DD  ˝ &#733;  Double Acute Accent
	// Latin Extended Additional, 1E00–1EFF
	var extendedWordChars = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/;

	var reWhitespace = /\S/;

	var wordDiff = /*istanbul ignore start*/exports. /*istanbul ignore end*/wordDiff = new /*istanbul ignore start*/_base2['default'] /*istanbul ignore end*/();
	wordDiff.equals = function (left, right) {
	  if (this.options.ignoreCase) {
	    left = left.toLowerCase();
	    right = right.toLowerCase();
	  }
	  return left === right || this.options.ignoreWhitespace && !reWhitespace.test(left) && !reWhitespace.test(right);
	};
	wordDiff.tokenize = function (value) {
	  var tokens = value.split(/(\s+|\b)/);

	  // Join the boundary splits that we do not consider to be boundaries. This is primarily the extended Latin character set.
	  for (var i = 0; i < tokens.length - 1; i++) {
	    // If we have an empty string in the next field and we have only word chars before and after, merge
	    if (!tokens[i + 1] && tokens[i + 2] && extendedWordChars.test(tokens[i]) && extendedWordChars.test(tokens[i + 2])) {
	      tokens[i] += tokens[i + 2];
	      tokens.splice(i + 1, 2);
	      i--;
	    }
	  }

	  return tokens;
	};

	function diffWords(oldStr, newStr, options) {
	  options = /*istanbul ignore start*/(0, _params.generateOptions) /*istanbul ignore end*/(options, { ignoreWhitespace: true });
	  return wordDiff.diff(oldStr, newStr, options);
	}

	function diffWordsWithSpace(oldStr, newStr, options) {
	  return wordDiff.diff(oldStr, newStr, options);
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL3dvcmQuanMiXSwibmFtZXMiOlsiZGlmZldvcmRzIiwiZGlmZldvcmRzV2l0aFNwYWNlIiwiZXh0ZW5kZWRXb3JkQ2hhcnMiLCJyZVdoaXRlc3BhY2UiLCJ3b3JkRGlmZiIsImVxdWFscyIsImxlZnQiLCJyaWdodCIsIm9wdGlvbnMiLCJpZ25vcmVDYXNlIiwidG9Mb3dlckNhc2UiLCJpZ25vcmVXaGl0ZXNwYWNlIiwidGVzdCIsInRva2VuaXplIiwidmFsdWUiLCJ0b2tlbnMiLCJzcGxpdCIsImkiLCJsZW5ndGgiLCJzcGxpY2UiLCJvbGRTdHIiLCJuZXdTdHIiLCJkaWZmIl0sIm1hcHBpbmdzIjoiOzs7O2dDQW1EZ0JBLFMsR0FBQUEsUzt5REFLQUMsa0IsR0FBQUEsa0I7O0FBeERoQjs7Ozt1QkFDQTs7Ozt3QkFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQyxvQkFBb0IsK0RBQTFCOztBQUVBLElBQU1DLGVBQWUsSUFBckI7O0FBRU8sSUFBTUMsK0VBQVcsd0VBQWpCO0FBQ1BBLFNBQVNDLE1BQVQsR0FBa0IsVUFBU0MsSUFBVCxFQUFlQyxLQUFmLEVBQXNCO0FBQ3RDLE1BQUksS0FBS0MsT0FBTCxDQUFhQyxVQUFqQixFQUE2QjtBQUMzQkgsV0FBT0EsS0FBS0ksV0FBTCxFQUFQO0FBQ0FILFlBQVFBLE1BQU1HLFdBQU4sRUFBUjtBQUNEO0FBQ0QsU0FBT0osU0FBU0MsS0FBVCxJQUFtQixLQUFLQyxPQUFMLENBQWFHLGdCQUFiLElBQWlDLENBQUNSLGFBQWFTLElBQWIsQ0FBa0JOLElBQWxCLENBQWxDLElBQTZELENBQUNILGFBQWFTLElBQWIsQ0FBa0JMLEtBQWxCLENBQXhGO0FBQ0QsQ0FORDtBQU9BSCxTQUFTUyxRQUFULEdBQW9CLFVBQVNDLEtBQVQsRUFBZ0I7QUFDbEMsTUFBSUMsU0FBU0QsTUFBTUUsS0FBTixDQUFZLFVBQVosQ0FBYjs7QUFFQTtBQUNBLE9BQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRixPQUFPRyxNQUFQLEdBQWdCLENBQXBDLEVBQXVDRCxHQUF2QyxFQUE0QztBQUMxQztBQUNBLFFBQUksQ0FBQ0YsT0FBT0UsSUFBSSxDQUFYLENBQUQsSUFBa0JGLE9BQU9FLElBQUksQ0FBWCxDQUFsQixJQUNLZixrQkFBa0JVLElBQWxCLENBQXVCRyxPQUFPRSxDQUFQLENBQXZCLENBREwsSUFFS2Ysa0JBQWtCVSxJQUFsQixDQUF1QkcsT0FBT0UsSUFBSSxDQUFYLENBQXZCLENBRlQsRUFFZ0Q7QUFDOUNGLGFBQU9FLENBQVAsS0FBYUYsT0FBT0UsSUFBSSxDQUFYLENBQWI7QUFDQUYsYUFBT0ksTUFBUCxDQUFjRixJQUFJLENBQWxCLEVBQXFCLENBQXJCO0FBQ0FBO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPRixNQUFQO0FBQ0QsQ0FoQkQ7O0FBa0JPLFNBQVNmLFNBQVQsQ0FBbUJvQixNQUFuQixFQUEyQkMsTUFBM0IsRUFBbUNiLE9BQW5DLEVBQTRDO0FBQ2pEQSxZQUFVLDhFQUFnQkEsT0FBaEIsRUFBeUIsRUFBQ0csa0JBQWtCLElBQW5CLEVBQXpCLENBQVY7QUFDQSxTQUFPUCxTQUFTa0IsSUFBVCxDQUFjRixNQUFkLEVBQXNCQyxNQUF0QixFQUE4QmIsT0FBOUIsQ0FBUDtBQUNEOztBQUVNLFNBQVNQLGtCQUFULENBQTRCbUIsTUFBNUIsRUFBb0NDLE1BQXBDLEVBQTRDYixPQUE1QyxFQUFxRDtBQUMxRCxTQUFPSixTQUFTa0IsSUFBVCxDQUFjRixNQUFkLEVBQXNCQyxNQUF0QixFQUE4QmIsT0FBOUIsQ0FBUDtBQUNEIiwiZmlsZSI6IndvcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGlmZiBmcm9tICcuL2Jhc2UnO1xuaW1wb3J0IHtnZW5lcmF0ZU9wdGlvbnN9IGZyb20gJy4uL3V0aWwvcGFyYW1zJztcblxuLy8gQmFzZWQgb24gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTGF0aW5fc2NyaXB0X2luX1VuaWNvZGVcbi8vXG4vLyBSYW5nZXMgYW5kIGV4Y2VwdGlvbnM6XG4vLyBMYXRpbi0xIFN1cHBsZW1lbnQsIDAwODDigJMwMEZGXG4vLyAgLSBVKzAwRDcgIMOXIE11bHRpcGxpY2F0aW9uIHNpZ25cbi8vICAtIFUrMDBGNyAgw7cgRGl2aXNpb24gc2lnblxuLy8gTGF0aW4gRXh0ZW5kZWQtQSwgMDEwMOKAkzAxN0Zcbi8vIExhdGluIEV4dGVuZGVkLUIsIDAxODDigJMwMjRGXG4vLyBJUEEgRXh0ZW5zaW9ucywgMDI1MOKAkzAyQUZcbi8vIFNwYWNpbmcgTW9kaWZpZXIgTGV0dGVycywgMDJCMOKAkzAyRkZcbi8vICAtIFUrMDJDNyAgy4cgJiM3MTE7ICBDYXJvblxuLy8gIC0gVSswMkQ4ICDLmCAmIzcyODsgIEJyZXZlXG4vLyAgLSBVKzAyRDkgIMuZICYjNzI5OyAgRG90IEFib3ZlXG4vLyAgLSBVKzAyREEgIMuaICYjNzMwOyAgUmluZyBBYm92ZVxuLy8gIC0gVSswMkRCICDLmyAmIzczMTsgIE9nb25la1xuLy8gIC0gVSswMkRDICDLnCAmIzczMjsgIFNtYWxsIFRpbGRlXG4vLyAgLSBVKzAyREQgIMudICYjNzMzOyAgRG91YmxlIEFjdXRlIEFjY2VudFxuLy8gTGF0aW4gRXh0ZW5kZWQgQWRkaXRpb25hbCwgMUUwMOKAkzFFRkZcbmNvbnN0IGV4dGVuZGVkV29yZENoYXJzID0gL15bYS16QS1aXFx1e0MwfS1cXHV7RkZ9XFx1e0Q4fS1cXHV7RjZ9XFx1e0Y4fS1cXHV7MkM2fVxcdXsyQzh9LVxcdXsyRDd9XFx1ezJERX0tXFx1ezJGRn1cXHV7MUUwMH0tXFx1ezFFRkZ9XSskL3U7XG5cbmNvbnN0IHJlV2hpdGVzcGFjZSA9IC9cXFMvO1xuXG5leHBvcnQgY29uc3Qgd29yZERpZmYgPSBuZXcgRGlmZigpO1xud29yZERpZmYuZXF1YWxzID0gZnVuY3Rpb24obGVmdCwgcmlnaHQpIHtcbiAgaWYgKHRoaXMub3B0aW9ucy5pZ25vcmVDYXNlKSB7XG4gICAgbGVmdCA9IGxlZnQudG9Mb3dlckNhc2UoKTtcbiAgICByaWdodCA9IHJpZ2h0LnRvTG93ZXJDYXNlKCk7XG4gIH1cbiAgcmV0dXJuIGxlZnQgPT09IHJpZ2h0IHx8ICh0aGlzLm9wdGlvbnMuaWdub3JlV2hpdGVzcGFjZSAmJiAhcmVXaGl0ZXNwYWNlLnRlc3QobGVmdCkgJiYgIXJlV2hpdGVzcGFjZS50ZXN0KHJpZ2h0KSk7XG59O1xud29yZERpZmYudG9rZW5pemUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBsZXQgdG9rZW5zID0gdmFsdWUuc3BsaXQoLyhcXHMrfFxcYikvKTtcblxuICAvLyBKb2luIHRoZSBib3VuZGFyeSBzcGxpdHMgdGhhdCB3ZSBkbyBub3QgY29uc2lkZXIgdG8gYmUgYm91bmRhcmllcy4gVGhpcyBpcyBwcmltYXJpbHkgdGhlIGV4dGVuZGVkIExhdGluIGNoYXJhY3RlciBzZXQuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIC8vIElmIHdlIGhhdmUgYW4gZW1wdHkgc3RyaW5nIGluIHRoZSBuZXh0IGZpZWxkIGFuZCB3ZSBoYXZlIG9ubHkgd29yZCBjaGFycyBiZWZvcmUgYW5kIGFmdGVyLCBtZXJnZVxuICAgIGlmICghdG9rZW5zW2kgKyAxXSAmJiB0b2tlbnNbaSArIDJdXG4gICAgICAgICAgJiYgZXh0ZW5kZWRXb3JkQ2hhcnMudGVzdCh0b2tlbnNbaV0pXG4gICAgICAgICAgJiYgZXh0ZW5kZWRXb3JkQ2hhcnMudGVzdCh0b2tlbnNbaSArIDJdKSkge1xuICAgICAgdG9rZW5zW2ldICs9IHRva2Vuc1tpICsgMl07XG4gICAgICB0b2tlbnMuc3BsaWNlKGkgKyAxLCAyKTtcbiAgICAgIGktLTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdG9rZW5zO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRpZmZXb3JkcyhvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucykge1xuICBvcHRpb25zID0gZ2VuZXJhdGVPcHRpb25zKG9wdGlvbnMsIHtpZ25vcmVXaGl0ZXNwYWNlOiB0cnVlfSk7XG4gIHJldHVybiB3b3JkRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBvcHRpb25zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpZmZXb3Jkc1dpdGhTcGFjZShvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucykge1xuICByZXR1cm4gd29yZERpZmYuZGlmZihvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucyk7XG59XG4iXX0=


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	/*istanbul ignore start*/'use strict';

	exports.__esModule = true;
	exports. /*istanbul ignore end*/generateOptions = generateOptions;
	function generateOptions(options, defaults) {
	  if (typeof options === 'function') {
	    defaults.callback = options;
	  } else if (options) {
	    for (var name in options) {
	      /* istanbul ignore else */
	      if (options.hasOwnProperty(name)) {
	        defaults[name] = options[name];
	      }
	    }
	  }
	  return defaults;
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL3BhcmFtcy5qcyJdLCJuYW1lcyI6WyJnZW5lcmF0ZU9wdGlvbnMiLCJvcHRpb25zIiwiZGVmYXVsdHMiLCJjYWxsYmFjayIsIm5hbWUiLCJoYXNPd25Qcm9wZXJ0eSJdLCJtYXBwaW5ncyI6Ijs7O2dDQUFnQkEsZSxHQUFBQSxlO0FBQVQsU0FBU0EsZUFBVCxDQUF5QkMsT0FBekIsRUFBa0NDLFFBQWxDLEVBQTRDO0FBQ2pELE1BQUksT0FBT0QsT0FBUCxLQUFtQixVQUF2QixFQUFtQztBQUNqQ0MsYUFBU0MsUUFBVCxHQUFvQkYsT0FBcEI7QUFDRCxHQUZELE1BRU8sSUFBSUEsT0FBSixFQUFhO0FBQ2xCLFNBQUssSUFBSUcsSUFBVCxJQUFpQkgsT0FBakIsRUFBMEI7QUFDeEI7QUFDQSxVQUFJQSxRQUFRSSxjQUFSLENBQXVCRCxJQUF2QixDQUFKLEVBQWtDO0FBQ2hDRixpQkFBU0UsSUFBVCxJQUFpQkgsUUFBUUcsSUFBUixDQUFqQjtBQUNEO0FBQ0Y7QUFDRjtBQUNELFNBQU9GLFFBQVA7QUFDRCIsImZpbGUiOiJwYXJhbXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVPcHRpb25zKG9wdGlvbnMsIGRlZmF1bHRzKSB7XG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGRlZmF1bHRzLmNhbGxiYWNrID0gb3B0aW9ucztcbiAgfSBlbHNlIGlmIChvcHRpb25zKSB7XG4gICAgZm9yIChsZXQgbmFtZSBpbiBvcHRpb25zKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgZGVmYXVsdHNbbmFtZV0gPSBvcHRpb25zW25hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZGVmYXVsdHM7XG59XG4iXX0=


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/*istanbul ignore start*/'use strict';

	exports.__esModule = true;
	exports.lineDiff = undefined;
	exports. /*istanbul ignore end*/diffLines = diffLines;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/diffTrimmedLines = diffTrimmedLines;

	var /*istanbul ignore start*/_base = __webpack_require__(1) /*istanbul ignore end*/;

	/*istanbul ignore start*/var _base2 = _interopRequireDefault(_base);

	/*istanbul ignore end*/var /*istanbul ignore start*/_params = __webpack_require__(4) /*istanbul ignore end*/;

	/*istanbul ignore start*/function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/*istanbul ignore end*/var lineDiff = /*istanbul ignore start*/exports. /*istanbul ignore end*/lineDiff = new /*istanbul ignore start*/_base2['default'] /*istanbul ignore end*/();
	lineDiff.tokenize = function (value) {
	  var retLines = [],
	      linesAndNewlines = value.split(/(\n|\r\n)/);

	  // Ignore the final empty token that occurs if the string ends with a new line
	  if (!linesAndNewlines[linesAndNewlines.length - 1]) {
	    linesAndNewlines.pop();
	  }

	  // Merge the content and line separators into single tokens
	  for (var i = 0; i < linesAndNewlines.length; i++) {
	    var line = linesAndNewlines[i];

	    if (i % 2 && !this.options.newlineIsToken) {
	      retLines[retLines.length - 1] += line;
	    } else {
	      if (this.options.ignoreWhitespace) {
	        line = line.trim();
	      }
	      retLines.push(line);
	    }
	  }

	  return retLines;
	};

	function diffLines(oldStr, newStr, callback) {
	  return lineDiff.diff(oldStr, newStr, callback);
	}
	function diffTrimmedLines(oldStr, newStr, callback) {
	  var options = /*istanbul ignore start*/(0, _params.generateOptions) /*istanbul ignore end*/(callback, { ignoreWhitespace: true });
	  return lineDiff.diff(oldStr, newStr, options);
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2xpbmUuanMiXSwibmFtZXMiOlsiZGlmZkxpbmVzIiwiZGlmZlRyaW1tZWRMaW5lcyIsImxpbmVEaWZmIiwidG9rZW5pemUiLCJ2YWx1ZSIsInJldExpbmVzIiwibGluZXNBbmROZXdsaW5lcyIsInNwbGl0IiwibGVuZ3RoIiwicG9wIiwiaSIsImxpbmUiLCJvcHRpb25zIiwibmV3bGluZUlzVG9rZW4iLCJpZ25vcmVXaGl0ZXNwYWNlIiwidHJpbSIsInB1c2giLCJvbGRTdHIiLCJuZXdTdHIiLCJjYWxsYmFjayIsImRpZmYiXSwibWFwcGluZ3MiOiI7Ozs7Z0NBOEJnQkEsUyxHQUFBQSxTO3lEQUNBQyxnQixHQUFBQSxnQjs7QUEvQmhCOzs7O3VCQUNBOzs7O3VCQUVPLElBQU1DLCtFQUFXLHdFQUFqQjtBQUNQQSxTQUFTQyxRQUFULEdBQW9CLFVBQVNDLEtBQVQsRUFBZ0I7QUFDbEMsTUFBSUMsV0FBVyxFQUFmO0FBQUEsTUFDSUMsbUJBQW1CRixNQUFNRyxLQUFOLENBQVksV0FBWixDQUR2Qjs7QUFHQTtBQUNBLE1BQUksQ0FBQ0QsaUJBQWlCQSxpQkFBaUJFLE1BQWpCLEdBQTBCLENBQTNDLENBQUwsRUFBb0Q7QUFDbERGLHFCQUFpQkcsR0FBakI7QUFDRDs7QUFFRDtBQUNBLE9BQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJSixpQkFBaUJFLE1BQXJDLEVBQTZDRSxHQUE3QyxFQUFrRDtBQUNoRCxRQUFJQyxPQUFPTCxpQkFBaUJJLENBQWpCLENBQVg7O0FBRUEsUUFBSUEsSUFBSSxDQUFKLElBQVMsQ0FBQyxLQUFLRSxPQUFMLENBQWFDLGNBQTNCLEVBQTJDO0FBQ3pDUixlQUFTQSxTQUFTRyxNQUFULEdBQWtCLENBQTNCLEtBQWlDRyxJQUFqQztBQUNELEtBRkQsTUFFTztBQUNMLFVBQUksS0FBS0MsT0FBTCxDQUFhRSxnQkFBakIsRUFBbUM7QUFDakNILGVBQU9BLEtBQUtJLElBQUwsRUFBUDtBQUNEO0FBQ0RWLGVBQVNXLElBQVQsQ0FBY0wsSUFBZDtBQUNEO0FBQ0Y7O0FBRUQsU0FBT04sUUFBUDtBQUNELENBeEJEOztBQTBCTyxTQUFTTCxTQUFULENBQW1CaUIsTUFBbkIsRUFBMkJDLE1BQTNCLEVBQW1DQyxRQUFuQyxFQUE2QztBQUFFLFNBQU9qQixTQUFTa0IsSUFBVCxDQUFjSCxNQUFkLEVBQXNCQyxNQUF0QixFQUE4QkMsUUFBOUIsQ0FBUDtBQUFpRDtBQUNoRyxTQUFTbEIsZ0JBQVQsQ0FBMEJnQixNQUExQixFQUFrQ0MsTUFBbEMsRUFBMENDLFFBQTFDLEVBQW9EO0FBQ3pELE1BQUlQLFVBQVUsOEVBQWdCTyxRQUFoQixFQUEwQixFQUFDTCxrQkFBa0IsSUFBbkIsRUFBMUIsQ0FBZDtBQUNBLFNBQU9aLFNBQVNrQixJQUFULENBQWNILE1BQWQsRUFBc0JDLE1BQXRCLEVBQThCTixPQUE5QixDQUFQO0FBQ0QiLCJmaWxlIjoibGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEaWZmIGZyb20gJy4vYmFzZSc7XG5pbXBvcnQge2dlbmVyYXRlT3B0aW9uc30gZnJvbSAnLi4vdXRpbC9wYXJhbXMnO1xuXG5leHBvcnQgY29uc3QgbGluZURpZmYgPSBuZXcgRGlmZigpO1xubGluZURpZmYudG9rZW5pemUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBsZXQgcmV0TGluZXMgPSBbXSxcbiAgICAgIGxpbmVzQW5kTmV3bGluZXMgPSB2YWx1ZS5zcGxpdCgvKFxcbnxcXHJcXG4pLyk7XG5cbiAgLy8gSWdub3JlIHRoZSBmaW5hbCBlbXB0eSB0b2tlbiB0aGF0IG9jY3VycyBpZiB0aGUgc3RyaW5nIGVuZHMgd2l0aCBhIG5ldyBsaW5lXG4gIGlmICghbGluZXNBbmROZXdsaW5lc1tsaW5lc0FuZE5ld2xpbmVzLmxlbmd0aCAtIDFdKSB7XG4gICAgbGluZXNBbmROZXdsaW5lcy5wb3AoKTtcbiAgfVxuXG4gIC8vIE1lcmdlIHRoZSBjb250ZW50IGFuZCBsaW5lIHNlcGFyYXRvcnMgaW50byBzaW5nbGUgdG9rZW5zXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXNBbmROZXdsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBsaW5lID0gbGluZXNBbmROZXdsaW5lc1tpXTtcblxuICAgIGlmIChpICUgMiAmJiAhdGhpcy5vcHRpb25zLm5ld2xpbmVJc1Rva2VuKSB7XG4gICAgICByZXRMaW5lc1tyZXRMaW5lcy5sZW5ndGggLSAxXSArPSBsaW5lO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmlnbm9yZVdoaXRlc3BhY2UpIHtcbiAgICAgICAgbGluZSA9IGxpbmUudHJpbSgpO1xuICAgICAgfVxuICAgICAgcmV0TGluZXMucHVzaChsaW5lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmV0TGluZXM7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZGlmZkxpbmVzKG9sZFN0ciwgbmV3U3RyLCBjYWxsYmFjaykgeyByZXR1cm4gbGluZURpZmYuZGlmZihvbGRTdHIsIG5ld1N0ciwgY2FsbGJhY2spOyB9XG5leHBvcnQgZnVuY3Rpb24gZGlmZlRyaW1tZWRMaW5lcyhvbGRTdHIsIG5ld1N0ciwgY2FsbGJhY2spIHtcbiAgbGV0IG9wdGlvbnMgPSBnZW5lcmF0ZU9wdGlvbnMoY2FsbGJhY2ssIHtpZ25vcmVXaGl0ZXNwYWNlOiB0cnVlfSk7XG4gIHJldHVybiBsaW5lRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBvcHRpb25zKTtcbn1cbiJdfQ==


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	/*istanbul ignore start*/'use strict';

	exports.__esModule = true;
	exports.sentenceDiff = undefined;
	exports. /*istanbul ignore end*/diffSentences = diffSentences;

	var /*istanbul ignore start*/_base = __webpack_require__(1) /*istanbul ignore end*/;

	/*istanbul ignore start*/var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/*istanbul ignore end*/var sentenceDiff = /*istanbul ignore start*/exports. /*istanbul ignore end*/sentenceDiff = new /*istanbul ignore start*/_base2['default'] /*istanbul ignore end*/();
	sentenceDiff.tokenize = function (value) {
	  return value.split(/(\S.+?[.!?])(?=\s+|$)/);
	};

	function diffSentences(oldStr, newStr, callback) {
	  return sentenceDiff.diff(oldStr, newStr, callback);
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL3NlbnRlbmNlLmpzIl0sIm5hbWVzIjpbImRpZmZTZW50ZW5jZXMiLCJzZW50ZW5jZURpZmYiLCJ0b2tlbml6ZSIsInZhbHVlIiwic3BsaXQiLCJvbGRTdHIiLCJuZXdTdHIiLCJjYWxsYmFjayIsImRpZmYiXSwibWFwcGluZ3MiOiI7Ozs7Z0NBUWdCQSxhLEdBQUFBLGE7O0FBUmhCOzs7Ozs7dUJBR08sSUFBTUMsdUZBQWUsd0VBQXJCO0FBQ1BBLGFBQWFDLFFBQWIsR0FBd0IsVUFBU0MsS0FBVCxFQUFnQjtBQUN0QyxTQUFPQSxNQUFNQyxLQUFOLENBQVksdUJBQVosQ0FBUDtBQUNELENBRkQ7O0FBSU8sU0FBU0osYUFBVCxDQUF1QkssTUFBdkIsRUFBK0JDLE1BQS9CLEVBQXVDQyxRQUF2QyxFQUFpRDtBQUFFLFNBQU9OLGFBQWFPLElBQWIsQ0FBa0JILE1BQWxCLEVBQTBCQyxNQUExQixFQUFrQ0MsUUFBbEMsQ0FBUDtBQUFxRCIsImZpbGUiOiJzZW50ZW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEaWZmIGZyb20gJy4vYmFzZSc7XG5cblxuZXhwb3J0IGNvbnN0IHNlbnRlbmNlRGlmZiA9IG5ldyBEaWZmKCk7XG5zZW50ZW5jZURpZmYudG9rZW5pemUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUuc3BsaXQoLyhcXFMuKz9bLiE/XSkoPz1cXHMrfCQpLyk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZGlmZlNlbnRlbmNlcyhvbGRTdHIsIG5ld1N0ciwgY2FsbGJhY2spIHsgcmV0dXJuIHNlbnRlbmNlRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBjYWxsYmFjayk7IH1cbiJdfQ==


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	/*istanbul ignore start*/'use strict';

	exports.__esModule = true;
	exports.cssDiff = undefined;
	exports. /*istanbul ignore end*/diffCss = diffCss;

	var /*istanbul ignore start*/_base = __webpack_require__(1) /*istanbul ignore end*/;

	/*istanbul ignore start*/var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/*istanbul ignore end*/var cssDiff = /*istanbul ignore start*/exports. /*istanbul ignore end*/cssDiff = new /*istanbul ignore start*/_base2['default'] /*istanbul ignore end*/();
	cssDiff.tokenize = function (value) {
	  return value.split(/([{}:;,]|\s+)/);
	};

	function diffCss(oldStr, newStr, callback) {
	  return cssDiff.diff(oldStr, newStr, callback);
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2Nzcy5qcyJdLCJuYW1lcyI6WyJkaWZmQ3NzIiwiY3NzRGlmZiIsInRva2VuaXplIiwidmFsdWUiLCJzcGxpdCIsIm9sZFN0ciIsIm5ld1N0ciIsImNhbGxiYWNrIiwiZGlmZiJdLCJtYXBwaW5ncyI6Ijs7OztnQ0FPZ0JBLE8sR0FBQUEsTzs7QUFQaEI7Ozs7Ozt1QkFFTyxJQUFNQyw2RUFBVSx3RUFBaEI7QUFDUEEsUUFBUUMsUUFBUixHQUFtQixVQUFTQyxLQUFULEVBQWdCO0FBQ2pDLFNBQU9BLE1BQU1DLEtBQU4sQ0FBWSxlQUFaLENBQVA7QUFDRCxDQUZEOztBQUlPLFNBQVNKLE9BQVQsQ0FBaUJLLE1BQWpCLEVBQXlCQyxNQUF6QixFQUFpQ0MsUUFBakMsRUFBMkM7QUFBRSxTQUFPTixRQUFRTyxJQUFSLENBQWFILE1BQWIsRUFBcUJDLE1BQXJCLEVBQTZCQyxRQUE3QixDQUFQO0FBQWdEIiwiZmlsZSI6ImNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEaWZmIGZyb20gJy4vYmFzZSc7XG5cbmV4cG9ydCBjb25zdCBjc3NEaWZmID0gbmV3IERpZmYoKTtcbmNzc0RpZmYudG9rZW5pemUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUuc3BsaXQoLyhbe306OyxdfFxccyspLyk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZGlmZkNzcyhvbGRTdHIsIG5ld1N0ciwgY2FsbGJhY2spIHsgcmV0dXJuIGNzc0RpZmYuZGlmZihvbGRTdHIsIG5ld1N0ciwgY2FsbGJhY2spOyB9XG4iXX0=


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	/*istanbul ignore start*/'use strict';

	exports.__esModule = true;
	exports.jsonDiff = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports. /*istanbul ignore end*/diffJson = diffJson;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/canonicalize = canonicalize;

	var /*istanbul ignore start*/_base = __webpack_require__(1) /*istanbul ignore end*/;

	/*istanbul ignore start*/var _base2 = _interopRequireDefault(_base);

	/*istanbul ignore end*/var /*istanbul ignore start*/_line = __webpack_require__(5) /*istanbul ignore end*/;

	/*istanbul ignore start*/function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/*istanbul ignore end*/var objectPrototypeToString = Object.prototype.toString;

	var jsonDiff = /*istanbul ignore start*/exports. /*istanbul ignore end*/jsonDiff = new /*istanbul ignore start*/_base2['default'] /*istanbul ignore end*/();
	// Discriminate between two lines of pretty-printed, serialized JSON where one of them has a
	// dangling comma and the other doesn't. Turns out including the dangling comma yields the nicest output:
	jsonDiff.useLongestToken = true;

	jsonDiff.tokenize = /*istanbul ignore start*/_line.lineDiff /*istanbul ignore end*/.tokenize;
	jsonDiff.castInput = function (value) {
	  /*istanbul ignore start*/var /*istanbul ignore end*/undefinedReplacement = this.options.undefinedReplacement;


	  return typeof value === 'string' ? value : JSON.stringify(canonicalize(value), function (k, v) {
	    if (typeof v === 'undefined') {
	      return undefinedReplacement;
	    }

	    return v;
	  }, '  ');
	};
	jsonDiff.equals = function (left, right) {
	  return (/*istanbul ignore start*/_base2['default'] /*istanbul ignore end*/.prototype.equals.call(jsonDiff, left.replace(/,([\r\n])/g, '$1'), right.replace(/,([\r\n])/g, '$1'))
	  );
	};

	function diffJson(oldObj, newObj, options) {
	  return jsonDiff.diff(oldObj, newObj, options);
	}

	// This function handles the presence of circular references by bailing out when encountering an
	// object that is already on the "stack" of items being processed.
	function canonicalize(obj, stack, replacementStack) {
	  stack = stack || [];
	  replacementStack = replacementStack || [];

	  var i = /*istanbul ignore start*/void 0 /*istanbul ignore end*/;

	  for (i = 0; i < stack.length; i += 1) {
	    if (stack[i] === obj) {
	      return replacementStack[i];
	    }
	  }

	  var canonicalizedObj = /*istanbul ignore start*/void 0 /*istanbul ignore end*/;

	  if ('[object Array]' === objectPrototypeToString.call(obj)) {
	    stack.push(obj);
	    canonicalizedObj = new Array(obj.length);
	    replacementStack.push(canonicalizedObj);
	    for (i = 0; i < obj.length; i += 1) {
	      canonicalizedObj[i] = canonicalize(obj[i], stack, replacementStack);
	    }
	    stack.pop();
	    replacementStack.pop();
	    return canonicalizedObj;
	  }

	  if (obj && obj.toJSON) {
	    obj = obj.toJSON();
	  }

	  if ( /*istanbul ignore start*/(typeof /*istanbul ignore end*/obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj !== null) {
	    stack.push(obj);
	    canonicalizedObj = {};
	    replacementStack.push(canonicalizedObj);
	    var sortedKeys = [],
	        key = /*istanbul ignore start*/void 0 /*istanbul ignore end*/;
	    for (key in obj) {
	      /* istanbul ignore else */
	      if (obj.hasOwnProperty(key)) {
	        sortedKeys.push(key);
	      }
	    }
	    sortedKeys.sort();
	    for (i = 0; i < sortedKeys.length; i += 1) {
	      key = sortedKeys[i];
	      canonicalizedObj[key] = canonicalize(obj[key], stack, replacementStack);
	    }
	    stack.pop();
	    replacementStack.pop();
	  } else {
	    canonicalizedObj = obj;
	  }
	  return canonicalizedObj;
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2pzb24uanMiXSwibmFtZXMiOlsiZGlmZkpzb24iLCJjYW5vbmljYWxpemUiLCJvYmplY3RQcm90b3R5cGVUb1N0cmluZyIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwianNvbkRpZmYiLCJ1c2VMb25nZXN0VG9rZW4iLCJ0b2tlbml6ZSIsImNhc3RJbnB1dCIsInZhbHVlIiwidW5kZWZpbmVkUmVwbGFjZW1lbnQiLCJvcHRpb25zIiwiSlNPTiIsInN0cmluZ2lmeSIsImsiLCJ2IiwiZXF1YWxzIiwibGVmdCIsInJpZ2h0IiwiY2FsbCIsInJlcGxhY2UiLCJvbGRPYmoiLCJuZXdPYmoiLCJkaWZmIiwib2JqIiwic3RhY2siLCJyZXBsYWNlbWVudFN0YWNrIiwiaSIsImxlbmd0aCIsImNhbm9uaWNhbGl6ZWRPYmoiLCJwdXNoIiwiQXJyYXkiLCJwb3AiLCJ0b0pTT04iLCJzb3J0ZWRLZXlzIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJzb3J0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O2dDQTJCZ0JBLFEsR0FBQUEsUTt5REFJQUMsWSxHQUFBQSxZOztBQS9CaEI7Ozs7dUJBQ0E7Ozs7dUJBRUEsSUFBTUMsMEJBQTBCQyxPQUFPQyxTQUFQLENBQWlCQyxRQUFqRDs7QUFHTyxJQUFNQywrRUFBVyx3RUFBakI7QUFDUDtBQUNBO0FBQ0FBLFNBQVNDLGVBQVQsR0FBMkIsSUFBM0I7O0FBRUFELFNBQVNFLFFBQVQsR0FBb0IsZ0VBQVNBLFFBQTdCO0FBQ0FGLFNBQVNHLFNBQVQsR0FBcUIsVUFBU0MsS0FBVCxFQUFnQjtBQUFBLHNEQUM1QkMsb0JBRDRCLEdBQ0osS0FBS0MsT0FERCxDQUM1QkQsb0JBRDRCOzs7QUFHbkMsU0FBTyxPQUFPRCxLQUFQLEtBQWlCLFFBQWpCLEdBQTRCQSxLQUE1QixHQUFvQ0csS0FBS0MsU0FBTCxDQUFlYixhQUFhUyxLQUFiLENBQWYsRUFBb0MsVUFBU0ssQ0FBVCxFQUFZQyxDQUFaLEVBQWU7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QUNELEdBbkJELE1BbUJPO0FBQ0xILHVCQUFtQkwsR0FBbkI7QUFDRDtBQUNELFNBQU9LLGdCQUFQO0FBQ0QiLCJmaWxlIjoianNvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEaWZmIGZyb20gJy4vYmFzZSc7XG5pbXBvcnQge2xpbmVEaWZmfSBmcm9tICcuL2xpbmUnO1xuXG5jb25zdCBvYmplY3RQcm90b3R5cGVUb1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cblxuZXhwb3J0IGNvbnN0IGpzb25EaWZmID0gbmV3IERpZmYoKTtcbi8vIERpc2NyaW1pbmF0ZSBiZXR3ZWVuIHR3byBsaW5lcyBvZiBwcmV0dHktcHJpbnRlZCwgc2VyaWFsaXplZCBKU09OIHdoZXJlIG9uZSBvZiB0aGVtIGhhcyBhXG4vLyBkYW5nbGluZyBjb21tYSBhbmQgdGhlIG90aGVyIGRvZXNuJ3QuIFR1cm5zIG91dCBpbmNsdWRpbmcgdGhlIGRhbmdsaW5nIGNvbW1hIHlpZWxkcyB0aGUgbmljZXN0IG91dHB1dDpcbmpzb25EaWZmLnVzZUxvbmdlc3RUb2tlbiA9IHRydWU7XG5cbmpzb25EaWZmLnRva2VuaXplID0gbGluZURpZmYudG9rZW5pemU7XG5qc29uRGlmZi5jYXN0SW5wdXQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBjb25zdCB7dW5kZWZpbmVkUmVwbGFjZW1lbnR9ID0gdGhpcy5vcHRpb25zO1xuXG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gdmFsdWUgOiBKU09OLnN0cmluZ2lmeShjYW5vbmljYWxpemUodmFsdWUpLCBmdW5jdGlvbihrLCB2KSB7XG4gICAgaWYgKHR5cGVvZiB2ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZFJlcGxhY2VtZW50O1xuICAgIH1cblxuICAgIHJldHVybiB2O1xuICB9LCAnICAnKTtcbn07XG5qc29uRGlmZi5lcXVhbHMgPSBmdW5jdGlvbihsZWZ0LCByaWdodCkge1xuICByZXR1cm4gRGlmZi5wcm90b3R5cGUuZXF1YWxzLmNhbGwoanNvbkRpZmYsIGxlZnQucmVwbGFjZSgvLChbXFxyXFxuXSkvZywgJyQxJyksIHJpZ2h0LnJlcGxhY2UoLywoW1xcclxcbl0pL2csICckMScpKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBkaWZmSnNvbihvbGRPYmosIG5ld09iaiwgb3B0aW9ucykgeyByZXR1cm4ganNvbkRpZmYuZGlmZihvbGRPYmosIG5ld09iaiwgb3B0aW9ucyk7IH1cblxuLy8gVGhpcyBmdW5jdGlvbiBoYW5kbGVzIHRoZSBwcmVzZW5jZSBvZiBjaXJjdWxhciByZWZlcmVuY2VzIGJ5IGJhaWxpbmcgb3V0IHdoZW4gZW5jb3VudGVyaW5nIGFuXG4vLyBvYmplY3QgdGhhdCBpcyBhbHJlYWR5IG9uIHRoZSBcInN0YWNrXCIgb2YgaXRlbXMgYmVpbmcgcHJvY2Vzc2VkLlxuZXhwb3J0IGZ1bmN0aW9uIGNhbm9uaWNhbGl6ZShvYmosIHN0YWNrLCByZXBsYWNlbWVudFN0YWNrKSB7XG4gIHN0YWNrID0gc3RhY2sgfHwgW107XG4gIHJlcGxhY2VtZW50U3RhY2sgPSByZXBsYWNlbWVudFN0YWNrIHx8IFtdO1xuXG4gIGxldCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzdGFjay5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChzdGFja1tpXSA9PT0gb2JqKSB7XG4gICAgICByZXR1cm4gcmVwbGFjZW1lbnRTdGFja1tpXTtcbiAgICB9XG4gIH1cblxuICBsZXQgY2Fub25pY2FsaXplZE9iajtcblxuICBpZiAoJ1tvYmplY3QgQXJyYXldJyA9PT0gb2JqZWN0UHJvdG90eXBlVG9TdHJpbmcuY2FsbChvYmopKSB7XG4gICAgc3RhY2sucHVzaChvYmopO1xuICAgIGNhbm9uaWNhbGl6ZWRPYmogPSBuZXcgQXJyYXkob2JqLmxlbmd0aCk7XG4gICAgcmVwbGFjZW1lbnRTdGFjay5wdXNoKGNhbm9uaWNhbGl6ZWRPYmopO1xuICAgIGZvciAoaSA9IDA7IGkgPCBvYmoubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNhbm9uaWNhbGl6ZWRPYmpbaV0gPSBjYW5vbmljYWxpemUob2JqW2ldLCBzdGFjaywgcmVwbGFjZW1lbnRTdGFjayk7XG4gICAgfVxuICAgIHN0YWNrLnBvcCgpO1xuICAgIHJlcGxhY2VtZW50U3RhY2sucG9wKCk7XG4gICAgcmV0dXJuIGNhbm9uaWNhbGl6ZWRPYmo7XG4gIH1cblxuICBpZiAob2JqICYmIG9iai50b0pTT04pIHtcbiAgICBvYmogPSBvYmoudG9KU09OKCk7XG4gIH1cblxuICBpZiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgb2JqICE9PSBudWxsKSB7XG4gICAgc3RhY2sucHVzaChvYmopO1xuICAgIGNhbm9uaWNhbGl6ZWRPYmogPSB7fTtcbiAgICByZXBsYWNlbWVudFN0YWNrLnB1c2goY2Fub25pY2FsaXplZE9iaik7XG4gICAgbGV0IHNvcnRlZEtleXMgPSBbXSxcbiAgICAgICAga2V5O1xuICAgIGZvciAoa2V5IGluIG9iaikge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBzb3J0ZWRLZXlzLnB1c2goa2V5KTtcbiAgICAgIH1cbiAgICB9XG4gICAgc29ydGVkS2V5cy5zb3J0KCk7XG4gICAgZm9yIChpID0gMDsgaSA8IHNvcnRlZEtleXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGtleSA9IHNvcnRlZEtleXNbaV07XG4gICAgICBjYW5vbmljYWxpemVkT2JqW2tleV0gPSBjYW5vbmljYWxpemUob2JqW2tleV0sIHN0YWNrLCByZXBsYWNlbWVudFN0YWNrKTtcbiAgICB9XG4gICAgc3RhY2sucG9wKCk7XG4gICAgcmVwbGFjZW1lbnRTdGFjay5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBjYW5vbmljYWxpemVkT2JqID0gb2JqO1xuICB9XG4gIHJldHVybiBjYW5vbmljYWxpemVkT2JqO1xufVxuIl19


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	/*istanbul ignore start*/'use strict';

	exports.__esModule = true;
	exports.arrayDiff = undefined;
	exports. /*istanbul ignore end*/diffArrays = diffArrays;

	var /*istanbul ignore start*/_base = __webpack_require__(1) /*istanbul ignore end*/;

	/*istanbul ignore start*/var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/*istanbul ignore end*/var arrayDiff = /*istanbul ignore start*/exports. /*istanbul ignore end*/arrayDiff = new /*istanbul ignore start*/_base2['default'] /*istanbul ignore end*/();
	arrayDiff.tokenize = arrayDiff.join = function (value) {
	  return value.slice();
	};
	arrayDiff.removeEmpty = function (value) {
	  return value;
	};

	function diffArrays(oldArr, newArr, callback) {
	  return arrayDiff.diff(oldArr, newArr, callback);
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2FycmF5LmpzIl0sIm5hbWVzIjpbImRpZmZBcnJheXMiLCJhcnJheURpZmYiLCJ0b2tlbml6ZSIsImpvaW4iLCJ2YWx1ZSIsInNsaWNlIiwicmVtb3ZlRW1wdHkiLCJvbGRBcnIiLCJuZXdBcnIiLCJjYWxsYmFjayIsImRpZmYiXSwibWFwcGluZ3MiOiI7Ozs7Z0NBVWdCQSxVLEdBQUFBLFU7O0FBVmhCOzs7Ozs7dUJBRU8sSUFBTUMsaUZBQVksd0VBQWxCO0FBQ1BBLFVBQVVDLFFBQVYsR0FBcUJELFVBQVVFLElBQVYsR0FBaUIsVUFBU0MsS0FBVCxFQUFnQjtBQUNwRCxTQUFPQSxNQUFNQyxLQUFOLEVBQVA7QUFDRCxDQUZEO0FBR0FKLFVBQVVLLFdBQVYsR0FBd0IsVUFBU0YsS0FBVCxFQUFnQjtBQUN0QyxTQUFPQSxLQUFQO0FBQ0QsQ0FGRDs7QUFJTyxTQUFTSixVQUFULENBQW9CTyxNQUFwQixFQUE0QkMsTUFBNUIsRUFBb0NDLFFBQXBDLEVBQThDO0FBQUUsU0FBT1IsVUFBVVMsSUFBVixDQUFlSCxNQUFmLEVBQXVCQyxNQUF2QixFQUErQkMsUUFBL0IsQ0FBUDtBQUFrRCIsImZpbGUiOiJhcnJheS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEaWZmIGZyb20gJy4vYmFzZSc7XG5cbmV4cG9ydCBjb25zdCBhcnJheURpZmYgPSBuZXcgRGlmZigpO1xuYXJyYXlEaWZmLnRva2VuaXplID0gYXJyYXlEaWZmLmpvaW4gPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUuc2xpY2UoKTtcbn07XG5hcnJheURpZmYucmVtb3ZlRW1wdHkgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWU7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZGlmZkFycmF5cyhvbGRBcnIsIG5ld0FyciwgY2FsbGJhY2spIHsgcmV0dXJuIGFycmF5RGlmZi5kaWZmKG9sZEFyciwgbmV3QXJyLCBjYWxsYmFjayk7IH1cbiJdfQ==


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	/*istanbul ignore start*/'use strict';

	exports.__esModule = true;
	exports. /*istanbul ignore end*/applyPatch = applyPatch;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/applyPatches = applyPatches;

	var /*istanbul ignore start*/_parse = __webpack_require__(11) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_distanceIterator = __webpack_require__(12) /*istanbul ignore end*/;

	/*istanbul ignore start*/var _distanceIterator2 = _interopRequireDefault(_distanceIterator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/*istanbul ignore end*/function applyPatch(source, uniDiff) {
	  /*istanbul ignore start*/var /*istanbul ignore end*/options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	  if (typeof uniDiff === 'string') {
	    uniDiff = /*istanbul ignore start*/(0, _parse.parsePatch) /*istanbul ignore end*/(uniDiff);
	  }

	  if (Array.isArray(uniDiff)) {
	    if (uniDiff.length > 1) {
	      throw new Error('applyPatch only works with a single input.');
	    }

	    uniDiff = uniDiff[0];
	  }

	  // Apply the diff to the input
	  var lines = source.split(/\r\n|[\n\v\f\r\x85]/),
	      delimiters = source.match(/\r\n|[\n\v\f\r\x85]/g) || [],
	      hunks = uniDiff.hunks,
	      compareLine = options.compareLine || function (lineNumber, line, operation, patchContent) /*istanbul ignore start*/{
	    return (/*istanbul ignore end*/line === patchContent
	    );
	  },
	      errorCount = 0,
	      fuzzFactor = options.fuzzFactor || 0,
	      minLine = 0,
	      offset = 0,
	      removeEOFNL = /*istanbul ignore start*/void 0 /*istanbul ignore end*/,
	      addEOFNL = /*istanbul ignore start*/void 0 /*istanbul ignore end*/;

	  /**
	   * Checks if the hunk exactly fits on the provided location
	   */
	  function hunkFits(hunk, toPos) {
	    for (var j = 0; j < hunk.lines.length; j++) {
	      var line = hunk.lines[j],
	          operation = line[0],
	          content = line.substr(1);

	      if (operation === ' ' || operation === '-') {
	        // Context sanity check
	        if (!compareLine(toPos + 1, lines[toPos], operation, content)) {
	          errorCount++;

	          if (errorCount > fuzzFactor) {
	            return false;
	          }
	        }
	        toPos++;
	      }
	    }

	    return true;
	  }

	  // Search best fit offsets for each hunk based on the previous ones
	  for (var i = 0; i < hunks.length; i++) {
	    var hunk = hunks[i],
	        maxLine = lines.length - hunk.oldLines,
	        localOffset = 0,
	        toPos = offset + hunk.oldStart - 1;

	    var iterator = /*istanbul ignore start*/(0, _distanceIterator2['default']) /*istanbul ignore end*/(toPos, minLine, maxLine);

	    for (; localOffset !== undefined; localOffset = iterator()) {
	      if (hunkFits(hunk, toPos + localOffset)) {
	        hunk.offset = offset += localOffset;
	        break;
	      }
	    }

	    if (localOffset === undefined) {
	      return false;
	    }

	    // Set lower text limit to end of the current hunk, so next ones don't try
	    // to fit over already patched text
	    minLine = hunk.offset + hunk.oldStart + hunk.oldLines;
	  }

	  // Apply patch hunks
	  var diffOffset = 0;
	  for (var _i = 0; _i < hunks.length; _i++) {
	    var _hunk = hunks[_i],
	        _toPos = _hunk.oldStart + _hunk.offset + diffOffset - 1;
	    diffOffset += _hunk.newLines - _hunk.oldLines;

	    if (_toPos < 0) {
	      // Creating a new file
	      _toPos = 0;
	    }

	    for (var j = 0; j < _hunk.lines.length; j++) {
	      var line = _hunk.lines[j],
	          operation = line[0],
	          content = line.substr(1),
	          delimiter = _hunk.linedelimiters[j];

	      if (operation === ' ') {
	        _toPos++;
	      } else if (operation === '-') {
	        lines.splice(_toPos, 1);
	        delimiters.splice(_toPos, 1);
	        /* istanbul ignore else */
	      } else if (operation === '+') {
	        lines.splice(_toPos, 0, content);
	        delimiters.splice(_toPos, 0, delimiter);
	        _toPos++;
	      } else if (operation === '\\') {
	        var previousOperation = _hunk.lines[j - 1] ? _hunk.lines[j - 1][0] : null;
	        if (previousOperation === '+') {
	          removeEOFNL = true;
	        } else if (previousOperation === '-') {
	          addEOFNL = true;
	        }
	      }
	    }
	  }

	  // Handle EOFNL insertion/removal
	  if (removeEOFNL) {
	    while (!lines[lines.length - 1]) {
	      lines.pop();
	      delimiters.pop();
	    }
	  } else if (addEOFNL) {
	    lines.push('');
	    delimiters.push('\n');
	  }
	  for (var _k = 0; _k < lines.length - 1; _k++) {
	    lines[_k] = lines[_k] + delimiters[_k];
	  }
	  return lines.join('');
	}

	// Wrapper that supports multiple file patches via callbacks.
	function applyPatches(uniDiff, options) {
	  if (typeof uniDiff === 'string') {
	    uniDiff = /*istanbul ignore start*/(0, _parse.parsePatch) /*istanbul ignore end*/(uniDiff);
	  }

	  var currentIndex = 0;
	  function processIndex() {
	    var index = uniDiff[currentIndex++];
	    if (!index) {
	      return options.complete();
	    }

	    options.loadFile(index, function (err, data) {
	      if (err) {
	        return options.complete(err);
	      }

	      var updatedContent = applyPatch(data, index, options);
	      options.patched(index, updatedContent, function (err) {
	        if (err) {
	          return options.complete(err);
	        }

	        processIndex();
	      });
	    });
	  }
	  processIndex();
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXRjaC9hcHBseS5qcyJdLCJuYW1lcyI6WyJhcHBseVBhdGNoIiwiYXBwbHlQYXRjaGVzIiwic291cmNlIiwidW5pRGlmZiIsIm9wdGlvbnMiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJFcnJvciIsImxpbmVzIiwic3BsaXQiLCJkZWxpbWl0ZXJzIiwibWF0Y2giLCJodW5rcyIsImNvbXBhcmVMaW5lIiwibGluZU51bWJlciIsImxpbmUiLCJvcGVyYXRpb24iLCJwYXRjaENvbnRlbnQiLCJlcnJvckNvdW50IiwiZnV6ekZhY3RvciIsIm1pbkxpbmUiLCJvZmZzZXQiLCJyZW1vdmVFT0ZOTCIsImFkZEVPRk5MIiwiaHVua0ZpdHMiLCJodW5rIiwidG9Qb3MiLCJqIiwiY29udGVudCIsInN1YnN0ciIsImkiLCJtYXhMaW5lIiwib2xkTGluZXMiLCJsb2NhbE9mZnNldCIsIm9sZFN0YXJ0IiwiaXRlcmF0b3IiLCJ1bmRlZmluZWQiLCJkaWZmT2Zmc2V0IiwibmV3TGluZXMiLCJkZWxpbWl0ZXIiLCJsaW5lZGVsaW1pdGVycyIsInNwbGljZSIsInByZXZpb3VzT3BlcmF0aW9uIiwicG9wIiwicHVzaCIsIl9rIiwiam9pbiIsImN1cnJlbnRJbmRleCIsInByb2Nlc3NJbmRleCIsImluZGV4IiwiY29tcGxldGUiLCJsb2FkRmlsZSIsImVyciIsImRhdGEiLCJ1cGRhdGVkQ29udGVudCIsInBhdGNoZWQiXSwibWFwcGluZ3MiOiI7OztnQ0FHZ0JBLFUsR0FBQUEsVTt5REFvSUFDLFksR0FBQUEsWTs7QUF2SWhCOztBQUNBOzs7Ozs7dUJBRU8sU0FBU0QsVUFBVCxDQUFvQkUsTUFBcEIsRUFBNEJDLE9BQTVCLEVBQW1EO0FBQUEsc0RBQWRDLE9BQWMsdUVBQUosRUFBSTs7QUFDeEQsTUFBSSxPQUFPRCxPQUFQLEtBQW1CLFFBQXZCLEVBQWlDO0FBQy9CQSxjQUFVLHdFQUFXQSxPQUFYLENBQVY7QUFDRDs7QUFFRCxNQUFJRSxNQUFNQyxP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QUFQO0FBQ0Q7O0FBRUQsVUFBSUUsaUJBQWlCdkQsV0FBV3NELElBQVgsRUFBaUJKLEtBQWpCLEVBQXdCOUMsT0FBeEIsQ0FBckI7QUFDQUEsY0FBUW9ELE9BQVIsQ0FBZ0JOLEtBQWhCLEVBQXVCSyxjQUF2QixFQUF1QyxVQUFTRixHQUFULEVBQWM7QUFDbkQsWUFBSUEsR0FBSixFQUFTO0FBQ1AsaUJBQU9qRCxRQUFRK0MsUUFBUixDQUFpQkUsR0FBakIsQ0FBUDtBQUNEOztBQUVESjtBQUNELE9BTkQ7QUFPRCxLQWJEO0FBY0Q7QUFDREE7QUFDRCIsImZpbGUiOiJhcHBseS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cGFyc2VQYXRjaH0gZnJvbSAnLi9wYXJzZSc7XG5pbXBvcnQgZGlzdGFuY2VJdGVyYXRvciBmcm9tICcuLi91dGlsL2Rpc3RhbmNlLWl0ZXJhdG9yJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UGF0Y2goc291cmNlLCB1bmlEaWZmLCBvcHRpb25zID0ge30pIHtcbiAgaWYgKHR5cGVvZiB1bmlEaWZmID09PSAnc3RyaW5nJykge1xuICAgIHVuaURpZmYgPSBwYXJzZVBhdGNoKHVuaURpZmYpO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodW5pRGlmZikpIHtcbiAgICBpZiAodW5pRGlmZi5sZW5ndGggPiAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FwcGx5UGF0Y2ggb25seSB3b3JrcyB3aXRoIGEgc2luZ2xlIGlucHV0LicpO1xuICAgIH1cblxuICAgIHVuaURpZmYgPSB1bmlEaWZmWzBdO1xuICB9XG5cbiAgLy8gQXBwbHkgdGhlIGRpZmYgdG8gdGhlIGlucHV0XG4gIGxldCBsaW5lcyA9IHNvdXJjZS5zcGxpdCgvXFxyXFxufFtcXG5cXHZcXGZcXHJcXHg4NV0vKSxcbiAgICAgIGRlbGltaXRlcnMgPSBzb3VyY2UubWF0Y2goL1xcclxcbnxbXFxuXFx2XFxmXFxyXFx4ODVdL2cpIHx8IFtdLFxuICAgICAgaHVua3MgPSB1bmlEaWZmLmh1bmtzLFxuXG4gICAgICBjb21wYXJlTGluZSA9IG9wdGlvbnMuY29tcGFyZUxpbmUgfHwgKChsaW5lTnVtYmVyLCBsaW5lLCBvcGVyYXRpb24sIHBhdGNoQ29udGVudCkgPT4gbGluZSA9PT0gcGF0Y2hDb250ZW50KSxcbiAgICAgIGVycm9yQ291bnQgPSAwLFxuICAgICAgZnV6ekZhY3RvciA9IG9wdGlvbnMuZnV6ekZhY3RvciB8fCAwLFxuICAgICAgbWluTGluZSA9IDAsXG4gICAgICBvZmZzZXQgPSAwLFxuXG4gICAgICByZW1vdmVFT0ZOTCxcbiAgICAgIGFkZEVPRk5MO1xuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGh1bmsgZXhhY3RseSBmaXRzIG9uIHRoZSBwcm92aWRlZCBsb2NhdGlvblxuICAgKi9cbiAgZnVuY3Rpb24gaHVua0ZpdHMoaHVuaywgdG9Qb3MpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGh1bmsubGluZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgIGxldCBsaW5lID0gaHVuay5saW5lc1tqXSxcbiAgICAgICAgICBvcGVyYXRpb24gPSBsaW5lWzBdLFxuICAgICAgICAgIGNvbnRlbnQgPSBsaW5lLnN1YnN0cigxKTtcblxuICAgICAgaWYgKG9wZXJhdGlvbiA9PT0gJyAnIHx8IG9wZXJhdGlvbiA9PT0gJy0nKSB7XG4gICAgICAgIC8vIENvbnRleHQgc2FuaXR5IGNoZWNrXG4gICAgICAgIGlmICghY29tcGFyZUxpbmUodG9Qb3MgKyAxLCBsaW5lc1t0b1Bvc10sIG9wZXJhdGlvbiwgY29udGVudCkpIHtcbiAgICAgICAgICBlcnJvckNvdW50Kys7XG5cbiAgICAgICAgICBpZiAoZXJyb3JDb3VudCA+IGZ1enpGYWN0b3IpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdG9Qb3MrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIFNlYXJjaCBiZXN0IGZpdCBvZmZzZXRzIGZvciBlYWNoIGh1bmsgYmFzZWQgb24gdGhlIHByZXZpb3VzIG9uZXNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBodW5rcy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBodW5rID0gaHVua3NbaV0sXG4gICAgICAgIG1heExpbmUgPSBsaW5lcy5sZW5ndGggLSBodW5rLm9sZExpbmVzLFxuICAgICAgICBsb2NhbE9mZnNldCA9IDAsXG4gICAgICAgIHRvUG9zID0gb2Zmc2V0ICsgaHVuay5vbGRTdGFydCAtIDE7XG5cbiAgICBsZXQgaXRlcmF0b3IgPSBkaXN0YW5jZUl0ZXJhdG9yKHRvUG9zLCBtaW5MaW5lLCBtYXhMaW5lKTtcblxuICAgIGZvciAoOyBsb2NhbE9mZnNldCAhPT0gdW5kZWZpbmVkOyBsb2NhbE9mZnNldCA9IGl0ZXJhdG9yKCkpIHtcbiAgICAgIGlmIChodW5rRml0cyhodW5rLCB0b1BvcyArIGxvY2FsT2Zmc2V0KSkge1xuICAgICAgICBodW5rLm9mZnNldCA9IG9mZnNldCArPSBsb2NhbE9mZnNldDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGxvY2FsT2Zmc2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBTZXQgbG93ZXIgdGV4dCBsaW1pdCB0byBlbmQgb2YgdGhlIGN1cnJlbnQgaHVuaywgc28gbmV4dCBvbmVzIGRvbid0IHRyeVxuICAgIC8vIHRvIGZpdCBvdmVyIGFscmVhZHkgcGF0Y2hlZCB0ZXh0XG4gICAgbWluTGluZSA9IGh1bmsub2Zmc2V0ICsgaHVuay5vbGRTdGFydCArIGh1bmsub2xkTGluZXM7XG4gIH1cblxuICAvLyBBcHBseSBwYXRjaCBodW5rc1xuICBsZXQgZGlmZk9mZnNldCA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaHVua3MubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgaHVuayA9IGh1bmtzW2ldLFxuICAgICAgICB0b1BvcyA9IGh1bmsub2xkU3RhcnQgKyBodW5rLm9mZnNldCArIGRpZmZPZmZzZXQgLSAxO1xuICAgIGRpZmZPZmZzZXQgKz0gaHVuay5uZXdMaW5lcyAtIGh1bmsub2xkTGluZXM7XG5cbiAgICBpZiAodG9Qb3MgPCAwKSB7IC8vIENyZWF0aW5nIGEgbmV3IGZpbGVcbiAgICAgIHRvUG9zID0gMDtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGh1bmsubGluZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgIGxldCBsaW5lID0gaHVuay5saW5lc1tqXSxcbiAgICAgICAgICBvcGVyYXRpb24gPSBsaW5lWzBdLFxuICAgICAgICAgIGNvbnRlbnQgPSBsaW5lLnN1YnN0cigxKSxcbiAgICAgICAgICBkZWxpbWl0ZXIgPSBodW5rLmxpbmVkZWxpbWl0ZXJzW2pdO1xuXG4gICAgICBpZiAob3BlcmF0aW9uID09PSAnICcpIHtcbiAgICAgICAgdG9Qb3MrKztcbiAgICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uID09PSAnLScpIHtcbiAgICAgICAgbGluZXMuc3BsaWNlKHRvUG9zLCAxKTtcbiAgICAgICAgZGVsaW1pdGVycy5zcGxpY2UodG9Qb3MsIDEpO1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uID09PSAnKycpIHtcbiAgICAgICAgbGluZXMuc3BsaWNlKHRvUG9zLCAwLCBjb250ZW50KTtcbiAgICAgICAgZGVsaW1pdGVycy5zcGxpY2UodG9Qb3MsIDAsIGRlbGltaXRlcik7XG4gICAgICAgIHRvUG9zKys7XG4gICAgICB9IGVsc2UgaWYgKG9wZXJhdGlvbiA9PT0gJ1xcXFwnKSB7XG4gICAgICAgIGxldCBwcmV2aW91c09wZXJhdGlvbiA9IGh1bmsubGluZXNbaiAtIDFdID8gaHVuay5saW5lc1tqIC0gMV1bMF0gOiBudWxsO1xuICAgICAgICBpZiAocHJldmlvdXNPcGVyYXRpb24gPT09ICcrJykge1xuICAgICAgICAgIHJlbW92ZUVPRk5MID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChwcmV2aW91c09wZXJhdGlvbiA9PT0gJy0nKSB7XG4gICAgICAgICAgYWRkRU9GTkwgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gSGFuZGxlIEVPRk5MIGluc2VydGlvbi9yZW1vdmFsXG4gIGlmIChyZW1vdmVFT0ZOTCkge1xuICAgIHdoaWxlICghbGluZXNbbGluZXMubGVuZ3RoIC0gMV0pIHtcbiAgICAgIGxpbmVzLnBvcCgpO1xuICAgICAgZGVsaW1pdGVycy5wb3AoKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoYWRkRU9GTkwpIHtcbiAgICBsaW5lcy5wdXNoKCcnKTtcbiAgICBkZWxpbWl0ZXJzLnB1c2goJ1xcbicpO1xuICB9XG4gIGZvciAobGV0IF9rID0gMDsgX2sgPCBsaW5lcy5sZW5ndGggLSAxOyBfaysrKSB7XG4gICAgbGluZXNbX2tdID0gbGluZXNbX2tdICsgZGVsaW1pdGVyc1tfa107XG4gIH1cbiAgcmV0dXJuIGxpbmVzLmpvaW4oJycpO1xufVxuXG4vLyBXcmFwcGVyIHRoYXQgc3VwcG9ydHMgbXVsdGlwbGUgZmlsZSBwYXRjaGVzIHZpYSBjYWxsYmFja3MuXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlQYXRjaGVzKHVuaURpZmYsIG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiB1bmlEaWZmID09PSAnc3RyaW5nJykge1xuICAgIHVuaURpZmYgPSBwYXJzZVBhdGNoKHVuaURpZmYpO1xuICB9XG5cbiAgbGV0IGN1cnJlbnRJbmRleCA9IDA7XG4gIGZ1bmN0aW9uIHByb2Nlc3NJbmRleCgpIHtcbiAgICBsZXQgaW5kZXggPSB1bmlEaWZmW2N1cnJlbnRJbmRleCsrXTtcbiAgICBpZiAoIWluZGV4KSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5jb21wbGV0ZSgpO1xuICAgIH1cblxuICAgIG9wdGlvbnMubG9hZEZpbGUoaW5kZXgsIGZ1bmN0aW9uKGVyciwgZGF0YSkge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICByZXR1cm4gb3B0aW9ucy5jb21wbGV0ZShlcnIpO1xuICAgICAgfVxuXG4gICAgICBsZXQgdXBkYXRlZENvbnRlbnQgPSBhcHBseVBhdGNoKGRhdGEsIGluZGV4LCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMucGF0Y2hlZChpbmRleCwgdXBkYXRlZENvbnRlbnQsIGZ1bmN0aW9uKGVycikge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIG9wdGlvbnMuY29tcGxldGUoZXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb2Nlc3NJbmRleCgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgcHJvY2Vzc0luZGV4KCk7XG59XG4iXX0=


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	/*istanbul ignore start*/'use strict';

	exports.__esModule = true;
	exports. /*istanbul ignore end*/parsePatch = parsePatch;
	function parsePatch(uniDiff) {
	  /*istanbul ignore start*/var /*istanbul ignore end*/options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  var diffstr = uniDiff.split(/\r\n|[\n\v\f\r\x85]/),
	      delimiters = uniDiff.match(/\r\n|[\n\v\f\r\x85]/g) || [],
	      list = [],
	      i = 0;

	  function parseIndex() {
	    var index = {};
	    list.push(index);

	    // Parse diff metadata
	    while (i < diffstr.length) {
	      var line = diffstr[i];

	      // File header found, end parsing diff metadata
	      if (/^(\-\-\-|\+\+\+|@@)\s/.test(line)) {
	        break;
	      }

	      // Diff index
	      var header = /^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(line);
	      if (header) {
	        index.index = header[1];
	      }

	      i++;
	    }

	    // Parse file headers if they are defined. Unified diff requires them, but
	    // there's no technical issues to have an isolated hunk without file header
	    parseFileHeader(index);
	    parseFileHeader(index);

	    // Parse hunks
	    index.hunks = [];

	    while (i < diffstr.length) {
	      var _line = diffstr[i];

	      if (/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(_line)) {
	        break;
	      } else if (/^@@/.test(_line)) {
	        index.hunks.push(parseHunk());
	      } else if (_line && options.strict) {
	        // Ignore unexpected content unless in strict mode
	        throw new Error('Unknown line ' + (i + 1) + ' ' + JSON.stringify(_line));
	      } else {
	        i++;
	      }
	    }
	  }

	  // Parses the --- and +++ headers, if none are found, no lines
	  // are consumed.
	  function parseFileHeader(index) {
	    var headerPattern = /^(---|\+\+\+)\s+([\S ]*)(?:\t(.*?)\s*)?$/;
	    var fileHeader = headerPattern.exec(diffstr[i]);
	    if (fileHeader) {
	      var keyPrefix = fileHeader[1] === '---' ? 'old' : 'new';
	      var fileName = fileHeader[2].replace(/\\\\/g, '\\');
	      if (/^".*"$/.test(fileName)) {
	        fileName = fileName.substr(1, fileName.length - 2);
	      }
	      index[keyPrefix + 'FileName'] = fileName;
	      index[keyPrefix + 'Header'] = fileHeader[3];

	      i++;
	    }
	  }

	  // Parses a hunk
	  // This assumes that we are at the start of a hunk.
	  function parseHunk() {
	    var chunkHeaderIndex = i,
	        chunkHeaderLine = diffstr[i++],
	        chunkHeader = chunkHeaderLine.split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/);

	    var hunk = {
	      oldStart: +chunkHeader[1],
	      oldLines: +chunkHeader[2] || 1,
	      newStart: +chunkHeader[3],
	      newLines: +chunkHeader[4] || 1,
	      lines: [],
	      linedelimiters: []
	    };

	    var addCount = 0,
	        removeCount = 0;
	    for (; i < diffstr.length; i++) {
	      // Lines starting with '---' could be mistaken for the "remove line" operation
	      // But they could be the header for the next file. Therefore prune such cases out.
	      if (diffstr[i].indexOf('--- ') === 0 && i + 2 < diffstr.length && diffstr[i + 1].indexOf('+++ ') === 0 && diffstr[i + 2].indexOf('@@') === 0) {
	        break;
	      }
	      var operation = diffstr[i][0];

	      if (operation === '+' || operation === '-' || operation === ' ' || operation === '\\') {
	        hunk.lines.push(diffstr[i]);
	        hunk.linedelimiters.push(delimiters[i] || '\n');

	        if (operation === '+') {
	          addCount++;
	        } else if (operation === '-') {
	          removeCount++;
	        } else if (operation === ' ') {
	          addCount++;
	          removeCount++;
	        }
	      } else {
	        break;
	      }
	    }

	    // Handle the empty block count case
	    if (!addCount && hunk.newLines === 1) {
	      hunk.newLines = 0;
	    }
	    if (!removeCount && hunk.oldLines === 1) {
	      hunk.oldLines = 0;
	    }

	    // Perform optional sanity checking
	    if (options.strict) {
	      if (addCount !== hunk.newLines) {
	        throw new Error('Added line count did not match for hunk at line ' + (chunkHeaderIndex + 1));
	      }
	      if (removeCount !== hunk.oldLines) {
	        throw new Error('Removed line count did not match for hunk at line ' + (chunkHeaderIndex + 1));
	      }
	    }

	    return hunk;
	  }

	  while (i < diffstr.length) {
	    parseIndex();
	  }

	  return list;
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXRjaC9wYXJzZS5qcyJdLCJuYW1lcyI6WyJwYXJzZVBhdGNoIiwidW5pRGlmZiIsIm9wdGlvbnMiLCJkaWZmc3RyIiwic3BsaXQiLCJkZWxpbWl0ZXJzIiwibWF0Y2giLCJsaXN0IiwiaSIsInBhcnNlSW5kZXgiLCJpbmRleCIsInB1c2giLCJsZW5ndGgiLCJsaW5lIiwidGVzdCIsImhlYWRlciIsImV4ZWMiLCJwYXJzZUZpbGVIZWFkZXIiLCJodW5rcyIsInBhcnNlSHVuayIsInN0cmljdCIsIkVycm9yIiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlclBhdHRlcm4iLCJmaWxlSGVhZGVyIiwia2V5UHJlZml4IiwiZmlsZU5hbWUiLCJyZXBsYWNlIiwic3Vic3RyIiwiY2h1bmtIZWFkZXJJbmRleCIsImNodW5rSGVhZGVyTGluZSIsImNodW5rSGVhZGVyIiwiaHVuayIsIm9sZFN0YXJ0Iiwib2xkTGluZXMiLCJuZXdTdGFydCIsIm5ld0xpbmVzIiwibGluZXMiLCJsaW5lZGVsaW1pdGVycyIsImFkZENvdW50IiwicmVtb3ZlQ291bnQiLCJpbmRleE9mIiwib3BlcmF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Z0NBQWdCQSxVLEdBQUFBLFU7QUFBVCxTQUFTQSxVQUFULENBQW9CQyxPQUFwQixFQUEyQztBQUFBLHNEQUFkQyxPQUFjLHVFQUFKLEVBQUk7O0FBQ2hELE1BQUlDLFVBQVVGLFFBQVFHLEtBQVIsQ0FBYyxxQkFBZCxDQUFkO0FBQUEsTUFDSUMsYUFBYUosUUFBUUssS0FBUixDQUFjLHNCQUFkLEtBQXlDLEVBRDFEO0FBQUEsTUFFSUMsT0FBTyxFQUZYO0FBQUEsTUFHSUMsSUFBSSxDQUhSOztBQUtBLFdBQVNDLFVBQVQsR0FBc0I7QUFDcEIsUUFBSUMsUUFBUSxFQUFaO0FBQ0FILFNBQUtJLElBQUwsQ0FBVUQsS0FBVjs7QUFFQTtBQUNBLFdBQU9GLElBQUlMLFFBQVFTLE1BQW5CLEVBQTJCO0FBQ3pCLFVBQUlDLE9BQU9WLFFB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Q0FBVSx3REFBd0RTLG1CQUFtQixDQUEzRSxDQUFWLENBQU47QUFDRDtBQUNGOztBQUVELFdBQU9HLElBQVA7QUFDRDs7QUFFRCxTQUFPekIsSUFBSUwsUUFBUVMsTUFBbkIsRUFBMkI7QUFDekJIO0FBQ0Q7O0FBRUQsU0FBT0YsSUFBUDtBQUNEIiwiZmlsZSI6InBhcnNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUGF0Y2godW5pRGlmZiwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCBkaWZmc3RyID0gdW5pRGlmZi5zcGxpdCgvXFxyXFxufFtcXG5cXHZcXGZcXHJcXHg4NV0vKSxcbiAgICAgIGRlbGltaXRlcnMgPSB1bmlEaWZmLm1hdGNoKC9cXHJcXG58W1xcblxcdlxcZlxcclxceDg1XS9nKSB8fCBbXSxcbiAgICAgIGxpc3QgPSBbXSxcbiAgICAgIGkgPSAwO1xuXG4gIGZ1bmN0aW9uIHBhcnNlSW5kZXgoKSB7XG4gICAgbGV0IGluZGV4ID0ge307XG4gICAgbGlzdC5wdXNoKGluZGV4KTtcblxuICAgIC8vIFBhcnNlIGRpZmYgbWV0YWRhdGFcbiAgICB3aGlsZSAoaSA8IGRpZmZzdHIubGVuZ3RoKSB7XG4gICAgICBsZXQgbGluZSA9IGRpZmZzdHJbaV07XG5cbiAgICAgIC8vIEZpbGUgaGVhZGVyIGZvdW5kLCBlbmQgcGFyc2luZyBkaWZmIG1ldGFkYXRhXG4gICAgICBpZiAoL14oXFwtXFwtXFwtfFxcK1xcK1xcK3xAQClcXHMvLnRlc3QobGluZSkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIC8vIERpZmYgaW5kZXhcbiAgICAgIGxldCBoZWFkZXIgPSAoL14oPzpJbmRleDp8ZGlmZig/OiAtciBcXHcrKSspXFxzKyguKz8pXFxzKiQvKS5leGVjKGxpbmUpO1xuICAgICAgaWYgKGhlYWRlcikge1xuICAgICAgICBpbmRleC5pbmRleCA9IGhlYWRlclsxXTtcbiAgICAgIH1cblxuICAgICAgaSsrO1xuICAgIH1cblxuICAgIC8vIFBhcnNlIGZpbGUgaGVhZGVycyBpZiB0aGV5IGFyZSBkZWZpbmVkLiBVbmlmaWVkIGRpZmYgcmVxdWlyZXMgdGhlbSwgYnV0XG4gICAgLy8gdGhlcmUncyBubyB0ZWNobmljYWwgaXNzdWVzIHRvIGhhdmUgYW4gaXNvbGF0ZWQgaHVuayB3aXRob3V0IGZpbGUgaGVhZGVyXG4gICAgcGFyc2VGaWxlSGVhZGVyKGluZGV4KTtcbiAgICBwYXJzZUZpbGVIZWFkZXIoaW5kZXgpO1xuXG4gICAgLy8gUGFyc2UgaHVua3NcbiAgICBpbmRleC5odW5rcyA9IFtdO1xuXG4gICAgd2hpbGUgKGkgPCBkaWZmc3RyLmxlbmd0aCkge1xuICAgICAgbGV0IGxpbmUgPSBkaWZmc3RyW2ldO1xuXG4gICAgICBpZiAoL14oSW5kZXg6fGRpZmZ8XFwtXFwtXFwtfFxcK1xcK1xcKylcXHMvLnRlc3QobGluZSkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2UgaWYgKC9eQEAvLnRlc3QobGluZSkpIHtcbiAgICAgICAgaW5kZXguaHVua3MucHVzaChwYXJzZUh1bmsoKSk7XG4gICAgICB9IGVsc2UgaWYgKGxpbmUgJiYgb3B0aW9ucy5zdHJpY3QpIHtcbiAgICAgICAgLy8gSWdub3JlIHVuZXhwZWN0ZWQgY29udGVudCB1bmxlc3MgaW4gc3RyaWN0IG1vZGVcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGxpbmUgJyArIChpICsgMSkgKyAnICcgKyBKU09OLnN0cmluZ2lmeShsaW5lKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpKys7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gUGFyc2VzIHRoZSAtLS0gYW5kICsrKyBoZWFkZXJzLCBpZiBub25lIGFyZSBmb3VuZCwgbm8gbGluZXNcbiAgLy8gYXJlIGNvbnN1bWVkLlxuICBmdW5jdGlvbiBwYXJzZUZpbGVIZWFkZXIoaW5kZXgpIHtcbiAgICBjb25zdCBoZWFkZXJQYXR0ZXJuID0gL14oLS0tfFxcK1xcK1xcKylcXHMrKFtcXFMgXSopKD86XFx0KC4qPylcXHMqKT8kLztcbiAgICBjb25zdCBmaWxlSGVhZGVyID0gaGVhZGVyUGF0dGVybi5leGVjKGRpZmZzdHJbaV0pO1xuICAgIGlmIChmaWxlSGVhZGVyKSB7XG4gICAgICBsZXQga2V5UHJlZml4ID0gZmlsZUhlYWRlclsxXSA9PT0gJy0tLScgPyAnb2xkJyA6ICduZXcnO1xuICAgICAgbGV0IGZpbGVOYW1lID0gZmlsZUhlYWRlclsyXS5yZXBsYWNlKC9cXFxcXFxcXC9nLCAnXFxcXCcpO1xuICAgICAgaWYgKC9eXCIuKlwiJC8udGVzdChmaWxlTmFtZSkpIHtcbiAgICAgICAgZmlsZU5hbWUgPSBmaWxlTmFtZS5zdWJzdHIoMSwgZmlsZU5hbWUubGVuZ3RoIC0gMik7XG4gICAgICB9XG4gICAgICBpbmRleFtrZXlQcmVmaXggKyAnRmlsZU5hbWUnXSA9IGZpbGVOYW1lO1xuICAgICAgaW5kZXhba2V5UHJlZml4ICsgJ0hlYWRlciddID0gZmlsZUhlYWRlclszXTtcblxuICAgICAgaSsrO1xuICAgIH1cbiAgfVxuXG4gIC8vIFBhcnNlcyBhIGh1bmtcbiAgLy8gVGhpcyBhc3N1bWVzIHRoYXQgd2UgYXJlIGF0IHRoZSBzdGFydCBvZiBhIGh1bmsuXG4gIGZ1bmN0aW9uIHBhcnNlSHVuaygpIHtcbiAgICBsZXQgY2h1bmtIZWFkZXJJbmRleCA9IGksXG4gICAgICAgIGNodW5rSGVhZGVyTGluZSA9IGRpZmZzdHJbaSsrXSxcbiAgICAgICAgY2h1bmtIZWFkZXIgPSBjaHVua0hlYWRlckxpbmUuc3BsaXQoL0BAIC0oXFxkKykoPzosKFxcZCspKT8gXFwrKFxcZCspKD86LChcXGQrKSk/IEBALyk7XG5cbiAgICBsZXQgaHVuayA9IHtcbiAgICAgIG9sZFN0YXJ0OiArY2h1bmtIZWFkZXJbMV0sXG4gICAgICBvbGRMaW5lczogK2NodW5rSGVhZGVyWzJdIHx8IDEsXG4gICAgICBuZXdTdGFydDogK2NodW5rSGVhZGVyWzNdLFxuICAgICAgbmV3TGluZXM6ICtjaHVua0hlYWRlcls0XSB8fCAxLFxuICAgICAgbGluZXM6IFtdLFxuICAgICAgbGluZWRlbGltaXRlcnM6IFtdXG4gICAgfTtcblxuICAgIGxldCBhZGRDb3VudCA9IDAsXG4gICAgICAgIHJlbW92ZUNvdW50ID0gMDtcbiAgICBmb3IgKDsgaSA8IGRpZmZzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIExpbmVzIHN0YXJ0aW5nIHdpdGggJy0tLScgY291bGQgYmUgbWlzdGFrZW4gZm9yIHRoZSBcInJlbW92ZSBsaW5lXCIgb3BlcmF0aW9uXG4gICAgICAvLyBCdXQgdGhleSBjb3VsZCBiZSB0aGUgaGVhZGVyIGZvciB0aGUgbmV4dCBmaWxlLiBUaGVyZWZvcmUgcHJ1bmUgc3VjaCBjYXNlcyBvdXQuXG4gICAgICBpZiAoZGlmZnN0cltpXS5pbmRleE9mKCctLS0gJykgPT09IDBcbiAgICAgICAgICAgICYmIChpICsgMiA8IGRpZmZzdHIubGVuZ3RoKVxuICAgICAgICAgICAgJiYgZGlmZnN0cltpICsgMV0uaW5kZXhPZignKysrICcpID09PSAwXG4gICAgICAgICAgICAmJiBkaWZmc3RyW2kgKyAyXS5pbmRleE9mKCdAQCcpID09PSAwKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBsZXQgb3BlcmF0aW9uID0gZGlmZnN0cltpXVswXTtcblxuICAgICAgaWYgKG9wZXJhdGlvbiA9PT0gJysnIHx8IG9wZXJhdGlvbiA9PT0gJy0nIHx8IG9wZXJhdGlvbiA9PT0gJyAnIHx8IG9wZXJhdGlvbiA9PT0gJ1xcXFwnKSB7XG4gICAgICAgIGh1bmsubGluZXMucHVzaChkaWZmc3RyW2ldKTtcbiAgICAgICAgaHVuay5saW5lZGVsaW1pdGVycy5wdXNoKGRlbGltaXRlcnNbaV0gfHwgJ1xcbicpO1xuXG4gICAgICAgIGlmIChvcGVyYXRpb24gPT09ICcrJykge1xuICAgICAgICAgIGFkZENvdW50Kys7XG4gICAgICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uID09PSAnLScpIHtcbiAgICAgICAgICByZW1vdmVDb3VudCsrO1xuICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdGlvbiA9PT0gJyAnKSB7XG4gICAgICAgICAgYWRkQ291bnQrKztcbiAgICAgICAgICByZW1vdmVDb3VudCsrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgdGhlIGVtcHR5IGJsb2NrIGNvdW50IGNhc2VcbiAgICBpZiAoIWFkZENvdW50ICYmIGh1bmsubmV3TGluZXMgPT09IDEpIHtcbiAgICAgIGh1bmsubmV3TGluZXMgPSAwO1xuICAgIH1cbiAgICBpZiAoIXJlbW92ZUNvdW50ICYmIGh1bmsub2xkTGluZXMgPT09IDEpIHtcbiAgICAgIGh1bmsub2xkTGluZXMgPSAwO1xuICAgIH1cblxuICAgIC8vIFBlcmZvcm0gb3B0aW9uYWwgc2FuaXR5IGNoZWNraW5nXG4gICAgaWYgKG9wdGlvbnMuc3RyaWN0KSB7XG4gICAgICBpZiAoYWRkQ291bnQgIT09IGh1bmsubmV3TGluZXMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBZGRlZCBsaW5lIGNvdW50IGRpZCBub3QgbWF0Y2ggZm9yIGh1bmsgYXQgbGluZSAnICsgKGNodW5rSGVhZGVySW5kZXggKyAxKSk7XG4gICAgICB9XG4gICAgICBpZiAocmVtb3ZlQ291bnQgIT09IGh1bmsub2xkTGluZXMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZW1vdmVkIGxpbmUgY291bnQgZGlkIG5vdCBtYXRjaCBmb3IgaHVuayBhdCBsaW5lICcgKyAoY2h1bmtIZWFkZXJJbmRleCArIDEpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaHVuaztcbiAgfVxuXG4gIHdoaWxlIChpIDwgZGlmZnN0ci5sZW5ndGgpIHtcbiAgICBwYXJzZUluZGV4KCk7XG4gIH1cblxuICByZXR1cm4gbGlzdDtcbn1cbiJdfQ==


/***/ }),
/* 12 */
/***/ (function(module, exports) {

	/*istanbul ignore start*/"use strict";

	exports.__esModule = true;

	exports["default"] = /*istanbul ignore end*/function (start, minLine, maxLine) {
	  var wantForward = true,
	      backwardExhausted = false,
	      forwardExhausted = false,
	      localOffset = 1;

	  return function iterator() {
	    if (wantForward && !forwardExhausted) {
	      if (backwardExhausted) {
	        localOffset++;
	      } else {
	        wantForward = false;
	      }

	      // Check if trying to fit beyond text length, and if not, check it fits
	      // after offset location (or desired location on first iteration)
	      if (start + localOffset <= maxLine) {
	        return localOffset;
	      }

	      forwardExhausted = true;
	    }

	    if (!backwardExhausted) {
	      if (!forwardExhausted) {
	        wantForward = true;
	      }

	      // Check if trying to fit before text beginning, and if not, check it fits
	      // before offset location
	      if (minLine <= start - localOffset) {
	        return -localOffset++;
	      }

	      backwardExhausted = true;
	      return iterator();
	    }

	    // We tried to fit hunk before text beginning and beyond text length, then
	    // hunk can't fit on the text. Return undefined
	  };
	};
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL2Rpc3RhbmNlLWl0ZXJhdG9yLmpzIl0sIm5hbWVzIjpbInN0YXJ0IiwibWluTGluZSIsIm1heExpbmUiLCJ3YW50Rm9yd2FyZCIsImJhY2t3YXJkRXhoYXVzdGVkIiwiZm9yd2FyZEV4aGF1c3RlZCIsImxvY2FsT2Zmc2V0IiwiaXRlcmF0b3IiXSwibWFwcGluZ3MiOiI7Ozs7NENBR2UsVUFBU0EsS0FBVCxFQUFnQkMsT0FBaEIsRUFBeUJDLE9BQXpCLEVBQWtDO0FBQy9DLE1BQUlDLGNBQWMsSUFBbEI7QUFBQSxNQUNJQyxvQkFBb0IsS0FEeEI7QUFBQSxNQUVJQyxtQkFBbUIsS0FGdkI7QUFBQSxNQUdJQyxjQUFjLENBSGxCOztBQUtBLFNBQU8sU0FBU0MsUUFBVCxHQUFvQjtBQUN6QixRQUFJSixlQUFlLENBQUNFLGdCQUFwQixFQUFzQztBQUNwQyxVQUFJRCxpQkFBSixFQUF1QjtBQUNyQkU7QUFDRCxPQUZELE1BRU87QUFDTEgsc0JBQWMsS0FBZDtBQUNEOztBQUVEO0FBQ0E7QUFDQSxVQUFJSCxRQUFRTSxXQUFSLElBQXVCSixPQUEzQixFQUFvQztBQUNsQyxlQUFPSSxXQUFQO0FBQ0Q7O0FBRURELHlCQUFtQixJQUFuQjtBQUNEOztBQUVELFFBQUksQ0FBQ0QsaUJBQUwsRUFBd0I7QUFDdEIsVUFBSSxDQUFDQyxnQkFBTCxFQUF1QjtBQUNyQkYsc0JBQWMsSUFBZDtBQUNEOztBQUVEO0FBQ0E7QUFDQSxVQUFJRixXQUFXRCxRQUFRTSxXQUF2QixFQUFvQztBQUNsQyxlQUFPLENBQUNBLGFBQVI7QUFDRDs7QUFFREYsMEJBQW9CLElBQXBCO0FBQ0EsYUFBT0csVUFBUDtBQUNEOztBQUVEO0FBQ0E7QUFDRCxHQWxDRDtBQW1DRCxDIiwiZmlsZSI6ImRpc3RhbmNlLWl0ZXJhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSXRlcmF0b3IgdGhhdCB0cmF2ZXJzZXMgaW4gdGhlIHJhbmdlIG9mIFttaW4sIG1heF0sIHN0ZXBwaW5nXG4vLyBieSBkaXN0YW5jZSBmcm9tIGEgZ2l2ZW4gc3RhcnQgcG9zaXRpb24uIEkuZS4gZm9yIFswLCA0XSwgd2l0aFxuLy8gc3RhcnQgb2YgMiwgdGhpcyB3aWxsIGl0ZXJhdGUgMiwgMywgMSwgNCwgMC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHN0YXJ0LCBtaW5MaW5lLCBtYXhMaW5lKSB7XG4gIGxldCB3YW50Rm9yd2FyZCA9IHRydWUsXG4gICAgICBiYWNrd2FyZEV4aGF1c3RlZCA9IGZhbHNlLFxuICAgICAgZm9yd2FyZEV4aGF1c3RlZCA9IGZhbHNlLFxuICAgICAgbG9jYWxPZmZzZXQgPSAxO1xuXG4gIHJldHVybiBmdW5jdGlvbiBpdGVyYXRvcigpIHtcbiAgICBpZiAod2FudEZvcndhcmQgJiYgIWZvcndhcmRFeGhhdXN0ZWQpIHtcbiAgICAgIGlmIChiYWNrd2FyZEV4aGF1c3RlZCkge1xuICAgICAgICBsb2NhbE9mZnNldCsrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2FudEZvcndhcmQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2hlY2sgaWYgdHJ5aW5nIHRvIGZpdCBiZXlvbmQgdGV4dCBsZW5ndGgsIGFuZCBpZiBub3QsIGNoZWNrIGl0IGZpdHNcbiAgICAgIC8vIGFmdGVyIG9mZnNldCBsb2NhdGlvbiAob3IgZGVzaXJlZCBsb2NhdGlvbiBvbiBmaXJzdCBpdGVyYXRpb24pXG4gICAgICBpZiAoc3RhcnQgKyBsb2NhbE9mZnNldCA8PSBtYXhMaW5lKSB7XG4gICAgICAgIHJldHVybiBsb2NhbE9mZnNldDtcbiAgICAgIH1cblxuICAgICAgZm9yd2FyZEV4aGF1c3RlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCFiYWNrd2FyZEV4aGF1c3RlZCkge1xuICAgICAgaWYgKCFmb3J3YXJkRXhoYXVzdGVkKSB7XG4gICAgICAgIHdhbnRGb3J3YXJkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2hlY2sgaWYgdHJ5aW5nIHRvIGZpdCBiZWZvcmUgdGV4dCBiZWdpbm5pbmcsIGFuZCBpZiBub3QsIGNoZWNrIGl0IGZpdHNcbiAgICAgIC8vIGJlZm9yZSBvZmZzZXQgbG9jYXRpb25cbiAgICAgIGlmIChtaW5MaW5lIDw9IHN0YXJ0IC0gbG9jYWxPZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIC1sb2NhbE9mZnNldCsrO1xuICAgICAgfVxuXG4gICAgICBiYWNrd2FyZEV4aGF1c3RlZCA9IHRydWU7XG4gICAgICByZXR1cm4gaXRlcmF0b3IoKTtcbiAgICB9XG5cbiAgICAvLyBXZSB0cmllZCB0byBmaXQgaHVuayBiZWZvcmUgdGV4dCBiZWdpbm5pbmcgYW5kIGJleW9uZCB0ZXh0IGxlbmd0aCwgdGhlblxuICAgIC8vIGh1bmsgY2FuJ3QgZml0IG9uIHRoZSB0ZXh0LiBSZXR1cm4gdW5kZWZpbmVkXG4gIH07XG59XG4iXX0=


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	/*istanbul ignore start*/'use strict';

	exports.__esModule = true;
	exports. /*istanbul ignore end*/calcLineCount = calcLineCount;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/merge = merge;

	var /*istanbul ignore start*/_create = __webpack_require__(14) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_parse = __webpack_require__(11) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_array = __webpack_require__(15) /*istanbul ignore end*/;

	/*istanbul ignore start*/function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	/*istanbul ignore end*/function calcLineCount(hunk) {
	  /*istanbul ignore start*/var _calcOldNewLineCount = /*istanbul ignore end*/calcOldNewLineCount(hunk.lines),
	      oldLines = _calcOldNewLineCount.oldLines,
	      newLines = _calcOldNewLineCount.newLines;

	  if (oldLines !== undefined) {
	    hunk.oldLines = oldLines;
	  } else {
	    delete hunk.oldLines;
	  }

	  if (newLines !== undefined) {
	    hunk.newLines = newLines;
	  } else {
	    delete hunk.newLines;
	  }
	}

	function merge(mine, theirs, base) {
	  mine = loadPatch(mine, base);
	  theirs = loadPatch(theirs, base);

	  var ret = {};

	  // For index we just let it pass through as it doesn't have any necessary meaning.
	  // Leaving sanity checks on this to the API consumer that may know more about the
	  // meaning in their own context.
	  if (mine.index || theirs.index) {
	    ret.index = mine.index || theirs.index;
	  }

	  if (mine.newFileName || theirs.newFileName) {
	    if (!fileNameChanged(mine)) {
	      // No header or no change in ours, use theirs (and ours if theirs does not exist)
	      ret.oldFileName = theirs.oldFileName || mine.oldFileName;
	      ret.newFileName = theirs.newFileName || mine.newFileName;
	      ret.oldHeader = theirs.oldHeader || mine.oldHeader;
	      ret.newHeader = theirs.newHeader || mine.newHeader;
	    } else if (!fileNameChanged(theirs)) {
	      // No header or no change in theirs, use ours
	      ret.oldFileName = mine.oldFileName;
	      ret.newFileName = mine.newFileName;
	      ret.oldHeader = mine.oldHeader;
	      ret.newHeader = mine.newHeader;
	    } else {
	      // Both changed... figure it out
	      ret.oldFileName = selectField(ret, mine.oldFileName, theirs.oldFileName);
	      ret.newFileName = selectField(ret, mine.newFileName, theirs.newFileName);
	      ret.oldHeader = selectField(ret, mine.oldHeader, theirs.oldHeader);
	      ret.newHeader = selectField(ret, mine.newHeader, theirs.newHeader);
	    }
	  }

	  ret.hunks = [];

	  var mineIndex = 0,
	      theirsIndex = 0,
	      mineOffset = 0,
	      theirsOffset = 0;

	  while (mineIndex < mine.hunks.length || theirsIndex < theirs.hunks.length) {
	    var mineCurrent = mine.hunks[mineIndex] || { oldStart: Infinity },
	        theirsCurrent = theirs.hunks[theirsIndex] || { oldStart: Infinity };

	    if (hunkBefore(mineCurrent, theirsCurrent)) {
	      // This patch does not overlap with any of the others, yay.
	      ret.hunks.push(cloneHunk(mineCurrent, mineOffset));
	      mineIndex++;
	      theirsOffset += mineCurrent.newLines - mineCurrent.oldLines;
	    } else if (hunkBefore(theirsCurrent, mineCurrent)) {
	      // This patch does not overlap with any of the others, yay.
	      ret.hunks.push(cloneHunk(theirsCurrent, theirsOffset));
	      theirsIndex++;
	      mineOffset += theirsCurrent.newLines - theirsCurrent.oldLines;
	    } else {
	      // Overlap, merge as best we can
	      var mergedHunk = {
	        oldStart: Math.min(mineCurrent.oldStart, theirsCurrent.oldStart),
	        oldLines: 0,
	        newStart: Math.min(mineCurrent.newStart + mineOffset, theirsCurrent.oldStart + theirsOffset),
	        newLines: 0,
	        lines: []
	      };
	      mergeLines(mergedHunk, mineCurrent.oldStart, mineCurrent.lines, theirsCurrent.oldStart, theirsCurrent.lines);
	      theirsIndex++;
	      mineIndex++;

	      ret.hunks.push(mergedHunk);
	    }
	  }

	  return ret;
	}

	function loadPatch(param, base) {
	  if (typeof param === 'string') {
	    if (/^@@/m.test(param) || /^Index:/m.test(param)) {
	      return (/*istanbul ignore start*/(0, _parse.parsePatch) /*istanbul ignore end*/(param)[0]
	      );
	    }

	    if (!base) {
	      throw new Error('Must provide a base reference or pass in a patch');
	    }
	    return (/*istanbul ignore start*/(0, _create.structuredPatch) /*istanbul ignore end*/(undefined, undefined, base, param)
	    );
	  }

	  return param;
	}

	function fileNameChanged(patch) {
	  return patch.newFileName && patch.newFileName !== patch.oldFileName;
	}

	function selectField(index, mine, theirs) {
	  if (mine === theirs) {
	    return mine;
	  } else {
	    index.conflict = true;
	    return { mine: mine, theirs: theirs };
	  }
	}

	function hunkBefore(test, check) {
	  return test.oldStart < check.oldStart && test.oldStart + test.oldLines < check.oldStart;
	}

	function cloneHunk(hunk, offset) {
	  return {
	    oldStart: hunk.oldStart, oldLines: hunk.oldLines,
	    newStart: hunk.newStart + offset, newLines: hunk.newLines,
	    lines: hunk.lines
	  };
	}

	function mergeLines(hunk, mineOffset, mineLines, theirOffset, theirLines) {
	  // This will generally result in a conflicted hunk, but there are cases where the context
	  // is the only overlap where we can successfully merge the content here.
	  var mine = { offset: mineOffset, lines: mineLines, index: 0 },
	      their = { offset: theirOffset, lines: theirLines, index: 0 };

	  // Handle any leading content
	  insertLeading(hunk, mine, their);
	  insertLeading(hunk, their, mine);

	  // Now in the overlap content. Scan through and select the best changes from each.
	  while (mine.index < mine.lines.length && their.index < their.lines.length) {
	    var mineCurrent = mine.lines[mine.index],
	        theirCurrent = their.lines[their.index];

	    if ((mineCurrent[0] === '-' || mineCurrent[0] === '+') && (theirCurrent[0] === '-' || theirCurrent[0] === '+')) {
	      // Both modified ...
	      mutualChange(hunk, mine, their);
	    } else if (mineCurrent[0] === '+' && theirCurrent[0] === ' ') {
	      /*istanbul ignore start*/var _hunk$lines;

	      /*istanbul ignore end*/ // Mine inserted
	      /*istanbul ignore start*/(_hunk$lines = /*istanbul ignore end*/hunk.lines).push. /*istanbul ignore start*/apply /*istanbul ignore end*/( /*istanbul ignore start*/_hunk$lines /*istanbul ignore end*/, /*istanbul ignore start*/_toConsumableArray( /*istanbul ignore end*/collectChange(mine)));
	    } else if (theirCurrent[0] === '+' && mineCurrent[0] === ' ') {
	      /*istanbul ignore start*/var _hunk$lines2;

	      /*istanbul ignore end*/ // Theirs inserted
	      /*istanbul ignore start*/(_hunk$lines2 = /*istanbul ignore end*/hunk.lines).push. /*istanbul ignore start*/apply /*istanbul ignore end*/( /*istanbul ignore start*/_hunk$lines2 /*istanbul ignore end*/, /*istanbul ignore start*/_toConsumableArray( /*istanbul ignore end*/collectChange(their)));
	    } else if (mineCurrent[0] === '-' && theirCurrent[0] === ' ') {
	      // Mine removed or edited
	      removal(hunk, mine, their);
	    } else if (theirCurrent[0] === '-' && mineCurrent[0] === ' ') {
	      // Their removed or edited
	      removal(hunk, their, mine, true);
	    } else if (mineCurrent === theirCurrent) {
	      // Context identity
	      hunk.lines.push(mineCurrent);
	      mine.index++;
	      their.index++;
	    } else {
	      // Context mismatch
	      conflict(hunk, collectChange(mine), collectChange(their));
	    }
	  }

	  // Now push anything that may be remaining
	  insertTrailing(hunk, mine);
	  insertTrailing(hunk, their);

	  calcLineCount(hunk);
	}

	function mutualChange(hunk, mine, their) {
	  var myChanges = collectChange(mine),
	      theirChanges = collectChange(their);

	  if (allRemoves(myChanges) && allRemoves(theirChanges)) {
	    // Special case for remove changes that are supersets of one another
	    if ( /*istanbul ignore start*/(0, _array.arrayStartsWith) /*istanbul ignore end*/(myChanges, theirChanges) && skipRemoveSuperset(their, myChanges, myChanges.length - theirChanges.length)) {
	      /*istanbul ignore start*/var _hunk$lines3;

	      /*istanbul ignore end*/ /*istanbul ignore start*/(_hunk$lines3 = /*istanbul ignore end*/hunk.lines).push. /*istanbul ignore start*/apply /*istanbul ignore end*/( /*istanbul ignore start*/_hunk$lines3 /*istanbul ignore end*/, /*istanbul ignore start*/_toConsumableArray( /*istanbul ignore end*/myChanges));
	      return;
	    } else if ( /*istanbul ignore start*/(0, _array.arrayStartsWith) /*istanbul ignore end*/(theirChanges, myChanges) && skipRemoveSuperset(mine, theirChanges, theirChanges.length - myChanges.length)) {
	      /*istanbul ignore start*/var _hunk$lines4;

	      /*istanbul ignore end*/ /*istanbul ignore start*/(_hunk$lines4 = /*istanbul ignore end*/hunk.lines).push. /*istanbul ignore start*/apply /*istanbul ignore end*/( /*istanbul ignore start*/_hunk$lines4 /*istanbul ignore end*/, /*istanbul ignore start*/_toConsumableArray( /*istanbul ignore end*/theirChanges));
	      return;
	    }
	  } else if ( /*istanbul ignore start*/(0, _array.arrayEqual) /*istanbul ignore end*/(myChanges, theirChanges)) {
	    /*istanbul ignore start*/var _hunk$lines5;

	    /*istanbul ignore end*/ /*istanbul ignore start*/(_hunk$lines5 = /*istanbul ignore end*/hunk.lines).push. /*istanbul ignore start*/apply /*istanbul ignore end*/( /*istanbul ignore start*/_hunk$lines5 /*istanbul ignore end*/, /*istanbul ignore start*/_toConsumableArray( /*istanbul ignore end*/myChanges));
	    return;
	  }

	  conflict(hunk, myChanges, theirChanges);
	}

	function removal(hunk, mine, their, swap) {
	  var myChanges = collectChange(mine),
	      theirChanges = collectContext(their, myChanges);
	  if (theirChanges.merged) {
	    /*istanbul ignore start*/var _hunk$lines6;

	    /*istanbul ignore end*/ /*istanbul ignore start*/(_hunk$lines6 = /*istanbul ignore end*/hunk.lines).push. /*istanbul ignore start*/apply /*istanbul ignore end*/( /*istanbul ignore start*/_hunk$lines6 /*istanbul ignore end*/, /*istanbul ignore start*/_toConsumableArray( /*istanbul ignore end*/theirChanges.merged));
	  } else {
	    conflict(hunk, swap ? theirChanges : myChanges, swap ? myChanges : theirChanges);
	  }
	}

	function conflict(hunk, mine, their) {
	  hunk.conflict = true;
	  hunk.lines.push({
	    conflict: true,
	    mine: mine,
	    theirs: their
	  });
	}

	function insertLeading(hunk, insert, their) {
	  while (insert.offset < their.offset && insert.index < insert.lines.length) {
	    var line = insert.lines[insert.index++];
	    hunk.lines.push(line);
	    insert.offset++;
	  }
	}
	function insertTrailing(hunk, insert) {
	  while (insert.index < insert.lines.length) {
	    var line = insert.lines[insert.index++];
	    hunk.lines.push(line);
	  }
	}

	function collectChange(state) {
	  var ret = [],
	      operation = state.lines[state.index][0];
	  while (state.index < state.lines.length) {
	    var line = state.lines[state.index];

	    // Group additions that are immediately after subtractions and treat them as one "atomic" modify change.
	    if (operation === '-' && line[0] === '+') {
	      operation = '+';
	    }

	    if (operation === line[0]) {
	      ret.push(line);
	      state.index++;
	    } else {
	      break;
	    }
	  }

	  return ret;
	}
	function collectContext(state, matchChanges) {
	  var changes = [],
	      merged = [],
	      matchIndex = 0,
	      contextChanges = false,
	      conflicted = false;
	  while (matchIndex < matchChanges.length && state.index < state.lines.length) {
	    var change = state.lines[state.index],
	        match = matchChanges[matchIndex];

	    // Once we've hit our add, then we are done
	    if (match[0] === '+') {
	      break;
	    }

	    contextChanges = contextChanges || change[0] !== ' ';

	    merged.push(match);
	    matchIndex++;

	    // Consume any additions in the other block as a conflict to attempt
	    // to pull in the remaining context after this
	    if (change[0] === '+') {
	      conflicted = true;

	      while (change[0] === '+') {
	        changes.push(change);
	        change = state.lines[++state.index];
	      }
	    }

	    if (match.substr(1) === change.substr(1)) {
	      changes.push(change);
	      state.index++;
	    } else {
	      conflicted = true;
	    }
	  }

	  if ((matchChanges[matchIndex] || '')[0] === '+' && contextChanges) {
	    conflicted = true;
	  }

	  if (conflicted) {
	    return changes;
	  }

	  while (matchIndex < matchChanges.length) {
	    merged.push(matchChanges[matchIndex++]);
	  }

	  return {
	    merged: merged,
	    changes: changes
	  };
	}

	function allRemoves(changes) {
	  return changes.reduce(function (prev, change) {
	    return prev && change[0] === '-';
	  }, true);
	}
	function skipRemoveSuperset(state, removeChanges, delta) {
	  for (var i = 0; i < delta; i++) {
	    var changeContent = removeChanges[removeChanges.length - delta + i].substr(1);
	    if (state.lines[state.index + i] !== ' ' + changeContent) {
	      return false;
	    }
	  }

	  state.index += delta;
	  return true;
	}

	function calcOldNewLineCount(lines) {
	  var oldLines = 0;
	  var newLines = 0;

	  lines.forEach(function (line) {
	    if (typeof line !== 'string') {
	      var myCount = calcOldNewLineCount(line.mine);
	      var theirCount = calcOldNewLineCount(line.theirs);

	      if (oldLines !== undefined) {
	        if (myCount.oldLines === theirCount.oldLines) {
	          oldLines += myCount.oldLines;
	        } else {
	          oldLines = undefined;
	        }
	      }

	      if (newLines !== undefined) {
	        if (myCount.newLines === theirCount.newLines) {
	          newLines += myCount.newLines;
	        } else {
	          newLines = undefined;
	        }
	      }
	    } else {
	      if (newLines !== undefined && (line[0] === '+' || line[0] === ' ')) {
	        newLines++;
	      }
	      if (oldLines !== undefined && (line[0] === '-' || line[0] === ' ')) {
	        oldLines++;
	      }
	    }
	  });

	  return { oldLines: oldLines, newLines: newLines };
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXRjaC9tZXJnZS5qcyJdLCJuYW1lcyI6WyJjYWxjTGluZUNvdW50IiwibWVyZ2UiLCJodW5rIiwiY2FsY09sZE5ld0xpbmVDb3VudCIsImxpbmVzIiwib2xkTGluZXMiLCJuZXdMaW5lcyIsInVuZGVmaW5lZCIsIm1pbmUiLCJ0aGVpcnMiLCJiYXNlIiwibG9hZFBhdGNoIiwicmV0IiwiaW5kZXgiLCJuZXdGaWxlTmFtZSIsImZpbGVOYW1lQ2hhbmdlZCIsIm9sZEZpbGVOYW1lIiwib2xkSGVhZGVyIiwibmV3SGVhZGVyIiwic2VsZWN0RmllbGQiLCJodW5rcyIsIm1pbmVJbmRleCIsInRoZWlyc0luZGV4IiwibWluZU9mZnNldCIsInRoZWlyc09mZnNldCIsImxlbmd0aCIsIm1pbmVDdXJyZW50Iiwib2xkU3RhcnQiLCJJbmZpbml0eSIsInRoZWlyc0N1cnJlbnQiLCJodW5rQmVmb3JlIiwicHVzaCIsImNsb25lSHVuayIsIm1lcmdlZEh1bmsiLCJNYXRoIiwibWluIiwibmV3U3RhcnQiLCJtZXJnZUxpbmVzIiwicGFyYW0iLCJ0ZXN0IiwiRXJyb3IiLCJwYXRjaCIsImNvbmZsaWN0IiwiY2hlY2siLCJvZmZzZXQiLCJtaW5lTGluZXMiLCJ0aGVpck9mZnNldCIsInRoZWlyTGluZXMiLCJ0aGVpciIsImluc2VydExlYWRpbmciLCJ0aGVpckN1cnJlbnQiLCJtdXR1YWxDaGFuZ2UiLCJjb2xsZWN0Q2hhbmdlIiwicmVtb3ZhbCIsImluc2VydFRyYWlsaW5nIiwibXlDaGFuZ2VzIiwidGhlaXJDaGFuZ2VzIiwiYWxsUmVtb3ZlcyIsInNraXBSZW1vdmVTdXBlcnNldCIsInN3YXAiLCJjb2xsZWN0Q29udGV4dCIsIm1lcmdlZCIsImluc2VydCIsImxpbmUiLCJzdGF0ZSIsIm9wZXJhdGlvbiIsIm1hdGNoQ2hhbmdlcyIsImNoYW5nZXMiLCJtYXRjaEluZGV4IiwiY29udGV4dENoYW5nZXMiLCJjb25mbGljdGVkIiwiY2hhbmdlIiwibWF0Y2giLCJzdWJzdHIiLCJyZWR1Y2UiLCJwcmV2IiwicmVtb3ZlQ2hhbmdlcyIsImRlbHRhIiwiaSIsImNoYW5nZUNvbnRlbnQiLCJmb3JFYWNoIiwibXlDb3VudCIsInRoZWlyQ291bnQiXSwibWFwcGluZ3MiOiI7OztnQ0FLZ0JBLGEsR0FBQUEsYTt5REFnQkFDLEssR0FBQUEsSzs7QUFyQmhCOztBQUNBOztBQUVBOzs7O3VCQUVPLFNBQVNELGFBQVQsQ0FBdUJFLElBQXZCLEVBQTZCO0FBQUEsNkVBQ0xDLG9CQUFvQkQsS0FBS0UsS0FBekIsQ0FESztBQUFBLE1BQzNCQyxRQUQyQix3QkFDM0JBLFFBRDJCO0FBQUEsTUFDakJDLFFBRGlCLHdCQUNqQkEsUUFEaUI7O0FBR2xDLE1BQUlELGFBQWFFLFNBQWpCLEVBQTRCO0FBQzFCTCxTQUFLRyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNELEdBRkQsTUFFTztBQUNMLFdBQU9ILEtBQUtHLFFBQVo7QUFDRDs7QUFFRCxNQUFJQyxhQUFhQyxTQUFqQixFQUE0QjtBQUMxQkwsU0FBS0ksUUFBTCxHQUFnQkEsUUFBaEI7QUFDRCxHQUZELE1BRU87QUFDTCxXQUFPSixLQUFLSSxRQUFaO0FBQ0Q7QUFDRjs7QUFFTSxTQUFTTCxLQUFULENBQWVPLElBQWYsRUFBcUJDLE1BQXJCLEVBQTZCQyxJQUE3QixFQUFtQztBQUN4Q0YsU0FBT0csVUFBVUgsSUFBVixFQUFnQkUsSUFBaEIsQ0FBUDtBQUNBRCxXQUFTRSxVQUFVRixNQUFWLEVBQWtCQyxJQUFsQixDQUFUOztBQUVBLE1BQUlFLE1BQU0sRUFBVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFJSixLQUFLSyxLQUFMLElBQWNKLE9BQU9JLEtBQXpCLEVBQWdDO0FBQzlCRCxRQUFJQyxLQUFKLEdBQVlMLEtBQUtLLEtBQUwsSUFBY0osT0FBT0ksS0FBakM7QUFDRDs7QUFFRCxNQUFJTCxLQUFLTSxXQUFMLElBQW9CTCxPQUFPSyxXQUEvQixFQUE0QztBQUMxQyxRQUFJLENBQUNDLGdCQUFnQlAsSUFBaEIsQ0FBTCxF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Q0Q7QUFDRjs7QUFFRCxVQUFJRCxhQUFhQyxTQUFqQixFQUE0QjtBQUMxQixZQUFJMEUsUUFBUTNFLFFBQVIsS0FBcUI0RSxXQUFXNUUsUUFBcEMsRUFBOEM7QUFDNUNBLHNCQUFZMkUsUUFBUTNFLFFBQXBCO0FBQ0QsU0FGRCxNQUVPO0FBQ0xBLHFCQUFXQyxTQUFYO0FBQ0Q7QUFDRjtBQUNGLEtBbkJELE1BbUJPO0FBQ0wsVUFBSUQsYUFBYUMsU0FBYixLQUEyQndELEtBQUssQ0FBTCxNQUFZLEdBQVosSUFBbUJBLEtBQUssQ0FBTCxNQUFZLEdBQTFELENBQUosRUFBb0U7QUFDbEV6RDtBQUNEO0FBQ0QsVUFBSUQsYUFBYUUsU0FBYixLQUEyQndELEtBQUssQ0FBTCxNQUFZLEdBQVosSUFBbUJBLEtBQUssQ0FBTCxNQUFZLEdBQTFELENBQUosRUFBb0U7QUFDbEUxRDtBQUNEO0FBQ0Y7QUFDRixHQTVCRDs7QUE4QkEsU0FBTyxFQUFDQSxrQkFBRCxFQUFXQyxrQkFBWCxFQUFQO0FBQ0QiLCJmaWxlIjoibWVyZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3N0cnVjdHVyZWRQYXRjaH0gZnJvbSAnLi9jcmVhdGUnO1xuaW1wb3J0IHtwYXJzZVBhdGNofSBmcm9tICcuL3BhcnNlJztcblxuaW1wb3J0IHthcnJheUVxdWFsLCBhcnJheVN0YXJ0c1dpdGh9IGZyb20gJy4uL3V0aWwvYXJyYXknO1xuXG5leHBvcnQgZnVuY3Rpb24gY2FsY0xpbmVDb3VudChodW5rKSB7XG4gIGNvbnN0IHtvbGRMaW5lcywgbmV3TGluZXN9ID0gY2FsY09sZE5ld0xpbmVDb3VudChodW5rLmxpbmVzKTtcblxuICBpZiAob2xkTGluZXMgIT09IHVuZGVmaW5lZCkge1xuICAgIGh1bmsub2xkTGluZXMgPSBvbGRMaW5lcztcbiAgfSBlbHNlIHtcbiAgICBkZWxldGUgaHVuay5vbGRMaW5lcztcbiAgfVxuXG4gIGlmIChuZXdMaW5lcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaHVuay5uZXdMaW5lcyA9IG5ld0xpbmVzO1xuICB9IGVsc2Uge1xuICAgIGRlbGV0ZSBodW5rLm5ld0xpbmVzO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZShtaW5lLCB0aGVpcnMsIGJhc2UpIHtcbiAgbWluZSA9IGxvYWRQYXRjaChtaW5lLCBiYXNlKTtcbiAgdGhlaXJzID0gbG9hZFBhdGNoKHRoZWlycywgYmFzZSk7XG5cbiAgbGV0IHJldCA9IHt9O1xuXG4gIC8vIEZvciBpbmRleCB3ZSBqdXN0IGxldCBpdCBwYXNzIHRocm91Z2ggYXMgaXQgZG9lc24ndCBoYXZlIGFueSBuZWNlc3NhcnkgbWVhbmluZy5cbiAgLy8gTGVhdmluZyBzYW5pdHkgY2hlY2tzIG9uIHRoaXMgdG8gdGhlIEFQSSBjb25zdW1lciB0aGF0IG1heSBrbm93IG1vcmUgYWJvdXQgdGhlXG4gIC8vIG1lYW5pbmcgaW4gdGhlaXIgb3duIGNvbnRleHQuXG4gIGlmIChtaW5lLmluZGV4IHx8IHRoZWlycy5pbmRleCkge1xuICAgIHJldC5pbmRleCA9IG1pbmUuaW5kZXggfHwgdGhlaXJzLmluZGV4O1xuICB9XG5cbiAgaWYgKG1pbmUubmV3RmlsZU5hbWUgfHwgdGhlaXJzLm5ld0ZpbGVOYW1lKSB7XG4gICAgaWYgKCFmaWxlTmFtZUNoYW5nZWQobWluZSkpIHtcbiAgICAgIC8vIE5vIGhlYWRlciBvciBubyBjaGFuZ2UgaW4gb3VycywgdXNlIHRoZWlycyAoYW5kIG91cnMgaWYgdGhlaXJzIGRvZXMgbm90IGV4aXN0KVxuICAgICAgcmV0Lm9sZEZpbGVOYW1lID0gdGhlaXJzLm9sZEZpbGVOYW1lIHx8IG1pbmUub2xkRmlsZU5hbWU7XG4gICAgICByZXQubmV3RmlsZU5hbWUgPSB0aGVpcnMubmV3RmlsZU5hbWUgfHwgbWluZS5uZXdGaWxlTmFtZTtcbiAgICAgIHJldC5vbGRIZWFkZXIgPSB0aGVpcnMub2xkSGVhZGVyIHx8IG1pbmUub2xkSGVhZGVyO1xuICAgICAgcmV0Lm5ld0hlYWRlciA9IHRoZWlycy5uZXdIZWFkZXIgfHwgbWluZS5uZXdIZWFkZXI7XG4gICAgfSBlbHNlIGlmICghZmlsZU5hbWVDaGFuZ2VkKHRoZWlycykpIHtcbiAgICAgIC8vIE5vIGhlYWRlciBvciBubyBjaGFuZ2UgaW4gdGhlaXJzLCB1c2Ugb3Vyc1xuICAgICAgcmV0Lm9sZEZpbGVOYW1lID0gbWluZS5vbGRGaWxlTmFtZTtcbiAgICAgIHJldC5uZXdGaWxlTmFtZSA9IG1pbmUubmV3RmlsZU5hbWU7XG4gICAgICByZXQub2xkSGVhZGVyID0gbWluZS5vbGRIZWFkZXI7XG4gICAgICByZXQubmV3SGVhZGVyID0gbWluZS5uZXdIZWFkZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEJvdGggY2hhbmdlZC4uLiBmaWd1cmUgaXQgb3V0XG4gICAgICByZXQub2xkRmlsZU5hbWUgPSBzZWxlY3RGaWVsZChyZXQsIG1pbmUub2xkRmlsZU5hbWUsIHRoZWlycy5vbGRGaWxlTmFtZSk7XG4gICAgICByZXQubmV3RmlsZU5hbWUgPSBzZWxlY3RGaWVsZChyZXQsIG1pbmUubmV3RmlsZU5hbWUsIHRoZWlycy5uZXdGaWxlTmFtZSk7XG4gICAgICByZXQub2xkSGVhZGVyID0gc2VsZWN0RmllbGQocmV0LCBtaW5lLm9sZEhlYWRlciwgdGhlaXJzLm9sZEhlYWRlcik7XG4gICAgICByZXQubmV3SGVhZGVyID0gc2VsZWN0RmllbGQocmV0LCBtaW5lLm5ld0hlYWRlciwgdGhlaXJzLm5ld0hlYWRlcik7XG4gICAgfVxuICB9XG5cbiAgcmV0Lmh1bmtzID0gW107XG5cbiAgbGV0IG1pbmVJbmRleCA9IDAsXG4gICAgICB0aGVpcnNJbmRleCA9IDAsXG4gICAgICBtaW5lT2Zmc2V0ID0gMCxcbiAgICAgIHRoZWlyc09mZnNldCA9IDA7XG5cbiAgd2hpbGUgKG1pbmVJbmRleCA8IG1pbmUuaHVua3MubGVuZ3RoIHx8IHRoZWlyc0luZGV4IDwgdGhlaXJzLmh1bmtzLmxlbmd0aCkge1xuICAgIGxldCBtaW5lQ3VycmVudCA9IG1pbmUuaHVua3NbbWluZUluZGV4XSB8fCB7b2xkU3RhcnQ6IEluZmluaXR5fSxcbiAgICAgICAgdGhlaXJzQ3VycmVudCA9IHRoZWlycy5odW5rc1t0aGVpcnNJbmRleF0gfHwge29sZFN0YXJ0OiBJbmZpbml0eX07XG5cbiAgICBpZiAoaHVua0JlZm9yZShtaW5lQ3VycmVudCwgdGhlaXJzQ3VycmVudCkpIHtcbiAgICAgIC8vIFRoaXMgcGF0Y2ggZG9lcyBub3Qgb3ZlcmxhcCB3aXRoIGFueSBvZiB0aGUgb3RoZXJzLCB5YXkuXG4gICAgICByZXQuaHVua3MucHVzaChjbG9uZUh1bmsobWluZUN1cnJlbnQsIG1pbmVPZmZzZXQpKTtcbiAgICAgIG1pbmVJbmRleCsrO1xuICAgICAgdGhlaXJzT2Zmc2V0ICs9IG1pbmVDdXJyZW50Lm5ld0xpbmVzIC0gbWluZUN1cnJlbnQub2xkTGluZXM7XG4gICAgfSBlbHNlIGlmIChodW5rQmVmb3JlKHRoZWlyc0N1cnJlbnQsIG1pbmVDdXJyZW50KSkge1xuICAgICAgLy8gVGhpcyBwYXRjaCBkb2VzIG5vdCBvdmVybGFwIHdpdGggYW55IG9mIHRoZSBvdGhlcnMsIHlheS5cbiAgICAgIHJldC5odW5rcy5wdXNoKGNsb25lSHVuayh0aGVpcnNDdXJyZW50LCB0aGVpcnNPZmZzZXQpKTtcbiAgICAgIHRoZWlyc0luZGV4Kys7XG4gICAgICBtaW5lT2Zmc2V0ICs9IHRoZWlyc0N1cnJlbnQubmV3TGluZXMgLSB0aGVpcnNDdXJyZW50Lm9sZExpbmVzO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBPdmVybGFwLCBtZXJnZSBhcyBiZXN0IHdlIGNhblxuICAgICAgbGV0IG1lcmdlZEh1bmsgPSB7XG4gICAgICAgIG9sZFN0YXJ0OiBNYXRoLm1pbihtaW5lQ3VycmVudC5vbGRTdGFydCwgdGhlaXJzQ3VycmVudC5vbGRTdGFydCksXG4gICAgICAgIG9sZExpbmVzOiAwLFxuICAgICAgICBuZXdTdGFydDogTWF0aC5taW4obWluZUN1cnJlbnQubmV3U3RhcnQgKyBtaW5lT2Zmc2V0LCB0aGVpcnNDdXJyZW50Lm9sZFN0YXJ0ICsgdGhlaXJzT2Zmc2V0KSxcbiAgICAgICAgbmV3TGluZXM6IDAsXG4gICAgICAgIGxpbmVzOiBbXVxuICAgICAgfTtcbiAgICAgIG1lcmdlTGluZXMobWVyZ2VkSHVuaywgbWluZUN1cnJlbnQub2xkU3RhcnQsIG1pbmVDdXJyZW50LmxpbmVzLCB0aGVpcnNDdXJyZW50Lm9sZFN0YXJ0LCB0aGVpcnNDdXJyZW50LmxpbmVzKTtcbiAgICAgIHRoZWlyc0luZGV4Kys7XG4gICAgICBtaW5lSW5kZXgrKztcblxuICAgICAgcmV0Lmh1bmtzLnB1c2gobWVyZ2VkSHVuayk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gbG9hZFBhdGNoKHBhcmFtLCBiYXNlKSB7XG4gIGlmICh0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKC9eQEAvbS50ZXN0KHBhcmFtKSB8fCAoL15JbmRleDovbS50ZXN0KHBhcmFtKSkpIHtcbiAgICAgIHJldHVybiBwYXJzZVBhdGNoKHBhcmFtKVswXTtcbiAgICB9XG5cbiAgICBpZiAoIWJhc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTXVzdCBwcm92aWRlIGEgYmFzZSByZWZlcmVuY2Ugb3IgcGFzcyBpbiBhIHBhdGNoJyk7XG4gICAgfVxuICAgIHJldHVybiBzdHJ1Y3R1cmVkUGF0Y2godW5kZWZpbmVkLCB1bmRlZmluZWQsIGJhc2UsIHBhcmFtKTtcbiAgfVxuXG4gIHJldHVybiBwYXJhbTtcbn1cblxuZnVuY3Rpb24gZmlsZU5hbWVDaGFuZ2VkKHBhdGNoKSB7XG4gIHJldHVybiBwYXRjaC5uZXdGaWxlTmFtZSAmJiBwYXRjaC5uZXdGaWxlTmFtZSAhPT0gcGF0Y2gub2xkRmlsZU5hbWU7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdEZpZWxkKGluZGV4LCBtaW5lLCB0aGVpcnMpIHtcbiAgaWYgKG1pbmUgPT09IHRoZWlycykge1xuICAgIHJldHVybiBtaW5lO1xuICB9IGVsc2Uge1xuICAgIGluZGV4LmNvbmZsaWN0ID0gdHJ1ZTtcbiAgICByZXR1cm4ge21pbmUsIHRoZWlyc307XG4gIH1cbn1cblxuZnVuY3Rpb24gaHVua0JlZm9yZSh0ZXN0LCBjaGVjaykge1xuICByZXR1cm4gdGVzdC5vbGRTdGFydCA8IGNoZWNrLm9sZFN0YXJ0XG4gICAgJiYgKHRlc3Qub2xkU3RhcnQgKyB0ZXN0Lm9sZExpbmVzKSA8IGNoZWNrLm9sZFN0YXJ0O1xufVxuXG5mdW5jdGlvbiBjbG9uZUh1bmsoaHVuaywgb2Zmc2V0KSB7XG4gIHJldHVybiB7XG4gICAgb2xkU3RhcnQ6IGh1bmsub2xkU3RhcnQsIG9sZExpbmVzOiBodW5rLm9sZExpbmVzLFxuICAgIG5ld1N0YXJ0OiBodW5rLm5ld1N0YXJ0ICsgb2Zmc2V0LCBuZXdMaW5lczogaHVuay5uZXdMaW5lcyxcbiAgICBsaW5lczogaHVuay5saW5lc1xuICB9O1xufVxuXG5mdW5jdGlvbiBtZXJnZUxpbmVzKGh1bmssIG1pbmVPZmZzZXQsIG1pbmVMaW5lcywgdGhlaXJPZmZzZXQsIHRoZWlyTGluZXMpIHtcbiAgLy8gVGhpcyB3aWxsIGdlbmVyYWxseSByZXN1bHQgaW4gYSBjb25mbGljdGVkIGh1bmssIGJ1dCB0aGVyZSBhcmUgY2FzZXMgd2hlcmUgdGhlIGNvbnRleHRcbiAgLy8gaXMgdGhlIG9ubHkgb3ZlcmxhcCB3aGVyZSB3ZSBjYW4gc3VjY2Vzc2Z1bGx5IG1lcmdlIHRoZSBjb250ZW50IGhlcmUuXG4gIGxldCBtaW5lID0ge29mZnNldDogbWluZU9mZnNldCwgbGluZXM6IG1pbmVMaW5lcywgaW5kZXg6IDB9LFxuICAgICAgdGhlaXIgPSB7b2Zmc2V0OiB0aGVpck9mZnNldCwgbGluZXM6IHRoZWlyTGluZXMsIGluZGV4OiAwfTtcblxuICAvLyBIYW5kbGUgYW55IGxlYWRpbmcgY29udGVudFxuICBpbnNlcnRMZWFkaW5nKGh1bmssIG1pbmUsIHRoZWlyKTtcbiAgaW5zZXJ0TGVhZGluZyhodW5rLCB0aGVpciwgbWluZSk7XG5cbiAgLy8gTm93IGluIHRoZSBvdmVybGFwIGNvbnRlbnQuIFNjYW4gdGhyb3VnaCBhbmQgc2VsZWN0IHRoZSBiZXN0IGNoYW5nZXMgZnJvbSBlYWNoLlxuICB3aGlsZSAobWluZS5pbmRleCA8IG1pbmUubGluZXMubGVuZ3RoICYmIHRoZWlyLmluZGV4IDwgdGhlaXIubGluZXMubGVuZ3RoKSB7XG4gICAgbGV0IG1pbmVDdXJyZW50ID0gbWluZS5saW5lc1ttaW5lLmluZGV4XSxcbiAgICAgICAgdGhlaXJDdXJyZW50ID0gdGhlaXIubGluZXNbdGhlaXIuaW5kZXhdO1xuXG4gICAgaWYgKChtaW5lQ3VycmVudFswXSA9PT0gJy0nIHx8IG1pbmVDdXJyZW50WzBdID09PSAnKycpXG4gICAgICAgICYmICh0aGVpckN1cnJlbnRbMF0gPT09ICctJyB8fCB0aGVpckN1cnJlbnRbMF0gPT09ICcrJykpIHtcbiAgICAgIC8vIEJvdGggbW9kaWZpZWQgLi4uXG4gICAgICBtdXR1YWxDaGFuZ2UoaHVuaywgbWluZSwgdGhlaXIpO1xuICAgIH0gZWxzZSBpZiAobWluZUN1cnJlbnRbMF0gPT09ICcrJyAmJiB0aGVpckN1cnJlbnRbMF0gPT09ICcgJykge1xuICAgICAgLy8gTWluZSBpbnNlcnRlZFxuICAgICAgaHVuay5saW5lcy5wdXNoKC4uLiBjb2xsZWN0Q2hhbmdlKG1pbmUpKTtcbiAgICB9IGVsc2UgaWYgKHRoZWlyQ3VycmVudFswXSA9PT0gJysnICYmIG1pbmVDdXJyZW50WzBdID09PSAnICcpIHtcbiAgICAgIC8vIFRoZWlycyBpbnNlcnRlZFxuICAgICAgaHVuay5saW5lcy5wdXNoKC4uLiBjb2xsZWN0Q2hhbmdlKHRoZWlyKSk7XG4gICAgfSBlbHNlIGlmIChtaW5lQ3VycmVudFswXSA9PT0gJy0nICYmIHRoZWlyQ3VycmVudFswXSA9PT0gJyAnKSB7XG4gICAgICAvLyBNaW5lIHJlbW92ZWQgb3IgZWRpdGVkXG4gICAgICByZW1vdmFsKGh1bmssIG1pbmUsIHRoZWlyKTtcbiAgICB9IGVsc2UgaWYgKHRoZWlyQ3VycmVudFswXSA9PT0gJy0nICYmIG1pbmVDdXJyZW50WzBdID09PSAnICcpIHtcbiAgICAgIC8vIFRoZWlyIHJlbW92ZWQgb3IgZWRpdGVkXG4gICAgICByZW1vdmFsKGh1bmssIHRoZWlyLCBtaW5lLCB0cnVlKTtcbiAgICB9IGVsc2UgaWYgKG1pbmVDdXJyZW50ID09PSB0aGVpckN1cnJlbnQpIHtcbiAgICAgIC8vIENvbnRleHQgaWRlbnRpdHlcbiAgICAgIGh1bmsubGluZXMucHVzaChtaW5lQ3VycmVudCk7XG4gICAgICBtaW5lLmluZGV4Kys7XG4gICAgICB0aGVpci5pbmRleCsrO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDb250ZXh0IG1pc21hdGNoXG4gICAgICBjb25mbGljdChodW5rLCBjb2xsZWN0Q2hhbmdlKG1pbmUpLCBjb2xsZWN0Q2hhbmdlKHRoZWlyKSk7XG4gICAgfVxuICB9XG5cbiAgLy8gTm93IHB1c2ggYW55dGhpbmcgdGhhdCBtYXkgYmUgcmVtYWluaW5nXG4gIGluc2VydFRyYWlsaW5nKGh1bmssIG1pbmUpO1xuICBpbnNlcnRUcmFpbGluZyhodW5rLCB0aGVpcik7XG5cbiAgY2FsY0xpbmVDb3VudChodW5rKTtcbn1cblxuZnVuY3Rpb24gbXV0dWFsQ2hhbmdlKGh1bmssIG1pbmUsIHRoZWlyKSB7XG4gIGxldCBteUNoYW5nZXMgPSBjb2xsZWN0Q2hhbmdlKG1pbmUpLFxuICAgICAgdGhlaXJDaGFuZ2VzID0gY29sbGVjdENoYW5nZSh0aGVpcik7XG5cbiAgaWYgKGFsbFJlbW92ZXMobXlDaGFuZ2VzKSAmJiBhbGxSZW1vdmVzKHRoZWlyQ2hhbmdlcykpIHtcbiAgICAvLyBTcGVjaWFsIGNhc2UgZm9yIHJlbW92ZSBjaGFuZ2VzIHRoYXQgYXJlIHN1cGVyc2V0cyBvZiBvbmUgYW5vdGhlclxuICAgIGlmIChhcnJheVN0YXJ0c1dpdGgobXlDaGFuZ2VzLCB0aGVpckNoYW5nZXMpXG4gICAgICAgICYmIHNraXBSZW1vdmVTdXBlcnNldCh0aGVpciwgbXlDaGFuZ2VzLCBteUNoYW5nZXMubGVuZ3RoIC0gdGhlaXJDaGFuZ2VzLmxlbmd0aCkpIHtcbiAgICAgIGh1bmsubGluZXMucHVzaCguLi4gbXlDaGFuZ2VzKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGFycmF5U3RhcnRzV2l0aCh0aGVpckNoYW5nZXMsIG15Q2hhbmdlcylcbiAgICAgICAgJiYgc2tpcFJlbW92ZVN1cGVyc2V0KG1pbmUsIHRoZWlyQ2hhbmdlcywgdGhlaXJDaGFuZ2VzLmxlbmd0aCAtIG15Q2hhbmdlcy5sZW5ndGgpKSB7XG4gICAgICBodW5rLmxpbmVzLnB1c2goLi4uIHRoZWlyQ2hhbmdlcyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9IGVsc2UgaWYgKGFycmF5RXF1YWwobXlDaGFuZ2VzLCB0aGVpckNoYW5nZXMpKSB7XG4gICAgaHVuay5saW5lcy5wdXNoKC4uLiBteUNoYW5nZXMpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbmZsaWN0KGh1bmssIG15Q2hhbmdlcywgdGhlaXJDaGFuZ2VzKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZhbChodW5rLCBtaW5lLCB0aGVpciwgc3dhcCkge1xuICBsZXQgbXlDaGFuZ2VzID0gY29sbGVjdENoYW5nZShtaW5lKSxcbiAgICAgIHRoZWlyQ2hhbmdlcyA9IGNvbGxlY3RDb250ZXh0KHRoZWlyLCBteUNoYW5nZXMpO1xuICBpZiAodGhlaXJDaGFuZ2VzLm1lcmdlZCkge1xuICAgIGh1bmsubGluZXMucHVzaCguLi4gdGhlaXJDaGFuZ2VzLm1lcmdlZCk7XG4gIH0gZWxzZSB7XG4gICAgY29uZmxpY3QoaHVuaywgc3dhcCA/IHRoZWlyQ2hhbmdlcyA6IG15Q2hhbmdlcywgc3dhcCA/IG15Q2hhbmdlcyA6IHRoZWlyQ2hhbmdlcyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29uZmxpY3QoaHVuaywgbWluZSwgdGhlaXIpIHtcbiAgaHVuay5jb25mbGljdCA9IHRydWU7XG4gIGh1bmsubGluZXMucHVzaCh7XG4gICAgY29uZmxpY3Q6IHRydWUsXG4gICAgbWluZTogbWluZSxcbiAgICB0aGVpcnM6IHRoZWlyXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRMZWFkaW5nKGh1bmssIGluc2VydCwgdGhlaXIpIHtcbiAgd2hpbGUgKGluc2VydC5vZmZzZXQgPCB0aGVpci5vZmZzZXQgJiYgaW5zZXJ0LmluZGV4IDwgaW5zZXJ0LmxpbmVzLmxlbmd0aCkge1xuICAgIGxldCBsaW5lID0gaW5zZXJ0LmxpbmVzW2luc2VydC5pbmRleCsrXTtcbiAgICBodW5rLmxpbmVzLnB1c2gobGluZSk7XG4gICAgaW5zZXJ0Lm9mZnNldCsrO1xuICB9XG59XG5mdW5jdGlvbiBpbnNlcnRUcmFpbGluZyhodW5rLCBpbnNlcnQpIHtcbiAgd2hpbGUgKGluc2VydC5pbmRleCA8IGluc2VydC5saW5lcy5sZW5ndGgpIHtcbiAgICBsZXQgbGluZSA9IGluc2VydC5saW5lc1tpbnNlcnQuaW5kZXgrK107XG4gICAgaHVuay5saW5lcy5wdXNoKGxpbmUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbGxlY3RDaGFuZ2Uoc3RhdGUpIHtcbiAgbGV0IHJldCA9IFtdLFxuICAgICAgb3BlcmF0aW9uID0gc3RhdGUubGluZXNbc3RhdGUuaW5kZXhdWzBdO1xuICB3aGlsZSAoc3RhdGUuaW5kZXggPCBzdGF0ZS5saW5lcy5sZW5ndGgpIHtcbiAgICBsZXQgbGluZSA9IHN0YXRlLmxpbmVzW3N0YXRlLmluZGV4XTtcblxuICAgIC8vIEdyb3VwIGFkZGl0aW9ucyB0aGF0IGFyZSBpbW1lZGlhdGVseSBhZnRlciBzdWJ0cmFjdGlvbnMgYW5kIHRyZWF0IHRoZW0gYXMgb25lIFwiYXRvbWljXCIgbW9kaWZ5IGNoYW5nZS5cbiAgICBpZiAob3BlcmF0aW9uID09PSAnLScgJiYgbGluZVswXSA9PT0gJysnKSB7XG4gICAgICBvcGVyYXRpb24gPSAnKyc7XG4gICAgfVxuXG4gICAgaWYgKG9wZXJhdGlvbiA9PT0gbGluZVswXSkge1xuICAgICAgcmV0LnB1c2gobGluZSk7XG4gICAgICBzdGF0ZS5pbmRleCsrO1xuICAgIH0gZWxzZSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmV0O1xufVxuZnVuY3Rpb24gY29sbGVjdENvbnRleHQoc3RhdGUsIG1hdGNoQ2hhbmdlcykge1xuICBsZXQgY2hhbmdlcyA9IFtdLFxuICAgICAgbWVyZ2VkID0gW10sXG4gICAgICBtYXRjaEluZGV4ID0gMCxcbiAgICAgIGNvbnRleHRDaGFuZ2VzID0gZmFsc2UsXG4gICAgICBjb25mbGljdGVkID0gZmFsc2U7XG4gIHdoaWxlIChtYXRjaEluZGV4IDwgbWF0Y2hDaGFuZ2VzLmxlbmd0aFxuICAgICAgICAmJiBzdGF0ZS5pbmRleCA8IHN0YXRlLmxpbmVzLmxlbmd0aCkge1xuICAgIGxldCBjaGFuZ2UgPSBzdGF0ZS5saW5lc1tzdGF0ZS5pbmRleF0sXG4gICAgICAgIG1hdGNoID0gbWF0Y2hDaGFuZ2VzW21hdGNoSW5kZXhdO1xuXG4gICAgLy8gT25jZSB3ZSd2ZSBoaXQgb3VyIGFkZCwgdGhlbiB3ZSBhcmUgZG9uZVxuICAgIGlmIChtYXRjaFswXSA9PT0gJysnKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjb250ZXh0Q2hhbmdlcyA9IGNvbnRleHRDaGFuZ2VzIHx8IGNoYW5nZVswXSAhPT0gJyAnO1xuXG4gICAgbWVyZ2VkLnB1c2gobWF0Y2gpO1xuICAgIG1hdGNoSW5kZXgrKztcblxuICAgIC8vIENvbnN1bWUgYW55IGFkZGl0aW9ucyBpbiB0aGUgb3RoZXIgYmxvY2sgYXMgYSBjb25mbGljdCB0byBhdHRlbXB0XG4gICAgLy8gdG8gcHVsbCBpbiB0aGUgcmVtYWluaW5nIGNvbnRleHQgYWZ0ZXIgdGhpc1xuICAgIGlmIChjaGFuZ2VbMF0gPT09ICcrJykge1xuICAgICAgY29uZmxpY3RlZCA9IHRydWU7XG5cbiAgICAgIHdoaWxlIChjaGFuZ2VbMF0gPT09ICcrJykge1xuICAgICAgICBjaGFuZ2VzLnB1c2goY2hhbmdlKTtcbiAgICAgICAgY2hhbmdlID0gc3RhdGUubGluZXNbKytzdGF0ZS5pbmRleF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1hdGNoLnN1YnN0cigxKSA9PT0gY2hhbmdlLnN1YnN0cigxKSkge1xuICAgICAgY2hhbmdlcy5wdXNoKGNoYW5nZSk7XG4gICAgICBzdGF0ZS5pbmRleCsrO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25mbGljdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoKG1hdGNoQ2hhbmdlc1ttYXRjaEluZGV4XSB8fCAnJylbMF0gPT09ICcrJ1xuICAgICAgJiYgY29udGV4dENoYW5nZXMpIHtcbiAgICBjb25mbGljdGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGlmIChjb25mbGljdGVkKSB7XG4gICAgcmV0dXJuIGNoYW5nZXM7XG4gIH1cblxuICB3aGlsZSAobWF0Y2hJbmRleCA8IG1hdGNoQ2hhbmdlcy5sZW5ndGgpIHtcbiAgICBtZXJnZWQucHVzaChtYXRjaENoYW5nZXNbbWF0Y2hJbmRleCsrXSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1lcmdlZCxcbiAgICBjaGFuZ2VzXG4gIH07XG59XG5cbmZ1bmN0aW9uIGFsbFJlbW92ZXMoY2hhbmdlcykge1xuICByZXR1cm4gY2hhbmdlcy5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgY2hhbmdlKSB7XG4gICAgcmV0dXJuIHByZXYgJiYgY2hhbmdlWzBdID09PSAnLSc7XG4gIH0sIHRydWUpO1xufVxuZnVuY3Rpb24gc2tpcFJlbW92ZVN1cGVyc2V0KHN0YXRlLCByZW1vdmVDaGFuZ2VzLCBkZWx0YSkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGRlbHRhOyBpKyspIHtcbiAgICBsZXQgY2hhbmdlQ29udGVudCA9IHJlbW92ZUNoYW5nZXNbcmVtb3ZlQ2hhbmdlcy5sZW5ndGggLSBkZWx0YSArIGldLnN1YnN0cigxKTtcbiAgICBpZiAoc3RhdGUubGluZXNbc3RhdGUuaW5kZXggKyBpXSAhPT0gJyAnICsgY2hhbmdlQ29udGVudCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRlLmluZGV4ICs9IGRlbHRhO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gY2FsY09sZE5ld0xpbmVDb3VudChsaW5lcykge1xuICBsZXQgb2xkTGluZXMgPSAwO1xuICBsZXQgbmV3TGluZXMgPSAwO1xuXG4gIGxpbmVzLmZvckVhY2goZnVuY3Rpb24obGluZSkge1xuICAgIGlmICh0eXBlb2YgbGluZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGxldCBteUNvdW50ID0gY2FsY09sZE5ld0xpbmVDb3VudChsaW5lLm1pbmUpO1xuICAgICAgbGV0IHRoZWlyQ291bnQgPSBjYWxjT2xkTmV3TGluZUNvdW50KGxpbmUudGhlaXJzKTtcblxuICAgICAgaWYgKG9sZExpbmVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKG15Q291bnQub2xkTGluZXMgPT09IHRoZWlyQ291bnQub2xkTGluZXMpIHtcbiAgICAgICAgICBvbGRMaW5lcyArPSBteUNvdW50Lm9sZExpbmVzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9sZExpbmVzID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChuZXdMaW5lcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChteUNvdW50Lm5ld0xpbmVzID09PSB0aGVpckNvdW50Lm5ld0xpbmVzKSB7XG4gICAgICAgICAgbmV3TGluZXMgKz0gbXlDb3VudC5uZXdMaW5lcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdMaW5lcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAobmV3TGluZXMgIT09IHVuZGVmaW5lZCAmJiAobGluZVswXSA9PT0gJysnIHx8IGxpbmVbMF0gPT09ICcgJykpIHtcbiAgICAgICAgbmV3TGluZXMrKztcbiAgICAgIH1cbiAgICAgIGlmIChvbGRMaW5lcyAhPT0gdW5kZWZpbmVkICYmIChsaW5lWzBdID09PSAnLScgfHwgbGluZVswXSA9PT0gJyAnKSkge1xuICAgICAgICBvbGRMaW5lcysrO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHtvbGRMaW5lcywgbmV3TGluZXN9O1xufVxuIl19


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	/*istanbul ignore start*/'use strict';

	exports.__esModule = true;
	exports. /*istanbul ignore end*/structuredPatch = structuredPatch;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/createTwoFilesPatch = createTwoFilesPatch;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/createPatch = createPatch;

	var /*istanbul ignore start*/_line = __webpack_require__(5) /*istanbul ignore end*/;

	/*istanbul ignore start*/function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	/*istanbul ignore end*/function structuredPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options) {
	  if (!options) {
	    options = {};
	  }
	  if (typeof options.context === 'undefined') {
	    options.context = 4;
	  }

	  var diff = /*istanbul ignore start*/(0, _line.diffLines) /*istanbul ignore end*/(oldStr, newStr, options);
	  diff.push({ value: '', lines: [] }); // Append an empty value to make cleanup easier

	  function contextLines(lines) {
	    return lines.map(function (entry) {
	      return ' ' + entry;
	    });
	  }

	  var hunks = [];
	  var oldRangeStart = 0,
	      newRangeStart = 0,
	      curRange = [],
	      oldLine = 1,
	      newLine = 1;

	  /*istanbul ignore start*/var _loop = function _loop( /*istanbul ignore end*/i) {
	    var current = diff[i],
	        lines = current.lines || current.value.replace(/\n$/, '').split('\n');
	    current.lines = lines;

	    if (current.added || current.removed) {
	      /*istanbul ignore start*/var _curRange;

	      /*istanbul ignore end*/ // If we have previous context, start with that
	      if (!oldRangeStart) {
	        var prev = diff[i - 1];
	        oldRangeStart = oldLine;
	        newRangeStart = newLine;

	        if (prev) {
	          curRange = options.context > 0 ? contextLines(prev.lines.slice(-options.context)) : [];
	          oldRangeStart -= curRange.length;
	          newRangeStart -= curRange.length;
	        }
	      }

	      // Output our changes
	      /*istanbul ignore start*/(_curRange = /*istanbul ignore end*/curRange).push. /*istanbul ignore start*/apply /*istanbul ignore end*/( /*istanbul ignore start*/_curRange /*istanbul ignore end*/, /*istanbul ignore start*/_toConsumableArray( /*istanbul ignore end*/lines.map(function (entry) {
	        return (current.added ? '+' : '-') + entry;
	      })));

	      // Track the updated file position
	      if (current.added) {
	        newLine += lines.length;
	      } else {
	        oldLine += lines.length;
	      }
	    } else {
	      // Identical context lines. Track line changes
	      if (oldRangeStart) {
	        // Close out any changes that have been output (or join overlapping)
	        if (lines.length <= options.context * 2 && i < diff.length - 2) {
	          /*istanbul ignore start*/var _curRange2;

	          /*istanbul ignore end*/ // Overlapping
	          /*istanbul ignore start*/(_curRange2 = /*istanbul ignore end*/curRange).push. /*istanbul ignore start*/apply /*istanbul ignore end*/( /*istanbul ignore start*/_curRange2 /*istanbul ignore end*/, /*istanbul ignore start*/_toConsumableArray( /*istanbul ignore end*/contextLines(lines)));
	        } else {
	          /*istanbul ignore start*/var _curRange3;

	          /*istanbul ignore end*/ // end the range and output
	          var contextSize = Math.min(lines.length, options.context);
	          /*istanbul ignore start*/(_curRange3 = /*istanbul ignore end*/curRange).push. /*istanbul ignore start*/apply /*istanbul ignore end*/( /*istanbul ignore start*/_curRange3 /*istanbul ignore end*/, /*istanbul ignore start*/_toConsumableArray( /*istanbul ignore end*/contextLines(lines.slice(0, contextSize))));

	          var hunk = {
	            oldStart: oldRangeStart,
	            oldLines: oldLine - oldRangeStart + contextSize,
	            newStart: newRangeStart,
	            newLines: newLine - newRangeStart + contextSize,
	            lines: curRange
	          };
	          if (i >= diff.length - 2 && lines.length <= options.context) {
	            // EOF is inside this hunk
	            var oldEOFNewline = /\n$/.test(oldStr);
	            var newEOFNewline = /\n$/.test(newStr);
	            if (lines.length == 0 && !oldEOFNewline) {
	              // special case: old has no eol and no trailing context; no-nl can end up before adds
	              curRange.splice(hunk.oldLines, 0, '\\ No newline at end of file');
	            } else if (!oldEOFNewline || !newEOFNewline) {
	              curRange.push('\\ No newline at end of file');
	            }
	          }
	          hunks.push(hunk);

	          oldRangeStart = 0;
	          newRangeStart = 0;
	          curRange = [];
	        }
	      }
	      oldLine += lines.length;
	      newLine += lines.length;
	    }
	  };

	  for (var i = 0; i < diff.length; i++) {
	    /*istanbul ignore start*/_loop( /*istanbul ignore end*/i);
	  }

	  return {
	    oldFileName: oldFileName, newFileName: newFileName,
	    oldHeader: oldHeader, newHeader: newHeader,
	    hunks: hunks
	  };
	}

	function createTwoFilesPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options) {
	  var diff = structuredPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options);

	  var ret = [];
	  if (oldFileName == newFileName) {
	    ret.push('Index: ' + oldFileName);
	  }
	  ret.push('===================================================================');
	  ret.push('--- ' + diff.oldFileName + (typeof diff.oldHeader === 'undefined' ? '' : '\t' + diff.oldHeader));
	  ret.push('+++ ' + diff.newFileName + (typeof diff.newHeader === 'undefined' ? '' : '\t' + diff.newHeader));

	  for (var i = 0; i < diff.hunks.length; i++) {
	    var hunk = diff.hunks[i];
	    ret.push('@@ -' + hunk.oldStart + ',' + hunk.oldLines + ' +' + hunk.newStart + ',' + hunk.newLines + ' @@');
	    ret.push.apply(ret, hunk.lines);
	  }

	  return ret.join('\n') + '\n';
	}

	function createPatch(fileName, oldStr, newStr, oldHeader, newHeader, options) {
	  return createTwoFilesPatch(fileName, fileName, oldStr, newStr, oldHeader, newHeader, options);
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXRjaC9jcmVhdGUuanMiXSwibmFtZXMiOlsic3RydWN0dXJlZFBhdGNoIiwiY3JlYXRlVHdvRmlsZXNQYXRjaCIsImNyZWF0ZVBhdGNoIiwib2xkRmlsZU5hbWUiLCJuZXdGaWxlTmFtZSIsIm9sZFN0ciIsIm5ld1N0ciIsIm9sZEhlYWRlciIsIm5ld0hlYWRlciIsIm9wdGlvbnMiLCJjb250ZXh0IiwiZGlmZiIsInB1c2giLCJ2YWx1ZSIsImxpbmVzIiwiY29udGV4dExpbmVzIiwibWFwIiwiZW50cnkiLCJodW5rcyIsIm9sZFJhbmdlU3RhcnQiLCJuZXdSYW5nZVN0YXJ0IiwiY3VyUmFuZ2UiLCJvbGRMaW5lIiwibmV3TGluZSIsImkiLCJjdXJyZW50IiwicmVwbGFjZSIsInNwbGl0IiwiYWRkZWQiLCJyZW1vdmVkIiwicHJldiIsInNsaWNlIiwibGVuZ3RoIiwiY29udGV4dFNpemUiLCJNYXRoIiwibWluIiwiaHVuayIsIm9sZFN0YXJ0Iiwib2xkTGluZXMiLCJuZXdTdGFydCIsIm5ld0xpbmVzIiwib2xkRU9GTmV3bGluZSIsInRlc3QiLCJuZXdFT0ZOZXdsaW5lIiwic3BsaWNlIiwicmV0IiwiYXBwbHkiLCJqb2luIiwiZmlsZU5hbWUiXSwibWFwcGluZ3MiOiI7OztnQ0FFZ0JBLGUsR0FBQUEsZTt5REFpR0FDLG1CLEdBQUFBLG1CO3lEQXdCQUMsVyxHQUFBQSxXOztBQTNIaEI7Ozs7dUJBRU8sU0FBU0YsZUFBVCxDQUF5QkcsV0FBekIsRUFBc0NDLFdBQXRDLEVBQW1EQyxNQUFuRCxFQUEyREMsTUFBM0QsRUFBbUVDLFNBQW5FLEVBQThFQyxTQUE5RSxFQUF5RkMsT0FBekYsRUFBa0c7QUFDdkcsTUFBSSxDQUFDQSxPQUFMLEVBQWM7QUFDWkEsY0FBVSxFQUFWO0FBQ0Q7QUFDRCxNQUFJLE9BQU9BLFFBQVFDLE9BQWYsS0FBMkIsV0FBL0IsRUFBNEM7QUFDMUNELFlBQVFDLE9BQVIsR0FBa0IsQ0FBbEI7QUFDRDs7QUFFRCxN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QUEvQyxFQUEwREMsU0FBMUQsRUFBcUVDLE9BQXJFLEVBQThFO0FBQ25GLFNBQU9SLG9CQUFvQitDLFFBQXBCLEVBQThCQSxRQUE5QixFQUF3QzNDLE1BQXhDLEVBQWdEQyxNQUFoRCxFQUF3REMsU0FBeEQsRUFBbUVDLFNBQW5FLEVBQThFQyxPQUE5RSxDQUFQO0FBQ0QiLCJmaWxlIjoiY3JlYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtkaWZmTGluZXN9IGZyb20gJy4uL2RpZmYvbGluZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJ1Y3R1cmVkUGF0Y2gob2xkRmlsZU5hbWUsIG5ld0ZpbGVOYW1lLCBvbGRTdHIsIG5ld1N0ciwgb2xkSGVhZGVyLCBuZXdIZWFkZXIsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5jb250ZXh0ID09PSAndW5kZWZpbmVkJykge1xuICAgIG9wdGlvbnMuY29udGV4dCA9IDQ7XG4gIH1cblxuICBjb25zdCBkaWZmID0gZGlmZkxpbmVzKG9sZFN0ciwgbmV3U3RyLCBvcHRpb25zKTtcbiAgZGlmZi5wdXNoKHt2YWx1ZTogJycsIGxpbmVzOiBbXX0pOyAgIC8vIEFwcGVuZCBhbiBlbXB0eSB2YWx1ZSB0byBtYWtlIGNsZWFudXAgZWFzaWVyXG5cbiAgZnVuY3Rpb24gY29udGV4dExpbmVzKGxpbmVzKSB7XG4gICAgcmV0dXJuIGxpbmVzLm1hcChmdW5jdGlvbihlbnRyeSkgeyByZXR1cm4gJyAnICsgZW50cnk7IH0pO1xuICB9XG5cbiAgbGV0IGh1bmtzID0gW107XG4gIGxldCBvbGRSYW5nZVN0YXJ0ID0gMCwgbmV3UmFuZ2VTdGFydCA9IDAsIGN1clJhbmdlID0gW10sXG4gICAgICBvbGRMaW5lID0gMSwgbmV3TGluZSA9IDE7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGlmZi5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGN1cnJlbnQgPSBkaWZmW2ldLFxuICAgICAgICAgIGxpbmVzID0gY3VycmVudC5saW5lcyB8fCBjdXJyZW50LnZhbHVlLnJlcGxhY2UoL1xcbiQvLCAnJykuc3BsaXQoJ1xcbicpO1xuICAgIGN1cnJlbnQubGluZXMgPSBsaW5lcztcblxuICAgIGlmIChjdXJyZW50LmFkZGVkIHx8IGN1cnJlbnQucmVtb3ZlZCkge1xuICAgICAgLy8gSWYgd2UgaGF2ZSBwcmV2aW91cyBjb250ZXh0LCBzdGFydCB3aXRoIHRoYXRcbiAgICAgIGlmICghb2xkUmFuZ2VTdGFydCkge1xuICAgICAgICBjb25zdCBwcmV2ID0gZGlmZltpIC0gMV07XG4gICAgICAgIG9sZFJhbmdlU3RhcnQgPSBvbGRMaW5lO1xuICAgICAgICBuZXdSYW5nZVN0YXJ0ID0gbmV3TGluZTtcblxuICAgICAgICBpZiAocHJldikge1xuICAgICAgICAgIGN1clJhbmdlID0gb3B0aW9ucy5jb250ZXh0ID4gMCA/IGNvbnRleHRMaW5lcyhwcmV2LmxpbmVzLnNsaWNlKC1vcHRpb25zLmNvbnRleHQpKSA6IFtdO1xuICAgICAgICAgIG9sZFJhbmdlU3RhcnQgLT0gY3VyUmFuZ2UubGVuZ3RoO1xuICAgICAgICAgIG5ld1JhbmdlU3RhcnQgLT0gY3VyUmFuZ2UubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIE91dHB1dCBvdXIgY2hhbmdlc1xuICAgICAgY3VyUmFuZ2UucHVzaCguLi4gbGluZXMubWFwKGZ1bmN0aW9uKGVudHJ5KSB7XG4gICAgICAgIHJldHVybiAoY3VycmVudC5hZGRlZCA/ICcrJyA6ICctJykgKyBlbnRyeTtcbiAgICAgIH0pKTtcblxuICAgICAgLy8gVHJhY2sgdGhlIHVwZGF0ZWQgZmlsZSBwb3NpdGlvblxuICAgICAgaWYgKGN1cnJlbnQuYWRkZWQpIHtcbiAgICAgICAgbmV3TGluZSArPSBsaW5lcy5sZW5ndGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvbGRMaW5lICs9IGxpbmVzLmxlbmd0aDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWRlbnRpY2FsIGNvbnRleHQgbGluZXMuIFRyYWNrIGxpbmUgY2hhbmdlc1xuICAgICAgaWYgKG9sZFJhbmdlU3RhcnQpIHtcbiAgICAgICAgLy8gQ2xvc2Ugb3V0IGFueSBjaGFuZ2VzIHRoYXQgaGF2ZSBiZWVuIG91dHB1dCAob3Igam9pbiBvdmVybGFwcGluZylcbiAgICAgICAgaWYgKGxpbmVzLmxlbmd0aCA8PSBvcHRpb25zLmNvbnRleHQgKiAyICYmIGkgPCBkaWZmLmxlbmd0aCAtIDIpIHtcbiAgICAgICAgICAvLyBPdmVybGFwcGluZ1xuICAgICAgICAgIGN1clJhbmdlLnB1c2goLi4uIGNvbnRleHRMaW5lcyhsaW5lcykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGVuZCB0aGUgcmFuZ2UgYW5kIG91dHB1dFxuICAgICAgICAgIGxldCBjb250ZXh0U2l6ZSA9IE1hdGgubWluKGxpbmVzLmxlbmd0aCwgb3B0aW9ucy5jb250ZXh0KTtcbiAgICAgICAgICBjdXJSYW5nZS5wdXNoKC4uLiBjb250ZXh0TGluZXMobGluZXMuc2xpY2UoMCwgY29udGV4dFNpemUpKSk7XG5cbiAgICAgICAgICBsZXQgaHVuayA9IHtcbiAgICAgICAgICAgIG9sZFN0YXJ0OiBvbGRSYW5nZVN0YXJ0LFxuICAgICAgICAgICAgb2xkTGluZXM6IChvbGRMaW5lIC0gb2xkUmFuZ2VTdGFydCArIGNvbnRleHRTaXplKSxcbiAgICAgICAgICAgIG5ld1N0YXJ0OiBuZXdSYW5nZVN0YXJ0LFxuICAgICAgICAgICAgbmV3TGluZXM6IChuZXdMaW5lIC0gbmV3UmFuZ2VTdGFydCArIGNvbnRleHRTaXplKSxcbiAgICAgICAgICAgIGxpbmVzOiBjdXJSYW5nZVxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKGkgPj0gZGlmZi5sZW5ndGggLSAyICYmIGxpbmVzLmxlbmd0aCA8PSBvcHRpb25zLmNvbnRleHQpIHtcbiAgICAgICAgICAgIC8vIEVPRiBpcyBpbnNpZGUgdGhpcyBodW5rXG4gICAgICAgICAgICBsZXQgb2xkRU9GTmV3bGluZSA9ICgvXFxuJC8udGVzdChvbGRTdHIpKTtcbiAgICAgICAgICAgIGxldCBuZXdFT0ZOZXdsaW5lID0gKC9cXG4kLy50ZXN0KG5ld1N0cikpO1xuICAgICAgICAgICAgaWYgKGxpbmVzLmxlbmd0aCA9PSAwICYmICFvbGRFT0ZOZXdsaW5lKSB7XG4gICAgICAgICAgICAgIC8vIHNwZWNpYWwgY2FzZTogb2xkIGhhcyBubyBlb2wgYW5kIG5vIHRyYWlsaW5nIGNvbnRleHQ7IG5vLW5sIGNhbiBlbmQgdXAgYmVmb3JlIGFkZHNcbiAgICAgICAgICAgICAgY3VyUmFuZ2Uuc3BsaWNlKGh1bmsub2xkTGluZXMsIDAsICdcXFxcIE5vIG5ld2xpbmUgYXQgZW5kIG9mIGZpbGUnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIW9sZEVPRk5ld2xpbmUgfHwgIW5ld0VPRk5ld2xpbmUpIHtcbiAgICAgICAgICAgICAgY3VyUmFuZ2UucHVzaCgnXFxcXCBObyBuZXdsaW5lIGF0IGVuZCBvZiBmaWxlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGh1bmtzLnB1c2goaHVuayk7XG5cbiAgICAgICAgICBvbGRSYW5nZVN0YXJ0ID0gMDtcbiAgICAgICAgICBuZXdSYW5nZVN0YXJ0ID0gMDtcbiAgICAgICAgICBjdXJSYW5nZSA9IFtdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBvbGRMaW5lICs9IGxpbmVzLmxlbmd0aDtcbiAgICAgIG5ld0xpbmUgKz0gbGluZXMubGVuZ3RoO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgb2xkRmlsZU5hbWU6IG9sZEZpbGVOYW1lLCBuZXdGaWxlTmFtZTogbmV3RmlsZU5hbWUsXG4gICAgb2xkSGVhZGVyOiBvbGRIZWFkZXIsIG5ld0hlYWRlcjogbmV3SGVhZGVyLFxuICAgIGh1bmtzOiBodW5rc1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVHdvRmlsZXNQYXRjaChvbGRGaWxlTmFtZSwgbmV3RmlsZU5hbWUsIG9sZFN0ciwgbmV3U3RyLCBvbGRIZWFkZXIsIG5ld0hlYWRlciwgb3B0aW9ucykge1xuICBjb25zdCBkaWZmID0gc3RydWN0dXJlZFBhdGNoKG9sZEZpbGVOYW1lLCBuZXdGaWxlTmFtZSwgb2xkU3RyLCBuZXdTdHIsIG9sZEhlYWRlciwgbmV3SGVhZGVyLCBvcHRpb25zKTtcblxuICBjb25zdCByZXQgPSBbXTtcbiAgaWYgKG9sZEZpbGVOYW1lID09IG5ld0ZpbGVOYW1lKSB7XG4gICAgcmV0LnB1c2goJ0luZGV4OiAnICsgb2xkRmlsZU5hbWUpO1xuICB9XG4gIHJldC5wdXNoKCc9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Jyk7XG4gIHJldC5wdXNoKCctLS0gJyArIGRpZmYub2xkRmlsZU5hbWUgKyAodHlwZW9mIGRpZmYub2xkSGVhZGVyID09PSAndW5kZWZpbmVkJyA/ICcnIDogJ1xcdCcgKyBkaWZmLm9sZEhlYWRlcikpO1xuICByZXQucHVzaCgnKysrICcgKyBkaWZmLm5ld0ZpbGVOYW1lICsgKHR5cGVvZiBkaWZmLm5ld0hlYWRlciA9PT0gJ3VuZGVmaW5lZCcgPyAnJyA6ICdcXHQnICsgZGlmZi5uZXdIZWFkZXIpKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGRpZmYuaHVua3MubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBodW5rID0gZGlmZi5odW5rc1tpXTtcbiAgICByZXQucHVzaChcbiAgICAgICdAQCAtJyArIGh1bmsub2xkU3RhcnQgKyAnLCcgKyBodW5rLm9sZExpbmVzXG4gICAgICArICcgKycgKyBodW5rLm5ld1N0YXJ0ICsgJywnICsgaHVuay5uZXdMaW5lc1xuICAgICAgKyAnIEBAJ1xuICAgICk7XG4gICAgcmV0LnB1c2guYXBwbHkocmV0LCBodW5rLmxpbmVzKTtcbiAgfVxuXG4gIHJldHVybiByZXQuam9pbignXFxuJykgKyAnXFxuJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBhdGNoKGZpbGVOYW1lLCBvbGRTdHIsIG5ld1N0ciwgb2xkSGVhZGVyLCBuZXdIZWFkZXIsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIGNyZWF0ZVR3b0ZpbGVzUGF0Y2goZmlsZU5hbWUsIGZpbGVOYW1lLCBvbGRTdHIsIG5ld1N0ciwgb2xkSGVhZGVyLCBuZXdIZWFkZXIsIG9wdGlvbnMpO1xufVxuIl19


/***/ }),
/* 15 */
/***/ (function(module, exports) {

	/*istanbul ignore start*/"use strict";

	exports.__esModule = true;
	exports. /*istanbul ignore end*/arrayEqual = arrayEqual;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/arrayStartsWith = arrayStartsWith;
	function arrayEqual(a, b) {
	  if (a.length !== b.length) {
	    return false;
	  }

	  return arrayStartsWith(a, b);
	}

	function arrayStartsWith(array, start) {
	  if (start.length > array.length) {
	    return false;
	  }

	  for (var i = 0; i < start.length; i++) {
	    if (start[i] !== array[i]) {
	      return false;
	    }
	  }

	  return true;
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL2FycmF5LmpzIl0sIm5hbWVzIjpbImFycmF5RXF1YWwiLCJhcnJheVN0YXJ0c1dpdGgiLCJhIiwiYiIsImxlbmd0aCIsImFycmF5Iiwic3RhcnQiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Z0NBQWdCQSxVLEdBQUFBLFU7eURBUUFDLGUsR0FBQUEsZTtBQVJULFNBQVNELFVBQVQsQ0FBb0JFLENBQXBCLEVBQXVCQyxDQUF2QixFQUEwQjtBQUMvQixNQUFJRCxFQUFFRSxNQUFGLEtBQWFELEVBQUVDLE1BQW5CLEVBQTJCO0FBQ3pCLFdBQU8sS0FBUDtBQUNEOztBQUVELFNBQU9ILGdCQUFnQkMsQ0FBaEIsRUFBbUJDLENBQW5CLENBQVA7QUFDRDs7QUFFTSxTQUFTRixlQUFULENBQXlCSSxLQUF6QixFQUFnQ0MsS0FBaEMsRUFBdUM7QUFDNUMsTUFBSUEsTUFBTUYsTUFBTixHQUFlQyxNQUFNRCxNQUF6QixFQUFpQztBQUMvQixXQUFPLEtBQVA7QUFDRDs7QUFFRCxPQUFLLElBQUlHLElBQUksQ0FBYixFQUFnQkEsSUFBSUQsTUFBTUYsTUFBMUIsRUFBa0NHLEdBQWxDLEVBQXVDO0FBQ3JDLFFBQUlELE1BQU1DLENBQU4sTUFBYUYsTUFBTUUsQ0FBTixDQUFqQixFQUEyQjtBQUN6QixhQUFPLEtBQVA7QUFDRDtBQUNGOztBQUVELFNBQU8sSUFBUDtBQUNEIiwiZmlsZSI6ImFycmF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGFycmF5RXF1YWwoYSwgYikge1xuICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGFycmF5U3RhcnRzV2l0aChhLCBiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5U3RhcnRzV2l0aChhcnJheSwgc3RhcnQpIHtcbiAgaWYgKHN0YXJ0Lmxlbmd0aCA+IGFycmF5Lmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhcnQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3RhcnRbaV0gIT09IGFycmF5W2ldKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG4iXX0=


/***/ }),
/* 16 */
/***/ (function(module, exports) {

	/*istanbul ignore start*/"use strict";

	exports.__esModule = true;
	exports. /*istanbul ignore end*/convertChangesToDMP = convertChangesToDMP;
	// See: http://code.google.com/p/google-diff-match-patch/wiki/API
	function convertChangesToDMP(changes) {
	  var ret = [],
	      change = /*istanbul ignore start*/void 0 /*istanbul ignore end*/,
	      operation = /*istanbul ignore start*/void 0 /*istanbul ignore end*/;
	  for (var i = 0; i < changes.length; i++) {
	    change = changes[i];
	    if (change.added) {
	      operation = 1;
	    } else if (change.removed) {
	      operation = -1;
	    } else {
	      operation = 0;
	    }

	    ret.push([operation, change.value]);
	  }
	  return ret;
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb252ZXJ0L2RtcC5qcyJdLCJuYW1lcyI6WyJjb252ZXJ0Q2hhbmdlc1RvRE1QIiwiY2hhbmdlcyIsInJldCIsImNoYW5nZSIsIm9wZXJhdGlvbiIsImkiLCJsZW5ndGgiLCJhZGRlZCIsInJlbW92ZWQiLCJwdXNoIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7OztnQ0FDZ0JBLG1CLEdBQUFBLG1CO0FBRGhCO0FBQ08sU0FBU0EsbUJBQVQsQ0FBNkJDLE9BQTdCLEVBQXNDO0FBQzNDLE1BQUlDLE1BQU0sRUFBVjtBQUFBLE1BQ0lDLHdDQURKO0FBQUEsTUFFSUMsMkNBRko7QUFHQSxPQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUosUUFBUUssTUFBNUIsRUFBb0NELEdBQXBDLEVBQXlDO0FBQ3ZDRixhQUFTRixRQUFRSSxDQUFSLENBQVQ7QUFDQSxRQUFJRixPQUFPSSxLQUFYLEVBQWtCO0FBQ2hCSCxrQkFBWSxDQUFaO0FBQ0QsS0FGRCxNQUVPLElBQUlELE9BQU9LLE9BQVgsRUFBb0I7QUFDekJKLGtCQUFZLENBQUMsQ0FBYjtBQUNELEtBRk0sTUFFQTtBQUNMQSxrQkFBWSxDQUFaO0FBQ0Q7O0FBRURGLFFBQUlPLElBQUosQ0FBUyxDQUFDTCxTQUFELEVBQVlELE9BQU9PLEtBQW5CLENBQVQ7QUFDRDtBQUNELFNBQU9SLEdBQVA7QUFDRCIsImZpbGUiOiJkbXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTZWU6IGh0dHA6Ly9jb2RlLmdvb2dsZS5jb20vcC9nb29nbGUtZGlmZi1tYXRjaC1wYXRjaC93aWtpL0FQSVxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRDaGFuZ2VzVG9ETVAoY2hhbmdlcykge1xuICBsZXQgcmV0ID0gW10sXG4gICAgICBjaGFuZ2UsXG4gICAgICBvcGVyYXRpb247XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2hhbmdlcy5sZW5ndGg7IGkrKykge1xuICAgIGNoYW5nZSA9IGNoYW5nZXNbaV07XG4gICAgaWYgKGNoYW5nZS5hZGRlZCkge1xuICAgICAgb3BlcmF0aW9uID0gMTtcbiAgICB9IGVsc2UgaWYgKGNoYW5nZS5yZW1vdmVkKSB7XG4gICAgICBvcGVyYXRpb24gPSAtMTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3BlcmF0aW9uID0gMDtcbiAgICB9XG5cbiAgICByZXQucHVzaChbb3BlcmF0aW9uLCBjaGFuZ2UudmFsdWVdKTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuIl19


/***/ }),
/* 17 */
/***/ (function(module, exports) {

	/*istanbul ignore start*/'use strict';

	exports.__esModule = true;
	exports. /*istanbul ignore end*/convertChangesToXML = convertChangesToXML;
	function convertChangesToXML(changes) {
	  var ret = [];
	  for (var i = 0; i < changes.length; i++) {
	    var change = changes[i];
	    if (change.added) {
	      ret.push('<ins>');
	    } else if (change.removed) {
	      ret.push('<del>');
	    }

	    ret.push(escapeHTML(change.value));

	    if (change.added) {
	      ret.push('</ins>');
	    } else if (change.removed) {
	      ret.push('</del>');
	    }
	  }
	  return ret.join('');
	}

	function escapeHTML(s) {
	  var n = s;
	  n = n.replace(/&/g, '&amp;');
	  n = n.replace(/</g, '&lt;');
	  n = n.replace(/>/g, '&gt;');
	  n = n.replace(/"/g, '&quot;');

	  return n;
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb252ZXJ0L3htbC5qcyJdLCJuYW1lcyI6WyJjb252ZXJ0Q2hhbmdlc1RvWE1MIiwiY2hhbmdlcyIsInJldCIsImkiLCJsZW5ndGgiLCJjaGFuZ2UiLCJhZGRlZCIsInB1c2giLCJyZW1vdmVkIiwiZXNjYXBlSFRNTCIsInZhbHVlIiwiam9pbiIsInMiLCJuIiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6Ijs7O2dDQUFnQkEsbUIsR0FBQUEsbUI7QUFBVCxTQUFTQSxtQkFBVCxDQUE2QkMsT0FBN0IsRUFBc0M7QUFDM0MsTUFBSUMsTUFBTSxFQUFWO0FBQ0EsT0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlGLFFBQVFHLE1BQTVCLEVBQW9DRCxHQUFwQyxFQUF5QztBQUN2QyxRQUFJRSxTQUFTSixRQUFRRSxDQUFSLENBQWI7QUFDQSxRQUFJRSxPQUFPQyxLQUFYLEVBQWtCO0FBQ2hCSixVQUFJSyxJQUFKLENBQVMsT0FBVDtBQUNELEtBRkQsTUFFTyxJQUFJRixPQUFPRyxPQUFYLEVBQW9CO0FBQ3pCTixVQUFJSyxJQUFKLENBQVMsT0FBVDtBQUNEOztBQUVETCxRQUFJSyxJQUFKLENBQVNFLFdBQVdKLE9BQU9LLEtBQWxCLENBQVQ7O0FBRUEsUUFBSUwsT0FBT0MsS0FBWCxFQUFrQjtBQUNoQkosVUFBSUssSUFBSixDQUFTLFFBQVQ7QUFDRCxLQUZELE1BRU8sSUFBSUYsT0FBT0csT0FBWCxFQUFvQjtBQUN6Qk4sVUFBSUssSUFBSixDQUFTLFFBQVQ7QUFDRDtBQUNGO0FBQ0QsU0FBT0wsSUFBSVMsSUFBSixDQUFTLEVBQVQsQ0FBUDtBQUNEOztBQUVELFNBQVNGLFVBQVQsQ0FBb0JHLENBQXBCLEVBQXVCO0FBQ3JCLE1BQUlDLElBQUlELENBQVI7QUFDQUMsTUFBSUEsRUFBRUMsT0FBRixDQUFVLElBQVYsRUFBZ0IsT0FBaEIsQ0FBSjtBQUNBRCxNQUFJQSxFQUFFQyxPQUFGLENBQVUsSUFBVixFQUFnQixNQUFoQixDQUFKO0FBQ0FELE1BQUlBLEVBQUVDLE9BQUYsQ0FBVSxJQUFWLEVBQWdCLE1BQWhCLENBQUo7QUFDQUQsTUFBSUEsRUFBRUMsT0FBRixDQUFVLElBQVYsRUFBZ0IsUUFBaEIsQ0FBSjs7QUFFQSxTQUFPRCxDQUFQO0FBQ0QiLCJmaWxlIjoieG1sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRDaGFuZ2VzVG9YTUwoY2hhbmdlcykge1xuICBsZXQgcmV0ID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2hhbmdlcy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBjaGFuZ2UgPSBjaGFuZ2VzW2ldO1xuICAgIGlmIChjaGFuZ2UuYWRkZWQpIHtcbiAgICAgIHJldC5wdXNoKCc8aW5zPicpO1xuICAgIH0gZWxzZSBpZiAoY2hhbmdlLnJlbW92ZWQpIHtcbiAgICAgIHJldC5wdXNoKCc8ZGVsPicpO1xuICAgIH1cblxuICAgIHJldC5wdXNoKGVzY2FwZUhUTUwoY2hhbmdlLnZhbHVlKSk7XG5cbiAgICBpZiAoY2hhbmdlLmFkZGVkKSB7XG4gICAgICByZXQucHVzaCgnPC9pbnM+Jyk7XG4gICAgfSBlbHNlIGlmIChjaGFuZ2UucmVtb3ZlZCkge1xuICAgICAgcmV0LnB1c2goJzwvZGVsPicpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmV0LmpvaW4oJycpO1xufVxuXG5mdW5jdGlvbiBlc2NhcGVIVE1MKHMpIHtcbiAgbGV0IG4gPSBzO1xuICBuID0gbi5yZXBsYWNlKC8mL2csICcmYW1wOycpO1xuICBuID0gbi5yZXBsYWNlKC88L2csICcmbHQ7Jyk7XG4gIG4gPSBuLnJlcGxhY2UoLz4vZywgJyZndDsnKTtcbiAgbiA9IG4ucmVwbGFjZSgvXCIvZywgJyZxdW90OycpO1xuXG4gIHJldHVybiBuO1xufVxuIl19


/***/ })
/******/ ])
});
;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = {"lines":[{"label":"1","sections":[1,2,3,4,5,6,7],"start":"1","end":"7","precision":0,"color":"#9b0058"},{"label":"1","sections":[1,1.1,1.2],"start":"1","end":"1.2","precision":1,"color":"#bf4f4e"},{"label":"1.1","sections":[1.1,1.11,1.12,1.13],"start":"1.1","end":"1.13","precision":2,"color":"#f6944c"},{"label":"1.2","sections":[1.2,1.21],"start":"1.2","end":"1.21","precision":2,"color":"#f6944c"},{"label":"2.01","sections":[2,2.01,2.02,2.03,2.04,2.05,2.06],"start":"2.01","end":"2.06","precision":2,"color":"#e5b8b7"},{"label":"2","sections":[2,2.1,2.2],"start":"2","end":"2.2","precision":1,"color":"#bf4f4e"},{"label":"2.21","sections":[2.2,2.21,2.22],"start":"2.21","end":"2.22","precision":2,"color":"#f6944c"},{"label":"2.2","sections":[2.2,2.201,2.202,2.203],"start":"2.2","end":"2.203","precision":3,"color":"#fcd4b5"},{"label":"2.22","sections":[2.22,2.221,2.222,2.223,2.224,2.225],"start":"2.22","end":"2.225","precision":3,"color":"#9cb95e"},{"label":"2.1","sections":[2.1,2.11,2.12,2.13,2.14,2.15,2.16,2.17,2.18,2.19],"start":"2.1","end":"2.19","precision":2,"color":"#f6944c"},{"label":"2.06","sections":[2.06,2.061,2.062,2.063],"start":"2.06","end":"2.063","precision":3,"color":"#fcd4b5"},{"label":"2.03","sections":[2.03,2.031,2.032,2.033,2.034],"start":"2.03","end":"2.034","precision":3,"color":"#fcd4b5"},{"label":"3.1","sections":[3.1,3.11,3.12,3.13,3.14],"start":"3.1","end":"3.14","precision":2,"color":"#f6944c"},{"label":"2.02","sections":[2.02,2.021,2.022,2.023,2.024,2.025,2.026,2.027],"start":"2.02","end":"2.027","precision":3,"color":"#fcd4b5"},{"label":"2.01","sections":[2.01,2.011,2.012,2.013,2.014],"start":"2.01","end":"2.014","precision":3,"color":"#fcd4b5"},{"label":"2.021","sections":[2.021,2.0211,2.0212],"start":"2.021","end":"2.0212","precision":4,"color":"#d9e3bd"},{"label":"2.023","sections":[2.023,2.0231,2.0232,2.0233],"start":"2.023","end":"2.0233","precision":4,"color":"#d9e3bd"},{"label":"2.025","sections":[2.025,2.0251],"start":"2.025","end":"2.0251","precision":4,"color":"#d9e3bd"},{"label":"2.027","sections":[2.027,2.0271,2.0272],"start":"2.027","end":"2.0272","precision":4,"color":"#d9e3bd"},{"label":"2.0233","sections":[2.0233,2.02331],"start":"2.0233","end":"2.02331","precision":5,"color":"#b8dede"},{"label":"2.011","sections":[2.011,2.0121,2.0122,2.0123,2.0124],"start":"2.011","end":"2.0124","precision":4,"color":"#d9e3bd"},{"label":"2.013","sections":[2.013,2.0131],"start":"2.013","end":"2.0131","precision":4,"color":"#d9e3bd"},{"label":"2.014","sections":[2.014,2.0141],"start":"2.014","end":"2.0141","precision":4,"color":"#d9e3bd"},{"label":"2.0123","sections":[2.0123,2.01231],"start":"2.0123","end":"2.01231","precision":5,"color":"#b8dede"},{"label":"2.13","sections":[2.13,2.131],"start":"2.13","end":"2.131","precision":3,"color":"#9cb95e"},{"label":"2.14","sections":[2.14,2.141],"start":"2.14","end":"2.141","precision":3,"color":"#9cb95e"},{"label":"2.15","sections":[2.15,2.151],"start":"2.15","end":"2.151","precision":3,"color":"#9cb95e"},{"label":"2.16","sections":[2.16,2.161],"start":"2.16","end":"2.161","precision":3,"color":"#9cb95e"},{"label":"2.17","sections":[2.17,2.171,2.172,2.173,2.174],"start":"2.17","end":"2.174","precision":3,"color":"#9cb95e"},{"label":"2.18","sections":[2.18,2.181,2.182],"start":"2.18","end":"2.182","precision":3,"color":"#9cb95e"},{"label":"2.151","sections":[2.151,2.1511,2.1512,2.1513,2.1514,2.1515],"start":"2.151","end":"2.1515","precision":4,"color":"#4dadc5"},{"label":"2.1512","sections":[2.1512,2.15121],"start":"2.1512","end":"2.15121","precision":5,"color":"#4f83bb"},{"label":"3","sections":[3,3.1,3.2,3.3,3.4,3.5],"start":"3","end":"3.5","precision":1,"color":"#bf4f4e"},{"label":"3.1","sections":[3.1,3.11,3.12,3.13,3.14],"start":"3.1","end":"3.14","precision":2,"color":"#f6944c"},{"label":"3.2","sections":[3.2,3.21,3.22,3.23,3.24,3.25,3.26],"start":"3.2","end":"3.26","precision":2,"color":"#f6944c"},{"label":"3.2","sections":[3.2,3.201,3.202,3.203],"start":"3.2","end":"3.201","precision":3,"color":"#fcd4b5"},{"label":"3.201","sections":[3.2,3.201,3.202,3.203],"start":"3.201","end":"3.203","precision":3,"color":"#fcd4b5"},{"label":"3.3","sections":[3.3,3.31,3.32,3.33,3.34],"start":"3.3","end":"3.34","precision":2,"color":"#f6944c"},{"label":"3.4","sections":[3.4,3.41,3.42],"start":"3.4","end":"3.42","precision":2,"color":"#f6944c"},{"label":"3.4","sections":[3.4,3.41,3.42],"start":"3.4","end":"3.42","precision":2,"color":"#f6944c"},{"label":"3.14","sections":[3.14,3.141,3.142,3.143,3.144],"start":"3.14","end":"3.144","precision":3,"color":"#9cb95e"},{"label":"3.22","sections":[3.22,3.221],"start":"3.22","end":"3.221","precision":3,"color":"#9cb95e"},{"label":"3.25","sections":[3.25,3.251],"start":"3.25","end":"3.251","precision":3,"color":"#9cb95e"},{"label":"3.26","sections":[3.26,3.261,3.262,3.263],"start":"3.26","end":"3.263","precision":3,"color":"#9cb95e"},{"label":"3.31","sections":[3.31,3.311,3.312,3.313,3.314,3.315,3.316,3.317,3.318],"start":"3.31","end":"3.318","precision":3,"color":"#9cb95e"},{"label":"3.32","sections":[3.32,3.321,3.322,3.323,3.324,3.325,3.326,3.327,3.328],"start":"3.32","end":"3.328","precision":3,"color":"#9cb95e"},{"label":"3.33","sections":[3.33,3.331,3.332,3.333,3.334],"start":"3.33","end":"3.334","precision":3,"color":"#9cb95e"},{"label":"3.34","sections":[3.34,3.341,3.342,3.343,3.344],"start":"3.34","end":"3.344","precision":3,"color":"#9cb95e"},{"label":"3.41","sections":[3.41,3.411],"start":"3.41","end":"3.411","precision":3,"color":"#9cb95e"},{"label":"3.143","sections":[3.143,3.1431,3.1432],"start":"3.143","end":"3.1432","precision":4,"color":"#4dadc5"},{"label":"3.341","sections":[3.341,3.3411],"start":"3.341","end":"3.3411","precision":4,"color":"#4dadc5"},{"label":"3.342","sections":[3.342,3.3421],"start":"3.342","end":"3.3421","precision":4,"color":"#4dadc5"},{"label":"3.344","sections":[3.344,3.3441,3.3442],"start":"3.344","end":"3.3442","precision":4,"color":"#4dadc5"},{"label":"3.01","sections":[3,3.01,3.02,3.03,3.04,3.05],"start":"3.01","end":"3.05","precision":2,"color":"#e5b8b7"},{"label":"3.03","sections":[3.03,3.031,3.032],"start":"3.03","end":"3.032","precision":3,"color":"#fcd4b5"},{"label":"3.032","sections":[3.032,3.0321],"start":"3.032","end":"3.0321","precision":4,"color":"#d9e3bd"},{"label":"4","sections":[4,4.1,4.2,4.3,4.4,4.5],"start":"4","end":"4.5","precision":1,"color":"#bf4f4e"},{"label":"4.1","sections":[4.1,4.11,4.12],"start":"4.1","end":"4.12","precision":2,"color":"#f6944c"},{"label":"4.2","sections":[4.2,4.21,4.22,4.23,4.24,4.25,4.26,4.27,4.28],"start":"4.2","end":"4.28","precision":2,"color":"#f6944c"},{"label":"4.3","sections":[4.3,4.31],"start":"4.3","end":"4.31","precision":2,"color":"#f6944c"},{"label":"4.4","sections":[4.4,4.41,4.42,4.43,4.44,4.45,4.46],"start":"4.4","end":"4.46","precision":2,"color":"#f6944c"},{"label":"4.5","sections":[4.5,4.51,4.52,4.53],"start":"4.5","end":"4.53","precision":2,"color":"#f6944c"},{"label":"4.11","sections":[4.11,4.111,4.112,4.113,4.114,4.115,4.116],"start":"4.11","end":"4.116","precision":3,"color":"#9cb95e"},{"label":"4.12","sections":[4.12,4.121,4.122,4.123,4.124,4.125,4.126,4.127,4.128],"start":"4.12","end":"4.128","precision":3,"color":"#9cb95e"},{"label":"4.21","sections":[4.21,4.211],"start":"4.21","end":"4.211","precision":3,"color":"#9cb95e"},{"label":"4.22","sections":[4.22,4.221],"start":"4.22","end":"4.221","precision":3,"color":"#9cb95e"},{"label":"4.24","sections":[4.24,4.241,4.242,4.243],"start":"4.24","end":"4.243","precision":3,"color":"#9cb95e"},{"label":"4.41","sections":[4.41,4.411],"start":"4.41","end":"4.411","precision":3,"color":"#9cb95e"},{"label":"4.43","sections":[4.43,4.431],"start":"4.43","end":"4.431","precision":3,"color":"#9cb95e"},{"label":"4.44","sections":[4.44,4.441,4.442],"start":"4.44","end":"4.442","precision":3,"color":"#9cb95e"},{"label":"4.46","sections":[4.46,4.461,4.462,4.463,4.464,4.465,4.466],"start":"4.46","end":"4.466","precision":3,"color":"#9cb95e"},{"label":"4.112","sections":[4.112,4.1121,4.1122],"start":"4.112","end":"4.1122","precision":4,"color":"#4dadc5"},{"label":"4.121","sections":[4.121,4.1211,4.1212,4.1213],"start":"4.121","end":"4.1213","precision":4,"color":"#4dadc5"},{"label":"4.122","sections":[4.122,4.1221],"start":"4.122","end":"4.1221","precision":4,"color":"#4dadc5"},{"label":"4.124","sections":[4.124,4.1241],"start":"4.124","end":"4.1241","precision":4,"color":"#4dadc5"},{"label":"4.125","sections":[4.125,4.1251,4.1252],"start":"4.125","end":"4.1252","precision":4,"color":"#4dadc5"},{"label":"4.127","sections":[4.127,4.1271,4.1272,4.1273,4.1274],"start":"4.127","end":"4.1274","precision":4,"color":"#4dadc5"},{"label":"4.221","sections":[4.221,4.2211],"start":"4.221","end":"4.2211","precision":4,"color":"#4dadc5"},{"label":"4.461","sections":[4.461,4.4611],"start":"4.461","end":"4.4611","precision":4,"color":"#4dadc5"},{"label":"4.466","sections":[4.466,4.4661],"start":"4.466","end":"4.4661","precision":4,"color":"#4dadc5"},{"label":"4.1272","sections":[4.1272,4.12721],"start":"4.1272","end":"4.12721","precision":5,"color":"#4f83bb"},{"label":"4.01","sections":[4,4.01,4.02,4.03,4.04,4.05,4.06],"start":"4.01","end":"4.06","precision":2,"color":"#e5b8b7"},{"label":"4.06","sections":[4.06,4.061,4.062,4.063,4.064],"start":"4.06","end":"4.064","precision":3,"color":"#fcd4b5"},{"label":"4.04","sections":[4.04,4.041],"start":"4.04","end":"4.041","precision":3,"color":"#fcd4b5"},{"label":"4.03","sections":[4.03,4.031,4.032],"start":"4.03","end":"4.032","precision":3,"color":"#fcd4b5"},{"label":"4.02","sections":[4.02,4.021,4.022,4.023,4.024,4.025,4.026,4.027],"start":"4.02","end":"4.027","precision":3,"color":"#fcd4b5"},{"label":"4.01","sections":[4.01,4.011,4.012,4.013,4.014,4.015,4.016],"start":"4.01","end":"4.016","precision":3,"color":"#fcd4b5"},{"label":"4.062","sections":[4.062,4.0621],"start":"4.062","end":"4.0621","precision":4,"color":"#d9e3bd"},{"label":"4.064","sections":[4.064,4.0641],"start":"4.064","end":"4.0641","precision":4,"color":"#d9e3bd"},{"label":"4.041","sections":[4.041,4.0411,4.0412],"start":"4.041","end":"4.0412","precision":4,"color":"#d9e3bd"},{"label":"4.031","sections":[4.031,4.0311,4.0312],"start":"4.031","end":"4.0312","precision":4,"color":"#d9e3bd"},{"label":"4.014","sections":[4.014,4.0141],"start":"4.014","end":"4.0141","precision":4,"color":"#d9e3bd"},{"label":"4.001","sections":[4,4.001,4.002,4.003],"start":"4.001","end":"4.003","precision":3,"color":"#f2dcda"},{"label":"4.003","sections":[4.003,4.0031],"start":"4.003","end":"4.0031","precision":4,"color":"#fde9da"},{"label":"5","sections":[5,5.1,5.2,5.3,5.4,5.5,5.6],"start":"5","end":"5.6","precision":1,"color":"#bf4f4e"},{"label":"5.11","sections":[5.1,5.11,5.12,5.13,5.14,5.15],"start":"5.11","end":"5.15","precision":2,"color":"#f6944c"},{"label":"5.2","sections":[5.2,5.21,5.22,5.23,5.24,5.25],"start":"5.2","end":"5.25","precision":2,"color":"#f6944c"},{"label":"5.3","sections":[5.3,5.31,5.32],"start":"5.3","end":"5.32","precision":2,"color":"#f6944c"},{"label":"5.4","sections":[5.4,5.41,5.42,5.43,5.44,5.45,5.46,5.47],"start":"5.4","end":"5.47","precision":2,"color":"#f6944c"},{"label":"5.51","sections":[5.5,5.51,5.52,5.53,5.54,5.55],"start":"5.51","end":"5.55","precision":2,"color":"#f6944c"},{"label":"5.6","sections":[5.6,5.61,5.62,5.63,5.64],"start":"5.6","end":"5.64","precision":2,"color":"#f6944c"},{"label":"5.12","sections":[5.12,5.121,5.122,5.123,5.124],"start":"5.12","end":"5.124","precision":3,"color":"#9cb95e"},{"label":"5.13","sections":[5.13,5.131,5.132,5.133,5.134,5.135,5.136],"start":"5.13","end":"5.136","precision":3,"color":"#9cb95e"},{"label":"5.14","sections":[5.14,5.141,5.142,5.143],"start":"5.14","end":"5.143","precision":3,"color":"#9cb95e"},{"label":"5.15","sections":[5.15,5.151,5.152,5.153,5.154,5.155,5.156],"start":"5.15","end":"5.156","precision":3,"color":"#9cb95e"},{"label":"5.23","sections":[5.23,5.231,5.232,5.233,5.234],"start":"5.23","end":"5.234","precision":3,"color":"#9cb95e"},{"label":"5.24","sections":[5.24,5.241,5.242],"start":"5.24","end":"5.242","precision":3,"color":"#9cb95e"},{"label":"5.25","sections":[5.25,5.251,5.252,5.253,5.254],"start":"5.25","end":"5.254","precision":3,"color":"#9cb95e"},{"label":"5.44","sections":[5.44,5.441,5.442],"start":"5.44","end":"5.442","precision":3,"color":"#9cb95e"},{"label":"5.45","sections":[5.45,5.451,5.452,5.453,5.454],"start":"5.45","end":"5.454","precision":3,"color":"#9cb95e"},{"label":"5.46","sections":[5.46,5.461],"start":"5.46","end":"5.461","precision":3,"color":"#9cb95e"},{"label":"5.47","sections":[5.47,5.471,5.472,5.473,5.474,5.475,5.476],"start":"5.47","end":"5.476","precision":3,"color":"#9cb95e"},{"label":"5.51","sections":[5.51,5.511,5.512,5.513,5.514,5.515],"start":"5.51","end":"5.515","precision":3,"color":"#9cb95e"},{"label":"5.52","sections":[5.52,5.521,5.522,5.523,5.524,5.525,5.526],"start":"5.52","end":"5.526","precision":3,"color":"#9cb95e"},{"label":"5.53","sections":[5.53,5.531,5.532,5.533,5.534,5.535],"start":"5.53","end":"5.531","precision":3,"color":"#9cb95e"},{"label":"5.531","sections":[5.53,5.531,5.532,5.533,5.534,5.535],"start":"5.531","end":"5.535","precision":3,"color":"#9cb95e"},{"label":"5.54","sections":[5.54,5.541,5.542],"start":"5.54","end":"5.542","precision":3,"color":"#9cb95e"},{"label":"5.55","sections":[5.55,5.551,5.552,5.553,5.554,5.555,5.556,5.557],"start":"5.55","end":"5.557","precision":3,"color":"#9cb95e"},{"label":"5.62","sections":[5.62,5.621],"start":"5.62","end":"5.621","precision":3,"color":"#9cb95e"},{"label":"5.63","sections":[5.63,5.631,5.632,5.633,5.634],"start":"5.63","end":"5.634","precision":3,"color":"#9cb95e"},{"label":"5.64","sections":[5.64,5.641],"start":"5.64","end":"5.641","precision":3,"color":"#9cb95e"},{"label":"5.124","sections":[5.124,5.1241],"start":"5.124","end":"5.1241","precision":4,"color":"#4dadc5"},{"label":"5.136","sections":[5.136,5.1361,5.1362,5.1363],"start":"5.136","end":"5.1363","precision":4,"color":"#4dadc5"},{"label":"5.151","sections":[5.151,5.1511],"start":"5.151","end":"5.1511","precision":4,"color":"#4dadc5"},{"label":"5.234","sections":[5.234,5.2341],"start":"5.234","end":"5.2341","precision":4,"color":"#4dadc5"},{"label":"5.252","sections":[5.252,5.2521,5.2522,5.2523],"start":"5.252","end":"5.2523","precision":4,"color":"#4dadc5"},{"label":"5.454","sections":[5.454,5.4541],"start":"5.454","end":"5.4541","precision":4,"color":"#4dadc5"},{"label":"5.461","sections":[5.461,5.4611],"start":"5.461","end":"5.4611","precision":4,"color":"#4dadc5"},{"label":"5.471","sections":[5.471,5.4711],"start":"5.471","end":"5.4711","precision":4,"color":"#4dadc5"},{"label":"5.473","sections":[5.473,5.4731,5.4732,5.4733],"start":"5.473","end":"5.4733","precision":4,"color":"#4dadc5"},{"label":"5.515","sections":[5.515,5.5151],"start":"5.515","end":"5.5151","precision":4,"color":"#4dadc5"},{"label":"5.526","sections":[5.526,5.5261,5.5262],"start":"5.526","end":"5.5262","precision":4,"color":"#4dadc5"},{"label":"5.532","sections":[5.532,5.5321],"start":"5.532","end":"5.5321","precision":4,"color":"#4dadc5"},{"label":"5.535","sections":[5.535,5.5351,5.5352],"start":"5.535","end":"5.5352","precision":4,"color":"#4dadc5"},{"label":"5.542","sections":[5.542,5.5421,5.5422,5.5423],"start":"5.542","end":"5.5423","precision":4,"color":"#4dadc5"},{"label":"5.552","sections":[5.552,5.5521],"start":"5.552","end":"5.5521","precision":4,"color":"#4dadc5"},{"label":"5.554","sections":[5.554,5.5541,5.5542],"start":"5.554","end":"5.5542","precision":4,"color":"#4dadc5"},{"label":"5.556","sections":[5.556,5.5561,5.5562,5.5563],"start":"5.556","end":"5.5563","precision":4,"color":"#4dadc5"},{"label":"5.557","sections":[5.557,5.5571],"start":"5.557","end":"5.5571","precision":4,"color":"#4dadc5"},{"label":"5.633","sections":[5.633,5.6331],"start":"5.633","end":"5.6331","precision":4,"color":"#4dadc5"},{"label":"5.4732","sections":[5.4732,5.47321],"start":"5.4732","end":"5.47321","precision":5,"color":"#4f83bb"},{"label":"5.53","sections":[5.53,5.5301,5.5302,5.5303],"start":"5.53","end":"5.5303","precision":4,"color":"#d9e3bd"},{"label":"5.5","sections":[5.5,5.501,5.502,5.503],"start":"5.5","end":"5.503","precision":3,"color":"#fcd4b5"},{"label":"5.1","sections":[5.1,5.101],"start":"5.1","end":"5.101","precision":3,"color":"#fcd4b5"},{"label":"5.01","sections":[5,5.01,5.02],"start":"5.01","end":"5.02","precision":2,"color":"#fcd4b5"},{"label":"6","sections":[6,6.1,6.2,6.3,6.4,6.5],"start":"6","end":"6.5","precision":1,"color":"#bf4f4e"},{"label":"6.1","sections":[6.1,6.11,6.12,6.13],"start":"6.1","end":"6.13","precision":2,"color":"#f6944c"},{"label":"6.2","sections":[6.2,6.21,6.22,6.23,6.24],"start":"6.2","end":"6.24","precision":2,"color":"#f6944c"},{"label":"6.3","sections":[6.3,6.31,6.32,6.33,6.34,6.35,6.36,6.37],"start":"6.3","end":"6.37","precision":2,"color":"#f6944c"},{"label":"6.4","sections":[6.4,6.41,6.42,6.43,6.44,6.45],"start":"6.4","end":"6.45","precision":2,"color":"#f6944c"},{"label":"6.5","sections":[6.5,6.51,6.52,6.53,6.54],"start":"6.5","end":"6.54","precision":2,"color":"#f6944c"},{"label":"6.11","sections":[6.11,6.111,6.112,6.113],"start":"6.11","end":"6.113","precision":3,"color":"#9cb95e"},{"label":"6.121","sections":[6.12,6.121,6.122,6.123,6.124,6.125,6.126,6.127],"start":"6.121","end":"6.127","precision":3,"color":"#9cb95e"},{"label":"6.21","sections":[6.21,6.211],"start":"6.21","end":"6.211","precision":3,"color":"#9cb95e"},{"label":"6.23","sections":[6.23,6.231,6.232,6.233,6.234],"start":"6.23","end":"6.234","precision":3,"color":"#9cb95e"},{"label":"6.24","sections":[6.24,6.241],"start":"6.24","end":"6.241","precision":3,"color":"#9cb95e"},{"label":"6.32","sections":[6.32,6.321],"start":"6.32","end":"6.321","precision":3,"color":"#9cb95e"},{"label":"6.34","sections":[6.34,6.341,6.342,6.343],"start":"6.34","end":"6.343","precision":3,"color":"#9cb95e"},{"label":"6.36","sections":[6.36,6.361,6.362,6.363],"start":"6.36","end":"6.363","precision":3,"color":"#9cb95e"},{"label":"6.37","sections":[6.37,6.371,6.372,6.373,6.374,6.375],"start":"6.37","end":"6.375","precision":3,"color":"#9cb95e"},{"label":"6.42","sections":[6.42,6.421,6.422,6.423],"start":"6.42","end":"6.423","precision":3,"color":"#9cb95e"},{"label":"6.43","sections":[6.43,6.431,6.432],"start":"6.43","end":"6.432","precision":3,"color":"#9cb95e"},{"label":"6.52","sections":[6.52,6.521,6.522],"start":"6.52","end":"6.522","precision":3,"color":"#9cb95e"},{"label":"6.122","sections":[6.122,6.1221,6.1222,6.1223,6.1224],"start":"6.122","end":"6.1224","precision":4,"color":"#4dadc5"},{"label":"6.123","sections":[6.123,6.1231,6.1232,6.1233],"start":"6.123","end":"6.1233","precision":4,"color":"#4dadc5"},{"label":"6.125","sections":[6.125,6.1251],"start":"6.125","end":"6.1251","precision":4,"color":"#4dadc5"},{"label":"6.126","sections":[6.126,6.1261,6.1262,6.1263,6.1264,6.1265],"start":"6.126","end":"6.1265","precision":4,"color":"#4dadc5"},{"label":"6.127","sections":[6.127,6.1271],"start":"6.127","end":"6.1271","precision":4,"color":"#4dadc5"},{"label":"6.231","sections":[6.231,6.2311],"start":"6.231","end":"6.2311","precision":4,"color":"#4dadc5"},{"label":"6.232","sections":[6.232,6.2321,6.2322,6.2323],"start":"6.232","end":"6.2323","precision":4,"color":"#4dadc5"},{"label":"6.233","sections":[6.233,6.2331],"start":"6.233","end":"6.2331","precision":4,"color":"#4dadc5"},{"label":"6.234","sections":[6.234,6.2341],"start":"6.234","end":"6.2341","precision":4,"color":"#4dadc5"},{"label":"6.321","sections":[6.321,6.3211],"start":"6.321","end":"6.3211","precision":4,"color":"#4dadc5"},{"label":"6.343","sections":[6.343,6.3431,6.3432],"start":"6.343","end":"6.3432","precision":4,"color":"#4dadc5"},{"label":"6.361","sections":[6.361,6.3611],"start":"6.361","end":"6.3611","precision":4,"color":"#4dadc5"},{"label":"6.363","sections":[6.363,6.3631],"start":"6.363","end":"6.3631","precision":4,"color":"#4dadc5"},{"label":"6.375","sections":[6.375,6.3751],"start":"6.375","end":"6.3751","precision":4,"color":"#4dadc5"},{"label":"6.431","sections":[6.431,6.4311,6.4312],"start":"6.431","end":"6.4312","precision":4,"color":"#4dadc5"},{"label":"6.432","sections":[6.432,6.4321],"start":"6.432","end":"6.4321","precision":4,"color":"#4dadc5"},{"label":"6.3611","sections":[6.3611,6.36111],"start":"6.3611","end":"6.36111","precision":5,"color":"#4f83bb"},{"label":"6.3631","sections":[6.3631,6.36311],"start":"6.3631","end":"6.36311","precision":5,"color":"#4f83bb"},{"label":"6.12","sections":[6.12,6.1201,6.1202,6.1203],"start":"6.12","end":"6.1203","precision":4,"color":"#d9e3bd"},{"label":"6.01","sections":[6,6.01,6.02,6.03],"start":"6.01","end":"6.03","precision":2,"color":"#e5b8b7"},{"label":"6.03","sections":[6.03,6.031],"start":"6.03","end":"6.031","precision":3,"color":"#fcd4b5"},{"label":"6.02","sections":[6.02,6.022],"start":"6.02","end":"6.022","precision":3,"color":"#fcd4b5"},{"label":"6.001","sections":[6,6.001,6.002],"start":"6.001","end":"6.002","precision":3,"color":"#fde9da"},{"label":"2","sections":[2,2.01,2.02,2.03,2.04,2.05,2.06],"start":"2","end":"2.01","precision":2,"color":"#e5b8b7"},{"label":"2.2","sections":[2.2,2.21,2.22],"start":"2.2","end":"2.21","precision":2,"color":"#f6944c"},{"label":"2.02","sections":[2.02,2.0201],"start":"2.02","end":"2.0201","precision":4,"color":"#fde9da"},{"label":"3","sections":[3,3.001],"start":"3","end":"3.001","precision":3,"color":"#fde9da"},{"label":"3","sections":[3,3.01,3.02,3.03,3.04,3.05],"start":"3","end":"3.01","precision":2,"color":"#e5b8b7"},{"label":"4","sections":[4,4.001,4.002,4.003],"start":"4","end":"4.001","precision":3,"color":"#f2dcda"},{"label":"4","sections":[4,4.01],"start":"4","end":"4.01","precision":2,"color":"#e5b8b7"},{"label":"5","sections":[5,5.01,5.02],"start":"5","end":"5.01","precision":2,"color":"#fcd4b5"},{"label":"5.1","sections":[5.1,5.11,5.12,5.13,5.14,5.15],"start":"5.1","end":"5.11","precision":2,"color":"#f6944c"},{"label":"5.5","sections":[5.5,5.51,5.52,5.53,5.54,5.55],"start":"5.5","end":"5.51","precision":2,"color":"#f6944c"},{"label":"6","sections":[6,6.001,6.002],"start":"6","end":"6.001","precision":3,"color":"#fde9da"},{"label":"6","sections":[6,6.01,6.02,6.03],"start":"6","end":"6.01","precision":2,"color":"#e5b8b7"},{"label":"6.12","sections":[6.12,6.121,6.122,6.123,6.124,6.125,6.126,6.127],"start":"6.12","end":"6.121","precision":3,"color":"#9cb95e"}]}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = {"lines":[{"label":"1","sections":[1,2,3,4,5,6,7],"start":"1","end":"7","precision":0,"color":"#9b0058"},{"label":"2","sections":[2,2.1,2.2],"start":"2","end":"2.2","precision":1,"color":"#bf4f4e"},{"label":"3","sections":[3,3.1,3.2,3.3],"start":"3","end":"3.3","precision":1,"color":"#bf4f4e"},{"label":"4","sections":[4,4.1,4.2,4.3,4.4],"start":"4","end":"4.4","precision":1,"color":"#bf4f4e"},{"label":"5","sections":[5,5.1,5.2,5.3,5.4],"start":"5","end":"5.4","precision":1,"color":"#bf4f4e"},{"label":"6","sections":[6,6.1,6.2,6.3,6.4,6.5],"start":"6","end":"6.5","precision":1,"color":"#bf4f4e"},{"label":"1","sections":[1,1.1,1.2],"start":"1","end":"1.2","precision":1,"color":"#bf4f4e"},{"label":"1.1","sections":[1.1,1.11,1.12,1.13],"start":"1.1","end":"1.13","precision":2,"color":"#f6944c"},{"label":"1.2","sections":[1.2,1.21],"start":"1.2","end":"1.21","precision":2,"color":"#f6944c"},{"label":"2","sections":[2,2.01,2.02,2.03,2.04,2.05,2.06,2.07],"start":"2","end":"2.01","precision":2,"color":"#f2dcda"},{"label":"2.01","sections":[2,2.01,2.02,2.03,2.04,2.05,2.06,2.07],"start":"2.01","end":"2.07","precision":2,"color":"#f2dcda"},{"label":"2.01","sections":[2.01,2.011,2.012,2.013,2.014],"start":"2.01","end":"2.014","precision":3,"color":"#fcd4b5"},{"label":"2.012","sections":[2.012,2.01201,2.01202,2.01203,2.01204],"start":"2.012","end":"2.01204","precision":5,"color":"#ebf0db"},{"label":"2.012","sections":[2.012,2.0121],"start":"2.012","end":"2.0121","precision":4,"color":"#d9e3bd"},{"label":"2.0121","sections":[2.0121,2.0122,2.0123,2.0124,2.0125,2.0126],"start":"2.0121","end":"2.0126","precision":4,"color":"#d9e3bd"},{"label":"2.014","sections":[2.014,2.0141,2.0142],"start":"2.014","end":"2.0142","precision":4,"color":"#d9e3bd"},{"label":"2.0124","sections":[2.0124,2.01241],"start":"2.0124","end":"2.01241","precision":5,"color":"#b8dede"},{"label":"2.0141","sections":[2.0141,2.01411],"start":"2.0141","end":"2.01411","precision":5,"color":"#b8dede"},{"label":"2.02","sections":[2.02,2.021,2.022,2.023,2.024,2.025,2.026,2.027],"start":"2.02","end":"2.0201","precision":3,"color":"#fde9da"},{"label":"2.02","sections":[2.02,2.021],"start":"2.02","end":"2.021","precision":3,"color":"#fcd4b5"},{"label":"2.021","sections":[2.02,2.021,2.022,2.023,2.024,2.025,2.026,2.027],"start":"2.021","end":"2.027","precision":3,"color":"#fcd4b5"},{"label":"2.03","sections":[2.03,2.031,2.032,2.033],"start":"2.03","end":"2.033","precision":3,"color":"#fcd4b5"},{"label":"2.023","sections":[2.023,2.0231,2.0232,2.0233],"start":"2.023","end":"2.0233","precision":4,"color":"#d9e3bd"},{"label":"2.021","sections":[2.021,2.0211,2.0212],"start":"2.021","end":"2.0212","precision":4,"color":"#d9e3bd"},{"label":"2.025","sections":[2.025,2.0251,2.0252],"start":"2.025","end":"2.0252","precision":4,"color":"#d9e3bd"},{"label":"2.027","sections":[2.027,2.0271,2.0272],"start":"2.027","end":"2.0272","precision":4,"color":"#d9e3bd"},{"label":"2.0233","sections":[2.0233,2.02331],"start":"2.0233","end":"2.02331","precision":5,"color":"#b8dede"},{"label":"2.06","sections":[2.06,2.0601],"start":"2.06","end":"2.0601","precision":4,"color":"#fde9da"},{"label":"2.06","sections":[2.06,2.061,2.062],"start":"2.06","end":"2.061","precision":3,"color":"#fcd4b5"},{"label":"2.06","sections":[2.06,2.07],"start":"2.06","end":"2.07","precision":2,"color":"#fcd4b5"},{"label":"2.061","sections":[2.06,2.061,2.062],"start":"2.061","end":"2.062","precision":3,"color":"#fcd4b5"},{"label":"2.1","sections":[2.1,2.11,2.12,2.13,2.14,2.15,2.16,2.17,2.18,2.19],"start":"2.1","end":"2.19","precision":2,"color":"#f6944c"},{"label":"2.2","sections":[2.2,2.21,2.22],"start":"2.2","end":"2.21","precision":2,"color":"#f6944c"},{"label":"2.21","sections":[2.2,2.21,2.22],"start":"2.21","end":"2.22","precision":2,"color":"#f6944c"},{"label":"2.2","sections":[2.2,2.201,2.202,2.203],"start":"2.2","end":"2.203","precision":3,"color":"#fcd4b5"},{"label":"2.22","sections":[2.22,2.221,2.222,2.223,2.224,2.225],"start":"2.22","end":"2.225","precision":3,"color":"#9cb95e"},{"label":"2.13","sections":[2.13,2.131],"start":"2.13","end":"2.131","precision":3,"color":"#9cb95e"},{"label":"2.15","sections":[2.15,2.1512,2.1513,2.1514,2.1515,2.1516],"start":"2.15","end":"2.1516","precision":4,"color":"#9cb95e"},{"label":"2.151","sections":[2.151,2.15101],"start":"2.151","end":"2.15101","precision":5,"color":"#d9e3bd"},{"label":"2.1513","sections":[2.1513,2.15131],"start":"2.1513","end":"2.15131","precision":5,"color":"#4dadc5"},{"label":"2.16","sections":[2.16,2.161],"start":"2.16","end":"2.161","precision":3,"color":"#9cb95e"},{"label":"2.17","sections":[2.17,2.171,2.172,2.173,2.174,2.175],"start":"2.17","end":"2.175","precision":3,"color":"#9cb95e"},{"label":"2.18","sections":[2.18,2.181,2.182],"start":"2.18","end":"2.182","precision":3,"color":"#9cb95e"},{"label":"3","sections":[3,3.001],"start":"3","end":"3.001","precision":3,"color":"#f2dcda"},{"label":"3","sections":[3,3.01,3.02,3.03,3.04,3.05],"start":"3","end":"3.01","precision":2,"color":"#e5b8b7"},{"label":"3.01","sections":[3,3.01,3.02,3.03,3.04,3.05],"start":"3.01","end":"3.05","precision":2,"color":"#e5b8b7"},{"label":"3.03","sections":[3.03,3.031,3.032],"start":"3.03","end":"3.032","precision":3,"color":"#fcd4b5"},{"label":"3.032","sections":[3.032,3.0321],"start":"3.032","end":"3.0321","precision":4,"color":"#d9e3bd"},{"label":"3.1","sections":[3.1,3.11,3.12,3.13,3.14,3.15,3.16],"start":"3.1","end":"3.16","precision":2,"color":"#f6944c"},{"label":"3.11","sections":[3.11,3.111],"start":"3.11","end":"3.111","precision":3,"color":"#9cb95e"},{"label":"3.14","sections":[3.14,3.141],"start":"3.14","end":"3.141","precision":3,"color":"#9cb95e"},{"label":"3.16","sections":[3.16,3.1601,3.1602,3.1603,3.1604],"start":"3.16","end":"3.1604","precision":4,"color":"#d9e3bd"},{"label":"3.1602","sections":[3.1602,3.16021],"start":"3.1602","end":"3.16021","precision":5,"color":"#b8dede"},{"label":"3.16","sections":[3.16,3.161,3.162,3.163,3.164],"start":"3.16","end":"3.161","precision":3,"color":"#9cb95e"},{"label":"3.161","sections":[3.16,3.161,3.162,3.163,3.164],"start":"3.161","end":"3.164","precision":3,"color":"#9cb95e"},{"label":"3.162","sections":[3.162,3.1621,3.1622],"start":"3.162","end":"3.1622","precision":4,"color":"#4dadc5"},{"label":"3.2","sections":[3.2,3.201,3.202],"start":"3.2","end":"3.202","precision":3,"color":"#fcd4b5"},{"label":"3.201","sections":[3.201,3.20101,3.20102,3.20103,3.20104,3.20105,3.20106,3.20107,3.20108],"start":"3.201","end":"3.20108","precision":5,"color":"#d9e3bd"},{"label":"3.201","sections":[3.201,3.2011,3.2012,3.2013,3.2014,3.2015,3.2016,3.2017],"start":"3.201","end":"3.2011","precision":4,"color":"#d9e3bd"},{"label":"3.2011","sections":[3.201,3.2011,3.2012,3.2013,3.2014,3.2015,3.2016,3.2017],"start":"3.2011","end":"3.2017","precision":4,"color":"#d9e3bd"},{"label":"3.2012","sections":[3.2012,3.20121,3.20122],"start":"3.2012","end":"3.20122","precision":5,"color":"#b8dede"},{"label":"3.20122","sections":[3.20122,3.201221],"start":"3.20122","end":"3.201221","precision":6,"color":"#b8cce4"},{"label":"3.2014","sections":[3.2014,3.20141,3.20142],"start":"3.2014","end":"3.20142","precision":5,"color":"#b8dede"},{"label":"3.20141","sections":[3.20141,3.201411,3.201412],"start":"3.20141","end":"3.201412","precision":6,"color":"#b8cce4"},{"label":"3.2015","sections":[3.2015,3.20151,3.20152],"start":"3.2015","end":"3.20152","precision":5,"color":"#b8dede"},{"label":"3.2017","sections":[3.2017,3.20171,3.20172,3.20173],"start":"3.2017","end":"3.20173","precision":5,"color":"#b8dede"},{"label":"3.20173","sections":[3.20173,3.201731],"start":"3.20173","end":"3.201731","precision":6,"color":"#b8cce4"},{"label":"3.202","sections":[3.202,3.2021],"start":"3.202","end":"3.2021","precision":4,"color":"#d9e3bd"},{"label":"3.2021","sections":[3.2021,3.20211,3.20212],"start":"3.2021","end":"3.20212","precision":5,"color":"#b8dede"},{"label":"3.20211","sections":[3.20211,3.202111],"start":"3.20211","end":"3.202111","precision":6,"color":"#b8cce4"},{"label":"3.2","sections":[3.2,3.21,3.22,3.23,3.24,3.25],"start":"3.2","end":"3.21","precision":2,"color":"#f6944c"},{"label":"3.21","sections":[3.2,3.21,3.22,3.23,3.24,3.25],"start":"3.21","end":"3.25","precision":2,"color":"#f6944c"},{"label":"3.21","sections":[3.21,3.2101,3.2102,3.2103,3.2104],"start":"3.21","end":"3.2104","precision":4,"color":"#d9e3bd"},{"label":"3.21","sections":[3.21,3.211,3.212,3.213,3.214],"start":"3.21","end":"3.211","precision":3,"color":"#9cb95e"},{"label":"3.211","sections":[3.21,3.211,3.212,3.213,3.214],"start":"3.211","end":"3.214","precision":3,"color":"#9cb95e"},{"label":"3.24","sections":[3.24,3.241,3.242],"start":"3.24","end":"3.242","precision":3,"color":"#9cb95e"},{"label":"3.25","sections":[3.25,3.251,3.252,3.253],"start":"3.25","end":"3.253","precision":3,"color":"#9cb95e"},{"label":"3.213","sections":[3.213,3.2131],"start":"3.213","end":"3.2131","precision":4,"color":"#4dadc5"},{"label":"3.214","sections":[3.214,3.2141,3.2142],"start":"3.214","end":"3.2142","precision":4,"color":"#4dadc5"},{"label":"3.241","sections":[3.241,3.2411],"start":"3.241","end":"3.2411","precision":4,"color":"#4dadc5"},{"label":"3.242","sections":[3.242,3.2421],"start":"3.242","end":"3.2421","precision":4,"color":"#4dadc5"},{"label":"3.2421","sections":[3.2421,3.24211],"start":"3.2421","end":"3.24211","precision":5,"color":"#4f83bb"},{"label":"3.251","sections":[3.251,3.2511,3.2512,3.2513],"start":"3.251","end":"3.2513","precision":4,"color":"#4dadc5"},{"label":"3.252","sections":[3.252,3.2521,3.2522],"start":"3.252","end":"3.2522","precision":4,"color":"#4dadc5"},{"label":"3.253","sections":[3.253,3.2531],"start":"3.253","end":"3.2531","precision":4,"color":"#4dadc5"},{"label":"4","sections":[4,4.001,4.0011,4.0012,4.0013,4.0014,4.0015,4.0016],"start":"4","end":"4.0011","precision":4,"color":"#f2dcda"},{"label":"4.0014","sections":[4.0014,4.00141],"start":"4.0014","end":"4.00141","precision":5,"color":"#ebf0db"},{"label":"4.0015","sections":[4.0015,4.00151],"start":"4.0015","end":"4.00151","precision":5,"color":"#ebf0db"},{"label":"4.0016","sections":[4.0016,4.00161,4.00162,4.00163],"start":"4.0016","end":"4.00163","precision":5,"color":"#ebf0db"},{"label":"4","sections":[4,4.01,4.02,4.03,4.04,4.05,4.06,4.07,4.08,4.09],"start":"4","end":"4.01","precision":2,"color":"#e5b8b7"},{"label":"4.01","sections":[4,4.01,4.02,4.03,4.04,4.05,4.06,4.07,4.08,4.09],"start":"4.01","end":"4.09","precision":2,"color":"#e5b8b7"},{"label":"4.01","sections":[4.01,4.0101,4.0102,4.0103],"start":"4.01","end":"4.0103","precision":4,"color":"#fde9da"},{"label":"4.01","sections":[4.01,4.011],"start":"4.01","end":"4.011","precision":3,"color":"#fcd4b5"},{"label":"4.011","sections":[4.011,4.0111,4.0112,4.0113,4.0114,4.0115,4.0116],"start":"4.011","end":"4.0116","precision":4,"color":"#d9e3bd"},{"label":"4.0112","sections":[4.0112,4.01121,4.01122],"start":"4.0112","end":"4.01122","precision":5,"color":"#b8dede"},{"label":"4.0114","sections":[4.0114,4.01141],"start":"4.0114","end":"4.01141","precision":5,"color":"#b8dede"},{"label":"4.01141","sections":[4.01141,4.011411],"start":"4.01141","end":"4.011411","precision":6,"color":"#4f83bb"},{"label":"4.02","sections":[4.02,4.021,4.022,4.023,4.024,4.025,4.026],"start":"4.02","end":"4.026","precision":3,"color":"#fcd4b5"},{"label":"4.05","sections":[4.05,4.051],"start":"4.05","end":"4.051","precision":3,"color":"#fcd4b5"},{"label":"4.07","sections":[4.07,4.071,4.072,4.073,4.074],"start":"4.07","end":"4.074","precision":3,"color":"#fcd4b5"},{"label":"4.09","sections":[4.09,4.091,4.092,4.094,4.095],"start":"4.09","end":"4.095","precision":3,"color":"#fcd4b5"},{"label":"4.023","sections":[4.023,4.0231,4.0232],"start":"4.023","end":"4.0232","precision":4,"color":"#d9e3bd"},{"label":"4.0232","sections":[4.0232,4.02321,4.02322],"start":"4.0232","end":"4.02322","precision":5,"color":"#b8dede"},{"label":"4.026","sections":[4.026,4.0261,4.0262],"start":"4.026","end":"4.0262","precision":4,"color":"#d9e3bd"},{"label":"4.071","sections":[4.071,4.0711,4.0712],"start":"4.071","end":"4.0712","precision":4,"color":"#d9e3bd"},{"label":"4.072","sections":[4.072,4.0721],"start":"4.072","end":"4.0721","precision":4,"color":"#d9e3bd"},{"label":"4.072","sections":[4.072,4.0721],"start":"4.072","end":"4.0721","precision":4,"color":"#d9e3bd"},{"label":"4.074","sections":[4.074,4.0741,4.0742,4.0743],"start":"4.074","end":"4.0743","precision":4,"color":"#d9e3bd"},{"label":"4.091","sections":[4.091,4.0911],"start":"4.091","end":"4.0911","precision":4,"color":"#d9e3bd"},{"label":"4.092","sections":[4.092,4.0921,4.0922,4.0923],"start":"4.092","end":"4.0923","precision":4,"color":"#d9e3bd"},{"label":"4.095","sections":[4.095,4.0951,4.0952,4.0953],"start":"4.095","end":"4.0953","precision":4,"color":"#d9e3bd"},{"label":"4.1","sections":[4.1,4.1001],"start":"4.1","end":"4.1001","precision":4,"color":"#fde9da"},{"label":"4.1001","sections":[4.1001,4.10011,4.10012,4.10013,4.10014,4.10015,4.10016,4.10017,4.10018,4.10019],"start":"4.1001","end":"4.10019","precision":5,"color":"#d9e3bd"},{"label":"4.10015","sections":[4.10015,4.100151,4.100152,4.100153,4.100154],"start":"4.10015","end":"4.100154","precision":6,"color":"#eef7f7"},{"label":"4.10016","sections":[4.10016,4.100161],"start":"4.10016","end":"4.100161","precision":6,"color":"#eef7f7"},{"label":"4.10017","sections":[4.10017,4.100171],"start":"4.10017","end":"4.100171","precision":6,"color":"#eef7f7"},{"label":"4.100153","sections":[4.100153,4.1001531],"start":"4.100153","end":"4.1001531","precision":7,"color":"#fde9da"},{"label":"4.1","sections":[4.1,4.101],"start":"4.1","end":"4.101","precision":3,"color":"#fcd4b5"},{"label":"4.101","sections":[4.101,4.102,4.103,4.104],"start":"4.101","end":"4.104","precision":3,"color":"#fcd4b5"},{"label":"4.101","sections":[4.101,4.1011],"start":"4.101","end":"4.1011","precision":4,"color":"#d9e3bd"},{"label":"4.102","sections":[4.102,4.1021,4.1022],"start":"4.102","end":"4.1022","precision":4,"color":"#d9e3bd"},{"label":"4.103","sections":[4.103,4.1031,4.1032],"start":"4.103","end":"4.1032","precision":4,"color":"#d9e3bd"},{"label":"4.1","sections":[4.1,4.11],"start":"4.1","end":"4.11","precision":2,"color":"#f6944c"},{"label":"4.11","sections":[4.11],"start":"4.11","end":"4.11","precision":2,"color":"#9cb95e"},{"label":"4.1022","sections":[4.1022,4.10221,4.10222,4.10223,4.10224,4.10225,4.10226,4.10227],"start":"4.1022","end":"4.10227","precision":5,"color":"#b8dede"},{"label":"4.10221","sections":[4.10221,4.102211,4.102212],"start":"4.10221","end":"4.102212","precision":6,"color":"#b8cce4"},{"label":"4.10223","sections":[4.10223,4.102231,4.102232,4.102233,4.102234],"start":"4.10223","end":"4.102234","precision":6,"color":"#b8cce4"},{"label":"4.10224","sections":[4.10224,4.102241],"start":"4.10224","end":"4.102241","precision":6,"color":"#b8cce4"},{"label":"4.10225","sections":[4.10225,4.1022501],"start":"4.10225","end":"4.1022501","precision":7,"color":"#b8cce4"},{"label":"4.10225","sections":[4.10225],"start":"4.10225","end":"4.10225","precision":5,"color":"#b8cce4"},{"label":"4.10225","sections":[4.10225,4.102251,4.102252,4.102253,4.102254],"start":"4.10225","end":"4.102251","precision":6,"color":"#b8cce4"},{"label":"4.102251","sections":[4.10225,4.102251,4.102252,4.102253,4.102254],"start":"4.102251","end":"4.102254","precision":6,"color":"#b8cce4"},{"label":"4.10226","sections":[4.10226,4.102261,4.102262,4.102263,4.102264,4.102265],"start":"4.10226","end":"4.102265","precision":6,"color":"#b8cce4"},{"label":"4.10227","sections":[4.10227,4.102271,4.102272,4.102273,4.102274],"start":"4.10227","end":"4.102274","precision":6,"color":"#b8cce4"},{"label":"4.102233","sections":[4.102233,4.1022331],"start":"4.102233","end":"4.1022331","precision":7,"color":"#fef1e7"},{"label":"4.102251","sections":[4.102251,4.1022511],"start":"4.102251","end":"4.1022511","precision":7,"color":"#fef1e7"},{"label":"4.102263","sections":[4.102263,4.1022631],"start":"4.102263","end":"4.1022631","precision":7,"color":"#fef1e7"},{"label":"4.102272","sections":[4.102272,4.1022721,4.1022722,4.1022723,4.1022724,4.1022725,4.1022726,4.1022727,4.1022728,4.1022729],"start":"4.102272","end":"4.1022729","precision":7,"color":"#fef1e7"},{"label":"4.1022725","sections":[4.1022725,4.10227251,4.10227252,4.10227253,4.10227254],"start":"4.1022725","end":"4.10227254","precision":8,"color":"#C0C0C0"},{"label":"4.1022728","sections":[4.1022728,4.10227281],"start":"4.1022728","end":"4.10227281","precision":8,"color":"#C0C0C0"},{"label":"4.1022729","sections":[4.1022729,4.10227291],"start":"4.1022729","end":"4.10227291","precision":8,"color":"#C0C0C0"},{"label":"4.2","sections":[4.2,4.21,4.22,4.23,4.24,4.25,4.26],"start":"4.2","end":"4.26","precision":2,"color":"#f6944c"},{"label":"4.22","sections":[4.22,4.221,4.222],"start":"4.22","end":"4.222","precision":3,"color":"#9cb95e"},{"label":"4.23","sections":[4.23,4.231,4.232],"start":"4.23","end":"4.232","precision":3,"color":"#9cb95e"},{"label":"4.221","sections":[4.221,4.2211,4.2212,4.2213,4.2214,4.2215],"start":"4.221","end":"4.2215","precision":4,"color":"#4dadc5"},{"label":"4.2212","sections":[4.2212,4.22121,4.22122],"start":"4.2212","end":"4.22122","precision":5,"color":"#4f83bb"},{"label":"4.2213","sections":[4.2213,4.22131],"start":"4.2213","end":"4.22131","precision":5,"color":"#4f83bb"},{"label":"4.2215","sections":[4.2215,4.22151],"start":"4.2215","end":"4.22151","precision":5,"color":"#4f83bb"},{"label":"4.3","sections":[4.3,4.31],"start":"4.3","end":"4.31","precision":2,"color":"#f6944c"},{"label":"4.4","sections":[4.4,4.4001],"start":"4.4","end":"4.4001","precision":4,"color":"#fde9da"},{"label":"4.4","sections":[4.4,4.401],"start":"4.4","end":"4.401","precision":3,"color":"#fcd4b5"},{"label":"4.401","sections":[4.401,4.4011],"start":"4.401","end":"4.4011","precision":4,"color":"#d9e3bd"},{"label":"4.4","sections":[4.4,4.41],"start":"4.4","end":"4.41","precision":2,"color":"#f6944c"},{"label":"4.41","sections":[4.41,4.42,4.43,4.44],"start":"4.41","end":"4.44","precision":2,"color":"#f6944c"},{"label":"4.42","sections":[4.42,4.421,4.422,4.423],"start":"4.42","end":"4.423","precision":3,"color":"#9cb95e"},{"label":"4.422","sections":[4.422,4.4221],"start":"4.422","end":"4.4221","precision":4,"color":"#4dadc5"},{"label":"4.43","sections":[4.43,4.4301,4.4302,4.4303],"start":"4.43","end":"4.4303","precision":4,"color":"#d9e3bd"},{"label":"4.4301","sections":[4.4301,4.43011,4.43012,4.43013,4.43014],"start":"4.4301","end":"4.43014","precision":5,"color":"#b8dede"},{"label":"4.43014","sections":[4.43014,4.430141],"start":"4.43014","end":"4.430141","precision":6,"color":"#b8cce4"},{"label":"4.43","sections":[4.43,4.431,4.432,4.433],"start":"4.43","end":"4.431","precision":3,"color":"#9cb95e"},{"label":"4.431","sections":[4.43,4.431,4.432,4.433],"start":"4.431","end":"4.433","precision":3,"color":"#9cb95e"},{"label":"4.431","sections":[4.431,4.4311],"start":"4.431","end":"4.4311","precision":4,"color":"#4dadc5"},{"label":"4.432","sections":[4.432,4.4321,4.4322],"start":"4.432","end":"4.4322","precision":4,"color":"#4dadc5"},{"label":"4.433","sections":[4.433,4.4331],"start":"4.433","end":"4.4331","precision":4,"color":"#4dadc5"},{"label":"4.44","sections":[4.44,4.441,4.442,4.443,4.444,4.445,4.446,4.448,4.449],"start":"4.44","end":"4.449","precision":3,"color":"#9cb95e"},{"label":"4.446","sections":[4.446,4.44601,4.44602],"start":"4.446","end":"4.44602","precision":5,"color":"#b8dede"},{"label":"4.446","sections":[4.446,4.4461,4.4462],"start":"4.446","end":"4.4461","precision":4,"color":"#4dadc5"},{"label":"4.4461","sections":[4.446,4.4461,4.4462],"start":"4.4461","end":"4.4462","precision":4,"color":"#4dadc5"},{"label":"4.448","sections":[4.448,4.44801],"start":"4.448","end":"4.44801","precision":5,"color":"#b8dede"},{"label":"4.448","sections":[4.448,4.4481,4.4482,4.4483,4.4484,4.4485,4.4486],"start":"4.448","end":"4.4481","precision":4,"color":"#4dadc5"},{"label":"4.4481","sections":[4.448,4.4481,4.4482,4.4483,4.4484,4.4485,4.4486],"start":"4.4481","end":"4.4486","precision":4,"color":"#4dadc5"},{"label":"4.449","sections":[4.449,4.4491,4.4492],"start":"4.449","end":"4.4492","precision":4,"color":"#4dadc5"},{"label":"4.4486","sections":[4.4486,4.44861],"start":"4.4486","end":"4.44861","precision":5,"color":"#4f83bb"},{"label":"5","sections":[5,5.001],"start":"5","end":"5.001","precision":3,"color":"#fde9da"},{"label":"5.001","sections":[5.001,5.002,5.003,5.004,5.005],"start":"5.001","end":"5.005","precision":3,"color":"#f2dcda"},{"label":"5.001","sections":[5.001,5.0011,5.0012,5.0013,5.0014,5.0015,5.0016,5.0017],"start":"5.001","end":"5.0017","precision":4,"color":"#fde9da"},{"label":"5.002","sections":[5.002,5.0021,5.0022],"start":"5.002","end":"5.0022","precision":4,"color":"#fde9da"},{"label":"5.004","sections":[5.004,5.0041],"start":"5.004","end":"5.0041","precision":4,"color":"#fde9da"},{"label":"5.005","sections":[5.005,5.00501],"start":"5.005","end":"5.00501","precision":5,"color":"#fef1e7"},{"label":"5.005","sections":[5.005,5.0051],"start":"5.005","end":"5.0051","precision":4,"color":"#fde9da"},{"label":"5.0051","sections":[5.0051,5.0052,5.0053,5.0054],"start":"5.0051","end":"5.0054","precision":4,"color":"#fde9da"},{"label":"5.0016","sections":[5.0016,5.00161,5.00162,5.00163],"start":"5.0016","end":"5.00163","precision":5,"color":"#ebf0db"},{"label":"5.0053","sections":[5.0053,5.00531,5.00532,5.00533,5.00534,5.00535],"start":"5.0053","end":"5.00535","precision":5,"color":"#ebf0db"},{"label":"5.041","sections":[5.041,5.04101,5.04102,5.04103,5.04104,5.04105],"start":"5.041","end":"5.04105","precision":5,"color":"#d9e3bd"},{"label":"5.00534","sections":[5.00534,5.005342],"start":"5.00534","end":"5.005342","precision":6,"color":"#eef7f7"},{"label":"5.00535","sections":[5.00535,5.005351],"start":"5.00535","end":"5.005351 ","precision":7,"color":"#eef7f7"},{"label":"5","sections":[5,5,5.01,5.02,5.03,5.04,5.05,5.06,5.07,5.08,5.09],"start":"5","end":"5.01","precision":2,"color":"#e5b8b7"},{"label":"5.01","sections":[5,5,5.01,5.02,5.03,5.04,5.05,5.06,5.07,5.08,5.09],"start":"5.01","end":"5.09","precision":2,"color":"#e5b8b7"},{"label":"5.01","sections":[5.01,5.011,5.012,5.013],"start":"5.01","end":"5.013","precision":3,"color":"#fcd4b5"},{"label":"5.02","sections":[5.02,5.021,5.022,5.023],"start":"5.02","end":"5.023","precision":3,"color":"#fcd4b5"},{"label":"5.04","sections":[5.04,5.041,5.042,5.043,5.044],"start":"5.04","end":"5.044","precision":3,"color":"#fcd4b5"},{"label":"5.08","sections":[5.08,5.081,5.082],"start":"5.08","end":"5.082","precision":3,"color":"#fcd4b5"},{"label":"5.09","sections":[5.09,5.091,5.092,5.093],"start":"5.09","end":"5.093","precision":3,"color":"#fcd4b5"},{"label":"5.041","sections":[5.041,5.0411],"start":"5.041","end":"5.0411","precision":4,"color":"#d9e3bd"},{"label":"5.0411","sections":[5.0411,5.0412,5.0413,5.0414,5.0415],"start":"5.0411","end":"5.0415","precision":4,"color":"#d9e3bd"},{"label":"5.044","sections":[5.044,5.0441,5.0442,5.0443,5.0444],"start":"5.044","end":"5.0444","precision":4,"color":"#d9e3bd"},{"label":"5.04102","sections":[5.04102,5.041021],"start":"5.04102","end":"5.041021","precision":6,"color":"#b8dede"},{"label":"5.04103","sections":[5.04103,5.041031],"start":"5.04103","end":"5.041031","precision":6,"color":"#b8dede"},{"label":"5.0411","sections":[5.0411,5.04111,5.04112,5.04113],"start":"5.0411","end":"5.04113","precision":5,"color":"#b8dede"},{"label":"5.0414","sections":[5.0414,5.04141],"start":"5.0414","end":"5.04141","precision":5,"color":"#b8dede"},{"label":"5.0444","sections":[5.0444,5.04441,5.04442],"start":"5.0444","end":"5.04442","precision":5,"color":"#b8dede"},{"label":"5.093","sections":[5.093,5.0931,5.0932,5.0933,5.0934],"start":"5.093","end":"5.0934","precision":4,"color":"#d9e3bd"},{"label":"5.0931","sections":[5.0931,5.09311],"start":"5.0931","end":"5.09311","precision":5,"color":"#b8dede"},{"label":"5.1","sections":[5.1,5.101],"start":"5.1","end":"5.101","precision":3,"color":"#fcd4b5"},{"label":"5.1","sections":[5.1,5.11,5.12],"start":"5.1","end":"5.11","precision":2,"color":"#f6944c"},{"label":"5.11","sections":[5.1,5.11,5.12],"start":"5.11","end":"5.12","precision":2,"color":"#f6944c"},{"label":"5.2","sections":[5.2,5.21,5.22,5.23],"start":"5.2","end":"5.23","precision":2,"color":"#f6944c"},{"label":"5.22","sections":[5.22,5.2201],"start":"5.22","end":"5.2201","precision":4,"color":"#d9e3bd"},{"label":"5.22","sections":[5.22,5.221,5.222,5.223,5.224],"start":"5.22","end":"5.221","precision":3,"color":"#9cb95e"},{"label":"5.221","sections":[5.22,5.221,5.222,5.223,5.224],"start":"5.221","end":"5.224","precision":3,"color":"#9cb95e"},{"label":"5.23","sections":[5.23,5.231,5.232,5.233,5.234],"start":"5.23","end":"5.234","precision":3,"color":"#9cb95e"},{"label":"5.221","sections":[5.221,5.2211],"start":"5.221","end":"5.2211","precision":4,"color":"#4f83bb"},{"label":"5.233","sections":[5.233,5.2331],"start":"5.233","end":"5.2331","precision":4,"color":"#4f83bb"},{"label":"5.3","sections":[5.3,5.3001,5.3002,5.3003],"start":"5.3","end":"5.3003","precision":4,"color":"#fde9da"},{"label":"5.3","sections":[5.3,5.301],"start":"5.3","end":"5.301","precision":3,"color":"#fcd4b5"},{"label":"5.301","sections":[5.301,5.302,5.303,5.304,5.305,5.306,5.307],"start":"5.301","end":"5.307","precision":3,"color":"#fcd4b5"},{"label":"5.302","sections":[5.302,5.30201,5.30202],"start":"5.302","end":"5.30202","precision":5,"color":"#fde9da"},{"label":"5.302","sections":[5.302,5.3021,5.3022,5.3023,5.3024],"start":"5.302","end":"5.3021","precision":4,"color":"#d9e3bd"},{"label":"5.3021","sections":[5.302,5.3021,5.3022,5.3023,5.3024],"start":"5.3021","end":"5.3024","precision":4,"color":"#d9e3bd"},{"label":"5.303","sections":[5.303,5.3031,5.3032],"start":"5.303","end":"5.3032","precision":4,"color":"#d9e3bd"},{"label":"5.306","sections":[5.306,5.3061,5.3062,5.3063,5.3064],"start":"5.306","end":"5.3064","precision":4,"color":"#d9e3bd"},{"label":"5.307","sections":[5.307,5.3071,5.3072,5.3073],"start":"5.307","end":"5.3073","precision":4,"color":"#d9e3bd"},{"label":"5.3063","sections":[5.3063,5.30631,5.30632,5.30633,5.30634],"start":"5.3063","end":"5.30634","precision":5,"color":"#b8dede"},{"label":"5.3064","sections":[5.3064,5.30641],"start":"5.3064","end":"5.30641","precision":5,"color":"#b8dede"},{"label":"5.3022","sections":[5.3022,5.30221,5.30222,5.30223,5.30224,5.30225],"start":"5.3022","end":"5.30225","precision":5,"color":"#b8dede"},{"label":"5.3023","sections":[5.3023,5.30231],"start":"5.3023","end":"5.30231","precision":5,"color":"#b8dede"},{"label":"5.3","sections":[5.3,5.31,5.32,5.33,5.34],"start":"5.3","end":"5.31","precision":2,"color":"#f6944c"},{"label":"5.31","sections":[5.3,5.31,5.32,5.33,5.34],"start":"5.31","end":"5.34","precision":2,"color":"#f6944c"},{"label":"5.31","sections":[5.31,5.3101,5.3102,5.3103],"start":"5.31","end":"5.3103","precision":4,"color":"#d9e3bd"},{"label":"5.31","sections":[5.31,5.311,5.312,5.313,5.314,5.315],"start":"5.31","end":"5.311","precision":3,"color":"#9cb95e"},{"label":"5.311","sections":[5.31,5.311,5.312,5.313,5.314,5.315],"start":"5.311","end":"5.315","precision":3,"color":"#9cb95e"},{"label":"5.313","sections":[5.313,5.3131,5.3132,5.3133],"start":"5.313","end":"5.3133","precision":4,"color":"#4dadc5"},{"label":"5.32","sections":[5.32,5.3201,5.3202,5.3203,5.3204],"start":"5.32","end":"5.3204","precision":4,"color":"#d9e3bd"},{"label":"5.3204","sections":[5.3204,5.32041],"start":"5.3204","end":"5.32041","precision":5,"color":"#b8dede"},{"label":"5.32","sections":[5.32,5.321,5.322,5.323,5.324,5.325,5.326],"start":"5.32","end":"5.321","precision":3,"color":"#9cb95e"},{"label":"5.321","sections":[5.32,5.321,5.322,5.323,5.324,5.325,5.326],"start":"5.321","end":"5.326","precision":3,"color":"#9cb95e"},{"label":"5.322","sections":[5.322,5.3221],"start":"5.322","end":"5.3221","precision":4,"color":"#4dadc5"},{"label":"5.325","sections":[5.325,5.3251],"start":"5.325","end":"5.3251","precision":4,"color":"#4dadc5"},{"label":"5.33","sections":[5.33,5.3301,5.3302,5.3303,5.3304],"start":"5.33","end":"5.3304","precision":4,"color":"#d9e3bd"},{"label":"5.33","sections":[5.33,5.331,5.332,5.333,5.334,5.335],"start":"5.33","end":"5.331","precision":3,"color":"#9cb95e"},{"label":"5.331","sections":[5.33,5.331,5.332,5.333,5.334,5.335],"start":"5.331","end":"5.335","precision":3,"color":"#9cb95e"},{"label":"5.34","sections":[5.34,5.341,5.342,5.343],"start":"5.34","end":"5.343","precision":3,"color":"#9cb95e"},{"label":"5.332","sections":[5.332,5.3321],"start":"5.332","end":"5.3321","precision":4,"color":"#4dadc5"},{"label":"5.334","sections":[5.334,5.3341,5.3342,5.3343,5.3344],"start":"5.334","end":"5.3344","precision":4,"color":"#4dadc5"},{"label":"5.335","sections":[5.335,5.3351,5.3352,5.3353,5.3354,5.3355],"start":"5.335","end":"5.3355","precision":4,"color":"#4dadc5"},{"label":"5.343","sections":[5.343,5.3431,5.3432],"start":"5.343","end":"5.3432","precision":4,"color":"#4dadc5"},{"label":"5.4","sections":[5.4,5.401,5.402,5.403,5.404,5.405],"start":"5.4","end":"5.405","precision":3,"color":"#fcd4b5"},{"label":"5.401","sections":[5.401,5.4011,5.4012],"start":"5.401","end":"5.4012","precision":4,"color":"#d9e3bd"},{"label":"5.404","sections":[5.404,5.4041,5.4042,5.4043],"start":"5.404","end":"5.4043","precision":4,"color":"#d9e3bd"},{"label":"5.405","sections":[5.405,5.4051],"start":"5.405","end":"5.4051","precision":4,"color":"#d9e3bd"},{"label":"5.4042","sections":[5.4042,5.40421],"start":"5.4042","end":"5.40421","precision":5,"color":"#b8dede"},{"label":"5.4","sections":[5.4,5.41],"start":"5.4","end":"5.41","precision":2,"color":"#f6944c"},{"label":"5.41","sections":[5.41,5.42],"start":"5.41","end":"5.42","precision":2,"color":"#f6944c"},{"label":"5.41","sections":[5.41,5.4101,5.4102,5.4103],"start":"5.41","end":"5.4101","precision":4,"color":"#d9e3bd"},{"label":"5.4101","sections":[5.4101,5.41011],"start":"5.4101","end":"5.41011","precision":5,"color":"#b8dede"},{"label":"5.4101","sections":[5.41,5.4101,5.4102,5.4103],"start":"5.4101","end":"5.4103","precision":4,"color":"#d9e3bd"},{"label":"5.41","sections":[5.41,5.411,5.412,5.413,5.414],"start":"5.41","end":"5.411","precision":3,"color":"#9cb95e"},{"label":"5.411","sections":[5.41,5.411,5.412,5.413,5.414],"start":"5.411","end":"5.414","precision":3,"color":"#9cb95e"},{"label":"5.42","sections":[5.42,5.421,5.422],"start":"5.42","end":"5.422","precision":3,"color":"#9cb95e"},{"label":"5.421","sections":[5.421,5.4211,5.4212,5.4213,5.4214],"start":"5.421","end":"5.4214","precision":4,"color":"#4dadc5"},{"label":"5.422","sections":[5.422,5.4221,5.4222,5.4223],"start":"5.422","end":"5.4223","precision":4,"color":"#4dadc5"},{"label":"5.3341","sections":[5.3341,5.33411,5.33412],"start":"5.3341","end":"5.33412","precision":5,"color":"#4f83bb"},{"label":"5.3353","sections":[5.3353,5.33531,5.33532],"start":"5.3353","end":"5.33532","precision":5,"color":"#4f83bb"},{"label":"5.3354","sections":[5.3354,5.33541,5.33542,5.33543,5.33544,5.33545,5.33546],"start":"5.3354","end":"5.33546","precision":5,"color":"#4f83bb"},{"label":"5.3355","sections":[5.3355,5.33551,5.33552],"start":"5.3355","end":"5.33552","precision":5,"color":"#4f83bb"},{"label":"5.33543","sections":[5.33543,5.335431],"start":"5.33543","end":"5.335431","precision":6,"color":"#fef1e7"},{"label":"6","sections":[6,6.001,6.002,6.003,6.004,6.005],"start":"6","end":"6.001","precision":3,"color":"#f2dcda"},{"label":"6.001","sections":[6,6.001,6.002,6.003,6.004,6.005],"start":"6.001","end":"6.005","precision":3,"color":"#f2dcda"},{"label":"6","sections":[6,6.01,6.02],"start":"6","end":"6.01","precision":2,"color":"#e5b8b7"},{"label":"6.01","sections":[6,6.01,6.02],"start":"6.01","end":"6.02","precision":2,"color":"#e5b8b7"},{"label":"6.01","sections":[6.01,6.011,6.012,6.013],"start":"6.01","end":"6.013","precision":3,"color":"#fcd4b5"},{"label":"6.02","sections":[6.02,6.0201],"start":"6.02","end":"6.0201","precision":4,"color":"#fde9da"},{"label":"6.004","sections":[6.004,6.0041,6.0042,6.0043],"start":"6.004","end":"6.0043","precision":4,"color":"#fde9da"},{"label":"6.005","sections":[6.005,6.0051],"start":"6.005","end":"6.0051","precision":4,"color":"#fde9da"},{"label":"6.1","sections":[6.1,6.1001,6.1002,6.1003,6.1004],"start":"6.1","end":"6.1004","precision":4,"color":"#fde9da"},{"label":"6.1","sections":[6.1,6.101,6.102],"start":"6.1","end":"6.101","precision":3,"color":"#fcd4b5"},{"label":"6.101","sections":[6.101,6.102],"start":"6.101","end":"6.102","precision":3,"color":"#fcd4b5"},{"label":"6.1","sections":[6.1,6.11,6.12,6.13],"start":"6.1","end":"6.11","precision":2,"color":"#f6944c"},{"label":"6.11","sections":[6.1,6.11,6.12,6.13],"start":"6.11","end":"6.13","precision":2,"color":"#f6944c"},{"label":"6.11","sections":[6.11,6.111,6.112,6.113,6.114],"start":"6.11","end":"6.114","precision":3,"color":"#9cb95e"},{"label":"6.12","sections":[6.12,6.121,6.122],"start":"6.12","end":"6.122","precision":3,"color":"#9cb95e"},{"label":"6.13","sections":[6.13,6.131],"start":"6.13","end":"6.131","precision":3,"color":"#9cb95e"},{"label":"6.112","sections":[6.112,6.1121,6.1122],"start":"6.112","end":"6.1122","precision":4,"color":"#4dadc5"},{"label":"6.113","sections":[6.113,6.1131,6.1132,6.1133,6.1134,6.1135,6.1136],"start":"6.113","end":"6.1136","precision":4,"color":"#4dadc5"},{"label":"6.114","sections":[6.114,6.1141,6.1142,6.1143],"start":"6.114","end":"6.1143","precision":4,"color":"#4dadc5"},{"label":"6.121","sections":[6.121,6.1211,6.1212,6.1213,6.1214,6.1215,6.1216],"start":"6.121","end":"6.1216","precision":4,"color":"#4dadc5"},{"label":"6.122","sections":[6.122,6.1221],"start":"6.122","end":"6.1221","precision":4,"color":"#4dadc5"},{"label":"6.1134","sections":[6.1134,6.11341,6.11342,6.11343],"start":"6.1134","end":"6.11343","precision":5,"color":"#4f83bb"},{"label":"6.1135","sections":[6.1135,6.113501],"start":"6.1135","end":"6.113501","precision":6,"color":"#4dadc5"},{"label":"6.1135","sections":[6.1135,6.11351,6.11352],"start":"6.1135","end":"6.11351","precision":5,"color":"#4f83bb"},{"label":"6.11351","sections":[6.1135,6.11351,6.11352],"start":"6.11351","end":"6.11352","precision":5,"color":"#4f83bb"},{"label":"6.1211","sections":[6.1211,6.12111,6.12112],"start":"6.1211","end":"6.12112","precision":5,"color":"#4f83bb"},{"label":"6.2","sections":[6.2,6.21,6.22,6.23,6.24],"start":"6.2","end":"6.24","precision":2,"color":"#f6944c"},{"label":"6.3","sections":[6.3,6.31,6.32,6.33,6.34,6.35,6.36,6.37],"start":"6.3","end":"6.37","precision":2,"color":"#f6944c"},{"label":"6.21","sections":[6.21,6.211,6.212],"start":"6.21","end":"6.212","precision":3,"color":"#9cb95e"},{"label":"6.23","sections":[6.23,6.231,6.232],"start":"6.23","end":"6.232","precision":3,"color":"#9cb95e"},{"label":"6.31","sections":[6.31,6.311],"start":"6.31","end":"6.311","precision":3,"color":"#9cb95e"},{"label":"6.33","sections":[6.33,6.331],"start":"6.33","end":"6.331","precision":3,"color":"#9cb95e"},{"label":"6.34","sections":[6.34,6.341],"start":"6.34","end":"6.341","precision":3,"color":"#9cb95e"},{"label":"6.36","sections":[6.36,6.361,6.362,6.363,6.364,6.365],"start":"6.36","end":"6.365","precision":3,"color":"#9cb95e"},{"label":"6.37","sections":[6.37,6.371,6.372,6.373,6.374,6.375],"start":"6.37","end":"6.375","precision":3,"color":"#9cb95e"},{"label":"6.341","sections":[6.341,6.3411,6.3412],"start":"6.341","end":"6.3412","precision":4,"color":"#4dadc5"},{"label":"6.363","sections":[6.363,6.3631,6.3632],"start":"6.363","end":"6.3632","precision":4,"color":"#4dadc5"},{"label":"6.365","sections":[6.365,6.3651,6.3652],"start":"6.365","end":"6.3652","precision":4,"color":"#4dadc5"},{"label":"6.375","sections":[6.375,6.3751,6.3752],"start":"6.375","end":"6.3752","precision":4,"color":"#4dadc5"},{"label":"6.3632","sections":[6.3632,6.36321,6.36322,6.36323],"start":"6.3632","end":"6.36323","precision":5,"color":"#4f83bb"},{"label":"6.3652","sections":[6.3652,6.36521],"start":"6.3652","end":"6.36521","precision":5,"color":"#4f83bb"},{"label":"6.4","sections":[6.4,6.41,6.42,6.43,6.44],"start":"6.4","end":"6.44","precision":2,"color":"#f6944c"},{"label":"6.5","sections":[6.5,6.51,6.52,6.53,6.54,6.55],"start":"6.5","end":"6.55","precision":2,"color":"#f6944c"},{"label":"6.42","sections":[6.42,6.421,6.422],"start":"6.42","end":"6.422","precision":3,"color":"#9cb95e"},{"label":"6.43","sections":[6.43,6.431,6.432],"start":"6.43","end":"6.432","precision":3,"color":"#9cb95e"},{"label":"6.44","sections":[6.44,6.441,6.442],"start":"6.44","end":"6.442","precision":3,"color":"#9cb95e"},{"label":"6.52","sections":[6.52,6.521],"start":"6.52","end":"6.521","precision":3,"color":"#9cb95e"},{"label":"6.53","sections":[6.53,6.531],"start":"6.53","end":"6.531","precision":3,"color":"#9cb95e"},{"label":"6.422","sections":[6.422,6.4221],"start":"6.422","end":"6.4221","precision":4,"color":"#4dadc5"},{"label":"6.441","sections":[6.441,6.4411,6.4412],"start":"6.441","end":"6.4412","precision":4,"color":"#4dadc5"},{"label":"6.442","sections":[6.442,6.4421,6.4422,6.4423],"start":"6.442","end":"6.4423","precision":4,"color":"#4dadc5"},{"label":"6.521","sections":[6.521,6.5211],"start":"6.521","end":"6.5211","precision":4,"color":"#4dadc5"},{"label":"6.4422","sections":[6.4422,6.44221],"start":"6.4422","end":"6.44221","precision":5,"color":"#4f83bb"},{"label":"6.4423","sections":[6.4423,6.44231,6.44232],"start":"6.4423","end":"6.44232","precision":5,"color":"#4f83bb"}]}

/***/ }),
/* 6 */
/***/ (function(module, exports) {


/***/ }),
/* 7 */
/***/ (function(module, exports) {


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
this is the main entry point for the application
relevant classes are broken out into other files such as Section.ts, PTSection.ts, ISection.ts, util.ts, etc

The code relies on a specific data structure in ptSectionsJson.json, sectionsJson.json, linesJson.json and ptLinesJson.json files

psSectionsJson.json must look like this example...
    {"sections":[ {"label": "1", "precision": 0, "fontSize": "90px", "y_axis": 1, "x_axis": 1, "ger": "Test German", "ogd": "Test OGD", "pmc": "Test PMC"}, ... ]}
ptLinesJson.json must look like this example...
    {"lines" : [{"label": "1", "sections": [1,1.1,1.2], "start": "1", "end": "1.2", "precision": 1, "color": "#bf4f4e"}, ...]}
sectionsJson.json must look like this example...
    {"sections":[{ "label": "2.01", "precision": 2, "fontSize":"40px", "y_axis": 3, "x_axis": 11, "ger": "Test German", "ogd": "Test OGD", "pmc": "Test PMC"}, ... ]}
linesJson.json must look like this example...
    {"lines" : [{"label": "1.1", "sections": [1.1,1.11,1.12,1.13], "start": "1.1", "end": "1.13", "precision": 2, "color": "#f6944c"}, ... ]}
*/
Object.defineProperty(exports, "__esModule", { value: true });
var JsDiff = __webpack_require__(3);
var _ = __webpack_require__(0);
var reference_1 = __webpack_require__(12);
//break out separate classes for clarity
var util_1 = __webpack_require__(2);
var Section_1 = __webpack_require__(1);
var Line_1 = __webpack_require__(9);
var sectionsJson = __webpack_require__(7);
var ptSectionsJson = __webpack_require__(6);
var linesJson = __webpack_require__(4);
var ptLinesJson = __webpack_require__(5);
var tractatus;
(function (tractatus) {
    var Container = /** @class */ (function () {
        function Container() {
            //version = ger, pmc, ogd
            this._version = 'ger';
            this._gap = 50;
            this._width = $("#map").width(); //doesn't work yet
            this._height = $(window).height();
            this._divCounter = 0;
            this._startPage = 0;
            this._endPage = 0;
            //template = either pt or tlp.  introduced to avoid the need for maintaining separate code bases for each
            this._template = 'tlp';
            this.diffWords = function (result, sectionText) {
                return JsDiff.diffWords(result, sectionText);
            };
        }
        Object.defineProperty(Container.prototype, "version", {
            get: function () {
                if (localStorage.getItem('version') != null) {
                    return localStorage.getItem('version');
                }
                return this._version;
            },
            set: function (version) {
                this._version = version;
                localStorage.setItem("version", version);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Container.prototype, "gap", {
            get: function () {
                return this._gap;
            },
            set: function (gap) {
                this._gap = gap;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Container.prototype, "width", {
            get: function () {
                return this._width;
            },
            set: function (width) {
                this._width = width;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Container.prototype, "height", {
            get: function () {
                return this._height;
            },
            set: function (height) {
                this._height = height;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Container.prototype, "divCounter", {
            get: function () {
                return this._divCounter;
            },
            set: function (divCounter) {
                this._divCounter = divCounter;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Container.prototype, "startPage", {
            get: function () {
                if (localStorage.getItem('startPage') != null) {
                    return parseInt(localStorage.getItem('startPage'));
                }
                return this._startPage;
            },
            set: function (startPage) {
                this._startPage = startPage;
                localStorage.setItem("startPage", startPage.toString());
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Container.prototype, "endPage", {
            get: function () {
                if (localStorage.getItem('endPage') != null) {
                    return parseInt(localStorage.getItem('endPage'));
                }
                return this._endPage;
            },
            set: function (endPage) {
                this._endPage = endPage;
                localStorage.setItem("endPage", endPage.toString());
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Container.prototype, "template", {
            get: function () {
                if (localStorage.getItem('template') != null) {
                    return localStorage.getItem('template');
                }
                return this._template;
            },
            set: function (template) {
                this._template = template;
                localStorage.setItem('template', template);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Container.prototype, "sectionList", {
            get: function () {
                return this._sectionList;
            },
            set: function (sectionList) {
                this._sectionList = sectionList;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Container.prototype, "lineList", {
            get: function () {
                return this._lineList;
            },
            set: function (lineList) {
                this._lineList = lineList;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Container.prototype, "pageFilteredPTList", {
            get: function () {
                return this._pageFilteredPTList;
            },
            set: function (value) {
                this._pageFilteredPTList = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Container.prototype, "util", {
            get: function () {
                return this._util;
            },
            set: function (value) {
                this._util = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Container.prototype, "ref", {
            get: function () {
                return this._ref;
            },
            set: function (value) {
                this._ref = value;
            },
            enumerable: true,
            configurable: true
        });
        Container.prototype.setupAccordionSidePanel = function () {
            var container = this;
            var version = container.version;
            $(".accordion-column").hide();
            //hide the page selector unless PT is selected
            $("#page-select-form").hide();
            $("#accordion").collapse().sortable();
            $('#version-selector-all').val(version);
            $("#reset-btn").on('click', function () {
                window.location.reload();
            });
            //choose which template to use (PT or TLP)
            $("#pt-btn").on('click', function () {
                if ($(this).val() == "Load Tractatus") {
                    localStorage.setItem('template', 'tlp');
                    container.template == "tlp";
                }
                else {
                    localStorage.setItem('template', 'pt');
                    container.template == "pt";
                }
                window.location.reload();
            });
            //show the page selector if PT is selected
            if (container.template == "pt") {
                localStorage.setItem('version', "ger");
                $("#pt-btn").html("Load Tractatus").val("Load Tractatus");
                $("option[value='ogd']").remove();
                $("#page-select-form").show();
            }
            else {
                $("#pt-btn").html("Load Prototractatus").val("Load Prototractatus");
            }
            /*
             Leaving for now.  May want something like this in the future.
            $(document).on('click', '#scroll-to-top', function () {
                window.scrollTo(0, 0);
            })*/
            //close panels.  if it's the last one, hide the panel column
            $(".panel-group").on('click', '.close-panel', function () {
                $('.panel-group').find($(this).parents('.panel-default:first')).remove();
                $.when($(this).parents('.panel-default:first').remove()).then(function () {
                    if ($(".panel-default").length <= 0) {
                        $(".accordion-column").hide();
                    }
                });
            });
            $("#collapse-all-btn").on('click', function () {
                $(".panel-collapse").collapse('hide');
            });
            $("#expand-all-btn").on('click', function () {
                $(".panel-collapse").collapse('show');
            });
            $("#close-all-btn").on('click', function () {
                $(".panel-default").remove();
                $(".accordion-column").hide();
            });
            /*Note: An overall version selector becomes available when clicking a line which displays multiple panels (one for each section in the line)
                  If an individual circle/Section is clicked, a panel will display and will have it's own version selector.  This is so that you can
                  compare text for the same section.*/
            //change versions in the overall version selector (not the individual panel version selectors)
            $(".accordion-column").on('change', "#version-selector-all", function () {
                var selector = $(this);
                var version = $("option:selected", selector).attr('value');
                var u = container.util;
                $('.panel-body').each(function () {
                    var panelBody = $(this);
                    var sectionNum = panelBody.attr("value");
                    if ($(".version-selector", panelBody).length <= 0) {
                        var parentDivId = panelBody.parents('div:first').attr('id');
                        var text = panelBody.attr(version);
                        $(".text-display-li", panelBody).html(text);
                        $("li", panelBody).remove();
                        panelBody.append($('<li class="text-display-li">' + text + '</li>')).load(text, function () {
                            MathJax.Hub.Queue(["Typeset", MathJax.Hub, parentDivId]);
                        });
                        //check if page is pt
                        if (container.template == 'pt') {
                            var parent = panelBody.parents(".panel-collapse:first");
                            $(".pnum", parent).remove();
                            $(".diff", parent).remove();
                            var returnVal = u.findDiff(sectionNum, version);
                            parent.append('<div class="pnum">text difference when compared to TLP ' + u.ptToTlp(sectionNum) + '</div>');
                            parent.append(returnVal);
                        }
                    }
                });
                localStorage.setItem('version', version);
            });
            //change versions in the individual panel version selectors (not the overall panel version selector)
            $('.accordion-column').on('change', ".version-selector", function () {
                var $this = $(this);
                var panelBody = $this.parents('.panel-body');
                var sectionNum = panelBody.attr("value");
                var parentDivId = panelBody.parents('div:first').attr('id');
                var v = $("option:selected", $this).attr('value');
                var text = panelBody.attr(v);
                var u = container.util;
                $this.closest($(".text-display-li")).html(text);
                $("li", panelBody).remove();
                panelBody.append($('<li class="text-display-li">' + text + '</li>')).load(text, function () {
                    MathJax.Hub.Queue(["Typeset", MathJax.Hub, parentDivId]);
                });
                //check if page is pt
                if (container.template == 'pt') {
                    var parent = panelBody.parents(".panel-collapse:first");
                    $(".pnum", parent).remove();
                    $(".diff", parent).remove();
                    var returnVal = u.findDiff(sectionNum, v);
                    parent.append('<div class="pnum">text difference when compared to TLP ' + u.ptToTlp(sectionNum) + '</div>');
                    parent.append(returnVal);
                }
                localStorage.setItem('version', v);
            });
        };
        //filter sections based on pages entered (PT only)
        Container.prototype.setupPTPaging = function () {
            var container = this;
            $('#start-page').val(container.startPage);
            $('#end-page').val(container.endPage);
            var sectionList = container.sectionList;
            var pageFilteredPTList = [];
            // when the page form submit button is clicked, set the start and end page values based on text box values
            $('#page-submit').click(function () {
                container.startPage = parseInt($('#start-page').val().toString());
                container.endPage = parseInt($('#end-page').val().toString());
            });
            // add all object in the sectionList that fall between start and end page numbers.
            _.forEach(sectionList.sections, function (value, key) {
                if (value.page >= container.startPage && value.page <= container.endPage) {
                    pageFilteredPTList.push(parseFloat(value.label));
                }
                ;
            });
            container.pageFilteredPTList = pageFilteredPTList;
        };
        Container.prototype.setupD3 = function () {
            var container = this;
            var gap = container.gap;
            var width = $("#map").width();
            var height = container.height;
            var sectionAr = [];
            var lineAr = [];
            var sectionList = container.sectionList;
            var lineList = container.lineList;
            $.each(sectionList.sections, function () {
                var $this = $(this);
                var o = $(this)[0];
                var section = new Section_1.Section(o.label, o.fontSize, o.precision, o.x_axis, o.y_axis, o.ger, o.ogd, o.pmc);
                sectionAr.push(section);
            });
            $.each(lineList.lines, function () {
                var l = $(this)[0];
                var i = 0;
                var sections = l.sections;
                $.each(sections, function () {
                    if ((i + 1) != sections.length) {
                        var o = sections[i];
                        var o1 = sections[i + 1];
                        var line = new Line_1.Line(o, l.sections, o, o1, l.precision, l.color);
                        lineAr.push(line);
                        i++;
                    }
                });
            });
            var svg = d3.select("#map").append("svg")
                .attr("width", width)
                .attr("height", height)
                .attr("id", "tractatus-map");
            /* Define the data for the circles */
            var elem = svg.selectAll("g")
                .data(sectionAr);
            /* Define the data for the lines */
            var elemLine = svg.selectAll("g")
                .data(lineAr);
            var elemLineEnter = elemLine.enter()
                .append("g");
            /*Create and place the "blocks" containing the circle and the text */
            var elemEnter = elem.enter()
                .append("g");
            var line = elemLineEnter.append("line")
                .attr("x1", function (d) {
                var point = d.findPoints(container);
                return point.x1 * gap;
            }) //x_axis of 1st section + radius/2 ?
                .attr("y1", function (d) {
                var point = d.findPoints(container);
                return point.y1 * gap;
            }) //y_axis of 1st section
                .attr("x2", function (d) {
                var point = d.findPoints(container);
                return point.x2 * gap;
            }) //x_axis of 2nd section
                .attr("y2", function (d) {
                var point = d.findPoints(container);
                return point.y2 * gap;
            }) //y_axis of 2nd section
                .attr("stroke-width", 20) //double radius?
                .attr("stroke", function (d) {
                if (container.template == "pt") {
                    return d.checkLineColor(container.pageFilteredPTList, d.start, d.end, d.color);
                }
                return d.color;
            })
                .style("cursor", "pointer")
                .on("click", function (d) {
                d.buildGroup(container);
                //animate the border of the panels to show that something happened when you click on a section or line.  if appended to the bottom, it's
                //difficult to tell that anything happened when you click on a line/section
                $("#accordion").css({ border: '0 solid #86d0f3' }).animate({ borderWidth: 2 }, 500).animate({ borderWidth: 0 }, 500);
            });
            /*Create the circle for each block */
            var circle = elemEnter.append("circle")
                .attr("cx", function (d) {
                return d.x_axis * gap;
            })
                .attr("cy", function (d) {
                return d.y_axis * gap;
            })
                .attr("r", 15)
                .attr("stroke", function (d) {
                if (container.template == "pt") {
                    return d.checkCircleColor(container._pageFilteredPTList, d.label, 'black');
                }
                return "black";
            })
                .attr("fill", "white")
                .attr("stroke-width", 4)
                .style("cursor", "pointer")
                .on("click", function (d) {
                container.divCounter = d.displayText(true, container.version, container.divCounter, container.template, container.util);
                $("#accordion").css({ border: '0 solid #86d0f3' }).animate({ borderWidth: 2 }, 500).animate({ borderWidth: 0 }, 500);
            });
            /* Create the text for each block */
            elemEnter.append("text")
                .attr("dx", function (d) {
                return d.x_axis * gap + 15;
            })
                .attr("dy", function (d) {
                return d.y_axis * gap - 15;
            })
                .attr("font-size", function (d) {
                return d.fontSize;
            })
                .text(function (d) {
                return d.label;
            });
        };
        return Container;
    }());
    tractatus.Container = Container;
})(tractatus = exports.tractatus || (exports.tractatus = {}));
//initialize everything
var container = new tractatus.Container();
container.ref = new reference_1.Reference.Ref();
var util = new util_1.Utility.Utils();
util.container = container;
util.setup();
container.util = util;
container.sectionList = container.template == "pt" ? ptSectionsJson : sectionsJson;
container.lineList = container.template == "pt" ? ptLinesJson : linesJson;
container.setupAccordionSidePanel();
container.setupPTPaging();
container.setupD3();


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = __webpack_require__(11);
var Section_1 = __webpack_require__(1);
var _ = __webpack_require__(0);
var Line /*implements ILine*/ = /** @class */ (function () {
    function Line(label, sections, start, end, precision, color) {
        this._label = label;
        this._sections = sections;
        this._start = start;
        this._end = end;
        this._precision = precision;
        this._color = color;
    }
    Object.defineProperty(Line.prototype, "label", {
        get: function () {
            return this._label;
        },
        set: function (value) {
            this._label = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Line.prototype, "sections", {
        get: function () {
            return this._sections;
        },
        set: function (value) {
            this._sections = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Line.prototype, "start", {
        get: function () {
            return this._start;
        },
        set: function (value) {
            this._start = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Line.prototype, "end", {
        get: function () {
            return this._end;
        },
        set: function (value) {
            this._end = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Line.prototype, "precision", {
        get: function () {
            return this._precision;
        },
        set: function (value) {
            this._precision = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Line.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Line.prototype, "sectionList", {
        get: function () {
            return this._sectionList;
        },
        set: function (value) {
            this._sectionList = value;
        },
        enumerable: true,
        configurable: true
    });
    Line.prototype.findPoints = function (container) {
        var start = this._start, end = this._end, startPoint = _.filter(container.sectionList.sections, { "label": start.toString() }), endPoint = _.filter(container.sectionList.sections, { "label": end.toString() });
        var point = new point_1.Point(startPoint[0].x_axis, endPoint[0].x_axis, startPoint[0].y_axis, endPoint[0].y_axis, this._color);
        return point;
    };
    Line.prototype.buildGroup = function (container) {
        var sectionList = container.sectionList;
        var sectionAr = [];
        var sections = this.sections;
        var line = this;
        var color = this.checkLineColor(container.pageFilteredPTList, line.start, line.end, line.color);
        $.each(sectionList.sections, function () {
            var o = $(this)[0];
            if (container.template == 'tlp' || color == '#E8E8EE' || (o.page >= container.startPage && o.page <= container.endPage) || o.stroke == '#E8E8EE') {
                var section = new Section_1.Section(o.label, o.fontSize, o.precision, o.x_axis, o.y_axis, o.ger, o.ogd, o.pmc);
                sectionAr.push(section);
            }
        });
        //loop through list of line section array, as well as all sections and if the labels match, display the text
        for (var j = 0; j < sections.length; j++) {
            for (var k = 0; k < sectionAr.length; k++) {
                if (sections[j].toString() == sectionAr[k].label) {
                    container.divCounter = sectionAr[k].displayText(false, container.version, container.divCounter, container.template, container.util);
                }
            }
        }
    };
    // if the line is in the current start and end range, use its original color. If not, make it grey
    Line.prototype.checkLineColor = function (sections, startValue, endValue, color) {
        var startVal = startValue;
        var endVal = endValue;
        var resultStart = _.includes(sections, parseFloat(startVal));
        var resultEnd = _.includes(sections, parseFloat(endVal));
        var finalColor;
        if (resultStart == true && resultEnd === true) {
            finalColor = color;
        }
        else {
            finalColor = '#E8E8EE';
        }
        return finalColor;
    };
    return Line;
}());
exports.Line = Line;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PTSection = /** @class */ (function () {
    function PTSection(label, page, tlp, pmc, ger) {
        this.label = label;
        this.page = page;
        this.tlp = tlp;
        this.pmc = pmc;
        this.ger = ger;
    }
    return PTSection;
}());
exports.PTSection = PTSection;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Point = /** @class */ (function () {
    function Point(x1, x2, y1, y2, color) {
        this._x1 = x1;
        this._x2 = x2;
        this._y1 = y1;
        this._y2 = y2;
        this._color = color;
    }
    Object.defineProperty(Point.prototype, "x1", {
        get: function () {
            return this._x1;
        },
        set: function (value) {
            this._x1 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "x2", {
        get: function () {
            return this._x2;
        },
        set: function (value) {
            this._x2 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y1", {
        get: function () {
            return this._y1;
        },
        set: function (value) {
            this._y1 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y2", {
        get: function () {
            return this._y2;
        },
        set: function (value) {
            this._y2 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
exports.Point = Point;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var sectionsJson = __webpack_require__(7);
var ptSectionsJson = __webpack_require__(6);
var linesJson = __webpack_require__(4);
var ptLinesJson = __webpack_require__(5);
//todo - add more references here that are imported on each page
var Reference;
(function (Reference) {
    var Ref = /** @class */ (function () {
        function Ref() {
            this._sectionsJson = sectionsJson;
            this._ptSectionsJson = ptSectionsJson;
            this._linesJson = linesJson;
            this._ptLinesJson = ptLinesJson;
        }
        Object.defineProperty(Ref.prototype, "sectionsJson", {
            get: function () {
                return this._sectionsJson;
            },
            set: function (value) {
                this._sectionsJson = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Ref.prototype, "ptSectionsJson", {
            get: function () {
                return this._ptSectionsJson;
            },
            set: function (value) {
                this._ptSectionsJson = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Ref.prototype, "linesJson", {
            get: function () {
                return this._linesJson;
            },
            set: function (value) {
                this._linesJson = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Ref.prototype, "ptLinesJson", {
            get: function () {
                return this._ptLinesJson;
            },
            set: function (value) {
                this._ptLinesJson = value;
            },
            enumerable: true,
            configurable: true
        });
        return Ref;
    }());
    Reference.Ref = Ref;
})(Reference = exports.Reference || (exports.Reference = {}));


/***/ }),
/* 13 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(8);


/***/ })
/******/ ]);