import React from "react";
import { BiCameraMovie } from "react-icons/bi";
const NavBar = () => {
  return (
    <>
      <nav className="flex  justify-around items-center h-14 border-b border-radix-slate6 text-sm text-radix-slate11">
        <div className="">
          <a href="/">HOME</a>
        </div>
        <div>
          <a href="/watchlist">WATCHLIST</a>
        </div>
        <div>
          <a href="/favorites">FAVORITES</a>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
