import React,{useEffect} from 'react';
import useForm from "./useForm";
import validate from "./validateInfo";
import './Form.css';
import loginImg from "./img-login.svg";
import { BrowserRouter as Router,Link, NavLink, Route ,Switch} from "react-router-dom";
import FormSignin from "./FormSignin";
import { useHistory } from "react-router-dom";
import Navbar from './navbar';
import { Nav } from 'react-bootstrap';
import Swal from "sweetalert2"; 


const FormSignup = ({submitForm}) => {

    useEffect(() => {
       if(localStorage.getItem('user-info'))
       {
         history.push("/");
       }
    },[]);

     const {handleChange , values , handleSubmit , errors }= useForm(submitForm,validate);
     const history=useHistory();
     async function signup()
     {
        var username
        username = values.username;
        var email
        email = values.email;
        var password
        password = values.password;

        let item={username,email,password};
        console.warn(item);
        let result= await fetch("http://127.0.0.1:8000/api/register",{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            }

        });
        result=await result.json();
        if(username==""&& email== "" && password=="")
        {
            
        }
        else if(email== "" && password=="" && username=="")
        {
            
        }
        else if(password=="")
        {

        }
        else if(email=="")
        {

        }
        else if(username=="")
        {

        }
        else if(result=="email already exists")
        {
            Swal.fire
            ({
                text: "Opps, This email is already connected to an account!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            }); 
        }
        else
        {
            localStorage.setItem("user-info",JSON.stringify(result));
            Swal.fire({
                text: "Account Successfully created",
                icon: "success",
              });
            history.push("/");
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
              
                <form action="  " className="login__create" id="login-up" onSubmit={handleSubmit} >
                    <h1 className="login__title">SignUp</h1>
    
                    <div className="login__box">
                        <i className='bx bx-user login__icon'></i>
                        <input 
                        id='username'
                        type="text" 
                        name='username'
                        placeholder="Username" 
                        className="login__input" 
                        value={values.username}
                        onChange={handleChange}
                        />
                       
                    </div>
                    {errors.username && <p>{errors.username}</p>}
    
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
                    <button
                    type="submit" 
                    className="login__button"
                    onClick={signup}
                    >Sign Up
                    </button>
    
                    
    
                    <div>
                        <span className="login__account">Already have an Account ?
                       
                        <Link to="/sign-In" className="login__signup">Sign In</Link>
                   
                        </span>
            
                        
                    </div>
    
                </form>
    
               
            </div>
        </div>
    </div>
    </>
    )
}

export default FormSignup;
