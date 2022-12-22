import { parallel } from "gulp";
import { build, splitVendorChunkPlugin } from "vite";
import { withTaskName } from "../utils/gulp";
import { createFolder } from "../utils/process";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { buildModuleRoot, compRoot } from "../utils/path";
import path from "path";
import fs from "fs";

export const readdir = () => async () => {
  await createFolder(buildModuleRoot);
  const dirList = fs.readdirSync(compRoot);

  dirList.forEach(async(name) => {
    if (!path.extname(name)) {
      const entry = path.join(compRoot, path.basename(name), "index.ts");
      console.log(entry);
      await moduleBuild(entry,name)
    }
  });
};

const moduleBuild = async(entry,comName) => {
  await build({
    root: buildModuleRoot,
    build: {
      target: "modules",
      outDir: comName,
      minify: true,
      cssCodeSplit: true,
      rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖
        external: ["vue"],
        resolve: {
          dedupe: ["vue"], // 解决 具有插槽的远程组件中读取 null 的属性“isCE”
        },
        output: {
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            vue: "Vue",
          },
        },
      },
      lib: {
        entry: entry,
        name: "dw.ui" + comName,
        formats: ["es", "cjs", "umd", "iife"],
        fileName: (format) => {
          return `${comName}.${format}.js`;
        },
      },
    },
    plugins: [vue(), vueJsx(), splitVendorChunkPlugin()],
  });
};

// export const moduleBuildCss = () => async() => {
//     await createFolder(buildFullCssRoot);
// };

export const buildModuleBundle = parallel(
  withTaskName("aaa", readdir())
  //   withTaskName("buildModuleMinified", moduleBuild()),
  //   withTaskName("buildModuleCss", moduleBuildCss())
);
