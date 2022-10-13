// 类型文件
import type { ExtractPropTypes } from 'vue';

//  ExtractPropTypes 来将 props 值定义转为类型定义
export const spaceProns = {
	gutter: {
		type: [String, Number, Array],
		default: 10,
	},
	justify: {
		type: String,
		default: 'flex-start',
	},
	align: {
		type: String,
		default: 'flex-start',
	},
};

export type spaceProns = ExtractPropTypes<typeof spaceProns>;
