
export default function valicateInfo(values){
let errors = {};

    if(!values.username.trim()) {
        errors.username = "Username required";
    }

    if(!values.email.trim()){
        errors.email = "Email required";
    }
    else if (!/^([a-z A-Z 0-9 \.-]+)@gmail.com$/i.test(values.email.trim()))
    {
        errors.email="Email address is invalid";
    }

    if(!values.password){
        errors.password = "Password is required";
    }else if(values.password.length<5)
    {
        errors.password = "Password needs to be 5 characters or more";
    }

    if(!values.password2){
        errors.password2 = "Confirm Password is required";
    }else if(!(values.password==values.password2))
    {
        errors.password2 = "password not matched";
    }

    if(!values.token){
        errors.token = "Token is required";
    }else if(!(values.token.length==10))
    {
        errors.token = "Enter valid token";
    }


    return errors;
}