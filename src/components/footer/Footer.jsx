import React from "react";
import { Link } from "react-scroll";
import { Slide,JackInTheBox } from "react-awesome-reveal";
import buddify from '../../images/logos/Buddify.png'
const Footer = () => {
  return (
    <div>
      <footer className="footer py-[3rem] flex flex-col md:px-[4rem]  space-y-5 md:space-y-0  md:flex-row justify-between items-center text-center bg-[#1D40AE]">
        <JackInTheBox>
        <div className="md:pl-20 pl-4 ">
          
          <div className=" w-[8rem] h-[3rem] relative ">
           
           <img src={buddify} className="    absolute top-1/2 transform -translate-y-1/2"/>
         
             </div>
            <p className="text-white">Let it out !</p>
          </div>
        </JackInTheBox>
        
        <div className="w-[35%] md:w-[25%] ">
          <JackInTheBox className="mx-auto md:mx-0">
          <span className="uppercase text-lg text-white font-semibold">
            Get To Know Us
          </span>
          <p className="text-md text-white hover:opacity-50 cursor-pointer">
            <Link  to="about" activeClass="active" spy={true} smooth={true} offset={-35} duration={700}> Abouts Us</Link>
          </p>
          <p className="text-md text-white hover:opacity-50 cursor-pointer">
            <Link to="services" activeClass="active" spy={true} smooth={true} offset={-35} duration={700}> Our services</Link>
          </p>
          </JackInTheBox>
        </div>
        <div className="w-[35%]  md:w-[20%]">
          <JackInTheBox className="mx-auto md:mx-0">
          <span className="uppercase text-lg text-white font-semibold">
            Contact Us
          </span>
          <p className="text-md text-white">
            info@gsrmedia.in</p>
          <p className="text-md text-white">+91 9652653782</p>
          </JackInTheBox>
          
          
        </div>
       
      </footer>
    </div>
  );
};

export default Footer;
