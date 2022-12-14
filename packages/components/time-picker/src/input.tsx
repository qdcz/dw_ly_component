import { defineComponent, computed, reactive } from 'vue';
import { createNamespace } from '@dw/utils/components';
import css from '@dw/directives/css';
import VIInputSvgIcon from './svg-icon';
// import { inputProps } from './input';
const inputProps = {
	modelValue: {
		type: [String, Number, Array],
		default: '',
	},
	showPassword: {
		type: [String, Boolean],
		default: false,
	},
	disabled: {
		type: [String, Boolean],
		default: false,
	},
	readonly: {
		type: [String, Boolean],
		default: false,
	},
	clearable: {
		type: [String, Boolean],
		default: false,
	},
	placeholder: {
		type: String,
		default: '请选择您需要的内容o(*￣▽￣*)ブ',
	},
	dynamicCss: {
		type: Object,
		default: () => {
			return {
				/**
				 * input组件
				 */
				'input-box-shadow-x': '0',
				'input-box-shadow-y': '0',
				'input-box-shadow-blur': '0',
				'input-box-shadow-spread': '1',
				'input-box-shadow-color': '#dcdfe6',
				'input-hover-box-shadow-x': '0',
				'input-hover-box-shadow-y': '0',
				'input-hover-box-shadow-blur': '0',
				'input-hover-box-shadow-spread': '1',
				'input-hover-box-shadow-color': '#85a2dd',
				'input-active-box-shadow-x': '0',
				'input-active-box-shadow-y': '0',
				'input-active-box-shadow-blur': '0',
				'input-active-box-shadow-spread': '1',
				'input-active-box-shadow-color': 'rgb(0, 94, 255)',
				'input-border-radius': '4',
				'input-line-padding-t': '0',
				'input-line-padding-r': '28',
				'input-line-padding-b': '0',
				'input-line-padding-l': '8',
				'input-bg-color': 'rgba(255,255,255)',
				'input-fo-color': '#606266',
				'input-fo-size': '12',
				'input-fo-weight': '600',
				'input-line-height': '30',
				'input-width': '200',
				'input-text-alight': 'start',
				'input-icon-width': '12',
				'input-icon-color': '#000',
				'input-icon-hover-color': '#008cc8',
				'input-placeholder-fo-color': 'gray',
			};
		},
	},
};

const { n, classes } = createNamespace('timePickerInput');
export default defineComponent({
	name: 'VITimePickerInput',
	emits: ['focus', 'blur', 'click', 'update:modelValue', 'close'],
	directives: { css },
	props: inputProps,
	components: {
		"vi-input-svg-icon": VIInputSvgIcon,
	},
	setup(props: any, ctx) {
		const arrowSvgPath =
			'm488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z';
		const closeSvgPath =
			'M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z';

		const data = reactive({
			softFocus: false,
			isHover: false,
		});

		const handleInputClick = function (e) {
			if (isDisabled.value) return;
			ctx.emit('click', e);
		};

		const handleCloseIconClick = function (e) {
			if (isDisabled.value) return;
			ctx.emit('update:modelValue', e.target.value);
			ctx.emit('close');
			e.stopPropagation();
		};

		const handleFocus = function (e) {
			if (isDisabled.value) return;
			ctx.emit('focus', e);
			data.softFocus = true;
		};

		const handleBlur = function (e) {
			if (isDisabled.value) return;
			ctx.emit('blur', e);
			data.softFocus = false;
		};

		const handleMouseEn = function (e) {
			if (isDisabled.value) return;
			data.isHover = true;
		};

		const handleMouseOu = function (e) {
			if (isDisabled.value) return;
			data.isHover = false;
		};

		const handleChange = function (e) {
			if (isDisabled.value) return;
			ctx.emit('update:modelValue', e.target.value);
		};

		const handleInput = function (e) {
			if (isDisabled.value) return;
			ctx.emit('update:modelValue', e.target.value);
		};

		const dynamicCssBridge = computed(() => Object.assign(inputProps.dynamicCss.default(), props.dynamicCss));
		const readonlyBridge = computed(() => {
			if (typeof props.readonly == 'string') {
				return true;
			} else {
				return props.readonly;
			}
		});

		const isClearable = computed(() => {
			if (typeof props.clearable == 'string') {
				return true;
			} else {
				return props.clearable;
			}
		});

		const isShowPassword = computed(() => {
			if (typeof props.showPassword == 'string') {
				return true;
			} else {
				return props.showPassword;
			}
		});

		const isDisabled = computed(() => {
			if (typeof props.disabled == 'string') {
				return true;
			} else {
				return props.disabled;
			}
		});

		const isActive = computed(() => (data.softFocus ? 'active' : ''));

		return () => (
			<div
				class={[classes(n()), isActive.value, isDisabled.value ? 'disabled' : '']}
				v-css={dynamicCssBridge.value || {}}
				onClick={handleInputClick}
				onMouseenter={handleMouseEn}
				onMouseleave={handleMouseOu}
			>
				<input
					class={[n('_inner')]}
					placeholder={props.placeholder}
					onFocus={handleFocus}
					onBlur={handleBlur}
					readonly={readonlyBridge.value || isDisabled.value}
					value={props.modelValue}
					onChange={handleChange}
					onInput={handleInput}
					type={isShowPassword.value ? 'password' : 'text'}
				></input>
				{props.modelValue && isClearable.value && data.isHover ? (
					<vi-input-svg-icon
						class="icon"
						height={dynamicCssBridge.value['input-icon-width']}
						width={dynamicCssBridge.value['input-icon-width']}
						path={closeSvgPath}
						onClick={handleCloseIconClick}
					></vi-input-svg-icon>
				) : (
					''
				)}
			</div>
		);
	},
});
