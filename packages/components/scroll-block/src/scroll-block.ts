// 类型文件
import type { ExtractPropTypes, PropType } from "vue";

//  ExtractPropTypes 来将 props 值定义转为类型定义
export const scrollBlockProps = {
    label: {
        type: [String, Number],
        default: "",
    },
    value: {
        type: [String, Number],
        default: "",
    },
    showCount: {
        type: Number,
        default: 4,
    },
    modelValue: {
        type: [Array<any>],
        default: [
            "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240207113212.png",
            "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240207173357.png",
            "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240218221447.jpg",
            "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240222153642.png",
            "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20240222153607.png",
            "https://cdnforspeed.oss-cn-beijing.aliyuncs.com/Img/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E5%9B%BE%E7%89%87/20220105175300.png",
        ],
    },
    dynamicCss: {
        type: Object,
        default: () => {
            return {
                /**
                 * 基础
                 */
                "bs-box-height": "100",
                "bs-box-width": "320",
                "bs-img-height": "100",
                "bs-img-width": "100",
                "bs-img-interval": "10",
            };
        },
    },
};

export type scrollBlockProps = ExtractPropTypes<typeof scrollBlockProps>;
