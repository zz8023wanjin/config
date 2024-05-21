import type { FlatESLintConfigItem } from 'eslint-define-config'
import { pluginReact, pluginReactHooks, pluginTypeScript } from '../core/plugin'

export const react: FlatESLintConfigItem[] = [
  {
    files: ['**/*.?([cm])jsx', '**/*.?([cm])tsx'],
    languageOptions: {
      parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: [pluginReact, pluginReactHooks, pluginTypeScript],
    rules: {
      'react-hooks/exhaustive-deps': 'off',
      'react/display-name': 'off',
      'react/jsx-child-element-spacing': 'off',
      'react/jsx-closing-tag-location': 'off',
      'react/no-danger': 'off',
      'react/no-unescaped-entities': 'off',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },
]
