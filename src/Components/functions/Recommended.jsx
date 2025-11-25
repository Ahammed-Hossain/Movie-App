import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import MovieCard from "./MovieCard";

export default function Recommended() {
  const [movies, setMovies] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const scrollRef = useRef(null);

  const apiKey = process.env.REACT_APP_API_KEY;

  // 1️⃣ Load normal movies (default)
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results.slice(0, 10));
      });
  }, [apiKey]);

  // 2️⃣ Load user watched history
  useEffect(() => {
  const watched = JSON.parse(localStorage.getItem("watched_movies")) || [];

  if (watched.length > 0) {
    const last = watched[0]; // latest watched
    const genreId = last.category;

    // --- Movie fetch ---
    const movieUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`;

    // --- TV/Anime fetch ---
    const tvUrl = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_genres=${genreId}`;

    Promise.all([
      fetch(movieUrl).then((res) => res.json()),
      fetch(tvUrl).then((res) => res.json()),
    ]).then(([movieData, tvData]) => {
      const mix = [...movieData.results, ...tvData.results];
      setRecommended(mix.slice(0, 8)); // total 8 item show
    });
  }
}, [apiKey]);



  return (
    <div>

      <div className="relative mt-3">
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white w-10 h-10 rounded-full flex justify-center items-center"
          onClick={() =>
            scrollRef.current.scrollBy({ left: -200, behavior: "smooth" })
          }
        >
          <FiChevronLeft size={24} />
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-hidden gap-4 px-5 py-3"
        >
          {(recommended.length > 0 ? recommended : movies).map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white w-10 h-10 rounded-full flex justify-center items-center"
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
