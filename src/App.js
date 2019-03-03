import React, { Component } from 'react';
import {Router} from "@reach/router";
import Login from './components/login';
import Userpage from './components/userpage';
import Signup from './components/signup';
import Home from './components/home';
import './App.css';

// import './components/css/all.css';
import 'bootstrap/dist/css/bootstrap.css';
import lib from './userweb3';

import web3 from './integration';
// let account;
// let library;
// (async function(){
//   var x = await web3.eth.getAccount();
//   library=lib.init(account);
//   console.log(library);
// })();
import Producemodule from './components/producemodule';
import Testing from './components/testing';
import InventryCard from './components/inventrycard';
import Inventry from './components/inventry';
import Usercard from './components/usercard';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Login path="/" />
          <Userpage path="/userpage/:id/:id"/>
          <Signup path="/signup"/>
          <Home path='/home/:id'/>
          <Producemodule path='/testingprod'/>
          <Inventry path="/testing"/>
          <Usercard path="/usercardtest"/>
        </Router>
      </div>
    );
  }
}

export default App;
