import React, { Component } from 'react';
import web3init from './../web3init';
import InventryCard from './inventrycard';

class BatchComp extends Component {

    state={
        n:[],
        arr:[]

    }
    componentDidMount(){
       
        
        web3init().then((api)=>{
            
            console.log(api.account);
            return api.listInventory();
        }).then((data)=>{
            console.log("hmmm",Array.isArray(data));
            console.log(data);
            this.setState({n:data});
        }).catch(err=>{console.log(err)});
        var result=[];

        Array.from(document.querySelectorAll(".check")).forEach((data)=>{
            data.addEventListener("click",function(){
                result.push(data.parent.id);
                console.log(result);
            });
        });

        

    }
    // componentDidMount = ()=>{
        
    //     var dummy = document.querySelector(".dummy");
    //     var para = document.createElement("p");
    //     para.textContent="nitin";
    //     dummy.appendChild(para);

    // }
    handleClick=(e)=>{
        let a = this.state.arr;
        a.push(e.target.id); 
        console.log(a);
        this.setState({arr:a});
        // console.log(this.state.arr);

    }

    handleBatch = ()=>{
        web3init().then((api)=>{
            api.createBatch(this.state.arr,false,"",0,0,0).then((d)=>{
                console.log(d)
            })
        })
    }

    handleFinalize = ()=>{
        web3init().then((api)=>{
            api.finalize(this.state.arr).then(()=>{
                console.log("finalized")
            })
        })
    }

  render() {
    let names = this.state.n;
    let address=names[names.length-1];
    names=names.slice(0,names.length-1);
    //   console.log("arrrr",arr)
      console.log(names["0"],names.length)
      return(
          <div>
              <h1>Batch</h1>
              <div>
              {
                  names.map((val,i)=>{
                      return(
                          <div >
                          <InventryCard  x={names[i][0]} weight={names[i][1]} mfd={names[i][2]} exp={names[i][3]} type={names[i][4]}/>
                          <input onClick={this.handleClick} id={address[i]} type="checkbox"  className="check" />
                            </div>
                       )
                  })
              }
            </div>
            <button onClick={this.handleBatch}>Batch</button>
            <button onClick={this.handleFinalize}>Finalize</button>
          </div>
      )
  }
}

export default BatchComp;
