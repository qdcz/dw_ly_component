// 打包样式
import gulp from 'gulp';
import path from 'path';
import gulpSass from 'gulp-sass'; // gulp sass插件
import dartSass from 'sass';
import autoprefixer from 'gulp-autoprefixer';
import cleanCss from 'gulp-clean-css'; // 压缩CSS

const { series, src, dest } = gulp;

// import pxtoviewport from 'postcss-px-to-viewport';
const compile = function () {
	const sass = gulpSass(dartSass);
	return src(path.resolve(__dirname, './src/*.scss'))
		.pipe(sass.sync())
		.pipe(autoprefixer())
		.pipe(
			cleanCss({}, (details) => {
				// consola.success(
				// 	`${chalk.cyan(details.name)}: ${chalk.yellow(details.stats.originalSize / 1000)} KB -> ${chalk.green(
				// 		details.stats.minifiedSize / 1000
				// 	)} KB`
				// );
			})
		)
		.pipe(dest('./dist'));
};
const copyfont = function () {
	return src(path.resolve(__dirname, './src/fonts/**')).pipe(dest('./dist/fonts'));
};

//, copyfont
export default series(compile, copyfont);
