import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: { js, prettier: pluginPrettier }, // prettier 플러그인 추가
    extends: ['js/recommended'], // prettier recommended 제거하고 기본 JS 권장 설정만
    rules: {
      'prettier/prettier': 'error', 
    },
    settings: {
      react: {
        version: 'detect', // 자동으로 설치된 React 버전을 찾아서 사용
      },
    },
  },
  pluginReact.configs.flat.recommended,
]);
