import React, {useState} from "react";
import "./Product.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoCartOutline, IoCartSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishes } from "../../context/wishes";
import { toggleCart } from "../../context/cart";
import CartProducts from "../cart-products/CartProducts";

function Product({ data }) {
  const dispatch = useDispatch();
  const wishes = useSelector(s => s.wishes.value)
  const cart = useSelector(s => s.cart.value)

  return (
    <div className="products__wrapper">
      {data?.map((el) => (
        <div key={el.id} className="products__card">
          <div className="products__image">
            <img src={el.url} alt={el.title} />
          </div>
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
            <div onClick={()=> dispatch(toggleCart(el))} className="products__cart">
              {
                cart.some(i=> i.id === el.id) ? <IoCartSharp style={{color: "var(--bg-py)"}}/> :  <IoCartOutline />
              }
            </div>
        </div>
      ))}

    </div>
  );
}

export default Product;
