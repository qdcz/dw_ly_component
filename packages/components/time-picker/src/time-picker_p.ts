// 类型文件
import type { ExtractPropTypes } from 'vue';

//  ExtractPropTypes 来将 props 值定义转为类型定义
export const timePickerProps = {
	clearable: {
		type: [String, Boolean],
		default: false,
	},
	isRange: {
		type: [String, Boolean],
		default: false,
	},
	// 限制时间选择范围
	disabledHours: {
		type: Array,
		default: [],
	},
	// 限制时间选择范围
	disabledMinutes: {
		type: Array,
		default: [],
	},
	// 限制时间选择范围
	disabledSeconds: {
		type: Array,
		default: [],
	},
	// 通过界面上的箭头进行选择
	arrowControl: {
		type: [String, Boolean],
		default: '',
	},
	placeholder: {
		type: String,
		default: 'Arbitrary time',
	},
	startPlaceholder: String,
	endPlaceholder: String,
	modelValue: {
		type: [String, Number, Boolean],
		default: '',
	},
	dynamicCss: {
		type: Object,
		default: () => {
			return {
				/**
				 * input组件
				 */
				'input-box-shadow-x': '0',
				'input-box-shadow-y': '0',
				'input-box-shadow-blur': '0',
				'input-box-shadow-spread': '1',
				'input-box-shadow-color': '#dcdfe6',
				'input-hover-box-shadow-x': '0',
				'input-hover-box-shadow-y': '0',
				'input-hover-box-shadow-blur': '0',
				'input-hover-box-shadow-spread': '1',
				'input-hover-box-shadow-color': '#85a2dd',
				'input-active-box-shadow-x': '0',
				'input-active-box-shadow-y': '0',
				'input-active-box-shadow-blur': '0',
				'input-active-box-shadow-spread': '1',
				'input-active-box-shadow-color': 'rgb(0, 94, 255)',
				'input-border-radius': '4',
				'input-line-padding-t': '0',
				'input-line-padding-r': '28',
				'input-line-padding-b': '0',
				'input-line-padding-l': '8',
				'input-bg-color': 'rgba(255,255,255)',
				'input-fo-color': '#606266',
				'input-fo-size': '12',
				'input-fo-weight': '600',
				'input-line-height': '30',
				'input-width': '200',
				'input-text-alight': 'start',
				'input-icon-width': '12',
				'input-icon-color': '#000',
				'input-icon-hover-color': '#008cc8',
				'input-placeholder-fo-color': 'gray',

				/**
				 * popper组件样式
				 */
				'popper-bg-color': '#fff',
				'popper-height': '228', // max-height
				'popper-border-radius': '8',
				'popper-z-index': '999',
				'popper-box-shadow-x': '0',
				'popper-box-shadow-y': '0',
				'popper-box-shadow-blur': '12',
				'popper-box-shadow-spread': '0',
				'popper-box-shadow-color': 'rgba(0, 0, 0, 0.12)',
				'popper-arrow-height': '5',

				/**
				 * time-panel样式
				 */
				'popper-panel-padding-t': '8',
				'popper-panel-padding-r': '4',
				'popper-panel-padding-b': '0',
				'popper-panel-padding-l': '4',
				'popper-footer-height': '36',
				'popper-footer-fo-size': '12',
				'popper-footer-border-top-width': '1',
				'popper-footer-border-top-style': 'solid',
				'popper-footer-border-top-color': 'rgb(228, 231, 237)',
				'popper-footer-cancel-fo-color': '#303133',
				'popper-footer-ok-fo-color': 'skyblue',
				'popper-footer-ok-fo-weight': '800',
				'popper-footer-ok-margin-t': '0',
				'popper-footer-ok-margin-r': '5',
				'popper-footer-ok-margin-b': '0',
				'popper-footer-ok-margin-l': '5',
				'popper-footer-ok-padding-t': '0',
				'popper-footer-ok-padding-r': '5',
				'popper-footer-ok-padding-b': '0',
				'popper-footer-ok-padding-l': '5',

				/**
				 * time-panel popper-spinner
				 */
				'popper-spinner-pitch-box-border-top-width': '1',
				'popper-spinner-pitch-box-border-top-style': 'solid',
				'popper-spinner-pitch-box-border-top-color': '#e4e7ed',
				'popper-spinner-pitch-box-border-bottom-width': '1',
				'popper-spinner-pitch-box-border-bottom-style': 'solid',
				'popper-spinner-pitch-box-border-bottom-color': '#e4e7ed',
				'popper-spinner-number-height': '32',
				'popper-spinner-number-fo-color': '#606266',
				'popper-spinner-number-fo-size': '12',
				'popper-spinner-number-hover-bg-color': '#e0e0e0',
				'popper-spinner-number-active-fo-color': '#000',
				'popper-spinner-number-active-fo-weight': '700',
				'popper-spinner-number-active-hover-bg-color': 'rgba($color: #e0e0e0, $alpha: 0)',
				'popper-spinner-number-disabled-fo-color': 'rgb(223, 223, 223)',
				'popper-spinner-number-disabled-hover-bg-color': 'rgba($color: #e0e0e0, $alpha: 0)',

				/**
				 * scroll-bar样式
				 */
				'scroll-bar-thumb-width': '8',
				'scrollBarHeight': '60',
				'scrollBarBgColor': 'rgb(218, 218, 218)',
				'scrollBarBgColorHover': 'skyblue',
			};
		},
	},
}; // as const 声名为仅读属性

export type timePickerProps = ExtractPropTypes<typeof timePickerProps>;
