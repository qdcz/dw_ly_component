import { defineComponent, computed, provide, getCurrentInstance, reactive, onMounted } from 'vue';
import { paginationProps } from './pagination_p';
import { createNamespace } from '@dw/utils/components';
import { PAGINATION_INJECTION_KEY } from '../../../tokens/pagination';

import prev from './prev';
import next from './next';
import pager from './pager';
import jump from './jump';
import total from './total';
import { VISelectV2, VISelectV2Option } from '@dw/components/select-v2';

import css from '@dw/directives/css';
import { nextTick } from 'vue';
import { watch } from 'vue';
const { n, classes } = createNamespace('pagination');

export default defineComponent({
	name: 'VIPagination',
	props: paginationProps,
	directives: { css },
	emits: ['size-change', 'update:modelValue', 'current-change', 'update:total'],
	components: {
		prev,
		pager,
		next,
		jump,
		total,
		"vi-select-v2":VISelectV2,
		"vi-select-v2-option":VISelectV2Option,
	},
	setup(props, ctx) {
		const isAbsent = (v) => typeof v !== 'number';
		const isArray = (v) => v instanceof Array;
		const vnodeProps = getCurrentInstance()?.vnode?.props || {};
		const hasPageSizeListener =
			'onUpdate:sizeChange' in vnodeProps || 'onUpdate:size-change' in vnodeProps || 'onSizeChange' in vnodeProps;
		const hasCurrentPageListener =
			'onUpdate:currentPage' in vnodeProps ||
			'onUpdate:current-page' in vnodeProps ||
			'onUpdate:modelValue' in vnodeProps ||
			'onCurrentChange' in vnodeProps;
		const hasTotalListener = 'update:total' in vnodeProps;

		let defaultPageSize: number | string = 10;
		let defaultCurrentPage: number | string = 1;
		let defaultTotlal: number | string = 100;

		type paginationData = {
			select_curSelect: string | number | [];
			select_list: any[];
			select_dynamicCss: object;
		}

		const data: paginationData = reactive({
			select_curSelect: '',
			select_list: [
				// { value: '100', label: '100/page', },
				// { value: '200', label: '200/page', },
			],
			select_dynamicCss: {
				// "input-txt-alight": "center",
			},
		});

		const renderPageSizeList = function () {
			if (isArray(props.pageSize)) {
				data.select_list = (props.pageSize as []).map((i) => {
					return {
						value: i,
						label: i + '/page',
					};
				});
				data.select_curSelect = data.select_list[0].value;
			}
		};

		/**
		 * computeds
		 */

		const pageCountBridge = computed(() => {
			let pageCount = 0;
			if (!isAbsent(props.total)) {
				pageCount = Math.max(1, Math.ceil((props.total as number) / (pageSizeBridge.value as number)));
			} else {
				console.warn('total属性不合格');
			}
			return pageCount;
		});

		const pagerCountBridge = computed(() => {
			let pagerCount = 0;
			if (!isAbsent(props.total)) {
				// pagerCount = Math.max(1, Math.ceil(props.total / pageSizeBridge.value) - 2);
				// pager 最多同时显示29个
				if (!isAbsent(props.pagerCount)) {
					//  不小于计算的数量 、 pager 最少同时显示7个 、pager 必须要是单数
					pagerCount =
						pageCountBridge.value > 7
							? Math.max(
									7,
									(props.pagerCount as number) % 2 == 0
										? (props.pagerCount as number) - 1
										: (props.pagerCount as number)
							  )
							: pageCountBridge.value;
				}
				if (pagerCount > 29) {
					pagerCount = 29;
				}
			}
			return pagerCount;
		});

		const pageSizeBridge = computed({
			get(): any {
				// 页码最小5页
				let val1 = isAbsent(props.pageSize) ? defaultPageSize : props.pageSize > 5 ? props.pageSize : 5;
				val1 = isArray(props.pageSize) ? data.select_curSelect : val1;
				return val1;
			},
			set(v: string | number) {
				if (isAbsent(props.pageSize)) {
					defaultPageSize = v;
				}
				if (hasPageSizeListener) {
					// 页数大小改变 如当前页码超出 需置最高页码
					props.modelValue > Math.ceil((props.total as number) / (v as number))
						? (currentPageBridge.value = Math.ceil((props.total as number) / (v as number)))
						: '';
					nextTick(() => {
						ctx.emit('size-change', { pageSize: v, currentPage: props.modelValue });
					});
				}
			},
		});

		const currentPageBridge = computed({
			get() {
				return isAbsent(props.modelValue) ? defaultCurrentPage : props.modelValue;
			},
			set(v) {
				let newCurrentPage = v;
				if (v < 1) {
					newCurrentPage = 1;
				} else if (v > pageCountBridge.value) {
					newCurrentPage = pageCountBridge.value;
				}
				// if (isAbsent(props.currentPage)) {
				// 	defaultCurrentPage = newCurrentPage;
				// }
				if (hasCurrentPageListener) {
					ctx.emit('update:modelValue', newCurrentPage);
					ctx.emit('current-change', newCurrentPage);
				}
			},
		});

		const totalBridge = computed({
			get() {
				return isAbsent(props.total) ? defaultTotlal : props.total;
			},
			set(v) {
				let newTotal = v;
				if (v < 0) {
					newTotal = 0;
				}
				defaultTotlal = newTotal;
				if (hasTotalListener) {
					ctx.emit('update:total', newTotal);
				}
			},
		});

		const totalLabelBridge = computed(() => props.totalLabel);
		const jumpLabelBridge = computed(() => props.jumpLabel);

		const dynamicCssBridge = computed(() => Object.assign(paginationProps.dynamicCss.default(), props.dynamicCss));
		const selectv2_dynamicCssBridge = computed(() => {
			let obj = {};
			for (let key in dynamicCssBridge.value) {
				if (key.includes('select-v2-')) {
					obj[key.replace('select-v2-', '')] = dynamicCssBridge.value[key];
				}
			}
			return obj;
		});

		// layout components
		const Layout = computed(() => {
			let layout = props.layout;
			const layoutVisual = {
				total: false,
				size: false,
				prev: false,
				next: false,
				pager: false,
				jump: false,
			};
			for (let i in layoutVisual)
				layoutVisual[i] =
					layout
						.replace(/\s+/g, '')
						.split(',')
						.findIndex((name) => name == i) != -1
						? true
						: false;
			return layoutVisual;
		});

		/**
		 * data transmission
		 */
		provide(PAGINATION_INJECTION_KEY, {
			pageCount: pageCountBridge,
			pagerCount: pagerCountBridge,
			pageSize: pageSizeBridge,
			currentPage: currentPageBridge,
			total: totalBridge,
			totalLabel: totalLabelBridge,
			jumpLabel: jumpLabelBridge,
		});

		/**
		 * life cycle
		 */
		onMounted(() => {
			renderPageSizeList();
		});

		/**
		 * watch
		 */
		watch(
			() => props.pageSize,
			() => {
				renderPageSizeList();
			},
			{
				deep: true,
			}
		);

		/**
		 * events
		 */

		const prevClick = (e) => (currentPageBridge.value = (currentPageBridge.value as number) - 1);
		const nextClick = (e) => (currentPageBridge.value = (currentPageBridge.value as number) + 1);
		const paperClick = (e) => (currentPageBridge.value = e);
		const handleJumppage = (e) => (currentPageBridge.value = e);
		const onHandleSelected = function (v) {
			pageSizeBridge.value = v.value;
		};

		/**
		 * view
		 */
		return () => (
			<div class={[classes(n()), props.background ? 'bgbox' : '']} v-css={dynamicCssBridge.value || {}}>
				{Layout.value.total ? <total></total> : ''}
				{Layout.value.size && isArray(props.pageSize) ? (
					<vi-select-v2
						v-model={data.select_curSelect}
						dynamicCss={selectv2_dynamicCssBridge.value}
						onHandleSelected={onHandleSelected}
						class={n('-select')}
					>
						{data.select_list.map((i) => (
							<vi-select-v2-option key={i.value} label={i.label} value={i.value}></vi-select-v2-option>
						))}
					</vi-select-v2>
				) : (
					''
				)}
				{Layout.value.prev ? <prev disabled={false} onClick={prevClick}></prev> : ''}
				{Layout.value.pager ? <pager onClick={paperClick}></pager> : ''}
				{Layout.value.next ? <next disabled={false} onClick={nextClick}></next> : ''}
				{Layout.value.jump ? <jump onJumpPage={handleJumppage}></jump> : ''}
			</div>
		);
	},
});
