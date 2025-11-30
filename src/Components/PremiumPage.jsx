import React, { useEffect, useState } from "react";
import Navbar from "./functions/Navbar";
import Sidebar from "./functions/Sidebar";
import MovieCard from "./functions/MovieCard";

export default function PremiumPage() {
  let [movies, setMovies] = useState([]);

  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&without_genres=16`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results.slice(0, 7));
      })
      .catch((err) => console.error(err));
  }, [apiKey]);

  return (
    <div>
      <div>
        <div>
          <Navbar />
        </div>
        <div className="flex w-full">
          <div className="w-[15%] bg-[#0e0f11] h-lvh">
            <Sidebar />
          </div>
          <div className="w-[85%] bg-[#0e0f11] h-lvh">
            <p className="text-white text-left text-xl mt-3 ml-5 font-bold">
              Premium Movies
            </p>
            <div className="flex flex-wrap gap-4 mb-10 mt-5">
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
