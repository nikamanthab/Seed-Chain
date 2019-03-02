import React, { Component } from 'react';
// import './css/home.css';
// import './../slideout-master/dist/slideout';
import Slideout from 'slideout';
import './css/home.css';
import HomeContainer from './homecontainer';
import { navigate } from '@reach/router';
// import MenuContainer from './menucontainer';
import Manager from './manager';
import Seller from './seller';

console.log(Slideout);


class Home extends Component {

  render() {
    console.log(this.props.isman);
    if(this.props.isman){
      return(
        <div>
          <Manager/>
        </div>
      )
    }
    else{
      return(
        <div>
          <Seller/>
        </div>
      )
    }
  }  
}

export default Home;
