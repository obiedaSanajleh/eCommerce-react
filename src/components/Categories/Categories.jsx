import React from "react";
import './../Categories/Categories.css'
import imag from './../../assets/img/IMG.png';
import Loader from './../Loader/Loader.jsx';
import HeadOfTheWebsite from './../HeadOfTheWebsite/HeadOfTheWebsite.jsx'
import AllProducts from './../AllProducts/AllProducts.jsx'
import { useState , useEffect , useRef } from "react";
import { useNavigate } from "react-router";



function Categories() {

  const controllerRef = useRef(new AbortController());
  let navigate = useNavigate();
  const [allProductsFromCategory, setAllProductsFromCategory] = useState([]);
   const [loading , setLoading] = useState(true);

    const [ categories , setCategories]=useState([]);
    useEffect(()=>{
      const controller = new AbortController();
      const signal = controller.signal;
        getCategoryes(signal);
        return () => controller.abort();
    },[]);


    const getCategoryes =async (signal)=>{

        try {
         const  response = await fetch("https://fakestoreapi.in/api/products/category" , {signal})
            const res = await response.json();
            console.log(res.categories);
            setCategories(res.categories);
            

            return res.categories ;

        } 
        
        catch (e){
          if (e.name !== "AbortError") { 
            console.error(e);
          }
            console.log("Error fetching data");
            return [];
        }
         finally{
          setLoading(false);
         }
    }




    const getProductsByCategory = async(e) =>{
      
       controllerRef.current.abort();
      
       const controller = new AbortController();
       controllerRef.current = controller; 
       const signal = controller.signal;

      setLoading(true);
     
      const temp = e.target.innerText;
      const categoryName = temp.toLowerCase();
      console.log(`Fetching products for category: ${categoryName}`);

  


   


      try{
        const response = await fetch(`https://fakestoreapi.in/api/products/category?type=${categoryName}` , {signal});
      const res = await response.json();  
      setAllProductsFromCategory(res.products); 

    
      navigate("/shop", { state: { allProductsFromCategory: res.products } });

     
    }

      catch(e){
        if (e.name !== "AbortError") { 
          console.error(e);
        }
         
          alert("An error occurred while fetching the products. Please try again later.")
      }
      finally{

          setLoading(false);
         
      }

    

      }





    if(loading){
       return <Loader  />;
    }
   

  return (
    <>
      <div className="categories">
        <div className="container-category">
          <div className="row-category">
                <div className="head-of-categories">
                    <h3>Categories</h3>
                    <hr />
                </div>
                <div className="category-items">

                {
                    // map over categories and render items
                    categories.map((category, index) => (
                        <div className="category-item" key={index} onClick={getProductsByCategory}>
                          <h4>{category}</h4>
                        </div>
                    ))
                }
                    
       
          
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
