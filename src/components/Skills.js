import React from "react";
import Aos from "aos";
function Skills() {
  const data = [
    {
      title: "HTML",
      image: "/images/html.png",
    },
    {
      title: "CSS",
      image: "/images/css.png",
    },
    {
      title: "JAVASCRIPT",
      image: "/images/javascript.png",
    },
    {
      title: "REACT.JS",
      image: "/images/react.png",
    },
    {
      title: "NEXT.JS",
      image: "/images/nexticon.png",
    },
    {
      title: "BOOTSTRAP",
      image: "/images/bootstrap.png",
    },
  ];
  return (
    <>
      <div className="text-white font-bold text-2xl flex justify-center items-center md:pt-5">
        <h1 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-500 via-green-400 to-indigo-500 bg-clip-text text-transparent">
          Skills
        </h1>
      </div>
      <div className="grid grid-cols-2">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-center h-20 pt-5 md:pt-20 md:h-auto "
          >
            <div
              className="flex justify-center border-1 md:border-2 rounded-xl shadow-xl shadow-yellow-500/40 h-auto w-30 md:w-40 bg-black *:transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1"
              data-aos="flip-left"
              data-aos-duration="1000"
            >
              <img
                className="md:h-15 md:w-15 h-10 w-10 flex p-2 pl-1 absolute"
                src={item.image}
              ></img>
              <h2 className="text-white font-semibold pt-8 pl-2 flex md:pt-13">
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Skills;
