import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ShowVideo() {
  const { trailerKey } = useParams();
  const navigate = useNavigate();

  if (!trailerKey)
    return <p className="text-white ml-5 mt-5">No trailer available</p>;

  return (
    <div className="bg-[#0e0f11] min-h-screen px-3 sm:px-5 py-5">

      <div className="w-full max-w-[1200px] mx-auto">

        {/* VIDEO - TOP ALIGNED */}
        <div className="relative w-full aspect-video">
          <iframe
            className="w-full h-full rounded-md"
            src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
            title="Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* BUTTON */}
        <div className="mt-4 flex justify-end">
          <button
            className="px-4 sm:px-6 py-2 bg-[rgb(72,129,6)] text-white rounded-md w-full sm:w-auto"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
        </div>

      </div>
    </div>
  );
}