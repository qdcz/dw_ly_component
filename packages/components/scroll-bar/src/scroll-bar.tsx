import {
  defineComponent,
  computed,
  provide,
  watch,
  ref,
  reactive,
  onMounted,
  nextTick,
} from "vue";
// import { useResizeObserver } from "@vueuse/core";
import { createNamespace } from "@dw-ui/utils/components";
import { scrollBarProps, data } from "./scroll-bar_p";
import { directionType } from "./thumb_p";
import css from "@dw-ui/directives/css";
import { SCROLLBAR_INJECTION_KEY } from "@dw-ui/tokens/scroll-bar";
const { n } = createNamespace("scroll-bar");

import thumb from "./thumb";

export default defineComponent({
  name: "ScrollBar",
  emits: ["update:width", 'scroll'],
  directives: { css },
  props: scrollBarProps,
  // expose:['setScrollTop','setScrollLeft','setScrollTop'],
  components: {
    "scroll-bar-thumb": thumb,
  },
  setup(props: any, ctx) {
    /**
     * const
     */
    let stopResizeObserver: (() => void) | undefined = undefined;
    let __observer: any = null;
    const watchFn = (AddNodeList: NodeList | any): void => {
      containerInfoCompute(AddNodeList);
      return;
    };

    /**
     * refs
     */
    const scrollBarRef: any = ref<HTMLDivElement>();
    const scrollBarRealViewRef = ref<HTMLDivElement>();
    const thumbRef = ref<HTMLDivElement>();

    /**
     * data
     */
    const data: data = reactive({
      wrapperInnerRealHeight: 0,
      wrapperInnerRealWidth: 0,
      wrapperInnerMaxiMoveRangeY: 0,
      wrapperInnerMaxiMoveRangeX: 0,
      wrapperInnerMaxiMoveProportionY: 0,
      wrapperInnerMaxiMoveProportionX: 0,
      thumbHeightProportion: 0,
      thumbWidthProportion: 0,
      thumbHeight: "",
      thumbWidth: "",
      thumbRatioX: "",
      thumbRatioY: "",
      thumbRatioYMaxRange: 0,
      thumbRatioXMaxRange: 0,
      thumbRatioYProportion: 0,
      thumbRatioXProportion: 0,

      cacheContainerWidth: "",
    });

    let IsMouseIn = ref(false);

    /**
     * watch
     *
     */
    watch(
      () => props.noResize,
      (noResize) => {
        if (noResize) {
          stopResizeObserver?.();
          // 停止观察
          __observer?.disconnect();
        } else {
          // { stop: stopResizeObserver } = useResizeObserver(resize$, update);
          // stopResizeListener = useEventListener('resize', update)
          __observer = new MutationObserver(watchFn);
          nextTick(() => {
            __observer.observe(scrollBarRealViewRef.value as Node, {
              attributes: true,
              childList: true,
              subtree: true,
            });
          });
        }
      },
      { immediate: true }
    );

    /**
     * computed
     */
    const dynamicCssBridge = computed(() =>
      Object.assign(scrollBarProps.dynamicCss.default(), props.dynamicCss)
    );

    const heightBridge = computed(() => props.height);
    const widthBridge = computed({
      get() {
        return data.cacheContainerWidth;
      },
      set(v: string): void {
        data.cacheContainerWidth = v;
      },
    });

    const thumbHeightBridge = computed({
      get() {
        return data.thumbHeight;
      },
      set(v): void {
        data.thumbHeight = v;
      },
    });

    const thumbWidthBridge = computed({
      get() {
        return data.thumbWidth;
      },
      set(v): void {
        data.thumbWidth = v;
      },
    });

    const thumbRatioXBridge = computed({
      get() {
        return data.thumbRatioX;
      },
      set(v): void {
        data.thumbRatioX = v;
      },
    });

    const thumbRatioYBridge = computed({
      get() {
        return data.thumbRatioY;
      },
      set(v): void {
        data.thumbRatioY = v;
      },
    });

    const thumbRatioYMaxRangeBridge = computed(() => data.thumbRatioYMaxRange);
    const thumbRatioXMaxRangeBridge = computed(() => data.thumbRatioXMaxRange);

    const wrapperInnerMaxiMoveProportionYBridge = computed(
      () => data.wrapperInnerMaxiMoveProportionY
    );
    const wrapperInnerMaxiMoveProportionXBridge = computed(
      () => data.wrapperInnerMaxiMoveProportionX
    );

    /**
     * other fn
     */
    const thumbMoveY = (scrollTop: number): void => {
      data.thumbRatioY = `translateY(${String(data.thumbRatioYProportion * scrollTop) + "px"
        })`;
      return;
    };

    const thumbMoveX = (scrollLeft: number): void => {
      data.thumbRatioX = `translateX(${String(data.thumbRatioXProportion * scrollLeft) + "px"
        })`;
      return;
    };

    const setScrollTop = (num: number): void => {
      scrollBarRef.value.scrollTop = num
    }
    const setScrollLeft = (num: number): void => {
      scrollBarRef.value.scrollLeft = num
    }
    const setScrollTo = (numL: number, numT: number): void => {
      setScrollTop(numL);
      setScrollLeft(numT);
    }

    const containerInfoCompute = (newly?: NodeList) => {
      // const wrapperInnerInfo = (window as any).getComputedStyle(
      //   scrollBarRealViewRef.value
      // );
      // data.wrapperInnerRealHeight = Number(
      //   wrapperInnerInfo.height.replace("px", "")
      // );
      data.wrapperInnerRealHeight = Number(
        scrollBarRealViewRef.value?.scrollHeight
      );
      data.wrapperInnerRealWidth = Number(
        scrollBarRealViewRef.value?.scrollWidth
      );

      data.wrapperInnerMaxiMoveRangeY =
        data.wrapperInnerRealHeight -
        Number(heightBridge.value.replace("px", ""));

      data.wrapperInnerMaxiMoveRangeX =
        data.wrapperInnerRealWidth -
        Number(widthBridge.value.replace("px", ""));

      data.thumbHeightProportion =
        Number(heightBridge.value.replace("px", "")) /
        data.wrapperInnerRealHeight;
      data.thumbWidthProportion =
        Number(widthBridge.value.replace("px", "")) /
        data.wrapperInnerRealWidth;

      data.thumbHeight =
        String(
          data.thumbHeightProportion *
          Number(heightBridge.value.replace("px", ""))
        ) + "px";
      data.thumbWidth =
        String(
          data.thumbWidthProportion *
          Number(widthBridge.value.replace("px", ""))
        ) + "px";

      data.thumbRatioYMaxRange =
        Number(heightBridge.value.replace("px", "")) -
        Number(data.thumbHeight.replace("px", ""));
      data.thumbRatioXMaxRange =
        Number(widthBridge.value.replace("px", "")) -
        Number(data.thumbWidth.replace("px", ""));

      data.thumbRatioYProportion =
        data.thumbRatioYMaxRange / data.wrapperInnerMaxiMoveRangeY;
      data.thumbRatioXProportion =
        data.thumbRatioXMaxRange / data.wrapperInnerMaxiMoveRangeX;

      data.wrapperInnerMaxiMoveProportionY =
        data.wrapperInnerMaxiMoveRangeY / data.thumbRatioYMaxRange;
      data.wrapperInnerMaxiMoveProportionX =
        data.wrapperInnerMaxiMoveRangeX / data.thumbRatioXMaxRange;
    };

    /**
     * life
     */

    onMounted(() => {
      data.cacheContainerWidth = props.width;
      containerInfoCompute();
    });

    /**
     * event
     */
    const handleScroll = (e: Event | any) => {
      const scrollTop = e.target.scrollTop;
      const scrollLeft = e.target.scrollLeft;
      thumbMoveY(scrollTop);
      thumbMoveX(scrollLeft);
      ctx.emit && ctx.emit("scroll", scrollLeft, scrollTop)
    };

    const mouseenter = (e: Event | any) => {
      IsMouseIn.value = true;
    };

    const mouseleave = (e: Event | any) => {
      IsMouseIn.value = false;
    };

    /**
     * provide
     */
    provide(SCROLLBAR_INJECTION_KEY, {
      height: heightBridge,
      thumbRatioY: thumbRatioYBridge,
      thumbRatioX: thumbRatioXBridge,
      thumbRatioYMaxRange: thumbRatioYMaxRangeBridge,
      thumbRatioXMaxRange: thumbRatioXMaxRangeBridge,
      wrapperInnerMaxiMoveProportionY: wrapperInnerMaxiMoveProportionYBridge,
      wrapperInnerMaxiMoveProportionX: wrapperInnerMaxiMoveProportionXBridge,
      scrollBarRef: scrollBarRef,
    });


    /**
     * public handle
     */
    ctx.expose({ setScrollTop, setScrollLeft, setScrollTo });

    /**
     * doms
     */

    const scroll_bar_thumb = (type: directionType = directionType.VERTICAL) => {
      if (props.width === false || props.height === false) {
        return ""; // 不开启横向/纵向滚动
      }

      const realH = data.wrapperInnerRealHeight,
        viewH = Number(props.height.replace("px", "")),
        realW = data.wrapperInnerRealWidth;

      if (type == "vertical") {
        return viewH < realH ? (
          <scroll-bar-thumb
            ref={thumbRef}
            type={type}
            height={thumbHeightBridge.value}
            width={props.thumbWidth}
            ratioX={thumbRatioXBridge.value}
            ratioY={thumbRatioYBridge.value}
            class={IsMouseIn.value ? "show" : "hide"}
          ></scroll-bar-thumb>
        ) : (
          ""
        );
      } else if (type == "horizontal") {
        let viewW: number = Number(widthBridge.value.replace("px", ""));
        if (widthBridge.value == "auto") {
          const fn = () => {
            widthBridge.value = "auto";
            nextTick(() => {
              viewW = Number(scrollBarRealViewRef.value?.clientWidth);
              widthBridge.value = viewW + "px";
              containerInfoCompute();
            });
          };
          fn();
          // resize重新计算（TODO 用节流包起来）
          window.onresize = () => fn();
        } else if (widthBridge.value) {
          // 有指定宽度
          return viewW < realW ? (
            <scroll-bar-thumb
              ref={thumbRef}
              type={type}
              height={props.thumbWidth}
              width={thumbWidthBridge.value}
              ratioX={thumbRatioXBridge.value}
              ratioY={thumbRatioYBridge.value}
              class={IsMouseIn.value ? "show" : "hide"}
            ></scroll-bar-thumb>
          ) : (
            ""
          );
        }
      }
    };


    /**
     * view
     */
    return () => (
      <div
        class={n()}
        v-css={dynamicCssBridge.value || {}}
        style={{ width: widthBridge.value }}
        onMouseenter={mouseenter}
        onMouseleave={mouseleave}
      >
        <div
          class={n("_wrapper")}
          ref={scrollBarRef}
          style={{ height: heightBridge.value, width: widthBridge.value }}
          onScroll={handleScroll}
        >
          <div class={n("_view")} ref={scrollBarRealViewRef}>
            {ctx.slots["default"]?.()}
          </div>
        </div>
        <div class={[n("_bar"), "horizontal"]}>
          {scroll_bar_thumb(directionType.HORIZONTAL)}
        </div>
        <div class={[n("_bar"), "vertical"]}>
          {scroll_bar_thumb(directionType.VERTICAL)}
        </div>
      </div>
    );
  },
});
