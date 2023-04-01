import { defineComponent as H, createVNode as a, inject as U, reactive as q, computed as m, resolveComponent as A, ref as T, onMounted as oe, watchEffect as fe, nextTick as F, watch as ce, onUnmounted as Me, getCurrentInstance as Se, provide as ve, withDirectives as ee, resolveDirective as re, createTextVNode as Ve, isVNode as ut, openBlock as Le, createElementBlock as Pe, normalizeClass as te, createElementVNode as de, vModelRadio as nt, toDisplayString as lt, renderSlot as ct, onBeforeMount as dt } from "vue";
const ne = (e, t) => (e.install = function(s) {
  if (e) {
    const i = e.name || e.__name;
    if (i || t) {
      const u = t ? `dw-${t}` : "dw-" + i.replace(/dw/gi, "").toLowerCase();
      s.component(u, e);
    } else
      console.error(e, t, !t);
  }
}, e), pt = (e) => Array.isArray(e);
function _(e) {
  const t = `vi-${e}`;
  return {
    n: (u) => u ? u.startsWith("-") ? `${t}${u}` : `${t}_${u}` : t,
    classes: (...u) => u.map((l) => {
      if (pt(l)) {
        const [h, v, n = null] = l;
        return h ? v : n;
      }
      return l;
    })
  };
}
const pe = Symbol("select-v2"), He = function(e, t) {
  for (let [s, i] of Object.entries(t.value))
    e.style.setProperty("--" + s, i);
}, le = {
  mounted(e, t) {
    He(e, t);
  },
  updated(e, t) {
    He(e, t);
  },
  install(e) {
    e.directive("Css", this);
  }
}, $e = {
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
  n: mt,
  classes: gt
} = _("select-v2-svg-icon"), be = /* @__PURE__ */ H({
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
    const s = function(u) {
      t.emit("click", u);
    }, i = function() {
      return a("svg", {
        class: [gt(mt()), "icon"],
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
  n: ze,
  classes: ht
} = _("select-v2-input"), ft = /* @__PURE__ */ H({
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
    "vi-select-v2-svg-icon": be
  },
  setup(e, t) {
    const {
      currentSelect: s,
      clearable: i,
      cacheOptionList: u,
      mode: l
    } = U(pe), h = "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z", v = "M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z", n = q({
      isHover: !1
    }), S = function(w) {
      t.emit("click", w);
    }, y = function(w) {
      s.value = "", t.emit("clear"), w.stopPropagation();
    }, d = function(w) {
      t.emit("focus", w);
    }, g = function(w) {
      t.emit("blur", w);
    }, x = function(w) {
      n.isHover = !0, t.emit("mouseenter");
    }, b = function(w) {
      n.isHover = !1, t.emit("mouseleave");
    }, V = m(() => u.value[s.value]);
    return () => a("div", {
      class: [ht(ze(), e.active ? "active" : "")],
      onClick: S,
      onMouseenter: x,
      onMouseleave: b
    }, [a("input", {
      class: [ze("_inner")],
      placeholder: e.placeholder,
      onFocus: d,
      onBlur: g,
      value: V.value,
      readonly: !0
    }, null), n.isHover && s.value && i.value && l.value == "single" ? a(A("vi-select-v2-svg-icon"), {
      height: e.iconHeight,
      width: e.iconWidth,
      path: v,
      onClick: y
    }, null) : a(A("vi-select-v2-svg-icon"), {
      height: e.iconHeight,
      width: e.iconWidth,
      path: h,
      class: ["arrow", e.active ? "turnUp" : "turnDown"]
    }, null)]);
  }
}), {
  n: we,
  classes: Oe
} = _("select-v2-dropdown"), vt = /* @__PURE__ */ H({
  name: "VISelectV2DropDown",
  emits: ["focus", "blur", "click"],
  props: ["active"],
  components: {
    "vi-svg-icon": be
  },
  setup(e, t) {
    const {
      selectRef: s,
      mode: i,
      currentSelect: u
    } = U(pe), l = q({
      parentRect: {
        x: 0,
        y: 0
      },
      dropdownTop: "0"
    }), h = T(), v = T(), n = () => {
      F(() => {
        l.dropdownTop = s.value.clientHeight + 10 + "px";
      });
    };
    return oe(() => n()), fe(() => {
      let S = u.value;
      i.value == "multiple" && S && setTimeout(() => {
        n();
      }, 200);
    }), () => {
      var S, y;
      return a("div", {
        class: [we("-popper"), e.active ? "active" : ""],
        style: {
          top: l.dropdownTop
        }
      }, [a("div", {
        ref: h,
        class: [we("-arrow"), e.active ? "active" : ""]
      }, null), a("div", {
        ref: v,
        class: [Oe(we(), e.active ? "active" : "")]
      }, [a("div", {
        class: [Oe(we("_inner"))]
      }, [(y = (S = t.slots).default) == null ? void 0 : y.call(S)])])]);
    };
  }
}), {
  n: Ae,
  classes: bt
} = _("select-v2-tag"), wt = /* @__PURE__ */ H({
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
    "vi-svg-icon": be
  },
  setup(e, t) {
    const {
      currentSelect: s
    } = U(pe), i = "M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z", u = function(l) {
      const h = JSON.parse(JSON.stringify(s.value));
      try {
        h.forEach((v, n) => {
          if (v.value == e.value)
            throw h.splice(n, 1), new Error();
        });
      } catch {
      }
      s.value = h, t.emit && t.emit("closeClick", {
        currentClose: {
          label: e.label,
          value: e.value
        },
        currentSelects: JSON.parse(JSON.stringify(h))
      }), l.stopPropagation();
    };
    return () => a("div", {
      class: [bt(Ae()), e.tooltip ? "useToolTip" : ""],
      "data-txt": e.label
    }, [a("span", {
      class: Ae("_span")
    }, [e.label]), a(A("vi-svg-icon"), {
      path: i,
      onClick: u,
      height: e.height + "px",
      width: e.width + "px"
    }, null)]);
  }
}), {
  n: xe,
  classes: yt
} = _("scroll-bar"), St = /* @__PURE__ */ H({
  name: "VIScrollBar",
  emits: ["focus", "blur", "click"],
  props: ["dynamicCss"],
  directives: {
    css: le
  },
  setup(e, t) {
    const {
      cacheOptionList: s
    } = U(pe), i = T(), u = T(), l = q({
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
        const b = window.getComputedStyle(i.value.children[0]);
        l.realPadding = e.dynamicCss["popper-padding"] * 2, l.realHeight = b.height.replace("px", "") * 1, l.viewHeight = e.dynamicCss["popper-height"] * 1 - l.realPadding, l.maxScrollBoxRange = l.realHeight - l.viewHeight, l.proportion = Number((l.viewHeight / l.realHeight).toFixed(1)), l.scrollBarHeight = l.viewHeight * l.proportion, l.maxScrollBarRange = l.viewHeight - l.scrollBarHeight, l.scrollBarMovePropor = l.maxScrollBarRange / l.maxScrollBoxRange, l.scrollBoxMovePropor = l.maxScrollBoxRange / l.maxScrollBarRange;
      });
    };
    oe(() => {
      h();
    }), ce(() => s.value, () => {
      h();
    }, {
      deep: !0,
      immediate: !1
    });
    const v = m(() => l.scrollBarHeight < l.realHeight), n = function(b) {
      const V = b.target.scrollTop;
      g(V);
    }, S = function(b) {
      document.addEventListener("mousedown", y), document.addEventListener("mousemove", d);
    }, y = function(b) {
      l.mouseMoving = !0, l.startY = b.clientY;
    }, d = function(b) {
      l.moveY = l.startY - b.clientY, x();
    };
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", d), document.removeEventListener("mousedown", y), l.startY = 0, l.moveY = 0, l.mouseMoving && (l.translateY = l._move), l.mouseMoving = !1;
    });
    const g = function(b) {
      l.mouseMoving || (l.translateY = l.scrollBarMovePropor * b, u.value.style.transform = `translateY(${l.translateY}px)`);
    }, x = function() {
      let b = 0;
      l.moveY < 0 ? b = l.translateY + Math.abs(l.moveY) : l.moveY >= 0 && (b = l.translateY - Math.abs(l.moveY)), b < 0 && (b = 0), b > l.maxScrollBarRange && (b = l.maxScrollBarRange), l._move = b, u.value.style.transform = `translateY(${b}px)`, i.value.scrollTop = Math.abs(l.scrollBoxMovePropor * b);
    };
    return () => {
      var b, V;
      return a("div", {
        class: [yt(xe())]
      }, [a("div", {
        class: xe("left"),
        ref: i,
        onScroll: n
      }, [(V = (b = t.slots).default) == null ? void 0 : V.call(b)]), v.value ? a("div", {
        ref: u,
        class: xe("right"),
        style: {
          height: l.scrollBarHeight + "px"
        },
        onMousedown: S
      }, null) : ""]);
    };
  }
}), {
  n: Ct,
  classes: xt
} = _("select-v2-option"), at = /* @__PURE__ */ H({
  name: "VISelectV2Option",
  emits: ["click"],
  props: ["label", "value"],
  components: {
    "vi-svg-icon": be
  },
  setup(e, t) {
    const {
      currentSelect: s,
      currentSelectLabel: i,
      mode: u,
      dropDownVisible: l,
      cacheOptionList: h,
      selectedFn: v,
      deleteOptionItem: n
    } = U(pe), S = function() {
      if (u.value == "single")
        s.value = e.value, i.value = e.label, l.value = !1;
      else if (u.value == "multiple") {
        const d = JSON.parse(JSON.stringify(s.value));
        let g = !1;
        try {
          d.forEach((x, b) => {
            if (x.value == e.value)
              throw d.splice(b, 1), g = !0, new Error();
          });
        } catch {
        }
        g || d.push({
          label: e.label,
          value: e.value
        }), s.value = d;
      }
      v({
        label: e.label,
        value: e.value
      });
    };
    fe(() => {
      h.value = {
        key: e.label,
        value: e.value
      };
    }), oe(() => {
      h.value = {
        key: e.label,
        value: e.value
      };
    }), Me(() => {
      n(e.value);
    });
    const y = m(() => {
      if (u.value == "single")
        return s.value == e.value;
      if (u.value == "multiple") {
        let d = !1;
        try {
          s.value.forEach((g) => {
            if (d = g.value == e.value)
              throw new Error();
          });
        } catch {
        }
        return d;
      }
    });
    return () => a("li", {
      class: [xt(Ct()), y.value ? "active" : ""],
      onClick: S
    }, [a("div", {
      class: "txt"
    }, [e.label])]);
  }
}), {
  n: ue,
  classes: kt
} = _("select-v2"), Mt = /* @__PURE__ */ H({
  name: "VISelectV2",
  emits: ["focus", "blur", "update:modelValue", "handleSelected", "handleClear", "mouseenter", "mouseleave"],
  props: $e,
  directives: {
    css: le
  },
  components: {
    "vi-select-v2-input": ft,
    "vi-select-v2-drop-down": vt,
    "vi-scroll-bar": St,
    "vi-select-v2-tag": wt,
    "vi-select-v2-svg-icon": be,
    "vi-select-v2-option": at
  },
  setup(e, t) {
    var G;
    const i = "onUpdate:modelValue" in (((G = Se()) == null ? void 0 : G.vnode.props) || {}), u = () => "xxxxxxxx".replace(/[xy]/g, function(o) {
      var p = 0 | 16 * Math.random(), C = o == "x" ? p : 8 | 3 & p;
      return C.toString(16);
    }), l = T(), h = T(), v = T(), n = q({
      uuid: u(),
      dropDownVisible: !1,
      dialogVisible: !1,
      softFocus: !1,
      currentSelectLabel: "",
      OptionList: {},
      list: [],
      __inputPlaceholder: "",
      searchLabel: "",
      searchValue: ""
    }), S = "M955.069071 864.311021 740.015134 649.258107c-3.752464-3.751441-8.841366-5.860475-14.149255-5.860475-5.306866 0-10.395768 2.108011-14.149255 5.860475l-16.692171 16.692171-38.34226-38.34226c53.03796-59.810201 85.298711-138.442072 85.298711-224.478588 0-186.774871-151.952784-338.727655-338.727655-338.727655S64.527642 216.35456 64.527642 403.12943c0 186.775894 151.952784 338.728678 338.727655 338.728678 86.36909 0 165.276231-32.510438 225.170343-85.913718l38.303374 38.303374-17.34504 17.34504c-7.812943 7.813966-7.812943 20.48352 0 28.297486l215.051891 215.052914c3.753487 3.751441 8.841366 5.860475 14.149255 5.860475 5.306866 0 10.395768-2.108011 14.149255-5.860475l62.334697-62.334697C962.883037 884.794541 962.883037 872.124987 955.069071 864.311021zM104.546078 403.12943c0-164.709319 133.9999-298.709219 298.709219-298.709219s298.709219 133.9999 298.709219 298.709219S567.964616 701.839673 403.255297 701.839673 104.546078 567.838749 104.546078 403.12943zM878.585119 912.496463 691.829691 725.741036l34.036187-34.036187 186.755428 186.755428L878.585119 912.496463z", y = {
      popperHeight: "0",
      inputLineHeight: "0"
    }, d = function(o) {
      let p = !1;
      const C = o.path || o.composedPath && o.composedPath();
      for (let M = 0; M < C.length; M++) {
        const P = C[M];
        if (P.classList && P.classList.value && P.getAttribute("class").includes("-select-v2") && P.dataset.id == n.uuid) {
          p = !0;
          break;
        }
      }
      p || g();
    };
    document.addEventListener("mousedown", d);
    const g = function() {
      n.dropDownVisible = !1, t.emit && t.emit("blur");
    }, x = function(o) {
      return new Promise((p, C) => {
        p(F(() => window.getComputedStyle(o.value)));
      });
    }, b = function(o) {
      e.mode == "single" ? t.emit && t.emit("handleSelected", o) : F(() => {
        t.emit && t.emit("handleSelected", {
          currentSelected: o,
          currentSelects: JSON.parse(JSON.stringify(e.modelValue))
        });
      });
    }, V = function(o) {
      delete n.OptionList[o];
    }, w = function(o) {
      if (o == "co1")
        return "";
      if (o == "auto" || o == "co2" || o == "co3" || o == "co4" || o == "co5" || o == "co6" || o == "co7")
        return "display:flex;flex-wrap: wrap;";
    }, O = function(o) {
      n.dropDownVisible = !n.dropDownVisible, t.emit && (n.dropDownVisible ? t.emit("focus") : t.emit("blur"));
    }, I = function(o) {
    }, J = function(o) {
    }, k = function() {
      t.emit && t.emit("handleClear");
    }, N = function() {
      t.emit && t.emit("mouseenter");
    }, $ = function() {
      t.emit && t.emit("mouseleave");
    }, R = function(o) {
      t.emit && t.emit("handleClear", o);
    }, B = function(o) {
      let p = o.target.value, C = {};
      n.list.forEach((M) => M.label.includes(p) ? C[M.value] = M.label : ""), n.searchValue = C, n.searchLabel = p, F(() => {
        Q.value;
      });
    };
    ce(() => e.list, () => {
      n.list = JSON.parse(JSON.stringify(e.list));
    }, {
      deep: !0,
      immediate: !0
    });
    const z = m({
      get() {
        return e.mode == "multiple" && (async () => {
          const {
            height: o
          } = await x(v);
          e.dynamicCss["input-line-height"] = o.replace("px", "") * 1, D.value = e.modelValue.length > 0 ? " " : e.placeholder, e.modelValue.length <= 1 && (e.dynamicCss["input-line-height"] = y.inputLineHeight);
        })(), e.modelValue;
      },
      set(o) {
        i && t.emit("update:modelValue", o);
      }
    }), K = m({
      get() {
        return n.currentSelectLabel;
      },
      set(o) {
        n.currentSelectLabel = o;
      }
    }), Q = m({
      get() {
        let o = Object.keys(n.OptionList).length;
        return o <= 5 && o > 0 ? n.searchValue || (e.search && o++, f.value["popper-height"] = f.value["popper-option-height"] * o + f.value["popper-padding"] * 2) : f.value["popper-height"] = y.popperHeight, n.OptionList;
      },
      set(o) {
        n.OptionList[o.value] = o.key;
      }
    }), Z = m({
      get() {
        return n.dropDownVisible;
      },
      set(o) {
        n.dropDownVisible = o;
      }
    }), D = m({
      get() {
        return n.__inputPlaceholder || e.placeholder;
      },
      set(o) {
        n.__inputPlaceholder = o;
      }
    }), c = m(() => e.clearable), r = m(() => e.mode), f = m(() => {
      let o = Object.assign($e.dynamicCss.default(), e.dynamicCss);
      return y.popperHeight = o["popper-height"], y.inputLineHeight = o["input-line-height"], o;
    }), L = m(() => e.mode == "multiple"), Y = m(() => !!e.searchImg);
    ve(pe, {
      selectRef: l,
      currentSelect: z,
      currentSelectLabel: K,
      mode: r,
      dynamicCss: f,
      dropDownVisible: Z,
      placeholder: D,
      cacheOptionList: Q,
      clearable: c,
      selectedFn: b,
      deleteOptionItem: V
    });
    const E = function(o) {
      return a(A("vi-select-v2-tag"), {
        tooltip: e.tooltip,
        label: o.label,
        value: o.value,
        height: f.value["tag-close-size"],
        width: f.value["tag-close-size"],
        onCloseClick: R
      }, null);
    }, W = function() {
      return a(A("vi-select-v2-input"), {
        iconHeight: f.value["input-icon-width"],
        iconWidth: f.value["input-icon-width"],
        ref: h,
        active: n.dropDownVisible,
        placeholder: D.value,
        onClick: O,
        onFocus: I,
        onBlur: J,
        onClear: k,
        onMouseenter: N,
        onMouseleave: $
      }, null);
    }, j = function() {
      return a("li", {
        class: ue("-search")
      }, [Y.value ? a("img", {
        class: ue("--search"),
        src: e.searchImg
      }, null) : a(A("vi-select-v2-svg-icon"), {
        class: ue("--search"),
        path: S
      }, null), a("input", {
        value: n.searchLabel,
        class: ue("-search__input"),
        placeholder: "请输入您要搜索的内容",
        onInput: B
      }, null)]);
    }, X = function() {
      return a(A("vi-select-v2-drop-down"), {
        active: n.dropDownVisible
      }, {
        default: () => [a(A("vi-scroll-bar"), {
          dynamicCss: f.value
        }, {
          default: () => {
            var o, p;
            return [a("ul", null, [e.search ? j() : "", n.searchValue ? a("div", {
              style: w(e.itemLayout),
              class: e.itemLayout
            }, [Object.keys(n.searchValue).map((C, M) => a(A("vi-select-v2-option"), {
              key: C,
              value: C,
              label: Object.values(n.searchValue)[M]
            }, null))]) : a("div", {
              style: w(e.itemLayout),
              class: e.itemLayout
            }, [(p = (o = t.slots).default) == null ? void 0 : p.call(o)]), Object.keys(Q.value).length <= 0 ? a("li", {
              class: ue("-notData")
            }, [Ve("暂无数据")]) : ""])];
          }
        })]
      });
    };
    return () => ee(a("div", {
      "data-id": n.uuid,
      class: [kt(ue())],
      ref: l
    }, [L.value ? a("div", {
      ref: v,
      class: ue("-taglist"),
      onClick: O
    }, [z.value.map((o) => E(o))]) : "", W(), X()]), [[re("css"), f.value || {}]]);
  }
}), Vt = ne(Mt, "select-v2"), Bt = ne(at, "select-v2-option"), Ye = {
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
}, me = Symbol("pagination"), {
  n: It,
  classes: Rt
} = _("pagination-prev"), Ee = /* @__PURE__ */ H({
  name: "VIPaginationPrev",
  emits: ["click"],
  setup(e, t) {
    let s = U(me);
    const i = m(() => s.currentPage.value <= 1), u = function(l) {
      i.value || t.emit("click", l);
    };
    return () => a("button", {
      type: "button",
      class: [Rt(It()), i.value ? "disabled" : ""],
      onClick: u.bind(this)
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
  n: Lt,
  classes: Pt
} = _("pagination-next"), je = /* @__PURE__ */ H({
  name: "VIPaginationNext",
  emits: ["click"],
  setup(e, t) {
    let s = U(me);
    const i = m(() => s.currentPage.value >= s.pageCount.value), u = function(l) {
      i.value || t.emit("click", l);
    };
    return () => a("button", {
      type: "button",
      class: [Pt(Lt()), i.value ? "disabled" : ""],
      onClick: u.bind(this)
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
  n: ae
} = _("pagination-pager"), Fe = /* @__PURE__ */ H({
  name: "VIPaginationPager",
  emits: ["click"],
  setup(e, t) {
    let {
      currentPage: s,
      pagerCount: i,
      pageCount: u
    } = U(me);
    const l = q({
      quickPrevBtnIsHover: !1,
      quickNextBtnIsHover: !1
    }), h = {
      quickLeftArrow: "M62.56 511.904L485.952 88.256a48.64 48.64 0 0 1 68.736 68.736L199.616 512.064l356.8 356.8A48.64 48.64 0 0 1 487.68 937.6l-39.744-39.744 0.256-0.256L62.528 511.936z m388.8 0L874.752 88.256a48.64 48.64 0 0 1 68.736 68.736L588.416 512.064l356.8 356.8A48.64 48.64 0 0 1 876.48 937.6l-39.776-39.744 0.288-0.256-385.664-385.664z",
      quickRightArrow: 'M948.064 513.056L536.064 925.312a47.296 47.296 0 0 1-66.88-66.88l345.504-345.504L467.52 165.76a47.296 47.296 0 0 1 66.88-66.88l38.688 38.688-0.256 0.256 375.264 375.264m-378.336-0.032L157.76 925.312a47.296 47.296 0 0 1-66.88-66.88l345.472-345.504L89.184 165.76a47.296 47.296 0 0 1 66.88-66.88l38.688 38.688-0.256 0.256 375.264 375.264"',
      ellipsis: "M110.336 572.330667a85.333333 85.333333 0 1 0 120.661333-120.661334 85.333333 85.333333 0 0 0-120.661333 120.661334zM451.669333 572.330667a85.333333 85.333333 0 1 0 120.661334-120.661334 85.333333 85.333333 0 0 0-120.661334 120.661334zM793.002667 572.330667a85.333333 85.333333 0 1 0 120.661333-120.661334 85.333333 85.333333 0 0 0-120.661333 120.661334z"
    }, v = m(() => Math.floor(s.value / i.value) * i.value), n = m(() => i.value < u.value ? i.value : u.value - 1), S = m(() => y.value && d.value ? s.value : !1), y = m(() => u.value <= i.value ? 0 : s.value >= i.value - 2), d = m(() => u.value <= i.value ? 0 : s.value < u.value - i.value + 4), g = m(() => u.value > 1), x = function(k) {
      t.emit("click", k);
    }, b = (k) => l.quickPrevBtnIsHover = !0, V = (k) => l.quickPrevBtnIsHover = !1, w = (k) => l.quickNextBtnIsHover = !0, O = (k) => l.quickNextBtnIsHover = !1, I = (k) => s.value = s.value - i.value + 2, J = (k) => s.value = s.value + i.value - 2;
    return () => a("ul", {
      class: [ae()]
    }, [a("li", {
      class: [ae("_btn"), s.value == 1 ? "active" : ""],
      onClick: x.bind(this, 1)
    }, [1]), y.value ? a("li", {
      class: [ae("_btn"), "quickPrev"],
      onMouseenter: b,
      onMouseleave: V,
      onClick: I
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
      d: l.quickPrevBtnIsHover ? h.quickLeftArrow : h.ellipsis
    }, null)])]) : a("div", null, null), new Array(n.value).fill(S.value ? S.value : 0).map((k, N) => {
      let $ = s.value, R = Math.ceil((i.value - 2) / 2), B = N > 0 && N < i.value - 1, z = v.value;
      if (k > 0) {
        if (B)
          return k = N <= R ? k - R + N : k + N - R, a("li", {
            class: [ae("_btn"), $ == k ? "active" : ""],
            onClick: x.bind(this, k)
          }, [k]);
      } else if (B)
        return $ < i.value - 2 ? a("li", {
          class: [ae("_btn"), $ == z + N + 1 ? "active" : ""],
          onClick: x.bind(this, z + N + 1)
        }, [z + N + 1]) : a("li", {
          class: [ae("_btn"), $ == u.value - i.value + 1 + N ? "active" : ""],
          onClick: x.bind(this, u.value - i.value + 1 + N)
        }, [u.value - i.value + 1 + N]);
    }), d.value > 0 ? a("li", {
      class: [ae("_btn"), "quickNext"],
      onMouseenter: w,
      onMouseleave: O,
      onClick: J
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
      d: l.quickNextBtnIsHover ? h.quickRightArrow : h.ellipsis
    }, null)])]) : a("div", null, null), g.value ? a("li", {
      class: [ae("_btn"), s.value == u.value ? "active" : ""],
      onClick: x.bind(this, u.value)
    }, [u.value]) : ""]);
  }
}), {
  n: De,
  classes: Tt
} = _("pagination-jump"), We = /* @__PURE__ */ H({
  name: "VIPaginationJump",
  emits: ["jump-page"],
  setup(e, t) {
    let s = U(me);
    const i = q({
      num: ""
    }), u = T(), l = function(v) {
      (() => i.num = Math.random() * 1e6)();
      const S = Number(v.target.value);
      S <= 0 ? i.num = 1 : S > s.pageCount.value ? i.num = s.pageCount.value : i.num = S;
    }, h = function(v) {
      v.key == "Enter" && (u.value.blur(), F(() => t.emit("jump-page", i.num || 1)));
    };
    return () => a("div", {
      class: [Tt(De())]
    }, [a("span", null, [s.jumpLabel.value]), a("input", {
      ref: u,
      class: [De("_input")],
      value: i.num,
      type: "number",
      min: "1",
      tabindex: "0",
      autocomplete: "off",
      onChange: l.bind(this),
      onKeydown: h.bind(this)
    }, null)]);
  }
}), {
  n: ke,
  classes: Nt
} = _("pagination-total"), Xe = /* @__PURE__ */ H({
  name: "VIPaginationTotal",
  emits: ["click"],
  setup() {
    let {
      total: e,
      totalLabel: t
    } = U(me);
    return () => a("div", {
      class: [Nt(ke())]
    }, [a("span", {
      class: [ke("_label")]
    }, [t.value]), a("span", {
      class: [ke("_value")]
    }, [e.value])]);
  }
});
function _t(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !ut(e);
}
const {
  n: Ue,
  classes: Ht
} = _("pagination"), $t = /* @__PURE__ */ H({
  name: "VIPagination",
  props: Ye,
  directives: {
    css: le
  },
  emits: ["size-change", "update:modelValue", "current-change", "update:total"],
  components: {
    prev: Ee,
    pager: Fe,
    next: je,
    jump: We,
    total: Xe,
    "dw-select-v2": Vt,
    "dw-select-v2-option": Bt
  },
  setup(e, t) {
    var Z, D;
    const s = (c) => typeof c != "number", i = (c) => c instanceof Array, u = ((D = (Z = Se()) == null ? void 0 : Z.vnode) == null ? void 0 : D.props) || {}, l = "onUpdate:sizeChange" in u || "onUpdate:size-change" in u || "onSizeChange" in u, h = "onUpdate:currentPage" in u || "onUpdate:current-page" in u || "onUpdate:modelValue" in u || "onCurrentChange" in u, v = "update:total" in u;
    let n = 10, S = 1, y = 100;
    const d = q({
      select_curSelect: "",
      select_list: [],
      select_dynamicCss: {}
    }), g = function() {
      i(e.pageSize) && (d.select_list = e.pageSize.map((c) => ({
        value: c,
        label: c + "/page"
      })), d.select_curSelect = d.select_list[0].value);
    }, x = m(() => {
      let c = 0;
      return s(e.total) ? console.warn("total属性不合格") : c = Math.max(1, Math.ceil(e.total / V.value)), c;
    }), b = m(() => {
      let c = 0;
      return s(e.total) || (s(e.pagerCount) || (c = x.value > 7 ? Math.max(7, e.pagerCount % 2 == 0 ? e.pagerCount - 1 : e.pagerCount) : x.value), c > 29 && (c = 29)), c;
    }), V = m({
      get() {
        let c = s(e.pageSize) ? n : e.pageSize > 5 ? e.pageSize : 5;
        return c = i(e.pageSize) ? d.select_curSelect : c, c;
      },
      set(c) {
        s(e.pageSize) && (n = c), l && (e.modelValue > Math.ceil(e.total / c) && (w.value = Math.ceil(e.total / c)), F(() => {
          t.emit("size-change", {
            pageSize: c,
            currentPage: e.modelValue
          });
        }));
      }
    }), w = m({
      get() {
        return s(e.modelValue) ? S : e.modelValue;
      },
      set(c) {
        let r = c;
        c < 1 ? r = 1 : c > x.value && (r = x.value), h && (t.emit("update:modelValue", r), t.emit("current-change", r));
      }
    }), O = m({
      get() {
        return s(e.total) ? y : e.total;
      },
      set(c) {
        let r = c;
        c < 0 && (r = 0), y = r, v && t.emit("update:total", r);
      }
    }), I = m(() => e.totalLabel), J = m(() => e.jumpLabel), k = m(() => Object.assign(Ye.dynamicCss.default(), e.dynamicCss)), N = m(() => {
      let c = {};
      for (let r in k.value)
        r.includes("select-v2-") && (c[r.replace("select-v2-", "")] = k.value[r]);
      return c;
    }), $ = m(() => {
      let c = e.layout;
      const r = {
        total: !1,
        size: !1,
        prev: !1,
        next: !1,
        pager: !1,
        jump: !1
      };
      for (let f in r)
        r[f] = c.replace(/\s+/g, "").split(",").findIndex((L) => L == f) != -1;
      return r;
    });
    ve(me, {
      pageCount: x,
      pagerCount: b,
      pageSize: V,
      currentPage: w,
      total: O,
      totalLabel: I,
      jumpLabel: J
    }), oe(() => {
      g();
    }), ce(() => e.pageSize, () => {
      g();
    }, {
      deep: !0
    });
    const R = (c) => w.value = w.value - 1, B = (c) => w.value = w.value + 1, z = (c) => w.value = c, K = (c) => w.value = c, Q = function(c) {
      V.value = c.value;
    };
    return () => {
      let c;
      return ee(a("div", {
        class: [Ht(Ue()), e.background ? "bgbox" : ""]
      }, [$.value.total ? a(Xe, null, null) : "", $.value.size && i(e.pageSize) ? a(A("dw-select-v2"), {
        modelValue: d.select_curSelect,
        "onUpdate:modelValue": (r) => d.select_curSelect = r,
        dynamicCss: N.value,
        onHandleSelected: Q,
        class: Ue("-select")
      }, _t(c = d.select_list.map((r) => a(A("dw-select-v2-option"), {
        key: r.value,
        label: r.label,
        value: r.value
      }, null))) ? c : {
        default: () => [c]
      }) : "", $.value.prev ? a(Ee, {
        disabled: !1,
        onClick: R
      }, null) : "", $.value.pager ? a(Fe, {
        onClick: z
      }, null) : "", $.value.next ? a(je, {
        disabled: !1,
        onClick: B
      }, null) : "", $.value.jump ? a(We, {
        onJumpPage: K
      }, null) : ""]), [[re("css"), k.value || {}]]);
    };
  }
}), xo = ne($t, "pagination"), Be = {
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
}, Te = Symbol("radio"), { n: zt, classes: Ot } = _("radio"), At = H({
  name: "VIRadio",
  props: Be,
  emits: ["click", "update:modelValue", "change"],
  setup(e, t) {
    let s = U(Te, void 0);
    const i = (v) => {
      l.value || (s ? s.changeModelValue(v) : t.emit("update:modelValue", "on"));
    }, u = m({
      get() {
        return s ? e.value == s.currentSelect.value : e.modelValue;
      },
      set() {
      }
    }), l = m({
      get() {
        return !!e.disabled;
      },
      set() {
      }
    }), h = m({
      get() {
        return s ? s.currentSelect.value : e.modelValue;
      },
      set(v) {
        t.emit && t.emit("update:modelValue", v);
      }
    });
    return {
      n: zt,
      classes: Ot,
      handleClick: i,
      IsChecked: u,
      IsDisable: l,
      modelValueBridge: h
    };
  }
}), Ne = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [i, u] of t)
    s[i] = u;
  return s;
}, Yt = ["value", "checked", "disabled"];
function Et(e, t, s, i, u, l) {
  return Le(), Pe("div", {
    class: te([e.classes(e.n()), e.IsChecked ? e.n("active") : "", e.border ? e.n("border") : ""]),
    onClick: t[1] || (t[1] = (h) => e.handleClick(e.value))
  }, [
    de("div", {
      class: te([e.classes(e.n("_input__wrapper")), e.IsDisable ? "is-disabled" : ""])
    }, [
      ee(de("input", {
        class: te([e.classes(e.n("_input"))]),
        type: "radio",
        ref: "radioRef",
        value: e.value,
        checked: e.IsChecked,
        disabled: e.IsDisable,
        "onUpdate:modelValue": t[0] || (t[0] = (h) => e.modelValueBridge = h)
      }, null, 10, Yt), [
        [nt, e.modelValueBridge]
      ]),
      de("div", {
        class: te([e.classes(e.n("_circle"))])
      }, null, 2)
    ], 2),
    de("label", {
      class: te(e.classes(e.n("_label"), e.IsDisable ? "is-disabled" : ""))
    }, lt(e.label), 3)
  ], 2);
}
const jt = /* @__PURE__ */ Ne(At, [["render", Et]]), Ft = {
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
}, { n: Dt, classes: Wt } = _("radio-button"), Xt = H({
  name: "VIRadioButton",
  props: Ft,
  emits: ["click", "update:modelValue", "change"],
  setup(e, t) {
    let s = U(Te);
    const i = T(null), u = function(n) {
      h.value || (s ? s.changeModelValue(e.value) : t.emit("update:modelValue", "on"));
    }, l = m({
      get() {
        return s ? e.value == s.currentSelect.value : e.modelValue;
      },
      set() {
      }
    }), h = m({
      get() {
        return !!e.disabled;
      },
      set() {
      }
    }), v = m({
      get() {
        return s ? s.currentSelect.value : e.modelValue;
      },
      set(n) {
        t.emit && t.emit("update:modelValue", n);
      }
    });
    return {
      n: Dt,
      classes: Wt,
      handleClick: u,
      IsChecked: l,
      IsDisable: h,
      refRadioButton: i,
      modelValue: v
    };
  }
}), Ut = ["value", "checked", "disabled"];
function qt(e, t, s, i, u, l) {
  return Le(), Pe("div", {
    ref: "refRadioButton",
    class: te([e.classes(e.n()), e.IsChecked ? e.n("active") : "", e.border ? e.n("border") : ""]),
    onClick: t[1] || (t[1] = (...h) => e.handleClick && e.handleClick(...h))
  }, [
    ee(de("input", {
      class: te([e.classes(e.n("_input"))]),
      type: "radio",
      ref: "radioRef",
      value: e.value,
      checked: e.IsChecked,
      disabled: e.IsDisable,
      "onUpdate:modelValue": t[0] || (t[0] = (h) => e.modelValue = h)
    }, null, 10, Ut), [
      [nt, e.modelValue]
    ]),
    de("label", {
      class: te(e.classes(e.n("_label"), e.IsDisable ? "is-disabled" : ""))
    }, lt(e.label), 3)
  ], 2);
}
const Jt = /* @__PURE__ */ Ne(Xt, [["render", qt]]), { n: Gt, classes: Kt } = _("radio-group"), Qt = H({
  name: "VIRadioGroup",
  props: Be,
  emits: ["click", "update:modelValue", "change"],
  directives: { css: le },
  setup(e, t) {
    const s = (l = e.modelValue) => {
      t.emit("update:modelValue", l), F(() => t.emit("change", l));
    }, i = m({
      get() {
        return e.modelValue;
      },
      set(l) {
        t.emit && t.emit("update:modelValue", l);
      }
    }), u = m(() => Object.assign(Be.dynamicCss.default(), e.dynamicCss));
    return ve(Te, {
      currentSelect: i,
      changeModelValue: s
    }), {
      n: Gt,
      classes: Kt,
      dynamicCssBridge: u
    };
  }
});
function Zt(e, t, s, i, u, l) {
  const h = re("css");
  return ee((Le(), Pe("div", {
    class: te(e.classes(e.n()))
  }, [
    ct(e.$slots, "default")
  ], 2)), [
    [h, e.dynamicCssBridge || {}]
  ]);
}
const eo = /* @__PURE__ */ Ne(Qt, [["render", Zt]]), ko = ne(jt, "radio"), Mo = ne(Jt, "radio-button"), Vo = ne(eo, "radio-group"), qe = {
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
}, it = Symbol("time-picker"), {
  n: to,
  classes: oo
} = _("input-svg-icon"), no = /* @__PURE__ */ H({
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
    const s = function(i) {
      t.emit("click", i);
    };
    return () => a("svg", {
      class: [oo(to()), "icon"],
      height: e.height,
      width: e.width,
      viewBox: "0 0 1024 1024",
      xmlns: "http://www.w3.org/2000/svg",
      onClick: s
    }, [a("path", {
      fill: "currentColor",
      d: e.path
    }, null)]);
  }
}), Je = {
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
  n: Ge,
  classes: lo
} = _("timePickerInput"), ao = /* @__PURE__ */ H({
  name: "VITimePickerInput",
  emits: ["focus", "blur", "click", "update:modelValue", "close"],
  directives: {
    css: le
  },
  props: Je,
  components: {
    "vi-input-svg-icon": no
  },
  setup(e, t) {
    const s = "M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z", i = q({
      softFocus: !1,
      isHover: !1
    }), u = function(I) {
      w.value || t.emit("click", I);
    }, l = function(I) {
      w.value || (t.emit("update:modelValue", I.target.value), t.emit("close"), I.stopPropagation());
    }, h = function(I) {
      w.value || (t.emit("focus", I), i.softFocus = !0);
    }, v = function(I) {
      w.value || (t.emit("blur", I), i.softFocus = !1);
    }, n = function(I) {
      w.value || (i.isHover = !0);
    }, S = function(I) {
      w.value || (i.isHover = !1);
    }, y = function(I) {
      w.value || t.emit("update:modelValue", I.target.value);
    }, d = function(I) {
      w.value || t.emit("update:modelValue", I.target.value);
    }, g = m(() => Object.assign(Je.dynamicCss.default(), e.dynamicCss)), x = m(() => typeof e.readonly == "string" ? !0 : e.readonly), b = m(() => typeof e.clearable == "string" ? !0 : e.clearable), V = m(() => typeof e.showPassword == "string" ? !0 : e.showPassword), w = m(() => typeof e.disabled == "string" ? !0 : e.disabled), O = m(() => i.softFocus ? "active" : "");
    return () => ee(a("div", {
      class: [lo(Ge()), O.value, w.value ? "disabled" : ""],
      onClick: u,
      onMouseenter: n,
      onMouseleave: S
    }, [a("input", {
      class: [Ge("_inner")],
      placeholder: e.placeholder,
      onFocus: h,
      onBlur: v,
      readonly: x.value || w.value,
      value: e.modelValue,
      onChange: y,
      onInput: d,
      type: V.value ? "password" : "text"
    }, null), e.modelValue && b.value && i.isHover ? a(A("vi-input-svg-icon"), {
      class: "icon",
      height: g.value["input-icon-width"],
      width: g.value["input-icon-width"],
      path: s,
      onClick: l
    }, null) : ""]), [[re("css"), g.value || {}]]);
  }
}), {
  n: ye,
  classes: Ke
} = _("popper"), io = /* @__PURE__ */ H({
  name: "VITimePickerPopper",
  emits: ["focus", "blur", "click"],
  props: ["active"],
  setup(e, t) {
    let {
      timePickerRef: s
    } = U(it);
    const i = q({
      parentRect: {
        x: 0,
        y: 0,
        height: 0,
        width: 0
      },
      dropdownTop: "0"
    }), u = T(null), l = T(null), h = () => {
      F(() => {
        i.parentRect = s.value.getBoundingClientRect(), i.dropdownTop = i.parentRect.height + 10 + "px";
      });
    };
    return oe(() => h()), () => {
      var v, n;
      return a("div", {
        class: [ye(""), e.active ? "active" : ""],
        style: {
          top: i.dropdownTop
        }
      }, [a("div", {
        ref: u,
        class: [ye("_arrow")]
      }, [e.active]), a("div", {
        ref: l,
        class: [Ke(ye("_content"))]
      }, [a("div", {
        class: [Ke(ye("_inner"))]
      }, [(n = (v = t.slots).default) == null ? void 0 : n.call(v)])])]);
    };
  }
}), Qe = {
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
const ro = {
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
}, rt = Symbol("scroll-bar"), {
  n: so
} = _("scroll-bar__thumb"), uo = /* @__PURE__ */ H({
  name: "ScrollBar",
  emits: ["update:height", "update:width"],
  props: ro,
  setup(e, t) {
    const {
      thumbRatioY: s,
      thumbRatioX: i,
      thumbRatioYMaxRange: u,
      thumbRatioXMaxRange: l,
      wrapperInnerMaxiMoveProportionY: h,
      wrapperInnerMaxiMoveProportionX: v,
      scrollBarRef: n
    } = U(rt), S = T(), y = q({
      mouseMoving: !1
    });
    let d = 0, g = 0, x = 0, b = 0, V = 0, w = 0;
    const O = m({
      get() {
        return e.height;
      },
      set(R) {
        t.emit && t.emit("update:height", R);
      }
    }), I = m({
      get() {
        return e.width;
      },
      set(R) {
        t.emit && t.emit("update:width", R);
      }
    }), J = function(R) {
      if (R == "vertical") {
        let B = 0;
        const z = V;
        B = x < 0 ? z + Math.abs(x) : z - Math.abs(x), B < 0 && (B = 0), B > u.value && (B = u.value), n.value.scrollTop = Math.abs(h.value * B);
      } else if (R == "horizontal") {
        let B = 0;
        const z = w;
        B = b < 0 ? z + Math.abs(b) : z - Math.abs(b), B < 0 && (B = 0), B > l.value && (B = l.value), n.value.scrollLeft = Math.abs(v.value * B);
      }
    }, k = function(R) {
      y.mouseMoving = !0, V = Number(s.value.slice(11, -3)), w = Number(i.value.slice(11, -3)), d = Number(R.clientY), g = Number(R.clientX);
    }, N = function(R) {
      x = d - R.clientY, b = g - R.clientX, J(e.type);
    };
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", N), document.removeEventListener("mousedown", k), d = 0, g = 0, x = 0, b = 0, V = 0, w = 0, y.mouseMoving = !1;
    });
    const $ = (R) => {
      document.addEventListener("mousedown", k), document.addEventListener("mousemove", N);
    };
    return () => a("div", {
      class: so(),
      ref: S,
      style: {
        height: O.value,
        width: I.value,
        transform: e.type == "vertical" ? e.ratioY : e.ratioX
      },
      onMousedown: $
    }, null);
  }
}), {
  n: ge
} = _("scroll-bar"), co = /* @__PURE__ */ H({
  name: "ScrollBar",
  emits: ["update:width", "scroll"],
  directives: {
    css: le
  },
  props: Qe,
  components: {
    "scroll-bar-thumb": uo
  },
  setup(e, t) {
    let i = null;
    const u = (r) => {
      K();
    }, l = T(), h = T(), v = T(), n = q({
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
    let S = T(!1);
    ce(() => e.noResize, (r) => {
      r ? i == null || i.disconnect() : (i = new MutationObserver(u), F(() => {
        i.observe(h.value, {
          attributes: !0,
          childList: !0,
          subtree: !0
        });
      }));
    }, {
      immediate: !0
    });
    const y = m(() => Object.assign(Qe.dynamicCss.default(), e.dynamicCss)), d = m(() => e.height), g = m({
      get() {
        return n.cacheContainerWidth;
      },
      set(r) {
        n.cacheContainerWidth = r;
      }
    }), x = m({
      get() {
        return n.thumbHeight;
      },
      set(r) {
        n.thumbHeight = r;
      }
    }), b = m({
      get() {
        return n.thumbWidth;
      },
      set(r) {
        n.thumbWidth = r;
      }
    }), V = m({
      get() {
        return n.thumbRatioX;
      },
      set(r) {
        n.thumbRatioX = r;
      }
    }), w = m({
      get() {
        return n.thumbRatioY;
      },
      set(r) {
        n.thumbRatioY = r;
      }
    }), O = m(() => n.thumbRatioYMaxRange), I = m(() => n.thumbRatioXMaxRange), J = m(() => n.wrapperInnerMaxiMoveProportionY), k = m(() => n.wrapperInnerMaxiMoveProportionX), N = (r) => {
      n.thumbRatioY = `translateY(${String(n.thumbRatioYProportion * r) + "px"})`;
    }, $ = (r) => {
      n.thumbRatioX = `translateX(${String(n.thumbRatioXProportion * r) + "px"})`;
    }, R = (r) => {
      l.value.scrollTop = r;
    }, B = (r) => {
      l.value.scrollLeft = r;
    }, z = (r, f) => {
      R(r), B(f);
    }, K = (r) => {
      var f, L;
      n.wrapperInnerRealHeight = Number((f = h.value) == null ? void 0 : f.scrollHeight), n.wrapperInnerRealWidth = Number((L = h.value) == null ? void 0 : L.scrollWidth), n.wrapperInnerMaxiMoveRangeY = n.wrapperInnerRealHeight - Number(d.value.replace("px", "")), n.wrapperInnerMaxiMoveRangeX = n.wrapperInnerRealWidth - Number(g.value.replace("px", "")), n.thumbHeightProportion = Number(d.value.replace("px", "")) / n.wrapperInnerRealHeight, n.thumbWidthProportion = Number(g.value.replace("px", "")) / n.wrapperInnerRealWidth, n.thumbHeight = String(n.thumbHeightProportion * Number(d.value.replace("px", ""))) + "px", n.thumbWidth = String(n.thumbWidthProportion * Number(g.value.replace("px", ""))) + "px", n.thumbRatioYMaxRange = Number(d.value.replace("px", "")) - Number(n.thumbHeight.replace("px", "")), n.thumbRatioXMaxRange = Number(g.value.replace("px", "")) - Number(n.thumbWidth.replace("px", "")), n.thumbRatioYProportion = n.thumbRatioYMaxRange / n.wrapperInnerMaxiMoveRangeY, n.thumbRatioXProportion = n.thumbRatioXMaxRange / n.wrapperInnerMaxiMoveRangeX, n.wrapperInnerMaxiMoveProportionY = n.wrapperInnerMaxiMoveRangeY / n.thumbRatioYMaxRange, n.wrapperInnerMaxiMoveProportionX = n.wrapperInnerMaxiMoveRangeX / n.thumbRatioXMaxRange;
    };
    oe(() => {
      n.cacheContainerWidth = e.width, K();
    });
    const Q = (r) => {
      const f = r.target.scrollTop, L = r.target.scrollLeft;
      N(f), $(L), t.emit && t.emit("scroll", L, f);
    }, Z = () => {
      S.value = !0;
    }, D = () => {
      S.value = !1;
    };
    ve(rt, {
      height: d,
      thumbRatioY: w,
      thumbRatioX: V,
      thumbRatioYMaxRange: O,
      thumbRatioXMaxRange: I,
      wrapperInnerMaxiMoveProportionY: J,
      wrapperInnerMaxiMoveProportionX: k,
      scrollBarRef: l
    }), t.expose({
      setScrollTop: R,
      setScrollLeft: B,
      setScrollTo: z
    });
    const c = (r = he.VERTICAL) => {
      if (e.width === !1 || e.height === !1)
        return "";
      const f = n.wrapperInnerRealHeight, L = Number(e.height.replace("px", "")), Y = n.wrapperInnerRealWidth;
      if (r == "vertical")
        return L < f ? a(A("scroll-bar-thumb"), {
          ref: v,
          type: r,
          height: x.value,
          width: e.thumbWidth,
          ratioX: V.value,
          ratioY: w.value,
          class: S.value ? "show" : "hide"
        }, null) : "";
      if (r == "horizontal") {
        let E = Number(g.value.replace("px", ""));
        if (g.value == "auto") {
          const W = () => {
            g.value = "auto", F(() => {
              var j;
              E = Number((j = h.value) == null ? void 0 : j.clientWidth), g.value = E + "px", K();
            });
          };
          W(), window.onresize = () => W();
        } else if (g.value)
          return E < Y ? a(A("scroll-bar-thumb"), {
            ref: v,
            type: r,
            height: e.thumbWidth,
            width: b.value,
            ratioX: V.value,
            ratioY: w.value,
            class: S.value ? "show" : "hide"
          }, null) : "";
      }
    };
    return () => {
      var r, f;
      return ee(a("div", {
        class: ge(),
        style: {
          width: g.value
        },
        onMouseenter: Z,
        onMouseleave: D
      }, [a("div", {
        class: ge("_wrapper"),
        ref: l,
        style: {
          height: d.value,
          width: g.value
        },
        onScroll: Q
      }, [a("div", {
        class: ge("_view"),
        ref: h
      }, [(f = (r = t.slots).default) == null ? void 0 : f.call(r)])]), a("div", {
        class: [ge("_bar"), "horizontal"]
      }, [c(he.HORIZONTAL)]), a("div", {
        class: [ge("_bar"), "vertical"]
      }, [c(he.VERTICAL)])]), [[re("css"), y.value || {}]]);
    };
  }
}), po = ne(co, "scroll-bar"), {
  n: mo,
  classes: go
} = _("time-picker"), ho = /* @__PURE__ */ H({
  name: "VITimePicker",
  emits: ["click", "inputClick", "closeClick", "cancelClick", "okClick", "update:modelValue", "focus", "blur"],
  directives: {
    css: le
  },
  props: qe,
  components: {
    "vi-time-picker-input": ao,
    "vi-time-picker-popper": io,
    "vi-scroll-bar": po
  },
  setup(e, t) {
    const s = [null, null, null];
    let i = "";
    const u = (o) => o < 10 ? "0" + o : o + "", l = (o) => {
      const p = o.match(/^(\d{1,2}):(\d{1,2}):(\d{1,2})$/);
      return p || console.warn("初始化数据格式不符合规范,已被清空！"), p;
    }, h = () => "xxxxxxxx".replace(/[xy]/g, function(o) {
      var p = 0 | 16 * Math.random(), C = o == "x" ? p : 8 | 3 & p;
      return C.toString(16);
    }), v = T();
    let n = T(), S = T(), y = T();
    const d = q({
      uuid: h(),
      popperVisible: !1,
      softFocus: !1,
      isSubmit: !1,
      hourList: [],
      minuteList: [],
      secondList: [],
      currentSelect: ["", "", ""]
    }), g = function() {
      d.popperVisible = !1, d.softFocus = !1;
    }, x = function(o) {
      let p = !1;
      const C = o.path || o.composedPath && o.composedPath();
      for (let M = 0; M < C.length; M++) {
        const P = C[M];
        if (P.classList && P.classList.value && P.getAttribute("class").includes("-time-picker") && P.dataset.id == d.uuid) {
          p = !0;
          break;
        }
      }
      p || (g(), d.isSubmit = !0);
    };
    document.addEventListener("mousedown", x);
    const b = function(o) {
      t.emit && t.emit("focus");
    }, V = function(o) {
      t.emit && t.emit("blur");
    }, w = function() {
      t.emit && t.emit("click");
    }, O = function(o) {
      d.popperVisible = !d.popperVisible, d.isSubmit = !1, e.modelValue || c(), t.emit && t.emit("inputClick");
    }, I = function() {
      d.popperVisible = !1, t.emit && t.emit("closeClick");
    }, J = function(o) {
      const {
        type: p
      } = o.target.dataset;
      d.popperVisible = !1, p == "cancel" ? (d.isSubmit = !1, t.emit && t.emit("update:modelValue", i), t.emit && t.emit("cancelClick"), D()) : p == "ok" && (d.isSubmit = !0, t.emit && t.emit("okClick", d.currentSelect));
    }, k = function(o, p) {
      const C = {
        index: {
          hour: "0",
          minute: "1",
          second: "2"
        },
        ref: {
          hour: n,
          minute: S,
          second: y
        }
      }, {
        num: M,
        disabled: P
      } = p.dataset;
      if (M) {
        if (P == "true")
          return;
        d.currentSelect[C.index[o]] = M;
        const se = Number(d.currentSelect[C.index[o]]) * Number(f.value["popper-spinner-number-height"]);
        C.ref[o].value.setScrollTop(se);
      }
    }, N = function(o) {
      k("hour", o.target);
    }, $ = function(o) {
      k("minute", o.target);
    }, R = function(o) {
      k("second", o.target);
    }, B = function(o, p) {
      const C = {
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
      let P = Math.round(o / Number(f.value["popper-spinner-number-height"]));
      if (e[C.ableRange[p]].filter((st) => st == P).length > 0)
        return;
      d.currentSelect[C.timers[p]] = u(P);
      let Ce = P * Number(f.value["popper-spinner-number-height"]);
      s[C.timers[p]] && (clearTimeout(s[C.timers[p]]), s[C.timers[p]] = null), s[C.timers[p]] = setTimeout(() => {
        p == "hour" && n.value.setScrollTop(Ce), p == "minute" && S.value.setScrollTop(Ce), p == "second" && y.value.setScrollTop(Ce);
      }, 200);
    }, z = function(o, p) {
      B(p, "hour");
    }, K = function(o, p) {
      B(p, "minute");
    }, Q = function(o, p) {
      B(p, "second");
    }, Z = () => {
      d.hourList = new Array(24).fill(0).map((o, p) => p < 10 ? "0" + p : p + ""), d.minuteList = new Array(60).fill(0).map((o, p) => p < 10 ? "0" + p : p + ""), d.secondList = new Array(60).fill(0).map((o, p) => p < 10 ? "0" + p : p + "");
    }, D = function() {
      i && (n.value.setScrollTop(Number(i.slice(0, 2)) * Number(f.value["popper-spinner-number-height"])), S.value.setScrollTop(Number(i.slice(3, 5)) * Number(f.value["popper-spinner-number-height"])), y.value.setScrollTop(Number(i.slice(6, 8)) * Number(f.value["popper-spinner-number-height"])));
    }, c = () => {
      const o = new Date(), p = o.getHours(), C = o.getMinutes(), M = o.getSeconds();
      d.currentSelect[0] = u(p), d.currentSelect[1] = u(C), d.currentSelect[2] = u(M), n.value.setScrollTop(Number(d.currentSelect[0]) * Number(f.value["popper-spinner-number-height"])), S.value.setScrollTop(Number(d.currentSelect[1]) * Number(f.value["popper-spinner-number-height"])), y.value.setScrollTop(Number(d.currentSelect[2]) * Number(f.value["popper-spinner-number-height"])), t.emit && t.emit("update:modelValue", d.currentSelect[0] + ":" + d.currentSelect[1] + ":" + d.currentSelect[2]);
    }, r = function() {
      if (e.modelValue && l(e.modelValue)) {
        const o = e.modelValue.split(":"), p = e.disabledHours.findIndex((P) => P == o[0]) != -1, C = e.disabledMinutes.findIndex((P) => P == o[1]) != -1, M = e.disabledSeconds.findIndex((P) => P == o[2]) != -1;
        if (p || C || M)
          return console.warn("输入的值包含禁用项,已被清空"), t.emit && t.emit("update:modelValue", ""), !0;
      }
      return !1;
    };
    dt(() => {
      if (e.modelValue && l(e.modelValue) && !r()) {
        const o = e.modelValue.split(":");
        d.currentSelect[0] = o[0], d.currentSelect[1] = o[1], d.currentSelect[2] = o[2], i = e.modelValue;
      }
    }), oe(() => {
      Z(), F(() => {
        D();
      });
    });
    const f = m(() => Object.assign(qe.dynamicCss.default(), e.dynamicCss)), L = m(() => {
      const o = {};
      for (const p in f.value)
        p.includes("input") && (o[p] = f.value[p]);
      return o;
    }), Y = m({
      get() {
        return r(), e.modelValue;
      },
      set(o) {
        t.emit && t.emit("update:modelValue", o);
      }
    }), E = m(() => e.clearable), W = function(o, p) {
      const C = {
        hour: "disabledHours",
        minute: "disabledMinutes",
        second: "disabledSeconds"
      };
      let M = !1;
      return e[C[o]].forEach((P) => P == p ? M = !0 : ""), M;
    }, j = m(() => function(o) {
      return W("hour", o);
    }), X = m(() => function(o) {
      return W("minute", o);
    }), G = m(() => function(o) {
      return W("second", o);
    });
    return fe(() => {
      const o = d.currentSelect[0], p = d.currentSelect[1], C = d.currentSelect[2];
      if (!o && !p && !C) {
        t.emit && t.emit("update:modelValue", "");
        return;
      }
      const M = o + ":" + p + ":" + C;
      t.emit && t.emit("update:modelValue", M);
    }), fe(() => {
      d.isSubmit && (i = e.modelValue, t.emit && t.emit("update:modelValue", i));
    }), ve(it, {
      timePickerRef: v
    }), () => ee(a("div", {
      ref: v,
      "data-id": d.uuid,
      class: [go(mo())],
      onClick: w
    }, [a(A("vi-time-picker-input"), {
      placeholder: e.placeholder,
      modelValue: Y.value,
      "onUpdate:modelValue": (o) => Y.value = o,
      onFocus: b,
      onBlur: V,
      onClose: I,
      dynamicCss: L.value || {},
      clearable: E.value,
      readonly: !0,
      onClick: O
    }, null), a(A("vi-time-picker-popper"), {
      active: d.popperVisible
    }, {
      default: () => [a("div", {
        class: "time-panel"
      }, [a("div", {
        class: "time-panel__content"
      }, [a(A("vi-scroll-bar"), {
        ref: n,
        class: "time-panel__spinner time-panel__popper-spinner--hour",
        onScroll: z,
        height: Number(f.value["popper-spinner-number-height"]) * 6 + "px"
      }, {
        default: () => [a("ul", {
          onClick: N
        }, [d.hourList.map((o) => a("li", {
          "data-num": o,
          "data-disabled": j.value(Number(o)),
          class: [d.currentSelect[0] == o ? "active" : "", j.value(Number(o)) ? "disabled" : ""]
        }, [o]))])]
      }), a(A("vi-scroll-bar"), {
        ref: S,
        class: "time-panel__spinner time-panel__popper-spinner--minutes",
        onScroll: K,
        height: Number(f.value["popper-spinner-number-height"]) * 6 + "px"
      }, {
        default: () => [a("ul", {
          onClick: $
        }, [d.minuteList.map((o) => a("li", {
          "data-num": o,
          "data-disabled": X.value(Number(o)),
          class: [d.currentSelect[1] == o ? "active" : "", X.value(Number(o)) ? "disabled" : ""]
        }, [o]))])]
      }), a(A("vi-scroll-bar"), {
        ref: y,
        class: "time-panel__spinner time-panel__popper-spinner--second",
        onScroll: Q,
        height: Number(f.value["popper-spinner-number-height"]) * 6 + "px"
      }, {
        default: () => [a("ul", {
          onClick: R
        }, [d.secondList.map((o) => a("li", {
          "data-num": o,
          "data-disabled": G.value(Number(o)),
          class: [d.currentSelect[2] == o ? "active" : "", G.value(Number(o)) ? "disabled" : ""]
        }, [o]))])]
      })]), a("div", {
        class: "time-panel__footer",
        onClick: J
      }, [a("div", {
        "data-type": "cancel",
        class: "time-panel__footer_cancel"
      }, [Ve("取消")]), a("div", {
        "data-type": "ok",
        class: "time-panel__footer_ok"
      }, [Ve("确认")])])])]
    })]), [[re("css"), f.value || {}]]);
  }
}), Bo = ne(ho, "time-picker");
var _e = /* @__PURE__ */ ((e) => (e.AUTHROLL = "autoRoll", e.HANDMOVE = "handRoll", e))(_e || {});
const Ze = {
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
    default: 8
  },
  rollCount: {
    type: [Number],
    default: 1
  },
  attractShowCount: {
    type: Array,
    default: [3, 4]
  },
  rollType: {
    type: String,
    default: "autoRoll",
    validator: function(e) {
      return Object.values(_e).includes(e);
    }
  },
  loopTime: {
    type: Number,
    default: 1e3 * 2
  },
  scrollTransition: {
    type: Number,
    default: 1e3 * 0.8
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
      "box-wid": "800",
      "pin-hei": "80",
      "pin-radius": "4",
      "pin-dire-b": "120",
      "pin-bg-color-style": "double",
      "pin-bg-color-to": "#00DEFF",
      "pin-bg-color-from": "#FFFFFF",
      "pin-bg-color-angle": "135",
      "pin-bg-color-value": "#49a3cb",
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
      "tr-focus-bg-color-style": "single",
      "tr-focus-bg-color-to": "#00DEFF",
      "tr-focus-bg-color-from": "#FFFFFF",
      "tr-focus-bg-color-angle": "135",
      "tr-focus-bg-color-value": "rgb(211, 228, 242)",
      "tr-un-focus-bg-color": "rgb(235, 235, 235)",
      "td-pad-lr": "20",
      "td-pad-tb": "0",
      "longText-txt-gap": "30",
      "longText-sco-ani-name": "longTextScrollAnimation",
      "longText-sco-ani-dura": "15"
    })
  }
}, { n: fo } = _(""), vo = (e = fo()) => e + "xxxxxxxx".replace(/[xy]/g, function(t) {
  var s = 0 | 16 * Math.random(), i = t == "x" ? s : 8 | 3 & s;
  return i.toString(16);
});
class bo {
  constructor(t = [], s = 7) {
    this.list = t, this.severalGroups = s, this.windowSliding = new Array(this.severalGroups).fill(0).map((i, u) => u);
  }
  take(t) {
    return this.Sliding(t), this.show();
  }
  show() {
    return this.windowSliding.map((t) => this.list[t]);
  }
  Sliding(t) {
    this.windowSliding = this.windowSliding.map((s) => {
      const i = this.list.length, u = s + t;
      return u <= i - 1 ? u : u - i;
    });
  }
}
const Ie = function(e) {
  const t = e instanceof Array ? [] : {};
  for (let s in e)
    t[s] = typeof e[s] == "object" ? Ie(e[s]) : e[s];
  return t;
};
function wo(e, t = "top", s, i, u) {
  const l = t == "top" ? e.scrollTop : t == "left" ? e.scrollLeft : 0, h = s - l, v = performance.now();
  function n() {
    const d = performance.now() - v, g = S(
      d,
      l,
      h,
      i
    );
    t == "top" ? e.scrollTop = g : t == "left" && (e.scrollLeft = g), d < i ? requestAnimationFrame(n) : u && u();
  }
  function S(y, d, g, x) {
    return y /= x / 2, y < 1 ? g / 2 * y * y + d : (y--, -g / 2 * (y * (y - 2) - 1) + d);
  }
  requestAnimationFrame(n);
}
function Re() {
  let e = new Date().getTime();
  return typeof performance < "u" && typeof performance.now == "function" && (e += performance.now()), "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    (s) => {
      const i = (e + Math.random() * 16) % 16 | 0;
      return e = Math.floor(e / 16), (s === "x" ? i : i & 3 | 8).toString(16);
    }
  );
}
function yo(e) {
  const t = {};
  return e.map((s) => {
    const { __id: i, ...u } = s, l = JSON.stringify(u);
    if (!t[l])
      return t[l] = !0, s;
    const h = Re();
    return { ...s, __id: h };
  });
}
const {
  n: et
} = _("long-text"), tt = {
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
      "txt-gap": "22",
      "sco-ani-name": "longTextScrollAnimation",
      "sco-ani-dura": "10"
    })
  }
}, ot = /* @__PURE__ */ H({
  name: "LongText",
  emits: ["update:text"],
  props: tt,
  directives: {
    css: le
  },
  setup(e, t) {
    var d;
    const i = "onUpdate:modelValue" in (((d = Se()) == null ? void 0 : d.vnode.props) || {}), u = T(null), l = T(null), h = T(null), v = T(null), n = q({
      isScroll: !0,
      toolTip_x: 0,
      toolTip_y: 0,
      toolTip_content: "盎司附近拉萨解放了卡JFK垃圾地方"
    }), S = m(() => Object.assign(tt.dynamicCss.default(), e.dynamicCss)), y = m({
      get() {
        return n.isScroll = !0, e.text;
      },
      set(g) {
        i && t.emit("update:text", g);
      }
    });
    return oe(() => {
      fe(() => {
        F(() => {
          const g = u.value.clientWidth, b = h.value.offsetWidth;
          g >= b && (n.isScroll = !1);
        });
      });
    }), () => ee(a("div", {
      class: [et(""), "tooltip"],
      "data-tooltip": "这是一个 tooltip",
      ref: u
    }, [a("div", {
      class: et("_scroll"),
      ref: l
    }, [a("span", {
      ref: h,
      class: n.isScroll ? "startAnimation" : ""
    }, [y.value]), n.isScroll ? a("span", null, [a("span", {
      class: "seizeASeat"
    }, null), a("span", {
      ref: v,
      class: "startAnimation"
    }, [y.value]), a("span", {
      class: "seizeASeat"
    }, null)]) : ""])]), [[re("css"), S.value || {}]]);
  }
}), {
  n: ie
} = _("roll-list"), So = /* @__PURE__ */ H({
  name: "RollList",
  emits: ["update:modelValue", "rowClick"],
  directives: {
    css: le
  },
  props: Ze,
  components: {
    LongText: ot
  },
  setup(e, t) {
    var D;
    const i = "onUpdate:modelValue" in (((D = Se()) == null ? void 0 : D.vnode.props) || {}), u = q({
      uuid: vo(ie("-")),
      takeFlag: !1,
      rotationTimer: null,
      getInventedListDataBridgeInit: !1
    }), l = T(null), h = T();
    let v = 0, n = !1, S = null;
    const y = {
      longText: "longText"
    }, d = (c) => {
      c.preventDefault();
    }, g = m(() => Object.assign(Ze.dynamicCss.default(), e.dynamicCss)), x = m(() => {
      let c = {};
      for (let r in g.value)
        r.includes("longText") && (c[r.replace("longText-", "")] = g.value[r]);
      return c;
    }), b = m(() => e.header), V = () => {
      var c;
      for (let r = 0; r < ((c = h.value) == null ? void 0 : c.children.length); r++) {
        const f = h.value.children[r], {
          attractShowCount: L,
          header: Y,
          tmp_scaleRule: E
        } = e;
        if (L.includes(r))
          if (g.value["tr-focus-bg-color-style"] == "double") {
            const X = g.value["tr-focus-bg-color-angle"], G = g.value["tr-focus-bg-color-from"], o = g.value["tr-focus-bg-color-to"];
            f.style.background = `linear-gradient(${X}deg,${G},${o})`;
          } else
            f.style.background = g.value["tr-focus-bg-color-value"];
        else
          f.style.background = g.value["tr-un-focus-bg-color"];
        Array.from(f.children).forEach((j, X) => {
          j.style.flexBasis = Y[X].basis + "%", L.includes(r) ? j.style.transform = `scale(${E[0]})` : j.style.transform = `scale(${E[1]})`;
        });
      }
    }, w = () => {
      if (u.rotationTimer && (clearInterval(u.rotationTimer), u.rotationTimer = null), e.rollType == _e.AUTHROLL) {
        if (n)
          return;
        u.rotationTimer = O.value.length > e.showCount && setInterval(() => {
          F(() => {
            k();
          });
        }, e.loopTime);
      }
    }, O = m({
      get() {
        const c = e.modelValue.map((r, f) => (r.__id = Re(), r.__uniqueness = Re(), r));
        return S = new bo(Ie(c), e.showCount * 2), F(() => {
          V();
        }), c;
      },
      set(c) {
        i && t.emit("update:modelValue", c);
      }
    }), I = m(() => {
      if (u.takeFlag = !u.takeFlag, e.modelValue.length > e.showCount) {
        const c = u.getInventedListDataBridgeInit ? e.rollCount : (u.getInventedListDataBridgeInit = !0) && 0;
        return yo(S.take(c));
      } else
        return new Array(e.modelValue.length).fill(0).map((c, r) => O.value[r]);
    }), J = m(() => {
      let c = O.value.length;
      const r = Number(e.itemHeight.replace("px", "")), f = c <= e.showCount ? c : e.showCount;
      return r * f + "px";
    });
    oe(() => {
      w(), ce(() => e.rollType, () => w()), ce(() => e.loopTime, () => w()), ce(() => O.value, () => {
        w();
      });
    }), Me(() => {
    });
    const k = () => {
      var L;
      const c = l == null ? void 0 : l.value, r = e.rollCount <= e.showCount ? e.rollCount : e.showCount, f = c.scrollHeight - c.clientHeight;
      v = v + f / e.showCount * r;
      for (let Y = 0; Y < ((L = h.value) == null ? void 0 : L.children.length); Y++) {
        const E = h.value.children[Y], {
          attractShowCount: W,
          header: j,
          tmp_scaleRule: X
        } = e, G = W.map((o) => o + r).includes(Y);
        if (G)
          if (g.value["tr-focus-bg-color-style"] == "double") {
            const p = g.value["tr-focus-bg-color-angle"], C = g.value["tr-focus-bg-color-from"], M = g.value["tr-focus-bg-color-to"];
            E.style.background = `linear-gradient(${p}deg,${C},${M})`;
          } else
            E.style.background = g.value["tr-focus-bg-color-value"];
        else
          E.style.background = g.value["tr-un-focus-bg-color"];
        Array.from(E.children).forEach((o, p) => {
          o.style.flexBasis = j[p].basis + "%", G ? o.style.transform = `scale(${X[0]})` : o.style.transform = `scale(${X[1]})`;
        });
      }
      wo(c, "top", v, e.scrollTransition, () => {
        u.takeFlag = !u.takeFlag, c.scrollTop = 0, v = 0, F(() => {
          V();
        });
      });
    }, N = () => {
      n = !0, u.rotationTimer && (clearInterval(u.rotationTimer), u.rotationTimer = null);
    }, $ = () => {
      n = !1, w();
    }, R = function(c) {
      t.emit && t.emit("rowClick", c);
    };
    Me(() => {
      N(), u.rotationTimer = null;
    });
    const B = () => {
      if (!g.value["pin-bg-color-style"])
        return "";
      let c = "none";
      if (g.value["pin-bg-color-style"] == "double") {
        const f = g.value["pin-bg-color-angle"], L = g.value["pin-bg-color-from"], Y = g.value["pin-bg-color-to"];
        c = `linear-gradient(${f}deg,${L},${Y})`;
      } else
        c = g.value["pin-bg-color-value"];
      return a("div", {
        class: ie("_pinSth"),
        style: {
          background: c
        }
      }, null);
    }, z = () => e.showHeader ? a("div", {
      class: ie("_th")
    }, [b.value.map((c) => a("div", {
      class: ie("_td"),
      style: {
        flexBasis: c.basis + "%"
      }
    }, [c.label]))]) : "", K = () => a("div", {
      ref: l,
      onWheel: d,
      class: ie("_scroll"),
      style: {
        height: J.value
      }
    }, [a("ul", {
      ref: h,
      class: ie("_wrapper")
    }, [I.value.map((c) => Q(c))])]), Q = (c) => a("li", {
      key: c.__id,
      style: {
        height: e.itemHeight
      },
      onClick: R.bind(this, c)
    }, [e.header.map((r, f) => Z(c, r, f))]), Z = (c, r, f) => {
      var Y, E, W, j, X, G, o, p, C, M, P, se;
      let L = {};
      return r.longText && ((Y = r == null ? void 0 : r.longText) != null && Y.speed && (L["sco-ani-dura"] = r.longText.speed), (E = r.longText) != null && E.GPUSpee && (L["sco-ani-name"] = ((W = r == null ? void 0 : r.longText) == null ? void 0 : W.GPUSpee) == !0 ? "longTextScrollxAnimation3d" : "longTextScrollxAnimation"), ((j = r.longText) != null && j.txtGap || Number(r.longText.txtGap) == 0) && (L["txt-gap"] = r.longText.txtGap)), a("div", {
        class: [ie("_td")]
      }, [a("div", {
        class: [y[(X = b.value[f]) == null ? void 0 : X.type]],
        style: {
          color: c[r.prop] ? (G = r.fo) == null ? void 0 : G.color : "none",
          fontSize: c[r.prop] ? ((o = r.fo) == null ? void 0 : o.size) + "px" : "auto",
          fontWeight: c[r.prop] ? (p = r.fo) == null ? void 0 : p.weight : "0",
          fontFamily: c[r.prop] ? (C = r.fo) == null ? void 0 : C.style : "none"
        }
      }, [(M = b.value[f]) != null && M.type && ((P = b.value[f]) == null ? void 0 : P.type) == "longText" ? a(ot, {
        style: {
          padding: "0 1px"
        },
        text: c[r.prop] || "undefined",
        speed: c[r.prop] ? (se = r.longText) == null ? void 0 : se.speed : !1,
        dynamicCss: Object.assign(Ie(x.value), L)
      }, null) : c[r.prop] || "undefined"])]);
    };
    return () => ee(a("div", {
      class: ie(),
      onMouseenter: N,
      onMouseleave: $
    }, [B(), z(), K()]), [[re("css"), g.value || {}]]);
  }
}), Io = ne(So, "roll-list");
export {
  xo as Pagination,
  ko as Radio,
  Mo as RadioButton,
  Vo as RadioGroup,
  Io as RollList,
  po as ScrollBar,
  Vt as SelectV2,
  Bt as SelectV2Option,
  Bo as TimePicker
};
