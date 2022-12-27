import { defineComponent as j, inject as G, ref as X, reactive as D, computed as s, createVNode as b, watch as Q, nextTick as O, onMounted as U, provide as ee, withDirectives as te, resolveDirective as re, resolveComponent as $ } from "vue";
const ae = (t, a) => (t.install = function(m) {
  if (t) {
    const l = t.name || t.__name;
    if (l || a) {
      const u = a ? `dw-${a}` : "dw-" + l.replace(/dw/gi, "").toLowerCase();
      m.component(u, t);
    } else
      console.error(t, a, !a);
  }
}, t), oe = (t) => Array.isArray(t);
function k(t) {
  const a = `vi-${t}`;
  return {
    n: (u) => u ? u.startsWith("-") ? `${a}${u}` : `${a}_${u}` : a,
    classes: (...u) => u.map((c) => {
      if (oe(c)) {
        const [d, x, e = null] = c;
        return d ? x : e;
      }
      return c;
    })
  };
}
const z = {
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
var B = /* @__PURE__ */ ((t) => (t.HORIZONTAL = "horizontal", t.VERTICAL = "vertical", t))(B || {});
const ne = {
  type: {
    type: [String || B],
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
}, V = function(t, a) {
  for (let [m, l] of Object.entries(a.value))
    t.style.setProperty("--" + m, l);
}, ie = {
  mounted(t, a) {
    V(t, a);
  },
  updated(t, a) {
    V(t, a);
  },
  install(t) {
    t.directive("Css", this);
  }
}, Z = Symbol("scroll-bar"), {
  n: le
} = k("scroll-bar__thumb"), ue = /* @__PURE__ */ j({
  name: "ScrollBar",
  emits: ["update:height", "update:width"],
  props: ne,
  setup(t, a) {
    const {
      thumbRatioY: m,
      thumbRatioX: l,
      thumbRatioYMaxRange: u,
      thumbRatioXMaxRange: c,
      wrapperInnerMaxiMoveProportionY: d,
      wrapperInnerMaxiMoveProportionX: x,
      scrollBarRef: e
    } = G(Z), I = X(), P = D({
      mouseMoving: !1
    });
    let p = 0, i = 0, v = 0, g = 0, R = 0, M = 0;
    const N = s({
      get() {
        return t.height;
      },
      set(o) {
        a.emit && a.emit("update:height", o);
      }
    }), S = s({
      get() {
        return t.width;
      },
      set(o) {
        a.emit && a.emit("update:width", o);
      }
    }), C = function(o) {
      if (o == "vertical") {
        let n = 0;
        const w = R;
        n = v < 0 ? w + Math.abs(v) : w - Math.abs(v), n < 0 && (n = 0), n > u.value && (n = u.value), e.value.scrollTop = Math.abs(d.value * n);
      } else if (o == "horizontal") {
        let n = 0;
        const w = M;
        n = g < 0 ? w + Math.abs(g) : w - Math.abs(g), n < 0 && (n = 0), n > c.value && (n = c.value), e.value.scrollLeft = Math.abs(x.value * n);
      }
    }, y = function(o) {
      P.mouseMoving = !0, R = Number(m.value.slice(11, -3)), M = Number(l.value.slice(11, -3)), p = Number(o.clientY), i = Number(o.clientX);
    }, W = function(o) {
      v = p - o.clientY, g = i - o.clientX, C(t.type);
    };
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", W), document.removeEventListener("mousedown", y), p = 0, i = 0, v = 0, g = 0, R = 0, M = 0, P.mouseMoving = !1;
    });
    const L = (o) => {
      document.addEventListener("mousedown", y), document.addEventListener("mousemove", W);
    };
    return () => b("div", {
      class: le(),
      ref: I,
      style: {
        height: N.value,
        width: S.value,
        transform: t.type == "vertical" ? t.ratioY : t.ratioX
      },
      onMousedown: L
    }, null);
  }
}), {
  n: Y
} = k("scroll-bar"), se = /* @__PURE__ */ j({
  name: "ScrollBar",
  emits: ["update:width", "scroll"],
  directives: {
    css: ie
  },
  props: z,
  components: {
    "scroll-bar-thumb": ue
  },
  setup(t, a) {
    let m, l = null;
    const u = (r) => {
      H();
    }, c = X(), d = X(), x = X(), e = D({
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
    let I = X(!1);
    Q(() => t.noResize, (r) => {
      r ? (m == null || m(), l == null || l.disconnect()) : (l = new MutationObserver(u), O(() => {
        l.observe(d.value, {
          attributes: !0,
          childList: !0,
          subtree: !0
        });
      }));
    }, {
      immediate: !0
    });
    const P = s(() => Object.assign(z.dynamicCss.default(), t.dynamicCss)), p = s(() => t.height), i = s({
      get() {
        return e.cacheContainerWidth;
      },
      set(r) {
        e.cacheContainerWidth = r;
      }
    }), v = s({
      get() {
        return e.thumbHeight;
      },
      set(r) {
        e.thumbHeight = r;
      }
    }), g = s({
      get() {
        return e.thumbWidth;
      },
      set(r) {
        e.thumbWidth = r;
      }
    }), R = s({
      get() {
        return e.thumbRatioX;
      },
      set(r) {
        e.thumbRatioX = r;
      }
    }), M = s({
      get() {
        return e.thumbRatioY;
      },
      set(r) {
        e.thumbRatioY = r;
      }
    }), N = s(() => e.thumbRatioYMaxRange), S = s(() => e.thumbRatioXMaxRange), C = s(() => e.wrapperInnerMaxiMoveProportionY), y = s(() => e.wrapperInnerMaxiMoveProportionX), W = (r) => {
      e.thumbRatioY = `translateY(${String(e.thumbRatioYProportion * r) + "px"})`;
    }, L = (r) => {
      e.thumbRatioX = `translateX(${String(e.thumbRatioXProportion * r) + "px"})`;
    }, o = (r) => {
      c.value.scrollTop = r;
    }, n = (r) => {
      c.value.scrollLeft = r;
    }, w = (r, h) => {
      o(r), n(h);
    }, H = (r) => {
      var h, f;
      e.wrapperInnerRealHeight = Number((h = d.value) == null ? void 0 : h.scrollHeight), e.wrapperInnerRealWidth = Number((f = d.value) == null ? void 0 : f.scrollWidth), e.wrapperInnerMaxiMoveRangeY = e.wrapperInnerRealHeight - Number(p.value.replace("px", "")), e.wrapperInnerMaxiMoveRangeX = e.wrapperInnerRealWidth - Number(i.value.replace("px", "")), e.thumbHeightProportion = Number(p.value.replace("px", "")) / e.wrapperInnerRealHeight, e.thumbWidthProportion = Number(i.value.replace("px", "")) / e.wrapperInnerRealWidth, e.thumbHeight = String(e.thumbHeightProportion * Number(p.value.replace("px", ""))) + "px", e.thumbWidth = String(e.thumbWidthProportion * Number(i.value.replace("px", ""))) + "px", e.thumbRatioYMaxRange = Number(p.value.replace("px", "")) - Number(e.thumbHeight.replace("px", "")), e.thumbRatioXMaxRange = Number(i.value.replace("px", "")) - Number(e.thumbWidth.replace("px", "")), e.thumbRatioYProportion = e.thumbRatioYMaxRange / e.wrapperInnerMaxiMoveRangeY, e.thumbRatioXProportion = e.thumbRatioXMaxRange / e.wrapperInnerMaxiMoveRangeX, e.wrapperInnerMaxiMoveProportionY = e.wrapperInnerMaxiMoveRangeY / e.thumbRatioYMaxRange, e.wrapperInnerMaxiMoveProportionX = e.wrapperInnerMaxiMoveRangeX / e.thumbRatioXMaxRange;
    };
    U(() => {
      e.cacheContainerWidth = t.width, H();
    });
    const F = (r) => {
      const h = r.target.scrollTop, f = r.target.scrollLeft;
      W(h), L(f), a.emit && a.emit("scroll", f, h);
    }, J = (r) => {
      I.value = !0;
    }, K = (r) => {
      I.value = !1;
    };
    ee(Z, {
      height: p,
      thumbRatioY: M,
      thumbRatioX: R,
      thumbRatioYMaxRange: N,
      thumbRatioXMaxRange: S,
      wrapperInnerMaxiMoveProportionY: C,
      wrapperInnerMaxiMoveProportionX: y,
      scrollBarRef: c
    }), a.expose({
      setScrollTop: o,
      setScrollLeft: n,
      setScrollTo: w
    });
    const T = (r = B.VERTICAL) => {
      if (t.width === !1 || t.height === !1)
        return "";
      const h = e.wrapperInnerRealHeight, f = Number(t.height.replace("px", "")), q = e.wrapperInnerRealWidth;
      if (r == "vertical")
        return f < h ? b($("scroll-bar-thumb"), {
          ref: x,
          type: r,
          height: v.value,
          width: t.thumbWidth,
          ratioX: R.value,
          ratioY: M.value,
          class: I.value ? "show" : "hide"
        }, null) : "";
      if (r == "horizontal") {
        let _ = Number(i.value.replace("px", ""));
        if (i.value == "auto") {
          const E = () => {
            i.value = "auto", O(() => {
              var A;
              _ = Number((A = d.value) == null ? void 0 : A.clientWidth), i.value = _ + "px", H();
            });
          };
          E(), window.onresize = () => E();
        } else if (i.value)
          return _ < q ? b($("scroll-bar-thumb"), {
            ref: x,
            type: r,
            height: t.thumbWidth,
            width: g.value,
            ratioX: R.value,
            ratioY: M.value,
            class: I.value ? "show" : "hide"
          }, null) : "";
      }
    };
    return () => {
      var r, h;
      return te(b("div", {
        class: Y(),
        style: {
          width: i.value
        },
        onMouseenter: J,
        onMouseleave: K
      }, [b("div", {
        class: Y("_wrapper"),
        ref: c,
        style: {
          height: p.value,
          width: i.value
        },
        onScroll: F
      }, [b("div", {
        class: Y("_view"),
        ref: d
      }, [(h = (r = a.slots).default) == null ? void 0 : h.call(r)])]), b("div", {
        class: [Y("_bar"), "horizontal"]
      }, [T(B.HORIZONTAL)]), b("div", {
        class: [Y("_bar"), "vertical"]
      }, [T(B.VERTICAL)])]), [[re("css"), P.value || {}]]);
    };
  }
}), ce = ae(se, "scroll-bar");
export {
  ce as ScrollBar,
  ce as default
};
