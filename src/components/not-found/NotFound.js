import React from 'react'
import img from "../../assets/notfound.webp"

function NotFound() {
  return (
    <div className='container'>
      <div  style={{textAlign: "center", margin:"120px 0 120px 0"}}>
        <img width={180} src={img} alt="" />
        <h3>Biz siz qidirayotgan narsani topa olmadik</h3>
        <p style={{fontSize: "14px", marginTop: "10px"}}>Mahsulot nomida xatolik yoki bizda hali bunday mahsulot boʻlmasligi mumkin</p>
      </div>
      
    </div>
  )
}

export default NotFound