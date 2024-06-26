import React from "react";
import { Container } from "../container";

export const HeroBanner = ({ title, desc, img }) => {
  return (
    <div
      className={`bg-fixed h-[75vh] lg:h-auto lg:aspect-[21/9] bg-no-repeat bg-cover bg-center ${img}`}
    >
      <div className="bg-black/40 h-full">
        <Container className="h-full">
          <div className="flex justify-center items-center h-full">
            <div className="my-auto space-y-3 text-center">
              <div className="text-2xl lg:text-[54px] text-white font-semibold">
                {title}
              </div>
              {desc && (
                <div className="text-sm lg:text-xl text-white">{desc}</div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
