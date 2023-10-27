import type { FlatESLintConfigItem } from 'eslint-define-config'
import { parserTypeScript, pluginTypeScript } from '../plugin'

export const typescript: FlatESLintConfigItem[] = [
  {
    files: ['**/*.?([cm])ts', '**/*.?([cm])tsx'],
    languageOptions: {
      parser: parserTypeScript,
      parserOptions: {
        sourceType: 'module',
      },
    },
    plugins: { '@typescript-eslint': pluginTypeScript },
    rules: {
      ...pluginTypeScript.configs['eslint-recommended'].overrides![0].rules,
      ...pluginTypeScript.configs.strict.rules,

      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
]
