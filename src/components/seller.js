import React, { Component } from 'react';
import {Router} from "@reach/router";
import Slideout from 'slideout';
import { navigate } from '@reach/router';
import HomeContainer from './homecontainer';

class Seller extends Component {

    //state variables
  state={
    link:1
  }

  //styles
  button={
    width:"100%"
  }

  menumystyle={
    background:"yellow"
  }

  style={
    transform: "translateX(256px)"
  }
  
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
    let url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${email}-${uname}-verifieduser`;
    console.log(url);

    return (
      <div>
        <div>
            {/* style={this.display} */}
            {/* } */}
            <nav id="menu"  style={{overflow:"hidden"}}>
                <header>
                </header>
                <img src={url}></img>
                <button onClick={this.handleLink3click} styel={this.button}>Inventry</button>
                <button onClick={this.handleLink4click} styel={this.button}>Transact</button>
                <button onClick={this.handleLink5click} styel={this.button}>Track</button>
                

                <button onClick={this.handleLogOutButton} style={this.button}>Logout</button>
            </nav>
            {/* style={this.style} */}
            <main id="panel" className = "panelfix">
            <header>
            <button className="toggle-button" onClick={this.handleham}>☰</button>
            </header>
            <HomeContainer link={this.state.link}/>
            </main>
        </div>
      </div>
    );
  }
}

export default Seller;
