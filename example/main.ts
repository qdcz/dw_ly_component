import { createApp } from "vue";
import App from "./app.vue";
// import App from './select.vue'

// import { SelectV2, SelectV2Option } from '@dw/components/select-v2';
import "@dw-ui/themes/src/index.scss";
// import * as dwUi from '../dist/buildFull/component/dw.ui.es';
// import {VISelectV2,VISelectV2Option} from '../document/docs/public/componentDist/all/index.full.mjs';
const app = createApp(App);

// app.use(VISelectV2);
// app.use(VISelectV2Option);

/**
 * 整体发布的包
 */
import {RollList} from '../dist/buildFull/component/dw.ui.es.js';


/**
 * 测试packages内的组件包
 */
import { ScrollBar } from "@dw-ui/components/scroll-bar";
import { TimePicker } from "@dw-ui/components/time-picker";
// import { RollList } from '@dw-ui/components/roll-list';
import { ScrollBlock } from '@dw-ui/components/scroll-block';
import { SankeyDiagram } from '@dw-ui/components/sankey-diagram';
app.use(ScrollBar);
app.use(TimePicker);
app.use(RollList);
app.use(SankeyDiagram);
app.use(ScrollBlock);
// app.use(dwUi.RollList)
// console.log(dwUi)



// console.log(5656,SankeyDiagram);


app.mount("#app");
