import { ArrowForward } from "@mui/icons-material";
import Image from "next/image";
import React from "react";

export const Works = ({ data }) => {
  return (
    <div className="flex space-x-20 h-80 justify-center">
      <div className="flex flex-col font-bold my-12">
        <div className="text-3xl text-left">{data.title}</div>
        <div className="flex-grow" />
        <div className="text-left">
          <div>Client: {data.client}</div>
          <div>Location: {data.location}</div>
        </div>
        <div className="flex-grow" />
        <div className="flex hover:scale-110 transition-all duration-500 cursor-pointer">
          <div className="px-5 items-center flex bg-slate-200">View Detail</div>
          <div className="bg-primary flex items-center p-2">
            <ArrowForward className="mx-auto" />
          </div>
        </div>
      </div>
      <div className="w-[600px]">
        <Image
          width={600}
          height={400}
          src={data.img}
          alt=""
          className="object-cover object-bottom"
        />
      </div>
    </div>
  );
};
