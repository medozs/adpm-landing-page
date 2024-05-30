import React from "react";

const Button = ({ title, contained, white, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`px-6 items-center flex h-9 uppercase text-bold border-2 shadow-lg cursor-pointer
      ${!contained && !white ? "text-white hover:border-primary hover:text-primary" : ""}
      ${contained ? "border-primary bg-primary text-secondary hover:bg-primary hover:border-primary hover:text-white" : ""}
      ${white ? "border-white bg-white text-secondary hover:bg-secondary hover:border-secondary hover:text-white" : ""}`}
    >
      {title}
    </div>
  );
};

export default Button;
