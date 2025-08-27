"use client";
import React, { useState } from "react";
import Aos from "aos";
function Experience() {
  const [readMoreBtn, setReadMoreBtn] = useState(false);

  const content = ` Web Development Intern
Pocketfull | 3 Months 

Developed and optimized blog pages ensuring responsive design and user-friendly layouts.

Integrated APIs to fetch and display dynamic content, improving site interactivity.

Worked on FAQ section with collapsible/dynamic components for better user experience.

Gained hands-on exposure to dynamic routing and troubleshooting common issues in Next.js/React.

Collaborated with the team to debug and resolve technical challenges, enhancing problem-solving skills.

Improved understanding of front-end development workflow and real-world project structure.`;

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
