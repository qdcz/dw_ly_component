<template>
	<div
		:class="classes(n(), 'vi-box', n(`-${span}`))"
		:style="{
			paddingRight: space / 2 + 'px',
			paddingLeft: space / 2 + 'px',
			paddingTop: space / 2 + 'px',
			paddingBottom: space / 2 + 'px',
		}"
	>
		<div :class="classes(n(`-child`))">
			<slot></slot>
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent, inject } from 'vue';

import { colProns } from './col';
import { createNamespace } from '@visix-ui/utils/components';
// import { isArray, isNumber } from '@visix-ui/utils/types'

const { n, classes } = createNamespace('col');

export default defineComponent({
	name: 'VICol',
	props: colProns,

	setup() {
		const space: number = inject('gutter') || 24;
		return {
			n,
			classes,
			space,
		};
	},
});
</script>
