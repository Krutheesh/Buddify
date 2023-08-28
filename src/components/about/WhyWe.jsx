import React from 'react'
import { Slide ,JackInTheBox} from 'react-awesome-reveal'
function WhyWe() {
  return (
    <div className='px-[4rem] py-[2rem]'>
      <JackInTheBox>

      <h2 className='text-[#1D40AE] text-center text-[2rem] font-bold'>But Why ?</h2>
      <div >
        <div className='flex flex-col md:flex-row md:w-[70%] justify-center space-y-10 md:space-x-10 md:space-y-0 items-center pt-[4rem]'>
          <span className='bg-[#1D40AE] text-white text-[2.5rem] font-bold p-2'>800,000</span>
          <p className='font-semibold md:text-[1.2rem]'>No. of Sucides per year</p>
        </div>
        <div className='flex flex-col md:flex-row  justify-center space-y-10 md:space-x-10 md:space-y-0 items-center pt-[4rem]'>
          <span className='bg-[#1D40AE] text-white text-[2.5rem] font-bold p-2'>28%</span>
          <p className='font-semibold md:w-[50%] md:text-[1.2rem]'>The percentage of world’s Population facing Depression. It means 246 million People are into depression in the world.</p>
        </div>
      </div>

      </JackInTheBox>
      
    </div>
  )
}

export default WhyWe
