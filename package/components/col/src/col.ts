// 类型文件
import type { ExtractPropTypes } from 'vue';
// import { isNumber } from '@visix-ui/utils/types';
//  ExtractPropTypes 来将 props 值定义转为类型定义
export const colProns = {
	span: {
		type: Number, //[String, Number],
		default: 24,
	},
};

export type colProns = ExtractPropTypes<typeof colProns>;
