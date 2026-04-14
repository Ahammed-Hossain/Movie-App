import React, { useEffect, useState } from "react";

import MovieCard from "./functions/MovieCard";

export default function FavoritePage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favs);
  }, []);

  return (
    <div>
      <div className="flex w-full">
        <div className="bg-[#0e0f11] h-lvh">
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
