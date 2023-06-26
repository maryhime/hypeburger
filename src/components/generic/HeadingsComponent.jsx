import React from 'react'

const HeadingsComponent = ({subheading,highlighted, heading}) => {
  return (
    <div className="flex flex-col gap-16 md:gap-25 items-center w-full">
      <div className="text-accent-2 uppercase text-[18px] font-[700] md:text-red-heading flex justify-center w-full text-center">
        {subheading}
      </div>
      <div className="text-main-m md:text-[100px] lg:text-[112px] xl:text-main text-white uppercase font-headings text-center w-full">
        <span className='text-primary'>{highlighted} </span>{heading}
      </div>
    </div>
  )
}

export default HeadingsComponent