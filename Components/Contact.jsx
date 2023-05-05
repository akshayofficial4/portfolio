import Link from "next/link";
import React from "react";
import {
  AiOutlineClose,
  AiOutlineMail,
  AiFillInstagram,
  AiOutlineMenu,
} from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg: h-screen ">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get in touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/*left */}

          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 ">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  className="w-full max-h-85 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 "
                  src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b2ZmaWNlJTIwc21hbGwlMjBpbWFnZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
              <div>
                <h2 className="py-2">Akshay Sunil</h2>
                <p>React JS Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me let's talk{" "}
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <div className="rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 ease-in duration-300 p-6">
                    <Link
                      href="https://www.linkedin.com/in/akshay-sunil7034"
                      target="_blank"
                    >
                      <FaLinkedinIn />
                    </Link>
                  </div>

                  <div className="rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 ease-in duration-300 p-6">
                    <Link
                      href="https://github.com/akshayofficial4"
                      target="_blank"
                    >
                      <FaGithub />
                    </Link>
                  </div>

                  <div className="rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 ease-in duration-300 p-6">
                    <Link
                      href="mailto:akshayofficial43@gmail.com"
                      target="_blank"
                    >
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
          {/*right */}

          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      phone number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="tel"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                  ></textarea>
                </div>

                <button className="w-full p-4 text-gray-100 mt-4">
                  <Link href="mailto:akshayofficial43@gmail.com" >Send Message</Link>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
