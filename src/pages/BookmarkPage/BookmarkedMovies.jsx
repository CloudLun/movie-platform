import React, { useContext, useState } from "react";

import { movies } from "../../data/data";

import Card from "../../component/product/Card";
import ContainerLayout from "../../component/shared/ContainerLayout";

import { BookmarkContext } from "../../component/shared/BookmarkContext";

const BookmarkedMovies = ({ unbooked, bookedClickHandler }) => {

  const bookmarkedMovies = useContext(BookmarkContext)
  const bookmarkedMovieTitles = bookmarkedMovies[0]

  return (
    <>
      <ContainerLayout title="Bookmarked Movies">
        {movies.map((movie, index) => {
          if (
            bookmarkedMovieTitles.includes(movie.title) &&
            movie.category === "Movie"
          ) {
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
      <ContainerLayout title="Bookmarked TV Series">
        {movies.map((movie, index) => {
          if (
            bookmarkedMovieTitles.includes(movie.title) &&
            movie.category === "TV Series"
          ) {
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
    </>
  );
};

export default BookmarkedMovies;
