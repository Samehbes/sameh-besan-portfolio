import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";



const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-04 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: "80px" }} />
      </div>
      {/* menu */}
      <ul className="hidden md:flex">
        <li>
        <Link activeClass="active" to="home"  smooth={true} offset={50} duration={500}>
          Home
        </Link>
        </li>
        <li>
        <Link activeClass="active" to="about"  smooth={true} offset={50} duration={500}>
          About
        </Link>
        </li>
        <li>
        <Link activeClass="active" to="skills"  smooth={true} offset={50} duration={500}>
          Skills
        </Link>
        </li>
        <li>
        <Link activeClass="active" to="work"  smooth={true} offset={50} duration={500}>
          Work
        </Link>
        </li>
        <li>
        <Link activeClass="active" to="contact"  smooth={true} offset={50} duration={500}>
          Contact
        </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen  bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li  className="py-6 text-4xl">
        <Link onClick={handleClick} activeClass="active" to="home"  smooth={true} offset={50} duration={500}>
          Home
        </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link onClick={handleClick} activeClass="active" to="about"  smooth={true} offset={50} duration={500}>
          About
        </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link onClick={handleClick} activeClass="active" to="skills"  smooth={true} offset={50} duration={500}>
          Skills
        </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link onClick={handleClick} activeClass="active" to="work"  smooth={true} offset={50} duration={500}>
          Work
        </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link onClick={handleClick} activeClass="active" to="contact"  smooth={true} offset={50} duration={500}>
          Contact
        </Link>
        </li>
      </ul>
      {/*Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/sameh-besan/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/Samehbes"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:samehbes@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
               href="https://drive.google.com/file/d/1gmxwGSeuxavJKwblI2p9U0HSYWj85I2F/view?usp=sharing" >
            
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
