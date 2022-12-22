import { createApp } from 'vue';
// import App from './app.vue';
import App from './select.vue'

// import { SelectV2, SelectV2Option } from '@dw/components/select-v2';
import '@dw/themes/src/index.scss';

import {VISelectV2,VISelectV2Option} from '../dist/buildFull/component/dw.ui.es';
// import {VISelectV2,VISelectV2Option} from '../document/docs/public/componentDist/all/index.full.mjs';

const app = createApp(App);


app.use(VISelectV2);
app.use(VISelectV2Option);


app.mount('#app');
