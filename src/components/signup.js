import React, { Component } from 'react';
import { navigate } from '@reach/router';
// import {Router} from "@reach/router";
// import './css/signupcard1.css';
import web3init from './../web3init';





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

  

    // componentDidMount=async ()=>{
       
    // }

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

    handlePhoneNoOnChange = (event)=>{
        this.setState({phoneno:event.target.value})
    }

    // handleOtpOnChange = (event) =>{
    //     this.setState({otp:event.target.value})
    // }

    handleJoinClick = ()=>{
        console.log(this.state.username);
        console.log(this.state.email);
        console.log(this.state.access);
        // navigate(`/userpage/itsmohanpierce@gmail.com/mohan`)
web3init().then((api)=>{
    console.log(api);
    api.signUp(this.state.username, this.state.access==="manufactorer", this.state.phoneno, this.state.email)
    .then(c=>{
        alert("Successfully signedup");
        navigate(`/userpage/${this.state.email}/${this.state.username}`)
    }).catch(err=>{console.log(err)});
})
        // //web3 create user function call............
        // web3.eth.getAccounts().then((d)=>{
        //     lib.init(d[0])
        // });



        
    }

    handleInputClick1 = () =>{
        this.setState({access:"manufactorer"})
    }

    handleInputClick2 = () =>{
        this.setState({access:"seller"})
    }
    render() {
        return (
        // <div>
        //     <div className="signupSection">
		//         <form  className="signupForm" name="signupform">
		//             <h2>Sign Up</h2>
		//             <ul className="noBullet">
		//                 <li>
		//                     <label htmlFor="username"></label>
		//                     <input type="text" className="inputFields" id="username" name="username" placeholder="Username" onChange={this.handleNameOnChange} required/>
		//                 </li>
		//                 <li>
		//                     <label htmlFor="email"></label>
		//                     <input type="text" className="inputFields" id="email" name="email" placeholder="Email" onChange={this.handleEmailOnChange} required/>
		//                 </li>
        //                 <li>
        //                     <label htmlFor="phone number"></label>
		//                     <input type="text" className="inputFields" id="phoneno" name="email" placeholder="phonenumber" onChange={this.handlePhoneNoOnChange} required/>
        //                 </li>
        //                 <div>
        //                     <li>
        //                         <input onClick={this.handleInputClick1} type="radio" id="manufactorer" name="access" value="manufactorer" />             
        //                         <label for="manufactorer">Manufactorer</label>                
        //                     </li>
        //                     <li>
        //                         <input onClick={this.hanleInputClick2} type="radio" id="seller" name="access" value="seller"/>             
        //                         <label for="seller">Seller</label>                
        //                     </li>
        //                 </div>
		//                 <li id="center-btn">
		//                     <input id="join-btn" value="Join" onClick={this.handleJoinClick} />
		//                 </li>
		//             </ul>
		//         </form>            
		//     </div>
                
        // </div>

        <div>
        <h3 className="text-center boldfont resetletter">Become a part of SeedChain ! </h3>
        <div>
            <div className="form-group">
                <div className="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input onChange={this.handleNameOnChange} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="Name"/>
                </div>
                <label for="exampleInputEmail1">Email address</label>
                <input onChange={this.handleEmailOnChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                    else.</small>
                </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Phone number</label>
                <input onChange={this.handlePhoneNoOnChange} type="text" className="form-control" id="exampleInputPhone1" placeholder="Enter your 10 digit mobile no"/>
            </div>

            <div className="flexit">
                <div className="form-check">
                    <input onClick={this.handleInputClick1} type="radio" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Manufacturer</label>
                </div>
                <div className="form-check">
                    <input onClick={this.hanleInputClick2} type="radio" className="form-check-input" id="exampleCheck2"/>
                    <label className="form-check-label" for="exampleCheck2">Seller</label>
                </div>
            </div>
            <br/>
            <button onClick={this.handleJoinClick} type="submit" className="btn wrap white extend">Submit</button>
        </div>
        </div>
        );
    }
}

export default Signup;
