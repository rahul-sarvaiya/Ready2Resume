import React from 'react';
import Navbar from './components/navbar';
import './App.css';

import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/Services';
import Products from './components/pages/Products';
import SignIn from './components/FormSignin';
import SignUp from './components/FormSignup';
import Template from "./components/template.js";
import Dashboard from "./components/Dashboard";
import Protected from "./components/Protected";
import Failed from "./components/Failed";
import Forgotpass from "./components/Forgotpas";
import Forgotpasss from "./components/Forgotpass";
import Success from "./components/Successs";
import resets from "./components/Reset";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/template' >
            <Protected Cmp={Template}/>
            {/*<Template />*/}
          </Route>
          <Route path='/services' >
            <Protected Cmp={Services}/>
            {/* <Services /> */}
          </Route>
          <Route path='/products' >
            <Protected Cmp={Products}/>
            {/*<Products />*/}
          </Route>
          <Route path='/sign-Up' component={SignUp} />
          <Route path='/sign-In' component={SignIn} />
          <Route path='/asffs' component={Failed} />
          <Route path='/forgot' component={Forgotpass}/>
          <Route path='/asffsf' component={Forgotpasss}/>
          <Route path='/sssfsswswbb' component={Success}/>
          <Route path='/reset/:id' component={resets}/>
          <Route path='/dash' component={Dashboard} />
            
    
     
      </Switch>
      </Router>
    </>
  );
}

export default App;
