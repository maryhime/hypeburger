import React from 'react'
import HeadingsComponent from '../components/generic/HeadingsComponent'
import Button from '../components/generic/Button'

const CTABlock = () => {
  return (
    <div className="bg-[url('/images/cta-bg.svg')] h-[600px] bg-no-repeat bg-cover bg-center w-full flex flex-col py-100 justify-center gap-48 overflow-hidden items-center">
      <HeadingsComponent subheading={'Come visit us at your local HYPEBURGER location'} highlighted={'Taste'} heading={'the Hype'} />

      <Button text={'Find Location'} />

    </div>
  )
}

export default CTABlock