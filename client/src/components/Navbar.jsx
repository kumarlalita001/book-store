import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo and Store Name */}
        <Link to={"/"} className="flex items-center">
          <img
            src="data:image/png;base64,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"
            alt="BookStore Logo"
            className=" h-10 w-16 "
          />
          <span className="text-xl  font-mono font-extrabold text-gray-800">
            UR<span className="text-cyan-400">School</span>
          </span>
        </Link>

        {/* Right Side Links */}
        <div className="flex items-center space-x-6">
          <Link
            to={"login"}
            className="text-gray-100 py-2 bg-blue-600 px-4 rounded-md hover:bg-blue-500"
          >
            Login
          </Link>
          <Link
            to={"register"}
            className="text-gray-100 py-2 bg-blue-600 px-4 rounded-md hover:bg-blue-500"
          >
            Register
          </Link>
          <Link to={"cart"} className="relative">
            <div className="text-gray-800 hover:text-blue-500">
              <svg
                className="w-10 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-2 7h12.6m-10-7h8m-8 0l-2 7m10-7l2-7m-5 12a1 1 0 110-2 1 1 0 010 2zm-6 0a1 1 0 110-2 1 1 0 010 2z"
                ></path>
              </svg>
            </div>
            <span className="absolute top-0 right-[0] inline-flex items-center justify-center px-[4px] py-[2px] text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
              {cartCount || 0}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
