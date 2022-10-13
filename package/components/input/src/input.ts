// 类型文件
import type { ExtractPropTypes, PropType } from 'vue';

//  ExtractPropTypes 来将 props 值定义转为类型定义
export const inputProps = {
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
}; // as const 声名为仅读属性

export type inputProps = ExtractPropTypes<typeof inputProps>;
export default inputProps;
