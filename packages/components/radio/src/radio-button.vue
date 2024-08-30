<template>
	<div ref="refRadioButton" :class="[classes(n()), IsChecked ? n('active') : '',border ? n('border'):'']"
		@click="handleClick">
		<input :class="[classes(n('_input'))]" type="radio"  :value="value" :checked="IsChecked"
			:disabled="IsDisable" v-model="modelValue" />
		<label :class="classes(n('_label'), IsDisable ? 'is-disabled' : '')">{{ label }}</label>
	</div>
</template>
<script lang="ts">
import { defineComponent, computed, inject, ref } from 'vue';
import { radioButtonProps } from './radio-button';
import { RADIO_INJECTION_KEY } from '../../../tokens/radio';
import { createNamespace } from '@dw-ui/utils/components';
const { n, classes } = createNamespace('radio-button');
// import ripple from '@dw-ui/directives/ripple';

export default defineComponent({
	name: 'VIRadioButton',
	props: radioButtonProps,
	emits: ['click', 'update:modelValue', 'change'],
	// directives: { ripple },
	setup(props, ctx) {
		let injectData = inject(RADIO_INJECTION_KEY);
		const refRadioButton = ref(null);

		// radio点击事件
		const handleClick = function (e: Event) {
			if (!IsDisable.value) {
				injectData ? injectData.changeModelValue(props.value) : ctx.emit('update:modelValue', 'on')
			}
			// const node = refRadioButton.value.getBoundingClientRect(),
			// n = Math.max(node.width, node.height);
			// const i = {
			//     range:"",
			//     x:  e.clientX - node.left - n / 2,
			//     y: e.clientY -node.top - n / 2,
			// },
			// o = document.createElement('span');
			// (o.className = 'ripple'),
			// (o.style.top = i.y + 'px'),
			// (o.style.left = i.x + 'px'),
			// (o.style.width = i.range + 'px'),
			// (o.style.height = i.range + 'px'),
			// (o.style.animationDuration = '1.2s'),
			// (o.style.background = '#00afef'),
			// (o.style.opacity = '.1'),
			// o.addEventListener(
			//     'animationend',
			//     function () {
			//         const dom = this.parentNode as HTMLElement;
			//         dom.removeChild(o);
			//     },
			//     !1
			// ),
			// refRadioButton.value.appendChild(o);
			// console.log(666666666,i);

		}

		// input框是否被选中
		const IsChecked = computed({
			get() {
				return injectData ? props.value == injectData.currentSelect.value : props.modelValue
			},
			set() { },
		})
		// input框是否禁用
		const IsDisable = computed({
			get() {
				return !!props.disabled
			},
			set() { },
		})


		// 外部传入的v-model监听
		const modelValue = computed({
			get() {
				return injectData ? injectData.currentSelect.value : props.modelValue
			},
			set(val) {
				ctx.emit && ctx.emit('update:modelValue', val)
			},
		})

		return {
			n,
			classes,
			handleClick,

			IsChecked,
			IsDisable,

			refRadioButton,
			modelValue
		};
	},
});
</script>
