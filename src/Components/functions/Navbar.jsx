import React from "react";
import { FiSearch } from "react-icons/fi";

export default function Navbar() {
  return (
    <div className="">
      {" "}
      {/* Navbar Background */}
      <div className="h-16 flex items-center relative px-5  bg-[#dbdbdb]">
        {/* Logo */}
        <p className="cursor-pointer ml-10 font-black text-2xl text-black">
          MovieApp
        </p>

        {/* Search Bar */}
        <div className="px-20">
          <div className="relative">
            {/* Search Icon */}
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />

            {/* Search Input */}
            <input
              type="text"
              placeholder="Search movies..."
              className="border rounded-md 
                         px-10 py-2 w-[500px] focus:outline-none "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
