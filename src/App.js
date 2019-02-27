import React, { Component } from 'react';
import {Router} from "@reach/router";
import Login from './components/login';
import Userpage from './components/otppage';
import Signup from './components/signup';
import Home from './components/home';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Router>
          <Login path="/" />
          <Userpage path="/userpage/:id"/>
          <Signup path="/signup"/>
          <Home path='/home/:id'/>
        </Router>
      </div>
    );
  }
}

export default App;
