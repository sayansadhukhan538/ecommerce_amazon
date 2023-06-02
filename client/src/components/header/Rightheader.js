import React, { useContext } from "react";
import "./Rightheader.css";
import Avatar from "@mui/material/Avatar";
import { LoginContext } from "../context/ContextProvider";
import { NavLink, useNavigate } from "react-router-dom";
import { Divider } from "@mui/material";
import {ToastContainer, Zoom, toast } from 'react-toastify';

const Rightheader = ({logclose}) => {
  const { account, setAccount } = useContext(LoginContext);
  const history = useNavigate();
  const logoutuser = async () => {
    const res2 = await fetch("/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data2 = await res2.json();
    console.log(data2);
    if (res2.status !== 201) {
      console.log(data2);
    } else {
      console.log("data valid");
      setAccount(false);
      history("/")
      toast.success('LogOut Successful', {
        position: "top-center",
        autoClose: 2836,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Zoom,
        });
      
    }
  }

  return (
    <div>
      <div className="rightheader">
        <div className="right_nav">
          {account ? (
            <span className="avtar2">
              {account?.fname?.toUpperCase()}
              <br />
              <span></span>
            </span>
          ) : (
            <Avatar className="avtar"></Avatar>
          )}
        </div>
        <div className="nav_btn" onClick={()=>logclose()}>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/"}>Shop by Category</NavLink>
          <Divider style={{width:"100%", marginLeft:"-20px"}}/>
          <NavLink to={"/"}>Today's Deal</NavLink>
          {account ? (
            <NavLink to={"/buynow"}>Your Orders</NavLink>
          ) : (
            <NavLink to={"/login"}>Your Orders</NavLink>
          )}
          <Divider style={{width:"100%", marginLeft:"-20px"}}/>
          <div className="flag">
            
            {
              (account?.fname?.toUpperCase()?<NavLink onClick={logoutuser} to="/login">Sign Out</NavLink> :<NavLink to="/login">Sign In</NavLink> )
            }
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Rightheader;
