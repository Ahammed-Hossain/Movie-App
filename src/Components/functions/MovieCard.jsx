import React from "react";
import { useNavigate } from "react-router-dom";

export default function MovieCard() {
  const navigate = useNavigate();

  let ClickMovie = () => {
    navigate("movieDetailsPage");
  };
  return (
    <div>
      <div className="bg-[#3f3f3f] mr-3 ml-3 w-[200px] rounded-lg overflow-hidden cursor-pointer" onClick={ClickMovie}>
        <img src="./Animal.jpg" alt="poster" className="w-full" />
        <h3 className="p-1 font-semibold text-white">Movie Name</h3>
      </div>
    </div>
  );
}
