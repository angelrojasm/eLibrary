import React, {Component} from 'react'
import axios from 'axios';


export default class CreateBook extends Component {
    constructor(props) {
        super(props)

        this.onChangeName = this.onChangeName.bind(this)
        this.onChangeDescription = this.onChangeDescription.bind(this)
        this.onChangeLength = this.onChangeLength.bind(this)
        this.onChangeAuthor = this.onChangeAuthor.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {

            name: '',
            description: '',
            length: '',
            author: '',
        }
    }

    onChangeName(e) {
        this.setState ({
            name: e.target.value
        })
    }
    onChangeDescription(e) {
        this.setState ({
            description: e.target.value
        })
    }
    onChangeLength(e) {
        this.setState ({
            length: e.target.value
        }) 
    }
    onChangeAuthor(e) {
        this.setState ({
            author: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault()
        const newBook = {
            name:this.state.name,
            description: this.state.description,
            author: this.state.author,
            length: this.state.length
        }

        axios.post('http://localhost:3000/makebook', newBook)
        .then(res => console.log(res.data));
    
        console.log(newBook)
        window.location = "/AdminPanel"
    }

    render() {
        return (
            <div>
               <h3>Create New Book Profile</h3>
               <form onSubmit ={this.onSubmit}>
                   <div className="form-group">
                       <label>Name:</label>
                       <input  type="text"
                            required
                            className ="form-control"
                            value = {this.state.name}
                            onChange = {this.onChangeName}
                        />
                   </div>
                   <div className="form-group">
                       <label>Description:</label>
                       <input  type="text"
                            required
                            className ="form-control"
                            value = {this.state.description}
                            onChange = {this.onChangeDescription}
                        />
                   </div>
                   <div className="form-group">
                       <label>Length(In Pages):</label>
                       <input  type="text"
                            required
                            className ="form-control"
                            value = {this.state.length}
                            onChange = {this.onChangeLength}
                        />
                   </div>
                   <div className="form-group">
                       <label>Author:</label>
                       <input  type="text"
                            required
                            className ="form-control"
                            value = {this.state.author}
                            onChange = {this.onChangeAuthor}
                        />
                   </div>
                   <div className="form-group">
                       <input type="submit" value = "Create Book Profile"
                       className ="btn btn-primary" />
                    </div>
                </form>
            </div>
                    
        )
    }
}