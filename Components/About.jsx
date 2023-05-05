import React from "react";
import Image from "next/image";
import Link from "next/link";
function About() {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5] ">
            about
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            // I am not your normal developer
          </p>

          <p className="py-2 text-gray-600">
            My journey as a developer began after my college I started tinkering
            with HTML and CSS to build my own personal website. From there, I
            dove into JavaScript and eventually discovered React JS, which
            quickly became my favorite framework. I have since honed my skills
            through online courses, self-study, and building various projects.
          </p>

          <p className="py-2 text-gray-600">
            What I enjoy most about React JS is its ability to create dynamic
            and interactive user interfaces. I love experimenting with different
            components and creating seamless interactions that enhance the user
            experience. If you're looking for a developer who is passionate,
            dedicated, and always up for a challenge, I would love to work with
            you. Let's build something great together!
          </p>
          <div className="flex items-center self-start mt-2 mb-5">
            <Link
              href="/akshay-resume.pdf"
              target="_blank"
              className="flex items-center bg-[#5651e5] text-white p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#5651e5] ease-in duration-300 border-2 border-solid border-transparent hover:border-[#5651e5]"
              download={true}
            >
              Resume
            </Link>
          </div>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 ">
          <Image
            className="rounded-xl hover:scale-105 ease-in duration-300"
            src="/../public/assets/pic_2.jpg"
            alt="/"
            width={460}
            height={590}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
