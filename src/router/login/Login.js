import React from 'react'
import "./Login.css"

function Login() {
  return (
    <div className='container'>
      <div className="login__card">
        <div className="login__list">
           <h2>Telefon raqamini kiriting</h2>
           <p className='sms'>Tasdiqlash kodini SMS orqali yuboramiz</p>
           <input type="text" required placeholder='+998 00 000-00-00' />
           <button>Kodni olish</button>
           <p className='link'>Avtotizatsiyadan o'tish orqali siz <a href="#">shaxsiy ma'lumotlarni qayta ishlash siyosatiga rozilik bildirasiz</a> </p>
        </div>
      </div>      
    </div>
  )
}

export default Login