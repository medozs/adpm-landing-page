/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useEffect, useState } from 'react';
import { Container } from '../components/container';
import { ArrowBack, ArrowForward, DrawOutlined, Handyman, PeopleOutline, SentimentSatisfiedAlt } from '@mui/icons-material';
import Button from '../components/button';
import { ServiceCard } from '../components/card/serviceCard';
import { bannerData, serviceList } from '../utils/dummyData';

export default function Home() {
  const [isFull, setFull] = useState(false)
  const [show, setShow] = useState(0)

  const [data1, setData1] = useState(0)
  const [data2, setData2] = useState(0)
  const [data3, setData3] = useState(0)
  const [data4, setData4] = useState(0)

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

  const countNum = (data, num) => {
    let startVal = num > 500 ? 500 : 0
    let endVal = parseInt(num)
    let duration = Math.floor(500 / endVal)
    let counter = setInterval(function () {
      startVal = startVal + 1
      if (startVal === endVal) {
        clearInterval(counter)
      }
      if(data === 1) {
        setData1(startVal)
      } else if (data === 2) {
        setData2(startVal)
      } else if (data === 3) {
        setData3(startVal)
      } else if (data === 4) {
        setData4(startVal)
      }
    }, duration)
  }

  useEffect(() => {
    countNum(1, 28)
    countNum(2, 200)
    countNum(3, 40)
    countNum(4, 1000)
  }, [])

  return (
    <>
      <div className='flex h-[700px] relative'>
        {bannerData?.map((item, i) => (
          <div key={i} className={`absolute w-full h-[700px] ${show === i ? "left-0 blur-none" : "-left-full blur-md pr-32"} overflow-hidden transition-all duration-700`}>
            <img 
              src={item.image} 
              alt='' 
              loading='lazy'
              className={`object-cover brightness-50 w-full h-[700px] ease-linear object-bottom ${isFull ? "scale-125 transition-all duration-[8000ms] ease-linear" : ""}`}
            />
            <div className='absolute w-full h-full top-0 bottom-0 left-0 right-0 z-20 mt-52'>
              <Container>
                <div className={`w-[60%] space-y-12 leading-none absolute z-20 ${isFull ? "left-28" : "-left-full"} transition-all duration-500`}>
                  <div className='text-white text-[54px] font-semibold'>{item?.title}</div>
                  <div className='text-white text-xl'>{item?.desc}</div>
                  <div className='flex space-x-3'>
                    <Button title="Our Service"/>
                    <Button title="Contact Us" contained/>
                  </div>
                </div>
              </Container>
            </div>
          </div>
        ))}
        <div className='absolute bottom-20 right-20 z-20 flex space-x-4'>
          <ArrowBack
            fontSize='large' 
            className='hover:scale-150 scale-125 shadow-md hover:shadow-lg shadow-black bg-[#DBD5D2] p-2 transition-all duration-500 ease-in-out cursor-pointer'
          />
          <ArrowForward
            fontSize='large' 
            className='hover:scale-150 scale-125 shadow-md hover:shadow-lg shadow-black bg-[#DBD5D2] p-2 transition-all duration-500 ease-in-out cursor-pointer'
          />
        </div>
      </div>
      <div className='h-2 w-full flex'>
        <div className={`bg-primary ${isFull ? "w-full transition-all duration-[8000ms] ease-linear" : "w-0"}`}></div>
        <div className={`bg-transparent ${isFull ? "w-0" : "w-full"}`}></div>
      </div>
      <div className='bg-section'>
        <Container>
          <div className='py-32 flex space-x-8'>
            <div className='w-[50%] space-y-16 my-auto'>
              <h2 className='font-bold text-4xl'>Building Your Vision with Quality and Innovation</h2>
              <p className=''>Established in 2012, Struktura has been a leading force in the construction industry, specializing in commercial office building construction. Our commitment to quality and innovation sets us apart.</p>
            </div>
            <div className='flex justify-between w-[50%] space-x-5'>
              <div className='w-[50%] space-y-5'>
                <div className='flex space-x-3 text-primary'>
                  <Handyman fontSize='large'/>
                  <div className='text-secondary space-y-2'>
                    <div className='font-bold text-2xl'>{data1}</div>
                    <div className='font-bold'>Project Completed</div>
                    <div>Our customer trust us again and again to manage their most important building construct</div>
                  </div>
                </div>
                <div className='flex space-x-3 text-primary'>
                  <SentimentSatisfiedAlt fontSize='large'/>
                  <div className='text-secondary space-y-2'>
                    <div className='font-bold text-2xl'>{data2}</div>
                    <div className='font-bold'>Happy Customer</div>
                    <div>Our customer trust us again and again to manage their most important building construct</div>
                  </div>
                </div>
              </div>
              <div className='w-[50%] space-y-5'>
                <div className='flex space-x-3 text-primary'>
                  <DrawOutlined fontSize='large'/>
                  <div className='text-secondary space-y-2'>
                    <div className='font-bold text-2xl'>{data3}</div>
                    <div className='font-bold'>Design Services</div>
                    <div>Our customer trust us again and again to manage their most important building construct</div>
                  </div>
                </div>
                <div className='flex space-x-3 text-primary'>
                  <PeopleOutline fontSize='large'/>
                  <div className='text-secondary space-y-2'>
                    <div className='font-bold text-2xl'>{data4}</div>
                    <div className='font-bold'>Worker Employed</div>
                    <div>Our customer trust us again and again to manage their most important building construct</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className='py-32 flex space-x-32 items-center justify-between'>
          <img src='/banner-3.jpg' alt='' className='w-[50%] h-[500px] object-cover object-bottom'/>
          <div className='w-[50%] space-y-5'>
            <div className='font-bold text-4xl text-right'>We’re the future of mining industry</div>
            <div className='text-right'>We ensure all services and products had certified quality, fabricated and handled with dedicated manpower in their respective competentcies and engineering discipline</div>
            <div className='flex justify-end'>
              <Button title="Contact Us" contained/>
            </div>
          </div>
        </div>
      </Container>
      <div className='bg-section'>
        <Container>
          <div className='py-32 flex space-x-16'>
            <div className='w-[40%] space-y-16 border-b-2 border-black'>
              <h2 className='font-bold text-4xl'>ALL YOU NEED PRODUCT & SERVICES</h2>
              <p className=''>Simplify your industrial journey with ease. All You Need Products & Services empowers you to achieve operational success.</p>
              <div className='flex'>
                <Button title="SEE ALL" contained/>
              </div>
            </div>
            <div className='w-[60%]'>
              <div className='flex space-x-4 justify-end mb-8'>
                <ArrowBack
                  fontSize='large' 
                  className='hover:scale-150 scale-125 shadow-md hover:shadow-lg shadow-black bg-primary p-2 transition-all duration-500 ease-in-out cursor-pointer'
                />
                <ArrowForward
                  fontSize='large' 
                  className='hover:scale-150 scale-125 shadow-md hover:shadow-lg shadow-black bg-primary p-2 transition-all duration-500 ease-in-out cursor-pointer'
                />
              </div>
              <div className='flex space-x-5 overflow-hidden'>
                {serviceList?.map((item, i) => (
                  <div key={i}>
                    <ServiceCard 
                      img={item.thumb}
                      title={item.title}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
