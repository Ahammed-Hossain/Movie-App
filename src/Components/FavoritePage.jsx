import React, { useEffect, useState } from "react";
import Navbar from "./functions/Navbar";
import Sidebar from "./functions/Sidebar";
import MovieCard from "./functions/MovieCard";

export default function FavoritePage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favs);
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="flex w-full">
        <div className="w-[15%] bg-[#0e0f11] h-lvh">
          <Sidebar />
        </div>
        <div className="w-[85%] bg-[#0e0f11] h-lvh">
          <p className="text-white text-left text-xl mt-3 ml-5 font-bold">Your favorite items</p>
          <div className="pt-5 pb-5 flex">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}
