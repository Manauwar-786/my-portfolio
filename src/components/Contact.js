import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { IoIosGlobe } from "react-icons/io";
import Link from "next/link";

function Contact() {
  return (
    <>
      <div className="flex justify-center md:pt-20 pt-4">
        <h1 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-500 via-green-400 to-indigo-500 bg-clip-text text-transparent">
          Contact Information
        </h1>
      </div>
      <div className="flex-col md:px-[120px] px-4  pt-5">
<div className="flex py-4 gap-4">
  <FaPhoneAlt  className="bg-yellow-500 rounded-full md:h-10 md:w-10 h-7 w-7 hover:bg-amber-300"/>
  <p className="text-blue-500">Phone:</p>
  <p className="text-white">+916299091073</p>
</div>
<div className="flex py-4 gap-4">
  <SiMinutemailer className="bg-yellow-500 rounded-full md:h-10 md:w-10 h-7 w-7 hover:bg-amber-300" />
  <p className="text-blue-500">email:</p>
  <p className="text-white tracking-tighter">ansarimanauwar786@gmail.com</p>
</div>
<div className="flex py-4 gap-4">
  <IoIosGlobe className="bg-yellow-500 rounded-full md:h-10 md:w-10 h-7 w-7 hover:bg-amber-300"/>
 <p className="text-blue-500">website:</p>
 <Link href="https://my-portfolio-alpha-five-28.vercel.app/">
 <p className="text-white hover:text-blue-500 tracking-tighter">https://my-portfolio-alpha-five-28.vercel.app/</p></Link>
 
</div>

      </div>
      <div className="flex justify-center md:py-10 py-4">
        <div className="flex md:gap-6 gap-2"
        >
          <a href="https://www.instagram.com/">
            <FaInstagramSquare className="md:h-10 md:w-10 h-7 w-7  hover:bg-amber-400 " />
          </a>
          <a href="https://www.facebook.com">
            <FaFacebook className="md:h-10 md:w-10 h-7 w-7  hover:bg-amber-400" />
          </a>
          <a href="https://in.linkedin.com">
            <FaLinkedin className="md:h-10 md:w-10 h-7 w-7  hover:bg-amber-400" />
          </a>

          <a href="https://github.com/Manauwar-786">
            <FaGithub className="md:h-10 md:w-10 h-7 w-7  hover:bg-amber-400" />
          </a>
          <a href="https://www.youtube.com">
            <IoLogoYoutube className="md:h-10 md:w-10 h-7 w-7  hover:bg-amber-400" />
          </a>
          <a href="https://twitter.com">
            <FaSquareXTwitter className="md:h-10 md:w-10 h-7 w-7  hover:bg-amber-400" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
