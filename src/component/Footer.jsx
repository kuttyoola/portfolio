import React from "react";
import {Link} from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaGithub,FaWhatsapp } from "react-icons/fa";
import './index.css'
const Footer = () => {
  return (
    <footer className="bg-blue-950 shadow-2xl/30 text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left text */}
        <p className="text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} HariharanM. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex space-x-6 text-2xl">
          <a
            href="https://www.instagram.com/hariuma1405?igsh=c21lNDZoajU3eXNm"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/m-hari-haran-0b8724288/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/kuttyoola"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href={`https://wa.me/9894756980?text=${encodeURIComponent("Hi Hariharan M")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 transition-colors"
          >
             <FaWhatsapp/>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


