"use client";
import React from "react";

export const Container = (props) => {
  return (
    <>
      <div
        className={`${props.className} max-w-[1300px] mx-auto lg:px-10 md:px-14 px-6"`}
      >
        {props.children}
      </div>
    </>
  );
};
