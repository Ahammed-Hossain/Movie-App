import React from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate=useNavigate();
  
  let LogoClick =()=> {
    navigate("/")
  }
    
  return (
    <div className="">
      {" "}
      {/* Navbar Background */}
      <div className="h-16 flex items-center relative px-5  bg-[#e4e4e4]">
        {/* Logo */}
        <p className="cursor-pointer ml-10 font-extrabold text-3xl text-black" onClick={LogoClick}>
          MovieApp
        </p>

        {/* Search Bar */}
        <div className="px-20">
          <div className="relative">
            {/* Search Icon */}
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl cursor-pointer" />

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
