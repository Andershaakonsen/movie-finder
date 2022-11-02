import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { titleArr } from "../dataj";

const baseUrl = "http://www.omdbapi.com/";
const apiKey = "27d8b269";

const SearchBar = ({ setMovies, movies }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(filteredList);
    console.log(movies);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
    setInput("");
  };

  const handleSelect = (el) => {
    setInput(el);
  };

  //Computational
  const filteredList = titleArr.filter((el) =>
    el.toLowerCase().includes(input.toLowerCase())
  );

  const fetchData = async () => {
    const titleSearch = `${baseUrl}?t=${input}&apikey=${apiKey}`;
    console.log(titleSearch);

    await fetch(titleSearch)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === "False") {
          throw new Error();
        }
        return setMovies((prevState) => [...prevState, data]);
      })
      .catch((error) =>
        toast.error("Failed to fetch data!", {
          position: toast.POSITION.TOP_RIGHT,
        })
      );
  };

  return (
    <form
      className="grid grid-cols-12 gap-6 w-4/5 mx-auto items-center mt-4 "
      onSubmit={handleSubmit}
    >
      <div className="relative col-span-10">
        {" "}
        <input
          type="text"
          className="bg-radix-slate3 border border-radix-slate6 text-radix-slate12 text-sm rounded outline-none focus:border-radix-slate7 px-2 py-1 w-full"
          placeholder="search for movie..."
          onChange={handleChange}
          value={input}
        />
        {!!input && (
          <div className="absolute top8 left-0 bg-radix-slate3  opacity-70 max-h-44 overflow-y-scroll scroll w-full">
            <ul className="">
              {filteredList.map((el) => (
                <li
                  className="border-b border-radix-slate6 hover:border-radix-slate7 p-2 hover:bg-radix-slate4 hover:cursor-pointer hover:pointer hover:text-raix-slate12"
                  key={el}
                  onClick={() => handleSelect(el)}
                >
                  {el}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <button
        className="col-span-2 border border-radix-slate7 hover:border-radix-slate8 bg-radix-cyan3 hover:bg-radix-cyan4 py-1 px-1 w-20 rounded-md text-sm text-radix-cyan11 hover:text-radix-cyan12"
        type="submit"
      >
        SEARCH
      </button>

      <ToastContainer />
    </form>
  );
};

export default SearchBar;
