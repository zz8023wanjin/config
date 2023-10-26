import type { FlatESLintConfigItem } from 'eslint-define-config'
import { typescript, react } from './configs'

type frame = 'react' | 'typescript'

export const defineConfig = (
  rules: FlatESLintConfigItem[] | FlatESLintConfigItem | undefined,
  frames: frame[] = []
) => {
  let config: FlatESLintConfigItem[] = []

  if (frames.includes('react')) {
    config.push(...react)
  }

  if (frames.includes('typescript')) {
    config.push(...typescript)
  }

  if (rules) {
    config.push(...(Array.isArray(rules) ? rules : [rules]))
  }

  return config
}
