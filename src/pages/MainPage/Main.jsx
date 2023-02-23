import React, { useState } from "react";

import { movies } from "../../data/data";

import Search from "../../component/shared/Search";
import Nav from "../../component/shared/Nav";
import Trend from "./Trend";
import Recommend from "./Recommend";

const Main = ({ unbooked, bookedClickHandler }) => {
  const [defaultItems, setDefaultItems] = useState(movies);
  const filterMoviesHandler = (value) => {
    setDefaultItems(() => {
      let filteredItems = movies.filter((movie) =>
        movie.title.toLowerCase().includes(value.toLowerCase())
      );
      return filteredItems;
    });
  };

  return (
    <div className="px-[24px]">
      <Nav selectedPage='main'/>
      <section className="lg:ml-[144px] overflow-x-scroll">
        <Search filterItemsHandler={filterMoviesHandler} />
        <Trend
          defaultItems={defaultItems}
          unbooked={unbooked}
          bookedClickHandler={bookedClickHandler}
        />
        <Recommend
          defaultItems={defaultItems}
          unbooked={unbooked}
          bookedClickHandler={bookedClickHandler}
        />
      </section>
    </div>
  );
};

export default Main;
