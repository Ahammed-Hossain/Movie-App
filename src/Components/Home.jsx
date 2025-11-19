import React from "react";
import Navbar from "./functions/Navbar";
import Sidebar from "./functions/Sidebar";
import MovieCard from "./functions/MovieCard";
export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
        <div className="flex w-full">
          <div className="w-[15%] bg-[#0e0f11]">
            <Sidebar />
          </div>
          <div className="w-[85%] bg-[#0e0f11] h-lvh">
            <img
              src="./sukuna.png"
              alt="BannerImg"
              className="w-full h-[60%] object-cover"
            />

            <h1 className="text-left ml-4 mt-4 mb-4 text-white text-2xl font-bold">
              🔥Trending Now
            </h1>
            <div>
              <MovieCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
