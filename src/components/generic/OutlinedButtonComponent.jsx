import React, { Fragment } from 'react'
import { ICONS } from '../../utils/icons'

const OutlinedButtonComponent = ({ text, hidden = false }) => {
  return (
    <div className='h-button w-fit flex flex-row gap-8 rounded-button justify-center items-center px-20 border-[1px] border-primary text-primary 
    font-headings text-button' >
      {
        hidden ? <div className={`text-button uppercase`}>
          {text}
        </div> : (<Fragment>
          <div className={`text-button uppercase`}>
            {text}
          </div>

          {ICONS.map((value, index) => (
            <img key={index} src={`${value.arrow}`} alt="" />
          ))}
        </Fragment>)
      }
    </div>
  )
}

export default OutlinedButtonComponent