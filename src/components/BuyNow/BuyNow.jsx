import React, { useRef  , useContext ,useState  } from 'react'
import { useLocation, useNavigate } from "react-router";
import './BuyNow.css'
import paymentGroup from'./../../assets/img/payment-group.png'
import ThankYouAlert from './../ThankYouAlert/ThankYouAlert';


import ErrorAlertMessage from './../ErrorAlert/ErrorAlert';

import { context } from './../../context/Context';
function BuyNow() {
    const {currentPrice, setCurrentPrice } = useContext(context);
   const {TotalPrice, setTotalPrice} = useContext(context);
     const {cartItems, setCartItems} = useContext(context);
    
    const cardNumberInputRef=useRef(null);  
    const mmYYInputRef=useRef(null);  

    const cvvInputRef=useRef(null);  



  const handelBackBtn = () => {
    document.querySelector('.buy-now-container').classList.add('ds-none');
  }

  const handelCompletePurchase = () => {
 
  
    
        if(cardNumberInputRef.current.value == "" || mmYYInputRef.current.value == ""|| cvvInputRef.current.value=="") {
            document.querySelector('.buy-now-container').classList.add('ds-none');
            document.querySelector('.error-alert-container').classList.remove('ds-none');
            

         
        }
        else{
            document.querySelector('.buy-now-container').classList.add('ds-none');
            document.querySelector('.thank-you-alert-container').classList.remove('ds-none');
            cardNumberInputRef.current.value = "";
            mmYYInputRef.current.value = "";
            cvvInputRef.current.value = "";

            if(currentPrice===0)
            setCartItems([]);




            setCurrentPrice(0);

            

           
            
        }




  }


  return (<>
    <ThankYouAlert />
    <ErrorAlertMessage />

     <div className="buy-now-container ds-none  ">
    
            <div className='buy-now-row'>

            <h2>Payment </h2>

            <div className='img-part'>
                    <img src={paymentGroup} alt="payment" />
            </div>

            <div className='payment-form'>
                
                <input ref={cardNumberInputRef} type="text" placeholder="Card Number" />
                <input ref={mmYYInputRef} type="text" placeholder="MM/YY" />
                <input ref={cvvInputRef} type="text" placeholder="CVV" />
                <h3 className='total-price'>
                  
                <h3 className='total-price'>
             Total Price: {TotalPrice !== 0 ? TotalPrice : currentPrice} $
              </h3>
                </h3>
                <button className='buy-btn' onClick={handelCompletePurchase}>Complete Purchase</button>
                <button className='back-btn' onClick={handelBackBtn}>Back </button>
                
                <p>By clicking Complete Purchase, you agree to our Terms & Conditions</p>

            </div>

            
                
            </div>
     
        </div>

        </>
  )
}

export default BuyNow