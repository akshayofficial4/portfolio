import Image from "next/image";
import React from "react";
import Link from "next/link";
import personalImg from "./../public/assets/projects/personalsite.png";
import { RiRadioButtonFill } from "react-icons/ri";
const personalsite = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative ">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10 " />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={personalImg}
          alt=""
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 ">
          <h2 className="py-2">Personal Portfolio</h2>
          <h3>Next JS / Tailwind CSS / Firebase</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This App is build using{" "}
            <span className="text-[#5651e5]">Next JS</span> and hosted using{" "}
            <span className="text-[#5651e5]">vercel</span>. its my personal portfolio website build using next js and for styling used{" "}
            <span className="text-[#5651e5]">Tailwind CSS</span> and for
            hosting , used{" "}
            <span className="text-[#5651e5]">vercel </span>
            .This website is fully responsive so anyone can see this website more conveniently in any devices. 
            It includes really cool features in Next JS like lazy loading images, and a built in routing system.
          </p>

          
            <Link href="/#home">
                <button className="px-8 py-2 mt-4 mr-8">Demo</button>
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
                <RiRadioButtonFill className="pr-1" /> Next JS{" "}
              </p>
              <p className="text-gray-600 py-2 flex items-center ">
                {" "}
                <RiRadioButtonFill className="pr-1" /> Tailwind CSS{" "}
              </p>
              <p className="text-gray-600 py-2 flex items-center ">
                {" "}
                <RiRadioButtonFill className="pr-1" /> vercel
              </p>
              <p className="text-gray-600 py-2 flex items-center ">
                {" "}
                <RiRadioButtonFill className="pr-1" /> Lazy Loading{" "}
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

export default personalsite;
