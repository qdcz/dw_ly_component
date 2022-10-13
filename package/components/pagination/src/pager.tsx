
import { defineComponent, computed, reactive, inject } from 'vue';
import { createNamespace } from '@visix-ui/utils/components';
import { PAGINATION_INJECTION_KEY } from '../../../tokens/pagination';
const { n } = createNamespace('pagination-pager');

export default defineComponent({
    name: 'VIPaginationPager',
    emits: ['click'],
    setup(props, ctx) {
        let { currentPage, pagerCount, pageCount } :any = inject(PAGINATION_INJECTION_KEY);
        const data = reactive({
            quickPrevBtnIsHover: false,
            quickNextBtnIsHover: false,
        });

        // icon path
        const svgIconPath = {
            "quickLeftArrow": `M62.56 511.904L485.952 88.256a48.64 48.64 0 0 1 68.736 68.736L199.616 512.064l356.8 356.8A48.64 48.64 0 0 1 487.68 937.6l-39.744-39.744 0.256-0.256L62.528 511.936z m388.8 0L874.752 88.256a48.64 48.64 0 0 1 68.736 68.736L588.416 512.064l356.8 356.8A48.64 48.64 0 0 1 876.48 937.6l-39.776-39.744 0.288-0.256-385.664-385.664z`,
            "quickRightArrow": `M948.064 513.056L536.064 925.312a47.296 47.296 0 0 1-66.88-66.88l345.504-345.504L467.52 165.76a47.296 47.296 0 0 1 66.88-66.88l38.688 38.688-0.256 0.256 375.264 375.264m-378.336-0.032L157.76 925.312a47.296 47.296 0 0 1-66.88-66.88l345.472-345.504L89.184 165.76a47.296 47.296 0 0 1 66.88-66.88l38.688 38.688-0.256 0.256 375.264 375.264"`,
            "ellipsis": `M110.336 572.330667a85.333333 85.333333 0 1 0 120.661333-120.661334 85.333333 85.333333 0 0 0-120.661333 120.661334zM451.669333 572.330667a85.333333 85.333333 0 1 0 120.661334-120.661334 85.333333 85.333333 0 0 0-120.661334 120.661334zM793.002667 572.330667a85.333333 85.333333 0 1 0 120.661333-120.661334 85.333333 85.333333 0 0 0-120.661333 120.661334z`,
        };

        // 基础累加数据
        const pagerBase = computed(() => {
            return Math.floor(currentPage.value / pagerCount.value) * pagerCount.value
        });

        // 动态数字展示的数量
        const eachPagerCount = computed(() => {
            return pagerCount.value < pageCount.value ? pagerCount.value : pageCount.value - 1;
        });

        // 是否重新计算中间数字
        const isRecalculate = computed(() => {
            // 在两边同时折叠状态下 动态计算
            if (isShowQuickPrevBtn.value && isShowQuickNextBtn.value) {
                // 展示的数字内容居中
                return currentPage.value
            } else {
                return false
            }
        });


        // 是否显示 Quick Prev Page
        const isShowQuickPrevBtn = computed(() => {
            if (pageCount.value <= pagerCount.value) return 0;
            return currentPage.value >= pagerCount.value - 2;
        });

        // 是否显示 Quick Next Page
        const isShowQuickNextBtn = computed(() => {
            if (pageCount.value <= pagerCount.value) return 0;
            return currentPage.value < pageCount.value - pagerCount.value + 4;
        });

        // 是否显示 Max Number
        const isShowBigNumerBtn = computed(() => pageCount.value > 1);


        /**
         * 数字按钮点击事件
         * @param {*} e 
         */
        const handleClick = function (e) {
            ctx.emit('click', e);
        }

        /**
         * Easy page turning event
         * @param {*} e 
         */
        const handlePrevMouseEn = (e) => data.quickPrevBtnIsHover = true;
        const handlePrevMouseoUt = (e) => data.quickPrevBtnIsHover = false;
        const handleNextMouseoEn = (e) => data.quickNextBtnIsHover = true;
        const handleNextMouseoUt = (e) => data.quickNextBtnIsHover = false;
        const handlePrevClick = (e) => currentPage.value = currentPage.value - pagerCount.value + 2;
        const handlePextClick = (e) => currentPage.value = currentPage.value + pagerCount.value - 2;

        return () => (
            <ul class={[n()]}>
                {/* Min Number */}
                <li class={[n("_btn"), currentPage.value == 1 ? "active" : ""]} onClick={handleClick.bind(this, 1)}>{1}</li>

                {/* Prev Page */}
                {isShowQuickPrevBtn.value ?
                    (<li class={[n("_btn"), 'quickPrev']} onmouseenter={handlePrevMouseEn} onmouseleave={handlePrevMouseoUt} onClick={handlePrevClick}>
                        <svg class="icon" viewBox="0 0 1024 1024" version="1.1" name={data.quickPrevBtnIsHover ? 'quickLeftArrow' : 'ellipsis'} xmlns="http://www.w3.org/2000/svg"
                            width="12" height="12">
                            <path fill="currentColor" d={data.quickPrevBtnIsHover ? svgIconPath['quickLeftArrow'] : svgIconPath['ellipsis']}></path>
                        </svg>
                    </li>) : <div></div>
                }

                {/* Dynamic generative */}
                {
                    new Array(eachPagerCount.value).fill(isRecalculate.value ? isRecalculate.value : 0).map((item, index) => {
                        let curPage = currentPage.value;
                        let cen = Math.ceil((pagerCount.value - 2) / 2);
                        let boundaryJudge = index > 0 & index < pagerCount.value - 1; // 头尾不渲染
                        let _pagerBase = pagerBase.value;

                        if (item > 0) {  // Recalculate Numeric button
                            if (boundaryJudge) {
                                item = index <= cen ? item - cen + index : item + index - cen;
                                return (
                                    <li class={[n("_btn"), curPage == item ? "active" : ""]} onClick={handleClick.bind(this, item)}>
                                        {item}
                                    </li>
                                )
                            }
                        } else { // The left and right boundaries are within the scope
                            if (boundaryJudge) {
                                // the left boundaries
                                if (curPage < pagerCount.value - 2) {
                                    return (
                                        <li class={[n("_btn"), curPage == _pagerBase + index + 1 ? "active" : ""]}
                                            onClick={handleClick.bind(this, _pagerBase + index + 1)}>
                                            {_pagerBase + index + 1}
                                        </li>
                                    )
                                } else { // Click to the right boundaries
                                    return (
                                        <li class={[n("_btn"), curPage == pageCount.value - pagerCount.value + 1 + index ? "active" : ""]}
                                            onClick={handleClick.bind(this, pageCount.value - pagerCount.value + 1 + index)}>
                                            {pageCount.value - pagerCount.value + 1 + index}
                                        </li>
                                    )
                                }
                            }
                        }
                    })
                }

                {/* Next Page */}
                {isShowQuickNextBtn.value > 0 ?
                    (<li class={[n("_btn"), 'quickNext']} onmouseenter={handleNextMouseoEn} onmouseleave={handleNextMouseoUt} onClick={handlePextClick}>
                        <svg class="icon" viewBox="0 0 1024 1024" version="1.1" name={data.quickNextBtnIsHover ? 'quickRightArrow' : 'ellipsis'} xmlns="http://www.w3.org/2000/svg"
                            width="12" height="12">
                            <path fill="currentColor" d={data.quickNextBtnIsHover ? svgIconPath['quickRightArrow'] : svgIconPath['ellipsis']}></path>
                        </svg>
                    </li>) : <div></div>
                }

                {/* Max Number */}
                {
                    isShowBigNumerBtn.value ? <li class={[n("_btn"), currentPage.value == pageCount.value ? "active" : ""]} onClick={handleClick.bind(this, pageCount.value)}>{pageCount.value}</li> : ""
                }
            </ul>
        )
    },
});
