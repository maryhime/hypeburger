import React, { Fragment } from 'react'
import Button from './generic/Button'
import { FEATUREDBURGERS } from '../utils/featuredBurgers'

const FeaturedBurgerComponent = () => {
  return (
    <Fragment>
      {
        FEATUREDBURGERS.map((value, index) => (
          <div className={`flex lg0:flex ${value.isFlip ? 'flex-row-reverse' : 'flex-row'} gap-48 w-full items-center`} key={index}>
            <img className='w-full' src={value.image} alt="" />

            <div className="flex flex-col gap-48 w-full uppercase ">
              <div className="text-h2 text-primary">
                {value.title}
              </div>

              <div className="text-body text-white uppercase">
                {value.description}
              </div>
              <Button style={'border-[1px] border-primary'} textColor={'text-primary'} text={'Learn More'} />
            </div>
          </div>
        ))
      }
    </Fragment>


  )
}

export default FeaturedBurgerComponent