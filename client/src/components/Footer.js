// Footer.js
import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa"; // Import icons from react-icons

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-4">
      <div className="container mx-auto text-center">
        <div className="text-sm mb-2">
          © {new Date().getFullYear()} Weather Dashboard. All rights reserved.
        </div>
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/Umangg7605"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              className="hover:text-gray-300 transition duration-300"
              size={24}
            />
          </a>
          <a
            href="https://instagram.com/umangg7605"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              className="hover:text-gray-300 transition duration-300"
              size={24}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
