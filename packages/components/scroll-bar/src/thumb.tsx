import { defineComponent, computed, ref, reactive, inject } from "vue";
import { createNamespace } from "@dw-ui/utils/components";
import { scrollBarThumbProps, data } from "./thumb_p";
import { SCROLLBAR_INJECTION_KEY } from "@dw-ui/tokens/scroll-bar";
const { n } = createNamespace("scroll-bar__thumb");

export default defineComponent({
  name: "ScrollBar",
  emits: ["update:height", "update:width"],
  props: scrollBarThumbProps,
  setup(props: any, ctx) {
    const {
      thumbRatioY,
      thumbRatioX,
      thumbRatioYMaxRange,
      thumbRatioXMaxRange,
      wrapperInnerMaxiMoveProportionY,
      wrapperInnerMaxiMoveProportionX,
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

    let startY: number = 0,
      startX: number = 0,
      moveY: number = 0,
      moveX: number = 0;

    let onceCacheRatioY: number = 0, // 每次点击移动之前的RatioY位置
      onceCacheRatioX: number = 0; // 每次点击移动的之前RatioX位置

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
    const scrollBox_thumb_move = function (type: string) {
      if (type == "vertical") {
        /**
         * ------------------------------纵向------------------------------
         */
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
        // 滚动框移动
        scrollBarRef.value.scrollTop = Math.abs(
          wrapperInnerMaxiMoveProportionY.value * distance
        );
      } else if (type == "horizontal") {
        /**
         * ------------------------------横向------------------------------
         */
        let distance = 0;
        const _thumbRatioX = onceCacheRatioX;
        // 往右 : 往左
        distance =
          moveX < 0
            ? _thumbRatioX + Math.abs(moveX)
            : _thumbRatioX - Math.abs(moveX);

        // 左边距
        distance < 0 ? (distance = 0) : "";
        // 右边界
        distance > thumbRatioXMaxRange.value
          ? (distance = thumbRatioXMaxRange.value)
          : "";
        // 滚动框移动
        scrollBarRef.value.scrollLeft = Math.abs(
          wrapperInnerMaxiMoveProportionX.value * distance
        );
      }
    };

    const documentMouseDown = function (e: Event | any) {
      data.mouseMoving = true;
      onceCacheRatioY = Number(thumbRatioY.value.slice(11, -3));
      onceCacheRatioX = Number(thumbRatioX.value.slice(11, -3));
      startY = Number(e.clientY);
      startX = Number(e.clientX);
    };

    const documentMouseMove = function (e: Event | any) {
      moveY = (startY as number) - e.clientY;
      moveX = (startX as number) - e.clientX;
      scrollBox_thumb_move(props.type);
    };

    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", documentMouseMove);
      document.removeEventListener("mousedown", documentMouseDown);
      startY = 0;
      startX = 0;
      moveY = 0;
      moveX = 0;
      onceCacheRatioY = 0;
      onceCacheRatioX = 0;
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
          transform: props.type == "vertical" ? props.ratioY : props.ratioX,
        }}
        onMousedown={MouseDown}
      ></div>
    );
  },
});
