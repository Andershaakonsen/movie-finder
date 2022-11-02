import React from "react";

const SearchBar = () => {
  return (
    <form className="flex w-full justify-center mt-4">
      <input
        type="text"
        className="bg-radix-slate3 border border-radix-slate6 text-radix-slate12 text-sm rounded outline-none focus:border-radix-slate7 px-2 py-1 w-full w-3/4"
        placeholder="Search for movie..."
      />
      <button className="ml-2 border border-radix-slate7 hover:border-radix-slate8 bg-radix-cyan3 hover:bg-radix-cyan4 py-1 px-2 rounded-md text-radix-cyan11 hover:text-radix-cyan12">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
