import React from "react";

import Nav from "../../component/shared/Nav";
import Search from "../../component/shared/Search";
import BookMarkedMovies from "./BookmarkedMovies";

const BookmarkPage = ({ unbooked, bookedClickHandler }) => {
  return (
    <div className="px-[24px] min-h-[100vh]">
      <Nav selectedPage="bookmark" />
      <section className="lg:ml-[144px] overflow-x-scroll">
        <Search />
        <BookMarkedMovies
          unbooked={unbooked}
          bookedClickHandler={bookedClickHandler}
        />
      </section>
    </div>
  );
};

export default BookmarkPage;
