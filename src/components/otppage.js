import React, { Component } from 'react';
import { navigate } from '@reach/router';
// import {Router,Link} from "@reach/router";

class Userpage extends Component {

    constructor(props){
        super(props)

        this.state={
            otp:0,
            correctotp:0,
            url:'',
            urllen:0,
            loggedin:false,
            email:"nitinnikamanth@gmail.com"
        }
    }


    //http request to post otp....
    
        
    httppostotp=(otp)=>{
        const invocation = new XMLHttpRequest();
        const url = 'http://192.168.43.74:3400/sendotp';
        if(invocation)
        
            {
                console.log("Hello");

            invocation.open('POST', url, true);

            invocation.setRequestHeader('X-PINGOTHER', 'pingpong');
            invocation.setRequestHeader('Access-Control-Allow-Origin', 'http://192.168.43.74:3400/');
            invocation.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
            invocation.onreadystatechange = function() {
                if(this.readyState==2){
                    console.log("helloefjekfj");
                }
                if(this.readyState==3){
                    console.log("hello9999");
                }
                if(this.readyState==1){
                    console.log("hello");
                }
                      if (this.readyState === 4 && this.status === 200) {
                        // document.getElementById("demo").innerHTML = this.responseText;
                        console.log(this.responseText);
                      };
            }
            invocation.send(otp);
        }
        else{console.log("hmmmmmmmm")}
    }
    // httppostotp = (otp) => {
    //     var xhttp = new XMLHttpRequest();
    //     xhttp.onreadystatechange = function() {
    //       if (this.readyState === 4 && this.status === 200) {
    //         // document.getElementById("demo").innerHTML = this.responseText;
    //         console.log(this.responseText);
    //       }
    //     };
    //     xhttp.open("POST", "http://192.168.43.74:3400/sendotp", true);
    //     xhttp.setRequestHeader("Content-type", "application/json");
    //     xhttp.send(otp);
    //   }

    componentDidMount=()=>{
        let otp = this.generaterandomno();
        let url = window.location.href.split('/');
        let urllen = url.length;
        let email = this.state.email;
        let arg = {otp,email}
        console.log(arg);
        
        //calling http request to send otp
        this.httppostotp(JSON.stringify(arg));

        this.setState({
            correctotp:+otp,
            url:url,
            urllen
        })
    }

    generaterandomno = ()=>{
        const min=1000; 
        const max=9999;  
        let random =Math.floor(Math.random() * (+max - +min)) + +min; 
        return random;  
    }

    handleSubmitClick = () => {
        if(this.state.correctotp === this.state.otp){
            console.log("success");
            navigate(`/home/${this.state.url[this.state.urllen-1]}`);
            // this.setState({loggedin:true})
        }
    }

    onOtpFieldChange = (event) => {
        this.setState({otp:+event.target.value})
    }

    render = () => { 
        console.log(this.state.otp)
        if(this.state.loggedin===false){
            return (
                <div>
                    <h1>userpage</h1>
                    <h2>
                        Welcome back {this.state.url[this.state.urllen-1]}
                    </h2>
                    <input type="text" onChange={this.onOtpFieldChange}/>
                    <button onClick={this.handleSubmitClick}>Submit</button>
                </div>
                );
        }
        // else{
        //     return(
        //         <div >
        //              hmmmm
       //         </div>
        //     )
        // }
    }
}

export default Userpage;
