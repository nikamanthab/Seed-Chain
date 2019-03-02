import React, { Component } from 'react';
import { navigate } from '@reach/router';
// import {Router,Link} from "@reach/router";
import Signup from './signup';
class Login extends Component {

    constructor(props){
        super(props);
        this.state={
            metamaskuser:"mohan",
            metamaskemail:'itsmohanpierce@gmail.com'
            // userid:''
          }
    }    

    handleLoginRouteChange = ()=>{
        navigate(`/userpage/${this.state.metamaskemail}/${this.state.metamaskuser}`)
    }

    // handleUserIdChange = event =>{ 
    //     this.setState({userid : event.target.value})
    // }

    handleLoginClick = ()=>{
        console.log(this.state.metamaskuser);
        console.log(this.state.metamaskemail);
        //
        //fetch the users...
        //from the web3 lib
        let web3libuser = "mohan"        
        if(this.state.metamaskuser === web3libuser)
            this.handleLoginRouteChange();
    }

    handleSignupClick = ()=>{
        navigate('/signup');
    }

    render() {
        return (
        <div>
            <h1>Login page</h1>
            {/* <input type="text" 
            onChange={this.handleUserIdChange}
            /> */}
            <button 
             onClick={this.handleLoginClick}
            >Login</button>

            <Signup />
        </div>
        );
    }
}

export default Login;
