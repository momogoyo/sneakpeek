export function addClass (...className: string[]) {
  document.body.classList.add(...className)
}

export function removeClass (...className: string[]) {
  document.body.classList.remove(...className)
}