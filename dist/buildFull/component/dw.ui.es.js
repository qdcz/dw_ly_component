import { defineComponent as $, createVNode as a, inject as X, reactive as U, computed as p, resolveComponent as A, ref as T, onMounted as oe, watchEffect as ce, nextTick as J, watch as ye, onUnmounted as Ve, getCurrentInstance as Se, provide as ge, withDirectives as ee, resolveDirective as re, createTextVNode as Me, isVNode as st, openBlock as Re, createElementBlock as Le, normalizeClass as te, createElementVNode as ue, vModelRadio as ot, toDisplayString as nt, renderSlot as ut, onBeforeMount as ct } from "vue";
const ne = (e, t) => (e.install = function(s) {
  if (e) {
    const i = e.name || e.__name;
    if (i || t) {
      const r = t ? `dw-${t}` : "dw-" + i.replace(/dw/gi, "").toLowerCase();
      s.component(r, e);
    } else
      console.error(e, t, !t);
  }
}, e), dt = (e) => Array.isArray(e);
function _(e) {
  const t = `vi-${e}`;
  return {
    n: (r) => r ? r.startsWith("-") ? `${t}${r}` : `${t}_${r}` : t,
    classes: (...r) => r.map((l) => {
      if (dt(l)) {
        const [h, v, n = null] = l;
        return h ? v : n;
      }
      return l;
    })
  };
}
const de = Symbol("select-v2"), _e = function(e, t) {
  for (let [s, i] of Object.entries(t.value))
    e.style.setProperty("--" + s, i);
}, le = {
  mounted(e, t) {
    _e(e, t);
  },
  updated(e, t) {
    _e(e, t);
  },
  install(e) {
    e.directive("Css", this);
  }
}, He = {
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
  n: pt,
  classes: mt
} = _("select-v2-svg-icon"), ve = /* @__PURE__ */ $({
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
    const s = function(r) {
      t.emit("click", r);
    }, i = function() {
      return a("svg", {
        class: [mt(pt()), "icon"],
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
  n: $e,
  classes: ht
} = _("select-v2-input"), gt = /* @__PURE__ */ $({
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
      currentSelect: s,
      clearable: i,
      cacheOptionList: r,
      mode: l
    } = X(de), h = "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z", v = "M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z", n = U({
      isHover: !1
    }), C = function(S) {
      t.emit("click", S);
    }, y = function(S) {
      s.value = "", t.emit("clear"), S.stopPropagation();
    }, u = function(S) {
      t.emit("focus", S);
    }, b = function(S) {
      t.emit("blur", S);
    }, x = function(S) {
      n.isHover = !0, t.emit("mouseenter");
    }, w = function(S) {
      n.isHover = !1, t.emit("mouseleave");
    }, M = p(() => r.value[s.value]);
    return () => a("div", {
      class: [ht($e(), e.active ? "active" : "")],
      onClick: C,
      onMouseenter: x,
      onMouseleave: w
    }, [a("input", {
      class: [$e("_inner")],
      placeholder: e.placeholder,
      onFocus: u,
      onBlur: b,
      value: M.value,
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
  n: be,
  classes: ze
} = _("select-v2-dropdown"), vt = /* @__PURE__ */ $({
  name: "VISelectV2DropDown",
  emits: ["focus", "blur", "click"],
  props: ["active"],
  components: {
    "vi-svg-icon": ve
  },
  setup(e, t) {
    const {
      selectRef: s,
      mode: i,
      currentSelect: r
    } = X(de), l = U({
      parentRect: {
        x: 0,
        y: 0
      },
      dropdownTop: "0"
    }), h = T(), v = T(), n = () => {
      J(() => {
        l.dropdownTop = s.value.clientHeight + 10 + "px";
      });
    };
    return oe(() => n()), ce(() => {
      let C = r.value;
      i.value == "multiple" && C && setTimeout(() => {
        n();
      }, 200);
    }), () => {
      var C, y;
      return a("div", {
        class: [be("-popper"), e.active ? "active" : ""],
        style: {
          top: l.dropdownTop
        }
      }, [a("div", {
        ref: h,
        class: [be("-arrow"), e.active ? "active" : ""]
      }, null), a("div", {
        ref: v,
        class: [ze(be(), e.active ? "active" : "")]
      }, [a("div", {
        class: [ze(be("_inner"))]
      }, [(y = (C = t.slots).default) == null ? void 0 : y.call(C)])])]);
    };
  }
}), {
  n: Oe,
  classes: ft
} = _("select-v2-tag"), bt = /* @__PURE__ */ $({
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
      currentSelect: s
    } = X(de), i = "M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z", r = function(l) {
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
      class: [ft(Oe()), e.tooltip ? "useToolTip" : ""],
      "data-txt": e.label
    }, [a("span", {
      class: Oe("_span")
    }, [e.label]), a(A("vi-svg-icon"), {
      path: i,
      onClick: r,
      height: e.height + "px",
      width: e.width + "px"
    }, null)]);
  }
}), {
  n: xe,
  classes: wt
} = _("scroll-bar"), yt = /* @__PURE__ */ $({
  name: "VIScrollBar",
  emits: ["focus", "blur", "click"],
  props: ["dynamicCss"],
  directives: {
    css: le
  },
  setup(e, t) {
    const {
      cacheOptionList: s
    } = X(de), i = T(), r = T(), l = U({
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
      J(() => {
        const w = window.getComputedStyle(i.value.children[0]);
        l.realPadding = e.dynamicCss["popper-padding"] * 2, l.realHeight = w.height.replace("px", "") * 1, l.viewHeight = e.dynamicCss["popper-height"] * 1 - l.realPadding, l.maxScrollBoxRange = l.realHeight - l.viewHeight, l.proportion = Number((l.viewHeight / l.realHeight).toFixed(1)), l.scrollBarHeight = l.viewHeight * l.proportion, l.maxScrollBarRange = l.viewHeight - l.scrollBarHeight, l.scrollBarMovePropor = l.maxScrollBarRange / l.maxScrollBoxRange, l.scrollBoxMovePropor = l.maxScrollBoxRange / l.maxScrollBarRange;
      });
    };
    oe(() => {
      h();
    }), ye(() => s.value, () => {
      h();
    }, {
      deep: !0,
      immediate: !1
    });
    const v = p(() => l.scrollBarHeight < l.realHeight), n = function(w) {
      const M = w.target.scrollTop;
      b(M);
    }, C = function(w) {
      document.addEventListener("mousedown", y), document.addEventListener("mousemove", u);
    }, y = function(w) {
      l.mouseMoving = !0, l.startY = w.clientY;
    }, u = function(w) {
      l.moveY = l.startY - w.clientY, x();
    };
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", u), document.removeEventListener("mousedown", y), l.startY = 0, l.moveY = 0, l.mouseMoving && (l.translateY = l._move), l.mouseMoving = !1;
    });
    const b = function(w) {
      l.mouseMoving || (l.translateY = l.scrollBarMovePropor * w, r.value.style.transform = `translateY(${l.translateY}px)`);
    }, x = function() {
      let w = 0;
      l.moveY < 0 ? w = l.translateY + Math.abs(l.moveY) : l.moveY >= 0 && (w = l.translateY - Math.abs(l.moveY)), w < 0 && (w = 0), w > l.maxScrollBarRange && (w = l.maxScrollBarRange), l._move = w, r.value.style.transform = `translateY(${w}px)`, i.value.scrollTop = Math.abs(l.scrollBoxMovePropor * w);
    };
    return () => {
      var w, M;
      return a("div", {
        class: [wt(xe())]
      }, [a("div", {
        class: xe("left"),
        ref: i,
        onScroll: n
      }, [(M = (w = t.slots).default) == null ? void 0 : M.call(w)]), v.value ? a("div", {
        ref: r,
        class: xe("right"),
        style: {
          height: l.scrollBarHeight + "px"
        },
        onMousedown: C
      }, null) : ""]);
    };
  }
}), {
  n: St,
  classes: Ct
} = _("select-v2-option"), lt = /* @__PURE__ */ $({
  name: "VISelectV2Option",
  emits: ["click"],
  props: ["label", "value"],
  components: {
    "vi-svg-icon": ve
  },
  setup(e, t) {
    const {
      currentSelect: s,
      currentSelectLabel: i,
      mode: r,
      dropDownVisible: l,
      cacheOptionList: h,
      selectedFn: v,
      deleteOptionItem: n
    } = X(de), C = function() {
      if (r.value == "single")
        s.value = e.value, i.value = e.label, l.value = !1;
      else if (r.value == "multiple") {
        const u = JSON.parse(JSON.stringify(s.value));
        let b = !1;
        try {
          u.forEach((x, w) => {
            if (x.value == e.value)
              throw u.splice(w, 1), b = !0, new Error();
          });
        } catch {
        }
        b || u.push({
          label: e.label,
          value: e.value
        }), s.value = u;
      }
      v({
        label: e.label,
        value: e.value
      });
    };
    ce(() => {
      h.value = {
        key: e.label,
        value: e.value
      };
    }), oe(() => {
      h.value = {
        key: e.label,
        value: e.value
      };
    }), Ve(() => {
      n(e.value);
    });
    const y = p(() => {
      if (r.value == "single")
        return s.value == e.value;
      if (r.value == "multiple") {
        let u = !1;
        try {
          s.value.forEach((b) => {
            if (u = b.value == e.value)
              throw new Error();
          });
        } catch {
        }
        return u;
      }
    });
    return () => a("li", {
      class: [Ct(St()), y.value ? "active" : ""],
      onClick: C
    }, [a("div", {
      class: "txt"
    }, [e.label])]);
  }
}), {
  n: ie,
  classes: xt
} = _("select-v2"), kt = /* @__PURE__ */ $({
  name: "VISelectV2",
  emits: ["focus", "blur", "update:modelValue", "handleSelected", "handleClear", "mouseenter", "mouseleave"],
  props: He,
  directives: {
    css: le
  },
  components: {
    "vi-select-v2-input": gt,
    "vi-select-v2-drop-down": vt,
    "vi-scroll-bar": yt,
    "vi-select-v2-tag": bt,
    "vi-select-v2-svg-icon": ve,
    "vi-select-v2-option": lt
  },
  setup(e, t) {
    var G;
    const i = "onUpdate:modelValue" in (((G = Se()) == null ? void 0 : G.vnode.props) || {}), r = () => "xxxxxxxx".replace(/[xy]/g, function(o) {
      var m = 0 | 16 * Math.random(), k = o == "x" ? m : 8 | 3 & m;
      return k.toString(16);
    }), l = T(), h = T(), v = T(), n = U({
      uuid: r(),
      dropDownVisible: !1,
      dialogVisible: !1,
      softFocus: !1,
      currentSelectLabel: "",
      OptionList: {},
      list: [],
      __inputPlaceholder: "",
      searchLabel: "",
      searchValue: ""
    }), C = "M955.069071 864.311021 740.015134 649.258107c-3.752464-3.751441-8.841366-5.860475-14.149255-5.860475-5.306866 0-10.395768 2.108011-14.149255 5.860475l-16.692171 16.692171-38.34226-38.34226c53.03796-59.810201 85.298711-138.442072 85.298711-224.478588 0-186.774871-151.952784-338.727655-338.727655-338.727655S64.527642 216.35456 64.527642 403.12943c0 186.775894 151.952784 338.728678 338.727655 338.728678 86.36909 0 165.276231-32.510438 225.170343-85.913718l38.303374 38.303374-17.34504 17.34504c-7.812943 7.813966-7.812943 20.48352 0 28.297486l215.051891 215.052914c3.753487 3.751441 8.841366 5.860475 14.149255 5.860475 5.306866 0 10.395768-2.108011 14.149255-5.860475l62.334697-62.334697C962.883037 884.794541 962.883037 872.124987 955.069071 864.311021zM104.546078 403.12943c0-164.709319 133.9999-298.709219 298.709219-298.709219s298.709219 133.9999 298.709219 298.709219S567.964616 701.839673 403.255297 701.839673 104.546078 567.838749 104.546078 403.12943zM878.585119 912.496463 691.829691 725.741036l34.036187-34.036187 186.755428 186.755428L878.585119 912.496463z", y = {
      popperHeight: "0",
      inputLineHeight: "0"
    }, u = function(o) {
      let m = !1;
      const k = o.path || o.composedPath && o.composedPath();
      for (let R = 0; R < k.length; R++) {
        const P = k[R];
        if (P.classList && P.classList.value && P.getAttribute("class").includes("-select-v2") && P.dataset.id == n.uuid) {
          m = !0;
          break;
        }
      }
      m || b();
    };
    document.addEventListener("mousedown", u);
    const b = function() {
      n.dropDownVisible = !1, t.emit && t.emit("blur");
    }, x = function(o) {
      return new Promise((m, k) => {
        m(J(() => window.getComputedStyle(o.value)));
      });
    }, w = function(o) {
      e.mode == "single" ? t.emit && t.emit("handleSelected", o) : J(() => {
        t.emit && t.emit("handleSelected", {
          currentSelected: o,
          currentSelects: JSON.parse(JSON.stringify(e.modelValue))
        });
      });
    }, M = function(o) {
      delete n.OptionList[o];
    }, S = function(o) {
      if (o == "co1")
        return "";
      if (o == "auto" || o == "co2" || o == "co3" || o == "co4" || o == "co5" || o == "co6" || o == "co7")
        return "display:flex;flex-wrap: wrap;";
    }, D = function(o) {
      n.dropDownVisible = !n.dropDownVisible, t.emit && (n.dropDownVisible ? t.emit("focus") : t.emit("blur"));
    }, B = function(o) {
    }, W = function(o) {
    }, V = function() {
      t.emit && t.emit("handleClear");
    }, N = function() {
      t.emit && t.emit("mouseenter");
    }, z = function() {
      t.emit && t.emit("mouseleave");
    }, L = function(o) {
      t.emit && t.emit("handleClear", o);
    }, I = function(o) {
      let m = o.target.value, k = {};
      n.list.forEach((R) => R.label.includes(m) ? k[R.value] = R.label : ""), n.searchValue = k, n.searchLabel = m, J(() => {
        Q.value;
      });
    };
    ye(() => e.list, () => {
      n.list = JSON.parse(JSON.stringify(e.list));
    }, {
      deep: !0,
      immediate: !0
    });
    const O = p({
      get() {
        return e.mode == "multiple" && (async () => {
          const {
            height: o
          } = await x(v);
          e.dynamicCss["input-line-height"] = o.replace("px", "") * 1, f.value = e.modelValue.length > 0 ? " " : e.placeholder, e.modelValue.length <= 1 && (e.dynamicCss["input-line-height"] = y.inputLineHeight);
        })(), e.modelValue;
      },
      set(o) {
        i && t.emit("update:modelValue", o);
      }
    }), K = p({
      get() {
        return n.currentSelectLabel;
      },
      set(o) {
        n.currentSelectLabel = o;
      }
    }), Q = p({
      get() {
        let o = Object.keys(n.OptionList).length;
        return o <= 5 && o > 0 ? n.searchValue || (e.search && o++, g.value["popper-height"] = g.value["popper-option-height"] * o + g.value["popper-padding"] * 2) : g.value["popper-height"] = y.popperHeight, n.OptionList;
      },
      set(o) {
        n.OptionList[o.value] = o.key;
      }
    }), Z = p({
      get() {
        return n.dropDownVisible;
      },
      set(o) {
        n.dropDownVisible = o;
      }
    }), f = p({
      get() {
        return n.__inputPlaceholder || e.placeholder;
      },
      set(o) {
        n.__inputPlaceholder = o;
      }
    }), c = p(() => e.clearable), d = p(() => e.mode), g = p(() => {
      let o = Object.assign(He.dynamicCss.default(), e.dynamicCss);
      return y.popperHeight = o["popper-height"], y.inputLineHeight = o["input-line-height"], o;
    }), H = p(() => e.mode == "multiple"), Y = p(() => !!e.searchImg);
    ge(de, {
      selectRef: l,
      currentSelect: O,
      currentSelectLabel: K,
      mode: d,
      dynamicCss: g,
      dropDownVisible: Z,
      placeholder: f,
      cacheOptionList: Q,
      clearable: c,
      selectedFn: w,
      deleteOptionItem: M
    });
    const E = function(o) {
      return a(A("vi-select-v2-tag"), {
        tooltip: e.tooltip,
        label: o.label,
        value: o.value,
        height: g.value["tag-close-size"],
        width: g.value["tag-close-size"],
        onCloseClick: L
      }, null);
    }, j = function() {
      return a(A("vi-select-v2-input"), {
        iconHeight: g.value["input-icon-width"],
        iconWidth: g.value["input-icon-width"],
        ref: h,
        active: n.dropDownVisible,
        placeholder: f.value,
        onClick: D,
        onFocus: B,
        onBlur: W,
        onClear: V,
        onMouseenter: N,
        onMouseleave: z
      }, null);
    }, q = function() {
      return a("li", {
        class: ie("-search")
      }, [Y.value ? a("img", {
        class: ie("--search"),
        src: e.searchImg
      }, null) : a(A("vi-select-v2-svg-icon"), {
        class: ie("--search"),
        path: C
      }, null), a("input", {
        value: n.searchLabel,
        class: ie("-search__input"),
        placeholder: "请输入您要搜索的内容",
        onInput: I
      }, null)]);
    }, F = function() {
      return a(A("vi-select-v2-drop-down"), {
        active: n.dropDownVisible
      }, {
        default: () => [a(A("vi-scroll-bar"), {
          dynamicCss: g.value
        }, {
          default: () => {
            var o, m;
            return [a("ul", null, [e.search ? q() : "", n.searchValue ? a("div", {
              style: S(e.itemLayout),
              class: e.itemLayout
            }, [Object.keys(n.searchValue).map((k, R) => a(A("vi-select-v2-option"), {
              key: k,
              value: k,
              label: Object.values(n.searchValue)[R]
            }, null))]) : a("div", {
              style: S(e.itemLayout),
              class: e.itemLayout
            }, [(m = (o = t.slots).default) == null ? void 0 : m.call(o)]), Object.keys(Q.value).length <= 0 ? a("li", {
              class: ie("-notData")
            }, [Me("暂无数据")]) : ""])];
          }
        })]
      });
    };
    return () => ee(a("div", {
      "data-id": n.uuid,
      class: [xt(ie())],
      ref: l
    }, [H.value ? a("div", {
      ref: v,
      class: ie("-taglist"),
      onClick: D
    }, [O.value.map((o) => E(o))]) : "", j(), F()]), [[re("css"), g.value || {}]]);
  }
}), Vt = ne(kt, "select-v2"), Mt = ne(lt, "select-v2-option"), Ae = {
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
}, pe = Symbol("pagination"), {
  n: Bt,
  classes: It
} = _("pagination-prev"), Ye = /* @__PURE__ */ $({
  name: "VIPaginationPrev",
  emits: ["click"],
  setup(e, t) {
    let s = X(pe);
    const i = p(() => s.currentPage.value <= 1), r = function(l) {
      i.value || t.emit("click", l);
    };
    return () => a("button", {
      type: "button",
      class: [It(Bt()), i.value ? "disabled" : ""],
      onClick: r.bind(this)
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
  n: Rt,
  classes: Lt
} = _("pagination-next"), Ee = /* @__PURE__ */ $({
  name: "VIPaginationNext",
  emits: ["click"],
  setup(e, t) {
    let s = X(pe);
    const i = p(() => s.currentPage.value >= s.pageCount.value), r = function(l) {
      i.value || t.emit("click", l);
    };
    return () => a("button", {
      type: "button",
      class: [Lt(Rt()), i.value ? "disabled" : ""],
      onClick: r.bind(this)
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
} = _("pagination-pager"), je = /* @__PURE__ */ $({
  name: "VIPaginationPager",
  emits: ["click"],
  setup(e, t) {
    let {
      currentPage: s,
      pagerCount: i,
      pageCount: r
    } = X(pe);
    const l = U({
      quickPrevBtnIsHover: !1,
      quickNextBtnIsHover: !1
    }), h = {
      quickLeftArrow: "M62.56 511.904L485.952 88.256a48.64 48.64 0 0 1 68.736 68.736L199.616 512.064l356.8 356.8A48.64 48.64 0 0 1 487.68 937.6l-39.744-39.744 0.256-0.256L62.528 511.936z m388.8 0L874.752 88.256a48.64 48.64 0 0 1 68.736 68.736L588.416 512.064l356.8 356.8A48.64 48.64 0 0 1 876.48 937.6l-39.776-39.744 0.288-0.256-385.664-385.664z",
      quickRightArrow: 'M948.064 513.056L536.064 925.312a47.296 47.296 0 0 1-66.88-66.88l345.504-345.504L467.52 165.76a47.296 47.296 0 0 1 66.88-66.88l38.688 38.688-0.256 0.256 375.264 375.264m-378.336-0.032L157.76 925.312a47.296 47.296 0 0 1-66.88-66.88l345.472-345.504L89.184 165.76a47.296 47.296 0 0 1 66.88-66.88l38.688 38.688-0.256 0.256 375.264 375.264"',
      ellipsis: "M110.336 572.330667a85.333333 85.333333 0 1 0 120.661333-120.661334 85.333333 85.333333 0 0 0-120.661333 120.661334zM451.669333 572.330667a85.333333 85.333333 0 1 0 120.661334-120.661334 85.333333 85.333333 0 0 0-120.661334 120.661334zM793.002667 572.330667a85.333333 85.333333 0 1 0 120.661333-120.661334 85.333333 85.333333 0 0 0-120.661333 120.661334z"
    }, v = p(() => Math.floor(s.value / i.value) * i.value), n = p(() => i.value < r.value ? i.value : r.value - 1), C = p(() => y.value && u.value ? s.value : !1), y = p(() => r.value <= i.value ? 0 : s.value >= i.value - 2), u = p(() => r.value <= i.value ? 0 : s.value < r.value - i.value + 4), b = p(() => r.value > 1), x = function(V) {
      t.emit("click", V);
    }, w = (V) => l.quickPrevBtnIsHover = !0, M = (V) => l.quickPrevBtnIsHover = !1, S = (V) => l.quickNextBtnIsHover = !0, D = (V) => l.quickNextBtnIsHover = !1, B = (V) => s.value = s.value - i.value + 2, W = (V) => s.value = s.value + i.value - 2;
    return () => a("ul", {
      class: [ae()]
    }, [a("li", {
      class: [ae("_btn"), s.value == 1 ? "active" : ""],
      onClick: x.bind(this, 1)
    }, [1]), y.value ? a("li", {
      class: [ae("_btn"), "quickPrev"],
      onMouseenter: w,
      onMouseleave: M,
      onClick: B
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
    }, null)])]) : a("div", null, null), new Array(n.value).fill(C.value ? C.value : 0).map((V, N) => {
      let z = s.value, L = Math.ceil((i.value - 2) / 2), I = N > 0 && N < i.value - 1, O = v.value;
      if (V > 0) {
        if (I)
          return V = N <= L ? V - L + N : V + N - L, a("li", {
            class: [ae("_btn"), z == V ? "active" : ""],
            onClick: x.bind(this, V)
          }, [V]);
      } else if (I)
        return z < i.value - 2 ? a("li", {
          class: [ae("_btn"), z == O + N + 1 ? "active" : ""],
          onClick: x.bind(this, O + N + 1)
        }, [O + N + 1]) : a("li", {
          class: [ae("_btn"), z == r.value - i.value + 1 + N ? "active" : ""],
          onClick: x.bind(this, r.value - i.value + 1 + N)
        }, [r.value - i.value + 1 + N]);
    }), u.value > 0 ? a("li", {
      class: [ae("_btn"), "quickNext"],
      onMouseenter: S,
      onMouseleave: D,
      onClick: W
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
    }, null)])]) : a("div", null, null), b.value ? a("li", {
      class: [ae("_btn"), s.value == r.value ? "active" : ""],
      onClick: x.bind(this, r.value)
    }, [r.value]) : ""]);
  }
}), {
  n: De,
  classes: Pt
} = _("pagination-jump"), Fe = /* @__PURE__ */ $({
  name: "VIPaginationJump",
  emits: ["jump-page"],
  setup(e, t) {
    let s = X(pe);
    const i = U({
      num: ""
    }), r = T(), l = function(v) {
      (() => i.num = Math.random() * 1e6)();
      const C = Number(v.target.value);
      C <= 0 ? i.num = 1 : C > s.pageCount.value ? i.num = s.pageCount.value : i.num = C;
    }, h = function(v) {
      v.key == "Enter" && (r.value.blur(), J(() => t.emit("jump-page", i.num || 1)));
    };
    return () => a("div", {
      class: [Pt(De())]
    }, [a("span", null, [s.jumpLabel.value]), a("input", {
      ref: r,
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
  classes: Tt
} = _("pagination-total"), We = /* @__PURE__ */ $({
  name: "VIPaginationTotal",
  emits: ["click"],
  setup() {
    let {
      total: e,
      totalLabel: t
    } = X(pe);
    return () => a("div", {
      class: [Tt(ke())]
    }, [a("span", {
      class: [ke("_label")]
    }, [t.value]), a("span", {
      class: [ke("_value")]
    }, [e.value])]);
  }
});
function Nt(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !st(e);
}
const {
  n: Xe,
  classes: _t
} = _("pagination"), Ht = /* @__PURE__ */ $({
  name: "VIPagination",
  props: Ae,
  directives: {
    css: le
  },
  emits: ["size-change", "update:modelValue", "current-change", "update:total"],
  components: {
    prev: Ye,
    pager: je,
    next: Ee,
    jump: Fe,
    total: We,
    "dw-select-v2": Vt,
    "dw-select-v2-option": Mt
  },
  setup(e, t) {
    var Z, f;
    const s = (c) => typeof c != "number", i = (c) => c instanceof Array, r = ((f = (Z = Se()) == null ? void 0 : Z.vnode) == null ? void 0 : f.props) || {}, l = "onUpdate:sizeChange" in r || "onUpdate:size-change" in r || "onSizeChange" in r, h = "onUpdate:currentPage" in r || "onUpdate:current-page" in r || "onUpdate:modelValue" in r || "onCurrentChange" in r, v = "update:total" in r;
    let n = 10, C = 1, y = 100;
    const u = U({
      select_curSelect: "",
      select_list: [],
      select_dynamicCss: {}
    }), b = function() {
      i(e.pageSize) && (u.select_list = e.pageSize.map((c) => ({
        value: c,
        label: c + "/page"
      })), u.select_curSelect = u.select_list[0].value);
    }, x = p(() => {
      let c = 0;
      return s(e.total) ? console.warn("total属性不合格") : c = Math.max(1, Math.ceil(e.total / M.value)), c;
    }), w = p(() => {
      let c = 0;
      return s(e.total) || (s(e.pagerCount) || (c = x.value > 7 ? Math.max(7, e.pagerCount % 2 == 0 ? e.pagerCount - 1 : e.pagerCount) : x.value), c > 29 && (c = 29)), c;
    }), M = p({
      get() {
        let c = s(e.pageSize) ? n : e.pageSize > 5 ? e.pageSize : 5;
        return c = i(e.pageSize) ? u.select_curSelect : c, c;
      },
      set(c) {
        s(e.pageSize) && (n = c), l && (e.modelValue > Math.ceil(e.total / c) && (S.value = Math.ceil(e.total / c)), J(() => {
          t.emit("size-change", {
            pageSize: c,
            currentPage: e.modelValue
          });
        }));
      }
    }), S = p({
      get() {
        return s(e.modelValue) ? C : e.modelValue;
      },
      set(c) {
        let d = c;
        c < 1 ? d = 1 : c > x.value && (d = x.value), h && (t.emit("update:modelValue", d), t.emit("current-change", d));
      }
    }), D = p({
      get() {
        return s(e.total) ? y : e.total;
      },
      set(c) {
        let d = c;
        c < 0 && (d = 0), y = d, v && t.emit("update:total", d);
      }
    }), B = p(() => e.totalLabel), W = p(() => e.jumpLabel), V = p(() => Object.assign(Ae.dynamicCss.default(), e.dynamicCss)), N = p(() => {
      let c = {};
      for (let d in V.value)
        d.includes("select-v2-") && (c[d.replace("select-v2-", "")] = V.value[d]);
      return c;
    }), z = p(() => {
      let c = e.layout;
      const d = {
        total: !1,
        size: !1,
        prev: !1,
        next: !1,
        pager: !1,
        jump: !1
      };
      for (let g in d)
        d[g] = c.replace(/\s+/g, "").split(",").findIndex((H) => H == g) != -1;
      return d;
    });
    ge(pe, {
      pageCount: x,
      pagerCount: w,
      pageSize: M,
      currentPage: S,
      total: D,
      totalLabel: B,
      jumpLabel: W
    }), oe(() => {
      b();
    }), ye(() => e.pageSize, () => {
      b();
    }, {
      deep: !0
    });
    const L = (c) => S.value = S.value - 1, I = (c) => S.value = S.value + 1, O = (c) => S.value = c, K = (c) => S.value = c, Q = function(c) {
      M.value = c.value;
    };
    return () => {
      let c;
      return ee(a("div", {
        class: [_t(Xe()), e.background ? "bgbox" : ""]
      }, [z.value.total ? a(We, null, null) : "", z.value.size && i(e.pageSize) ? a(A("dw-select-v2"), {
        modelValue: u.select_curSelect,
        "onUpdate:modelValue": (d) => u.select_curSelect = d,
        dynamicCss: N.value,
        onHandleSelected: Q,
        class: Xe("-select")
      }, Nt(c = u.select_list.map((d) => a(A("dw-select-v2-option"), {
        key: d.value,
        label: d.label,
        value: d.value
      }, null))) ? c : {
        default: () => [c]
      }) : "", z.value.prev ? a(Ye, {
        disabled: !1,
        onClick: L
      }, null) : "", z.value.pager ? a(je, {
        onClick: O
      }, null) : "", z.value.next ? a(Ee, {
        disabled: !1,
        onClick: I
      }, null) : "", z.value.jump ? a(Fe, {
        onJumpPage: K
      }, null) : ""]), [[re("css"), V.value || {}]]);
    };
  }
}), xo = ne(Ht, "pagination"), Be = {
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
}, Pe = Symbol("radio"), { n: $t, classes: zt } = _("radio"), Ot = $({
  name: "VIRadio",
  props: Be,
  emits: ["click", "update:modelValue", "change"],
  setup(e, t) {
    let s = X(Pe, void 0);
    const i = (v) => {
      l.value || (s ? s.changeModelValue(v) : t.emit("update:modelValue", "on"));
    }, r = p({
      get() {
        return s ? e.value == s.currentSelect.value : e.modelValue;
      },
      set() {
      }
    }), l = p({
      get() {
        return !!e.disabled;
      },
      set() {
      }
    }), h = p({
      get() {
        return s ? s.currentSelect.value : e.modelValue;
      },
      set(v) {
        t.emit && t.emit("update:modelValue", v);
      }
    });
    return {
      n: $t,
      classes: zt,
      handleClick: i,
      IsChecked: r,
      IsDisable: l,
      modelValueBridge: h
    };
  }
}), Te = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [i, r] of t)
    s[i] = r;
  return s;
}, At = ["value", "checked", "disabled"];
function Yt(e, t, s, i, r, l) {
  return Re(), Le("div", {
    class: te([e.classes(e.n()), e.IsChecked ? e.n("active") : "", e.border ? e.n("border") : ""]),
    onClick: t[1] || (t[1] = (h) => e.handleClick(e.value))
  }, [
    ue("div", {
      class: te([e.classes(e.n("_input__wrapper")), e.IsDisable ? "is-disabled" : ""])
    }, [
      ee(ue("input", {
        class: te([e.classes(e.n("_input"))]),
        type: "radio",
        ref: "radioRef",
        value: e.value,
        checked: e.IsChecked,
        disabled: e.IsDisable,
        "onUpdate:modelValue": t[0] || (t[0] = (h) => e.modelValueBridge = h)
      }, null, 10, At), [
        [ot, e.modelValueBridge]
      ]),
      ue("div", {
        class: te([e.classes(e.n("_circle"))])
      }, null, 2)
    ], 2),
    ue("label", {
      class: te(e.classes(e.n("_label"), e.IsDisable ? "is-disabled" : ""))
    }, nt(e.label), 3)
  ], 2);
}
const Et = /* @__PURE__ */ Te(Ot, [["render", Yt]]), jt = {
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
}, { n: Dt, classes: Ft } = _("radio-button"), Wt = $({
  name: "VIRadioButton",
  props: jt,
  emits: ["click", "update:modelValue", "change"],
  setup(e, t) {
    let s = X(Pe);
    const i = T(null), r = function(n) {
      h.value || (s ? s.changeModelValue(e.value) : t.emit("update:modelValue", "on"));
    }, l = p({
      get() {
        return s ? e.value == s.currentSelect.value : e.modelValue;
      },
      set() {
      }
    }), h = p({
      get() {
        return !!e.disabled;
      },
      set() {
      }
    }), v = p({
      get() {
        return s ? s.currentSelect.value : e.modelValue;
      },
      set(n) {
        t.emit && t.emit("update:modelValue", n);
      }
    });
    return {
      n: Dt,
      classes: Ft,
      handleClick: r,
      IsChecked: l,
      IsDisable: h,
      refRadioButton: i,
      modelValue: v
    };
  }
}), Xt = ["value", "checked", "disabled"];
function Ut(e, t, s, i, r, l) {
  return Re(), Le("div", {
    ref: "refRadioButton",
    class: te([e.classes(e.n()), e.IsChecked ? e.n("active") : "", e.border ? e.n("border") : ""]),
    onClick: t[1] || (t[1] = (...h) => e.handleClick && e.handleClick(...h))
  }, [
    ee(ue("input", {
      class: te([e.classes(e.n("_input"))]),
      type: "radio",
      ref: "radioRef",
      value: e.value,
      checked: e.IsChecked,
      disabled: e.IsDisable,
      "onUpdate:modelValue": t[0] || (t[0] = (h) => e.modelValue = h)
    }, null, 10, Xt), [
      [ot, e.modelValue]
    ]),
    ue("label", {
      class: te(e.classes(e.n("_label"), e.IsDisable ? "is-disabled" : ""))
    }, nt(e.label), 3)
  ], 2);
}
const qt = /* @__PURE__ */ Te(Wt, [["render", Ut]]), { n: Jt, classes: Gt } = _("radio-group"), Kt = $({
  name: "VIRadioGroup",
  props: Be,
  emits: ["click", "update:modelValue", "change"],
  directives: { css: le },
  setup(e, t) {
    const s = (l = e.modelValue) => {
      t.emit("update:modelValue", l), J(() => t.emit("change", l));
    }, i = p({
      get() {
        return e.modelValue;
      },
      set(l) {
        t.emit && t.emit("update:modelValue", l);
      }
    }), r = p(() => Object.assign(Be.dynamicCss.default(), e.dynamicCss));
    return ge(Pe, {
      currentSelect: i,
      changeModelValue: s
    }), {
      n: Jt,
      classes: Gt,
      dynamicCssBridge: r
    };
  }
});
function Qt(e, t, s, i, r, l) {
  const h = re("css");
  return ee((Re(), Le("div", {
    class: te(e.classes(e.n()))
  }, [
    ut(e.$slots, "default")
  ], 2)), [
    [h, e.dynamicCssBridge || {}]
  ]);
}
const Zt = /* @__PURE__ */ Te(Kt, [["render", Qt]]), ko = ne(Et, "radio"), Vo = ne(qt, "radio-button"), Mo = ne(Zt, "radio-group"), Ue = {
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
}, at = Symbol("time-picker"), {
  n: eo,
  classes: to
} = _("input-svg-icon"), oo = /* @__PURE__ */ $({
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
      class: [to(eo()), "icon"],
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
}), qe = {
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
  n: Je,
  classes: no
} = _("timePickerInput"), lo = /* @__PURE__ */ $({
  name: "VITimePickerInput",
  emits: ["focus", "blur", "click", "update:modelValue", "close"],
  directives: {
    css: le
  },
  props: qe,
  components: {
    "vi-input-svg-icon": oo
  },
  setup(e, t) {
    const s = "M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z", i = U({
      softFocus: !1,
      isHover: !1
    }), r = function(B) {
      S.value || t.emit("click", B);
    }, l = function(B) {
      S.value || (t.emit("update:modelValue", B.target.value), t.emit("close"), B.stopPropagation());
    }, h = function(B) {
      S.value || (t.emit("focus", B), i.softFocus = !0);
    }, v = function(B) {
      S.value || (t.emit("blur", B), i.softFocus = !1);
    }, n = function(B) {
      S.value || (i.isHover = !0);
    }, C = function(B) {
      S.value || (i.isHover = !1);
    }, y = function(B) {
      S.value || t.emit("update:modelValue", B.target.value);
    }, u = function(B) {
      S.value || t.emit("update:modelValue", B.target.value);
    }, b = p(() => Object.assign(qe.dynamicCss.default(), e.dynamicCss)), x = p(() => typeof e.readonly == "string" ? !0 : e.readonly), w = p(() => typeof e.clearable == "string" ? !0 : e.clearable), M = p(() => typeof e.showPassword == "string" ? !0 : e.showPassword), S = p(() => typeof e.disabled == "string" ? !0 : e.disabled), D = p(() => i.softFocus ? "active" : "");
    return () => ee(a("div", {
      class: [no(Je()), D.value, S.value ? "disabled" : ""],
      onClick: r,
      onMouseenter: n,
      onMouseleave: C
    }, [a("input", {
      class: [Je("_inner")],
      placeholder: e.placeholder,
      onFocus: h,
      onBlur: v,
      readonly: x.value || S.value,
      value: e.modelValue,
      onChange: y,
      onInput: u,
      type: M.value ? "password" : "text"
    }, null), e.modelValue && w.value && i.isHover ? a(A("vi-input-svg-icon"), {
      class: "icon",
      height: b.value["input-icon-width"],
      width: b.value["input-icon-width"],
      path: s,
      onClick: l
    }, null) : ""]), [[re("css"), b.value || {}]]);
  }
}), {
  n: we,
  classes: Ge
} = _("popper"), ao = /* @__PURE__ */ $({
  name: "VITimePickerPopper",
  emits: ["focus", "blur", "click"],
  props: ["active"],
  setup(e, t) {
    let {
      timePickerRef: s
    } = X(at);
    const i = U({
      parentRect: {
        x: 0,
        y: 0,
        height: 0,
        width: 0
      },
      dropdownTop: "0"
    }), r = T(null), l = T(null), h = () => {
      J(() => {
        i.parentRect = s.value.getBoundingClientRect(), i.dropdownTop = i.parentRect.height + 10 + "px";
      });
    };
    return oe(() => h()), () => {
      var v, n;
      return a("div", {
        class: [we(""), e.active ? "active" : ""],
        style: {
          top: i.dropdownTop
        }
      }, [a("div", {
        ref: r,
        class: [we("_arrow")]
      }, [e.active]), a("div", {
        ref: l,
        class: [Ge(we("_content"))]
      }, [a("div", {
        class: [Ge(we("_inner"))]
      }, [(n = (v = t.slots).default) == null ? void 0 : n.call(v)])])]);
    };
  }
}), Ke = {
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
  n: io
} = _("scroll-bar__thumb"), so = /* @__PURE__ */ $({
  name: "ScrollBar",
  emits: ["update:height", "update:width"],
  props: ro,
  setup(e, t) {
    const {
      thumbRatioY: s,
      thumbRatioX: i,
      thumbRatioYMaxRange: r,
      thumbRatioXMaxRange: l,
      wrapperInnerMaxiMoveProportionY: h,
      wrapperInnerMaxiMoveProportionX: v,
      scrollBarRef: n
    } = X(rt), C = T(), y = U({
      mouseMoving: !1
    });
    let u = 0, b = 0, x = 0, w = 0, M = 0, S = 0;
    const D = p({
      get() {
        return e.height;
      },
      set(L) {
        t.emit && t.emit("update:height", L);
      }
    }), B = p({
      get() {
        return e.width;
      },
      set(L) {
        t.emit && t.emit("update:width", L);
      }
    }), W = function(L) {
      if (L == "vertical") {
        let I = 0;
        const O = M;
        I = x < 0 ? O + Math.abs(x) : O - Math.abs(x), I < 0 && (I = 0), I > r.value && (I = r.value), n.value.scrollTop = Math.abs(h.value * I);
      } else if (L == "horizontal") {
        let I = 0;
        const O = S;
        I = w < 0 ? O + Math.abs(w) : O - Math.abs(w), I < 0 && (I = 0), I > l.value && (I = l.value), n.value.scrollLeft = Math.abs(v.value * I);
      }
    }, V = function(L) {
      y.mouseMoving = !0, M = Number(s.value.slice(11, -3)), S = Number(i.value.slice(11, -3)), u = Number(L.clientY), b = Number(L.clientX);
    }, N = function(L) {
      x = u - L.clientY, w = b - L.clientX, W(e.type);
    };
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", N), document.removeEventListener("mousedown", V), u = 0, b = 0, x = 0, w = 0, M = 0, S = 0, y.mouseMoving = !1;
    });
    const z = (L) => {
      document.addEventListener("mousedown", V), document.addEventListener("mousemove", N);
    };
    return () => a("div", {
      class: io(),
      ref: C,
      style: {
        height: D.value,
        width: B.value,
        transform: e.type == "vertical" ? e.ratioY : e.ratioX
      },
      onMousedown: z
    }, null);
  }
}), {
  n: me
} = _("scroll-bar"), uo = /* @__PURE__ */ $({
  name: "ScrollBar",
  emits: ["update:width", "scroll"],
  directives: {
    css: le
  },
  props: Ke,
  components: {
    "scroll-bar-thumb": so
  },
  setup(e, t) {
    let i = null;
    const r = (d) => {
      K();
    }, l = T(), h = T(), v = T(), n = U({
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
    let C = T(!1);
    ye(() => e.noResize, (d) => {
      d ? i == null || i.disconnect() : (i = new MutationObserver(r), J(() => {
        i.observe(h.value, {
          attributes: !0,
          childList: !0,
          subtree: !0
        });
      }));
    }, {
      immediate: !0
    });
    const y = p(() => Object.assign(Ke.dynamicCss.default(), e.dynamicCss)), u = p(() => e.height), b = p({
      get() {
        return n.cacheContainerWidth;
      },
      set(d) {
        n.cacheContainerWidth = d;
      }
    }), x = p({
      get() {
        return n.thumbHeight;
      },
      set(d) {
        n.thumbHeight = d;
      }
    }), w = p({
      get() {
        return n.thumbWidth;
      },
      set(d) {
        n.thumbWidth = d;
      }
    }), M = p({
      get() {
        return n.thumbRatioX;
      },
      set(d) {
        n.thumbRatioX = d;
      }
    }), S = p({
      get() {
        return n.thumbRatioY;
      },
      set(d) {
        n.thumbRatioY = d;
      }
    }), D = p(() => n.thumbRatioYMaxRange), B = p(() => n.thumbRatioXMaxRange), W = p(() => n.wrapperInnerMaxiMoveProportionY), V = p(() => n.wrapperInnerMaxiMoveProportionX), N = (d) => {
      n.thumbRatioY = `translateY(${String(n.thumbRatioYProportion * d) + "px"})`;
    }, z = (d) => {
      n.thumbRatioX = `translateX(${String(n.thumbRatioXProportion * d) + "px"})`;
    }, L = (d) => {
      l.value.scrollTop = d;
    }, I = (d) => {
      l.value.scrollLeft = d;
    }, O = (d, g) => {
      L(d), I(g);
    }, K = (d) => {
      var g, H;
      n.wrapperInnerRealHeight = Number((g = h.value) == null ? void 0 : g.scrollHeight), n.wrapperInnerRealWidth = Number((H = h.value) == null ? void 0 : H.scrollWidth), n.wrapperInnerMaxiMoveRangeY = n.wrapperInnerRealHeight - Number(u.value.replace("px", "")), n.wrapperInnerMaxiMoveRangeX = n.wrapperInnerRealWidth - Number(b.value.replace("px", "")), n.thumbHeightProportion = Number(u.value.replace("px", "")) / n.wrapperInnerRealHeight, n.thumbWidthProportion = Number(b.value.replace("px", "")) / n.wrapperInnerRealWidth, n.thumbHeight = String(n.thumbHeightProportion * Number(u.value.replace("px", ""))) + "px", n.thumbWidth = String(n.thumbWidthProportion * Number(b.value.replace("px", ""))) + "px", n.thumbRatioYMaxRange = Number(u.value.replace("px", "")) - Number(n.thumbHeight.replace("px", "")), n.thumbRatioXMaxRange = Number(b.value.replace("px", "")) - Number(n.thumbWidth.replace("px", "")), n.thumbRatioYProportion = n.thumbRatioYMaxRange / n.wrapperInnerMaxiMoveRangeY, n.thumbRatioXProportion = n.thumbRatioXMaxRange / n.wrapperInnerMaxiMoveRangeX, n.wrapperInnerMaxiMoveProportionY = n.wrapperInnerMaxiMoveRangeY / n.thumbRatioYMaxRange, n.wrapperInnerMaxiMoveProportionX = n.wrapperInnerMaxiMoveRangeX / n.thumbRatioXMaxRange;
    };
    oe(() => {
      n.cacheContainerWidth = e.width, K();
    });
    const Q = (d) => {
      const g = d.target.scrollTop, H = d.target.scrollLeft;
      N(g), z(H), t.emit && t.emit("scroll", H, g);
    }, Z = () => {
      C.value = !0;
    }, f = () => {
      C.value = !1;
    };
    ge(rt, {
      height: u,
      thumbRatioY: S,
      thumbRatioX: M,
      thumbRatioYMaxRange: D,
      thumbRatioXMaxRange: B,
      wrapperInnerMaxiMoveProportionY: W,
      wrapperInnerMaxiMoveProportionX: V,
      scrollBarRef: l
    }), t.expose({
      setScrollTop: L,
      setScrollLeft: I,
      setScrollTo: O
    });
    const c = (d = he.VERTICAL) => {
      if (e.width === !1 || e.height === !1)
        return "";
      const g = n.wrapperInnerRealHeight, H = Number(e.height.replace("px", "")), Y = n.wrapperInnerRealWidth;
      if (d == "vertical")
        return H < g ? a(A("scroll-bar-thumb"), {
          ref: v,
          type: d,
          height: x.value,
          width: e.thumbWidth,
          ratioX: M.value,
          ratioY: S.value,
          class: C.value ? "show" : "hide"
        }, null) : "";
      if (d == "horizontal") {
        let E = Number(b.value.replace("px", ""));
        if (b.value == "auto") {
          const j = () => {
            b.value = "auto", J(() => {
              var q;
              E = Number((q = h.value) == null ? void 0 : q.clientWidth), b.value = E + "px", K();
            });
          };
          j(), window.onresize = () => j();
        } else if (b.value)
          return E < Y ? a(A("scroll-bar-thumb"), {
            ref: v,
            type: d,
            height: e.thumbWidth,
            width: w.value,
            ratioX: M.value,
            ratioY: S.value,
            class: C.value ? "show" : "hide"
          }, null) : "";
      }
    };
    return () => {
      var d, g;
      return ee(a("div", {
        class: me(),
        style: {
          width: b.value
        },
        onMouseenter: Z,
        onMouseleave: f
      }, [a("div", {
        class: me("_wrapper"),
        ref: l,
        style: {
          height: u.value,
          width: b.value
        },
        onScroll: Q
      }, [a("div", {
        class: me("_view"),
        ref: h
      }, [(g = (d = t.slots).default) == null ? void 0 : g.call(d)])]), a("div", {
        class: [me("_bar"), "horizontal"]
      }, [c(he.HORIZONTAL)]), a("div", {
        class: [me("_bar"), "vertical"]
      }, [c(he.VERTICAL)])]), [[re("css"), y.value || {}]]);
    };
  }
}), co = ne(uo, "scroll-bar"), {
  n: po,
  classes: mo
} = _("time-picker"), ho = /* @__PURE__ */ $({
  name: "VITimePicker",
  emits: ["click", "inputClick", "closeClick", "cancelClick", "okClick", "update:modelValue", "focus", "blur"],
  directives: {
    css: le
  },
  props: Ue,
  components: {
    "vi-time-picker-input": lo,
    "vi-time-picker-popper": ao,
    "vi-scroll-bar": co
  },
  setup(e, t) {
    const s = [null, null, null];
    let i = "";
    const r = (o) => o < 10 ? "0" + o : o + "", l = (o) => {
      const m = o.match(/^(\d{1,2}):(\d{1,2}):(\d{1,2})$/);
      return m || console.warn("初始化数据格式不符合规范,已被清空！"), m;
    }, h = () => "xxxxxxxx".replace(/[xy]/g, function(o) {
      var m = 0 | 16 * Math.random(), k = o == "x" ? m : 8 | 3 & m;
      return k.toString(16);
    }), v = T();
    let n = T(), C = T(), y = T();
    const u = U({
      uuid: h(),
      popperVisible: !1,
      softFocus: !1,
      isSubmit: !1,
      hourList: [],
      minuteList: [],
      secondList: [],
      currentSelect: ["", "", ""]
    }), b = function() {
      u.popperVisible = !1, u.softFocus = !1;
    }, x = function(o) {
      let m = !1;
      const k = o.path || o.composedPath && o.composedPath();
      for (let R = 0; R < k.length; R++) {
        const P = k[R];
        if (P.classList && P.classList.value && P.getAttribute("class").includes("-time-picker") && P.dataset.id == u.uuid) {
          m = !0;
          break;
        }
      }
      m || (b(), u.isSubmit = !0);
    };
    document.addEventListener("mousedown", x);
    const w = function(o) {
      t.emit && t.emit("focus");
    }, M = function(o) {
      t.emit && t.emit("blur");
    }, S = function() {
      t.emit && t.emit("click");
    }, D = function(o) {
      u.popperVisible = !u.popperVisible, u.isSubmit = !1, e.modelValue || c(), t.emit && t.emit("inputClick");
    }, B = function() {
      u.popperVisible = !1, t.emit && t.emit("closeClick");
    }, W = function(o) {
      const {
        type: m
      } = o.target.dataset;
      u.popperVisible = !1, m == "cancel" ? (u.isSubmit = !1, t.emit && t.emit("update:modelValue", i), t.emit && t.emit("cancelClick"), f()) : m == "ok" && (u.isSubmit = !0, t.emit && t.emit("okClick", u.currentSelect));
    }, V = function(o, m) {
      const k = {
        index: {
          hour: "0",
          minute: "1",
          second: "2"
        },
        ref: {
          hour: n,
          minute: C,
          second: y
        }
      }, {
        num: R,
        disabled: P
      } = m.dataset;
      if (R) {
        if (P == "true")
          return;
        u.currentSelect[k.index[o]] = R;
        const fe = Number(u.currentSelect[k.index[o]]) * Number(g.value["popper-spinner-number-height"]);
        k.ref[o].value.setScrollTop(fe);
      }
    }, N = function(o) {
      V("hour", o.target);
    }, z = function(o) {
      V("minute", o.target);
    }, L = function(o) {
      V("second", o.target);
    }, I = function(o, m) {
      const k = {
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
      let P = Math.round(o / Number(g.value["popper-spinner-number-height"]));
      if (e[k.ableRange[m]].filter((it) => it == P).length > 0)
        return;
      u.currentSelect[k.timers[m]] = r(P);
      let Ce = P * Number(g.value["popper-spinner-number-height"]);
      s[k.timers[m]] && (clearTimeout(s[k.timers[m]]), s[k.timers[m]] = null), s[k.timers[m]] = setTimeout(() => {
        m == "hour" && n.value.setScrollTop(Ce), m == "minute" && C.value.setScrollTop(Ce), m == "second" && y.value.setScrollTop(Ce);
      }, 200);
    }, O = function(o, m) {
      I(m, "hour");
    }, K = function(o, m) {
      I(m, "minute");
    }, Q = function(o, m) {
      I(m, "second");
    }, Z = () => {
      u.hourList = new Array(24).fill(0).map((o, m) => m < 10 ? "0" + m : m + ""), u.minuteList = new Array(60).fill(0).map((o, m) => m < 10 ? "0" + m : m + ""), u.secondList = new Array(60).fill(0).map((o, m) => m < 10 ? "0" + m : m + "");
    }, f = function() {
      i && (n.value.setScrollTop(Number(i.slice(0, 2)) * Number(g.value["popper-spinner-number-height"])), C.value.setScrollTop(Number(i.slice(3, 5)) * Number(g.value["popper-spinner-number-height"])), y.value.setScrollTop(Number(i.slice(6, 8)) * Number(g.value["popper-spinner-number-height"])));
    }, c = () => {
      const o = new Date(), m = o.getHours(), k = o.getMinutes(), R = o.getSeconds();
      u.currentSelect[0] = r(m), u.currentSelect[1] = r(k), u.currentSelect[2] = r(R), n.value.setScrollTop(Number(u.currentSelect[0]) * Number(g.value["popper-spinner-number-height"])), C.value.setScrollTop(Number(u.currentSelect[1]) * Number(g.value["popper-spinner-number-height"])), y.value.setScrollTop(Number(u.currentSelect[2]) * Number(g.value["popper-spinner-number-height"])), t.emit && t.emit("update:modelValue", u.currentSelect[0] + ":" + u.currentSelect[1] + ":" + u.currentSelect[2]);
    }, d = function() {
      if (e.modelValue && l(e.modelValue)) {
        const o = e.modelValue.split(":"), m = e.disabledHours.findIndex((P) => P == o[0]) != -1, k = e.disabledMinutes.findIndex((P) => P == o[1]) != -1, R = e.disabledSeconds.findIndex((P) => P == o[2]) != -1;
        if (m || k || R)
          return console.warn("输入的值包含禁用项,已被清空"), t.emit && t.emit("update:modelValue", ""), !0;
      }
      return !1;
    };
    ct(() => {
      if (e.modelValue && l(e.modelValue) && !d()) {
        const o = e.modelValue.split(":");
        u.currentSelect[0] = o[0], u.currentSelect[1] = o[1], u.currentSelect[2] = o[2], i = e.modelValue;
      }
    }), oe(() => {
      Z(), J(() => {
        f();
      });
    });
    const g = p(() => Object.assign(Ue.dynamicCss.default(), e.dynamicCss)), H = p(() => {
      const o = {};
      for (const m in g.value)
        m.includes("input") && (o[m] = g.value[m]);
      return o;
    }), Y = p({
      get() {
        return d(), e.modelValue;
      },
      set(o) {
        t.emit && t.emit("update:modelValue", o);
      }
    }), E = p(() => e.clearable), j = function(o, m) {
      const k = {
        hour: "disabledHours",
        minute: "disabledMinutes",
        second: "disabledSeconds"
      };
      let R = !1;
      return e[k[o]].forEach((P) => P == m ? R = !0 : ""), R;
    }, q = p(() => function(o) {
      return j("hour", o);
    }), F = p(() => function(o) {
      return j("minute", o);
    }), G = p(() => function(o) {
      return j("second", o);
    });
    return ce(() => {
      const o = u.currentSelect[0], m = u.currentSelect[1], k = u.currentSelect[2];
      if (!o && !m && !k) {
        t.emit && t.emit("update:modelValue", "");
        return;
      }
      const R = o + ":" + m + ":" + k;
      t.emit && t.emit("update:modelValue", R);
    }), ce(() => {
      u.isSubmit && (i = e.modelValue, t.emit && t.emit("update:modelValue", i));
    }), ge(at, {
      timePickerRef: v
    }), () => ee(a("div", {
      ref: v,
      "data-id": u.uuid,
      class: [mo(po())],
      onClick: S
    }, [a(A("vi-time-picker-input"), {
      placeholder: e.placeholder,
      modelValue: Y.value,
      "onUpdate:modelValue": (o) => Y.value = o,
      onFocus: w,
      onBlur: M,
      onClose: B,
      dynamicCss: H.value || {},
      clearable: E.value,
      readonly: !0,
      onClick: D
    }, null), a(A("vi-time-picker-popper"), {
      active: u.popperVisible
    }, {
      default: () => [a("div", {
        class: "time-panel"
      }, [a("div", {
        class: "time-panel__content"
      }, [a(A("vi-scroll-bar"), {
        ref: n,
        class: "time-panel__spinner time-panel__popper-spinner--hour",
        onScroll: O,
        height: Number(g.value["popper-spinner-number-height"]) * 6 + "px"
      }, {
        default: () => [a("ul", {
          onClick: N
        }, [u.hourList.map((o) => a("li", {
          "data-num": o,
          "data-disabled": q.value(Number(o)),
          class: [u.currentSelect[0] == o ? "active" : "", q.value(Number(o)) ? "disabled" : ""]
        }, [o]))])]
      }), a(A("vi-scroll-bar"), {
        ref: C,
        class: "time-panel__spinner time-panel__popper-spinner--minutes",
        onScroll: K,
        height: Number(g.value["popper-spinner-number-height"]) * 6 + "px"
      }, {
        default: () => [a("ul", {
          onClick: z
        }, [u.minuteList.map((o) => a("li", {
          "data-num": o,
          "data-disabled": F.value(Number(o)),
          class: [u.currentSelect[1] == o ? "active" : "", F.value(Number(o)) ? "disabled" : ""]
        }, [o]))])]
      }), a(A("vi-scroll-bar"), {
        ref: y,
        class: "time-panel__spinner time-panel__popper-spinner--second",
        onScroll: Q,
        height: Number(g.value["popper-spinner-number-height"]) * 6 + "px"
      }, {
        default: () => [a("ul", {
          onClick: L
        }, [u.secondList.map((o) => a("li", {
          "data-num": o,
          "data-disabled": G.value(Number(o)),
          class: [u.currentSelect[2] == o ? "active" : "", G.value(Number(o)) ? "disabled" : ""]
        }, [o]))])]
      })]), a("div", {
        class: "time-panel__footer",
        onClick: W
      }, [a("div", {
        "data-type": "cancel",
        class: "time-panel__footer_cancel"
      }, [Me("取消")]), a("div", {
        "data-type": "ok",
        class: "time-panel__footer_ok"
      }, [Me("确认")])])])]
    })]), [[re("css"), g.value || {}]]);
  }
}), Bo = ne(ho, "time-picker");
var Ne = /* @__PURE__ */ ((e) => (e.AUTHROLL = "autoRoll", e.HANDMOVE = "handRoll", e))(Ne || {});
const Qe = {
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
      return Object.values(Ne).includes(e);
    }
  },
  loopTime: {
    type: Number,
    default: 1e3 * 2
  },
  scrollTransition: {
    type: Number,
    default: 1e3 * 1
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
      "longText-txt-gap": "30",
      "longText-sco-ani-name": "longTextScrollAnimation",
      "longText-sco-ani-dura": "15"
    })
  }
}, { n: go } = _(""), vo = (e = go()) => e + "xxxxxxxx".replace(/[xy]/g, function(t) {
  var s = 0 | 16 * Math.random(), i = t == "x" ? s : 8 | 3 & s;
  return i.toString(16);
});
class fo {
  constructor(t = [], s = 7) {
    this.list = t, this.severalGroups = s, this.windowSliding = new Array(this.severalGroups).fill(0).map((i, r) => r);
  }
  take(t) {
    return this.Sliding(t), this.show();
  }
  show() {
    return this.windowSliding.map((t) => this.list[t]);
  }
  Sliding(t) {
    this.windowSliding = this.windowSliding.map((s) => {
      const i = this.list.length, r = s + t;
      return r <= i - 1 ? r : r - i;
    });
  }
}
const Ie = function(e) {
  const t = e instanceof Array ? [] : {};
  for (let s in e)
    t[s] = typeof e[s] == "object" ? Ie(e[s]) : e[s];
  return t;
};
function bo(e, t = "top", s, i, r) {
  const l = t == "top" ? e.scrollTop : t == "left" ? e.scrollLeft : 0, h = s - l, v = performance.now();
  function n() {
    const u = performance.now() - v, b = C(
      u,
      l,
      h,
      i
    );
    t == "top" ? e.scrollTop = b : t == "left" && (e.scrollLeft = b), u < i ? requestAnimationFrame(n) : r && r();
  }
  function C(y, u, b, x) {
    return y /= x / 2, y < 1 ? b / 2 * y * y + u : (y--, -b / 2 * (y * (y - 2) - 1) + u);
  }
  requestAnimationFrame(n);
}
function wo() {
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
    const { __id: i, ...r } = s, l = JSON.stringify(r);
    if (!t[l])
      return t[l] = !0, s;
    const h = wo();
    return { ...s, __id: h };
  });
}
const {
  n: Ze
} = _("long-text"), et = {
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
}, tt = /* @__PURE__ */ $({
  name: "LongText",
  emits: ["update:text"],
  props: et,
  directives: {
    css: le
  },
  setup(e, t) {
    var u;
    const i = "onUpdate:modelValue" in (((u = Se()) == null ? void 0 : u.vnode.props) || {}), r = T(null), l = T(null), h = T(null), v = T(null), n = U({
      isScroll: !0,
      toolTip_x: 0,
      toolTip_y: 0,
      toolTip_content: "盎司附近拉萨解放了卡JFK垃圾地方"
    }), C = p(() => Object.assign(et.dynamicCss.default(), e.dynamicCss)), y = p({
      get() {
        return n.isScroll = !0, e.text;
      },
      set(b) {
        i && t.emit("update:text", b);
      }
    });
    return oe(() => {
      ce(() => {
        if (r.value && h.value) {
          const b = r.value.clientWidth, w = h.value.offsetWidth;
          b >= w && (n.isScroll = !1);
        }
      });
    }), () => ee(a("div", {
      class: [Ze(""), "tooltip"],
      "data-tooltip": "这是一个 tooltip",
      ref: r
    }, [a("div", {
      class: Ze("_scroll"),
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
    }, null)]) : ""])]), [[re("css"), C.value || {}]]);
  }
}), {
  n: se
} = _("roll-list"), So = /* @__PURE__ */ $({
  name: "RollList",
  emits: ["update:modelValue", "rowClick"],
  directives: {
    css: le
  },
  props: Qe,
  components: {
    LongText: tt
  },
  setup(e, t) {
    var Z;
    const i = "onUpdate:modelValue" in (((Z = Se()) == null ? void 0 : Z.vnode.props) || {}), r = U({
      uuid: vo(se("-")),
      takeFlag: !1,
      rotationTimer: null,
      getInventedListDataBridgeInit: !1
    }), l = T(null), h = T();
    let v = 0, n = null;
    const C = {
      longText: "longText"
    }, y = (f) => {
      f.preventDefault();
    }, u = p(() => Object.assign(Qe.dynamicCss.default(), e.dynamicCss)), b = p(() => {
      let f = {};
      for (let c in u.value)
        c.includes("longText") && (f[c.replace("longText-", "")] = u.value[c]);
      return f;
    }), x = p(() => e.header), w = () => {
      var f;
      for (let c = 0; c < ((f = h.value) == null ? void 0 : f.children.length); c++) {
        const d = h.value.children[c], {
          attractShowCount: g,
          header: H,
          tmp_scaleRule: Y
        } = e;
        g.includes(c) ? (u.value["tr-attract-bg-color-style"] == "double" ? d.style.background = `linear-gradient(${u.value["tr-attract-bg-color-angle"]}deg,${u.value["tr-attract-bg-color-from"]},${u.value["tr-attract-bg-color-to"]})` : d.style.background = u.value["tr-attract-bg-color-value"], Array.from(d.children).forEach((E, j) => {
          E.style.transform = `scale(${Y[0]})`, E.style.flexBasis = H[j].basis + "%";
        })) : (d.style.background = u.value["tr-un-attract-bg-color"], Array.from(d.children).forEach((E, j) => {
          E.style.transform = `scale(${Y[1]})`, E.style.flexBasis = H[j].basis + "%";
        }));
      }
    }, M = p({
      get() {
        return n = new fo(Ie(e.modelValue), e.showCount * 2), J(() => {
          w();
        }), e.modelValue;
      },
      set(f) {
        i && t.emit("update:modelValue", f);
      }
    }), S = p(() => {
      if (r.takeFlag = !r.takeFlag, e.modelValue.length > e.showCount) {
        const f = r.getInventedListDataBridgeInit ? e.rollCount : (r.getInventedListDataBridgeInit = !0) && 0;
        return yo(n.take(f));
      } else
        return new Array(e.modelValue.length).fill(0).map((f, c) => M.value[c]);
    }), D = p(() => {
      let f = M.value.length;
      const c = Number(e.itemHeight.replace("px", "")), d = f <= e.showCount ? f : e.showCount;
      return c * d + "px";
    }), B = function() {
      clearInterval(r.rotationTimer);
    }, W = function() {
      r.rotationTimer && (clearInterval(r.rotationTimer), r.rotationTimer = null);
    };
    window.addEventListener("blur", B), window.addEventListener("focus", W), oe(() => {
      ce(() => {
        r.rotationTimer && (clearInterval(r.rotationTimer), r.rotationTimer = null), e.rollType == Ne.AUTHROLL && (r.rotationTimer = M.value.length > e.showCount && setInterval(() => {
          V();
        }, e.loopTime));
      });
    }), Ve(() => {
      document.removeEventListener("blur", B), document.removeEventListener("focus", W);
    });
    const V = () => {
      var g;
      const f = l == null ? void 0 : l.value, c = e.rollCount <= e.showCount ? e.rollCount : e.showCount, d = f.scrollHeight - f.clientHeight;
      v = v + d / e.showCount * c;
      for (let H = 0; H < ((g = h.value) == null ? void 0 : g.children.length); H++) {
        const Y = h.value.children[H], {
          rollCount: E,
          attractShowCount: j,
          header: q
        } = e;
        j.map((F) => F + E).includes(H) ? (u.value["tr-attract-bg-color-style"] == "double" ? Y.style.background = `linear-gradient(${u.value["tr-attract-bg-color-angle"]}deg,${u.value["tr-attract-bg-color-from"]},${u.value["tr-attract-bg-color-to"]})` : Y.style.background = u.value["tr-attract-bg-color-value"], Array.from(Y.children).forEach((F, G) => {
          F.style.flexBasis = q[G].basis + "%", F.style.transform = `scale(${e.tmp_scaleRule[0]})`;
        })) : (Y.style.background = u.value["tr-un-attract-bg-color"], Array.from(Y.children).forEach((F, G) => {
          F.style.flexBasis = q[G].basis + "%", F.style.transform = `scale(${e.tmp_scaleRule[1]})`;
        }));
      }
      bo(f, "top", v, e.scrollTransition, () => {
        r.takeFlag = !r.takeFlag, f.scrollTop = 0, v = 0;
      });
    }, N = () => {
      r.rotationTimer && clearInterval(r.rotationTimer);
    }, z = () => {
      r.rotationTimer = null;
    }, L = function(f) {
      t.emit && t.emit("rowClick", f);
    };
    Ve(() => {
      N(), r.rotationTimer = null;
    });
    const I = () => e.showHeader ? a("div", {
      class: se("_th")
    }, [x.value.map((f) => a("div", {
      class: se("_td"),
      style: {
        flexBasis: f.basis + "%"
      }
    }, [f.label]))]) : "", O = () => a("div", {
      ref: l,
      onWheel: y,
      class: se("_scroll"),
      style: {
        height: D.value
      }
    }, [a("ul", {
      ref: h,
      class: se("_wrapper")
    }, [S.value.map((f) => K(f))])]), K = (f) => a("li", {
      key: f.__id,
      style: {
        height: e.itemHeight
      },
      onClick: L.bind(this, f)
    }, [e.header.map((c, d) => Q(f, c, d))]), Q = (f, c, d) => {
      var H, Y, E, j, q, F, G, o, m, k, R, P;
      let g = {};
      return c.longText && ((H = c == null ? void 0 : c.longText) != null && H.speed && (g["sco-ani-dura"] = c.longText.speed), (Y = c.longText) != null && Y.GPUSpee && (g["sco-ani-name"] = ((E = c == null ? void 0 : c.longText) == null ? void 0 : E.GPUSpee) == !0 ? "longTextScrollxAnimation3d" : "longTextScrollxAnimation"), ((j = c.longText) != null && j.txtGap || Number(c.longText.txtGap) == 0) && (g["txt-gap"] = c.longText.txtGap)), a("div", {
        class: [se("_td")]
      }, [a("div", {
        class: [C[(q = x.value[d]) == null ? void 0 : q.type]],
        style: {
          color: f[c.prop] ? (F = c.fo) == null ? void 0 : F.color : "none",
          fontSize: f[c.prop] ? ((G = c.fo) == null ? void 0 : G.size) + "px" : "auto",
          fontWeight: f[c.prop] ? (o = c.fo) == null ? void 0 : o.weight : "0",
          fontFamily: f[c.prop] ? (m = c.fo) == null ? void 0 : m.style : "none"
        }
      }, [(k = x.value[d]) != null && k.type && ((R = x.value[d]) == null ? void 0 : R.type) == "longText" ? a(tt, {
        text: f[c.prop] || "undefined",
        speed: f[c.prop] ? (P = c.longText) == null ? void 0 : P.speed : !1,
        dynamicCss: Object.assign(Ie(b.value), g)
      }, null) : f[c.prop] || "undefined"])]);
    };
    return () => ee(a("div", {
      class: se(),
      onMouseenter: N,
      onMouseleave: z
    }, [I(), O()]), [[re("css"), u.value || {}]]);
  }
}), Io = ne(So, "roll-list");
export {
  xo as Pagination,
  ko as Radio,
  Vo as RadioButton,
  Mo as RadioGroup,
  Io as RollList,
  co as ScrollBar,
  Vt as SelectV2,
  Mt as SelectV2Option,
  Bo as TimePicker
};
