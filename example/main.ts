import { createApp } from 'vue';
// ts环境依赖是typings/vue-shim.d.ts垫片功能，用于识别.vue文件
import App from './app.vue';

import { VISelectV2, VISelectV2Option } from '@dw/components/select-v2';
import '@dw/themes/src/index.scss';

const app = createApp(App);


app.use(VISelectV2);
app.use(VISelectV2Option);


app.mount('#app');
