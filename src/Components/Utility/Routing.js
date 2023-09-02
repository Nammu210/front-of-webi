import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Accessories from '../Pages/Accessories'
import Mobiles from '../Pages/Mobiles'
import Laptops from '../Pages/Laptops'
import Contact from '../Pages/Contact'
import LoginPage from '../Auth/Login/LoginPage'
import RegisterPage from '../Auth/Signup/Signup'
import Article from '../Pages/Article/Article'
import Cart from '../Cart/Cart'
import Storing from '../Pages/Storing'
import Watch from '../Pages/Watch'
import Private from './Privat'
import SearchPage from '../Searchbar/SearchPage'
import FeaturedProducts from '../Pages/Article/FeaturesProduct'
import Myaccount from '../Auth/Profile/Myaccount'

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Storing/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/accessories" element={<Accessories/>}/>
        <Route path="/mobiles" element={<Mobiles/>}/>
        <Route path='/laptops' element={<Laptops/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path="cart" element={<Private Component={Cart} />} />
        <Route path='/watch' element={<Watch/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path="article/:Id" element={<Article/>} />
        <Route path='/account' element={<Myaccount/>}/>
        <Route path='/search' element={<SearchPage/>}/>
        <Route path='/featuredproducts' element={<FeaturedProducts/>}/>
        </Route>


      </Routes>
    </BrowserRouter>
  )
}

export default Routing
