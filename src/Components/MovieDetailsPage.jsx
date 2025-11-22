import React from "react";
import Navbar from "./functions/Navbar";
import Sidebar from "./functions/Sidebar";

export default function DetailsPage() {
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
          <h2 className="text-white font-semibold text-left ml-5 mt-5 text-xl">
            Details
          </h2>
          <div className="flex mt-5 ml-4">
            <div className="w-[180px] rounded-lg overflow-hidden">
              <img src="./Animal.jpg" alt="" />
            </div>
            <div className="text-left ml-8">
              <p className="text-white text-4xl font-bold">Movie Name</p>
              <p className="text-white text-lg mt-3">Movie year details</p>
              <p className="text-white mt-3">
                description Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Nisi, vel.
              </p>

              <div className="mt-10">
                <button className="text-white px-6 py-2 bg-[rgb(72,129,6)] rounded-md font-bold text-xl">
                  Watch Online
                </button>
                <button className="text-white px-6 py-2 bg-[rgb(72,129,6)] rounded-md ml-5 font-bold text-xl">
                  Download
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 ml-5 mt-20">
            <p className="text-white font-semibold text-xl">Top Cast</p>
            <p className="text-white text-[16px]">(21)</p>
          </div>
          <div className="mt-5">
            <div className="bg-[#0e0f11] mr-3 ml-3 w-[180px] overflow-hidden cursor-pointer">
              <img src="./Animal.jpg" alt="poster" className="w-full rounded-md" />
              <h3 className="p-1 font-semibold text-white">Cast Name</h3>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
