import React from "react";

import search from "../../assets/icon-search.svg";

const Search = ({ filterItemsHandler }) => {
  return (
    <div className="flex gap-5 mt-6 lg:mt-16">
      <img src={search} className="w-6 h-6" />
      <input
        type="text"
        id=""
        placeholder="Search for movies or TV series"
        className="grow pl-[5px] text-base bg-dark-blue text-[18px] text-white opacity-50 focus:outline-none"
        onChange={(e) => filterItemsHandler(e.target.value)}
      />
    </div>
  );
};

export default Search;
