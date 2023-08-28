import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './authentic/Login.jsx'
import Register from './authentic/SignUp.jsx'
import About from './components/about/About.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/register',
    element:<Register/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={appRouter}/>
  </React.StrictMode>,
)
