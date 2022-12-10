import React,{useEffect} from 'react';
import '../App.css';
import { BrowserRouter as Router,Link, NavLink, Route ,Switch ,useHistory} from "react-router-dom";
import Navbar from './navbar';


export default function Successs() {
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
    <h1 className='failed'>Please check your email!</h1>
    </center>
    </>
  ); 
}



