import DefaultTheme  from 'vitepress/theme';
import { VISelectV2,VISelectV2Option } from '../../../../dist/component/all/index.full.min.mjs';
import '../../../../dist/component/all/index.css';

import test from '../../component/select/select-v2.vue'
export default {
 ...DefaultTheme ,
 enhanceApp({ app }) {
   app.component('dw-select-v2', VISelectV2);
   app.component('dw-select-v2-option', VISelectV2Option);
   app.component('test', test);
 }
}