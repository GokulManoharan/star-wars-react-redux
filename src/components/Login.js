import React from 'react'
import { startLoginUser } from '../actions/LoginAction'
import { connect } from 'react-redux'


class Login extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: "",
            status: "",
            isSubmitting: false
        }
    }

    componentWillReceiveProps(props){
        if(props.loginState.loginData[0].loginStatus){
            this.props.history.push("/search")
        }else if(!props.loginState.loginData[0].loginStatus){
            this.setState({status : "Username or Password is incorrect"})
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { username, password } = this.state
        this.props.dispatch(startLoginUser(username,password))
    }

     handleChange = (e) => {
        e.persist()
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
    }

    render(){
        const { username, password, status, isSubmitting } = this.state
        return(
            <div className="loginPage">
                <div>
                    <h1>Login </h1>
                    <form onSubmit={this.handleSubmit}>
                        
                        <input type="text"
                            name="username"
                            value={username}
                            onChange={this.handleChange}
                            className="form-control"
                            placeholder="Username"
                            />
                    
                        <input type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                            className="form-control"
                            placeholder="Password"
                            />      
                            
                        { status && <p className="text-danger">{status}</p> }

                        <button type="submit" className="btn">{ isSubmitting ? <i className="fas fa-spin fa-sync-alt"></i> : 'Login' }</button>

                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        loginState : state
    })
}

export default connect(mapStateToProps)(Login)