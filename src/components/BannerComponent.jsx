import React from 'react'

const BannerComponent = ({ text }) => {
  return (
    <div className=" w-fit grid grid-cols-3 md:grid-cols-6 gap-8 md:gap-16 lg:gap-[80px] xl:gap-[100px] text-[16px] font-[700] xl:text-red-heading md:text-[18spx] text-primary uppercase bg-transparent  py-48 h-[142px] items-center justify-center animate-pulse mx-auto">

        {
          [...Array(6)].map((_, index) => (
            <>
              <div className="w-fit">
                {text}
              </div>

            </>
          ))
        }
    

    </div>
  )
}

export default BannerComponent