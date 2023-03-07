import { defineComponent as D, ref as S, onMounted as M, onUnmounted as P, createVNode as m, createTextVNode as z, getCurrentInstance as O, reactive as U, computed as T, watchEffect as _, nextTick as G, withDirectives as Q, resolveDirective as j } from "vue";
const J = (e, t) => (e.install = function(l) {
  if (e) {
    const o = e.name || e.__name;
    if (o || t) {
      const n = t ? `dw-${t}` : "dw-" + o.replace(/dw/gi, "").toLowerCase();
      l.component(n, e);
    } else
      console.error(e, t, !t);
  }
}, e), K = (e) => Array.isArray(e);
function H(e) {
  const t = `vi-${e}`;
  return {
    n: (n) => n ? n.startsWith("-") ? `${t}${n}` : `${t}_${n}` : t,
    classes: (...n) => n.map((u) => {
      if (K(u)) {
        const [c, d, g = null] = u;
        return c ? d : g;
      }
      return u;
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
      "box-pad-lr": "10",
      "th-pad-tb": "10",
      "th-bg-color": "#0f2851",
      "th-fo-color": "#df9418",
      "th-fo-size": "16",
      "th-fo-weight": "900",
      "tr-attract-bg-color": "#184677",
      "tr-un-attract-bg-color": "#04172c",
      "td-pad-lr": "0",
      "td-pad-tb": "0"
    })
  }
}, V = function(e, t) {
  for (let [l, o] of Object.entries(t.value))
    e.style.setProperty("--" + l, o);
}, X = {
  mounted(e, t) {
    V(e, t);
  },
  updated(e, t) {
    V(e, t);
  },
  install(e) {
    e.directive("Css", this);
  }
}, { n: Y } = H(""), Z = (e = Y()) => e + "xxxxxxxx".replace(/[xy]/g, function(t) {
  var l = 0 | 16 * Math.random(), o = t == "x" ? l : 8 | 3 & l;
  return o.toString(16);
});
class ee {
  constructor(t = [], l = 7) {
    this.list = t, this.severalGroups = l, this.windowSliding = new Array(this.severalGroups).fill(0).map((o, n) => n);
  }
  take(t) {
    return this.Sliding(t), this.show();
  }
  show() {
    return this.windowSliding.map((t) => this.list[t]);
  }
  Sliding(t) {
    this.windowSliding = this.windowSliding.map((l) => {
      const o = this.list.length, n = l + t;
      return n <= o - 1 ? n : n - o;
    });
  }
}
const N = function(e) {
  const t = e instanceof Array ? [] : {};
  for (let l in e)
    t[l] = typeof e[l] == "object" ? N(e[l]) : e[l];
  return t;
};
function te(e, t, l, o) {
  const n = e.scrollTop, u = t - n, c = performance.now();
  function d() {
    const w = performance.now() - c, v = g(
      w,
      n,
      u,
      l
    );
    e.scrollTop = v, w < l ? requestAnimationFrame(d) : o && o();
  }
  function g(f, w, v, A) {
    return f /= A / 2, f < 1 ? v / 2 * f * f + w : (f--, -v / 2 * (f * (f - 2) - 1) + w);
  }
  requestAnimationFrame(d);
}
const ne = /* @__PURE__ */ D({
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
  setup(e) {
    const t = S(null), l = S(null), o = S(null);
    let n = null, u = !1;
    const c = () => {
      const f = l.value.scrollLeft;
      u || f + t.value.clientWidth >= l.value.scrollWidth || (l.value.scrollLeft += 1, n = requestAnimationFrame(c));
    }, d = () => {
      l.value.scrollWidth <= t.value.clientWidth || (n = requestAnimationFrame(c));
    }, g = () => {
      u = !0, n !== null && (cancelAnimationFrame(n), n = null);
    };
    return M(() => {
      d(), t.value.addEventListener("mouseenter", g), t.value.addEventListener("mouseleave", d);
    }), P(() => {
      g(), t.value.removeEventListener("mouseenter", g), t.value.removeEventListener("mouseleave", d);
    }), {
      container: t,
      content: l,
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
    }, [z("464654")])])]);
  }
}), {
  n: b
} = H("roll-list"), le = /* @__PURE__ */ D({
  name: "RollList",
  emits: ["update:modelValue"],
  directives: {
    css: X
  },
  props: I,
  components: {
    scrollText: ne
  },
  setup(e, t) {
    var k;
    const o = "onUpdate:modelValue" in (((k = O()) == null ? void 0 : k.vnode.props) || {}), n = U({
      uuid: Z(b("-")),
      takeFlag: !1,
      rotationTimer: null,
      getInventedListDataBridgeInit: !1
    }), u = S(null), c = S();
    let d = 0, g = null;
    const f = {
      longText: "longText"
    }, w = (r) => {
      r.preventDefault();
    }, v = T(() => Object.assign(I.dynamicCss.default(), e.dynamicCss)), A = T(() => e.header), B = T({
      get() {
        return g = new ee(N(e.modelValue), e.showCount * 2), e.modelValue;
      },
      set(r) {
        o && t.emit("update:modelValue", r);
      }
    }), W = T(() => {
      if (n.takeFlag = !n.takeFlag, e.modelValue.length > e.showCount) {
        const r = n.getInventedListDataBridgeInit ? e.rollCount : (n.getInventedListDataBridgeInit = !0) && 0;
        return g.take(r);
      } else
        return new Array(e.modelValue.length).fill(0).map((r, a) => B.value[a]);
    });
    _(() => {
      n.rotationTimer && (clearInterval(n.rotationTimer), n.rotationTimer = null), n.rotationTimer = B.value.length > e.showCount && setInterval(() => {
        q();
      }, e.loopTime);
    });
    const R = T(() => {
      let r = B.value.length;
      const a = Number(e.itemHeight.replace("px", "")), y = r <= e.showCount ? r : e.showCount;
      return a * y + "px";
    }), $ = () => {
      var r;
      for (let a = 0; a < ((r = c.value) == null ? void 0 : r.children.length); a++) {
        const y = c.value.children[a], {
          attractShowCount: C,
          header: h,
          tmp_scaleRule: s
        } = e;
        C.includes(a) ? (y.style.background = v.value["tr-attract-bg-color"], Array.from(y.children).forEach((i, x) => {
          i.style.transform = `scale(${s[0]})`, i.style.flexBasis = h[x].basis + "%", console.log(66666666, i.style.flexBasis);
        })) : (y.style.background = v.value["tr-un-attract-bg-color"], Array.from(y.children).forEach((i, x) => {
          i.style.transform = `scale(${s[1]})`, i.style.flexBasis = h[x].basis + "%", console.log(66666666, i.style.flexBasis);
        }));
      }
    }, q = () => {
      var C;
      const r = u == null ? void 0 : u.value, a = e.rollCount <= e.showCount ? e.rollCount : e.showCount, y = r.scrollHeight - r.clientHeight;
      d = d + y / e.showCount * a;
      for (let h = 0; h < ((C = c.value) == null ? void 0 : C.children.length); h++) {
        const s = c.value.children[h], {
          rollCount: i,
          attractShowCount: x,
          scrollTransition: L,
          header: F
        } = e;
        s.style.transition = `${L / 1e3}s`, x.map((p) => p + i).includes(h) ? (s.style.background = v.value["tr-attract-bg-color"], Array.from(s.children).forEach((p, E) => {
          p.style.transition = `${L / 1e3}s`, p.style.flexBasis = F[E].basis + "%", p.style.transform = `scale(${e.tmp_scaleRule[0]})`;
        })) : (s.style.background = v.value["tr-un-attract-bg-color"], Array.from(s.children).forEach((p, E) => {
          p.style.transition = `${L / 1e3}s`, p.style.flexBasis = F[E].basis + "%", p.style.transform = `scale(${e.tmp_scaleRule[1]})`;
        }));
      }
      te(r, d, e.scrollTransition, () => {
        var h;
        for (let s = 0; s < ((h = c.value) == null ? void 0 : h.children.length); s++) {
          const i = c.value.children[s];
          i.style.transition = "0s", Array.from(i.children).forEach((x) => {
            x.style.transition = "0s";
          });
        }
        n.takeFlag = !n.takeFlag, r.scrollTop = 0, d = 0, $();
      });
    };
    return G(() => {
      $();
    }), () => Q(m("div", {
      class: b()
    }, [m("div", {
      class: b("_th")
    }, [A.value.map((r) => m("div", {
      class: b("_td"),
      style: {
        flexBasis: r.basis + "%"
      }
    }, [r.label]))]), m("div", {
      ref: u,
      onWheel: w,
      class: b("_scroll"),
      style: {
        height: R.value
      }
    }, [m("ul", {
      ref: c,
      class: b("_wrapper")
    }, [W.value.map((r) => m("li", {
      style: {
        height: e.itemHeight
      }
    }, [e.header.map((a, y) => {
      var C, h, s, i;
      return m("div", {
        class: [b("_td")]
      }, [m("div", {
        class: [f[(C = A.value[y]) == null ? void 0 : C.type]],
        style: {
          color: r[a.prop] ? (h = a.fo) == null ? void 0 : h.color : "none",
          fontSize: r[a.prop] ? ((s = a.fo) == null ? void 0 : s.size) + "px" : "auto",
          fontWeight: r[a.prop] ? (i = a.fo) == null ? void 0 : i.weight : "0"
        }
      }, [r[a.prop] || "undefined"])]);
    })]))])])]), [[j("css"), v.value || {}]]);
  }
}), oe = J(le, "roll-list");
export {
  oe as RollList,
  oe as default
};
