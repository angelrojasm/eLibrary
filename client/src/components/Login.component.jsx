import React, {Component} from 'react'
import axios from 'axios'


export default class Login extends Component {
    constructor(props) {
        super(props)

        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {

            email: '',
            password: '',
        }
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
            email: this.state.email,
            password: this.state.password
        }

        axios.post('http://localhost:3001/authenticate', newUser)
        .then(res => {
            console.log(res.data)
            if(res.data.Rank === 'Admin') {
                window.location = "/AdminPanel"
            }
            if(res.data.Rank === 'User') {
                window.location ="/UserPanel"
            }
        });

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
               <h3>Log in with your user credentials!</h3>
               <form onSubmit ={this.onSubmit}>
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
                       <input type="submit" value = "Log In"
                       className ="btn btn-primary" />
                    </div>
                </form>
            </div>
                    
        )
    }
}