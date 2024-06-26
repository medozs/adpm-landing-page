import { ArrowForward } from "@mui/icons-material";
import Image from "next/image";
import React from "react";

export const Works = ({ data }) => {
  return (
    <div className="lg:flex lg:space-x-20 lg:h-80 justify-center">
      <div className="flex flex-col my-12">
        <div className="text-md font-bold lg:text-3xl text-left">
          {data.title}
        </div>
        <div className="flex-grow" />
        <div className="text-left text-xs lg:text-base">
          <div>Client: {data.client}</div>
          <div>Location: {data.location}</div>
          <div>Scope: {data.scope}</div>
        </div>
        <div className="flex-grow" />
        <div className="lg:flex hidden hover:scale-110 transition-all duration-500 cursor-pointer text-sm lg:text-base">
          <div className="px-5 items-center flex bg-slate-200">View Detail</div>
          <div className="bg-primary flex items-center p-2">
            <ArrowForward className="mx-auto" />
          </div>
        </div>
      </div>
      <div className="lg:w-[600px] w-[270px]">
        <Image
          width={600}
          height={400}
          src={data.img}
          alt=""
          className="object-cover object-bottom lg:aspect-video aspect-square"
        />
      </div>
      <div className="lg:hidden flex hover:scale-110 transition-all duration-500 cursor-pointer text-xs lg:text-base">
        <div className="px-5 items-center flex bg-slate-200 font-bold">
          View Detail
        </div>
        <div className="bg-primary flex items-center lg:p-2 p-1">
          <ArrowForward className="mx-auto" />
        </div>
      </div>
    </div>
  );
};
