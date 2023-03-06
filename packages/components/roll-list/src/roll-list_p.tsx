// 类型文件
import type { ExtractPropTypes, PropType } from "vue";
import { createUUID } from "@dw-ui/utils";

export const rollListProps = {
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
        type: Array, // 内部会错判断，如果数组内的值超过展示的条数，则清空为[]
        // default: true,
        default: [2,3],
    },
    // 缩放规则  ----- 支持对每一列进行配置缩放规则
    scaleRule: {
        type: [Number, Array],
        // 特殊显示位置为1.5，往下根据数量进行递减（如果数据只有三条，那么只有1.5和1.0会生效）
        default: [1.5, 1.0, 0.8],
    },
    flexBasic: {
        type: [Number, Array],
        default: ["20%", "20%", "20%", "20%", "20%", "20%"],
    },
    // 数据列表
    modelValue: {
        type: Array as PropType<listItem<ImageContent | TextContent>[]>,
        default: () => {
            return new Array(100).fill(0).map((i, index) => {
                return {
                    ____id: createUUID(),
                    field1: {
                        type: EmbeddedComType.TEXT,
                        content: "DP000037",
                    },
                    field2: {
                        type: EmbeddedComType.LONGTEXT,
                        content: "工商信息数据服务",
                    },
                    field3: {
                        type: EmbeddedComType.TEXT,
                        content: "深圳市互联网....",
                    },
                    field4: {
                        type: EmbeddedComType.TEXT,
                        content: "河南九天遥感科技",
                    },
                    field5: {
                        type: EmbeddedComType.TEXT,
                        content: "安全预警",
                    },
                    field6: {
                        type: EmbeddedComType.NUMBER,
                        content: "157.76",
                    },
                };
            });
        },
    },
    dynamicCss: {
        type: Object,
        default: () => {
            return {
                // 容器宽度
                "box-width": "800", // 或者auto
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
    // 真实数据的条数
    realListCount: number;
    // 触发消费开关
    takeFlag: Boolean;
    // 定时器实例--自动轮播时长
    rotationTime: number;
    // 自动轮播时长
    rotationTimer: number | boolean | null;
    // 第一次调用问题
    getInventedListDataBridgeInit: Boolean;
};

export type rollListProps = ExtractPropTypes<typeof rollListProps>;
