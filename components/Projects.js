import React from "react";
import Link from "next/link";
import { BsArrowDownShort } from "react-icons/bs";
import { motion } from "framer-motion";

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 1 }}
      exit={{ opacity: 0 }}
      className="main bg-gradient-to-b from-navy pt-12  "
    >
      <div className="projects  pt-10 text-xl text-center flex items-center justify-center space-x-4 text-white">
        <BsArrowDownShort />
        <h1 className="text-3xl">Recent Projects</h1>
      </div>

      <div className="my-16 grid grid-cols-3 gap-x-1 gap-y-8 px-8 py-4">
        <div className="card w-5/6 h-[360px] text-center rounded shadow-lg py-4 px-2 hover:border bg-gray-50">
          <h1 className="text-black pb-8 text-2xl font-bold text-quicksand">
            Weather App
          </h1>
          <p className=" text-gray-600 text-quicksand">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            fugit!
          </p>
          <div className="stack">
            <ul className="flex space-x-1 py-2 justify-center text-sm">
              <ul className=" px-2 py-1 mt-8 font-bold">Reactjs</ul>
              <ul className=" px-2 py-1 mt-8 font-bold">Tailwind Css</ul>
              <ul className=" px-2 py-1 mt-8 font-bold">Html</ul>
            </ul>
          </div>
          <Link href="https://mugwira-weatherapp.netlify.app/">
            <button className="px-2 py-1 w-full mb-2 mt-16 rounded border border-blue-300 text-blue-600 font-bold hover:bg-blue-100">
              Visit Project
            </button>
          </Link>
        </div>
        <div className="card w-5/6 rounded shadow-lg py-4 px-2 hover:border bg-gray-50 text-center">
          <h1 className="text-black pb-8 text-2xl font-bold">Project 2</h1>
          <p className=" text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            fugit!
          </p>
          <div className="stack">
            <ul className="flex space-x-1 py-2 justify-center text-sm">
              <ul className="bg-gray-50 px-2 py-1 mt-8 font-bold">
                Reactjs/nextjs
              </ul>
              <ul className="bg-gray-50 px-2 py-1 mt-8 font-bold">
                Tailwind Css
              </ul>
              <ul className="bg-gray-50 px-2 py-1 mt-8 font-bold">Html</ul>
            </ul>
          </div>
          <Link href="https://mugwira-weatherapp.netlify.app/">
            <button className="px-2 py-1 w-full mb-2 mt-16 rounded border border-blue-300 text-blue-600 font-bold hover:bg-blue-100">
              Visit Project
            </button>
          </Link>
        </div>
        <div className="card w-5/6 rounded shadow-lg py-4 px-2 hover:border bg-gray-50 text-center">
          <h1 className="text-black pb-8 text-2xl font-bold">Project 3</h1>
          <p className=" text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            fugit!
          </p>
          <div className="stack">
            <ul className="flex space-x-1 py-2 justify-center text-sm">
              <ul className="bg-gray-50 px-2 py-1 mt-8 font-bold">
                Reactjs/nextjs
              </ul>
              <ul className="bg-gray-50 px-2 py-1 mt-8 font-bold">
                Tailwind Css
              </ul>
              <ul className="bg-gray-50 px-2 py-1 mt-8 font-bold">Html</ul>
            </ul>
          </div>
          <Link href="https://mugwira-weatherapp.netlify.app/">
            <button className="px-2 py-1 w-full mb-2 mt-16 rounded border border-blue-300 text-blue-600 font-bold hover:bg-blue-100">
              Visit Project
            </button>
          </Link>
        </div>
        <div className="card w-5/6 h-[360px] rounded shadow-lg py-4 px-2 hover:border bg-gray-50 ">
          <h1 className="text-blue-500 pb-8 text-2xl font-bold">Project 4</h1>
          <p className=" text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            fugit!
          </p>
          <div className="stack">
            <ul className="flex space-x-2 py-2">
              <ul className="bg-gray-50 px-2 py-1 mt-8 font-bold">
                Reactjs/nextjs
              </ul>
              <ul className="bg-gray-50 px-2 py-1 mt-8 font-bold">
                Tailwind Css
              </ul>
              <ul className="bg-gray-50 px-2 py-1 mt-8 font-bold">HTML</ul>
            </ul>
          </div>
          <Link href="https://mugwira-weatherapp.netlify.app/">
            <button className="px-2 py-1 w-full mb-2 mt-16 rounded border border-blue-300 text-blue-600 font-bold hover:bg-blue-100">
              Visit Project
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
