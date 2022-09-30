import React from "react";
import { motion } from "framer-motion";

import {
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";

import Link from "next/link";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 1 }}
      exit={{ opacity: 0 }}
      className="bg-gradient-to-b from-gray-200  space-x-2 px-8 py-32 "
    >
      <h1 className="text-center text-4xl text-black font-semibold">
        Who am i ...
      </h1>
      <div className="left flex items-center space-x-16 ">
        <div className="inner text-white text-center bg-navyLight rounded-md my-48 px-6 py-32">
          <h1 className="my-5 text-2xl font-semibold ">About me</h1>
          <p className="text text-sm leading-8 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil quia
            distinctio veniam? Pariatur, cumque? Architecto, sint laborum
            inventore ducimus cum dolore pariatur distinctio officiis amet optio
            fugiat nesciunt nulla tenetur minima. Placeat animi veritatis quas
            laborum deleniti id tempora perspiciatis. A non iste eum laborum nam
            libero pariatur ab minus.
          </p>
        </div>

        <div className="socials text-2xl flex justify-center items-center space-x-12 my-16 ">
          <Link href="">
            <a className="hover:bg-gray-300 rounded-full px-4 py-4 hover:text-blue-500 shadow-md">
              <AiOutlineLinkedin />
            </a>
          </Link>
          <Link href="">
            <a className="hover:bg-gray-300 rounded-full px-4 py-4 shadow-md">
              <AiOutlineGithub />
            </a>
          </Link>
          <Link href="https://twitter.com/home">
            <a className="hover:bg-gray-300 rounded-full px-4 py-4 hover:text-blue-500 shadow-md">
              <AiOutlineTwitter />
            </a>
          </Link>

          <Link href="">
            <a className="hover:bg-gray-300 rounded-full px-4 py-4 shadow-md">
              <AiOutlineInstagram />
            </a>
          </Link>
          <Link href="">
            <a className="hover:bg-gray-300 rounded-full px-4 py-4 hover:text-blue-500 shadow-md">
              <AiOutlineFacebook />
            </a>
          </Link>
        </div>
      </div>
      <hr />
    </motion.div>
  );
}

export default About;
