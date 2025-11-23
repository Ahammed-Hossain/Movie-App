import React, { useEffect, useState } from "react";
import Navbar from "./functions/Navbar";
import Sidebar from "./functions/Sidebar";
import MovieCard from "./functions/MovieCard";
import Recommended from "./functions/Recommended";
export default function Home() {
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

  return (
    <div>
      <div>
        <Navbar />
        <div className="flex w-full">
          <div className="w-[15%] bg-[#0e0f11]">
            <Sidebar />
          </div>
          <div className="w-[85%] bg-[#0e0f11] h-[100%]">
            <img
              src="./sukuna.png"
              alt="BannerImg"
              className="w-full h-[500px] object-cover"
            />
            <h1 className="text-left ml-4 mt-4 mb-4 text-white text-2xl font-bold">
              Recommended for you
            </h1>
            <div>
              <Recommended />
            </div>

            <h1 className="text-left ml-4 mt-4 mb-4 text-white text-2xl font-bold">
              🔥Trending Now
            </h1>
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
