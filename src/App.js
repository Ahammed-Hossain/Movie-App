
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import DetailsPage from './Components/MovieDetailsPage';
import Animation from './Components/Animation';
import MoviePage from './Components/MoviePage';

function App() {
  const allrouters = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: 'DetailsPage', element: <DetailsPage /> },
    { path: 'animations', element: <Animation /> },
    { path: 'movies', element: <MoviePage /> }
  ]);
  return (
    <div className="App">
      <RouterProvider router={allrouters} />
    </div>
  );
}

export default App;
