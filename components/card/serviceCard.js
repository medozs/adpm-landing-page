/* eslint-disable @next/next/no-img-element */
import React from 'react'

export const ServiceCard = ({img, title}) => {
  return (
    <div className='relative w-48 h-72'>
        <img src={img} alt='' className='w-full h-full object-cover grayscale hover:grayscale-0 transition-all'/>
        <div className='absolute bottom-2 left-2 text-white text-xl font-bold'>{title}</div>
    </div>
  )
}
