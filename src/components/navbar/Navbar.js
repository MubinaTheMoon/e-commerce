import React from 'react'
import "./Navbar.css"
import { CiSearch } from "react-icons/ci"
import { FaRegUser, FaRegHeart } from "react-icons/fa"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { IoHomeOutline, IoMenu } from "react-icons/io5"
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='container'>
      <div className="navbar">
        <h2 className="nav__logo">
          <NavLink to={"/"}>uzum market</NavLink>
        </h2>
        <button className='nav__category'>
          <IoMenu/>
          <span>Katalog</span>
        </button>
        <div className="nav__search">
          <input type="text" placeholder='Qidirish' />
          <button> <CiSearch/> </button>
        </div>
        <ul className="nav__collection">
          <li className="nav__item nav__home">
            <NavLink to={"/"}>
            <IoHomeOutline/>
            <span>Asosiy sahifa</span>
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to={"/login"}>
            <FaRegUser/>
            <span>Kirish</span>
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to={"/wishes"}>
            <FaRegHeart/>
            <span>Saralanganlar</span>
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to={"/cart"}>
            <AiOutlineShoppingCart/>
            <span>Savat</span>
            </NavLink>
          </li>
        </ul>





      </div>
    </div>
  )
}

export default Navbar