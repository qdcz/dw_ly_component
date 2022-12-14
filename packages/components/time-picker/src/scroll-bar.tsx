import { defineComponent, computed, inject, reactive, ref, nextTick } from 'vue';
import { createNamespace } from '@dw/utils/components';
const { n, classes } = createNamespace('scroll-bar');
import css from '@dw/directives/css';
import { onMounted } from 'vue';

export default defineComponent({
	name: 'VIScrollBar',
	emits: ['focus', 'blur', 'click', 'scroll', 'getRef'],
	props: ['dynamicCss'],
	directives: { css },
	setup(props, ctx) {
		// let { cacheOptionList } = inject(SELECTV2_INJECTION_KEY);
		const scrollBarRef = ref<HTMLDivElement | any>();
		const thumbRef = ref<HTMLDivElement | any>();
		const scrollBoxRef = ref<HTMLDivElement | any>();

		type scrollBarData  = {
			// 滚动框的marginTop + marginBottom
			realMargin: number;
			// 滚动框的paddingTop + paddingBottom
			realPadding: number;
			// 滚动框的视口高度
			viewHeight: number;
			// 滚动框的真实高度
			realHeight: string | any;
			// 滚动框的最大滚动范围
			maxScrollBoxRange: number;
			// 进度条在视口高度占比
			proportion: number;
			// 进度条在视口的高度
			scrollBarHeight: number;
			// 滚动条的最大滚动范围
			maxScrollBarRange: number;
			// 滚动条移动比例
			scrollBarMovePropor: number;
			// 滚动框移动比例
			scrollBoxMovePropor: number;
			translateY: number;
			startY: number;
			moveY: number;
			_move: number;
			mouseMoving: boolean;

			scrollBoxRealHeight: number;
			scrollBarViewHeight: number;
			scrollBoxMaxRange: number;
		}
		const data: scrollBarData = reactive({
			// 滚动框的marginTop + marginBottom
			realMargin: 0,
			// 滚动框的paddingTop + paddingBottom
			realPadding: 0,
			// 滚动框的视口高度
			viewHeight: 0,
			// 滚动框的真实高度
			realHeight: '0',
			// 滚动框的最大滚动范围
			maxScrollBoxRange: 0,
			// 进度条在视口高度占比
			proportion: 0,
			// 进度条在视口的高度
			scrollBarHeight: 0,
			// 滚动条的最大滚动范围
			maxScrollBarRange: 0,
			// 滚动条移动比例
			scrollBarMovePropor: 0,
			// 滚动框移动比例
			scrollBoxMovePropor: 0,
			translateY: 0,
			startY: 0,
			moveY: 0,
			_move:0,
			mouseMoving: false,

			scrollBoxRealHeight: 0,
			scrollBarViewHeight: 0,
			scrollBoxMaxRange: 0,
		});

		onMounted(() => {
			nextTick(() => {
				let scrollBoxRealHeight: string = window.getComputedStyle(scrollBoxRef.value).height.replace('px', '');
				data.scrollBoxRealHeight = Number(scrollBoxRealHeight);
				let scrollBarViewHeight: string = window.getComputedStyle(scrollBarRef.value).height.replace('px', '');
				data.scrollBarViewHeight = Number(scrollBarViewHeight);
				data.scrollBoxMaxRange = data.scrollBoxRealHeight - data.scrollBarViewHeight;

				ctx.emit && ctx.emit('getRef', scrollBarRef);
			});
		});

		const isShowThumb = computed(() => {
			return data.scrollBarHeight < data.realHeight.replace('px', '') * 1;
		});

		let time = null;
		const onScroll = function (e) {
			// let scrollTop = e.target.scrollTop;
			// let num = Math.round(scrollTop / (data.scrollBarViewHeight / 6));
			// let moveToScrollTop = num * 32;
			// //
			// // thumbPosition(scrollTop);
			// console.log(111, scrollTop, moveToScrollTop);

			// if (scrollTop == moveToScrollTop) return console.log("jizhong")

			// if (time) {
			//     clearTimeout(time);
			//     time = null;
			// }
			// time = setTimeout(() => {
			//     e.target.scrollTop = moveToScrollTop;
			// }, 500);
			ctx.emit('scroll', e);
		};

		const thumbMouseDown = function (e) {
			document.addEventListener('mousedown', documentMouseDown);
			document.addEventListener('mousemove', documentMouseMove);
		};

		// 全局文档鼠标点击事件
		const documentMouseDown = function (e) {
			data.mouseMoving = true;
			data.startY = e.clientY;
		};

		// 全局文档鼠标移动事件
		const documentMouseMove = function (e) {
			data.moveY = data.startY - e.clientY;
			scrollBoxPosition();
		};

		document.addEventListener('mouseup', () => {
			document.removeEventListener('mousemove', documentMouseMove);
			document.removeEventListener('mousedown', documentMouseDown);
			data.startY = 0;
			data.moveY = 0;
			// 移动的位置回传
			if (data.mouseMoving) {
				data.translateY = data._move;
			}
			data.mouseMoving = false;
		});

		const thumbPosition = function (scrollTop) {
			if (data.mouseMoving) return;
			data.translateY = data.scrollBarMovePropor * scrollTop;
			thumbRef.value.style.transform = `translateY(${data.translateY}px)`;
		};

		// 鼠标拖动 改变滚动条位置
		const scrollBoxPosition = function () {
			let _move = 0;
			if (data.moveY < 0) {
				// 往下
				_move = data.translateY + Math.abs(data.moveY);
			} else if (data.moveY >= 0) {
				// 往上
				_move = data.translateY - Math.abs(data.moveY);
			}

			// 上边界判断
			if (_move < 0) {
				_move = 0;
			}
			// 下界判断
			if (_move > data.maxScrollBarRange) {
				_move = data.maxScrollBarRange;
			}
			data._move = _move;
			thumbRef.value.style.transform = `translateY(${_move}px)`;
			// 同时改变滚动框的位置
			scrollBarRef.value.scrollTop = Math.abs(data.scrollBoxMovePropor * _move);
		};

		return () => (
			<div v-css={Object.assign(props.dynamicCss || {}, {})} class={[classes(n())]}>
				<div class={n('left')} ref={scrollBarRef} onScroll={onScroll}>
					<div ref={scrollBoxRef}>{ctx.slots['default']?.()}</div>
				</div>
				{isShowThumb.value ? (
					<div
						ref={thumbRef}
						class={n('right')}
						style={{ height: data.scrollBarHeight + 'px' }}
						onMousedown={thumbMouseDown}
					></div>
				) : (
					''
				)}
			</div>
		);
	},
});
