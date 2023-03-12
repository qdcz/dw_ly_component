import { defineComponent as A, createVNode as a, inject as K, reactive as G, computed as p, resolveComponent as j, ref as H, onMounted as le, watchEffect as me, nextTick as J, watch as ye, onUnmounted as Be, getCurrentInstance as Se, provide as ge, withDirectives as Q, resolveDirective as ae, createTextVNode as Me, isVNode as it, openBlock as Ie, createElementBlock as Re, normalizeClass as Z, createElementVNode as se, vModelRadio as et, toDisplayString as tt, renderSlot as st, onBeforeMount as ut } from "vue";
const ee = (e, t) => (e.install = function(i) {
  if (e) {
    const r = e.name || e.__name;
    if (r || t) {
      const s = t ? `dw-${t}` : "dw-" + r.replace(/dw/gi, "").toLowerCase();
      i.component(s, e);
    } else
      console.error(e, t, !t);
  }
}, e), ct = (e) => Array.isArray(e);
function z(e) {
  const t = `vi-${e}`;
  return {
    n: (s) => s ? s.startsWith("-") ? `${t}${s}` : `${t}_${s}` : t,
    classes: (...s) => s.map((l) => {
      if (ct(l)) {
        const [d, v, n = null] = l;
        return d ? v : n;
      }
      return l;
    })
  };
}
const ue = Symbol("select-v2"), Ne = function(e, t) {
  for (let [i, r] of Object.entries(t.value))
    e.style.setProperty("--" + i, r);
}, te = {
  mounted(e, t) {
    Ne(e, t);
  },
  updated(e, t) {
    Ne(e, t);
  },
  install(e) {
    e.directive("Css", this);
  }
}, Te = {
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
  n: dt,
  classes: pt
} = z("select-v2-svg-icon"), ve = /* @__PURE__ */ A({
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
    const i = function(s) {
      t.emit("click", s);
    }, r = function() {
      return a("svg", {
        class: [pt(dt()), "icon"],
        height: e.height,
        width: e.width,
        viewBox: "0 0 1024 1024",
        xmlns: "http://www.w3.org/2000/svg",
        onClick: i
      }, [a("path", {
        fill: "currentColor",
        d: e.path
      }, null)]);
    };
    return () => r();
  }
}), {
  n: _e,
  classes: ht
} = z("select-v2-input"), mt = /* @__PURE__ */ A({
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
    "vi-select-v2-svg-icon": ve
  },
  setup(e, t) {
    const {
      currentSelect: i,
      clearable: r,
      cacheOptionList: s,
      mode: l
    } = K(ue), d = "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z", v = "M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z", n = G({
      isHover: !1
    }), S = function(C) {
      t.emit("click", C);
    }, b = function(C) {
      i.value = "", t.emit("clear"), C.stopPropagation();
    }, u = function(C) {
      t.emit("focus", C);
    }, w = function(C) {
      t.emit("blur", C);
    }, x = function(C) {
      n.isHover = !0, t.emit("mouseenter");
    }, f = function(C) {
      n.isHover = !1, t.emit("mouseleave");
    }, I = p(() => s.value[i.value]);
    return () => a("div", {
      class: [ht(_e(), e.active ? "active" : "")],
      onClick: S,
      onMouseenter: x,
      onMouseleave: f
    }, [a("input", {
      class: [_e("_inner")],
      placeholder: e.placeholder,
      onFocus: u,
      onBlur: w,
      value: I.value,
      readonly: !0
    }, null), n.isHover && i.value && r.value && l.value == "single" ? a(j("vi-select-v2-svg-icon"), {
      height: e.iconHeight,
      width: e.iconWidth,
      path: v,
      onClick: b
    }, null) : a(j("vi-select-v2-svg-icon"), {
      height: e.iconHeight,
      width: e.iconWidth,
      path: d,
      class: ["arrow", e.active ? "turnUp" : "turnDown"]
    }, null)]);
  }
}), {
  n: be,
  classes: $e
} = z("select-v2-dropdown"), gt = /* @__PURE__ */ A({
  name: "VISelectV2DropDown",
  emits: ["focus", "blur", "click"],
  props: ["active"],
  components: {
    "vi-svg-icon": ve
  },
  setup(e, t) {
    const {
      selectRef: i,
      mode: r,
      currentSelect: s
    } = K(ue), l = G({
      parentRect: {
        x: 0,
        y: 0
      },
      dropdownTop: "0"
    }), d = H(), v = H(), n = () => {
      J(() => {
        l.dropdownTop = i.value.clientHeight + 10 + "px";
      });
    };
    return le(() => n()), me(() => {
      let S = s.value;
      r.value == "multiple" && S && setTimeout(() => {
        n();
      }, 200);
    }), () => {
      var S, b;
      return a("div", {
        class: [be("-popper"), e.active ? "active" : ""],
        style: {
          top: l.dropdownTop
        }
      }, [a("div", {
        ref: d,
        class: [be("-arrow"), e.active ? "active" : ""]
      }, null), a("div", {
        ref: v,
        class: [$e(be(), e.active ? "active" : "")]
      }, [a("div", {
        class: [$e(be("_inner"))]
      }, [(b = (S = t.slots).default) == null ? void 0 : b.call(S)])])]);
    };
  }
}), {
  n: He,
  classes: vt
} = z("select-v2-tag"), ft = /* @__PURE__ */ A({
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
    "vi-svg-icon": ve
  },
  setup(e, t) {
    const {
      currentSelect: i
    } = K(ue), r = "M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z", s = function(l) {
      const d = JSON.parse(JSON.stringify(i.value));
      try {
        d.forEach((v, n) => {
          if (v.value == e.value)
            throw d.splice(n, 1), new Error();
        });
      } catch {
      }
      i.value = d, t.emit && t.emit("closeClick", {
        currentClose: {
          label: e.label,
          value: e.value
        },
        currentSelects: JSON.parse(JSON.stringify(d))
      }), l.stopPropagation();
    };
    return () => a("div", {
      class: [vt(He()), e.tooltip ? "useToolTip" : ""],
      "data-txt": e.label
    }, [a("span", {
      class: He("_span")
    }, [e.label]), a(j("vi-svg-icon"), {
      path: r,
      onClick: s,
      height: e.height + "px",
      width: e.width + "px"
    }, null)]);
  }
}), {
  n: xe,
  classes: bt
} = z("scroll-bar"), wt = /* @__PURE__ */ A({
  name: "VIScrollBar",
  emits: ["focus", "blur", "click"],
  props: ["dynamicCss"],
  directives: {
    css: te
  },
  setup(e, t) {
    const {
      cacheOptionList: i
    } = K(ue), r = H(), s = H(), l = G({
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
    }), d = function() {
      J(() => {
        const f = window.getComputedStyle(r.value.children[0]);
        l.realPadding = e.dynamicCss["popper-padding"] * 2, l.realHeight = f.height.replace("px", "") * 1, l.viewHeight = e.dynamicCss["popper-height"] * 1 - l.realPadding, l.maxScrollBoxRange = l.realHeight - l.viewHeight, l.proportion = Number((l.viewHeight / l.realHeight).toFixed(1)), l.scrollBarHeight = l.viewHeight * l.proportion, l.maxScrollBarRange = l.viewHeight - l.scrollBarHeight, l.scrollBarMovePropor = l.maxScrollBarRange / l.maxScrollBoxRange, l.scrollBoxMovePropor = l.maxScrollBoxRange / l.maxScrollBarRange;
      });
    };
    le(() => {
      d();
    }), ye(() => i.value, () => {
      d();
    }, {
      deep: !0,
      immediate: !1
    });
    const v = p(() => l.scrollBarHeight < l.realHeight), n = function(f) {
      const I = f.target.scrollTop;
      w(I);
    }, S = function(f) {
      document.addEventListener("mousedown", b), document.addEventListener("mousemove", u);
    }, b = function(f) {
      l.mouseMoving = !0, l.startY = f.clientY;
    }, u = function(f) {
      l.moveY = l.startY - f.clientY, x();
    };
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", u), document.removeEventListener("mousedown", b), l.startY = 0, l.moveY = 0, l.mouseMoving && (l.translateY = l._move), l.mouseMoving = !1;
    });
    const w = function(f) {
      l.mouseMoving || (l.translateY = l.scrollBarMovePropor * f, s.value.style.transform = `translateY(${l.translateY}px)`);
    }, x = function() {
      let f = 0;
      l.moveY < 0 ? f = l.translateY + Math.abs(l.moveY) : l.moveY >= 0 && (f = l.translateY - Math.abs(l.moveY)), f < 0 && (f = 0), f > l.maxScrollBarRange && (f = l.maxScrollBarRange), l._move = f, s.value.style.transform = `translateY(${f}px)`, r.value.scrollTop = Math.abs(l.scrollBoxMovePropor * f);
    };
    return () => {
      var f, I;
      return a("div", {
        class: [bt(xe())]
      }, [a("div", {
        class: xe("left"),
        ref: r,
        onScroll: n
      }, [(I = (f = t.slots).default) == null ? void 0 : I.call(f)]), v.value ? a("div", {
        ref: s,
        class: xe("right"),
        style: {
          height: l.scrollBarHeight + "px"
        },
        onMousedown: S
      }, null) : ""]);
    };
  }
}), {
  n: yt,
  classes: St
} = z("select-v2-option"), ot = /* @__PURE__ */ A({
  name: "VISelectV2Option",
  emits: ["click"],
  props: ["label", "value"],
  components: {
    "vi-svg-icon": ve
  },
  setup(e, t) {
    const {
      currentSelect: i,
      currentSelectLabel: r,
      mode: s,
      dropDownVisible: l,
      cacheOptionList: d,
      selectedFn: v,
      deleteOptionItem: n
    } = K(ue), S = function() {
      if (s.value == "single")
        i.value = e.value, r.value = e.label, l.value = !1;
      else if (s.value == "multiple") {
        const u = JSON.parse(JSON.stringify(i.value));
        let w = !1;
        try {
          u.forEach((x, f) => {
            if (x.value == e.value)
              throw u.splice(f, 1), w = !0, new Error();
          });
        } catch {
        }
        w || u.push({
          label: e.label,
          value: e.value
        }), i.value = u;
      }
      v({
        label: e.label,
        value: e.value
      });
    };
    me(() => {
      d.value = {
        key: e.label,
        value: e.value
      };
    }), le(() => {
      d.value = {
        key: e.label,
        value: e.value
      };
    }), Be(() => {
      n(e.value);
    });
    const b = p(() => {
      if (s.value == "single")
        return i.value == e.value;
      if (s.value == "multiple") {
        let u = !1;
        try {
          i.value.forEach((w) => {
            if (u = w.value == e.value)
              throw new Error();
          });
        } catch {
        }
        return u;
      }
    });
    return () => a("li", {
      class: [St(yt()), b.value ? "active" : ""],
      onClick: S
    }, [a("div", {
      class: "txt"
    }, [e.label])]);
  }
}), {
  n: re,
  classes: Ct
} = z("select-v2"), xt = /* @__PURE__ */ A({
  name: "VISelectV2",
  emits: ["focus", "blur", "update:modelValue", "handleSelected", "handleClear", "mouseenter", "mouseleave"],
  props: Te,
  directives: {
    css: te
  },
  components: {
    "vi-select-v2-input": mt,
    "vi-select-v2-drop-down": gt,
    "vi-scroll-bar": wt,
    "vi-select-v2-tag": ft,
    "vi-select-v2-svg-icon": ve,
    "vi-select-v2-option": ot
  },
  setup(e, t) {
    var de;
    const r = "onUpdate:modelValue" in (((de = Se()) == null ? void 0 : de.vnode.props) || {}), s = () => "xxxxxxxx".replace(/[xy]/g, function(o) {
      var h = 0 | 16 * Math.random(), V = o == "x" ? h : 8 | 3 & h;
      return V.toString(16);
    }), l = H(), d = H(), v = H(), n = G({
      uuid: s(),
      dropDownVisible: !1,
      dialogVisible: !1,
      softFocus: !1,
      currentSelectLabel: "",
      OptionList: {},
      list: [],
      __inputPlaceholder: "",
      searchLabel: "",
      searchValue: ""
    }), S = "M955.069071 864.311021 740.015134 649.258107c-3.752464-3.751441-8.841366-5.860475-14.149255-5.860475-5.306866 0-10.395768 2.108011-14.149255 5.860475l-16.692171 16.692171-38.34226-38.34226c53.03796-59.810201 85.298711-138.442072 85.298711-224.478588 0-186.774871-151.952784-338.727655-338.727655-338.727655S64.527642 216.35456 64.527642 403.12943c0 186.775894 151.952784 338.728678 338.727655 338.728678 86.36909 0 165.276231-32.510438 225.170343-85.913718l38.303374 38.303374-17.34504 17.34504c-7.812943 7.813966-7.812943 20.48352 0 28.297486l215.051891 215.052914c3.753487 3.751441 8.841366 5.860475 14.149255 5.860475 5.306866 0 10.395768-2.108011 14.149255-5.860475l62.334697-62.334697C962.883037 884.794541 962.883037 872.124987 955.069071 864.311021zM104.546078 403.12943c0-164.709319 133.9999-298.709219 298.709219-298.709219s298.709219 133.9999 298.709219 298.709219S567.964616 701.839673 403.255297 701.839673 104.546078 567.838749 104.546078 403.12943zM878.585119 912.496463 691.829691 725.741036l34.036187-34.036187 186.755428 186.755428L878.585119 912.496463z", b = {
      popperHeight: "0",
      inputLineHeight: "0"
    }, u = function(o) {
      let h = !1;
      const V = o.path || o.composedPath && o.composedPath();
      for (let $ = 0; $ < V.length; $++) {
        const E = V[$];
        if (E.classList && E.classList.value && E.getAttribute("class").includes("-select-v2") && E.dataset.id == n.uuid) {
          h = !0;
          break;
        }
      }
      h || w();
    };
    document.addEventListener("mousedown", u);
    const w = function() {
      n.dropDownVisible = !1, t.emit && t.emit("blur");
    }, x = function(o) {
      return new Promise((h, V) => {
        h(J(() => window.getComputedStyle(o.value)));
      });
    }, f = function(o) {
      e.mode == "single" ? t.emit && t.emit("handleSelected", o) : J(() => {
        t.emit && t.emit("handleSelected", {
          currentSelected: o,
          currentSelects: JSON.parse(JSON.stringify(e.modelValue))
        });
      });
    }, I = function(o) {
      delete n.OptionList[o];
    }, C = function(o) {
      if (o == "co1")
        return "";
      if (o == "auto" || o == "co2" || o == "co3" || o == "co4" || o == "co5" || o == "co6" || o == "co7")
        return "display:flex;flex-wrap: wrap;";
    }, F = function(o) {
      n.dropDownVisible = !n.dropDownVisible, t.emit && (n.dropDownVisible ? t.emit("focus") : t.emit("blur"));
    }, L = function(o) {
    }, O = function(o) {
    }, M = function() {
      t.emit && t.emit("handleClear");
    }, P = function() {
      t.emit && t.emit("mouseenter");
    }, _ = function() {
      t.emit && t.emit("mouseleave");
    }, R = function(o) {
      t.emit && t.emit("handleClear", o);
    }, B = function(o) {
      let h = o.target.value, V = {};
      n.list.forEach(($) => $.label.includes(h) ? V[$.value] = $.label : ""), n.searchValue = V, n.searchLabel = h, J(() => {
        y.value;
      });
    };
    ye(() => e.list, () => {
      n.list = JSON.parse(JSON.stringify(e.list));
    }, {
      deep: !0,
      immediate: !0
    });
    const Y = p({
      get() {
        return e.mode == "multiple" && (async () => {
          const {
            height: o
          } = await x(v);
          e.dynamicCss["input-line-height"] = o.replace("px", "") * 1, N.value = e.modelValue.length > 0 ? " " : e.placeholder, e.modelValue.length <= 1 && (e.dynamicCss["input-line-height"] = b.inputLineHeight);
        })(), e.modelValue;
      },
      set(o) {
        r && t.emit("update:modelValue", o);
      }
    }), X = p({
      get() {
        return n.currentSelectLabel;
      },
      set(o) {
        n.currentSelectLabel = o;
      }
    }), y = p({
      get() {
        let o = Object.keys(n.OptionList).length;
        return o <= 5 && o > 0 ? n.searchValue || (e.search && o++, g.value["popper-height"] = g.value["popper-option-height"] * o + g.value["popper-padding"] * 2) : g.value["popper-height"] = b.popperHeight, n.OptionList;
      },
      set(o) {
        n.OptionList[o.value] = o.key;
      }
    }), k = p({
      get() {
        return n.dropDownVisible;
      },
      set(o) {
        n.dropDownVisible = o;
      }
    }), N = p({
      get() {
        return n.__inputPlaceholder || e.placeholder;
      },
      set(o) {
        n.__inputPlaceholder = o;
      }
    }), m = p(() => e.clearable), c = p(() => e.mode), g = p(() => {
      let o = Object.assign(Te.dynamicCss.default(), e.dynamicCss);
      return b.popperHeight = o["popper-height"], b.inputLineHeight = o["input-line-height"], o;
    }), T = p(() => e.mode == "multiple"), W = p(() => !!e.searchImg);
    ge(ue, {
      selectRef: l,
      currentSelect: Y,
      currentSelectLabel: X,
      mode: c,
      dynamicCss: g,
      dropDownVisible: k,
      placeholder: N,
      cacheOptionList: y,
      clearable: m,
      selectedFn: f,
      deleteOptionItem: I
    });
    const q = function(o) {
      return a(j("vi-select-v2-tag"), {
        tooltip: e.tooltip,
        label: o.label,
        value: o.value,
        height: g.value["tag-close-size"],
        width: g.value["tag-close-size"],
        onCloseClick: R
      }, null);
    }, U = function() {
      return a(j("vi-select-v2-input"), {
        iconHeight: g.value["input-icon-width"],
        iconWidth: g.value["input-icon-width"],
        ref: d,
        active: n.dropDownVisible,
        placeholder: N.value,
        onClick: F,
        onFocus: L,
        onBlur: O,
        onClear: M,
        onMouseenter: P,
        onMouseleave: _
      }, null);
    }, D = function() {
      return a("li", {
        class: re("-search")
      }, [W.value ? a("img", {
        class: re("--search"),
        src: e.searchImg
      }, null) : a(j("vi-select-v2-svg-icon"), {
        class: re("--search"),
        path: S
      }, null), a("input", {
        value: n.searchLabel,
        class: re("-search__input"),
        placeholder: "请输入您要搜索的内容",
        onInput: B
      }, null)]);
    }, oe = function() {
      return a(j("vi-select-v2-drop-down"), {
        active: n.dropDownVisible
      }, {
        default: () => [a(j("vi-scroll-bar"), {
          dynamicCss: g.value
        }, {
          default: () => {
            var o, h;
            return [a("ul", null, [e.search ? D() : "", n.searchValue ? a("div", {
              style: C(e.itemLayout),
              class: e.itemLayout
            }, [Object.keys(n.searchValue).map((V, $) => a(j("vi-select-v2-option"), {
              key: V,
              value: V,
              label: Object.values(n.searchValue)[$]
            }, null))]) : a("div", {
              style: C(e.itemLayout),
              class: e.itemLayout
            }, [(h = (o = t.slots).default) == null ? void 0 : h.call(o)]), Object.keys(y.value).length <= 0 ? a("li", {
              class: re("-notData")
            }, [Me("暂无数据")]) : ""])];
          }
        })]
      });
    };
    return () => Q(a("div", {
      "data-id": n.uuid,
      class: [Ct(re())],
      ref: l
    }, [T.value ? a("div", {
      ref: v,
      class: re("-taglist"),
      onClick: F
    }, [Y.value.map((o) => q(o))]) : "", U(), oe()]), [[ae("css"), g.value || {}]]);
  }
}), kt = ee(xt, "select-v2"), Mt = ee(ot, "select-v2-option"), ze = {
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
}, ce = Symbol("pagination"), {
  n: Vt,
  classes: Bt
} = z("pagination-prev"), Oe = /* @__PURE__ */ A({
  name: "VIPaginationPrev",
  emits: ["click"],
  setup(e, t) {
    let i = K(ce);
    const r = p(() => i.currentPage.value <= 1), s = function(l) {
      r.value || t.emit("click", l);
    };
    return () => a("button", {
      type: "button",
      class: [Bt(Vt()), r.value ? "disabled" : ""],
      onClick: s.bind(this)
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
  n: It,
  classes: Rt
} = z("pagination-next"), Ae = /* @__PURE__ */ A({
  name: "VIPaginationNext",
  emits: ["click"],
  setup(e, t) {
    let i = K(ce);
    const r = p(() => i.currentPage.value >= i.pageCount.value), s = function(l) {
      r.value || t.emit("click", l);
    };
    return () => a("button", {
      type: "button",
      class: [Rt(It()), r.value ? "disabled" : ""],
      onClick: s.bind(this)
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
  n: ne
} = z("pagination-pager"), Ye = /* @__PURE__ */ A({
  name: "VIPaginationPager",
  emits: ["click"],
  setup(e, t) {
    let {
      currentPage: i,
      pagerCount: r,
      pageCount: s
    } = K(ce);
    const l = G({
      quickPrevBtnIsHover: !1,
      quickNextBtnIsHover: !1
    }), d = {
      quickLeftArrow: "M62.56 511.904L485.952 88.256a48.64 48.64 0 0 1 68.736 68.736L199.616 512.064l356.8 356.8A48.64 48.64 0 0 1 487.68 937.6l-39.744-39.744 0.256-0.256L62.528 511.936z m388.8 0L874.752 88.256a48.64 48.64 0 0 1 68.736 68.736L588.416 512.064l356.8 356.8A48.64 48.64 0 0 1 876.48 937.6l-39.776-39.744 0.288-0.256-385.664-385.664z",
      quickRightArrow: 'M948.064 513.056L536.064 925.312a47.296 47.296 0 0 1-66.88-66.88l345.504-345.504L467.52 165.76a47.296 47.296 0 0 1 66.88-66.88l38.688 38.688-0.256 0.256 375.264 375.264m-378.336-0.032L157.76 925.312a47.296 47.296 0 0 1-66.88-66.88l345.472-345.504L89.184 165.76a47.296 47.296 0 0 1 66.88-66.88l38.688 38.688-0.256 0.256 375.264 375.264"',
      ellipsis: "M110.336 572.330667a85.333333 85.333333 0 1 0 120.661333-120.661334 85.333333 85.333333 0 0 0-120.661333 120.661334zM451.669333 572.330667a85.333333 85.333333 0 1 0 120.661334-120.661334 85.333333 85.333333 0 0 0-120.661334 120.661334zM793.002667 572.330667a85.333333 85.333333 0 1 0 120.661333-120.661334 85.333333 85.333333 0 0 0-120.661333 120.661334z"
    }, v = p(() => Math.floor(i.value / r.value) * r.value), n = p(() => r.value < s.value ? r.value : s.value - 1), S = p(() => b.value && u.value ? i.value : !1), b = p(() => s.value <= r.value ? 0 : i.value >= r.value - 2), u = p(() => s.value <= r.value ? 0 : i.value < s.value - r.value + 4), w = p(() => s.value > 1), x = function(M) {
      t.emit("click", M);
    }, f = (M) => l.quickPrevBtnIsHover = !0, I = (M) => l.quickPrevBtnIsHover = !1, C = (M) => l.quickNextBtnIsHover = !0, F = (M) => l.quickNextBtnIsHover = !1, L = (M) => i.value = i.value - r.value + 2, O = (M) => i.value = i.value + r.value - 2;
    return () => a("ul", {
      class: [ne()]
    }, [a("li", {
      class: [ne("_btn"), i.value == 1 ? "active" : ""],
      onClick: x.bind(this, 1)
    }, [1]), b.value ? a("li", {
      class: [ne("_btn"), "quickPrev"],
      onMouseenter: f,
      onMouseleave: I,
      onClick: L
    }, [a("svg", {
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      name: l.quickPrevBtnIsHover ? "quickLeftArrow" : "ellipsis",
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12"
    }, [a("path", {
      fill: "currentColor",
      d: l.quickPrevBtnIsHover ? d.quickLeftArrow : d.ellipsis
    }, null)])]) : a("div", null, null), new Array(n.value).fill(S.value ? S.value : 0).map((M, P) => {
      let _ = i.value, R = Math.ceil((r.value - 2) / 2), B = P > 0 && P < r.value - 1, Y = v.value;
      if (M > 0) {
        if (B)
          return M = P <= R ? M - R + P : M + P - R, a("li", {
            class: [ne("_btn"), _ == M ? "active" : ""],
            onClick: x.bind(this, M)
          }, [M]);
      } else if (B)
        return _ < r.value - 2 ? a("li", {
          class: [ne("_btn"), _ == Y + P + 1 ? "active" : ""],
          onClick: x.bind(this, Y + P + 1)
        }, [Y + P + 1]) : a("li", {
          class: [ne("_btn"), _ == s.value - r.value + 1 + P ? "active" : ""],
          onClick: x.bind(this, s.value - r.value + 1 + P)
        }, [s.value - r.value + 1 + P]);
    }), u.value > 0 ? a("li", {
      class: [ne("_btn"), "quickNext"],
      onMouseenter: C,
      onMouseleave: F,
      onClick: O
    }, [a("svg", {
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      name: l.quickNextBtnIsHover ? "quickRightArrow" : "ellipsis",
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12"
    }, [a("path", {
      fill: "currentColor",
      d: l.quickNextBtnIsHover ? d.quickRightArrow : d.ellipsis
    }, null)])]) : a("div", null, null), w.value ? a("li", {
      class: [ne("_btn"), i.value == s.value ? "active" : ""],
      onClick: x.bind(this, s.value)
    }, [s.value]) : ""]);
  }
}), {
  n: Ee,
  classes: Lt
} = z("pagination-jump"), De = /* @__PURE__ */ A({
  name: "VIPaginationJump",
  emits: ["jump-page"],
  setup(e, t) {
    let i = K(ce);
    const r = G({
      num: ""
    }), s = H(), l = function(v) {
      (() => r.num = Math.random() * 1e6)();
      const S = Number(v.target.value);
      S <= 0 ? r.num = 1 : S > i.pageCount.value ? r.num = i.pageCount.value : r.num = S;
    }, d = function(v) {
      v.key == "Enter" && (s.value.blur(), J(() => t.emit("jump-page", r.num || 1)));
    };
    return () => a("div", {
      class: [Lt(Ee())]
    }, [a("span", null, [i.jumpLabel.value]), a("input", {
      ref: s,
      class: [Ee("_input")],
      value: r.num,
      type: "number",
      min: "1",
      tabindex: "0",
      autocomplete: "off",
      onChange: l.bind(this),
      onKeydown: d.bind(this)
    }, null)]);
  }
}), {
  n: ke,
  classes: Pt
} = z("pagination-total"), je = /* @__PURE__ */ A({
  name: "VIPaginationTotal",
  emits: ["click"],
  setup() {
    let {
      total: e,
      totalLabel: t
    } = K(ce);
    return () => a("div", {
      class: [Pt(ke())]
    }, [a("span", {
      class: [ke("_label")]
    }, [t.value]), a("span", {
      class: [ke("_value")]
    }, [e.value])]);
  }
});
function Nt(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !it(e);
}
const {
  n: Fe,
  classes: Tt
} = z("pagination"), _t = /* @__PURE__ */ A({
  name: "VIPagination",
  props: ze,
  directives: {
    css: te
  },
  emits: ["size-change", "update:modelValue", "current-change", "update:total"],
  components: {
    prev: Oe,
    pager: Ye,
    next: Ae,
    jump: De,
    total: je,
    "dw-select-v2": kt,
    "dw-select-v2-option": Mt
  },
  setup(e, t) {
    var k, N;
    const i = (m) => typeof m != "number", r = (m) => m instanceof Array, s = ((N = (k = Se()) == null ? void 0 : k.vnode) == null ? void 0 : N.props) || {}, l = "onUpdate:sizeChange" in s || "onUpdate:size-change" in s || "onSizeChange" in s, d = "onUpdate:currentPage" in s || "onUpdate:current-page" in s || "onUpdate:modelValue" in s || "onCurrentChange" in s, v = "update:total" in s;
    let n = 10, S = 1, b = 100;
    const u = G({
      select_curSelect: "",
      select_list: [],
      select_dynamicCss: {}
    }), w = function() {
      r(e.pageSize) && (u.select_list = e.pageSize.map((m) => ({
        value: m,
        label: m + "/page"
      })), u.select_curSelect = u.select_list[0].value);
    }, x = p(() => {
      let m = 0;
      return i(e.total) ? console.warn("total属性不合格") : m = Math.max(1, Math.ceil(e.total / I.value)), m;
    }), f = p(() => {
      let m = 0;
      return i(e.total) || (i(e.pagerCount) || (m = x.value > 7 ? Math.max(7, e.pagerCount % 2 == 0 ? e.pagerCount - 1 : e.pagerCount) : x.value), m > 29 && (m = 29)), m;
    }), I = p({
      get() {
        let m = i(e.pageSize) ? n : e.pageSize > 5 ? e.pageSize : 5;
        return m = r(e.pageSize) ? u.select_curSelect : m, m;
      },
      set(m) {
        i(e.pageSize) && (n = m), l && (e.modelValue > Math.ceil(e.total / m) && (C.value = Math.ceil(e.total / m)), J(() => {
          t.emit("size-change", {
            pageSize: m,
            currentPage: e.modelValue
          });
        }));
      }
    }), C = p({
      get() {
        return i(e.modelValue) ? S : e.modelValue;
      },
      set(m) {
        let c = m;
        m < 1 ? c = 1 : m > x.value && (c = x.value), d && (t.emit("update:modelValue", c), t.emit("current-change", c));
      }
    }), F = p({
      get() {
        return i(e.total) ? b : e.total;
      },
      set(m) {
        let c = m;
        m < 0 && (c = 0), b = c, v && t.emit("update:total", c);
      }
    }), L = p(() => e.totalLabel), O = p(() => e.jumpLabel), M = p(() => Object.assign(ze.dynamicCss.default(), e.dynamicCss)), P = p(() => {
      let m = {};
      for (let c in M.value)
        c.includes("select-v2-") && (m[c.replace("select-v2-", "")] = M.value[c]);
      return m;
    }), _ = p(() => {
      let m = e.layout;
      const c = {
        total: !1,
        size: !1,
        prev: !1,
        next: !1,
        pager: !1,
        jump: !1
      };
      for (let g in c)
        c[g] = m.replace(/\s+/g, "").split(",").findIndex((T) => T == g) != -1;
      return c;
    });
    ge(ce, {
      pageCount: x,
      pagerCount: f,
      pageSize: I,
      currentPage: C,
      total: F,
      totalLabel: L,
      jumpLabel: O
    }), le(() => {
      w();
    }), ye(() => e.pageSize, () => {
      w();
    }, {
      deep: !0
    });
    const R = (m) => C.value = C.value - 1, B = (m) => C.value = C.value + 1, Y = (m) => C.value = m, X = (m) => C.value = m, y = function(m) {
      I.value = m.value;
    };
    return () => {
      let m;
      return Q(a("div", {
        class: [Tt(Fe()), e.background ? "bgbox" : ""]
      }, [_.value.total ? a(je, null, null) : "", _.value.size && r(e.pageSize) ? a(j("dw-select-v2"), {
        modelValue: u.select_curSelect,
        "onUpdate:modelValue": (c) => u.select_curSelect = c,
        dynamicCss: P.value,
        onHandleSelected: y,
        class: Fe("-select")
      }, Nt(m = u.select_list.map((c) => a(j("dw-select-v2-option"), {
        key: c.value,
        label: c.label,
        value: c.value
      }, null))) ? m : {
        default: () => [m]
      }) : "", _.value.prev ? a(Oe, {
        disabled: !1,
        onClick: R
      }, null) : "", _.value.pager ? a(Ye, {
        onClick: Y
      }, null) : "", _.value.next ? a(Ae, {
        disabled: !1,
        onClick: B
      }, null) : "", _.value.jump ? a(De, {
        onJumpPage: X
      }, null) : ""]), [[ae("css"), M.value || {}]]);
    };
  }
}), Co = ee(_t, "pagination"), Ve = {
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
    })
  }
}, Le = Symbol("radio"), { n: $t, classes: Ht } = z("radio"), zt = A({
  name: "VIRadio",
  props: Ve,
  emits: ["click", "update:modelValue", "change"],
  setup(e, t) {
    let i = K(Le, void 0);
    const r = (v) => {
      l.value || (i ? i.changeModelValue(v) : t.emit("update:modelValue", "on"));
    }, s = p({
      get() {
        return i ? e.value == i.currentSelect.value : e.modelValue;
      },
      set() {
      }
    }), l = p({
      get() {
        return !!e.disabled;
      },
      set() {
      }
    }), d = p({
      get() {
        return i ? i.currentSelect.value : e.modelValue;
      },
      set(v) {
        t.emit && t.emit("update:modelValue", v);
      }
    });
    return {
      n: $t,
      classes: Ht,
      handleClick: r,
      IsChecked: s,
      IsDisable: l,
      modelValueBridge: d
    };
  }
}), Pe = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [r, s] of t)
    i[r] = s;
  return i;
}, Ot = ["value", "checked", "disabled"];
function At(e, t, i, r, s, l) {
  return Ie(), Re("div", {
    class: Z([e.classes(e.n()), e.IsChecked ? e.n("active") : "", e.border ? e.n("border") : ""]),
    onClick: t[1] || (t[1] = (d) => e.handleClick(e.value))
  }, [
    se("div", {
      class: Z([e.classes(e.n("_input__wrapper")), e.IsDisable ? "is-disabled" : ""])
    }, [
      Q(se("input", {
        class: Z([e.classes(e.n("_input"))]),
        type: "radio",
        ref: "radioRef",
        value: e.value,
        checked: e.IsChecked,
        disabled: e.IsDisable,
        "onUpdate:modelValue": t[0] || (t[0] = (d) => e.modelValueBridge = d)
      }, null, 10, Ot), [
        [et, e.modelValueBridge]
      ]),
      se("div", {
        class: Z([e.classes(e.n("_circle"))])
      }, null, 2)
    ], 2),
    se("label", {
      class: Z(e.classes(e.n("_label"), e.IsDisable ? "is-disabled" : ""))
    }, tt(e.label), 3)
  ], 2);
}
const Yt = /* @__PURE__ */ Pe(zt, [["render", At]]), Et = {
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
}, { n: Dt, classes: jt } = z("radio-button"), Ft = A({
  name: "VIRadioButton",
  props: Et,
  emits: ["click", "update:modelValue", "change"],
  setup(e, t) {
    let i = K(Le);
    const r = H(null), s = function(n) {
      d.value || (i ? i.changeModelValue(e.value) : t.emit("update:modelValue", "on"));
    }, l = p({
      get() {
        return i ? e.value == i.currentSelect.value : e.modelValue;
      },
      set() {
      }
    }), d = p({
      get() {
        return !!e.disabled;
      },
      set() {
      }
    }), v = p({
      get() {
        return i ? i.currentSelect.value : e.modelValue;
      },
      set(n) {
        t.emit && t.emit("update:modelValue", n);
      }
    });
    return {
      n: Dt,
      classes: jt,
      handleClick: s,
      IsChecked: l,
      IsDisable: d,
      refRadioButton: r,
      modelValue: v
    };
  }
}), Wt = ["value", "checked", "disabled"];
function Xt(e, t, i, r, s, l) {
  return Ie(), Re("div", {
    ref: "refRadioButton",
    class: Z([e.classes(e.n()), e.IsChecked ? e.n("active") : "", e.border ? e.n("border") : ""]),
    onClick: t[1] || (t[1] = (...d) => e.handleClick && e.handleClick(...d))
  }, [
    Q(se("input", {
      class: Z([e.classes(e.n("_input"))]),
      type: "radio",
      ref: "radioRef",
      value: e.value,
      checked: e.IsChecked,
      disabled: e.IsDisable,
      "onUpdate:modelValue": t[0] || (t[0] = (d) => e.modelValue = d)
    }, null, 10, Wt), [
      [et, e.modelValue]
    ]),
    se("label", {
      class: Z(e.classes(e.n("_label"), e.IsDisable ? "is-disabled" : ""))
    }, tt(e.label), 3)
  ], 2);
}
const qt = /* @__PURE__ */ Pe(Ft, [["render", Xt]]), { n: Ut, classes: Jt } = z("radio-group"), Kt = A({
  name: "VIRadioGroup",
  props: Ve,
  emits: ["click", "update:modelValue", "change"],
  directives: { css: te },
  setup(e, t) {
    const i = (l = e.modelValue) => {
      t.emit("update:modelValue", l), J(() => t.emit("change", l));
    }, r = p({
      get() {
        return e.modelValue;
      },
      set(l) {
        t.emit && t.emit("update:modelValue", l);
      }
    }), s = p(() => Object.assign(Ve.dynamicCss.default(), e.dynamicCss));
    return ge(Le, {
      currentSelect: r,
      changeModelValue: i
    }), {
      n: Ut,
      classes: Jt,
      dynamicCssBridge: s
    };
  }
});
function Gt(e, t, i, r, s, l) {
  const d = ae("css");
  return Q((Ie(), Re("div", {
    class: Z(e.classes(e.n()))
  }, [
    st(e.$slots, "default")
  ], 2)), [
    [d, e.dynamicCssBridge || {}]
  ]);
}
const Qt = /* @__PURE__ */ Pe(Kt, [["render", Gt]]), xo = ee(Yt, "radio"), ko = ee(qt, "radio-button"), Mo = ee(Qt, "radio-group"), We = {
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
}, nt = Symbol("time-picker"), {
  n: Zt,
  classes: eo
} = z("input-svg-icon"), to = /* @__PURE__ */ A({
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
    const i = function(r) {
      t.emit("click", r);
    };
    return () => a("svg", {
      class: [eo(Zt()), "icon"],
      height: e.height,
      width: e.width,
      viewBox: "0 0 1024 1024",
      xmlns: "http://www.w3.org/2000/svg",
      onClick: i
    }, [a("path", {
      fill: "currentColor",
      d: e.path
    }, null)]);
  }
}), Xe = {
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
  n: qe,
  classes: oo
} = z("timePickerInput"), no = /* @__PURE__ */ A({
  name: "VITimePickerInput",
  emits: ["focus", "blur", "click", "update:modelValue", "close"],
  directives: {
    css: te
  },
  props: Xe,
  components: {
    "vi-input-svg-icon": to
  },
  setup(e, t) {
    const i = "M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z", r = G({
      softFocus: !1,
      isHover: !1
    }), s = function(L) {
      C.value || t.emit("click", L);
    }, l = function(L) {
      C.value || (t.emit("update:modelValue", L.target.value), t.emit("close"), L.stopPropagation());
    }, d = function(L) {
      C.value || (t.emit("focus", L), r.softFocus = !0);
    }, v = function(L) {
      C.value || (t.emit("blur", L), r.softFocus = !1);
    }, n = function(L) {
      C.value || (r.isHover = !0);
    }, S = function(L) {
      C.value || (r.isHover = !1);
    }, b = function(L) {
      C.value || t.emit("update:modelValue", L.target.value);
    }, u = function(L) {
      C.value || t.emit("update:modelValue", L.target.value);
    }, w = p(() => Object.assign(Xe.dynamicCss.default(), e.dynamicCss)), x = p(() => typeof e.readonly == "string" ? !0 : e.readonly), f = p(() => typeof e.clearable == "string" ? !0 : e.clearable), I = p(() => typeof e.showPassword == "string" ? !0 : e.showPassword), C = p(() => typeof e.disabled == "string" ? !0 : e.disabled), F = p(() => r.softFocus ? "active" : "");
    return () => Q(a("div", {
      class: [oo(qe()), F.value, C.value ? "disabled" : ""],
      onClick: s,
      onMouseenter: n,
      onMouseleave: S
    }, [a("input", {
      class: [qe("_inner")],
      placeholder: e.placeholder,
      onFocus: d,
      onBlur: v,
      readonly: x.value || C.value,
      value: e.modelValue,
      onChange: b,
      onInput: u,
      type: I.value ? "password" : "text"
    }, null), e.modelValue && f.value && r.isHover ? a(j("vi-input-svg-icon"), {
      class: "icon",
      height: w.value["input-icon-width"],
      width: w.value["input-icon-width"],
      path: i,
      onClick: l
    }, null) : ""]), [[ae("css"), w.value || {}]]);
  }
}), {
  n: we,
  classes: Ue
} = z("popper"), lo = /* @__PURE__ */ A({
  name: "VITimePickerPopper",
  emits: ["focus", "blur", "click"],
  props: ["active"],
  setup(e, t) {
    let {
      timePickerRef: i
    } = K(nt);
    const r = G({
      parentRect: {
        x: 0,
        y: 0,
        height: 0,
        width: 0
      },
      dropdownTop: "0"
    }), s = H(null), l = H(null), d = () => {
      J(() => {
        r.parentRect = i.value.getBoundingClientRect(), r.dropdownTop = r.parentRect.height + 10 + "px";
      });
    };
    return le(() => d()), () => {
      var v, n;
      return a("div", {
        class: [we(""), e.active ? "active" : ""],
        style: {
          top: r.dropdownTop
        }
      }, [a("div", {
        ref: s,
        class: [we("_arrow")]
      }, [e.active]), a("div", {
        ref: l,
        class: [Ue(we("_content"))]
      }, [a("div", {
        class: [Ue(we("_inner"))]
      }, [(n = (v = t.slots).default) == null ? void 0 : n.call(v)])])]);
    };
  }
}), Je = {
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
var he = /* @__PURE__ */ ((e) => (e.HORIZONTAL = "horizontal", e.VERTICAL = "vertical", e))(he || {});
const ao = {
  type: {
    type: [String || he],
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
}, lt = Symbol("scroll-bar"), {
  n: ro
} = z("scroll-bar__thumb"), io = /* @__PURE__ */ A({
  name: "ScrollBar",
  emits: ["update:height", "update:width"],
  props: ao,
  setup(e, t) {
    const {
      thumbRatioY: i,
      thumbRatioX: r,
      thumbRatioYMaxRange: s,
      thumbRatioXMaxRange: l,
      wrapperInnerMaxiMoveProportionY: d,
      wrapperInnerMaxiMoveProportionX: v,
      scrollBarRef: n
    } = K(lt), S = H(), b = G({
      mouseMoving: !1
    });
    let u = 0, w = 0, x = 0, f = 0, I = 0, C = 0;
    const F = p({
      get() {
        return e.height;
      },
      set(R) {
        t.emit && t.emit("update:height", R);
      }
    }), L = p({
      get() {
        return e.width;
      },
      set(R) {
        t.emit && t.emit("update:width", R);
      }
    }), O = function(R) {
      if (R == "vertical") {
        let B = 0;
        const Y = I;
        B = x < 0 ? Y + Math.abs(x) : Y - Math.abs(x), B < 0 && (B = 0), B > s.value && (B = s.value), n.value.scrollTop = Math.abs(d.value * B);
      } else if (R == "horizontal") {
        let B = 0;
        const Y = C;
        B = f < 0 ? Y + Math.abs(f) : Y - Math.abs(f), B < 0 && (B = 0), B > l.value && (B = l.value), n.value.scrollLeft = Math.abs(v.value * B);
      }
    }, M = function(R) {
      b.mouseMoving = !0, I = Number(i.value.slice(11, -3)), C = Number(r.value.slice(11, -3)), u = Number(R.clientY), w = Number(R.clientX);
    }, P = function(R) {
      x = u - R.clientY, f = w - R.clientX, O(e.type);
    };
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", P), document.removeEventListener("mousedown", M), u = 0, w = 0, x = 0, f = 0, I = 0, C = 0, b.mouseMoving = !1;
    });
    const _ = (R) => {
      document.addEventListener("mousedown", M), document.addEventListener("mousemove", P);
    };
    return () => a("div", {
      class: ro(),
      ref: S,
      style: {
        height: F.value,
        width: L.value,
        transform: e.type == "vertical" ? e.ratioY : e.ratioX
      },
      onMousedown: _
    }, null);
  }
}), {
  n: pe
} = z("scroll-bar"), so = /* @__PURE__ */ A({
  name: "ScrollBar",
  emits: ["update:width", "scroll"],
  directives: {
    css: te
  },
  props: Je,
  components: {
    "scroll-bar-thumb": io
  },
  setup(e, t) {
    let r = null;
    const s = (c) => {
      X();
    }, l = H(), d = H(), v = H(), n = G({
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
    let S = H(!1);
    ye(() => e.noResize, (c) => {
      c ? r == null || r.disconnect() : (r = new MutationObserver(s), J(() => {
        r.observe(d.value, {
          attributes: !0,
          childList: !0,
          subtree: !0
        });
      }));
    }, {
      immediate: !0
    });
    const b = p(() => Object.assign(Je.dynamicCss.default(), e.dynamicCss)), u = p(() => e.height), w = p({
      get() {
        return n.cacheContainerWidth;
      },
      set(c) {
        n.cacheContainerWidth = c;
      }
    }), x = p({
      get() {
        return n.thumbHeight;
      },
      set(c) {
        n.thumbHeight = c;
      }
    }), f = p({
      get() {
        return n.thumbWidth;
      },
      set(c) {
        n.thumbWidth = c;
      }
    }), I = p({
      get() {
        return n.thumbRatioX;
      },
      set(c) {
        n.thumbRatioX = c;
      }
    }), C = p({
      get() {
        return n.thumbRatioY;
      },
      set(c) {
        n.thumbRatioY = c;
      }
    }), F = p(() => n.thumbRatioYMaxRange), L = p(() => n.thumbRatioXMaxRange), O = p(() => n.wrapperInnerMaxiMoveProportionY), M = p(() => n.wrapperInnerMaxiMoveProportionX), P = (c) => {
      n.thumbRatioY = `translateY(${String(n.thumbRatioYProportion * c) + "px"})`;
    }, _ = (c) => {
      n.thumbRatioX = `translateX(${String(n.thumbRatioXProportion * c) + "px"})`;
    }, R = (c) => {
      l.value.scrollTop = c;
    }, B = (c) => {
      l.value.scrollLeft = c;
    }, Y = (c, g) => {
      R(c), B(g);
    }, X = (c) => {
      var g, T;
      n.wrapperInnerRealHeight = Number((g = d.value) == null ? void 0 : g.scrollHeight), n.wrapperInnerRealWidth = Number((T = d.value) == null ? void 0 : T.scrollWidth), n.wrapperInnerMaxiMoveRangeY = n.wrapperInnerRealHeight - Number(u.value.replace("px", "")), n.wrapperInnerMaxiMoveRangeX = n.wrapperInnerRealWidth - Number(w.value.replace("px", "")), n.thumbHeightProportion = Number(u.value.replace("px", "")) / n.wrapperInnerRealHeight, n.thumbWidthProportion = Number(w.value.replace("px", "")) / n.wrapperInnerRealWidth, n.thumbHeight = String(n.thumbHeightProportion * Number(u.value.replace("px", ""))) + "px", n.thumbWidth = String(n.thumbWidthProportion * Number(w.value.replace("px", ""))) + "px", n.thumbRatioYMaxRange = Number(u.value.replace("px", "")) - Number(n.thumbHeight.replace("px", "")), n.thumbRatioXMaxRange = Number(w.value.replace("px", "")) - Number(n.thumbWidth.replace("px", "")), n.thumbRatioYProportion = n.thumbRatioYMaxRange / n.wrapperInnerMaxiMoveRangeY, n.thumbRatioXProportion = n.thumbRatioXMaxRange / n.wrapperInnerMaxiMoveRangeX, n.wrapperInnerMaxiMoveProportionY = n.wrapperInnerMaxiMoveRangeY / n.thumbRatioYMaxRange, n.wrapperInnerMaxiMoveProportionX = n.wrapperInnerMaxiMoveRangeX / n.thumbRatioXMaxRange;
    };
    le(() => {
      n.cacheContainerWidth = e.width, X();
    });
    const y = (c) => {
      const g = c.target.scrollTop, T = c.target.scrollLeft;
      P(g), _(T), t.emit && t.emit("scroll", T, g);
    }, k = () => {
      S.value = !0;
    }, N = () => {
      S.value = !1;
    };
    ge(lt, {
      height: u,
      thumbRatioY: C,
      thumbRatioX: I,
      thumbRatioYMaxRange: F,
      thumbRatioXMaxRange: L,
      wrapperInnerMaxiMoveProportionY: O,
      wrapperInnerMaxiMoveProportionX: M,
      scrollBarRef: l
    }), t.expose({
      setScrollTop: R,
      setScrollLeft: B,
      setScrollTo: Y
    });
    const m = (c = he.VERTICAL) => {
      if (e.width === !1 || e.height === !1)
        return "";
      const g = n.wrapperInnerRealHeight, T = Number(e.height.replace("px", "")), W = n.wrapperInnerRealWidth;
      if (c == "vertical")
        return T < g ? a(j("scroll-bar-thumb"), {
          ref: v,
          type: c,
          height: x.value,
          width: e.thumbWidth,
          ratioX: I.value,
          ratioY: C.value,
          class: S.value ? "show" : "hide"
        }, null) : "";
      if (c == "horizontal") {
        let q = Number(w.value.replace("px", ""));
        if (w.value == "auto") {
          const U = () => {
            w.value = "auto", J(() => {
              var D;
              q = Number((D = d.value) == null ? void 0 : D.clientWidth), w.value = q + "px", X();
            });
          };
          U(), window.onresize = () => U();
        } else if (w.value)
          return q < W ? a(j("scroll-bar-thumb"), {
            ref: v,
            type: c,
            height: e.thumbWidth,
            width: f.value,
            ratioX: I.value,
            ratioY: C.value,
            class: S.value ? "show" : "hide"
          }, null) : "";
      }
    };
    return () => {
      var c, g;
      return Q(a("div", {
        class: pe(),
        style: {
          width: w.value
        },
        onMouseenter: k,
        onMouseleave: N
      }, [a("div", {
        class: pe("_wrapper"),
        ref: l,
        style: {
          height: u.value,
          width: w.value
        },
        onScroll: y
      }, [a("div", {
        class: pe("_view"),
        ref: d
      }, [(g = (c = t.slots).default) == null ? void 0 : g.call(c)])]), a("div", {
        class: [pe("_bar"), "horizontal"]
      }, [m(he.HORIZONTAL)]), a("div", {
        class: [pe("_bar"), "vertical"]
      }, [m(he.VERTICAL)])]), [[ae("css"), b.value || {}]]);
    };
  }
}), uo = ee(so, "scroll-bar"), {
  n: co,
  classes: po
} = z("time-picker"), ho = /* @__PURE__ */ A({
  name: "VITimePicker",
  emits: ["click", "inputClick", "closeClick", "cancelClick", "okClick", "update:modelValue", "focus", "blur"],
  directives: {
    css: te
  },
  props: We,
  components: {
    "vi-time-picker-input": no,
    "vi-time-picker-popper": lo,
    "vi-scroll-bar": uo
  },
  setup(e, t) {
    const i = [null, null, null];
    let r = "";
    const s = (o) => o < 10 ? "0" + o : o + "", l = (o) => {
      const h = o.match(/^(\d{1,2}):(\d{1,2}):(\d{1,2})$/);
      return h || console.warn("初始化数据格式不符合规范,已被清空！"), h;
    }, d = () => "xxxxxxxx".replace(/[xy]/g, function(o) {
      var h = 0 | 16 * Math.random(), V = o == "x" ? h : 8 | 3 & h;
      return V.toString(16);
    }), v = H();
    let n = H(), S = H(), b = H();
    const u = G({
      uuid: d(),
      popperVisible: !1,
      softFocus: !1,
      isSubmit: !1,
      hourList: [],
      minuteList: [],
      secondList: [],
      currentSelect: ["", "", ""]
    }), w = function() {
      u.popperVisible = !1, u.softFocus = !1;
    }, x = function(o) {
      let h = !1;
      const V = o.path || o.composedPath && o.composedPath();
      for (let $ = 0; $ < V.length; $++) {
        const E = V[$];
        if (E.classList && E.classList.value && E.getAttribute("class").includes("-time-picker") && E.dataset.id == u.uuid) {
          h = !0;
          break;
        }
      }
      h || (w(), u.isSubmit = !0);
    };
    document.addEventListener("mousedown", x);
    const f = function(o) {
      t.emit && t.emit("focus");
    }, I = function(o) {
      t.emit && t.emit("blur");
    }, C = function() {
      t.emit && t.emit("click");
    }, F = function(o) {
      u.popperVisible = !u.popperVisible, u.isSubmit = !1, e.modelValue || m(), t.emit && t.emit("inputClick");
    }, L = function() {
      u.popperVisible = !1, t.emit && t.emit("closeClick");
    }, O = function(o) {
      const {
        type: h
      } = o.target.dataset;
      u.popperVisible = !1, h == "cancel" ? (u.isSubmit = !1, t.emit && t.emit("update:modelValue", r), t.emit && t.emit("cancelClick"), N()) : h == "ok" && (u.isSubmit = !0, t.emit && t.emit("okClick", u.currentSelect));
    }, M = function(o, h) {
      const V = {
        index: {
          hour: "0",
          minute: "1",
          second: "2"
        },
        ref: {
          hour: n,
          minute: S,
          second: b
        }
      }, {
        num: $,
        disabled: E
      } = h.dataset;
      if ($) {
        if (E == "true")
          return;
        u.currentSelect[V.index[o]] = $;
        const fe = Number(u.currentSelect[V.index[o]]) * Number(g.value["popper-spinner-number-height"]);
        V.ref[o].value.setScrollTop(fe);
      }
    }, P = function(o) {
      M("hour", o.target);
    }, _ = function(o) {
      M("minute", o.target);
    }, R = function(o) {
      M("second", o.target);
    }, B = function(o, h) {
      const V = {
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
      let E = Math.round(o / Number(g.value["popper-spinner-number-height"]));
      if (e[V.ableRange[h]].filter((rt) => rt == E).length > 0)
        return;
      u.currentSelect[V.timers[h]] = s(E);
      let Ce = E * Number(g.value["popper-spinner-number-height"]);
      i[V.timers[h]] && (clearTimeout(i[V.timers[h]]), i[V.timers[h]] = null), i[V.timers[h]] = setTimeout(() => {
        h == "hour" && n.value.setScrollTop(Ce), h == "minute" && S.value.setScrollTop(Ce), h == "second" && b.value.setScrollTop(Ce);
      }, 200);
    }, Y = function(o, h) {
      B(h, "hour");
    }, X = function(o, h) {
      B(h, "minute");
    }, y = function(o, h) {
      B(h, "second");
    }, k = () => {
      u.hourList = new Array(24).fill(0).map((o, h) => h < 10 ? "0" + h : h + ""), u.minuteList = new Array(60).fill(0).map((o, h) => h < 10 ? "0" + h : h + ""), u.secondList = new Array(60).fill(0).map((o, h) => h < 10 ? "0" + h : h + "");
    }, N = function() {
      r && (n.value.setScrollTop(Number(r.slice(0, 2)) * Number(g.value["popper-spinner-number-height"])), S.value.setScrollTop(Number(r.slice(3, 5)) * Number(g.value["popper-spinner-number-height"])), b.value.setScrollTop(Number(r.slice(6, 8)) * Number(g.value["popper-spinner-number-height"])));
    }, m = () => {
      const o = new Date(), h = o.getHours(), V = o.getMinutes(), $ = o.getSeconds();
      u.currentSelect[0] = s(h), u.currentSelect[1] = s(V), u.currentSelect[2] = s($), n.value.setScrollTop(Number(u.currentSelect[0]) * Number(g.value["popper-spinner-number-height"])), S.value.setScrollTop(Number(u.currentSelect[1]) * Number(g.value["popper-spinner-number-height"])), b.value.setScrollTop(Number(u.currentSelect[2]) * Number(g.value["popper-spinner-number-height"])), t.emit && t.emit("update:modelValue", u.currentSelect[0] + ":" + u.currentSelect[1] + ":" + u.currentSelect[2]);
    }, c = function() {
      if (e.modelValue && l(e.modelValue)) {
        const o = e.modelValue.split(":"), h = e.disabledHours.findIndex((E) => E == o[0]) != -1, V = e.disabledMinutes.findIndex((E) => E == o[1]) != -1, $ = e.disabledSeconds.findIndex((E) => E == o[2]) != -1;
        if (h || V || $)
          return console.warn("输入的值包含禁用项,已被清空"), t.emit && t.emit("update:modelValue", ""), !0;
      }
      return !1;
    };
    ut(() => {
      if (e.modelValue && l(e.modelValue) && !c()) {
        const o = e.modelValue.split(":");
        u.currentSelect[0] = o[0], u.currentSelect[1] = o[1], u.currentSelect[2] = o[2], r = e.modelValue;
      }
    }), le(() => {
      k(), J(() => {
        N();
      });
    });
    const g = p(() => Object.assign(We.dynamicCss.default(), e.dynamicCss)), T = p(() => {
      const o = {};
      for (const h in g.value)
        h.includes("input") && (o[h] = g.value[h]);
      return o;
    }), W = p({
      get() {
        return c(), e.modelValue;
      },
      set(o) {
        t.emit && t.emit("update:modelValue", o);
      }
    }), q = p(() => e.clearable), U = function(o, h) {
      const V = {
        hour: "disabledHours",
        minute: "disabledMinutes",
        second: "disabledSeconds"
      };
      let $ = !1;
      return e[V[o]].forEach((E) => E == h ? $ = !0 : ""), $;
    }, D = p(() => function(o) {
      return U("hour", o);
    }), oe = p(() => function(o) {
      return U("minute", o);
    }), de = p(() => function(o) {
      return U("second", o);
    });
    return me(() => {
      const o = u.currentSelect[0], h = u.currentSelect[1], V = u.currentSelect[2];
      if (!o && !h && !V) {
        t.emit && t.emit("update:modelValue", "");
        return;
      }
      const $ = o + ":" + h + ":" + V;
      t.emit && t.emit("update:modelValue", $);
    }), me(() => {
      u.isSubmit && (r = e.modelValue, t.emit && t.emit("update:modelValue", r));
    }), ge(nt, {
      timePickerRef: v
    }), () => Q(a("div", {
      ref: v,
      "data-id": u.uuid,
      class: [po(co())],
      onClick: C
    }, [a(j("vi-time-picker-input"), {
      placeholder: e.placeholder,
      modelValue: W.value,
      "onUpdate:modelValue": (o) => W.value = o,
      onFocus: f,
      onBlur: I,
      onClose: L,
      dynamicCss: T.value || {},
      clearable: q.value,
      readonly: !0,
      onClick: F
    }, null), a(j("vi-time-picker-popper"), {
      active: u.popperVisible
    }, {
      default: () => [a("div", {
        class: "time-panel"
      }, [a("div", {
        class: "time-panel__content"
      }, [a(j("vi-scroll-bar"), {
        ref: n,
        class: "time-panel__spinner time-panel__popper-spinner--hour",
        onScroll: Y,
        height: Number(g.value["popper-spinner-number-height"]) * 6 + "px"
      }, {
        default: () => [a("ul", {
          onClick: P
        }, [u.hourList.map((o) => a("li", {
          "data-num": o,
          "data-disabled": D.value(Number(o)),
          class: [u.currentSelect[0] == o ? "active" : "", D.value(Number(o)) ? "disabled" : ""]
        }, [o]))])]
      }), a(j("vi-scroll-bar"), {
        ref: S,
        class: "time-panel__spinner time-panel__popper-spinner--minutes",
        onScroll: X,
        height: Number(g.value["popper-spinner-number-height"]) * 6 + "px"
      }, {
        default: () => [a("ul", {
          onClick: _
        }, [u.minuteList.map((o) => a("li", {
          "data-num": o,
          "data-disabled": oe.value(Number(o)),
          class: [u.currentSelect[1] == o ? "active" : "", oe.value(Number(o)) ? "disabled" : ""]
        }, [o]))])]
      }), a(j("vi-scroll-bar"), {
        ref: b,
        class: "time-panel__spinner time-panel__popper-spinner--second",
        onScroll: y,
        height: Number(g.value["popper-spinner-number-height"]) * 6 + "px"
      }, {
        default: () => [a("ul", {
          onClick: R
        }, [u.secondList.map((o) => a("li", {
          "data-num": o,
          "data-disabled": de.value(Number(o)),
          class: [u.currentSelect[2] == o ? "active" : "", de.value(Number(o)) ? "disabled" : ""]
        }, [o]))])]
      })]), a("div", {
        class: "time-panel__footer",
        onClick: O
      }, [a("div", {
        "data-type": "cancel",
        class: "time-panel__footer_cancel"
      }, [Me("取消")]), a("div", {
        "data-type": "ok",
        class: "time-panel__footer_ok"
      }, [Me("确认")])])])]
    })]), [[ae("css"), g.value || {}]]);
  }
}), Vo = ee(ho, "time-picker"), Ke = {
  header: {
    type: Array,
    default: []
  },
  showHeader: {
    type: Boolean,
    default: !0
  },
  itemHeight: {
    type: [String],
    default: "40px"
  },
  showCount: {
    type: [Number],
    default: 6
  },
  rollCount: {
    type: [Number],
    default: 1
  },
  attractShowCount: {
    type: Array,
    default: [1, 3, 4]
  },
  loopTime: {
    type: Number,
    default: 1e3 * 3
  },
  scrollTransition: {
    type: Number,
    default: 1e3 * 2
  },
  tmp_scaleRule: {
    type: Array,
    default: [1.3, 1]
  },
  scaleRule: {
    type: [Number, Array],
    default: [1.5, 1, 0.8]
  },
  modelValue: {
    type: Array,
    default: []
  },
  dynamicCss: {
    type: Object,
    default: () => ({
      "box-width": "800",
      "th-pad-tb": "10",
      "th-bg-color": "rgb(179, 210, 224)",
      "th-fo-color": "rgb(90, 99, 110)",
      "th-fo-size": "16",
      "th-fo-weight": "900",
      "th-radius-lt": "8",
      "th-radius-rt": "8",
      "th-radius-lb": "0",
      "th-radius-rb": "0",
      "tr-hover-bg-color": "rgb(132 176 212 / 80%)",
      "tr-hover-transition": "0.3",
      "tr-attract-bg-color-style": "single",
      "tr-attract-bg-color-to": "#00DEFF",
      "tr-attract-bg-color-from": "#FFFFFF",
      "tr-attract-bg-color-angle": "135",
      "tr-attract-bg-color-value": "rgb(211, 228, 242)",
      "tr-un-attract-bg-color": "rgb(235, 235, 235)",
      "td-pad-lr": "20",
      "td-pad-tb": "0",
      "longText-txt-gap": "30"
    })
  }
}, { n: mo } = z(""), go = (e = mo()) => e + "xxxxxxxx".replace(/[xy]/g, function(t) {
  var i = 0 | 16 * Math.random(), r = t == "x" ? i : 8 | 3 & i;
  return r.toString(16);
});
class vo {
  constructor(t = [], i = 7) {
    this.list = t, this.severalGroups = i, this.windowSliding = new Array(this.severalGroups).fill(0).map((r, s) => s);
  }
  take(t) {
    return this.Sliding(t), this.show();
  }
  show() {
    return this.windowSliding.map((t) => this.list[t]);
  }
  Sliding(t) {
    this.windowSliding = this.windowSliding.map((i) => {
      const r = this.list.length, s = i + t;
      return s <= r - 1 ? s : s - r;
    });
  }
}
const at = function(e) {
  const t = e instanceof Array ? [] : {};
  for (let i in e)
    t[i] = typeof e[i] == "object" ? at(e[i]) : e[i];
  return t;
};
function fo(e, t = "top", i, r, s) {
  const l = t == "top" ? e.scrollTop : t == "left" ? e.scrollLeft : 0, d = i - l, v = performance.now();
  function n() {
    const u = performance.now() - v, w = S(
      u,
      l,
      d,
      r
    );
    t == "top" ? e.scrollTop = w : t == "left" && (e.scrollLeft = w), u < r ? requestAnimationFrame(n) : s && s();
  }
  function S(b, u, w, x) {
    return b /= x / 2, b < 1 ? w / 2 * b * b + u : (b--, -w / 2 * (b * (b - 2) - 1) + u);
  }
  requestAnimationFrame(n);
}
function bo() {
  let e = new Date().getTime();
  return typeof performance < "u" && typeof performance.now == "function" && (e += performance.now()), "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    (i) => {
      const r = (e + Math.random() * 16) % 16 | 0;
      return e = Math.floor(e / 16), (i === "x" ? r : r & 3 | 8).toString(16);
    }
  );
}
function wo(e) {
  const t = {};
  return e.map((i) => {
    const { __id: r, ...s } = i, l = JSON.stringify(s);
    if (!t[l])
      return t[l] = !0, i;
    const d = bo();
    return { ...i, __id: d };
  });
}
const {
  n: Ge
} = z("long-text"), Qe = {
  text: {
    type: String,
    default: "这是一个默认文本"
  },
  speed: {
    type: Number,
    default: 1e3
  },
  dynamicCss: {
    type: Object,
    default: () => ({
      "txt-gap": "20"
    })
  }
}, Ze = /* @__PURE__ */ A({
  name: "LongText",
  emits: ["update:text"],
  props: Qe,
  directives: {
    css: te
  },
  setup(e, t) {
    var L;
    const r = "onUpdate:modelValue" in (((L = Se()) == null ? void 0 : L.vnode.props) || {}), s = H(null), l = H(null), d = H(null), v = H(null);
    let n = null;
    const S = G({
      isScroll: !0,
      toolTip_x: 0,
      toolTip_y: 0,
      toolTip_content: "盎司附近拉萨解放了卡JFK垃圾地方"
    });
    let b = 0;
    const u = p(() => Object.assign(Qe.dynamicCss.default(), e.dynamicCss)), w = p({
      get() {
        return S.isScroll = !0, f(S), e.text;
      },
      set(O) {
        r && t.emit("update:text", O);
      }
    }), x = () => {
      var B, Y, X;
      const O = (B = d == null ? void 0 : d.value) == null ? void 0 : B.offsetWidth, M = (Y = v == null ? void 0 : v.value) == null ? void 0 : Y.offsetWidth, P = (X = l == null ? void 0 : l.value) == null ? void 0 : X.scrollLeft, _ = performance.now();
      b || (b = _);
      const R = _ - b;
      O / e.speed * R, M - P <= 0 ? (l.value.scrollLeft -= d.value.offsetWidth, b = 0, requestAnimationFrame(x)) : l.value && l.value.scrollLeft++;
    }, f = (O) => {
      J(() => {
        if (s.value && d.value) {
          const M = s.value.clientWidth, P = d.value.offsetWidth, _ = Number(u.value["txt-gap"]), R = P - _;
          if (M < R) {
            I();
            const B = () => {
              x(), n = requestAnimationFrame(B);
            };
            n = requestAnimationFrame(B);
          } else
            O && (O.isScroll = !1);
        }
      });
    }, I = () => n ? (cancelAnimationFrame(n), n = null, !0) : !1, C = (O) => {
      S.toolTip_x = O.x, S.toolTip_y = O.y, I();
    }, F = () => {
      f();
    };
    return Be(() => {
      n && (clearInterval(n), n = null);
    }), () => Q(a("div", {
      class: [Ge(""), "tooltip"],
      "data-tooltip": "这是一个 tooltip",
      ref: s,
      onMouseenter: C,
      onMouseleave: F
    }, [a("div", {
      class: Ge("_scroll"),
      ref: l
    }, [a("span", {
      ref: d
    }, [w.value, S.isScroll ? a("span", {
      class: "seizeASeat"
    }, null) : ""]), a("span", {
      ref: v
    }, [S.isScroll ? w.value : "", S.isScroll ? a("span", {
      class: "seizeASeat"
    }, null) : ""])])]), [[ae("css"), u.value || {}]]);
  }
}), {
  n: ie
} = z("roll-list"), yo = /* @__PURE__ */ A({
  name: "RollList",
  emits: ["update:modelValue", "rowClick"],
  directives: {
    css: te
  },
  props: Ke,
  components: {
    LongText: Ze
  },
  setup(e, t) {
    var X;
    const r = "onUpdate:modelValue" in (((X = Se()) == null ? void 0 : X.vnode.props) || {}), s = G({
      uuid: go(ie("-")),
      takeFlag: !1,
      rotationTimer: null,
      getInventedListDataBridgeInit: !1
    }), l = H(null), d = H();
    let v = 0, n = null;
    const S = {
      longText: "longText"
    }, b = (y) => {
      y.preventDefault();
    }, u = p(() => Object.assign(Ke.dynamicCss.default(), e.dynamicCss)), w = p(() => {
      let y = {};
      for (let k in u.value)
        k.includes("longText") && (y[k.replace("longText-", "")] = u.value[k]);
      return y;
    }), x = p(() => e.header), f = () => {
      var y;
      for (let k = 0; k < ((y = d.value) == null ? void 0 : y.children.length); k++) {
        const N = d.value.children[k], {
          attractShowCount: m,
          header: c,
          tmp_scaleRule: g
        } = e;
        m.includes(k) ? (u.value["tr-attract-bg-color-style"] == "double" ? N.style.background = `linear-gradient(${u.value["tr-attract-bg-color-angle"]}deg,${u.value["tr-attract-bg-color-from"]},${u.value["tr-attract-bg-color-to"]})` : N.style.background = u.value["tr-attract-bg-color-value"], Array.from(N.children).forEach((T, W) => {
          T.style.transform = `scale(${g[0]})`, T.style.flexBasis = c[W].basis + "%";
        })) : (N.style.background = u.value["tr-un-attract-bg-color"], Array.from(N.children).forEach((T, W) => {
          T.style.transform = `scale(${g[1]})`, T.style.flexBasis = c[W].basis + "%";
        }));
      }
    }, I = p({
      get() {
        return n = new vo(at(e.modelValue), e.showCount * 2), J(() => {
          f();
        }), e.modelValue;
      },
      set(y) {
        r && t.emit("update:modelValue", y);
      }
    }), C = p(() => {
      if (s.takeFlag = !s.takeFlag, e.modelValue.length > e.showCount) {
        const y = s.getInventedListDataBridgeInit ? e.rollCount : (s.getInventedListDataBridgeInit = !0) && 0;
        return wo(n.take(y));
      } else
        return new Array(e.modelValue.length).fill(0).map((y, k) => I.value[k]);
    }), F = p(() => {
      let y = I.value.length;
      const k = Number(e.itemHeight.replace("px", "")), N = y <= e.showCount ? y : e.showCount;
      return k * N + "px";
    });
    le(() => {
      me(() => {
        s.rotationTimer && (clearInterval(s.rotationTimer), s.rotationTimer = null), s.rotationTimer = I.value.length > e.showCount && setInterval(() => {
          L();
        }, e.loopTime);
      });
    });
    const L = () => {
      var m;
      const y = l == null ? void 0 : l.value, k = e.rollCount <= e.showCount ? e.rollCount : e.showCount, N = y.scrollHeight - y.clientHeight;
      v = v + N / e.showCount * k;
      for (let c = 0; c < ((m = d.value) == null ? void 0 : m.children.length); c++) {
        const g = d.value.children[c], {
          rollCount: T,
          attractShowCount: W,
          scrollTransition: q,
          header: U
        } = e;
        g.style.transition = `${q / 1e3}s`, W.map((D) => D + T).includes(c) ? (u.value["tr-attract-bg-color-style"] == "double" ? g.style.background = `linear-gradient(${u.value["tr-attract-bg-color-angle"]}deg,${u.value["tr-attract-bg-color-from"]},${u.value["tr-attract-bg-color-to"]})` : g.style.background = u.value["tr-attract-bg-color-value"], Array.from(g.children).forEach((D, oe) => {
          D.style.transition = `${q / 1e3}s`, D.style.flexBasis = U[oe].basis + "%", D.style.transform = `scale(${e.tmp_scaleRule[0]})`;
        })) : (g.style.background = u.value["tr-un-attract-bg-color"], Array.from(g.children).forEach((D, oe) => {
          D.style.transition = `${q / 1e3}s`, D.style.flexBasis = U[oe].basis + "%", D.style.transform = `scale(${e.tmp_scaleRule[1]})`;
        }));
      }
      fo(y, "top", v, e.scrollTransition, () => {
        var c;
        for (let g = 0; g < ((c = d.value) == null ? void 0 : c.children.length); g++) {
          const T = d.value.children[g];
          T.style.transition = "0s", Array.from(T.children).forEach((W) => {
            W.style.transition = "0s";
          });
        }
        s.takeFlag = !s.takeFlag, y.scrollTop = 0, v = 0;
      });
    }, O = () => {
      s.rotationTimer && clearInterval(s.rotationTimer);
    }, M = () => {
      s.rotationTimer = null;
    }, P = function(y) {
      t.emit && t.emit("rowClick", y);
    };
    Be(() => {
      O(), s.rotationTimer = null;
    });
    const _ = () => e.showHeader ? a("div", {
      class: ie("_th")
    }, [x.value.map((y) => a("div", {
      class: ie("_td"),
      style: {
        flexBasis: y.basis + "%"
      }
    }, [y.label]))]) : "", R = () => a("div", {
      ref: l,
      onWheel: b,
      class: ie("_scroll"),
      style: {
        height: F.value
      }
    }, [a("ul", {
      ref: d,
      class: ie("_wrapper")
    }, [C.value.map((y) => B(y))])]), B = (y) => a("li", {
      key: y.__id,
      style: {
        height: e.itemHeight
      },
      onClick: P.bind(this, y)
    }, [e.header.map((k, N) => Y(y, k, N))]), Y = (y, k, N) => {
      var m, c, g, T, W, q, U, D;
      return a("div", {
        class: [ie("_td")]
      }, [a("div", {
        class: [S[(m = x.value[N]) == null ? void 0 : m.type]],
        style: {
          color: y[k.prop] ? (c = k.fo) == null ? void 0 : c.color : "none",
          fontSize: y[k.prop] ? ((g = k.fo) == null ? void 0 : g.size) + "px" : "auto",
          fontWeight: y[k.prop] ? (T = k.fo) == null ? void 0 : T.weight : "0",
          fontFamily: y[k.prop] ? (W = k.fo) == null ? void 0 : W.style : "none"
        }
      }, [(q = x.value[N]) != null && q.type && ((U = x.value[N]) == null ? void 0 : U.type) == "longText" ? a(Ze, {
        text: y[k.prop] || "undefined",
        speed: y[k.prop] ? (D = k.longText) == null ? void 0 : D.speed : !1,
        dynamicCss: w.value
      }, null) : y[k.prop] || "undefined"])]);
    };
    return () => Q(a("div", {
      class: ie(),
      onMouseenter: O,
      onMouseleave: M
    }, [_(), R()]), [[ae("css"), u.value || {}]]);
  }
}), Bo = ee(yo, "roll-list");
export {
  Co as Pagination,
  xo as Radio,
  ko as RadioButton,
  Mo as RadioGroup,
  Bo as RollList,
  uo as ScrollBar,
  kt as SelectV2,
  Mt as SelectV2Option,
  Vo as TimePicker
};
