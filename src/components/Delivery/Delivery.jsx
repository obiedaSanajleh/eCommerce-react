import React from 'react'
import './Delivery.css'
import pic22 from './../../assets/img/pic22.svg'
function Delivery() {
  return (
    <>
    <div className='delivery-section' >
        <div className='container-delivery-section'>
            <div className='row-delivery-section'>
               
                <div className='description-part'>
                        <h3>Fast & Secure Delivery</h3>
                        <p>We ensure a seamless shopping experience from the moment you place your order until it arrives at your doorstep. Our flexible shipping options cater to your needs, whether you prefer express delivery or a budget-friendly option. Our team works diligently to ensure safe and timely deliveries, with continuous tracking updates. No matter where you are, your order will reach you with care and quality!</p>
                       

                </div>


                <div className='img-part'>
                    <img src={pic22} alt="pic22" />
                </div>

            </div>
        </div>
    </div>




   </>
  )
}

export default Delivery