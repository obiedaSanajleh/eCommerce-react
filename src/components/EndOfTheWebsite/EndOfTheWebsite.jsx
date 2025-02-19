import React from 'react'
import './../EndOfTheWebsite/EndOfTheWebsite.css'

import logo from './../../assets/img/obiedastore.svg'  

import { NavLink } from'react-router'

function EndOfTheWebsite() {
  return (
    <>
    <div className='end-of-the-website'>
        <div className='end-of-the-website-container'>
            <div className='end-of-the-website-row'>

                <div className='start'>
                    <div className='logo-part'>
                        <img src={logo} alt="logo" />
                        </div>
                    <p>Obiedashop offers high-quality products at competitive prices with seamless, secure shopping. Enjoy 24/7 customer support and a convenient shopping experience.</p>
                </div>
                <div className='center'>
                        <h3>Quick links</h3>
                        <ul>
              <li>
                <NavLink to="/home#home" end>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/home#about" end>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/shop" end>
                  Shop
                </NavLink>
              </li>
           
              <li>
                <NavLink to="/contact" end>
                  Contact
                </NavLink>
              </li>
            </ul>
                </div>
                <div className='end'>
                    <h3>Contact us</h3>
                    <button>
                        <NavLink className='NavLink' to="/contact" end> Click here to contact us </NavLink>                       
                      
                      </button>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default EndOfTheWebsite