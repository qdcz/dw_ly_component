// 类型文件
import type { ExtractPropTypes, PropType } from "vue";

export const rollListProps = {
    // 表头字段
    header: {
        type: Array<any>,
        default: [],
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
    },
    // 自动滚动时长间隔 ( 不能小于或等于 scrollTransition )
    loopTime: {
        type: Number,
        default: 1000 * 300,
    },
    // 滚动过渡时长
    scrollTransition: {
        type: Number,
        default: 1000 * 2,
    },
    // (临时)固定层级缩放
    tmp_scaleRule: {
        type: Array,
        default: [1.3, 0.8],
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
                // 左右内边距
                "box-pad-lr": "10",

                /**
                 * 表头相关
                 */
                "th-pad-tb": "10", // 表头的 上下内边距
                "th-bg-color": "#0f2851",
                "th-fo-color": "#df9418",
                "th-fo-size": "16",
                "th-fo-weight": "900",

                /**
                 * 表体相关
                 */
                // 激活的背景颜色
                "tr-attract-bg-color": "#184677",
                // 其余未激活的背景颜色
                "tr-un-attract-bg-color": "#04172c",

                /**
                 * 表列相关
                 */
                "td-pad-lr": "0",
                "td-pad-tb": "0",

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
