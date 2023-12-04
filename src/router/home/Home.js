import React from 'react'
import Carousel from '../../components/carousel/Carousel'
import Product from '../../components/product/Product'
import {PRODUCTS} from "../../static"

function Home() {
  return (
    <div className='container'>
      <Carousel/>
      <Product data={PRODUCTS}/>
    </div>
  )
}

export default Home