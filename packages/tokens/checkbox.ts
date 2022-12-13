import type { ExtractPropTypes, PropType, ComputedRef, InjectionKey, Ref } from 'vue';



export type VICheckBoxInjectionContext = {
    changeModelValue: (value: any, id: any) => void,
    groupDisabled?: boolean | undefined | ComputedRef,
    childWidth?: number | string | undefined | ComputedRef
}

export const CHECK_BOX_INJECTION_KEY: InjectionKey<VICheckBoxInjectionContext> = Symbol('check-box');