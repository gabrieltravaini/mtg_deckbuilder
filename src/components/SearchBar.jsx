import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
    return (
      <div className="bg-white w-96 rounded-lg h-10 px-4 shadow-sm flex items-center p-2">
        <FaSearch id="search-icon" className="text-blue-500" />
        <input className=" bg-transparent border-x-0 border-y-0 w-full m-3" placeholder="search for a card by name..." />
      </div>
    );
  }

  export default SearchBar;