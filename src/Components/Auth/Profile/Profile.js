import React, { useState } from 'react'
import './profile.css'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'

const Profile = () => {
  const name=localStorage.getItem('name')
  const [show,setShow]=useState(localStorage.getItem('loggedIn'))

  console.log(show)
  const handleLogout=()=>{
    localStorage.clear();
    setShow(!show);
    toast.info("Logout successfully",
    {position: toast.POSITION.TOP_RIGHT})
  }

  const Renderprofile=()=>{
    if(show){
      return (
        <div className='user-profile'>
           <ul>
           <li> Hi {name}</li>
            <li><NavLink to="/login" className="lgbtn" onClick={handleLogout} >Logout</NavLink>  </li>
          </ul>
    
        </div>
      )
    }
    else{
      return(
        <div className='user-profile'>
          <ul>
          <li><NavLink to="/register" className="register" >Signup</NavLink></li>
          <li><NavLink to="/login" className="login">Login</NavLink></li>
          </ul>
        </div>
      )
    }

}
return(
  <>
  <Renderprofile/>
  </>
)


}

export default Profile
