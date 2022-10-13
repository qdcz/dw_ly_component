<template>
	<div :class="classes(n(), 'vi-box')" :style="styleComputed">
		<slot></slot>
	</div>
</template>
<script lang="ts">
import { defineComponent, computed, ref, provide } from 'vue';
import { spaceProns } from './space';
import { createNamespace } from '@visix-ui/utils/components';

const { n, classes } = createNamespace('space');

export default defineComponent({
	name: 'VISpace',
	props: spaceProns,
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
