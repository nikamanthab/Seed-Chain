import React, { Component } from 'react';
// import fillingTheInputElements from './js/socketinput';

class Transact extends Component {
  
    constructor(props){
        super(props);

        this.state={
            sender:"",
            receiver:"",
            productid:""
        }
    }

    handleSenderOnChange = (event)=>{
        this.setState({sender:event.target.value})
    }

    handleReceiverOnChange = (event)=>{
        this.setState({receiver:event.target.value})
    }

    handleProductidOnChange = (event)=>{
        this.setState({productid:event.target.value})
    }

    // fillingTheInputElements = (str) => {
    //     // let ele = document.querySelector(`.${element}`);
    //     // ele.textContent = str;
    //     this.setState({textcontent:"nitin"});
    // }

    handleClick = ()=>{
        // this.fillingTheInputElements("nitin");
        // this.setState({textcontent:"nitin"});
        
    }

  render() {
      return(
          <div className="container">
              <h1>Transact</h1>
              <ul className="noBullet">
                  <li>
                        <label htmlFor="sender"></label>
                        <input type="text" className="form-control" id="sender" name="" placeholder="sender" onChange={this.handleSenderOnChange} required/>
                  </li>
                  <li>
                            <label htmlFor="receiver"></label>
                            <input type="text" className="form-control" id="receiver" name="receiver" placeholder="receiver" onChange={this.handleReceiverOnChange} required/>
                  </li>
                  <li>
                            <label htmlFor="productid"></label>
                            <input type="text" className="form-control" id="productid" name="productid" placeholder="productid" onChange={this.handleProductidOnChange} required/>
                 </li>
                 <br/>
              {/* <button onClick={this.handleClick}>yoyo</button> */}
                 <li id="center-btn" align="center">
                         <input  className="btn wrap primaryfont extend white" value="Submit" onClick={this.handleJoinClick} />
                 </li>
            </ul>
            <br/>
            <div className="card container shadow-sm bold medfont">
                enter content here
            </div>
          </div>
         
      );
  }
}

export default Transact;

