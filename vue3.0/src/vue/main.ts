import { createApp } from 'vue';
import App from "./APP.vue"
import firstComponet from '../../dist/select/VISIX.select.es.js';
import '../../dist/select/style.css';
// import '../dist/themes/index.css';
const app = createApp(App);
app.component('MyComponent', firstComponet)
app.mount('#app');
