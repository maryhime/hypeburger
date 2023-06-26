import React from 'react'
import { TESTIMONIALS } from '../utils/testimonials'

const TestimonialCardComponent = () => {
  return (
    <>
      {
        TESTIMONIALS.map((value, index) => (
          <div className="flex flex-col px-24 xl:px-48 py-24 w-full rounded-card border-primary border-[1px] justify-center gap-24" key={index}>
            <div className="w-full flex flex-row gap-8">
              {
                [...Array(value.rating_count)].map((_, index) => (
                  <>
                    <img src={value.rating} alt="" />
                  </>
                ))
              }
            </div>
            <div className="font-body text-[24px] text-white w-full font-thin">
              {value.description}
            </div>
            {/* avatar + name */}
            <div className="flex flex-row font-headings text-[16px] font-semibold text-white w-full gap-24 items-center ">
              <img src={`http://www.gravatar.com/avatar/${Math.random()}?d=identicon&s=100`} alt={value.name} className='rounded-[100px]' />

              <div className="w-full">{value.name}</div>

            </div>

          </div>
        )
        )
      }
    </>
  )
}

export default TestimonialCardComponent