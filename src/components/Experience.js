"use client";
import React, { useState } from "react";
import Aos from "aos";
function Experience() {
  const [readMoreBtn, setReadMoreBtn] = useState(false);

  const content = ` I'm a Front-End Developer skilled in React.js, Next.js, and responsive
  design using Tailwind CSS and Bootstrap. I build fast, accessible, and
  dynamic websites with a focus on user experience. 🚀 Passionate and
  detail-oriented Front-End Developer with a strong foundation in building
  responsive, user-friendly web interfaces using HTML, CSS, and
  JavaScript. Proficient in modern frameworks like React.js and Next.js,
  with experience designing clean using Tailwindcss & CSS and Bootstrap.
  🛠 Skilled in component-based development, state management, and
  integrating APIs to deliver high-performance web applications.
  Continuously learning and adapting to new technologies to build scalable
  and accessible solutions. Looking forward to contributing to impactful
  projects and growing in a collaborative development environment.`;

  const prevLength = 500;

  return (
    <>
      <h1 className="text-2xl flex justify-center md:pt-8 pt-5 md:text-3xl font-semibold bg-gradient-to-r from-blue-500 via-green-400 to-indigo-500 bg-clip-text text-transparent ">
        Experience
      </h1>

      <div
        className="w-full md:py-20 py-4 rounded-xl shadow-md flex justify-center"
        data-aos="zoom-in-up"
      >
        <p className="w-[80%] md:w-[50%] text-justify tracking-tighter md:tracking-normal text-xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
          {readMoreBtn ? content : `${content.slice(0, prevLength)}...`}
          <button
            onClick={() => setReadMoreBtn(!readMoreBtn)}
            className="ml-2 underline text-blue-600 hover:text-blue-800"
          >
            {readMoreBtn ? "Read Less..." : "Read More..."}
          </button>
        </p>
      </div>
    </>
  );
}

export default Experience;
