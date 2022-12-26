import { defineComponent, computed, ref, reactive, inject } from "vue";
import { createNamespace } from "@dw/utils/components";
import { scrollBarThumbProps, data } from "./thumb_p";
import { SCROLLBAR_INJECTION_KEY } from "@dw/tokens/scroll-bar";
const { n } = createNamespace("scroll-bar__thumb");

export default defineComponent({
  name: "ScrollBar",
  emits: ["update:height", "update:width", "update:ratioY"],
  props: scrollBarThumbProps,
  setup(props: any, ctx) {
    const {
      thumbRatioY,
      thumbRatioYMaxRange,
      wrapperInnerMaxiMoveProportionY,
      scrollBarRef,
    }: any = inject(SCROLLBAR_INJECTION_KEY);

    /**
     * refs
     */
    const thumbRef = ref<HTMLDivElement>();

    /**
     * data
     */

    const data: data = reactive({
      mouseMoving: false,
    });
    let startY: number = 0;
    let moveY: number = 0;
    let onceCacheRatioY: number = 0; // 每次点击移动的初始RatioY位置

    /**
     * computed
     */
    const heightBridge = computed({
      get() {
        return props.height;
      },
      set(v): void {
        ctx.emit && ctx.emit("update:height", v);
      },
    });

    const widthBridge = computed({
      get() {
        return props.width;
      },
      set(v): void {
        ctx.emit && ctx.emit("update:width", v);
      },
    });

    /**
     * other fn
     */

    // 拇指位置移动 和 滚动框移动
    const scrollBoxPosition = function () {
      let distance = 0;
      const _thumbRatioY = onceCacheRatioY;
      // 往下 : 往上
      distance =
        moveY < 0
          ? _thumbRatioY + Math.abs(moveY)
          : _thumbRatioY - Math.abs(moveY);

      // 上边界
      distance < 0 ? (distance = 0) : "";
      // 下边界
      distance > thumbRatioYMaxRange.value
        ? (distance = thumbRatioYMaxRange.value)
        : "";
      // 拇指移动
      thumbRatioY.value = `translateY(${distance}px)`;
      // 滚动框移动
      scrollBarRef.value.scrollTop = Math.abs(
        wrapperInnerMaxiMoveProportionY.value * distance
      );
    };

    const documentMouseDown = function (e: Event | any) {
      data.mouseMoving = true;
      onceCacheRatioY = Number(thumbRatioY.value.slice(11, -3));
      startY = Number(e.clientY);
    };

    const documentMouseMove = function (e: Event | any) {
      moveY = (startY as number) - e.clientY;
      scrollBoxPosition();
    };

    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", documentMouseMove);
      document.removeEventListener("mousedown", documentMouseDown);
      startY = 0;
      moveY = 0;
      onceCacheRatioY = 0;
      data.mouseMoving = false;
    });

    /**
     * event
     */

    const MouseDown = (e: Event | any) => {
      document.addEventListener("mousedown", documentMouseDown);
      document.addEventListener("mousemove", documentMouseMove);
    };

    /**
     * dom fn
     */

    /**
     * views
     */
    return () => (
      <div
        class={n()}
        ref={thumbRef}
        style={{
          height: heightBridge.value,
          width: widthBridge.value,
          transform: props.ratioY,
        }}
        onMousedown={MouseDown}
      ></div>
    );
  },
});
