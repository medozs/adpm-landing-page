import React from "react";
import { Container } from "../components/container";
import { HeroBanner } from "../components/hero";

const About = () => {
  return (
    <>
      <HeroBanner
        title="A Moments of Best Built"
        img="bg-[url('/about.jpeg')]"
      />
      <Container>
        <div className="space-y-8 my-32">
          <div className="text-center lg:w-3/5 mx-auto space-y-5">
            <div className="font-bold text-2xl lg:text-4xl">
              COMPANY COMITMENT
            </div>
            <div className="text-sm lg:text-base">
              ADPM prioritizing safety and professionalism into business core,
              aspect. We always make sure to fulfill all safety and business
              regulation, so that all works can be done properly and customers
              can trust us to do the work they provide.
            </div>
          </div>
        </div>
      </Container>
      <div className="bg-section lg:py-32 py-16">
        <Container className="lg:space-y-24 space-y-6 justify-between">
          <div className="lg:flex justify-between mx-auto">
            <div className="text-2xl lg:text-4xl font-bold">OUR VISION</div>
            <div className="lg:w-[50%] text-sm lg:text-base lg:text-right text-left">
              To be the premier and trusted provider of mechanical and
              manufacturing services to the mining industry, recognized for our
              innovation, expertise, and commitment to safety, making a positive
              impact on our customers and the environment.
            </div>
          </div>
          <div className="lg:flex justify-between mx-auto">
            <div className="block lg:hidden text-2xl lg:text-4xl font-bold text-right">
              OUR MISSION
            </div>
            <div className="lg:w-[50%] text-sm lg:text-base lg:text-left text-right">
              To be the premier and trusted provider of mechanical and
              manufacturing services to the mining industry, recognized for our
              innovation, expertise, and commitment to safety, making a positive
              impact on our customers and the environment.
            </div>
            <div className="lg:block hidden text-2xl lg:text-4xl font-bold">
              OUR MISSION
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="space-y-24 my-32">
          <div className="text-center max-w-[600px] mx-auto space-y-5">
            <div className="font-bold text-2xl lg:text-4xl">
              COMPANY DOCUMENTS
            </div>
            <div className="text-sm lg:text-base">
              {
                "Transparency builds trust. That's why we offer easy access to company documents, fostering informed decisions and ethical business practices."
              }
            </div>
          </div>
          <div className="lg:flex space-y-6 lg:space-y-0 justify-between">
            <div className="h-full lg:w-1/3 space-y-2 lg:space-y-8 font-semibold text-sm lg:text-lg">
              <div>Surat Keputusan Pendirian Perseroan</div>
              <div>Nomor Induk Berusaha (NIB)</div>
              <div>Surat Pengukuhan Pengusaha Kena Pajak</div>
            </div>
            <div className="bg-slate-100 h-[500px] lg:w-1/3"></div>
          </div>
        </div>
      </Container>
      <div className="bg-section py-32 text-center font-semibold text-sm lg:text-xl">
        <Container>
          Beauty happens with code not by chance, We employee creative tools,
          code and solid online branding knowledge to build an elegant solutions
          for our client.
        </Container>
      </div>
    </>
  );
};

export default About;
