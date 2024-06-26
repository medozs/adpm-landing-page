import React from "react";
import { useState } from "react";

export const ProjectCard = (props) => {
  const [isHover, setHover] = useState(false);
  return (
    <div
      className="w-full bg-white shadow-md"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="overflow-hidden h-[280px] w-full">
        <img
          src={props.img}
          alt=""
          className={`w-full h-full object-cover transision-all duration-1000 ${isHover ? "scale-125" : ""}`}
        />
      </div>
      <div className="space-y-4 p-4">
        <div className="font-semibold text-xl">Container Set Up</div>
        <div className="capitalize">
          <div className="flex justify-between">
            <div className="w-[30%]">Client</div>
            <div className="w-[5%]">:</div>
            <div className="w-[60%]">{props.client}</div>
          </div>
          <div className="flex justify-between">
            <div className="w-[30%]">scope</div>
            <div className="w-[5%]">:</div>
            <div className="w-[60%]">{props.scope}</div>
          </div>
          <div className="flex justify-between">
            <div className="w-[30%]">location</div>
            <div className="w-[5%]">:</div>
            <div className="w-[60%]">{props.location}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
