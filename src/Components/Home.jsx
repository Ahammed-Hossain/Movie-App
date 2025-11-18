import React from "react";
import Navbar from "./functions/Navbar";
import { useNavigate } from "react-router-dom";
import Sidebar from "./functions/Sidebar";

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
          <div className="w-[85%] bg-[#168d1c] h-lvh">
            <h1 className="text-3xl font-bold text-center text-blue-600  h-[60%] bg-[#a0e2a3]">
              Banner
            </h1>
            <p>This is for Portfolio</p>
            <button className="bg-[#ca3c3c]" onClick={ClickMovie}>
              Movie
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
