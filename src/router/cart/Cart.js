import React from 'react'
import { useSelector } from 'react-redux'
import Empty from '../../components/empty/Empty'
import Product from '../../components/product/Product'
import pic from "../../assets/shopocat.490a4a1.png"

function Cart() {
  const cart = useSelector(s => s.cart.value)
  console.log(cart);
  return (
    <div className='container'>
      {
        !cart.length ?
        <Empty
        title="Savatda hozircha mahsulot yoʻq"
        url={pic}
        desc="Bosh sahifadagi to’plamlardan boshlang yoki kerakli mahsulotni qidiruv orqali toping"
        btnTitle="Bosh sahifa"
        link="/"
        /> :
        <Product data={cart}/>
      }

    </div>
  )
}

export default Cart