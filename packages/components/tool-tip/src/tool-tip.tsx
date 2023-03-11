import {
    defineComponent,
    ExtractPropTypes,
    onMounted,
    onUnmounted,
    PropType,
    ref,
    SetupContext,
} from "vue";
import { createNamespace } from "@dw-ui/utils/components";
const { n } = createNamespace("tool-tip");
import css from "@dw-ui/directives/css";

const toolTipProps = {
    x: {
        type: Number as PropType<number>,
    },
    y: {
        type: Number as PropType<number>,
    },
    content: {
        type: String as PropType<string>,
        default: "这是一个默认tooltip text",
    },
    // 动态css样式
    dynamicCss: {
        type: Object,
        default: () => {
            return {};
        },
    },
};

type toolTipProps = ExtractPropTypes<typeof toolTipProps>;

export default defineComponent({
    name: "ToolTip",
    emits: ["update:text"],
    props: toolTipProps,
    directives: { css },
    setup(props, ctx: SetupContext<[]>) {
        const tooltipRef = ref<HTMLDivElement | null>(null);

        const updateTooltipPosition = () => {
            if (tooltipRef.value) {
                const tooltipWidth = tooltipRef.value.offsetWidth;
                const tooltipHeight = tooltipRef.value.offsetHeight;

                const newX = Number(props.x) - tooltipWidth / 2;
                const newY = Number(props.y) - tooltipHeight / 2;

                tooltipRef.value.style.left = `${newX}px`;
                tooltipRef.value.style.top = `${newY}px`;
            }
        };

        onMounted(() => {
            updateTooltipPosition();
            window.addEventListener("resize", updateTooltipPosition);
        });

        onUnmounted(() => {
            window.removeEventListener("resize", updateTooltipPosition);
        });

        return () => (
            <div class={n("")} ref={tooltipRef}>
                {props.content}
            </div>
        );
    },
});
