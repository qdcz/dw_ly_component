import { defineComponent, createVNode, reactive, computed, withDirectives, resolveDirective, inject, ref, onMounted, nextTick, watchEffect, provide, createTextVNode } from "vue";
const withInstall = (comp, extra) => {
  comp.install = function(app) {
    const componentName = !extra ? "vi-" + comp.name.replace(/vi/gi, "").toLowerCase() : `vi-${extra}`;
    app.component(componentName, comp);
  };
  return comp;
};
const isArray = (val) => Array.isArray(val);
function createNamespace(name) {
  const namespace = `vi-${name}`;
  const createBEM = (suffix) => {
    if (!suffix)
      return namespace;
    return suffix.startsWith("-") ? `${namespace}${suffix}` : `${namespace}_${suffix}`;
  };
  const classes2 = (...classes22) => {
    return classes22.map((className) => {
      if (isArray(className)) {
        const [condition, truthy, falsy = null] = className;
        return condition ? truthy : falsy;
      }
      return className;
    });
  };
  return {
    n: createBEM,
    classes: classes2
  };
}
const timePickerProps = {
  clearable: {
    type: [String, Boolean],
    default: false
  },
  isRange: {
    type: [String, Boolean],
    default: false
  },
  disabledHours: {
    type: Array,
    default: []
  },
  disabledMinutes: {
    type: Array,
    default: []
  },
  disabledSeconds: {
    type: Array,
    default: []
  },
  arrowControl: {
    type: [String, Boolean],
    default: ""
  },
  placeholder: {
    type: String,
    default: "Arbitrary time"
  },
  startPlaceholder: String,
  endPlaceholder: String,
  modelValue: {
    type: [String, Number, Boolean],
    default: ""
  },
  dynamicCss: {
    type: Object,
    default: () => {
      return {
        "base-margin-t": "10",
        "base-margin-r": "10",
        "base-margin-b": "10",
        "base-margin-l": "10",
        "input-box-shadow-x": "0",
        "input-box-shadow-y": "0",
        "input-box-shadow-blur": "0",
        "input-box-shadow-spread": "1",
        "input-box-shadow-color": "#dcdfe6",
        "input-hover-box-shadow-x": "0",
        "input-hover-box-shadow-y": "0",
        "input-hover-box-shadow-blur": "0",
        "input-hover-box-shadow-spread": "1",
        "input-hover-box-shadow-color": "#85a2dd",
        "input-active-box-shadow-x": "0",
        "input-active-box-shadow-y": "0",
        "input-active-box-shadow-blur": "0",
        "input-active-box-shadow-spread": "1",
        "input-active-box-shadow-color": "rgb(0, 94, 255)",
        "input-border-radius": "4",
        "input-line-padding-t": "0",
        "input-line-padding-r": "28",
        "input-line-padding-b": "0",
        "input-line-padding-l": "8",
        "input-bg-color": "rgba(255,255,255)",
        "input-fo-color": "#606266",
        "input-line-height": "30",
        "input-width": "200",
        "input-text-alight": "start",
        "popper-bg-color": "#fff",
        "popper-height": "228",
        "popper-border-radius": "8",
        "popper-z-index": "999",
        "popper-box-shadow-x": "0",
        "popper-box-shadow-y": "0",
        "popper-box-shadow-blur": "12",
        "popper-box-shadow-spread": "0",
        "popper-box-shadow-color": "rgba(0, 0, 0, 0.12)",
        "popper-arrow-height": "10",
        "popper-panel-padding-t": "8",
        "popper-panel-padding-r": "4",
        "popper-panel-padding-b": "0",
        "popper-panel-padding-l": "4",
        "popper-footer-height": "36",
        "popper-footer-fo-size": "12",
        "popper-footer-border-top-width": "1",
        "popper-footer-border-top-style": "solid",
        "popper-footer-border-top-color": "rgb(228, 231, 237)",
        "popper-footer-cancel-fo-color": "#303133",
        "popper-footer-ok-fo-color": "skyblue",
        "popper-footer-ok-fo-weight": "800",
        "popper-footer-ok-margin-t": "0",
        "popper-footer-ok-margin-r": "5",
        "popper-footer-ok-margin-b": "0",
        "popper-footer-ok-margin-l": "5",
        "popper-footer-ok-padding-t": "0",
        "popper-footer-ok-padding-r": "5",
        "popper-footer-ok-padding-b": "0",
        "popper-footer-ok-padding-l": "5",
        "popper-spinner-pitch-box-border-top-width": "1",
        "popper-spinner-pitch-box-border-top-style": "solid",
        "popper-spinner-pitch-box-border-top-color": "#e4e7ed",
        "popper-spinner-pitch-box-border-bottom-width": "1",
        "popper-spinner-pitch-box-border-bottom-style": "solid",
        "popper-spinner-pitch-box-border-bottom-color": "#e4e7ed",
        "popper-spinner-number-height": "32",
        "popper-spinner-number-fo-color": "#606266",
        "popper-spinner-number-fo-size": "12",
        "popper-spinner-number-hover-bg-color": "#e0e0e0",
        "popper-spinner-number-active-fo-color": "#000",
        "popper-spinner-number-active-fo-weight": "700",
        "popper-spinner-number-active-hover-bg-color": "rgba($color: #e0e0e0, $alpha: 0)",
        "popper-spinner-number-disabled-fo-color": "rgb(223, 223, 223)",
        "popper-spinner-number-disabled-hover-bg-color": "rgba($color: #e0e0e0, $alpha: 0)",
        "scroll-bar-thumb-width": "8",
        "scrollBarHeight": "60",
        "scrollBarBgColor": "rgb(218, 218, 218)",
        "scrollBarBgColorHover": "skyblue"
      };
    }
  }
};
const TIMEPICKER_INJECTION_KEY = Symbol("time-picker");
const change = function(el, binding) {
  for (let [key, value] of Object.entries(binding.value)) {
    el.style.setProperty("--" + key, value);
  }
};
const Css = {
  mounted(el, binding) {
    change(el, binding);
  },
  updated(el, binding) {
    change(el, binding);
  },
  install(app) {
    app.directive("Css", this);
  }
};
const inputProps = {
  modelValue: {
    type: [String, Number, Array],
    default: ""
  },
  showPassword: {
    type: [String, Boolean],
    default: false
  },
  readonly: {
    type: [String, Boolean],
    default: false
  },
  clearable: {
    type: [String, Boolean],
    default: false
  },
  placeholder: {
    type: String,
    default: "\u8BF7\u9009\u62E9\u60A8\u9700\u8981\u7684\u5185\u5BB9o(*\uFFE3\u25BD\uFFE3*)\u30D6"
  },
  dynamicCss: {
    type: Object,
    default: () => {
      return {
        "input-box-shadow-x": "0",
        "input-box-shadow-y": "0",
        "input-box-shadow-blur": "0",
        "input-box-shadow-spread": "1",
        "input-box-shadow-color": "#dcdfe6",
        "input-box-hover-shadow-x": "0",
        "input-box-hover-shadow-y": "0",
        "input-box-hover-shadow-blur": "0",
        "input-box-hover-shadow-spread": "1",
        "input-box-hover-shadow-color": "#85a2dd",
        "input-box-active-shadow-x": "0",
        "input-box-active-shadow-y": "0",
        "input-box-active-shadow-blur": "0",
        "input-box-active-shadow-spread": "1",
        "input-box-active-shadow-color": "rgb(0, 94, 255)",
        "input-border-radius": "4",
        "input-line-padding-t": "0",
        "input-line-padding-r": "28",
        "input-line-padding-b": "0",
        "input-line-padding-l": "8",
        "input-bg-color": "rgba(255,255,255)",
        "input-fo-color": "#606266",
        "input-line-height": "30",
        "input-width": "200",
        "input-text-alight": "start"
      };
    }
  }
};
const svgIconProps = {
  path: {
    type: String,
    default: `M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 
        764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 
        45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z`
  },
  height: {
    type: [String, Number],
    default: "12px"
  },
  width: {
    type: [String, Number],
    default: "12px"
  },
  modelValue: {
    type: [String, Number, Boolean],
    default: ""
  }
};
const {
  n: n$4,
  classes: classes$4
} = createNamespace("input-svg-icon");
var VIInputSvgIcon = defineComponent({
  name: "VIInputSvgIcon",
  emits: ["click"],
  props: svgIconProps,
  setup(props, ctx) {
    const handleClick = function(e) {
      ctx.emit("click", e);
    };
    return () => createVNode("svg", {
      "class": [classes$4(n$4()), "icon"],
      "height": props.height,
      "width": props.width,
      "viewBox": "0 0 1024 1024",
      "xmlns": "http://www.w3.org/2000/svg",
      "onClick": handleClick
    }, [createVNode("path", {
      "fill": "currentColor",
      "d": props.path
    }, null)]);
  }
});
const {
  n: n$3,
  classes: classes$3
} = createNamespace("input");
var VIInput = defineComponent({
  name: "VIInput",
  emits: ["focus", "blur", "click", "update:modelValue", "close"],
  directives: {
    css: Css
  },
  props: inputProps,
  components: [VIInputSvgIcon],
  setup(props, ctx) {
    const closeSvgPath = "M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z";
    const data = reactive({
      softFocus: false,
      isHover: false
    });
    const handleInputClick = function(e) {
      if (isDisabled.value)
        return;
      ctx.emit("click", e);
    };
    const handleCloseIconClick = function(e) {
      if (isDisabled.value)
        return;
      ctx.emit("update:modelValue", e.target.value);
      ctx.emit("close");
      e.stopPropagation();
    };
    const handleFocus = function(e) {
      if (isDisabled.value)
        return;
      ctx.emit("focus", e);
      data.softFocus = true;
    };
    const handleBlur = function(e) {
      if (isDisabled.value)
        return;
      ctx.emit("blur", e);
      data.softFocus = false;
    };
    const handleMouseEn = function(e) {
      if (isDisabled.value)
        return;
      data.isHover = true;
    };
    const handleMouseOu = function(e) {
      if (isDisabled.value)
        return;
      data.isHover = false;
    };
    const handleChange = function(e) {
      if (isDisabled.value)
        return;
      ctx.emit("update:modelValue", e.target.value);
    };
    const handleInput = function(e) {
      if (isDisabled.value)
        return;
      ctx.emit("update:modelValue", e.target.value);
    };
    const dynamicCssBridge = computed(() => Object.assign(inputProps.dynamicCss.default(), props.dynamicCss));
    const readonlyBridge = computed(() => {
      if (typeof props.readonly == "string") {
        return true;
      } else {
        return props.readonly;
      }
    });
    const isClearable = computed(() => {
      if (typeof props.clearable == "string") {
        return true;
      } else {
        return props.clearable;
      }
    });
    const isShowPassword = computed(() => {
      if (typeof props.showPassword == "string") {
        return true;
      } else {
        return props.showPassword;
      }
    });
    const isActive = computed(() => data.softFocus ? "active" : "");
    const isDisabled = computed(() => !!readonlyBridge.value ? "disabled" : "");
    return () => withDirectives(createVNode("div", {
      "class": [classes$3(n$3()), isActive.value, isDisabled.value],
      "onClick": handleInputClick,
      "onmouseenter": handleMouseEn,
      "onmouseleave": handleMouseOu
    }, [createVNode("input", {
      "class": [n$3("_inner")],
      "placeholder": props.placeholder,
      "onFocus": handleFocus,
      "onBlur": handleBlur,
      "readonly": readonlyBridge.value,
      "value": props.modelValue,
      "onChange": handleChange,
      "onInput": handleInput,
      "type": isShowPassword.value ? "password" : "text"
    }, null), props.modelValue && isClearable.value && data.isHover ? createVNode(VIInputSvgIcon, {
      "class": "icon",
      "path": closeSvgPath,
      "onClick": handleCloseIconClick
    }, null) : ""]), [[resolveDirective("css"), dynamicCssBridge.value || {}]]);
  }
});
const {
  n: n$2,
  classes: classes$2
} = createNamespace("popper");
var VITimePickerPopper = defineComponent({
  name: "VITimePickerPopper",
  emits: ["focus", "blur", "click"],
  props: ["active"],
  setup(props, ctx) {
    let {
      timePickerRef
    } = inject(TIMEPICKER_INJECTION_KEY);
    const data = reactive({
      parentRect: {
        x: 0,
        y: 0
      },
      dropdownTop: 0
    });
    const arrowRef = ref(null);
    const contentRef = ref(null);
    const reSetDropdownTop = () => {
      nextTick(() => {
        data.parentRect = timePickerRef.value.getBoundingClientRect();
        data.dropdownTop = data.parentRect.height + 10 + "px";
      });
    };
    onMounted(() => reSetDropdownTop());
    return () => {
      var _a, _b;
      return createVNode("div", {
        "class": [n$2(""), props.active ? "active" : ""],
        "style": {
          top: data.dropdownTop
        }
      }, [createVNode("div", {
        "ref": arrowRef,
        "class": [n$2("_arrow")]
      }, [props.active]), createVNode("div", {
        "ref": contentRef,
        "class": [classes$2(n$2("_content"))]
      }, [createVNode("div", {
        "class": [classes$2(n$2("_inner"))]
      }, [(_b = (_a = ctx.slots)["default"]) == null ? void 0 : _b.call(_a)])])]);
    };
  }
});
const {
  n: n$1,
  classes: classes$1
} = createNamespace("scroll-bar");
var VIScrollBar = defineComponent({
  name: "VIScrollBar",
  emits: ["focus", "blur", "click", "scroll", "getRef"],
  props: ["dynamicCss"],
  directives: {
    css: Css
  },
  setup(props, ctx) {
    const scrollBarRef = ref(null);
    const thumbRef = ref(null);
    const scrollBoxRef = ref(null);
    const data = reactive({
      realMargin: 0,
      realPadding: 0,
      viewHeight: 0,
      realHeight: "0",
      maxScrollBoxRange: 0,
      proportion: 0,
      scrollBarHeight: 0,
      maxScrollBarRange: 0,
      scrollBarMovePropor: 0,
      scrollBoxMovePropor: 0,
      translateY: 0,
      startY: "",
      moveY: "",
      mouseMoving: false
    });
    onMounted(() => {
      nextTick(() => {
        data.scrollBoxRealHeight = window.getComputedStyle(scrollBoxRef.value).height.replace("px", "") * 1;
        data.scrollBarViewHeight = window.getComputedStyle(scrollBarRef.value).height.replace("px", "") * 1;
        data.scrollBoxMaxRange = data.scrollBoxRealHeight - data.scrollBarViewHeight;
        ctx.emit && ctx.emit("getRef", scrollBarRef);
      });
    });
    const isShowThumb = computed(() => {
      return data.scrollBarHeight < data.realHeight.replace("px", "") * 1;
    });
    const onScroll = function(e) {
      ctx.emit("scroll", e);
    };
    const thumbMouseDown = function(e) {
      document.addEventListener("mousedown", documentMouseDown);
      document.addEventListener("mousemove", documentMouseMove);
    };
    const documentMouseDown = function(e) {
      data.mouseMoving = true;
      data.startY = e.clientY;
    };
    const documentMouseMove = function(e) {
      data.moveY = data.startY - e.clientY;
      scrollBoxPosition(data.moveY);
    };
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", documentMouseMove);
      document.removeEventListener("mousedown", documentMouseDown);
      data.startY = 0;
      data.moveY = 0;
      if (data.mouseMoving) {
        data.translateY = data._move;
      }
      data.mouseMoving = false;
    });
    const scrollBoxPosition = function() {
      let _move = 0;
      if (data.moveY < 0) {
        _move = data.translateY + Math.abs(data.moveY);
      } else if (data.moveY >= 0) {
        _move = data.translateY - Math.abs(data.moveY);
      }
      if (_move < 0) {
        _move = 0;
      }
      if (_move > data.maxScrollBarRange) {
        _move = data.maxScrollBarRange;
      }
      data._move = _move;
      thumbRef.value.style.transform = `translateY(${_move}px)`;
      scrollBarRef.value.scrollTop = Math.abs(data.scrollBoxMovePropor * _move);
    };
    return () => {
      var _a, _b;
      return withDirectives(createVNode("div", {
        "class": [classes$1(n$1())]
      }, [createVNode("div", {
        "class": n$1("left"),
        "ref": scrollBarRef,
        "onScroll": onScroll
      }, [createVNode("div", {
        "ref": scrollBoxRef
      }, [(_b = (_a = ctx.slots)["default"]) == null ? void 0 : _b.call(_a)])]), isShowThumb.value ? createVNode("div", {
        "ref": thumbRef,
        "class": n$1("right"),
        "style": {
          height: data.scrollBarHeight + "px"
        },
        "onmousedown": thumbMouseDown
      }, null) : ""]), [[resolveDirective("css"), Object.assign(props.dynamicCss || {}, {})]]);
    };
  }
});
const {
  n,
  classes
} = createNamespace("time-picker");
var TimePicker = defineComponent({
  name: "VITimePicker",
  emits: ["click", "inputClick", "closeClick", "cancelClick", "okClick", "update:modelValue"],
  directives: {
    css: Css
  },
  props: timePickerProps,
  components: [VIInput, VITimePickerPopper, VIScrollBar],
  setup(props, ctx) {
    const moveTime = [null, null, null];
    let prevModelValue = "";
    const returnString = (val) => val < 10 ? "0" + val : val + "";
    const createUUID = () => {
      return "xxxxxxxx".replace(/[xy]/g, function(a) {
        var b = 0 | 16 * Math.random(), c = "x" == a ? b : 8 | 3 & b;
        return c.toString(16);
      });
    };
    const timePickerRef = ref();
    let hourListRef = ref();
    let minuteListRef = ref();
    let secondListRef = ref();
    const data = reactive({
      uuid: createUUID(),
      popperVisible: false,
      softFocus: false,
      isSubmit: false,
      hourList: [],
      minuteList: [],
      secondList: [],
      currentSelect: ["", "", ""]
    });
    const getHourListRef = (e) => hourListRef = e;
    const getMinuteListRef = (e) => minuteListRef = e;
    const getSecondListRef = (e) => secondListRef = e;
    const blur = function() {
      data.popperVisible = false;
      data.softFocus = false;
    };
    const mousedown = function(e) {
      let softFocus = false;
      for (let i = 0; i < e.path.length; i++) {
        let item = e.path[i];
        if (item.classList && item.classList.value) {
          let _class = item.getAttribute("class");
          if (_class.includes("-time-picker") && item.dataset.id == data.uuid) {
            softFocus = true;
            break;
          }
        }
      }
      if (!softFocus) {
        blur();
        data.isSubmit = true;
      }
    };
    document.addEventListener("mousedown", mousedown);
    const inputFocus = function(e) {
    };
    const inputBlur = function(e) {
    };
    const boxClick = function() {
      ctx.emit && ctx.emit("click");
    };
    const inputClick = function(e) {
      data.popperVisible = !data.popperVisible;
      data.isSubmit = false;
      if (!props.modelValue) {
        getCurrentDate();
      }
      ctx.emit && ctx.emit("inputClick");
    };
    const inputClose = function() {
      data.popperVisible = false;
      ctx.emit && ctx.emit("closeClick");
    };
    const footerBtnClick = function(e) {
      let {
        type
      } = e.target.dataset;
      data.popperVisible = false;
      if (type == "cancel") {
        data.isSubmit = false;
        ctx.emit && ctx.emit("update:modelValue", prevModelValue);
        ctx.emit && ctx.emit("cancelClick");
        changeSpinnerPosition();
      } else if (type == "ok") {
        data.isSubmit = true;
        ctx.emit && ctx.emit("okClick", data.currentSelect);
      }
    };
    const spinnerNumClick = function(type, target) {
      const fieldMap = {
        index: {
          hour: "0",
          minute: "1",
          second: "2"
        },
        ref: {
          hour: hourListRef,
          minute: minuteListRef,
          second: secondListRef
        }
      };
      let {
        num,
        disabled
      } = target.dataset;
      if (num) {
        if (disabled == "true") {
          return;
        }
        data.currentSelect[fieldMap["index"][type]] = num;
        let scrollTop = data.currentSelect[fieldMap["index"][type]] * dynamicCssBridge.value["popper-spinner-number-height"] * 1;
        fieldMap["ref"][type].value.scrollTop = scrollTop;
      }
    };
    const hourClick = function(e) {
      spinnerNumClick("hour", e.target);
    };
    const minuteClick = function(e) {
      spinnerNumClick("minute", e.target);
    };
    const secondClick = function(e) {
      spinnerNumClick("second", e.target);
    };
    const scrollBoxMove = function(target, type) {
      const fieldMap = {
        timers: {
          hour: 0,
          minute: 1,
          second: 2
        },
        ableRange: {
          hour: "disabledHours",
          minute: "disabledMinutes",
          second: "disabledSeconds"
        }
      };
      let scrollTop = target.scrollTop;
      let num = Math.round(scrollTop / dynamicCssBridge.value["popper-spinner-number-height"] * 1);
      let hitDisable = props[fieldMap["ableRange"][type]].filter((i) => i == num);
      if (hitDisable.length > 0)
        return;
      data.currentSelect[fieldMap["timers"][type]] = returnString(num);
      let moveToScrollTop = num * dynamicCssBridge.value["popper-spinner-number-height"] * 1;
      if (moveTime[fieldMap["timers"][type]]) {
        clearTimeout(moveTime[fieldMap["timers"][type]]);
        moveTime[fieldMap["timers"][type]] = null;
      }
      moveTime[fieldMap["timers"][type]] = setTimeout(() => {
        target.scrollTop = moveToScrollTop;
      }, 200);
    };
    const hourScroll = function(e) {
      scrollBoxMove(e.target, "hour");
    };
    const minuteScroll = function(e) {
      scrollBoxMove(e.target, "minute");
    };
    const secondScroll = function(e) {
      scrollBoxMove(e.target, "second");
    };
    const generateTimeData = () => {
      data.hourList = new Array(24).fill(0).map((item, index) => index < 10 ? "0" + index : index + "");
      data.minuteList = new Array(60).fill(0).map((item, index) => index < 10 ? "0" + index : index + "");
      data.secondList = new Array(60).fill(0).map((item, index) => index < 10 ? "0" + index : index + "");
    };
    const changeSpinnerPosition = function() {
      if (prevModelValue) {
        hourListRef.value.scrollTop = prevModelValue.slice(0, 2) * dynamicCssBridge.value["popper-spinner-number-height"] * 1;
        minuteListRef.value.scrollTop = prevModelValue.slice(3, 5) * dynamicCssBridge.value["popper-spinner-number-height"] * 1;
        secondListRef.value.scrollTop = prevModelValue.slice(6, 8) * dynamicCssBridge.value["popper-spinner-number-height"] * 1;
      }
    };
    const getCurrentDate = () => {
      let d = new Date();
      let h = d.getHours(), m = d.getMinutes(), s = d.getSeconds();
      data.currentSelect[0] = returnString(h);
      data.currentSelect[1] = returnString(m);
      data.currentSelect[2] = returnString(s);
      hourListRef.value.scrollTop = data.currentSelect[0] * dynamicCssBridge.value["popper-spinner-number-height"] * 1;
      minuteListRef.value.scrollTop = data.currentSelect[1] * dynamicCssBridge.value["popper-spinner-number-height"] * 1;
      secondListRef.value.scrollTop = data.currentSelect[2] * dynamicCssBridge.value["popper-spinner-number-height"] * 1;
      ctx.emit && ctx.emit("update:modelValue", data.currentSelect[0] + ":" + data.currentSelect[1] + ":" + data.currentSelect[2]);
    };
    onMounted(() => {
      generateTimeData();
      prevModelValue = props.modelValue;
    });
    const dynamicCssBridge = computed(() => Object.assign(timePickerProps.dynamicCss.default(), props.dynamicCss));
    const input_dynamicCssBridge = computed(() => {
      let obj = {};
      for (let key in dynamicCssBridge.value) {
        if (key.includes("input"))
          obj[key] = dynamicCssBridge.value[key];
      }
      return obj;
    });
    const modelValueBridge = computed({
      get() {
        if (props.modelValue) {
          let splitArr = props.modelValue.split(":");
          let h = props.disabledHours.findIndex((i) => i == splitArr[0]) != -1;
          let m = props.disabledMinutes.findIndex((i) => i == splitArr[1]) != -1;
          let s = props.disabledSeconds.findIndex((i) => i == splitArr[2]) != -1;
          if (h || m || s) {
            ctx.emit && ctx.emit("update:modelValue", "");
          }
        }
        return props.modelValue;
      },
      set(val) {
        ctx.emit && ctx.emit("update:modelValue", val);
      }
    });
    const clearableBridge = computed(() => props.clearable);
    const isDisabledPublic = function(type, val) {
      const disabledMap = {
        hour: "disabledHours",
        minute: "disabledMinutes",
        second: "disabledSeconds"
      };
      let flag = false;
      props[disabledMap[type]].forEach((i) => i == val ? flag = true : "");
      return flag;
    };
    const isDisabledHour = computed(() => {
      return function(val) {
        return isDisabledPublic("hour", val);
      };
    });
    const isDisabledMinutes = computed(() => {
      return function(val) {
        return isDisabledPublic("minute", val);
      };
    });
    const isDisabledSecond = computed(() => {
      return function(val) {
        return isDisabledPublic("second", val);
      };
    });
    watchEffect(() => {
      let hour = data.currentSelect[0];
      let minute = data.currentSelect[1];
      let second = data.currentSelect[2];
      if (!hour && !minute && !second) {
        ctx.emit && ctx.emit("update:modelValue", "");
        return;
      }
      let str = hour + ":" + minute + ":" + second;
      ctx.emit && ctx.emit("update:modelValue", str);
    });
    watchEffect(() => {
      if (data.isSubmit) {
        prevModelValue = props.modelValue;
        ctx.emit && ctx.emit("update:modelValue", prevModelValue);
      }
    });
    provide(TIMEPICKER_INJECTION_KEY, {
      timePickerRef
    });
    return () => withDirectives(createVNode("div", {
      "ref": timePickerRef,
      "data-id": data.uuid,
      "class": [classes(n())],
      "onClick": boxClick
    }, [createVNode(VIInput, {
      "placeholder": props.placeholder,
      "modelValue": modelValueBridge.value,
      "onUpdate:modelValue": ($event) => modelValueBridge.value = $event,
      "onFocus": inputFocus,
      "onBlur": inputBlur,
      "onClose": inputClose,
      "dynamicCss": input_dynamicCssBridge.value || {},
      "clearable": clearableBridge.value,
      "onClick": inputClick
    }, null), createVNode(VITimePickerPopper, {
      "active": data.popperVisible
    }, {
      default: () => [createVNode("div", {
        "className": "time-panel"
      }, [createVNode("div", {
        "className": "time-panel__content"
      }, [createVNode(VIScrollBar, {
        "onGetRef": getHourListRef,
        "className": "time-panel__spinner time-panel__popper-spinner--hour",
        "onScroll": hourScroll
      }, {
        default: () => [createVNode("ul", {
          "onClick": hourClick
        }, [data.hourList.map((i) => createVNode("li", {
          "data-num": i,
          "data-disabled": isDisabledHour.value(i),
          "class": [data.currentSelect[0] == i ? "active" : "", isDisabledHour.value(i) ? "disabled" : ""]
        }, [i]))])]
      }), createVNode(VIScrollBar, {
        "onGetRef": getMinuteListRef,
        "className": "time-panel__spinner time-panel__popper-spinner--minutes",
        "onScroll": minuteScroll
      }, {
        default: () => [createVNode("ul", {
          "onClick": minuteClick
        }, [data.minuteList.map((i) => createVNode("li", {
          "data-num": i,
          "data-disabled": isDisabledMinutes.value(i),
          "class": [data.currentSelect[1] == i ? "active" : "", isDisabledMinutes.value(i) ? "disabled" : ""]
        }, [i]))])]
      }), createVNode(VIScrollBar, {
        "onGetRef": getSecondListRef,
        "className": "time-panel__spinner time-panel__popper-spinner--second",
        "onScroll": secondScroll
      }, {
        default: () => [createVNode("ul", {
          "onClick": secondClick
        }, [data.secondList.map((i) => createVNode("li", {
          "data-num": i,
          "data-disabled": isDisabledSecond.value(i),
          "class": [data.currentSelect[2] == i ? "active" : "", isDisabledSecond.value(i) ? "disabled" : ""]
        }, [i]))])]
      })]), createVNode("div", {
        "className": "time-panel__footer",
        "onClick": footerBtnClick
      }, [createVNode("div", {
        "data-type": "cancel",
        "className": "time-panel__footer_cancel"
      }, [createTextVNode("Cancel")]), createVNode("div", {
        "data-type": "ok",
        "className": "time-panel__footer_ok"
      }, [createTextVNode("OK")])])])]
    })]), [[resolveDirective("css"), dynamicCssBridge.value || {}]]);
  }
});
const VITimePicker = withInstall(TimePicker, "time-picker");
export { VITimePicker, VITimePicker as default };
