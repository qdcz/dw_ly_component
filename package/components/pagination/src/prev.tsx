import { defineComponent, computed, inject } from 'vue';
import { createNamespace } from '@visix-ui/utils/components';
import { PAGINATION_INJECTION_KEY } from '../../../tokens/pagination';
const { n, classes } = createNamespace('pagination-prev');

export default defineComponent({
	name: 'VIPaginationPrev',
	emits: ['click'],
	setup(props, ctx) {
		let provideData: any = inject(PAGINATION_INJECTION_KEY);
		const internalDisabled = computed(() => provideData.currentPage.value <= 1);
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
						d="M740.352 174.08l-57.216-59.008L283.648 512l399.488 396.928 57.216-59.008L404.48 512z"
						p-id="3023"
					></path>
				</svg>
			</button>
		);
	},
});
