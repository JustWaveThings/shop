export default {
	env: {
		browser: true,
		es2021: true
	},
	extends: ['plugin:react/recommended', 'prettier'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['react'],
	rules: {}
};
