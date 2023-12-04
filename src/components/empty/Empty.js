import React from 'react'
import "./Empty.css"
import { useNavigate } from 'react-router-dom'

function Empty({title, url, desc, btnTitle, link}) {
    const navigate = useNavigate()
  return (
    <div className='empty'>
        <img width={150} src={url} alt="" />
        <h2>{title}</h2>
        <p>{desc}</p>
        <button onClick={()=> navigate(link)}>{btnTitle}</button>
    </div>
  )
}

export default Empty