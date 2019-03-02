import React, { Component } from 'react';
// import { navigate } from '@reach/router';
// import {Router,Link} from "@reach/router";
import Home from './home';
import passwordHash from 'password-hash';
// import passwordHashverify from './lib/password-hash';
var yit="Enter your unique 4 digit otp sent to your registered email";
class Userpage extends Component {

    constructor(props){
        super(props)

        this.state={
            otp:0,
            correctotp:0,
            url:'',
            urllen:0,
            loggedin:false,
            access:true,
            status:yit,
            pointed:false
        }
    }


    //http request to post otp....
    httppostotp=(otp)=>{
        const invocation = new XMLHttpRequest();
        const url = 'http://172.16.0.111:3400/sendotp';
        if(invocation)
        
            {
                console.log("Hello");

            invocation.open('POST', url, true);

            invocation.setRequestHeader('X-PINGOTHER', 'pingpong');
            invocation.setRequestHeader('Access-Control-Allow-Origin', 'http://192.168.43.74:3400/');
            invocation.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
            invocation.onreadystatechange = function() {
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
        // let email = this.state.email;
        let email = window.location.href.split('/')[urllen-2];
        //hashing the password
        var hashedPassword = passwordHash.generate(String(otp));
        console.log(hashedPassword);
        console.log(otp);
        
        //calling http request to send otp
        let arg = {otp:otp,email}
        console.log(arg);
        this.httppostotp(JSON.stringify(arg));

        //getting ismanager boolean call
        let boolman = false;


        this.setState({
            correctotp:hashedPassword,
            url:url,
            urllen,
            access:boolman
        })
    }

    generaterandomno = ()=>{
        const min=1000; 
        const max=9999;  
        let random =Math.floor(Math.random() * (+max - +min)) + +min; 
        return random;  
    }

    handleSubmitClick = () => {
        // var hashedInput = passwordHash.generate(String(this.state.otp));
        // console.log(hashedInput);
        console.log(String(this.state.otp).length);
        let hashedCorrect = this.state.correctotp;
        if(String(this.state.otp).length>=4){
           if(!this.state.pointed){
            this.setState({status:"invalid otp",pointed:true});       
           }
        }else if(String(this.state.otp.length)<4){
                this.setState({status:yit,pointed:true});
            
        }
        console.log(passwordHash.verify(String(this.state.otp), hashedCorrect));
        if( passwordHash.verify(String(this.state.otp), hashedCorrect)){
            console.log("success");
            //navigate(`/home/${this.state.url[this.state.urllen-1]}`);
            this.setState({loggedin:true})
        }
    }

    onOtpFieldChange = (event) => {
        this.setState({otp:+event.target.value})
    }

    render = () => { 
        if(this.state.loggedin===false)
            this.handleSubmitClick();

        console.log(this.state.otp)
        if(this.state.loggedin===false){
            return (
                <div>
                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="wrap boldfont padd text-center white"> <i className="fas fa-seedling"></i> Seed <i id="rotate" className="fas fa-link"></i>
                            Chain</h3>
                        </div>
                    </div>
                    <div className="hvcenter extend70">   
                        <h3 className="text-center boldfont resetletter">Welcome back ! {this.state.url[this.state.urllen-1]}</h3>
                        <br/>
                    <div className="form-group">
                        <input onChange={this.onOtpFieldChange} type="text" className="form-control text-center" id="exampleInputEmail1" aria-describedby="emailHelp"
                            placeholder="otp"/>
                    </div>
                    <small id="emailHelp" className="form-text text-muted text-center">{this.state.status}</small>
                </div>
            </div>
                );
        }

        if(this.state.loggedin===true){
            return(
                <div>
                    <Home isman={this.state.access} userid={this.state.url[this.state.urllen-1]}/>
                </div>
            )
        }
    }
}

export default Userpage;
