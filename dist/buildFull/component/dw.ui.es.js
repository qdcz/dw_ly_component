import { defineComponent as H, createVNode as i, inject as Z, reactive as U, computed as h, resolveComponent as D, ref as _, onMounted as ae, watchEffect as Se, nextTick as X, watch as me, onUnmounted as Re, getCurrentInstance as fe, provide as Ce, withDirectives as te, resolveDirective as ie, createTextVNode as _e, isVNode as yt, openBlock as ue, createElementBlock as de, normalizeClass as q, createElementVNode as le, vModelRadio as ht, toDisplayString as ft, renderSlot as St, onBeforeMount as Ct, normalizeStyle as Ye, Fragment as De, renderList as We } from "vue";
const ne = (e, t) => (e.install = function(s) {
  if (e) {
    const c = e.name || e.__name;
    if (c || t) {
      const r = t ? `dw-${t}` : "dw-" + c.replace(/dw/gi, "").toLowerCase();
      s.component(r, e);
    } else
      console.error(e, t, !t);
  }
}, e), kt = (e) => Array.isArray(e);
function $(e) {
  const t = `vi-${e}`;
  return {
    n: (r) => r ? r.startsWith("-") ? `${t}${r}` : `${t}_${r}` : t,
    classes: (...r) => r.map((a) => {
      if (kt(a)) {
        const [m, o, p = null] = a;
        return m ? o : p;
      }
      return a;
    })
  };
}
const ve = Symbol("select-v2"), Fe = function(e, t) {
  for (let [s, c] of Object.entries(t.value))
    e.style.setProperty("--" + s, c);
}, oe = {
  mounted(e, t) {
    Fe(e, t);
  },
  updated(e, t) {
    Fe(e, t);
  },
  install(e) {
    e.directive("Css", this);
  }
}, Xe = {
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
  n: Bt,
  classes: xt
} = $("select-v2-svg-icon"), ke = /* @__PURE__ */ H({
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
    }, c = function() {
      return i("svg", {
        class: [xt(Bt()), "icon"],
        height: e.height,
        width: e.width,
        viewBox: "0 0 1024 1024",
        xmlns: "http://www.w3.org/2000/svg",
        onClick: s
      }, [i("path", {
        fill: "currentColor",
        d: e.path
      }, null)]);
    };
    return () => c();
  }
}), {
  n: qe,
  classes: It
} = $("select-v2-input"), Mt = /* @__PURE__ */ H({
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
    "vi-select-v2-svg-icon": ke
  },
  setup(e, t) {
    const {
      currentSelect: s,
      clearable: c,
      cacheOptionList: r,
      mode: a
    } = Z(ve), m = "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z", o = "M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z", p = U({
      isHover: !1
    }), B = function(C) {
      t.emit("click", C);
    }, S = function(C) {
      s.value = "", t.emit("clear"), C.stopPropagation();
    }, u = function(C) {
      t.emit("focus", C);
    }, v = function(C) {
      t.emit("blur", C);
    }, x = function(C) {
      p.isHover = !0, t.emit("mouseenter");
    }, b = function(C) {
      p.isHover = !1, t.emit("mouseleave");
    }, L = h(() => r.value[s.value]);
    return () => i("div", {
      class: [It(qe(), e.active ? "active" : "")],
      onClick: B,
      onMouseenter: x,
      onMouseleave: b
    }, [i("input", {
      class: [qe("_inner")],
      placeholder: e.placeholder,
      onFocus: u,
      onBlur: v,
      value: L.value,
      readonly: !0
    }, null), p.isHover && s.value && c.value && a.value == "single" ? i(D("vi-select-v2-svg-icon"), {
      height: e.iconHeight,
      width: e.iconWidth,
      path: o,
      onClick: S
    }, null) : i(D("vi-select-v2-svg-icon"), {
      height: e.iconHeight,
      width: e.iconWidth,
      path: m,
      class: ["arrow", e.active ? "turnUp" : "turnDown"]
    }, null)]);
  }
}), {
  n: xe,
  classes: Ue
} = $("select-v2-dropdown"), Vt = /* @__PURE__ */ H({
  name: "VISelectV2DropDown",
  emits: ["focus", "blur", "click"],
  props: ["active"],
  components: {
    "vi-svg-icon": ke
  },
  setup(e, t) {
    const {
      selectRef: s,
      mode: c,
      currentSelect: r
    } = Z(ve), a = U({
      parentRect: {
        x: 0,
        y: 0
      },
      dropdownTop: "0"
    }), m = _(), o = _(), p = () => {
      X(() => {
        a.dropdownTop = s.value.clientHeight + 10 + "px";
      });
    };
    return ae(() => p()), Se(() => {
      let B = r.value;
      c.value == "multiple" && B && setTimeout(() => {
        p();
      }, 200);
    }), () => {
      var B, S;
      return i("div", {
        class: [xe("-popper"), e.active ? "active" : ""],
        style: {
          top: a.dropdownTop
        }
      }, [i("div", {
        ref: m,
        class: [xe("-arrow"), e.active ? "active" : ""]
      }, null), i("div", {
        ref: o,
        class: [Ue(xe(), e.active ? "active" : "")]
      }, [i("div", {
        class: [Ue(xe("_inner"))]
      }, [(S = (B = t.slots).default) == null ? void 0 : S.call(B)])])]);
    };
  }
}), {
  n: Ge,
  classes: Lt
} = $("select-v2-tag"), Rt = /* @__PURE__ */ H({
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
    "vi-svg-icon": ke
  },
  setup(e, t) {
    const {
      currentSelect: s
    } = Z(ve), c = "M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z", r = function(a) {
      const m = JSON.parse(JSON.stringify(s.value));
      try {
        m.forEach((o, p) => {
          if (o.value == e.value)
            throw m.splice(p, 1), new Error();
        });
      } catch {
      }
      s.value = m, t.emit && t.emit("closeClick", {
        currentClose: {
          label: e.label,
          value: e.value
        },
        currentSelects: JSON.parse(JSON.stringify(m))
      }), a.stopPropagation();
    };
    return () => i("div", {
      class: [Lt(Ge()), e.tooltip ? "useToolTip" : ""],
      "data-txt": e.label
    }, [i("span", {
      class: Ge("_span")
    }, [e.label]), i(D("vi-svg-icon"), {
      path: c,
      onClick: r,
      height: e.height + "px",
      width: e.width + "px"
    }, null)]);
  }
}), {
  n: Ve,
  classes: _t
} = $("scroll-bar"), Pt = /* @__PURE__ */ H({
  name: "VIScrollBar",
  emits: ["focus", "blur", "click"],
  props: ["dynamicCss"],
  directives: {
    css: oe
  },
  setup(e, t) {
    const {
      cacheOptionList: s
    } = Z(ve), c = _(), r = _(), a = U({
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
    }), m = function() {
      X(() => {
        const b = window.getComputedStyle(c.value.children[0]);
        a.realPadding = e.dynamicCss["popper-padding"] * 2, a.realHeight = b.height.replace("px", "") * 1, a.viewHeight = e.dynamicCss["popper-height"] * 1 - a.realPadding, a.maxScrollBoxRange = a.realHeight - a.viewHeight, a.proportion = Number((a.viewHeight / a.realHeight).toFixed(1)), a.scrollBarHeight = a.viewHeight * a.proportion, a.maxScrollBarRange = a.viewHeight - a.scrollBarHeight, a.scrollBarMovePropor = a.maxScrollBarRange / a.maxScrollBoxRange, a.scrollBoxMovePropor = a.maxScrollBoxRange / a.maxScrollBarRange;
      });
    };
    ae(() => {
      m();
    }), me(() => s.value, () => {
      m();
    }, {
      deep: !0,
      immediate: !1
    });
    const o = h(() => a.scrollBarHeight < a.realHeight), p = function(b) {
      const L = b.target.scrollTop;
      v(L);
    }, B = function(b) {
      document.addEventListener("mousedown", S), document.addEventListener("mousemove", u);
    }, S = function(b) {
      a.mouseMoving = !0, a.startY = b.clientY;
    }, u = function(b) {
      a.moveY = a.startY - b.clientY, x();
    };
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", u), document.removeEventListener("mousedown", S), a.startY = 0, a.moveY = 0, a.mouseMoving && (a.translateY = a._move), a.mouseMoving = !1;
    });
    const v = function(b) {
      a.mouseMoving || (a.translateY = a.scrollBarMovePropor * b, r.value.style.transform = `translateY(${a.translateY}px)`);
    }, x = function() {
      let b = 0;
      a.moveY < 0 ? b = a.translateY + Math.abs(a.moveY) : a.moveY >= 0 && (b = a.translateY - Math.abs(a.moveY)), b < 0 && (b = 0), b > a.maxScrollBarRange && (b = a.maxScrollBarRange), a._move = b, r.value.style.transform = `translateY(${b}px)`, c.value.scrollTop = Math.abs(a.scrollBoxMovePropor * b);
    };
    return () => {
      var b, L;
      return i("div", {
        class: [_t(Ve())]
      }, [i("div", {
        class: Ve("left"),
        ref: c,
        onScroll: p
      }, [(L = (b = t.slots).default) == null ? void 0 : L.call(b)]), o.value ? i("div", {
        ref: r,
        class: Ve("right"),
        style: {
          height: a.scrollBarHeight + "px"
        },
        onMousedown: B
      }, null) : ""]);
    };
  }
}), {
  n: Tt,
  classes: Nt
} = $("select-v2-option"), vt = /* @__PURE__ */ H({
  name: "VISelectV2Option",
  emits: ["click"],
  props: ["label", "value"],
  components: {
    "vi-svg-icon": ke
  },
  setup(e, t) {
    const {
      currentSelect: s,
      currentSelectLabel: c,
      mode: r,
      dropDownVisible: a,
      cacheOptionList: m,
      selectedFn: o,
      deleteOptionItem: p
    } = Z(ve), B = function() {
      if (r.value == "single")
        s.value = e.value, c.value = e.label, a.value = !1;
      else if (r.value == "multiple") {
        const u = JSON.parse(JSON.stringify(s.value));
        let v = !1;
        try {
          u.forEach((x, b) => {
            if (x.value == e.value)
              throw u.splice(b, 1), v = !0, new Error();
          });
        } catch {
        }
        v || u.push({
          label: e.label,
          value: e.value
        }), s.value = u;
      }
      o({
        label: e.label,
        value: e.value
      });
    };
    Se(() => {
      m.value = {
        key: e.label,
        value: e.value
      };
    }), ae(() => {
      m.value = {
        key: e.label,
        value: e.value
      };
    }), Re(() => {
      p(e.value);
    });
    const S = h(() => {
      if (r.value == "single")
        return s.value == e.value;
      if (r.value == "multiple") {
        let u = !1;
        try {
          s.value.forEach((v) => {
            if (u = v.value == e.value)
              throw new Error();
          });
        } catch {
        }
        return u;
      }
    });
    return () => i("li", {
      class: [Nt(Tt()), S.value ? "active" : ""],
      onClick: B
    }, [i("div", {
      class: "txt"
    }, [e.label])]);
  }
}), {
  n: ge,
  classes: At
} = $("select-v2"), $t = /* @__PURE__ */ H({
  name: "VISelectV2",
  emits: ["focus", "blur", "update:modelValue", "handleSelected", "handleClear", "mouseenter", "mouseleave"],
  props: Xe,
  directives: {
    css: oe
  },
  components: {
    "vi-select-v2-input": Mt,
    "vi-select-v2-drop-down": Vt,
    "vi-scroll-bar": Pt,
    "vi-select-v2-tag": Rt,
    "vi-select-v2-svg-icon": ke,
    // 'vi-select-v2-unfold-dialog': VISelectV2UnfoldDialog,
    "vi-select-v2-option": vt
  },
  setup(e, t) {
    var ee;
    const c = "onUpdate:modelValue" in (((ee = fe()) == null ? void 0 : ee.vnode.props) || {}), r = () => "xxxxxxxx".replace(/[xy]/g, function(n) {
      var f = 0 | 16 * Math.random(), I = n == "x" ? f : 8 | 3 & f;
      return I.toString(16);
    }), a = _(), m = _(), o = _(), p = U({
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
    }), B = "M955.069071 864.311021 740.015134 649.258107c-3.752464-3.751441-8.841366-5.860475-14.149255-5.860475-5.306866 0-10.395768 2.108011-14.149255 5.860475l-16.692171 16.692171-38.34226-38.34226c53.03796-59.810201 85.298711-138.442072 85.298711-224.478588 0-186.774871-151.952784-338.727655-338.727655-338.727655S64.527642 216.35456 64.527642 403.12943c0 186.775894 151.952784 338.728678 338.727655 338.728678 86.36909 0 165.276231-32.510438 225.170343-85.913718l38.303374 38.303374-17.34504 17.34504c-7.812943 7.813966-7.812943 20.48352 0 28.297486l215.051891 215.052914c3.753487 3.751441 8.841366 5.860475 14.149255 5.860475 5.306866 0 10.395768-2.108011 14.149255-5.860475l62.334697-62.334697C962.883037 884.794541 962.883037 872.124987 955.069071 864.311021zM104.546078 403.12943c0-164.709319 133.9999-298.709219 298.709219-298.709219s298.709219 133.9999 298.709219 298.709219S567.964616 701.839673 403.255297 701.839673 104.546078 567.838749 104.546078 403.12943zM878.585119 912.496463 691.829691 725.741036l34.036187-34.036187 186.755428 186.755428L878.585119 912.496463z", S = {
      popperHeight: "0",
      inputLineHeight: "0"
    }, u = function(n) {
      let f = !1;
      const I = n.path || n.composedPath && n.composedPath();
      for (let P = 0; P < I.length; P++) {
        const E = I[P];
        if (E.classList && E.classList.value && E.getAttribute("class").includes("-select-v2") && E.dataset.id == p.uuid) {
          f = !0;
          break;
        }
      }
      f || v();
    };
    document.addEventListener("mousedown", u);
    const v = function() {
      p.dropDownVisible = !1, t.emit && t.emit("blur");
    }, x = function(n) {
      return new Promise((f, I) => {
        f(X(() => window.getComputedStyle(n.value)));
      });
    }, b = function(n) {
      e.mode == "single" ? t.emit && t.emit("handleSelected", n) : X(() => {
        t.emit && t.emit("handleSelected", {
          currentSelected: n,
          currentSelects: JSON.parse(JSON.stringify(e.modelValue))
        });
      });
    }, L = function(n) {
      delete p.OptionList[n];
    }, C = function(n) {
      if (n == "co1")
        return "";
      if (n == "auto" || n == "co2" || n == "co3" || n == "co4" || n == "co5" || n == "co6" || n == "co7")
        return "display:flex;flex-wrap: wrap;";
    }, z = function(n) {
      p.dropDownVisible = !p.dropDownVisible, t.emit && (p.dropDownVisible ? t.emit("focus") : t.emit("blur"));
    }, R = function(n) {
    }, W = function(n) {
    }, M = function() {
      t.emit && t.emit("handleClear");
    }, T = function() {
      t.emit && t.emit("mouseenter");
    }, N = function() {
      t.emit && t.emit("mouseleave");
    }, g = function(n) {
      t.emit && t.emit("handleClear", n);
    }, w = function(n) {
      let f = n.target.value, I = {};
      p.list.forEach((P) => P.label.includes(f) ? I[P.value] = P.label : ""), p.searchValue = I, p.searchLabel = f, X(() => {
        Y.value;
      });
    };
    me(() => e.list, () => {
      p.list = JSON.parse(JSON.stringify(e.list));
    }, {
      deep: !0,
      immediate: !0
    });
    const k = h({
      get() {
        return e.mode == "multiple" && (async () => {
          const {
            height: n
          } = await x(o);
          e.dynamicCss["input-line-height"] = n.replace("px", "") * 1, j.value = e.modelValue.length > 0 ? " " : e.placeholder, e.modelValue.length <= 1 && (e.dynamicCss["input-line-height"] = S.inputLineHeight);
        })(), e.modelValue;
      },
      set(n) {
        c && t.emit("update:modelValue", n);
      }
    }), V = h({
      get() {
        return p.currentSelectLabel;
      },
      set(n) {
        p.currentSelectLabel = n;
      }
    }), Y = h({
      get() {
        let n = Object.keys(p.OptionList).length;
        return n <= 5 && n > 0 ? p.searchValue || (e.search && n++, y.value["popper-height"] = y.value["popper-option-height"] * n + y.value["popper-padding"] * 2) : y.value["popper-height"] = S.popperHeight, p.OptionList;
      },
      set(n) {
        p.OptionList[n.value] = n.key;
      }
    }), G = h({
      get() {
        return p.dropDownVisible;
      },
      set(n) {
        p.dropDownVisible = n;
      }
    }), j = h({
      get() {
        return p.__inputPlaceholder || e.placeholder;
      },
      set(n) {
        p.__inputPlaceholder = n;
      }
    }), l = h(() => e.clearable), d = h(() => e.mode), y = h(() => {
      let n = Object.assign(Xe.dynamicCss.default(), e.dynamicCss);
      return S.popperHeight = n["popper-height"], S.inputLineHeight = n["input-line-height"], n;
    }), O = h(() => e.mode == "multiple"), A = h(() => !!e.searchImg);
    Ce(ve, {
      selectRef: a,
      currentSelect: k,
      currentSelectLabel: V,
      mode: d,
      dynamicCss: y,
      dropDownVisible: G,
      placeholder: j,
      cacheOptionList: Y,
      clearable: l,
      selectedFn: b,
      deleteOptionItem: L
    });
    const F = function(n) {
      return i(D("vi-select-v2-tag"), {
        tooltip: e.tooltip,
        label: n.label,
        value: n.value,
        height: y.value["tag-close-size"],
        width: y.value["tag-close-size"],
        onCloseClick: g
      }, null);
    }, J = function() {
      return i(D("vi-select-v2-input"), {
        iconHeight: y.value["input-icon-width"],
        iconWidth: y.value["input-icon-width"],
        ref: m,
        active: p.dropDownVisible,
        placeholder: j.value,
        onClick: z,
        onFocus: R,
        onBlur: W,
        onClear: M,
        onMouseenter: T,
        onMouseleave: N
      }, null);
    }, K = function() {
      return i("li", {
        class: ge("-search")
      }, [A.value ? i("img", {
        class: ge("--search"),
        src: e.searchImg
      }, null) : i(D("vi-select-v2-svg-icon"), {
        class: ge("--search"),
        path: B
      }, null), i("input", {
        value: p.searchLabel,
        class: ge("-search__input"),
        placeholder: "请输入您要搜索的内容",
        onInput: w
      }, null)]);
    }, Q = function() {
      return i(D("vi-select-v2-drop-down"), {
        active: p.dropDownVisible
      }, {
        default: () => [i(D("vi-scroll-bar"), {
          dynamicCss: y.value
        }, {
          default: () => {
            var n, f;
            return [i("ul", null, [e.search ? K() : "", p.searchValue ? i("div", {
              style: C(e.itemLayout),
              class: e.itemLayout
            }, [Object.keys(p.searchValue).map((I, P) => i(D("vi-select-v2-option"), {
              key: I,
              value: I,
              label: Object.values(p.searchValue)[P]
            }, null))]) : i("div", {
              style: C(e.itemLayout),
              class: e.itemLayout
            }, [(f = (n = t.slots).default) == null ? void 0 : f.call(n)]), Object.keys(Y.value).length <= 0 ? i("li", {
              class: ge("-notData")
            }, [_e("暂无数据")]) : ""])];
          }
        })]
      });
    };
    return () => te(i("div", {
      "data-id": p.uuid,
      class: [At(ge())],
      ref: a
    }, [O.value ? i("div", {
      ref: o,
      class: ge("-taglist"),
      onClick: z
    }, [k.value.map((n) => F(n))]) : "", J(), Q()]), [[ie("css"), y.value || {}]]);
  }
}), Et = ne($t, "select-v2"), Ht = ne(vt, "select-v2-option"), Je = {
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
}, be = Symbol("pagination"), {
  n: zt,
  classes: Ot
} = $("pagination-prev"), Ke = /* @__PURE__ */ H({
  name: "VIPaginationPrev",
  emits: ["click"],
  setup(e, t) {
    let s = Z(be);
    const c = h(() => s.currentPage.value <= 1), r = function(a) {
      c.value || t.emit("click", a);
    };
    return () => i("button", {
      type: "button",
      class: [Ot(zt()), c.value ? "disabled" : ""],
      onClick: r.bind(this)
    }, [i("svg", {
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12"
    }, [i("path", {
      fill: "currentColor",
      d: "M740.352 174.08l-57.216-59.008L283.648 512l399.488 396.928 57.216-59.008L404.48 512z",
      "p-id": "3023"
    }, null)])]);
  }
}), {
  n: jt,
  classes: Yt
} = $("pagination-next"), Qe = /* @__PURE__ */ H({
  name: "VIPaginationNext",
  emits: ["click"],
  setup(e, t) {
    let s = Z(be);
    const c = h(() => s.currentPage.value >= s.pageCount.value), r = function(a) {
      c.value || t.emit("click", a);
    };
    return () => i("button", {
      type: "button",
      class: [Yt(jt()), c.value ? "disabled" : ""],
      onClick: r.bind(this)
    }, [i("svg", {
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12"
    }, [i("path", {
      fill: "currentColor",
      d: "M283.648 174.08l57.216-59.008L740.352 512 340.864 908.928 283.648 849.92 619.52 512z"
    }, null)])]);
  }
}), {
  n: se
} = $("pagination-pager"), Ze = /* @__PURE__ */ H({
  name: "VIPaginationPager",
  emits: ["click"],
  setup(e, t) {
    let {
      currentPage: s,
      pagerCount: c,
      pageCount: r
    } = Z(be);
    const a = U({
      quickPrevBtnIsHover: !1,
      quickNextBtnIsHover: !1
    }), m = {
      quickLeftArrow: "M62.56 511.904L485.952 88.256a48.64 48.64 0 0 1 68.736 68.736L199.616 512.064l356.8 356.8A48.64 48.64 0 0 1 487.68 937.6l-39.744-39.744 0.256-0.256L62.528 511.936z m388.8 0L874.752 88.256a48.64 48.64 0 0 1 68.736 68.736L588.416 512.064l356.8 356.8A48.64 48.64 0 0 1 876.48 937.6l-39.776-39.744 0.288-0.256-385.664-385.664z",
      quickRightArrow: 'M948.064 513.056L536.064 925.312a47.296 47.296 0 0 1-66.88-66.88l345.504-345.504L467.52 165.76a47.296 47.296 0 0 1 66.88-66.88l38.688 38.688-0.256 0.256 375.264 375.264m-378.336-0.032L157.76 925.312a47.296 47.296 0 0 1-66.88-66.88l345.472-345.504L89.184 165.76a47.296 47.296 0 0 1 66.88-66.88l38.688 38.688-0.256 0.256 375.264 375.264"',
      ellipsis: "M110.336 572.330667a85.333333 85.333333 0 1 0 120.661333-120.661334 85.333333 85.333333 0 0 0-120.661333 120.661334zM451.669333 572.330667a85.333333 85.333333 0 1 0 120.661334-120.661334 85.333333 85.333333 0 0 0-120.661334 120.661334zM793.002667 572.330667a85.333333 85.333333 0 1 0 120.661333-120.661334 85.333333 85.333333 0 0 0-120.661333 120.661334z"
    }, o = h(() => Math.floor(s.value / c.value) * c.value), p = h(() => c.value < r.value ? c.value : r.value - 1), B = h(() => S.value && u.value ? s.value : !1), S = h(() => r.value <= c.value ? 0 : s.value >= c.value - 2), u = h(() => r.value <= c.value ? 0 : s.value < r.value - c.value + 4), v = h(() => r.value > 1), x = function(M) {
      t.emit("click", M);
    }, b = (M) => a.quickPrevBtnIsHover = !0, L = (M) => a.quickPrevBtnIsHover = !1, C = (M) => a.quickNextBtnIsHover = !0, z = (M) => a.quickNextBtnIsHover = !1, R = (M) => s.value = s.value - c.value + 2, W = (M) => s.value = s.value + c.value - 2;
    return () => i("ul", {
      class: [se()]
    }, [i("li", {
      class: [se("_btn"), s.value == 1 ? "active" : ""],
      onClick: x.bind(this, 1)
    }, [1]), S.value ? i("li", {
      class: [se("_btn"), "quickPrev"],
      onMouseenter: b,
      onMouseleave: L,
      onClick: R
    }, [i("svg", {
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      name: a.quickPrevBtnIsHover ? "quickLeftArrow" : "ellipsis",
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12"
    }, [i("path", {
      fill: "currentColor",
      d: a.quickPrevBtnIsHover ? m.quickLeftArrow : m.ellipsis
    }, null)])]) : i("div", null, null), new Array(p.value).fill(B.value ? B.value : 0).map((M, T) => {
      let N = s.value, g = Math.ceil((c.value - 2) / 2), w = T > 0 && T < c.value - 1, k = o.value;
      if (M > 0) {
        if (w)
          return M = T <= g ? M - g + T : M + T - g, i("li", {
            class: [se("_btn"), N == M ? "active" : ""],
            onClick: x.bind(this, M)
          }, [M]);
      } else if (w)
        return N < c.value - 2 ? i("li", {
          class: [se("_btn"), N == k + T + 1 ? "active" : ""],
          onClick: x.bind(this, k + T + 1)
        }, [k + T + 1]) : i("li", {
          class: [se("_btn"), N == r.value - c.value + 1 + T ? "active" : ""],
          onClick: x.bind(this, r.value - c.value + 1 + T)
        }, [r.value - c.value + 1 + T]);
    }), u.value > 0 ? i("li", {
      class: [se("_btn"), "quickNext"],
      onMouseenter: C,
      onMouseleave: z,
      onClick: W
    }, [i("svg", {
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      name: a.quickNextBtnIsHover ? "quickRightArrow" : "ellipsis",
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12"
    }, [i("path", {
      fill: "currentColor",
      d: a.quickNextBtnIsHover ? m.quickRightArrow : m.ellipsis
    }, null)])]) : i("div", null, null), v.value ? i("li", {
      class: [se("_btn"), s.value == r.value ? "active" : ""],
      onClick: x.bind(this, r.value)
    }, [r.value]) : ""]);
  }
}), {
  n: et,
  classes: Dt
} = $("pagination-jump"), tt = /* @__PURE__ */ H({
  name: "VIPaginationJump",
  emits: ["jump-page"],
  setup(e, t) {
    let s = Z(be);
    const c = U({
      num: ""
    }), r = _(), a = function(o) {
      (() => c.num = Math.random() * 1e6)();
      const B = Number(o.target.value);
      B <= 0 ? c.num = 1 : B > s.pageCount.value ? c.num = s.pageCount.value : c.num = B;
    }, m = function(o) {
      o.key == "Enter" && (r.value.blur(), X(() => t.emit("jump-page", c.num || 1)));
    };
    return () => i("div", {
      class: [Dt(et())]
    }, [i("span", null, [s.jumpLabel.value]), i("input", {
      ref: r,
      class: [et("_input")],
      value: c.num,
      type: "number",
      min: "1",
      tabindex: "0",
      autocomplete: "off",
      onChange: a.bind(this),
      onKeydown: m.bind(this)
    }, null)]);
  }
}), {
  n: Le,
  classes: Wt
} = $("pagination-total"), nt = /* @__PURE__ */ H({
  name: "VIPaginationTotal",
  emits: ["click"],
  setup() {
    let {
      total: e,
      totalLabel: t
    } = Z(be);
    return () => i("div", {
      class: [Wt(Le())]
    }, [i("span", {
      class: [Le("_label")]
    }, [t.value]), i("span", {
      class: [Le("_value")]
    }, [e.value])]);
  }
});
function Ft(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !yt(e);
}
const {
  n: ot,
  classes: Xt
} = $("pagination"), qt = /* @__PURE__ */ H({
  name: "VIPagination",
  props: Je,
  directives: {
    css: oe
  },
  emits: ["size-change", "update:modelValue", "current-change", "update:total"],
  components: {
    prev: Ke,
    pager: Ze,
    next: Qe,
    jump: tt,
    total: nt,
    "dw-select-v2": Et,
    "dw-select-v2-option": Ht
  },
  setup(e, t) {
    var G, j;
    const s = (l) => typeof l != "number", c = (l) => l instanceof Array, r = ((j = (G = fe()) == null ? void 0 : G.vnode) == null ? void 0 : j.props) || {}, a = "onUpdate:sizeChange" in r || "onUpdate:size-change" in r || "onSizeChange" in r, m = "onUpdate:currentPage" in r || "onUpdate:current-page" in r || "onUpdate:modelValue" in r || "onCurrentChange" in r, o = "update:total" in r;
    let p = 10, B = 1, S = 100;
    const u = U({
      select_curSelect: "",
      select_list: [
        // { value: '100', label: '100/page', },
        // { value: '200', label: '200/page', },
      ],
      select_dynamicCss: {
        // "input-txt-alight": "center",
      }
    }), v = function() {
      c(e.pageSize) && (u.select_list = e.pageSize.map((l) => ({
        value: l,
        label: l + "/page"
      })), u.select_curSelect = u.select_list[0].value);
    }, x = h(() => {
      let l = 0;
      return s(e.total) ? console.warn("total属性不合格") : l = Math.max(1, Math.ceil(e.total / L.value)), l;
    }), b = h(() => {
      let l = 0;
      return s(e.total) || (s(e.pagerCount) || (l = x.value > 7 ? Math.max(7, e.pagerCount % 2 == 0 ? e.pagerCount - 1 : e.pagerCount) : x.value), l > 29 && (l = 29)), l;
    }), L = h({
      get() {
        let l = s(e.pageSize) ? p : e.pageSize > 5 ? e.pageSize : 5;
        return l = c(e.pageSize) ? u.select_curSelect : l, l;
      },
      set(l) {
        s(e.pageSize) && (p = l), a && (e.modelValue > Math.ceil(e.total / l) && (C.value = Math.ceil(e.total / l)), X(() => {
          t.emit("size-change", {
            pageSize: l,
            currentPage: e.modelValue
          });
        }));
      }
    }), C = h({
      get() {
        return s(e.modelValue) ? B : e.modelValue;
      },
      set(l) {
        let d = l;
        l < 1 ? d = 1 : l > x.value && (d = x.value), m && (t.emit("update:modelValue", d), t.emit("current-change", d));
      }
    }), z = h({
      get() {
        return s(e.total) ? S : e.total;
      },
      set(l) {
        let d = l;
        l < 0 && (d = 0), S = d, o && t.emit("update:total", d);
      }
    }), R = h(() => e.totalLabel), W = h(() => e.jumpLabel), M = h(() => Object.assign(Je.dynamicCss.default(), e.dynamicCss)), T = h(() => {
      let l = {};
      for (let d in M.value)
        d.includes("select-v2-") && (l[d.replace("select-v2-", "")] = M.value[d]);
      return l;
    }), N = h(() => {
      let l = e.layout;
      const d = {
        total: !1,
        size: !1,
        prev: !1,
        next: !1,
        pager: !1,
        jump: !1
      };
      for (let y in d)
        d[y] = l.replace(/\s+/g, "").split(",").findIndex((O) => O == y) != -1;
      return d;
    });
    Ce(be, {
      pageCount: x,
      pagerCount: b,
      pageSize: L,
      currentPage: C,
      total: z,
      totalLabel: R,
      jumpLabel: W
    }), ae(() => {
      v();
    }), me(() => e.pageSize, () => {
      v();
    }, {
      deep: !0
    });
    const g = (l) => C.value = C.value - 1, w = (l) => C.value = C.value + 1, k = (l) => C.value = l, V = (l) => C.value = l, Y = function(l) {
      L.value = l.value;
    };
    return () => {
      let l;
      return te(i("div", {
        class: [Xt(ot()), e.background ? "bgbox" : ""]
      }, [N.value.total ? i(nt, null, null) : "", N.value.size && c(e.pageSize) ? i(D("dw-select-v2"), {
        modelValue: u.select_curSelect,
        "onUpdate:modelValue": (d) => u.select_curSelect = d,
        dynamicCss: T.value,
        onHandleSelected: Y,
        class: ot("-select")
      }, Ft(l = u.select_list.map((d) => i(D("dw-select-v2-option"), {
        key: d.value,
        label: d.label,
        value: d.value
      }, null))) ? l : {
        default: () => [l]
      }) : "", N.value.prev ? i(Ke, {
        disabled: !1,
        onClick: g
      }, null) : "", N.value.pager ? i(Ze, {
        onClick: k
      }, null) : "", N.value.next ? i(Qe, {
        disabled: !1,
        onClick: w
      }, null) : "", N.value.jump ? i(tt, {
        onJumpPage: V
      }, null) : ""]), [[ie("css"), M.value || {}]]);
    };
  }
}), Yn = ne(qt, "pagination"), Pe = {
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
}, Ae = Symbol("radio"), { n: Ut, classes: Gt } = $("radio"), Jt = H({
  name: "VIRadio",
  props: Pe,
  emits: ["click", "update:modelValue", "change"],
  setup(e, t) {
    let s = Z(Ae, void 0);
    const c = (o) => {
      a.value || (s ? s.changeModelValue(o) : t.emit("update:modelValue", "on"));
    }, r = h({
      get() {
        return s ? e.value == s.currentSelect.value : e.modelValue;
      },
      set() {
      }
    }), a = h({
      get() {
        return !!e.disabled;
      },
      set() {
      }
    }), m = h({
      get() {
        return s ? s.currentSelect.value : e.modelValue;
      },
      set(o) {
        t.emit && t.emit("update:modelValue", o);
      }
    });
    return {
      n: Ut,
      classes: Gt,
      handleClick: c,
      IsChecked: r,
      IsDisable: a,
      modelValueBridge: m
    };
  }
}), Me = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [c, r] of t)
    s[c] = r;
  return s;
}, Kt = ["value", "checked", "disabled"];
function Qt(e, t, s, c, r, a) {
  return ue(), de(
    "div",
    {
      class: q([e.classes(e.n()), e.IsChecked ? e.n("active") : "", e.border ? e.n("border") : ""]),
      onClick: t[1] || (t[1] = (m) => e.handleClick(e.value))
    },
    [
      le(
        "div",
        {
          class: q([e.classes(e.n("_input__wrapper")), e.IsDisable ? "is-disabled" : ""])
        },
        [
          te(le("input", {
            class: q([e.classes(e.n("_input"))]),
            type: "radio",
            value: e.value,
            checked: e.IsChecked,
            disabled: e.IsDisable,
            "onUpdate:modelValue": t[0] || (t[0] = (m) => e.modelValueBridge = m)
          }, null, 10, Kt), [
            [ht, e.modelValueBridge]
          ]),
          le(
            "div",
            {
              class: q([e.classes(e.n("_circle"))])
            },
            null,
            2
            /* CLASS */
          )
        ],
        2
        /* CLASS */
      ),
      le(
        "label",
        {
          class: q(e.classes(e.n("_label"), e.IsDisable ? "is-disabled" : ""))
        },
        ft(e.label),
        3
        /* TEXT, CLASS */
      )
    ],
    2
    /* CLASS */
  );
}
const Zt = /* @__PURE__ */ Me(Jt, [["render", Qt]]), en = {
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
}, { n: tn, classes: nn } = $("radio-button"), on = H({
  name: "VIRadioButton",
  props: en,
  emits: ["click", "update:modelValue", "change"],
  // directives: { ripple },
  setup(e, t) {
    let s = Z(Ae);
    const c = _(null), r = function(p) {
      m.value || (s ? s.changeModelValue(e.value) : t.emit("update:modelValue", "on"));
    }, a = h({
      get() {
        return s ? e.value == s.currentSelect.value : e.modelValue;
      },
      set() {
      }
    }), m = h({
      get() {
        return !!e.disabled;
      },
      set() {
      }
    }), o = h({
      get() {
        return s ? s.currentSelect.value : e.modelValue;
      },
      set(p) {
        t.emit && t.emit("update:modelValue", p);
      }
    });
    return {
      n: tn,
      classes: nn,
      handleClick: r,
      IsChecked: a,
      IsDisable: m,
      refRadioButton: c,
      modelValue: o
    };
  }
}), ln = ["value", "checked", "disabled"];
function an(e, t, s, c, r, a) {
  return ue(), de(
    "div",
    {
      ref: "refRadioButton",
      class: q([e.classes(e.n()), e.IsChecked ? e.n("active") : "", e.border ? e.n("border") : ""]),
      onClick: t[1] || (t[1] = (...m) => e.handleClick && e.handleClick(...m))
    },
    [
      te(le("input", {
        class: q([e.classes(e.n("_input"))]),
        type: "radio",
        value: e.value,
        checked: e.IsChecked,
        disabled: e.IsDisable,
        "onUpdate:modelValue": t[0] || (t[0] = (m) => e.modelValue = m)
      }, null, 10, ln), [
        [ht, e.modelValue]
      ]),
      le(
        "label",
        {
          class: q(e.classes(e.n("_label"), e.IsDisable ? "is-disabled" : ""))
        },
        ft(e.label),
        3
        /* TEXT, CLASS */
      )
    ],
    2
    /* CLASS */
  );
}
const rn = /* @__PURE__ */ Me(on, [["render", an]]), { n: sn, classes: cn } = $("radio-group"), un = H({
  name: "VIRadioGroup",
  props: Pe,
  emits: ["click", "update:modelValue", "change"],
  directives: { css: oe },
  setup(e, t) {
    const s = (a = e.modelValue) => {
      t.emit("update:modelValue", a), X(() => t.emit("change", a));
    }, c = h({
      get() {
        return e.modelValue;
      },
      set(a) {
        t.emit && t.emit("update:modelValue", a);
      }
    }), r = h(() => Object.assign(Pe.dynamicCss.default(), e.dynamicCss));
    return Ce(Ae, {
      currentSelect: c,
      changeModelValue: s
    }), {
      n: sn,
      classes: cn,
      dynamicCssBridge: r
    };
  }
});
function dn(e, t, s, c, r, a) {
  const m = ie("css");
  return te((ue(), de(
    "div",
    {
      class: q(e.classes(e.n()))
    },
    [
      St(e.$slots, "default")
    ],
    2
    /* CLASS */
  )), [
    [m, e.dynamicCssBridge || {}]
  ]);
}
const pn = /* @__PURE__ */ Me(un, [["render", dn]]), Dn = ne(Zt, "radio"), Wn = ne(rn, "radio-button"), Fn = ne(pn, "radio-group"), lt = {
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
}, bt = Symbol("time-picker"), {
  n: gn,
  classes: mn
} = $("input-svg-icon"), hn = /* @__PURE__ */ H({
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
    const s = function(c) {
      t.emit("click", c);
    };
    return () => i("svg", {
      class: [mn(gn()), "icon"],
      height: e.height,
      width: e.width,
      viewBox: "0 0 1024 1024",
      xmlns: "http://www.w3.org/2000/svg",
      onClick: s
    }, [i("path", {
      fill: "currentColor",
      d: e.path
    }, null)]);
  }
}), at = {
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
  n: it,
  classes: fn
} = $("timePickerInput"), vn = /* @__PURE__ */ H({
  name: "VITimePickerInput",
  emits: ["focus", "blur", "click", "update:modelValue", "close"],
  directives: {
    css: oe
  },
  props: at,
  components: {
    "vi-input-svg-icon": hn
  },
  setup(e, t) {
    const s = "M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z", c = U({
      softFocus: !1,
      isHover: !1
    }), r = function(R) {
      C.value || t.emit("click", R);
    }, a = function(R) {
      C.value || (t.emit("update:modelValue", R.target.value), t.emit("close"), R.stopPropagation());
    }, m = function(R) {
      C.value || (t.emit("focus", R), c.softFocus = !0);
    }, o = function(R) {
      C.value || (t.emit("blur", R), c.softFocus = !1);
    }, p = function(R) {
      C.value || (c.isHover = !0);
    }, B = function(R) {
      C.value || (c.isHover = !1);
    }, S = function(R) {
      C.value || t.emit("update:modelValue", R.target.value);
    }, u = function(R) {
      C.value || t.emit("update:modelValue", R.target.value);
    }, v = h(() => Object.assign(at.dynamicCss.default(), e.dynamicCss)), x = h(() => typeof e.readonly == "string" ? !0 : e.readonly), b = h(() => typeof e.clearable == "string" ? !0 : e.clearable), L = h(() => typeof e.showPassword == "string" ? !0 : e.showPassword), C = h(() => typeof e.disabled == "string" ? !0 : e.disabled), z = h(() => c.softFocus ? "active" : "");
    return () => te(i("div", {
      class: [fn(it()), z.value, C.value ? "disabled" : ""],
      onClick: r,
      onMouseenter: p,
      onMouseleave: B
    }, [i("input", {
      class: [it("_inner")],
      placeholder: e.placeholder,
      onFocus: m,
      onBlur: o,
      readonly: x.value || C.value,
      value: e.modelValue,
      onChange: S,
      onInput: u,
      type: L.value ? "password" : "text"
    }, null), e.modelValue && b.value && c.isHover ? i(D("vi-input-svg-icon"), {
      class: "icon",
      height: v.value["input-icon-width"],
      width: v.value["input-icon-width"],
      path: s,
      onClick: a
    }, null) : ""]), [[ie("css"), v.value || {}]]);
  }
}), {
  n: Ie,
  classes: rt
} = $("popper"), bn = /* @__PURE__ */ H({
  name: "VITimePickerPopper",
  emits: ["focus", "blur", "click"],
  props: ["active"],
  setup(e, t) {
    let {
      timePickerRef: s
    } = Z(bt);
    const c = U({
      parentRect: {
        x: 0,
        y: 0,
        height: 0,
        width: 0
      },
      dropdownTop: "0"
    }), r = _(null), a = _(null), m = () => {
      X(() => {
        c.parentRect = s.value.getBoundingClientRect(), c.dropdownTop = c.parentRect.height + 10 + "px";
      });
    };
    return ae(() => m()), () => {
      var o, p;
      return i("div", {
        class: [Ie(""), e.active ? "active" : ""],
        style: {
          top: c.dropdownTop
        }
      }, [i("div", {
        ref: r,
        class: [Ie("_arrow")]
      }, [e.active]), i("div", {
        ref: a,
        class: [rt(Ie("_content"))]
      }, [i("div", {
        class: [rt(Ie("_inner"))]
      }, [(p = (o = t.slots).default) == null ? void 0 : p.call(o)])])]);
    };
  }
}), st = {
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
var ye = /* @__PURE__ */ ((e) => (e.HORIZONTAL = "horizontal", e.VERTICAL = "vertical", e))(ye || {});
const wn = {
  // 横向还是竖向
  type: {
    type: [String || ye],
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
}, wt = Symbol("scroll-bar"), {
  n: yn
} = $("scroll-bar__thumb"), Sn = /* @__PURE__ */ H({
  name: "ScrollBar",
  emits: ["update:height", "update:width"],
  props: wn,
  setup(e, t) {
    const {
      thumbRatioY: s,
      thumbRatioX: c,
      thumbRatioYMaxRange: r,
      thumbRatioXMaxRange: a,
      wrapperInnerMaxiMoveProportionY: m,
      wrapperInnerMaxiMoveProportionX: o,
      scrollBarRef: p
    } = Z(wt), B = _(), S = U({
      mouseMoving: !1
    });
    let u = 0, v = 0, x = 0, b = 0, L = 0, C = 0;
    const z = h({
      get() {
        return e.height;
      },
      set(g) {
        t.emit && t.emit("update:height", g);
      }
    }), R = h({
      get() {
        return e.width;
      },
      set(g) {
        t.emit && t.emit("update:width", g);
      }
    }), W = function(g) {
      if (g == "vertical") {
        let w = 0;
        const k = L;
        w = x < 0 ? k + Math.abs(x) : k - Math.abs(x), w < 0 && (w = 0), w > r.value && (w = r.value), p.value.scrollTop = Math.abs(m.value * w);
      } else if (g == "horizontal") {
        let w = 0;
        const k = C;
        w = b < 0 ? k + Math.abs(b) : k - Math.abs(b), w < 0 && (w = 0), w > a.value && (w = a.value), p.value.scrollLeft = Math.abs(o.value * w);
      }
    }, M = function(g) {
      S.mouseMoving = !0, L = Number(s.value.slice(11, -3)), C = Number(c.value.slice(11, -3)), u = Number(g.clientY), v = Number(g.clientX);
    }, T = function(g) {
      x = u - g.clientY, b = v - g.clientX, W(e.type);
    };
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", T), document.removeEventListener("mousedown", M), u = 0, v = 0, x = 0, b = 0, L = 0, C = 0, S.mouseMoving = !1;
    });
    const N = (g) => {
      document.addEventListener("mousedown", M), document.addEventListener("mousemove", T);
    };
    return () => i("div", {
      class: yn(),
      ref: B,
      style: {
        height: z.value,
        width: R.value,
        transform: e.type == "vertical" ? e.ratioY : e.ratioX
      },
      onMousedown: N
    }, null);
  }
}), {
  n: we
} = $("scroll-bar"), Cn = /* @__PURE__ */ H({
  name: "ScrollBar",
  emits: ["update:width", "scroll"],
  directives: {
    css: oe
  },
  props: st,
  // expose:['setScrollTop','setScrollLeft','setScrollTop'],
  components: {
    "scroll-bar-thumb": Sn
  },
  setup(e, t) {
    let s = null;
    const c = (l) => {
      k();
    }, r = _(), a = _(), m = _(), o = U({
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
    let p = _(!1);
    me(() => e.noResize, (l) => {
      l ? s == null || s.disconnect() : (s = new MutationObserver(c), X(() => {
        s.observe(a.value, {
          attributes: !0,
          childList: !0,
          subtree: !0
        });
      }));
    }, {
      immediate: !0
    });
    const B = h(() => Object.assign(st.dynamicCss.default(), e.dynamicCss)), S = h(() => e.height), u = h({
      get() {
        return o.cacheContainerWidth;
      },
      set(l) {
        o.cacheContainerWidth = l;
      }
    }), v = h({
      get() {
        return o.thumbHeight;
      },
      set(l) {
        o.thumbHeight = l;
      }
    }), x = h({
      get() {
        return o.thumbWidth;
      },
      set(l) {
        o.thumbWidth = l;
      }
    }), b = h({
      get() {
        return o.thumbRatioX;
      },
      set(l) {
        o.thumbRatioX = l;
      }
    }), L = h({
      get() {
        return o.thumbRatioY;
      },
      set(l) {
        o.thumbRatioY = l;
      }
    }), C = h(() => o.thumbRatioYMaxRange), z = h(() => o.thumbRatioXMaxRange), R = h(() => o.wrapperInnerMaxiMoveProportionY), W = h(() => o.wrapperInnerMaxiMoveProportionX), M = (l) => {
      o.thumbRatioY = `translateY(${String(o.thumbRatioYProportion * l) + "px"})`;
    }, T = (l) => {
      o.thumbRatioX = `translateX(${String(o.thumbRatioXProportion * l) + "px"})`;
    }, N = (l) => {
      r.value.scrollTop = l;
    }, g = (l) => {
      r.value.scrollLeft = l;
    }, w = (l, d) => {
      N(l), g(d);
    }, k = (l) => {
      var d, y;
      o.wrapperInnerRealHeight = Number((d = a.value) == null ? void 0 : d.scrollHeight), o.wrapperInnerRealWidth = Number((y = a.value) == null ? void 0 : y.scrollWidth), o.wrapperInnerMaxiMoveRangeY = o.wrapperInnerRealHeight - Number(S.value.replace("px", "")), o.wrapperInnerMaxiMoveRangeX = o.wrapperInnerRealWidth - Number(u.value.replace("px", "")), o.thumbHeightProportion = Number(S.value.replace("px", "")) / o.wrapperInnerRealHeight, o.thumbWidthProportion = Number(u.value.replace("px", "")) / o.wrapperInnerRealWidth, o.thumbHeight = String(o.thumbHeightProportion * Number(S.value.replace("px", ""))) + "px", o.thumbWidth = String(o.thumbWidthProportion * Number(u.value.replace("px", ""))) + "px", o.thumbRatioYMaxRange = Number(S.value.replace("px", "")) - Number(o.thumbHeight.replace("px", "")), o.thumbRatioXMaxRange = Number(u.value.replace("px", "")) - Number(o.thumbWidth.replace("px", "")), o.thumbRatioYProportion = o.thumbRatioYMaxRange / o.wrapperInnerMaxiMoveRangeY, o.thumbRatioXProportion = o.thumbRatioXMaxRange / o.wrapperInnerMaxiMoveRangeX, o.wrapperInnerMaxiMoveProportionY = o.wrapperInnerMaxiMoveRangeY / o.thumbRatioYMaxRange, o.wrapperInnerMaxiMoveProportionX = o.wrapperInnerMaxiMoveRangeX / o.thumbRatioXMaxRange;
    };
    ae(() => {
      o.cacheContainerWidth = e.width, k();
    });
    const V = (l) => {
      const d = l.target.scrollTop, y = l.target.scrollLeft;
      M(d), T(y), t.emit && t.emit("scroll", y, d);
    }, Y = () => {
      p.value = !0;
    }, G = () => {
      p.value = !1;
    };
    Ce(wt, {
      height: S,
      thumbRatioY: L,
      thumbRatioX: b,
      thumbRatioYMaxRange: C,
      thumbRatioXMaxRange: z,
      wrapperInnerMaxiMoveProportionY: R,
      wrapperInnerMaxiMoveProportionX: W,
      scrollBarRef: r
    }), t.expose({
      setScrollTop: N,
      setScrollLeft: g,
      setScrollTo: w
    });
    const j = (l = ye.VERTICAL) => {
      if (e.width === !1 || e.height === !1)
        return "";
      const d = o.wrapperInnerRealHeight, y = Number(e.height.replace("px", "")), O = o.wrapperInnerRealWidth;
      if (l == "vertical")
        return y < d ? i(D("scroll-bar-thumb"), {
          ref: m,
          type: l,
          height: v.value,
          width: e.thumbWidth,
          ratioX: b.value,
          ratioY: L.value,
          class: p.value ? "show" : "hide"
        }, null) : "";
      if (l == "horizontal") {
        let A = Number(u.value.replace("px", ""));
        if (u.value == "auto") {
          const F = () => {
            u.value = "auto", X(() => {
              var J;
              A = Number((J = a.value) == null ? void 0 : J.clientWidth), u.value = A + "px", k();
            });
          };
          F(), window.onresize = () => F();
        } else if (u.value)
          return A < O ? i(D("scroll-bar-thumb"), {
            ref: m,
            type: l,
            height: e.thumbWidth,
            width: x.value,
            ratioX: b.value,
            ratioY: L.value,
            class: p.value ? "show" : "hide"
          }, null) : "";
      }
    };
    return () => {
      var l, d;
      return te(i("div", {
        class: we(),
        style: {
          width: u.value
        },
        onMouseenter: Y,
        onMouseleave: G
      }, [i("div", {
        class: we("_wrapper"),
        ref: r,
        style: {
          height: S.value,
          width: u.value
        },
        onScroll: V
      }, [i("div", {
        class: we("_view"),
        ref: a
      }, [(d = (l = t.slots).default) == null ? void 0 : d.call(l)])]), i("div", {
        class: [we("_bar"), "horizontal"]
      }, [j(ye.HORIZONTAL)]), i("div", {
        class: [we("_bar"), "vertical"]
      }, [j(ye.VERTICAL)])]), [[ie("css"), B.value || {}]]);
    };
  }
}), kn = ne(Cn, "scroll-bar"), {
  n: Bn,
  classes: xn
} = $("time-picker"), In = /* @__PURE__ */ H({
  name: "VITimePicker",
  emits: ["click", "inputClick", "closeClick", "cancelClick", "okClick", "update:modelValue", "focus", "blur"],
  directives: {
    css: oe
  },
  props: lt,
  components: {
    "vi-time-picker-input": vn,
    "vi-time-picker-popper": bn,
    "vi-scroll-bar": kn
  },
  setup(e, t) {
    const s = [null, null, null];
    let c = "";
    const r = (n) => n < 10 ? "0" + n : n + "", a = (n) => {
      const f = n.match(/^(\d{1,2}):(\d{1,2}):(\d{1,2})$/);
      return f || console.warn("初始化数据格式不符合规范,已被清空！"), f;
    }, m = () => "xxxxxxxx".replace(/[xy]/g, function(n) {
      var f = 0 | 16 * Math.random(), I = n == "x" ? f : 8 | 3 & f;
      return I.toString(16);
    }), o = _();
    let p = _(), B = _(), S = _();
    const u = U({
      uuid: m(),
      popperVisible: !1,
      softFocus: !1,
      isSubmit: !1,
      // 是否确定
      hourList: [],
      minuteList: [],
      secondList: [],
      currentSelect: ["", "", ""]
    }), v = function() {
      u.popperVisible = !1, u.softFocus = !1;
    }, x = function(n) {
      let f = !1;
      const I = n.path || n.composedPath && n.composedPath();
      for (let P = 0; P < I.length; P++) {
        const E = I[P];
        if (E.classList && E.classList.value && E.getAttribute("class").includes("-time-picker") && E.dataset.id == u.uuid) {
          f = !0;
          break;
        }
      }
      f || (v(), u.isSubmit = !0);
    };
    document.addEventListener("mousedown", x);
    const b = function(n) {
      t.emit && t.emit("focus");
    }, L = function(n) {
      t.emit && t.emit("blur");
    }, C = function() {
      t.emit && t.emit("click");
    }, z = function(n) {
      u.popperVisible = !u.popperVisible, u.isSubmit = !1, e.modelValue || l(), t.emit && t.emit("inputClick");
    }, R = function() {
      u.popperVisible = !1, t.emit && t.emit("closeClick");
    }, W = function(n) {
      const {
        type: f
      } = n.target.dataset;
      u.popperVisible = !1, f == "cancel" ? (u.isSubmit = !1, t.emit && t.emit("update:modelValue", c), t.emit && t.emit("cancelClick"), j()) : f == "ok" && (u.isSubmit = !0, t.emit && t.emit("okClick", u.currentSelect));
    }, M = function(n, f) {
      const I = {
        index: {
          hour: "0",
          minute: "1",
          second: "2"
        },
        ref: {
          hour: p,
          minute: B,
          second: S
        }
      }, {
        num: P,
        disabled: E
      } = f.dataset;
      if (P) {
        if (E == "true")
          return;
        u.currentSelect[I.index[n]] = P;
        const pe = Number(u.currentSelect[I.index[n]]) * Number(y.value["popper-spinner-number-height"]);
        I.ref[n].value.setScrollTop(pe);
      }
    }, T = function(n) {
      M("hour", n.target);
    }, N = function(n) {
      M("minute", n.target);
    }, g = function(n) {
      M("second", n.target);
    }, w = function(n, f) {
      const I = {
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
      let E = Math.round(n / Number(y.value["popper-spinner-number-height"]));
      if (e[I.ableRange[f]].filter((Be) => Be == E).length > 0)
        return;
      u.currentSelect[I.timers[f]] = r(E);
      let he = E * Number(y.value["popper-spinner-number-height"]);
      s[I.timers[f]] && (clearTimeout(s[I.timers[f]]), s[I.timers[f]] = null), s[I.timers[f]] = setTimeout(() => {
        f == "hour" && p.value.setScrollTop(he), f == "minute" && B.value.setScrollTop(he), f == "second" && S.value.setScrollTop(he);
      }, 200);
    }, k = function(n, f) {
      w(f, "hour");
    }, V = function(n, f) {
      w(f, "minute");
    }, Y = function(n, f) {
      w(f, "second");
    }, G = () => {
      u.hourList = new Array(24).fill(0).map((n, f) => f < 10 ? "0" + f : f + ""), u.minuteList = new Array(60).fill(0).map((n, f) => f < 10 ? "0" + f : f + ""), u.secondList = new Array(60).fill(0).map((n, f) => f < 10 ? "0" + f : f + "");
    }, j = function() {
      c && (p.value.setScrollTop(Number(c.slice(0, 2)) * Number(y.value["popper-spinner-number-height"])), B.value.setScrollTop(Number(c.slice(3, 5)) * Number(y.value["popper-spinner-number-height"])), S.value.setScrollTop(Number(c.slice(6, 8)) * Number(y.value["popper-spinner-number-height"])));
    }, l = () => {
      const n = new Date(), f = n.getHours(), I = n.getMinutes(), P = n.getSeconds();
      u.currentSelect[0] = r(f), u.currentSelect[1] = r(I), u.currentSelect[2] = r(P), p.value.setScrollTop(Number(u.currentSelect[0]) * Number(y.value["popper-spinner-number-height"])), B.value.setScrollTop(Number(u.currentSelect[1]) * Number(y.value["popper-spinner-number-height"])), S.value.setScrollTop(Number(u.currentSelect[2]) * Number(y.value["popper-spinner-number-height"])), t.emit && t.emit("update:modelValue", u.currentSelect[0] + ":" + u.currentSelect[1] + ":" + u.currentSelect[2]);
    }, d = function() {
      if (e.modelValue && a(e.modelValue)) {
        const n = e.modelValue.split(":"), f = e.disabledHours.findIndex((E) => E == n[0]) != -1, I = e.disabledMinutes.findIndex((E) => E == n[1]) != -1, P = e.disabledSeconds.findIndex((E) => E == n[2]) != -1;
        if (f || I || P)
          return console.warn("输入的值包含禁用项,已被清空"), t.emit && t.emit("update:modelValue", ""), !0;
      }
      return !1;
    };
    Ct(() => {
      if (e.modelValue && a(e.modelValue) && !d()) {
        const n = e.modelValue.split(":");
        u.currentSelect[0] = n[0], u.currentSelect[1] = n[1], u.currentSelect[2] = n[2], c = e.modelValue;
      }
    }), ae(() => {
      G(), X(() => {
        j();
      });
    });
    const y = h(() => Object.assign(lt.dynamicCss.default(), e.dynamicCss)), O = h(() => {
      const n = {};
      for (const f in y.value)
        f.includes("input") && (n[f] = y.value[f]);
      return n;
    }), A = h({
      get() {
        return d(), e.modelValue;
      },
      set(n) {
        t.emit && t.emit("update:modelValue", n);
      }
    }), F = h(() => e.clearable), J = function(n, f) {
      const I = {
        hour: "disabledHours",
        minute: "disabledMinutes",
        second: "disabledSeconds"
      };
      let P = !1;
      return e[I[n]].forEach((E) => E == f ? P = !0 : ""), P;
    }, K = h(() => function(n) {
      return J("hour", n);
    }), Q = h(() => function(n) {
      return J("minute", n);
    }), ee = h(() => function(n) {
      return J("second", n);
    });
    return Se(() => {
      const n = u.currentSelect[0], f = u.currentSelect[1], I = u.currentSelect[2];
      if (!n && !f && !I) {
        t.emit && t.emit("update:modelValue", "");
        return;
      }
      const P = n + ":" + f + ":" + I;
      t.emit && t.emit("update:modelValue", P);
    }), Se(() => {
      u.isSubmit && (c = e.modelValue, t.emit && t.emit("update:modelValue", c));
    }), Ce(bt, {
      timePickerRef: o
    }), () => te(i("div", {
      ref: o,
      "data-id": u.uuid,
      class: [xn(Bn())],
      onClick: C
    }, [i(D("vi-time-picker-input"), {
      placeholder: e.placeholder,
      modelValue: A.value,
      "onUpdate:modelValue": (n) => A.value = n,
      onFocus: b,
      onBlur: L,
      onClose: R,
      dynamicCss: O.value || {},
      clearable: F.value,
      readonly: !0,
      onClick: z
    }, null), i(D("vi-time-picker-popper"), {
      active: u.popperVisible
    }, {
      default: () => [i("div", {
        class: "time-panel"
      }, [i("div", {
        class: "time-panel__content"
      }, [i(D("vi-scroll-bar"), {
        ref: p,
        class: "time-panel__spinner time-panel__popper-spinner--hour",
        onScroll: k,
        height: Number(y.value["popper-spinner-number-height"]) * 6 + "px"
      }, {
        default: () => [i("ul", {
          onClick: T
        }, [u.hourList.map((n) => i("li", {
          "data-num": n,
          "data-disabled": K.value(Number(n)),
          class: [u.currentSelect[0] == n ? "active" : "", K.value(Number(n)) ? "disabled" : ""]
        }, [n]))])]
      }), i(D("vi-scroll-bar"), {
        ref: B,
        class: "time-panel__spinner time-panel__popper-spinner--minutes",
        onScroll: V,
        height: Number(y.value["popper-spinner-number-height"]) * 6 + "px"
      }, {
        default: () => [i("ul", {
          onClick: N
        }, [u.minuteList.map((n) => i("li", {
          "data-num": n,
          "data-disabled": Q.value(Number(n)),
          class: [u.currentSelect[1] == n ? "active" : "", Q.value(Number(n)) ? "disabled" : ""]
        }, [n]))])]
      }), i(D("vi-scroll-bar"), {
        ref: S,
        class: "time-panel__spinner time-panel__popper-spinner--second",
        onScroll: Y,
        height: Number(y.value["popper-spinner-number-height"]) * 6 + "px"
      }, {
        default: () => [i("ul", {
          onClick: g
        }, [u.secondList.map((n) => i("li", {
          "data-num": n,
          "data-disabled": ee.value(Number(n)),
          class: [u.currentSelect[2] == n ? "active" : "", ee.value(Number(n)) ? "disabled" : ""]
        }, [n]))])]
      })]), i("div", {
        class: "time-panel__footer",
        onClick: W
      }, [i("div", {
        "data-type": "cancel",
        class: "time-panel__footer_cancel"
      }, [_e("取消")]), i("div", {
        "data-type": "ok",
        class: "time-panel__footer_ok"
      }, [_e("确认")])])])]
    })]), [[ie("css"), y.value || {}]]);
  }
}), Xn = ne(In, "time-picker");
var $e = /* @__PURE__ */ ((e) => (e.AUTHROLL = "autoRoll", e.HANDMOVE = "handRoll", e))($e || {});
const ct = {
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
      return Object.values($e).includes(e);
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
}, { n: Mn } = $(""), Vn = (e = Mn()) => e + "xxxxxxxx".replace(/[xy]/g, function(t) {
  var s = 0 | 16 * Math.random(), c = t == "x" ? s : 8 | 3 & s;
  return c.toString(16);
});
class Ln {
  constructor(t = [], s = 7) {
    this.list = t, this.severalGroups = s, this.windowSliding = new Array(this.severalGroups).fill(0).map((c, r) => r);
  }
  // 每次消费的条数
  take(t) {
    return this.Sliding(t), this.show();
  }
  show() {
    return this.windowSliding.map((t) => this.list[t]);
  }
  Sliding(t) {
    this.windowSliding = this.windowSliding.map((s) => {
      const c = this.list.length, r = s + t;
      return r <= c - 1 ? r : r - c;
    });
  }
}
const Te = function(e) {
  const t = e instanceof Array ? [] : {};
  for (let s in e)
    t[s] = typeof e[s] == "object" ? Te(e[s]) : e[s];
  return t;
};
function Rn(e, t = "top", s, c, r) {
  const a = t == "top" ? e.scrollTop : t == "left" ? e.scrollLeft : 0, m = s - a, o = performance.now();
  function p() {
    const u = performance.now() - o, v = B(
      u,
      a,
      m,
      c
    );
    t == "top" ? e.scrollTop = v : t == "left" && (e.scrollLeft = v), u < c ? requestAnimationFrame(p) : r && r();
  }
  function B(S, u, v, x) {
    return S /= x / 2, S < 1 ? v / 2 * S * S + u : (S--, -v / 2 * (S * (S - 2) - 1) + u);
  }
  requestAnimationFrame(p);
}
function Ne() {
  let e = new Date().getTime();
  return typeof performance < "u" && typeof performance.now == "function" && (e += performance.now()), "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    (s) => {
      const c = (e + Math.random() * 16) % 16 | 0;
      return e = Math.floor(e / 16), (s === "x" ? c : c & 3 | 8).toString(16);
    }
  );
}
function _n(e) {
  const t = {};
  return e.map((s) => {
    const { __id: c, ...r } = s, a = JSON.stringify(r);
    if (!t[a])
      return t[a] = !0, s;
    const m = Ne();
    return { ...s, __id: m };
  });
}
const {
  n: ut
} = $("long-text"), dt = {
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
}, pt = /* @__PURE__ */ H({
  name: "LongText",
  emits: ["update:text"],
  props: dt,
  directives: {
    css: oe
  },
  // components: { ToolTip: ToolTip },
  setup(e, t) {
    var u;
    const c = "onUpdate:modelValue" in (((u = fe()) == null ? void 0 : u.vnode.props) || {}), r = _(null), a = _(null), m = _(null), o = _(null), p = U({
      isScroll: !0,
      // 是否达到滚动条件
      toolTip_x: 0,
      toolTip_y: 0,
      toolTip_content: "盎司附近拉萨解放了卡JFK垃圾地方"
    }), B = h(() => Object.assign(dt.dynamicCss.default(), e.dynamicCss)), S = h({
      get() {
        return p.isScroll = !0, e.text;
      },
      set(v) {
        c && t.emit("update:text", v);
      }
    });
    return ae(() => {
      Se(() => {
        X(() => {
          const v = r.value.clientWidth, b = m.value.offsetWidth;
          v >= b && (p.isScroll = !1);
        });
      });
    }), () => te(i("div", {
      class: [ut(""), "tooltip"],
      "data-tooltip": "这是一个 tooltip",
      ref: r
    }, [i("div", {
      class: ut("_scroll"),
      ref: a
    }, [i("span", {
      ref: m,
      class: p.isScroll ? "startAnimation" : ""
    }, [S.value]), p.isScroll ? i("span", null, [i("span", {
      class: "seizeASeat"
    }, null), i("span", {
      ref: o,
      class: "startAnimation"
    }, [S.value]), i("span", {
      class: "seizeASeat"
    }, null)]) : ""])]), [[ie("css"), B.value || {}]]);
  }
}), {
  n: ce
} = $("roll-list"), Pn = /* @__PURE__ */ H({
  name: "RollList",
  emits: ["update:modelValue", "rowClick"],
  directives: {
    css: oe
  },
  props: ct,
  components: {
    LongText: pt
  },
  setup(e, t) {
    var j;
    const c = "onUpdate:modelValue" in (((j = fe()) == null ? void 0 : j.vnode.props) || {}), r = U({
      uuid: Vn(ce("-")),
      takeFlag: !1,
      rotationTimer: null,
      getInventedListDataBridgeInit: !1
    }), a = _(null), m = _();
    let o = 0, p = !1, B = null;
    const S = {
      longText: "longText"
    }, u = (l) => {
      l.preventDefault();
    }, v = h(() => Object.assign(ct.dynamicCss.default(), e.dynamicCss)), x = h(() => {
      let l = {};
      for (let d in v.value)
        d.includes("longText") && (l[d.replace("longText-", "")] = v.value[d]);
      return l;
    }), b = h(() => e.header), L = () => {
      var l;
      for (let d = 0; d < ((l = m.value) == null ? void 0 : l.children.length); d++) {
        const y = m.value.children[d], {
          attractShowCount: O,
          header: A,
          tmp_scaleRule: F
        } = e;
        if (O.includes(d))
          if (v.value["tr-focus-bg-color-style"] == "double") {
            const Q = v.value["tr-focus-bg-color-angle"], ee = v.value["tr-focus-bg-color-from"], n = v.value["tr-focus-bg-color-to"];
            y.style.background = `linear-gradient(${Q}deg,${ee},${n})`;
          } else
            y.style.background = v.value["tr-focus-bg-color-value"];
        else
          y.style.background = v.value["tr-un-focus-bg-color"];
        Array.from(y.children).forEach((K, Q) => {
          K.style.flexBasis = A[Q].basis + "%", O.includes(d) ? K.style.transform = `scale(${F[0]})` : K.style.transform = `scale(${F[1]})`;
        });
      }
    }, C = () => {
      if (r.rotationTimer && (clearInterval(r.rotationTimer), r.rotationTimer = null), e.rollType == $e.AUTHROLL) {
        if (p)
          return;
        r.rotationTimer = z.value.length > e.showCount && setInterval(() => {
          X(() => {
            M();
          });
        }, e.loopTime);
      }
    }, z = h({
      get() {
        const l = e.modelValue.map((d, y) => (d.__id = Ne(), d.__uniqueness = Ne(), d));
        return B = new Ln(Te(l), e.showCount * 2), X(() => {
          L();
        }), l;
      },
      set(l) {
        c && t.emit("update:modelValue", l);
      }
    }), R = h(() => {
      if (r.takeFlag = !r.takeFlag, e.modelValue.length > e.showCount) {
        const l = r.getInventedListDataBridgeInit ? e.rollCount : (r.getInventedListDataBridgeInit = !0) && 0;
        return _n(B.take(l));
      } else
        return new Array(e.modelValue.length).fill(0).map((l, d) => z.value[d]);
    }), W = h(() => {
      let l = z.value.length;
      const d = Number(e.itemHeight.replace("px", "")), y = l <= e.showCount ? l : e.showCount;
      return d * y + "px";
    });
    ae(() => {
      C(), me(() => e.rollType, () => C()), me(() => e.loopTime, () => C()), me(() => z.value, () => {
        C();
      });
    }), Re(() => {
    });
    const M = () => {
      var O;
      const l = a == null ? void 0 : a.value, d = e.rollCount <= e.showCount ? e.rollCount : e.showCount, y = l.scrollHeight - l.clientHeight;
      o = o + y / e.showCount * d;
      for (let A = 0; A < ((O = m.value) == null ? void 0 : O.children.length); A++) {
        const F = m.value.children[A], {
          attractShowCount: J,
          header: K,
          tmp_scaleRule: Q
        } = e, ee = J.map((n) => n + d).includes(A);
        if (ee)
          if (v.value["tr-focus-bg-color-style"] == "double") {
            const f = v.value["tr-focus-bg-color-angle"], I = v.value["tr-focus-bg-color-from"], P = v.value["tr-focus-bg-color-to"];
            F.style.background = `linear-gradient(${f}deg,${I},${P})`;
          } else
            F.style.background = v.value["tr-focus-bg-color-value"];
        else
          F.style.background = v.value["tr-un-focus-bg-color"];
        Array.from(F.children).forEach((n, f) => {
          n.style.flexBasis = K[f].basis + "%", ee ? n.style.transform = `scale(${Q[0]})` : n.style.transform = `scale(${Q[1]})`;
        });
      }
      Rn(l, "top", o, e.scrollTransition, () => {
        r.takeFlag = !r.takeFlag, l.scrollTop = 0, o = 0, X(() => {
          L();
        });
      });
    }, T = () => {
      p = !0, r.rotationTimer && (clearInterval(r.rotationTimer), r.rotationTimer = null);
    }, N = () => {
      p = !1, C();
    }, g = function(l) {
      t.emit && t.emit("rowClick", l);
    };
    Re(() => {
      T(), r.rotationTimer = null;
    });
    const w = () => {
      if (!v.value["pin-bg-color-style"])
        return "";
      let l = "none";
      if (v.value["pin-bg-color-style"] == "double") {
        const y = v.value["pin-bg-color-angle"], O = v.value["pin-bg-color-from"], A = v.value["pin-bg-color-to"];
        l = `linear-gradient(${y}deg,${O},${A})`;
      } else
        l = v.value["pin-bg-color-value"];
      return i("div", {
        class: ce("_pinSth"),
        style: {
          background: l
        }
      }, null);
    }, k = () => e.showHeader ? i("div", {
      class: ce("_th")
    }, [b.value.map((l) => i("div", {
      class: ce("_td"),
      style: {
        flexBasis: l.basis + "%"
      }
    }, [l.label]))]) : "", V = () => i("div", {
      ref: a,
      onWheel: u,
      class: ce("_scroll"),
      style: {
        height: W.value
      }
    }, [i("ul", {
      ref: m,
      class: ce("_wrapper")
    }, [R.value.map((l) => Y(l))])]), Y = (l) => i("li", {
      key: l.__id,
      style: {
        height: e.itemHeight
      },
      onClick: g.bind(this, l)
    }, [e.header.map((d, y) => G(l, d, y))]), G = (l, d, y) => {
      var F, J, K, Q, ee, n, f, I, P, E, pe, he, Be, Ee, He, ze, Oe, je;
      let O = {};
      d.longText && ((F = d == null ? void 0 : d.longText) != null && F.speed && (O["sco-ani-dura"] = d.longText.speed), (J = d.longText) != null && J.GPUSpee && (O["sco-ani-name"] = ((K = d == null ? void 0 : d.longText) == null ? void 0 : K.GPUSpee) == !0 ? "longTextScrollxAnimation3d" : "longTextScrollxAnimation"), ((Q = d.longText) != null && Q.txtGap || Number(d.longText.txtGap) == 0) && (O["txt-gap"] = d.longText.txtGap));
      const A = {};
      return l[d.prop] && ((ee = d.fo) != null && ee.textAlign && (A.textAlign = (n = d.fo) == null ? void 0 : n.textAlign), (f = d.fo) != null && f.style && (A.fontFamily = (I = d.fo) == null ? void 0 : I.style), (P = d.fo) != null && P.weight && (A.fontWeight = (E = d.fo) == null ? void 0 : E.weight), (pe = d.fo) != null && pe.color && (A.color = (he = d.fo) == null ? void 0 : he.color), (Be = d.fo) != null && Be.size && (A.fontSize = ((Ee = d.fo) == null ? void 0 : Ee.size) + "px")), i("div", {
        class: [ce("_td")]
      }, [i("div", {
        class: [S[(He = b.value[y]) == null ? void 0 : He.type]],
        style: {
          ...A
        }
      }, [(ze = b.value[y]) != null && ze.type && ((Oe = b.value[y]) == null ? void 0 : Oe.type) == "longText" ? i(pt, {
        style: {
          padding: "0 1px"
        },
        text: l[d.prop] || "undefined",
        speed: l[d.prop] ? (je = d.longText) == null ? void 0 : je.speed : !1,
        dynamicCss: Object.assign(Te(x.value), O)
      }, null) : l[d.prop] || "undefined"])]);
    };
    return () => te(i("div", {
      class: ce(),
      onMouseenter: T,
      onMouseleave: N
    }, [w(), k(), V()]), [[ie("css"), v.value || {}]]);
  }
}), qn = ne(Pn, "roll-list"), gt = {
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
}, { n: Tn, classes: Nn } = $("scroll-block"), An = H({
  name: "VIScrollBlock",
  directives: { css: oe },
  props: gt,
  emits: ["click", "update:modelValue", "change"],
  setup(e, t) {
    var u;
    (u = fe()) != null && u.vnode.props;
    const s = _(), c = _(!0);
    let r = _([
      // "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240207113212.png",
      // "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240207173357.png",
      // "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240218221447.jpg",
      // "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240222153642.png",
      // "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240222153607.png",
      // "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20220105175300.png"
    ]), a = _([
      // "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240207113212.png",
      // "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240207173357.png",
      // "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240218221447.jpg",
      // "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240222153642.png",
      // "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240222153607.png",
      // "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20220105175300.png"
    ]), m = 0;
    const o = U({
      transform: "translateX(0px)"
    });
    function p(v, x = "top", b, L, C) {
      const z = x == "top" ? v.scrollTop : x == "left" ? v.scrollLeft : 0, R = b - z, W = performance.now();
      function M() {
        const g = performance.now() - W, w = T(
          g,
          z,
          R,
          L
        );
        x == "top" ? v.scrollTop = w : x == "left" && (v.scrollLeft = w), g < L ? requestAnimationFrame(M) : C && C();
      }
      function T(N, g, w, k) {
        return w * N / k + g;
      }
      requestAnimationFrame(M);
    }
    const B = h(() => (e.modelValue.length <= e.showCount && (r.value = [...e.modelValue, ...e.modelValue], a.value = [...r.value.slice(0)]), e.dynamicCss["bs-box-width"] = e.showCount * e.dynamicCss["bs-img-width"] + (e.showCount - 1) * e.dynamicCss["bs-img-interval"], Object.assign(gt.dynamicCss.default(), e.dynamicCss))), S = (v) => {
      let x = 0, b = null;
      v == "front" ? (b = s.value.children[0], x = b.scrollWidth - b.clientWidth) : v == "backend" && (b = s.value.children[1], x = b.scrollWidth - b.clientWidth), m = m + x, p(
        b,
        "left",
        m,
        5e3,
        () => {
          c.value = !c.value, b.scrollLeft = 0, m = 0, S(c.value ? "front" : "backend");
        }
      );
    };
    return setTimeout(() => {
      S("front");
    }, 1e3), {
      n: Tn,
      classes: Nn,
      scrollBlockDom: s,
      toggleScrollBox: c,
      imgList: r,
      imgList1: a,
      dynamicStyle: o,
      dynamicCssBridge: B
    };
  }
}), $n = ["src"], En = ["src"];
function Hn(e, t, s, c, r, a) {
  const m = ie("css");
  return te((ue(), de(
    "div",
    {
      class: q([e.classes(e.n())]),
      ref: "scrollBlockDom"
    },
    [
      le(
        "div",
        {
          class: q([e.classes(e.n("_wrapper"))]),
          style: Ye({ opacity: e.toggleScrollBox ? 1 : 0 })
        },
        [
          le(
            "div",
            {
              class: q([e.classes(e.n("_wrapper__inner")), "0"])
            },
            [
              (ue(!0), de(
                De,
                null,
                We(e.imgList, (o, p) => (ue(), de("img", {
                  class: q([e.n("_wrapper__inner__image")]),
                  key: p,
                  src: o
                }, null, 10, $n))),
                128
                /* KEYED_FRAGMENT */
              ))
            ],
            2
            /* CLASS */
          )
        ],
        6
        /* CLASS, STYLE */
      ),
      le(
        "div",
        {
          class: q([e.classes(e.n("_wrapper"))]),
          style: Ye({ opacity: e.toggleScrollBox ? 0 : 1 })
        },
        [
          le(
            "div",
            {
              class: q([e.classes(e.n("_wrapper__inner")), "1"])
            },
            [
              (ue(!0), de(
                De,
                null,
                We(e.imgList1, (o, p) => (ue(), de("img", {
                  class: q([e.n("_wrapper__inner__image")]),
                  key: p,
                  src: o
                }, null, 10, En))),
                128
                /* KEYED_FRAGMENT */
              ))
            ],
            2
            /* CLASS */
          )
        ],
        6
        /* CLASS, STYLE */
      )
    ],
    2
    /* CLASS */
  )), [
    [m, e.dynamicCssBridge]
  ]);
}
const zn = /* @__PURE__ */ Me(An, [["render", Hn]]), Un = ne(zn, "scroll-block"), mt = {
  // 超出高度限制自动滚动
  heightScroll: {
    type: Boolean,
    default: !1
    // 设置为限制高度超出滚动就要设置下height，设置为false的时候height将失效默认为auto
  },
  height: {
    type: String,
    default: "500"
  },
  width: {
    type: String,
    default: "600"
  },
  backgroundImg: {
    type: Object,
    default: () => ({
      leftBackgroundImg: "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/demo%20icon/Group%201321316955.png",
      leftBackgroundImgActive: "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/demo%20icon/Group%201321316954.png",
      rightBackgroundImg: "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/demo%20icon/Group%201321316957.png",
      rightBackgroundImgActive: "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/demo%20icon/Group%201321316958.png"
    })
  },
  dynamicCss: {
    type: Object,
    default: () => ({
      // 每项之间的间隔（设置的上外边距，第一个不生效）
      "item-mar-t": "10",
      "item-pad-tb": "2",
      // "item-pad-lr": "20",
      // 每项激活的字体颜色
      "item-color_act": "#260bd984",
      // 左边文字正常状态
      "left-color": "#166947e4",
      "left-fo-wei": "600",
      "left-fo-size": "20",
      "left-fo-fam": "monospace",
      "left-pad-r": "30",
      "left-pad-l": "10",
      // 右边文字正常状态
      "right-color": "#166947e4",
      "right-fo-weight": "600",
      "right-fo-size": "16",
      "right-fo-family": "monospace",
      "right-pad-r": "2",
      "right-pad-l": "44",
      // 左边文字悬浮颜色
      "left-color_hov": "#65de06ff",
      // 右边文字悬浮颜色
      "right-color_hov": "#fff",
      // 线激活颜色
      "line-color": "#b9dffce4",
      "line-color_act": "#fc0",
      "line-color_hov": "#55b2f8e4",
      "line-wid": "2",
      "line-wid_hov": "4",
      "line-wid_act": "4",
      // 激活状态下的动画时长
      "ani-time": "2"
    })
  },
  // 数据列表
  modelValue: {
    type: Array,
    default: [
      {
        name: "刘一",
        id: Math.random() * 1e7,
        type: "left",
        link: [1, 5, 7]
      },
      {
        name: "陈二",
        id: Math.random() * 1e7,
        type: "left",
        link: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
      },
      {
        name: "张三",
        id: Math.random() * 1e7,
        type: "left",
        link: [8, 6]
      },
      {
        name: "李四",
        id: Math.random() * 1e7,
        type: "left",
        link: [2, 3, 4]
      },
      {
        name: "王五",
        id: Math.random() * 1e7,
        type: "left",
        link: [9]
      },
      {
        name: "赵六",
        id: Math.random() * 1e7,
        type: "left",
        link: [10, 11]
      },
      {
        name: "孙七",
        id: Math.random() * 1e7,
        type: "left",
        link: [13]
      },
      {
        name: "周八",
        id: Math.random() * 1e7,
        type: "left",
        link: [1, 13]
      },
      {
        name: "吴九",
        id: Math.random() * 1e7,
        type: "left",
        link: [5]
      },
      {
        name: "郑十",
        id: Math.random() * 1e7,
        type: "left",
        link: [2]
      },
      { name: "可弹性拓展网盘", type: "right", id: 1 },
      { name: "智慧工单管理系统", type: "right", id: 2 },
      { name: "大数据中台", type: "right", id: 3 },
      { name: "ERP管理", type: "right", id: 4 },
      { name: "gis可视化系统", type: "right", id: 5 },
      { name: "矿业管理系统", type: "right", id: 6 },
      { name: "帝网集成中心", type: "right", id: 7 },
      { name: "人事档案管理中心", type: "right", id: 8 },
      { name: "营销系统3.0", type: "right", id: 9 },
      { name: "东湖小镇数字孪生", type: "right", id: 10 },
      { name: "大模型调用中心", type: "right", id: 11 },
      { name: "业务中心中台", type: "right", id: 12 },
      { name: "政务系统", type: "right", id: 13 }
    ]
  }
}, {
  n: re
} = $("sankey-diagram"), On = /* @__PURE__ */ H({
  name: "sankeyDiagram",
  emits: ["update:width", "select"],
  directives: {
    css: oe
  },
  props: mt,
  setup(e, t) {
    var N;
    const c = "onUpdate:modelValue" in (((N = fe()) == null ? void 0 : N.vnode.props) || {}), r = _(null), a = _(null), m = _(null), o = U({
      // 激活的元素id
      activeDomsIds: [],
      isActive: !1,
      // 存储左侧和右侧的每个子元素的宽度和高度
      leftItemHeight: 0,
      leftItemWidth: 0,
      rightItemHeight: 0,
      rightItemWidth: 0,
      centerBoxWidth: 0,
      // 画线的位置信息
      linkData: [],
      // svg中path元素的path属性
      svg_path_d: [],
      // svg中path元素的左右关联的id合集
      svg_path_ids: []
    }), p = h(() => {
      const g = Object.assign(mt.dynamicCss.default(), e.dynamicCss);
      return g["left-bg-image"] = `url(${e.backgroundImg.leftBackgroundImg})`, g["left-bg-image_active"] = `url(${e.backgroundImg.leftBackgroundImgActive})`, g["right-bg-image"] = `url(${e.backgroundImg.rightBackgroundImg})`, g["right-bg-image_active"] = `url(${e.backgroundImg.rightBackgroundImgActive})`, g;
    }), B = h({
      get() {
        return e.modelValue.filter((g) => g.type == "left");
      },
      set(g) {
        c && t.emit("update:modelValue", g);
      }
    }), S = h({
      get() {
        return e.modelValue.filter((g) => g.type == "right");
      },
      set(g) {
        c && t.emit("update:modelValue", g);
      }
    }), u = (g = "left", w, k) => {
      e.modelValue.filter((V) => V.type == g).forEach((V, Y) => {
        let G = w, j = 0, l = Y * k + k / 2;
        const d = Number(p.value["item-mar-t"]);
        Y == 0 ? j = l : j = l + d * Y;
        const y = [G, j];
        o.linkData.push({
          id: V.id,
          position: y
        });
      });
    }, v = () => {
      let g = [], w = [];
      for (let k = 0; k < B.value.length; k++) {
        const V = B.value[k];
        if (V.link && V.link.length > 0 && o.linkData && o.linkData.length > 0)
          for (let Y = 0; Y < V.link.length; Y++) {
            const G = V.link[Y], j = o.linkData.filter((A) => A.id == V.id)[0], l = o.linkData.filter((A) => A.id == G)[0], d = `${0},${j.position[1]}`, y = `${l.position[0]},${l.position[1]}`, O = `M ${d} ${y}`;
            g.push(O), w.push(`${V.id},${G}`);
          }
      }
      return {
        list: g,
        ids: w
      };
    }, x = () => {
      X(() => {
        o.leftItemHeight = r.value.children[0].getBoundingClientRect().height, o.leftItemWidth = r.value.clientWidth, o.rightItemHeight = m.value.children[0].getBoundingClientRect().height, o.rightItemWidth = m.value.clientWidth, o.centerBoxWidth = a.value.clientWidth, u("left", o.leftItemWidth, o.leftItemHeight), u("right", o.centerBoxWidth, o.rightItemHeight);
        const {
          list: g,
          ids: w
        } = v();
        o.svg_path_d = g, o.svg_path_ids = w;
        let k = B.value.length, V = S.value.length;
        a.value.style.height = Math.max(o.rightItemHeight * V + p.value["item-mar-t"] * (V - 1), o.leftItemHeight * k + p.value["item-mar-t"] * (k - 1)) + "px";
      });
    }, b = () => {
      const g = {};
      return [...Array.from(r.value.children), ...Array.from(a.value.children), ...Array.from(m.value.children)].forEach((k) => {
        let V = k.getAttribute("data-id");
        V && (g[V] = k);
      }), g;
    };
    ae(() => {
      x();
    });
    const L = function(g) {
      const w = b();
      C(w), g.type == "left" ? [...g.link, g.id].forEach((k) => {
        o.activeDomsIds.push(k), w[k].classList.add("active"), o.svg_path_ids.forEach((V) => {
          V == `${g.id},${k}` && (o.activeDomsIds.push(V), w[V].classList.add("active"));
        });
      }) : g.type == "right" && (B.value.forEach((k) => {
        k.link && k.link.length > 0 && k.link.findIndex((V) => V == g.id) != -1 && (o.activeDomsIds.push(k.id), w[k.id].classList.add("active"), o.svg_path_ids.forEach((V) => {
          V == `${k.id},${g.id}` && (o.activeDomsIds.push(V), w[V].classList.add("active"));
        }), o.activeDomsIds.push(g.id), w[g.id].classList.add("active"));
      }), o.activeDomsIds.push(g.id)), t.emit && t.emit("select", g);
    }, C = (g) => {
      g = g || b();
      let w = o.activeDomsIds.pop();
      for (; w; )
        g[w].classList.remove("active"), w = o.activeDomsIds.pop(), w && g[w].classList.remove("active");
    };
    t.expose({
      clearAllActive: C
    });
    const z = () => i("ul", {
      class: re("left"),
      ref: r
    }, [B.value.map((g) => W(g))]), R = () => i("ul", {
      class: re("right"),
      ref: m
    }, [S.value.map((g) => W(g, "right"))]), W = (g, w = "left") => i("li", {
      class: [re(`${w}__item`), e.heightScroll ? "" : "fullParent"],
      key: g.id,
      "data-id": g.id,
      onClick: L.bind(this, g)
    }, [g.name]), M = (g) => i("svg", {
      class: re("center"),
      ref: a
    }, [i("defs", null, [i("filter", {
      id: "glow",
      x: "-50%",
      y: "-50%",
      width: "200%",
      height: "200%"
    }, null)]), o.svg_path_d.map((w, k) => T(w, o.svg_path_ids[k]))]), T = (g, w) => i("path", {
      class: re("center__line"),
      d: g,
      "data-id": w
    }, null);
    return () => te(i("div", {
      class: re(),
      style: {
        height: e.heightScroll ? e.height + "px" : "auto",
        width: e.width + "px"
      }
    }, [e.heightScroll ? i("div", {
      class: re("scroll-wrapper")
    }, [i("div", {
      class: re("scroll")
    }, [z(), M(), R()])]) : i("div", {
      class: re("scroll")
    }, [z(), M(), R()])]), [[ie("css"), p.value || {}]]);
  }
}), Gn = ne(On, "sankey-diagram");
export {
  Yn as Pagination,
  Dn as Radio,
  Wn as RadioButton,
  Fn as RadioGroup,
  qn as RollList,
  Gn as SankeyDiagram,
  kn as ScrollBar,
  Un as ScrollBlock,
  Et as SelectV2,
  Ht as SelectV2Option,
  Xn as TimePicker
};
