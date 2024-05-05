import React from "react";
import { FaReact, FaFigma } from "react-icons/fa6";
import { SiFlutter } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
const Experience = () => {
  return (
    <div className="h-[500px] p-10 bg-indigo-950 text-indigo-100 relative">
      <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 justify-items-center gap-8 p-10">
        <div className="flex items-center space-x-5">
          <FaReact size={36} />
          <div>
            <h1 className="text-xl">React Js</h1>
            <h1 className="text-xs">2+ Years Experience</h1>
          </div>
        </div>
        <div className="flex items-center space-x-5">
          <SiFlutter size={36} />
          <div>
            <h1 className="text-xl">Flutter</h1>
            <p className="text-xs">2+ Years Experience</p>
          </div>
        </div>
        <div className="flex items-center space-x-5">
          <SiNextdotjs size={36} />
          <div>
            <h1 className="text-xl">Next Js</h1>
            <p className="text-xs">3+ Years Experience</p>
          </div>
        </div>
        <div className="flex items-center space-x-5">
          <FaFigma size={36} />
          <div>
            <h1 className="text-xl">Figma</h1>
            <p className="text-xs">4+ Years Experience</p>
          </div>
        </div>
      </div>

      <div className="w-full absolute left-0 -bottom-28">
        <div className="container mx-auto px-4 py-20 bg-indigo-500 ">
          <div className="md:w-1/2 m-auto text-center space-y-10">
            <h1 className="text-2xl md:text-4xl text-white">
              Want to work together and create amazing products with me?
            </h1>
            <div className="flex h-16 bg-indigo-900 rounded-full">
              <input
                type="text"
                placeholder="Enter your email here"
                className="bg-transparent outline-0 w-full px-6"
              />
              <button className="w-44 bg-white text-indigo-600 font-bold rounded-full">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
