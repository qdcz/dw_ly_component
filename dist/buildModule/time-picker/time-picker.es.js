import { defineComponent as A, createVNode as l, reactive as F, computed as s, withDirectives as te, resolveComponent as T, resolveDirective as oe, inject as fe, ref as V, onMounted as re, nextTick as U, watch as Se, provide as ve, onBeforeMount as xe, watchEffect as ue, createTextVNode as se } from "vue";
const ge = (t, o) => (t.install = function(d) {
  if (t) {
    const u = t.name || t.__name;
    if (u || o) {
      const c = o ? `dw-${o}` : "dw-" + u.replace(/dw/gi, "").toLowerCase();
      d.component(c, t);
    } else
      console.error(t, o, !o);
  }
}, t), ye = (t) => Array.isArray(t);
function E(t) {
  const o = `vi-${t}`;
  return {
    n: (c) => c ? c.startsWith("-") ? `${o}${c}` : `${o}_${c}` : o,
    classes: (...c) => c.map((f) => {
      if (ye(f)) {
        const [k, r, m = null] = f;
        return k ? r : m;
      }
      return f;
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
  // 限制时间选择范围
  disabledHours: {
    type: Array,
    default: []
  },
  // 限制时间选择范围
  disabledMinutes: {
    type: Array,
    default: []
  },
  // 限制时间选择范围
  disabledSeconds: {
    type: Array,
    default: []
  },
  // 通过界面上的箭头进行选择
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
      /**
       * input组件
       */
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
      /**
       * popper组件样式
       */
      "popper-bg-color": "#fff",
      "popper-height": "228",
      // max-height
      "popper-border-radius": "8",
      "popper-z-index": "999",
      "popper-box-shadow-x": "0",
      "popper-box-shadow-y": "0",
      "popper-box-shadow-blur": "12",
      "popper-box-shadow-spread": "0",
      "popper-box-shadow-color": "rgba(0, 0, 0, 0.12)",
      "popper-arrow-height": "5",
      /**
       * time-panel样式
       */
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
      /**
       * time-panel popper-spinner
       */
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
      /**
       * scroll-bar样式
       */
      "scroll-bar-thumb-width": "8",
      scrollBarHeight: "60",
      scrollBarBgColor: "rgb(218, 218, 218)",
      scrollBarBgColorHover: "skyblue"
    })
  }
}, we = Symbol("time-picker"), pe = function(t, o) {
  for (let [d, u] of Object.entries(o.value))
    t.style.setProperty("--" + d, u);
}, ne = {
  mounted(t, o) {
    pe(t, o);
  },
  updated(t, o) {
    pe(t, o);
  },
  install(t) {
    t.directive("Css", this);
  }
}, {
  n: ke,
  classes: Ce
} = E("input-svg-icon"), Ie = /* @__PURE__ */ A({
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
  setup(t, o) {
    const d = function(u) {
      o.emit("click", u);
    };
    return () => l("svg", {
      class: [Ce(ke()), "icon"],
      height: t.height,
      width: t.width,
      viewBox: "0 0 1024 1024",
      xmlns: "http://www.w3.org/2000/svg",
      onClick: d
    }, [l("path", {
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
      /**
       * input组件
       */
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
} = E("timePickerInput"), Ne = /* @__PURE__ */ A({
  name: "VITimePickerInput",
  emits: ["focus", "blur", "click", "update:modelValue", "close"],
  directives: {
    css: ne
  },
  props: de,
  components: {
    "vi-input-svg-icon": Ie
  },
  setup(t, o) {
    const d = "M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z", u = F({
      softFocus: !1,
      isHover: !1
    }), c = function(b) {
      g.value || o.emit("click", b);
    }, f = function(b) {
      g.value || (o.emit("update:modelValue", b.target.value), o.emit("close"), b.stopPropagation());
    }, k = function(b) {
      g.value || (o.emit("focus", b), u.softFocus = !0);
    }, r = function(b) {
      g.value || (o.emit("blur", b), u.softFocus = !1);
    }, m = function(b) {
      g.value || (u.isHover = !0);
    }, C = function(b) {
      g.value || (u.isHover = !1);
    }, M = function(b) {
      g.value || o.emit("update:modelValue", b.target.value);
    }, n = function(b) {
      g.value || o.emit("update:modelValue", b.target.value);
    }, I = s(() => Object.assign(de.dynamicCss.default(), t.dynamicCss)), B = s(() => typeof t.readonly == "string" ? !0 : t.readonly), y = s(() => typeof t.clearable == "string" ? !0 : t.clearable), N = s(() => typeof t.showPassword == "string" ? !0 : t.showPassword), g = s(() => typeof t.disabled == "string" ? !0 : t.disabled), Y = s(() => u.softFocus ? "active" : "");
    return () => te(l("div", {
      class: [Be(he()), Y.value, g.value ? "disabled" : ""],
      onClick: c,
      onMouseenter: m,
      onMouseleave: C
    }, [l("input", {
      class: [he("_inner")],
      placeholder: t.placeholder,
      onFocus: k,
      onBlur: r,
      readonly: B.value || g.value,
      value: t.modelValue,
      onChange: M,
      onInput: n,
      type: N.value ? "password" : "text"
    }, null), t.modelValue && y.value && u.isHover ? l(T("vi-input-svg-icon"), {
      class: "icon",
      height: I.value["input-icon-width"],
      width: I.value["input-icon-width"],
      path: d,
      onClick: f
    }, null) : ""]), [[oe("css"), I.value || {}]]);
  }
}), {
  n: K,
  classes: me
} = E("popper"), Pe = /* @__PURE__ */ A({
  name: "VITimePickerPopper",
  emits: ["focus", "blur", "click"],
  props: ["active"],
  setup(t, o) {
    let {
      timePickerRef: d
    } = fe(we);
    const u = F({
      parentRect: {
        x: 0,
        y: 0,
        height: 0,
        width: 0
      },
      dropdownTop: "0"
    }), c = V(null), f = V(null), k = () => {
      U(() => {
        u.parentRect = d.value.getBoundingClientRect(), u.dropdownTop = u.parentRect.height + 10 + "px";
      });
    };
    return re(() => k()), () => {
      var r, m;
      return l("div", {
        class: [K(""), t.active ? "active" : ""],
        style: {
          top: u.dropdownTop
        }
      }, [l("div", {
        ref: c,
        class: [K("_arrow")]
      }, [t.active]), l("div", {
        ref: f,
        class: [me(K("_content"))]
      }, [l("div", {
        class: [me(K("_inner"))]
      }, [(m = (r = o.slots).default) == null ? void 0 : m.call(r)])])]);
    };
  }
}), be = {
  // 超过最大高度启动滚动条
  height: {
    type: [String, Boolean],
    // Boolean 为false 时 关闭宽度滚动条限制
    default: "300px"
  },
  // 超过最大宽度启动滚动条
  width: {
    type: [String, Boolean],
    // Boolean 为false 时 关闭宽度滚动条限制
    default: "auto"
  },
  // 拇指宽度
  thumbWidth: {
    type: String,
    default: "6px"
  },
  noResize: Boolean,
  // 如果 container 尺寸不会发生变化，最好设置它可以优化性能（针对高度，宽度默认就是开着）
  dynamicCss: {
    type: Object,
    default: () => ({
      /**
       * 拇指样式
       */
      "thumb-bg-color": "#d9dfe3"
    })
  }
};
var z = /* @__PURE__ */ ((t) => (t.HORIZONTAL = "horizontal", t.VERTICAL = "vertical", t))(z || {});
const Ve = {
  // 横向还是竖向
  type: {
    type: [String || z],
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
  // transform 偏移量
  ratioX: {
    type: String,
    default: "0px"
  },
  // transform 偏移量
  ratioY: {
    type: String,
    default: "0px"
  }
}, Re = Symbol("scroll-bar"), {
  n: _e
} = E("scroll-bar__thumb"), Te = /* @__PURE__ */ A({
  name: "ScrollBar",
  emits: ["update:height", "update:width"],
  props: Ve,
  setup(t, o) {
    const {
      thumbRatioY: d,
      thumbRatioX: u,
      thumbRatioYMaxRange: c,
      thumbRatioXMaxRange: f,
      wrapperInnerMaxiMoveProportionY: k,
      wrapperInnerMaxiMoveProportionX: r,
      scrollBarRef: m
    } = fe(Re), C = V(), M = F({
      mouseMoving: !1
    });
    let n = 0, I = 0, B = 0, y = 0, N = 0, g = 0;
    const Y = s({
      get() {
        return t.height;
      },
      set(w) {
        o.emit && o.emit("update:height", w);
      }
    }), b = s({
      get() {
        return t.width;
      },
      set(w) {
        o.emit && o.emit("update:width", w);
      }
    }), $ = function(w) {
      if (w == "vertical") {
        let v = 0;
        const P = N;
        v = B < 0 ? P + Math.abs(B) : P - Math.abs(B), v < 0 && (v = 0), v > c.value && (v = c.value), m.value.scrollTop = Math.abs(k.value * v);
      } else if (w == "horizontal") {
        let v = 0;
        const P = g;
        v = y < 0 ? P + Math.abs(y) : P - Math.abs(y), v < 0 && (v = 0), v > f.value && (v = f.value), m.value.scrollLeft = Math.abs(r.value * v);
      }
    }, _ = function(w) {
      M.mouseMoving = !0, N = Number(d.value.slice(11, -3)), g = Number(u.value.slice(11, -3)), n = Number(w.clientY), I = Number(w.clientX);
    }, L = function(w) {
      B = n - w.clientY, y = I - w.clientX, $(t.type);
    };
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", L), document.removeEventListener("mousedown", _), n = 0, I = 0, B = 0, y = 0, N = 0, g = 0, M.mouseMoving = !1;
    });
    const X = (w) => {
      document.addEventListener("mousedown", _), document.addEventListener("mousemove", L);
    };
    return () => l("div", {
      class: _e(),
      ref: C,
      style: {
        height: Y.value,
        width: b.value,
        transform: t.type == "vertical" ? t.ratioY : t.ratioX
      },
      onMousedown: X
    }, null);
  }
}), {
  n: O
} = E("scroll-bar"), Ye = /* @__PURE__ */ A({
  name: "ScrollBar",
  emits: ["update:width", "scroll"],
  directives: {
    css: ne
  },
  props: be,
  // expose:['setScrollTop','setScrollLeft','setScrollTop'],
  components: {
    "scroll-bar-thumb": Te
  },
  setup(t, o) {
    let d = null;
    const u = (a) => {
      P();
    }, c = V(), f = V(), k = V(), r = F({
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
    let m = V(!1);
    Se(() => t.noResize, (a) => {
      a ? d == null || d.disconnect() : (d = new MutationObserver(u), U(() => {
        d.observe(f.value, {
          attributes: !0,
          childList: !0,
          subtree: !0
        });
      }));
    }, {
      immediate: !0
    });
    const C = s(() => Object.assign(be.dynamicCss.default(), t.dynamicCss)), M = s(() => t.height), n = s({
      get() {
        return r.cacheContainerWidth;
      },
      set(a) {
        r.cacheContainerWidth = a;
      }
    }), I = s({
      get() {
        return r.thumbHeight;
      },
      set(a) {
        r.thumbHeight = a;
      }
    }), B = s({
      get() {
        return r.thumbWidth;
      },
      set(a) {
        r.thumbWidth = a;
      }
    }), y = s({
      get() {
        return r.thumbRatioX;
      },
      set(a) {
        r.thumbRatioX = a;
      }
    }), N = s({
      get() {
        return r.thumbRatioY;
      },
      set(a) {
        r.thumbRatioY = a;
      }
    }), g = s(() => r.thumbRatioYMaxRange), Y = s(() => r.thumbRatioXMaxRange), b = s(() => r.wrapperInnerMaxiMoveProportionY), $ = s(() => r.wrapperInnerMaxiMoveProportionX), _ = (a) => {
      r.thumbRatioY = `translateY(${String(r.thumbRatioYProportion * a) + "px"})`;
    }, L = (a) => {
      r.thumbRatioX = `translateX(${String(r.thumbRatioXProportion * a) + "px"})`;
    }, X = (a) => {
      c.value.scrollTop = a;
    }, w = (a) => {
      c.value.scrollLeft = a;
    }, v = (a, x) => {
      X(a), w(x);
    }, P = (a) => {
      var x, h;
      r.wrapperInnerRealHeight = Number((x = f.value) == null ? void 0 : x.scrollHeight), r.wrapperInnerRealWidth = Number((h = f.value) == null ? void 0 : h.scrollWidth), r.wrapperInnerMaxiMoveRangeY = r.wrapperInnerRealHeight - Number(M.value.replace("px", "")), r.wrapperInnerMaxiMoveRangeX = r.wrapperInnerRealWidth - Number(n.value.replace("px", "")), r.thumbHeightProportion = Number(M.value.replace("px", "")) / r.wrapperInnerRealHeight, r.thumbWidthProportion = Number(n.value.replace("px", "")) / r.wrapperInnerRealWidth, r.thumbHeight = String(r.thumbHeightProportion * Number(M.value.replace("px", ""))) + "px", r.thumbWidth = String(r.thumbWidthProportion * Number(n.value.replace("px", ""))) + "px", r.thumbRatioYMaxRange = Number(M.value.replace("px", "")) - Number(r.thumbHeight.replace("px", "")), r.thumbRatioXMaxRange = Number(n.value.replace("px", "")) - Number(r.thumbWidth.replace("px", "")), r.thumbRatioYProportion = r.thumbRatioYMaxRange / r.wrapperInnerMaxiMoveRangeY, r.thumbRatioXProportion = r.thumbRatioXMaxRange / r.wrapperInnerMaxiMoveRangeX, r.wrapperInnerMaxiMoveProportionY = r.wrapperInnerMaxiMoveRangeY / r.thumbRatioYMaxRange, r.wrapperInnerMaxiMoveProportionX = r.wrapperInnerMaxiMoveRangeX / r.thumbRatioXMaxRange;
    };
    re(() => {
      r.cacheContainerWidth = t.width, P();
    });
    const J = (a) => {
      const x = a.target.scrollTop, h = a.target.scrollLeft;
      _(x), L(h), o.emit && o.emit("scroll", h, x);
    }, Z = () => {
      m.value = !0;
    }, q = () => {
      m.value = !1;
    };
    ve(Re, {
      height: M,
      thumbRatioY: N,
      thumbRatioX: y,
      thumbRatioYMaxRange: g,
      thumbRatioXMaxRange: Y,
      wrapperInnerMaxiMoveProportionY: b,
      wrapperInnerMaxiMoveProportionX: $,
      scrollBarRef: c
    }), o.expose({
      setScrollTop: X,
      setScrollLeft: w,
      setScrollTo: v
    });
    const D = (a = z.VERTICAL) => {
      if (t.width === !1 || t.height === !1)
        return "";
      const x = r.wrapperInnerRealHeight, h = Number(t.height.replace("px", "")), G = r.wrapperInnerRealWidth;
      if (a == "vertical")
        return h < x ? l(T("scroll-bar-thumb"), {
          ref: k,
          type: a,
          height: I.value,
          width: t.thumbWidth,
          ratioX: y.value,
          ratioY: N.value,
          class: m.value ? "show" : "hide"
        }, null) : "";
      if (a == "horizontal") {
        let H = Number(n.value.replace("px", ""));
        if (n.value == "auto") {
          const j = () => {
            n.value = "auto", U(() => {
              var W;
              H = Number((W = f.value) == null ? void 0 : W.clientWidth), n.value = H + "px", P();
            });
          };
          j(), window.onresize = () => j();
        } else if (n.value)
          return H < G ? l(T("scroll-bar-thumb"), {
            ref: k,
            type: a,
            height: t.thumbWidth,
            width: B.value,
            ratioX: y.value,
            ratioY: N.value,
            class: m.value ? "show" : "hide"
          }, null) : "";
      }
    };
    return () => {
      var a, x;
      return te(l("div", {
        class: O(),
        style: {
          width: n.value
        },
        onMouseenter: Z,
        onMouseleave: q
      }, [l("div", {
        class: O("_wrapper"),
        ref: c,
        style: {
          height: M.value,
          width: n.value
        },
        onScroll: J
      }, [l("div", {
        class: O("_view"),
        ref: f
      }, [(x = (a = o.slots).default) == null ? void 0 : x.call(a)])]), l("div", {
        class: [O("_bar"), "horizontal"]
      }, [D(z.HORIZONTAL)]), l("div", {
        class: [O("_bar"), "vertical"]
      }, [D(z.VERTICAL)])]), [[oe("css"), C.value || {}]]);
    };
  }
}), Le = ge(Ye, "scroll-bar"), {
  n: Xe,
  classes: He
} = E("time-picker"), We = /* @__PURE__ */ A({
  name: "VITimePicker",
  emits: ["click", "inputClick", "closeClick", "cancelClick", "okClick", "update:modelValue", "focus", "blur"],
  directives: {
    css: ne
  },
  props: ce,
  components: {
    "vi-time-picker-input": Ne,
    "vi-time-picker-popper": Pe,
    "vi-scroll-bar": Le
  },
  setup(t, o) {
    const d = [null, null, null];
    let u = "";
    const c = (e) => e < 10 ? "0" + e : e + "", f = (e) => {
      const i = e.match(/^(\d{1,2}):(\d{1,2}):(\d{1,2})$/);
      return i || console.warn("初始化数据格式不符合规范,已被清空！"), i;
    }, k = () => "xxxxxxxx".replace(/[xy]/g, function(e) {
      var i = 0 | 16 * Math.random(), p = e == "x" ? i : 8 | 3 & i;
      return p.toString(16);
    }), r = V();
    let m = V(), C = V(), M = V();
    const n = F({
      uuid: k(),
      popperVisible: !1,
      softFocus: !1,
      isSubmit: !1,
      // 是否确定
      hourList: [],
      minuteList: [],
      secondList: [],
      currentSelect: ["", "", ""]
    }), I = function() {
      n.popperVisible = !1, n.softFocus = !1;
    }, B = function(e) {
      let i = !1;
      const p = e.path || e.composedPath && e.composedPath();
      for (let S = 0; S < p.length; S++) {
        const R = p[S];
        if (R.classList && R.classList.value && R.getAttribute("class").includes("-time-picker") && R.dataset.id == n.uuid) {
          i = !0;
          break;
        }
      }
      i || (I(), n.isSubmit = !0);
    };
    document.addEventListener("mousedown", B);
    const y = function(e) {
      o.emit && o.emit("focus");
    }, N = function(e) {
      o.emit && o.emit("blur");
    }, g = function() {
      o.emit && o.emit("click");
    }, Y = function(e) {
      n.popperVisible = !n.popperVisible, n.isSubmit = !1, t.modelValue || a(), o.emit && o.emit("inputClick");
    }, b = function() {
      n.popperVisible = !1, o.emit && o.emit("closeClick");
    }, $ = function(e) {
      const {
        type: i
      } = e.target.dataset;
      n.popperVisible = !1, i == "cancel" ? (n.isSubmit = !1, o.emit && o.emit("update:modelValue", u), o.emit && o.emit("cancelClick"), D()) : i == "ok" && (n.isSubmit = !0, o.emit && o.emit("okClick", n.currentSelect));
    }, _ = function(e, i) {
      const p = {
        index: {
          hour: "0",
          minute: "1",
          second: "2"
        },
        ref: {
          hour: m,
          minute: C,
          second: M
        }
      }, {
        num: S,
        disabled: R
      } = i.dataset;
      if (S) {
        if (R == "true")
          return;
        n.currentSelect[p.index[e]] = S;
        const Q = Number(n.currentSelect[p.index[e]]) * Number(h.value["popper-spinner-number-height"]);
        p.ref[e].value.setScrollTop(Q);
      }
    }, L = function(e) {
      _("hour", e.target);
    }, X = function(e) {
      _("minute", e.target);
    }, w = function(e) {
      _("second", e.target);
    }, v = function(e, i) {
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
      let R = Math.round(e / Number(h.value["popper-spinner-number-height"]));
      if (t[p.ableRange[i]].filter((Me) => Me == R).length > 0)
        return;
      n.currentSelect[p.timers[i]] = c(R);
      let ee = R * Number(h.value["popper-spinner-number-height"]);
      d[p.timers[i]] && (clearTimeout(d[p.timers[i]]), d[p.timers[i]] = null), d[p.timers[i]] = setTimeout(() => {
        i == "hour" && m.value.setScrollTop(ee), i == "minute" && C.value.setScrollTop(ee), i == "second" && M.value.setScrollTop(ee);
      }, 200);
    }, P = function(e, i) {
      v(i, "hour");
    }, J = function(e, i) {
      v(i, "minute");
    }, Z = function(e, i) {
      v(i, "second");
    }, q = () => {
      n.hourList = new Array(24).fill(0).map((e, i) => i < 10 ? "0" + i : i + ""), n.minuteList = new Array(60).fill(0).map((e, i) => i < 10 ? "0" + i : i + ""), n.secondList = new Array(60).fill(0).map((e, i) => i < 10 ? "0" + i : i + "");
    }, D = function() {
      u && (m.value.setScrollTop(Number(u.slice(0, 2)) * Number(h.value["popper-spinner-number-height"])), C.value.setScrollTop(Number(u.slice(3, 5)) * Number(h.value["popper-spinner-number-height"])), M.value.setScrollTop(Number(u.slice(6, 8)) * Number(h.value["popper-spinner-number-height"])));
    }, a = () => {
      const e = new Date(), i = e.getHours(), p = e.getMinutes(), S = e.getSeconds();
      n.currentSelect[0] = c(i), n.currentSelect[1] = c(p), n.currentSelect[2] = c(S), m.value.setScrollTop(Number(n.currentSelect[0]) * Number(h.value["popper-spinner-number-height"])), C.value.setScrollTop(Number(n.currentSelect[1]) * Number(h.value["popper-spinner-number-height"])), M.value.setScrollTop(Number(n.currentSelect[2]) * Number(h.value["popper-spinner-number-height"])), o.emit && o.emit("update:modelValue", n.currentSelect[0] + ":" + n.currentSelect[1] + ":" + n.currentSelect[2]);
    }, x = function() {
      if (t.modelValue && f(t.modelValue)) {
        const e = t.modelValue.split(":"), i = t.disabledHours.findIndex((R) => R == e[0]) != -1, p = t.disabledMinutes.findIndex((R) => R == e[1]) != -1, S = t.disabledSeconds.findIndex((R) => R == e[2]) != -1;
        if (i || p || S)
          return console.warn("输入的值包含禁用项,已被清空"), o.emit && o.emit("update:modelValue", ""), !0;
      }
      return !1;
    };
    xe(() => {
      if (t.modelValue && f(t.modelValue) && !x()) {
        const e = t.modelValue.split(":");
        n.currentSelect[0] = e[0], n.currentSelect[1] = e[1], n.currentSelect[2] = e[2], u = t.modelValue;
      }
    }), re(() => {
      q(), U(() => {
        D();
      });
    });
    const h = s(() => Object.assign(ce.dynamicCss.default(), t.dynamicCss)), G = s(() => {
      const e = {};
      for (const i in h.value)
        i.includes("input") && (e[i] = h.value[i]);
      return e;
    }), H = s({
      get() {
        return x(), t.modelValue;
      },
      set(e) {
        o.emit && o.emit("update:modelValue", e);
      }
    }), j = s(() => t.clearable), W = function(e, i) {
      const p = {
        hour: "disabledHours",
        minute: "disabledMinutes",
        second: "disabledSeconds"
      };
      let S = !1;
      return t[p[e]].forEach((R) => R == i ? S = !0 : ""), S;
    }, ie = s(() => function(e) {
      return W("hour", e);
    }), ae = s(() => function(e) {
      return W("minute", e);
    }), le = s(() => function(e) {
      return W("second", e);
    });
    return ue(() => {
      const e = n.currentSelect[0], i = n.currentSelect[1], p = n.currentSelect[2];
      if (!e && !i && !p) {
        o.emit && o.emit("update:modelValue", "");
        return;
      }
      const S = e + ":" + i + ":" + p;
      o.emit && o.emit("update:modelValue", S);
    }), ue(() => {
      n.isSubmit && (u = t.modelValue, o.emit && o.emit("update:modelValue", u));
    }), ve(we, {
      timePickerRef: r
    }), () => te(l("div", {
      ref: r,
      "data-id": n.uuid,
      class: [He(Xe())],
      onClick: g
    }, [l(T("vi-time-picker-input"), {
      placeholder: t.placeholder,
      modelValue: H.value,
      "onUpdate:modelValue": (e) => H.value = e,
      onFocus: y,
      onBlur: N,
      onClose: b,
      dynamicCss: G.value || {},
      clearable: j.value,
      readonly: !0,
      onClick: Y
    }, null), l(T("vi-time-picker-popper"), {
      active: n.popperVisible
    }, {
      default: () => [l("div", {
        class: "time-panel"
      }, [l("div", {
        class: "time-panel__content"
      }, [l(T("vi-scroll-bar"), {
        ref: m,
        class: "time-panel__spinner time-panel__popper-spinner--hour",
        onScroll: P,
        height: Number(h.value["popper-spinner-number-height"]) * 6 + "px"
      }, {
        default: () => [l("ul", {
          onClick: L
        }, [n.hourList.map((e) => l("li", {
          "data-num": e,
          "data-disabled": ie.value(Number(e)),
          class: [n.currentSelect[0] == e ? "active" : "", ie.value(Number(e)) ? "disabled" : ""]
        }, [e]))])]
      }), l(T("vi-scroll-bar"), {
        ref: C,
        class: "time-panel__spinner time-panel__popper-spinner--minutes",
        onScroll: J,
        height: Number(h.value["popper-spinner-number-height"]) * 6 + "px"
      }, {
        default: () => [l("ul", {
          onClick: X
        }, [n.minuteList.map((e) => l("li", {
          "data-num": e,
          "data-disabled": ae.value(Number(e)),
          class: [n.currentSelect[1] == e ? "active" : "", ae.value(Number(e)) ? "disabled" : ""]
        }, [e]))])]
      }), l(T("vi-scroll-bar"), {
        ref: M,
        class: "time-panel__spinner time-panel__popper-spinner--second",
        onScroll: Z,
        height: Number(h.value["popper-spinner-number-height"]) * 6 + "px"
      }, {
        default: () => [l("ul", {
          onClick: w
        }, [n.secondList.map((e) => l("li", {
          "data-num": e,
          "data-disabled": le.value(Number(e)),
          class: [n.currentSelect[2] == e ? "active" : "", le.value(Number(e)) ? "disabled" : ""]
        }, [e]))])]
      })]), l("div", {
        class: "time-panel__footer",
        onClick: $
      }, [l("div", {
        "data-type": "cancel",
        class: "time-panel__footer_cancel"
      }, [se("取消")]), l("div", {
        "data-type": "ok",
        class: "time-panel__footer_ok"
      }, [se("确认")])])])]
    })]), [[oe("css"), h.value || {}]]);
  }
}), Ee = ge(We, "time-picker");
export {
  Ee as TimePicker,
  Ee as default
};
