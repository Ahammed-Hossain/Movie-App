import React, { useEffect, useState } from "react";
import MovieCard from "./functions/MovieCard";

export default function FavoritePage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favs);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#0e0f11] px-4 md:px-8">

      <p className="text-white text-xl mt-5 mb-5 font-bold">
        Your favorite items
      </p>

      {/* SAME STYLE AS MOVIE PAGE */}
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-start gap-4 w-full mb-10">

          {favorites.length > 0 ? (
            favorites.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          ) : (
            <p className="text-gray-400 mt-5">
              No favorites yet
            </p>
          )}

        </div>
      </div>

    </div>
  );
}