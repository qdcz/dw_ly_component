import Drag from './src/drag.vue';
import { withInstall } from '@visix-ui/utils/widthInstall';
// import type { App, Plugin } from 'vue'; // 只导入类型，而不是导入值
const VIDrag = withInstall(Drag);
export { VIDrag };
export default VIDrag;
