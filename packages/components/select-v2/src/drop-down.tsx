import { defineComponent, inject, ref, nextTick, reactive, watchEffect, onMounted } from 'vue';
import { createNamespace } from '@dw/utils/components';
import VISvgIcon from './svg-icon.tsx';
const { n, classes } = createNamespace('select-v2-dropdown');
import { SELECTV2_INJECTION_KEY } from '../../../tokens/selectv2';
// import { computePosition, arrow } from '@floating-ui/core';
import { createPopper } from '@popperjs/core';

export default defineComponent({
	name: 'VISelectV2DropDown',
	emits: ['focus', 'blur', 'click'],
	props: ['active'],
	components: {
		'vi-svg-icon': VISvgIcon,
	},
	setup(props, ctx) {
		let { selectRef, mode, currentSelect }: any = inject(SELECTV2_INJECTION_KEY);

		type dropDownData = {
			parentRect: any;
			dropdownTop: string;
			[propName: string]: any;
		}
		const data: dropDownData = reactive({
			parentRect: {
				x: 0,
				y: 0,
			},
			dropdownTop: '0',
		});

		const arrowRef = ref<HTMLInputElement | any>();
		const dropDownRef = ref<HTMLDivElement | any>();

		const reSetDropdownTop = () => {
			nextTick(() => {
				// getBoundingClientRect 获取的位置信息是不准确的
				// data.parentRect = selectRef.value.getBoundingClientRect();
				// data.dropdownTop = data.parentRect.height + 10 + 'px';
				data.dropdownTop = selectRef.value.clientHeight + 10 + 'px';
			});
		};

		onMounted(() => reSetDropdownTop());
		// computePosition(provideData.selectRef.vavlue, arrowRef.value, {
		//   placement: 'right',
		//     middleware: [

		//     ],
		//   }).then(({middlewareData}) => {
		//     const {x, y} = middlewareData.arrow;

		//     Object.assign(arrowEl.style, {
		//       left: x != null ? `${x}px` : '',
		//       top: y != null ? `${y}px` : '',
		//     });
		//   });
		// nextTick(() => {
		//     console.log(11, provideData.selectRef.value, dropDownRef.value);
		//     createPopper(provideData.selectRef.vavlue, dropDownRef.value, {
		//         placement: 'left',
		//         modifiers: [
		//             {
		//                 name: 'computeStyles',
		//                 options: {
		//                     roundOffsets: ({ x, y }) => ({
		//                         x: Math.round(x + 200),
		//                         y: Math.round(y + 200),
		//                     }),
		//                 },
		//             },
		//         ],
		//     });
		// })

		watchEffect(() => {
			let val = currentSelect.value;
			if (mode.value == 'multiple' && val) {
				// 等待input高度被撑开后 重新获取select组件的高度
				setTimeout(() => {
					reSetDropdownTop();
				}, 200);
			}
		});

		return () => (
			<div class={[n('-popper'), props.active ? 'active' : '']} style={{ top: data.dropdownTop }}>
				<div ref={arrowRef} class={[n('-arrow'), props.active ? 'active' : '']}></div>
				<div ref={dropDownRef} class={[classes(n(), props.active ? 'active' : '')]}>
					<div class={[classes(n('_inner'))]}>{ctx.slots['default']?.()}</div>
				</div>
			</div>
		);
	},
});
