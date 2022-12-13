import type { ComputedRef, WritableComputedRef, InjectionKey, Ref } from 'vue';
import type { InputInstance } from '@visix-ui/components/input';

export interface IInput extends InputInstance {
	getBoundingClientRect: () => DOMRect;
}

export type ViAutocompleteInjectionContext = {
	inputRef: Ref<IInput | null>;
	currentSelect: WritableComputedRef<string | number | null | undefined>;
	dropdownVisible: Ref<boolean>;
	placeholder: ComputedRef<string>;
	placement: ComputedRef<string>;
	clearable: ComputedRef<boolean>;
	disabled: ComputedRef<boolean>;
	dropdowns: Ref<object[]>;
	parentStyleProps: Ref<object>;
};

export const AUTOCOMPLETE_INJECTION_KEY: InjectionKey<ViAutocompleteInjectionContext> = Symbol('autocomplete');
