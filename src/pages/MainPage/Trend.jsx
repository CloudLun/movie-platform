import React, { useState } from "react";
import { movies } from "../../data/data";


import bookmarkFull from "../../assets/icon-bookmark-full.svg";
import bookmarkEmpty from "../../assets/icon-bookmark-empty.svg";
import playBtn from "../../assets/icon-play.svg";

const Trend = ({defaultItems, unbooked, bookedClickHandler }) => {
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

  const [showPlayBtn, setShowPlayByn] = useState(movies.map(() => false))
  const playBtnHoverHandler = (i) => {
    setShowPlayByn((showPlayBtn) => {
      let newShowPlayBtn = [...showPlayBtn];
      newShowPlayBtn[i] = !newShowPlayBtn[i];
      return newShowPlayBtn;
    });
  };

  return (
    <div className="text-xl ">
      <h1 className="my-9 lg:text-[32px] text-white font-light">Trending</h1>
      <div className="flex gap-4 text-white overflow-x-scroll">
        {defaultItems.map((movie, index) => {
          if (index <= 4) {
            return (
              <div
                key={index}
                className="relative flex-shrink-0 w-[240px] md:w-[470px] h-[140px] md:h-[230px] z-100"
                onMouseEnter={() => playBtnHoverHandler(index)}
                onMouseLeave={() => playBtnHoverHandler(index)}
              >
                <img
                  className="w-[100%] h-[100%] bg-contain rounded-lg"
                  src={require(`../../assets/thumbnails/${imgName[index]}/trending/large.jpg`)}
                  alt="thumbnail"
                />
                {showPlayBtn[index] && (
                  <div
                    className={`absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center cursor-pointer`}
                  >
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
                <div className="absolute left-4 bottom-4 ">
                  <p className="text-xs opacity-[75%] mb-1">
                    {movie.year} {movie.category} {movie.rating}
                  </p>
                  <p className="text-base font-medium">{movie.title}</p>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Trend;
