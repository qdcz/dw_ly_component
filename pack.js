import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { build } from 'vite';
import process from "node:process";
import cprocess from "child_process";
import vueJSX from '@vitejs/plugin-vue-jsx';
import vue from "@vitejs/plugin-vue";


const config = {
    outDir: "packDist" // 外部打包的目录文件夹,
}

const paramsCheck = function (key, value) {
    const fnFieldMap = {
        "packType": function (value) {
            if (value != 'whole' && value != 'single') {
                process.stdout.out("packType内容错误");
                return false
            }
            return true
        }
    };

    try {
        return fnFieldMap[key](value)
    } catch (e) {
        console.log("参数错误", e);
        return false
    }
};

const mkdirFolderSync = (dirname, deep = true) => {
    if (deep) {
        let pathList = path.normalize(dirname).split("\\");
        pathList.reduce((T, C, I) => {
            if (I == 1) return T = T + "/" + C
            mkdirFolderSync(T, false)
            return T = T + "/" + C
        })
    }
    if (fs.existsSync(dirname,)) {
        return console.log("folder exists!", dirname,);
    } else {
        const result = fs.mkdirSync(dirname,);
        if (result) {
            // console.log('folder create success!');
        } else {
            // console.log('folder create error!', dirname);
        }
        return true;
    }
};


const comObj = process.argv.slice(2,).reduce((obj, command, index,) => {
    const commandCut = command.split("=",);
    const key = commandCut[0];
    const value = commandCut[1];
    obj[key] = value;
    return obj;
}, {},);

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const component = comObj['component'];
const $packType = comObj['packType'];



// 执行单元测试

// 规则校验-eslint校验
const rule_eslint_check = async function () {

};

// 规则校验-ts校验


/**
 * vue组件打包 
 * @param {*} packType  打包类型 single(单组件打包)、whole(全量打包)
 */
const viteBuild = async function (packType = 'whole') {

    if (!paramsCheck('packType', packType)) return

    const mode = {
        single: {
            entry: path.join(__dirname, `/packages/components/${component}/index.ts`),
            outDir: component + "/com",
            name: `vi.${component}`,
            fileName: (format) => `vi.${component}.${format}.js`
        },
        whole: {
            entry: path.join(__dirname, `/packages/components/index.ts`),
            outDir: "vi-ui/com",
            name: `vi.ui`,
            fileName: (format) => `vi.${format}.js`
        },
    }

    await build({
        root: path.resolve(__dirname, `./${config.outDir}`),
        build: {
            target: 'modules',
            outDir: mode[packType].outDir,
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
                entry: mode[packType].entry,
                name: mode[packType].name,
                formats: ['es', 'cjs', 'umd', 'iife'],
                fileName: (format) => {
                    return mode[packType].fileName(format)
                }
            }
        },
        plugins: [vue(), vueJSX()]
    })
};

// 组件打包
const task_build = async function () {
    console.log("scss file compiling ...",);
    await task_compileScss($packType);
    console.log("component file compiling ...",);
    await viteBuild($packType);
    console.log("component file compiles success",);
};

// 样式打包
const task_compileScss = async function (packType) {

    if (!paramsCheck('packType', packType)) return

    const outPrev = packType == 'single' ?
        path.resolve(__dirname, `./${config.outDir}/${component}/css/`)
        : path.resolve(__dirname, `./${config.outDir}/vi-ui/css/vi.css/`);

    const mode = {
        single: {
            enter: path.join(__dirname, `/packages/themes/src/${component}.scss`),
            out: path.resolve(outPrev, `${component}.css`)
        },
        whole: {
            enter: path.join(__dirname, `/packages/themes/src/index.scss`),
            out: path.resolve(outPrev, `vi.css`)
        },
    }

    mkdirFolderSync(outPrev)
    cprocess.exec(`sass ${mode[packType].enter} ${mode[packType].out}`, {
        timeout: 0
    }, function (error, stdout, stderr,) {
        if (error) {
            return console.log("error:" + error,);
        }
        process.stdout.write(`sass file compiles success ${stdout}\n`,);
    },);
};

task_build();