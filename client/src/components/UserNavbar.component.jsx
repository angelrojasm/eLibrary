import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class UserNavbar extends Component {

render() {
    
    return (
        <nav className= "navbar-darl bg-dark navbar-expand-lg">
            <Link to= "/" className= "navbar-brand">User Panel</Link> 
            <div className = "collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
                <li className="navba r-item">
                <Link to="/list" className= "nav-link">Book List</Link> 
                </li>
            </ul>
            </div>
        </nav>       
    )
}
}