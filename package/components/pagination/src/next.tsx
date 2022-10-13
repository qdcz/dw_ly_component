import { defineComponent, computed, inject } from 'vue';
import { createNamespace } from '@visix-ui/utils/components';
import { PAGINATION_INJECTION_KEY } from '../../../tokens/pagination';
const { n, classes } = createNamespace('pagination-next');

export default defineComponent({
	name: 'VIPaginationNext',
	emits: ['click'],
	setup(props, ctx) {
		let provideData: any = inject(PAGINATION_INJECTION_KEY);
		const internalDisabled = computed(() => provideData.currentPage.value >= provideData.pageCount.value);
		const handleClick = function (e) {
			if (internalDisabled.value) return;
			ctx.emit('click', e);
		};
		return () => (
			<button
				type="button"
				class={[classes(n()), internalDisabled.value ? 'disabled' : '']}
				onClick={handleClick.bind(this)}
			>
				<svg
					t="1662443602480"
					class="icon"
					viewBox="0 0 1024 1024"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					width="12"
					height="12"
				>
					<path
						fill="currentColor"
						d="M283.648 174.08l57.216-59.008L740.352 512 340.864 908.928 283.648 849.92 619.52 512z"
					></path>
				</svg>
			</button>
		);
	},
});
