import React from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Favorites from "./components/Favorites";
import Watchlist from "./components/Watchlist";
import { useState } from "react";
import { useEffect } from "react";
const App = () => {
  const [watchlist, setWatchlist] = useState(() => {
    const saved = localStorage.getItem("watchlist");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  //storing movies in local storage
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home setWatchlist={setWatchlist} />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route
          path="/watchlist"
          element={
            <Watchlist watchlist={watchlist} setWatchlist={setWatchlist} />
          }
        />
      </Routes>
    </>
  );
};

export default App;
