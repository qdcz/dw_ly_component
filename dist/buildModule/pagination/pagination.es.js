import { defineComponent as B, inject as _, computed as d, createVNode as a, reactive as E, ref as O, nextTick as $, resolveComponent as I, onMounted as X, watchEffect as Se, watch as ae, onUnmounted as _e, getCurrentInstance as ye, provide as Ce, withDirectives as ke, resolveDirective as Le, createTextVNode as ze, isVNode as Ne } from "vue";
const ne = (e, l) => (e.install = function(s) {
  if (e) {
    const i = e.name || e.__name;
    if (i || l) {
      const o = l ? `dw-${l}` : "dw-" + i.replace(/dw/gi, "").toLowerCase();
      s.component(o, e);
    } else
      console.error(e, l, !l);
  }
}, e), se = {
  background: {
    type: Boolean,
    default: !1
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
    default: () => ({
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
    })
  }
}, He = (e) => Array.isArray(e);
function P(e) {
  const l = `vi-${e}`;
  return {
    n: (o) => o ? o.startsWith("-") ? `${l}${o}` : `${l}_${o}` : l,
    classes: (...o) => o.map((t) => {
      if (He(t)) {
        const [p, h, c = null] = t;
        return p ? h : c;
      }
      return t;
    })
  };
}
const A = Symbol("pagination"), {
  n: Oe,
  classes: De
} = P("pagination-prev"), re = /* @__PURE__ */ B({
  name: "VIPaginationPrev",
  emits: ["click"],
  setup(e, l) {
    let s = _(A);
    const i = d(() => s.currentPage.value <= 1), o = function(t) {
      i.value || l.emit("click", t);
    };
    return () => a("button", {
      type: "button",
      class: [De(Oe()), i.value ? "disabled" : ""],
      onClick: o.bind(this)
    }, [a("svg", {
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12"
    }, [a("path", {
      fill: "currentColor",
      d: "M740.352 174.08l-57.216-59.008L283.648 512l399.488 396.928 57.216-59.008L404.48 512z",
      "p-id": "3023"
    }, null)])]);
  }
}), {
  n: je,
  classes: $e
} = P("pagination-next"), ce = /* @__PURE__ */ B({
  name: "VIPaginationNext",
  emits: ["click"],
  setup(e, l) {
    let s = _(A);
    const i = d(() => s.currentPage.value >= s.pageCount.value), o = function(t) {
      i.value || l.emit("click", t);
    };
    return () => a("button", {
      type: "button",
      class: [$e(je()), i.value ? "disabled" : ""],
      onClick: o.bind(this)
    }, [a("svg", {
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12"
    }, [a("path", {
      fill: "currentColor",
      d: "M283.648 174.08l57.216-59.008L740.352 512 340.864 908.928 283.648 849.92 619.52 512z"
    }, null)])]);
  }
}), {
  n: H
} = P("pagination-pager"), ue = /* @__PURE__ */ B({
  name: "VIPaginationPager",
  emits: ["click"],
  setup(e, l) {
    let {
      currentPage: s,
      pagerCount: i,
      pageCount: o
    } = _(A);
    const t = E({
      quickPrevBtnIsHover: !1,
      quickNextBtnIsHover: !1
    }), p = {
      quickLeftArrow: "M62.56 511.904L485.952 88.256a48.64 48.64 0 0 1 68.736 68.736L199.616 512.064l356.8 356.8A48.64 48.64 0 0 1 487.68 937.6l-39.744-39.744 0.256-0.256L62.528 511.936z m388.8 0L874.752 88.256a48.64 48.64 0 0 1 68.736 68.736L588.416 512.064l356.8 356.8A48.64 48.64 0 0 1 876.48 937.6l-39.776-39.744 0.288-0.256-385.664-385.664z",
      quickRightArrow: 'M948.064 513.056L536.064 925.312a47.296 47.296 0 0 1-66.88-66.88l345.504-345.504L467.52 165.76a47.296 47.296 0 0 1 66.88-66.88l38.688 38.688-0.256 0.256 375.264 375.264m-378.336-0.032L157.76 925.312a47.296 47.296 0 0 1-66.88-66.88l345.472-345.504L89.184 165.76a47.296 47.296 0 0 1 66.88-66.88l38.688 38.688-0.256 0.256 375.264 375.264"',
      ellipsis: "M110.336 572.330667a85.333333 85.333333 0 1 0 120.661333-120.661334 85.333333 85.333333 0 0 0-120.661333 120.661334zM451.669333 572.330667a85.333333 85.333333 0 1 0 120.661334-120.661334 85.333333 85.333333 0 0 0-120.661334 120.661334zM793.002667 572.330667a85.333333 85.333333 0 1 0 120.661333-120.661334 85.333333 85.333333 0 0 0-120.661333 120.661334z"
    }, h = d(() => Math.floor(s.value / i.value) * i.value), c = d(() => i.value < o.value ? i.value : o.value - 1), m = d(() => w.value && v.value ? s.value : !1), w = d(() => o.value <= i.value ? 0 : s.value >= i.value - 2), v = d(() => o.value <= i.value ? 0 : s.value < o.value - i.value + 4), y = d(() => o.value > 1), S = function(b) {
      l.emit("click", b);
    }, u = (b) => t.quickPrevBtnIsHover = !0, k = (b) => t.quickPrevBtnIsHover = !1, f = (b) => t.quickNextBtnIsHover = !0, T = (b) => t.quickNextBtnIsHover = !1, J = (b) => s.value = s.value - i.value + 2, U = (b) => s.value = s.value + i.value - 2;
    return () => a("ul", {
      class: [H()]
    }, [a("li", {
      class: [H("_btn"), s.value == 1 ? "active" : ""],
      onClick: S.bind(this, 1)
    }, [1]), w.value ? a("li", {
      class: [H("_btn"), "quickPrev"],
      onMouseenter: u,
      onMouseleave: k,
      onClick: J
    }, [a("svg", {
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      name: t.quickPrevBtnIsHover ? "quickLeftArrow" : "ellipsis",
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12"
    }, [a("path", {
      fill: "currentColor",
      d: t.quickPrevBtnIsHover ? p.quickLeftArrow : p.ellipsis
    }, null)])]) : a("div", null, null), new Array(c.value).fill(m.value ? m.value : 0).map((b, C) => {
      let x = s.value, D = Math.ceil((i.value - 2) / 2), R = C > 0 && C < i.value - 1, N = h.value;
      if (b > 0) {
        if (R)
          return b = C <= D ? b - D + C : b + C - D, a("li", {
            class: [H("_btn"), x == b ? "active" : ""],
            onClick: S.bind(this, b)
          }, [b]);
      } else if (R)
        return x < i.value - 2 ? a("li", {
          class: [H("_btn"), x == N + C + 1 ? "active" : ""],
          onClick: S.bind(this, N + C + 1)
        }, [N + C + 1]) : a("li", {
          class: [H("_btn"), x == o.value - i.value + 1 + C ? "active" : ""],
          onClick: S.bind(this, o.value - i.value + 1 + C)
        }, [o.value - i.value + 1 + C]);
    }), v.value > 0 ? a("li", {
      class: [H("_btn"), "quickNext"],
      onMouseenter: f,
      onMouseleave: T,
      onClick: U
    }, [a("svg", {
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      name: t.quickNextBtnIsHover ? "quickRightArrow" : "ellipsis",
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12"
    }, [a("path", {
      fill: "currentColor",
      d: t.quickNextBtnIsHover ? p.quickRightArrow : p.ellipsis
    }, null)])]) : a("div", null, null), y.value ? a("li", {
      class: [H("_btn"), s.value == o.value ? "active" : ""],
      onClick: S.bind(this, o.value)
    }, [o.value]) : ""]);
  }
}), {
  n: de,
  classes: Ee
} = P("pagination-jump"), pe = /* @__PURE__ */ B({
  name: "VIPaginationJump",
  emits: ["jump-page"],
  setup(e, l) {
    let s = _(A);
    const i = E({
      num: ""
    }), o = O(), t = function(h) {
      (() => i.num = Math.random() * 1e6)();
      const m = Number(h.target.value);
      m <= 0 ? i.num = 1 : m > s.pageCount.value ? i.num = s.pageCount.value : i.num = m;
    }, p = function(h) {
      h.key == "Enter" && (o.value.blur(), $(() => l.emit("jump-page", i.num || 1)));
    };
    return () => a("div", {
      class: [Ee(de())]
    }, [a("span", null, [s.jumpLabel.value]), a("input", {
      ref: o,
      class: [de("_input")],
      value: i.num,
      type: "number",
      min: "1",
      tabindex: "0",
      autocomplete: "off",
      onChange: t.bind(this),
      onKeydown: p.bind(this)
    }, null)]);
  }
}), {
  n: te,
  classes: Te
} = P("pagination-total"), ve = /* @__PURE__ */ B({
  name: "VIPaginationTotal",
  emits: ["click"],
  setup() {
    let {
      total: e,
      totalLabel: l
    } = _(A);
    return () => a("div", {
      class: [Te(te())]
    }, [a("span", {
      class: [te("_label")]
    }, [l.value]), a("span", {
      class: [te("_value")]
    }, [e.value])]);
  }
}), q = Symbol("select-v2"), ge = function(e, l) {
  for (let [s, i] of Object.entries(l.value))
    e.style.setProperty("--" + s, i);
}, oe = {
  mounted(e, l) {
    ge(e, l);
  },
  updated(e, l) {
    ge(e, l);
  },
  install(e) {
    e.directive("Css", this);
  }
}, he = {
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
    default: "请选择您需要的选项o(*￣▽￣*)ブ"
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
      "popper-search-bg-color": "initial",
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
    })
  }
}, {
  n: Re,
  classes: Ye
} = P("select-v2-svg-icon"), W = /* @__PURE__ */ B({
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
  setup(e, l) {
    const s = function(o) {
      l.emit("click", o);
    }, i = function() {
      return a("svg", {
        class: [Ye(Re()), "icon"],
        height: e.height,
        width: e.width,
        viewBox: "0 0 1024 1024",
        xmlns: "http://www.w3.org/2000/svg",
        onClick: s
      }, [a("path", {
        fill: "currentColor",
        d: e.path
      }, null)]);
    };
    return () => i();
  }
}), {
  n: fe,
  classes: Ae
} = P("select-v2-input"), qe = /* @__PURE__ */ B({
  name: "VISelectV2Input",
  emits: ["focus", "blur", "click", "clear", "mouseenter", "mouseleave"],
  props: {
    active: {
      type: [Boolean, String],
      default: ""
    },
    placeholder: {
      type: String,
      default: "o(*￣▽￣*)ブ"
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
    "vi-select-v2-svg-icon": W
  },
  setup(e, l) {
    const {
      currentSelect: s,
      clearable: i,
      cacheOptionList: o,
      mode: t
    } = _(q), p = "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z", h = "M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z", c = E({
      isHover: !1
    }), m = function(f) {
      l.emit("click", f);
    }, w = function(f) {
      s.value = "", l.emit("clear"), f.stopPropagation();
    }, v = function(f) {
      l.emit("focus", f);
    }, y = function(f) {
      l.emit("blur", f);
    }, S = function(f) {
      c.isHover = !0, l.emit("mouseenter");
    }, u = function(f) {
      c.isHover = !1, l.emit("mouseleave");
    }, k = d(() => o.value[s.value]);
    return () => a("div", {
      class: [Ae(fe(), e.active ? "active" : "")],
      onClick: m,
      onMouseenter: S,
      onMouseleave: u
    }, [a("input", {
      class: [fe("_inner")],
      placeholder: e.placeholder,
      onFocus: v,
      onBlur: y,
      value: k.value,
      readonly: !0
    }, null), c.isHover && s.value && i.value && t.value == "single" ? a(I("vi-select-v2-svg-icon"), {
      height: e.iconHeight,
      width: e.iconWidth,
      path: h,
      onClick: w
    }, null) : a(I("vi-select-v2-svg-icon"), {
      height: e.iconHeight,
      width: e.iconWidth,
      path: p,
      class: ["arrow", e.active ? "turnUp" : "turnDown"]
    }, null)]);
  }
}), {
  n: G,
  classes: me
} = P("select-v2-dropdown"), Je = /* @__PURE__ */ B({
  name: "VISelectV2DropDown",
  emits: ["focus", "blur", "click"],
  props: ["active"],
  components: {
    "vi-svg-icon": W
  },
  setup(e, l) {
    const {
      selectRef: s,
      mode: i,
      currentSelect: o
    } = _(q), t = E({
      parentRect: {
        x: 0,
        y: 0
      },
      dropdownTop: "0"
    }), p = O(), h = O(), c = () => {
      $(() => {
        t.dropdownTop = s.value.clientHeight + 10 + "px";
      });
    };
    return X(() => c()), Se(() => {
      let m = o.value;
      i.value == "multiple" && m && setTimeout(() => {
        c();
      }, 200);
    }), () => {
      var m, w;
      return a("div", {
        class: [G("-popper"), e.active ? "active" : ""],
        style: {
          top: t.dropdownTop
        }
      }, [a("div", {
        ref: p,
        class: [G("-arrow"), e.active ? "active" : ""]
      }, null), a("div", {
        ref: h,
        class: [me(G(), e.active ? "active" : "")]
      }, [a("div", {
        class: [me(G("_inner"))]
      }, [(w = (m = l.slots).default) == null ? void 0 : w.call(m)])])]);
    };
  }
}), {
  n: be,
  classes: Ue
} = P("select-v2-tag"), Fe = /* @__PURE__ */ B({
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
      default: !1
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
    "vi-svg-icon": W
  },
  setup(e, l) {
    const {
      currentSelect: s
    } = _(q), i = "M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z", o = function(t) {
      const p = JSON.parse(JSON.stringify(s.value));
      try {
        p.forEach((h, c) => {
          if (h.value == e.value)
            throw p.splice(c, 1), new Error();
        });
      } catch {
      }
      s.value = p, l.emit && l.emit("closeClick", {
        currentClose: {
          label: e.label,
          value: e.value
        },
        currentSelects: JSON.parse(JSON.stringify(p))
      }), t.stopPropagation();
    };
    return () => a("div", {
      class: [Ue(be()), e.tooltip ? "useToolTip" : ""],
      "data-txt": e.label
    }, [a("span", {
      class: be("_span")
    }, [e.label]), a(I("vi-svg-icon"), {
      path: i,
      onClick: o,
      height: e.height + "px",
      width: e.width + "px"
    }, null)]);
  }
}), {
  n: le,
  classes: We
} = P("scroll-bar"), Ke = /* @__PURE__ */ B({
  name: "VIScrollBar",
  emits: ["focus", "blur", "click"],
  props: ["dynamicCss"],
  directives: {
    css: oe
  },
  setup(e, l) {
    const {
      cacheOptionList: s
    } = _(q), i = O(), o = O(), t = E({
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
      mouseMoving: !1
    }), p = function() {
      $(() => {
        const u = window.getComputedStyle(i.value.children[0]);
        t.realPadding = e.dynamicCss["popper-padding"] * 2, t.realHeight = u.height.replace("px", "") * 1, t.viewHeight = e.dynamicCss["popper-height"] * 1 - t.realPadding, t.maxScrollBoxRange = t.realHeight - t.viewHeight, t.proportion = Number((t.viewHeight / t.realHeight).toFixed(1)), t.scrollBarHeight = t.viewHeight * t.proportion, t.maxScrollBarRange = t.viewHeight - t.scrollBarHeight, t.scrollBarMovePropor = t.maxScrollBarRange / t.maxScrollBoxRange, t.scrollBoxMovePropor = t.maxScrollBoxRange / t.maxScrollBarRange;
      });
    };
    X(() => {
      p();
    }), ae(() => s.value, () => {
      p();
    }, {
      deep: !0,
      immediate: !1
    });
    const h = d(() => t.scrollBarHeight < t.realHeight), c = function(u) {
      const k = u.target.scrollTop;
      y(k);
    }, m = function(u) {
      document.addEventListener("mousedown", w), document.addEventListener("mousemove", v);
    }, w = function(u) {
      t.mouseMoving = !0, t.startY = u.clientY;
    }, v = function(u) {
      t.moveY = t.startY - u.clientY, S();
    };
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", v), document.removeEventListener("mousedown", w), t.startY = 0, t.moveY = 0, t.mouseMoving && (t.translateY = t._move), t.mouseMoving = !1;
    });
    const y = function(u) {
      t.mouseMoving || (t.translateY = t.scrollBarMovePropor * u, o.value.style.transform = `translateY(${t.translateY}px)`);
    }, S = function() {
      let u = 0;
      t.moveY < 0 ? u = t.translateY + Math.abs(t.moveY) : t.moveY >= 0 && (u = t.translateY - Math.abs(t.moveY)), u < 0 && (u = 0), u > t.maxScrollBarRange && (u = t.maxScrollBarRange), t._move = u, o.value.style.transform = `translateY(${u}px)`, i.value.scrollTop = Math.abs(t.scrollBoxMovePropor * u);
    };
    return () => {
      var u, k;
      return a("div", {
        class: [We(le())]
      }, [a("div", {
        class: le("left"),
        ref: i,
        onScroll: c
      }, [(k = (u = l.slots).default) == null ? void 0 : k.call(u)]), h.value ? a("div", {
        ref: o,
        class: le("right"),
        style: {
          height: t.scrollBarHeight + "px"
        },
        onMousedown: m
      }, null) : ""]);
    };
  }
}), {
  n: Qe,
  classes: Ge
} = P("select-v2-option"), xe = /* @__PURE__ */ B({
  name: "VISelectV2Option",
  emits: ["click"],
  props: ["label", "value"],
  components: {
    "vi-svg-icon": W
  },
  setup(e, l) {
    const {
      currentSelect: s,
      currentSelectLabel: i,
      mode: o,
      dropDownVisible: t,
      cacheOptionList: p,
      selectedFn: h,
      deleteOptionItem: c
    } = _(q), m = function() {
      if (o.value == "single")
        s.value = e.value, i.value = e.label, t.value = !1;
      else if (o.value == "multiple") {
        const v = JSON.parse(JSON.stringify(s.value));
        let y = !1;
        try {
          v.forEach((S, u) => {
            if (S.value == e.value)
              throw v.splice(u, 1), y = !0, new Error();
          });
        } catch {
        }
        y || v.push({
          label: e.label,
          value: e.value
        }), s.value = v;
      }
      h({
        label: e.label,
        value: e.value
      });
    };
    Se(() => {
      p.value = {
        key: e.label,
        value: e.value
      };
    }), X(() => {
      p.value = {
        key: e.label,
        value: e.value
      };
    }), _e(() => {
      c(e.value);
    });
    const w = d(() => {
      if (o.value == "single")
        return s.value == e.value;
      if (o.value == "multiple") {
        let v = !1;
        try {
          s.value.forEach((y) => {
            if (v = y.value == e.value)
              throw new Error();
          });
        } catch {
        }
        return v;
      }
    });
    return () => a("li", {
      class: [Ge(Qe()), w.value ? "active" : ""],
      onClick: m
    }, [a("div", {
      class: "txt"
    }, [e.label])]);
  }
}), {
  n: j,
  classes: Xe
} = P("select-v2"), Ze = /* @__PURE__ */ B({
  name: "VISelectV2",
  emits: ["focus", "blur", "update:modelValue", "handleSelected", "handleClear", "mouseenter", "mouseleave"],
  props: he,
  directives: {
    css: oe
  },
  components: {
    "vi-select-v2-input": qe,
    "vi-select-v2-drop-down": Je,
    "vi-scroll-bar": Ke,
    "vi-select-v2-tag": Fe,
    "vi-select-v2-svg-icon": W,
    "vi-select-v2-option": xe
  },
  setup(e, l) {
    var ie;
    const i = "onUpdate:modelValue" in (((ie = ye()) == null ? void 0 : ie.vnode.props) || {}), o = () => "xxxxxxxx".replace(/[xy]/g, function(n) {
      var V = 0 | 16 * Math.random(), M = n == "x" ? V : 8 | 3 & V;
      return M.toString(16);
    }), t = O(), p = O(), h = O(), c = E({
      uuid: o(),
      dropDownVisible: !1,
      dialogVisible: !1,
      softFocus: !1,
      currentSelectLabel: "",
      OptionList: {},
      list: [],
      __inputPlaceholder: "",
      searchLabel: "",
      searchValue: ""
    }), m = "M955.069071 864.311021 740.015134 649.258107c-3.752464-3.751441-8.841366-5.860475-14.149255-5.860475-5.306866 0-10.395768 2.108011-14.149255 5.860475l-16.692171 16.692171-38.34226-38.34226c53.03796-59.810201 85.298711-138.442072 85.298711-224.478588 0-186.774871-151.952784-338.727655-338.727655-338.727655S64.527642 216.35456 64.527642 403.12943c0 186.775894 151.952784 338.728678 338.727655 338.728678 86.36909 0 165.276231-32.510438 225.170343-85.913718l38.303374 38.303374-17.34504 17.34504c-7.812943 7.813966-7.812943 20.48352 0 28.297486l215.051891 215.052914c3.753487 3.751441 8.841366 5.860475 14.149255 5.860475 5.306866 0 10.395768-2.108011 14.149255-5.860475l62.334697-62.334697C962.883037 884.794541 962.883037 872.124987 955.069071 864.311021zM104.546078 403.12943c0-164.709319 133.9999-298.709219 298.709219-298.709219s298.709219 133.9999 298.709219 298.709219S567.964616 701.839673 403.255297 701.839673 104.546078 567.838749 104.546078 403.12943zM878.585119 912.496463 691.829691 725.741036l34.036187-34.036187 186.755428 186.755428L878.585119 912.496463z", w = {
      popperHeight: "0",
      inputLineHeight: "0"
    }, v = function(n) {
      let V = !1;
      const M = n.path || n.composedPath && n.composedPath();
      for (let z = 0; z < M.length; z++) {
        const Q = M[z];
        if (Q.classList && Q.classList.value && Q.getAttribute("class").includes("-select-v2") && Q.dataset.id == c.uuid) {
          V = !0;
          break;
        }
      }
      V || y();
    };
    document.addEventListener("mousedown", v);
    const y = function() {
      c.dropDownVisible = !1, l.emit && l.emit("blur");
    }, S = function(n) {
      return new Promise((V, M) => {
        V($(() => window.getComputedStyle(n.value)));
      });
    }, u = function(n) {
      e.mode == "single" ? l.emit && l.emit("handleSelected", n) : $(() => {
        l.emit && l.emit("handleSelected", {
          currentSelected: n,
          currentSelects: JSON.parse(JSON.stringify(e.modelValue))
        });
      });
    }, k = function(n) {
      delete c.OptionList[n];
    }, f = function(n) {
      if (n == "co1")
        return "";
      if (n == "auto" || n == "co2" || n == "co3" || n == "co4" || n == "co5" || n == "co6" || n == "co7")
        return "display:flex;flex-wrap: wrap;";
    }, T = function(n) {
      c.dropDownVisible = !c.dropDownVisible, l.emit && (c.dropDownVisible ? l.emit("focus") : l.emit("blur"));
    }, J = function(n) {
    }, U = function(n) {
    }, b = function() {
      l.emit && l.emit("handleClear");
    }, C = function() {
      l.emit && l.emit("mouseenter");
    }, x = function() {
      l.emit && l.emit("mouseleave");
    }, D = function(n) {
      l.emit && l.emit("handleClear", n);
    }, R = function(n) {
      let V = n.target.value, M = {};
      c.list.forEach((z) => z.label.includes(V) ? M[z.value] = z.label : ""), c.searchValue = M, c.searchLabel = V, $(() => {
        F.value;
      });
    };
    ae(() => e.list, () => {
      c.list = JSON.parse(JSON.stringify(e.list));
    }, {
      deep: !0,
      immediate: !0
    });
    const N = d({
      get() {
        return e.mode == "multiple" && (async () => {
          const {
            height: n
          } = await S(h);
          e.dynamicCss["input-line-height"] = n.replace("px", "") * 1, Y.value = e.modelValue.length > 0 ? " " : e.placeholder, e.modelValue.length <= 1 && (e.dynamicCss["input-line-height"] = w.inputLineHeight);
        })(), e.modelValue;
      },
      set(n) {
        i && l.emit("update:modelValue", n);
      }
    }), Z = d({
      get() {
        return c.currentSelectLabel;
      },
      set(n) {
        c.currentSelectLabel = n;
      }
    }), F = d({
      get() {
        let n = Object.keys(c.OptionList).length;
        return n <= 5 && n > 0 ? c.searchValue || (e.search && n++, L.value["popper-height"] = L.value["popper-option-height"] * n + L.value["popper-padding"] * 2) : L.value["popper-height"] = w.popperHeight, c.OptionList;
      },
      set(n) {
        c.OptionList[n.value] = n.key;
      }
    }), K = d({
      get() {
        return c.dropDownVisible;
      },
      set(n) {
        c.dropDownVisible = n;
      }
    }), Y = d({
      get() {
        return c.__inputPlaceholder || e.placeholder;
      },
      set(n) {
        c.__inputPlaceholder = n;
      }
    }), r = d(() => e.clearable), g = d(() => e.mode), L = d(() => {
      let n = Object.assign(he.dynamicCss.default(), e.dynamicCss);
      return w.popperHeight = n["popper-height"], w.inputLineHeight = n["input-line-height"], n;
    }), ee = d(() => e.mode == "multiple"), Ve = d(() => !!e.searchImg);
    Ce(q, {
      selectRef: t,
      currentSelect: N,
      currentSelectLabel: Z,
      mode: g,
      dynamicCss: L,
      dropDownVisible: K,
      placeholder: Y,
      cacheOptionList: F,
      clearable: r,
      selectedFn: u,
      deleteOptionItem: k
    });
    const Be = function(n) {
      return a(I("vi-select-v2-tag"), {
        tooltip: e.tooltip,
        label: n.label,
        value: n.value,
        height: L.value["tag-close-size"],
        width: L.value["tag-close-size"],
        onCloseClick: D
      }, null);
    }, Pe = function() {
      return a(I("vi-select-v2-input"), {
        iconHeight: L.value["input-icon-width"],
        iconWidth: L.value["input-icon-width"],
        ref: p,
        active: c.dropDownVisible,
        placeholder: Y.value,
        onClick: T,
        onFocus: J,
        onBlur: U,
        onClear: b,
        onMouseenter: C,
        onMouseleave: x
      }, null);
    }, Me = function() {
      return a("li", {
        class: j("-search")
      }, [Ve.value ? a("img", {
        class: j("--search"),
        src: e.searchImg
      }, null) : a(I("vi-select-v2-svg-icon"), {
        class: j("--search"),
        path: m
      }, null), a("input", {
        value: c.searchLabel,
        class: j("-search__input"),
        placeholder: "请输入您要搜索的内容",
        onInput: R
      }, null)]);
    }, Ie = function() {
      return a(I("vi-select-v2-drop-down"), {
        active: c.dropDownVisible
      }, {
        default: () => [a(I("vi-scroll-bar"), {
          dynamicCss: L.value
        }, {
          default: () => {
            var n, V;
            return [a("ul", null, [e.search ? Me() : "", c.searchValue ? a("div", {
              style: f(e.itemLayout),
              class: e.itemLayout
            }, [Object.keys(c.searchValue).map((M, z) => a(I("vi-select-v2-option"), {
              key: M,
              value: M,
              label: Object.values(c.searchValue)[z]
            }, null))]) : a("div", {
              style: f(e.itemLayout),
              class: e.itemLayout
            }, [(V = (n = l.slots).default) == null ? void 0 : V.call(n)]), Object.keys(F.value).length <= 0 ? a("li", {
              class: j("-notData")
            }, [ze("暂无数据")]) : ""])];
          }
        })]
      });
    };
    return () => ke(a("div", {
      "data-id": c.uuid,
      class: [Xe(j())],
      ref: t
    }, [ee.value ? a("div", {
      ref: h,
      class: j("-taglist"),
      onClick: T
    }, [N.value.map((n) => Be(n))]) : "", Pe(), Ie()]), [[Le("css"), L.value || {}]]);
  }
}), et = ne(Ze, "select-v2"), tt = ne(xe, "select-v2-option");
function lt(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Ne(e);
}
const {
  n: we,
  classes: at
} = P("pagination"), nt = /* @__PURE__ */ B({
  name: "VIPagination",
  props: se,
  directives: {
    css: oe
  },
  emits: ["size-change", "update:modelValue", "current-change", "update:total"],
  components: {
    prev: re,
    pager: ue,
    next: ce,
    jump: pe,
    total: ve,
    "dw-select-v2": et,
    "dw-select-v2-option": tt
  },
  setup(e, l) {
    var K, Y;
    const s = (r) => typeof r != "number", i = (r) => r instanceof Array, o = ((Y = (K = ye()) == null ? void 0 : K.vnode) == null ? void 0 : Y.props) || {}, t = "onUpdate:sizeChange" in o || "onUpdate:size-change" in o || "onSizeChange" in o, p = "onUpdate:currentPage" in o || "onUpdate:current-page" in o || "onUpdate:modelValue" in o || "onCurrentChange" in o, h = "update:total" in o;
    let c = 10, m = 1, w = 100;
    const v = E({
      select_curSelect: "",
      select_list: [],
      select_dynamicCss: {}
    }), y = function() {
      i(e.pageSize) && (v.select_list = e.pageSize.map((r) => ({
        value: r,
        label: r + "/page"
      })), v.select_curSelect = v.select_list[0].value);
    }, S = d(() => {
      let r = 0;
      return s(e.total) ? console.warn("total属性不合格") : r = Math.max(1, Math.ceil(e.total / k.value)), r;
    }), u = d(() => {
      let r = 0;
      return s(e.total) || (s(e.pagerCount) || (r = S.value > 7 ? Math.max(7, e.pagerCount % 2 == 0 ? e.pagerCount - 1 : e.pagerCount) : S.value), r > 29 && (r = 29)), r;
    }), k = d({
      get() {
        let r = s(e.pageSize) ? c : e.pageSize > 5 ? e.pageSize : 5;
        return r = i(e.pageSize) ? v.select_curSelect : r, r;
      },
      set(r) {
        s(e.pageSize) && (c = r), t && (e.modelValue > Math.ceil(e.total / r) && (f.value = Math.ceil(e.total / r)), $(() => {
          l.emit("size-change", {
            pageSize: r,
            currentPage: e.modelValue
          });
        }));
      }
    }), f = d({
      get() {
        return s(e.modelValue) ? m : e.modelValue;
      },
      set(r) {
        let g = r;
        r < 1 ? g = 1 : r > S.value && (g = S.value), p && (l.emit("update:modelValue", g), l.emit("current-change", g));
      }
    }), T = d({
      get() {
        return s(e.total) ? w : e.total;
      },
      set(r) {
        let g = r;
        r < 0 && (g = 0), w = g, h && l.emit("update:total", g);
      }
    }), J = d(() => e.totalLabel), U = d(() => e.jumpLabel), b = d(() => Object.assign(se.dynamicCss.default(), e.dynamicCss)), C = d(() => {
      let r = {};
      for (let g in b.value)
        g.includes("select-v2-") && (r[g.replace("select-v2-", "")] = b.value[g]);
      return r;
    }), x = d(() => {
      let r = e.layout;
      const g = {
        total: !1,
        size: !1,
        prev: !1,
        next: !1,
        pager: !1,
        jump: !1
      };
      for (let L in g)
        g[L] = r.replace(/\s+/g, "").split(",").findIndex((ee) => ee == L) != -1;
      return g;
    });
    Ce(A, {
      pageCount: S,
      pagerCount: u,
      pageSize: k,
      currentPage: f,
      total: T,
      totalLabel: J,
      jumpLabel: U
    }), X(() => {
      y();
    }), ae(() => e.pageSize, () => {
      y();
    }, {
      deep: !0
    });
    const D = (r) => f.value = f.value - 1, R = (r) => f.value = f.value + 1, N = (r) => f.value = r, Z = (r) => f.value = r, F = function(r) {
      k.value = r.value;
    };
    return () => {
      let r;
      return ke(a("div", {
        class: [at(we()), e.background ? "bgbox" : ""]
      }, [x.value.total ? a(ve, null, null) : "", x.value.size && i(e.pageSize) ? a(I("dw-select-v2"), {
        modelValue: v.select_curSelect,
        "onUpdate:modelValue": (g) => v.select_curSelect = g,
        dynamicCss: C.value,
        onHandleSelected: F,
        class: we("-select")
      }, lt(r = v.select_list.map((g) => a(I("dw-select-v2-option"), {
        key: g.value,
        label: g.label,
        value: g.value
      }, null))) ? r : {
        default: () => [r]
      }) : "", x.value.prev ? a(re, {
        disabled: !1,
        onClick: D
      }, null) : "", x.value.pager ? a(ue, {
        onClick: N
      }, null) : "", x.value.next ? a(ce, {
        disabled: !1,
        onClick: R
      }, null) : "", x.value.jump ? a(pe, {
        onJumpPage: Z
      }, null) : ""]), [[Le("css"), b.value || {}]]);
    };
  }
}), st = ne(nt, "pagination");
export {
  st as Pagination,
  st as default
};
