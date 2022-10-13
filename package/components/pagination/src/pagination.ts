// 类型文件
import type { ExtractPropTypes, PropType } from 'vue';

//  ExtractPropTypes 来将 props 值定义转为类型定义
export const paginationProps = {
	background: {
		type: Boolean,
		default: false
	},
	total: {
		type: [String, Number],
		default: 100
	},
	totalLabel: {
		type: String,
		default: "Total"
	},
	jumpLabel: {
		type: String,
		default: "Go to"
	},
	pageSize: {
		type: [String, Number, Array],
		default: 10
	},
	// 支持同时显示多少个数字按钮
	pagerCount: {
		type: [String, Number],
		default: 7
	},
	layout: {
		type: String,
		default: ''
	},
	modelValue: {
		type: [String, Number],
		default: '',
	},
	dynamicCss: {
		type: Object,
		default: () => {
			return {
				/**
				 * base
				 */
				"bs-fo-size": "14",


				/**
				 * btn
				 */
				"btn-line-height": "34",
				"btn-min-width": "26",
				"btn-pad-t": "0",
				"btn-pad-r": "4",
				"btn-pad-b": "0",
				"btn-pad-l": "4",
				"btn-mar-t": "0",
				"btn-mar-r": "4",
				"btn-mar-b": "0",
				"btn-mar-l": "4",
				"btn-fo-color": "#000",
				"btn-border-radius": "4",
				"btn-hover-fo-color": "#0077ff",
				"btn-active-fo-color": "#0077ff",
				"btn-active-bg-color": "#0697ff",
				/**
				 * bg 模式
				 */
				"btn-background-bg-color": "#f0f2f5",
				"btn-background-fo-color": "#000",
				"btn-background-active-fo-color": "#fff",
				"btn-background-active-bg-color": "#0697ff",


				/**
				 * total
				 */
				"total-fo-color": "#606266",
				"total-mar-r": "8",


				/**
				 * jump
				 */
				"jump-mar-l": "8",
				"jump-input-mar-l": "8",
				"jump-input-border-radius": "4",
				"jump-input-border-color": "#d6d6d6",
				"jump-input-width": "30",
				"jump-input-bg-color": "#fff",
				"jump-input-fo-color": "#000",
				"jump-input-max-width": "50",


				/**
				 * animation
				 */
				'ani-transition': '0.5',


				/**
				 * select-v2组件
				 */
				"select-v2-mar-r": "8",
				"select-v2-input-text-alight": "center",
				"select-v2-input-width": "80",
				"select-v2-input-line-height": "30",
				"select-v2-popper-option-height": "40"
			}
		},
	}
}; // as const 声名为仅读属性

export type paginationProps = ExtractPropTypes<typeof paginationProps>;
