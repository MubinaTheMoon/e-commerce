import React, {useEffect} from 'react'
import Empty from '../../components/empty/Empty'
import pic from "../../assets/shopocat.490a4a1.png"
import CartProducts from '../../components/cart-products/CartProducts'
import { useSelector } from 'react-redux/es/hooks/useSelector'

function Cart() {
  let cart = useSelector(s => s.cart.value)

  useEffect(()=> {
    window.scrollTo(0, 0)
}, [])

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
        <CartProducts data={cart}/>
      }

    </div>
  )
}

export default Cart