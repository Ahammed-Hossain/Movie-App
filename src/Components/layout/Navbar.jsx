import React, { useState } from "react";
import { FiSearch, FiMenu, FiLogIn, FiUserPlus, FiLogOut } from "react-icons/fi";
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

  const LogoClick = () => {
    navigate("/");
  };

  return (
    <div>

      {/* NAVBAR TOP */}
      <div className="h-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-3 bg-[#0e0f11]">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-3 w-full md:w-auto relative">

          {/* Hamburger (same for mobile) */}
          <FiMenu
            className="text-white text-3xl cursor-pointer"
            onClick={() => setIsSidebarOpen(prev => !prev)}
          />

          {/* Logo (mobile center, desktop normal) */}
          <p
            onClick={LogoClick}
            className="
              cursor-pointer font-bold text-lg sm:text-xl md:text-2xl text-white
              absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:ml-4
            "
          >
            Movie-Hub
          </p>

          {/* SEARCH (DESKTOP ONLY - ORIGINAL POSITION RESTORED) */}
          <div className="hidden md:block ml-6">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-lg" />

              <input
                type="text"
                placeholder="Search movies..."
                className="border rounded-md px-10 py-2 w-[250px] lg:w-[400px]
                focus:outline-none text-white bg-gray-400/50"
              />
            </div>
          </div>

        </div>

        {/* RIGHT SIDE (DESKTOP ONLY BUTTONS) */}
        <div className="hidden md:flex items-center gap-3">

          {currentUser ? (
            <button
              className="text-white font-semibold px-3 py-1 hover:bg-gray-400/50 rounded-md"
              onClick={handleLogout}
            >
              Log Out
            </button>
          ) : (
            <button
              className="text-white font-semibold px-3 py-1 hover:bg-gray-400/50 rounded-md"
              onClick={handleOpenLogin}
            >
              Log In
            </button>
          )}

          <button
            className="text-white font-semibold px-3 py-1 hover:bg-gray-400/50 rounded-md"
            onClick={handleOpenSignUp}
          >
            Sign Up
          </button>

        </div>
      </div>

      {/* MOBILE ICONS (UNCHANGED POSITION, SAFE) */}
      <div className="md:hidden absolute top-3 right-4 flex items-center gap-3">

        {currentUser ? (
          <button onClick={handleLogout} className="text-white text-xl">
            <FiLogOut />
          </button>
        ) : (
          <button onClick={handleOpenLogin} className="text-white text-xl">
            <FiLogIn />
          </button>
        )}

        <button onClick={handleOpenSignUp} className="text-white text-xl">
          <FiUserPlus />
        </button>
      </div>

      {/* MOBILE SEARCH */}
      <div className="md:hidden px-4 pb-3 bg-[#0e0f11]">
        <div className="relative mt-3">
          <FiSearch className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-base" />

          <input
            type="text"
            placeholder="Search movies..."
            className="border rounded-md px-8 py-1.5 w-full
            focus:outline-none text-white bg-gray-400/50 text-sm"
          />
        </div>
      </div>

      {/* MODAL */}
      <SignInpage
        open={open}
        onClose={handleClose}
        isSignUp={isSignUp}
        setIsSignUp={setIsSignUp}
        formData={formData}
        setFormData={setFormData}
      />

      <div className="w-full h-px bg-white scale-y-[0.2]" />
    </div>
  );
}