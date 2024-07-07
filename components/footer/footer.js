import { Facebook, Instagram, X } from "@mui/icons-material";
import React from "react";
import { Container } from "../container";
import { menu } from "../../utils/routeList";
import { useRouter } from "next/router";
import { useSocmed } from "../../hooks/api/home";

export const Footer = () => {
  const { push } = useRouter();
  const socmed = useSocmed()
  const socmedData = socmed?.data?.data?.data
  return (
    <div className="lg:pt-32 pt-16 pb-8 px-10 bg-footer text-white">
      <div className="lg:flex space-y-6 lg:space-y-0 justify-between">
        <div className="lg:w-[30%] lg:pr-5 lg:border-r-2 border-white">
          <div className="space-y-5">
            <div className="text-bold text-3xl">Logo</div>
            <div className="text-sm lg:text-base">
              in Industry, the heartbeat of modern civilization resonates
              through the relentless pursuit of progress!.
            </div>
          </div>
        </div>
        <div className="lg:w-[30%] lg:pr-5 lg:border-r-2 border-white">
          <div className="font-bold">Menu</div>
          {menu.map((item, i) => (
            <div
              key={i}
              className="cursor-pointer lg:pt-2 text-sm lg:text-base hover:underline"
              onClick={() => push(item.route)}
            >
              {item.title}
            </div>
          ))}
        </div>
        <div className="lg:w-[30%] space-y-4 text-sm lg:text-base">
          <div>
            <div className="font-bold">PT Adi Prakarsa Mekanindo</div>
            <div>Tower 25-28 Floor</div>
            <div>District 8 SCBD</div>
            <div>Jalan Jenderal Sudirman</div>
            <div>Jakarta Selatan, Indonesia</div>
          </div>
          <div className="border-t-[1px] border-white pt-4">
            <div>Telepon : +62 123 456 789</div>
            <div>Faksimile : +62 123 456 789</div>
          </div>
          <div className="flex space-x-3 border-t-[1px] border-white pt-4">
            {socmedData?.filter(item => item.name == "facebook")?.map((item, i) => (
              <Facebook className="lg:w-8 lg:h-8 h-4 w-4" />
            ))}
            {socmedData?.filter(item => item.name == "instagram")?.map((item, i) => (
              <Instagram className="lg:w-8 lg:h-8 h-4 w-4" />
            ))}
            {socmedData?.filter(item => item.name == "twitter")?.map((item, i) => (
              <X className="lg:w-8 lg:h-8 h-4 w-4" />
            ))}
          </div>
        </div>
      </div>
      <div className="text-sm lg:text-base border-t-[1px] text-center mt-12 border-white pt-4">
        Copyright by PT Adi Prakarsa Mekanindo. All rights reserved
      </div>
    </div>
  );
};
