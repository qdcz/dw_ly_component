import DefaultTheme from "vitepress/theme";
import "../../../../dist/buildFull/css/dw.ui.css";
import "../../public/componentDist/all/index.css";
// import "../../public/componentDist/all/css/dw.ui.css"

import {
  VIRadio,
  VIRadioButton,
  VIRadioGroup,
  VIpagination,
  VISelectV2,
  VISelectV2Option,
} from "../dist/componentDist/all/index.full.min.mjs";
// } from "../dist/componentDist/all/component/dw.ui.es";

import { TimePicker,ScrollBar } from "../../../../dist/buildFull/component/dw.ui.es";

import {
  v2_base,
  v2_clearable,
  v2_multiple,
  v2_multiple_tooltip,
  v2_dropdownSelect,
  v2_layout,
  timePicker_base,
  timePicker_clearable,
  timePicker_disabledTime,
  timePicker_initSelectTime,
  pagination_base,
  pagination_background,
  pagination_pagerCount,
  radio_base,
  radio_disabled,
  radio_border,
  radio_button,
  scrollBar_base,
  scrollBar_horizontal,
  scrollBar_thumbHW,
  scrollBar_setScrollTL
} from "../../component/index";

import { h } from "vue";
export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // 'home-features-after': () => h(HomeSponsors),
      // 'aside-ads-before': () => h(AsideSponsors)
      // 'custom': () => h(custom)
    });
  },
  enhanceApp({ app }) {
    // 全局注册-注册原组件
    app.use(VIRadio);
    app.use(VIRadioButton);
    app.use(VIRadioGroup);
    app.use(VIpagination);
    app.use(VISelectV2);
    app.use(VISelectV2Option);
    app.use(TimePicker);
    app.use(ScrollBar);

    // 全局注册-注册编写文档的组件
    app.component("radio-base", radio_base.default);
    app.component("radio-disabled", radio_disabled.default);
    app.component("radio-border", radio_border.default);
    app.component("radio-button", radio_button.default);

    app.component("select-v2-base", v2_base.default);
    app.component("select-v2-clearable", v2_clearable.default);
    app.component("select-v2-multiple", v2_multiple.default);
    app.component("select-v2-multiple-tooltip", v2_multiple_tooltip.default);
    app.component("select-v2-dropdownSelect", v2_dropdownSelect.default);
    app.component("select-v2-layout", v2_layout.default);

    app.component("time-picker-base", timePicker_base.default);
    app.component("time-picker-clearable", timePicker_clearable.default);
    app.component("time-picker-disabledTime", timePicker_disabledTime.default);
    app.component(
      "time-picker-initSelectTime",
      timePicker_initSelectTime.default
    );

    app.component("pagination-base", pagination_base.default);
    app.component("pagination-background", pagination_background.default);
    app.component("pagination-pagerCount", pagination_pagerCount.default);

    app.component('scrollBar-base',scrollBar_base.default)
    app.component('scrollBar-horizontal',scrollBar_horizontal.default)
    app.component('scrollBar-thumbHW',scrollBar_thumbHW.default)
    app.component('scrollBar-setScrollTL',scrollBar_setScrollTL.default)
    
  },
  setup() {
    // this function will be executed inside VitePressApp's
    // setup hook. all composition APIs are available here.
  },
};
