/* eslint-disable no-unused-vars */
import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 transition-all duration-300 ease-in-out">
      <div className="container mx-auto px-4 lg:ml-64 md:ml-32 sm:ml-16 xs:ml-8">
        <div className="flex flex-wrap justify-between items-start">
          <div className="w-full sm:w-1/2 lg:w-1/3 mb-6 lg:mb-0">
            <div className="flex items-center">
              <a href="/">
                {" "}
                <img
                  src="../../..//Images/Cellfish.png"
                  alt="CellFies Logo"
                  className="h-8 w-8 mr-2"
                />
              </a>
              <h2 className="text-2xl font-bold">CellFies</h2>
            </div>
            <p className="mt-2">
              Your one-stop platform for hassle-free mobile phone transactions.
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 mb-6 lg:mb-0">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <a href="/" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/buy" className="hover:text-gray-300">
                  Buy
                </a>
              </li>
              <li>
                <a href="/sell" className="hover:text-gray-300">
                  Sell
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>Email: info@cellfies.com</p>
            <p>Phone: (123) 456-7890</p>
            <p>Address: 123 Tech Street, Cyber City, Digital State</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} CellFies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
