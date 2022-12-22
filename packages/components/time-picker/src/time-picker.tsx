import {
	defineComponent,
	computed,
	reactive,
	provide,
	ref,
	onMounted,
	onBeforeMount,
	watchEffect,
	nextTick,
} from 'vue';
import { createNamespace } from '@dw-ui/utils/components';
import { timePickerProps } from './time-picker_p';
import { TIMEPICKER_INJECTION_KEY } from '../../../tokens/time-picker';
const { n, classes } = createNamespace('time-picker');
import VITimePickerInput from './input';
import VITimePickerPopper from './popper';
import VIScrollBar from './scroll-bar';
import css from '@dw-ui/directives/css';


export default defineComponent({
	name: 'VITimePicker',
	emits: ['click', 'inputClick', 'closeClick', 'cancelClick', 'okClick', 'update:modelValue'],
	directives: { css },
	props: timePickerProps,
	components: {
		"vi-time-picker-input":VITimePickerInput,
		"vi-time-picker-popper":VITimePickerPopper,
		"vi-scroll-bar":VIScrollBar,
	},
	setup(props, ctx) {
		const moveTime: number | any[] = [null, null, null]; // 定时器
		let prevModelValue = ''; // 上次记录的选择内容
		/**
		 * tool fn
		 */
		const returnString = (val) => (val < 10 ? '0' + val : val + '');
		const modelValueCheck = (val) => {
			const flag = val.match(/^(\d{1,2}):(\d{1,2}):(\d{1,2})$/);
			if (!flag) console.warn('初始化数据格式不符合规范,已被清空！');
			return flag;
		};
		const createUUID = () => {
			return 'xxxxxxxx'.replace(/[xy]/g, function (a) {
				var b = 0 | (16 * Math.random()),
					c = 'x' == a ? b : 8 | (3 & b);
				return c.toString(16);
			});
		};
		const isString = (val) => typeof val == 'string';

		/**
		 * dom refs
		 */
		const timePickerRef = ref();
		let hourListRef = ref();
		let minuteListRef = ref();
		let secondListRef = ref();

		/**
		 * data
		 */
		type timePickerData = {
			uuid: string;
			popperVisible: boolean;
			softFocus: boolean;
			isSubmit: boolean; // 是否确定
			hourList: string[];
			minuteList: string[];
			secondList: string[];
			currentSelect: string[];
		};
		const data: timePickerData = reactive({
			uuid: createUUID(),
			popperVisible: false,
			softFocus: false,

			isSubmit: false, // 是否确定
			hourList: [],
			minuteList: [],
			secondList: [],
			currentSelect: ['', '', ''],
		});

		/**
		 * children component methods
		 */

		// scroll-bar
		const getHourListRef = (e) => (hourListRef = e);
		const getMinuteListRef = (e) => (minuteListRef = e);
		const getSecondListRef = (e) => (secondListRef = e);

		/**
		 * other event
		 */
		const blur = function () {
			data.popperVisible = false;
			data.softFocus = false;
		};
		const mousedown = function (e) {
			let softFocus = false;
			for (let i = 0; i < e.path.length; i++) {
				const item = e.path[i];
				if (item.classList && item.classList.value) {
					let _class = item.getAttribute('class');
					if (_class.includes('-time-picker') && item.dataset.id == data.uuid) {
						softFocus = true;
						break;
					}
				}
			}
			if (!softFocus) {
				blur();
				data.isSubmit = true;
			}
		};
		document.addEventListener('mousedown', mousedown);

		const inputFocus = function (e) {
			// console.log('handleInputFocus', e);
		};

		const inputBlur = function (e) {
			// console.log('handleInputBlur', e);
		};

		const boxClick = function () {
			ctx.emit && ctx.emit('click');
		};

		// 输入框点击函数
		const inputClick = function (e) {
			data.popperVisible = !data.popperVisible;
			data.isSubmit = false;
			if (!props.modelValue) {
				getCurrentDate();
			}
			ctx.emit && ctx.emit('inputClick');
		};
		// 输入框 close-icon点击函数
		const inputClose = function () {
			data.popperVisible = false;
			ctx.emit && ctx.emit('closeClick');
		};

		// 底部按钮组点击函数
		const footerBtnClick = function (e) {
			const { type } = e.target.dataset;
			data.popperVisible = false;

			if (type == 'cancel') {
				data.isSubmit = false;
				ctx.emit && ctx.emit('update:modelValue', prevModelValue);
				ctx.emit && ctx.emit('cancelClick');
				changeSpinnerPosition();
			} else if (type == 'ok') {
				data.isSubmit = true;
				ctx.emit && ctx.emit('okClick', data.currentSelect);
			}
		};

		// 旋转器 按钮点击函数
		const spinnerNumClick = function (type, target) {
			const fieldMap = {
				index: {
					hour: '0',
					minute: '1',
					second: '2',
				},
				ref: {
					hour: hourListRef,
					minute: minuteListRef,
					second: secondListRef,
				},
			};
			const { num, disabled } = target.dataset;
			if (num) {
				if (disabled == 'true') {
					return;
				}
				data.currentSelect[fieldMap['index'][type]] = num;
				const scrollTop =
					Number(data.currentSelect[fieldMap['index'][type]]) *
					Number(dynamicCssBridge.value['popper-spinner-number-height']);
				fieldMap['ref'][type].value.scrollTop = scrollTop;
			}
		};
		const hourClick = function (e) {
			spinnerNumClick('hour', e.target);
		};
		const minuteClick = function (e) {
			spinnerNumClick('minute', e.target);
		};
		const secondClick = function (e) {
			spinnerNumClick('second', e.target);
		};

		// 旋转器 滑动改变值
		const scrollBoxMove = function (target, type) {
			const fieldMap = {
				timers: {
					hour: 0,
					minute: 1,
					second: 2,
				},
				ableRange: {
					hour: 'disabledHours',
					minute: 'disabledMinutes',
					second: 'disabledSeconds',
				},
			};
			let scrollTop = target.scrollTop;
			let num = Math.round(scrollTop / Number(dynamicCssBridge.value['popper-spinner-number-height']));
			// 是否选中 禁用项
			let hitDisable = props[fieldMap['ableRange'][type]].filter((i) => i == num);
			if (hitDisable.length > 0) return;
			data.currentSelect[fieldMap['timers'][type]] = returnString(num);
			let moveToScrollTop = num * Number(dynamicCssBridge.value['popper-spinner-number-height']);
			if (moveTime[fieldMap['timers'][type]]) {
				clearTimeout(moveTime[fieldMap['timers'][type]]);
				moveTime[fieldMap['timers'][type]] = null;
			}
			moveTime[fieldMap['timers'][type]] = setTimeout(() => {
				target.scrollTop = moveToScrollTop;
			}, 200);
		};
		const hourScroll = function (e) {
			scrollBoxMove(e.target, 'hour');
		};
		const minuteScroll = function (e) {
			scrollBoxMove(e.target, 'minute');
		};
		const secondScroll = function (e) {
			scrollBoxMove(e.target, 'second');
		};

		// 初始化 生成旋转器中的数字列表
		const generateTimeData = () => {
			data.hourList = new Array(24).fill(0).map((item, index) => (item = index < 10 ? '0' + index : index + ''));
			data.minuteList = new Array(60).fill(0).map((item, index) => (item = index < 10 ? '0' + index : index + ''));
			data.secondList = new Array(60).fill(0).map((item, index) => (item = index < 10 ? '0' + index : index + ''));
		};

		// 改变三个旋转器的位置
		const changeSpinnerPosition = function () {
			if (prevModelValue) {
				hourListRef.value.scrollTop =
					Number(prevModelValue.slice(0, 2)) * Number(dynamicCssBridge.value['popper-spinner-number-height']);
				minuteListRef.value.scrollTop =
					Number(prevModelValue.slice(3, 5)) * Number(dynamicCssBridge.value['popper-spinner-number-height']);
				secondListRef.value.scrollTop =
					Number(prevModelValue.slice(6, 8)) * Number(dynamicCssBridge.value['popper-spinner-number-height']);
			}
		};

		// 初始化 获取当前直接 并赋值给三个旋转器 和 input输入框
		const getCurrentDate = () => {
			const d = new Date();
			const h = d.getHours(),
				m = d.getMinutes(),
				s = d.getSeconds();
			data.currentSelect[0] = returnString(h);
			data.currentSelect[1] = returnString(m);
			data.currentSelect[2] = returnString(s);

			hourListRef.value.scrollTop =
				Number(data.currentSelect[0]) * Number(dynamicCssBridge.value['popper-spinner-number-height']);
			minuteListRef.value.scrollTop =
				Number(data.currentSelect[1]) * Number(dynamicCssBridge.value['popper-spinner-number-height']);
			secondListRef.value.scrollTop =
				Number(data.currentSelect[2]) * Number(dynamicCssBridge.value['popper-spinner-number-height']);

			ctx.emit &&
				ctx.emit(
					'update:modelValue',
					data.currentSelect[0] + ':' + data.currentSelect[1] + ':' + data.currentSelect[2]
				);
		};

		// 判断值是否在禁用项出现
		const emptyOrNo = function () {
			// 输出值限制 如果初始值存在且初始值包含禁用值的数字 则全部清空
			if (props.modelValue && modelValueCheck(props.modelValue)) {
				const splitArr = (props.modelValue as string).split(':');
				const h = props.disabledHours.findIndex((i) => i == splitArr[0]) != -1;
				const m = props.disabledMinutes.findIndex((i) => i == splitArr[1]) != -1;
				const s = props.disabledSeconds.findIndex((i) => i == splitArr[2]) != -1;
				if (h || m || s) {
					console.warn('输入的值包含禁用项,已被清空');
					ctx.emit && ctx.emit('update:modelValue', '');
					return true;
				}
			}
			return false;
		};

		/**
		 * life cycle
		 */
		onBeforeMount(() => {
			// init data render
			if (props.modelValue && modelValueCheck(props.modelValue) && !emptyOrNo()) {
				const splitArr = (props.modelValue as string).split(':');
				data.currentSelect[0] = splitArr[0];
				data.currentSelect[1] = splitArr[1];
				data.currentSelect[2] = splitArr[2];
				prevModelValue = props.modelValue as string;
			}
		});
		onMounted(() => {
			generateTimeData();
			// 根据初始值更新旋转器的位置
			nextTick(() => {
				changeSpinnerPosition();
			});
		});

		/**
		 * computed
		 */
		const dynamicCssBridge = computed(() => Object.assign(timePickerProps.dynamicCss.default(), props.dynamicCss));
		const input_dynamicCssBridge = computed(() => {
			const obj = {};
			for (const key in dynamicCssBridge.value) {
				if (key.includes('input')) obj[key] = dynamicCssBridge.value[key];
			}
			return obj;
		});
		const modelValueBridge = computed({
			get() {
				emptyOrNo();
				return props.modelValue;
			},
			set(val) {
				ctx.emit && ctx.emit('update:modelValue', val);
			},
		});
		const clearableBridge = computed(() => props.clearable);
		const isDisabledPublic = function (type, val) {
			const disabledMap = {
				hour: 'disabledHours',
				minute: 'disabledMinutes',
				second: 'disabledSeconds',
			};
			let flag = false;
			props[disabledMap[type]].forEach((i) => (i == val ? (flag = true) : ''));
			return flag;
		};
		const isDisabledHour = computed(() => {
			return function (val) {
				return isDisabledPublic('hour', val);
			};
		});
		const isDisabledMinutes = computed(() => {
			return function (val) {
				return isDisabledPublic('minute', val);
			};
		});
		const isDisabledSecond = computed(() => {
			return function (val) {
				return isDisabledPublic('second', val);
			};
		});

		/**
		 * watch
		 */

		watchEffect(() => {
			const hour = data.currentSelect[0];
			const minute = data.currentSelect[1];
			const second = data.currentSelect[2];
			if (!hour && !minute && !second) {
				ctx.emit && ctx.emit('update:modelValue', '');
				return;
			}
			const str = hour + ':' + minute + ':' + second;
			ctx.emit && ctx.emit('update:modelValue', str);
		});

		watchEffect(() => {
			if (data.isSubmit) {
				prevModelValue = props.modelValue as string;
				ctx.emit && ctx.emit('update:modelValue', prevModelValue);
			}
		});

		/**
		 * data transmission
		 */
		provide(TIMEPICKER_INJECTION_KEY, {
			timePickerRef,
		});

		/**
		 * views
		 */
		return () => (
			<div
				ref={timePickerRef}
				data-id={data.uuid}
				class={[classes(n())]}
				v-css={dynamicCssBridge.value || {}}
				onClick={boxClick}
			>
				<vi-time-picker-input
					placeholder={props.placeholder}
					v-model={modelValueBridge.value}
					onFocus={inputFocus}
					onBlur={inputBlur}
					onClose={inputClose}
					dynamicCss={input_dynamicCssBridge.value || {}}
					clearable={clearableBridge.value}
					readonly={true}
					onClick={inputClick}
				></vi-time-picker-input>
				<vi-time-picker-popper active={data.popperVisible}>
					{/* Customize content --time-panel */}
					<div class="time-panel">
						<div class="time-panel__content">
							<vi-scroll-bar
								onGetRef={getHourListRef}
								class="time-panel__spinner time-panel__popper-spinner--hour"
								onScroll={hourScroll}
							>
								<ul onClick={hourClick}>
									{data.hourList.map((i) => (
										<li
											data-num={i}
											data-disabled={isDisabledHour.value(i)}
											class={[data.currentSelect[0] == i ? 'active' : '', isDisabledHour.value(i) ? 'disabled' : '']}
										>
											{i}
										</li>
									))}
								</ul>
							</vi-scroll-bar>
							<vi-scroll-bar
								onGetRef={getMinuteListRef}
								class="time-panel__spinner time-panel__popper-spinner--minutes"
								onScroll={minuteScroll}
							>
								<ul onClick={minuteClick}>
									{data.minuteList.map((i) => (
										<li
											data-num={i}
											data-disabled={isDisabledMinutes.value(i)}
											class={[data.currentSelect[1] == i ? 'active' : '', isDisabledMinutes.value(i) ? 'disabled' : '']}
										>
											{i}
										</li>
									))}
								</ul>
							</vi-scroll-bar>
							<vi-scroll-bar
								onGetRef={getSecondListRef}
								class="time-panel__spinner time-panel__popper-spinner--second"
								onScroll={secondScroll}
							>
								<ul onClick={secondClick}>
									{data.secondList.map((i) => (
										<li
											data-num={i}
											data-disabled={isDisabledSecond.value(i)}
											class={[data.currentSelect[2] == i ? 'active' : '', isDisabledSecond.value(i) ? 'disabled' : '']}
										>
											{i}
										</li>
									))}
								</ul>
							</vi-scroll-bar>
						</div>
						<div class="time-panel__footer" onClick={footerBtnClick}>
							<div data-type="cancel" class="time-panel__footer_cancel">
								取消
							</div>
							<div data-type="ok" class="time-panel__footer_ok">
								确认
							</div>
						</div>
					</div>
				</vi-time-picker-popper>
			</div>
		);
	},
});
