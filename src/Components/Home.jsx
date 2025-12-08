import React, { useEffect, useState, useRef } from "react";
import Navbar from "./functions/Navbar";
import Sidebar from "./functions/Sidebar";
import MovieCard from "./functions/MovieCard";
import Recommended from "./functions/Recommended";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import AnimeSection from "./functions/AnimeSection";
import Banner from "./functions/banner";
export default function Home() {
  let [movies, setMovies] = useState([]);
  const [bannerMovies, setBannerMovies] = useState([]);
  const scrollRef = useRef(null);

  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results.slice(0, 10));
      })
      .catch((err) => console.error(err));
  }, [apiKey]);

   useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => setBannerMovies(data.results.slice(0, 5))); // 5 banner movies
  }, [apiKey]);

  return (
    <div>
      <div>
        <Navbar />
        <div className="flex w-full">
          <div className="w-[15%] bg-[#0e0f11]">
            <Sidebar />
          </div>
          <div className="w-[85%] bg-[#0e0f11] h-[100%]">
            <div>
              <Banner movies={bannerMovies}/>
            </div>
            <h1 className="text-left ml-4 mt-4 mb-2 text-white text-2xl font-bold">
              Recommended for you
            </h1>
            <div>
              <Recommended />
            </div>

            <h1 className="text-left ml-4 mt-6 mb-2 text-white text-2xl font-bold">
              Movies
            </h1>
            <div className="relative">
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg z-10 transition-colors"
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
                {movies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
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
            <h1 className="text-left ml-4 mt-6 mb-2 text-white text-2xl font-bold">
              Animations
            </h1>
            <div>
              <AnimeSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
