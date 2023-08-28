import React from 'react'
import s from '../../images/s.svg'
import { Slide,JackInTheBox } from "react-awesome-reveal";
function Hero() {
  return (
    <div id='home' className='md:h-full flex flex-col-reverse md:flex-row justify-center  lg:justify-start mt-[1rem] lg:mt-0  h-[100vh]  lg:h-[100vh]  md:pt-[10rem] lg:px-[8rem]'>
      {/* <img src={s} alt="" srcset="" /> */}
<div className= 'w-full  lg:w-[60%]  h-[35vh]   lg:m-7 pr-[1rem]  '>
<JackInTheBox>
  <h1 className=' font-bold lg:text-[3.5rem] text-center lg:text-start text-[2rem] py-[1rem]'>
  Let it out!
  </h1>
  </JackInTheBox>
  <JackInTheBox>
  <p className='bg-[#1D40AE] text-white lg:py-[3rem]  py-[3rem] px-[1.5rem] lg:text-[1.2rem] lg:pl-[2rem] lg:pr-[5rem]  rounded-r-xl lg:rounded-r-none'>
  Share anything you want, from the whispers of your deepest thoughts to the echoes of your loudest emotions. It's a safe space; just let it all out, unburden your heart, and find solace in being truly heard.
  </p>
  </JackInTheBox>
</div>

<div className='block lg:absolute  lg:h-[40%] h-[35vh]  pl-[1rem] lg:pl-0   lg:right-0  lg:top-[6rem] lg:z-[-1]'>

<img src={s} className=' ' alt="" />

</div>


      
    </div>
  )
}

export default Hero

