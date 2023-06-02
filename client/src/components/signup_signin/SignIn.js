import React, { useState, useContext } from 'react'
import './sign.css'
import { NavLink, useNavigate } from 'react-router-dom'
import {ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoginContext } from '../context/ContextProvider';

const SignIn = () => {
  const[logdata, setData] = useState({
    email:"",
    password:"",
  });
  const history = useNavigate();

  const { setAccount} = useContext(LoginContext);

  const addData = (event)=>{
    const{name, value} = event.target;
    setData(()=>{
      return {
        ...logdata, [name]:value
      }
    })

  }
  const sendData = async (e)=>{
    e.preventDefault();
    const {email, password} = logdata;
    const res = await fetch("login",{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        email, password
      })
    });
    const data = await res.json();
    console.log(data);
    if(res.status === 400 || !data){
      console.log("invalid details");
      toast.warn("Invalid details or Unregistered User!")
    }
    else{
      console.log("data valid");
      setAccount(data);
      toast.success('Valid User', {
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
        history('/');
      setData({...logdata, email:"", password:""});
    }
  }

  

  // console.log(logdata)



  return (
    <div>
      <section>
        <div className="sign_container">
          <div className="sign_header mt-6">
            <img src="https://raw.githubusercontent.com/harsh17112000/E-commerceapp/main/client/public/blacklogoamazon.png" alt="amazon" />
          </div>
          <div className="sign_form">

            <form action="" method='POST'>
              <h1>Sign-In</h1>

              <div className="form_data">
                <label htmlFor="email">Enter number or email</label>
                <input type="text" onChange={addData} name='email' id='email' value={logdata.email}/>
              </div>

              <div className="form_data">
                <label htmlFor="password">Password</label>
                <input type="password" name='password' onChange={addData} id='password' value={logdata.password}/>
              </div>

              <button onClick={sendData} className='signin_btn'>Continue</button>
              <p className='detail'>By continuing, you agree to Amazon's <span className='text-blue-600'>Conditions of</span> </p>
              <p className='detail'> <span className='text-blue-600'>Use</span>  and <span className='text-blue-600'>Privacy Notice</span> .</p>
            </form>


          </div>
          <div className="create_accountinfo">
            <p>New to Amazon</p>
            <NavLink to='/register'>
            <button >Create your Amazon account</button>
            </NavLink>
            
          </div>
        </div>
        <ToastContainer />
      </section>
    </div>
  )
}

export default SignIn