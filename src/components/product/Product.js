import React from "react";
import "./Product.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoCartOutline} from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishes } from "../../context/wishes";
import { incCart } from "../../context/cartSlice";
import {toast} from 'react-toastify'
import { Link } from "react-router-dom";

function Product({ data }) {
  const dispatch = useDispatch();
  const wishes = useSelector(s => s.wishes.value)

  const handleAddToCart = (el)=>{
    dispatch(incCart(el))
    toast.success("Savatchaga muvaffaqiyatli qo'shildi")
  }

  return (
    <div className="products__wrapper">
      {data?.map((el) => (
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
            <div onClick={() => handleAddToCart(el)} className="products__cart">
              <IoCartOutline />
            </div>
        </div>
      ))}

    </div>
  );
}

export default Product;
