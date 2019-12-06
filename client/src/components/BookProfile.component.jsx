import React, { Component } from 'react';
import axios from 'axios';


export default class BookProfile extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          name: '',
          author: '',
          length: '',
          description: '',
          booktext: ''
        }

        this.deleteBook = this.deleteBook.bind(this)
        this.readBook = this.readBook.bind(this)
    }

    componentDidMount() {
        axios.get('http://localhost:3000/findbooks/' + this.props.match.params.id)
          .then(response => {
            this.setState({
                name: response.data.name,
                author: response.data.author,
                length: response.data.length,
                description: response.data.description
            })   
          })
          .catch(function (error) {
            console.log(error);
          })
    }

    deleteBook() {
        axios.delete('http://localhost:3000/deletebook/' + this.props.match.params.id)
          .then(response => {console.log(response.data) });

        //Take user to book collection
        window.location = '/AdminPanel';
    }

    editBook() {
    }
    readBook() {
        axios.get('http://localhost:3000/getfile/' + this.state.name)
          .then(response => { 
            this.setState({
                booktext: response.data
            })    
            console.log(response.data) 
        });
    }

    render(){
        return (
            <div className = "container">
                <h1>
                    <strong>Book Profile:</strong>
                </h1>
                <h3>
                    Title:
                </h3>
                <p className = "text-info">
                    <strong>{this.state.name}</strong>
                </p>
                <h3>
                    Author:
                </h3>
                <p className = "text-info">
                    <strong>{this.state.author}</strong>
                </p>
                <h3>
                    description:
                </h3>
                <p className = "text-info">
                    <strong>{this.state.description}</strong>
                </p>
                <h3>
                    Length(in pages):
                </h3>
                <p className = "text-info">
                   <strong> {this.state.length}</strong>
                </p>

                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-secondary"
                    onClick = {() => {this.readBook()}}>Read</button>
                    <button type="button" 
                    className="btn btn-secondary"
                    onClick = {() => {this.deleteBook()}}>Delete</button>
                </div>
                <p>{this.state.booktext}</p>
            </div>
        )
    }
}