import { defineComponent as H, createVNode as u, reactive as j, computed as c, withDirectives as oe, resolveComponent as T, resolveDirective as re, inject as fe, ref as N, onMounted as ne, nextTick as q, watch as Se, provide as ve, onBeforeMount as xe, watchEffect as ue, createTextVNode as se } from "vue";
const ge = (t, r) => (t.install = function(v) {
  if (t) {
    const l = t.name || t.__name;
    if (l || r) {
      const d = r ? `dw-${r}` : "dw-" + l.replace(/dw/gi, "").toLowerCase();
      v.component(d, t);
    } else
      console.error(t, r, !r);
  }
}, t), ye = (t) => Array.isArray(t);
function W(t) {
  const r = `vi-${t}`;
  return {
    n: (d) => d ? d.startsWith("-") ? `${r}${d}` : `${r}_${d}` : r,
    classes: (...d) => d.map((g) => {
      if (ye(g)) {
        const [S, x, o = null] = g;
        return S ? x : o;
      }
      return g;
    })
  };
}
const ce = {
  clearable: {
    type: [String, Boolean],
    default: !1
  },
  isRange: {
    type: [String, Boolean],
    default: !1
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
    default: () => ({
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
      scrollBarHeight: "60",
      scrollBarBgColor: "rgb(218, 218, 218)",
      scrollBarBgColorHover: "skyblue"
    })
  }
}, we = Symbol("time-picker"), pe = function(t, r) {
  for (let [v, l] of Object.entries(r.value))
    t.style.setProperty("--" + v, l);
}, ie = {
  mounted(t, r) {
    pe(t, r);
  },
  updated(t, r) {
    pe(t, r);
  },
  install(t) {
    t.directive("Css", this);
  }
}, {
  n: ke,
  classes: Ce
} = W("input-svg-icon"), Ie = /* @__PURE__ */ H({
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
  setup(t, r) {
    const v = function(l) {
      r.emit("click", l);
    };
    return () => u("svg", {
      class: [Ce(ke()), "icon"],
      height: t.height,
      width: t.width,
      viewBox: "0 0 1024 1024",
      xmlns: "http://www.w3.org/2000/svg",
      onClick: v
    }, [u("path", {
      fill: "currentColor",
      d: t.path
    }, null)]);
  }
}), de = {
  modelValue: {
    type: [String, Number, Array],
    default: ""
  },
  showPassword: {
    type: [String, Boolean],
    default: !1
  },
  disabled: {
    type: [String, Boolean],
    default: !1
  },
  readonly: {
    type: [String, Boolean],
    default: !1
  },
  clearable: {
    type: [String, Boolean],
    default: !1
  },
  placeholder: {
    type: String,
    default: "请选择您需要的内容o(*￣▽￣*)ブ"
  },
  dynamicCss: {
    type: Object,
    default: () => ({
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
    })
  }
}, {
  n: he,
  classes: Be
} = W("timePickerInput"), Ne = /* @__PURE__ */ H({
  name: "VITimePickerInput",
  emits: ["focus", "blur", "click", "update:modelValue", "close"],
  directives: {
    css: ie
  },
  props: de,
  components: {
    "vi-input-svg-icon": Ie
  },
  setup(t, r) {
    const v = "M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z", l = j({
      softFocus: !1,
      isHover: !1
    }), d = function(b) {
      m.value || r.emit("click", b);
    }, g = function(b) {
      m.value || (r.emit("update:modelValue", b.target.value), r.emit("close"), b.stopPropagation());
    }, S = function(b) {
      m.value || (r.emit("focus", b), l.softFocus = !0);
    }, x = function(b) {
      m.value || (r.emit("blur", b), l.softFocus = !1);
    }, o = function(b) {
      m.value || (l.isHover = !0);
    }, y = function(b) {
      m.value || (l.isHover = !1);
    }, k = function(b) {
      m.value || r.emit("update:modelValue", b.target.value);
    }, n = function(b) {
      m.value || r.emit("update:modelValue", b.target.value);
    }, h = c(() => Object.assign(de.dynamicCss.default(), t.dynamicCss)), C = c(() => typeof t.readonly == "string" ? !0 : t.readonly), I = c(() => typeof t.clearable == "string" ? !0 : t.clearable), B = c(() => typeof t.showPassword == "string" ? !0 : t.showPassword), m = c(() => typeof t.disabled == "string" ? !0 : t.disabled), Y = c(() => l.softFocus ? "active" : "");
    return () => oe(u("div", {
      class: [Be(he()), Y.value, m.value ? "disabled" : ""],
      onClick: d,
      onMouseenter: o,
      onMouseleave: y
    }, [u("input", {
      class: [he("_inner")],
      placeholder: t.placeholder,
      onFocus: S,
      onBlur: x,
      readonly: C.value || m.value,
      value: t.modelValue,
      onChange: k,
      onInput: n,
      type: B.value ? "password" : "text"
    }, null), t.modelValue && I.value && l.isHover ? u(T("vi-input-svg-icon"), {
      class: "icon",
      height: h.value["input-icon-width"],
      width: h.value["input-icon-width"],
      path: v,
      onClick: g
    }, null) : ""]), [[re("css"), h.value || {}]]);
  }
}), {
  n: Z,
  classes: me
} = W("popper"), Pe = /* @__PURE__ */ H({
  name: "VITimePickerPopper",
  emits: ["focus", "blur", "click"],
  props: ["active"],
  setup(t, r) {
    let {
      timePickerRef: v
    } = fe(we);
    const l = j({
      parentRect: {
        x: 0,
        y: 0,
        height: 0,
        width: 0
      },
      dropdownTop: "0"
    }), d = N(null), g = N(null), S = () => {
      q(() => {
        l.parentRect = v.value.getBoundingClientRect(), l.dropdownTop = l.parentRect.height + 10 + "px";
      });
    };
    return ne(() => S()), () => {
      var x, o;
      return u("div", {
        class: [Z(""), t.active ? "active" : ""],
        style: {
          top: l.dropdownTop
        }
      }, [u("div", {
        ref: d,
        class: [Z("_arrow")]
      }, [t.active]), u("div", {
        ref: g,
        class: [me(Z("_content"))]
      }, [u("div", {
        class: [me(Z("_inner"))]
      }, [(o = (x = r.slots).default) == null ? void 0 : o.call(x)])])]);
    };
  }
}), be = {
  height: {
    type: [String, Boolean],
    default: "300px"
  },
  width: {
    type: [String, Boolean],
    default: "auto"
  },
  thumbWidth: {
    type: String,
    default: "6px"
  },
  noResize: Boolean,
  dynamicCss: {
    type: Object,
    default: () => ({
      "thumb-bg-color": "#d9dfe3"
    })
  }
};
var F = /* @__PURE__ */ ((t) => (t.HORIZONTAL = "horizontal", t.VERTICAL = "vertical", t))(F || {});
const Ve = {
  type: {
    type: [String || F],
    default: "vertical"
  },
  height: {
    type: String,
    default: "100px"
  },
  width: {
    type: String,
    default: "6px"
  },
  ratioX: {
    type: String,
    default: "0px"
  },
  ratioY: {
    type: String,
    default: "0px"
  }
}, Re = Symbol("scroll-bar"), {
  n: _e
} = W("scroll-bar__thumb"), Te = /* @__PURE__ */ H({
  name: "ScrollBar",
  emits: ["update:height", "update:width"],
  props: Ve,
  setup(t, r) {
    const {
      thumbRatioY: v,
      thumbRatioX: l,
      thumbRatioYMaxRange: d,
      thumbRatioXMaxRange: g,
      wrapperInnerMaxiMoveProportionY: S,
      wrapperInnerMaxiMoveProportionX: x,
      scrollBarRef: o
    } = fe(Re), y = N(), k = j({
      mouseMoving: !1
    });
    let n = 0, h = 0, C = 0, I = 0, B = 0, m = 0;
    const Y = c({
      get() {
        return t.height;
      },
      set(w) {
        r.emit && r.emit("update:height", w);
      }
    }), b = c({
      get() {
        return t.width;
      },
      set(w) {
        r.emit && r.emit("update:width", w);
      }
    }), A = function(w) {
      if (w == "vertical") {
        let f = 0;
        const P = B;
        f = C < 0 ? P + Math.abs(C) : P - Math.abs(C), f < 0 && (f = 0), f > d.value && (f = d.value), o.value.scrollTop = Math.abs(S.value * f);
      } else if (w == "horizontal") {
        let f = 0;
        const P = m;
        f = I < 0 ? P + Math.abs(I) : P - Math.abs(I), f < 0 && (f = 0), f > g.value && (f = g.value), o.value.scrollLeft = Math.abs(x.value * f);
      }
    }, _ = function(w) {
      k.mouseMoving = !0, B = Number(v.value.slice(11, -3)), m = Number(l.value.slice(11, -3)), n = Number(w.clientY), h = Number(w.clientX);
    }, L = function(w) {
      C = n - w.clientY, I = h - w.clientX, A(t.type);
    };
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", L), document.removeEventListener("mousedown", _), n = 0, h = 0, C = 0, I = 0, B = 0, m = 0, k.mouseMoving = !1;
    });
    const E = (w) => {
      document.addEventListener("mousedown", _), document.addEventListener("mousemove", L);
    };
    return () => u("div", {
      class: _e(),
      ref: y,
      style: {
        height: Y.value,
        width: b.value,
        transform: t.type == "vertical" ? t.ratioY : t.ratioX
      },
      onMousedown: E
    }, null);
  }
}), {
  n: z
} = W("scroll-bar"), Ye = /* @__PURE__ */ H({
  name: "ScrollBar",
  emits: ["update:width", "scroll"],
  directives: {
    css: ie
  },
  props: be,
  components: {
    "scroll-bar-thumb": Te
  },
  setup(t, r) {
    let l = null;
    const d = (a) => {
      $();
    }, g = N(), S = N(), x = N(), o = j({
      wrapperInnerRealHeight: 0,
      wrapperInnerRealWidth: 0,
      wrapperInnerMaxiMoveRangeY: 0,
      wrapperInnerMaxiMoveRangeX: 0,
      wrapperInnerMaxiMoveProportionY: 0,
      wrapperInnerMaxiMoveProportionX: 0,
      thumbHeightProportion: 0,
      thumbWidthProportion: 0,
      thumbHeight: "",
      thumbWidth: "",
      thumbRatioX: "",
      thumbRatioY: "",
      thumbRatioYMaxRange: 0,
      thumbRatioXMaxRange: 0,
      thumbRatioYProportion: 0,
      thumbRatioXProportion: 0,
      cacheContainerWidth: ""
    });
    let y = N(!1);
    Se(() => t.noResize, (a) => {
      a ? l == null || l.disconnect() : (l = new MutationObserver(d), q(() => {
        l.observe(S.value, {
          attributes: !0,
          childList: !0,
          subtree: !0
        });
      }));
    }, {
      immediate: !0
    });
    const k = c(() => Object.assign(be.dynamicCss.default(), t.dynamicCss)), n = c(() => t.height), h = c({
      get() {
        return o.cacheContainerWidth;
      },
      set(a) {
        o.cacheContainerWidth = a;
      }
    }), C = c({
      get() {
        return o.thumbHeight;
      },
      set(a) {
        o.thumbHeight = a;
      }
    }), I = c({
      get() {
        return o.thumbWidth;
      },
      set(a) {
        o.thumbWidth = a;
      }
    }), B = c({
      get() {
        return o.thumbRatioX;
      },
      set(a) {
        o.thumbRatioX = a;
      }
    }), m = c({
      get() {
        return o.thumbRatioY;
      },
      set(a) {
        o.thumbRatioY = a;
      }
    }), Y = c(() => o.thumbRatioYMaxRange), b = c(() => o.thumbRatioXMaxRange), A = c(() => o.wrapperInnerMaxiMoveProportionY), _ = c(() => o.wrapperInnerMaxiMoveProportionX), L = (a) => {
      o.thumbRatioY = `translateY(${String(o.thumbRatioYProportion * a) + "px"})`;
    }, E = (a) => {
      o.thumbRatioX = `translateX(${String(o.thumbRatioXProportion * a) + "px"})`;
    }, w = (a) => {
      g.value.scrollTop = a;
    }, f = (a) => {
      g.value.scrollLeft = a;
    }, P = (a, s) => {
      w(a), f(s);
    }, $ = (a) => {
      var s, V;
      o.wrapperInnerRealHeight = Number((s = S.value) == null ? void 0 : s.scrollHeight), o.wrapperInnerRealWidth = Number((V = S.value) == null ? void 0 : V.scrollWidth), o.wrapperInnerMaxiMoveRangeY = o.wrapperInnerRealHeight - Number(n.value.replace("px", "")), o.wrapperInnerMaxiMoveRangeX = o.wrapperInnerRealWidth - Number(h.value.replace("px", "")), o.thumbHeightProportion = Number(n.value.replace("px", "")) / o.wrapperInnerRealHeight, o.thumbWidthProportion = Number(h.value.replace("px", "")) / o.wrapperInnerRealWidth, o.thumbHeight = String(o.thumbHeightProportion * Number(n.value.replace("px", ""))) + "px", o.thumbWidth = String(o.thumbWidthProportion * Number(h.value.replace("px", ""))) + "px", o.thumbRatioYMaxRange = Number(n.value.replace("px", "")) - Number(o.thumbHeight.replace("px", "")), o.thumbRatioXMaxRange = Number(h.value.replace("px", "")) - Number(o.thumbWidth.replace("px", "")), o.thumbRatioYProportion = o.thumbRatioYMaxRange / o.wrapperInnerMaxiMoveRangeY, o.thumbRatioXProportion = o.thumbRatioXMaxRange / o.wrapperInnerMaxiMoveRangeX, o.wrapperInnerMaxiMoveProportionY = o.wrapperInnerMaxiMoveRangeY / o.thumbRatioYMaxRange, o.wrapperInnerMaxiMoveProportionX = o.wrapperInnerMaxiMoveRangeX / o.thumbRatioXMaxRange;
    };
    ne(() => {
      o.cacheContainerWidth = t.width, $();
    });
    const G = (a) => {
      const s = a.target.scrollTop, V = a.target.scrollLeft;
      L(s), E(V), r.emit && r.emit("scroll", V, s);
    }, Q = () => {
      y.value = !0;
    }, K = () => {
      y.value = !1;
    };
    ve(Re, {
      height: n,
      thumbRatioY: m,
      thumbRatioX: B,
      thumbRatioYMaxRange: Y,
      thumbRatioXMaxRange: b,
      wrapperInnerMaxiMoveProportionY: A,
      wrapperInnerMaxiMoveProportionX: _,
      scrollBarRef: g
    }), r.expose({
      setScrollTop: w,
      setScrollLeft: f,
      setScrollTo: P
    });
    const U = (a = F.VERTICAL) => {
      if (t.width === !1 || t.height === !1)
        return "";
      const s = o.wrapperInnerRealHeight, V = Number(t.height.replace("px", "")), J = o.wrapperInnerRealWidth;
      if (a == "vertical")
        return V < s ? u(T("scroll-bar-thumb"), {
          ref: x,
          type: a,
          height: C.value,
          width: t.thumbWidth,
          ratioX: B.value,
          ratioY: m.value,
          class: y.value ? "show" : "hide"
        }, null) : "";
      if (a == "horizontal") {
        let O = Number(h.value.replace("px", ""));
        if (h.value == "auto") {
          const X = () => {
            h.value = "auto", q(() => {
              var D;
              O = Number((D = S.value) == null ? void 0 : D.clientWidth), h.value = O + "px", $();
            });
          };
          X(), window.onresize = () => X();
        } else if (h.value)
          return O < J ? u(T("scroll-bar-thumb"), {
            ref: x,
            type: a,
            height: t.thumbWidth,
            width: I.value,
            ratioX: B.value,
            ratioY: m.value,
            class: y.value ? "show" : "hide"
          }, null) : "";
      }
    };
    return () => {
      var a, s;
      return oe(u("div", {
        class: z(),
        style: {
          width: h.value
        },
        onMouseenter: Q,
        onMouseleave: K
      }, [u("div", {
        class: z("_wrapper"),
        ref: g,
        style: {
          height: n.value,
          width: h.value
        },
        onScroll: G
      }, [u("div", {
        class: z("_view"),
        ref: S
      }, [(s = (a = r.slots).default) == null ? void 0 : s.call(a)])]), u("div", {
        class: [z("_bar"), "horizontal"]
      }, [U(F.HORIZONTAL)]), u("div", {
        class: [z("_bar"), "vertical"]
      }, [U(F.VERTICAL)])]), [[re("css"), k.value || {}]]);
    };
  }
}), Le = ge(Ye, "scroll-bar"), {
  n: Xe,
  classes: He
} = W("time-picker"), We = /* @__PURE__ */ H({
  name: "VITimePicker",
  emits: ["click", "inputClick", "closeClick", "cancelClick", "okClick", "update:modelValue", "focus", "blur"],
  directives: {
    css: ie
  },
  props: ce,
  components: {
    "vi-time-picker-input": Ne,
    "vi-time-picker-popper": Pe,
    "vi-scroll-bar": Le
  },
  setup(t, r) {
    const v = [null, null, null];
    let l = "";
    const d = (e) => e < 10 ? "0" + e : e + "", g = (e) => {
      const i = e.match(/^(\d{1,2}):(\d{1,2}):(\d{1,2})$/);
      return i || console.warn("初始化数据格式不符合规范,已被清空！"), i;
    }, S = () => "xxxxxxxx".replace(/[xy]/g, function(e) {
      var i = 0 | 16 * Math.random(), p = e == "x" ? i : 8 | 3 & i;
      return p.toString(16);
    }), x = N();
    let o = N(), y = N(), k = N();
    const n = j({
      uuid: S(),
      popperVisible: !1,
      softFocus: !1,
      isSubmit: !1,
      hourList: [],
      minuteList: [],
      secondList: [],
      currentSelect: ["", "", ""]
    }), h = function() {
      n.popperVisible = !1, n.softFocus = !1;
    }, C = function(e) {
      let i = !1;
      const p = e.path || e.composedPath && e.composedPath();
      for (let M = 0; M < p.length; M++) {
        const R = p[M];
        if (R.classList && R.classList.value && R.getAttribute("class").includes("-time-picker") && R.dataset.id == n.uuid) {
          i = !0;
          break;
        }
      }
      i || (h(), n.isSubmit = !0);
    };
    document.addEventListener("mousedown", C);
    const I = function(e) {
      r.emit && r.emit("focus");
    }, B = function(e) {
      r.emit && r.emit("blur");
    }, m = function() {
      r.emit && r.emit("click");
    }, Y = function(e) {
      n.popperVisible = !n.popperVisible, n.isSubmit = !1, t.modelValue || U(), r.emit && r.emit("inputClick");
    }, b = function() {
      n.popperVisible = !1, r.emit && r.emit("closeClick");
    }, A = function(e) {
      const {
        type: i
      } = e.target.dataset;
      n.popperVisible = !1, i == "cancel" ? (n.isSubmit = !1, r.emit && r.emit("update:modelValue", l), r.emit && r.emit("cancelClick"), K()) : i == "ok" && (n.isSubmit = !0, r.emit && r.emit("okClick", n.currentSelect));
    }, _ = function(e, i) {
      const p = {
        index: {
          hour: "0",
          minute: "1",
          second: "2"
        },
        ref: {
          hour: o,
          minute: y,
          second: k
        }
      }, {
        num: M,
        disabled: R
      } = i.dataset;
      if (M) {
        if (R == "true")
          return;
        n.currentSelect[p.index[e]] = M;
        const ee = Number(n.currentSelect[p.index[e]]) * Number(s.value["popper-spinner-number-height"]);
        p.ref[e].value.setScrollTop(ee);
      }
    }, L = function(e) {
      _("hour", e.target);
    }, E = function(e) {
      _("minute", e.target);
    }, w = function(e) {
      _("second", e.target);
    }, f = function(e, i) {
      const p = {
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
      let R = Math.round(e / Number(s.value["popper-spinner-number-height"]));
      if (t[p.ableRange[i]].filter((Me) => Me == R).length > 0)
        return;
      n.currentSelect[p.timers[i]] = d(R);
      let te = R * Number(s.value["popper-spinner-number-height"]);
      v[p.timers[i]] && (clearTimeout(v[p.timers[i]]), v[p.timers[i]] = null), v[p.timers[i]] = setTimeout(() => {
        i == "hour" && o.value.setScrollTop(te), i == "minute" && y.value.setScrollTop(te), i == "second" && k.value.setScrollTop(te);
      }, 200);
    }, P = function(e, i) {
      f(i, "hour");
    }, $ = function(e, i) {
      f(i, "minute");
    }, G = function(e, i) {
      f(i, "second");
    }, Q = () => {
      n.hourList = new Array(24).fill(0).map((e, i) => i < 10 ? "0" + i : i + ""), n.minuteList = new Array(60).fill(0).map((e, i) => i < 10 ? "0" + i : i + ""), n.secondList = new Array(60).fill(0).map((e, i) => i < 10 ? "0" + i : i + "");
    }, K = function() {
      l && (o.value.setScrollTop(Number(l.slice(0, 2)) * Number(s.value["popper-spinner-number-height"])), y.value.setScrollTop(Number(l.slice(3, 5)) * Number(s.value["popper-spinner-number-height"])), k.value.setScrollTop(Number(l.slice(6, 8)) * Number(s.value["popper-spinner-number-height"])));
    }, U = () => {
      const e = new Date(), i = e.getHours(), p = e.getMinutes(), M = e.getSeconds();
      n.currentSelect[0] = d(i), n.currentSelect[1] = d(p), n.currentSelect[2] = d(M), o.value.setScrollTop(Number(n.currentSelect[0]) * Number(s.value["popper-spinner-number-height"])), y.value.setScrollTop(Number(n.currentSelect[1]) * Number(s.value["popper-spinner-number-height"])), k.value.setScrollTop(Number(n.currentSelect[2]) * Number(s.value["popper-spinner-number-height"])), r.emit && r.emit("update:modelValue", n.currentSelect[0] + ":" + n.currentSelect[1] + ":" + n.currentSelect[2]);
    }, a = function() {
      if (t.modelValue && g(t.modelValue)) {
        const e = t.modelValue.split(":"), i = t.disabledHours.findIndex((R) => R == e[0]) != -1, p = t.disabledMinutes.findIndex((R) => R == e[1]) != -1, M = t.disabledSeconds.findIndex((R) => R == e[2]) != -1;
        if (i || p || M)
          return console.warn("输入的值包含禁用项,已被清空"), r.emit && r.emit("update:modelValue", ""), !0;
      }
      return !1;
    };
    xe(() => {
      if (t.modelValue && g(t.modelValue) && !a()) {
        const e = t.modelValue.split(":");
        n.currentSelect[0] = e[0], n.currentSelect[1] = e[1], n.currentSelect[2] = e[2], l = t.modelValue;
      }
    }), ne(() => {
      Q(), q(() => {
        K();
      });
    });
    const s = c(() => Object.assign(ce.dynamicCss.default(), t.dynamicCss)), V = c(() => {
      const e = {};
      for (const i in s.value)
        i.includes("input") && (e[i] = s.value[i]);
      return e;
    }), J = c({
      get() {
        return a(), t.modelValue;
      },
      set(e) {
        r.emit && r.emit("update:modelValue", e);
      }
    }), O = c(() => t.clearable), X = function(e, i) {
      const p = {
        hour: "disabledHours",
        minute: "disabledMinutes",
        second: "disabledSeconds"
      };
      let M = !1;
      return t[p[e]].forEach((R) => R == i ? M = !0 : ""), M;
    }, D = c(() => function(e) {
      return X("hour", e);
    }), ae = c(() => function(e) {
      return X("minute", e);
    }), le = c(() => function(e) {
      return X("second", e);
    });
    return ue(() => {
      const e = n.currentSelect[0], i = n.currentSelect[1], p = n.currentSelect[2];
      if (!e && !i && !p) {
        r.emit && r.emit("update:modelValue", "");
        return;
      }
      const M = e + ":" + i + ":" + p;
      r.emit && r.emit("update:modelValue", M);
    }), ue(() => {
      n.isSubmit && (l = t.modelValue, r.emit && r.emit("update:modelValue", l));
    }), ve(we, {
      timePickerRef: x
    }), () => oe(u("div", {
      ref: x,
      "data-id": n.uuid,
      class: [He(Xe())],
      onClick: m
    }, [u(T("vi-time-picker-input"), {
      placeholder: t.placeholder,
      modelValue: J.value,
      "onUpdate:modelValue": (e) => J.value = e,
      onFocus: I,
      onBlur: B,
      onClose: b,
      dynamicCss: V.value || {},
      clearable: O.value,
      readonly: !0,
      onClick: Y
    }, null), u(T("vi-time-picker-popper"), {
      active: n.popperVisible
    }, {
      default: () => [u("div", {
        class: "time-panel"
      }, [u("div", {
        class: "time-panel__content"
      }, [u(T("vi-scroll-bar"), {
        ref: o,
        class: "time-panel__spinner time-panel__popper-spinner--hour",
        onScroll: P,
        height: Number(s.value["popper-spinner-number-height"]) * 6 + "px"
      }, {
        default: () => [u("ul", {
          onClick: L
        }, [n.hourList.map((e) => u("li", {
          "data-num": e,
          "data-disabled": D.value(Number(e)),
          class: [n.currentSelect[0] == e ? "active" : "", D.value(Number(e)) ? "disabled" : ""]
        }, [e]))])]
      }), u(T("vi-scroll-bar"), {
        ref: y,
        class: "time-panel__spinner time-panel__popper-spinner--minutes",
        onScroll: $,
        height: Number(s.value["popper-spinner-number-height"]) * 6 + "px"
      }, {
        default: () => [u("ul", {
          onClick: E
        }, [n.minuteList.map((e) => u("li", {
          "data-num": e,
          "data-disabled": ae.value(Number(e)),
          class: [n.currentSelect[1] == e ? "active" : "", ae.value(Number(e)) ? "disabled" : ""]
        }, [e]))])]
      }), u(T("vi-scroll-bar"), {
        ref: k,
        class: "time-panel__spinner time-panel__popper-spinner--second",
        onScroll: G,
        height: Number(s.value["popper-spinner-number-height"]) * 6 + "px"
      }, {
        default: () => [u("ul", {
          onClick: w
        }, [n.secondList.map((e) => u("li", {
          "data-num": e,
          "data-disabled": le.value(Number(e)),
          class: [n.currentSelect[2] == e ? "active" : "", le.value(Number(e)) ? "disabled" : ""]
        }, [e]))])]
      })]), u("div", {
        class: "time-panel__footer",
        onClick: A
      }, [u("div", {
        "data-type": "cancel",
        class: "time-panel__footer_cancel"
      }, [se("取消")]), u("div", {
        "data-type": "ok",
        class: "time-panel__footer_ok"
      }, [se("确认")])])])]
    })]), [[re("css"), s.value || {}]]);
  }
}), Ee = ge(We, "time-picker");
export {
  Ee as TimePicker,
  Ee as default
};
