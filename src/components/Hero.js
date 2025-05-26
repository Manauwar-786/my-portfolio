"use client";
import React, { useEffect } from "react";
import { useRef } from "react";
import { Typed } from "react-typed";
function Hero() {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my portfolio",
        "My Name is Manauwar Ansari",
        "I'm Frontend Developer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    const typed = new Typed(typedRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex justify-around md:pt-40 pt-10  w-[100%] h-auto pb-5 ">
      <div className="pt-5"
      data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
      >
        <div className=" md:pl-20  flex items-center bg-black  border-2 rounded-2xl shadow-xl shadow-yellow-500/40 animate h-20  md:h-40 md:w-[625px] w-50 ">
          <h2
            ref={typedRef}
            className=" pl-2 md:pl-0 md:text-4xl font-semibold bg-gradient-to-r from-blue-500 via-green-400 to-indigo-500 bg-clip-text text-transparent"
          ></h2>
        </div>
      </div>

      {/* right heros section */}
      <div className="flex items-center  animate-pulse "
      data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500"
      >
        <img
          className="h-30 w-30 md:h-50 md:w-50 rounded-full border-amber-500 border-1 md:border-2 shadow-xl shadow-yellow-500/40 transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1"
          src="/images/myimage.jpg"
        ></img>
      </div>
    </div>
  );
}

export default Hero;
