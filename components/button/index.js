import React from 'react'

const Button = ({title, contained}) => {
  return (
    <div className={`px-6 py-1.5 text-base rounded-md text-bold border-2 ${contained ? "border-primary bg-primary text-secondary hover:bg-primary hover:border-primary hover:text-white" : "text-white hover:border-primary hover:text-primary"} shadow-lg cursor-pointer`}>
        {title}
    </div>
  )
}

export default Button