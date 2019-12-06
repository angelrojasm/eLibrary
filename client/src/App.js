import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Authentication from "./components/AuthenticationPanel.component.jsx"
import AdminPanel from "./components/AdminPanel.component.jsx"


function App() {
  return (
    <Router>
      <Route path="/" exact component ={Authentication} />
      <Route path ="/AdminPanel" component =  {AdminPanel} />
    </Router>
/*
    <Router>
      <Navbar /> 
      <br/> 
    <Route path="/" exact component={BookList}  />
    <Route path="/edit" component={EditBook}  />
    <Route path="/upload" component={UploadFile}  />
    <Route path="/create" exact component={CreateBook}  />
    <Route path="/delete" exact component={DeleteBook}  />
    </Router> 
*/
  );
}

export default App;
