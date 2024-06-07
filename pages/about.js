import Image from 'next/image'
import React from 'react'
import { Container } from "../components/container";

const About = () => {
  return (
    <>
        <Image 
            height={800} 
            width={3000} 
            src='/about.jpeg' 
            className='w-full h-[700px] object-cover' 
            alt=''
        />
        <Container>
            <div className='space-y-8 my-32'>
                <div className='text-center max-w-[600px] mx-auto space-y-5'>
                    <div className='font-bold text-2xl'>COMPANY COMITMENT</div>
                    <div>ADPM prioritizing safety and professionalism into business core, aspect. We always make sure to fulfill all safety and business regulation, so that all works can be done properly and customers can trust us to do the work they provide.</div>
                </div>
            </div>
        </Container>
        <div className='bg-section py-32'>
            <Container className="space-y-8">
                <div className='flex justify-between w-[50%] mx-auto'>
                    <div className='text-3xl font-bold'>OUR VISION</div>
                    <div className='w-[50%]'>To be the premier and trusted provider of mechanical and manufacturing services to the mining industry, recognized for our innovation, expertise, and commitment to safety, making a positive impact on our customers and the environment.</div>
                </div>
                <div className='flex justify-between w-[50%] mx-auto'>
                    <div className='w-[50%]'>To be the premier and trusted provider of mechanical and manufacturing services to the mining industry, recognized for our innovation, expertise, and commitment to safety, making a positive impact on our customers and the environment.</div>
                    <div className='text-3xl font-bold'>OUR MISSION</div>
                </div>
            </Container>
        </div>
    </>
  )
}

export default About