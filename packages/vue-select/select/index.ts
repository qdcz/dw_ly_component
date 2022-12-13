import Select from './src/select.vue';
import { withInstall } from '@visix-ui/utils/widthInstall';
// import type { App, Plugin } from 'vue'; // 只导入类型，而不是导入值
const VISelect = withInstall(Select);
export { VISelect }; // 支持按需导入
export default VISelect;