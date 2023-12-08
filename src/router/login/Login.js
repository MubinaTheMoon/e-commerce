import React from 'react'
import "./Login.css"
import {Link} from "react-router-dom"

function Login() {
  return (
    <div className="login">
      <div className="login__box">
        <h2>Tizimga kirish</h2>
        <form action="">
          <input type="text" placeholder='Foydalanuvchi nomi' />
          <input type="password" placeholder='Parol' />
          <button type='submit'>Kirish</button>
        </form>
        <Link to={"/"}>
          <p className='link'>Asosiy sahifaga qaytish</p>
        </Link>
      </div>
      
    </div>
  )
}

export default Login