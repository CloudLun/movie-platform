import React, { useState } from "react";

const ContainerLayout = ({ title, children }) => {
  return (
    <div className="mb-3 text-xl ">
      <h1 className="my-10 lg:text-[32px] text-white font-light">{title}</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[15px] md:gap-[29px] lg:gap-[40px] lg:mr-9 text-white">
        {children}
      </div>
    </div>
  );
};

export default ContainerLayout;
