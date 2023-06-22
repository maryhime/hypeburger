import React from 'react'
import Button from './generic/Button'
import { featuredBurgers } from '../utils/featuredBurgers'




const FeaturedBurgerComponent = () => {
  return (

    <>
      {featuredBurgers.map((value, index) => (
        <div className={`flex lg0:flex ${value.flip ? 'flex-row-reverse' : 'flex-row'} gap-48 w-full items-center`}>
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
      ))}
    </>


  )
}

export default FeaturedBurgerComponent