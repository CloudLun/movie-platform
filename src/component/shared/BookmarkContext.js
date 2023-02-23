import React, { useState, createContext, useContext } from "react";
import BookmarkedMovies from "../../pages/BookmarkPage/BookmarkedMovies";
import { movies } from "../../data/data";

let bookmarkedMovieTitles = [];
let bookmarkedMoviesIndex = [];
let bookmarkedMoviesStatus = [];
let localStorageLength = localStorage.length;

for (let i = 0; i < localStorageLength; i++) {
  let getKey = localStorage.key(i);
  let getValue = JSON.parse(localStorage.getItem(getKey));
  bookmarkedMovieTitles[i] = getValue.title;
  bookmarkedMoviesIndex[i] = getKey;
  bookmarkedMoviesStatus[i] = getValue.booked;
}

export const BookmarkContext = createContext([
  bookmarkedMovieTitles,
  bookmarkedMoviesIndex,
  bookmarkedMoviesStatus,
]);
export const BookmarkProvider = (props) => {
  return (
    <BookmarkContext.Provider>
      <BookmarkedMovies />
    </BookmarkContext.Provider>
  );
};
