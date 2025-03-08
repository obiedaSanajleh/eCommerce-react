
import './App.css'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'



import AllProducts from './components/AllProducts/AllProducts'
import { BrowserRouter, Routes, Route } from "react-router";

import Home from './components/Home/Home'
import ContactUs from './components/ContactUs/ContactUs';
import SingleProduct from './components/SingleProduct/SingleProduct';
import Cart from './components/Cart/Cart';
import Favorite from './components/Favorite/Favorite';
import {ContextProvider} from './context/Context';
import User from './components/User/User';
import SignUp from './components/SignUp/SignUp';

function App() {


  return (
    <>
<ContextProvider>
<BrowserRouter>
<Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/shop" element={<AllProducts />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/favorite" element={<Favorite />} />
      <Route path="/product" element={<SingleProduct />} />
      <Route path="/user" element={<User />} />
      <Route path="/signup" element={<SignUp/>} />

      
    </Routes>
    <Footer />
  </BrowserRouter>
  
  </ContextProvider>
 
    </>
  )
}

export default App
