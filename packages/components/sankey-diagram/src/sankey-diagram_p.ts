// 类型文件
import type { ExtractPropTypes } from "vue";

export const sankeyDiagramProps = {
    // 超出高度限制自动滚动
    heightScroll: {
        type: Boolean,
        default: false, // 设置为限制高度超出滚动就要设置下height，设置为false的时候height将失效默认为auto
    },
    height: {
        type: String,
        default: "500",
    },
    width: {
        type: String,
        default: "600",
    },
    backgroundImg: {
        type: Object,
        default: () => {
            return {
                leftBackgroundImg:
                    "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/demo%20icon/Group%201321316955.png",
                leftBackgroundImgActive:
                    "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/demo%20icon/Group%201321316954.png",
                rightBackgroundImg:
                    "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/demo%20icon/Group%201321316957.png",
                rightBackgroundImgActive:
                    "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/demo%20icon/Group%201321316958.png",
            };
        },
    },
    dynamicCss: {
        type: Object,
        default: () => {
            return {
                // 每项之间的间隔（设置的上外边距，第一个不生效）
                "item-mar-t": "10",
                "item-pad-tb": "2",
                // "item-pad-lr": "20",
                // 每项激活的字体颜色
                "item-color_act": "#260bd984",

                // 左边文字正常状态
                "left-color": "#166947e4",
                "left-fo-wei": "600",
                "left-fo-size": "20",
                "left-fo-fam": "monospace",
                "left-pad-r": "30",
                "left-pad-l": "10",

                // 右边文字正常状态
                "right-color": "#166947e4",
                "right-fo-weight": "600",
                "right-fo-size": "16",
                "right-fo-family": "monospace",
                "right-pad-r": "2",
                "right-pad-l": "44",

                // 左边文字悬浮颜色
                "left-color_hov": "#65de06ff",
                // 右边文字悬浮颜色
                "right-color_hov": "#fff",

                // 线激活颜色
                "line-color": "#b9dffce4",
                "line-color_act": "#fc0",
                "line-color_hov": "#55b2f8e4",
                "line-wid": "2",
                "line-wid_hov": "4",
                "line-wid_act": "4",

                // 激活状态下的动画时长
                "ani-time": "2",
            };
        },
    },
    // 数据列表
    modelValue: {
        type: Array as PropType<listItem<link>[]>,
        default: [
            {
                name: "刘一",
                id: Math.random() * 10000000,
                type: "left",
                link: [1, 5, 7],
            },
            {
                name: "陈二",
                id: Math.random() * 10000000,
                type: "left",
                link: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
            },
            {
                name: "张三",
                id: Math.random() * 10000000,
                type: "left",
                link: [8, 6],
            },
            {
                name: "李四",
                id: Math.random() * 10000000,
                type: "left",
                link: [2, 3, 4],
            },
            {
                name: "王五",
                id: Math.random() * 10000000,
                type: "left",
                link: [9],
            },
            {
                name: "赵六",
                id: Math.random() * 10000000,
                type: "left",
                link: [10, 11],
            },
            {
                name: "孙七",
                id: Math.random() * 10000000,
                type: "left",
                link: [13],
            },
            {
                name: "周八",
                id: Math.random() * 10000000,
                type: "left",
                link: [1, 13],
            },
            {
                name: "吴九",
                id: Math.random() * 10000000,
                type: "left",
                link: [5],
            },
            {
                name: "郑十",
                id: Math.random() * 10000000,
                type: "left",
                link: [2],
            },
            { name: "可弹性拓展网盘", type: "right", id: 1 },
            { name: "智慧工单管理系统", type: "right", id: 2 },
            { name: "大数据中台", type: "right", id: 3 },
            { name: "ERP管理", type: "right", id: 4 },
            { name: "gis可视化系统", type: "right", id: 5 },
            { name: "矿业管理系统", type: "right", id: 6 },
            { name: "帝网集成中心", type: "right", id: 7 },
            { name: "人事档案管理中心", type: "right", id: 8 },
            { name: "营销系统3.0", type: "right", id: 9 },
            { name: "东湖小镇数字孪生", type: "right", id: 10 },
            { name: "大模型调用中心", type: "right", id: 11 },
            { name: "业务中心中台", type: "right", id: 12 },
            { name: "政务系统", type: "right", id: 13 },
        ],
    },
};

export type data = {};

enum dataType {
    "left" = "left",
    "right" = "right",
}

type link = {
    link: number[];
};

type listItem<T extends link> = {
    id: string | number;
    name: string;
    type: dataType;
    link?: T;
};

export type sankeyDiagramProps = ExtractPropTypes<typeof sankeyDiagramProps>;
