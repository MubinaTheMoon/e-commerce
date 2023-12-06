import React from 'react'
import { useParams } from 'react-router-dom'
import {PRODUCTS} from '../../static'
import NotFound from '../not-found/NotFound'
import "./CartProducts.css"

function CartProducts() {
    const params = useParams()
    const item = PRODUCTS.find(i => i.id === params.id)

    if( !item ){
        return <NotFound/>
    }

  return (
    <div className='container'>
        <div>
            <img src={item?.url} width={300} alt="" />
        </div>
    </div>
  )
}

export default CartProducts