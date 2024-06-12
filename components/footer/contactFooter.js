/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Container } from "../container";
import Button from "../button";
import { useRouter } from "next/router";

export const ContactFooter = () => {
  const route = useRouter()
  return (
    <div className="py-20 bg-primary lg:overflow-visible overflow-hidden">
      <Container>
        <div className="flex w-full relative justify-between">
          <div className="lg:space-y-10 space-y-3 lg:w-[70%] my-auto">
            <div className="text-2xl lg:text-5xl font-bold">
              Smart Business <br />
              Growth Starts Here. <br />
              Take the First Step!
            </div>
            <div className="font-semibold text-sm lg:text-base">Always Ready to Lend a Hand</div>
            <div className="flex">
              <Button title="Contact Us" white onClick={() => route.push("/contact")}/>
            </div>
          </div>
          <img
            src="people.png"
            alt=""
            className="absolute lg:-top-[145px] -bottom-[150px] lg:right-0 -right-36"
          />
        </div>
      </Container>
    </div>
  );
};
