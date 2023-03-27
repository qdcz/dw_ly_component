import { defineComponent as Y, getCurrentInstance as Z, ref as k, reactive as D, computed as w, onMounted as tt, watchEffect as ft, nextTick as M, withDirectives as et, createVNode as c, resolveDirective as nt, watch as V, onUnmounted as z } from "vue";
const mt = (t, e) => (t.install = function(r) {
  if (t) {
    const i = t.name || t.__name;
    if (i || e) {
      const l = e ? `dw-${e}` : "dw-" + i.replace(/dw/gi, "").toLowerCase();
      r.component(l, t);
    } else
      console.error(t, e, !e);
  }
}, t), pt = (t) => Array.isArray(t);
function U(t) {
  const e = `vi-${t}`;
  return {
    n: (l) => l ? l.startsWith("-") ? `${e}${l}` : `${e}_${l}` : e,
    classes: (...l) => l.map((a) => {
      if (pt(a)) {
        const [u, m, g = null] = a;
        return u ? m : g;
      }
      return a;
    })
  };
}
var W = /* @__PURE__ */ ((t) => (t.AUTHROLL = "autoRoll", t.HANDMOVE = "handRoll", t))(W || {});
const j = {
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
    validator: function(t) {
      return Object.values(W).includes(t);
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
}, J = function(t, e) {
  for (let [r, i] of Object.entries(e.value))
    t.style.setProperty("--" + r, i);
}, ot = {
  mounted(t, e) {
    J(t, e);
  },
  updated(t, e) {
    J(t, e);
  },
  install(t) {
    t.directive("Css", this);
  }
}, { n: xt } = U(""), vt = (t = xt()) => t + "xxxxxxxx".replace(/[xy]/g, function(e) {
  var r = 0 | 16 * Math.random(), i = e == "x" ? r : 8 | 3 & r;
  return i.toString(16);
});
class yt {
  constructor(e = [], r = 7) {
    this.list = e, this.severalGroups = r, this.windowSliding = new Array(this.severalGroups).fill(0).map((i, l) => l);
  }
  take(e) {
    return this.Sliding(e), this.show();
  }
  show() {
    return this.windowSliding.map((e) => this.list[e]);
  }
  Sliding(e) {
    this.windowSliding = this.windowSliding.map((r) => {
      const i = this.list.length, l = r + e;
      return l <= i - 1 ? l : l - i;
    });
  }
}
const O = function(t) {
  const e = t instanceof Array ? [] : {};
  for (let r in t)
    e[r] = typeof t[r] == "object" ? O(t[r]) : t[r];
  return e;
};
function ht(t, e = "top", r, i, l) {
  const a = e == "top" ? t.scrollTop : e == "left" ? t.scrollLeft : 0, u = r - a, m = performance.now();
  function g() {
    const x = performance.now() - m, s = A(
      x,
      a,
      u,
      i
    );
    e == "top" ? t.scrollTop = s : e == "left" && (t.scrollLeft = s), x < i ? requestAnimationFrame(g) : l && l();
  }
  function A(f, x, s, $) {
    return f /= $ / 2, f < 1 ? s / 2 * f * f + x : (f--, -s / 2 * (f * (f - 2) - 1) + x);
  }
  requestAnimationFrame(g);
}
function Tt() {
  let t = new Date().getTime();
  return typeof performance < "u" && typeof performance.now == "function" && (t += performance.now()), "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    (r) => {
      const i = (t + Math.random() * 16) % 16 | 0;
      return t = Math.floor(t / 16), (r === "x" ? i : i & 3 | 8).toString(16);
    }
  );
}
function bt(t) {
  const e = {};
  return t.map((r) => {
    const { __id: i, ...l } = r, a = JSON.stringify(l);
    if (!e[a])
      return e[a] = !0, r;
    const u = Tt();
    return { ...r, __id: u };
  });
}
const {
  n: K
} = U("long-text"), Q = {
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
}, X = /* @__PURE__ */ Y({
  name: "LongText",
  emits: ["update:text"],
  props: Q,
  directives: {
    css: ot
  },
  setup(t, e) {
    var x;
    const i = "onUpdate:modelValue" in (((x = Z()) == null ? void 0 : x.vnode.props) || {}), l = k(null), a = k(null), u = k(null), m = k(null), g = D({
      isScroll: !0,
      toolTip_x: 0,
      toolTip_y: 0,
      toolTip_content: "盎司附近拉萨解放了卡JFK垃圾地方"
    }), A = w(() => Object.assign(Q.dynamicCss.default(), t.dynamicCss)), f = w({
      get() {
        return g.isScroll = !0, t.text;
      },
      set(s) {
        i && e.emit("update:text", s);
      }
    });
    return tt(() => {
      ft(() => {
        M(() => {
          const s = l.value.clientWidth, _ = u.value.offsetWidth;
          s >= _ && (g.isScroll = !1);
        });
      });
    }), () => et(c("div", {
      class: [K(""), "tooltip"],
      "data-tooltip": "这是一个 tooltip",
      ref: l
    }, [c("div", {
      class: K("_scroll"),
      ref: a
    }, [c("span", {
      ref: u,
      class: g.isScroll ? "startAnimation" : ""
    }, [f.value]), g.isScroll ? c("span", null, [c("span", {
      class: "seizeASeat"
    }, null), c("span", {
      ref: m,
      class: "startAnimation"
    }, [f.value]), c("span", {
      class: "seizeASeat"
    }, null)]) : ""])]), [[nt("css"), A.value || {}]]);
  }
}), {
  n: S
} = U("roll-list"), wt = /* @__PURE__ */ Y({
  name: "RollList",
  emits: ["update:modelValue", "rowClick"],
  directives: {
    css: ot
  },
  props: j,
  components: {
    LongText: X
  },
  setup(t, e) {
    var P;
    const i = "onUpdate:modelValue" in (((P = Z()) == null ? void 0 : P.vnode.props) || {}), l = D({
      uuid: vt(S("-")),
      takeFlag: !1,
      rotationTimer: null,
      getInventedListDataBridgeInit: !1
    }), a = k(null), u = k();
    let m = 0, g = !1, A = null;
    const f = {
      longText: "longText"
    }, x = (o) => {
      o.preventDefault();
    }, s = w(() => Object.assign(j.dynamicCss.default(), t.dynamicCss)), $ = w(() => {
      let o = {};
      for (let n in s.value)
        n.includes("longText") && (o[n.replace("longText-", "")] = s.value[n]);
      return o;
    }), _ = w(() => t.header), G = () => {
      var o;
      for (let n = 0; n < ((o = u.value) == null ? void 0 : o.children.length); n++) {
        const d = u.value.children[n], {
          attractShowCount: v,
          header: h,
          tmp_scaleRule: y
        } = t;
        if (v.includes(n))
          if (s.value["tr-attract-bg-color-style"] == "double") {
            const b = s.value["tr-attract-bg-color-angle"], C = s.value["tr-attract-bg-color-from"], p = s.value["tr-attract-bg-color-to"];
            d.style.background = `linear-gradient(${b}deg,${C},${p})`;
          } else
            d.style.background = s.value["tr-attract-bg-color-value"];
        else
          d.style.background = s.value["tr-un-attract-bg-color"];
        Array.from(d.children).forEach((T, b) => {
          T.style.flexBasis = h[b].basis + "%", v.includes(n) ? T.style.transform = `scale(${y[0]})` : T.style.transform = `scale(${y[1]})`;
        });
      }
    }, I = () => {
      if (l.rotationTimer && (clearInterval(l.rotationTimer), l.rotationTimer = null), t.rollType == W.AUTHROLL) {
        if (g)
          return;
        l.rotationTimer = B.value.length > t.showCount && setInterval(() => {
          M(() => {
            st();
          });
        }, t.loopTime);
      }
    }, B = w({
      get() {
        return A = new yt(O(t.modelValue), t.showCount * 2), M(() => {
          G();
        }), t.modelValue;
      },
      set(o) {
        i && e.emit("update:modelValue", o);
      }
    }), lt = w(() => {
      if (l.takeFlag = !l.takeFlag, t.modelValue.length > t.showCount) {
        const o = l.getInventedListDataBridgeInit ? t.rollCount : (l.getInventedListDataBridgeInit = !0) && 0;
        return bt(A.take(o));
      } else
        return new Array(t.modelValue.length).fill(0).map((o, n) => B.value[n]);
    }), rt = w(() => {
      let o = B.value.length;
      const n = Number(t.itemHeight.replace("px", "")), d = o <= t.showCount ? o : t.showCount;
      return n * d + "px";
    });
    tt(() => {
      I(), V(() => t.rollType, () => I()), V(() => t.loopTime, () => I()), V(() => B.value, () => {
        I();
      });
    }), z(() => {
    });
    const st = () => {
      var v;
      const o = a == null ? void 0 : a.value, n = t.rollCount <= t.showCount ? t.rollCount : t.showCount, d = o.scrollHeight - o.clientHeight;
      m = m + d / t.showCount * n;
      for (let h = 0; h < ((v = u.value) == null ? void 0 : v.children.length); h++) {
        const y = u.value.children[h], {
          attractShowCount: F,
          header: T,
          tmp_scaleRule: b
        } = t, C = F.map((p) => p + n).includes(h);
        if (C)
          if (s.value["tr-attract-bg-color-style"] == "double") {
            const L = s.value["tr-attract-bg-color-angle"], R = s.value["tr-attract-bg-color-from"], H = s.value["tr-attract-bg-color-to"];
            y.style.background = `linear-gradient(${L}deg,${R},${H})`;
          } else
            y.style.background = s.value["tr-attract-bg-color-value"];
        else
          y.style.background = s.value["tr-un-attract-bg-color"];
        Array.from(y.children).forEach((p, L) => {
          p.style.flexBasis = T[L].basis + "%", C ? p.style.transform = `scale(${b[0]})` : p.style.transform = `scale(${b[1]})`;
        });
      }
      ht(o, "top", m, t.scrollTransition, () => {
        l.takeFlag = !l.takeFlag, o.scrollTop = 0, m = 0, M(() => {
          G();
        });
      });
    }, N = () => {
      g = !0, l.rotationTimer && (clearInterval(l.rotationTimer), l.rotationTimer = null);
    }, it = () => {
      g = !1, I();
    }, at = function(o) {
      e.emit && e.emit("rowClick", o);
    };
    z(() => {
      N(), l.rotationTimer = null;
    });
    const ct = () => t.showHeader ? c("div", {
      class: S("_th")
    }, [_.value.map((o) => c("div", {
      class: S("_td"),
      style: {
        flexBasis: o.basis + "%"
      }
    }, [o.label]))]) : "", ut = () => c("div", {
      ref: a,
      onWheel: x,
      class: S("_scroll"),
      style: {
        height: rt.value
      }
    }, [c("ul", {
      ref: u,
      class: S("_wrapper")
    }, [lt.value.map((o) => dt(o))])]), dt = (o) => c("li", {
      key: o.__id,
      style: {
        height: t.itemHeight
      },
      onClick: at.bind(this, o)
    }, [t.header.map((n, d) => gt(o, n, d))]), gt = (o, n, d) => {
      var h, y, F, T, b, C, p, L, R, H, q, E;
      let v = {};
      return n.longText && ((h = n == null ? void 0 : n.longText) != null && h.speed && (v["sco-ani-dura"] = n.longText.speed), (y = n.longText) != null && y.GPUSpee && (v["sco-ani-name"] = ((F = n == null ? void 0 : n.longText) == null ? void 0 : F.GPUSpee) == !0 ? "longTextScrollxAnimation3d" : "longTextScrollxAnimation"), ((T = n.longText) != null && T.txtGap || Number(n.longText.txtGap) == 0) && (v["txt-gap"] = n.longText.txtGap)), c("div", {
        class: [S("_td")]
      }, [c("div", {
        class: [f[(b = _.value[d]) == null ? void 0 : b.type]],
        style: {
          color: o[n.prop] ? (C = n.fo) == null ? void 0 : C.color : "none",
          fontSize: o[n.prop] ? ((p = n.fo) == null ? void 0 : p.size) + "px" : "auto",
          fontWeight: o[n.prop] ? (L = n.fo) == null ? void 0 : L.weight : "0",
          fontFamily: o[n.prop] ? (R = n.fo) == null ? void 0 : R.style : "none"
        }
      }, [(H = _.value[d]) != null && H.type && ((q = _.value[d]) == null ? void 0 : q.type) == "longText" ? c(X, {
        style: {
          padding: "0 1px"
        },
        text: o[n.prop] || "undefined",
        speed: o[n.prop] ? (E = n.longText) == null ? void 0 : E.speed : !1,
        dynamicCss: Object.assign(O($.value), v)
      }, null) : o[n.prop] || "undefined"])]);
    };
    return () => et(c("div", {
      class: S(),
      onMouseenter: N,
      onMouseleave: it
    }, [ct(), ut()]), [[nt("css"), s.value || {}]]);
  }
}), St = mt(wt, "roll-list");
export {
  St as RollList,
  St as default
};
