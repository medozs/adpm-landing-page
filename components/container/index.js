"use client";
import React from "react";

export const Container = (props) => {
  return (
    <>
      <div
        className={`${props.className} max-w-[1400px] mx-auto lg:px-10 px-8`}
      >
        {props.children}
      </div>
    </>
  );
};
