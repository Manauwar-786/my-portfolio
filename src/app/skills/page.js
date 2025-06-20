import Skills from "@/components/Skills";
import React from "react";

function page() {
  const data = {
    heading: "Skills",
    paragraph: [
      "Languages: HTML, CSS, JavaScript,C++,CoreJava ",
      "Libraries/Frameworks: React.js, Bootstrap Next.js Tailwindcss SAAS(SCSS)",
      "Plateforms/Tools: Git,Github, VS Code, Figma",
      "Soft Skills: Teamwork, Communication, Problem-solving",
    ],
  };
  return (
    <>
      <Skills />
      {/* <div className='flex justify-center py-2 md:py-4'>
       <h1 className=' flex text-center text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-500 via-green-400 to-indigo-500 bg-clip-text text-transparent'>{data.heading}</h1>
    </div> */}
      {data.paragraph.map((item, index) => (
        <div
          key={index}
          className="w-full text-white pb-2 flex justify-center pt-4"
        >
          <p className=" w-[60%] text-left text-xl font-semibold">{item}</p>
        </div>
      ))}
    </>
  );
}

export default page;
