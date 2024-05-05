"use client"
import React from 'react'

export const Container = (props) => {
  return (
    <>
      <div className="overflow-y-auto max-w-[1300px] mx-auto lg:px-10 md:px-14 px-6 lg:py-12 pt-10 pb-24">
        {props.children}
      </div>
    </>
  )
}
