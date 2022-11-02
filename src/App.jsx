import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import MoviesRow from "./components/MoviesRow";
import NavBar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [movies, setMovies] = useState(() => {
    const saved = localStorage.getItem("movies");
    const initalValue = JSON.parse(saved);
    return initalValue || [];
  });

  //storing movies in local storage
  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  const saved = localStorage.getItem("movies");

  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center container mx-auto">
        <h1 className="w-4/5 text-2xl mt-8 text-radix-cyan12 font-pacifico">
          Movie Finder
        </h1>
        <SearchBar movies={movies} setMovies={setMovies} />
        <MoviesRow movies={movies} />
      </div>
    </div>
  );
};

export default App;
