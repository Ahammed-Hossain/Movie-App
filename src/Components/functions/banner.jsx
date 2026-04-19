import React, { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Banner({ movies }) {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

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

  // swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    const distance = touchStart - touchEnd;

    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
  };

  return (
    <div
      className="relative w-full overflow-hidden h-[220px] sm:h-[300px] md:h-[450px] lg:h-[600px]"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* IMAGE */}
      <div
        className="w-full h-full bg-cover bg-center cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)]"
        onClick={() => goToDetails(movies[index].id)}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movies[index].backdrop_path})`,
        }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* TEXT (FIXED MOBILE SIZE) */}
        <div className="absolute bottom-6 sm:bottom-5 left-3 sm:left-5 text-white max-w-[80%]">
          <h2 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold leading-tight">
            {movies[index].title}
          </h2>
        </div>
      </div>

      {/* LEFT BUTTON (desktop only) */}
      <button
        onClick={prevSlide}
        className="hidden md:block absolute left-3 top-1/2 -translate-y-1/2 
        bg-black/40 p-3 rounded-full text-white hover:bg-black/60 transition"
      >
        <FiChevronLeft size={24} />
      </button>

      {/* RIGHT BUTTON (desktop only) */}
      <button
        onClick={nextSlide}
        className="hidden md:block absolute right-3 top-1/2 -translate-y-1/2 
        bg-black/40 p-3 rounded-full text-white hover:bg-black/60 transition"
      >
        <FiChevronRight size={24} />
      </button>

      {/* DOTS */}
      <div className="absolute bottom-2 sm:bottom-3 w-full flex justify-center gap-2">
        {movies.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full cursor-pointer transition ${i === index ? "bg-white" : "bg-white/40"
              }`}
          />
        ))}
      </div>
    </div>
  );
}