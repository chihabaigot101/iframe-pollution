import {useState, useRef, useEffect} from 'react'
import './App.css'

function App() {
    window.addEventListener('message', event => {
        console.log(event)
        // todo: check origin
    });

    return (
        <div className="App">
            <h1>Parent 👴</h1>

            <iframe src='http://localhost:3000/' name='i' id='sso-hack' sandbox="allow-scripts allow-same-origin"
                    referrerPolicy='unsafe-url'/>
        </div>
    )
}

export default App
