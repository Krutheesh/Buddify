import React from 'react'
import { Slide ,JackInTheBox} from 'react-awesome-reveal'
import s3 from '../../images/s3.svg'
import sit from '../../images/sit.jpg'
function HereWe() {
  return (
    <div className='pt-[4rem]'>
      <JackInTheBox>
      <div className='bg-[#1D40AE] text-[2rem] text-white font-bold text-center p-5'> So, Here We are </div>
        <div className='flex flex-col md:flex-row justify-between items-center px-[4rem] py-[2rem] space-y-10 md:space-y-0'>
          <div className='md:w-[50%]'>
            <img src={s3} alt="" />
          </div>
          <div className='md:w-[50%] md:text-[1.2rem]'>
            <p className=' md:w-[60%] lg:w-[40%] leading-10 mx-auto pl-[1rem] text-center md:text-start font-semibold'>The People who were depressed and feels like there’s no one to talk to.</p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row-reverse justify-between items-center px-[4rem] lg:h-[85vh] overflow-hidden space-y-10 md:space-y-0'>
          <div className='md:w-[50%] '>
            <img src={sit} alt="" />
          </div>
          <div className='md:w-[50%] md:text-[1.2rem]'>
            <p className=' md:w-[60%] lg:w-[40%] leading-10 mx-auto pl-[1rem] text-center md:text-start font-semibold'>The People who were depressed and feels like there’s no one to talk to.</p>
          </div>
        </div>
      </JackInTheBox>
    </div>
  )
}

export default HereWe
