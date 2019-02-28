import React, { Component } from 'react';
import Transact from './transact';
import Inventry from './inventry';

class App extends Component {
  
  render() {
      let page = this.props.link;
      console.log(page);

    if(page === 1){
        return (
            <Transact/>
          );
    }

    else if(page === 2){
        return (
            <Inventry/>
          );
    }

    else if(page === 3){
        return (
            <div>
              Hello world {page}
            </div>
          );
    }
   
  }
}

export default App;
