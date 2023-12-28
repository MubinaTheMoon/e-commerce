import React, {useState} from 'react'
import { FaCamera } from 'react-icons/fa'
import "./CreateProduct.css"
// db - to save JSON | storage - to save files(images)
import { db, storage } from "../../../server/Firebase";
// collection - Array | addDoc - add Document(to upload your data)
import { collection, addDoc } from "firebase/firestore";
// below things for uploading images
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { toast } from 'react-toastify';

const category = ["texnika", "maishiy", "xo'jalik", "konstovar"]

function CreateProduct() {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [option, setOPtion] = useState("")
  const [file, setFile] = useState("")
  const [loading, setLoading] = useState("")

  const usersCollectionRef = collection(db, "products");
  const handleSubmit = async (e)=> {
    
    e.preventDefault()
    setLoading(true)
    // Upload the file to Firebase Storage
    const storageRef = ref(storage, `images/${file[0].name}`);
    const uploadTask = uploadBytes(storageRef, file[0]);

    // Wait for the upload to complete
    await uploadTask;
    // Get the download URL
    const downloadURL = await getDownloadURL(storageRef);

    await addDoc(usersCollectionRef, {
      title,
      price: Number(price),
      category: option,
      url: downloadURL, // Store the image URL in Firestore
    })
    .then(()=>{
      toast.success("Ma'lumot saqlandi")
      setTitle("")
      setFile("")
      setOPtion("")
      setPrice("")

      console.log("succesfully saved");
    })
    .catch(()=> {
      toast.error("Afsuski ma'lumot saqlanmadi")
      console.log("Ma'lumot saqlanmadi");
    })
    .finally(()=>{
      setLoading(false)
    })

  }


  return (
    <div>
        <h2>Create Product</h2>
        <form onSubmit={handleSubmit} className='create__product-form'>
          <input value={title} onChange={(e)=> setTitle(e.target.value)} required className='create__product-input' type="text" placeholder='title' />
          <input value={price} onChange={(e)=> setPrice(e.target.value)} required className='create__product-input' type="number" placeholder='price' />
          <select value={option} onChange={(e)=> setOPtion(e.target.value)} required className='create__product-input' name="" id="">
            <option disabled value="">Kategoriyani tanlang</option>
            {
              category?.map((i, inx) => <option key={inx} value={i}>{i}</option> )
            }
            
          </select>
          <div className="create__product-file">
            <FaCamera/>
            <input onChange={(e)=> setFile(e.target.files)} required accept='.png, .jpg, .jpeg, .heic' type="file" />
          </div>
          <br />
          <button disabled={loading} className='create__product-input'>{loading ? "Kuting..." : "Mahsulotni qo'shish"}</button>
        </form>
    </div>
  )
}

export default CreateProduct