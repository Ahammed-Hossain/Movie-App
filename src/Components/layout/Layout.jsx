import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-[#0e0f11] min-h-screen w-full">

      {/* NAVBAR (TOP FULL WIDTH) */}
      <Navbar setIsSidebarOpen={setIsSidebarOpen} />

      {/* BODY AREA (SIDEBAR + CONTENT) */}
      <div className="flex">

        {/* SIDEBAR */}
        <div className="hidden md:block md:w-[13%] bg-[#0e0f11]">
          <Sidebar setIsSidebarOpen={setIsSidebarOpen} />
        </div>

        {/* MOBILE SIDEBAR (OVERLAY) */}
        <div
          className={`
            fixed top-0 left-0 h-full w-[65%] max-w-[300px]
            bg-[#0e0f11] z-50 md:hidden
            transition-transform duration-300
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <Sidebar setIsSidebarOpen={setIsSidebarOpen} />
        </div>

        {/* OVERLAY */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* MAIN CONTENT */}
        <div className="flex-1 w-full min-w-0">
          <Outlet />
        </div>

      </div>
    </div>
  );
}