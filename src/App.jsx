import { useState } from 'react'
import './App.css'
import MiApi from './components/miapi'
import Buscador from './components/buscador'

function App() {
  const [count, setCount] = useState([])

  return (
    <>
      <div className='app'>
        <h1>INDICADORES ECONÓMICOS</h1>
        <MiApi />
      </div>
      <footer>Principales indicadores economicos</footer>
    </>
  )
}

export default App
