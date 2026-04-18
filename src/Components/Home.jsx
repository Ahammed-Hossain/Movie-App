import React, { useEffect, useState, useRef } from "react";

import MovieCard from "./functions/MovieCard";
import Recommended from "./functions/Recommended";
import AnimeSection from "./functions/AnimeSection";
import Banner from "./functions/banner";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [bannerMovies, setBannerMovies] = useState([]);

  const scrollRef = useRef(null);
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results.slice(0, 10)))
      .catch((err) => console.log(err));
  }, [apiKey]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => setBannerMovies(data.results.slice(0, 5)));
  }, [apiKey]);

  return (
    <div>

      <Banner movies={bannerMovies} />

      <h1 className="text-white text-xl ml-4 mt-4 text-left">
        Recommended for you
      </h1>
      <Recommended />

      <h1 className="text-white text-xl ml-4 mt-6 text-left">
        Movies
      </h1>

      <div className="relative">

        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 text-white"
          onClick={() =>
            scrollRef.current.scrollBy({ left: -200, behavior: "smooth" })
          }
        >
          <FiChevronLeft size={24} />
        </button>

        <div
          ref={scrollRef}
          className="
    flex gap-3 px-3 py-3
    overflow-x-auto md:overflow-x-hidden
    scroll-smooth
  "
        >
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 text-white"
          onClick={() =>
            scrollRef.current.scrollBy({ left: 200, behavior: "smooth" })
          }
        >
          <FiChevronRight size={24} />
        </button>
      </div>

      <h1 className="text-white text-xl ml-4 mt-6 text-left">
        Animations
      </h1>

      <AnimeSection />
    </div>
  );
}