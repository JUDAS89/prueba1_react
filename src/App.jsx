import { useState, useEffect } from 'react'
import './App.css'
import MiApi from './components/miapi'
import Buscador from './components/buscador'

function App() {
  const [count, setCount] = useState([])

  return (
    <>
      <div>
        <MiApi />
        <Buscador />
      </div>
    </>
  )
}

export default App
