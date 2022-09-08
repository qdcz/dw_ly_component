<template>
	<button v-ripple="{ disabled: disabled || !ripple, args: rippleBgColor }" :class="
		classes(
			'vi-box',
			n(),
			[block, `vi-flex ${n('-block')}`, 'vi-inline-flex'],
			[active, n('-active')],
			[text, `${n(`-text-${type}`)} ${n('-text')}`, `${n(`-${shape}`)}  ${n(`-${shape}-${size}`)} ${n(`-skin-${disabled ? 'disabled' : type}`)}`],
			[text && disabled, n('-text-disabled')],
			[shadow, 'vi-shadow'],
			[outline, n('-outline')]
		)
	" @click="handleClick">
		<slot></slot>
	</button>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { buttonProns } from './button';
import { createNamespace } from '../../../utils/components';

import touch from '../../../directives/touch';
import ripple from '../../../directives/ripple';

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
		onMounted(() => { });
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

<style lang="css">
</style>
