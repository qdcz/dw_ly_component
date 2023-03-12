import { withInstall } from '@dw-ui/utils/widthInstall'
import selectV2 from './src/select.jsx';
import selectOptipn from './src/option-item.jsx';

const SelectV2:any = withInstall(selectV2, 'select-v2');
const SelectV2Option:any = withInstall(selectOptipn, 'select-v2-option');
export { SelectV2,SelectV2Option } // 支持按需导入
export default SelectV2
