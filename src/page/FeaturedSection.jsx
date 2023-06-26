import React from 'react'
import HeadingsComponent from '../components/generic/HeadingsComponent'
import FeaturedBurgerComponent from '../components/FeaturedBurgerComponent'

const FeaturedSection = () => {
  return (
    <div className="flex flex-col w-full px-24 md:px-80 xl:px-100 py-100 justify-center items-center gap-82">
      <HeadingsComponent subheading={'Happiness in your hands'} highlighted={'Feel'} heading={'the hype'} />

      {/* Burger list */}
      <FeaturedBurgerComponent />
    </div>
  )
}

export default FeaturedSection