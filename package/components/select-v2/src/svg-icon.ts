// 类型文件
import type { ExtractPropTypes } from 'vue';

//  ExtractPropTypes 来将 props 值定义转为类型定义
export const svgIconProps = {
	path: {
		type: String,
		default: `M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 
        764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 
        45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z`
	},
	height: {
		type: [String, Number],
		default: "12"
	},
	width: {
		type: [String, Number],
		default: "12"
	},
	modelValue: {
		type: [String, Number, Boolean],
		default: '',
	},
}; // as const 声名为仅读属性

export type svgIconProps = ExtractPropTypes<typeof svgIconProps>;
export default svgIconProps;
