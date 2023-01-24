export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
    if(window.document.callbackParent)
      window.document.callbackParent()
    if (counter > 0) setTimeout(() => window.parent.document.dispatchEvent(new CustomEvent('counterChanged', { newCount: count })), 250)
  }

  element.addEventListener('click', () => setCounter(counter + 1))
  window.addEventListener('callbackEvent', (event) => {
    event.target()
  })
  setCounter(0)
}
