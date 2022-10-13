import Space from './src/space.vue';
import { withInstall } from '@visix-ui/utils/widthInstall';
// import type { App, Plugin } from 'vue'; // 只导入类型，而不是导入值
const VISpace = withInstall(Space);
export { VISpace };
export default VISpace;
