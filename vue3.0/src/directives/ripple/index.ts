import type { ComponentPublicInstance, DirectiveBinding, ObjectDirective, Plugin, App } from 'vue';
type DocumentHandler = <T extends MouseEvent>(mouseup: T, mousedown: T) => void;

interface RippleOptions {
	removeRipple: any;
	touchmoveForbid: boolean;
	color?: string;
	disabled?: boolean;
	tasker?: number | null;
	args:any;
}

interface RippleHTMLElement extends HTMLElement {
	_ripple?: RippleOptions;
}

const getPosition = function (this: any, t: any) {
	var e = this.getBoundingClientRect(),
		n = Math.max(e.width, e.height);
	return {
		range: n,
		x: t.clientX - e.left - n / 2,
		y: t.clientY - e.top - n / 2,
	};
};

const Ripple: ObjectDirective & Plugin = {
	mounted(el: RippleHTMLElement, binding: DirectiveBinding<RippleOptions>) {
		el._ripple = {
			...(binding.value ?? {}),
		};
		// console.log('/////////////点击', binding);
		el.addEventListener(
			'click',
			function (n) {
				//
				const _ripple = el._ripple as RippleOptions;
				if (_ripple.disabled) {
					return;
				}

				n.stopPropagation();
				var i = getPosition.call(this, n),
					o = document.createElement('span');
				(o.className = 'ripple'),
					(o.style.top = i.y + 'px'),
					(o.style.left = i.x + 'px'),
					(o.style.width = i.range + 'px'),
					(o.style.height = i.range + 'px'),
					(o.style.animationDuration = '1.2s'),
					(o.style.background = binding.value.args),
					(o.style.opacity = '.1'),
					o.addEventListener(
						'animationend',
						function () {
							const dom = this.parentNode as HTMLElement;
							dom.removeChild(this);
						},
						!1
					),
					this.appendChild(o);
			},
			{ passive: true }
		);
	},
	updated(el: RippleHTMLElement, binding: DirectiveBinding<RippleOptions>) {
		el._ripple = {
			...el._ripple,
			...(binding.value ?? {}),

			tasker: null,
		};
	},
	install(app: App) {
		app.directive('ripple', this);
	},
};
export const _RippleComponent = Ripple;
export default Ripple;
