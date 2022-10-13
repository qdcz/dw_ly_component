
import { defineComponent, computed, inject } from 'vue';
import { createNamespace } from '@visix-ui/utils/components';
const { n, classes } = createNamespace('popper');

export default defineComponent({
	name: 'VIPopper',
	emits: ['click'],
	setup(props, ctx) {
		// 具名插槽
		// 匿名插槽
		// 自定义插槽

		return () => (
			<div class={[classes(n())]}>
				{ctx.slots['default']?.()}
			</div>
		)
	},
});
