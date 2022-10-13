// 类型文件
import type { ExtractPropTypes, PropType } from 'vue';

function typeValidator(type: string): boolean {
	return ['default', 'primary', 'info', 'success', 'warning', 'danger'].includes(type);
}
function sizeValidator(size: string): boolean {
	return ['normal', 'mini', 'small', 'large'].includes(size);
}

//  ExtractPropTypes 来将 props 值定义转为类型定义
export const radioProns = {
	type: {
		// 注意这里类型为StringConstructor
		type: String as PropType<'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger'>,
		default: 'default',
		validator: typeValidator,
	},
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

export type radioProns = ExtractPropTypes<typeof radioProns>;
