import type { SneakStep } from '../types'
import type { AllowedButtons } from '../Popover'
import type { State } from '../State'

export type Config = {
  steps?: SneakStep[],
  showProgress?: boolean
  showButtons?: AllowedButtons[]
}

export type SneakHook = (
  element: Element,
  step: SneakStep,
  options: {
    config: Config,
    state: State
  }
) => void