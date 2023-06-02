import React,{useContext} from 'react'
import './Buynow.css'
import {ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoginContext } from '../context/ContextProvider';
const Option = ({deleteData, get}) => {

  const {account, setAccount} = useContext(LoginContext);
  const removeData = async(req ,res)=>{
    try {
      const res = await fetch(`/remove/${deleteData}`,{
        method:"DELETE",
        headers:{
          Accept:"application/json",
          "Content-type":"application/json",
        },
        credentials:"include"
      })
      const data = await res.json();
      console.log(data)
      if(res.status === 400 || !data){
        console.log("error")
      }else{
        setAccount(data);
        get();
        console.log("User Delete");
        toast.success('Item removed', {
          position: "top-center",
          autoClose: 1221,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Zoom,
          });
        
      }
    } catch (error) {
      
    }
  }
  return (
    <div className='add_remove_select'>
        <select name="" id="">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
        <p style={{cursor:'pointer'}} onClick={()=>{removeData(deleteData)}}>Delete</p><span>|</span>
        <p style={{cursor:'pointer'}} className='forremovemedia'>Save for Later</p><span>|</span>
        <p style={{cursor:'pointer'}} className='forremovemedia'>See More like this</p><span>|</span>
        <ToastContainer />
    </div>
  )
}

export default Option