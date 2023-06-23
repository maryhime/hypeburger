import React from 'react'
import { ICONS } from '../../utils/icons'


const Button = ({ text }) => {
  return (
    <div className='h-button w-fit flex flex-row gap-8 rounded-button justify-center items-center px-20 bg-primary text-white hover:bg-accent-2 font-headings text-button'>
      {ICONS.map((value, index) => (
         <img key={index} src={`${value.location}`} alt="" />
      ))}
      <div className={`text-button uppercase`}>
        {text}
      </div>


    </div>
  )
}

export default Button