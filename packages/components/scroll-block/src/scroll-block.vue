<template>
	<div :class="[classes(n())]" v-css="dynamicCssBridge" ref="scrollBlockDom">
		<div :class="[classes(n('_wrapper'))]" :style="{ opacity: toggleScrollBox ? 1 : 0 }">
			<div :class="[classes(n('_wrapper__inner')), '0']">
				<img :class="[n('_wrapper__inner__image')]" v-for="( item, index ) in  imgList " :key="index"
					:src="item" />
			</div>
		</div>
		<div :class="[classes(n('_wrapper'))]" :style="{ opacity: !toggleScrollBox ? 1 : 0 }">
			<div :class="[classes(n('_wrapper__inner')), '1']">
				<img :class="[n('_wrapper__inner__image')]" v-for="( item, index ) in  imgList1 " :key="index"
					:src="item" />
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent, computed, reactive, ref, getCurrentInstance } from 'vue';
import { scrollBlockProps } from './scroll-block';
import { createNamespace } from '@dw-ui/utils/components';
import css from "@dw-ui/directives/css";
const { n, classes } = createNamespace('scroll-block');

export default defineComponent({
	name: 'VIScrollBlock',
	directives: { css },
	props: scrollBlockProps,
	emits: ['click', 'update:modelValue', 'change'],
	setup(props, ctx) {
		/**
		 * 默认最低4张才可开始无缝轮播
		 * 
		 * 滚动的距离就是 [(length - 3）* (图片宽度 + 外边距)]
		 */

		const vnodeProps = getCurrentInstance()?.vnode.props || {};
		const hasVModelListener = "onUpdate:modelValue" in vnodeProps;


		const scrollBlockDom = ref();

		const toggleScrollBox = ref(true)


		let imgList: any = ref([
			// "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240207113212.png",
			// "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240207173357.png",
			// "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240218221447.jpg",
			// "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240222153642.png",
			// "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240222153607.png",
			// "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20220105175300.png"
		]);

		let imgList1: any = ref([
			// "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240207113212.png",
			// "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240207173357.png",
			// "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240218221447.jpg",
			// "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240222153642.png",
			// "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240222153607.png",
			// "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20220105175300.png"
		]);

		let cacheScrollLeft: number = 0;

		const dynamicStyle = reactive({
			transform: "translateX(0px)"
		})

		function scrollTo(
			element: HTMLElement,
			type: string = "top",
			to: number,
			duration: number,
			callback?: () => void
		): void {
			const start =
				type == "top"
					? element.scrollTop
					: type == "left"
						? element.scrollLeft
						: 0;
			const change = to - start;

			const startTime = performance.now();

			function animateScroll() {
				const now = performance.now();
				const timeElapsed = now - startTime;
				const scrollPosition = linear(
					timeElapsed,
					start,
					change,
					duration
				);

				if (type == "top") {
					element.scrollTop = scrollPosition;
				} else if (type == "left") {
					element.scrollLeft = scrollPosition;
				}

				if (timeElapsed < duration) {
					requestAnimationFrame(animateScroll);
				} else {
					if (callback) callback();
				}
			}

			function easeInOutQuad(t: number, b: number, c: number, d: number): number {
				t /= d / 2;
				if (t < 1) return (c / 2) * t * t + b;
				t--;
				return (-c / 2) * (t * (t - 2) - 1) + b;
			}

			function linear(t: number, b: number, c: number, d: number): number {
				return (c * t / d) + b;
			}

			requestAnimationFrame(animateScroll);
		}

		/**
		 * computed
		 */
		const dynamicCssBridge: any = computed(() => {
			// console.log(111, props.modelValue)
			if (props.modelValue.length <= props.showCount) {
				imgList.value = [...props.modelValue, ...props.modelValue];
				imgList1.value = [...imgList.value.slice(0)]
			} else {
				// imgList1
			}
			props.dynamicCss['bs-box-width'] = props.showCount * props.dynamicCss['bs-img-width'] + (props.showCount - 1) * props.dynamicCss['bs-img-interval'];
			return Object.assign(scrollBlockProps.dynamicCss.default(), props.dynamicCss)
		});

		// const getShowCountBridge: any = computed(() => {
		// 	// props.dynamicCss['bs-box-width']
		// });

		// // list数据
		// const modelValueBridge: any = computed(() => {
		// 	console.log(666, imgList.value)
		// 	return props.modelValue
		// 	// imgList.value = props.modelValue as any;

		// 	// imgList.value

		// 	// 10 - 4  = 6   
		// });

		// console.log(1,modelValueBridge.value)




		const run = (type: string) => {
			let maxScrollWidth: number = 0;
			let cdom = null;

			if (type == "front") {
				cdom = scrollBlockDom.value.children[0];
				maxScrollWidth = cdom.scrollWidth - cdom.clientWidth;
			} else if (type == 'backend') {
				cdom = scrollBlockDom.value.children[1];
				maxScrollWidth = cdom.scrollWidth - cdom.clientWidth;
			}

			cacheScrollLeft = cacheScrollLeft + maxScrollWidth;
			scrollTo(
				cdom,
				"left",
				cacheScrollLeft,
				5000,
				() => {
					toggleScrollBox.value = !toggleScrollBox.value
					cdom.scrollLeft = 0; // 清空
					cacheScrollLeft = 0; // 清空缓存
					run(toggleScrollBox.value ? "front" : "backend")
				}
			);

		}

		setTimeout(() => {
			run("front")
		}, 1000);

		return {
			n,
			classes,

			scrollBlockDom,
			toggleScrollBox,
			imgList,
			imgList1,
			dynamicStyle,
			dynamicCssBridge,
		};
	},
});
</script>
