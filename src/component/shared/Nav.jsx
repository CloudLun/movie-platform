import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//NAV ICONS
import logo from "../../assets/logo.svg";
import home from "../../assets/icon-nav-home.svg";
import homeClicked from "../../assets/icon-nav-home-clicked.svg";
import movies from "../../assets/icon-nav-movies.svg";
import moviesClicked from "../../assets/icon-nav-movies-clicked.svg";
import tv from "../../assets/icon-nav-tv-series.svg";
import tvClicked from "../../assets/icon-nav-tv-series-clicked.svg";
import bookmark from "../../assets/icon-nav-bookmark.svg";
import bookmarkClicked from "../../assets/icon-nav-bookmark-clicked.svg";
import avatar from "../../assets/image-avatar.png";

const Nav = ({ selectedPage, setClickIcon, clickIcon }) => {
  const navigate = useNavigate();

  const navigateMain = () => {
    navigate("/");
  };

  const navigateMoviesPage = () => {
    navigate("/movies");
  };

  const navigateTVSeries = () => {
    navigate("/tvseries");
  };

  const navigateBookmark = () => {
    navigate("/bookmark");
  };

  return (
    <section className="lg:flex">
      <div className="lg:fixed flex lg:flex-col justify-between items-center lg:my-[24px] lg:w-24 h-14 lg:h-[960px] bg-semi-dark-blue rounded-md">
        <div className="lg:mt-[32px]">
          <img src={logo} className="ml-6 lg:ml-0 w-6  md:w-8 cursor-pointer" />
        </div>
        <div className="flex lg:flex-col gap-6 lg:gap-[60px]">
          <img
            src={selectedPage === "main" ? homeClicked : home}
            className="w-5 h-5 cursor-pointer"
            onClick={navigateMain}
          />
          <img
            src={selectedPage === "movies" ? moviesClicked : movies}
            className="w-5 h-5 cursor-pointer"
            onClick={() => {
              navigateMoviesPage();
            }}
          />
          <img
            src={selectedPage === "tvseries" ? tvClicked : tv}
            className="w-5 h-5 cursor-pointer"
            onClick={navigateTVSeries}
          />
          <img
            src={selectedPage === "bookmark" ? bookmarkClicked : bookmark}
            className="w-5 h-5 cursor-pointer"
            onClick={navigateBookmark}
          />
        </div>
        <div className="">
          <img
            src={avatar}
            className="mr-6 lg:mr-0 lg:mb-[32px] w-6 md:w-8 md:h-8 cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Nav;
