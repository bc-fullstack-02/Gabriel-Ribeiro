import { useState } from 'react'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import ProfilePage from './pages/ProfilePage'
import Friends from './pages/Friends'


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
    path : "/home",
    element: <Home/>,
  },
  {
    path : "/profile",
    element: <ProfilePage/>,
  },
  {
    path : "/friends",
    element: <Friends/>,
  },
  {
    path : "/postDetail",
    element: <Friends/>,
  }
])

function App() {

  return (
   <RouterProvider router = {router}/>
  )
}

export default App
