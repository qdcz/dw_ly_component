import { withInstall } from "@dw-ui/utils/widthInstall";
import radio from "./src/radio.vue";
import radioButton from "./src/radio-button.vue";
import radioGroup from "./src/radio-group.vue";

const Radio: any = withInstall(radio, "radio");
const RadioButton: any = withInstall(radioButton, "radio-button");
const RadioGroup: any = withInstall(radioGroup, "radio-group");
export { Radio, RadioButton, RadioGroup }; // 支持按需导入
export default Radio;
