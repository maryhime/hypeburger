import React from 'react'

const BannerComponent = ({ text }) => {
  return (
    <div className=" w-full flex lg:flex-row lg:gap-24 xl:gap-[165px] text-red-heading text-[24px] text-primary uppercase bg-transparent px-24 md:px-80 xl:px-100 py-48 h-[142px] items-center animate-pulse">
      {
        [...Array(7)].map((_, index) => (
          <>
            <div className="w-full">
              {text}
            </div>

          </>
        ))
      }
    </div>
  )
}

export default BannerComponent