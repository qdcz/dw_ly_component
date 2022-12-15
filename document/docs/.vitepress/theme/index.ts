import DefaultTheme from "vitepress/theme";
import "../../../../dist/component/all/index.css";
import {
  v2_base,
  v2_clearable,
  v2_multiple,
  v2_multiple_tooltip,
} from "../../component/index";
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("select-v2-base", v2_base.default);
    app.component("select-v2-clearable", v2_clearable.default);
    app.component("select-v2-multiple", v2_multiple.default);
    app.component("select-v2-multiple-tooltip", v2_multiple_tooltip.default);
  },
};