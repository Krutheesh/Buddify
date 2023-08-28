import React from 'react'
import SignUp from './authentic/SignUp'

import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import About from './components/about/About'
import Login from './authentic/Login'
import { Outlet } from 'react-router-dom'
import Hero from './components/Hero/Hero'
import Contact from './components/contact/Contact'
function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Contact/>
      <Footer/>
      
    </div>
  )
}

export default App
