import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="Footer_bar">
      <div className="Footer_bar_width">

<div className="container1">
      <div className="Con2">
        {/* <div className="logo"><DisplayIcon/></div> */}
      
      <div className="Con3">
          <div className="Copywrite">
            <h2 className='logo-name'>SayChoice</h2>
            <h3>Be stylish in Affortable Price</h3>
          </div>
      </div>
      </div>
      <div className="contact">
        <h3>Follow us</h3>
        
        <div>
                  <a
                    href="https://instagram.com/choic.2023?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
                    target="_blank">
                     <i class="fa-brands fa-instagram"></i> Instagram
                  </a>
        </div>
       
        <div>
        <a
                    href="https://www.youtube.com/@bestylishinaffortableprice"
                    target="_blank">
                       <i class="fa-brands fa-youtube"></i>Youtube
                  </a>
          
        </div>
      </div>

      <div className="Reference">
            <h3 className="References">References</h3>
            <div><NavLink to="/accessories" className="link">Accessories</NavLink></div>
            <div><NavLink to="/watch" className="link" >Watch</NavLink> </div>
            <div> <NavLink to="/mobiles" className="link">Mobiles</NavLink> </div>
            <div> <NavLink to="/laptops" className="link">Laptops</NavLink> </div>
            {/* <div> <NavLink to="/macbook" className="nav_link"> MacBook</NavLink> </div> */}
          </div>
      </div>
</div>
    </div>
  );
};

export default Footer;