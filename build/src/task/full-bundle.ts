import path from "path";
import os from "os";
import { parallel } from "gulp";
import { build } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import cprocess from "child_process";
import * as esb from "esbuild";

import {
  buildFullRoot,
  buildFullCssRoot,
  compRoot,
  createFolder,
  themeRoot,
  withTaskName,
} from "../utils";

/**
 *
 * @param minify 是否压缩
 * @param outDir 输出子路径
 */
export const fullBuild =
  (minify: boolean = true, outDir: string = "component") =>
  async () => {
    await createFolder(buildFullRoot);
    await createFolder(buildFullCssRoot);
    await build({
      root: buildFullRoot,
      build: {
        target: "modules",
        outDir: outDir,
        minify: minify,
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
          entry: path.join(compRoot, `/index.ts`),
          name: "dw.ui",
          formats: ["es", "cjs", "umd", "iife"],
          fileName: (format) => {
            return `dw.ui.${format}.js`;
          },
        },
      },
      plugins: [vue(), vueJsx()],
    });
  };

export const fullBuildCss = () => async () => {
  let entryPath: string = `${path.join(themeRoot, "/src/index.scss")}`;
  let outPath: string = `${path.join(buildFullCssRoot, "/dw.ui.css")}`;

  await new Promise((resolve: Function) => {
    cprocess.exec(
      `sass "${entryPath}" "${outPath}"`,
      {
        timeout: 0,
      },
      function (error, stdout, stderr) {
        if (error) {
          console.log("error:" + error);
          resolve();
          return 
        }
        process.stdout.write(`sass file compiles success ${stdout}\n`);
        esb.build({
          entryPoints: [outPath],
          bundle: true,
          outfile: "./a.css",
        });
        resolve();
      }
    );
  });
  // await esb.build({
  //   entryPoints: [outPath],
  //   bundle: true,
  //   outfile: "./a.css",
  // });
};

export const buildFullBundle = parallel(
  withTaskName("buildFullMinified", fullBuild()),
  withTaskName("buildFullCss", fullBuildCss())
);
