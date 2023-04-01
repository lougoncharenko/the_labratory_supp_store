import {Routes, Route, Navigate} from 'react-router-dom'
import React, {useState} from 'react';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
import ProductDetails from '../pages/ProductDetails';
import Checkout from '../pages/Checkout';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

const Routers = () => {
  const [supplementDetail, setSupplementDetail] = useState({});
  return (
   <Routes>
   <Route path="/" element ={<Navigate to='/home' />} />
    <Route path="home" element={<Home/>} />
    <Route path="shop" element={<Shop setSupplementDetail={setSupplementDetail}/>} />
    <Route path="shop/:id" element={<ProductDetails supplementDetail={supplementDetail} />} />
    <Route path="cart" element={<Cart/>} />
    <Route path="checkout" element={<Checkout/>} />
    <Route path="login" element={<Login/>} />
    <Route path="signup" element={<Signup/>} />
   </Routes>
  );
}

export default Routers;
