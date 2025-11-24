import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function ShowVideo() {
  const { trailerKey } = useParams();
  const navigate = useNavigate();

  if (!trailerKey) return <p className="text-white ml-5 mt-5">No trailer available</p>;

  return (
    <div className="bg-[#0e0f11] min-h-screen flex flex-col items-start pt-10 px-5">
      {/* Video Frame */}
      <div className="w-[90%] max-w-[1200px] h-[700px] relative pl-16">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
          title="Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-md"
        ></iframe>

        {/* Button - right corner, below the frame */}
        <div className="absolute bottom-[-50px] right-0">
          <button
            className="px-6 py-2 bg-[rgb(72,129,6)] text-white rounded-md"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
