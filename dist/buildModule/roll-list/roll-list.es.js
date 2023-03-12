import { defineComponent as Q, getCurrentInstance as X, ref as I, reactive as Y, computed as S, nextTick as Z, onUnmounted as D, withDirectives as tt, createVNode as m, resolveDirective as et, onMounted as lt, watchEffect as rt } from "vue";
const st = (t, e) => (t.install = function(r) {
  if (t) {
    const a = t.name || t.__name;
    if (a || e) {
      const o = e ? `dw-${e}` : "dw-" + a.replace(/dw/gi, "").toLowerCase();
      r.component(o, t);
    } else
      console.error(t, e, !e);
  }
}, t), at = (t) => Array.isArray(t);
function R(t) {
  const e = `vi-${t}`;
  return {
    n: (o) => o ? o.startsWith("-") ? `${e}${o}` : `${e}_${o}` : e,
    classes: (...o) => o.map((i) => {
      if (at(i)) {
        const [c, h, u = null] = i;
        return c ? h : u;
      }
      return i;
    })
  };
}
const z = {
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
    default: 1e3 * 3
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
      "longText-txt-gap": "30"
    })
  }
}, j = function(t, e) {
  for (let [r, a] of Object.entries(e.value))
    t.style.setProperty("--" + r, a);
}, nt = {
  mounted(t, e) {
    j(t, e);
  },
  updated(t, e) {
    j(t, e);
  },
  install(t) {
    t.directive("Css", this);
  }
}, { n: it } = R(""), ct = (t = it()) => t + "xxxxxxxx".replace(/[xy]/g, function(e) {
  var r = 0 | 16 * Math.random(), a = e == "x" ? r : 8 | 3 & r;
  return a.toString(16);
});
class ut {
  constructor(e = [], r = 7) {
    this.list = e, this.severalGroups = r, this.windowSliding = new Array(this.severalGroups).fill(0).map((a, o) => o);
  }
  take(e) {
    return this.Sliding(e), this.show();
  }
  show() {
    return this.windowSliding.map((e) => this.list[e]);
  }
  Sliding(e) {
    this.windowSliding = this.windowSliding.map((r) => {
      const a = this.list.length, o = r + e;
      return o <= a - 1 ? o : o - a;
    });
  }
}
const ot = function(t) {
  const e = t instanceof Array ? [] : {};
  for (let r in t)
    e[r] = typeof t[r] == "object" ? ot(t[r]) : t[r];
  return e;
};
function dt(t, e = "top", r, a, o) {
  const i = e == "top" ? t.scrollTop : e == "left" ? t.scrollLeft : 0, c = r - i, h = performance.now();
  function u() {
    const s = performance.now() - h, w = b(
      s,
      i,
      c,
      a
    );
    e == "top" ? t.scrollTop = w : e == "left" && (t.scrollLeft = w), s < a ? requestAnimationFrame(u) : o && o();
  }
  function b(f, s, w, T) {
    return f /= T / 2, f < 1 ? w / 2 * f * f + s : (f--, -w / 2 * (f * (f - 2) - 1) + s);
  }
  requestAnimationFrame(u);
}
function ft() {
  let t = new Date().getTime();
  return typeof performance < "u" && typeof performance.now == "function" && (t += performance.now()), "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    (r) => {
      const a = (t + Math.random() * 16) % 16 | 0;
      return t = Math.floor(t / 16), (r === "x" ? a : a & 3 | 8).toString(16);
    }
  );
}
function gt(t) {
  const e = {};
  return t.map((r) => {
    const { __id: a, ...o } = r, i = JSON.stringify(o);
    if (!e[i])
      return e[i] = !0, r;
    const c = ft();
    return { ...r, __id: c };
  });
}
const {
  n: G
} = R("long-text"), J = {
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
      "txt-gap": "20"
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
    var H;
    const a = "onUpdate:modelValue" in (((H = X()) == null ? void 0 : H.vnode.props) || {}), o = I(null), i = I(null), c = I(null), h = I(null);
    let u = null;
    const b = Y({
      isScroll: !0,
      toolTip_x: 0,
      toolTip_y: 0,
      toolTip_content: "盎司附近拉萨解放了卡JFK垃圾地方"
    });
    let f = 0;
    const s = S(() => Object.assign(J.dynamicCss.default(), t.dynamicCss)), w = S({
      get() {
        return b.isScroll = !0, q(b), t.text;
      },
      set(y) {
        a && e.emit("update:text", y);
      }
    }), T = () => {
      var A, N, V;
      const y = (A = c == null ? void 0 : c.value) == null ? void 0 : A.offsetWidth, B = (N = h == null ? void 0 : h.value) == null ? void 0 : N.offsetWidth, M = (V = i == null ? void 0 : i.value) == null ? void 0 : V.scrollLeft, $ = performance.now();
      f || (f = $);
      const W = $ - f;
      y / t.speed * W, B - M <= 0 ? (i.value.scrollLeft -= c.value.offsetWidth, f = 0, requestAnimationFrame(T)) : i.value && i.value.scrollLeft++;
    }, q = (y) => {
      Z(() => {
        if (o.value && c.value) {
          const B = o.value.clientWidth, M = c.value.offsetWidth, $ = Number(s.value["txt-gap"]), W = M - $;
          if (B < W) {
            L();
            const A = () => {
              T(), u = requestAnimationFrame(A);
            };
            u = requestAnimationFrame(A);
          } else
            y && (y.isScroll = !1);
        }
      });
    }, L = () => u ? (cancelAnimationFrame(u), u = null, !0) : !1, P = (y) => {
      b.toolTip_x = y.x, b.toolTip_y = y.y, L();
    }, U = () => {
      q();
    };
    return D(() => {
      u && (clearInterval(u), u = null);
    }), () => tt(m("div", {
      class: [G(""), "tooltip"],
      "data-tooltip": "这是一个 tooltip",
      ref: o,
      onMouseenter: P,
      onMouseleave: U
    }, [m("div", {
      class: G("_scroll"),
      ref: i
    }, [m("span", {
      ref: c
    }, [w.value, b.isScroll ? m("span", {
      class: "seizeASeat"
    }, null) : ""]), m("span", {
      ref: h
    }, [b.isScroll ? w.value : "", b.isScroll ? m("span", {
      class: "seizeASeat"
    }, null) : ""])])]), [[et("css"), s.value || {}]]);
  }
}), {
  n: _
} = R("roll-list"), mt = /* @__PURE__ */ Q({
  name: "RollList",
  emits: ["update:modelValue", "rowClick"],
  directives: {
    css: nt
  },
  props: z,
  components: {
    LongText: K
  },
  setup(t, e) {
    var V;
    const a = "onUpdate:modelValue" in (((V = X()) == null ? void 0 : V.vnode.props) || {}), o = Y({
      uuid: ct(_("-")),
      takeFlag: !1,
      rotationTimer: null,
      getInventedListDataBridgeInit: !1
    }), i = I(null), c = I();
    let h = 0, u = null;
    const b = {
      longText: "longText"
    }, f = (n) => {
      n.preventDefault();
    }, s = S(() => Object.assign(z.dynamicCss.default(), t.dynamicCss)), w = S(() => {
      let n = {};
      for (let l in s.value)
        l.includes("longText") && (n[l.replace("longText-", "")] = s.value[l]);
      return n;
    }), T = S(() => t.header), q = () => {
      var n;
      for (let l = 0; l < ((n = c.value) == null ? void 0 : n.children.length); l++) {
        const g = c.value.children[l], {
          attractShowCount: F,
          header: v,
          tmp_scaleRule: d
        } = t;
        F.includes(l) ? (s.value["tr-attract-bg-color-style"] == "double" ? g.style.background = `linear-gradient(${s.value["tr-attract-bg-color-angle"]}deg,${s.value["tr-attract-bg-color-from"]},${s.value["tr-attract-bg-color-to"]})` : g.style.background = s.value["tr-attract-bg-color-value"], Array.from(g.children).forEach((p, C) => {
          p.style.transform = `scale(${d[0]})`, p.style.flexBasis = v[C].basis + "%";
        })) : (g.style.background = s.value["tr-un-attract-bg-color"], Array.from(g.children).forEach((p, C) => {
          p.style.transform = `scale(${d[1]})`, p.style.flexBasis = v[C].basis + "%";
        }));
      }
    }, L = S({
      get() {
        return u = new ut(ot(t.modelValue), t.showCount * 2), Z(() => {
          q();
        }), t.modelValue;
      },
      set(n) {
        a && e.emit("update:modelValue", n);
      }
    }), P = S(() => {
      if (o.takeFlag = !o.takeFlag, t.modelValue.length > t.showCount) {
        const n = o.getInventedListDataBridgeInit ? t.rollCount : (o.getInventedListDataBridgeInit = !0) && 0;
        return gt(u.take(n));
      } else
        return new Array(t.modelValue.length).fill(0).map((n, l) => L.value[l]);
    }), U = S(() => {
      let n = L.value.length;
      const l = Number(t.itemHeight.replace("px", "")), g = n <= t.showCount ? n : t.showCount;
      return l * g + "px";
    });
    lt(() => {
      rt(() => {
        o.rotationTimer && (clearInterval(o.rotationTimer), o.rotationTimer = null), o.rotationTimer = L.value.length > t.showCount && setInterval(() => {
          H();
        }, t.loopTime);
      });
    });
    const H = () => {
      var F;
      const n = i == null ? void 0 : i.value, l = t.rollCount <= t.showCount ? t.rollCount : t.showCount, g = n.scrollHeight - n.clientHeight;
      h = h + g / t.showCount * l;
      for (let v = 0; v < ((F = c.value) == null ? void 0 : F.children.length); v++) {
        const d = c.value.children[v], {
          rollCount: p,
          attractShowCount: C,
          scrollTransition: k,
          header: E
        } = t;
        d.style.transition = `${k / 1e3}s`, C.map((x) => x + p).includes(v) ? (s.value["tr-attract-bg-color-style"] == "double" ? d.style.background = `linear-gradient(${s.value["tr-attract-bg-color-angle"]}deg,${s.value["tr-attract-bg-color-from"]},${s.value["tr-attract-bg-color-to"]})` : d.style.background = s.value["tr-attract-bg-color-value"], Array.from(d.children).forEach((x, O) => {
          x.style.transition = `${k / 1e3}s`, x.style.flexBasis = E[O].basis + "%", x.style.transform = `scale(${t.tmp_scaleRule[0]})`;
        })) : (d.style.background = s.value["tr-un-attract-bg-color"], Array.from(d.children).forEach((x, O) => {
          x.style.transition = `${k / 1e3}s`, x.style.flexBasis = E[O].basis + "%", x.style.transform = `scale(${t.tmp_scaleRule[1]})`;
        }));
      }
      dt(n, "top", h, t.scrollTransition, () => {
        var v;
        for (let d = 0; d < ((v = c.value) == null ? void 0 : v.children.length); d++) {
          const p = c.value.children[d];
          p.style.transition = "0s", Array.from(p.children).forEach((C) => {
            C.style.transition = "0s";
          });
        }
        o.takeFlag = !o.takeFlag, n.scrollTop = 0, h = 0;
      });
    }, y = () => {
      o.rotationTimer && clearInterval(o.rotationTimer);
    }, B = () => {
      o.rotationTimer = null;
    }, M = function(n) {
      e.emit && e.emit("rowClick", n);
    };
    D(() => {
      y(), o.rotationTimer = null;
    });
    const $ = () => t.showHeader ? m("div", {
      class: _("_th")
    }, [T.value.map((n) => m("div", {
      class: _("_td"),
      style: {
        flexBasis: n.basis + "%"
      }
    }, [n.label]))]) : "", W = () => m("div", {
      ref: i,
      onWheel: f,
      class: _("_scroll"),
      style: {
        height: U.value
      }
    }, [m("ul", {
      ref: c,
      class: _("_wrapper")
    }, [P.value.map((n) => A(n))])]), A = (n) => m("li", {
      key: n.__id,
      style: {
        height: t.itemHeight
      },
      onClick: M.bind(this, n)
    }, [t.header.map((l, g) => N(n, l, g))]), N = (n, l, g) => {
      var F, v, d, p, C, k, E, x;
      return m("div", {
        class: [_("_td")]
      }, [m("div", {
        class: [b[(F = T.value[g]) == null ? void 0 : F.type]],
        style: {
          color: n[l.prop] ? (v = l.fo) == null ? void 0 : v.color : "none",
          fontSize: n[l.prop] ? ((d = l.fo) == null ? void 0 : d.size) + "px" : "auto",
          fontWeight: n[l.prop] ? (p = l.fo) == null ? void 0 : p.weight : "0",
          fontFamily: n[l.prop] ? (C = l.fo) == null ? void 0 : C.style : "none"
        }
      }, [(k = T.value[g]) != null && k.type && ((E = T.value[g]) == null ? void 0 : E.type) == "longText" ? m(K, {
        text: n[l.prop] || "undefined",
        speed: n[l.prop] ? (x = l.longText) == null ? void 0 : x.speed : !1,
        dynamicCss: w.value
      }, null) : n[l.prop] || "undefined"])]);
    };
    return () => tt(m("div", {
      class: _(),
      onMouseenter: y,
      onMouseleave: B
    }, [$(), W()]), [[et("css"), s.value || {}]]);
  }
}), vt = st(mt, "roll-list");
export {
  vt as RollList,
  vt as default
};
