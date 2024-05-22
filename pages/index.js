/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { Container } from "../components/container";
import {
  ArrowBack,
  ArrowForward,
  DrawOutlined,
  Handyman,
  PeopleOutline,
  SentimentSatisfiedAlt,
} from "@mui/icons-material";
import Button from "../components/button";
import { ServiceCard } from "../components/card/serviceCard";
import { bannerData, serviceList, worksList } from "../utils/dummyData";
import { Footer } from "../components/footer/footer";
import { ContactFooter } from "../components/footer/contactFooter";
import { Carousel as SingleCarousel } from "react-responsive-carousel";
import { Works } from "../components/works";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";

export default function Home() {
  const [isFull, setFull] = useState(false);
  const [show, setShow] = useState(0);

  const [data1, setData1] = useState(0);
  const [data2, setData2] = useState(0);
  const [data3, setData3] = useState(0);
  const [data4, setData4] = useState(0);

  useEffect(() => {
    if (isFull) {
      setTimeout(() => {
        if (show < 2) {
          setShow(show + 1);
        } else {
          setShow(0);
        }
      }, 8000);
    }
  }, [isFull]);

  useEffect(() => {
    setTimeout(() => {
      setFull(!isFull);
    }, 8000);
    if (!isFull) {
      setTimeout(() => {
        setFull(true);
      }, 1000);
    }
  });

  const countNum = (data, num) => {
    let startVal = num > 500 ? 500 : 0;
    let endVal = parseInt(num);
    let duration = Math.floor(500 / endVal);
    let counter = setInterval(function () {
      startVal = startVal + 1;
      if (startVal === endVal) {
        clearInterval(counter);
      }
      if (data === 1) {
        setData1(startVal);
      } else if (data === 2) {
        setData2(startVal);
      } else if (data === 3) {
        setData3(startVal);
      } else if (data === 4) {
        setData4(startVal);
      }
    }, duration);
  };

  useEffect(() => {
    countNum(1, 28);
    countNum(2, 200);
    countNum(3, 40);
    countNum(4, 1000);
  }, []);

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <ArrowForward
        fontSize="large"
        className="hover:scale-150 absolute z-30 top-0 right-0 scale-125 shadow-md hover:shadow-lg shadow-black bg-primary p-2 transition-all duration-500 ease-in-out cursor-pointer"
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <ArrowBack
        fontSize="large"
        className="hover:scale-150 absolute z-30 top-0 right-16 scale-125 shadow-md hover:shadow-lg shadow-black bg-primary p-2 transition-all duration-500 ease-in-out cursor-pointer"
        onClick={onClick}
      />
    );
  }

  return (
    <>
      <div className="flex h-[750px] relative">
        {bannerData?.map((item, i) => (
          <div
            key={i}
            className={`absolute w-full h-[750px] ${show === i ? "left-0 blur-none" : "-left-full blur-md pr-32"} overflow-hidden transition-all duration-700`}
          >
            <img
              src={item.image}
              alt=""
              loading="lazy"
              className={`object-cover brightness-50 w-full h-[750px] ease-linear object-bottom ${isFull ? "scale-125 transition-all duration-[8000ms] ease-linear" : ""}`}
            />
            <div className="absolute w-full h-full top-0 bottom-0 left-0 right-0 z-20 mt-64">
              <Container>
                <div
                  className={`w-[60%] space-y-12 leading-none absolute z-20 ${isFull ? "left-28" : "-left-full"} transition-all duration-500`}
                >
                  <div className="text-white text-[54px] font-semibold">
                    {item?.title}
                  </div>
                  <div className="text-white text-xl">{item?.desc}</div>
                  <div className="flex space-x-3">
                    <Button title="Our Service" />
                    <Button title="Contact Us" contained />
                  </div>
                </div>
              </Container>
            </div>
          </div>
        ))}
        <div className="absolute bottom-20 right-20 z-20 flex space-x-4">
          <ArrowBack
            fontSize="large"
            className="hover:scale-150 scale-125 shadow-md hover:shadow-lg shadow-black bg-[#DBD5D2] p-2 transition-all duration-500 ease-in-out cursor-pointer"
          />
          <ArrowForward
            fontSize="large"
            className="hover:scale-150 scale-125 shadow-md hover:shadow-lg shadow-black bg-[#DBD5D2] p-2 transition-all duration-500 ease-in-out cursor-pointer"
          />
        </div>
      </div>
      <div className="h-2 w-full flex">
        <div
          className={`bg-primary ${isFull ? "w-full transition-all duration-[8000ms] ease-linear" : "w-0"}`}
        ></div>
        <div className={`bg-transparent ${isFull ? "w-0" : "w-full"}`}></div>
      </div>
      <div className="bg-section">
        <Container>
          <div className="py-32 flex space-x-8">
            <div className="w-[50%] space-y-16 my-auto">
              <h2 className="font-bold text-4xl">
                Building Your Vision with Quality and Innovation
              </h2>
              <p className="">
                Established in 2012, Struktura has been a leading force in the
                construction industry, specializing in commercial office
                building construction. Our commitment to quality and innovation
                sets us apart.
              </p>
            </div>
            <div className="flex justify-between w-[50%] space-x-5">
              <div className="w-[50%] space-y-5">
                <div className="flex space-x-3 text-primary">
                  <Handyman fontSize="large" />
                  <div className="text-secondary space-y-2">
                    <div className="font-bold text-2xl">{data1}</div>
                    <div className="font-bold">Project Completed</div>
                    <div>
                      Our customer trust us again and again to manage their most
                      important building construct
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3 text-primary">
                  <SentimentSatisfiedAlt fontSize="large" />
                  <div className="text-secondary space-y-2">
                    <div className="font-bold text-2xl">{data2}</div>
                    <div className="font-bold">Happy Customer</div>
                    <div>
                      Our customer trust us again and again to manage their most
                      important building construct
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[50%] space-y-5">
                <div className="flex space-x-3 text-primary">
                  <DrawOutlined fontSize="large" />
                  <div className="text-secondary space-y-2">
                    <div className="font-bold text-2xl">{data3}</div>
                    <div className="font-bold">Design Services</div>
                    <div>
                      Our customer trust us again and again to manage their most
                      important building construct
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3 text-primary">
                  <PeopleOutline fontSize="large" />
                  <div className="text-secondary space-y-2">
                    <div className="font-bold text-2xl">{data4}</div>
                    <div className="font-bold">Worker Employed</div>
                    <div>
                      Our customer trust us again and again to manage their most
                      important building construct
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="py-32 flex space-x-32 items-center justify-between">
          <img
            src="/img-2.jpeg"
            alt=""
            className="w-[50%] h-[500px] object-cover object-bottom"
          />
          <div className="w-[50%] space-y-5">
            <div className="font-bold text-4xl text-right">
              We’re the future of mining industry
            </div>
            <div className="text-right">
              We ensure all services and products had certified quality,
              fabricated and handled with dedicated manpower in their respective
              competentcies and engineering discipline
            </div>
            <div className="flex justify-end">
              <Button title="Contact Us" contained />
            </div>
          </div>
        </div>
      </Container>
      <div className="bg-section">
        <Container>
          <div className="py-32 flex space-x-16">
            <div className="w-[40%] space-y-16 border-b-2 border-black">
              <h2 className="font-bold text-4xl">
                ALL YOU NEED PRODUCT & SERVICES
              </h2>
              <p className="">
                Simplify your industrial journey with ease. All You Need
                Products & Services empowers you to achieve operational success.
              </p>
              <div className="flex">
                <Button title="SEE ALL" contained />
              </div>
            </div>
            <div className="w-[60%]">
              <div className="relative">
                <Slider
                  infinite={true}
                  speed={200}
                  slidesToShow={3.2}
                  centerMode
                  slidesToScroll={ 1}
                  nextArrow={<SampleNextArrow />}
                  prevArrow={<SamplePrevArrow />}
                >
                  {serviceList?.map((item, i) => (
                    <div key={i} className="mt-20">
                      <ServiceCard img={item.thumb} title={item.title} />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="py-32">
        <h2 className="font-bold text-center text-4xl">OUR WORKS</h2>
        <div className="mt-20 relative">
          <SingleCarousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showArrows={false}
            centerMode
            transitionTime={300}
            renderArrowPrev={(clickHandler) => {
              return (
                <ArrowBack
                  fontSize="large"
                  className="hover:scale-150 scale-125 absolute top-32 left-32 z-30 shadow-md hover:shadow-lg shadow-black bg-primary p-2 transition-all duration-500 ease-in-out cursor-pointer"
                  onClick={clickHandler}
                />
              );
            }}
            renderArrowNext={(clickHandler) => {
              return (
                <ArrowForward
                  fontSize="large"
                  className="hover:scale-150 scale-125 absolute top-32 right-32 z-30 shadow-md hover:shadow-lg shadow-black bg-primary p-2 transition-all duration-500 ease-in-out cursor-pointer"
                  onClick={clickHandler}
                />
              );
            }}
          >
            {worksList.map((item, i) => (
              <Works key={i} data={item} />
            ))}
          </SingleCarousel>
        </div>
      </div>
      <div className="pt-32 pb-48 bg-section">
        <Container>
          <div className="space-y-8">
            <h2 className="font-bold text-center text-4xl">
              SOME OF OUR PARTNERSHIP
            </h2>
            <div className="text-center">
              Building success together Our network of strategic partnerships
            </div>
            <div className="flex flex-wrap">
              <img src="partner.png" alt="" />
              <img src="partner.png" alt="" />
              <img src="partner.png" alt="" />
              <img src="partner.png" alt="" />
              <img src="partner.png" alt="" />
              <img src="partner.png" alt="" />
              <img src="partner.png" alt="" />
              <img src="partner.png" alt="" />
              <img src="partner.png" alt="" />
              <img src="partner.png" alt="" />
              <img src="partner.png" alt="" />
              <img src="partner.png" alt="" />
            </div>
          </div>
        </Container>
      </div>
      <ContactFooter />
      <Footer />
    </>
  );
}
