import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";
import { NavLink, useNavigate } from "react-router-dom";
import { LoginContext } from "../context/ContextProvider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import Rightheader from "./Rightheader";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LogoutIcon from '@mui/icons-material/Logout';
import {ToastContainer, Zoom, toast } from 'react-toastify';
import { useSelector } from "react-redux";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

// let a;
// let b;
const Navbar = () => {
  const { account, setAccount } = useContext(LoginContext);
  const history = useNavigate();
  console.log(account);
  // const [cartnum, setCartnum] = useState(0);
  // const [profile, setProfile] = useState("");
  // console.log(account.carts);
  const [dropen, setDropen] = useState(false);

  const [text, setText] = useState("");
  const [ liopen, setLiopen] = useState(true);
  const {products} = useSelector(state=>state.getproductsdata);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickClose = () => {
    setAnchorEl(null);
  };

  const getdetailvaliduser = async () => {
    const res = await fetch("validuser", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await res.json();
    console.log(data);

    // a = data.carts.length
    // setCartnum(data.carts.length);
    // console.log(cartnum,a)
    // b = account?.fname?.
    // // setProfile(b);
    // console.log(b[0].toUpperCase())

    if (res.status !== 201) {
      console.log(data);
    } else {
      console.log("data valid");
      setAccount(data);
    }
  };
  const handleOpen = ()=>{
    setDropen(true);
  }
  const handleClose = ()=>{
    setDropen(false);
  }

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
  };
  const getText = (items)=>{
      setText(items)
      setLiopen(false);
  }
  useEffect(() => {
    getdetailvaliduser();
    // eslint-disable-next-line
  }, []);

  return (
    <header>
      <nav>
        <div className="left">
          <IconButton className="hamburgur" onClick={handleOpen}>
            <MenuIcon style={{ color: "fff" }} />
          </IconButton>
          <Drawer open={dropen} onClose={handleClose}>
            <Rightheader logclose={handleClose}/>
          </Drawer>
          <NavLink to="/">
            <div className="navlogo">
              <img
                src="https://github.com/harsh17112000/E-commerceapp/blob/main/client/public/amazon_PNG25.png?raw=true"
                alt="logo"
              />
            </div>
          </NavLink>

          <div className="nav_searchbaar">
            <input type="text" name="" 
            onChange={(e)=>getText(e.target.value)}
            placeholder="search your products"
            id="" />
            <div className="search_icon">
              <SearchIcon id="search" />
            </div>
            {
              text && <List className="extrasearch" hidden={liopen}>
                        {
                          products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(products=><ListItem>
                            <NavLink to={`/getproductsone/${products.id}`} onClick={()=>setLiopen(true)}>
                            {
                              products.title.longTitle
                            }
                            </NavLink>
                            
                          </ListItem>)
                        }
              </List>
            }
          </div>
        </div>
        <div className="right">
          <div className="nav_btn">
            {
              (account?.fname?.toUpperCase()?<NavLink onClick={logoutuser} to="/login">Sign Out</NavLink> :<NavLink to="/login">Sign In</NavLink> )
            }
            
          </div>
          <div className="cart_btn">
            {account?.fname?.toUpperCase() ? (
              <NavLink to="/buynow">
                <Badge badgeContent={account?.carts?.length} color="primary">
                  <ShoppingCartIcon id="icon" />
                </Badge>
              </NavLink>
            ) : (
              <NavLink to="/login">
                <Badge badgeContent={0} color="primary">
                  <ShoppingCartIcon id="icon" />
                </Badge>
              </NavLink>
            )}
              <ToastContainer />
            <p>Cart</p>
          </div>
          {account ? (
            <span className="avtar2"
            id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
            
              {account?.fname?.toUpperCase()}
              <br />
            </span>
          ) : (
            <Avatar className="avtar"></Avatar>
          )}
          
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClickClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        
        <MenuItem onClick={handleClickClose}>My account</MenuItem>
        {
            (account?.fname?.toUpperCase()) ? <MenuItem onClick={handleClickClose} ><LogoutIcon onClick={logoutuser} style={{fontSize:19, marginRight:3}}/><span onClick={logoutuser}>Sign Out</span></MenuItem> : " "
        }
        
      </Menu>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
//account.fname[0].toUpperCase()
//account.carts.length
//account?.carts?.length
