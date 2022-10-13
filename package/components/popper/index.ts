import { withInstall } from '@visix-ui/utils/widthInstall'
import Popper from './src/popper.jsx';

const VIPopper = withInstall(Popper, 'popper');
export { VIPopper } // 支持按需导入
export default VIPopper
