import React, { Component } from 'react';
import {Router} from "@reach/router";
import Login from './components/login';
import Userpage from './components/userpage';
import Signup from './components/signup';
import Home from './components/home';
import './App.css';
import web3 from './integration';


class App extends Component {
  
  // componentDidMount(){
    // console.log(web3.user.methods.v.call().catch((err)=>console.log(err)));
  // }

  render() {
    return (
      <div className="App">
        <Router>
          <Login path="/" />
          <Userpage path="/userpage/:id/:id"/>
          <Signup path="/signup"/>
          <Home path='/home/:id'/>
        </Router>
      </div>
    );
  }
}

export default App;
