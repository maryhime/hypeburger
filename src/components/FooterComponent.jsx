import React from 'react'
import Button from './generic/Button'
import LinkComponent from './generic/LinkComponent'
import { ICONS } from '../utils/icons'
import { FOOTERITEMS } from '../utils/footer'


const FooterComponent = () => {
  return (
    <div className="w-full py-80 px-24 md:px-64 lg:px-100 h-auto flex flex-col gap-48">
      {/* newsletter + subscribe */}
      <div className="flex flex-col gap-24 md:flex-row md:w-full items-center">
        <div className="flex flex-col w-full">
          <div className="text-footer-h text-primary uppercase font-headings ">
            Join Our Newsletter
          </div>
          <div className="text-footer-b text-white font-body">
            Get updated on the freshest news!
          </div>
        </div>

        {/* subscribe */}
        <div className="flex flex-col gap-16 w-full md:w-fit items-end">
          <div className="flex flex-col md:flex-row gap-16 w-full">
            <form id='email' >
              <input className="rounded-[30px] w-full md:w-[265px] py-[12px] px-[12px] border-primary border-[1px] text-footer-b text-white font-body flex items-center bg-[#00ffff00]" placeholder='Enter your email'>
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



      <div className="grid grid-cols-3 md:grid-cols-6">
        <div className="hidden md:flex"></div>
        {FOOTERITEMS.map((value, index) =>
          <div key={index} className="flex flex-col gap-16 ">
            <div className="text-footer-h uppercase text-primary font-headings">
              {value.title}
            </div>


            <ul className="text-white text-footer-b font-body flex flex-col gap-8">
              <li>{value.content[0]}</li> 
              <li>{value.content[1]}</li> 
              <li>{value.content[2]}</li> 
              <li>{value.content[3]}</li> 
              <li>{value.content[4]}</li> 
            </ul>
          </div>

        )}

      </div>

      <div className="flex flex-col pt-48 text-white gap-[32px] border-t-[1px] border-primary ">
        <div className="flex flex-col-reverse gap-8 md:gap-48 md:flex-row text-footer-b">
          <p className="w-72">
            2022 Hypeburger. All right reserved.
          </p>

          <div className="flex flex-row w-full">
            <ul className="flex flex-row w-full gap-16 justify-start underline">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookies Setting</li>
            </ul>

            {ICONS.map((value, index) =>
              <div className=" flex md:flex-row md:gap-16 justify-end" key={index}>
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