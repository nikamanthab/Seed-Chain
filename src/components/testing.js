import React, { Component } from 'react';


class Testing extends Component {

  render() {
      let n=[1,2,3,4];
    return (
      <div>
        {
            n.map((val)=>{
                return(
                    <h1>{val}</h1>
                )
            })
        }
      </div>
    );
  }
}

export default Testing;
