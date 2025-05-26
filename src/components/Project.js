"use client";
import Link from "next/link";
import React, { useState } from "react";
import Aos from "aos";

function Project() {
  const data = [
    {
      title: "Portfolio",
      image: "/images/portfolio.jpeg",
      description:
        "This project is made with react.js and using tailwindcss and bootstrap",
      demo: "",
      source: "",
    },
    {
      title: "Live Cricket",
      image: "/images/live.png",
      description: "This project is made with react.js and using tailwindcss",
      demo: "https://vercel.com/manauwar-786s-projects/live-cricket-qgbj",
      source: "https://github.com/Manauwar-786/live-cricket",
    },
    {
      title: "Food Recipe",
      image: "/images/foodrecipe.png",
      description: "This project is made with react.js and using tailwindcss",
      demo: "https://vercel.com/manauwar-786s-projects/food-recipe",
      source: "https://github.com/Manauwar-786/food-recipe",
    },
    {
      title: "Grocery Mart",
      image: "/images/grocery.png",
      description: "This project is made with react.js and using tailwindcss",
      demo: "",
      source: "https://github.com/Manauwar-786/grocery-app",
    },
    {
      title: "Rock Paper Scissor",
      image: "/images/rockpaper.png",
      description: "This project is made with javaScript and using tailwindcss",
      demo: "",
      source: "https://github.com/Manauwar-786/Rock-Paper-Scissors",
    },
    {
      title: "Calculator",
      image: "/images/calculator.png",
      description: "This project is made with react.js and using tailwindcss",
      demo: "https://grocery-app-25xq.vercel.app/",
      source: "https://github.com/Manauwar-786/React-Calculator",
    },
    {
      title: "Login Page",
      image: "/images/login.png",
      description:
        "This project is made with react.js Next.js and using tailwindcss",
      demo: "",
      source: "https://github.com/Manauwar-786/login-page",
    },
    {
      title: "Todo List",
      image: "/images/to-do.jpg",
      description: "This project is made with react.js and using tailwindcss",
      demo: "https://vercel.com/manauwar-786s-projects/react-todo-list",
      source: "https://github.com/Manauwar-786/React-TodoList",
    },
  ];

  return (
    <>
      <div className=" font-bold text-2xl flex justify-center items-center pt-2 md:pt-5">
        <h1 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-500 via-green-400 to-indigo-500 bg-clip-text text-transparent">
          Projects
        </h1>
      </div>
      <div className="pt-4 md:pt-20 grid grid-cols-1 md:grid-cols-3 w-full md:gap-15 gap-5 md:px-[120px] px-4">
        {data.map((item, index) => (
          <div
            key={index}
            className=" border-1 rounded-xl shadow-xl shadow-yellow-500/40 w-100% md:h-auto bg-black py-2
            transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1"
          data-aos="flip-left"
             data-aos-duration="1000"   //AOS ANIMATION APPLY
          
          >
            <div className="relative">
              {/* <img src={item.image} className="h-20 w-20 md:h-50 md:w-full rounded-xl absolute" alt="photo"/> */}
              <div className="">
                <h5 className=" text-blue-400 md:text-2xl text-lg font-semibold flex justify-center md:pt-1">
                  {item.title}
                </h5>
                <p className="text-white md:pt-2 px-3 tracking-tighter">
                  {item.description}
                </p>
                <div className="flex md:pt-2 pt-1 justify-center gap-10">
                  <button
                    className={`bg-blue-400 text-black px-3 py-1 rounded font-semibold ${item.demo}`}
                  >
                    Demo
                  </button>
                  <a href={item.source}>
                    <button
                      className={`bg-yellow-400 text-black px-3 py-1 rounded font-semibold `}
                    >
                      Source
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Project;
