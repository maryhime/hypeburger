import React from 'react'
import { NAVIGATIONS } from '../routes'

const NavbarComponent = () => {
  return (
    <div className="w-full flex flex-row gap-48 px-24 md:px-48 lg:px-100 py-24 bg-transparent items-center">
      <div className="w-full">
        <img src="images/logo.svg" alt="" />
      </div>
      <div className="hidden md:block lg:block w-full items-center">
        <ul className='flex flex-row gap-16 uppercase text-primary text-navbar font-headings justify-end'>
          {NAVIGATIONS.map((value, index) => <li key={index}>{value}</li>)}
        </ul>
      </div>
      <div className="px-[12px] py-[12px]">


      </div>

    </div>
  )
}

export default NavbarComponent