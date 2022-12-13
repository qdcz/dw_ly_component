import type { ComputedRef, WritableComputedRef, InjectionKey, Ref } from 'vue';

export type VIPaginationInjectionContext = {
	pageCount: ComputedRef<string | number>;
	pagerCount: ComputedRef<string | number>;
	pageSize: WritableComputedRef<string | number>;
	currentPage: WritableComputedRef<string | number>;
	total: WritableComputedRef<string | number>;
	totalLabel: ComputedRef<string>;
	jumpLabel: ComputedRef<string>;

};

export const PAGINATION_INJECTION_KEY: InjectionKey<VIPaginationInjectionContext> = Symbol('pagination');
