import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const iRef = useRef(document.getElementById('i'))

  window.document.addEventListener('counterChanged', (e) => {
    console.log('counterChanged event received in react app')
    setCount(e.detail.newCount)
  }, false)
  
  const callbackFromParent = () => { console.log('Parent callback called') };
  useEffect(() => {
    if (iRef.current != null && iRef.current.contentWindow != null) {
      const signature = new CustomEvent('callbackEvent', { callback: () => { console.log('callbackEvent event sent to iframe') } });
      // let event = iRef.current.ownerDocument.createEvent(signature);
      // event.initEvent('callbackEvent', () => { console.log('counterChanged event sent to iframe') }, false);
      // iRef.current.contentWindow.dispatchEvent(signature);
      iRef.current.addEventListener('load', () => {
        console.log('iframe loaded')
        iRef.current.contentWindow.dispatchEvent(signature)
      })

    }
  }, [iRef])

  return (
    <div className="App">
      <h1>Parent 👴</h1>
      <div className="card">
        count is {count}
      </div>
      <iframe src='http://localhost:5173/' name='i' id='i' ref={iRef} allow="document-domain 'self' *" referrerPolicy='unsafe-url' />
    </div>
  )
}

export default App
