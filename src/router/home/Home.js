import React from 'react'
import Carousel from '../../components/carousel/Carousel'
import Product from '../../components/product/Product'
import Skeleton from '../../components/product/Skeleton'

function Home({data}) {
  return (
    <div className='container'>
      <Carousel/>
      {
        data.length ? 
        <Product data={data}/> :
        <Skeleton/>
      }
    </div>
  )
}

export default Home