import React, { useState, useContext } from "react";

import { movies } from "../../data/data";
import bookmarkFull from "../../assets/icon-bookmark-full.svg";
import bookmarkEmpty from "../../assets/icon-bookmark-empty.svg";
import playBtn from "../../assets/icon-play.svg";

import { BookmarkContext } from "../../component/shared/BookmarkContext";

const Card = ({ movie, index, unbooked, bookedClickHandler }) => {
  let imgName = [];

  movies.map((movie) => {
    imgName.push(
      movie.title
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/ii/g, "2")
        .replace(/’s/g, "s")
        .replace(/:/g, "")
    );
  });

  const bookmarkedMovies = useContext(BookmarkContext);
  const bookmarkedMoviesIndex = bookmarkedMovies[1];

  const [showPlayBtn, setShowPlayByn] = useState(movies.map(() => false));
  const playBtnHoverHandler = (i) => {
    setShowPlayByn((showPlayBtn) => {
      let newShowPlayBtn = [...showPlayBtn];
      newShowPlayBtn[i] = !newShowPlayBtn[i];
      return newShowPlayBtn;
    });
  };

  return (
    <div
      className="relative w-164px mdw-[220px] lg:w-[320px] h-[110px] md:h-[140px] lg:h-[200px]  mb-12"
      onMouseEnter={() => playBtnHoverHandler(index)}
      onMouseLeave={() => playBtnHoverHandler(index)}
    >
      <img
        className="w-[100%] h-[100%] rounded-lg"
        src={require(`../../assets/thumbnails/${imgName[index]}/regular/large.jpg`)}
        alt="thumbnail"
      />
      {showPlayBtn[index] && (
        <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center cursor-pointer">
          <div className="w-[120px] h-[50px] bg-white rounded-[28.5px] opacity-[0.25]"></div>
          <span className="absolute left-[50%] transform-translate-x-1/2 text-[18px]">
            Play
          </span>
          <img className="absolute left-[9px]" src={playBtn} />
        </div>
      )}
      <div className="absolute top-[10%] right-[5%] flex justify-center items-center cursor-pointer">
        <div className="w-8 h-8 bg-dark-blue rounded-[50%] opacity-[0.5]"></div>
        <img
          className="absolute w-11px"
          src={unbooked[index] ? bookmarkEmpty : bookmarkFull}
          onClick={() => bookedClickHandler(index)}
          alt="bookmark"
        />
      </div>
      <div className="mt-3">
        <p className="text-xs lg:text-[16px] opacity-[75%]">
          {movie.year} {movie.category} {movie.rating}
        </p>
        <p className="mt-1 text-[14px] lg:text-[18px] font-medium">
          {movie.title}
        </p>
      </div>
    </div>
  );
};

export default Card;
