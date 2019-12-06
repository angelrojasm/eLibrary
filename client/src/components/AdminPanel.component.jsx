import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./navbar.component.jsx"
import BookList from "./BookList.component.jsx"
import CreateBook from "./CreateBook.component.jsx"
import UploadFile from "./UploadFile.component.jsx"
import BookProfile from "./BookProfile.component.jsx"


function panel() {


  return (

    <Router>
      <Navbar /> 
      <br/> 
    <Route path="/list" exact component={BookList}  />
    <Route path="/list/:id" exact component = {BookProfile} />
    <Route path="/upload" component={UploadFile}  />
    <Route path="/create" exact component={CreateBook}  />
    </Router> 
  );
}

export default panel;


