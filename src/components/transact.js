import React, { Component } from 'react';
// import fillingTheInputElements from './js/socketinput';

class Transact extends Component {
  
    state={
        textcontent:'content'
    }

    fillingTheInputElements = (str) => {
        // let ele = document.querySelector(`.${element}`);
        // ele.textContent = str;
        this.setState({textcontent:"nitin"});
    }

    handleClick = ()=>{
        this.fillingTheInputElements("nitin");
        // this.setState({textcontent:"nitin"});
    }

  render() {
      return(
          <div>
              <h1>Transact</h1>
              <input id="textbox1" value={this.state.textcontent}/>
              <input id="textbox2" type="text"/>
              <button onClick={this.handleClick}>yoyo</button>
          </div>
      )
  }
}

export default Transact;
