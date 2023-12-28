import React, {useState} from 'react'
import "./CartProducts.css"
import {FaRegTrashAlt} from 'react-icons/fa'
import { incCart, decToCart, removeCart, deleteAllCart } from '../../context/cartSlice'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import Confettiparty from '../confettiparty/Confettiparty'
import { Link } from 'react-router-dom'

const BOT_TOKEN ="6797409692:AAGGlPygPC3iDwa4EeA5bNzoJWeEMYCLbZU"
const CHAT_ID = "-4031220765"
const PERSONAL_ID = "5512754167"

// https://api.telegram.org/bot6797409692:AAGGlPygPC3iDwa4EeA5bNzoJWeEMYCLbZU/getUpdates

function CartProducts({data}) {
  const dispatch = useDispatch()
  const [name, setName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [address, setAddress] = useState("")
  const [message, setMessage] = useState("")
  const [confetti, setConfetti] = useState(false)
  
  const handleSubmit = (e)=> {
    e.preventDefault()
    let order = "<b> Buyurtma: </b> %0A %0A"
    order += `Ismi: ${name} %0A`
    order += `Tel: ${phoneNumber} %0A`
    order += `Manzili: ${address} %0A`
    order += `Habar: ${message} %0A %0A`

    data.forEach((el)=>{
      order += `<b>nomi: </b> ${el.title} %0A `
      order += `<b>miqdori: </b> ${el.quantity.brm()} %0A `
      order += `<b>narxi: </b> ${el.price.brm()} %0A %0A`
    })
    
    order += `<b>Jami: ${data.reduce((a,b)=> a + b.price * b.quantity, 0)?.brm()} </b>`

    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${order}&parse_mode=html`
    
    let api = new XMLHttpRequest()
    api.open("GET", url, true)
    api.send()
    
    
    toast.success("Buyurtmangiz qabul qilindi. Qisqa vaqt ichida aloqaga chiqamiz! 😊") 
    setConfetti(true)
    setTimeout(()=>{
      dispatch(deleteAllCart())
    }, 6000)
  }
  return (
    <div className='cart__wrapper'>
      <div className="cart__products">
        {
          data?.map(el => <div key={el.title} className='cart__item'>
            <Link to={`/product/${el.id}`} className='cart__item-left'>
              <img src={el.url} alt={el.title} />
              <div>
                <h4>{el.title}</h4>
                <p>Kategoriya: {el.category}</p>
              </div>
            </Link>   
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
          <form onSubmit={handleSubmit} action="" >
            <input value={name} onChange={(e)=> setName(e.target.value)} required type="text" placeholder="To'liq ismingiz" />
            <input value={phoneNumber} onChange={(e)=> setPhoneNumber(e.target.value)} required type="text" placeholder="+998 00-000-00-00" />
            <input value={address} onChange={(e)=> setAddress(e.target.value)} required type="text" placeholder="Manzilingiz" />
            <input value={message} onChange={(e)=> setMessage(e.target.value)} required type="text" placeholder="Habar yo'llash" />
            <div className="total">
              <p>Umumiy narx:</p>
              <b>{data.reduce((a,b)=> a + b.price * b.quantity, 0)?.brm()} so'm</b>
            </div>
            <button className="btn-reg"> Rasmiylashtirishga o'tish</button>
          </form>
        </div>

      </div>
      {
        confetti ? <Confettiparty/> : <></> 
      } 
    </div>
  )
}

export default CartProducts