import React from 'react'

import Footer from '../Footer/Footer'
import './home.css'
import FeaturedProducts from './Article/FeaturesProduct'
import Shipping from './shipping/Shipping'

import SlideShow from '../Slider/SlideShow'


const Home = () => {
  return (
    <div>
     <SlideShow/>
      <h1 className='best-head'>Best Features</h1>
     
      <br/>
      <FeaturedProducts/>
      <div className='best-head-sheeping'><Shipping/></div>
      
        <Footer/>
        </div>
        
  )
}

export default Home
