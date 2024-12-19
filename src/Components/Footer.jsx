import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"; // Ikon media sosial

const Footer = () => {
  return (
    <footer className="bg-red-950 text-white py-8">
      <div className="container mx-auto text-center">
        <div className="mb-6">
          <h2 className="text-3xl font-bold">BeriBedugul</h2>
          <p className="text-sm mt-2">
            Temukan kebun stroberi terbaik di Bedugul
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaTwitter size={24} />
          </a>
        </div>

        <div className="text-sm">
          <p>&copy; 2024 BeriBedugul. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
