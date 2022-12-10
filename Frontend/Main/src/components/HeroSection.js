import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from "react-router-dom";
import DashboardIcon from '@material-ui/icons/Dashboard';



function HeroSection() {





  return (
    
    <div className='hero-container'>
      <br />
      <br />
      <br />
      <br />
      <br />
      <p>What are you waiting for? Professional Resume within few minutes, So lets ... </p>
      <div className='hero-btns'>

      
     

      <a href="http://localhost:3002">
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
         
        >
          Build Resume Using Github
        </Button>
        </a>

        <Link to="/template">
        <Button
          className='btns'
          buttonStyle='btn--outline2'
          buttonSize='btn--small'
        
        >
       Build your resume
        </Button>
        </Link>



    </div>

      <br />
   <br/>
   <br/>
      <br />
      <br />
      <br />
    </div>

  );
}

export default HeroSection;



