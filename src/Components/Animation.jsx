import React, { useEffect, useState } from "react";
import MovieCard from "./functions/MovieCard";

export default function Animation() {
  let [animes, setAnimes] = useState([]);

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
  console.log(animes);

  return (
    <div>
      <div className="flex w-full">
        <div className=" bg-[#0e0f11] h-[100%]">
          <p className="text-white font-semibold text-left ml-5 mb-5 mt-5 text-xl">
            Animations
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            {animes.map((anime) => (
              <MovieCard key={anime.id} movie={anime} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
