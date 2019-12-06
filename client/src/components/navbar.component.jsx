import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {

render() {
    
    return (
        <nav className= "navbar-darl bg-dark navbar-expand-lg">
            <Link to= "/AdminPanel" className= "navbar-brand">Admin Panel</Link> 
            <div className = "collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
                <li className="navba r-item">
                <Link to="/list" className= "nav-link">Books</Link> 
                </li>
                <li className="navbar-item">
                <Link to="/create" className ="nav-link">Create Book</Link>
                </li>
                <li className="navbar-item">
                 <Link to="/delete" className="nav-link">Delete Book</Link>   
                </li>
                <li className="navbar-item">
                 <Link to="/edit" className="nav-link">Edit Book</Link>   
                </li>
                <li className="navbar-item">
                 <Link to="/upload" className="nav-link">Upload File</Link>   
                </li>
            </ul>
            </div>
        </nav>       
    )
}
}