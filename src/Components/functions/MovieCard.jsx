import React from "react";
import { useNavigate } from "react-router-dom";

export default function MovieCard({ movie }) {
  const navigate = useNavigate();

  if (!movie) return null;

  const { poster_path, title, id } = movie;

  let ClickMovie = () => {
    navigate(`/DetailsPage/${id}`);
  };

  return (
    <div
      className="
        bg-[#3f3f3f] 
        w-[120px] sm:w-[150px] md:w-[180px] 
        rounded-lg overflow-hidden cursor-pointer
        flex-shrink-0
      "
      onClick={ClickMovie}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={title}
        className="w-full h-[180px] sm:h-[220px] md:h-[260px] object-cover"
      />

      <h3 className="p-1 text-xs sm:text-sm md:text-base font-semibold text-white truncate">
        {title}
      </h3>
    </div>
  );
}