import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import MovieCard from "./MovieCard";

export default function Recommended() {
  const [movies, setMovies] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const scrollRef = useRef(null);
  const apiKey = process.env.REACT_APP_API_KEY;

  // 1️⃣ Default popular movies
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
      .then(res => res.json())
      .then(data => setMovies(data.results.slice(0, 10)))
      .catch(err => console.error(err));
  }, [apiKey]);

  // 2️⃣ Recommended based on watched movies
  useEffect(() => {
    const watched = JSON.parse(localStorage.getItem("watched_movies")) || [];
    if (watched.length === 0) return;

    // 🎯 unique genres from watched movies
    const genres = [...new Set(watched.map(item => item.category))];

    // 🔹 Promise array for movies + tv for each genre
    const promises = genres.flatMap(genreId => [
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`)
        .then(res => res.json()),
      fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_genres=${genreId}`)
        .then(res => res.json()),
    ]);

    Promise.all(promises)
      .then(results => {
        const mix = results.flatMap(res => res.results || []);
        setRecommended(mix.slice(0, 8)); // show 8 items
      })
      .catch(err => console.error(err));

  }, [apiKey]);

  return (
    <div className="relative mt-3">
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white w-10 h-10 rounded-full flex justify-center items-center"
        onClick={() => scrollRef.current.scrollBy({ left: -200, behavior: "smooth" })}
      >
        <FiChevronLeft size={24} />
      </button>

      <div ref={scrollRef} className="flex overflow-x-hidden gap-4 px-5 py-3">
        {(recommended.length > 0 ? recommended : movies).map(item => (
          <MovieCard key={item.id} movie={item} />
        ))}
      </div>

      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white w-10 h-10 rounded-full flex justify-center items-center"
        onClick={() => scrollRef.current.scrollBy({ left: 200, behavior: "smooth" })}
      >
        <FiChevronRight size={24} />
      </button>
    </div>
  );
}
