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

function App() {
  return (
    <div className="App">
        <SubHeader/>
        <Navbar/>
        <NavbarBottom/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='wishes' element={<Wishes/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
        <Footer/> 
    </div>
  );
}

export default App;
