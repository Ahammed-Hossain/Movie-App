import React from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  let LogoClick = () => {
    navigate("/");
  };

  return (
    <div>
      {/* Navbar */}
      <div className="h-16 flex items-center relative px-5 bg-[#0e0f11]">
        <p
          className="cursor-pointer ml-10 font-bold text-3xl text-white"
          onClick={LogoClick}
        >
          MovieApp
        </p>

        <div className="px-20">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-xl cursor-pointer" />

            <input
              type="text"
              placeholder="Search movies..."
              className="border rounded-md px-10 py-2 w-[500px] focus:outline-none text-white bg-gray-400/50"
            />
          </div>
        </div>

        <div className="ml-[800px]">
          <button className="text-white mr-5 font-semibold px-3 py-1 hover:bg-gray-400/50 rounded-md">Log in</button>
          <button className="text-white mr-5 font-semibold px-3 py-1 hover:bg-gray-400/50 rounded-md">Sign Up</button>
        </div>
      </div>

      {/* Divider Line Below Navbar */}
      <div className="w-full h-px bg-black scale-y-[0.2]" />
    </div>
  );
}
