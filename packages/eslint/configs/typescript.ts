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
    },
  },
]
