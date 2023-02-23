import React, { useState } from "react";

import { movies } from "../../data/data";

import Card from "../../component/product/Card";
import ContainerLayout from "../../component/shared/ContainerLayout";

const Recommend = ({defaultItems, unbooked, bookedClickHandler}) => {
  return (
    <ContainerLayout title="Recommended for you">
      {defaultItems.map((movie, index) => {
        if (index > 4) {
          return (
            <Card
              key={index}
              movie={movie}
              unbooked={unbooked}
              bookedClickHandler={bookedClickHandler}
              index={index}
            />
          );
        }
      })}
    </ContainerLayout>
  );
};

export default Recommend;
