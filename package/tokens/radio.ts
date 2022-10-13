import type { ComputedRef, InjectionKey, Ref } from 'vue'

export type propModelValue = number | string | undefined;

export type ElRadioInjectionContext = {
    currentSelect: ComputedRef<string | number | undefined>,
    changeModelValue: (value: propModelValue) => void,
}

export const RADIO_INJECTION_KEY: InjectionKey<ElRadioInjectionContext> =
    Symbol('radio')
