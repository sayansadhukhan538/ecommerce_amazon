import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/header/Navbar";
import Maincomp from "./components/home/Maincomp";
import Newnav from "./components/newnavbar/Newnav";
import {Routes, Route} from 'react-router-dom'
import SignIn from "./components/signup_signin/SignIn";
import SignUp from "./components/signup_signin/SignUp";
import Cart from "./components/Cart/Cart";
import Buynow from "./components/Buynow/Buynow";
import CircularProgressWithLabel from "./CircularProgressWithLabel"
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(false);
  useEffect(()=>{
    setTimeout(() => {
      setData(true);
    }, 1919);
  },[])

  return (
    <div>
      {
        data ? (<>
        <Navbar />
        <Newnav />
        <Routes>
          <Route path="/" element={<Maincomp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/getproductsone/:id" element={<Cart />} />
          <Route path="/buynow" element={<Buynow />} />
        </Routes>
        
        <Footer />
        </>) : (
          <div className="circle">
              <CircularProgressWithLabel />
              <h3 style={{marginLeft:"6px"}}>Please Wait...</h3>
          </div>
        )
      }
      
    </div>
  );
}

export default App;
