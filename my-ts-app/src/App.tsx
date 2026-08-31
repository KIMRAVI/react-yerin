import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="app">
         <h1>My React App</h1>
         <p>환영합니다!</p>
       </div>
      </section>
      <section id="spacer"></section>
    </>
  )
}

export default App
