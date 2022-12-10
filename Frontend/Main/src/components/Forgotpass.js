import React,{useEffect} from 'react';
import '../App.css';
import { BrowserRouter as Router,Link, NavLink, Route ,Switch , useHistory} from "react-router-dom";
import Navbar from './navbar';


export default function Forgotpass() {
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
    <h1 className='failed'>email doesn't exists</h1>
    <span className="login__account">
    Click on Sign Un to create Account 
    </span>
    <div>
    <Link to="/sign-Up" className="login__signup"> Sign Up</Link>
    </div>
    <h2>Or else</h2>
    <span className="login__account">
    Click on Retry to reset password
    </span>
    <div>
    <Link to="/forgot" className="login__signup"> Retry </Link>
    </div>
    </center>
    </>
  ); 
}



