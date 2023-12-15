import React from 'react'
import Carousel from '../../components/carousel/Carousel'
import Product from '../../components/product/Product'

function Home({data}) {
  return (
    <div className='container'>
      <Carousel/>
      <Product data={data}/>
    </div>
  )
}

export default Home