<template>
	<div>
        66666
    </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, onMounted } from 'vue';
import type { Ref, ComputedRef } from 'vue';
// import { buttonProns } from './button';

import { createNamespace } from '@visix-ui/utils/components';

import touch from '@visix-ui/directives/touch';
import ripple from '@visix-ui/directives/ripple';
const { n, classes } = createNamespace('button');

export default defineComponent({
	name: 'VIButton',
	// props: buttonProns,
	emits: ['click'],
	directives: { ripple, touch },
	setup(props, ctx) {
		const handleClick = (e: Event) => {
			ctx.emit('click', e);
		};
		const pressFn = (data) => {
			console.log('::::', data);
		};
		const panFn = (data) => {
			console.log('::::', data.x, data.y);
		};
		onMounted(() => {});
		return {
			n,
			classes,
			handleClick,
			pressFn,
			panFn,
		};
	},
});
</script>
