// 类型文件
import type { ExtractPropTypes, PropType } from 'vue';

function sizeValidator(size: string): boolean {
	return ['normal', 'mini', 'small', 'large'].includes(size);
}

//  ExtractPropTypes 来将 props 值定义转为类型定义
export const cardButtonProns = {
	type: {
		// 注意这里类型为StringConstructor
		type: String as PropType<'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger'>,
		default: 'default',
	},
	size: {
		type: String as PropType<'normal' | 'mini' | 'small' | 'large'>,
		default: 'normal',
		validator: sizeValidator,
	},

	icon: {
		type: String,
		default: '',
	},
	// 渲染背景
	bg: {
		type: Boolean,
		default: false,
	},
	bold: {
		type: Boolean,
		default: false,
	},
	shadow: {
		type: Boolean,
		default: true,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	ripple: {
		type: Boolean,
		default: true,
	},
};

export type cardButtonProns = ExtractPropTypes<typeof cardButtonProns>;
