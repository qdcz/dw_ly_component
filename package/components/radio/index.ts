import { withInstall } from '@visix-ui/utils/widthInstall'
import Radio from './src/radio.vue';
import RadioButton from './src/radio-button.vue';
import RadioGroup from './src/radio-group.vue'

const VIRadio = withInstall(Radio, 'radio');
const VIRadioButton = withInstall(RadioButton, 'radio-button');
const VIRadioGroup = withInstall(RadioGroup, 'radio-group');
export { VIRadio, VIRadioGroup, VIRadioButton } // 支持按需导入
export default VIRadio
