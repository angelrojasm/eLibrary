import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

const Book = props => (
    <tr>
      <td><Link to = {"/list/" + props.book._id}> {props.book.name} </Link>
      </td>
    </tr>
  )

export default class BookList extends Component {

constructor(props){ 
     super(props);

     this.state = {
         books: [] 
     } 
}

componentDidMount(){
    axios.get('http://localhost:3000/getbooks').then(res => {
        this.setState({books: res.data})
    })
}

bookList() {
    return this.state.books.map(currentBook => {
      return <Book book = {currentBook} key = {currentBook._id} />;
    })
  }

render() {
    return (
        <div className = "container">
            <div>
          <h3>Book List</h3>
          <table className="table">
            <thead className="thead-light" style = {{backgroundColor: '#cddc39'} }>
              <tr>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
              { this.bookList() }
            </tbody>
          </table>
        </div>
        </div>
      )
  }
}