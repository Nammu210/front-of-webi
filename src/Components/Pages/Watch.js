import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Footer from '../Footer/Footer';
import { NavLink } from 'react-router-dom';
import AddToCart from '../Cart/AddtoCart';

const Ipad = () => {
  const [data,setData]=useState([]);

  useEffect(()=>{
    axios.get('https://back-q7ir.onrender.com/product/fetchbycat/watch')
    .then((res)=>{
      setData(res.data.result)
    })
  })

  
  return (
    <>
    <div className='heading'>
     <h1>Watch</h1>
       </div>
       <div className='sub-head'>
       <h3>Total Products:{data.length}</h3>
       </div>
    <div className='alldata'>
     {data.map((post)=>{
       const {ide,name,image,price,oPrice,ratting}=post
       return(
         <>
         <div className='main-content'>
         <NavLink to={`/article/${ide}`}>
                       <img
                         src={image}
                         width={200}
                         height={200}
                         alt={"img not found"}
                       />
 
                       <div className="content">
                         <h3 className="cotent-tittle">{name}</h3>
                         <br />
                         <img src={ratting} alt='images not found' width="100px" height="50px"></img>
                         <br />
 
                         <p className='price'>{price}...</p>
                         <br />
 
                         <p className='mrp'>{oPrice}</p>
                         <br/>
                         </div>
                         </NavLink>
                         <div className='btn-cart'>
                         <AddToCart item={post} />

                      </div>
                       
         </div>
         </>
       )
     })}
     </div>
     <Footer/>
    </>
   )
}

export default Ipad
