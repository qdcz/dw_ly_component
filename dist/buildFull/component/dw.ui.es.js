import { defineComponent as M, createVNode as a, inject as D, reactive as P, computed as v, resolveComponent as x, ref as B, onMounted as z, watchEffect as K, nextTick as H, watch as Q, onUnmounted as fe, getCurrentInstance as me, provide as be, withDirectives as we, resolveDirective as Se, createTextVNode as ye } from "vue";
const q = (e, n) => (e.install = function(r) {
  if (e) {
    const s = e.name || e.__name;
    if (s || n) {
      const c = n ? `dw-${n}` : "dw-" + s.replace(/dw/gi, "").toLowerCase();
      r.component(c, e);
    } else
      console.error(e, n, !n);
  }
}, e), xe = (e) => Array.isArray(e);
function I(e) {
  const n = `vi-${e}`;
  return {
    n: (c) => c ? c.startsWith("-") ? `${n}${c}` : `${n}_${c}` : n,
    classes: (...c) => c.map((t) => {
      if (xe(t)) {
        const [u, p, l = null] = t;
        return u ? p : l;
      }
      return t;
    })
  };
}
const O = Symbol("select-v2"), F = function(e, n) {
  for (let [r, s] of Object.entries(n.value))
    e.style.setProperty("--" + r, s);
}, G = {
  mounted(e, n) {
    F(e, n);
  },
  updated(e, n) {
    F(e, n);
  },
  install(e) {
    e.directive("Css", this);
  }
}, j = {
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
  n: Ve,
  classes: Ce
} = I("select-v2-svg-icon"), k = /* @__PURE__ */ M({
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
  setup(e, n) {
    const r = function(c) {
      n.emit("click", c);
    }, s = function() {
      return a("svg", {
        class: [Ce(Ve()), "icon"],
        height: e.height,
        width: e.width,
        viewBox: "0 0 1024 1024",
        xmlns: "http://www.w3.org/2000/svg",
        onClick: r
      }, [a("path", {
        fill: "currentColor",
        d: e.path
      }, null)]);
    };
    return () => s();
  }
}), {
  n: A,
  classes: Le
} = I("select-v2-input"), Be = /* @__PURE__ */ M({
  name: "VISelectV2Input",
  emits: ["focus", "blur", "click", "clear"],
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
    "vi-select-v2-svg-icon": k
  },
  setup(e, n) {
    const {
      currentSelect: r,
      clearable: s,
      cacheOptionList: c,
      mode: t
    } = D(O), u = "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z", p = "M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z", l = P({
      isHover: !1
    }), f = function(S) {
      n.emit("click", S);
    }, b = function(S) {
      r.value = "", n.emit("clear"), S.stopPropagation();
    }, d = function(S) {
      n.emit("focus", S);
    }, w = function(S) {
      n.emit("blur", S);
    }, V = function(S) {
      l.isHover = !0;
    }, i = function(S) {
      l.isHover = !1;
    }, C = v(() => c.value[r.value]);
    return () => a("div", {
      class: [Le(A(), e.active ? "active" : "")],
      onClick: f,
      onMouseenter: V,
      onMouseleave: i
    }, [a("input", {
      class: [A("_inner")],
      placeholder: e.placeholder,
      onFocus: d,
      onBlur: w,
      value: C.value,
      readonly: !0
    }, null), l.isHover && r.value && s.value && t.value == "single" ? a(x("vi-select-v2-svg-icon"), {
      height: e.iconHeight,
      width: e.iconWidth,
      path: p,
      onClick: b
    }, null) : a(x("vi-select-v2-svg-icon"), {
      height: e.iconHeight,
      width: e.iconWidth,
      path: u,
      class: ["arrow", e.active ? "turnUp" : "turnDown"]
    }, null)]);
  }
}), {
  n: _,
  classes: U
} = I("select-v2-dropdown"), Me = /* @__PURE__ */ M({
  name: "VISelectV2DropDown",
  emits: ["focus", "blur", "click"],
  props: ["active"],
  components: {
    "vi-svg-icon": k
  },
  setup(e, n) {
    let {
      selectRef: r,
      mode: s,
      currentSelect: c
    } = D(O);
    const t = P({
      parentRect: {
        x: 0,
        y: 0
      },
      dropdownTop: "0"
    }), u = B(), p = B(), l = () => {
      H(() => {
        t.dropdownTop = r.value.clientHeight + 10 + "px";
      });
    };
    return z(() => l()), K(() => {
      let f = c.value;
      s.value == "multiple" && f && setTimeout(() => {
        l();
      }, 200);
    }), () => {
      var f, b;
      return a("div", {
        class: [_("-popper"), e.active ? "active" : ""],
        style: {
          top: t.dropdownTop
        }
      }, [a("div", {
        ref: u,
        class: [_("-arrow"), e.active ? "active" : ""]
      }, null), a("div", {
        ref: p,
        class: [U(_(), e.active ? "active" : "")]
      }, [a("div", {
        class: [U(_("_inner"))]
      }, [(b = (f = n.slots).default) == null ? void 0 : b.call(f)])])]);
    };
  }
}), {
  n: W,
  classes: Ie
} = I("select-v2-tag"), Oe = /* @__PURE__ */ M({
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
    "vi-svg-icon": k
  },
  setup(e, n) {
    const {
      currentSelect: r
    } = D(O), s = "M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z", c = function(t) {
      let u = JSON.parse(JSON.stringify(r.value));
      try {
        u.forEach((p, l) => {
          if (p.value == e.value)
            throw u.splice(l, 1), new Error();
        });
      } catch {
      }
      r.value = u, n.emit && n.emit("closeClick", {
        currentClose: {
          label: e.label,
          value: e.value
        },
        currentSelects: JSON.parse(JSON.stringify(u))
      }), t.stopPropagation();
    };
    return () => a("div", {
      class: [Ie(W()), e.tooltip ? "useToolTip" : ""],
      "data-txt": e.label
    }, [a("span", {
      class: W("_span")
    }, [e.label]), a(x("vi-svg-icon"), {
      path: s,
      onClick: c,
      height: e.height + "px",
      width: e.width + "px"
    }, null)]);
  }
}), {
  n: Y,
  classes: He
} = I("scroll-bar"), De = /* @__PURE__ */ M({
  name: "VIScrollBar",
  emits: ["focus", "blur", "click"],
  props: ["dynamicCss"],
  directives: {
    css: G
  },
  setup(e, n) {
    let {
      cacheOptionList: r
    } = D(O);
    const s = B(), c = B(), t = P({
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
    }), u = function() {
      H(() => {
        let i = window.getComputedStyle(s.value.children[0]);
        t.realPadding = e.dynamicCss["popper-padding"] * 2, t.realHeight = i.height.replace("px", "") * 1, t.viewHeight = e.dynamicCss["popper-height"] * 1 - t.realPadding, t.maxScrollBoxRange = t.realHeight - t.viewHeight, t.proportion = Number((t.viewHeight / t.realHeight).toFixed(1)), t.scrollBarHeight = t.viewHeight * t.proportion, t.maxScrollBarRange = t.viewHeight - t.scrollBarHeight, t.scrollBarMovePropor = t.maxScrollBarRange / t.maxScrollBoxRange, t.scrollBoxMovePropor = t.maxScrollBoxRange / t.maxScrollBarRange;
      });
    };
    z(() => {
      u();
    }), Q(() => r.value, () => {
      u();
    }, {
      deep: !0,
      immediate: !1
    });
    const p = v(() => t.scrollBarHeight < t.realHeight), l = function(i) {
      let C = i.target.scrollTop;
      w(C);
    }, f = function(i) {
      document.addEventListener("mousedown", b), document.addEventListener("mousemove", d);
    }, b = function(i) {
      t.mouseMoving = !0, t.startY = i.clientY;
    }, d = function(i) {
      t.moveY = t.startY - i.clientY, V();
    };
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", d), document.removeEventListener("mousedown", b), t.startY = 0, t.moveY = 0, t.mouseMoving && (t.translateY = t._move), t.mouseMoving = !1;
    });
    const w = function(i) {
      t.mouseMoving || (t.translateY = t.scrollBarMovePropor * i, c.value.style.transform = `translateY(${t.translateY}px)`);
    }, V = function() {
      let i = 0;
      t.moveY < 0 ? i = t.translateY + Math.abs(t.moveY) : t.moveY >= 0 && (i = t.translateY - Math.abs(t.moveY)), i < 0 && (i = 0), i > t.maxScrollBarRange && (i = t.maxScrollBarRange), t._move = i, c.value.style.transform = `translateY(${i}px)`, s.value.scrollTop = Math.abs(t.scrollBoxMovePropor * i);
    };
    return () => {
      var i, C;
      return a("div", {
        class: [He(Y())]
      }, [a("div", {
        class: Y("left"),
        ref: s,
        onScroll: l
      }, [(C = (i = n.slots).default) == null ? void 0 : C.call(i)]), p.value ? a("div", {
        ref: c,
        class: Y("right"),
        style: {
          height: t.scrollBarHeight + "px"
        },
        onMousedown: f
      }, null) : ""]);
    };
  }
}), {
  n: ke,
  classes: _e
} = I("select-v2-option"), X = /* @__PURE__ */ M({
  name: "VISelectV2Option",
  emits: ["click"],
  props: ["label", "value"],
  components: {
    "vi-svg-icon": k
  },
  setup(e, n) {
    const {
      currentSelect: r,
      currentSelectLabel: s,
      mode: c,
      dropDownVisible: t,
      cacheOptionList: u,
      selectedFn: p,
      deleteOptionItem: l
    } = D(O), f = function() {
      if (c.value == "single")
        r.value = e.value, s.value = e.label, t.value = !1;
      else if (c.value == "multiple") {
        let d = JSON.parse(JSON.stringify(r.value)), w = !1;
        try {
          d.forEach((V, i) => {
            if (V.value == e.value)
              throw d.splice(i, 1), w = !0, new Error();
          });
        } catch {
        }
        w || d.push({
          label: e.label,
          value: e.value
        }), r.value = d;
      }
      p({
        label: e.label,
        value: e.value
      });
    };
    K(() => {
      u.value = {
        key: e.label,
        value: e.value
      };
    }), z(() => {
      u.value = {
        key: e.label,
        value: e.value
      };
    }), fe(() => {
      l(e.value);
    });
    const b = v(() => {
      if (c.value == "single")
        return r.value == e.value;
      if (c.value == "multiple") {
        let d = !1;
        try {
          r.value.forEach((w) => {
            if (d = w.value == e.value)
              throw new Error();
          });
        } catch {
        }
        return d;
      }
    });
    return () => a("li", {
      class: [_e(ke()), b.value ? "active" : ""],
      onClick: f
    }, [a("div", {
      class: "txt"
    }, [e.label])]);
  }
}), {
  n: L,
  classes: Pe
} = I("select-v2"), Ne = /* @__PURE__ */ M({
  name: "VISelectV2",
  emits: ["focus", "blur", "update:modelValue", "listChange", "handleSelected", "handleClear"],
  props: j,
  directives: {
    css: G
  },
  components: {
    "vi-select-v2-input": Be,
    "vi-select-v2-drop-down": Me,
    "vi-scroll-bar": De,
    "vi-select-v2-tag": Oe,
    "vi-select-v2-svg-icon": k,
    "vi-select-v2-option": X
  },
  setup(e, n) {
    var J;
    const s = "onUpdate:modelValue" in (((J = me()) == null ? void 0 : J.vnode.props) || {}), c = () => "xxxxxxxx".replace(/[xy]/g, function(o) {
      var g = 0 | 16 * Math.random(), m = o == "x" ? g : 8 | 3 & g;
      return m.toString(16);
    }), t = B(), u = B(), p = B(), l = P({
      uuid: c(),
      dropDownVisible: !1,
      dialogVisible: !1,
      softFocus: !1,
      currentSelectLabel: "",
      OptionList: {},
      list: [],
      __inputPlaceholder: "",
      searchLabel: "",
      searchValue: ""
    }), f = "M290.816 774.144h167.936c12.288 0 20.48 8.192 20.48 20.48s-8.192 20.48-20.48 20.48h-219.136c-12.288 0-20.48-8.192-20.48-20.48v-2.048-206.848c0-12.288 8.192-20.48 20.48-20.48s20.48 8.192 20.48 20.48v163.84l210.944-198.656c8.192-8.192 20.48-8.192 28.672 0s8.192 20.48 0 28.672l-208.896 194.56z m462.848-524.288h-167.936c-12.288 0-20.48-8.192-20.48-20.48s8.192-20.48 20.48-20.48h219.136c12.288 0 20.48 8.192 20.48 20.48v208.896c0 12.288-8.192 20.48-20.48 20.48s-20.48-8.192-20.48-20.48v-163.84l-210.944 198.656c-8.192 8.192-20.48 8.192-28.672 0s-8.192-20.48 0-28.672l208.896-194.56z m188.416 323.584c0 12.288-8.192 20.48-20.48 20.48s-20.48-8.192-20.48-20.48v-389.12c0-34.816-26.624-61.44-61.44-61.44h-655.36c-34.816 0-61.44 26.624-61.44 61.44v655.36c0 34.816 26.624 61.44 61.44 61.44h655.36c34.816 0 61.44-26.624 61.44-61.44v-94.208c0-12.288 8.192-20.48 20.48-20.48s20.48 8.192 20.48 20.48v94.208c0 57.344-45.056 102.4-102.4 102.4h-655.36c-57.344 0-102.4-45.056-102.4-102.4v-655.36c0-57.344 45.056-102.4 102.4-102.4h655.36c57.344 0 102.4 45.056 102.4 102.4v389.12z", b = "M955.069071 864.311021 740.015134 649.258107c-3.752464-3.751441-8.841366-5.860475-14.149255-5.860475-5.306866 0-10.395768 2.108011-14.149255 5.860475l-16.692171 16.692171-38.34226-38.34226c53.03796-59.810201 85.298711-138.442072 85.298711-224.478588 0-186.774871-151.952784-338.727655-338.727655-338.727655S64.527642 216.35456 64.527642 403.12943c0 186.775894 151.952784 338.728678 338.727655 338.728678 86.36909 0 165.276231-32.510438 225.170343-85.913718l38.303374 38.303374-17.34504 17.34504c-7.812943 7.813966-7.812943 20.48352 0 28.297486l215.051891 215.052914c3.753487 3.751441 8.841366 5.860475 14.149255 5.860475 5.306866 0 10.395768-2.108011 14.149255-5.860475l62.334697-62.334697C962.883037 884.794541 962.883037 872.124987 955.069071 864.311021zM104.546078 403.12943c0-164.709319 133.9999-298.709219 298.709219-298.709219s298.709219 133.9999 298.709219 298.709219S567.964616 701.839673 403.255297 701.839673 104.546078 567.838749 104.546078 403.12943zM878.585119 912.496463 691.829691 725.741036l34.036187-34.036187 186.755428 186.755428L878.585119 912.496463z", d = {
      popperHeight: "0",
      inputLineHeight: "0"
    }, w = function(o) {
      let g = !1;
      for (let m = 0; m < o.path.length; m++) {
        let y = o.path[m];
        if (y.classList && y.classList.value && y.getAttribute("class").includes("-select-v2") && y.dataset.id == l.uuid) {
          g = !0;
          break;
        }
      }
      g || V();
    };
    document.addEventListener("mousedown", w);
    const V = function() {
      l.dropDownVisible = !1;
    }, i = function(o) {
      return new Promise((g, m) => {
        g(H(() => window.getComputedStyle(o.value)));
      });
    }, C = function(o) {
      e.mode == "single" ? n.emit && n.emit("handleSelected", o) : H(() => {
        n.emit && n.emit("handleSelected", {
          currentSelected: o,
          currentSelects: JSON.parse(JSON.stringify(e.modelValue))
        });
      });
    }, S = function(o) {
      delete l.OptionList[o];
    }, R = function(o) {
      if (o == "co1")
        return "";
      if (o == "auto" || o == "co2" || o == "co3" || o == "co4" || o == "co5" || o == "co6" || o == "co7")
        return "display:flex;flex-wrap: wrap;";
    }, $ = function(o) {
      l.dropDownVisible = !l.dropDownVisible;
    }, Z = function(o) {
    }, ee = function(o) {
    }, te = function(o) {
      l.dropDownVisible = !1, l.dialogVisible = !0;
    }, oe = function() {
      n.emit && n.emit("handleClear");
    }, le = function(o) {
      n.emit && n.emit("handleClear", o);
    }, ne = function(o) {
      let g = o.target.value, m = {};
      l.list.forEach((y) => y.label.includes(g) ? m[y.value] = y.label : ""), l.searchValue = m, l.searchLabel = g, H(() => {
        N.value;
      });
    };
    Q(() => e.list, () => {
      l.list = JSON.parse(JSON.stringify(e.list));
    }, {
      deep: !0,
      immediate: !0
    });
    const T = v({
      get() {
        return e.mode == "multiple" && (async () => {
          const {
            height: o
          } = await i(p);
          e.dynamicCss["input-line-height"] = o.replace("px", "") * 1, E.value = e.modelValue.length > 0 ? " " : e.placeholder, e.modelValue.length <= 1 && (e.dynamicCss["input-line-height"] = d.inputLineHeight);
        })(), e.modelValue;
      },
      set(o) {
        s && n.emit("update:modelValue", o);
      }
    }), ae = v({
      get() {
        return l.currentSelectLabel;
      },
      set(o) {
        l.currentSelectLabel = o;
      }
    }), N = v({
      get() {
        let o = Object.keys(l.OptionList).length;
        return o <= 5 && o > 0 ? l.searchValue || (e.search && o++, h.value["popper-height"] = h.value["popper-option-height"] * o + h.value["popper-padding"] * 2) : h.value["popper-height"] = d.popperHeight, l.OptionList;
      },
      set(o) {
        l.OptionList[o.value] = o.key;
      }
    }), ie = v({
      get() {
        return l.dropDownVisible;
      },
      set(o) {
        l.dropDownVisible = o;
      }
    }), E = v({
      get() {
        return l.__inputPlaceholder || e.placeholder;
      },
      set(o) {
        l.__inputPlaceholder = o;
      }
    }), ce = v(() => e.clearable), re = v(() => e.mode), h = v(() => {
      let o = Object.assign(j.dynamicCss.default(), e.dynamicCss);
      return d.popperHeight = o["popper-height"], d.inputLineHeight = o["input-line-height"], o;
    }), se = v(() => e.mode == "multiple"), ue = v(() => !!e.searchImg);
    be(O, {
      selectRef: t,
      currentSelect: T,
      currentSelectLabel: ae,
      mode: re,
      dynamicCss: h,
      dropDownVisible: ie,
      placeholder: E,
      cacheOptionList: N,
      clearable: ce,
      selectedFn: C,
      deleteOptionItem: S
    });
    const de = function(o) {
      return a(x("vi-select-v2-tag"), {
        tooltip: e.tooltip,
        label: o.label,
        value: o.value,
        height: h.value["tag-close-size"],
        width: h.value["tag-close-size"],
        onCloseClick: le
      }, null);
    }, pe = function() {
      return a(x("vi-select-v2-input"), {
        iconHeight: h.value["input-icon-width"],
        iconWidth: h.value["input-icon-width"],
        ref: u,
        active: l.dropDownVisible,
        placeholder: E.value,
        onClick: $,
        onFocus: Z,
        onBlur: ee,
        onClear: oe
      }, null);
    }, he = function() {
      return a(x("vi-select-v2-svg-icon"), {
        class: L("--showMore"),
        path: f,
        height: h.value["unfold-icon-height"],
        width: h.value["unfold-icon-width"],
        onClick: te
      }, null);
    }, ge = function() {
      return a("li", {
        class: L("-search")
      }, [ue.value ? a("img", {
        class: L("--search"),
        src: e.searchImg
      }, null) : a(x("vi-select-v2-svg-icon"), {
        class: L("--search"),
        path: b
      }, null), a("input", {
        value: l.searchLabel,
        class: L("-search__input"),
        placeholder: "请输入您要搜索的内容",
        onInput: ne
      }, null)]);
    }, ve = function() {
      return a(x("vi-select-v2-drop-down"), {
        active: l.dropDownVisible
      }, {
        default: () => [a(x("vi-scroll-bar"), {
          dynamicCss: h.value
        }, {
          default: () => {
            var o, g;
            return [a("ul", null, [e.search ? ge() : "", l.searchValue ? a("div", {
              style: R(e.itemLayout),
              class: e.itemLayout
            }, [Object.keys(l.searchValue).map((m, y) => a(x("vi-select-v2-option"), {
              key: m,
              value: m,
              label: Object.values(l.searchValue)[y]
            }, null))]) : a("div", {
              style: R(e.itemLayout),
              class: e.itemLayout
            }, [(g = (o = n.slots).default) == null ? void 0 : g.call(o)]), Object.keys(N.value).length <= 0 ? a("li", {
              class: L("-notData")
            }, [ye("暂无数据")]) : ""]), e.showMore ? he() : ""];
          }
        })]
      });
    };
    return () => we(a("div", {
      "data-id": l.uuid,
      class: [Pe(L())],
      ref: t
    }, [se.value ? a("div", {
      ref: p,
      class: L("-taglist"),
      onClick: $
    }, [T.value.map((o) => de(o))]) : "", pe(), ve()]), [[Se("css"), h.value || {}]]);
  }
}), ze = q(
  Ne,
  "select-v2"
), Re = q(
  X,
  "select-v2-option"
);
export {
  ze as SelectV2,
  Re as SelectV2Option
};
