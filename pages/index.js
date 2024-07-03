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
import { ContactFooter } from "../components/footer/contactFooter";
import { Carousel as SingleCarousel } from "react-responsive-carousel";
import { Works } from "../components/works";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/router";
import { useHero } from "../hooks/api/home";

export default function Home() {
  const route = useRouter();
  const [isFull, setFull] = useState(false);
  const [show, setShow] = useState(0);

  const [data1, setData1] = useState(0);
  const [data2, setData2] = useState(0);
  const [data3, setData3] = useState(0);
  const [data4, setData4] = useState(0);

  const banner = useHero()
  const bannerDataapi = banner?.data?.data?.data

  const options = {
    threshold: 1,
    triggerOnce: true,
  };
  const { ref: stat, inView: statVisible } = useInView(options);
  const { ref: about, inView: aboutVisible } = useInView(options);
  const { ref: service, inView: serviceVisible } = useInView(options);
  const { ref: works, inView: worksVisible } = useInView(options);
  const { ref: partner, inView: partnerVisible } = useInView(options);

  useEffect(() => {
    let showTimeout;
    if (isFull) {
      showTimeout = setTimeout(() => {
        setShow((prevShow) => (prevShow < 2 ? prevShow + 1 : 0));
      }, 8000);
    }
    return () => clearTimeout(showTimeout);
  }, [isFull, show]);

  useEffect(() => {
    let toggleTimeout;
    if (!isFull) {
      toggleTimeout = setTimeout(() => {
        setFull(true);
      }, 1000);
    } else {
      toggleTimeout = setTimeout(() => {
        setFull(false);
      }, 8000);
    }

    return () => clearTimeout(toggleTimeout);
  }, [isFull]);

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
    if (statVisible) {
      countNum(1, 28);
      countNum(2, 200);
      countNum(3, 40);
      countNum(4, 1000);
    }
  }, [statVisible]);

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
      <div className="flex lg:aspect-video lg:h-full h-[75vh] relative">
        {bannerData?.map((item, i) => (
          <div
            key={i}
            className={`absolute w-full lg:h-full top-0 bottom-0 g:aspect-video h-[75vh] ${show === i ? "left-0 blur-none" : "-left-full blur-sm pr-32"} overflow-hidden transition-all duration-700`}
          >
            <Image
              src={item.image}
              alt=""
              loading="lazy"
              width={1920}
              height={1080}
              className={`object-cover brightness-50 w-full g:aspect-video lg:h-full h-[75vh] ease-linear object-bottom ${isFull ? "scale-125 transition-all duration-[8000ms] ease-linear" : ""}`}
            />
            <div className="absolute flex top-0 bottom-0 left-0 right-0 z-20 items-center">
              <Container
                className={`my-auto lg:w-[60%] w-full space-y-10 absolute z-20 ${isFull ? "lg:left-28 left-0" : "-left-full"} transition-all duration-500`}
              >
                <div className="text-white leading-tight lg:text-[54px] text-2xl font-semibold">
                  {item?.title}
                </div>
                <div className="text-white lg:text-xl text-sm">
                  {item?.desc}
                </div>
                <div className="flex lg:space-y-0 space-x-2 lg:space-x-3">
                  <Button title="Our Service" />
                  <Button
                    title="Contact Us"
                    contained
                    onClick={() => route.push("/contact")}
                  />
                </div>
              </Container>
            </div>
          </div>
        ))}
        {/* <div className="absolute bottom-20 right-20 z-20 flex space-x-4">
          <ArrowBack
            fontSize="large"
            className="hover:scale-150 scale-125 shadow-md hover:shadow-lg shadow-black bg-[#DBD5D2] p-2 transition-all duration-500 ease-in-out cursor-pointer"
          />
          <ArrowForward
            fontSize="large"
            className="hover:scale-150 scale-125 shadow-md hover:shadow-lg shadow-black bg-[#DBD5D2] p-2 transition-all duration-500 ease-in-out cursor-pointer"
          />
        </div> */}
      </div>
      <div className="h-2 w-full flex">
        <div
          className={`bg-primary ${isFull ? "w-full transition-all duration-[8000ms] ease-linear" : "w-0"}`}
        ></div>
        <div className={`bg-transparent ${isFull ? "w-0" : "w-full"}`}></div>
      </div>
      <div className="bg-section">
        <Container>
          <div className="py-32 lg:flex lg:space-x-8 space-x-0 space-y-8 lg:space-y-0">
            <div className="lg:w-[50%] lg:space-y-16 space-y-2 my-auto">
              <h2 className="font-bold text-2xl lg:text-4xl">
                Building Your Vision with Quality and Innovation
              </h2>
              <p className="lg:text-base text-sm">
                Established in 2012, Struktura has been a leading force in the
                construction industry, specializing in commercial office
                building construction. Our commitment to quality and innovation
                sets us apart.
              </p>
            </div>
            <div className="lg:flex justify-between lg:w-[50%] lg:space-x-5">
              <div className="lg:w-[50%] space-y-5">
                <div className="flex space-x-3 text-primary">
                  <Handyman fontSize="large" />
                  <div className="text-secondary space-y-2 lg:text-base text-sm">
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
                  <div className="text-secondary space-y-2 lg:text-base text-sm">
                    <div className="font-bold text-2xl">{data2}</div>
                    <div className="font-bold">Happy Customer</div>
                    <div>
                      Our customer trust us again and again to manage their most
                      important building construct
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-[50%] space-y-5">
                <div className="flex space-x-3 text-primary">
                  <DrawOutlined fontSize="large" />
                  <div className="text-secondary space-y-2 lg:text-base text-sm">
                    <div className="font-bold text-2xl">{data3}</div>
                    <div className="font-bold">Design Services</div>
                    <div>
                      Our customer trust us again and again to manage their most
                      important building construct
                    </div>
                  </div>
                </div>
                <div ref={stat} className="flex space-x-3 text-primary">
                  <PeopleOutline fontSize="large" />
                  <div className="text-secondary space-y-2 lg:text-base text-sm">
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
      <Container ref={about}>
        <div
          className={`py-32 lg:flex lg:space-x-32 space-x-0 space-y-5 lg:space-y-0 items-center justify-between transition-all duration-500 ${aboutVisible ? "blur-none visible" : "invisible blur-sm -translate-y-12"}`}
        >
          <Image
            src="/img-2.jpeg"
            alt=""
            className="lg:w-[50%] aspect-square lg:h-[500px] object-cover object-bottom"
            width={1000}
            height={500}
          />
          <div ref={about} className="lg:w-[50%] space-y-5">
            <div className="font-bold text-2xl lg:text-4xl text-right">
              We’re the future of mining industry
            </div>
            <div className="text-right lg:text-base text-sm">
              We ensure all services and products had certified quality,
              fabricated and handled with dedicated manpower in their respective
              competentcies and engineering discipline
            </div>
            <div className="flex justify-end">
              <Button
                title="Contact Us"
                contained
                onClick={() => route.push("/contact")}
              />
            </div>
          </div>
        </div>
      </Container>
      <div ref={service} className="bg-section">
        <Container>
          <div
            className={`py-32 lg:flex lg:space-x-16 transition-all duration-500 ${serviceVisible ? "blur-none visible" : "invisible blur-sm -translate-y-12"}`}
          >
            <div className="lg:w-[40%] lg:space-y-16 space-y-6 border-b-2 border-black">
              <h2 className="font-bold text-2xl lg:text-4xl">
                All you need product & service
              </h2>
              <p className="text-sm lg:text-base">
                Simplify your industrial journey with ease. All You Need
                Products & Services empowers you to achieve operational success.
              </p>
              <div className="flex">
                <Button title="SEE ALL" contained />
              </div>
            </div>
            <div className="lg:w-[60%] hidden lg:block">
              <div className="relative">
                <Slider
                  infinite={true}
                  speed={200}
                  slidesToShow={3.2}
                  slidesToScroll={1}
                  centerMode
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
              <div className="lg:hidden flex space-x-2">
                {serviceList?.map((item, i) => (
                  <div key={i} className="mt-20">
                    <ServiceCard img={item.thumb} title={item.title} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div
        ref={works}
        className={`lg:py-32 pt-16 transition-all duration-500 ${worksVisible ? "blur-none" : "blur-sm -translate-y-12"}`}
      >
        <h2 className="font-bold text-center text-2xl lg:text-4xl">
          OUR WORKS
        </h2>
        <div className="mt-20 relative hidden lg:block">
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
        <Container className="lg:hidden flex space-x-8 overflow-x-auto pb-8">
          {worksList.map((item, i) => (
            <Works key={i} data={item} />
          ))}
        </Container>
      </div>
      <div ref={partner} className="pt-32 pb-48 bg-section">
        <Container>
          <div
            className={`space-y-8 transition-all duration-500 ${partnerVisible ? "blur-none visible" : "invisible blur-sm -translate-y-12"}`}
          >
            <h2 className="font-bold text-center text2-xl lg:text-4xl">
              SOME OF OUR PARTNERSHIP
            </h2>
            <div className="text-center text-sm lg:text-base">
              Building success together Our network of strategic partnerships
            </div>
            <div className="grid lg:grid-cols-6 grid-cols-3 gap-0">
              <Image src="/partner.png" width={190} height={100} alt="" />
              <Image src="/partner.png" width={190} height={100} alt="" />
              <Image src="/partner.png" width={190} height={100} alt="" />
              <Image src="/partner.png" width={190} height={100} alt="" />
              <Image src="/partner.png" width={190} height={100} alt="" />
              <Image src="/partner.png" width={190} height={100} alt="" />
              <Image src="/partner.png" width={190} height={100} alt="" />
              <Image src="/partner.png" width={190} height={100} alt="" />
              <Image src="/partner.png" width={190} height={100} alt="" />
              <Image src="/partner.png" width={190} height={100} alt="" />
              <Image src="/partner.png" width={190} height={100} alt="" />
              <Image src="/partner.png" width={190} height={100} alt="" />
            </div>
          </div>
        </Container>
      </div>
      <ContactFooter />
    </>
  );
}
