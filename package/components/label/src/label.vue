<template>
	<div ref="label" :class="classes(n(), 'vi-box', n(`-${size}`), [bold, n('-bold')], [block, n('-block')])"></div>
</template>
<script lang="ts">
import { defineComponent, computed, ref, onMounted, watch } from 'vue';
import { labelProns } from './label';

import { createNamespace } from '@visix-ui/utils/components';
import { isArray } from '@visix-ui/utils/types';
import ripple from '@visix-ui/directives/ripple';
const { n, classes } = createNamespace('label');

export default defineComponent({
	name: 'VILabel',
	props: labelProns,
	emits: ['click'],
	directives: { ripple },
	setup(props, ctx) {
		const label = ref();

		const styleComputed = computed(() => {
			const css = {};
			// if (isNumber(props.size * 1)) {
			// 	//css['font-size'] = `${props.size}px`;
			// }
			// css['text-align'] = props.align;
			return css;
		});
		// 渲染新文本节点
		const createDom = (text: string) => {
			// const size = label.value.children.length;
			const o = document.createElement('div');
			o.className = `vi-label-text vi-label-text-${props.align}`;
			if (isArray(props.color)) {
				o.className += ' gradient';
				o.style.backgroundImage = `linear-gradient(${props.color[2] || 180}deg, ${props.color[0] || '#fff'}, ${
					props.color[1] || '#fff'
				})`;
				o.style.animationDuration = `${props.duration}s`;
			} else {
				o.style.color = props.color;
			}
			o.innerText = text;
			o.className += o.className != '' ? ' new' : 'new';
			o.addEventListener(
				'animationend',
				function () {
					const dom = label.value.children[0];
					o.className = o.className.replace('new', 'cur');
					if (dom != this) {
						label.value.removeChild(dom);
						//console.log(label.value, dom);
					}
					label.value.className = label.value.className.replace(' animiation', '');
				},
				!1
			);
			o.addEventListener('click', function () {
				ctx.emit('click', JSON.parse(JSON.stringify(props.data)));
			});
			label.value.className += ' animiation';
			label.value.appendChild(o);
		};

		watch(
			() => props.text,
			(newProps) => {
				createDom(newProps);
			}
		);
		onMounted(() => {
			createDom(props.text);
		});
		return {
			n,
			classes,
			label,
			styleComputed,
		};
	},
});
</script>
