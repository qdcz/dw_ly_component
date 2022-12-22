// 类型文件
import type { ExtractPropTypes, PropType } from 'vue';

//  ExtractPropTypes 来将 props 值定义转为类型定义
export const selectProps = {
	modelValue: {
		type: [String, Number, Array],
		default: '',
	},
	mode: {
		type: String as PropType<'single' | 'multiple' | string>,
		default: 'single',
	},
	list: {
		type: Array,
		default: () => [],
	},
	itemLayout: {
		type: String as PropType<'auto' | 'co1' | 'co2' | 'co3' | 'co4' | 'co5' | 'co6' | 'co7'>,
		default: 'co1',
	},
	clearable: Boolean,
	tooltip: Boolean,
	showMore: Boolean,
	search: Boolean,
	searchImg: { // 是否使用图片icon 未给值的话默认使用svg
		type: String,
		default: 'https://cdn-upload.datav.aliyun.com/upload/download/1666233796787-Qfh6D-SR.svg',
	},
	placeholder: {
		type: String,
		default: '请选择您需要的选项o(*￣▽￣*)ブ',
	},
	dynamicCss: {
		type: Object,
		default: () => {
			return {
				/**
				 * input
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
				'input-line-padding-r': '8',
				'input-line-padding-b': '0',
				'input-line-padding-l': '8',
				'input-bg-color': 'rgba(255,255,255)',
				'input-fo-color': '#606266',
				'input-fo-size': '12',
				'input-fo-weight': '600',
				'input-placeholder-fo-color': 'gray',
				'input-line-height': '30',
				'input-width': '200',
				'input-text-alight': 'start',
				'input-icon-width': '12',
				'input-icon-color': '#000',

				/**
				 * tag
				 */
				'tag-height': '30', // 为不影响美观，请将高度小于input高度
				'tag-max-width': '80',
				'tag-margin-t': '2',
				'tag-margin-r': '0',
				'tag-margin-b': '2',
				'tag-margin-l': '2',
				'tag-padding-t': '0',
				'tag-padding-r': '5',
				'tag-padding-b': '0',
				'tag-padding-l': '9',
				'tag-border-radius': '4',
				'tag-fo-color': '#909399',
				'tag-fo-size': '10',
				'tag-fo-weight': '500',
				'tag-bg-color': '#f0f2f5',
				'tag-close-size': '12',
				'tag-close-hover-bg-color': 'gray',
				'tag-close-hover-fo-color': '#fff',

				/**
				 * tooltip
				 */
				'tag-tooltip-bg-color': '#3a81d2',
				'tag-tooltip-fo-color': '#fff',
				'tag-tooltip-fo-size': '12',
				'tag-tooltip-fo-weight': '500',

				/**
				 * popper
				 */
				'popper-bg-color': '#fff',
				'popper-height': '250', // max-height
				'popper-padding': '4', // dropdownHeight 包含了 dropdownPadding
				'popper-border-radius': '8',
				'popper-z-index': '999',
				'popper-box-shadow-x': '0',
				'popper-box-shadow-y': '0',
				'popper-box-shadow-blur': '12',
				'popper-box-shadow-spread': '0',
				'popper-box-shadow-color': 'rgba(0, 0, 0, 0.12)',
				'popper-arrow-height': '6',

				/**
				 * popper-option
				 */
				'popper-option-fo-size': '12',
				'popper-option-fo-weight': '500',
				'popper-option-fo-color': '#64666a',
				'popper-option-height': '40', // 等高列表后期可以做成虚拟列表版本
				'popper-option-padding-lr': '8', // 只暴露左右边距
				'popper-option-hover-bg-color': '#f5f7fa',
				'popper-option-active-fo-color': '#409eff',
				'popper-option-active-fo-weight': '600',
				'popper-option-txt-margin-lr': '6', // 只暴露左右边距
				'popper-option-fo-alight': 'start', 
				
				

				/**
				 * popper-search
				 */
				'popper-search-line-height': '20',
				'popper-search-fo-size': '12',
				'popper-search-fo-color': 'gray',
				'popper-search-fo-weight': '500',
				'popper-search-box-shadow-x': '0',
				'popper-search-box-shadow-y': '0',
				'popper-search-box-shadow-blur': '0',
				'popper-search-box-shadow-spread': '1',
				'popper-search-box-shadow-color': '#e0e3e9',
				'popper-search-border-radius': '4',
				'popper-search-padding-t': '4',
				'popper-search-padding-r': '10',
				'popper-search-padding-b': '4',
				'popper-search-padding-l': '30',
				'popper-search-bg-color':'initial',
				'popper-search-inp-bg-color': 'initial',
				'popper-search-icon-size':"14",

				/**
				 * 展开层
				 */
				'unfold-icon-height': '14', //  关闭按钮大小
				'unfold-icon-width': '14', // 关闭按钮大小
				'unfold-icon-hover-fo-color': '#00b7ff', // 关闭按钮悬浮颜色
				'unfold-height': '300', // 展开弹窗大小
				'unfold-width': '600', // 展开弹窗大小
				'unfold-padding-t': '10', // 内边距
				'unfold-padding-r': '10',
				'unfold-padding-b': '10',
				'unfold-padding-l': '10',
				'unfold-tag-border-radius': '4',
				'unfold-tag-bg-color': 'rgb(229, 236, 234)',
				'unfold-tag-hover-bg-color': '#87ceeb',
				'unfold-tag-active-bg-color': 'rgb(32, 183, 243)',
				'unfold-tag-padding-t': '8',
				'unfold-tag-padding-r': '16',
				'unfold-tag-padding-b': '8',
				'unfold-tag-padding-l': '16',
				'unfold-tag-margin-t': '0',
				'unfold-tag-margin-r': '8',
				'unfold-tag-margin-b': '8',
				'unfold-tag-margin-l': '0',

				/**
				 * scrollBar
				 */
				'scroll-bar-width': '4',
				'scroll-bar-bg-color': 'rgb(218, 218, 218)',
				'scroll-bar-hover-bg-color': '#87ceeb',

				/**
				 * animation
				 */
				'ani-transition': '.3',
			};
		},
	},
}; // as const 声名为仅读属性

export type selectProps = ExtractPropTypes<typeof selectProps>;
export default selectProps;
