import React, {Component} from 'react'
import axios from 'axios'

export default class Register extends Component {

    constructor(props) {
        super(props)
        this.onChangeName = this.onChangeName.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {

            name: '',
            email: '',
            password: ''
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }
    onChangeEmail(e) {
        this.setState ({
            email: e.target.value
        })
    }
    onChangePassword(e) {
        this.setState ({
            password: e.target.value
        })
    }


    onSubmit(e) {
        e.preventDefault()
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }

        axios.post('http://localhost:3001/register', newUser)
        .then(res => console.log(res.data));
    
       
        //window.location = "/login"
        this.setState({
            name: ''
        })
        this.setState({
            email: ''
        })
        this.setState({
            password: ''
        })
    }

    render() {
        return (
            <div>
               <h3>Register as a new user!</h3>
               <form onSubmit ={this.onSubmit}>
                   <div className="form-group">
                       <label>Name: 
                        <input type="text"
                        required
                        className ="form-control"
                        value = {this.state.name}
                        onChange = {this.onChangeName}
                        />
                       </label>
                   </div>
                   <div className="form-group">
                       <label>Email: 
                        <input type="text"
                        required
                        className ="form-control"
                        value = {this.state.email}
                        onChange = {this.onChangeEmail}
                        />
                       </label>
                   </div>
                   <div className="form-group">
                       <label>Password: 
                        <input type="password"
                        required
                        className ="form-control"
                        value = {this.state.password}
                        onChange = {this.onChangePassword}
                        />
                       </label>
                   </div>
                   <div className="form-group">
                       <input type="submit" value = "Register"
                       className ="btn btn-primary" />
                    </div>
                </form>
            </div>
                    
        )
    }
}