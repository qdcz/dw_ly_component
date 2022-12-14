import { defineComponent, inject, ref, nextTick, reactive, watchEffect, onMounted } from 'vue';
import { createNamespace } from '@dw/utils/components';
const { n, classes } = createNamespace('popper');
import { TIMEPICKER_INJECTION_KEY } from '../../../tokens/time-picker';
// import { computePosition, arrow } from '@floating-ui/core';
import { createPopper } from '@popperjs/core';

export default defineComponent({
	name: 'VITimePickerPopper',
	emits: ['focus', 'blur', 'click'],
	props: ['active'],
	setup(props, ctx) {
		let { timePickerRef }: any = inject(TIMEPICKER_INJECTION_KEY);

		type popperData = {
			parentRect: any;
			dropdownTop: string;
		}
		const data = reactive({
			parentRect: {
				x: 0,
				y: 0,
				height: 0,
				width: 0,
			},
			dropdownTop: '0',
		});

		const arrowRef = ref(null);
		const contentRef = ref(null);

		const reSetDropdownTop = () => {
			nextTick(() => {
				// TODO 跟随视口方向 做不同的展示动画
				// document.addEventListener('scroll', (e) => {
				//     const rect = timePickerRef.value.getBoundingClientRect();
				//     let flag = (
				//         rect.top >= 0 &&
				//         rect.left >= 0 &&
				//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
				//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
				//     )
				//     console.log(777, timePickerRef.value.getBoundingClientRect(), flag);
				// })
				data.parentRect = timePickerRef.value.getBoundingClientRect();
				// console.log(777, data.parentRect)
				data.dropdownTop = data.parentRect.height + 10 + 'px';
				// data.dropdownTop = - data.parentRect.height - 10 + 'px';
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

		// watchEffect(() => {
		//     let val = currentSelect.value;
		//     if (mode.value == 'multiple' && val) {
		//         // 等待input高度被撑开后 重新获取select组件的高度
		//         setTimeout(() => {
		//             reSetDropdownTop();
		//         }, 10);
		//     }
		// });

		return () => (
			<div class={[n(''), props.active ? 'active' : '']} style={{ top: data.dropdownTop }}>
				<div ref={arrowRef} class={[n('_arrow')]}>
					{props.active}
				</div>
				<div ref={contentRef} class={[classes(n('_content'))]}>
					<div class={[classes(n('_inner'))]}>{ctx.slots['default']?.()}</div>
				</div>
			</div>
		);
	},
});
