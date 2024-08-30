import { defineComponent as z, getCurrentInstance as N, ref as $, reactive as T, computed as D, onMounted as x, withDirectives as U, createVNode as d, resolveDirective as X, nextTick as Y } from "vue";
const q = (t, s) => (t.install = function(f) {
  if (t) {
    const o = t.name || t.__name;
    if (o || s) {
      const r = s ? `dw-${s}` : "dw-" + o.replace(/dw/gi, "").toLowerCase();
      f.component(r, t);
    } else
      console.error(t, s, !s);
  }
}, t), F = (t) => Array.isArray(t);
function J(t) {
  const s = `vi-${t}`;
  return {
    n: (r) => r ? r.startsWith("-") ? `${s}${r}` : `${s}_${r}` : s,
    classes: (...r) => r.map((h) => {
      if (F(h)) {
        const [m, i, u = null] = h;
        return m ? i : u;
      }
      return h;
    })
  };
}
const V = function(t, s) {
  for (let [f, o] of Object.entries(s.value))
    t.style.setProperty("--" + f, o);
}, K = {
  mounted(t, s) {
    V(t, s);
  },
  updated(t, s) {
    V(t, s);
  },
  install(t) {
    t.directive("Css", this);
  }
}, j = {
  // 超出高度限制自动滚动
  heightScroll: {
    type: Boolean,
    default: !1
    // 设置为限制高度超出滚动就要设置下height，设置为false的时候height将失效默认为auto
  },
  height: {
    type: String,
    default: "500"
  },
  width: {
    type: String,
    default: "600"
  },
  backgroundImg: {
    type: Object,
    default: () => ({
      leftBackgroundImg: "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/demo%20icon/Group%201321316955.png",
      leftBackgroundImgActive: "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/demo%20icon/Group%201321316954.png",
      rightBackgroundImg: "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/demo%20icon/Group%201321316957.png",
      rightBackgroundImgActive: "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/demo%20icon/Group%201321316958.png"
    })
  },
  dynamicCss: {
    type: Object,
    default: () => ({
      // 每项之间的间隔（设置的上外边距，第一个不生效）
      "item-mar-t": "10",
      "item-pad-tb": "2",
      // "item-pad-lr": "20",
      // 每项激活的字体颜色
      "item-color_act": "#260bd984",
      // 左边文字正常状态
      "left-color": "#166947e4",
      "left-fo-wei": "600",
      "left-fo-size": "20",
      "left-fo-fam": "monospace",
      "left-pad-r": "30",
      "left-pad-l": "10",
      // 右边文字正常状态
      "right-color": "#166947e4",
      "right-fo-weight": "600",
      "right-fo-size": "16",
      "right-fo-family": "monospace",
      "right-pad-r": "2",
      "right-pad-l": "44",
      // 左边文字悬浮颜色
      "left-color_hov": "#65de06ff",
      // 右边文字悬浮颜色
      "right-color_hov": "#fff",
      // 线激活颜色
      "line-color": "#b9dffce4",
      "line-color_act": "#fc0",
      "line-color_hov": "#55b2f8e4",
      "line-wid": "2",
      "line-wid_hov": "4",
      "line-wid_act": "4",
      // 激活状态下的动画时长
      "ani-time": "2"
    })
  },
  // 数据列表
  modelValue: {
    type: Array,
    default: [
      {
        name: "刘一",
        id: Math.random() * 1e7,
        type: "left",
        link: [1, 5, 7]
      },
      {
        name: "陈二",
        id: Math.random() * 1e7,
        type: "left",
        link: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
      },
      {
        name: "张三",
        id: Math.random() * 1e7,
        type: "left",
        link: [8, 6]
      },
      {
        name: "李四",
        id: Math.random() * 1e7,
        type: "left",
        link: [2, 3, 4]
      },
      {
        name: "王五",
        id: Math.random() * 1e7,
        type: "left",
        link: [9]
      },
      {
        name: "赵六",
        id: Math.random() * 1e7,
        type: "left",
        link: [10, 11]
      },
      {
        name: "孙七",
        id: Math.random() * 1e7,
        type: "left",
        link: [13]
      },
      {
        name: "周八",
        id: Math.random() * 1e7,
        type: "left",
        link: [1, 13]
      },
      {
        name: "吴九",
        id: Math.random() * 1e7,
        type: "left",
        link: [5]
      },
      {
        name: "郑十",
        id: Math.random() * 1e7,
        type: "left",
        link: [2]
      },
      { name: "可弹性拓展网盘", type: "right", id: 1 },
      { name: "智慧工单管理系统", type: "right", id: 2 },
      { name: "大数据中台", type: "right", id: 3 },
      { name: "ERP管理", type: "right", id: 4 },
      { name: "gis可视化系统", type: "right", id: 5 },
      { name: "矿业管理系统", type: "right", id: 6 },
      { name: "帝网集成中心", type: "right", id: 7 },
      { name: "人事档案管理中心", type: "right", id: 8 },
      { name: "营销系统3.0", type: "right", id: 9 },
      { name: "东湖小镇数字孪生", type: "right", id: 10 },
      { name: "大模型调用中心", type: "right", id: 11 },
      { name: "业务中心中台", type: "right", id: 12 },
      { name: "政务系统", type: "right", id: 13 }
    ]
  }
}, {
  n: c
} = J("sankey-diagram"), Q = /* @__PURE__ */ z({
  name: "sankeyDiagram",
  emits: ["update:width", "select"],
  directives: {
    css: K
  },
  props: j,
  setup(t, s) {
    var E;
    const o = "onUpdate:modelValue" in (((E = N()) == null ? void 0 : E.vnode.props) || {}), r = $(null), h = $(null), m = $(null), i = T({
      // 激活的元素id
      activeDomsIds: [],
      isActive: !1,
      // 存储左侧和右侧的每个子元素的宽度和高度
      leftItemHeight: 0,
      leftItemWidth: 0,
      rightItemHeight: 0,
      rightItemWidth: 0,
      centerBoxWidth: 0,
      // 画线的位置信息
      linkData: [],
      // svg中path元素的path属性
      svg_path_d: [],
      // svg中path元素的左右关联的id合集
      svg_path_ids: []
    }), u = D(() => {
      const e = Object.assign(j.dynamicCss.default(), t.dynamicCss);
      return e["left-bg-image"] = `url(${t.backgroundImg.leftBackgroundImg})`, e["left-bg-image_active"] = `url(${t.backgroundImg.leftBackgroundImgActive})`, e["right-bg-image"] = `url(${t.backgroundImg.rightBackgroundImg})`, e["right-bg-image_active"] = `url(${t.backgroundImg.rightBackgroundImgActive})`, e;
    }), p = D({
      get() {
        return t.modelValue.filter((e) => e.type == "left");
      },
      set(e) {
        o && s.emit("update:modelValue", e);
      }
    }), B = D({
      get() {
        return t.modelValue.filter((e) => e.type == "right");
      },
      set(e) {
        o && s.emit("update:modelValue", e);
      }
    }), M = (e = "left", n, l) => {
      t.modelValue.filter((a) => a.type == e).forEach((a, g) => {
        let k = n, v = 0, y = g * l + l / 2;
        const I = Number(u.value["item-mar-t"]);
        g == 0 ? v = y : v = y + I * g;
        const _ = [k, v];
        i.linkData.push({
          id: a.id,
          position: _
        });
      });
    }, P = () => {
      let e = [], n = [];
      for (let l = 0; l < p.value.length; l++) {
        const a = p.value[l];
        if (a.link && a.link.length > 0 && i.linkData && i.linkData.length > 0)
          for (let g = 0; g < a.link.length; g++) {
            const k = a.link[g], v = i.linkData.filter((b) => b.id == a.id)[0], y = i.linkData.filter((b) => b.id == k)[0], I = `${0},${v.position[1]}`, _ = `${y.position[0]},${y.position[1]}`, O = `M ${I} ${_}`;
            e.push(O), n.push(`${a.id},${k}`);
          }
      }
      return {
        list: e,
        ids: n
      };
    }, R = () => {
      Y(() => {
        i.leftItemHeight = r.value.children[0].getBoundingClientRect().height, i.leftItemWidth = r.value.clientWidth, i.rightItemHeight = m.value.children[0].getBoundingClientRect().height, i.rightItemWidth = m.value.clientWidth, i.centerBoxWidth = h.value.clientWidth, M("left", i.leftItemWidth, i.leftItemHeight), M("right", i.centerBoxWidth, i.rightItemHeight);
        const {
          list: e,
          ids: n
        } = P();
        i.svg_path_d = e, i.svg_path_ids = n;
        let l = p.value.length, a = B.value.length;
        h.value.style.height = Math.max(i.rightItemHeight * a + u.value["item-mar-t"] * (a - 1), i.leftItemHeight * l + u.value["item-mar-t"] * (l - 1)) + "px";
      });
    }, W = () => {
      const e = {};
      return [...Array.from(r.value.children), ...Array.from(h.value.children), ...Array.from(m.value.children)].forEach((l) => {
        let a = l.getAttribute("data-id");
        a && (e[a] = l);
      }), e;
    };
    x(() => {
      R();
    });
    const S = function(e) {
      const n = W();
      A(n), e.type == "left" ? [...e.link, e.id].forEach((l) => {
        i.activeDomsIds.push(l), n[l].classList.add("active"), i.svg_path_ids.forEach((a) => {
          a == `${e.id},${l}` && (i.activeDomsIds.push(a), n[a].classList.add("active"));
        });
      }) : e.type == "right" && (p.value.forEach((l) => {
        l.link && l.link.length > 0 && l.link.findIndex((a) => a == e.id) != -1 && (i.activeDomsIds.push(l.id), n[l.id].classList.add("active"), i.svg_path_ids.forEach((a) => {
          a == `${l.id},${e.id}` && (i.activeDomsIds.push(a), n[a].classList.add("active"));
        }), i.activeDomsIds.push(e.id), n[e.id].classList.add("active"));
      }), i.activeDomsIds.push(e.id)), s.emit && s.emit("select", e);
    }, A = (e) => {
      e = e || W();
      let n = i.activeDomsIds.pop();
      for (; n; )
        e[n].classList.remove("active"), n = i.activeDomsIds.pop(), n && e[n].classList.remove("active");
    };
    s.expose({
      clearAllActive: A
    });
    const L = () => d("ul", {
      class: c("left"),
      ref: r
    }, [p.value.map((e) => C(e))]), w = () => d("ul", {
      class: c("right"),
      ref: m
    }, [B.value.map((e) => C(e, "right"))]), C = (e, n = "left") => d("li", {
      class: [c(`${n}__item`), t.heightScroll ? "" : "fullParent"],
      key: e.id,
      "data-id": e.id,
      onClick: S.bind(this, e)
    }, [e.name]), H = (e) => d("svg", {
      class: c("center"),
      ref: h
    }, [d("defs", null, [d("filter", {
      id: "glow",
      x: "-50%",
      y: "-50%",
      width: "200%",
      height: "200%"
    }, null)]), i.svg_path_d.map((n, l) => G(n, i.svg_path_ids[l]))]), G = (e, n) => d("path", {
      class: c("center__line"),
      d: e,
      "data-id": n
    }, null);
    return () => U(d("div", {
      class: c(),
      style: {
        height: t.heightScroll ? t.height + "px" : "auto",
        width: t.width + "px"
      }
    }, [t.heightScroll ? d("div", {
      class: c("scroll-wrapper")
    }, [d("div", {
      class: c("scroll")
    }, [L(), H(), w()])]) : d("div", {
      class: c("scroll")
    }, [L(), H(), w()])]), [[X("css"), u.value || {}]]);
  }
}), ee = q(Q, "sankey-diagram");
export {
  ee as SankeyDiagram,
  ee as default
};
