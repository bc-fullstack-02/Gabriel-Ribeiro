import { useState } from 'react'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Home from './pages/Home'


const router = createBrowserRouter([
  {
  path : "/",
  element: <Login/>,
  },

  {
    path : "/signup",
    element: <SignUp/>,
  },
  {
    path : "/xpto",
    element: <SignUp/>,
  },
  {
    path : "/home",
    element: <Home/>,
  }
])

function App() {

  return (
   <RouterProvider router = {router}/>
  )
}

export default App
