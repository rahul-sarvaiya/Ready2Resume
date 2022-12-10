import React, { useState, useEffect } from 'react';
import './Cards.css';
import './Button.css';
import CardItem from './CardItem';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Cards() {

  const [data, setData] = useState([])
  const [data2, setData2] = useState([])
  const [data3, setData3] = useState([])
  const [data4, setData4] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/api/rc").then((result) => {
      result.json().then((resp) => {

        setData(resp)
      })
    })
  }, [])

  useEffect(() => {
    fetch("http://localhost:8000/api/p_rc").then((result2) => {
      result2.json().then((resp2) => {

        setData2(resp2)
      })
    })
  }, [])


  useEffect(() => {
    fetch("http://localhost:8000/api/mostview").then((result3) => {
      result3.json().then((resp3) => {

        setData3(resp3)
      })
    })
  }, [])

  
  useEffect(() => {
    fetch("http://localhost:8000/api/github").then((result4) => {
      result4.json().then((resp4) => {

        setData4(resp4)
      })
    })
  }, [])



  return (
    <>


    

      <br></br>
      <br></br>



      <div align="center">



      
      <h1>Automated Resume Using Your GitHub Username</h1>

<br></br>
<br></br>

{
  data4.map((item) =>


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


        <h1>Most viewed Template</h1>

        <br></br>
        <br></br>

        {
          data3.map((item) =>


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



        <h1>Free Templates </h1>

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
        <br></br>
        <div align="center">
          <a href="./template">
            <h3>See More Resume Templates</h3>
          </a>
        </div>

        <br></br>
        <br></br>
        <br></br>
        <h1>Premium Templates</h1>
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
        <div align="center">
          <a href="./services">
            <h3>See More CV Templates</h3>
          </a>
        </div>

        <br></br>
        <br></br>


      </div>
    </>

  );
}

export default Cards;
