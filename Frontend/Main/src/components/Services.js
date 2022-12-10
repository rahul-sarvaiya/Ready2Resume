import React, { useState, useEffect } from 'react';
import './Cards.css';
import CardItem from './CardItem';

import Navbar from './navbar';

function Services() {
  const [data, setData] = useState([])
  const [data2, setData2]=useState([])
  useEffect(() => {
    fetch("http://localhost:8000/api/cv_b").then((result) => {
      result.json().then((resp) => {

        setData(resp)
      })
    })
  }, [])

  useEffect(() => {
    fetch("http://localhost:8000/api/cv_p").then((result2) => {
      result2.json().then((resp2) => {

        setData2(resp2)
      })
    })
  }, [])



  console.warn(data)
  console.warn(data2)

  return (
    <>
      <Navbar />
      <br></br>
      <br></br>
      <div align="center">



      
        <h1>Free CV Templates </h1>

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


        <br></br>
        <br></br>
        <h1 >Premium CV Templates</h1>
        <br></br>
        <br></br>

        {
          data2.map((item) =>

        
            
            <CardItem
            src={item.img}
            path={item.path}
            id={item.id}
            view={item.view}
          />

          )
        }

        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </>
  );
}

export default Services;
