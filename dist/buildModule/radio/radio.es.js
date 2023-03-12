import { defineComponent as f, inject as k, computed as d, openBlock as m, createElementBlock as p, normalizeClass as r, createElementVNode as u, withDirectives as v, vModelRadio as C, toDisplayString as B, ref as I, provide as S, nextTick as D, resolveDirective as R, renderSlot as N } from "vue";
const g = (e, l) => (e.install = function(s) {
  if (e) {
    const t = e.name || e.__name;
    if (t || l) {
      const a = l ? `dw-${l}` : "dw-" + t.replace(/dw/gi, "").toLowerCase();
      s.component(a, e);
    } else
      console.error(e, l, !l);
  }
}, e), b = {
  border: {
    type: Boolean,
    default: !1
  },
  label: {
    type: [String, Number],
    default: ""
  },
  value: {
    type: [String, Number],
    default: ""
  },
  disabled: {
    type: [String, Number, Boolean],
    default: !1
  },
  modelValue: {
    type: [String, Number, Boolean],
    default: ""
  },
  dynamicCss: {
    type: Object,
    default: () => ({
      "bs-mar-t": 0,
      "bs-mar-r": 10,
      "bs-mar-b": 10,
      "bs-mar-l": 0,
      "bs-pad-t": 4,
      "bs-pad-r": 8,
      "bs-pad-b": 4,
      "bs-pad-l": 8,
      "bs-bg-color": "#fff",
      "bs-disabled-color": "gray",
      "bs-border-radius": "4",
      "bs-border-width": "1",
      "bs-border-type": "solid",
      "bs-border-color": "#00b7ff",
      "circle-size": "12",
      "circle-out-bg-color": "#989898",
      "circle-out-hover-bg-color": "#00b7ff",
      "circle-out-active-bg-color": "#01b3f9",
      "circle-inner-bg-color": "#fff",
      "circle-inner-size": "10",
      "circle-inner-active-bg-color": "#fff",
      "circle-inner-active-size": "4",
      "txt-fo-size": "14",
      "txt-fo-color": "#000",
      "txt-fo-active-color": "#00b7ff",
      "txt-fo-active-weight": "500",
      "txt-pad-l": "8",
      "btn-fo-size": "12",
      "btn-fo-color": "#000",
      "btn-fo-active-color": "#fff",
      "btn-pad-t": "4",
      "btn-pad-r": "12",
      "btn-pad-b": "4",
      "btn-pad-l": "12",
      "btn-bg-color": "#fff",
      "btn-bg-active-color": "#409eff",
      "btn-border-width": "1",
      "btn-border-type": "solid",
      "btn-border-color": "#dcdfe6",
      "ani-transition": "0.5"
    })
  }
}, V = Symbol("radio"), w = (e) => Array.isArray(e);
function y(e) {
  const l = `vi-${e}`;
  return {
    n: (a) => a ? a.startsWith("-") ? `${l}${a}` : `${l}_${a}` : l,
    classes: (...a) => a.map((n) => {
      if (w(n)) {
        const [o, i, c = null] = n;
        return o ? i : c;
      }
      return n;
    })
  };
}
const { n: j, classes: z } = y("radio"), E = f({
  name: "VIRadio",
  props: b,
  emits: ["click", "update:modelValue", "change"],
  setup(e, l) {
    let s = k(V, void 0);
    const t = (i) => {
      n.value || (s ? s.changeModelValue(i) : l.emit("update:modelValue", "on"));
    }, a = d({
      get() {
        return s ? e.value == s.currentSelect.value : e.modelValue;
      },
      set() {
      }
    }), n = d({
      get() {
        return !!e.disabled;
      },
      set() {
      }
    }), o = d({
      get() {
        return s ? s.currentSelect.value : e.modelValue;
      },
      set(i) {
        l.emit && l.emit("update:modelValue", i);
      }
    });
    return {
      n: j,
      classes: z,
      handleClick: t,
      IsChecked: a,
      IsDisable: n,
      modelValueBridge: o
    };
  }
}), h = (e, l) => {
  const s = e.__vccOpts || e;
  for (const [t, a] of l)
    s[t] = a;
  return s;
}, M = ["value", "checked", "disabled"];
function O(e, l, s, t, a, n) {
  return m(), p("div", {
    class: r([e.classes(e.n()), e.IsChecked ? e.n("active") : "", e.border ? e.n("border") : ""]),
    onClick: l[1] || (l[1] = (o) => e.handleClick(e.value))
  }, [
    u("div", {
      class: r([e.classes(e.n("_input__wrapper")), e.IsDisable ? "is-disabled" : ""])
    }, [
      v(u("input", {
        class: r([e.classes(e.n("_input"))]),
        type: "radio",
        ref: "radioRef",
        value: e.value,
        checked: e.IsChecked,
        disabled: e.IsDisable,
        "onUpdate:modelValue": l[0] || (l[0] = (o) => e.modelValueBridge = o)
      }, null, 10, M), [
        [C, e.modelValueBridge]
      ]),
      u("div", {
        class: r([e.classes(e.n("_circle"))])
      }, null, 2)
    ], 2),
    u("label", {
      class: r(e.classes(e.n("_label"), e.IsDisable ? "is-disabled" : ""))
    }, B(e.label), 3)
  ], 2);
}
const A = /* @__PURE__ */ h(E, [["render", O]]), G = {
  border: {
    type: Boolean,
    default: !1
  },
  label: {
    type: [String, Number],
    default: ""
  },
  value: {
    type: [String, Number],
    default: ""
  },
  disabled: {
    type: [String, Number, Boolean],
    default: !1
  },
  modelValue: {
    type: [String, Number, Boolean],
    default: ""
  }
}, { n: P, classes: T } = y("radio-button"), U = f({
  name: "VIRadioButton",
  props: G,
  emits: ["click", "update:modelValue", "change"],
  setup(e, l) {
    let s = k(V);
    const t = I(null), a = function(c) {
      o.value || (s ? s.changeModelValue(e.value) : l.emit("update:modelValue", "on"));
    }, n = d({
      get() {
        return s ? e.value == s.currentSelect.value : e.modelValue;
      },
      set() {
      }
    }), o = d({
      get() {
        return !!e.disabled;
      },
      set() {
      }
    }), i = d({
      get() {
        return s ? s.currentSelect.value : e.modelValue;
      },
      set(c) {
        l.emit && l.emit("update:modelValue", c);
      }
    });
    return {
      n: P,
      classes: T,
      handleClick: a,
      IsChecked: n,
      IsDisable: o,
      refRadioButton: t,
      modelValue: i
    };
  }
}), J = ["value", "checked", "disabled"];
function K(e, l, s, t, a, n) {
  return m(), p("div", {
    ref: "refRadioButton",
    class: r([e.classes(e.n()), e.IsChecked ? e.n("active") : "", e.border ? e.n("border") : ""]),
    onClick: l[1] || (l[1] = (...o) => e.handleClick && e.handleClick(...o))
  }, [
    v(u("input", {
      class: r([e.classes(e.n("_input"))]),
      type: "radio",
      ref: "radioRef",
      value: e.value,
      checked: e.IsChecked,
      disabled: e.IsDisable,
      "onUpdate:modelValue": l[0] || (l[0] = (o) => e.modelValue = o)
    }, null, 10, J), [
      [C, e.modelValue]
    ]),
    u("label", {
      class: r(e.classes(e.n("_label"), e.IsDisable ? "is-disabled" : ""))
    }, B(e.label), 3)
  ], 2);
}
const L = /* @__PURE__ */ h(U, [["render", K]]), $ = function(e, l) {
  for (let [s, t] of Object.entries(l.value))
    e.style.setProperty("--" + s, t);
}, W = {
  mounted(e, l) {
    $(e, l);
  },
  updated(e, l) {
    $(e, l);
  },
  install(e) {
    e.directive("Css", this);
  }
}, { n: Y, classes: q } = y("radio-group"), F = f({
  name: "VIRadioGroup",
  props: b,
  emits: ["click", "update:modelValue", "change"],
  directives: { css: W },
  setup(e, l) {
    const s = (n = e.modelValue) => {
      l.emit("update:modelValue", n), D(() => l.emit("change", n));
    }, t = d({
      get() {
        return e.modelValue;
      },
      set(n) {
        l.emit && l.emit("update:modelValue", n);
      }
    }), a = d(() => Object.assign(b.dynamicCss.default(), e.dynamicCss));
    return S(V, {
      currentSelect: t,
      changeModelValue: s
    }), {
      n: Y,
      classes: q,
      dynamicCssBridge: a
    };
  }
});
function H(e, l, s, t, a, n) {
  const o = R("css");
  return v((m(), p("div", {
    class: r(e.classes(e.n()))
  }, [
    N(e.$slots, "default")
  ], 2)), [
    [o, e.dynamicCssBridge || {}]
  ]);
}
const Q = /* @__PURE__ */ h(F, [["render", H]]), Z = g(A, "radio"), _ = g(L, "radio-button"), x = g(Q, "radio-group");
export {
  Z as Radio,
  _ as RadioButton,
  x as RadioGroup,
  Z as default
};
