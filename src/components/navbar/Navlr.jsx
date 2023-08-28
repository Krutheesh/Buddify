import React from 'react'
import { Link } from 'react-router-dom'
function Navlr() {
  return (
    <li className='flex flex-col md:flex-row space-y-8 md:space-y-0'>
      <Link to='/login' className='px-1 transition duration-300 hover:-translate-y-1 hover:scale-110 mx-4   cursor-pointer'>Login</Link>
      <Link to ='/register' className='px-1 transition duration-300 hover:-translate-y-1 hover:scale-110 mx-4   cursor-pointer'>Register</Link>
    </li>
  )
}

export default Navlr
