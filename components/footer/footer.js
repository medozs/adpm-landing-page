import { Facebook, Instagram, X } from '@mui/icons-material'
import React from 'react'
import { Container } from '../container'
import { menu } from '../../utils/routeList'
import { useRouter } from 'next/router'

export const Footer = () => {
    const {push} = useRouter()
  return (
    <div className='pt-32 pb-8 bg-footer text-white'>
        <Container>
          <div className='flex justify-between'>
            <div className='w-[30%] border-r-2 border-white'>
              <div className='space-y-5'>
                <div className='text-bold text-3xl'>Logo</div>
                <div>in Industry, the heartbeat of modern civilization resonates through the relentless pursuit of progress.</div>
              </div>
            </div>
            <div className='w-[30%] border-r-2 border-white'>
                <div className='font-bold'>Menu</div>
                {menu.map((item, i) => (
                  <div 
                    key={i}
                    className='cursor-pointer pt-2 hover:underline'
                    onClick={() => push(item.route)}
                  >
                    {item.title}
                  </div>
                ))}
            </div>
            <div className='w-[30%] space-y-4'>
              <div>
                <div className='font-bold'>PT Adi Prakarsa Mekanindo</div>
                <div>Tower 25-28 Floor</div>
                <div>District 8 SCBD</div>
                <div>Jalan Jenderal Sudirman</div>
                <div>Jakarta Selatan, Indonesia</div>
              </div>
              <div className='border-t-[1px] border-white pt-4'>
                <div>Telepon : +62 123 456 789</div>
                <div>Faksimile : +62 123 456 789</div>
              </div>
              <div className='flex space-x-3 border-t-[1px] border-white pt-4'>
                <Facebook className='w-8 h-8'/>
                <Instagram className='w-8 h-8'/>
                <X className='w-8 h-8'/>
              </div>
            </div>
          </div>
          <div className='border-t-[1px] text-center mt-12 border-white pt-4'>
            Copyright by PT Adi Prakarsa Mekanindo. All rights reserved
          </div>
        </Container>
      </div>
  )
}
