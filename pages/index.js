/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useEffect, useState } from 'react';
import { Container } from '../components/container';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import Button from '../components/button';

export default function Home() {
  const [isFull, setFull] = useState(false)
  const [show, setShow] = useState(0)

  useEffect(() => {
    if(isFull) {
      setTimeout(() => {
        if(show < 2) {
          setShow(show + 1)
        } else {
          setShow(0)
        }
      }, 8000)
    }
  }, [isFull])


  useEffect(() => {
    setTimeout(() => {
      setFull(!isFull)
    }, 8000)
    if(!isFull) {
      setTimeout(() => {
        setFull(true)
      }, 1000)
    }
  })

  const bannerData = [
    {
      image: "/banner-1.png",
      title: "Would you like more value for your project?",
      desc: "We ensure all services and products had certified quality, fabricated and handled with dedicated manpower in their respective competentcies and engineering discipline"
    },
    {
      image: "/banner-2.jpg",
      title: "We make sure your project run properly?",
      desc: "We ensure all services and products had certified quality, respective competentcies and engineering discipline"
    },
    {
      image: "/banner-3.jpg",
      title: "Would you like more value for your project?",
      desc: "We ensure all services and products had certified quality, fabricated and handled with dedicated manpower in their respective competentcies and engineering discipline"
    },
  ]

  return (
    <>
      <div className='flex h-[654px] relative'>
        {bannerData?.map((item, i) => (
          <div key={i} className={`absolute w-full h-[654px] ${show === i ? "left-0 blur-none" : "-left-full blur-md"} transition-all duration-700`}>
            <img src={item.image} alt='' className={`object-cover brightness-50 w-full h-[650px] ease-linear object-bottom`}/>
            <div className='absolute w-full h-full top-0 bottom-0 left-0 right-0 z-20 mt-40'>
              <Container>
                <div className={`w-[50%] space-y-12 leading-none absolute ${isFull ? "left-28" : "-left-full"} transition-all duration-500`}>
                  <div className='text-white text-[54px] font-semibold'>{item?.title}</div>
                  <div className='text-white text-xl'>{item?.desc}</div>
                  <div className='flex space-x-3'>
                    <Button title="Our Service"/>
                    <Button title="Contact Us" contained/>
                  </div>
                </div>
              </Container>
            </div>
            <div className='h-1 w-full flex'>
              <div className={`bg-primary ${isFull ? "w-full transition-all duration-[8000ms] ease-linear" : "w-0"}`}></div>
              <div className={`bg-transparent ${isFull ? "w-0" : "w-full"}`}></div>
            </div>
          </div>
        ))}
        <div className='absolute bottom-20 right-20 z-20 flex space-x-4'>
          <ArrowBack
            fontSize='large' 
            className='hover:scale-150 scale-125 shadow-md hover:shadow-lg shadow-black bg-[#DBD5D2] p-2 transition-all duration-500 ease-in-out cursor-pointer'
          />
          <ArrowForward
            // onClick={nextHero}
            fontSize='large' 
            className='hover:scale-150 scale-125 shadow-md hover:shadow-lg shadow-black bg-[#DBD5D2] p-2 transition-all duration-500 ease-in-out cursor-pointer'
          />
        </div>
      </div>
      <Container>
        <div className='space-y-5 py-16'>
          <h2 className='font-bold text-secondary text-4xl'>Building Your Vision with Quality and Innovation</h2>
          <p>Established in 2012, Struktura has been a leading force in the construction industry, specializing in commercial office building construction. Our commitment to quality and innovation sets us apart.</p>
        </div>
      </Container>
    </>
  )
}
