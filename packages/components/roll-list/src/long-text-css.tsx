/**
 * animation模式
 */

import {
    computed,
    defineComponent,
    ExtractPropTypes,
    getCurrentInstance,
    nextTick,
    onMounted,
    reactive,
    ref,
    SetupContext,
    watchEffect,
} from "vue";
import { createNamespace } from "@dw-ui/utils/components";
const { n } = createNamespace("long-text");
import css from "@dw-ui/directives/css";
// import { ToolTip } from "@dw-ui/components/tool-tip";
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
                "txt-gap": "22",
                // 是否启动滚动的gpu加速
                "sco-ani-name": "longTextScrollAnimation", // "longTextScrollAnimation3d"
                "sco-ani-dura": "10",
            };
        },
    },
};

type longTextProps = ExtractPropTypes<typeof longTextProps>;

export default defineComponent({
    name: "LongText",
    emits: ["update:text"],
    props: longTextProps,
    directives: { css },
    // components: { ToolTip: ToolTip },
    setup(props, ctx: SetupContext<[]>) {
        const vnodeProps = getCurrentInstance()?.vnode.props || {};
        const hasVModelListener = "onUpdate:modelValue" in vnodeProps;

        const containerRef = ref<HTMLDivElement | null | any>(null);
        const scrollRef = ref<HTMLDivElement | null | any>(null);
        const marqueerRef = ref<HTMLDivElement | null | any>(null);
        const marqueer1Ref = ref<HTMLDivElement | null | any>(null); // 副本节点

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

        const dynamicCssBridge = computed(() =>
            Object.assign(longTextProps.dynamicCss.default(), props.dynamicCss)
        );

        const getTextBridge = computed({
            get() {
                // 每次更新text文本默认认为当前文本是可滚动的
                data.isScroll = true;
                return props.text;
            },
            set(val) {
                if (hasVModelListener) {
                    ctx.emit("update:text" as never, val);
                }
            },
        });

        onMounted(() => {
            watchEffect(() => {
                nextTick(() => {
                    const boxWidth = containerRef.value.clientWidth; // scroll 相当于也是offsetWidth
                    const marqueerWidth = marqueerRef.value.offsetWidth;
                    // const boxWidth = containerRef.value.getBoundingClientRect().width;
                    // const marqueerWidth = marqueerRef.value.getBoundingClientRect().width;
                    const textWidth = marqueerWidth;
                    // 判断是否存在 是否需要启动自动滚动
                    if (boxWidth >= textWidth) {
                        data.isScroll = false;
                    }
                });
            });
        });

        return () => (
            <div
                class={[n(""), "tooltip"]}
                data-tooltip="这是一个 tooltip"
                ref={containerRef}
                v-css={dynamicCssBridge.value || {}}
            >
                <div class={n("_scroll")} ref={scrollRef}>
                    <span
                        ref={marqueerRef}
                        class={data.isScroll ? "startAnimation" : ""}
                    >
                        {getTextBridge.value}
                    </span>
                    {/* 无缝滚动文本 --副本 */}
                    {data.isScroll ? (
                        <span>
                            {/* 空白衔接位置 --占位块 */}
                            <span class="seizeASeat"></span>
                            <span ref={marqueer1Ref} class="startAnimation">
                                {getTextBridge.value}
                            </span>
                            {/* 空白衔接位置 --占位块 */}
                            <span class="seizeASeat"></span>
                        </span>
                    ) : (
                        ""
                    )}
                </div>

                {/* <ToolTip x={data.toolTip_x} y={data.toolTip_y} content={data.toolTip_content}></ToolTip> */}
            </div>
        );
    },
});
