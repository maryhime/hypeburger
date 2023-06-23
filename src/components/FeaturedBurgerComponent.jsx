import React, { Fragment } from 'react'
import { FEATUREDBURGERS } from '../utils/featuredBurgers'
import OutlinedButtonComponent from './generic/OutlinedButtonComponent'
import LinkComponent from './generic/LinkComponent'

const FeaturedBurgerComponent = () => {
  return (
    <Fragment>
      {
        FEATUREDBURGERS.map((value, index) => (
          <div className={`flex xl:flex ${value.isFlip ? 'flex-row-reverse' : 'flex-row'} gap-48 w-fit items-center`} key={index}>
            <img className='w-[500px] xl:w-full' src={value.image} alt="" />

            <div className="flex flex-col gap-48 w-full uppercase font-headings">
              <div className="text-h2 text-primary">
                {value.title}
              </div>

              <div className="text-body text-white uppercase font-body font-[700]">
                {value.description}
              </div>
              <LinkComponent >
                <OutlinedButtonComponent className={'btn-secondary'} text={'Learn More'} />
              </LinkComponent>


            </div>
          </div>
        ))
      }
    </Fragment>


  )
}

export default FeaturedBurgerComponent