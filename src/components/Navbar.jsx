import React from "react";

const NavBar = () => {
  return (
    <div className="flex justify-around items-center h-14 border-b border-radix-slate6  ">
      <div className="text-radix-slate11 hover:text-radix-slate12">
        <a href="/">HOME</a>
      </div>
      <div className="text-radix-slate11 hover:text-radix-slate12">
        <a href="/watchlist">WATCHLIST</a>
      </div>
      <div className="text-radix-slate11 hover:text-radix-slate12">
        <a href="/favorites">FAVORITES</a>
      </div>
    </div>
  );
};

export default NavBar;
