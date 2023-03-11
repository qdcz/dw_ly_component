import {
    computed,
    defineComponent,
    ExtractPropTypes,
    getCurrentInstance,
    nextTick,
    onUnmounted,
    reactive,
    ref,
    SetupContext,
} from "vue";
import { createNamespace } from "@dw-ui/utils/components";
const { n } = createNamespace("scroll-text");
import css from "@dw-ui/directives/css";

import { ToolTip } from "@dw-ui/components/tool-tip";

const longTextProps = {
    // 显示文本
    text: {
        type: String,
        default: "这是一个默认文本",
    },
    // 滚动速度
    speed: {
        type: Number,
        default: 1000, // 默认速度为：文字的宽度像素/1s
    },
    // 动态css样式
    dynamicCss: {
        type: Object,
        default: () => {
            return {
                // 空白衔接块的宽度
                "txt-gap": "20",
            };
        },
    },
};

type longTextProps = ExtractPropTypes<typeof longTextProps>;

export default defineComponent({
    name: "ScrollText",
    emits: ["update:text"],
    props: longTextProps,
    directives: { css },
    components: { ToolTip: ToolTip },
    setup(props, ctx: SetupContext<[]>) {
        const vnodeProps = getCurrentInstance()?.vnode.props || {};
        const hasVModelListener = "onUpdate:modelValue" in vnodeProps;

        const containerRef = ref<HTMLDivElement | null | any>(null);
        const scrollRef = ref<HTMLDivElement | null | any>(null);
        const marqueerRef = ref<HTMLDivElement | null | any>(null);
        const marqueer1Ref = ref<HTMLDivElement | null | any>(null);

        let timer: number | null = null;

        type Data = {
            isScroll: Boolean;

            toolTip_x: Number;
            toolTip_y: Number;
            toolTip_content: String;
        };
        const data: Data = reactive({
            isScroll: true, // 是否达到滚动条件

            toolTip_x: 0,
            toolTip_y: 0,
            toolTip_content: "盎司附近拉萨解放了卡JFK垃圾地方",
        });

        // 上一帧动画的时间
        let lastFrameTime: number | null = 0;

        const dynamicCssBridge = computed(() =>
            Object.assign(longTextProps.dynamicCss.default(), props.dynamicCss)
        );

        const getTextBridge = computed({
            get() {
                // 每次更新text文本默认认为当前文本是可滚动的
                data.isScroll = true;
                startAutoScroll(data);
                return props.text;
            },
            set(val) {
                if (hasVModelListener) {
                    ctx.emit("update:text" as never, val);
                }
            },
        });

        const marquee = () => {
            const marqueerWidth = marqueerRef.value.offsetWidth;
            const marqueer1Width = marqueer1Ref.value.offsetWidth;
            const scrollWidth = scrollRef.value.scrollLeft;
            const currentTime = performance.now();
            if (!lastFrameTime) {
                lastFrameTime = currentTime;
            }
            // 时间差
            const delta = currentTime - lastFrameTime;
            let distance = (marqueerWidth / props.speed) * delta; // 每帧滚动距离【每props.speed时长滚动marqueerWidth像素】
            // marqueerRef 滚动到最右边的时候
            if (marqueer1Width - scrollWidth <= 0) {
                scrollRef.value.scrollLeft -= marqueerRef.value.offsetWidth;
                // scrollRef.value.scrollLeft = 0; // 这样会好理解一点
                lastFrameTime = 0;
                requestAnimationFrame(marquee);
            } else {
                /**
                 * 如果要控制requestAnimationFrame的动画时长 需要计算每秒钟滚动多少像素：
                 * 计算出当前时间和上一帧时间差 来控制控制滚动速度
                 *
                 * 但是用这种方法会有轻微的抖动，
                 */
                // scrollRef.value.scrollLeft = distance;
                scrollRef.value.scrollLeft++;
            }
        };

        // 开启自动滚动
        const startAutoScroll = (data?: Data) => {
            nextTick(() => {
                if (containerRef.value && marqueerRef.value) {
                    const boxWidth = containerRef.value.clientWidth;
                    const marqueerWidth = marqueerRef.value.offsetWidth;
                    // 空白衔接块的宽度
                    const txtGap = Number(dynamicCssBridge.value["txt-gap"]);
                    const textWidth = marqueerWidth - txtGap;
                    // 判断是否存在 是否需要启动自动滚动
                    if (boxWidth < textWidth) {
                        stopAutoScroll();
                        const marqueeFunc = () => {
                            marquee();
                            timer = requestAnimationFrame(marqueeFunc);
                        };
                        timer = requestAnimationFrame(marqueeFunc);
                    } else {
                        if (data) {
                            data.isScroll = false;
                        }
                    }
                }
            });
        };

        // 停止自动滚动
        const stopAutoScroll = (): Boolean => {
            if (timer) {
                cancelAnimationFrame(timer);
                timer = null;
                return true;
            } else {
                return false;
            }
        };

        // 鼠标悬浮停止动画
        const handleMouseEnter = (e:any) => {
            data.toolTip_x = e.x;
            data.toolTip_y = e.y;
            stopAutoScroll();
        };

        // 鼠标离开继续动画
        const handleMouseLeave = () => {
            startAutoScroll();
        };

        // 组件卸载 周期
        onUnmounted(() => {
            if (timer) {
                clearInterval(timer);
                timer = null;
            }
        });

        return () => (
            <div
                class={[n(""), "tooltip"]}
                data-tooltip="这是一个 tooltip"
                ref={containerRef}
                onMouseenter={handleMouseEnter}
                onMouseleave={handleMouseLeave}
                v-css={dynamicCssBridge.value || {}}
            >
                <div class={n("_scroll")} ref={scrollRef}>
                    <span ref={marqueerRef}>
                        {getTextBridge.value}
                        {/* 空白衔接位置 --占位块 */}
                        {data.isScroll ? <span class="seizeASeat"></span> : ""}
                    </span>
                    {/* 无缝滚动文本 --副本 */}
                    <span ref={marqueer1Ref}>
                        {data.isScroll ? getTextBridge.value : ""}
                        {data.isScroll ? <span class="seizeASeat"></span> : ""}
                    </span>
                </div>

                {/* <ToolTip x={data.toolTip_x} y={data.toolTip_y} content={data.toolTip_content}></ToolTip> */}
            </div>
        );
    },
});
