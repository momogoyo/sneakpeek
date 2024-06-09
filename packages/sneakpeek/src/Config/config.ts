import type { Config } from './types'

let currentConfig: Config

export function configure (config: Config) {
  currentConfig = {
    showProgress: false,
    showButtons: ['next', 'previous', 'close'],
    ...config
  }

  return currentConfig
}

export function getConfig<K extends keyof Config> (key?: K): Config | Config[K] {
  if (key) return currentConfig[key]

  return currentConfig
}