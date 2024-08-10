import { useState } from 'react'
import {RouterProvider,createBrowserRouter} from "react-router-dom"
import './App.css'
import Signup from './components/signup.jsx'
import Login from './components/Login.jsx'



function App() {
  const route = createBrowserRouter([
    {
      path:'/',
      element: <Login/>

    },
    {
      path:'/signup',
      element:<Signup/>
    }
  ]);

  return (
    <>
      <RouterProvider router={route}></RouterProvider>
    </>
  )
}

export default App
