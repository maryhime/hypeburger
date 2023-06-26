import React from 'react'
import { NAVIGATIONS } from '../routes'
import { ICONS } from '../utils/icons'

const NavbarComponent = () => {
  return (
    <div className="w-screen flex flex-row gap-48 px-24 md:px-48 lg:px-100 py-24 bg-transparent items-center">
      <div className="w-full">
        <img src="images/logo.svg" alt="" />
      </div>
      <div className="hidden md:block lg:block w-full items-center">
        <ul className=' flex flex-row gap-16 uppercase text-primary text-navbar font-headings justify-end'>
          {NAVIGATIONS.map((value, index) => <li key={index}>{value}</li>)}
        </ul>
      </div>
      <div className="block">
        {ICONS.map((value, index)=>
          <img src={value.menu} key={index} className='w-[50px] h-[50px]' alt="hamburger menu" />
        )}

      </div>

    </div>
  )
}

export default NavbarComponent