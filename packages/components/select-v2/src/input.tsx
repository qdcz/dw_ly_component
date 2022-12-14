import { defineComponent, computed, inject, reactive } from 'vue';
import { createNamespace } from '@dw/utils/components';
import VISelectV2SvgIcon from './svg-icon';
import { SELECTV2_INJECTION_KEY } from '../../../tokens/selectv2';
const { n, classes } = createNamespace('select-v2-input');

export default defineComponent({
	name: 'VISelectV2Input',
	emits: ['focus', 'blur', 'click', 'clear'],
	props: {
		active: {
			type: [Boolean, String],
			default: '',
		},
		placeholder: {
			type: String,
			default: 'o(*￣▽￣*)ブ',
		},
		iconHeight: {
			type: [Number, String],
			default: '12',
		},
		iconWidth: {
			type: [Number, String],
			default: '12',
		},
	},
	components: {
		'vi-select-v2-svg-icon': VISelectV2SvgIcon,
	},
	setup(props, ctx) {
		const { currentSelect, clearable, cacheOptionList, mode }: any = inject(SELECTV2_INJECTION_KEY);

		const arrowSvgPath =
			'm488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z';
		const closeSvgPath =
			'M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z';

		const data = reactive({
			isHover: false,
		});

		const handleInputClick = function (e) {
			ctx.emit('click', e);
		};

		const handleCloseIconClick = function (e) {
			currentSelect.value = '';
			ctx.emit('clear');
			e.stopPropagation();
		};

		const handleFocus = function (e) {
			ctx.emit('focus', e);
		};

		const handleBlur = function (e) {
			ctx.emit('blur', e);
		};

		const handleMouseEn = function (e) {
			data.isHover = true;
		};

		const handleMouseOu = function (e) {
			data.isHover = false;
		};

		const inputLabel = computed(() => cacheOptionList.value[currentSelect.value]);

		return () => (
			<div
				class={[classes(n(), props.active ? 'active' : '')]}
				onClick={handleInputClick}
				onMouseenter={handleMouseEn}
				onMouseleave={handleMouseOu}
			>
				<input
					class={[n('_inner')]}
					placeholder={props.placeholder}
					onFocus={handleFocus}
					onBlur={handleBlur}
					value={inputLabel.value}
					readonly
				></input>
				{data.isHover && currentSelect.value && clearable.value && mode.value == 'single' ? (
					<vi-select-v2-svg-icon
						height={props.iconHeight}
						width={props.iconWidth}
						path={closeSvgPath}
						onClick={handleCloseIconClick}
					></vi-select-v2-svg-icon>
				) : (
					<vi-select-v2-svg-icon
						height={props.iconHeight}
						width={props.iconWidth}
						path={arrowSvgPath}
						class={['arrow', props.active ? 'turnUp' : 'turnDown']}
					></vi-select-v2-svg-icon>
				)}
			</div>
		);
	},
});
