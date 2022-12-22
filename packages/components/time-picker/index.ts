import { withInstall } from '@dw-ui/utils/widthInstall'
import TimePicker from './src/time-picker';
const VITimePicker = withInstall(TimePicker, 'time-picker');
export { VITimePicker } // 支持按需导入
export default VITimePicker
