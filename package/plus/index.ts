import installer from './defaults'

export * from '@visix-ui/components' // 全局导出
export * from '@visix-ui/directives'
// export * from '@visix-ui/hooks';

export { makeInstaller } from './make-installer'
export default installer

// import type { App, Plugin } from 'vue'; // ts中的优化只获取类型
// import { VIButton, VICardButton, VICol, VILabel, VIRow } from '@visix-ui/components';
// //
// const components = [VIButton, VICardButton, VICol, VILabel, VIRow];
// const plugins: any[] = [
// 	// ClInfiniteScroll
// ];
// const install = (app: App) => {
// 	// 每个组件在编写的时候都提供了install方法
// 	// 有的是组件 有的可能是指令 xxx.install = ()=>{app.directive()}
// 	components.forEach((component) => {
// 		//app.component(component.name, component);
// 		app.component((component as any).name, component);
// 	});
// 	plugins.forEach((plugin) => {
// 		app.use(plugin as any);
// 	});
// };
// export default {
// 	install,
// };
// export * from '@visix-ui/components';
// export * from '@visix-ui/directives';
