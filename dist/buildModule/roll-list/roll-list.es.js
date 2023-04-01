import { defineComponent as Z, getCurrentInstance as D, ref as L, reactive as ee, computed as C, onMounted as te, watchEffect as pe, nextTick as M, withDirectives as ne, createVNode as a, resolveDirective as oe, watch as G, onUnmounted as j } from "vue";
const ve = (e, o) => (e.install = function(s) {
  if (e) {
    const i = e.name || e.__name;
    if (i || o) {
      const l = o ? `dw-${o}` : "dw-" + i.replace(/dw/gi, "").toLowerCase();
      s.component(l, e);
    } else
      console.error(e, o, !o);
  }
}, e), ye = (e) => Array.isArray(e);
function U(e) {
  const o = `vi-${e}`;
  return {
    n: (l) => l ? l.startsWith("-") ? `${o}${l}` : `${o}_${l}` : o,
    classes: (...l) => l.map((u) => {
      if (ye(u)) {
        const [d, p, g = null] = u;
        return d ? p : g;
      }
      return u;
    })
  };
}
var W = /* @__PURE__ */ ((e) => (e.AUTHROLL = "autoRoll", e.HANDMOVE = "handRoll", e))(W || {});
const J = {
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
      return Object.values(W).includes(e);
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
}, K = function(e, o) {
  for (let [s, i] of Object.entries(o.value))
    e.style.setProperty("--" + s, i);
}, le = {
  mounted(e, o) {
    K(e, o);
  },
  updated(e, o) {
    K(e, o);
  },
  install(e) {
    e.directive("Css", this);
  }
}, { n: xe } = U(""), he = (e = xe()) => e + "xxxxxxxx".replace(/[xy]/g, function(o) {
  var s = 0 | 16 * Math.random(), i = o == "x" ? s : 8 | 3 & s;
  return i.toString(16);
});
class be {
  constructor(o = [], s = 7) {
    this.list = o, this.severalGroups = s, this.windowSliding = new Array(this.severalGroups).fill(0).map((i, l) => l);
  }
  take(o) {
    return this.Sliding(o), this.show();
  }
  show() {
    return this.windowSliding.map((o) => this.list[o]);
  }
  Sliding(o) {
    this.windowSliding = this.windowSliding.map((s) => {
      const i = this.list.length, l = s + o;
      return l <= i - 1 ? l : l - i;
    });
  }
}
const V = function(e) {
  const o = e instanceof Array ? [] : {};
  for (let s in e)
    o[s] = typeof e[s] == "object" ? V(e[s]) : e[s];
  return o;
};
function Te(e, o = "top", s, i, l) {
  const u = o == "top" ? e.scrollTop : o == "left" ? e.scrollLeft : 0, d = s - u, p = performance.now();
  function g() {
    const x = performance.now() - p, r = _(
      x,
      u,
      d,
      i
    );
    o == "top" ? e.scrollTop = r : o == "left" && (e.scrollLeft = r), x < i ? requestAnimationFrame(g) : l && l();
  }
  function _(f, x, r, I) {
    return f /= I / 2, f < 1 ? r / 2 * f * f + x : (f--, -r / 2 * (f * (f - 2) - 1) + x);
  }
  requestAnimationFrame(g);
}
function O() {
  let e = new Date().getTime();
  return typeof performance < "u" && typeof performance.now == "function" && (e += performance.now()), "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    (s) => {
      const i = (e + Math.random() * 16) % 16 | 0;
      return e = Math.floor(e / 16), (s === "x" ? i : i & 3 | 8).toString(16);
    }
  );
}
function we(e) {
  const o = {};
  return e.map((s) => {
    const { __id: i, ...l } = s, u = JSON.stringify(l);
    if (!o[u])
      return o[u] = !0, s;
    const d = O();
    return { ...s, __id: d };
  });
}
const {
  n: Q
} = U("long-text"), X = {
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
}, Y = /* @__PURE__ */ Z({
  name: "LongText",
  emits: ["update:text"],
  props: X,
  directives: {
    css: le
  },
  setup(e, o) {
    var x;
    const i = "onUpdate:modelValue" in (((x = D()) == null ? void 0 : x.vnode.props) || {}), l = L(null), u = L(null), d = L(null), p = L(null), g = ee({
      isScroll: !0,
      toolTip_x: 0,
      toolTip_y: 0,
      toolTip_content: "盎司附近拉萨解放了卡JFK垃圾地方"
    }), _ = C(() => Object.assign(X.dynamicCss.default(), e.dynamicCss)), f = C({
      get() {
        return g.isScroll = !0, e.text;
      },
      set(r) {
        i && o.emit("update:text", r);
      }
    });
    return te(() => {
      pe(() => {
        M(() => {
          const r = l.value.clientWidth, A = d.value.offsetWidth;
          r >= A && (g.isScroll = !1);
        });
      });
    }), () => ne(a("div", {
      class: [Q(""), "tooltip"],
      "data-tooltip": "这是一个 tooltip",
      ref: l
    }, [a("div", {
      class: Q("_scroll"),
      ref: u
    }, [a("span", {
      ref: d,
      class: g.isScroll ? "startAnimation" : ""
    }, [f.value]), g.isScroll ? a("span", null, [a("span", {
      class: "seizeASeat"
    }, null), a("span", {
      ref: p,
      class: "startAnimation"
    }, [f.value]), a("span", {
      class: "seizeASeat"
    }, null)]) : ""])]), [[oe("css"), _.value || {}]]);
  }
}), {
  n: w
} = U("roll-list"), Ce = /* @__PURE__ */ Z({
  name: "RollList",
  emits: ["update:modelValue", "rowClick"],
  directives: {
    css: le
  },
  props: J,
  components: {
    LongText: Y
  },
  setup(e, o) {
    var E;
    const i = "onUpdate:modelValue" in (((E = D()) == null ? void 0 : E.vnode.props) || {}), l = ee({
      uuid: he(w("-")),
      takeFlag: !1,
      rotationTimer: null,
      getInventedListDataBridgeInit: !1
    }), u = L(null), d = L();
    let p = 0, g = !1, _ = null;
    const f = {
      longText: "longText"
    }, x = (n) => {
      n.preventDefault();
    }, r = C(() => Object.assign(J.dynamicCss.default(), e.dynamicCss)), I = C(() => {
      let n = {};
      for (let t in r.value)
        t.includes("longText") && (n[t.replace("longText-", "")] = r.value[t]);
      return n;
    }), A = C(() => e.header), N = () => {
      var n;
      for (let t = 0; t < ((n = d.value) == null ? void 0 : n.children.length); t++) {
        const c = d.value.children[t], {
          attractShowCount: m,
          header: v,
          tmp_scaleRule: h
        } = e;
        if (m.includes(t))
          if (r.value["tr-focus-bg-color-style"] == "double") {
            const T = r.value["tr-focus-bg-color-angle"], S = r.value["tr-focus-bg-color-from"], y = r.value["tr-focus-bg-color-to"];
            c.style.background = `linear-gradient(${T}deg,${S},${y})`;
          } else
            c.style.background = r.value["tr-focus-bg-color-value"];
        else
          c.style.background = r.value["tr-un-focus-bg-color"];
        Array.from(c.children).forEach((b, T) => {
          b.style.flexBasis = v[T].basis + "%", m.includes(t) ? b.style.transform = `scale(${h[0]})` : b.style.transform = `scale(${h[1]})`;
        });
      }
    }, k = () => {
      if (l.rotationTimer && (clearInterval(l.rotationTimer), l.rotationTimer = null), e.rollType == W.AUTHROLL) {
        if (g)
          return;
        l.rotationTimer = B.value.length > e.showCount && setInterval(() => {
          M(() => {
            ie();
          });
        }, e.loopTime);
      }
    }, B = C({
      get() {
        const n = e.modelValue.map((t, c) => (t.__id = O(), t.__uniqueness = O(), t));
        return _ = new be(V(n), e.showCount * 2), M(() => {
          N();
        }), n;
      },
      set(n) {
        i && o.emit("update:modelValue", n);
      }
    }), re = C(() => {
      if (l.takeFlag = !l.takeFlag, e.modelValue.length > e.showCount) {
        const n = l.getInventedListDataBridgeInit ? e.rollCount : (l.getInventedListDataBridgeInit = !0) && 0;
        return we(_.take(n));
      } else
        return new Array(e.modelValue.length).fill(0).map((n, t) => B.value[t]);
    }), se = C(() => {
      let n = B.value.length;
      const t = Number(e.itemHeight.replace("px", "")), c = n <= e.showCount ? n : e.showCount;
      return t * c + "px";
    });
    te(() => {
      k(), G(() => e.rollType, () => k()), G(() => e.loopTime, () => k()), G(() => B.value, () => {
        k();
      });
    }), j(() => {
    });
    const ie = () => {
      var m;
      const n = u == null ? void 0 : u.value, t = e.rollCount <= e.showCount ? e.rollCount : e.showCount, c = n.scrollHeight - n.clientHeight;
      p = p + c / e.showCount * t;
      for (let v = 0; v < ((m = d.value) == null ? void 0 : m.children.length); v++) {
        const h = d.value.children[v], {
          attractShowCount: $,
          header: b,
          tmp_scaleRule: T
        } = e, S = $.map((y) => y + t).includes(v);
        if (S)
          if (r.value["tr-focus-bg-color-style"] == "double") {
            const F = r.value["tr-focus-bg-color-angle"], R = r.value["tr-focus-bg-color-from"], H = r.value["tr-focus-bg-color-to"];
            h.style.background = `linear-gradient(${F}deg,${R},${H})`;
          } else
            h.style.background = r.value["tr-focus-bg-color-value"];
        else
          h.style.background = r.value["tr-un-focus-bg-color"];
        Array.from(h.children).forEach((y, F) => {
          y.style.flexBasis = b[F].basis + "%", S ? y.style.transform = `scale(${T[0]})` : y.style.transform = `scale(${T[1]})`;
        });
      }
      Te(n, "top", p, e.scrollTransition, () => {
        l.takeFlag = !l.takeFlag, n.scrollTop = 0, p = 0, M(() => {
          N();
        });
      });
    }, q = () => {
      g = !0, l.rotationTimer && (clearInterval(l.rotationTimer), l.rotationTimer = null);
    }, ce = () => {
      g = !1, k();
    }, ae = function(n) {
      o.emit && o.emit("rowClick", n);
    };
    j(() => {
      q(), l.rotationTimer = null;
    });
    const ue = () => {
      if (!r.value["pin-bg-color-style"])
        return "";
      let n = "none";
      if (r.value["pin-bg-color-style"] == "double") {
        const c = r.value["pin-bg-color-angle"], m = r.value["pin-bg-color-from"], v = r.value["pin-bg-color-to"];
        n = `linear-gradient(${c}deg,${m},${v})`;
      } else
        n = r.value["pin-bg-color-value"];
      return a("div", {
        class: w("_pinSth"),
        style: {
          background: n
        }
      }, null);
    }, de = () => e.showHeader ? a("div", {
      class: w("_th")
    }, [A.value.map((n) => a("div", {
      class: w("_td"),
      style: {
        flexBasis: n.basis + "%"
      }
    }, [n.label]))]) : "", ge = () => a("div", {
      ref: u,
      onWheel: x,
      class: w("_scroll"),
      style: {
        height: se.value
      }
    }, [a("ul", {
      ref: d,
      class: w("_wrapper")
    }, [re.value.map((n) => fe(n))])]), fe = (n) => a("li", {
      key: n.__id,
      style: {
        height: e.itemHeight
      },
      onClick: ae.bind(this, n)
    }, [e.header.map((t, c) => me(n, t, c))]), me = (n, t, c) => {
      var v, h, $, b, T, S, y, F, R, H, P, z;
      let m = {};
      return t.longText && ((v = t == null ? void 0 : t.longText) != null && v.speed && (m["sco-ani-dura"] = t.longText.speed), (h = t.longText) != null && h.GPUSpee && (m["sco-ani-name"] = (($ = t == null ? void 0 : t.longText) == null ? void 0 : $.GPUSpee) == !0 ? "longTextScrollxAnimation3d" : "longTextScrollxAnimation"), ((b = t.longText) != null && b.txtGap || Number(t.longText.txtGap) == 0) && (m["txt-gap"] = t.longText.txtGap)), a("div", {
        class: [w("_td")]
      }, [a("div", {
        class: [f[(T = A.value[c]) == null ? void 0 : T.type]],
        style: {
          color: n[t.prop] ? (S = t.fo) == null ? void 0 : S.color : "none",
          fontSize: n[t.prop] ? ((y = t.fo) == null ? void 0 : y.size) + "px" : "auto",
          fontWeight: n[t.prop] ? (F = t.fo) == null ? void 0 : F.weight : "0",
          fontFamily: n[t.prop] ? (R = t.fo) == null ? void 0 : R.style : "none"
        }
      }, [(H = A.value[c]) != null && H.type && ((P = A.value[c]) == null ? void 0 : P.type) == "longText" ? a(Y, {
        style: {
          padding: "0 1px"
        },
        text: n[t.prop] || "undefined",
        speed: n[t.prop] ? (z = t.longText) == null ? void 0 : z.speed : !1,
        dynamicCss: Object.assign(V(I.value), m)
      }, null) : n[t.prop] || "undefined"])]);
    };
    return () => ne(a("div", {
      class: w(),
      onMouseenter: q,
      onMouseleave: ce
    }, [ue(), de(), ge()]), [[oe("css"), r.value || {}]]);
  }
}), _e = ve(Ce, "roll-list");
export {
  _e as RollList,
  _e as default
};
