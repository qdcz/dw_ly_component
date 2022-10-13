// 打包样式
import { series, src, dest } from 'gulp';
import path from 'path';
import gulpSass from 'gulp-sass'; // gulp sass插件
import dartSass from 'sass';
import autoprefixer from 'gulp-autoprefixer';
import cleanCss from 'gulp-clean-css'; // 压缩CSS
import consola from 'consola';
import chalk from 'chalk';
// const postcss = require('gulp-postcss');
// const pxtoviewport = require('postcss-px-to-viewport');

// import pxtoviewport from 'postcss-px-to-viewport';

const compile = function () {
	const sass = gulpSass(dartSass);
	return src(path.resolve(__dirname, './src/*.scss'))
		.pipe(sass.sync())
		.pipe(autoprefixer())
		.pipe(
			cleanCss({}, (details) => {
				consola.success(
					`${chalk.cyan(details.name)}: ${chalk.yellow(details.stats.originalSize / 1000)} KB -> ${chalk.green(
						details.stats.minifiedSize / 1000
					)} KB`
				);
			})
		)
		.pipe(dest('./dist'));
};
const copyfont = function () {
	return src(path.resolve(__dirname, './src/fonts/**')).pipe(dest('./dist/fonts'));
};
const copyfullStyle = function () {
	return src(path.resolve(__dirname, './dist/**')).pipe(dest(path.resolve(__dirname, '../../dist/themes')));
};
//, copyfont, copyfullStyle
export default series(compile, copyfont, copyfullStyle);
