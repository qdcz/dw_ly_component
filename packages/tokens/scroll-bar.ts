import type { InjectionKey, WritableComputedRef, Ref } from "vue";

export type ScrollBarInjectionContext = {
  height: WritableComputedRef<string>;
  thumbRatioY: WritableComputedRef<string>;
  thumbRatioYMaxRange: WritableComputedRef<number>;
  wrapperInnerMaxiMoveProportionY: WritableComputedRef<number>;
  scrollBarRef: Ref<HTMLElement | undefined>;
};

export const SCROLLBAR_INJECTION_KEY: InjectionKey<ScrollBarInjectionContext> =
  Symbol("scroll-bar");
