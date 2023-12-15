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
import CartProducts from './components/cart-products/CartProducts';
import {PRODUCTS} from "./static"
import NotFound from './components/not-found/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import SingleRoute from './router/single-route/SingleRoute';
import Confettiparty from './components/confettiparty/Confettiparty';

function App() {
  return (
    <div className="App">
        <SubHeader/>
        <Navbar data={PRODUCTS} />
        <NavbarBottom/>
        <Routes>
          <Route path='/' element={<Home data={PRODUCTS}/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/wishes' element={<Wishes/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/confet' element={<Confettiparty/>}/>
          <Route path='/cart-products' element={<CartProducts/>}/>
          <Route path='/product/:id' element={<SingleRoute data={PRODUCTS} />}/>
          <Route path='*' element={<NotFound/>}/> 
        </Routes>
        <Footer/> 
        <ToastContainer/>
    </div>
  );
}

export default App;
