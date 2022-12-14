import { createApp } from 'vue';
// ts环境依赖是typings/vue-shim.d.ts垫片功能，用于识别.vue文件
import App from './app.vue';

import { SelectV2, SelectV2Option } from '@dw/components/select-v2';
import '@dw/themes/src/index.scss';

const app = createApp(App);


app.use(SelectV2);
app.use(SelectV2Option);


app.mount('#app');
