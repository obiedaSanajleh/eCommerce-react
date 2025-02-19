import React, { useEffect, useState ,useContext } from 'react'

import { useLocation, useNavigate } from "react-router";
import Loader from './../Loader/Loader';
import './SingleProduct.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Delivery from './../Delivery/Delivery'
import { context } from './../../context/Context';
import BuyNow from '../BuyNow/BuyNow';
import {
  faMagnifyingGlass,
  faUser,
  faHeart,
  faCartShopping,
  faGripLines,
} from "@fortawesome/free-solid-svg-icons";
function SingleProduct() {

   const [product , setProduct] =useState({});
   const [loading , setloading] =useState(true);
   const [isFavorite, setIsFavorite] = useState(false);
    const [isInCart, setIsInCart] = useState(false);
    const [BuyNowPage, setBuyNowPage] = useState(false);

    const location = useLocation();
    const { productId} = location.state ;

    const { cartItems, setCartItems } = useContext(context);
    const {favItems, setFavItems}  = useContext(context);
    const {currentPrice, setCurrentPrice } = useContext(context);


        
    useEffect(() => {
      const controller = new AbortController();
      const signal = controller.signal;
  

        getProduct(productId , signal) ;
        
      return () => {
        controller.abort();
      };



    },[]);
    
    useEffect(() => {
      setIsFavorite(favItems.some(item => item.id === product.id));
    }, [favItems, product.id]);
  
    useEffect(() => {
      setIsInCart(cartItems.some(item => item.id === product.id));
    }, [cartItems, product.id]);
   




      const getProduct = async (productId , signal) => {
        try {
          const res = await fetch(`https://fakestoreapi.in/api/products/${productId}`,{signal});
          const productData = await res.json();
          setProduct(productData.product);
          setCurrentPrice(productData.product.price); 
        } catch (error) {
          if (error.name !== "AbortError") { 
            console.error(error);
          }
     

          console.error("Failed to fetch product:", err);
        } finally {
          setloading(false);
        }
      };




    

    const addToFav = ()=>{

      if (isFavorite) {
        setFavItems(favItems.filter(item => item.id !== product.id));
      } else {
        setFavItems([...favItems, product]);
      }

    }

    const addToCart = ()=>{
             if (isInCart) {
              setCartItems(cartItems.filter(item => item.id !== product.id));
      } else {
        setCartItems([...cartItems, product]);
      }

    }

    const handelClickBuyNow = ()=>{
      document.querySelector('.buy-now-container').classList.remove('ds-none');

    };











    if(loading){
        return <Loader />
    }

  return (
    <>
      <BuyNow />
    <div className='single-product'>
        <div className='container-single-product'>
    
                <div className='row-single-product'>
             
                
                        <div className='single-product-part'>
                            <div className='pic-part'>
                            <img src={product.image} alt="pic" />
                            </div>

                                <div className='text-part'>
                                <h2>{product.title}</h2>
                                <p>{product.description}</p>
                                <p>Price: {product.price}$</p>
                                <p>Brand: {product.brand}</p>
                                <p>Model: {product.model}</p>
                                <p>Color: {product.color}</p>
                                <p>Category: {product.category}</p>  

                                <div className='btn-part'>
                                    <button  className={`add-to-cart-btn ${isInCart ? 'clicked-btn' : ''}`} onClick={addToCart}>Add to Cart</button>
                                    <button onClick={handelClickBuyNow}>Buy Now</button>
                                    <button className={`fav-btn ${isFavorite ? 'clicked-btn' : ''}`}  onClick={addToFav}>  <FontAwesomeIcon icon={faHeart} /> </button>
                                    </div>
                                    
                                </div>
                              
                            </div>
                          

                </div>
        </div>  
    </div>

</>
  )
}

export default SingleProduct