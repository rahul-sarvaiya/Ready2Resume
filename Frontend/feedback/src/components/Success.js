import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  
  goback = e => {
    e.preventDefault();
    //window href vala property dala yaha localhost:3000
    window.location.href ="http://localhost:3001/right9";
  }

  render() {
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Success" />
            <h1>Thank You For Your Submission</h1>
            
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

export default Success;
