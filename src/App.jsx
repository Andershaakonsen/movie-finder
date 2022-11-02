import React from "react";
import MovieContainer from "./components/MovieContainer";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <div className="flex flex-col items-center mt-4">
      <h1 className="text-2xl text-radix-cyan12">MOVIE FINDER</h1>
      <SearchBar />
      <MovieContainer />
    </div>
  );
};

export default App;
