import React from 'react'
import "./Sidebar.css"
import { IoHome } from "react-icons/io5";
import { FaBell } from "react-icons/fa6";
import { GoHeartFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";

function Sidebar({show, setShow}) {
  return (
    <>
        
        {show && <div onClick={()=> setShow(false)} className='sidebar__dark'>Sidebar</div>}
        <div className={`sidebar ${show? "active": ""}`}>
        <div className="top">
            <h2 className="logo">UZ</h2>
            <div>
                <h3>Uzum Market</h3>
                <h4>Web Site</h4>
            </div>
        </div>
        <div className="search">
            <i> <IoSearch/> </i>
            <input type="text" placeholder='Search...' />
        </div>
        <ul className="collection">
            <li className="item">
                <i> <IoHome/> </i>
                <span>Dashboard</span>
            </li>
            <li className="item">
                <i> <FaBell/> </i>
                <span>Notificaton</span>
            </li>
            <li className="item">
                <i> <GoHeartFill/> </i>
                <span>Likes</span>
            </li>
        </ul>
        </div> 
    </>
  )
}

export default Sidebar