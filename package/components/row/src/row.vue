<template>
	<div :class="classes(n(), 'vi-box')" :style="styleComputed">
		<slot></slot>
	</div>
</template>
<script lang="ts">
import { defineComponent, computed, ref, provide } from 'vue';
import { rowProns } from './row';
import { createNamespace } from '@visix-ui/utils/components';
const { n, classes } = createNamespace('row');

// const types = {
// 	'align-items': String,
// 	'justify-content': String,
// };

export default defineComponent({
	name: 'VIRow',
	props: rowProns,
	setup(props) {
		const gutter = ref(props.gutter);
		provide('gutter', gutter);
		const styleComputed = computed(() => {
			return {
				'align-items': props.align,
				'justify-content': props.justify,
			};
		});

		return {
			n,
			classes,
			styleComputed,
		};
	},
});
</script>
