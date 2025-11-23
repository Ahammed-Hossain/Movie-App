import React from "react";
import { useNavigate } from "react-router-dom";

export default function Recommended() {
  const navigate= useNavigate();

  let MovieClick=()=> {
 navigate("/DetailsPage")
  }

  return (
    <div>
      <div className="bg-[#3f3f3f] mr-3 ml-3 w-[200px] rounded-lg overflow-hidden cursor-pointer" onClick={MovieClick}>
        <img src="./Good boy.jpg" alt="poster" className="w-full" />
        <h3 className="p-1 font-semibold text-white">Movie Name</h3>
      </div>
    </div>
  );
}
