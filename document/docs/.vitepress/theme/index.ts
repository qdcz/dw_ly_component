import DefaultTheme from "vitepress/theme";
import "../../public/componentDist/all/index.css";
import {
  VIRadio,
  VIRadioButton,
  VIRadioGroup,
} from "../dist/componentDist/all/index.full.min.mjs";
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
} from "../../component/index";
import { VIpagination, VISelectV2, VISelectV2Option, VITimePicker } from "../../public/componentDist/all/index.full.min.mjs";
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(VIRadio);
    app.use(VIRadioButton);
    app.use(VIRadioGroup);
    app.use(VIpagination);
    app.use(VISelectV2);
    app.use(VISelectV2Option);
    app.use(VITimePicker);



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
  },
};
