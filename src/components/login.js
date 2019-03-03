import React, { Component } from 'react';
import { navigate } from '@reach/router';
// import {Router,Link} from "@reach/router";
import Signup from './signup';
import web3init from './../web3init';

class Login extends Component {

    constructor(props){
        super(props);
        this.state={
            metamaskuser:"mohan",
            metamaskemail:'itsmohanpierce@gmail.com'
            // userid:''
          }
    }    

    handleLoginRouteChange = (email,uname)=>{
        //navigate(`/userpage/${this.state.metamaskemail}/${this.state.metamaskuser}`)
        navigate(`/userpage/${email}/${uname}`);
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
        web3init().then((api)=>{
            console.log(api.account);
            return api.getUserInfo(api.account)
        }).then((d)=>{
            console.log(d);
            this.handleLoginRouteChange(d[3],d[0]);
        }).catch((e)=>{
            console.log(e);
            alert("User not registered Please signup first !!");
        })
        
        // web3.eth.getAccounts().then((d)=>{
        //     lib.init(d[0]).signUp(this.state.username, this.state.access==="manufactorer", this.state.phoneno, this.state.email)
        //     .then(c=>{
        //         console.log("success");
        //         console.log(c);

        //         navigate(`/userpage/${this.state.email}/${this.state.username}`)
        //     }).catch(err=>{console.log(err)});

        // let web3libuser = "mohan"        
        // if(this.state.metamaskuser === web3libuser)
        //     this.handleLoginRouteChange();
    }

    handleSignupClick = ()=>{
        navigate('/signup');
    }

    render() {
        return (
        // <div>
        //     <h1>Login page</h1>
        //     {/* <input type="text" 
        //     onChange={this.handleUserIdChange}
        //     /> */}
        //     <button 
        //      onClick={this.handleLoginClick}
        //     >Login</button>

        //     <Signup />
        // </div>
        <div>
 <div className="row">
        <div className="col-sm-12">
            <h3 className="wrap boldfont padd text-center white"> <i className="fas fa-seedling"></i> Seed <i id="rotate" className="fas fa-link"></i>
                Chain</h3>
        </div>
 </div>
    <div className="container">
        <div className="row">
            <div className="col-sm-6">
                <br/><br/><br/><br/> <br/><br/><br/><br/>
                <h3 className="boldfont padd  text-center resetletter">Already a seller or a manufacturer ?</h3>
                <button onClick={this.handleLoginClick} className="btn wrap primaryfont extend white">Log in</button>
            </div>
            <div className="col-sm-6 paddfix">
                <br/><br/><br/>

                <Signup />
            </div>
        </div>
    </div>
<footer className="footer">
    <p className="text-center  white wrap primaryfont">&copy; Seed Chain 2019 - Bytemechanics @ NONCE</p>
</footer>
      </div>     

        );
    }
}

export default Login;
