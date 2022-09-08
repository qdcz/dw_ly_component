import esbuild from 'esbuild';
import defineConfig from 'vite';
import vueSFC from '@vitejs/plugin-vue';
var val = defineConfig({
    plugins: [vueSFC()]
});
// console.log(vueSFC)


// esbuild.build({
//     entryPoints: ['./src/vue/main.ts'],
//     target: "es2017", // 编译转化版本
//     // outfile: 'out.js',
//     outdir: "./dist", // 输出目录
//     bundle: true, // 捆绑文件意味着将任何导入的依赖项内联到文件本身中。
// }).then((result) => {
//     console.info('打包成功' + result);
// }).catch((err) => {
//     console.error(err);
//     process.exit(1);
// });



// const compiler = require('vue-template-compiler');

// let content = '';

// process.stdin.resume();

// process.stdin.on('data', buf => {
//     content += buf.toString();
// });

// process.stdin.on('end', () => {
//     const parsed = compiler.parseComponent(content);
//     const template = parsed.template ? parsed.template.content : '';
//     const script = parsed.script ? parsed.script.content : '';

//     const templateEscaped = template.trim().replace(/`/g, '\\`');
//     const scriptWithTemplate = script.match(/export default ?\{/)
//         ? script.replace(/export default ?\{/, `$&\n\ttemplate: \`\n${templateEscaped}\`,`)
//         : `${script}\n export default {\n\ttemplate: \`\n${templateEscaped}\`};`;

//     process.stdout.write(scriptWithTemplate);
// });



// 单独打包一个文件

// esbuild.build({
//     entryPoints: ['./src/package/aaaaaaaa/aaaa.tsx'],
//     target: "es2017", // 编译转化版本
//     // outfile: 'out.js',
//     outdir: "./dist", // 输出目录
//     bundle: true, // 捆绑文件意味着将任何导入的依赖项内联到文件本身中。
// }).then((result) => {
//     console.info('打包成功' + result);
// }).catch((err) => {
//     console.error(err);
//     process.exit(1);
// });