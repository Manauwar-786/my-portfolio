"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
function Navbar() {
  useEffect(() => {
    Aos.init()
  
    return () => {
      
    }
  }, [])
  
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="flex w-full h-20 px-4 md:px-32 justify-between items-center z-50 relative"
   data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
    >
      <h1 className="md:text-4xl text-2xl  font-semibold bg-gradient-to-r from-blue-500 via-green-400 to-indigo-500 bg-clip-text text-transparent">
        Portfolio
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 font-bold text-white text-xl">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/experience">Experience</Link>
        </li>
        <li>
          <Link href="/skills">Skills</Link>
        </li>
        <li>
          <Link href="/projects">Project</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden text-white" onClick={toggleNav}>
        {navOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <ul className="absolute top-20 left-0 w-full bg-black flex flex-col items-center gap-6 py-6 font-medium text-white text-xl md:hidden z-50 ">
          <li>
            <Link href="/" onClick={toggleNav}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/experience" onClick={toggleNav}>
              Experience
            </Link>
          </li>
          <li>
            <Link href="/skills" onClick={toggleNav}>
              Skills
            </Link>
          </li>
          <li>
            <Link href="/projects" onClick={toggleNav}>
              Project
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={toggleNav}>
              Contact
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
