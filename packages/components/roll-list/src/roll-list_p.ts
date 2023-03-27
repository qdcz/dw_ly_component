// 类型文件
import type { ExtractPropTypes, PropType } from "vue";

export enum RollType {
    "AUTHROLL" = "autoRoll",
    "HANDMOVE" = "handRoll",
}

export const rollListProps = {
    // 表头字段-配置   // TODO type类型约束下
    header: {
        type: Array<any>,
        default: [],
    },
    // 表头显隐
    showHeader: {
        type: Boolean,
        default: true,
    },
    // 每行固高
    itemHeight: {
        type: [String],
        default: "40px",
    },
    // 可见条数
    showCount: {
        type: [Number],
        default: 8,
    },
    // 滚动条数
    rollCount: {
        type: [Number],
        default: 1,
    },
    // 特殊显示的位置
    attractShowCount: {
        type: Array, // 内部会错判断，如果数组内的值超过展示的条数，则清空为[]   // TODO 未做
        default: [3, 4],
        // default:[]
    },
    // 滚动类型
    rollType: {
        type: String,
        default: RollType.AUTHROLL,
        validator: function (value: RollType) {
            return Object.values(RollType).includes(value);
        },
    },
    // 自动滚动时长间隔 ( 不能小于或等于 scrollTransition )
    loopTime: {
        type: Number,
        default: 1000 *2,
    },
    // 滚动过渡时长
    scrollTransition: {
        type: Number,
        default: 1000 * 0.8,
    },
    // (临时)固定层级缩放
    tmp_scaleRule: {
        type: Array,
        default: [1.3, 1],
    },
    // 缩放规则  ----- 支持对每一列进行配置缩放规则
    scaleRule: {
        type: [Number, Array],
        // 特殊显示位置为1.5，往下根据数量进行递减（如果数据只有三条，那么只有1.5和1.0会生效）
        default: [1.5, 1.0, 0.8],
    },
    // 数据列表
    modelValue: {
        type: Array as PropType<listItem<ImageContent | TextContent>[]>,
        default: [],
    },
    dynamicCss: {
        type: Object,
        default: () => {
            return {
                // 容器宽度
                "box-width": "800", // 或者auto

                /**
                 * 表头相关
                 */
                "th-pad-tb": "10", // 表头的 上下内边距
                "th-bg-color": "rgb(179, 210, 224)",
                "th-fo-color": "rgb(90, 99, 110)",
                "th-fo-size": "16",
                "th-fo-weight": "900",
                "th-radius-lt": "8",
                "th-radius-rt": "8",
                "th-radius-lb": "0",
                "th-radius-rb": "0",

                /**
                 * 表体相关
                 */
                // 鼠标悬浮表行背景颜色
                "tr-hover-bg-color": "rgb(132 176 212 / 80%)",
                "tr-hover-transition": "0.3",
                // 激活的背景颜色
                "tr-attract-bg-color-style": "single", // single 是使用单色 double是使用渐变色
                "tr-attract-bg-color-to": "#00DEFF",
                "tr-attract-bg-color-from": "#FFFFFF",
                "tr-attract-bg-color-angle": "135",
                "tr-attract-bg-color-value": "rgb(211, 228, 242)",
                // "tr-attract-bg-color": "rgba(20, 62, 114, 0.1)",
                // 其余未激活的背景颜色
                "tr-un-attract-bg-color": "rgb(235, 235, 235)",

                /**
                 * 表列相关
                 */
                "td-pad-lr": "20", // 表列的 左右外边距
                "td-pad-tb": "0",

                /**
                 * longText组件
                 */
                "longText-txt-gap": "30", // 滚动文本连接间隙
                // header传入 权重最高
                "longText-sco-ani-name": "longTextScrollAnimation", // "longTextScrollAnimation3d"
                "longText-sco-ani-dura": "15",
            };
        },
    },
};

export enum EmbeddedComType {
    "IMAGE" = "image",
    "TEXT" = "text",
    "LONGTEXT" = "longText",
    "NUMBER" = "number",
    "SELECT-V2" = "select-v2",
}

type ImageContent = {
    url: string;
};

type TextContent = {
    url: string;
};

type listItem<T extends ImageContent | TextContent> = {
    id: string;
    type: EmbeddedComType;
    content: T;
};

export type ComData = {
    uuid: string;
    // 触发消费开关
    takeFlag: Boolean;
    // 自动轮播时长
    rotationTimer: number | boolean | null;
    // 第一次调用问题
    getInventedListDataBridgeInit: Boolean;
};

export type rollListProps = ExtractPropTypes<typeof rollListProps>;
