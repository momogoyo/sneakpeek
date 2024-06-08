export const sneakpeek = () => {
  function init() {
    console.log('hello sneakpeek')
  }

  return {
    init
  }
}

export type Sneakpeek = ReturnType<typeof sneakpeek>

export default sneakpeek