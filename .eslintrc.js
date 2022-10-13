module.exports = {
	//lintOnSave:false,//关闭ESLint的所有规则
	// 环境配置
	env: {
		browser: true, // 启用浏览器全局变量
		es2021: true, // 启用ES6的功能
		node: true, // Node.js全局变量和Node.js范围
		'vue/setup-compiler-macros': true, // vue3 script中写setup的语法
	},
	extends: [
		'eslint:recommended',
		// 基本的校验
		'plugin:vue/vue3-essential',
		'plugin:@typescript-eslint/recommended',
		'prettier',
	],
	// 支持解析vue文件
	parser: 'vue-eslint-parser',
	parserOptions: {
		// ES的版本 默认是latest 但是我们只需要到es6即可
		ecmaVersion: 'latest',
		// ESLint使用Espree解析器
		parser: '@typescript-eslint/parser',
		// 指定源代码存在的类型，script或者module，默认为script
		sourceType: 'module',
	},
	plugins: ['vue', '@typescript-eslint'],
	globals: {
		Markdown: true,
	},
	// 检查清单
	rules: {
		// 正式环境不允许出现 console
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-undef': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		// 正式环境不允许出现 debugger
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		// 禁用any
		'@typescript-eslint/no-explicit-any': 'off',
		// 不要使用空格和tab混合
		'no-mixed-spaces-and-tabs': 'off',
		// 禁止不必要的转义字符
		'no-useless-escape': 'off',

		//禁止在 case 或 default 子句中出现词法声明
		'no-case-declarations': 'off',
		'no-constant-condition': 'off',
		// 声明变量未使用
		'@typescript-eslint/no-unused-vars': 'warn',
		// commonjs(requires)方式导入依赖项
		'@typescript-eslint/no-var-requires': 'warn',
		// 支持ts语法
		'@typescript-eslint/ban-types': [
			'error',
			{
				types: {
					String: false,
					Boolean: false,
					Number: false,
					Symbol: false,
					'{}': false,
					Object: false,
					object: false,
					Function: false,
				},
				extendDefaults: true,
			},
		],
		//??
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
		// 下面是为了兼容vue3 关闭了一些校验规则
		'vue/no-v-model-argument': 'off',
		'vue/no-mutating-props': 'off',
		'vue/no-multiple-template-root': 'off',
		'vue/multi-word-component-names': 'off',
		'vue/prefer-import-from-vue': 'off',
	},
};
