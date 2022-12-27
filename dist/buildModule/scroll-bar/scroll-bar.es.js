import { defineComponent as V, inject as J, ref as X, reactive as j, computed as s, createVNode as b, watch as K, nextTick as T, onMounted as q, provide as G, withDirectives as Q, resolveDirective as U, resolveComponent as O } from "vue";
const ee = (t, a) => (t.install = function(h) {
  if (t) {
    const u = t.name || t.__name;
    if (u || a) {
      const l = a ? `dw-${a}` : "dw-" + u.replace(/dw/gi, "").toLowerCase();
      h.component(l, t);
    } else
      console.error(t, a, !a);
  }
}, t), te = (t) => Array.isArray(t);
function D(t) {
  const a = `vi-${t}`;
  return {
    n: (l) => l ? l.startsWith("-") ? `${a}${l}` : `${a}_${l}` : a,
    classes: (...l) => l.map((m) => {
      if (te(m)) {
        const [p, f, e = null] = m;
        return p ? f : e;
      }
      return m;
    })
  };
}
const $ = {
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
const re = {
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
}, z = function(t, a) {
  for (let [h, u] of Object.entries(a.value))
    t.style.setProperty("--" + h, u);
}, ae = {
  mounted(t, a) {
    z(t, a);
  },
  updated(t, a) {
    z(t, a);
  },
  install(t) {
    t.directive("Css", this);
  }
}, k = Symbol("scroll-bar"), {
  n: oe
} = D("scroll-bar__thumb"), ne = /* @__PURE__ */ V({
  name: "ScrollBar",
  emits: ["update:height", "update:width"],
  props: re,
  setup(t, a) {
    const {
      thumbRatioY: h,
      thumbRatioX: u,
      thumbRatioYMaxRange: l,
      thumbRatioXMaxRange: m,
      wrapperInnerMaxiMoveProportionY: p,
      wrapperInnerMaxiMoveProportionX: f,
      scrollBarRef: e
    } = J(k), x = X(), P = j({
      mouseMoving: !1
    });
    let c = 0, n = 0, v = 0, g = 0, R = 0, M = 0;
    const N = s({
      get() {
        return t.height;
      },
      set(o) {
        a.emit && a.emit("update:height", o);
      }
    }), C = s({
      get() {
        return t.width;
      },
      set(o) {
        a.emit && a.emit("update:width", o);
      }
    }), H = function(o) {
      if (o == "vertical") {
        let i = 0;
        const w = R;
        i = v < 0 ? w + Math.abs(v) : w - Math.abs(v), i < 0 && (i = 0), i > l.value && (i = l.value), e.value.scrollTop = Math.abs(p.value * i);
      } else if (o == "horizontal") {
        let i = 0;
        const w = M;
        i = g < 0 ? w + Math.abs(g) : w - Math.abs(g), i < 0 && (i = 0), i > m.value && (i = m.value), e.value.scrollLeft = Math.abs(f.value * i);
      }
    }, y = function(o) {
      P.mouseMoving = !0, R = Number(h.value.slice(11, -3)), M = Number(u.value.slice(11, -3)), c = Number(o.clientY), n = Number(o.clientX);
    }, W = function(o) {
      v = c - o.clientY, g = n - o.clientX, H(t.type);
    };
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", W), document.removeEventListener("mousedown", y), c = 0, n = 0, v = 0, g = 0, R = 0, M = 0, P.mouseMoving = !1;
    });
    const S = (o) => {
      document.addEventListener("mousedown", y), document.addEventListener("mousemove", W);
    };
    return () => b("div", {
      class: oe(),
      ref: x,
      style: {
        height: N.value,
        width: C.value,
        transform: t.type == "vertical" ? t.ratioY : t.ratioX
      },
      onMousedown: S
    }, null);
  }
}), {
  n: Y
} = D("scroll-bar"), ie = /* @__PURE__ */ V({
  name: "ScrollBar",
  emits: ["update:width"],
  directives: {
    css: ae
  },
  props: $,
  components: {
    "scroll-bar-thumb": ne
  },
  setup(t, a) {
    let h, u = null;
    const l = (r) => {
      o();
    }, m = X(), p = X(), f = X(), e = j({
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
    let x = X(!1);
    K(() => t.noResize, (r) => {
      r ? (h == null || h(), u == null || u.disconnect()) : (u = new MutationObserver(l), T(() => {
        u.observe(p.value, {
          attributes: !0,
          childList: !0,
          subtree: !0
        });
      }));
    }, {
      immediate: !0
    });
    const P = s(() => Object.assign($.dynamicCss.default(), t.dynamicCss)), c = s(() => t.height), n = s({
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
    }), N = s(() => e.thumbRatioYMaxRange), C = s(() => e.thumbRatioXMaxRange), H = s(() => e.wrapperInnerMaxiMoveProportionY), y = s(() => e.wrapperInnerMaxiMoveProportionX), W = (r) => {
      e.thumbRatioY = `translateY(${String(e.thumbRatioYProportion * r) + "px"})`;
    }, S = (r) => {
      e.thumbRatioX = `translateX(${String(e.thumbRatioXProportion * r) + "px"})`;
    }, o = (r) => {
      var d, I;
      e.wrapperInnerRealHeight = Number((d = p.value) == null ? void 0 : d.scrollHeight), e.wrapperInnerRealWidth = Number((I = p.value) == null ? void 0 : I.scrollWidth), e.wrapperInnerMaxiMoveRangeY = e.wrapperInnerRealHeight - Number(c.value.replace("px", "")), e.wrapperInnerMaxiMoveRangeX = e.wrapperInnerRealWidth - Number(n.value.replace("px", "")), e.thumbHeightProportion = Number(c.value.replace("px", "")) / e.wrapperInnerRealHeight, e.thumbWidthProportion = Number(n.value.replace("px", "")) / e.wrapperInnerRealWidth, e.thumbHeight = String(e.thumbHeightProportion * Number(c.value.replace("px", ""))) + "px", e.thumbWidth = String(e.thumbWidthProportion * Number(n.value.replace("px", ""))) + "px", e.thumbRatioYMaxRange = Number(c.value.replace("px", "")) - Number(e.thumbHeight.replace("px", "")), e.thumbRatioXMaxRange = Number(n.value.replace("px", "")) - Number(e.thumbWidth.replace("px", "")), e.thumbRatioYProportion = e.thumbRatioYMaxRange / e.wrapperInnerMaxiMoveRangeY, e.thumbRatioXProportion = e.thumbRatioXMaxRange / e.wrapperInnerMaxiMoveRangeX, e.wrapperInnerMaxiMoveProportionY = e.wrapperInnerMaxiMoveRangeY / e.thumbRatioYMaxRange, e.wrapperInnerMaxiMoveProportionX = e.wrapperInnerMaxiMoveRangeX / e.thumbRatioXMaxRange;
    };
    q(() => {
      e.cacheContainerWidth = t.width, o();
    });
    const i = (r) => {
      const d = r.target.scrollTop, I = r.target.scrollLeft;
      W(d), S(I);
    }, w = (r) => {
      x.value = !0;
    }, Z = (r) => {
      x.value = !1;
    };
    G(k, {
      height: c,
      thumbRatioY: M,
      thumbRatioX: R,
      thumbRatioYMaxRange: N,
      thumbRatioXMaxRange: C,
      wrapperInnerMaxiMoveProportionY: H,
      wrapperInnerMaxiMoveProportionX: y,
      scrollBarRef: m
    });
    const _ = (r = B.VERTICAL) => {
      if (t.width === !1 || t.height === !1)
        return "";
      const d = e.wrapperInnerRealHeight, I = Number(t.height.replace("px", "")), F = e.wrapperInnerRealWidth;
      if (r == "vertical")
        return I < d ? b(O("scroll-bar-thumb"), {
          ref: f,
          type: r,
          height: v.value,
          width: t.thumbWidth,
          ratioX: R.value,
          ratioY: M.value,
          class: x.value ? "show" : "hide"
        }, null) : "";
      if (r == "horizontal") {
        let L = Number(n.value.replace("px", ""));
        if (n.value == "auto") {
          const E = () => {
            n.value = "auto", T(() => {
              var A;
              L = Number((A = p.value) == null ? void 0 : A.clientWidth), n.value = L + "px", o();
            });
          };
          E(), window.onresize = () => E();
        } else if (n.value)
          return L < F ? b(O("scroll-bar-thumb"), {
            ref: f,
            type: r,
            height: t.thumbWidth,
            width: g.value,
            ratioX: R.value,
            ratioY: M.value,
            class: x.value ? "show" : "hide"
          }, null) : "";
      }
    };
    return () => {
      var r, d;
      return Q(b("div", {
        class: Y(),
        style: {
          width: n.value
        },
        onMouseenter: w,
        onMouseleave: Z
      }, [b("div", {
        class: Y("_wrapper"),
        ref: m,
        style: {
          height: c.value,
          width: n.value
        },
        onScroll: i
      }, [b("div", {
        class: Y("_view"),
        ref: p
      }, [(d = (r = a.slots).default) == null ? void 0 : d.call(r)])]), b("div", {
        class: [Y("_bar"), "horizontal"]
      }, [_(B.HORIZONTAL)]), b("div", {
        class: [Y("_bar"), "vertical"]
      }, [_(B.VERTICAL)])]), [[U("css"), P.value || {}]]);
    };
  }
}), le = ee(ie, "scroll-bar");
export {
  le as ScrollBar,
  le as default
};
