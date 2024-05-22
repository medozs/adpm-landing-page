"use client"
import React from 'react'

export const Container = (props) => {
  return (
    <>
      <div className="max-w-[1250px] mx-auto lg:px-10 md:px-14 px-6">
        {props.children}
      </div>
    </>
  )
}
