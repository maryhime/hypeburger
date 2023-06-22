import React from 'react'

const BannerComponent = ({ text }) => {
  return (
    <div className=" w-full lg:flex flex-row gap-[165px] text-red-heading text-primary uppercase bg-transparent px-64 py-48 h-[142px] items-center">
      {
        [...Array(5)].map((_, index) => (
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