import type { State } from './types'

let currentState: State = {}

export function setState<K extends keyof State> (key: K, value: State[K]) {
  currentState[key] = value
}

export function getState<K extends keyof State> (key?: K) {
  if (key) currentState[key] 
  
  return currentState
}

export function resetState() {
  currentState = {}
}