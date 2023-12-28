import './App.css';
import SubHeader from './components/sub-header/SubHeader';
import Navbar from './components/navbar/Navbar';
import Cart from './router/cart/Cart';
import Wishes from './router/wishes/Wishes';
import Home from './router/home/Home';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import NavbarBottom from './components/navbar-bottom/NavbarBottom';
import Login from './router/login/Login';
import {PRODUCTS} from "./static"
import NotFound from './components/not-found/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import SingleRoute from './router/single-route/SingleRoute';
import Admin from './router/admin/Admin';
import Auth from './router/auth/Auth';
import { useState, useEffect } from 'react';
import { db } from './server/Firebase';
import { collection, getDocs } from 'firebase/firestore'

function App() {
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
    <div className="App">
        <SubHeader/>
        <Navbar data={data} />
        <NavbarBottom/>
        <Routes>
          <Route path='/' element={<Home data={data}/>}/>
          <Route path='/login' element={<Login/>}/>


          <Route path='/wishes' element={<Wishes/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/product/:id' element={<SingleRoute data={data} />}/>

          <Route path='/' element={<Auth/>} >
            <Route path='/admin/*' element={<Admin/>}/>
          </Route>
          
          <Route path='*' element={<NotFound/>}/> 
        </Routes>
        <Footer/> 
        <ToastContainer/>
    </div>
  );
}

export default App;
