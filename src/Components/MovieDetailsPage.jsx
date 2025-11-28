import React, { useEffect, useState } from "react";
import Navbar from "./functions/Navbar";
import Sidebar from "./functions/Sidebar";
import { useNavigate, useParams } from "react-router-dom";

export default function DetailsPage() {
  const [movie, setMovie] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);
  const { id } = useParams();
  const apiKey = process.env.REACT_APP_API_KEY;
  const navigate = useNavigate();

  // 1. Movie details fetch
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((err) => console.error(err));
  }, [id, apiKey]);

  // 2. Movie trailer fetch
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        const youtubeTrailer = data.results.find(
          (vid) => vid.type === "Trailer" && vid.site === "YouTube"
        );
        setTrailerKey(youtubeTrailer?.key || null);
      })
      .catch((err) => console.error(err));
  }, [id, apiKey]);

  if (!movie) return <p className="text-white ml-5 mt-5">Loading...</p>;

  const trackMovie = (movie) => {
  let watched = JSON.parse(localStorage.getItem("watched_movies")) || [];

  watched = watched.filter((item) => item.id !== movie.id);

  watched.unshift({
    id: movie.id,
    title: movie.title,
    poster: movie.poster_path,
    category: movie.genres?.[0]?.id ? movie.genres[0].id : 28,
    type: movie.first_air_date ? "tv" : "movie",
  });

  if (watched.length > 7) watched = watched.slice(0, 7);

  localStorage.setItem("watched_movies", JSON.stringify(watched));
};


  const ClickWatch = () => {
    trackMovie(movie);
    navigate(`/showVideo/${trailerKey}`);
  };

  const ClickFav=()=> {
    navigate(`/favoritepage`)
  }

  return (
    <div className="bg-[#0e0f11] min-h-screen">
      <div>
        <Navbar />
      </div>

      <div className="flex w-full">
        {/* Sidebar */}
        <div className="w-[15%]">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="w-[85%] p-5">
          <h2 className="text-white text-left font-semibold text-xl mb-5">
            Details
          </h2>

          <div className="flex gap-8">
            {/* Movie Poster */}
            <div className="w-[180px] rounded-lg overflow-hidden">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                className="w-full"
              />
            </div>

            {/* Movie Info */}
            <div className="text-white text-left">
              <p className="text-4xl  font-bold">{movie.title}</p>
              <p className="text-lg mt-3">{movie.release_date}</p>
              <p className="mt-3">{movie.overview}</p>

              <div className="mt-10 flex gap-4">
                <button
                  className="px-6 py-2 bg-[rgb(72,129,6)] rounded-md font-bold text-xl"
                  onClick={ClickWatch}
                  disabled={!trailerKey}
                >
                  Watch Trailer
                </button>
                <button className="px-6 py-2 bg-[rgb(72,129,6)] rounded-md font-bold text-xl" onClick={ClickFav}>
                  Set as favorite
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
