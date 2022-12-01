import { useState } from 'react'
import './index.css'
import Login from './pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Login/>
       
    </div>
  )
}

export default App
