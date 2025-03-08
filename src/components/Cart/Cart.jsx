import React, { useEffect, useState ,useContext } from 'react'
import './Cart.css'
import cartPic from './../../assets/img/cart-pic.svg'









import { context } from './../../context/Context'

import { useNavigate } from "react-router";
import BuyNow from '../BuyNow/BuyNow';


function Cart() {


  const {cartItems, setCartItems} = useContext(context);
  
  const {TotalPrice, setTotalPrice} = useContext(context);

      const {currentPrice, setCurrentPrice } = useContext(context);

    let navigate = useNavigate();
  
    const handelClickOnSingleProduct = (productId ) => {
   
  
  
   
  
     
      navigate("/product", { state: { productId : productId } });
  
    };
    const handelClickBuyNow = ()=>{
      document.querySelector('.buy-now-container').classList.remove('ds-none');

    };
    useEffect(() => {
      let total = 0;
      cartItems.forEach((item) => {
        total += item.price;
      });
    
      setTotalPrice(total);
    }, [cartItems]);

 useEffect(() => {
  setCurrentPrice(0);
}, []);
  
const handleClose = () => {
  setTotalPrice(0);

};

useEffect(() => {

  return () => {
    handleClose();
  };
}, []);


  return (
      <>
          <div className='cart'>
            <div className='container-cart'>
              <BuyNow />
              <div className='row-cart'>
                  <div className='img-part'>
                    <img src={cartPic} alt="cart-pic" />
                  </div>
                  <div className='text-part'>
                    <h2>Your cart Items</h2>
                    <p>You have {cartItems.length} cart item(s)</p>
                  </div>
                  <div className='card-part'>
                  {cartItems.map((product, index) => (
                  <div key={product.id} className="product-card" onClick={()=>handelClickOnSingleProduct(product.id)}>
                    <div className="img-part">
                      <img src={product.image} alt="product" loading="lazy" />
                    </div>
    
                    <h3>{product.title}</h3>
                    <p>{product.price} $</p>
                  </div>
                ))}

              
                  </div>
                  {
                  

                  cartItems.length === 0? (
                    <p>No items in the cart.</p>
                  ) : <button onClick={handelClickBuyNow}> Buy Now </button>    

                }

                      <div className="total-price">
                    <p>Total Price: {TotalPrice} $</p>
                      </div>
                </div>
            </div>  
          </div>
        
        </>
  )
}

export default Cart