import { defineComponent, computed, ref, reactive, provide, getCurrentInstance, nextTick, watch } from 'vue';
import { createNamespace } from '@dw/utils/components';

import { SELECTV2_INJECTION_KEY } from '../../../tokens/selectv2';
import css from '@dw/directives/css';

const { n, classes } = createNamespace('select-v2');
import { selectProps } from './select_p';

/**
 * component
 */
import VISelectV2Input from './input';
import VISelectV2DropDown from './drop-down';
import VISelectV2Tag from './tag';
import VIScrollBar from './scroll-bar';
import VISelectV2SvgIcon from './svg-icon';
// import VISelectV2UnfoldDialog from './unfold-dialog';
import VISelectV2Option from './option-item';

export default defineComponent({
	name: 'VISelectV2',
	emits: ['focus', 'blur', 'update:modelValue', 'listChange', 'handleSelected', 'handleClear'],
	props: selectProps,
	directives: { css },
	components: {
		'vi-select-v2-input': VISelectV2Input,
		'vi-select-v2-drop-down': VISelectV2DropDown,
		'vi-scroll-bar': VIScrollBar,
		'vi-select-v2-tag': VISelectV2Tag,
		'vi-select-v2-svg-icon': VISelectV2SvgIcon,
		// 'vi-select-v2-unfold-dialog': VISelectV2UnfoldDialog,
		'vi-select-v2-option': VISelectV2Option,
	},
	setup(props, ctx) {
		/**
		 * tools
		 */
		const vnodeProps = getCurrentInstance()?.vnode.props || {};
		const hasVModelListener = 'onUpdate:modelValue' in vnodeProps;
		const createUUID = () => {
			return 'xxxxxxxx'.replace(/[xy]/g, function (a) {
				var b = 0 | (16 * Math.random()),
					c = 'x' == a ? b : 8 | (3 & b);
				return c.toString(16);
			});
		};

		/**
		 * dom ref
		 */
		const selectRef = ref();
		const inputRef = ref();
		const tagListRef = ref();

		type selectData = {
			uuid: string;
			dropDownVisible: boolean;
			dialogVisible: boolean;
			softFocus: boolean;
			currentSelectLabel: string;
			OptionList: object; // 缓存optionList数据
			list: [];
			__inputPlaceholder: string;

			searchLabel: string;
			searchValue: string | object;
		};

		/**
		 * data
		 */
		const data: selectData = reactive({
			uuid: createUUID(),
			dropDownVisible: false,
			dialogVisible: false,
			softFocus: false,
			currentSelectLabel: '',
			OptionList: {},
			list: [],
			__inputPlaceholder: '',

			searchLabel: '',
			searchValue: '',
		});

		const unfoldPath =
			'M290.816 774.144h167.936c12.288 0 20.48 8.192 20.48 20.48s-8.192 20.48-20.48 20.48h-219.136c-12.288 0-20.48-8.192-20.48-20.48v-2.048-206.848c0-12.288 8.192-20.48 20.48-20.48s20.48 8.192 20.48 20.48v163.84l210.944-198.656c8.192-8.192 20.48-8.192 28.672 0s8.192 20.48 0 28.672l-208.896 194.56z m462.848-524.288h-167.936c-12.288 0-20.48-8.192-20.48-20.48s8.192-20.48 20.48-20.48h219.136c12.288 0 20.48 8.192 20.48 20.48v208.896c0 12.288-8.192 20.48-20.48 20.48s-20.48-8.192-20.48-20.48v-163.84l-210.944 198.656c-8.192 8.192-20.48 8.192-28.672 0s-8.192-20.48 0-28.672l208.896-194.56z m188.416 323.584c0 12.288-8.192 20.48-20.48 20.48s-20.48-8.192-20.48-20.48v-389.12c0-34.816-26.624-61.44-61.44-61.44h-655.36c-34.816 0-61.44 26.624-61.44 61.44v655.36c0 34.816 26.624 61.44 61.44 61.44h655.36c34.816 0 61.44-26.624 61.44-61.44v-94.208c0-12.288 8.192-20.48 20.48-20.48s20.48 8.192 20.48 20.48v94.208c0 57.344-45.056 102.4-102.4 102.4h-655.36c-57.344 0-102.4-45.056-102.4-102.4v-655.36c0-57.344 45.056-102.4 102.4-102.4h655.36c57.344 0 102.4 45.056 102.4 102.4v389.12z';
		const searchPath =
			'M955.069071 864.311021 740.015134 649.258107c-3.752464-3.751441-8.841366-5.860475-14.149255-5.860475-5.306866 0-10.395768 2.108011-14.149255 5.860475l-16.692171 16.692171-38.34226-38.34226c53.03796-59.810201 85.298711-138.442072 85.298711-224.478588 0-186.774871-151.952784-338.727655-338.727655-338.727655S64.527642 216.35456 64.527642 403.12943c0 186.775894 151.952784 338.728678 338.727655 338.728678 86.36909 0 165.276231-32.510438 225.170343-85.913718l38.303374 38.303374-17.34504 17.34504c-7.812943 7.813966-7.812943 20.48352 0 28.297486l215.051891 215.052914c3.753487 3.751441 8.841366 5.860475 14.149255 5.860475 5.306866 0 10.395768-2.108011 14.149255-5.860475l62.334697-62.334697C962.883037 884.794541 962.883037 872.124987 955.069071 864.311021zM104.546078 403.12943c0-164.709319 133.9999-298.709219 298.709219-298.709219s298.709219 133.9999 298.709219 298.709219S567.964616 701.839673 403.255297 701.839673 104.546078 567.838749 104.546078 403.12943zM878.585119 912.496463 691.829691 725.741036l34.036187-34.036187 186.755428 186.755428L878.585119 912.496463z';

		type cache = {
			popperHeight: string; // 记录初始popper高度
			inputLineHeight: string; // 记录初始input高度
		};
		const cache: cache = {
			popperHeight: '0',
			inputLineHeight: '0',
		};

		/**
		 * global set and other event
		 */
		const mousedown = function (e) {
			let softFocus = false;
			for (let i = 0; i < e.path.length; i++) {
				let item = e.path[i];
				if (item.classList && item.classList.value) {
					let _class = item.getAttribute('class');
					if (_class.includes('-select-v2') && item.dataset.id == data.uuid) {
						softFocus = true;
						break;
					}
				}
			}
			if (!softFocus) {
				blur();
			}
		};

		document.addEventListener('mousedown', mousedown);

		const blur = function () {
			data.dropDownVisible = false;
		};

		const focus = function () {
			data.dropDownVisible = true;
		};

		const getDomInfo = function (ref) {
			return new Promise((res, rej) => {
				res(
					nextTick(() => {
						return window.getComputedStyle(ref.value);
					})
				);
			});
		};

		// 选中回调
		const selectedFn = function (v) {
			if (props.mode == 'single') {
				ctx.emit && ctx.emit('handleSelected', v);
			} else {
				nextTick(() => {
					ctx.emit &&
						ctx.emit('handleSelected', {
							currentSelected: v,
							currentSelects: JSON.parse(JSON.stringify(props.modelValue)),
						});
				});
			}
		};

		// 重新注册组件清空缓存
		const deleteOptionItem = function (value) {
			delete data.OptionList[value];
		};

		const drowDownItemLayout = function (key: string): any {
			if (key == 'co1') return '';
			if (key == 'auto') return 'display:flex;flex-wrap: wrap;';
			if (key == 'co2') return 'display:flex;flex-wrap: wrap;';
			if (key == 'co3') return 'display:flex;flex-wrap: wrap;';
			if (key == 'co4') return 'display:flex;flex-wrap: wrap;';
			if (key == 'co5') return 'display:flex;flex-wrap: wrap;';
			if (key == 'co6') return 'display:flex;flex-wrap: wrap;';
			if (key == 'co7') return 'display:flex;flex-wrap: wrap;';
		};

		// tag关闭回调

		/**
		 * life cycle
		 */
		// onMounted(() => {
		// 	cache.inputLineHeight = dynamicCssBridge.value['input-line-height'];
		// });

		/**
		 * event
		 * @param {*} e
		 */

		const inputClick = function (e) {
			data.dropDownVisible = !data.dropDownVisible;
		};
		const inputFocus = function (e) {};
		const inputBlur = function (e) {};
		const unfoldClick = function (e) {
			data.dropDownVisible = false;
			data.dialogVisible = true;
		};
		const inputClear = function () {
			ctx.emit && ctx.emit('handleClear');
		};
		const dialogHide = function (e) {
			data.dialogVisible = false;
		};

		// 展开模式的tag
		const tagClick = function (label, value) {
			if (props.mode == 'single') {
				currentSelectBridge.value = value;
				currentSelectLabelBridge.value = label;
				cacheOptionListBridge.value = { key: label, value: value };
				// data.dialogVisible = false;
			} else if (props.mode == 'multiple') {
				let arr = JSON.parse(JSON.stringify(currentSelectBridge.value));
				let flag = false;
				try {
					arr.forEach((element, index) => {
						if (element.value == value) {
							arr.splice(index, 1);
							flag = true;
							throw new Error();
						}
					});
				} catch (e) {}
				if (!flag) {
					arr.push({
						label: label,
						value: value,
					});
				}
				currentSelectBridge.value = arr;
			}
		};

		// 输入框内的tag
		const tagClose = function (data) {
			ctx.emit && ctx.emit('handleClear', data);
		};

		const searchValueChange = function (e) {
			let v = e.target.value;
			let searchValue = {};
			data.list.forEach((i: any) => (i.label.includes(v) ? (searchValue[i.value] = i.label) : ''));
			data.searchValue = searchValue;
			data.searchLabel = v;
			nextTick(() => {
				cacheOptionListBridge.value;
			});
		};

		/**
		 * watch
		 */
		watch(
			() => props.list,
			() => {
				data.list = JSON.parse(JSON.stringify(props.list));
			},
			{ deep: true, immediate: true }
		);

		/**
		 * computed
		 */
		const currentSelectBridge:any = computed({
			get() {
				if (props.mode == 'multiple') {
					(async () => {
						// 动态撑开input高度
						const { height }: any = await getDomInfo(tagListRef);
						props.dynamicCss['input-line-height'] = height.replace('px', '') * 1;
						placeholderBridge.value = (props.modelValue as []).length > 0 ? ' ' : props.placeholder;
						if ((props.modelValue as []).length <= 1) {
							props.dynamicCss['input-line-height'] = cache.inputLineHeight;
						}
					})();
				}
				return props.modelValue;
			},
			set(val) {
				if (hasVModelListener) {
					ctx.emit('update:modelValue', val);
				}
			},
		});
		const currentSelectLabelBridge = computed({
			get() {
				return data.currentSelectLabel;
			},
			set(val) {
				data.currentSelectLabel = val;
			},
		});
		const cacheOptionListBridge = computed({
			get() {
				let len = Object.keys(data.OptionList).length;
				// 5个及以下 自动适配高度
				if (len <= 5 && len > 0) {
					if (!data.searchValue) {
						if (props.search) len++; // 加上搜索栏
						dynamicCssBridge.value['popper-height'] =
							dynamicCssBridge.value['popper-option-height'] * len + dynamicCssBridge.value['popper-padding'] * 2;
					}
				} else {
					dynamicCssBridge.value['popper-height'] = cache.popperHeight;
				}
				return data.OptionList;
			},
			set(obj: any) {
				data.OptionList[obj.value] = obj.key;
			},
		});
		const dropDownVisibleBridge = computed({
			get() {
				return data.dropDownVisible;
			},
			set(val) {
				data.dropDownVisible = val;
			},
		});
		const placeholderBridge = computed({
			get() {
				return data.__inputPlaceholder || props.placeholder;
			},
			set(val) {
				data.__inputPlaceholder = val;
			},
		});
		const clearableBridge = computed(() => props.clearable);
		const modeBridge = computed(() => props.mode);
		const dynamicCssBridge = computed((): object => {
			let val = Object.assign(selectProps.dynamicCss.default(), props.dynamicCss);
			cache.popperHeight = val['popper-height'];
			cache.inputLineHeight = val['input-line-height'];
			return val;
		});
		const showTag = computed(() => props.mode == 'multiple');
		const useSearchImg = computed(() => !!props.searchImg);

		/**
		 * data transmission
		 */
		provide(SELECTV2_INJECTION_KEY, {
			selectRef,
			currentSelect: currentSelectBridge,
			currentSelectLabel: currentSelectLabelBridge,
			mode: modeBridge,
			dynamicCss: dynamicCssBridge,
			dropDownVisible: dropDownVisibleBridge,
			placeholder: placeholderBridge,
			cacheOptionList: cacheOptionListBridge,
			clearable: clearableBridge,
			selectedFn: selectedFn,
			deleteOptionItem: deleteOptionItem,
		});

		/**
		 * single dom
		 */

		const dom_viSelectV2Tag = function (i) {
			return (
				<vi-select-v2-tag
					tooltip={props.tooltip}
					label={i.label}
					value={i.value}
					height={dynamicCssBridge.value['tag-close-size']}
					width={dynamicCssBridge.value['tag-close-size']}
					onCloseClick={tagClose}
				></vi-select-v2-tag>
			);
		};

		const dom_viSelectV2Input = function () {
			return (
				<vi-select-v2-input
					iconHeight={dynamicCssBridge.value['input-icon-width']}
					iconWidth={dynamicCssBridge.value['input-icon-width']}
					ref={inputRef}
					active={data.dropDownVisible}
					placeholder={placeholderBridge.value}
					onClick={inputClick}
					onFocus={inputFocus}
					onBlur={inputBlur}
					onClear={inputClear}
				></vi-select-v2-input>
			);
		};

		const dom_showMoreIcon = function () {
			return (
				<vi-select-v2-svg-icon
					class={n('--showMore')}
					path={unfoldPath}
					height={dynamicCssBridge.value['unfold-icon-height']}
					width={dynamicCssBridge.value['unfold-icon-width']}
					onClick={unfoldClick}
				></vi-select-v2-svg-icon>
			);
		};

		/**
		 * complex dom
		 */
		const doms_searchLi = function () {
			return (
				<li class={n('-search')}>
					{/* 使用自带的svg或者使用自定义图片 */}
					{useSearchImg.value ? (
						<img class={n('--search')} src={props.searchImg}></img>
					) : (
						<vi-select-v2-svg-icon class={n('--search')} path={searchPath}></vi-select-v2-svg-icon>
					)}

					<input
						value={data.searchLabel}
						class={n('-search__input')}
						placeholder="请输入您要搜索的内容"
						onInput={searchValueChange}
					></input>
				</li>
			);
		};

		// dialog 展开项
		// const doms_selectV2UnFoldDialog =  () => {
		// 	return (
		// 		<vi-select-v2-unfold-dialog active={data.dialogVisible} onHide={dialogHide}>
		// 			{/* single 模式 */}
		// 			{props.showMore && props.mode == 'single'
		// 				? Object.keys(cacheOptionListBridge.value).map((val) => {
		// 						return (
		// 							<span
		// 								class={[n('-tag'), currentSelectBridge.value == val ? 'active' : '']}
		// 								onClick={tagClick.bind(this, cacheOptionListBridge.value[val], val)}
		// 							>
		// 								{cacheOptionListBridge.value[val]}
		// 							</span>
		// 						);
		// 				  })
		// 				: ''}

		// 			{/* multiple 模式 */}
		// 			{props.showMore && props.mode == 'multiple'
		// 				? Object.keys(cacheOptionListBridge.value).map((val) => {
		// 						return (
		// 							<span
		// 								class={[
		// 									n('-tag'),
		// 									currentSelectBridge.value.findIndex((i) => i.value == val) != -1 ? 'active' : '',
		// 								]}
		// 								onClick={tagClick.bind(this, cacheOptionListBridge.value[val], val)}
		// 							>
		// 								{cacheOptionListBridge.value[val]}
		// 							</span>
		// 						);
		// 				  })
		// 				: ''}
		// 		</vi-select-v2-unfold-dialog>
		// 	);
		// };

		// 下拉弹出层
		const doms_selectV2DropDown = function () {
			return (
				<vi-select-v2-drop-down active={data.dropDownVisible}>
					<vi-scroll-bar dynamicCss={dynamicCssBridge.value}>
						<ul>
							{/* 搜索栏 */}
							{props.search ? doms_searchLi() : ''}

							{/* 其他下拉项 */}
							{data.searchValue ? (
								<div style={drowDownItemLayout(props.itemLayout)} class={props.itemLayout}>
									{Object.keys(data.searchValue).map((i, index) => {
										return (
											<vi-select-v2-option
												key={i}
												value={i}
												label={Object.values(data.searchValue)[index]}
											></vi-select-v2-option>
										);
									})}
								</div>
							) : (
								<div style={drowDownItemLayout(props.itemLayout)} class={props.itemLayout}>
									{ctx.slots['default']?.()}
								</div>
							)}
							{/* {ctx.slots['default']?.()} */}
							{Object.keys(cacheOptionListBridge.value).length <= 0 ? <li class={n('-notData')}>暂无数据</li> : ''}
						</ul>

						{/* 展开模式 */}
						{props.showMore ? dom_showMoreIcon() : ''}
					</vi-scroll-bar>
				</vi-select-v2-drop-down>
			);
		};

		/**
		 * view
		 */
		return () => (
			<div data-id={data.uuid} class={[classes(n())]} ref={selectRef} v-css={dynamicCssBridge.value || {}}>
				{/* 标签 */}
				{showTag.value ? (
					<div ref={tagListRef} class={n('-taglist')} onClick={inputClick}>
						{currentSelectBridge.value.map((i) => dom_viSelectV2Tag(i))}
					</div>
				) : (
					''
				)}

				{/* 输入框 */}
				{dom_viSelectV2Input()}

				{/* 下拉菜单 */}
				{doms_selectV2DropDown()}

				{/* 展开项 */}
				{/* {doms_selectV2UnFoldDialog()} */}
			</div>
		);
	},
});
