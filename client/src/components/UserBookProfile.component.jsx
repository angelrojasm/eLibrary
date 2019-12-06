import React, { Component } from 'react';
import axios from 'axios';


export default class UserBookProfile extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          name: '',
          author: '',
          length: '',
          description: '',
          booktext: ''
        }

       
    }

    componentDidMount() {
        axios.get('http://localhost:3001/findbooks/' + this.props.match.params.id)
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

    readBook() {
        axios.get('http://localhost:3001/getfile/' + this.state.name)
          .then(response => {  
            this.setState({
            booktext: response.data
        })    
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
                </div>
                <p>{this.state.booktext}</p>
            </div>
        )
    }
}