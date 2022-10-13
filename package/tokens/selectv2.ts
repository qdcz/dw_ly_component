import type { ComputedRef, WritableComputedRef, InjectionKey, Ref } from 'vue';

export type ElSelectV2InjectionContext = {
	selectRef: Ref<HTMLElement | undefined>;
	currentSelect: WritableComputedRef<string | number | object | number[]>;
	currentSelectLabel: WritableComputedRef<string>;
	mode: ComputedRef<string>;
	dynamicCss: ComputedRef<string | object>;
	dropDownVisible: WritableComputedRef<string | boolean>;
	placeholder: WritableComputedRef<string>;
	cacheOptionList: object;
	clearable: ComputedRef<boolean | string>;
	selectedFn: (val: boolean) => void;
	deleteOptionItem: (val: boolean) => void;
};

export const SELECTV2_INJECTION_KEY: InjectionKey<ElSelectV2InjectionContext> = Symbol('select-v2');
