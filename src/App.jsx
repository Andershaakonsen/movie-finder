import React from "react";
import { useState } from "react";
import MovieContainer from "./components/MovieContainer";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [movies, setMovies] = useState([]);
  return (
    <div className="flex flex-col items-center mt-4">
      <h1 className="text-2xl text-radix-cyan12">MOVIE FINDER</h1>
      <SearchBar setMovies={setMovies} />
      <MovieContainer movies={movies} />
    </div>
  );
};

export default App;
