export type AllowedButtons = 'next' | 'previous' | 'close'

export type Popover = {}

export type PopoverDOM = {
  wrapper: HTMLElement
  arrow: HTMLElement
  title: HTMLElement
  description: HTMLElement
  footer: HTMLElement
  progress: HTMLElement
  previousButton: HTMLButtonElement
  nextButton: HTMLButtonElement
  closeButton: HTMLButtonElement
  footerButtons: HTMLElement
}