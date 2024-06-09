import React from 'react'
import { useState } from 'react'

export const ProjectCard = (props) => {
    const [isHover, setHover] = useState(false)
  return (
    <div 
        className='w-full bg-white shadow-md' 
        onMouseEnter={() => setHover(true)} 
        onMouseLeave={() => setHover(false)}
    >
        <div className='overflow-hidden h-[60%] w-full'>
            <img 
                src={props.img} 
                alt='' 
                className={`w-full h-full object-cover transision-all duration-1000 ${isHover ? "scale-125" : ""}`}
            />
        </div>
        <div className='space-y-4 p-4'>
            <div className='font-semibold text-xl'>Container Set Up</div>
            <div className='capitalize flex space-x-3'>
                <div className=''>
                    <div>Client</div>
                    <div>scope</div>
                    <div>location</div>
                </div>
                <div className=''>
                    <div>:</div>
                    <div>:</div>
                    <div>:</div>
                </div>
                <div className=''>
                    <div>{props.client}</div>
                    <div>{props.scope}</div>
                    <div>{props.location}</div>
                </div>
            </div>
        </div>
    </div>
  )
}
