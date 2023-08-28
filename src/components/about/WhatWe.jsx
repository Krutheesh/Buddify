import React from "react";
import s2 from "../../images/s2.svg";
import { Slide, JackInTheBox } from "react-awesome-reveal";
function WhatWe() {
  return (
    <div className="py-[4rem]">
      <JackInTheBox>
        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-center lg:items-start px-[4rem] md:px-0 ">
          <div className="md:w-[45%] lg:w-[55%]  md:h-[50%] ">
            <img src={s2} className=" md:w-[50rem]  lg:h-[80vh]" alt="" />
          </div>
          <div className="md:w-[50%] lg:w-[45%]  lg:pt-[2rem]  px- lg:pr-[12rem] md:pr-[2rem]">
            <div className="">
            <h1 className="text-[2rem] font-bold  py-[0.5rem]  text-[#1D40AE]">What We do</h1>
            <p className="lg:text-[1.2rem] font-semibold ">
            "BUDDIFY is a unique platform designed to bridge the emotional gap
            in today's fast-paced world. By connecting compassionate 'buds' with
            individuals yearning for an outlet, we provide a safe space for them
            to express their feelings, voice their concerns, and find solace.
            It's more than just a conversation; it's a therapeutic release,
            enabling people to lighten the emotional load they carry."
            </p>
            </div>
          </div>
        </div>
      </JackInTheBox>

      
    </div>
  );
}

export default WhatWe;
