import React, { useState } from "react";
import { Container } from "../components/container";
import { HeroBanner } from "../components/hero";
import { useDocument } from "../hooks/api/home";
import { baseURL } from "../utils";

const About = () => {
  const [selected, setSelected] = useState()
  const document = useDocument()
  const documentData = document?.data?.data?.data
  return (
    <>
      <HeroBanner
        title="A Moments of Best Built"
        img="bg-[url('/16.png')]"
      />
      <Container>
        <div className="space-y-8 my-32">
          <div className="text-center lg:w-3/5 mx-auto space-y-5">
            <div className="font-bold text-2xl lg:text-4xl">
              COMPANY COMITMENT
            </div>
            <div className="text-sm lg:text-base">
            With a commitment to providing high-quality services and innovative solutions, 
            we strive to be a trusted partner in ensuring quality and safety in every project we undertake. 
            Our comprehensive services encompass not only precise and thorough technical inspections 
            but also cutting-edge design engineering solutions tailored to meet the specific needs of our clients.
            </div>
          </div>
        </div>
      </Container>
      <div className="bg-section lg:py-32 py-16">
        <Container className="lg:space-y-24 space-y-6 justify-between">
          <div className="lg:flex justify-between mx-auto">
            <div className="text-2xl lg:text-4xl font-bold">OUR VISION</div>
            <div className="lg:w-[50%] text-sm lg:text-base lg:text-right text-left">
            To be a recognized leader in technical testing, inspection, and engineering design services, 
            dedicated to delivering innovative solutions that ensure safety, reliability, 
            and customer satisfaction.
            </div>
          </div>
          <div className="lg:flex justify-between mx-auto">
            <div className="block lg:hidden text-2xl lg:text-4xl font-bold text-right">
              OUR MISSION
            </div>
            <div className="lg:w-[50%] text-sm lg:text-base lg:text-left text-right">
            Achieve Excellence<br />
            Drive Development<br />
            Promote Integrity<br />
            Maximize Expertise<br />
            Deliver Beyond
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
              {documentData?.map((item, i) => (
                <div key={i} className={selected == item.name ? "bg-primary px-3 ml-5 transition-all duration-300" : "bg-transparent px-3 transition-all duration-300"} onClick={() => setSelected(item.name)}>{item.name}</div>
              ))}
            </div>
            {documentData?.map((item, i) => (
              <img key={i} hidden={selected !== item.name} src={baseURL + item.documentUrl} className="h-[500px]" />
            ))}
          </div>
        </div>
      </Container>
      <div className="bg-section py-32 text-center font-semibold text-sm lg:text-xl">
        <Container>
        With us, expect reliable, exceptional outcomes and enduring value in every endeavor.
        </Container>
      </div>
    </>
  );
};

export default About;
