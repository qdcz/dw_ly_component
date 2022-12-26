// 类型文件
import type { ExtractPropTypes } from "vue";
enum directionType {
  HORIZONTAL = "horizontal",
  VERTICAL = "vertical",
}

export const scrollBarThumbProps = {
  // 横向还是竖向
  type: {
    type: [String || directionType],
    default: "vertical",
  },
  height: {
    type: String,
    default: "100px",
  },
  width: {
    type: String,
    default: "6px",
  },
  ratioX: {
    type: String,
    default: "0px",
  },
  ratioY: {
    type: String,
    default: "0px",
  },
};

export type data = {
  mouseMoving: boolean;
};

export type scrollBarThumbProps = ExtractPropTypes<typeof scrollBarThumbProps>;