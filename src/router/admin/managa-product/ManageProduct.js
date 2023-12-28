import React, {useEffect, useState} from 'react'
import Product from "../../../components/product/Product"
import { db } from '../../../server/Firebase'
import { collection, getDocs } from 'firebase/firestore'
import Skeleton from '../../../components/product/Skeleton'

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


  return (
    <div>
      <h2>ManageProduct</h2>

      {
        data.length ? 
        <Product data={data} admin={true}/> 
        :
        <Skeleton/>
      }
    </div>
  )
}

export default ManageProduct