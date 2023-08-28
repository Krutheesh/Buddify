import React, {  useState } from "react";
import {RxHamburgerMenu} from 'react-icons/rx'
import { Link } from "react-scroll";
import buddify from '../../images/logos/Buddify.png'
import Navlr from "./Navlr";
const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const menuLinks = [
    { name: "Home", link: "home" },
    { name: "About Us", link: "about" },
    { name: "contact Us", link: "contact" },
    
  ];

  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[100] bg-white `}
    >
      <div className="flex items-center ">
        <div className="ml-7 lg:w-[60%] md:w-[50%] w-full  h-[5rem] relative ">
         
            <img src={buddify} className=" md:w-[35%] lg:w-[22%] w-[22%]  absolute top-1/2 transform -translate-y-1/2"/>
          
        </div>
        <div
          className={` ${
            sticky ? "md:bg-black/0 w-[50%] " : "bg-white"
          } text-white md:block hidden px-7 md:w-[60%] lg:w-[40%]  font-medium  `}
        >
          <ul className="flex items-center justify-center text-[#1D40AE] text-lg">
            {menuLinks?.map((menu, i) => (
              <li key={i} className=" px-5 transition duration-300 hover:-translate-y-1 hover:scale-110  block cursor-pointer">
                <Link to={menu?.link} activeClass="active" spy={true} smooth={true} offset={-35} duration={700} >{menu.name}</Link>
              </li>
            ))}
            {/* <Navlr/> */}
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999]  ${
            open ? "text-white" : "text-[#1D40AE]"
          } text-3xl md:hidden m-5`}
        >
       
          <RxHamburgerMenu/>
        </div>
        <div
          className={`md:hidden  text-white absolute  h-screen
      px-7  font-medium bg-[#1D40AE] top-0 duration-300 ${
        open ? "right-0" : "right-[-100%]"
      }`}
        >
          <ul className="flex flex-col justify-center h-full gap-10  text-lg">
            {menuLinks?.map((menu, i) => (
              <li
                
                key={i}
                className="px-5 transition duration-300 hover:-translate-y-1 hover:scale-110   cursor-pointer"
              >
                <Link to={menu?.link} spy={true} smooth={true} offset={-20} duration={500} onClick={() => setOpen(false)} >{menu?.name}</Link>
              </li>
              
            ))}
             {/* <Navlr/> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
