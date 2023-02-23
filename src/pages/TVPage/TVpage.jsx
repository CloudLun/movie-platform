import React from "react";

import Nav from "../../component/shared/Nav";
import TVSeries from "./TVSeries";

const TVPage = ({ unbooked, bookedClickHandler }) => {
  return (
    <div className="px-[24px]">
      <Nav selectedPage="tvseries"/>
      <TVSeries unbooked={unbooked} bookedClickHandler={bookedClickHandler} />
    </div>
  );
};

export default TVPage;
