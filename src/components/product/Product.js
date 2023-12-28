import React, { useState } from "react";
import "./Product.css";
import { FaRegHeart, FaHeart, FaTrash } from "react-icons/fa";
import { IoCartOutline} from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishes } from "../../context/wishes";
import { incCart } from "../../context/cartSlice";
import {toast} from 'react-toastify'
import { Link } from "react-router-dom";
import Skeleton from "./Skeleton";

function Product({ data, admin }) {
  const [count, setCount] = useState(1)
  const DEFAULT__COUNT = 5
  const dispatch = useDispatch();
  const wishes = useSelector(s => s.wishes.value)

  const handleAddToCart = (el)=>{
    dispatch(incCart(el))
    toast.success("Savatchaga muvaffaqiyatli qo'shildi")
  }

  return (
    <>
      <div className="products__wrapper">
      {data.slice(0, count * DEFAULT__COUNT)?.map((el) => (
        <div key={el.id} className="products__card">
          <Link to={`/product/${el.id}`} className="products__image">
            <img src={el.url} alt={el.title} />
          </Link>
          <div className="products__body">
            <p className="products__title">{el.title}</p>
            <div style={{ flex: 1 }}>
              <span className="products__monthly">
                {((el.price * 1.5) / 12)?.brm()} so'm/oyiga
              </span>
            </div>
            <del>{(el.price * 1.2)?.brm()} so'm</del>
            <p className="products__price">{el.price?.brm()} so'm</p>
          </div>

            <div onClick={()=> dispatch(toggleWishes(el))} className="products__wishes">
              {
                  wishes.some(item => item.id === el.id) ? <FaHeart style={{color: "var(--bg-py)" }}/> : <FaRegHeart/>
              }
            </div>
            {
              admin ?
              <div className="products__cart">
                <FaTrash/>
              </div>  :
              <div onClick={() => handleAddToCart(el)} className="products__cart">
                <IoCartOutline />
              </div> 
            }
        </div>
      ))}
      </div>
      {
        data.length >= count * DEFAULT__COUNT ? <button onClick={()=> setCount(p => p + 1)} className="product__btn">Ko'proq ko'rish</button> : <></>
      }
    </>
  );
}

export default Product;
