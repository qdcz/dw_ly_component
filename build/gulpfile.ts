import { parallel, series } from "gulp";
import {
  withTaskName,
  deleteFolder,
  createFolder,
  buildFullBundle,
  buildModuleBundle
} from "./src";
import { buildOutput } from "./src/utils/path";

export default series(
  // withTaskName("clean dist folder", () => run('pnpm run clean')),
  // withTaskName("clean dist folder", () => run('rm -rf ./dist',buildOutput))
  // 清除dist文件夹
  withTaskName("clean dist folder", () => deleteFolder(buildOutput)),
  // 创建dist文件夹
  withTaskName("create dist folder", () => createFolder(buildOutput)),
  parallel(
    // 全量打包
    // buildFullBundle,
    // 按模块打包(单个组件使用)
    buildModuleBundle,
    // ts语法类型检查 并产生TS的类型声明文件(.d.ts)
  )
);

export * from "./src";
