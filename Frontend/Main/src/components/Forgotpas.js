import React,{useEffect} from 'react';
import useForm from "./useForm";
import validate from "./validateInfo";
import './Form.css';
import loginImg from "./img-login.svg";
import { BrowserRouter as Router,Link, NavLink, Route ,Switch} from "react-router-dom";
import FormSignup from "./FormSignup";
import { useHistory } from "react-router-dom";
import Navbar from './navbar';
import Swal from "sweetalert2"; 

const Forgotpas = ({submitForm}) => {
  
    useEffect(() => {
        if(localStorage.getItem('user-info'))
        {
          history.push("/");
        }
     },[])
     const {handleChange , values , handleSubmit , errors }= useForm(submitForm,validate);
     const history=useHistory();
     let error='';
     async function forgot()
     {
        var email
        email = values.email;
      

        let item={email};
        console.warn(item);
        let result= await fetch("http://127.0.0.1:8000/api/forgot",{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            }

        });
        result=await result.json();
        if(email== "")
        {
            
        }
        else if(result== "User doen't exists!")
        {
            Swal.fire
            ({
                text: "The email address you entered is not linked to this website",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            });
        }
        else if(result== "check your email!")
        {
        
            Swal.fire({
                text: "A message has been sent to you by email with instructions on how to reset your password",
                icon: "success",
              });
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
                    <h1 className="login__title">Password Reset</h1>
                   <h5> Enter your email address that you used to register. We'll send you an email with token.</h5>
                    <br></br>
                    <div className="login__box">
                        <i className='bx bx-at login__icon'></i>
                        <input
                        name="email"
                         type="text" 
                         id="email"
                         placeholder="Email" 
                         name="email" 
                         className="login__input"
                         value={values.email}
                         onChange={handleChange}
                        />
                         
                    </div>
                    {errors.email && <p>{errors.email}</p>}
                   
    
    
                    <button
                    type="submit" 
                    className="login__button"
                    onClick={forgot}
                    >Send
                    </button>
    
                </form>
    
               
            </div>
        </div>
    </div>
    </>
    )
}

export default Forgotpas;
