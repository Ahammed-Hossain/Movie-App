import React, { useEffect, useState } from "react";
import MovieCard from "./functions/MovieCard";

export default function MoviePage() {
  let [movies, setMovies] = useState([]);

  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&without_genres=16`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results.slice(0, 20));
      })
      .catch((err) => console.error(err));
  }, [apiKey]);


return (
  <div className="w-full min-h-screen bg-[#0e0f11] px-4 md:px-8">
    
    <p className="text-white font-semibold text-xl mt-5 mb-5">
      Movies
    </p>

    <div className="flex justify-center">
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 w-full mb-10">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>

  </div>
);
}