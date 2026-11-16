module.exports = {
	root: true,

	env: {
		browser: true,
		es2021: true,
		node: true
	},

	parser: '@typescript-eslint/parser',

	plugins: ['@typescript-eslint', 'prettier'],

	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended'
	],

	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},

	rules: {
		'no-console': 'warn',

		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': 'warn',

		'@typescript-eslint/no-explicit-any': 'warn',

		'prettier/prettier': 'error'
	}
};
