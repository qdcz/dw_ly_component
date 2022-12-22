// @ts-nocheck
import { nextTick, ref, reactive } from 'vue';
import { mount } from '@vue/test-utils';
// import { describe, expect, it, test } from 'vitest';
import Radio from '../src/radio.vue';
import RadioGroup from '../src/radio-group.vue';
import RadioButton from '../src/radio-button.vue';

import { createNamespace } from '@dw/utils/components';
const ns1 = createNamespace('radio');
const ns2 = createNamespace('radio-group');
const ns3 = createNamespace('radio-button');

describe('Radio base use', () => {
	test('create', async () => {
		const radio = ref('');
		const wrapper = mount(() => (
			<RadioGroup v-model={radio.value}>
				<Radio label="高预警" value={'height'} ref="radio1"></Radio>
				<Radio label="中预警" value={'middle'} ref="radio2"></Radio>
				<Radio label="低预警" value={'low'}></Radio>
			</RadioGroup>
		));
		expect(wrapper.classes()).toContain(`${ns2.n()}`);

		await nextTick();
		const [radio1, radio2] = wrapper.findAll(`.${ns1.n()}`);
		expect(radio1.classes()).toEqual(expect.arrayContaining([`${ns1.n()}`]));

		await radio2.trigger('click');
		expect(radio2.classes()).toEqual(expect.arrayContaining([`${ns1.n()}`, `${ns1.n('active')}`]));
		expect(radio.value).toEqual('middle');

		wrapper.findComponent({name:"VIRadioGroup"}).vm.$emit('update:modelValue',"low");
		expect(radio.value).toEqual('low');
	});

	test('create button mode', async () => {
		const radio = ref('');
		const wrapper = mount(() => (
			<RadioGroup v-model={radio.value}>
				<RadioButton label="高预警" value={'height'} ref="radio1"></RadioButton>
				<RadioButton label="中预警" value={'middle'} ref="radio2"></RadioButton>
				<RadioButton label="低预警" value={'low'}></RadioButton>
			</RadioGroup>
		));
		expect(wrapper.classes()).toContain(`${ns2.n()}`);

		await nextTick();
		const [radio1, radio2] = wrapper.findAll(`.${ns3.n()}`);
		expect(radio1.classes()).toEqual(expect.arrayContaining([`${ns3.n()}`]));

		await radio2.trigger('click');
		expect(radio2.classes()).toEqual(expect.arrayContaining([`${ns3.n()}`, `${ns3.n('active')}`]));
		expect(radio.value).toEqual('middle');
	});

	test('event @change', async () => {
		const radio = ref('middle');
		const data = ref(0);
		function onChange(val: number) {
			data.value = val;
		}
		const wrapper = mount(() => (
			<RadioGroup v-model={radio.value} onChange={onChange}>
				<Radio label="高预警" value={'height'} ref="radio1"></Radio>
				<Radio label="中预警" value={'middle'} ref="radio2"></Radio>
				<Radio label="低预警" value={'low'}></Radio>
			</RadioGroup>
		));
		await nextTick();
		const [radio1] = wrapper.findAll(`.${ns1.n()}`);
		await radio1.trigger('click');
		expect(data.value).toEqual('height');
	});

	test('props disabled', async () => {
		const radio = ref('middle');
		const wrapper = mount(() => (
			<RadioGroup v-model={radio.value}>
				<Radio label="高预警" value={'height'} ref="radio1" disabled="true"></Radio>
				<Radio label="中预警" value={'middle'} ref="radio2"></Radio>
				<Radio label="低预警" value={'low'}></Radio>
			</RadioGroup>
		));
		await nextTick();
		const [radio1] = wrapper.findAllComponents({ name: 'VIRadio' });
		expect(radio1.props('disabled')).toBe('true');
		expect(radio1.find(`.${ns1.n('_input__wrapper')}`).classes()).toContain('is-disabled');
	});

	test('props border', async () => {
		const radio = ref('middle');
		const wrapper = mount(() => (
			<RadioGroup v-model={radio.value}>
				<Radio label="高预警" value={'height'} ref="radio1" border></Radio>
				<Radio label="中预警" value={'middle'} ref="radio2" border></Radio>
				<Radio label="低预警" value={'low'} border></Radio>
			</RadioGroup>
		));
		await nextTick();
		const [radio1, radio2, radio3] = wrapper.findAllComponents({ name: 'VIRadio' });
		expect(radio1.props('border')).toBe(true);
		expect(radio2.props('border')).toBe(true);
		expect(radio3.props('border')).toBe(true);
	});

	test('props dynamicCss', async () => {
		const radio = ref('middle');
		const dynamicCss = reactive({
			'circle-size': '20',
		});
		const wrapper = mount(() => (
			<RadioGroup v-model={radio.value} dynamicCss={dynamicCss}>
				<Radio label="高预警" value={'height'} ref="radio1"></Radio>
				<Radio label="中预警" value={'middle'} ref="radio2"></Radio>
				<Radio label="低预警" value={'low'}></Radio>
			</RadioGroup>
		));
		await nextTick();
		expect(wrapper.vm.$el.style.getPropertyValue('--circle-size')).toBe('20');
		// const radioList = wrapper.findAll(`.${ns1.n()}`);
		// await radioList[0].trigger('click');
		// const int = radioList[0].find('.vi-radio__input__wrapper').find('.vi-radio__circle');
		// let res = await new Promise((res)=>{
		// 	setTimeout(() => {
		// 		res(int.element.clientHeight)
		// 	}, 2000);
		// })
		// expect(res).toBe("20")
	});
});
