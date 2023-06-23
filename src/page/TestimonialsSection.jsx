import React from 'react'
import HeadingsComponent from '../components/generic/HeadingsComponent'
import TestimonialCardComponent from '../components/TestimonialCardComponent'

const TestimonialsSection = () => {
  return (
    <div className="flex flex-col w-full xl:px-100 py-100 justify-center items-center gap-82">
      <HeadingsComponent highlighted={'Hear'} heading={'the hype'} />
      <div className="flex flex-row gap-24">
        <TestimonialCardComponent />
      </div>


    </div>
  )
}

export default TestimonialsSection