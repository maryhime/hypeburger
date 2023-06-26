import React from 'react'
import HeadingsComponent from '../components/generic/HeadingsComponent'
import TestimonialCardComponent from '../components/TestimonialCardComponent'

const TestimonialsSection = () => {
  return (
    <div className="flex flex-col w-full px-24 md:px-80 xl:px-100 py-100 justify-center items-center gap-82">
      <HeadingsComponent highlighted={'Hear'} heading={'the hype'} />
      <div className="grid grid-cols-1 md:grid-cols-2 md:justify-center xl:grid-cols-4 gap-24">
        <TestimonialCardComponent />
      </div>


    </div>
  )
}

export default TestimonialsSection