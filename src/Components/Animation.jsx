import React from "react";
import MovieCard from "./functions/MovieCard";
import Navbar from "./functions/Navbar";
import Sidebar from "./functions/Sidebar";

export default function Animation() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="flex w-full">
        <div className="w-[15%] bg-[#0e0f11]">
          <Sidebar />
        </div>
        <div className="w-[85%] bg-[#0e0f11] h-[100%]">
          <p className="text-white font-semibold text-left ml-5 mb-5 mt-5 text-xl">Animations</p>
          <MovieCard />
        </div>
      </div>
    </div>
  );
}
