import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import "./article.css";
import "./ProductDetail.css";
import { useDispatch, useSelector } from "react-redux";
import { orderPlaced } from "../../Utility/Redux/cartSlice";
import Footer from "../../Footer/Footer";
import AddToCart from "../../Cart/AddtoCart";

function Article() {
  const [data, setData] = useState([]);
  const dispatch=useDispatch()
  const cart=useSelector(state=>state.cart)

  useEffect(() => {
    axios
      .get("https://back-q7ir.onrender.com/product/fetchdata")
      .then((res) => {
        setData(res.data.result);
        
      });
  });

  console.log(data)

  var { Id } = useParams();
  Id = +Id;
  var newCategory;
  for (var i = 0; i < data.length; i++) {
    if (data[i].ide === Id) {
      newCategory = data[i].category;
      break;
    }
  }


const handleBuy = () => {

  const API = "https://back-q7ir.onrender.com/orderdata/addorder";
  console.log("order placed");

  axios.post(API, cart);
  dispatch(orderPlaced());
};

  return (
    <div>
      {data
        .filter((val) => val.ide === Id)
        .map((value, index) => (
          <div key={index}>
            <div className='product'>
            <div className="PD_title">{value.name}</div>
            <div className="PDFlex">
                  <div className="product-container">
                    <div className="pd-img-cntnr">
                      <img
                        src={value.image}
                        alt="loading"
                        className="pDImg"
                      />
                    </div>
                    <div className="pd_text_cntnr">
                      <div className="pd_text_sub_cntnr">
                        <div>Price: ₹ {value.price}</div>
                        <div>Privious price:<p className='mrp'>{value.oPrice}</p></div>
                        <div className="rating">
                         <p>Rating:</p> 
                          <img src={value.ratting} alt='images not found' width="100px" height="50px"></img>
                        </div>
                        

                        {/* <div>Quantity Available: {value.quantity}</div> */}
                        </div>
                        
                         <div className="add-buy-btn"> <AddToCart item={value}/></div>
                        <button onClick={handleBuy}>Buy Now</button>
                        
                    </div>
                  </div>
                </div>
              </div>
            </div>
        ))}
      <div className="FeaturedHomeCntnr">

        <div className="FeaturedSubCntnr">
        {data
          .filter((val) => val.ide !== Id && val.category === newCategory)
          .slice(0, 3)
          .map((value, index) => (
            <div key={index} className="Featcard">
                <NavLink to={`/article/${value.ide}`} className="Featcard-data">
                  {/* {console.log(item)} */}
                  <img src={value.image} alt="Product" />
                  <div className="product_title">{value.name}</div>
                  <p>Price: ₹{value.price}</p>
                </NavLink>
                <AddToCart value={value} />
              </div>
          ))}
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Article;
