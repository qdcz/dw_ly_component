<template>
	<div :class="[classes(n()), IsChecked ? n('active') : '',border ? n('border'):'']" @click="handleClick(value)">
		<div :class="[classes(n('_input__wrapper')), IsDisable ? 'is-disabled' : '']">
			<input :class="[classes(n('_input'))]" type="radio" ref="radioRef" :value="value" :checked="IsChecked"
				:disabled="IsDisable" v-model="modelValueBridge" />
			<div :class="[classes(n('_circle'))]"></div>
		</div>
		<label :class="classes(n('_label'), IsDisable ? 'is-disabled' : '')">{{ label }}</label>
	</div>
</template>
<script lang="ts">
import { defineComponent, computed, inject } from 'vue';
import { radioProps } from './radio';
import { RADIO_INJECTION_KEY } from '../../../tokens/radio';
import { createNamespace } from '@dw/utils/components';
const { n, classes } = createNamespace('radio');

export default defineComponent({
	name: 'VIRadio',
	props: radioProps,
	emits: ['click', 'update:modelValue', 'change'],
	setup(props, ctx) {
		let injectData = inject(RADIO_INJECTION_KEY, undefined);

		// radio点击事件
		const handleClick = (e: number) => {
			if (!IsDisable.value) {
				injectData ? injectData.changeModelValue(e) : ctx.emit('update:modelValue', 'on')
			}
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
		const modelValueBridge = computed({
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


			modelValueBridge
		};
	},
});
</script>
