import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJSX from '@vitejs/plugin-vue-jsx';
import dts from 'vite-plugin-dts'

export default defineConfig(
  {
    build: {
      target: 'modules',
      //打包文件目录
      outDir: "dist/select",
      //压缩
      minify: false,
      //css分离
      //cssCodeSplit: true,
      // rollupOptions: {
      //   //忽略打包vue和.less文件
      //   external: [/\.less/],
      //   // input: ['./src/package/aaaaaaaa/aaa.vue'],
      //   output: [
      //     {
      //       format: 'es',
      //       //不用打包成.es.js,这里我们想把它打包成.js
      //       entryFileNames: '[name].js',
      //       //让打包目录和我们目录对应
      //       preserveModules: true,
      //       //配置打包根目录
      //       dir: 'es',
      //       preserveModulesRoot: 'src'
      //     },
      //     {
      //       format: 'cjs',
      //       //不用打包成.mjs
      //       entryFileNames: '[name].js',
      //       //让打包目录和我们目录对应
      //       preserveModules: true,
      //       //配置打包根目录
      //       dir: 'lib',
      //       preserveModulesRoot: 'src'
      //     }
      //   ]
      // },
      rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖
        external: ['vue'],
        resolve: {
          dedupe: ['vue'] // 解决 具有插槽的远程组件中读取 null 的属性“isCE”
        },
        output: {
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            vue: 'Vue'
          }
        }
      },
      lib: {
        entry: './src/package/select/index.ts',
        name: 'VISIX',
        formats: ['es', 'cjs','umd','iife'],
        fileName: (format) => {
          return `VISIX.select.${format}.js`
        }
      }
    },
    plugins: [vue(),vueJSX()]
  }
)
