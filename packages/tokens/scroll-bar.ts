import type { InjectionKey, WritableComputedRef, Ref } from "vue";

export type ScrollBarInjectionContext = {
  height: WritableComputedRef<string>;
  thumbRatioY: WritableComputedRef<string>;
  thumbRatioX: WritableComputedRef<string>;
  thumbRatioYMaxRange: WritableComputedRef<number>;
  thumbRatioXMaxRange: WritableComputedRef<number>;
  wrapperInnerMaxiMoveProportionY: WritableComputedRef<number>;
  wrapperInnerMaxiMoveProportionX: WritableComputedRef<number>;
  scrollBarRef: Ref<HTMLElement | undefined>;
};

export const SCROLLBAR_INJECTION_KEY: InjectionKey<ScrollBarInjectionContext> =
  Symbol("scroll-bar");
