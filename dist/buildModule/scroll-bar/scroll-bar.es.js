import { defineComponent as V, inject as q, ref as X, reactive as j, computed as u, createVNode as g, watch as G, nextTick as A, onMounted as Q, provide as U, withDirectives as ee, resolveDirective as te, resolveComponent as O } from "vue";
const re = (t, a) => (t.install = function(s) {
  if (t) {
    const m = t.name || t.__name;
    if (m || a) {
      const o = a ? `dw-${a}` : "dw-" + m.replace(/dw/gi, "").toLowerCase();
      s.component(o, t);
    } else
      console.error(t, a, !a);
  }
}, t), ae = (t) => Array.isArray(t);
function D(t) {
  const a = `vi-${t}`;
  return {
    n: (o) => o ? o.startsWith("-") ? `${a}${o}` : `${a}_${o}` : a,
    classes: (...o) => o.map((h) => {
      if (ae(h)) {
        const [f, e, p = null] = h;
        return f ? e : p;
      }
      return h;
    })
  };
}
const $ = {
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
var B = /* @__PURE__ */ ((t) => (t.HORIZONTAL = "horizontal", t.VERTICAL = "vertical", t))(B || {});
const oe = {
  // 横向还是竖向
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
}, z = function(t, a) {
  for (let [s, m] of Object.entries(a.value))
    t.style.setProperty("--" + s, m);
}, ne = {
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
  n: ie
} = D("scroll-bar__thumb"), le = /* @__PURE__ */ V({
  name: "ScrollBar",
  emits: ["update:height", "update:width"],
  props: oe,
  setup(t, a) {
    const {
      thumbRatioY: s,
      thumbRatioX: m,
      thumbRatioYMaxRange: o,
      thumbRatioXMaxRange: h,
      wrapperInnerMaxiMoveProportionY: f,
      wrapperInnerMaxiMoveProportionX: e,
      scrollBarRef: p
    } = q(k), N = X(), d = j({
      mouseMoving: !1
    });
    let i = 0, x = 0, R = 0, b = 0, M = 0, I = 0;
    const S = u({
      get() {
        return t.height;
      },
      set(n) {
        a.emit && a.emit("update:height", n);
      }
    }), C = u({
      get() {
        return t.width;
      },
      set(n) {
        a.emit && a.emit("update:width", n);
      }
    }), L = function(n) {
      if (n == "vertical") {
        let l = 0;
        const v = M;
        l = R < 0 ? v + Math.abs(R) : v - Math.abs(R), l < 0 && (l = 0), l > o.value && (l = o.value), p.value.scrollTop = Math.abs(f.value * l);
      } else if (n == "horizontal") {
        let l = 0;
        const v = I;
        l = b < 0 ? v + Math.abs(b) : v - Math.abs(b), l < 0 && (l = 0), l > h.value && (l = h.value), p.value.scrollLeft = Math.abs(e.value * l);
      }
    }, P = function(n) {
      d.mouseMoving = !0, M = Number(s.value.slice(11, -3)), I = Number(m.value.slice(11, -3)), i = Number(n.clientY), x = Number(n.clientX);
    }, y = function(n) {
      R = i - n.clientY, b = x - n.clientX, L(t.type);
    };
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", y), document.removeEventListener("mousedown", P), i = 0, x = 0, R = 0, b = 0, M = 0, I = 0, d.mouseMoving = !1;
    });
    const W = (n) => {
      document.addEventListener("mousedown", P), document.addEventListener("mousemove", y);
    };
    return () => g("div", {
      class: ie(),
      ref: N,
      style: {
        height: S.value,
        width: C.value,
        transform: t.type == "vertical" ? t.ratioY : t.ratioX
      },
      onMousedown: W
    }, null);
  }
}), {
  n: Y
} = D("scroll-bar"), ue = /* @__PURE__ */ V({
  name: "ScrollBar",
  emits: ["update:width", "scroll"],
  directives: {
    css: ne
  },
  props: $,
  // expose:['setScrollTop','setScrollLeft','setScrollTop'],
  components: {
    "scroll-bar-thumb": le
  },
  setup(t, a) {
    let s = null;
    const m = (r) => {
      v();
    }, o = X(), h = X(), f = X(), e = j({
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
    let p = X(!1);
    G(() => t.noResize, (r) => {
      r ? s == null || s.disconnect() : (s = new MutationObserver(m), A(() => {
        s.observe(h.value, {
          attributes: !0,
          childList: !0,
          subtree: !0
        });
      }));
    }, {
      immediate: !0
    });
    const N = u(() => Object.assign($.dynamicCss.default(), t.dynamicCss)), d = u(() => t.height), i = u({
      get() {
        return e.cacheContainerWidth;
      },
      set(r) {
        e.cacheContainerWidth = r;
      }
    }), x = u({
      get() {
        return e.thumbHeight;
      },
      set(r) {
        e.thumbHeight = r;
      }
    }), R = u({
      get() {
        return e.thumbWidth;
      },
      set(r) {
        e.thumbWidth = r;
      }
    }), b = u({
      get() {
        return e.thumbRatioX;
      },
      set(r) {
        e.thumbRatioX = r;
      }
    }), M = u({
      get() {
        return e.thumbRatioY;
      },
      set(r) {
        e.thumbRatioY = r;
      }
    }), I = u(() => e.thumbRatioYMaxRange), S = u(() => e.thumbRatioXMaxRange), C = u(() => e.wrapperInnerMaxiMoveProportionY), L = u(() => e.wrapperInnerMaxiMoveProportionX), P = (r) => {
      e.thumbRatioY = `translateY(${String(e.thumbRatioYProportion * r) + "px"})`;
    }, y = (r) => {
      e.thumbRatioX = `translateX(${String(e.thumbRatioXProportion * r) + "px"})`;
    }, W = (r) => {
      o.value.scrollTop = r;
    }, n = (r) => {
      o.value.scrollLeft = r;
    }, l = (r, c) => {
      W(r), n(c);
    }, v = (r) => {
      var c, w;
      e.wrapperInnerRealHeight = Number((c = h.value) == null ? void 0 : c.scrollHeight), e.wrapperInnerRealWidth = Number((w = h.value) == null ? void 0 : w.scrollWidth), e.wrapperInnerMaxiMoveRangeY = e.wrapperInnerRealHeight - Number(d.value.replace("px", "")), e.wrapperInnerMaxiMoveRangeX = e.wrapperInnerRealWidth - Number(i.value.replace("px", "")), e.thumbHeightProportion = Number(d.value.replace("px", "")) / e.wrapperInnerRealHeight, e.thumbWidthProportion = Number(i.value.replace("px", "")) / e.wrapperInnerRealWidth, e.thumbHeight = String(e.thumbHeightProportion * Number(d.value.replace("px", ""))) + "px", e.thumbWidth = String(e.thumbWidthProportion * Number(i.value.replace("px", ""))) + "px", e.thumbRatioYMaxRange = Number(d.value.replace("px", "")) - Number(e.thumbHeight.replace("px", "")), e.thumbRatioXMaxRange = Number(i.value.replace("px", "")) - Number(e.thumbWidth.replace("px", "")), e.thumbRatioYProportion = e.thumbRatioYMaxRange / e.wrapperInnerMaxiMoveRangeY, e.thumbRatioXProportion = e.thumbRatioXMaxRange / e.wrapperInnerMaxiMoveRangeX, e.wrapperInnerMaxiMoveProportionY = e.wrapperInnerMaxiMoveRangeY / e.thumbRatioYMaxRange, e.wrapperInnerMaxiMoveProportionX = e.wrapperInnerMaxiMoveRangeX / e.thumbRatioXMaxRange;
    };
    Q(() => {
      e.cacheContainerWidth = t.width, v();
    });
    const Z = (r) => {
      const c = r.target.scrollTop, w = r.target.scrollLeft;
      P(c), y(w), a.emit && a.emit("scroll", w, c);
    }, F = () => {
      p.value = !0;
    }, J = () => {
      p.value = !1;
    };
    U(k, {
      height: d,
      thumbRatioY: M,
      thumbRatioX: b,
      thumbRatioYMaxRange: I,
      thumbRatioXMaxRange: S,
      wrapperInnerMaxiMoveProportionY: C,
      wrapperInnerMaxiMoveProportionX: L,
      scrollBarRef: o
    }), a.expose({
      setScrollTop: W,
      setScrollLeft: n,
      setScrollTo: l
    });
    const _ = (r = B.VERTICAL) => {
      if (t.width === !1 || t.height === !1)
        return "";
      const c = e.wrapperInnerRealHeight, w = Number(t.height.replace("px", "")), K = e.wrapperInnerRealWidth;
      if (r == "vertical")
        return w < c ? g(O("scroll-bar-thumb"), {
          ref: f,
          type: r,
          height: x.value,
          width: t.thumbWidth,
          ratioX: b.value,
          ratioY: M.value,
          class: p.value ? "show" : "hide"
        }, null) : "";
      if (r == "horizontal") {
        let H = Number(i.value.replace("px", ""));
        if (i.value == "auto") {
          const T = () => {
            i.value = "auto", A(() => {
              var E;
              H = Number((E = h.value) == null ? void 0 : E.clientWidth), i.value = H + "px", v();
            });
          };
          T(), window.onresize = () => T();
        } else if (i.value)
          return H < K ? g(O("scroll-bar-thumb"), {
            ref: f,
            type: r,
            height: t.thumbWidth,
            width: R.value,
            ratioX: b.value,
            ratioY: M.value,
            class: p.value ? "show" : "hide"
          }, null) : "";
      }
    };
    return () => {
      var r, c;
      return ee(g("div", {
        class: Y(),
        style: {
          width: i.value
        },
        onMouseenter: F,
        onMouseleave: J
      }, [g("div", {
        class: Y("_wrapper"),
        ref: o,
        style: {
          height: d.value,
          width: i.value
        },
        onScroll: Z
      }, [g("div", {
        class: Y("_view"),
        ref: h
      }, [(c = (r = a.slots).default) == null ? void 0 : c.call(r)])]), g("div", {
        class: [Y("_bar"), "horizontal"]
      }, [_(B.HORIZONTAL)]), g("div", {
        class: [Y("_bar"), "vertical"]
      }, [_(B.VERTICAL)])]), [[te("css"), N.value || {}]]);
    };
  }
}), he = re(ue, "scroll-bar");
export {
  he as ScrollBar,
  he as default
};
