import React from 'react'

import HeadOfTheWebsite from './../HeadOfTheWebsite/HeadOfTheWebsite.jsx'
import ServiceCards from './../ServiceCards/ServiceCards'
import Categories from './../Categories/Categories'

import EndOfTheWebsite from './../EndOfTheWebsite/EndOfTheWebsite.jsx'

import About from './../About/About'
import CategoriesCards from '../CategoriesCards/CategoriesCards.jsx'
import Delivery from '../Delivery/Delivery.jsx'

function Home() {
  return (
 <>
  <HeadOfTheWebsite />
  <ServiceCards />
 
  <About />
  <Categories />
  <CategoriesCards />
  <Delivery />
  <EndOfTheWebsite />
  
  
 </>
  )
}

export default Home