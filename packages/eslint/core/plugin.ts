import * as _pluginTypeScript from '@typescript-eslint/eslint-plugin'
// @ts-expect-error missing types
export const pluginTypeScript = _pluginTypeScript.defalut || _pluginTypeScript

// @ts-expect-error missing types
import * as _pluginReact from 'eslint-plugin-react'
export const pluginReact = _pluginReact.defalut || _pluginReact

// @ts-expect-error missing types
import * as _pluginReactHooks from 'eslint-plugin-react-hooks'
export const pluginReactHooks = _pluginReactHooks.defalut || _pluginReactHooks

// @ts-expect-error missing types
export * as parserTypeScript from '@typescript-eslint/parser'