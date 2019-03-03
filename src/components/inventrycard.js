import React, { Component } from 'react';


// import lib from './userweb3';

// import web3 from './integration';


class InventryCard extends Component {

  render() {
    return (
      <div className="conatainer" style={this.style}>
        <div className="card container">
        <h3 align="center">{this.props.x}</h3>
        <div className="row">
        <p className="col-sm-3" align="right">Weight :</p>
        <p className="col-sm-4" align="left">{this.props.weight}</p>
        </div>
        <div className="row">
        <p className="col-sm-3" align="right">Mfg date :</p>
        <p className="col-sm-4" align="left">{+this.props.mfd}</p>
        </div>
        <div className="row">
        <p className="col-sm-3" align="right">exp date :</p>
        <p className="col-sm-4" align="left">{+this.props.exp}</p>
        </div>
        <div className="row">
        <p className="col-sm-3" align="right">type :</p>
        <p className="col-sm-4" align="left">{(this.props.type)?"Packet":"Container"}</p>
        </div>
        <br/>
        
      </div>
      <br/>

      </div>
    );
  }
}

export default InventryCard;
