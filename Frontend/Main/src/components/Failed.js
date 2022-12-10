import React,{useEffect} from 'react';
import '../App.css';
import { BrowserRouter as Router,Link, NavLink, Route ,Switch,useHistory} from "react-router-dom";
import Navbar from './navbar';


export default function Failed() {
  useEffect(() => {
    if(localStorage.getItem('user-info'))
    {
      history.push("/");
    }
 },[]);
  const history=useHistory();
  return(
    <>
    <Navbar />
    <center>
    <h1 className='failed'>LOGIN FAILED PLEASE ENTER VALID DETAILS</h1>
    <span className="login__account">
    Click on Sign In to go back to login page 
    </span>
    <div>
    <Link to="/sign-In" className="login__signup"> Sign In</Link>
    </div>
    </center>
    </>
  ); 
}



