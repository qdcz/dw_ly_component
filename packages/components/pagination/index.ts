import { withInstall } from '@dw-ui/utils/widthInstall'
import pagination from './src/pagination.jsx';

const VIpagination = withInstall(pagination, 'pagination');
export { VIpagination } // 支持按需导入
export default VIpagination
