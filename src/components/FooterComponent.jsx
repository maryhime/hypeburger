import React from 'react'
import Button from './generic/Button'
import LinkComponent from './generic/LinkComponent'

const FooterComponent = () => {
  return (
    <div className="w-full py-80 px-100 h-auto flex flex-col gap-48">
      {/* newsletter + subscribe */}
      <div className="flex flex-row w-full items-center">
        <div className="flex flex-col w-full">
          <div className="text-footer-h text-primary uppercase font-headings">
            Join Our Newsletter
          </div>
          <div className="text-footer-b text-white font-body">
            Get updated on the freshest news!
          </div>
        </div>

        {/* subscribe */}
        <div className="flex flex-col gap-16 w-fit items-end">
          <div className="flex flex-row gap-16">
            <form >
              <input className="rounded-[30px] w-[265px] py-[12px] px-[12px] border-primary border-[1px] text-footer-b text-white font-body flex items-center bg-[#00ffff00]" placeholder='Enter your email'>
              </input>
            </form>

            <LinkComponent><Button text={'subscribe'} hidden={true} /></LinkComponent>
          </div>
          <div className="text-footer-b text-white font-body flex items-center w-full">
            <p>
              By subscribing you agree to with our <text className='text-accent-2 underline'> Privacy Policy</text>
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-6 ">
        <div className=""></div>

        {/* about */}
        <div className="flex flex-col gap-16 ">
          <div className="text-footer-h uppercase text-primary font-headings">
            About
          </div>

          <div className="text-white text-footer-b font-body flex flex-col gap-8 list-none">
            <li>Our Team</li>
            <li>Our Values</li>
            <li>Our Story</li>
          </div>

        </div>

        {/* menu */}
        <div className="flex flex-col gap-16 ">
          <div className="text-footer-h uppercase text-primary">
            Menu
          </div>

          <div className="text-white text-footer-b font-body flex flex-col gap-8 list-none">
            <li>Beef Burgers</li>
            <li>Vegan Burgerss</li>
            <li>Sides</li>
            <li>Drinks</li>
            <li>New Concept</li>
            <li></li>
            <li></li>
          </div>

        </div>

        {/* locations */}
        <div className="flex flex-col gap-16 ">
          <div className="text-footer-h uppercase text-primary">
            Locations
          </div>

          <div className="text-white text-footer-b font-body flex flex-col gap-8 list-none">
            <li>Los Angeles</li>
            <li>Miami</li>
            <li>New York</li>
            <li>Vancouver</li>
            <li>Toronto</li>
          </div>

        </div>

        {/* Company */}
        <div className="flex flex-col gap-16 ">
          <div className="text-footer-h uppercase text-primary">
            Company
          </div>

          <div className="text-white text-footer-b font-body flex flex-col gap-8 list-none">
            <li>Careers</li>
            <li>Become an Affiliate</li>
          </div>

        </div>

        {/* Learn */}
        <div className="flex flex-col gap-16 ">
          <div className="text-footer-h uppercase text-primary">
            Learn
          </div>

          <div className="text-white text-footer-b font-body flex flex-col gap-8 list-none">
            <li>Blog</li>
            <li>Recipe Books</li>
            <li>Community</li>
          </div>

        </div>

      </div>

      <div className="flex flex-col text-white gap-[32px] ">
       <hr />
        <div className="flex flex-row text-footer-b">
        <div className="w-full">
        2022 Hypeburger. All right reserved.
        </div>
 
        <ul className="flex flex-row w-full gap-16">
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Cookies Setting</li>
        </ul>

        

        </div>
      </div>

    </div>
  )
}

export default FooterComponent