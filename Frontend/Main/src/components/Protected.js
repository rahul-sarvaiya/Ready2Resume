import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import { useHistory } from "react-router-dom";
function Protected(props) {
    let Cmp=props.Cmp
    const history=useHistory();
    useEffect(() => {
        if(!localStorage.getItem('user-info'))
        {
          history.push("/Sign-in");
        }
     },[])
  return (
    <> 
    <Cmp/>  
    </>
  );
}

export default Protected;
