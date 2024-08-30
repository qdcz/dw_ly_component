import { defineComponent as O, createVNode as i, inject as Z, reactive as J, computed as h, resolveComponent as F, ref as P, onMounted as ae, watchEffect as Se, nextTick as U, watch as pe, onUnmounted as Le, getCurrentInstance as fe, provide as Ce, withDirectives as te, resolveDirective as ie, createTextVNode as Re, isVNode as yt, openBlock as ue, createElementBlock as de, normalizeClass as G, createElementVNode as oe, vModelRadio as ht, toDisplayString as ft, renderSlot as St, onBeforeMount as Ct, normalizeStyle as Ye, Fragment as De, renderList as We } from "vue";
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
function H(e) {
  const t = `vi-${e}`;
  return {
    n: (r) => r ? r.startsWith("-") ? `${t}${r}` : `${t}_${r}` : t,
    classes: (...r) => r.map((a) => {
      if (kt(a)) {
        const [g, l, p = null] = a;
        return g ? l : p;
      }
      return a;
    })
  };
}
const ve = Symbol("select-v2"), Fe = function(e, t) {
  for (let [s, c] of Object.entries(t.value))
    e.style.setProperty("--" + s, c);
}, le = {
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
} = H("select-v2-svg-icon"), ke = /* @__PURE__ */ O({
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
} = H("select-v2-input"), Vt = /* @__PURE__ */ O({
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
    } = Z(ve), g = "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z", l = "M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z", p = J({
      isHover: !1
    }), k = function(S) {
      t.emit("click", S);
    }, y = function(S) {
      s.value = "", t.emit("clear"), S.stopPropagation();
    }, u = function(S) {
      t.emit("focus", S);
    }, v = function(S) {
      t.emit("blur", S);
    }, C = function(S) {
      p.isHover = !0, t.emit("mouseenter");
    }, b = function(S) {
      p.isHover = !1, t.emit("mouseleave");
    }, R = h(() => r.value[s.value]);
    return () => i("div", {
      class: [It(qe(), e.active ? "active" : "")],
      onClick: k,
      onMouseenter: C,
      onMouseleave: b
    }, [i("input", {
      class: [qe("_inner")],
      placeholder: e.placeholder,
      onFocus: u,
      onBlur: v,
      value: R.value,
      readonly: !0
    }, null), p.isHover && s.value && c.value && a.value == "single" ? i(F("vi-select-v2-svg-icon"), {
      height: e.iconHeight,
      width: e.iconWidth,
      path: l,
      onClick: y
    }, null) : i(F("vi-select-v2-svg-icon"), {
      height: e.iconHeight,
      width: e.iconWidth,
      path: g,
      class: ["arrow", e.active ? "turnUp" : "turnDown"]
    }, null)]);
  }
}), {
  n: xe,
  classes: Ue
} = H("select-v2-dropdown"), Mt = /* @__PURE__ */ O({
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
    } = Z(ve), a = J({
      parentRect: {
        x: 0,
        y: 0
      },
      dropdownTop: "0"
    }), g = P(), l = P(), p = () => {
      U(() => {
        a.dropdownTop = s.value.clientHeight + 10 + "px";
      });
    };
    return ae(() => p()), Se(() => {
      let k = r.value;
      c.value == "multiple" && k && setTimeout(() => {
        p();
      }, 200);
    }), () => {
      var k, y;
      return i("div", {
        class: [xe("-popper"), e.active ? "active" : ""],
        style: {
          top: a.dropdownTop
        }
      }, [i("div", {
        ref: g,
        class: [xe("-arrow"), e.active ? "active" : ""]
      }, null), i("div", {
        ref: l,
        class: [Ue(xe(), e.active ? "active" : "")]
      }, [i("div", {
        class: [Ue(xe("_inner"))]
      }, [(y = (k = t.slots).default) == null ? void 0 : y.call(k)])])]);
    };
  }
}), {
  n: Ge,
  classes: _t
} = H("select-v2-tag"), Lt = /* @__PURE__ */ O({
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
      const g = JSON.parse(JSON.stringify(s.value));
      try {
        g.forEach((l, p) => {
          if (l.value == e.value)
            throw g.splice(p, 1), new Error();
        });
      } catch {
      }
      s.value = g, t.emit && t.emit("closeClick", {
        currentClose: {
          label: e.label,
          value: e.value
        },
        currentSelects: JSON.parse(JSON.stringify(g))
      }), a.stopPropagation();
    };
    return () => i("div", {
      class: [_t(Ge()), e.tooltip ? "useToolTip" : ""],
      "data-txt": e.label
    }, [i("span", {
      class: Ge("_span")
    }, [e.label]), i(F("vi-svg-icon"), {
      path: c,
      onClick: r,
      height: e.height + "px",
      width: e.width + "px"
    }, null)]);
  }
}), {
  n: Me,
  classes: Rt
} = H("scroll-bar"), Pt = /* @__PURE__ */ O({
  name: "VIScrollBar",
  emits: ["focus", "blur", "click"],
  props: ["dynamicCss"],
  directives: {
    css: le
  },
  setup(e, t) {
    const {
      cacheOptionList: s
    } = Z(ve), c = P(), r = P(), a = J({
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
    }), g = function() {
      U(() => {
        const b = window.getComputedStyle(c.value.children[0]);
        a.realPadding = e.dynamicCss["popper-padding"] * 2, a.realHeight = b.height.replace("px", "") * 1, a.viewHeight = e.dynamicCss["popper-height"] * 1 - a.realPadding, a.maxScrollBoxRange = a.realHeight - a.viewHeight, a.proportion = Number((a.viewHeight / a.realHeight).toFixed(1)), a.scrollBarHeight = a.viewHeight * a.proportion, a.maxScrollBarRange = a.viewHeight - a.scrollBarHeight, a.scrollBarMovePropor = a.maxScrollBarRange / a.maxScrollBoxRange, a.scrollBoxMovePropor = a.maxScrollBoxRange / a.maxScrollBarRange;
      });
    };
    ae(() => {
      g();
    }), pe(() => s.value, () => {
      g();
    }, {
      deep: !0,
      immediate: !1
    });
    const l = h(() => a.scrollBarHeight < a.realHeight), p = function(b) {
      const R = b.target.scrollTop;
      v(R);
    }, k = function(b) {
      document.addEventListener("mousedown", y), document.addEventListener("mousemove", u);
    }, y = function(b) {
      a.mouseMoving = !0, a.startY = b.clientY;
    }, u = function(b) {
      a.moveY = a.startY - b.clientY, C();
    };
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", u), document.removeEventListener("mousedown", y), a.startY = 0, a.moveY = 0, a.mouseMoving && (a.translateY = a._move), a.mouseMoving = !1;
    });
    const v = function(b) {
      a.mouseMoving || (a.translateY = a.scrollBarMovePropor * b, r.value.style.transform = `translateY(${a.translateY}px)`);
    }, C = function() {
      let b = 0;
      a.moveY < 0 ? b = a.translateY + Math.abs(a.moveY) : a.moveY >= 0 && (b = a.translateY - Math.abs(a.moveY)), b < 0 && (b = 0), b > a.maxScrollBarRange && (b = a.maxScrollBarRange), a._move = b, r.value.style.transform = `translateY(${b}px)`, c.value.scrollTop = Math.abs(a.scrollBoxMovePropor * b);
    };
    return () => {
      var b, R;
      return i("div", {
        class: [Rt(Me())]
      }, [i("div", {
        class: Me("left"),
        ref: c,
        onScroll: p
      }, [(R = (b = t.slots).default) == null ? void 0 : R.call(b)]), l.value ? i("div", {
        ref: r,
        class: Me("right"),
        style: {
          height: a.scrollBarHeight + "px"
        },
        onMousedown: k
      }, null) : ""]);
    };
  }
}), {
  n: Tt,
  classes: Nt
} = H("select-v2-option"), vt = /* @__PURE__ */ O({
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
      cacheOptionList: g,
      selectedFn: l,
      deleteOptionItem: p
    } = Z(ve), k = function() {
      if (r.value == "single")
        s.value = e.value, c.value = e.label, a.value = !1;
      else if (r.value == "multiple") {
        const u = JSON.parse(JSON.stringify(s.value));
        let v = !1;
        try {
          u.forEach((C, b) => {
            if (C.value == e.value)
              throw u.splice(b, 1), v = !0, new Error();
          });
        } catch {
        }
        v || u.push({
          label: e.label,
          value: e.value
        }), s.value = u;
      }
      l({
        label: e.label,
        value: e.value
      });
    };
    Se(() => {
      g.value = {
        key: e.label,
        value: e.value
      };
    }), ae(() => {
      g.value = {
        key: e.label,
        value: e.value
      };
    }), Le(() => {
      p(e.value);
    });
    const y = h(() => {
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
      class: [Nt(Tt()), y.value ? "active" : ""],
      onClick: k
    }, [i("div", {
      class: "txt"
    }, [e.label])]);
  }
}), {
  n: me,
  classes: At
} = H("select-v2"), $t = /* @__PURE__ */ O({
  name: "VISelectV2",
  emits: ["focus", "blur", "update:modelValue", "handleSelected", "handleClear", "mouseenter", "mouseleave"],
  props: Xe,
  directives: {
    css: le
  },
  components: {
    "vi-select-v2-input": Vt,
    "vi-select-v2-drop-down": Mt,
    "vi-scroll-bar": Pt,
    "vi-select-v2-tag": Lt,
    "vi-select-v2-svg-icon": ke,
    // 'vi-select-v2-unfold-dialog': VISelectV2UnfoldDialog,
    "vi-select-v2-option": vt
  },
  setup(e, t) {
    var ee;
    const c = "onUpdate:modelValue" in (((ee = fe()) == null ? void 0 : ee.vnode.props) || {}), r = () => "xxxxxxxx".replace(/[xy]/g, function(n) {
      var f = 0 | 16 * Math.random(), B = n == "x" ? f : 8 | 3 & f;
      return B.toString(16);
    }), a = P(), g = P(), l = P(), p = J({
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
    }), k = "M955.069071 864.311021 740.015134 649.258107c-3.752464-3.751441-8.841366-5.860475-14.149255-5.860475-5.306866 0-10.395768 2.108011-14.149255 5.860475l-16.692171 16.692171-38.34226-38.34226c53.03796-59.810201 85.298711-138.442072 85.298711-224.478588 0-186.774871-151.952784-338.727655-338.727655-338.727655S64.527642 216.35456 64.527642 403.12943c0 186.775894 151.952784 338.728678 338.727655 338.728678 86.36909 0 165.276231-32.510438 225.170343-85.913718l38.303374 38.303374-17.34504 17.34504c-7.812943 7.813966-7.812943 20.48352 0 28.297486l215.051891 215.052914c3.753487 3.751441 8.841366 5.860475 14.149255 5.860475 5.306866 0 10.395768-2.108011 14.149255-5.860475l62.334697-62.334697C962.883037 884.794541 962.883037 872.124987 955.069071 864.311021zM104.546078 403.12943c0-164.709319 133.9999-298.709219 298.709219-298.709219s298.709219 133.9999 298.709219 298.709219S567.964616 701.839673 403.255297 701.839673 104.546078 567.838749 104.546078 403.12943zM878.585119 912.496463 691.829691 725.741036l34.036187-34.036187 186.755428 186.755428L878.585119 912.496463z", y = {
      popperHeight: "0",
      inputLineHeight: "0"
    }, u = function(n) {
      let f = !1;
      const B = n.path || n.composedPath && n.composedPath();
      for (let N = 0; N < B.length; N++) {
        const z = B[N];
        if (z.classList && z.classList.value && z.getAttribute("class").includes("-select-v2") && z.dataset.id == p.uuid) {
          f = !0;
          break;
        }
      }
      f || v();
    };
    document.addEventListener("mousedown", u);
    const v = function() {
      p.dropDownVisible = !1, t.emit && t.emit("blur");
    }, C = function(n) {
      return new Promise((f, B) => {
        f(U(() => window.getComputedStyle(n.value)));
      });
    }, b = function(n) {
      e.mode == "single" ? t.emit && t.emit("handleSelected", n) : U(() => {
        t.emit && t.emit("handleSelected", {
          currentSelected: n,
          currentSelects: JSON.parse(JSON.stringify(e.modelValue))
        });
      });
    }, R = function(n) {
      delete p.OptionList[n];
    }, S = function(n) {
      if (n == "co1")
        return "";
      if (n == "auto" || n == "co2" || n == "co3" || n == "co4" || n == "co5" || n == "co6" || n == "co7")
        return "display:flex;flex-wrap: wrap;";
    }, j = function(n) {
      p.dropDownVisible = !p.dropDownVisible, t.emit && (p.dropDownVisible ? t.emit("focus") : t.emit("blur"));
    }, T = function(n) {
    }, X = function(n) {
    }, x = function() {
      t.emit && t.emit("handleClear");
    }, A = function() {
      t.emit && t.emit("mouseenter");
    }, $ = function() {
      t.emit && t.emit("mouseleave");
    }, L = function(n) {
      t.emit && t.emit("handleClear", n);
    }, M = function(n) {
      let f = n.target.value, B = {};
      p.list.forEach((N) => N.label.includes(f) ? B[N.value] = N.label : ""), p.searchValue = B, p.searchLabel = f, U(() => {
        I.value;
      });
    };
    pe(() => e.list, () => {
      p.list = JSON.parse(JSON.stringify(e.list));
    }, {
      deep: !0,
      immediate: !0
    });
    const m = h({
      get() {
        return e.mode == "multiple" && (async () => {
          const {
            height: n
          } = await C(l);
          e.dynamicCss["input-line-height"] = n.replace("px", "") * 1, D.value = e.modelValue.length > 0 ? " " : e.placeholder, e.modelValue.length <= 1 && (e.dynamicCss["input-line-height"] = y.inputLineHeight);
        })(), e.modelValue;
      },
      set(n) {
        c && t.emit("update:modelValue", n);
      }
    }), _ = h({
      get() {
        return p.currentSelectLabel;
      },
      set(n) {
        p.currentSelectLabel = n;
      }
    }), I = h({
      get() {
        let n = Object.keys(p.OptionList).length;
        return n <= 5 && n > 0 ? p.searchValue || (e.search && n++, w.value["popper-height"] = w.value["popper-option-height"] * n + w.value["popper-padding"] * 2) : w.value["popper-height"] = y.popperHeight, p.OptionList;
      },
      set(n) {
        p.OptionList[n.value] = n.key;
      }
    }), V = h({
      get() {
        return p.dropDownVisible;
      },
      set(n) {
        p.dropDownVisible = n;
      }
    }), D = h({
      get() {
        return p.__inputPlaceholder || e.placeholder;
      },
      set(n) {
        p.__inputPlaceholder = n;
      }
    }), o = h(() => e.clearable), d = h(() => e.mode), w = h(() => {
      let n = Object.assign(Xe.dynamicCss.default(), e.dynamicCss);
      return y.popperHeight = n["popper-height"], y.inputLineHeight = n["input-line-height"], n;
    }), Y = h(() => e.mode == "multiple"), E = h(() => !!e.searchImg);
    Ce(ve, {
      selectRef: a,
      currentSelect: m,
      currentSelectLabel: _,
      mode: d,
      dynamicCss: w,
      dropDownVisible: V,
      placeholder: D,
      cacheOptionList: I,
      clearable: o,
      selectedFn: b,
      deleteOptionItem: R
    });
    const W = function(n) {
      return i(F("vi-select-v2-tag"), {
        tooltip: e.tooltip,
        label: n.label,
        value: n.value,
        height: w.value["tag-close-size"],
        width: w.value["tag-close-size"],
        onCloseClick: L
      }, null);
    }, q = function() {
      return i(F("vi-select-v2-input"), {
        iconHeight: w.value["input-icon-width"],
        iconWidth: w.value["input-icon-width"],
        ref: g,
        active: p.dropDownVisible,
        placeholder: D.value,
        onClick: j,
        onFocus: T,
        onBlur: X,
        onClear: x,
        onMouseenter: A,
        onMouseleave: $
      }, null);
    }, K = function() {
      return i("li", {
        class: me("-search")
      }, [E.value ? i("img", {
        class: me("--search"),
        src: e.searchImg
      }, null) : i(F("vi-select-v2-svg-icon"), {
        class: me("--search"),
        path: k
      }, null), i("input", {
        value: p.searchLabel,
        class: me("-search__input"),
        placeholder: "请输入您要搜索的内容",
        onInput: M
      }, null)]);
    }, Q = function() {
      return i(F("vi-select-v2-drop-down"), {
        active: p.dropDownVisible
      }, {
        default: () => [i(F("vi-scroll-bar"), {
          dynamicCss: w.value
        }, {
          default: () => {
            var n, f;
            return [i("ul", null, [e.search ? K() : "", p.searchValue ? i("div", {
              style: S(e.itemLayout),
              class: e.itemLayout
            }, [Object.keys(p.searchValue).map((B, N) => i(F("vi-select-v2-option"), {
              key: B,
              value: B,
              label: Object.values(p.searchValue)[N]
            }, null))]) : i("div", {
              style: S(e.itemLayout),
              class: e.itemLayout
            }, [(f = (n = t.slots).default) == null ? void 0 : f.call(n)]), Object.keys(I.value).length <= 0 ? i("li", {
              class: me("-notData")
            }, [Re("暂无数据")]) : ""])];
          }
        })]
      });
    };
    return () => te(i("div", {
      "data-id": p.uuid,
      class: [At(me())],
      ref: a
    }, [Y.value ? i("div", {
      ref: l,
      class: me("-taglist"),
      onClick: j
    }, [m.value.map((n) => W(n))]) : "", q(), Q()]), [[ie("css"), w.value || {}]]);
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
} = H("pagination-prev"), Ke = /* @__PURE__ */ O({
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
} = H("pagination-next"), Qe = /* @__PURE__ */ O({
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
} = H("pagination-pager"), Ze = /* @__PURE__ */ O({
  name: "VIPaginationPager",
  emits: ["click"],
  setup(e, t) {
    let {
      currentPage: s,
      pagerCount: c,
      pageCount: r
    } = Z(be);
    const a = J({
      quickPrevBtnIsHover: !1,
      quickNextBtnIsHover: !1
    }), g = {
      quickLeftArrow: "M62.56 511.904L485.952 88.256a48.64 48.64 0 0 1 68.736 68.736L199.616 512.064l356.8 356.8A48.64 48.64 0 0 1 487.68 937.6l-39.744-39.744 0.256-0.256L62.528 511.936z m388.8 0L874.752 88.256a48.64 48.64 0 0 1 68.736 68.736L588.416 512.064l356.8 356.8A48.64 48.64 0 0 1 876.48 937.6l-39.776-39.744 0.288-0.256-385.664-385.664z",
      quickRightArrow: 'M948.064 513.056L536.064 925.312a47.296 47.296 0 0 1-66.88-66.88l345.504-345.504L467.52 165.76a47.296 47.296 0 0 1 66.88-66.88l38.688 38.688-0.256 0.256 375.264 375.264m-378.336-0.032L157.76 925.312a47.296 47.296 0 0 1-66.88-66.88l345.472-345.504L89.184 165.76a47.296 47.296 0 0 1 66.88-66.88l38.688 38.688-0.256 0.256 375.264 375.264"',
      ellipsis: "M110.336 572.330667a85.333333 85.333333 0 1 0 120.661333-120.661334 85.333333 85.333333 0 0 0-120.661333 120.661334zM451.669333 572.330667a85.333333 85.333333 0 1 0 120.661334-120.661334 85.333333 85.333333 0 0 0-120.661334 120.661334zM793.002667 572.330667a85.333333 85.333333 0 1 0 120.661333-120.661334 85.333333 85.333333 0 0 0-120.661333 120.661334z"
    }, l = h(() => Math.floor(s.value / c.value) * c.value), p = h(() => c.value < r.value ? c.value : r.value - 1), k = h(() => y.value && u.value ? s.value : !1), y = h(() => r.value <= c.value ? 0 : s.value >= c.value - 2), u = h(() => r.value <= c.value ? 0 : s.value < r.value - c.value + 4), v = h(() => r.value > 1), C = function(x) {
      t.emit("click", x);
    }, b = (x) => a.quickPrevBtnIsHover = !0, R = (x) => a.quickPrevBtnIsHover = !1, S = (x) => a.quickNextBtnIsHover = !0, j = (x) => a.quickNextBtnIsHover = !1, T = (x) => s.value = s.value - c.value + 2, X = (x) => s.value = s.value + c.value - 2;
    return () => i("ul", {
      class: [se()]
    }, [i("li", {
      class: [se("_btn"), s.value == 1 ? "active" : ""],
      onClick: C.bind(this, 1)
    }, [1]), y.value ? i("li", {
      class: [se("_btn"), "quickPrev"],
      onMouseenter: b,
      onMouseleave: R,
      onClick: T
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
      d: a.quickPrevBtnIsHover ? g.quickLeftArrow : g.ellipsis
    }, null)])]) : i("div", null, null), new Array(p.value).fill(k.value ? k.value : 0).map((x, A) => {
      let $ = s.value, L = Math.ceil((c.value - 2) / 2), M = A > 0 && A < c.value - 1, m = l.value;
      if (x > 0) {
        if (M)
          return x = A <= L ? x - L + A : x + A - L, i("li", {
            class: [se("_btn"), $ == x ? "active" : ""],
            onClick: C.bind(this, x)
          }, [x]);
      } else if (M)
        return $ < c.value - 2 ? i("li", {
          class: [se("_btn"), $ == m + A + 1 ? "active" : ""],
          onClick: C.bind(this, m + A + 1)
        }, [m + A + 1]) : i("li", {
          class: [se("_btn"), $ == r.value - c.value + 1 + A ? "active" : ""],
          onClick: C.bind(this, r.value - c.value + 1 + A)
        }, [r.value - c.value + 1 + A]);
    }), u.value > 0 ? i("li", {
      class: [se("_btn"), "quickNext"],
      onMouseenter: S,
      onMouseleave: j,
      onClick: X
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
      d: a.quickNextBtnIsHover ? g.quickRightArrow : g.ellipsis
    }, null)])]) : i("div", null, null), v.value ? i("li", {
      class: [se("_btn"), s.value == r.value ? "active" : ""],
      onClick: C.bind(this, r.value)
    }, [r.value]) : ""]);
  }
}), {
  n: et,
  classes: Dt
} = H("pagination-jump"), tt = /* @__PURE__ */ O({
  name: "VIPaginationJump",
  emits: ["jump-page"],
  setup(e, t) {
    let s = Z(be);
    const c = J({
      num: ""
    }), r = P(), a = function(l) {
      (() => c.num = Math.random() * 1e6)();
      const k = Number(l.target.value);
      k <= 0 ? c.num = 1 : k > s.pageCount.value ? c.num = s.pageCount.value : c.num = k;
    }, g = function(l) {
      l.key == "Enter" && (r.value.blur(), U(() => t.emit("jump-page", c.num || 1)));
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
      onKeydown: g.bind(this)
    }, null)]);
  }
}), {
  n: _e,
  classes: Wt
} = H("pagination-total"), nt = /* @__PURE__ */ O({
  name: "VIPaginationTotal",
  emits: ["click"],
  setup() {
    let {
      total: e,
      totalLabel: t
    } = Z(be);
    return () => i("div", {
      class: [Wt(_e())]
    }, [i("span", {
      class: [_e("_label")]
    }, [t.value]), i("span", {
      class: [_e("_value")]
    }, [e.value])]);
  }
});
function Ft(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !yt(e);
}
const {
  n: lt,
  classes: Xt
} = H("pagination"), qt = /* @__PURE__ */ O({
  name: "VIPagination",
  props: Je,
  directives: {
    css: le
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
    var V, D;
    const s = (o) => typeof o != "number", c = (o) => o instanceof Array, r = ((D = (V = fe()) == null ? void 0 : V.vnode) == null ? void 0 : D.props) || {}, a = "onUpdate:sizeChange" in r || "onUpdate:size-change" in r || "onSizeChange" in r, g = "onUpdate:currentPage" in r || "onUpdate:current-page" in r || "onUpdate:modelValue" in r || "onCurrentChange" in r, l = "update:total" in r;
    let p = 10, k = 1, y = 100;
    const u = J({
      select_curSelect: "",
      select_list: [
        // { value: '100', label: '100/page', },
        // { value: '200', label: '200/page', },
      ],
      select_dynamicCss: {
        // "input-txt-alight": "center",
      }
    }), v = function() {
      c(e.pageSize) && (u.select_list = e.pageSize.map((o) => ({
        value: o,
        label: o + "/page"
      })), u.select_curSelect = u.select_list[0].value);
    }, C = h(() => {
      let o = 0;
      return s(e.total) ? console.warn("total属性不合格") : o = Math.max(1, Math.ceil(e.total / R.value)), o;
    }), b = h(() => {
      let o = 0;
      return s(e.total) || (s(e.pagerCount) || (o = C.value > 7 ? Math.max(7, e.pagerCount % 2 == 0 ? e.pagerCount - 1 : e.pagerCount) : C.value), o > 29 && (o = 29)), o;
    }), R = h({
      get() {
        let o = s(e.pageSize) ? p : e.pageSize > 5 ? e.pageSize : 5;
        return o = c(e.pageSize) ? u.select_curSelect : o, o;
      },
      set(o) {
        s(e.pageSize) && (p = o), a && (e.modelValue > Math.ceil(e.total / o) && (S.value = Math.ceil(e.total / o)), U(() => {
          t.emit("size-change", {
            pageSize: o,
            currentPage: e.modelValue
          });
        }));
      }
    }), S = h({
      get() {
        return s(e.modelValue) ? k : e.modelValue;
      },
      set(o) {
        let d = o;
        o < 1 ? d = 1 : o > C.value && (d = C.value), g && (t.emit("update:modelValue", d), t.emit("current-change", d));
      }
    }), j = h({
      get() {
        return s(e.total) ? y : e.total;
      },
      set(o) {
        let d = o;
        o < 0 && (d = 0), y = d, l && t.emit("update:total", d);
      }
    }), T = h(() => e.totalLabel), X = h(() => e.jumpLabel), x = h(() => Object.assign(Je.dynamicCss.default(), e.dynamicCss)), A = h(() => {
      let o = {};
      for (let d in x.value)
        d.includes("select-v2-") && (o[d.replace("select-v2-", "")] = x.value[d]);
      return o;
    }), $ = h(() => {
      let o = e.layout;
      const d = {
        total: !1,
        size: !1,
        prev: !1,
        next: !1,
        pager: !1,
        jump: !1
      };
      for (let w in d)
        d[w] = o.replace(/\s+/g, "").split(",").findIndex((Y) => Y == w) != -1;
      return d;
    });
    Ce(be, {
      pageCount: C,
      pagerCount: b,
      pageSize: R,
      currentPage: S,
      total: j,
      totalLabel: T,
      jumpLabel: X
    }), ae(() => {
      v();
    }), pe(() => e.pageSize, () => {
      v();
    }, {
      deep: !0
    });
    const L = (o) => S.value = S.value - 1, M = (o) => S.value = S.value + 1, m = (o) => S.value = o, _ = (o) => S.value = o, I = function(o) {
      R.value = o.value;
    };
    return () => {
      let o;
      return te(i("div", {
        class: [Xt(lt()), e.background ? "bgbox" : ""]
      }, [$.value.total ? i(nt, null, null) : "", $.value.size && c(e.pageSize) ? i(F("dw-select-v2"), {
        modelValue: u.select_curSelect,
        "onUpdate:modelValue": (d) => u.select_curSelect = d,
        dynamicCss: A.value,
        onHandleSelected: I,
        class: lt("-select")
      }, Ft(o = u.select_list.map((d) => i(F("dw-select-v2-option"), {
        key: d.value,
        label: d.label,
        value: d.value
      }, null))) ? o : {
        default: () => [o]
      }) : "", $.value.prev ? i(Ke, {
        disabled: !1,
        onClick: L
      }, null) : "", $.value.pager ? i(Ze, {
        onClick: m
      }, null) : "", $.value.next ? i(Qe, {
        disabled: !1,
        onClick: M
      }, null) : "", $.value.jump ? i(tt, {
        onJumpPage: _
      }, null) : ""]), [[ie("css"), x.value || {}]]);
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
}, Ae = Symbol("radio"), { n: Ut, classes: Gt } = H("radio"), Jt = O({
  name: "VIRadio",
  props: Pe,
  emits: ["click", "update:modelValue", "change"],
  setup(e, t) {
    let s = Z(Ae, void 0);
    const c = (l) => {
      a.value || (s ? s.changeModelValue(l) : t.emit("update:modelValue", "on"));
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
    }), g = h({
      get() {
        return s ? s.currentSelect.value : e.modelValue;
      },
      set(l) {
        t.emit && t.emit("update:modelValue", l);
      }
    });
    return {
      n: Ut,
      classes: Gt,
      handleClick: c,
      IsChecked: r,
      IsDisable: a,
      modelValueBridge: g
    };
  }
}), Ve = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [c, r] of t)
    s[c] = r;
  return s;
}, Kt = ["value", "checked", "disabled"];
function Qt(e, t, s, c, r, a) {
  return ue(), de(
    "div",
    {
      class: G([e.classes(e.n()), e.IsChecked ? e.n("active") : "", e.border ? e.n("border") : ""]),
      onClick: t[1] || (t[1] = (g) => e.handleClick(e.value))
    },
    [
      oe(
        "div",
        {
          class: G([e.classes(e.n("_input__wrapper")), e.IsDisable ? "is-disabled" : ""])
        },
        [
          te(oe("input", {
            class: G([e.classes(e.n("_input"))]),
            type: "radio",
            value: e.value,
            checked: e.IsChecked,
            disabled: e.IsDisable,
            "onUpdate:modelValue": t[0] || (t[0] = (g) => e.modelValueBridge = g)
          }, null, 10, Kt), [
            [ht, e.modelValueBridge]
          ]),
          oe(
            "div",
            {
              class: G([e.classes(e.n("_circle"))])
            },
            null,
            2
            /* CLASS */
          )
        ],
        2
        /* CLASS */
      ),
      oe(
        "label",
        {
          class: G(e.classes(e.n("_label"), e.IsDisable ? "is-disabled" : ""))
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
const Zt = /* @__PURE__ */ Ve(Jt, [["render", Qt]]), en = {
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
}, { n: tn, classes: nn } = H("radio-button"), ln = O({
  name: "VIRadioButton",
  props: en,
  emits: ["click", "update:modelValue", "change"],
  // directives: { ripple },
  setup(e, t) {
    let s = Z(Ae);
    const c = P(null), r = function(p) {
      g.value || (s ? s.changeModelValue(e.value) : t.emit("update:modelValue", "on"));
    }, a = h({
      get() {
        return s ? e.value == s.currentSelect.value : e.modelValue;
      },
      set() {
      }
    }), g = h({
      get() {
        return !!e.disabled;
      },
      set() {
      }
    }), l = h({
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
      IsDisable: g,
      refRadioButton: c,
      modelValue: l
    };
  }
}), on = ["value", "checked", "disabled"];
function an(e, t, s, c, r, a) {
  return ue(), de(
    "div",
    {
      ref: "refRadioButton",
      class: G([e.classes(e.n()), e.IsChecked ? e.n("active") : "", e.border ? e.n("border") : ""]),
      onClick: t[1] || (t[1] = (...g) => e.handleClick && e.handleClick(...g))
    },
    [
      te(oe("input", {
        class: G([e.classes(e.n("_input"))]),
        type: "radio",
        value: e.value,
        checked: e.IsChecked,
        disabled: e.IsDisable,
        "onUpdate:modelValue": t[0] || (t[0] = (g) => e.modelValue = g)
      }, null, 10, on), [
        [ht, e.modelValue]
      ]),
      oe(
        "label",
        {
          class: G(e.classes(e.n("_label"), e.IsDisable ? "is-disabled" : ""))
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
const rn = /* @__PURE__ */ Ve(ln, [["render", an]]), { n: sn, classes: cn } = H("radio-group"), un = O({
  name: "VIRadioGroup",
  props: Pe,
  emits: ["click", "update:modelValue", "change"],
  directives: { css: le },
  setup(e, t) {
    const s = (a = e.modelValue) => {
      t.emit("update:modelValue", a), U(() => t.emit("change", a));
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
  const g = ie("css");
  return te((ue(), de(
    "div",
    {
      class: G(e.classes(e.n()))
    },
    [
      St(e.$slots, "default")
    ],
    2
    /* CLASS */
  )), [
    [g, e.dynamicCssBridge || {}]
  ]);
}
const pn = /* @__PURE__ */ Ve(un, [["render", dn]]), Dn = ne(Zt, "radio"), Wn = ne(rn, "radio-button"), Fn = ne(pn, "radio-group"), ot = {
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
} = H("input-svg-icon"), hn = /* @__PURE__ */ O({
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
} = H("timePickerInput"), vn = /* @__PURE__ */ O({
  name: "VITimePickerInput",
  emits: ["focus", "blur", "click", "update:modelValue", "close"],
  directives: {
    css: le
  },
  props: at,
  components: {
    "vi-input-svg-icon": hn
  },
  setup(e, t) {
    const s = "M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z", c = J({
      softFocus: !1,
      isHover: !1
    }), r = function(T) {
      S.value || t.emit("click", T);
    }, a = function(T) {
      S.value || (t.emit("update:modelValue", T.target.value), t.emit("close"), T.stopPropagation());
    }, g = function(T) {
      S.value || (t.emit("focus", T), c.softFocus = !0);
    }, l = function(T) {
      S.value || (t.emit("blur", T), c.softFocus = !1);
    }, p = function(T) {
      S.value || (c.isHover = !0);
    }, k = function(T) {
      S.value || (c.isHover = !1);
    }, y = function(T) {
      S.value || t.emit("update:modelValue", T.target.value);
    }, u = function(T) {
      S.value || t.emit("update:modelValue", T.target.value);
    }, v = h(() => Object.assign(at.dynamicCss.default(), e.dynamicCss)), C = h(() => typeof e.readonly == "string" ? !0 : e.readonly), b = h(() => typeof e.clearable == "string" ? !0 : e.clearable), R = h(() => typeof e.showPassword == "string" ? !0 : e.showPassword), S = h(() => typeof e.disabled == "string" ? !0 : e.disabled), j = h(() => c.softFocus ? "active" : "");
    return () => te(i("div", {
      class: [fn(it()), j.value, S.value ? "disabled" : ""],
      onClick: r,
      onMouseenter: p,
      onMouseleave: k
    }, [i("input", {
      class: [it("_inner")],
      placeholder: e.placeholder,
      onFocus: g,
      onBlur: l,
      readonly: C.value || S.value,
      value: e.modelValue,
      onChange: y,
      onInput: u,
      type: R.value ? "password" : "text"
    }, null), e.modelValue && b.value && c.isHover ? i(F("vi-input-svg-icon"), {
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
} = H("popper"), bn = /* @__PURE__ */ O({
  name: "VITimePickerPopper",
  emits: ["focus", "blur", "click"],
  props: ["active"],
  setup(e, t) {
    let {
      timePickerRef: s
    } = Z(bt);
    const c = J({
      parentRect: {
        x: 0,
        y: 0,
        height: 0,
        width: 0
      },
      dropdownTop: "0"
    }), r = P(null), a = P(null), g = () => {
      U(() => {
        c.parentRect = s.value.getBoundingClientRect(), c.dropdownTop = c.parentRect.height + 10 + "px";
      });
    };
    return ae(() => g()), () => {
      var l, p;
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
      }, [(p = (l = t.slots).default) == null ? void 0 : p.call(l)])])]);
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
} = H("scroll-bar__thumb"), Sn = /* @__PURE__ */ O({
  name: "ScrollBar",
  emits: ["update:height", "update:width"],
  props: wn,
  setup(e, t) {
    const {
      thumbRatioY: s,
      thumbRatioX: c,
      thumbRatioYMaxRange: r,
      thumbRatioXMaxRange: a,
      wrapperInnerMaxiMoveProportionY: g,
      wrapperInnerMaxiMoveProportionX: l,
      scrollBarRef: p
    } = Z(wt), k = P(), y = J({
      mouseMoving: !1
    });
    let u = 0, v = 0, C = 0, b = 0, R = 0, S = 0;
    const j = h({
      get() {
        return e.height;
      },
      set(L) {
        t.emit && t.emit("update:height", L);
      }
    }), T = h({
      get() {
        return e.width;
      },
      set(L) {
        t.emit && t.emit("update:width", L);
      }
    }), X = function(L) {
      if (L == "vertical") {
        let M = 0;
        const m = R;
        M = C < 0 ? m + Math.abs(C) : m - Math.abs(C), M < 0 && (M = 0), M > r.value && (M = r.value), p.value.scrollTop = Math.abs(g.value * M);
      } else if (L == "horizontal") {
        let M = 0;
        const m = S;
        M = b < 0 ? m + Math.abs(b) : m - Math.abs(b), M < 0 && (M = 0), M > a.value && (M = a.value), p.value.scrollLeft = Math.abs(l.value * M);
      }
    }, x = function(L) {
      y.mouseMoving = !0, R = Number(s.value.slice(11, -3)), S = Number(c.value.slice(11, -3)), u = Number(L.clientY), v = Number(L.clientX);
    }, A = function(L) {
      C = u - L.clientY, b = v - L.clientX, X(e.type);
    };
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", A), document.removeEventListener("mousedown", x), u = 0, v = 0, C = 0, b = 0, R = 0, S = 0, y.mouseMoving = !1;
    });
    const $ = (L) => {
      document.addEventListener("mousedown", x), document.addEventListener("mousemove", A);
    };
    return () => i("div", {
      class: yn(),
      ref: k,
      style: {
        height: j.value,
        width: T.value,
        transform: e.type == "vertical" ? e.ratioY : e.ratioX
      },
      onMousedown: $
    }, null);
  }
}), {
  n: we
} = H("scroll-bar"), Cn = /* @__PURE__ */ O({
  name: "ScrollBar",
  emits: ["update:width", "scroll"],
  directives: {
    css: le
  },
  props: st,
  // expose:['setScrollTop','setScrollLeft','setScrollTop'],
  components: {
    "scroll-bar-thumb": Sn
  },
  setup(e, t) {
    let s = null;
    const c = (o) => {
      m();
    }, r = P(), a = P(), g = P(), l = J({
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
    let p = P(!1);
    pe(() => e.noResize, (o) => {
      o ? s == null || s.disconnect() : (s = new MutationObserver(c), U(() => {
        s.observe(a.value, {
          attributes: !0,
          childList: !0,
          subtree: !0
        });
      }));
    }, {
      immediate: !0
    });
    const k = h(() => Object.assign(st.dynamicCss.default(), e.dynamicCss)), y = h(() => e.height), u = h({
      get() {
        return l.cacheContainerWidth;
      },
      set(o) {
        l.cacheContainerWidth = o;
      }
    }), v = h({
      get() {
        return l.thumbHeight;
      },
      set(o) {
        l.thumbHeight = o;
      }
    }), C = h({
      get() {
        return l.thumbWidth;
      },
      set(o) {
        l.thumbWidth = o;
      }
    }), b = h({
      get() {
        return l.thumbRatioX;
      },
      set(o) {
        l.thumbRatioX = o;
      }
    }), R = h({
      get() {
        return l.thumbRatioY;
      },
      set(o) {
        l.thumbRatioY = o;
      }
    }), S = h(() => l.thumbRatioYMaxRange), j = h(() => l.thumbRatioXMaxRange), T = h(() => l.wrapperInnerMaxiMoveProportionY), X = h(() => l.wrapperInnerMaxiMoveProportionX), x = (o) => {
      l.thumbRatioY = `translateY(${String(l.thumbRatioYProportion * o) + "px"})`;
    }, A = (o) => {
      l.thumbRatioX = `translateX(${String(l.thumbRatioXProportion * o) + "px"})`;
    }, $ = (o) => {
      r.value.scrollTop = o;
    }, L = (o) => {
      r.value.scrollLeft = o;
    }, M = (o, d) => {
      $(o), L(d);
    }, m = (o) => {
      var d, w;
      l.wrapperInnerRealHeight = Number((d = a.value) == null ? void 0 : d.scrollHeight), l.wrapperInnerRealWidth = Number((w = a.value) == null ? void 0 : w.scrollWidth), l.wrapperInnerMaxiMoveRangeY = l.wrapperInnerRealHeight - Number(y.value.replace("px", "")), l.wrapperInnerMaxiMoveRangeX = l.wrapperInnerRealWidth - Number(u.value.replace("px", "")), l.thumbHeightProportion = Number(y.value.replace("px", "")) / l.wrapperInnerRealHeight, l.thumbWidthProportion = Number(u.value.replace("px", "")) / l.wrapperInnerRealWidth, l.thumbHeight = String(l.thumbHeightProportion * Number(y.value.replace("px", ""))) + "px", l.thumbWidth = String(l.thumbWidthProportion * Number(u.value.replace("px", ""))) + "px", l.thumbRatioYMaxRange = Number(y.value.replace("px", "")) - Number(l.thumbHeight.replace("px", "")), l.thumbRatioXMaxRange = Number(u.value.replace("px", "")) - Number(l.thumbWidth.replace("px", "")), l.thumbRatioYProportion = l.thumbRatioYMaxRange / l.wrapperInnerMaxiMoveRangeY, l.thumbRatioXProportion = l.thumbRatioXMaxRange / l.wrapperInnerMaxiMoveRangeX, l.wrapperInnerMaxiMoveProportionY = l.wrapperInnerMaxiMoveRangeY / l.thumbRatioYMaxRange, l.wrapperInnerMaxiMoveProportionX = l.wrapperInnerMaxiMoveRangeX / l.thumbRatioXMaxRange;
    };
    ae(() => {
      l.cacheContainerWidth = e.width, m();
    });
    const _ = (o) => {
      const d = o.target.scrollTop, w = o.target.scrollLeft;
      x(d), A(w), t.emit && t.emit("scroll", w, d);
    }, I = () => {
      p.value = !0;
    }, V = () => {
      p.value = !1;
    };
    Ce(wt, {
      height: y,
      thumbRatioY: R,
      thumbRatioX: b,
      thumbRatioYMaxRange: S,
      thumbRatioXMaxRange: j,
      wrapperInnerMaxiMoveProportionY: T,
      wrapperInnerMaxiMoveProportionX: X,
      scrollBarRef: r
    }), t.expose({
      setScrollTop: $,
      setScrollLeft: L,
      setScrollTo: M
    });
    const D = (o = ye.VERTICAL) => {
      if (e.width === !1 || e.height === !1)
        return "";
      const d = l.wrapperInnerRealHeight, w = Number(e.height.replace("px", "")), Y = l.wrapperInnerRealWidth;
      if (o == "vertical")
        return w < d ? i(F("scroll-bar-thumb"), {
          ref: g,
          type: o,
          height: v.value,
          width: e.thumbWidth,
          ratioX: b.value,
          ratioY: R.value,
          class: p.value ? "show" : "hide"
        }, null) : "";
      if (o == "horizontal") {
        let E = Number(u.value.replace("px", ""));
        if (u.value == "auto") {
          const W = () => {
            u.value = "auto", U(() => {
              var q;
              E = Number((q = a.value) == null ? void 0 : q.clientWidth), u.value = E + "px", m();
            });
          };
          W(), window.onresize = () => W();
        } else if (u.value)
          return E < Y ? i(F("scroll-bar-thumb"), {
            ref: g,
            type: o,
            height: e.thumbWidth,
            width: C.value,
            ratioX: b.value,
            ratioY: R.value,
            class: p.value ? "show" : "hide"
          }, null) : "";
      }
    };
    return () => {
      var o, d;
      return te(i("div", {
        class: we(),
        style: {
          width: u.value
        },
        onMouseenter: I,
        onMouseleave: V
      }, [i("div", {
        class: we("_wrapper"),
        ref: r,
        style: {
          height: y.value,
          width: u.value
        },
        onScroll: _
      }, [i("div", {
        class: we("_view"),
        ref: a
      }, [(d = (o = t.slots).default) == null ? void 0 : d.call(o)])]), i("div", {
        class: [we("_bar"), "horizontal"]
      }, [D(ye.HORIZONTAL)]), i("div", {
        class: [we("_bar"), "vertical"]
      }, [D(ye.VERTICAL)])]), [[ie("css"), k.value || {}]]);
    };
  }
}), kn = ne(Cn, "scroll-bar"), {
  n: Bn,
  classes: xn
} = H("time-picker"), In = /* @__PURE__ */ O({
  name: "VITimePicker",
  emits: ["click", "inputClick", "closeClick", "cancelClick", "okClick", "update:modelValue", "focus", "blur"],
  directives: {
    css: le
  },
  props: ot,
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
    }, g = () => "xxxxxxxx".replace(/[xy]/g, function(n) {
      var f = 0 | 16 * Math.random(), B = n == "x" ? f : 8 | 3 & f;
      return B.toString(16);
    }), l = P();
    let p = P(), k = P(), y = P();
    const u = J({
      uuid: g(),
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
    }, C = function(n) {
      let f = !1;
      const B = n.path || n.composedPath && n.composedPath();
      for (let N = 0; N < B.length; N++) {
        const z = B[N];
        if (z.classList && z.classList.value && z.getAttribute("class").includes("-time-picker") && z.dataset.id == u.uuid) {
          f = !0;
          break;
        }
      }
      f || (v(), u.isSubmit = !0);
    };
    document.addEventListener("mousedown", C);
    const b = function(n) {
      t.emit && t.emit("focus");
    }, R = function(n) {
      t.emit && t.emit("blur");
    }, S = function() {
      t.emit && t.emit("click");
    }, j = function(n) {
      u.popperVisible = !u.popperVisible, u.isSubmit = !1, e.modelValue || o(), t.emit && t.emit("inputClick");
    }, T = function() {
      u.popperVisible = !1, t.emit && t.emit("closeClick");
    }, X = function(n) {
      const {
        type: f
      } = n.target.dataset;
      u.popperVisible = !1, f == "cancel" ? (u.isSubmit = !1, t.emit && t.emit("update:modelValue", c), t.emit && t.emit("cancelClick"), D()) : f == "ok" && (u.isSubmit = !0, t.emit && t.emit("okClick", u.currentSelect));
    }, x = function(n, f) {
      const B = {
        index: {
          hour: "0",
          minute: "1",
          second: "2"
        },
        ref: {
          hour: p,
          minute: k,
          second: y
        }
      }, {
        num: N,
        disabled: z
      } = f.dataset;
      if (N) {
        if (z == "true")
          return;
        u.currentSelect[B.index[n]] = N;
        const ge = Number(u.currentSelect[B.index[n]]) * Number(w.value["popper-spinner-number-height"]);
        B.ref[n].value.setScrollTop(ge);
      }
    }, A = function(n) {
      x("hour", n.target);
    }, $ = function(n) {
      x("minute", n.target);
    }, L = function(n) {
      x("second", n.target);
    }, M = function(n, f) {
      const B = {
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
      let z = Math.round(n / Number(w.value["popper-spinner-number-height"]));
      if (e[B.ableRange[f]].filter((Be) => Be == z).length > 0)
        return;
      u.currentSelect[B.timers[f]] = r(z);
      let he = z * Number(w.value["popper-spinner-number-height"]);
      s[B.timers[f]] && (clearTimeout(s[B.timers[f]]), s[B.timers[f]] = null), s[B.timers[f]] = setTimeout(() => {
        f == "hour" && p.value.setScrollTop(he), f == "minute" && k.value.setScrollTop(he), f == "second" && y.value.setScrollTop(he);
      }, 200);
    }, m = function(n, f) {
      M(f, "hour");
    }, _ = function(n, f) {
      M(f, "minute");
    }, I = function(n, f) {
      M(f, "second");
    }, V = () => {
      u.hourList = new Array(24).fill(0).map((n, f) => f < 10 ? "0" + f : f + ""), u.minuteList = new Array(60).fill(0).map((n, f) => f < 10 ? "0" + f : f + ""), u.secondList = new Array(60).fill(0).map((n, f) => f < 10 ? "0" + f : f + "");
    }, D = function() {
      c && (p.value.setScrollTop(Number(c.slice(0, 2)) * Number(w.value["popper-spinner-number-height"])), k.value.setScrollTop(Number(c.slice(3, 5)) * Number(w.value["popper-spinner-number-height"])), y.value.setScrollTop(Number(c.slice(6, 8)) * Number(w.value["popper-spinner-number-height"])));
    }, o = () => {
      const n = new Date(), f = n.getHours(), B = n.getMinutes(), N = n.getSeconds();
      u.currentSelect[0] = r(f), u.currentSelect[1] = r(B), u.currentSelect[2] = r(N), p.value.setScrollTop(Number(u.currentSelect[0]) * Number(w.value["popper-spinner-number-height"])), k.value.setScrollTop(Number(u.currentSelect[1]) * Number(w.value["popper-spinner-number-height"])), y.value.setScrollTop(Number(u.currentSelect[2]) * Number(w.value["popper-spinner-number-height"])), t.emit && t.emit("update:modelValue", u.currentSelect[0] + ":" + u.currentSelect[1] + ":" + u.currentSelect[2]);
    }, d = function() {
      if (e.modelValue && a(e.modelValue)) {
        const n = e.modelValue.split(":"), f = e.disabledHours.findIndex((z) => z == n[0]) != -1, B = e.disabledMinutes.findIndex((z) => z == n[1]) != -1, N = e.disabledSeconds.findIndex((z) => z == n[2]) != -1;
        if (f || B || N)
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
      V(), U(() => {
        D();
      });
    });
    const w = h(() => Object.assign(ot.dynamicCss.default(), e.dynamicCss)), Y = h(() => {
      const n = {};
      for (const f in w.value)
        f.includes("input") && (n[f] = w.value[f]);
      return n;
    }), E = h({
      get() {
        return d(), e.modelValue;
      },
      set(n) {
        t.emit && t.emit("update:modelValue", n);
      }
    }), W = h(() => e.clearable), q = function(n, f) {
      const B = {
        hour: "disabledHours",
        minute: "disabledMinutes",
        second: "disabledSeconds"
      };
      let N = !1;
      return e[B[n]].forEach((z) => z == f ? N = !0 : ""), N;
    }, K = h(() => function(n) {
      return q("hour", n);
    }), Q = h(() => function(n) {
      return q("minute", n);
    }), ee = h(() => function(n) {
      return q("second", n);
    });
    return Se(() => {
      const n = u.currentSelect[0], f = u.currentSelect[1], B = u.currentSelect[2];
      if (!n && !f && !B) {
        t.emit && t.emit("update:modelValue", "");
        return;
      }
      const N = n + ":" + f + ":" + B;
      t.emit && t.emit("update:modelValue", N);
    }), Se(() => {
      u.isSubmit && (c = e.modelValue, t.emit && t.emit("update:modelValue", c));
    }), Ce(bt, {
      timePickerRef: l
    }), () => te(i("div", {
      ref: l,
      "data-id": u.uuid,
      class: [xn(Bn())],
      onClick: S
    }, [i(F("vi-time-picker-input"), {
      placeholder: e.placeholder,
      modelValue: E.value,
      "onUpdate:modelValue": (n) => E.value = n,
      onFocus: b,
      onBlur: R,
      onClose: T,
      dynamicCss: Y.value || {},
      clearable: W.value,
      readonly: !0,
      onClick: j
    }, null), i(F("vi-time-picker-popper"), {
      active: u.popperVisible
    }, {
      default: () => [i("div", {
        class: "time-panel"
      }, [i("div", {
        class: "time-panel__content"
      }, [i(F("vi-scroll-bar"), {
        ref: p,
        class: "time-panel__spinner time-panel__popper-spinner--hour",
        onScroll: m,
        height: Number(w.value["popper-spinner-number-height"]) * 6 + "px"
      }, {
        default: () => [i("ul", {
          onClick: A
        }, [u.hourList.map((n) => i("li", {
          "data-num": n,
          "data-disabled": K.value(Number(n)),
          class: [u.currentSelect[0] == n ? "active" : "", K.value(Number(n)) ? "disabled" : ""]
        }, [n]))])]
      }), i(F("vi-scroll-bar"), {
        ref: k,
        class: "time-panel__spinner time-panel__popper-spinner--minutes",
        onScroll: _,
        height: Number(w.value["popper-spinner-number-height"]) * 6 + "px"
      }, {
        default: () => [i("ul", {
          onClick: $
        }, [u.minuteList.map((n) => i("li", {
          "data-num": n,
          "data-disabled": Q.value(Number(n)),
          class: [u.currentSelect[1] == n ? "active" : "", Q.value(Number(n)) ? "disabled" : ""]
        }, [n]))])]
      }), i(F("vi-scroll-bar"), {
        ref: y,
        class: "time-panel__spinner time-panel__popper-spinner--second",
        onScroll: I,
        height: Number(w.value["popper-spinner-number-height"]) * 6 + "px"
      }, {
        default: () => [i("ul", {
          onClick: L
        }, [u.secondList.map((n) => i("li", {
          "data-num": n,
          "data-disabled": ee.value(Number(n)),
          class: [u.currentSelect[2] == n ? "active" : "", ee.value(Number(n)) ? "disabled" : ""]
        }, [n]))])]
      })]), i("div", {
        class: "time-panel__footer",
        onClick: X
      }, [i("div", {
        "data-type": "cancel",
        class: "time-panel__footer_cancel"
      }, [Re("取消")]), i("div", {
        "data-type": "ok",
        class: "time-panel__footer_ok"
      }, [Re("确认")])])])]
    })]), [[ie("css"), w.value || {}]]);
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
}, { n: Vn } = H(""), Mn = (e = Vn()) => e + "xxxxxxxx".replace(/[xy]/g, function(t) {
  var s = 0 | 16 * Math.random(), c = t == "x" ? s : 8 | 3 & s;
  return c.toString(16);
});
class _n {
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
function Ln(e, t = "top", s, c, r) {
  const a = t == "top" ? e.scrollTop : t == "left" ? e.scrollLeft : 0, g = s - a, l = performance.now();
  function p() {
    const u = performance.now() - l, v = k(
      u,
      a,
      g,
      c
    );
    t == "top" ? e.scrollTop = v : t == "left" && (e.scrollLeft = v), u < c ? requestAnimationFrame(p) : r && r();
  }
  function k(y, u, v, C) {
    return y /= C / 2, y < 1 ? v / 2 * y * y + u : (y--, -v / 2 * (y * (y - 2) - 1) + u);
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
function Rn(e) {
  const t = {};
  return e.map((s) => {
    const { __id: c, ...r } = s, a = JSON.stringify(r);
    if (!t[a])
      return t[a] = !0, s;
    const g = Ne();
    return { ...s, __id: g };
  });
}
const {
  n: ut
} = H("long-text"), dt = {
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
}, pt = /* @__PURE__ */ O({
  name: "LongText",
  emits: ["update:text"],
  props: dt,
  directives: {
    css: le
  },
  // components: { ToolTip: ToolTip },
  setup(e, t) {
    var u;
    const c = "onUpdate:modelValue" in (((u = fe()) == null ? void 0 : u.vnode.props) || {}), r = P(null), a = P(null), g = P(null), l = P(null), p = J({
      isScroll: !0,
      // 是否达到滚动条件
      toolTip_x: 0,
      toolTip_y: 0,
      toolTip_content: "盎司附近拉萨解放了卡JFK垃圾地方"
    }), k = h(() => Object.assign(dt.dynamicCss.default(), e.dynamicCss)), y = h({
      get() {
        return p.isScroll = !0, e.text;
      },
      set(v) {
        c && t.emit("update:text", v);
      }
    });
    return ae(() => {
      Se(() => {
        U(() => {
          const v = r.value.clientWidth, b = g.value.offsetWidth;
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
      ref: g,
      class: p.isScroll ? "startAnimation" : ""
    }, [y.value]), p.isScroll ? i("span", null, [i("span", {
      class: "seizeASeat"
    }, null), i("span", {
      ref: l,
      class: "startAnimation"
    }, [y.value]), i("span", {
      class: "seizeASeat"
    }, null)]) : ""])]), [[ie("css"), k.value || {}]]);
  }
}), {
  n: ce
} = H("roll-list"), Pn = /* @__PURE__ */ O({
  name: "RollList",
  emits: ["update:modelValue", "rowClick"],
  directives: {
    css: le
  },
  props: ct,
  components: {
    LongText: pt
  },
  setup(e, t) {
    var D;
    const c = "onUpdate:modelValue" in (((D = fe()) == null ? void 0 : D.vnode.props) || {}), r = J({
      uuid: Mn(ce("-")),
      takeFlag: !1,
      rotationTimer: null,
      getInventedListDataBridgeInit: !1
    }), a = P(null), g = P();
    let l = 0, p = !1, k = null;
    const y = {
      longText: "longText"
    }, u = (o) => {
      o.preventDefault();
    }, v = h(() => Object.assign(ct.dynamicCss.default(), e.dynamicCss)), C = h(() => {
      let o = {};
      for (let d in v.value)
        d.includes("longText") && (o[d.replace("longText-", "")] = v.value[d]);
      return o;
    }), b = h(() => e.header), R = () => {
      var o;
      for (let d = 0; d < ((o = g.value) == null ? void 0 : o.children.length); d++) {
        const w = g.value.children[d], {
          attractShowCount: Y,
          header: E,
          tmp_scaleRule: W
        } = e;
        if (Y.includes(d))
          if (v.value["tr-focus-bg-color-style"] == "double") {
            const Q = v.value["tr-focus-bg-color-angle"], ee = v.value["tr-focus-bg-color-from"], n = v.value["tr-focus-bg-color-to"];
            w.style.background = `linear-gradient(${Q}deg,${ee},${n})`;
          } else
            w.style.background = v.value["tr-focus-bg-color-value"];
        else
          w.style.background = v.value["tr-un-focus-bg-color"];
        Array.from(w.children).forEach((K, Q) => {
          K.style.flexBasis = E[Q].basis + "%", Y.includes(d) ? K.style.transform = `scale(${W[0]})` : K.style.transform = `scale(${W[1]})`;
        });
      }
    }, S = () => {
      if (r.rotationTimer && (clearInterval(r.rotationTimer), r.rotationTimer = null), e.rollType == $e.AUTHROLL) {
        if (p)
          return;
        r.rotationTimer = j.value.length > e.showCount && setInterval(() => {
          U(() => {
            x();
          });
        }, e.loopTime);
      }
    }, j = h({
      get() {
        const o = e.modelValue.map((d, w) => (d.__id = Ne(), d.__uniqueness = Ne(), d));
        return k = new _n(Te(o), e.showCount * 2), U(() => {
          R();
        }), o;
      },
      set(o) {
        c && t.emit("update:modelValue", o);
      }
    }), T = h(() => {
      if (r.takeFlag = !r.takeFlag, e.modelValue.length > e.showCount) {
        const o = r.getInventedListDataBridgeInit ? e.rollCount : (r.getInventedListDataBridgeInit = !0) && 0;
        return Rn(k.take(o));
      } else
        return new Array(e.modelValue.length).fill(0).map((o, d) => j.value[d]);
    }), X = h(() => {
      let o = j.value.length;
      const d = Number(e.itemHeight.replace("px", "")), w = o <= e.showCount ? o : e.showCount;
      return d * w + "px";
    });
    ae(() => {
      S(), pe(() => e.rollType, () => S()), pe(() => e.loopTime, () => S()), pe(() => j.value, () => {
        S();
      });
    }), Le(() => {
    });
    const x = () => {
      var Y;
      const o = a == null ? void 0 : a.value, d = e.rollCount <= e.showCount ? e.rollCount : e.showCount, w = o.scrollHeight - o.clientHeight;
      l = l + w / e.showCount * d;
      for (let E = 0; E < ((Y = g.value) == null ? void 0 : Y.children.length); E++) {
        const W = g.value.children[E], {
          attractShowCount: q,
          header: K,
          tmp_scaleRule: Q
        } = e, ee = q.map((n) => n + d).includes(E);
        if (ee)
          if (v.value["tr-focus-bg-color-style"] == "double") {
            const f = v.value["tr-focus-bg-color-angle"], B = v.value["tr-focus-bg-color-from"], N = v.value["tr-focus-bg-color-to"];
            W.style.background = `linear-gradient(${f}deg,${B},${N})`;
          } else
            W.style.background = v.value["tr-focus-bg-color-value"];
        else
          W.style.background = v.value["tr-un-focus-bg-color"];
        Array.from(W.children).forEach((n, f) => {
          n.style.flexBasis = K[f].basis + "%", ee ? n.style.transform = `scale(${Q[0]})` : n.style.transform = `scale(${Q[1]})`;
        });
      }
      Ln(o, "top", l, e.scrollTransition, () => {
        r.takeFlag = !r.takeFlag, o.scrollTop = 0, l = 0, U(() => {
          R();
        });
      });
    }, A = () => {
      p = !0, r.rotationTimer && (clearInterval(r.rotationTimer), r.rotationTimer = null);
    }, $ = () => {
      p = !1, S();
    }, L = function(o) {
      t.emit && t.emit("rowClick", o);
    };
    Le(() => {
      A(), r.rotationTimer = null;
    });
    const M = () => {
      if (!v.value["pin-bg-color-style"])
        return "";
      let o = "none";
      if (v.value["pin-bg-color-style"] == "double") {
        const w = v.value["pin-bg-color-angle"], Y = v.value["pin-bg-color-from"], E = v.value["pin-bg-color-to"];
        o = `linear-gradient(${w}deg,${Y},${E})`;
      } else
        o = v.value["pin-bg-color-value"];
      return i("div", {
        class: ce("_pinSth"),
        style: {
          background: o
        }
      }, null);
    }, m = () => e.showHeader ? i("div", {
      class: ce("_th")
    }, [b.value.map((o) => i("div", {
      class: ce("_td"),
      style: {
        flexBasis: o.basis + "%"
      }
    }, [o.label]))]) : "", _ = () => i("div", {
      ref: a,
      onWheel: u,
      class: ce("_scroll"),
      style: {
        height: X.value
      }
    }, [i("ul", {
      ref: g,
      class: ce("_wrapper")
    }, [T.value.map((o) => I(o))])]), I = (o) => i("li", {
      key: o.__id,
      style: {
        height: e.itemHeight
      },
      onClick: L.bind(this, o)
    }, [e.header.map((d, w) => V(o, d, w))]), V = (o, d, w) => {
      var W, q, K, Q, ee, n, f, B, N, z, ge, he, Be, Ee, He, ze, Oe, je;
      let Y = {};
      d.longText && ((W = d == null ? void 0 : d.longText) != null && W.speed && (Y["sco-ani-dura"] = d.longText.speed), (q = d.longText) != null && q.GPUSpee && (Y["sco-ani-name"] = ((K = d == null ? void 0 : d.longText) == null ? void 0 : K.GPUSpee) == !0 ? "longTextScrollxAnimation3d" : "longTextScrollxAnimation"), ((Q = d.longText) != null && Q.txtGap || Number(d.longText.txtGap) == 0) && (Y["txt-gap"] = d.longText.txtGap));
      const E = {};
      return o[d.prop] && ((ee = d.fo) != null && ee.textAlign && (E.textAlign = (n = d.fo) == null ? void 0 : n.textAlign), (f = d.fo) != null && f.style && (E.fontFamily = (B = d.fo) == null ? void 0 : B.style), (N = d.fo) != null && N.weight && (E.fontWeight = (z = d.fo) == null ? void 0 : z.weight), (ge = d.fo) != null && ge.color && (E.color = (he = d.fo) == null ? void 0 : he.color), (Be = d.fo) != null && Be.size && (E.fontSize = ((Ee = d.fo) == null ? void 0 : Ee.size) + "px")), i("div", {
        class: [ce("_td")]
      }, [i("div", {
        class: [y[(He = b.value[w]) == null ? void 0 : He.type]],
        style: {
          ...E
        }
      }, [(ze = b.value[w]) != null && ze.type && ((Oe = b.value[w]) == null ? void 0 : Oe.type) == "longText" ? i(pt, {
        style: {
          padding: "0 1px"
        },
        text: o[d.prop] || "undefined",
        speed: o[d.prop] ? (je = d.longText) == null ? void 0 : je.speed : !1,
        dynamicCss: Object.assign(Te(C.value), Y)
      }, null) : o[d.prop] || "undefined"])]);
    };
    return () => te(i("div", {
      class: ce(),
      onMouseenter: A,
      onMouseleave: $
    }, [M(), m(), _()]), [[ie("css"), v.value || {}]]);
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
}, { n: Tn, classes: Nn } = H("scroll-block"), An = O({
  name: "VIScrollBlock",
  directives: { css: le },
  props: gt,
  emits: ["click", "update:modelValue", "change"],
  setup(e, t) {
    var u;
    (u = fe()) != null && u.vnode.props;
    const s = P(), c = P(!0);
    let r = P([
      // "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240207113212.png",
      // "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240207173357.png",
      // "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240218221447.jpg",
      // "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240222153642.png",
      // "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240222153607.png",
      // "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20220105175300.png"
    ]), a = P([
      // "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240207113212.png",
      // "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240207173357.png",
      // "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240218221447.jpg",
      // "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240222153642.png",
      // "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240222153607.png",
      // "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20220105175300.png"
    ]), g = 0;
    const l = J({
      transform: "translateX(0px)"
    });
    function p(v, C = "top", b, R, S) {
      const j = C == "top" ? v.scrollTop : C == "left" ? v.scrollLeft : 0, T = b - j, X = performance.now();
      function x() {
        const L = performance.now() - X, M = A(
          L,
          j,
          T,
          R
        );
        C == "top" ? v.scrollTop = M : C == "left" && (v.scrollLeft = M), L < R ? requestAnimationFrame(x) : S && S();
      }
      function A($, L, M, m) {
        return M * $ / m + L;
      }
      requestAnimationFrame(x);
    }
    const k = h(() => (e.modelValue.length <= e.showCount && (r.value = [...e.modelValue, ...e.modelValue], a.value = [...r.value.slice(0)]), e.dynamicCss["bs-box-width"] = e.showCount * e.dynamicCss["bs-img-width"] + (e.showCount - 1) * e.dynamicCss["bs-img-interval"], Object.assign(gt.dynamicCss.default(), e.dynamicCss))), y = (v) => {
      let C = 0, b = null;
      v == "front" ? (b = s.value.children[0], C = b.scrollWidth - b.clientWidth) : v == "backend" && (b = s.value.children[1], C = b.scrollWidth - b.clientWidth), g = g + C, p(
        b,
        "left",
        g,
        5e3,
        () => {
          c.value = !c.value, b.scrollLeft = 0, g = 0, y(c.value ? "front" : "backend");
        }
      );
    };
    return setTimeout(() => {
      y("front");
    }, 1e3), {
      n: Tn,
      classes: Nn,
      scrollBlockDom: s,
      toggleScrollBox: c,
      imgList: r,
      imgList1: a,
      dynamicStyle: l,
      dynamicCssBridge: k
    };
  }
}), $n = ["src"], En = ["src"];
function Hn(e, t, s, c, r, a) {
  const g = ie("css");
  return te((ue(), de(
    "div",
    {
      class: G([e.classes(e.n())]),
      ref: "scrollBlockDom"
    },
    [
      oe(
        "div",
        {
          class: G([e.classes(e.n("_wrapper"))]),
          style: Ye({ opacity: e.toggleScrollBox ? 1 : 0 })
        },
        [
          oe(
            "div",
            {
              class: G([e.classes(e.n("_wrapper__inner")), "0"])
            },
            [
              (ue(!0), de(
                De,
                null,
                We(e.imgList, (l, p) => (ue(), de("img", {
                  class: G([e.n("_wrapper__inner__image")]),
                  key: p,
                  src: l
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
      oe(
        "div",
        {
          class: G([e.classes(e.n("_wrapper"))]),
          style: Ye({ opacity: e.toggleScrollBox ? 0 : 1 })
        },
        [
          oe(
            "div",
            {
              class: G([e.classes(e.n("_wrapper__inner")), "1"])
            },
            [
              (ue(!0), de(
                De,
                null,
                We(e.imgList1, (l, p) => (ue(), de("img", {
                  class: G([e.n("_wrapper__inner__image")]),
                  key: p,
                  src: l
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
    [g, e.dynamicCssBridge]
  ]);
}
const zn = /* @__PURE__ */ Ve(An, [["render", Hn]]), Un = ne(zn, "scroll-block"), mt = {
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
} = H("sankey-diagram"), On = /* @__PURE__ */ O({
  name: "sankeyDiagram",
  emits: ["update:width", "select"],
  directives: {
    css: le
  },
  props: mt,
  setup(e, t) {
    var M;
    const c = "onUpdate:modelValue" in (((M = fe()) == null ? void 0 : M.vnode.props) || {}), r = P(null), a = P(null), g = P(null), l = J({
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
      const m = Object.assign(mt.dynamicCss.default(), e.dynamicCss);
      return m["left-bg-image"] = `url(${e.backgroundImg.leftBackgroundImg})`, m["left-bg-image_active"] = `url(${e.backgroundImg.leftBackgroundImgActive})`, m["right-bg-image"] = `url(${e.backgroundImg.rightBackgroundImg})`, m["right-bg-image_active"] = `url(${e.backgroundImg.rightBackgroundImgActive})`, m;
    }), k = h({
      get() {
        return e.modelValue.filter((m) => m.type == "left");
      },
      set(m) {
        c && t.emit("update:modelValue", m);
      }
    }), y = h({
      get() {
        return e.modelValue.filter((m) => m.type == "right");
      },
      set(m) {
        c && t.emit("update:modelValue", m);
      }
    }), u = (m = "left", _, I) => {
      e.modelValue.filter((V) => V.type == m).forEach((V, D) => {
        let o = _, d = 0, w = D * I + I / 2;
        const Y = Number(p.value["item-mar-t"]);
        D == 0 ? d = w : d = w + Y * D;
        const E = [o, d];
        l.linkData.push({
          id: V.id,
          position: E
        });
      });
    }, v = () => {
      let m = [], _ = [];
      for (let I = 0; I < k.value.length; I++) {
        const V = k.value[I];
        if (V.link && V.link.length > 0 && l.linkData && l.linkData.length > 0)
          for (let D = 0; D < V.link.length; D++) {
            const o = V.link[D], d = l.linkData.filter((q) => q.id == V.id)[0], w = l.linkData.filter((q) => q.id == o)[0], Y = `${0},${d.position[1]}`, E = `${w.position[0]},${w.position[1]}`, W = `M ${Y} ${E}`;
            m.push(W), _.push(`${V.id},${o}`);
          }
      }
      return {
        list: m,
        ids: _
      };
    }, C = () => {
      l.linkData = [], l.svg_path_d = [], l.svg_path_ids = [], U(() => {
        l.leftItemHeight = r.value.children[0].getBoundingClientRect().height, l.leftItemWidth = r.value.clientWidth, l.rightItemHeight = g.value.children[0].getBoundingClientRect().height, l.rightItemWidth = g.value.clientWidth, l.centerBoxWidth = a.value.clientWidth, u("left", l.leftItemWidth, l.leftItemHeight), u("right", l.centerBoxWidth, l.rightItemHeight);
        const {
          list: m,
          ids: _
        } = v();
        l.svg_path_d = m, l.svg_path_ids = _;
        let I = k.value.length, V = y.value.length;
        a.value.style.height = Math.max(l.rightItemHeight * V + p.value["item-mar-t"] * (V - 1), l.leftItemHeight * I + p.value["item-mar-t"] * (I - 1)) + "px";
      });
    }, b = () => {
      const m = {};
      return [...Array.from(r.value.children), ...Array.from(a.value.children), ...Array.from(g.value.children)].forEach((I) => {
        let V = I.getAttribute("data-id");
        V && (m[V] = I);
      }), m;
    };
    pe(() => e.modelValue, () => {
      setTimeout(() => {
        C();
      }, 0.3 * 1e3);
    }, {
      deep: !0,
      immediate: !0
    }), ae(() => {
    });
    const R = function(m) {
      const _ = b();
      S(_), m.type == "left" ? [...m.link, m.id].forEach((I) => {
        l.activeDomsIds.push(I), _[I].classList.add("active"), l.svg_path_ids.forEach((V) => {
          V == `${m.id},${I}` && (l.activeDomsIds.push(V), _[V].classList.add("active"));
        });
      }) : m.type == "right" && (k.value.forEach((I) => {
        I.link && I.link.length > 0 && I.link.findIndex((V) => V == m.id) != -1 && (l.activeDomsIds.push(I.id), _[I.id].classList.add("active"), l.svg_path_ids.forEach((V) => {
          V == `${I.id},${m.id}` && (l.activeDomsIds.push(V), _[V].classList.add("active"));
        }), l.activeDomsIds.push(m.id), _[m.id].classList.add("active"));
      }), l.activeDomsIds.push(m.id)), t.emit && t.emit("select", m);
    }, S = (m) => {
      m = m || b();
      let _ = l.activeDomsIds.pop();
      for (; _; )
        m[_].classList.remove("active"), _ = l.activeDomsIds.pop(), _ && m[_].classList.remove("active");
    }, j = () => l, T = () => {
      l.svg_path_d = [], l.svg_path_ids = [];
    };
    t.expose({
      clearAllActive: S,
      render: C,
      __getData: j,
      __clearLinkLines: T
    });
    const X = () => i("ul", {
      class: re("left"),
      ref: r
    }, [k.value.map((m) => A(m))]), x = () => i("ul", {
      class: re("right"),
      ref: g
    }, [y.value.map((m) => A(m, "right"))]), A = (m, _ = "left") => i("li", {
      class: [re(`${_}__item`), e.heightScroll ? "" : "fullParent"],
      key: m.id,
      "data-id": m.id,
      onClick: R.bind(this, m)
    }, [m.name]), $ = (m) => i("svg", {
      class: re("center"),
      ref: a
    }, [i("defs", null, [i("filter", {
      id: "glow",
      x: "-50%",
      y: "-50%",
      width: "200%",
      height: "200%"
    }, null)]), l.svg_path_d.map((_, I) => L(_, l.svg_path_ids[I]))]), L = (m, _) => i("path", {
      class: re("center__line"),
      d: m,
      "data-id": _
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
    }, [X(), $(), x()])]) : i("div", {
      class: re("scroll")
    }, [X(), $(), x()])]), [[ie("css"), p.value || {}]]);
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
