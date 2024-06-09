import type { Popover } from './Popover'
import type { SneakHook } from './Config'

export type SneakStep = {
  element?: string | Element
  onHighlightStarted?: SneakHook
  onHighlighted?: SneakHook
  onDeselected?: SneakHook
  popover?: Popover
}