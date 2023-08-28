import React from "react";
import { Slide,JackInTheBox } from "react-awesome-reveal";

function AboutWe() {
  return (
    
 <div>
  
        <div className="flex justify-center items center lg:pt-[12rem] py-[4rem] relative z-[-100]  h-[100vh] md:h-full lg:h-[100vh]  bg-[#1D40AE] " id="about">
          <div className="lg:w-[70%] md:w-[70%] w-[70%] text-center">
          <JackInTheBox  > 
            <span className="text-[2rem] md:[2.5rem] lg:[3rem] px-4 py-3 text-[#1D40AE] bg-white font-bold ">
            Who we are 
            </span>
      </JackInTheBox>
            <JackInTheBox  >
            <p className=" py-[2rem] md:py-[3rem] text-white md:leading-7 md:text-[1.2rem]  md:text-start">
              "BUDDIFY is an innovative platform designed to foster genuine
              human connections in an increasingly isolated world. Understanding
              the hurdles many face in seeking a non-judgmental ear, BUDDIFY
              bridges this gap by offering a paid service where individuals can
              connect with 'buds' - carefully vetted and trained individuals
              committed to active listening without any biases or judgments.
              Whether through direct meet-ups in partnered cafes, or through
              audio and video calls, BUDDIFY ensures a safe, confidential, and
              wholesome experience. Beyond just conversations, it's a sanctuary
              for those longing to be truly heard, unburden their hearts, and
              find solace in human connection."
            </p>
            </JackInTheBox>
          </div>
        </div>
     
        
 </div>
     
 
    
   
  );
}

export default AboutWe;
