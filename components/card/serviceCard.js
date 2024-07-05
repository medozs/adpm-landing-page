/* eslint-disable @next/next/no-img-element */
import React from "react";

export const ServiceCard = ({ img, title }) => {
  return (
    <div className="relative w-auto h-96 cursor-pointer">
      <img
        src={img}
        alt=""
        className="w-full brightness-75 h-full object-cover grayscale hover:grayscale-0 transition-all"
      />
      <div className="absolute z-20 bottom-4 left-4 text-white text-2xl font-bold">
        {title}
      </div>
    </div>
  );
};
