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
        <div className="w-[15%] bg-[#0e0f11]">
          <Sidebar />
        </div>
        <div className="w-[85%] bg-[#0e0f11] h-[100%]">
          <h2 className="text-white font-semibold text-left ml-5 mt-5 text-xl">Movie Details</h2>
           <div className="flex mt-5 ml-4">
          <div className="w-[180px] rounded-lg overflow-hidden">
            <img src="./Animal.jpg" alt="" />
          </div>
          <div className="text-left ml-8">
            <p className="text-white text-4xl font-bold">Movie Name</p>
            <p className="text-white text-lg">Movie year details</p>
            <p className="text-white">description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, vel.</p>
          </div>
        </div>
        </div>
        
      </div>
     
    </div>
  );
}
