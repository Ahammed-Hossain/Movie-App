import React from 'react'
import Navbar from './functions/Navbar'
import Sidebar from './functions/Sidebar'
import MovieCard from './functions/MovieCard'

export default function MoviePage() {
  return (
    <div>
        <div>
            <div>
              <Navbar />
            </div>
            <div className="flex w-full">
              <div className="w-[15%] bg-[#0e0f11]">
                <Sidebar />
              </div>
              <div className="w-[85%] bg-[#0e0f11] h-[100%]">
                <p className="text-white font-semibold text-left ml-5 mb-5 mt-5 text-xl">Movies</p>
                <MovieCard />
              </div>
            </div>
          </div>
    </div>
  )
}
