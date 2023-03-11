import { defineComponent as I, getCurrentInstance as N, ref as B, reactive as _, computed as A, nextTick as V, createVNode as d, watchEffect as U, withDirectives as G, resolveComponent as Q, resolveDirective as j } from "vue";
const J = (t, e) => (t.install = function(n) {
  if (t) {
    const s = t.name || t.__name;
    if (s || e) {
      const l = e ? `dw-${e}` : "dw-" + s.replace(/dw/gi, "").toLowerCase();
      n.component(l, t);
    } else
      console.error(t, e, !e);
  }
}, t), K = (t) => Array.isArray(t);
function D(t) {
  const e = `vi-${t}`;
  return {
    n: (l) => l ? l.startsWith("-") ? `${e}${l}` : `${e}_${l}` : e,
    classes: (...l) => l.map((c) => {
      if (K(c)) {
        const [i, b, y = null] = c;
        return i ? b : y;
      }
      return c;
    })
  };
}
const H = {
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
    default: 6
  },
  rollCount: {
    type: [Number],
    default: 1
  },
  attractShowCount: {
    type: Array,
    default: [1, 3, 4]
  },
  loopTime: {
    type: Number,
    default: 1e3 * 5e3
  },
  scrollTransition: {
    type: Number,
    default: 1e3 * 2
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
  longTextSpeed: {
    type: Number,
    default: 1e3 / 60
  },
  dynamicCss: {
    type: Object,
    default: () => ({
      "box-width": "800",
      "th-pad-tb": "10",
      "th-bg-color": "#0f2851",
      "th-fo-color": "#df9418",
      "th-fo-size": "16",
      "th-fo-weight": "900",
      "th-radius-lt": "8",
      "th-radius-rt": "8",
      "th-radius-lb": "0",
      "th-radius-rb": "0",
      "tr-attract-bg-color-style": "single",
      "tr-attract-bg-color-to": "#00DEFF",
      "tr-attract-bg-color-from": "#FFFFFF",
      "tr-attract-bg-color-angle": "135",
      "tr-attract-bg-color-value": "#184677",
      "tr-attract-bg-color": "#184677",
      "tr-un-attract-bg-color": "#04172c",
      "td-pad-lr": "20",
      "td-pad-tb": "0"
    })
  }
}, R = function(t, e) {
  for (let [n, s] of Object.entries(e.value))
    t.style.setProperty("--" + n, s);
}, X = {
  mounted(t, e) {
    R(t, e);
  },
  updated(t, e) {
    R(t, e);
  },
  install(t) {
    t.directive("Css", this);
  }
}, { n: Y } = D(""), Z = (t = Y()) => t + "xxxxxxxx".replace(/[xy]/g, function(e) {
  var n = 0 | 16 * Math.random(), s = e == "x" ? n : 8 | 3 & n;
  return s.toString(16);
});
class tt {
  constructor(e = [], n = 7) {
    this.list = e, this.severalGroups = n, this.windowSliding = new Array(this.severalGroups).fill(0).map((s, l) => l);
  }
  take(e) {
    return this.Sliding(e), this.show();
  }
  show() {
    return this.windowSliding.map((e) => this.list[e]);
  }
  Sliding(e) {
    this.windowSliding = this.windowSliding.map((n) => {
      const s = this.list.length, l = n + e;
      return l <= s - 1 ? l : l - s;
    });
  }
}
const P = function(t) {
  const e = t instanceof Array ? [] : {};
  for (let n in t)
    e[n] = typeof t[n] == "object" ? P(t[n]) : t[n];
  return e;
};
function et(t, e = "top", n, s, l) {
  const c = e == "top" ? t.scrollTop : e == "left" ? t.scrollLeft : 0, i = n - c, b = performance.now();
  function y() {
    const a = performance.now() - b, h = C(
      a,
      c,
      i,
      s
    );
    e == "top" ? t.scrollTop = h : e == "left" && (t.scrollLeft = h), a < s ? requestAnimationFrame(y) : l && l();
  }
  function C(f, a, h, x) {
    return f /= x / 2, f < 1 ? h / 2 * f * f + a : (f--, -h / 2 * (f * (f - 2) - 1) + a);
  }
  requestAnimationFrame(y);
}
const {
  n: W
} = D("scroll-text"), lt = /* @__PURE__ */ I({
  name: "ScrollText",
  emits: ["update:text"],
  props: {
    text: {
      type: String,
      default: "这是一个默认文本"
    },
    speed: {
      type: Number,
      default: 1e3 / 60
    }
  },
  setup(t, e) {
    var h;
    const s = "onUpdate:modelValue" in (((h = N()) == null ? void 0 : h.vnode.props) || {}), l = B(null), c = B(null), i = B(null), b = B(null);
    let y = null;
    const C = _({
      isScroll: !0
    }), f = A({
      get() {
        return C.isScroll = !0, V(() => {
          if (l.value && i.value) {
            const x = l.value.clientWidth, F = i.value.offsetWidth - 20;
            x < F ? (y && (clearInterval(y), y = null), y = setInterval(a, t.speed)) : C.isScroll = !1;
          }
        }), t.text + "";
      },
      set(x) {
        s && e.emit("update:text", x);
      }
    }), a = () => {
      b.value.offsetWidth - c.value.scrollLeft <= 0 ? c.value.scrollLeft -= i.value.offsetWidth : c.value.scrollLeft++;
    };
    return () => d("div", {
      class: W(""),
      ref: l
    }, [d("div", {
      class: W("_scroll"),
      ref: c
    }, [d("span", {
      ref: i
    }, [f.value, C.isScroll ? d("span", {
      class: "seizeASeat"
    }, null) : ""]), d("span", {
      ref: b
    }, [C.isScroll ? f.value : "", C.isScroll ? d("span", {
      class: "seizeASeat"
    }, null) : ""])])]);
  }
}), {
  n: T
} = D("roll-list"), rt = /* @__PURE__ */ I({
  name: "RollList",
  emits: ["update:modelValue"],
  directives: {
    css: X
  },
  props: H,
  components: {
    scrollText: lt
  },
  setup(t, e) {
    var E;
    const s = "onUpdate:modelValue" in (((E = N()) == null ? void 0 : E.vnode.props) || {}), l = _({
      uuid: Z(T("-")),
      takeFlag: !1,
      rotationTimer: null,
      getInventedListDataBridgeInit: !1
    }), c = B(null), i = B();
    let b = 0, y = null;
    const C = {
      longText: "longText"
    }, f = (r) => {
      r.preventDefault();
    }, a = A(() => Object.assign(H.dynamicCss.default(), t.dynamicCss)), h = A(() => t.header), x = () => {
      var r;
      for (let o = 0; o < ((r = i.value) == null ? void 0 : r.children.length); o++) {
        const g = i.value.children[o], {
          attractShowCount: S,
          header: m,
          tmp_scaleRule: u
        } = t;
        S.includes(o) ? (a.value["tr-attract-bg-color-style"] == "double" ? g.style.background = `linear-gradient(${a.value["tr-attract-bg-color-angle"]}deg,${a.value["tr-attract-bg-color-from"]},${a.value["tr-attract-bg-color-to"]})` : g.style.background = a.value["tr-attract-bg-color-value"], Array.from(g.children).forEach((v, w) => {
          v.style.transform = `scale(${u[0]})`, v.style.flexBasis = m[w].basis + "%";
        })) : (g.style.background = a.value["tr-un-attract-bg-color"], Array.from(g.children).forEach((v, w) => {
          v.style.transform = `scale(${u[1]})`, v.style.flexBasis = m[w].basis + "%";
        }));
      }
    }, F = A({
      get() {
        return y = new tt(P(t.modelValue), t.showCount * 2), V(() => {
          x();
        }), t.modelValue;
      },
      set(r) {
        s && e.emit("update:modelValue", r);
      }
    }), z = A(() => {
      if (l.takeFlag = !l.takeFlag, t.modelValue.length > t.showCount) {
        const r = l.getInventedListDataBridgeInit ? t.rollCount : (l.getInventedListDataBridgeInit = !0) && 0;
        return y.take(r);
      } else
        return new Array(t.modelValue.length).fill(0).map((r, o) => F.value[o]);
    }), M = A(() => {
      let r = F.value.length;
      const o = Number(t.itemHeight.replace("px", "")), g = r <= t.showCount ? r : t.showCount;
      return o * g + "px";
    });
    U(() => {
      l.rotationTimer && (clearInterval(l.rotationTimer), l.rotationTimer = null), l.rotationTimer = F.value.length > t.showCount && setInterval(() => {
        q();
      }, t.loopTime);
    });
    const q = () => {
      var S;
      const r = c == null ? void 0 : c.value, o = t.rollCount <= t.showCount ? t.rollCount : t.showCount, g = r.scrollHeight - r.clientHeight;
      b = b + g / t.showCount * o;
      for (let m = 0; m < ((S = i.value) == null ? void 0 : S.children.length); m++) {
        const u = i.value.children[m], {
          rollCount: v,
          attractShowCount: w,
          scrollTransition: $,
          header: L
        } = t;
        u.style.transition = `${$ / 1e3}s`, w.map((p) => p + v).includes(m) ? (a.value["tr-attract-bg-color-style"] == "double" ? u.style.background = `linear-gradient(${a.value["tr-attract-bg-color-angle"]}deg,${a.value["tr-attract-bg-color-from"]},${a.value["tr-attract-bg-color-to"]})` : u.style.background = a.value["tr-attract-bg-color-value"], Array.from(u.children).forEach((p, k) => {
          p.style.transition = `${$ / 1e3}s`, p.style.flexBasis = L[k].basis + "%", p.style.transform = `scale(${t.tmp_scaleRule[0]})`;
        })) : (u.style.background = a.value["tr-un-attract-bg-color"], Array.from(u.children).forEach((p, k) => {
          p.style.transition = `${$ / 1e3}s`, p.style.flexBasis = L[k].basis + "%", p.style.transform = `scale(${t.tmp_scaleRule[1]})`;
        }));
      }
      et(r, "top", b, t.scrollTransition, () => {
        var m;
        for (let u = 0; u < ((m = i.value) == null ? void 0 : m.children.length); u++) {
          const v = i.value.children[u];
          v.style.transition = "0s", Array.from(v.children).forEach((w) => {
            w.style.transition = "0s";
          });
        }
        l.takeFlag = !l.takeFlag, r.scrollTop = 0, b = 0, x();
      });
    };
    V(() => {
    });
    const O = () => t.showHeader ? d("div", {
      class: T("_th")
    }, [h.value.map((r) => d("div", {
      class: T("_td"),
      style: {
        flexBasis: r.basis + "%"
      }
    }, [r.label]))]) : "";
    return () => G(d("div", {
      class: T()
    }, [O(), d("div", {
      ref: c,
      onWheel: f,
      class: T("_scroll"),
      style: {
        height: M.value
      }
    }, [d("ul", {
      ref: i,
      class: T("_wrapper")
    }, [z.value.map((r) => d("li", {
      style: {
        height: t.itemHeight
      }
    }, [t.header.map((o, g) => {
      var S, m, u, v, w, $, L, p;
      return d("div", {
        class: [T("_td")]
      }, [d("div", {
        class: [C[(S = h.value[g]) == null ? void 0 : S.type]],
        style: {
          color: r[o.prop] ? (m = o.fo) == null ? void 0 : m.color : "none",
          fontSize: r[o.prop] ? ((u = o.fo) == null ? void 0 : u.size) + "px" : "auto",
          fontWeight: r[o.prop] ? (v = o.fo) == null ? void 0 : v.weight : "0",
          fontFamily: r[o.prop] ? (w = o.fo) == null ? void 0 : w.style : "none"
        }
      }, [($ = h.value[g]) != null && $.type && ((L = h.value[g]) == null ? void 0 : L.type) == "longText" ? d(Q("scrollText"), {
        text: r[o.prop] || "undefined",
        speed: r[o.prop] ? (p = o.longText) == null ? void 0 : p.speed : !1
      }, null) : r[o.prop] || "undefined"])]);
    })]))])])]), [[j("css"), a.value || {}]]);
  }
}), at = J(rt, "roll-list");
export {
  at as RollList,
  at as default
};
