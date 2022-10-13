// 类型文件
import type { ExtractPropTypes, PropType } from 'vue';

function typeValidator(type: string): boolean {
	return ['default', 'primary', 'info', 'success', 'warning', 'danger'].includes(type);
}
function sizeValidator(size: string): boolean {
	return ['normal', 'mini', 'small', 'large'].includes(size);
}

//  ExtractPropTypes 来将 props 值定义转为类型定义
export const buttonProns = {
	type: {
		// 注意这里类型为StringConstructor
		type: String as PropType<'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger'>,
		default: 'default',
		validator: typeValidator,
	},
	shape: {
		type: String as PropType<'triangle' | 'round' | 'default'>,
		default: 'default',
	},
	size: {
		type: String as PropType<'normal' | 'mini' | 'small' | 'large'>,
		default: 'normal',
		validator: sizeValidator,
	},
	loading: {
		type: Boolean,
		default: false,
	},
	round: {
		type: Boolean,
		default: false,
	},
	block: {
		type: Boolean,
		default: false,
	},
	text: {
		type: Boolean,
		default: false,
	},
	outline: {
		type: Boolean,
		default: false,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	active: {
		type: Boolean,
		default: false,
	},
	ripple: {
		type: Boolean,
		default: true,
	},
	shadow: {
		type: Boolean,
		default: true,
	},
	color: {
		type: String,
	},
	textColor: {
		type: String,
	},
	autoLoading: {
		type: Boolean,
		default: false,
	},
	loadingRadius: {
		type: [Number, String],
		default: 12,
	},
}; // as const 声名为仅读属性

export type buttonProns = ExtractPropTypes<typeof buttonProns>;
