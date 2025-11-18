import React from "react";
import Navbar from "./functions/Navbar";
import Sidebar from "./functions/Sidebar";

export default function MovieDetailsPage() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="flex w-full">
        <div className="w-[15%] bg-[#c78888]">
          <Sidebar />
        </div>
        <div className="w-[85%] bg-[#168d1c] h-lvh">
          <p>This movie details Page</p>
        </div>
      </div>
    </div>
  );
}
