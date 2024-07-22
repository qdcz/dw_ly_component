import type { WritableComputedRef, InjectionKey } from 'vue';

export type propModelValue = number | string | undefined;

export type ElScrollBlockInjectionContext = {
	currentSelect: WritableComputedRef<string | number | boolean>;
	changeModelValue: (value: propModelValue) => void;
};

export const SCROLLBLOCK_INJECTION_KEY: InjectionKey<ElScrollBlockInjectionContext> = Symbol('scroll-block');
