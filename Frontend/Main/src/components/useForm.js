import {useState , useEffect  } from "react";
import { useHistory } from "react-router-dom";



const useForm = (callback ,validate) => {

    const [values , setValues] = useState({
        username: '',
        email:'',
        password:''
    });
    
    const history=useHistory();
    const [errors,setErrors] = useState({});
    const [isIsSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const{name,value}=e.target
        setValues({
            ...values,
            [name]:value
        });
    };

    const handleSubmit = e =>{
        e.preventDefault();

        setErrors(validate(values));
        setIsSubmitting(true);
    };

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isIsSubmitting)
        {
             
                history.push("/");        
        }
      
    },
    [errors]
    )

    return {handleChange , values , handleSubmit , errors};
};

export default useForm;
