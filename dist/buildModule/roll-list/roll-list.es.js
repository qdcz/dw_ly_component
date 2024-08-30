import { defineComponent as se, getCurrentInstance as re, ref as L, reactive as ie, computed as C, onMounted as ce, watchEffect as we, nextTick as M, withDirectives as ue, createVNode as u, resolveDirective as ae, watch as G, onUnmounted as D } from "vue";
const Ce = (e, n) => (e.install = function(r) {
  if (e) {
    const i = e.name || e.__name;
    if (i || n) {
      const l = n ? `dw-${n}` : "dw-" + i.replace(/dw/gi, "").toLowerCase();
      r.component(l, e);
    } else
      console.error(e, n, !n);
  }
}, e), Se = (e) => Array.isArray(e);
function O(e) {
  const n = `vi-${e}`;
  return {
    n: (l) => l ? l.startsWith("-") ? `${n}${l}` : `${n}_${l}` : n,
    classes: (...l) => l.map((a) => {
      if (Se(a)) {
        const [f, v, g = null] = a;
        return f ? v : g;
      }
      return a;
    })
  };
}
var U = /* @__PURE__ */ ((e) => (e.AUTHROLL = "autoRoll", e.HANDMOVE = "handRoll", e))(U || {});
const ee = {
  // 表头字段-配置   // TODO type类型约束下
  header: {
    type: Array,
    default: []
  },
  // 表头显隐
  showHeader: {
    type: Boolean,
    default: !0
  },
  // 每行固高
  itemHeight: {
    type: [String],
    default: "40px"
  },
  // 可见条数
  showCount: {
    type: [Number],
    default: 8
  },
  // 滚动条数
  rollCount: {
    type: [Number],
    default: 1
  },
  // 特殊显示的位置
  attractShowCount: {
    type: Array,
    // 内部会错判断，如果数组内的值超过展示的条数，则清空为[]   // TODO 未做
    default: [3, 4]
    // default:[]
  },
  // 滚动类型
  rollType: {
    type: String,
    default: "autoRoll",
    validator: function(e) {
      return Object.values(U).includes(e);
    }
  },
  // 自动滚动时长间隔 ( 不能小于或等于 scrollTransition )
  loopTime: {
    type: Number,
    default: 1e3 * 2
  },
  // 滚动过渡时长
  scrollTransition: {
    type: Number,
    default: 1e3 * 0.8
  },
  // (临时)固定层级缩放
  tmp_scaleRule: {
    type: Array,
    default: [1.3, 1]
  },
  // 缩放规则  ----- 支持对每一列进行配置缩放规则
  scaleRule: {
    type: [Number, Array],
    // 特殊显示位置为1.5，往下根据数量进行递减（如果数据只有三条，那么只有1.5和1.0会生效）
    default: [1.5, 1, 0.8]
  },
  // 数据列表
  modelValue: {
    type: Array,
    default: []
  },
  dynamicCss: {
    type: Object,
    default: () => ({
      // 容器宽度
      "box-wid": "800",
      // 或者auto
      // 钉在表格上的列表
      "pin-hei": "80",
      "pin-radius": "4",
      "pin-dire-b": "120",
      // 距离底部距离
      "pin-bg-color-style": "double",
      // single 是使用单色 double 是使用渐变色
      "pin-bg-color-to": "#00DEFF",
      "pin-bg-color-from": "#FFFFFF",
      "pin-bg-color-angle": "135",
      "pin-bg-color-value": "#49a3cb",
      /**
       * 表头相关
       */
      "th-pad-tb": "10",
      // 表头的 上下内边距
      "th-bg-color": "rgb(179, 210, 224)",
      "th-fo-color": "rgb(90, 99, 110)",
      "th-fo-size": "16",
      "th-fo-weight": "900",
      "th-radius-lt": "8",
      "th-radius-rt": "8",
      "th-radius-lb": "0",
      "th-radius-rb": "0",
      /**
       * 表体相关
       */
      // 鼠标悬浮表行背景颜色
      "tr-hover-bg-color": "rgb(132 176 212 / 80%)",
      "tr-hover-transition": "0.3",
      // 激活的背景颜色
      "tr-focus-bg-color-style": "single",
      // single 是使用单色 double 是使用渐变色
      "tr-focus-bg-color-to": "#00DEFF",
      "tr-focus-bg-color-from": "#FFFFFF",
      "tr-focus-bg-color-angle": "135",
      "tr-focus-bg-color-value": "rgb(211, 228, 242)",
      // 其余未激活的背景颜色
      "tr-un-focus-bg-color": "rgb(235, 235, 235)",
      /**
       * 表列相关
       */
      "td-pad-lr": "20",
      // 表列的 左右外边距
      "td-pad-tb": "0",
      "td-txt-align": "center",
      // 文字对齐方式
      /**
       * longText组件
       */
      "longText-txt-gap": "30",
      // 滚动文本连接间隙
      // header传入 权重最高
      "longText-sco-ani-name": "longTextScrollAnimation",
      // "longTextScrollAnimation3d"
      "longText-sco-ani-dura": "15"
    })
  }
}, te = function(e, n) {
  for (let [r, i] of Object.entries(n.value))
    e.style.setProperty("--" + r, i);
}, de = {
  mounted(e, n) {
    te(e, n);
  },
  updated(e, n) {
    te(e, n);
  },
  install(e) {
    e.directive("Css", this);
  }
}, { n: _e } = O(""), Ae = (e = _e()) => e + "xxxxxxxx".replace(/[xy]/g, function(n) {
  var r = 0 | 16 * Math.random(), i = n == "x" ? r : 8 | 3 & r;
  return i.toString(16);
});
class Fe {
  constructor(n = [], r = 7) {
    this.list = n, this.severalGroups = r, this.windowSliding = new Array(this.severalGroups).fill(0).map((i, l) => l);
  }
  // 每次消费的条数
  take(n) {
    return this.Sliding(n), this.show();
  }
  show() {
    return this.windowSliding.map((n) => this.list[n]);
  }
  Sliding(n) {
    this.windowSliding = this.windowSliding.map((r) => {
      const i = this.list.length, l = r + n;
      return l <= i - 1 ? l : l - i;
    });
  }
}
const V = function(e) {
  const n = e instanceof Array ? [] : {};
  for (let r in e)
    n[r] = typeof e[r] == "object" ? V(e[r]) : e[r];
  return n;
};
function Le(e, n = "top", r, i, l) {
  const a = n == "top" ? e.scrollTop : n == "left" ? e.scrollLeft : 0, f = r - a, v = performance.now();
  function g() {
    const y = performance.now() - v, s = _(
      y,
      a,
      f,
      i
    );
    n == "top" ? e.scrollTop = s : n == "left" && (e.scrollLeft = s), y < i ? requestAnimationFrame(g) : l && l();
  }
  function _(m, y, s, I) {
    return m /= I / 2, m < 1 ? s / 2 * m * m + y : (m--, -s / 2 * (m * (m - 2) - 1) + y);
  }
  requestAnimationFrame(g);
}
function E() {
  let e = new Date().getTime();
  return typeof performance < "u" && typeof performance.now == "function" && (e += performance.now()), "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    (r) => {
      const i = (e + Math.random() * 16) % 16 | 0;
      return e = Math.floor(e / 16), (r === "x" ? i : i & 3 | 8).toString(16);
    }
  );
}
function ke(e) {
  const n = {};
  return e.map((r) => {
    const { __id: i, ...l } = r, a = JSON.stringify(l);
    if (!n[a])
      return n[a] = !0, r;
    const f = E();
    return { ...r, __id: f };
  });
}
const {
  n: ne
} = O("long-text"), oe = {
  // 显示文本
  text: {
    type: String,
    default: "这是一个默认文本"
  },
  // 滚动速度
  speed: {
    type: Number,
    default: 1e3
    // 默认速度为：文字的宽度像素/1s
  },
  // 动态css样式
  dynamicCss: {
    type: Object,
    default: () => ({
      // 空白衔接块的宽度
      "txt-gap": "22",
      // 是否启动滚动的gpu加速
      "sco-ani-name": "longTextScrollAnimation",
      // "longTextScrollAnimation3d"
      "sco-ani-dura": "10"
    })
  }
}, le = /* @__PURE__ */ se({
  name: "LongText",
  emits: ["update:text"],
  props: oe,
  directives: {
    css: de
  },
  // components: { ToolTip: ToolTip },
  setup(e, n) {
    var y;
    const i = "onUpdate:modelValue" in (((y = re()) == null ? void 0 : y.vnode.props) || {}), l = L(null), a = L(null), f = L(null), v = L(null), g = ie({
      isScroll: !0,
      // 是否达到滚动条件
      toolTip_x: 0,
      toolTip_y: 0,
      toolTip_content: "盎司附近拉萨解放了卡JFK垃圾地方"
    }), _ = C(() => Object.assign(oe.dynamicCss.default(), e.dynamicCss)), m = C({
      get() {
        return g.isScroll = !0, e.text;
      },
      set(s) {
        i && n.emit("update:text", s);
      }
    });
    return ce(() => {
      we(() => {
        M(() => {
          const s = l.value.clientWidth, A = f.value.offsetWidth;
          s >= A && (g.isScroll = !1);
        });
      });
    }), () => ue(u("div", {
      class: [ne(""), "tooltip"],
      "data-tooltip": "这是一个 tooltip",
      ref: l
    }, [u("div", {
      class: ne("_scroll"),
      ref: a
    }, [u("span", {
      ref: f,
      class: g.isScroll ? "startAnimation" : ""
    }, [m.value]), g.isScroll ? u("span", null, [u("span", {
      class: "seizeASeat"
    }, null), u("span", {
      ref: v,
      class: "startAnimation"
    }, [m.value]), u("span", {
      class: "seizeASeat"
    }, null)]) : ""])]), [[ae("css"), _.value || {}]]);
  }
}), {
  n: w
} = O("roll-list"), $e = /* @__PURE__ */ se({
  name: "RollList",
  emits: ["update:modelValue", "rowClick"],
  directives: {
    css: de
  },
  props: ee,
  components: {
    LongText: le
  },
  setup(e, n) {
    var q;
    const i = "onUpdate:modelValue" in (((q = re()) == null ? void 0 : q.vnode.props) || {}), l = ie({
      uuid: Ae(w("-")),
      takeFlag: !1,
      rotationTimer: null,
      getInventedListDataBridgeInit: !1
    }), a = L(null), f = L();
    let v = 0, g = !1, _ = null;
    const m = {
      longText: "longText"
    }, y = (o) => {
      o.preventDefault();
    }, s = C(() => Object.assign(ee.dynamicCss.default(), e.dynamicCss)), I = C(() => {
      let o = {};
      for (let t in s.value)
        t.includes("longText") && (o[t.replace("longText-", "")] = s.value[t]);
      return o;
    }), A = C(() => e.header), W = () => {
      var o;
      for (let t = 0; t < ((o = f.value) == null ? void 0 : o.children.length); t++) {
        const c = f.value.children[t], {
          attractShowCount: p,
          header: d,
          tmp_scaleRule: h
        } = e;
        if (p.includes(t))
          if (s.value["tr-focus-bg-color-style"] == "double") {
            const T = s.value["tr-focus-bg-color-angle"], S = s.value["tr-focus-bg-color-from"], x = s.value["tr-focus-bg-color-to"];
            c.style.background = `linear-gradient(${T}deg,${S},${x})`;
          } else
            c.style.background = s.value["tr-focus-bg-color-value"];
        else
          c.style.background = s.value["tr-un-focus-bg-color"];
        Array.from(c.children).forEach((b, T) => {
          b.style.flexBasis = d[T].basis + "%", p.includes(t) ? b.style.transform = `scale(${h[0]})` : b.style.transform = `scale(${h[1]})`;
        });
      }
    }, k = () => {
      if (l.rotationTimer && (clearInterval(l.rotationTimer), l.rotationTimer = null), e.rollType == U.AUTHROLL) {
        if (g)
          return;
        l.rotationTimer = B.value.length > e.showCount && setInterval(() => {
          M(() => {
            me();
          });
        }, e.loopTime);
      }
    }, B = C({
      get() {
        const o = e.modelValue.map((t, c) => (t.__id = E(), t.__uniqueness = E(), t));
        return _ = new Fe(V(o), e.showCount * 2), M(() => {
          W();
        }), o;
      },
      set(o) {
        i && n.emit("update:modelValue", o);
      }
    }), fe = C(() => {
      if (l.takeFlag = !l.takeFlag, e.modelValue.length > e.showCount) {
        const o = l.getInventedListDataBridgeInit ? e.rollCount : (l.getInventedListDataBridgeInit = !0) && 0;
        return ke(_.take(o));
      } else
        return new Array(e.modelValue.length).fill(0).map((o, t) => B.value[t]);
    }), ge = C(() => {
      let o = B.value.length;
      const t = Number(e.itemHeight.replace("px", "")), c = o <= e.showCount ? o : e.showCount;
      return t * c + "px";
    });
    ce(() => {
      k(), G(() => e.rollType, () => k()), G(() => e.loopTime, () => k()), G(() => B.value, () => {
        k();
      });
    }), D(() => {
    });
    const me = () => {
      var p;
      const o = a == null ? void 0 : a.value, t = e.rollCount <= e.showCount ? e.rollCount : e.showCount, c = o.scrollHeight - o.clientHeight;
      v = v + c / e.showCount * t;
      for (let d = 0; d < ((p = f.value) == null ? void 0 : p.children.length); d++) {
        const h = f.value.children[d], {
          attractShowCount: $,
          header: b,
          tmp_scaleRule: T
        } = e, S = $.map((x) => x + t).includes(d);
        if (S)
          if (s.value["tr-focus-bg-color-style"] == "double") {
            const F = s.value["tr-focus-bg-color-angle"], R = s.value["tr-focus-bg-color-from"], H = s.value["tr-focus-bg-color-to"];
            h.style.background = `linear-gradient(${F}deg,${R},${H})`;
          } else
            h.style.background = s.value["tr-focus-bg-color-value"];
        else
          h.style.background = s.value["tr-un-focus-bg-color"];
        Array.from(h.children).forEach((x, F) => {
          x.style.flexBasis = b[F].basis + "%", S ? x.style.transform = `scale(${T[0]})` : x.style.transform = `scale(${T[1]})`;
        });
      }
      Le(o, "top", v, e.scrollTransition, () => {
        l.takeFlag = !l.takeFlag, o.scrollTop = 0, v = 0, M(() => {
          W();
        });
      });
    }, N = () => {
      g = !0, l.rotationTimer && (clearInterval(l.rotationTimer), l.rotationTimer = null);
    }, pe = () => {
      g = !1, k();
    }, ve = function(o) {
      n.emit && n.emit("rowClick", o);
    };
    D(() => {
      N(), l.rotationTimer = null;
    });
    const xe = () => {
      if (!s.value["pin-bg-color-style"])
        return "";
      let o = "none";
      if (s.value["pin-bg-color-style"] == "double") {
        const c = s.value["pin-bg-color-angle"], p = s.value["pin-bg-color-from"], d = s.value["pin-bg-color-to"];
        o = `linear-gradient(${c}deg,${p},${d})`;
      } else
        o = s.value["pin-bg-color-value"];
      return u("div", {
        class: w("_pinSth"),
        style: {
          background: o
        }
      }, null);
    }, ye = () => e.showHeader ? u("div", {
      class: w("_th")
    }, [A.value.map((o) => u("div", {
      class: w("_td"),
      style: {
        flexBasis: o.basis + "%"
      }
    }, [o.label]))]) : "", he = () => u("div", {
      ref: a,
      onWheel: y,
      class: w("_scroll"),
      style: {
        height: ge.value
      }
    }, [u("ul", {
      ref: f,
      class: w("_wrapper")
    }, [fe.value.map((o) => be(o))])]), be = (o) => u("li", {
      key: o.__id,
      style: {
        height: e.itemHeight
      },
      onClick: ve.bind(this, o)
    }, [e.header.map((t, c) => Te(o, t, c))]), Te = (o, t, c) => {
      var h, $, b, T, S, x, F, R, H, P, z, j, J, K, Q, X, Y, Z;
      let p = {};
      t.longText && ((h = t == null ? void 0 : t.longText) != null && h.speed && (p["sco-ani-dura"] = t.longText.speed), ($ = t.longText) != null && $.GPUSpee && (p["sco-ani-name"] = ((b = t == null ? void 0 : t.longText) == null ? void 0 : b.GPUSpee) == !0 ? "longTextScrollxAnimation3d" : "longTextScrollxAnimation"), ((T = t.longText) != null && T.txtGap || Number(t.longText.txtGap) == 0) && (p["txt-gap"] = t.longText.txtGap));
      const d = {};
      return o[t.prop] && ((S = t.fo) != null && S.textAlign && (d.textAlign = (x = t.fo) == null ? void 0 : x.textAlign), (F = t.fo) != null && F.style && (d.fontFamily = (R = t.fo) == null ? void 0 : R.style), (H = t.fo) != null && H.weight && (d.fontWeight = (P = t.fo) == null ? void 0 : P.weight), (z = t.fo) != null && z.color && (d.color = (j = t.fo) == null ? void 0 : j.color), (J = t.fo) != null && J.size && (d.fontSize = ((K = t.fo) == null ? void 0 : K.size) + "px")), u("div", {
        class: [w("_td")]
      }, [u("div", {
        class: [m[(Q = A.value[c]) == null ? void 0 : Q.type]],
        style: {
          ...d
        }
      }, [(X = A.value[c]) != null && X.type && ((Y = A.value[c]) == null ? void 0 : Y.type) == "longText" ? u(le, {
        style: {
          padding: "0 1px"
        },
        text: o[t.prop] || "undefined",
        speed: o[t.prop] ? (Z = t.longText) == null ? void 0 : Z.speed : !1,
        dynamicCss: Object.assign(V(I.value), p)
      }, null) : o[t.prop] || "undefined"])]);
    };
    return () => ue(u("div", {
      class: w(),
      onMouseenter: N,
      onMouseleave: pe
    }, [xe(), ye(), he()]), [[ae("css"), s.value || {}]]);
  }
}), Be = Ce($e, "roll-list");
export {
  Be as RollList,
  Be as default
};
