import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar2 extends Component {

render() {
    
    return (
        <nav className= "navbar-darl bg-dark navbar-expand-lg">
            <Link to= "/" className= "navbar-brand">Authentication Page</Link> 
            <div className = "collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
                <li className="navba r-item">
                <Link to="/login" className= "nav-link">Log in</Link> 
                </li>
                <li className="navbar-item">
                <Link to="/register" className ="nav-link">Register</Link>
                </li>        
            </ul>
            </div>
        </nav>       
    )
}
}