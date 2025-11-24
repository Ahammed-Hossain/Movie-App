import React, { useEffect, useState } from "react";
import Navbar from "./functions/Navbar";
import Sidebar from "./functions/Sidebar";
import MovieCard from "./functions/MovieCard";

export default function MoviePage() {
  let [movies, setMovies] = useState([]);

  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results.slice(0, 10));
      })
      .catch((err) => console.error(err));
  }, [apiKey]);

  console.log(movies);

  return (
    <div>
      <div>
        <div>
          <Navbar />
        </div>
        <div className="flex w-full">
          <div className="w-[15%] bg-[#0e0f11]">
            <Sidebar />
          </div>
          <div className="w-[85%] bg-[#0e0f11] h-[100%]">
            <p className="text-white font-semibold text-left ml-5 mb-5 mt-5 text-xl">
              Movies
            </p>
            <div className="flex flex-wrap gap-4">
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
