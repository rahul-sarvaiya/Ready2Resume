import React,{useEffect} from 'react';
import useForm from "./useForm";
import validate from "./validateInfo";
import './Form.css';
import loginImg from "./img-login.svg";
import { BrowserRouter as Router,Link, NavLink, Route ,Switch} from "react-router-dom";
import FormSignup from "./FormSignup";
import { useHistory ,Redirect } from "react-router-dom";
import Navbar from './navbar';
import axios from 'axios';
import { render } from '@testing-library/react';
import Swal from "sweetalert2"; 
import withReactContent from 'sweetalert2-react-content'; 


const Reset = ({submitForm}) => {
    
  
    useEffect(() => {
        if(localStorage.getItem('user-info'))
        {
          history.push("/");
        }
     },[])
     const {handleChange , values , handleSubmit , errors }= useForm(submitForm,validate);
     const history=useHistory();
     
     
    async function reset()
    {
        
        var token
        token = values.token;
        var password
        password = values.password;
        var password_confirm
         = values.password2;

        let item={token,password,password_confirm};
        console.warn(item);
        let result= await fetch("http://127.0.0.1:8000/api/reset",{
            method:'POST',
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            },
            body: JSON.stringify(item)

        });
        result=await result.json();
        if(result=='Invalid token!'){

            Swal.fire
            ({
                text: "Please enter valid token",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            });
        }
        else if(result=='Success')
        {
            Swal.fire({
                text: "password updated successfully!",
                icon: "success",
              });
            history.push("/Sign-In");
        }
    }
  
   

    return (

        <>
         <Navbar />
        <div className="login">
            <div className="login__content">

                <div className="login__img">
                    <img src={loginImg}  />
                </div>
    
            <div className="login__forms">
              
    
                <form action="" className="login__create" id="login-up" onSubmit={handleSubmit}>
                    <h1 className="login__title">Reset Password</h1>

                    <div className="login__box">
                        <i className='bx bx-lock-alt login__icon'></i>
                        <input 
                        type="text"
                        id="token" 
                        name="token" 
                        placeholder="token" 
                        className="login__input"
                        value={values.token}
                        onChange={handleChange} 
                        />
                        
                    </div>
                    {errors.token && <p>{errors.token}</p>}
    
    
                    <div className="login__box">
                        <i className='bx bx-lock-alt login__icon'></i>
                        <input 
                        type="password"
                        id="password" 
                        name="password" 
                        placeholder="Password" 
                        className="login__input"
                        value={values.password}
                        onChange={handleChange} 
                        />
                        
                    </div>
                    {errors.password && <p>{errors.password}</p>}
    
    
                    <div className="login__box">
                        <i className='bx bx-lock-alt login__icon'></i>
                        <input 
                        type="password"
                        id="password2" 
                        name="password2" 
                        placeholder="Confirm Password" 
                        className="login__input"
                        value={values.password2}
                        onChange={handleChange} 
                        />
                        
                    </div>
                    {errors.password2 && <p>{errors.password2}</p>}
                    <button
                    type="submit" 
                    className="login__button"
                    onClick={reset}
                    >Submit
                    </button>
    
                </form>
    
               
            </div>
        </div>
    </div>
    </>
    )
}

export default Reset;
