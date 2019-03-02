import React, { Component } from 'react';
import Transact from './transact';
import Inventry from './inventry';
// import Batchpage from './batch';
import Produce from './produce';
import Track from './track'

class App extends Component {
  
  render() {
      let page = this.props.link;
      console.log(page);

    if(page === 1){
        return (
            <Produce/>
          );
    }

    else if(page === 2){
        return (
            // <Batch/>
            <div>batch</div>
          );
    }

    else if(page === 3){
      return (
          <Inventry/>
        );
  }

  else if(page === 4){
    return (
        <Transact/>
      );
    }

  else if(page === 5){
    return (
        <Track/>
      );
    }
  }
}

export default App;