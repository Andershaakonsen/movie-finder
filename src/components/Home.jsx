import React from "react";
import { Suspense } from "react";
import { useEffect } from "react";
import { useState } from "react";
import MoviesRow from "./MoviesRow";

const SearchBar = React.lazy(() => import("./SearchBar"));

const Home = ({ setWatchlist }) => {
  const [movies, setMovies] = useState(() => {
    const saved = localStorage.getItem("movies");
    const initalValue = JSON.parse(saved);
    return initalValue || [];
  });

  //storing movies in local storage
  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  return (
    <div>
      <div className="flex flex-col items-center container mx-auto">
        <h1 className="w-4/5 text-2xl mt-8 text-radix-cyan12 font-pacifico">
          Movie Finder
        </h1>
        <Suspense
          fallback={
            <div class="bg-radix-slate3 h-4 rounded-md border slate-border">
              Loading...
            </div>
          }
        >
          <SearchBar movies={movies} setMovies={setMovies} />
        </Suspense>
        <MoviesRow
          movies={movies}
          setWatchlist={setWatchlist}
          setMovies={setMovies}
        />
      </div>
    </div>
  );
};

export default Home;
