import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  AiOutlineClose,
  AiOutlineMail,
  AiFillInstagram,
  AiOutlineMenu,
} from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import { useRouter } from "next/router";
function Navbar() {
  const [nav, setNav] = useState(false);

  const [shadow, setShadow] = useState(false);

  const [navBg, setNavBg] = useState("#ecf0f3");

  const [linkColor, setLinkColor] = useState("#1f2937");

  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === "/adviceapp" ||
      router.asPath === "/todoapp" ||
      router.asPath === "/weathercaster"
    ) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 rounded-xl">
        <Link href="/">
          <Image
            className=" cursor-pointer hover:scale-105 ease-in duration-200"
            src="/../public/assets/logo.png"
            width={57}
            height={35}
            alt="/"
          />
        </Link>

        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>

            <Link href="#about">
              <li className="ml-10 text-sm uppercase hover:border-b">about</li>
            </Link>

            <Link href="#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">skills</li>
            </Link>

            <Link href="#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                projects
              </li>
            </Link>

            <Link href="#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      {/*mobile view */}
      <div
        className={
          nav ? " md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image
                  src="/../public/assets/logo.png"
                  width={57}
                  height={35}
                  alt="/"
                />
              </Link>

              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:bg-[#abcdef] ease-in duration-500"
              >
                <AiOutlineClose />
              </div>
            </div>

            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4 ">
                Let's build something legendary together
              </p>
            </div>
          </div>

          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>

              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  about
                </li>
              </Link>

              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  skills
                </li>
              </Link>

              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  project
                </li>
              </Link>

              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let's connect
              </p>

              <div className="flex items-center  justify-between my-4 sm:w-[80%]">
                <div className="rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105 ease-in duration-300 p-3">
                  <Link
                    href="https://www.linkedin.com/in/akshay-sunil7034"
                    target="_blank"
                  >
                    <FaLinkedinIn />
                  </Link>
                </div>

                <div className="rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105 ease-in duration-300 p-3">
                  <Link
                    href="https://github.com/akshayofficial4"
                    target="_blank"
                  >
                    <FaGithub />
                  </Link>
                </div>

                <div className="rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105 ease-in duration-300 p-3">
                  <Link
                    href="mailto:akshayofficial43@gmail.com"
                    target="_blank"
                  >
                    <AiOutlineMail />
                  </Link>
                </div>

                <div className="rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105 ease-in duration-300 p-3">
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
      </div>
    </div>
  );
}

export default Navbar;
