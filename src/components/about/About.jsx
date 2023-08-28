import React from 'react'
import WhoWe from './WhoWe'
import WhyWe from './WhyWe'
import HereWe from './HereWe'
import WhatWe from './WhatWe'
import {Link} from 'react-router-dom'
function About() {
  return (
    <Link to='/about'>
    <div>
      <WhoWe/>
      <WhatWe/>
      <WhyWe/>
      <HereWe/>
      
    </div>
    </Link>
    
  )
}

export default About
