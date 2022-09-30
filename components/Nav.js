import React from "react";
import Link from "next/link";
import { AiOutlineDownload } from "react-icons/ai";

function Nav() {
  return (
    <div className="flex justify-between items-center bg-navy px-16 py-4 w-full fixed">
      <div className="logo text-3xl font-light text-blue-500 italic">MT</div>
      <div className="links flex items-center text-lg font-semibold space-x-10  ">
        <Link href="/">
          <a className=" text-white hover:text-blue-500 px-2 py-1 rounded">
            Home
          </a>
        </Link>
        <Link href="/portfolio/about">
          <a className=" text-white hover hover:text-blue-500 ">About</a>
        </Link>

        <Link href="/portfolio/projects">
          <a className=" text-white  px-2 py-1 rounded hover:text-blue-500">
            Projects
          </a>
        </Link>
        <Link href="/">
          <a className="text-white bg-blue-500 flex items-center justify-between hover:bg-blue-400 px-2 py-1 rounded">
            <AiOutlineDownload />
            Resume
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
