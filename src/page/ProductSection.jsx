import React from 'react'
import HeadingsComponent from '../components/generic/HeadingsComponent'
import CardComponent from '../components/generic/CardComponent'
import OutlinedButtonComponent from '../components/generic/OutlinedButtonComponent'
import LinkComponent from '../components/generic/LinkComponent'

const ProductSection = () => {
  return (
    <div className="flex flex-col w-full px-100 py-100 justify-center items-center gap-82">
      <HeadingsComponent subheading={'Made with love'} highlighted={'Featured'} heading={'Burgers'} />

      {/* cards */}
      <div className="grid grid-cols-3 gap-24">
        <CardComponent />
      </div>

      <LinkComponent>
        <OutlinedButtonComponent text={'View All'} hidden={true} />
      </LinkComponent>
    </div>
  )
}

export default ProductSection