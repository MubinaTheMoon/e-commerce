import React, {useEffect, useState} from 'react'
import {PRODUCTS} from "../../../static"
import Product from "../../../components/product/Product"
import { db } from '../../../server/Firebase'
import { collection, getDocs } from 'firebase/firestore'

function ManageProduct() {
  const [data, setData] = useState([])
  const usersCollectionRef = collection(db, "products");

  useEffect(()=> {
  const getProducts = async () => {
    const data = await getDocs(usersCollectionRef);
    setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

    getProducts();
  }, [])
  console.log(data);


  return (
    <div>
      <h2>ManageProduct</h2>
      
      <Product data={data}/> 
    </div>
  )
}

export default ManageProduct