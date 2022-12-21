import path from 'path';
import { parallel } from 'gulp';
import { build } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';



// import { nodeResolve } from '@rollup/plugin-node-resolve'
// import { rollup } from 'rollup'
// import commonjs from '@rollup/plugin-commonjs'
// // import DefineOptions from 'unplugin-vue-define-options/rollup'
// import esbuild, { minify as minifyPlugin } from 'rollup-plugin-esbuild'
// import glob from 'fast-glob'
// import { camelCase, upperFirst } from 'lodash'
// import {
//   PKG_BRAND_NAME,
//   PKG_CAMELCASE_LOCAL_NAME,
//   PKG_CAMELCASE_NAME,
// } from '@element-plus/build-constants'
// import { epOutput, epRoot, localeRoot } from '@element-plus/build-utils'
// import { version } from '../../../../packages/element-plus/version'
import {
  // formatBundleFilename,
  // generateExternal,
  withTaskName,
  // writeBundles,
} from '../utils'
// import { target } from '../build-info'
// import type { Plugin } from 'rollup'

// const banner = `/*! ${PKG_BRAND_NAME} v${version} */\n`

// async function buildFullEntry(minify: boolean) {
//   const plugins: Plugin[] = [
//     // DefineOptions(),
//     vue({
//       isProduction: true,
//     }),
//     vueJsx(),
//     nodeResolve({
//       extensions: ['.mjs', '.js', '.json', '.ts'],
//     }),
//     commonjs(),
//     esbuild({
//       exclude: [],
//       sourceMap: minify,
//       target,
//       loaders: {
//         '.vue': 'ts',
//       },
//       define: {
//         'process.env.NODE_ENV': JSON.stringify('production'),
//       },
//       treeShaking: true,
//       legalComments: 'eof',
//     }),
//   ]
//   if (minify) {
//     plugins.push(
//       minifyPlugin({
//         target,
//         sourceMap: true,
//       })
//     )
//   }

//   const bundle = await rollup({
//     input: path.resolve(epRoot, 'index.ts'),
//     plugins,
//     external: await generateExternal({ full: true }),
//     treeshake: true,
//   })
//   await writeBundles(bundle, [
//     {
//       format: 'umd',
//       file: path.resolve(
//         epOutput,
//         'dist',
//         formatBundleFilename('index.full', minify, 'js')
//       ),
//       exports: 'named',
//       name: PKG_CAMELCASE_NAME,
//       globals: {
//         vue: 'Vue',
//       },
//       sourcemap: minify,
//       banner,
//     },
//     {
//       format: 'esm',
//       file: path.resolve(
//         epOutput,
//         'dist',
//         formatBundleFilename('index.full', minify, 'mjs')
//       ),
//       sourcemap: minify,
//       banner,
//     },
//   ])
// }

// async function buildFullLocale(minify: boolean) {
//   const files = await glob(`${path.resolve(localeRoot, 'lang')}/*.ts`, {
//     absolute: true,
//   })
//   return Promise.all(
//     files.map(async (file) => {
//       const filename = path.basename(file, '.ts')
//       const name = upperFirst(camelCase(filename))

//       const bundle = await rollup({
//         input: file,
//         plugins: [
//           esbuild({
//             minify,
//             sourceMap: minify,
//             target,
//           }),
//         ],
//       })
//       await writeBundles(bundle, [
//         {
//           format: 'umd',
//           file: path.resolve(
//             epOutput,
//             'dist/locale',
//             formatBundleFilename(filename, minify, 'js')
//           ),
//           exports: 'default',
//           name: `${PKG_CAMELCASE_LOCAL_NAME}${name}`,
//           sourcemap: minify,
//           banner,
//         },
//         {
//           format: 'esm',
//           file: path.resolve(
//             epOutput,
//             'dist/locale',
//             formatBundleFilename(filename, minify, 'mjs')
//           ),
//           sourcemap: minify,
//           banner,
//         },
//       ])
//     })
//   )
// }

export const buildFull = (minify: boolean) => async () => { }
// Promise.all([buildFullEntry(minify), buildFullLocale(minify)])


export const fullBuild = ()=> async ()=>{
  await build({
    root: path.resolve(__dirname, `./packDist`),
    build: {
        target: 'modules',
        outDir: 'test/comm',
        minify: true,
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
            entry:path.join(__dirname, `/packages/components/index.ts`),
            name: "dw.ui",
            formats: ['es', 'cjs', 'umd', 'iife'],
            fileName: (format) => {
                return  `vi.${"aaa"}.${format}.js`
            }
        }
    },
    plugins: [vue(), vueJsx()]
})
}

export const buildFullBundle = parallel(
  withTaskName("buildFullMinified",fullBuild() )
  // withTaskName('buildFullMinified', buildFull(true)),
  // withTaskName('buildFull', buildFull(false))
)
