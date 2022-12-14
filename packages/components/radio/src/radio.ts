// 类型文件
import type { ExtractPropTypes, PropType } from 'vue';

//  ExtractPropTypes 来将 props 值定义转为类型定义
export const radioProps = {
	border: {
		type: Boolean,
		default: false,
	},
	label: {
		type: [String, Number],
		default: '',
	},
	value: {
		type: [String, Number],
		default: '',
	},
	disabled: {
		type: [String, Number, Boolean],
		default: false,
	},
	modelValue: {
		type: [String, Number, Boolean],
		default: '',
	},
	dynamicCss: {
		type: Object,
		default: () => {
			return {
				/**
				 * 基础
				 */
				'bs-mar-t': 0,
				'bs-mar-r': 10,
				'bs-mar-b': 10,
				'bs-mar-l': 0,
				'bs-pad-t': 4,
				'bs-pad-r': 8,
				'bs-pad-b': 4,
				'bs-pad-l': 8,
				'bs-bg-color': '#fff',
				'bs-disabled-color': 'gray',
				'bs-border-radius': '4',
				'bs-border-width': '1',
				'bs-border-type': 'solid',
				'bs-border-color': '#00b7ff',

				/**
				 * circle
				 */
				'circle-size': '12',
				'circle-out-bg-color': '#989898', // 外圈颜色
				'circle-out-hover-bg-color': '#00b7ff', // 外圈悬浮颜色
				'circle-out-active-bg-color': '#01b3f9', // 外圈激活颜色
				'circle-inner-bg-color': '#fff', // 内圈颜色
				'circle-inner-size': '10', // 内圈size
				'circle-inner-active-bg-color': '#fff', // 内圈激活颜色
				'circle-inner-active-size': '4', // 内圈激活size

				/**
				 * label
				 */
				'txt-fo-size': '14',
				'txt-fo-color': '#000',
				'txt-fo-active-color': '#00b7ff',
				'txt-fo-active-weight': '500',
				'txt-pad-l': '8',

				/**
				 * button mode
				 */
				'btn-fo-size': '12',
				'btn-fo-color': '#000',
				'btn-fo-active-color': '#fff',
				'btn-pad-t': '4',
				'btn-pad-r': '12',
				'btn-pad-b': '4',
				'btn-pad-l': '12',
				'btn-bg-color': '#fff',
				'btn-bg-active-color': '#409eff',
				'btn-border-width': '1',
				'btn-border-type': 'solid',
				'btn-border-color': '#dcdfe6',

				/**
				 * animation
				 */
				'ani-transition': '0.5',
			};
		},
	},
};

export type radioProps = ExtractPropTypes<typeof radioProps>;
