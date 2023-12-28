import React from 'react'
import "./Admin.css"
import { useNavigate, Routes, Route, NavLink } from 'react-router-dom'
import { ADMIN_ROUTES } from '../../static/adminRoutes'

function Admin() {
  const navigate = useNavigate()
  return (
    <div className='admin'>
      <div className="admin__sidebar">
        <button onClick={()=> navigate("/")}>Orqaga</button>
        <h2>Admin</h2>
        <div className="admin__links">
          {
            ADMIN_ROUTES?.map((el, inx)=> <NavLink key={inx} to={el.link}>{el.title}</NavLink>)
          }
        </div>
      </div>
      <div className="admin__content">
        <Routes>
          {
            ADMIN_ROUTES?.map((el, inx)=> <Route key={inx} path={el.link} element={el.element}/> )
          }
        </Routes>
      </div>
    </div>
  )
}

export default Admin