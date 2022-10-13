import { withInstall } from '@visix-ui/utils/widthInstall'
import TimePicker from './src/time-picker.jsx';
const VITimePicker = withInstall(TimePicker, 'time-picker');
export { VITimePicker } // 支持按需导入
export default VITimePicker
