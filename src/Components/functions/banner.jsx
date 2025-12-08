import React, { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Banner({ movies }) {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % movies.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [movies.length]);

  const prevSlide = () => {
    setIndex(index === 0 ? movies.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex((index + 1) % movies.length);
  };

   const goToDetails = (id) => {
    navigate(`/DetailsPage/${id}`);
  };

  if (!movies || movies.length === 0) return null;

  return (
    <div className="relative w-full h-[600px] overflow-hidden rounded-lg shadow-lg">
      {/* Slider Images */}
      <div
        className="w-full h-full bg-cover bg-center duration-500 cursor-pointer"
        onClick={() => goToDetails(movies[index].id)}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movies[index].backdrop_path})`,
        }}
      >
        <div className="absolute bottom-5 left-5 text-white">
          <h2 className="text-3xl font-bold drop-shadow-lg">
            {movies[index].title}
          </h2>
        </div>
      </div>

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 p-3 rounded-full text-white"
      >
        <FiChevronLeft size={24} />
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 p-3 rounded-full text-white"
      >
        <FiChevronRight size={24} />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-3 w-full flex justify-center gap-2">
        {movies.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
