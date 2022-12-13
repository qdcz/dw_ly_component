import type { DirectiveBinding, ObjectDirective, Plugin, App } from 'vue';
import { toRef } from 'vue';

export interface PressOptions {
	onPress: (boolean) => void;
}

const Press: ObjectDirective & Plugin = {
	mounted(el, binding: DirectiveBinding<PressOptions>) {
		const { onPress } = binding.value;
		let timer: ReturnType<typeof setTimeout> | null = null;
		let pressInit: boolean = false; //是否按下
		// 重置计时器
		const cancel = () => {
			if (timer !== null) {
				clearTimeout(timer);
				timer = null;
			} else pressInit && onPress(false);
			pressInit = false;
		};

		const start = (e: MouseEvent) => {
			if (e.type === 'click' && e.button !== 0) return;
			e.preventDefault();
			if (timer === null) {
				timer = setTimeout(() => {
					onPress(true);
					timer = null;
					pressInit = true;
				}, 300);
			}
		};

		el.addEventListener('mousedown', start);
		el.addEventListener('touchstart', start);

		el.addEventListener('click', cancel);
		el.addEventListener('mouseout', cancel);
		el.addEventListener('touchend', cancel);
		el.addEventListener('touchcancel', cancel);
	},

	unmounted(el) {
		['mousedown', 'touchstart', 'mouseup', 'mouseout', 'touchend', 'touchcancel'].forEach((name) =>
			el.removeEventListener(name, () => {})
		);
	},
	install(app: App) {
		app.directive('press', this);
	},
};

export default Press;
