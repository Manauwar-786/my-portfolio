import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
function Contact() {
  return (
    <>
      <div className="flex justify-center md:pt-20 pt-4">
        <h1 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-500 via-green-400 to-indigo-500 bg-clip-text text-transparent">
          Contact
        </h1>
      </div>
      <div className="flex justify-center md:py-10 py-4 bg-gray-300">
        <div className="flex md:gap-6 gap-2"
        >
          <a href="https://www.instagram.com/">
            <FaInstagramSquare className="md:h-10 md:w-10 h-7 w-7" />
          </a>
          <a href="https://www.facebook.com">
            <FaFacebook className="md:h-10 md:w-10 h-7 w-7" />
          </a>
          <a href="https://in.linkedin.com">
            <FaLinkedin className="md:h-10 md:w-10 h-7 w-7" />
          </a>

          <a href="https://github.com/Manauwar-786">
            <FaGithub className="md:h-10 md:w-10 h-7 w-7" />
          </a>
          <a href="https://www.youtube.com">
            <IoLogoYoutube className="md:h-10 md:w-10 h-7 w-7" />
          </a>
          <a href="https://twitter.com">
            <FaSquareXTwitter className="md:h-10 md:w-10 h-7 w-7" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
