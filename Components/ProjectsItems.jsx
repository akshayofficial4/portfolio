import React from "react";
import Image from "next/image";
import Link from "next/link";
const ProjectsItems = ({ backgroundImg, title, projectUrl, language }) => {
  return (
    <div>
      <div className="realtive flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
        <Image
          className="rounded-xl group-hover:opacity-10"
          src={backgroundImg}
          alt="/"
        />
        <div className="hidden group-hover:block absolute">
          <h3 className="text-2xl text-white tracking-wider text-center">
            {title}
          </h3>
          <p className="pb-4 pt-2 text-white text-center">{language}</p>
          <Link href={projectUrl}>
            <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer hover:shadow-2xl">
              More Info
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsItems;
