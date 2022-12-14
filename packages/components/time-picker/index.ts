import { withInstall } from '@dw/utils/widthInstall'
import TimePicker from './src/time-picker';
const VITimePicker = withInstall(TimePicker, 'time-picker');
export { VITimePicker } // 支持按需导入
export default VITimePicker
