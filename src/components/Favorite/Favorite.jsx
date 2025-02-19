import React, { useEffect, useState ,useContext } from 'react'
import './Favorite.css'


import favPic from './../../assets/img/fav-pic.svg'

import { context } from './../../context/Context'

import { useNavigate } from "react-router";
function Favorite() {
  const {favItems, setFavItems}  = useContext(context);

 
  let navigate = useNavigate();

  const handelClickOnSingleProduct = (productId ) => {
 


    // Navigate to the product page with the selected product ID

   
    navigate("/product", { state: { productId : productId } });

  };


  return (
    <>
      <div className='favorite'>
        <div className='container-favorite'>
          <div className='row-favorite'>
              <div className='img-part'>
                <img src={favPic} alt="fav-pic" />
              </div>
              <div className='text-part'>
                <h2>Favorite Items</h2>
                <p>You have {favItems.length} favorite item(s)</p>
              </div>
              <div className='card-part'>
              {favItems.map((product, index) => (
              <div key={product.id} className="product-card" onClick={()=>handelClickOnSingleProduct(product.id)}>
                <div className="img-part">
                  <img src={product.image} alt="product" loading="lazy" />
                </div>

                <h3>{product.title}</h3>
                <p>{product.price} $</p>
              </div>
            ))}

              </div>
            </div>
        </div>  
      </div>
    
    </>
  )
}

export default Favorite