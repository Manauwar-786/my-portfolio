"use client"
import React, { useState } from "react";
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
const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setSubmitted(false); // Reset success message on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: check if all fields are filled
    if (formData.firstName && formData.lastName && formData.message) {
      setSubmitted(true);
      // Optional: clear form fields
      setFormData({ firstName: '', lastName: '', message: '' });
    } else {
      alert("Please fill all fields!");
    }
  };

  return (
    <div>
      <div className="flex justify-center md:pt-20 pt-4">
        <h1 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-500 via-green-400 to-indigo-500 bg-clip-text text-transparent">
          Contact Information
        </h1>
      </div>
      <div className="md:flex">
      <div className="flex-col md:px-[120px] px-4  md:pt-8 pt-4">
        <div className="flex py-4 gap-4">
          <FaPhoneAlt className="bg-yellow-500 rounded-full md:h-10 md:w-10 h-7 w-7 hover:bg-amber-300" />
          <p className="text-blue-500">Phone:</p>
          <p className="text-white">+916299091073</p>
        </div>
        <div className="flex py-4 gap-4">
          <SiMinutemailer className="bg-yellow-500 rounded-full md:h-10 md:w-10 h-7 w-7 hover:bg-amber-300" />
          <p className="text-blue-500">email:</p>
          <p className="text-white tracking-tighter">
            ansarimanauwar786@gmail.com
          </p>
        </div>
        <div className="flex py-4 gap-4">
          <IoIosGlobe className="bg-yellow-500 rounded-full md:h-10 md:w-10 h-7 w-7 hover:bg-amber-300" />
          <p className="text-blue-500">website:</p>
          <Link href="https://my-portfolio-alpha-five-28.vercel.app/">
            <p className="text-white hover:text-blue-500 tracking-tighter">
              https://my-portfolio-alpha-five-28.vercel.app/
            </p>
          </Link>
        </div>
      
      <div className="flex justify-baseline md:py-10 py-4 ">
        <div className="flex md:gap-6 gap-2">
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
</div>
      <div className="py-4 md:py-5 ">
     <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2 className=" text-cyan-500 font-medium">Contact Form</h2>
      <form onSubmit={handleSubmit} className="bg-[#0b1a40]">
        <input className="text-white"
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          style={{ marginBottom: "10px", width: "100%", padding: "8px" }}
        />
        <input className="text-white"
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          style={{ marginBottom: "10px", width: "100%", padding: "8px" }}
        />
        <textarea className="text-white"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{ marginBottom: "10px", width: "100%", padding: "8px" }}
        ></textarea>
        <button className="text-green-500 font-semibold" type="submit" style={{ padding: "8px 16px" }}>Submit</button>
      </form>

      {submitted && (
        <p style={{ color: "green", marginTop: "10px" }}>
          ✅ Form submitted successfully!
        </p>
      )}
     </div>
      </div>
      </div>
      </div>
  );
}

export default Contact;
