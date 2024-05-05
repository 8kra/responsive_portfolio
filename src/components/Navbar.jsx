import React from "react";

const Navbar = () => {
  return (
    <div className="p-5 container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-900">Goo!</h1>
      <ul className="hidden md:flex items-center space-x-8 font-semibold">
        <li>Home</li>
        <li>About</li>
        <li>Contact me</li>
        <li>Works</li>
        <li>Blog</li>
      </ul>
      <button className="px-5 py-2 bg-indigo-500 text-white rounded-md">
        Lets Talk
      </button>
    </div>
  );
};

export default Navbar;
