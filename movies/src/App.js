import "./App.css";
import { useEffect, useState } from "react";
import Movie from "./components/Movie";
import Filter from "./components/Filter";

const App = () => {
  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=893710fb1674fc608c9a73f6944416a2&language=en-US&page=1";
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  const fetchPopular = async () => {
    const data = await fetch(url);
    const movies = await data.json();
    setPopular(movies.results);
    setFiltered(movies.results);
  };

  useEffect(() => {
    fetchPopular();
  }, []);
  return (
    <div className="App">
      <h1>Movies</h1>
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <div className="popular-movies">
        {filtered.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default App;
