import React from 'react'
import "./Product.css"

function Skeleton() {
  return (
    <div className='products__wrapper'>
        {
            new Array(10).fill("salom").map((_, inx)=> 
                <div key={inx} className='products__card'> 
                    <div className="skeleton__image skeleton__animated"></div>
                    <div className="skeleton__title skeleton__animated"></div>
                    <div className="skeleton__title skeleton__animated"></div>
                    <div className="skeleton__title skeleton__animated"></div>
                </div>
             )
        }
    </div>
  )
}

export default Skeleton