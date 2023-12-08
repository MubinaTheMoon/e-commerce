import React from 'react'
import Empty from '../../components/empty/Empty'
import pic from "../../assets/shopocat.490a4a1.png"
import CartProducts from '../../components/cart-products/CartProducts'

function Cart() {
  let cart = true
  return (
    <div className='container'>
      {
        !cart ?
        <Empty
        title="Savatda hozircha mahsulot yoʻq"
        url={pic}
        desc="Bosh sahifadagi to’plamlardan boshlang yoki kerakli mahsulotni qidiruv orqali toping"
        btnTitle="Bosh sahifa"
        link="/"
        /> :
        <CartProducts/>
      }

    </div>
  )
}

export default Cart