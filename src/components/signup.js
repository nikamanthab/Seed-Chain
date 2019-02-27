import React, { Component } from 'react';
// import {Router} from "@reach/router";
import './css/signupcard1.css';
class Signup extends Component {

    constructor(props){
        super(props);

        this.state = {
            username:"",
            email:"",
            correctotp:0,
            otp:0
        }
    }     



    componentDidMount=()=>{
        let randomno = this.generaterandomno();
        console.log(randomno);
        this.setState({
            correctotp:+randomno
        })
    }

    generaterandomno = ()=>{
        const min=1000; 
        const max=9999;  
        let random =Math.floor(Math.random() * (+max - +min)) + +min; 
        return random;  
    }



    handleNameOnChange = (event)=>{
        this.setState({username:event.target.value})
    }

    handleEmailOnChange = (event)=>{
        this.setState({email:event.target.value})
    }

    handleOtpOnChange = (event) =>{
        this.setState({otp:event.target.value})
    }

    handleJoinClick = ()=>{
        console.log(this.state.username);
        console.log(this.state.email);
        console.log(this.state.otp);
    }

    
    render() {
        return (
        <div>
            <div className="signupSection">
                <div className="info">
                <h2>Seed Chain</h2>
                <img src="https://seeklogo.com/images/B/blockchain-logo-A0FE252BA6-seeklogo.com.png" height="250" width="200" alt="img"></img>
                <p>Blockless blockchain for farmers</p>
                </div>
                <form /*action="#" method="POST"*/ className="signupForm" name="signupform">
                <h2>Sign Up</h2>
                <ul className="noBullet">
                    <li>
                    <label htmlFor="username"></label>
                    <input type="text" className="inputFields" id="username" name="username" placeholder="Username" onChange={this.handleNameOnChange} required/>
                    </li>
                    <li>
                    <label htmlFor="email"></label>
                    <input type="text" className="inputFields" id="email" name="email" placeholder="Email" onChange={this.handleEmailOnChange} required/>
                    </li>
                    <li>
                    <label htmlFor="otp"></label>
                    <input type="text" className="inputFields" id="otp" name="otp" placeholder="otp" onChange={this.handleOtpOnChange} required/>
                    </li>
                    <li id="center-btn">
                    <input /*type="submit"*/ id="join-btn" name="join" alt="Join" value="Join" onClick={this.handleJoinClick} />
                    </li>
                </ul>
                </form>
            </div>
                
        </div>
        );
    }
}

export default Signup;
