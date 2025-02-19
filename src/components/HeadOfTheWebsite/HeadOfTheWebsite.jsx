import React from 'react'
import './HeadOfTheWebsite.css';
import iphoneImage from './../../assets/img/iphone.png'

import { useEffect } from'react'
import { useNavigate  } from 'react-router'
function HeadOfTheWebsite() {
    let navigate = useNavigate();

    const handelClickShopNowBtn = () => {
        
        navigate('/shop')
    }
        useEffect(() => {
        if (window.location.hash === "#home") {
          document.getElementById("home").scrollIntoView({ behavior: "smooth" });
        }
      }, [window.location.hash]);
    
  return (
   <>
    <div className='Head-of-the-website' id="home">
        <div className='container-head-of-the-website'>
            <div className='row-head-of-the-website'>
               
                <div className='description-part' >
                        <h3>iPhone 12: Power, Design, Innovation, Excellence</h3>
                        <p>Stunning display, advanced cameras, unmatched performance</p>
                        <button className='shop-now-btn' onClick={handelClickShopNowBtn}>Shop Now</button>

                </div>


                <div className='img-part'>
                    <img src={iphoneImage} alt="iphone" />
                </div>

            </div>
        </div>
    </div>




   </>
  )
}

export default HeadOfTheWebsite