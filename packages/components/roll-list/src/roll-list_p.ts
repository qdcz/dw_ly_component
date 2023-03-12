// 类型文件
import type { ExtractPropTypes, PropType } from "vue";

export const rollListProps = {
    // 表头字段
    header: {
        type: Array<any>,
        default: [],
    },
    // 是否显示表头
    showHeader: {
        type: Boolean,
        default: true,
    },
    // 每项的固定高度
    itemHeight: {
        type: [String],
        default: "40px",
    },
    // 展示的条数
    showCount: {
        type: [Number],
        default: 6,
    },
    // 每次滚动的条数
    rollCount: {
        type: [Number],
        default: 1,
    },
    // 特殊显示的位置
    attractShowCount: {
        type: Array, // 内部会错判断，如果数组内的值超过展示的条数，则清空为[]   // TODO 未做
        default: [1, 3, 4],
        // default:[]
    },
    // 自动滚动时长间隔 ( 不能小于或等于 scrollTransition )
    loopTime: {
        type: Number,
        default: 1000 * 3,
    },
    // 滚动过渡时长
    scrollTransition: {
        type: Number,
        default: 1000 * 2,
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
        // default: () => {
        //     return new Array(100).fill(0).map((i, index) => {
        //         return {
        //             field1: "DP000037",
        //             field2: "工商信息数据服务",
        //             field3: "深圳市互联网...",
        //             field4: "河南九天遥感科技",
        //             field5: "安全预警",
        //             field6: "157.76",
        //         };
        //     });
        // },
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
                "tr-hover-bg-color":"rgb(132 176 212 / 80%)",
                "tr-hover-transition":"0.3",
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
                "td-pad-lr": "20",
                "td-pad-tb": "0",


                /**
                 * longText组件
                 */
                "longText-txt-gap":"30"
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
    // 定时器实例--自动轮播时长
    // rotationTime: number;
    // 自动轮播时长
    rotationTimer: number | boolean | null;
    // 第一次调用问题
    getInventedListDataBridgeInit: Boolean;
};

export type rollListProps = ExtractPropTypes<typeof rollListProps>;