import React, { useEffect, useState } from "react";
import MovieCard from "./functions/MovieCard";

export default function Animation() {
  const [animes, setAnimes] = useState([]);

  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=16`
    )
      .then((res) => res.json())
      .then((data) => {
        setAnimes(data.results.slice(0, 20));
      })
      .catch((err) => console.error(err));
  }, [apiKey]);

  return (
    <div className="w-full min-h-screen bg-[#0e0f11] px-4 md:px-8">

      <p className="text-white font-semibold text-xl mt-5 mb-5">
        Animations
      </p>

      <div className="flex justify-center">
       <div className="flex flex-wrap justify-start gap-2 w-full mb-10">
          {animes.map((anime) => (
            <MovieCard key={anime.id} movie={anime} />
          ))}
        </div>
      </div>
    </div>
  );
}