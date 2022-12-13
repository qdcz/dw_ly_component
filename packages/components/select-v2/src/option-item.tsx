import { defineComponent, computed, inject, onMounted, onUnmounted, watchEffect } from 'vue';
import { createNamespace } from '@dw/utils/components';
import VISvgIcon from './svg-icon';
const { n, classes } = createNamespace('select-v2-option');
import { SELECTV2_INJECTION_KEY } from '../../../tokens/selectv2';

export default defineComponent({
	name: 'VISelectV2Option',
	emits: ['click'],
	props: ['label', 'value'],
	components: {
		'vi-svg-icon': VISvgIcon,
	},
	setup(props, ctx) {
		const {
			currentSelect,
			currentSelectLabel,
			mode,
			dropDownVisible,
			cacheOptionList,
			selectedFn,
			deleteOptionItem,
		}: any = inject(SELECTV2_INJECTION_KEY);

		const handleClick = function () {
			if (mode.value == 'single') {
				currentSelect.value = props.value;
				currentSelectLabel.value = props.label;
				dropDownVisible.value = false;
			} else if (mode.value == 'multiple') {
				let arr = JSON.parse(JSON.stringify(currentSelect.value));
				let flag = false;
				try {
					arr.forEach((element, index) => {
						if (element.value == props.value) {
							arr.splice(index, 1);
							flag = true;
							throw new Error();
						}
					});
				} catch (e) {}
				if (!flag) {
					arr.push({
						label: props.label,
						value: props.value,
					});
				}
				currentSelect.value = arr;
			}
			selectedFn({ label: props.label, value: props.value });
		};

		// 外部变化 重新缓存
		watchEffect(() => {
			cacheOptionList.value = { key: props.label, value: props.value };
		});

		onMounted(() => {
			cacheOptionList.value = { key: props.label, value: props.value };
		});

		onUnmounted(() => {
			deleteOptionItem(props.value);
		});

		const isActive = computed(() => {
			if (mode.value == 'single') {
				return currentSelect.value == props.value;
			} else if (mode.value == 'multiple') {
				let flag = false;
				try {
					currentSelect.value.forEach((i) => {
						if ((flag = i.value == props.value)) {
							throw new Error();
						}
					});
				} catch (e) {}
				return flag;
			}
		});

		return () => (
			<li class={[classes(n()), isActive.value ? 'active' : '']} onClick={handleClick}>
				{/* <VISvgIcon></VISvgIcon> */}
				<div class={'txt'}>{props.label}</div>
				{/* <VISvgIcon></VISvgIcon> */}
			</li>
		);
	},
});
