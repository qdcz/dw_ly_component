import type { DirectiveBinding, ObjectDirective, VNode, Plugin, App } from 'vue';
import AnyTouch from 'any-touch';

import type { AnyTouchEvent } from 'any-touch';

import { isFunction } from '@visix-ui/utils/types';

interface TouchOptions {
	tap?: boolean | Function;
	press?: boolean | Function; // 按压
	pressup?: boolean | Function; // 松开
	pan?: boolean | Function; // 拖动
}

interface RippleHTMLElement extends HTMLElement {
	_touch?: TouchOptions;
}

// 方向
enum Arrow {
	up = -1,
	right = 1,
	down = 1,
	left = -1,
}
/**
 * 获取当前位置
 * @returns
 */
const getCurrentTranslate = (el: RippleHTMLElement) => {
	const style = window.getComputedStyle(el, null);
	const { transform } = style;
	const array: Array<any> | null = transform.match(/(\-?)(\d)+(\.\d{0,})?/g);

	//console.log('//', !array);
	if (!array) {
		return {
			x: 0,
			y: 0,
		};
	}
	return { x: Math.round(array[4]), y: Math.round(array[5]) };
};

/**
 * 拖拽松手后减速移动至停止
 * velocityX/Y的单位是px/ms
 */

const Touch: ObjectDirective & Plugin = {
	mounted(el: RippleHTMLElement, binding: DirectiveBinding<TouchOptions>) {
		if (!el) {
			return false;
		}
		const style = window.getComputedStyle(el, null);

		el._touch = {
			...(binding.value ?? {}),
		};
		// 子节点宽度之和
		const totalWidth: number = parseInt(style.width);
		// el.childNodes.forEach((v) => {
		// 	let p = v as HTMLElement;
		// 	if (p && p?.offsetWidth) {
		// 		totalWidth += p?.offsetWidth;
		// 	}
		// });
		el.style.width = `${totalWidth}px`;
		let flag = '';

		let warpWidth = 0;
		if (el.parentNode) {
			warpWidth = el.parentNode['offsetWidth'];
		}

		const at = new AnyTouch(el);

		// 当拖拽的时候pan事件触发
		at.on('panmove', (e: AnyTouchEvent) => {
			// e包含位移/速度/方向等信息
			//console.log(e.target?.parentNode.childNodes); //, e.displacementX
			el.style.transitionDuration = '0ms';

			const { x, y } = getCurrentTranslate(el);

			const moveDistanceX = x + e.deltaX;

			el.style.transform = `translate(${moveDistanceX}px, 0px)`;
			if (e.direction == 'right') {
				flag = moveDistanceX > 0 ? 'back.left' : ''; // 向右拖拽，超出位置，回弹
			}
			if (e.direction == 'left') {
				flag = Math.abs(x) > totalWidth ? 'back.right' : '';
			}
		});
		// 拖拽结束
		at.on('panend', (e: AnyTouchEvent) => {
			return false;
			const { x, y } = getCurrentTranslate(el);
			if (flag == 'back.left' || x > warpWidth * 0.5) {
				console.log(':::::::::::::::::', x, warpWidth);
				el.style.transitionDuration = '500ms';
				el.style.transform = `translate(0px, 0px)`;
			}
			if (flag == 'back.right') {
				el.style.transitionDuration = '500ms';
				el.style.transform = `translate(-${totalWidth}px, 0px)`;
			}
			flag = '';
			//console.log('||||||', x, warpWidth);
		});
		at.on('swipe', (ev: AnyTouchEvent) => {
			return false;
			const directionSign = { up: -1, right: 1, down: 1, left: -1 }[ev.direction];

			//let SCROLL_SUFFIX = 'Top';
			// x ? | y?
			let AXIS_SUFFIX = 'Y';
			if (ev.velocityX > ev.velocityY) {
				//SCROLL_SUFFIX = 'Left';
				AXIS_SUFFIX = 'X';
			}
			el.style.transitionDuration = '1200ms';
			// 减速时间, 单位ms
			// t = (v₂ - v₁) / a
			const velocity = ev[`velocity${AXIS_SUFFIX}`];
			const acceleration = 3600;
			const transitionDuration = Math.round(((velocity * 1000) / acceleration) * 1000);

			// 滑动距离
			// s = (v₂² - v₁²) / (2 * a)
			// const scrollAxis = `scroll${SCROLL_SUFFIX}`;
			const intance = directionSign * Math.round(Math.pow(velocity * 1000, 2) / (2 * acceleration));
			const { x, y } = getCurrentTranslate(el);

			let moveDistanceX = x + intance;

			if (ev.direction == 'left' && Math.abs(moveDistanceX) > totalWidth) {
				moveDistanceX = -1 * (totalWidth - warpWidth); // 回滚到一个父容器宽度

				el.style.transform = `translate(${moveDistanceX}px, 0px)`;
			}
			if (ev.direction == 'right' && moveDistanceX > 0) {
				console.log('>>>>>>>>>>>>>>', ev.direction, moveDistanceX);
				el.style.transform = `translate(0px, 0px)`;
			}
		});
		at.on('press', (e: AnyTouchEvent) => {
			// e包含位移/速度/方向等信息
			// if (isFunction(el._touch?.press)) {
			// 	el._touch?.press.call(null, e);
			// }
			console.log(e, '按压', el._touch?.press);
		});
		at.on('pressup', (e: AnyTouchEvent) => {
			// e包含位移/速度/方向等信息
			console.log(e, '松开');
		});
		at.on('tap', (e: AnyTouchEvent) => {
			// e包含位移/速度/方向等信息
			console.log('点击');
		});
	},

	install(app: App) {
		app.directive('touch', this);
	},
};

export const _TouchComponent = Touch;
export default Touch;
