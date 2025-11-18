import React from "react";
import Navbar from "./functions/Navbar";
import { useNavigate } from "react-router-dom";
import Sidebar from "./functions/Sidebar";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

export default function Home() {
  const navigate = useNavigate();

  let ClickMovie = () => {
    navigate("movieDetailsPage");
  };
  return (
    <div>
      <div>
        <Navbar />
        <div className="flex w-full">
          <div className="w-[15%] bg-[#c78888]">
            <Sidebar/>
          </div>
          <div className="w-[85%] bg-[#1f2541] h-lvh">
           <img src="./sukuna.png" alt="BannerImg" className="w-full h-[60%] object-cover" />

            <h1 className="text-left ml-5 mt-5 text-white text-2xl font-semibold">Trending Now</h1>

            <button className="bg-[#ca3c3c]" onClick={ClickMovie}>
              Movie
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
