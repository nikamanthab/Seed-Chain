import React, { Component } from 'react';


// import lib from './userweb3';

// import web3 from './integration';


class InventryCard extends Component {

    state = {
        name:"watermelon",
        weight:"25",
        date:new Date(),
        expd:new Date(),
        address:"1234"
    }

  render() {
    return (
      <div className="conatainer" style={this.style}>
        <div className="card container">
        <h3 align="center">{this.props.name}</h3>
        <div className="row">
        <p className="col-sm-3" align="right">Weight :</p>
        <p className="col-sm-4" align="left">{this.state.weight}</p>
        </div>
        <div className="row">
        <p className="col-sm-3" align="right">Mfg date :</p>
        <p className="col-sm-4" align="left">{+this.state.date}</p>
        </div>
        <div className="row">
        <p className="col-sm-3" align="right">exp date :</p>
        <p className="col-sm-4" align="left">{+this.state.expd}</p>
        </div>
        <div className="row">
        <p className="col-sm-3" align="right">address :</p>
        <p className="col-sm-4" align="left">{this.state.address}</p>
        </div>
        <div id   ="center-btn" align="center">
        <button className="btn wrap primaryfont extend white" onClick={this.props.handleTrackButton}>track</button>
        </div>
        <br/>
        
      </div>
      <br/>

      </div>
    );
  }
}

export default InventryCard;
