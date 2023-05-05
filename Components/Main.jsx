import React from "react";
import { AiOutlineMail, AiFillInstagram } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

function Main() {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase tracking-widest text-sm text-gray-600">
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]">Akshay</span>
          </h1>
          <h1 className="py-2 text-gray-700">A React Js Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I am a self-taught ReactJS developer with a passion for creating
            highly responsive and intuitive user interfaces. Currently i'm
            focusing on building responsive front-end web applications while
            learning backend technologies and I build my experience in react by
            doing real world projects
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4 ">
            <div className="rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 ease-in duration-300 p-6">
              <Link
                href="https://www.linkedin.com/in/akshay-sunil7034"
                target="_blank"
              >
                <FaLinkedinIn />
              </Link>
            </div>

            <div className="rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 ease-in duration-300 p-6">
              <Link href="https://github.com/akshayofficial4" target="_blank">
                <FaGithub />
              </Link>
            </div>

            <div className="rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 ease-in duration-300 p-6">
              <Link href="mailto:akshayofficial43@gmail.com" target="_blank">
                <AiOutlineMail />
              </Link>
            </div>

            <div className="rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 ease-in duration-300 p-6">
              <Link
                href="https://instagram.com/akshayofficia_l?igshid=ZDdkNTZiNTM="
                target="_blank"
              >
                <AiFillInstagram />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
