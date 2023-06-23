import React from 'react'
import Button from './generic/Button'
import LinkComponent from './generic/LinkComponent'

const FooterComponent = () => {
  return (
    <div className="w-full py-80 px-100 h-auto flex flex-col gap-48">
      {/* newsletter + subscribe */}
      <div className="flex flex-row w-full">
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
            <div className="rounded-[30px] w-[265px] py-[12px] px-[12px] border-primary border-[1px] text-footer-b text-white font-body flex items-center">
              Enter your email
            </div>
            <LinkComponent><Button text={'subscribe'} hidden={true} /></LinkComponent>
          </div>
          <div className="text-footer-b text-white font-body flex items-center w-full">
            <p>
              By subscribing you agree to with our <text className='text-accent-2 underline'> Privacy Policy</text>
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default FooterComponent