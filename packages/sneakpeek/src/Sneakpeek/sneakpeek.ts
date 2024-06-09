import { addClass, removeClass } from '@momogoyo/shared'
import { initEvents } from '../Events'

import { configure, getConfig } from '../Config'
import { getState, setState } from '../State'

import type { Config } from '../Config'

export function Sneakpeek (options: Config) {
  configure(options)

  function init () {
    if (getState('isInitialized')) return
    setState('isInitialized', true)

    addClass('driver-active', 'driver-fade', 'driver-simple')

    initEvents()
  }

  function destroyed() {
    removeClass('driver-active', 'driver-fade', 'driver-simple')
  }

  function taste (stepIndex: number = 0) {
    const steps = getConfig('steps')

    if (!steps) {
      console.error('맛볼 steps가 없습니다.')
      
      return
    }
  }

  return {
    setConfig: configure,
    getConfig,
    taste: (stepIndex: number = 0) => {
      init()
      taste(stepIndex)
    },
    destroyed
  }
}

export type Sneakpeek = ReturnType<typeof Sneakpeek>

export default Sneakpeek