
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import MovieDetailsPage from './Components/MovieDetailsPage';

function App() {
  const allrouters = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: 'movieDetailsPage', element: <MovieDetailsPage /> },
  ]);
  return (
    <div className="App">
      <RouterProvider router={allrouters} />
    </div>
  );
}

export default App;
