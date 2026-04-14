import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div>
      <Navbar setIsSidebarOpen={setIsSidebarOpen} />

      <div className="flex w-full">
        {isSidebarOpen && (
          <div className="w-[13%] bg-[#0e0f11]">
            <Sidebar />
          </div>
        )}

        <div className={isSidebarOpen ? "w-[87%] bg-[#0e0f11]" : "w-full bg-[#0e0f11]"}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}