import type { ComputedRef, InjectionKey, Ref } from 'vue'

export type VITimePickerInjectionContext = {
    // selectRef: Ref<HTMLElement | undefined>,
    // currentSelect: ComputedRef<string | number>,
    // currentSelectLabel: ComputedRef<string>,
    // mode: ComputedRef<string>,
    // dynamicCss: ComputedRef<string | object>,
    // dropDownVisible: ComputedRef<string | boolean>,
    // placeholder: ComputedRef<string>,
    // cacheOptionList: ComputedRef<string>,
    // clearable: string
}

export const TIMEPICKER_INJECTION_KEY: InjectionKey<VITimePickerInjectionContext> = Symbol('time-picker');

