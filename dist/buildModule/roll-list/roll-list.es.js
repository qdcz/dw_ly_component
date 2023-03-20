import { defineComponent as Q, getCurrentInstance as X, ref as L, reactive as Y, computed as w, onMounted as Z, watchEffect as D, withDirectives as tt, createVNode as c, resolveDirective as et, nextTick as gt, onUnmounted as q } from "vue";
const ft = (t, e) => (t.install = function(r) {
  if (t) {
    const i = t.name || t.__name;
    if (i || e) {
      const n = e ? `dw-${e}` : "dw-" + i.replace(/dw/gi, "").toLowerCase();
      r.component(n, t);
    } else
      console.error(t, e, !e);
  }
}, t), mt = (t) => Array.isArray(t);
function $(t) {
  const e = `vi-${t}`;
  return {
    n: (n) => n ? n.startsWith("-") ? `${e}${n}` : `${e}_${n}` : e,
    classes: (...n) => n.map((a) => {
      if (mt(a)) {
        const [u, m, f = null] = a;
        return u ? m : f;
      }
      return a;
    })
  };
}
var R = /* @__PURE__ */ ((t) => (t.AUTHROLL = "autoRoll", t.HANDMOVE = "handRoll", t))(R || {});
const G = {
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
      return Object.values(R).includes(t);
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
}, z = function(t, e) {
  for (let [r, i] of Object.entries(e.value))
    t.style.setProperty("--" + r, i);
}, nt = {
  mounted(t, e) {
    z(t, e);
  },
  updated(t, e) {
    z(t, e);
  },
  install(t) {
    t.directive("Css", this);
  }
}, { n: vt } = $(""), pt = (t = vt()) => t + "xxxxxxxx".replace(/[xy]/g, function(e) {
  var r = 0 | 16 * Math.random(), i = e == "x" ? r : 8 | 3 & r;
  return i.toString(16);
});
class xt {
  constructor(e = [], r = 7) {
    this.list = e, this.severalGroups = r, this.windowSliding = new Array(this.severalGroups).fill(0).map((i, n) => n);
  }
  take(e) {
    return this.Sliding(e), this.show();
  }
  show() {
    return this.windowSliding.map((e) => this.list[e]);
  }
  Sliding(e) {
    this.windowSliding = this.windowSliding.map((r) => {
      const i = this.list.length, n = r + e;
      return n <= i - 1 ? n : n - i;
    });
  }
}
const F = function(t) {
  const e = t instanceof Array ? [] : {};
  for (let r in t)
    e[r] = typeof t[r] == "object" ? F(t[r]) : t[r];
  return e;
};
function ht(t, e = "top", r, i, n) {
  const a = e == "top" ? t.scrollTop : e == "left" ? t.scrollLeft : 0, u = r - a, m = performance.now();
  function f() {
    const s = performance.now() - m, v = _(
      s,
      a,
      u,
      i
    );
    e == "top" ? t.scrollTop = v : e == "left" && (t.scrollLeft = v), s < i ? requestAnimationFrame(f) : n && n();
  }
  function _(g, s, v, C) {
    return g /= C / 2, g < 1 ? v / 2 * g * g + s : (g--, -v / 2 * (g * (g - 2) - 1) + s);
  }
  requestAnimationFrame(f);
}
function yt() {
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
    const { __id: i, ...n } = r, a = JSON.stringify(n);
    if (!e[a])
      return e[a] = !0, r;
    const u = yt();
    return { ...r, __id: u };
  });
}
const {
  n: j
} = $("long-text"), J = {
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
}, K = /* @__PURE__ */ Q({
  name: "LongText",
  emits: ["update:text"],
  props: J,
  directives: {
    css: nt
  },
  setup(t, e) {
    var s;
    const i = "onUpdate:modelValue" in (((s = X()) == null ? void 0 : s.vnode.props) || {}), n = L(null), a = L(null), u = L(null), m = L(null), f = Y({
      isScroll: !0,
      toolTip_x: 0,
      toolTip_y: 0,
      toolTip_content: "盎司附近拉萨解放了卡JFK垃圾地方"
    }), _ = w(() => Object.assign(J.dynamicCss.default(), t.dynamicCss)), g = w({
      get() {
        return f.isScroll = !0, t.text;
      },
      set(v) {
        i && e.emit("update:text", v);
      }
    });
    return Z(() => {
      D(() => {
        if (n.value && u.value) {
          const v = n.value.clientWidth, k = u.value.offsetWidth;
          v >= k && (f.isScroll = !1);
        }
      });
    }), () => tt(c("div", {
      class: [j(""), "tooltip"],
      "data-tooltip": "这是一个 tooltip",
      ref: n
    }, [c("div", {
      class: j("_scroll"),
      ref: a
    }, [c("span", {
      ref: u,
      class: f.isScroll ? "startAnimation" : ""
    }, [g.value]), f.isScroll ? c("span", null, [c("span", {
      class: "seizeASeat"
    }, null), c("span", {
      ref: m,
      class: "startAnimation"
    }, [g.value]), c("span", {
      class: "seizeASeat"
    }, null)]) : ""])]), [[et("css"), _.value || {}]]);
  }
}), {
  n: S
} = $("roll-list"), Tt = /* @__PURE__ */ Q({
  name: "RollList",
  emits: ["update:modelValue", "rowClick"],
  directives: {
    css: nt
  },
  props: G,
  components: {
    LongText: K
  },
  setup(t, e) {
    var V;
    const i = "onUpdate:modelValue" in (((V = X()) == null ? void 0 : V.vnode.props) || {}), n = Y({
      uuid: pt(S("-")),
      takeFlag: !1,
      rotationTimer: null,
      getInventedListDataBridgeInit: !1
    }), a = L(null), u = L();
    let m = 0, f = null;
    const _ = {
      longText: "longText"
    }, g = (l) => {
      l.preventDefault();
    }, s = w(() => Object.assign(G.dynamicCss.default(), t.dynamicCss)), v = w(() => {
      let l = {};
      for (let o in s.value)
        o.includes("longText") && (l[o.replace("longText-", "")] = s.value[o]);
      return l;
    }), C = w(() => t.header), k = () => {
      var l;
      for (let o = 0; o < ((l = u.value) == null ? void 0 : l.children.length); o++) {
        const d = u.value.children[o], {
          attractShowCount: b,
          header: x,
          tmp_scaleRule: p
        } = t;
        b.includes(o) ? (s.value["tr-attract-bg-color-style"] == "double" ? d.style.background = `linear-gradient(${s.value["tr-attract-bg-color-angle"]}deg,${s.value["tr-attract-bg-color-from"]},${s.value["tr-attract-bg-color-to"]})` : d.style.background = s.value["tr-attract-bg-color-value"], Array.from(d.children).forEach((h, T) => {
          h.style.transform = `scale(${p[0]})`, h.style.flexBasis = x[T].basis + "%";
        })) : (d.style.background = s.value["tr-un-attract-bg-color"], Array.from(d.children).forEach((h, T) => {
          h.style.transform = `scale(${p[1]})`, h.style.flexBasis = x[T].basis + "%";
        }));
      }
    }, B = w({
      get() {
        return f = new xt(F(t.modelValue), t.showCount * 2), gt(() => {
          k();
        }), t.modelValue;
      },
      set(l) {
        i && e.emit("update:modelValue", l);
      }
    }), ot = w(() => {
      if (n.takeFlag = !n.takeFlag, t.modelValue.length > t.showCount) {
        const l = n.getInventedListDataBridgeInit ? t.rollCount : (n.getInventedListDataBridgeInit = !0) && 0;
        return bt(f.take(l));
      } else
        return new Array(t.modelValue.length).fill(0).map((l, o) => B.value[o]);
    }), lt = w(() => {
      let l = B.value.length;
      const o = Number(t.itemHeight.replace("px", "")), d = l <= t.showCount ? l : t.showCount;
      return o * d + "px";
    }), E = function() {
      clearInterval(n.rotationTimer);
    }, H = function() {
      n.rotationTimer && (clearInterval(n.rotationTimer), n.rotationTimer = null);
    };
    window.addEventListener("blur", E), window.addEventListener("focus", H), Z(() => {
      D(() => {
        n.rotationTimer && (clearInterval(n.rotationTimer), n.rotationTimer = null), t.rollType == R.AUTHROLL && (n.rotationTimer = B.value.length > t.showCount && setInterval(() => {
          rt();
        }, t.loopTime));
      });
    }), q(() => {
      document.removeEventListener("blur", E), document.removeEventListener("focus", H);
    });
    const rt = () => {
      var b;
      const l = a == null ? void 0 : a.value, o = t.rollCount <= t.showCount ? t.rollCount : t.showCount, d = l.scrollHeight - l.clientHeight;
      m = m + d / t.showCount * o;
      for (let x = 0; x < ((b = u.value) == null ? void 0 : b.children.length); x++) {
        const p = u.value.children[x], {
          rollCount: h,
          attractShowCount: T,
          header: I
        } = t;
        T.map((y) => y + h).includes(x) ? (s.value["tr-attract-bg-color-style"] == "double" ? p.style.background = `linear-gradient(${s.value["tr-attract-bg-color-angle"]}deg,${s.value["tr-attract-bg-color-from"]},${s.value["tr-attract-bg-color-to"]})` : p.style.background = s.value["tr-attract-bg-color-value"], Array.from(p.children).forEach((y, A) => {
          y.style.flexBasis = I[A].basis + "%", y.style.transform = `scale(${t.tmp_scaleRule[0]})`;
        })) : (p.style.background = s.value["tr-un-attract-bg-color"], Array.from(p.children).forEach((y, A) => {
          y.style.flexBasis = I[A].basis + "%", y.style.transform = `scale(${t.tmp_scaleRule[1]})`;
        }));
      }
      ht(l, "top", m, t.scrollTransition, () => {
        n.takeFlag = !n.takeFlag, l.scrollTop = 0, m = 0;
      });
    }, M = () => {
      n.rotationTimer && clearInterval(n.rotationTimer);
    }, st = () => {
      n.rotationTimer = null;
    }, it = function(l) {
      e.emit && e.emit("rowClick", l);
    };
    q(() => {
      M(), n.rotationTimer = null;
    });
    const at = () => t.showHeader ? c("div", {
      class: S("_th")
    }, [C.value.map((l) => c("div", {
      class: S("_td"),
      style: {
        flexBasis: l.basis + "%"
      }
    }, [l.label]))]) : "", ct = () => c("div", {
      ref: a,
      onWheel: g,
      class: S("_scroll"),
      style: {
        height: lt.value
      }
    }, [c("ul", {
      ref: u,
      class: S("_wrapper")
    }, [ot.value.map((l) => ut(l))])]), ut = (l) => c("li", {
      key: l.__id,
      style: {
        height: t.itemHeight
      },
      onClick: it.bind(this, l)
    }, [t.header.map((o, d) => dt(l, o, d))]), dt = (l, o, d) => {
      var x, p, h, T, I, y, A, O, U, W, N, P;
      let b = {};
      return o.longText && ((x = o == null ? void 0 : o.longText) != null && x.speed && (b["sco-ani-dura"] = o.longText.speed), (p = o.longText) != null && p.GPUSpee && (b["sco-ani-name"] = ((h = o == null ? void 0 : o.longText) == null ? void 0 : h.GPUSpee) == !0 ? "longTextScrollxAnimation3d" : "longTextScrollxAnimation"), ((T = o.longText) != null && T.txtGap || Number(o.longText.txtGap) == 0) && (b["txt-gap"] = o.longText.txtGap)), c("div", {
        class: [S("_td")]
      }, [c("div", {
        class: [_[(I = C.value[d]) == null ? void 0 : I.type]],
        style: {
          color: l[o.prop] ? (y = o.fo) == null ? void 0 : y.color : "none",
          fontSize: l[o.prop] ? ((A = o.fo) == null ? void 0 : A.size) + "px" : "auto",
          fontWeight: l[o.prop] ? (O = o.fo) == null ? void 0 : O.weight : "0",
          fontFamily: l[o.prop] ? (U = o.fo) == null ? void 0 : U.style : "none"
        }
      }, [(W = C.value[d]) != null && W.type && ((N = C.value[d]) == null ? void 0 : N.type) == "longText" ? c(K, {
        text: l[o.prop] || "undefined",
        speed: l[o.prop] ? (P = o.longText) == null ? void 0 : P.speed : !1,
        dynamicCss: Object.assign(F(v.value), b)
      }, null) : l[o.prop] || "undefined"])]);
    };
    return () => tt(c("div", {
      class: S(),
      onMouseenter: M,
      onMouseleave: st
    }, [at(), ct()]), [[et("css"), s.value || {}]]);
  }
}), Ct = ft(Tt, "roll-list");
export {
  Ct as RollList,
  Ct as default
};
