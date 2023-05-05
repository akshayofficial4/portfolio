import Image from "next/image";
import React from "react";
import Link from "next/link";
import weatherImg from "./../public/assets/projects/weather.png";
import { RiRadioButtonFill } from "react-icons/ri";
const Weathercaster = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative ">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10 " />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={weatherImg}
          alt=""
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 ">
          <h2 className="py-2">Weathercaster</h2>
          <h3>React JS / Tailwind / API integration</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This App is build using{" "}
            <span className="text-[#5651e5]">React JS</span> and hosted using{" "}
            <span className="text-[#5651e5]">Netlify</span>. its a react Js
            weather forecasting application which shows the current weather of
            cities, states etc. for styling used{" "}
            <span className="text-[#5651e5]">Tailwind CSS</span> and for
            fetching the weather data, used{" "}
            <span className="text-[#5651e5]">openweathermap API </span>
            and also shows shows the previous search history.
          </p>

          <Link
            href="http://amazing-strudel-d77dfc.netlify.app"
            target="_blank"
          >
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </Link>

          <Link
            href="https://github.com/akshayofficial4/weathercaster.git"
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
                <RiRadioButtonFill className="pr-1" /> React{" "}
              </p>
              <p className="text-gray-600 py-2 flex items-center ">
                {" "}
                <RiRadioButtonFill className="pr-1" /> Tailwind CSS{" "}
              </p>
              <p className="text-gray-600 py-2 flex items-center ">
                {" "}
                <RiRadioButtonFill className="pr-1" /> Openweather API
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

export default Weathercaster;
