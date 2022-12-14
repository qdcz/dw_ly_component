import { defineComponent } from 'vue';
import { createNamespace } from '@dw/utils/components';
const { n, classes } = createNamespace('select-v2-svg-icon');

export default defineComponent({
	name: 'VISelectV2SvgIcon',
	emits: ['click'],
	props: {
		path: {
			type: String,
			default: `M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 
			764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 
			45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z`
		},
		height: {
			type: [String, Number],
			default: "12"
		},
		width: {
			type: [String, Number],
			default: "12"
		},
		modelValue: {
			type: [String, Number, Boolean],
			default: '',
		},
	},
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
