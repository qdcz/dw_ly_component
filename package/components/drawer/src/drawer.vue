<template>
	<teleport to="body">
		<div :class="classes('vi-box', n())" @click="handleClick">
			<slot></slot>
		</div>
	</teleport>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { drawerProns } from './drawer';

import { createNamespace } from '@visix-ui/utils/components';
import ripple from '@visix-ui/directives/ripple';
const { n, classes } = createNamespace('drawer');

export default defineComponent({
	name: 'VIDrawer',
	props: drawerProns,
	emits: ['click'],
	directives: { ripple },
	setup(props, ctx) {
		const handleClick = (e: Event) => {
			ctx.emit('click', e);
		};
		return {
			n,
			classes,
			handleClick,
		};
	},
});
</script>
