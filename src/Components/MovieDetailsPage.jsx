import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

export default function DetailsPage() {
  const [movie, setMovie] = useState(null);
  const [isFav, setIsFav] = useState(false);
  const [trailerKey, setTrailerKey] = useState(null);

  const { id } = useParams();
  const apiKey = process.env.REACT_APP_API_KEY;
  const navigate = useNavigate();

  // 🟢 Fetch Movie & Check Favorite
  useEffect(() => {
    const loadMovie = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
        );
        const data = await res.json();
        setMovie(data);

        // Check if already in favorites
        const favs = JSON.parse(localStorage.getItem("favorites")) || [];
        setIsFav(favs.some((item) => item.id === data.id));
      } catch (error) {
        console.error(error);
      }
    };

    loadMovie();
  }, [id, apiKey]);

  // 🟢 Fetch Trailer
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

  // 🟢 Track watched movies
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

  // 🟢 Add Favorite
  const addToFavorite = () => {
    let favs = JSON.parse(localStorage.getItem("favorites")) || [];

    if (!favs.some((item) => item.id === movie.id)) {
      favs.push(movie);
      localStorage.setItem("favorites", JSON.stringify(favs));
      setIsFav(true);
      navigate("/favorites");
    }
  };

  // 🔴 Delete Favorite
  const deleteFromFavorite = () => {
    let favs = JSON.parse(localStorage.getItem("favorites")) || [];
    favs = favs.filter((item) => item.id !== movie.id);
    localStorage.setItem("favorites", JSON.stringify(favs));
    setIsFav(false);
  };

  return (
    <div className="bg-[#0e0f11] min-h-screen">

      <div className="flex w-full">

        {/* Main Content */}
        <div className="p-3 sm:p-5 w-full">

          <h2 className="text-white text-left font-semibold text-lg sm:text-xl mb-4 sm:mb-5">
            Details
          </h2>

          {/* RESPONSIVE LAYOUT */}
          <div className="flex flex-col md:flex-row gap-5 md:gap-8">

            {/* Poster */}
            <div className="w-[140px] sm:w-[160px] md:w-[180px] mx-auto md:mx-0 rounded-lg overflow-hidden">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                className="w-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="text-white text-center md:text-left">

              <p className="text-2xl sm:text-3xl md:text-4xl font-bold">
                {movie.title}
              </p>

              <p className="text-sm sm:text-base md:text-lg mt-2 sm:mt-3">
                {movie.release_date}
              </p>

              <p className="mt-3 text-sm sm:text-base leading-relaxed">
                {movie.overview}
              </p>

              {/* BUTTONS */}
              <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center md:items-start">

                {/* Watch */}
                <button
                  className="w-full sm:w-auto px-4 sm:px-6 py-2 bg-[rgb(72,129,6)] rounded-md font-bold text-base sm:text-xl"
                  onClick={ClickWatch}
                  disabled={!trailerKey}
                >
                  Watch Trailer
                </button>

                {/* Favorite */}
                {isFav ? (
                  <button
                    className="w-full sm:w-auto px-4 sm:px-6 py-2 bg-red-600 rounded-md font-bold text-base sm:text-xl"
                    onClick={deleteFromFavorite}
                  >
                    Delete from Favorite
                  </button>
                ) : (
                  <button
                    className="w-full sm:w-auto px-4 sm:px-6 py-2 bg-[rgb(72,129,6)] rounded-md font-bold text-base sm:text-xl"
                    onClick={addToFavorite}
                  >
                    Add to Favorite
                  </button>
                )}

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}