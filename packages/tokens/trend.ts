import type { ExtractPropTypes, PropType, ComputedRef, InjectionKey, Ref } from 'vue';


export type propModelValue = number | string | undefined;

export type VITrendInjectionContext = {
    changeModelValue: (value: propModelValue) => void,
}

export const TREND_INJECTION_KEY: InjectionKey<VITrendInjectionContext> = Symbol('trend');