import { defineComponent as D, ref as S, onMounted as M, onUnmounted as _, createVNode as m, createTextVNode as P, getCurrentInstance as z, reactive as O, computed as T, watchEffect as U, nextTick as G, withDirectives as Q, resolveDirective as j } from "vue";
const J = (t, e) => (t.install = function(r) {
  if (t) {
    const o = t.name || t.__name;
    if (o || e) {
      const n = e ? `dw-${e}` : "dw-" + o.replace(/dw/gi, "").toLowerCase();
      r.component(n, t);
    } else
      console.error(t, e, !e);
  }
}, t), K = (t) => Array.isArray(t);
function H(t) {
  const e = `vi-${t}`;
  return {
    n: (n) => n ? n.startsWith("-") ? `${e}${n}` : `${e}_${n}` : e,
    classes: (...n) => n.map((c) => {
      if (K(c)) {
        const [i, u, g = null] = c;
        return i ? u : g;
      }
      return c;
    })
  };
}
const I = {
  header: {
    type: Array,
    default: []
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
    default: 1e3 * 300
  },
  scrollTransition: {
    type: Number,
    default: 1e3 * 2
  },
  tmp_scaleRule: {
    type: Array,
    default: [1.3, 0.8]
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
      "th-bg-color": "#0f2851",
      "th-fo-color": "#df9418",
      "th-fo-size": "16",
      "th-fo-weight": "900",
      "th-radius-lt": "2",
      "th-radius-rt": "2",
      "th-radius-lb": "2",
      "th-radius-rb": "2",
      "tr-attract-bg-color": "#184677",
      "tr-un-attract-bg-color": "#04172c",
      "td-pad-lr": "0",
      "td-pad-tb": "0"
    })
  }
}, V = function(t, e) {
  for (let [r, o] of Object.entries(e.value))
    t.style.setProperty("--" + r, o);
}, X = {
  mounted(t, e) {
    V(t, e);
  },
  updated(t, e) {
    V(t, e);
  },
  install(t) {
    t.directive("Css", this);
  }
}, { n: Y } = H(""), Z = (t = Y()) => t + "xxxxxxxx".replace(/[xy]/g, function(e) {
  var r = 0 | 16 * Math.random(), o = e == "x" ? r : 8 | 3 & r;
  return o.toString(16);
});
class tt {
  constructor(e = [], r = 7) {
    this.list = e, this.severalGroups = r, this.windowSliding = new Array(this.severalGroups).fill(0).map((o, n) => n);
  }
  take(e) {
    return this.Sliding(e), this.show();
  }
  show() {
    return this.windowSliding.map((e) => this.list[e]);
  }
  Sliding(e) {
    this.windowSliding = this.windowSliding.map((r) => {
      const o = this.list.length, n = r + e;
      return n <= o - 1 ? n : n - o;
    });
  }
}
const N = function(t) {
  const e = t instanceof Array ? [] : {};
  for (let r in t)
    e[r] = typeof t[r] == "object" ? N(t[r]) : t[r];
  return e;
};
function et(t, e, r, o) {
  const n = t.scrollTop, c = e - n, i = performance.now();
  function u() {
    const w = performance.now() - i, v = g(
      w,
      n,
      c,
      r
    );
    t.scrollTop = v, w < r ? requestAnimationFrame(u) : o && o();
  }
  function g(f, w, v, A) {
    return f /= A / 2, f < 1 ? v / 2 * f * f + w : (f--, -v / 2 * (f * (f - 2) - 1) + w);
  }
  requestAnimationFrame(u);
}
const nt = /* @__PURE__ */ D({
  name: "ScrollText",
  props: {
    text: {
      type: String,
      required: !0
    },
    speed: {
      type: Number,
      default: 50
    }
  },
  setup(t) {
    const e = S(null), r = S(null), o = S(null);
    let n = null, c = !1;
    const i = () => {
      const f = r.value.scrollLeft;
      c || f + e.value.clientWidth >= r.value.scrollWidth || (r.value.scrollLeft += 1, n = requestAnimationFrame(i));
    }, u = () => {
      r.value.scrollWidth <= e.value.clientWidth || (n = requestAnimationFrame(i));
    }, g = () => {
      c = !0, n !== null && (cancelAnimationFrame(n), n = null);
    };
    return M(() => {
      u(), e.value.addEventListener("mouseenter", g), e.value.addEventListener("mouseleave", u);
    }), _(() => {
      g(), e.value.removeEventListener("mouseenter", g), e.value.removeEventListener("mouseleave", u);
    }), {
      container: e,
      content: r,
      text: o
    };
  },
  render() {
    return m("div", {
      class: "scroll-text-container",
      ref: "container"
    }, [m("div", {
      class: "scroll-text-content",
      ref: "content"
    }, [m("div", {
      class: "scroll-text",
      ref: "text",
      style: {
        whiteSpace: "nowrap"
      }
    }, [P("464654")])])]);
  }
}), {
  n: x
} = H("roll-list"), rt = /* @__PURE__ */ D({
  name: "RollList",
  emits: ["update:modelValue"],
  directives: {
    css: X
  },
  props: I,
  components: {
    scrollText: nt
  },
  setup(t, e) {
    var k;
    const o = "onUpdate:modelValue" in (((k = z()) == null ? void 0 : k.vnode.props) || {}), n = O({
      uuid: Z(x("-")),
      takeFlag: !1,
      rotationTimer: null,
      getInventedListDataBridgeInit: !1
    }), c = S(null), i = S();
    let u = 0, g = null;
    const f = {
      longText: "longText"
    }, w = (l) => {
      l.preventDefault();
    }, v = T(() => Object.assign(I.dynamicCss.default(), t.dynamicCss)), A = T(() => t.header), L = T({
      get() {
        return g = new tt(N(t.modelValue), t.showCount * 2), t.modelValue;
      },
      set(l) {
        o && e.emit("update:modelValue", l);
      }
    }), W = T(() => {
      if (n.takeFlag = !n.takeFlag, t.modelValue.length > t.showCount) {
        const l = n.getInventedListDataBridgeInit ? t.rollCount : (n.getInventedListDataBridgeInit = !0) && 0;
        return g.take(l);
      } else
        return new Array(t.modelValue.length).fill(0).map((l, a) => L.value[a]);
    });
    U(() => {
      n.rotationTimer && (clearInterval(n.rotationTimer), n.rotationTimer = null), n.rotationTimer = L.value.length > t.showCount && setInterval(() => {
        q();
      }, t.loopTime);
    });
    const R = T(() => {
      let l = L.value.length;
      const a = Number(t.itemHeight.replace("px", "")), y = l <= t.showCount ? l : t.showCount;
      return a * y + "px";
    }), $ = () => {
      var l;
      for (let a = 0; a < ((l = i.value) == null ? void 0 : l.children.length); a++) {
        const y = i.value.children[a], {
          attractShowCount: C,
          header: d,
          tmp_scaleRule: s
        } = t;
        C.includes(a) ? (y.style.background = v.value["tr-attract-bg-color"], Array.from(y.children).forEach((h, b) => {
          h.style.transform = `scale(${s[0]})`, h.style.flexBasis = d[b].basis + "%";
        })) : (y.style.background = v.value["tr-un-attract-bg-color"], Array.from(y.children).forEach((h, b) => {
          h.style.transform = `scale(${s[1]})`, h.style.flexBasis = d[b].basis + "%";
        }));
      }
    }, q = () => {
      var C;
      const l = c == null ? void 0 : c.value, a = t.rollCount <= t.showCount ? t.rollCount : t.showCount, y = l.scrollHeight - l.clientHeight;
      u = u + y / t.showCount * a;
      for (let d = 0; d < ((C = i.value) == null ? void 0 : C.children.length); d++) {
        const s = i.value.children[d], {
          rollCount: h,
          attractShowCount: b,
          scrollTransition: B,
          header: F
        } = t;
        s.style.transition = `${B / 1e3}s`, b.map((p) => p + h).includes(d) ? (s.style.background = v.value["tr-attract-bg-color"], Array.from(s.children).forEach((p, E) => {
          p.style.transition = `${B / 1e3}s`, p.style.flexBasis = F[E].basis + "%", p.style.transform = `scale(${t.tmp_scaleRule[0]})`;
        })) : (s.style.background = v.value["tr-un-attract-bg-color"], Array.from(s.children).forEach((p, E) => {
          p.style.transition = `${B / 1e3}s`, p.style.flexBasis = F[E].basis + "%", p.style.transform = `scale(${t.tmp_scaleRule[1]})`;
        }));
      }
      et(l, u, t.scrollTransition, () => {
        var d;
        for (let s = 0; s < ((d = i.value) == null ? void 0 : d.children.length); s++) {
          const h = i.value.children[s];
          h.style.transition = "0s", Array.from(h.children).forEach((b) => {
            b.style.transition = "0s";
          });
        }
        n.takeFlag = !n.takeFlag, l.scrollTop = 0, u = 0, $();
      });
    };
    return G(() => {
      $();
    }), () => Q(m("div", {
      class: x()
    }, [m("div", {
      class: x("_th")
    }, [A.value.map((l) => m("div", {
      class: x("_td"),
      style: {
        flexBasis: l.basis + "%"
      }
    }, [l.label]))]), m("div", {
      ref: c,
      onWheel: w,
      class: x("_scroll"),
      style: {
        height: R.value
      }
    }, [m("ul", {
      ref: i,
      class: x("_wrapper")
    }, [W.value.map((l) => m("li", {
      style: {
        height: t.itemHeight
      }
    }, [t.header.map((a, y) => {
      var C, d, s, h;
      return m("div", {
        class: [x("_td")]
      }, [m("div", {
        class: [f[(C = A.value[y]) == null ? void 0 : C.type]],
        style: {
          color: l[a.prop] ? (d = a.fo) == null ? void 0 : d.color : "none",
          fontSize: l[a.prop] ? ((s = a.fo) == null ? void 0 : s.size) + "px" : "auto",
          fontWeight: l[a.prop] ? (h = a.fo) == null ? void 0 : h.weight : "0"
        }
      }, [l[a.prop] || "undefined"])]);
    })]))])])]), [[j("css"), v.value || {}]]);
  }
}), ot = J(rt, "roll-list");
export {
  ot as RollList,
  ot as default
};
