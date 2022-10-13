// 类型文件
import type { ExtractPropTypes } from 'vue';

//  ExtractPropTypes 来将 props 值定义转为类型定义
export const labelProns = {
	text: {
		type: String,
		default: '',
	},
	size: {
		type: [Number, String],
		default: 12,
	},
	color: {
		type: [String, Array],
		default: '#fff',
	},
	bold: {
		type: Boolean,
		default: true,
	},
	block: {
		type: Boolean,
		default: true,
	},
	align: {
		type: String,
		default: 'center',
	},
	data: {
		type: Object,
		default: {},
	},
	duration: {
		type: [String, Number],
		default: (value: any) => {
			return value.duration * 1 < 1.2 ? 1.2 : value.duration;
		},
	},
};

export type labelProns = ExtractPropTypes<typeof labelProns>;
