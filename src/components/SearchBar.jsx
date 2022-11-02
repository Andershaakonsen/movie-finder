import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const baseUrl = "http://www.omdbapi.com/";
const apiKey = "27d8b269";

const SearchBar = ({ setMovies }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetchData();
    setInput("");
  };
  const showToastMessage = () => {
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const fetchData = async () => {
    const titleSearch = `${baseUrl}?t=${input}&apikey=${apiKey}`;
    console.log(titleSearch);

    const response = await fetch(titleSearch)
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
  // setmovies((prevstate) => [...prevstate, data]
  return (
    <form className="flex w-full justify-center mt-4" onSubmit={handleSubmit}>
      <input
        type="text"
        className="bg-radix-slate3 border border-radix-slate6 text-radix-slate12 text-sm rounded outline-none focus:border-radix-slate7 px-2 py-1 w-full w-3/4"
        placeholder="search for movie..."
        onChange={handleChange}
        value={input}
      />
      <button
        className="ml-2 border border-radix-slate7 hover:border-radix-slate8 bg-radix-cyan3 hover:bg-radix-cyan4 py-1 px-2 rounded-md text-radix-cyan11 hover:text-radix-cyan12"
        type="submit"
      >
        search
      </button>

      <ToastContainer />
    </form>
  );
};

export default SearchBar;
