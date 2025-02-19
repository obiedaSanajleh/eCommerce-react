import React, { useEffect, useState } from "react";
import "./../AllProducts/AllProducts.css";
import Categories from "./../Categories/Categories.jsx";
import { useLocation, useNavigate } from "react-router";
import Loader from "./../Loader/Loader.jsx";
import IMG from "./../../assets/img/IMG.png";
function AllProducts() {

  const location = useLocation();
  const { allProductsFromCategory } = location.state || { allProductsFromCategory: [] };
 let navigate = useNavigate();
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    if (allProductsFromCategory.length === 0 && allProducts.length === 0) {
      getProducts(signal);
    } else if (allProductsFromCategory.length > 0 && JSON.stringify(allProducts) !== JSON.stringify(allProductsFromCategory)    ) {
   
      setLoading(false);

      setAllProducts(allProductsFromCategory);
     
    }


    return () => controller.abort()
  }, [allProductsFromCategory]); 

  const getProducts = async (signal) => {
  
  
    try {
    
      if (allProductsFromCategory.length > 0) {
        setAllProducts(allProductsFromCategory);
      } else {
        const response = await fetch("https://fakestoreapi.in/api/products/category?type=gaming" , { signal } ); 
        const res = await response.json();
        setAllProducts(res.products); //
        
      }
    } catch (error) {
          if (error.name !== "AbortError") { 
            console.error(error);
          }
     
    } finally {
      
      setLoading(false);

    }
  };


  const handelClickOnSingleProduct = (productId ) => {
 


    // Navigate to the product page with the selected product ID

   
    navigate("/product", { state: { productId : productId } });

  };






  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }


  
  return (
    <>
      <div className="all-products">
        <div className="all-products-container">
          <Categories />

          <div className="all-products-row">
            {allProducts.map((product, index) => (
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
    </>
  );
}

export default AllProducts;









