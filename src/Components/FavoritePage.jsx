import React from "react";
import Navbar from "./functions/Navbar";
import Sidebar from "./functions/Sidebar";

export default function FavoritePage() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="flex w-full">
        <div className="w-[15%] bg-[#0e0f11]">
          <Sidebar />
        </div>
        <div className="w-[85%] bg-[#0e0f11] h-[100%]"></div>
      </div>
    </div>
  );
}
