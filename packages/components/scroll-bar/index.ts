import { withInstall } from "@dw-ui/utils/widthInstall";
import scrollBar from "./src/scroll-bar";

const ScrollBar: any = withInstall(scrollBar, "scroll-bar");
export { ScrollBar }; // 支持按需导入
export default ScrollBar;
