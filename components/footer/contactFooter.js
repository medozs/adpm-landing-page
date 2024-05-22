/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Container } from '../container'
import Button from '../button'

export const ContactFooter = () => {
  return (
    <div className='py-20 bg-primary'>
        <Container>
          <div className='flex w-full relative justify-between'>
            <div className='space-y-10 w-[70%] my-auto'>
              <div className='text-5xl font-bold'>Smart Business <br/>Growth Starts Here. <br/>Take the First Step!</div>
              <div className='font-semibold'>Always Ready to Lend a Hand</div>
              <div className='flex'>
                <Button title="Contact Us" white/>
              </div>
            </div>
            <img src='people.png' alt='' className='absolute -top-[199px] right-0'/>
          </div>
        </Container>
    </div>
  )
}