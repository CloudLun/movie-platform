import React from "react";

import Nav from "../../component/shared/Nav";
import Movies from "./Movies";

const MoviesPage = ({ unbooked, bookedClickHandler, setClickIcon, clickIcon }) => {
  return (
    <div className="px-[24px]">
      <Nav selectedPage="movies" setClickIcon={setClickIcon} clickIcon={clickIcon}/>
      <Movies unbooked={unbooked} bookedClickHandler={bookedClickHandler} />
    </div>
  );
};

export default MoviesPage;
