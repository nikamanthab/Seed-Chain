import React, { Component } from 'react';

class BatchComp extends Component {

    componentDidMount = ()=>{



        
        var dummy = document.querySelector(".dummy");
        var para = document.createElement("p");
        para.textContent="nitin";
        dummy.appendChild(para);

    }
    
  render() {
    return (
      <div class="dummy">
        
      </div>
    );
  }
}

export default BatchComp;
