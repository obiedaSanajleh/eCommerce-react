import React from "react";
import './../Categories/Categories.css'

import Loader from './../Loader/Loader.jsx';

import { useState , useEffect } from "react";
import { useNavigate } from "react-router";

import  './../CategoriesCards/CategoriesCards.css';
function CategoriesCards() {


  let navigate = useNavigate();
  const [allProductsFromCategory, setAllProductsFromCategory] = useState([]);
   const [loading , setLoading] = useState(true);

    const [ categoriesTitles , setCategoriesTitles]=useState([]);

    useEffect(() => {
      const controller = new AbortController();
      const signal = controller.signal;
  
        getCategoryes(signal);
        return () => controller.abort();
      }, []);

    
      useEffect(() => {
        if (categoriesTitles.length > 0) {
          getProductsByCategory();
        }
      }, [categoriesTitles]);


    const getCategoryes =async (signal)=>{

        try {
         const  response = await fetch("https://fakestoreapi.in/api/products/category" , {signal})
            const res = await response.json();
            console.log(res.categories);
            setCategoriesTitles(res.categories);
            

            return res.categories ;

        } 
        
        catch (error){
          if (error.name !== "AbortError") { 
            console.error(e);
          }
            console.log("Error fetching data");
            return [];
        }
         finally{
          setLoading(false);
         }
    }


       
    const getProductsByCategory = async () => {
      const controller = new AbortController();
      const signal = controller.signal;

        setLoading(true);
      
        try {
          const products = [];
          
          // Fetch products for each category concurrently
          for (let categoryName of categoriesTitles) {
            const response = await fetch(`https://fakestoreapi.in/api/products/category?type=${categoryName}` , {signal});
            const res = await response.json();
            products.push({ categoryName, products: res.products });
          }
      
          // Update state with the fetched products
          setAllProductsFromCategory(products);
          
           
          
        } catch (error) {
          console.error("Error fetching products:", error);
          alert("An error occurred while fetching the products. Please try again later.");
          if (error.name !== "AbortError") { 
            console.error(error);
          }
          
        } finally {
           
          setLoading(false);
        }
      };
      

       const handelMoreClick = async (categoryName) => {
        const controller = new AbortController();
        const signal = controller.signal

    
     
          setLoading(true);
         
         
        
          console.log(`Fetching products for category: ${categoryName}`);
    
      
    
    
       
    
    
          try{
            const response = await fetch(`https://fakestoreapi.in/api/products/category?type=${categoryName}` , {signal});
          const res = await response.json();  
          setAllProductsFromCategory(res.products); 
    
        
          navigate("/shop", { state: { allProductsFromCategory: res.products } });
    
         
        }
    
          catch(error){
            if (error.name !== "AbortError") { 
              console.error(error);
            }
              console.error(error);
              alert("An error occurred while fetching the products. Please try again later.")
          }
          finally{
    
              setLoading(false);
             
          }
    
        
    
      
    
    
    




      };

      const handelClickOnSingleProduct = (productId ) => {
 


        // Navigate to the product page with the selected product ID
    
       
        navigate("/product", { state: { productId : productId } });
    
      };
    



    if(loading){
       return <Loader  />;
    }





  return (
    <>
      {allProductsFromCategory.map((category, index) => (
        <div key={index} className="categories-cards">
          <div className="container-categories-cards">
            <div className="row-categories-cards">
              <div className="head-of-categories-cards">
                <h3>{category.categoryName}</h3>
                <hr />
              </div>
              <div className="categories-cards-items">
                {category.products.slice(1, 4).map((product) => (
                  <div key={product.id} className="categories-cards-item"onClick={()=>handelClickOnSingleProduct(product.id)}>
                    <div className="img-part">
                      <img src={product.image} alt="product" loading="lazy" />
                    </div>
                    <h3>{product.title}</h3>
                    <p>{product.price} $</p>
                  </div>
                ))}

                    <div className="product-card-more" onClick={()=>{handelMoreClick(category.categoryName)}  }>
                  
                    <h3>More</h3>
                    
                  </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default CategoriesCards;