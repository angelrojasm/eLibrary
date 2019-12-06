import React, {Component} from 'react'
import axios from 'axios'

export default class DeleteBook extends Component {
    constructor(props) {
        super(props)

        this.onChangeName = this.onChangeName.bind(this)

        this.state = {

            name: '',
          
        }
    }

    onChangeName(e) {
        this.setState ({
            name: e.target.value
        })
    }

    onSubmit(e) {

        const book = {
            name: this.state.name
        }
       

        e.preventDefault()
        axios.post('http://localhost:3000/deletebooks',book).then(res => console.log(res.data));
        //window.location = "/"
    }
 
    render() {
        return (
            <div>
               <h3>Delete Book</h3>
               <form onSubmit ={this.onSubmit}>
                   <div className="form-group">
                       <label>Name:</label>
                       <input  type="text"
                            required
                            className ="form-control"
                            value = {this.state.name}
                            onChange = {this.onChangeName}
                        />
                    <br></br>
                   <div className="form-group">
                       <input type="submit" value = "Delete Book"
                       className ="btn btn-primary" />
                    </div>
                    </div>
                </form>
            </div>
                    
        )
    }
}