import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./navbar.component.jsx"
import BookList from "./BookList.component.jsx"
import EditBook from "./EditBook.component.jsx"
import DeleteBook from "./DeleteBook.component.jsx"
import CreateBook from "./CreateBook.component.jsx"
import UploadFile from "./UploadFile.component.jsx"

function panel() {


  return (

    <Router>
      <Navbar /> 
      <br/> 
    <Route path="/list" exact component={BookList}  />
    <Route path="/edit" component={EditBook}  />
    <Route path="/upload" component={UploadFile}  />
    <Route path="/create" exact component={CreateBook}  />
    <Route path="/delete" exact component={DeleteBook}  />
    </Router> 
  );
}

export default panel;


