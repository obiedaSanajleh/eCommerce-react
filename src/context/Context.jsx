import React, { createContext, useState } from "react";


export const context = createContext();


export const ContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); 
  const [favItems, setFavItems] = useState([]);    
  const [loading, setLoading] = useState(true);   
  const [currentPrice, setCurrentPrice] = useState(0);     
  const [TotalPrice, setTotalPrice] = useState(0);     
  



  return (
    <context.Provider value={{
      cartItems, setCartItems,
      favItems, setFavItems,
      loading, setLoading,
      currentPrice, setCurrentPrice,
      TotalPrice, setTotalPrice,
      
    }}>
      {children}
    </context.Provider>
  );
};

