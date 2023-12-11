import React from 'react'
import "./NavbarBottom.css"
import { useLocation } from 'react-router-dom'

const DATA = [
    "Ektronika",
    "Maishiy texnika",
    "Kiyim",
    "Poyabzallar",
    "Aksesuarla",
    "Go'zallik",
    "Salomatlik",
    "Uy-ro'zg'or buyumlari",
    "Qurilish va ta'mirlash",
    "Avtotovarlar",
]

function NavbarBottom() {
  const { pathname } = useLocation()
  if(pathname.includes("login")){
    return <></>
  }

  return (
    <div className='container'>
        <div className="navbar__bottom">
            <h3>Muddatli to'lov</h3>
            {
                DATA?.map((el, inx)=> <p key={inx}>{el}</p> )
            }
        </div>
    </div>
  )
}

export default NavbarBottom