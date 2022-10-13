<template>
	<button
		v-ripple="{ disabled: disabled || !ripple }"
		:class="
			classes(
				'vi-box',
				n(),
				[block, `vi-flex ${n('-block')}`, 'vi-inline-flex'],
				[active, n('-active')],
				[
					text,
					`${n(`-text-${type}`)} ${n('-text')}`,
					`${n(`-${shape}`)}  ${n(`-${shape}-${size}`)} ${n(`-skin-${disabled ? 'disabled' : type}`)}`,
				],
				[text && disabled, n('-text-disabled')],
				[shadow, 'vi-shadow'],
				[outline, n('-outline')]
			)
		"
		@click="handleClick"
	>
		<slot></slot>
	</button>
</template>
<!-- 
    	v-touch="{ press: pressFn, pan: panFn }"
    v-ripple="{ disabled: disabled || !ripple }" -->
<script lang="ts">
import { defineComponent } from 'vue';
import { buttonProns } from './button';
import { createNamespace } from '@visix-ui/utils/components';
import touch from '@visix-ui/directives/touch';
import ripple from '@visix-ui/directives/ripple';
const { n, classes } = createNamespace('button');

export default defineComponent({
	name: 'VIButton',
	props: buttonProns,
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
