import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import DetailsPage from './Components/MovieDetailsPage';
import Animation from './Components/Animation';
import MoviePage from './Components/MoviePage';
import ShowVideo from './Components/functions/ShowVideo';
import FavoritePage from './Components/FavoritePage';
import PremiumPage from './Components/PremiumPage';

function App() {
  const allrouters = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/DetailsPage/:id', element: <DetailsPage /> }, // <-- DYNAMIC ROUTE
    { path: '/animations', element: <Animation /> },
    { path: '/showVideo/:trailerKey', element: <ShowVideo /> },
    { path: '/favorites', element: <FavoritePage /> },
    { path: '/premiumMovies', element: <PremiumPage /> },
    { path: '/movies', element: <MoviePage /> }
  ]);

  return (
    <div className="App">
      <RouterProvider router={allrouters} />
    </div>
  );
}

export default App;
