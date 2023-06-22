import React from 'react'
import HeroSection from './HeroSection'
import BannerComponent from '../components/BannerComponent'
import FeaturedSection from './FeaturedSection'

const HomePage = () => {
  return (
    <>
    <HeroSection />
    <BannerComponent text={'take a bite'} />
    <FeaturedSection />
    </>
  )
}

export default HomePage