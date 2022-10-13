import CardButton from './src/card-button.vue';
import { withInstall } from '@visix-ui/utils/widthInstall';
// import type { App, Plugin } from 'vue'; // 只导入类型，而不是导入值
/** 
 * 这种写法不适合plugin2的组件的要求
Button.install = function (app: App) {
	app.component(Button.name, Button);
};
export default Button;
*/

const VICardButton = withInstall(CardButton, 'card-button');

export { VICardButton }; // 支持按需导入

export default VICardButton;
