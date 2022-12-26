import {
  defineComponent,
  computed,
  provide,
  watch,
  ref,
  reactive,
  onMounted,
} from "vue";
import {  useResizeObserver } from '@vueuse/core'
import { createNamespace } from "@dw-ui/utils/components";
import { scrollBarProps, data } from "./scroll-bar_p";
import css from "@dw-ui/directives/css";
import { SCROLLBAR_INJECTION_KEY } from "@dw-ui/tokens/scroll-bar";
const { n } = createNamespace("scroll-bar");

import thumb from "./thumb";

export default defineComponent({
  name: "ScrollBar",
  emits: ["update:width"],
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

    let IsMouseIn = ref(false);


    /**
     * watch
     * 
     */
    let a = useResizeObserver(scrollBarRealViewRef, ()=>{
      console.log(77777);
    })
    watch(
      () => props.tag,
      (noresize) => {
        //   stopResizeListener = useEventListener('resize', update)
        // console.log(777,a);
      },
      { immediate: true }
    )
   

    /**
     * computed
     */
    const dynamicCssBridge = computed(() => Object.assign(scrollBarProps.dynamicCss.default(), props.dynamicCss));

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
      data.thumbRatioY = `translateY(${String(data.thumbRatioYProportion * scrollTop) + "px"
        })`;
      return;
    };

    /**
     * event
     */
    const handleScroll = (e: Event | any) => {
      const scrollTop = e.target.scrollTop;
      thumbMove(scrollTop);
    };

    const mouseenter = (e: Event | any) => {
      IsMouseIn.value = true
    }

    const mouseleave = (e: Event | any) => {
      IsMouseIn.value = false

    }

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
     * doms
     */

    const scroll_bar_thumb = () => {
      let real = Number(data.wrapperInnerRealHeight.replace("px", ""));
      let view = Number(props.height.replace("px", ""));
      if (view < real) {
        return (<scroll-bar-thumb
          ref={thumbRef}
          type="vertical"
          height={thumbHeightBridge.value}
          width={props.width}
          ratioX={thumbRatioXBridge.value}
          ratioY={thumbRatioYBridge.value}
          class={IsMouseIn.value ? "show" : "hide"}
        ></scroll-bar-thumb>)
      } else {
        return ""
      }

    }
    /**
     * view
     */
    return () => (
      <div class={n()} v-css={dynamicCssBridge.value || {}} onMouseenter={mouseenter}
        onMouseleave={mouseleave}>
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
          {scroll_bar_thumb()}
        </div>
      </div>
    );
  },
});
