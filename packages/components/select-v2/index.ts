import { withInstall, SFCWidthInstall } from "@dw/utils/widthInstall";
import selectV2 from "./src/select";
import selectOption from "./src/option-item";

const SelectV2: SFCWidthInstall<"select-v2"> = withInstall(
  selectV2,
  "select-v2"
);
const SelectV2Option: SFCWidthInstall<"select-v2-option"> = withInstall(
  selectOption,
  "select-v2-option"
);
export { SelectV2, SelectV2Option }; // 按需导入
export default SelectV2;
