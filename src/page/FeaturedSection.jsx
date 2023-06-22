import React from 'react'
import HeadingsComponent from '../components/generic/HeadingsComponent'

const FeaturedSection = () => {
  return (
    <div className="flex flex-col w-full px-100 py-100 justify-center items-center">
      <HeadingsComponent subheading={'Happiness in your hands'} highlighted={'Feel'} heading={'the hype'} />
    </div>
  )
}

export default FeaturedSection