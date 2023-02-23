import { createBrowserRouter, RouterProvider } from "react-router-dom";

import React, { useState } from "react";

import { movies } from "./data/data";

import Nav from "./component/shared/Nav";
import Main from "./pages/MainPage/Main";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import TVPage from "./pages/TVPage/TVpage";
import BookmarkPage from "./pages/BookmarkPage/BookmarkPage";

function App() {
  const [unbooked, setBooked] = useState(movies.map(() => true));

  const bookedClickHandler = (i) => {
    setBooked((unbooked) => {
      let newUnbooked = [...unbooked];
      newUnbooked[i] = !newUnbooked[i];
      return newUnbooked;
    });

    let item = {
      title: movies[i].title,
      category: movies[i].category,
      booked: unbooked,
    };

    unbooked[i] === true
      ? localStorage.setItem(`${i}`, JSON.stringify(item))
      : localStorage.removeItem(`${i}`);
  };

  const router = createBrowserRouter([
    {
      path: "movie-platform/",
      element: (
        <Main unbooked={unbooked} bookedClickHandler={bookedClickHandler} />
      ),
    },
    {
      path: "movie-platform/movies",
      element: (
        <MoviesPage
          unbooked={unbooked}
          bookedClickHandler={bookedClickHandler}
        />
      ),
    },
    {
      path: "movie-platform/tvseries",
      element: (
        <TVPage unbooked={unbooked} bookedClickHandler={bookedClickHandler} />
      ),
    },
    {
      path: "movie-platform/bookmark",
      element: (
        <BookmarkPage
          unbooked={unbooked}
          bookedClickHandler={bookedClickHandler}
        />
      ),
    },
  ]);

  return (
    <div className="pb-[70px] min-h-screen bg-dark-blue">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
