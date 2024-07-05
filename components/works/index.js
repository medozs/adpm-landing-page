import { ArrowForward } from "@mui/icons-material";
import Image from "next/image";
import React from "react";
import { baseURL } from "../../utils";
import { useRouter } from "next/router";

export const Works = ({ data }) => {
  const router = useRouter()
  return (
    <div className="lg:flex lg:space-x-20 lg:h-96 justify-center px-24">
      <div className="flex flex-col my-20 lg:w-1/2 aspect-video">
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
        <div onClick={() => router.push("/projects")}  className="lg:flex hidden hover:scale-110 transition-all duration-500 cursor-pointer text-sm lg:text-base">
          <div className="px-5 items-center flex bg-slate-200">View All</div>
          <div className="bg-primary flex items-center p-2">
            <ArrowForward className="mx-auto" />
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 lg:aspect-video">
        <img
          src={baseURL + data.imageUrl}
          alt=""
          className="object-cover object-bottom lg:aspect-auto h-full aspect-square"
        />
      </div>
      <div onClick={() => router.push("/projects")} className="lg:hidden flex hover:scale-110 transition-all duration-500 cursor-pointer text-xs lg:text-base">
        <div className="px-5 items-center flex bg-slate-200 font-bold">
          View All
        </div>
        <div className="bg-primary flex items-center lg:p-2 p-1">
          <ArrowForward className="mx-auto" />
        </div>
      </div>
    </div>
  );
};
