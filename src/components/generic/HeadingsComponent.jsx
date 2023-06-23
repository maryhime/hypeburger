import React from 'react'

const HeadingsComponent = ({subheading,highlighted, heading}) => {
  return (
    <div className="flex flex-col gap-25 w-fit items-center">
      <div className="text-accent-2 uppercase text-red-heading flex justify-center">
        {subheading}
      </div>
      <div className="text-main uppercase text-white text-center">
        <span className='text-primary'>{highlighted} </span>{heading}
      </div>
    </div>
  )
}

export default HeadingsComponent