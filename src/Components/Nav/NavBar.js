import React from 'react'
import {NavLink} from 'react-router-dom'
import './NavBar.css'
import LogoFile from './logos/LogoFile'

const NavBar = () => {
  return (
    <>
    <div>
    <div className='logo'>
        <h1 className='logo-name'>SayChoice</h1>
        </div>
      <nav>
        <input type="checkbox" id="check"/>
        <div className='label'>
        <label for="check">
       <i class="fas fa-bars" id="btn"></i>
       <i class="fas fa-x" id="cancel"></i>
        </label>
        </div>
        
        <ul className='main-nav-list'>
          <li className='active'>
            <NavLink to="/" className="nav_link">
              Home
            </NavLink>
            <div classname="dropdown-list">
                <ul className='list'>
                <li><NavLink className="drpdwn-link" to='/accessories'>Accessories</NavLink></li>
                  <li><NavLink className="drpdwn-link" to='/mobiles'>Mobiles</NavLink></li>
                  <li><NavLink className="drpdwn-link" to='/watch'>watch</NavLink></li>
                  <li><NavLink className="drpdwn-link" to='/laptops'>Laptop</NavLink></li>
                  <li><NavLink className="drpdwn-link" to='/contact'>Contact</NavLink></li>

                </ul>
              </div>
          </li>
          
          <li className='active'>
            <NavLink to="/accessories" className="nav_link">
              Accessories
            </NavLink>
           
          </li>
       
          <li className='active'>
            <NavLink to="/mobiles" className="nav_link">
              Mobiles
            </NavLink>
             

          </li>
          <li className='active'>
            <NavLink to="/watch" className="nav_link">
              Watch
            </NavLink>
              
          </li>
          <li className='active'>
            <NavLink to="/laptops" className="nav_link">
              
              Laptops
              </NavLink>
             
                
          </li>
          <li className='active'>
            <NavLink to="/contact" className="nav_link">Contact</NavLink>
             
               
               
              
          </li>
        </ul>
      </nav>
<LogoFile/>
    </div>
    </>
  )
}

export default NavBar