import { withInstall } from '../../utils/widthInstall';
import Button from './src/button.vue';
import "../../package/themes/dist/index.css"
const VIButton = withInstall(Button);
export { VIButton }; // 支持按需导入
export default VIButton;
