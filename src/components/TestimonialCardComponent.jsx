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
                [...Array(5)].map((_, index) => (
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
            <div className="flex flex-row font-headings text-[16px] font-semibold text-white w-full gap-24 items-center">
              <img src={value.image} alt={value.name} />

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