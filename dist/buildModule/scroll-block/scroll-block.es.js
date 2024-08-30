import { defineComponent as N, getCurrentInstance as O, ref as p, reactive as F, computed as P, resolveDirective as q, withDirectives as z, openBlock as E, createElementBlock as g, normalizeClass as m, createElementVNode as A, normalizeStyle as k, Fragment as S, renderList as j } from "vue";
const M = (e, s) => (e.install = function(l) {
  if (e) {
    const t = e.name || e.__name;
    if (t || s) {
      const n = s ? `dw-${s}` : "dw-" + t.replace(/dw/gi, "").toLowerCase();
      l.component(n, e);
    } else
      console.error(e, s, !s);
  }
}, e), L = {
  label: {
    type: [String, Number],
    default: ""
  },
  value: {
    type: [String, Number],
    default: ""
  },
  showCount: {
    type: Number,
    default: 4
  },
  modelValue: {
    type: [Array],
    default: [
      "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240207113212.png",
      "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240207173357.png",
      "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240218221447.jpg",
      "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240222153642.png",
      "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240222153607.png",
      "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20220105175300.png"
    ]
  },
  dynamicCss: {
    type: Object,
    default: () => ({
      /**
       * 基础
       */
      "bs-box-height": "100",
      "bs-box-width": "320",
      "bs-img-height": "100",
      "bs-img-width": "100",
      "bs-img-interval": "10"
    })
  }
}, X = (e) => Array.isArray(e);
function G(e) {
  const s = `vi-${e}`;
  return {
    n: (n) => n ? n.startsWith("-") ? `${s}${n}` : `${s}_${n}` : s,
    classes: (...n) => n.map((i) => {
      if (X(i)) {
        const [r, a, d = null] = i;
        return r ? a : d;
      }
      return i;
    })
  };
}
const $ = function(e, s) {
  for (let [l, t] of Object.entries(s.value))
    e.style.setProperty("--" + l, t);
}, H = {
  mounted(e, s) {
    $(e, s);
  },
  updated(e, s) {
    $(e, s);
  },
  install(e) {
    e.directive("Css", this);
  }
}, { n: J, classes: K } = G("scroll-block"), Q = N({
  name: "VIScrollBlock",
  directives: { css: H },
  props: L,
  emits: ["click", "update:modelValue", "change"],
  setup(e, s) {
    var y;
    (y = O()) != null && y.vnode.props;
    const l = p(), t = p(!0);
    let n = p([
      // "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240207113212.png",
      // "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240207173357.png",
      // "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240218221447.jpg",
      // "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240222153642.png",
      // "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240222153607.png",
      // "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20220105175300.png"
    ]), i = p([
      // "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240207113212.png",
      // "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240207173357.png",
      // "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240218221447.jpg",
      // "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240222153642.png",
      // "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240222153607.png",
      // "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20220105175300.png"
    ]), r = 0;
    const a = F({
      transform: "translateX(0px)"
    });
    function d(u, c = "top", o, v, b) {
      const w = c == "top" ? u.scrollTop : c == "left" ? u.scrollLeft : 0, V = o - w, W = performance.now();
      function C() {
        const B = performance.now() - W, f = T(
          B,
          w,
          V,
          v
        );
        c == "top" ? u.scrollTop = f : c == "left" && (u.scrollLeft = f), B < v ? requestAnimationFrame(C) : b && b();
      }
      function T(_, B, f, D) {
        return f * _ / D + B;
      }
      requestAnimationFrame(C);
    }
    const I = P(() => (e.modelValue.length <= e.showCount && (n.value = [...e.modelValue, ...e.modelValue], i.value = [...n.value.slice(0)]), e.dynamicCss["bs-box-width"] = e.showCount * e.dynamicCss["bs-img-width"] + (e.showCount - 1) * e.dynamicCss["bs-img-interval"], Object.assign(L.dynamicCss.default(), e.dynamicCss))), h = (u) => {
      let c = 0, o = null;
      u == "front" ? (o = l.value.children[0], c = o.scrollWidth - o.clientWidth) : u == "backend" && (o = l.value.children[1], c = o.scrollWidth - o.clientWidth), r = r + c, d(
        o,
        "left",
        r,
        5e3,
        () => {
          t.value = !t.value, o.scrollLeft = 0, r = 0, h(t.value ? "front" : "backend");
        }
      );
    };
    return setTimeout(() => {
      h("front");
    }, 1e3), {
      n: J,
      classes: K,
      scrollBlockDom: l,
      toggleScrollBox: t,
      imgList: n,
      imgList1: i,
      dynamicStyle: a,
      dynamicCssBridge: I
    };
  }
}), R = (e, s) => {
  const l = e.__vccOpts || e;
  for (const [t, n] of s)
    l[t] = n;
  return l;
}, U = ["src"], Y = ["src"];
function Z(e, s, l, t, n, i) {
  const r = q("css");
  return z((E(), g(
    "div",
    {
      class: m([e.classes(e.n())]),
      ref: "scrollBlockDom"
    },
    [
      A(
        "div",
        {
          class: m([e.classes(e.n("_wrapper"))]),
          style: k({ opacity: e.toggleScrollBox ? 1 : 0 })
        },
        [
          A(
            "div",
            {
              class: m([e.classes(e.n("_wrapper__inner")), "0"])
            },
            [
              (E(!0), g(
                S,
                null,
                j(e.imgList, (a, d) => (E(), g("img", {
                  class: m([e.n("_wrapper__inner__image")]),
                  key: d,
                  src: a
                }, null, 10, U))),
                128
                /* KEYED_FRAGMENT */
              ))
            ],
            2
            /* CLASS */
          )
        ],
        6
        /* CLASS, STYLE */
      ),
      A(
        "div",
        {
          class: m([e.classes(e.n("_wrapper"))]),
          style: k({ opacity: e.toggleScrollBox ? 0 : 1 })
        },
        [
          A(
            "div",
            {
              class: m([e.classes(e.n("_wrapper__inner")), "1"])
            },
            [
              (E(!0), g(
                S,
                null,
                j(e.imgList1, (a, d) => (E(), g("img", {
                  class: m([e.n("_wrapper__inner__image")]),
                  key: d,
                  src: a
                }, null, 10, Y))),
                128
                /* KEYED_FRAGMENT */
              ))
            ],
            2
            /* CLASS */
          )
        ],
        6
        /* CLASS, STYLE */
      )
    ],
    2
    /* CLASS */
  )), [
    [r, e.dynamicCssBridge]
  ]);
}
const x = /* @__PURE__ */ R(Q, [["render", Z]]), se = M(x, "scroll-block");
export {
  se as ScrollBlock,
  se as default
};
