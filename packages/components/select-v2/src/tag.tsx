import { defineComponent, computed, inject, reactive } from 'vue';
import { createNamespace } from '@dw/utils/components';
import VISvgIcon from './svg-icon.jsx';
import { SELECTV2_INJECTION_KEY } from '../../../tokens/selectv2';
const { n, classes } = createNamespace('select-v2-tag');

export default defineComponent({
	name: 'VISelectV2Tag',
	emits: ['click', 'closeClick', 'hover'],
	props: {
		label: {
			type: [Number, String],
			default: '',
		},
		value: {
			type: [Number, String],
			default: '',
		},
		// 是否显示tooltip
		tooltip: {
			type: [Boolean, String],
			default: false,
		},
		height: {
			type: [Number, String],
			default: '',
		},
		width: {
			type: [Number, String],
			default: '',
		},
	},
	components: {
		'vi-svg-icon': VISvgIcon,
	},
	setup(props, ctx) {
		const { currentSelect }: any = inject(SELECTV2_INJECTION_KEY);
		const closeSvgPath =
			'M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z';
		const handleCloseIconClick = function (e) {
			let arr = JSON.parse(JSON.stringify(currentSelect.value));
			try {
				arr.forEach((element, index) => {
					if (element.value == props.value) {
						arr.splice(index, 1);
						throw new Error();
					}
				});
			} catch (e) {}
			currentSelect.value = arr;
			ctx.emit &&
				ctx.emit('closeClick', {
					currentClose: {
						label: props.label,
						value: props.value,
					},
					currentSelects: JSON.parse(JSON.stringify(arr)),
				});
			e.stopPropagation();
		};

		return () => (
			<div class={[classes(n()), props.tooltip ? 'useToolTip' : '']} data-txt={props.label}>
				<span class={n('_span')}>{props.label}</span>
				<vi-svg-icon
					path={closeSvgPath}
					onClick={handleCloseIconClick}
					height={props.height + 'px'}
					width={props.width + 'px'}
				></vi-svg-icon>
			</div>
		);
	},
});
