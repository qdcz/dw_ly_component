import { defineComponent, inject } from 'vue';
import { PAGINATION_INJECTION_KEY } from '../../../tokens/pagination';
import { createNamespace } from '@dw/utils/components';
const { n, classes } = createNamespace('pagination-total');

export default defineComponent({
	name: 'VIPaginationTotal',
	emits: ['click'],
	setup() {
		let { total, totalLabel }: any = inject(PAGINATION_INJECTION_KEY);
		return () => (
			<div class={[classes(n())]}>
				<span class={[n('_label')]}>{totalLabel.value}</span>
				<span class={[n('_value')]}>{total.value}</span>
			</div>
		);
	},
});
