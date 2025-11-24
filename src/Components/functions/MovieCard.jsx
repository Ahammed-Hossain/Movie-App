import React from "react";
import { useNavigate } from "react-router-dom";

export default function MovieCard({ movie }) {
  const navigate = useNavigate();

  if (!movie) return null; // extra safety

  const { poster_path, title, id } = movie;

  let ClickMovie = () => {
    navigate(`/DetailsPage/${id}`);
  };

  return (
    <div>
      <div
        className="bg-[#3f3f3f] mr-3 ml-3 w-[180px] rounded-lg overflow-hidden cursor-pointer"
        onClick={ClickMovie}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
          className="w-full"
        />

        <h3 className="p-1 font-semibold text-white truncate">{title}</h3>
      </div>
    </div>
  );
}