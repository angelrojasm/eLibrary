import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar2 from "./navbar2.component.jsx"
import Login from "./Login.component.jsx"
import Register from "./Register.component.jsx"

function panel() {


    return (
  
      <Router>
        <Navbar2 /> 
        <br/> 
      <Route path="/login" exact component={Login}  />
      <Route path="/Register" component={Register}  />
      </Router> 
    );
  }
  
  export default panel;
  
  
  