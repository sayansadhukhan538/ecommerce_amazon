import React, { useState } from 'react'
import './sign.css'
import { NavLink, useNavigate } from 'react-router-dom'
import {ToastContainer, Zoom, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const [udata, setUdata] = useState({
    fname: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: ""
});
const history = useNavigate();

console.log(udata);

const addData = (e) => {
    const { name, value } = e.target;
    // console.log(name,value);

    setUdata(() => {
        return {
            ...udata,
            [name]: value
        }
    })
};

  const sendData = async (e)=>{
    e.preventDefault();
    const {fname, email, mobile, password, cpassword} = udata;
    if(fname === " "){
      toast.warn("Please enter Full Name")
    }
    const res = await fetch("/register",{
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        fname, email, mobile, password, cpassword
      })
    });
    const data = await res.json();
    console.log(data);
    if(res.status === 422 || !data){
      toast.error('Invalid details!', {
        position: "top-center",
        autoClose: 2328,
        theme: "colored",
        transition: Zoom,
        });
    }
    else{
      toast.success('Log-in details succesfully updated', {
        position: "top-center",
        autoClose: 3142,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
        console.log(udata)
        history('/login')
      setUdata({...udata, fname:"", email:"", mobile:"", password:"", cpassword:""});
    }
  }

  return (
    <div>
      <section>
        <div className="sign_container">
          <div className="sign_header mt-6">
            <img src="https://raw.githubusercontent.com/harsh17112000/E-commerceapp/main/client/public/blacklogoamazon.png" alt="amazon" />
          </div>
          <div className="sign_form">
            <form  method='POST'>
              <h1>Sign-Up</h1>
              <div className="form_data">
                <label htmlFor="fname">Your Name</label>
                <input type="text" onChange={addData} value={udata.fname} required name='fname' id='fname' />
              </div>
              <div className="form_data">
                <label htmlFor="email">Enter E-mail (optional)</label>
                <input type="text" onChange={addData} value={udata.email} required name='email' id='email' />
              </div>
              <div className="form_data">
                <label htmlFor="mobile">Mobile Number</label>
                <input type="text" onChange={addData} value={udata.mobile} required name='mobile' id='mobile' />
              </div>
              <div className="form_data">
                <label htmlFor="password">Password</label>
                <input type="password" onChange={addData} value={udata.password} required name='password' placeholder='At least 6 char' id='password' />
              </div>
              <div className="form_data">
                <label htmlFor="cpassword">Password</label>
                <input type="password" onChange={addData} value={udata.cpassword} required name='cpassword' id='cpassword' />
              </div>
              <p className='text-[10px] text-slate-700 mt-[20px] mb-3 font-semibold '>By enrolling your mobile phone number, you consent to receive <br /> automated security notifications via text message from Amazon. <br /> Message and data rates may apply.</p>
              <button onClick={sendData} className='signin_btn'>Continue</button>
              <div className='signin_info'>
                <p>Already have an account ?</p>
                <NavLink to='/login'>
                  <button>Sign in</button>
                </NavLink>
              </div>
              
            </form>
          </div>
          <ToastContainer />
        </div>
      </section>
    </div>
  )
}

export default SignUp