import React, { useState, useEffect } from 'react';
import './Cards.css';

import CardItem from './CardItem';

import Navbar from './navbar';
import { Button } from 'bootstrap';



function Dashboard() {

  
  const [data, setData] = useState([])








  useEffect(() => {
    fetch("http://localhost:8000/api/all").then((result) => {
      result.json().then((resp) => {

        setData(resp)
      })
    })
  }, [])


 





 
  return (
    <>
      <Navbar />
      <br></br>
      <br></br>
      <div align="center">



        <h1>Choose any template to see how your details look on other templates</h1>

        <br></br>
        <br></br>

        {
          data.map((item) =>


          <CardItem
            src={item.img}
            path={item.path}
            id={item.id}
            view={item.view}
          />

        
          )
        }


        
      </div>
    </>
  );
}

export default Dashboard;
