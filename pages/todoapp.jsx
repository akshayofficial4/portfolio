import Image from "next/image";
import React from "react";
import Link from "next/link";
import todoImg from "./../public/assets/projects/todoapp.png";
import { RiRadioButtonFill } from "react-icons/ri";
const Todoapp = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative ">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10 " />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={todoImg}
          alt=""
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 ">
          <h2 className="py-2">Todo app</h2>
          <h3>React JS / CSS /</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            It's a ToDo app build in react js and styled using CSS. The library
            react-icons is used for icons Here we can create,update, and delete
            todos
          </p>

          <Link
            href="http://beautiful-caramel-175b90.netlify.app"
            target="_blank"
          >
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </Link>

          <Link
            href="https://github.com/akshayofficial4/toDo-app.git"
            target="_blank"
          >
            <button className="px-8 py-2 mt-4 ">Code</button>
          </Link>
        </div>

        <div className="col-span-4 lg:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 flex flex-auto md:col-span-6 ">
          <div className="p-2 items-center justify-center">
            <p className="text-center font-bold pb-2 flex justify-center items-center">
              Technologies
            </p>
            <div className="grid">
              <p className="text-gray-600 py-2 flex items-center ">
                {" "}
                <RiRadioButtonFill className="pr-1" /> React JS{" "}
              </p>
              <p className="text-gray-600 py-2 flex items-center ">
                {" "}
                <RiRadioButtonFill className="pr-1" /> CSS{" "}
              </p>
              <p className="text-gray-600 py-2 flex items-center ">
                {" "}
                <RiRadioButtonFill className="pr-1" /> React-icons
              </p>
              <p className="text-gray-600 py-2 flex items-center ">
                {" "}
                <RiRadioButtonFill className="pr-1" /> Netlify{" "}
              </p>
            </div>
          </div>
        </div>
        <div className=" py-2 mt-4 ">
          <Link href="/#projects">
            <p className="underline cursor-pointer">Back</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Todoapp;
