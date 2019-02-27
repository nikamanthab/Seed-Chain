import React, { Component } from 'react';
import { navigate } from '@reach/router';
// import {Router,Link} from "@reach/router";

class Login extends Component {

    constructor(props){
        super(props);
        this.state={
            user:"mohan",
            userid:''
          }
    }    

    handleLoginRouteChange = ()=>{
        navigate(`/userpage/${this.state.userid}`)
    }

    handleUserIdChange = event =>{ 
        this.setState({userid : event.target.value})
    }

    handleButtonClick = ()=>{
        console.log(this.state.userid);
        console.log(this.state.user);
        //
        //fetch the users...
        //
        if(this.state.userid === this.state.user)
        this.handleLoginRouteChange();
    }

    render() {
        return (
        <div>
            <h1>Login page</h1>
            <input type="text" 
            onChange={this.handleUserIdChange}
            />
            <button 
             onClick={this.handleButtonClick}
            >Generate otp</button>
        </div>
        );
    }
}

export default Login;
