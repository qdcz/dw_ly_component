<template>
	<div :class="classes(n())">
		<div class="toucher" ref="toucher" v-touch>
			<slot></slot>
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

import { dragProns } from './drag';
import touch from '@visix-ui/directives/touch';
import { createNamespace } from '@visix-ui/utils/components';

const { n, classes } = createNamespace('drag');

export default defineComponent({
	name: 'VIDrag',
	props: dragProns,
	directives: { touch },
	setup() {
		const toucher = ref();
		return {
			n,
			toucher,
			classes,
		};
	},
});
</script>
