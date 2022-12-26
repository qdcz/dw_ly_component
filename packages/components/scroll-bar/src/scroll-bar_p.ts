// 类型文件
import type { ExtractPropTypes } from "vue";

export const scrollBarProps = {
  modelValue: {
    type: [String, Number, Boolean],
    default: "",
  },
  // 最大高度超过启动滚动条
  height: {
    type: String,
    default: "300px",
  },
  dynamicCss: {
    type: Object,
    default: () => {
      return {
        /**
         * input组件
         */
        "input-box-shadow-x": "0",
      };
    },
  },
};

export type data = {
  // wrapperInner真实高度(px)
  wrapperInnerRealHeight: string;
  // wrapperInner 最大可移动范围高度
  wrapperInnerMaxiMoveRangeY: number;
  // wrapperInner 最大可移动范围宽度
  wrapperInnerMaxiMoveRangeX: number;
   // wrapperInner Y轴方向上的移动占比
   wrapperInnerMaxiMoveProportionY: number;
   // wrapperInner YX轴方向上的移动占比
   wrapperInnerMaxiMoveProportionX: number;
  // 拇指的高度显示占比
  thumbHeightProportion: number;
  // 拇指显示的高度(px)
  thumbHeight: string;
  // 拇指显示的宽度(px)
  thumbWidth: string;
  // 拇指X轴的移动距离(px)
  thumbRatioX: string;
  // 拇指Y轴的移动距离(px)
  thumbRatioY: string;
  
  // 拇指Y轴方向上的最大可移动范围值
  thumbRatioYMaxRange: number;
  // 拇指Y轴方向上的移动占比
  thumbRatioYProportion: number;
};

export type scrollBarProps = ExtractPropTypes<typeof scrollBarProps>;
