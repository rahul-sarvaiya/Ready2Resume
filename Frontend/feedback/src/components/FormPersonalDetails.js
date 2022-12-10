import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Swal from "sweetalert2";
export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

   render() {

    const { values, handleChange } = this.props;
    var name
    name = values.name;
    var email
    email = values.email;
    var feedback
    feedback = values.feedback;

    let item={name,email,feedback};
    console.warn(item);
    let result=  fetch("http://127.0.0.1:8000/api/feedback",{
        method:'POST',
        body:JSON.stringify(item),
        headers:{
            "Content-Type":'application/json',
            "Accept":'application/json'
        }

    });
 
    if(name==""&& email== "" && feedback=="")
    {
        
    }
    else if(email== "" && feedback=="" && name=="")
    {
        
    }
    else if(feedback=="")
    {

    }
    else if(email=="")
    {

    }
    else if(name=="")
    {

    }
    else if(result=="Something went wrong")
    {
        Swal.fire
        ({
            text: "Opps, somthing went wrong",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }); 
    }
   










    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Enter Personal Details" />
            <TextField
              placeholder="Enter your name"
              label="Name"
              onChange={handleChange('name')}
              defaultValue={values.name}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Email"
              label="email"
              onChange={handleChange('email')}
              defaultValue={values.email}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="give your feedback here"
              label="feedback"
              onChange={handleChange('feedback')}
              defaultValue={values.feedback}
              margin="normal"
              fullWidth
            />
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails;
