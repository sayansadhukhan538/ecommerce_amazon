import React, { useEffect, useState } from "react";
import "./Buynow.css";
import Option from "./Option";
import { Divider } from "@mui/material";
import Subtotal from "./Subtotal";
import Right from "./Right";
import { NavLink } from "react-router-dom";

const Byenow = () => {
  const [cartdata, setCartdata] = useState("");
 // console.log(cartdata);
  const getDataBuy = async () => {
    const res = await fetch("cartdetails", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await res.json();
    if (res.status !== 201) {
      console.log("error");
    } else {
      setCartdata(data.carts);
    }
  };
  useEffect(() => {
    getDataBuy();
  }, []);

  return (
    <>
      {cartdata.length ? (
        <div className="buynow_section">
          <div className="buynow_container">
            <div className="left_buy">
              <h1>Shopping Cart</h1>
              <p>Select all item</p>
              <span className="leftbuyprice">Price</span>
              <Divider />
              {cartdata.map((e, k) => {
                return (
                  <>
                    <div className="item_container" key={k}>
                      <img src={e.detailUrl} alt="" />
                      <div className="item_details">
                        <h3>
                          {e.title.longTitle}
                        </h3>
                        <h3>{e.title.shortTitle}</h3>
                        <h3 className="differentprice">{}</h3>
                        <p className="unusuall">
                          Usually dispatched in 8 days.
                        </p>
                        <p style={{userSelect:"none"}}>Eligible for FREE Shipping</p>
                        <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png" alt="" />
                        <Option deleteData={e.id} get={getDataBuy}/>
                      </div>
                      <h3 className="item_price">{e.price.cost}.00</h3>
                    </div>
                    <Divider />
                  </>
                );
              })}

              <Divider />
              <Subtotal item ={cartdata}/>
            </div>
            <Right item ={cartdata}/>
          </div>
        </div>
      ) : (
        <NavLink to='/login'/>
      )}
    </>
  );
};

export default Byenow;
