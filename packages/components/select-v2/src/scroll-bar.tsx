import { defineComponent, computed, inject, reactive, ref, nextTick, watch } from 'vue';
import { createNamespace } from '@dw/utils/components';
const { n, classes } = createNamespace('scroll-bar');
import { SELECTV2_INJECTION_KEY } from '../../../tokens/selectv2';
import css from '@dw/directives/css';
import { onMounted } from 'vue';

export default defineComponent({
	name: 'VIScrollBar',
	emits: ['focus', 'blur', 'click'],
	props: ['dynamicCss'],
	directives: { css },
	setup(props, ctx) {
		let { cacheOptionList }: any = inject(SELECTV2_INJECTION_KEY);
		const scrollBarRef = ref<HTMLDivElement | any>();
		const thumbRef = ref<HTMLDivElement | any>();

		type scrollBarData = {
			// 滚动框的marginTop + marginBottom
			realMargin: number;
			// 滚动框的paddingTop + paddingBottom
			realPadding: number;
			// 滚动框的视口高度
			viewHeight: number;
			// 滚动框的真实高度
			realHeight: number;
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
		}

		const data: scrollBarData = reactive({
			realMargin: 0,
			realPadding: 0,
			viewHeight: 0,
			realHeight: 0,
			maxScrollBoxRange: 0,
			proportion: 0,
			scrollBarHeight: 0,
			maxScrollBarRange: 0,
			scrollBarMovePropor: 0,
			scrollBoxMovePropor: 0,
			translateY: 0,
			startY: 0,
			moveY: 0,
			_move: 0,
			mouseMoving: false,
		});

		const init = function () {
			nextTick(() => {
				let info = (window as any).getComputedStyle(scrollBarRef.value.children[0]);
				data.realPadding = props.dynamicCss['popper-padding'] * 2;
				data.realHeight = info.height.replace('px', '') * 1;
				data.viewHeight = props.dynamicCss['popper-height'] * 1 - data.realPadding;
				data.maxScrollBoxRange = data.realHeight - data.viewHeight;
				data.proportion = Number((data.viewHeight / data.realHeight).toFixed(1));
				data.scrollBarHeight = data.viewHeight * data.proportion;
				data.maxScrollBarRange = data.viewHeight - data.scrollBarHeight;
				data.scrollBarMovePropor = data.maxScrollBarRange / data.maxScrollBoxRange;
				data.scrollBoxMovePropor = data.maxScrollBoxRange / data.maxScrollBarRange;
			});
		};

		onMounted(() => {
			init();
		});

		watch(
			() => cacheOptionList.value,
			() => {
				init();
			},
			{ deep: true, immediate: false }
		);

		const isShowThumb = computed(() => {
			return data.scrollBarHeight < data.realHeight;
		});

		const onScroll = function (e) {
			let scrollTop = e.target.scrollTop;
			thumbPosition(scrollTop);
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
			data.moveY = (data.startY as number) - e.clientY;
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
			<div class={[classes(n())]}>
				<div class={n('left')} ref ={scrollBarRef} onScroll={onScroll}>
					{ctx.slots['default']?.()}
				</div>
				{isShowThumb.value ? (
					<div
						ref={thumbRef}
						class={n('right')}
						style={{ height: data.scrollBarHeight + 'px' }}
						onmousedown={thumbMouseDown}
					></div>
				) : (
					''
				)}
			</div>
		);
	},
});
