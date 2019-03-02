import React, { Component } from 'react';
import { navigate } from '@reach/router';
// import {Router} from "@reach/router";
// import './css/signupcard1.css';
import lib from './../userweb3';
import web3 from './../web3';
console.log(web3);




class Signup extends Component {

    constructor(props){
        super(props);

        this.state = {
            username:"",
            email:"",
            phoneno:0,
            access:""

        }
    }     

  

    componentDidMount=async ()=>{
       
    }

    // generaterandomno = ()=>{
    //     const min=1000; 
    //     const max=9999;  
    //     let random =Math.floor(Math.random() * (+max - +min)) + +min; 
    //     return random;  
    // }



    handleNameOnChange = (event)=>{
        this.setState({username:event.target.value})
    }

    handleEmailOnChange = (event)=>{
        this.setState({email:event.target.value})
    }

    // handleOtpOnChange = (event) =>{
    //     this.setState({otp:event.target.value})
    // }

    handleJoinClick = ()=>{
        console.log(this.state.username);
        console.log(this.state.email);
        console.log(this.state.access);

        //web3 create user function call............
        web3.eth.getAccounts().then((d)=>{
            lib.init(d[0]).signUp(this.state.username, this.state.access==="manufactorer", this.state.phoneno, this.state.email)
            .then(c=>console.log).catch(err=>{console.log(err)});
        });



        navigate(`/userpage/${this.state.email}/${this.state.username}`)
    }

    handleInputClick1 = () =>{
        this.setState({access:"manufactorer"})
    }

    handleInputClick2 = () =>{
        this.setState({access:"seller"})
    }
    render() {
        return (
        <div>
            <div className="signupSection">
		        <form  className="signupForm" name="signupform">
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
                            <label htmlFor="phone number"></label>
		                    <input type="text" className="inputFields" id="phoneno" name="email" placeholder="phonenumber" onChange={this.handlePhoneNoOnChange} required/>
                        </li>
                        <div>
                            <li>
                                <input onClick={this.handleInputClick1} type="radio" id="manufactorer" name="access" value="manufactorer" />             
                                <label for="manufactorer">Manufactorer</label>                
                            </li>
                            <li>
                                <input onClick={this.hanleInputClick2} type="radio" id="seller" name="access" value="seller"/>             
                                <label for="seller">Seller</label>                
                            </li>
                        </div>
		                <li id="center-btn">
		                    <input id="join-btn" value="Join" onClick={this.handleJoinClick} />
		                </li>
		            </ul>
		        </form>            
		    </div>
                
        </div>
        );
    }
}

export default Signup;
