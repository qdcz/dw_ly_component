// 类型文件
import type { ExtractPropTypes } from "vue";

export const scrollBarProps = {
  // 超过最大高度启动滚动条
  height: {
    type: [String, Boolean], // Boolean 为false 时 关闭宽度滚动条限制
    default: "300px",
  },
  // 超过最大宽度启动滚动条
  width: {
    type: [String, Boolean], // Boolean 为false 时 关闭宽度滚动条限制
    default: "auto",
  },
  // 拇指宽度
  thumbWidth: {
    type: String,
    default: "6px",
  },
  noResize: Boolean, // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
  dynamicCss: {
    type: Object,
    default: () => {
      return {
        /**
         * 拇指样式
         */
        "thumb-bg-color": "#d9dfe3",
      };
    },
  },
};

export type data = {
  // wrapperInner真实高度
  wrapperInnerRealHeight: number;
  // wrapperInner真实宽度
  wrapperInnerRealWidth: number;
  // wrapperInner 最大可移动范围高度
  wrapperInnerMaxiMoveRangeY: number;
  // wrapperInner 最大可移动范围宽度
  wrapperInnerMaxiMoveRangeX: number;
  // wrapperInner Y轴方向上的移动占比
  wrapperInnerMaxiMoveProportionY: number;
  // wrapperInner YX轴方向上的移动占比
  wrapperInnerMaxiMoveProportionX: number;
  // 拇指的高度显示占比（竖向滚动条所用，宽度为用户自己设置）
  thumbHeightProportion: number;
  // 拇指的宽度显示占比（横向滚动条所用，高度为用户自己设置）
  thumbWidthProportion: number;
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
  // 拇指X轴方向上的最大可移动范围值
  thumbRatioXMaxRange: number;
  // 拇指Y轴方向上的移动占比
  thumbRatioYProportion: number;
  // 拇指X轴方向上的移动占比
  thumbRatioXProportion: number;

  // 缓存初始的 wrapper宽度
  cacheContainerWidth: string | boolean | any;
};

export type scrollBarProps = ExtractPropTypes<typeof scrollBarProps>;
