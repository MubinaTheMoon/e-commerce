import React, {useState, useEffect} from 'react'
import "./ManageBlog.css"
import { db } from '../../../server/Firebase'
import { collection, getDocs } from 'firebase/firestore'

function ManageBlog() {
    const [data, setData] = useState([])
    const usersInfo = collection(db, "information");

    useEffect(()=> {
        const getInfo = async () => {
            const data = await getDocs(usersInfo);
            setData(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        };

        getInfo();
    }, [])
    console.log(data);


  return (
    <div>
        <h2>ManageBlog</h2>
        <div className='main'>
            {
                data.map((i) => <div key={i.id} className='middle'>
                    <h2 className='title'>{i.name}</h2>
                    <p className='text'>~ {i.text}</p>
                </div> )
            }
        </div>

    </div>
  )
}

export default ManageBlog