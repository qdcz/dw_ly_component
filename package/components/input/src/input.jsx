import { defineComponent, computed, reactive } from 'vue';
import { createNamespace } from '@visix-ui/utils/components';
import css from '@visix-ui/directives/css';
import { inputProps } from './input';
import VIInputSvgIcon from './svg-icon.jsx';

const { n, classes } = createNamespace('input');
export default defineComponent({
	name: 'VIInput',
	emits: ['focus', 'blur', 'click', 'update:modelValue', 'close'],
	directives: { css },
	props: inputProps,
	components: [VIInputSvgIcon],
	setup(props, ctx) {
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
				onmouseenter={handleMouseEn}
				onmouseleave={handleMouseOu}
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
					<VIInputSvgIcon
						class="icon"
						height={dynamicCssBridge.value['input-icon-width']}
						width={dynamicCssBridge.value['input-icon-width']}
						path={closeSvgPath}
						onClick={handleCloseIconClick}
					></VIInputSvgIcon>
				) : (
					''
				)}
			</div>
		);
	},
});
