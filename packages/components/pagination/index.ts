import { withInstall } from '@dw-ui/utils/widthInstall'
import pagination from './src/pagination.jsx';

const Pagination:any = withInstall(pagination, 'pagination');
export { Pagination } // 支持按需导入
export default Pagination
