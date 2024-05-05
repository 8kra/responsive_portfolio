import React from "react";

const Work = () => {
  return (
    <div className="container p-5 mx-auto py-20 space-y-10">
      <div className="md:w-1/2 m-auto space-y-5 text-center">
        <h2 className="text-4xl md:text-5xl font-bold">What i'm working on </h2>
        <p className="text-sm text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8">
        <div className="border rounded-xl">
          <img src="/pr1.svg" alt="" className="rounded-t-xl" />
          <div className="p-4 space-y-2">
            <h1 className="text-lg font-semibold">E-commerce App</h1>
            <p className="text-sm text-gray-500">Mobile Development</p>
            <button className="px-5 py-2 bg-indigo-500 rounded-md text-white">
              Visit
            </button>
          </div>
        </div>
        <div className="border rounded-xl">
          <img src="/pr2.svg" alt="" className="rounded-t-xl" />
          <div className="p-4 space-y-2">
            <h1 className="text-lg font-semibold">E-commerce App</h1>
            <p className="text-sm text-gray-500">Mobile Development</p>
            <button className="px-5 py-2 bg-indigo-500 rounded-md text-white">
              Visit
            </button>
          </div>
        </div>
        <div className="border rounded-xl">
          <img src="/pr1.svg" alt="" className="rounded-t-xl" />
          <div className="p-4 space-y-2">
            <h1 className="text-lg font-semibold">E-commerce App</h1>
            <p className="text-sm text-gray-500">Mobile Development</p>
            <button className="px-5 py-2 bg-indigo-500 rounded-md text-white">
              Visit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
