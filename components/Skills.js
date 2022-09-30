import React from "react";
import { FaReact, FaBootstrap } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";

function Skills() {
  return (
    <div className="py-32">
      <div className="right  ">
        <h1 className=" text-center text-xl tracking-wide pb-16">Skillset </h1>
        <div className="card-container flex justify-center gap-x-4 gap-y-12">
          <div className="card-items px-16 py-4 space-x-2 bg-gray-200 shadow text-2xl rounded">
            <h1>React</h1>
            <FaReact />
          </div>
          <div className="card-items px-16 py-4 space-x-2 bg-gray-200 shadow text-2xl rounded">
            <h1>Next js</h1>
            <TbBrandNextjs />
          </div>
          <div className="card-items px-16 py-4 space-x-2 bg-gray-200 shadow text-2xl rounded">
            <h1>JavaScript</h1>
            <IoLogoJavascript />
          </div>
          <div className="card-items px-16 py-4 space-x-2 bg-gray-200 shadow text-2xl rounded">
            <h1>CSS3</h1>
            <IoLogoCss3 />
          </div>
          <div className="card-items px-16 py-4 space-x-2 bg-gray-200 shadow text-2xl rounded">
            <h1>Tailwind CSS</h1>
            <SiTailwindcss />
          </div>
          <div className="card-items px-16 py-4 space-x-2 bg-gray-200 shadow text-2xl rounded">
            <h1>Bootstrap</h1>
            <FaBootstrap />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
