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


const FormSignin = ({submitForm}) => {
  
    useEffect(() => {
        if(localStorage.getItem('user-info'))
        {
          history.push("/");
        }
     },[])
     const {handleChange , values , handleSubmit , errors }= useForm(submitForm,validate);
     const history=useHistory();
     async function signin()
     {
        var email
        email = values.email;
        var password
        password = values.password;

        let item={email,password};
        console.warn(item);
        let result= await fetch("http://127.0.0.1:8000/api/login",{
            method:'POST',
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            },
            body: JSON.stringify(item)

        });
        result=await result.json();
        if(email== "" && password=="")
        {
            
        }
        else if(password=="" )
        {

        } 
        else if(email=="")
        {

        }
        else if(result=="email or password doesn't matched")
        {
            Swal.fire
            ({
                text: "Email or password is incorrect",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            });
        }
        else
        {
            localStorage.setItem("user-info",JSON.stringify(result));
            
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
              
    
                <form action="" className="login__create" id="login-up" onSubmit={handleSubmit}>
                    <h1 className="login__title">SignIn</h1>
    
                    <div className="login__box">
                        <i className='bx bx-at login__icon'></i>
                        <input
                        
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
                    onClick={signin}
                    >Sign In
                    </button>

                    <div>
                        <span>
                        <Link to="/forgot" className="forgot_pas">Forgot password?</Link>
                        </span>
            
                   
                    </div>
                   <br></br>
    
                    <div>
                        <span className="login__account">Don't have an Account ?
                        <Link to="/sign-Up" className="login__signup">Sign Up</Link>
                        </span>
            
                   
                    </div>
    
                </form>
    
               
            </div>
        </div>
    </div>
    </>
    )
}

export default FormSignin;
