import React from 'react'
import { useSelector } from 'react-redux'
import Empty from '../../components/empty/Empty'
import Product from '../../components/product/Product'
import img from "../../assets/hearts.cf414be.png"

function Wishes() {
  const wishes = useSelector(s => s.wishes.value)
  console.log(wishes);
  return (
    <div className='container'>
      {
        !wishes.length ?
         <Empty
        title="Sizga yoqqanini qoʻshing"
        url={img}
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