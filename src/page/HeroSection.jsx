import React from 'react'
import Button from '../components/generic/Button'
import LinkComponent from '../components/generic/LinkComponent'

const HeroSection = () => {
  return (
    <div className="bg-[url('/images/hero-background.svg')] h-fit w-full bg-blend-darken bg-repeat relative flex flex-col py-[103px] justify-center gap-48 overflow-hidden">
      <div className="flex flex-col justify-center  gap-24 lg:gap-48 px-24 md:px-48 xlg:px-100 z-20">
        <div className="text-main-m lg:text-main text-white uppercase font-headings text-center">
          Mind <span className='text-primary'>Blowing</span> bites
        </div>
        <div className="flex justify-center">
          <LinkComponent url={'#'}>
            <Button text={'Find Location'} style={'bg-primary text-white '} />
          </LinkComponent>
        </div>
      </div>
      <div className="relative w-full flex justify-center items-end">
        {/* burger */}
        <img className=' lg:pt-100 z-10 md:scale-95 xl:scale-125 ' src="images/hero-burger.svg" alt="" />

        {/* text behind burger */}
        <div className='hidden absolute top-40 left-0 -z-0  w-full md:flex flex-col opacity-50 blur-[10px]'>
          <div className="text-[380px] uppercase font-bold text-white leading-[0px] tracking-[-24px] animate-slide-left">
            MindBlowingBites
          </div>
          <div className="text-[380px] uppercase font-bold text-white leading-normal -translate-x-1/2 tracking-[-24px] animate-slide-right">
            MindBlowingBites
          </div>
          <div className="text-[380px] uppercase font-bold text-white leading-[0px] -translate-x-1/3 tracking-[-24px] animate-slide-left">
            MindBlowingBites
          </div>
        </div>
      </div>
      <img className='hidden 2xl:block absolute top-0 left-[350px] z-0 ' src="images/hero-blush.svg" alt="" />





    </div>
  )
}

export default HeroSection