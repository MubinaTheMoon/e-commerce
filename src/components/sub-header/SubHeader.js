import React from 'react'
import "./SubHeader.css"
import { useLocation } from 'react-router-dom';

function SubHeader() {
  const { pathname } = useLocation()
  console.log(pathname);
  if(pathname.includes("login")){
    return <></>
  }
  return (
    <div className='sub__header'>
      <div className="container">
        <p>Shahar <b>Toshkent</b> Topshiriqlar punkti</p>
        <p>Buyurtmalaringizni bir kunda yetkazib beramiz</p>
        <p>Savol-javoblar Buyurtmalarim</p>
      </div>
      
    </div>
  )
}

export default SubHeader