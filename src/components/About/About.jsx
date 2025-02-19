import React from 'react'
import './../About/About.css'
import aboutUsImage from './../../assets/img/E-Commerce-PNG-Photo.png'
import { useNavigate } from 'react-router'

import { useEffect } from 'react'

function About() { 

     useEffect(() => {
    if (window.location.hash === "#about") {
      document.getElementById("about").scrollIntoView({ behavior: "smooth" });
    }
  }, [window.location.hash]);

    let navigate = useNavigate();

    const handelClickShopNowBtn = () => {
        
        navigate('/shop')
    }
  return (
  <>
    <div className='about-section' id='about'>
        <div className='container-about-section'>
            <div className='row-about-section'>
               
                <div className='description-part'>
                        <h3>About Us</h3>
                        <p>At Obiedashop, we are committed to providing a unique and convenient shopping experience for our customers. We offer a wide range of high-quality products at competitive prices, with a strong focus on meeting your needs and delivering the best service.

We believe shopping should be easy and enjoyable, which is why we strive to provide a seamless and secure experience, along with exceptional customer support around the clock. Whether you're looking for unique products or special gifts, we're here to provide you with everything you need, maintaining the highest standards of quality.

Join our family today and discover a range of products that cater to your needs and lifestyle.</p>
                        <button className='shop-now-btn' onClick={handelClickShopNowBtn}>Shop Now</button>

                </div>


                <div className='img-part'>
                    <img src={aboutUsImage} alt="iphone" />
                </div>

            </div>
        </div>
    </div>




   </>
  )
}

export default About