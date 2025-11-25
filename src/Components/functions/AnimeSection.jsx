import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import MovieCard from "./MovieCard";

export default function AnimeSection() {
  let [animes, setAnimes] = useState([]);
  const scrollRef = useRef(null);

  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=16`
    )
      .then((res) => res.json())
      .then((data) => {
        setAnimes(data.results.slice(0, 10));
      })
      .catch((err) => console.error(err));
  }, [apiKey]);
  console.log(animes);

  return (
    <div>
      {" "}
      <div className="relative">
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg z-10 transition-colors"
          onClick={() =>
            scrollRef.current.scrollBy({ left: -200, behavior: "smooth" })
          }
        >
          <FiChevronLeft size={24} />
        </button>

        <div ref={scrollRef} className="flex overflow-x-hidden gap-4 px-5 py-3">
          {animes.map((anime) => (
            <MovieCard key={anime.id} movie={anime} />
          ))}
        </div>

        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg z-10 transition-colors"
          onClick={() =>
            scrollRef.current.scrollBy({ left: 200, behavior: "smooth" })
          }
        >
          <FiChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
