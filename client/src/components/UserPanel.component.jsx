import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import UserNavbar from "./UserNavbar.component.jsx"
import BookList from "./BookList.component.jsx"
import UserBookProfile from "./UserBookProfile.component.jsx"


function panel() {


  return (

    <Router>
      <UserNavbar /> 
      <br/> 
    <Route path="/list" exact component={BookList}  />
    <Route path="/list/:id" exact component = {UserBookProfile} />
    </Router> 
  );
}

export default panel;


