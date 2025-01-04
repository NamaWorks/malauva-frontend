import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { ESLint } from 'eslint';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import typescriptEslintParser from '@typescript-eslint/parser';

export default new ESLint({
  baseConfig: {
    extends: [
      'eslint:recommended',
      // 'eslint:recommended-type-checked',
      'plugin:@typescript-eslint/strict',
      'plugin:@typescript-eslint/stylistic',
    ],
    root: true, 
    parser: typescriptEslintParser,
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    env: {
      browser: true,
      es2021: true,
    },
    globals: globals.browser,
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': typescriptEslintPlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
  ignorePatterns: ['dist'],
});
