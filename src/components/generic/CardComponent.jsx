import React from 'react'
import { BURGERLIST } from '../../utils/featuredBurgers'

const CardComponent = () => {
  return (
    <>
    {
      BURGERLIST.map((value, index) =>(
        <div className="flex flex-col px-24 xl:px-48 py-24 w-full rounded-card border-primary border-[1px] hover:bg-primary justify-center" key={index}>
          <img src={value.image} alt={value.name} className='lg:h-full xl:h-[330px]' />
          <div className="flex flex-row gap-16 text-card text-[20px] xl:text-card uppercase text-white w-full">
            <div className="w-full">{value.name}</div>
            {value.price}
           
          </div>

        </div>
      )
      )
    }
    </>
  )
}

export default CardComponent