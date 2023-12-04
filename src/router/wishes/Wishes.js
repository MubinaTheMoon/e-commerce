import React from 'react'
import { useSelector } from 'react-redux'
import Empty from '../../components/empty/Empty'
import Product from '../../components/product/Product'

function Wishes() {
  const wishes = useSelector(s => s.wishes.value)
  console.log(wishes);
  return (
    <div className='container'>
      {
        !wishes.length ?
         <Empty
        title="Sizga yoqqanini qoʻshing"
        url="https://uzum.uz/static/img/hearts.cf414be.png"
        desc="Mahsulotdagi ♡ belgisini bosing. Akkauntga kiring va barcha saralanganlar saqlanib qoladi"
        btnTitle="Akkauntga kirish"
        link="/login"
        /> :
        <Product data={wishes}/>
        
      }

    </div>
  )
}

export default Wishes