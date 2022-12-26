import { defineComponent, inject, reactive, nextTick, ref } from 'vue';
import { createNamespace } from '@dw-ui/utils/components';
import { PAGINATION_INJECTION_KEY } from '../../../tokens/pagination';
const { n, classes } = createNamespace('pagination-jump');

export default defineComponent({
	name: 'VIPaginationJump',
	emits: ['jump-page'],
	setup(props, ctx) {
		let provideData: any = inject(PAGINATION_INJECTION_KEY);

		type jumpData = {
			num: number | string;
		};
		const data: jumpData = reactive({
			num: '',
		});
		const vi_jump_input = ref<HTMLInputElement | any>();

		// 输入框值发生变化事件
		const numChange = function (e:any) {
			const reset = () => (data.num = Math.random() * 1000000);
			reset();
			const val = Number(e.target.value);
			if (val <= 0) {
				data.num = 1;
			} else if (val > provideData.pageCount.value) {
				// 重复赋值一样的数值 就不生效了 可能是jsx的一个bug
				data.num = provideData.pageCount.value;
			} else {
				data.num = val;
			}
		};
		// 键盘按下事件
		const handleKeyDown = function (e) {
			if (e.key == 'Enter') {
				vi_jump_input.value.blur();
				nextTick(() => ctx.emit('jump-page', data.num || 1));
			}
		};
		const aaa = function(){
			alert(7)
		}
// @ts-nocheck 
		return () => (
			<div class={[classes(n())]}>
				<span>{provideData.jumpLabel.value}</span>
				<input
					ref={vi_jump_input}
					class={[n('_input')]}
					value={data.num}
					type="number"
					min="1"
					tabindex="0"
					autocomplete="off"
					onChange={numChange.bind(this)}
					onKeydown={handleKeyDown.bind(this)}
				></input>
			</div>
		);
	},
});
