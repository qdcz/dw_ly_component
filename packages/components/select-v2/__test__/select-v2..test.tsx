// @ts-nocheck
import { nextTick, ref, reactive } from 'vue';
import { mount, shallowMount } from '@vue/test-utils';
// import { describe, expect, it, test } from 'vitest';
import VISelectV2 from '../src/select';
import VISelectV2Option from '../src/option-item';

import css from '@dw/directives/css';

import { createNamespace } from '@dw/utils/components';
const ns1 = createNamespace('select-v2');
const ns2 = createNamespace('select-v2-option');
const ns3 = createNamespace('select-v2-svg-icon');
const ns4 = createNamespace('select-v2-input');
const ns5 = createNamespace('select-v2-tag');

describe('selectV2', () => {
	test('create an click', async () => {
		const currentSelect = ref('');
		const data = reactive({
			dropDownList: [
				{ value: 'xiamen', label: '厦门' },
				{ value: 'fuzhou', label: '福州' },
			],
			dynamicCss: {},
		});
		const wrapper = mount(() => (
			<VISelectV2 v-model={currentSelect.value} list={data.dropDownList} dynamicCss={data.dynamicCss}>
				{data.dropDownList.map((i) => (
					<VISelectV2Option key={i.value} label={i.label} value={i.value}></VISelectV2Option>
				))}
			</VISelectV2>
		));
		expect(wrapper.classes()).toContain(`${ns1.n()}`);

		await nextTick();
		const [selectOption1, selectOption2] = wrapper.findAll(`.${ns2.n()}`);
		expect(selectOption1.classes()).toEqual(expect.arrayContaining([`${ns2.n()}`]));
		expect(selectOption2.classes()).toEqual(expect.arrayContaining([`${ns2.n()}`]));

		await selectOption1.trigger('click');
		expect(selectOption1.classes()).toEqual(expect.arrayContaining([`${ns2.n()}`, `active`]));
		expect(currentSelect.value).toEqual('xiamen');
	});

	test('props list', async () => {
		const currentSelect = ref('xiamen');
		const data = reactive({
			dropDownList: [
				{ value: 'xiamen', label: '厦门' },
				{ value: 'fuzhou', label: '福州' },
			],
			dynamicCss: {},
		});
		const wrapper = mount(() => (
			<VISelectV2 v-model={currentSelect.value} list={data.dropDownList} dynamicCss={data.dynamicCss}>
				{data.dropDownList.map((i) => (
					<VISelectV2Option key={i.value} label={i.label} value={i.value}></VISelectV2Option>
				))}
			</VISelectV2>
		));

		data.dropDownList.push({ value: 'zhangzhou', label: '漳州' });
		await nextTick();
		const selectOption = wrapper.findAll(`.${ns2.n()}`);
		expect(data.dropDownList.length).toBe(3);
		await selectOption[2].trigger('click');
		expect(currentSelect.value).toBe('zhangzhou');
	});

	test('props clearable', async () => {
		const currentSelect = ref('xiamen');
		const data = reactive({
			dropDownList: [
				{ value: 'xiamen', label: '厦门' },
				{ value: 'fuzhou', label: '福州' },
			],
			dynamicCss: {},
		});
		const wrapper = mount(() => (
			<VISelectV2 v-model={currentSelect.value} clearable list={data.dropDownList} dynamicCss={data.dynamicCss}>
				{data.dropDownList.map((i) => (
					<VISelectV2Option key={i.value} label={i.label} value={i.value}></VISelectV2Option>
				))}
			</VISelectV2>
		));

		await nextTick();
		// await wrapper.trigger('mouseenter');
		const input = wrapper.find(`.${ns4.n()}`);
		const iconClose = wrapper.find(`.${ns3.n()}`);

		expect(iconClose.classes()).toHaveLength(4);
		expect(iconClose.classes()).toEqual(expect.arrayContaining(['vi-select-v2-svg-icon', 'icon', 'arrow', 'turnDown']));

		await input.trigger('mouseenter');
		expect(iconClose.classes()).toHaveLength(2);
		expect(iconClose.classes()).toEqual(expect.arrayContaining(['vi-select-v2-svg-icon', 'icon']));

		iconClose.trigger('click');
		expect(currentSelect.value).toEqual('');
		await input.trigger('mouseleave');
		expect(iconClose.classes()).toHaveLength(4);
	});

	test('props search', async () => {
		const currentSelect = ref('');
		const data = reactive({
			dropDownList: [
				{ value: 'xiamen', label: '厦门' },
				{ value: 'fuzhou', label: '福州' },
			],
			dynamicCss: {},
		});
		const wrapper = mount(() => (
			<VISelectV2 v-model={currentSelect.value} search list={data.dropDownList} dynamicCss={data.dynamicCss}>
				{data.dropDownList.map((i) => (
					<VISelectV2Option key={i.value} label={i.label} value={i.value}></VISelectV2Option>
				))}
			</VISelectV2>
		));

		await nextTick();

		const search = wrapper.find(`.${ns1.n('-search')}`);
		expect(search.classes()).toHaveLength(1);
		expect(search.classes()).toEqual(expect.arrayContaining(['vi-select-v2-search']));
		search.find('.vi-select-v2-search__input').setValue('厦门');
		// todo 遍历list 查出当前筛选出的结果
	});

	test('props tooltip', async () => {
		const currentSelect = ref([{ value: 'xiamen', label: '厦门' }]);
		const data = reactive({
			dropDownList: [
				{ value: 'xiamen', label: '厦门' },
				{ value: 'fuzhou', label: '福州' },
			],
			dynamicCss: {},
		});
		const wrapper = mount(() => (
			<VISelectV2
				v-model={currentSelect.value}
				mode="multiple"
				tooltip
				list={data.dropDownList}
				dynamicCss={data.dynamicCss}
			>
				{data.dropDownList.map((i) => (
					<VISelectV2Option key={i.value} label={i.label} value={i.value}></VISelectV2Option>
				))}
			</VISelectV2>
		));
		await nextTick();

		const tag = wrapper.find(`.${ns1.n('-tag')}`);
		expect(tag.classes()).toHaveLength(2);
		expect(tag.classes()).toEqual(expect.arrayContaining(['vi-select-v2-tag', 'useToolTip']));
	});

	test('props mode=multiple', async () => {
		const currentSelect = ref([]);
		const data = reactive({
			dropDownList: [
				{ value: 'xiamen', label: '厦门' },
				{ value: 'fuzhou', label: '福州' },
				{ value: 'zhangzhou', label: '漳州' },
			],
			dynamicCss: {},
		});
		const wrapper = mount(() => (
			<VISelectV2 v-model={currentSelect.value} mode="multiple" list={data.dropDownList} dynamicCss={data.dynamicCss}>
				{data.dropDownList.map((i) => (
					<VISelectV2Option key={i.value} label={i.label} value={i.value}></VISelectV2Option>
				))}
			</VISelectV2>
		));

		await nextTick();

		const taglist = wrapper.find(`.${ns1.n('-taglist')}`);
		expect(taglist.classes()).toHaveLength(1);
		expect(taglist.classes()).toEqual(expect.arrayContaining(['vi-select-v2-taglist']));

		const [selectOption1, selectOption2, selectOption3] = wrapper.findAll(`.${ns2.n()}`);
		await selectOption1.trigger('click');
		await selectOption2.trigger('click');
		await selectOption3.trigger('click');
		expect(currentSelect.value.length).toBe(3);
	});

	test('event @handleSelected props mode=single', async () => {
		const currentSelect = ref('');
		const test = ref('');
		const data = reactive({
			dropDownList: [
				{ value: 'xiamen', label: '厦门' },
				{ value: 'fuzhou', label: '福州' },
			],
			dynamicCss: {},
		});
		function handleSelected(val: string) {
			test.value = val.value;
		}
		const wrapper = mount(() => (
			<VISelectV2
				v-model={currentSelect.value}
				list={data.dropDownList}
				dynamicCss={data.dynamicCss}
				onHandleSelected={handleSelected}
			>
				{data.dropDownList.map((i) => (
					<VISelectV2Option key={i.value} label={i.label} value={i.value}></VISelectV2Option>
				))}
			</VISelectV2>
		));
		await nextTick();
		const [selectOption1] = wrapper.findAll(`.${ns2.n()}`);
		await selectOption1.trigger('click');
		expect(test.value).toBe('xiamen');
		expect(currentSelect.value).toBe('xiamen');
	});

	test('event @handleSelected props mode=multiple', async () => {
		const currentSelect = ref([]);
		const data = reactive({
			dropDownList: [
				{ value: 'xiamen', label: '厦门' },
				{ value: 'fuzhou', label: '福州' },
			],
			dynamicCss: {},
		});

		const currentSelected = ref('');
		const currentSelects = ref([]);
		function handleSelected(val: string) {
			currentSelected.value = val.currentSelected.value;
			currentSelects.value = val.currentSelects;
		}
		const wrapper = mount(() => (
			<VISelectV2
				v-model={currentSelect.value}
				mode="multiple"
				list={data.dropDownList}
				dynamicCss={data.dynamicCss}
				onHandleSelected={handleSelected}
			>
				{data.dropDownList.map((i) => (
					<VISelectV2Option key={i.value} label={i.label} value={i.value}></VISelectV2Option>
				))}
			</VISelectV2>
		));
		await nextTick();
		const [selectOption1, selectOption2] = wrapper.findAll(`.${ns2.n()}`);
		await selectOption1.trigger('click');
		await selectOption2.trigger('click');

		expect(currentSelected.value).toBe('fuzhou');
		expect(currentSelects.value).toStrictEqual([
			{ label: '厦门', value: 'xiamen' },
			{ label: '福州', value: 'fuzhou' },
		]);
	});

	test('event @focus @blur', async () => {
		const currentSelect = ref('');
		const data = reactive({
			dropDownList: [],
			dynamicCss: {},
		});
		const focusValue = ref();
		function focus() {
			focusValue.value = true;
		}
		function blur() {
			focusValue.value = false;
		}
		const wrapper = mount(() => (
			<VISelectV2
				v-model={currentSelect.value}
				list={data.dropDownList}
				dynamicCss={data.dynamicCss}
				onFocus={focus}
				onBlur={blur}
			>
				{data.dropDownList.map((i) => (
					<VISelectV2Option key={i.value} label={i.label} value={i.value}></VISelectV2Option>
				))}
			</VISelectV2>
		));
		await nextTick();
		wrapper.find(`.${ns4.n()}`).trigger('click');
		expect(focusValue.value).toEqual(true);
		wrapper.find(`.${ns4.n()}`).trigger('click');
		expect(focusValue.value).toEqual(false);
	});

	test('event @handleClear', async () => {
		const currentSelect = ref([{ value: 'xiamen', label: '厦门' }]);
		const data = reactive({
			dropDownList: [
				{ value: 'xiamen', label: '厦门' },
				{ value: 'fuzhou', label: '福州' },
			],
			dynamicCss: {},
		});
		const va = ref();
		function handleClear(v) {
			va.value = v.currentClose.value;
		}
		const wrapper = mount(() => (
			<VISelectV2
				v-model={currentSelect.value}
				mode="multiple"
				clearable
				list={data.dropDownList}
				dynamicCss={data.dynamicCss}
				onHandleClear={handleClear}
			>
				{data.dropDownList.map((i) => (
					<VISelectV2Option key={i.value} label={i.label} value={i.value}></VISelectV2Option>
				))}
			</VISelectV2>
		));
		await nextTick();
		wrapper
			.find(`.${ns5.n()}`)
			.find(`.${ns1.n('-svg-icon')}`)
			.trigger('click');
		expect(currentSelect.value).toEqual([]);
		expect(va.value).toEqual('xiamen');
	});

	test('props empty list', async () => {
		const temp = mount(VISelectV2, { props: {} });
		expect(temp.props('list')).toStrictEqual([]);
	});

	// test('directive css', async () => {
	// 	const temp = mount(VISelectV2, {
	// 		props: {},
	// 		directives: {css},
	// 	});
	// 	expect(temp.props('list')).toStrictEqual([]);
	// });

	test('props itemLayout', async () => {
		const data = reactive({
			currentSelect: '',
			dropDownList: [
				{ value: 'xiamen', label: '厦门' },
				{ value: 'fuzhou', label: '福州' },
			],
			dynamicCss: {},
			itemLayout: 'co1',
		});
		mount(() => (
			<VISelectV2
				v-model={data.currentSelect}
				list={data.dropDownList}
				dynamicCss={data.dynamicCss}
				itemLayout={data.itemLayout}
			>
				{data.dropDownList.map((i) => (
					<VISelectV2Option key={i.value} label={i.label} value={i.value}></VISelectV2Option>
				))}
			</VISelectV2>
		));
		data.itemLayout = 'co2';
		data.itemLayout = 'co3';
		data.itemLayout = 'co4';
		data.itemLayout = 'co5';
		data.itemLayout = 'co6';
		data.itemLayout = 'co7';
	});


	// test('props itemLayout', async () => {
	// 	const data = reactive({
	// 		currentSelect: '',
	// 		dropDownList: [
	// 			{ value: 'xiamen', label: '厦门' },
	// 			{ value: 'fuzhou', label: '111' },
	// 			{ value: 'asda', label: '222' },
	// 			{ value: 'czxc', label: '333' },
	// 			{ value: 'asdaf', label: '444' },
	// 			{ value: 'ghghg', label: '555' },
	// 			{ value: 'asd', label: '666' },
	// 			{ value: 'fuzasdashou', label: '777' },
	// 			{ value: 'adasd', label: '888' },
	// 		],
	// 		dynamicCss: {'input-width': '100',},
	// 	});
	// 	const wrapper = mount(() => (
	// 		<VISelectV2
	// 			v-model={data.currentSelect}
	// 			list={data.dropDownList}
	// 			dynamicCss={data.dynamicCss}
	// 		>
	// 			{data.dropDownList.map((i) => (
	// 				<VISelectV2Option key={i.value} label={i.label} value={i.value}></VISelectV2Option>
	// 			))}
	// 		</VISelectV2>
	// 	));

	// 	await nextTick();
	// 	wrapper.find('.vi-scroll-bar_right').trigger('mouseenter');
	// 	wrapper.find('.vi-scroll-bar_right').trigger('click');
	// });
	
});
