import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Authentication from "./components/AuthenticationPanel.component.jsx"
import AdminPanel from "./components/AdminPanel.component.jsx"
import UserPanel from "./components/UserPanel.component.jsx"


function App() {
  return (
    <Router>
      <Route path="/" exact component ={Authentication} />
      <Route path ="/AdminPanel" component =  {AdminPanel} />
      <Route path="/UserPanel" exact component = {UserPanel}/>
    </Router>
  );
}

export default App;
