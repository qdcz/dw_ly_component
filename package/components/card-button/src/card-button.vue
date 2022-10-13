<template>
	<div
		v-ripple="{ disabled: disabled || !ripple }"
		:class="
			classes(
				'vi-box',
				n(),
				n(`-${size}`),
				[bg, `${n('-bg')} ${n(`-bg-${type}`)}`, n(`-color-${type}`)],
				[shadow, 'vi-shadow']
			)
		"
		@click="handleClick"
	>
		<div v-show="icon != ''" :class="classes('icon', n(`-icon`))"><i :class="icon"></i></div>
		<div :class="classes('label', n(`-text`), [bold, n(`-text-bold`)])"><slot name="label"></slot></div>
		<div :class="classes('descr', n(`-descr`))"><slot name="descr"></slot></div>
	</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { cardButtonProns } from './card-button';
import { createNamespace } from '@visix-ui/utils/components';
import ripple from '@visix-ui/directives/ripple';
const { n, classes } = createNamespace('card-button');

export default defineComponent({
	name: 'VICardButton',
	props: cardButtonProns,
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
