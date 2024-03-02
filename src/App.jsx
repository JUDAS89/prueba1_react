import { useState } from 'react'
import './App.css'
import MiApi from './components/miapi'
import Buscador from './components/buscador'

function App() {
  const [count, setCount] = useState([])

  return (
    <>
      <div className='app'>
        <MiApi />
      </div>
    </>
  )
}

export default App
