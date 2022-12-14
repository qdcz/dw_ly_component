/* snxun.com */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
    typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.VI = {}, global.Vue));
})(this, (function (exports, vue) { 'use strict';

    var Plugins = [];

    const withInstall = (comp, extra) => {
      comp.install = function(app) {
        if (comp) {
          const name = comp.name || comp.__name;
          if (name || extra) {
            const componentName = !extra ? "vi-" + name.replace(/vi/gi, "").toLowerCase() : `vi-${extra}`;
            app.component(componentName, comp);
          } else {
            console.error(comp, extra, !extra);
          }
        }
      };
      return comp;
    };

    const buttonStyleProps = {
      size: {
        w: 120,
        h: 40
      },
      padding: {
        t: 8,
        r: 8,
        b: 8,
        l: 8
      },
      bg: {
        normal: {
          color: "#fff",
          img: ""
        },
        hover: {
          color: "#b4c5d8",
          img: "./bg.png"
        },
        active: {
          color: "#2c60cc",
          img: "./bg.png"
        }
      },
      icon: {
        w: 28,
        h: 28,
        space: 10,
        normal: "url(./Super-Mario-1.png)",
        hover: "url(./Super-Mario-1.png)",
        active: "url(./Super-Mario.png)"
      },
      radius: {
        tl: 5,
        tr: 5,
        br: 5,
        bl: 5
      },
      border: {
        normal: {
          size: 1,
          color: "#f1eaea"
        },
        hover: {
          size: 1,
          color: "#f1eaea"
        },
        active: {
          size: 1,
          color: "#cdcdcd"
        }
      },
      font: {
        align: "center",
        normal: {
          size: 20,
          family: "Microsoft Yahei",
          weight: "bolder",
          color: "#000",
          x: 2,
          y: 2,
          blur: 3,
          shadowColor: "rgb(255 255 255 / 50%)"
        },
        hover: {
          size: 20,
          family: "Microsoft Yahei",
          weight: "bolder",
          color: "#000",
          x: 2,
          y: 2,
          blur: 3,
          shadowColor: "rgb(255 255 255 / 50%)"
        },
        active: {
          size: 20,
          family: "Microsoft Yahei",
          weight: "bolder",
          color: "#fff",
          x: 2,
          y: 2,
          blur: 3,
          shadowColor: "rgb(255 255 255 / 50%)"
        }
      }
    };
    const buttonProps = {
      size: {
        type: String,
        default: "auto"
      },
      showText: {
        type: Boolean,
        default: true
      },
      modelValue: {
        type: Object,
        default: () => ({
          text: "\u9ED8\u8BA4\u6309\u94AE",
          active: false
        })
      },
      showIcon: {
        type: Boolean,
        default: true
      },
      ripple: {
        type: Object,
        default: () => ({
          color: "#00afef",
          opacity: "0.5",
          disabled: true
        })
      },
      styleProps: {
        type: Object,
        default: () => buttonStyleProps
      }
    };

    const isArray = (val) => Array.isArray(val);

    function createNamespace(name) {
      const namespace = `vi-${name}`;
      const createBEM = (suffix) => {
        if (!suffix)
          return namespace;
        return suffix.startsWith("-") ? `${namespace}${suffix}` : `${namespace}_${suffix}`;
      };
      const classes = (...classes2) => {
        return classes2.map((className) => {
          if (isArray(className)) {
            const [condition, truthy, falsy = null] = className;
            return condition ? truthy : falsy;
          }
          return className;
        });
      };
      return {
        n: createBEM,
        classes
      };
    }

    const getPosition = function(t) {
      const e = this.getBoundingClientRect(), n = Math.max(e.width, e.height);
      return {
        range: n,
        x: t.clientX - e.left - n / 2,
        y: t.clientY - e.top - n / 2
      };
    };
    const Ripple = {
      mounted(el, binding) {
        var _a;
        el._ripple = {
          ...(_a = binding.value) != null ? _a : {}
        };
        el.addEventListener(
          "click",
          function(n) {
            var _a2, _b;
            const _ripple = el._ripple;
            if (_ripple.disabled) {
              return;
            }
            n.stopPropagation();
            const i = getPosition.call(this, n), o = document.createElement("span");
            o.className = "ripple", o.style.top = i.y + "px", o.style.left = i.x + "px", o.style.zIndex = 1 + "px", o.style.width = i.range + "px", o.style.height = i.range + "px", o.style.animationDuration = "1.2s", o.style.background = (_a2 = _ripple.color) != null ? _a2 : "#00afef", o.style.opacity = (_b = _ripple.opacity) != null ? _b : ".1", o.addEventListener(
              "animationend",
              function() {
                const dom = this.parentNode;
                dom.removeChild(this);
              },
              false
            ), this.appendChild(o);
          },
          { passive: true }
        );
      },
      updated(el, binding) {
        var _a;
        el._ripple = {
          ...el._ripple,
          ...(_a = binding.value) != null ? _a : {},
          tasker: null
        };
      },
      install(app) {
        app.directive("ripple", this);
      }
    };

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    var lodash = {exports: {}};

    /**
     * @license
     * Lodash <https://lodash.com/>
     * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
     * Released under MIT license <https://lodash.com/license>
     * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
     * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     */
    (function(module, exports) {
      (function() {
        var undefined$1;
        var VERSION = "4.17.21";
        var LARGE_ARRAY_SIZE = 200;
        var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
        var HASH_UNDEFINED = "__lodash_hash_undefined__";
        var MAX_MEMOIZE_SIZE = 500;
        var PLACEHOLDER = "__lodash_placeholder__";
        var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
        var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
        var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
        var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
        var HOT_COUNT = 800, HOT_SPAN = 16;
        var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
        var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 17976931348623157e292, NAN = 0 / 0;
        var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
        var wrapFlags = [
          ["ary", WRAP_ARY_FLAG],
          ["bind", WRAP_BIND_FLAG],
          ["bindKey", WRAP_BIND_KEY_FLAG],
          ["curry", WRAP_CURRY_FLAG],
          ["curryRight", WRAP_CURRY_RIGHT_FLAG],
          ["flip", WRAP_FLIP_FLAG],
          ["partial", WRAP_PARTIAL_FLAG],
          ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
          ["rearg", WRAP_REARG_FLAG]
        ];
        var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]";
        var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
        var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
        var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
        var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
        var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
        var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
        var reTrimStart = /^\s+/;
        var reWhitespace = /\s/;
        var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
        var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
        var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
        var reEscapeChar = /\\(\\)?/g;
        var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
        var reFlags = /\w*$/;
        var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
        var reIsBinary = /^0b[01]+$/i;
        var reIsHostCtor = /^\[object .+?Constructor\]$/;
        var reIsOctal = /^0o[0-7]+$/i;
        var reIsUint = /^(?:0|[1-9]\d*)$/;
        var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
        var reNoMatch = /($^)/;
        var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
        var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
        var rsApos = "['\u2019]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
        var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
        var reApos = RegExp(rsApos, "g");
        var reComboMark = RegExp(rsCombo, "g");
        var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
        var reUnicodeWord = RegExp([
          rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
          rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
          rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
          rsUpper + "+" + rsOptContrUpper,
          rsOrdUpper,
          rsOrdLower,
          rsDigits,
          rsEmoji
        ].join("|"), "g");
        var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
        var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
        var contextProps = [
          "Array",
          "Buffer",
          "DataView",
          "Date",
          "Error",
          "Float32Array",
          "Float64Array",
          "Function",
          "Int8Array",
          "Int16Array",
          "Int32Array",
          "Map",
          "Math",
          "Object",
          "Promise",
          "RegExp",
          "Set",
          "String",
          "Symbol",
          "TypeError",
          "Uint8Array",
          "Uint8ClampedArray",
          "Uint16Array",
          "Uint32Array",
          "WeakMap",
          "_",
          "clearTimeout",
          "isFinite",
          "parseInt",
          "setTimeout"
        ];
        var templateCounter = -1;
        var typedArrayTags = {};
        typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
        typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
        var cloneableTags = {};
        cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
        cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
        var deburredLetters = {
          "\xC0": "A",
          "\xC1": "A",
          "\xC2": "A",
          "\xC3": "A",
          "\xC4": "A",
          "\xC5": "A",
          "\xE0": "a",
          "\xE1": "a",
          "\xE2": "a",
          "\xE3": "a",
          "\xE4": "a",
          "\xE5": "a",
          "\xC7": "C",
          "\xE7": "c",
          "\xD0": "D",
          "\xF0": "d",
          "\xC8": "E",
          "\xC9": "E",
          "\xCA": "E",
          "\xCB": "E",
          "\xE8": "e",
          "\xE9": "e",
          "\xEA": "e",
          "\xEB": "e",
          "\xCC": "I",
          "\xCD": "I",
          "\xCE": "I",
          "\xCF": "I",
          "\xEC": "i",
          "\xED": "i",
          "\xEE": "i",
          "\xEF": "i",
          "\xD1": "N",
          "\xF1": "n",
          "\xD2": "O",
          "\xD3": "O",
          "\xD4": "O",
          "\xD5": "O",
          "\xD6": "O",
          "\xD8": "O",
          "\xF2": "o",
          "\xF3": "o",
          "\xF4": "o",
          "\xF5": "o",
          "\xF6": "o",
          "\xF8": "o",
          "\xD9": "U",
          "\xDA": "U",
          "\xDB": "U",
          "\xDC": "U",
          "\xF9": "u",
          "\xFA": "u",
          "\xFB": "u",
          "\xFC": "u",
          "\xDD": "Y",
          "\xFD": "y",
          "\xFF": "y",
          "\xC6": "Ae",
          "\xE6": "ae",
          "\xDE": "Th",
          "\xFE": "th",
          "\xDF": "ss",
          "\u0100": "A",
          "\u0102": "A",
          "\u0104": "A",
          "\u0101": "a",
          "\u0103": "a",
          "\u0105": "a",
          "\u0106": "C",
          "\u0108": "C",
          "\u010A": "C",
          "\u010C": "C",
          "\u0107": "c",
          "\u0109": "c",
          "\u010B": "c",
          "\u010D": "c",
          "\u010E": "D",
          "\u0110": "D",
          "\u010F": "d",
          "\u0111": "d",
          "\u0112": "E",
          "\u0114": "E",
          "\u0116": "E",
          "\u0118": "E",
          "\u011A": "E",
          "\u0113": "e",
          "\u0115": "e",
          "\u0117": "e",
          "\u0119": "e",
          "\u011B": "e",
          "\u011C": "G",
          "\u011E": "G",
          "\u0120": "G",
          "\u0122": "G",
          "\u011D": "g",
          "\u011F": "g",
          "\u0121": "g",
          "\u0123": "g",
          "\u0124": "H",
          "\u0126": "H",
          "\u0125": "h",
          "\u0127": "h",
          "\u0128": "I",
          "\u012A": "I",
          "\u012C": "I",
          "\u012E": "I",
          "\u0130": "I",
          "\u0129": "i",
          "\u012B": "i",
          "\u012D": "i",
          "\u012F": "i",
          "\u0131": "i",
          "\u0134": "J",
          "\u0135": "j",
          "\u0136": "K",
          "\u0137": "k",
          "\u0138": "k",
          "\u0139": "L",
          "\u013B": "L",
          "\u013D": "L",
          "\u013F": "L",
          "\u0141": "L",
          "\u013A": "l",
          "\u013C": "l",
          "\u013E": "l",
          "\u0140": "l",
          "\u0142": "l",
          "\u0143": "N",
          "\u0145": "N",
          "\u0147": "N",
          "\u014A": "N",
          "\u0144": "n",
          "\u0146": "n",
          "\u0148": "n",
          "\u014B": "n",
          "\u014C": "O",
          "\u014E": "O",
          "\u0150": "O",
          "\u014D": "o",
          "\u014F": "o",
          "\u0151": "o",
          "\u0154": "R",
          "\u0156": "R",
          "\u0158": "R",
          "\u0155": "r",
          "\u0157": "r",
          "\u0159": "r",
          "\u015A": "S",
          "\u015C": "S",
          "\u015E": "S",
          "\u0160": "S",
          "\u015B": "s",
          "\u015D": "s",
          "\u015F": "s",
          "\u0161": "s",
          "\u0162": "T",
          "\u0164": "T",
          "\u0166": "T",
          "\u0163": "t",
          "\u0165": "t",
          "\u0167": "t",
          "\u0168": "U",
          "\u016A": "U",
          "\u016C": "U",
          "\u016E": "U",
          "\u0170": "U",
          "\u0172": "U",
          "\u0169": "u",
          "\u016B": "u",
          "\u016D": "u",
          "\u016F": "u",
          "\u0171": "u",
          "\u0173": "u",
          "\u0174": "W",
          "\u0175": "w",
          "\u0176": "Y",
          "\u0177": "y",
          "\u0178": "Y",
          "\u0179": "Z",
          "\u017B": "Z",
          "\u017D": "Z",
          "\u017A": "z",
          "\u017C": "z",
          "\u017E": "z",
          "\u0132": "IJ",
          "\u0133": "ij",
          "\u0152": "Oe",
          "\u0153": "oe",
          "\u0149": "'n",
          "\u017F": "s"
        };
        var htmlEscapes = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;"
        };
        var htmlUnescapes = {
          "&amp;": "&",
          "&lt;": "<",
          "&gt;": ">",
          "&quot;": '"',
          "&#39;": "'"
        };
        var stringEscapes = {
          "\\": "\\",
          "'": "'",
          "\n": "n",
          "\r": "r",
          "\u2028": "u2028",
          "\u2029": "u2029"
        };
        var freeParseFloat = parseFloat, freeParseInt = parseInt;
        var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
        var freeSelf = typeof self == "object" && self && self.Object === Object && self;
        var root = freeGlobal || freeSelf || Function("return this")();
        var freeExports = exports && !exports.nodeType && exports;
        var freeModule = freeExports && true && module && !module.nodeType && module;
        var moduleExports = freeModule && freeModule.exports === freeExports;
        var freeProcess = moduleExports && freeGlobal.process;
        var nodeUtil = function() {
          try {
            var types = freeModule && freeModule.require && freeModule.require("util").types;
            if (types) {
              return types;
            }
            return freeProcess && freeProcess.binding && freeProcess.binding("util");
          } catch (e) {
          }
        }();
        var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
        function apply(func, thisArg, args) {
          switch (args.length) {
            case 0:
              return func.call(thisArg);
            case 1:
              return func.call(thisArg, args[0]);
            case 2:
              return func.call(thisArg, args[0], args[1]);
            case 3:
              return func.call(thisArg, args[0], args[1], args[2]);
          }
          return func.apply(thisArg, args);
        }
        function arrayAggregator(array, setter, iteratee, accumulator) {
          var index = -1, length = array == null ? 0 : array.length;
          while (++index < length) {
            var value = array[index];
            setter(accumulator, value, iteratee(value), array);
          }
          return accumulator;
        }
        function arrayEach(array, iteratee) {
          var index = -1, length = array == null ? 0 : array.length;
          while (++index < length) {
            if (iteratee(array[index], index, array) === false) {
              break;
            }
          }
          return array;
        }
        function arrayEachRight(array, iteratee) {
          var length = array == null ? 0 : array.length;
          while (length--) {
            if (iteratee(array[length], length, array) === false) {
              break;
            }
          }
          return array;
        }
        function arrayEvery(array, predicate) {
          var index = -1, length = array == null ? 0 : array.length;
          while (++index < length) {
            if (!predicate(array[index], index, array)) {
              return false;
            }
          }
          return true;
        }
        function arrayFilter(array, predicate) {
          var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
          while (++index < length) {
            var value = array[index];
            if (predicate(value, index, array)) {
              result[resIndex++] = value;
            }
          }
          return result;
        }
        function arrayIncludes(array, value) {
          var length = array == null ? 0 : array.length;
          return !!length && baseIndexOf(array, value, 0) > -1;
        }
        function arrayIncludesWith(array, value, comparator) {
          var index = -1, length = array == null ? 0 : array.length;
          while (++index < length) {
            if (comparator(value, array[index])) {
              return true;
            }
          }
          return false;
        }
        function arrayMap(array, iteratee) {
          var index = -1, length = array == null ? 0 : array.length, result = Array(length);
          while (++index < length) {
            result[index] = iteratee(array[index], index, array);
          }
          return result;
        }
        function arrayPush(array, values) {
          var index = -1, length = values.length, offset = array.length;
          while (++index < length) {
            array[offset + index] = values[index];
          }
          return array;
        }
        function arrayReduce(array, iteratee, accumulator, initAccum) {
          var index = -1, length = array == null ? 0 : array.length;
          if (initAccum && length) {
            accumulator = array[++index];
          }
          while (++index < length) {
            accumulator = iteratee(accumulator, array[index], index, array);
          }
          return accumulator;
        }
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
        function arraySome(array, predicate) {
          var index = -1, length = array == null ? 0 : array.length;
          while (++index < length) {
            if (predicate(array[index], index, array)) {
              return true;
            }
          }
          return false;
        }
        var asciiSize = baseProperty("length");
        function asciiToArray(string) {
          return string.split("");
        }
        function asciiWords(string) {
          return string.match(reAsciiWord) || [];
        }
        function baseFindKey(collection, predicate, eachFunc) {
          var result;
          eachFunc(collection, function(value, key, collection2) {
            if (predicate(value, key, collection2)) {
              result = key;
              return false;
            }
          });
          return result;
        }
        function baseFindIndex(array, predicate, fromIndex, fromRight) {
          var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
          while (fromRight ? index-- : ++index < length) {
            if (predicate(array[index], index, array)) {
              return index;
            }
          }
          return -1;
        }
        function baseIndexOf(array, value, fromIndex) {
          return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
        }
        function baseIndexOfWith(array, value, fromIndex, comparator) {
          var index = fromIndex - 1, length = array.length;
          while (++index < length) {
            if (comparator(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function baseIsNaN(value) {
          return value !== value;
        }
        function baseMean(array, iteratee) {
          var length = array == null ? 0 : array.length;
          return length ? baseSum(array, iteratee) / length : NAN;
        }
        function baseProperty(key) {
          return function(object) {
            return object == null ? undefined$1 : object[key];
          };
        }
        function basePropertyOf(object) {
          return function(key) {
            return object == null ? undefined$1 : object[key];
          };
        }
        function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
          eachFunc(collection, function(value, index, collection2) {
            accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
          });
          return accumulator;
        }
        function baseSortBy(array, comparer) {
          var length = array.length;
          array.sort(comparer);
          while (length--) {
            array[length] = array[length].value;
          }
          return array;
        }
        function baseSum(array, iteratee) {
          var result, index = -1, length = array.length;
          while (++index < length) {
            var current = iteratee(array[index]);
            if (current !== undefined$1) {
              result = result === undefined$1 ? current : result + current;
            }
          }
          return result;
        }
        function baseTimes(n, iteratee) {
          var index = -1, result = Array(n);
          while (++index < n) {
            result[index] = iteratee(index);
          }
          return result;
        }
        function baseToPairs(object, props) {
          return arrayMap(props, function(key) {
            return [key, object[key]];
          });
        }
        function baseTrim(string) {
          return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
        }
        function baseUnary(func) {
          return function(value) {
            return func(value);
          };
        }
        function baseValues(object, props) {
          return arrayMap(props, function(key) {
            return object[key];
          });
        }
        function cacheHas(cache, key) {
          return cache.has(key);
        }
        function charsStartIndex(strSymbols, chrSymbols) {
          var index = -1, length = strSymbols.length;
          while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
          }
          return index;
        }
        function charsEndIndex(strSymbols, chrSymbols) {
          var index = strSymbols.length;
          while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
          }
          return index;
        }
        function countHolders(array, placeholder) {
          var length = array.length, result = 0;
          while (length--) {
            if (array[length] === placeholder) {
              ++result;
            }
          }
          return result;
        }
        var deburrLetter = basePropertyOf(deburredLetters);
        var escapeHtmlChar = basePropertyOf(htmlEscapes);
        function escapeStringChar(chr) {
          return "\\" + stringEscapes[chr];
        }
        function getValue(object, key) {
          return object == null ? undefined$1 : object[key];
        }
        function hasUnicode(string) {
          return reHasUnicode.test(string);
        }
        function hasUnicodeWord(string) {
          return reHasUnicodeWord.test(string);
        }
        function iteratorToArray(iterator) {
          var data, result = [];
          while (!(data = iterator.next()).done) {
            result.push(data.value);
          }
          return result;
        }
        function mapToArray(map) {
          var index = -1, result = Array(map.size);
          map.forEach(function(value, key) {
            result[++index] = [key, value];
          });
          return result;
        }
        function overArg(func, transform) {
          return function(arg) {
            return func(transform(arg));
          };
        }
        function replaceHolders(array, placeholder) {
          var index = -1, length = array.length, resIndex = 0, result = [];
          while (++index < length) {
            var value = array[index];
            if (value === placeholder || value === PLACEHOLDER) {
              array[index] = PLACEHOLDER;
              result[resIndex++] = index;
            }
          }
          return result;
        }
        function setToArray(set) {
          var index = -1, result = Array(set.size);
          set.forEach(function(value) {
            result[++index] = value;
          });
          return result;
        }
        function setToPairs(set) {
          var index = -1, result = Array(set.size);
          set.forEach(function(value) {
            result[++index] = [value, value];
          });
          return result;
        }
        function strictIndexOf(array, value, fromIndex) {
          var index = fromIndex - 1, length = array.length;
          while (++index < length) {
            if (array[index] === value) {
              return index;
            }
          }
          return -1;
        }
        function strictLastIndexOf(array, value, fromIndex) {
          var index = fromIndex + 1;
          while (index--) {
            if (array[index] === value) {
              return index;
            }
          }
          return index;
        }
        function stringSize(string) {
          return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
        }
        function stringToArray(string) {
          return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
        }
        function trimmedEndIndex(string) {
          var index = string.length;
          while (index-- && reWhitespace.test(string.charAt(index))) {
          }
          return index;
        }
        var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
        function unicodeSize(string) {
          var result = reUnicode.lastIndex = 0;
          while (reUnicode.test(string)) {
            ++result;
          }
          return result;
        }
        function unicodeToArray(string) {
          return string.match(reUnicode) || [];
        }
        function unicodeWords(string) {
          return string.match(reUnicodeWord) || [];
        }
        var runInContext = function runInContext2(context) {
          context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));
          var Array2 = context.Array, Date = context.Date, Error = context.Error, Function2 = context.Function, Math = context.Math, Object2 = context.Object, RegExp2 = context.RegExp, String = context.String, TypeError = context.TypeError;
          var arrayProto = Array2.prototype, funcProto = Function2.prototype, objectProto = Object2.prototype;
          var coreJsData = context["__core-js_shared__"];
          var funcToString = funcProto.toString;
          var hasOwnProperty = objectProto.hasOwnProperty;
          var idCounter = 0;
          var maskSrcKey = function() {
            var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
            return uid ? "Symbol(src)_1." + uid : "";
          }();
          var nativeObjectToString = objectProto.toString;
          var objectCtorString = funcToString.call(Object2);
          var oldDash = root._;
          var reIsNative = RegExp2(
            "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
          );
          var Buffer = moduleExports ? context.Buffer : undefined$1, Symbol = context.Symbol, Uint8Array = context.Uint8Array, allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined$1, getPrototype = overArg(Object2.getPrototypeOf, Object2), objectCreate = Object2.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined$1, symIterator = Symbol ? Symbol.iterator : undefined$1, symToStringTag = Symbol ? Symbol.toStringTag : undefined$1;
          var defineProperty = function() {
            try {
              var func = getNative(Object2, "defineProperty");
              func({}, "", {});
              return func;
            } catch (e) {
            }
          }();
          var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout, ctxNow = Date && Date.now !== root.Date.now && Date.now, ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
          var nativeCeil = Math.ceil, nativeFloor = Math.floor, nativeGetSymbols = Object2.getOwnPropertySymbols, nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined$1, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object2.keys, Object2), nativeMax = Math.max, nativeMin = Math.min, nativeNow = Date.now, nativeParseInt = context.parseInt, nativeRandom = Math.random, nativeReverse = arrayProto.reverse;
          var DataView = getNative(context, "DataView"), Map = getNative(context, "Map"), Promise = getNative(context, "Promise"), Set = getNative(context, "Set"), WeakMap = getNative(context, "WeakMap"), nativeCreate = getNative(Object2, "create");
          var metaMap = WeakMap && new WeakMap();
          var realNames = {};
          var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap);
          var symbolProto = Symbol ? Symbol.prototype : undefined$1, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined$1, symbolToString = symbolProto ? symbolProto.toString : undefined$1;
          function lodash2(value) {
            if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
              if (value instanceof LodashWrapper) {
                return value;
              }
              if (hasOwnProperty.call(value, "__wrapped__")) {
                return wrapperClone(value);
              }
            }
            return new LodashWrapper(value);
          }
          var baseCreate = function() {
            function object() {
            }
            return function(proto) {
              if (!isObject(proto)) {
                return {};
              }
              if (objectCreate) {
                return objectCreate(proto);
              }
              object.prototype = proto;
              var result2 = new object();
              object.prototype = undefined$1;
              return result2;
            };
          }();
          function baseLodash() {
          }
          function LodashWrapper(value, chainAll) {
            this.__wrapped__ = value;
            this.__actions__ = [];
            this.__chain__ = !!chainAll;
            this.__index__ = 0;
            this.__values__ = undefined$1;
          }
          lodash2.templateSettings = {
            "escape": reEscape,
            "evaluate": reEvaluate,
            "interpolate": reInterpolate,
            "variable": "",
            "imports": {
              "_": lodash2
            }
          };
          lodash2.prototype = baseLodash.prototype;
          lodash2.prototype.constructor = lodash2;
          LodashWrapper.prototype = baseCreate(baseLodash.prototype);
          LodashWrapper.prototype.constructor = LodashWrapper;
          function LazyWrapper(value) {
            this.__wrapped__ = value;
            this.__actions__ = [];
            this.__dir__ = 1;
            this.__filtered__ = false;
            this.__iteratees__ = [];
            this.__takeCount__ = MAX_ARRAY_LENGTH;
            this.__views__ = [];
          }
          function lazyClone() {
            var result2 = new LazyWrapper(this.__wrapped__);
            result2.__actions__ = copyArray(this.__actions__);
            result2.__dir__ = this.__dir__;
            result2.__filtered__ = this.__filtered__;
            result2.__iteratees__ = copyArray(this.__iteratees__);
            result2.__takeCount__ = this.__takeCount__;
            result2.__views__ = copyArray(this.__views__);
            return result2;
          }
          function lazyReverse() {
            if (this.__filtered__) {
              var result2 = new LazyWrapper(this);
              result2.__dir__ = -1;
              result2.__filtered__ = true;
            } else {
              result2 = this.clone();
              result2.__dir__ *= -1;
            }
            return result2;
          }
          function lazyValue() {
            var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
            if (!isArr || !isRight && arrLength == length && takeCount == length) {
              return baseWrapperValue(array, this.__actions__);
            }
            var result2 = [];
            outer:
              while (length-- && resIndex < takeCount) {
                index += dir;
                var iterIndex = -1, value = array[index];
                while (++iterIndex < iterLength) {
                  var data = iteratees[iterIndex], iteratee2 = data.iteratee, type = data.type, computed = iteratee2(value);
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
                result2[resIndex++] = value;
              }
            return result2;
          }
          LazyWrapper.prototype = baseCreate(baseLodash.prototype);
          LazyWrapper.prototype.constructor = LazyWrapper;
          function Hash(entries) {
            var index = -1, length = entries == null ? 0 : entries.length;
            this.clear();
            while (++index < length) {
              var entry = entries[index];
              this.set(entry[0], entry[1]);
            }
          }
          function hashClear() {
            this.__data__ = nativeCreate ? nativeCreate(null) : {};
            this.size = 0;
          }
          function hashDelete(key) {
            var result2 = this.has(key) && delete this.__data__[key];
            this.size -= result2 ? 1 : 0;
            return result2;
          }
          function hashGet(key) {
            var data = this.__data__;
            if (nativeCreate) {
              var result2 = data[key];
              return result2 === HASH_UNDEFINED ? undefined$1 : result2;
            }
            return hasOwnProperty.call(data, key) ? data[key] : undefined$1;
          }
          function hashHas(key) {
            var data = this.__data__;
            return nativeCreate ? data[key] !== undefined$1 : hasOwnProperty.call(data, key);
          }
          function hashSet(key, value) {
            var data = this.__data__;
            this.size += this.has(key) ? 0 : 1;
            data[key] = nativeCreate && value === undefined$1 ? HASH_UNDEFINED : value;
            return this;
          }
          Hash.prototype.clear = hashClear;
          Hash.prototype["delete"] = hashDelete;
          Hash.prototype.get = hashGet;
          Hash.prototype.has = hashHas;
          Hash.prototype.set = hashSet;
          function ListCache(entries) {
            var index = -1, length = entries == null ? 0 : entries.length;
            this.clear();
            while (++index < length) {
              var entry = entries[index];
              this.set(entry[0], entry[1]);
            }
          }
          function listCacheClear() {
            this.__data__ = [];
            this.size = 0;
          }
          function listCacheDelete(key) {
            var data = this.__data__, index = assocIndexOf(data, key);
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
          function listCacheGet(key) {
            var data = this.__data__, index = assocIndexOf(data, key);
            return index < 0 ? undefined$1 : data[index][1];
          }
          function listCacheHas(key) {
            return assocIndexOf(this.__data__, key) > -1;
          }
          function listCacheSet(key, value) {
            var data = this.__data__, index = assocIndexOf(data, key);
            if (index < 0) {
              ++this.size;
              data.push([key, value]);
            } else {
              data[index][1] = value;
            }
            return this;
          }
          ListCache.prototype.clear = listCacheClear;
          ListCache.prototype["delete"] = listCacheDelete;
          ListCache.prototype.get = listCacheGet;
          ListCache.prototype.has = listCacheHas;
          ListCache.prototype.set = listCacheSet;
          function MapCache(entries) {
            var index = -1, length = entries == null ? 0 : entries.length;
            this.clear();
            while (++index < length) {
              var entry = entries[index];
              this.set(entry[0], entry[1]);
            }
          }
          function mapCacheClear() {
            this.size = 0;
            this.__data__ = {
              "hash": new Hash(),
              "map": new (Map || ListCache)(),
              "string": new Hash()
            };
          }
          function mapCacheDelete(key) {
            var result2 = getMapData(this, key)["delete"](key);
            this.size -= result2 ? 1 : 0;
            return result2;
          }
          function mapCacheGet(key) {
            return getMapData(this, key).get(key);
          }
          function mapCacheHas(key) {
            return getMapData(this, key).has(key);
          }
          function mapCacheSet(key, value) {
            var data = getMapData(this, key), size2 = data.size;
            data.set(key, value);
            this.size += data.size == size2 ? 0 : 1;
            return this;
          }
          MapCache.prototype.clear = mapCacheClear;
          MapCache.prototype["delete"] = mapCacheDelete;
          MapCache.prototype.get = mapCacheGet;
          MapCache.prototype.has = mapCacheHas;
          MapCache.prototype.set = mapCacheSet;
          function SetCache(values2) {
            var index = -1, length = values2 == null ? 0 : values2.length;
            this.__data__ = new MapCache();
            while (++index < length) {
              this.add(values2[index]);
            }
          }
          function setCacheAdd(value) {
            this.__data__.set(value, HASH_UNDEFINED);
            return this;
          }
          function setCacheHas(value) {
            return this.__data__.has(value);
          }
          SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
          SetCache.prototype.has = setCacheHas;
          function Stack(entries) {
            var data = this.__data__ = new ListCache(entries);
            this.size = data.size;
          }
          function stackClear() {
            this.__data__ = new ListCache();
            this.size = 0;
          }
          function stackDelete(key) {
            var data = this.__data__, result2 = data["delete"](key);
            this.size = data.size;
            return result2;
          }
          function stackGet(key) {
            return this.__data__.get(key);
          }
          function stackHas(key) {
            return this.__data__.has(key);
          }
          function stackSet(key, value) {
            var data = this.__data__;
            if (data instanceof ListCache) {
              var pairs = data.__data__;
              if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
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
          Stack.prototype.clear = stackClear;
          Stack.prototype["delete"] = stackDelete;
          Stack.prototype.get = stackGet;
          Stack.prototype.has = stackHas;
          Stack.prototype.set = stackSet;
          function arrayLikeKeys(value, inherited) {
            var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value.length, String) : [], length = result2.length;
            for (var key in value) {
              if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
                result2.push(key);
              }
            }
            return result2;
          }
          function arraySample(array) {
            var length = array.length;
            return length ? array[baseRandom(0, length - 1)] : undefined$1;
          }
          function arraySampleSize(array, n) {
            return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
          }
          function arrayShuffle(array) {
            return shuffleSelf(copyArray(array));
          }
          function assignMergeValue(object, key, value) {
            if (value !== undefined$1 && !eq(object[key], value) || value === undefined$1 && !(key in object)) {
              baseAssignValue(object, key, value);
            }
          }
          function assignValue(object, key, value) {
            var objValue = object[key];
            if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined$1 && !(key in object)) {
              baseAssignValue(object, key, value);
            }
          }
          function assocIndexOf(array, key) {
            var length = array.length;
            while (length--) {
              if (eq(array[length][0], key)) {
                return length;
              }
            }
            return -1;
          }
          function baseAggregator(collection, setter, iteratee2, accumulator) {
            baseEach(collection, function(value, key, collection2) {
              setter(accumulator, value, iteratee2(value), collection2);
            });
            return accumulator;
          }
          function baseAssign(object, source) {
            return object && copyObject(source, keys(source), object);
          }
          function baseAssignIn(object, source) {
            return object && copyObject(source, keysIn(source), object);
          }
          function baseAssignValue(object, key, value) {
            if (key == "__proto__" && defineProperty) {
              defineProperty(object, key, {
                "configurable": true,
                "enumerable": true,
                "value": value,
                "writable": true
              });
            } else {
              object[key] = value;
            }
          }
          function baseAt(object, paths) {
            var index = -1, length = paths.length, result2 = Array2(length), skip = object == null;
            while (++index < length) {
              result2[index] = skip ? undefined$1 : get(object, paths[index]);
            }
            return result2;
          }
          function baseClamp(number, lower, upper) {
            if (number === number) {
              if (upper !== undefined$1) {
                number = number <= upper ? number : upper;
              }
              if (lower !== undefined$1) {
                number = number >= lower ? number : lower;
              }
            }
            return number;
          }
          function baseClone(value, bitmask, customizer, key, object, stack) {
            var result2, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
            if (customizer) {
              result2 = object ? customizer(value, key, object, stack) : customizer(value);
            }
            if (result2 !== undefined$1) {
              return result2;
            }
            if (!isObject(value)) {
              return value;
            }
            var isArr = isArray(value);
            if (isArr) {
              result2 = initCloneArray(value);
              if (!isDeep) {
                return copyArray(value, result2);
              }
            } else {
              var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
              if (isBuffer(value)) {
                return cloneBuffer(value, isDeep);
              }
              if (tag == objectTag || tag == argsTag || isFunc && !object) {
                result2 = isFlat || isFunc ? {} : initCloneObject(value);
                if (!isDeep) {
                  return isFlat ? copySymbolsIn(value, baseAssignIn(result2, value)) : copySymbols(value, baseAssign(result2, value));
                }
              } else {
                if (!cloneableTags[tag]) {
                  return object ? value : {};
                }
                result2 = initCloneByTag(value, tag, isDeep);
              }
            }
            stack || (stack = new Stack());
            var stacked = stack.get(value);
            if (stacked) {
              return stacked;
            }
            stack.set(value, result2);
            if (isSet(value)) {
              value.forEach(function(subValue) {
                result2.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
              });
            } else if (isMap(value)) {
              value.forEach(function(subValue, key2) {
                result2.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
              });
            }
            var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
            var props = isArr ? undefined$1 : keysFunc(value);
            arrayEach(props || value, function(subValue, key2) {
              if (props) {
                key2 = subValue;
                subValue = value[key2];
              }
              assignValue(result2, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
            });
            return result2;
          }
          function baseConforms(source) {
            var props = keys(source);
            return function(object) {
              return baseConformsTo(object, source, props);
            };
          }
          function baseConformsTo(object, source, props) {
            var length = props.length;
            if (object == null) {
              return !length;
            }
            object = Object2(object);
            while (length--) {
              var key = props[length], predicate = source[key], value = object[key];
              if (value === undefined$1 && !(key in object) || !predicate(value)) {
                return false;
              }
            }
            return true;
          }
          function baseDelay(func, wait, args) {
            if (typeof func != "function") {
              throw new TypeError(FUNC_ERROR_TEXT);
            }
            return setTimeout(function() {
              func.apply(undefined$1, args);
            }, wait);
          }
          function baseDifference(array, values2, iteratee2, comparator) {
            var index = -1, includes2 = arrayIncludes, isCommon = true, length = array.length, result2 = [], valuesLength = values2.length;
            if (!length) {
              return result2;
            }
            if (iteratee2) {
              values2 = arrayMap(values2, baseUnary(iteratee2));
            }
            if (comparator) {
              includes2 = arrayIncludesWith;
              isCommon = false;
            } else if (values2.length >= LARGE_ARRAY_SIZE) {
              includes2 = cacheHas;
              isCommon = false;
              values2 = new SetCache(values2);
            }
            outer:
              while (++index < length) {
                var value = array[index], computed = iteratee2 == null ? value : iteratee2(value);
                value = comparator || value !== 0 ? value : 0;
                if (isCommon && computed === computed) {
                  var valuesIndex = valuesLength;
                  while (valuesIndex--) {
                    if (values2[valuesIndex] === computed) {
                      continue outer;
                    }
                  }
                  result2.push(value);
                } else if (!includes2(values2, computed, comparator)) {
                  result2.push(value);
                }
              }
            return result2;
          }
          var baseEach = createBaseEach(baseForOwn);
          var baseEachRight = createBaseEach(baseForOwnRight, true);
          function baseEvery(collection, predicate) {
            var result2 = true;
            baseEach(collection, function(value, index, collection2) {
              result2 = !!predicate(value, index, collection2);
              return result2;
            });
            return result2;
          }
          function baseExtremum(array, iteratee2, comparator) {
            var index = -1, length = array.length;
            while (++index < length) {
              var value = array[index], current = iteratee2(value);
              if (current != null && (computed === undefined$1 ? current === current && !isSymbol(current) : comparator(current, computed))) {
                var computed = current, result2 = value;
              }
            }
            return result2;
          }
          function baseFill(array, value, start, end) {
            var length = array.length;
            start = toInteger(start);
            if (start < 0) {
              start = -start > length ? 0 : length + start;
            }
            end = end === undefined$1 || end > length ? length : toInteger(end);
            if (end < 0) {
              end += length;
            }
            end = start > end ? 0 : toLength(end);
            while (start < end) {
              array[start++] = value;
            }
            return array;
          }
          function baseFilter(collection, predicate) {
            var result2 = [];
            baseEach(collection, function(value, index, collection2) {
              if (predicate(value, index, collection2)) {
                result2.push(value);
              }
            });
            return result2;
          }
          function baseFlatten(array, depth, predicate, isStrict, result2) {
            var index = -1, length = array.length;
            predicate || (predicate = isFlattenable);
            result2 || (result2 = []);
            while (++index < length) {
              var value = array[index];
              if (depth > 0 && predicate(value)) {
                if (depth > 1) {
                  baseFlatten(value, depth - 1, predicate, isStrict, result2);
                } else {
                  arrayPush(result2, value);
                }
              } else if (!isStrict) {
                result2[result2.length] = value;
              }
            }
            return result2;
          }
          var baseFor = createBaseFor();
          var baseForRight = createBaseFor(true);
          function baseForOwn(object, iteratee2) {
            return object && baseFor(object, iteratee2, keys);
          }
          function baseForOwnRight(object, iteratee2) {
            return object && baseForRight(object, iteratee2, keys);
          }
          function baseFunctions(object, props) {
            return arrayFilter(props, function(key) {
              return isFunction(object[key]);
            });
          }
          function baseGet(object, path) {
            path = castPath(path, object);
            var index = 0, length = path.length;
            while (object != null && index < length) {
              object = object[toKey(path[index++])];
            }
            return index && index == length ? object : undefined$1;
          }
          function baseGetAllKeys(object, keysFunc, symbolsFunc) {
            var result2 = keysFunc(object);
            return isArray(object) ? result2 : arrayPush(result2, symbolsFunc(object));
          }
          function baseGetTag(value) {
            if (value == null) {
              return value === undefined$1 ? undefinedTag : nullTag;
            }
            return symToStringTag && symToStringTag in Object2(value) ? getRawTag(value) : objectToString(value);
          }
          function baseGt(value, other) {
            return value > other;
          }
          function baseHas(object, key) {
            return object != null && hasOwnProperty.call(object, key);
          }
          function baseHasIn(object, key) {
            return object != null && key in Object2(object);
          }
          function baseInRange(number, start, end) {
            return number >= nativeMin(start, end) && number < nativeMax(start, end);
          }
          function baseIntersection(arrays, iteratee2, comparator) {
            var includes2 = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength = Infinity, result2 = [];
            while (othIndex--) {
              var array = arrays[othIndex];
              if (othIndex && iteratee2) {
                array = arrayMap(array, baseUnary(iteratee2));
              }
              maxLength = nativeMin(array.length, maxLength);
              caches[othIndex] = !comparator && (iteratee2 || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined$1;
            }
            array = arrays[0];
            var index = -1, seen = caches[0];
            outer:
              while (++index < length && result2.length < maxLength) {
                var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
                value = comparator || value !== 0 ? value : 0;
                if (!(seen ? cacheHas(seen, computed) : includes2(result2, computed, comparator))) {
                  othIndex = othLength;
                  while (--othIndex) {
                    var cache = caches[othIndex];
                    if (!(cache ? cacheHas(cache, computed) : includes2(arrays[othIndex], computed, comparator))) {
                      continue outer;
                    }
                  }
                  if (seen) {
                    seen.push(computed);
                  }
                  result2.push(value);
                }
              }
            return result2;
          }
          function baseInverter(object, setter, iteratee2, accumulator) {
            baseForOwn(object, function(value, key, object2) {
              setter(accumulator, iteratee2(value), key, object2);
            });
            return accumulator;
          }
          function baseInvoke(object, path, args) {
            path = castPath(path, object);
            object = parent(object, path);
            var func = object == null ? object : object[toKey(last(path))];
            return func == null ? undefined$1 : apply(func, object, args);
          }
          function baseIsArguments(value) {
            return isObjectLike(value) && baseGetTag(value) == argsTag;
          }
          function baseIsArrayBuffer(value) {
            return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
          }
          function baseIsDate(value) {
            return isObjectLike(value) && baseGetTag(value) == dateTag;
          }
          function baseIsEqual(value, other, bitmask, customizer, stack) {
            if (value === other) {
              return true;
            }
            if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
              return value !== value && other !== other;
            }
            return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
          }
          function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
            var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
            objTag = objTag == argsTag ? objectTag : objTag;
            othTag = othTag == argsTag ? objectTag : othTag;
            var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
            if (isSameTag && isBuffer(object)) {
              if (!isBuffer(other)) {
                return false;
              }
              objIsArr = true;
              objIsObj = false;
            }
            if (isSameTag && !objIsObj) {
              stack || (stack = new Stack());
              return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
            }
            if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
              var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
              if (objIsWrapped || othIsWrapped) {
                var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
                stack || (stack = new Stack());
                return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
              }
            }
            if (!isSameTag) {
              return false;
            }
            stack || (stack = new Stack());
            return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
          }
          function baseIsMap(value) {
            return isObjectLike(value) && getTag(value) == mapTag;
          }
          function baseIsMatch(object, source, matchData, customizer) {
            var index = matchData.length, length = index, noCustomizer = !customizer;
            if (object == null) {
              return !length;
            }
            object = Object2(object);
            while (index--) {
              var data = matchData[index];
              if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
                return false;
              }
            }
            while (++index < length) {
              data = matchData[index];
              var key = data[0], objValue = object[key], srcValue = data[1];
              if (noCustomizer && data[2]) {
                if (objValue === undefined$1 && !(key in object)) {
                  return false;
                }
              } else {
                var stack = new Stack();
                if (customizer) {
                  var result2 = customizer(objValue, srcValue, key, object, source, stack);
                }
                if (!(result2 === undefined$1 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result2)) {
                  return false;
                }
              }
            }
            return true;
          }
          function baseIsNative(value) {
            if (!isObject(value) || isMasked(value)) {
              return false;
            }
            var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
            return pattern.test(toSource(value));
          }
          function baseIsRegExp(value) {
            return isObjectLike(value) && baseGetTag(value) == regexpTag;
          }
          function baseIsSet(value) {
            return isObjectLike(value) && getTag(value) == setTag;
          }
          function baseIsTypedArray(value) {
            return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
          }
          function baseIteratee(value) {
            if (typeof value == "function") {
              return value;
            }
            if (value == null) {
              return identity;
            }
            if (typeof value == "object") {
              return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
            }
            return property(value);
          }
          function baseKeys(object) {
            if (!isPrototype(object)) {
              return nativeKeys(object);
            }
            var result2 = [];
            for (var key in Object2(object)) {
              if (hasOwnProperty.call(object, key) && key != "constructor") {
                result2.push(key);
              }
            }
            return result2;
          }
          function baseKeysIn(object) {
            if (!isObject(object)) {
              return nativeKeysIn(object);
            }
            var isProto = isPrototype(object), result2 = [];
            for (var key in object) {
              if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
                result2.push(key);
              }
            }
            return result2;
          }
          function baseLt(value, other) {
            return value < other;
          }
          function baseMap(collection, iteratee2) {
            var index = -1, result2 = isArrayLike(collection) ? Array2(collection.length) : [];
            baseEach(collection, function(value, key, collection2) {
              result2[++index] = iteratee2(value, key, collection2);
            });
            return result2;
          }
          function baseMatches(source) {
            var matchData = getMatchData(source);
            if (matchData.length == 1 && matchData[0][2]) {
              return matchesStrictComparable(matchData[0][0], matchData[0][1]);
            }
            return function(object) {
              return object === source || baseIsMatch(object, source, matchData);
            };
          }
          function baseMatchesProperty(path, srcValue) {
            if (isKey(path) && isStrictComparable(srcValue)) {
              return matchesStrictComparable(toKey(path), srcValue);
            }
            return function(object) {
              var objValue = get(object, path);
              return objValue === undefined$1 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
            };
          }
          function baseMerge(object, source, srcIndex, customizer, stack) {
            if (object === source) {
              return;
            }
            baseFor(source, function(srcValue, key) {
              stack || (stack = new Stack());
              if (isObject(srcValue)) {
                baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
              } else {
                var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : undefined$1;
                if (newValue === undefined$1) {
                  newValue = srcValue;
                }
                assignMergeValue(object, key, newValue);
              }
            }, keysIn);
          }
          function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
            var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
            if (stacked) {
              assignMergeValue(object, key, stacked);
              return;
            }
            var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined$1;
            var isCommon = newValue === undefined$1;
            if (isCommon) {
              var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
              newValue = srcValue;
              if (isArr || isBuff || isTyped) {
                if (isArray(objValue)) {
                  newValue = objValue;
                } else if (isArrayLikeObject(objValue)) {
                  newValue = copyArray(objValue);
                } else if (isBuff) {
                  isCommon = false;
                  newValue = cloneBuffer(srcValue, true);
                } else if (isTyped) {
                  isCommon = false;
                  newValue = cloneTypedArray(srcValue, true);
                } else {
                  newValue = [];
                }
              } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
                newValue = objValue;
                if (isArguments(objValue)) {
                  newValue = toPlainObject(objValue);
                } else if (!isObject(objValue) || isFunction(objValue)) {
                  newValue = initCloneObject(srcValue);
                }
              } else {
                isCommon = false;
              }
            }
            if (isCommon) {
              stack.set(srcValue, newValue);
              mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
              stack["delete"](srcValue);
            }
            assignMergeValue(object, key, newValue);
          }
          function baseNth(array, n) {
            var length = array.length;
            if (!length) {
              return;
            }
            n += n < 0 ? length : 0;
            return isIndex(n, length) ? array[n] : undefined$1;
          }
          function baseOrderBy(collection, iteratees, orders) {
            if (iteratees.length) {
              iteratees = arrayMap(iteratees, function(iteratee2) {
                if (isArray(iteratee2)) {
                  return function(value) {
                    return baseGet(value, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
                  };
                }
                return iteratee2;
              });
            } else {
              iteratees = [identity];
            }
            var index = -1;
            iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
            var result2 = baseMap(collection, function(value, key, collection2) {
              var criteria = arrayMap(iteratees, function(iteratee2) {
                return iteratee2(value);
              });
              return { "criteria": criteria, "index": ++index, "value": value };
            });
            return baseSortBy(result2, function(object, other) {
              return compareMultiple(object, other, orders);
            });
          }
          function basePick(object, paths) {
            return basePickBy(object, paths, function(value, path) {
              return hasIn(object, path);
            });
          }
          function basePickBy(object, paths, predicate) {
            var index = -1, length = paths.length, result2 = {};
            while (++index < length) {
              var path = paths[index], value = baseGet(object, path);
              if (predicate(value, path)) {
                baseSet(result2, castPath(path, object), value);
              }
            }
            return result2;
          }
          function basePropertyDeep(path) {
            return function(object) {
              return baseGet(object, path);
            };
          }
          function basePullAll(array, values2, iteratee2, comparator) {
            var indexOf2 = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length = values2.length, seen = array;
            if (array === values2) {
              values2 = copyArray(values2);
            }
            if (iteratee2) {
              seen = arrayMap(array, baseUnary(iteratee2));
            }
            while (++index < length) {
              var fromIndex = 0, value = values2[index], computed = iteratee2 ? iteratee2(value) : value;
              while ((fromIndex = indexOf2(seen, computed, fromIndex, comparator)) > -1) {
                if (seen !== array) {
                  splice.call(seen, fromIndex, 1);
                }
                splice.call(array, fromIndex, 1);
              }
            }
            return array;
          }
          function basePullAt(array, indexes) {
            var length = array ? indexes.length : 0, lastIndex = length - 1;
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
          function baseRandom(lower, upper) {
            return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
          }
          function baseRange(start, end, step, fromRight) {
            var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result2 = Array2(length);
            while (length--) {
              result2[fromRight ? length : ++index] = start;
              start += step;
            }
            return result2;
          }
          function baseRepeat(string, n) {
            var result2 = "";
            if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
              return result2;
            }
            do {
              if (n % 2) {
                result2 += string;
              }
              n = nativeFloor(n / 2);
              if (n) {
                string += string;
              }
            } while (n);
            return result2;
          }
          function baseRest(func, start) {
            return setToString(overRest(func, start, identity), func + "");
          }
          function baseSample(collection) {
            return arraySample(values(collection));
          }
          function baseSampleSize(collection, n) {
            var array = values(collection);
            return shuffleSelf(array, baseClamp(n, 0, array.length));
          }
          function baseSet(object, path, value, customizer) {
            if (!isObject(object)) {
              return object;
            }
            path = castPath(path, object);
            var index = -1, length = path.length, lastIndex = length - 1, nested = object;
            while (nested != null && ++index < length) {
              var key = toKey(path[index]), newValue = value;
              if (key === "__proto__" || key === "constructor" || key === "prototype") {
                return object;
              }
              if (index != lastIndex) {
                var objValue = nested[key];
                newValue = customizer ? customizer(objValue, key, nested) : undefined$1;
                if (newValue === undefined$1) {
                  newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
                }
              }
              assignValue(nested, key, newValue);
              nested = nested[key];
            }
            return object;
          }
          var baseSetData = !metaMap ? identity : function(func, data) {
            metaMap.set(func, data);
            return func;
          };
          var baseSetToString = !defineProperty ? identity : function(func, string) {
            return defineProperty(func, "toString", {
              "configurable": true,
              "enumerable": false,
              "value": constant(string),
              "writable": true
            });
          };
          function baseShuffle(collection) {
            return shuffleSelf(values(collection));
          }
          function baseSlice(array, start, end) {
            var index = -1, length = array.length;
            if (start < 0) {
              start = -start > length ? 0 : length + start;
            }
            end = end > length ? length : end;
            if (end < 0) {
              end += length;
            }
            length = start > end ? 0 : end - start >>> 0;
            start >>>= 0;
            var result2 = Array2(length);
            while (++index < length) {
              result2[index] = array[index + start];
            }
            return result2;
          }
          function baseSome(collection, predicate) {
            var result2;
            baseEach(collection, function(value, index, collection2) {
              result2 = predicate(value, index, collection2);
              return !result2;
            });
            return !!result2;
          }
          function baseSortedIndex(array, value, retHighest) {
            var low = 0, high = array == null ? low : array.length;
            if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
              while (low < high) {
                var mid = low + high >>> 1, computed = array[mid];
                if (computed !== null && !isSymbol(computed) && (retHighest ? computed <= value : computed < value)) {
                  low = mid + 1;
                } else {
                  high = mid;
                }
              }
              return high;
            }
            return baseSortedIndexBy(array, value, identity, retHighest);
          }
          function baseSortedIndexBy(array, value, iteratee2, retHighest) {
            var low = 0, high = array == null ? 0 : array.length;
            if (high === 0) {
              return 0;
            }
            value = iteratee2(value);
            var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined$1;
            while (low < high) {
              var mid = nativeFloor((low + high) / 2), computed = iteratee2(array[mid]), othIsDefined = computed !== undefined$1, othIsNull = computed === null, othIsReflexive = computed === computed, othIsSymbol = isSymbol(computed);
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
                setLow = retHighest ? computed <= value : computed < value;
              }
              if (setLow) {
                low = mid + 1;
              } else {
                high = mid;
              }
            }
            return nativeMin(high, MAX_ARRAY_INDEX);
          }
          function baseSortedUniq(array, iteratee2) {
            var index = -1, length = array.length, resIndex = 0, result2 = [];
            while (++index < length) {
              var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
              if (!index || !eq(computed, seen)) {
                var seen = computed;
                result2[resIndex++] = value === 0 ? 0 : value;
              }
            }
            return result2;
          }
          function baseToNumber(value) {
            if (typeof value == "number") {
              return value;
            }
            if (isSymbol(value)) {
              return NAN;
            }
            return +value;
          }
          function baseToString(value) {
            if (typeof value == "string") {
              return value;
            }
            if (isArray(value)) {
              return arrayMap(value, baseToString) + "";
            }
            if (isSymbol(value)) {
              return symbolToString ? symbolToString.call(value) : "";
            }
            var result2 = value + "";
            return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
          }
          function baseUniq(array, iteratee2, comparator) {
            var index = -1, includes2 = arrayIncludes, length = array.length, isCommon = true, result2 = [], seen = result2;
            if (comparator) {
              isCommon = false;
              includes2 = arrayIncludesWith;
            } else if (length >= LARGE_ARRAY_SIZE) {
              var set2 = iteratee2 ? null : createSet(array);
              if (set2) {
                return setToArray(set2);
              }
              isCommon = false;
              includes2 = cacheHas;
              seen = new SetCache();
            } else {
              seen = iteratee2 ? [] : result2;
            }
            outer:
              while (++index < length) {
                var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
                value = comparator || value !== 0 ? value : 0;
                if (isCommon && computed === computed) {
                  var seenIndex = seen.length;
                  while (seenIndex--) {
                    if (seen[seenIndex] === computed) {
                      continue outer;
                    }
                  }
                  if (iteratee2) {
                    seen.push(computed);
                  }
                  result2.push(value);
                } else if (!includes2(seen, computed, comparator)) {
                  if (seen !== result2) {
                    seen.push(computed);
                  }
                  result2.push(value);
                }
              }
            return result2;
          }
          function baseUnset(object, path) {
            path = castPath(path, object);
            object = parent(object, path);
            return object == null || delete object[toKey(last(path))];
          }
          function baseUpdate(object, path, updater, customizer) {
            return baseSet(object, path, updater(baseGet(object, path)), customizer);
          }
          function baseWhile(array, predicate, isDrop, fromRight) {
            var length = array.length, index = fromRight ? length : -1;
            while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {
            }
            return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
          }
          function baseWrapperValue(value, actions) {
            var result2 = value;
            if (result2 instanceof LazyWrapper) {
              result2 = result2.value();
            }
            return arrayReduce(actions, function(result3, action) {
              return action.func.apply(action.thisArg, arrayPush([result3], action.args));
            }, result2);
          }
          function baseXor(arrays, iteratee2, comparator) {
            var length = arrays.length;
            if (length < 2) {
              return length ? baseUniq(arrays[0]) : [];
            }
            var index = -1, result2 = Array2(length);
            while (++index < length) {
              var array = arrays[index], othIndex = -1;
              while (++othIndex < length) {
                if (othIndex != index) {
                  result2[index] = baseDifference(result2[index] || array, arrays[othIndex], iteratee2, comparator);
                }
              }
            }
            return baseUniq(baseFlatten(result2, 1), iteratee2, comparator);
          }
          function baseZipObject(props, values2, assignFunc) {
            var index = -1, length = props.length, valsLength = values2.length, result2 = {};
            while (++index < length) {
              var value = index < valsLength ? values2[index] : undefined$1;
              assignFunc(result2, props[index], value);
            }
            return result2;
          }
          function castArrayLikeObject(value) {
            return isArrayLikeObject(value) ? value : [];
          }
          function castFunction(value) {
            return typeof value == "function" ? value : identity;
          }
          function castPath(value, object) {
            if (isArray(value)) {
              return value;
            }
            return isKey(value, object) ? [value] : stringToPath(toString(value));
          }
          var castRest = baseRest;
          function castSlice(array, start, end) {
            var length = array.length;
            end = end === undefined$1 ? length : end;
            return !start && end >= length ? array : baseSlice(array, start, end);
          }
          var clearTimeout = ctxClearTimeout || function(id) {
            return root.clearTimeout(id);
          };
          function cloneBuffer(buffer, isDeep) {
            if (isDeep) {
              return buffer.slice();
            }
            var length = buffer.length, result2 = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
            buffer.copy(result2);
            return result2;
          }
          function cloneArrayBuffer(arrayBuffer) {
            var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
            new Uint8Array(result2).set(new Uint8Array(arrayBuffer));
            return result2;
          }
          function cloneDataView(dataView, isDeep) {
            var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
            return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
          }
          function cloneRegExp(regexp) {
            var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
            result2.lastIndex = regexp.lastIndex;
            return result2;
          }
          function cloneSymbol(symbol) {
            return symbolValueOf ? Object2(symbolValueOf.call(symbol)) : {};
          }
          function cloneTypedArray(typedArray, isDeep) {
            var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
            return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
          }
          function compareAscending(value, other) {
            if (value !== other) {
              var valIsDefined = value !== undefined$1, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
              var othIsDefined = other !== undefined$1, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
              if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
                return 1;
              }
              if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
                return -1;
              }
            }
            return 0;
          }
          function compareMultiple(object, other, orders) {
            var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
            while (++index < length) {
              var result2 = compareAscending(objCriteria[index], othCriteria[index]);
              if (result2) {
                if (index >= ordersLength) {
                  return result2;
                }
                var order = orders[index];
                return result2 * (order == "desc" ? -1 : 1);
              }
            }
            return object.index - other.index;
          }
          function composeArgs(args, partials, holders, isCurried) {
            var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(leftLength + rangeLength), isUncurried = !isCurried;
            while (++leftIndex < leftLength) {
              result2[leftIndex] = partials[leftIndex];
            }
            while (++argsIndex < holdersLength) {
              if (isUncurried || argsIndex < argsLength) {
                result2[holders[argsIndex]] = args[argsIndex];
              }
            }
            while (rangeLength--) {
              result2[leftIndex++] = args[argsIndex++];
            }
            return result2;
          }
          function composeArgsRight(args, partials, holders, isCurried) {
            var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(rangeLength + rightLength), isUncurried = !isCurried;
            while (++argsIndex < rangeLength) {
              result2[argsIndex] = args[argsIndex];
            }
            var offset = argsIndex;
            while (++rightIndex < rightLength) {
              result2[offset + rightIndex] = partials[rightIndex];
            }
            while (++holdersIndex < holdersLength) {
              if (isUncurried || argsIndex < argsLength) {
                result2[offset + holders[holdersIndex]] = args[argsIndex++];
              }
            }
            return result2;
          }
          function copyArray(source, array) {
            var index = -1, length = source.length;
            array || (array = Array2(length));
            while (++index < length) {
              array[index] = source[index];
            }
            return array;
          }
          function copyObject(source, props, object, customizer) {
            var isNew = !object;
            object || (object = {});
            var index = -1, length = props.length;
            while (++index < length) {
              var key = props[index];
              var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined$1;
              if (newValue === undefined$1) {
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
          function copySymbols(source, object) {
            return copyObject(source, getSymbols(source), object);
          }
          function copySymbolsIn(source, object) {
            return copyObject(source, getSymbolsIn(source), object);
          }
          function createAggregator(setter, initializer) {
            return function(collection, iteratee2) {
              var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
              return func(collection, setter, getIteratee(iteratee2, 2), accumulator);
            };
          }
          function createAssigner(assigner) {
            return baseRest(function(object, sources) {
              var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined$1, guard = length > 2 ? sources[2] : undefined$1;
              customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined$1;
              if (guard && isIterateeCall(sources[0], sources[1], guard)) {
                customizer = length < 3 ? undefined$1 : customizer;
                length = 1;
              }
              object = Object2(object);
              while (++index < length) {
                var source = sources[index];
                if (source) {
                  assigner(object, source, index, customizer);
                }
              }
              return object;
            });
          }
          function createBaseEach(eachFunc, fromRight) {
            return function(collection, iteratee2) {
              if (collection == null) {
                return collection;
              }
              if (!isArrayLike(collection)) {
                return eachFunc(collection, iteratee2);
              }
              var length = collection.length, index = fromRight ? length : -1, iterable = Object2(collection);
              while (fromRight ? index-- : ++index < length) {
                if (iteratee2(iterable[index], index, iterable) === false) {
                  break;
                }
              }
              return collection;
            };
          }
          function createBaseFor(fromRight) {
            return function(object, iteratee2, keysFunc) {
              var index = -1, iterable = Object2(object), props = keysFunc(object), length = props.length;
              while (length--) {
                var key = props[fromRight ? length : ++index];
                if (iteratee2(iterable[key], key, iterable) === false) {
                  break;
                }
              }
              return object;
            };
          }
          function createBind(func, bitmask, thisArg) {
            var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
            function wrapper() {
              var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
              return fn.apply(isBind ? thisArg : this, arguments);
            }
            return wrapper;
          }
          function createCaseFirst(methodName) {
            return function(string) {
              string = toString(string);
              var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined$1;
              var chr = strSymbols ? strSymbols[0] : string.charAt(0);
              var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
              return chr[methodName]() + trailing;
            };
          }
          function createCompounder(callback) {
            return function(string) {
              return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
            };
          }
          function createCtor(Ctor) {
            return function() {
              var args = arguments;
              switch (args.length) {
                case 0:
                  return new Ctor();
                case 1:
                  return new Ctor(args[0]);
                case 2:
                  return new Ctor(args[0], args[1]);
                case 3:
                  return new Ctor(args[0], args[1], args[2]);
                case 4:
                  return new Ctor(args[0], args[1], args[2], args[3]);
                case 5:
                  return new Ctor(args[0], args[1], args[2], args[3], args[4]);
                case 6:
                  return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
                case 7:
                  return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
              }
              var thisBinding = baseCreate(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
              return isObject(result2) ? result2 : thisBinding;
            };
          }
          function createCurry(func, bitmask, arity) {
            var Ctor = createCtor(func);
            function wrapper() {
              var length = arguments.length, args = Array2(length), index = length, placeholder = getHolder(wrapper);
              while (index--) {
                args[index] = arguments[index];
              }
              var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
              length -= holders.length;
              if (length < arity) {
                return createRecurry(
                  func,
                  bitmask,
                  createHybrid,
                  wrapper.placeholder,
                  undefined$1,
                  args,
                  holders,
                  undefined$1,
                  undefined$1,
                  arity - length
                );
              }
              var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
              return apply(fn, this, args);
            }
            return wrapper;
          }
          function createFind(findIndexFunc) {
            return function(collection, predicate, fromIndex) {
              var iterable = Object2(collection);
              if (!isArrayLike(collection)) {
                var iteratee2 = getIteratee(predicate, 3);
                collection = keys(collection);
                predicate = function(key) {
                  return iteratee2(iterable[key], key, iterable);
                };
              }
              var index = findIndexFunc(collection, predicate, fromIndex);
              return index > -1 ? iterable[iteratee2 ? collection[index] : index] : undefined$1;
            };
          }
          function createFlow(fromRight) {
            return flatRest(function(funcs) {
              var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
              if (fromRight) {
                funcs.reverse();
              }
              while (index--) {
                var func = funcs[index];
                if (typeof func != "function") {
                  throw new TypeError(FUNC_ERROR_TEXT);
                }
                if (prereq && !wrapper && getFuncName(func) == "wrapper") {
                  var wrapper = new LodashWrapper([], true);
                }
              }
              index = wrapper ? index : length;
              while (++index < length) {
                func = funcs[index];
                var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined$1;
                if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
                  wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
                } else {
                  wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
                }
              }
              return function() {
                var args = arguments, value = args[0];
                if (wrapper && args.length == 1 && isArray(value)) {
                  return wrapper.plant(value).value();
                }
                var index2 = 0, result2 = length ? funcs[index2].apply(this, args) : value;
                while (++index2 < length) {
                  result2 = funcs[index2].call(this, result2);
                }
                return result2;
              };
            });
          }
          function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
            var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined$1 : createCtor(func);
            function wrapper() {
              var length = arguments.length, args = Array2(length), index = length;
              while (index--) {
                args[index] = arguments[index];
              }
              if (isCurried) {
                var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
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
                  func,
                  bitmask,
                  createHybrid,
                  wrapper.placeholder,
                  thisArg,
                  args,
                  newHolders,
                  argPos,
                  ary2,
                  arity - length
                );
              }
              var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
              length = args.length;
              if (argPos) {
                args = reorder(args, argPos);
              } else if (isFlip && length > 1) {
                args.reverse();
              }
              if (isAry && ary2 < length) {
                args.length = ary2;
              }
              if (this && this !== root && this instanceof wrapper) {
                fn = Ctor || createCtor(fn);
              }
              return fn.apply(thisBinding, args);
            }
            return wrapper;
          }
          function createInverter(setter, toIteratee) {
            return function(object, iteratee2) {
              return baseInverter(object, setter, toIteratee(iteratee2), {});
            };
          }
          function createMathOperation(operator, defaultValue) {
            return function(value, other) {
              var result2;
              if (value === undefined$1 && other === undefined$1) {
                return defaultValue;
              }
              if (value !== undefined$1) {
                result2 = value;
              }
              if (other !== undefined$1) {
                if (result2 === undefined$1) {
                  return other;
                }
                if (typeof value == "string" || typeof other == "string") {
                  value = baseToString(value);
                  other = baseToString(other);
                } else {
                  value = baseToNumber(value);
                  other = baseToNumber(other);
                }
                result2 = operator(value, other);
              }
              return result2;
            };
          }
          function createOver(arrayFunc) {
            return flatRest(function(iteratees) {
              iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
              return baseRest(function(args) {
                var thisArg = this;
                return arrayFunc(iteratees, function(iteratee2) {
                  return apply(iteratee2, thisArg, args);
                });
              });
            });
          }
          function createPadding(length, chars) {
            chars = chars === undefined$1 ? " " : baseToString(chars);
            var charsLength = chars.length;
            if (charsLength < 2) {
              return charsLength ? baseRepeat(chars, length) : chars;
            }
            var result2 = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
            return hasUnicode(chars) ? castSlice(stringToArray(result2), 0, length).join("") : result2.slice(0, length);
          }
          function createPartial(func, bitmask, thisArg, partials) {
            var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
            function wrapper() {
              var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array2(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
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
          function createRange(fromRight) {
            return function(start, end, step) {
              if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
                end = step = undefined$1;
              }
              start = toFinite(start);
              if (end === undefined$1) {
                end = start;
                start = 0;
              } else {
                end = toFinite(end);
              }
              step = step === undefined$1 ? start < end ? 1 : -1 : toFinite(step);
              return baseRange(start, end, step, fromRight);
            };
          }
          function createRelationalOperation(operator) {
            return function(value, other) {
              if (!(typeof value == "string" && typeof other == "string")) {
                value = toNumber(value);
                other = toNumber(other);
              }
              return operator(value, other);
            };
          }
          function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
            var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined$1, newHoldersRight = isCurry ? undefined$1 : holders, newPartials = isCurry ? partials : undefined$1, newPartialsRight = isCurry ? undefined$1 : partials;
            bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
            bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
            if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
              bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
            }
            var newData = [
              func,
              bitmask,
              thisArg,
              newPartials,
              newHolders,
              newPartialsRight,
              newHoldersRight,
              argPos,
              ary2,
              arity
            ];
            var result2 = wrapFunc.apply(undefined$1, newData);
            if (isLaziable(func)) {
              setData(result2, newData);
            }
            result2.placeholder = placeholder;
            return setWrapToString(result2, func, bitmask);
          }
          function createRound(methodName) {
            var func = Math[methodName];
            return function(number, precision) {
              number = toNumber(number);
              precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
              if (precision && nativeIsFinite(number)) {
                var pair = (toString(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
                pair = (toString(value) + "e").split("e");
                return +(pair[0] + "e" + (+pair[1] - precision));
              }
              return func(number);
            };
          }
          var createSet = !(Set && 1 / setToArray(new Set([, -0]))[1] == INFINITY) ? noop : function(values2) {
            return new Set(values2);
          };
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
          function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
            var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
            if (!isBindKey && typeof func != "function") {
              throw new TypeError(FUNC_ERROR_TEXT);
            }
            var length = partials ? partials.length : 0;
            if (!length) {
              bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
              partials = holders = undefined$1;
            }
            ary2 = ary2 === undefined$1 ? ary2 : nativeMax(toInteger(ary2), 0);
            arity = arity === undefined$1 ? arity : toInteger(arity);
            length -= holders ? holders.length : 0;
            if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
              var partialsRight = partials, holdersRight = holders;
              partials = holders = undefined$1;
            }
            var data = isBindKey ? undefined$1 : getData(func);
            var newData = [
              func,
              bitmask,
              thisArg,
              partials,
              holders,
              partialsRight,
              holdersRight,
              argPos,
              ary2,
              arity
            ];
            if (data) {
              mergeData(newData, data);
            }
            func = newData[0];
            bitmask = newData[1];
            thisArg = newData[2];
            partials = newData[3];
            holders = newData[4];
            arity = newData[9] = newData[9] === undefined$1 ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
            if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
              bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
            }
            if (!bitmask || bitmask == WRAP_BIND_FLAG) {
              var result2 = createBind(func, bitmask, thisArg);
            } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
              result2 = createCurry(func, bitmask, arity);
            } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
              result2 = createPartial(func, bitmask, thisArg, partials);
            } else {
              result2 = createHybrid.apply(undefined$1, newData);
            }
            var setter = data ? baseSetData : setData;
            return setWrapToString(setter(result2, newData), func, bitmask);
          }
          function customDefaultsAssignIn(objValue, srcValue, key, object) {
            if (objValue === undefined$1 || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
              return srcValue;
            }
            return objValue;
          }
          function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
            if (isObject(objValue) && isObject(srcValue)) {
              stack.set(srcValue, objValue);
              baseMerge(objValue, srcValue, undefined$1, customDefaultsMerge, stack);
              stack["delete"](srcValue);
            }
            return objValue;
          }
          function customOmitClone(value) {
            return isPlainObject(value) ? undefined$1 : value;
          }
          function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
            if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
              return false;
            }
            var arrStacked = stack.get(array);
            var othStacked = stack.get(other);
            if (arrStacked && othStacked) {
              return arrStacked == other && othStacked == array;
            }
            var index = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined$1;
            stack.set(array, other);
            stack.set(other, array);
            while (++index < arrLength) {
              var arrValue = array[index], othValue = other[index];
              if (customizer) {
                var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
              }
              if (compared !== undefined$1) {
                if (compared) {
                  continue;
                }
                result2 = false;
                break;
              }
              if (seen) {
                if (!arraySome(other, function(othValue2, othIndex) {
                  if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                    return seen.push(othIndex);
                  }
                })) {
                  result2 = false;
                  break;
                }
              } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                result2 = false;
                break;
              }
            }
            stack["delete"](array);
            stack["delete"](other);
            return result2;
          }
          function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
            switch (tag) {
              case dataViewTag:
                if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
                  return false;
                }
                object = object.buffer;
                other = other.buffer;
              case arrayBufferTag:
                if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
                  return false;
                }
                return true;
              case boolTag:
              case dateTag:
              case numberTag:
                return eq(+object, +other);
              case errorTag:
                return object.name == other.name && object.message == other.message;
              case regexpTag:
              case stringTag:
                return object == other + "";
              case mapTag:
                var convert = mapToArray;
              case setTag:
                var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
                convert || (convert = setToArray);
                if (object.size != other.size && !isPartial) {
                  return false;
                }
                var stacked = stack.get(object);
                if (stacked) {
                  return stacked == other;
                }
                bitmask |= COMPARE_UNORDERED_FLAG;
                stack.set(object, other);
                var result2 = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
                stack["delete"](object);
                return result2;
              case symbolTag:
                if (symbolValueOf) {
                  return symbolValueOf.call(object) == symbolValueOf.call(other);
                }
            }
            return false;
          }
          function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
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
            var objStacked = stack.get(object);
            var othStacked = stack.get(other);
            if (objStacked && othStacked) {
              return objStacked == other && othStacked == object;
            }
            var result2 = true;
            stack.set(object, other);
            stack.set(other, object);
            var skipCtor = isPartial;
            while (++index < objLength) {
              key = objProps[index];
              var objValue = object[key], othValue = other[key];
              if (customizer) {
                var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
              }
              if (!(compared === undefined$1 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
                result2 = false;
                break;
              }
              skipCtor || (skipCtor = key == "constructor");
            }
            if (result2 && !skipCtor) {
              var objCtor = object.constructor, othCtor = other.constructor;
              if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
                result2 = false;
              }
            }
            stack["delete"](object);
            stack["delete"](other);
            return result2;
          }
          function flatRest(func) {
            return setToString(overRest(func, undefined$1, flatten), func + "");
          }
          function getAllKeys(object) {
            return baseGetAllKeys(object, keys, getSymbols);
          }
          function getAllKeysIn(object) {
            return baseGetAllKeys(object, keysIn, getSymbolsIn);
          }
          var getData = !metaMap ? noop : function(func) {
            return metaMap.get(func);
          };
          function getFuncName(func) {
            var result2 = func.name + "", array = realNames[result2], length = hasOwnProperty.call(realNames, result2) ? array.length : 0;
            while (length--) {
              var data = array[length], otherFunc = data.func;
              if (otherFunc == null || otherFunc == func) {
                return data.name;
              }
            }
            return result2;
          }
          function getHolder(func) {
            var object = hasOwnProperty.call(lodash2, "placeholder") ? lodash2 : func;
            return object.placeholder;
          }
          function getIteratee() {
            var result2 = lodash2.iteratee || iteratee;
            result2 = result2 === iteratee ? baseIteratee : result2;
            return arguments.length ? result2(arguments[0], arguments[1]) : result2;
          }
          function getMapData(map2, key) {
            var data = map2.__data__;
            return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
          }
          function getMatchData(object) {
            var result2 = keys(object), length = result2.length;
            while (length--) {
              var key = result2[length], value = object[key];
              result2[length] = [key, value, isStrictComparable(value)];
            }
            return result2;
          }
          function getNative(object, key) {
            var value = getValue(object, key);
            return baseIsNative(value) ? value : undefined$1;
          }
          function getRawTag(value) {
            var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
            try {
              value[symToStringTag] = undefined$1;
              var unmasked = true;
            } catch (e) {
            }
            var result2 = nativeObjectToString.call(value);
            if (unmasked) {
              if (isOwn) {
                value[symToStringTag] = tag;
              } else {
                delete value[symToStringTag];
              }
            }
            return result2;
          }
          var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
            if (object == null) {
              return [];
            }
            object = Object2(object);
            return arrayFilter(nativeGetSymbols(object), function(symbol) {
              return propertyIsEnumerable.call(object, symbol);
            });
          };
          var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
            var result2 = [];
            while (object) {
              arrayPush(result2, getSymbols(object));
              object = getPrototype(object);
            }
            return result2;
          };
          var getTag = baseGetTag;
          if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
            getTag = function(value) {
              var result2 = baseGetTag(value), Ctor = result2 == objectTag ? value.constructor : undefined$1, ctorString = Ctor ? toSource(Ctor) : "";
              if (ctorString) {
                switch (ctorString) {
                  case dataViewCtorString:
                    return dataViewTag;
                  case mapCtorString:
                    return mapTag;
                  case promiseCtorString:
                    return promiseTag;
                  case setCtorString:
                    return setTag;
                  case weakMapCtorString:
                    return weakMapTag;
                }
              }
              return result2;
            };
          }
          function getView(start, end, transforms) {
            var index = -1, length = transforms.length;
            while (++index < length) {
              var data = transforms[index], size2 = data.size;
              switch (data.type) {
                case "drop":
                  start += size2;
                  break;
                case "dropRight":
                  end -= size2;
                  break;
                case "take":
                  end = nativeMin(end, start + size2);
                  break;
                case "takeRight":
                  start = nativeMax(start, end - size2);
                  break;
              }
            }
            return { "start": start, "end": end };
          }
          function getWrapDetails(source) {
            var match = source.match(reWrapDetails);
            return match ? match[1].split(reSplitDetails) : [];
          }
          function hasPath(object, path, hasFunc) {
            path = castPath(path, object);
            var index = -1, length = path.length, result2 = false;
            while (++index < length) {
              var key = toKey(path[index]);
              if (!(result2 = object != null && hasFunc(object, key))) {
                break;
              }
              object = object[key];
            }
            if (result2 || ++index != length) {
              return result2;
            }
            length = object == null ? 0 : object.length;
            return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
          }
          function initCloneArray(array) {
            var length = array.length, result2 = new array.constructor(length);
            if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
              result2.index = array.index;
              result2.input = array.input;
            }
            return result2;
          }
          function initCloneObject(object) {
            return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
          }
          function initCloneByTag(object, tag, isDeep) {
            var Ctor = object.constructor;
            switch (tag) {
              case arrayBufferTag:
                return cloneArrayBuffer(object);
              case boolTag:
              case dateTag:
                return new Ctor(+object);
              case dataViewTag:
                return cloneDataView(object, isDeep);
              case float32Tag:
              case float64Tag:
              case int8Tag:
              case int16Tag:
              case int32Tag:
              case uint8Tag:
              case uint8ClampedTag:
              case uint16Tag:
              case uint32Tag:
                return cloneTypedArray(object, isDeep);
              case mapTag:
                return new Ctor();
              case numberTag:
              case stringTag:
                return new Ctor(object);
              case regexpTag:
                return cloneRegExp(object);
              case setTag:
                return new Ctor();
              case symbolTag:
                return cloneSymbol(object);
            }
          }
          function insertWrapDetails(source, details) {
            var length = details.length;
            if (!length) {
              return source;
            }
            var lastIndex = length - 1;
            details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
            details = details.join(length > 2 ? ", " : " ");
            return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
          }
          function isFlattenable(value) {
            return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
          }
          function isIndex(value, length) {
            var type = typeof value;
            length = length == null ? MAX_SAFE_INTEGER : length;
            return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
          }
          function isIterateeCall(value, index, object) {
            if (!isObject(object)) {
              return false;
            }
            var type = typeof index;
            if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
              return eq(object[index], value);
            }
            return false;
          }
          function isKey(value, object) {
            if (isArray(value)) {
              return false;
            }
            var type = typeof value;
            if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
              return true;
            }
            return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object2(object);
          }
          function isKeyable(value) {
            var type = typeof value;
            return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
          }
          function isLaziable(func) {
            var funcName = getFuncName(func), other = lodash2[funcName];
            if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
              return false;
            }
            if (func === other) {
              return true;
            }
            var data = getData(other);
            return !!data && func === data[0];
          }
          function isMasked(func) {
            return !!maskSrcKey && maskSrcKey in func;
          }
          var isMaskable = coreJsData ? isFunction : stubFalse;
          function isPrototype(value) {
            var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
            return value === proto;
          }
          function isStrictComparable(value) {
            return value === value && !isObject(value);
          }
          function matchesStrictComparable(key, srcValue) {
            return function(object) {
              if (object == null) {
                return false;
              }
              return object[key] === srcValue && (srcValue !== undefined$1 || key in Object2(object));
            };
          }
          function memoizeCapped(func) {
            var result2 = memoize(func, function(key) {
              if (cache.size === MAX_MEMOIZE_SIZE) {
                cache.clear();
              }
              return key;
            });
            var cache = result2.cache;
            return result2;
          }
          function mergeData(data, source) {
            var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
            var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
            if (!(isCommon || isCombo)) {
              return data;
            }
            if (srcBitmask & WRAP_BIND_FLAG) {
              data[2] = source[2];
              newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
            }
            var value = source[3];
            if (value) {
              var partials = data[3];
              data[3] = partials ? composeArgs(partials, value, source[4]) : value;
              data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
            }
            value = source[5];
            if (value) {
              partials = data[5];
              data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
              data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
            }
            value = source[7];
            if (value) {
              data[7] = value;
            }
            if (srcBitmask & WRAP_ARY_FLAG) {
              data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
            }
            if (data[9] == null) {
              data[9] = source[9];
            }
            data[0] = source[0];
            data[1] = newBitmask;
            return data;
          }
          function nativeKeysIn(object) {
            var result2 = [];
            if (object != null) {
              for (var key in Object2(object)) {
                result2.push(key);
              }
            }
            return result2;
          }
          function objectToString(value) {
            return nativeObjectToString.call(value);
          }
          function overRest(func, start, transform2) {
            start = nativeMax(start === undefined$1 ? func.length - 1 : start, 0);
            return function() {
              var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array2(length);
              while (++index < length) {
                array[index] = args[start + index];
              }
              index = -1;
              var otherArgs = Array2(start + 1);
              while (++index < start) {
                otherArgs[index] = args[index];
              }
              otherArgs[start] = transform2(array);
              return apply(func, this, otherArgs);
            };
          }
          function parent(object, path) {
            return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
          }
          function reorder(array, indexes) {
            var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
            while (length--) {
              var index = indexes[length];
              array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined$1;
            }
            return array;
          }
          function safeGet(object, key) {
            if (key === "constructor" && typeof object[key] === "function") {
              return;
            }
            if (key == "__proto__") {
              return;
            }
            return object[key];
          }
          var setData = shortOut(baseSetData);
          var setTimeout = ctxSetTimeout || function(func, wait) {
            return root.setTimeout(func, wait);
          };
          var setToString = shortOut(baseSetToString);
          function setWrapToString(wrapper, reference, bitmask) {
            var source = reference + "";
            return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
          }
          function shortOut(func) {
            var count = 0, lastCalled = 0;
            return function() {
              var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
              lastCalled = stamp;
              if (remaining > 0) {
                if (++count >= HOT_COUNT) {
                  return arguments[0];
                }
              } else {
                count = 0;
              }
              return func.apply(undefined$1, arguments);
            };
          }
          function shuffleSelf(array, size2) {
            var index = -1, length = array.length, lastIndex = length - 1;
            size2 = size2 === undefined$1 ? length : size2;
            while (++index < size2) {
              var rand = baseRandom(index, lastIndex), value = array[rand];
              array[rand] = array[index];
              array[index] = value;
            }
            array.length = size2;
            return array;
          }
          var stringToPath = memoizeCapped(function(string) {
            var result2 = [];
            if (string.charCodeAt(0) === 46) {
              result2.push("");
            }
            string.replace(rePropName, function(match, number, quote, subString) {
              result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
            });
            return result2;
          });
          function toKey(value) {
            if (typeof value == "string" || isSymbol(value)) {
              return value;
            }
            var result2 = value + "";
            return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
          }
          function toSource(func) {
            if (func != null) {
              try {
                return funcToString.call(func);
              } catch (e) {
              }
              try {
                return func + "";
              } catch (e) {
              }
            }
            return "";
          }
          function updateWrapDetails(details, bitmask) {
            arrayEach(wrapFlags, function(pair) {
              var value = "_." + pair[0];
              if (bitmask & pair[1] && !arrayIncludes(details, value)) {
                details.push(value);
              }
            });
            return details.sort();
          }
          function wrapperClone(wrapper) {
            if (wrapper instanceof LazyWrapper) {
              return wrapper.clone();
            }
            var result2 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
            result2.__actions__ = copyArray(wrapper.__actions__);
            result2.__index__ = wrapper.__index__;
            result2.__values__ = wrapper.__values__;
            return result2;
          }
          function chunk(array, size2, guard) {
            if (guard ? isIterateeCall(array, size2, guard) : size2 === undefined$1) {
              size2 = 1;
            } else {
              size2 = nativeMax(toInteger(size2), 0);
            }
            var length = array == null ? 0 : array.length;
            if (!length || size2 < 1) {
              return [];
            }
            var index = 0, resIndex = 0, result2 = Array2(nativeCeil(length / size2));
            while (index < length) {
              result2[resIndex++] = baseSlice(array, index, index += size2);
            }
            return result2;
          }
          function compact(array) {
            var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result2 = [];
            while (++index < length) {
              var value = array[index];
              if (value) {
                result2[resIndex++] = value;
              }
            }
            return result2;
          }
          function concat() {
            var length = arguments.length;
            if (!length) {
              return [];
            }
            var args = Array2(length - 1), array = arguments[0], index = length;
            while (index--) {
              args[index - 1] = arguments[index];
            }
            return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
          }
          var difference = baseRest(function(array, values2) {
            return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true)) : [];
          });
          var differenceBy = baseRest(function(array, values2) {
            var iteratee2 = last(values2);
            if (isArrayLikeObject(iteratee2)) {
              iteratee2 = undefined$1;
            }
            return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2)) : [];
          });
          var differenceWith = baseRest(function(array, values2) {
            var comparator = last(values2);
            if (isArrayLikeObject(comparator)) {
              comparator = undefined$1;
            }
            return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), undefined$1, comparator) : [];
          });
          function drop(array, n, guard) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            n = guard || n === undefined$1 ? 1 : toInteger(n);
            return baseSlice(array, n < 0 ? 0 : n, length);
          }
          function dropRight(array, n, guard) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            n = guard || n === undefined$1 ? 1 : toInteger(n);
            n = length - n;
            return baseSlice(array, 0, n < 0 ? 0 : n);
          }
          function dropRightWhile(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
          }
          function dropWhile(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
          }
          function fill(array, value, start, end) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            if (start && typeof start != "number" && isIterateeCall(array, value, start)) {
              start = 0;
              end = length;
            }
            return baseFill(array, value, start, end);
          }
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
          function findLastIndex(array, predicate, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return -1;
            }
            var index = length - 1;
            if (fromIndex !== undefined$1) {
              index = toInteger(fromIndex);
              index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
            }
            return baseFindIndex(array, getIteratee(predicate, 3), index, true);
          }
          function flatten(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseFlatten(array, 1) : [];
          }
          function flattenDeep(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseFlatten(array, INFINITY) : [];
          }
          function flattenDepth(array, depth) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            depth = depth === undefined$1 ? 1 : toInteger(depth);
            return baseFlatten(array, depth);
          }
          function fromPairs(pairs) {
            var index = -1, length = pairs == null ? 0 : pairs.length, result2 = {};
            while (++index < length) {
              var pair = pairs[index];
              result2[pair[0]] = pair[1];
            }
            return result2;
          }
          function head(array) {
            return array && array.length ? array[0] : undefined$1;
          }
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
          function initial(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseSlice(array, 0, -1) : [];
          }
          var intersection = baseRest(function(arrays) {
            var mapped = arrayMap(arrays, castArrayLikeObject);
            return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
          });
          var intersectionBy = baseRest(function(arrays) {
            var iteratee2 = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
            if (iteratee2 === last(mapped)) {
              iteratee2 = undefined$1;
            } else {
              mapped.pop();
            }
            return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee2, 2)) : [];
          });
          var intersectionWith = baseRest(function(arrays) {
            var comparator = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
            comparator = typeof comparator == "function" ? comparator : undefined$1;
            if (comparator) {
              mapped.pop();
            }
            return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined$1, comparator) : [];
          });
          function join(array, separator) {
            return array == null ? "" : nativeJoin.call(array, separator);
          }
          function last(array) {
            var length = array == null ? 0 : array.length;
            return length ? array[length - 1] : undefined$1;
          }
          function lastIndexOf(array, value, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return -1;
            }
            var index = length;
            if (fromIndex !== undefined$1) {
              index = toInteger(fromIndex);
              index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
            }
            return value === value ? strictLastIndexOf(array, value, index) : baseFindIndex(array, baseIsNaN, index, true);
          }
          function nth(array, n) {
            return array && array.length ? baseNth(array, toInteger(n)) : undefined$1;
          }
          var pull = baseRest(pullAll);
          function pullAll(array, values2) {
            return array && array.length && values2 && values2.length ? basePullAll(array, values2) : array;
          }
          function pullAllBy(array, values2, iteratee2) {
            return array && array.length && values2 && values2.length ? basePullAll(array, values2, getIteratee(iteratee2, 2)) : array;
          }
          function pullAllWith(array, values2, comparator) {
            return array && array.length && values2 && values2.length ? basePullAll(array, values2, undefined$1, comparator) : array;
          }
          var pullAt = flatRest(function(array, indexes) {
            var length = array == null ? 0 : array.length, result2 = baseAt(array, indexes);
            basePullAt(array, arrayMap(indexes, function(index) {
              return isIndex(index, length) ? +index : index;
            }).sort(compareAscending));
            return result2;
          });
          function remove(array, predicate) {
            var result2 = [];
            if (!(array && array.length)) {
              return result2;
            }
            var index = -1, indexes = [], length = array.length;
            predicate = getIteratee(predicate, 3);
            while (++index < length) {
              var value = array[index];
              if (predicate(value, index, array)) {
                result2.push(value);
                indexes.push(index);
              }
            }
            basePullAt(array, indexes);
            return result2;
          }
          function reverse(array) {
            return array == null ? array : nativeReverse.call(array);
          }
          function slice(array, start, end) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            if (end && typeof end != "number" && isIterateeCall(array, start, end)) {
              start = 0;
              end = length;
            } else {
              start = start == null ? 0 : toInteger(start);
              end = end === undefined$1 ? length : toInteger(end);
            }
            return baseSlice(array, start, end);
          }
          function sortedIndex(array, value) {
            return baseSortedIndex(array, value);
          }
          function sortedIndexBy(array, value, iteratee2) {
            return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2));
          }
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
          function sortedLastIndex(array, value) {
            return baseSortedIndex(array, value, true);
          }
          function sortedLastIndexBy(array, value, iteratee2) {
            return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2), true);
          }
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
          function sortedUniq(array) {
            return array && array.length ? baseSortedUniq(array) : [];
          }
          function sortedUniqBy(array, iteratee2) {
            return array && array.length ? baseSortedUniq(array, getIteratee(iteratee2, 2)) : [];
          }
          function tail(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseSlice(array, 1, length) : [];
          }
          function take(array, n, guard) {
            if (!(array && array.length)) {
              return [];
            }
            n = guard || n === undefined$1 ? 1 : toInteger(n);
            return baseSlice(array, 0, n < 0 ? 0 : n);
          }
          function takeRight(array, n, guard) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            n = guard || n === undefined$1 ? 1 : toInteger(n);
            n = length - n;
            return baseSlice(array, n < 0 ? 0 : n, length);
          }
          function takeRightWhile(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
          }
          function takeWhile(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
          }
          var union = baseRest(function(arrays) {
            return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
          });
          var unionBy = baseRest(function(arrays) {
            var iteratee2 = last(arrays);
            if (isArrayLikeObject(iteratee2)) {
              iteratee2 = undefined$1;
            }
            return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2));
          });
          var unionWith = baseRest(function(arrays) {
            var comparator = last(arrays);
            comparator = typeof comparator == "function" ? comparator : undefined$1;
            return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined$1, comparator);
          });
          function uniq(array) {
            return array && array.length ? baseUniq(array) : [];
          }
          function uniqBy(array, iteratee2) {
            return array && array.length ? baseUniq(array, getIteratee(iteratee2, 2)) : [];
          }
          function uniqWith(array, comparator) {
            comparator = typeof comparator == "function" ? comparator : undefined$1;
            return array && array.length ? baseUniq(array, undefined$1, comparator) : [];
          }
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
          function unzipWith(array, iteratee2) {
            if (!(array && array.length)) {
              return [];
            }
            var result2 = unzip(array);
            if (iteratee2 == null) {
              return result2;
            }
            return arrayMap(result2, function(group) {
              return apply(iteratee2, undefined$1, group);
            });
          }
          var without = baseRest(function(array, values2) {
            return isArrayLikeObject(array) ? baseDifference(array, values2) : [];
          });
          var xor = baseRest(function(arrays) {
            return baseXor(arrayFilter(arrays, isArrayLikeObject));
          });
          var xorBy = baseRest(function(arrays) {
            var iteratee2 = last(arrays);
            if (isArrayLikeObject(iteratee2)) {
              iteratee2 = undefined$1;
            }
            return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee2, 2));
          });
          var xorWith = baseRest(function(arrays) {
            var comparator = last(arrays);
            comparator = typeof comparator == "function" ? comparator : undefined$1;
            return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined$1, comparator);
          });
          var zip = baseRest(unzip);
          function zipObject(props, values2) {
            return baseZipObject(props || [], values2 || [], assignValue);
          }
          function zipObjectDeep(props, values2) {
            return baseZipObject(props || [], values2 || [], baseSet);
          }
          var zipWith = baseRest(function(arrays) {
            var length = arrays.length, iteratee2 = length > 1 ? arrays[length - 1] : undefined$1;
            iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : undefined$1;
            return unzipWith(arrays, iteratee2);
          });
          function chain(value) {
            var result2 = lodash2(value);
            result2.__chain__ = true;
            return result2;
          }
          function tap(value, interceptor) {
            interceptor(value);
            return value;
          }
          function thru(value, interceptor) {
            return interceptor(value);
          }
          var wrapperAt = flatRest(function(paths) {
            var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object) {
              return baseAt(object, paths);
            };
            if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
              return this.thru(interceptor);
            }
            value = value.slice(start, +start + (length ? 1 : 0));
            value.__actions__.push({
              "func": thru,
              "args": [interceptor],
              "thisArg": undefined$1
            });
            return new LodashWrapper(value, this.__chain__).thru(function(array) {
              if (length && !array.length) {
                array.push(undefined$1);
              }
              return array;
            });
          });
          function wrapperChain() {
            return chain(this);
          }
          function wrapperCommit() {
            return new LodashWrapper(this.value(), this.__chain__);
          }
          function wrapperNext() {
            if (this.__values__ === undefined$1) {
              this.__values__ = toArray(this.value());
            }
            var done = this.__index__ >= this.__values__.length, value = done ? undefined$1 : this.__values__[this.__index__++];
            return { "done": done, "value": value };
          }
          function wrapperToIterator() {
            return this;
          }
          function wrapperPlant(value) {
            var result2, parent2 = this;
            while (parent2 instanceof baseLodash) {
              var clone2 = wrapperClone(parent2);
              clone2.__index__ = 0;
              clone2.__values__ = undefined$1;
              if (result2) {
                previous.__wrapped__ = clone2;
              } else {
                result2 = clone2;
              }
              var previous = clone2;
              parent2 = parent2.__wrapped__;
            }
            previous.__wrapped__ = value;
            return result2;
          }
          function wrapperReverse() {
            var value = this.__wrapped__;
            if (value instanceof LazyWrapper) {
              var wrapped = value;
              if (this.__actions__.length) {
                wrapped = new LazyWrapper(this);
              }
              wrapped = wrapped.reverse();
              wrapped.__actions__.push({
                "func": thru,
                "args": [reverse],
                "thisArg": undefined$1
              });
              return new LodashWrapper(wrapped, this.__chain__);
            }
            return this.thru(reverse);
          }
          function wrapperValue() {
            return baseWrapperValue(this.__wrapped__, this.__actions__);
          }
          var countBy = createAggregator(function(result2, value, key) {
            if (hasOwnProperty.call(result2, key)) {
              ++result2[key];
            } else {
              baseAssignValue(result2, key, 1);
            }
          });
          function every(collection, predicate, guard) {
            var func = isArray(collection) ? arrayEvery : baseEvery;
            if (guard && isIterateeCall(collection, predicate, guard)) {
              predicate = undefined$1;
            }
            return func(collection, getIteratee(predicate, 3));
          }
          function filter(collection, predicate) {
            var func = isArray(collection) ? arrayFilter : baseFilter;
            return func(collection, getIteratee(predicate, 3));
          }
          var find = createFind(findIndex);
          var findLast = createFind(findLastIndex);
          function flatMap(collection, iteratee2) {
            return baseFlatten(map(collection, iteratee2), 1);
          }
          function flatMapDeep(collection, iteratee2) {
            return baseFlatten(map(collection, iteratee2), INFINITY);
          }
          function flatMapDepth(collection, iteratee2, depth) {
            depth = depth === undefined$1 ? 1 : toInteger(depth);
            return baseFlatten(map(collection, iteratee2), depth);
          }
          function forEach(collection, iteratee2) {
            var func = isArray(collection) ? arrayEach : baseEach;
            return func(collection, getIteratee(iteratee2, 3));
          }
          function forEachRight(collection, iteratee2) {
            var func = isArray(collection) ? arrayEachRight : baseEachRight;
            return func(collection, getIteratee(iteratee2, 3));
          }
          var groupBy = createAggregator(function(result2, value, key) {
            if (hasOwnProperty.call(result2, key)) {
              result2[key].push(value);
            } else {
              baseAssignValue(result2, key, [value]);
            }
          });
          function includes(collection, value, fromIndex, guard) {
            collection = isArrayLike(collection) ? collection : values(collection);
            fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
            var length = collection.length;
            if (fromIndex < 0) {
              fromIndex = nativeMax(length + fromIndex, 0);
            }
            return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
          }
          var invokeMap = baseRest(function(collection, path, args) {
            var index = -1, isFunc = typeof path == "function", result2 = isArrayLike(collection) ? Array2(collection.length) : [];
            baseEach(collection, function(value) {
              result2[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
            });
            return result2;
          });
          var keyBy = createAggregator(function(result2, value, key) {
            baseAssignValue(result2, key, value);
          });
          function map(collection, iteratee2) {
            var func = isArray(collection) ? arrayMap : baseMap;
            return func(collection, getIteratee(iteratee2, 3));
          }
          function orderBy(collection, iteratees, orders, guard) {
            if (collection == null) {
              return [];
            }
            if (!isArray(iteratees)) {
              iteratees = iteratees == null ? [] : [iteratees];
            }
            orders = guard ? undefined$1 : orders;
            if (!isArray(orders)) {
              orders = orders == null ? [] : [orders];
            }
            return baseOrderBy(collection, iteratees, orders);
          }
          var partition = createAggregator(function(result2, value, key) {
            result2[key ? 0 : 1].push(value);
          }, function() {
            return [[], []];
          });
          function reduce(collection, iteratee2, accumulator) {
            var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
            return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEach);
          }
          function reduceRight(collection, iteratee2, accumulator) {
            var func = isArray(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
            return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEachRight);
          }
          function reject(collection, predicate) {
            var func = isArray(collection) ? arrayFilter : baseFilter;
            return func(collection, negate(getIteratee(predicate, 3)));
          }
          function sample(collection) {
            var func = isArray(collection) ? arraySample : baseSample;
            return func(collection);
          }
          function sampleSize(collection, n, guard) {
            if (guard ? isIterateeCall(collection, n, guard) : n === undefined$1) {
              n = 1;
            } else {
              n = toInteger(n);
            }
            var func = isArray(collection) ? arraySampleSize : baseSampleSize;
            return func(collection, n);
          }
          function shuffle(collection) {
            var func = isArray(collection) ? arrayShuffle : baseShuffle;
            return func(collection);
          }
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
          function some(collection, predicate, guard) {
            var func = isArray(collection) ? arraySome : baseSome;
            if (guard && isIterateeCall(collection, predicate, guard)) {
              predicate = undefined$1;
            }
            return func(collection, getIteratee(predicate, 3));
          }
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
          var now = ctxNow || function() {
            return root.Date.now();
          };
          function after(n, func) {
            if (typeof func != "function") {
              throw new TypeError(FUNC_ERROR_TEXT);
            }
            n = toInteger(n);
            return function() {
              if (--n < 1) {
                return func.apply(this, arguments);
              }
            };
          }
          function ary(func, n, guard) {
            n = guard ? undefined$1 : n;
            n = func && n == null ? func.length : n;
            return createWrap(func, WRAP_ARY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, n);
          }
          function before(n, func) {
            var result2;
            if (typeof func != "function") {
              throw new TypeError(FUNC_ERROR_TEXT);
            }
            n = toInteger(n);
            return function() {
              if (--n > 0) {
                result2 = func.apply(this, arguments);
              }
              if (n <= 1) {
                func = undefined$1;
              }
              return result2;
            };
          }
          var bind = baseRest(function(func, thisArg, partials) {
            var bitmask = WRAP_BIND_FLAG;
            if (partials.length) {
              var holders = replaceHolders(partials, getHolder(bind));
              bitmask |= WRAP_PARTIAL_FLAG;
            }
            return createWrap(func, bitmask, thisArg, partials, holders);
          });
          var bindKey = baseRest(function(object, key, partials) {
            var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
            if (partials.length) {
              var holders = replaceHolders(partials, getHolder(bindKey));
              bitmask |= WRAP_PARTIAL_FLAG;
            }
            return createWrap(key, bitmask, object, partials, holders);
          });
          function curry(func, arity, guard) {
            arity = guard ? undefined$1 : arity;
            var result2 = createWrap(func, WRAP_CURRY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
            result2.placeholder = curry.placeholder;
            return result2;
          }
          function curryRight(func, arity, guard) {
            arity = guard ? undefined$1 : arity;
            var result2 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
            result2.placeholder = curryRight.placeholder;
            return result2;
          }
          function debounce(func, wait, options) {
            var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
            if (typeof func != "function") {
              throw new TypeError(FUNC_ERROR_TEXT);
            }
            wait = toNumber(wait) || 0;
            if (isObject(options)) {
              leading = !!options.leading;
              maxing = "maxWait" in options;
              maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
              trailing = "trailing" in options ? !!options.trailing : trailing;
            }
            function invokeFunc(time) {
              var args = lastArgs, thisArg = lastThis;
              lastArgs = lastThis = undefined$1;
              lastInvokeTime = time;
              result2 = func.apply(thisArg, args);
              return result2;
            }
            function leadingEdge(time) {
              lastInvokeTime = time;
              timerId = setTimeout(timerExpired, wait);
              return leading ? invokeFunc(time) : result2;
            }
            function remainingWait(time) {
              var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
              return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
            }
            function shouldInvoke(time) {
              var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
              return lastCallTime === undefined$1 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
            }
            function timerExpired() {
              var time = now();
              if (shouldInvoke(time)) {
                return trailingEdge(time);
              }
              timerId = setTimeout(timerExpired, remainingWait(time));
            }
            function trailingEdge(time) {
              timerId = undefined$1;
              if (trailing && lastArgs) {
                return invokeFunc(time);
              }
              lastArgs = lastThis = undefined$1;
              return result2;
            }
            function cancel() {
              if (timerId !== undefined$1) {
                clearTimeout(timerId);
              }
              lastInvokeTime = 0;
              lastArgs = lastCallTime = lastThis = timerId = undefined$1;
            }
            function flush() {
              return timerId === undefined$1 ? result2 : trailingEdge(now());
            }
            function debounced() {
              var time = now(), isInvoking = shouldInvoke(time);
              lastArgs = arguments;
              lastThis = this;
              lastCallTime = time;
              if (isInvoking) {
                if (timerId === undefined$1) {
                  return leadingEdge(lastCallTime);
                }
                if (maxing) {
                  clearTimeout(timerId);
                  timerId = setTimeout(timerExpired, wait);
                  return invokeFunc(lastCallTime);
                }
              }
              if (timerId === undefined$1) {
                timerId = setTimeout(timerExpired, wait);
              }
              return result2;
            }
            debounced.cancel = cancel;
            debounced.flush = flush;
            return debounced;
          }
          var defer = baseRest(function(func, args) {
            return baseDelay(func, 1, args);
          });
          var delay = baseRest(function(func, wait, args) {
            return baseDelay(func, toNumber(wait) || 0, args);
          });
          function flip(func) {
            return createWrap(func, WRAP_FLIP_FLAG);
          }
          function memoize(func, resolver) {
            if (typeof func != "function" || resolver != null && typeof resolver != "function") {
              throw new TypeError(FUNC_ERROR_TEXT);
            }
            var memoized = function() {
              var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
              if (cache.has(key)) {
                return cache.get(key);
              }
              var result2 = func.apply(this, args);
              memoized.cache = cache.set(key, result2) || cache;
              return result2;
            };
            memoized.cache = new (memoize.Cache || MapCache)();
            return memoized;
          }
          memoize.Cache = MapCache;
          function negate(predicate) {
            if (typeof predicate != "function") {
              throw new TypeError(FUNC_ERROR_TEXT);
            }
            return function() {
              var args = arguments;
              switch (args.length) {
                case 0:
                  return !predicate.call(this);
                case 1:
                  return !predicate.call(this, args[0]);
                case 2:
                  return !predicate.call(this, args[0], args[1]);
                case 3:
                  return !predicate.call(this, args[0], args[1], args[2]);
              }
              return !predicate.apply(this, args);
            };
          }
          function once(func) {
            return before(2, func);
          }
          var overArgs = castRest(function(func, transforms) {
            transforms = transforms.length == 1 && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
            var funcsLength = transforms.length;
            return baseRest(function(args) {
              var index = -1, length = nativeMin(args.length, funcsLength);
              while (++index < length) {
                args[index] = transforms[index].call(this, args[index]);
              }
              return apply(func, this, args);
            });
          });
          var partial = baseRest(function(func, partials) {
            var holders = replaceHolders(partials, getHolder(partial));
            return createWrap(func, WRAP_PARTIAL_FLAG, undefined$1, partials, holders);
          });
          var partialRight = baseRest(function(func, partials) {
            var holders = replaceHolders(partials, getHolder(partialRight));
            return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined$1, partials, holders);
          });
          var rearg = flatRest(function(func, indexes) {
            return createWrap(func, WRAP_REARG_FLAG, undefined$1, undefined$1, undefined$1, indexes);
          });
          function rest(func, start) {
            if (typeof func != "function") {
              throw new TypeError(FUNC_ERROR_TEXT);
            }
            start = start === undefined$1 ? start : toInteger(start);
            return baseRest(func, start);
          }
          function spread(func, start) {
            if (typeof func != "function") {
              throw new TypeError(FUNC_ERROR_TEXT);
            }
            start = start == null ? 0 : nativeMax(toInteger(start), 0);
            return baseRest(function(args) {
              var array = args[start], otherArgs = castSlice(args, 0, start);
              if (array) {
                arrayPush(otherArgs, array);
              }
              return apply(func, this, otherArgs);
            });
          }
          function throttle(func, wait, options) {
            var leading = true, trailing = true;
            if (typeof func != "function") {
              throw new TypeError(FUNC_ERROR_TEXT);
            }
            if (isObject(options)) {
              leading = "leading" in options ? !!options.leading : leading;
              trailing = "trailing" in options ? !!options.trailing : trailing;
            }
            return debounce(func, wait, {
              "leading": leading,
              "maxWait": wait,
              "trailing": trailing
            });
          }
          function unary(func) {
            return ary(func, 1);
          }
          function wrap(value, wrapper) {
            return partial(castFunction(wrapper), value);
          }
          function castArray() {
            if (!arguments.length) {
              return [];
            }
            var value = arguments[0];
            return isArray(value) ? value : [value];
          }
          function clone(value) {
            return baseClone(value, CLONE_SYMBOLS_FLAG);
          }
          function cloneWith(value, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined$1;
            return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
          }
          function cloneDeep(value) {
            return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
          }
          function cloneDeepWith(value, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined$1;
            return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
          }
          function conformsTo(object, source) {
            return source == null || baseConformsTo(object, source, keys(source));
          }
          function eq(value, other) {
            return value === other || value !== value && other !== other;
          }
          var gt = createRelationalOperation(baseGt);
          var gte = createRelationalOperation(function(value, other) {
            return value >= other;
          });
          var isArguments = baseIsArguments(function() {
            return arguments;
          }()) ? baseIsArguments : function(value) {
            return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
          };
          var isArray = Array2.isArray;
          var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
          function isArrayLike(value) {
            return value != null && isLength(value.length) && !isFunction(value);
          }
          function isArrayLikeObject(value) {
            return isObjectLike(value) && isArrayLike(value);
          }
          function isBoolean(value) {
            return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
          }
          var isBuffer = nativeIsBuffer || stubFalse;
          var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
          function isElement(value) {
            return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
          }
          function isEmpty(value) {
            if (value == null) {
              return true;
            }
            if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
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
          function isEqual(value, other) {
            return baseIsEqual(value, other);
          }
          function isEqualWith(value, other, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined$1;
            var result2 = customizer ? customizer(value, other) : undefined$1;
            return result2 === undefined$1 ? baseIsEqual(value, other, undefined$1, customizer) : !!result2;
          }
          function isError(value) {
            if (!isObjectLike(value)) {
              return false;
            }
            var tag = baseGetTag(value);
            return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
          }
          function isFinite(value) {
            return typeof value == "number" && nativeIsFinite(value);
          }
          function isFunction(value) {
            if (!isObject(value)) {
              return false;
            }
            var tag = baseGetTag(value);
            return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
          }
          function isInteger(value) {
            return typeof value == "number" && value == toInteger(value);
          }
          function isLength(value) {
            return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
          }
          function isObject(value) {
            var type = typeof value;
            return value != null && (type == "object" || type == "function");
          }
          function isObjectLike(value) {
            return value != null && typeof value == "object";
          }
          var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
          function isMatch(object, source) {
            return object === source || baseIsMatch(object, source, getMatchData(source));
          }
          function isMatchWith(object, source, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined$1;
            return baseIsMatch(object, source, getMatchData(source), customizer);
          }
          function isNaN(value) {
            return isNumber(value) && value != +value;
          }
          function isNative(value) {
            if (isMaskable(value)) {
              throw new Error(CORE_ERROR_TEXT);
            }
            return baseIsNative(value);
          }
          function isNull(value) {
            return value === null;
          }
          function isNil(value) {
            return value == null;
          }
          function isNumber(value) {
            return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
          }
          function isPlainObject(value) {
            if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
              return false;
            }
            var proto = getPrototype(value);
            if (proto === null) {
              return true;
            }
            var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
            return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
          }
          var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
          function isSafeInteger(value) {
            return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
          }
          var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
          function isString(value) {
            return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
          }
          function isSymbol(value) {
            return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
          }
          var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
          function isUndefined(value) {
            return value === undefined$1;
          }
          function isWeakMap(value) {
            return isObjectLike(value) && getTag(value) == weakMapTag;
          }
          function isWeakSet(value) {
            return isObjectLike(value) && baseGetTag(value) == weakSetTag;
          }
          var lt = createRelationalOperation(baseLt);
          var lte = createRelationalOperation(function(value, other) {
            return value <= other;
          });
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
            var tag = getTag(value), func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
            return func(value);
          }
          function toFinite(value) {
            if (!value) {
              return value === 0 ? value : 0;
            }
            value = toNumber(value);
            if (value === INFINITY || value === -INFINITY) {
              var sign = value < 0 ? -1 : 1;
              return sign * MAX_INTEGER;
            }
            return value === value ? value : 0;
          }
          function toInteger(value) {
            var result2 = toFinite(value), remainder = result2 % 1;
            return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
          }
          function toLength(value) {
            return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
          }
          function toNumber(value) {
            if (typeof value == "number") {
              return value;
            }
            if (isSymbol(value)) {
              return NAN;
            }
            if (isObject(value)) {
              var other = typeof value.valueOf == "function" ? value.valueOf() : value;
              value = isObject(other) ? other + "" : other;
            }
            if (typeof value != "string") {
              return value === 0 ? value : +value;
            }
            value = baseTrim(value);
            var isBinary = reIsBinary.test(value);
            return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
          }
          function toPlainObject(value) {
            return copyObject(value, keysIn(value));
          }
          function toSafeInteger(value) {
            return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;
          }
          function toString(value) {
            return value == null ? "" : baseToString(value);
          }
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
          var assignIn = createAssigner(function(object, source) {
            copyObject(source, keysIn(source), object);
          });
          var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
            copyObject(source, keysIn(source), object, customizer);
          });
          var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
            copyObject(source, keys(source), object, customizer);
          });
          var at = flatRest(baseAt);
          function create(prototype, properties) {
            var result2 = baseCreate(prototype);
            return properties == null ? result2 : baseAssign(result2, properties);
          }
          var defaults = baseRest(function(object, sources) {
            object = Object2(object);
            var index = -1;
            var length = sources.length;
            var guard = length > 2 ? sources[2] : undefined$1;
            if (guard && isIterateeCall(sources[0], sources[1], guard)) {
              length = 1;
            }
            while (++index < length) {
              var source = sources[index];
              var props = keysIn(source);
              var propsIndex = -1;
              var propsLength = props.length;
              while (++propsIndex < propsLength) {
                var key = props[propsIndex];
                var value = object[key];
                if (value === undefined$1 || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
                  object[key] = source[key];
                }
              }
            }
            return object;
          });
          var defaultsDeep = baseRest(function(args) {
            args.push(undefined$1, customDefaultsMerge);
            return apply(mergeWith, undefined$1, args);
          });
          function findKey(object, predicate) {
            return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
          }
          function findLastKey(object, predicate) {
            return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
          }
          function forIn(object, iteratee2) {
            return object == null ? object : baseFor(object, getIteratee(iteratee2, 3), keysIn);
          }
          function forInRight(object, iteratee2) {
            return object == null ? object : baseForRight(object, getIteratee(iteratee2, 3), keysIn);
          }
          function forOwn(object, iteratee2) {
            return object && baseForOwn(object, getIteratee(iteratee2, 3));
          }
          function forOwnRight(object, iteratee2) {
            return object && baseForOwnRight(object, getIteratee(iteratee2, 3));
          }
          function functions(object) {
            return object == null ? [] : baseFunctions(object, keys(object));
          }
          function functionsIn(object) {
            return object == null ? [] : baseFunctions(object, keysIn(object));
          }
          function get(object, path, defaultValue) {
            var result2 = object == null ? undefined$1 : baseGet(object, path);
            return result2 === undefined$1 ? defaultValue : result2;
          }
          function has(object, path) {
            return object != null && hasPath(object, path, baseHas);
          }
          function hasIn(object, path) {
            return object != null && hasPath(object, path, baseHasIn);
          }
          var invert = createInverter(function(result2, value, key) {
            if (value != null && typeof value.toString != "function") {
              value = nativeObjectToString.call(value);
            }
            result2[value] = key;
          }, constant(identity));
          var invertBy = createInverter(function(result2, value, key) {
            if (value != null && typeof value.toString != "function") {
              value = nativeObjectToString.call(value);
            }
            if (hasOwnProperty.call(result2, value)) {
              result2[value].push(key);
            } else {
              result2[value] = [key];
            }
          }, getIteratee);
          var invoke = baseRest(baseInvoke);
          function keys(object) {
            return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
          }
          function keysIn(object) {
            return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
          }
          function mapKeys(object, iteratee2) {
            var result2 = {};
            iteratee2 = getIteratee(iteratee2, 3);
            baseForOwn(object, function(value, key, object2) {
              baseAssignValue(result2, iteratee2(value, key, object2), value);
            });
            return result2;
          }
          function mapValues(object, iteratee2) {
            var result2 = {};
            iteratee2 = getIteratee(iteratee2, 3);
            baseForOwn(object, function(value, key, object2) {
              baseAssignValue(result2, key, iteratee2(value, key, object2));
            });
            return result2;
          }
          var merge = createAssigner(function(object, source, srcIndex) {
            baseMerge(object, source, srcIndex);
          });
          var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
            baseMerge(object, source, srcIndex, customizer);
          });
          var omit = flatRest(function(object, paths) {
            var result2 = {};
            if (object == null) {
              return result2;
            }
            var isDeep = false;
            paths = arrayMap(paths, function(path) {
              path = castPath(path, object);
              isDeep || (isDeep = path.length > 1);
              return path;
            });
            copyObject(object, getAllKeysIn(object), result2);
            if (isDeep) {
              result2 = baseClone(result2, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
            }
            var length = paths.length;
            while (length--) {
              baseUnset(result2, paths[length]);
            }
            return result2;
          });
          function omitBy(object, predicate) {
            return pickBy(object, negate(getIteratee(predicate)));
          }
          var pick = flatRest(function(object, paths) {
            return object == null ? {} : basePick(object, paths);
          });
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
          function result(object, path, defaultValue) {
            path = castPath(path, object);
            var index = -1, length = path.length;
            if (!length) {
              length = 1;
              object = undefined$1;
            }
            while (++index < length) {
              var value = object == null ? undefined$1 : object[toKey(path[index])];
              if (value === undefined$1) {
                index = length;
                value = defaultValue;
              }
              object = isFunction(value) ? value.call(object) : value;
            }
            return object;
          }
          function set(object, path, value) {
            return object == null ? object : baseSet(object, path, value);
          }
          function setWith(object, path, value, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined$1;
            return object == null ? object : baseSet(object, path, value, customizer);
          }
          var toPairs = createToPairs(keys);
          var toPairsIn = createToPairs(keysIn);
          function transform(object, iteratee2, accumulator) {
            var isArr = isArray(object), isArrLike = isArr || isBuffer(object) || isTypedArray(object);
            iteratee2 = getIteratee(iteratee2, 4);
            if (accumulator == null) {
              var Ctor = object && object.constructor;
              if (isArrLike) {
                accumulator = isArr ? new Ctor() : [];
              } else if (isObject(object)) {
                accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
              } else {
                accumulator = {};
              }
            }
            (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object2) {
              return iteratee2(accumulator, value, index, object2);
            });
            return accumulator;
          }
          function unset(object, path) {
            return object == null ? true : baseUnset(object, path);
          }
          function update(object, path, updater) {
            return object == null ? object : baseUpdate(object, path, castFunction(updater));
          }
          function updateWith(object, path, updater, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined$1;
            return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
          }
          function values(object) {
            return object == null ? [] : baseValues(object, keys(object));
          }
          function valuesIn(object) {
            return object == null ? [] : baseValues(object, keysIn(object));
          }
          function clamp(number, lower, upper) {
            if (upper === undefined$1) {
              upper = lower;
              lower = undefined$1;
            }
            if (upper !== undefined$1) {
              upper = toNumber(upper);
              upper = upper === upper ? upper : 0;
            }
            if (lower !== undefined$1) {
              lower = toNumber(lower);
              lower = lower === lower ? lower : 0;
            }
            return baseClamp(toNumber(number), lower, upper);
          }
          function inRange(number, start, end) {
            start = toFinite(start);
            if (end === undefined$1) {
              end = start;
              start = 0;
            } else {
              end = toFinite(end);
            }
            number = toNumber(number);
            return baseInRange(number, start, end);
          }
          function random(lower, upper, floating) {
            if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) {
              upper = floating = undefined$1;
            }
            if (floating === undefined$1) {
              if (typeof upper == "boolean") {
                floating = upper;
                upper = undefined$1;
              } else if (typeof lower == "boolean") {
                floating = lower;
                lower = undefined$1;
              }
            }
            if (lower === undefined$1 && upper === undefined$1) {
              lower = 0;
              upper = 1;
            } else {
              lower = toFinite(lower);
              if (upper === undefined$1) {
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
              return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
            }
            return baseRandom(lower, upper);
          }
          var camelCase = createCompounder(function(result2, word, index) {
            word = word.toLowerCase();
            return result2 + (index ? capitalize(word) : word);
          });
          function capitalize(string) {
            return upperFirst(toString(string).toLowerCase());
          }
          function deburr(string) {
            string = toString(string);
            return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
          }
          function endsWith(string, target, position) {
            string = toString(string);
            target = baseToString(target);
            var length = string.length;
            position = position === undefined$1 ? length : baseClamp(toInteger(position), 0, length);
            var end = position;
            position -= target.length;
            return position >= 0 && string.slice(position, end) == target;
          }
          function escape(string) {
            string = toString(string);
            return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
          }
          function escapeRegExp(string) {
            string = toString(string);
            return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string;
          }
          var kebabCase = createCompounder(function(result2, word, index) {
            return result2 + (index ? "-" : "") + word.toLowerCase();
          });
          var lowerCase = createCompounder(function(result2, word, index) {
            return result2 + (index ? " " : "") + word.toLowerCase();
          });
          var lowerFirst = createCaseFirst("toLowerCase");
          function pad(string, length, chars) {
            string = toString(string);
            length = toInteger(length);
            var strLength = length ? stringSize(string) : 0;
            if (!length || strLength >= length) {
              return string;
            }
            var mid = (length - strLength) / 2;
            return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
          }
          function padEnd(string, length, chars) {
            string = toString(string);
            length = toInteger(length);
            var strLength = length ? stringSize(string) : 0;
            return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
          }
          function padStart(string, length, chars) {
            string = toString(string);
            length = toInteger(length);
            var strLength = length ? stringSize(string) : 0;
            return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
          }
          function parseInt2(string, radix, guard) {
            if (guard || radix == null) {
              radix = 0;
            } else if (radix) {
              radix = +radix;
            }
            return nativeParseInt(toString(string).replace(reTrimStart, ""), radix || 0);
          }
          function repeat(string, n, guard) {
            if (guard ? isIterateeCall(string, n, guard) : n === undefined$1) {
              n = 1;
            } else {
              n = toInteger(n);
            }
            return baseRepeat(toString(string), n);
          }
          function replace() {
            var args = arguments, string = toString(args[0]);
            return args.length < 3 ? string : string.replace(args[1], args[2]);
          }
          var snakeCase = createCompounder(function(result2, word, index) {
            return result2 + (index ? "_" : "") + word.toLowerCase();
          });
          function split(string, separator, limit) {
            if (limit && typeof limit != "number" && isIterateeCall(string, separator, limit)) {
              separator = limit = undefined$1;
            }
            limit = limit === undefined$1 ? MAX_ARRAY_LENGTH : limit >>> 0;
            if (!limit) {
              return [];
            }
            string = toString(string);
            if (string && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
              separator = baseToString(separator);
              if (!separator && hasUnicode(string)) {
                return castSlice(stringToArray(string), 0, limit);
              }
            }
            return string.split(separator, limit);
          }
          var startCase = createCompounder(function(result2, word, index) {
            return result2 + (index ? " " : "") + upperFirst(word);
          });
          function startsWith(string, target, position) {
            string = toString(string);
            position = position == null ? 0 : baseClamp(toInteger(position), 0, string.length);
            target = baseToString(target);
            return string.slice(position, position + target.length) == target;
          }
          function template(string, options, guard) {
            var settings = lodash2.templateSettings;
            if (guard && isIterateeCall(string, options, guard)) {
              options = undefined$1;
            }
            string = toString(string);
            options = assignInWith({}, options, settings, customDefaultsAssignIn);
            var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys);
            var isEscaping, isEvaluating, index = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
            var reDelimiters = RegExp2(
              (options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$",
              "g"
            );
            var sourceURL = "//# sourceURL=" + (hasOwnProperty.call(options, "sourceURL") ? (options.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
            string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
              interpolateValue || (interpolateValue = esTemplateValue);
              source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
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
              return match;
            });
            source += "';\n";
            var variable = hasOwnProperty.call(options, "variable") && options.variable;
            if (!variable) {
              source = "with (obj) {\n" + source + "\n}\n";
            } else if (reForbiddenIdentifierChars.test(variable)) {
              throw new Error(INVALID_TEMPL_VAR_ERROR_TEXT);
            }
            source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
            source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
            var result2 = attempt(function() {
              return Function2(importsKeys, sourceURL + "return " + source).apply(undefined$1, importsValues);
            });
            result2.source = source;
            if (isError(result2)) {
              throw result2;
            }
            return result2;
          }
          function toLower(value) {
            return toString(value).toLowerCase();
          }
          function toUpper(value) {
            return toString(value).toUpperCase();
          }
          function trim(string, chars, guard) {
            string = toString(string);
            if (string && (guard || chars === undefined$1)) {
              return baseTrim(string);
            }
            if (!string || !(chars = baseToString(chars))) {
              return string;
            }
            var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
            return castSlice(strSymbols, start, end).join("");
          }
          function trimEnd(string, chars, guard) {
            string = toString(string);
            if (string && (guard || chars === undefined$1)) {
              return string.slice(0, trimmedEndIndex(string) + 1);
            }
            if (!string || !(chars = baseToString(chars))) {
              return string;
            }
            var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
            return castSlice(strSymbols, 0, end).join("");
          }
          function trimStart(string, chars, guard) {
            string = toString(string);
            if (string && (guard || chars === undefined$1)) {
              return string.replace(reTrimStart, "");
            }
            if (!string || !(chars = baseToString(chars))) {
              return string;
            }
            var strSymbols = stringToArray(string), start = charsStartIndex(strSymbols, stringToArray(chars));
            return castSlice(strSymbols, start).join("");
          }
          function truncate(string, options) {
            var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
            if (isObject(options)) {
              var separator = "separator" in options ? options.separator : separator;
              length = "length" in options ? toInteger(options.length) : length;
              omission = "omission" in options ? baseToString(options.omission) : omission;
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
            var result2 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
            if (separator === undefined$1) {
              return result2 + omission;
            }
            if (strSymbols) {
              end += result2.length - end;
            }
            if (isRegExp(separator)) {
              if (string.slice(end).search(separator)) {
                var match, substring = result2;
                if (!separator.global) {
                  separator = RegExp2(separator.source, toString(reFlags.exec(separator)) + "g");
                }
                separator.lastIndex = 0;
                while (match = separator.exec(substring)) {
                  var newEnd = match.index;
                }
                result2 = result2.slice(0, newEnd === undefined$1 ? end : newEnd);
              }
            } else if (string.indexOf(baseToString(separator), end) != end) {
              var index = result2.lastIndexOf(separator);
              if (index > -1) {
                result2 = result2.slice(0, index);
              }
            }
            return result2 + omission;
          }
          function unescape(string) {
            string = toString(string);
            return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
          }
          var upperCase = createCompounder(function(result2, word, index) {
            return result2 + (index ? " " : "") + word.toUpperCase();
          });
          var upperFirst = createCaseFirst("toUpperCase");
          function words(string, pattern, guard) {
            string = toString(string);
            pattern = guard ? undefined$1 : pattern;
            if (pattern === undefined$1) {
              return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
            }
            return string.match(pattern) || [];
          }
          var attempt = baseRest(function(func, args) {
            try {
              return apply(func, undefined$1, args);
            } catch (e) {
              return isError(e) ? e : new Error(e);
            }
          });
          var bindAll = flatRest(function(object, methodNames) {
            arrayEach(methodNames, function(key) {
              key = toKey(key);
              baseAssignValue(object, key, bind(object[key], object));
            });
            return object;
          });
          function cond(pairs) {
            var length = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
            pairs = !length ? [] : arrayMap(pairs, function(pair) {
              if (typeof pair[1] != "function") {
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
          function conforms(source) {
            return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
          }
          function constant(value) {
            return function() {
              return value;
            };
          }
          function defaultTo(value, defaultValue) {
            return value == null || value !== value ? defaultValue : value;
          }
          var flow = createFlow();
          var flowRight = createFlow(true);
          function identity(value) {
            return value;
          }
          function iteratee(func) {
            return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
          }
          function matches(source) {
            return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
          }
          function matchesProperty(path, srcValue) {
            return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
          }
          var method = baseRest(function(path, args) {
            return function(object) {
              return baseInvoke(object, path, args);
            };
          });
          var methodOf = baseRest(function(object, args) {
            return function(path) {
              return baseInvoke(object, path, args);
            };
          });
          function mixin(object, source, options) {
            var props = keys(source), methodNames = baseFunctions(source, props);
            if (options == null && !(isObject(source) && (methodNames.length || !props.length))) {
              options = source;
              source = object;
              object = this;
              methodNames = baseFunctions(source, keys(source));
            }
            var chain2 = !(isObject(options) && "chain" in options) || !!options.chain, isFunc = isFunction(object);
            arrayEach(methodNames, function(methodName) {
              var func = source[methodName];
              object[methodName] = func;
              if (isFunc) {
                object.prototype[methodName] = function() {
                  var chainAll = this.__chain__;
                  if (chain2 || chainAll) {
                    var result2 = object(this.__wrapped__), actions = result2.__actions__ = copyArray(this.__actions__);
                    actions.push({ "func": func, "args": arguments, "thisArg": object });
                    result2.__chain__ = chainAll;
                    return result2;
                  }
                  return func.apply(object, arrayPush([this.value()], arguments));
                };
              }
            });
            return object;
          }
          function noConflict() {
            if (root._ === this) {
              root._ = oldDash;
            }
            return this;
          }
          function noop() {
          }
          function nthArg(n) {
            n = toInteger(n);
            return baseRest(function(args) {
              return baseNth(args, n);
            });
          }
          var over = createOver(arrayMap);
          var overEvery = createOver(arrayEvery);
          var overSome = createOver(arraySome);
          function property(path) {
            return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
          }
          function propertyOf(object) {
            return function(path) {
              return object == null ? undefined$1 : baseGet(object, path);
            };
          }
          var range = createRange();
          var rangeRight = createRange(true);
          function stubArray() {
            return [];
          }
          function stubFalse() {
            return false;
          }
          function stubObject() {
            return {};
          }
          function stubString() {
            return "";
          }
          function stubTrue() {
            return true;
          }
          function times(n, iteratee2) {
            n = toInteger(n);
            if (n < 1 || n > MAX_SAFE_INTEGER) {
              return [];
            }
            var index = MAX_ARRAY_LENGTH, length = nativeMin(n, MAX_ARRAY_LENGTH);
            iteratee2 = getIteratee(iteratee2);
            n -= MAX_ARRAY_LENGTH;
            var result2 = baseTimes(length, iteratee2);
            while (++index < n) {
              iteratee2(index);
            }
            return result2;
          }
          function toPath(value) {
            if (isArray(value)) {
              return arrayMap(value, toKey);
            }
            return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
          }
          function uniqueId(prefix) {
            var id = ++idCounter;
            return toString(prefix) + id;
          }
          var add = createMathOperation(function(augend, addend) {
            return augend + addend;
          }, 0);
          var ceil = createRound("ceil");
          var divide = createMathOperation(function(dividend, divisor) {
            return dividend / divisor;
          }, 1);
          var floor = createRound("floor");
          function max(array) {
            return array && array.length ? baseExtremum(array, identity, baseGt) : undefined$1;
          }
          function maxBy(array, iteratee2) {
            return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseGt) : undefined$1;
          }
          function mean(array) {
            return baseMean(array, identity);
          }
          function meanBy(array, iteratee2) {
            return baseMean(array, getIteratee(iteratee2, 2));
          }
          function min(array) {
            return array && array.length ? baseExtremum(array, identity, baseLt) : undefined$1;
          }
          function minBy(array, iteratee2) {
            return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseLt) : undefined$1;
          }
          var multiply = createMathOperation(function(multiplier, multiplicand) {
            return multiplier * multiplicand;
          }, 1);
          var round = createRound("round");
          var subtract = createMathOperation(function(minuend, subtrahend) {
            return minuend - subtrahend;
          }, 0);
          function sum(array) {
            return array && array.length ? baseSum(array, identity) : 0;
          }
          function sumBy(array, iteratee2) {
            return array && array.length ? baseSum(array, getIteratee(iteratee2, 2)) : 0;
          }
          lodash2.after = after;
          lodash2.ary = ary;
          lodash2.assign = assign;
          lodash2.assignIn = assignIn;
          lodash2.assignInWith = assignInWith;
          lodash2.assignWith = assignWith;
          lodash2.at = at;
          lodash2.before = before;
          lodash2.bind = bind;
          lodash2.bindAll = bindAll;
          lodash2.bindKey = bindKey;
          lodash2.castArray = castArray;
          lodash2.chain = chain;
          lodash2.chunk = chunk;
          lodash2.compact = compact;
          lodash2.concat = concat;
          lodash2.cond = cond;
          lodash2.conforms = conforms;
          lodash2.constant = constant;
          lodash2.countBy = countBy;
          lodash2.create = create;
          lodash2.curry = curry;
          lodash2.curryRight = curryRight;
          lodash2.debounce = debounce;
          lodash2.defaults = defaults;
          lodash2.defaultsDeep = defaultsDeep;
          lodash2.defer = defer;
          lodash2.delay = delay;
          lodash2.difference = difference;
          lodash2.differenceBy = differenceBy;
          lodash2.differenceWith = differenceWith;
          lodash2.drop = drop;
          lodash2.dropRight = dropRight;
          lodash2.dropRightWhile = dropRightWhile;
          lodash2.dropWhile = dropWhile;
          lodash2.fill = fill;
          lodash2.filter = filter;
          lodash2.flatMap = flatMap;
          lodash2.flatMapDeep = flatMapDeep;
          lodash2.flatMapDepth = flatMapDepth;
          lodash2.flatten = flatten;
          lodash2.flattenDeep = flattenDeep;
          lodash2.flattenDepth = flattenDepth;
          lodash2.flip = flip;
          lodash2.flow = flow;
          lodash2.flowRight = flowRight;
          lodash2.fromPairs = fromPairs;
          lodash2.functions = functions;
          lodash2.functionsIn = functionsIn;
          lodash2.groupBy = groupBy;
          lodash2.initial = initial;
          lodash2.intersection = intersection;
          lodash2.intersectionBy = intersectionBy;
          lodash2.intersectionWith = intersectionWith;
          lodash2.invert = invert;
          lodash2.invertBy = invertBy;
          lodash2.invokeMap = invokeMap;
          lodash2.iteratee = iteratee;
          lodash2.keyBy = keyBy;
          lodash2.keys = keys;
          lodash2.keysIn = keysIn;
          lodash2.map = map;
          lodash2.mapKeys = mapKeys;
          lodash2.mapValues = mapValues;
          lodash2.matches = matches;
          lodash2.matchesProperty = matchesProperty;
          lodash2.memoize = memoize;
          lodash2.merge = merge;
          lodash2.mergeWith = mergeWith;
          lodash2.method = method;
          lodash2.methodOf = methodOf;
          lodash2.mixin = mixin;
          lodash2.negate = negate;
          lodash2.nthArg = nthArg;
          lodash2.omit = omit;
          lodash2.omitBy = omitBy;
          lodash2.once = once;
          lodash2.orderBy = orderBy;
          lodash2.over = over;
          lodash2.overArgs = overArgs;
          lodash2.overEvery = overEvery;
          lodash2.overSome = overSome;
          lodash2.partial = partial;
          lodash2.partialRight = partialRight;
          lodash2.partition = partition;
          lodash2.pick = pick;
          lodash2.pickBy = pickBy;
          lodash2.property = property;
          lodash2.propertyOf = propertyOf;
          lodash2.pull = pull;
          lodash2.pullAll = pullAll;
          lodash2.pullAllBy = pullAllBy;
          lodash2.pullAllWith = pullAllWith;
          lodash2.pullAt = pullAt;
          lodash2.range = range;
          lodash2.rangeRight = rangeRight;
          lodash2.rearg = rearg;
          lodash2.reject = reject;
          lodash2.remove = remove;
          lodash2.rest = rest;
          lodash2.reverse = reverse;
          lodash2.sampleSize = sampleSize;
          lodash2.set = set;
          lodash2.setWith = setWith;
          lodash2.shuffle = shuffle;
          lodash2.slice = slice;
          lodash2.sortBy = sortBy;
          lodash2.sortedUniq = sortedUniq;
          lodash2.sortedUniqBy = sortedUniqBy;
          lodash2.split = split;
          lodash2.spread = spread;
          lodash2.tail = tail;
          lodash2.take = take;
          lodash2.takeRight = takeRight;
          lodash2.takeRightWhile = takeRightWhile;
          lodash2.takeWhile = takeWhile;
          lodash2.tap = tap;
          lodash2.throttle = throttle;
          lodash2.thru = thru;
          lodash2.toArray = toArray;
          lodash2.toPairs = toPairs;
          lodash2.toPairsIn = toPairsIn;
          lodash2.toPath = toPath;
          lodash2.toPlainObject = toPlainObject;
          lodash2.transform = transform;
          lodash2.unary = unary;
          lodash2.union = union;
          lodash2.unionBy = unionBy;
          lodash2.unionWith = unionWith;
          lodash2.uniq = uniq;
          lodash2.uniqBy = uniqBy;
          lodash2.uniqWith = uniqWith;
          lodash2.unset = unset;
          lodash2.unzip = unzip;
          lodash2.unzipWith = unzipWith;
          lodash2.update = update;
          lodash2.updateWith = updateWith;
          lodash2.values = values;
          lodash2.valuesIn = valuesIn;
          lodash2.without = without;
          lodash2.words = words;
          lodash2.wrap = wrap;
          lodash2.xor = xor;
          lodash2.xorBy = xorBy;
          lodash2.xorWith = xorWith;
          lodash2.zip = zip;
          lodash2.zipObject = zipObject;
          lodash2.zipObjectDeep = zipObjectDeep;
          lodash2.zipWith = zipWith;
          lodash2.entries = toPairs;
          lodash2.entriesIn = toPairsIn;
          lodash2.extend = assignIn;
          lodash2.extendWith = assignInWith;
          mixin(lodash2, lodash2);
          lodash2.add = add;
          lodash2.attempt = attempt;
          lodash2.camelCase = camelCase;
          lodash2.capitalize = capitalize;
          lodash2.ceil = ceil;
          lodash2.clamp = clamp;
          lodash2.clone = clone;
          lodash2.cloneDeep = cloneDeep;
          lodash2.cloneDeepWith = cloneDeepWith;
          lodash2.cloneWith = cloneWith;
          lodash2.conformsTo = conformsTo;
          lodash2.deburr = deburr;
          lodash2.defaultTo = defaultTo;
          lodash2.divide = divide;
          lodash2.endsWith = endsWith;
          lodash2.eq = eq;
          lodash2.escape = escape;
          lodash2.escapeRegExp = escapeRegExp;
          lodash2.every = every;
          lodash2.find = find;
          lodash2.findIndex = findIndex;
          lodash2.findKey = findKey;
          lodash2.findLast = findLast;
          lodash2.findLastIndex = findLastIndex;
          lodash2.findLastKey = findLastKey;
          lodash2.floor = floor;
          lodash2.forEach = forEach;
          lodash2.forEachRight = forEachRight;
          lodash2.forIn = forIn;
          lodash2.forInRight = forInRight;
          lodash2.forOwn = forOwn;
          lodash2.forOwnRight = forOwnRight;
          lodash2.get = get;
          lodash2.gt = gt;
          lodash2.gte = gte;
          lodash2.has = has;
          lodash2.hasIn = hasIn;
          lodash2.head = head;
          lodash2.identity = identity;
          lodash2.includes = includes;
          lodash2.indexOf = indexOf;
          lodash2.inRange = inRange;
          lodash2.invoke = invoke;
          lodash2.isArguments = isArguments;
          lodash2.isArray = isArray;
          lodash2.isArrayBuffer = isArrayBuffer;
          lodash2.isArrayLike = isArrayLike;
          lodash2.isArrayLikeObject = isArrayLikeObject;
          lodash2.isBoolean = isBoolean;
          lodash2.isBuffer = isBuffer;
          lodash2.isDate = isDate;
          lodash2.isElement = isElement;
          lodash2.isEmpty = isEmpty;
          lodash2.isEqual = isEqual;
          lodash2.isEqualWith = isEqualWith;
          lodash2.isError = isError;
          lodash2.isFinite = isFinite;
          lodash2.isFunction = isFunction;
          lodash2.isInteger = isInteger;
          lodash2.isLength = isLength;
          lodash2.isMap = isMap;
          lodash2.isMatch = isMatch;
          lodash2.isMatchWith = isMatchWith;
          lodash2.isNaN = isNaN;
          lodash2.isNative = isNative;
          lodash2.isNil = isNil;
          lodash2.isNull = isNull;
          lodash2.isNumber = isNumber;
          lodash2.isObject = isObject;
          lodash2.isObjectLike = isObjectLike;
          lodash2.isPlainObject = isPlainObject;
          lodash2.isRegExp = isRegExp;
          lodash2.isSafeInteger = isSafeInteger;
          lodash2.isSet = isSet;
          lodash2.isString = isString;
          lodash2.isSymbol = isSymbol;
          lodash2.isTypedArray = isTypedArray;
          lodash2.isUndefined = isUndefined;
          lodash2.isWeakMap = isWeakMap;
          lodash2.isWeakSet = isWeakSet;
          lodash2.join = join;
          lodash2.kebabCase = kebabCase;
          lodash2.last = last;
          lodash2.lastIndexOf = lastIndexOf;
          lodash2.lowerCase = lowerCase;
          lodash2.lowerFirst = lowerFirst;
          lodash2.lt = lt;
          lodash2.lte = lte;
          lodash2.max = max;
          lodash2.maxBy = maxBy;
          lodash2.mean = mean;
          lodash2.meanBy = meanBy;
          lodash2.min = min;
          lodash2.minBy = minBy;
          lodash2.stubArray = stubArray;
          lodash2.stubFalse = stubFalse;
          lodash2.stubObject = stubObject;
          lodash2.stubString = stubString;
          lodash2.stubTrue = stubTrue;
          lodash2.multiply = multiply;
          lodash2.nth = nth;
          lodash2.noConflict = noConflict;
          lodash2.noop = noop;
          lodash2.now = now;
          lodash2.pad = pad;
          lodash2.padEnd = padEnd;
          lodash2.padStart = padStart;
          lodash2.parseInt = parseInt2;
          lodash2.random = random;
          lodash2.reduce = reduce;
          lodash2.reduceRight = reduceRight;
          lodash2.repeat = repeat;
          lodash2.replace = replace;
          lodash2.result = result;
          lodash2.round = round;
          lodash2.runInContext = runInContext2;
          lodash2.sample = sample;
          lodash2.size = size;
          lodash2.snakeCase = snakeCase;
          lodash2.some = some;
          lodash2.sortedIndex = sortedIndex;
          lodash2.sortedIndexBy = sortedIndexBy;
          lodash2.sortedIndexOf = sortedIndexOf;
          lodash2.sortedLastIndex = sortedLastIndex;
          lodash2.sortedLastIndexBy = sortedLastIndexBy;
          lodash2.sortedLastIndexOf = sortedLastIndexOf;
          lodash2.startCase = startCase;
          lodash2.startsWith = startsWith;
          lodash2.subtract = subtract;
          lodash2.sum = sum;
          lodash2.sumBy = sumBy;
          lodash2.template = template;
          lodash2.times = times;
          lodash2.toFinite = toFinite;
          lodash2.toInteger = toInteger;
          lodash2.toLength = toLength;
          lodash2.toLower = toLower;
          lodash2.toNumber = toNumber;
          lodash2.toSafeInteger = toSafeInteger;
          lodash2.toString = toString;
          lodash2.toUpper = toUpper;
          lodash2.trim = trim;
          lodash2.trimEnd = trimEnd;
          lodash2.trimStart = trimStart;
          lodash2.truncate = truncate;
          lodash2.unescape = unescape;
          lodash2.uniqueId = uniqueId;
          lodash2.upperCase = upperCase;
          lodash2.upperFirst = upperFirst;
          lodash2.each = forEach;
          lodash2.eachRight = forEachRight;
          lodash2.first = head;
          mixin(lodash2, function() {
            var source = {};
            baseForOwn(lodash2, function(func, methodName) {
              if (!hasOwnProperty.call(lodash2.prototype, methodName)) {
                source[methodName] = func;
              }
            });
            return source;
          }(), { "chain": false });
          lodash2.VERSION = VERSION;
          arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
            lodash2[methodName].placeholder = lodash2;
          });
          arrayEach(["drop", "take"], function(methodName, index) {
            LazyWrapper.prototype[methodName] = function(n) {
              n = n === undefined$1 ? 1 : nativeMax(toInteger(n), 0);
              var result2 = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
              if (result2.__filtered__) {
                result2.__takeCount__ = nativeMin(n, result2.__takeCount__);
              } else {
                result2.__views__.push({
                  "size": nativeMin(n, MAX_ARRAY_LENGTH),
                  "type": methodName + (result2.__dir__ < 0 ? "Right" : "")
                });
              }
              return result2;
            };
            LazyWrapper.prototype[methodName + "Right"] = function(n) {
              return this.reverse()[methodName](n).reverse();
            };
          });
          arrayEach(["filter", "map", "takeWhile"], function(methodName, index) {
            var type = index + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
            LazyWrapper.prototype[methodName] = function(iteratee2) {
              var result2 = this.clone();
              result2.__iteratees__.push({
                "iteratee": getIteratee(iteratee2, 3),
                "type": type
              });
              result2.__filtered__ = result2.__filtered__ || isFilter;
              return result2;
            };
          });
          arrayEach(["head", "last"], function(methodName, index) {
            var takeName = "take" + (index ? "Right" : "");
            LazyWrapper.prototype[methodName] = function() {
              return this[takeName](1).value()[0];
            };
          });
          arrayEach(["initial", "tail"], function(methodName, index) {
            var dropName = "drop" + (index ? "" : "Right");
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
            if (typeof path == "function") {
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
            var result2 = this;
            if (result2.__filtered__ && (start > 0 || end < 0)) {
              return new LazyWrapper(result2);
            }
            if (start < 0) {
              result2 = result2.takeRight(-start);
            } else if (start) {
              result2 = result2.drop(start);
            }
            if (end !== undefined$1) {
              end = toInteger(end);
              result2 = end < 0 ? result2.dropRight(-end) : result2.take(end - start);
            }
            return result2;
          };
          LazyWrapper.prototype.takeRightWhile = function(predicate) {
            return this.reverse().takeWhile(predicate).reverse();
          };
          LazyWrapper.prototype.toArray = function() {
            return this.take(MAX_ARRAY_LENGTH);
          };
          baseForOwn(LazyWrapper.prototype, function(func, methodName) {
            var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash2[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
            if (!lodashFunc) {
              return;
            }
            lodash2.prototype[methodName] = function() {
              var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee2 = args[0], useLazy = isLazy || isArray(value);
              var interceptor = function(value2) {
                var result3 = lodashFunc.apply(lodash2, arrayPush([value2], args));
                return isTaker && chainAll ? result3[0] : result3;
              };
              if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
                isLazy = useLazy = false;
              }
              var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
              if (!retUnwrapped && useLazy) {
                value = onlyLazy ? value : new LazyWrapper(this);
                var result2 = func.apply(value, args);
                result2.__actions__.push({ "func": thru, "args": [interceptor], "thisArg": undefined$1 });
                return new LodashWrapper(result2, chainAll);
              }
              if (isUnwrapped && onlyLazy) {
                return func.apply(this, args);
              }
              result2 = this.thru(interceptor);
              return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
            };
          });
          arrayEach(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
            var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
            lodash2.prototype[methodName] = function() {
              var args = arguments;
              if (retUnwrapped && !this.__chain__) {
                var value = this.value();
                return func.apply(isArray(value) ? value : [], args);
              }
              return this[chainName](function(value2) {
                return func.apply(isArray(value2) ? value2 : [], args);
              });
            };
          });
          baseForOwn(LazyWrapper.prototype, function(func, methodName) {
            var lodashFunc = lodash2[methodName];
            if (lodashFunc) {
              var key = lodashFunc.name + "";
              if (!hasOwnProperty.call(realNames, key)) {
                realNames[key] = [];
              }
              realNames[key].push({ "name": methodName, "func": lodashFunc });
            }
          });
          realNames[createHybrid(undefined$1, WRAP_BIND_KEY_FLAG).name] = [{
            "name": "wrapper",
            "func": undefined$1
          }];
          LazyWrapper.prototype.clone = lazyClone;
          LazyWrapper.prototype.reverse = lazyReverse;
          LazyWrapper.prototype.value = lazyValue;
          lodash2.prototype.at = wrapperAt;
          lodash2.prototype.chain = wrapperChain;
          lodash2.prototype.commit = wrapperCommit;
          lodash2.prototype.next = wrapperNext;
          lodash2.prototype.plant = wrapperPlant;
          lodash2.prototype.reverse = wrapperReverse;
          lodash2.prototype.toJSON = lodash2.prototype.valueOf = lodash2.prototype.value = wrapperValue;
          lodash2.prototype.first = lodash2.prototype.head;
          if (symIterator) {
            lodash2.prototype[symIterator] = wrapperToIterator;
          }
          return lodash2;
        };
        var _ = runInContext();
        if (freeModule) {
          (freeModule.exports = _)._ = _;
          freeExports._ = _;
        } else {
          root._ = _;
        }
      }).call(commonjsGlobal);
    })(lodash, lodash.exports);

    const mergeOptions = (opt, defaultOpt) => {
      if (!opt)
        return defaultOpt;
      return lodash.exports.defaultsDeep({}, opt || {}, defaultOpt);
    };
    const obj2Array = (obj, pKey = "") => {
      if (!lodash.exports.isObject(obj) && !lodash.exports.isArray(obj)) {
        console.warn("obj should be an object");
        return [];
      }
      const arr = Object.keys(obj).map((key) => ({
        key,
        pKey,
        isParent: false,
        value: ""
      }));
      arr.forEach((item) => {
        const { key, pKey: pKey2 = "" } = item;
        const itemValue = obj[key];
        if (lodash.exports.isObject(itemValue)) {
          item.isParent = true;
          arr.push(...obj2Array(itemValue, `${pKey2 ? pKey2 + "-" : ""}${key}`));
        } else
          item.value = itemValue;
      });
      return arr;
    };
    const setStyleProperty = (source, el, keys = [], filterFn = void 0) => {
      if (!lodash.exports.isObject(source))
        throw TypeError(`source is not an object`);
      if (!lodash.exports.isElement(el))
        throw TypeError(`el is ${el}`);
      if (!lodash.exports.isArray(keys))
        throw TypeError(`keys is not an array`);
      const target = {};
      if (!keys.length)
        keys = Object.keys(source);
      keys.forEach((key) => {
        if (source.hasOwnProperty(key))
          target[key] = source[key];
      });
      let optionsArr = obj2Array(target).filter(
        (item) => !item.isParent && item.key !== "type" && ["string", "number"].includes(typeof item.value)
      );
      if (filterFn) {
        optionsArr = filterFn(optionsArr);
      }
      optionsArr.forEach((item) => {
        const { pKey, key, value } = item;
        el.style.setProperty(`--${[pKey, key].filter((k) => k).join("-")}`, value + "");
      });
    };
    const filterStyleProperty = (source) => {
      if (!(lodash.exports.isObject(source) && !lodash.exports.isArray(source)))
        return source;
      const r = {};
      Object.keys(source).forEach((key) => {
        const value = source[key];
        if (lodash.exports.isObject(value) && !lodash.exports.isArray(value)) {
          let r2 = {};
          if (lodash.exports.isBoolean(value["show"]) && !value["show"])
            return;
          else if (value["type"]) {
            Object.keys(value).forEach((tKey) => {
              if (!["show", "type", value["type"]].includes(tKey))
                return;
              r2[tKey] = filterStyleProperty(value[tKey]);
            });
          } else {
            r2 = filterStyleProperty(value);
          }
          if (Object.keys(r2).length)
            r[key] = r2;
        } else
          r[key] = value;
      });
      return r != null ? r : {};
    };
    const clearStyleProperty = (options, el) => {
      if (!lodash.exports.isElement(el))
        throw TypeError(`el is ${el}`);
      const optionsArr = obj2Array(options).filter(
        (item) => !item.isParent && ["string", "number"].includes(typeof item.value) && item.key !== "type"
      );
      optionsArr.forEach((item) => {
        el.style.removeProperty(`--${item.pKey}${item.pKey ? "-" : ""}${item.key}`);
      });
    };
    const getValueByKeyStr = (key, suffixKey = "show", source = {}) => {
      source = source != null ? source : {};
      const keys = key.split(".").filter((k) => k);
      suffixKey && keys.push(...suffixKey.split("."));
      if (lodash.exports.isEmpty(keys))
        return void 0;
      let r = source[keys.shift()];
      try {
        for (let key2 of keys) {
          r = r[key2];
        }
        return r;
      } catch (error) {
        return void 0;
      }
    };
    const findDiff = (source = {}, comparison = {}) => {
      if (!lodash.exports.isObject(source) || !lodash.exports.isObject(comparison)) {
        console.error("source or comparison is not an object");
        return null;
      }
      const diff = {};
      let vChildren;
      for (let key in source) {
        if (lodash.exports.isObject(source[key]) && lodash.exports.isObject(comparison[key]) && source[key] && comparison[key]) {
          vChildren = findDiff(source[key], comparison[key]);
          if (!lodash.exports.isEmpty(vChildren))
            diff[key] = vChildren;
        } else if (source[key] !== comparison[key])
          diff[key] = source[key];
      }
      return diff;
    };

    const isUrl = (str) => {
      const pattern = new RegExp(
        "^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$",
        "i"
      );
      return pattern.test(str);
    };

    const useStyleProps = (params) => {
      const refCpn = vue.ref(null);
      const currentStyleProps = vue.ref({});
      const f = (options, notMerge = false, defaultProps = params.defaultStyleProps) => {
        return filterStyleProperty(!notMerge ? mergeOptions(options, defaultProps) : options);
      };
      const v = (key, suffixKey = "show", source = currentStyleProps.value) => getValueByKeyStr(key, suffixKey, source);
      const updateStyleProperty = (opt, currentOpt, cb) => {
        const newOpt = f(opt, false, currentOpt != null ? currentOpt : params.defaultStyleProps);
        if (cb)
          return cb(newOpt);
        loadStyleProperty(newOpt, currentStyleProps.value);
      };
      const loadStyleProperty = (style, oldStyle, callback) => {
        const nStyle = f(style != null ? style : vue.toRaw(params.defaultStyleProps));
        const oStyle = oldStyle ? f(vue.toRaw(oldStyle), true) : {};
        currentStyleProps.value = nStyle;
        const clearedStyle = findDiff(oStyle, nStyle) || {};
        const currentStyle = findDiff(nStyle, oStyle) || {};
        vue.nextTick(() => {
          try {
            if (refCpn.value) {
              clearStyleProperty(clearedStyle, refCpn.value);
              setStyleProperty(currentStyle, refCpn.value, [], (optionsArr) => {
                return optionsArr.map((item) => ({
                  ...item,
                  value: params["cfg"] && params["cfg"]["formatUrl"] && isUrl(item.value + "") ? `url(${item.value})` : item.value
                }));
              });
            }
            callback && callback();
          } catch (error) {
          }
        });
        return currentStyle;
      };
      return {
        refCpn,
        f,
        v,
        currentStyleProps,
        loadStyleProperty,
        clearStyleProperty,
        setStyleProperty,
        updateStyleProperty
      };
    };

    var _export_sfc = (sfc, props) => {
      const target = sfc.__vccOpts || sfc;
      for (const [key, val] of props) {
        target[key] = val;
      }
      return target;
    };

    const _sfc_main$7 = vue.defineComponent({
      name: "VIButton",
      props: buttonProps,
      emits: ["click"],
      expose: ["setStyleProperty"],
      directives: { ripple: Ripple },
      setup(props, ctx) {
        const { refCpn, currentStyleProps, v, loadStyleProperty, updateStyleProperty } = useStyleProps({
          defaultStyleProps: buttonStyleProps
        });
        const { n, classes } = createNamespace("button");
        const clickHandler = (e) => {
          props.modelValue.active = !props.modelValue.active;
          const t = vue.toRaw(props.modelValue);
          ctx.emit("click", t);
        };
        const showText = vue.computed(() => {
          return props.showText;
        });
        const showIcon = vue.computed(() => {
          return props.showIcon;
        });
        const showRipple = vue.computed(() => {
          return props.ripple;
        });
        vue.watch(
          () => props.styleProps,
          (nVal) => {
            loadStyleProperty(nVal, currentStyleProps.value);
          },
          {
            deep: true,
            immediate: true
          }
        );
        const setStyleProperty = (opt) => updateStyleProperty(opt, props.styleProps);
        return {
          n,
          classes,
          props,
          refCpn,
          showText,
          showIcon,
          showRipple,
          clickHandler,
          setStyleProperty
        };
      }
    });
    function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
      const _directive_ripple = vue.resolveDirective("ripple");
      return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
        ref: "refCpn",
        class: vue.normalizeClass(
          _ctx.classes(
            "vi-box",
            _ctx.n(),
            _ctx.props.size,
            [_ctx.props.showIcon, "showIcon"],
            [_ctx.props.modelValue.active, "active"]
          )
        ),
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.clickHandler && _ctx.clickHandler(...args))
      }, [
        vue.createElementVNode("div", {
          class: vue.normalizeClass(_ctx.classes("vi-box", _ctx.n("-warper")))
        }, [
          _ctx.showIcon ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 0,
            class: vue.normalizeClass(_ctx.classes("vi-box", _ctx.n("-icon")))
          }, null, 2)) : vue.createCommentVNode("v-if", true),
          _ctx.showText ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 1,
            class: vue.normalizeClass(_ctx.classes("vi-box", _ctx.n("-text")))
          }, vue.toDisplayString(_ctx.props.modelValue.text), 3)) : vue.createCommentVNode("v-if", true)
        ], 2)
      ], 2)), [
        [_directive_ripple, _ctx.showRipple]
      ]);
    }
    var Button = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7], ["__file", "button.vue"]]);

    const VIButton = withInstall(Button);

    function sizeValidator(size) {
      return ["normal", "mini", "small", "large"].includes(size);
    }
    const cardButtonProns = {
      type: {
        type: String,
        default: "default"
      },
      size: {
        type: String,
        default: "normal",
        validator: sizeValidator
      },
      icon: {
        type: String,
        default: ""
      },
      bg: {
        type: Boolean,
        default: false
      },
      bold: {
        type: Boolean,
        default: false
      },
      shadow: {
        type: Boolean,
        default: true
      },
      disabled: {
        type: Boolean,
        default: false
      },
      ripple: {
        type: Boolean,
        default: true
      }
    };

    const { n: n$p, classes: classes$o } = createNamespace("card-button");
    const _sfc_main$6 = vue.defineComponent({
      name: "VICardButton",
      props: cardButtonProns,
      emits: ["click"],
      directives: { ripple: Ripple },
      setup(props, ctx) {
        const handleClick = (e) => {
          ctx.emit("click", e);
        };
        return {
          n: n$p,
          classes: classes$o,
          handleClick
        };
      }
    });
    function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
      const _directive_ripple = vue.resolveDirective("ripple");
      return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(
          _ctx.classes(
            "vi-box",
            _ctx.n(),
            _ctx.n(`-${_ctx.size}`),
            [_ctx.bg, `${_ctx.n("-bg")} ${_ctx.n(`-bg-${_ctx.type}`)}`, _ctx.n(`-color-${_ctx.type}`)],
            [_ctx.shadow, "vi-shadow"]
          )
        ),
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
      }, [
        vue.withDirectives(vue.createElementVNode("div", {
          class: vue.normalizeClass(_ctx.classes("icon", _ctx.n(`-icon`)))
        }, [
          vue.createElementVNode("i", {
            class: vue.normalizeClass(_ctx.icon)
          }, null, 2)
        ], 2), [
          [vue.vShow, _ctx.icon != ""]
        ]),
        vue.createElementVNode("div", {
          class: vue.normalizeClass(_ctx.classes("label", _ctx.n(`-text`), [_ctx.bold, _ctx.n(`-text-bold`)]))
        }, [
          vue.renderSlot(_ctx.$slots, "label")
        ], 2),
        vue.createElementVNode("div", {
          class: vue.normalizeClass(_ctx.classes("descr", _ctx.n(`-descr`)))
        }, [
          vue.renderSlot(_ctx.$slots, "descr")
        ], 2)
      ], 2)), [
        [_directive_ripple, { disabled: _ctx.disabled || !_ctx.ripple }]
      ]);
    }
    var CardButton = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6], ["__file", "card-button.vue"]]);

    const VICardButton = withInstall(CardButton, "card-button");

    const colProns = {
      span: {
        type: Number,
        default: 24
      }
    };

    const { n: n$o, classes: classes$n } = createNamespace("col");
    const _sfc_main$5 = vue.defineComponent({
      name: "VICol",
      props: colProns,
      setup() {
        const space = vue.inject("gutter") || 24;
        return {
          n: n$o,
          classes: classes$n,
          space
        };
      }
    });
    function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(_ctx.classes(_ctx.n(), "vi-box", _ctx.n(`-${_ctx.span}`))),
        style: vue.normalizeStyle({
          paddingRight: _ctx.space / 2 + "px",
          paddingLeft: _ctx.space / 2 + "px",
          paddingTop: _ctx.space / 2 + "px",
          paddingBottom: _ctx.space / 2 + "px"
        })
      }, [
        vue.createElementVNode("div", {
          class: vue.normalizeClass(_ctx.classes(_ctx.n(`-child`)))
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 2)
      ], 6);
    }
    var Col = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__file", "col.vue"]]);

    const VICol = withInstall(Col);

    const labelProns = {
      text: {
        type: String,
        default: ""
      },
      size: {
        type: [Number, String],
        default: 12
      },
      color: {
        type: [String, Array],
        default: "#fff"
      },
      bold: {
        type: Boolean,
        default: true
      },
      block: {
        type: Boolean,
        default: true
      },
      align: {
        type: String,
        default: "center"
      },
      data: {
        type: Object,
        default: {}
      },
      duration: {
        type: [String, Number],
        default: (value) => {
          return value.duration * 1 < 1.2 ? 1.2 : value.duration;
        }
      }
    };

    const { n: n$n, classes: classes$m } = createNamespace("label");
    const _sfc_main$4 = vue.defineComponent({
      name: "VILabel",
      props: labelProns,
      emits: ["click"],
      directives: { ripple: Ripple },
      setup(props, ctx) {
        const label = vue.ref();
        const styleComputed = vue.computed(() => {
          const css = {};
          return css;
        });
        const createDom = (text) => {
          const o = document.createElement("div");
          o.className = `vi-label-text vi-label-text-${props.align}`;
          if (lodash.exports.isArray(props.color)) {
            o.className += " gradient";
            o.style.backgroundImage = `linear-gradient(${props.color[2] || 180}deg, ${props.color[0] || "#fff"}, ${props.color[1] || "#fff"})`;
            o.style.animationDuration = `${props.duration}s`;
          } else {
            o.style.color = props.color;
          }
          o.innerText = text;
          o.className += o.className != "" ? " new" : "new";
          o.addEventListener(
            "animationend",
            function() {
              const dom = label.value.children[0];
              o.className = o.className.replace("new", "cur");
              if (dom != this) {
                label.value.removeChild(dom);
              }
              label.value.className = label.value.className.replace(" animiation", "");
            },
            false
          );
          o.addEventListener("click", function() {
            ctx.emit("click", JSON.parse(JSON.stringify(props.data)));
          });
          label.value.className += " animiation";
          label.value.appendChild(o);
        };
        vue.watch(
          () => props.text,
          (newProps) => {
            createDom(newProps);
          }
        );
        vue.onMounted(() => {
          createDom(props.text);
        });
        return {
          n: n$n,
          classes: classes$m,
          label,
          styleComputed
        };
      }
    });
    function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
      return vue.openBlock(), vue.createElementBlock("div", {
        ref: "label",
        class: vue.normalizeClass(_ctx.classes(_ctx.n(), "vi-box", _ctx.n(`-${_ctx.size}`), [_ctx.bold, _ctx.n("-bold")], [_ctx.block, _ctx.n("-block")]))
      }, null, 2);
    }
    var Label = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__file", "label.vue"]]);

    const VILabel = withInstall(Label);

    const rowProns = {
      gutter: {
        type: [String, Number, Array],
        default: 10
      },
      justify: {
        type: String,
        default: "flex-start"
      },
      align: {
        type: String,
        default: "flex-start"
      }
    };

    const { n: n$m, classes: classes$l } = createNamespace("row");
    const _sfc_main$3 = vue.defineComponent({
      name: "VIRow",
      props: rowProns,
      setup(props) {
        const gutter = vue.ref(props.gutter);
        vue.provide("gutter", gutter);
        const styleComputed = vue.computed(() => {
          return {
            "align-items": props.align,
            "justify-content": props.justify
          };
        });
        return {
          n: n$m,
          classes: classes$l,
          styleComputed
        };
      }
    });
    function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(_ctx.classes(_ctx.n(), "vi-box")),
        style: vue.normalizeStyle(_ctx.styleComputed)
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 6);
    }
    var Row = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "row.vue"]]);

    const VIRow = withInstall(Row);

    var Components = [VIButton, VICardButton, VICol, VILabel, VIRow];

    const INSTALLED_KEY = Symbol("INSTALLED_KEY");
    const makeInstaller = (components = []) => {
      const install = (app) => {
        if (app[INSTALLED_KEY])
          return;
        app[INSTALLED_KEY] = true;
        components.forEach((c) => app.use(c));
      };
      return {
        install
      };
    };

    var installer = makeInstaller([...Components, ...Plugins]);

    const SELECTV2_INJECTION_KEY = Symbol("select-v2");

    const change = function(el, binding) {
      for (let [key, value] of Object.entries(binding.value)) {
        el.style.setProperty("--" + key, value);
      }
    };
    const Css = {
      mounted(el, binding) {
        change(el, binding);
      },
      updated(el, binding) {
        change(el, binding);
      },
      install(app) {
        app.directive("Css", this);
      }
    };

    const selectProps = {
      modelValue: {
        type: [String, Number, Array],
        default: ""
      },
      mode: {
        type: String,
        default: "single"
      },
      list: {
        type: Array,
        default: () => []
      },
      itemLayout: {
        type: String,
        default: "co1"
      },
      clearable: Boolean,
      tooltip: Boolean,
      showMore: Boolean,
      search: Boolean,
      searchImg: {
        type: String,
        default: "https://cdn-upload.datav.aliyun.com/upload/download/1666233796787-Qfh6D-SR.svg"
      },
      placeholder: {
        type: String,
        default: "\u8BF7\u9009\u62E9\u60A8\u9700\u8981\u7684\u9009\u9879o(*\uFFE3\u25BD\uFFE3*)\u30D6"
      },
      dynamicCss: {
        type: Object,
        default: () => {
          return {
            "input-box-shadow-x": "0",
            "input-box-shadow-y": "0",
            "input-box-shadow-blur": "0",
            "input-box-shadow-spread": "1",
            "input-box-shadow-color": "#dcdfe6",
            "input-hover-box-shadow-x": "0",
            "input-hover-box-shadow-y": "0",
            "input-hover-box-shadow-blur": "0",
            "input-hover-box-shadow-spread": "1",
            "input-hover-box-shadow-color": "#85a2dd",
            "input-active-box-shadow-x": "0",
            "input-active-box-shadow-y": "0",
            "input-active-box-shadow-blur": "0",
            "input-active-box-shadow-spread": "1",
            "input-active-box-shadow-color": "rgb(0, 94, 255)",
            "input-border-radius": "4",
            "input-line-padding-t": "0",
            "input-line-padding-r": "8",
            "input-line-padding-b": "0",
            "input-line-padding-l": "8",
            "input-bg-color": "rgba(255,255,255)",
            "input-fo-color": "#606266",
            "input-fo-size": "12",
            "input-fo-weight": "600",
            "input-placeholder-fo-color": "gray",
            "input-line-height": "30",
            "input-width": "200",
            "input-text-alight": "start",
            "input-icon-width": "12",
            "input-icon-color": "#000",
            "tag-height": "30",
            "tag-max-width": "80",
            "tag-margin-t": "2",
            "tag-margin-r": "0",
            "tag-margin-b": "2",
            "tag-margin-l": "2",
            "tag-padding-t": "0",
            "tag-padding-r": "5",
            "tag-padding-b": "0",
            "tag-padding-l": "9",
            "tag-border-radius": "4",
            "tag-fo-color": "#909399",
            "tag-fo-size": "10",
            "tag-fo-weight": "500",
            "tag-bg-color": "#f0f2f5",
            "tag-close-size": "12",
            "tag-close-hover-bg-color": "gray",
            "tag-close-hover-fo-color": "#fff",
            "tag-tooltip-bg-color": "#3a81d2",
            "tag-tooltip-fo-color": "#fff",
            "tag-tooltip-fo-size": "12",
            "tag-tooltip-fo-weight": "500",
            "popper-bg-color": "#fff",
            "popper-height": "250",
            "popper-padding": "4",
            "popper-border-radius": "8",
            "popper-z-index": "999",
            "popper-box-shadow-x": "0",
            "popper-box-shadow-y": "0",
            "popper-box-shadow-blur": "12",
            "popper-box-shadow-spread": "0",
            "popper-box-shadow-color": "rgba(0, 0, 0, 0.12)",
            "popper-arrow-height": "6",
            "popper-option-fo-size": "12",
            "popper-option-fo-weight": "500",
            "popper-option-fo-color": "#64666a",
            "popper-option-height": "40",
            "popper-option-padding-lr": "8",
            "popper-option-hover-bg-color": "#f5f7fa",
            "popper-option-active-fo-color": "#409eff",
            "popper-option-active-fo-weight": "600",
            "popper-option-txt-margin-lr": "6",
            "popper-option-fo-alight": "start",
            "popper-search-line-height": "20",
            "popper-search-fo-size": "12",
            "popper-search-fo-color": "gray",
            "popper-search-fo-weight": "500",
            "popper-search-box-shadow-x": "0",
            "popper-search-box-shadow-y": "0",
            "popper-search-box-shadow-blur": "0",
            "popper-search-box-shadow-spread": "1",
            "popper-search-box-shadow-color": "#e0e3e9",
            "popper-search-border-radius": "4",
            "popper-search-padding-t": "4",
            "popper-search-padding-r": "10",
            "popper-search-padding-b": "4",
            "popper-search-padding-l": "30",
            "popper-search-inp-bg-color": "initial",
            "popper-search-icon-size": "14",
            "unfold-icon-height": "14",
            "unfold-icon-width": "14",
            "unfold-icon-hover-fo-color": "#00b7ff",
            "unfold-height": "300",
            "unfold-width": "600",
            "unfold-padding-t": "10",
            "unfold-padding-r": "10",
            "unfold-padding-b": "10",
            "unfold-padding-l": "10",
            "unfold-tag-border-radius": "4",
            "unfold-tag-bg-color": "rgb(229, 236, 234)",
            "unfold-tag-hover-bg-color": "#87ceeb",
            "unfold-tag-active-bg-color": "rgb(32, 183, 243)",
            "unfold-tag-padding-t": "8",
            "unfold-tag-padding-r": "16",
            "unfold-tag-padding-b": "8",
            "unfold-tag-padding-l": "16",
            "unfold-tag-margin-t": "0",
            "unfold-tag-margin-r": "8",
            "unfold-tag-margin-b": "8",
            "unfold-tag-margin-l": "0",
            "scroll-bar-width": "4",
            "scroll-bar-bg-color": "rgb(218, 218, 218)",
            "scroll-bar-hover-bg-color": "#87ceeb",
            "ani-transition": ".3"
          };
        }
      }
    };

    const {
      n: n$l,
      classes: classes$k
    } = createNamespace("select-v2-svg-icon");
    var VISelectV2SvgIcon = vue.defineComponent({
      name: "VISelectV2SvgIcon",
      emits: ["click"],
      props: {
        path: {
          type: String,
          default: `M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 
			764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 
			45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z`
        },
        height: {
          type: [String, Number],
          default: "12"
        },
        width: {
          type: [String, Number],
          default: "12"
        },
        modelValue: {
          type: [String, Number, Boolean],
          default: ""
        }
      },
      setup(props, ctx) {
        const handleClick = function(e) {
          ctx.emit("click", e);
        };
        const svg = function() {
          return vue.createVNode("svg", {
            "class": [classes$k(n$l()), "icon"],
            "height": props.height,
            "width": props.width,
            "viewBox": "0 0 1024 1024",
            "xmlns": "http://www.w3.org/2000/svg",
            "onClick": handleClick
          }, [vue.createVNode("path", {
            "fill": "currentColor",
            "d": props.path
          }, null)]);
        };
        return () => svg();
      }
    });

    const {
      n: n$k,
      classes: classes$j
    } = createNamespace("select-v2-input");
    var VISelectV2Input = vue.defineComponent({
      name: "VISelectV2Input",
      emits: ["focus", "blur", "click", "clear"],
      props: {
        active: {
          type: [Boolean, String],
          default: ""
        },
        placeholder: {
          type: String,
          default: "o(*\uFFE3\u25BD\uFFE3*)\u30D6"
        },
        iconHeight: {
          type: [Number, String],
          default: "12"
        },
        iconWidth: {
          type: [Number, String],
          default: "12"
        }
      },
      components: {
        "vi-select-v2-svg-icon": VISelectV2SvgIcon
      },
      setup(props, ctx) {
        const {
          currentSelect,
          clearable,
          cacheOptionList,
          mode
        } = vue.inject(SELECTV2_INJECTION_KEY);
        const arrowSvgPath = "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z";
        const closeSvgPath = "M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z";
        const data = vue.reactive({
          isHover: false
        });
        const handleInputClick = function(e) {
          ctx.emit("click", e);
        };
        const handleCloseIconClick = function(e) {
          currentSelect.value = "";
          ctx.emit("clear");
          e.stopPropagation();
        };
        const handleFocus = function(e) {
          ctx.emit("focus", e);
        };
        const handleBlur = function(e) {
          ctx.emit("blur", e);
        };
        const handleMouseEn = function(e) {
          data.isHover = true;
        };
        const handleMouseOu = function(e) {
          data.isHover = false;
        };
        const inputLabel = vue.computed(() => cacheOptionList.value[currentSelect.value]);
        return () => vue.createVNode("div", {
          "class": [classes$j(n$k(), props.active ? "active" : "")],
          "onClick": handleInputClick,
          "onMouseenter": handleMouseEn,
          "onMouseleave": handleMouseOu
        }, [vue.createVNode("input", {
          "class": [n$k("_inner")],
          "placeholder": props.placeholder,
          "onFocus": handleFocus,
          "onBlur": handleBlur,
          "value": inputLabel.value,
          "readonly": true
        }, null), data.isHover && currentSelect.value && clearable.value && mode.value == "single" ? vue.createVNode(vue.resolveComponent("vi-select-v2-svg-icon"), {
          "height": props.iconHeight,
          "width": props.iconWidth,
          "path": closeSvgPath,
          "onClick": handleCloseIconClick
        }, null) : vue.createVNode(vue.resolveComponent("vi-select-v2-svg-icon"), {
          "height": props.iconHeight,
          "width": props.iconWidth,
          "path": arrowSvgPath,
          "class": ["arrow", props.active ? "turnUp" : "turnDown"]
        }, null)]);
      }
    });

    const {
      n: n$j,
      classes: classes$i
    } = createNamespace("select-v2-dropdown");
    var VISelectV2DropDown = vue.defineComponent({
      name: "VISelectV2DropDown",
      emits: ["focus", "blur", "click"],
      props: ["active"],
      components: {
        "vi-svg-icon": VISelectV2SvgIcon
      },
      setup(props, ctx) {
        let {
          selectRef,
          mode,
          currentSelect
        } = vue.inject(SELECTV2_INJECTION_KEY);
        const data = vue.reactive({
          parentRect: {
            x: 0,
            y: 0
          },
          dropdownTop: "0"
        });
        const arrowRef = vue.ref();
        const dropDownRef = vue.ref();
        const reSetDropdownTop = () => {
          vue.nextTick(() => {
            data.dropdownTop = selectRef.value.clientHeight + 10 + "px";
          });
        };
        vue.onMounted(() => reSetDropdownTop());
        vue.watchEffect(() => {
          let val = currentSelect.value;
          if (mode.value == "multiple" && val) {
            setTimeout(() => {
              reSetDropdownTop();
            }, 200);
          }
        });
        return () => {
          var _a, _b;
          return vue.createVNode("div", {
            "class": [n$j("-popper"), props.active ? "active" : ""],
            "style": {
              top: data.dropdownTop
            }
          }, [vue.createVNode("div", {
            "ref": arrowRef,
            "class": [n$j("-arrow"), props.active ? "active" : ""]
          }, null), vue.createVNode("div", {
            "ref": dropDownRef,
            "class": [classes$i(n$j(), props.active ? "active" : "")]
          }, [vue.createVNode("div", {
            "class": [classes$i(n$j("_inner"))]
          }, [(_b = (_a = ctx.slots)["default"]) == null ? void 0 : _b.call(_a)])])]);
        };
      }
    });

    const {
      n: n$i,
      classes: classes$h
    } = createNamespace("select-v2-tag");
    var VISelectV2Tag = vue.defineComponent({
      name: "VISelectV2Tag",
      emits: ["click", "closeClick", "hover"],
      props: {
        label: {
          type: [Number, String],
          default: ""
        },
        value: {
          type: [Number, String],
          default: ""
        },
        tooltip: {
          type: [Boolean, String],
          default: false
        },
        height: {
          type: [Number, String],
          default: ""
        },
        width: {
          type: [Number, String],
          default: ""
        }
      },
      components: {
        "vi-svg-icon": VISelectV2SvgIcon
      },
      setup(props, ctx) {
        const {
          currentSelect
        } = vue.inject(SELECTV2_INJECTION_KEY);
        const closeSvgPath = "M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z";
        const handleCloseIconClick = function(e) {
          let arr = JSON.parse(JSON.stringify(currentSelect.value));
          try {
            arr.forEach((element, index) => {
              if (element.value == props.value) {
                arr.splice(index, 1);
                throw new Error();
              }
            });
          } catch (e2) {
          }
          currentSelect.value = arr;
          ctx.emit && ctx.emit("closeClick", {
            currentClose: {
              label: props.label,
              value: props.value
            },
            currentSelects: JSON.parse(JSON.stringify(arr))
          });
          e.stopPropagation();
        };
        return () => vue.createVNode("div", {
          "class": [classes$h(n$i()), props.tooltip ? "useToolTip" : ""],
          "data-txt": props.label
        }, [vue.createVNode("span", {
          "class": n$i("_span")
        }, [props.label]), vue.createVNode(vue.resolveComponent("vi-svg-icon"), {
          "path": closeSvgPath,
          "onClick": handleCloseIconClick,
          "height": props.height + "px",
          "width": props.width + "px"
        }, null)]);
      }
    });

    const {
      n: n$h,
      classes: classes$g
    } = createNamespace("scroll-bar");
    var VIScrollBar$1 = vue.defineComponent({
      name: "VIScrollBar",
      emits: ["focus", "blur", "click"],
      props: ["dynamicCss"],
      directives: {
        css: Css
      },
      setup(props, ctx) {
        let {
          cacheOptionList
        } = vue.inject(SELECTV2_INJECTION_KEY);
        const scrollBarRef = vue.ref();
        const thumbRef = vue.ref();
        const data = vue.reactive({
          realMargin: 0,
          realPadding: 0,
          viewHeight: 0,
          realHeight: 0,
          maxScrollBoxRange: 0,
          proportion: 0,
          scrollBarHeight: 0,
          maxScrollBarRange: 0,
          scrollBarMovePropor: 0,
          scrollBoxMovePropor: 0,
          translateY: 0,
          startY: 0,
          moveY: 0,
          _move: 0,
          mouseMoving: false
        });
        const init = function() {
          vue.nextTick(() => {
            let info = window.getComputedStyle(scrollBarRef.value.children[0]);
            data.realPadding = props.dynamicCss["popper-padding"] * 2;
            data.realHeight = info.height.replace("px", "") * 1;
            data.viewHeight = props.dynamicCss["popper-height"] * 1 - data.realPadding;
            data.maxScrollBoxRange = data.realHeight - data.viewHeight;
            data.proportion = Number((data.viewHeight / data.realHeight).toFixed(1));
            data.scrollBarHeight = data.viewHeight * data.proportion;
            data.maxScrollBarRange = data.viewHeight - data.scrollBarHeight;
            data.scrollBarMovePropor = data.maxScrollBarRange / data.maxScrollBoxRange;
            data.scrollBoxMovePropor = data.maxScrollBoxRange / data.maxScrollBarRange;
          });
        };
        vue.onMounted(() => {
          init();
        });
        vue.watch(() => cacheOptionList.value, () => {
          init();
        }, {
          deep: true,
          immediate: false
        });
        const isShowThumb = vue.computed(() => {
          return data.scrollBarHeight < data.realHeight;
        });
        const onScroll = function(e) {
          let scrollTop = e.target.scrollTop;
          thumbPosition(scrollTop);
        };
        const thumbMouseDown = function(e) {
          document.addEventListener("mousedown", documentMouseDown);
          document.addEventListener("mousemove", documentMouseMove);
        };
        const documentMouseDown = function(e) {
          data.mouseMoving = true;
          data.startY = e.clientY;
        };
        const documentMouseMove = function(e) {
          data.moveY = data.startY - e.clientY;
          scrollBoxPosition();
        };
        document.addEventListener("mouseup", () => {
          document.removeEventListener("mousemove", documentMouseMove);
          document.removeEventListener("mousedown", documentMouseDown);
          data.startY = 0;
          data.moveY = 0;
          if (data.mouseMoving) {
            data.translateY = data._move;
          }
          data.mouseMoving = false;
        });
        const thumbPosition = function(scrollTop) {
          if (data.mouseMoving)
            return;
          data.translateY = data.scrollBarMovePropor * scrollTop;
          thumbRef.value.style.transform = `translateY(${data.translateY}px)`;
        };
        const scrollBoxPosition = function() {
          let _move = 0;
          if (data.moveY < 0) {
            _move = data.translateY + Math.abs(data.moveY);
          } else if (data.moveY >= 0) {
            _move = data.translateY - Math.abs(data.moveY);
          }
          if (_move < 0) {
            _move = 0;
          }
          if (_move > data.maxScrollBarRange) {
            _move = data.maxScrollBarRange;
          }
          data._move = _move;
          thumbRef.value.style.transform = `translateY(${_move}px)`;
          scrollBarRef.value.scrollTop = Math.abs(data.scrollBoxMovePropor * _move);
        };
        return () => {
          var _a, _b;
          return vue.createVNode("div", {
            "class": [classes$g(n$h())]
          }, [vue.createVNode("div", {
            "class": n$h("left"),
            "ref": scrollBarRef,
            "onScroll": onScroll
          }, [(_b = (_a = ctx.slots)["default"]) == null ? void 0 : _b.call(_a)]), isShowThumb.value ? vue.createVNode("div", {
            "ref": thumbRef,
            "class": n$h("right"),
            "style": {
              height: data.scrollBarHeight + "px"
            },
            "onMousedown": thumbMouseDown
          }, null) : ""]);
        };
      }
    });

    const {
      n: n$g,
      classes: classes$f
    } = createNamespace("select-v2-unfold-dialog");
    var VISelectV2UnfoldDialog = vue.defineComponent({
      name: "VISelectV2UnfoldDialog",
      emits: ["click", "hide"],
      props: {
        "active": {
          type: Boolean,
          default: false
        }
      },
      setup(props, ctx) {
        const boxRef = vue.ref(null);
        const maskRef = vue.ref(null);
        const data = vue.reactive({
          visible: false,
          maskVisible: false,
          maskDisplay: "none"
        });
        const closeSvgPath = "M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z";
        const hideClick = function(e) {
          ctx.emit("hide", e);
        };
        const lockWheel = function(e) {
          if (e.target.classList.value.includes("select-v2")) {
            return;
          } else {
            e.preventDefault();
          }
        };
        vue.watchEffect(() => {
          if (props.active) {
            document.body.addEventListener("wheel", lockWheel, {
              passive: false
            });
            document.body.parentNode.style.overflowY = "hidden";
            data.maskDisplay = "block";
            setTimeout(() => {
              data.visible = true;
            }, 10);
          } else {
            document.body.removeEventListener("wheel", lockWheel, {
              passive: false
            });
            document.body.parentNode.style.overflowY = "auto";
            data.visible = false;
          }
        });
        vue.onMounted(() => {
          vue.nextTick(() => {
            maskRef.value.addEventListener("transitionend", () => {
              if (!props.active) {
                data.maskDisplay = "none";
              }
            });
          });
        });
        return () => {
          var _a, _b;
          return vue.createVNode("div", {
            "style": {
              "display": data.maskDisplay
            },
            "ref": boxRef,
            "class": [classes$f(n$g())]
          }, [vue.createVNode("div", {
            "class": ["mask", data.visible ? "active" : ""],
            "onClick": hideClick,
            "ref": maskRef
          }, null), vue.createVNode("div", {
            "class": [n$g("_wrapper"), data.visible ? "active" : ""]
          }, [vue.createVNode("div", {
            "class": [n$g("_inner")]
          }, [(_b = (_a = ctx.slots)["default"]) == null ? void 0 : _b.call(_a)]), props.active ? vue.createVNode("svg", {
            "class": n$g("--close"),
            "height": 12,
            "width": 12,
            "viewBox": "0 0 1024 1024",
            "xmlns": "http://www.w3.org/2000/svg",
            "onClick": hideClick
          }, [vue.createVNode("path", {
            "fill": "currentColor",
            "d": closeSvgPath
          }, null)]) : ""])]);
        };
      }
    });

    const {
      n: n$f,
      classes: classes$e
    } = createNamespace("select-v2-option");
    var selectOptipn = vue.defineComponent({
      name: "VISelectV2Option",
      emits: ["click"],
      props: ["label", "value"],
      components: {
        "vi-svg-icon": VISelectV2SvgIcon
      },
      setup(props, ctx) {
        const {
          currentSelect,
          currentSelectLabel,
          mode,
          dropDownVisible,
          cacheOptionList,
          selectedFn,
          deleteOptionItem
        } = vue.inject(SELECTV2_INJECTION_KEY);
        const handleClick = function() {
          if (mode.value == "single") {
            currentSelect.value = props.value;
            currentSelectLabel.value = props.label;
            dropDownVisible.value = false;
          } else if (mode.value == "multiple") {
            let arr = JSON.parse(JSON.stringify(currentSelect.value));
            let flag = false;
            try {
              arr.forEach((element, index) => {
                if (element.value == props.value) {
                  arr.splice(index, 1);
                  flag = true;
                  throw new Error();
                }
              });
            } catch (e) {
            }
            if (!flag) {
              arr.push({
                label: props.label,
                value: props.value
              });
            }
            currentSelect.value = arr;
          }
          selectedFn({
            label: props.label,
            value: props.value
          });
        };
        vue.watchEffect(() => {
          cacheOptionList.value = {
            key: props.label,
            value: props.value
          };
        });
        vue.onMounted(() => {
          cacheOptionList.value = {
            key: props.label,
            value: props.value
          };
        });
        vue.onUnmounted(() => {
          deleteOptionItem(props.value);
        });
        const isActive = vue.computed(() => {
          if (mode.value == "single") {
            return currentSelect.value == props.value;
          } else if (mode.value == "multiple") {
            let flag = false;
            try {
              currentSelect.value.forEach((i) => {
                if (flag = i.value == props.value) {
                  throw new Error();
                }
              });
            } catch (e) {
            }
            return flag;
          }
        });
        return () => vue.createVNode("li", {
          "class": [classes$e(n$f()), isActive.value ? "active" : ""],
          "onClick": handleClick
        }, [vue.createVNode("div", {
          "class": "txt"
        }, [props.label])]);
      }
    });

    const {
      n: n$e,
      classes: classes$d
    } = createNamespace("select-v2");
    var SelectV2 = vue.defineComponent({
      name: "VISelectV2",
      emits: ["focus", "blur", "update:modelValue", "listChange", "handleSelected", "handleClear"],
      props: selectProps,
      directives: {
        css: Css
      },
      components: {
        "vi-select-v2-input": VISelectV2Input,
        "vi-select-v2-drop-down": VISelectV2DropDown,
        "vi-scroll-bar": VIScrollBar$1,
        "vi-select-v2-tag": VISelectV2Tag,
        "vi-select-v2-svg-icon": VISelectV2SvgIcon,
        "vi-select-v2-unfold-dialog": VISelectV2UnfoldDialog,
        "vi-select-v2-option": selectOptipn
      },
      setup(props, ctx) {
        var _a;
        const vnodeProps = ((_a = vue.getCurrentInstance()) == null ? void 0 : _a.vnode.props) || {};
        const hasVModelListener = "onUpdate:modelValue" in vnodeProps;
        const createUUID = () => {
          return "xxxxxxxx".replace(/[xy]/g, function(a) {
            var b = 0 | 16 * Math.random(), c = "x" == a ? b : 8 | 3 & b;
            return c.toString(16);
          });
        };
        const selectRef = vue.ref();
        const inputRef = vue.ref();
        const tagListRef = vue.ref();
        const data = vue.reactive({
          uuid: createUUID(),
          dropDownVisible: false,
          dialogVisible: false,
          softFocus: false,
          currentSelectLabel: "",
          OptionList: {},
          list: [],
          __inputPlaceholder: "",
          searchLabel: "",
          searchValue: ""
        });
        const unfoldPath = "M290.816 774.144h167.936c12.288 0 20.48 8.192 20.48 20.48s-8.192 20.48-20.48 20.48h-219.136c-12.288 0-20.48-8.192-20.48-20.48v-2.048-206.848c0-12.288 8.192-20.48 20.48-20.48s20.48 8.192 20.48 20.48v163.84l210.944-198.656c8.192-8.192 20.48-8.192 28.672 0s8.192 20.48 0 28.672l-208.896 194.56z m462.848-524.288h-167.936c-12.288 0-20.48-8.192-20.48-20.48s8.192-20.48 20.48-20.48h219.136c12.288 0 20.48 8.192 20.48 20.48v208.896c0 12.288-8.192 20.48-20.48 20.48s-20.48-8.192-20.48-20.48v-163.84l-210.944 198.656c-8.192 8.192-20.48 8.192-28.672 0s-8.192-20.48 0-28.672l208.896-194.56z m188.416 323.584c0 12.288-8.192 20.48-20.48 20.48s-20.48-8.192-20.48-20.48v-389.12c0-34.816-26.624-61.44-61.44-61.44h-655.36c-34.816 0-61.44 26.624-61.44 61.44v655.36c0 34.816 26.624 61.44 61.44 61.44h655.36c34.816 0 61.44-26.624 61.44-61.44v-94.208c0-12.288 8.192-20.48 20.48-20.48s20.48 8.192 20.48 20.48v94.208c0 57.344-45.056 102.4-102.4 102.4h-655.36c-57.344 0-102.4-45.056-102.4-102.4v-655.36c0-57.344 45.056-102.4 102.4-102.4h655.36c57.344 0 102.4 45.056 102.4 102.4v389.12z";
        const searchPath = "M955.069071 864.311021 740.015134 649.258107c-3.752464-3.751441-8.841366-5.860475-14.149255-5.860475-5.306866 0-10.395768 2.108011-14.149255 5.860475l-16.692171 16.692171-38.34226-38.34226c53.03796-59.810201 85.298711-138.442072 85.298711-224.478588 0-186.774871-151.952784-338.727655-338.727655-338.727655S64.527642 216.35456 64.527642 403.12943c0 186.775894 151.952784 338.728678 338.727655 338.728678 86.36909 0 165.276231-32.510438 225.170343-85.913718l38.303374 38.303374-17.34504 17.34504c-7.812943 7.813966-7.812943 20.48352 0 28.297486l215.051891 215.052914c3.753487 3.751441 8.841366 5.860475 14.149255 5.860475 5.306866 0 10.395768-2.108011 14.149255-5.860475l62.334697-62.334697C962.883037 884.794541 962.883037 872.124987 955.069071 864.311021zM104.546078 403.12943c0-164.709319 133.9999-298.709219 298.709219-298.709219s298.709219 133.9999 298.709219 298.709219S567.964616 701.839673 403.255297 701.839673 104.546078 567.838749 104.546078 403.12943zM878.585119 912.496463 691.829691 725.741036l34.036187-34.036187 186.755428 186.755428L878.585119 912.496463z";
        const cache = {
          popperHeight: "0",
          inputLineHeight: "0"
        };
        const mousedown = function(e) {
          let softFocus = false;
          for (let i = 0; i < e.path.length; i++) {
            let item = e.path[i];
            if (item.classList && item.classList.value) {
              let _class = item.getAttribute("class");
              if (_class.includes("-select-v2") && item.dataset.id == data.uuid) {
                softFocus = true;
                break;
              }
            }
          }
          if (!softFocus) {
            blur();
          }
        };
        document.addEventListener("mousedown", mousedown);
        const blur = function() {
          data.dropDownVisible = false;
        };
        const getDomInfo = function(ref2) {
          return new Promise((res, rej) => {
            res(vue.nextTick(() => {
              return window.getComputedStyle(ref2.value);
            }));
          });
        };
        const selectedFn = function(v) {
          if (props.mode == "single") {
            ctx.emit && ctx.emit("handleSelected", v);
          } else {
            vue.nextTick(() => {
              ctx.emit && ctx.emit("handleSelected", {
                currentSelected: v,
                currentSelects: JSON.parse(JSON.stringify(props.modelValue))
              });
            });
          }
        };
        const deleteOptionItem = function(value) {
          delete data.OptionList[value];
        };
        const drowDownItemLayout = function(key) {
          if (key == "co1")
            return "";
          if (key == "auto")
            return "display:flex;flex-wrap: wrap;";
          if (key == "co2")
            return "display:flex;flex-wrap: wrap;";
          if (key == "co3")
            return "display:flex;flex-wrap: wrap;";
          if (key == "co4")
            return "display:flex;flex-wrap: wrap;";
          if (key == "co5")
            return "display:flex;flex-wrap: wrap;";
          if (key == "co6")
            return "display:flex;flex-wrap: wrap;";
          if (key == "co7")
            return "display:flex;flex-wrap: wrap;";
        };
        const inputClick = function(e) {
          data.dropDownVisible = !data.dropDownVisible;
        };
        const inputFocus = function(e) {
        };
        const inputBlur = function(e) {
        };
        const unfoldClick = function(e) {
          data.dropDownVisible = false;
          data.dialogVisible = true;
        };
        const inputClear = function() {
          ctx.emit && ctx.emit("handleClear");
        };
        const dialogHide = function(e) {
          data.dialogVisible = false;
        };
        const tagClick = function(label, value) {
          if (props.mode == "single") {
            currentSelectBridge.value = value;
            currentSelectLabelBridge.value = label;
            cacheOptionListBridge.value = {
              key: label,
              value
            };
          } else if (props.mode == "multiple") {
            let arr = JSON.parse(JSON.stringify(currentSelectBridge.value));
            let flag = false;
            try {
              arr.forEach((element, index) => {
                if (element.value == value) {
                  arr.splice(index, 1);
                  flag = true;
                  throw new Error();
                }
              });
            } catch (e) {
            }
            if (!flag) {
              arr.push({
                label,
                value
              });
            }
            currentSelectBridge.value = arr;
          }
        };
        const tagClose = function(data2) {
          ctx.emit && ctx.emit("handleClear", data2);
        };
        const searchValueChange = function(e) {
          let v = e.target.value;
          let searchValue = {};
          data.list.forEach((i) => i.label.includes(v) ? searchValue[i.value] = i.label : "");
          data.searchValue = searchValue;
          data.searchLabel = v;
          vue.nextTick(() => {
            cacheOptionListBridge.value;
          });
        };
        vue.watch(() => props.list, () => {
          data.list = JSON.parse(JSON.stringify(props.list));
        }, {
          deep: true,
          immediate: true
        });
        const currentSelectBridge = vue.computed({
          get() {
            if (props.mode == "multiple") {
              (async () => {
                const {
                  height
                } = await getDomInfo(tagListRef);
                props.dynamicCss["input-line-height"] = height.replace("px", "") * 1;
                placeholderBridge.value = props.modelValue.length > 0 ? " " : props.placeholder;
                if (props.modelValue.length <= 1) {
                  props.dynamicCss["input-line-height"] = cache.inputLineHeight;
                }
              })();
            }
            return props.modelValue;
          },
          set(val) {
            if (hasVModelListener) {
              ctx.emit("update:modelValue", val);
            }
          }
        });
        const currentSelectLabelBridge = vue.computed({
          get() {
            return data.currentSelectLabel;
          },
          set(val) {
            data.currentSelectLabel = val;
          }
        });
        const cacheOptionListBridge = vue.computed({
          get() {
            let len = Object.keys(data.OptionList).length;
            if (len <= 5 && len > 0) {
              if (!data.searchValue) {
                if (props.search)
                  len++;
                dynamicCssBridge.value["popper-height"] = dynamicCssBridge.value["popper-option-height"] * len + dynamicCssBridge.value["popper-padding"] * 2;
              }
            } else {
              dynamicCssBridge.value["popper-height"] = cache.popperHeight;
            }
            return data.OptionList;
          },
          set(obj) {
            data.OptionList[obj.value] = obj.key;
          }
        });
        const dropDownVisibleBridge = vue.computed({
          get() {
            return data.dropDownVisible;
          },
          set(val) {
            data.dropDownVisible = val;
          }
        });
        const placeholderBridge = vue.computed({
          get() {
            return data.__inputPlaceholder || props.placeholder;
          },
          set(val) {
            data.__inputPlaceholder = val;
          }
        });
        const clearableBridge = vue.computed(() => props.clearable);
        const modeBridge = vue.computed(() => props.mode);
        const dynamicCssBridge = vue.computed(() => {
          let val = Object.assign(selectProps.dynamicCss.default(), props.dynamicCss);
          cache.popperHeight = val["popper-height"];
          cache.inputLineHeight = val["input-line-height"];
          return val;
        });
        const showTag = vue.computed(() => props.mode == "multiple");
        const useSearchImg = vue.computed(() => !!props.searchImg);
        vue.provide(SELECTV2_INJECTION_KEY, {
          selectRef,
          currentSelect: currentSelectBridge,
          currentSelectLabel: currentSelectLabelBridge,
          mode: modeBridge,
          dynamicCss: dynamicCssBridge,
          dropDownVisible: dropDownVisibleBridge,
          placeholder: placeholderBridge,
          cacheOptionList: cacheOptionListBridge,
          clearable: clearableBridge,
          selectedFn,
          deleteOptionItem
        });
        const dom_viSelectV2Tag = function(i) {
          return vue.createVNode(vue.resolveComponent("vi-select-v2-tag"), {
            "tooltip": props.tooltip,
            "label": i.label,
            "value": i.value,
            "height": dynamicCssBridge.value["tag-close-size"],
            "width": dynamicCssBridge.value["tag-close-size"],
            "onCloseClick": tagClose
          }, null);
        };
        const dom_viSelectV2Input = function() {
          return vue.createVNode(vue.resolveComponent("vi-select-v2-input"), {
            "iconHeight": dynamicCssBridge.value["input-icon-width"],
            "iconWidth": dynamicCssBridge.value["input-icon-width"],
            "ref": inputRef,
            "active": data.dropDownVisible,
            "placeholder": placeholderBridge.value,
            "onClick": inputClick,
            "onFocus": inputFocus,
            "onBlur": inputBlur,
            "onClear": inputClear
          }, null);
        };
        const dom_showMoreIcon = function() {
          return vue.createVNode(vue.resolveComponent("vi-select-v2-svg-icon"), {
            "class": n$e("--showMore"),
            "path": unfoldPath,
            "height": dynamicCssBridge.value["unfold-icon-height"],
            "width": dynamicCssBridge.value["unfold-icon-width"],
            "onClick": unfoldClick
          }, null);
        };
        const doms_searchLi = function() {
          return vue.createVNode("li", {
            "class": n$e("-search")
          }, [useSearchImg.value ? vue.createVNode("img", {
            "class": n$e("--search"),
            "src": props.searchImg
          }, null) : vue.createVNode(vue.resolveComponent("vi-select-v2-svg-icon"), {
            "class": n$e("--search"),
            "path": searchPath
          }, null), vue.createVNode("input", {
            "value": data.searchLabel,
            "class": n$e("-search__input"),
            "placeholder": "\u8BF7\u8F93\u5165\u60A8\u8981\u641C\u7D22\u7684\u5185\u5BB9",
            "onInput": searchValueChange
          }, null)]);
        };
        const doms_selectV2UnFoldDialog = () => {
          return vue.createVNode(vue.resolveComponent("vi-select-v2-unfold-dialog"), {
            "active": data.dialogVisible,
            "onHide": dialogHide
          }, {
            default: () => [props.showMore && props.mode == "single" ? Object.keys(cacheOptionListBridge.value).map((val) => {
              return vue.createVNode("span", {
                "class": [n$e("-tag"), currentSelectBridge.value == val ? "active" : ""],
                "onClick": tagClick.bind(this, cacheOptionListBridge.value[val], val)
              }, [cacheOptionListBridge.value[val]]);
            }) : "", props.showMore && props.mode == "multiple" ? Object.keys(cacheOptionListBridge.value).map((val) => {
              return vue.createVNode("span", {
                "class": [n$e("-tag"), currentSelectBridge.value.findIndex((i) => i.value == val) != -1 ? "active" : ""],
                "onClick": tagClick.bind(this, cacheOptionListBridge.value[val], val)
              }, [cacheOptionListBridge.value[val]]);
            }) : ""]
          });
        };
        const doms_selectV2DropDown = function() {
          return vue.createVNode(vue.resolveComponent("vi-select-v2-drop-down"), {
            "active": data.dropDownVisible
          }, {
            default: () => [vue.createVNode(vue.resolveComponent("vi-scroll-bar"), {
              "dynamicCss": dynamicCssBridge.value
            }, {
              default: () => {
                var _a2, _b;
                return [vue.createVNode("ul", null, [props.search ? doms_searchLi() : "", data.searchValue ? vue.createVNode("div", {
                  "style": drowDownItemLayout(props.itemLayout),
                  "class": props.itemLayout
                }, [Object.keys(data.searchValue).map((i, index) => {
                  return vue.createVNode(vue.resolveComponent("vi-select-v2-option"), {
                    "key": i,
                    "value": i,
                    "label": Object.values(data.searchValue)[index]
                  }, null);
                })]) : vue.createVNode("div", {
                  "style": drowDownItemLayout(props.itemLayout),
                  "class": props.itemLayout
                }, [(_b = (_a2 = ctx.slots)["default"]) == null ? void 0 : _b.call(_a2)]), Object.keys(cacheOptionListBridge.value).length <= 0 ? vue.createVNode("li", {
                  "class": n$e("-notData")
                }, [vue.createTextVNode("\u6682\u65E0\u6570\u636E")]) : ""]), props.showMore ? dom_showMoreIcon() : ""];
              }
            })]
          });
        };
        return () => vue.withDirectives(vue.createVNode("div", {
          "data-id": data.uuid,
          "class": [classes$d(n$e())],
          "ref": selectRef
        }, [showTag.value ? vue.createVNode("div", {
          "ref": tagListRef,
          "class": n$e("-taglist"),
          "onClick": inputClick
        }, [currentSelectBridge.value.map((i) => dom_viSelectV2Tag(i))]) : "", dom_viSelectV2Input(), doms_selectV2DropDown(), doms_selectV2UnFoldDialog()]), [[vue.resolveDirective("css"), dynamicCssBridge.value || {}]]);
      }
    });

    const VISelectV2 = withInstall(SelectV2, "select-v2");
    const VISelectV2Option = withInstall(selectOptipn, "select-v2-option");

    const timePickerProps = {
      clearable: {
        type: [String, Boolean],
        default: false
      },
      isRange: {
        type: [String, Boolean],
        default: false
      },
      disabledHours: {
        type: Array,
        default: []
      },
      disabledMinutes: {
        type: Array,
        default: []
      },
      disabledSeconds: {
        type: Array,
        default: []
      },
      arrowControl: {
        type: [String, Boolean],
        default: ""
      },
      placeholder: {
        type: String,
        default: "Arbitrary time"
      },
      startPlaceholder: String,
      endPlaceholder: String,
      modelValue: {
        type: [String, Number, Boolean],
        default: ""
      },
      dynamicCss: {
        type: Object,
        default: () => {
          return {
            "input-box-shadow-x": "0",
            "input-box-shadow-y": "0",
            "input-box-shadow-blur": "0",
            "input-box-shadow-spread": "1",
            "input-box-shadow-color": "#dcdfe6",
            "input-hover-box-shadow-x": "0",
            "input-hover-box-shadow-y": "0",
            "input-hover-box-shadow-blur": "0",
            "input-hover-box-shadow-spread": "1",
            "input-hover-box-shadow-color": "#85a2dd",
            "input-active-box-shadow-x": "0",
            "input-active-box-shadow-y": "0",
            "input-active-box-shadow-blur": "0",
            "input-active-box-shadow-spread": "1",
            "input-active-box-shadow-color": "rgb(0, 94, 255)",
            "input-border-radius": "4",
            "input-line-padding-t": "0",
            "input-line-padding-r": "28",
            "input-line-padding-b": "0",
            "input-line-padding-l": "8",
            "input-bg-color": "rgba(255,255,255)",
            "input-fo-color": "#606266",
            "input-fo-size": "12",
            "input-fo-weight": "600",
            "input-line-height": "30",
            "input-width": "200",
            "input-text-alight": "start",
            "input-icon-width": "12",
            "input-icon-color": "#000",
            "input-icon-hover-color": "#008cc8",
            "input-placeholder-fo-color": "gray",
            "popper-bg-color": "#fff",
            "popper-height": "228",
            "popper-border-radius": "8",
            "popper-z-index": "999",
            "popper-box-shadow-x": "0",
            "popper-box-shadow-y": "0",
            "popper-box-shadow-blur": "12",
            "popper-box-shadow-spread": "0",
            "popper-box-shadow-color": "rgba(0, 0, 0, 0.12)",
            "popper-arrow-height": "5",
            "popper-panel-padding-t": "8",
            "popper-panel-padding-r": "4",
            "popper-panel-padding-b": "0",
            "popper-panel-padding-l": "4",
            "popper-footer-height": "36",
            "popper-footer-fo-size": "12",
            "popper-footer-border-top-width": "1",
            "popper-footer-border-top-style": "solid",
            "popper-footer-border-top-color": "rgb(228, 231, 237)",
            "popper-footer-cancel-fo-color": "#303133",
            "popper-footer-ok-fo-color": "skyblue",
            "popper-footer-ok-fo-weight": "800",
            "popper-footer-ok-margin-t": "0",
            "popper-footer-ok-margin-r": "5",
            "popper-footer-ok-margin-b": "0",
            "popper-footer-ok-margin-l": "5",
            "popper-footer-ok-padding-t": "0",
            "popper-footer-ok-padding-r": "5",
            "popper-footer-ok-padding-b": "0",
            "popper-footer-ok-padding-l": "5",
            "popper-spinner-pitch-box-border-top-width": "1",
            "popper-spinner-pitch-box-border-top-style": "solid",
            "popper-spinner-pitch-box-border-top-color": "#e4e7ed",
            "popper-spinner-pitch-box-border-bottom-width": "1",
            "popper-spinner-pitch-box-border-bottom-style": "solid",
            "popper-spinner-pitch-box-border-bottom-color": "#e4e7ed",
            "popper-spinner-number-height": "32",
            "popper-spinner-number-fo-color": "#606266",
            "popper-spinner-number-fo-size": "12",
            "popper-spinner-number-hover-bg-color": "#e0e0e0",
            "popper-spinner-number-active-fo-color": "#000",
            "popper-spinner-number-active-fo-weight": "700",
            "popper-spinner-number-active-hover-bg-color": "rgba($color: #e0e0e0, $alpha: 0)",
            "popper-spinner-number-disabled-fo-color": "rgb(223, 223, 223)",
            "popper-spinner-number-disabled-hover-bg-color": "rgba($color: #e0e0e0, $alpha: 0)",
            "scroll-bar-thumb-width": "8",
            "scrollBarHeight": "60",
            "scrollBarBgColor": "rgb(218, 218, 218)",
            "scrollBarBgColorHover": "skyblue"
          };
        }
      }
    };

    const TIMEPICKER_INJECTION_KEY = Symbol("time-picker");

    const {
      n: n$d,
      classes: classes$c
    } = createNamespace("input-svg-icon");
    var VIInputSvgIcon = vue.defineComponent({
      name: "VIInputSvgIcon",
      emits: ["click"],
      props: {
        path: {
          type: String,
          default: `M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 
            764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 
            45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z`
        },
        height: {
          type: [String, Number],
          default: "12px"
        },
        width: {
          type: [String, Number],
          default: "12px"
        },
        modelValue: {
          type: [String, Number, Boolean],
          default: ""
        }
      },
      setup(props, ctx) {
        const handleClick = function(e) {
          ctx.emit("click", e);
        };
        return () => vue.createVNode("svg", {
          "class": [classes$c(n$d()), "icon"],
          "height": props.height,
          "width": props.width,
          "viewBox": "0 0 1024 1024",
          "xmlns": "http://www.w3.org/2000/svg",
          "onClick": handleClick
        }, [vue.createVNode("path", {
          "fill": "currentColor",
          "d": props.path
        }, null)]);
      }
    });

    const inputProps = {
      modelValue: {
        type: [String, Number, Array],
        default: ""
      },
      showPassword: {
        type: [String, Boolean],
        default: false
      },
      disabled: {
        type: [String, Boolean],
        default: false
      },
      readonly: {
        type: [String, Boolean],
        default: false
      },
      clearable: {
        type: [String, Boolean],
        default: false
      },
      placeholder: {
        type: String,
        default: "\u8BF7\u9009\u62E9\u60A8\u9700\u8981\u7684\u5185\u5BB9o(*\uFFE3\u25BD\uFFE3*)\u30D6"
      },
      dynamicCss: {
        type: Object,
        default: () => {
          return {
            "input-box-shadow-x": "0",
            "input-box-shadow-y": "0",
            "input-box-shadow-blur": "0",
            "input-box-shadow-spread": "1",
            "input-box-shadow-color": "#dcdfe6",
            "input-hover-box-shadow-x": "0",
            "input-hover-box-shadow-y": "0",
            "input-hover-box-shadow-blur": "0",
            "input-hover-box-shadow-spread": "1",
            "input-hover-box-shadow-color": "#85a2dd",
            "input-active-box-shadow-x": "0",
            "input-active-box-shadow-y": "0",
            "input-active-box-shadow-blur": "0",
            "input-active-box-shadow-spread": "1",
            "input-active-box-shadow-color": "rgb(0, 94, 255)",
            "input-border-radius": "4",
            "input-line-padding-t": "0",
            "input-line-padding-r": "28",
            "input-line-padding-b": "0",
            "input-line-padding-l": "8",
            "input-bg-color": "rgba(255,255,255)",
            "input-fo-color": "#606266",
            "input-fo-size": "12",
            "input-fo-weight": "600",
            "input-line-height": "30",
            "input-width": "200",
            "input-text-alight": "start",
            "input-icon-width": "12",
            "input-icon-color": "#000",
            "input-icon-hover-color": "#008cc8",
            "input-placeholder-fo-color": "gray"
          };
        }
      }
    };
    const {
      n: n$c,
      classes: classes$b
    } = createNamespace("timePickerInput");
    var VITimePickerInput = vue.defineComponent({
      name: "VITimePickerInput",
      emits: ["focus", "blur", "click", "update:modelValue", "close"],
      directives: {
        css: Css
      },
      props: inputProps,
      components: {
        "vi-input-svg-icon": VIInputSvgIcon
      },
      setup(props, ctx) {
        const closeSvgPath = "M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z";
        const data = vue.reactive({
          softFocus: false,
          isHover: false
        });
        const handleInputClick = function(e) {
          if (isDisabled.value)
            return;
          ctx.emit("click", e);
        };
        const handleCloseIconClick = function(e) {
          if (isDisabled.value)
            return;
          ctx.emit("update:modelValue", e.target.value);
          ctx.emit("close");
          e.stopPropagation();
        };
        const handleFocus = function(e) {
          if (isDisabled.value)
            return;
          ctx.emit("focus", e);
          data.softFocus = true;
        };
        const handleBlur = function(e) {
          if (isDisabled.value)
            return;
          ctx.emit("blur", e);
          data.softFocus = false;
        };
        const handleMouseEn = function(e) {
          if (isDisabled.value)
            return;
          data.isHover = true;
        };
        const handleMouseOu = function(e) {
          if (isDisabled.value)
            return;
          data.isHover = false;
        };
        const handleChange = function(e) {
          if (isDisabled.value)
            return;
          ctx.emit("update:modelValue", e.target.value);
        };
        const handleInput = function(e) {
          if (isDisabled.value)
            return;
          ctx.emit("update:modelValue", e.target.value);
        };
        const dynamicCssBridge = vue.computed(() => Object.assign(inputProps.dynamicCss.default(), props.dynamicCss));
        const readonlyBridge = vue.computed(() => {
          if (typeof props.readonly == "string") {
            return true;
          } else {
            return props.readonly;
          }
        });
        const isClearable = vue.computed(() => {
          if (typeof props.clearable == "string") {
            return true;
          } else {
            return props.clearable;
          }
        });
        const isShowPassword = vue.computed(() => {
          if (typeof props.showPassword == "string") {
            return true;
          } else {
            return props.showPassword;
          }
        });
        const isDisabled = vue.computed(() => {
          if (typeof props.disabled == "string") {
            return true;
          } else {
            return props.disabled;
          }
        });
        const isActive = vue.computed(() => data.softFocus ? "active" : "");
        return () => vue.withDirectives(vue.createVNode("div", {
          "class": [classes$b(n$c()), isActive.value, isDisabled.value ? "disabled" : ""],
          "onClick": handleInputClick,
          "onMouseenter": handleMouseEn,
          "onMouseleave": handleMouseOu
        }, [vue.createVNode("input", {
          "class": [n$c("_inner")],
          "placeholder": props.placeholder,
          "onFocus": handleFocus,
          "onBlur": handleBlur,
          "readonly": readonlyBridge.value || isDisabled.value,
          "value": props.modelValue,
          "onChange": handleChange,
          "onInput": handleInput,
          "type": isShowPassword.value ? "password" : "text"
        }, null), props.modelValue && isClearable.value && data.isHover ? vue.createVNode(vue.resolveComponent("vi-input-svg-icon"), {
          "class": "icon",
          "height": dynamicCssBridge.value["input-icon-width"],
          "width": dynamicCssBridge.value["input-icon-width"],
          "path": closeSvgPath,
          "onClick": handleCloseIconClick
        }, null) : ""]), [[vue.resolveDirective("css"), dynamicCssBridge.value || {}]]);
      }
    });

    const {
      n: n$b,
      classes: classes$a
    } = createNamespace("popper");
    var VITimePickerPopper = vue.defineComponent({
      name: "VITimePickerPopper",
      emits: ["focus", "blur", "click"],
      props: ["active"],
      setup(props, ctx) {
        let {
          timePickerRef
        } = vue.inject(TIMEPICKER_INJECTION_KEY);
        const data = vue.reactive({
          parentRect: {
            x: 0,
            y: 0,
            height: 0,
            width: 0
          },
          dropdownTop: "0"
        });
        const arrowRef = vue.ref(null);
        const contentRef = vue.ref(null);
        const reSetDropdownTop = () => {
          vue.nextTick(() => {
            data.parentRect = timePickerRef.value.getBoundingClientRect();
            data.dropdownTop = data.parentRect.height + 10 + "px";
          });
        };
        vue.onMounted(() => reSetDropdownTop());
        return () => {
          var _a, _b;
          return vue.createVNode("div", {
            "class": [n$b(""), props.active ? "active" : ""],
            "style": {
              top: data.dropdownTop
            }
          }, [vue.createVNode("div", {
            "ref": arrowRef,
            "class": [n$b("_arrow")]
          }, [props.active]), vue.createVNode("div", {
            "ref": contentRef,
            "class": [classes$a(n$b("_content"))]
          }, [vue.createVNode("div", {
            "class": [classes$a(n$b("_inner"))]
          }, [(_b = (_a = ctx.slots)["default"]) == null ? void 0 : _b.call(_a)])])]);
        };
      }
    });

    const {
      n: n$a,
      classes: classes$9
    } = createNamespace("scroll-bar");
    var VIScrollBar = vue.defineComponent({
      name: "VIScrollBar",
      emits: ["focus", "blur", "click", "scroll", "getRef"],
      props: ["dynamicCss"],
      directives: {
        css: Css
      },
      setup(props, ctx) {
        const scrollBarRef = vue.ref();
        const thumbRef = vue.ref();
        const scrollBoxRef = vue.ref();
        const data = vue.reactive({
          realMargin: 0,
          realPadding: 0,
          viewHeight: 0,
          realHeight: "0",
          maxScrollBoxRange: 0,
          proportion: 0,
          scrollBarHeight: 0,
          maxScrollBarRange: 0,
          scrollBarMovePropor: 0,
          scrollBoxMovePropor: 0,
          translateY: 0,
          startY: 0,
          moveY: 0,
          _move: 0,
          mouseMoving: false,
          scrollBoxRealHeight: 0,
          scrollBarViewHeight: 0,
          scrollBoxMaxRange: 0
        });
        vue.onMounted(() => {
          vue.nextTick(() => {
            let scrollBoxRealHeight = window.getComputedStyle(scrollBoxRef.value).height.replace("px", "");
            data.scrollBoxRealHeight = Number(scrollBoxRealHeight);
            let scrollBarViewHeight = window.getComputedStyle(scrollBarRef.value).height.replace("px", "");
            data.scrollBarViewHeight = Number(scrollBarViewHeight);
            data.scrollBoxMaxRange = data.scrollBoxRealHeight - data.scrollBarViewHeight;
            ctx.emit && ctx.emit("getRef", scrollBarRef);
          });
        });
        const isShowThumb = vue.computed(() => {
          return data.scrollBarHeight < data.realHeight.replace("px", "") * 1;
        });
        const onScroll = function(e) {
          ctx.emit("scroll", e);
        };
        const thumbMouseDown = function(e) {
          document.addEventListener("mousedown", documentMouseDown);
          document.addEventListener("mousemove", documentMouseMove);
        };
        const documentMouseDown = function(e) {
          data.mouseMoving = true;
          data.startY = e.clientY;
        };
        const documentMouseMove = function(e) {
          data.moveY = data.startY - e.clientY;
          scrollBoxPosition();
        };
        document.addEventListener("mouseup", () => {
          document.removeEventListener("mousemove", documentMouseMove);
          document.removeEventListener("mousedown", documentMouseDown);
          data.startY = 0;
          data.moveY = 0;
          if (data.mouseMoving) {
            data.translateY = data._move;
          }
          data.mouseMoving = false;
        });
        const scrollBoxPosition = function() {
          let _move = 0;
          if (data.moveY < 0) {
            _move = data.translateY + Math.abs(data.moveY);
          } else if (data.moveY >= 0) {
            _move = data.translateY - Math.abs(data.moveY);
          }
          if (_move < 0) {
            _move = 0;
          }
          if (_move > data.maxScrollBarRange) {
            _move = data.maxScrollBarRange;
          }
          data._move = _move;
          thumbRef.value.style.transform = `translateY(${_move}px)`;
          scrollBarRef.value.scrollTop = Math.abs(data.scrollBoxMovePropor * _move);
        };
        return () => {
          var _a, _b;
          return vue.withDirectives(vue.createVNode("div", {
            "class": [classes$9(n$a())]
          }, [vue.createVNode("div", {
            "class": n$a("left"),
            "ref": scrollBarRef,
            "onScroll": onScroll
          }, [vue.createVNode("div", {
            "ref": scrollBoxRef
          }, [(_b = (_a = ctx.slots)["default"]) == null ? void 0 : _b.call(_a)])]), isShowThumb.value ? vue.createVNode("div", {
            "ref": thumbRef,
            "class": n$a("right"),
            "style": {
              height: data.scrollBarHeight + "px"
            },
            "onMousedown": thumbMouseDown
          }, null) : ""]), [[vue.resolveDirective("css"), Object.assign(props.dynamicCss || {}, {})]]);
        };
      }
    });

    const {
      n: n$9,
      classes: classes$8
    } = createNamespace("time-picker");
    var TimePicker = vue.defineComponent({
      name: "VITimePicker",
      emits: ["click", "inputClick", "closeClick", "cancelClick", "okClick", "update:modelValue"],
      directives: {
        css: Css
      },
      props: timePickerProps,
      components: {
        "vi-time-picker-input": VITimePickerInput,
        "vi-time-picker-popper": VITimePickerPopper,
        "vi-scroll-bar": VIScrollBar
      },
      setup(props, ctx) {
        const moveTime = [null, null, null];
        let prevModelValue = "";
        const returnString = (val) => val < 10 ? "0" + val : val + "";
        const modelValueCheck = (val) => {
          const flag = val.match(/^(\d{1,2}):(\d{1,2}):(\d{1,2})$/);
          if (!flag)
            console.warn("\u521D\u59CB\u5316\u6570\u636E\u683C\u5F0F\u4E0D\u7B26\u5408\u89C4\u8303,\u5DF2\u88AB\u6E05\u7A7A\uFF01");
          return flag;
        };
        const createUUID = () => {
          return "xxxxxxxx".replace(/[xy]/g, function(a) {
            var b = 0 | 16 * Math.random(), c = "x" == a ? b : 8 | 3 & b;
            return c.toString(16);
          });
        };
        const timePickerRef = vue.ref();
        let hourListRef = vue.ref();
        let minuteListRef = vue.ref();
        let secondListRef = vue.ref();
        const data = vue.reactive({
          uuid: createUUID(),
          popperVisible: false,
          softFocus: false,
          isSubmit: false,
          hourList: [],
          minuteList: [],
          secondList: [],
          currentSelect: ["", "", ""]
        });
        const getHourListRef = (e) => hourListRef = e;
        const getMinuteListRef = (e) => minuteListRef = e;
        const getSecondListRef = (e) => secondListRef = e;
        const blur = function() {
          data.popperVisible = false;
          data.softFocus = false;
        };
        const mousedown = function(e) {
          let softFocus = false;
          for (let i = 0; i < e.path.length; i++) {
            const item = e.path[i];
            if (item.classList && item.classList.value) {
              let _class = item.getAttribute("class");
              if (_class.includes("-time-picker") && item.dataset.id == data.uuid) {
                softFocus = true;
                break;
              }
            }
          }
          if (!softFocus) {
            blur();
            data.isSubmit = true;
          }
        };
        document.addEventListener("mousedown", mousedown);
        const inputFocus = function(e) {
        };
        const inputBlur = function(e) {
        };
        const boxClick = function() {
          ctx.emit && ctx.emit("click");
        };
        const inputClick = function(e) {
          data.popperVisible = !data.popperVisible;
          data.isSubmit = false;
          if (!props.modelValue) {
            getCurrentDate();
          }
          ctx.emit && ctx.emit("inputClick");
        };
        const inputClose = function() {
          data.popperVisible = false;
          ctx.emit && ctx.emit("closeClick");
        };
        const footerBtnClick = function(e) {
          const {
            type
          } = e.target.dataset;
          data.popperVisible = false;
          if (type == "cancel") {
            data.isSubmit = false;
            ctx.emit && ctx.emit("update:modelValue", prevModelValue);
            ctx.emit && ctx.emit("cancelClick");
            changeSpinnerPosition();
          } else if (type == "ok") {
            data.isSubmit = true;
            ctx.emit && ctx.emit("okClick", data.currentSelect);
          }
        };
        const spinnerNumClick = function(type, target) {
          const fieldMap = {
            index: {
              hour: "0",
              minute: "1",
              second: "2"
            },
            ref: {
              hour: hourListRef,
              minute: minuteListRef,
              second: secondListRef
            }
          };
          const {
            num,
            disabled
          } = target.dataset;
          if (num) {
            if (disabled == "true") {
              return;
            }
            data.currentSelect[fieldMap["index"][type]] = num;
            const scrollTop = Number(data.currentSelect[fieldMap["index"][type]]) * Number(dynamicCssBridge.value["popper-spinner-number-height"]);
            fieldMap["ref"][type].value.scrollTop = scrollTop;
          }
        };
        const hourClick = function(e) {
          spinnerNumClick("hour", e.target);
        };
        const minuteClick = function(e) {
          spinnerNumClick("minute", e.target);
        };
        const secondClick = function(e) {
          spinnerNumClick("second", e.target);
        };
        const scrollBoxMove = function(target, type) {
          const fieldMap = {
            timers: {
              hour: 0,
              minute: 1,
              second: 2
            },
            ableRange: {
              hour: "disabledHours",
              minute: "disabledMinutes",
              second: "disabledSeconds"
            }
          };
          let scrollTop = target.scrollTop;
          let num = Math.round(scrollTop / Number(dynamicCssBridge.value["popper-spinner-number-height"]));
          let hitDisable = props[fieldMap["ableRange"][type]].filter((i) => i == num);
          if (hitDisable.length > 0)
            return;
          data.currentSelect[fieldMap["timers"][type]] = returnString(num);
          let moveToScrollTop = num * Number(dynamicCssBridge.value["popper-spinner-number-height"]);
          if (moveTime[fieldMap["timers"][type]]) {
            clearTimeout(moveTime[fieldMap["timers"][type]]);
            moveTime[fieldMap["timers"][type]] = null;
          }
          moveTime[fieldMap["timers"][type]] = setTimeout(() => {
            target.scrollTop = moveToScrollTop;
          }, 200);
        };
        const hourScroll = function(e) {
          scrollBoxMove(e.target, "hour");
        };
        const minuteScroll = function(e) {
          scrollBoxMove(e.target, "minute");
        };
        const secondScroll = function(e) {
          scrollBoxMove(e.target, "second");
        };
        const generateTimeData = () => {
          data.hourList = new Array(24).fill(0).map((item, index) => index < 10 ? "0" + index : index + "");
          data.minuteList = new Array(60).fill(0).map((item, index) => index < 10 ? "0" + index : index + "");
          data.secondList = new Array(60).fill(0).map((item, index) => index < 10 ? "0" + index : index + "");
        };
        const changeSpinnerPosition = function() {
          if (prevModelValue) {
            hourListRef.value.scrollTop = Number(prevModelValue.slice(0, 2)) * Number(dynamicCssBridge.value["popper-spinner-number-height"]);
            minuteListRef.value.scrollTop = Number(prevModelValue.slice(3, 5)) * Number(dynamicCssBridge.value["popper-spinner-number-height"]);
            secondListRef.value.scrollTop = Number(prevModelValue.slice(6, 8)) * Number(dynamicCssBridge.value["popper-spinner-number-height"]);
          }
        };
        const getCurrentDate = () => {
          const d = new Date();
          const h = d.getHours(), m = d.getMinutes(), s = d.getSeconds();
          data.currentSelect[0] = returnString(h);
          data.currentSelect[1] = returnString(m);
          data.currentSelect[2] = returnString(s);
          hourListRef.value.scrollTop = Number(data.currentSelect[0]) * Number(dynamicCssBridge.value["popper-spinner-number-height"]);
          minuteListRef.value.scrollTop = Number(data.currentSelect[1]) * Number(dynamicCssBridge.value["popper-spinner-number-height"]);
          secondListRef.value.scrollTop = Number(data.currentSelect[2]) * Number(dynamicCssBridge.value["popper-spinner-number-height"]);
          ctx.emit && ctx.emit("update:modelValue", data.currentSelect[0] + ":" + data.currentSelect[1] + ":" + data.currentSelect[2]);
        };
        const emptyOrNo = function() {
          if (props.modelValue && modelValueCheck(props.modelValue)) {
            const splitArr = props.modelValue.split(":");
            const h = props.disabledHours.findIndex((i) => i == splitArr[0]) != -1;
            const m = props.disabledMinutes.findIndex((i) => i == splitArr[1]) != -1;
            const s = props.disabledSeconds.findIndex((i) => i == splitArr[2]) != -1;
            if (h || m || s) {
              console.warn("\u8F93\u5165\u7684\u503C\u5305\u542B\u7981\u7528\u9879,\u5DF2\u88AB\u6E05\u7A7A");
              ctx.emit && ctx.emit("update:modelValue", "");
              return true;
            }
          }
          return false;
        };
        vue.onBeforeMount(() => {
          if (props.modelValue && modelValueCheck(props.modelValue) && !emptyOrNo()) {
            const splitArr = props.modelValue.split(":");
            data.currentSelect[0] = splitArr[0];
            data.currentSelect[1] = splitArr[1];
            data.currentSelect[2] = splitArr[2];
            prevModelValue = props.modelValue;
          }
        });
        vue.onMounted(() => {
          generateTimeData();
          vue.nextTick(() => {
            changeSpinnerPosition();
          });
        });
        const dynamicCssBridge = vue.computed(() => Object.assign(timePickerProps.dynamicCss.default(), props.dynamicCss));
        const input_dynamicCssBridge = vue.computed(() => {
          const obj = {};
          for (const key in dynamicCssBridge.value) {
            if (key.includes("input"))
              obj[key] = dynamicCssBridge.value[key];
          }
          return obj;
        });
        const modelValueBridge = vue.computed({
          get() {
            emptyOrNo();
            return props.modelValue;
          },
          set(val) {
            ctx.emit && ctx.emit("update:modelValue", val);
          }
        });
        const clearableBridge = vue.computed(() => props.clearable);
        const isDisabledPublic = function(type, val) {
          const disabledMap = {
            hour: "disabledHours",
            minute: "disabledMinutes",
            second: "disabledSeconds"
          };
          let flag = false;
          props[disabledMap[type]].forEach((i) => i == val ? flag = true : "");
          return flag;
        };
        const isDisabledHour = vue.computed(() => {
          return function(val) {
            return isDisabledPublic("hour", val);
          };
        });
        const isDisabledMinutes = vue.computed(() => {
          return function(val) {
            return isDisabledPublic("minute", val);
          };
        });
        const isDisabledSecond = vue.computed(() => {
          return function(val) {
            return isDisabledPublic("second", val);
          };
        });
        vue.watchEffect(() => {
          const hour = data.currentSelect[0];
          const minute = data.currentSelect[1];
          const second = data.currentSelect[2];
          if (!hour && !minute && !second) {
            ctx.emit && ctx.emit("update:modelValue", "");
            return;
          }
          const str = hour + ":" + minute + ":" + second;
          ctx.emit && ctx.emit("update:modelValue", str);
        });
        vue.watchEffect(() => {
          if (data.isSubmit) {
            prevModelValue = props.modelValue;
            ctx.emit && ctx.emit("update:modelValue", prevModelValue);
          }
        });
        vue.provide(TIMEPICKER_INJECTION_KEY, {
          timePickerRef
        });
        return () => vue.withDirectives(vue.createVNode("div", {
          "ref": timePickerRef,
          "data-id": data.uuid,
          "class": [classes$8(n$9())],
          "onClick": boxClick
        }, [vue.createVNode(vue.resolveComponent("vi-time-picker-input"), {
          "placeholder": props.placeholder,
          "modelValue": modelValueBridge.value,
          "onUpdate:modelValue": ($event) => modelValueBridge.value = $event,
          "onFocus": inputFocus,
          "onBlur": inputBlur,
          "onClose": inputClose,
          "dynamicCss": input_dynamicCssBridge.value || {},
          "clearable": clearableBridge.value,
          "readonly": true,
          "onClick": inputClick
        }, null), vue.createVNode(vue.resolveComponent("vi-time-picker-popper"), {
          "active": data.popperVisible
        }, {
          default: () => [vue.createVNode("div", {
            "class": "time-panel"
          }, [vue.createVNode("div", {
            "class": "time-panel__content"
          }, [vue.createVNode(vue.resolveComponent("vi-scroll-bar"), {
            "onGetRef": getHourListRef,
            "class": "time-panel__spinner time-panel__popper-spinner--hour",
            "onScroll": hourScroll
          }, {
            default: () => [vue.createVNode("ul", {
              "onClick": hourClick
            }, [data.hourList.map((i) => vue.createVNode("li", {
              "data-num": i,
              "data-disabled": isDisabledHour.value(i),
              "class": [data.currentSelect[0] == i ? "active" : "", isDisabledHour.value(i) ? "disabled" : ""]
            }, [i]))])]
          }), vue.createVNode(vue.resolveComponent("vi-scroll-bar"), {
            "onGetRef": getMinuteListRef,
            "class": "time-panel__spinner time-panel__popper-spinner--minutes",
            "onScroll": minuteScroll
          }, {
            default: () => [vue.createVNode("ul", {
              "onClick": minuteClick
            }, [data.minuteList.map((i) => vue.createVNode("li", {
              "data-num": i,
              "data-disabled": isDisabledMinutes.value(i),
              "class": [data.currentSelect[1] == i ? "active" : "", isDisabledMinutes.value(i) ? "disabled" : ""]
            }, [i]))])]
          }), vue.createVNode(vue.resolveComponent("vi-scroll-bar"), {
            "onGetRef": getSecondListRef,
            "class": "time-panel__spinner time-panel__popper-spinner--second",
            "onScroll": secondScroll
          }, {
            default: () => [vue.createVNode("ul", {
              "onClick": secondClick
            }, [data.secondList.map((i) => vue.createVNode("li", {
              "data-num": i,
              "data-disabled": isDisabledSecond.value(i),
              "class": [data.currentSelect[2] == i ? "active" : "", isDisabledSecond.value(i) ? "disabled" : ""]
            }, [i]))])]
          })]), vue.createVNode("div", {
            "class": "time-panel__footer",
            "onClick": footerBtnClick
          }, [vue.createVNode("div", {
            "data-type": "cancel",
            "class": "time-panel__footer_cancel"
          }, [vue.createTextVNode("\u53D6\u6D88")]), vue.createVNode("div", {
            "data-type": "ok",
            "class": "time-panel__footer_ok"
          }, [vue.createTextVNode("\u786E\u8BA4")])])])]
        })]), [[vue.resolveDirective("css"), dynamicCssBridge.value || {}]]);
      }
    });

    const VITimePicker = withInstall(TimePicker, "time-picker");

    const radioProps = {
      border: {
        type: Boolean,
        default: false
      },
      label: {
        type: [String, Number],
        default: ""
      },
      value: {
        type: [String, Number],
        default: ""
      },
      disabled: {
        type: [String, Number, Boolean],
        default: false
      },
      modelValue: {
        type: [String, Number, Boolean],
        default: ""
      },
      dynamicCss: {
        type: Object,
        default: () => {
          return {
            "bs-mar-t": 0,
            "bs-mar-r": 10,
            "bs-mar-b": 10,
            "bs-mar-l": 0,
            "bs-pad-t": 4,
            "bs-pad-r": 8,
            "bs-pad-b": 4,
            "bs-pad-l": 8,
            "bs-bg-color": "#fff",
            "bs-disabled-color": "gray",
            "bs-border-radius": "4",
            "bs-border-width": "1",
            "bs-border-type": "solid",
            "bs-border-color": "#00b7ff",
            "circle-size": "12",
            "circle-out-bg-color": "#989898",
            "circle-out-hover-bg-color": "#00b7ff",
            "circle-out-active-bg-color": "#01b3f9",
            "circle-inner-bg-color": "#fff",
            "circle-inner-size": "10",
            "circle-inner-active-bg-color": "#fff",
            "circle-inner-active-size": "4",
            "txt-fo-size": "14",
            "txt-fo-color": "#000",
            "txt-fo-active-color": "#00b7ff",
            "txt-fo-active-weight": "500",
            "txt-pad-l": "8",
            "btn-fo-size": "12",
            "btn-fo-color": "#000",
            "btn-fo-active-color": "#fff",
            "btn-pad-t": "4",
            "btn-pad-r": "12",
            "btn-pad-b": "4",
            "btn-pad-l": "12",
            "btn-bg-color": "#fff",
            "btn-bg-active-color": "#409eff",
            "btn-border-width": "1",
            "btn-border-type": "solid",
            "btn-border-color": "#dcdfe6",
            "ani-transition": "0.5"
          };
        }
      }
    };

    const RADIO_INJECTION_KEY = Symbol("radio");

    const { n: n$8, classes: classes$7 } = createNamespace("radio");
    const _sfc_main$2 = vue.defineComponent({
      name: "VIRadio",
      props: radioProps,
      emits: ["click", "update:modelValue", "change"],
      setup(props, ctx) {
        let injectData = vue.inject(RADIO_INJECTION_KEY, void 0);
        const handleClick = (e) => {
          if (!IsDisable.value) {
            injectData ? injectData.changeModelValue(e) : ctx.emit("update:modelValue", "on");
          }
        };
        const IsChecked = vue.computed({
          get() {
            return injectData ? props.value == injectData.currentSelect.value : props.modelValue;
          },
          set() {
          }
        });
        const IsDisable = vue.computed({
          get() {
            return !!props.disabled;
          },
          set() {
          }
        });
        const modelValueBridge = vue.computed({
          get() {
            return injectData ? injectData.currentSelect.value : props.modelValue;
          },
          set(val) {
            ctx.emit && ctx.emit("update:modelValue", val);
          }
        });
        return {
          n: n$8,
          classes: classes$7,
          handleClick,
          IsChecked,
          IsDisable,
          modelValueBridge
        };
      }
    });
    const _hoisted_1$1 = ["value", "checked", "disabled"];
    function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass([_ctx.classes(_ctx.n()), _ctx.IsChecked ? _ctx.n("active") : "", _ctx.border ? _ctx.n("border") : ""]),
        onClick: _cache[1] || (_cache[1] = ($event) => _ctx.handleClick(_ctx.value))
      }, [
        vue.createElementVNode("div", {
          class: vue.normalizeClass([_ctx.classes(_ctx.n("_input__wrapper")), _ctx.IsDisable ? "is-disabled" : ""])
        }, [
          vue.withDirectives(vue.createElementVNode("input", {
            class: vue.normalizeClass([_ctx.classes(_ctx.n("_input"))]),
            type: "radio",
            ref: "radioRef",
            value: _ctx.value,
            checked: _ctx.IsChecked,
            disabled: _ctx.IsDisable,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.modelValueBridge = $event)
          }, null, 10, _hoisted_1$1), [
            [vue.vModelRadio, _ctx.modelValueBridge]
          ]),
          vue.createElementVNode("div", {
            class: vue.normalizeClass([_ctx.classes(_ctx.n("_circle"))])
          }, null, 2)
        ], 2),
        vue.createElementVNode("label", {
          class: vue.normalizeClass(_ctx.classes(_ctx.n("_label"), _ctx.IsDisable ? "is-disabled" : ""))
        }, vue.toDisplayString(_ctx.label), 3)
      ], 2);
    }
    var Radio = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "radio.vue"]]);

    const radioButtonProps = {
      border: {
        type: Boolean,
        default: false
      },
      label: {
        type: [String, Number],
        default: ""
      },
      value: {
        type: [String, Number],
        default: ""
      },
      disabled: {
        type: [String, Number, Boolean],
        default: false
      },
      modelValue: {
        type: [String, Number, Boolean],
        default: ""
      }
    };

    const { n: n$7, classes: classes$6 } = createNamespace("radio-button");
    const _sfc_main$1 = vue.defineComponent({
      name: "VIRadioButton",
      props: radioButtonProps,
      emits: ["click", "update:modelValue", "change"],
      directives: { ripple: Ripple },
      setup(props, ctx) {
        let injectData = vue.inject(RADIO_INJECTION_KEY);
        const refRadioButton = vue.ref(null);
        const handleClick = function(e) {
          if (!IsDisable.value) {
            injectData ? injectData.changeModelValue(props.value) : ctx.emit("update:modelValue", "on");
          }
        };
        const IsChecked = vue.computed({
          get() {
            return injectData ? props.value == injectData.currentSelect.value : props.modelValue;
          },
          set() {
          }
        });
        const IsDisable = vue.computed({
          get() {
            return !!props.disabled;
          },
          set() {
          }
        });
        const modelValue = vue.computed({
          get() {
            return injectData ? injectData.currentSelect.value : props.modelValue;
          },
          set(val) {
            ctx.emit && ctx.emit("update:modelValue", val);
          }
        });
        return {
          n: n$7,
          classes: classes$6,
          handleClick,
          IsChecked,
          IsDisable,
          refRadioButton,
          modelValue
        };
      }
    });
    const _hoisted_1 = ["value", "checked", "disabled"];
    function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
      return vue.openBlock(), vue.createElementBlock("div", {
        ref: "refRadioButton",
        class: vue.normalizeClass([_ctx.classes(_ctx.n()), _ctx.IsChecked ? _ctx.n("active") : "", _ctx.border ? _ctx.n("border") : ""]),
        onClick: _cache[1] || (_cache[1] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
      }, [
        vue.withDirectives(vue.createElementVNode("input", {
          class: vue.normalizeClass([_ctx.classes(_ctx.n("_input"))]),
          type: "radio",
          ref: "radioRef",
          value: _ctx.value,
          checked: _ctx.IsChecked,
          disabled: _ctx.IsDisable,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.modelValue = $event)
        }, null, 10, _hoisted_1), [
          [vue.vModelRadio, _ctx.modelValue]
        ]),
        vue.createElementVNode("label", {
          class: vue.normalizeClass(_ctx.classes(_ctx.n("_label"), _ctx.IsDisable ? "is-disabled" : ""))
        }, vue.toDisplayString(_ctx.label), 3)
      ], 2);
    }
    var RadioButton = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "radio-button.vue"]]);

    const { n: n$6, classes: classes$5 } = createNamespace("radio-group");
    const _sfc_main = vue.defineComponent({
      name: "VIRadioGroup",
      props: radioProps,
      emits: ["click", "update:modelValue", "change"],
      directives: { ripple: Ripple, css: Css },
      setup(props, ctx) {
        const changeModelValue = (value = props.modelValue) => {
          ctx.emit("update:modelValue", value);
          vue.nextTick(() => ctx.emit("change", value));
        };
        const modelValueBridge = vue.computed({
          get() {
            return props.modelValue;
          },
          set(val) {
            ctx.emit && ctx.emit("update:modelValue", val);
          }
        });
        const dynamicCssBridge = vue.computed(() => Object.assign(radioProps.dynamicCss.default(), props.dynamicCss));
        vue.provide(RADIO_INJECTION_KEY, {
          currentSelect: modelValueBridge,
          changeModelValue
        });
        return {
          n: n$6,
          classes: classes$5,
          dynamicCssBridge
        };
      }
    });
    function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
      const _directive_css = vue.resolveDirective("css");
      return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(_ctx.classes(_ctx.n()))
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 2)), [
        [_directive_css, _ctx.dynamicCssBridge || {}]
      ]);
    }
    var RadioGroup = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "radio-group.vue"]]);

    const VIRadio = withInstall(Radio, "radio");
    const VIRadioButton = withInstall(RadioButton, "radio-button");
    const VIRadioGroup = withInstall(RadioGroup, "radio-group");

    const paginationProps = {
      background: {
        type: Boolean,
        default: false
      },
      total: {
        type: [String, Number],
        default: 100
      },
      totalLabel: {
        type: String,
        default: "Total"
      },
      jumpLabel: {
        type: String,
        default: "Go to"
      },
      pageSize: {
        type: [String, Number, Array],
        default: 10
      },
      pagerCount: {
        type: [String, Number],
        default: 7
      },
      layout: {
        type: String,
        default: ""
      },
      modelValue: {
        type: [String, Number],
        default: ""
      },
      dynamicCss: {
        type: Object,
        default: () => {
          return {
            "bs-fo-size": "14",
            "btn-line-height": "34",
            "btn-min-width": "26",
            "btn-pad-t": "0",
            "btn-pad-r": "4",
            "btn-pad-b": "0",
            "btn-pad-l": "4",
            "btn-mar-t": "0",
            "btn-mar-r": "4",
            "btn-mar-b": "0",
            "btn-mar-l": "4",
            "btn-fo-color": "#000",
            "btn-fo-size": 12,
            "btn-fo-weight": 600,
            "btn-border-radius": "4",
            "btn-hover-fo-color": "#0077ff",
            "btn-active-fo-color": "#0077ff",
            "btn-active-bg-color": "#0697ff",
            "btn-background-bg-color": "#f0f2f5",
            "btn-background-fo-color": "#000",
            "btn-background-active-fo-color": "#fff",
            "btn-background-active-bg-color": "#0697ff",
            "total-fo-color": "#606266",
            "total-mar-r": "8",
            "jump-mar-l": "8",
            "jump-input-mar-l": "8",
            "jump-input-border-radius": "4",
            "jump-input-border-color": "#d6d6d6",
            "jump-input-width": "30",
            "jump-input-bg-color": "#fff",
            "jump-input-fo-color": "#000",
            "jump-input-max-width": "50",
            "ani-transition": "0.5",
            "select-v2-mar-r": "8",
            "select-v2-input-text-alight": "center",
            "select-v2-input-width": "80",
            "select-v2-input-line-height": "30",
            "select-v2-popper-option-height": "40"
          };
        }
      }
    };

    const PAGINATION_INJECTION_KEY = Symbol("pagination");

    const {
      n: n$5,
      classes: classes$4
    } = createNamespace("pagination-prev");
    var prev = vue.defineComponent({
      name: "VIPaginationPrev",
      emits: ["click"],
      setup(props, ctx) {
        let provideData = vue.inject(PAGINATION_INJECTION_KEY);
        const internalDisabled = vue.computed(() => provideData.currentPage.value <= 1);
        const handleClick = function(e) {
          if (internalDisabled.value)
            return;
          ctx.emit("click", e);
        };
        return () => vue.createVNode("button", {
          "type": "button",
          "class": [classes$4(n$5()), internalDisabled.value ? "disabled" : ""],
          "onClick": handleClick.bind(this)
        }, [vue.createVNode("svg", {
          "class": "icon",
          "viewBox": "0 0 1024 1024",
          "version": "1.1",
          "xmlns": "http://www.w3.org/2000/svg",
          "width": "12",
          "height": "12"
        }, [vue.createVNode("path", {
          "fill": "currentColor",
          "d": "M740.352 174.08l-57.216-59.008L283.648 512l399.488 396.928 57.216-59.008L404.48 512z",
          "p-id": "3023"
        }, null)])]);
      }
    });

    const {
      n: n$4,
      classes: classes$3
    } = createNamespace("pagination-next");
    var next = vue.defineComponent({
      name: "VIPaginationNext",
      emits: ["click"],
      setup(props, ctx) {
        let provideData = vue.inject(PAGINATION_INJECTION_KEY);
        const internalDisabled = vue.computed(() => provideData.currentPage.value >= provideData.pageCount.value);
        const handleClick = function(e) {
          if (internalDisabled.value)
            return;
          ctx.emit("click", e);
        };
        return () => vue.createVNode("button", {
          "type": "button",
          "class": [classes$3(n$4()), internalDisabled.value ? "disabled" : ""],
          "onClick": handleClick.bind(this)
        }, [vue.createVNode("svg", {
          "class": "icon",
          "viewBox": "0 0 1024 1024",
          "version": "1.1",
          "xmlns": "http://www.w3.org/2000/svg",
          "width": "12",
          "height": "12"
        }, [vue.createVNode("path", {
          "fill": "currentColor",
          "d": "M283.648 174.08l57.216-59.008L740.352 512 340.864 908.928 283.648 849.92 619.52 512z"
        }, null)])]);
      }
    });

    const {
      n: n$3
    } = createNamespace("pagination-pager");
    var pager = vue.defineComponent({
      name: "VIPaginationPager",
      emits: ["click"],
      setup(props, ctx) {
        let {
          currentPage,
          pagerCount,
          pageCount
        } = vue.inject(PAGINATION_INJECTION_KEY);
        const data = vue.reactive({
          quickPrevBtnIsHover: false,
          quickNextBtnIsHover: false
        });
        const svgIconPath = {
          "quickLeftArrow": `M62.56 511.904L485.952 88.256a48.64 48.64 0 0 1 68.736 68.736L199.616 512.064l356.8 356.8A48.64 48.64 0 0 1 487.68 937.6l-39.744-39.744 0.256-0.256L62.528 511.936z m388.8 0L874.752 88.256a48.64 48.64 0 0 1 68.736 68.736L588.416 512.064l356.8 356.8A48.64 48.64 0 0 1 876.48 937.6l-39.776-39.744 0.288-0.256-385.664-385.664z`,
          "quickRightArrow": `M948.064 513.056L536.064 925.312a47.296 47.296 0 0 1-66.88-66.88l345.504-345.504L467.52 165.76a47.296 47.296 0 0 1 66.88-66.88l38.688 38.688-0.256 0.256 375.264 375.264m-378.336-0.032L157.76 925.312a47.296 47.296 0 0 1-66.88-66.88l345.472-345.504L89.184 165.76a47.296 47.296 0 0 1 66.88-66.88l38.688 38.688-0.256 0.256 375.264 375.264"`,
          "ellipsis": `M110.336 572.330667a85.333333 85.333333 0 1 0 120.661333-120.661334 85.333333 85.333333 0 0 0-120.661333 120.661334zM451.669333 572.330667a85.333333 85.333333 0 1 0 120.661334-120.661334 85.333333 85.333333 0 0 0-120.661334 120.661334zM793.002667 572.330667a85.333333 85.333333 0 1 0 120.661333-120.661334 85.333333 85.333333 0 0 0-120.661333 120.661334z`
        };
        const pagerBase = vue.computed(() => {
          return Math.floor(currentPage.value / pagerCount.value) * pagerCount.value;
        });
        const eachPagerCount = vue.computed(() => {
          return pagerCount.value < pageCount.value ? pagerCount.value : pageCount.value - 1;
        });
        const isRecalculate = vue.computed(() => {
          if (isShowQuickPrevBtn.value && isShowQuickNextBtn.value) {
            return currentPage.value;
          } else {
            return false;
          }
        });
        const isShowQuickPrevBtn = vue.computed(() => {
          if (pageCount.value <= pagerCount.value)
            return 0;
          return currentPage.value >= pagerCount.value - 2;
        });
        const isShowQuickNextBtn = vue.computed(() => {
          if (pageCount.value <= pagerCount.value)
            return 0;
          return currentPage.value < pageCount.value - pagerCount.value + 4;
        });
        const isShowBigNumerBtn = vue.computed(() => pageCount.value > 1);
        const handleClick = function(e) {
          ctx.emit("click", e);
        };
        const handlePrevMouseEn = (e) => data.quickPrevBtnIsHover = true;
        const handlePrevMouseoUt = (e) => data.quickPrevBtnIsHover = false;
        const handleNextMouseoEn = (e) => data.quickNextBtnIsHover = true;
        const handleNextMouseoUt = (e) => data.quickNextBtnIsHover = false;
        const handlePrevClick = (e) => currentPage.value = currentPage.value - pagerCount.value + 2;
        const handlePextClick = (e) => currentPage.value = currentPage.value + pagerCount.value - 2;
        return () => vue.createVNode("ul", {
          "class": [n$3()]
        }, [vue.createVNode("li", {
          "class": [n$3("_btn"), currentPage.value == 1 ? "active" : ""],
          "onClick": handleClick.bind(this, 1)
        }, [1]), isShowQuickPrevBtn.value ? vue.createVNode("li", {
          "class": [n$3("_btn"), "quickPrev"],
          "onMouseenter": handlePrevMouseEn,
          "onMouseleave": handlePrevMouseoUt,
          "onClick": handlePrevClick
        }, [vue.createVNode("svg", {
          "class": "icon",
          "viewBox": "0 0 1024 1024",
          "version": "1.1",
          "name": data.quickPrevBtnIsHover ? "quickLeftArrow" : "ellipsis",
          "xmlns": "http://www.w3.org/2000/svg",
          "width": "12",
          "height": "12"
        }, [vue.createVNode("path", {
          "fill": "currentColor",
          "d": data.quickPrevBtnIsHover ? svgIconPath["quickLeftArrow"] : svgIconPath["ellipsis"]
        }, null)])]) : vue.createVNode("div", null, null), new Array(eachPagerCount.value).fill(isRecalculate.value ? isRecalculate.value : 0).map((item, index) => {
          let curPage = currentPage.value;
          let cen = Math.ceil((pagerCount.value - 2) / 2);
          let boundaryJudge = index > 0 && index < pagerCount.value - 1;
          let _pagerBase = pagerBase.value;
          if (item > 0) {
            if (boundaryJudge) {
              item = index <= cen ? item - cen + index : item + index - cen;
              return vue.createVNode("li", {
                "class": [n$3("_btn"), curPage == item ? "active" : ""],
                "onClick": handleClick.bind(this, item)
              }, [item]);
            }
          } else {
            if (boundaryJudge) {
              if (curPage < pagerCount.value - 2) {
                return vue.createVNode("li", {
                  "class": [n$3("_btn"), curPage == _pagerBase + index + 1 ? "active" : ""],
                  "onClick": handleClick.bind(this, _pagerBase + index + 1)
                }, [_pagerBase + index + 1]);
              } else {
                return vue.createVNode("li", {
                  "class": [n$3("_btn"), curPage == pageCount.value - pagerCount.value + 1 + index ? "active" : ""],
                  "onClick": handleClick.bind(this, pageCount.value - pagerCount.value + 1 + index)
                }, [pageCount.value - pagerCount.value + 1 + index]);
              }
            }
          }
        }), isShowQuickNextBtn.value > 0 ? vue.createVNode("li", {
          "class": [n$3("_btn"), "quickNext"],
          "onMouseenter": handleNextMouseoEn,
          "onMouseleave": handleNextMouseoUt,
          "onClick": handlePextClick
        }, [vue.createVNode("svg", {
          "class": "icon",
          "viewBox": "0 0 1024 1024",
          "version": "1.1",
          "name": data.quickNextBtnIsHover ? "quickRightArrow" : "ellipsis",
          "xmlns": "http://www.w3.org/2000/svg",
          "width": "12",
          "height": "12"
        }, [vue.createVNode("path", {
          "fill": "currentColor",
          "d": data.quickNextBtnIsHover ? svgIconPath["quickRightArrow"] : svgIconPath["ellipsis"]
        }, null)])]) : vue.createVNode("div", null, null), isShowBigNumerBtn.value ? vue.createVNode("li", {
          "class": [n$3("_btn"), currentPage.value == pageCount.value ? "active" : ""],
          "onClick": handleClick.bind(this, pageCount.value)
        }, [pageCount.value]) : ""]);
      }
    });

    const {
      n: n$2,
      classes: classes$2
    } = createNamespace("pagination-jump");
    var jump = vue.defineComponent({
      name: "VIPaginationJump",
      emits: ["jump-page"],
      setup(props, ctx) {
        let provideData = vue.inject(PAGINATION_INJECTION_KEY);
        const data = vue.reactive({
          num: ""
        });
        const vi_jump_input = vue.ref();
        const numChange = function(e) {
          const reset = () => data.num = Math.random() * 1e6;
          let val = Number(e.target.value);
          if (val <= 0) {
            reset();
            data.num = "";
          } else if (val > provideData.pageCount.value) {
            reset();
            data.num = provideData.pageCount.value;
          } else {
            reset();
            data.num = val;
          }
        };
        const handleKeyDown = function(e) {
          if (e.key == "Enter") {
            vi_jump_input.value.blur();
            vue.nextTick(() => ctx.emit("jump-page", data.num || 1));
          }
        };
        return () => vue.createVNode("div", {
          "class": [classes$2(n$2())]
        }, [vue.createVNode("span", null, [provideData.jumpLabel.value]), vue.createVNode("input", {
          "ref": vi_jump_input,
          "class": [n$2("_input")],
          "value": data.num,
          "type": "number",
          "min": "1",
          "tabindex": "0",
          "autocomplete": "off",
          "onChange": numChange.bind(this),
          "onKeydown": handleKeyDown.bind(this)
        }, null)]);
      }
    });

    const {
      n: n$1,
      classes: classes$1
    } = createNamespace("pagination-total");
    var total = vue.defineComponent({
      name: "VIPaginationTotal",
      emits: ["click"],
      setup() {
        let {
          total,
          totalLabel
        } = vue.inject(PAGINATION_INJECTION_KEY);
        return () => vue.createVNode("div", {
          "class": [classes$1(n$1())]
        }, [vue.createVNode("span", {
          "class": [n$1("_label")]
        }, [totalLabel.value]), vue.createVNode("span", {
          "class": [n$1("_value")]
        }, [total.value])]);
      }
    });

    function _isSlot(s) {
      return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !vue.isVNode(s);
    }
    const {
      n,
      classes
    } = createNamespace("pagination");
    var pagination = vue.defineComponent({
      name: "VIPagination",
      props: paginationProps,
      directives: {
        css: Css
      },
      emits: ["size-change", "update:modelValue", "current-change", "update:total"],
      components: {
        prev,
        pager,
        next,
        jump,
        total,
        "vi-select-v2": VISelectV2,
        "vi-select-v2-option": VISelectV2Option
      },
      setup(props, ctx) {
        var _a, _b;
        const isAbsent = (v) => typeof v !== "number";
        const isArray = (v) => v instanceof Array;
        const vnodeProps = ((_b = (_a = vue.getCurrentInstance()) == null ? void 0 : _a.vnode) == null ? void 0 : _b.props) || {};
        const hasPageSizeListener = "onUpdate:sizeChange" in vnodeProps || "onUpdate:size-change" in vnodeProps || "onSizeChange" in vnodeProps;
        const hasCurrentPageListener = "onUpdate:currentPage" in vnodeProps || "onUpdate:current-page" in vnodeProps || "onUpdate:modelValue" in vnodeProps || "onCurrentChange" in vnodeProps;
        const hasTotalListener = "update:total" in vnodeProps;
        let defaultPageSize = 10;
        let defaultCurrentPage = 1;
        let defaultTotlal = 100;
        const data = vue.reactive({
          select_curSelect: "",
          select_list: [],
          select_dynamicCss: {}
        });
        const renderPageSizeList = function() {
          if (isArray(props.pageSize)) {
            data.select_list = props.pageSize.map((i) => {
              return {
                value: i,
                label: i + "/page"
              };
            });
            data.select_curSelect = data.select_list[0].value;
          }
        };
        const pageCountBridge = vue.computed(() => {
          let pageCount = 0;
          if (!isAbsent(props.total)) {
            pageCount = Math.max(1, Math.ceil(props.total / pageSizeBridge.value));
          } else {
            console.warn("total\u5C5E\u6027\u4E0D\u5408\u683C");
          }
          return pageCount;
        });
        const pagerCountBridge = vue.computed(() => {
          let pagerCount = 0;
          if (!isAbsent(props.total)) {
            if (!isAbsent(props.pagerCount)) {
              pagerCount = pageCountBridge.value > 7 ? Math.max(7, props.pagerCount % 2 == 0 ? props.pagerCount - 1 : props.pagerCount) : pageCountBridge.value;
            }
            if (pagerCount > 29) {
              pagerCount = 29;
            }
          }
          return pagerCount;
        });
        const pageSizeBridge = vue.computed({
          get() {
            let val1 = isAbsent(props.pageSize) ? defaultPageSize : props.pageSize > 5 ? props.pageSize : 5;
            val1 = isArray(props.pageSize) ? data.select_curSelect : val1;
            return val1;
          },
          set(v) {
            if (isAbsent(props.pageSize)) {
              defaultPageSize = v;
            }
            if (hasPageSizeListener) {
              props.modelValue > Math.ceil(props.total / v) ? currentPageBridge.value = Math.ceil(props.total / v) : "";
              vue.nextTick(() => {
                ctx.emit("size-change", {
                  pageSize: v,
                  currentPage: props.modelValue
                });
              });
            }
          }
        });
        const currentPageBridge = vue.computed({
          get() {
            return isAbsent(props.modelValue) ? defaultCurrentPage : props.modelValue;
          },
          set(v) {
            let newCurrentPage = v;
            if (v < 1) {
              newCurrentPage = 1;
            } else if (v > pageCountBridge.value) {
              newCurrentPage = pageCountBridge.value;
            }
            if (hasCurrentPageListener) {
              ctx.emit("update:modelValue", newCurrentPage);
              ctx.emit("current-change", newCurrentPage);
            }
          }
        });
        const totalBridge = vue.computed({
          get() {
            return isAbsent(props.total) ? defaultTotlal : props.total;
          },
          set(v) {
            let newTotal = v;
            if (v < 0) {
              newTotal = 0;
            }
            defaultTotlal = newTotal;
            if (hasTotalListener) {
              ctx.emit("update:total", newTotal);
            }
          }
        });
        const totalLabelBridge = vue.computed(() => props.totalLabel);
        const jumpLabelBridge = vue.computed(() => props.jumpLabel);
        const dynamicCssBridge = vue.computed(() => Object.assign(paginationProps.dynamicCss.default(), props.dynamicCss));
        const selectv2_dynamicCssBridge = vue.computed(() => {
          let obj = {};
          for (let key in dynamicCssBridge.value) {
            if (key.includes("select-v2-")) {
              obj[key.replace("select-v2-", "")] = dynamicCssBridge.value[key];
            }
          }
          return obj;
        });
        const Layout = vue.computed(() => {
          let layout = props.layout;
          const layoutVisual = {
            total: false,
            size: false,
            prev: false,
            next: false,
            pager: false,
            jump: false
          };
          for (let i in layoutVisual)
            layoutVisual[i] = layout.replace(/\s+/g, "").split(",").findIndex((name) => name == i) != -1 ? true : false;
          return layoutVisual;
        });
        vue.provide(PAGINATION_INJECTION_KEY, {
          pageCount: pageCountBridge,
          pagerCount: pagerCountBridge,
          pageSize: pageSizeBridge,
          currentPage: currentPageBridge,
          total: totalBridge,
          totalLabel: totalLabelBridge,
          jumpLabel: jumpLabelBridge
        });
        vue.onMounted(() => {
          renderPageSizeList();
        });
        vue.watch(() => props.pageSize, () => {
          renderPageSizeList();
        }, {
          deep: true
        });
        const prevClick = (e) => currentPageBridge.value = currentPageBridge.value - 1;
        const nextClick = (e) => currentPageBridge.value = currentPageBridge.value + 1;
        const paperClick = (e) => currentPageBridge.value = e;
        const handleJumppage = (e) => currentPageBridge.value = e;
        const onHandleSelected = function(v) {
          pageSizeBridge.value = v.value;
        };
        return () => {
          let _slot;
          return vue.withDirectives(vue.createVNode("div", {
            "class": [classes(n()), props.background ? "bgbox" : ""]
          }, [Layout.value.total ? vue.createVNode(total, null, null) : "", Layout.value.size && isArray(props.pageSize) ? vue.createVNode(vue.resolveComponent("vi-select-v2"), {
            "modelValue": data.select_curSelect,
            "onUpdate:modelValue": ($event) => data.select_curSelect = $event,
            "dynamicCss": selectv2_dynamicCssBridge.value,
            "onHandleSelected": onHandleSelected,
            "class": n("-select")
          }, _isSlot(_slot = data.select_list.map((i) => vue.createVNode(vue.resolveComponent("vi-select-v2-option"), {
            "key": i.value,
            "label": i.label,
            "value": i.value
          }, null))) ? _slot : {
            default: () => [_slot]
          }) : "", Layout.value.prev ? vue.createVNode(prev, {
            "disabled": false,
            "onClick": prevClick
          }, null) : "", Layout.value.pager ? vue.createVNode(pager, {
            "onClick": paperClick
          }, null) : "", Layout.value.next ? vue.createVNode(next, {
            "disabled": false,
            "onClick": nextClick
          }, null) : "", Layout.value.jump ? vue.createVNode(jump, {
            "onJumpPage": handleJumppage
          }, null) : ""]), [[vue.resolveDirective("css"), dynamicCssBridge.value || {}]]);
        };
      }
    });

    const VIpagination = withInstall(pagination, "pagination");

    exports.VIRadio = VIRadio;
    exports.VIRadioButton = VIRadioButton;
    exports.VIRadioGroup = VIRadioGroup;
    exports.VISelectV2 = VISelectV2;
    exports.VISelectV2Option = VISelectV2Option;
    exports.VITimePicker = VITimePicker;
    exports.VIpagination = VIpagination;
    exports.css = Css;
    exports["default"] = installer;
    exports.makeInstaller = makeInstaller;
    exports.ripple = Ripple;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
