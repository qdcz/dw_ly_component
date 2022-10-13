// 类型文件
import type { ExtractPropTypes } from 'vue';

//  ExtractPropTypes 来将 props 值定义转为类型定义
export const radioButtonProps = {
	border: {
		type: Boolean,
		default: false
	},
	label: {
		type: [String, Number],
		default: ''
	},
	value: {
		type: [String, Number],
		default: ''
	},
	disabled: {
		type: [String, Number, Boolean],
		default: false
	},
	modelValue: {
		type: [String, Number, Boolean],
		default: '',
	},
}; // as const 声名为仅读属性

export type radioButtonProps = ExtractPropTypes<typeof radioButtonProps>;
