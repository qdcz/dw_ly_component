import { defineComponent as A, createVNode as r, inject as G, reactive as X, computed as g, resolveComponent as O, ref as L, onMounted as ae, watchEffect as we, nextTick as F, watch as me, onUnmounted as Re, getCurrentInstance as ye, provide as Se, withDirectives as Z, resolveDirective as ie, createTextVNode as Le, isVNode as bt, openBlock as ue, createElementBlock as ce, normalizeClass as j, createElementVNode as te, vModelRadio as mt, toDisplayString as gt, renderSlot as wt, onBeforeMount as yt, normalizeStyle as Ye, Fragment as je, renderList as Fe } from "vue";
const oe = (e, t) => (e.install = function(a) {
  if (e) {
    const s = e.name || e.__name;
    if (s || t) {
      const i = t ? `dw-${t}` : "dw-" + s.replace(/dw/gi, "").toLowerCase();
      a.component(i, e);
    } else
      console.error(e, t, !t);
  }
}, e), St = (e) => Array.isArray(e);
function N(e) {
  const t = `vi-${e}`;
  return {
    n: (i) => i ? i.startsWith("-") ? `${t}${i}` : `${t}_${i}` : t,
    classes: (...i) => i.map((l) => {
      if (St(l)) {
        const [h, u, p = null] = l;
        return h ? u : p;
      }
      return l;
    })
  };
}
const he = Symbol("select-v2"), De = function(e, t) {
  for (let [a, s] of Object.entries(t.value))
    e.style.setProperty("--" + a, s);
}, ne = {
  mounted(e, t) {
    De(e, t);
  },
  updated(e, t) {
    De(e, t);
  },
  install(e) {
    e.directive("Css", this);
  }
}, We = {
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
    // 是否使用图片icon 未给值的话默认使用svg
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
      /**
       * input
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
      /**
       * tag
       */
      "tag-height": "30",
      // 为不影响美观，请将高度小于input高度
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
      /**
       * tooltip
       */
      "tag-tooltip-bg-color": "#3a81d2",
      "tag-tooltip-fo-color": "#fff",
      "tag-tooltip-fo-size": "12",
      "tag-tooltip-fo-weight": "500",
      /**
       * popper
       */
      "popper-bg-color": "#fff",
      "popper-height": "250",
      // max-height
      "popper-padding": "4",
      // dropdownHeight 包含了 dropdownPadding
      "popper-border-radius": "8",
      "popper-z-index": "999",
      "popper-box-shadow-x": "0",
      "popper-box-shadow-y": "0",
      "popper-box-shadow-blur": "12",
      "popper-box-shadow-spread": "0",
      "popper-box-shadow-color": "rgba(0, 0, 0, 0.12)",
      "popper-arrow-height": "6",
      /**
       * popper-option
       */
      "popper-option-fo-size": "12",
      "popper-option-fo-weight": "500",
      "popper-option-fo-color": "#64666a",
      "popper-option-height": "40",
      // 等高列表后期可以做成虚拟列表版本
      "popper-option-padding-lr": "8",
      // 只暴露左右边距
      "popper-option-hover-bg-color": "#f5f7fa",
      "popper-option-active-fo-color": "#409eff",
      "popper-option-active-fo-weight": "600",
      "popper-option-txt-margin-lr": "6",
      // 只暴露左右边距
      "popper-option-fo-alight": "start",
      /**
       * popper-search
       */
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
      /**
       * 展开层
       */
      "unfold-icon-height": "14",
      //  关闭按钮大小
      "unfold-icon-width": "14",
      // 关闭按钮大小
      "unfold-icon-hover-fo-color": "#00b7ff",
      // 关闭按钮悬浮颜色
      "unfold-height": "300",
      // 展开弹窗大小
      "unfold-width": "600",
      // 展开弹窗大小
      "unfold-padding-t": "10",
      // 内边距
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
      /**
       * scrollBar
       */
      "scroll-bar-width": "4",
      "scroll-bar-bg-color": "rgb(218, 218, 218)",
      "scroll-bar-hover-bg-color": "#87ceeb",
      /**
       * animation
       */
      "ani-transition": ".3"
    })
  }
}, {
  n: Ct,
  classes: xt
} = N("select-v2-svg-icon"), Ce = /* @__PURE__ */ A({
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
  setup(e, t) {
    const a = function(i) {
      t.emit("click", i);
    }, s = function() {
      return r("svg", {
        class: [xt(Ct()), "icon"],
        height: e.height,
        width: e.width,
        viewBox: "0 0 1024 1024",
        xmlns: "http://www.w3.org/2000/svg",
        onClick: a
      }, [r("path", {
        fill: "currentColor",
        d: e.path
      }, null)]);
    };
    return () => s();
  }
}), {
  n: Xe,
  classes: Bt
} = N("select-v2-input"), kt = /* @__PURE__ */ A({
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
    "vi-select-v2-svg-icon": Ce
  },
  setup(e, t) {
    const {
      currentSelect: a,
      clearable: s,
      cacheOptionList: i,
      mode: l
    } = G(he), h = "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z", u = "M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z", p = X({
      isHover: !1
    }), C = function(y) {
      t.emit("click", y);
    }, w = function(y) {
      a.value = "", t.emit("clear"), y.stopPropagation();
    }, c = function(y) {
      t.emit("focus", y);
    }, f = function(y) {
      t.emit("blur", y);
    }, S = function(y) {
      p.isHover = !0, t.emit("mouseenter");
    }, v = function(y) {
      p.isHover = !1, t.emit("mouseleave");
    }, M = g(() => i.value[a.value]);
    return () => r("div", {
      class: [Bt(Xe(), e.active ? "active" : "")],
      onClick: C,
      onMouseenter: S,
      onMouseleave: v
    }, [r("input", {
      class: [Xe("_inner")],
      placeholder: e.placeholder,
      onFocus: c,
      onBlur: f,
      value: M.value,
      readonly: !0
    }, null), p.isHover && a.value && s.value && l.value == "single" ? r(O("vi-select-v2-svg-icon"), {
      height: e.iconHeight,
      width: e.iconWidth,
      path: u,
      onClick: w
    }, null) : r(O("vi-select-v2-svg-icon"), {
      height: e.iconHeight,
      width: e.iconWidth,
      path: h,
      class: ["arrow", e.active ? "turnUp" : "turnDown"]
    }, null)]);
  }
}), {
  n: Be,
  classes: qe
} = N("select-v2-dropdown"), Vt = /* @__PURE__ */ A({
  name: "VISelectV2DropDown",
  emits: ["focus", "blur", "click"],
  props: ["active"],
  components: {
    "vi-svg-icon": Ce
  },
  setup(e, t) {
    const {
      selectRef: a,
      mode: s,
      currentSelect: i
    } = G(he), l = X({
      parentRect: {
        x: 0,
        y: 0
      },
      dropdownTop: "0"
    }), h = L(), u = L(), p = () => {
      F(() => {
        l.dropdownTop = a.value.clientHeight + 10 + "px";
      });
    };
    return ae(() => p()), we(() => {
      let C = i.value;
      s.value == "multiple" && C && setTimeout(() => {
        p();
      }, 200);
    }), () => {
      var C, w;
      return r("div", {
        class: [Be("-popper"), e.active ? "active" : ""],
        style: {
          top: l.dropdownTop
        }
      }, [r("div", {
        ref: h,
        class: [Be("-arrow"), e.active ? "active" : ""]
      }, null), r("div", {
        ref: u,
        class: [qe(Be(), e.active ? "active" : "")]
      }, [r("div", {
        class: [qe(Be("_inner"))]
      }, [(w = (C = t.slots).default) == null ? void 0 : w.call(C)])])]);
    };
  }
}), {
  n: Ue,
  classes: Mt
} = N("select-v2-tag"), It = /* @__PURE__ */ A({
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
    // 是否显示tooltip
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
    "vi-svg-icon": Ce
  },
  setup(e, t) {
    const {
      currentSelect: a
    } = G(he), s = "M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z", i = function(l) {
      const h = JSON.parse(JSON.stringify(a.value));
      try {
        h.forEach((u, p) => {
          if (u.value == e.value)
            throw h.splice(p, 1), new Error();
        });
      } catch {
      }
      a.value = h, t.emit && t.emit("closeClick", {
        currentClose: {
          label: e.label,
          value: e.value
        },
        currentSelects: JSON.parse(JSON.stringify(h))
      }), l.stopPropagation();
    };
    return () => r("div", {
      class: [Mt(Ue()), e.tooltip ? "useToolTip" : ""],
      "data-txt": e.label
    }, [r("span", {
      class: Ue("_span")
    }, [e.label]), r(O("vi-svg-icon"), {
      path: s,
      onClick: i,
      height: e.height + "px",
      width: e.width + "px"
    }, null)]);
  }
}), {
  n: Me,
  classes: Rt
} = N("scroll-bar"), Lt = /* @__PURE__ */ A({
  name: "VIScrollBar",
  emits: ["focus", "blur", "click"],
  props: ["dynamicCss"],
  directives: {
    css: ne
  },
  setup(e, t) {
    const {
      cacheOptionList: a
    } = G(he), s = L(), i = L(), l = X({
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
    }), h = function() {
      F(() => {
        const v = window.getComputedStyle(s.value.children[0]);
        l.realPadding = e.dynamicCss["popper-padding"] * 2, l.realHeight = v.height.replace("px", "") * 1, l.viewHeight = e.dynamicCss["popper-height"] * 1 - l.realPadding, l.maxScrollBoxRange = l.realHeight - l.viewHeight, l.proportion = Number((l.viewHeight / l.realHeight).toFixed(1)), l.scrollBarHeight = l.viewHeight * l.proportion, l.maxScrollBarRange = l.viewHeight - l.scrollBarHeight, l.scrollBarMovePropor = l.maxScrollBarRange / l.maxScrollBoxRange, l.scrollBoxMovePropor = l.maxScrollBoxRange / l.maxScrollBarRange;
      });
    };
    ae(() => {
      h();
    }), me(() => a.value, () => {
      h();
    }, {
      deep: !0,
      immediate: !1
    });
    const u = g(() => l.scrollBarHeight < l.realHeight), p = function(v) {
      const M = v.target.scrollTop;
      f(M);
    }, C = function(v) {
      document.addEventListener("mousedown", w), document.addEventListener("mousemove", c);
    }, w = function(v) {
      l.mouseMoving = !0, l.startY = v.clientY;
    }, c = function(v) {
      l.moveY = l.startY - v.clientY, S();
    };
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", c), document.removeEventListener("mousedown", w), l.startY = 0, l.moveY = 0, l.mouseMoving && (l.translateY = l._move), l.mouseMoving = !1;
    });
    const f = function(v) {
      l.mouseMoving || (l.translateY = l.scrollBarMovePropor * v, i.value.style.transform = `translateY(${l.translateY}px)`);
    }, S = function() {
      let v = 0;
      l.moveY < 0 ? v = l.translateY + Math.abs(l.moveY) : l.moveY >= 0 && (v = l.translateY - Math.abs(l.moveY)), v < 0 && (v = 0), v > l.maxScrollBarRange && (v = l.maxScrollBarRange), l._move = v, i.value.style.transform = `translateY(${v}px)`, s.value.scrollTop = Math.abs(l.scrollBoxMovePropor * v);
    };
    return () => {
      var v, M;
      return r("div", {
        class: [Rt(Me())]
      }, [r("div", {
        class: Me("left"),
        ref: s,
        onScroll: p
      }, [(M = (v = t.slots).default) == null ? void 0 : M.call(v)]), u.value ? r("div", {
        ref: i,
        class: Me("right"),
        style: {
          height: l.scrollBarHeight + "px"
        },
        onMousedown: C
      }, null) : ""]);
    };
  }
}), {
  n: Pt,
  classes: Tt
} = N("select-v2-option"), ht = /* @__PURE__ */ A({
  name: "VISelectV2Option",
  emits: ["click"],
  props: ["label", "value"],
  components: {
    "vi-svg-icon": Ce
  },
  setup(e, t) {
    const {
      currentSelect: a,
      currentSelectLabel: s,
      mode: i,
      dropDownVisible: l,
      cacheOptionList: h,
      selectedFn: u,
      deleteOptionItem: p
    } = G(he), C = function() {
      if (i.value == "single")
        a.value = e.value, s.value = e.label, l.value = !1;
      else if (i.value == "multiple") {
        const c = JSON.parse(JSON.stringify(a.value));
        let f = !1;
        try {
          c.forEach((S, v) => {
            if (S.value == e.value)
              throw c.splice(v, 1), f = !0, new Error();
          });
        } catch {
        }
        f || c.push({
          label: e.label,
          value: e.value
        }), a.value = c;
      }
      u({
        label: e.label,
        value: e.value
      });
    };
    we(() => {
      h.value = {
        key: e.label,
        value: e.value
      };
    }), ae(() => {
      h.value = {
        key: e.label,
        value: e.value
      };
    }), Re(() => {
      p(e.value);
    });
    const w = g(() => {
      if (i.value == "single")
        return a.value == e.value;
      if (i.value == "multiple") {
        let c = !1;
        try {
          a.value.forEach((f) => {
            if (c = f.value == e.value)
              throw new Error();
          });
        } catch {
        }
        return c;
      }
    });
    return () => r("li", {
      class: [Tt(Pt()), w.value ? "active" : ""],
      onClick: C
    }, [r("div", {
      class: "txt"
    }, [e.label])]);
  }
}), {
  n: pe,
  classes: Nt
} = N("select-v2"), _t = /* @__PURE__ */ A({
  name: "VISelectV2",
  emits: ["focus", "blur", "update:modelValue", "handleSelected", "handleClear", "mouseenter", "mouseleave"],
  props: We,
  directives: {
    css: ne
  },
  components: {
    "vi-select-v2-input": kt,
    "vi-select-v2-drop-down": Vt,
    "vi-scroll-bar": Lt,
    "vi-select-v2-tag": It,
    "vi-select-v2-svg-icon": Ce,
    // 'vi-select-v2-unfold-dialog': VISelectV2UnfoldDialog,
    "vi-select-v2-option": ht
  },
  setup(e, t) {
    var K;
    const s = "onUpdate:modelValue" in (((K = ye()) == null ? void 0 : K.vnode.props) || {}), i = () => "xxxxxxxx".replace(/[xy]/g, function(o) {
      var m = 0 | 16 * Math.random(), x = o == "x" ? m : 8 | 3 & m;
      return x.toString(16);
    }), l = L(), h = L(), u = L(), p = X({
      uuid: i(),
      dropDownVisible: !1,
      dialogVisible: !1,
      softFocus: !1,
      currentSelectLabel: "",
      OptionList: {},
      list: [],
      __inputPlaceholder: "",
      searchLabel: "",
      searchValue: ""
    }), C = "M955.069071 864.311021 740.015134 649.258107c-3.752464-3.751441-8.841366-5.860475-14.149255-5.860475-5.306866 0-10.395768 2.108011-14.149255 5.860475l-16.692171 16.692171-38.34226-38.34226c53.03796-59.810201 85.298711-138.442072 85.298711-224.478588 0-186.774871-151.952784-338.727655-338.727655-338.727655S64.527642 216.35456 64.527642 403.12943c0 186.775894 151.952784 338.728678 338.727655 338.728678 86.36909 0 165.276231-32.510438 225.170343-85.913718l38.303374 38.303374-17.34504 17.34504c-7.812943 7.813966-7.812943 20.48352 0 28.297486l215.051891 215.052914c3.753487 3.751441 8.841366 5.860475 14.149255 5.860475 5.306866 0 10.395768-2.108011 14.149255-5.860475l62.334697-62.334697C962.883037 884.794541 962.883037 872.124987 955.069071 864.311021zM104.546078 403.12943c0-164.709319 133.9999-298.709219 298.709219-298.709219s298.709219 133.9999 298.709219 298.709219S567.964616 701.839673 403.255297 701.839673 104.546078 567.838749 104.546078 403.12943zM878.585119 912.496463 691.829691 725.741036l34.036187-34.036187 186.755428 186.755428L878.585119 912.496463z", w = {
      popperHeight: "0",
      inputLineHeight: "0"
    }, c = function(o) {
      let m = !1;
      const x = o.path || o.composedPath && o.composedPath();
      for (let I = 0; I < x.length; I++) {
        const T = x[I];
        if (T.classList && T.classList.value && T.getAttribute("class").includes("-select-v2") && T.dataset.id == p.uuid) {
          m = !0;
          break;
        }
      }
      m || f();
    };
    document.addEventListener("mousedown", c);
    const f = function() {
      p.dropDownVisible = !1, t.emit && t.emit("blur");
    }, S = function(o) {
      return new Promise((m, x) => {
        m(F(() => window.getComputedStyle(o.value)));
      });
    }, v = function(o) {
      e.mode == "single" ? t.emit && t.emit("handleSelected", o) : F(() => {
        t.emit && t.emit("handleSelected", {
          currentSelected: o,
          currentSelects: JSON.parse(JSON.stringify(e.modelValue))
        });
      });
    }, M = function(o) {
      delete p.OptionList[o];
    }, y = function(o) {
      if (o == "co1")
        return "";
      if (o == "auto" || o == "co2" || o == "co3" || o == "co4" || o == "co5" || o == "co6" || o == "co7")
        return "display:flex;flex-wrap: wrap;";
    }, H = function(o) {
      p.dropDownVisible = !p.dropDownVisible, t.emit && (p.dropDownVisible ? t.emit("focus") : t.emit("blur"));
    }, R = function(o) {
    }, D = function(o) {
    }, B = function() {
      t.emit && t.emit("handleClear");
    }, P = function() {
      t.emit && t.emit("mouseenter");
    }, _ = function() {
      t.emit && t.emit("mouseleave");
    }, k = function(o) {
      t.emit && t.emit("handleClear", o);
    }, V = function(o) {
      let m = o.target.value, x = {};
      p.list.forEach((I) => I.label.includes(m) ? x[I.value] = I.label : ""), p.searchValue = x, p.searchLabel = m, F(() => {
        Q.value;
      });
    };
    me(() => e.list, () => {
      p.list = JSON.parse(JSON.stringify(e.list));
    }, {
      deep: !0,
      immediate: !0
    });
    const E = g({
      get() {
        return e.mode == "multiple" && (async () => {
          const {
            height: o
          } = await S(u);
          e.dynamicCss["input-line-height"] = o.replace("px", "") * 1, W.value = e.modelValue.length > 0 ? " " : e.placeholder, e.modelValue.length <= 1 && (e.dynamicCss["input-line-height"] = w.inputLineHeight);
        })(), e.modelValue;
      },
      set(o) {
        s && t.emit("update:modelValue", o);
      }
    }), le = g({
      get() {
        return p.currentSelectLabel;
      },
      set(o) {
        p.currentSelectLabel = o;
      }
    }), Q = g({
      get() {
        let o = Object.keys(p.OptionList).length;
        return o <= 5 && o > 0 ? p.searchValue || (e.search && o++, b.value["popper-height"] = b.value["popper-option-height"] * o + b.value["popper-padding"] * 2) : b.value["popper-height"] = w.popperHeight, p.OptionList;
      },
      set(o) {
        p.OptionList[o.value] = o.key;
      }
    }), ee = g({
      get() {
        return p.dropDownVisible;
      },
      set(o) {
        p.dropDownVisible = o;
      }
    }), W = g({
      get() {
        return p.__inputPlaceholder || e.placeholder;
      },
      set(o) {
        p.__inputPlaceholder = o;
      }
    }), n = g(() => e.clearable), d = g(() => e.mode), b = g(() => {
      let o = Object.assign(We.dynamicCss.default(), e.dynamicCss);
      return w.popperHeight = o["popper-height"], w.inputLineHeight = o["input-line-height"], o;
    }), z = g(() => e.mode == "multiple"), $ = g(() => !!e.searchImg);
    Se(he, {
      selectRef: l,
      currentSelect: E,
      currentSelectLabel: le,
      mode: d,
      dynamicCss: b,
      dropDownVisible: ee,
      placeholder: W,
      cacheOptionList: Q,
      clearable: n,
      selectedFn: v,
      deleteOptionItem: M
    });
    const Y = function(o) {
      return r(O("vi-select-v2-tag"), {
        tooltip: e.tooltip,
        label: o.label,
        value: o.value,
        height: b.value["tag-close-size"],
        width: b.value["tag-close-size"],
        onCloseClick: k
      }, null);
    }, q = function() {
      return r(O("vi-select-v2-input"), {
        iconHeight: b.value["input-icon-width"],
        iconWidth: b.value["input-icon-width"],
        ref: h,
        active: p.dropDownVisible,
        placeholder: W.value,
        onClick: H,
        onFocus: R,
        onBlur: D,
        onClear: B,
        onMouseenter: P,
        onMouseleave: _
      }, null);
    }, U = function() {
      return r("li", {
        class: pe("-search")
      }, [$.value ? r("img", {
        class: pe("--search"),
        src: e.searchImg
      }, null) : r(O("vi-select-v2-svg-icon"), {
        class: pe("--search"),
        path: C
      }, null), r("input", {
        value: p.searchLabel,
        class: pe("-search__input"),
        placeholder: "请输入您要搜索的内容",
        onInput: V
      }, null)]);
    }, J = function() {
      return r(O("vi-select-v2-drop-down"), {
        active: p.dropDownVisible
      }, {
        default: () => [r(O("vi-scroll-bar"), {
          dynamicCss: b.value
        }, {
          default: () => {
            var o, m;
            return [r("ul", null, [e.search ? U() : "", p.searchValue ? r("div", {
              style: y(e.itemLayout),
              class: e.itemLayout
            }, [Object.keys(p.searchValue).map((x, I) => r(O("vi-select-v2-option"), {
              key: x,
              value: x,
              label: Object.values(p.searchValue)[I]
            }, null))]) : r("div", {
              style: y(e.itemLayout),
              class: e.itemLayout
            }, [(m = (o = t.slots).default) == null ? void 0 : m.call(o)]), Object.keys(Q.value).length <= 0 ? r("li", {
              class: pe("-notData")
            }, [Le("暂无数据")]) : ""])];
          }
        })]
      });
    };
    return () => Z(r("div", {
      "data-id": p.uuid,
      class: [Nt(pe())],
      ref: l
    }, [z.value ? r("div", {
      ref: u,
      class: pe("-taglist"),
      onClick: H
    }, [E.value.map((o) => Y(o))]) : "", q(), J()]), [[ie("css"), b.value || {}]]);
  }
}), At = oe(_t, "select-v2"), Et = oe(ht, "select-v2-option"), Je = {
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
  // 支持同时显示多少个数字按钮
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
      /**
       * base
       */
      "bs-fo-size": "14",
      /**
       * btn
       */
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
      /**
       * bg 模式
       */
      "btn-background-bg-color": "#f0f2f5",
      "btn-background-fo-color": "#000",
      "btn-background-active-fo-color": "#fff",
      "btn-background-active-bg-color": "#0697ff",
      /**
       * total
       */
      "total-fo-color": "#606266",
      "total-mar-r": "8",
      /**
       * jump
       */
      "jump-mar-l": "8",
      "jump-input-mar-l": "8",
      "jump-input-border-radius": "4",
      "jump-input-border-color": "#d6d6d6",
      "jump-input-width": "30",
      "jump-input-bg-color": "#fff",
      "jump-input-fo-color": "#000",
      "jump-input-max-width": "50",
      /**
       * animation
       */
      "ani-transition": "0.5",
      /**
       * select-v2组件
       */
      "select-v2-mar-r": "8",
      "select-v2-input-text-alight": "center",
      "select-v2-input-width": "80",
      "select-v2-input-line-height": "30",
      "select-v2-popper-option-height": "40"
    })
  }
}, fe = Symbol("pagination"), {
  n: $t,
  classes: Ht
} = N("pagination-prev"), Ge = /* @__PURE__ */ A({
  name: "VIPaginationPrev",
  emits: ["click"],
  setup(e, t) {
    let a = G(fe);
    const s = g(() => a.currentPage.value <= 1), i = function(l) {
      s.value || t.emit("click", l);
    };
    return () => r("button", {
      type: "button",
      class: [Ht($t()), s.value ? "disabled" : ""],
      onClick: i.bind(this)
    }, [r("svg", {
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12"
    }, [r("path", {
      fill: "currentColor",
      d: "M740.352 174.08l-57.216-59.008L283.648 512l399.488 396.928 57.216-59.008L404.48 512z",
      "p-id": "3023"
    }, null)])]);
  }
}), {
  n: zt,
  classes: Ot
} = N("pagination-next"), Ke = /* @__PURE__ */ A({
  name: "VIPaginationNext",
  emits: ["click"],
  setup(e, t) {
    let a = G(fe);
    const s = g(() => a.currentPage.value >= a.pageCount.value), i = function(l) {
      s.value || t.emit("click", l);
    };
    return () => r("button", {
      type: "button",
      class: [Ot(zt()), s.value ? "disabled" : ""],
      onClick: i.bind(this)
    }, [r("svg", {
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12"
    }, [r("path", {
      fill: "currentColor",
      d: "M283.648 174.08l57.216-59.008L740.352 512 340.864 908.928 283.648 849.92 619.52 512z"
    }, null)])]);
  }
}), {
  n: re
} = N("pagination-pager"), Qe = /* @__PURE__ */ A({
  name: "VIPaginationPager",
  emits: ["click"],
  setup(e, t) {
    let {
      currentPage: a,
      pagerCount: s,
      pageCount: i
    } = G(fe);
    const l = X({
      quickPrevBtnIsHover: !1,
      quickNextBtnIsHover: !1
    }), h = {
      quickLeftArrow: "M62.56 511.904L485.952 88.256a48.64 48.64 0 0 1 68.736 68.736L199.616 512.064l356.8 356.8A48.64 48.64 0 0 1 487.68 937.6l-39.744-39.744 0.256-0.256L62.528 511.936z m388.8 0L874.752 88.256a48.64 48.64 0 0 1 68.736 68.736L588.416 512.064l356.8 356.8A48.64 48.64 0 0 1 876.48 937.6l-39.776-39.744 0.288-0.256-385.664-385.664z",
      quickRightArrow: 'M948.064 513.056L536.064 925.312a47.296 47.296 0 0 1-66.88-66.88l345.504-345.504L467.52 165.76a47.296 47.296 0 0 1 66.88-66.88l38.688 38.688-0.256 0.256 375.264 375.264m-378.336-0.032L157.76 925.312a47.296 47.296 0 0 1-66.88-66.88l345.472-345.504L89.184 165.76a47.296 47.296 0 0 1 66.88-66.88l38.688 38.688-0.256 0.256 375.264 375.264"',
      ellipsis: "M110.336 572.330667a85.333333 85.333333 0 1 0 120.661333-120.661334 85.333333 85.333333 0 0 0-120.661333 120.661334zM451.669333 572.330667a85.333333 85.333333 0 1 0 120.661334-120.661334 85.333333 85.333333 0 0 0-120.661334 120.661334zM793.002667 572.330667a85.333333 85.333333 0 1 0 120.661333-120.661334 85.333333 85.333333 0 0 0-120.661333 120.661334z"
    }, u = g(() => Math.floor(a.value / s.value) * s.value), p = g(() => s.value < i.value ? s.value : i.value - 1), C = g(() => w.value && c.value ? a.value : !1), w = g(() => i.value <= s.value ? 0 : a.value >= s.value - 2), c = g(() => i.value <= s.value ? 0 : a.value < i.value - s.value + 4), f = g(() => i.value > 1), S = function(B) {
      t.emit("click", B);
    }, v = (B) => l.quickPrevBtnIsHover = !0, M = (B) => l.quickPrevBtnIsHover = !1, y = (B) => l.quickNextBtnIsHover = !0, H = (B) => l.quickNextBtnIsHover = !1, R = (B) => a.value = a.value - s.value + 2, D = (B) => a.value = a.value + s.value - 2;
    return () => r("ul", {
      class: [re()]
    }, [r("li", {
      class: [re("_btn"), a.value == 1 ? "active" : ""],
      onClick: S.bind(this, 1)
    }, [1]), w.value ? r("li", {
      class: [re("_btn"), "quickPrev"],
      onMouseenter: v,
      onMouseleave: M,
      onClick: R
    }, [r("svg", {
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      name: l.quickPrevBtnIsHover ? "quickLeftArrow" : "ellipsis",
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12"
    }, [r("path", {
      fill: "currentColor",
      d: l.quickPrevBtnIsHover ? h.quickLeftArrow : h.ellipsis
    }, null)])]) : r("div", null, null), new Array(p.value).fill(C.value ? C.value : 0).map((B, P) => {
      let _ = a.value, k = Math.ceil((s.value - 2) / 2), V = P > 0 && P < s.value - 1, E = u.value;
      if (B > 0) {
        if (V)
          return B = P <= k ? B - k + P : B + P - k, r("li", {
            class: [re("_btn"), _ == B ? "active" : ""],
            onClick: S.bind(this, B)
          }, [B]);
      } else if (V)
        return _ < s.value - 2 ? r("li", {
          class: [re("_btn"), _ == E + P + 1 ? "active" : ""],
          onClick: S.bind(this, E + P + 1)
        }, [E + P + 1]) : r("li", {
          class: [re("_btn"), _ == i.value - s.value + 1 + P ? "active" : ""],
          onClick: S.bind(this, i.value - s.value + 1 + P)
        }, [i.value - s.value + 1 + P]);
    }), c.value > 0 ? r("li", {
      class: [re("_btn"), "quickNext"],
      onMouseenter: y,
      onMouseleave: H,
      onClick: D
    }, [r("svg", {
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      name: l.quickNextBtnIsHover ? "quickRightArrow" : "ellipsis",
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12"
    }, [r("path", {
      fill: "currentColor",
      d: l.quickNextBtnIsHover ? h.quickRightArrow : h.ellipsis
    }, null)])]) : r("div", null, null), f.value ? r("li", {
      class: [re("_btn"), a.value == i.value ? "active" : ""],
      onClick: S.bind(this, i.value)
    }, [i.value]) : ""]);
  }
}), {
  n: Ze,
  classes: Yt
} = N("pagination-jump"), et = /* @__PURE__ */ A({
  name: "VIPaginationJump",
  emits: ["jump-page"],
  setup(e, t) {
    let a = G(fe);
    const s = X({
      num: ""
    }), i = L(), l = function(u) {
      (() => s.num = Math.random() * 1e6)();
      const C = Number(u.target.value);
      C <= 0 ? s.num = 1 : C > a.pageCount.value ? s.num = a.pageCount.value : s.num = C;
    }, h = function(u) {
      u.key == "Enter" && (i.value.blur(), F(() => t.emit("jump-page", s.num || 1)));
    };
    return () => r("div", {
      class: [Yt(Ze())]
    }, [r("span", null, [a.jumpLabel.value]), r("input", {
      ref: i,
      class: [Ze("_input")],
      value: s.num,
      type: "number",
      min: "1",
      tabindex: "0",
      autocomplete: "off",
      onChange: l.bind(this),
      onKeydown: h.bind(this)
    }, null)]);
  }
}), {
  n: Ie,
  classes: jt
} = N("pagination-total"), tt = /* @__PURE__ */ A({
  name: "VIPaginationTotal",
  emits: ["click"],
  setup() {
    let {
      total: e,
      totalLabel: t
    } = G(fe);
    return () => r("div", {
      class: [jt(Ie())]
    }, [r("span", {
      class: [Ie("_label")]
    }, [t.value]), r("span", {
      class: [Ie("_value")]
    }, [e.value])]);
  }
});
function Ft(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !bt(e);
}
const {
  n: ot,
  classes: Dt
} = N("pagination"), Wt = /* @__PURE__ */ A({
  name: "VIPagination",
  props: Je,
  directives: {
    css: ne
  },
  emits: ["size-change", "update:modelValue", "current-change", "update:total"],
  components: {
    prev: Ge,
    pager: Qe,
    next: Ke,
    jump: et,
    total: tt,
    "dw-select-v2": At,
    "dw-select-v2-option": Et
  },
  setup(e, t) {
    var ee, W;
    const a = (n) => typeof n != "number", s = (n) => n instanceof Array, i = ((W = (ee = ye()) == null ? void 0 : ee.vnode) == null ? void 0 : W.props) || {}, l = "onUpdate:sizeChange" in i || "onUpdate:size-change" in i || "onSizeChange" in i, h = "onUpdate:currentPage" in i || "onUpdate:current-page" in i || "onUpdate:modelValue" in i || "onCurrentChange" in i, u = "update:total" in i;
    let p = 10, C = 1, w = 100;
    const c = X({
      select_curSelect: "",
      select_list: [
        // { value: '100', label: '100/page', },
        // { value: '200', label: '200/page', },
      ],
      select_dynamicCss: {
        // "input-txt-alight": "center",
      }
    }), f = function() {
      s(e.pageSize) && (c.select_list = e.pageSize.map((n) => ({
        value: n,
        label: n + "/page"
      })), c.select_curSelect = c.select_list[0].value);
    }, S = g(() => {
      let n = 0;
      return a(e.total) ? console.warn("total属性不合格") : n = Math.max(1, Math.ceil(e.total / M.value)), n;
    }), v = g(() => {
      let n = 0;
      return a(e.total) || (a(e.pagerCount) || (n = S.value > 7 ? Math.max(7, e.pagerCount % 2 == 0 ? e.pagerCount - 1 : e.pagerCount) : S.value), n > 29 && (n = 29)), n;
    }), M = g({
      get() {
        let n = a(e.pageSize) ? p : e.pageSize > 5 ? e.pageSize : 5;
        return n = s(e.pageSize) ? c.select_curSelect : n, n;
      },
      set(n) {
        a(e.pageSize) && (p = n), l && (e.modelValue > Math.ceil(e.total / n) && (y.value = Math.ceil(e.total / n)), F(() => {
          t.emit("size-change", {
            pageSize: n,
            currentPage: e.modelValue
          });
        }));
      }
    }), y = g({
      get() {
        return a(e.modelValue) ? C : e.modelValue;
      },
      set(n) {
        let d = n;
        n < 1 ? d = 1 : n > S.value && (d = S.value), h && (t.emit("update:modelValue", d), t.emit("current-change", d));
      }
    }), H = g({
      get() {
        return a(e.total) ? w : e.total;
      },
      set(n) {
        let d = n;
        n < 0 && (d = 0), w = d, u && t.emit("update:total", d);
      }
    }), R = g(() => e.totalLabel), D = g(() => e.jumpLabel), B = g(() => Object.assign(Je.dynamicCss.default(), e.dynamicCss)), P = g(() => {
      let n = {};
      for (let d in B.value)
        d.includes("select-v2-") && (n[d.replace("select-v2-", "")] = B.value[d]);
      return n;
    }), _ = g(() => {
      let n = e.layout;
      const d = {
        total: !1,
        size: !1,
        prev: !1,
        next: !1,
        pager: !1,
        jump: !1
      };
      for (let b in d)
        d[b] = n.replace(/\s+/g, "").split(",").findIndex((z) => z == b) != -1;
      return d;
    });
    Se(fe, {
      pageCount: S,
      pagerCount: v,
      pageSize: M,
      currentPage: y,
      total: H,
      totalLabel: R,
      jumpLabel: D
    }), ae(() => {
      f();
    }), me(() => e.pageSize, () => {
      f();
    }, {
      deep: !0
    });
    const k = (n) => y.value = y.value - 1, V = (n) => y.value = y.value + 1, E = (n) => y.value = n, le = (n) => y.value = n, Q = function(n) {
      M.value = n.value;
    };
    return () => {
      let n;
      return Z(r("div", {
        class: [Dt(ot()), e.background ? "bgbox" : ""]
      }, [_.value.total ? r(tt, null, null) : "", _.value.size && s(e.pageSize) ? r(O("dw-select-v2"), {
        modelValue: c.select_curSelect,
        "onUpdate:modelValue": (d) => c.select_curSelect = d,
        dynamicCss: P.value,
        onHandleSelected: Q,
        class: ot("-select")
      }, Ft(n = c.select_list.map((d) => r(O("dw-select-v2-option"), {
        key: d.value,
        label: d.label,
        value: d.value
      }, null))) ? n : {
        default: () => [n]
      }) : "", _.value.prev ? r(Ge, {
        disabled: !1,
        onClick: k
      }, null) : "", _.value.pager ? r(Qe, {
        onClick: E
      }, null) : "", _.value.next ? r(Ke, {
        disabled: !1,
        onClick: V
      }, null) : "", _.value.jump ? r(et, {
        onJumpPage: le
      }, null) : ""]), [[ie("css"), B.value || {}]]);
    };
  }
}), zo = oe(Wt, "pagination"), Pe = {
  border: {
    type: Boolean,
    default: !1
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
    default: !1
  },
  modelValue: {
    type: [String, Number, Boolean],
    default: ""
  },
  dynamicCss: {
    type: Object,
    default: () => ({
      /**
       * 基础
       */
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
      /**
       * circle
       */
      "circle-size": "12",
      "circle-out-bg-color": "#989898",
      // 外圈颜色
      "circle-out-hover-bg-color": "#00b7ff",
      // 外圈悬浮颜色
      "circle-out-active-bg-color": "#01b3f9",
      // 外圈激活颜色
      "circle-inner-bg-color": "#fff",
      // 内圈颜色
      "circle-inner-size": "10",
      // 内圈size
      "circle-inner-active-bg-color": "#fff",
      // 内圈激活颜色
      "circle-inner-active-size": "4",
      // 内圈激活size
      /**
       * label
       */
      "txt-fo-size": "14",
      "txt-fo-color": "#000",
      "txt-fo-active-color": "#00b7ff",
      "txt-fo-active-weight": "500",
      "txt-pad-l": "8",
      /**
       * button mode
       */
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
      /**
       * animation
       */
      "ani-transition": "0.5"
    })
  }
}, _e = Symbol("radio"), { n: Xt, classes: qt } = N("radio"), Ut = A({
  name: "VIRadio",
  props: Pe,
  emits: ["click", "update:modelValue", "change"],
  setup(e, t) {
    let a = G(_e, void 0);
    const s = (u) => {
      l.value || (a ? a.changeModelValue(u) : t.emit("update:modelValue", "on"));
    }, i = g({
      get() {
        return a ? e.value == a.currentSelect.value : e.modelValue;
      },
      set() {
      }
    }), l = g({
      get() {
        return !!e.disabled;
      },
      set() {
      }
    }), h = g({
      get() {
        return a ? a.currentSelect.value : e.modelValue;
      },
      set(u) {
        t.emit && t.emit("update:modelValue", u);
      }
    });
    return {
      n: Xt,
      classes: qt,
      handleClick: s,
      IsChecked: i,
      IsDisable: l,
      modelValueBridge: h
    };
  }
}), Ve = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [s, i] of t)
    a[s] = i;
  return a;
}, Jt = ["value", "checked", "disabled"];
function Gt(e, t, a, s, i, l) {
  return ue(), ce("div", {
    class: j([e.classes(e.n()), e.IsChecked ? e.n("active") : "", e.border ? e.n("border") : ""]),
    onClick: t[1] || (t[1] = (h) => e.handleClick(e.value))
  }, [
    te("div", {
      class: j([e.classes(e.n("_input__wrapper")), e.IsDisable ? "is-disabled" : ""])
    }, [
      Z(te("input", {
        class: j([e.classes(e.n("_input"))]),
        type: "radio",
        ref: "radioRef",
        value: e.value,
        checked: e.IsChecked,
        disabled: e.IsDisable,
        "onUpdate:modelValue": t[0] || (t[0] = (h) => e.modelValueBridge = h)
      }, null, 10, Jt), [
        [mt, e.modelValueBridge]
      ]),
      te("div", {
        class: j([e.classes(e.n("_circle"))])
      }, null, 2)
    ], 2),
    te("label", {
      class: j(e.classes(e.n("_label"), e.IsDisable ? "is-disabled" : ""))
    }, gt(e.label), 3)
  ], 2);
}
const Kt = /* @__PURE__ */ Ve(Ut, [["render", Gt]]), Qt = {
  border: {
    type: Boolean,
    default: !1
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
    default: !1
  },
  modelValue: {
    type: [String, Number, Boolean],
    default: ""
  }
}, { n: Zt, classes: eo } = N("radio-button"), to = A({
  name: "VIRadioButton",
  props: Qt,
  emits: ["click", "update:modelValue", "change"],
  // directives: { ripple },
  setup(e, t) {
    let a = G(_e);
    const s = L(null), i = function(p) {
      h.value || (a ? a.changeModelValue(e.value) : t.emit("update:modelValue", "on"));
    }, l = g({
      get() {
        return a ? e.value == a.currentSelect.value : e.modelValue;
      },
      set() {
      }
    }), h = g({
      get() {
        return !!e.disabled;
      },
      set() {
      }
    }), u = g({
      get() {
        return a ? a.currentSelect.value : e.modelValue;
      },
      set(p) {
        t.emit && t.emit("update:modelValue", p);
      }
    });
    return {
      n: Zt,
      classes: eo,
      handleClick: i,
      IsChecked: l,
      IsDisable: h,
      refRadioButton: s,
      modelValue: u
    };
  }
}), oo = ["value", "checked", "disabled"];
function no(e, t, a, s, i, l) {
  return ue(), ce("div", {
    ref: "refRadioButton",
    class: j([e.classes(e.n()), e.IsChecked ? e.n("active") : "", e.border ? e.n("border") : ""]),
    onClick: t[1] || (t[1] = (...h) => e.handleClick && e.handleClick(...h))
  }, [
    Z(te("input", {
      class: j([e.classes(e.n("_input"))]),
      type: "radio",
      ref: "radioRef",
      value: e.value,
      checked: e.IsChecked,
      disabled: e.IsDisable,
      "onUpdate:modelValue": t[0] || (t[0] = (h) => e.modelValue = h)
    }, null, 10, oo), [
      [mt, e.modelValue]
    ]),
    te("label", {
      class: j(e.classes(e.n("_label"), e.IsDisable ? "is-disabled" : ""))
    }, gt(e.label), 3)
  ], 2);
}
const lo = /* @__PURE__ */ Ve(to, [["render", no]]), { n: ao, classes: io } = N("radio-group"), ro = A({
  name: "VIRadioGroup",
  props: Pe,
  emits: ["click", "update:modelValue", "change"],
  directives: { css: ne },
  setup(e, t) {
    const a = (l = e.modelValue) => {
      t.emit("update:modelValue", l), F(() => t.emit("change", l));
    }, s = g({
      get() {
        return e.modelValue;
      },
      set(l) {
        t.emit && t.emit("update:modelValue", l);
      }
    }), i = g(() => Object.assign(Pe.dynamicCss.default(), e.dynamicCss));
    return Se(_e, {
      currentSelect: s,
      changeModelValue: a
    }), {
      n: ao,
      classes: io,
      dynamicCssBridge: i
    };
  }
});
function so(e, t, a, s, i, l) {
  const h = ie("css");
  return Z((ue(), ce("div", {
    class: j(e.classes(e.n()))
  }, [
    wt(e.$slots, "default")
  ], 2)), [
    [h, e.dynamicCssBridge || {}]
  ]);
}
const uo = /* @__PURE__ */ Ve(ro, [["render", so]]), Oo = oe(Kt, "radio"), Yo = oe(lo, "radio-button"), jo = oe(uo, "radio-group"), nt = {
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
}, ft = Symbol("time-picker"), {
  n: co,
  classes: po
} = N("input-svg-icon"), mo = /* @__PURE__ */ A({
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
  setup(e, t) {
    const a = function(s) {
      t.emit("click", s);
    };
    return () => r("svg", {
      class: [po(co()), "icon"],
      height: e.height,
      width: e.width,
      viewBox: "0 0 1024 1024",
      xmlns: "http://www.w3.org/2000/svg",
      onClick: a
    }, [r("path", {
      fill: "currentColor",
      d: e.path
    }, null)]);
  }
}), lt = {
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
  n: at,
  classes: go
} = N("timePickerInput"), ho = /* @__PURE__ */ A({
  name: "VITimePickerInput",
  emits: ["focus", "blur", "click", "update:modelValue", "close"],
  directives: {
    css: ne
  },
  props: lt,
  components: {
    "vi-input-svg-icon": mo
  },
  setup(e, t) {
    const a = "M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z", s = X({
      softFocus: !1,
      isHover: !1
    }), i = function(R) {
      y.value || t.emit("click", R);
    }, l = function(R) {
      y.value || (t.emit("update:modelValue", R.target.value), t.emit("close"), R.stopPropagation());
    }, h = function(R) {
      y.value || (t.emit("focus", R), s.softFocus = !0);
    }, u = function(R) {
      y.value || (t.emit("blur", R), s.softFocus = !1);
    }, p = function(R) {
      y.value || (s.isHover = !0);
    }, C = function(R) {
      y.value || (s.isHover = !1);
    }, w = function(R) {
      y.value || t.emit("update:modelValue", R.target.value);
    }, c = function(R) {
      y.value || t.emit("update:modelValue", R.target.value);
    }, f = g(() => Object.assign(lt.dynamicCss.default(), e.dynamicCss)), S = g(() => typeof e.readonly == "string" ? !0 : e.readonly), v = g(() => typeof e.clearable == "string" ? !0 : e.clearable), M = g(() => typeof e.showPassword == "string" ? !0 : e.showPassword), y = g(() => typeof e.disabled == "string" ? !0 : e.disabled), H = g(() => s.softFocus ? "active" : "");
    return () => Z(r("div", {
      class: [go(at()), H.value, y.value ? "disabled" : ""],
      onClick: i,
      onMouseenter: p,
      onMouseleave: C
    }, [r("input", {
      class: [at("_inner")],
      placeholder: e.placeholder,
      onFocus: h,
      onBlur: u,
      readonly: S.value || y.value,
      value: e.modelValue,
      onChange: w,
      onInput: c,
      type: M.value ? "password" : "text"
    }, null), e.modelValue && v.value && s.isHover ? r(O("vi-input-svg-icon"), {
      class: "icon",
      height: f.value["input-icon-width"],
      width: f.value["input-icon-width"],
      path: a,
      onClick: l
    }, null) : ""]), [[ie("css"), f.value || {}]]);
  }
}), {
  n: ke,
  classes: it
} = N("popper"), fo = /* @__PURE__ */ A({
  name: "VITimePickerPopper",
  emits: ["focus", "blur", "click"],
  props: ["active"],
  setup(e, t) {
    let {
      timePickerRef: a
    } = G(ft);
    const s = X({
      parentRect: {
        x: 0,
        y: 0,
        height: 0,
        width: 0
      },
      dropdownTop: "0"
    }), i = L(null), l = L(null), h = () => {
      F(() => {
        s.parentRect = a.value.getBoundingClientRect(), s.dropdownTop = s.parentRect.height + 10 + "px";
      });
    };
    return ae(() => h()), () => {
      var u, p;
      return r("div", {
        class: [ke(""), e.active ? "active" : ""],
        style: {
          top: s.dropdownTop
        }
      }, [r("div", {
        ref: i,
        class: [ke("_arrow")]
      }, [e.active]), r("div", {
        ref: l,
        class: [it(ke("_content"))]
      }, [r("div", {
        class: [it(ke("_inner"))]
      }, [(p = (u = t.slots).default) == null ? void 0 : p.call(u)])])]);
    };
  }
}), rt = {
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
var be = /* @__PURE__ */ ((e) => (e.HORIZONTAL = "horizontal", e.VERTICAL = "vertical", e))(be || {});
const vo = {
  // 横向还是竖向
  type: {
    type: [String || be],
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
}, vt = Symbol("scroll-bar"), {
  n: bo
} = N("scroll-bar__thumb"), wo = /* @__PURE__ */ A({
  name: "ScrollBar",
  emits: ["update:height", "update:width"],
  props: vo,
  setup(e, t) {
    const {
      thumbRatioY: a,
      thumbRatioX: s,
      thumbRatioYMaxRange: i,
      thumbRatioXMaxRange: l,
      wrapperInnerMaxiMoveProportionY: h,
      wrapperInnerMaxiMoveProportionX: u,
      scrollBarRef: p
    } = G(vt), C = L(), w = X({
      mouseMoving: !1
    });
    let c = 0, f = 0, S = 0, v = 0, M = 0, y = 0;
    const H = g({
      get() {
        return e.height;
      },
      set(k) {
        t.emit && t.emit("update:height", k);
      }
    }), R = g({
      get() {
        return e.width;
      },
      set(k) {
        t.emit && t.emit("update:width", k);
      }
    }), D = function(k) {
      if (k == "vertical") {
        let V = 0;
        const E = M;
        V = S < 0 ? E + Math.abs(S) : E - Math.abs(S), V < 0 && (V = 0), V > i.value && (V = i.value), p.value.scrollTop = Math.abs(h.value * V);
      } else if (k == "horizontal") {
        let V = 0;
        const E = y;
        V = v < 0 ? E + Math.abs(v) : E - Math.abs(v), V < 0 && (V = 0), V > l.value && (V = l.value), p.value.scrollLeft = Math.abs(u.value * V);
      }
    }, B = function(k) {
      w.mouseMoving = !0, M = Number(a.value.slice(11, -3)), y = Number(s.value.slice(11, -3)), c = Number(k.clientY), f = Number(k.clientX);
    }, P = function(k) {
      S = c - k.clientY, v = f - k.clientX, D(e.type);
    };
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", P), document.removeEventListener("mousedown", B), c = 0, f = 0, S = 0, v = 0, M = 0, y = 0, w.mouseMoving = !1;
    });
    const _ = (k) => {
      document.addEventListener("mousedown", B), document.addEventListener("mousemove", P);
    };
    return () => r("div", {
      class: bo(),
      ref: C,
      style: {
        height: H.value,
        width: R.value,
        transform: e.type == "vertical" ? e.ratioY : e.ratioX
      },
      onMousedown: _
    }, null);
  }
}), {
  n: ve
} = N("scroll-bar"), yo = /* @__PURE__ */ A({
  name: "ScrollBar",
  emits: ["update:width", "scroll"],
  directives: {
    css: ne
  },
  props: rt,
  // expose:['setScrollTop','setScrollLeft','setScrollTop'],
  components: {
    "scroll-bar-thumb": wo
  },
  setup(e, t) {
    let a = null;
    const s = (n) => {
      E();
    }, i = L(), l = L(), h = L(), u = X({
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
    let p = L(!1);
    me(() => e.noResize, (n) => {
      n ? a == null || a.disconnect() : (a = new MutationObserver(s), F(() => {
        a.observe(l.value, {
          attributes: !0,
          childList: !0,
          subtree: !0
        });
      }));
    }, {
      immediate: !0
    });
    const C = g(() => Object.assign(rt.dynamicCss.default(), e.dynamicCss)), w = g(() => e.height), c = g({
      get() {
        return u.cacheContainerWidth;
      },
      set(n) {
        u.cacheContainerWidth = n;
      }
    }), f = g({
      get() {
        return u.thumbHeight;
      },
      set(n) {
        u.thumbHeight = n;
      }
    }), S = g({
      get() {
        return u.thumbWidth;
      },
      set(n) {
        u.thumbWidth = n;
      }
    }), v = g({
      get() {
        return u.thumbRatioX;
      },
      set(n) {
        u.thumbRatioX = n;
      }
    }), M = g({
      get() {
        return u.thumbRatioY;
      },
      set(n) {
        u.thumbRatioY = n;
      }
    }), y = g(() => u.thumbRatioYMaxRange), H = g(() => u.thumbRatioXMaxRange), R = g(() => u.wrapperInnerMaxiMoveProportionY), D = g(() => u.wrapperInnerMaxiMoveProportionX), B = (n) => {
      u.thumbRatioY = `translateY(${String(u.thumbRatioYProportion * n) + "px"})`;
    }, P = (n) => {
      u.thumbRatioX = `translateX(${String(u.thumbRatioXProportion * n) + "px"})`;
    }, _ = (n) => {
      i.value.scrollTop = n;
    }, k = (n) => {
      i.value.scrollLeft = n;
    }, V = (n, d) => {
      _(n), k(d);
    }, E = (n) => {
      var d, b;
      u.wrapperInnerRealHeight = Number((d = l.value) == null ? void 0 : d.scrollHeight), u.wrapperInnerRealWidth = Number((b = l.value) == null ? void 0 : b.scrollWidth), u.wrapperInnerMaxiMoveRangeY = u.wrapperInnerRealHeight - Number(w.value.replace("px", "")), u.wrapperInnerMaxiMoveRangeX = u.wrapperInnerRealWidth - Number(c.value.replace("px", "")), u.thumbHeightProportion = Number(w.value.replace("px", "")) / u.wrapperInnerRealHeight, u.thumbWidthProportion = Number(c.value.replace("px", "")) / u.wrapperInnerRealWidth, u.thumbHeight = String(u.thumbHeightProportion * Number(w.value.replace("px", ""))) + "px", u.thumbWidth = String(u.thumbWidthProportion * Number(c.value.replace("px", ""))) + "px", u.thumbRatioYMaxRange = Number(w.value.replace("px", "")) - Number(u.thumbHeight.replace("px", "")), u.thumbRatioXMaxRange = Number(c.value.replace("px", "")) - Number(u.thumbWidth.replace("px", "")), u.thumbRatioYProportion = u.thumbRatioYMaxRange / u.wrapperInnerMaxiMoveRangeY, u.thumbRatioXProportion = u.thumbRatioXMaxRange / u.wrapperInnerMaxiMoveRangeX, u.wrapperInnerMaxiMoveProportionY = u.wrapperInnerMaxiMoveRangeY / u.thumbRatioYMaxRange, u.wrapperInnerMaxiMoveProportionX = u.wrapperInnerMaxiMoveRangeX / u.thumbRatioXMaxRange;
    };
    ae(() => {
      u.cacheContainerWidth = e.width, E();
    });
    const le = (n) => {
      const d = n.target.scrollTop, b = n.target.scrollLeft;
      B(d), P(b), t.emit && t.emit("scroll", b, d);
    }, Q = () => {
      p.value = !0;
    }, ee = () => {
      p.value = !1;
    };
    Se(vt, {
      height: w,
      thumbRatioY: M,
      thumbRatioX: v,
      thumbRatioYMaxRange: y,
      thumbRatioXMaxRange: H,
      wrapperInnerMaxiMoveProportionY: R,
      wrapperInnerMaxiMoveProportionX: D,
      scrollBarRef: i
    }), t.expose({
      setScrollTop: _,
      setScrollLeft: k,
      setScrollTo: V
    });
    const W = (n = be.VERTICAL) => {
      if (e.width === !1 || e.height === !1)
        return "";
      const d = u.wrapperInnerRealHeight, b = Number(e.height.replace("px", "")), z = u.wrapperInnerRealWidth;
      if (n == "vertical")
        return b < d ? r(O("scroll-bar-thumb"), {
          ref: h,
          type: n,
          height: f.value,
          width: e.thumbWidth,
          ratioX: v.value,
          ratioY: M.value,
          class: p.value ? "show" : "hide"
        }, null) : "";
      if (n == "horizontal") {
        let $ = Number(c.value.replace("px", ""));
        if (c.value == "auto") {
          const Y = () => {
            c.value = "auto", F(() => {
              var q;
              $ = Number((q = l.value) == null ? void 0 : q.clientWidth), c.value = $ + "px", E();
            });
          };
          Y(), window.onresize = () => Y();
        } else if (c.value)
          return $ < z ? r(O("scroll-bar-thumb"), {
            ref: h,
            type: n,
            height: e.thumbWidth,
            width: S.value,
            ratioX: v.value,
            ratioY: M.value,
            class: p.value ? "show" : "hide"
          }, null) : "";
      }
    };
    return () => {
      var n, d;
      return Z(r("div", {
        class: ve(),
        style: {
          width: c.value
        },
        onMouseenter: Q,
        onMouseleave: ee
      }, [r("div", {
        class: ve("_wrapper"),
        ref: i,
        style: {
          height: w.value,
          width: c.value
        },
        onScroll: le
      }, [r("div", {
        class: ve("_view"),
        ref: l
      }, [(d = (n = t.slots).default) == null ? void 0 : d.call(n)])]), r("div", {
        class: [ve("_bar"), "horizontal"]
      }, [W(be.HORIZONTAL)]), r("div", {
        class: [ve("_bar"), "vertical"]
      }, [W(be.VERTICAL)])]), [[ie("css"), C.value || {}]]);
    };
  }
}), So = oe(yo, "scroll-bar"), {
  n: Co,
  classes: xo
} = N("time-picker"), Bo = /* @__PURE__ */ A({
  name: "VITimePicker",
  emits: ["click", "inputClick", "closeClick", "cancelClick", "okClick", "update:modelValue", "focus", "blur"],
  directives: {
    css: ne
  },
  props: nt,
  components: {
    "vi-time-picker-input": ho,
    "vi-time-picker-popper": fo,
    "vi-scroll-bar": So
  },
  setup(e, t) {
    const a = [null, null, null];
    let s = "";
    const i = (o) => o < 10 ? "0" + o : o + "", l = (o) => {
      const m = o.match(/^(\d{1,2}):(\d{1,2}):(\d{1,2})$/);
      return m || console.warn("初始化数据格式不符合规范,已被清空！"), m;
    }, h = () => "xxxxxxxx".replace(/[xy]/g, function(o) {
      var m = 0 | 16 * Math.random(), x = o == "x" ? m : 8 | 3 & m;
      return x.toString(16);
    }), u = L();
    let p = L(), C = L(), w = L();
    const c = X({
      uuid: h(),
      popperVisible: !1,
      softFocus: !1,
      isSubmit: !1,
      // 是否确定
      hourList: [],
      minuteList: [],
      secondList: [],
      currentSelect: ["", "", ""]
    }), f = function() {
      c.popperVisible = !1, c.softFocus = !1;
    }, S = function(o) {
      let m = !1;
      const x = o.path || o.composedPath && o.composedPath();
      for (let I = 0; I < x.length; I++) {
        const T = x[I];
        if (T.classList && T.classList.value && T.getAttribute("class").includes("-time-picker") && T.dataset.id == c.uuid) {
          m = !0;
          break;
        }
      }
      m || (f(), c.isSubmit = !0);
    };
    document.addEventListener("mousedown", S);
    const v = function(o) {
      t.emit && t.emit("focus");
    }, M = function(o) {
      t.emit && t.emit("blur");
    }, y = function() {
      t.emit && t.emit("click");
    }, H = function(o) {
      c.popperVisible = !c.popperVisible, c.isSubmit = !1, e.modelValue || n(), t.emit && t.emit("inputClick");
    }, R = function() {
      c.popperVisible = !1, t.emit && t.emit("closeClick");
    }, D = function(o) {
      const {
        type: m
      } = o.target.dataset;
      c.popperVisible = !1, m == "cancel" ? (c.isSubmit = !1, t.emit && t.emit("update:modelValue", s), t.emit && t.emit("cancelClick"), W()) : m == "ok" && (c.isSubmit = !0, t.emit && t.emit("okClick", c.currentSelect));
    }, B = function(o, m) {
      const x = {
        index: {
          hour: "0",
          minute: "1",
          second: "2"
        },
        ref: {
          hour: p,
          minute: C,
          second: w
        }
      }, {
        num: I,
        disabled: T
      } = m.dataset;
      if (I) {
        if (T == "true")
          return;
        c.currentSelect[x.index[o]] = I;
        const de = Number(c.currentSelect[x.index[o]]) * Number(b.value["popper-spinner-number-height"]);
        x.ref[o].value.setScrollTop(de);
      }
    }, P = function(o) {
      B("hour", o.target);
    }, _ = function(o) {
      B("minute", o.target);
    }, k = function(o) {
      B("second", o.target);
    }, V = function(o, m) {
      const x = {
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
      let T = Math.round(o / Number(b.value["popper-spinner-number-height"]));
      if (e[x.ableRange[m]].filter((xe) => xe == T).length > 0)
        return;
      c.currentSelect[x.timers[m]] = i(T);
      let ge = T * Number(b.value["popper-spinner-number-height"]);
      a[x.timers[m]] && (clearTimeout(a[x.timers[m]]), a[x.timers[m]] = null), a[x.timers[m]] = setTimeout(() => {
        m == "hour" && p.value.setScrollTop(ge), m == "minute" && C.value.setScrollTop(ge), m == "second" && w.value.setScrollTop(ge);
      }, 200);
    }, E = function(o, m) {
      V(m, "hour");
    }, le = function(o, m) {
      V(m, "minute");
    }, Q = function(o, m) {
      V(m, "second");
    }, ee = () => {
      c.hourList = new Array(24).fill(0).map((o, m) => m < 10 ? "0" + m : m + ""), c.minuteList = new Array(60).fill(0).map((o, m) => m < 10 ? "0" + m : m + ""), c.secondList = new Array(60).fill(0).map((o, m) => m < 10 ? "0" + m : m + "");
    }, W = function() {
      s && (p.value.setScrollTop(Number(s.slice(0, 2)) * Number(b.value["popper-spinner-number-height"])), C.value.setScrollTop(Number(s.slice(3, 5)) * Number(b.value["popper-spinner-number-height"])), w.value.setScrollTop(Number(s.slice(6, 8)) * Number(b.value["popper-spinner-number-height"])));
    }, n = () => {
      const o = new Date(), m = o.getHours(), x = o.getMinutes(), I = o.getSeconds();
      c.currentSelect[0] = i(m), c.currentSelect[1] = i(x), c.currentSelect[2] = i(I), p.value.setScrollTop(Number(c.currentSelect[0]) * Number(b.value["popper-spinner-number-height"])), C.value.setScrollTop(Number(c.currentSelect[1]) * Number(b.value["popper-spinner-number-height"])), w.value.setScrollTop(Number(c.currentSelect[2]) * Number(b.value["popper-spinner-number-height"])), t.emit && t.emit("update:modelValue", c.currentSelect[0] + ":" + c.currentSelect[1] + ":" + c.currentSelect[2]);
    }, d = function() {
      if (e.modelValue && l(e.modelValue)) {
        const o = e.modelValue.split(":"), m = e.disabledHours.findIndex((T) => T == o[0]) != -1, x = e.disabledMinutes.findIndex((T) => T == o[1]) != -1, I = e.disabledSeconds.findIndex((T) => T == o[2]) != -1;
        if (m || x || I)
          return console.warn("输入的值包含禁用项,已被清空"), t.emit && t.emit("update:modelValue", ""), !0;
      }
      return !1;
    };
    yt(() => {
      if (e.modelValue && l(e.modelValue) && !d()) {
        const o = e.modelValue.split(":");
        c.currentSelect[0] = o[0], c.currentSelect[1] = o[1], c.currentSelect[2] = o[2], s = e.modelValue;
      }
    }), ae(() => {
      ee(), F(() => {
        W();
      });
    });
    const b = g(() => Object.assign(nt.dynamicCss.default(), e.dynamicCss)), z = g(() => {
      const o = {};
      for (const m in b.value)
        m.includes("input") && (o[m] = b.value[m]);
      return o;
    }), $ = g({
      get() {
        return d(), e.modelValue;
      },
      set(o) {
        t.emit && t.emit("update:modelValue", o);
      }
    }), Y = g(() => e.clearable), q = function(o, m) {
      const x = {
        hour: "disabledHours",
        minute: "disabledMinutes",
        second: "disabledSeconds"
      };
      let I = !1;
      return e[x[o]].forEach((T) => T == m ? I = !0 : ""), I;
    }, U = g(() => function(o) {
      return q("hour", o);
    }), J = g(() => function(o) {
      return q("minute", o);
    }), K = g(() => function(o) {
      return q("second", o);
    });
    return we(() => {
      const o = c.currentSelect[0], m = c.currentSelect[1], x = c.currentSelect[2];
      if (!o && !m && !x) {
        t.emit && t.emit("update:modelValue", "");
        return;
      }
      const I = o + ":" + m + ":" + x;
      t.emit && t.emit("update:modelValue", I);
    }), we(() => {
      c.isSubmit && (s = e.modelValue, t.emit && t.emit("update:modelValue", s));
    }), Se(ft, {
      timePickerRef: u
    }), () => Z(r("div", {
      ref: u,
      "data-id": c.uuid,
      class: [xo(Co())],
      onClick: y
    }, [r(O("vi-time-picker-input"), {
      placeholder: e.placeholder,
      modelValue: $.value,
      "onUpdate:modelValue": (o) => $.value = o,
      onFocus: v,
      onBlur: M,
      onClose: R,
      dynamicCss: z.value || {},
      clearable: Y.value,
      readonly: !0,
      onClick: H
    }, null), r(O("vi-time-picker-popper"), {
      active: c.popperVisible
    }, {
      default: () => [r("div", {
        class: "time-panel"
      }, [r("div", {
        class: "time-panel__content"
      }, [r(O("vi-scroll-bar"), {
        ref: p,
        class: "time-panel__spinner time-panel__popper-spinner--hour",
        onScroll: E,
        height: Number(b.value["popper-spinner-number-height"]) * 6 + "px"
      }, {
        default: () => [r("ul", {
          onClick: P
        }, [c.hourList.map((o) => r("li", {
          "data-num": o,
          "data-disabled": U.value(Number(o)),
          class: [c.currentSelect[0] == o ? "active" : "", U.value(Number(o)) ? "disabled" : ""]
        }, [o]))])]
      }), r(O("vi-scroll-bar"), {
        ref: C,
        class: "time-panel__spinner time-panel__popper-spinner--minutes",
        onScroll: le,
        height: Number(b.value["popper-spinner-number-height"]) * 6 + "px"
      }, {
        default: () => [r("ul", {
          onClick: _
        }, [c.minuteList.map((o) => r("li", {
          "data-num": o,
          "data-disabled": J.value(Number(o)),
          class: [c.currentSelect[1] == o ? "active" : "", J.value(Number(o)) ? "disabled" : ""]
        }, [o]))])]
      }), r(O("vi-scroll-bar"), {
        ref: w,
        class: "time-panel__spinner time-panel__popper-spinner--second",
        onScroll: Q,
        height: Number(b.value["popper-spinner-number-height"]) * 6 + "px"
      }, {
        default: () => [r("ul", {
          onClick: k
        }, [c.secondList.map((o) => r("li", {
          "data-num": o,
          "data-disabled": K.value(Number(o)),
          class: [c.currentSelect[2] == o ? "active" : "", K.value(Number(o)) ? "disabled" : ""]
        }, [o]))])]
      })]), r("div", {
        class: "time-panel__footer",
        onClick: D
      }, [r("div", {
        "data-type": "cancel",
        class: "time-panel__footer_cancel"
      }, [Le("取消")]), r("div", {
        "data-type": "ok",
        class: "time-panel__footer_ok"
      }, [Le("确认")])])])]
    })]), [[ie("css"), b.value || {}]]);
  }
}), Fo = oe(Bo, "time-picker");
var Ae = /* @__PURE__ */ ((e) => (e.AUTHROLL = "autoRoll", e.HANDMOVE = "handRoll", e))(Ae || {});
const st = {
  // 表头字段-配置   // TODO type类型约束下
  header: {
    type: Array,
    default: []
  },
  // 表头显隐
  showHeader: {
    type: Boolean,
    default: !0
  },
  // 每行固高
  itemHeight: {
    type: [String],
    default: "40px"
  },
  // 可见条数
  showCount: {
    type: [Number],
    default: 8
  },
  // 滚动条数
  rollCount: {
    type: [Number],
    default: 1
  },
  // 特殊显示的位置
  attractShowCount: {
    type: Array,
    // 内部会错判断，如果数组内的值超过展示的条数，则清空为[]   // TODO 未做
    default: [3, 4]
    // default:[]
  },
  // 滚动类型
  rollType: {
    type: String,
    default: "autoRoll",
    validator: function(e) {
      return Object.values(Ae).includes(e);
    }
  },
  // 自动滚动时长间隔 ( 不能小于或等于 scrollTransition )
  loopTime: {
    type: Number,
    default: 1e3 * 2
  },
  // 滚动过渡时长
  scrollTransition: {
    type: Number,
    default: 1e3 * 0.8
  },
  // (临时)固定层级缩放
  tmp_scaleRule: {
    type: Array,
    default: [1.3, 1]
  },
  // 缩放规则  ----- 支持对每一列进行配置缩放规则
  scaleRule: {
    type: [Number, Array],
    // 特殊显示位置为1.5，往下根据数量进行递减（如果数据只有三条，那么只有1.5和1.0会生效）
    default: [1.5, 1, 0.8]
  },
  // 数据列表
  modelValue: {
    type: Array,
    default: []
  },
  dynamicCss: {
    type: Object,
    default: () => ({
      // 容器宽度
      "box-wid": "800",
      // 或者auto
      // 钉在表格上的列表
      "pin-hei": "80",
      "pin-radius": "4",
      "pin-dire-b": "120",
      // 距离底部距离
      "pin-bg-color-style": "double",
      // single 是使用单色 double 是使用渐变色
      "pin-bg-color-to": "#00DEFF",
      "pin-bg-color-from": "#FFFFFF",
      "pin-bg-color-angle": "135",
      "pin-bg-color-value": "#49a3cb",
      /**
       * 表头相关
       */
      "th-pad-tb": "10",
      // 表头的 上下内边距
      "th-bg-color": "rgb(179, 210, 224)",
      "th-fo-color": "rgb(90, 99, 110)",
      "th-fo-size": "16",
      "th-fo-weight": "900",
      "th-radius-lt": "8",
      "th-radius-rt": "8",
      "th-radius-lb": "0",
      "th-radius-rb": "0",
      /**
       * 表体相关
       */
      // 鼠标悬浮表行背景颜色
      "tr-hover-bg-color": "rgb(132 176 212 / 80%)",
      "tr-hover-transition": "0.3",
      // 激活的背景颜色
      "tr-focus-bg-color-style": "single",
      // single 是使用单色 double 是使用渐变色
      "tr-focus-bg-color-to": "#00DEFF",
      "tr-focus-bg-color-from": "#FFFFFF",
      "tr-focus-bg-color-angle": "135",
      "tr-focus-bg-color-value": "rgb(211, 228, 242)",
      // 其余未激活的背景颜色
      "tr-un-focus-bg-color": "rgb(235, 235, 235)",
      /**
       * 表列相关
       */
      "td-pad-lr": "20",
      // 表列的 左右外边距
      "td-pad-tb": "0",
      "td-txt-align": "center",
      // 文字对齐方式
      /**
       * longText组件
       */
      "longText-txt-gap": "30",
      // 滚动文本连接间隙
      // header传入 权重最高
      "longText-sco-ani-name": "longTextScrollAnimation",
      // "longTextScrollAnimation3d"
      "longText-sco-ani-dura": "15"
    })
  }
}, { n: ko } = N(""), Vo = (e = ko()) => e + "xxxxxxxx".replace(/[xy]/g, function(t) {
  var a = 0 | 16 * Math.random(), s = t == "x" ? a : 8 | 3 & a;
  return s.toString(16);
});
class Mo {
  constructor(t = [], a = 7) {
    this.list = t, this.severalGroups = a, this.windowSliding = new Array(this.severalGroups).fill(0).map((s, i) => i);
  }
  // 每次消费的条数
  take(t) {
    return this.Sliding(t), this.show();
  }
  show() {
    return this.windowSliding.map((t) => this.list[t]);
  }
  Sliding(t) {
    this.windowSliding = this.windowSliding.map((a) => {
      const s = this.list.length, i = a + t;
      return i <= s - 1 ? i : i - s;
    });
  }
}
const Te = function(e) {
  const t = e instanceof Array ? [] : {};
  for (let a in e)
    t[a] = typeof e[a] == "object" ? Te(e[a]) : e[a];
  return t;
};
function Io(e, t = "top", a, s, i) {
  const l = t == "top" ? e.scrollTop : t == "left" ? e.scrollLeft : 0, h = a - l, u = performance.now();
  function p() {
    const c = performance.now() - u, f = C(
      c,
      l,
      h,
      s
    );
    t == "top" ? e.scrollTop = f : t == "left" && (e.scrollLeft = f), c < s ? requestAnimationFrame(p) : i && i();
  }
  function C(w, c, f, S) {
    return w /= S / 2, w < 1 ? f / 2 * w * w + c : (w--, -f / 2 * (w * (w - 2) - 1) + c);
  }
  requestAnimationFrame(p);
}
function Ne() {
  let e = new Date().getTime();
  return typeof performance < "u" && typeof performance.now == "function" && (e += performance.now()), "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    (a) => {
      const s = (e + Math.random() * 16) % 16 | 0;
      return e = Math.floor(e / 16), (a === "x" ? s : s & 3 | 8).toString(16);
    }
  );
}
function Ro(e) {
  const t = {};
  return e.map((a) => {
    const { __id: s, ...i } = a, l = JSON.stringify(i);
    if (!t[l])
      return t[l] = !0, a;
    const h = Ne();
    return { ...a, __id: h };
  });
}
const {
  n: ut
} = N("long-text"), ct = {
  // 显示文本
  text: {
    type: String,
    default: "这是一个默认文本"
  },
  // 滚动速度
  speed: {
    type: Number,
    default: 1e3
    // 默认速度为：文字的宽度像素/1s
  },
  // 动态css样式
  dynamicCss: {
    type: Object,
    default: () => ({
      // 空白衔接块的宽度
      "txt-gap": "22",
      // 是否启动滚动的gpu加速
      "sco-ani-name": "longTextScrollAnimation",
      // "longTextScrollAnimation3d"
      "sco-ani-dura": "10"
    })
  }
}, dt = /* @__PURE__ */ A({
  name: "LongText",
  emits: ["update:text"],
  props: ct,
  directives: {
    css: ne
  },
  // components: { ToolTip: ToolTip },
  setup(e, t) {
    var c;
    const s = "onUpdate:modelValue" in (((c = ye()) == null ? void 0 : c.vnode.props) || {}), i = L(null), l = L(null), h = L(null), u = L(null), p = X({
      isScroll: !0,
      // 是否达到滚动条件
      toolTip_x: 0,
      toolTip_y: 0,
      toolTip_content: "盎司附近拉萨解放了卡JFK垃圾地方"
    }), C = g(() => Object.assign(ct.dynamicCss.default(), e.dynamicCss)), w = g({
      get() {
        return p.isScroll = !0, e.text;
      },
      set(f) {
        s && t.emit("update:text", f);
      }
    });
    return ae(() => {
      we(() => {
        F(() => {
          const f = i.value.clientWidth, v = h.value.offsetWidth;
          f >= v && (p.isScroll = !1);
        });
      });
    }), () => Z(r("div", {
      class: [ut(""), "tooltip"],
      "data-tooltip": "这是一个 tooltip",
      ref: i
    }, [r("div", {
      class: ut("_scroll"),
      ref: l
    }, [r("span", {
      ref: h,
      class: p.isScroll ? "startAnimation" : ""
    }, [w.value]), p.isScroll ? r("span", null, [r("span", {
      class: "seizeASeat"
    }, null), r("span", {
      ref: u,
      class: "startAnimation"
    }, [w.value]), r("span", {
      class: "seizeASeat"
    }, null)]) : ""])]), [[ie("css"), C.value || {}]]);
  }
}), {
  n: se
} = N("roll-list"), Lo = /* @__PURE__ */ A({
  name: "RollList",
  emits: ["update:modelValue", "rowClick"],
  directives: {
    css: ne
  },
  props: st,
  components: {
    LongText: dt
  },
  setup(e, t) {
    var W;
    const s = "onUpdate:modelValue" in (((W = ye()) == null ? void 0 : W.vnode.props) || {}), i = X({
      uuid: Vo(se("-")),
      takeFlag: !1,
      rotationTimer: null,
      getInventedListDataBridgeInit: !1
    }), l = L(null), h = L();
    let u = 0, p = !1, C = null;
    const w = {
      longText: "longText"
    }, c = (n) => {
      n.preventDefault();
    }, f = g(() => Object.assign(st.dynamicCss.default(), e.dynamicCss)), S = g(() => {
      let n = {};
      for (let d in f.value)
        d.includes("longText") && (n[d.replace("longText-", "")] = f.value[d]);
      return n;
    }), v = g(() => e.header), M = () => {
      var n;
      for (let d = 0; d < ((n = h.value) == null ? void 0 : n.children.length); d++) {
        const b = h.value.children[d], {
          attractShowCount: z,
          header: $,
          tmp_scaleRule: Y
        } = e;
        if (z.includes(d))
          if (f.value["tr-focus-bg-color-style"] == "double") {
            const J = f.value["tr-focus-bg-color-angle"], K = f.value["tr-focus-bg-color-from"], o = f.value["tr-focus-bg-color-to"];
            b.style.background = `linear-gradient(${J}deg,${K},${o})`;
          } else
            b.style.background = f.value["tr-focus-bg-color-value"];
        else
          b.style.background = f.value["tr-un-focus-bg-color"];
        Array.from(b.children).forEach((U, J) => {
          U.style.flexBasis = $[J].basis + "%", z.includes(d) ? U.style.transform = `scale(${Y[0]})` : U.style.transform = `scale(${Y[1]})`;
        });
      }
    }, y = () => {
      if (i.rotationTimer && (clearInterval(i.rotationTimer), i.rotationTimer = null), e.rollType == Ae.AUTHROLL) {
        if (p)
          return;
        i.rotationTimer = H.value.length > e.showCount && setInterval(() => {
          F(() => {
            B();
          });
        }, e.loopTime);
      }
    }, H = g({
      get() {
        const n = e.modelValue.map((d, b) => (d.__id = Ne(), d.__uniqueness = Ne(), d));
        return C = new Mo(Te(n), e.showCount * 2), F(() => {
          M();
        }), n;
      },
      set(n) {
        s && t.emit("update:modelValue", n);
      }
    }), R = g(() => {
      if (i.takeFlag = !i.takeFlag, e.modelValue.length > e.showCount) {
        const n = i.getInventedListDataBridgeInit ? e.rollCount : (i.getInventedListDataBridgeInit = !0) && 0;
        return Ro(C.take(n));
      } else
        return new Array(e.modelValue.length).fill(0).map((n, d) => H.value[d]);
    }), D = g(() => {
      let n = H.value.length;
      const d = Number(e.itemHeight.replace("px", "")), b = n <= e.showCount ? n : e.showCount;
      return d * b + "px";
    });
    ae(() => {
      y(), me(() => e.rollType, () => y()), me(() => e.loopTime, () => y()), me(() => H.value, () => {
        y();
      });
    }), Re(() => {
    });
    const B = () => {
      var z;
      const n = l == null ? void 0 : l.value, d = e.rollCount <= e.showCount ? e.rollCount : e.showCount, b = n.scrollHeight - n.clientHeight;
      u = u + b / e.showCount * d;
      for (let $ = 0; $ < ((z = h.value) == null ? void 0 : z.children.length); $++) {
        const Y = h.value.children[$], {
          attractShowCount: q,
          header: U,
          tmp_scaleRule: J
        } = e, K = q.map((o) => o + d).includes($);
        if (K)
          if (f.value["tr-focus-bg-color-style"] == "double") {
            const m = f.value["tr-focus-bg-color-angle"], x = f.value["tr-focus-bg-color-from"], I = f.value["tr-focus-bg-color-to"];
            Y.style.background = `linear-gradient(${m}deg,${x},${I})`;
          } else
            Y.style.background = f.value["tr-focus-bg-color-value"];
        else
          Y.style.background = f.value["tr-un-focus-bg-color"];
        Array.from(Y.children).forEach((o, m) => {
          o.style.flexBasis = U[m].basis + "%", K ? o.style.transform = `scale(${J[0]})` : o.style.transform = `scale(${J[1]})`;
        });
      }
      Io(n, "top", u, e.scrollTransition, () => {
        i.takeFlag = !i.takeFlag, n.scrollTop = 0, u = 0, F(() => {
          M();
        });
      });
    }, P = () => {
      p = !0, i.rotationTimer && (clearInterval(i.rotationTimer), i.rotationTimer = null);
    }, _ = () => {
      p = !1, y();
    }, k = function(n) {
      t.emit && t.emit("rowClick", n);
    };
    Re(() => {
      P(), i.rotationTimer = null;
    });
    const V = () => {
      if (!f.value["pin-bg-color-style"])
        return "";
      let n = "none";
      if (f.value["pin-bg-color-style"] == "double") {
        const b = f.value["pin-bg-color-angle"], z = f.value["pin-bg-color-from"], $ = f.value["pin-bg-color-to"];
        n = `linear-gradient(${b}deg,${z},${$})`;
      } else
        n = f.value["pin-bg-color-value"];
      return r("div", {
        class: se("_pinSth"),
        style: {
          background: n
        }
      }, null);
    }, E = () => e.showHeader ? r("div", {
      class: se("_th")
    }, [v.value.map((n) => r("div", {
      class: se("_td"),
      style: {
        flexBasis: n.basis + "%"
      }
    }, [n.label]))]) : "", le = () => r("div", {
      ref: l,
      onWheel: c,
      class: se("_scroll"),
      style: {
        height: D.value
      }
    }, [r("ul", {
      ref: h,
      class: se("_wrapper")
    }, [R.value.map((n) => Q(n))])]), Q = (n) => r("li", {
      key: n.__id,
      style: {
        height: e.itemHeight
      },
      onClick: k.bind(this, n)
    }, [e.header.map((d, b) => ee(n, d, b))]), ee = (n, d, b) => {
      var Y, q, U, J, K, o, m, x, I, T, de, ge, xe, Ee, $e, He, ze, Oe;
      let z = {};
      d.longText && ((Y = d == null ? void 0 : d.longText) != null && Y.speed && (z["sco-ani-dura"] = d.longText.speed), (q = d.longText) != null && q.GPUSpee && (z["sco-ani-name"] = ((U = d == null ? void 0 : d.longText) == null ? void 0 : U.GPUSpee) == !0 ? "longTextScrollxAnimation3d" : "longTextScrollxAnimation"), ((J = d.longText) != null && J.txtGap || Number(d.longText.txtGap) == 0) && (z["txt-gap"] = d.longText.txtGap));
      const $ = {};
      return n[d.prop] && ((K = d.fo) != null && K.textAlign && ($.textAlign = (o = d.fo) == null ? void 0 : o.textAlign), (m = d.fo) != null && m.style && ($.fontFamily = (x = d.fo) == null ? void 0 : x.style), (I = d.fo) != null && I.weight && ($.fontWeight = (T = d.fo) == null ? void 0 : T.weight), (de = d.fo) != null && de.color && ($.color = (ge = d.fo) == null ? void 0 : ge.color), (xe = d.fo) != null && xe.size && ($.fontSize = ((Ee = d.fo) == null ? void 0 : Ee.size) + "px")), r("div", {
        class: [se("_td")]
      }, [r("div", {
        class: [w[($e = v.value[b]) == null ? void 0 : $e.type]],
        style: {
          ...$
        }
      }, [(He = v.value[b]) != null && He.type && ((ze = v.value[b]) == null ? void 0 : ze.type) == "longText" ? r(dt, {
        style: {
          padding: "0 1px"
        },
        text: n[d.prop] || "undefined",
        speed: n[d.prop] ? (Oe = d.longText) == null ? void 0 : Oe.speed : !1,
        dynamicCss: Object.assign(Te(S.value), z)
      }, null) : n[d.prop] || "undefined"])]);
    };
    return () => Z(r("div", {
      class: se(),
      onMouseenter: P,
      onMouseleave: _
    }, [V(), E(), le()]), [[ie("css"), f.value || {}]]);
  }
}), Do = oe(Lo, "roll-list"), pt = {
  label: {
    type: [String, Number],
    default: ""
  },
  value: {
    type: [String, Number],
    default: ""
  },
  showCount: {
    type: Number,
    default: 4
  },
  modelValue: {
    type: [Array],
    default: [
      "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240207113212.png",
      "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240207173357.png",
      "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240218221447.jpg",
      "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240222153642.png",
      "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240222153607.png",
      "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20220105175300.png"
    ]
  },
  dynamicCss: {
    type: Object,
    default: () => ({
      /**
       * 基础
       */
      "bs-box-height": "100",
      "bs-box-width": "320",
      "bs-img-height": "100",
      "bs-img-width": "100",
      "bs-img-interval": "10"
    })
  }
}, { n: Po, classes: To } = N("scroll-block"), No = A({
  name: "VIScrollBlock",
  directives: { css: ne },
  props: pt,
  emits: ["click", "update:modelValue", "change"],
  setup(e, t) {
    var c;
    (c = ye()) != null && c.vnode.props;
    const a = L(), s = L(!0);
    let i = L([
      // "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240207113212.png",
      // "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240207173357.png",
      // "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240218221447.jpg",
      // "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240222153642.png",
      // "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240222153607.png",
      // "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20220105175300.png"
    ]), l = L([
      // "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240207113212.png",
      // "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240207173357.png",
      // "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240218221447.jpg",
      // "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240222153642.png",
      // "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240222153607.png",
      // "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20220105175300.png"
    ]), h = 0;
    const u = X({
      transform: "translateX(0px)"
    });
    function p(f, S = "top", v, M, y) {
      const H = S == "top" ? f.scrollTop : S == "left" ? f.scrollLeft : 0, R = v - H, D = performance.now();
      function B() {
        const k = performance.now() - D, V = P(
          k,
          H,
          R,
          M
        );
        S == "top" ? f.scrollTop = V : S == "left" && (f.scrollLeft = V), k < M ? requestAnimationFrame(B) : y && y();
      }
      function P(_, k, V, E) {
        return V * _ / E + k;
      }
      requestAnimationFrame(B);
    }
    const C = g(() => (e.modelValue.length <= e.showCount && (i.value = [...e.modelValue, ...e.modelValue], l.value = [...i.value.slice(0)]), e.dynamicCss["bs-box-width"] = e.showCount * e.dynamicCss["bs-img-width"] + (e.showCount - 1) * e.dynamicCss["bs-img-interval"], Object.assign(pt.dynamicCss.default(), e.dynamicCss))), w = (f) => {
      let S = 0, v = null;
      f == "front" ? (v = a.value.children[0], S = v.scrollWidth - v.clientWidth) : f == "backend" && (v = a.value.children[1], S = v.scrollWidth - v.clientWidth), h = h + S, p(
        v,
        "left",
        h,
        5e3,
        () => {
          s.value = !s.value, v.scrollLeft = 0, h = 0, w(s.value ? "front" : "backend");
        }
      );
    };
    return setTimeout(() => {
      w("front");
    }, 1e3), {
      n: Po,
      classes: To,
      scrollBlockDom: a,
      toggleScrollBox: s,
      imgList: i,
      imgList1: l,
      dynamicStyle: u,
      dynamicCssBridge: C
    };
  }
}), _o = ["src"], Ao = ["src"];
function Eo(e, t, a, s, i, l) {
  const h = ie("css");
  return Z((ue(), ce("div", {
    class: j([e.classes(e.n())]),
    ref: "scrollBlockDom"
  }, [
    te("div", {
      class: j([e.classes(e.n("_wrapper"))]),
      style: Ye({ opacity: e.toggleScrollBox ? 1 : 0 })
    }, [
      te("div", {
        class: j([e.classes(e.n("_wrapper__inner")), "0"])
      }, [
        (ue(!0), ce(je, null, Fe(e.imgList, (u, p) => (ue(), ce("img", {
          class: j([e.n("_wrapper__inner__image")]),
          key: p,
          src: u
        }, null, 10, _o))), 128))
      ], 2)
    ], 6),
    te("div", {
      class: j([e.classes(e.n("_wrapper"))]),
      style: Ye({ opacity: e.toggleScrollBox ? 0 : 1 })
    }, [
      te("div", {
        class: j([e.classes(e.n("_wrapper__inner")), "1"])
      }, [
        (ue(!0), ce(je, null, Fe(e.imgList1, (u, p) => (ue(), ce("img", {
          class: j([e.n("_wrapper__inner__image")]),
          key: p,
          src: u
        }, null, 10, Ao))), 128))
      ], 2)
    ], 6)
  ], 2)), [
    [h, e.dynamicCssBridge]
  ]);
}
const $o = /* @__PURE__ */ Ve(No, [["render", Eo]]), Wo = oe($o, "scroll-block");
export {
  zo as Pagination,
  Oo as Radio,
  Yo as RadioButton,
  jo as RadioGroup,
  Do as RollList,
  So as ScrollBar,
  Wo as ScrollBlock,
  At as SelectV2,
  Et as SelectV2Option,
  Fo as TimePicker
};
