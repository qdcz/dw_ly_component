import type { WritableComputedRef, InjectionKey } from 'vue';

export type propModelValue = number | string | undefined;

export type ElRadioInjectionContext = {
	currentSelect: WritableComputedRef<string | number | boolean>;
	changeModelValue: (value: propModelValue) => void;
};

export const RADIO_INJECTION_KEY: InjectionKey<ElRadioInjectionContext> = Symbol('radio');
