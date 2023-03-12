import { defineComponent as u, ref as d, onMounted as p, onUnmounted as f, createVNode as y } from "vue";
const m = (t, e) => (t.install = function(n) {
  if (t) {
    const s = t.name || t.__name;
    if (s || e) {
      const o = e ? `dw-${e}` : "dw-" + s.replace(/dw/gi, "").toLowerCase();
      n.component(o, t);
    } else
      console.error(t, e, !e);
  }
}, t), v = (t) => Array.isArray(t);
function w(t) {
  const e = `vi-${t}`;
  return {
    n: (o) => o ? o.startsWith("-") ? `${e}${o}` : `${e}_${o}` : e,
    classes: (...o) => o.map((r) => {
      if (v(r)) {
        const [i, l, a = null] = r;
        return i ? l : a;
      }
      return r;
    })
  };
}
const c = function(t, e) {
  for (let [n, s] of Object.entries(e.value))
    t.style.setProperty("--" + n, s);
}, h = {
  mounted(t, e) {
    c(t, e);
  },
  updated(t, e) {
    c(t, e);
  },
  install(t) {
    t.directive("Css", this);
  }
}, {
  n: $
} = w("tool-tip"), T = {
  x: {
    type: Number
  },
  y: {
    type: Number
  },
  content: {
    type: String,
    default: "这是一个默认tooltip text"
  },
  dynamicCss: {
    type: Object,
    default: () => ({})
  }
}, b = /* @__PURE__ */ u({
  name: "ToolTip",
  emits: ["update:text"],
  props: T,
  directives: {
    css: h
  },
  setup(t, e) {
    const n = d(null), s = () => {
      if (n.value) {
        const o = n.value.offsetWidth, r = n.value.offsetHeight, i = Number(t.x) - o / 2, l = Number(t.y) - r / 2;
        n.value.style.left = `${i}px`, n.value.style.top = `${l}px`;
      }
    };
    return p(() => {
      s(), window.addEventListener("resize", s);
    }), f(() => {
      window.removeEventListener("resize", s);
    }), () => y("div", {
      class: $(""),
      ref: n
    }, [t.content]);
  }
}), C = m(b, "tool-tip");
export {
  C as ToolTip,
  C as default
};
