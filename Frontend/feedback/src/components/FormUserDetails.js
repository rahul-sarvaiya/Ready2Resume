import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  goback = e => {
    e.preventDefault();
    window.location.href ="http://localhost:3001/right9";
    

  }

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
        
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Enter User Details" />
            would you like to provide feedback. Your genuine feedback can help us improve<br></br>
            <br />

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
            <br/>

            <Button
              color="primary"
              variant="contained"
              onClick={this.goback}
            >Take me back to the home page</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;
