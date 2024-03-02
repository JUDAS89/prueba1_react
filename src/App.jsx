import { useState } from 'react'
import './App.css'
import MiApi from './components/miapi'


function App() {
  //const [count, setCount] = useState([])

  return (
    <>
      <div className='app'>
        <h1>INDICADORES ECONÓMICOS 🇨🇱</h1>
        <MiApi />
      </div>
      <footer>Principales indicadores economicos de Chile</footer>
    </>
  )
}

export default App
