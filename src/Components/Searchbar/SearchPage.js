import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./searchbar.css";
import AddtoCart from "../Cart/AddtoCart";

function SearchPage() {
  const [data, setData] = useState([]);
  const [nullHandle, setNullHandle] = useState(false);
  const location = useLocation();
  // console.log(location.state);

  useEffect(() => {
    const query = location.state;
    // console.log(query);
    if (!query) {
      setNullHandle(true);
      setData([]);
    } else {
      const API = `https://front1-epws.onrender.com/product/search?keyword=${query}`;
      axios
        .get(API)
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    }
  }, [location.state]);

  return (
    <div className="ecom_cntnr">
      {nullHandle ? (
        <div className="search_null">
          <div>Enter the valid keyword</div>
        </div>
      ) : (
        <div className="FeaturedCntnr">
          <div className="FeaturedSubCntnr">
            {data.map((item) => {
              return (
                <div className="Featcard" key={item._id}>
                  <NavLink
                    to={`/article/${item.ide}`}
                    className="Featcard-data"
                  >
                    <img
                      //  onClick={()=>handleDetail(item)}
                      src={item.image}
                      alt="loading"
                    />
                    <div
                      //  onClick={()=>handleDetail(item)}
                      className="product_title"
                    >
                      {item.name}
                    </div>
                    <p>Price: ₹{item.price}</p>
                   
                  </NavLink>
                  <AddtoCart item={item} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchPage;
