import { withInstall } from '@dw-ui/utils/widthInstall'
import SelectV2 from './src/select.jsx';
import selectOptipn from './src/option-item.jsx';

const VISelectV2 = withInstall(SelectV2, 'select-v2');
const VISelectV2Option = withInstall(selectOptipn, 'select-v2-option');
export { VISelectV2,VISelectV2Option } // 支持按需导入
export default VISelectV2
