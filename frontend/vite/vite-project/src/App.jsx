import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Contador from './components/contador'

function App() {
  const [contador, setContador] = useState(0)

  return (
    <div >
     <Contador/>
      
    </div>
  )
}

export default App
