import { useNavigate } from "react-router-dom";
import { FiVideo, FiHome } from "react-icons/fi";
import { GiBearHead } from "react-icons/gi";
import { AiOutlineStar } from "react-icons/ai"; 
import { FaCrown } from "react-icons/fa";// ⭐ Added

export default function Sidebar() {
  const navigate = useNavigate();

  // ⭐ Favorite toggle

  let homeClick = () => navigate("/");
  let ClickAnime = () => navigate("/animations");
  let MovieClick = () => navigate("/movies");
  let FavoriteClick = () => navigate("/favorites");
  

   let CheckUser=()=> {

    const loggedusers = JSON.parse(localStorage.getItem("loggedusers")) || [];
    if (loggedusers) {
      navigate("/premiumMovies");
    } else {
      alert('Please logIn!')
    }
   }

  return (
    <div>
      <div className="mt-5 ml-8 mr-8">
        <p className="text-xl font-bold text-left mb-2 pl-2 text-white cursor-pointer">
          CATAGORIES
        </p>

        <div className="w-full h-px bg-black scale-y-[0.2] mb-5" />

        {/* Home */}
        <div className="flex gap-3 items-center mb-6 hover:bg-[#3d3d3d] p-2 rounded-lg cursor-pointer">
          <FiHome className="text-white text-xl" />
          <p
            className="text-xl font-bold text-left text-white"
            onClick={homeClick}
          >
            Home
          </p>
        </div>

        {/* Movies */}
        <div
          className="flex gap-3 items-center mb-6 hover:bg-[#3d3d3d] p-2 rounded-lg cursor-pointer"
          onClick={MovieClick}
        >
          <FiVideo className="text-white text-xl" />
          <p className="text-xl font-bold text-left text-white">Movies</p>
        </div>

        {/* Animation */}
        <div
          className="flex gap-3 items-center mb-6 hover:bg-[#3d3d3d] p-2 rounded-lg cursor-pointer"
          onClick={ClickAnime}
        >
          <GiBearHead className="text-white text-xl" />
          <p className="text-xl font-bold text-left text-white ">Animation</p>
        </div>

        {/* ⭐ Favorites with Star Toggle */}
        <div
          className="flex gap-3 items-center mb-6 hover:bg-[#3d3d3d] p-2 rounded-lg cursor-pointer"
          onClick={FavoriteClick}
        >
          <AiOutlineStar className="text-white text-2xl" />

          <p className="text-xl font-bold text-left text-white ">Favorites</p>
        </div>
        <div
          className="flex gap-3 items-center mb-6 hover:bg-[#3d3d3d] p-2 rounded-lg cursor-pointer"
        >
          <FaCrown className="text-white text-xl" />
          <p className="text-xl font-bold text-left text-white " onClick={CheckUser}>Premium</p>
        </div>
      </div>
    </div>
  );
}
