import { parallel, series } from "gulp";
import { withTaskName, deleteFolder, createFolder, fullBuild, buildFullBundle } from "./src";
import { buildOutput } from "./src/utils/path";


export default series(
  // withTaskName("clean dist folder", () => run('pnpm run clean')),
  // withTaskName("clean dist folder", () => run('rm -rf ./dist',buildOutput))
  // 清除dist文件夹
  withTaskName("clean dist folder", () => deleteFolder(buildOutput)),
  // 创建dist文件夹
  withTaskName("create dist folder", () => createFolder(buildOutput)),
  // 全量打包
  buildFullBundle
//   runTask('buildModules'),
  // 执行组件打包
//   withTaskName("")
);

export * from "./src";
