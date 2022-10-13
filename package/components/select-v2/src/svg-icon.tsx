import { defineComponent } from 'vue';
import { createNamespace } from '@visix-ui/utils/components';
import { svgIconProps } from './svg-icon';
const { n, classes } = createNamespace('select-v2-svg-icon');

export default defineComponent({
	name: 'VISelectV2SvgIcon',
	emits: ['click'],
	props: svgIconProps,
	setup(props, ctx) {
		const handleClick = function (e) {
			ctx.emit('click', e);
		};

		const svg = function () {
			return (
				<svg
					class={[classes(n()), 'icon']}
					height={props.height}
					width={props.width}
					viewBox="0 0 1024 1024"
					xmlns="http://www.w3.org/2000/svg"
					onClick={handleClick}
				>
					<path fill="currentColor" d={props.path}></path>
				</svg>
			);
		};

		return () => svg();
	},
});
