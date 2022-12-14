import { defineConfig } from 'vite';
import { resolve } from 'path'; // 主要用于alias文件路径别名
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig({
	plugins: [vue(), vueJsx()],
	resolve: {
		alias: {
			'@': resolve(__dirname, '.', 'src'),
		},
	},
	publicDir: 'public',
	// 全局变量
	define: {
		'process.env': {
			BASE_API: 'http://[ip]:[port]/api/',
		},
	},
	// 反向代理
	server: {
		port: 3001,
		host: '0.0.0.0',
		// 是否自动在浏览器打开
		open: true,
		// 是否开启 https
		https: false,
		proxy: {
			'/api': {
				target: 'https://blog.csdn.net/weixin_45292658',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ''),
			},
		},
	},
});

