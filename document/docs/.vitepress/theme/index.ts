import DefaultTheme from "vitepress/theme";
import "../../../../dist/buildFull/css/dw.ui.css";

import {
    Radio,
    RadioButton,
    RadioGroup,
    Pagination,
    SelectV2,
    SelectV2Option,
    TimePicker,
    ScrollBar,
    RollList,
    SankeyDiagram,
} from "../../../../dist/buildFull/component/dw.ui.es";

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
    scrollBar_setScrollTL,
    rollList_base,
    rollList_modelValue,
    sankeyDiagram_base,
    sankeyDiagram_overScroll,
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
        app.use(Radio);
        app.use(RadioButton);
        app.use(RadioGroup);
        app.use(Pagination);
        app.use(SelectV2);
        app.use(SelectV2Option);
        app.use(TimePicker);
        app.use(ScrollBar);
        app.use(RollList);
        app.use(SankeyDiagram);
        

        // 全局注册-注册编写文档的组件
        app.component("radio-base", radio_base.default);
        app.component("radio-disabled", radio_disabled.default);
        app.component("radio-border", radio_border.default);
        app.component("radio-button", radio_button.default);

        app.component("select-v2-base", v2_base.default);
        app.component("select-v2-clearable", v2_clearable.default);
        app.component("select-v2-multiple", v2_multiple.default);
        app.component(
            "select-v2-multiple-tooltip",
            v2_multiple_tooltip.default
        );
        app.component("select-v2-dropdownSelect", v2_dropdownSelect.default);
        app.component("select-v2-layout", v2_layout.default);

        app.component("time-picker-base", timePicker_base.default);
        app.component("time-picker-clearable", timePicker_clearable.default);
        app.component(
            "time-picker-disabledTime",
            timePicker_disabledTime.default
        );
        app.component(
            "time-picker-initSelectTime",
            timePicker_initSelectTime.default
        );

        app.component("pagination-base", pagination_base.default);
        app.component("pagination-background", pagination_background.default);
        app.component("pagination-pagerCount", pagination_pagerCount.default);

        app.component("scrollBar-base", scrollBar_base.default);
        app.component("scrollBar-horizontal", scrollBar_horizontal.default);
        app.component("scrollBar-thumbHW", scrollBar_thumbHW.default);
        app.component("scrollBar-setScrollTL", scrollBar_setScrollTL.default);

        app.component("roll-list-base", rollList_base.default);
        app.component("roll-list-model-value", rollList_modelValue.default);


        app.component("sankey-diagram-base", sankeyDiagram_base.default);
        app.component("sankey-diagram-over-scroll", sankeyDiagram_overScroll.default);
        
        
    },
    setup() {
        // this function will be executed inside VitePressApp's
        // setup hook. all composition APIs are available here.
    },
};
