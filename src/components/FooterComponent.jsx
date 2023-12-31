import React from 'react'
import Button from './generic/Button'
import LinkComponent from './generic/LinkComponent'
import { ICONS } from '../utils/icons'
import { FOOTERITEMS } from '../utils/footer'


const FooterComponent = () => {
  return (
    <div className="w-full py-80 px-24 md:px-64 lg:px-100 h-auto flex flex-col gap-48">
      {/* newsletter + subscribe */}
      <div className="flex flex-col gap-24 md:flex-row w-full lg:items-center">
        <div className="flex flex-col w-full">
          <div className="text-footer-h text-primary uppercase font-headings w-full">
            Join Our Newsletter
          </div>
          <div className="text-footer-b text-white font-body">
            Get updated on the freshest news!
          </div>
        </div>

        {/* subscribe */}
        <div className="flex flex-col gap-16 w-full lg:w-fit items-end">
          <div className="flex flex-col lg:flex-row gap-16 w-full">
            <form id='email' >
              <input className="rounded-[30px] w-full lg:w-[265px] py-[12px] px-[12px] border-primary border-[1px] text-footer-b text-white font-body flex items-center bg-[#00ffff00]" placeholder='Enter your email'>
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



      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-8">
        <div className="hidden lg:flex"></div>
        {FOOTERITEMS.map((value, index) =>
          <div key={index} className="flex flex-col gap-16 ">
            <div className="text-footer-h uppercase text-primary font-headings">
              {value.title}
            </div>

            {value.content.map((item, index) => <>
              <ul className="text-white text-footer-b font-body flex flex-col gap-8">
                <li>{item}</li>
              </ul>
            </>)}
          </div>

        )}

      </div>

      <div className="flex flex-col pt-48 text-white gap-[32px] border-t-[1px] border-primary ">
        <div className="md:text-[10px] lg:text-footer-b flex flex-col-reverse gap-16 lg:gap-48 md:flex-row text-footer-b">
          <p className="w-64 xl:w-72">
            2022 Hypeburger. All right reserved.
          </p>

          <div className="flex flex-col md:flex-row w-full gap-16 justify-end">
            <ul className="flex flex-row w-fit xl:w-full gap-8 lg:gap-16  justify-start underline items-center">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookies Setting</li>
            </ul>

            {ICONS.map((value, index) =>
              <div className=" flex w-full gap-16 md:w-fit md:flex-row md:gap-8 md:justify-end" key={index}>
                <img src={value.facebook} alt="" />
                <img src={value.instagram} alt="" />
                <img src={value.twitter} alt="" />
                <img src={value.linkedIn} alt="" />
              </div>

            )}

          </div>
        </div>

      </div>

    </div>
  )
}

export default FooterComponent