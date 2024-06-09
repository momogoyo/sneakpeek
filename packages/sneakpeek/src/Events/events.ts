import { Events } from './constants'
import { getState } from '../State'

function refreshEvents () {

}

function onKeyup (event: KeyboardEvent) {
  if (!event) return
}

function onKeydown (event: KeyboardEvent) {
  if (!event) return

  const isInitialized = getState('isInitialized')
  if (!isInitialized) return
}

export function initEvents () {
  window.addEventListener(Events.KEYUP, onKeyup, false)
  window.addEventListener(Events.KEYDOWN, onKeydown, false)
  window.addEventListener(Events.RESIZE, refreshEvents)
  window.addEventListener(Events.SCROLL, refreshEvents)
}

export function destroyEvents () {
  window.removeEventListener(Events.KEYUP, onKeyup)
  window.removeEventListener(Events.KEYDOWN, onKeydown)
  window.removeEventListener(Events.RESIZE, refreshEvents)
  window.removeEventListener(Events.SCROLL, refreshEvents)
}