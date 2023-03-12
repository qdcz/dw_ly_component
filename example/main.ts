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

import { ScrollBar } from "@dw-ui/components/scroll-bar";
import { TimePicker } from "@dw-ui/components/time-picker";
import { RollList } from '@dw-ui/components/roll-list';

app.use(ScrollBar);
app.use(TimePicker);
app.use(RollList);
// app.use(dwUi.RollList)

// console.log(dwUi)

app.mount("#app");
