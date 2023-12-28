import React from 'react'
import "./SubHeader.css"
import { useLocation } from 'react-router-dom';

function SubHeader() {
  const { pathname } = useLocation()
  if(pathname.includes("login") || pathname.includes("admin")){
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