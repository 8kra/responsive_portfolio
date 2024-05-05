import React from "react";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-indigo-600 text-white p-4">
      <div className="container p-2 mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">Goo!</h1>
        <p className="text-xs">&copy; 2024 8kra. All Rights Reserved</p>
        <FaYoutube size={28} />
      </div>
    </footer>
  );
};

export default Footer;
