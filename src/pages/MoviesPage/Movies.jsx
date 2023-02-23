import React, { useState } from "react";

import { movies } from "../../data/data";

import Card from "../../component/product/Card";
import Search from "../../component/shared/Search";
import ContainerLayout from "../../component/shared/ContainerLayout";



const Movies = ({ unbooked, bookedClickHandler }) => {
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
    <section className="lg:ml-[144px]">
      <Search filterItemsHandler={filterMoviesHandler} />
      <ContainerLayout title="Movies">
        {defaultItems.map((movie, index) => {
          if (movie.category === "Movie") {
            return (
              <Card
                key={index}
                movie={movie}
                index={index}
                unbooked={unbooked}
                bookedClickHandler={bookedClickHandler}
              />
            );
          }
        })}
      </ContainerLayout>
    </section>
  );
};

export default Movies;
