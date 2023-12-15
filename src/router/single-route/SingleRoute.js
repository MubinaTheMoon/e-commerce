import React, {useEffect} from 'react'
import "./SingleRoute.css"
import { useParams } from 'react-router-dom'
import NotFound from '../../components/not-found/NotFound'
import Product from '../../components/product/Product'
import { useDispatch } from 'react-redux'
import { incCart } from '../../context/cartSlice'
import { toast } from 'react-toastify'

function SingleRoute({data}) {
    const params = useParams()
    const SingleItem = data.find((el)=> el.id === params.id)
    const dispatch = useDispatch()

    const handleAddToCart = (SingleItem)=>{
        dispatch(incCart(SingleItem))
        toast.success("Savatchaga muvaffaqiyatli qo'shildi")
      }


    useEffect(()=> {
        window.scrollTo(0, 0)
    })



    if(!SingleItem){
        return <NotFound/>
    }
  return (
    <>
        <div className='container single__route'>
            <div className='single__route-img'>
                <img src={SingleItem.url} alt="" />
            </div>
            <div className='single__route-about'>
                <h2>{SingleItem.title}</h2>
                <h1>{SingleItem.price?.brm()} so'm</h1>
                <b style={{color: "limegreen"}}>{SingleItem.category}</b>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis distinctio est necessitatibus quod tempore placeat laborum eum quae modi eligendi.</p>
                <button onClick={()=> handleAddToCart(SingleItem)} className='btn'>Add to cart</button>
            </div>
        </div>

        <div className="container">
            <div className="new__ones">
                <h2 className='new__products'>New Products</h2>
                <Product data={data.slice(0, 5)} />
            </div>
        </div>
    </>
  )
}

export default SingleRoute