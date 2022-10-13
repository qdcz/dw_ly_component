// 类型文件
import type { ExtractPropTypes, PropType } from 'vue';
//  ExtractPropTypes 来将 props 值定义转为类型定义
export const drawerProns = {
	type: {
		// 注意这里类型为StringConstructor
		type: String as PropType<'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger'>,
		default: 'default',
	},
}; // as const 声名为仅读属性

export type drawerProns = ExtractPropTypes<typeof drawerProns>;
