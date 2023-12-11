import React, {useState} from 'react'
import "./CartProducts.css"
import {FaRegTrashAlt} from 'react-icons/fa'
import { incCart, decToCart, removeCart } from '../../context/cartSlice'
import { useDispatch } from 'react-redux'

function CartProducts({data}) {
  const dispatch = useDispatch()
  const [name, setName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [address, setAddress] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e)=> {
    e.preventDefault()
    let newInfo = {
      name,
      phoneNumber,
      address,
      message,
    }
  }
  return (
    <div className='cart__wrapper'>
      <div className="cart__products">
        {
          data?.map(el => <div key={el.title} className='cart__item'>
            <div className='cart__item-left'>
              <img src={el.url} alt={el.title} />
              <div>
                <h4>{el.title}</h4>
                <p>Kategoriya: {el.category}</p>
              </div>
            </div>   
            <div className="cart__item-right">
              <div className="cart__item-btns">
                <button disabled={el.quantity
                <= 1} onClick={() => dispatch(decToCart(el))}>-</button>
                <button>{el.quantity}</button>
                <button onClick={() => dispatch(incCart(el))}>+</button>
              </div>
              <div>
                <button  
                onClick={() => dispatch(removeCart(el))}
                className='cart__trash-btn'><FaRegTrashAlt/></button>
                <h3>{el.price?.brm()} so'm</h3>
                <p> {(el.price * el.quantity)?.brm()} so'm</p>
              </div>
            </div>
          </div> )
        }
      </div>
      <div className="cart__register">
        <div className="input__reg">
          <h3>Ma'lumotlarni to'ldiring:</h3>
          <form onSubmit={handleSubmit} action="">
            <input value={name} onChange={(e)=> setName(e.target.value)} required type="text" placeholder="To'liq ismingiz" />
            <input value={phoneNumber} onChange={(e)=> setPhoneNumber(e.target.value)} required type="text" placeholder="+998 00-000-00-00" />
            <input value={address} onChange={(e)=> setAddress(e.target.value)} required type="text" placeholder="Manzilingiz" />
            <input value={message} onChange={(e)=> setMessage(e.target.value)} required type="text" placeholder="Habar yo'llash" />
            <div className="total">
              <p>Umumiy narx:</p>
              <b>{data.reduce((a,b)=> a + b.price * b.quantity, 0)?.brm()} so'm</b>
            </div>
            <button className="btn-reg">Rasmiylashtirishga o'tish</button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default CartProducts