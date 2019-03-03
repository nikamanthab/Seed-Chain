import React, { Component } from 'react';
import {Router} from "@reach/router";
import Slideout from 'slideout';
import { navigate } from '@reach/router';
import HomeContainer from './homecontainer';
import web3init from './../web3init';

class Manager extends Component {

    //state variables
  state={
    link:1,
    accountid:""
  }

  //styles
  button={
    width:"100%"
  }

  menumystyle={
    background:"yellow"
  }

  // style={
  //   transform: "translateX(256px)"
  //   `margin-right: 256px` 
  // }
  
  display={
    display:"block",
    overflow:"hidden"
  }
  componentDidMount() {
    this.slideout = new Slideout({
      'panel': document.getElementById('panel'),
      'menu': document.getElementById('menu'),
      'padding': 256,
      'tolerance': 70
    });
  
    if(window.innerWidth>768)
    {
      document.querySelector(".toggle-button").style.display="none";
      this.slideout.open();
    }

    web3init().then((api)=>{
      return (api.account);
    }).then((data)=>{this.setState({accountid:data})});
 
  }

  handleham=()=>{
    this.slideout.toggle();
  }

  handleLink1click = () =>{
    this.setState({link:1})
  }

  handleLink2click = () =>{
    this.setState({link:2})
  }
  
  handleLink3click = () =>{
    this.setState({link:3})
  }

  handleLink4click = () =>{
    this.setState({link:4})
  }

  handleLink5click = () =>{
      this.setState({link:5})
  }

  handleLogOutButton = () =>{
    navigate('/');
  }

  render() {
    
    let urllen = window.location.href.split('/').length;
    let email = window.location.href.split('/')[urllen-2];
    let uname = window.location.href.split('/')[urllen-1];
    console.log("aaaaaa",this.state.accountid);
    let url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${this.state.accountid}-${uname}-verifieduser`;
    console.log(url);
    return (
      <div>
            {/* style={this.display} */}
            {/* } */}
            <nav id="menu"  style={{overflow:"hidden"}}>
                <header>

                </header>
                <br/>
                <div className="container">
                <div className="row" align="center">
                 <img src={url}></img>
                </div>
                <div className="row">
                <button onClick={this.handleLink1click} style={this.button}>Produce</button>
                </div>
                <div className="row">
                <button onClick={this.handleLink2click} style={this.button}>Batch</button>
                </div>
                <div className="row">
                <button onClick={this.handleLink3click} style={this.button}>Inventry</button>
                </div>
                <div className="row">
                <button onClick={this.handleLink4click} style={this.button}>Transact</button>
                </div>
                <div className="row">
                <button onClick={this.handleLink5click} style={this.button}>Track</button>
                </div>
                
                <div className="row">
                <button className="align-bottom" onClick={this.handleLogOutButton} style={this.button}>Logout</button>
                </div>
                </div>
            </nav>
            {/* style={this.style} */}
            <main id="panel" >
            <header>
            <button className="toggle-button" onClick={this.handleham}>☰</button>
            </header>
            <HomeContainer link={this.state.link}/>
            </main>
      </div>
    );
  }
}

export default Manager;
