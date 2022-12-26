import {
  defineComponent,
  computed,
  provide,
  ref,
  reactive,
  onMounted,
} from "vue";
import { createNamespace } from "@dw/utils/components";
import { scrollBarProps, data } from "./scroll-bar_p";
import css from "@dw/directives/css";
import { SCROLLBAR_INJECTION_KEY } from "@dw/tokens/scroll-bar";
const { n } = createNamespace("scroll-bar");

import thumb from "./thumb";

export default defineComponent({
  name: "ScrollBar",
  emits: ["focus", "blur", "click", "update:modelValue", "close"],
  directives: { css },
  props: scrollBarProps,
  components: {
    "scroll-bar-thumb": thumb,
  },
  setup(props: any, ctx) {
    /**
     * refs
     */
    const scrollBarRef = ref<HTMLDivElement>();
    const scrollBarRealViewRef = ref<HTMLDivElement>();
    const thumbRef = ref<HTMLDivElement>();

    /**
     * data
     */

    const data: data = reactive({
      wrapperInnerRealHeight: "",
      wrapperInnerMaxiMoveRangeY: 0,
      wrapperInnerMaxiMoveRangeX: 0,
      wrapperInnerMaxiMoveProportionY: 0,
      wrapperInnerMaxiMoveProportionX: 0,
      thumbHeightProportion: 0,
      thumbHeight: "",
      thumbWidth: "",
      thumbRatioX: "",
      thumbRatioY: "",
      thumbRatioYMaxRange: 0,
      thumbRatioYProportion: 0,
    });

    /**
     * computed
     */
    const heightBridge = computed(() => props.height);

    const thumbHeightBridge = computed({
      get() {
        return data.thumbHeight;
      },
      set(v): void {
        data.thumbHeight = v;
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

    const wrapperInnerMaxiMoveProportionYBridge = computed(
      () => data.wrapperInnerMaxiMoveProportionY
    );

    /**
     * life
     */

    onMounted(() => {
      const wrapperInnerInfo = (window as any).getComputedStyle(
        scrollBarRealViewRef.value
      );

      data.wrapperInnerRealHeight = wrapperInnerInfo.height;
      data.wrapperInnerMaxiMoveRangeY =
        Number(data.wrapperInnerRealHeight.replace("px", "")) -
        Number(heightBridge.value.replace("px", ""));

      data.thumbHeightProportion =
        Number(heightBridge.value.replace("px", "")) /
        Number(data.wrapperInnerRealHeight.replace("px", ""));

      data.thumbHeight =
        String(
          data.thumbHeightProportion *
            Number(heightBridge.value.replace("px", ""))
        ) + "px";

      data.thumbRatioYMaxRange =
        Number(heightBridge.value.replace("px", "")) -
        Number(data.thumbHeight.replace("px", ""));

      data.thumbRatioYProportion =
        data.thumbRatioYMaxRange / data.wrapperInnerMaxiMoveRangeY;

      data.wrapperInnerMaxiMoveProportionY =
        data.wrapperInnerMaxiMoveRangeY / data.thumbRatioYMaxRange;
    });

    /**
     * other fn
     */
    const thumbMove = (scrollTop: number): void => {
      data.thumbRatioY = `translateY(${
        String(data.thumbRatioYProportion * scrollTop) + "px"
      })`;
      return;
    };

    /**
     * event
     */
    const handleScroll = (e: any) => {
      const scrollTop = e.target.scrollTop;
      thumbMove(scrollTop);
    };

    /**
     * provide
     */
    provide(SCROLLBAR_INJECTION_KEY, {
      height: heightBridge,
      thumbRatioY: thumbRatioYBridge,
      thumbRatioYMaxRange: thumbRatioYMaxRangeBridge,
      wrapperInnerMaxiMoveProportionY: wrapperInnerMaxiMoveProportionYBridge,
      scrollBarRef: scrollBarRef,
    });

    /**
     * view
     */
    return () => (
      <div class={n()}>
        <div
          class={n("_wrapper")}
          ref={scrollBarRef}
          style={{ height: heightBridge.value }}
          onScroll={handleScroll}
        >
          <div class={n("_view")} ref={scrollBarRealViewRef}>
            {ctx.slots["default"]?.()}
          </div>
        </div>
        {/* <div class={[n("_bar"), "horizontal"]}>
          <scroll-bar-thumb
            type="horizontal"
            height={data.thumbHeight}
          ></scroll-bar-thumb>
        </div> */}
        <div class={[n("_bar"), "vertical"]}>
          <scroll-bar-thumb
            ref={thumbRef}
            type="vertical"
            height={thumbHeightBridge.value}
            ratioX={thumbRatioXBridge.value}
            ratioY={thumbRatioYBridge.value}
          ></scroll-bar-thumb>
        </div>
      </div>
    );
  },
});
