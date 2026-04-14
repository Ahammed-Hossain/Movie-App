import React, { useState } from "react";
import { FiSearch, FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import SignInpage from "../functions/SignInpage";

export default function Navbar({ setIsSidebarOpen }) {
  const [open, setOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    userName: "",
  });

  const handleOpenLogin = () => {
    setIsSignUp(false);
    setOpen(true);
  };

  const handleOpenSignUp = () => {
    setIsSignUp(true);
    setOpen(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    window.location.href = "/";
  };

  const handleClose = () => setOpen(false);

  let LogoClick = () => {
    navigate("/");
  };

  return (
    <div>
      {/* Navbar */}
      <div className="h-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-3 bg-[#0e0f11]">

        {/* LEFT SIDE (Hamburger + Logo + Search) */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">

          <div className="flex items-center gap-3 w-full sm:w-auto">

            {/* Hamburger Icon */}
            <FiMenu
              className="text-white text-3xl cursor-pointer"
              onClick={() =>
                setIsSidebarOpen(prev => !prev)
              }
            />

            {/* Logo */}
            <p
              className="cursor-pointer font-bold text-lg sm:text-xl md:text-2xl text-white mr-4 md:mr-6"
              onClick={LogoClick}
            >
              Movie-Hub
            </p>
          </div>

          {/* Search */}
          <div className="w-full sm:w-auto">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-lg md:text-xl cursor-pointer" />

              <input
                type="text"
                placeholder="Search movies..."
                className="border rounded-md px-10 py-2 
                w-full sm:w-[250px] md:w-[350px] lg:w-[450px]
                focus:outline-none text-white bg-gray-400/50 
                text-sm md:text-base"
              />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE (Buttons) */}
        <div className="flex items-center gap-2 md:gap-3 mt-3 md:mt-0">
          {currentUser ? (
            <button
              className="text-white text-sm md:text-base font-semibold px-2 md:px-3 py-1 hover:bg-gray-400/50 rounded-md"
              onClick={handleLogout}
            >
              Log Out
            </button>
          ) : (
            <button
              className="text-white text-sm md:text-base font-semibold px-2 md:px-3 py-1 hover:bg-gray-400/50 rounded-md"
              onClick={handleOpenLogin}
            >
              Log In
            </button>
          )}

          <button
            className="text-white text-sm md:text-base font-semibold px-2 md:px-3 py-1 hover:bg-gray-400/50 rounded-md"
            onClick={handleOpenSignUp}
          >
            Sign Up
          </button>

          <SignInpage
            open={open}
            onClose={handleClose}
            isSignUp={isSignUp}
            setIsSignUp={setIsSignUp}
            formData={formData}
            setFormData={setFormData}
          />
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-black scale-y-[0.2]" />
    </div>
  );
}