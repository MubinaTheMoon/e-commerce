import React, {useState, useEffect} from 'react'
import "./Navbar.css"
import { CiSearch } from "react-icons/ci"
import { FaRegUser, FaRegHeart } from "react-icons/fa"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { IoHomeOutline, IoMenu } from "react-icons/io5"
import { NavLink, useLocation } from 'react-router-dom'
import notfound from "../../assets/notfound.webp"

function Navbar({data}) {
  const [value, setValue] = useState("")
  const [searchData, setSearchData] = useState([])
  const { pathname } = useLocation()

  useEffect(()=> {
    if(value.trim()){
      setSearchData(data.filter(el => el.title.toLowerCase().includes(value.toLowerCase().trim())))
    }else{
      setSearchData([])
    }
  }, [value] )

  console.log(searchData);

  if(pathname.includes("login")){
    return <></>
  }

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
          <input 
          value={value}
          onChange={e => setValue(e.target.value)}
          type="text" 
          placeholder='Qidirish' />
          <button> {" "} <CiSearch/> {" "} </button>
          {
            value.trim() ? (
          <div  className="nav__search-drop">
            <p>Topilgan mahsulotlar: <b>{ searchData.length ? searchData.length + "ta" : "yo'q" }</b> </p>
            {
              searchData?.slice(0, 5)?.map((el)=> <div key={el.id} className='nav__search-item'>
                <img src={el.url} width={40} alt="" />
                <div>
                  <p>{el.title}</p>
                  <h4>{el.price?.brm()} so'm</h4>
                </div>
              </div> )
            }
            {
              !searchData.length && <div className="nav__search-notDefined">
                <img src={notfound} alt="" />
              </div>
            }

          </div> ) : (
            <></>
          )}
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